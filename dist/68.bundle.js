(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[68],{

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loader = function (_React$Component) {
    _inherits(Loader, _React$Component);

    function Loader(props) {
        _classCallCheck(this, Loader);

        return _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).call(this, props));
    }

    _createClass(Loader, [{
        key: "render",
        value: function render() {

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
    }]);

    return Loader;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _HospitalCard = __webpack_require__(/*! ./HospitalCard.js */ "./dev/js/components/ipd/HospitalCard.js");

var _HospitalCard2 = _interopRequireDefault(_HospitalCard);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _reactInfiniteScroller = __webpack_require__(/*! react-infinite-scroller */ "./node_modules/react-infinite-scroller/index.js");

var _reactInfiniteScroller2 = _interopRequireDefault(_reactInfiniteScroller);

var _Loader = __webpack_require__(/*! ../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var IpdHospitalListView = function (_React$Component) {
  _inherits(IpdHospitalListView, _React$Component);

  function IpdHospitalListView(props) {
    _classCallCheck(this, IpdHospitalListView);

    var _this = _possibleConstructorReturn(this, (IpdHospitalListView.__proto__ || Object.getPrototypeOf(IpdHospitalListView)).call(this, props));

    var parsed = queryString.parse(_this.props.location.search);
    _this.state = {
      toggleFilterPopup: false,
      health_insurance_provider: [],
      hasMore: true,
      loading: false,
      page: parsed && parsed.page ? parseInt(parsed.page) || 1 : 1,
      readMore: 'search-details-data-less'
    };
    return _this;
  }

  _createClass(IpdHospitalListView, [{
    key: 'toggleProviderFilter',
    value: function toggleProviderFilter() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];


      this.setState({ toggleFilterPopup: !this.state.toggleFilterPopup, health_insurance_provider: data });
    }
  }, {
    key: 'getCostEstimateClicked',
    value: function getCostEstimateClicked(hospitalId) {

      var ipd_id = this.props.commonSelectedCriterias && this.props.commonSelectedCriterias.length ? this.props.commonSelectedCriterias[0].id : '';

      var gtmData = {
        'Category': 'ConsumerApp', 'Action': 'IpdGetCostEstimateClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-get-cost-estimate-clicked', selectedId: ipd_id || '', hospitalId: hospitalId || ''
      };
      _gtm2.default.sendEvent({ data: gtmData });

      if (ipd_id) {
        this.props.history.push('/ipd/' + ipd_id + '/getPriceEstimate?hospital_id=' + hospitalId);
      } else {
        this.props.history.push('/ipd/price/getPriceEstimate?hospital_id=' + hospitalId);
      }
    }
  }, {
    key: 'getHospitalDetailPage',
    value: function getHospitalDetailPage(hospitalId) {
      var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var gtmData = {
        'Category': 'ConsumerApp', 'Action': 'HospitalDetailClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'hospital-detail-clicked', 'selectedId': hospitalId || ''
      };
      _gtm2.default.sendEvent({ data: gtmData });

      if (url) {
        this.props.history.push('/' + url);
      } else {
        this.props.history.push('/ipd/hospital/' + hospitalId);
      }
    }
  }, {
    key: 'loadMore',
    value: function loadMore(page) {
      var _this2 = this;

      this.setState({ hasMore: false, loading: true });
      this.props.getIpdHospitalList(null, page, function (hasMore) {
        _this2.setState({ loading: false });
        setTimeout(function () {
          _this2.setState({ hasMore: hasMore });
        }, 1000);
      });
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
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          hospital_list = _props.hospital_list,
          HOSPITAL_DATA = _props.HOSPITAL_DATA;

      var ipd_id = this.props.commonSelectedCriterias && this.props.commonSelectedCriterias.length ? this.props.commonSelectedCriterias[0].id : null;

      return _react2.default.createElement(
        'div',
        null,
        this.props.hospital_search_content && this.props.hospital_search_content != '' && parseInt(this.props.page) == 1 ? _react2.default.createElement(
          'div',
          { className: 'search-result-card-collpase' },
          _react2.default.createElement('div', { className: this.state.readMore, dangerouslySetInnerHTML: { __html: this.props.hospital_search_content } }),
          this.state.readMore && this.state.readMore != '' ? _react2.default.createElement(
            'span',
            { className: 'rd-more', onClick: function onClick() {
                return _this3.setState({ readMore: '' });
              } },
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
            hospital_list.map(function (hospitalId, i) {
              if (HOSPITAL_DATA[hospitalId]) {
                return _react2.default.createElement(_HospitalCard2.default, _extends({ key: i, data: HOSPITAL_DATA[hospitalId], getCostEstimateClicked: _this3.getCostEstimateClicked.bind(_this3), getHospitalDetailPage: _this3.getHospitalDetailPage.bind(_this3), toggleProviderFilter: _this3.toggleProviderFilter.bind(_this3), noIpd: ipd_id ? false : true }, _this3.props));
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
                this.state.health_insurance_provider.map(function (provider, i) {

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
  }]);

  return IpdHospitalListView;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var IpdHospitalView = function (_React$Component) {
    _inherits(IpdHospitalView, _React$Component);

    function IpdHospitalView(props) {
        _classCallCheck(this, IpdHospitalView);

        var _this = _possibleConstructorReturn(this, (IpdHospitalView.__proto__ || Object.getPrototypeOf(IpdHospitalView)).call(this, props));

        _this.state = {
            search_id: '',
            setSearchId: false,
            seoFriendly: _this.props.match.url.includes('-ipdhp') || _this.props.match.url.includes('-hspcit') || _this.props.match.url.includes('-hsplitcit')

        };
        return _this;
    }

    _createClass(IpdHospitalView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var ipd_id = '';
            if (this.props.commonSelectedCriterias && this.props.commonSelectedCriterias.length) {
                ipd_id = this.props.commonSelectedCriterias.map(function (x) {
                    return x.id;
                })[0];
            }

            var gtmData = {
                'Category': 'ConsumerApp', 'Action': 'IpdHospitalSearchPageLanded', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-hospital-search-page-landed', selectedId: ipd_id
            };
            _gtm2.default.sendEvent({ data: gtmData });

            var parsed = queryString.parse(this.props.location.search);
            // if (this.props.mergeUrlState) {
            var getSearchId = true;
            if (this.props.location.search.includes('search_id')) {
                //if search id exist in url then we get data for that search id from store
                if (this.props.search_id_data && this.props.search_id_data[parsed.search_id] && this.props.search_id_data[parsed.search_id].data && Object.values(this.props.search_id_data[parsed.search_id].data).length) {

                    getSearchId = false;
                    if (this.props.search_id_data[parsed.search_id].data.result && this.props.search_id_data[parsed.search_id].data.result.length && !this.props.getNewResults && !this.props.fetchNewResults) {

                        this.setState({ search_id: parsed.search_id }, function () {
                            _this2.props.getIpdSearchIdResults(parsed.search_id, _this2.props.search_id_data[parsed.search_id]);
                        });
                    } else {
                        var filterCriteria = {};

                        var _buildUrlState = this.buildUrlState(this.props.search_id_data[parsed.search_id].commonSelectedCriterias, this.props.search_id_data[parsed.search_id].filterCriteria),
                            criteria = _buildUrlState.criteria,
                            filters = _buildUrlState.filters;

                        filterCriteria.commonSelectedCriterias = criteria;
                        filterCriteria.filterCriteria = filters;
                        this.setState({ search_id: parsed.search_id }, function () {
                            var page = 1;
                            page = parsed.page || 1;

                            _this2.props.setIpdSearchId(parsed.search_id, filterCriteria, page);
                        });
                    }
                }
            }

            if (getSearchId) {
                //If no searchId in url then we create search id and store data corresponding to that search id
                var _filterCriteria = {};

                var _buildUrlState2 = this.buildUrlState(this.props.nextSelectedCriterias, this.props.nextFilterCriteria),
                    _criteria = _buildUrlState2.criteria,
                    _filters = _buildUrlState2.filters;

                _filterCriteria.commonSelectedCriterias = _criteria;
                _filterCriteria.filterCriteria = _filters;
                var search_id = this.generateSearchId();
                if (window) {
                    window.scrollTo(0, 0);
                }
                this.props.mergeIpdCriteria({ fetchNewResults: false });
                this.setState({ search_id: search_id }, function () {
                    var new_url = _this2.buildURI(_this2.props);
                    _this2.props.history.replace(new_url);
                    _this2.props.setIpdSearchId(search_id, _filterCriteria, parsed.page || 1);
                });
            }
        }
    }, {
        key: 'buildUrlState',
        value: function buildUrlState(selectedCriteria, filterCriteria) {
            var parsed = queryString.parse(this.props.location.search);
            var criteria = [];
            var filters = {
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
                var providers = [];
                parsed.provider_ids.split(',').map(function (x) {
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

            return { criteria: criteria, filters: filters };
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this3 = this;

            var parsed = queryString.parse(nextProps.location.search);
            var search_id = '';
            if (parsed.search_id) {
                search_id = parsed.search_id;
            }
            if (nextProps.fetchNewResults && nextProps.fetchNewResults != this.props.fetchNewResults && this.state.search_id) {
                this.setState({ setSearchId: true }, function () {
                    _this3.getIpdHospitalList(nextProps);
                });
            } else if (nextProps.fetchNewResults && this.state.search_id && this.state.search_id == search_id && !this.state.setSearchId) {
                this.setState({ setSearchId: true }, function () {
                    _this3.getIpdHospitalList(nextProps);
                });
            } else if (nextProps.locationFetched != this.props.locationFetched) {
                //Whenever location changes make api calls
                this.getIpdHospitalList(nextProps);
            }
        }
    }, {
        key: 'getIpdHospitalList',
        value: function getIpdHospitalList(state) {
            var _this4 = this;

            var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            //apply filters and get updated data
            var parsed = queryString.parse(this.props.location.search);

            if (!state) {
                state = this.props;
            }

            if (!page && parsed.page) {
                page = parsed.page || 1;
            } else {
                page = page || 1;
            }

            var searchUrl = null;
            if (state.match.url.includes('-ipdhp') || state.match.url.includes('-hspcit') || state.match.url.includes('-hsplitcit')) {
                searchUrl = state.match.url.toLowerCase();
            }

            this.props.getIpdHospitals(state, page, false, searchUrl, function () {

                if (cb) cb.apply(undefined, arguments);
                var new_url = _this4.buildURI(state);
                _this4.props.history.replace(new_url);
            });
        }
    }, {
        key: 'buildURI',
        value: function buildURI(state) {
            //keep on updating url with the updated filters 
            var parsed = queryString.parse(this.props.location.search);

            var selectedLocation = state.selectedLocation,
                commonSelectedCriterias = state.commonSelectedCriterias,
                filterCriteria = state.filterCriteria,
                locationType = state.locationType;


            var page = 1;
            var ipd_id = commonSelectedCriterias.map(function (x) {
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

            var min_distance = filterCriteria.distance[0];
            var max_distance = filterCriteria.distance[1];
            var provider_ids = filterCriteria.provider_ids;
            var network_id = filterCriteria.network_id;

            var url = '';

            //Check if any filter applied 
            var is_filter_applied = false;
            var is_params_exist = false;

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

                url = window.location.pathname + '?ipd_id=' + ipd_id + '&min_distance=' + min_distance + '&max_distance=' + max_distance + '&provider_ids=' + provider_ids + '&search_id=' + this.state.search_id + '&lat=' + lat + '&long=' + long + '&place_id=' + place_id + '&network_id=' + network_id;

                is_params_exist = true;
            } else if (this.state.seoFriendly) {

                url = '' + window.location.pathname;
            }

            if (parsed.page) {
                url += (is_params_exist ? '&' : '?') + 'page=' + parsed.page;
                is_params_exist = true;
            }

            if (parsed.utm_source) {
                url += (is_params_exist ? '&' : '?') + 'utm_source=' + (parsed.utm_source || '');
                is_params_exist = true;
            }

            if (parsed.utm_medium) {
                url += (is_params_exist ? '&' : '?') + 'utm_medium=' + (parsed.utm_medium || '');
                is_params_exist = true;
            }

            if (parsed.utm_campaign) {
                url += (is_params_exist ? '&' : '?') + 'utm_campaign=' + (parsed.utm_campaign || '');
                is_params_exist = true;
            }

            return url;
        }
    }, {
        key: 'generateSearchId',
        value: function generateSearchId(uid_string) {
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
    }, {
        key: 'getMoreResults',
        value: function getMoreResults() {
            this.getIpdHospitalList(this.props);
        }
    }, {
        key: 'getMetaTagsData',
        value: function getMetaTagsData(seoData) {
            var title = "Hospital Search";
            if (this.state.seoFriendly) {
                title = "";
            }
            var description = "";
            if (seoData) {
                title = seoData.title ? seoData.title : title;
                description = seoData.description || "";
            }
            return { title: title, description: description };
        }
    }, {
        key: 'render',
        value: function render() {
            var hospital_list = this.props.hospital_list;

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
            var count = this.props.hospital_search_results && this.props.hospital_search_results.count ? parseInt(this.props.hospital_search_results.count) : 0;

            if (count > curr_page * 20) {
                next = url + ('?page=' + (curr_page + 1));
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
                        canonicalUrl: '' + _config2.default.API_BASE_URL + this.props.match.url + page,
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
    }]);

    return IpdHospitalView;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _result_count = __webpack_require__(/*! ./result_count.js */ "./dev/js/components/ipd/result_count.js");

var _result_count2 = _interopRequireDefault(_result_count);

var _Range = __webpack_require__(/*! rc-slider/lib/Range */ "./node_modules/rc-slider/lib/Range.js");

var _Range2 = _interopRequireDefault(_Range);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var StickyFilter = function (_React$Component) {
	_inherits(StickyFilter, _React$Component);

	function StickyFilter(props) {
		_classCallCheck(this, StickyFilter);

		var _this = _possibleConstructorReturn(this, (StickyFilter.__proto__ || Object.getPrototypeOf(StickyFilter)).call(this, props));

		_this.state = {
			toggleFilterPopup: false,
			lastSelectedProviderIds: [],
			lastSelectedDistance: [0, 25],
			provider_ids: [],
			distance: [0, 25]
		};
		return _this;
	}

	_createClass(StickyFilter, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.setState({ provider_ids: nextProps.filterCriteria.provider_ids, lastSelectedProviderIds: nextProps.filterCriteria.provider_ids, distance: nextProps.filterCriteria.distance, lastSelectedDistance: nextProps.filterCriteria.distance });
		}
	}, {
		key: 'applyFilters',
		value: function applyFilters() {
			var _this2 = this;

			var parsed = queryString.parse(this.props.location.search);
			var filterCriteria = {
				distance: this.state.distance,
				provider_ids: this.state.provider_ids
			};

			var gtmData = {
				'Category': 'ConsumerApp', 'Action': 'IpdHospitalSearchFilterApplied', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-hospital-search-filter-applied', 'minDistance': this.state.distance[0], 'maxDistance': this.state.distance[1], 'provider_ids': this.state.provider_ids.join(',')
			};

			_gtm2.default.sendEvent({ data: gtmData });

			this.setState({ lastSelectedProviderIds: this.state.provider_ids, lastSelectedDistance: this.state.distance });
			var search_id_data = Object.assign({}, this.props.search_id_data);

			if (this.props.search_id_data && this.props.search_id_data[parsed.search_id]) {
				search_id_data[parsed.search_id].filterCriteria = filterCriteria;
				search_id_data[parsed.search_id].page = 1;
			}

			this.props.mergeIpdCriteria({
				filterCriteria: filterCriteria, search_id_data: search_id_data, page: 1
			});
			setTimeout(function () {
				_this2.props.fetchNewResults();
				_this2.setState({ toggleFilterPopup: false });
			}, 100);
		}
	}, {
		key: 'toggleProviderFilter',
		value: function toggleProviderFilter(id) {
			var provider_ids = [];
			var found = false;
			provider_ids = this.state.provider_ids.filter(function (x) {
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
	}, {
		key: 'closeFiltersPopUp',
		value: function closeFiltersPopUp() {
			this.setState({ toggleFilterPopup: false, provider_ids: this.state.lastSelectedProviderIds, distance: this.state.lastSelectedDistance });
		}
	}, {
		key: 'handleRange',
		value: function handleRange(type, range) {
			this.setState(_defineProperty({}, type, range));
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var seoData = this.props.hospitalSearchSeoData;
			var hospital_search_results = this.props.hospital_search_results;

			var health_insurance_provider = [];

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
								{ className: 'top-filter-tabs-select', onClick: function onClick() {
										var gtmData = {
											'Category': 'ConsumerApp', 'Action': 'IpdHospitalSearchFilterClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-hospital-search-filter-clicked'
										};
										_gtm2.default.sendEvent({ data: gtmData });

										_this3.setState({ toggleFilterPopup: true });
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
								health_insurance_provider.length ? health_insurance_provider.map(function (provider, i) {

									return _react2.default.createElement(
										'li',
										{ key: i },
										_react2.default.createElement(
											'label',
											{ className: 'ck-bx' },
											provider.name,
											_react2.default.createElement('input', { type: 'checkbox', value: 'on', checked: _this3.state.provider_ids.indexOf(provider.id) > -1 ? true : false, onChange: _this3.toggleProviderFilter.bind(_this3, provider.id) }),
											_react2.default.createElement('span', { className: 'checkmark' })
										)
									);
								}) : ''
							),
							health_insurance_provider.length > 4 && !this.state.showMoreProviders ? _react2.default.createElement(
								'a',
								{ href: 'javascript:void(0);', onClick: function onClick() {
										return _this3.setState({ toggleFilterPopup: true });
									}, className: 'btn-view-hospital btn-show-more' },
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
	}]);

	return StickyFilter;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Range = __webpack_require__(/*! rc-slider/lib/Range */ "./node_modules/rc-slider/lib/Range.js");

var _Range2 = _interopRequireDefault(_Range);

var _reactCopyToClipboard = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/react-copy-to-clipboard/lib/index.js");

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _locationElements = __webpack_require__(/*! ../../containers/commons/locationElements */ "./dev/js/containers/commons/locationElements.js");

var _locationElements2 = _interopRequireDefault(_locationElements);

var _locationPopup = __webpack_require__(/*! ../../containers/commons/locationPopup */ "./dev/js/containers/commons/locationPopup.js");

var _locationPopup2 = _interopRequireDefault(_locationPopup);

var _gtm = __webpack_require__(/*! ../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

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
            shortURL: "",
            showLocationPopup: false,
            overlayVisible: false,
            showPopupContainer: true
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
                if (props.seoData && props.seoData.location || props.seoFriendly) {
                    this.setState({ showLocationPopup: false });
                } else {
                    if (props.selectedLocation != this.props.selectedLocation) {
                        this.setState({ showLocationPopup: true, overlayVisible: true });
                    }
                }
            }
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
        key: 'handleInput',
        value: function handleInput(e) {
            var _this2 = this;

            var evName = e.target.name;
            var checked = e.target.checked;
            setTimeout(function () {
                _this2.setState(_defineProperty({}, evName, checked));
            });
        }
    }, {
        key: 'getCriteriaString',
        value: function getCriteriaString(selectedCriterias) {
            if (selectedCriterias && selectedCriterias.length) {
                var selectedProcedureCategory = selectedCriterias.filter(function (x) {
                    return x.type == 'procedures_category';
                });
                var procedures = selectedCriterias.filter(function (x) {
                    return x.type == 'procedures';
                });

                return selectedCriterias.reduce(function (final, curr, i) {
                    if (i != 0) {
                        final += ', ';
                    }
                    final += '' + (curr.name ? curr.name : '');
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
        key: 'goToLocation',
        value: function goToLocation() {
            this.setState({
                searchCities: []
            });
            var redirect_to = "";
            if (window.location.pathname.includes('sptcit') || window.location.pathname.includes('sptlitcit')) {
                redirect_to = "/opd/searchresults";
            }

            var location_url = '/locationsearch';
            if (redirect_to) {
                location_url += '?redirect_to=' + redirect_to;
            }
            //this.props.setNextSearchCriteria()
            var data = {
                'Category': 'ChangeLocationIpdResultsPopUp', 'Action': 'change-location-doctor-results-PopUp', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'change-location-doctor-results-PopUp', 'url': window.location.pathname
            };
            _gtm2.default.sendEvent({ data: data });
            this.props.history.push(location_url);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var criteriaStr = this.getCriteriaString(this.props.commonSelectedCriterias);
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
                                                    _this4.setState({ shortURL: "" });
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
                                                            _this4.setState({ shortURL: "" });
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
                                            (criteriaStr ? criteriaStr : '') + ' Hospitals',
                                            ' '
                                        ),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'search-result-span', onClick: this.goToLocation.bind(this) },
                                            this.state.showLocationPopup && false ? '' : locationName ? _react2.default.createElement(
                                                'span',
                                                { className: 'location-edit', style: { color: '#f6843a', cursor: 'pointer' } },
                                                ' in ' + locationName
                                            ) : ''
                                        )
                                    ),
                                    _react2.default.createElement('img', { style: { width: 15, height: 15, marginLeft: 7, cursor: 'pointer' }, src: "/assets" + "/img/customer-icons/edit.svg", onClick: this.goToLocation.bind(this) })
                                )
                            )
                        )
                    ),
                    this.state.showLocationPopup ? this.props.clinic_card && this.state.showPopupContainer ? _react2.default.createElement(_locationPopup2.default, _extends({}, this.props, { onRef: function onRef(ref) {
                            return _this4.child = ref;
                        }, resultType: 'list', isTopbar: true, hideLocationPopup: function hideLocationPopup() {
                            return _this4.hideLocationPopup();
                        }, locationName: locationName, criteriaString: criteriaStr, popupContainer: function popupContainer() {
                            return _this4.popupContainer();
                        } })) : _react2.default.createElement(_locationElements2.default, _extends({}, this.props, { onRef: function onRef(ref) {
                            return _this4.child = ref;
                        }, resultType: 'list', isTopbar: true, hideLocationPopup: function hideLocationPopup() {
                            return _this4.hideLocationPopup();
                        }, locationName: locationName })) : '',
                    this.state.showLocationPopup && this.state.overlayVisible && !this.props.clinic_card ? _react2.default.createElement('div', { className: 'locationPopup-overlay', onClick: function onClick() {
                            return _this4.overlayClick();
                        } }) : '',
                    this.state.showLocationPopup && this.props.clinic_card && this.state.showPopupContainer ? _react2.default.createElement('div', { className: 'popupContainer-overlay' }) : ''
                )
            );
        }
    }]);

    return TopBar;
}(_react2.default.Component);

exports.default = TopBar;

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _IpdHospitalSearchView = __webpack_require__(/*! ../../components/ipd/IpdHospitalSearchView.js */ "./dev/js/components/ipd/IpdHospitalSearchView.js");

var _IpdHospitalSearchView2 = _interopRequireDefault(_IpdHospitalSearchView);

var _urltoState = __webpack_require__(/*! ../../helpers/urltoState */ "./dev/js/helpers/urltoState.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IpdHospitals = function (_React$Component) {
	_inherits(IpdHospitals, _React$Component);

	function IpdHospitals() {
		_classCallCheck(this, IpdHospitals);

		return _possibleConstructorReturn(this, (IpdHospitals.__proto__ || Object.getPrototypeOf(IpdHospitals)).apply(this, arguments));
	}

	_createClass(IpdHospitals, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (window) {
				window.scrollTo(0, 0);
			}
		}
	}, {
		key: 'render',
		value: function render() {

			return _react2.default.createElement(_IpdHospitalSearchView2.default, this.props);
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
					(0, _urltoState.HospitalSearchStateBuilder)(null, queryParams, true, location_ms).then(function (state) {
						store.dispatch((0, _index.mergeIpdCriteria)(state));

						var searchUrl = null;
						if (match.url.includes('-ipdhp') || match.url.includes('-hspcit') || match.url.includes('-hsplitcit')) {
							searchUrl = match.url.toLowerCase();
						}

						var page = 1;
						if (queryParams.page) {
							page = parseInt(queryParams.page);
						}

						return store.dispatch((0, _index.getIpdHospitals)(state, page, true, searchUrl, function (loadMore, resultFound) {

							if (!resultFound) {
								resolve({ status: 404 });
							} else {
								resolve({});
							}
						}));
					}).catch(function (e) {
						reject();
					});
				} catch (e) {
					reject();
				}
			});
		}
	}]);

	return IpdHospitals;
}(_react2.default.Component);

IpdHospitals.contextTypes = {
	router: function router() {
		return null;
	}
};


var mapStateToProps = function mapStateToProps(state) {
	var _state$SEARCH_CRITERI = state.SEARCH_CRITERIA_OPD,
	    selectedLocation = _state$SEARCH_CRITERI.selectedLocation,
	    locationType = _state$SEARCH_CRITERI.locationType;
	var _state$SEARCH_CRITERI2 = state.SEARCH_CRITERIA_IPD,
	    filterCriteria = _state$SEARCH_CRITERI2.filterCriteria,
	    provider_ids = _state$SEARCH_CRITERI2.provider_ids,
	    hospital_list = _state$SEARCH_CRITERI2.hospital_list,
	    hospital_search_results = _state$SEARCH_CRITERI2.hospital_search_results,
	    HOSPITAL_DATA = _state$SEARCH_CRITERI2.HOSPITAL_DATA,
	    nextFilterCriteria = _state$SEARCH_CRITERI2.nextFilterCriteria,
	    page = _state$SEARCH_CRITERI2.page,
	    search_id_data = _state$SEARCH_CRITERI2.search_id_data,
	    commonSelectedCriterias = _state$SEARCH_CRITERI2.commonSelectedCriterias,
	    nextSelectedCriterias = _state$SEARCH_CRITERI2.nextSelectedCriterias,
	    fetchNewResults = _state$SEARCH_CRITERI2.fetchNewResults,
	    getNewResults = _state$SEARCH_CRITERI2.getNewResults,
	    locationFetched = _state$SEARCH_CRITERI2.locationFetched,
	    hospitalSearchSeoData = _state$SEARCH_CRITERI2.hospitalSearchSeoData,
	    hospitalCanonicalUrl = _state$SEARCH_CRITERI2.hospitalCanonicalUrl,
	    hospitalBreadcrumb = _state$SEARCH_CRITERI2.hospitalBreadcrumb,
	    hospital_search_content = _state$SEARCH_CRITERI2.hospital_search_content,
	    hospital_bottom_content = _state$SEARCH_CRITERI2.hospital_bottom_content,
	    HOSPITAL_SEARCH_DATA_LOADED = _state$SEARCH_CRITERI2.HOSPITAL_SEARCH_DATA_LOADED;


	return {
		selectedLocation: selectedLocation,
		locationType: locationType,
		filterCriteria: filterCriteria,
		provider_ids: provider_ids,
		hospital_list: hospital_list,
		hospital_search_results: hospital_search_results,
		HOSPITAL_DATA: HOSPITAL_DATA,
		nextFilterCriteria: nextFilterCriteria,
		page: page,
		search_id_data: search_id_data,
		commonSelectedCriterias: commonSelectedCriterias,
		nextSelectedCriterias: nextSelectedCriterias,
		fetchNewResults: fetchNewResults,
		getNewResults: getNewResults,
		locationFetched: locationFetched,
		hospitalSearchSeoData: hospitalSearchSeoData,
		hospitalCanonicalUrl: hospitalCanonicalUrl,
		hospitalBreadcrumb: hospitalBreadcrumb,
		hospital_search_content: hospital_search_content,
		hospital_bottom_content: hospital_bottom_content,
		HOSPITAL_SEARCH_DATA_LOADED: HOSPITAL_SEARCH_DATA_LOADED
	};
};

var mapDisptachToProps = function mapDisptachToProps(dispatch) {

	return {
		getIpdHospitals: function getIpdHospitals(state, page, fromServer, searchByUrl, cb) {
			return dispatch((0, _index.getIpdHospitals)(state, page, fromServer, searchByUrl, cb));
		},
		mergeIpdCriteria: function mergeIpdCriteria(filterCriteria) {
			return dispatch((0, _index.mergeIpdCriteria)(filterCriteria));
		},
		urlShortner: function urlShortner(url, cb) {
			return dispatch((0, _index.urlShortner)(url, cb));
		},
		setIpdSearchId: function setIpdSearchId(search_id, filters, page) {
			return dispatch((0, _index.setIpdSearchId)(search_id, filters, page));
		},
		getIpdSearchIdResults: function getIpdSearchIdResults(search_id, data) {
			return dispatch((0, _index.getIpdSearchIdResults)(search_id, data));
		}
	};
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDisptachToProps)(IpdHospitals);

/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/react-router/es/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-router/es/index.js ***!
  \***********************************************/
/*! exports provided: MemoryRouter, Prompt, Redirect, Route, Router, StaticRouter, Switch, generatePath, matchPath, withRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MemoryRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MemoryRouter */ "./node_modules/react-router/es/MemoryRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return _MemoryRouter__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Prompt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Prompt */ "./node_modules/react-router/es/Prompt.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return _Prompt__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Redirect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Redirect */ "./node_modules/react-router/es/Redirect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return _Redirect__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Route */ "./node_modules/react-router/es/Route.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return _Route__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Router */ "./node_modules/react-router/es/Router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return _Router__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _StaticRouter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StaticRouter */ "./node_modules/react-router/es/StaticRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return _StaticRouter__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Switch */ "./node_modules/react-router/es/Switch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _Switch__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _generatePath__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./generatePath */ "./node_modules/react-router/es/generatePath.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generatePath", function() { return _generatePath__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _matchPath__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./matchPath */ "./node_modules/react-router/es/matchPath.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return _matchPath__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _withRouter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./withRouter */ "./node_modules/react-router/es/withRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return _withRouter__WEBPACK_IMPORTED_MODULE_9__["default"]; });






















/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvaXBkL0lwZEhvc3BpdGFsTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9pcGQvSXBkSG9zcGl0YWxTZWFyY2hWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2lwZC9TdGlja3lUb3BCYXJGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvaXBkL3Jlc3VsdF9jb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9pcGQvSXBkSG9zcGl0YWxTZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BhdGgtYnJvd3NlcmlmeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxvYWRlciIsInByb3BzIiwiY2xhc3NUeXBlIiwiaUZyYW1lUG9wdXAiLCJSZWFjdCIsIkNvbXBvbmVudCIsInF1ZXJ5U3RyaW5nIiwicmVxdWlyZSIsIklwZEhvc3BpdGFsTGlzdFZpZXciLCJwYXJzZWQiLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwic3RhdGUiLCJ0b2dnbGVGaWx0ZXJQb3B1cCIsImhlYWx0aF9pbnN1cmFuY2VfcHJvdmlkZXIiLCJoYXNNb3JlIiwibG9hZGluZyIsInBhZ2UiLCJwYXJzZUludCIsInJlYWRNb3JlIiwiZGF0YSIsInNldFN0YXRlIiwiaG9zcGl0YWxJZCIsImlwZF9pZCIsImNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzIiwibGVuZ3RoIiwiaWQiLCJndG1EYXRhIiwiR1RNIiwiZ2V0VXNlcklkIiwic2VsZWN0ZWRJZCIsInNlbmRFdmVudCIsImhpc3RvcnkiLCJwdXNoIiwidXJsIiwiZ2V0SXBkSG9zcGl0YWxMaXN0Iiwic2V0VGltZW91dCIsIndpbmRvdyIsInNjcm9sbFRvIiwiaG9zcGl0YWxfbGlzdCIsIkhPU1BJVEFMX0RBVEEiLCJob3NwaXRhbF9zZWFyY2hfY29udGVudCIsIl9faHRtbCIsInRvZ2dsZVNjcm9sbCIsImJpbmQiLCJsb2FkTW9yZSIsIm1hcCIsImkiLCJnZXRDb3N0RXN0aW1hdGVDbGlja2VkIiwiZ2V0SG9zcGl0YWxEZXRhaWxQYWdlIiwidG9nZ2xlUHJvdmlkZXJGaWx0ZXIiLCJwcm92aWRlciIsIklwZEhvc3BpdGFsVmlldyIsInNlYXJjaF9pZCIsInNldFNlYXJjaElkIiwic2VvRnJpZW5kbHkiLCJtYXRjaCIsImluY2x1ZGVzIiwieCIsImdldFNlYXJjaElkIiwic2VhcmNoX2lkX2RhdGEiLCJPYmplY3QiLCJ2YWx1ZXMiLCJyZXN1bHQiLCJnZXROZXdSZXN1bHRzIiwiZmV0Y2hOZXdSZXN1bHRzIiwiZ2V0SXBkU2VhcmNoSWRSZXN1bHRzIiwiZmlsdGVyQ3JpdGVyaWEiLCJidWlsZFVybFN0YXRlIiwiY3JpdGVyaWEiLCJmaWx0ZXJzIiwic2V0SXBkU2VhcmNoSWQiLCJuZXh0U2VsZWN0ZWRDcml0ZXJpYXMiLCJuZXh0RmlsdGVyQ3JpdGVyaWEiLCJnZW5lcmF0ZVNlYXJjaElkIiwibWVyZ2VJcGRDcml0ZXJpYSIsIm5ld191cmwiLCJidWlsZFVSSSIsInJlcGxhY2UiLCJzZWxlY3RlZENyaXRlcmlhIiwiZGlzdGFuY2UiLCJwcm92aWRlcl9pZHMiLCJuZXR3b3JrX2lkIiwibmFtZSIsIm1pbl9kaXN0YW5jZSIsIm1heF9kaXN0YW5jZSIsInByb3ZpZGVycyIsInNwbGl0IiwiY29uY2F0IiwibmV4dFByb3BzIiwibG9jYXRpb25GZXRjaGVkIiwiY2IiLCJzZWFyY2hVcmwiLCJ0b0xvd2VyQ2FzZSIsImdldElwZEhvc3BpdGFscyIsInNlbGVjdGVkTG9jYXRpb24iLCJsb2NhdGlvblR5cGUiLCJsYXQiLCJsb25nIiwicGxhY2VfaWQiLCJnZW9tZXRyeSIsImxuZyIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiaXNfZmlsdGVyX2FwcGxpZWQiLCJpc19wYXJhbXNfZXhpc3QiLCJwYXRobmFtZSIsInV0bV9zb3VyY2UiLCJ1dG1fbWVkaXVtIiwidXRtX2NhbXBhaWduIiwidWlkX3N0cmluZyIsImR0IiwiRGF0ZSIsImdldFRpbWUiLCJ1dWlkIiwiYyIsInIiLCJNYXRoIiwicmFuZG9tIiwiZmxvb3IiLCJ0b1N0cmluZyIsInNlb0RhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiQ09ORklHIiwiQVBJX0JBU0VfVVJMIiwiY3Vycl9wYWdlIiwicHJldiIsIm5leHQiLCJjb3VudCIsImhvc3BpdGFsX3NlYXJjaF9yZXN1bHRzIiwiY2Fub25pY2FsVXJsIiwiZ2V0TWV0YVRhZ3NEYXRhIiwiaG9zcGl0YWxTZWFyY2hTZW9EYXRhIiwiSE9TUElUQUxfU0VBUkNIX0RBVEFfTE9BREVEIiwiaG9zcGl0YWxCcmVhZGNydW1iIiwiZ2V0TW9yZVJlc3VsdHMiLCJob3NwaXRhbF9ib3R0b21fY29udGVudCIsIlN0aWNreUZpbHRlciIsImxhc3RTZWxlY3RlZFByb3ZpZGVySWRzIiwibGFzdFNlbGVjdGVkRGlzdGFuY2UiLCJqb2luIiwiYXNzaWduIiwiZm91bmQiLCJmaWx0ZXIiLCJ0eXBlIiwicmFuZ2UiLCJpbnN1cmFuY2VfcHJvdmlkZXJzIiwic2hvd01vcmVQcm92aWRlcnMiLCJzbGljZSIsIndpZHRoIiwibWFyZ2luUmlnaHQiLCJhcHBseUZpbHRlcnMiLCJjbG9zZUZpbHRlcnNQb3BVcCIsImhhbmRsZVJhbmdlIiwiaW5kZXhPZiIsIlRvcEJhciIsInNob3J0VVJMIiwic2hvd0xvY2F0aW9uUG9wdXAiLCJvdmVybGF5VmlzaWJsZSIsInNob3dQb3B1cENvbnRhaW5lciIsImUiLCJldk5hbWUiLCJ0YXJnZXQiLCJjaGVja2VkIiwic2VsZWN0ZWRDcml0ZXJpYXMiLCJzZWxlY3RlZFByb2NlZHVyZUNhdGVnb3J5IiwicHJvY2VkdXJlcyIsInJlZHVjZSIsImZpbmFsIiwiY3VyciIsImhyZWYiLCJ1cmxTaG9ydG5lciIsImVyciIsInRpbnlfdXJsIiwic2VhcmNoQ2l0aWVzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiekluZGV4IiwicmVkaXJlY3RfdG8iLCJsb2NhdGlvbl91cmwiLCJjcml0ZXJpYVN0ciIsImdldENyaXRlcmlhU3RyaW5nIiwibG9jYXRpb25OYW1lIiwiZm9ybWF0dGVkX2FkZHJlc3MiLCJjdXJzb3IiLCJzaG9ydGVuVXJsIiwiQVNTRVRTX0JBU0VfVVJMIiwic3RvcFByb3BhZ2F0aW9uIiwiU25hY2tCYXIiLCJzaG93IiwicG9zIiwidGV4dCIsImdvVG9Mb2NhdGlvbiIsImNvbG9yIiwiaGVpZ2h0IiwibWFyZ2luTGVmdCIsImNsaW5pY19jYXJkIiwiY2hpbGQiLCJyZWYiLCJoaWRlTG9jYXRpb25Qb3B1cCIsInBvcHVwQ29udGFpbmVyIiwib3ZlcmxheUNsaWNrIiwiSXBkSG9zcGl0YWxzIiwic3RvcmUiLCJxdWVyeVBhcmFtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwibG9jYXRpb25fbXMiLCJ0aGVuIiwiZGlzcGF0Y2giLCJyZXN1bHRGb3VuZCIsInN0YXR1cyIsImNhdGNoIiwiY29udGV4dFR5cGVzIiwicm91dGVyIiwibWFwU3RhdGVUb1Byb3BzIiwiU0VBUkNIX0NSSVRFUklBX09QRCIsIlNFQVJDSF9DUklURVJJQV9JUEQiLCJob3NwaXRhbENhbm9uaWNhbFVybCIsIm1hcERpc3B0YWNoVG9Qcm9wcyIsImZyb21TZXJ2ZXIiLCJzZWFyY2hCeVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFDRixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLCtHQUNUQSxLQURTO0FBRWxCOzs7O2lDQUVROztBQUVMLG1CQUNJO0FBQUE7QUFBQSxrQkFB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QUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyQztBQUNGO0FBQ1Y7QUFDRjtBQUNNO0FBQ0Y7QUFDSjtBQUNGO0FBQ0k7QUFDRjtBQUNjO0FBQ0Y7QUFDVjtBQUNGO0FBQ2M7QUFDRjtBQUNKO0FBQ0Y7QUFDSSIsImZpbGUiOiI2OC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBMb2FkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NUeXBlIHx8IFwibG9hZGVyQ2lyY3VsYXJcIn0gPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHAtbG9hZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlGcmFtZVBvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMTBcIj5SZWRpcmVjdGluZyB5b3UgdG8gUGhhcm1lYXN5IHdlYnNpdGUuLi48L3A+IDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlclxuIiwiaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhvc3BpdGFsQ2FyZCBmcm9tICcuL0hvc3BpdGFsQ2FyZC5qcydcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vaGVscGVycy9ndG0uanMnXG5pbXBvcnQgSW5maW5pdGVTY3JvbGwgZnJvbSAncmVhY3QtaW5maW5pdGUtc2Nyb2xsZXInO1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9jb21tb25zL0xvYWRlcidcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJylcblxuY2xhc3MgSXBkSG9zcGl0YWxMaXN0VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgc3VwZXIocHJvcHMpXG4gICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICB0b2dnbGVGaWx0ZXJQb3B1cDogZmFsc2UsXG4gICAgICAgICBoZWFsdGhfaW5zdXJhbmNlX3Byb3ZpZGVyOiBbXSxcbiAgICAgICAgIGhhc01vcmU6IHRydWUsXG4gICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgIHBhZ2U6IHBhcnNlZCAmJiBwYXJzZWQucGFnZT9wYXJzZUludChwYXJzZWQucGFnZSl8fDE6MSxcbiAgICAgICAgIHJlYWRNb3JlOiAnc2VhcmNoLWRldGFpbHMtZGF0YS1sZXNzJyBcbiAgICAgIH1cbiAgIFx0fVxuXG4gICBcdHRvZ2dsZVByb3ZpZGVyRmlsdGVyKGRhdGE9W10pe1xuXG4gICBcdFx0dGhpcy5zZXRTdGF0ZSh7dG9nZ2xlRmlsdGVyUG9wdXA6ICF0aGlzLnN0YXRlLnRvZ2dsZUZpbHRlclBvcHVwLCBoZWFsdGhfaW5zdXJhbmNlX3Byb3ZpZGVyOiBkYXRhfSlcbiAgIFx0fVxuXG5cdGdldENvc3RFc3RpbWF0ZUNsaWNrZWQoaG9zcGl0YWxJZCl7XG5cdFx0XG5cblx0XHRsZXQgaXBkX2lkID0gdGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcyAmJiB0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLmxlbmd0aD90aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzWzBdLmlkOicnXG5cdFxuXHRcdGxldCBndG1EYXRhID0ge1xuXHQgICAgXHQnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0lwZEdldENvc3RFc3RpbWF0ZUNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdpcGQtZ2V0LWNvc3QtZXN0aW1hdGUtY2xpY2tlZCcsIHNlbGVjdGVkSWQ6IGlwZF9pZCB8fCAnJywgaG9zcGl0YWxJZDogaG9zcGl0YWxJZCB8fCAnJ1xuXHRcdH1cblx0XHRHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuXG4gICAgaWYoaXBkX2lkKXtcbiAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvaXBkLyR7aXBkX2lkfS9nZXRQcmljZUVzdGltYXRlP2hvc3BpdGFsX2lkPSR7aG9zcGl0YWxJZH1gKVxuICAgIH1lbHNle1xuICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9pcGQvcHJpY2UvZ2V0UHJpY2VFc3RpbWF0ZT9ob3NwaXRhbF9pZD0ke2hvc3BpdGFsSWR9YCkgIFxuICAgIH1cblx0XHRcbiAgICAgIFxuICAgXHR9XG5cbiAgIFx0Z2V0SG9zcGl0YWxEZXRhaWxQYWdlKGhvc3BpdGFsSWQsIHVybD1udWxsKXtcbiAgIFx0XHRsZXQgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSG9zcGl0YWxEZXRhaWxDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnaG9zcGl0YWwtZGV0YWlsLWNsaWNrZWQnLCAnc2VsZWN0ZWRJZCc6IGhvc3BpdGFsSWQgfHwgJydcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuICAgXHRcdFxuICAgXHRcdGlmKHVybCl7XG4gICBcdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgLyR7dXJsfWApXG4gICBcdFx0fWVsc2V7XG4gICBcdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2lwZC9ob3NwaXRhbC8ke2hvc3BpdGFsSWR9YClcdFxuICAgXHRcdH1cbiAgIFx0XHRcbiAgIFx0fVxuXG4gICBcdGxvYWRNb3JlKHBhZ2UpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhhc01vcmU6IGZhbHNlLCBsb2FkaW5nOiB0cnVlIH0pXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0SXBkSG9zcGl0YWxMaXN0KG51bGwsIHBhZ2UsIChoYXNNb3JlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2V9KVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhhc01vcmUgfSlcbiAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICB0b2dnbGVTY3JvbGwoKSB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWFkTW9yZTogJ3NlYXJjaC1kZXRhaWxzLWRhdGEtbGVzcycgfSlcbiAgICB9XG5cblx0cmVuZGVyKCl7XG5cdFx0bGV0IHsgaG9zcGl0YWxfbGlzdCwgSE9TUElUQUxfREFUQSB9ID0gdGhpcy5wcm9wc1xuICAgIGxldCBpcGRfaWQgPSB0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzICYmIHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMubGVuZ3RoP3RoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXNbMF0uaWQ6bnVsbFxuXG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5ob3NwaXRhbF9zZWFyY2hfY29udGVudCAmJiB0aGlzLnByb3BzLmhvc3BpdGFsX3NlYXJjaF9jb250ZW50ICE9ICcnICYmIHBhcnNlSW50KHRoaXMucHJvcHMucGFnZSkgPT0gMSA/XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1yZXN1bHQtY2FyZC1jb2xscGFzZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnJlYWRNb3JlfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRoaXMucHJvcHMuaG9zcGl0YWxfc2VhcmNoX2NvbnRlbnQgfX0gPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucmVhZE1vcmUgJiYgdGhpcy5zdGF0ZS5yZWFkTW9yZSAhPSAnJyA/XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJkLW1vcmVcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgcmVhZE1vcmU6ICcnIH0pfT5SZWFkIE1vcmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yZWFkTW9yZSA9PSAnJyA/XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJkLW1vcmVcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVNjcm9sbC5iaW5kKHRoaXMpfT5SZWFkIExlc3M8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDogJydcbiAgICAgICAgfVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aG9zcGl0YWxfbGlzdC5sZW5ndGg/XG5cdFx0XHRcdFx0PEluZmluaXRlU2Nyb2xsXG4gICAgICAgICAgICAgIHBhZ2VTdGFydD17dGhpcy5zdGF0ZS5wYWdlfVxuICAgICAgICAgICAgICBsb2FkTW9yZT17dGhpcy5sb2FkTW9yZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICBoYXNNb3JlPXt0aGlzLnN0YXRlLmhhc01vcmV9XG4gICAgICAgICAgICAgIHVzZVdpbmRvdz17dHJ1ZX1cbiAgICAgICAgICAgICAgaW5pdGlhbExvYWQ9e2ZhbHNlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7XG5cdFx0XHRcdFx0XHRob3NwaXRhbF9saXN0Lm1hcCgoaG9zcGl0YWxJZCwgaSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZihIT1NQSVRBTF9EQVRBW2hvc3BpdGFsSWRdKXtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPEhvc3BpdGFsQ2FyZCBrZXk9e2l9IGRhdGE9e0hPU1BJVEFMX0RBVEFbaG9zcGl0YWxJZF19IGdldENvc3RFc3RpbWF0ZUNsaWNrZWQ9e3RoaXMuZ2V0Q29zdEVzdGltYXRlQ2xpY2tlZC5iaW5kKHRoaXMpfSBnZXRIb3NwaXRhbERldGFpbFBhZ2U9e3RoaXMuZ2V0SG9zcGl0YWxEZXRhaWxQYWdlLmJpbmQodGhpcyl9IHRvZ2dsZVByb3ZpZGVyRmlsdGVyPXt0aGlzLnRvZ2dsZVByb3ZpZGVyRmlsdGVyLmJpbmQodGhpcyl9IG5vSXBkPXtpcGRfaWQ/ZmFsc2U6dHJ1ZX0gey4uLnRoaXMucHJvcHN9Lz5cdFxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdDwvSW5maW5pdGVTY3JvbGw+XG5cdFx0XHRcdFx0OicnXG5cdFx0XHRcdH1cblxuXHRcdFx0XHR7XG5cdFx0ICAgICAgICBcdHRoaXMuc3RhdGUudG9nZ2xlRmlsdGVyUG9wdXA/XG5cdFx0ICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiaXBkLXNlY3Rpb25cIj5cblx0XHRcdCAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1vdmVybGF5XCIgb25DbGljaz17dGhpcy50b2dnbGVQcm92aWRlckZpbHRlci5iaW5kKHRoaXMpfT48L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1wb3B1cCBobHRoLWlucy1wb3AgaW5zLXBvcFwiPlxuXHQgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Jvc3MtYnRuXCI+PGltZyBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vY3AvYXNzZXRzL2ltZy9pY29ucy9jbG9zZS5wbmdcIiBhbHQ9XCJcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVByb3ZpZGVyRmlsdGVyLmJpbmQodGhpcyl9Lz48L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICAgICB7XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICBcdHRoaXMuc3RhdGUuaGVhbHRoX2luc3VyYW5jZV9wcm92aWRlci5sZW5ndGg/XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwicG9wLWhlYWQgdGV4dC1jZW50ZXJcIj5IZWFsdGggSW5zdXJhbmNlIFByb3ZpZGVyczwvZGl2PlxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgXHQ6Jydcblx0XHQgICAgICAgICAgICAgICAgICAgICAgIFx0XHRcblx0ICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICAgICAgICAge1xuXHQgICAgICAgICAgICAgICAgICAgICAgIFx0dGhpcy5zdGF0ZS5oZWFsdGhfaW5zdXJhbmNlX3Byb3ZpZGVyLmxlbmd0aD9cblx0ICAgICAgICAgICAgICAgICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWxpc3RpbmdcIj5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcC1oZWFkXCI+SGVhbHRoIEluc3VyYW5jZSBQcm92aWRlcnM8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicmFuZ2Utc2xpZGVyLXVsXCI+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgXHRcdFx0e1xuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIFx0dGhpcy5zdGF0ZS5oZWFsdGhfaW5zdXJhbmNlX3Byb3ZpZGVyLm1hcCgocHJvdmlkZXIsIGkpID0+IHtcblxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICBcdFx0XHRcdHJldHVybiA8bGkga2V5PXtpfT57cHJvdmlkZXJ9XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgXHRcdFx0fSlcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgXHR9ICAgICAgICAgIFxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cblx0XHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdCAgICAgICAgICAgICAgICAgICAgOicnXG5cdCAgICAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgOicnXG5cdFx0ICAgICAgICB9XG5cdFx0ICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nID8gPExvYWRlciBjbGFzc1R5cGU9XCJsb2FkZXJQYWdpbmF0aW9uXCIgLz4gOiBcIlwifVxuXHRcdFx0PC9kaXY+XHRcbiAgICAgICAgICAgXG5cdFx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSXBkSG9zcGl0YWxMaXN0VmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMZWZ0QmFyIGZyb20gJy4uL2NvbW1vbnMvTGVmdEJhcidcbmltcG9ydCBSaWdodEJhciBmcm9tICcuLi9jb21tb25zL1JpZ2h0QmFyJ1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBJcGRIb3NwaXRhbExpc3QgZnJvbSAnLi9JcGRIb3NwaXRhbExpc3QuanMnXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL2NvbW1vbnMvTG9hZGVyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21tb25zL0hvbWUvZm9vdGVyJ1xuaW1wb3J0IFN0aWNreVRvcEJhckZpbHRlciBmcm9tICcuL1N0aWNreVRvcEJhckZpbHRlci5qcydcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJylcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vaGVscGVycy9ndG0uanMnXG5pbXBvcnQgSGVsbWV0VGFncyBmcm9tICcuLi9jb21tb25zL0hlbG1ldFRhZ3MnXG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uL2NvbmZpZydcbmltcG9ydCBCcmVhZENydW1iVmlldyBmcm9tICcuL2JyZWFkQ3J1bWIuanMnXG5cbmNsYXNzIElwZEhvc3BpdGFsVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNlYXJjaF9pZDogJycsXG4gICAgICAgICAgICBzZXRTZWFyY2hJZDogZmFsc2UsXG4gICAgICAgICAgICBzZW9GcmllbmRseTogdGhpcy5wcm9wcy5tYXRjaC51cmwuaW5jbHVkZXMoJy1pcGRocCcpIHx8IHRoaXMucHJvcHMubWF0Y2gudXJsLmluY2x1ZGVzKCctaHNwY2l0JykgfHwgdGhpcy5wcm9wcy5tYXRjaC51cmwuaW5jbHVkZXMoJy1oc3BsaXRjaXQnKVxuXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblxuICAgICAgICBsZXQgaXBkX2lkID0gJydcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcyAmJiB0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLmxlbmd0aCkge1xuICAgICAgICAgICAgaXBkX2lkID0gdGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcy5tYXAoeD0+eC5pZClbMF0gICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBndG1EYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdJcGRIb3NwaXRhbFNlYXJjaFBhZ2VMYW5kZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdpcGQtaG9zcGl0YWwtc2VhcmNoLXBhZ2UtbGFuZGVkJywgc2VsZWN0ZWRJZDogaXBkX2lkXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bURhdGEgfSlcblxuXHRcdGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgIC8vIGlmICh0aGlzLnByb3BzLm1lcmdlVXJsU3RhdGUpIHtcbiAgICAgICAgICAgIGxldCBnZXRTZWFyY2hJZCA9IHRydWVcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnc2VhcmNoX2lkJykpIHtcbiAgICAgICAgICAgICAgICAvL2lmIHNlYXJjaCBpZCBleGlzdCBpbiB1cmwgdGhlbiB3ZSBnZXQgZGF0YSBmb3IgdGhhdCBzZWFyY2ggaWQgZnJvbSBzdG9yZVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlYXJjaF9pZF9kYXRhICYmIHRoaXMucHJvcHMuc2VhcmNoX2lkX2RhdGFbcGFyc2VkLnNlYXJjaF9pZF0gJiYgdGhpcy5wcm9wcy5zZWFyY2hfaWRfZGF0YVtwYXJzZWQuc2VhcmNoX2lkXS5kYXRhICYmIE9iamVjdC52YWx1ZXModGhpcy5wcm9wcy5zZWFyY2hfaWRfZGF0YVtwYXJzZWQuc2VhcmNoX2lkXS5kYXRhKS5sZW5ndGgpIHtcblxuICAgICAgICAgICAgICAgICAgICBnZXRTZWFyY2hJZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlYXJjaF9pZF9kYXRhW3BhcnNlZC5zZWFyY2hfaWRdLmRhdGEucmVzdWx0ICYmIHRoaXMucHJvcHMuc2VhcmNoX2lkX2RhdGFbcGFyc2VkLnNlYXJjaF9pZF0uZGF0YS5yZXN1bHQubGVuZ3RoICYmICF0aGlzLnByb3BzLmdldE5ld1Jlc3VsdHMgJiYgIXRoaXMucHJvcHMuZmV0Y2hOZXdSZXN1bHRzKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hfaWQ6IHBhcnNlZC5zZWFyY2hfaWQgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0SXBkU2VhcmNoSWRSZXN1bHRzKHBhcnNlZC5zZWFyY2hfaWQsIHRoaXMucHJvcHMuc2VhcmNoX2lkX2RhdGFbcGFyc2VkLnNlYXJjaF9pZF0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJDcml0ZXJpYSA9IHt9XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeyBjcml0ZXJpYSwgZmlsdGVycyB9ID0gdGhpcy5idWlsZFVybFN0YXRlKHRoaXMucHJvcHMuc2VhcmNoX2lkX2RhdGFbcGFyc2VkLnNlYXJjaF9pZF0uY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMsIHRoaXMucHJvcHMuc2VhcmNoX2lkX2RhdGFbcGFyc2VkLnNlYXJjaF9pZF0uZmlsdGVyQ3JpdGVyaWEpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckNyaXRlcmlhLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzID0gY3JpdGVyaWFcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckNyaXRlcmlhLmZpbHRlckNyaXRlcmlhID0gZmlsdGVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaF9pZDogcGFyc2VkLnNlYXJjaF9pZCB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBhZ2UgPSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZSA9IHBhcnNlZC5wYWdlIHx8IDFcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0SXBkU2VhcmNoSWQocGFyc2VkLnNlYXJjaF9pZCwgZmlsdGVyQ3JpdGVyaWEsIHBhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChnZXRTZWFyY2hJZCkge1xuICAgICAgICAgICAgICAgIC8vSWYgbm8gc2VhcmNoSWQgaW4gdXJsIHRoZW4gd2UgY3JlYXRlIHNlYXJjaCBpZCBhbmQgc3RvcmUgZGF0YSBjb3JyZXNwb25kaW5nIHRvIHRoYXQgc2VhcmNoIGlkXG4gICAgICAgICAgICAgICAgbGV0IGZpbHRlckNyaXRlcmlhID0ge31cbiAgICAgICAgICAgICAgICBsZXQgeyBjcml0ZXJpYSwgZmlsdGVycyB9ID0gdGhpcy5idWlsZFVybFN0YXRlKHRoaXMucHJvcHMubmV4dFNlbGVjdGVkQ3JpdGVyaWFzLCB0aGlzLnByb3BzLm5leHRGaWx0ZXJDcml0ZXJpYSlcbiAgICAgICAgICAgICAgICBmaWx0ZXJDcml0ZXJpYS5jb21tb25TZWxlY3RlZENyaXRlcmlhcyA9IGNyaXRlcmlhXG4gICAgICAgICAgICAgICAgZmlsdGVyQ3JpdGVyaWEuZmlsdGVyQ3JpdGVyaWEgPSBmaWx0ZXJzXG4gICAgICAgICAgICAgICAgbGV0IHNlYXJjaF9pZCA9IHRoaXMuZ2VuZXJhdGVTZWFyY2hJZCgpXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5tZXJnZUlwZENyaXRlcmlhKHtmZXRjaE5ld1Jlc3VsdHM6ZmFsc2V9KVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hfaWQ6IHNlYXJjaF9pZCB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdfdXJsID0gdGhpcy5idWlsZFVSSSh0aGlzLnByb3BzKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucmVwbGFjZShuZXdfdXJsKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNldElwZFNlYXJjaElkKHNlYXJjaF9pZCwgZmlsdGVyQ3JpdGVyaWEsIHBhcnNlZC5wYWdlIHx8IDEpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblx0fVxuXG4gICAgYnVpbGRVcmxTdGF0ZShzZWxlY3RlZENyaXRlcmlhLCBmaWx0ZXJDcml0ZXJpYSl7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBsZXQgY3JpdGVyaWEgPVtdXG4gICAgICAgIGxldCBmaWx0ZXJzID0ge1xuICAgICAgICAgICAgZGlzdGFuY2U6IFtdLFxuICAgICAgICAgICAgcHJvdmlkZXJfaWRzOiBbXSxcbiAgICAgICAgICAgIG5ldHdvcmtfaWQgOicnXG4gICAgICAgIH1cblxuICAgICAgICBpZihwYXJzZWQuaXBkX2lkKXtcbiAgICAgICAgICAgIGNyaXRlcmlhLnB1c2goe2lkOiBwYXJzZWQuaXBkX2lkLCBuYW1lOiAnJ30pXG4gICAgICAgIH1lbHNlIGlmKHNlbGVjdGVkQ3JpdGVyaWEubGVuZ3RoKXtcbiAgICAgICAgICAgIGNyaXRlcmlhLnB1c2goe2lkOiBzZWxlY3RlZENyaXRlcmlhWzBdLmlkLCBuYW1lOiAnJ30pXG4gICAgICAgIH1cblxuICAgICAgICBpZihwYXJzZWQubWluX2Rpc3RhbmNlKXtcbiAgICAgICAgICAgIGZpbHRlcnMuZGlzdGFuY2UucHVzaChwYXJzZUludChwYXJzZWQubWluX2Rpc3RhbmNlKSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBmaWx0ZXJzLmRpc3RhbmNlLnB1c2goZmlsdGVyQ3JpdGVyaWEuZGlzdGFuY2VbMF0pXG4gICAgICAgIH1cblxuICAgICAgICBpZihwYXJzZWQubWF4X2Rpc3RhbmNlKXtcbiAgICAgICAgICAgIGZpbHRlcnMuZGlzdGFuY2UucHVzaChwYXJzZUludChwYXJzZWQubWF4X2Rpc3RhbmNlKSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBmaWx0ZXJzLmRpc3RhbmNlLnB1c2goZmlsdGVyQ3JpdGVyaWEuZGlzdGFuY2VbMV0pXG4gICAgICAgIH1cblxuICAgICAgICBpZihwYXJzZWQucHJvdmlkZXJfaWRzKXtcbiAgICAgICAgICAgIGxldCBwcm92aWRlcnMgPSBbXVxuICAgICAgICAgICAgcGFyc2VkLnByb3ZpZGVyX2lkcy5zcGxpdCgnLCcpLm1hcCgoeCk9PntcbiAgICAgICAgICAgICAgICBwcm92aWRlcnMucHVzaChwYXJzZUludCh4KSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBmaWx0ZXJzLnByb3ZpZGVyX2lkcyA9IHByb3ZpZGVyc1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGZpbHRlcnMucHJvdmlkZXJfaWRzLmNvbmNhdChmaWx0ZXJDcml0ZXJpYS5wcm92aWRlcl9pZHMpXG4gICAgICAgIH1cblxuICAgICAgICBpZihwYXJzZWQubmV0d29ya19pZCkge1xuICAgICAgICAgICAgZmlsdGVycy5uZXR3b3JrX2lkID0gcGFyc2VkLm5ldHdvcmtfaWRcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgZmlsdGVycy5uZXR3b3JrX2lkID0gZmlsdGVyQ3JpdGVyaWEubmV0d29ya19pZFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuKHtjcml0ZXJpYSwgZmlsdGVyc30pXG5cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG5cbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UobmV4dFByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgbGV0IHNlYXJjaF9pZCA9ICcnXG4gICAgICAgIGlmKHBhcnNlZC5zZWFyY2hfaWQpe1xuICAgICAgICAgICAgc2VhcmNoX2lkID0gcGFyc2VkLnNlYXJjaF9pZFxuICAgICAgICB9XG4gICAgICAgIGlmKG5leHRQcm9wcy5mZXRjaE5ld1Jlc3VsdHMgJiYgKG5leHRQcm9wcy5mZXRjaE5ld1Jlc3VsdHMgIT0gdGhpcy5wcm9wcy5mZXRjaE5ld1Jlc3VsdHMgJiYgdGhpcy5zdGF0ZS5zZWFyY2hfaWQpKXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NldFNlYXJjaElkOiB0cnVlfSwgKCk9PntcbiAgICAgICAgICAgICAgICB0aGlzLmdldElwZEhvc3BpdGFsTGlzdChuZXh0UHJvcHMpICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfWVsc2UgaWYgKG5leHRQcm9wcy5mZXRjaE5ld1Jlc3VsdHMgJiYgdGhpcy5zdGF0ZS5zZWFyY2hfaWQgJiYgKHRoaXMuc3RhdGUuc2VhcmNoX2lkID09IHNlYXJjaF9pZCkgJiYgIXRoaXMuc3RhdGUuc2V0U2VhcmNoSWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZXRTZWFyY2hJZDogdHJ1ZSB9LCAoKT0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldElwZEhvc3BpdGFsTGlzdChuZXh0UHJvcHMpICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICB9ZWxzZSBpZihuZXh0UHJvcHMubG9jYXRpb25GZXRjaGVkICE9IHRoaXMucHJvcHMubG9jYXRpb25GZXRjaGVkKXtcbiAgICAgICAgICAgIC8vV2hlbmV2ZXIgbG9jYXRpb24gY2hhbmdlcyBtYWtlIGFwaSBjYWxsc1xuICAgICAgICAgICAgdGhpcy5nZXRJcGRIb3NwaXRhbExpc3QobmV4dFByb3BzKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0SXBkSG9zcGl0YWxMaXN0KHN0YXRlLCBwYWdlPW51bGwsIGNiPW51bGwpe1xuICAgICAgICAvL2FwcGx5IGZpbHRlcnMgYW5kIGdldCB1cGRhdGVkIGRhdGFcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIFxuICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IHRoaXMucHJvcHNcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCFwYWdlICYmIHBhcnNlZC5wYWdlKXtcbiAgICAgICAgICAgIHBhZ2UgPSBwYXJzZWQucGFnZSB8fCAxXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcGFnZSA9IHBhZ2UgfHwgMVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNlYXJjaFVybCA9IG51bGxcbiAgICAgICAgaWYgKHN0YXRlLm1hdGNoLnVybC5pbmNsdWRlcygnLWlwZGhwJykgfHwgc3RhdGUubWF0Y2gudXJsLmluY2x1ZGVzKCctaHNwY2l0JykgfHwgc3RhdGUubWF0Y2gudXJsLmluY2x1ZGVzKCctaHNwbGl0Y2l0JykpIHtcbiAgICAgICAgICAgIHNlYXJjaFVybCA9IHN0YXRlLm1hdGNoLnVybC50b0xvd2VyQ2FzZSgpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb3BzLmdldElwZEhvc3BpdGFscyhzdGF0ZSwgcGFnZSwgZmFsc2UsIHNlYXJjaFVybCwgKC4uLmFyZ3MpID0+IHtcblxuICAgICAgICAgICAgaWYoY2IpY2IoLi4uYXJncylcbiAgICAgICAgICAgIGxldCBuZXdfdXJsID0gdGhpcy5idWlsZFVSSShzdGF0ZSlcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5yZXBsYWNlKG5ld191cmwpXG4gICAgICAgIH0pXG4gICAgfVxuXG5cdGJ1aWxkVVJJKHN0YXRlKSB7XG4gICAgICAgIC8va2VlcCBvbiB1cGRhdGluZyB1cmwgd2l0aCB0aGUgdXBkYXRlZCBmaWx0ZXJzIFxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcblxuICAgICAgICBsZXQgeyBzZWxlY3RlZExvY2F0aW9uLCBjb21tb25TZWxlY3RlZENyaXRlcmlhcywgZmlsdGVyQ3JpdGVyaWEsIGxvY2F0aW9uVHlwZSB9ID0gc3RhdGVcbiAgICAgICAgXG4gICAgICAgIGxldCBwYWdlID0gMVxuICAgICAgICBsZXQgaXBkX2lkID0gY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMubWFwKHg9PnguaWQpXG4gICAgICAgIGxldCBsYXQgPSAyOC42NDQ4MDBcbiAgICAgICAgbGV0IGxvbmcgPSA3Ny4yMTY3MjFcbiAgICAgICAgbGV0IHBsYWNlX2lkID0gXCJcIlxuXG4gICAgICAgIGlmIChzZWxlY3RlZExvY2F0aW9uKSB7XG4gICAgICAgICAgICBwbGFjZV9pZCA9IHNlbGVjdGVkTG9jYXRpb24ucGxhY2VfaWQgfHwgXCJcIlxuICAgICAgICAgICAgbGF0ID0gc2VsZWN0ZWRMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sYXRcbiAgICAgICAgICAgIGxvbmcgPSBzZWxlY3RlZExvY2F0aW9uLmdlb21ldHJ5LmxvY2F0aW9uLmxuZ1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBsYXQgPT09ICdmdW5jdGlvbicpIGxhdCA9IGxhdCgpXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxvbmcgPT09ICdmdW5jdGlvbicpIGxvbmcgPSBsb25nKClcblxuICAgICAgICAgICAgbGF0ID0gcGFyc2VGbG9hdChwYXJzZUZsb2F0KGxhdCkudG9GaXhlZCg2KSlcbiAgICAgICAgICAgIGxvbmcgPSBwYXJzZUZsb2F0KHBhcnNlRmxvYXQobG9uZykudG9GaXhlZCg2KSlcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtaW5fZGlzdGFuY2UgPSBmaWx0ZXJDcml0ZXJpYS5kaXN0YW5jZVswXVxuICAgICAgICBsZXQgbWF4X2Rpc3RhbmNlID0gZmlsdGVyQ3JpdGVyaWEuZGlzdGFuY2VbMV1cbiAgICAgICAgbGV0IHByb3ZpZGVyX2lkcyA9IGZpbHRlckNyaXRlcmlhLnByb3ZpZGVyX2lkc1xuICAgICAgICBsZXQgbmV0d29ya19pZCA9IGZpbHRlckNyaXRlcmlhLm5ldHdvcmtfaWRcblxuICAgICAgICBsZXQgdXJsID0gJydcblxuICAgICAgICAvL0NoZWNrIGlmIGFueSBmaWx0ZXIgYXBwbGllZCBcbiAgICAgICAgbGV0IGlzX2ZpbHRlcl9hcHBsaWVkID0gZmFsc2VcbiAgICAgICAgbGV0IGlzX3BhcmFtc19leGlzdCA9IGZhbHNlXG5cbiAgICAgICAgXG4gICAgICAgIGlmIChwYXJzZUludChtaW5fZGlzdGFuY2UpICE9IDApIHtcbiAgICAgICAgICAgIGlzX2ZpbHRlcl9hcHBsaWVkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJzZUludChtYXhfZGlzdGFuY2UpICE9IDIwKSB7XG4gICAgICAgICAgICBpc19maWx0ZXJfYXBwbGllZCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvdmlkZXJfaWRzICYmIHByb3ZpZGVyX2lkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlzX2ZpbHRlcl9hcHBsaWVkID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoaXNfZmlsdGVyX2FwcGxpZWQgfHwgIXRoaXMuc3RhdGUuc2VvRnJpZW5kbHkpIHtcblxuICAgICAgICAgICAgdXJsID0gYCR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfT9pcGRfaWQ9JHtpcGRfaWR9Jm1pbl9kaXN0YW5jZT0ke21pbl9kaXN0YW5jZX0mbWF4X2Rpc3RhbmNlPSR7bWF4X2Rpc3RhbmNlfSZwcm92aWRlcl9pZHM9JHtwcm92aWRlcl9pZHN9JnNlYXJjaF9pZD0ke3RoaXMuc3RhdGUuc2VhcmNoX2lkfSZsYXQ9JHtsYXR9Jmxvbmc9JHtsb25nfSZwbGFjZV9pZD0ke3BsYWNlX2lkfSZuZXR3b3JrX2lkPSR7bmV0d29ya19pZH1gXG5cbiAgICAgICAgICAgIGlzX3BhcmFtc19leGlzdCA9IHRydWVcblxuXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuc3RhdGUuc2VvRnJpZW5kbHkpIHtcblxuICAgICAgICAgICAgdXJsID0gYCR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfWBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJzZWQucGFnZSkge1xuICAgICAgICAgICAgdXJsICs9IGAke2lzX3BhcmFtc19leGlzdCA/ICcmJyA6ICc/J31wYWdlPSR7cGFyc2VkLnBhZ2V9YFxuICAgICAgICAgICAgaXNfcGFyYW1zX2V4aXN0ID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYocGFyc2VkLnV0bV9zb3VyY2UpIHtcbiAgICAgICAgICAgIHVybCs9IGAke2lzX3BhcmFtc19leGlzdCA/ICcmJyA6ICc/J311dG1fc291cmNlPSR7cGFyc2VkLnV0bV9zb3VyY2V8fCcnfWBcbiAgICAgICAgICAgIGlzX3BhcmFtc19leGlzdCA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHBhcnNlZC51dG1fbWVkaXVtKSB7XG4gICAgICAgICAgICB1cmwrPSBgJHtpc19wYXJhbXNfZXhpc3QgPyAnJicgOiAnPyd9dXRtX21lZGl1bT0ke3BhcnNlZC51dG1fbWVkaXVtfHwnJ31gXG4gICAgICAgICAgICBpc19wYXJhbXNfZXhpc3QgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZihwYXJzZWQudXRtX2NhbXBhaWduKSB7XG4gICAgICAgICAgICB1cmwrPSBgJHtpc19wYXJhbXNfZXhpc3QgPyAnJicgOiAnPyd9dXRtX2NhbXBhaWduPSR7cGFyc2VkLnV0bV9jYW1wYWlnbnx8Jyd9YFxuICAgICAgICAgICAgaXNfcGFyYW1zX2V4aXN0ID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVybFxuICAgIH1cblxuICAgIGdlbmVyYXRlU2VhcmNoSWQodWlkX3N0cmluZykge1xuICAgICAgICAvL21ldGhvZCB0byBnZW5lcmF0ZSBzZWFyY2ggaWRcbiAgICAgICAgdWlkX3N0cmluZyA9ICd4eXl5eHh5eC14eHl4LTR4eHgteXh4eC14eHh5eXl4eHh4eHgnXG4gICAgICAgIHZhciBkdCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgdXVpZCA9IHVpZF9zdHJpbmcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgdmFyIHIgPSAoZHQgKyBNYXRoLnJhbmRvbSgpICogMTYpICUgMTYgfCAwO1xuICAgICAgICAgICAgZHQgPSBNYXRoLmZsb29yKGR0IC8gMTYpO1xuICAgICAgICAgICAgcmV0dXJuIChjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCkpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB1dWlkO1xuICAgIH1cblxuXHRnZXRNb3JlUmVzdWx0cygpe1xuXHRcdHRoaXMuZ2V0SXBkSG9zcGl0YWxMaXN0KHRoaXMucHJvcHMpXG5cdH1cblxuICAgIGdldE1ldGFUYWdzRGF0YShzZW9EYXRhKSB7XG4gICAgICAgIGxldCB0aXRsZSA9IFwiSG9zcGl0YWwgU2VhcmNoXCJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2VvRnJpZW5kbHkpIHtcbiAgICAgICAgICAgIHRpdGxlID0gXCJcIlxuICAgICAgICB9XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IFwiXCJcbiAgICAgICAgaWYgKHNlb0RhdGEpIHtcbiAgICAgICAgICAgIHRpdGxlID0gc2VvRGF0YS50aXRsZT9zZW9EYXRhLnRpdGxlOnRpdGxlXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA9IHNlb0RhdGEuZGVzY3JpcHRpb24gfHwgXCJcIlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiB9XG4gICAgfVxuXG5cdHJlbmRlcigpe1xuXHRcdGxldCB7IGhvc3BpdGFsX2xpc3QgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgbGV0IHVybCA9IGAke0NPTkZJRy5BUElfQkFTRV9VUkx9JHt0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lfWBcbiAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoLyZwYWdlPVxcZHsxLH0vLCBcIlwiKVxuICAgICAgICBsZXQgcGFnZSA9IFwiXCJcbiAgICAgICAgbGV0IGN1cnJfcGFnZSA9IHBhcnNlSW50KHRoaXMucHJvcHMucGFnZSlcbiAgICAgICAgbGV0IHByZXYgPSBcIlwiXG4gICAgICAgIGlmIChjdXJyX3BhZ2UgPiAxKSB7XG4gICAgICAgICAgICBwYWdlID0gYD9wYWdlPSR7Y3Vycl9wYWdlfWBcbiAgICAgICAgICAgIHByZXYgPSB1cmxcbiAgICAgICAgICAgIGlmIChjdXJyX3BhZ2UgPiAyKSB7XG4gICAgICAgICAgICAgICAgcHJldiArPSBgP3BhZ2U9JHtjdXJyX3BhZ2UgLSAxfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgbmV4dCA9IFwiXCJcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy5wcm9wcy5ob3NwaXRhbF9zZWFyY2hfcmVzdWx0cyAmJiB0aGlzLnByb3BzLmhvc3BpdGFsX3NlYXJjaF9yZXN1bHRzLmNvdW50P3BhcnNlSW50KHRoaXMucHJvcHMuaG9zcGl0YWxfc2VhcmNoX3Jlc3VsdHMuY291bnQpOjBcblxuICAgICAgICBpZiAoY291bnQgPiBjdXJyX3BhZ2UgKiAyMCkge1xuICAgICAgICAgICAgbmV4dCA9IHVybCArIGA/cGFnZT0ke2N1cnJfcGFnZSArIDF9YFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZG8gbm90IHNldCByZWwgbmV4dC9wcmV2IGZvciBub24gc2VvRnJpZW5kbHkgcGFnZXNcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnNlb0ZyaWVuZGx5KSB7XG4gICAgICAgICAgICBuZXh0ID0gXCJcIlxuICAgICAgICAgICAgcHJldiA9IFwiXCJcbiAgICAgICAgfVxuXG5cdFx0cmV0dXJuKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG4gICAgICAgICAgICAgICAgPEhlbG1ldFRhZ3MgdGFnc0RhdGE9e3tcbiAgICAgICAgICAgICAgICAgICAgY2Fub25pY2FsVXJsOiBgJHtDT05GSUcuQVBJX0JBU0VfVVJMfSR7dGhpcy5wcm9wcy5tYXRjaC51cmx9JHtwYWdlfWAsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmdldE1ldGFUYWdzRGF0YSh0aGlzLnByb3BzLmhvc3BpdGFsU2VhcmNoU2VvRGF0YSkudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmdldE1ldGFUYWdzRGF0YSh0aGlzLnByb3BzLmhvc3BpdGFsU2VhcmNoU2VvRGF0YSkuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIHByZXY6IHByZXYsXG4gICAgICAgICAgICAgICAgICAgIG5leHQ6IG5leHRcbiAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyIHNob3dTZWFyY2g9e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuSE9TUElUQUxfU0VBUkNIX0RBVEFfTE9BREVEP1xuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIHBhcmVudC1zZWN0aW9uIGJvb2stYXBwb2ludG1lbnQtc2VjdGlvbiBicmVhZGNydW1iLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaG9zcGl0YWxCcmVhZGNydW1iICYmIHRoaXMucHJvcHMuaG9zcGl0YWxCcmVhZGNydW1iLmxlbmd0aD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJyZWFkQ3J1bWJWaWV3IGJyZWFkY3J1bWI9e3RoaXMucHJvcHMuaG9zcGl0YWxCcmVhZGNydW1ifSB7Li4udGhpcy5wcm9wc30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0QmFyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNvbC1sZy03IGNlbnRlci1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGlja3lUb3BCYXJGaWx0ZXIgey4uLnRoaXMucHJvcHN9IGZldGNoTmV3UmVzdWx0cz17dGhpcy5nZXRNb3JlUmVzdWx0cy5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJpcGQtc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zcGl0YWxfbGlzdC5sZW5ndGg+MD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItcGFuZSBmYWRlXCIgaWQ9XCJuYXYtaG9zcGl0YWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXBkSG9zcGl0YWxMaXN0IHsuLi50aGlzLnByb3BzfSBnZXRJcGRIb3NwaXRhbExpc3Q9e3RoaXMuZ2V0SXBkSG9zcGl0YWxMaXN0LmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmlnaHRCYXIgZXh0cmFDbGFzcz1cIiBjaGF0LWZsb2F0LWJ0bi0yXCIgbXNnVGVtcGxhdGU9XCJnb2xkX2dlbmVyYWxfdGVtcGxhdGVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA6PExvYWRlciAvPlxuICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5ob3NwaXRhbF9ib3R0b21fY29udGVudCAmJiB0aGlzLnByb3BzLmhvc3BpdGFsX2JvdHRvbV9jb250ZW50Lmxlbmd0aCAmJiBwYXJzZUludCh0aGlzLnByb3BzLnBhZ2UpID09IDEgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIG1ydC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1yZXN1bHQtY2FyZC1jb2xscGFzZVwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGhpcy5wcm9wcy5ob3NwaXRhbF9ib3R0b21fY29udGVudCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG5cdFx0ICAgICAgICAgICAgPEZvb3RlciAvPlxuXHQgICAgICAgICAgIFx0PC9kaXY+XG5cblx0XHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBJcGRIb3NwaXRhbFZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVzdWx0Q291bnQgZnJvbSAnLi9yZXN1bHRfY291bnQuanMnXG5pbXBvcnQgUmFuZ2UgZnJvbSAncmMtc2xpZGVyL2xpYi9SYW5nZSc7XG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuXG5jbGFzcyBTdGlja3lGaWx0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR0b2dnbGVGaWx0ZXJQb3B1cCA6ZmFsc2UsXG5cdFx0XHRsYXN0U2VsZWN0ZWRQcm92aWRlcklkczogW10sXG5cdFx0XHRsYXN0U2VsZWN0ZWREaXN0YW5jZTogWzAsIDI1XSxcblx0XHRcdHByb3ZpZGVyX2lkczogW10sXG5cdFx0XHRkaXN0YW5jZTogWzAsIDI1XVxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcblx0XHR0aGlzLnNldFN0YXRlKHtwcm92aWRlcl9pZHM6IG5leHRQcm9wcy5maWx0ZXJDcml0ZXJpYS5wcm92aWRlcl9pZHMsIGxhc3RTZWxlY3RlZFByb3ZpZGVySWRzOiBuZXh0UHJvcHMuZmlsdGVyQ3JpdGVyaWEucHJvdmlkZXJfaWRzLCBkaXN0YW5jZTogbmV4dFByb3BzLmZpbHRlckNyaXRlcmlhLmRpc3RhbmNlLCBsYXN0U2VsZWN0ZWREaXN0YW5jZTogbmV4dFByb3BzLmZpbHRlckNyaXRlcmlhLmRpc3RhbmNlfSlcblx0fVxuXG5cdGFwcGx5RmlsdGVycygpe1xuXHRcdGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXHRcdGxldCBmaWx0ZXJDcml0ZXJpYSA9ICB7XG5cdFx0XHRkaXN0YW5jZTogdGhpcy5zdGF0ZS5kaXN0YW5jZSxcblx0XHRcdHByb3ZpZGVyX2lkczogdGhpcy5zdGF0ZS5wcm92aWRlcl9pZHNcblx0XHR9XG5cblx0XHRsZXQgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSXBkSG9zcGl0YWxTZWFyY2hGaWx0ZXJBcHBsaWVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnaXBkLWhvc3BpdGFsLXNlYXJjaC1maWx0ZXItYXBwbGllZCcsICdtaW5EaXN0YW5jZSc6dGhpcy5zdGF0ZS5kaXN0YW5jZVswXSwgJ21heERpc3RhbmNlJzogdGhpcy5zdGF0ZS5kaXN0YW5jZVsxXSwgJ3Byb3ZpZGVyX2lkcyc6IHRoaXMuc3RhdGUucHJvdmlkZXJfaWRzLmpvaW4oJywnKSBcbiAgICAgICAgfVxuXG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG5cblx0XHR0aGlzLnNldFN0YXRlKHtsYXN0U2VsZWN0ZWRQcm92aWRlcklkczogdGhpcy5zdGF0ZS5wcm92aWRlcl9pZHMsIGxhc3RTZWxlY3RlZERpc3RhbmNlOiB0aGlzLnN0YXRlLmRpc3RhbmNlfSlcblx0XHRsZXQgc2VhcmNoX2lkX2RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLnNlYXJjaF9pZF9kYXRhKVxuXG5cdFx0aWYgKHRoaXMucHJvcHMuc2VhcmNoX2lkX2RhdGEgJiYgdGhpcy5wcm9wcy5zZWFyY2hfaWRfZGF0YVtwYXJzZWQuc2VhcmNoX2lkXSkge1xuICAgICAgICAgICAgc2VhcmNoX2lkX2RhdGFbcGFyc2VkLnNlYXJjaF9pZF0uZmlsdGVyQ3JpdGVyaWEgPSBmaWx0ZXJDcml0ZXJpYVxuICAgICAgICAgICAgc2VhcmNoX2lkX2RhdGFbcGFyc2VkLnNlYXJjaF9pZF0ucGFnZSA9IDFcbiAgICAgICAgfVxuXG5cdFx0dGhpcy5wcm9wcy5tZXJnZUlwZENyaXRlcmlhKHtcblx0XHRcdGZpbHRlckNyaXRlcmlhOmZpbHRlckNyaXRlcmlhLCBzZWFyY2hfaWRfZGF0YTogc2VhcmNoX2lkX2RhdGEsIHBhZ2U6IDFcblx0XHR9KVxuXHRcdHNldFRpbWVvdXQoKCk9Pntcblx0XHRcdHRoaXMucHJvcHMuZmV0Y2hOZXdSZXN1bHRzKClcblx0XHRcdHRoaXMuc2V0U3RhdGUoe3RvZ2dsZUZpbHRlclBvcHVwOiBmYWxzZX0pXG5cdFx0fSwxMDApXG5cdH1cblxuXHR0b2dnbGVQcm92aWRlckZpbHRlcihpZCl7XG5cdFx0bGV0IHByb3ZpZGVyX2lkcyA9IFtdIFxuXHRcdGxldCBmb3VuZCA9IGZhbHNlXG5cdFx0cHJvdmlkZXJfaWRzID0gdGhpcy5zdGF0ZS5wcm92aWRlcl9pZHMuZmlsdGVyKCh4KSA9PiB7XG5cdFx0XHRpZih4PT1pZCl7XG5cdFx0XHRcdGZvdW5kID0gdHJ1ZVxuXHRcdFx0XHRyZXR1cm4gZmFsc2Vcblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlXG5cdFx0fSlcblxuXHRcdGlmKCFmb3VuZCl7XG5cdFx0XHRwcm92aWRlcl9pZHMucHVzaChpZClcblx0XHR9XG5cblx0XHR0aGlzLnNldFN0YXRlKHtwcm92aWRlcl9pZHM6IHByb3ZpZGVyX2lkc30pXG5cdH1cblxuXHRjbG9zZUZpbHRlcnNQb3BVcCgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe3RvZ2dsZUZpbHRlclBvcHVwOiBmYWxzZSwgcHJvdmlkZXJfaWRzOiB0aGlzLnN0YXRlLmxhc3RTZWxlY3RlZFByb3ZpZGVySWRzLCBkaXN0YW5jZTogdGhpcy5zdGF0ZS5sYXN0U2VsZWN0ZWREaXN0YW5jZX0pXG5cdH1cblxuXHRoYW5kbGVSYW5nZSh0eXBlLCByYW5nZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFt0eXBlXTogcmFuZ2VcbiAgICAgICAgfSlcbiAgICB9XG5cdHJlbmRlcigpe1xuXHRcdGxldCBzZW9EYXRhID0gdGhpcy5wcm9wcy5ob3NwaXRhbFNlYXJjaFNlb0RhdGFcblx0XHRsZXQgeyBob3NwaXRhbF9zZWFyY2hfcmVzdWx0cyB9ID0gdGhpcy5wcm9wc1xuXHRcdGxldCBoZWFsdGhfaW5zdXJhbmNlX3Byb3ZpZGVyID0gW11cblxuXHRcdGlmKGhvc3BpdGFsX3NlYXJjaF9yZXN1bHRzICYmIGhvc3BpdGFsX3NlYXJjaF9yZXN1bHRzLmluc3VyYW5jZV9wcm92aWRlcnMgJiYgaG9zcGl0YWxfc2VhcmNoX3Jlc3VsdHMuaW5zdXJhbmNlX3Byb3ZpZGVycy5sZW5ndGgpe1xuXG5cdFx0XHRpZihob3NwaXRhbF9zZWFyY2hfcmVzdWx0cy5pbnN1cmFuY2VfcHJvdmlkZXJzLmxlbmd0aCA+NCAmJiB0aGlzLnN0YXRlLnNob3dNb3JlUHJvdmlkZXJzKXtcblx0XHRcdFx0aGVhbHRoX2luc3VyYW5jZV9wcm92aWRlciA9IGhvc3BpdGFsX3NlYXJjaF9yZXN1bHRzLmluc3VyYW5jZV9wcm92aWRlcnNcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRoZWFsdGhfaW5zdXJhbmNlX3Byb3ZpZGVyID0gaG9zcGl0YWxfc2VhcmNoX3Jlc3VsdHMuaW5zdXJhbmNlX3Byb3ZpZGVycy5zbGljZSgwLDMpXHRcblx0XHRcdH1cblx0XHRcdFxuXG5cdFx0fVxuXHRcdHJldHVybihcblx0XHRcdDxkaXY+XG5cdFx0XHRcblx0XHQgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInN0aWNrLXBybnRcIj5cblx0XHQgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNrLWl0XCI+XG5cdFx0XHQgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWZpbHRlci10YWItY29udGFpbmVyXCI+XG5cdFx0XHQgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwidG9wLWZpbHRlci10YWJzLXNlbGVjdFwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL2NwL2Fzc2V0cy9pbWcvc29ydC5zdmdcIiBzdHlsZT17eyB3aWR0aDogJzE4cHgnLCBtYXJnaW5SaWdodDogJzVweCcgfX0gLz48c3Bhbj5Tb3J0PC9zcGFuPjwvZGl2PiovfVxuXHRcdFx0ICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1maWx0ZXItdGFicy1zZWxlY3RcIiBvbkNsaWNrPXsoKT0+e1xuXHRcdFx0ICAgICAgICAgICAgICBcdGxldCBndG1EYXRhID0ge1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdJcGRIb3NwaXRhbFNlYXJjaEZpbHRlckNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdpcGQtaG9zcGl0YWwtc2VhcmNoLWZpbHRlci1jbGlja2VkJ1xuXHRcdFx0XHRcdFx0ICAgICAgICB9XG5cdFx0XHRcdFx0XHQgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG5cblx0XHRcdCAgICAgICAgICAgICAgXHR0aGlzLnNldFN0YXRlKHt0b2dnbGVGaWx0ZXJQb3B1cDogdHJ1ZX0pXG5cdFx0XHQgICAgICAgICAgICAgIH19PjxpbWcgc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL2NwL2Fzc2V0cy9pbWcvZmlsdGVyLnN2Z1wiIHN0eWxlPXt7IHdpZHRoOiAnMThweCcsIG1hcmdpblJpZ2h0OiAnNXB4JyB9fSAvPjxzcGFuPkZpbHRlcjwvc3Bhbj48L2Rpdj5cblx0XHRcdCAgICAgICAgICAgPC9kaXY+XG5cdFx0ICAgICAgICAgICA8L2Rpdj5cblx0XHQgICAgICAgICAgIDxSZXN1bHRDb3VudCB7Li4udGhpcy5wcm9wc30gYXBwbHlGaWx0ZXJzPXt0aGlzLmFwcGx5RmlsdGVycy5iaW5kKHRoaXMpfSBzZW9EYXRhPXtzZW9EYXRhfSBsYWJfY2FyZD17ZmFsc2V9IHNlb0ZyaWVuZGx5PXtmYWxzZX0vPlxuXHRcdCAgICAgICAgPC9zZWN0aW9uPlxuXG5cdFx0ICAgICAgICB7XG5cdFx0ICAgICAgICBcdHRoaXMuc3RhdGUudG9nZ2xlRmlsdGVyUG9wdXA/XG5cdFx0ICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiaXBkLXNlY3Rpb25cIj5cblx0XHRcdCAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1vdmVybGF5XCIgb25DbGljaz17dGhpcy5jbG9zZUZpbHRlcnNQb3BVcC5iaW5kKHRoaXMpfT48L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1wb3B1cCBobHRoLWlucy1wb3BcIj5cblx0ICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyb3NzLWJ0blwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL2NwL2Fzc2V0cy9pbWcvaWNvbnMvY2xvc2UucG5nXCIgYWx0PVwiXCIgb25DbGljaz17dGhpcy5jbG9zZUZpbHRlcnNQb3BVcC5iaW5kKHRoaXMpfS8+PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3AtaGVhZCB0ZXh0LWNlbnRlclwiPkZpbHRlcnM8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cImRpc3RhbmNlLXNsaWRlclwiPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5EaXN0YW5jZTwvc3Bhbj5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3JuZy10eHRcIj4wIEttIHRvIDE1IEttPC9zcGFuPlxuXHQgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiovfVxuXG5cdCAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlclJvdyBkaXN0YW5jZS1zbGlkZXItYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0bFwiPkRpc3RhbmNlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHIgb3JuZy10eHRcIj4ge3RoaXMuc3RhdGUuZGlzdGFuY2VbMF19IEttIHRvIHt0aGlzLnN0YXRlLmRpc3RhbmNlWzFdfSBLbSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibCBcIj4wIEttPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJcIj41MCBLbTwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17NTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGlzdGFuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17Mn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUmFuZ2UuYmluZCh0aGlzLCAnZGlzdGFuY2UnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cblxuXHQgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwiZGlzdGFuY2Utc2xpZGVyLWJhclwiPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj1cIjFcIiBtYXg9XCI1MFwiIHZhbHVlPVwiMjBcIiBjbGFzc05hbWU9XCJkaXMtc2xpZGVyXCIgLz4gXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhbmdlLXZhbHVlXCI+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjAgS208L3NwYW4+ICBcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+NTAgS208L3NwYW4+ICBcblx0ICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiovfVxuXHQgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxuXG5cdCAgICAgICAgICAgICAgICAgICAgICAge1xuXHQgICAgICAgICAgICAgICAgICAgICAgIFx0aGVhbHRoX2luc3VyYW5jZV9wcm92aWRlci5sZW5ndGggJiYgZmFsc2U/XG5cdCAgICAgICAgICAgICAgICAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1saXN0aW5nXCI+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3AtaGVhZFwiPkhlYWx0aCBJbnN1cmFuY2UgUHJvdmlkZXJzPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInJhbmdlLXNsaWRlci11bFwiPlxuXHQgICAgICAgICAgICAgICAgICAgICAgIFx0XHRcdHtcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICBcdGhlYWx0aF9pbnN1cmFuY2VfcHJvdmlkZXIubGVuZ3RoP1xuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIFx0aGVhbHRoX2luc3VyYW5jZV9wcm92aWRlci5tYXAoKHByb3ZpZGVyLCBpKSA9PiB7XG5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgXHRcdFx0XHRyZXR1cm4gPGxpIGtleT17aX0+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2stYnhcIj57cHJvdmlkZXIubmFtZX0gXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwib25cIiBjaGVja2VkPXt0aGlzLnN0YXRlLnByb3ZpZGVyX2lkcy5pbmRleE9mKHByb3ZpZGVyLmlkKT4tMT90cnVlOmZhbHNlfSBvbkNoYW5nZT17dGhpcy50b2dnbGVQcm92aWRlckZpbHRlci5iaW5kKHRoaXMsIHByb3ZpZGVyLmlkKX0vPlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiPjwvc3Bhbj5cblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgXHRcdFx0fSlcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgXHRcdDonJ1xuXHRcdFx0ICAgICAgICAgICAgICAgICAgICBcdH0gICAgICAgICAgXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAge1xuXHQgICAgICAgICAgICAgICAgICAgIFx0XHRoZWFsdGhfaW5zdXJhbmNlX3Byb3ZpZGVyLmxlbmd0aCA+NCAmJiAhdGhpcy5zdGF0ZS5zaG93TW9yZVByb3ZpZGVycz9cblx0XHQgICAgICAgICAgICAgICAgICAgIFx0XHQ8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIG9uQ2xpY2s9eygpPT50aGlzLnNldFN0YXRlKHt0b2dnbGVGaWx0ZXJQb3B1cDogdHJ1ZX0pfSBjbGFzc05hbWU9XCJidG4tdmlldy1ob3NwaXRhbCBidG4tc2hvdy1tb3JlXCI+U2hvdyBNb3JlPC9hPlx0XG5cdFx0ICAgICAgICAgICAgICAgICAgICBcdFx0OicnXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIH1cblx0XHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdCAgICAgICAgICAgICAgICAgICAgOicnXG5cdCAgICAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tc2VhcmNoLWRpdiBidG4tYXBwbHktZGl2XCI+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzTmFtZT1cImJ0bi1zZWFyY2hcIiBvbkNsaWNrPXt0aGlzLmFwcGx5RmlsdGVycy5iaW5kKHRoaXMpfT5BcHBseTwvYT5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA6Jydcblx0XHQgICAgICAgIH1cblx0XHQgICAgPC9kaXY+XG5cdFx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RpY2t5RmlsdGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUmFuZ2UgZnJvbSAncmMtc2xpZGVyL2xpYi9SYW5nZSc7XG5pbXBvcnQgeyBDb3B5VG9DbGlwYm9hcmQgfSBmcm9tICdyZWFjdC1jb3B5LXRvLWNsaXBib2FyZCc7XG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBMb2NhdGlvbkVsZW1lbnRzIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvY29tbW9ucy9sb2NhdGlvbkVsZW1lbnRzJ1xuaW1wb3J0IExvY2F0aW9uUG9wdXAgZnJvbSAnLi4vLi4vY29udGFpbmVycy9jb21tb25zL2xvY2F0aW9uUG9wdXAnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uL2hlbHBlcnMvZ3RtJ1xuXG5jbGFzcyBUb3BCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2hvcnRVUkw6IFwiXCIsXG4gICAgICAgICAgICBzaG93TG9jYXRpb25Qb3B1cDogZmFsc2UsXG4gICAgICAgICAgICBvdmVybGF5VmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICBzaG93UG9wdXBDb250YWluZXI6IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnByb3BzLmZpbHRlckNyaXRlcmlhIH0pXG4gICAgICAgIGlmIChwcm9wcy5sb2NhdGlvblR5cGUgJiYgIXByb3BzLmxvY2F0aW9uVHlwZS5pbmNsdWRlcyhcImdlb1wiKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKChwcm9wcy5zZW9EYXRhICYmIHByb3BzLnNlb0RhdGEubG9jYXRpb24pIHx8IHByb3BzLnNlb0ZyaWVuZGx5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiAhPSB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dMb2NhdGlvblBvcHVwOiB0cnVlLCBvdmVybGF5VmlzaWJsZTogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5wcm9wcy5maWx0ZXJDcml0ZXJpYSB9KVxuICAgICAgICAvLyB0aGlzLnNob3J0ZW5VcmwoKVxuICAgICAgICBpZiAoKHRoaXMucHJvcHMuc2VvRGF0YSAmJiB0aGlzLnByb3BzLnNlb0RhdGEubG9jYXRpb24pIHx8IHRoaXMucHJvcHMuc2VvRnJpZW5kbHkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9jYXRpb25Qb3B1cDogZmFsc2UgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uVHlwZSAmJiB0aGlzLnByb3BzLmxvY2F0aW9uVHlwZS5pbmNsdWRlcyhcImdlb1wiKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9jYXRpb25Qb3B1cDogdHJ1ZSwgb3ZlcmxheVZpc2libGU6IHRydWUgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUlucHV0KGUpIHtcbiAgICAgICAgbGV0IGV2TmFtZSA9IGUudGFyZ2V0Lm5hbWVcbiAgICAgICAgbGV0IGNoZWNrZWQgPSBlLnRhcmdldC5jaGVja2VkXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgW2V2TmFtZV06IGNoZWNrZWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBnZXRDcml0ZXJpYVN0cmluZyhzZWxlY3RlZENyaXRlcmlhcykge1xuICAgICAgICBpZiAoc2VsZWN0ZWRDcml0ZXJpYXMgJiYgc2VsZWN0ZWRDcml0ZXJpYXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRQcm9jZWR1cmVDYXRlZ29yeSA9IHNlbGVjdGVkQ3JpdGVyaWFzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAncHJvY2VkdXJlc19jYXRlZ29yeScpXG4gICAgICAgICAgICBsZXQgcHJvY2VkdXJlcyA9IHNlbGVjdGVkQ3JpdGVyaWFzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAncHJvY2VkdXJlcycpXG5cbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZENyaXRlcmlhcy5yZWR1Y2UoKGZpbmFsLCBjdXJyLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGkgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBmaW5hbCArPSAnLCAnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsICs9IGAke2N1cnIubmFtZT9jdXJyLm5hbWU6Jyd9YFxuICAgICAgICAgICAgICAgIHJldHVybiBmaW5hbFxuICAgICAgICAgICAgfSwgXCJcIilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3J0ZW5VcmwoKSB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZiArICcmZm9yY2VfbG9jYXRpb249dHJ1ZSdcbiAgICAgICAgICAgIHRoaXMucHJvcHMudXJsU2hvcnRuZXIodXJsLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3J0VVJMOiBkYXRhLnRpbnlfdXJsIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG92ZXJsYXlDbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG92ZXJsYXlWaXNpYmxlOiBmYWxzZSwgc2VhcmNoQ2l0aWVzOiBbXSB9KTtcbiAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uX2VsZW1lbnQnKSl7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb25fZWxlbWVudCcpLnN0eWxlLnpJbmRleCA9JzAnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlTG9jYXRpb25Qb3B1cCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICBwb3B1cENvbnRhaW5lcigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dQb3B1cENvbnRhaW5lcjogZmFsc2UsIHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICBnb1RvTG9jYXRpb24oKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2VhcmNoQ2l0aWVzOiBbXVxuICAgICAgICB9KVxuICAgICAgICBsZXQgcmVkaXJlY3RfdG8gPSBcIlwiXG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJ3NwdGNpdCcpIHx8IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygnc3B0bGl0Y2l0JykpIHtcbiAgICAgICAgICAgIHJlZGlyZWN0X3RvID0gXCIvb3BkL3NlYXJjaHJlc3VsdHNcIlxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxvY2F0aW9uX3VybCA9ICcvbG9jYXRpb25zZWFyY2gnXG4gICAgICAgIGlmIChyZWRpcmVjdF90bykge1xuICAgICAgICAgICAgbG9jYXRpb25fdXJsICs9IGA/cmVkaXJlY3RfdG89JHtyZWRpcmVjdF90b31gXG4gICAgICAgIH1cbiAgICAgICAgLy90aGlzLnByb3BzLnNldE5leHRTZWFyY2hDcml0ZXJpYSgpXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NoYW5nZUxvY2F0aW9uSXBkUmVzdWx0c1BvcFVwJywgJ0FjdGlvbic6ICdjaGFuZ2UtbG9jYXRpb24tZG9jdG9yLXJlc3VsdHMtUG9wVXAnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjaGFuZ2UtbG9jYXRpb24tZG9jdG9yLXJlc3VsdHMtUG9wVXAnLCAndXJsJzogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2gobG9jYXRpb25fdXJsKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgY3JpdGVyaWFTdHIgPSB0aGlzLmdldENyaXRlcmlhU3RyaW5nKHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMpXG4gICAgICAgIGxldCBsb2NhdGlvbk5hbWUgPSBcIlwiXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLmZvcm1hdHRlZF9hZGRyZXNzKSB7XG4gICAgICAgICAgICBsb2NhdGlvbk5hbWUgPSB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24uZm9ybWF0dGVkX2FkZHJlc3NcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZW9EYXRhICYmIHRoaXMucHJvcHMuc2VvRGF0YS5sb2NhdGlvbikge1xuICAgICAgICAgICAgbG9jYXRpb25OYW1lID0gdGhpcy5wcm9wcy5zZW9EYXRhLmxvY2F0aW9uXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiIGlkPVwiZmlsdGVyLXNjcm9sbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1wZG5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uLWZpbHRlciBkLW5vbmUgZC1tZC1ibG9jayBhbGlnblNoYXJlQnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaW5saW5lLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1ub25lIGQtbWQtaW5saW5lLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9e3RoaXMuc2hvcnRlblVybC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvdXJsLXNob3J0LnN2Z1wifSBzdHlsZT17eyB3aWR0aDogODAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3J0VVJMID8gPGRpdiBjbGFzc05hbWU9XCJzaGFyZUxpbmtwb3B1cE92ZXJsYXlcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvcnRVUkw6IFwiXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXJlTGlua3BvcHVwXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5zaG9ydFVSTH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZCB0ZXh0PXt0aGlzLnN0YXRlLnNob3J0VVJMfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJTaG9ydGVuZWQgVVJMIENvcGllZC5cIiB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG9ydFVSTDogXCJcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2hyZWxpbmtCdG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+Q29weTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaG9zcGl0YWxfc2VhcmNoX3Jlc3VsdHMgJiYgdGhpcy5wcm9wcy5ob3NwaXRhbF9zZWFyY2hfcmVzdWx0cy5jb3VudD90aGlzLnByb3BzLmhvc3BpdGFsX3NlYXJjaF9yZXN1bHRzLmNvdW50OiAnTm8nfSByZXN1bHRzIGZvdW5kIHtjcml0ZXJpYVN0ciA/IFwiZm9yIEJlc3QgXCIgOiBcImZvciBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzZWFyY2gtcmVzdWx0LWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmdy03MDBcIj4ge2Ake2NyaXRlcmlhU3RyP2NyaXRlcmlhU3RyOicnfSBIb3NwaXRhbHNgfSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdC1zcGFuXCIgb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ29Ub0xvY2F0aW9uLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dMb2NhdGlvblBvcHVwICYmIGZhbHNlID8gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGxvY2F0aW9uTmFtZSA/IDxzcGFuIGNsYXNzTmFtZT1cImxvY2F0aW9uLWVkaXRcIiBzdHlsZT17eyBjb2xvcjogJyNmNjg0M2EnLCBjdXJzb3I6ICdwb2ludGVyJyB9fT57YCBpbiAke2xvY2F0aW9uTmFtZX1gfTwvc3Bhbj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6IDE1LCBoZWlnaHQ6IDE1LCBtYXJnaW5MZWZ0OiA3LCBjdXJzb3I6ICdwb2ludGVyJyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9lZGl0LnN2Z1wifSBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdvVG9Mb2NhdGlvbi5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93TG9jYXRpb25Qb3B1cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGluaWNfY2FyZCAmJiB0aGlzLnN0YXRlLnNob3dQb3B1cENvbnRhaW5lciA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhdGlvblBvcHVwIHsuLi50aGlzLnByb3BzfSBvblJlZj17cmVmID0+ICh0aGlzLmNoaWxkID0gcmVmKX0gcmVzdWx0VHlwZT0nbGlzdCcgaXNUb3BiYXI9e3RydWV9IGhpZGVMb2NhdGlvblBvcHVwPXsoKSA9PiB0aGlzLmhpZGVMb2NhdGlvblBvcHVwKCl9IGxvY2F0aW9uTmFtZT17bG9jYXRpb25OYW1lfSBjcml0ZXJpYVN0cmluZz17Y3JpdGVyaWFTdHJ9IHBvcHVwQ29udGFpbmVyPXsoKSA9PiB0aGlzLnBvcHVwQ29udGFpbmVyKCl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPExvY2F0aW9uRWxlbWVudHMgey4uLnRoaXMucHJvcHN9IG9uUmVmPXtyZWYgPT4gKHRoaXMuY2hpbGQgPSByZWYpfSByZXN1bHRUeXBlPSdsaXN0JyBpc1RvcGJhcj17dHJ1ZX0gaGlkZUxvY2F0aW9uUG9wdXA9eygpID0+IHRoaXMuaGlkZUxvY2F0aW9uUG9wdXAoKX0gbG9jYXRpb25OYW1lPXtsb2NhdGlvbk5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93TG9jYXRpb25Qb3B1cCAmJiB0aGlzLnN0YXRlLm92ZXJsYXlWaXNpYmxlICYmICF0aGlzLnByb3BzLmNsaW5pY19jYXJkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvY2F0aW9uUG9wdXAtb3ZlcmxheVwiIG9uQ2xpY2s9eygpID0+IHRoaXMub3ZlcmxheUNsaWNrKCl9ID48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dMb2NhdGlvblBvcHVwICYmIHRoaXMucHJvcHMuY2xpbmljX2NhcmQgJiYgdGhpcy5zdGF0ZS5zaG93UG9wdXBDb250YWluZXIgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXBDb250YWluZXItb3ZlcmxheVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFRvcEJhclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgZ2V0SXBkSW5mbywgZ2V0SXBkSG9zcGl0YWxzLCBtZXJnZUlwZENyaXRlcmlhLCB1cmxTaG9ydG5lciwgc2V0SXBkU2VhcmNoSWQsIGdldElwZFNlYXJjaElkUmVzdWx0cyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgSXBkSG9zcGl0YWxTZWFyY2hWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaXBkL0lwZEhvc3BpdGFsU2VhcmNoVmlldy5qcydcbmltcG9ydCB7IEhvc3BpdGFsU2VhcmNoU3RhdGVCdWlsZGVyIH0gZnJvbSAnLi4vLi4vaGVscGVycy91cmx0b1N0YXRlJ1xuXG5cbmNsYXNzIElwZEhvc3BpdGFscyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0c3RhdGljIGxvYWREYXRhKHN0b3JlLCBtYXRjaCwgcXVlcnlQYXJhbXMgPSB7fSl7XG5cblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PiB7XG5cblx0XHRcdHRyeXtcblxuXHRcdFx0XHRsZXQgbG9jYXRpb25fbXMgPSBudWxsXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoLnVybC5pbmNsdWRlcygnbG9jYXRpb249JykpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25fbXMgPSBtYXRjaC51cmwuc3BsaXQoJ2xvY2F0aW9uPScpWzFdXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uX21zID0gcGFyc2VJbnQobG9jYXRpb25fbXMpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEhvc3BpdGFsU2VhcmNoU3RhdGVCdWlsZGVyKG51bGwsIHF1ZXJ5UGFyYW1zLCB0cnVlLCBsb2NhdGlvbl9tcykudGhlbigoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBcdHN0b3JlLmRpc3BhdGNoKG1lcmdlSXBkQ3JpdGVyaWEoc3RhdGUpKVxuXG4gICAgICAgICAgICAgICAgXHRsZXQgc2VhcmNoVXJsID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2gudXJsLmluY2x1ZGVzKCctaXBkaHAnKSB8fCBtYXRjaC51cmwuaW5jbHVkZXMoJy1oc3BjaXQnKSB8fCBtYXRjaC51cmwuaW5jbHVkZXMoJy1oc3BsaXRjaXQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoVXJsID0gbWF0Y2gudXJsLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYWdlID0gMVxuICAgICAgICAgICAgICAgICAgICBpZiAocXVlcnlQYXJhbXMucGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZSA9IHBhcnNlSW50KHF1ZXJ5UGFyYW1zLnBhZ2UpXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIFx0cmV0dXJuIHN0b3JlLmRpc3BhdGNoKGdldElwZEhvc3BpdGFscyhzdGF0ZSwgcGFnZSwgdHJ1ZSwgc2VhcmNoVXJsLCAobG9hZE1vcmUsIHJlc3VsdEZvdW5kKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBcdFx0aWYoIXJlc3VsdEZvdW5kKXtcbiAgICAgICAgICAgICAgICBcdFx0XHRyZXNvbHZlKHsgc3RhdHVzOiA0MDR9KVxuICAgICAgICAgICAgICAgIFx0XHR9ZWxzZXtcbiAgICAgICAgICAgICAgICBcdFx0XHRyZXNvbHZlKHt9KVxuICAgICAgICAgICAgICAgIFx0XHR9XG4gICAgICAgICAgICAgICAgXHR9KSlcblxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKT0+e1xuICAgICAgICAgICAgICAgIFx0cmVqZWN0KClcbiAgICAgICAgICAgICAgICB9KVxuXHRcdFx0fVxuXHRcdFx0Y2F0Y2ggKGUpIHtcblx0XHRcdFx0cmVqZWN0KClcblx0XHRcdH1cblx0XHR9KVxuXHRcdFxuXHR9XG5cblx0c3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgcm91dGVyOiAoKSA9PiBudWxsXG4gICAgfVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0aWYod2luZG93KXtcblx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLDApXG5cdFx0fVxuXHR9XG5cdHJlbmRlcigpe1xuXG5cdFx0cmV0dXJuKFxuXHRcdFx0XHQ8SXBkSG9zcGl0YWxTZWFyY2hWaWV3IHsuLi50aGlzLnByb3BzfSAvPlxuXHRcdFx0KVxuXHR9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuXHRcblx0Y29uc3Qge1xuICAgICAgICBzZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICBsb2NhdGlvblR5cGVcbiAgICB9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX09QRFxuXG5cdGNvbnN0IHtcblx0XHRmaWx0ZXJDcml0ZXJpYSxcblx0XHRwcm92aWRlcl9pZHMsXG5cdFx0aG9zcGl0YWxfbGlzdCxcblx0XHRob3NwaXRhbF9zZWFyY2hfcmVzdWx0cyxcblx0XHRIT1NQSVRBTF9EQVRBLFxuXHRcdG5leHRGaWx0ZXJDcml0ZXJpYSxcblx0XHRwYWdlLFxuXHRcdHNlYXJjaF9pZF9kYXRhLFxuXHRcdGNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLFxuXHRcdG5leHRTZWxlY3RlZENyaXRlcmlhcyxcblx0XHRmZXRjaE5ld1Jlc3VsdHMsXG5cdFx0Z2V0TmV3UmVzdWx0cyxcblx0XHRsb2NhdGlvbkZldGNoZWQsXG5cdFx0aG9zcGl0YWxTZWFyY2hTZW9EYXRhLFxuXHRcdGhvc3BpdGFsQ2Fub25pY2FsVXJsLFxuXHRcdGhvc3BpdGFsQnJlYWRjcnVtYixcblx0XHRob3NwaXRhbF9zZWFyY2hfY29udGVudCxcblx0XHRob3NwaXRhbF9ib3R0b21fY29udGVudCxcblx0XHRIT1NQSVRBTF9TRUFSQ0hfREFUQV9MT0FERURcblx0fSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9JUERcblxuXHRyZXR1cm4ge1xuXHRcdHNlbGVjdGVkTG9jYXRpb24sXG5cdFx0bG9jYXRpb25UeXBlLFxuXHRcdGZpbHRlckNyaXRlcmlhLFxuXHRcdHByb3ZpZGVyX2lkcyxcblx0XHRob3NwaXRhbF9saXN0LFxuXHRcdGhvc3BpdGFsX3NlYXJjaF9yZXN1bHRzLFxuXHRcdEhPU1BJVEFMX0RBVEEsXG5cdFx0bmV4dEZpbHRlckNyaXRlcmlhLFxuXHRcdHBhZ2UsXG5cdFx0c2VhcmNoX2lkX2RhdGEsXG5cdFx0Y29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMsXG5cdFx0bmV4dFNlbGVjdGVkQ3JpdGVyaWFzLFxuXHRcdGZldGNoTmV3UmVzdWx0cyxcblx0XHRnZXROZXdSZXN1bHRzLFxuXHRcdGxvY2F0aW9uRmV0Y2hlZCxcblx0XHRob3NwaXRhbFNlYXJjaFNlb0RhdGEsXG5cdFx0aG9zcGl0YWxDYW5vbmljYWxVcmwsXG5cdFx0aG9zcGl0YWxCcmVhZGNydW1iLFxuXHRcdGhvc3BpdGFsX3NlYXJjaF9jb250ZW50LFxuXHRcdGhvc3BpdGFsX2JvdHRvbV9jb250ZW50LFxuXHRcdEhPU1BJVEFMX1NFQVJDSF9EQVRBX0xPQURFRFxuXHR9XG59XG5cbmNvbnN0IG1hcERpc3B0YWNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuXG5cdHJldHVybntcblx0XHRnZXRJcGRIb3NwaXRhbHM6IChzdGF0ZSwgcGFnZSwgZnJvbVNlcnZlciwgc2VhcmNoQnlVcmwsIGNiKT0+IGRpc3BhdGNoKGdldElwZEhvc3BpdGFscyhzdGF0ZSwgcGFnZSwgZnJvbVNlcnZlciwgc2VhcmNoQnlVcmwsIGNiKSksXG5cdFx0bWVyZ2VJcGRDcml0ZXJpYTogKGZpbHRlckNyaXRlcmlhKT0+IGRpc3BhdGNoKG1lcmdlSXBkQ3JpdGVyaWEoZmlsdGVyQ3JpdGVyaWEpKSxcblx0XHR1cmxTaG9ydG5lcjogKHVybCwgY2IpID0+IGRpc3BhdGNoKHVybFNob3J0bmVyKHVybCwgY2IpKSxcblx0XHRzZXRJcGRTZWFyY2hJZDogKHNlYXJjaF9pZCwgZmlsdGVycywgcGFnZSkgPT4gZGlzcGF0Y2goc2V0SXBkU2VhcmNoSWQoc2VhcmNoX2lkLCBmaWx0ZXJzLCBwYWdlKSksXG5cdFx0Z2V0SXBkU2VhcmNoSWRSZXN1bHRzOiAoc2VhcmNoX2lkLCBkYXRhKSA9PiBkaXNwYXRjaChnZXRJcGRTZWFyY2hJZFJlc3VsdHMoc2VhcmNoX2lkLCBkYXRhKSlcblx0fVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3B0YWNoVG9Qcm9wcykoSXBkSG9zcGl0YWxzKSIsIi8vIC5kaXJuYW1lLCAuYmFzZW5hbWUsIGFuZCAuZXh0bmFtZSBtZXRob2RzIGFyZSBleHRyYWN0ZWQgZnJvbSBOb2RlLmpzIHY4LjExLjEsXG4vLyBiYWNrcG9ydGVkIGFuZCB0cmFuc3BsaXRlZCB3aXRoIEJhYmVsLCB3aXRoIGJhY2t3YXJkcy1jb21wYXQgZml4ZXNcblxuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIHJlc29sdmVzIC4gYW5kIC4uIGVsZW1lbnRzIGluIGEgcGF0aCBhcnJheSB3aXRoIGRpcmVjdG9yeSBuYW1lcyB0aGVyZVxuLy8gbXVzdCBiZSBubyBzbGFzaGVzLCBlbXB0eSBlbGVtZW50cywgb3IgZGV2aWNlIG5hbWVzIChjOlxcKSBpbiB0aGUgYXJyYXlcbi8vIChzbyBhbHNvIG5vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMgLSBpdCBkb2VzIG5vdCBkaXN0aW5ndWlzaFxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXkocGFydHMsIGFsbG93QWJvdmVSb290KSB7XG4gIC8vIGlmIHRoZSBwYXRoIHRyaWVzIHRvIGdvIGFib3ZlIHRoZSByb290LCBgdXBgIGVuZHMgdXAgPiAwXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXJ0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBsYXN0ID0gcGFydHNbaV07XG4gICAgaWYgKGxhc3QgPT09ICcuJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSBpZiAobGFzdCA9PT0gJy4uJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcbiAgaWYgKGFsbG93QWJvdmVSb290KSB7XG4gICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICBwYXJ0cy51bnNoaWZ0KCcuLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXNvbHZlZFBhdGggPSAnJyxcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTEgJiYgIXJlc29sdmVkQWJzb2x1dGU7IGktLSkge1xuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xuXG4gICAgLy8gU2tpcCBlbXB0eSBhbmQgaW52YWxpZCBlbnRyaWVzXG4gICAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGgucmVzb2x2ZSBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xuICAgIHJlc29sdmVkQWJzb2x1dGUgPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICB9XG5cbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHJlc29sdmVkUGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xufTtcblxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMubm9ybWFsaXplID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgaXNBYnNvbHV0ZSA9IGV4cG9ydHMuaXNBYnNvbHV0ZShwYXRoKSxcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBzdWJzdHIocGF0aCwgLTEpID09PSAnLyc7XG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFpc0Fic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XG4gICAgcGF0aCA9ICcuJztcbiAgfVxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XG4gICAgcGF0aCArPSAnLyc7XG4gIH1cblxuICByZXR1cm4gKGlzQWJzb2x1dGUgPyAnLycgOiAnJykgKyBwYXRoO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuam9pbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcGF0aHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICByZXR1cm4gZXhwb3J0cy5ub3JtYWxpemUoZmlsdGVyKHBhdGhzLCBmdW5jdGlvbihwLCBpbmRleCkge1xuICAgIGlmICh0eXBlb2YgcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfVxuICAgIHJldHVybiBwO1xuICB9KS5qb2luKCcvJykpO1xufTtcblxuXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XG4gIGZyb20gPSBleHBvcnRzLnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xuICB0byA9IGV4cG9ydHMucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xuXG4gIGZ1bmN0aW9uIHRyaW0oYXJyKSB7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICBmb3IgKDsgc3RhcnQgPCBhcnIubGVuZ3RoOyBzdGFydCsrKSB7XG4gICAgICBpZiAoYXJyW3N0YXJ0XSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSBhcnIubGVuZ3RoIC0gMTtcbiAgICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XG4gICAgICBpZiAoYXJyW2VuZF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoc3RhcnQgPiBlbmQpIHJldHVybiBbXTtcbiAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEpO1xuICB9XG5cbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW0oZnJvbS5zcGxpdCgnLycpKTtcbiAgdmFyIHRvUGFydHMgPSB0cmltKHRvLnNwbGl0KCcvJykpO1xuXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIG91dHB1dFBhcnRzID0gW107XG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xuICB9XG5cbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcblxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xufTtcblxuZXhwb3J0cy5zZXAgPSAnLyc7XG5leHBvcnRzLmRlbGltaXRlciA9ICc6JztcblxuZXhwb3J0cy5kaXJuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSByZXR1cm4gJy4nO1xuICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdCgwKTtcbiAgdmFyIGhhc1Jvb3QgPSBjb2RlID09PSA0NyAvKi8qLztcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAxOyAtLWkpIHtcbiAgICBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIGVuZCA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvclxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiBoYXNSb290ID8gJy8nIDogJy4nO1xuICBpZiAoaGFzUm9vdCAmJiBlbmQgPT09IDEpIHtcbiAgICAvLyByZXR1cm4gJy8vJztcbiAgICAvLyBCYWNrd2FyZHMtY29tcGF0IGZpeDpcbiAgICByZXR1cm4gJy8nO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKDAsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBiYXNlbmFtZShwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG5cbiAgdmFyIHN0YXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgdmFyIGk7XG5cbiAgZm9yIChpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIGlmIChwYXRoLmNoYXJDb2RlQXQoaSkgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gcGF0aCBjb21wb25lbnRcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiAnJztcbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnQsIGVuZCk7XG59XG5cbi8vIFVzZXMgYSBtaXhlZCBhcHByb2FjaCBmb3IgYmFja3dhcmRzLWNvbXBhdGliaWxpdHksIGFzIGV4dCBiZWhhdmlvciBjaGFuZ2VkXG4vLyBpbiBuZXcgTm9kZS5qcyB2ZXJzaW9ucywgc28gb25seSBiYXNlbmFtZSgpIGFib3ZlIGlzIGJhY2twb3J0ZWQgaGVyZVxuZXhwb3J0cy5iYXNlbmFtZSA9IGZ1bmN0aW9uIChwYXRoLCBleHQpIHtcbiAgdmFyIGYgPSBiYXNlbmFtZShwYXRoKTtcbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcbiAgICBmID0gZi5zdWJzdHIoMCwgZi5sZW5ndGggLSBleHQubGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gZjtcbn07XG5cbmV4cG9ydHMuZXh0bmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIHZhciBzdGFydERvdCA9IC0xO1xuICB2YXIgc3RhcnRQYXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgLy8gVHJhY2sgdGhlIHN0YXRlIG9mIGNoYXJhY3RlcnMgKGlmIGFueSkgd2Ugc2VlIGJlZm9yZSBvdXIgZmlyc3QgZG90IGFuZFxuICAvLyBhZnRlciBhbnkgcGF0aCBzZXBhcmF0b3Igd2UgZmluZFxuICB2YXIgcHJlRG90U3RhdGUgPSAwO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydFBhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gZXh0ZW5zaW9uXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gNDYgLyouKi8pIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBvdXIgZmlyc3QgZG90LCBtYXJrIGl0IGFzIHRoZSBzdGFydCBvZiBvdXIgZXh0ZW5zaW9uXG4gICAgICAgIGlmIChzdGFydERvdCA9PT0gLTEpXG4gICAgICAgICAgc3RhcnREb3QgPSBpO1xuICAgICAgICBlbHNlIGlmIChwcmVEb3RTdGF0ZSAhPT0gMSlcbiAgICAgICAgICBwcmVEb3RTdGF0ZSA9IDE7XG4gICAgfSBlbHNlIGlmIChzdGFydERvdCAhPT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgYW5kIG5vbi1wYXRoIHNlcGFyYXRvciBiZWZvcmUgb3VyIGRvdCwgc28gd2Ugc2hvdWxkXG4gICAgICAvLyBoYXZlIGEgZ29vZCBjaGFuY2UgYXQgaGF2aW5nIGEgbm9uLWVtcHR5IGV4dGVuc2lvblxuICAgICAgcHJlRG90U3RhdGUgPSAtMTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhcnREb3QgPT09IC0xIHx8IGVuZCA9PT0gLTEgfHxcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgY2hhcmFjdGVyIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgZG90XG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMCB8fFxuICAgICAgLy8gVGhlIChyaWdodC1tb3N0KSB0cmltbWVkIHBhdGggY29tcG9uZW50IGlzIGV4YWN0bHkgJy4uJ1xuICAgICAgcHJlRG90U3RhdGUgPT09IDEgJiYgc3RhcnREb3QgPT09IGVuZCAtIDEgJiYgc3RhcnREb3QgPT09IHN0YXJ0UGFydCArIDEpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnREb3QsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBmaWx0ZXIgKHhzLCBmKSB7XG4gICAgaWYgKHhzLmZpbHRlcikgcmV0dXJuIHhzLmZpbHRlcihmKTtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZih4c1tpXSwgaSwgeHMpKSByZXMucHVzaCh4c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8vIFN0cmluZy5wcm90b3R5cGUuc3Vic3RyIC0gbmVnYXRpdmUgaW5kZXggZG9uJ3Qgd29yayBpbiBJRThcbnZhciBzdWJzdHIgPSAnYWInLnN1YnN0cigtMSkgPT09ICdiJ1xuICAgID8gZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikgeyByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKSB9XG4gICAgOiBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7XG4gICAgICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gc3RyLmxlbmd0aCArIHN0YXJ0O1xuICAgICAgICByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKTtcbiAgICB9XG47XG4iLCJpbXBvcnQgX01lbW9yeVJvdXRlciBmcm9tIFwiLi9NZW1vcnlSb3V0ZXJcIjtcbmV4cG9ydCB7IF9NZW1vcnlSb3V0ZXIgYXMgTWVtb3J5Um91dGVyIH07XG5pbXBvcnQgX1Byb21wdCBmcm9tIFwiLi9Qcm9tcHRcIjtcbmV4cG9ydCB7IF9Qcm9tcHQgYXMgUHJvbXB0IH07XG5pbXBvcnQgX1JlZGlyZWN0IGZyb20gXCIuL1JlZGlyZWN0XCI7XG5leHBvcnQgeyBfUmVkaXJlY3QgYXMgUmVkaXJlY3QgfTtcbmltcG9ydCBfUm91dGUgZnJvbSBcIi4vUm91dGVcIjtcbmV4cG9ydCB7IF9Sb3V0ZSBhcyBSb3V0ZSB9O1xuaW1wb3J0IF9Sb3V0ZXIgZnJvbSBcIi4vUm91dGVyXCI7XG5leHBvcnQgeyBfUm91dGVyIGFzIFJvdXRlciB9O1xuaW1wb3J0IF9TdGF0aWNSb3V0ZXIgZnJvbSBcIi4vU3RhdGljUm91dGVyXCI7XG5leHBvcnQgeyBfU3RhdGljUm91dGVyIGFzIFN0YXRpY1JvdXRlciB9O1xuaW1wb3J0IF9Td2l0Y2ggZnJvbSBcIi4vU3dpdGNoXCI7XG5leHBvcnQgeyBfU3dpdGNoIGFzIFN3aXRjaCB9O1xuaW1wb3J0IF9nZW5lcmF0ZVBhdGggZnJvbSBcIi4vZ2VuZXJhdGVQYXRoXCI7XG5leHBvcnQgeyBfZ2VuZXJhdGVQYXRoIGFzIGdlbmVyYXRlUGF0aCB9O1xuaW1wb3J0IF9tYXRjaFBhdGggZnJvbSBcIi4vbWF0Y2hQYXRoXCI7XG5leHBvcnQgeyBfbWF0Y2hQYXRoIGFzIG1hdGNoUGF0aCB9O1xuaW1wb3J0IF93aXRoUm91dGVyIGZyb20gXCIuL3dpdGhSb3V0ZXJcIjtcbmV4cG9ydCB7IF93aXRoUm91dGVyIGFzIHdpdGhSb3V0ZXIgfTsiXSwic291cmNlUm9vdCI6IiJ9