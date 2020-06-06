(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[78],{

/***/ "./dev/js/components/diagnosis/searchResults/SearchResultsView.js":
/*!************************************************************************!*\
  !*** ./dev/js/components/diagnosis/searchResults/SearchResultsView.js ***!
  \************************************************************************/
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

var _index = __webpack_require__(/*! ../searchResults/labsList/index.js */ "./dev/js/components/diagnosis/searchResults/labsList/index.js");

var _index2 = _interopRequireDefault(_index);

var _criteriaSearch = __webpack_require__(/*! ../../commons/criteriaSearch */ "./dev/js/components/commons/criteriaSearch/index.js");

var _criteriaSearch2 = _interopRequireDefault(_criteriaSearch);

var _newTopBar = __webpack_require__(/*! ./newTopBar */ "./dev/js/components/diagnosis/searchResults/newTopBar/index.js");

var _newTopBar2 = _interopRequireDefault(_newTopBar);

var _index3 = __webpack_require__(/*! ../../../helpers/navigate/index.js */ "./dev/js/helpers/navigate/index.js");

var _index4 = _interopRequireDefault(_index3);

var _config = __webpack_require__(/*! ../../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _HelmetTags = __webpack_require__(/*! ../../commons/HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

var _footer = __webpack_require__(/*! ../../commons/Home/footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _result_count = __webpack_require__(/*! ./topBar/result_count.js */ "./dev/js/components/diagnosis/searchResults/topBar/result_count.js");

var _result_count2 = _interopRequireDefault(_result_count);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm */ "./dev/js/helpers/gtm.js");

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

var SearchResultsView = function (_React$Component) {
    _inherits(SearchResultsView, _React$Component);

    function SearchResultsView(props) {
        _classCallCheck(this, SearchResultsView);

        var _this = _possibleConstructorReturn(this, (SearchResultsView.__proto__ || Object.getPrototypeOf(SearchResultsView)).call(this, props));

        var seoData = null;
        var footerData = null;
        if (_this.props.initialServerData) {
            seoData = _this.props.initialServerData.seoData;
            footerData = _this.props.initialServerData.footerData;
        }
        var parsed = queryString.parse(_this.props.location.search);
        _this.state = {
            // seoData, 
            footerData: footerData,
            seoFriendly: _this.props.match.url.includes('-lbcit') || _this.props.match.url.includes('-lblitcit'),
            lab_card: _this.props.location.search.includes('lab_card') || null,
            showError: false,
            showChatWithus: false,
            search_id: '',
            setSearchId: false,
            quickFilter: {},
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

            var parsed = queryString.parse(this.props.location.search);
            if (this.props.mergeUrlState) {
                var getSearchId = true;
                //if search id exist in url then we get data for that search id from store
                if (this.props.location.search.includes('search_id')) {

                    if (this.props.search_id_data && this.props.search_id_data[parsed.search_id] && this.props.search_id_data[parsed.search_id].data) {

                        getSearchId = false;
                        if (this.props.search_id_data[parsed.search_id].data.result && this.props.search_id_data[parsed.search_id].data.result.length && !this.props.fetchNewResults) {
                            this.props.getLabSearchIdResults(parsed.search_id, this.props.search_id_data[parsed.search_id]);
                            this.setState({ search_id: parsed.search_id });
                        } else {

                            var filters = {};
                            filters.commonSelectedCriterias = this.props.search_id_data[parsed.search_id].commonSelectedCriterias;
                            filters.filterCriteria = this.props.search_id_data[parsed.search_id].filterCriteria;
                            this.setState({ search_id: parsed.search_id }, function () {
                                /*let new_url = this.buildURI(this.props)
                                this.props.history.replace(new_url)*/
                                var page = 1;
                                if (!_this2.props.fetchNewResults) {
                                    page = parsed.page;
                                }
                                _this2.props.setLabSearchId(parsed.search_id, filters, page || 1);
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

                        //Check if user insured
                        if (_this2.props.is_login_user_insured && _this2.props.insurance_status == 1) {
                            _filters.filterCriteria = _extends({}, _filters.filterCriteria);
                            _filters.filterCriteria.is_insured = true;
                        }

                        var new_url = _this2.buildURI(_this2.props);
                        _this2.props.history.replace(new_url);
                        _this2.props.setLabSearchId(search_id, _filters, parsed.page || 1);
                    });
                }

                if (this.props.fetchNewResults) {
                    //this.getLabList(this.props)
                    if (window) {
                        window.scrollTo(0, 0);
                    }
                }
            }
            if (this.state.seoFriendly) {
                this.props.getFooterData(this.props.match.url.split('/')[1]).then(function (footerData) {
                    if (footerData) {
                        _this2.setState({ footerData: footerData });
                    }
                });
            }

            this.setState({ showChatWithus: true });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            var _this3 = this;

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
                filters.commonSelectedCriterias = props.currentSearchedCriterias;
                filters.filterCriteria = props.filterCriteria;
                if (search_id) {
                    this.setState({ search_id: search_id }, function () {
                        var new_url = _this3.buildURI(props);
                        _this3.props.history.replace(new_url);
                        _this3.props.setLabSearchId(search_id, filters, page);
                    });
                } else {
                    search_id = this.generateSearchId();
                    this.setState({ search_id: search_id }, function () {

                        //Check if user insured
                        if (props.is_login_user_insured && props.insurance_status == 1) {
                            filters.filterCriteria = _extends({}, filters.filterCriteria);
                            filters.filterCriteria.is_insured = true;
                        }

                        var new_url = _this3.buildURI(props);
                        _this3.props.history.replace(new_url);
                        _this3.props.setLabSearchId(search_id, filters, page);
                    });
                }

                if (window) {
                    window.scrollTo(0, 0);
                }
            }
            if (props.fetchNewResults && props.fetchNewResults != this.props.fetchNewResults && this.state.search_id) {
                this.setState({ setSearchId: true });
                this.getLabList(props);
                // if (window) {
                //     window.scrollTo(0, 0)
                // }
            } else if (props.fetchNewResults && this.state.search_id == search_id && !this.state.setSearchId && this.state.search_id) {
                this.setState({ setSearchId: true });
                this.getLabList(props);
            } else {
                //Whenever location changes make api calls
                if (props.selectedLocation != this.props.selectedLocation && props.mergeUrlState) {
                    var new_url = this.buildURI(props);
                    this.props.history.replace(new_url);
                }
            }
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
        key: 'getLabList',
        value: function getLabList() {
            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            var _this4 = this;

            var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            //apply filters and get updated data
            var searchUrl = null;
            if (this.props.match.url.includes('-lbcit') || this.props.match.url.includes('-lblitcit')) {
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
            this.props.getLabs(state, page, false, searchUrl, function () {
                // this.setState({ seoData: args[1] })
                if (cb) {
                    cb.apply(undefined, arguments);
                } else {
                    var new_url = _this4.buildURI(state);
                    _this4.props.history.replace(new_url);
                }
            }).catch(function (e) {
                _this4.setState({ showError: true });
            });
        }
    }, {
        key: 'applyFilters',
        value: function applyFilters(filterState) {
            // clear LANDING_PAGE to enable loader
            //apply filters 
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
            this.props.mergeLABState({ filterCriteria: filterState, search_id_data: search_id_data, page: 1 });
            //this.props.setLabSearchId(this.state.search_id, filterState, false)
            if (window) {
                window.scrollTo(0, 0);
            }
        }
    }, {
        key: 'isFilterApplied',
        value: function isFilterApplied(filterCriteria) {
            //check if any filters applied to the search
            var is_filter_applied = false;
            if (filterCriteria) {
                var sort_on = filterCriteria.sort_on || "";
                var sort_order = filterCriteria.sort_order || "";
                var availability = filterCriteria.availability || [];
                var avg_ratings = filterCriteria.avg_ratings || '';
                var home_visit = filterCriteria.home_visit || false;
                var lab_visit = filterCriteria.lab_visit || false;

                var lab_name = filterCriteria.lab_name || "";
                var network_id = filterCriteria.network_id || "";
                var is_insured = filterCriteria.is_insured || false;

                //Check if any filter applied        

                if (sort_on) {
                    is_filter_applied = true;
                }

                if (availability && availability.length) {
                    is_filter_applied = true;
                }

                if (avg_ratings && avg_ratings.length) {
                    is_filter_applied = true;
                }

                if (home_visit) {
                    is_filter_applied = true;
                }

                if (lab_visit) {
                    is_filter_applied = true;
                }
            }
            return is_filter_applied;
        }
    }, {
        key: 'buildURI',
        value: function buildURI(state) {
            //keep on updating url with the updated filters 
            var selectedLocation = state.selectedLocation,
                currentSearchedCriterias = state.currentSearchedCriterias,
                filterCriteria = state.filterCriteria,
                locationType = state.locationType,
                page = state.page;

            var testIds = currentSearchedCriterias.filter(function (x) {
                return x.type == 'test';
            }).map(function (x) {
                return x.id;
            });

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
            /*
                    let min_distance = filterCriteria.distanceRange[0]
                    let max_distance = filterCriteria.distanceRange[1]
                    let min_price = filterCriteria.priceRange[0]
                    let max_price = filterCriteria.priceRange[1]
                    let sort_on = filterCriteria.sort_on || ""
            */
            var sort_on = filterCriteria.sort_on || "";
            var sort_order = filterCriteria.sort_order || "";
            var availability = filterCriteria.availability || [];
            var avg_ratings = filterCriteria.avg_ratings || '';
            var home_visit = filterCriteria.home_visit || false;
            var lab_visit = filterCriteria.lab_visit || false;

            var lab_name = filterCriteria.lab_name || "";
            var network_id = filterCriteria.network_id || "";
            var is_insured = filterCriteria.is_insured || false;

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

            if (home_visit) {
                is_filter_applied = true;
            }

            if (lab_visit) {
                is_filter_applied = true;
            }

            if (lab_name) {
                is_filter_applied = true;
            }

            if (network_id) {
                is_filter_applied = true;
            }

            var is_params_exist = false;

            if (is_filter_applied || !this.state.seoFriendly) {

                url = window.location.pathname + '?test_ids=' + (testIds || "") + '&lat=' + lat + '&long=' + long + '&sort_on=' + sort_on + '&sort_order=' + sort_order + '&availability=' + availability + '&home_visit=' + home_visit + '&lab_visit=' + lab_visit + '&avg_ratings=' + avg_ratings + '&lab_name=' + lab_name + '&place_id=' + place_id + '&locationType=' + (locationType || "") + '&network_id=' + network_id + '&search_id=' + this.state.search_id + '&is_insured=' + is_insured;
                is_params_exist = true;
            } else if (this.state.seoFriendly) {
                url = '' + window.location.pathname;
            }

            if (this.state.showNonIpdPopup) {
                url += '' + ('&show_popup=' + this.state.showNonIpdPopup);
            }

            if (this.state.lab_card) {
                url += (is_params_exist ? '&' : '?') + 'lab_card=true';
                is_params_exist = true;
            }

            if (page > 1) {
                url += (is_params_exist ? '&' : '?') + 'page=' + page;
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
        key: 'nonIpdLeads',
        value: function nonIpdLeads(phone_number) {
            var _this5 = this;

            var parsed = queryString.parse(this.props.location.search);
            var criteriaStr = this.getCriteriaString(this.props.currentSearchedCriterias);
            var data = { phone_number: phone_number, lead_source: 'Labads', source: parsed, lead_type: 'LABADS', test_name: criteriaStr, exitpoint_url: 'http://docprime.com' + this.props.location.pathname };
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
            var gtm_data = { 'Category': 'ConsumerApp', 'Action': 'NonIpdSearchListingSubmitClick', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'non-ipd-search-listing-Submit-click' };
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
                    'Category': 'ConsumerApp', 'Action': 'NonIpdSearchListingCrossClick', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'non-ipd-search-listing-cross-click'
                };
                _gtm2.default.sendEvent({ data: data });
                this.setState({ to_be_force: 0 });
            }
        }
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
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

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
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('div', { id: 'map', style: { display: 'none' } }),
                _react2.default.createElement(_HelmetTags2.default, { tagsData: {
                        canonicalUrl: '' + _config2.default.API_BASE_URL + this.props.match.url + page,
                        title: this.getMetaTagsData(this.props.seoData).title,
                        description: this.getMetaTagsData(this.props.seoData).description,
                        prev: prev,
                        next: next
                    }, noIndex: !this.state.seoFriendly }),
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
                        _react2.default.createElement(_newTopBar2.default, _extends({}, this.props, { applyFilters: this.applyFilters.bind(this), seoData: this.props.seoData, lab_card: !!this.state.lab_card, seoFriendly: this.state.seoFriendly, quickFilter: this.state.quickFilter, resetQuickFilters: this.resetQuickFilters.bind(this) })),
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
                                            'Can\u2019t find your lab here?',
                                            _react2.default.createElement('br', null),
                                            'Help us to list your lab'
                                        ),
                                        _react2.default.createElement(
                                            'button',
                                            { className: 'referDoctorbtn', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    var data = {
                                                        'Category': 'ConsumerApp', 'Action': 'ReferLabListNoresult', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'refer-lab-list-noresult'
                                                    };
                                                    _gtm2.default.sendEvent({ data: data });
                                                    _this6.props.history.push('/doctorsignup?member_type=2');
                                                } },
                                            'Refer your Lab'
                                        )
                                    )
                                )
                            )
                        ) : _react2.default.createElement(
                            _react2.default.Fragment,
                            null,
                            _react2.default.createElement(_index2.default, _extends({}, this.props, { applyFilters: this.applyFilters.bind(this), getLabList: this.getLabList.bind(this), lab_card: !!this.state.lab_card, applyQuickFilter: this.applyQuickFilter.bind(this) })),
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

/***/ "./dev/js/components/diagnosis/searchResults/index.js":
/*!************************************************************!*\
  !*** ./dev/js/components/diagnosis/searchResults/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SearchResultsView = __webpack_require__(/*! ./SearchResultsView.js */ "./dev/js/components/diagnosis/searchResults/SearchResultsView.js");

var _SearchResultsView2 = _interopRequireDefault(_SearchResultsView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SearchResultsView2.default;

/***/ }),

/***/ "./dev/js/components/diagnosis/searchResults/labsList/LabsList.js":
/*!************************************************************************!*\
  !*** ./dev/js/components/diagnosis/searchResults/labsList/LabsList.js ***!
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
                this.setState(_extends({}, props.filterCriteria.avg_ratings || ''));
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
                _this3.setState({ loading: false });
                setTimeout(function () {
                    _this3.setState({ hasMore: hasMore });
                }, 1000);
            });
        }
    }, {
        key: 'testInfo',
        value: function testInfo() {
            {/*var url_string = window.location.href;
                var url = new URL(url_string);
                var test_ids = url.searchParams.get("test_ids");
                this.props.history.push('/search/testinfo?test_ids=' + test_ids + '&from=searchresults')
                let data = {
                   'Category': 'ConsumerApp', 'Action': 'testInfoClick', 'CustomerID': GTM.getUserId() || '', 'leadid': 0, 'event': 'test-info-click', 'pageSource': 'lab-result-page'
                }
                GTM.sendEvent({ data: data })*/}
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
                'Category': 'LabQuickFilterClicked', 'Action': 'LabQuickFilterClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lab-quick-filter-clicked', 'url': window.location.pathname, 'type': type, 'val': val
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
        key: 'render',
        value: function render() {
            var _this5 = this;

            var show_details = false;
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

            return _react2.default.createElement(
                'section',
                { className: 'wrap search-book-result variable-content-section', ref: 'checkIfExists' },
                this.state.renderBlock ? _react2.default.createElement(_Loader2.default, null) : _react2.default.createElement(
                    'div',
                    { className: 'container-fluid cardMainPaddingRmv' },
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
                                    labList.map(function (labId, i) {
                                        if (LABS[labId]) {

                                            return _react2.default.createElement(
                                                _react2.default.Fragment,
                                                { key: i },
                                                i == 4 && !_this5.state.avg_ratings ? _react2.default.createElement(
                                                    'div',
                                                    { className: 'sort-sub-filter-container mb-3' },
                                                    _react2.default.createElement(
                                                        'p',
                                                        null,
                                                        'Filter by ',
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'fw-700' },
                                                            ' Ratings '
                                                        ),
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'fw-500 sort-more-filter', onClick: _this5.viewMoreClicked.bind(_this5) },
                                                            'More filters'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'srt-sb-btn-cont' },
                                                        _react2.default.createElement(
                                                            'button',
                                                            { className: '' + (_this5.state.avg_ratings == '3' ? 'srt-act' : ''), onClick: _this5.applyQuickFilters.bind(_this5, 'avg_ratings', '3', false) },
                                                            '3.0 +'
                                                        ),
                                                        _react2.default.createElement(
                                                            'button',
                                                            { className: '' + (_this5.state.avg_ratings == '4' ? 'srt-act' : ''), onClick: _this5.applyQuickFilters.bind(_this5, 'avg_ratings', '4', false) },
                                                            '4.0 +'
                                                        ),
                                                        _react2.default.createElement(
                                                            'button',
                                                            { className: '' + (_this5.state.avg_ratings == '4.5' ? 'srt-act' : ''), onClick: _this5.applyQuickFilters.bind(_this5, 'avg_ratings', '4.5', false) },
                                                            '4.5 +'
                                                        )
                                                    )
                                                ) : '',
                                                i == 5 && _this5.props.offerList && _this5.props.offerList.filter(function (x) {
                                                    return x.slider_location === 'lab_search_results';
                                                }).length && !_this5.state.is_insured ?
                                                // <div className="col-12">
                                                //     <BannerCarousel {...this.props} sliderLocation="lab_search_results" />
                                                // </div> : ''
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'banner-cont-height home-page-banner-div mb-3 mr-0 banner-md-margn' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'hidderBanner banner-carousel-div d-md-none' },
                                                        _react2.default.createElement('div', { className: 'divHeight m-0', style: { marginBottom: "5px!important" } })
                                                    ),
                                                    _react2.default.createElement(_bannerCarousel2.default, _extends({}, _this5.props, { sliderLocation: 'lab_search_results' }))
                                                ) : '',
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _this5.props.lab_card ? _react2.default.createElement(_index2.default, _extends({}, _this5.props, { details: LABS[labId], key: i, rank: i })) : _react2.default.createElement(_index2.default, _extends({}, _this5.props, { details: LABS[labId], key: i, rank: i }))
                                                ),
                                                 false ? undefined : ''
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

    return LabsList;
}(_react2.default.Component);

exports.default = LabsList;

/***/ }),

/***/ "./dev/js/components/diagnosis/searchResults/labsList/index.js":
/*!*********************************************************************!*\
  !*** ./dev/js/components/diagnosis/searchResults/labsList/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LabsList = __webpack_require__(/*! ./LabsList.js */ "./dev/js/components/diagnosis/searchResults/labsList/LabsList.js");

var _LabsList2 = _interopRequireDefault(_LabsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _LabsList2.default;

/***/ }),

/***/ "./dev/js/components/diagnosis/searchResults/newTopBar/index.js":
/*!**********************************************************************!*\
  !*** ./dev/js/components/diagnosis/searchResults/newTopBar/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _newTopBar = __webpack_require__(/*! ./newTopBar.js */ "./dev/js/components/diagnosis/searchResults/newTopBar/newTopBar.js");

var _newTopBar2 = _interopRequireDefault(_newTopBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _newTopBar2.default;

/***/ }),

/***/ "./dev/js/components/diagnosis/searchResults/newTopBar/newTopBar.js":
/*!**************************************************************************!*\
  !*** ./dev/js/components/diagnosis/searchResults/newTopBar/newTopBar.js ***!
  \**************************************************************************/
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
            var _this2 = this;

            this.setState(_extends({}, props.filterCriteria, { quickFilter: props.quickFilter || {} }), function () {
                if (_this2.state.quickFilter && _this2.state.quickFilter.viewMore) {
                    _this2.sortFilterClicked();
                }
            });

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

            // filter sticky dynamic height js
            // document.addEventListener('load', () => {
            //     const  headHeight = document.getElementById('is_header');
            //     headHeight.clientHeight;
            //     const filterHeight = document.getElementById('fis_header');
            //     filterHeight.style.top = headHeight.clientHeight;
            //     console.log(filterHeight.style.top = headHeight.clientHeight);
            // })
        }
    }, {
        key: 'applyFilters',
        value: function applyFilters() {
            var filterState = {
                sort_on: this.state.sort_on,
                sort_order: this.state.sort_order,
                availability: this.state.availability,
                avg_ratings: this.state.avg_ratings,
                home_visit: this.state.home_visit,
                lab_visit: this.state.lab_visit,
                is_insured: this.state.is_insured
            };
            var data = {
                'Category': 'FilterClick', 'Action': 'Clicked on Filter', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lab-filter-clicked', 'url': window.location.pathname, 'sort_order': this.state.sort_order || '', 'availability': this.state.availability, 'avg_ratings': this.state.avg_ratings, 'lab_visit': this.state.lab_visit, 'home_visit': this.state.home_visit, 'sort_on': this.state.sort_on
            };

            _gtm2.default.sendEvent({ data: data });

            var ifAnyFilterApplied = this.isDataFiltered({}, true);
            if (ifAnyFilterApplied) {
                this.props.applyFilters(filterState);
            }

            this.setState({ dropdown_visible: false });
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
        key: 'handleClose',
        value: function handleClose() {
            var reset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var e = arguments[1];


            if (reset) {
                var data = {
                    'Category': 'ConsumerApp', 'Action': 'ResetLabFilter', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'reset-lab-filter', 'url': window.location.pathname, 'sort_order': this.state.sort_order || '', 'availability': this.state.availability, 'avg_ratings': this.state.avg_ratings, 'lab_visit': this.state.lab_visit, 'home_visit': this.state.home_visit, 'sort_on': this.state.sort_on
                };
                _gtm2.default.sendEvent({ data: data });

                var resetFilters = {
                    sort_on: '',
                    sort_order: '',
                    avg_ratings: '',
                    home_visit: false,
                    lab_visit: false,
                    availability: []
                };

                this.setState(_extends({}, resetFilters, {
                    quickFilter: {}
                }));
            } else {
                var _data = {
                    'Category': 'ConsumerApp', 'Action': 'CloseLabFilter', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'close-lab-filter', 'url': window.location.pathname, 'sort_order': this.state.sort_order || '', 'availability': this.state.availability, 'avg_ratings': this.state.avg_ratings, 'lab_visit': this.state.lab_visit, 'home_visit': this.state.home_visit, 'sort_on': this.state.sort_on
                };
                _gtm2.default.sendEvent({ data: _data });
                this.setState(_extends({
                    dropdown_visible: false
                }, this.state.previous_filters, {
                    quickFilter: {}
                }));
            }

            //this.props.resetQuickFilters()
        }
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
    }, {
        key: 'shortenUrl',
        value: function shortenUrl() {
            var _this3 = this;

            if (window) {
                var url = window.location.href + '&force_location=true';
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
        key: 'sortFilterClicked',
        value: function sortFilterClicked() {

            var data = {
                'Category': 'ConsumerApp', 'Action': 'LabSortFilterClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lab-sort-filter-clicked', 'url': window.location.pathname, 'sort_order': this.state.sort_order || '', 'availability': this.state.availability, 'avg_ratings': this.state.avg_ratings, 'lab_visit': this.state.lab_visit, 'home_visit': this.state.home_visit, 'sort_on': this.state.sort_on
            };
            _gtm2.default.sendEvent({ data: data });
            var currentFilters = {
                sort_on: this.state.sort_on,
                sort_order: this.state.sort_order,
                avg_ratings: this.state.avg_ratings,
                availability: [].concat(this.state.availability) || [],
                home_visit: this.state.home_visit,
                lab_visit: this.state.lab_visit
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

                        if (filter.includes('availability')) {

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
                    hospital_type: ''
                };

                try {
                    var _filterCount = 0;
                    for (var _filter in filterData) {

                        if (_filter.includes('hospital_type')) {
                            if (this.state['lab_visit'] || this.state['home_visit']) {
                                _filterCount++;
                            }
                        } else if (_filter == 'availability') {
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
        }
    }, {
        key: 'toggleInsured',
        value: function toggleInsured() {
            var _this4 = this;

            var data = {
                'Category': 'CoveredUnderLABInsuranceClicked', 'Action': 'CoveredUnderLABInsuranceClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'covered-under-lab-insurance-clicked', 'url': window.location.pathname
            };
            _gtm2.default.sendEvent({ data: data });

            this.setState({ is_insured: !this.state.is_insured }, function () {

                var filterState = {
                    sort_on: _this4.state.sort_on,
                    sort_order: _this4.state.sort_order,
                    availability: _this4.state.availability,
                    avg_ratings: _this4.state.avg_ratings,
                    home_visit: _this4.state.home_visit,
                    lab_visit: _this4.state.lab_visit,
                    is_insured: _this4.state.is_insured
                };
                _this4.props.applyFilters(filterState);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            var selectedTests = [];
            if (this.props.currentSearchedCriterias.length) {
                for (var i = 0; i < this.props.currentSearchedCriterias.length; i++) {
                    selectedTests.push(this.props.currentSearchedCriterias[i].id);
                }
            }

            var criteriaStr = this.getCriteriaString(this.props.currentSearchedCriterias);
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
                            )
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
                    { className: 'filter-row sticky-header mbl-stick', id: 'fis_header' },
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
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'd-none d-md-inline-block' },
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
                                                    _this5.setState({ shortURL: "" });
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
                                                            _this5.setState({ shortURL: "" });
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
                        )
                    ),
                    this.state.showLocationPopup ? _react2.default.createElement(_locationElements2.default, _extends({}, this.props, { onRef: function onRef(ref) {
                            return _this5.child = ref;
                        }, resultType: 'list', isTopbar: true, hideLocationPopup: function hideLocationPopup() {
                            return _this5.hideLocationPopup();
                        }, locationName: locationName })) : '',
                    this.state.showLocationPopup && this.state.overlayVisible && !this.props.lab_card ? _react2.default.createElement('div', { className: 'locationPopup-overlay', onClick: function onClick() {
                            return _this5.overlayClick();
                        } }) : '',
                    this.state.showLocationPopup && this.props.lab_card && this.state.showPopupContainer ? _react2.default.createElement('div', { className: 'popupContainer-overlay' }) : '',
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

/***/ "./dev/js/components/diagnosis/searchResults/topBar/result_count.js":
/*!**************************************************************************!*\
  !*** ./dev/js/components/diagnosis/searchResults/topBar/result_count.js ***!
  \**************************************************************************/
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

/***/ "./dev/js/containers/diagnosis/SearchResults.js":
/*!******************************************************!*\
  !*** ./dev/js/containers/diagnosis/SearchResults.js ***!
  \******************************************************/
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

var _index2 = __webpack_require__(/*! ../../components/diagnosis/searchResults/index.js */ "./dev/js/components/diagnosis/searchResults/index.js");

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
            // this.props.loadOPDInsurance(this.props.selectedLocation)
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

                    (0, _urltoState.labSearchStateBuilder)(null, queryParams, true, location_ms).then(function (state) {
                        store.dispatch((0, _index.mergeLABState)(state));

                        var searchUrl = null;
                        if (match.url.includes('-lbcit') || match.url.includes('-lblitcit')) {
                            searchUrl = match.url.toLowerCase();
                        }
                        var page = 1;
                        if (queryParams.page) {
                            page = parseInt(queryParams.page);
                        }
                        return store.dispatch((0, _index.getLabs)(state, page, true, searchUrl, function (loadMore) {
                            var noResults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

                            if (noResults) {
                                resolve({ status: 404 });
                            }
                            if (match.url.includes('-lbcit') || match.url.includes('-lblitcit')) {
                                (0, _index.getFooterData)(match.url.split("/")[1])().then(function (footerData) {
                                    footerData = footerData || null;
                                    resolve({ footerData: footerData });
                                }).catch(function (e) {
                                    resolve({});
                                });
                            } else {
                                resolve({});
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
        device_info = _state$USER.device_info,
        common_utm_tags = _state$USER.common_utm_tags;


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
        common_settings: common_settings,
        common_utm_tags: common_utm_tags
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        urlShortner: function urlShortner(url, cb) {
            return dispatch((0, _index.urlShortner)(url, cb));
        },
        getLabs: function getLabs(state, page, from_server, searchByUrl, cb) {
            return dispatch((0, _index.getLabs)(state, page, from_server, searchByUrl, cb));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvc2VhcmNoUmVzdWx0cy9TZWFyY2hSZXN1bHRzVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvc2VhcmNoUmVzdWx0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvc2VhcmNoUmVzdWx0cy9sYWJzTGlzdC9MYWJzTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvc2VhcmNoUmVzdWx0cy9sYWJzTGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvc2VhcmNoUmVzdWx0cy9uZXdUb3BCYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL3NlYXJjaFJlc3VsdHMvbmV3VG9wQmFyL25ld1RvcEJhci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvc2VhcmNoUmVzdWx0cy90b3BCYXIvcmVzdWx0X2NvdW50LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL2RpYWdub3Npcy9TZWFyY2hSZXN1bHRzLmpzIl0sIm5hbWVzIjpbInF1ZXJ5U3RyaW5nIiwicmVxdWlyZSIsIlNlYXJjaFJlc3VsdHNWaWV3IiwicHJvcHMiLCJzZW9EYXRhIiwiZm9vdGVyRGF0YSIsImluaXRpYWxTZXJ2ZXJEYXRhIiwicGFyc2VkIiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsInN0YXRlIiwic2VvRnJpZW5kbHkiLCJtYXRjaCIsInVybCIsImluY2x1ZGVzIiwibGFiX2NhcmQiLCJzaG93RXJyb3IiLCJzaG93Q2hhdFdpdGh1cyIsInNlYXJjaF9pZCIsInNldFNlYXJjaElkIiwicXVpY2tGaWx0ZXIiLCJzaG93Tm9uSXBkUG9wdXAiLCJzaG93X3BvcHVwIiwidG9fYmVfZm9yY2UiLCJpc19sZWFkX2VuYWJsZWQiLCJtZXJnZVVybFN0YXRlIiwiZ2V0U2VhcmNoSWQiLCJzZWFyY2hfaWRfZGF0YSIsImRhdGEiLCJyZXN1bHQiLCJsZW5ndGgiLCJmZXRjaE5ld1Jlc3VsdHMiLCJnZXRMYWJTZWFyY2hJZFJlc3VsdHMiLCJzZXRTdGF0ZSIsImZpbHRlcnMiLCJjb21tb25TZWxlY3RlZENyaXRlcmlhcyIsImZpbHRlckNyaXRlcmlhIiwicGFnZSIsInNldExhYlNlYXJjaElkIiwibmV4dFNlbGVjdGVkQ3JpdGVyaWFzIiwibmV4dEZpbHRlckNyaXRlcmlhIiwiZ2VuZXJhdGVTZWFyY2hJZCIsIndpbmRvdyIsInNjcm9sbFRvIiwiaXNfbG9naW5fdXNlcl9pbnN1cmVkIiwiaW5zdXJhbmNlX3N0YXR1cyIsImlzX2luc3VyZWQiLCJuZXdfdXJsIiwiYnVpbGRVUkkiLCJoaXN0b3J5IiwicmVwbGFjZSIsImdldEZvb3RlckRhdGEiLCJzcGxpdCIsInRoZW4iLCJjdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMiLCJnZXRMYWJMaXN0Iiwic2VsZWN0ZWRMb2NhdGlvbiIsInVpZF9zdHJpbmciLCJkdCIsIkRhdGUiLCJnZXRUaW1lIiwidXVpZCIsImMiLCJyIiwiTWF0aCIsInJhbmRvbSIsImZsb29yIiwidG9TdHJpbmciLCJ0YWciLCJwYXJhbVN0cmluZyIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImdldCIsImNiIiwic2VhcmNoVXJsIiwidG9Mb3dlckNhc2UiLCJnZXRMYWJzIiwiY2F0Y2giLCJlIiwiZmlsdGVyU3RhdGUiLCJPTl9MQU5ESU5HX1BBR0UiLCJyZXNldFF1aWNrRmlsdGVycyIsIk9iamVjdCIsImFzc2lnbiIsIm1lcmdlTEFCU3RhdGUiLCJpc19maWx0ZXJfYXBwbGllZCIsInNvcnRfb24iLCJzb3J0X29yZGVyIiwiYXZhaWxhYmlsaXR5IiwiYXZnX3JhdGluZ3MiLCJob21lX3Zpc2l0IiwibGFiX3Zpc2l0IiwibGFiX25hbWUiLCJuZXR3b3JrX2lkIiwibG9jYXRpb25UeXBlIiwidGVzdElkcyIsImZpbHRlciIsIngiLCJ0eXBlIiwibWFwIiwiaWQiLCJsYXQiLCJsb25nIiwicGxhY2VfaWQiLCJnZW9tZXRyeSIsImxuZyIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiaXNfcGFyYW1zX2V4aXN0IiwicGF0aG5hbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicGhvbmVfbnVtYmVyIiwiY3JpdGVyaWFTdHIiLCJnZXRDcml0ZXJpYVN0cmluZyIsImxlYWRfc291cmNlIiwic291cmNlIiwibGVhZF90eXBlIiwidGVzdF9uYW1lIiwiZXhpdHBvaW50X3VybCIsImNvbW1vbl91dG1fdGFncyIsInV0bV90YWdzIiwidmlzaXRvcl9pbmZvIiwiR1RNIiwiZ2V0VmlzaXRvckluZm8iLCJ2aXNpdF9pZCIsInZpc2l0b3JfaWQiLCJndG1fZGF0YSIsImdldFVzZXJJZCIsInNlbmRFdmVudCIsInNhdmVMZWFkUGhuTnVtYmVyIiwiU1RPUkFHRSIsImlzQWdlbnQiLCJOb25JcGRCb29raW5nTGVhZCIsInNldFRpbWVvdXQiLCJmcm9tIiwic2VsZWN0ZWRDcml0ZXJpYXMiLCJyZWR1Y2UiLCJmaW5hbCIsImN1cnIiLCJpIiwibmFtZSIsInNob3dfcGFnaW5hdGlvbiIsImxhYkxpc3QiLCJDT05GSUciLCJBUElfQkFTRV9VUkwiLCJjdXJyX3BhZ2UiLCJwYXJzZUludCIsInByZXYiLCJuZXh0IiwiY291bnQiLCJsYW5kaW5nX3BhZ2UiLCJkaXNwbGF5IiwiY2Fub25pY2FsVXJsIiwiZ2V0TWV0YVRhZ3NEYXRhIiwiTE9BREVEX0xBQlNfU0VBUkNIIiwiYXBwbHlGaWx0ZXJzIiwiYmluZCIsImlzRmlsdGVyQXBwbGllZCIsIkFTU0VUU19CQVNFX1VSTCIsImFwcGx5UXVpY2tGaWx0ZXIiLCJ2aWV3TW9yZSIsIndpZHRoIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwiY29sb3IiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkxhYnNMaXN0IiwiaGFzTW9yZSIsImxvYWRpbmciLCJyZW5kZXJCbG9jayIsImdldE9mZmVyTGlzdCIsInZhbCIsImlzQXJyYXkiLCJ2YWx1ZSIsInNlbGVjdGVkVmFsIiwiY29uY2F0IiwiZm91bmQiLCJndG1EYXRhIiwic2hvd19kZXRhaWxzIiwiTEFCUyIsInN0YXJ0X3BhZ2UiLCJtYXgiLCJsb2FkTW9yZSIsImxhYklkIiwidmlld01vcmVDbGlja2VkIiwiYXBwbHlRdWlja0ZpbHRlcnMiLCJvZmZlckxpc3QiLCJzbGlkZXJfbG9jYXRpb24iLCJtYXJnaW5Cb3R0b20iLCJUb3BCYXIiLCJhbmNob3JFbCIsImRyb3Bkb3duX3Zpc2libGUiLCJwcmV2aW91c19maWx0ZXJzIiwic2hvcnRVUkwiLCJzaG93TG9jYXRpb25Qb3B1cCIsInNvcnRGaWx0ZXJDbGlja2VkIiwib3ZlcmxheVZpc2libGUiLCJpZkFueUZpbHRlckFwcGxpZWQiLCJpc0RhdGFGaWx0ZXJlZCIsInJlc2V0IiwicmVzZXRGaWx0ZXJzIiwiaHJlZiIsInVybFNob3J0bmVyIiwiZXJyIiwidGlueV91cmwiLCJzZWFyY2hDaXRpZXMiLCJzaG93UG9wdXBDb250YWluZXIiLCJsb2NhdGlvbl91cmwiLCJjdXJyZW50RmlsdGVycyIsImZpbHRlckRhdGEiLCJjaGVja0lmQW55RmlsdGVyQXBwbGlsZWQiLCJmaWx0ZXJDb3VudCIsImFyckZsaXRlciIsImluZGV4T2YiLCJob3NwaXRhbF90eXBlIiwic2VsZWN0ZWRUZXN0cyIsImxvY2F0aW9uTmFtZSIsImZvcm1hdHRlZF9hZGRyZXNzIiwiaGFuZGxlQ2xvc2UiLCJ0b2dnbGVBbGxGaWx0ZXJzIiwiZ29Ub0xvY2F0aW9uIiwiaGVpZ2h0IiwibWFyZ2luTGVmdCIsImN1cnNvciIsInNob3J0ZW5VcmwiLCJzdG9wUHJvcGFnYXRpb24iLCJTbmFja0JhciIsInNob3ciLCJwb3MiLCJ0ZXh0IiwiY2hpbGQiLCJyZWYiLCJoaWRlTG9jYXRpb25Qb3B1cCIsIm92ZXJsYXlDbGljayIsImNoZWNrQXV0aCIsInRvZ2dsZUluc3VyZWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJ6SW5kZXgiLCJwb3B1cENvbnRhaW5lciIsIlNlYXJjaFJlc3VsdHMiLCJzaG93NDA0IiwidG9nZ2xlNDA0Iiwic3RvcmUiLCJxdWVyeVBhcmFtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwibG9jYXRpb25fbXMiLCJkaXNwYXRjaCIsIm5vUmVzdWx0cyIsInN0YXR1cyIsImNvbnNvbGUiLCJlcnJvciIsImNvbnRleHRUeXBlcyIsInJvdXRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsInBhc3NlZFByb3BzIiwic3RhdGljQ29udGV4dCIsIlNFQVJDSF9DUklURVJJQV9MQUJTIiwiTE9BREVEX1NFQVJDSF9DUklURVJJQV9MQUIiLCJjb3Jwb3JhdGVDb3Vwb24iLCJjb21wYXJlX3BhY2thZ2VzIiwiVVNFUiIsIkxBQl9TRUFSQ0hfREFUQSIsIkxBQl9TRUFSQ0giLCJTRVRfRlJPTV9TRVJWRVIiLCJ0ZXN0X2RhdGEiLCJTRUFSQ0hfQ1JJVEVSSUFfT1BEIiwiY29tbW9uX3NldHRpbmdzIiwiZGV2aWNlX2luZm8iLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJmcm9tX3NlcnZlciIsInNlYXJjaEJ5VXJsIiwidG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEiLCJjcml0ZXJpYSIsImZvcmNlQWRkIiwiZ2V0RGlhZ25vc2lzQ3JpdGVyaWFSZXN1bHRzIiwic2VhcmNoU3RyaW5nIiwiY2FsbGJhY2siLCJjbGVhckV4dHJhVGVzdHMiLCJzZWFyY2hJZCIsInNldERlZmF1bHQiLCJzZWFyY2hSZXN1bHRzIiwic2VsZWN0U2VhcmNoVHlwZSIsInNlbGVjdExhYlRpbWVTTG90Iiwic2xvdCIsInJlc2NoZWR1bGUiLCJ0b2dnbGVPUERDcml0ZXJpYSIsInNlbGVjdExhYkFwcG9pbnRtZW50VHlwZSIsInJlc2V0UGtnQ29tcGFyZSIsImxvYWRPUERJbnN1cmFuY2UiLCJjaXR5IiwiY2xlYXJWaXBTZWxlY3RlZFBsYW4iLCJudW1iZXIi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NEN2TCxNQUE1QyxDQUFULENBQXRDO0FBQUEsU0FkaEI7QUFlSG9NLGtDQUEwQixrQ0FBQ2xNLElBQUQ7QUFBQSxtQkFBVTBKLFNBQVMscUNBQXlCMUosSUFBekIsQ0FBVCxDQUFWO0FBQUEsU0FmdkI7QUFnQkhtTSx5QkFBZ0I7QUFBQSxtQkFBTXpDLFNBQVMsNkJBQVQsQ0FBTjtBQUFBLFNBaEJiO0FBaUJIMEMsMEJBQWtCLDBCQUFDQyxJQUFEO0FBQUEsbUJBQVUzQyxTQUFTLDZCQUFpQjJDLElBQWpCLENBQVQsQ0FBVjtBQUFBLFNBakJmO0FBa0JIQyw4QkFBcUI7QUFBQSxtQkFBSzVDLFNBQVMsa0NBQVQsQ0FBTDtBQUFBLFNBbEJsQjtBQW1CSHZILDJCQUFrQiwyQkFBQ3pHLElBQUQsRUFBTTZDLEVBQU47QUFBQSxtQkFBWW1MLFNBQVMsOEJBQWtCaE8sSUFBbEIsRUFBd0I2QyxFQUF4QixDQUFULENBQVo7QUFBQSxTQW5CZjtBQW9CSHlELDJCQUFrQiwyQkFBQ3VLLE1BQUQ7QUFBQSxtQkFBVzdDLFNBQVMsOEJBQWtCNkMsTUFBbEIsQ0FBVCxDQUFYO0FBQUE7QUFwQmYsS0FBUDtBQXNCSCxDQXZCRDs7a0JBeUJlLHlCQUFRdEMsZUFBUixFQUF5QmUsa0JBQXpCLEVBQTZDL0IsYUFBN0MsQyIsImZpbGUiOiI3OC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTGFic0xpc3QgZnJvbSAnLi4vc2VhcmNoUmVzdWx0cy9sYWJzTGlzdC9pbmRleC5qcydcbmltcG9ydCBDcml0ZXJpYVNlYXJjaCBmcm9tICcuLi8uLi9jb21tb25zL2NyaXRlcmlhU2VhcmNoJ1xuaW1wb3J0IFRvcEJhciBmcm9tICcuL25ld1RvcEJhcidcbmltcG9ydCBOQVZJR0FURSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL25hdmlnYXRlL2luZGV4LmpzJztcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vLi4vY29uZmlnJ1xuaW1wb3J0IEhlbG1ldFRhZ3MgZnJvbSAnLi4vLi4vY29tbW9ucy9IZWxtZXRUYWdzJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21tb25zL0hvbWUvZm9vdGVyJ1xuaW1wb3J0IFJlc3VsdENvdW50IGZyb20gJy4vdG9wQmFyL3Jlc3VsdF9jb3VudC5qcydcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0nXG5pbXBvcnQgTm9uSXBkUG9wdXBWaWV3IGZyb20gJy4uLy4uL2NvbW1vbnMvbm9uSXBkUG9wdXAuanMnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuXG5jbGFzcyBTZWFyY2hSZXN1bHRzVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIGxldCBzZW9EYXRhID0gbnVsbFxuICAgICAgICBsZXQgZm9vdGVyRGF0YSA9IG51bGxcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaW5pdGlhbFNlcnZlckRhdGEpIHtcbiAgICAgICAgICAgIHNlb0RhdGEgPSB0aGlzLnByb3BzLmluaXRpYWxTZXJ2ZXJEYXRhLnNlb0RhdGFcbiAgICAgICAgICAgIGZvb3RlckRhdGEgPSB0aGlzLnByb3BzLmluaXRpYWxTZXJ2ZXJEYXRhLmZvb3RlckRhdGFcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIC8vIHNlb0RhdGEsIFxuICAgICAgICAgICAgZm9vdGVyRGF0YSxcbiAgICAgICAgICAgIHNlb0ZyaWVuZGx5OiB0aGlzLnByb3BzLm1hdGNoLnVybC5pbmNsdWRlcygnLWxiY2l0JykgfHwgdGhpcy5wcm9wcy5tYXRjaC51cmwuaW5jbHVkZXMoJy1sYmxpdGNpdCcpLFxuICAgICAgICAgICAgbGFiX2NhcmQ6IHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdsYWJfY2FyZCcpIHx8IG51bGwsXG4gICAgICAgICAgICBzaG93RXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd0NoYXRXaXRodXM6IGZhbHNlLFxuICAgICAgICAgICAgc2VhcmNoX2lkOiAnJyxcbiAgICAgICAgICAgIHNldFNlYXJjaElkOiBmYWxzZSxcbiAgICAgICAgICAgIHF1aWNrRmlsdGVyOiB7fSxcbiAgICAgICAgICAgIHNob3dOb25JcGRQb3B1cDogcGFyc2VkLnNob3dfcG9wdXAsXG4gICAgICAgICAgICB0b19iZV9mb3JjZToxLFxuICAgICAgICAgICAgaXNfbGVhZF9lbmFibGVkOnRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubWVyZ2VVcmxTdGF0ZSkge1xuICAgICAgICAgICAgbGV0IGdldFNlYXJjaElkID0gdHJ1ZVxuICAgICAgICAgICAgLy9pZiBzZWFyY2ggaWQgZXhpc3QgaW4gdXJsIHRoZW4gd2UgZ2V0IGRhdGEgZm9yIHRoYXQgc2VhcmNoIGlkIGZyb20gc3RvcmVcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnc2VhcmNoX2lkJykpIHtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlYXJjaF9pZF9kYXRhICYmIHRoaXMucHJvcHMuc2VhcmNoX2lkX2RhdGFbcGFyc2VkLnNlYXJjaF9pZF0gJiYgdGhpcy5wcm9wcy5zZWFyY2hfaWRfZGF0YVtwYXJzZWQuc2VhcmNoX2lkXS5kYXRhKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgZ2V0U2VhcmNoSWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWFyY2hfaWRfZGF0YVtwYXJzZWQuc2VhcmNoX2lkXS5kYXRhLnJlc3VsdCAmJiB0aGlzLnByb3BzLnNlYXJjaF9pZF9kYXRhW3BhcnNlZC5zZWFyY2hfaWRdLmRhdGEucmVzdWx0Lmxlbmd0aCAmJiAhdGhpcy5wcm9wcy5mZXRjaE5ld1Jlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0TGFiU2VhcmNoSWRSZXN1bHRzKHBhcnNlZC5zZWFyY2hfaWQsIHRoaXMucHJvcHMuc2VhcmNoX2lkX2RhdGFbcGFyc2VkLnNlYXJjaF9pZF0pXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoX2lkOiBwYXJzZWQuc2VhcmNoX2lkIH0pXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJzID0ge31cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMgPSB0aGlzLnByb3BzLnNlYXJjaF9pZF9kYXRhW3BhcnNlZC5zZWFyY2hfaWRdLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzLmZpbHRlckNyaXRlcmlhID0gdGhpcy5wcm9wcy5zZWFyY2hfaWRfZGF0YVtwYXJzZWQuc2VhcmNoX2lkXS5maWx0ZXJDcml0ZXJpYVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaF9pZDogcGFyc2VkLnNlYXJjaF9pZCB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLypsZXQgbmV3X3VybCA9IHRoaXMuYnVpbGRVUkkodGhpcy5wcm9wcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucmVwbGFjZShuZXdfdXJsKSovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBhZ2UgPSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnByb3BzLmZldGNoTmV3UmVzdWx0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlID0gcGFyc2VkLnBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRMYWJTZWFyY2hJZChwYXJzZWQuc2VhcmNoX2lkLCBmaWx0ZXJzLCBwYWdlIHx8IDEpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZ2V0U2VhcmNoSWQpIHtcbiAgICAgICAgICAgICAgICAvL0lmIG5vIHNlYXJjaElkIGluIHVybCB0aGVuIHdlIGNyZWF0ZSBzZWFyY2ggaWQgYW5kIHN0b3JlIGRhdGEgY29ycmVzcG9uZGluZyB0byB0aGF0IHNlYXJjaCBpZFxuICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJzID0ge31cbiAgICAgICAgICAgICAgICBmaWx0ZXJzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzID0gdGhpcy5wcm9wcy5uZXh0U2VsZWN0ZWRDcml0ZXJpYXNcbiAgICAgICAgICAgICAgICBmaWx0ZXJzLmZpbHRlckNyaXRlcmlhID0gdGhpcy5wcm9wcy5uZXh0RmlsdGVyQ3JpdGVyaWFcbiAgICAgICAgICAgICAgICBsZXQgc2VhcmNoX2lkID0gdGhpcy5nZW5lcmF0ZVNlYXJjaElkKClcbiAgICAgICAgICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoX2lkOiBzZWFyY2hfaWQgfSwgKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vQ2hlY2sgaWYgdXNlciBpbnN1cmVkXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmlzX2xvZ2luX3VzZXJfaW5zdXJlZCAmJiB0aGlzLnByb3BzLmluc3VyYW5jZV9zdGF0dXMgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVycy5maWx0ZXJDcml0ZXJpYSA9IHsgLi4uZmlsdGVycy5maWx0ZXJDcml0ZXJpYSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzLmZpbHRlckNyaXRlcmlhLmlzX2luc3VyZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3X3VybCA9IHRoaXMuYnVpbGRVUkkodGhpcy5wcm9wcylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UobmV3X3VybClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRMYWJTZWFyY2hJZChzZWFyY2hfaWQsIGZpbHRlcnMsIHBhcnNlZC5wYWdlIHx8IDEpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuZmV0Y2hOZXdSZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgLy90aGlzLmdldExhYkxpc3QodGhpcy5wcm9wcylcbiAgICAgICAgICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zZW9GcmllbmRseSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRGb290ZXJEYXRhKHRoaXMucHJvcHMubWF0Y2gudXJsLnNwbGl0KCcvJylbMV0pLnRoZW4oKGZvb3RlckRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZm9vdGVyRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9vdGVyRGF0YTogZm9vdGVyRGF0YSB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0NoYXRXaXRodXM6IHRydWUgfSlcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICAgIGxldCBzZWFyY2hfaWQgPSAnJ1xuICAgICAgICBsZXQgcGFnZSA9IDFcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UocHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBpZiAocHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdzZWFyY2hfaWQnKSkge1xuICAgICAgICAgICAgc2VhcmNoX2lkID0gcGFyc2VkLnNlYXJjaF9pZFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuc2VhcmNoX2lkKSB7XG4gICAgICAgICAgICBzZWFyY2hfaWQgPSB0aGlzLnN0YXRlLnNlYXJjaF9pZFxuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJzZWQucGFnZSkge1xuICAgICAgICAgICAgcGFnZSA9IHBhcnNlZC5wYWdlIHx8IDFcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wcy5tZXJnZVVybFN0YXRlICYmIHByb3BzLm1lcmdlVXJsU3RhdGUgIT0gdGhpcy5wcm9wcy5tZXJnZVVybFN0YXRlKSB7XG4gICAgICAgICAgICBsZXQgZmlsdGVycyA9IHt9XG4gICAgICAgICAgICBmaWx0ZXJzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzID0gcHJvcHMuY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzXG4gICAgICAgICAgICBmaWx0ZXJzLmZpbHRlckNyaXRlcmlhID0gcHJvcHMuZmlsdGVyQ3JpdGVyaWFcbiAgICAgICAgICAgIGlmIChzZWFyY2hfaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoX2lkOiBzZWFyY2hfaWQgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3X3VybCA9IHRoaXMuYnVpbGRVUkkocHJvcHMpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5yZXBsYWNlKG5ld191cmwpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0TGFiU2VhcmNoSWQoc2VhcmNoX2lkLCBmaWx0ZXJzLCBwYWdlKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlYXJjaF9pZCA9IHRoaXMuZ2VuZXJhdGVTZWFyY2hJZCgpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaF9pZDogc2VhcmNoX2lkIH0sICgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAvL0NoZWNrIGlmIHVzZXIgaW5zdXJlZFxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcHMuaXNfbG9naW5fdXNlcl9pbnN1cmVkICYmIHByb3BzLmluc3VyYW5jZV9zdGF0dXMgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVycy5maWx0ZXJDcml0ZXJpYSA9IHsgLi4uZmlsdGVycy5maWx0ZXJDcml0ZXJpYSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzLmZpbHRlckNyaXRlcmlhLmlzX2luc3VyZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3X3VybCA9IHRoaXMuYnVpbGRVUkkocHJvcHMpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5yZXBsYWNlKG5ld191cmwpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0TGFiU2VhcmNoSWQoc2VhcmNoX2lkLCBmaWx0ZXJzLCBwYWdlKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wcy5mZXRjaE5ld1Jlc3VsdHMgJiYgKHByb3BzLmZldGNoTmV3UmVzdWx0cyAhPSB0aGlzLnByb3BzLmZldGNoTmV3UmVzdWx0cykgJiYgdGhpcy5zdGF0ZS5zZWFyY2hfaWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZXRTZWFyY2hJZDogdHJ1ZSB9KVxuICAgICAgICAgICAgdGhpcy5nZXRMYWJMaXN0KHByb3BzKVxuICAgICAgICAgICAgLy8gaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9IGVsc2UgaWYgKHByb3BzLmZldGNoTmV3UmVzdWx0cyAmJiB0aGlzLnN0YXRlLnNlYXJjaF9pZCA9PSBzZWFyY2hfaWQgJiYgIXRoaXMuc3RhdGUuc2V0U2VhcmNoSWQgJiYgdGhpcy5zdGF0ZS5zZWFyY2hfaWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZXRTZWFyY2hJZDogdHJ1ZSB9KVxuICAgICAgICAgICAgdGhpcy5nZXRMYWJMaXN0KHByb3BzKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9XaGVuZXZlciBsb2NhdGlvbiBjaGFuZ2VzIG1ha2UgYXBpIGNhbGxzXG4gICAgICAgICAgICBpZiAocHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiAhPSB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24gJiYgcHJvcHMubWVyZ2VVcmxTdGF0ZSkge1xuICAgICAgICAgICAgICAgIGxldCBuZXdfdXJsID0gdGhpcy5idWlsZFVSSShwcm9wcylcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucmVwbGFjZShuZXdfdXJsKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVTZWFyY2hJZCh1aWRfc3RyaW5nKSB7XG4gICAgICAgIC8vbWV0aG9kIHRvIGdlbmVyYXRlIHNlYXJjaCBpZFxuICAgICAgICB1aWRfc3RyaW5nID0gJ3h4eXl4eHh4LXh4eXgtNHh4eC15eHh4LXh4eHl5eXh4eHh4eCdcbiAgICAgICAgdmFyIGR0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciB1dWlkID0gdWlkX3N0cmluZy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICB2YXIgciA9IChkdCArIE1hdGgucmFuZG9tKCkgKiAxNikgJSAxNiB8IDA7XG4gICAgICAgICAgICBkdCA9IE1hdGguZmxvb3IoZHQgLyAxNik7XG4gICAgICAgICAgICByZXR1cm4gKGMgPT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KSkudG9TdHJpbmcoMTYpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHV1aWQ7XG4gICAgfVxuXG4gICAgZ2V0TG9jYXRpb25QYXJhbSh0YWcpIHtcbiAgICAgICAgLy8gdGhpcyBBUEkgYXNzdW1lcyB0aGUgY29udGV4dCBvZiByZWFjdC1yb3V0ZXItNFxuICAgICAgICBjb25zdCBwYXJhbVN0cmluZyA9IHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocGFyYW1TdHJpbmcpXG4gICAgICAgIHJldHVybiBwYXJhbXMuZ2V0KHRhZylcbiAgICB9XG5cbiAgICBnZXRMYWJMaXN0KHN0YXRlID0gbnVsbCwgcGFnZSA9IG51bGwsIGNiID0gbnVsbCkge1xuICAgICAgICAvL2FwcGx5IGZpbHRlcnMgYW5kIGdldCB1cGRhdGVkIGRhdGFcbiAgICAgICAgbGV0IHNlYXJjaFVybCA9IG51bGxcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubWF0Y2gudXJsLmluY2x1ZGVzKCctbGJjaXQnKSB8fCB0aGlzLnByb3BzLm1hdGNoLnVybC5pbmNsdWRlcygnLWxibGl0Y2l0JykpIHtcbiAgICAgICAgICAgIHNlYXJjaFVybCA9IHRoaXMucHJvcHMubWF0Y2gudXJsLnRvTG93ZXJDYXNlKClcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFnZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcGFnZSA9IHRoaXMucHJvcHMucGFnZVxuICAgICAgICB9XG4gICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlID0gdGhpcy5wcm9wc1xuICAgICAgICB9IGVsc2UgaWYgKHN0YXRlLnBhZ2UpIHtcbiAgICAgICAgICAgIHBhZ2UgPSBzdGF0ZS5wYWdlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5nZXRMYWJzKHN0YXRlLCBwYWdlLCBmYWxzZSwgc2VhcmNoVXJsLCAoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7IHNlb0RhdGE6IGFyZ3NbMV0gfSlcbiAgICAgICAgICAgIGlmIChjYikge1xuICAgICAgICAgICAgICAgIGNiKC4uLmFyZ3MpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBuZXdfdXJsID0gdGhpcy5idWlsZFVSSShzdGF0ZSlcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucmVwbGFjZShuZXdfdXJsKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dFcnJvcjogdHJ1ZSB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFwcGx5RmlsdGVycyhmaWx0ZXJTdGF0ZSkge1xuICAgICAgICAvLyBjbGVhciBMQU5ESU5HX1BBR0UgdG8gZW5hYmxlIGxvYWRlclxuICAgICAgICAvL2FwcGx5IGZpbHRlcnMgXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB3aW5kb3cuT05fTEFORElOR19QQUdFID0gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVzZXRRdWlja0ZpbHRlcnMoKVxuICAgICAgICBsZXQgc2VhcmNoX2lkX2RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLnNlYXJjaF9pZF9kYXRhKVxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWFyY2hfaWRfZGF0YSAmJiB0aGlzLnN0YXRlLnNlYXJjaF9pZCAmJiB0aGlzLnByb3BzLnNlYXJjaF9pZF9kYXRhW3RoaXMuc3RhdGUuc2VhcmNoX2lkXSkge1xuICAgICAgICAgICAgc2VhcmNoX2lkX2RhdGFbdGhpcy5zdGF0ZS5zZWFyY2hfaWRdLmZpbHRlckNyaXRlcmlhID0gZmlsdGVyU3RhdGVcbiAgICAgICAgICAgIHNlYXJjaF9pZF9kYXRhW3RoaXMuc3RhdGUuc2VhcmNoX2lkXS5wYWdlID0gMVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMubWVyZ2VMQUJTdGF0ZSh7IGZpbHRlckNyaXRlcmlhOiBmaWx0ZXJTdGF0ZSwgc2VhcmNoX2lkX2RhdGE6IHNlYXJjaF9pZF9kYXRhLCBwYWdlOiAxIH0pXG4gICAgICAgIC8vdGhpcy5wcm9wcy5zZXRMYWJTZWFyY2hJZCh0aGlzLnN0YXRlLnNlYXJjaF9pZCwgZmlsdGVyU3RhdGUsIGZhbHNlKVxuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzRmlsdGVyQXBwbGllZChmaWx0ZXJDcml0ZXJpYSl7XG4gICAgICAgIC8vY2hlY2sgaWYgYW55IGZpbHRlcnMgYXBwbGllZCB0byB0aGUgc2VhcmNoXG4gICAgICAgIGxldCBpc19maWx0ZXJfYXBwbGllZCA9IGZhbHNlXG4gICAgICAgIGlmKGZpbHRlckNyaXRlcmlhKXtcbiAgICAgICAgICAgIGxldCBzb3J0X29uID0gZmlsdGVyQ3JpdGVyaWEuc29ydF9vbiB8fCBcIlwiXG4gICAgICAgICAgICBsZXQgc29ydF9vcmRlciA9IGZpbHRlckNyaXRlcmlhLnNvcnRfb3JkZXIgfHwgXCJcIlxuICAgICAgICAgICAgbGV0IGF2YWlsYWJpbGl0eSA9IGZpbHRlckNyaXRlcmlhLmF2YWlsYWJpbGl0eSB8fCBbXVxuICAgICAgICAgICAgbGV0IGF2Z19yYXRpbmdzID0gZmlsdGVyQ3JpdGVyaWEuYXZnX3JhdGluZ3MgfHwgJydcbiAgICAgICAgICAgIGxldCBob21lX3Zpc2l0ID0gZmlsdGVyQ3JpdGVyaWEuaG9tZV92aXNpdCB8fCBmYWxzZVxuICAgICAgICAgICAgbGV0IGxhYl92aXNpdCA9IGZpbHRlckNyaXRlcmlhLmxhYl92aXNpdCB8fCBmYWxzZVxuXG4gICAgICAgICAgICBsZXQgbGFiX25hbWUgPSBmaWx0ZXJDcml0ZXJpYS5sYWJfbmFtZSB8fCBcIlwiXG4gICAgICAgICAgICBsZXQgbmV0d29ya19pZCA9IGZpbHRlckNyaXRlcmlhLm5ldHdvcmtfaWQgfHwgXCJcIlxuICAgICAgICAgICAgbGV0IGlzX2luc3VyZWQgPSBmaWx0ZXJDcml0ZXJpYS5pc19pbnN1cmVkIHx8IGZhbHNlXG5cbiAgICAgICAgICAgIC8vQ2hlY2sgaWYgYW55IGZpbHRlciBhcHBsaWVkICAgICAgICBcblxuICAgICAgICAgICAgaWYgKHNvcnRfb24pIHtcbiAgICAgICAgICAgICAgICBpc19maWx0ZXJfYXBwbGllZCA9IHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoYXZhaWxhYmlsaXR5ICYmIGF2YWlsYWJpbGl0eS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpc19maWx0ZXJfYXBwbGllZCA9IHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoYXZnX3JhdGluZ3MgJiYgYXZnX3JhdGluZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaXNfZmlsdGVyX2FwcGxpZWQgPSB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGhvbWVfdmlzaXQpIHtcbiAgICAgICAgICAgICAgICBpc19maWx0ZXJfYXBwbGllZCA9IHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYobGFiX3Zpc2l0KSB7XG4gICAgICAgICAgICAgICAgaXNfZmlsdGVyX2FwcGxpZWQgPSB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNfZmlsdGVyX2FwcGxpZWRcbiAgICB9XG5cbiAgICBidWlsZFVSSShzdGF0ZSkge1xuICAgICAgICAvL2tlZXAgb24gdXBkYXRpbmcgdXJsIHdpdGggdGhlIHVwZGF0ZWQgZmlsdGVycyBcbiAgICAgICAgbGV0IHsgc2VsZWN0ZWRMb2NhdGlvbiwgY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzLCBmaWx0ZXJDcml0ZXJpYSwgbG9jYXRpb25UeXBlLCBwYWdlIH0gPSBzdGF0ZVxuICAgICAgICBsZXQgdGVzdElkcyA9IGN1cnJlbnRTZWFyY2hlZENyaXRlcmlhcy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gJ3Rlc3QnKS5tYXAoeCA9PiB4LmlkKVxuXG4gICAgICAgIGxldCBsYXQgPSAyOC42NDQ4MDBcbiAgICAgICAgbGV0IGxvbmcgPSA3Ny4yMTY3MjFcbiAgICAgICAgbGV0IHBsYWNlX2lkID0gXCJcIlxuXG4gICAgICAgIGlmIChzZWxlY3RlZExvY2F0aW9uKSB7XG4gICAgICAgICAgICBwbGFjZV9pZCA9IHNlbGVjdGVkTG9jYXRpb24ucGxhY2VfaWQgfHwgXCJcIlxuICAgICAgICAgICAgbGF0ID0gc2VsZWN0ZWRMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sYXRcbiAgICAgICAgICAgIGxvbmcgPSBzZWxlY3RlZExvY2F0aW9uLmdlb21ldHJ5LmxvY2F0aW9uLmxuZ1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBsYXQgPT09ICdmdW5jdGlvbicpIGxhdCA9IGxhdCgpXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxvbmcgPT09ICdmdW5jdGlvbicpIGxvbmcgPSBsb25nKClcblxuICAgICAgICAgICAgbGF0ID0gcGFyc2VGbG9hdChwYXJzZUZsb2F0KGxhdCkudG9GaXhlZCg2KSlcbiAgICAgICAgICAgIGxvbmcgPSBwYXJzZUZsb2F0KHBhcnNlRmxvYXQobG9uZykudG9GaXhlZCg2KSlcbiAgICAgICAgfVxuLypcbiAgICAgICAgbGV0IG1pbl9kaXN0YW5jZSA9IGZpbHRlckNyaXRlcmlhLmRpc3RhbmNlUmFuZ2VbMF1cbiAgICAgICAgbGV0IG1heF9kaXN0YW5jZSA9IGZpbHRlckNyaXRlcmlhLmRpc3RhbmNlUmFuZ2VbMV1cbiAgICAgICAgbGV0IG1pbl9wcmljZSA9IGZpbHRlckNyaXRlcmlhLnByaWNlUmFuZ2VbMF1cbiAgICAgICAgbGV0IG1heF9wcmljZSA9IGZpbHRlckNyaXRlcmlhLnByaWNlUmFuZ2VbMV1cbiAgICAgICAgbGV0IHNvcnRfb24gPSBmaWx0ZXJDcml0ZXJpYS5zb3J0X29uIHx8IFwiXCJcbiovXG4gICAgICAgIGxldCBzb3J0X29uID0gZmlsdGVyQ3JpdGVyaWEuc29ydF9vbiB8fCBcIlwiXG4gICAgICAgIGxldCBzb3J0X29yZGVyID0gZmlsdGVyQ3JpdGVyaWEuc29ydF9vcmRlciB8fCBcIlwiXG4gICAgICAgIGxldCBhdmFpbGFiaWxpdHkgPSBmaWx0ZXJDcml0ZXJpYS5hdmFpbGFiaWxpdHkgfHwgW11cbiAgICAgICAgbGV0IGF2Z19yYXRpbmdzID0gZmlsdGVyQ3JpdGVyaWEuYXZnX3JhdGluZ3MgfHwgJydcbiAgICAgICAgbGV0IGhvbWVfdmlzaXQgPSBmaWx0ZXJDcml0ZXJpYS5ob21lX3Zpc2l0IHx8IGZhbHNlXG4gICAgICAgIGxldCBsYWJfdmlzaXQgPSBmaWx0ZXJDcml0ZXJpYS5sYWJfdmlzaXQgfHwgZmFsc2VcblxuICAgICAgICBsZXQgbGFiX25hbWUgPSBmaWx0ZXJDcml0ZXJpYS5sYWJfbmFtZSB8fCBcIlwiXG4gICAgICAgIGxldCBuZXR3b3JrX2lkID0gZmlsdGVyQ3JpdGVyaWEubmV0d29ya19pZCB8fCBcIlwiXG4gICAgICAgIGxldCBpc19pbnN1cmVkID0gZmlsdGVyQ3JpdGVyaWEuaXNfaW5zdXJlZCB8fCBmYWxzZVxuXG5cbiAgICAgICAgbGV0IHVybCA9ICcnXG4gICAgICAgIC8vQ2hlY2sgaWYgYW55IGZpbHRlciBhcHBsaWVkIFxuICAgICAgICBsZXQgaXNfZmlsdGVyX2FwcGxpZWQgPSBmYWxzZVxuXG4gICAgICAgIGlmIChzb3J0X29uKSB7XG4gICAgICAgICAgICBpc19maWx0ZXJfYXBwbGllZCA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGF2YWlsYWJpbGl0eSAmJiBhdmFpbGFiaWxpdHkubGVuZ3RoKSB7XG4gICAgICAgICAgICBpc19maWx0ZXJfYXBwbGllZCA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGF2Z19yYXRpbmdzICYmIGF2Z19yYXRpbmdzLmxlbmd0aCkge1xuICAgICAgICAgICAgaXNfZmlsdGVyX2FwcGxpZWQgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZihob21lX3Zpc2l0KSB7XG4gICAgICAgICAgICBpc19maWx0ZXJfYXBwbGllZCA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGxhYl92aXNpdCkge1xuICAgICAgICAgICAgaXNfZmlsdGVyX2FwcGxpZWQgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGFiX25hbWUpIHtcbiAgICAgICAgICAgIGlzX2ZpbHRlcl9hcHBsaWVkID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ldHdvcmtfaWQpIHtcbiAgICAgICAgICAgIGlzX2ZpbHRlcl9hcHBsaWVkID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlzX3BhcmFtc19leGlzdCA9IGZhbHNlXG5cbiAgICAgICAgaWYgKGlzX2ZpbHRlcl9hcHBsaWVkIHx8ICF0aGlzLnN0YXRlLnNlb0ZyaWVuZGx5KSB7XG5cbiAgICAgICAgICAgIHVybCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0/dGVzdF9pZHM9JHt0ZXN0SWRzIHx8IFwiXCJ9JmxhdD0ke2xhdH0mbG9uZz0ke2xvbmd9JnNvcnRfb249JHtzb3J0X29ufSZzb3J0X29yZGVyPSR7c29ydF9vcmRlcn0mYXZhaWxhYmlsaXR5PSR7YXZhaWxhYmlsaXR5fSZob21lX3Zpc2l0PSR7aG9tZV92aXNpdH0mbGFiX3Zpc2l0PSR7bGFiX3Zpc2l0fSZhdmdfcmF0aW5ncz0ke2F2Z19yYXRpbmdzfSZsYWJfbmFtZT0ke2xhYl9uYW1lfSZwbGFjZV9pZD0ke3BsYWNlX2lkfSZsb2NhdGlvblR5cGU9JHtsb2NhdGlvblR5cGUgfHwgXCJcIn0mbmV0d29ya19pZD0ke25ldHdvcmtfaWR9JnNlYXJjaF9pZD0ke3RoaXMuc3RhdGUuc2VhcmNoX2lkfSZpc19pbnN1cmVkPSR7aXNfaW5zdXJlZH1gXG4gICAgICAgICAgICBpc19wYXJhbXNfZXhpc3QgPSB0cnVlXG5cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnNlb0ZyaWVuZGx5KSB7XG4gICAgICAgICAgICB1cmwgPSBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9YFxuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zaG93Tm9uSXBkUG9wdXApe1xuICAgICAgICAgICAgdXJsICs9IGAkeycmc2hvd19wb3B1cD0nKyB0aGlzLnN0YXRlLnNob3dOb25JcGRQb3B1cH1gXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5sYWJfY2FyZCkge1xuICAgICAgICAgICAgdXJsICs9IGAke2lzX3BhcmFtc19leGlzdCA/ICcmJyA6ICc/J31sYWJfY2FyZD10cnVlYFxuICAgICAgICAgICAgaXNfcGFyYW1zX2V4aXN0ID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhZ2UgPiAxKSB7XG4gICAgICAgICAgICB1cmwgKz0gYCR7aXNfcGFyYW1zX2V4aXN0ID8gJyYnIDogJz8nfXBhZ2U9JHtwYWdlfWBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1cmxcbiAgICB9XG5cbiAgICBnZXRNZXRhVGFnc0RhdGEoc2VvRGF0YSkge1xuICAgICAgICBsZXQgdGl0bGUgPSBcIkxhYiBTZWFyY2hcIlxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zZW9GcmllbmRseSkge1xuICAgICAgICAgICAgdGl0bGUgPSBcIlwiXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gXCJcIlxuICAgICAgICBpZiAoc2VvRGF0YSkge1xuICAgICAgICAgICAgdGl0bGUgPSBzZW9EYXRhLnRpdGxlIHx8IFwiXCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gc2VvRGF0YS5kZXNjcmlwdGlvbiB8fCBcIlwiXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uIH1cbiAgICB9XG5cbiAgICByZXNldFF1aWNrRmlsdGVycygpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtxdWlja0ZpbHRlcjoge319KVxuICAgIH1cblxuICAgIGFwcGx5UXVpY2tGaWx0ZXIoZmlsdGVyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3F1aWNrRmlsdGVyOiBmaWx0ZXJ9KVxuICAgIH1cblxuICAgIG5vbklwZExlYWRzKHBob25lX251bWJlcil7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBsZXQgY3JpdGVyaWFTdHIgPSB0aGlzLmdldENyaXRlcmlhU3RyaW5nKHRoaXMucHJvcHMuY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzKVxuICAgICAgICBsZXQgZGF0YSA9KHtwaG9uZV9udW1iZXI6cGhvbmVfbnVtYmVyLGxlYWRfc291cmNlOidMYWJhZHMnLHNvdXJjZTpwYXJzZWQsbGVhZF90eXBlOidMQUJBRFMnLHRlc3RfbmFtZTpjcml0ZXJpYVN0cixleGl0cG9pbnRfdXJsOidodHRwOi8vZG9jcHJpbWUuY29tJyArIHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWV9KVxuICAgICAgICBpZih0aGlzLnByb3BzLmNvbW1vbl91dG1fdGFncyAmJiB0aGlzLnByb3BzLmNvbW1vbl91dG1fdGFncy5sZW5ndGgpe1xuICAgICAgICAgICAgZGF0YS51dG1fdGFncyA9IHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmZpbHRlcih4PT54LnR5cGUgPT0gXCJjb21tb25feHRyYV90YWdzXCIpWzBdLnV0bV90YWdzXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHZpc2l0b3JfaW5mbyA9IEdUTS5nZXRWaXNpdG9ySW5mbygpXG4gICAgICAgIGlmKHZpc2l0b3JfaW5mbyAmJiB2aXNpdG9yX2luZm8udmlzaXRfaWQpe1xuICAgICAgICAgICAgZGF0YS52aXNpdF9pZCA9IHZpc2l0b3JfaW5mby52aXNpdF9pZFxuICAgICAgICAgICAgZGF0YS52aXNpdG9yX2lkID0gdmlzaXRvcl9pbmZvLnZpc2l0b3JfaWRcbiAgICAgICAgfVxuICAgICAgICBsZXQgZ3RtX2RhdGEgPSB7J0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdOb25JcGRTZWFyY2hMaXN0aW5nU3VibWl0Q2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2V2ZW50JzogJ25vbi1pcGQtc2VhcmNoLWxpc3RpbmctU3VibWl0LWNsaWNrJ31cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bV9kYXRhIH0pXG4gICAgICAgIHRoaXMucHJvcHMuc2F2ZUxlYWRQaG5OdW1iZXIocGhvbmVfbnVtYmVyKVxuICAgICAgICBpZih0aGlzLnN0YXRlLmlzX2xlYWRfZW5hYmxlZCAmJiAhU1RPUkFHRS5pc0FnZW50KCkpe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNfbGVhZF9lbmFibGVkOmZhbHNlfSlcbiAgICAgICAgICAgIHRoaXMucHJvcHMuTm9uSXBkQm9va2luZ0xlYWQoZGF0YSlcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzX2xlYWRfZW5hYmxlZDp0cnVlfSlcbiAgICAgICAgICAgIH0sIDUwMDApXG4gICAgICAgIH1cbiAgICAgICB0aGlzLnNldFN0YXRlKHt0b19iZV9mb3JjZTowfSlcbiAgICB9XG5cbiAgICBjbG9zZUlwZExlYWRQb3B1cChmcm9tKXtcbiAgICAgICAgaWYoZnJvbSl7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdOb25JcGRTZWFyY2hMaXN0aW5nQ3Jvc3NDbGljaycsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnZXZlbnQnOiAnbm9uLWlwZC1zZWFyY2gtbGlzdGluZy1jcm9zcy1jbGljaydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dG9fYmVfZm9yY2U6MH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRDcml0ZXJpYVN0cmluZyhzZWxlY3RlZENyaXRlcmlhcykge1xuICAgICAgICBpZiAoc2VsZWN0ZWRDcml0ZXJpYXMgJiYgc2VsZWN0ZWRDcml0ZXJpYXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWRDcml0ZXJpYXMucmVkdWNlKChmaW5hbCwgY3VyciwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZmluYWwgKz0gJywgJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbCArPSBgJHtjdXJyLm5hbWV9YFxuICAgICAgICAgICAgICAgIHJldHVybiBmaW5hbFxuICAgICAgICAgICAgfSwgXCJcIilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHNob3dfcGFnaW5hdGlvbiA9IHRoaXMucHJvcHMubGFiTGlzdCAmJiB0aGlzLnByb3BzLmxhYkxpc3QubGVuZ3RoID4gMFxuICAgICAgICBsZXQgdXJsID0gYCR7Q09ORklHLkFQSV9CQVNFX1VSTH0ke3RoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWV9YFxuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgvJnBhZ2U9XFxkezEsfS8sIFwiXCIpXG4gICAgICAgIGxldCBwYWdlID0gXCJcIlxuICAgICAgICBsZXQgY3Vycl9wYWdlID0gcGFyc2VJbnQodGhpcy5wcm9wcy5wYWdlKVxuICAgICAgICBsZXQgcHJldiA9IFwiXCJcbiAgICAgICAgaWYgKGN1cnJfcGFnZSA+IDEpIHtcbiAgICAgICAgICAgIHBhZ2UgPSBgP3BhZ2U9JHtjdXJyX3BhZ2V9YFxuICAgICAgICAgICAgcHJldiA9IHVybFxuICAgICAgICAgICAgaWYgKGN1cnJfcGFnZSA+IDIpIHtcbiAgICAgICAgICAgICAgICBwcmV2ICs9IGA/cGFnZT0ke2N1cnJfcGFnZSAtIDF9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBuZXh0ID0gXCJcIlxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jb3VudCA+IGN1cnJfcGFnZSAqIDIwKSB7XG4gICAgICAgICAgICBuZXh0ID0gdXJsICsgYD9wYWdlPSR7Y3Vycl9wYWdlICsgMX1gXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB0aGlzIHdhcyB0aGUgbGFuZGluZyBwYWdlXG4gICAgICAgIGxldCBsYW5kaW5nX3BhZ2UgPSBmYWxzZVxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cuT05fTEFORElOR19QQUdFKSB7XG4gICAgICAgICAgICBsYW5kaW5nX3BhZ2UgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1hcFwiIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8SGVsbWV0VGFncyB0YWdzRGF0YT17e1xuICAgICAgICAgICAgICAgICAgICBjYW5vbmljYWxVcmw6IGAke0NPTkZJRy5BUElfQkFTRV9VUkx9JHt0aGlzLnByb3BzLm1hdGNoLnVybH0ke3BhZ2V9YCxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuZ2V0TWV0YVRhZ3NEYXRhKHRoaXMucHJvcHMuc2VvRGF0YSkudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmdldE1ldGFUYWdzRGF0YSh0aGlzLnByb3BzLnNlb0RhdGEpLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICBwcmV2OiBwcmV2LFxuICAgICAgICAgICAgICAgICAgICBuZXh0OiBuZXh0XG4gICAgICAgICAgICAgICAgfX0gbm9JbmRleD17IXRoaXMuc3RhdGUuc2VvRnJpZW5kbHl9IC8+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvKih0aGlzLnN0YXRlLnNob3dOb25JcGRQb3B1cCA9PSAxIHx8IHRoaXMuc3RhdGUuc2hvd05vbklwZFBvcHVwID09IDIpICYmIHRoaXMuc3RhdGUudG9fYmVfZm9yY2UgPT0gMT9cbiAgICAgICAgICAgICAgICAgICAgPE5vbklwZFBvcHVwVmlldyB7Li4udGhpcy5wcm9wc30gbm9uSXBkTGVhZHM9e3RoaXMubm9uSXBkTGVhZHMuYmluZCh0aGlzKX0gY2xvc2VJcGRMZWFkUG9wdXAgPSB7dGhpcy5jbG9zZUlwZExlYWRQb3B1cC5iaW5kKHRoaXMpfSBpc19mb3JjZT17dGhpcy5zdGF0ZS5zaG93Tm9uSXBkUG9wdXB9IGlzX2xhYj17dHJ1ZX0vPlxuICAgICAgICAgICAgICAgICAgICA6JycqL1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8Q3JpdGVyaWFTZWFyY2ggey4uLnRoaXMucHJvcHN9IGNoZWNrRm9yTG9hZD17bGFuZGluZ19wYWdlIHx8IHRoaXMucHJvcHMuTE9BREVEX0xBQlNfU0VBUkNIIHx8IHRoaXMuc3RhdGUuc2hvd0Vycm9yfSB0aXRsZT1cIlNlYXJjaCBmb3IgVGVzdCBhbmQgTGFicy5cIiBnb0JhY2s9e3RydWV9IGxhYl9jYXJkPXshIXRoaXMuc3RhdGUubGFiX2NhcmR9IG5ld0NoYXRCdG49e3RydWV9IHNlYXJjaExhYnM9e3RydWV9PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dFcnJvciA/IDxkaXYgY2xhc3NOYW1lPVwibm9yZlwiPk5vIFJlc3VsdHMgRm91bmQhITwvZGl2PiA6IDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvcEJhciB7Li4udGhpcy5wcm9wc30gYXBwbHlGaWx0ZXJzPXt0aGlzLmFwcGx5RmlsdGVycy5iaW5kKHRoaXMpfSBzZW9EYXRhPXt0aGlzLnByb3BzLnNlb0RhdGF9IGxhYl9jYXJkPXshIXRoaXMuc3RhdGUubGFiX2NhcmR9IHNlb0ZyaWVuZGx5PXt0aGlzLnN0YXRlLnNlb0ZyaWVuZGx5fSBxdWlja0ZpbHRlcj17dGhpcy5zdGF0ZS5xdWlja0ZpbHRlcn0gcmVzZXRRdWlja0ZpbHRlcnM9e3RoaXMucmVzZXRRdWlja0ZpbHRlcnMuYmluZCh0aGlzKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxSZXN1bHRDb3VudCB7Li4udGhpcy5wcm9wc30gYXBwbHlGaWx0ZXJzPXt0aGlzLmFwcGx5RmlsdGVycy5iaW5kKHRoaXMpfSBzZW9EYXRhPXt0aGlzLnByb3BzLnNlb0RhdGF9IGxhYl9jYXJkPXshIXRoaXMuc3RhdGUubGFiX2NhcmR9IHNlb0ZyaWVuZGx5PXt0aGlzLnN0YXRlLnNlb0ZyaWVuZGx5fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiAnMTBweCAzMHB4JywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2Jhbm5lcnMvYmFubmVyX2xhYi5wbmdcIn0gY2xhc3NOYW1lPVwiYmFubmVyLWltZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0NoYXRXaXRodXMgPyA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBkLW1kLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtcnQtMTAgbXJiLTEwIGFydGljbGUtY2hhdC1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPk5lZWQgaGVscCB3aXRoIGJvb2tpbmc/PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL21vYmlsZXZpZXdjaGF0P2JvdGFnZW50PXRydWUmZm9yY2Vfc3RhcnQ9dHJ1ZScpfSA+Q2hhdCB3aXRoIHVzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmxhYkxpc3QgJiYgdGhpcy5wcm9wcy5sYWJMaXN0Lmxlbmd0aCA9PTA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGNhcmRNYWluUGFkZGluZ1JtdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2ctY2FyZC1jb250YWluZXIgbXQtMjAgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnLW5vLXJlc3VsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwa2ctbi1yc2x0XCI+Tm8gcmVzdWx0IGZvdW5kITwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuaXNGaWx0ZXJBcHBsaWVkKHRoaXMucHJvcHMuZmlsdGVyQ3JpdGVyaWEpP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJuLXJzbHQtaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9uby1yZXN1bHQucG5nJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBrZy10eS1hZ24gY3Vyc29yLXBudHJcIiBvbkNsaWNrPXt0aGlzLmFwcGx5UXVpY2tGaWx0ZXIuYmluZCh0aGlzLCB7dmlld01vcmU6IHRydWV9KX0+VHJ5IGFnYWluIHdpdGggZmV3ZXIgZmlsdGVyczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOicxMzBweCd9fSBjbGFzc05hbWU9XCJuLXJzbHQtaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92Y3Qtbm8ucG5nJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBrZy10eS1hZ24gdGV4dC1kYXJrIHRleHQtY2VudGVyXCI+Q2Fu4oCZdCBmaW5kIHlvdXIgbGFiIGhlcmU/PGJyPjwvYnI+SGVscCB1cyB0byBsaXN0IHlvdXIgbGFiPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyZWZlckRvY3RvcmJ0blwiIG9uQ2xpY2s9eyhlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnUmVmZXJMYWJMaXN0Tm9yZXN1bHQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2V2ZW50JzogJ3JlZmVyLWxhYi1saXN0LW5vcmVzdWx0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvZG9jdG9yc2lnbnVwP21lbWJlcl90eXBlPTInKX19PlJlZmVyIHlvdXIgTGFiPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxSZWFjdC5GcmFnbWVudD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYnNMaXN0IHsuLi50aGlzLnByb3BzfSBhcHBseUZpbHRlcnM9e3RoaXMuYXBwbHlGaWx0ZXJzLmJpbmQodGhpcyl9IGdldExhYkxpc3Q9e3RoaXMuZ2V0TGFiTGlzdC5iaW5kKHRoaXMpfSBsYWJfY2FyZD17ISF0aGlzLnN0YXRlLmxhYl9jYXJkfSBhcHBseVF1aWNrRmlsdGVyPXt0aGlzLmFwcGx5UXVpY2tGaWx0ZXIuYmluZCh0aGlzKX0vPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZW9GcmllbmRseSAmJiBzaG93X3BhZ2luYXRpb24gPyA8ZGl2IGNsYXNzTmFtZT1cImFydC1wYWdpbmF0aW9uLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2ID8gPGEgaHJlZj17cHJldn0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0LXBhZ2luYXRpb24tYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMFwiPntjdXJyX3BhZ2UgLSAxfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydC1wYWdpbmF0aW9uLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwXCIgc3R5bGU9e3sgY29sb3I6ICcjMDAwJyB9fT57Y3Vycl9wYWdlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCA/IDxhIGhyZWY9e25leHR9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydC1wYWdpbmF0aW9uLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmdy01MDBcIj57Y3Vycl9wYWdlICsgMX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9Dcml0ZXJpYVNlYXJjaD5cblxuICAgICAgICAgICAgICAgIDxGb290ZXIgZm9vdGVyRGF0YT17dGhpcy5zdGF0ZS5mb290ZXJEYXRhfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hSZXN1bHRzVmlld1xuIiwiaW1wb3J0IFNlYXJjaFJlc3VsdHNWaWV3IGZyb20gJy4vU2VhcmNoUmVzdWx0c1ZpZXcuanMnXG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFJlc3VsdHNWaWV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IExhYlByb2ZpbGVDYXJkIGZyb20gJy4uLy4uL2NvbW1vbnMvbGFiUHJvZmlsZUNhcmQvaW5kZXguanMnXG5pbXBvcnQgSW5maW5pdGVTY3JvbGwgZnJvbSAncmVhY3QtaW5maW5pdGUtc2Nyb2xsZXInO1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi8uLi9jb21tb25zL0xvYWRlcidcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy9ndG0nXG5pbXBvcnQgTGFiUmVzdWx0Q2FyZCBmcm9tICcuLi8uLi9jb21tb25zL2xhYlJlc3VsdENhcmQnXG5pbXBvcnQgQmFubmVyQ2Fyb3VzZWwgZnJvbSAnLi4vLi4vLi4vY29tbW9ucy9Ib21lL2Jhbm5lckNhcm91c2VsLmpzJztcblxuY2xhc3MgTGFic0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaGFzTW9yZTogZmFsc2UsXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHJlbmRlckJsb2NrOiBmYWxzZSxcbiAgICAgICAgICAgIHBhZ2U6IDAsXG4gICAgICAgICAgICBpc19pbnN1cmVkOiBwcm9wcy5maWx0ZXJDcml0ZXJpYSAmJiBwcm9wcy5maWx0ZXJDcml0ZXJpYS5pc19pbnN1cmVkP3Byb3BzLmZpbHRlckNyaXRlcmlhLmlzX2luc3VyZWQ6ZmFsc2UsXG4gICAgICAgICAgICBhdmdfcmF0aW5nczogJydcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQmVsb3cgY29kZSBlbnN1cmVzIHNtb290aCBiYWNrIHBhZ2UgdHJhbnNpdGlvbnMgaW4gY2FzZSBvZiBodWdlIGRhdGEgc2V0cywgYW5kIG1haW50YWlucyBzY3JvbGwgcG9zaXRpb24uXG4gICAgICAgICAqIHJlbmRlckJsb2NrID0gdHJ1ZSAoYnkgZGVmYXVsdCkgd2lsbCBibG9jayByZW5kZXIgdW50aWwgdGhlIHBhZ2UgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZWQsIGFuZCBvbmNlIGl0cyBkb25lLCBpdCB3aWxsIHRoZW4gcmVuZGVyIGFuZCBzZXQgc2Nyb2xsIHBvc2l0aW9uIGFjY29yZGluZ2x5XG4gICAgICAgICBcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZWZzLmNoZWNrSWZFeGlzdHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVuZGVyQmxvY2s6IGZhbHNlIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY3JvbGxfcG9zID0gd2luZG93LkxBQl9TQ1JPTExfUE9TID8gKHdpbmRvdy5MQUJfU0NST0xMX1BPUykgOiAwXG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IGltcHJvdmUgc2Nyb2xsIGJhY2sgbG9naWNcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHNjcm9sbF9wb3MgfHwgMClcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LkxBQl9TQ1JPTExfUE9TID0gMFxuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5MQUJfU0NST0xMX1BPUyA9IHdpbmRvdy5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICB9LCAxMDApXG4gICAgICAgIFxuICAgICAgICAqL1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNNb3JlOiB0cnVlIH0pXG4gICAgICAgIH0sIDApXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnByb3BzLmZpbHRlckNyaXRlcmlhIH0pXG4gICAgICAgIGxldCBzZWxlY3RlZExvY2F0aW9uID0gJydcbiAgICAgICAgbGV0IGxhdCA9IDI4LjY0NDgwMFxuICAgICAgICBsZXQgbG9uZyA9IDc3LjIxNjcyMVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKSB7XG4gICAgICAgICAgICBzZWxlY3RlZExvY2F0aW9uID0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uO1xuICAgICAgICAgICAgbGF0ID0gc2VsZWN0ZWRMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sYXRcbiAgICAgICAgICAgIGxvbmcgPSBzZWxlY3RlZExvY2F0aW9uLmdlb21ldHJ5LmxvY2F0aW9uLmxuZ1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBsYXQgPT09ICdmdW5jdGlvbicpIGxhdCA9IGxhdCgpXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxvbmcgPT09ICdmdW5jdGlvbicpIGxvbmcgPSBsb25nKClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0T2ZmZXJMaXN0KGxhdCwgbG9uZyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgICAgICBpZihwcm9wcy5maWx0ZXJDcml0ZXJpYSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnByb3BzLmZpbHRlckNyaXRlcmlhLmF2Z19yYXRpbmdzIHx8ICcnIH0pICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnTGFiU2VhcmNoUGFnaW5hdGlvbicsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2xhYi1zZWFyY2gtcGFnaW5hdGlvbicsICdQYWdlcyc6IHRoaXMuc3RhdGUucGFnZVxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIC8vIGlmICh3aW5kb3cpIHtcbiAgICAgICAgLy8gICAgIHdpbmRvdy5vbnNjcm9sbCA9IG51bGxcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIGdldExvY2F0aW9uUGFyYW0odGFnKSB7XG4gICAgICAgIC8vIHRoaXMgQVBJIGFzc3VtZXMgdGhlIGNvbnRleHQgb2YgcmVhY3Qtcm91dGVyLTRcbiAgICAgICAgY29uc3QgcGFyYW1TdHJpbmcgPSB0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaFxuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHBhcmFtU3RyaW5nKVxuICAgICAgICByZXR1cm4gcGFyYW1zLmdldCh0YWcpXG4gICAgfVxuXG4gICAgbG9hZE1vcmUocGFnZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGFzTW9yZTogZmFsc2UsIGxvYWRpbmc6IHRydWUsIHBhZ2U6IHBhZ2UgfSlcblxuICAgICAgICB0aGlzLnByb3BzLmdldExhYkxpc3QobnVsbCwgcGFnZSArIDEsIChoYXNNb3JlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNNb3JlIH0pXG4gICAgICAgICAgICB9LCAxMDAwKVxuICAgICAgICB9KVxuICAgIH1cbiAgICB0ZXN0SW5mbygpIHtcbiAgICAgICAgey8qdmFyIHVybF9zdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgdmFyIHVybCA9IG5ldyBVUkwodXJsX3N0cmluZyk7XG4gICAgICAgIHZhciB0ZXN0X2lkcyA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidGVzdF9pZHNcIik7XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvc2VhcmNoL3Rlc3RpbmZvP3Rlc3RfaWRzPScgKyB0ZXN0X2lkcyArICcmZnJvbT1zZWFyY2hyZXN1bHRzJylcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ3Rlc3RJbmZvQ2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICd0ZXN0LWluZm8tY2xpY2snLCAncGFnZVNvdXJjZSc6ICdsYWItcmVzdWx0LXBhZ2UnXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSkqL31cbiAgICB9XG5cbiAgICBhcHBseVF1aWNrRmlsdGVycyh0eXBlLCB2YWwsIGlzQXJyYXksIGUpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gdmFsXG4gICAgICAgIGlmIChpc0FycmF5KSB7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRWYWwgPSBbXS5jb25jYXQodGhpcy5zdGF0ZVt0eXBlXSkgfHwgW11cbiAgICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlXG4gICAgICAgICAgICB2YWx1ZSA9IHNlbGVjdGVkVmFsLmZpbHRlcigoZGF0YSk9PiB7XG4gICAgICAgICAgICAgICAgaWYoZGF0YT09dmFsKXtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmKCFmb3VuZCl7XG4gICAgICAgICAgICAgICAgdmFsdWUucHVzaCh2YWwpICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGd0bURhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnTGFiUXVpY2tGaWx0ZXJDbGlja2VkJywgJ0FjdGlvbic6ICdMYWJRdWlja0ZpbHRlckNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdsYWItcXVpY2stZmlsdGVyLWNsaWNrZWQnLCAndXJsJzogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLCAndHlwZSc6IHR5cGUsICd2YWwnOiB2YWxcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuXG4gICAgICAgIGxldCBmaWx0ZXJzID0gey4uLnRoaXMucHJvcHMuZmlsdGVyQ3JpdGVyaWF9XG4gICAgICAgIGlmKHR5cGUuaW5jbHVkZXMoJ3NvcnRfb24nKSApIHtcblxuICAgICAgICAgICAgaWYodmFsLmluY2x1ZGVzKCdwcmljZV9hc2MnKSB8fCB2YWwuaW5jbHVkZXMoJ3ByaWNlX2Rlc2MnKSApe1xuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5zdGF0ZVt0eXBlXT09J2ZlZXMnICYmICggKHRoaXMuc3RhdGVbJ3NvcnRfb3JkZXInXT09J2FzYycgJiYgdmFsLmluY2x1ZGVzKCdwcmljZV9hc2MnKSApIHx8ICh0aGlzLnN0YXRlWydzb3J0X29yZGVyJ109PSdkZXNjJyAmJiB2YWwuaW5jbHVkZXMoJ3ByaWNlX2Rlc2MnKSApICkgKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c29ydF9vbjogbnVsbCwgc29ydF9vcmRlcjogbnVsbH0sICgpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVycyA9IE9iamVjdC5hc3NpZ24oe2ZpbHRlcnMsIC4uLnRoaXMuc3RhdGV9KVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hcHBseUZpbHRlcnMoZmlsdGVycylcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c29ydF9vbjogJ2ZlZXMnLCBzb3J0X29yZGVyOiB2YWwuaW5jbHVkZXMoJ3ByaWNlX2FzYycpPydhc2MnOidkZXNjJ30sKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnMgPSBPYmplY3QuYXNzaWduKHtmaWx0ZXJzLCAuLi50aGlzLnN0YXRlfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXBwbHlGaWx0ZXJzKGZpbHRlcnMpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzb3J0X29uOiB0aGlzLnN0YXRlW3R5cGVdPT12YWx1ZT9udWxsOnZhbHVlLCBzb3J0X29yZGVyOiBudWxsIH0sKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcnMgPSBPYmplY3QuYXNzaWduKHtmaWx0ZXJzLCAuLi50aGlzLnN0YXRlfSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hcHBseUZpbHRlcnMoZmlsdGVycylcbiAgICAgICAgICAgICAgICB9KSAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgW3R5cGVdOiB0aGlzLnN0YXRlW3R5cGVdPT12YWx1ZT8nJzp2YWx1ZSB9LCAoKT0+IHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJzID0gT2JqZWN0LmFzc2lnbih7ZmlsdGVycywgLi4udGhpcy5zdGF0ZX0pXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hcHBseUZpbHRlcnMoZmlsdGVycylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2aWV3TW9yZUNsaWNrZWQoKSB7XG4gICAgICAgIGxldCBmaWx0ZXJzID0ge1xuICAgICAgICAgICAgdmlld01vcmU6IHRydWVcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLmFwcGx5UXVpY2tGaWx0ZXIoZmlsdGVycylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBzaG93X2RldGFpbHMgPSBmYWxzZVxuICAgICAgICBsZXQgeyBMQUJTLCBsYWJMaXN0IH0gPSB0aGlzLnByb3BzXG5cbiAgICAgICAgbGV0IHN0YXJ0X3BhZ2UgPSAwXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmN1cnJfcGFnZSkge1xuICAgICAgICAgICAgc3RhcnRfcGFnZSA9IE1hdGgubWF4KDAsIHRoaXMucHJvcHMuY3Vycl9wYWdlIC0gMSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnBhZ2UpIHtcbiAgICAgICAgICAgICAgICBzdGFydF9wYWdlID0gTWF0aC5tYXgoMCwgdGhpcy5wcm9wcy5wYWdlIC0gMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3cmFwIHNlYXJjaC1ib29rLXJlc3VsdCB2YXJpYWJsZS1jb250ZW50LXNlY3Rpb25cIiByZWY9XCJjaGVja0lmRXhpc3RzXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJlbmRlckJsb2NrID8gPExvYWRlciAvPiA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBjYXJkTWFpblBhZGRpbmdSbXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qe09iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzKS5tYXAoZnVuY3Rpb24gKFtrZXksIHZhbHVlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLnNob3dfZGV0YWlscykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dfZGV0YWlscyA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dfZGV0YWlscyA/IDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3JjaC1oZWFkaW5nXCIgc3R5bGU9e3sgZmxvYXQ6ICdsZWZ0JywgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiAnI2U0NjYwOCcgfX0gb25DbGljaz17dGhpcy50ZXN0SW5mby5iaW5kKHRoaXMpfT4gVGVzdCBJbmZvPC9zcGFuPjwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0qL31cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5maW5pdGVTY3JvbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlU3RhcnQ9e3N0YXJ0X3BhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZE1vcmU9e3RoaXMubG9hZE1vcmUuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNNb3JlPXt0aGlzLnN0YXRlLmhhc01vcmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlV2luZG93PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxMb2FkPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYkxpc3QubWFwKChsYWJJZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChMQUJTW2xhYklkXSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGk9PTQgJiYgIXRoaXMuc3RhdGUuYXZnX3JhdGluZ3MgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvcnQtc3ViLWZpbHRlci1jb250YWluZXIgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RmlsdGVyIGJ5IDxzcGFuIGNsYXNzTmFtZT1cImZ3LTcwMFwiPiBSYXRpbmdzIDwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJmdy01MDAgc29ydC1tb3JlLWZpbHRlclwiIG9uQ2xpY2s9e3RoaXMudmlld01vcmVDbGlja2VkLmJpbmQodGhpcyl9Pk1vcmUgZmlsdGVyczwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNydC1zYi1idG4tY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHt0aGlzLnN0YXRlLmF2Z19yYXRpbmdzPT0nMyc/J3NydC1hY3QnOicnfWB9IG9uQ2xpY2s9e3RoaXMuYXBwbHlRdWlja0ZpbHRlcnMuYmluZCh0aGlzLCAnYXZnX3JhdGluZ3MnLCAnMycsIGZhbHNlKX0+My4wICs8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7dGhpcy5zdGF0ZS5hdmdfcmF0aW5ncz09JzQnPydzcnQtYWN0JzonJ31gfSBvbkNsaWNrPXt0aGlzLmFwcGx5UXVpY2tGaWx0ZXJzLmJpbmQodGhpcywgJ2F2Z19yYXRpbmdzJywgJzQnLCBmYWxzZSl9PjQuMCArPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3RoaXMuc3RhdGUuYXZnX3JhdGluZ3M9PSc0LjUnPydzcnQtYWN0JzonJ31gfSBvbkNsaWNrPXt0aGlzLmFwcGx5UXVpY2tGaWx0ZXJzLmJpbmQodGhpcywgJ2F2Z19yYXRpbmdzJywgJzQuNScsIGZhbHNlKX0+NC41ICs8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaT09NSAmJiB0aGlzLnByb3BzLm9mZmVyTGlzdCAmJiB0aGlzLnByb3BzLm9mZmVyTGlzdC5maWx0ZXIoeCA9PiB4LnNsaWRlcl9sb2NhdGlvbiA9PT0gJ2xhYl9zZWFyY2hfcmVzdWx0cycpLmxlbmd0aCAmJiAhdGhpcy5zdGF0ZS5pc19pbnN1cmVkP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICA8QmFubmVyQ2Fyb3VzZWwgey4uLnRoaXMucHJvcHN9IHNsaWRlckxvY2F0aW9uPVwibGFiX3NlYXJjaF9yZXN1bHRzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1jb250LWhlaWdodCBob21lLXBhZ2UtYmFubmVyLWRpdiBtYi0zIG1yLTAgYmFubmVyLW1kLW1hcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlckJhbm5lciBiYW5uZXItY2Fyb3VzZWwtZGl2IGQtbWQtbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2SGVpZ2h0IG0tMFwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiNXB4IWltcG9ydGFudFwifX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYW5uZXJDYXJvdXNlbCB7Li4udGhpcy5wcm9wc30gc2xpZGVyTG9jYXRpb249XCJsYWJfc2VhcmNoX3Jlc3VsdHNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5sYWJfY2FyZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYlByb2ZpbGVDYXJkIHsuLi50aGlzLnByb3BzfSBkZXRhaWxzPXtMQUJTW2xhYklkXX0ga2V5PXtpfSByYW5rPXtpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPExhYlByb2ZpbGVDYXJkIHsuLi50aGlzLnByb3BzfSBkZXRhaWxzPXtMQUJTW2xhYklkXX0ga2V5PXtpfSByYW5rPXtpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmFsc2UgJiYgbGFiTGlzdCAmJiBsYWJMaXN0Lmxlbmd0aCA+IDUgJiYgIGkgPT0gMj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTMgcmVmZXJEb2NpbWdcIiBvbkNsaWNrPXsoZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1JlZmVyTGFiTGlzdCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnZXZlbnQnOiAncmVmZXItbGFiLWxpc3QnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvZG9jdG9yc2lnbnVwP21lbWJlcl90eXBlPTInKX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3plcm9fbGFiLW1pbi5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj46Jyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbmZpbml0ZVNjcm9sbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA/IDxMb2FkZXIgY2xhc3NUeXBlPVwibG9hZGVyUGFnaW5hdGlvblwiIC8+IDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTGFic0xpc3RcbiIsImltcG9ydCBMYWJzTGlzdCBmcm9tICcuL0xhYnNMaXN0LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBMYWJzTGlzdCIsImltcG9ydCBUb3BCYXIgZnJvbSAnLi9uZXdUb3BCYXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IFRvcEJhciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFJhbmdlIGZyb20gJ3JjLXNsaWRlci9saWIvUmFuZ2UnO1xuaW1wb3J0IHsgQ29weVRvQ2xpcGJvYXJkIH0gZnJvbSAncmVhY3QtY29weS10by1jbGlwYm9hcmQnO1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5pbXBvcnQgTG9jYXRpb25FbGVtZW50cyBmcm9tICcuLi8uLi8uLi8uLi9jb250YWluZXJzL2NvbW1vbnMvbG9jYXRpb25FbGVtZW50cydcbmltcG9ydCBMb2NhdGlvblBvcHVwIGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMvY29tbW9ucy9sb2NhdGlvblBvcHVwJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL2d0bSdcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcblxuY2xhc3MgVG9wQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFuY2hvckVsOiBudWxsLFxuICAgICAgICAgICAgZHJvcGRvd25fdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICAvLyBvdmVybGF5VmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICAvLyBzaG93UG9wdXBDb250YWluZXI6IHRydWUsXG4gICAgICAgICAgICBpc19pbnN1cmVkOiBwcm9wcy5maWx0ZXJDcml0ZXJpYSAmJiBwcm9wcy5maWx0ZXJDcml0ZXJpYS5pc19pbnN1cmVkID8gcHJvcHMuZmlsdGVyQ3JpdGVyaWEuaXNfaW5zdXJlZCA6IGZhbHNlLFxuICAgICAgICAgICAgLy9OZXcgZmlsdGVyc1xuICAgICAgICAgICAgcHJldmlvdXNfZmlsdGVyczoge30sXG4gICAgICAgICAgICBzb3J0X29uOiAnJyxcbiAgICAgICAgICAgIHNvcnRfb3JkZXI6ICcnLFxuICAgICAgICAgICAgYXZnX3JhdGluZ3M6ICcnLFxuICAgICAgICAgICAgYXZhaWxhYmlsaXR5OiBbXSxcbiAgICAgICAgICAgIGhvbWVfdmlzaXQ6IGZhbHNlLFxuICAgICAgICAgICAgbGFiX3Zpc2l0OiBmYWxzZSxcbiAgICAgICAgICAgIHNob3J0VVJMOiBcIlwiLFxuICAgICAgICAgICAgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlLFxuICAgICAgICAgICAgcXVpY2tGaWx0ZXI6IHt9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi5wcm9wcy5maWx0ZXJDcml0ZXJpYSwgcXVpY2tGaWx0ZXI6IHByb3BzLnF1aWNrRmlsdGVyfHx7fSB9LCAoKT0+IHtcbiAgICAgICAgICAgIGlmKCB0aGlzLnN0YXRlLnF1aWNrRmlsdGVyICYmIHRoaXMuc3RhdGUucXVpY2tGaWx0ZXIudmlld01vcmUgKSAge1xuICAgICAgICAgICAgICAgIHRoaXMuc29ydEZpbHRlckNsaWNrZWQoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmIChwcm9wcy5sb2NhdGlvblR5cGUgJiYgIXByb3BzLmxvY2F0aW9uVHlwZS5pbmNsdWRlcyhcImdlb1wiKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHByb3BzLnNlb0RhdGEgJiYgcHJvcHMuc2VvRGF0YS5sb2NhdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9jYXRpb25Qb3B1cDogZmFsc2UgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKChwcm9wcy5zZW9EYXRhICYmIHByb3BzLnNlb0RhdGEubG9jYXRpb24pIHx8IHByb3BzLnNlb0ZyaWVuZGx5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9jYXRpb25Qb3B1cDogdHJ1ZSwgb3ZlcmxheVZpc2libGU6IHRydWUgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5zaG9ydGVuVXJsKClcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMucHJvcHMuZmlsdGVyQ3JpdGVyaWEgfSlcbiAgICAgICAgLy8gdGhpcy5zaG9ydGVuVXJsKClcbiAgICAgICAgaWYgKCh0aGlzLnByb3BzLnNlb0RhdGEgJiYgdGhpcy5wcm9wcy5zZW9EYXRhLmxvY2F0aW9uKSB8fCB0aGlzLnByb3BzLnNlb0ZyaWVuZGx5KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2NhdGlvblR5cGUgJiYgdGhpcy5wcm9wcy5sb2NhdGlvblR5cGUuaW5jbHVkZXMoXCJnZW9cIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xvY2F0aW9uUG9wdXA6IHRydWUsIG92ZXJsYXlWaXNpYmxlOiB0cnVlIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmaWx0ZXIgc3RpY2t5IGR5bmFtaWMgaGVpZ2h0IGpzXG4gICAgICAgIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIC8vICAgICBjb25zdCAgaGVhZEhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpc19oZWFkZXInKTtcbiAgICAgICAgLy8gICAgIGhlYWRIZWlnaHQuY2xpZW50SGVpZ2h0O1xuICAgICAgICAvLyAgICAgY29uc3QgZmlsdGVySGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zpc19oZWFkZXInKTtcbiAgICAgICAgLy8gICAgIGZpbHRlckhlaWdodC5zdHlsZS50b3AgPSBoZWFkSGVpZ2h0LmNsaWVudEhlaWdodDtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGZpbHRlckhlaWdodC5zdHlsZS50b3AgPSBoZWFkSGVpZ2h0LmNsaWVudEhlaWdodCk7XG4gICAgICAgIC8vIH0pXG5cbiAgICB9XG5cbiAgICBhcHBseUZpbHRlcnMoKSB7XG4gICAgICAgIGxldCBmaWx0ZXJTdGF0ZSA9IHtcbiAgICAgICAgICAgIHNvcnRfb246IHRoaXMuc3RhdGUuc29ydF9vbixcbiAgICAgICAgICAgIHNvcnRfb3JkZXI6IHRoaXMuc3RhdGUuc29ydF9vcmRlcixcbiAgICAgICAgICAgIGF2YWlsYWJpbGl0eTogdGhpcy5zdGF0ZS5hdmFpbGFiaWxpdHksXG4gICAgICAgICAgICBhdmdfcmF0aW5nczogdGhpcy5zdGF0ZS5hdmdfcmF0aW5ncyxcbiAgICAgICAgICAgIGhvbWVfdmlzaXQ6IHRoaXMuc3RhdGUuaG9tZV92aXNpdCxcbiAgICAgICAgICAgIGxhYl92aXNpdDogdGhpcy5zdGF0ZS5sYWJfdmlzaXQsXG4gICAgICAgICAgICBpc19pbnN1cmVkOiB0aGlzLnN0YXRlLmlzX2luc3VyZWRcbiAgICAgICAgfVxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdGaWx0ZXJDbGljaycsICdBY3Rpb24nOiAnQ2xpY2tlZCBvbiBGaWx0ZXInLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdsYWItZmlsdGVyLWNsaWNrZWQnLCAndXJsJzogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLCAnc29ydF9vcmRlcic6IHRoaXMuc3RhdGUuc29ydF9vcmRlciB8fCAnJywgJ2F2YWlsYWJpbGl0eSc6IHRoaXMuc3RhdGUuYXZhaWxhYmlsaXR5LCAnYXZnX3JhdGluZ3MnOiB0aGlzLnN0YXRlLmF2Z19yYXRpbmdzLCAnbGFiX3Zpc2l0JzogdGhpcy5zdGF0ZS5sYWJfdmlzaXQsICdob21lX3Zpc2l0JzogdGhpcy5zdGF0ZS5ob21lX3Zpc2l0LCAnc29ydF9vbic6IHRoaXMuc3RhdGUuc29ydF9vblxuICAgICAgICB9XG5cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgXG4gICAgICAgIGxldCBpZkFueUZpbHRlckFwcGxpZWQgPSB0aGlzLmlzRGF0YUZpbHRlcmVkKHt9LCB0cnVlKVxuICAgICAgICBpZihpZkFueUZpbHRlckFwcGxpZWQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYXBwbHlGaWx0ZXJzKGZpbHRlclN0YXRlKSAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkcm9wZG93bl92aXNpYmxlOiBmYWxzZSB9KVxuICAgIH1cblxuICAgIHRvZ2dsZUFsbEZpbHRlcnModHlwZSwgdmFsLCBpc0FycmF5ID0gZmFsc2UsIGUpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gdmFsXG4gICAgICAgIGlmIChpc0FycmF5KSB7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRWYWwgPSBbXS5jb25jYXQodGhpcy5zdGF0ZVt0eXBlXSkgfHwgW11cbiAgICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlXG4gICAgICAgICAgICB2YWx1ZSA9IHNlbGVjdGVkVmFsLmZpbHRlcigoZGF0YSk9PiB7XG4gICAgICAgICAgICAgICAgaWYoZGF0YT09dmFsKXtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmKCFmb3VuZCl7XG4gICAgICAgICAgICAgICAgdmFsdWUucHVzaCh2YWwpICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHR5cGUuaW5jbHVkZXMoJ3NvcnRfb24nKSApIHtcblxuICAgICAgICAgICAgaWYodmFsLmluY2x1ZGVzKCdwcmljZV9hc2MnKSB8fCB2YWwuaW5jbHVkZXMoJ3ByaWNlX2Rlc2MnKSApe1xuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5zdGF0ZVt0eXBlXT09J2ZlZXMnICYmICggKHRoaXMuc3RhdGVbJ3NvcnRfb3JkZXInXT09J2FzYycgJiYgdmFsLmluY2x1ZGVzKCdwcmljZV9hc2MnKSApIHx8ICh0aGlzLnN0YXRlWydzb3J0X29yZGVyJ109PSdkZXNjJyAmJiB2YWwuaW5jbHVkZXMoJ3ByaWNlX2Rlc2MnKSApICkgKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c29ydF9vbjogbnVsbCwgc29ydF9vcmRlcjogbnVsbH0pXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NvcnRfb246ICdmZWVzJywgc29ydF9vcmRlcjogdmFsLmluY2x1ZGVzKCdwcmljZV9hc2MnKT8nYXNjJzonZGVzYyd9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzb3J0X29uOiB0aGlzLnN0YXRlW3R5cGVdPT12YWx1ZT9udWxsOnZhbHVlLCBzb3J0X29yZGVyOiBudWxsIH0pICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZSBpZih0eXBlLmluY2x1ZGVzKCdsYWJfdmlzaXQnKSB8fCB0eXBlLmluY2x1ZGVzKCdob21lX3Zpc2l0Jykpe1xuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5zdGF0ZVt0eXBlXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtbdHlwZV06ICF0aGlzLnN0YXRlW3R5cGVdfSlcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeydsYWJfdmlzaXQnOiB0eXBlLmluY2x1ZGVzKCdsYWJfdmlzaXQnKT92YWx1ZTohdmFsdWUsICdob21lX3Zpc2l0JzogdHlwZS5pbmNsdWRlcygnaG9tZV92aXNpdCcpP3ZhbHVlOiF2YWx1ZX0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgW3R5cGVdOiB0aGlzLnN0YXRlW3R5cGVdPT12YWx1ZT8nJzp2YWx1ZSB9KSAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVDbG9zZShyZXNldD1mYWxzZSwgZSkge1xuXG4gICAgICAgIGlmKHJlc2V0KSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1Jlc2V0TGFiRmlsdGVyJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAncmVzZXQtbGFiLWZpbHRlcicsICd1cmwnOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsICdzb3J0X29yZGVyJzogdGhpcy5zdGF0ZS5zb3J0X29yZGVyIHx8ICcnLCAnYXZhaWxhYmlsaXR5JzogdGhpcy5zdGF0ZS5hdmFpbGFiaWxpdHksICdhdmdfcmF0aW5ncyc6IHRoaXMuc3RhdGUuYXZnX3JhdGluZ3MsICdsYWJfdmlzaXQnOiB0aGlzLnN0YXRlLmxhYl92aXNpdCwgJ2hvbWVfdmlzaXQnOiB0aGlzLnN0YXRlLmhvbWVfdmlzaXQsICdzb3J0X29uJzogdGhpcy5zdGF0ZS5zb3J0X29uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgICAgICBsZXQgcmVzZXRGaWx0ZXJzID0ge1xuICAgICAgICAgICAgICAgIHNvcnRfb246ICcnLFxuICAgICAgICAgICAgICAgIHNvcnRfb3JkZXI6ICcnLFxuICAgICAgICAgICAgICAgIGF2Z19yYXRpbmdzOiAnJyxcbiAgICAgICAgICAgICAgICBob21lX3Zpc2l0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBsYWJfdmlzaXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF2YWlsYWJpbGl0eTogW11cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgLi4ucmVzZXRGaWx0ZXJzLFxuICAgICAgICAgICAgICAgIHF1aWNrRmlsdGVyOiB7fVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdDbG9zZUxhYkZpbHRlcicsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2Nsb3NlLWxhYi1maWx0ZXInLCAndXJsJzogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLCAnc29ydF9vcmRlcic6IHRoaXMuc3RhdGUuc29ydF9vcmRlciB8fCAnJywgJ2F2YWlsYWJpbGl0eSc6IHRoaXMuc3RhdGUuYXZhaWxhYmlsaXR5LCAnYXZnX3JhdGluZ3MnOiB0aGlzLnN0YXRlLmF2Z19yYXRpbmdzLCAnbGFiX3Zpc2l0JzogdGhpcy5zdGF0ZS5sYWJfdmlzaXQsICdob21lX3Zpc2l0JzogdGhpcy5zdGF0ZS5ob21lX3Zpc2l0LCAnc29ydF9vbic6IHRoaXMuc3RhdGUuc29ydF9vblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duX3Zpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucHJldmlvdXNfZmlsdGVycyxcbiAgICAgICAgICAgICAgICBxdWlja0ZpbHRlcjoge31cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvL3RoaXMucHJvcHMucmVzZXRRdWlja0ZpbHRlcnMoKVxuICAgICAgICBcbiAgICB9XG5cbiAgICBnZXRDcml0ZXJpYVN0cmluZyhzZWxlY3RlZENyaXRlcmlhcykge1xuICAgICAgICBpZiAoc2VsZWN0ZWRDcml0ZXJpYXMgJiYgc2VsZWN0ZWRDcml0ZXJpYXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWRDcml0ZXJpYXMucmVkdWNlKChmaW5hbCwgY3VyciwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZmluYWwgKz0gJywgJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbCArPSBgJHtjdXJyLm5hbWV9YFxuICAgICAgICAgICAgICAgIHJldHVybiBmaW5hbFxuICAgICAgICAgICAgfSwgXCJcIilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3J0ZW5VcmwoKSB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZiArICcmZm9yY2VfbG9jYXRpb249dHJ1ZSdcbiAgICAgICAgICAgIHRoaXMucHJvcHMudXJsU2hvcnRuZXIodXJsLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3J0VVJMOiBkYXRhLnRpbnlfdXJsIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG92ZXJsYXlDbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG92ZXJsYXlWaXNpYmxlOiBmYWxzZSwgc2VhcmNoQ2l0aWVzOiBbXSwgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIGhpZGVMb2NhdGlvblBvcHVwKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIHBvcHVwQ29udGFpbmVyKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1BvcHVwQ29udGFpbmVyOiBmYWxzZSwgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIGdvVG9Mb2NhdGlvbigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzZWFyY2hDaXRpZXM6IFtdLFxuICAgICAgICB9KVxuICAgICAgICAvKmxldCByZWRpcmVjdF90byA9IFwiXCJcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygnbGJjaXQnKSB8fCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJ2xibGl0Y2l0JykpIHtcbiAgICAgICAgICAgIHJlZGlyZWN0X3RvID0gXCIvbGFiL3NlYXJjaHJlc3VsdHNcIlxuICAgICAgICB9XG4gICAgICAgICovXG4gICAgICAgIGxldCBsb2NhdGlvbl91cmwgPSAnL2xvY2F0aW9uc2VhcmNoJ1xuICAgICAgICAvKiAgICAgICAgaWYgKHJlZGlyZWN0X3RvKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uX3VybCArPSBgP3JlZGlyZWN0X3RvPSR7cmVkaXJlY3RfdG99YFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgKi9cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ2hhbmdlTG9jYXRpb25Eb2N0b3JSZXN1bHRzUG9wVXAnLCAnQWN0aW9uJzogJ2NoYW5nZS1sb2NhdGlvbi1kb2N0b3ItcmVzdWx0cy1Qb3BVcCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NoYW5nZS1sb2NhdGlvbi1kb2N0b3ItcmVzdWx0cy1Qb3BVcCcsICd1cmwnOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChsb2NhdGlvbl91cmwpXG5cbiAgICB9XG5cbiAgICBzb3J0RmlsdGVyQ2xpY2tlZCgpIHtcblxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0xhYlNvcnRGaWx0ZXJDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbGFiLXNvcnQtZmlsdGVyLWNsaWNrZWQnLCAndXJsJzogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLCAnc29ydF9vcmRlcic6IHRoaXMuc3RhdGUuc29ydF9vcmRlciB8fCAnJywgJ2F2YWlsYWJpbGl0eSc6IHRoaXMuc3RhdGUuYXZhaWxhYmlsaXR5LCAnYXZnX3JhdGluZ3MnOiB0aGlzLnN0YXRlLmF2Z19yYXRpbmdzLCAnbGFiX3Zpc2l0JzogdGhpcy5zdGF0ZS5sYWJfdmlzaXQsICdob21lX3Zpc2l0JzogdGhpcy5zdGF0ZS5ob21lX3Zpc2l0LCAnc29ydF9vbic6IHRoaXMuc3RhdGUuc29ydF9vblxuICAgICAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICBsZXQgY3VycmVudEZpbHRlcnMgPSB7XG4gICAgICAgICAgICBzb3J0X29uOiB0aGlzLnN0YXRlLnNvcnRfb24sXG4gICAgICAgICAgICBzb3J0X29yZGVyOiB0aGlzLnN0YXRlLnNvcnRfb3JkZXIsXG4gICAgICAgICAgICBhdmdfcmF0aW5nczogdGhpcy5zdGF0ZS5hdmdfcmF0aW5ncyxcbiAgICAgICAgICAgIGF2YWlsYWJpbGl0eTogW10uY29uY2F0KHRoaXMuc3RhdGUuYXZhaWxhYmlsaXR5KSB8fCBbXSxcbiAgICAgICAgICAgIGhvbWVfdmlzaXQ6IHRoaXMuc3RhdGUuaG9tZV92aXNpdCxcbiAgICAgICAgICAgIGxhYl92aXNpdDogdGhpcy5zdGF0ZS5sYWJfdmlzaXRcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZHJvcGRvd25fdmlzaWJsZTogdHJ1ZSwgcHJldmlvdXNfZmlsdGVyczogY3VycmVudEZpbHRlcnMgfSlcbiAgICB9XG5cbiAgICBpc0RhdGFGaWx0ZXJlZChmaWx0ZXJEYXRhID0ge30sIGNoZWNrSWZBbnlGaWx0ZXJBcHBsaWxlZD0gZmFsc2UpIHtcblxuICAgICAgICBpZiAoY2hlY2tJZkFueUZpbHRlckFwcGxpbGVkKSB7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IGZpbHRlckNvdW50ID0gMFxuICAgICAgICAgICAgICAgIGZvciAobGV0IGZpbHRlciBpbiB0aGlzLnN0YXRlLnByZXZpb3VzX2ZpbHRlcnMpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsdGVyLmluY2x1ZGVzKCdhdmFpbGFiaWxpdHknKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5wcmV2aW91c19maWx0ZXJzW2ZpbHRlcl0gJiYgdGhpcy5zdGF0ZVtmaWx0ZXJdLmxlbmd0aCAhPSB0aGlzLnN0YXRlLnByZXZpb3VzX2ZpbHRlcnNbZmlsdGVyXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJDb3VudCsrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGFyckZsaXRlcj0wO2FyckZsaXRlcjx0aGlzLnN0YXRlW2ZpbHRlcl0ubGVuZ3RoOyBhcnJGbGl0ZXIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnN0YXRlLnByZXZpb3VzX2ZpbHRlcnNbZmlsdGVyXS5pbmRleE9mKHRoaXMuc3RhdGVbZmlsdGVyXVthcnJGbGl0ZXJdKT09LTEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyQ291bnQrK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuc3RhdGVbZmlsdGVyXSAhPSB0aGlzLnN0YXRlLnByZXZpb3VzX2ZpbHRlcnNbZmlsdGVyXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJDb3VudCsrXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmlsdGVyQ291bnRcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBmaWx0ZXJEYXRhID0ge1xuICAgICAgICAgICAgICAgIGF2Z19yYXRpbmdzOiAnJyxcbiAgICAgICAgICAgICAgICBhdmFpbGFiaWxpdHk6IFtdLFxuICAgICAgICAgICAgICAgIGhvc3BpdGFsX3R5cGU6ICcnXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IGZpbHRlckNvdW50ID0gMFxuICAgICAgICAgICAgICAgIGZvciAobGV0IGZpbHRlciBpbiBmaWx0ZXJEYXRhKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoZmlsdGVyLmluY2x1ZGVzKCdob3NwaXRhbF90eXBlJykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5zdGF0ZVsnbGFiX3Zpc2l0J10gfHwgdGhpcy5zdGF0ZVsnaG9tZV92aXNpdCddKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJDb3VudCsrXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmIChmaWx0ZXIgPT0gJ2F2YWlsYWJpbGl0eScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlW2ZpbHRlcl0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyQ291bnQrK1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpbHRlckRhdGFbZmlsdGVyXSAhPSB0aGlzLnN0YXRlW2ZpbHRlcl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckNvdW50KytcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmlsdGVyQ291bnRcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICB0b2dnbGVJbnN1cmVkKCkge1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb3ZlcmVkVW5kZXJMQUJJbnN1cmFuY2VDbGlja2VkJywgJ0FjdGlvbic6ICdDb3ZlcmVkVW5kZXJMQUJJbnN1cmFuY2VDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY292ZXJlZC11bmRlci1sYWItaW5zdXJhbmNlLWNsaWNrZWQnLCAndXJsJzogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNfaW5zdXJlZDogIXRoaXMuc3RhdGUuaXNfaW5zdXJlZCB9LCAoKSA9PiB7XG5cblxuICAgICAgICAgICAgbGV0IGZpbHRlclN0YXRlID0ge1xuICAgICAgICAgICAgICAgIHNvcnRfb246IHRoaXMuc3RhdGUuc29ydF9vbixcbiAgICAgICAgICAgICAgICBzb3J0X29yZGVyOiB0aGlzLnN0YXRlLnNvcnRfb3JkZXIsXG4gICAgICAgICAgICAgICAgYXZhaWxhYmlsaXR5OiB0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eSxcbiAgICAgICAgICAgICAgICBhdmdfcmF0aW5nczogdGhpcy5zdGF0ZS5hdmdfcmF0aW5ncyxcbiAgICAgICAgICAgICAgICBob21lX3Zpc2l0OiB0aGlzLnN0YXRlLmhvbWVfdmlzaXQsXG4gICAgICAgICAgICAgICAgbGFiX3Zpc2l0OiB0aGlzLnN0YXRlLmxhYl92aXNpdCxcbiAgICAgICAgICAgICAgICBpc19pbnN1cmVkOiB0aGlzLnN0YXRlLmlzX2luc3VyZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvcHMuYXBwbHlGaWx0ZXJzKGZpbHRlclN0YXRlKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICB2YXIgc2VsZWN0ZWRUZXN0cyA9IFtdXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmN1cnJlbnRTZWFyY2hlZENyaXRlcmlhcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5jdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRlc3RzLnB1c2godGhpcy5wcm9wcy5jdXJyZW50U2VhcmNoZWRDcml0ZXJpYXNbaV0uaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNyaXRlcmlhU3RyID0gdGhpcy5nZXRDcml0ZXJpYVN0cmluZyh0aGlzLnByb3BzLmN1cnJlbnRTZWFyY2hlZENyaXRlcmlhcylcbiAgICAgICAgbGV0IGxvY2F0aW9uTmFtZSA9IFwiXCJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24uZm9ybWF0dGVkX2FkZHJlc3MpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uTmFtZSA9IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5mb3JtYXR0ZWRfYWRkcmVzc1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlb0RhdGEgJiYgdGhpcy5wcm9wcy5zZW9EYXRhLmxvY2F0aW9uKSB7XG4gICAgICAgICAgICBsb2NhdGlvbk5hbWUgPSB0aGlzLnByb3BzLnNlb0RhdGEubG9jYXRpb25cbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZHJvcGRvd25fdmlzaWJsZSA/XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbC1vdmVybGF5IGNhbmNlbC1vdmVybGF5LXppbmRleFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2UuYmluZCh0aGlzLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBjYW5jZWwtYXBwb2ludG1lbnQtZGl2IGNhbmNlbC1wb3B1cCBvdmVyZmxvdy1oaWRkZW4gcGItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Jvc3MtYnRuXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZS5iaW5kKHRoaXMsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaWNvbnMvY2xvc2UucG5nXCJ9IGFsdD1cImNsb3NlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcC10b3AtaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTb3J0L0ZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29ydGluZy1tYWluLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvcnQtbGZ0LWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJzb3J0LWhlYWRpbmdzXCI+U29ydCBieTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvcnQtc2xpZGVyLXNjcm9sbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc29ydC1jYXJkcy1saXN0ICR7dGhpcy5zdGF0ZS5zb3J0X29uPT0nJz8nY2hpdEFjdGl2ZSc6Jyd9YH0gb25DbGljaz17dGhpcy50b2dnbGVBbGxGaWx0ZXJzLmJpbmQodGhpcywgJ3NvcnRfb24nLCAnJywgZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcnQtbHN0LWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc29ydF9vbj09Jyc/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wb3B1cGljb24vcnYtcmVsZXZlbmNlLnN2Z1wifSBzdHlsZT17eyB3aWR0aDogMTggfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9yZXZlbC5zdmdcIn0gc3R5bGU9e3sgd2lkdGg6IDE4IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5SZWxldmFuY2U8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlzX2xvZ2luX3VzZXJfaW5zdXJlZCAmJiB0aGlzLnByb3BzLmluc3VyYW5jZV9zdGF0dXMgPT0gMT8nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PGRpdiBjbGFzc05hbWU9e2Bzb3J0LWNhcmRzLWxpc3QgJHt0aGlzLnN0YXRlLnNvcnRfb249PSdmZWVzJyAmJiB0aGlzLnN0YXRlLnNvcnRfb3JkZXI9PSdhc2MnPydjaGl0QWN0aXZlJzonJ31gfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFsbEZpbHRlcnMuYmluZCh0aGlzLCAnc29ydF9vbicsICdwcmljZV9hc2MnLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcnQtbHN0LWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zb3J0X29uPT0nZmVlcycgJiYgdGhpcy5zdGF0ZS5zb3J0X29yZGVyPT0nYXNjJz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wb3B1cGljb24vcnYtcHJpY2Vzb3J0LnN2Z1wifSBzdHlsZT17eyB3aWR0aDogMTggfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcG9wdXBpY29uL3ByaWNlc29ydC5zdmdcIn0gc3R5bGU9e3sgd2lkdGg6IDE4IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5QcmljZSBMb3cgdG8gSGlnaDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlzX2xvZ2luX3VzZXJfaW5zdXJlZCAmJiB0aGlzLnByb3BzLmluc3VyYW5jZV9zdGF0dXMgPT0gMT8nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PGRpdiBjbGFzc05hbWU9e2Bzb3J0LWNhcmRzLWxpc3QgJHt0aGlzLnN0YXRlLnNvcnRfb249PSdmZWVzJyAmJiB0aGlzLnN0YXRlLnNvcnRfb3JkZXI9PSdkZXNjJz8nY2hpdEFjdGl2ZSc6Jyd9YH0gb25DbGljaz17dGhpcy50b2dnbGVBbGxGaWx0ZXJzLmJpbmQodGhpcywgJ3NvcnRfb24nLCAncHJpY2VfZGVzYycsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNydC1sc3QtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNvcnRfb249PSdmZWVzJyAmJiB0aGlzLnN0YXRlLnNvcnRfb3JkZXI9PSdkZXNjJz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wb3B1cGljb24vcnYtcHJpY2V1cC5zdmdcIn0gc3R5bGU9e3sgd2lkdGg6IDE4IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3BvcHVwaWNvbi9wcmljZXVwLnN2Z1wifSBzdHlsZT17eyB3aWR0aDogMTggfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlByaWNlIEhpZ2ggdG8gTG93PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bzb3J0LWNhcmRzLWxpc3QgJHt0aGlzLnN0YXRlLnNvcnRfb249PSdkaXN0YW5jZSc/J2NoaXRBY3RpdmUnOicnfWB9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlQWxsRmlsdGVycy5iaW5kKHRoaXMsICdzb3J0X29uJywgJ2Rpc3RhbmNlJywgZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcnQtbHN0LWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc29ydF9vbj09J2Rpc3RhbmNlJz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3BvcHVwaWNvbi9ydi1sb2NhdGlvbnMuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiAxNCB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3BvcHVwaWNvbi9sb2NhdGlvbnMuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiAxNCB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RGlzdGFuY2U8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bzb3J0LWNhcmRzLWxpc3QgJHt0aGlzLnN0YXRlLnNvcnRfb249PSdyYXRpbmcnPydjaGl0QWN0aXZlJzonJ31gfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFsbEZpbHRlcnMuYmluZCh0aGlzLCAnc29ydF9vbicsICdyYXRpbmcnLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNydC1sc3QtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zb3J0X29uPT0ncmF0aW5nJz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3BvcHVwaWNvbi9ydi1yYXRuZy5zdmdcIn0gc3R5bGU9e3sgd2lkdGg6IDE4IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcG9wdXBpY29uL3JhdG5nLnN2Z1wifSBzdHlsZT17eyB3aWR0aDogMTggfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlJhdGluZzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3J0aW5nLWJ0bnMtY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInNvcnQtaGVhZGluZ3NcIj5SYXRpbmdzPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29ydGJ0bmNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YHNvcnRCdG5zICR7dGhpcy5zdGF0ZS5hdmdfcmF0aW5ncyA9PSczJz8gJ3NydEJ0bkFjdCcgOiAnJ31gfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFsbEZpbHRlcnMuYmluZCh0aGlzLCAnYXZnX3JhdGluZ3MnLCAnMycsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYXZnX3JhdGluZ3MgPT0nMyc/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNydC1zdGFyLWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3BvcHVwaWNvbi9ydi1idG4tc3Rhci5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8aW1nIGNsYXNzTmFtZT1cInNydC1zdGFyLWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3NlbGVjdGVkLXN0YXIuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzLjAgKzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgc29ydEJ0bnMgJHt0aGlzLnN0YXRlLmF2Z19yYXRpbmdzID09JzQnPyAnc3J0QnRuQWN0JyA6ICcnfWB9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlQWxsRmlsdGVycy5iaW5kKHRoaXMsICdhdmdfcmF0aW5ncycsICc0JywgZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hdmdfcmF0aW5ncyA9PSc0Jz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic3J0LXN0YXItaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcG9wdXBpY29uL3J2LWJ0bi1zdGFyLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxpbWcgY2xhc3NOYW1lPVwic3J0LXN0YXItaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvc2VsZWN0ZWQtc3Rhci5zdmdcIn0gLz4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LjAgKzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgc29ydEJ0bnMgJHt0aGlzLnN0YXRlLmF2Z19yYXRpbmdzID09JzQuNSc/ICdzcnRCdG5BY3QnIDogJyd9YH0gb25DbGljaz17dGhpcy50b2dnbGVBbGxGaWx0ZXJzLmJpbmQodGhpcywgJ2F2Z19yYXRpbmdzJywgJzQuNScsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYXZnX3JhdGluZ3M9PSc0LjUnP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzcnQtc3Rhci1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wb3B1cGljb24vcnYtYnRuLXN0YXIuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PGltZyBjbGFzc05hbWU9XCJzcnQtc3Rhci1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9zZWxlY3RlZC1zdGFyLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNC41ICs8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3J0aW5nLWJ0bnMtY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInNvcnQtaGVhZGluZ3NcIj5BdmFpbGFiaWxpdHk8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3J0YnRuY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgc29ydEJ0bnMgJHt0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eSAmJiB0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eS5sZW5ndGggJiYgdGhpcy5zdGF0ZS5hdmFpbGFiaWxpdHkuaW5kZXhPZignMScpID4gLTEgPyAnc3J0QnRuQWN0JyA6ICcnfWB9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlQWxsRmlsdGVycy5iaW5kKHRoaXMsICdhdmFpbGFiaWxpdHknLCAnMScsIHRydWUpfT5Ub2RheTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgc29ydEJ0bnMgJHt0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eSAmJiB0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eS5sZW5ndGggJiYgdGhpcy5zdGF0ZS5hdmFpbGFiaWxpdHkuaW5kZXhPZignMicpID4gLTEgPyAnc3J0QnRuQWN0JyA6ICcnfWB9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlQWxsRmlsdGVycy5iaW5kKHRoaXMsICdhdmFpbGFiaWxpdHknLCAnMicsIHRydWUpfT5Ub21vcnJvdzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgc29ydEJ0bnMgJHt0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eSAmJiB0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eS5sZW5ndGggJiYgdGhpcy5zdGF0ZS5hdmFpbGFiaWxpdHkuaW5kZXhPZignMycpID4gLTEgPyAnc3J0QnRuQWN0JyA6ICcnfWB9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlQWxsRmlsdGVycy5iaW5kKHRoaXMsICdhdmFpbGFiaWxpdHknLCAnMycsIHRydWUpfT5OZXh0IDMgRGF5czwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvcnRpbmctYnRucy1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwic29ydC1oZWFkaW5nc1wiPlZpc2l0IFR5cGU8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3J0YnRuY2FyZCBqdXN0eWZ5LXR3b0J0bnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YHNvcnRCdG5zICR7dGhpcy5zdGF0ZS5ob21lX3Zpc2l0ID8gJ3NydEJ0bkFjdCcgOiAnJ31gfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFsbEZpbHRlcnMuYmluZCh0aGlzLCAnaG9tZV92aXNpdCcsICF0aGlzLnN0YXRlLmhvbWVfdmlzaXQsIGZhbHNlKX0+SG9tZSBWaXNpdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgc29ydEJ0bnMgJHt0aGlzLnN0YXRlLmxhYl92aXNpdCA/ICdzcnRCdG5BY3QnIDogJyd9YH0gb25DbGljaz17dGhpcy50b2dnbGVBbGxGaWx0ZXJzLmJpbmQodGhpcywgJ2xhYl92aXNpdCcsICF0aGlzLnN0YXRlLmxhYl92aXNpdCwgZmFsc2UpfT5MYWIgVmlzaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcC1mb290LWJ0bnMtY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFkZC1zaHBuZy1jYXJ0LWJ0blwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2UuYmluZCh0aGlzLCB0cnVlKX0+UmVzZXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ2LWJ0bi1wcmltYXJ5IGJvb2stYnRuLW1yZ24tYWRqdXN0XCIgb25DbGljaz17dGhpcy5hcHBseUZpbHRlcnMuYmluZCh0aGlzKX0+QXBwbHkgRmlsdGVyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1yb3cgc3RpY2t5LWhlYWRlciBtYmwtc3RpY2tcIiBpZD1cImZpc19oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItcm93IHN0aWNreS1oZWFkZXIgbWJsLXN0aWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzY3JvbGwtc2hhZG93LWJhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWZpbHRlci10YWItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWZpbHRlci10YWJzLXNlbGVjdCBsb2NhdGlvblRlc3RGaWx0ZXJcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuZXdTdGlja3lmaWx0ZXJcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvdW50fSBSZXN1bHRzIHtjcml0ZXJpYVN0ciA/IFwiZm9yIFwiIDogXCJcIn17Y3JpdGVyaWFTdHJ9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uTmFtZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLmdvVG9Mb2NhdGlvbi5iaW5kKHRoaXMpfSA+e2AgaW4gJHtsb2NhdGlvbk5hbWV9YH08aW1nIHN0eWxlPXt7IHdpZHRoOiAnMTFweCcsIGhlaWdodDogJzE1cHgnLCBtYXJnaW5MZWZ0OiAnN3B4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9lZGl0LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1ub25lIGQtbWQtaW5saW5lLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaW5saW5lLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1ub25lIGQtbWQtaW5saW5lLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9e3RoaXMuc2hvcnRlblVybC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvdXJsLXNob3J0LnN2Z1wifSBzdHlsZT17eyB3aWR0aDogODAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3J0VVJMID8gPGRpdiBjbGFzc05hbWU9XCJzaGFyZUxpbmtwb3B1cE92ZXJsYXlcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvcnRVUkw6IFwiXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXJlTGlua3BvcHVwXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5zaG9ydFVSTH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZCB0ZXh0PXt0aGlzLnN0YXRlLnNob3J0VVJMfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJTaG9ydGVuZWQgVVJMIENvcGllZC5cIiB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG9ydFVSTDogXCJcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2hyZWxpbmtCdG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+Q29weTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1maWx0ZXItdGFicy1zZWxlY3QgbmV3U29ydEZpbHRlcmJhclwiIG9uQ2xpY2s9e3RoaXMuc29ydEZpbHRlckNsaWNrZWQuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMTRweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvZmlsdGVyc29ydC5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNEYXRhRmlsdGVyZWQoKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmaWx0ZXJOb3RpZmljYXRpb25cIj57dGhpcy5pc0RhdGFGaWx0ZXJlZCgpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlNvcnQvRmlsdGVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93TG9jYXRpb25Qb3B1cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2F0aW9uRWxlbWVudHMgey4uLnRoaXMucHJvcHN9IG9uUmVmPXtyZWYgPT4gKHRoaXMuY2hpbGQgPSByZWYpfSByZXN1bHRUeXBlPSdsaXN0JyBpc1RvcGJhcj17dHJ1ZX0gaGlkZUxvY2F0aW9uUG9wdXA9eygpID0+IHRoaXMuaGlkZUxvY2F0aW9uUG9wdXAoKX0gbG9jYXRpb25OYW1lPXtsb2NhdGlvbk5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93TG9jYXRpb25Qb3B1cCAmJiB0aGlzLnN0YXRlLm92ZXJsYXlWaXNpYmxlICYmICF0aGlzLnByb3BzLmxhYl9jYXJkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvY2F0aW9uUG9wdXAtb3ZlcmxheVwiIG9uQ2xpY2s9eygpID0+IHRoaXMub3ZlcmxheUNsaWNrKCl9ID48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dMb2NhdGlvblBvcHVwICYmIHRoaXMucHJvcHMubGFiX2NhcmQgJiYgdGhpcy5zdGF0ZS5zaG93UG9wdXBDb250YWluZXIgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXBDb250YWluZXItb3ZlcmxheVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTVE9SQUdFLmNoZWNrQXV0aCgpICYmIHRoaXMucHJvcHMuaXNfbG9naW5fdXNlcl9pbnN1cmVkICYmIHRoaXMucHJvcHMuaW5zdXJhbmNlX3N0YXR1cyA9PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT1cInRnLWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidGdsIHRnbC1pb3NcIiBpZD1cImxhYl9pbnN1cmFuY2VcIiB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt0aGlzLnN0YXRlLmlzX2luc3VyZWR9IG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZUluc3VyZWQuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRnbC1idG5cIiBodG1sRm9yPVwibGFiX2luc3VyYW5jZVwiPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNvdmVyZWQgdW5kZXIgT1BEIGluc3VyYW5jZSB8IDxhIGhyZWY9XCJodHRwczovL3FhY2RuLmRvY3ByaW1lLmNvbS9tZWRpYS9pbnN1cmVyL2RvY3VtZW50cy9Hcm91cF9PdXQtUGF0aWVudF9DSVNfSk5MVkpqdS5QREZcIiB0YXJnZXQ9XCJfYmxhbmtcIj48c3Bhbj4gS25vdyBNb3JlPC9zcGFuPjwvYT48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBUb3BCYXJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFJhbmdlIGZyb20gJ3JjLXNsaWRlci9saWIvUmFuZ2UnO1xuaW1wb3J0IHsgQ29weVRvQ2xpcGJvYXJkIH0gZnJvbSAncmVhY3QtY29weS10by1jbGlwYm9hcmQnO1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5pbXBvcnQgTG9jYXRpb25FbGVtZW50cyBmcm9tICcuLi8uLi8uLi8uLi9jb250YWluZXJzL2NvbW1vbnMvbG9jYXRpb25FbGVtZW50cydcbmltcG9ydCBMb2NhdGlvblBvcHVwIGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMvY29tbW9ucy9sb2NhdGlvblBvcHVwJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL2d0bSdcblxuY2xhc3MgVG9wQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIC8vIGFuY2hvckVsOiBudWxsLFxuICAgICAgICAgICAgLy8gb3BlbkZpbHRlcjogZmFsc2UsXG4gICAgICAgICAgICAvLyBwcmljZVJhbmdlOiBbMCwgMjAwMDBdLFxuICAgICAgICAgICAgLy8gZGlzdGFuY2VSYW5nZTogWzAsIDE1XSxcbiAgICAgICAgICAgIC8vIHNvcnRfb246IG51bGwsXG4gICAgICAgICAgICBzaG9ydFVSTDogXCJcIixcbiAgICAgICAgICAgIC8vIGRyb3Bkb3duX3Zpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlLFxuICAgICAgICAgICAgb3ZlcmxheVZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1BvcHVwQ29udGFpbmVyOiB0cnVlLFxuICAgICAgICAgICAgLy8gc29ydFRleHQ6ICdSZWxldmFuY2UnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi5wcm9wcy5maWx0ZXJDcml0ZXJpYSB9KVxuICAgICAgICBpZiAocHJvcHMubG9jYXRpb25UeXBlICYmICFwcm9wcy5sb2NhdGlvblR5cGUuaW5jbHVkZXMoXCJnZW9cIikpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9jYXRpb25Qb3B1cDogZmFsc2UgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5zZW9EYXRhICYmIHByb3BzLnNlb0RhdGEubG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICgocHJvcHMuc2VvRGF0YSAmJiBwcm9wcy5zZW9EYXRhLmxvY2F0aW9uKSB8fCBwcm9wcy5zZW9GcmllbmRseSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xvY2F0aW9uUG9wdXA6IHRydWUsIG92ZXJsYXlWaXNpYmxlOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuc2hvcnRlblVybCgpXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnByb3BzLmZpbHRlckNyaXRlcmlhIH0pXG4gICAgICAgIC8vIHRoaXMuc2hvcnRlblVybCgpXG4gICAgICAgIGlmICgodGhpcy5wcm9wcy5zZW9EYXRhICYmIHRoaXMucHJvcHMuc2VvRGF0YS5sb2NhdGlvbikgfHwgdGhpcy5wcm9wcy5zZW9GcmllbmRseSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMubG9jYXRpb25UeXBlICYmIHRoaXMucHJvcHMubG9jYXRpb25UeXBlLmluY2x1ZGVzKFwiZ2VvXCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dMb2NhdGlvblBvcHVwOiB0cnVlLCBvdmVybGF5VmlzaWJsZTogdHJ1ZSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYXBwbHlGaWx0ZXJzKCkge1xuICAgIC8vICAgICBsZXQgZmlsdGVyU3RhdGUgPSB7XG4gICAgLy8gICAgICAgICBwcmljZVJhbmdlOiB0aGlzLnN0YXRlLnByaWNlUmFuZ2UsXG4gICAgLy8gICAgICAgICBkaXN0YW5jZVJhbmdlOiB0aGlzLnN0YXRlLmRpc3RhbmNlUmFuZ2UsXG4gICAgLy8gICAgICAgICBzb3J0X29uOiB0aGlzLnN0YXRlLnNvcnRfb25cbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBsZXQgZGF0YSA9IHtcbiAgICAvLyAgICAgICAgICdDYXRlZ29yeSc6ICdGaWx0ZXJDbGljaycsICdBY3Rpb24nOiAnQ2xpY2tlZCBvbiBGaWx0ZXInLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdsYWItZmlsdGVyLWNsaWNrZWQnLCAndXJsJzogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLCAnbG93UHJpY2VSYW5nZSc6IHRoaXMuc3RhdGUucHJpY2VSYW5nZVswXSwgJ2hpZ2hQcmljZVJhbmdlJzogdGhpcy5zdGF0ZS5wcmljZVJhbmdlWzFdLCAnbG93RGlzdGFuY2VSYW5nZSc6IHRoaXMuc3RhdGUuZGlzdGFuY2VSYW5nZVswXSwgJ2hpZ2hEaXN0YW5jZVJhbmdlJzogdGhpcy5zdGF0ZS5kaXN0YW5jZVJhbmdlWzFdLCAnc29ydF9vbic6IHRoaXMuc3RhdGUuc29ydF9vbiA9PSBcIlwiID8gJ3JlbGV2YW5jZScgOiB0aGlzLnN0YXRlLnNvcnRfb25cbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgIC8vICAgICB0aGlzLnByb3BzLmFwcGx5RmlsdGVycyhmaWx0ZXJTdGF0ZSlcbiAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5GaWx0ZXI6IGZhbHNlIH0pXG4gICAgLy8gfVxuXG4gICAgLy8gaGFuZGxlT3BlbihldmVudCkge1xuICAgIC8vICAgICAvLyB0aGlzLnNldFN0YXRlKHsgYW5jaG9yRWw6IGV2ZW50LmN1cnJlbnRUYXJnZXQgfSlcbiAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgLy8gICAgICAgICBkcm9wZG93bl92aXNpYmxlOiB0cnVlXG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cblxuICAgIC8vIGhpZGVTb3J0RGl2KCkge1xuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAvLyAgICAgICAgIGRyb3Bkb3duX3Zpc2libGU6IGZhbHNlXG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cblxuICAgIC8vIGhhbmRsZUNsb3NlKHR5cGUpIHtcbiAgICAvLyAgICAgbGV0IGRhdGEgPSB7XG4gICAgLy8gICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0xhYlNvcnRGaWx0ZXJBcHBsaWVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbGFiLXNvcnQtZmlsdGVyLWFwcGxpZWQnLCAndXJsJzogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLCAnc29ydF9vbic6IHR5cGUgPT09IFwiXCIgPyAncmVsZXZhbmNlJyA6IHR5cGVcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHsgYW5jaG9yRWw6IG51bGwsIHNvcnRfb246IHR5cGUsIGRyb3Bkb3duX3Zpc2libGU6IGZhbHNlIH0sICgpID0+IHtcbiAgICAvLyAgICAgICAgIGlmICh0eXBlIHx8IHR5cGUgPT09IFwiXCIpIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmFwcGx5RmlsdGVycygpXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH0pXG4gICAgLy8gfVxuXG4gICAgLy8gdG9nZ2xlRmlsdGVyKCkge1xuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAvLyAgICAgICAgIG9wZW5GaWx0ZXI6ICF0aGlzLnN0YXRlLm9wZW5GaWx0ZXJcbiAgICAvLyAgICAgfSlcbiAgICAvLyB9XG5cbiAgICAvLyBoYW5kbGVSYW5nZSh0eXBlLCByYW5nZSkge1xuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAvLyAgICAgICAgIFt0eXBlXTogcmFuZ2VcbiAgICAvLyAgICAgfSlcbiAgICAvLyB9XG5cbiAgICBnZXRDcml0ZXJpYVN0cmluZyhzZWxlY3RlZENyaXRlcmlhcykge1xuICAgICAgICBpZiAoc2VsZWN0ZWRDcml0ZXJpYXMgJiYgc2VsZWN0ZWRDcml0ZXJpYXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWRDcml0ZXJpYXMucmVkdWNlKChmaW5hbCwgY3VyciwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZmluYWwgKz0gJywgJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbCArPSBgJHtjdXJyLm5hbWV9YFxuICAgICAgICAgICAgICAgIHJldHVybiBmaW5hbFxuICAgICAgICAgICAgfSwgXCJcIilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlzRmlsdGVyQXBwbGllZCgpIHtcbiAgICAvLyAgICAgY29uc3QgZGVmID0ge1xuICAgIC8vICAgICAgICAgcHJpY2VSYW5nZTogWzAsIDIwMDAwXSxcbiAgICAvLyAgICAgICAgIGRpc3RhbmNlUmFuZ2U6IFswLCAxNV1cbiAgICAvLyAgICAgfVxuICAgIC8vICAgICB0cnkge1xuICAgIC8vICAgICAgICAgZm9yIChsZXQgZmlsdGVyIGluIGRlZikge1xuICAgIC8vICAgICAgICAgICAgIGlmIChkZWZbZmlsdGVyXVswXSAhPSB0aGlzLnN0YXRlW2ZpbHRlcl1bMF0gfHwgZGVmW2ZpbHRlcl1bMV0gIT0gdGhpcy5zdGF0ZVtmaWx0ZXJdWzFdKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgLy8gICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyAgICAgICAgIHJldHVybiBmYWxzZVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgc2hvcnRlblVybCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gICAgICAgICAgICBpZiAodXJsLmluY2x1ZGVzKCc/JykpIHtcbiAgICAgICAgICAgICAgICB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZiArICcmZm9yY2VfbG9jYXRpb249dHJ1ZSdcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYgKyAnP2ZvcmNlX2xvY2F0aW9uPXRydWUnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb3BzLnVybFNob3J0bmVyKHVybCwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG9ydFVSTDogZGF0YS50aW55X3VybCB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvdmVybGF5Q2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvdmVybGF5VmlzaWJsZTogZmFsc2UsIHNlYXJjaENpdGllczogW10gfSk7XG4gICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvbl9lbGVtZW50Jykpe1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uX2VsZW1lbnQnKS5zdHlsZS56SW5kZXggPScwJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGlkZUxvY2F0aW9uUG9wdXAoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9jYXRpb25Qb3B1cDogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgcG9wdXBDb250YWluZXIoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93UG9wdXBDb250YWluZXI6IGZhbHNlLCBzaG93TG9jYXRpb25Qb3B1cDogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgY2hhbmdlQnRuQ2xpY2soKSB7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdjaGFuZ2VCdG5PbkxhYkNhcmRDbGljaycsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NoYW5nZS1idG4tb24tbGFiLWNhcmQtY2xpY2snXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgbGV0IHNlbGVjdGVkVGVzdHMgPSBbXVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcHMuY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUZXN0cy5wdXNoKHRoaXMucHJvcHMuY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzW2ldLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2xvY2F0aW9uc2VhcmNoP2xhYl9jYXJkPXRydWUmaWQ9JHtzZWxlY3RlZFRlc3RzfWApXG4gICAgfVxuXG4gICAgZ29Ub0xvY2F0aW9uKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlYXJjaENpdGllczogW10sXG4gICAgICAgIH0pXG4gICAgICAgIC8qbGV0IHJlZGlyZWN0X3RvID0gXCJcIlxuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCdsYmNpdCcpIHx8IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygnbGJsaXRjaXQnKSkge1xuICAgICAgICAgICAgcmVkaXJlY3RfdG8gPSBcIi9sYWIvc2VhcmNocmVzdWx0c1wiXG4gICAgICAgIH1cbiovXG4gICAgICAgIGxldCBsb2NhdGlvbl91cmwgPSAnL2xvY2F0aW9uc2VhcmNoJ1xuICAgICAgICAvKiAgICAgICAgaWYgKHJlZGlyZWN0X3RvKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uX3VybCArPSBgP3JlZGlyZWN0X3RvPSR7cmVkaXJlY3RfdG99YFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgKi9cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ2hhbmdlTG9jYXRpb25Eb2N0b3JSZXN1bHRzUG9wVXAnLCAnQWN0aW9uJzogJ2NoYW5nZS1sb2NhdGlvbi1kb2N0b3ItcmVzdWx0cy1Qb3BVcCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NoYW5nZS1sb2NhdGlvbi1kb2N0b3ItcmVzdWx0cy1Qb3BVcCcsICd1cmwnOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChsb2NhdGlvbl91cmwpXG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgLy8gaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWx0ZXItc2Nyb2xsXCIpKXtcbiAgICAgICAgLy8gICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyAgICAgdmFyIGN1cnJlbnRTY3JvbGxQb3MgPSB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICAgICAgLy8gICAgICAgaWYgKGN1cnJlbnRTY3JvbGxQb3MgPiAwKSB7XG4gICAgICAgIC8vICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWx0ZXItc2Nyb2xsXCIpLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcbiAgICAgICAgLy8gICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbHRlci1zY3JvbGxcIikuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKVxuICAgICAgICAvLyAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgXG4gICAgICAgIC8vIGxldCBzb3J0VHlwZSA9ICcnXG4gICAgICAgIC8vIGlmICh0aGlzLnN0YXRlLnNvcnRfb24pIHtcbiAgICAgICAgLy8gICAgIHNvcnRUeXBlID0gdGhpcy5zdGF0ZS5zb3J0X29uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5zdGF0ZS5zb3J0X29uLnNsaWNlKDEpO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgbGV0IGNyaXRlcmlhU3RyID0gdGhpcy5nZXRDcml0ZXJpYVN0cmluZyh0aGlzLnByb3BzLmN1cnJlbnRTZWFyY2hlZENyaXRlcmlhcylcbiAgICAgICAgbGV0IGxvY2F0aW9uTmFtZSA9IFwiXCJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24uZm9ybWF0dGVkX2FkZHJlc3MpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uTmFtZSA9IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5mb3JtYXR0ZWRfYWRkcmVzc1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlb0RhdGEgJiYgdGhpcy5wcm9wcy5zZW9EYXRhLmxvY2F0aW9uKSB7XG4gICAgICAgICAgICBsb2NhdGlvbk5hbWUgPSB0aGlzLnByb3BzLnNlb0RhdGEubG9jYXRpb25cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCIgaWQ9XCJmaWx0ZXItc2Nyb2xsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLXBkbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb24tZmlsdGVyIGQtbm9uZSBkLW1kLWJsb2NrIGFsaWduU2hhcmVCdG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJpbmxpbmUtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1pbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17dGhpcy5zaG9ydGVuVXJsLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy91cmwtc2hvcnQuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiA4MCB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvcnRVUkwgPyA8ZGl2IGNsYXNzTmFtZT1cInNoYXJlTGlua3BvcHVwT3ZlcmxheVwiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG9ydFVSTDogXCJcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcmVMaW5rcG9wdXBcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLnNob3J0VVJMfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkIHRleHQ9e3RoaXMuc3RhdGUuc2hvcnRVUkx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlNob3J0ZW5lZCBVUkwgQ29waWVkLlwiIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3J0VVJMOiBcIlwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaHJlbGlua0J0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5Db3B5PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jb3VudH0gUmVzdWx0cyB7Y3JpdGVyaWFTdHIgPyBcImZvclwiIDogXCJcIn0gPHNwYW4gY2xhc3NOYW1lPVwiZnctNzAwXCI+IHtjcml0ZXJpYVN0cn08L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93TG9jYXRpb25Qb3B1cCAmJiBmYWxzZSA/ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGxvY2F0aW9uTmFtZSA/IDxzcGFuIGNsYXNzTmFtZT1cImxvY2F0aW9uLWVkaXRcIj57YCBpbiAke2xvY2F0aW9uTmFtZX1gfTwvc3Bhbj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAxNSwgaGVpZ2h0OiAxNSwgbWFyZ2luTGVmdDogNywgY3Vyc29yOiAncG9pbnRlcicgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZWRpdC5zdmdcIn0gb25DbGljaz17dGhpcy5nb1RvTG9jYXRpb24uYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0xvY2F0aW9uUG9wdXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubGFiX2NhcmQgJiYgdGhpcy5zdGF0ZS5zaG93UG9wdXBDb250YWluZXIgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYXRpb25Qb3B1cCB7Li4udGhpcy5wcm9wc30gb25SZWY9e3JlZiA9PiAodGhpcy5jaGlsZCA9IHJlZil9IHJlc3VsdFR5cGU9J2xpc3QnIGlzVG9wYmFyPXt0cnVlfSBoaWRlTG9jYXRpb25Qb3B1cD17KCkgPT4gdGhpcy5oaWRlTG9jYXRpb25Qb3B1cCgpfSBsb2NhdGlvbk5hbWU9e2xvY2F0aW9uTmFtZX0gY3JpdGVyaWFTdHJpbmc9e2NyaXRlcmlhU3RyfSBwb3B1cENvbnRhaW5lcj17KCkgPT4gdGhpcy5wb3B1cENvbnRhaW5lcigpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxMb2NhdGlvbkVsZW1lbnRzIHsuLi50aGlzLnByb3BzfSBvblJlZj17cmVmID0+ICh0aGlzLmNoaWxkID0gcmVmKX0gcmVzdWx0VHlwZT0nbGlzdCcgaXNUb3BiYXI9e3RydWV9IGhpZGVMb2NhdGlvblBvcHVwPXsoKSA9PiB0aGlzLmhpZGVMb2NhdGlvblBvcHVwKCl9IGxvY2F0aW9uTmFtZT17bG9jYXRpb25OYW1lfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0xvY2F0aW9uUG9wdXAgJiYgdGhpcy5zdGF0ZS5vdmVybGF5VmlzaWJsZSAmJiAhdGhpcy5wcm9wcy5sYWJfY2FyZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2NhdGlvblBvcHVwLW92ZXJsYXlcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLm92ZXJsYXlDbGljaygpfSA+PC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0xvY2F0aW9uUG9wdXAgJiYgdGhpcy5wcm9wcy5sYWJfY2FyZCAmJiB0aGlzLnN0YXRlLnNob3dQb3B1cENvbnRhaW5lciA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cENvbnRhaW5lci1vdmVybGF5XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBUb3BCYXJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyB0b2dnbGU0MDQsIG1lcmdlTEFCU3RhdGUsIHVybFNob3J0bmVyLCBnZXRMYWJzLCB0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSwgZ2V0RGlhZ25vc2lzQ3JpdGVyaWFSZXN1bHRzLCBjbGVhckV4dHJhVGVzdHMsIGdldEZvb3RlckRhdGEsIHNldExhYlNlYXJjaElkLCBnZXRMYWJTZWFyY2hJZFJlc3VsdHMsIHNlbGVjdFNlYXJjaFR5cGUsIHNlbGVjdExhYlRpbWVTTG90LCBnZXRPZmZlckxpc3QsIHRvZ2dsZU9QRENyaXRlcmlhLCBzZWxlY3RMYWJBcHBvaW50bWVudFR5cGUsIHJlc2V0UGtnQ29tcGFyZSwgbG9hZE9QREluc3VyYW5jZSwgTm9uSXBkQm9va2luZ0xlYWQsIGNsZWFyVmlwU2VsZWN0ZWRQbGFuLHNhdmVMZWFkUGhuTnVtYmVyIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcbmltcG9ydCB7IG9wZFNlYXJjaFN0YXRlQnVpbGRlciwgbGFiU2VhcmNoU3RhdGVCdWlsZGVyIH0gZnJvbSAnLi4vLi4vaGVscGVycy91cmx0b1N0YXRlJ1xuaW1wb3J0IFNlYXJjaFJlc3VsdHNWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGlhZ25vc2lzL3NlYXJjaFJlc3VsdHMvaW5kZXguanMnXG5pbXBvcnQgTm90Rm91bmRWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9ub3RGb3VuZCdcblxuY2xhc3MgU2VhcmNoUmVzdWx0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzaG93NDA0OiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNob3c0MDQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93NDA0OiB0cnVlIH0pXG4gICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZTQwNChmYWxzZSlcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLnByb3BzLmxvYWRPUERJbnN1cmFuY2UodGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKVxuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkRGF0YShzdG9yZSwgbWF0Y2gsIHF1ZXJ5UGFyYW1zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IGxvY2F0aW9uX21zID0gbnVsbFxuICAgICAgICAgICAgICAgIGlmIChtYXRjaC51cmwuaW5jbHVkZXMoJ2xvY2F0aW9uPScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uX21zID0gbWF0Y2gudXJsLnNwbGl0KCdsb2NhdGlvbj0nKVsxXVxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbl9tcyA9IHBhcnNlSW50KGxvY2F0aW9uX21zKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxhYlNlYXJjaFN0YXRlQnVpbGRlcihudWxsLCBxdWVyeVBhcmFtcywgdHJ1ZSwgbG9jYXRpb25fbXMpLnRoZW4oKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKG1lcmdlTEFCU3RhdGUoc3RhdGUpKVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWFyY2hVcmwgPSBudWxsXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaC51cmwuaW5jbHVkZXMoJy1sYmNpdCcpIHx8IG1hdGNoLnVybC5pbmNsdWRlcygnLWxibGl0Y2l0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFVybCA9IG1hdGNoLnVybC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhZ2UgPSAxXG4gICAgICAgICAgICAgICAgICAgIGlmIChxdWVyeVBhcmFtcy5wYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlID0gcGFyc2VJbnQocXVlcnlQYXJhbXMucGFnZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZ2V0TGFicyhzdGF0ZSwgcGFnZSwgdHJ1ZSwgc2VhcmNoVXJsLCAobG9hZE1vcmUsIG5vUmVzdWx0cyA9IGZhbHNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9SZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7IHN0YXR1czogNDA0IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2gudXJsLmluY2x1ZGVzKCctbGJjaXQnKSB8fCBtYXRjaC51cmwuaW5jbHVkZXMoJy1sYmxpdGNpdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Rm9vdGVyRGF0YShtYXRjaC51cmwuc3BsaXQoXCIvXCIpWzFdKSgpLnRoZW4oKGZvb3RlckRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9vdGVyRGF0YSA9IGZvb3RlckRhdGEgfHwgbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHsgZm9vdGVyRGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe30pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7fSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgICAgICAgICAgICByZWplY3QoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJvdXRlcjogKCkgPT4gbnVsbFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zaG93NDA0IHx8IHRoaXMuc3RhdGUuc2hvdzQwNCkge1xuICAgICAgICAgICAgcmV0dXJuIDxOb3RGb3VuZFZpZXcgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFNlYXJjaFJlc3VsdHNWaWV3IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwYXNzZWRQcm9wcykgPT4ge1xuICAgIC8qKlxuICAgICAqIGluaXRpYWxTZXJ2ZXJEYXRhIGlzIHNlcnZlciByZW5kZXJlZCBhc3luYyBkYXRhIHJlcXVpcmVkIGJ1aWxkIGh0bWwgb24gc2VydmVyLiBcbiAgICAgKi9cbiAgICBsZXQgaW5pdGlhbFNlcnZlckRhdGEgPSBudWxsXG4gICAgbGV0IHsgc3RhdGljQ29udGV4dCB9ID0gcGFzc2VkUHJvcHNcbiAgICBpZiAoc3RhdGljQ29udGV4dCAmJiBzdGF0aWNDb250ZXh0LmRhdGEpIHtcbiAgICAgICAgaW5pdGlhbFNlcnZlckRhdGEgPSBzdGF0aWNDb250ZXh0LmRhdGFcbiAgICB9XG5cbiAgICBjb25zdCB7XG4gICAgICAgIHNlbGVjdGVkTG9jYXRpb24sXG4gICAgICAgIHNlbGVjdGVkQ3JpdGVyaWFzLFxuICAgICAgICBmaWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgTE9BREVEX1NFQVJDSF9DUklURVJJQV9MQUIsXG4gICAgICAgIGxvY2F0aW9uVHlwZSxcbiAgICAgICAgZmV0Y2hOZXdSZXN1bHRzLFxuICAgICAgICBjb3Jwb3JhdGVDb3Vwb24sXG4gICAgICAgIHBhZ2UsXG4gICAgICAgIHNlYXJjaF9pZF9kYXRhLFxuICAgICAgICBuZXh0U2VsZWN0ZWRDcml0ZXJpYXMsXG4gICAgICAgIGN1cnJlbnRTZWFyY2hlZENyaXRlcmlhcyxcbiAgICAgICAgbmV4dEZpbHRlckNyaXRlcmlhLFxuICAgICAgICBjb21wYXJlX3BhY2thZ2VzLFxuICAgIH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfTEFCU1xuXG4gICAgY29uc3Qge1xuICAgICAgICBvZmZlckxpc3RcbiAgICB9ID0gc3RhdGUuVVNFUlxuXG4gICAgY29uc3QgTEFCUyA9IHN0YXRlLkxBQl9TRUFSQ0hfREFUQVxuICAgIGNvbnN0IHsgc2hvdzQwNCwgbGFiTGlzdCwgTE9BREVEX0xBQlNfU0VBUkNILCBjb3VudCwgU0VUX0ZST01fU0VSVkVSLCBjdXJyX3BhZ2UsIHNlb0RhdGEsIHRlc3RfZGF0YSB9ID0gc3RhdGUuTEFCX1NFQVJDSFxuICAgIGNvbnN0IHsgbWVyZ2VVcmxTdGF0ZSwgY29tbW9uX3NldHRpbmdzIH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfT1BEXG5cbiAgICBjb25zdCB7XG4gICAgICAgIGlzX2xvZ2luX3VzZXJfaW5zdXJlZCxcbiAgICAgICAgaW5zdXJhbmNlX3N0YXR1cyxcbiAgICAgICAgZGV2aWNlX2luZm8sXG4gICAgICAgIGNvbW1vbl91dG1fdGFnc1xuICAgIH0gPSBzdGF0ZS5VU0VSXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICBzZWxlY3RlZENyaXRlcmlhcyxcbiAgICAgICAgZmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgIExPQURFRF9TRUFSQ0hfQ1JJVEVSSUFfTEFCLFxuICAgICAgICBMQUJTLFxuICAgICAgICBsYWJMaXN0LCBMT0FERURfTEFCU19TRUFSQ0gsXG4gICAgICAgIGNvdW50LFxuICAgICAgICBTRVRfRlJPTV9TRVJWRVIsXG4gICAgICAgIGluaXRpYWxTZXJ2ZXJEYXRhLFxuICAgICAgICBsb2NhdGlvblR5cGUsXG4gICAgICAgIGZldGNoTmV3UmVzdWx0cyxcbiAgICAgICAgY29ycG9yYXRlQ291cG9uLFxuICAgICAgICBwYWdlLFxuICAgICAgICBjdXJyX3BhZ2UsXG4gICAgICAgIHNlYXJjaF9pZF9kYXRhLFxuICAgICAgICBuZXh0U2VsZWN0ZWRDcml0ZXJpYXMsXG4gICAgICAgIGN1cnJlbnRTZWFyY2hlZENyaXRlcmlhcyxcbiAgICAgICAgbmV4dEZpbHRlckNyaXRlcmlhLFxuICAgICAgICBzZW9EYXRhLFxuICAgICAgICBtZXJnZVVybFN0YXRlLFxuICAgICAgICB0ZXN0X2RhdGEsXG4gICAgICAgIHNob3c0MDQsXG4gICAgICAgIG9mZmVyTGlzdCxcbiAgICAgICAgaXNfbG9naW5fdXNlcl9pbnN1cmVkLFxuICAgICAgICBjb21wYXJlX3BhY2thZ2VzLFxuICAgICAgICBpbnN1cmFuY2Vfc3RhdHVzLFxuICAgICAgICBkZXZpY2VfaW5mbyxcbiAgICAgICAgY29tbW9uX3NldHRpbmdzLFxuICAgICAgICBjb21tb25fdXRtX3RhZ3NcbiAgICB9XG5cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXJsU2hvcnRuZXI6ICh1cmwsIGNiKSA9PiBkaXNwYXRjaCh1cmxTaG9ydG5lcih1cmwsIGNiKSksXG4gICAgICAgIGdldExhYnM6IChzdGF0ZSwgcGFnZSwgZnJvbV9zZXJ2ZXIsIHNlYXJjaEJ5VXJsLCBjYikgPT4gZGlzcGF0Y2goZ2V0TGFicyhzdGF0ZSwgcGFnZSwgZnJvbV9zZXJ2ZXIsIHNlYXJjaEJ5VXJsLCBjYikpLFxuICAgICAgICB0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYTogKHR5cGUsIGNyaXRlcmlhLCBmb3JjZUFkZCkgPT4gZGlzcGF0Y2godG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkKSksXG4gICAgICAgIGdldERpYWdub3Npc0NyaXRlcmlhUmVzdWx0czogKHNlYXJjaFN0cmluZywgY2FsbGJhY2spID0+IGRpc3BhdGNoKGdldERpYWdub3Npc0NyaXRlcmlhUmVzdWx0cyhzZWFyY2hTdHJpbmcsIGNhbGxiYWNrKSksXG4gICAgICAgIGNsZWFyRXh0cmFUZXN0czogKCkgPT4gZGlzcGF0Y2goY2xlYXJFeHRyYVRlc3RzKCkpLFxuICAgICAgICBtZXJnZUxBQlN0YXRlOiAoc3RhdGUsIGZldGNoTmV3UmVzdWx0cykgPT4gZGlzcGF0Y2gobWVyZ2VMQUJTdGF0ZShzdGF0ZSwgZmV0Y2hOZXdSZXN1bHRzKSksXG4gICAgICAgIGdldEZvb3RlckRhdGE6ICh1cmwpID0+IGRpc3BhdGNoKGdldEZvb3RlckRhdGEodXJsKSksXG4gICAgICAgIHNldExhYlNlYXJjaElkOiAoc2VhcmNoSWQsIGZpbHRlcnMsIHNldERlZmF1bHQpID0+IGRpc3BhdGNoKHNldExhYlNlYXJjaElkKHNlYXJjaElkLCBmaWx0ZXJzLCBzZXREZWZhdWx0KSksXG4gICAgICAgIGdldExhYlNlYXJjaElkUmVzdWx0czogKHNlYXJjaElkLCBzZWFyY2hSZXN1bHRzKSA9PiBkaXNwYXRjaChnZXRMYWJTZWFyY2hJZFJlc3VsdHMoc2VhcmNoSWQsIHNlYXJjaFJlc3VsdHMpKSxcbiAgICAgICAgc2VsZWN0U2VhcmNoVHlwZTogKHR5cGUpID0+IGRpc3BhdGNoKHNlbGVjdFNlYXJjaFR5cGUodHlwZSkpLFxuICAgICAgICB0b2dnbGU0MDQ6IChzdGF0dXMpID0+IGRpc3BhdGNoKHRvZ2dsZTQwNChzdGF0dXMpKSxcbiAgICAgICAgc2VsZWN0TGFiVGltZVNMb3Q6IChzbG90LCByZXNjaGVkdWxlKSA9PiBkaXNwYXRjaChzZWxlY3RMYWJUaW1lU0xvdChzbG90LCByZXNjaGVkdWxlKSksXG4gICAgICAgIGdldE9mZmVyTGlzdDogKGxhdCxsb25nKSA9PiBkaXNwYXRjaChnZXRPZmZlckxpc3QobGF0LGxvbmcpKSxcbiAgICAgICAgdG9nZ2xlT1BEQ3JpdGVyaWE6ICh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQsIGZpbHRlcikgPT4gZGlzcGF0Y2godG9nZ2xlT1BEQ3JpdGVyaWEodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkLCBmaWx0ZXIpKSxcbiAgICAgICAgc2VsZWN0TGFiQXBwb2ludG1lbnRUeXBlOiAodHlwZSkgPT4gZGlzcGF0Y2goc2VsZWN0TGFiQXBwb2ludG1lbnRUeXBlKHR5cGUpKSxcbiAgICAgICAgcmVzZXRQa2dDb21wYXJlOigpID0+IGRpc3BhdGNoKHJlc2V0UGtnQ29tcGFyZSgpKSxcbiAgICAgICAgbG9hZE9QREluc3VyYW5jZTogKGNpdHkpID0+IGRpc3BhdGNoKGxvYWRPUERJbnN1cmFuY2UoY2l0eSkpLFxuICAgICAgICBjbGVhclZpcFNlbGVjdGVkUGxhbjooKSA9PmRpc3BhdGNoKGNsZWFyVmlwU2VsZWN0ZWRQbGFuKCkpLFxuICAgICAgICBOb25JcGRCb29raW5nTGVhZDooZGF0YSxjYikgPT5kaXNwYXRjaChOb25JcGRCb29raW5nTGVhZChkYXRhLCBjYikpLFxuICAgICAgICBzYXZlTGVhZFBobk51bWJlcjoobnVtYmVyKSA9PmRpc3BhdGNoKHNhdmVMZWFkUGhuTnVtYmVyKG51bWJlcikpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTZWFyY2hSZXN1bHRzKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=