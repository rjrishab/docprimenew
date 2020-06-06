exports.ids = [70];
exports.modules = {

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(/*! ../../commons/labProfileCard/index.js */ "./dev/js/components/diagnosis/commons/labProfileCard/index.js");

var _index2 = _interopRequireDefault(_index);

var _reactInfiniteScroller = __webpack_require__(/*! react-infinite-scroller */ "react-infinite-scroller");

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

class LabsList extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasMore: false,
            loading: false,
            renderBlock: false,
            page: 0,
            is_insured: props.filterCriteria && props.filterCriteria.is_insured ? props.filterCriteria.is_insured : false,
            avg_ratings: ''
        };
    }

    bookNow(test_data) {
        let test = {};
        test.id = test_data.id;
        test.name = test_data.name;
        test.type = 'test';
        this.props.toggleDiagnosisCriteria('test', test, true);

        setTimeout(() => {
            this.props.history.push('/lab/searchresults');
        }, 100);
    }

    render() {
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
                            this.props.labList && this.props.labList.all_categories && this.props.labList.all_categories.length ? this.props.labList.all_categories.map((data, i) => {
                                return _react2.default.createElement(
                                    'li',
                                    { key: i, id: data.lab_test_cat_id },
                                    _react2.default.createElement(
                                        'h4',
                                        { className: 'lab-crd-hdng' },
                                        data.lab_test_cat_name
                                    ),
                                    data.lab_test_tests && data.lab_test_tests.length ? data.lab_test_tests.map((test_data, k) => {
                                        return _react2.default.createElement(
                                            'div',
                                            { className: 'cstm-docCard mb-3', key: k, id: test_data.id, onClick: this.bookNow.bind(this, test_data) },
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
                                                            { className: 'cstm-book-btn', onClick: this.bookNow.bind(this, test_data) },
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
}

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

var _react = __webpack_require__(/*! react */ "react");

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

const queryString = __webpack_require__(/*! query-string */ "query-string");

class SearchResultsView extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    resetQuickFilters() {
        this.setState({ quickFilter: {} });
    }

    render() {
        let show_pagination = this.props.labList && this.props.labList.length > 0;
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

        // check if this was the landing page
        let landing_page = false;
        if (typeof window == 'object' && window.ON_LANDING_PAGE) {
            landing_page = true;
        }
        let count = 0;
        if (this.props.labList && this.props.labList.all_categories && this.props.labList.all_categories.length) {
            this.props.labList.all_categories.map((data, i) => {
                count += parseInt(data['No_of_tests']);
            });
        }

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('div', { id: 'map', style: { display: 'none' } }),
            _react2.default.createElement(_HelmetTags2.default, { tagsData: {
                    canonicalUrl: `${_config2.default.API_BASE_URL}${this.props.match.url}${page}`,
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
}

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
    }

    componentWillReceiveProps(props) {

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

    componentDidMount() {
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

    overlayClick() {
        this.setState({ overlayVisible: false, searchCities: [], showLocationPopup: false });
    }

    hideLocationPopup() {
        this.setState({ showLocationPopup: false });
    }

    popupContainer() {
        this.setState({ showPopupContainer: false, showLocationPopup: false });
    }

    goToLocation() {
        this.setState({
            searchCities: []
        });
        /*let redirect_to = ""
        if (window.location.pathname.includes('lbcit') || window.location.pathname.includes('lblitcit')) {
            redirect_to = "/lab/searchresults"
        }
        */
        let location_url = '/locationsearch';
        /*        if (redirect_to) {
                    location_url += `?redirect_to=${redirect_to}`
                }
        */
        let data = {
            'Category': 'ChangeLocationDoctorResultsPopUp', 'Action': 'change-location-doctor-results-PopUp', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'change-location-doctor-results-PopUp', 'url': window.location.pathname
        };
        _gtm2.default.sendEvent({ data: data });
        this.props.history.push(location_url);
    }

    render() {

        let criteriaStr = this.props.labList ? this.props.labList.title : '';
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
                                        ` in ${locationName}`,
                                        _react2.default.createElement('img', { style: { width: '11px', height: '15px', marginLeft: '7px' }, src: "/assets" + "/img/customer-icons/edit.svg" })
                                    ) : ''
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TopBar extends _react2.default.Component {
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
            showPopupContainer: true
            // sortText: 'Relevance'
        };
    }

    componentWillReceiveProps(props) {
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

    componentDidMount() {
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
        this.setState({ overlayVisible: false, searchCities: [] });
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

    changeBtnClick() {
        let data = {
            'Category': 'ConsumerApp', 'Action': 'changeBtnOnLabCardClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'change-btn-on-lab-card-click'
        };
        _gtm2.default.sendEvent({ data: data });
        let selectedTests = [];
        if (this.props.currentSearchedCriterias.length) {
            for (var i = 0; i < this.props.currentSearchedCriterias.length; i++) {
                selectedTests.push(this.props.currentSearchedCriterias[i].id);
            }
        }
        this.props.history.push(`/locationsearch?lab_card=true&id=${selectedTests}`);
    }

    goToLocation() {
        this.setState({
            searchCities: []
        });
        /*let redirect_to = ""
        if (window.location.pathname.includes('lbcit') || window.location.pathname.includes('lblitcit')) {
            redirect_to = "/lab/searchresults"
        }
        */
        let location_url = '/locationsearch';
        /*        if (redirect_to) {
                    location_url += `?redirect_to=${redirect_to}`
                }
        */
        let data = {
            'Category': 'ChangeLocationDoctorResultsPopUp', 'Action': 'change-location-doctor-results-PopUp', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'change-location-doctor-results-PopUp', 'url': window.location.pathname
        };
        _gtm2.default.sendEvent({ data: data });
        this.props.history.push(location_url);
    }

    render() {

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
                                        ` in ${locationName}`
                                    ) : '',
                                    _react2.default.createElement('img', { style: { width: 15, height: 15, marginLeft: 7, cursor: 'pointer' }, src: "/assets" + "/img/customer-icons/edit.svg", onClick: this.goToLocation.bind(this) })
                                )
                            )
                        )
                    )
                ),
                this.state.showLocationPopup ? this.props.lab_card && this.state.showPopupContainer ? _react2.default.createElement(_locationPopup2.default, _extends({}, this.props, { onRef: ref => this.child = ref, resultType: 'list', isTopbar: true, hideLocationPopup: () => this.hideLocationPopup(), locationName: locationName, criteriaString: criteriaStr, popupContainer: () => this.popupContainer() })) : _react2.default.createElement(_locationElements2.default, _extends({}, this.props, { onRef: ref => this.child = ref, resultType: 'list', isTopbar: true, hideLocationPopup: () => this.hideLocationPopup(), locationName: locationName })) : '',
                this.state.showLocationPopup && this.state.overlayVisible && !this.props.lab_card ? _react2.default.createElement('div', { className: 'locationPopup-overlay', onClick: () => this.overlayClick() }) : '',
                this.state.showLocationPopup && this.props.lab_card && this.state.showPopupContainer ? _react2.default.createElement('div', { className: 'popupContainer-overlay' }) : ''
            )
        );
    }
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

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

class categoryTestResults extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    componentDidMount() {
        // this.props.loadOPDInsurance(this.props.selectedLocation)
        let searchUrl = null;
        if (this.props.match.url.includes('-tpcp')) {
            searchUrl = this.props.match.url.toLowerCase();
        }
        let page = 1;
        this.props.getTestCategoryList(null, page, false, searchUrl, resp => {
            if (resp) {
                this.setState({ data: resp });
            }
        });
    }

    render() {

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
}

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
        page,
        search_id_data,
        nextSelectedCriterias,
        currentSearchedCriterias,
        nextFilterCriteria,
        compare_packages
    } = state.SEARCH_CRITERIA_LABS;

    const {
        offerList
    } = state.USER;

    const LABS = state.LAB_SEARCH_DATA;
    const { show404, labList, LOADED_LABS_SEARCH, count, SET_FROM_SERVER, curr_page, seoData, test_data } = state.LAB_SEARCH;
    const { mergeUrlState, common_settings } = state.SEARCH_CRITERIA_OPD;

    const {
        is_login_user_insured,
        insurance_status,
        device_info
    } = state.USER;

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
        page,
        curr_page,
        search_id_data,
        nextSelectedCriterias,
        currentSearchedCriterias,
        nextFilterCriteria,
        seoData,
        mergeUrlState,
        test_data,
        show404,
        offerList,
        is_login_user_insured,
        compare_packages,
        insurance_status,
        device_info,
        common_settings
    };
};

const mapDispatchToProps = dispatch => {
    return {
        urlShortner: (url, cb) => dispatch((0, _index.urlShortner)(url, cb)),
        getTestCategoryList: (state, page, from_server, searchByUrl, cb) => dispatch((0, _index.getTestCategoryList)(state, page, from_server, searchByUrl, cb)),
        toggleDiagnosisCriteria: (type, criteria, forceAdd) => dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria, forceAdd)),
        getDiagnosisCriteriaResults: (searchString, callback) => dispatch((0, _index.getDiagnosisCriteriaResults)(searchString, callback)),
        clearExtraTests: () => dispatch((0, _index.clearExtraTests)()),
        mergeLABState: (state, fetchNewResults) => dispatch((0, _index.mergeLABState)(state, fetchNewResults)),
        getFooterData: url => dispatch((0, _index.getFooterData)(url)),
        setLabSearchId: (searchId, filters, setDefault) => dispatch((0, _index.setLabSearchId)(searchId, filters, setDefault)),
        getLabSearchIdResults: (searchId, searchResults) => dispatch((0, _index.getLabSearchIdResults)(searchId, searchResults)),
        selectSearchType: type => dispatch((0, _index.selectSearchType)(type)),
        toggle404: status => dispatch((0, _index.toggle404)(status)),
        selectLabTimeSLot: (slot, reschedule) => dispatch((0, _index.selectLabTimeSLot)(slot, reschedule)),
        getOfferList: (lat, long) => dispatch((0, _index.getOfferList)(lat, long)),
        toggleOPDCriteria: (type, criteria, forceAdd, filter) => dispatch((0, _index.toggleOPDCriteria)(type, criteria, forceAdd, filter)),
        selectLabAppointmentType: type => dispatch((0, _index.selectLabAppointmentType)(type)),
        resetPkgCompare: () => dispatch((0, _index.resetPkgCompare)()),
        loadOPDInsurance: city => dispatch((0, _index.loadOPDInsurance)(city))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(categoryTestResults);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvY2F0ZWdvcnlUZXN0UmVzdWx0cy9UZXN0Q2F0ZWdvcnlMaXN0L1Rlc3RDYXRlZ29yeUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL2NhdGVnb3J5VGVzdFJlc3VsdHMvY2F0ZWdvcnlUZXN0UmVzdWx0c1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL2NhdGVnb3J5VGVzdFJlc3VsdHMvbmV3VG9wQmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2RpYWdub3Npcy9jYXRlZ29yeVRlc3RSZXN1bHRzL25ld1RvcEJhci9uZXdUb3BCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL2NhdGVnb3J5VGVzdFJlc3VsdHMvdG9wQmFyL3Jlc3VsdF9jb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9kaWFnbm9zaXMvY2F0ZWdvcnlUZXN0UmVzdWx0cy5qcyJdLCJuYW1lcyI6WyJMYWJzTGlzdCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiaGFzTW9yZSIsImxvYWRpbmciLCJyZW5kZXJCbG9jayIsInBhZ2UiLCJpc19pbnN1cmVkIiwiZmlsdGVyQ3JpdGVyaWEiLCJhdmdfcmF0aW5ncyIsImJvb2tOb3ciLCJ0ZXN0X2RhdGEiLCJ0ZXN0IiwiaWQiLCJuYW1lIiwidHlwZSIsInRvZ2dsZURpYWdub3Npc0NyaXRlcmlhIiwic2V0VGltZW91dCIsImhpc3RvcnkiLCJwdXNoIiwicmVuZGVyIiwibGFiTGlzdCIsImFsbF9jYXRlZ29yaWVzIiwibGVuZ3RoIiwibWFwIiwiZGF0YSIsImkiLCJsYWJfdGVzdF9jYXRfaWQiLCJsYWJfdGVzdF9jYXRfbmFtZSIsImxhYl90ZXN0X3Rlc3RzIiwiayIsImJpbmQiLCJjdXJzb3IiLCJwYWRkaW5nQm90dG9tIiwiZm9udFNpemUiLCJjb3VudCIsImRlYWxfcHJpY2UiLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJTZWFyY2hSZXN1bHRzVmlldyIsInJlc2V0UXVpY2tGaWx0ZXJzIiwic2V0U3RhdGUiLCJxdWlja0ZpbHRlciIsInNob3dfcGFnaW5hdGlvbiIsInVybCIsIkNPTkZJRyIsIkFQSV9CQVNFX1VSTCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwiY3Vycl9wYWdlIiwicGFyc2VJbnQiLCJwcmV2IiwibmV4dCIsImxhbmRpbmdfcGFnZSIsIndpbmRvdyIsIk9OX0xBTkRJTkdfUEFHRSIsImRpc3BsYXkiLCJjYW5vbmljYWxVcmwiLCJtYXRjaCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJtZXRhX2Rlc2NyaXB0aW9uIiwiTE9BREVEX0xBQlNfU0VBUkNIIiwic2hvd0Vycm9yIiwibGFiX2NhcmQiLCJUb3BCYXIiLCJhbmNob3JFbCIsImRyb3Bkb3duX3Zpc2libGUiLCJwcmV2aW91c19maWx0ZXJzIiwic29ydF9vbiIsInNvcnRfb3JkZXIiLCJhdmFpbGFiaWxpdHkiLCJob21lX3Zpc2l0IiwibGFiX3Zpc2l0Iiwic2hvcnRVUkwiLCJzaG93TG9jYXRpb25Qb3B1cCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJsb2NhdGlvblR5cGUiLCJpbmNsdWRlcyIsInNlb0RhdGEiLCJzZW9GcmllbmRseSIsIm92ZXJsYXlWaXNpYmxlIiwiY29tcG9uZW50RGlkTW91bnQiLCJvdmVybGF5Q2xpY2siLCJzZWFyY2hDaXRpZXMiLCJoaWRlTG9jYXRpb25Qb3B1cCIsInBvcHVwQ29udGFpbmVyIiwic2hvd1BvcHVwQ29udGFpbmVyIiwiZ29Ub0xvY2F0aW9uIiwibG9jYXRpb25fdXJsIiwiR1RNIiwiZ2V0VXNlcklkIiwic2VuZEV2ZW50IiwiY3JpdGVyaWFTdHIiLCJsb2NhdGlvbk5hbWUiLCJzZWxlY3RlZExvY2F0aW9uIiwiZm9ybWF0dGVkX2FkZHJlc3MiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbkxlZnQiLCJBU1NFVFNfQkFTRV9VUkwiLCJyZWYiLCJjaGlsZCIsImdldENyaXRlcmlhU3RyaW5nIiwic2VsZWN0ZWRDcml0ZXJpYXMiLCJyZWR1Y2UiLCJmaW5hbCIsImN1cnIiLCJzaG9ydGVuVXJsIiwiaHJlZiIsInVybFNob3J0bmVyIiwiZXJyIiwidGlueV91cmwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJ6SW5kZXgiLCJjaGFuZ2VCdG5DbGljayIsInNlbGVjdGVkVGVzdHMiLCJjdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiU25hY2tCYXIiLCJzaG93IiwicG9zIiwidGV4dCIsImNhdGVnb3J5VGVzdFJlc3VsdHMiLCJzZWFyY2hVcmwiLCJ0b0xvd2VyQ2FzZSIsImdldFRlc3RDYXRlZ29yeUxpc3QiLCJyZXNwIiwibWFwU3RhdGVUb1Byb3BzIiwicGFzc2VkUHJvcHMiLCJpbml0aWFsU2VydmVyRGF0YSIsInN0YXRpY0NvbnRleHQiLCJMT0FERURfU0VBUkNIX0NSSVRFUklBX0xBQiIsImZldGNoTmV3UmVzdWx0cyIsImNvcnBvcmF0ZUNvdXBvbiIsInNlYXJjaF9pZF9kYXRhIiwibmV4dFNlbGVjdGVkQ3JpdGVyaWFzIiwibmV4dEZpbHRlckNyaXRlcmlhIiwiY29tcGFyZV9wYWNrYWdlcyIsIlNFQVJDSF9DUklURVJJQV9MQUJTIiwib2ZmZXJMaXN0IiwiVVNFUiIsIkxBQlMiLCJMQUJfU0VBUkNIX0RBVEEiLCJzaG93NDA0IiwiU0VUX0ZST01fU0VSVkVSIiwiTEFCX1NFQVJDSCIsIm1lcmdlVXJsU3RhdGUiLCJjb21tb25fc2V0dGluZ3MiLCJTRUFSQ0hfQ1JJVEVSSUFfT1BEIiwiaXNfbG9naW5fdXNlcl9pbnN1cmVkIiwiaW5zdXJhbmNlX3N0YXR1cyIsImRldmljZV9pbmZvIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjYiIsImZyb21fc2VydmVyIiwic2VhcmNoQnlVcmwiLCJjcml0ZXJpYSIsImZvcmNlQWRkIiwiZ2V0RGlhZ25vc2lzQ3JpdGVyaWFSZXN1bHRzIiwic2VhcmNoU3RyaW5nIiwiY2FsbGJhY2siLCJjbGVhckV4dHJhVGVzdHMiLCJtZXJnZUxBQlN0YXRlIiwiZ2V0Rm9vdGVyRGF0YSIsInNldExhYlNlYXJjaElkIiwic2VhcmNoSWQiLCJmaWx0ZXJzIiwic2V0RGVmYXVsdCIsImdldExhYlNlYXJjaElkUmVzdWx0cyIsInNlYXJjaFJlc3VsdHMiLCJzZWxlY3RTZWFyY2hUeXBlIiwidG9nZ2xlNDA0Iiwic3RhdHVzIiwic2VsZWN0TGFiVGltZVNMb3QiLCJzbG90IiwicmVzY2hlZHVsZSIsImdldE9mZmVyTGlzdCIsImxhdCIsImxvbmciLCJ0b2dnbGVPUERDcml0ZXJpYSIsImZpbHRlciIsInNlbGVjdExhYkFwcG9pbnRtZW50VHlwZSIsInJlc2V0UGtnQ29tcGFyZSIsImxvYWRPUERJbnN1cmFuY2UiLCJjaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxNQUFNQSxRQUFOLFNBQXVCQyxnQkFBTUMsU0FBN0IsQ0FBdUM7QUFDbkNDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjtBQUNBLGFBQUtDLEtBQUwsR0FBYTtBQUNUQyxxQkFBUyxLQURBO0FBRVRDLHFCQUFTLEtBRkE7QUFHVEMseUJBQWEsS0FISjtBQUlUQyxrQkFBTSxDQUpHO0FBS1RDLHdCQUFZTixNQUFNTyxjQUFOLElBQXdCUCxNQUFNTyxjQUFOLENBQXFCRCxVQUE3QyxHQUEwRE4sTUFBTU8sY0FBTixDQUFxQkQsVUFBL0UsR0FBNEYsS0FML0Y7QUFNVEUseUJBQWE7QUFOSixTQUFiO0FBUUg7O0FBRURDLFlBQVFDLFNBQVIsRUFBbUI7QUFDZixZQUFJQyxPQUFPLEVBQVg7QUFD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QUFSLEVBQXlCeUIsa0JBQXpCLEVBQTZDOUIsbUJBQTdDLEMiLCJmaWxlIjoiNzAuc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IExhYlByb2ZpbGVDYXJkIGZyb20gJy4uLy4uL2NvbW1vbnMvbGFiUHJvZmlsZUNhcmQvaW5kZXguanMnXG5pbXBvcnQgSW5maW5pdGVTY3JvbGwgZnJvbSAncmVhY3QtaW5maW5pdGUtc2Nyb2xsZXInO1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi8uLi9jb21tb25zL0xvYWRlcidcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy9ndG0nXG5pbXBvcnQgTGFiUmVzdWx0Q2FyZCBmcm9tICcuLi8uLi9jb21tb25zL2xhYlJlc3VsdENhcmQnXG5pbXBvcnQgQmFubmVyQ2Fyb3VzZWwgZnJvbSAnLi4vLi4vLi4vY29tbW9ucy9Ib21lL2Jhbm5lckNhcm91c2VsLmpzJztcblxuY2xhc3MgTGFic0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaGFzTW9yZTogZmFsc2UsXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHJlbmRlckJsb2NrOiBmYWxzZSxcbiAgICAgICAgICAgIHBhZ2U6IDAsXG4gICAgICAgICAgICBpc19pbnN1cmVkOiBwcm9wcy5maWx0ZXJDcml0ZXJpYSAmJiBwcm9wcy5maWx0ZXJDcml0ZXJpYS5pc19pbnN1cmVkID8gcHJvcHMuZmlsdGVyQ3JpdGVyaWEuaXNfaW5zdXJlZCA6IGZhbHNlLFxuICAgICAgICAgICAgYXZnX3JhdGluZ3M6ICcnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBib29rTm93KHRlc3RfZGF0YSkge1xuICAgICAgICBsZXQgdGVzdCA9IHt9XG4gICAgICAgIHRlc3QuaWQgPSB0ZXN0X2RhdGEuaWRcbiAgICAgICAgdGVzdC5uYW1lID0gdGVzdF9kYXRhLm5hbWVcbiAgICAgICAgdGVzdC50eXBlID0gJ3Rlc3QnXG4gICAgICAgIHRoaXMucHJvcHMudG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEoJ3Rlc3QnLCB0ZXN0LCB0cnVlKVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9sYWIvc2VhcmNocmVzdWx0cycpXG4gICAgICAgIH0sIDEwMClcblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIndyYXAgc2VhcmNoLWJvb2stcmVzdWx0IHZhcmlhYmxlLWNvbnRlbnQtc2VjdGlvblwiIHJlZj1cImNoZWNrSWZFeGlzdHNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBjYXJkTWFpblBhZGRpbmdSbXZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmxhYkxpc3QgJiYgdGhpcy5wcm9wcy5sYWJMaXN0LmFsbF9jYXRlZ29yaWVzICYmIHRoaXMucHJvcHMubGFiTGlzdC5hbGxfY2F0ZWdvcmllcy5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5sYWJMaXN0LmFsbF9jYXRlZ29yaWVzLm1hcCgoZGF0YSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpfSBpZD17ZGF0YS5sYWJfdGVzdF9jYXRfaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibGFiLWNyZC1oZG5nXCI+e2RhdGEubGFiX3Rlc3RfY2F0X25hbWV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5sYWJfdGVzdF90ZXN0cyAmJiBkYXRhLmxhYl90ZXN0X3Rlc3RzLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5sYWJfdGVzdF90ZXN0cy5tYXAoKHRlc3RfZGF0YSwgaykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjc3RtLWRvY0NhcmQgbWItM1wiIGtleT17a30gaWQ9e3Rlc3RfZGF0YS5pZH0gb25DbGljaz17dGhpcy5ib29rTm93LmJpbmQodGhpcywgdGVzdF9kYXRhKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNzdG0tZG9jQ2FyZC1jb250ZW50XCIgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiIHN0eWxlPXt7cGFkZGluZ0JvdHRvbToxMH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNzdG0tZG9jLWRldGFpbHMtY29udGFpbmVyIGxhYkNhcmRVaXJlc3BvbnNpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNzdG0tZG9jLWNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvY2l0eS14cmF5LXNjYW4tY2xpbmljLXB2dC1sdGQtcGFsYW0taW4tcGFsYW0tbmV3LWRlbGhpLWxwcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImxiY3JkY3N0Zm9udCBjc3RtRG9jTmFtZVwiIHN0eWxlPXt7Zm9udFNpemU6JzE0cHgnfX0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXN0X2RhdGEubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Rlc3RfZGF0YS5jb3VudCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BdmFpbGFibGUgaW4ge3Rlc3RfZGF0YS5jb3VudH0gTGFiczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjc3RtLWRvYy1wcmljZVwiPlN0YXJ0aW5nIGF0PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3N0LWRvYy1wcmljZVwiPuKCuSB7dGVzdF9kYXRhLmRlYWxfcHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8cCBjbGFzc05hbWU9XCJjc3QtZG9jLXByaWNlXCI+PHNwYW4gY2xhc3NOYW1lPVwibGItc3Z1cHRvXCI+U2F2ZSB1cHRvIDQwJTwvc3Bhbj7igrkge3Rlc3RfZGF0YS5kZWFsX3ByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjc3RtLWJvb2stYnRuXCIgb25DbGljaz17dGhpcy5ib29rTm93LmJpbmQodGhpcywgdGVzdF9kYXRhKX0+U2VsZWN0IExhYjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBMYWJzTGlzdFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IExhYnNMaXN0IGZyb20gJy4vVGVzdENhdGVnb3J5TGlzdC9UZXN0Q2F0ZWdvcnlMaXN0LmpzJ1xuaW1wb3J0IENyaXRlcmlhU2VhcmNoIGZyb20gJy4uLy4uL2NvbW1vbnMvY3JpdGVyaWFTZWFyY2gnXG5pbXBvcnQgVG9wQmFyIGZyb20gJy4vbmV3VG9wQmFyJ1xuaW1wb3J0IE5BVklHQVRFIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvbmF2aWdhdGUvaW5kZXguanMnO1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi8uLi9jb25maWcnXG5pbXBvcnQgSGVsbWV0VGFncyBmcm9tICcuLi8uLi9jb21tb25zL0hlbG1ldFRhZ3MnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvSG9tZS9mb290ZXInXG5pbXBvcnQgUmVzdWx0Q291bnQgZnJvbSAnLi90b3BCYXIvcmVzdWx0X2NvdW50LmpzJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcblxuY2xhc3MgU2VhcmNoUmVzdWx0c1ZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzZXRRdWlja0ZpbHRlcnMoKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cXVpY2tGaWx0ZXI6IHt9fSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBzaG93X3BhZ2luYXRpb24gPSB0aGlzLnByb3BzLmxhYkxpc3QgJiYgdGhpcy5wcm9wcy5sYWJMaXN0Lmxlbmd0aCA+IDBcbiAgICAgICAgbGV0IHVybCA9IGAke0NPTkZJRy5BUElfQkFTRV9VUkx9JHt0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lfWBcbiAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoLyZwYWdlPVxcZHsxLH0vLCBcIlwiKVxuICAgICAgICBsZXQgcGFnZSA9IFwiXCJcbiAgICAgICAgbGV0IGN1cnJfcGFnZSA9IHBhcnNlSW50KHRoaXMucHJvcHMucGFnZSlcbiAgICAgICAgbGV0IHByZXYgPSBcIlwiXG4gICAgICAgIGlmIChjdXJyX3BhZ2UgPiAxKSB7XG4gICAgICAgICAgICBwYWdlID0gYD9wYWdlPSR7Y3Vycl9wYWdlfWBcbiAgICAgICAgICAgIHByZXYgPSB1cmxcbiAgICAgICAgICAgIGlmIChjdXJyX3BhZ2UgPiAyKSB7XG4gICAgICAgICAgICAgICAgcHJldiArPSBgP3BhZ2U9JHtjdXJyX3BhZ2UgLSAxfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgbmV4dCA9IFwiXCJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY291bnQgPiBjdXJyX3BhZ2UgKiAyMCkge1xuICAgICAgICAgICAgbmV4dCA9IHVybCArIGA/cGFnZT0ke2N1cnJfcGFnZSArIDF9YFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgdGhpcyB3YXMgdGhlIGxhbmRpbmcgcGFnZVxuICAgICAgICBsZXQgbGFuZGluZ19wYWdlID0gZmFsc2VcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93Lk9OX0xBTkRJTkdfUEFHRSkge1xuICAgICAgICAgICAgbGFuZGluZ19wYWdlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGxldCBjb3VudCA9IDBcbiAgICAgICAgaWYodGhpcy5wcm9wcy5sYWJMaXN0ICYmIHRoaXMucHJvcHMubGFiTGlzdC5hbGxfY2F0ZWdvcmllcyAmJiB0aGlzLnByb3BzLmxhYkxpc3QuYWxsX2NhdGVnb3JpZXMubGVuZ3RoKXsgXG4gICAgICAgICAgICB0aGlzLnByb3BzLmxhYkxpc3QuYWxsX2NhdGVnb3JpZXMubWFwKChkYXRhLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY291bnQgKz0gcGFyc2VJbnQoZGF0YVsnTm9fb2ZfdGVzdHMnXSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibWFwXCIgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19PjwvZGl2PlxuICAgICAgICAgICAgICAgIHs8SGVsbWV0VGFncyB0YWdzRGF0YT17e1xuICAgICAgICAgICAgICAgICAgICBjYW5vbmljYWxVcmw6IGAke0NPTkZJRy5BUElfQkFTRV9VUkx9JHt0aGlzLnByb3BzLm1hdGNoLnVybH0ke3BhZ2V9YCxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMucHJvcHMubGFiTGlzdD90aGlzLnByb3BzLmxhYkxpc3QudGl0bGU6JycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLnByb3BzLmxhYkxpc3Q/dGhpcy5wcm9wcy5sYWJMaXN0Lm1ldGFfZGVzY3JpcHRpb246JycsXG4gICAgICAgICAgICAgICAgICAgIHByZXY6IHByZXYsXG4gICAgICAgICAgICAgICAgICAgIG5leHQ6IG5leHRcbiAgICAgICAgICAgICAgICB9fSBub0luZGV4PXtmYWxzZX0vPn1cblxuICAgICAgICAgICAgICAgIDxDcml0ZXJpYVNlYXJjaCB7Li4udGhpcy5wcm9wc30gY2hlY2tGb3JMb2FkPXtsYW5kaW5nX3BhZ2UgfHwgdGhpcy5wcm9wcy5MT0FERURfTEFCU19TRUFSQ0ggfHwgdGhpcy5zdGF0ZS5zaG93RXJyb3J9IHRpdGxlPVwiU2VhcmNoIGZvciBUZXN0IGFuZCBMYWJzLlwiIGdvQmFjaz17dHJ1ZX0gbGFiX2NhcmQ9eyEhdGhpcy5zdGF0ZS5sYWJfY2FyZH0gbmV3Q2hhdEJ0bj17dHJ1ZX0gc2VhcmNoTGFicz17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0Vycm9yID8gPGRpdiBjbGFzc05hbWU9XCJub3JmXCI+Tm8gUmVzdWx0cyBGb3VuZCEhPC9kaXY+IDogPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7PFRvcEJhciB7Li4udGhpcy5wcm9wc30gY291bnQgPSB7Y291bnR9Lz59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubGFiTGlzdCAmJiB0aGlzLnByb3BzLmxhYkxpc3QubGVuZ3RoID09MD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgY2FyZE1haW5QYWRkaW5nUm12XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZy1jYXJkLWNvbnRhaW5lciBtdC0yMCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2ctbm8tcmVzdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBrZy1uLXJzbHRcIj5ObyByZXN1bHQgZm91bmQhPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNGaWx0ZXJBcHBsaWVkKHRoaXMucHJvcHMuZmlsdGVyQ3JpdGVyaWEpP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJuLXJzbHQtaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9uby1yZXN1bHQucG5nJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBrZy10eS1hZ24gY3Vyc29yLXBudHJcIiBvbkNsaWNrPXt0aGlzLmFwcGx5UXVpY2tGaWx0ZXIuYmluZCh0aGlzLCB7dmlld01vcmU6IHRydWV9KX0+VHJ5IGFnYWluIHdpdGggZmV3ZXIgZmlsdGVyczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOicxMzBweCd9fSBjbGFzc05hbWU9XCJuLXJzbHQtaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92Y3Qtbm8ucG5nJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBrZy10eS1hZ24gdGV4dC1kYXJrIHRleHQtY2VudGVyXCI+Q2Fu4oCZdCBmaW5kIHlvdXIgbGFiIGhlcmU/PGJyPjwvYnI+SGVscCB1cyB0byBsaXN0IHlvdXIgbGFiPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyZWZlckRvY3RvcmJ0blwiIG9uQ2xpY2s9eygpPT57dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9kb2N0b3JzaWdudXA/bWVtYmVyX3R5cGU9MicpfX0+UmVmZXIgeW91ciBMYWI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PFJlYWN0LkZyYWdtZW50PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFic0xpc3Qgey4uLnRoaXMucHJvcHN9Lz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L0NyaXRlcmlhU2VhcmNoPlxuXG4gICAgICAgICAgICAgICAgey8qPEZvb3RlciBmb290ZXJEYXRhPXt0aGlzLnN0YXRlLmZvb3RlckRhdGF9IC8+Ki99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFJlc3VsdHNWaWV3XG4iLCJpbXBvcnQgVG9wQmFyIGZyb20gJy4vbmV3VG9wQmFyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBUb3BCYXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBSYW5nZSBmcm9tICdyYy1zbGlkZXIvbGliL1JhbmdlJztcbmltcG9ydCB7IENvcHlUb0NsaXBib2FyZCB9IGZyb20gJ3JlYWN0LWNvcHktdG8tY2xpcGJvYXJkJztcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuaW1wb3J0IExvY2F0aW9uRWxlbWVudHMgZnJvbSAnLi4vLi4vLi4vLi4vY29udGFpbmVycy9jb21tb25zL2xvY2F0aW9uRWxlbWVudHMnXG5pbXBvcnQgTG9jYXRpb25Qb3B1cCBmcm9tICcuLi8uLi8uLi8uLi9jb250YWluZXJzL2NvbW1vbnMvbG9jYXRpb25Qb3B1cCdcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy9ndG0nXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5cbmNsYXNzIFRvcEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhbmNob3JFbDogbnVsbCxcbiAgICAgICAgICAgIGRyb3Bkb3duX3Zpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgLy8gb3ZlcmxheVZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgLy8gc2hvd1BvcHVwQ29udGFpbmVyOiB0cnVlLFxuICAgICAgICAgICAgaXNfaW5zdXJlZDogcHJvcHMuZmlsdGVyQ3JpdGVyaWEgJiYgcHJvcHMuZmlsdGVyQ3JpdGVyaWEuaXNfaW5zdXJlZCA/IHByb3BzLmZpbHRlckNyaXRlcmlhLmlzX2luc3VyZWQgOiBmYWxzZSxcbiAgICAgICAgICAgIC8vTmV3IGZpbHRlcnNcbiAgICAgICAgICAgIHByZXZpb3VzX2ZpbHRlcnM6IHt9LFxuICAgICAgICAgICAgc29ydF9vbjogJycsXG4gICAgICAgICAgICBzb3J0X29yZGVyOiAnJyxcbiAgICAgICAgICAgIGF2Z19yYXRpbmdzOiAnJyxcbiAgICAgICAgICAgIGF2YWlsYWJpbGl0eTogW10sXG4gICAgICAgICAgICBob21lX3Zpc2l0OiBmYWxzZSxcbiAgICAgICAgICAgIGxhYl92aXNpdDogZmFsc2UsXG4gICAgICAgICAgICBzaG9ydFVSTDogXCJcIixcbiAgICAgICAgICAgIHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSxcbiAgICAgICAgICAgIHF1aWNrRmlsdGVyOiB7fVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuXG4gICAgICAgIGlmIChwcm9wcy5sb2NhdGlvblR5cGUgJiYgIXByb3BzLmxvY2F0aW9uVHlwZS5pbmNsdWRlcyhcImdlb1wiKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHByb3BzLnNlb0RhdGEgJiYgcHJvcHMuc2VvRGF0YS5sb2NhdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9jYXRpb25Qb3B1cDogZmFsc2UgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKChwcm9wcy5zZW9EYXRhICYmIHByb3BzLnNlb0RhdGEubG9jYXRpb24pIHx8IHByb3BzLnNlb0ZyaWVuZGx5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9jYXRpb25Qb3B1cDogdHJ1ZSwgb3ZlcmxheVZpc2libGU6IHRydWUgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5zaG9ydGVuVXJsKClcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMucHJvcHMuZmlsdGVyQ3JpdGVyaWEgfSlcbiAgICAgICAgLy8gdGhpcy5zaG9ydGVuVXJsKClcbiAgICAgICAgaWYgKCh0aGlzLnByb3BzLnNlb0RhdGEgJiYgdGhpcy5wcm9wcy5zZW9EYXRhLmxvY2F0aW9uKSB8fCB0aGlzLnByb3BzLnNlb0ZyaWVuZGx5KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2NhdGlvblR5cGUgJiYgdGhpcy5wcm9wcy5sb2NhdGlvblR5cGUuaW5jbHVkZXMoXCJnZW9cIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xvY2F0aW9uUG9wdXA6IHRydWUsIG92ZXJsYXlWaXNpYmxlOiB0cnVlIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvdmVybGF5Q2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvdmVybGF5VmlzaWJsZTogZmFsc2UsIHNlYXJjaENpdGllczogW10sIHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICBoaWRlTG9jYXRpb25Qb3B1cCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICBwb3B1cENvbnRhaW5lcigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dQb3B1cENvbnRhaW5lcjogZmFsc2UsIHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICBnb1RvTG9jYXRpb24oKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2VhcmNoQ2l0aWVzOiBbXSxcbiAgICAgICAgfSlcbiAgICAgICAgLypsZXQgcmVkaXJlY3RfdG8gPSBcIlwiXG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJ2xiY2l0JykgfHwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCdsYmxpdGNpdCcpKSB7XG4gICAgICAgICAgICByZWRpcmVjdF90byA9IFwiL2xhYi9zZWFyY2hyZXN1bHRzXCJcbiAgICAgICAgfVxuICAgICAgICAqL1xuICAgICAgICBsZXQgbG9jYXRpb25fdXJsID0gJy9sb2NhdGlvbnNlYXJjaCdcbiAgICAgICAgLyogICAgICAgIGlmIChyZWRpcmVjdF90bykge1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbl91cmwgKz0gYD9yZWRpcmVjdF90bz0ke3JlZGlyZWN0X3RvfWBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICovXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NoYW5nZUxvY2F0aW9uRG9jdG9yUmVzdWx0c1BvcFVwJywgJ0FjdGlvbic6ICdjaGFuZ2UtbG9jYXRpb24tZG9jdG9yLXJlc3VsdHMtUG9wVXAnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjaGFuZ2UtbG9jYXRpb24tZG9jdG9yLXJlc3VsdHMtUG9wVXAnLCAndXJsJzogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2gobG9jYXRpb25fdXJsKVxuXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG5cbiAgICAgICAgbGV0IGNyaXRlcmlhU3RyID0gdGhpcy5wcm9wcy5sYWJMaXN0P3RoaXMucHJvcHMubGFiTGlzdC50aXRsZTonJ1xuICAgICAgICBsZXQgbG9jYXRpb25OYW1lID0gXCJcIlxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5mb3JtYXR0ZWRfYWRkcmVzcykge1xuICAgICAgICAgICAgbG9jYXRpb25OYW1lID0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLmZvcm1hdHRlZF9hZGRyZXNzXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VvRGF0YSAmJiB0aGlzLnByb3BzLnNlb0RhdGEubG9jYXRpb24pIHtcbiAgICAgICAgICAgIGxvY2F0aW9uTmFtZSA9IHRoaXMucHJvcHMuc2VvRGF0YS5sb2NhdGlvblxuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLXJvdyBzdGlja3ktaGVhZGVyIG1ibC1zdGlja1wiPiBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItcm93IHN0aWNreS1oZWFkZXIgbWJsLXN0aWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzY3JvbGwtc2hhZG93LWJhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWZpbHRlci10YWItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWZpbHRlci10YWJzLXNlbGVjdCBsb2NhdGlvblRlc3RGaWx0ZXJcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuZXdTdGlja3lmaWx0ZXJcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvdW50fSBSZXN1bHRzIHtjcml0ZXJpYVN0ciA/IFwiZm9yIFwiIDogXCJcIn17Y3JpdGVyaWFTdHJ9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uTmFtZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLmdvVG9Mb2NhdGlvbi5iaW5kKHRoaXMpfSA+e2AgaW4gJHtsb2NhdGlvbk5hbWV9YH08aW1nIHN0eWxlPXt7IHdpZHRoOiAnMTFweCcsIGhlaWdodDogJzE1cHgnLCBtYXJnaW5MZWZ0OiAnN3B4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9lZGl0LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0xvY2F0aW9uUG9wdXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhdGlvbkVsZW1lbnRzIHsuLi50aGlzLnByb3BzfSBvblJlZj17cmVmID0+ICh0aGlzLmNoaWxkID0gcmVmKX0gcmVzdWx0VHlwZT0nbGlzdCcgaXNUb3BiYXI9e3RydWV9IGhpZGVMb2NhdGlvblBvcHVwPXsoKSA9PiB0aGlzLmhpZGVMb2NhdGlvblBvcHVwKCl9IGxvY2F0aW9uTmFtZT17bG9jYXRpb25OYW1lfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0xvY2F0aW9uUG9wdXAgJiYgdGhpcy5zdGF0ZS5vdmVybGF5VmlzaWJsZSAmJiAhdGhpcy5wcm9wcy5sYWJfY2FyZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2NhdGlvblBvcHVwLW92ZXJsYXlcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLm92ZXJsYXlDbGljaygpfSA+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93TG9jYXRpb25Qb3B1cCAmJiB0aGlzLnByb3BzLmxhYl9jYXJkICYmIHRoaXMuc3RhdGUuc2hvd1BvcHVwQ29udGFpbmVyID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwQ29udGFpbmVyLW92ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFRvcEJhclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUmFuZ2UgZnJvbSAncmMtc2xpZGVyL2xpYi9SYW5nZSc7XG5pbXBvcnQgeyBDb3B5VG9DbGlwYm9hcmQgfSBmcm9tICdyZWFjdC1jb3B5LXRvLWNsaXBib2FyZCc7XG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBMb2NhdGlvbkVsZW1lbnRzIGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMvY29tbW9ucy9sb2NhdGlvbkVsZW1lbnRzJ1xuaW1wb3J0IExvY2F0aW9uUG9wdXAgZnJvbSAnLi4vLi4vLi4vLi4vY29udGFpbmVycy9jb21tb25zL2xvY2F0aW9uUG9wdXAnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvZ3RtJ1xuXG5jbGFzcyBUb3BCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgLy8gYW5jaG9yRWw6IG51bGwsXG4gICAgICAgICAgICAvLyBvcGVuRmlsdGVyOiBmYWxzZSxcbiAgICAgICAgICAgIC8vIHByaWNlUmFuZ2U6IFswLCAyMDAwMF0sXG4gICAgICAgICAgICAvLyBkaXN0YW5jZVJhbmdlOiBbMCwgMTVdLFxuICAgICAgICAgICAgLy8gc29ydF9vbjogbnVsbCxcbiAgICAgICAgICAgIHNob3J0VVJMOiBcIlwiLFxuICAgICAgICAgICAgLy8gZHJvcGRvd25fdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICBzaG93TG9jYXRpb25Qb3B1cDogZmFsc2UsXG4gICAgICAgICAgICBvdmVybGF5VmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICBzaG93UG9wdXBDb250YWluZXI6IHRydWUsXG4gICAgICAgICAgICAvLyBzb3J0VGV4dDogJ1JlbGV2YW5jZSdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnByb3BzLmZpbHRlckNyaXRlcmlhIH0pXG4gICAgICAgIGlmIChwcm9wcy5sb2NhdGlvblR5cGUgJiYgIXByb3BzLmxvY2F0aW9uVHlwZS5pbmNsdWRlcyhcImdlb1wiKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHByb3BzLnNlb0RhdGEgJiYgcHJvcHMuc2VvRGF0YS5sb2NhdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9jYXRpb25Qb3B1cDogZmFsc2UgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKChwcm9wcy5zZW9EYXRhICYmIHByb3BzLnNlb0RhdGEubG9jYXRpb24pIHx8IHByb3BzLnNlb0ZyaWVuZGx5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9jYXRpb25Qb3B1cDogdHJ1ZSwgb3ZlcmxheVZpc2libGU6IHRydWUgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5zaG9ydGVuVXJsKClcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMucHJvcHMuZmlsdGVyQ3JpdGVyaWEgfSlcbiAgICAgICAgLy8gdGhpcy5zaG9ydGVuVXJsKClcbiAgICAgICAgaWYgKCh0aGlzLnByb3BzLnNlb0RhdGEgJiYgdGhpcy5wcm9wcy5zZW9EYXRhLmxvY2F0aW9uKSB8fCB0aGlzLnByb3BzLnNlb0ZyaWVuZGx5KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2NhdGlvblR5cGUgJiYgdGhpcy5wcm9wcy5sb2NhdGlvblR5cGUuaW5jbHVkZXMoXCJnZW9cIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xvY2F0aW9uUG9wdXA6IHRydWUsIG92ZXJsYXlWaXNpYmxlOiB0cnVlIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhcHBseUZpbHRlcnMoKSB7XG4gICAgLy8gICAgIGxldCBmaWx0ZXJTdGF0ZSA9IHtcbiAgICAvLyAgICAgICAgIHByaWNlUmFuZ2U6IHRoaXMuc3RhdGUucHJpY2VSYW5nZSxcbiAgICAvLyAgICAgICAgIGRpc3RhbmNlUmFuZ2U6IHRoaXMuc3RhdGUuZGlzdGFuY2VSYW5nZSxcbiAgICAvLyAgICAgICAgIHNvcnRfb246IHRoaXMuc3RhdGUuc29ydF9vblxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGxldCBkYXRhID0ge1xuICAgIC8vICAgICAgICAgJ0NhdGVnb3J5JzogJ0ZpbHRlckNsaWNrJywgJ0FjdGlvbic6ICdDbGlja2VkIG9uIEZpbHRlcicsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2xhYi1maWx0ZXItY2xpY2tlZCcsICd1cmwnOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsICdsb3dQcmljZVJhbmdlJzogdGhpcy5zdGF0ZS5wcmljZVJhbmdlWzBdLCAnaGlnaFByaWNlUmFuZ2UnOiB0aGlzLnN0YXRlLnByaWNlUmFuZ2VbMV0sICdsb3dEaXN0YW5jZVJhbmdlJzogdGhpcy5zdGF0ZS5kaXN0YW5jZVJhbmdlWzBdLCAnaGlnaERpc3RhbmNlUmFuZ2UnOiB0aGlzLnN0YXRlLmRpc3RhbmNlUmFuZ2VbMV0sICdzb3J0X29uJzogdGhpcy5zdGF0ZS5zb3J0X29uID09IFwiXCIgPyAncmVsZXZhbmNlJyA6IHRoaXMuc3RhdGUuc29ydF9vblxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgLy8gICAgIHRoaXMucHJvcHMuYXBwbHlGaWx0ZXJzKGZpbHRlclN0YXRlKVxuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbkZpbHRlcjogZmFsc2UgfSlcbiAgICAvLyB9XG5cbiAgICAvLyBoYW5kbGVPcGVuKGV2ZW50KSB7XG4gICAgLy8gICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBhbmNob3JFbDogZXZlbnQuY3VycmVudFRhcmdldCB9KVxuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAvLyAgICAgICAgIGRyb3Bkb3duX3Zpc2libGU6IHRydWVcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxuXG4gICAgLy8gaGlkZVNvcnREaXYoKSB7XG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgICAgICAgZHJvcGRvd25fdmlzaWJsZTogZmFsc2VcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxuXG4gICAgLy8gaGFuZGxlQ2xvc2UodHlwZSkge1xuICAgIC8vICAgICBsZXQgZGF0YSA9IHtcbiAgICAvLyAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnTGFiU29ydEZpbHRlckFwcGxpZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdsYWItc29ydC1maWx0ZXItYXBwbGllZCcsICd1cmwnOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsICdzb3J0X29uJzogdHlwZSA9PT0gXCJcIiA/ICdyZWxldmFuY2UnIDogdHlwZVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBhbmNob3JFbDogbnVsbCwgc29ydF9vbjogdHlwZSwgZHJvcGRvd25fdmlzaWJsZTogZmFsc2UgfSwgKCkgPT4ge1xuICAgIC8vICAgICAgICAgaWYgKHR5cGUgfHwgdHlwZSA9PT0gXCJcIikge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuYXBwbHlGaWx0ZXJzKClcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSlcbiAgICAvLyB9XG5cbiAgICAvLyB0b2dnbGVGaWx0ZXIoKSB7XG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgICAgICAgb3BlbkZpbHRlcjogIXRoaXMuc3RhdGUub3BlbkZpbHRlclxuICAgIC8vICAgICB9KVxuICAgIC8vIH1cblxuICAgIC8vIGhhbmRsZVJhbmdlKHR5cGUsIHJhbmdlKSB7XG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgICAgICAgW3R5cGVdOiByYW5nZVxuICAgIC8vICAgICB9KVxuICAgIC8vIH1cblxuICAgIGdldENyaXRlcmlhU3RyaW5nKHNlbGVjdGVkQ3JpdGVyaWFzKSB7XG4gICAgICAgIGlmIChzZWxlY3RlZENyaXRlcmlhcyAmJiBzZWxlY3RlZENyaXRlcmlhcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZENyaXRlcmlhcy5yZWR1Y2UoKGZpbmFsLCBjdXJyLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGkgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBmaW5hbCArPSAnLCAnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsICs9IGAke2N1cnIubmFtZX1gXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbmFsXG4gICAgICAgICAgICB9LCBcIlwiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gaXNGaWx0ZXJBcHBsaWVkKCkge1xuICAgIC8vICAgICBjb25zdCBkZWYgPSB7XG4gICAgLy8gICAgICAgICBwcmljZVJhbmdlOiBbMCwgMjAwMDBdLFxuICAgIC8vICAgICAgICAgZGlzdGFuY2VSYW5nZTogWzAsIDE1XVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHRyeSB7XG4gICAgLy8gICAgICAgICBmb3IgKGxldCBmaWx0ZXIgaW4gZGVmKSB7XG4gICAgLy8gICAgICAgICAgICAgaWYgKGRlZltmaWx0ZXJdWzBdICE9IHRoaXMuc3RhdGVbZmlsdGVyXVswXSB8fCBkZWZbZmlsdGVyXVsxXSAhPSB0aGlzLnN0YXRlW2ZpbHRlcl1bMV0pIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAvLyAgICAgfSBjYXRjaCAoZSkge1xuICAgIC8vICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICBzaG9ydGVuVXJsKCkge1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWZcbiAgICAgICAgICAgIGlmICh1cmwuaW5jbHVkZXMoJz8nKSkge1xuICAgICAgICAgICAgICAgIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmICsgJyZmb3JjZV9sb2NhdGlvbj10cnVlJ1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZiArICc/Zm9yY2VfbG9jYXRpb249dHJ1ZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvcHMudXJsU2hvcnRuZXIodXJsLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3J0VVJMOiBkYXRhLnRpbnlfdXJsIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG92ZXJsYXlDbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG92ZXJsYXlWaXNpYmxlOiBmYWxzZSwgc2VhcmNoQ2l0aWVzOiBbXSB9KTtcbiAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uX2VsZW1lbnQnKSl7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb25fZWxlbWVudCcpLnN0eWxlLnpJbmRleCA9JzAnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlTG9jYXRpb25Qb3B1cCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICBwb3B1cENvbnRhaW5lcigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dQb3B1cENvbnRhaW5lcjogZmFsc2UsIHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICBjaGFuZ2VCdG5DbGljaygpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ2NoYW5nZUJ0bk9uTGFiQ2FyZENsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2hhbmdlLWJ0bi1vbi1sYWItY2FyZC1jbGljaydcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICBsZXQgc2VsZWN0ZWRUZXN0cyA9IFtdXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmN1cnJlbnRTZWFyY2hlZENyaXRlcmlhcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5jdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRlc3RzLnB1c2godGhpcy5wcm9wcy5jdXJyZW50U2VhcmNoZWRDcml0ZXJpYXNbaV0uaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvbG9jYXRpb25zZWFyY2g/bGFiX2NhcmQ9dHJ1ZSZpZD0ke3NlbGVjdGVkVGVzdHN9YClcbiAgICB9XG5cbiAgICBnb1RvTG9jYXRpb24oKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2VhcmNoQ2l0aWVzOiBbXSxcbiAgICAgICAgfSlcbiAgICAgICAgLypsZXQgcmVkaXJlY3RfdG8gPSBcIlwiXG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJ2xiY2l0JykgfHwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCdsYmxpdGNpdCcpKSB7XG4gICAgICAgICAgICByZWRpcmVjdF90byA9IFwiL2xhYi9zZWFyY2hyZXN1bHRzXCJcbiAgICAgICAgfVxuKi9cbiAgICAgICAgbGV0IGxvY2F0aW9uX3VybCA9ICcvbG9jYXRpb25zZWFyY2gnXG4gICAgICAgIC8qICAgICAgICBpZiAocmVkaXJlY3RfdG8pIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25fdXJsICs9IGA/cmVkaXJlY3RfdG89JHtyZWRpcmVjdF90b31gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAqL1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDaGFuZ2VMb2NhdGlvbkRvY3RvclJlc3VsdHNQb3BVcCcsICdBY3Rpb24nOiAnY2hhbmdlLWxvY2F0aW9uLWRvY3Rvci1yZXN1bHRzLVBvcFVwJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2hhbmdlLWxvY2F0aW9uLWRvY3Rvci1yZXN1bHRzLVBvcFVwJywgJ3VybCc6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGxvY2F0aW9uX3VybClcblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICAvLyBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbHRlci1zY3JvbGxcIikpe1xuICAgICAgICAvLyAgICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vICAgICB2YXIgY3VycmVudFNjcm9sbFBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldFxuICAgICAgICAvLyAgICAgICBpZiAoY3VycmVudFNjcm9sbFBvcyA+IDApIHtcbiAgICAgICAgLy8gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbHRlci1zY3JvbGxcIikuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxuICAgICAgICAvLyAgICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsdGVyLXNjcm9sbFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXG4gICAgICAgIC8vICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgICBcbiAgICAgICAgLy8gbGV0IHNvcnRUeXBlID0gJydcbiAgICAgICAgLy8gaWYgKHRoaXMuc3RhdGUuc29ydF9vbikge1xuICAgICAgICAvLyAgICAgc29ydFR5cGUgPSB0aGlzLnN0YXRlLnNvcnRfb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnN0YXRlLnNvcnRfb24uc2xpY2UoMSk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICBsZXQgY3JpdGVyaWFTdHIgPSB0aGlzLmdldENyaXRlcmlhU3RyaW5nKHRoaXMucHJvcHMuY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzKVxuICAgICAgICBsZXQgbG9jYXRpb25OYW1lID0gXCJcIlxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5mb3JtYXR0ZWRfYWRkcmVzcykge1xuICAgICAgICAgICAgbG9jYXRpb25OYW1lID0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLmZvcm1hdHRlZF9hZGRyZXNzXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VvRGF0YSAmJiB0aGlzLnByb3BzLnNlb0RhdGEubG9jYXRpb24pIHtcbiAgICAgICAgICAgIGxvY2F0aW9uTmFtZSA9IHRoaXMucHJvcHMuc2VvRGF0YS5sb2NhdGlvblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIiBpZD1cImZpbHRlci1zY3JvbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItcGRuZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbi1maWx0ZXIgZC1ub25lIGQtbWQtYmxvY2sgYWxpZ25TaGFyZUJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImlubGluZS1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtbm9uZSBkLW1kLWlubGluZS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXt0aGlzLnNob3J0ZW5VcmwuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3VybC1zaG9ydC5zdmdcIn0gc3R5bGU9e3sgd2lkdGg6IDgwIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG9ydFVSTCA/IDxkaXYgY2xhc3NOYW1lPVwic2hhcmVMaW5rcG9wdXBPdmVybGF5XCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3J0VVJMOiBcIlwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFyZUxpbmtwb3B1cFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUuc2hvcnRVUkx9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmQgdGV4dD17dGhpcy5zdGF0ZS5zaG9ydFVSTH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiU2hvcnRlbmVkIFVSTCBDb3BpZWQuXCIgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvcnRVUkw6IFwiXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNocmVsaW5rQnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPkNvcHk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvdW50fSBSZXN1bHRzIHtjcml0ZXJpYVN0ciA/IFwiZm9yXCIgOiBcIlwifSA8c3BhbiBjbGFzc05hbWU9XCJmdy03MDBcIj4ge2NyaXRlcmlhU3RyfTwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dMb2NhdGlvblBvcHVwICYmIGZhbHNlID8gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbG9jYXRpb25OYW1lID8gPHNwYW4gY2xhc3NOYW1lPVwibG9jYXRpb24tZWRpdFwiPntgIGluICR7bG9jYXRpb25OYW1lfWB9PC9zcGFuPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6IDE1LCBoZWlnaHQ6IDE1LCBtYXJnaW5MZWZ0OiA3LCBjdXJzb3I6ICdwb2ludGVyJyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9lZGl0LnN2Z1wifSBvbkNsaWNrPXt0aGlzLmdvVG9Mb2NhdGlvbi5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93TG9jYXRpb25Qb3B1cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5sYWJfY2FyZCAmJiB0aGlzLnN0YXRlLnNob3dQb3B1cENvbnRhaW5lciA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhdGlvblBvcHVwIHsuLi50aGlzLnByb3BzfSBvblJlZj17cmVmID0+ICh0aGlzLmNoaWxkID0gcmVmKX0gcmVzdWx0VHlwZT0nbGlzdCcgaXNUb3BiYXI9e3RydWV9IGhpZGVMb2NhdGlvblBvcHVwPXsoKSA9PiB0aGlzLmhpZGVMb2NhdGlvblBvcHVwKCl9IGxvY2F0aW9uTmFtZT17bG9jYXRpb25OYW1lfSBjcml0ZXJpYVN0cmluZz17Y3JpdGVyaWFTdHJ9IHBvcHVwQ29udGFpbmVyPXsoKSA9PiB0aGlzLnBvcHVwQ29udGFpbmVyKCl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPExvY2F0aW9uRWxlbWVudHMgey4uLnRoaXMucHJvcHN9IG9uUmVmPXtyZWYgPT4gKHRoaXMuY2hpbGQgPSByZWYpfSByZXN1bHRUeXBlPSdsaXN0JyBpc1RvcGJhcj17dHJ1ZX0gaGlkZUxvY2F0aW9uUG9wdXA9eygpID0+IHRoaXMuaGlkZUxvY2F0aW9uUG9wdXAoKX0gbG9jYXRpb25OYW1lPXtsb2NhdGlvbk5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93TG9jYXRpb25Qb3B1cCAmJiB0aGlzLnN0YXRlLm92ZXJsYXlWaXNpYmxlICYmICF0aGlzLnByb3BzLmxhYl9jYXJkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvY2F0aW9uUG9wdXAtb3ZlcmxheVwiIG9uQ2xpY2s9eygpID0+IHRoaXMub3ZlcmxheUNsaWNrKCl9ID48L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93TG9jYXRpb25Qb3B1cCAmJiB0aGlzLnByb3BzLmxhYl9jYXJkICYmIHRoaXMuc3RhdGUuc2hvd1BvcHVwQ29udGFpbmVyID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwQ29udGFpbmVyLW92ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFRvcEJhclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IHRvZ2dsZTQwNCwgbWVyZ2VMQUJTdGF0ZSwgdXJsU2hvcnRuZXIsIGdldExhYnMsIHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhLCBnZXREaWFnbm9zaXNDcml0ZXJpYVJlc3VsdHMsIGNsZWFyRXh0cmFUZXN0cywgZ2V0Rm9vdGVyRGF0YSwgc2V0TGFiU2VhcmNoSWQsIGdldExhYlNlYXJjaElkUmVzdWx0cywgc2VsZWN0U2VhcmNoVHlwZSwgc2VsZWN0TGFiVGltZVNMb3QsIGdldE9mZmVyTGlzdCwgdG9nZ2xlT1BEQ3JpdGVyaWEsIHNlbGVjdExhYkFwcG9pbnRtZW50VHlwZSwgcmVzZXRQa2dDb21wYXJlLCBsb2FkT1BESW5zdXJhbmNlLCBnZXRUZXN0Q2F0ZWdvcnlMaXN0IH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcbmltcG9ydCB7IG9wZFNlYXJjaFN0YXRlQnVpbGRlciwgbGFiU2VhcmNoU3RhdGVCdWlsZGVyIH0gZnJvbSAnLi4vLi4vaGVscGVycy91cmx0b1N0YXRlJ1xuaW1wb3J0IFNlYXJjaFJlc3VsdHNWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGlhZ25vc2lzL2NhdGVnb3J5VGVzdFJlc3VsdHMvY2F0ZWdvcnlUZXN0UmVzdWx0c1ZpZXcuanMnXG5pbXBvcnQgTm90Rm91bmRWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9ub3RGb3VuZCdcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0xvYWRlcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcblxuY2xhc3MgY2F0ZWdvcnlUZXN0UmVzdWx0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7ICAgICAgICAgICAgXG4gICAgICAgICAgICBkYXRhOm51bGxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAvLyB0aGlzLnByb3BzLmxvYWRPUERJbnN1cmFuY2UodGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKVxuICAgICAgICBsZXQgc2VhcmNoVXJsID0gbnVsbFxuICAgICAgICBpZiAodGhpcy5wcm9wcy5tYXRjaC51cmwuaW5jbHVkZXMoJy10cGNwJykpIHtcbiAgICAgICAgICAgIHNlYXJjaFVybCA9IHRoaXMucHJvcHMubWF0Y2gudXJsLnRvTG93ZXJDYXNlKClcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGFnZSA9IDFcbiAgICAgICAgdGhpcy5wcm9wcy5nZXRUZXN0Q2F0ZWdvcnlMaXN0KG51bGwscGFnZSxmYWxzZSxzZWFyY2hVcmwsKHJlc3ApPT57XG4gICAgICAgICAgICBpZihyZXNwKXtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOnJlc3B9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBpZih0aGlzLnN0YXRlLmRhdGEpe1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8U2VhcmNoUmVzdWx0c1ZpZXcgey4uLnRoaXMucHJvcHN9IGxhYkxpc3Q9e3RoaXMuc3RhdGUuZGF0YX0gLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG4gICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgc2hvd1BhY2thZ2VTdHJpcD17dHJ1ZX0vPlxuICAgICAgICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwYXNzZWRQcm9wcykgPT4ge1xuICAgIC8qKlxuICAgICAqIGluaXRpYWxTZXJ2ZXJEYXRhIGlzIHNlcnZlciByZW5kZXJlZCBhc3luYyBkYXRhIHJlcXVpcmVkIGJ1aWxkIGh0bWwgb24gc2VydmVyLiBcbiAgICAgKi9cbiAgICBsZXQgaW5pdGlhbFNlcnZlckRhdGEgPSBudWxsXG4gICAgbGV0IHsgc3RhdGljQ29udGV4dCB9ID0gcGFzc2VkUHJvcHNcbiAgICBpZiAoc3RhdGljQ29udGV4dCAmJiBzdGF0aWNDb250ZXh0LmRhdGEpIHtcbiAgICAgICAgaW5pdGlhbFNlcnZlckRhdGEgPSBzdGF0aWNDb250ZXh0LmRhdGFcbiAgICB9XG5cbiAgICBjb25zdCB7XG4gICAgICAgIHNlbGVjdGVkTG9jYXRpb24sXG4gICAgICAgIHNlbGVjdGVkQ3JpdGVyaWFzLFxuICAgICAgICBmaWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgTE9BREVEX1NFQVJDSF9DUklURVJJQV9MQUIsXG4gICAgICAgIGxvY2F0aW9uVHlwZSxcbiAgICAgICAgZmV0Y2hOZXdSZXN1bHRzLFxuICAgICAgICBjb3Jwb3JhdGVDb3Vwb24sXG4gICAgICAgIHBhZ2UsXG4gICAgICAgIHNlYXJjaF9pZF9kYXRhLFxuICAgICAgICBuZXh0U2VsZWN0ZWRDcml0ZXJpYXMsXG4gICAgICAgIGN1cnJlbnRTZWFyY2hlZENyaXRlcmlhcyxcbiAgICAgICAgbmV4dEZpbHRlckNyaXRlcmlhLFxuICAgICAgICBjb21wYXJlX3BhY2thZ2VzLFxuICAgIH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfTEFCU1xuXG4gICAgY29uc3Qge1xuICAgICAgICBvZmZlckxpc3RcbiAgICB9ID0gc3RhdGUuVVNFUlxuXG4gICAgY29uc3QgTEFCUyA9IHN0YXRlLkxBQl9TRUFSQ0hfREFUQVxuICAgIGNvbnN0IHsgc2hvdzQwNCwgbGFiTGlzdCwgTE9BREVEX0xBQlNfU0VBUkNILCBjb3VudCwgU0VUX0ZST01fU0VSVkVSLCBjdXJyX3BhZ2UsIHNlb0RhdGEsIHRlc3RfZGF0YSB9ID0gc3RhdGUuTEFCX1NFQVJDSFxuICAgIGNvbnN0IHsgbWVyZ2VVcmxTdGF0ZSwgY29tbW9uX3NldHRpbmdzIH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfT1BEXG5cbiAgICBjb25zdCB7XG4gICAgICAgIGlzX2xvZ2luX3VzZXJfaW5zdXJlZCxcbiAgICAgICAgaW5zdXJhbmNlX3N0YXR1cyxcbiAgICAgICAgZGV2aWNlX2luZm9cbiAgICB9ID0gc3RhdGUuVVNFUlxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgc2VsZWN0ZWRDcml0ZXJpYXMsXG4gICAgICAgIGZpbHRlckNyaXRlcmlhLFxuICAgICAgICBMT0FERURfU0VBUkNIX0NSSVRFUklBX0xBQixcbiAgICAgICAgTEFCUyxcbiAgICAgICAgbGFiTGlzdCwgTE9BREVEX0xBQlNfU0VBUkNILFxuICAgICAgICBjb3VudCxcbiAgICAgICAgU0VUX0ZST01fU0VSVkVSLFxuICAgICAgICBpbml0aWFsU2VydmVyRGF0YSxcbiAgICAgICAgbG9jYXRpb25UeXBlLFxuICAgICAgICBmZXRjaE5ld1Jlc3VsdHMsXG4gICAgICAgIGNvcnBvcmF0ZUNvdXBvbixcbiAgICAgICAgcGFnZSxcbiAgICAgICAgY3Vycl9wYWdlLFxuICAgICAgICBzZWFyY2hfaWRfZGF0YSxcbiAgICAgICAgbmV4dFNlbGVjdGVkQ3JpdGVyaWFzLFxuICAgICAgICBjdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMsXG4gICAgICAgIG5leHRGaWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgc2VvRGF0YSxcbiAgICAgICAgbWVyZ2VVcmxTdGF0ZSxcbiAgICAgICAgdGVzdF9kYXRhLFxuICAgICAgICBzaG93NDA0LFxuICAgICAgICBvZmZlckxpc3QsXG4gICAgICAgIGlzX2xvZ2luX3VzZXJfaW5zdXJlZCxcbiAgICAgICAgY29tcGFyZV9wYWNrYWdlcyxcbiAgICAgICAgaW5zdXJhbmNlX3N0YXR1cyxcbiAgICAgICAgZGV2aWNlX2luZm8sXG4gICAgICAgIGNvbW1vbl9zZXR0aW5nc1xuICAgIH1cblxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB1cmxTaG9ydG5lcjogKHVybCwgY2IpID0+IGRpc3BhdGNoKHVybFNob3J0bmVyKHVybCwgY2IpKSxcbiAgICAgICAgZ2V0VGVzdENhdGVnb3J5TGlzdDogKHN0YXRlLCBwYWdlLCBmcm9tX3NlcnZlciwgc2VhcmNoQnlVcmwsIGNiKSA9PiBkaXNwYXRjaChnZXRUZXN0Q2F0ZWdvcnlMaXN0KHN0YXRlLCBwYWdlLCBmcm9tX3NlcnZlciwgc2VhcmNoQnlVcmwsIGNiKSksXG4gICAgICAgIHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhOiAodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkKSA9PiBkaXNwYXRjaCh0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQpKSxcbiAgICAgICAgZ2V0RGlhZ25vc2lzQ3JpdGVyaWFSZXN1bHRzOiAoc2VhcmNoU3RyaW5nLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2goZ2V0RGlhZ25vc2lzQ3JpdGVyaWFSZXN1bHRzKHNlYXJjaFN0cmluZywgY2FsbGJhY2spKSxcbiAgICAgICAgY2xlYXJFeHRyYVRlc3RzOiAoKSA9PiBkaXNwYXRjaChjbGVhckV4dHJhVGVzdHMoKSksXG4gICAgICAgIG1lcmdlTEFCU3RhdGU6IChzdGF0ZSwgZmV0Y2hOZXdSZXN1bHRzKSA9PiBkaXNwYXRjaChtZXJnZUxBQlN0YXRlKHN0YXRlLCBmZXRjaE5ld1Jlc3VsdHMpKSxcbiAgICAgICAgZ2V0Rm9vdGVyRGF0YTogKHVybCkgPT4gZGlzcGF0Y2goZ2V0Rm9vdGVyRGF0YSh1cmwpKSxcbiAgICAgICAgc2V0TGFiU2VhcmNoSWQ6IChzZWFyY2hJZCwgZmlsdGVycywgc2V0RGVmYXVsdCkgPT4gZGlzcGF0Y2goc2V0TGFiU2VhcmNoSWQoc2VhcmNoSWQsIGZpbHRlcnMsIHNldERlZmF1bHQpKSxcbiAgICAgICAgZ2V0TGFiU2VhcmNoSWRSZXN1bHRzOiAoc2VhcmNoSWQsIHNlYXJjaFJlc3VsdHMpID0+IGRpc3BhdGNoKGdldExhYlNlYXJjaElkUmVzdWx0cyhzZWFyY2hJZCwgc2VhcmNoUmVzdWx0cykpLFxuICAgICAgICBzZWxlY3RTZWFyY2hUeXBlOiAodHlwZSkgPT4gZGlzcGF0Y2goc2VsZWN0U2VhcmNoVHlwZSh0eXBlKSksXG4gICAgICAgIHRvZ2dsZTQwNDogKHN0YXR1cykgPT4gZGlzcGF0Y2godG9nZ2xlNDA0KHN0YXR1cykpLFxuICAgICAgICBzZWxlY3RMYWJUaW1lU0xvdDogKHNsb3QsIHJlc2NoZWR1bGUpID0+IGRpc3BhdGNoKHNlbGVjdExhYlRpbWVTTG90KHNsb3QsIHJlc2NoZWR1bGUpKSxcbiAgICAgICAgZ2V0T2ZmZXJMaXN0OiAobGF0LGxvbmcpID0+IGRpc3BhdGNoKGdldE9mZmVyTGlzdChsYXQsbG9uZykpLFxuICAgICAgICB0b2dnbGVPUERDcml0ZXJpYTogKHR5cGUsIGNyaXRlcmlhLCBmb3JjZUFkZCwgZmlsdGVyKSA9PiBkaXNwYXRjaCh0b2dnbGVPUERDcml0ZXJpYSh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQsIGZpbHRlcikpLFxuICAgICAgICBzZWxlY3RMYWJBcHBvaW50bWVudFR5cGU6ICh0eXBlKSA9PiBkaXNwYXRjaChzZWxlY3RMYWJBcHBvaW50bWVudFR5cGUodHlwZSkpLFxuICAgICAgICByZXNldFBrZ0NvbXBhcmU6KCkgPT4gZGlzcGF0Y2gocmVzZXRQa2dDb21wYXJlKCkpLFxuICAgICAgICBsb2FkT1BESW5zdXJhbmNlOiAoY2l0eSkgPT4gZGlzcGF0Y2gobG9hZE9QREluc3VyYW5jZShjaXR5KSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKGNhdGVnb3J5VGVzdFJlc3VsdHMpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==