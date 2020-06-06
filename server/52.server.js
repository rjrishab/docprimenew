exports.ids = [52];
exports.modules = {

/***/ "./dev/js/components/commons/Loader/Loader.js":
/*!****************************************************!*\
  !*** ./dev/js/components/commons/Loader/Loader.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Loader extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return _react2.default.createElement(
            "div",
            { className: this.props.classType || "loaderCircular" },
            _react2.default.createElement("div", { className: "dp-loader" }),
            this.props.iFramePopup ? _react2.default.createElement(
                "p",
                { className: "fw-500 mrt-10" },
                "Redirecting you to Pharmeasy website..."
            ) : ''
        );
    }
}

exports.default = Loader;

/***/ }),

/***/ "./dev/js/components/commons/Loader/index.js":
/*!***************************************************!*\
  !*** ./dev/js/components/commons/Loader/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Loader = __webpack_require__(/*! ./Loader */ "./dev/js/components/commons/Loader/Loader.js");

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Loader2.default;

/***/ }),

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

/***/ "./dev/js/components/ipd/IpdHospitalList.js":
/*!**************************************************!*\
  !*** ./dev/js/components/ipd/IpdHospitalList.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _HospitalCard = __webpack_require__(/*! ./HospitalCard.js */ "./dev/js/components/ipd/HospitalCard.js");

var _HospitalCard2 = _interopRequireDefault(_HospitalCard);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _reactInfiniteScroller = __webpack_require__(/*! react-infinite-scroller */ "react-infinite-scroller");

var _reactInfiniteScroller2 = _interopRequireDefault(_reactInfiniteScroller);

var _Loader = __webpack_require__(/*! ../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class IpdHospitalListView extends _react2.default.Component {

  constructor(props) {
    super(props);
    const parsed = queryString.parse(this.props.location.search);
    this.state = {
      toggleFilterPopup: false,
      health_insurance_provider: [],
      hasMore: true,
      loading: false,
      page: parsed && parsed.page ? parseInt(parsed.page) || 1 : 1,
      readMore: 'search-details-data-less'
    };
  }

  toggleProviderFilter(data = []) {

    this.setState({ toggleFilterPopup: !this.state.toggleFilterPopup, health_insurance_provider: data });
  }

  getCostEstimateClicked(hospitalId) {

    let ipd_id = this.props.commonSelectedCriterias && this.props.commonSelectedCriterias.length ? this.props.commonSelectedCriterias[0].id : '';

    let gtmData = {
      'Category': 'ConsumerApp', 'Action': 'IpdGetCostEstimateClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-get-cost-estimate-clicked', selectedId: ipd_id || '', hospitalId: hospitalId || ''
    };
    _gtm2.default.sendEvent({ data: gtmData });

    if (ipd_id) {
      this.props.history.push(`/ipd/${ipd_id}/getPriceEstimate?hospital_id=${hospitalId}`);
    } else {
      this.props.history.push(`/ipd/price/getPriceEstimate?hospital_id=${hospitalId}`);
    }
  }

  getHospitalDetailPage(hospitalId, url = null) {
    let gtmData = {
      'Category': 'ConsumerApp', 'Action': 'HospitalDetailClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'hospital-detail-clicked', 'selectedId': hospitalId || ''
    };
    _gtm2.default.sendEvent({ data: gtmData });

    if (url) {
      this.props.history.push(`/${url}`);
    } else {
      this.props.history.push(`/ipd/hospital/${hospitalId}`);
    }
  }

  loadMore(page) {
    this.setState({ hasMore: false, loading: true });
    this.props.getIpdHospitalList(null, page, hasMore => {
      this.setState({ loading: false });
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

  render() {
    let { hospital_list, HOSPITAL_DATA } = this.props;
    let ipd_id = this.props.commonSelectedCriterias && this.props.commonSelectedCriterias.length ? this.props.commonSelectedCriterias[0].id : null;

    return _react2.default.createElement(
      'div',
      null,
      this.props.hospital_search_content && this.props.hospital_search_content != '' && parseInt(this.props.page) == 1 ? _react2.default.createElement(
        'div',
        { className: 'search-result-card-collpase' },
        _react2.default.createElement('div', { className: this.state.readMore, dangerouslySetInnerHTML: { __html: this.props.hospital_search_content } }),
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
      hospital_list.length ? _react2.default.createElement(
        _reactInfiniteScroller2.default,
        {
          pageStart: this.state.page,
          loadMore: this.loadMore.bind(this),
          hasMore: this.state.hasMore,
          useWindow: true,
          initialLoad: false
        },
        _react2.default.createElement(
          'ul',
          null,
          hospital_list.map((hospitalId, i) => {
            if (HOSPITAL_DATA[hospitalId]) {
              return _react2.default.createElement(_HospitalCard2.default, _extends({ key: i, data: HOSPITAL_DATA[hospitalId], getCostEstimateClicked: this.getCostEstimateClicked.bind(this), getHospitalDetailPage: this.getHospitalDetailPage.bind(this), toggleProviderFilter: this.toggleProviderFilter.bind(this), noIpd: ipd_id ? false : true }, this.props));
            }
          })
        )
      ) : '',
      this.state.toggleFilterPopup ? _react2.default.createElement(
        'div',
        { className: 'ipd-section' },
        _react2.default.createElement('div', { className: 'custom-overlay', onClick: this.toggleProviderFilter.bind(this) }),
        _react2.default.createElement(
          'div',
          { className: 'custom-popup hlth-ins-pop ins-pop' },
          _react2.default.createElement(
            'div',
            { className: 'cross-btn' },
            _react2.default.createElement('img', { src: 'https://cdn.docprime.com/cp/assets/img/icons/close.png', alt: '', onClick: this.toggleProviderFilter.bind(this) })
          ),
          this.state.health_insurance_provider.length ? _react2.default.createElement(
            'div',
            { className: 'pop-head text-center' },
            'Health Insurance Providers'
          ) : '',
          this.state.health_insurance_provider.length ? _react2.default.createElement(
            'div',
            { className: 'ins-listing' },
            _react2.default.createElement(
              'div',
              { className: 'pop-head' },
              'Health Insurance Providers'
            ),
            _react2.default.createElement(
              'ul',
              { className: 'range-slider-ul' },
              this.state.health_insurance_provider.map((provider, i) => {

                return _react2.default.createElement(
                  'li',
                  { key: i },
                  provider
                );
              })
            )
          ) : ''
        )
      ) : '',
      this.state.loading ? _react2.default.createElement(_Loader2.default, { classType: 'loaderPagination' }) : ""
    );
  }
}

exports.default = IpdHospitalListView;

/***/ }),

/***/ "./dev/js/components/ipd/IpdHospitalSearchView.js":
/*!********************************************************!*\
  !*** ./dev/js/components/ipd/IpdHospitalSearchView.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _LeftBar = __webpack_require__(/*! ../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _IpdHospitalList = __webpack_require__(/*! ./IpdHospitalList.js */ "./dev/js/components/ipd/IpdHospitalList.js");

var _IpdHospitalList2 = _interopRequireDefault(_IpdHospitalList);

var _Loader = __webpack_require__(/*! ../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _footer = __webpack_require__(/*! ../commons/Home/footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _StickyTopBarFilter = __webpack_require__(/*! ./StickyTopBarFilter.js */ "./dev/js/components/ipd/StickyTopBarFilter.js");

var _StickyTopBarFilter2 = _interopRequireDefault(_StickyTopBarFilter);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _HelmetTags = __webpack_require__(/*! ../commons/HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

var _config = __webpack_require__(/*! ../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _breadCrumb = __webpack_require__(/*! ./breadCrumb.js */ "./dev/js/components/ipd/breadCrumb.js");

var _breadCrumb2 = _interopRequireDefault(_breadCrumb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");


class IpdHospitalView extends _react2.default.Component {

    constructor(props) {
        super(props);
        this.state = {
            search_id: '',
            setSearchId: false,
            seoFriendly: this.props.match.url.includes('-ipdhp') || this.props.match.url.includes('-hspcit') || this.props.match.url.includes('-hsplitcit')

        };
    }

    componentDidMount() {

        let ipd_id = '';
        if (this.props.commonSelectedCriterias && this.props.commonSelectedCriterias.length) {
            ipd_id = this.props.commonSelectedCriterias.map(x => x.id)[0];
        }

        let gtmData = {
            'Category': 'ConsumerApp', 'Action': 'IpdHospitalSearchPageLanded', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-hospital-search-page-landed', selectedId: ipd_id
        };
        _gtm2.default.sendEvent({ data: gtmData });

        const parsed = queryString.parse(this.props.location.search);
        // if (this.props.mergeUrlState) {
        let getSearchId = true;
        if (this.props.location.search.includes('search_id')) {
            //if search id exist in url then we get data for that search id from store
            if (this.props.search_id_data && this.props.search_id_data[parsed.search_id] && this.props.search_id_data[parsed.search_id].data && Object.values(this.props.search_id_data[parsed.search_id].data).length) {

                getSearchId = false;
                if (this.props.search_id_data[parsed.search_id].data.result && this.props.search_id_data[parsed.search_id].data.result.length && !this.props.getNewResults && !this.props.fetchNewResults) {

                    this.setState({ search_id: parsed.search_id }, () => {
                        this.props.getIpdSearchIdResults(parsed.search_id, this.props.search_id_data[parsed.search_id]);
                    });
                } else {
                    let filterCriteria = {};
                    let { criteria, filters } = this.buildUrlState(this.props.search_id_data[parsed.search_id].commonSelectedCriterias, this.props.search_id_data[parsed.search_id].filterCriteria);

                    filterCriteria.commonSelectedCriterias = criteria;
                    filterCriteria.filterCriteria = filters;
                    this.setState({ search_id: parsed.search_id }, () => {
                        let page = 1;
                        page = parsed.page || 1;

                        this.props.setIpdSearchId(parsed.search_id, filterCriteria, page);
                    });
                }
            }
        }

        if (getSearchId) {
            //If no searchId in url then we create search id and store data corresponding to that search id
            let filterCriteria = {};
            let { criteria, filters } = this.buildUrlState(this.props.nextSelectedCriterias, this.props.nextFilterCriteria);
            filterCriteria.commonSelectedCriterias = criteria;
            filterCriteria.filterCriteria = filters;
            let search_id = this.generateSearchId();
            if (window) {
                window.scrollTo(0, 0);
            }
            this.props.mergeIpdCriteria({ fetchNewResults: false });
            this.setState({ search_id: search_id }, () => {
                let new_url = this.buildURI(this.props);
                this.props.history.replace(new_url);
                this.props.setIpdSearchId(search_id, filterCriteria, parsed.page || 1);
            });
        }
    }

    buildUrlState(selectedCriteria, filterCriteria) {
        const parsed = queryString.parse(this.props.location.search);
        let criteria = [];
        let filters = {
            distance: [],
            provider_ids: [],
            network_id: ''
        };

        if (parsed.ipd_id) {
            criteria.push({ id: parsed.ipd_id, name: '' });
        } else if (selectedCriteria.length) {
            criteria.push({ id: selectedCriteria[0].id, name: '' });
        }

        if (parsed.min_distance) {
            filters.distance.push(parseInt(parsed.min_distance));
        } else {
            filters.distance.push(filterCriteria.distance[0]);
        }

        if (parsed.max_distance) {
            filters.distance.push(parseInt(parsed.max_distance));
        } else {
            filters.distance.push(filterCriteria.distance[1]);
        }

        if (parsed.provider_ids) {
            let providers = [];
            parsed.provider_ids.split(',').map(x => {
                providers.push(parseInt(x));
            });
            filters.provider_ids = providers;
        } else {
            filters.provider_ids.concat(filterCriteria.provider_ids);
        }

        if (parsed.network_id) {
            filters.network_id = parsed.network_id;
        } else {
            filters.network_id = filterCriteria.network_id;
        }

        return { criteria, filters };
    }

    componentWillReceiveProps(nextProps) {

        const parsed = queryString.parse(nextProps.location.search);
        let search_id = '';
        if (parsed.search_id) {
            search_id = parsed.search_id;
        }
        if (nextProps.fetchNewResults && nextProps.fetchNewResults != this.props.fetchNewResults && this.state.search_id) {
            this.setState({ setSearchId: true }, () => {
                this.getIpdHospitalList(nextProps);
            });
        } else if (nextProps.fetchNewResults && this.state.search_id && this.state.search_id == search_id && !this.state.setSearchId) {
            this.setState({ setSearchId: true }, () => {
                this.getIpdHospitalList(nextProps);
            });
        } else if (nextProps.locationFetched != this.props.locationFetched) {
            //Whenever location changes make api calls
            this.getIpdHospitalList(nextProps);
        }
    }

    getIpdHospitalList(state, page = null, cb = null) {
        //apply filters and get updated data
        const parsed = queryString.parse(this.props.location.search);

        if (!state) {
            state = this.props;
        }

        if (!page && parsed.page) {
            page = parsed.page || 1;
        } else {
            page = page || 1;
        }

        let searchUrl = null;
        if (state.match.url.includes('-ipdhp') || state.match.url.includes('-hspcit') || state.match.url.includes('-hsplitcit')) {
            searchUrl = state.match.url.toLowerCase();
        }

        this.props.getIpdHospitals(state, page, false, searchUrl, (...args) => {

            if (cb) cb(...args);
            let new_url = this.buildURI(state);
            this.props.history.replace(new_url);
        });
    }

    buildURI(state) {
        //keep on updating url with the updated filters 
        const parsed = queryString.parse(this.props.location.search);

        let { selectedLocation, commonSelectedCriterias, filterCriteria, locationType } = state;

        let page = 1;
        let ipd_id = commonSelectedCriterias.map(x => x.id);
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

        let min_distance = filterCriteria.distance[0];
        let max_distance = filterCriteria.distance[1];
        let provider_ids = filterCriteria.provider_ids;
        let network_id = filterCriteria.network_id;

        let url = '';

        //Check if any filter applied 
        let is_filter_applied = false;
        let is_params_exist = false;

        if (parseInt(min_distance) != 0) {
            is_filter_applied = true;
        }
        if (parseInt(max_distance) != 20) {
            is_filter_applied = true;
        }
        if (provider_ids && provider_ids.length) {
            is_filter_applied = true;
        }

        if (is_filter_applied || !this.state.seoFriendly) {

            url = `${window.location.pathname}?ipd_id=${ipd_id}&min_distance=${min_distance}&max_distance=${max_distance}&provider_ids=${provider_ids}&search_id=${this.state.search_id}&lat=${lat}&long=${long}&place_id=${place_id}&network_id=${network_id}`;

            is_params_exist = true;
        } else if (this.state.seoFriendly) {

            url = `${window.location.pathname}`;
        }

        if (parsed.page) {
            url += `${is_params_exist ? '&' : '?'}page=${parsed.page}`;
            is_params_exist = true;
        }

        if (parsed.utm_source) {
            url += `${is_params_exist ? '&' : '?'}utm_source=${parsed.utm_source || ''}`;
            is_params_exist = true;
        }

        if (parsed.utm_medium) {
            url += `${is_params_exist ? '&' : '?'}utm_medium=${parsed.utm_medium || ''}`;
            is_params_exist = true;
        }

        if (parsed.utm_campaign) {
            url += `${is_params_exist ? '&' : '?'}utm_campaign=${parsed.utm_campaign || ''}`;
            is_params_exist = true;
        }

        return url;
    }

    generateSearchId(uid_string) {
        //method to generate search id
        uid_string = 'xyyyxxyx-xxyx-4xxx-yxxx-xxxyyyxxxxxx';
        var dt = new Date().getTime();
        var uuid = uid_string.replace(/[xy]/g, function (c) {
            var r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
        });
        return uuid;
    }

    getMoreResults() {
        this.getIpdHospitalList(this.props);
    }

    getMetaTagsData(seoData) {
        let title = "Hospital Search";
        if (this.state.seoFriendly) {
            title = "";
        }
        let description = "";
        if (seoData) {
            title = seoData.title ? seoData.title : title;
            description = seoData.description || "";
        }
        return { title, description };
    }

    render() {
        let { hospital_list } = this.props;
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
        let count = this.props.hospital_search_results && this.props.hospital_search_results.count ? parseInt(this.props.hospital_search_results.count) : 0;

        if (count > curr_page * 20) {
            next = url + `?page=${curr_page + 1}`;
        }

        // do not set rel next/prev for non seoFriendly pages
        if (!this.state.seoFriendly) {
            next = "";
            prev = "";
        }

        return _react2.default.createElement(
            'div',
            { className: 'profile-body-wrap' },
            _react2.default.createElement(_HelmetTags2.default, { tagsData: {
                    canonicalUrl: `${_config2.default.API_BASE_URL}${this.props.match.url}${page}`,
                    title: this.getMetaTagsData(this.props.hospitalSearchSeoData).title,
                    description: this.getMetaTagsData(this.props.hospitalSearchSeoData).description,
                    prev: prev,
                    next: next
                } }),
            _react2.default.createElement(_DesktopProfileHeader2.default, { showSearch: true }),
            this.props.HOSPITAL_SEARCH_DATA_LOADED ? _react2.default.createElement(
                'section',
                { className: 'container parent-section book-appointment-section breadcrumb-mrgn' },
                this.props.hospitalBreadcrumb && this.props.hospitalBreadcrumb.length ? _react2.default.createElement(_breadCrumb2.default, _extends({ breadcrumb: this.props.hospitalBreadcrumb }, this.props)) : '',
                _react2.default.createElement(
                    'div',
                    { className: 'row main-row parent-section-row' },
                    _react2.default.createElement(_LeftBar2.default, null),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12 col-md-7 col-lg-7 center-column' },
                        _react2.default.createElement(_StickyTopBarFilter2.default, _extends({}, this.props, { fetchNewResults: this.getMoreResults.bind(this) })),
                        _react2.default.createElement(
                            'div',
                            { className: 'ipd-section' },
                            hospital_list.length > 0 ? _react2.default.createElement(
                                'div',
                                { className: 'tab-content' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'tab-pane fade', id: 'nav-hospital' },
                                    _react2.default.createElement(_IpdHospitalList2.default, _extends({}, this.props, { getIpdHospitalList: this.getIpdHospitalList.bind(this) }))
                                )
                            ) : ''
                        )
                    ),
                    _react2.default.createElement(_RightBar2.default, { extraClass: ' chat-float-btn-2', msgTemplate: 'gold_general_template' })
                )
            ) : _react2.default.createElement(_Loader2.default, null),
            this.props.hospital_bottom_content && this.props.hospital_bottom_content.length && parseInt(this.props.page) == 1 ? _react2.default.createElement(
                'div',
                { className: 'col-12 mrt-20' },
                _react2.default.createElement('div', { className: 'search-result-card-collpase', dangerouslySetInnerHTML: { __html: this.props.hospital_bottom_content } })
            ) : '',
            _react2.default.createElement(_footer2.default, null)
        );
    }
}

exports.default = IpdHospitalView;

/***/ }),

/***/ "./dev/js/components/ipd/StickyTopBarFilter.js":
/*!*****************************************************!*\
  !*** ./dev/js/components/ipd/StickyTopBarFilter.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _result_count = __webpack_require__(/*! ./result_count.js */ "./dev/js/components/ipd/result_count.js");

var _result_count2 = _interopRequireDefault(_result_count);

var _Range = __webpack_require__(/*! rc-slider/lib/Range */ "rc-slider/lib/Range");

var _Range2 = _interopRequireDefault(_Range);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");


class StickyFilter extends _react2.default.Component {

	constructor(props) {
		super(props);
		this.state = {
			toggleFilterPopup: false,
			lastSelectedProviderIds: [],
			lastSelectedDistance: [0, 25],
			provider_ids: [],
			distance: [0, 25]
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ provider_ids: nextProps.filterCriteria.provider_ids, lastSelectedProviderIds: nextProps.filterCriteria.provider_ids, distance: nextProps.filterCriteria.distance, lastSelectedDistance: nextProps.filterCriteria.distance });
	}

	applyFilters() {
		const parsed = queryString.parse(this.props.location.search);
		let filterCriteria = {
			distance: this.state.distance,
			provider_ids: this.state.provider_ids
		};

		let gtmData = {
			'Category': 'ConsumerApp', 'Action': 'IpdHospitalSearchFilterApplied', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-hospital-search-filter-applied', 'minDistance': this.state.distance[0], 'maxDistance': this.state.distance[1], 'provider_ids': this.state.provider_ids.join(',')
		};

		_gtm2.default.sendEvent({ data: gtmData });

		this.setState({ lastSelectedProviderIds: this.state.provider_ids, lastSelectedDistance: this.state.distance });
		let search_id_data = Object.assign({}, this.props.search_id_data);

		if (this.props.search_id_data && this.props.search_id_data[parsed.search_id]) {
			search_id_data[parsed.search_id].filterCriteria = filterCriteria;
			search_id_data[parsed.search_id].page = 1;
		}

		this.props.mergeIpdCriteria({
			filterCriteria: filterCriteria, search_id_data: search_id_data, page: 1
		});
		setTimeout(() => {
			this.props.fetchNewResults();
			this.setState({ toggleFilterPopup: false });
		}, 100);
	}

	toggleProviderFilter(id) {
		let provider_ids = [];
		let found = false;
		provider_ids = this.state.provider_ids.filter(x => {
			if (x == id) {
				found = true;
				return false;
			}
			return true;
		});

		if (!found) {
			provider_ids.push(id);
		}

		this.setState({ provider_ids: provider_ids });
	}

	closeFiltersPopUp() {
		this.setState({ toggleFilterPopup: false, provider_ids: this.state.lastSelectedProviderIds, distance: this.state.lastSelectedDistance });
	}

	handleRange(type, range) {
		this.setState({
			[type]: range
		});
	}
	render() {
		let seoData = this.props.hospitalSearchSeoData;
		let { hospital_search_results } = this.props;
		let health_insurance_provider = [];

		if (hospital_search_results && hospital_search_results.insurance_providers && hospital_search_results.insurance_providers.length) {

			if (hospital_search_results.insurance_providers.length > 4 && this.state.showMoreProviders) {
				health_insurance_provider = hospital_search_results.insurance_providers;
			} else {
				health_insurance_provider = hospital_search_results.insurance_providers.slice(0, 3);
			}
		}
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'section',
				{ className: 'stick-prnt' },
				_react2.default.createElement(
					'div',
					{ className: 'stick-it' },
					_react2.default.createElement(
						'div',
						{ className: 'top-filter-tab-container' },
						_react2.default.createElement(
							'div',
							{ className: 'top-filter-tabs-select', onClick: () => {
									let gtmData = {
										'Category': 'ConsumerApp', 'Action': 'IpdHospitalSearchFilterClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-hospital-search-filter-clicked'
									};
									_gtm2.default.sendEvent({ data: gtmData });

									this.setState({ toggleFilterPopup: true });
								} },
							_react2.default.createElement('img', { src: 'https://cdn.docprime.com/cp/assets/img/filter.svg', style: { width: '18px', marginRight: '5px' } }),
							_react2.default.createElement(
								'span',
								null,
								'Filter'
							)
						)
					)
				),
				_react2.default.createElement(_result_count2.default, _extends({}, this.props, { applyFilters: this.applyFilters.bind(this), seoData: seoData, lab_card: false, seoFriendly: false }))
			),
			this.state.toggleFilterPopup ? _react2.default.createElement(
				'div',
				{ className: 'ipd-section' },
				_react2.default.createElement('div', { className: 'custom-overlay', onClick: this.closeFiltersPopUp.bind(this) }),
				_react2.default.createElement(
					'div',
					{ className: 'custom-popup hlth-ins-pop' },
					_react2.default.createElement(
						'div',
						{ className: 'cross-btn' },
						_react2.default.createElement('img', { src: 'https://cdn.docprime.com/cp/assets/img/icons/close.png', alt: '', onClick: this.closeFiltersPopUp.bind(this) })
					),
					_react2.default.createElement(
						'div',
						{ className: 'pop-head text-center' },
						'Filters'
					),
					_react2.default.createElement(
						'div',
						{ className: 'widget-content' },
						_react2.default.createElement(
							'div',
							{ className: 'filterRow distance-slider-bar' },
							_react2.default.createElement(
								'span',
								{ className: 'tl' },
								'Distance'
							),
							_react2.default.createElement(
								'span',
								{ className: 'tr orng-txt' },
								' ',
								this.state.distance[0],
								' Km to ',
								this.state.distance[1],
								' Km '
							),
							_react2.default.createElement(
								'span',
								{ className: 'bl ' },
								'0 Km'
							),
							_react2.default.createElement(
								'span',
								{ className: 'br' },
								'50 Km'
							),
							_react2.default.createElement(_Range2.default, {
								min: 0,
								max: 50,
								value: this.state.distance,
								step: 2,
								className: 'range',
								onChange: this.handleRange.bind(this, 'distance')
							})
						)
					),
					_react2.default.createElement('hr', null),
					health_insurance_provider.length && false ? _react2.default.createElement(
						'div',
						{ className: 'ins-listing' },
						_react2.default.createElement(
							'div',
							{ className: 'pop-head' },
							'Health Insurance Providers'
						),
						_react2.default.createElement(
							'ul',
							{ className: 'range-slider-ul' },
							health_insurance_provider.length ? health_insurance_provider.map((provider, i) => {

								return _react2.default.createElement(
									'li',
									{ key: i },
									_react2.default.createElement(
										'label',
										{ className: 'ck-bx' },
										provider.name,
										_react2.default.createElement('input', { type: 'checkbox', value: 'on', checked: this.state.provider_ids.indexOf(provider.id) > -1 ? true : false, onChange: this.toggleProviderFilter.bind(this, provider.id) }),
										_react2.default.createElement('span', { className: 'checkmark' })
									)
								);
							}) : ''
						),
						health_insurance_provider.length > 4 && !this.state.showMoreProviders ? _react2.default.createElement(
							'a',
							{ href: 'javascript:void(0);', onClick: () => this.setState({ toggleFilterPopup: true }), className: 'btn-view-hospital btn-show-more' },
							'Show More'
						) : ''
					) : '',
					_react2.default.createElement(
						'div',
						{ className: 'btn-search-div btn-apply-div' },
						_react2.default.createElement(
							'a',
							{ href: 'javascript:void(0);', className: 'btn-search', onClick: this.applyFilters.bind(this) },
							'Apply'
						)
					)
				)
			) : ''
		);
	}
}

exports.default = StickyFilter;

/***/ }),

/***/ "./dev/js/components/ipd/result_count.js":
/*!***********************************************!*\
  !*** ./dev/js/components/ipd/result_count.js ***!
  \***********************************************/
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

var _locationElements = __webpack_require__(/*! ../../containers/commons/locationElements */ "./dev/js/containers/commons/locationElements.js");

var _locationElements2 = _interopRequireDefault(_locationElements);

var _locationPopup = __webpack_require__(/*! ../../containers/commons/locationPopup */ "./dev/js/containers/commons/locationPopup.js");

var _locationPopup2 = _interopRequireDefault(_locationPopup);

var _gtm = __webpack_require__(/*! ../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TopBar extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            shortURL: "",
            showLocationPopup: false,
            overlayVisible: false,
            showPopupContainer: true
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
                    this.setState({ showLocationPopup: true, overlayVisible: true });
                }
            }
        }
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

    handleInput(e) {
        let evName = e.target.name;
        let checked = e.target.checked;
        setTimeout(() => {
            this.setState({
                [evName]: checked
            });
        });
    }

    getCriteriaString(selectedCriterias) {
        if (selectedCriterias && selectedCriterias.length) {
            let selectedProcedureCategory = selectedCriterias.filter(x => x.type == 'procedures_category');
            let procedures = selectedCriterias.filter(x => x.type == 'procedures');

            return selectedCriterias.reduce((final, curr, i) => {
                if (i != 0) {
                    final += ', ';
                }
                final += `${curr.name ? curr.name : ''}`;
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
        //this.props.setNextSearchCriteria()
        let data = {
            'Category': 'ChangeLocationIpdResultsPopUp', 'Action': 'change-location-doctor-results-PopUp', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'change-location-doctor-results-PopUp', 'url': window.location.pathname
        };
        _gtm2.default.sendEvent({ data: data });
        this.props.history.push(location_url);
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
                                this.props.hospital_search_results && this.props.hospital_search_results.count ? this.props.hospital_search_results.count : 'No',
                                ' results found ',
                                criteriaStr ? "for Best " : "for ",
                                _react2.default.createElement(
                                    'h1',
                                    { className: 'search-result-heading' },
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'fw-700' },
                                        ' ',
                                        `${criteriaStr ? criteriaStr : ''} Hospitals`,
                                        ' '
                                    ),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'search-result-span', onClick: this.goToLocation.bind(this) },
                                        this.state.showLocationPopup && false ? '' : locationName ? _react2.default.createElement(
                                            'span',
                                            { className: 'location-edit', style: { color: '#f6843a', cursor: 'pointer' } },
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
                this.state.showLocationPopup && this.props.clinic_card && this.state.showPopupContainer ? _react2.default.createElement('div', { className: 'popupContainer-overlay' }) : ''
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

/***/ "./dev/js/containers/ipd/IpdHospitalSearch.js":
/*!****************************************************!*\
  !*** ./dev/js/containers/ipd/IpdHospitalSearch.js ***!
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

var _IpdHospitalSearchView = __webpack_require__(/*! ../../components/ipd/IpdHospitalSearchView.js */ "./dev/js/components/ipd/IpdHospitalSearchView.js");

var _IpdHospitalSearchView2 = _interopRequireDefault(_IpdHospitalSearchView);

var _urltoState = __webpack_require__(/*! ../../helpers/urltoState */ "./dev/js/helpers/urltoState.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class IpdHospitals extends _react2.default.Component {

	static loadData(store, match, queryParams = {}) {

		return new Promise((resolve, reject) => {

			try {

				let location_ms = null;
				if (match.url.includes('location=')) {
					location_ms = match.url.split('location=')[1];
					location_ms = parseInt(location_ms);
				}
				(0, _urltoState.HospitalSearchStateBuilder)(null, queryParams, true, location_ms).then(state => {
					store.dispatch((0, _index.mergeIpdCriteria)(state));

					let searchUrl = null;
					if (match.url.includes('-ipdhp') || match.url.includes('-hspcit') || match.url.includes('-hsplitcit')) {
						searchUrl = match.url.toLowerCase();
					}

					let page = 1;
					if (queryParams.page) {
						page = parseInt(queryParams.page);
					}

					return store.dispatch((0, _index.getIpdHospitals)(state, page, true, searchUrl, (loadMore, resultFound) => {

						if (!resultFound) {
							resolve({ status: 404 });
						} else {
							resolve({});
						}
					}));
				}).catch(e => {
					reject();
				});
			} catch (e) {
				reject();
			}
		});
	}

	componentDidMount() {
		if (window) {
			window.scrollTo(0, 0);
		}
	}
	render() {

		return _react2.default.createElement(_IpdHospitalSearchView2.default, this.props);
	}
}

IpdHospitals.contextTypes = {
	router: () => null
};
const mapStateToProps = state => {

	const {
		selectedLocation,
		locationType
	} = state.SEARCH_CRITERIA_OPD;

	const {
		filterCriteria,
		provider_ids,
		hospital_list,
		hospital_search_results,
		HOSPITAL_DATA,
		nextFilterCriteria,
		page,
		search_id_data,
		commonSelectedCriterias,
		nextSelectedCriterias,
		fetchNewResults,
		getNewResults,
		locationFetched,
		hospitalSearchSeoData,
		hospitalCanonicalUrl,
		hospitalBreadcrumb,
		hospital_search_content,
		hospital_bottom_content,
		HOSPITAL_SEARCH_DATA_LOADED
	} = state.SEARCH_CRITERIA_IPD;

	return {
		selectedLocation,
		locationType,
		filterCriteria,
		provider_ids,
		hospital_list,
		hospital_search_results,
		HOSPITAL_DATA,
		nextFilterCriteria,
		page,
		search_id_data,
		commonSelectedCriterias,
		nextSelectedCriterias,
		fetchNewResults,
		getNewResults,
		locationFetched,
		hospitalSearchSeoData,
		hospitalCanonicalUrl,
		hospitalBreadcrumb,
		hospital_search_content,
		hospital_bottom_content,
		HOSPITAL_SEARCH_DATA_LOADED
	};
};

const mapDisptachToProps = dispatch => {

	return {
		getIpdHospitals: (state, page, fromServer, searchByUrl, cb) => dispatch((0, _index.getIpdHospitals)(state, page, fromServer, searchByUrl, cb)),
		mergeIpdCriteria: filterCriteria => dispatch((0, _index.mergeIpdCriteria)(filterCriteria)),
		urlShortner: (url, cb) => dispatch((0, _index.urlShortner)(url, cb)),
		setIpdSearchId: (search_id, filters, page) => dispatch((0, _index.setIpdSearchId)(search_id, filters, page)),
		getIpdSearchIdResults: (search_id, data) => dispatch((0, _index.getIpdSearchIdResults)(search_id, data))
	};
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDisptachToProps)(IpdHospitals);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9sb2NhdGlvblBvcHVwL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvbG9jYXRpb25Qb3B1cC9sb2NhdGlvblBvcHVwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9pcGQvSXBkSG9zcGl0YWxMaXN0LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2lwZC9JcGRIb3NwaXRhbFNlYXJjaFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvaXBkL1N0aWNreVRvcEJhckZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9pcGQvcmVzdWx0X2NvdW50LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL2NvbW1vbnMvbG9jYXRpb25Qb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9pcGQvSXBkSG9zcGl0YWxTZWFyY2guanMiXSwibmFtZXMiOlsiTG9hZGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIiwiY2xhc3NUeXBlIiwiaUZyYW1lUG9wdXAiLCJsb2NhdGlvblBvcHVwIiwicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiTG9jYXRpb25Qb3B1cFZpZXciLCJzdGF0ZSIsInNlYXJjaCIsImxvY2F0aW9uX29iamVjdCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJzZWxlY3RlZExvY2F0aW9uIiwic2V0U3RhdGUiLCJmb3JtYXR0ZWRfYWRkcmVzcyIsImxvY2F0aW9uVHlwZSIsImluY2x1ZGVzIiwiY29tcG9uZW50RGlkTW91bnQiLCJsb2NhdGlvbk5hbWUiLCJnb1RvTG9jYXRpb24iLCJpc1RvcGJhciIsInJlZGlyZWN0X3RvIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImxvY2F0aW9uX3VybCIsImRhdGEiLCJHVE0iLCJnZXRVc2VySWQiLCJzZW5kRXZlbnQiLCJoaXN0b3J5IiwicHVzaCIsImNvbnRpbnVlTG9jYXRpb24iLCJwYXJzZWQiLCJwYXJzZSIsImxhdCIsImxvbmciLCJsb2NhdGlvbkRhdGEiLCJzZWxlY3RMb2NhdGlvbiIsImNvdW50IiwiZm9udFdlaWdodCIsImNyaXRlcmlhU3RyaW5nIiwiYmluZCIsIklwZEhvc3BpdGFsTGlzdFZpZXciLCJ0b2dnbGVGaWx0ZXJQb3B1cCIsImhlYWx0aF9pbnN1cmFuY2VfcHJvdmlkZXIiLCJoYXNNb3JlIiwibG9hZGluZyIsInBhZ2UiLCJwYXJzZUludCIsInJlYWRNb3JlIiwidG9nZ2xlUHJvdmlkZXJGaWx0ZXIiLCJnZXRDb3N0RXN0aW1hdGVDbGlja2VkIiwiaG9zcGl0YWxJZCIsImlwZF9pZCIsImNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzIiwibGVuZ3RoIiwiaWQiLCJndG1EYXRhIiwic2VsZWN0ZWRJZCIsImdldEhvc3BpdGFsRGV0YWlsUGFnZSIsInVybCIsImxvYWRNb3JlIiwiZ2V0SXBkSG9zcGl0YWxMaXN0Iiwic2V0VGltZW91dCIsInRvZ2dsZVNjcm9sbCIsInNjcm9sbFRvIiwiaG9zcGl0YWxfbGlzdCIsIkhPU1BJVEFMX0RBVEEiLCJob3NwaXRhbF9zZWFyY2hfY29udGVudCIsIl9faHRtbCIsIm1hcCIsImkiLCJwcm92aWRlciIsIklwZEhvc3BpdGFsVmlldyIsInNlYXJjaF9pZCIsInNldFNlYXJjaElkIiwic2VvRnJpZW5kbHkiLCJtYXRjaCIsIngiLCJnZXRTZWFyY2hJZCIsInNlYXJjaF9pZF9kYXRhIiwiT2JqZWN0IiwidmFsdWVzIiwicmVzdWx0IiwiZ2V0TmV3UmVzdWx0cyIsImZldGNoTmV3UmVzdWx0cyIsImdldElwZFNlYXJjaElkUmVzdWx0cyIsImZpbHRlckNyaXRlcmlhIiwiY3JpdGVyaWEiLCJmaWx0ZXJzIiwiYnVpbGRVcmxTdGF0ZSIsInNldElwZFNlYXJjaElkIiwibmV4dFNlbGVjdGVkQ3JpdGVyaWFzIiwibmV4dEZpbHRlckNyaXRlcmlhIiwiZ2VuZXJhdGVTZWFyY2hJZCIsIm1lcmdlSXBkQ3JpdGVyaWEiLCJuZXdfdXJsIiwiYnVpbGRVUkkiLCJyZXBsYWNlIiwic2VsZWN0ZWRDcml0ZXJpYSIsImRpc3RhbmNlIiwicHJvdmlkZXJfaWRzIiwibmV0d29ya19pZCIsIm5hbWUiLCJtaW5fZGlzdGFuY2UiLCJtYXhfZGlzdGFuY2UiLCJwcm92aWRlcnMiLCJzcGxpdCIsImNvbmNhdCIsIm5leHRQcm9wcyIsImxvY2F0aW9uRmV0Y2hlZCIsImNiIiwic2VhcmNoVXJsIiwidG9Mb3dlckNhc2UiLCJnZXRJcGRIb3NwaXRhbHMiLCJhcmdzIiwicGxhY2VfaWQiLCJnZW9tZXRyeSIsImxuZyIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiaXNfZmlsdGVyX2FwcGxpZWQiLCJpc19wYXJhbXNfZXhpc3QiLCJ1dG1fc291cmNlIiwidXRtX21lZGl1bSIsInV0bV9jYW1wYWlnbiIsInVpZF9zdHJpbmciLCJkdCIsIkRhdGUiLCJnZXRUaW1lIiwidXVpZCIsImMiLCJyIiwiTWF0aCIsInJhbmRvbSIsImZsb29yIiwidG9TdHJpbmciLCJnZXRNb3JlUmVzdWx0cyIsImdldE1ldGFUYWdzRGF0YSIsInNlb0RhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiQ09ORklHIiwiQVBJX0JBU0VfVVJMIiwiY3Vycl9wYWdlIiwicHJldiIsIm5leHQiLCJob3NwaXRhbF9zZWFyY2hfcmVzdWx0cyIsImNhbm9uaWNhbFVybCIsImhvc3BpdGFsU2VhcmNoU2VvRGF0YSIsIkhPU1BJVEFMX1NFQVJDSF9EQVRBX0xPQURFRCIsImhvc3BpdGFsQnJlYWRjcnVtYiIsImhvc3BpdGFsX2JvdHRvbV9jb250ZW50IiwiU3RpY2t5RmlsdGVyIiwibGFzdFNlbGVjdGVkUHJvdmlkZXJJZHMiLCJsYXN0U2VsZWN0ZWREaXN0YW5jZSIsImFwcGx5RmlsdGVycyIsImpvaW4iLCJhc3NpZ24iLCJmb3VuZCIsImZpbHRlciIsImNsb3NlRmlsdGVyc1BvcFVwIiwiaGFuZGxlUmFuZ2UiLCJ0eXBlIiwicmFuZ2UiLCJpbnN1cmFuY2VfcHJvdmlkZXJzIiwic2hvd01vcmVQcm92aWRlcnMiLCJzbGljZSIsIndpZHRoIiwibWFyZ2luUmlnaHQiLCJpbmRleE9mIiwiVG9wQmFyIiwic2hvcnRVUkwiLCJzaG93TG9jYXRpb25Qb3B1cCIsIm92ZXJsYXlWaXNpYmxlIiwic2hvd1BvcHVwQ29udGFpbmVyIiwiaGFuZGxlSW5wdXQiLCJlIiwiZXZOYW1lIiwidGFyZ2V0IiwiY2hlY2tlZCIsImdldENyaXRlcmlhU3RyaW5nIiwic2VsZWN0ZWRDcml0ZXJpYXMiLCJzZWxlY3RlZFByb2NlZHVyZUNhdGVnb3J5IiwicHJvY2VkdXJlcyIsInJlZHVjZSIsImZpbmFsIiwiY3VyciIsInNob3J0ZW5VcmwiLCJocmVmIiwidXJsU2hvcnRuZXIiLCJlcnIiLCJ0aW55X3VybCIsIm92ZXJsYXlDbGljayIsInNlYXJjaENpdGllcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsInpJbmRleCIsImhpZGVMb2NhdGlvblBvcHVwIiwicG9wdXBDb250YWluZXIiLCJjcml0ZXJpYVN0ciIsImN1cnNvciIsIkFTU0VUU19CQVNFX1VSTCIsInN0b3BQcm9wYWdhdGlvbiIsIlNuYWNrQmFyIiwic2hvdyIsInBvcyIsInRleHQiLCJjb2xvciIsImhlaWdodCIsIm1hcmdpbkxlZnQiLCJjbGluaWNfY2FyZCIsInJlZiIsImNoaWxkIiwiTG9jYXRpb25Qb3B1cENvbnRhaW5lciIsImNvbnRleHRUeXBlcyIsInJvdXRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsIlNFQVJDSF9DUklURVJJQV9PUEQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIklwZEhvc3BpdGFscyIsImxvYWREYXRhIiwic3RvcmUiLCJxdWVyeVBhcmFtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwibG9jYXRpb25fbXMiLCJ0aGVuIiwicmVzdWx0Rm91bmQiLCJzdGF0dXMiLCJjYXRjaCIsImhvc3BpdGFsQ2Fub25pY2FsVXJsIiwiU0VBUkNIX0NSSVRFUklBX0lQRCIsIm1hcERpc3B0YWNoVG9Qcm9wcyIsImZyb21TZXJ2ZXIiLCJzZWFyY2hCeVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsTUFBTUEsTUFBTixTQUFxQkMsZ0JBQU1DLFNBQTNCLENBQXFDO0FBQ2pDQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDSDs7QUFFREMsYUFBUzs7QUFFTCxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVcsS0FBS0QsS0FBTCxDQUFXRSxTQUFYLElBQXdCLGdCQUF4QztBQUNJLG1EQUFLLFdBQVUsV0FBZixHQURKO0FBR1EsaUJBQUtGLEtBQUwsQ0FBV0csV0FBWCxHQUNJO0FBQUE7QUFBQSxrQkFBRyxXQUFVLGVBQWI7QUFBQTtBQUFBLGFBREosR0FDK0U7QUFKdkYsU0FESjtBQVNIO0FBaEJnQzs7a0JBbUJ0QlAsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJmOzs7Ozs7a0JBRWVBLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7Ozs7O2tCQUVlUSwyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmY7Ozs7QUFDQTs7QUFFQTs7Ozs7O0FBREEsTUFBTUMsY0FBY0MsbUJBQU9BLENBQUMsa0NBQVIsQ0FBcEI7OztBQUdBLE1BQU1DLGlCQUFOLFNBQWdDVixnQkFBTUMsU0FBdEMsQ0FBZ0Q7O0FBRTVDQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDQSxhQUFLUSxLQUFMLEdBQWE7QUFDVEMsb0JBQVEsRUFEQztBQUVUQyw2QkFBaUI7QUFGUixTQUFiO0FBSUg7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ZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIExvYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc1R5cGUgfHwgXCJsb2FkZXJDaXJjdWxhclwifSA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcC1sb2FkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaUZyYW1lUG9wdXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0xMFwiPlJlZGlyZWN0aW5nIHlvdSB0byBQaGFybWVhc3kgd2Vic2l0ZS4uLjwvcD4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyXG4iLCJpbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXIiLCJpbXBvcnQgbG9jYXRpb25Qb3B1cCBmcm9tICcuL2xvY2F0aW9uUG9wdXBWaWV3J1xuXG5leHBvcnQgZGVmYXVsdCBsb2NhdGlvblBvcHVwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgX2dldGxvY2F0aW9uRnJvbUxhdExvbmcgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL21hcEhlbHBlcnMnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bSdcblxuY2xhc3MgTG9jYXRpb25Qb3B1cFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzZWFyY2g6ICcnLFxuICAgICAgICAgICAgbG9jYXRpb25fb2JqZWN0OiBudWxsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wcy5zZWxlY3RlZExvY2F0aW9uICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbikge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2VhcmNoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLnNlbGVjdGVkTG9jYXRpb24gIT0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2NhdGlvbl9vYmplY3Q6IHByb3BzLnNlbGVjdGVkTG9jYXRpb24sIHNlYXJjaDogcHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5mb3JtYXR0ZWRfYWRkcmVzcyB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXByb3BzLmxvY2F0aW9uVHlwZS5pbmNsdWRlcyhcImdlb1wiKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2NhdGlvbl9vYmplY3Q6IHByb3BzLnNlbGVjdGVkTG9jYXRpb24sIHNlYXJjaDogcHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5mb3JtYXR0ZWRfYWRkcmVzcyB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uVHlwZSAmJiAhdGhpcy5wcm9wcy5sb2NhdGlvblR5cGUuaW5jbHVkZXMoXCJnZW9cIikgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5mb3JtYXR0ZWRfYWRkcmVzcykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvY2F0aW9uX29iamVjdDogdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLCBzZWFyY2g6IHRoaXMucHJvcHMubG9jYXRpb25OYW1lIHx8IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5mb3JtYXR0ZWRfYWRkcmVzcyB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ29Ub0xvY2F0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5pc1RvcGJhcikge1xuICAgICAgICAgICAgbGV0IHJlZGlyZWN0X3RvID0gXCJcIlxuICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygnc3B0Y2l0JykgfHwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCdzcHRsaXRjaXQnKSkge1xuICAgICAgICAgICAgICAgIHJlZGlyZWN0X3RvID0gXCIvb3BkL3NlYXJjaHJlc3VsdHNcIlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCdsYmNpdCcpIHx8IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygnbGJsaXRjaXQnKSkge1xuICAgICAgICAgICAgICAgIHJlZGlyZWN0X3RvID0gXCIvbGFiL3NlYXJjaHJlc3VsdHNcIlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgbG9jYXRpb25fdXJsID0gJy9sb2NhdGlvbnNlYXJjaCdcbiAgICAgICAgICAgIGlmIChyZWRpcmVjdF90bykge1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uX3VybCArPSBgP3JlZGlyZWN0X3RvPSR7cmVkaXJlY3RfdG99YFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ2hhbmdlTG9jYXRpb25Eb2N0b3JSZXN1bHRzUG9wVXAnLCAnQWN0aW9uJzogJ2NoYW5nZS1sb2NhdGlvbi1kb2N0b3ItcmVzdWx0cy1Qb3BVcCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NoYW5nZS1sb2NhdGlvbi1kb2N0b3ItcmVzdWx0cy1Qb3BVcCcsICd1cmwnOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChsb2NhdGlvbl91cmwpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb250aW51ZUxvY2F0aW9uKCkge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnRpbnVlTG9jYXRpb25Eb2N0b3JSZXN1bHRzUG9wVXAnLCAnQWN0aW9uJzogJ2NvbnRpbnVlLWxvY2F0aW9uLWRvY3Rvci1yZXN1bHRzLVBvcFVwJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY29udGludWUtbG9jYXRpb24tZG9jdG9yLXJlc3VsdHMtUG9wVXAnLCAndXJsJzogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgaWYgKHBhcnNlZC5sYXQgJiYgcGFyc2VkLmxvbmcpIHtcbiAgICAgICAgICAgIF9nZXRsb2NhdGlvbkZyb21MYXRMb25nKHBhcnNlZC5sYXQsIHBhcnNlZC5sb25nLCAnbG9jYWxpdHknLCAobG9jYXRpb25EYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdExvY2F0aW9uKGxvY2F0aW9uRGF0YSwgJ2F1dG9EZXRlY3QnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyLWxvY2F0aW9uLXBvcHVwLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LW1kXCI+U2hvd2luZyB7dGhpcy5wcm9wcy5jb3VudH0gcmVzdWx0cyA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiA3MDAgfX0+e3RoaXMucHJvcHMuY3JpdGVyaWFTdHJpbmcgPyBgZm9yICR7dGhpcy5wcm9wcy5jcml0ZXJpYVN0cmluZ31gIDogJyd9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy03MDAgdGV4dC1tZFwiPnt0aGlzLnByb3BzLmxvY2F0aW9uTmFtZSA/IGAgaW4gJHt0aGlzLnByb3BzLmxvY2F0aW9uTmFtZX1gIDogJyd9PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXJ0LTIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZnctNTAwIGZyLXBvcHVwLWNvbnRcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmNvbnRpbnVlTG9jYXRpb24oKX0+Q29udGludWU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJ0LTIwIHRleHQteHNcIj5PUjwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ydC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZ3LTUwMCBmci1wb3B1cC1jaGFuZ2VcIiBvbkNsaWNrPXt0aGlzLmdvVG9Mb2NhdGlvbi5iaW5kKHRoaXMpfT5DaGFuZ2UgTG9jYXRpb248L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvblBvcHVwVmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIb3NwaXRhbENhcmQgZnJvbSAnLi9Ib3NwaXRhbENhcmQuanMnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IEluZmluaXRlU2Nyb2xsIGZyb20gJ3JlYWN0LWluZmluaXRlLXNjcm9sbGVyJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tbW9ucy9Mb2FkZXInXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpXG5cbmNsYXNzIElwZEhvc3BpdGFsTGlzdFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgdG9nZ2xlRmlsdGVyUG9wdXA6IGZhbHNlLFxuICAgICAgICAgaGVhbHRoX2luc3VyYW5jZV9wcm92aWRlcjogW10sXG4gICAgICAgICBoYXNNb3JlOiB0cnVlLFxuICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICBwYWdlOiBwYXJzZWQgJiYgcGFyc2VkLnBhZ2U/cGFyc2VJbnQocGFyc2VkLnBhZ2UpfHwxOjEsXG4gICAgICAgICByZWFkTW9yZTogJ3NlYXJjaC1kZXRhaWxzLWRhdGEtbGVzcycgXG4gICAgICB9XG4gICBcdH1cblxuICAgXHR0b2dnbGVQcm92aWRlckZpbHRlcihkYXRhPVtdKXtcblxuICAgXHRcdHRoaXMuc2V0U3RhdGUoe3RvZ2dsZUZpbHRlclBvcHVwOiAhdGhpcy5zdGF0ZS50b2dnbGVGaWx0ZXJQb3B1cCwgaGVhbHRoX2luc3VyYW5jZV9wcm92aWRlcjogZGF0YX0pXG4gICBcdH1cblxuXHRnZXRDb3N0RXN0aW1hdGVDbGlja2VkKGhvc3BpdGFsSWQpe1xuXHRcdFxuXG5cdFx0bGV0IGlwZF9pZCA9IHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMgJiYgdGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcy5sZW5ndGg/dGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhc1swXS5pZDonJ1xuXHRcblx0XHRsZXQgZ3RtRGF0YSA9IHtcblx0ICAgIFx0J0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdJcGRHZXRDb3N0RXN0aW1hdGVDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnaXBkLWdldC1jb3N0LWVzdGltYXRlLWNsaWNrZWQnLCBzZWxlY3RlZElkOiBpcGRfaWQgfHwgJycsIGhvc3BpdGFsSWQ6IGhvc3BpdGFsSWQgfHwgJydcblx0XHR9XG5cdFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bURhdGEgfSlcblxuICAgIGlmKGlwZF9pZCl7XG4gICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2lwZC8ke2lwZF9pZH0vZ2V0UHJpY2VFc3RpbWF0ZT9ob3NwaXRhbF9pZD0ke2hvc3BpdGFsSWR9YClcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvaXBkL3ByaWNlL2dldFByaWNlRXN0aW1hdGU/aG9zcGl0YWxfaWQ9JHtob3NwaXRhbElkfWApICBcbiAgICB9XG5cdFx0XG4gICAgICBcbiAgIFx0fVxuXG4gICBcdGdldEhvc3BpdGFsRGV0YWlsUGFnZShob3NwaXRhbElkLCB1cmw9bnVsbCl7XG4gICBcdFx0bGV0IGd0bURhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0hvc3BpdGFsRGV0YWlsQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2hvc3BpdGFsLWRldGFpbC1jbGlja2VkJywgJ3NlbGVjdGVkSWQnOiBob3NwaXRhbElkIHx8ICcnXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bURhdGEgfSlcbiAgIFx0XHRcbiAgIFx0XHRpZih1cmwpe1xuICAgXHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC8ke3VybH1gKVxuICAgXHRcdH1lbHNle1xuICAgXHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9pcGQvaG9zcGl0YWwvJHtob3NwaXRhbElkfWApXHRcbiAgIFx0XHR9XG4gICBcdFx0XG4gICBcdH1cblxuICAgXHRsb2FkTW9yZShwYWdlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNNb3JlOiBmYWxzZSwgbG9hZGluZzogdHJ1ZSB9KVxuICAgICAgICB0aGlzLnByb3BzLmdldElwZEhvc3BpdGFsTGlzdChudWxsLCBwYWdlLCAoaGFzTW9yZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlfSlcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNNb3JlIH0pXG4gICAgICAgICAgICB9LCAxMDAwKVxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgdG9nZ2xlU2Nyb2xsKCkge1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVhZE1vcmU6ICdzZWFyY2gtZGV0YWlscy1kYXRhLWxlc3MnIH0pXG4gICAgfVxuXG5cdHJlbmRlcigpe1xuXHRcdGxldCB7IGhvc3BpdGFsX2xpc3QsIEhPU1BJVEFMX0RBVEEgfSA9IHRoaXMucHJvcHNcbiAgICBsZXQgaXBkX2lkID0gdGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcyAmJiB0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLmxlbmd0aD90aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzWzBdLmlkOm51bGxcblxuXHRcdHJldHVybihcblx0XHRcdDxkaXY+XG5cdFx0XHRcdHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaG9zcGl0YWxfc2VhcmNoX2NvbnRlbnQgJiYgdGhpcy5wcm9wcy5ob3NwaXRhbF9zZWFyY2hfY29udGVudCAhPSAnJyAmJiBwYXJzZUludCh0aGlzLnByb3BzLnBhZ2UpID09IDEgP1xuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtcmVzdWx0LWNhcmQtY29sbHBhc2VcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5yZWFkTW9yZX0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0aGlzLnByb3BzLmhvc3BpdGFsX3NlYXJjaF9jb250ZW50IH19ID5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJlYWRNb3JlICYmIHRoaXMuc3RhdGUucmVhZE1vcmUgIT0gJycgP1xuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZC1tb3JlXCIgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHJlYWRNb3JlOiAnJyB9KX0+UmVhZCBNb3JlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucmVhZE1vcmUgPT0gJycgP1xuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZC1tb3JlXCIgb25DbGljaz17dGhpcy50b2dnbGVTY3JvbGwuYmluZCh0aGlzKX0+UmVhZCBMZXNzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6ICcnXG4gICAgICAgIH1cblx0XHRcdFx0e1xuXHRcdFx0XHRcdGhvc3BpdGFsX2xpc3QubGVuZ3RoP1xuXHRcdFx0XHRcdDxJbmZpbml0ZVNjcm9sbFxuICAgICAgICAgICAgICBwYWdlU3RhcnQ9e3RoaXMuc3RhdGUucGFnZX1cbiAgICAgICAgICAgICAgbG9hZE1vcmU9e3RoaXMubG9hZE1vcmUuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgaGFzTW9yZT17dGhpcy5zdGF0ZS5oYXNNb3JlfVxuICAgICAgICAgICAgICB1c2VXaW5kb3c9e3RydWV9XG4gICAgICAgICAgICAgIGluaXRpYWxMb2FkPXtmYWxzZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAge1xuXHRcdFx0XHRcdFx0aG9zcGl0YWxfbGlzdC5tYXAoKGhvc3BpdGFsSWQsIGkpID0+IHtcblx0XHRcdFx0XHRcdFx0aWYoSE9TUElUQUxfREFUQVtob3NwaXRhbElkXSl7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxIb3NwaXRhbENhcmQga2V5PXtpfSBkYXRhPXtIT1NQSVRBTF9EQVRBW2hvc3BpdGFsSWRdfSBnZXRDb3N0RXN0aW1hdGVDbGlja2VkPXt0aGlzLmdldENvc3RFc3RpbWF0ZUNsaWNrZWQuYmluZCh0aGlzKX0gZ2V0SG9zcGl0YWxEZXRhaWxQYWdlPXt0aGlzLmdldEhvc3BpdGFsRGV0YWlsUGFnZS5iaW5kKHRoaXMpfSB0b2dnbGVQcm92aWRlckZpbHRlcj17dGhpcy50b2dnbGVQcm92aWRlckZpbHRlci5iaW5kKHRoaXMpfSBub0lwZD17aXBkX2lkP2ZhbHNlOnRydWV9IHsuLi50aGlzLnByb3BzfS8+XHRcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQ8L0luZmluaXRlU2Nyb2xsPlxuXHRcdFx0XHRcdDonJ1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0e1xuXHRcdCAgICAgICAgXHR0aGlzLnN0YXRlLnRvZ2dsZUZpbHRlclBvcHVwP1xuXHRcdCAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImlwZC1zZWN0aW9uXCI+XG5cdFx0XHQgICAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20tb3ZlcmxheVwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlUHJvdmlkZXJGaWx0ZXIuYmluZCh0aGlzKX0+PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tcG9wdXAgaGx0aC1pbnMtcG9wIGlucy1wb3BcIj5cblx0ICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyb3NzLWJ0blwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL2NwL2Fzc2V0cy9pbWcvaWNvbnMvY2xvc2UucG5nXCIgYWx0PVwiXCIgb25DbGljaz17dGhpcy50b2dnbGVQcm92aWRlckZpbHRlci5iaW5kKHRoaXMpfS8+PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgICAge1xuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgXHR0aGlzLnN0YXRlLmhlYWx0aF9pbnN1cmFuY2VfcHJvdmlkZXIubGVuZ3RoP1xuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cInBvcC1oZWFkIHRleHQtY2VudGVyXCI+SGVhbHRoIEluc3VyYW5jZSBQcm92aWRlcnM8L2Rpdj5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgIFx0OicnXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICBcdFx0XG5cdCAgICAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgICAgICAgIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICBcdHRoaXMuc3RhdGUuaGVhbHRoX2luc3VyYW5jZV9wcm92aWRlci5sZW5ndGg/XG5cdCAgICAgICAgICAgICAgICAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1saXN0aW5nXCI+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3AtaGVhZFwiPkhlYWx0aCBJbnN1cmFuY2UgUHJvdmlkZXJzPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInJhbmdlLXNsaWRlci11bFwiPlxuXHQgICAgICAgICAgICAgICAgICAgICAgIFx0XHRcdHtcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICBcdHRoaXMuc3RhdGUuaGVhbHRoX2luc3VyYW5jZV9wcm92aWRlci5tYXAoKHByb3ZpZGVyLCBpKSA9PiB7XG5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgXHRcdFx0XHRyZXR1cm4gPGxpIGtleT17aX0+e3Byb3ZpZGVyfVxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgIFx0XHRcdH0pXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIFx0fSAgICAgICAgICBcblx0XHQgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cdFx0ICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHQgICAgICAgICAgICAgICAgICAgIDonJ1xuXHQgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDonJ1xuXHRcdCAgICAgICAgfVxuXHRcdCAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA/IDxMb2FkZXIgY2xhc3NUeXBlPVwibG9hZGVyUGFnaW5hdGlvblwiIC8+IDogXCJcIn1cblx0XHRcdDwvZGl2Plx0XG4gICAgICAgICAgIFxuXHRcdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IElwZEhvc3BpdGFsTGlzdFZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGVmdEJhciBmcm9tICcuLi9jb21tb25zL0xlZnRCYXInXG5pbXBvcnQgUmlnaHRCYXIgZnJvbSAnLi4vY29tbW9ucy9SaWdodEJhcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgSXBkSG9zcGl0YWxMaXN0IGZyb20gJy4vSXBkSG9zcGl0YWxMaXN0LmpzJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9jb21tb25zL0xvYWRlcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tbW9ucy9Ib21lL2Zvb3RlcidcbmltcG9ydCBTdGlja3lUb3BCYXJGaWx0ZXIgZnJvbSAnLi9TdGlja3lUb3BCYXJGaWx0ZXIuanMnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IEhlbG1ldFRhZ3MgZnJvbSAnLi4vY29tbW9ucy9IZWxtZXRUYWdzJ1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi9jb25maWcnXG5pbXBvcnQgQnJlYWRDcnVtYlZpZXcgZnJvbSAnLi9icmVhZENydW1iLmpzJ1xuXG5jbGFzcyBJcGRIb3NwaXRhbFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzZWFyY2hfaWQ6ICcnLFxuICAgICAgICAgICAgc2V0U2VhcmNoSWQ6IGZhbHNlLFxuICAgICAgICAgICAgc2VvRnJpZW5kbHk6IHRoaXMucHJvcHMubWF0Y2gudXJsLmluY2x1ZGVzKCctaXBkaHAnKSB8fCB0aGlzLnByb3BzLm1hdGNoLnVybC5pbmNsdWRlcygnLWhzcGNpdCcpIHx8IHRoaXMucHJvcHMubWF0Y2gudXJsLmluY2x1ZGVzKCctaHNwbGl0Y2l0JylcblxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cbiAgICAgICAgbGV0IGlwZF9pZCA9ICcnXG4gICAgICAgIGlmKHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMgJiYgdGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlwZF9pZCA9IHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMubWFwKHg9PnguaWQpWzBdICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSXBkSG9zcGl0YWxTZWFyY2hQYWdlTGFuZGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnaXBkLWhvc3BpdGFsLXNlYXJjaC1wYWdlLWxhbmRlZCcsIHNlbGVjdGVkSWQ6IGlwZF9pZFxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG5cblx0XHRjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAvLyBpZiAodGhpcy5wcm9wcy5tZXJnZVVybFN0YXRlKSB7XG4gICAgICAgICAgICBsZXQgZ2V0U2VhcmNoSWQgPSB0cnVlXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoJ3NlYXJjaF9pZCcpKSB7XG4gICAgICAgICAgICAgICAgLy9pZiBzZWFyY2ggaWQgZXhpc3QgaW4gdXJsIHRoZW4gd2UgZ2V0IGRhdGEgZm9yIHRoYXQgc2VhcmNoIGlkIGZyb20gc3RvcmVcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWFyY2hfaWRfZGF0YSAmJiB0aGlzLnByb3BzLnNlYXJjaF9pZF9kYXRhW3BhcnNlZC5zZWFyY2hfaWRdICYmIHRoaXMucHJvcHMuc2VhcmNoX2lkX2RhdGFbcGFyc2VkLnNlYXJjaF9pZF0uZGF0YSAmJiBPYmplY3QudmFsdWVzKHRoaXMucHJvcHMuc2VhcmNoX2lkX2RhdGFbcGFyc2VkLnNlYXJjaF9pZF0uZGF0YSkubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgZ2V0U2VhcmNoSWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWFyY2hfaWRfZGF0YVtwYXJzZWQuc2VhcmNoX2lkXS5kYXRhLnJlc3VsdCAmJiB0aGlzLnByb3BzLnNlYXJjaF9pZF9kYXRhW3BhcnNlZC5zZWFyY2hfaWRdLmRhdGEucmVzdWx0Lmxlbmd0aCAmJiAhdGhpcy5wcm9wcy5nZXROZXdSZXN1bHRzICYmICF0aGlzLnByb3BzLmZldGNoTmV3UmVzdWx0cykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoX2lkOiBwYXJzZWQuc2VhcmNoX2lkIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldElwZFNlYXJjaElkUmVzdWx0cyhwYXJzZWQuc2VhcmNoX2lkLCB0aGlzLnByb3BzLnNlYXJjaF9pZF9kYXRhW3BhcnNlZC5zZWFyY2hfaWRdKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsdGVyQ3JpdGVyaWEgPSB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHsgY3JpdGVyaWEsIGZpbHRlcnMgfSA9IHRoaXMuYnVpbGRVcmxTdGF0ZSh0aGlzLnByb3BzLnNlYXJjaF9pZF9kYXRhW3BhcnNlZC5zZWFyY2hfaWRdLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLCB0aGlzLnByb3BzLnNlYXJjaF9pZF9kYXRhW3BhcnNlZC5zZWFyY2hfaWRdLmZpbHRlckNyaXRlcmlhKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJDcml0ZXJpYS5jb21tb25TZWxlY3RlZENyaXRlcmlhcyA9IGNyaXRlcmlhXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJDcml0ZXJpYS5maWx0ZXJDcml0ZXJpYSA9IGZpbHRlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hfaWQ6IHBhcnNlZC5zZWFyY2hfaWQgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYWdlID0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2UgPSBwYXJzZWQucGFnZSB8fCAxXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNldElwZFNlYXJjaElkKHBhcnNlZC5zZWFyY2hfaWQsIGZpbHRlckNyaXRlcmlhLCBwYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZ2V0U2VhcmNoSWQpIHtcbiAgICAgICAgICAgICAgICAvL0lmIG5vIHNlYXJjaElkIGluIHVybCB0aGVuIHdlIGNyZWF0ZSBzZWFyY2ggaWQgYW5kIHN0b3JlIGRhdGEgY29ycmVzcG9uZGluZyB0byB0aGF0IHNlYXJjaCBpZFxuICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJDcml0ZXJpYSA9IHt9XG4gICAgICAgICAgICAgICAgbGV0IHsgY3JpdGVyaWEsIGZpbHRlcnMgfSA9IHRoaXMuYnVpbGRVcmxTdGF0ZSh0aGlzLnByb3BzLm5leHRTZWxlY3RlZENyaXRlcmlhcywgdGhpcy5wcm9wcy5uZXh0RmlsdGVyQ3JpdGVyaWEpXG4gICAgICAgICAgICAgICAgZmlsdGVyQ3JpdGVyaWEuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMgPSBjcml0ZXJpYVxuICAgICAgICAgICAgICAgIGZpbHRlckNyaXRlcmlhLmZpbHRlckNyaXRlcmlhID0gZmlsdGVyc1xuICAgICAgICAgICAgICAgIGxldCBzZWFyY2hfaWQgPSB0aGlzLmdlbmVyYXRlU2VhcmNoSWQoKVxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubWVyZ2VJcGRDcml0ZXJpYSh7ZmV0Y2hOZXdSZXN1bHRzOmZhbHNlfSlcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoX2lkOiBzZWFyY2hfaWQgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3X3VybCA9IHRoaXMuYnVpbGRVUkkodGhpcy5wcm9wcylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UobmV3X3VybClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRJcGRTZWFyY2hJZChzZWFyY2hfaWQsIGZpbHRlckNyaXRlcmlhLCBwYXJzZWQucGFnZSB8fCAxKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cdH1cblxuICAgIGJ1aWxkVXJsU3RhdGUoc2VsZWN0ZWRDcml0ZXJpYSwgZmlsdGVyQ3JpdGVyaWEpe1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgbGV0IGNyaXRlcmlhID1bXVxuICAgICAgICBsZXQgZmlsdGVycyA9IHtcbiAgICAgICAgICAgIGRpc3RhbmNlOiBbXSxcbiAgICAgICAgICAgIHByb3ZpZGVyX2lkczogW10sXG4gICAgICAgICAgICBuZXR3b3JrX2lkIDonJ1xuICAgICAgICB9XG5cbiAgICAgICAgaWYocGFyc2VkLmlwZF9pZCl7XG4gICAgICAgICAgICBjcml0ZXJpYS5wdXNoKHtpZDogcGFyc2VkLmlwZF9pZCwgbmFtZTogJyd9KVxuICAgICAgICB9ZWxzZSBpZihzZWxlY3RlZENyaXRlcmlhLmxlbmd0aCl7XG4gICAgICAgICAgICBjcml0ZXJpYS5wdXNoKHtpZDogc2VsZWN0ZWRDcml0ZXJpYVswXS5pZCwgbmFtZTogJyd9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYocGFyc2VkLm1pbl9kaXN0YW5jZSl7XG4gICAgICAgICAgICBmaWx0ZXJzLmRpc3RhbmNlLnB1c2gocGFyc2VJbnQocGFyc2VkLm1pbl9kaXN0YW5jZSkpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZmlsdGVycy5kaXN0YW5jZS5wdXNoKGZpbHRlckNyaXRlcmlhLmRpc3RhbmNlWzBdKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYocGFyc2VkLm1heF9kaXN0YW5jZSl7XG4gICAgICAgICAgICBmaWx0ZXJzLmRpc3RhbmNlLnB1c2gocGFyc2VJbnQocGFyc2VkLm1heF9kaXN0YW5jZSkpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZmlsdGVycy5kaXN0YW5jZS5wdXNoKGZpbHRlckNyaXRlcmlhLmRpc3RhbmNlWzFdKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYocGFyc2VkLnByb3ZpZGVyX2lkcyl7XG4gICAgICAgICAgICBsZXQgcHJvdmlkZXJzID0gW11cbiAgICAgICAgICAgIHBhcnNlZC5wcm92aWRlcl9pZHMuc3BsaXQoJywnKS5tYXAoKHgpPT57XG4gICAgICAgICAgICAgICAgcHJvdmlkZXJzLnB1c2gocGFyc2VJbnQoeCkpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZmlsdGVycy5wcm92aWRlcl9pZHMgPSBwcm92aWRlcnNcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBmaWx0ZXJzLnByb3ZpZGVyX2lkcy5jb25jYXQoZmlsdGVyQ3JpdGVyaWEucHJvdmlkZXJfaWRzKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYocGFyc2VkLm5ldHdvcmtfaWQpIHtcbiAgICAgICAgICAgIGZpbHRlcnMubmV0d29ya19pZCA9IHBhcnNlZC5uZXR3b3JrX2lkXG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGZpbHRlcnMubmV0d29ya19pZCA9IGZpbHRlckNyaXRlcmlhLm5ldHdvcmtfaWRcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybih7Y3JpdGVyaWEsIGZpbHRlcnN9KVxuXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKG5leHRQcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCBzZWFyY2hfaWQgPSAnJ1xuICAgICAgICBpZihwYXJzZWQuc2VhcmNoX2lkKXtcbiAgICAgICAgICAgIHNlYXJjaF9pZCA9IHBhcnNlZC5zZWFyY2hfaWRcbiAgICAgICAgfVxuICAgICAgICBpZihuZXh0UHJvcHMuZmV0Y2hOZXdSZXN1bHRzICYmIChuZXh0UHJvcHMuZmV0Y2hOZXdSZXN1bHRzICE9IHRoaXMucHJvcHMuZmV0Y2hOZXdSZXN1bHRzICYmIHRoaXMuc3RhdGUuc2VhcmNoX2lkKSl7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZXRTZWFyY2hJZDogdHJ1ZX0sICgpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJcGRIb3NwaXRhbExpc3QobmV4dFByb3BzKSAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1lbHNlIGlmIChuZXh0UHJvcHMuZmV0Y2hOZXdSZXN1bHRzICYmIHRoaXMuc3RhdGUuc2VhcmNoX2lkICYmICh0aGlzLnN0YXRlLnNlYXJjaF9pZCA9PSBzZWFyY2hfaWQpICYmICF0aGlzLnN0YXRlLnNldFNlYXJjaElkKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2V0U2VhcmNoSWQ6IHRydWUgfSwgKCk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJcGRIb3NwaXRhbExpc3QobmV4dFByb3BzKSAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgfWVsc2UgaWYobmV4dFByb3BzLmxvY2F0aW9uRmV0Y2hlZCAhPSB0aGlzLnByb3BzLmxvY2F0aW9uRmV0Y2hlZCl7XG4gICAgICAgICAgICAvL1doZW5ldmVyIGxvY2F0aW9uIGNoYW5nZXMgbWFrZSBhcGkgY2FsbHNcbiAgICAgICAgICAgIHRoaXMuZ2V0SXBkSG9zcGl0YWxMaXN0KG5leHRQcm9wcylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldElwZEhvc3BpdGFsTGlzdChzdGF0ZSwgcGFnZT1udWxsLCBjYj1udWxsKXtcbiAgICAgICAgLy9hcHBseSBmaWx0ZXJzIGFuZCBnZXQgdXBkYXRlZCBkYXRhXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBcbiAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUgPSB0aGlzLnByb3BzXG4gICAgICAgIH1cblxuICAgICAgICBpZighcGFnZSAmJiBwYXJzZWQucGFnZSl7XG4gICAgICAgICAgICBwYWdlID0gcGFyc2VkLnBhZ2UgfHwgMVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHBhZ2UgPSBwYWdlIHx8IDFcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzZWFyY2hVcmwgPSBudWxsXG4gICAgICAgIGlmIChzdGF0ZS5tYXRjaC51cmwuaW5jbHVkZXMoJy1pcGRocCcpIHx8IHN0YXRlLm1hdGNoLnVybC5pbmNsdWRlcygnLWhzcGNpdCcpIHx8IHN0YXRlLm1hdGNoLnVybC5pbmNsdWRlcygnLWhzcGxpdGNpdCcpKSB7XG4gICAgICAgICAgICBzZWFyY2hVcmwgPSBzdGF0ZS5tYXRjaC51cmwudG9Mb3dlckNhc2UoKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9wcy5nZXRJcGRIb3NwaXRhbHMoc3RhdGUsIHBhZ2UsIGZhbHNlLCBzZWFyY2hVcmwsICguLi5hcmdzKSA9PiB7XG5cbiAgICAgICAgICAgIGlmKGNiKWNiKC4uLmFyZ3MpXG4gICAgICAgICAgICBsZXQgbmV3X3VybCA9IHRoaXMuYnVpbGRVUkkoc3RhdGUpXG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucmVwbGFjZShuZXdfdXJsKVxuICAgICAgICB9KVxuICAgIH1cblxuXHRidWlsZFVSSShzdGF0ZSkge1xuICAgICAgICAvL2tlZXAgb24gdXBkYXRpbmcgdXJsIHdpdGggdGhlIHVwZGF0ZWQgZmlsdGVycyBcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG5cbiAgICAgICAgbGV0IHsgc2VsZWN0ZWRMb2NhdGlvbiwgY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMsIGZpbHRlckNyaXRlcmlhLCBsb2NhdGlvblR5cGUgfSA9IHN0YXRlXG4gICAgICAgIFxuICAgICAgICBsZXQgcGFnZSA9IDFcbiAgICAgICAgbGV0IGlwZF9pZCA9IGNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLm1hcCh4PT54LmlkKVxuICAgICAgICBsZXQgbGF0ID0gMjguNjQ0ODAwXG4gICAgICAgIGxldCBsb25nID0gNzcuMjE2NzIxXG4gICAgICAgIGxldCBwbGFjZV9pZCA9IFwiXCJcblxuICAgICAgICBpZiAoc2VsZWN0ZWRMb2NhdGlvbikge1xuICAgICAgICAgICAgcGxhY2VfaWQgPSBzZWxlY3RlZExvY2F0aW9uLnBsYWNlX2lkIHx8IFwiXCJcbiAgICAgICAgICAgIGxhdCA9IHNlbGVjdGVkTG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubGF0XG4gICAgICAgICAgICBsb25nID0gc2VsZWN0ZWRMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sbmdcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGF0ID09PSAnZnVuY3Rpb24nKSBsYXQgPSBsYXQoKVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsb25nID09PSAnZnVuY3Rpb24nKSBsb25nID0gbG9uZygpXG5cbiAgICAgICAgICAgIGxhdCA9IHBhcnNlRmxvYXQocGFyc2VGbG9hdChsYXQpLnRvRml4ZWQoNikpXG4gICAgICAgICAgICBsb25nID0gcGFyc2VGbG9hdChwYXJzZUZsb2F0KGxvbmcpLnRvRml4ZWQoNikpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbWluX2Rpc3RhbmNlID0gZmlsdGVyQ3JpdGVyaWEuZGlzdGFuY2VbMF1cbiAgICAgICAgbGV0IG1heF9kaXN0YW5jZSA9IGZpbHRlckNyaXRlcmlhLmRpc3RhbmNlWzFdXG4gICAgICAgIGxldCBwcm92aWRlcl9pZHMgPSBmaWx0ZXJDcml0ZXJpYS5wcm92aWRlcl9pZHNcbiAgICAgICAgbGV0IG5ldHdvcmtfaWQgPSBmaWx0ZXJDcml0ZXJpYS5uZXR3b3JrX2lkXG5cbiAgICAgICAgbGV0IHVybCA9ICcnXG5cbiAgICAgICAgLy9DaGVjayBpZiBhbnkgZmlsdGVyIGFwcGxpZWQgXG4gICAgICAgIGxldCBpc19maWx0ZXJfYXBwbGllZCA9IGZhbHNlXG4gICAgICAgIGxldCBpc19wYXJhbXNfZXhpc3QgPSBmYWxzZVxuXG4gICAgICAgIFxuICAgICAgICBpZiAocGFyc2VJbnQobWluX2Rpc3RhbmNlKSAhPSAwKSB7XG4gICAgICAgICAgICBpc19maWx0ZXJfYXBwbGllZCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyc2VJbnQobWF4X2Rpc3RhbmNlKSAhPSAyMCkge1xuICAgICAgICAgICAgaXNfZmlsdGVyX2FwcGxpZWQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3ZpZGVyX2lkcyAmJiBwcm92aWRlcl9pZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpc19maWx0ZXJfYXBwbGllZCA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGlzX2ZpbHRlcl9hcHBsaWVkIHx8ICF0aGlzLnN0YXRlLnNlb0ZyaWVuZGx5KSB7XG5cbiAgICAgICAgICAgIHVybCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0/aXBkX2lkPSR7aXBkX2lkfSZtaW5fZGlzdGFuY2U9JHttaW5fZGlzdGFuY2V9Jm1heF9kaXN0YW5jZT0ke21heF9kaXN0YW5jZX0mcHJvdmlkZXJfaWRzPSR7cHJvdmlkZXJfaWRzfSZzZWFyY2hfaWQ9JHt0aGlzLnN0YXRlLnNlYXJjaF9pZH0mbGF0PSR7bGF0fSZsb25nPSR7bG9uZ30mcGxhY2VfaWQ9JHtwbGFjZV9pZH0mbmV0d29ya19pZD0ke25ldHdvcmtfaWR9YFxuXG4gICAgICAgICAgICBpc19wYXJhbXNfZXhpc3QgPSB0cnVlXG5cblxuICAgICAgICB9ZWxzZSBpZih0aGlzLnN0YXRlLnNlb0ZyaWVuZGx5KSB7XG5cbiAgICAgICAgICAgIHVybCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX1gXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyc2VkLnBhZ2UpIHtcbiAgICAgICAgICAgIHVybCArPSBgJHtpc19wYXJhbXNfZXhpc3QgPyAnJicgOiAnPyd9cGFnZT0ke3BhcnNlZC5wYWdlfWBcbiAgICAgICAgICAgIGlzX3BhcmFtc19leGlzdCA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHBhcnNlZC51dG1fc291cmNlKSB7XG4gICAgICAgICAgICB1cmwrPSBgJHtpc19wYXJhbXNfZXhpc3QgPyAnJicgOiAnPyd9dXRtX3NvdXJjZT0ke3BhcnNlZC51dG1fc291cmNlfHwnJ31gXG4gICAgICAgICAgICBpc19wYXJhbXNfZXhpc3QgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZihwYXJzZWQudXRtX21lZGl1bSkge1xuICAgICAgICAgICAgdXJsKz0gYCR7aXNfcGFyYW1zX2V4aXN0ID8gJyYnIDogJz8nfXV0bV9tZWRpdW09JHtwYXJzZWQudXRtX21lZGl1bXx8Jyd9YFxuICAgICAgICAgICAgaXNfcGFyYW1zX2V4aXN0ID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYocGFyc2VkLnV0bV9jYW1wYWlnbikge1xuICAgICAgICAgICAgdXJsKz0gYCR7aXNfcGFyYW1zX2V4aXN0ID8gJyYnIDogJz8nfXV0bV9jYW1wYWlnbj0ke3BhcnNlZC51dG1fY2FtcGFpZ258fCcnfWBcbiAgICAgICAgICAgIGlzX3BhcmFtc19leGlzdCA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1cmxcbiAgICB9XG5cbiAgICBnZW5lcmF0ZVNlYXJjaElkKHVpZF9zdHJpbmcpIHtcbiAgICAgICAgLy9tZXRob2QgdG8gZ2VuZXJhdGUgc2VhcmNoIGlkXG4gICAgICAgIHVpZF9zdHJpbmcgPSAneHl5eXh4eXgteHh5eC00eHh4LXl4eHgteHh4eXl5eHh4eHh4J1xuICAgICAgICB2YXIgZHQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIHV1aWQgPSB1aWRfc3RyaW5nLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHZhciByID0gKGR0ICsgTWF0aC5yYW5kb20oKSAqIDE2KSAlIDE2IHwgMDtcbiAgICAgICAgICAgIGR0ID0gTWF0aC5mbG9vcihkdCAvIDE2KTtcbiAgICAgICAgICAgIHJldHVybiAoYyA9PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpKS50b1N0cmluZygxNik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdXVpZDtcbiAgICB9XG5cblx0Z2V0TW9yZVJlc3VsdHMoKXtcblx0XHR0aGlzLmdldElwZEhvc3BpdGFsTGlzdCh0aGlzLnByb3BzKVxuXHR9XG5cbiAgICBnZXRNZXRhVGFnc0RhdGEoc2VvRGF0YSkge1xuICAgICAgICBsZXQgdGl0bGUgPSBcIkhvc3BpdGFsIFNlYXJjaFwiXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNlb0ZyaWVuZGx5KSB7XG4gICAgICAgICAgICB0aXRsZSA9IFwiXCJcbiAgICAgICAgfVxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBcIlwiXG4gICAgICAgIGlmIChzZW9EYXRhKSB7XG4gICAgICAgICAgICB0aXRsZSA9IHNlb0RhdGEudGl0bGU/c2VvRGF0YS50aXRsZTp0aXRsZVxuICAgICAgICAgICAgZGVzY3JpcHRpb24gPSBzZW9EYXRhLmRlc2NyaXB0aW9uIHx8IFwiXCJcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24gfVxuICAgIH1cblxuXHRyZW5kZXIoKXtcblx0XHRsZXQgeyBob3NwaXRhbF9saXN0IH0gPSB0aGlzLnByb3BzXG4gICAgICAgIGxldCB1cmwgPSBgJHtDT05GSUcuQVBJX0JBU0VfVVJMfSR7dGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZX1gXG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKC8mcGFnZT1cXGR7MSx9LywgXCJcIilcbiAgICAgICAgbGV0IHBhZ2UgPSBcIlwiXG4gICAgICAgIGxldCBjdXJyX3BhZ2UgPSBwYXJzZUludCh0aGlzLnByb3BzLnBhZ2UpXG4gICAgICAgIGxldCBwcmV2ID0gXCJcIlxuICAgICAgICBpZiAoY3Vycl9wYWdlID4gMSkge1xuICAgICAgICAgICAgcGFnZSA9IGA/cGFnZT0ke2N1cnJfcGFnZX1gXG4gICAgICAgICAgICBwcmV2ID0gdXJsXG4gICAgICAgICAgICBpZiAoY3Vycl9wYWdlID4gMikge1xuICAgICAgICAgICAgICAgIHByZXYgKz0gYD9wYWdlPSR7Y3Vycl9wYWdlIC0gMX1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5leHQgPSBcIlwiXG4gICAgICAgIGxldCBjb3VudCA9IHRoaXMucHJvcHMuaG9zcGl0YWxfc2VhcmNoX3Jlc3VsdHMgJiYgdGhpcy5wcm9wcy5ob3NwaXRhbF9zZWFyY2hfcmVzdWx0cy5jb3VudD9wYXJzZUludCh0aGlzLnByb3BzLmhvc3BpdGFsX3NlYXJjaF9yZXN1bHRzLmNvdW50KTowXG5cbiAgICAgICAgaWYgKGNvdW50ID4gY3Vycl9wYWdlICogMjApIHtcbiAgICAgICAgICAgIG5leHQgPSB1cmwgKyBgP3BhZ2U9JHtjdXJyX3BhZ2UgKyAxfWBcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRvIG5vdCBzZXQgcmVsIG5leHQvcHJldiBmb3Igbm9uIHNlb0ZyaWVuZGx5IHBhZ2VzXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5zZW9GcmllbmRseSkge1xuICAgICAgICAgICAgbmV4dCA9IFwiXCJcbiAgICAgICAgICAgIHByZXYgPSBcIlwiXG4gICAgICAgIH1cblxuXHRcdHJldHVybihcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxIZWxtZXRUYWdzIHRhZ3NEYXRhPXt7XG4gICAgICAgICAgICAgICAgICAgIGNhbm9uaWNhbFVybDogYCR7Q09ORklHLkFQSV9CQVNFX1VSTH0ke3RoaXMucHJvcHMubWF0Y2gudXJsfSR7cGFnZX1gLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5nZXRNZXRhVGFnc0RhdGEodGhpcy5wcm9wcy5ob3NwaXRhbFNlYXJjaFNlb0RhdGEpLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5nZXRNZXRhVGFnc0RhdGEodGhpcy5wcm9wcy5ob3NwaXRhbFNlYXJjaFNlb0RhdGEpLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICBwcmV2OiBwcmV2LFxuICAgICAgICAgICAgICAgICAgICBuZXh0OiBuZXh0XG4gICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciBzaG93U2VhcmNoPXt0cnVlfSAvPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLkhPU1BJVEFMX1NFQVJDSF9EQVRBX0xPQURFRD9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBwYXJlbnQtc2VjdGlvbiBib29rLWFwcG9pbnRtZW50LXNlY3Rpb24gYnJlYWRjcnVtYi1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhvc3BpdGFsQnJlYWRjcnVtYiAmJiB0aGlzLnByb3BzLmhvc3BpdGFsQnJlYWRjcnVtYi5sZW5ndGg/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCcmVhZENydW1iVmlldyBicmVhZGNydW1iPXt0aGlzLnByb3BzLmhvc3BpdGFsQnJlYWRjcnVtYn0gey4uLnRoaXMucHJvcHN9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGVmdEJhciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctNyBjZW50ZXItY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RpY2t5VG9wQmFyRmlsdGVyIHsuLi50aGlzLnByb3BzfSBmZXRjaE5ld1Jlc3VsdHM9e3RoaXMuZ2V0TW9yZVJlc3VsdHMuYmluZCh0aGlzKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwiaXBkLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvc3BpdGFsX2xpc3QubGVuZ3RoPjA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmUgZmFkZVwiIGlkPVwibmF2LWhvc3BpdGFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElwZEhvc3BpdGFsTGlzdCB7Li4udGhpcy5wcm9wc30gZ2V0SXBkSG9zcGl0YWxMaXN0PXt0aGlzLmdldElwZEhvc3BpdGFsTGlzdC5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJpZ2h0QmFyIGV4dHJhQ2xhc3M9XCIgY2hhdC1mbG9hdC1idG4tMlwiIG1zZ1RlbXBsYXRlPVwiZ29sZF9nZW5lcmFsX3RlbXBsYXRlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgOjxMb2FkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaG9zcGl0YWxfYm90dG9tX2NvbnRlbnQgJiYgdGhpcy5wcm9wcy5ob3NwaXRhbF9ib3R0b21fY29udGVudC5sZW5ndGggJiYgcGFyc2VJbnQodGhpcy5wcm9wcy5wYWdlKSA9PSAxID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBtcnQtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtcmVzdWx0LWNhcmQtY29sbHBhc2VcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRoaXMucHJvcHMuaG9zcGl0YWxfYm90dG9tX2NvbnRlbnQgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuXHRcdCAgICAgICAgICAgIDxGb290ZXIgLz5cblx0ICAgICAgICAgICBcdDwvZGl2PlxuXG5cdFx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSXBkSG9zcGl0YWxWaWV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlc3VsdENvdW50IGZyb20gJy4vcmVzdWx0X2NvdW50LmpzJ1xuaW1wb3J0IFJhbmdlIGZyb20gJ3JjLXNsaWRlci9saWIvUmFuZ2UnO1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKVxuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi9oZWxwZXJzL2d0bS5qcydcblxuY2xhc3MgU3RpY2t5RmlsdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dG9nZ2xlRmlsdGVyUG9wdXAgOmZhbHNlLFxuXHRcdFx0bGFzdFNlbGVjdGVkUHJvdmlkZXJJZHM6IFtdLFxuXHRcdFx0bGFzdFNlbGVjdGVkRGlzdGFuY2U6IFswLCAyNV0sXG5cdFx0XHRwcm92aWRlcl9pZHM6IFtdLFxuXHRcdFx0ZGlzdGFuY2U6IFswLCAyNV1cblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7cHJvdmlkZXJfaWRzOiBuZXh0UHJvcHMuZmlsdGVyQ3JpdGVyaWEucHJvdmlkZXJfaWRzLCBsYXN0U2VsZWN0ZWRQcm92aWRlcklkczogbmV4dFByb3BzLmZpbHRlckNyaXRlcmlhLnByb3ZpZGVyX2lkcywgZGlzdGFuY2U6IG5leHRQcm9wcy5maWx0ZXJDcml0ZXJpYS5kaXN0YW5jZSwgbGFzdFNlbGVjdGVkRGlzdGFuY2U6IG5leHRQcm9wcy5maWx0ZXJDcml0ZXJpYS5kaXN0YW5jZX0pXG5cdH1cblxuXHRhcHBseUZpbHRlcnMoKXtcblx0XHRjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcblx0XHRsZXQgZmlsdGVyQ3JpdGVyaWEgPSAge1xuXHRcdFx0ZGlzdGFuY2U6IHRoaXMuc3RhdGUuZGlzdGFuY2UsXG5cdFx0XHRwcm92aWRlcl9pZHM6IHRoaXMuc3RhdGUucHJvdmlkZXJfaWRzXG5cdFx0fVxuXG5cdFx0bGV0IGd0bURhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0lwZEhvc3BpdGFsU2VhcmNoRmlsdGVyQXBwbGllZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2lwZC1ob3NwaXRhbC1zZWFyY2gtZmlsdGVyLWFwcGxpZWQnLCAnbWluRGlzdGFuY2UnOnRoaXMuc3RhdGUuZGlzdGFuY2VbMF0sICdtYXhEaXN0YW5jZSc6IHRoaXMuc3RhdGUuZGlzdGFuY2VbMV0sICdwcm92aWRlcl9pZHMnOiB0aGlzLnN0YXRlLnByb3ZpZGVyX2lkcy5qb2luKCcsJykgXG4gICAgICAgIH1cblxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7bGFzdFNlbGVjdGVkUHJvdmlkZXJJZHM6IHRoaXMuc3RhdGUucHJvdmlkZXJfaWRzLCBsYXN0U2VsZWN0ZWREaXN0YW5jZTogdGhpcy5zdGF0ZS5kaXN0YW5jZX0pXG5cdFx0bGV0IHNlYXJjaF9pZF9kYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy5zZWFyY2hfaWRfZGF0YSlcblxuXHRcdGlmICh0aGlzLnByb3BzLnNlYXJjaF9pZF9kYXRhICYmIHRoaXMucHJvcHMuc2VhcmNoX2lkX2RhdGFbcGFyc2VkLnNlYXJjaF9pZF0pIHtcbiAgICAgICAgICAgIHNlYXJjaF9pZF9kYXRhW3BhcnNlZC5zZWFyY2hfaWRdLmZpbHRlckNyaXRlcmlhID0gZmlsdGVyQ3JpdGVyaWFcbiAgICAgICAgICAgIHNlYXJjaF9pZF9kYXRhW3BhcnNlZC5zZWFyY2hfaWRdLnBhZ2UgPSAxXG4gICAgICAgIH1cblxuXHRcdHRoaXMucHJvcHMubWVyZ2VJcGRDcml0ZXJpYSh7XG5cdFx0XHRmaWx0ZXJDcml0ZXJpYTpmaWx0ZXJDcml0ZXJpYSwgc2VhcmNoX2lkX2RhdGE6IHNlYXJjaF9pZF9kYXRhLCBwYWdlOiAxXG5cdFx0fSlcblx0XHRzZXRUaW1lb3V0KCgpPT57XG5cdFx0XHR0aGlzLnByb3BzLmZldGNoTmV3UmVzdWx0cygpXG5cdFx0XHR0aGlzLnNldFN0YXRlKHt0b2dnbGVGaWx0ZXJQb3B1cDogZmFsc2V9KVxuXHRcdH0sMTAwKVxuXHR9XG5cblx0dG9nZ2xlUHJvdmlkZXJGaWx0ZXIoaWQpe1xuXHRcdGxldCBwcm92aWRlcl9pZHMgPSBbXSBcblx0XHRsZXQgZm91bmQgPSBmYWxzZVxuXHRcdHByb3ZpZGVyX2lkcyA9IHRoaXMuc3RhdGUucHJvdmlkZXJfaWRzLmZpbHRlcigoeCkgPT4ge1xuXHRcdFx0aWYoeD09aWQpe1xuXHRcdFx0XHRmb3VuZCA9IHRydWVcblx0XHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdH0pXG5cblx0XHRpZighZm91bmQpe1xuXHRcdFx0cHJvdmlkZXJfaWRzLnB1c2goaWQpXG5cdFx0fVxuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7cHJvdmlkZXJfaWRzOiBwcm92aWRlcl9pZHN9KVxuXHR9XG5cblx0Y2xvc2VGaWx0ZXJzUG9wVXAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHt0b2dnbGVGaWx0ZXJQb3B1cDogZmFsc2UsIHByb3ZpZGVyX2lkczogdGhpcy5zdGF0ZS5sYXN0U2VsZWN0ZWRQcm92aWRlcklkcywgZGlzdGFuY2U6IHRoaXMuc3RhdGUubGFzdFNlbGVjdGVkRGlzdGFuY2V9KVxuXHR9XG5cblx0aGFuZGxlUmFuZ2UodHlwZSwgcmFuZ2UpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBbdHlwZV06IHJhbmdlXG4gICAgICAgIH0pXG4gICAgfVxuXHRyZW5kZXIoKXtcblx0XHRsZXQgc2VvRGF0YSA9IHRoaXMucHJvcHMuaG9zcGl0YWxTZWFyY2hTZW9EYXRhXG5cdFx0bGV0IHsgaG9zcGl0YWxfc2VhcmNoX3Jlc3VsdHMgfSA9IHRoaXMucHJvcHNcblx0XHRsZXQgaGVhbHRoX2luc3VyYW5jZV9wcm92aWRlciA9IFtdXG5cblx0XHRpZihob3NwaXRhbF9zZWFyY2hfcmVzdWx0cyAmJiBob3NwaXRhbF9zZWFyY2hfcmVzdWx0cy5pbnN1cmFuY2VfcHJvdmlkZXJzICYmIGhvc3BpdGFsX3NlYXJjaF9yZXN1bHRzLmluc3VyYW5jZV9wcm92aWRlcnMubGVuZ3RoKXtcblxuXHRcdFx0aWYoaG9zcGl0YWxfc2VhcmNoX3Jlc3VsdHMuaW5zdXJhbmNlX3Byb3ZpZGVycy5sZW5ndGggPjQgJiYgdGhpcy5zdGF0ZS5zaG93TW9yZVByb3ZpZGVycyl7XG5cdFx0XHRcdGhlYWx0aF9pbnN1cmFuY2VfcHJvdmlkZXIgPSBob3NwaXRhbF9zZWFyY2hfcmVzdWx0cy5pbnN1cmFuY2VfcHJvdmlkZXJzXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0aGVhbHRoX2luc3VyYW5jZV9wcm92aWRlciA9IGhvc3BpdGFsX3NlYXJjaF9yZXN1bHRzLmluc3VyYW5jZV9wcm92aWRlcnMuc2xpY2UoMCwzKVx0XG5cdFx0XHR9XG5cdFx0XHRcblxuXHRcdH1cblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XG5cdFx0ICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzdGljay1wcm50XCI+XG5cdFx0ICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGljay1pdFwiPlxuXHRcdFx0ICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1maWx0ZXItdGFiLWNvbnRhaW5lclwiPlxuXHRcdFx0ICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cInRvcC1maWx0ZXItdGFicy1zZWxlY3RcIj48aW1nIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9jcC9hc3NldHMvaW1nL3NvcnQuc3ZnXCIgc3R5bGU9e3sgd2lkdGg6ICcxOHB4JywgbWFyZ2luUmlnaHQ6ICc1cHgnIH19IC8+PHNwYW4+U29ydDwvc3Bhbj48L2Rpdj4qL31cblx0XHRcdCAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtZmlsdGVyLXRhYnMtc2VsZWN0XCIgb25DbGljaz17KCk9Pntcblx0XHRcdCAgICAgICAgICAgICAgXHRsZXQgZ3RtRGF0YSA9IHtcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSXBkSG9zcGl0YWxTZWFyY2hGaWx0ZXJDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnaXBkLWhvc3BpdGFsLXNlYXJjaC1maWx0ZXItY2xpY2tlZCdcblx0XHRcdFx0XHRcdCAgICAgICAgfVxuXHRcdFx0XHRcdFx0ICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuXG5cdFx0XHQgICAgICAgICAgICAgIFx0dGhpcy5zZXRTdGF0ZSh7dG9nZ2xlRmlsdGVyUG9wdXA6IHRydWV9KVxuXHRcdFx0ICAgICAgICAgICAgICB9fT48aW1nIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9jcC9hc3NldHMvaW1nL2ZpbHRlci5zdmdcIiBzdHlsZT17eyB3aWR0aDogJzE4cHgnLCBtYXJnaW5SaWdodDogJzVweCcgfX0gLz48c3Bhbj5GaWx0ZXI8L3NwYW4+PC9kaXY+XG5cdFx0XHQgICAgICAgICAgIDwvZGl2PlxuXHRcdCAgICAgICAgICAgPC9kaXY+XG5cdFx0ICAgICAgICAgICA8UmVzdWx0Q291bnQgey4uLnRoaXMucHJvcHN9IGFwcGx5RmlsdGVycz17dGhpcy5hcHBseUZpbHRlcnMuYmluZCh0aGlzKX0gc2VvRGF0YT17c2VvRGF0YX0gbGFiX2NhcmQ9e2ZhbHNlfSBzZW9GcmllbmRseT17ZmFsc2V9Lz5cblx0XHQgICAgICAgIDwvc2VjdGlvbj5cblxuXHRcdCAgICAgICAge1xuXHRcdCAgICAgICAgXHR0aGlzLnN0YXRlLnRvZ2dsZUZpbHRlclBvcHVwP1xuXHRcdCAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImlwZC1zZWN0aW9uXCI+XG5cdFx0XHQgICAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20tb3ZlcmxheVwiIG9uQ2xpY2s9e3RoaXMuY2xvc2VGaWx0ZXJzUG9wVXAuYmluZCh0aGlzKX0+PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tcG9wdXAgaGx0aC1pbnMtcG9wXCI+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcm9zcy1idG5cIj48aW1nIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9jcC9hc3NldHMvaW1nL2ljb25zL2Nsb3NlLnBuZ1wiIGFsdD1cIlwiIG9uQ2xpY2s9e3RoaXMuY2xvc2VGaWx0ZXJzUG9wVXAuYmluZCh0aGlzKX0vPjwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wLWhlYWQgdGV4dC1jZW50ZXJcIj5GaWx0ZXJzPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJkaXN0YW5jZS1zbGlkZXJcIj5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RGlzdGFuY2U8L3NwYW4+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9ybmctdHh0XCI+MCBLbSB0byAxNSBLbTwvc3Bhbj5cblx0ICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4qL31cblxuXHQgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJSb3cgZGlzdGFuY2Utc2xpZGVyLWJhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGxcIj5EaXN0YW5jZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRyIG9ybmctdHh0XCI+IHt0aGlzLnN0YXRlLmRpc3RhbmNlWzBdfSBLbSB0byB7dGhpcy5zdGF0ZS5kaXN0YW5jZVsxXX0gS20gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmwgXCI+MCBLbTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyXCI+NTAgS208L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYW5nZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9ezUwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRpc3RhbmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVJhbmdlLmJpbmQodGhpcywgJ2Rpc3RhbmNlJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG5cblx0ICAgICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cImRpc3RhbmNlLXNsaWRlci1iYXJcIj5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtaW49XCIxXCIgbWF4PVwiNTBcIiB2YWx1ZT1cIjIwXCIgY2xhc3NOYW1lPVwiZGlzLXNsaWRlclwiIC8+IFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYW5nZS12YWx1ZVwiPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4wIEttPC9zcGFuPiAgXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjUwIEttPC9zcGFuPiAgXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4qL31cblx0ICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cblxuXHQgICAgICAgICAgICAgICAgICAgICAgIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICBcdGhlYWx0aF9pbnN1cmFuY2VfcHJvdmlkZXIubGVuZ3RoICYmIGZhbHNlP1xuXHQgICAgICAgICAgICAgICAgICAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtbGlzdGluZ1wiPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wLWhlYWRcIj5IZWFsdGggSW5zdXJhbmNlIFByb3ZpZGVyczwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJyYW5nZS1zbGlkZXItdWxcIj5cblx0ICAgICAgICAgICAgICAgICAgICAgICBcdFx0XHR7XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgXHRoZWFsdGhfaW5zdXJhbmNlX3Byb3ZpZGVyLmxlbmd0aD9cblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICBcdGhlYWx0aF9pbnN1cmFuY2VfcHJvdmlkZXIubWFwKChwcm92aWRlciwgaSkgPT4ge1xuXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgIFx0XHRcdFx0cmV0dXJuIDxsaSBrZXk9e2l9PlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNrLWJ4XCI+e3Byb3ZpZGVyLm5hbWV9IFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIm9uXCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5wcm92aWRlcl9pZHMuaW5kZXhPZihwcm92aWRlci5pZCk+LTE/dHJ1ZTpmYWxzZX0gb25DaGFuZ2U9e3RoaXMudG9nZ2xlUHJvdmlkZXJGaWx0ZXIuYmluZCh0aGlzLCBwcm92aWRlci5pZCl9Lz5cblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIj48L3NwYW4+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgIFx0XHRcdH0pXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIFx0XHQ6Jydcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgXHR9ICAgICAgICAgIFxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgIHtcblx0ICAgICAgICAgICAgICAgICAgICBcdFx0aGVhbHRoX2luc3VyYW5jZV9wcm92aWRlci5sZW5ndGggPjQgJiYgIXRoaXMuc3RhdGUuc2hvd01vcmVQcm92aWRlcnM/XG5cdFx0ICAgICAgICAgICAgICAgICAgICBcdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBvbkNsaWNrPXsoKT0+dGhpcy5zZXRTdGF0ZSh7dG9nZ2xlRmlsdGVyUG9wdXA6IHRydWV9KX0gY2xhc3NOYW1lPVwiYnRuLXZpZXctaG9zcGl0YWwgYnRuLXNob3ctbW9yZVwiPlNob3cgTW9yZTwvYT5cdFxuXHRcdCAgICAgICAgICAgICAgICAgICAgXHRcdDonJ1xuXHRcdFx0ICAgICAgICAgICAgICAgICAgICB9XG5cdFx0ICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHQgICAgICAgICAgICAgICAgICAgIDonJ1xuXHQgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLXNlYXJjaC1kaXYgYnRuLWFwcGx5LWRpdlwiPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzc05hbWU9XCJidG4tc2VhcmNoXCIgb25DbGljaz17dGhpcy5hcHBseUZpbHRlcnMuYmluZCh0aGlzKX0+QXBwbHk8L2E+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgOicnXG5cdFx0ICAgICAgICB9XG5cdFx0ICAgIDwvZGl2PlxuXHRcdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0aWNreUZpbHRlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFJhbmdlIGZyb20gJ3JjLXNsaWRlci9saWIvUmFuZ2UnO1xuaW1wb3J0IHsgQ29weVRvQ2xpcGJvYXJkIH0gZnJvbSAncmVhY3QtY29weS10by1jbGlwYm9hcmQnO1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5pbXBvcnQgTG9jYXRpb25FbGVtZW50cyBmcm9tICcuLi8uLi9jb250YWluZXJzL2NvbW1vbnMvbG9jYXRpb25FbGVtZW50cydcbmltcG9ydCBMb2NhdGlvblBvcHVwIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvY29tbW9ucy9sb2NhdGlvblBvcHVwJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi9oZWxwZXJzL2d0bSdcblxuY2xhc3MgVG9wQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNob3J0VVJMOiBcIlwiLFxuICAgICAgICAgICAgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlLFxuICAgICAgICAgICAgb3ZlcmxheVZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1BvcHVwQ29udGFpbmVyOiB0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi5wcm9wcy5maWx0ZXJDcml0ZXJpYSB9KVxuICAgICAgICBpZiAocHJvcHMubG9jYXRpb25UeXBlICYmICFwcm9wcy5sb2NhdGlvblR5cGUuaW5jbHVkZXMoXCJnZW9cIikpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9jYXRpb25Qb3B1cDogZmFsc2UgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICgocHJvcHMuc2VvRGF0YSAmJiBwcm9wcy5zZW9EYXRhLmxvY2F0aW9uKSB8fCBwcm9wcy5zZW9GcmllbmRseSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9jYXRpb25Qb3B1cDogZmFsc2UgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLnNlbGVjdGVkTG9jYXRpb24gIT0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9jYXRpb25Qb3B1cDogdHJ1ZSwgb3ZlcmxheVZpc2libGU6IHRydWUgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMucHJvcHMuZmlsdGVyQ3JpdGVyaWEgfSlcbiAgICAgICAgLy8gdGhpcy5zaG9ydGVuVXJsKClcbiAgICAgICAgaWYgKCh0aGlzLnByb3BzLnNlb0RhdGEgJiYgdGhpcy5wcm9wcy5zZW9EYXRhLmxvY2F0aW9uKSB8fCB0aGlzLnByb3BzLnNlb0ZyaWVuZGx5KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2NhdGlvblR5cGUgJiYgdGhpcy5wcm9wcy5sb2NhdGlvblR5cGUuaW5jbHVkZXMoXCJnZW9cIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xvY2F0aW9uUG9wdXA6IHRydWUsIG92ZXJsYXlWaXNpYmxlOiB0cnVlIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVJbnB1dChlKSB7XG4gICAgICAgIGxldCBldk5hbWUgPSBlLnRhcmdldC5uYW1lXG4gICAgICAgIGxldCBjaGVja2VkID0gZS50YXJnZXQuY2hlY2tlZFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIFtldk5hbWVdOiBjaGVja2VkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgZ2V0Q3JpdGVyaWFTdHJpbmcoc2VsZWN0ZWRDcml0ZXJpYXMpIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkQ3JpdGVyaWFzICYmIHNlbGVjdGVkQ3JpdGVyaWFzLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkUHJvY2VkdXJlQ2F0ZWdvcnkgPSBzZWxlY3RlZENyaXRlcmlhcy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gJ3Byb2NlZHVyZXNfY2F0ZWdvcnknKVxuICAgICAgICAgICAgbGV0IHByb2NlZHVyZXMgPSBzZWxlY3RlZENyaXRlcmlhcy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gJ3Byb2NlZHVyZXMnKVxuXG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWRDcml0ZXJpYXMucmVkdWNlKChmaW5hbCwgY3VyciwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZmluYWwgKz0gJywgJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbCArPSBgJHtjdXJyLm5hbWU/Y3Vyci5uYW1lOicnfWBcbiAgICAgICAgICAgICAgICByZXR1cm4gZmluYWxcbiAgICAgICAgICAgIH0sIFwiXCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG9ydGVuVXJsKCkge1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYgKyAnJmZvcmNlX2xvY2F0aW9uPXRydWUnXG4gICAgICAgICAgICB0aGlzLnByb3BzLnVybFNob3J0bmVyKHVybCwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG9ydFVSTDogZGF0YS50aW55X3VybCB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvdmVybGF5Q2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvdmVybGF5VmlzaWJsZTogZmFsc2UsIHNlYXJjaENpdGllczogW10gfSk7XG4gICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvbl9lbGVtZW50Jykpe1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uX2VsZW1lbnQnKS5zdHlsZS56SW5kZXggPScwJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGlkZUxvY2F0aW9uUG9wdXAoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9jYXRpb25Qb3B1cDogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgcG9wdXBDb250YWluZXIoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93UG9wdXBDb250YWluZXI6IGZhbHNlLCBzaG93TG9jYXRpb25Qb3B1cDogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgZ29Ub0xvY2F0aW9uKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlYXJjaENpdGllczogW11cbiAgICAgICAgfSlcbiAgICAgICAgbGV0IHJlZGlyZWN0X3RvID0gXCJcIlxuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCdzcHRjaXQnKSB8fCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJ3NwdGxpdGNpdCcpKSB7XG4gICAgICAgICAgICByZWRpcmVjdF90byA9IFwiL29wZC9zZWFyY2hyZXN1bHRzXCJcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsb2NhdGlvbl91cmwgPSAnL2xvY2F0aW9uc2VhcmNoJ1xuICAgICAgICBpZiAocmVkaXJlY3RfdG8pIHtcbiAgICAgICAgICAgIGxvY2F0aW9uX3VybCArPSBgP3JlZGlyZWN0X3RvPSR7cmVkaXJlY3RfdG99YFxuICAgICAgICB9XG4gICAgICAgIC8vdGhpcy5wcm9wcy5zZXROZXh0U2VhcmNoQ3JpdGVyaWEoKVxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDaGFuZ2VMb2NhdGlvbklwZFJlc3VsdHNQb3BVcCcsICdBY3Rpb24nOiAnY2hhbmdlLWxvY2F0aW9uLWRvY3Rvci1yZXN1bHRzLVBvcFVwJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2hhbmdlLWxvY2F0aW9uLWRvY3Rvci1yZXN1bHRzLVBvcFVwJywgJ3VybCc6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGxvY2F0aW9uX3VybClcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgbGV0IGNyaXRlcmlhU3RyID0gdGhpcy5nZXRDcml0ZXJpYVN0cmluZyh0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzKVxuICAgICAgICBsZXQgbG9jYXRpb25OYW1lID0gXCJcIlxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5mb3JtYXR0ZWRfYWRkcmVzcykge1xuICAgICAgICAgICAgbG9jYXRpb25OYW1lID0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLmZvcm1hdHRlZF9hZGRyZXNzXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VvRGF0YSAmJiB0aGlzLnByb3BzLnNlb0RhdGEubG9jYXRpb24pIHtcbiAgICAgICAgICAgIGxvY2F0aW9uTmFtZSA9IHRoaXMucHJvcHMuc2VvRGF0YS5sb2NhdGlvblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIiBpZD1cImZpbHRlci1zY3JvbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItcGRuZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbi1maWx0ZXIgZC1ub25lIGQtbWQtYmxvY2sgYWxpZ25TaGFyZUJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImlubGluZS1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtbm9uZSBkLW1kLWlubGluZS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXt0aGlzLnNob3J0ZW5VcmwuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3VybC1zaG9ydC5zdmdcIn0gc3R5bGU9e3sgd2lkdGg6IDgwIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG9ydFVSTCA/IDxkaXYgY2xhc3NOYW1lPVwic2hhcmVMaW5rcG9wdXBPdmVybGF5XCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3J0VVJMOiBcIlwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFyZUxpbmtwb3B1cFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUuc2hvcnRVUkx9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmQgdGV4dD17dGhpcy5zdGF0ZS5zaG9ydFVSTH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiU2hvcnRlbmVkIFVSTCBDb3BpZWQuXCIgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvcnRVUkw6IFwiXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNocmVsaW5rQnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPkNvcHk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmhvc3BpdGFsX3NlYXJjaF9yZXN1bHRzICYmIHRoaXMucHJvcHMuaG9zcGl0YWxfc2VhcmNoX3Jlc3VsdHMuY291bnQ/dGhpcy5wcm9wcy5ob3NwaXRhbF9zZWFyY2hfcmVzdWx0cy5jb3VudDogJ05vJ30gcmVzdWx0cyBmb3VuZCB7Y3JpdGVyaWFTdHIgPyBcImZvciBCZXN0IFwiIDogXCJmb3IgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdC1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnctNzAwXCI+IHtgJHtjcml0ZXJpYVN0cj9jcml0ZXJpYVN0cjonJ30gSG9zcGl0YWxzYH0gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlYXJjaC1yZXN1bHQtc3BhblwiIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdvVG9Mb2NhdGlvbi5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93TG9jYXRpb25Qb3B1cCAmJiBmYWxzZSA/ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBsb2NhdGlvbk5hbWUgPyA8c3BhbiBjbGFzc05hbWU9XCJsb2NhdGlvbi1lZGl0XCIgc3R5bGU9e3sgY29sb3I6ICcjZjY4NDNhJywgY3Vyc29yOiAncG9pbnRlcicgfX0+e2AgaW4gJHtsb2NhdGlvbk5hbWV9YH08L3NwYW4+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAxNSwgaGVpZ2h0OiAxNSwgbWFyZ2luTGVmdDogNywgY3Vyc29yOiAncG9pbnRlcicgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZWRpdC5zdmdcIn0gb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nb1RvTG9jYXRpb24uYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0xvY2F0aW9uUG9wdXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xpbmljX2NhcmQgJiYgdGhpcy5zdGF0ZS5zaG93UG9wdXBDb250YWluZXIgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYXRpb25Qb3B1cCB7Li4udGhpcy5wcm9wc30gb25SZWY9e3JlZiA9PiAodGhpcy5jaGlsZCA9IHJlZil9IHJlc3VsdFR5cGU9J2xpc3QnIGlzVG9wYmFyPXt0cnVlfSBoaWRlTG9jYXRpb25Qb3B1cD17KCkgPT4gdGhpcy5oaWRlTG9jYXRpb25Qb3B1cCgpfSBsb2NhdGlvbk5hbWU9e2xvY2F0aW9uTmFtZX0gY3JpdGVyaWFTdHJpbmc9e2NyaXRlcmlhU3RyfSBwb3B1cENvbnRhaW5lcj17KCkgPT4gdGhpcy5wb3B1cENvbnRhaW5lcigpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxMb2NhdGlvbkVsZW1lbnRzIHsuLi50aGlzLnByb3BzfSBvblJlZj17cmVmID0+ICh0aGlzLmNoaWxkID0gcmVmKX0gcmVzdWx0VHlwZT0nbGlzdCcgaXNUb3BiYXI9e3RydWV9IGhpZGVMb2NhdGlvblBvcHVwPXsoKSA9PiB0aGlzLmhpZGVMb2NhdGlvblBvcHVwKCl9IGxvY2F0aW9uTmFtZT17bG9jYXRpb25OYW1lfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0xvY2F0aW9uUG9wdXAgJiYgdGhpcy5zdGF0ZS5vdmVybGF5VmlzaWJsZSAmJiAhdGhpcy5wcm9wcy5jbGluaWNfY2FyZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2NhdGlvblBvcHVwLW92ZXJsYXlcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLm92ZXJsYXlDbGljaygpfSA+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93TG9jYXRpb25Qb3B1cCAmJiB0aGlzLnByb3BzLmNsaW5pY19jYXJkICYmIHRoaXMuc3RhdGUuc2hvd1BvcHVwQ29udGFpbmVyID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwQ29udGFpbmVyLW92ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBUb3BCYXJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBzZWxlY3RMb2NhdGlvbiB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgTG9jYXRpb25Qb3B1cFZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL2xvY2F0aW9uUG9wdXAvaW5kZXguanMnXG5cbmNsYXNzIExvY2F0aW9uUG9wdXBDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJvdXRlcjogKCkgPT4gbnVsbFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExvY2F0aW9uUG9wdXBWaWV3IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBzZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICBsb2NhdGlvblR5cGVcbiAgICB9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX09QRFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgbG9jYXRpb25UeXBlXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RMb2NhdGlvbjogKGxvY2F0aW9uLCB0eXBlKSA9PiBkaXNwYXRjaChzZWxlY3RMb2NhdGlvbihsb2NhdGlvbiwgdHlwZSkpXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKExvY2F0aW9uUG9wdXBDb250YWluZXIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgZ2V0SXBkSW5mbywgZ2V0SXBkSG9zcGl0YWxzLCBtZXJnZUlwZENyaXRlcmlhLCB1cmxTaG9ydG5lciwgc2V0SXBkU2VhcmNoSWQsIGdldElwZFNlYXJjaElkUmVzdWx0cyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgSXBkSG9zcGl0YWxTZWFyY2hWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaXBkL0lwZEhvc3BpdGFsU2VhcmNoVmlldy5qcydcbmltcG9ydCB7IEhvc3BpdGFsU2VhcmNoU3RhdGVCdWlsZGVyIH0gZnJvbSAnLi4vLi4vaGVscGVycy91cmx0b1N0YXRlJ1xuXG5cbmNsYXNzIElwZEhvc3BpdGFscyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0c3RhdGljIGxvYWREYXRhKHN0b3JlLCBtYXRjaCwgcXVlcnlQYXJhbXMgPSB7fSl7XG5cblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PiB7XG5cblx0XHRcdHRyeXtcblxuXHRcdFx0XHRsZXQgbG9jYXRpb25fbXMgPSBudWxsXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoLnVybC5pbmNsdWRlcygnbG9jYXRpb249JykpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25fbXMgPSBtYXRjaC51cmwuc3BsaXQoJ2xvY2F0aW9uPScpWzFdXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uX21zID0gcGFyc2VJbnQobG9jYXRpb25fbXMpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEhvc3BpdGFsU2VhcmNoU3RhdGVCdWlsZGVyKG51bGwsIHF1ZXJ5UGFyYW1zLCB0cnVlLCBsb2NhdGlvbl9tcykudGhlbigoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBcdHN0b3JlLmRpc3BhdGNoKG1lcmdlSXBkQ3JpdGVyaWEoc3RhdGUpKVxuXG4gICAgICAgICAgICAgICAgXHRsZXQgc2VhcmNoVXJsID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2gudXJsLmluY2x1ZGVzKCctaXBkaHAnKSB8fCBtYXRjaC51cmwuaW5jbHVkZXMoJy1oc3BjaXQnKSB8fCBtYXRjaC51cmwuaW5jbHVkZXMoJy1oc3BsaXRjaXQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoVXJsID0gbWF0Y2gudXJsLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYWdlID0gMVxuICAgICAgICAgICAgICAgICAgICBpZiAocXVlcnlQYXJhbXMucGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZSA9IHBhcnNlSW50KHF1ZXJ5UGFyYW1zLnBhZ2UpXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIFx0cmV0dXJuIHN0b3JlLmRpc3BhdGNoKGdldElwZEhvc3BpdGFscyhzdGF0ZSwgcGFnZSwgdHJ1ZSwgc2VhcmNoVXJsLCAobG9hZE1vcmUsIHJlc3VsdEZvdW5kKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBcdFx0aWYoIXJlc3VsdEZvdW5kKXtcbiAgICAgICAgICAgICAgICBcdFx0XHRyZXNvbHZlKHsgc3RhdHVzOiA0MDR9KVxuICAgICAgICAgICAgICAgIFx0XHR9ZWxzZXtcbiAgICAgICAgICAgICAgICBcdFx0XHRyZXNvbHZlKHt9KVxuICAgICAgICAgICAgICAgIFx0XHR9XG4gICAgICAgICAgICAgICAgXHR9KSlcblxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKT0+e1xuICAgICAgICAgICAgICAgIFx0cmVqZWN0KClcbiAgICAgICAgICAgICAgICB9KVxuXHRcdFx0fVxuXHRcdFx0Y2F0Y2ggKGUpIHtcblx0XHRcdFx0cmVqZWN0KClcblx0XHRcdH1cblx0XHR9KVxuXHRcdFxuXHR9XG5cblx0c3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgcm91dGVyOiAoKSA9PiBudWxsXG4gICAgfVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0aWYod2luZG93KXtcblx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLDApXG5cdFx0fVxuXHR9XG5cdHJlbmRlcigpe1xuXG5cdFx0cmV0dXJuKFxuXHRcdFx0XHQ8SXBkSG9zcGl0YWxTZWFyY2hWaWV3IHsuLi50aGlzLnByb3BzfSAvPlxuXHRcdFx0KVxuXHR9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuXHRcblx0Y29uc3Qge1xuICAgICAgICBzZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICBsb2NhdGlvblR5cGVcbiAgICB9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX09QRFxuXG5cdGNvbnN0IHtcblx0XHRmaWx0ZXJDcml0ZXJpYSxcblx0XHRwcm92aWRlcl9pZHMsXG5cdFx0aG9zcGl0YWxfbGlzdCxcblx0XHRob3NwaXRhbF9zZWFyY2hfcmVzdWx0cyxcblx0XHRIT1NQSVRBTF9EQVRBLFxuXHRcdG5leHRGaWx0ZXJDcml0ZXJpYSxcblx0XHRwYWdlLFxuXHRcdHNlYXJjaF9pZF9kYXRhLFxuXHRcdGNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLFxuXHRcdG5leHRTZWxlY3RlZENyaXRlcmlhcyxcblx0XHRmZXRjaE5ld1Jlc3VsdHMsXG5cdFx0Z2V0TmV3UmVzdWx0cyxcblx0XHRsb2NhdGlvbkZldGNoZWQsXG5cdFx0aG9zcGl0YWxTZWFyY2hTZW9EYXRhLFxuXHRcdGhvc3BpdGFsQ2Fub25pY2FsVXJsLFxuXHRcdGhvc3BpdGFsQnJlYWRjcnVtYixcblx0XHRob3NwaXRhbF9zZWFyY2hfY29udGVudCxcblx0XHRob3NwaXRhbF9ib3R0b21fY29udGVudCxcblx0XHRIT1NQSVRBTF9TRUFSQ0hfREFUQV9MT0FERURcblx0fSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9JUERcblxuXHRyZXR1cm4ge1xuXHRcdHNlbGVjdGVkTG9jYXRpb24sXG5cdFx0bG9jYXRpb25UeXBlLFxuXHRcdGZpbHRlckNyaXRlcmlhLFxuXHRcdHByb3ZpZGVyX2lkcyxcblx0XHRob3NwaXRhbF9saXN0LFxuXHRcdGhvc3BpdGFsX3NlYXJjaF9yZXN1bHRzLFxuXHRcdEhPU1BJVEFMX0RBVEEsXG5cdFx0bmV4dEZpbHRlckNyaXRlcmlhLFxuXHRcdHBhZ2UsXG5cdFx0c2VhcmNoX2lkX2RhdGEsXG5cdFx0Y29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMsXG5cdFx0bmV4dFNlbGVjdGVkQ3JpdGVyaWFzLFxuXHRcdGZldGNoTmV3UmVzdWx0cyxcblx0XHRnZXROZXdSZXN1bHRzLFxuXHRcdGxvY2F0aW9uRmV0Y2hlZCxcblx0XHRob3NwaXRhbFNlYXJjaFNlb0RhdGEsXG5cdFx0aG9zcGl0YWxDYW5vbmljYWxVcmwsXG5cdFx0aG9zcGl0YWxCcmVhZGNydW1iLFxuXHRcdGhvc3BpdGFsX3NlYXJjaF9jb250ZW50LFxuXHRcdGhvc3BpdGFsX2JvdHRvbV9jb250ZW50LFxuXHRcdEhPU1BJVEFMX1NFQVJDSF9EQVRBX0xPQURFRFxuXHR9XG59XG5cbmNvbnN0IG1hcERpc3B0YWNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuXG5cdHJldHVybntcblx0XHRnZXRJcGRIb3NwaXRhbHM6IChzdGF0ZSwgcGFnZSwgZnJvbVNlcnZlciwgc2VhcmNoQnlVcmwsIGNiKT0+IGRpc3BhdGNoKGdldElwZEhvc3BpdGFscyhzdGF0ZSwgcGFnZSwgZnJvbVNlcnZlciwgc2VhcmNoQnlVcmwsIGNiKSksXG5cdFx0bWVyZ2VJcGRDcml0ZXJpYTogKGZpbHRlckNyaXRlcmlhKT0+IGRpc3BhdGNoKG1lcmdlSXBkQ3JpdGVyaWEoZmlsdGVyQ3JpdGVyaWEpKSxcblx0XHR1cmxTaG9ydG5lcjogKHVybCwgY2IpID0+IGRpc3BhdGNoKHVybFNob3J0bmVyKHVybCwgY2IpKSxcblx0XHRzZXRJcGRTZWFyY2hJZDogKHNlYXJjaF9pZCwgZmlsdGVycywgcGFnZSkgPT4gZGlzcGF0Y2goc2V0SXBkU2VhcmNoSWQoc2VhcmNoX2lkLCBmaWx0ZXJzLCBwYWdlKSksXG5cdFx0Z2V0SXBkU2VhcmNoSWRSZXN1bHRzOiAoc2VhcmNoX2lkLCBkYXRhKSA9PiBkaXNwYXRjaChnZXRJcGRTZWFyY2hJZFJlc3VsdHMoc2VhcmNoX2lkLCBkYXRhKSlcblx0fVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3B0YWNoVG9Qcm9wcykoSXBkSG9zcGl0YWxzKSJdLCJzb3VyY2VSb290IjoiIn0=