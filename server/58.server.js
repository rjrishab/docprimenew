exports.ids = [58];
exports.modules = {

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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

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

const queryString = __webpack_require__(/*! query-string */ "query-string");


class SearchResultsView extends _react2.default.Component {
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
            // seoData, 
            footerData,
            seoFriendly: this.props.match.url.includes('-lbcit') || this.props.match.url.includes('-lblitcit'),
            lab_card: this.props.location.search.includes('lab_card') || null,
            showError: false,
            showChatWithus: false,
            search_id: '',
            setSearchId: false,
            quickFilter: {},
            showNonIpdPopup: parsed.show_popup,
            to_be_force: 1,
            is_lead_enabled: true
        };
    }

    componentDidMount() {
        const parsed = queryString.parse(this.props.location.search);
        if (this.props.mergeUrlState) {
            let getSearchId = true;
            //if search id exist in url then we get data for that search id from store
            if (this.props.location.search.includes('search_id')) {

                if (this.props.search_id_data && this.props.search_id_data[parsed.search_id] && this.props.search_id_data[parsed.search_id].data) {

                    getSearchId = false;
                    if (this.props.search_id_data[parsed.search_id].data.result && this.props.search_id_data[parsed.search_id].data.result.length && !this.props.fetchNewResults) {
                        this.props.getLabSearchIdResults(parsed.search_id, this.props.search_id_data[parsed.search_id]);
                        this.setState({ search_id: parsed.search_id });
                    } else {

                        let filters = {};
                        filters.commonSelectedCriterias = this.props.search_id_data[parsed.search_id].commonSelectedCriterias;
                        filters.filterCriteria = this.props.search_id_data[parsed.search_id].filterCriteria;
                        this.setState({ search_id: parsed.search_id }, () => {
                            /*let new_url = this.buildURI(this.props)
                            this.props.history.replace(new_url)*/
                            let page = 1;
                            if (!this.props.fetchNewResults) {
                                page = parsed.page;
                            }
                            this.props.setLabSearchId(parsed.search_id, filters, page || 1);
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

                    //Check if user insured
                    if (this.props.is_login_user_insured && this.props.insurance_status == 1) {
                        filters.filterCriteria = _extends({}, filters.filterCriteria);
                        filters.filterCriteria.is_insured = true;
                    }

                    let new_url = this.buildURI(this.props);
                    this.props.history.replace(new_url);
                    this.props.setLabSearchId(search_id, filters, parsed.page || 1);
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
            this.props.getFooterData(this.props.match.url.split('/')[1]).then(footerData => {
                if (footerData) {
                    this.setState({ footerData: footerData });
                }
            });
        }

        this.setState({ showChatWithus: true });
    }

    componentWillReceiveProps(props) {
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
            filters.commonSelectedCriterias = props.currentSearchedCriterias;
            filters.filterCriteria = props.filterCriteria;
            if (search_id) {
                this.setState({ search_id: search_id }, () => {
                    let new_url = this.buildURI(props);
                    this.props.history.replace(new_url);
                    this.props.setLabSearchId(search_id, filters, page);
                });
            } else {
                search_id = this.generateSearchId();
                this.setState({ search_id: search_id }, () => {

                    //Check if user insured
                    if (props.is_login_user_insured && props.insurance_status == 1) {
                        filters.filterCriteria = _extends({}, filters.filterCriteria);
                        filters.filterCriteria.is_insured = true;
                    }

                    let new_url = this.buildURI(props);
                    this.props.history.replace(new_url);
                    this.props.setLabSearchId(search_id, filters, page);
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
                let new_url = this.buildURI(props);
                this.props.history.replace(new_url);
            }
        }
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

    getLabList(state = null, page = null, cb = null) {
        //apply filters and get updated data
        let searchUrl = null;
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
        this.props.getLabs(state, page, false, searchUrl, (...args) => {
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
        // clear LANDING_PAGE to enable loader
        //apply filters 
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
        this.props.mergeLABState({ filterCriteria: filterState, search_id_data: search_id_data, page: 1 });
        //this.props.setLabSearchId(this.state.search_id, filterState, false)
        if (window) {
            window.scrollTo(0, 0);
        }
    }

    isFilterApplied(filterCriteria) {
        //check if any filters applied to the search
        let is_filter_applied = false;
        if (filterCriteria) {
            let sort_on = filterCriteria.sort_on || "";
            let sort_order = filterCriteria.sort_order || "";
            let availability = filterCriteria.availability || [];
            let avg_ratings = filterCriteria.avg_ratings || '';
            let home_visit = filterCriteria.home_visit || false;
            let lab_visit = filterCriteria.lab_visit || false;

            let lab_name = filterCriteria.lab_name || "";
            let network_id = filterCriteria.network_id || "";
            let is_insured = filterCriteria.is_insured || false;

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

    buildURI(state) {
        //keep on updating url with the updated filters 
        let { selectedLocation, currentSearchedCriterias, filterCriteria, locationType, page } = state;
        let testIds = currentSearchedCriterias.filter(x => x.type == 'test').map(x => x.id);

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
        /*
                let min_distance = filterCriteria.distanceRange[0]
                let max_distance = filterCriteria.distanceRange[1]
                let min_price = filterCriteria.priceRange[0]
                let max_price = filterCriteria.priceRange[1]
                let sort_on = filterCriteria.sort_on || ""
        */
        let sort_on = filterCriteria.sort_on || "";
        let sort_order = filterCriteria.sort_order || "";
        let availability = filterCriteria.availability || [];
        let avg_ratings = filterCriteria.avg_ratings || '';
        let home_visit = filterCriteria.home_visit || false;
        let lab_visit = filterCriteria.lab_visit || false;

        let lab_name = filterCriteria.lab_name || "";
        let network_id = filterCriteria.network_id || "";
        let is_insured = filterCriteria.is_insured || false;

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

        let is_params_exist = false;

        if (is_filter_applied || !this.state.seoFriendly) {

            url = `${window.location.pathname}?test_ids=${testIds || ""}&lat=${lat}&long=${long}&sort_on=${sort_on}&sort_order=${sort_order}&availability=${availability}&home_visit=${home_visit}&lab_visit=${lab_visit}&avg_ratings=${avg_ratings}&lab_name=${lab_name}&place_id=${place_id}&locationType=${locationType || ""}&network_id=${network_id}&search_id=${this.state.search_id}&is_insured=${is_insured}`;
            is_params_exist = true;
        } else if (this.state.seoFriendly) {
            url = `${window.location.pathname}`;
        }

        if (this.state.showNonIpdPopup) {
            url += `${'&show_popup=' + this.state.showNonIpdPopup}`;
        }

        if (this.state.lab_card) {
            url += `${is_params_exist ? '&' : '?'}lab_card=true`;
            is_params_exist = true;
        }

        if (page > 1) {
            url += `${is_params_exist ? '&' : '?'}page=${page}`;
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

    resetQuickFilters() {
        this.setState({ quickFilter: {} });
    }

    applyQuickFilter(filter) {
        this.setState({ quickFilter: filter });
    }

    nonIpdLeads(phone_number) {
        const parsed = queryString.parse(this.props.location.search);
        let criteriaStr = this.getCriteriaString(this.props.currentSearchedCriterias);
        let data = { phone_number: phone_number, lead_source: 'Labads', source: parsed, lead_type: 'LABADS', test_name: criteriaStr, exitpoint_url: 'http://docprime.com' + this.props.location.pathname };
        if (this.props.common_utm_tags && this.props.common_utm_tags.length) {
            data.utm_tags = this.props.common_utm_tags.filter(x => x.type == "common_xtra_tags")[0].utm_tags;
        }
        let visitor_info = _gtm2.default.getVisitorInfo();
        if (visitor_info && visitor_info.visit_id) {
            data.visit_id = visitor_info.visit_id;
            data.visitor_id = visitor_info.visitor_id;
        }
        let gtm_data = { 'Category': 'ConsumerApp', 'Action': 'NonIpdSearchListingSubmitClick', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'non-ipd-search-listing-Submit-click' };
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
                'Category': 'ConsumerApp', 'Action': 'NonIpdSearchListingCrossClick', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'non-ipd-search-listing-cross-click'
            };
            _gtm2.default.sendEvent({ data: data });
            this.setState({ to_be_force: 0 });
        }
    }

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
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('div', { id: 'map', style: { display: 'none' } }),
            _react2.default.createElement(_HelmetTags2.default, { tagsData: {
                    canonicalUrl: `${_config2.default.API_BASE_URL}${this.props.match.url}${page}`,
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
                                        { className: 'referDoctorbtn', onClick: e => {
                                                e.preventDefault();
                                                let data = {
                                                    'Category': 'ConsumerApp', 'Action': 'ReferLabListNoresult', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'refer-lab-list-noresult'
                                                };
                                                _gtm2.default.sendEvent({ data: data });
                                                this.props.history.push('/doctorsignup?member_type=2');
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
}

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
            this.setState(_extends({}, props.filterCriteria.avg_ratings || ''));
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
            this.setState({ loading: false });
            setTimeout(() => {
                this.setState({ hasMore });
            }, 1000);
        });
    }
    testInfo() {
        {/*var url_string = window.location.href;
            var url = new URL(url_string);
            var test_ids = url.searchParams.get("test_ids");
            this.props.history.push('/search/testinfo?test_ids=' + test_ids + '&from=searchresults')
            let data = {
               'Category': 'ConsumerApp', 'Action': 'testInfoClick', 'CustomerID': GTM.getUserId() || '', 'leadid': 0, 'event': 'test-info-click', 'pageSource': 'lab-result-page'
            }
            GTM.sendEvent({ data: data })*/}
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
            'Category': 'LabQuickFilterClicked', 'Action': 'LabQuickFilterClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lab-quick-filter-clicked', 'url': window.location.pathname, 'type': type, 'val': val
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

    render() {
        let show_details = false;
        let { LABS, labList } = this.props;

        let start_page = 0;
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
                                labList.map((labId, i) => {
                                    if (LABS[labId]) {

                                        return _react2.default.createElement(
                                            _react2.default.Fragment,
                                            { key: i },
                                            i == 4 && !this.state.avg_ratings ? _react2.default.createElement(
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
                                                        { className: 'fw-500 sort-more-filter', onClick: this.viewMoreClicked.bind(this) },
                                                        'More filters'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'srt-sb-btn-cont' },
                                                    _react2.default.createElement(
                                                        'button',
                                                        { className: `${this.state.avg_ratings == '3' ? 'srt-act' : ''}`, onClick: this.applyQuickFilters.bind(this, 'avg_ratings', '3', false) },
                                                        '3.0 +'
                                                    ),
                                                    _react2.default.createElement(
                                                        'button',
                                                        { className: `${this.state.avg_ratings == '4' ? 'srt-act' : ''}`, onClick: this.applyQuickFilters.bind(this, 'avg_ratings', '4', false) },
                                                        '4.0 +'
                                                    ),
                                                    _react2.default.createElement(
                                                        'button',
                                                        { className: `${this.state.avg_ratings == '4.5' ? 'srt-act' : ''}`, onClick: this.applyQuickFilters.bind(this, 'avg_ratings', '4.5', false) },
                                                        '4.5 +'
                                                    )
                                                )
                                            ) : '',
                                            i == 5 && this.props.offerList && this.props.offerList.filter(x => x.slider_location === 'lab_search_results').length && !this.state.is_insured ?
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
                                                _react2.default.createElement(_bannerCarousel2.default, _extends({}, this.props, { sliderLocation: 'lab_search_results' }))
                                            ) : '',
                                            _react2.default.createElement(
                                                'li',
                                                null,
                                                this.props.lab_card ? _react2.default.createElement(_index2.default, _extends({}, this.props, { details: LABS[labId], key: i, rank: i })) : _react2.default.createElement(_index2.default, _extends({}, this.props, { details: LABS[labId], key: i, rank: i }))
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
}

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
        this.setState(_extends({}, props.filterCriteria, { quickFilter: props.quickFilter || {} }), () => {
            if (this.state.quickFilter && this.state.quickFilter.viewMore) {
                this.sortFilterClicked();
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

        // filter sticky dynamic height js
        // document.addEventListener('load', () => {
        //     const  headHeight = document.getElementById('is_header');
        //     headHeight.clientHeight;
        //     const filterHeight = document.getElementById('fis_header');
        //     filterHeight.style.top = headHeight.clientHeight;
        //     console.log(filterHeight.style.top = headHeight.clientHeight);
        // })
    }

    applyFilters() {
        let filterState = {
            sort_on: this.state.sort_on,
            sort_order: this.state.sort_order,
            availability: this.state.availability,
            avg_ratings: this.state.avg_ratings,
            home_visit: this.state.home_visit,
            lab_visit: this.state.lab_visit,
            is_insured: this.state.is_insured
        };
        let data = {
            'Category': 'FilterClick', 'Action': 'Clicked on Filter', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lab-filter-clicked', 'url': window.location.pathname, 'sort_order': this.state.sort_order || '', 'availability': this.state.availability, 'avg_ratings': this.state.avg_ratings, 'lab_visit': this.state.lab_visit, 'home_visit': this.state.home_visit, 'sort_on': this.state.sort_on
        };

        _gtm2.default.sendEvent({ data: data });

        let ifAnyFilterApplied = this.isDataFiltered({}, true);
        if (ifAnyFilterApplied) {
            this.props.applyFilters(filterState);
        }

        this.setState({ dropdown_visible: false });
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

    handleClose(reset = false, e) {

        if (reset) {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'ResetLabFilter', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'reset-lab-filter', 'url': window.location.pathname, 'sort_order': this.state.sort_order || '', 'availability': this.state.availability, 'avg_ratings': this.state.avg_ratings, 'lab_visit': this.state.lab_visit, 'home_visit': this.state.home_visit, 'sort_on': this.state.sort_on
            };
            _gtm2.default.sendEvent({ data: data });

            let resetFilters = {
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
            let data = {
                'Category': 'ConsumerApp', 'Action': 'CloseLabFilter', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'close-lab-filter', 'url': window.location.pathname, 'sort_order': this.state.sort_order || '', 'availability': this.state.availability, 'avg_ratings': this.state.avg_ratings, 'lab_visit': this.state.lab_visit, 'home_visit': this.state.home_visit, 'sort_on': this.state.sort_on
            };
            _gtm2.default.sendEvent({ data: data });
            this.setState(_extends({
                dropdown_visible: false
            }, this.state.previous_filters, {
                quickFilter: {}
            }));
        }

        //this.props.resetQuickFilters()
    }

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

    sortFilterClicked() {

        let data = {
            'Category': 'ConsumerApp', 'Action': 'LabSortFilterClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lab-sort-filter-clicked', 'url': window.location.pathname, 'sort_order': this.state.sort_order || '', 'availability': this.state.availability, 'avg_ratings': this.state.avg_ratings, 'lab_visit': this.state.lab_visit, 'home_visit': this.state.home_visit, 'sort_on': this.state.sort_on
        };
        _gtm2.default.sendEvent({ data: data });
        let currentFilters = {
            sort_on: this.state.sort_on,
            sort_order: this.state.sort_order,
            avg_ratings: this.state.avg_ratings,
            availability: [].concat(this.state.availability) || [],
            home_visit: this.state.home_visit,
            lab_visit: this.state.lab_visit
        };
        this.setState({ dropdown_visible: true, previous_filters: currentFilters });
    }

    isDataFiltered(filterData = {}, checkIfAnyFilterAppliled = false) {

        if (checkIfAnyFilterAppliled) {

            try {
                let filterCount = 0;
                for (let filter in this.state.previous_filters) {

                    if (filter.includes('availability')) {

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
                hospital_type: ''
            };

            try {
                let filterCount = 0;
                for (let filter in filterData) {

                    if (filter.includes('hospital_type')) {
                        if (this.state['lab_visit'] || this.state['home_visit']) {
                            filterCount++;
                        }
                    } else if (filter == 'availability') {
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
    }

    toggleInsured() {
        let data = {
            'Category': 'CoveredUnderLABInsuranceClicked', 'Action': 'CoveredUnderLABInsuranceClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'covered-under-lab-insurance-clicked', 'url': window.location.pathname
        };
        _gtm2.default.sendEvent({ data: data });

        this.setState({ is_insured: !this.state.is_insured }, () => {

            let filterState = {
                sort_on: this.state.sort_on,
                sort_order: this.state.sort_order,
                availability: this.state.availability,
                avg_ratings: this.state.avg_ratings,
                home_visit: this.state.home_visit,
                lab_visit: this.state.lab_visit,
                is_insured: this.state.is_insured
            };
            this.props.applyFilters(filterState);
        });
    }

    render() {

        var selectedTests = [];
        if (this.props.currentSearchedCriterias.length) {
            for (var i = 0; i < this.props.currentSearchedCriterias.length; i++) {
                selectedTests.push(this.props.currentSearchedCriterias[i].id);
            }
        }

        let criteriaStr = this.getCriteriaString(this.props.currentSearchedCriterias);
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
                                        ` in ${locationName}`,
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
                    )
                ),
                this.state.showLocationPopup ? _react2.default.createElement(_locationElements2.default, _extends({}, this.props, { onRef: ref => this.child = ref, resultType: 'list', isTopbar: true, hideLocationPopup: () => this.hideLocationPopup(), locationName: locationName })) : '',
                this.state.showLocationPopup && this.state.overlayVisible && !this.props.lab_card ? _react2.default.createElement('div', { className: 'locationPopup-overlay', onClick: () => this.overlayClick() }) : '',
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _urltoState = __webpack_require__(/*! ../../helpers/urltoState */ "./dev/js/helpers/urltoState.js");

var _index2 = __webpack_require__(/*! ../../components/diagnosis/searchResults/index.js */ "./dev/js/components/diagnosis/searchResults/index.js");

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
        // this.props.loadOPDInsurance(this.props.selectedLocation)
    }

    static loadData(store, match, queryParams = {}) {
        return new Promise((resolve, reject) => {
            try {
                let location_ms = null;
                if (match.url.includes('location=')) {
                    location_ms = match.url.split('location=')[1];
                    location_ms = parseInt(location_ms);
                }

                (0, _urltoState.labSearchStateBuilder)(null, queryParams, true, location_ms).then(state => {
                    store.dispatch((0, _index.mergeLABState)(state));

                    let searchUrl = null;
                    if (match.url.includes('-lbcit') || match.url.includes('-lblitcit')) {
                        searchUrl = match.url.toLowerCase();
                    }
                    let page = 1;
                    if (queryParams.page) {
                        page = parseInt(queryParams.page);
                    }
                    return store.dispatch((0, _index.getLabs)(state, page, true, searchUrl, (loadMore, noResults = false) => {
                        if (noResults) {
                            resolve({ status: 404 });
                        }
                        if (match.url.includes('-lbcit') || match.url.includes('-lblitcit')) {
                            (0, _index.getFooterData)(match.url.split("/")[1])().then(footerData => {
                                footerData = footerData || null;
                                resolve({ footerData });
                            }).catch(e => {
                                resolve({});
                            });
                        } else {
                            resolve({});
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
        device_info,
        common_utm_tags
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
        common_settings,
        common_utm_tags
    };
};

const mapDispatchToProps = dispatch => {
    return {
        urlShortner: (url, cb) => dispatch((0, _index.urlShortner)(url, cb)),
        getLabs: (state, page, from_server, searchByUrl, cb) => dispatch((0, _index.getLabs)(state, page, from_server, searchByUrl, cb)),
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
        loadOPDInsurance: city => dispatch((0, _index.loadOPDInsurance)(city)),
        clearVipSelectedPlan: () => dispatch((0, _index.clearVipSelectedPlan)()),
        NonIpdBookingLead: (data, cb) => dispatch((0, _index.NonIpdBookingLead)(data, cb)),
        saveLeadPhnNumber: number => dispatch((0, _index.saveLeadPhnNumber)(number))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SearchResults);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvc2VhcmNoUmVzdWx0cy9TZWFyY2hSZXN1bHRzVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvc2VhcmNoUmVzdWx0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvc2VhcmNoUmVzdWx0cy9sYWJzTGlzdC9MYWJzTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvc2VhcmNoUmVzdWx0cy9sYWJzTGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvc2VhcmNoUmVzdWx0cy9uZXdUb3BCYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL3NlYXJjaFJlc3VsdHMvbmV3VG9wQmFyL25ld1RvcEJhci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvc2VhcmNoUmVzdWx0cy90b3BCYXIvcmVzdWx0X2NvdW50LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL2RpYWdub3Npcy9TZWFyY2hSZXN1bHRzLmpzIl0sIm5hbWVzIjpbInF1ZXJ5U3RyaW5nIiwicmVxdWlyZSIsIlNlYXJjaFJlc3VsdHNWaWV3IiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic2VvRGF0YSIsImZvb3RlckRhdGEiLCJpbml0aWFsU2VydmVyRGF0YSIsInBhcnNlZCIsInBhcnNlIiwibG9jYXRpb24iLCJzZWFyY2giLCJzdGF0ZSIsInNlb0ZyaWVuZGx5IiwibWF0Y2giLCJ1cmwiLCJpbmNsdWRlcyIsImxhYl9jYXJkIiwic2hvd0Vycm9yIiwic2hvd0NoYXRXaXRodXMiLCJzZWFyY2hfaWQiLCJzZXRTZWFyY2hJZCIsInF1aWNrRmlsdGVyIiwic2hvd05vbklwZFBvcHVwIiwic2hvd19wb3B1cCIsInRvX2JlX2ZvcmNlIiwiaXNfbGVhZF9lbmFibGVkIiwiY29tcG9uZW50RGlkTW91bnQiLCJtZXJnZVVybFN0YXRlIiwiZ2V0U2VhcmNoSWQiLCJzZWFyY2hfaWRfZGF0YSIsImRhdGEiLCJyZXN1bHQiLCJsZW5ndGgiLCJmZXRjaE5ld1Jlc3VsdHMiLCJnZXRMYWJTZWFyY2hJZFJlc3VsdHMiLCJzZXRTdGF0ZSIsImZpbHRlcnMiLCJjb21tb25TZWxlY3RlZENyaXRlcmlhcyIsImZpbHRlckNyaXRlcmlhIiwicGFnZSIsInNldExhYlNlYXJjaElkIiwibmV4dFNlbGVjdGVkQ3JpdGVyaWFzIiwibmV4dEZpbHRlckNyaXRlcmlhIiwiZ2VuZXJhdGVTZWFyY2hJZCIsIndpbmRvdyIsInNjcm9sbFRvIiwiaXNfbG9naW5fdXNlcl9pbnN1cmVkIiwiaW5zdXJhbmNlX3N0YXR1cyIsImlzX2luc3VyZWQiLCJuZXdfdXJsIiwiYnVpbGRVUkkiLCJoaXN0b3J5IiwicmVwbGFjZSIsImdldEZvb3RlckRhdGEiLCJzcGxpdCIsInRoZW4iLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwiY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzIiwiZ2V0TGFiTGlzdCIsInNlbGVjdGVkTG9jYXRpb24iLCJ1aWRfc3RyaW5nIiwiZHQiLCJEYXRlIiwiZ2V0VGltZSIsInV1aWQiLCJjIiwiciIsIk1hdGgiLCJyYW5kb20iLCJmbG9vciIsInRvU3RyaW5nIiwiZ2V0TG9jYXRpb25QYXJhbSIsInRhZyIsInBhcmFtU3RyaW5nIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiZ2V0IiwiY2IiLCJzZWFyY2hVcmwiLCJ0b0xvd2VyQ2FzZSIsImdldExhYnMiLCJhcmdzIiwiY2F0Y2giLCJlIiwiYXBwbHlGaWx0ZXJzIiwiZmlsdGVyU3RhdGUiLCJPTl9MQU5ESU5HX1BBR0UiLCJyZXNldFF1aWNrRmlsdGVycyIsIk9iamVjdCIsImFzc2lnbiIsIm1lcmdlTEFCU3RhdGUiLCJpc0ZpbHRlckFwcGxpZWQiLCJpc19maWx0ZXJfYXBwbGllZCIsInNvcnRfb24iLCJzb3J0X29yZGVyIiwiYXZhaWxhYmlsaXR5IiwiYXZnX3JhdGluZ3MiLCJob21lX3Zpc2l0IiwibGFiX3Zpc2l0IiwibGFiX25hbWUiLCJuZXR3b3JrX2lkIiwibG9jYXRpb25UeXBlIiwidGVzdElkcyIsImZpbHRlciIsIngiLCJ0eXBlIiwibWFwIiwiaWQiLCJsYXQiLCJsb25nIiwicGxhY2VfaWQiLCJnZW9tZXRyeSIsImxuZyIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiaXNfcGFyYW1zX2V4aXN0IiwicGF0aG5hbWUiLCJnZXRNZXRhVGFnc0RhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYXBwbHlRdWlja0ZpbHRlciIsIm5vbklwZExlYWRzIiwicGhvbmVfbnVtYmVyIiwiY3JpdGVyaWFTdHIiLCJnZXRDcml0ZXJpYVN0cmluZyIsImxlYWRfc291cmNlIiwic291cmNlIiwibGVhZF90eXBlIiwidGVzdF9uYW1lIiwiZXhpdHBvaW50X3VybCIsImNvbW1vbl91dG1fdGFncyIsInV0bV90YWdzIiwidmlzaXRvcl9pbmZvIiwiR1RNIiwiZ2V0VmlzaXRvckluZm8iLCJ2aXNpdF9pZCIsInZpc2l0b3JfaWQiLCJndG1fZGF0YSIsImdldFVzZXJJZCIsInNlbmRFdmVudCIsInNhdmVMZWFkUGhuTnVtYmVyIiwiU1RPUkFHRSIsImlzQWdlbnQiLCJOb25JcGRCb29raW5nTGVhZCIsInNldFRpbWVvdXQiLCJjbG9zZUlwZExlYWRQb3B1cCIsImZyb20iLCJzZWxlY3RlZENyaXRlcmlhcyIsInJlZHVjZSIsImZpbmFsIiwiY3VyciIsImkiLCJuYW1lIiwicmVuZGVyIiwic2hvd19wYWdpbmF0aW9uIiwibGFiTGlzdCIsIkNPTkZJRyIsIkFQSV9CQVNFX1VSTCIsImN1cnJfcGFnZSIsInBhcnNlSW50IiwicHJldiIsIm5leHQiLCJjb3VudCIsImxhbmRpbmdfcGFnZSIsImRpc3BsYXkiLCJjYW5vbmljYWxVcmwiLCJMT0FERURfTEFCU19TRUFSQ0giLCJiaW5kIiwiQVNTRVRTX0JBU0VfVVJMIiwidmlld01vcmUiLCJ3aWR0aCIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsImNvbG9yIiwiTGFic0xpc3QiLCJoYXNNb3JlIiwibG9hZGluZyIsInJlbmRlckJsb2NrIiwiZ2V0T2ZmZXJMaXN0IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJsb2FkTW9yZSIsInRlc3RJbmZvIiwiYXBwbHlRdWlja0ZpbHRlcnMiLCJ2YWwiLCJpc0FycmF5IiwidmFsdWUiLCJzZWxlY3RlZFZhbCIsImNvbmNhdCIsImZvdW5kIiwiZ3RtRGF0YSIsInZpZXdNb3JlQ2xpY2tlZCIsInNob3dfZGV0YWlscyIsIkxBQlMiLCJzdGFydF9wYWdlIiwibWF4IiwibGFiSWQiLCJvZmZlckxpc3QiLCJzbGlkZXJfbG9jYXRpb24iLCJtYXJnaW5Cb3R0b20iLCJUb3BCYXIiLCJhbmNob3JFbCIsImRyb3Bkb3duX3Zpc2libGUiLCJwcmV2aW91c19maWx0ZXJzIiwic2hvcnRVUkwiLCJzaG93TG9jYXRpb25Qb3B1cCIsInNvcnRGaWx0ZXJDbGlja2VkIiwib3ZlcmxheVZpc2libGUiLCJpZkFueUZpbHRlckFwcGxpZWQiLCJpc0RhdGFGaWx0ZXJlZCIsInRvZ2dsZUFsbEZpbHRlcnMiLCJoYW5kbGVDbG9zZSIsInJlc2V0IiwicmVzZXRGaWx0ZXJzIiwic2hvcnRlblVybCIsImhyZWYiLCJ1cmxTaG9ydG5lciIsImVyciIsInRpbnlfdXJsIiwib3ZlcmxheUNsaWNrIiwic2VhcmNoQ2l0aWVzIiwiaGlkZUxvY2F0aW9uUG9wdXAiLCJwb3B1cENvbnRhaW5lciIsInNob3dQb3B1cENvbnRhaW5lciIsImdvVG9Mb2NhdGlvbiIsImxvY2F0aW9uX3VybCIsImN1cnJlbnRGaWx0ZXJzIiwiZmlsdGVyRGF0YSIsImNoZWNrSWZBbnlGaWx0ZXJBcHBsaWxlZCIsImZpbHRlckNvdW50IiwiYXJyRmxpdGVyIiwiaW5kZXhPZiIsImhvc3BpdGFsX3R5cGUiLCJ0b2dnbGVJbnN1cmVkIiwic2VsZWN0ZWRUZXN0cyIsImxvY2F0aW9uTmFtZSIsImZvcm1hdHRlZF9hZGRyZXNzIiwiaGVpZ2h0IiwibWFyZ2luTGVmdCIsImN1cnNvciIsInN0b3BQcm9wYWdhdGlvbiIsIlNuYWNrQmFyIiwic2hvdyIsInBvcyIsInRleHQiLCJyZWYiLCJjaGlsZCIsImNoZWNrQXV0aCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsInpJbmRleCIsImNoYW5nZUJ0bkNsaWNrIiwiU2VhcmNoUmVzdWx0cyIsInNob3c0MDQiLCJ0b2dnbGU0MDQiLCJsb2FkRGF0YSIsInN0b3JlIiwicXVlcnlQYXJhbXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImxvY2F0aW9uX21zIiwiZGlzcGF0Y2giLCJub1Jlc3VsdHMiLCJzdGF0dXMiLCJjb25zb2xlIiwiZXJyb3IiLCJjb250ZXh0VHlwZXMiLCJyb3V0ZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJwYXNzZWRQcm9wcyIsInN0YXRpY0NvbnRleHQiLCJMT0FERURfU0VBUkNIX0NSSVRFUklBX0xBQiIsImNvcnBvcmF0ZUNvdXBvbiIsImNvbXBhcmVfcGFja2FnZXMiLCJTRUFSQ0hfQ1JJVEVSSUFfTEFCUyIsIlVTRVIiLCJMQUJfU0VBUkNIX0RBVEEiLCJTRVRfRlJPTV9TRVJWRVIiLCJ0ZXN0X2RhdGEiLCJMQUJfU0VBUkNIIiwiY29tbW9uX3NldHRpbmdzIiwiU0VBUkNIX0NSSVRFUklBX09QRCIsImRldmljZV9pbmZvIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZnJvbV9zZXJ2ZXIiLCJzZWFyY2hCeVVybCIsInRvZ2dsZURpYWdub3Npc0NyaXRlcmlhIiwiY3JpdGVyaWEiLCJmb3JjZUFkZCIsImdldERpYWdub3Npc0NyaXRlcmlhUmVzdWx0cyIsInNlYXJjaFN0cmluZyIsImNhbGxiYWNrIiwiY2xlYXJFeHRyYVRlc3RzIiwic2VhcmNoSWQiLCJzZXREZWZhdWx0Iiwic2VhcmNoUmVzdWx0cyIsInNlbGVjdFNlYXJjaFR5cGUiLCJzZWxlY3RMYWJUaW1lU0xvdCIsInNsb3QiLCJyZXNjaGVkdWxlIiwidG9nZ2xlT1BEQ3JpdGVyaWEiLCJzZWxlY3RMYWJBcHBvaW50bWVudFR5cGUiLCJyZXNldFBrZ0NvbXBhcmUiLCJsb2FkT1BESW5zdXJhbmNlIiwiY2l0eSIsImNsZWFyVmlwU2VsZWN0ZWRQbGFuIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7QUFEQSxNQUFNQSxjQUFjQyxtQkFBT0EsQ0FBQyxrQ0FBUixDQUFwQjs7O0FBR0EsTUFBTUMsaUJBQU4sU0FBZ0NDLGdCQUFNQyxTQUF0QyxDQUFnRDtBQUM1Q0MsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOO0FBQ0EsWUFBSUMsVUFBVSxJQUFkO0FBQ0EsWUFBSUMsYUFBYSxJQUFqQjtBQUNBLFlBQUksS0FBS0YsS0FBTCxDQUFXRyxpQkFBZixFQUFrQztBQUM5QkYsc0JBQVUsS0FBS0QsS0FBTCxDQUFXRyxpQkFBWCxDQUE2QkYsT0FBdkM7QUFDQUMseUJBQWEsS0FBS0YsS0FBTCxDQUFXRyxpQkFBWCxDQUE2QkQsVUFBMUM7QUFDSDtBQUNELGNBQU1FLFNBQVNWLFlBQVlXLEtBQVosQ0FBa0IsS0FBS0wsS0FBTCxDQUFXTSxRQUFYLENBQW9CQyxNQUF0QyxDQUFmO0FBQ0EsYUFBS0MsS0FBTCxHQUFhO0FBQ1Q7QUFDQU4sc0JBRlM7QUFHVE8seUJBQWEsS0FBS1QsS0FBTCxDQUFXVSxLQUFYLENBQWlCQyxHQUFqQixDQUFxQkMsUUFBckIsQ0FBOEIsUUFBOUIsS0FBMkMsS0FBS1osS0FBTCxDQUFXVSxLQUFYLENBQWlCQyxHQUFqQixDQUFxQkMsUUFBckIsQ0FBOEIsV0FBOUIsQ0FIL0M7QUFJVEMsc0JBQVUsS0FBS2IsS0FBTCxDQUFXTSxRQUFYLENBQW9CQyxNQUFwQixDQUEyQkssUUFBM0IsQ0FBb0MsVUFBcEMsS0FBbUQsSUFKcEQ7QUFLVEUsdUJBQVcsS0FMRjtBQU1UQyw0QkFBZ0IsS0FOUDtBQU9UQyx1QkFBVyxFQVBGO0FBUVRDLHlCQUFhLEtBUko7QUFTVEMseUJBQWEsRUFUSjtBQVVUQyw2QkFBaUJmLE9BQU9nQixVQVZmO0FBV1RDLHlCQUFZLENBWEg7QUFZVEMsNkJBQWdCO0FBWlAsU0FBYjtBQWNIOztBQUVEQyx3QkFBb0I7QUFDaEIsY0FBTW5CLFNBQVNWLFlBQVlXLEtBQVosQ0FBa0IsS0FBS0wsS0FBTCxDQUFXTSxRQUFYLENBQW9CQyxNQUF0QyxDQUFmO0FBQ0EsWUFBSSxLQUFLUCxLQUFMLENBQVd3QixhQUFmLEVBQThCO0FBQzFCLGdCQUFJQyxjQUFjLElBQWxCO0FBQ0E7QUFDQSxnQkFBSSxLQUFLekIsS0FBTCxDQUFXTSxRQUFYLENBQW9CQyxNQUFwQixDQUEyQkssUUFBM0IsQ0FBb0MsV0FBcEMsQ0FBSixFQUFzRDs7QUFFbEQsb0JBQUksS0FBS1osS0FBTCxDQUFXMEIsY0FBWCxJQUE2QixLQUFLMUIsS0FBTCxDQUFXMEIsY0FBWCxDQUEwQnRCLE9BQU9ZLFNBQWpDLENBQTdCLElBQTRFLEtBQUtoQixLQUFMLENBQVcwQixjQUFYLENBQTBCdEIsT0FBT1ksU0FBakMsRUFBNENXLElBQTVILEVBQWtJOztBQUU5SEYsa0NBQWMsS0FBZDtBQUNBLHdCQUFJLEtBQUt6QixLQUFMLENBQVcwQixjQUFYLENBQTBCdEIsT0FBT1ksU0FBakMsRUFBNENXLElBQTVDLENBQWlEQyxNQUFqRCxJQUEyRCxLQUFLNUIsS0FBTCxDQUFXMEIsY0FBWCxDQUEwQnRCLE9BQU9ZLFNBQWpDLEVBQTRDVyxJQUE1QyxDQUFpREMsTUFBakQsQ0FBd0RDLE1BQW5ILElBQTZILENBQUMsS0FBSzdCLEtBQUwsQ0FBVzhCLGVBQTdJLEVBQThKO0FBQzFKLDZCQUFLOUIsS0FBTCxDQUFXK0IscUJBQVgsQ0FBaUMzQixPQUFPWSxTQUF4QyxFQUFtRCxLQUFLaEIsS0FBTCxDQUFXMEIsY0FBWCxDQUEwQnRCLE9BQU9ZLFNBQWpDLENBQW5EO0FBQ0EsNkJBQUtnQixRQUFMLENBQWMsRUFBRWhCLFdBQVdaLE9BQU9ZLFNBQXBCLEVBQWQ7QUFDSCxxQkFIRCxNQUdPOztBQUVILDRCQUFJaUIsVUFBVSxFQUFkO0FBQ0FBLGdDQUFRQyx1QkFBUixHQUFrQyxLQUFLbEMsS0FBTCxDQUFXMEIsY0FBWCxDQUEwQnRCLE9BQU9ZLFNBQWpDLEVBQTRDa0IsdUJBQTlFO0FBQ0FELGdDQUFRRSxjQUFSLEdBQXlCLEtBQUtuQyxLQUFMLENBQVcwQixjQUFYLENBQTBCdEIsT0FBT1ksU0FBakMsRUFBNENtQixjQUFyRTtBQUNBLDZCQUFLSCxRQUFMLENBQWMsRUFBRWhCLFdBQVdaLE9BQU9ZLFNBQXBCLEVBQWQsRUFBK0MsTUFBTTtBQUNqRDs7QUFFQSxnQ0FBSW9CLE9BQU8sQ0FBWDtBQUNBLGdDQUFJLENBQUMsS0FBS3BDLEtBQUwsQ0FBVzhCLGVBQWhCLEVBQWlDO0FBQzdCTSx1Q0FBT2hDLE9BQU9nQyxJQUFkO0FBQ0g7QUFDRCxpQ0FBS3BDLEtBQUwsQ0FBV3FDLGNBQVgsQ0FBMEJqQyxPQUFPWSxTQUFqQyxFQUE0Q2lCLE9BQTVDLEVBQXFERyxRQUFRLENBQTdEO0FBQ0gseUJBUkQ7QUFVSDtBQUNKO0FBQ0o7QUFDRCxnQkFBSVgsV0FBSixFQUFpQjtBQUNiO0FBQ0Esb0JBQUlRLFVBQVUsRUFBZDtBQUNBQSx3QkFBUUMsdUJBQVIsR0FBa0MsS0FBS2xDLEtBQUwsQ0FBV3NDLHFCQUE3QztBQUNBTCx3QkFBUUUsY0FBUixHQUF5QixLQUFLbkMsS0FBTCxDQUFXdUMsa0JBQXBDO0FBQ0Esb0JBQUl2QixZQUFZLEtBQUt3QixnQkFBTCxFQUFoQjtBQUNBLG9CQUFJQyxNQUFKLEVBQVk7QUFDUkEsMkJBQU9DLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkI7QUFDSDtBQUNELHFCQUFLVixRQUFMLENBQWMsRUFBRWhCLFdBQVdBLFNBQWIsRUFBZCxFQUF3QyxNQUFNOztBQUUxQztBQUNBLHdCQUFJLEtBQUtoQixLQUFMLENBQVcyQyxxQkFBWCxJQUFvQyxLQUFLM0MsS0FBTCxDQUFXNEMsZ0JBQVgsSUFBK0IsQ0FBdkUsRUFBMEU7QUFDdEVYLGdDQUFRRSxjQUFSLGdCQUE4QkYsUUFBUUUsY0FBdEM7QUFDQUYsZ0NBQVFFLGNBQVIsQ0FBdUJVLFVBQXZCLEdBQW9DLElBQXBDO0FBQ0g7O0FBRUQsd0JBQUlDLFVBQVUsS0FBS0MsUUFBTCxDQUFjLEtBQUsvQyxLQUFuQixDQUFkO0FBQ0EseUJBQUtBLEtBQUwsQ0FBV2dELE9BQVgsQ0FBbUJDLE9BQW5CLENBQTJCSCxPQUEzQjtBQUNBLHlCQUFLOUMsS0FBTCxDQUFXcUMsY0FBWCxDQUEwQnJCLFNBQTFCLEVBQXFDaUIsT0FBckMsRUFBOEM3QixPQUFPZ0MsSUFBUCxJQUFlLENBQTdEO0FBQ0gsaUJBWEQ7QUFZSDs7QUFFRCxnQkFBSSxLQUFLcEMsS0FBTCxDQUFXOEIsZUFBZixFQUFnQztBQUM1QjtBQUNBLG9CQUFJVyxNQUFKLEVBQVk7QUFDUkEsMkJBQU9DLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkI7QUFDSDtBQUNKO0FBQ0o7QUFDRCxZQUFJLEtBQUtsQyxLQUFMLENBQVdDLFdBQWYsRUFBNEI7QUFDeEIsaUJBQUtULEtBQUwsQ0FBV2tELGFBQVgsQ0FBeUIsS0FBS2xELEtBQUwsQ0FBV1UsS0FBWCxDQUFpQkMsR0FBakIsQ0FBcUJ3QyxLQUFyQixDQUEyQixHQUEzQixFQUFnQyxDQUFoQyxDQUF6QixFQUE2REMsSUFBN0QsQ0FBbUVsRCxVQUFELElBQWdCO0FBQzlFLG9CQUFJQSxVQUFKLEVBQWdCO0FBQ1oseUJBQUs4QixRQUFMLENBQWMsRUFBRTlCLFlBQVlBLFVBQWQsRUFBZDtBQUNIO0FBQ0osYUFKRDtBQUtIOztBQUVELGFBQUs4QixRQUFMLENBQWMsRUFBRWpCLGdCQUFnQixJQUFsQixFQUFkO0FBQ0g7O0FBRURzQyw4QkFBMEJyRCxLQUExQixFQUFpQztBQUM3QixZQUFJZ0IsWUFBWSxFQUFoQjtBQUNBLFlBQUlvQixPQUFPLENBQVg7QUFDQSxjQUFNaEMsU0FBU1YsWUFBWVcsS0FBWixDQUFrQkwsTUFBTU0sUUFBTixDQUFlQyxNQUFqQyxDQUFmO0FBQ0EsWUFBSVAsTUFBTU0sUUFBTixDQUFlQyxNQUFmLENBQXNCSyxRQUF0QixDQUErQixXQUEvQixDQUFKLEVBQWlEO0FBQzdDSSx3QkFBWVosT0FBT1ksU0FBbkI7QUFDSCxTQUZELE1BRU8sSUFBSSxLQUFLUixLQUFMLENBQVdRLFNBQWYsRUFBMEI7QUFDN0JBLHdCQUFZLEtBQUtSLEtBQUwsQ0FBV1EsU0FBdkI7QUFDSDtBQUNELFlBQUlaLE9BQU9nQyxJQUFYLEVBQWlCO0FBQ2JBLG1CQUFPaEMsT0FBT2dDLElBQVAsSUFBZSxDQUF0QjtBQUNIOztBQUVELFlBQUlwQyxNQUFNd0IsYUFBTixJQUF1QnhCLE1BQU13QixhQUFOLElBQXVCLEtBQUt4QixLQUFMLENBQVd3QixhQUE3RCxFQUE0RTtBQUN4RSxnQkFBSVMsVUFBVSxFQUFkO0FBQ0FBLG9CQUFRQyx1QkFBUixHQUFrQ2xDLE1BQU1zRCx3QkFBeEM7QUFDQXJCLG9CQUFRRSxjQUFSLEdBQXlCbkMsTUFBTW1DLGNBQS9CO0FBQ0EsZ0JBQUluQixTQUFKLEVBQWU7QUFDWCxxQkFBS2dCLFFBQUwsQ0FBYyxFQUFFaEIsV0FBV0EsU0FBYixFQUFkLEVBQXdDLE1BQU07QUFDMUMsd0JBQUk4QixVQUFVLEtBQUtDLFFBQUwsQ0FBYy9DLEtBQWQsQ0FBZDtBQUNBLHlCQUFLQSxLQUFMLENBQVdnRCxPQUFYLENBQW1CQyxPQUFuQixDQUEyQkgsT0FBM0I7QUFDQSx5QkFBSzlDLEtBQUwsQ0FBV3FDLGNBQVgsQ0FBMEJyQixTQUExQixFQUFxQ2lCLE9BQXJDLEVBQThDRyxJQUE5QztBQUNILGlCQUpEO0FBS0gsYUFORCxNQU1PO0FBQ0hwQiw0QkFBWSxLQUFLd0IsZ0JBQUwsRUFBWjtBQUNBLHFCQUFLUixRQUFMLENBQWMsRUFBRWhCLFdBQVdBLFNBQWIsRUFBZCxFQUF3QyxNQUFNOztBQUUxQztBQUNBLHdCQUFJaEIsTUFBTTJDLHFCQUFOLElBQStCM0MsTUFBTTRDLGdCQUFOLElBQTBCLENBQTdELEVBQWdFO0FBQzVEWCxnQ0FBUUUsY0FBUixnQkFBOEJGLFFBQVFFLGNBQXRDO0FBQ0FGLGdDQUFRRSxjQUFSLENBQXVCVSxVQUF2QixHQUFvQyxJQUFwQztBQUNIOztBQUVELHdCQUFJQyxVQUFVLEtBQUtDLFFBQUwsQ0FBYy9DLEtBQWQsQ0FBZDtBQUNBLHlCQUFLQSxLQUFMLENBQVdnRCxPQUFYLENBQW1CQyxPQUFuQixDQUEyQkgsT0FBM0I7QUFDQSx5QkFBSzlDLEtBQUwsQ0FBV3FDLGNBQVgsQ0FBMEJyQixTQUExQixFQUFxQ2lCLE9BQXJDLEVBQThDRyxJQUE5QztBQUNILGlCQVhEO0FBWUg7O0FBRUQsZ0JBQUlLLE1BQUosRUFBWTtBQUNSQSx1QkFBT0MsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQjtBQUNIO0FBRUo7QUFDRCxZQUFJMUMsTUFBTThCLGVBQU4sSUFBMEI5QixNQUFNOEIsZUFBTixJQUF5QixLQUFLOUIsS0FBTCxDQUFXOEIsZUFBOUQsSUFBa0YsS0FBS3RCLEtBQUwsQ0FBV1EsU0FBakcsRUFBNEc7QUFDeEcsaUJBQUtnQixRQUFMLENBQWMsRUFBRWYsYUFBYSxJQUFmLEVBQWQ7QUFDQSxpQkFBS3NDLFVBQUwsQ0FBZ0J2RCxLQUFoQjtBQUNBO0FBQ0E7QUFDQTtBQUNILFNBTkQsTUFNTyxJQUFJQSxNQUFNOEIsZUFBTixJQUF5QixLQUFLdEIsS0FBTCxDQUFXUSxTQUFYLElBQXdCQSxTQUFqRCxJQUE4RCxDQUFDLEtBQUtSLEtBQUwsQ0FBV1MsV0FBMUUsSUFBeUYsS0FBS1QsS0FBTCxDQUFXUSxTQUF4RyxFQUFtSDtBQUN0SCxpQkFBS2dCLFFBQUwsQ0FBYyxFQUFFZixhQUFhLElBQWYsRUFBZDtBQUNBLGlCQUFLc0MsVUFBTCxDQUFnQnZELEtBQWhCO0FBQ0gsU0FITSxNQUdBO0FBQ0g7QUFDQSxnQkFBSUEsTUFBTXdELGdCQUFOLElBQTBCLEtBQUt4RCxLQUFMLENBQVd3RCxnQkFBckMsSUFBeUR4RCxNQUFNd0IsYUFBbkUsRUFBa0Y7QUFDOUUsb0JBQUlzQixVQUFVLEtBQUtDLFFBQUwsQ0FBYy9DLEtBQWQsQ0FBZDtBQUNBLHFCQUFLQSxLQUFMLENBQVdnRCxPQUFYLENBQW1CQyxPQUFuQixDQUEyQkgsT0FBM0I7QUFDSDtBQUNKO0FBQ0o7O0FBRUROLHFCQUFpQmlCLFVBQWpCLEVBQTZCO0FBQ3pCO0FBQ0FBLHFCQUFhLHNDQUFiO0FBQ0EsWUFBSUMsS0FBSyxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsRUFBVDtBQUNBLFlBQUlDLE9BQU9KLFdBQVdSLE9BQVgsQ0FBbUIsT0FBbkIsRUFBNEIsVUFBVWEsQ0FBVixFQUFhO0FBQ2hELGdCQUFJQyxJQUFJLENBQUNMLEtBQUtNLEtBQUtDLE1BQUwsS0FBZ0IsRUFBdEIsSUFBNEIsRUFBNUIsR0FBaUMsQ0FBekM7QUFDQVAsaUJBQUtNLEtBQUtFLEtBQUwsQ0FBV1IsS0FBSyxFQUFoQixDQUFMO0FBQ0EsbUJBQU8sQ0FBQ0ksS0FBSyxHQUFMLEdBQVdDLENBQVgsR0FBZ0JBLElBQUksR0FBSixHQUFVLEdBQTNCLEVBQWlDSSxRQUFqQyxDQUEwQyxFQUExQyxDQUFQO0FBQ0gsU0FKVSxDQUFYO0FBS0EsZUFBT04sSUFBUDtBQUNIOztBQUVETyxxQkFBaUJDLEdBQWpCLEVBQXNCO0FBQ2xCO0FBQ0EsY0FBTUMsY0FBYyxLQUFLdEUsS0FBTCxDQUFXTSxRQUFYLENBQW9CQyxNQUF4QztBQUNBLGNBQU1nRSxTQUFTLElBQUlDLGVBQUosQ0FBb0JGLFdBQXBCLENBQWY7QUFDQSxlQUFPQyxPQUFPRSxHQUFQLENBQVdKLEdBQVgsQ0FBUDtBQUNIOztBQUVEZCxlQUFXL0MsUUFBUSxJQUFuQixFQUF5QjRCLE9BQU8sSUFBaEMsRUFBc0NzQyxLQUFLLElBQTNDLEVBQWlEO0FBQzdDO0FBQ0EsWUFBSUMsWUFBWSxJQUFoQjtBQUNBLFlBQUksS0FBSzNFLEtBQUwsQ0FBV1UsS0FBWCxDQUFpQkMsR0FBakIsQ0FBcUJDLFFBQXJCLENBQThCLFFBQTlCLEtBQTJDLEtBQUtaLEtBQUwsQ0FBV1UsS0FBWCxDQUFpQkMsR0FBakIsQ0FBcUJDLFFBQXJCLENBQThCLFdBQTlCLENBQS9DLEVBQTJGO0FBQ3ZGK0Qsd0JBQVksS0FBSzNFLEtBQUwsQ0FBV1UsS0FBWCxDQUFpQkMsR0FBakIsQ0FBcUJpRSxXQUFyQixFQUFaO0FBQ0g7QUFDRCxZQUFJeEMsU0FBUyxJQUFiLEVBQW1CO0FBQ2ZBLG1CQUFPLEtBQUtwQyxLQUFMLENBQVdvQyxJQUFsQjtBQUNIO0FBQ0QsWUFBSSxDQUFDNUIsS0FBTCxFQUFZO0FBQ1JBLG9CQUFRLEtBQUtSLEtBQWI7QUFDSCxTQUZELE1BRU8sSUFBSVEsTUFBTTRCLElBQVYsRUFBZ0I7QUFDbkJBLG1CQUFPNUIsTUFBTTRCLElBQWI7QUFDSDtBQUNELGFBQUtwQyxLQUFMLENBQVc2RSxPQUFYLENBQW1CckUsS0FBbkIsRUFBMEI0QixJQUExQixFQUFnQyxLQUFoQyxFQUF1Q3VDLFNBQXZDLEVBQWtELENBQUMsR0FBR0csSUFBSixLQUFhO0FBQzNEO0FBQ0EsZ0JBQUlKLEVBQUosRUFBUTtBQUNKQSxtQkFBRyxHQUFHSSxJQUFOO0FBQ0gsYUFGRCxNQUVPO0FBQ0gsb0JBQUloQyxVQUFVLEtBQUtDLFFBQUwsQ0FBY3ZDLEtBQWQsQ0FBZDtBQUNBLHFCQUFLUixLQUFMLENBQVdnRCxPQUFYLENBQW1CQyxPQUFuQixDQUEyQkgsT0FBM0I7QUFDSDtBQUNKLFNBUkQsRUFRR2lDLEtBUkgsQ0FRVUMsQ0FBRCxJQUFPO0FBQ1osaUJBQUtoRCxRQUFMLENBQWMsRUFBRWxCLFdBQVcsSUFBYixFQUFkO0FBQ0gsU0FWRDtBQVdIOztBQUVEbUUsaUJBQWFDLFdBQWIsRUFBMEI7QUFDdEI7QUFDQTtBQUNBLFlBQUksT0FBT3pDLE1BQVAsSUFBaUIsUUFBckIsRUFBK0I7QUFDM0JBLG1CQUFPMEMsZUFBUCxHQUF5QixLQUF6QjtBQUNIOztBQUVELGFBQUtDLGlCQUFMO0FBQ0EsWUFBSTFELGlCQUFpQjJELE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQUt0RixLQUFMLENBQVcwQixjQUE3QixDQUFyQjtBQUNBLGNBQU10QixTQUFTVixZQUFZVyxLQUFaLENBQWtCLEtBQUtMLEtBQUwsQ0FBV00sUUFBWCxDQUFvQkMsTUFBdEMsQ0FBZjs7QUFFQSxZQUFJLEtBQUtQLEtBQUwsQ0FBVzBCLGNBQVgsSUFBNkIsS0FBS2xCLEtBQUwsQ0FBV1EsU0FBeEMsSUFBcUQsS0FBS2hCLEtBQUwsQ0FBVzBCLGNBQVgsQ0FBMEIsS0FBS2xCLEtBQUwsQ0FBV1EsU0FBckMsQ0FBekQsRUFBMEc7QUFDdEdVLDJCQUFlLEtBQUtsQixLQUFMLENBQVdRLFNBQTFCLEVBQXFDbUIsY0FBckMsR0FBc0QrQyxXQUF0RDtBQUNBeEQsMkJBQWUsS0FBS2xCLEtBQUwsQ0FBV1EsU0FBMUIsRUFBcUNvQixJQUFyQyxHQUE0QyxDQUE1QztBQUNIO0FBQ0QsYUFBS3BDLEtBQUwsQ0FBV3VGLGFBQVgsQ0FBeUIsRUFBRXBELGdCQUFnQitDLFdBQWxCLEVBQStCeEQsZ0JBQWdCQSxjQUEvQyxFQUErRFUsTUFBTSxDQUFyRSxFQUF6QjtBQUNBO0FBQ0EsWUFBSUssTUFBSixFQUFZO0FBQ1JBLG1CQUFPQyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ0g7QUFDSjs7QUFFRDhDLG9CQUFnQnJELGNBQWhCLEVBQStCO0FBQzNCO0FBQ0EsWUFBSXNELG9CQUFvQixLQUF4QjtBQUNBLFlBQUd0RCxjQUFILEVBQWtCO0FBQ2QsZ0JBQUl1RCxVQUFVdkQsZUFBZXVELE9BQWYsSUFBMEIsRUFBeEM7QUFDQSxnQkFBSUMsYUFBYXhELGVBQWV3RCxVQUFmLElBQTZCLEVBQTlDO0FBQ0EsZ0JBQUlDLGVBQWV6RCxlQUFleUQsWUFBZixJQUErQixFQUFsRDtBQUNBLGdCQUFJQyxjQUFjMUQsZUFBZTBELFdBQWYsSUFBOEIsRUFBaEQ7QUFDQSxnQkFBSUMsYUFBYTNELGVBQWUyRCxVQUFmLElBQTZCLEtBQTlDO0FBQ0EsZ0JBQUlDLFlBQVk1RCxlQUFlNEQsU0FBZixJQUE0QixLQUE1Qzs7QUFFQSxnQkFBSUMsV0FBVzdELGVBQWU2RCxRQUFmLElBQTJCLEVBQTFDO0FBQ0EsZ0JBQUlDLGFBQWE5RCxlQUFlOEQsVUFBZixJQUE2QixFQUE5QztBQUNBLGdCQUFJcEQsYUFBYVYsZUFBZVUsVUFBZixJQUE2QixLQUE5Qzs7QUFFQTs7QUFFQSxnQkFBSTZDLE9BQUosRUFBYTtBQUNURCxvQ0FBb0IsSUFBcEI7QUFDSDs7QUFFRCxnQkFBR0csZ0JBQWdCQSxhQUFhL0QsTUFBaEMsRUFBd0M7QUFDcEM0RCxvQ0FBb0IsSUFBcEI7QUFDSDs7QUFFRCxnQkFBR0ksZUFBZUEsWUFBWWhFLE1BQTlCLEVBQXNDO0FBQ2xDNEQsb0NBQW9CLElBQXBCO0FBQ0g7O0FBRUQsZ0JBQUdLLFVBQUgsRUFBZTtBQUNYTCxvQ0FBb0IsSUFBcEI7QUFDSDs7QUFFRCxnQkFBR00sU0FBSCxFQUFjO0FBQ1ZOLG9DQUFvQixJQUFwQjtBQUNIO0FBRUo7QUFDRCxlQUFPQSxpQkFBUDtBQUNIOztBQUVEMUMsYUFBU3ZDLEtBQVQsRUFBZ0I7QUFDWjtBQUNBLFlBQUksRUFBRWdELGdCQUFGLEVBQW9CRix3QkFBcEIsRUFBOENuQixjQUE5QyxFQUE4RCtELFlBQTlELEVBQTRFOUQsSUFBNUUsS0FBcUY1QixLQUF6RjtBQUNBLFlBQUkyRixVQUFVN0MseUJBQXlCOEMsTUFBekIsQ0FBZ0NDLEtBQUtBLEVBQUVDLElBQUYsSUFBVSxNQUEvQyxFQUF1REMsR0FBdkQsQ0FBMkRGLEtBQUtBLEVBQUVHLEVBQWxFLENBQWQ7O0FBRUEsWUFBSUMsTUFBTSxTQUFWO0FBQ0EsWUFBSUMsT0FBTyxTQUFYO0FBQ0EsWUFBSUMsV0FBVyxFQUFmOztBQUVBLFlBQUluRCxnQkFBSixFQUFzQjtBQUNsQm1ELHVCQUFXbkQsaUJBQWlCbUQsUUFBakIsSUFBNkIsRUFBeEM7QUFDQUYsa0JBQU1qRCxpQkFBaUJvRCxRQUFqQixDQUEwQnRHLFFBQTFCLENBQW1DbUcsR0FBekM7QUFDQUMsbUJBQU9sRCxpQkFBaUJvRCxRQUFqQixDQUEwQnRHLFFBQTFCLENBQW1DdUcsR0FBMUM7QUFDQSxnQkFBSSxPQUFPSixHQUFQLEtBQWUsVUFBbkIsRUFBK0JBLE1BQU1BLEtBQU47QUFDL0IsZ0JBQUksT0FBT0MsSUFBUCxLQUFnQixVQUFwQixFQUFnQ0EsT0FBT0EsTUFBUDs7QUFFaENELGtCQUFNSyxXQUFXQSxXQUFXTCxHQUFYLEVBQWdCTSxPQUFoQixDQUF3QixDQUF4QixDQUFYLENBQU47QUFDQUwsbUJBQU9JLFdBQVdBLFdBQVdKLElBQVgsRUFBaUJLLE9BQWpCLENBQXlCLENBQXpCLENBQVgsQ0FBUDtBQUNIO0FBQ1Q7Ozs7Ozs7QUFPUSxZQUFJckIsVUFBVXZELGVBQWV1RCxPQUFmLElBQTBCLEVBQXhDO0FBQ0EsWUFBSUMsYUFBYXhELGVBQWV3RCxVQUFmLElBQTZCLEVBQTlDO0FBQ0EsWUFBSUMsZUFBZXpELGVBQWV5RCxZQUFmLElBQStCLEVBQWxEO0FBQ0EsWUFBSUMsY0FBYzFELGVBQWUwRCxXQUFmLElBQThCLEVBQWhEO0FBQ0EsWUFBSUMsYUFBYTNELGVBQWUyRCxVQUFmLElBQTZCLEtBQTlDO0FBQ0EsWUFBSUMsWUFBWTVELGVBQWU0RCxTQUFmLElBQTRCLEtBQTVDOztBQUVBLFlBQUlDLFdBQVc3RCxlQUFlNkQsUUFBZixJQUEyQixFQUExQztBQUNBLFlBQUlDLGFBQWE5RCxlQUFlOEQsVUFBZixJQUE2QixFQUE5QztBQUNBLFlBQUlwRCxhQUFhVixlQUFlVSxVQUFmLElBQTZCLEtBQTlDOztBQUdBLFlBQUlsQyxNQUFNLEVBQVY7QUFDQTtBQUNBLFlBQUk4RSxvQkFBb0IsS0FBeEI7O0FBRUEsWUFBSUMsT0FBSixFQUFhO0FBQ1RELGdDQUFvQixJQUFwQjtBQUNIOztBQUVELFlBQUdHLGdCQUFnQkEsYUFBYS9ELE1BQWhDLEVBQXdDO0FBQ3BDNEQsZ0NBQW9CLElBQXBCO0FBQ0g7O0FBRUQsWUFBR0ksZUFBZUEsWUFBWWhFLE1BQTlCLEVBQXNDO0FBQ2xDNEQsZ0NBQW9CLElBQXBCO0FBQ0g7O0FBRUQsWUFBR0ssVUFBSCxFQUFlO0FBQ1hMLGdDQUFvQixJQUFwQjtBQUNIOztBQUVELFlBQUdNLFNBQUgsRUFBYztBQUNWTixnQ0FBb0IsSUFBcEI7QUFDSDs7QUFFRCxZQUFJTyxRQUFKLEVBQWM7QUFDVlAsZ0NBQW9CLElBQXBCO0FBQ0g7O0FBRUQsWUFBSVEsVUFBSixFQUFnQjtBQUNaUixnQ0FBb0IsSUFBcEI7QUFDSDs7QUFFRCxZQUFJdUIsa0JBQWtCLEtBQXRCOztBQUVBLFlBQUl2QixxQkFBcUIsQ0FBQyxLQUFLakYsS0FBTCxDQUFXQyxXQUFyQyxFQUFrRDs7QUFFOUNFLGtCQUFPLEdBQUU4QixPQUFPbkMsUUFBUCxDQUFnQjJHLFFBQVMsYUFBWWQsV0FBVyxFQUFHLFFBQU9NLEdBQUksU0FBUUMsSUFBSyxZQUFXaEIsT0FBUSxlQUFjQyxVQUFXLGlCQUFnQkMsWUFBYSxlQUFjRSxVQUFXLGNBQWFDLFNBQVUsZ0JBQWVGLFdBQVksYUFBWUcsUUFBUyxhQUFZVyxRQUFTLGlCQUFnQlQsZ0JBQWdCLEVBQUcsZUFBY0QsVUFBVyxjQUFhLEtBQUt6RixLQUFMLENBQVdRLFNBQVUsZUFBYzZCLFVBQVcsRUFBelk7QUFDQW1FLDhCQUFrQixJQUFsQjtBQUVILFNBTEQsTUFLTyxJQUFJLEtBQUt4RyxLQUFMLENBQVdDLFdBQWYsRUFBNEI7QUFDL0JFLGtCQUFPLEdBQUU4QixPQUFPbkMsUUFBUCxDQUFnQjJHLFFBQVMsRUFBbEM7QUFDSDs7QUFFRCxZQUFHLEtBQUt6RyxLQUFMLENBQVdXLGVBQWQsRUFBOEI7QUFDMUJSLG1CQUFRLEdBQUUsaUJBQWdCLEtBQUtILEtBQUwsQ0FBV1csZUFBZ0IsRUFBckQ7QUFDSDs7QUFFRCxZQUFJLEtBQUtYLEtBQUwsQ0FBV0ssUUFBZixFQUF5QjtBQUNyQkYsbUJBQVEsR0FBRXFHLGtCQUFrQixHQUFsQixHQUF3QixHQUFJLGVBQXRDO0FBQ0FBLDhCQUFrQixJQUFsQjtBQUNIOztBQUVELFlBQUk1RSxPQUFPLENBQVgsRUFBYztBQUNWekIsbUJBQVEsR0FBRXFHLGtCQUFrQixHQUFsQixHQUF3QixHQUFJLFFBQU81RSxJQUFLLEVBQWxEO0FBQ0g7O0FBRUQsZUFBT3pCLEdBQVA7QUFDSDs7QUFFRHVHLG9CQUFnQmpILE9BQWhCLEVBQXlCO0FBQ3JCLFlBQUlrSCxRQUFRLFlBQVo7QUFDQSxZQUFJLEtBQUszRyxLQUFMLENBQVdDLFdBQWYsRUFBNEI7QUFDeEIwRyxvQkFBUSxFQUFSO0FBQ0g7QUFDRCxZQUFJQyxjQUFjLEVBQWxCO0FBQ0EsWUFBSW5ILE9BQUosRUFBYTtBQUNUa0gsb0JBQVFsSCxRQUFRa0gsS0FBUixJQUFpQixFQUF6QjtBQUNBQywwQkFBY25ILFFBQVFtSCxXQUFSLElBQXVCLEVBQXJDO0FBQ0g7QUFDRCxlQUFPLEVBQUVELEtBQUYsRUFBU0MsV0FBVCxFQUFQO0FBQ0g7O0FBRURoQyx3QkFBbUI7QUFDZixhQUFLcEQsUUFBTCxDQUFjLEVBQUNkLGFBQWEsRUFBZCxFQUFkO0FBQ0g7O0FBRURtRyxxQkFBaUJqQixNQUFqQixFQUF5QjtBQUNyQixhQUFLcEUsUUFBTCxDQUFjLEVBQUNkLGFBQWFrRixNQUFkLEVBQWQ7QUFDSDs7QUFFRGtCLGdCQUFZQyxZQUFaLEVBQXlCO0FBQ3JCLGNBQU1uSCxTQUFTVixZQUFZVyxLQUFaLENBQWtCLEtBQUtMLEtBQUwsQ0FBV00sUUFBWCxDQUFvQkMsTUFBdEMsQ0FBZjtBQUNBLFlBQUlpSCxjQUFjLEtBQUtDLGlCQUFMLENBQXVCLEtBQUt6SCxLQUFMLENBQVdzRCx3QkFBbEMsQ0FBbEI7QUFDQSxZQUFJM0IsT0FBTyxFQUFDNEYsY0FBYUEsWUFBZCxFQUEyQkcsYUFBWSxRQUF2QyxFQUFnREMsUUFBT3ZILE1BQXZELEVBQThEd0gsV0FBVSxRQUF4RSxFQUFpRkMsV0FBVUwsV0FBM0YsRUFBdUdNLGVBQWMsd0JBQXdCLEtBQUs5SCxLQUFMLENBQVdNLFFBQVgsQ0FBb0IyRyxRQUFqSyxFQUFYO0FBQ0EsWUFBRyxLQUFLakgsS0FBTCxDQUFXK0gsZUFBWCxJQUE4QixLQUFLL0gsS0FBTCxDQUFXK0gsZUFBWCxDQUEyQmxHLE1BQTVELEVBQW1FO0FBQy9ERixpQkFBS3FHLFFBQUwsR0FBZ0IsS0FBS2hJLEtBQUwsQ0FBVytILGVBQVgsQ0FBMkIzQixNQUEzQixDQUFrQ0MsS0FBR0EsRUFBRUMsSUFBRixJQUFVLGtCQUEvQyxFQUFtRSxDQUFuRSxFQUFzRTBCLFFBQXRGO0FBQ0g7QUFDRCxZQUFJQyxlQUFlQyxjQUFJQyxjQUFKLEVBQW5CO0FBQ0EsWUFBR0YsZ0JBQWdCQSxhQUFhRyxRQUFoQyxFQUF5QztBQUNyQ3pHLGlCQUFLeUcsUUFBTCxHQUFnQkgsYUFBYUcsUUFBN0I7QUFDQXpHLGlCQUFLMEcsVUFBTCxHQUFrQkosYUFBYUksVUFBL0I7QUFDSDtBQUNELFlBQUlDLFdBQVcsRUFBQyxZQUFZLGFBQWIsRUFBNEIsVUFBVSxnQ0FBdEMsRUFBd0UsY0FBY0osY0FBSUssU0FBSixNQUFtQixFQUF6RyxFQUE2RyxTQUFTLHFDQUF0SCxFQUFmO0FBQ0FMLHNCQUFJTSxTQUFKLENBQWMsRUFBRTdHLE1BQU0yRyxRQUFSLEVBQWQ7QUFDQSxhQUFLdEksS0FBTCxDQUFXeUksaUJBQVgsQ0FBNkJsQixZQUE3QjtBQUNBLFlBQUcsS0FBSy9HLEtBQUwsQ0FBV2MsZUFBWCxJQUE4QixDQUFDb0gsa0JBQVFDLE9BQVIsRUFBbEMsRUFBb0Q7QUFDaEQsaUJBQUszRyxRQUFMLENBQWMsRUFBQ1YsaUJBQWdCLEtBQWpCLEVBQWQ7QUFDQSxpQkFBS3RCLEtBQUwsQ0FBVzRJLGlCQUFYLENBQTZCakgsSUFBN0I7QUFDQWtILHVCQUFXLE1BQU07QUFDYixxQkFBSzdHLFFBQUwsQ0FBYyxFQUFDVixpQkFBZ0IsSUFBakIsRUFBZDtBQUNILGFBRkQsRUFFRyxJQUZIO0FBR0g7QUFDRixhQUFLVSxRQUFMLENBQWMsRUFBQ1gsYUFBWSxDQUFiLEVBQWQ7QUFDRjs7QUFFRHlILHNCQUFrQkMsSUFBbEIsRUFBdUI7QUFDbkIsWUFBR0EsSUFBSCxFQUFRO0FBQ0osZ0JBQUlwSCxPQUFPO0FBQ0gsNEJBQVksYUFEVCxFQUN3QixVQUFVLCtCQURsQyxFQUNtRSxjQUFjdUcsY0FBSUssU0FBSixNQUFtQixFQURwRyxFQUN3RyxTQUFTO0FBRGpILGFBQVg7QUFHQUwsMEJBQUlNLFNBQUosQ0FBYyxFQUFFN0csTUFBTUEsSUFBUixFQUFkO0FBQ0EsaUJBQUtLLFFBQUwsQ0FBYyxFQUFDWCxhQUFZLENBQWIsRUFBZDtBQUNIO0FBQ0o7O0FBRURvRyxzQkFBa0J1QixpQkFBbEIsRUFBcUM7QUFDakMsWUFBSUEscUJBQXFCQSxrQkFBa0JuSCxNQUEzQyxFQUFtRDtBQUMvQyxtQkFBT21ILGtCQUFrQkMsTUFBbEIsQ0FBeUIsQ0FBQ0MsS0FBRCxFQUFRQyxJQUFSLEVBQWNDLENBQWQsS0FBb0I7QUFDaEQsb0JBQUlBLEtBQUssQ0FBVCxFQUFZO0FBQ1JGLDZCQUFTLElBQVQ7QUFDSDtBQUNEQSx5QkFBVSxHQUFFQyxLQUFLRSxJQUFLLEVBQXRCO0FBQ0EsdUJBQU9ILEtBQVA7QUFDSCxhQU5NLEVBTUosRUFOSSxDQUFQO0FBT0g7QUFDSjs7QUFFREksYUFBUztBQUNMLFlBQUlDLGtCQUFrQixLQUFLdkosS0FBTCxDQUFXd0osT0FBWCxJQUFzQixLQUFLeEosS0FBTCxDQUFXd0osT0FBWCxDQUFtQjNILE1BQW5CLEdBQTRCLENBQXhFO0FBQ0EsWUFBSWxCLE1BQU8sR0FBRThJLGlCQUFPQyxZQUFhLEdBQUUsS0FBSzFKLEtBQUwsQ0FBV00sUUFBWCxDQUFvQjJHLFFBQVMsRUFBaEU7QUFDQXRHLGNBQU1BLElBQUlzQyxPQUFKLENBQVksY0FBWixFQUE0QixFQUE1QixDQUFOO0FBQ0EsWUFBSWIsT0FBTyxFQUFYO0FBQ0EsWUFBSXVILFlBQVlDLFNBQVMsS0FBSzVKLEtBQUwsQ0FBV29DLElBQXBCLENBQWhCO0FBQ0EsWUFBSXlILE9BQU8sRUFBWDtBQUNBLFlBQUlGLFlBQVksQ0FBaEIsRUFBbUI7QUFDZnZILG1CQUFRLFNBQVF1SCxTQUFVLEVBQTFCO0FBQ0FFLG1CQUFPbEosR0FBUDtBQUNBLGdCQUFJZ0osWUFBWSxDQUFoQixFQUFtQjtBQUNmRSx3QkFBUyxTQUFRRixZQUFZLENBQUUsRUFBL0I7QUFDSDtBQUNKO0FBQ0QsWUFBSUcsT0FBTyxFQUFYO0FBQ0EsWUFBSSxLQUFLOUosS0FBTCxDQUFXK0osS0FBWCxHQUFtQkosWUFBWSxFQUFuQyxFQUF1QztBQUNuQ0csbUJBQU9uSixNQUFPLFNBQVFnSixZQUFZLENBQUUsRUFBcEM7QUFDSDs7QUFFRDtBQUNBLFlBQUlLLGVBQWUsS0FBbkI7QUFDQSxZQUFJLE9BQU92SCxNQUFQLElBQWlCLFFBQWpCLElBQTZCQSxPQUFPMEMsZUFBeEMsRUFBeUQ7QUFDckQ2RSwyQkFBZSxJQUFmO0FBQ0g7QUFDRCxlQUNJO0FBQUE7QUFBQTtBQUNJLG1EQUFLLElBQUcsS0FBUixFQUFjLE9BQU8sRUFBRUMsU0FBUyxNQUFYLEVBQXJCLEdBREo7QUFFSSwwQ0FBQyxvQkFBRCxJQUFZLFVBQVU7QUFDbEJDLGtDQUFlLEdBQUVULGlCQUFPQyxZQUFhLEdBQUUsS0FBSzFKLEtBQUwsQ0FBV1UsS0FBWCxDQUFpQkMsR0FBSSxHQUFFeUIsSUFBSyxFQURqRDtBQUVsQitFLDJCQUFPLEtBQUtELGVBQUwsQ0FBcUIsS0FBS2xILEtBQUwsQ0FBV0MsT0FBaEMsRUFBeUNrSCxLQUY5QjtBQUdsQkMsaUNBQWEsS0FBS0YsZUFBTCxDQUFxQixLQUFLbEgsS0FBTCxDQUFXQyxPQUFoQyxFQUF5Q21ILFdBSHBDO0FBSWxCeUMsMEJBQU1BLElBSlk7QUFLbEJDLDBCQUFNQTtBQUxZLGlCQUF0QixFQU1HLFNBQVMsQ0FBQyxLQUFLdEosS0FBTCxDQUFXQyxXQU54QixHQUZKO0FBY0k7QUFBQyx3Q0FBRDtBQUFBLDZCQUFvQixLQUFLVCxLQUF6QixJQUFnQyxjQUFjZ0ssZ0JBQWdCLEtBQUtoSyxLQUFMLENBQVdtSyxrQkFBM0IsSUFBaUQsS0FBSzNKLEtBQUwsQ0FBV00sU0FBMUcsRUFBcUgsT0FBTSwyQkFBM0gsRUFBdUosUUFBUSxJQUEvSixFQUFxSyxVQUFVLENBQUMsQ0FBQyxLQUFLTixLQUFMLENBQVdLLFFBQTVMLEVBQXNNLFlBQVksSUFBbE4sRUFBd04sWUFBWSxJQUFwTztBQUVRLHFCQUFLTCxLQUFMLENBQVdNLFNBQVgsR0FBdUI7QUFBQTtBQUFBLHNCQUFLLFdBQVUsTUFBZjtBQUFBO0FBQUEsaUJBQXZCLEdBQXdFO0FBQUE7QUFBQTtBQUNwRSxrREFBQyxtQkFBRCxlQUFZLEtBQUtkLEtBQWpCLElBQXdCLGNBQWMsS0FBS2lGLFlBQUwsQ0FBa0JtRixJQUFsQixDQUF1QixJQUF2QixDQUF0QyxFQUFvRSxTQUFTLEtBQUtwSyxLQUFMLENBQVdDLE9BQXhGLEVBQWlHLFVBQVUsQ0FBQyxDQUFDLEtBQUtPLEtBQUwsQ0FBV0ssUUFBeEgsRUFBa0ksYUFBYSxLQUFLTCxLQUFMLENBQVdDLFdBQTFKLEVBQXVLLGFBQWEsS0FBS0QsS0FBTCxDQUFXVSxXQUEvTCxFQUE0TSxtQkFBbUIsS0FBS2tFLGlCQUFMLENBQXVCZ0YsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBL04sSUFEb0U7QUF1QmhFLHlCQUFLcEssS0FBTCxDQUFXd0osT0FBWCxJQUFzQixLQUFLeEosS0FBTCxDQUFXd0osT0FBWCxDQUFtQjNILE1BQW5CLElBQTRCLENBQWxELEdBQ0E7QUFBQTtBQUFBLDBCQUFLLFdBQVUsb0NBQWY7QUFDSTtBQUFBO0FBQUEsOEJBQUssV0FBVSwrQkFBZjtBQUNJO0FBQUE7QUFBQSxrQ0FBSyxXQUFVLGVBQWY7QUFDSTtBQUFBO0FBQUEsc0NBQUcsV0FBVSxZQUFiO0FBQUE7QUFBQSxpQ0FESjtBQUVLLHFDQUFLMkQsZUFBTCxDQUFxQixLQUFLeEYsS0FBTCxDQUFXbUMsY0FBaEMsSUFDRztBQUFDLG1EQUFELENBQU8sUUFBUDtBQUFBO0FBQ0EsMkVBQUssV0FBVSxZQUFmLEVBQTRCLEtBQUtrSSxTQUFlQSxHQUFHLG9CQUFuRCxHQURBO0FBRUE7QUFBQTtBQUFBLDBDQUFHLFdBQVUsd0JBQWIsRUFBc0MsU0FBUyxLQUFLaEQsZ0JBQUwsQ0FBc0IrQyxJQUF0QixDQUEyQixJQUEzQixFQUFpQyxFQUFDRSxVQUFVLElBQVgsRUFBakMsQ0FBL0M7QUFBQTtBQUFBO0FBRkEsaUNBREgsR0FLQztBQUFDLG1EQUFELENBQU8sUUFBUDtBQUFBO0FBQ0UsMkVBQUssT0FBTyxFQUFDQyxPQUFNLE9BQVAsRUFBWixFQUE2QixXQUFVLFlBQXZDLEVBQW9ELEtBQUtGLFNBQWVBLEdBQUcsaUJBQTNFLEdBREY7QUFFRTtBQUFBO0FBQUEsMENBQUcsV0FBVSxrQ0FBYjtBQUFBO0FBQXlFLGlGQUF6RTtBQUFBO0FBQUEscUNBRkY7QUFHRTtBQUFBO0FBQUEsMENBQVEsV0FBVSxnQkFBbEIsRUFBbUMsU0FBVXJGLENBQUQsSUFBSztBQUN6Q0Esa0RBQUV3RixjQUFGO0FBQ0Esb0RBQUk3SSxPQUFPO0FBQ0gsZ0VBQVksYUFEVCxFQUN3QixVQUFVLHNCQURsQyxFQUMwRCxjQUFjdUcsY0FBSUssU0FBSixNQUFtQixFQUQzRixFQUMrRixTQUFTO0FBRHhHLGlEQUFYO0FBR0FMLDhEQUFJTSxTQUFKLENBQWMsRUFBRTdHLE1BQU1BLElBQVIsRUFBZDtBQUNKLHFEQUFLM0IsS0FBTCxDQUFXZ0QsT0FBWCxDQUFtQnlILElBQW5CLENBQXdCLDZCQUF4QjtBQUF1RCw2Q0FOM0Q7QUFBQTtBQUFBO0FBSEY7QUFQTjtBQURKO0FBREoscUJBREEsR0F5QkM7QUFBQyx1Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUVHLHNEQUFDLGVBQUQsZUFBYyxLQUFLekssS0FBbkIsSUFBMEIsY0FBYyxLQUFLaUYsWUFBTCxDQUFrQm1GLElBQWxCLENBQXVCLElBQXZCLENBQXhDLEVBQXNFLFlBQVksS0FBSzdHLFVBQUwsQ0FBZ0I2RyxJQUFoQixDQUFxQixJQUFyQixDQUFsRixFQUE4RyxVQUFVLENBQUMsQ0FBQyxLQUFLNUosS0FBTCxDQUFXSyxRQUFySSxFQUErSSxrQkFBa0IsS0FBS3dHLGdCQUFMLENBQXNCK0MsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FBakssSUFGSDtBQUtPLDZCQUFLNUosS0FBTCxDQUFXQyxXQUFYLElBQTBCOEksZUFBMUIsR0FBNEM7QUFBQTtBQUFBLDhCQUFLLFdBQVUsb0JBQWY7QUFFcENNLG1DQUFPO0FBQUE7QUFBQSxrQ0FBRyxNQUFNQSxJQUFUO0FBQ0g7QUFBQTtBQUFBLHNDQUFLLFdBQVUsb0JBQWY7QUFDSTtBQUFBO0FBQUEsMENBQU0sV0FBVSxRQUFoQjtBQUEwQkYsb0RBQVk7QUFBdEM7QUFESjtBQURHLDZCQUFQLEdBSU8sRUFONkI7QUFTeEM7QUFBQTtBQUFBLGtDQUFLLFdBQVUsb0JBQWY7QUFDSTtBQUFBO0FBQUEsc0NBQU0sV0FBVSxRQUFoQixFQUF5QixPQUFPLEVBQUVlLE9BQU8sTUFBVCxFQUFoQztBQUFvRGY7QUFBcEQ7QUFESiw2QkFUd0M7QUFjcENHLG1DQUFPO0FBQUE7QUFBQSxrQ0FBRyxNQUFNQSxJQUFUO0FBQ0g7QUFBQTtBQUFBLHNDQUFLLFdBQVUsb0JBQWY7QUFDSTtBQUFBO0FBQUEsMENBQU0sV0FBVSxRQUFoQjtBQUEwQkgsb0RBQVk7QUFBdEM7QUFESjtBQURHLDZCQUFQLEdBSU87QUFsQjZCLHlCQUE1QyxHQXFCUztBQTFCaEI7QUFoRCtEO0FBRmhGLGFBZEo7QUFvR0ksMENBQUMsZ0JBQUQsSUFBUSxZQUFZLEtBQUtuSixLQUFMLENBQVdOLFVBQS9CO0FBcEdKLFNBREo7QUF3R0g7QUFsakIyQzs7a0JBcWpCakNOLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwa0JmOzs7Ozs7a0JBRWVBLDJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxNQUFNK0ssUUFBTixTQUF1QjlLLGdCQUFNQyxTQUE3QixDQUF1QztBQUNuQ0MsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOO0FBQ0EsYUFBS1EsS0FBTCxHQUFhO0FBQ1RvSyxxQkFBUyxLQURBO0FBRVRDLHFCQUFTLEtBRkE7QUFHVEMseUJBQWEsS0FISjtBQUlUMUksa0JBQU0sQ0FKRztBQUtUUyx3QkFBWTdDLE1BQU1tQyxjQUFOLElBQXdCbkMsTUFBTW1DLGNBQU4sQ0FBcUJVLFVBQTdDLEdBQXdEN0MsTUFBTW1DLGNBQU4sQ0FBcUJVLFVBQTdFLEdBQXdGLEtBTDNGO0FBTVRnRCx5QkFBYTtBQU5KLFNBQWI7QUFRSDs7QUFFRHRFLHdCQUFvQjtBQUNoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQXNILG1CQUFXLE1BQU07QUFDYixpQkFBSzdHLFFBQUwsQ0FBYyxFQUFFNEksU0FBUyxJQUFYLEVBQWQ7QUFDSCxTQUZELEVBRUcsQ0FGSDtBQUdBLGFBQUs1SSxRQUFMLGNBQW1CLEtBQUtoQyxLQUFMLENBQVdtQyxjQUE5QjtBQUNBLFlBQUlxQixtQkFBbUIsRUFBdkI7QUFDQSxZQUFJaUQsTUFBTSxTQUFWO0FBQ0EsWUFBSUMsT0FBTyxTQUFYO0FBQ0EsWUFBSSxLQUFLMUcsS0FBTCxDQUFXd0QsZ0JBQWYsRUFBaUM7QUFDN0JBLCtCQUFtQixLQUFLeEQsS0FBTCxDQUFXd0QsZ0JBQTlCO0FBQ0FpRCxrQkFBTWpELGlCQUFpQm9ELFFBQWpCLENBQTBCdEcsUUFBMUIsQ0FBbUNtRyxHQUF6QztBQUNBQyxtQkFBT2xELGlCQUFpQm9ELFFBQWpCLENBQTBCdEcsUUFBMUIsQ0FBbUN1RyxHQUExQztBQUNBLGdCQUFJLE9BQU9KLEdBQVAsS0FBZSxVQUFuQixFQUErQkEsTUFBTUEsS0FBTjtBQUMvQixnQkFBSSxPQUFPQyxJQUFQLEtBQWdCLFVBQXBCLEVBQWdDQSxPQUFPQSxNQUFQO0FBQ25DOztBQUVELGFBQUsxRyxLQUFMLENBQVcrSyxZQUFYLENBQXdCdEUsR0FBeEIsRUFBNkJDLElBQTdCO0FBQ0g7O0FBRURyRCw4QkFBMEJyRCxLQUExQixFQUFpQztBQUM3QixZQUFHQSxNQUFNbUMsY0FBVCxFQUF5QjtBQUNyQixpQkFBS0gsUUFBTCxjQUFtQmhDLE1BQU1tQyxjQUFOLENBQXFCMEQsV0FBckIsSUFBb0MsRUFBdkQ7QUFDSDtBQUVKOztBQUVEbUYsMkJBQXVCO0FBQ25CLFlBQUlySixPQUFPO0FBQ1Asd0JBQVksYUFETCxFQUNvQixVQUFVLHFCQUQ5QixFQUNxRCxjQUFjdUcsY0FBSUssU0FBSixNQUFtQixFQUR0RixFQUMwRixVQUFVLENBRHBHLEVBQ3VHLFNBQVMsdUJBRGhILEVBQ3lJLFNBQVMsS0FBSy9ILEtBQUwsQ0FBVzRCO0FBRDdKLFNBQVg7QUFHQThGLHNCQUFJTSxTQUFKLENBQWMsRUFBRTdHLE1BQU1BLElBQVIsRUFBZDtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEeUMscUJBQWlCQyxHQUFqQixFQUFzQjtBQUNsQjtBQUNBLGNBQU1DLGNBQWMsS0FBS3RFLEtBQUwsQ0FBV00sUUFBWCxDQUFvQkMsTUFBeEM7QUFDQSxjQUFNZ0UsU0FBUyxJQUFJQyxlQUFKLENBQW9CRixXQUFwQixDQUFmO0FBQ0EsZUFBT0MsT0FBT0UsR0FBUCxDQUFXSixHQUFYLENBQVA7QUFDSDs7QUFFRDRHLGFBQVM3SSxJQUFULEVBQWU7QUFDWCxhQUFLSixRQUFMLENBQWMsRUFBRTRJLFNBQVMsS0FBWCxFQUFrQkMsU0FBUyxJQUEzQixFQUFpQ3pJLE1BQU1BLElBQXZDLEVBQWQ7O0FBRUEsYUFBS3BDLEtBQUwsQ0FBV3VELFVBQVgsQ0FBc0IsSUFBdEIsRUFBNEJuQixPQUFPLENBQW5DLEVBQXVDd0ksT0FBRCxJQUFhO0FBQy9DLGlCQUFLNUksUUFBTCxDQUFjLEVBQUU2SSxTQUFTLEtBQVgsRUFBZDtBQUNBaEMsdUJBQVcsTUFBTTtBQUNiLHFCQUFLN0csUUFBTCxDQUFjLEVBQUU0SSxPQUFGLEVBQWQ7QUFDSCxhQUZELEVBRUcsSUFGSDtBQUdILFNBTEQ7QUFNSDtBQUNETSxlQUFXO0FBQ1AsU0FBQzs7Ozs7OzsyQ0FPK0I7QUFDbkM7O0FBRURDLHNCQUFrQjdFLElBQWxCLEVBQXdCOEUsR0FBeEIsRUFBNkJDLE9BQTdCLEVBQXNDckcsQ0FBdEMsRUFBeUM7QUFDckMsWUFBSXNHLFFBQVFGLEdBQVo7QUFDQSxZQUFJQyxPQUFKLEVBQWE7QUFDVCxnQkFBSUUsY0FBYyxHQUFHQyxNQUFILENBQVUsS0FBS2hMLEtBQUwsQ0FBVzhGLElBQVgsQ0FBVixLQUErQixFQUFqRDtBQUNBLGdCQUFJbUYsUUFBUSxLQUFaO0FBQ0FILG9CQUFRQyxZQUFZbkYsTUFBWixDQUFvQnpFLElBQUQsSUFBUztBQUNoQyxvQkFBR0EsUUFBTXlKLEdBQVQsRUFBYTtBQUNUSyw0QkFBUSxJQUFSO0FBQ0EsMkJBQU8sS0FBUDtBQUNIO0FBQ0QsdUJBQU8sSUFBUDtBQUNILGFBTk8sQ0FBUjtBQU9BLGdCQUFHLENBQUNBLEtBQUosRUFBVTtBQUNOSCxzQkFBTWIsSUFBTixDQUFXVyxHQUFYO0FBQ0g7QUFDSjs7QUFFRCxZQUFJTSxVQUFVO0FBQ1Ysd0JBQVksdUJBREYsRUFDMkIsVUFBVSx1QkFEckMsRUFDOEQsY0FBY3hELGNBQUlLLFNBQUosTUFBbUIsRUFEL0YsRUFDbUcsVUFBVSxDQUQ3RyxFQUNnSCxTQUFTLDBCQUR6SCxFQUNxSixPQUFPOUYsT0FBT25DLFFBQVAsQ0FBZ0IyRyxRQUQ1SyxFQUNzTCxRQUFRWCxJQUQ5TCxFQUNvTSxPQUFPOEU7QUFEM00sU0FBZDtBQUdBbEQsc0JBQUlNLFNBQUosQ0FBYyxFQUFFN0csTUFBTStKLE9BQVIsRUFBZDs7QUFFQSxZQUFJekosdUJBQWMsS0FBS2pDLEtBQUwsQ0FBV21DLGNBQXpCLENBQUo7QUFDQSxZQUFHbUUsS0FBSzFGLFFBQUwsQ0FBYyxTQUFkLENBQUgsRUFBOEI7O0FBRTFCLGdCQUFHd0ssSUFBSXhLLFFBQUosQ0FBYSxXQUFiLEtBQTZCd0ssSUFBSXhLLFFBQUosQ0FBYSxZQUFiLENBQWhDLEVBQTREOztBQUV4RCxvQkFBRyxLQUFLSixLQUFMLENBQVc4RixJQUFYLEtBQWtCLE1BQWxCLEtBQStCLEtBQUs5RixLQUFMLENBQVcsWUFBWCxLQUEwQixLQUExQixJQUFtQzRLLElBQUl4SyxRQUFKLENBQWEsV0FBYixDQUFwQyxJQUFvRSxLQUFLSixLQUFMLENBQVcsWUFBWCxLQUEwQixNQUExQixJQUFvQzRLLElBQUl4SyxRQUFKLENBQWEsWUFBYixDQUF0SSxDQUFILEVBQXlLO0FBQ3JLLHlCQUFLb0IsUUFBTCxDQUFjLEVBQUMwRCxTQUFTLElBQVYsRUFBZ0JDLFlBQVksSUFBNUIsRUFBZCxFQUFpRCxNQUFLO0FBQ2xEMUQsa0NBQVVvRCxPQUFPQyxNQUFQLFlBQWVyRCxPQUFmLElBQTJCLEtBQUt6QixLQUFoQyxFQUFWO0FBQ0EsNkJBQUtSLEtBQUwsQ0FBV2lGLFlBQVgsQ0FBd0JoRCxPQUF4QjtBQUNILHFCQUhEO0FBSUgsaUJBTEQsTUFLSztBQUNELHlCQUFLRCxRQUFMLENBQWMsRUFBQzBELFNBQVMsTUFBVixFQUFrQkMsWUFBWXlGLElBQUl4SyxRQUFKLENBQWEsV0FBYixJQUEwQixLQUExQixHQUFnQyxNQUE5RCxFQUFkLEVBQW9GLE1BQUk7QUFDcEZxQixrQ0FBVW9ELE9BQU9DLE1BQVAsWUFBZXJELE9BQWYsSUFBMkIsS0FBS3pCLEtBQWhDLEVBQVY7QUFDQSw2QkFBS1IsS0FBTCxDQUFXaUYsWUFBWCxDQUF3QmhELE9BQXhCO0FBQ0gscUJBSEQ7QUFJSDtBQUVKLGFBZEQsTUFjTTtBQUNGLHFCQUFLRCxRQUFMLENBQWMsRUFBRTBELFNBQVMsS0FBS2xGLEtBQUwsQ0FBVzhGLElBQVgsS0FBa0JnRixLQUFsQixHQUF3QixJQUF4QixHQUE2QkEsS0FBeEMsRUFBK0MzRixZQUFZLElBQTNELEVBQWQsRUFBZ0YsTUFBSztBQUNqRjFELDhCQUFVb0QsT0FBT0MsTUFBUCxZQUFlckQsT0FBZixJQUEyQixLQUFLekIsS0FBaEMsRUFBVjtBQUNBLHlCQUFLUixLQUFMLENBQVdpRixZQUFYLENBQXdCaEQsT0FBeEI7QUFDSCxpQkFIRDtBQUlIO0FBQ0osU0F0QkQsTUFzQks7QUFDRCxpQkFBS0QsUUFBTCxDQUFjLEVBQUUsQ0FBQ3NFLElBQUQsR0FBUSxLQUFLOUYsS0FBTCxDQUFXOEYsSUFBWCxLQUFrQmdGLEtBQWxCLEdBQXdCLEVBQXhCLEdBQTJCQSxLQUFyQyxFQUFkLEVBQTRELE1BQUs7QUFDN0RySiwwQkFBVW9ELE9BQU9DLE1BQVAsWUFBZXJELE9BQWYsSUFBMkIsS0FBS3pCLEtBQWhDLEVBQVY7QUFDQSxxQkFBS1IsS0FBTCxDQUFXaUYsWUFBWCxDQUF3QmhELE9BQXhCO0FBQ0gsYUFIRDtBQUlIO0FBQ0o7O0FBRUQwSixzQkFBa0I7QUFDZCxZQUFJMUosVUFBVTtBQUNWcUksc0JBQVU7QUFEQSxTQUFkO0FBR0EsYUFBS3RLLEtBQUwsQ0FBV3FILGdCQUFYLENBQTRCcEYsT0FBNUI7QUFDSDs7QUFFRHFILGFBQVM7QUFDTCxZQUFJc0MsZUFBZSxLQUFuQjtBQUNBLFlBQUksRUFBRUMsSUFBRixFQUFRckMsT0FBUixLQUFvQixLQUFLeEosS0FBN0I7O0FBRUEsWUFBSThMLGFBQWEsQ0FBakI7QUFDQSxZQUFJLEtBQUs5TCxLQUFMLENBQVcySixTQUFmLEVBQTBCO0FBQ3RCbUMseUJBQWE5SCxLQUFLK0gsR0FBTCxDQUFTLENBQVQsRUFBWSxLQUFLL0wsS0FBTCxDQUFXMkosU0FBWCxHQUF1QixDQUFuQyxDQUFiO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsZ0JBQUksS0FBSzNKLEtBQUwsQ0FBV29DLElBQWYsRUFBcUI7QUFDakIwSiw2QkFBYTlILEtBQUsrSCxHQUFMLENBQVMsQ0FBVCxFQUFZLEtBQUsvTCxLQUFMLENBQVdvQyxJQUFYLEdBQWtCLENBQTlCLENBQWI7QUFDSDtBQUNKOztBQUVELGVBQ0k7QUFBQTtBQUFBLGNBQVMsV0FBVSxrREFBbkIsRUFBc0UsS0FBSSxlQUExRTtBQUVRLGlCQUFLNUIsS0FBTCxDQUFXc0ssV0FBWCxHQUF5Qiw4QkFBQyxnQkFBRCxPQUF6QixHQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLG9DQUFmO0FBQ0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsZ0JBQWY7QUFhSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxRQUFmO0FBQ0k7QUFBQywyREFBRDtBQUFBO0FBQ0ksMkNBQVdnQixVQURmO0FBRUksMENBQVUsS0FBS2IsUUFBTCxDQUFjYixJQUFkLENBQW1CLElBQW5CLENBRmQ7QUFHSSx5Q0FBUyxLQUFLNUosS0FBTCxDQUFXb0ssT0FIeEI7QUFJSSwyQ0FBVyxJQUpmO0FBS0ksNkNBQWE7QUFMakI7QUFPSTtBQUFBO0FBQUE7QUFFUXBCLHdDQUFRakQsR0FBUixDQUFZLENBQUN5RixLQUFELEVBQVE1QyxDQUFSLEtBQWM7QUFDdEIsd0NBQUl5QyxLQUFLRyxLQUFMLENBQUosRUFBaUI7O0FBRWIsK0NBQU87QUFBQywyREFBRCxDQUFPLFFBQVA7QUFBQSw4Q0FBZ0IsS0FBSzVDLENBQXJCO0FBRUtBLGlEQUFHLENBQUgsSUFBUSxDQUFDLEtBQUs1SSxLQUFMLENBQVdxRixXQUFwQixHQUNBO0FBQUE7QUFBQSxrREFBSyxXQUFVLGdDQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBYTtBQUFBO0FBQUEsMERBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEscURBQWI7QUFBc0Q7QUFBQTtBQUFBLDBEQUFNLFdBQVUseUJBQWhCLEVBQTBDLFNBQVMsS0FBSzhGLGVBQUwsQ0FBcUJ2QixJQUFyQixDQUEwQixJQUExQixDQUFuRDtBQUFBO0FBQUE7QUFBdEQsaURBREo7QUFFSTtBQUFBO0FBQUEsc0RBQUssV0FBVSxpQkFBZjtBQUNJO0FBQUE7QUFBQSwwREFBUSxXQUFZLEdBQUUsS0FBSzVKLEtBQUwsQ0FBV3FGLFdBQVgsSUFBd0IsR0FBeEIsR0FBNEIsU0FBNUIsR0FBc0MsRUFBRyxFQUEvRCxFQUFrRSxTQUFTLEtBQUtzRixpQkFBTCxDQUF1QmYsSUFBdkIsQ0FBNEIsSUFBNUIsRUFBa0MsYUFBbEMsRUFBaUQsR0FBakQsRUFBc0QsS0FBdEQsQ0FBM0U7QUFBQTtBQUFBLHFEQURKO0FBRUk7QUFBQTtBQUFBLDBEQUFRLFdBQVksR0FBRSxLQUFLNUosS0FBTCxDQUFXcUYsV0FBWCxJQUF3QixHQUF4QixHQUE0QixTQUE1QixHQUFzQyxFQUFHLEVBQS9ELEVBQWtFLFNBQVMsS0FBS3NGLGlCQUFMLENBQXVCZixJQUF2QixDQUE0QixJQUE1QixFQUFrQyxhQUFsQyxFQUFpRCxHQUFqRCxFQUFzRCxLQUF0RCxDQUEzRTtBQUFBO0FBQUEscURBRko7QUFHSTtBQUFBO0FBQUEsMERBQVEsV0FBWSxHQUFFLEtBQUs1SixLQUFMLENBQVdxRixXQUFYLElBQXdCLEtBQXhCLEdBQThCLFNBQTlCLEdBQXdDLEVBQUcsRUFBakUsRUFBb0UsU0FBUyxLQUFLc0YsaUJBQUwsQ0FBdUJmLElBQXZCLENBQTRCLElBQTVCLEVBQWtDLGFBQWxDLEVBQWlELEtBQWpELEVBQXdELEtBQXhELENBQTdFO0FBQUE7QUFBQTtBQUhKO0FBRkosNkNBREEsR0FTQyxFQVhOO0FBZUtoQixpREFBRyxDQUFILElBQVEsS0FBS3BKLEtBQUwsQ0FBV2lNLFNBQW5CLElBQWdDLEtBQUtqTSxLQUFMLENBQVdpTSxTQUFYLENBQXFCN0YsTUFBckIsQ0FBNEJDLEtBQUtBLEVBQUU2RixlQUFGLEtBQXNCLG9CQUF2RCxFQUE2RXJLLE1BQTdHLElBQXVILENBQUMsS0FBS3JCLEtBQUwsQ0FBV3FDLFVBQW5JO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBLGtEQUFLLFdBQVUsbUVBQWY7QUFDQTtBQUFBO0FBQUEsc0RBQUssV0FBVSw0Q0FBZjtBQUNJLDJGQUFLLFdBQVUsZUFBZixFQUErQixPQUFPLEVBQUNzSixjQUFhLGVBQWQsRUFBdEM7QUFESixpREFEQTtBQUlBLDhFQUFDLHdCQUFELGVBQW9CLEtBQUtuTSxLQUF6QixJQUFnQyxnQkFBZSxvQkFBL0M7QUFKQSw2Q0FKSixHQVVDLEVBekJOO0FBMkJDO0FBQUE7QUFBQTtBQUVRLHFEQUFLQSxLQUFMLENBQVdhLFFBQVgsR0FDSSw4QkFBQyxlQUFELGVBQW9CLEtBQUtiLEtBQXpCLElBQWdDLFNBQVM2TCxLQUFLRyxLQUFMLENBQXpDLEVBQXNELEtBQUs1QyxDQUEzRCxFQUE4RCxNQUFNQSxDQUFwRSxJQURKLEdBRU0sOEJBQUMsZUFBRCxlQUFvQixLQUFLcEosS0FBekIsSUFBZ0MsU0FBUzZMLEtBQUtHLEtBQUwsQ0FBekMsRUFBc0QsS0FBSzVDLENBQTNELEVBQThELE1BQU1BLENBQXBFO0FBSmQsNkNBM0JEO0FBa0NFLHFEQUNELFNBREMsR0FTTTtBQTNDUix5Q0FBUDtBQThDSCxxQ0FoREQsTUFnRE87QUFDSCwrQ0FBTyxFQUFQO0FBQ0g7QUFDSixpQ0FwREQ7QUFGUjtBQVBKO0FBREo7QUFiSixpQkFESjtBQWtGSyxxQkFBSzVJLEtBQUwsQ0FBV3FLLE9BQVgsR0FBcUIsOEJBQUMsZ0JBQUQsSUFBUSxXQUFVLGtCQUFsQixHQUFyQixHQUErRDtBQWxGcEU7QUFIWixTQURKO0FBMkZIO0FBeFFrQzs7a0JBNFF4QkYsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDclJmOzs7Ozs7a0JBRWVBLGtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7Ozs7O2tCQUVleUIsbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmY7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLE1BQU1BLE1BQU4sU0FBcUJ2TSxnQkFBTUMsU0FBM0IsQ0FBcUM7QUFDakNDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjtBQUNBLGFBQUtRLEtBQUwsR0FBYTtBQUNUNkwsc0JBQVUsSUFERDtBQUVUQyw4QkFBa0IsS0FGVDtBQUdUO0FBQ0E7QUFDQXpKLHdCQUFZN0MsTUFBTW1DLGNBQU4sSUFBd0JuQyxNQUFNbUMsY0FBTixDQUFxQlUsVUFBN0MsR0FBMEQ3QyxNQUFNbUMsY0FBTixDQUFxQlUsVUFBL0UsR0FBNEYsS0FML0Y7QUFNVDtBQUNBMEosOEJBQWtCLEVBUFQ7QUFRVDdHLHFCQUFTLEVBUkE7QUFTVEMsd0JBQVksRUFUSDtBQVVURSx5QkFBYSxFQVZKO0FBV1RELDBCQUFjLEVBWEw7QUFZVEUsd0JBQVksS0FaSDtBQWFUQyx1QkFBVyxLQWJGO0FBY1R5RyxzQkFBVSxFQWREO0FBZVRDLCtCQUFtQixLQWZWO0FBZ0JUdkwseUJBQWE7QUFoQkosU0FBYjtBQWtCSDs7QUFFRG1DLDhCQUEwQnJELEtBQTFCLEVBQWlDO0FBQzdCLGFBQUtnQyxRQUFMLGNBQW1CaEMsTUFBTW1DLGNBQXpCLElBQXlDakIsYUFBYWxCLE1BQU1rQixXQUFOLElBQW1CLEVBQXpFLEtBQStFLE1BQUs7QUFDaEYsZ0JBQUksS0FBS1YsS0FBTCxDQUFXVSxXQUFYLElBQTBCLEtBQUtWLEtBQUwsQ0FBV1UsV0FBWCxDQUF1Qm9KLFFBQXJELEVBQWlFO0FBQzdELHFCQUFLb0MsaUJBQUw7QUFDSDtBQUNKLFNBSkQ7O0FBTUEsWUFBSTFNLE1BQU1rRyxZQUFOLElBQXNCLENBQUNsRyxNQUFNa0csWUFBTixDQUFtQnRGLFFBQW5CLENBQTRCLEtBQTVCLENBQTNCLEVBQStEO0FBQzNELGlCQUFLb0IsUUFBTCxDQUFjLEVBQUV5SyxtQkFBbUIsS0FBckIsRUFBZDtBQUNILFNBRkQsTUFFTztBQUNILGdCQUFJek0sTUFBTUMsT0FBTixJQUFpQkQsTUFBTUMsT0FBTixDQUFjSyxRQUFuQyxFQUE2QztBQUN6QyxxQkFBSzBCLFFBQUwsQ0FBYyxFQUFFeUssbUJBQW1CLEtBQXJCLEVBQWQ7QUFDSCxhQUZELE1BRU87QUFDSCxvQkFBS3pNLE1BQU1DLE9BQU4sSUFBaUJELE1BQU1DLE9BQU4sQ0FBY0ssUUFBaEMsSUFBNkNOLE1BQU1TLFdBQXZELEVBQW9FO0FBQ2hFLHlCQUFLdUIsUUFBTCxDQUFjLEVBQUV5SyxtQkFBbUIsSUFBckIsRUFBMkJFLGdCQUFnQixJQUEzQyxFQUFkO0FBQ0g7QUFDSjtBQUNKO0FBQ0Q7QUFDSDs7QUFFRHBMLHdCQUFvQjtBQUNoQixhQUFLUyxRQUFMLGNBQW1CLEtBQUtoQyxLQUFMLENBQVdtQyxjQUE5QjtBQUNBO0FBQ0EsWUFBSyxLQUFLbkMsS0FBTCxDQUFXQyxPQUFYLElBQXNCLEtBQUtELEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkssUUFBMUMsSUFBdUQsS0FBS04sS0FBTCxDQUFXUyxXQUF0RSxFQUFtRjtBQUMvRSxpQkFBS3VCLFFBQUwsQ0FBYyxFQUFFeUssbUJBQW1CLEtBQXJCLEVBQWQ7QUFDSCxTQUZELE1BRU87QUFDSCxnQkFBSSxLQUFLek0sS0FBTCxDQUFXa0csWUFBWCxJQUEyQixLQUFLbEcsS0FBTCxDQUFXa0csWUFBWCxDQUF3QnRGLFFBQXhCLENBQWlDLEtBQWpDLENBQS9CLEVBQXdFO0FBQ3BFLHFCQUFLb0IsUUFBTCxDQUFjLEVBQUV5SyxtQkFBbUIsSUFBckIsRUFBMkJFLGdCQUFnQixJQUEzQyxFQUFkO0FBQ0g7QUFDSjs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUg7O0FBRUQxSCxtQkFBZTtBQUNYLFlBQUlDLGNBQWM7QUFDZFEscUJBQVMsS0FBS2xGLEtBQUwsQ0FBV2tGLE9BRE47QUFFZEMsd0JBQVksS0FBS25GLEtBQUwsQ0FBV21GLFVBRlQ7QUFHZEMsMEJBQWMsS0FBS3BGLEtBQUwsQ0FBV29GLFlBSFg7QUFJZEMseUJBQWEsS0FBS3JGLEtBQUwsQ0FBV3FGLFdBSlY7QUFLZEMsd0JBQVksS0FBS3RGLEtBQUwsQ0FBV3NGLFVBTFQ7QUFNZEMsdUJBQVcsS0FBS3ZGLEtBQUwsQ0FBV3VGLFNBTlI7QUFPZGxELHdCQUFZLEtBQUtyQyxLQUFMLENBQVdxQztBQVBULFNBQWxCO0FBU0EsWUFBSWxCLE9BQU87QUFDUCx3QkFBWSxhQURMLEVBQ29CLFVBQVUsbUJBRDlCLEVBQ21ELGNBQWN1RyxjQUFJSyxTQUFKLE1BQW1CLEVBRHBGLEVBQ3dGLFVBQVUsQ0FEbEcsRUFDcUcsU0FBUyxvQkFEOUcsRUFDb0ksT0FBTzlGLE9BQU9uQyxRQUFQLENBQWdCMkcsUUFEM0osRUFDcUssY0FBYyxLQUFLekcsS0FBTCxDQUFXbUYsVUFBWCxJQUF5QixFQUQ1TSxFQUNnTixnQkFBZ0IsS0FBS25GLEtBQUwsQ0FBV29GLFlBRDNPLEVBQ3lQLGVBQWUsS0FBS3BGLEtBQUwsQ0FBV3FGLFdBRG5SLEVBQ2dTLGFBQWEsS0FBS3JGLEtBQUwsQ0FBV3VGLFNBRHhULEVBQ21VLGNBQWMsS0FBS3ZGLEtBQUwsQ0FBV3NGLFVBRDVWLEVBQ3dXLFdBQVcsS0FBS3RGLEtBQUwsQ0FBV2tGO0FBRDlYLFNBQVg7O0FBSUF3QyxzQkFBSU0sU0FBSixDQUFjLEVBQUU3RyxNQUFNQSxJQUFSLEVBQWQ7O0FBRUEsWUFBSWlMLHFCQUFxQixLQUFLQyxjQUFMLENBQW9CLEVBQXBCLEVBQXdCLElBQXhCLENBQXpCO0FBQ0EsWUFBR0Qsa0JBQUgsRUFBdUI7QUFDbkIsaUJBQUs1TSxLQUFMLENBQVdpRixZQUFYLENBQXdCQyxXQUF4QjtBQUNIOztBQUVELGFBQUtsRCxRQUFMLENBQWMsRUFBRXNLLGtCQUFrQixLQUFwQixFQUFkO0FBQ0g7O0FBRURRLHFCQUFpQnhHLElBQWpCLEVBQXVCOEUsR0FBdkIsRUFBNEJDLFVBQVUsS0FBdEMsRUFBNkNyRyxDQUE3QyxFQUFnRDtBQUM1QyxZQUFJc0csUUFBUUYsR0FBWjtBQUNBLFlBQUlDLE9BQUosRUFBYTtBQUNULGdCQUFJRSxjQUFjLEdBQUdDLE1BQUgsQ0FBVSxLQUFLaEwsS0FBTCxDQUFXOEYsSUFBWCxDQUFWLEtBQStCLEVBQWpEO0FBQ0EsZ0JBQUltRixRQUFRLEtBQVo7QUFDQUgsb0JBQVFDLFlBQVluRixNQUFaLENBQW9CekUsSUFBRCxJQUFTO0FBQ2hDLG9CQUFHQSxRQUFNeUosR0FBVCxFQUFhO0FBQ1RLLDRCQUFRLElBQVI7QUFDQSwyQkFBTyxLQUFQO0FBQ0g7QUFDRCx1QkFBTyxJQUFQO0FBQ0gsYUFOTyxDQUFSO0FBT0EsZ0JBQUcsQ0FBQ0EsS0FBSixFQUFVO0FBQ05ILHNCQUFNYixJQUFOLENBQVdXLEdBQVg7QUFDSDtBQUNKO0FBQ0QsWUFBRzlFLEtBQUsxRixRQUFMLENBQWMsU0FBZCxDQUFILEVBQThCOztBQUUxQixnQkFBR3dLLElBQUl4SyxRQUFKLENBQWEsV0FBYixLQUE2QndLLElBQUl4SyxRQUFKLENBQWEsWUFBYixDQUFoQyxFQUE0RDs7QUFFeEQsb0JBQUcsS0FBS0osS0FBTCxDQUFXOEYsSUFBWCxLQUFrQixNQUFsQixLQUErQixLQUFLOUYsS0FBTCxDQUFXLFlBQVgsS0FBMEIsS0FBMUIsSUFBbUM0SyxJQUFJeEssUUFBSixDQUFhLFdBQWIsQ0FBcEMsSUFBb0UsS0FBS0osS0FBTCxDQUFXLFlBQVgsS0FBMEIsTUFBMUIsSUFBb0M0SyxJQUFJeEssUUFBSixDQUFhLFlBQWIsQ0FBdEksQ0FBSCxFQUF5SztBQUNySyx5QkFBS29CLFFBQUwsQ0FBYyxFQUFDMEQsU0FBUyxJQUFWLEVBQWdCQyxZQUFZLElBQTVCLEVBQWQ7QUFDSCxpQkFGRCxNQUVLO0FBQ0QseUJBQUszRCxRQUFMLENBQWMsRUFBQzBELFNBQVMsTUFBVixFQUFrQkMsWUFBWXlGLElBQUl4SyxRQUFKLENBQWEsV0FBYixJQUEwQixLQUExQixHQUFnQyxNQUE5RCxFQUFkO0FBQ0g7QUFFSixhQVJELE1BUU07QUFDRixxQkFBS29CLFFBQUwsQ0FBYyxFQUFFMEQsU0FBUyxLQUFLbEYsS0FBTCxDQUFXOEYsSUFBWCxLQUFrQmdGLEtBQWxCLEdBQXdCLElBQXhCLEdBQTZCQSxLQUF4QyxFQUErQzNGLFlBQVksSUFBM0QsRUFBZDtBQUNIO0FBQ0osU0FiRCxNQWFNLElBQUdXLEtBQUsxRixRQUFMLENBQWMsV0FBZCxLQUE4QjBGLEtBQUsxRixRQUFMLENBQWMsWUFBZCxDQUFqQyxFQUE2RDs7QUFFM0QsZ0JBQUcsS0FBS0osS0FBTCxDQUFXOEYsSUFBWCxDQUFILEVBQXFCO0FBQ2pCLHFCQUFLdEUsUUFBTCxDQUFjLEVBQUMsQ0FBQ3NFLElBQUQsR0FBUSxDQUFDLEtBQUs5RixLQUFMLENBQVc4RixJQUFYLENBQVYsRUFBZDtBQUNILGFBRkQsTUFFTTtBQUNGLHFCQUFLdEUsUUFBTCxDQUFjLEVBQUMsYUFBYXNFLEtBQUsxRixRQUFMLENBQWMsV0FBZCxJQUEyQjBLLEtBQTNCLEdBQWlDLENBQUNBLEtBQWhELEVBQXVELGNBQWNoRixLQUFLMUYsUUFBTCxDQUFjLFlBQWQsSUFBNEIwSyxLQUE1QixHQUFrQyxDQUFDQSxLQUF4RyxFQUFkO0FBQ0g7QUFDUixTQVBLLE1BT0E7QUFDRixpQkFBS3RKLFFBQUwsQ0FBYyxFQUFFLENBQUNzRSxJQUFELEdBQVEsS0FBSzlGLEtBQUwsQ0FBVzhGLElBQVgsS0FBa0JnRixLQUFsQixHQUF3QixFQUF4QixHQUEyQkEsS0FBckMsRUFBZDtBQUNIO0FBQ0o7O0FBRUR5QixnQkFBWUMsUUFBTSxLQUFsQixFQUF5QmhJLENBQXpCLEVBQTRCOztBQUV4QixZQUFHZ0ksS0FBSCxFQUFVO0FBQ04sZ0JBQUlyTCxPQUFPO0FBQ1AsNEJBQVksYUFETCxFQUNvQixVQUFVLGdCQUQ5QixFQUNnRCxjQUFjdUcsY0FBSUssU0FBSixNQUFtQixFQURqRixFQUNxRixVQUFVLENBRC9GLEVBQ2tHLFNBQVMsa0JBRDNHLEVBQytILE9BQU85RixPQUFPbkMsUUFBUCxDQUFnQjJHLFFBRHRKLEVBQ2dLLGNBQWMsS0FBS3pHLEtBQUwsQ0FBV21GLFVBQVgsSUFBeUIsRUFEdk0sRUFDMk0sZ0JBQWdCLEtBQUtuRixLQUFMLENBQVdvRixZQUR0TyxFQUNvUCxlQUFlLEtBQUtwRixLQUFMLENBQVdxRixXQUQ5USxFQUMyUixhQUFhLEtBQUtyRixLQUFMLENBQVd1RixTQURuVCxFQUM4VCxjQUFjLEtBQUt2RixLQUFMLENBQVdzRixVQUR2VixFQUNtVyxXQUFXLEtBQUt0RixLQUFMLENBQVdrRjtBQUR6WCxhQUFYO0FBR0F3QywwQkFBSU0sU0FBSixDQUFjLEVBQUU3RyxNQUFNQSxJQUFSLEVBQWQ7O0FBRUEsZ0JBQUlzTCxlQUFlO0FBQ2Z2SCx5QkFBUyxFQURNO0FBRWZDLDRCQUFZLEVBRkc7QUFHZkUsNkJBQWEsRUFIRTtBQUlmQyw0QkFBWSxLQUpHO0FBS2ZDLDJCQUFXLEtBTEk7QUFNZkgsOEJBQWM7QUFOQyxhQUFuQjs7QUFTQSxpQkFBSzVELFFBQUwsY0FDT2lMLFlBRFA7QUFFSS9MLDZCQUFhO0FBRmpCO0FBSUgsU0FuQkQsTUFtQk07QUFDRixnQkFBSVMsT0FBTztBQUNQLDRCQUFZLGFBREwsRUFDb0IsVUFBVSxnQkFEOUIsRUFDZ0QsY0FBY3VHLGNBQUlLLFNBQUosTUFBbUIsRUFEakYsRUFDcUYsVUFBVSxDQUQvRixFQUNrRyxTQUFTLGtCQUQzRyxFQUMrSCxPQUFPOUYsT0FBT25DLFFBQVAsQ0FBZ0IyRyxRQUR0SixFQUNnSyxjQUFjLEtBQUt6RyxLQUFMLENBQVdtRixVQUFYLElBQXlCLEVBRHZNLEVBQzJNLGdCQUFnQixLQUFLbkYsS0FBTCxDQUFXb0YsWUFEdE8sRUFDb1AsZUFBZSxLQUFLcEYsS0FBTCxDQUFXcUYsV0FEOVEsRUFDMlIsYUFBYSxLQUFLckYsS0FBTCxDQUFXdUYsU0FEblQsRUFDOFQsY0FBYyxLQUFLdkYsS0FBTCxDQUFXc0YsVUFEdlYsRUFDbVcsV0FBVyxLQUFLdEYsS0FBTCxDQUFXa0Y7QUFEelgsYUFBWDtBQUdBd0MsMEJBQUlNLFNBQUosQ0FBYyxFQUFFN0csTUFBTUEsSUFBUixFQUFkO0FBQ0EsaUJBQUtLLFFBQUw7QUFDSXNLLGtDQUFrQjtBQUR0QixlQUVPLEtBQUs5TCxLQUFMLENBQVcrTCxnQkFGbEI7QUFHSXJMLDZCQUFhO0FBSGpCO0FBS0g7O0FBRUQ7QUFFSDs7QUFFRHVHLHNCQUFrQnVCLGlCQUFsQixFQUFxQztBQUNqQyxZQUFJQSxxQkFBcUJBLGtCQUFrQm5ILE1BQTNDLEVBQW1EO0FBQy9DLG1CQUFPbUgsa0JBQWtCQyxNQUFsQixDQUF5QixDQUFDQyxLQUFELEVBQVFDLElBQVIsRUFBY0MsQ0FBZCxLQUFvQjtBQUNoRCxvQkFBSUEsS0FBSyxDQUFULEVBQVk7QUFDUkYsNkJBQVMsSUFBVDtBQUNIO0FBQ0RBLHlCQUFVLEdBQUVDLEtBQUtFLElBQUssRUFBdEI7QUFDQSx1QkFBT0gsS0FBUDtBQUNILGFBTk0sRUFNSixFQU5JLENBQVA7QUFPSDtBQUNKOztBQUVEZ0UsaUJBQWE7QUFDVCxZQUFJekssTUFBSixFQUFZO0FBQ1IsZ0JBQUk5QixNQUFNOEIsT0FBT25DLFFBQVAsQ0FBZ0I2TSxJQUFoQixHQUF1QixzQkFBakM7QUFDQSxpQkFBS25OLEtBQUwsQ0FBV29OLFdBQVgsQ0FBdUJ6TSxHQUF2QixFQUE0QixDQUFDME0sR0FBRCxFQUFNMUwsSUFBTixLQUFlO0FBQ3ZDLG9CQUFJLENBQUMwTCxHQUFMLEVBQVU7QUFDTix5QkFBS3JMLFFBQUwsQ0FBYyxFQUFFd0ssVUFBVTdLLEtBQUsyTCxRQUFqQixFQUFkO0FBQ0g7QUFDSixhQUpEO0FBS0g7QUFDSjs7QUFFREMsbUJBQWU7QUFDWCxhQUFLdkwsUUFBTCxDQUFjLEVBQUUySyxnQkFBZ0IsS0FBbEIsRUFBeUJhLGNBQWMsRUFBdkMsRUFBMkNmLG1CQUFtQixLQUE5RCxFQUFkO0FBQ0g7O0FBRURnQix3QkFBb0I7QUFDaEIsYUFBS3pMLFFBQUwsQ0FBYyxFQUFFeUssbUJBQW1CLEtBQXJCLEVBQWQ7QUFDSDs7QUFFRGlCLHFCQUFpQjtBQUNiLGFBQUsxTCxRQUFMLENBQWMsRUFBRTJMLG9CQUFvQixLQUF0QixFQUE2QmxCLG1CQUFtQixLQUFoRCxFQUFkO0FBQ0g7O0FBRURtQixtQkFBZTtBQUNYLGFBQUs1TCxRQUFMLENBQWM7QUFDVndMLDBCQUFjO0FBREosU0FBZDtBQUdBOzs7OztBQUtBLFlBQUlLLGVBQWUsaUJBQW5CO0FBQ0E7Ozs7QUFJQSxZQUFJbE0sT0FBTztBQUNQLHdCQUFZLGtDQURMLEVBQ3lDLFVBQVUsc0NBRG5ELEVBQzJGLGNBQWN1RyxjQUFJSyxTQUFKLE1BQW1CLEVBRDVILEVBQ2dJLFVBQVUsQ0FEMUksRUFDNkksU0FBUyxzQ0FEdEosRUFDOEwsT0FBTzlGLE9BQU9uQyxRQUFQLENBQWdCMkc7QUFEck4sU0FBWDtBQUdBaUIsc0JBQUlNLFNBQUosQ0FBYyxFQUFFN0csTUFBTUEsSUFBUixFQUFkO0FBQ0EsYUFBSzNCLEtBQUwsQ0FBV2dELE9BQVgsQ0FBbUJ5SCxJQUFuQixDQUF3Qm9ELFlBQXhCO0FBRUg7O0FBRURuQix3QkFBb0I7O0FBRWhCLFlBQUkvSyxPQUFPO0FBQ0gsd0JBQVksYUFEVCxFQUN3QixVQUFVLHNCQURsQyxFQUMwRCxjQUFjdUcsY0FBSUssU0FBSixNQUFtQixFQUQzRixFQUMrRixVQUFVLENBRHpHLEVBQzRHLFNBQVMseUJBRHJILEVBQ2dKLE9BQU85RixPQUFPbkMsUUFBUCxDQUFnQjJHLFFBRHZLLEVBQ2lMLGNBQWMsS0FBS3pHLEtBQUwsQ0FBV21GLFVBQVgsSUFBeUIsRUFEeE4sRUFDNE4sZ0JBQWdCLEtBQUtuRixLQUFMLENBQVdvRixZQUR2UCxFQUNxUSxlQUFlLEtBQUtwRixLQUFMLENBQVdxRixXQUQvUixFQUM0UyxhQUFhLEtBQUtyRixLQUFMLENBQVd1RixTQURwVSxFQUMrVSxjQUFjLEtBQUt2RixLQUFMLENBQVdzRixVQUR4VyxFQUNvWCxXQUFXLEtBQUt0RixLQUFMLENBQVdrRjtBQUQxWSxTQUFYO0FBR0F3QyxzQkFBSU0sU0FBSixDQUFjLEVBQUU3RyxNQUFNQSxJQUFSLEVBQWQ7QUFDQSxZQUFJbU0saUJBQWlCO0FBQ2pCcEkscUJBQVMsS0FBS2xGLEtBQUwsQ0FBV2tGLE9BREg7QUFFakJDLHdCQUFZLEtBQUtuRixLQUFMLENBQVdtRixVQUZOO0FBR2pCRSx5QkFBYSxLQUFLckYsS0FBTCxDQUFXcUYsV0FIUDtBQUlqQkQsMEJBQWMsR0FBRzRGLE1BQUgsQ0FBVSxLQUFLaEwsS0FBTCxDQUFXb0YsWUFBckIsS0FBc0MsRUFKbkM7QUFLakJFLHdCQUFZLEtBQUt0RixLQUFMLENBQVdzRixVQUxOO0FBTWpCQyx1QkFBVyxLQUFLdkYsS0FBTCxDQUFXdUY7QUFOTCxTQUFyQjtBQVFBLGFBQUsvRCxRQUFMLENBQWMsRUFBRXNLLGtCQUFrQixJQUFwQixFQUEwQkMsa0JBQWtCdUIsY0FBNUMsRUFBZDtBQUNIOztBQUVEakIsbUJBQWVrQixhQUFhLEVBQTVCLEVBQWdDQywyQkFBMEIsS0FBMUQsRUFBaUU7O0FBRTdELFlBQUlBLHdCQUFKLEVBQThCOztBQUUxQixnQkFBSTtBQUNBLG9CQUFJQyxjQUFjLENBQWxCO0FBQ0EscUJBQUssSUFBSTdILE1BQVQsSUFBbUIsS0FBSzVGLEtBQUwsQ0FBVytMLGdCQUE5QixFQUFnRDs7QUFFNUMsd0JBQUluRyxPQUFPeEYsUUFBUCxDQUFnQixjQUFoQixDQUFKLEVBQXFDOztBQUVqQyw0QkFBSSxLQUFLSixLQUFMLENBQVcrTCxnQkFBWCxDQUE0Qm5HLE1BQTVCLEtBQXVDLEtBQUs1RixLQUFMLENBQVc0RixNQUFYLEVBQW1CdkUsTUFBbkIsSUFBNkIsS0FBS3JCLEtBQUwsQ0FBVytMLGdCQUFYLENBQTRCbkcsTUFBNUIsRUFBb0N2RSxNQUE1RyxFQUFvSDs7QUFFaEhvTTtBQUNBO0FBQ0gseUJBSkQsTUFJTTs7QUFFRixpQ0FBSSxJQUFJQyxZQUFVLENBQWxCLEVBQW9CQSxZQUFVLEtBQUsxTixLQUFMLENBQVc0RixNQUFYLEVBQW1CdkUsTUFBakQsRUFBeURxTSxXQUF6RCxFQUFzRTtBQUNsRSxvQ0FBRyxLQUFLMU4sS0FBTCxDQUFXK0wsZ0JBQVgsQ0FBNEJuRyxNQUE1QixFQUFvQytILE9BQXBDLENBQTRDLEtBQUszTixLQUFMLENBQVc0RixNQUFYLEVBQW1COEgsU0FBbkIsQ0FBNUMsS0FBNEUsQ0FBQyxDQUFoRixFQUFrRjtBQUM5RUQ7QUFDQTtBQUNIO0FBQ0o7QUFDSjtBQUVKLHFCQWhCRCxNQWdCTyxJQUFHLEtBQUt6TixLQUFMLENBQVc0RixNQUFYLEtBQXNCLEtBQUs1RixLQUFMLENBQVcrTCxnQkFBWCxDQUE0Qm5HLE1BQTVCLENBQXpCLEVBQTZEO0FBQ2hFNkg7QUFDQTtBQUNIO0FBQ0o7QUFDRCx1QkFBT0EsV0FBUDtBQUNILGFBMUJELENBMEJFLE9BQU9qSixDQUFQLEVBQVU7QUFDUix1QkFBTyxLQUFQO0FBQ0g7QUFFSixTQWhDRCxNQWdDTzs7QUFFSCtJLHlCQUFhO0FBQ1RsSSw2QkFBYSxFQURKO0FBRVRELDhCQUFjLEVBRkw7QUFHVHdJLCtCQUFlO0FBSE4sYUFBYjs7QUFNQSxnQkFBSTtBQUNBLG9CQUFJSCxjQUFjLENBQWxCO0FBQ0EscUJBQUssSUFBSTdILE1BQVQsSUFBbUIySCxVQUFuQixFQUErQjs7QUFFM0Isd0JBQUczSCxPQUFPeEYsUUFBUCxDQUFnQixlQUFoQixDQUFILEVBQW9DO0FBQ2hDLDRCQUFHLEtBQUtKLEtBQUwsQ0FBVyxXQUFYLEtBQTJCLEtBQUtBLEtBQUwsQ0FBVyxZQUFYLENBQTlCLEVBQXVEO0FBQ25EeU47QUFDSDtBQUNKLHFCQUpELE1BSU0sSUFBSTdILFVBQVUsY0FBZCxFQUE4QjtBQUNoQyw0QkFBSSxLQUFLNUYsS0FBTCxDQUFXNEYsTUFBWCxFQUFtQnZFLE1BQXZCLEVBQStCO0FBQzNCb007QUFDSDtBQUNKLHFCQUpLLE1BSUMsSUFBSUYsV0FBVzNILE1BQVgsS0FBc0IsS0FBSzVGLEtBQUwsQ0FBVzRGLE1BQVgsQ0FBMUIsRUFBOEM7QUFDakQ2SDtBQUNIO0FBQ0o7QUFDRCx1QkFBT0EsV0FBUDtBQUNILGFBakJELENBaUJFLE9BQU9qSixDQUFQLEVBQVU7QUFDUix1QkFBTyxLQUFQO0FBQ0g7QUFDSjtBQUVKOztBQUVEcUosb0JBQWdCO0FBQ1osWUFBSTFNLE9BQU87QUFDUCx3QkFBWSxpQ0FETCxFQUN3QyxVQUFVLGlDQURsRCxFQUNxRixjQUFjdUcsY0FBSUssU0FBSixNQUFtQixFQUR0SCxFQUMwSCxVQUFVLENBRHBJLEVBQ3VJLFNBQVMscUNBRGhKLEVBQ3VMLE9BQU85RixPQUFPbkMsUUFBUCxDQUFnQjJHO0FBRDlNLFNBQVg7QUFHQWlCLHNCQUFJTSxTQUFKLENBQWMsRUFBRTdHLE1BQU1BLElBQVIsRUFBZDs7QUFFQSxhQUFLSyxRQUFMLENBQWMsRUFBRWEsWUFBWSxDQUFDLEtBQUtyQyxLQUFMLENBQVdxQyxVQUExQixFQUFkLEVBQXNELE1BQU07O0FBR3hELGdCQUFJcUMsY0FBYztBQUNkUSx5QkFBUyxLQUFLbEYsS0FBTCxDQUFXa0YsT0FETjtBQUVkQyw0QkFBWSxLQUFLbkYsS0FBTCxDQUFXbUYsVUFGVDtBQUdkQyw4QkFBYyxLQUFLcEYsS0FBTCxDQUFXb0YsWUFIWDtBQUlkQyw2QkFBYSxLQUFLckYsS0FBTCxDQUFXcUYsV0FKVjtBQUtkQyw0QkFBWSxLQUFLdEYsS0FBTCxDQUFXc0YsVUFMVDtBQU1kQywyQkFBVyxLQUFLdkYsS0FBTCxDQUFXdUYsU0FOUjtBQU9kbEQsNEJBQVksS0FBS3JDLEtBQUwsQ0FBV3FDO0FBUFQsYUFBbEI7QUFTQSxpQkFBSzdDLEtBQUwsQ0FBV2lGLFlBQVgsQ0FBd0JDLFdBQXhCO0FBQ0gsU0FiRDtBQWNIOztBQUVEb0UsYUFBUzs7QUFFTCxZQUFJZ0YsZ0JBQWdCLEVBQXBCO0FBQ0EsWUFBSSxLQUFLdE8sS0FBTCxDQUFXc0Qsd0JBQVgsQ0FBb0N6QixNQUF4QyxFQUFnRDtBQUM1QyxpQkFBSyxJQUFJdUgsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtwSixLQUFMLENBQVdzRCx3QkFBWCxDQUFvQ3pCLE1BQXhELEVBQWdFdUgsR0FBaEUsRUFBcUU7QUFDakVrRiw4QkFBYzdELElBQWQsQ0FBbUIsS0FBS3pLLEtBQUwsQ0FBV3NELHdCQUFYLENBQW9DOEYsQ0FBcEMsRUFBdUM1QyxFQUExRDtBQUNIO0FBQ0o7O0FBRUQsWUFBSWdCLGNBQWMsS0FBS0MsaUJBQUwsQ0FBdUIsS0FBS3pILEtBQUwsQ0FBV3NELHdCQUFsQyxDQUFsQjtBQUNBLFlBQUlpTCxlQUFlLEVBQW5CO0FBQ0EsWUFBSSxLQUFLdk8sS0FBTCxDQUFXd0QsZ0JBQVgsSUFBK0IsS0FBS3hELEtBQUwsQ0FBV3dELGdCQUFYLENBQTRCZ0wsaUJBQS9ELEVBQWtGO0FBQzlFRCwyQkFBZSxLQUFLdk8sS0FBTCxDQUFXd0QsZ0JBQVgsQ0FBNEJnTCxpQkFBM0M7QUFDSDtBQUNELFlBQUksS0FBS3hPLEtBQUwsQ0FBV0MsT0FBWCxJQUFzQixLQUFLRCxLQUFMLENBQVdDLE9BQVgsQ0FBbUJLLFFBQTdDLEVBQXVEO0FBQ25EaU8sMkJBQWUsS0FBS3ZPLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkssUUFBbEM7QUFDSDs7QUFHRCxlQUNJO0FBQUMsMkJBQUQsQ0FBTyxRQUFQO0FBQUE7QUFFUSxpQkFBS0UsS0FBTCxDQUFXOEwsZ0JBQVgsR0FDQTtBQUFBO0FBQUE7QUFDSSx1REFBSyxXQUFVLHNDQUFmLEVBQXNELFNBQVMsS0FBS1MsV0FBTCxDQUFpQjNDLElBQWpCLENBQXNCLElBQXRCLEVBQTRCLEtBQTVCLENBQS9ELEdBREo7QUFHSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxpRUFBZjtBQUNJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLFdBQWYsRUFBMkIsU0FBUyxLQUFLMkMsV0FBTCxDQUFpQjNDLElBQWpCLENBQXNCLElBQXRCLEVBQTRCLEtBQTVCLENBQXBDO0FBQ0ksK0RBQUssS0FBS0MsU0FBZUEsR0FBRyxzQkFBNUIsRUFBb0QsS0FBSSxPQUF4RDtBQURKLHFCQURKO0FBSUk7QUFBQTtBQUFBLDBCQUFLLFdBQVUsaUJBQWY7QUFBQTtBQUFBLHFCQUpKO0FBT0k7QUFBQTtBQUFBLDBCQUFLLFdBQVUsd0JBQWY7QUFDSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxlQUFmO0FBQ0k7QUFBQTtBQUFBLGtDQUFJLFdBQVUsZUFBZDtBQUFBO0FBQUEsNkJBREo7QUFFSTtBQUFBO0FBQUEsa0NBQUssV0FBVSxvQkFBZjtBQUNJO0FBQUE7QUFBQSxzQ0FBSyxXQUFZLG1CQUFrQixLQUFLN0osS0FBTCxDQUFXa0YsT0FBWCxJQUFvQixFQUFwQixHQUF1QixZQUF2QixHQUFvQyxFQUFHLEVBQTFFLEVBQTZFLFNBQVMsS0FBS29ILGdCQUFMLENBQXNCMUMsSUFBdEIsQ0FBMkIsSUFBM0IsRUFBaUMsU0FBakMsRUFBNEMsRUFBNUMsRUFBZ0QsS0FBaEQsQ0FBdEY7QUFDSTtBQUFBO0FBQUEsMENBQUssV0FBVSxhQUFmO0FBRVEsNkNBQUs1SixLQUFMLENBQVdrRixPQUFYLElBQW9CLEVBQXBCLEdBQ0EsdUNBQUssS0FBSzJFLFNBQWVBLEdBQUcsaUNBQTVCLEVBQStELE9BQU8sRUFBRUUsT0FBTyxFQUFULEVBQXRFLEdBREEsR0FFQyx1Q0FBSyxLQUFLRixTQUFlQSxHQUFHLGdCQUE1QixFQUE4QyxPQUFPLEVBQUVFLE9BQU8sRUFBVCxFQUFyRDtBQUpULHFDQURKO0FBUUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJKLGlDQURKO0FBWVEscUNBQUt2SyxLQUFMLENBQVcyQyxxQkFBWCxJQUFvQyxLQUFLM0MsS0FBTCxDQUFXNEMsZ0JBQVgsSUFBK0IsQ0FBbkUsR0FBcUUsRUFBckUsR0FDQztBQUFBO0FBQUEsc0NBQUssV0FBWSxtQkFBa0IsS0FBS3BDLEtBQUwsQ0FBV2tGLE9BQVgsSUFBb0IsTUFBcEIsSUFBOEIsS0FBS2xGLEtBQUwsQ0FBV21GLFVBQVgsSUFBdUIsS0FBckQsR0FBMkQsWUFBM0QsR0FBd0UsRUFBRyxFQUE5RyxFQUFpSCxTQUFTLEtBQUttSCxnQkFBTCxDQUFzQjFDLElBQXRCLENBQTJCLElBQTNCLEVBQWlDLFNBQWpDLEVBQTRDLFdBQTVDLEVBQXlELEtBQXpELENBQTFIO0FBQ0c7QUFBQTtBQUFBLDBDQUFLLFdBQVUsYUFBZjtBQUVRLDZDQUFLNUosS0FBTCxDQUFXa0YsT0FBWCxJQUFvQixNQUFwQixJQUE4QixLQUFLbEYsS0FBTCxDQUFXbUYsVUFBWCxJQUF1QixLQUFyRCxHQUNBLHVDQUFLLEtBQUswRSxTQUFlQSxHQUFHLGlDQUE1QixFQUErRCxPQUFPLEVBQUVFLE9BQU8sRUFBVCxFQUF0RSxHQURBLEdBRUMsdUNBQUssS0FBS0YsU0FBZUEsR0FBRyw4QkFBNUIsRUFBNEQsT0FBTyxFQUFFRSxPQUFPLEVBQVQsRUFBbkU7QUFKVCxxQ0FESDtBQVFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSSCxpQ0FiVDtBQTBCUSxxQ0FBS3ZLLEtBQUwsQ0FBVzJDLHFCQUFYLElBQW9DLEtBQUszQyxLQUFMLENBQVc0QyxnQkFBWCxJQUErQixDQUFuRSxHQUFxRSxFQUFyRSxHQUNDO0FBQUE7QUFBQSxzQ0FBSyxXQUFZLG1CQUFrQixLQUFLcEMsS0FBTCxDQUFXa0YsT0FBWCxJQUFvQixNQUFwQixJQUE4QixLQUFLbEYsS0FBTCxDQUFXbUYsVUFBWCxJQUF1QixNQUFyRCxHQUE0RCxZQUE1RCxHQUF5RSxFQUFHLEVBQS9HLEVBQWtILFNBQVMsS0FBS21ILGdCQUFMLENBQXNCMUMsSUFBdEIsQ0FBMkIsSUFBM0IsRUFBaUMsU0FBakMsRUFBNEMsWUFBNUMsRUFBMEQsS0FBMUQsQ0FBM0g7QUFDRztBQUFBO0FBQUEsMENBQUssV0FBVSxhQUFmO0FBRVEsNkNBQUs1SixLQUFMLENBQVdrRixPQUFYLElBQW9CLE1BQXBCLElBQThCLEtBQUtsRixLQUFMLENBQVdtRixVQUFYLElBQXVCLE1BQXJELEdBQ0EsdUNBQUssS0FBSzBFLFNBQWVBLEdBQUcsK0JBQTVCLEVBQTZELE9BQU8sRUFBRUUsT0FBTyxFQUFULEVBQXBFLEdBREEsR0FFQyx1Q0FBSyxLQUFLRixTQUFlQSxHQUFHLDRCQUE1QixFQUEwRCxPQUFPLEVBQUVFLE9BQU8sRUFBVCxFQUFqRTtBQUpULHFDQURIO0FBUUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJILGlDQTNCVDtBQXdDSTtBQUFBO0FBQUEsc0NBQUssV0FBWSxtQkFBa0IsS0FBSy9KLEtBQUwsQ0FBV2tGLE9BQVgsSUFBb0IsVUFBcEIsR0FBK0IsWUFBL0IsR0FBNEMsRUFBRyxFQUFsRixFQUFxRixTQUFTLEtBQUtvSCxnQkFBTCxDQUFzQjFDLElBQXRCLENBQTJCLElBQTNCLEVBQWlDLFNBQWpDLEVBQTRDLFVBQTVDLEVBQXdELEtBQXhELENBQTlGO0FBQ0k7QUFBQTtBQUFBLDBDQUFLLFdBQVUsYUFBZjtBQUVRLDZDQUFLNUosS0FBTCxDQUFXa0YsT0FBWCxJQUFvQixVQUFwQixHQUNBLHVDQUFLLEtBQUsyRSxTQUFlQSxHQUFHLGlDQUE1QixFQUErRCxPQUFPLEVBQUVFLE9BQU8sRUFBVCxFQUF0RSxHQURBLEdBRUMsdUNBQUssS0FBS0YsU0FBZUEsR0FBRyw4QkFBNUIsRUFBNEQsT0FBTyxFQUFFRSxPQUFPLEVBQVQsRUFBbkU7QUFKVCxxQ0FESjtBQVFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSSixpQ0F4Q0o7QUFrREk7QUFBQTtBQUFBLHNDQUFLLFdBQVksbUJBQWtCLEtBQUsvSixLQUFMLENBQVdrRixPQUFYLElBQW9CLFFBQXBCLEdBQTZCLFlBQTdCLEdBQTBDLEVBQUcsRUFBaEYsRUFBbUYsU0FBUyxLQUFLb0gsZ0JBQUwsQ0FBc0IxQyxJQUF0QixDQUEyQixJQUEzQixFQUFpQyxTQUFqQyxFQUE0QyxRQUE1QyxFQUFzRCxLQUF0RCxDQUE1RjtBQUNJO0FBQUE7QUFBQSwwQ0FBSyxXQUFVLGFBQWY7QUFFUSw2Q0FBSzVKLEtBQUwsQ0FBV2tGLE9BQVgsSUFBb0IsUUFBcEIsR0FDQSx1Q0FBSyxLQUFLMkUsU0FBZUEsR0FBRyw2QkFBNUIsRUFBMkQsT0FBTyxFQUFFRSxPQUFPLEVBQVQsRUFBbEUsR0FEQSxHQUVDLHVDQUFLLEtBQUtGLFNBQWVBLEdBQUcsMEJBQTVCLEVBQXdELE9BQU8sRUFBRUUsT0FBTyxFQUFULEVBQS9EO0FBSlQscUNBREo7QUFRSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUko7QUFsREo7QUFGSix5QkFESjtBQWlFSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxtQkFBZjtBQUNJO0FBQUE7QUFBQSxrQ0FBSSxXQUFVLGVBQWQ7QUFBQTtBQUFBLDZCQURKO0FBRUk7QUFBQTtBQUFBLGtDQUFLLFdBQVUsYUFBZjtBQUNJO0FBQUE7QUFBQSxzQ0FBUSxXQUFZLFlBQVcsS0FBSy9KLEtBQUwsQ0FBV3FGLFdBQVgsSUFBeUIsR0FBekIsR0FBOEIsV0FBOUIsR0FBNEMsRUFBRyxFQUE5RSxFQUFpRixTQUFTLEtBQUtpSCxnQkFBTCxDQUFzQjFDLElBQXRCLENBQTJCLElBQTNCLEVBQWlDLGFBQWpDLEVBQWdELEdBQWhELEVBQXFELEtBQXJELENBQTFGO0FBRVEseUNBQUs1SixLQUFMLENBQVdxRixXQUFYLElBQXlCLEdBQXpCLEdBQ0EsdUNBQUssV0FBVSxjQUFmLEVBQThCLEtBQUt3RSxTQUFlQSxHQUFHLGdDQUFyRCxHQURBLEdBRUMsdUNBQUssV0FBVSxjQUFmLEVBQThCLEtBQUtBLFNBQWVBLEdBQUcsdUNBQXJELEdBSlQ7QUFBQTtBQUFBLGlDQURKO0FBUUk7QUFBQTtBQUFBLHNDQUFRLFdBQVksWUFBVyxLQUFLN0osS0FBTCxDQUFXcUYsV0FBWCxJQUF5QixHQUF6QixHQUE4QixXQUE5QixHQUE0QyxFQUFHLEVBQTlFLEVBQWlGLFNBQVMsS0FBS2lILGdCQUFMLENBQXNCMUMsSUFBdEIsQ0FBMkIsSUFBM0IsRUFBaUMsYUFBakMsRUFBZ0QsR0FBaEQsRUFBcUQsS0FBckQsQ0FBMUY7QUFFUSx5Q0FBSzVKLEtBQUwsQ0FBV3FGLFdBQVgsSUFBeUIsR0FBekIsR0FDQSx1Q0FBSyxXQUFVLGNBQWYsRUFBOEIsS0FBS3dFLFNBQWVBLEdBQUcsZ0NBQXJELEdBREEsR0FFQyx1Q0FBSyxXQUFVLGNBQWYsRUFBOEIsS0FBS0EsU0FBZUEsR0FBRyx1Q0FBckQsR0FKVDtBQUFBO0FBQUEsaUNBUko7QUFlSTtBQUFBO0FBQUEsc0NBQVEsV0FBWSxZQUFXLEtBQUs3SixLQUFMLENBQVdxRixXQUFYLElBQXlCLEtBQXpCLEdBQWdDLFdBQWhDLEdBQThDLEVBQUcsRUFBaEYsRUFBbUYsU0FBUyxLQUFLaUgsZ0JBQUwsQ0FBc0IxQyxJQUF0QixDQUEyQixJQUEzQixFQUFpQyxhQUFqQyxFQUFnRCxLQUFoRCxFQUF1RCxLQUF2RCxDQUE1RjtBQUVRLHlDQUFLNUosS0FBTCxDQUFXcUYsV0FBWCxJQUF3QixLQUF4QixHQUNBLHVDQUFLLFdBQVUsY0FBZixFQUE4QixLQUFLd0UsU0FBZUEsR0FBRyxnQ0FBckQsR0FEQSxHQUVDLHVDQUFLLFdBQVUsY0FBZixFQUE4QixLQUFLQSxTQUFlQSxHQUFHLHVDQUFyRCxHQUpUO0FBQUE7QUFBQTtBQWZKO0FBRkoseUJBakVKO0FBMkZJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLG1CQUFmO0FBQ0k7QUFBQTtBQUFBLGtDQUFJLFdBQVUsZUFBZDtBQUFBO0FBQUEsNkJBREo7QUFFSTtBQUFBO0FBQUEsa0NBQUssV0FBVSxhQUFmO0FBQ0k7QUFBQTtBQUFBLHNDQUFRLFdBQVksWUFBVyxLQUFLN0osS0FBTCxDQUFXb0YsWUFBWCxJQUEyQixLQUFLcEYsS0FBTCxDQUFXb0YsWUFBWCxDQUF3Qi9ELE1BQW5ELElBQTZELEtBQUtyQixLQUFMLENBQVdvRixZQUFYLENBQXdCdUksT0FBeEIsQ0FBZ0MsR0FBaEMsSUFBdUMsQ0FBQyxDQUFyRyxHQUF5RyxXQUF6RyxHQUF1SCxFQUFHLEVBQXpKLEVBQTRKLFNBQVMsS0FBS3JCLGdCQUFMLENBQXNCMUMsSUFBdEIsQ0FBMkIsSUFBM0IsRUFBaUMsY0FBakMsRUFBaUQsR0FBakQsRUFBc0QsSUFBdEQsQ0FBcks7QUFBQTtBQUFBLGlDQURKO0FBRUk7QUFBQTtBQUFBLHNDQUFRLFdBQVksWUFBVyxLQUFLNUosS0FBTCxDQUFXb0YsWUFBWCxJQUEyQixLQUFLcEYsS0FBTCxDQUFXb0YsWUFBWCxDQUF3Qi9ELE1BQW5ELElBQTZELEtBQUtyQixLQUFMLENBQVdvRixZQUFYLENBQXdCdUksT0FBeEIsQ0FBZ0MsR0FBaEMsSUFBdUMsQ0FBQyxDQUFyRyxHQUF5RyxXQUF6RyxHQUF1SCxFQUFHLEVBQXpKLEVBQTRKLFNBQVMsS0FBS3JCLGdCQUFMLENBQXNCMUMsSUFBdEIsQ0FBMkIsSUFBM0IsRUFBaUMsY0FBakMsRUFBaUQsR0FBakQsRUFBc0QsSUFBdEQsQ0FBcks7QUFBQTtBQUFBLGlDQUZKO0FBR0k7QUFBQTtBQUFBLHNDQUFRLFdBQVksWUFBVyxLQUFLNUosS0FBTCxDQUFXb0YsWUFBWCxJQUEyQixLQUFLcEYsS0FBTCxDQUFXb0YsWUFBWCxDQUF3Qi9ELE1BQW5ELElBQTZELEtBQUtyQixLQUFMLENBQVdvRixZQUFYLENBQXdCdUksT0FBeEIsQ0FBZ0MsR0FBaEMsSUFBdUMsQ0FBQyxDQUFyRyxHQUF5RyxXQUF6RyxHQUF1SCxFQUFHLEVBQXpKLEVBQTRKLFNBQVMsS0FBS3JCLGdCQUFMLENBQXNCMUMsSUFBdEIsQ0FBMkIsSUFBM0IsRUFBaUMsY0FBakMsRUFBaUQsR0FBakQsRUFBc0QsSUFBdEQsQ0FBcks7QUFBQTtBQUFBO0FBSEo7QUFGSix5QkEzRko7QUFtR0k7QUFBQTtBQUFBLDhCQUFLLFdBQVUsbUJBQWY7QUFDSTtBQUFBO0FBQUEsa0NBQUksV0FBVSxlQUFkO0FBQUE7QUFBQSw2QkFESjtBQUVJO0FBQUE7QUFBQSxrQ0FBSyxXQUFVLDZCQUFmO0FBQ0k7QUFBQTtBQUFBLHNDQUFRLFdBQVksWUFBVyxLQUFLNUosS0FBTCxDQUFXc0YsVUFBWCxHQUF3QixXQUF4QixHQUFzQyxFQUFHLEVBQXhFLEVBQTJFLFNBQVMsS0FBS2dILGdCQUFMLENBQXNCMUMsSUFBdEIsQ0FBMkIsSUFBM0IsRUFBaUMsWUFBakMsRUFBK0MsQ0FBQyxLQUFLNUosS0FBTCxDQUFXc0YsVUFBM0QsRUFBdUUsS0FBdkUsQ0FBcEY7QUFBQTtBQUFBLGlDQURKO0FBRUk7QUFBQTtBQUFBLHNDQUFRLFdBQVksWUFBVyxLQUFLdEYsS0FBTCxDQUFXdUYsU0FBWCxHQUF1QixXQUF2QixHQUFxQyxFQUFHLEVBQXZFLEVBQTBFLFNBQVMsS0FBSytHLGdCQUFMLENBQXNCMUMsSUFBdEIsQ0FBMkIsSUFBM0IsRUFBaUMsV0FBakMsRUFBOEMsQ0FBQyxLQUFLNUosS0FBTCxDQUFXdUYsU0FBMUQsRUFBcUUsS0FBckUsQ0FBbkY7QUFBQTtBQUFBO0FBRko7QUFGSjtBQW5HSixxQkFQSjtBQWtISTtBQUFBO0FBQUEsMEJBQUssV0FBVSxvQkFBZjtBQUNJO0FBQUE7QUFBQSw4QkFBUSxXQUFVLG9CQUFsQixFQUF1QyxTQUFTLEtBQUtnSCxXQUFMLENBQWlCM0MsSUFBakIsQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsQ0FBaEQ7QUFBQTtBQUFBLHlCQURKO0FBRUk7QUFBQTtBQUFBLDhCQUFRLFdBQVUsb0NBQWxCLEVBQXVELFNBQVMsS0FBS25GLFlBQUwsQ0FBa0JtRixJQUFsQixDQUF1QixJQUF2QixDQUFoRTtBQUFBO0FBQUE7QUFGSjtBQWxISjtBQUhKLGFBREEsR0EySFMsRUE3SGpCO0FBK0hJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLG9DQUFmLEVBQW9ELElBQUcsWUFBdkQ7QUFDSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxvQ0FBZjtBQUNJO0FBQUE7QUFBQSwwQkFBUyxXQUFVLG1CQUFuQjtBQUNJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLDBCQUFmO0FBQ0k7QUFBQTtBQUFBLGtDQUFLLFdBQVUsMkNBQWY7QUFDSTtBQUFBO0FBQUEsc0NBQUcsV0FBVSxpQkFBYjtBQUVLLHlDQUFLcEssS0FBTCxDQUFXK0osS0FGaEI7QUFBQTtBQUVnQ3ZDLGtEQUFjLE1BQWQsR0FBdUIsRUFGdkQ7QUFFMkRBLCtDQUYzRDtBQUtRK0csbURBQ0k7QUFBQTtBQUFBLDBDQUFNLFNBQVMsS0FBS1gsWUFBTCxDQUFrQnhELElBQWxCLENBQXVCLElBQXZCLENBQWY7QUFBZ0QsK0NBQU1tRSxZQUFhLEVBQW5FO0FBQXFFLCtFQUFLLE9BQU8sRUFBRWhFLE9BQU8sTUFBVCxFQUFpQmtFLFFBQVEsTUFBekIsRUFBaUNDLFlBQVksS0FBN0MsRUFBWixFQUFrRSxLQUFLckUsU0FBZUEsR0FBRyw4QkFBekY7QUFBckUscUNBREosR0FHTTtBQVJkO0FBREosNkJBREo7QUFjSTtBQUFBO0FBQUEsa0NBQUssV0FBVSwwQkFBZjtBQUNJO0FBQUE7QUFBQSxzQ0FBSSxXQUFVLGFBQWQ7QUFDSTtBQUFBO0FBQUEsMENBQUksV0FBVSwwQkFBZDtBQUNJO0FBQUE7QUFBQSw4Q0FBTSxPQUFPLEVBQUVzRSxRQUFRLFNBQVYsRUFBYixFQUFvQyxTQUFTLEtBQUt6QixVQUFMLENBQWdCOUMsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBN0M7QUFDSSxtRkFBSyxLQUFLQyxTQUFlQSxHQUFHLG1DQUE1QixFQUFpRSxPQUFPLEVBQUVFLE9BQU8sRUFBVCxFQUF4RTtBQURKO0FBREoscUNBREo7QUFPUSx5Q0FBSy9KLEtBQUwsQ0FBV2dNLFFBQVgsR0FBc0I7QUFBQTtBQUFBLDBDQUFLLFdBQVUsdUJBQWYsRUFBdUMsU0FBUyxNQUFNO0FBQ3hFLHFEQUFLeEssUUFBTCxDQUFjLEVBQUV3SyxVQUFVLEVBQVosRUFBZDtBQUNILDZDQUZxQjtBQUdsQjtBQUFBO0FBQUEsOENBQUssV0FBVSxnQkFBZixFQUFnQyxTQUFVeEgsQ0FBRCxJQUFPO0FBQzVDQSxzREFBRTRKLGVBQUY7QUFDSCxpREFGRDtBQUdJO0FBQUE7QUFBQTtBQUFJLHFEQUFLcE8sS0FBTCxDQUFXZ007QUFBZiw2Q0FISjtBQUlJO0FBQUMscUZBQUQ7QUFBQSxrREFBaUIsTUFBTSxLQUFLaE0sS0FBTCxDQUFXZ00sUUFBbEM7QUFDSSw0REFBUSxNQUFNO0FBQ1ZxQywrRUFBU0MsSUFBVCxDQUFjLEVBQUVDLEtBQUssZUFBUCxFQUF3QkMsTUFBTSx1QkFBOUIsRUFBZDtBQUNBLDZEQUFLaE4sUUFBTCxDQUFjLEVBQUV3SyxVQUFVLEVBQVosRUFBZDtBQUNILHFEQUpMO0FBS0k7QUFBQTtBQUFBLHNEQUFNLFdBQVUsYUFBaEI7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFMSjtBQUpKO0FBSGtCLHFDQUF0QixHQWlCUztBQXhCakI7QUFESiw2QkFkSjtBQTJDSTtBQUFBO0FBQUEsa0NBQUssV0FBVSx5Q0FBZixFQUF5RCxTQUFTLEtBQUtFLGlCQUFMLENBQXVCdEMsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBbEU7QUFDSTtBQUFBO0FBQUEsc0NBQUssV0FBVSxZQUFmO0FBQ0ksMkVBQUssT0FBTyxFQUFFRyxPQUFPLE1BQVQsRUFBWixFQUErQixLQUFLRixTQUFlQSxHQUFHLHFCQUF0RCxHQURKO0FBR1EseUNBQUt3QyxjQUFMLEtBQ0k7QUFBQTtBQUFBLDBDQUFHLFdBQVUsb0JBQWI7QUFBbUMsNkNBQUtBLGNBQUw7QUFBbkMscUNBREosR0FFTTtBQUxkLGlDQURKO0FBU0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRKO0FBM0NKO0FBREo7QUFESixpQkFESjtBQThEUSxxQkFBS3JNLEtBQUwsQ0FBV2lNLGlCQUFYLEdBQ0ksOEJBQUMsMEJBQUQsZUFBc0IsS0FBS3pNLEtBQTNCLElBQWtDLE9BQU9pUCxPQUFRLEtBQUtDLEtBQUwsR0FBYUQsR0FBOUQsRUFBb0UsWUFBVyxNQUEvRSxFQUFzRixVQUFVLElBQWhHLEVBQXNHLG1CQUFtQixNQUFNLEtBQUt4QixpQkFBTCxFQUEvSCxFQUF5SixjQUFjYyxZQUF2SyxJQURKLEdBRU0sRUFoRWQ7QUFvRVEscUJBQUsvTixLQUFMLENBQVdpTSxpQkFBWCxJQUFnQyxLQUFLak0sS0FBTCxDQUFXbU0sY0FBM0MsSUFBNkQsQ0FBQyxLQUFLM00sS0FBTCxDQUFXYSxRQUF6RSxHQUNJLHVDQUFLLFdBQVUsdUJBQWYsRUFBdUMsU0FBUyxNQUFNLEtBQUswTSxZQUFMLEVBQXRELEdBREosR0FFTSxFQXRFZDtBQTBFUSxxQkFBSy9NLEtBQUwsQ0FBV2lNLGlCQUFYLElBQWdDLEtBQUt6TSxLQUFMLENBQVdhLFFBQTNDLElBQXVELEtBQUtMLEtBQUwsQ0FBV21OLGtCQUFsRSxHQUNJLHVDQUFLLFdBQVUsd0JBQWYsR0FESixHQUVNLEVBNUVkO0FBK0VRakYsa0NBQVF5RyxTQUFSLE1BQXVCLEtBQUtuUCxLQUFMLENBQVcyQyxxQkFBbEMsSUFBMkQsS0FBSzNDLEtBQUwsQ0FBVzRDLGdCQUFYLElBQStCLENBQTFGLEdBQ007QUFBQTtBQUFBLHNCQUFLLFdBQVUsY0FBZjtBQUNFLDZEQUFPLFdBQVUsYUFBakIsRUFBK0IsSUFBRyxlQUFsQyxFQUFrRCxNQUFLLFVBQXZELEVBQWtFLFNBQVMsS0FBS3BDLEtBQUwsQ0FBV3FDLFVBQXRGLEVBQWtHLFVBQVUsS0FBS3dMLGFBQUwsQ0FBbUJqRSxJQUFuQixDQUF3QixJQUF4QixDQUE1RyxHQURGO0FBRUUsNkRBQU8sV0FBVSxTQUFqQixFQUEyQixTQUFRLGVBQW5DLEdBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFpQztBQUFBO0FBQUEsOEJBQUcsTUFBSyxzRkFBUixFQUErRixRQUFPLFFBQXRHO0FBQStHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBL0c7QUFBakM7QUFIRixpQkFETixHQU1NO0FBckZkO0FBL0hKLFNBREo7QUEwTkg7QUF2akJnQzs7a0JBMmpCdEJnQyxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JrQmY7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxNQUFNQSxNQUFOLFNBQXFCdk0sZ0JBQU1DLFNBQTNCLENBQXFDO0FBQ2pDQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDQSxhQUFLUSxLQUFMLEdBQWE7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FnTSxzQkFBVSxFQU5EO0FBT1Q7QUFDQUMsK0JBQW1CLEtBUlY7QUFTVEUsNEJBQWdCLEtBVFA7QUFVVGdCLGdDQUFvQjtBQUNwQjtBQVhTLFNBQWI7QUFhSDs7QUFFRHRLLDhCQUEwQnJELEtBQTFCLEVBQWlDO0FBQzdCLGFBQUtnQyxRQUFMLGNBQW1CaEMsTUFBTW1DLGNBQXpCO0FBQ0EsWUFBSW5DLE1BQU1rRyxZQUFOLElBQXNCLENBQUNsRyxNQUFNa0csWUFBTixDQUFtQnRGLFFBQW5CLENBQTRCLEtBQTVCLENBQTNCLEVBQStEO0FBQzNELGlCQUFLb0IsUUFBTCxDQUFjLEVBQUV5SyxtQkFBbUIsS0FBckIsRUFBZDtBQUNILFNBRkQsTUFFTztBQUNILGdCQUFJek0sTUFBTUMsT0FBTixJQUFpQkQsTUFBTUMsT0FBTixDQUFjSyxRQUFuQyxFQUE2QztBQUN6QyxxQkFBSzBCLFFBQUwsQ0FBYyxFQUFFeUssbUJBQW1CLEtBQXJCLEVBQWQ7QUFDSCxhQUZELE1BRU87QUFDSCxvQkFBS3pNLE1BQU1DLE9BQU4sSUFBaUJELE1BQU1DLE9BQU4sQ0FBY0ssUUFBaEMsSUFBNkNOLE1BQU1TLFdBQXZELEVBQW9FO0FBQ2hFLHlCQUFLdUIsUUFBTCxDQUFjLEVBQUV5SyxtQkFBbUIsSUFBckIsRUFBMkJFLGdCQUFnQixJQUEzQyxFQUFkO0FBQ0g7QUFDSjtBQUNKO0FBQ0Q7QUFDSDs7QUFFRHBMLHdCQUFvQjtBQUNoQixhQUFLUyxRQUFMLGNBQW1CLEtBQUtoQyxLQUFMLENBQVdtQyxjQUE5QjtBQUNBO0FBQ0EsWUFBSyxLQUFLbkMsS0FBTCxDQUFXQyxPQUFYLElBQXNCLEtBQUtELEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkssUUFBMUMsSUFBdUQsS0FBS04sS0FBTCxDQUFXUyxXQUF0RSxFQUFtRjtBQUMvRSxpQkFBS3VCLFFBQUwsQ0FBYyxFQUFFeUssbUJBQW1CLEtBQXJCLEVBQWQ7QUFDSCxTQUZELE1BRU87QUFDSCxnQkFBSSxLQUFLek0sS0FBTCxDQUFXa0csWUFBWCxJQUEyQixLQUFLbEcsS0FBTCxDQUFXa0csWUFBWCxDQUF3QnRGLFFBQXhCLENBQWlDLEtBQWpDLENBQS9CLEVBQXdFO0FBQ3BFLHFCQUFLb0IsUUFBTCxDQUFjLEVBQUV5SyxtQkFBbUIsSUFBckIsRUFBMkJFLGdCQUFnQixJQUEzQyxFQUFkO0FBQ0g7QUFDSjtBQUNKOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBbEYsc0JBQWtCdUIsaUJBQWxCLEVBQXFDO0FBQ2pDLFlBQUlBLHFCQUFxQkEsa0JBQWtCbkgsTUFBM0MsRUFBbUQ7QUFDL0MsbUJBQU9tSCxrQkFBa0JDLE1BQWxCLENBQXlCLENBQUNDLEtBQUQsRUFBUUMsSUFBUixFQUFjQyxDQUFkLEtBQW9CO0FBQ2hELG9CQUFJQSxLQUFLLENBQVQsRUFBWTtBQUNSRiw2QkFBUyxJQUFUO0FBQ0g7QUFDREEseUJBQVUsR0FBRUMsS0FBS0UsSUFBSyxFQUF0QjtBQUNBLHVCQUFPSCxLQUFQO0FBQ0gsYUFOTSxFQU1KLEVBTkksQ0FBUDtBQU9IO0FBQ0o7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFnRSxpQkFBYTtBQUNULFlBQUl6SyxNQUFKLEVBQVk7QUFDUixnQkFBSTlCLE1BQU04QixPQUFPbkMsUUFBUCxDQUFnQjZNLElBQTFCO0FBQ0EsZ0JBQUl4TSxJQUFJQyxRQUFKLENBQWEsR0FBYixDQUFKLEVBQXVCO0FBQ25CRCxzQkFBTThCLE9BQU9uQyxRQUFQLENBQWdCNk0sSUFBaEIsR0FBdUIsc0JBQTdCO0FBQ0gsYUFGRCxNQUVPO0FBQ0h4TSxzQkFBTThCLE9BQU9uQyxRQUFQLENBQWdCNk0sSUFBaEIsR0FBdUIsc0JBQTdCO0FBQ0g7QUFDRCxpQkFBS25OLEtBQUwsQ0FBV29OLFdBQVgsQ0FBdUJ6TSxHQUF2QixFQUE0QixDQUFDME0sR0FBRCxFQUFNMUwsSUFBTixLQUFlO0FBQ3ZDLG9CQUFJLENBQUMwTCxHQUFMLEVBQVU7QUFDTix5QkFBS3JMLFFBQUwsQ0FBYyxFQUFFd0ssVUFBVTdLLEtBQUsyTCxRQUFqQixFQUFkO0FBQ0g7QUFDSixhQUpEO0FBS0g7QUFDSjs7QUFFREMsbUJBQWU7QUFDWCxhQUFLdkwsUUFBTCxDQUFjLEVBQUUySyxnQkFBZ0IsS0FBbEIsRUFBeUJhLGNBQWMsRUFBdkMsRUFBZDtBQUNBLFlBQUc0QixTQUFTQyxjQUFULENBQXdCLGtCQUF4QixDQUFILEVBQStDO0FBQzNDRCxxQkFBU0MsY0FBVCxDQUF3QixrQkFBeEIsRUFBNENDLEtBQTVDLENBQWtEQyxNQUFsRCxHQUEwRCxHQUExRDtBQUNIO0FBQ0o7O0FBRUQ5Qix3QkFBb0I7QUFDaEIsYUFBS3pMLFFBQUwsQ0FBYyxFQUFFeUssbUJBQW1CLEtBQXJCLEVBQWQ7QUFDSDs7QUFFRGlCLHFCQUFpQjtBQUNiLGFBQUsxTCxRQUFMLENBQWMsRUFBRTJMLG9CQUFvQixLQUF0QixFQUE2QmxCLG1CQUFtQixLQUFoRCxFQUFkO0FBQ0g7O0FBRUQrQyxxQkFBaUI7QUFDYixZQUFJN04sT0FBTztBQUNQLHdCQUFZLGFBREwsRUFDb0IsVUFBVSx5QkFEOUIsRUFDeUQsY0FBY3VHLGNBQUlLLFNBQUosTUFBbUIsRUFEMUYsRUFDOEYsVUFBVSxDQUR4RyxFQUMyRyxTQUFTO0FBRHBILFNBQVg7QUFHQUwsc0JBQUlNLFNBQUosQ0FBYyxFQUFFN0csTUFBTUEsSUFBUixFQUFkO0FBQ0EsWUFBSTJNLGdCQUFnQixFQUFwQjtBQUNBLFlBQUksS0FBS3RPLEtBQUwsQ0FBV3NELHdCQUFYLENBQW9DekIsTUFBeEMsRUFBZ0Q7QUFDNUMsaUJBQUssSUFBSXVILElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLcEosS0FBTCxDQUFXc0Qsd0JBQVgsQ0FBb0N6QixNQUF4RCxFQUFnRXVILEdBQWhFLEVBQXFFO0FBQ2pFa0YsOEJBQWM3RCxJQUFkLENBQW1CLEtBQUt6SyxLQUFMLENBQVdzRCx3QkFBWCxDQUFvQzhGLENBQXBDLEVBQXVDNUMsRUFBMUQ7QUFDSDtBQUNKO0FBQ0QsYUFBS3hHLEtBQUwsQ0FBV2dELE9BQVgsQ0FBbUJ5SCxJQUFuQixDQUF5QixvQ0FBbUM2RCxhQUFjLEVBQTFFO0FBQ0g7O0FBRURWLG1CQUFlO0FBQ1gsYUFBSzVMLFFBQUwsQ0FBYztBQUNWd0wsMEJBQWM7QUFESixTQUFkO0FBR0E7Ozs7O0FBS0EsWUFBSUssZUFBZSxpQkFBbkI7QUFDQTs7OztBQUlBLFlBQUlsTSxPQUFPO0FBQ1Asd0JBQVksa0NBREwsRUFDeUMsVUFBVSxzQ0FEbkQsRUFDMkYsY0FBY3VHLGNBQUlLLFNBQUosTUFBbUIsRUFENUgsRUFDZ0ksVUFBVSxDQUQxSSxFQUM2SSxTQUFTLHNDQUR0SixFQUM4TCxPQUFPOUYsT0FBT25DLFFBQVAsQ0FBZ0IyRztBQURyTixTQUFYO0FBR0FpQixzQkFBSU0sU0FBSixDQUFjLEVBQUU3RyxNQUFNQSxJQUFSLEVBQWQ7QUFDQSxhQUFLM0IsS0FBTCxDQUFXZ0QsT0FBWCxDQUFtQnlILElBQW5CLENBQXdCb0QsWUFBeEI7QUFFSDs7QUFFRHZFLGFBQVM7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBSTlCLGNBQWMsS0FBS0MsaUJBQUwsQ0FBdUIsS0FBS3pILEtBQUwsQ0FBV3NELHdCQUFsQyxDQUFsQjtBQUNBLFlBQUlpTCxlQUFlLEVBQW5CO0FBQ0EsWUFBSSxLQUFLdk8sS0FBTCxDQUFXd0QsZ0JBQVgsSUFBK0IsS0FBS3hELEtBQUwsQ0FBV3dELGdCQUFYLENBQTRCZ0wsaUJBQS9ELEVBQWtGO0FBQzlFRCwyQkFBZSxLQUFLdk8sS0FBTCxDQUFXd0QsZ0JBQVgsQ0FBNEJnTCxpQkFBM0M7QUFDSDtBQUNELFlBQUksS0FBS3hPLEtBQUwsQ0FBV0MsT0FBWCxJQUFzQixLQUFLRCxLQUFMLENBQVdDLE9BQVgsQ0FBbUJLLFFBQTdDLEVBQXVEO0FBQ25EaU8sMkJBQWUsS0FBS3ZPLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkssUUFBbEM7QUFDSDs7QUFFRCxlQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLGlCQUFmLEVBQWlDLElBQUcsZUFBcEM7QUFDSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxLQUFmO0FBQ0k7QUFBQTtBQUFBLDBCQUFLLFdBQVUsUUFBZjtBQUNJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLGFBQWY7QUFDSTtBQUFBO0FBQUEsa0NBQUssV0FBVSwrQ0FBZjtBQUNJO0FBQUE7QUFBQSxzQ0FBSSxXQUFVLGFBQWQ7QUFDSTtBQUFBO0FBQUEsMENBQUksV0FBVSwwQkFBZDtBQUNJO0FBQUE7QUFBQSw4Q0FBTSxPQUFPLEVBQUVxTyxRQUFRLFNBQVYsRUFBYixFQUFvQyxTQUFTLEtBQUt6QixVQUFMLENBQWdCOUMsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBN0M7QUFDSSxtRkFBSyxLQUFLQyxTQUFlQSxHQUFHLG1DQUE1QixFQUFpRSxPQUFPLEVBQUVFLE9BQU8sRUFBVCxFQUF4RTtBQURKO0FBREoscUNBREo7QUFPUSx5Q0FBSy9KLEtBQUwsQ0FBV2dNLFFBQVgsR0FBc0I7QUFBQTtBQUFBLDBDQUFLLFdBQVUsdUJBQWYsRUFBdUMsU0FBUyxNQUFNO0FBQ3hFLHFEQUFLeEssUUFBTCxDQUFjLEVBQUV3SyxVQUFVLEVBQVosRUFBZDtBQUNILDZDQUZxQjtBQUdsQjtBQUFBO0FBQUEsOENBQUssV0FBVSxnQkFBZixFQUFnQyxTQUFVeEgsQ0FBRCxJQUFPO0FBQzVDQSxzREFBRTRKLGVBQUY7QUFDSCxpREFGRDtBQUdJO0FBQUE7QUFBQTtBQUFJLHFEQUFLcE8sS0FBTCxDQUFXZ007QUFBZiw2Q0FISjtBQUlJO0FBQUMscUZBQUQ7QUFBQSxrREFBaUIsTUFBTSxLQUFLaE0sS0FBTCxDQUFXZ00sUUFBbEM7QUFDSSw0REFBUSxNQUFNO0FBQ1ZxQywrRUFBU0MsSUFBVCxDQUFjLEVBQUVDLEtBQUssZUFBUCxFQUF3QkMsTUFBTSx1QkFBOUIsRUFBZDtBQUNBLDZEQUFLaE4sUUFBTCxDQUFjLEVBQUV3SyxVQUFVLEVBQVosRUFBZDtBQUNILHFEQUpMO0FBS0k7QUFBQTtBQUFBLHNEQUFNLFdBQVUsYUFBaEI7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFMSjtBQUpKO0FBSGtCLHFDQUF0QixHQWlCUztBQXhCakI7QUFESiw2QkFESjtBQThCSTtBQUFBO0FBQUEsa0NBQUssV0FBVSxjQUFmO0FBQ0sscUNBQUt4TSxLQUFMLENBQVcrSixLQURoQjtBQUFBO0FBQ2dDdkMsOENBQWMsS0FBZCxHQUFzQixFQUR0RDtBQUFBO0FBQzBEO0FBQUE7QUFBQSxzQ0FBTSxXQUFVLFFBQWhCO0FBQUE7QUFBMkJBO0FBQTNCLGlDQUQxRDtBQUdJO0FBQUE7QUFBQTtBQUVRLHlDQUFLaEgsS0FBTCxDQUFXaU0saUJBQVgsSUFBZ0MsS0FBaEMsR0FBd0MsRUFBeEMsR0FDTThCLGVBQWU7QUFBQTtBQUFBLDBDQUFNLFdBQVUsZUFBaEI7QUFBa0MsK0NBQU1BLFlBQWE7QUFBckQscUNBQWYsR0FBZ0YsRUFIOUY7QUFLSSwyRUFBSyxPQUFPLEVBQUVoRSxPQUFPLEVBQVQsRUFBYWtFLFFBQVEsRUFBckIsRUFBeUJDLFlBQVksQ0FBckMsRUFBd0NDLFFBQVEsU0FBaEQsRUFBWixFQUF5RSxLQUFLdEUsU0FBZUEsR0FBRyw4QkFBaEcsRUFBZ0ksU0FBUyxLQUFLdUQsWUFBTCxDQUFrQnhELElBQWxCLENBQXVCLElBQXZCLENBQXpJO0FBTEo7QUFISjtBQTlCSjtBQURKO0FBREosaUJBREo7QUFnRFEscUJBQUs1SixLQUFMLENBQVdpTSxpQkFBWCxHQUNJLEtBQUt6TSxLQUFMLENBQVdhLFFBQVgsSUFBdUIsS0FBS0wsS0FBTCxDQUFXbU4sa0JBQWxDLEdBQ0ksOEJBQUMsdUJBQUQsZUFBbUIsS0FBSzNOLEtBQXhCLElBQStCLE9BQU9pUCxPQUFRLEtBQUtDLEtBQUwsR0FBYUQsR0FBM0QsRUFBaUUsWUFBVyxNQUE1RSxFQUFtRixVQUFVLElBQTdGLEVBQW1HLG1CQUFtQixNQUFNLEtBQUt4QixpQkFBTCxFQUE1SCxFQUFzSixjQUFjYyxZQUFwSyxFQUFrTCxnQkFBZ0IvRyxXQUFsTSxFQUErTSxnQkFBZ0IsTUFBTSxLQUFLa0csY0FBTCxFQUFyTyxJQURKLEdBRU0sOEJBQUMsMEJBQUQsZUFBc0IsS0FBSzFOLEtBQTNCLElBQWtDLE9BQU9pUCxPQUFRLEtBQUtDLEtBQUwsR0FBYUQsR0FBOUQsRUFBb0UsWUFBVyxNQUEvRSxFQUFzRixVQUFVLElBQWhHLEVBQXNHLG1CQUFtQixNQUFNLEtBQUt4QixpQkFBTCxFQUEvSCxFQUF5SixjQUFjYyxZQUF2SyxJQUhWLEdBSU0sRUFwRGQ7QUF3RFEscUJBQUsvTixLQUFMLENBQVdpTSxpQkFBWCxJQUFnQyxLQUFLak0sS0FBTCxDQUFXbU0sY0FBM0MsSUFBNkQsQ0FBQyxLQUFLM00sS0FBTCxDQUFXYSxRQUF6RSxHQUNJLHVDQUFLLFdBQVUsdUJBQWYsRUFBdUMsU0FBUyxNQUFNLEtBQUswTSxZQUFMLEVBQXRELEdBREosR0FDeUYsRUF6RGpHO0FBNkRRLHFCQUFLL00sS0FBTCxDQUFXaU0saUJBQVgsSUFBZ0MsS0FBS3pNLEtBQUwsQ0FBV2EsUUFBM0MsSUFBdUQsS0FBS0wsS0FBTCxDQUFXbU4sa0JBQWxFLEdBQ0ksdUNBQUssV0FBVSx3QkFBZixHQURKLEdBRU07QUEvRGQ7QUFESixTQURKO0FBdUVIO0FBblNnQzs7a0JBdVN0QnZCLE07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hUZjs7OztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLE1BQU1xRCxhQUFOLFNBQTRCNVAsZ0JBQU1DLFNBQWxDLENBQTRDO0FBQ3hDQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDQSxhQUFLUSxLQUFMLEdBQWE7QUFDVGtQLHFCQUFTO0FBREEsU0FBYjtBQUdIOztBQUVEbk8sd0JBQW9CO0FBQ2hCLFlBQUksS0FBS3ZCLEtBQUwsQ0FBVzBQLE9BQWYsRUFBd0I7QUFDcEIsaUJBQUsxTixRQUFMLENBQWMsRUFBRTBOLFNBQVMsSUFBWCxFQUFkO0FBQ0EsaUJBQUsxUCxLQUFMLENBQVcyUCxTQUFYLENBQXFCLEtBQXJCO0FBQ0g7QUFDRDtBQUNIOztBQUVELFdBQU9DLFFBQVAsQ0FBZ0JDLEtBQWhCLEVBQXVCblAsS0FBdkIsRUFBOEJvUCxjQUFjLEVBQTVDLEVBQWdEO0FBQzVDLGVBQU8sSUFBSUMsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFxQjtBQUNwQyxnQkFBSTtBQUNBLG9CQUFJQyxjQUFjLElBQWxCO0FBQ0Esb0JBQUl4UCxNQUFNQyxHQUFOLENBQVVDLFFBQVYsQ0FBbUIsV0FBbkIsQ0FBSixFQUFxQztBQUNqQ3NQLGtDQUFjeFAsTUFBTUMsR0FBTixDQUFVd0MsS0FBVixDQUFnQixXQUFoQixFQUE2QixDQUE3QixDQUFkO0FBQ0ErTSxrQ0FBY3RHLFNBQVNzRyxXQUFULENBQWQ7QUFDSDs7QUFFRCx1REFBc0IsSUFBdEIsRUFBNEJKLFdBQTVCLEVBQXlDLElBQXpDLEVBQStDSSxXQUEvQyxFQUE0RDlNLElBQTVELENBQWtFNUMsS0FBRCxJQUFXO0FBQ3hFcVAsMEJBQU1NLFFBQU4sQ0FBZSwwQkFBYzNQLEtBQWQsQ0FBZjs7QUFFQSx3QkFBSW1FLFlBQVksSUFBaEI7QUFDQSx3QkFBSWpFLE1BQU1DLEdBQU4sQ0FBVUMsUUFBVixDQUFtQixRQUFuQixLQUFnQ0YsTUFBTUMsR0FBTixDQUFVQyxRQUFWLENBQW1CLFdBQW5CLENBQXBDLEVBQXFFO0FBQ2pFK0Qsb0NBQVlqRSxNQUFNQyxHQUFOLENBQVVpRSxXQUFWLEVBQVo7QUFDSDtBQUNELHdCQUFJeEMsT0FBTyxDQUFYO0FBQ0Esd0JBQUkwTixZQUFZMU4sSUFBaEIsRUFBc0I7QUFDbEJBLCtCQUFPd0gsU0FBU2tHLFlBQVkxTixJQUFyQixDQUFQO0FBQ0g7QUFDRCwyQkFBT3lOLE1BQU1NLFFBQU4sQ0FBZSxvQkFBUTNQLEtBQVIsRUFBZTRCLElBQWYsRUFBcUIsSUFBckIsRUFBMkJ1QyxTQUEzQixFQUFzQyxDQUFDc0csUUFBRCxFQUFXbUYsWUFBWSxLQUF2QixLQUFpQztBQUN6Riw0QkFBSUEsU0FBSixFQUFlO0FBQ1hKLG9DQUFRLEVBQUVLLFFBQVEsR0FBVixFQUFSO0FBQ0g7QUFDRCw0QkFBSTNQLE1BQU1DLEdBQU4sQ0FBVUMsUUFBVixDQUFtQixRQUFuQixLQUFnQ0YsTUFBTUMsR0FBTixDQUFVQyxRQUFWLENBQW1CLFdBQW5CLENBQXBDLEVBQXFFO0FBQ2pFLHNEQUFjRixNQUFNQyxHQUFOLENBQVV3QyxLQUFWLENBQWdCLEdBQWhCLEVBQXFCLENBQXJCLENBQWQsSUFBeUNDLElBQXpDLENBQStDbEQsVUFBRCxJQUFnQjtBQUMxREEsNkNBQWFBLGNBQWMsSUFBM0I7QUFDQThQLHdDQUFRLEVBQUU5UCxVQUFGLEVBQVI7QUFDSCw2QkFIRCxFQUdHNkUsS0FISCxDQUdVQyxDQUFELElBQU87QUFDWmdMLHdDQUFRLEVBQVI7QUFDSCw2QkFMRDtBQU1ILHlCQVBELE1BT087QUFDSEEsb0NBQVEsRUFBUjtBQUNIO0FBQ0oscUJBZHFCLENBQWYsQ0FBUDtBQWVILGlCQTFCRCxFQTBCR2pMLEtBMUJILENBMEJVQyxDQUFELElBQU87QUFDWmlMO0FBQ0gsaUJBNUJEO0FBNkJILGFBcENELENBb0NFLE9BQU9qTCxDQUFQLEVBQVU7QUFDUnNMLHdCQUFRQyxLQUFSLENBQWN2TCxDQUFkO0FBQ0FpTDtBQUNIO0FBQ0osU0F6Q00sQ0FBUDtBQTBDSDs7QUFNRDNHLGFBQVM7O0FBRUwsWUFBSSxLQUFLdEosS0FBTCxDQUFXMFAsT0FBWCxJQUFzQixLQUFLbFAsS0FBTCxDQUFXa1AsT0FBckMsRUFBOEM7QUFDMUMsbUJBQU8sOEJBQUMsa0JBQUQsRUFBa0IsS0FBSzFQLEtBQXZCLENBQVA7QUFDSDs7QUFFRCxlQUNJLDhCQUFDLGVBQUQsRUFBdUIsS0FBS0EsS0FBNUIsQ0FESjtBQUdIO0FBMUV1Qzs7QUFBdEN5UCxhLENBNkRLZSxZLEdBQWU7QUFDbEJDLFlBQVEsTUFBTTtBQURJLEM7QUFnQjFCLE1BQU1DLGtCQUFrQixDQUFDbFEsS0FBRCxFQUFRbVEsV0FBUixLQUF3QjtBQUM1Qzs7O0FBR0EsUUFBSXhRLG9CQUFvQixJQUF4QjtBQUNBLFFBQUksRUFBRXlRLGFBQUYsS0FBb0JELFdBQXhCO0FBQ0EsUUFBSUMsaUJBQWlCQSxjQUFjalAsSUFBbkMsRUFBeUM7QUFDckN4Qiw0QkFBb0J5USxjQUFjalAsSUFBbEM7QUFDSDs7QUFFRCxVQUFNO0FBQ0Y2Qix3QkFERTtBQUVGd0YseUJBRkU7QUFHRjdHLHNCQUhFO0FBSUYwTyxrQ0FKRTtBQUtGM0ssb0JBTEU7QUFNRnBFLHVCQU5FO0FBT0ZnUCx1QkFQRTtBQVFGMU8sWUFSRTtBQVNGVixzQkFURTtBQVVGWSw2QkFWRTtBQVdGZ0IsZ0NBWEU7QUFZRmYsMEJBWkU7QUFhRndPO0FBYkUsUUFjRnZRLE1BQU13USxvQkFkVjs7QUFnQkEsVUFBTTtBQUNGL0U7QUFERSxRQUVGekwsTUFBTXlRLElBRlY7O0FBSUEsVUFBTXBGLE9BQU9yTCxNQUFNMFEsZUFBbkI7QUFDQSxVQUFNLEVBQUV4QixPQUFGLEVBQVdsRyxPQUFYLEVBQW9CVyxrQkFBcEIsRUFBd0NKLEtBQXhDLEVBQStDb0gsZUFBL0MsRUFBZ0V4SCxTQUFoRSxFQUEyRTFKLE9BQTNFLEVBQW9GbVIsU0FBcEYsS0FBa0c1USxNQUFNNlEsVUFBOUc7QUFDQSxVQUFNLEVBQUU3UCxhQUFGLEVBQWlCOFAsZUFBakIsS0FBcUM5USxNQUFNK1EsbUJBQWpEOztBQUVBLFVBQU07QUFDRjVPLDZCQURFO0FBRUZDLHdCQUZFO0FBR0Y0TyxtQkFIRTtBQUlGeko7QUFKRSxRQUtGdkgsTUFBTXlRLElBTFY7O0FBT0EsV0FBTztBQUNIek4sd0JBREc7QUFFSHdGLHlCQUZHO0FBR0g3RyxzQkFIRztBQUlIME8sa0NBSkc7QUFLSGhGLFlBTEc7QUFNSHJDLGVBTkcsRUFNTVcsa0JBTk47QUFPSEosYUFQRztBQVFIb0gsdUJBUkc7QUFTSGhSLHlCQVRHO0FBVUgrRixvQkFWRztBQVdIcEUsdUJBWEc7QUFZSGdQLHVCQVpHO0FBYUgxTyxZQWJHO0FBY0h1SCxpQkFkRztBQWVIakksc0JBZkc7QUFnQkhZLDZCQWhCRztBQWlCSGdCLGdDQWpCRztBQWtCSGYsMEJBbEJHO0FBbUJIdEMsZUFuQkc7QUFvQkh1QixxQkFwQkc7QUFxQkg0UCxpQkFyQkc7QUFzQkgxQixlQXRCRztBQXVCSHpELGlCQXZCRztBQXdCSHRKLDZCQXhCRztBQXlCSG9PLHdCQXpCRztBQTBCSG5PLHdCQTFCRztBQTJCSDRPLG1CQTNCRztBQTRCSEYsdUJBNUJHO0FBNkJIdko7QUE3QkcsS0FBUDtBQWdDSCxDQXpFRDs7QUEyRUEsTUFBTTBKLHFCQUFzQnRCLFFBQUQsSUFBYztBQUNyQyxXQUFPO0FBQ0gvQyxxQkFBYSxDQUFDek0sR0FBRCxFQUFNK0QsRUFBTixLQUFheUwsU0FBUyx3QkFBWXhQLEdBQVosRUFBaUIrRCxFQUFqQixDQUFULENBRHZCO0FBRUhHLGlCQUFTLENBQUNyRSxLQUFELEVBQVE0QixJQUFSLEVBQWNzUCxXQUFkLEVBQTJCQyxXQUEzQixFQUF3Q2pOLEVBQXhDLEtBQStDeUwsU0FBUyxvQkFBUTNQLEtBQVIsRUFBZTRCLElBQWYsRUFBcUJzUCxXQUFyQixFQUFrQ0MsV0FBbEMsRUFBK0NqTixFQUEvQyxDQUFULENBRnJEO0FBR0hrTixpQ0FBeUIsQ0FBQ3RMLElBQUQsRUFBT3VMLFFBQVAsRUFBaUJDLFFBQWpCLEtBQThCM0IsU0FBUyxvQ0FBd0I3SixJQUF4QixFQUE4QnVMLFFBQTlCLEVBQXdDQyxRQUF4QyxDQUFULENBSHBEO0FBSUhDLHFDQUE2QixDQUFDQyxZQUFELEVBQWVDLFFBQWYsS0FBNEI5QixTQUFTLHdDQUE0QjZCLFlBQTVCLEVBQTBDQyxRQUExQyxDQUFULENBSnREO0FBS0hDLHlCQUFpQixNQUFNL0IsU0FBUyw2QkFBVCxDQUxwQjtBQU1INUssdUJBQWUsQ0FBQy9FLEtBQUQsRUFBUXNCLGVBQVIsS0FBNEJxTyxTQUFTLDBCQUFjM1AsS0FBZCxFQUFxQnNCLGVBQXJCLENBQVQsQ0FOeEM7QUFPSG9CLHVCQUFnQnZDLEdBQUQsSUFBU3dQLFNBQVMsMEJBQWN4UCxHQUFkLENBQVQsQ0FQckI7QUFRSDBCLHdCQUFnQixDQUFDOFAsUUFBRCxFQUFXbFEsT0FBWCxFQUFvQm1RLFVBQXBCLEtBQW1DakMsU0FBUywyQkFBZWdDLFFBQWYsRUFBeUJsUSxPQUF6QixFQUFrQ21RLFVBQWxDLENBQVQsQ0FSaEQ7QUFTSHJRLCtCQUF1QixDQUFDb1EsUUFBRCxFQUFXRSxhQUFYLEtBQTZCbEMsU0FBUyxrQ0FBc0JnQyxRQUF0QixFQUFnQ0UsYUFBaEMsQ0FBVCxDQVRqRDtBQVVIQywwQkFBbUJoTSxJQUFELElBQVU2SixTQUFTLDZCQUFpQjdKLElBQWpCLENBQVQsQ0FWekI7QUFXSHFKLG1CQUFZVSxNQUFELElBQVlGLFNBQVMsc0JBQVVFLE1BQVYsQ0FBVCxDQVhwQjtBQVlIa0MsMkJBQW1CLENBQUNDLElBQUQsRUFBT0MsVUFBUCxLQUFzQnRDLFNBQVMsOEJBQWtCcUMsSUFBbEIsRUFBd0JDLFVBQXhCLENBQVQsQ0FadEM7QUFhSDFILHNCQUFjLENBQUN0RSxHQUFELEVBQUtDLElBQUwsS0FBY3lKLFNBQVMseUJBQWExSixHQUFiLEVBQWlCQyxJQUFqQixDQUFULENBYnpCO0FBY0hnTSwyQkFBbUIsQ0FBQ3BNLElBQUQsRUFBT3VMLFFBQVAsRUFBaUJDLFFBQWpCLEVBQTJCMUwsTUFBM0IsS0FBc0MrSixTQUFTLDhCQUFrQjdKLElBQWxCLEVBQXdCdUwsUUFBeEIsRUFBa0NDLFFBQWxDLEVBQTRDMUwsTUFBNUMsQ0FBVCxDQWR0RDtBQWVIdU0sa0NBQTJCck0sSUFBRCxJQUFVNkosU0FBUyxxQ0FBeUI3SixJQUF6QixDQUFULENBZmpDO0FBZ0JIc00seUJBQWdCLE1BQU16QyxTQUFTLDZCQUFULENBaEJuQjtBQWlCSDBDLDBCQUFtQkMsSUFBRCxJQUFVM0MsU0FBUyw2QkFBaUIyQyxJQUFqQixDQUFULENBakJ6QjtBQWtCSEMsOEJBQXFCLE1BQUs1QyxTQUFTLGtDQUFULENBbEJ2QjtBQW1CSHZILDJCQUFrQixDQUFDakgsSUFBRCxFQUFNK0MsRUFBTixLQUFZeUwsU0FBUyw4QkFBa0J4TyxJQUFsQixFQUF3QitDLEVBQXhCLENBQVQsQ0FuQjNCO0FBb0JIK0QsMkJBQW1CdUssTUFBRCxJQUFXN0MsU0FBUyw4QkFBa0I2QyxNQUFsQixDQUFUO0FBcEIxQixLQUFQO0FBc0JILENBdkJEOztrQkF5QmUseUJBQVF0QyxlQUFSLEVBQXlCZSxrQkFBekIsRUFBNkNoQyxhQUE3QyxDIiwiZmlsZSI6IjU4LnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBMYWJzTGlzdCBmcm9tICcuLi9zZWFyY2hSZXN1bHRzL2xhYnNMaXN0L2luZGV4LmpzJ1xuaW1wb3J0IENyaXRlcmlhU2VhcmNoIGZyb20gJy4uLy4uL2NvbW1vbnMvY3JpdGVyaWFTZWFyY2gnXG5pbXBvcnQgVG9wQmFyIGZyb20gJy4vbmV3VG9wQmFyJ1xuaW1wb3J0IE5BVklHQVRFIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvbmF2aWdhdGUvaW5kZXguanMnO1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi8uLi9jb25maWcnXG5pbXBvcnQgSGVsbWV0VGFncyBmcm9tICcuLi8uLi9jb21tb25zL0hlbG1ldFRhZ3MnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvSG9tZS9mb290ZXInXG5pbXBvcnQgUmVzdWx0Q291bnQgZnJvbSAnLi90b3BCYXIvcmVzdWx0X2NvdW50LmpzJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bSdcbmltcG9ydCBOb25JcGRQb3B1cFZpZXcgZnJvbSAnLi4vLi4vY29tbW9ucy9ub25JcGRQb3B1cC5qcydcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5cbmNsYXNzIFNlYXJjaFJlc3VsdHNWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgbGV0IHNlb0RhdGEgPSBudWxsXG4gICAgICAgIGxldCBmb290ZXJEYXRhID0gbnVsbFxuICAgICAgICBpZiAodGhpcy5wcm9wcy5pbml0aWFsU2VydmVyRGF0YSkge1xuICAgICAgICAgICAgc2VvRGF0YSA9IHRoaXMucHJvcHMuaW5pdGlhbFNlcnZlckRhdGEuc2VvRGF0YVxuICAgICAgICAgICAgZm9vdGVyRGF0YSA9IHRoaXMucHJvcHMuaW5pdGlhbFNlcnZlckRhdGEuZm9vdGVyRGF0YVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgLy8gc2VvRGF0YSwgXG4gICAgICAgICAgICBmb290ZXJEYXRhLFxuICAgICAgICAgICAgc2VvRnJpZW5kbHk6IHRoaXMucHJvcHMubWF0Y2gudXJsLmluY2x1ZGVzKCctbGJjaXQnKSB8fCB0aGlzLnByb3BzLm1hdGNoLnVybC5pbmNsdWRlcygnLWxibGl0Y2l0JyksXG4gICAgICAgICAgICBsYWJfY2FyZDogdGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoJ2xhYl9jYXJkJykgfHwgbnVsbCxcbiAgICAgICAgICAgIHNob3dFcnJvcjogZmFsc2UsXG4gICAgICAgICAgICBzaG93Q2hhdFdpdGh1czogZmFsc2UsXG4gICAgICAgICAgICBzZWFyY2hfaWQ6ICcnLFxuICAgICAgICAgICAgc2V0U2VhcmNoSWQ6IGZhbHNlLFxuICAgICAgICAgICAgcXVpY2tGaWx0ZXI6IHt9LFxuICAgICAgICAgICAgc2hvd05vbklwZFBvcHVwOiBwYXJzZWQuc2hvd19wb3B1cCxcbiAgICAgICAgICAgIHRvX2JlX2ZvcmNlOjEsXG4gICAgICAgICAgICBpc19sZWFkX2VuYWJsZWQ6dHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5tZXJnZVVybFN0YXRlKSB7XG4gICAgICAgICAgICBsZXQgZ2V0U2VhcmNoSWQgPSB0cnVlXG4gICAgICAgICAgICAvL2lmIHNlYXJjaCBpZCBleGlzdCBpbiB1cmwgdGhlbiB3ZSBnZXQgZGF0YSBmb3IgdGhhdCBzZWFyY2ggaWQgZnJvbSBzdG9yZVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdzZWFyY2hfaWQnKSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VhcmNoX2lkX2RhdGEgJiYgdGhpcy5wcm9wcy5zZWFyY2hfaWRfZGF0YVtwYXJzZWQuc2VhcmNoX2lkXSAmJiB0aGlzLnByb3BzLnNlYXJjaF9pZF9kYXRhW3BhcnNlZC5zZWFyY2hfaWRdLmRhdGEpIHtcblxuICAgICAgICAgICAgICAgICAgICBnZXRTZWFyY2hJZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlYXJjaF9pZF9kYXRhW3BhcnNlZC5zZWFyY2hfaWRdLmRhdGEucmVzdWx0ICYmIHRoaXMucHJvcHMuc2VhcmNoX2lkX2RhdGFbcGFyc2VkLnNlYXJjaF9pZF0uZGF0YS5yZXN1bHQubGVuZ3RoICYmICF0aGlzLnByb3BzLmZldGNoTmV3UmVzdWx0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRMYWJTZWFyY2hJZFJlc3VsdHMocGFyc2VkLnNlYXJjaF9pZCwgdGhpcy5wcm9wcy5zZWFyY2hfaWRfZGF0YVtwYXJzZWQuc2VhcmNoX2lkXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hfaWQ6IHBhcnNlZC5zZWFyY2hfaWQgfSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbHRlcnMgPSB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVycy5jb21tb25TZWxlY3RlZENyaXRlcmlhcyA9IHRoaXMucHJvcHMuc2VhcmNoX2lkX2RhdGFbcGFyc2VkLnNlYXJjaF9pZF0uY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnMuZmlsdGVyQ3JpdGVyaWEgPSB0aGlzLnByb3BzLnNlYXJjaF9pZF9kYXRhW3BhcnNlZC5zZWFyY2hfaWRdLmZpbHRlckNyaXRlcmlhXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoX2lkOiBwYXJzZWQuc2VhcmNoX2lkIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKmxldCBuZXdfdXJsID0gdGhpcy5idWlsZFVSSSh0aGlzLnByb3BzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5yZXBsYWNlKG5ld191cmwpKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFnZSA9IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMucHJvcHMuZmV0Y2hOZXdSZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2UgPSBwYXJzZWQucGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNldExhYlNlYXJjaElkKHBhcnNlZC5zZWFyY2hfaWQsIGZpbHRlcnMsIHBhZ2UgfHwgMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChnZXRTZWFyY2hJZCkge1xuICAgICAgICAgICAgICAgIC8vSWYgbm8gc2VhcmNoSWQgaW4gdXJsIHRoZW4gd2UgY3JlYXRlIHNlYXJjaCBpZCBhbmQgc3RvcmUgZGF0YSBjb3JyZXNwb25kaW5nIHRvIHRoYXQgc2VhcmNoIGlkXG4gICAgICAgICAgICAgICAgbGV0IGZpbHRlcnMgPSB7fVxuICAgICAgICAgICAgICAgIGZpbHRlcnMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMgPSB0aGlzLnByb3BzLm5leHRTZWxlY3RlZENyaXRlcmlhc1xuICAgICAgICAgICAgICAgIGZpbHRlcnMuZmlsdGVyQ3JpdGVyaWEgPSB0aGlzLnByb3BzLm5leHRGaWx0ZXJDcml0ZXJpYVxuICAgICAgICAgICAgICAgIGxldCBzZWFyY2hfaWQgPSB0aGlzLmdlbmVyYXRlU2VhcmNoSWQoKVxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hfaWQ6IHNlYXJjaF9pZCB9LCAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9DaGVjayBpZiB1c2VyIGluc3VyZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNfbG9naW5fdXNlcl9pbnN1cmVkICYmIHRoaXMucHJvcHMuaW5zdXJhbmNlX3N0YXR1cyA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzLmZpbHRlckNyaXRlcmlhID0geyAuLi5maWx0ZXJzLmZpbHRlckNyaXRlcmlhIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnMuZmlsdGVyQ3JpdGVyaWEuaXNfaW5zdXJlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdfdXJsID0gdGhpcy5idWlsZFVSSSh0aGlzLnByb3BzKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucmVwbGFjZShuZXdfdXJsKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNldExhYlNlYXJjaElkKHNlYXJjaF9pZCwgZmlsdGVycywgcGFyc2VkLnBhZ2UgfHwgMSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5mZXRjaE5ld1Jlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAvL3RoaXMuZ2V0TGFiTGlzdCh0aGlzLnByb3BzKVxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNlb0ZyaWVuZGx5KSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldEZvb3RlckRhdGEodGhpcy5wcm9wcy5tYXRjaC51cmwuc3BsaXQoJy8nKVsxXSkudGhlbigoZm9vdGVyRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmb290ZXJEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb290ZXJEYXRhOiBmb290ZXJEYXRhIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q2hhdFdpdGh1czogdHJ1ZSB9KVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICAgICAgbGV0IHNlYXJjaF9pZCA9ICcnXG4gICAgICAgIGxldCBwYWdlID0gMVxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZShwcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGlmIChwcm9wcy5sb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoJ3NlYXJjaF9pZCcpKSB7XG4gICAgICAgICAgICBzZWFyY2hfaWQgPSBwYXJzZWQuc2VhcmNoX2lkXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5zZWFyY2hfaWQpIHtcbiAgICAgICAgICAgIHNlYXJjaF9pZCA9IHRoaXMuc3RhdGUuc2VhcmNoX2lkXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnNlZC5wYWdlKSB7XG4gICAgICAgICAgICBwYWdlID0gcGFyc2VkLnBhZ2UgfHwgMVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BzLm1lcmdlVXJsU3RhdGUgJiYgcHJvcHMubWVyZ2VVcmxTdGF0ZSAhPSB0aGlzLnByb3BzLm1lcmdlVXJsU3RhdGUpIHtcbiAgICAgICAgICAgIGxldCBmaWx0ZXJzID0ge31cbiAgICAgICAgICAgIGZpbHRlcnMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMgPSBwcm9wcy5jdXJyZW50U2VhcmNoZWRDcml0ZXJpYXNcbiAgICAgICAgICAgIGZpbHRlcnMuZmlsdGVyQ3JpdGVyaWEgPSBwcm9wcy5maWx0ZXJDcml0ZXJpYVxuICAgICAgICAgICAgaWYgKHNlYXJjaF9pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hfaWQ6IHNlYXJjaF9pZCB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdfdXJsID0gdGhpcy5idWlsZFVSSShwcm9wcylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UobmV3X3VybClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRMYWJTZWFyY2hJZChzZWFyY2hfaWQsIGZpbHRlcnMsIHBhZ2UpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VhcmNoX2lkID0gdGhpcy5nZW5lcmF0ZVNlYXJjaElkKClcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoX2lkOiBzZWFyY2hfaWQgfSwgKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vQ2hlY2sgaWYgdXNlciBpbnN1cmVkXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wcy5pc19sb2dpbl91c2VyX2luc3VyZWQgJiYgcHJvcHMuaW5zdXJhbmNlX3N0YXR1cyA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzLmZpbHRlckNyaXRlcmlhID0geyAuLi5maWx0ZXJzLmZpbHRlckNyaXRlcmlhIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnMuZmlsdGVyQ3JpdGVyaWEuaXNfaW5zdXJlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdfdXJsID0gdGhpcy5idWlsZFVSSShwcm9wcylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UobmV3X3VybClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRMYWJTZWFyY2hJZChzZWFyY2hfaWQsIGZpbHRlcnMsIHBhZ2UpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BzLmZldGNoTmV3UmVzdWx0cyAmJiAocHJvcHMuZmV0Y2hOZXdSZXN1bHRzICE9IHRoaXMucHJvcHMuZmV0Y2hOZXdSZXN1bHRzKSAmJiB0aGlzLnN0YXRlLnNlYXJjaF9pZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNldFNlYXJjaElkOiB0cnVlIH0pXG4gICAgICAgICAgICB0aGlzLmdldExhYkxpc3QocHJvcHMpXG4gICAgICAgICAgICAvLyBpZiAod2luZG93KSB7XG4gICAgICAgICAgICAvLyAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcHMuZmV0Y2hOZXdSZXN1bHRzICYmIHRoaXMuc3RhdGUuc2VhcmNoX2lkID09IHNlYXJjaF9pZCAmJiAhdGhpcy5zdGF0ZS5zZXRTZWFyY2hJZCAmJiB0aGlzLnN0YXRlLnNlYXJjaF9pZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNldFNlYXJjaElkOiB0cnVlIH0pXG4gICAgICAgICAgICB0aGlzLmdldExhYkxpc3QocHJvcHMpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL1doZW5ldmVyIGxvY2F0aW9uIGNoYW5nZXMgbWFrZSBhcGkgY2FsbHNcbiAgICAgICAgICAgIGlmIChwcm9wcy5zZWxlY3RlZExvY2F0aW9uICE9IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiAmJiBwcm9wcy5tZXJnZVVybFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld191cmwgPSB0aGlzLmJ1aWxkVVJJKHByb3BzKVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5yZXBsYWNlKG5ld191cmwpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZW5lcmF0ZVNlYXJjaElkKHVpZF9zdHJpbmcpIHtcbiAgICAgICAgLy9tZXRob2QgdG8gZ2VuZXJhdGUgc2VhcmNoIGlkXG4gICAgICAgIHVpZF9zdHJpbmcgPSAneHh5eXh4eHgteHh5eC00eHh4LXl4eHgteHh4eXl5eHh4eHh4J1xuICAgICAgICB2YXIgZHQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIHV1aWQgPSB1aWRfc3RyaW5nLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHZhciByID0gKGR0ICsgTWF0aC5yYW5kb20oKSAqIDE2KSAlIDE2IHwgMDtcbiAgICAgICAgICAgIGR0ID0gTWF0aC5mbG9vcihkdCAvIDE2KTtcbiAgICAgICAgICAgIHJldHVybiAoYyA9PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpKS50b1N0cmluZygxNik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdXVpZDtcbiAgICB9XG5cbiAgICBnZXRMb2NhdGlvblBhcmFtKHRhZykge1xuICAgICAgICAvLyB0aGlzIEFQSSBhc3N1bWVzIHRoZSBjb250ZXh0IG9mIHJlYWN0LXJvdXRlci00XG4gICAgICAgIGNvbnN0IHBhcmFtU3RyaW5nID0gdGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2hcbiAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhwYXJhbVN0cmluZylcbiAgICAgICAgcmV0dXJuIHBhcmFtcy5nZXQodGFnKVxuICAgIH1cblxuICAgIGdldExhYkxpc3Qoc3RhdGUgPSBudWxsLCBwYWdlID0gbnVsbCwgY2IgPSBudWxsKSB7XG4gICAgICAgIC8vYXBwbHkgZmlsdGVycyBhbmQgZ2V0IHVwZGF0ZWQgZGF0YVxuICAgICAgICBsZXQgc2VhcmNoVXJsID0gbnVsbFxuICAgICAgICBpZiAodGhpcy5wcm9wcy5tYXRjaC51cmwuaW5jbHVkZXMoJy1sYmNpdCcpIHx8IHRoaXMucHJvcHMubWF0Y2gudXJsLmluY2x1ZGVzKCctbGJsaXRjaXQnKSkge1xuICAgICAgICAgICAgc2VhcmNoVXJsID0gdGhpcy5wcm9wcy5tYXRjaC51cmwudG9Mb3dlckNhc2UoKVxuICAgICAgICB9XG4gICAgICAgIGlmIChwYWdlID09PSBudWxsKSB7XG4gICAgICAgICAgICBwYWdlID0gdGhpcy5wcm9wcy5wYWdlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUgPSB0aGlzLnByb3BzXG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUucGFnZSkge1xuICAgICAgICAgICAgcGFnZSA9IHN0YXRlLnBhZ2VcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLmdldExhYnMoc3RhdGUsIHBhZ2UsIGZhbHNlLCBzZWFyY2hVcmwsICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHsgc2VvRGF0YTogYXJnc1sxXSB9KVxuICAgICAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgICAgICAgY2IoLi4uYXJncylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld191cmwgPSB0aGlzLmJ1aWxkVVJJKHN0YXRlKVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5yZXBsYWNlKG5ld191cmwpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0Vycm9yOiB0cnVlIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYXBwbHlGaWx0ZXJzKGZpbHRlclN0YXRlKSB7XG4gICAgICAgIC8vIGNsZWFyIExBTkRJTkdfUEFHRSB0byBlbmFibGUgbG9hZGVyXG4gICAgICAgIC8vYXBwbHkgZmlsdGVycyBcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5PTl9MQU5ESU5HX1BBR0UgPSBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXNldFF1aWNrRmlsdGVycygpXG4gICAgICAgIGxldCBzZWFyY2hfaWRfZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMuc2VhcmNoX2lkX2RhdGEpXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlYXJjaF9pZF9kYXRhICYmIHRoaXMuc3RhdGUuc2VhcmNoX2lkICYmIHRoaXMucHJvcHMuc2VhcmNoX2lkX2RhdGFbdGhpcy5zdGF0ZS5zZWFyY2hfaWRdKSB7XG4gICAgICAgICAgICBzZWFyY2hfaWRfZGF0YVt0aGlzLnN0YXRlLnNlYXJjaF9pZF0uZmlsdGVyQ3JpdGVyaWEgPSBmaWx0ZXJTdGF0ZVxuICAgICAgICAgICAgc2VhcmNoX2lkX2RhdGFbdGhpcy5zdGF0ZS5zZWFyY2hfaWRdLnBhZ2UgPSAxXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5tZXJnZUxBQlN0YXRlKHsgZmlsdGVyQ3JpdGVyaWE6IGZpbHRlclN0YXRlLCBzZWFyY2hfaWRfZGF0YTogc2VhcmNoX2lkX2RhdGEsIHBhZ2U6IDEgfSlcbiAgICAgICAgLy90aGlzLnByb3BzLnNldExhYlNlYXJjaElkKHRoaXMuc3RhdGUuc2VhcmNoX2lkLCBmaWx0ZXJTdGF0ZSwgZmFsc2UpXG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNGaWx0ZXJBcHBsaWVkKGZpbHRlckNyaXRlcmlhKXtcbiAgICAgICAgLy9jaGVjayBpZiBhbnkgZmlsdGVycyBhcHBsaWVkIHRvIHRoZSBzZWFyY2hcbiAgICAgICAgbGV0IGlzX2ZpbHRlcl9hcHBsaWVkID0gZmFsc2VcbiAgICAgICAgaWYoZmlsdGVyQ3JpdGVyaWEpe1xuICAgICAgICAgICAgbGV0IHNvcnRfb24gPSBmaWx0ZXJDcml0ZXJpYS5zb3J0X29uIHx8IFwiXCJcbiAgICAgICAgICAgIGxldCBzb3J0X29yZGVyID0gZmlsdGVyQ3JpdGVyaWEuc29ydF9vcmRlciB8fCBcIlwiXG4gICAgICAgICAgICBsZXQgYXZhaWxhYmlsaXR5ID0gZmlsdGVyQ3JpdGVyaWEuYXZhaWxhYmlsaXR5IHx8IFtdXG4gICAgICAgICAgICBsZXQgYXZnX3JhdGluZ3MgPSBmaWx0ZXJDcml0ZXJpYS5hdmdfcmF0aW5ncyB8fCAnJ1xuICAgICAgICAgICAgbGV0IGhvbWVfdmlzaXQgPSBmaWx0ZXJDcml0ZXJpYS5ob21lX3Zpc2l0IHx8IGZhbHNlXG4gICAgICAgICAgICBsZXQgbGFiX3Zpc2l0ID0gZmlsdGVyQ3JpdGVyaWEubGFiX3Zpc2l0IHx8IGZhbHNlXG5cbiAgICAgICAgICAgIGxldCBsYWJfbmFtZSA9IGZpbHRlckNyaXRlcmlhLmxhYl9uYW1lIHx8IFwiXCJcbiAgICAgICAgICAgIGxldCBuZXR3b3JrX2lkID0gZmlsdGVyQ3JpdGVyaWEubmV0d29ya19pZCB8fCBcIlwiXG4gICAgICAgICAgICBsZXQgaXNfaW5zdXJlZCA9IGZpbHRlckNyaXRlcmlhLmlzX2luc3VyZWQgfHwgZmFsc2VcblxuICAgICAgICAgICAgLy9DaGVjayBpZiBhbnkgZmlsdGVyIGFwcGxpZWQgICAgICAgIFxuXG4gICAgICAgICAgICBpZiAoc29ydF9vbikge1xuICAgICAgICAgICAgICAgIGlzX2ZpbHRlcl9hcHBsaWVkID0gdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihhdmFpbGFiaWxpdHkgJiYgYXZhaWxhYmlsaXR5Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlzX2ZpbHRlcl9hcHBsaWVkID0gdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihhdmdfcmF0aW5ncyAmJiBhdmdfcmF0aW5ncy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpc19maWx0ZXJfYXBwbGllZCA9IHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoaG9tZV92aXNpdCkge1xuICAgICAgICAgICAgICAgIGlzX2ZpbHRlcl9hcHBsaWVkID0gdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihsYWJfdmlzaXQpIHtcbiAgICAgICAgICAgICAgICBpc19maWx0ZXJfYXBwbGllZCA9IHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc19maWx0ZXJfYXBwbGllZFxuICAgIH1cblxuICAgIGJ1aWxkVVJJKHN0YXRlKSB7XG4gICAgICAgIC8va2VlcCBvbiB1cGRhdGluZyB1cmwgd2l0aCB0aGUgdXBkYXRlZCBmaWx0ZXJzIFxuICAgICAgICBsZXQgeyBzZWxlY3RlZExvY2F0aW9uLCBjdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMsIGZpbHRlckNyaXRlcmlhLCBsb2NhdGlvblR5cGUsIHBhZ2UgfSA9IHN0YXRlXG4gICAgICAgIGxldCB0ZXN0SWRzID0gY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAndGVzdCcpLm1hcCh4ID0+IHguaWQpXG5cbiAgICAgICAgbGV0IGxhdCA9IDI4LjY0NDgwMFxuICAgICAgICBsZXQgbG9uZyA9IDc3LjIxNjcyMVxuICAgICAgICBsZXQgcGxhY2VfaWQgPSBcIlwiXG5cbiAgICAgICAgaWYgKHNlbGVjdGVkTG9jYXRpb24pIHtcbiAgICAgICAgICAgIHBsYWNlX2lkID0gc2VsZWN0ZWRMb2NhdGlvbi5wbGFjZV9pZCB8fCBcIlwiXG4gICAgICAgICAgICBsYXQgPSBzZWxlY3RlZExvY2F0aW9uLmdlb21ldHJ5LmxvY2F0aW9uLmxhdFxuICAgICAgICAgICAgbG9uZyA9IHNlbGVjdGVkTG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubG5nXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxhdCA9PT0gJ2Z1bmN0aW9uJykgbGF0ID0gbGF0KClcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbG9uZyA9PT0gJ2Z1bmN0aW9uJykgbG9uZyA9IGxvbmcoKVxuXG4gICAgICAgICAgICBsYXQgPSBwYXJzZUZsb2F0KHBhcnNlRmxvYXQobGF0KS50b0ZpeGVkKDYpKVxuICAgICAgICAgICAgbG9uZyA9IHBhcnNlRmxvYXQocGFyc2VGbG9hdChsb25nKS50b0ZpeGVkKDYpKVxuICAgICAgICB9XG4vKlxuICAgICAgICBsZXQgbWluX2Rpc3RhbmNlID0gZmlsdGVyQ3JpdGVyaWEuZGlzdGFuY2VSYW5nZVswXVxuICAgICAgICBsZXQgbWF4X2Rpc3RhbmNlID0gZmlsdGVyQ3JpdGVyaWEuZGlzdGFuY2VSYW5nZVsxXVxuICAgICAgICBsZXQgbWluX3ByaWNlID0gZmlsdGVyQ3JpdGVyaWEucHJpY2VSYW5nZVswXVxuICAgICAgICBsZXQgbWF4X3ByaWNlID0gZmlsdGVyQ3JpdGVyaWEucHJpY2VSYW5nZVsxXVxuICAgICAgICBsZXQgc29ydF9vbiA9IGZpbHRlckNyaXRlcmlhLnNvcnRfb24gfHwgXCJcIlxuKi9cbiAgICAgICAgbGV0IHNvcnRfb24gPSBmaWx0ZXJDcml0ZXJpYS5zb3J0X29uIHx8IFwiXCJcbiAgICAgICAgbGV0IHNvcnRfb3JkZXIgPSBmaWx0ZXJDcml0ZXJpYS5zb3J0X29yZGVyIHx8IFwiXCJcbiAgICAgICAgbGV0IGF2YWlsYWJpbGl0eSA9IGZpbHRlckNyaXRlcmlhLmF2YWlsYWJpbGl0eSB8fCBbXVxuICAgICAgICBsZXQgYXZnX3JhdGluZ3MgPSBmaWx0ZXJDcml0ZXJpYS5hdmdfcmF0aW5ncyB8fCAnJ1xuICAgICAgICBsZXQgaG9tZV92aXNpdCA9IGZpbHRlckNyaXRlcmlhLmhvbWVfdmlzaXQgfHwgZmFsc2VcbiAgICAgICAgbGV0IGxhYl92aXNpdCA9IGZpbHRlckNyaXRlcmlhLmxhYl92aXNpdCB8fCBmYWxzZVxuXG4gICAgICAgIGxldCBsYWJfbmFtZSA9IGZpbHRlckNyaXRlcmlhLmxhYl9uYW1lIHx8IFwiXCJcbiAgICAgICAgbGV0IG5ldHdvcmtfaWQgPSBmaWx0ZXJDcml0ZXJpYS5uZXR3b3JrX2lkIHx8IFwiXCJcbiAgICAgICAgbGV0IGlzX2luc3VyZWQgPSBmaWx0ZXJDcml0ZXJpYS5pc19pbnN1cmVkIHx8IGZhbHNlXG5cblxuICAgICAgICBsZXQgdXJsID0gJydcbiAgICAgICAgLy9DaGVjayBpZiBhbnkgZmlsdGVyIGFwcGxpZWQgXG4gICAgICAgIGxldCBpc19maWx0ZXJfYXBwbGllZCA9IGZhbHNlXG5cbiAgICAgICAgaWYgKHNvcnRfb24pIHtcbiAgICAgICAgICAgIGlzX2ZpbHRlcl9hcHBsaWVkID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoYXZhaWxhYmlsaXR5ICYmIGF2YWlsYWJpbGl0eS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlzX2ZpbHRlcl9hcHBsaWVkID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoYXZnX3JhdGluZ3MgJiYgYXZnX3JhdGluZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICBpc19maWx0ZXJfYXBwbGllZCA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGhvbWVfdmlzaXQpIHtcbiAgICAgICAgICAgIGlzX2ZpbHRlcl9hcHBsaWVkID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYobGFiX3Zpc2l0KSB7XG4gICAgICAgICAgICBpc19maWx0ZXJfYXBwbGllZCA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsYWJfbmFtZSkge1xuICAgICAgICAgICAgaXNfZmlsdGVyX2FwcGxpZWQgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV0d29ya19pZCkge1xuICAgICAgICAgICAgaXNfZmlsdGVyX2FwcGxpZWQgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXNfcGFyYW1zX2V4aXN0ID0gZmFsc2VcblxuICAgICAgICBpZiAoaXNfZmlsdGVyX2FwcGxpZWQgfHwgIXRoaXMuc3RhdGUuc2VvRnJpZW5kbHkpIHtcblxuICAgICAgICAgICAgdXJsID0gYCR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfT90ZXN0X2lkcz0ke3Rlc3RJZHMgfHwgXCJcIn0mbGF0PSR7bGF0fSZsb25nPSR7bG9uZ30mc29ydF9vbj0ke3NvcnRfb259JnNvcnRfb3JkZXI9JHtzb3J0X29yZGVyfSZhdmFpbGFiaWxpdHk9JHthdmFpbGFiaWxpdHl9JmhvbWVfdmlzaXQ9JHtob21lX3Zpc2l0fSZsYWJfdmlzaXQ9JHtsYWJfdmlzaXR9JmF2Z19yYXRpbmdzPSR7YXZnX3JhdGluZ3N9JmxhYl9uYW1lPSR7bGFiX25hbWV9JnBsYWNlX2lkPSR7cGxhY2VfaWR9JmxvY2F0aW9uVHlwZT0ke2xvY2F0aW9uVHlwZSB8fCBcIlwifSZuZXR3b3JrX2lkPSR7bmV0d29ya19pZH0mc2VhcmNoX2lkPSR7dGhpcy5zdGF0ZS5zZWFyY2hfaWR9JmlzX2luc3VyZWQ9JHtpc19pbnN1cmVkfWBcbiAgICAgICAgICAgIGlzX3BhcmFtc19leGlzdCA9IHRydWVcblxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuc2VvRnJpZW5kbHkpIHtcbiAgICAgICAgICAgIHVybCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX1gXG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLnN0YXRlLnNob3dOb25JcGRQb3B1cCl7XG4gICAgICAgICAgICB1cmwgKz0gYCR7JyZzaG93X3BvcHVwPScrIHRoaXMuc3RhdGUuc2hvd05vbklwZFBvcHVwfWBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmxhYl9jYXJkKSB7XG4gICAgICAgICAgICB1cmwgKz0gYCR7aXNfcGFyYW1zX2V4aXN0ID8gJyYnIDogJz8nfWxhYl9jYXJkPXRydWVgXG4gICAgICAgICAgICBpc19wYXJhbXNfZXhpc3QgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFnZSA+IDEpIHtcbiAgICAgICAgICAgIHVybCArPSBgJHtpc19wYXJhbXNfZXhpc3QgPyAnJicgOiAnPyd9cGFnZT0ke3BhZ2V9YFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVybFxuICAgIH1cblxuICAgIGdldE1ldGFUYWdzRGF0YShzZW9EYXRhKSB7XG4gICAgICAgIGxldCB0aXRsZSA9IFwiTGFiIFNlYXJjaFwiXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNlb0ZyaWVuZGx5KSB7XG4gICAgICAgICAgICB0aXRsZSA9IFwiXCJcbiAgICAgICAgfVxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBcIlwiXG4gICAgICAgIGlmIChzZW9EYXRhKSB7XG4gICAgICAgICAgICB0aXRsZSA9IHNlb0RhdGEudGl0bGUgfHwgXCJcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb24gPSBzZW9EYXRhLmRlc2NyaXB0aW9uIHx8IFwiXCJcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24gfVxuICAgIH1cblxuICAgIHJlc2V0UXVpY2tGaWx0ZXJzKCl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3F1aWNrRmlsdGVyOiB7fX0pXG4gICAgfVxuXG4gICAgYXBwbHlRdWlja0ZpbHRlcihmaWx0ZXIpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cXVpY2tGaWx0ZXI6IGZpbHRlcn0pXG4gICAgfVxuXG4gICAgbm9uSXBkTGVhZHMocGhvbmVfbnVtYmVyKXtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCBjcml0ZXJpYVN0ciA9IHRoaXMuZ2V0Q3JpdGVyaWFTdHJpbmcodGhpcy5wcm9wcy5jdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMpXG4gICAgICAgIGxldCBkYXRhID0oe3Bob25lX251bWJlcjpwaG9uZV9udW1iZXIsbGVhZF9zb3VyY2U6J0xhYmFkcycsc291cmNlOnBhcnNlZCxsZWFkX3R5cGU6J0xBQkFEUycsdGVzdF9uYW1lOmNyaXRlcmlhU3RyLGV4aXRwb2ludF91cmw6J2h0dHA6Ly9kb2NwcmltZS5jb20nICsgdGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZX0pXG4gICAgICAgIGlmKHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzICYmIHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmxlbmd0aCl7XG4gICAgICAgICAgICBkYXRhLnV0bV90YWdzID0gdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MuZmlsdGVyKHg9PngudHlwZSA9PSBcImNvbW1vbl94dHJhX3RhZ3NcIilbMF0udXRtX3RhZ3NcbiAgICAgICAgfVxuICAgICAgICBsZXQgdmlzaXRvcl9pbmZvID0gR1RNLmdldFZpc2l0b3JJbmZvKClcbiAgICAgICAgaWYodmlzaXRvcl9pbmZvICYmIHZpc2l0b3JfaW5mby52aXNpdF9pZCl7XG4gICAgICAgICAgICBkYXRhLnZpc2l0X2lkID0gdmlzaXRvcl9pbmZvLnZpc2l0X2lkXG4gICAgICAgICAgICBkYXRhLnZpc2l0b3JfaWQgPSB2aXNpdG9yX2luZm8udmlzaXRvcl9pZFxuICAgICAgICB9XG4gICAgICAgIGxldCBndG1fZGF0YSA9IHsnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ05vbklwZFNlYXJjaExpc3RpbmdTdWJtaXRDbGljaycsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnZXZlbnQnOiAnbm9uLWlwZC1zZWFyY2gtbGlzdGluZy1TdWJtaXQtY2xpY2snfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtX2RhdGEgfSlcbiAgICAgICAgdGhpcy5wcm9wcy5zYXZlTGVhZFBobk51bWJlcihwaG9uZV9udW1iZXIpXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuaXNfbGVhZF9lbmFibGVkICYmICFTVE9SQUdFLmlzQWdlbnQoKSl7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc19sZWFkX2VuYWJsZWQ6ZmFsc2V9KVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5Ob25JcGRCb29raW5nTGVhZChkYXRhKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNfbGVhZF9lbmFibGVkOnRydWV9KVxuICAgICAgICAgICAgfSwgNTAwMClcbiAgICAgICAgfVxuICAgICAgIHRoaXMuc2V0U3RhdGUoe3RvX2JlX2ZvcmNlOjB9KVxuICAgIH1cblxuICAgIGNsb3NlSXBkTGVhZFBvcHVwKGZyb20pe1xuICAgICAgICBpZihmcm9tKXtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ05vbklwZFNlYXJjaExpc3RpbmdDcm9zc0NsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdldmVudCc6ICdub24taXBkLXNlYXJjaC1saXN0aW5nLWNyb3NzLWNsaWNrJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt0b19iZV9mb3JjZTowfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldENyaXRlcmlhU3RyaW5nKHNlbGVjdGVkQ3JpdGVyaWFzKSB7XG4gICAgICAgIGlmIChzZWxlY3RlZENyaXRlcmlhcyAmJiBzZWxlY3RlZENyaXRlcmlhcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZENyaXRlcmlhcy5yZWR1Y2UoKGZpbmFsLCBjdXJyLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGkgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBmaW5hbCArPSAnLCAnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsICs9IGAke2N1cnIubmFtZX1gXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbmFsXG4gICAgICAgICAgICB9LCBcIlwiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgc2hvd19wYWdpbmF0aW9uID0gdGhpcy5wcm9wcy5sYWJMaXN0ICYmIHRoaXMucHJvcHMubGFiTGlzdC5sZW5ndGggPiAwXG4gICAgICAgIGxldCB1cmwgPSBgJHtDT05GSUcuQVBJX0JBU0VfVVJMfSR7dGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZX1gXG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKC8mcGFnZT1cXGR7MSx9LywgXCJcIilcbiAgICAgICAgbGV0IHBhZ2UgPSBcIlwiXG4gICAgICAgIGxldCBjdXJyX3BhZ2UgPSBwYXJzZUludCh0aGlzLnByb3BzLnBhZ2UpXG4gICAgICAgIGxldCBwcmV2ID0gXCJcIlxuICAgICAgICBpZiAoY3Vycl9wYWdlID4gMSkge1xuICAgICAgICAgICAgcGFnZSA9IGA/cGFnZT0ke2N1cnJfcGFnZX1gXG4gICAgICAgICAgICBwcmV2ID0gdXJsXG4gICAgICAgICAgICBpZiAoY3Vycl9wYWdlID4gMikge1xuICAgICAgICAgICAgICAgIHByZXYgKz0gYD9wYWdlPSR7Y3Vycl9wYWdlIC0gMX1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5leHQgPSBcIlwiXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvdW50ID4gY3Vycl9wYWdlICogMjApIHtcbiAgICAgICAgICAgIG5leHQgPSB1cmwgKyBgP3BhZ2U9JHtjdXJyX3BhZ2UgKyAxfWBcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoaXMgd2FzIHRoZSBsYW5kaW5nIHBhZ2VcbiAgICAgICAgbGV0IGxhbmRpbmdfcGFnZSA9IGZhbHNlXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdy5PTl9MQU5ESU5HX1BBR0UpIHtcbiAgICAgICAgICAgIGxhbmRpbmdfcGFnZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibWFwXCIgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19PjwvZGl2PlxuICAgICAgICAgICAgICAgIDxIZWxtZXRUYWdzIHRhZ3NEYXRhPXt7XG4gICAgICAgICAgICAgICAgICAgIGNhbm9uaWNhbFVybDogYCR7Q09ORklHLkFQSV9CQVNFX1VSTH0ke3RoaXMucHJvcHMubWF0Y2gudXJsfSR7cGFnZX1gLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5nZXRNZXRhVGFnc0RhdGEodGhpcy5wcm9wcy5zZW9EYXRhKS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZ2V0TWV0YVRhZ3NEYXRhKHRoaXMucHJvcHMuc2VvRGF0YSkuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIHByZXY6IHByZXYsXG4gICAgICAgICAgICAgICAgICAgIG5leHQ6IG5leHRcbiAgICAgICAgICAgICAgICB9fSBub0luZGV4PXshdGhpcy5zdGF0ZS5zZW9GcmllbmRseX0gLz5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8qKHRoaXMuc3RhdGUuc2hvd05vbklwZFBvcHVwID09IDEgfHwgdGhpcy5zdGF0ZS5zaG93Tm9uSXBkUG9wdXAgPT0gMikgJiYgdGhpcy5zdGF0ZS50b19iZV9mb3JjZSA9PSAxP1xuICAgICAgICAgICAgICAgICAgICA8Tm9uSXBkUG9wdXBWaWV3IHsuLi50aGlzLnByb3BzfSBub25JcGRMZWFkcz17dGhpcy5ub25JcGRMZWFkcy5iaW5kKHRoaXMpfSBjbG9zZUlwZExlYWRQb3B1cCA9IHt0aGlzLmNsb3NlSXBkTGVhZFBvcHVwLmJpbmQodGhpcyl9IGlzX2ZvcmNlPXt0aGlzLnN0YXRlLnNob3dOb25JcGRQb3B1cH0gaXNfbGFiPXt0cnVlfS8+XG4gICAgICAgICAgICAgICAgICAgIDonJyovXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxDcml0ZXJpYVNlYXJjaCB7Li4udGhpcy5wcm9wc30gY2hlY2tGb3JMb2FkPXtsYW5kaW5nX3BhZ2UgfHwgdGhpcy5wcm9wcy5MT0FERURfTEFCU19TRUFSQ0ggfHwgdGhpcy5zdGF0ZS5zaG93RXJyb3J9IHRpdGxlPVwiU2VhcmNoIGZvciBUZXN0IGFuZCBMYWJzLlwiIGdvQmFjaz17dHJ1ZX0gbGFiX2NhcmQ9eyEhdGhpcy5zdGF0ZS5sYWJfY2FyZH0gbmV3Q2hhdEJ0bj17dHJ1ZX0gc2VhcmNoTGFicz17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0Vycm9yID8gPGRpdiBjbGFzc05hbWU9XCJub3JmXCI+Tm8gUmVzdWx0cyBGb3VuZCEhPC9kaXY+IDogPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9wQmFyIHsuLi50aGlzLnByb3BzfSBhcHBseUZpbHRlcnM9e3RoaXMuYXBwbHlGaWx0ZXJzLmJpbmQodGhpcyl9IHNlb0RhdGE9e3RoaXMucHJvcHMuc2VvRGF0YX0gbGFiX2NhcmQ9eyEhdGhpcy5zdGF0ZS5sYWJfY2FyZH0gc2VvRnJpZW5kbHk9e3RoaXMuc3RhdGUuc2VvRnJpZW5kbHl9IHF1aWNrRmlsdGVyPXt0aGlzLnN0YXRlLnF1aWNrRmlsdGVyfSByZXNldFF1aWNrRmlsdGVycz17dGhpcy5yZXNldFF1aWNrRmlsdGVycy5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPFJlc3VsdENvdW50IHsuLi50aGlzLnByb3BzfSBhcHBseUZpbHRlcnM9e3RoaXMuYXBwbHlGaWx0ZXJzLmJpbmQodGhpcyl9IHNlb0RhdGE9e3RoaXMucHJvcHMuc2VvRGF0YX0gbGFiX2NhcmQ9eyEhdGhpcy5zdGF0ZS5sYWJfY2FyZH0gc2VvRnJpZW5kbHk9e3RoaXMuc3RhdGUuc2VvRnJpZW5kbHl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHBhZGRpbmc6ICcxMHB4IDMwcHgnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvYmFubmVycy9iYW5uZXJfbGFiLnBuZ1wifSBjbGFzc05hbWU9XCJiYW5uZXItaW1nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93Q2hhdFdpdGh1cyA/IDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGQtbWQtbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ydC0xMCBtcmItMTAgYXJ0aWNsZS1jaGF0LWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+TmVlZCBoZWxwIHdpdGggYm9va2luZz88L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvbW9iaWxldmlld2NoYXQ/Ym90YWdlbnQ9dHJ1ZSZmb3JjZV9zdGFydD10cnVlJyl9ID5DaGF0IHdpdGggdXM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKi99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubGFiTGlzdCAmJiB0aGlzLnByb3BzLmxhYkxpc3QubGVuZ3RoID09MD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgY2FyZE1haW5QYWRkaW5nUm12XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZy1jYXJkLWNvbnRhaW5lciBtdC0yMCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2ctbm8tcmVzdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBrZy1uLXJzbHRcIj5ObyByZXN1bHQgZm91bmQhPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5pc0ZpbHRlckFwcGxpZWQodGhpcy5wcm9wcy5maWx0ZXJDcml0ZXJpYSk/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm4tcnNsdC1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL25vLXJlc3VsdC5wbmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGtnLXR5LWFnbiBjdXJzb3ItcG50clwiIG9uQ2xpY2s9e3RoaXMuYXBwbHlRdWlja0ZpbHRlci5iaW5kKHRoaXMsIHt2aWV3TW9yZTogdHJ1ZX0pfT5UcnkgYWdhaW4gd2l0aCBmZXdlciBmaWx0ZXJzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7d2lkdGg6JzEzMHB4J319IGNsYXNzTmFtZT1cIm4tcnNsdC1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZjdC1uby5wbmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGtnLXR5LWFnbiB0ZXh0LWRhcmsgdGV4dC1jZW50ZXJcIj5DYW7igJl0IGZpbmQgeW91ciBsYWIgaGVyZT88YnI+PC9icj5IZWxwIHVzIHRvIGxpc3QgeW91ciBsYWI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJlZmVyRG9jdG9yYnRuXCIgb25DbGljaz17KGUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdSZWZlckxhYkxpc3ROb3Jlc3VsdCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnZXZlbnQnOiAncmVmZXItbGFiLWxpc3Qtbm9yZXN1bHQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9kb2N0b3JzaWdudXA/bWVtYmVyX3R5cGU9MicpfX0+UmVmZXIgeW91ciBMYWI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PFJlYWN0LkZyYWdtZW50PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFic0xpc3Qgey4uLnRoaXMucHJvcHN9IGFwcGx5RmlsdGVycz17dGhpcy5hcHBseUZpbHRlcnMuYmluZCh0aGlzKX0gZ2V0TGFiTGlzdD17dGhpcy5nZXRMYWJMaXN0LmJpbmQodGhpcyl9IGxhYl9jYXJkPXshIXRoaXMuc3RhdGUubGFiX2NhcmR9IGFwcGx5UXVpY2tGaWx0ZXI9e3RoaXMuYXBwbHlRdWlja0ZpbHRlci5iaW5kKHRoaXMpfS8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlb0ZyaWVuZGx5ICYmIHNob3dfcGFnaW5hdGlvbiA/IDxkaXYgY2xhc3NOYW1lPVwiYXJ0LXBhZ2luYXRpb24tZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXYgPyA8YSBocmVmPXtwcmV2fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnQtcGFnaW5hdGlvbi1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwXCI+e2N1cnJfcGFnZSAtIDF9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0LXBhZ2luYXRpb24tYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmdy01MDBcIiBzdHlsZT17eyBjb2xvcjogJyMwMDAnIH19PntjdXJyX3BhZ2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0ID8gPGEgaHJlZj17bmV4dH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0LXBhZ2luYXRpb24tYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMFwiPntjdXJyX3BhZ2UgKyAxfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L0NyaXRlcmlhU2VhcmNoPlxuXG4gICAgICAgICAgICAgICAgPEZvb3RlciBmb290ZXJEYXRhPXt0aGlzLnN0YXRlLmZvb3RlckRhdGF9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFJlc3VsdHNWaWV3XG4iLCJpbXBvcnQgU2VhcmNoUmVzdWx0c1ZpZXcgZnJvbSAnLi9TZWFyY2hSZXN1bHRzVmlldy5qcydcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUmVzdWx0c1ZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTGFiUHJvZmlsZUNhcmQgZnJvbSAnLi4vLi4vY29tbW9ucy9sYWJQcm9maWxlQ2FyZC9pbmRleC5qcydcbmltcG9ydCBJbmZpbml0ZVNjcm9sbCBmcm9tICdyZWFjdC1pbmZpbml0ZS1zY3JvbGxlcic7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uLy4uL2NvbW1vbnMvTG9hZGVyJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL2d0bSdcbmltcG9ydCBMYWJSZXN1bHRDYXJkIGZyb20gJy4uLy4uL2NvbW1vbnMvbGFiUmVzdWx0Q2FyZCdcbmltcG9ydCBCYW5uZXJDYXJvdXNlbCBmcm9tICcuLi8uLi8uLi9jb21tb25zL0hvbWUvYmFubmVyQ2Fyb3VzZWwuanMnO1xuXG5jbGFzcyBMYWJzTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBoYXNNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgcmVuZGVyQmxvY2s6IGZhbHNlLFxuICAgICAgICAgICAgcGFnZTogMCxcbiAgICAgICAgICAgIGlzX2luc3VyZWQ6IHByb3BzLmZpbHRlckNyaXRlcmlhICYmIHByb3BzLmZpbHRlckNyaXRlcmlhLmlzX2luc3VyZWQ/cHJvcHMuZmlsdGVyQ3JpdGVyaWEuaXNfaW5zdXJlZDpmYWxzZSxcbiAgICAgICAgICAgIGF2Z19yYXRpbmdzOiAnJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCZWxvdyBjb2RlIGVuc3VyZXMgc21vb3RoIGJhY2sgcGFnZSB0cmFuc2l0aW9ucyBpbiBjYXNlIG9mIGh1Z2UgZGF0YSBzZXRzLCBhbmQgbWFpbnRhaW5zIHNjcm9sbCBwb3NpdGlvbi5cbiAgICAgICAgICogcmVuZGVyQmxvY2sgPSB0cnVlIChieSBkZWZhdWx0KSB3aWxsIGJsb2NrIHJlbmRlciB1bnRpbCB0aGUgcGFnZSB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlZCwgYW5kIG9uY2UgaXRzIGRvbmUsIGl0IHdpbGwgdGhlbiByZW5kZXIgYW5kIHNldCBzY3JvbGwgcG9zaXRpb24gYWNjb3JkaW5nbHlcbiAgICAgICAgIFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlZnMuY2hlY2tJZkV4aXN0cykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZW5kZXJCbG9jazogZmFsc2UgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjcm9sbF9wb3MgPSB3aW5kb3cuTEFCX1NDUk9MTF9QT1MgPyAod2luZG93LkxBQl9TQ1JPTExfUE9TKSA6IDBcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogaW1wcm92ZSBzY3JvbGwgYmFjayBsb2dpY1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgc2Nyb2xsX3BvcyB8fCAwKVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuTEFCX1NDUk9MTF9QT1MgPSAwXG5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LkxBQl9TQ1JPTExfUE9TID0gd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDApXG4gICAgICAgIH0sIDEwMClcbiAgICAgICAgXG4gICAgICAgICovXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhhc01vcmU6IHRydWUgfSlcbiAgICAgICAgfSwgMClcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMucHJvcHMuZmlsdGVyQ3JpdGVyaWEgfSlcbiAgICAgICAgbGV0IHNlbGVjdGVkTG9jYXRpb24gPSAnJ1xuICAgICAgICBsZXQgbGF0ID0gMjguNjQ0ODAwXG4gICAgICAgIGxldCBsb25nID0gNzcuMjE2NzIxXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24pIHtcbiAgICAgICAgICAgIHNlbGVjdGVkTG9jYXRpb24gPSB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb247XG4gICAgICAgICAgICBsYXQgPSBzZWxlY3RlZExvY2F0aW9uLmdlb21ldHJ5LmxvY2F0aW9uLmxhdFxuICAgICAgICAgICAgbG9uZyA9IHNlbGVjdGVkTG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubG5nXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxhdCA9PT0gJ2Z1bmN0aW9uJykgbGF0ID0gbGF0KClcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbG9uZyA9PT0gJ2Z1bmN0aW9uJykgbG9uZyA9IGxvbmcoKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9wcy5nZXRPZmZlckxpc3QobGF0LCBsb25nKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICAgIGlmKHByb3BzLmZpbHRlckNyaXRlcmlhKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgLi4ucHJvcHMuZmlsdGVyQ3JpdGVyaWEuYXZnX3JhdGluZ3MgfHwgJycgfSkgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdMYWJTZWFyY2hQYWdpbmF0aW9uJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbGFiLXNlYXJjaC1wYWdpbmF0aW9uJywgJ1BhZ2VzJzogdGhpcy5zdGF0ZS5wYWdlXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgLy8gaWYgKHdpbmRvdykge1xuICAgICAgICAvLyAgICAgd2luZG93Lm9uc2Nyb2xsID0gbnVsbFxuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgZ2V0TG9jYXRpb25QYXJhbSh0YWcpIHtcbiAgICAgICAgLy8gdGhpcyBBUEkgYXNzdW1lcyB0aGUgY29udGV4dCBvZiByZWFjdC1yb3V0ZXItNFxuICAgICAgICBjb25zdCBwYXJhbVN0cmluZyA9IHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocGFyYW1TdHJpbmcpXG4gICAgICAgIHJldHVybiBwYXJhbXMuZ2V0KHRhZylcbiAgICB9XG5cbiAgICBsb2FkTW9yZShwYWdlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNNb3JlOiBmYWxzZSwgbG9hZGluZzogdHJ1ZSwgcGFnZTogcGFnZSB9KVxuXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0TGFiTGlzdChudWxsLCBwYWdlICsgMSwgKGhhc01vcmUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhhc01vcmUgfSlcbiAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHRlc3RJbmZvKCkge1xuICAgICAgICB7Lyp2YXIgdXJsX3N0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB2YXIgdXJsID0gbmV3IFVSTCh1cmxfc3RyaW5nKTtcbiAgICAgICAgdmFyIHRlc3RfaWRzID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ0ZXN0X2lkc1wiKTtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9zZWFyY2gvdGVzdGluZm8/dGVzdF9pZHM9JyArIHRlc3RfaWRzICsgJyZmcm9tPXNlYXJjaHJlc3VsdHMnKVxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAndGVzdEluZm9DbGljaycsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3Rlc3QtaW5mby1jbGljaycsICdwYWdlU291cmNlJzogJ2xhYi1yZXN1bHQtcGFnZSdcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KSovfVxuICAgIH1cblxuICAgIGFwcGx5UXVpY2tGaWx0ZXJzKHR5cGUsIHZhbCwgaXNBcnJheSwgZSkge1xuICAgICAgICBsZXQgdmFsdWUgPSB2YWxcbiAgICAgICAgaWYgKGlzQXJyYXkpIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZFZhbCA9IFtdLmNvbmNhdCh0aGlzLnN0YXRlW3R5cGVdKSB8fCBbXVxuICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2VcbiAgICAgICAgICAgIHZhbHVlID0gc2VsZWN0ZWRWYWwuZmlsdGVyKChkYXRhKT0+IHtcbiAgICAgICAgICAgICAgICBpZihkYXRhPT12YWwpe1xuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYoIWZvdW5kKXtcbiAgICAgICAgICAgICAgICB2YWx1ZS5wdXNoKHZhbCkgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdMYWJRdWlja0ZpbHRlckNsaWNrZWQnLCAnQWN0aW9uJzogJ0xhYlF1aWNrRmlsdGVyQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2xhYi1xdWljay1maWx0ZXItY2xpY2tlZCcsICd1cmwnOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsICd0eXBlJzogdHlwZSwgJ3ZhbCc6IHZhbFxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG5cbiAgICAgICAgbGV0IGZpbHRlcnMgPSB7Li4udGhpcy5wcm9wcy5maWx0ZXJDcml0ZXJpYX1cbiAgICAgICAgaWYodHlwZS5pbmNsdWRlcygnc29ydF9vbicpICkge1xuXG4gICAgICAgICAgICBpZih2YWwuaW5jbHVkZXMoJ3ByaWNlX2FzYycpIHx8IHZhbC5pbmNsdWRlcygncHJpY2VfZGVzYycpICl7XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLnN0YXRlW3R5cGVdPT0nZmVlcycgJiYgKCAodGhpcy5zdGF0ZVsnc29ydF9vcmRlciddPT0nYXNjJyAmJiB2YWwuaW5jbHVkZXMoJ3ByaWNlX2FzYycpICkgfHwgKHRoaXMuc3RhdGVbJ3NvcnRfb3JkZXInXT09J2Rlc2MnICYmIHZhbC5pbmNsdWRlcygncHJpY2VfZGVzYycpICkgKSApe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzb3J0X29uOiBudWxsLCBzb3J0X29yZGVyOiBudWxsfSwgKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzID0gT2JqZWN0LmFzc2lnbih7ZmlsdGVycywgLi4udGhpcy5zdGF0ZX0pXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFwcGx5RmlsdGVycyhmaWx0ZXJzKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzb3J0X29uOiAnZmVlcycsIHNvcnRfb3JkZXI6IHZhbC5pbmNsdWRlcygncHJpY2VfYXNjJyk/J2FzYyc6J2Rlc2MnfSwoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVycyA9IE9iamVjdC5hc3NpZ24oe2ZpbHRlcnMsIC4uLnRoaXMuc3RhdGV9KVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hcHBseUZpbHRlcnMoZmlsdGVycylcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNvcnRfb246IHRoaXMuc3RhdGVbdHlwZV09PXZhbHVlP251bGw6dmFsdWUsIHNvcnRfb3JkZXI6IG51bGwgfSwoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVycyA9IE9iamVjdC5hc3NpZ24oe2ZpbHRlcnMsIC4uLnRoaXMuc3RhdGV9KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFwcGx5RmlsdGVycyhmaWx0ZXJzKVxuICAgICAgICAgICAgICAgIH0pICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbdHlwZV06IHRoaXMuc3RhdGVbdHlwZV09PXZhbHVlPycnOnZhbHVlIH0sICgpPT4ge1xuICAgICAgICAgICAgICAgIGZpbHRlcnMgPSBPYmplY3QuYXNzaWduKHtmaWx0ZXJzLCAuLi50aGlzLnN0YXRlfSlcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFwcGx5RmlsdGVycyhmaWx0ZXJzKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZpZXdNb3JlQ2xpY2tlZCgpIHtcbiAgICAgICAgbGV0IGZpbHRlcnMgPSB7XG4gICAgICAgICAgICB2aWV3TW9yZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMuYXBwbHlRdWlja0ZpbHRlcihmaWx0ZXJzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHNob3dfZGV0YWlscyA9IGZhbHNlXG4gICAgICAgIGxldCB7IExBQlMsIGxhYkxpc3QgfSA9IHRoaXMucHJvcHNcblxuICAgICAgICBsZXQgc3RhcnRfcGFnZSA9IDBcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY3Vycl9wYWdlKSB7XG4gICAgICAgICAgICBzdGFydF9wYWdlID0gTWF0aC5tYXgoMCwgdGhpcy5wcm9wcy5jdXJyX3BhZ2UgLSAxKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMucGFnZSkge1xuICAgICAgICAgICAgICAgIHN0YXJ0X3BhZ2UgPSBNYXRoLm1heCgwLCB0aGlzLnByb3BzLnBhZ2UgLSAxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIndyYXAgc2VhcmNoLWJvb2stcmVzdWx0IHZhcmlhYmxlLWNvbnRlbnQtc2VjdGlvblwiIHJlZj1cImNoZWNrSWZFeGlzdHNcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucmVuZGVyQmxvY2sgPyA8TG9hZGVyIC8+IDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGNhcmRNYWluUGFkZGluZ1JtdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyp7T2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5jdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMpLm1hcChmdW5jdGlvbiAoW2tleSwgdmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUuc2hvd19kZXRhaWxzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd19kZXRhaWxzID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd19kZXRhaWxzID8gPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcmNoLWhlYWRpbmdcIiBzdHlsZT17eyBmbG9hdDogJ2xlZnQnLCBjdXJzb3I6ICdwb2ludGVyJywgY29sb3I6ICcjZTQ2NjA4JyB9fSBvbkNsaWNrPXt0aGlzLnRlc3RJbmZvLmJpbmQodGhpcyl9PiBUZXN0IEluZm88L3NwYW4+PC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSovfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbmZpbml0ZVNjcm9sbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTdGFydD17c3RhcnRfcGFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkTW9yZT17dGhpcy5sb2FkTW9yZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc01vcmU9e3RoaXMuc3RhdGUuaGFzTW9yZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VXaW5kb3c9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbExvYWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiTGlzdC5tYXAoKGxhYklkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKExBQlNbbGFiSWRdKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudCBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaT09NCAmJiAhdGhpcy5zdGF0ZS5hdmdfcmF0aW5ncyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29ydC1zdWItZmlsdGVyLWNvbnRhaW5lciBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GaWx0ZXIgYnkgPHNwYW4gY2xhc3NOYW1lPVwiZnctNzAwXCI+IFJhdGluZ3MgPC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMCBzb3J0LW1vcmUtZmlsdGVyXCIgb25DbGljaz17dGhpcy52aWV3TW9yZUNsaWNrZWQuYmluZCh0aGlzKX0+TW9yZSBmaWx0ZXJzPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3J0LXNiLWJ0bi1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3RoaXMuc3RhdGUuYXZnX3JhdGluZ3M9PSczJz8nc3J0LWFjdCc6Jyd9YH0gb25DbGljaz17dGhpcy5hcHBseVF1aWNrRmlsdGVycy5iaW5kKHRoaXMsICdhdmdfcmF0aW5ncycsICczJywgZmFsc2UpfT4zLjAgKzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHt0aGlzLnN0YXRlLmF2Z19yYXRpbmdzPT0nNCc/J3NydC1hY3QnOicnfWB9IG9uQ2xpY2s9e3RoaXMuYXBwbHlRdWlja0ZpbHRlcnMuYmluZCh0aGlzLCAnYXZnX3JhdGluZ3MnLCAnNCcsIGZhbHNlKX0+NC4wICs8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7dGhpcy5zdGF0ZS5hdmdfcmF0aW5ncz09JzQuNSc/J3NydC1hY3QnOicnfWB9IG9uQ2xpY2s9e3RoaXMuYXBwbHlRdWlja0ZpbHRlcnMuYmluZCh0aGlzLCAnYXZnX3JhdGluZ3MnLCAnNC41JywgZmFsc2UpfT40LjUgKzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JycgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpPT01ICYmIHRoaXMucHJvcHMub2ZmZXJMaXN0ICYmIHRoaXMucHJvcHMub2ZmZXJMaXN0LmZpbHRlcih4ID0+IHguc2xpZGVyX2xvY2F0aW9uID09PSAnbGFiX3NlYXJjaF9yZXN1bHRzJykubGVuZ3RoICYmICF0aGlzLnN0YXRlLmlzX2luc3VyZWQ/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIDxCYW5uZXJDYXJvdXNlbCB7Li4udGhpcy5wcm9wc30gc2xpZGVyTG9jYXRpb249XCJsYWJfc2VhcmNoX3Jlc3VsdHNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLWNvbnQtaGVpZ2h0IGhvbWUtcGFnZS1iYW5uZXItZGl2IG1iLTMgbXItMCBiYW5uZXItbWQtbWFyZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVyQmFubmVyIGJhbm5lci1jYXJvdXNlbC1kaXYgZC1tZC1ub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZIZWlnaHQgbS0wXCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCI1cHghaW1wb3J0YW50XCJ9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhbm5lckNhcm91c2VsIHsuLi50aGlzLnByb3BzfSBzbGlkZXJMb2NhdGlvbj1cImxhYl9zZWFyY2hfcmVzdWx0c1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmxhYl9jYXJkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiUHJvZmlsZUNhcmQgey4uLnRoaXMucHJvcHN9IGRldGFpbHM9e0xBQlNbbGFiSWRdfSBrZXk9e2l9IHJhbms9e2l9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8TGFiUHJvZmlsZUNhcmQgey4uLnRoaXMucHJvcHN9IGRldGFpbHM9e0xBQlNbbGFiSWRdfSBrZXk9e2l9IHJhbms9e2l9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmYWxzZSAmJiBsYWJMaXN0ICYmIGxhYkxpc3QubGVuZ3RoID4gNSAmJiAgaSA9PSAyP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMyByZWZlckRvY2ltZ1wiIG9uQ2xpY2s9eyhlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnUmVmZXJMYWJMaXN0JywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdldmVudCc6ICdyZWZlci1sYWItbGlzdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9kb2N0b3JzaWdudXA/bWVtYmVyX3R5cGU9MicpfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvemVyb19sYWItbWluLnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjonJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0luZmluaXRlU2Nyb2xsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nID8gPExvYWRlciBjbGFzc1R5cGU9XCJsb2FkZXJQYWdpbmF0aW9uXCIgLz4gOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBMYWJzTGlzdFxuIiwiaW1wb3J0IExhYnNMaXN0IGZyb20gJy4vTGFic0xpc3QuanMnXG5cbmV4cG9ydCBkZWZhdWx0IExhYnNMaXN0IiwiaW1wb3J0IFRvcEJhciBmcm9tICcuL25ld1RvcEJhci5qcydcblxuZXhwb3J0IGRlZmF1bHQgVG9wQmFyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUmFuZ2UgZnJvbSAncmMtc2xpZGVyL2xpYi9SYW5nZSc7XG5pbXBvcnQgeyBDb3B5VG9DbGlwYm9hcmQgfSBmcm9tICdyZWFjdC1jb3B5LXRvLWNsaXBib2FyZCc7XG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBMb2NhdGlvbkVsZW1lbnRzIGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMvY29tbW9ucy9sb2NhdGlvbkVsZW1lbnRzJ1xuaW1wb3J0IExvY2F0aW9uUG9wdXAgZnJvbSAnLi4vLi4vLi4vLi4vY29udGFpbmVycy9jb21tb25zL2xvY2F0aW9uUG9wdXAnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvZ3RtJ1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuXG5jbGFzcyBUb3BCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYW5jaG9yRWw6IG51bGwsXG4gICAgICAgICAgICBkcm9wZG93bl92aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIC8vIG92ZXJsYXlWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIC8vIHNob3dQb3B1cENvbnRhaW5lcjogdHJ1ZSxcbiAgICAgICAgICAgIGlzX2luc3VyZWQ6IHByb3BzLmZpbHRlckNyaXRlcmlhICYmIHByb3BzLmZpbHRlckNyaXRlcmlhLmlzX2luc3VyZWQgPyBwcm9wcy5maWx0ZXJDcml0ZXJpYS5pc19pbnN1cmVkIDogZmFsc2UsXG4gICAgICAgICAgICAvL05ldyBmaWx0ZXJzXG4gICAgICAgICAgICBwcmV2aW91c19maWx0ZXJzOiB7fSxcbiAgICAgICAgICAgIHNvcnRfb246ICcnLFxuICAgICAgICAgICAgc29ydF9vcmRlcjogJycsXG4gICAgICAgICAgICBhdmdfcmF0aW5nczogJycsXG4gICAgICAgICAgICBhdmFpbGFiaWxpdHk6IFtdLFxuICAgICAgICAgICAgaG9tZV92aXNpdDogZmFsc2UsXG4gICAgICAgICAgICBsYWJfdmlzaXQ6IGZhbHNlLFxuICAgICAgICAgICAgc2hvcnRVUkw6IFwiXCIsXG4gICAgICAgICAgICBzaG93TG9jYXRpb25Qb3B1cDogZmFsc2UsXG4gICAgICAgICAgICBxdWlja0ZpbHRlcjoge31cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnByb3BzLmZpbHRlckNyaXRlcmlhLCBxdWlja0ZpbHRlcjogcHJvcHMucXVpY2tGaWx0ZXJ8fHt9IH0sICgpPT4ge1xuICAgICAgICAgICAgaWYoIHRoaXMuc3RhdGUucXVpY2tGaWx0ZXIgJiYgdGhpcy5zdGF0ZS5xdWlja0ZpbHRlci52aWV3TW9yZSApICB7XG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0RmlsdGVyQ2xpY2tlZCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKHByb3BzLmxvY2F0aW9uVHlwZSAmJiAhcHJvcHMubG9jYXRpb25UeXBlLmluY2x1ZGVzKFwiZ2VvXCIpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuc2VvRGF0YSAmJiBwcm9wcy5zZW9EYXRhLmxvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoKHByb3BzLnNlb0RhdGEgJiYgcHJvcHMuc2VvRGF0YS5sb2NhdGlvbikgfHwgcHJvcHMuc2VvRnJpZW5kbHkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dMb2NhdGlvblBvcHVwOiB0cnVlLCBvdmVybGF5VmlzaWJsZTogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLnNob3J0ZW5VcmwoKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5wcm9wcy5maWx0ZXJDcml0ZXJpYSB9KVxuICAgICAgICAvLyB0aGlzLnNob3J0ZW5VcmwoKVxuICAgICAgICBpZiAoKHRoaXMucHJvcHMuc2VvRGF0YSAmJiB0aGlzLnByb3BzLnNlb0RhdGEubG9jYXRpb24pIHx8IHRoaXMucHJvcHMuc2VvRnJpZW5kbHkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9jYXRpb25Qb3B1cDogZmFsc2UgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uVHlwZSAmJiB0aGlzLnByb3BzLmxvY2F0aW9uVHlwZS5pbmNsdWRlcyhcImdlb1wiKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9jYXRpb25Qb3B1cDogdHJ1ZSwgb3ZlcmxheVZpc2libGU6IHRydWUgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZpbHRlciBzdGlja3kgZHluYW1pYyBoZWlnaHQganNcbiAgICAgICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnN0ICBoZWFkSGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzX2hlYWRlcicpO1xuICAgICAgICAvLyAgICAgaGVhZEhlaWdodC5jbGllbnRIZWlnaHQ7XG4gICAgICAgIC8vICAgICBjb25zdCBmaWx0ZXJIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlzX2hlYWRlcicpO1xuICAgICAgICAvLyAgICAgZmlsdGVySGVpZ2h0LnN0eWxlLnRvcCA9IGhlYWRIZWlnaHQuY2xpZW50SGVpZ2h0O1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coZmlsdGVySGVpZ2h0LnN0eWxlLnRvcCA9IGhlYWRIZWlnaHQuY2xpZW50SGVpZ2h0KTtcbiAgICAgICAgLy8gfSlcblxuICAgIH1cblxuICAgIGFwcGx5RmlsdGVycygpIHtcbiAgICAgICAgbGV0IGZpbHRlclN0YXRlID0ge1xuICAgICAgICAgICAgc29ydF9vbjogdGhpcy5zdGF0ZS5zb3J0X29uLFxuICAgICAgICAgICAgc29ydF9vcmRlcjogdGhpcy5zdGF0ZS5zb3J0X29yZGVyLFxuICAgICAgICAgICAgYXZhaWxhYmlsaXR5OiB0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eSxcbiAgICAgICAgICAgIGF2Z19yYXRpbmdzOiB0aGlzLnN0YXRlLmF2Z19yYXRpbmdzLFxuICAgICAgICAgICAgaG9tZV92aXNpdDogdGhpcy5zdGF0ZS5ob21lX3Zpc2l0LFxuICAgICAgICAgICAgbGFiX3Zpc2l0OiB0aGlzLnN0YXRlLmxhYl92aXNpdCxcbiAgICAgICAgICAgIGlzX2luc3VyZWQ6IHRoaXMuc3RhdGUuaXNfaW5zdXJlZFxuICAgICAgICB9XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0ZpbHRlckNsaWNrJywgJ0FjdGlvbic6ICdDbGlja2VkIG9uIEZpbHRlcicsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2xhYi1maWx0ZXItY2xpY2tlZCcsICd1cmwnOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsICdzb3J0X29yZGVyJzogdGhpcy5zdGF0ZS5zb3J0X29yZGVyIHx8ICcnLCAnYXZhaWxhYmlsaXR5JzogdGhpcy5zdGF0ZS5hdmFpbGFiaWxpdHksICdhdmdfcmF0aW5ncyc6IHRoaXMuc3RhdGUuYXZnX3JhdGluZ3MsICdsYWJfdmlzaXQnOiB0aGlzLnN0YXRlLmxhYl92aXNpdCwgJ2hvbWVfdmlzaXQnOiB0aGlzLnN0YXRlLmhvbWVfdmlzaXQsICdzb3J0X29uJzogdGhpcy5zdGF0ZS5zb3J0X29uXG4gICAgICAgIH1cblxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICBcbiAgICAgICAgbGV0IGlmQW55RmlsdGVyQXBwbGllZCA9IHRoaXMuaXNEYXRhRmlsdGVyZWQoe30sIHRydWUpXG4gICAgICAgIGlmKGlmQW55RmlsdGVyQXBwbGllZCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5hcHBseUZpbHRlcnMoZmlsdGVyU3RhdGUpICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRyb3Bkb3duX3Zpc2libGU6IGZhbHNlIH0pXG4gICAgfVxuXG4gICAgdG9nZ2xlQWxsRmlsdGVycyh0eXBlLCB2YWwsIGlzQXJyYXkgPSBmYWxzZSwgZSkge1xuICAgICAgICBsZXQgdmFsdWUgPSB2YWxcbiAgICAgICAgaWYgKGlzQXJyYXkpIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZFZhbCA9IFtdLmNvbmNhdCh0aGlzLnN0YXRlW3R5cGVdKSB8fCBbXVxuICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2VcbiAgICAgICAgICAgIHZhbHVlID0gc2VsZWN0ZWRWYWwuZmlsdGVyKChkYXRhKT0+IHtcbiAgICAgICAgICAgICAgICBpZihkYXRhPT12YWwpe1xuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYoIWZvdW5kKXtcbiAgICAgICAgICAgICAgICB2YWx1ZS5wdXNoKHZhbCkgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYodHlwZS5pbmNsdWRlcygnc29ydF9vbicpICkge1xuXG4gICAgICAgICAgICBpZih2YWwuaW5jbHVkZXMoJ3ByaWNlX2FzYycpIHx8IHZhbC5pbmNsdWRlcygncHJpY2VfZGVzYycpICl7XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLnN0YXRlW3R5cGVdPT0nZmVlcycgJiYgKCAodGhpcy5zdGF0ZVsnc29ydF9vcmRlciddPT0nYXNjJyAmJiB2YWwuaW5jbHVkZXMoJ3ByaWNlX2FzYycpICkgfHwgKHRoaXMuc3RhdGVbJ3NvcnRfb3JkZXInXT09J2Rlc2MnICYmIHZhbC5pbmNsdWRlcygncHJpY2VfZGVzYycpICkgKSApe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzb3J0X29uOiBudWxsLCBzb3J0X29yZGVyOiBudWxsfSlcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c29ydF9vbjogJ2ZlZXMnLCBzb3J0X29yZGVyOiB2YWwuaW5jbHVkZXMoJ3ByaWNlX2FzYycpPydhc2MnOidkZXNjJ30pXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNvcnRfb246IHRoaXMuc3RhdGVbdHlwZV09PXZhbHVlP251bGw6dmFsdWUsIHNvcnRfb3JkZXI6IG51bGwgfSkgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIGlmKHR5cGUuaW5jbHVkZXMoJ2xhYl92aXNpdCcpIHx8IHR5cGUuaW5jbHVkZXMoJ2hvbWVfdmlzaXQnKSl7XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLnN0YXRlW3R5cGVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1t0eXBlXTogIXRoaXMuc3RhdGVbdHlwZV19KVxuICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7J2xhYl92aXNpdCc6IHR5cGUuaW5jbHVkZXMoJ2xhYl92aXNpdCcpP3ZhbHVlOiF2YWx1ZSwgJ2hvbWVfdmlzaXQnOiB0eXBlLmluY2x1ZGVzKCdob21lX3Zpc2l0Jyk/dmFsdWU6IXZhbHVlfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbdHlwZV06IHRoaXMuc3RhdGVbdHlwZV09PXZhbHVlPycnOnZhbHVlIH0pICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUNsb3NlKHJlc2V0PWZhbHNlLCBlKSB7XG5cbiAgICAgICAgaWYocmVzZXQpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnUmVzZXRMYWJGaWx0ZXInLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdyZXNldC1sYWItZmlsdGVyJywgJ3VybCc6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSwgJ3NvcnRfb3JkZXInOiB0aGlzLnN0YXRlLnNvcnRfb3JkZXIgfHwgJycsICdhdmFpbGFiaWxpdHknOiB0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eSwgJ2F2Z19yYXRpbmdzJzogdGhpcy5zdGF0ZS5hdmdfcmF0aW5ncywgJ2xhYl92aXNpdCc6IHRoaXMuc3RhdGUubGFiX3Zpc2l0LCAnaG9tZV92aXNpdCc6IHRoaXMuc3RhdGUuaG9tZV92aXNpdCwgJ3NvcnRfb24nOiB0aGlzLnN0YXRlLnNvcnRfb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgICAgIGxldCByZXNldEZpbHRlcnMgPSB7XG4gICAgICAgICAgICAgICAgc29ydF9vbjogJycsXG4gICAgICAgICAgICAgICAgc29ydF9vcmRlcjogJycsXG4gICAgICAgICAgICAgICAgYXZnX3JhdGluZ3M6ICcnLFxuICAgICAgICAgICAgICAgIGhvbWVfdmlzaXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGxhYl92aXNpdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXZhaWxhYmlsaXR5OiBbXVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAuLi5yZXNldEZpbHRlcnMsXG4gICAgICAgICAgICAgICAgcXVpY2tGaWx0ZXI6IHt9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0Nsb3NlTGFiRmlsdGVyJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2xvc2UtbGFiLWZpbHRlcicsICd1cmwnOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsICdzb3J0X29yZGVyJzogdGhpcy5zdGF0ZS5zb3J0X29yZGVyIHx8ICcnLCAnYXZhaWxhYmlsaXR5JzogdGhpcy5zdGF0ZS5hdmFpbGFiaWxpdHksICdhdmdfcmF0aW5ncyc6IHRoaXMuc3RhdGUuYXZnX3JhdGluZ3MsICdsYWJfdmlzaXQnOiB0aGlzLnN0YXRlLmxhYl92aXNpdCwgJ2hvbWVfdmlzaXQnOiB0aGlzLnN0YXRlLmhvbWVfdmlzaXQsICdzb3J0X29uJzogdGhpcy5zdGF0ZS5zb3J0X29uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25fdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5wcmV2aW91c19maWx0ZXJzLFxuICAgICAgICAgICAgICAgIHF1aWNrRmlsdGVyOiB7fVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vdGhpcy5wcm9wcy5yZXNldFF1aWNrRmlsdGVycygpXG4gICAgICAgIFxuICAgIH1cblxuICAgIGdldENyaXRlcmlhU3RyaW5nKHNlbGVjdGVkQ3JpdGVyaWFzKSB7XG4gICAgICAgIGlmIChzZWxlY3RlZENyaXRlcmlhcyAmJiBzZWxlY3RlZENyaXRlcmlhcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZENyaXRlcmlhcy5yZWR1Y2UoKGZpbmFsLCBjdXJyLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGkgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBmaW5hbCArPSAnLCAnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsICs9IGAke2N1cnIubmFtZX1gXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbmFsXG4gICAgICAgICAgICB9LCBcIlwiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvcnRlblVybCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmICsgJyZmb3JjZV9sb2NhdGlvbj10cnVlJ1xuICAgICAgICAgICAgdGhpcy5wcm9wcy51cmxTaG9ydG5lcih1cmwsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvcnRVUkw6IGRhdGEudGlueV91cmwgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb3ZlcmxheUNsaWNrKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3ZlcmxheVZpc2libGU6IGZhbHNlLCBzZWFyY2hDaXRpZXM6IFtdLCBzaG93TG9jYXRpb25Qb3B1cDogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgaGlkZUxvY2F0aW9uUG9wdXAoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9jYXRpb25Qb3B1cDogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgcG9wdXBDb250YWluZXIoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93UG9wdXBDb250YWluZXI6IGZhbHNlLCBzaG93TG9jYXRpb25Qb3B1cDogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgZ29Ub0xvY2F0aW9uKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlYXJjaENpdGllczogW10sXG4gICAgICAgIH0pXG4gICAgICAgIC8qbGV0IHJlZGlyZWN0X3RvID0gXCJcIlxuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCdsYmNpdCcpIHx8IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygnbGJsaXRjaXQnKSkge1xuICAgICAgICAgICAgcmVkaXJlY3RfdG8gPSBcIi9sYWIvc2VhcmNocmVzdWx0c1wiXG4gICAgICAgIH1cbiAgICAgICAgKi9cbiAgICAgICAgbGV0IGxvY2F0aW9uX3VybCA9ICcvbG9jYXRpb25zZWFyY2gnXG4gICAgICAgIC8qICAgICAgICBpZiAocmVkaXJlY3RfdG8pIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25fdXJsICs9IGA/cmVkaXJlY3RfdG89JHtyZWRpcmVjdF90b31gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAqL1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDaGFuZ2VMb2NhdGlvbkRvY3RvclJlc3VsdHNQb3BVcCcsICdBY3Rpb24nOiAnY2hhbmdlLWxvY2F0aW9uLWRvY3Rvci1yZXN1bHRzLVBvcFVwJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2hhbmdlLWxvY2F0aW9uLWRvY3Rvci1yZXN1bHRzLVBvcFVwJywgJ3VybCc6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGxvY2F0aW9uX3VybClcblxuICAgIH1cblxuICAgIHNvcnRGaWx0ZXJDbGlja2VkKCkge1xuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnTGFiU29ydEZpbHRlckNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdsYWItc29ydC1maWx0ZXItY2xpY2tlZCcsICd1cmwnOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsICdzb3J0X29yZGVyJzogdGhpcy5zdGF0ZS5zb3J0X29yZGVyIHx8ICcnLCAnYXZhaWxhYmlsaXR5JzogdGhpcy5zdGF0ZS5hdmFpbGFiaWxpdHksICdhdmdfcmF0aW5ncyc6IHRoaXMuc3RhdGUuYXZnX3JhdGluZ3MsICdsYWJfdmlzaXQnOiB0aGlzLnN0YXRlLmxhYl92aXNpdCwgJ2hvbWVfdmlzaXQnOiB0aGlzLnN0YXRlLmhvbWVfdmlzaXQsICdzb3J0X29uJzogdGhpcy5zdGF0ZS5zb3J0X29uXG4gICAgICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIGxldCBjdXJyZW50RmlsdGVycyA9IHtcbiAgICAgICAgICAgIHNvcnRfb246IHRoaXMuc3RhdGUuc29ydF9vbixcbiAgICAgICAgICAgIHNvcnRfb3JkZXI6IHRoaXMuc3RhdGUuc29ydF9vcmRlcixcbiAgICAgICAgICAgIGF2Z19yYXRpbmdzOiB0aGlzLnN0YXRlLmF2Z19yYXRpbmdzLFxuICAgICAgICAgICAgYXZhaWxhYmlsaXR5OiBbXS5jb25jYXQodGhpcy5zdGF0ZS5hdmFpbGFiaWxpdHkpIHx8IFtdLFxuICAgICAgICAgICAgaG9tZV92aXNpdDogdGhpcy5zdGF0ZS5ob21lX3Zpc2l0LFxuICAgICAgICAgICAgbGFiX3Zpc2l0OiB0aGlzLnN0YXRlLmxhYl92aXNpdFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkcm9wZG93bl92aXNpYmxlOiB0cnVlLCBwcmV2aW91c19maWx0ZXJzOiBjdXJyZW50RmlsdGVycyB9KVxuICAgIH1cblxuICAgIGlzRGF0YUZpbHRlcmVkKGZpbHRlckRhdGEgPSB7fSwgY2hlY2tJZkFueUZpbHRlckFwcGxpbGVkPSBmYWxzZSkge1xuXG4gICAgICAgIGlmIChjaGVja0lmQW55RmlsdGVyQXBwbGlsZWQpIHtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgZmlsdGVyQ291bnQgPSAwXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZmlsdGVyIGluIHRoaXMuc3RhdGUucHJldmlvdXNfZmlsdGVycykge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIuaW5jbHVkZXMoJ2F2YWlsYWJpbGl0eScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnByZXZpb3VzX2ZpbHRlcnNbZmlsdGVyXSAmJiB0aGlzLnN0YXRlW2ZpbHRlcl0ubGVuZ3RoICE9IHRoaXMuc3RhdGUucHJldmlvdXNfZmlsdGVyc1tmaWx0ZXJdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckNvdW50KytcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgYXJyRmxpdGVyPTA7YXJyRmxpdGVyPHRoaXMuc3RhdGVbZmlsdGVyXS5sZW5ndGg7IGFyckZsaXRlcisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUucHJldmlvdXNfZmlsdGVyc1tmaWx0ZXJdLmluZGV4T2YodGhpcy5zdGF0ZVtmaWx0ZXJdW2FyckZsaXRlcl0pPT0tMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJDb3VudCsrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5zdGF0ZVtmaWx0ZXJdICE9IHRoaXMuc3RhdGUucHJldmlvdXNfZmlsdGVyc1tmaWx0ZXJdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckNvdW50KytcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmaWx0ZXJDb3VudFxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGZpbHRlckRhdGEgPSB7XG4gICAgICAgICAgICAgICAgYXZnX3JhdGluZ3M6ICcnLFxuICAgICAgICAgICAgICAgIGF2YWlsYWJpbGl0eTogW10sXG4gICAgICAgICAgICAgICAgaG9zcGl0YWxfdHlwZTogJydcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgZmlsdGVyQ291bnQgPSAwXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZmlsdGVyIGluIGZpbHRlckRhdGEpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZihmaWx0ZXIuaW5jbHVkZXMoJ2hvc3BpdGFsX3R5cGUnKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnN0YXRlWydsYWJfdmlzaXQnXSB8fCB0aGlzLnN0YXRlWydob21lX3Zpc2l0J10pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckNvdW50KytcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYgKGZpbHRlciA9PSAnYXZhaWxhYmlsaXR5Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGVbZmlsdGVyXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJDb3VudCsrXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyRGF0YVtmaWx0ZXJdICE9IHRoaXMuc3RhdGVbZmlsdGVyXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyQ291bnQrK1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmaWx0ZXJDb3VudFxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIHRvZ2dsZUluc3VyZWQoKSB7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvdmVyZWRVbmRlckxBQkluc3VyYW5jZUNsaWNrZWQnLCAnQWN0aW9uJzogJ0NvdmVyZWRVbmRlckxBQkluc3VyYW5jZUNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjb3ZlcmVkLXVuZGVyLWxhYi1pbnN1cmFuY2UtY2xpY2tlZCcsICd1cmwnOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc19pbnN1cmVkOiAhdGhpcy5zdGF0ZS5pc19pbnN1cmVkIH0sICgpID0+IHtcblxuXG4gICAgICAgICAgICBsZXQgZmlsdGVyU3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgc29ydF9vbjogdGhpcy5zdGF0ZS5zb3J0X29uLFxuICAgICAgICAgICAgICAgIHNvcnRfb3JkZXI6IHRoaXMuc3RhdGUuc29ydF9vcmRlcixcbiAgICAgICAgICAgICAgICBhdmFpbGFiaWxpdHk6IHRoaXMuc3RhdGUuYXZhaWxhYmlsaXR5LFxuICAgICAgICAgICAgICAgIGF2Z19yYXRpbmdzOiB0aGlzLnN0YXRlLmF2Z19yYXRpbmdzLFxuICAgICAgICAgICAgICAgIGhvbWVfdmlzaXQ6IHRoaXMuc3RhdGUuaG9tZV92aXNpdCxcbiAgICAgICAgICAgICAgICBsYWJfdmlzaXQ6IHRoaXMuc3RhdGUubGFiX3Zpc2l0LFxuICAgICAgICAgICAgICAgIGlzX2luc3VyZWQ6IHRoaXMuc3RhdGUuaXNfaW5zdXJlZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hcHBseUZpbHRlcnMoZmlsdGVyU3RhdGUpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHZhciBzZWxlY3RlZFRlc3RzID0gW11cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BzLmN1cnJlbnRTZWFyY2hlZENyaXRlcmlhcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkVGVzdHMucHVzaCh0aGlzLnByb3BzLmN1cnJlbnRTZWFyY2hlZENyaXRlcmlhc1tpXS5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY3JpdGVyaWFTdHIgPSB0aGlzLmdldENyaXRlcmlhU3RyaW5nKHRoaXMucHJvcHMuY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzKVxuICAgICAgICBsZXQgbG9jYXRpb25OYW1lID0gXCJcIlxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5mb3JtYXR0ZWRfYWRkcmVzcykge1xuICAgICAgICAgICAgbG9jYXRpb25OYW1lID0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLmZvcm1hdHRlZF9hZGRyZXNzXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VvRGF0YSAmJiB0aGlzLnByb3BzLnNlb0RhdGEubG9jYXRpb24pIHtcbiAgICAgICAgICAgIGxvY2F0aW9uTmFtZSA9IHRoaXMucHJvcHMuc2VvRGF0YS5sb2NhdGlvblxuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kcm9wZG93bl92aXNpYmxlID9cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLW92ZXJsYXkgY2FuY2VsLW92ZXJsYXktemluZGV4XCIgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZS5iaW5kKHRoaXMsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IGNhbmNlbC1hcHBvaW50bWVudC1kaXYgY2FuY2VsLXBvcHVwIG92ZXJmbG93LWhpZGRlbiBwYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcm9zcy1idG5cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlLmJpbmQodGhpcywgZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY29ucy9jbG9zZS5wbmdcIn0gYWx0PVwiY2xvc2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wLXRvcC1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvcnQvRmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3J0aW5nLW1haW4tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29ydC1sZnQtY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInNvcnQtaGVhZGluZ3NcIj5Tb3J0IGJ5PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29ydC1zbGlkZXItc2Nyb2xsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bzb3J0LWNhcmRzLWxpc3QgJHt0aGlzLnN0YXRlLnNvcnRfb249PScnPydjaGl0QWN0aXZlJzonJ31gfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFsbEZpbHRlcnMuYmluZCh0aGlzLCAnc29ydF9vbicsICcnLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNydC1sc3QtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zb3J0X29uPT0nJz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3BvcHVwaWNvbi9ydi1yZWxldmVuY2Uuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiAxOCB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3JldmVsLnN2Z1wifSBzdHlsZT17eyB3aWR0aDogMTggfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlJlbGV2YW5jZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaXNfbG9naW5fdXNlcl9pbnN1cmVkICYmIHRoaXMucHJvcHMuaW5zdXJhbmNlX3N0YXR1cyA9PSAxPycnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8ZGl2IGNsYXNzTmFtZT17YHNvcnQtY2FyZHMtbGlzdCAke3RoaXMuc3RhdGUuc29ydF9vbj09J2ZlZXMnICYmIHRoaXMuc3RhdGUuc29ydF9vcmRlcj09J2FzYyc/J2NoaXRBY3RpdmUnOicnfWB9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlQWxsRmlsdGVycy5iaW5kKHRoaXMsICdzb3J0X29uJywgJ3ByaWNlX2FzYycsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNydC1sc3QtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNvcnRfb249PSdmZWVzJyAmJiB0aGlzLnN0YXRlLnNvcnRfb3JkZXI9PSdhc2MnP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3BvcHVwaWNvbi9ydi1wcmljZXNvcnQuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiAxOCB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wb3B1cGljb24vcHJpY2Vzb3J0LnN2Z1wifSBzdHlsZT17eyB3aWR0aDogMTggfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlByaWNlIExvdyB0byBIaWdoPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaXNfbG9naW5fdXNlcl9pbnN1cmVkICYmIHRoaXMucHJvcHMuaW5zdXJhbmNlX3N0YXR1cyA9PSAxPycnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8ZGl2IGNsYXNzTmFtZT17YHNvcnQtY2FyZHMtbGlzdCAke3RoaXMuc3RhdGUuc29ydF9vbj09J2ZlZXMnICYmIHRoaXMuc3RhdGUuc29ydF9vcmRlcj09J2Rlc2MnPydjaGl0QWN0aXZlJzonJ31gfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFsbEZpbHRlcnMuYmluZCh0aGlzLCAnc29ydF9vbicsICdwcmljZV9kZXNjJywgZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3J0LWxzdC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc29ydF9vbj09J2ZlZXMnICYmIHRoaXMuc3RhdGUuc29ydF9vcmRlcj09J2Rlc2MnP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3BvcHVwaWNvbi9ydi1wcmljZXVwLnN2Z1wifSBzdHlsZT17eyB3aWR0aDogMTggfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcG9wdXBpY29uL3ByaWNldXAuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiAxOCB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UHJpY2UgSGlnaCB0byBMb3c8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHNvcnQtY2FyZHMtbGlzdCAke3RoaXMuc3RhdGUuc29ydF9vbj09J2Rpc3RhbmNlJz8nY2hpdEFjdGl2ZSc6Jyd9YH0gb25DbGljaz17dGhpcy50b2dnbGVBbGxGaWx0ZXJzLmJpbmQodGhpcywgJ3NvcnRfb24nLCAnZGlzdGFuY2UnLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNydC1sc3QtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zb3J0X29uPT0nZGlzdGFuY2UnP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcG9wdXBpY29uL3J2LWxvY2F0aW9ucy5zdmdcIn0gc3R5bGU9e3sgd2lkdGg6IDE0IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcG9wdXBpY29uL2xvY2F0aW9ucy5zdmdcIn0gc3R5bGU9e3sgd2lkdGg6IDE0IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5EaXN0YW5jZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHNvcnQtY2FyZHMtbGlzdCAke3RoaXMuc3RhdGUuc29ydF9vbj09J3JhdGluZyc/J2NoaXRBY3RpdmUnOicnfWB9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlQWxsRmlsdGVycy5iaW5kKHRoaXMsICdzb3J0X29uJywgJ3JhdGluZycsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3J0LWxzdC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNvcnRfb249PSdyYXRpbmcnP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcG9wdXBpY29uL3J2LXJhdG5nLnN2Z1wifSBzdHlsZT17eyB3aWR0aDogMTggfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wb3B1cGljb24vcmF0bmcuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiAxOCB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UmF0aW5nPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvcnRpbmctYnRucy1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwic29ydC1oZWFkaW5nc1wiPlJhdGluZ3M8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3J0YnRuY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgc29ydEJ0bnMgJHt0aGlzLnN0YXRlLmF2Z19yYXRpbmdzID09JzMnPyAnc3J0QnRuQWN0JyA6ICcnfWB9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlQWxsRmlsdGVycy5iaW5kKHRoaXMsICdhdmdfcmF0aW5ncycsICczJywgZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hdmdfcmF0aW5ncyA9PSczJz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic3J0LXN0YXItaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcG9wdXBpY29uL3J2LWJ0bi1zdGFyLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxpbWcgY2xhc3NOYW1lPVwic3J0LXN0YXItaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvc2VsZWN0ZWQtc3Rhci5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMuMCArPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Bzb3J0QnRucyAke3RoaXMuc3RhdGUuYXZnX3JhdGluZ3MgPT0nNCc/ICdzcnRCdG5BY3QnIDogJyd9YH0gb25DbGljaz17dGhpcy50b2dnbGVBbGxGaWx0ZXJzLmJpbmQodGhpcywgJ2F2Z19yYXRpbmdzJywgJzQnLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmF2Z19yYXRpbmdzID09JzQnP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzcnQtc3Rhci1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wb3B1cGljb24vcnYtYnRuLXN0YXIuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PGltZyBjbGFzc05hbWU9XCJzcnQtc3Rhci1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9zZWxlY3RlZC1zdGFyLnN2Z1wifSAvPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQuMCArPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Bzb3J0QnRucyAke3RoaXMuc3RhdGUuYXZnX3JhdGluZ3MgPT0nNC41Jz8gJ3NydEJ0bkFjdCcgOiAnJ31gfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFsbEZpbHRlcnMuYmluZCh0aGlzLCAnYXZnX3JhdGluZ3MnLCAnNC41JywgZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hdmdfcmF0aW5ncz09JzQuNSc/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNydC1zdGFyLWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3BvcHVwaWNvbi9ydi1idG4tc3Rhci5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8aW1nIGNsYXNzTmFtZT1cInNydC1zdGFyLWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3NlbGVjdGVkLXN0YXIuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LjUgKzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvcnRpbmctYnRucy1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwic29ydC1oZWFkaW5nc1wiPkF2YWlsYWJpbGl0eTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvcnRidG5jYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Bzb3J0QnRucyAke3RoaXMuc3RhdGUuYXZhaWxhYmlsaXR5ICYmIHRoaXMuc3RhdGUuYXZhaWxhYmlsaXR5Lmxlbmd0aCAmJiB0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eS5pbmRleE9mKCcxJykgPiAtMSA/ICdzcnRCdG5BY3QnIDogJyd9YH0gb25DbGljaz17dGhpcy50b2dnbGVBbGxGaWx0ZXJzLmJpbmQodGhpcywgJ2F2YWlsYWJpbGl0eScsICcxJywgdHJ1ZSl9PlRvZGF5PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Bzb3J0QnRucyAke3RoaXMuc3RhdGUuYXZhaWxhYmlsaXR5ICYmIHRoaXMuc3RhdGUuYXZhaWxhYmlsaXR5Lmxlbmd0aCAmJiB0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eS5pbmRleE9mKCcyJykgPiAtMSA/ICdzcnRCdG5BY3QnIDogJyd9YH0gb25DbGljaz17dGhpcy50b2dnbGVBbGxGaWx0ZXJzLmJpbmQodGhpcywgJ2F2YWlsYWJpbGl0eScsICcyJywgdHJ1ZSl9PlRvbW9ycm93PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Bzb3J0QnRucyAke3RoaXMuc3RhdGUuYXZhaWxhYmlsaXR5ICYmIHRoaXMuc3RhdGUuYXZhaWxhYmlsaXR5Lmxlbmd0aCAmJiB0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eS5pbmRleE9mKCczJykgPiAtMSA/ICdzcnRCdG5BY3QnIDogJyd9YH0gb25DbGljaz17dGhpcy50b2dnbGVBbGxGaWx0ZXJzLmJpbmQodGhpcywgJ2F2YWlsYWJpbGl0eScsICczJywgdHJ1ZSl9Pk5leHQgMyBEYXlzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29ydGluZy1idG5zLWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJzb3J0LWhlYWRpbmdzXCI+VmlzaXQgVHlwZTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvcnRidG5jYXJkIGp1c3R5ZnktdHdvQnRuc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgc29ydEJ0bnMgJHt0aGlzLnN0YXRlLmhvbWVfdmlzaXQgPyAnc3J0QnRuQWN0JyA6ICcnfWB9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlQWxsRmlsdGVycy5iaW5kKHRoaXMsICdob21lX3Zpc2l0JywgIXRoaXMuc3RhdGUuaG9tZV92aXNpdCwgZmFsc2UpfT5Ib21lIFZpc2l0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Bzb3J0QnRucyAke3RoaXMuc3RhdGUubGFiX3Zpc2l0ID8gJ3NydEJ0bkFjdCcgOiAnJ31gfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFsbEZpbHRlcnMuYmluZCh0aGlzLCAnbGFiX3Zpc2l0JywgIXRoaXMuc3RhdGUubGFiX3Zpc2l0LCBmYWxzZSl9PkxhYiBWaXNpdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wLWZvb3QtYnRucy1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWRkLXNocG5nLWNhcnQtYnRuXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZS5iaW5kKHRoaXMsIHRydWUpfT5SZXNldDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInYtYnRuLXByaW1hcnkgYm9vay1idG4tbXJnbi1hZGp1c3RcIiBvbkNsaWNrPXt0aGlzLmFwcGx5RmlsdGVycy5iaW5kKHRoaXMpfT5BcHBseSBGaWx0ZXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLXJvdyBzdGlja3ktaGVhZGVyIG1ibC1zdGlja1wiIGlkPVwiZmlzX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1yb3cgc3RpY2t5LWhlYWRlciBtYmwtc3RpY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNjcm9sbC1zaGFkb3ctYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtZmlsdGVyLXRhYi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtZmlsdGVyLXRhYnMtc2VsZWN0IGxvY2F0aW9uVGVzdEZpbHRlclwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm5ld1N0aWNreWZpbHRlclwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY291bnR9IFJlc3VsdHMge2NyaXRlcmlhU3RyID8gXCJmb3IgXCIgOiBcIlwifXtjcml0ZXJpYVN0cn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25OYW1lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMuZ29Ub0xvY2F0aW9uLmJpbmQodGhpcyl9ID57YCBpbiAke2xvY2F0aW9uTmFtZX1gfTxpbWcgc3R5bGU9e3sgd2lkdGg6ICcxMXB4JywgaGVpZ2h0OiAnMTVweCcsIG1hcmdpbkxlZnQ6ICc3cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2VkaXQuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1pbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJpbmxpbmUtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1pbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17dGhpcy5zaG9ydGVuVXJsLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy91cmwtc2hvcnQuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiA4MCB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvcnRVUkwgPyA8ZGl2IGNsYXNzTmFtZT1cInNoYXJlTGlua3BvcHVwT3ZlcmxheVwiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG9ydFVSTDogXCJcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcmVMaW5rcG9wdXBcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLnNob3J0VVJMfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkIHRleHQ9e3RoaXMuc3RhdGUuc2hvcnRVUkx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlNob3J0ZW5lZCBVUkwgQ29waWVkLlwiIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3J0VVJMOiBcIlwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaHJlbGlua0J0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5Db3B5PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWZpbHRlci10YWJzLXNlbGVjdCBuZXdTb3J0RmlsdGVyYmFyXCIgb25DbGljaz17dGhpcy5zb3J0RmlsdGVyQ2xpY2tlZC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1yZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcxNHB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9maWx0ZXJzb3J0LnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0RhdGFGaWx0ZXJlZCgpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZpbHRlck5vdGlmaWNhdGlvblwiPnt0aGlzLmlzRGF0YUZpbHRlcmVkKCl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U29ydC9GaWx0ZXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dMb2NhdGlvblBvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYXRpb25FbGVtZW50cyB7Li4udGhpcy5wcm9wc30gb25SZWY9e3JlZiA9PiAodGhpcy5jaGlsZCA9IHJlZil9IHJlc3VsdFR5cGU9J2xpc3QnIGlzVG9wYmFyPXt0cnVlfSBoaWRlTG9jYXRpb25Qb3B1cD17KCkgPT4gdGhpcy5oaWRlTG9jYXRpb25Qb3B1cCgpfSBsb2NhdGlvbk5hbWU9e2xvY2F0aW9uTmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dMb2NhdGlvblBvcHVwICYmIHRoaXMuc3RhdGUub3ZlcmxheVZpc2libGUgJiYgIXRoaXMucHJvcHMubGFiX2NhcmQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9jYXRpb25Qb3B1cC1vdmVybGF5XCIgb25DbGljaz17KCkgPT4gdGhpcy5vdmVybGF5Q2xpY2soKX0gPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0xvY2F0aW9uUG9wdXAgJiYgdGhpcy5wcm9wcy5sYWJfY2FyZCAmJiB0aGlzLnN0YXRlLnNob3dQb3B1cENvbnRhaW5lciA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cENvbnRhaW5lci1vdmVybGF5XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNUT1JBR0UuY2hlY2tBdXRoKCkgJiYgdGhpcy5wcm9wcy5pc19sb2dpbl91c2VyX2luc3VyZWQgJiYgdGhpcy5wcm9wcy5pbnN1cmFuY2Vfc3RhdHVzID09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPVwidGctbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ0Z2wgdGdsLWlvc1wiIGlkPVwibGFiX2luc3VyYW5jZVwiIHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3RoaXMuc3RhdGUuaXNfaW5zdXJlZH0gb25DaGFuZ2U9e3RoaXMudG9nZ2xlSW5zdXJlZC5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGdsLWJ0blwiIGh0bWxGb3I9XCJsYWJfaW5zdXJhbmNlXCI+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q292ZXJlZCB1bmRlciBPUEQgaW5zdXJhbmNlIHwgPGEgaHJlZj1cImh0dHBzOi8vcWFjZG4uZG9jcHJpbWUuY29tL21lZGlhL2luc3VyZXIvZG9jdW1lbnRzL0dyb3VwX091dC1QYXRpZW50X0NJU19KTkxWSmp1LlBERlwiIHRhcmdldD1cIl9ibGFua1wiPjxzcGFuPiBLbm93IE1vcmU8L3NwYW4+PC9hPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFRvcEJhclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUmFuZ2UgZnJvbSAncmMtc2xpZGVyL2xpYi9SYW5nZSc7XG5pbXBvcnQgeyBDb3B5VG9DbGlwYm9hcmQgfSBmcm9tICdyZWFjdC1jb3B5LXRvLWNsaXBib2FyZCc7XG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBMb2NhdGlvbkVsZW1lbnRzIGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMvY29tbW9ucy9sb2NhdGlvbkVsZW1lbnRzJ1xuaW1wb3J0IExvY2F0aW9uUG9wdXAgZnJvbSAnLi4vLi4vLi4vLi4vY29udGFpbmVycy9jb21tb25zL2xvY2F0aW9uUG9wdXAnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvZ3RtJ1xuXG5jbGFzcyBUb3BCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgLy8gYW5jaG9yRWw6IG51bGwsXG4gICAgICAgICAgICAvLyBvcGVuRmlsdGVyOiBmYWxzZSxcbiAgICAgICAgICAgIC8vIHByaWNlUmFuZ2U6IFswLCAyMDAwMF0sXG4gICAgICAgICAgICAvLyBkaXN0YW5jZVJhbmdlOiBbMCwgMTVdLFxuICAgICAgICAgICAgLy8gc29ydF9vbjogbnVsbCxcbiAgICAgICAgICAgIHNob3J0VVJMOiBcIlwiLFxuICAgICAgICAgICAgLy8gZHJvcGRvd25fdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICBzaG93TG9jYXRpb25Qb3B1cDogZmFsc2UsXG4gICAgICAgICAgICBvdmVybGF5VmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICBzaG93UG9wdXBDb250YWluZXI6IHRydWUsXG4gICAgICAgICAgICAvLyBzb3J0VGV4dDogJ1JlbGV2YW5jZSdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnByb3BzLmZpbHRlckNyaXRlcmlhIH0pXG4gICAgICAgIGlmIChwcm9wcy5sb2NhdGlvblR5cGUgJiYgIXByb3BzLmxvY2F0aW9uVHlwZS5pbmNsdWRlcyhcImdlb1wiKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHByb3BzLnNlb0RhdGEgJiYgcHJvcHMuc2VvRGF0YS5sb2NhdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9jYXRpb25Qb3B1cDogZmFsc2UgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKChwcm9wcy5zZW9EYXRhICYmIHByb3BzLnNlb0RhdGEubG9jYXRpb24pIHx8IHByb3BzLnNlb0ZyaWVuZGx5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9jYXRpb25Qb3B1cDogdHJ1ZSwgb3ZlcmxheVZpc2libGU6IHRydWUgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5zaG9ydGVuVXJsKClcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMucHJvcHMuZmlsdGVyQ3JpdGVyaWEgfSlcbiAgICAgICAgLy8gdGhpcy5zaG9ydGVuVXJsKClcbiAgICAgICAgaWYgKCh0aGlzLnByb3BzLnNlb0RhdGEgJiYgdGhpcy5wcm9wcy5zZW9EYXRhLmxvY2F0aW9uKSB8fCB0aGlzLnByb3BzLnNlb0ZyaWVuZGx5KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2NhdGlvblR5cGUgJiYgdGhpcy5wcm9wcy5sb2NhdGlvblR5cGUuaW5jbHVkZXMoXCJnZW9cIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xvY2F0aW9uUG9wdXA6IHRydWUsIG92ZXJsYXlWaXNpYmxlOiB0cnVlIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhcHBseUZpbHRlcnMoKSB7XG4gICAgLy8gICAgIGxldCBmaWx0ZXJTdGF0ZSA9IHtcbiAgICAvLyAgICAgICAgIHByaWNlUmFuZ2U6IHRoaXMuc3RhdGUucHJpY2VSYW5nZSxcbiAgICAvLyAgICAgICAgIGRpc3RhbmNlUmFuZ2U6IHRoaXMuc3RhdGUuZGlzdGFuY2VSYW5nZSxcbiAgICAvLyAgICAgICAgIHNvcnRfb246IHRoaXMuc3RhdGUuc29ydF9vblxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGxldCBkYXRhID0ge1xuICAgIC8vICAgICAgICAgJ0NhdGVnb3J5JzogJ0ZpbHRlckNsaWNrJywgJ0FjdGlvbic6ICdDbGlja2VkIG9uIEZpbHRlcicsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2xhYi1maWx0ZXItY2xpY2tlZCcsICd1cmwnOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsICdsb3dQcmljZVJhbmdlJzogdGhpcy5zdGF0ZS5wcmljZVJhbmdlWzBdLCAnaGlnaFByaWNlUmFuZ2UnOiB0aGlzLnN0YXRlLnByaWNlUmFuZ2VbMV0sICdsb3dEaXN0YW5jZVJhbmdlJzogdGhpcy5zdGF0ZS5kaXN0YW5jZVJhbmdlWzBdLCAnaGlnaERpc3RhbmNlUmFuZ2UnOiB0aGlzLnN0YXRlLmRpc3RhbmNlUmFuZ2VbMV0sICdzb3J0X29uJzogdGhpcy5zdGF0ZS5zb3J0X29uID09IFwiXCIgPyAncmVsZXZhbmNlJyA6IHRoaXMuc3RhdGUuc29ydF9vblxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgLy8gICAgIHRoaXMucHJvcHMuYXBwbHlGaWx0ZXJzKGZpbHRlclN0YXRlKVxuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbkZpbHRlcjogZmFsc2UgfSlcbiAgICAvLyB9XG5cbiAgICAvLyBoYW5kbGVPcGVuKGV2ZW50KSB7XG4gICAgLy8gICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBhbmNob3JFbDogZXZlbnQuY3VycmVudFRhcmdldCB9KVxuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAvLyAgICAgICAgIGRyb3Bkb3duX3Zpc2libGU6IHRydWVcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxuXG4gICAgLy8gaGlkZVNvcnREaXYoKSB7XG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgICAgICAgZHJvcGRvd25fdmlzaWJsZTogZmFsc2VcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxuXG4gICAgLy8gaGFuZGxlQ2xvc2UodHlwZSkge1xuICAgIC8vICAgICBsZXQgZGF0YSA9IHtcbiAgICAvLyAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnTGFiU29ydEZpbHRlckFwcGxpZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdsYWItc29ydC1maWx0ZXItYXBwbGllZCcsICd1cmwnOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsICdzb3J0X29uJzogdHlwZSA9PT0gXCJcIiA/ICdyZWxldmFuY2UnIDogdHlwZVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBhbmNob3JFbDogbnVsbCwgc29ydF9vbjogdHlwZSwgZHJvcGRvd25fdmlzaWJsZTogZmFsc2UgfSwgKCkgPT4ge1xuICAgIC8vICAgICAgICAgaWYgKHR5cGUgfHwgdHlwZSA9PT0gXCJcIikge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuYXBwbHlGaWx0ZXJzKClcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSlcbiAgICAvLyB9XG5cbiAgICAvLyB0b2dnbGVGaWx0ZXIoKSB7XG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgICAgICAgb3BlbkZpbHRlcjogIXRoaXMuc3RhdGUub3BlbkZpbHRlclxuICAgIC8vICAgICB9KVxuICAgIC8vIH1cblxuICAgIC8vIGhhbmRsZVJhbmdlKHR5cGUsIHJhbmdlKSB7XG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgICAgICAgW3R5cGVdOiByYW5nZVxuICAgIC8vICAgICB9KVxuICAgIC8vIH1cblxuICAgIGdldENyaXRlcmlhU3RyaW5nKHNlbGVjdGVkQ3JpdGVyaWFzKSB7XG4gICAgICAgIGlmIChzZWxlY3RlZENyaXRlcmlhcyAmJiBzZWxlY3RlZENyaXRlcmlhcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZENyaXRlcmlhcy5yZWR1Y2UoKGZpbmFsLCBjdXJyLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGkgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBmaW5hbCArPSAnLCAnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsICs9IGAke2N1cnIubmFtZX1gXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbmFsXG4gICAgICAgICAgICB9LCBcIlwiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gaXNGaWx0ZXJBcHBsaWVkKCkge1xuICAgIC8vICAgICBjb25zdCBkZWYgPSB7XG4gICAgLy8gICAgICAgICBwcmljZVJhbmdlOiBbMCwgMjAwMDBdLFxuICAgIC8vICAgICAgICAgZGlzdGFuY2VSYW5nZTogWzAsIDE1XVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHRyeSB7XG4gICAgLy8gICAgICAgICBmb3IgKGxldCBmaWx0ZXIgaW4gZGVmKSB7XG4gICAgLy8gICAgICAgICAgICAgaWYgKGRlZltmaWx0ZXJdWzBdICE9IHRoaXMuc3RhdGVbZmlsdGVyXVswXSB8fCBkZWZbZmlsdGVyXVsxXSAhPSB0aGlzLnN0YXRlW2ZpbHRlcl1bMV0pIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAvLyAgICAgfSBjYXRjaCAoZSkge1xuICAgIC8vICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICBzaG9ydGVuVXJsKCkge1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWZcbiAgICAgICAgICAgIGlmICh1cmwuaW5jbHVkZXMoJz8nKSkge1xuICAgICAgICAgICAgICAgIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmICsgJyZmb3JjZV9sb2NhdGlvbj10cnVlJ1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZiArICc/Zm9yY2VfbG9jYXRpb249dHJ1ZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvcHMudXJsU2hvcnRuZXIodXJsLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3J0VVJMOiBkYXRhLnRpbnlfdXJsIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG92ZXJsYXlDbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG92ZXJsYXlWaXNpYmxlOiBmYWxzZSwgc2VhcmNoQ2l0aWVzOiBbXSB9KTtcbiAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uX2VsZW1lbnQnKSl7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb25fZWxlbWVudCcpLnN0eWxlLnpJbmRleCA9JzAnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlTG9jYXRpb25Qb3B1cCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICBwb3B1cENvbnRhaW5lcigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dQb3B1cENvbnRhaW5lcjogZmFsc2UsIHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICBjaGFuZ2VCdG5DbGljaygpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ2NoYW5nZUJ0bk9uTGFiQ2FyZENsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2hhbmdlLWJ0bi1vbi1sYWItY2FyZC1jbGljaydcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICBsZXQgc2VsZWN0ZWRUZXN0cyA9IFtdXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmN1cnJlbnRTZWFyY2hlZENyaXRlcmlhcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5jdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRlc3RzLnB1c2godGhpcy5wcm9wcy5jdXJyZW50U2VhcmNoZWRDcml0ZXJpYXNbaV0uaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvbG9jYXRpb25zZWFyY2g/bGFiX2NhcmQ9dHJ1ZSZpZD0ke3NlbGVjdGVkVGVzdHN9YClcbiAgICB9XG5cbiAgICBnb1RvTG9jYXRpb24oKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2VhcmNoQ2l0aWVzOiBbXSxcbiAgICAgICAgfSlcbiAgICAgICAgLypsZXQgcmVkaXJlY3RfdG8gPSBcIlwiXG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJ2xiY2l0JykgfHwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCdsYmxpdGNpdCcpKSB7XG4gICAgICAgICAgICByZWRpcmVjdF90byA9IFwiL2xhYi9zZWFyY2hyZXN1bHRzXCJcbiAgICAgICAgfVxuKi9cbiAgICAgICAgbGV0IGxvY2F0aW9uX3VybCA9ICcvbG9jYXRpb25zZWFyY2gnXG4gICAgICAgIC8qICAgICAgICBpZiAocmVkaXJlY3RfdG8pIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25fdXJsICs9IGA/cmVkaXJlY3RfdG89JHtyZWRpcmVjdF90b31gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAqL1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDaGFuZ2VMb2NhdGlvbkRvY3RvclJlc3VsdHNQb3BVcCcsICdBY3Rpb24nOiAnY2hhbmdlLWxvY2F0aW9uLWRvY3Rvci1yZXN1bHRzLVBvcFVwJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2hhbmdlLWxvY2F0aW9uLWRvY3Rvci1yZXN1bHRzLVBvcFVwJywgJ3VybCc6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGxvY2F0aW9uX3VybClcblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICAvLyBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbHRlci1zY3JvbGxcIikpe1xuICAgICAgICAvLyAgICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vICAgICB2YXIgY3VycmVudFNjcm9sbFBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldFxuICAgICAgICAvLyAgICAgICBpZiAoY3VycmVudFNjcm9sbFBvcyA+IDApIHtcbiAgICAgICAgLy8gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbHRlci1zY3JvbGxcIikuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxuICAgICAgICAvLyAgICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsdGVyLXNjcm9sbFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXG4gICAgICAgIC8vICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgICBcbiAgICAgICAgLy8gbGV0IHNvcnRUeXBlID0gJydcbiAgICAgICAgLy8gaWYgKHRoaXMuc3RhdGUuc29ydF9vbikge1xuICAgICAgICAvLyAgICAgc29ydFR5cGUgPSB0aGlzLnN0YXRlLnNvcnRfb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnN0YXRlLnNvcnRfb24uc2xpY2UoMSk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICBsZXQgY3JpdGVyaWFTdHIgPSB0aGlzLmdldENyaXRlcmlhU3RyaW5nKHRoaXMucHJvcHMuY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzKVxuICAgICAgICBsZXQgbG9jYXRpb25OYW1lID0gXCJcIlxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5mb3JtYXR0ZWRfYWRkcmVzcykge1xuICAgICAgICAgICAgbG9jYXRpb25OYW1lID0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLmZvcm1hdHRlZF9hZGRyZXNzXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VvRGF0YSAmJiB0aGlzLnByb3BzLnNlb0RhdGEubG9jYXRpb24pIHtcbiAgICAgICAgICAgIGxvY2F0aW9uTmFtZSA9IHRoaXMucHJvcHMuc2VvRGF0YS5sb2NhdGlvblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIiBpZD1cImZpbHRlci1zY3JvbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItcGRuZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbi1maWx0ZXIgZC1ub25lIGQtbWQtYmxvY2sgYWxpZ25TaGFyZUJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImlubGluZS1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtbm9uZSBkLW1kLWlubGluZS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXt0aGlzLnNob3J0ZW5VcmwuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3VybC1zaG9ydC5zdmdcIn0gc3R5bGU9e3sgd2lkdGg6IDgwIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG9ydFVSTCA/IDxkaXYgY2xhc3NOYW1lPVwic2hhcmVMaW5rcG9wdXBPdmVybGF5XCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3J0VVJMOiBcIlwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFyZUxpbmtwb3B1cFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUuc2hvcnRVUkx9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmQgdGV4dD17dGhpcy5zdGF0ZS5zaG9ydFVSTH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiU2hvcnRlbmVkIFVSTCBDb3BpZWQuXCIgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvcnRVUkw6IFwiXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNocmVsaW5rQnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPkNvcHk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvdW50fSBSZXN1bHRzIHtjcml0ZXJpYVN0ciA/IFwiZm9yXCIgOiBcIlwifSA8c3BhbiBjbGFzc05hbWU9XCJmdy03MDBcIj4ge2NyaXRlcmlhU3RyfTwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dMb2NhdGlvblBvcHVwICYmIGZhbHNlID8gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbG9jYXRpb25OYW1lID8gPHNwYW4gY2xhc3NOYW1lPVwibG9jYXRpb24tZWRpdFwiPntgIGluICR7bG9jYXRpb25OYW1lfWB9PC9zcGFuPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6IDE1LCBoZWlnaHQ6IDE1LCBtYXJnaW5MZWZ0OiA3LCBjdXJzb3I6ICdwb2ludGVyJyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9lZGl0LnN2Z1wifSBvbkNsaWNrPXt0aGlzLmdvVG9Mb2NhdGlvbi5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93TG9jYXRpb25Qb3B1cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5sYWJfY2FyZCAmJiB0aGlzLnN0YXRlLnNob3dQb3B1cENvbnRhaW5lciA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhdGlvblBvcHVwIHsuLi50aGlzLnByb3BzfSBvblJlZj17cmVmID0+ICh0aGlzLmNoaWxkID0gcmVmKX0gcmVzdWx0VHlwZT0nbGlzdCcgaXNUb3BiYXI9e3RydWV9IGhpZGVMb2NhdGlvblBvcHVwPXsoKSA9PiB0aGlzLmhpZGVMb2NhdGlvblBvcHVwKCl9IGxvY2F0aW9uTmFtZT17bG9jYXRpb25OYW1lfSBjcml0ZXJpYVN0cmluZz17Y3JpdGVyaWFTdHJ9IHBvcHVwQ29udGFpbmVyPXsoKSA9PiB0aGlzLnBvcHVwQ29udGFpbmVyKCl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPExvY2F0aW9uRWxlbWVudHMgey4uLnRoaXMucHJvcHN9IG9uUmVmPXtyZWYgPT4gKHRoaXMuY2hpbGQgPSByZWYpfSByZXN1bHRUeXBlPSdsaXN0JyBpc1RvcGJhcj17dHJ1ZX0gaGlkZUxvY2F0aW9uUG9wdXA9eygpID0+IHRoaXMuaGlkZUxvY2F0aW9uUG9wdXAoKX0gbG9jYXRpb25OYW1lPXtsb2NhdGlvbk5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93TG9jYXRpb25Qb3B1cCAmJiB0aGlzLnN0YXRlLm92ZXJsYXlWaXNpYmxlICYmICF0aGlzLnByb3BzLmxhYl9jYXJkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvY2F0aW9uUG9wdXAtb3ZlcmxheVwiIG9uQ2xpY2s9eygpID0+IHRoaXMub3ZlcmxheUNsaWNrKCl9ID48L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93TG9jYXRpb25Qb3B1cCAmJiB0aGlzLnByb3BzLmxhYl9jYXJkICYmIHRoaXMuc3RhdGUuc2hvd1BvcHVwQ29udGFpbmVyID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwQ29udGFpbmVyLW92ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFRvcEJhclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IHRvZ2dsZTQwNCwgbWVyZ2VMQUJTdGF0ZSwgdXJsU2hvcnRuZXIsIGdldExhYnMsIHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhLCBnZXREaWFnbm9zaXNDcml0ZXJpYVJlc3VsdHMsIGNsZWFyRXh0cmFUZXN0cywgZ2V0Rm9vdGVyRGF0YSwgc2V0TGFiU2VhcmNoSWQsIGdldExhYlNlYXJjaElkUmVzdWx0cywgc2VsZWN0U2VhcmNoVHlwZSwgc2VsZWN0TGFiVGltZVNMb3QsIGdldE9mZmVyTGlzdCwgdG9nZ2xlT1BEQ3JpdGVyaWEsIHNlbGVjdExhYkFwcG9pbnRtZW50VHlwZSwgcmVzZXRQa2dDb21wYXJlLCBsb2FkT1BESW5zdXJhbmNlLCBOb25JcGRCb29raW5nTGVhZCwgY2xlYXJWaXBTZWxlY3RlZFBsYW4sc2F2ZUxlYWRQaG5OdW1iZXIgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IHsgb3BkU2VhcmNoU3RhdGVCdWlsZGVyLCBsYWJTZWFyY2hTdGF0ZUJ1aWxkZXIgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3VybHRvU3RhdGUnXG5pbXBvcnQgU2VhcmNoUmVzdWx0c1ZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kaWFnbm9zaXMvc2VhcmNoUmVzdWx0cy9pbmRleC5qcydcbmltcG9ydCBOb3RGb3VuZFZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL25vdEZvdW5kJ1xuXG5jbGFzcyBTZWFyY2hSZXN1bHRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNob3c0MDQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2hvdzQwNCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3c0MDQ6IHRydWUgfSlcbiAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlNDA0KGZhbHNlKVxuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMucHJvcHMubG9hZE9QREluc3VyYW5jZSh0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24pXG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWREYXRhKHN0b3JlLCBtYXRjaCwgcXVlcnlQYXJhbXMgPSB7fSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbG9jYXRpb25fbXMgPSBudWxsXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoLnVybC5pbmNsdWRlcygnbG9jYXRpb249JykpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25fbXMgPSBtYXRjaC51cmwuc3BsaXQoJ2xvY2F0aW9uPScpWzFdXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uX21zID0gcGFyc2VJbnQobG9jYXRpb25fbXMpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGFiU2VhcmNoU3RhdGVCdWlsZGVyKG51bGwsIHF1ZXJ5UGFyYW1zLCB0cnVlLCBsb2NhdGlvbl9tcykudGhlbigoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2gobWVyZ2VMQUJTdGF0ZShzdGF0ZSkpXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlYXJjaFVybCA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoLnVybC5pbmNsdWRlcygnLWxiY2l0JykgfHwgbWF0Y2gudXJsLmluY2x1ZGVzKCctbGJsaXRjaXQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoVXJsID0gbWF0Y2gudXJsLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFnZSA9IDFcbiAgICAgICAgICAgICAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zLnBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2UgPSBwYXJzZUludChxdWVyeVBhcmFtcy5wYWdlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaChnZXRMYWJzKHN0YXRlLCBwYWdlLCB0cnVlLCBzZWFyY2hVcmwsIChsb2FkTW9yZSwgbm9SZXN1bHRzID0gZmFsc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub1Jlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHsgc3RhdHVzOiA0MDQgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaC51cmwuaW5jbHVkZXMoJy1sYmNpdCcpIHx8IG1hdGNoLnVybC5pbmNsdWRlcygnLWxibGl0Y2l0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRGb290ZXJEYXRhKG1hdGNoLnVybC5zcGxpdChcIi9cIilbMV0pKCkudGhlbigoZm9vdGVyRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb290ZXJEYXRhID0gZm9vdGVyRGF0YSB8fCBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeyBmb290ZXJEYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7fSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHt9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgICAgICAgICAgIHJlamVjdCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgcm91dGVyOiAoKSA9PiBudWxsXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNob3c0MDQgfHwgdGhpcy5zdGF0ZS5zaG93NDA0KSB7XG4gICAgICAgICAgICByZXR1cm4gPE5vdEZvdW5kVmlldyB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U2VhcmNoUmVzdWx0c1ZpZXcgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHBhc3NlZFByb3BzKSA9PiB7XG4gICAgLyoqXG4gICAgICogaW5pdGlhbFNlcnZlckRhdGEgaXMgc2VydmVyIHJlbmRlcmVkIGFzeW5jIGRhdGEgcmVxdWlyZWQgYnVpbGQgaHRtbCBvbiBzZXJ2ZXIuIFxuICAgICAqL1xuICAgIGxldCBpbml0aWFsU2VydmVyRGF0YSA9IG51bGxcbiAgICBsZXQgeyBzdGF0aWNDb250ZXh0IH0gPSBwYXNzZWRQcm9wc1xuICAgIGlmIChzdGF0aWNDb250ZXh0ICYmIHN0YXRpY0NvbnRleHQuZGF0YSkge1xuICAgICAgICBpbml0aWFsU2VydmVyRGF0YSA9IHN0YXRpY0NvbnRleHQuZGF0YVxuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgc2VsZWN0ZWRDcml0ZXJpYXMsXG4gICAgICAgIGZpbHRlckNyaXRlcmlhLFxuICAgICAgICBMT0FERURfU0VBUkNIX0NSSVRFUklBX0xBQixcbiAgICAgICAgbG9jYXRpb25UeXBlLFxuICAgICAgICBmZXRjaE5ld1Jlc3VsdHMsXG4gICAgICAgIGNvcnBvcmF0ZUNvdXBvbixcbiAgICAgICAgcGFnZSxcbiAgICAgICAgc2VhcmNoX2lkX2RhdGEsXG4gICAgICAgIG5leHRTZWxlY3RlZENyaXRlcmlhcyxcbiAgICAgICAgY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzLFxuICAgICAgICBuZXh0RmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgIGNvbXBhcmVfcGFja2FnZXMsXG4gICAgfSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9MQUJTXG5cbiAgICBjb25zdCB7XG4gICAgICAgIG9mZmVyTGlzdFxuICAgIH0gPSBzdGF0ZS5VU0VSXG5cbiAgICBjb25zdCBMQUJTID0gc3RhdGUuTEFCX1NFQVJDSF9EQVRBXG4gICAgY29uc3QgeyBzaG93NDA0LCBsYWJMaXN0LCBMT0FERURfTEFCU19TRUFSQ0gsIGNvdW50LCBTRVRfRlJPTV9TRVJWRVIsIGN1cnJfcGFnZSwgc2VvRGF0YSwgdGVzdF9kYXRhIH0gPSBzdGF0ZS5MQUJfU0VBUkNIXG4gICAgY29uc3QgeyBtZXJnZVVybFN0YXRlLCBjb21tb25fc2V0dGluZ3MgfSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9PUERcblxuICAgIGNvbnN0IHtcbiAgICAgICAgaXNfbG9naW5fdXNlcl9pbnN1cmVkLFxuICAgICAgICBpbnN1cmFuY2Vfc3RhdHVzLFxuICAgICAgICBkZXZpY2VfaW5mbyxcbiAgICAgICAgY29tbW9uX3V0bV90YWdzXG4gICAgfSA9IHN0YXRlLlVTRVJcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNlbGVjdGVkTG9jYXRpb24sXG4gICAgICAgIHNlbGVjdGVkQ3JpdGVyaWFzLFxuICAgICAgICBmaWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgTE9BREVEX1NFQVJDSF9DUklURVJJQV9MQUIsXG4gICAgICAgIExBQlMsXG4gICAgICAgIGxhYkxpc3QsIExPQURFRF9MQUJTX1NFQVJDSCxcbiAgICAgICAgY291bnQsXG4gICAgICAgIFNFVF9GUk9NX1NFUlZFUixcbiAgICAgICAgaW5pdGlhbFNlcnZlckRhdGEsXG4gICAgICAgIGxvY2F0aW9uVHlwZSxcbiAgICAgICAgZmV0Y2hOZXdSZXN1bHRzLFxuICAgICAgICBjb3Jwb3JhdGVDb3Vwb24sXG4gICAgICAgIHBhZ2UsXG4gICAgICAgIGN1cnJfcGFnZSxcbiAgICAgICAgc2VhcmNoX2lkX2RhdGEsXG4gICAgICAgIG5leHRTZWxlY3RlZENyaXRlcmlhcyxcbiAgICAgICAgY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzLFxuICAgICAgICBuZXh0RmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgIHNlb0RhdGEsXG4gICAgICAgIG1lcmdlVXJsU3RhdGUsXG4gICAgICAgIHRlc3RfZGF0YSxcbiAgICAgICAgc2hvdzQwNCxcbiAgICAgICAgb2ZmZXJMaXN0LFxuICAgICAgICBpc19sb2dpbl91c2VyX2luc3VyZWQsXG4gICAgICAgIGNvbXBhcmVfcGFja2FnZXMsXG4gICAgICAgIGluc3VyYW5jZV9zdGF0dXMsXG4gICAgICAgIGRldmljZV9pbmZvLFxuICAgICAgICBjb21tb25fc2V0dGluZ3MsXG4gICAgICAgIGNvbW1vbl91dG1fdGFnc1xuICAgIH1cblxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB1cmxTaG9ydG5lcjogKHVybCwgY2IpID0+IGRpc3BhdGNoKHVybFNob3J0bmVyKHVybCwgY2IpKSxcbiAgICAgICAgZ2V0TGFiczogKHN0YXRlLCBwYWdlLCBmcm9tX3NlcnZlciwgc2VhcmNoQnlVcmwsIGNiKSA9PiBkaXNwYXRjaChnZXRMYWJzKHN0YXRlLCBwYWdlLCBmcm9tX3NlcnZlciwgc2VhcmNoQnlVcmwsIGNiKSksXG4gICAgICAgIHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhOiAodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkKSA9PiBkaXNwYXRjaCh0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQpKSxcbiAgICAgICAgZ2V0RGlhZ25vc2lzQ3JpdGVyaWFSZXN1bHRzOiAoc2VhcmNoU3RyaW5nLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2goZ2V0RGlhZ25vc2lzQ3JpdGVyaWFSZXN1bHRzKHNlYXJjaFN0cmluZywgY2FsbGJhY2spKSxcbiAgICAgICAgY2xlYXJFeHRyYVRlc3RzOiAoKSA9PiBkaXNwYXRjaChjbGVhckV4dHJhVGVzdHMoKSksXG4gICAgICAgIG1lcmdlTEFCU3RhdGU6IChzdGF0ZSwgZmV0Y2hOZXdSZXN1bHRzKSA9PiBkaXNwYXRjaChtZXJnZUxBQlN0YXRlKHN0YXRlLCBmZXRjaE5ld1Jlc3VsdHMpKSxcbiAgICAgICAgZ2V0Rm9vdGVyRGF0YTogKHVybCkgPT4gZGlzcGF0Y2goZ2V0Rm9vdGVyRGF0YSh1cmwpKSxcbiAgICAgICAgc2V0TGFiU2VhcmNoSWQ6IChzZWFyY2hJZCwgZmlsdGVycywgc2V0RGVmYXVsdCkgPT4gZGlzcGF0Y2goc2V0TGFiU2VhcmNoSWQoc2VhcmNoSWQsIGZpbHRlcnMsIHNldERlZmF1bHQpKSxcbiAgICAgICAgZ2V0TGFiU2VhcmNoSWRSZXN1bHRzOiAoc2VhcmNoSWQsIHNlYXJjaFJlc3VsdHMpID0+IGRpc3BhdGNoKGdldExhYlNlYXJjaElkUmVzdWx0cyhzZWFyY2hJZCwgc2VhcmNoUmVzdWx0cykpLFxuICAgICAgICBzZWxlY3RTZWFyY2hUeXBlOiAodHlwZSkgPT4gZGlzcGF0Y2goc2VsZWN0U2VhcmNoVHlwZSh0eXBlKSksXG4gICAgICAgIHRvZ2dsZTQwNDogKHN0YXR1cykgPT4gZGlzcGF0Y2godG9nZ2xlNDA0KHN0YXR1cykpLFxuICAgICAgICBzZWxlY3RMYWJUaW1lU0xvdDogKHNsb3QsIHJlc2NoZWR1bGUpID0+IGRpc3BhdGNoKHNlbGVjdExhYlRpbWVTTG90KHNsb3QsIHJlc2NoZWR1bGUpKSxcbiAgICAgICAgZ2V0T2ZmZXJMaXN0OiAobGF0LGxvbmcpID0+IGRpc3BhdGNoKGdldE9mZmVyTGlzdChsYXQsbG9uZykpLFxuICAgICAgICB0b2dnbGVPUERDcml0ZXJpYTogKHR5cGUsIGNyaXRlcmlhLCBmb3JjZUFkZCwgZmlsdGVyKSA9PiBkaXNwYXRjaCh0b2dnbGVPUERDcml0ZXJpYSh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQsIGZpbHRlcikpLFxuICAgICAgICBzZWxlY3RMYWJBcHBvaW50bWVudFR5cGU6ICh0eXBlKSA9PiBkaXNwYXRjaChzZWxlY3RMYWJBcHBvaW50bWVudFR5cGUodHlwZSkpLFxuICAgICAgICByZXNldFBrZ0NvbXBhcmU6KCkgPT4gZGlzcGF0Y2gocmVzZXRQa2dDb21wYXJlKCkpLFxuICAgICAgICBsb2FkT1BESW5zdXJhbmNlOiAoY2l0eSkgPT4gZGlzcGF0Y2gobG9hZE9QREluc3VyYW5jZShjaXR5KSksXG4gICAgICAgIGNsZWFyVmlwU2VsZWN0ZWRQbGFuOigpID0+ZGlzcGF0Y2goY2xlYXJWaXBTZWxlY3RlZFBsYW4oKSksXG4gICAgICAgIE5vbklwZEJvb2tpbmdMZWFkOihkYXRhLGNiKSA9PmRpc3BhdGNoKE5vbklwZEJvb2tpbmdMZWFkKGRhdGEsIGNiKSksXG4gICAgICAgIHNhdmVMZWFkUGhuTnVtYmVyOihudW1iZXIpID0+ZGlzcGF0Y2goc2F2ZUxlYWRQaG5OdW1iZXIobnVtYmVyKSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNlYXJjaFJlc3VsdHMpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==