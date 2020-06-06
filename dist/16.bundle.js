(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./dev/js/components/commons/criteriaSearch/CriteriaSearchView.js":
/*!************************************************************************!*\
  !*** ./dev/js/components/commons/criteriaSearch/CriteriaSearchView.js ***!
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

var _Loader = __webpack_require__(/*! ../../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _LeftBar = __webpack_require__(/*! ../LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _locationElements = __webpack_require__(/*! ../../../containers/commons/locationElements */ "./dev/js/containers/commons/locationElements.js");

var _locationElements2 = _interopRequireDefault(_locationElements);

var _FixedMobileFooter = __webpack_require__(/*! ../Home/FixedMobileFooter */ "./dev/js/components/commons/Home/FixedMobileFooter.js");

var _FixedMobileFooter2 = _interopRequireDefault(_FixedMobileFooter);

var _packageCompareStrip = __webpack_require__(/*! ../../diagnosis/searchPackages/packageCompare/packageCompareStrip.js */ "./dev/js/components/diagnosis/searchPackages/packageCompare/packageCompareStrip.js");

var _packageCompareStrip2 = _interopRequireDefault(_packageCompareStrip);

var _scrollHelper = __webpack_require__(/*! ../../../helpers/scrollHelper.js */ "./dev/js/helpers/scrollHelper.js");

var _scrollHelper2 = _interopRequireDefault(_scrollHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debouncer = function debouncer(fn, delay) {
    var timer = null;
    return function () {
        var _this = this;

        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.call(_this);
        }, delay);
    };
};

var CriteriaSearchView = function (_React$Component) {
    _inherits(CriteriaSearchView, _React$Component);

    function CriteriaSearchView(props) {
        _classCallCheck(this, CriteriaSearchView);

        var _this2 = _possibleConstructorReturn(this, (CriteriaSearchView.__proto__ || Object.getPrototypeOf(CriteriaSearchView)).call(this, props));

        _this2.state = {
            searchValue: '',
            searchResults: [],
            loading: false,
            searchCities: [],
            swipeDirection: ''
        };
        return _this2;
    }

    _createClass(CriteriaSearchView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            this.getSearchResults = debouncer(this.getSearchResults.bind(this), 500);
            var input = document.getElementById('topCriteriaSearch');
            // if coming back or refresh focus on search bar
            if (this.props.history.action === 'POP' && !this.props.location.search.includes('search')) {
                // input.focus()
            }
            if (document.getElementById('topCriteriaSearch')) {
                document.getElementById('topCriteriaSearch').addEventListener('focusin', function () {
                    _this3.setState({ searchCities: '' });
                });
            }
        }
    }, {
        key: 'getScrollView',
        value: function getScrollView(scrollView) {
            if (scrollView && scrollView.swipe) {
                //alert(scrollView.swipe)
                this.setState({ swipeDirection: scrollView.swipe });
            }
        }
    }, {
        key: 'inputHandler',
        value: function inputHandler(e) {
            this.setState({ searchValue: e.target.value });
            this.getSearchResults();
        }
    }, {
        key: 'getSearchResults',
        value: function getSearchResults() {
            var _this4 = this;

            this.setState({ loading: true });

            if (this.props.type == 'opd') {
                this.props.getOPDCriteriaResults(this.state.searchValue, function (searchResults) {
                    if (searchResults) {
                        searchResults.conditions = searchResults.conditions.map(function (x) {
                            return _extends({}, x, { type: 'condition' });
                        });
                        searchResults.specializations = searchResults.specializations.map(function (x) {
                            return _extends({}, x, { type: 'speciality' });
                        });
                        searchResults.procedures = searchResults.procedures.map(function (x) {
                            return _extends({}, x, { type: 'procedures' });
                        }) || [];

                        var results = [];
                        if (_this4.props.selected == 'opd') {
                            results = [{
                                title: 'Conditions',
                                values: searchResults.conditions
                            }, {
                                title: 'Specializations',
                                values: searchResults.specializations
                            }];
                        } else {
                            results = [{
                                title: 'Procedures',
                                values: searchResults.procedures
                            }];
                        }
                        _this4.setState({ searchResults: [].concat(_toConsumableArray(results)), loading: false });
                    }
                });
            } else {
                this.props.getDiagnosisCriteriaResults(this.state.searchValue, function (searchResults) {
                    if (searchResults) {
                        var tests = searchResults.tests.map(function (x) {
                            return _extends({}, x, { type: 'test' });
                        });
                        var results = [{
                            title: 'Tests',
                            values: tests
                        }];
                        _this4.setState({ searchResults: results, loading: false });
                    }
                });
            }
        }
    }, {
        key: 'addCriteria',
        value: function addCriteria(criteria, docType) {

            if (this.props.type == 'opd') {

                if (docType == 'Conditions') {
                    var data = {
                        'Category': 'ConsumerApp', 'Action': 'CommonConditionSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'common-condition-searched', 'selected': criteria.name || '', 'selectedId': criteria.id || ''
                    };
                    _gtm2.default.sendEvent({ data: data });
                } else if (docType == 'Specializations') {
                    var _data = {
                        'Category': 'ConsumerApp', 'Action': 'CommonSpecializationsSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'common-specializations-searched', 'selected': criteria.name || '', 'selectedId': criteria.id || ''
                    };
                    _gtm2.default.sendEvent({ data: _data });
                } else if (docType == 'Procedures') {
                    var _data2 = {
                        'Category': 'ConsumerApp', 'Action': 'CommonProceduresSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'common-procedures-searched', 'selected': criteria.name || '', 'selectedId': criteria.id || ''
                    };
                    _gtm2.default.sendEvent({ data: _data2 });
                }
                this.props.toggleOPDCriteria(criteria.type, criteria);
                this.setState({ searchValue: "" });
            } else {
                if (docType == 'Tests') {
                    var _data3 = {
                        'Category': 'ConsumerApp', 'Action': 'TestSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'test-searched', 'selected': criteria.name || '', 'selectedId': criteria.id || ''
                    };
                    _gtm2.default.sendEvent({ data: _data3 });
                }
                this.props.toggleDiagnosisCriteria(criteria.type, criteria);
                this.setState({ searchValue: "" });
            }
        }
    }, {
        key: 'getCityListLayout',
        value: function getCityListLayout() {
            var searchResults = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            if (searchResults.length) {
                this.setState({ searchCities: searchResults });
            } else {
                this.setState({ searchCities: [], searchValue: '' });
            }
        }
    }, {
        key: 'selectLocation',
        value: function selectLocation(city) {
            var _this5 = this;

            this.child.selectLocation(city, function () {
                _this5.setState({ searchCities: [] });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this,
                _React$createElement;

            var location = "Delhi";
            if (this.props.selectedLocation) {
                location = this.props.selectedLocation.formatted_address.slice(0, 25);
            }

            var rating = '';
            if (this.props.ratings) {
                rating = Math.ceil(this.props.ratings * 2) / 2;
            }

            var ratingArray = [];
            for (var i = 0; i < Math.floor(rating); i++) {
                ratingArray.push(_react2.default.createElement('img', { src: "/assets" + '/img/customer-icons/rating-star-filled.svg', className: 'rating-star' }));
            }

            if (rating != Math.floor(rating)) {
                ratingArray.push(_react2.default.createElement('img', { src: "/assets" + '/img/customer-icons/halfstar.svg', className: 'rating-star' }));
            }

            var emptyStars = Math.floor(5 - rating);
            if (emptyStars) {
                for (var _i = 0; _i < emptyStars; _i++) {
                    ratingArray.push(_react2.default.createElement('img', { src: "/assets" + '/img/customer-icons/rating-star-empty.svg', className: 'rating-star' }));
                }
            }

            var showPackageStrip = this.props.compare_packages && this.props.compare_packages.length > 0;
            var showSearch = true;
            // if(this.props.location &&  this.props.location.search && (this.props.location.search.includes('fromVip') || this.props.location.search.includes('fromGoldVip'))){
            //     showSearch = false
            // }
            return _react2.default.createElement(
                'div',
                { className: 'profile-body-wrap' },
                this.props.hideHeaderOnMobile ? _react2.default.createElement(
                    'div',
                    { className: 'hide-762' },
                    _react2.default.createElement(_DesktopProfileHeader2.default, { showSearch: showSearch, showPackageStrip: showPackageStrip || this.props.isPackage, new_fixed_header: 1, isSearchList: true })
                ) : _react2.default.createElement(_DesktopProfileHeader2.default, { showSearch: showSearch, showPackageStrip: showPackageStrip || this.props.isPackage, new_fixed_header: 1, isSearchList: true }),
                _react2.default.createElement(
                    'section',
                    { ref: 'scrollTarget', className: (!showSearch ? 'container container-top-margin' : 'container parent-section book-appointment-section hospital-view-section') + ' ' + (this.props.hideHeaderOnMobile ? " mp0" : "") + '  ' + (this.props.isPackage ? "pkgComapre" : "") + ' ' },
                    (typeof navigator === 'undefined' ? 'undefined' : _typeof(navigator)) == 'object' && navigator && navigator.userAgent && navigator.userAgent.includes('iPhone') ? '' : _react2.default.createElement(_scrollHelper2.default, { getScrollView: this.getScrollView.bind(this), target: this.refs && this.refs['scrollTarget'] ? this.refs['scrollTarget'] : '' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'row main-row parent-section-row' },
                        _react2.default.createElement(_LeftBar2.default, null),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12 col-md-7 col-lg-7 center-column pt-0' },

                            // goback decides if search bar will be shown
                            this.props.goBack ? "" : _react2.default.createElement(
                                'div',
                                { className: 'widget mb-10 mrng-top-20' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'search-top-container' },
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'srch-heading' },
                                        'Search'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'serch-nw-inputs-container' },
                                        _react2.default.createElement(_locationElements2.default, _extends({}, this.props, { onRef: function onRef(ref) {
                                                return _this6.child = ref;
                                            }, getCityListLayout: this.getCityListLayout.bind(this), resultType: 'search', fromCriteria: true, commonSearchPage: true })),
                                        this.state.searchCities.length > 0 ? "" : _react2.default.createElement(
                                            'div',
                                            null,
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'srch-radio-btns' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'dtl-radio' },
                                                    _react2.default.createElement(
                                                        'label',
                                                        { className: 'container-radio' },
                                                        'Doctor',
                                                        _react2.default.createElement('input', { type: 'radio', onChange: this.props.changeSelection.bind(this, 'opd'), checked: this.props.selected == 'opd', name: 'radio' }),
                                                        _react2.default.createElement('span', { className: 'doc-checkmark' })
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'dtl-radio' },
                                                    _react2.default.createElement(
                                                        'label',
                                                        { className: 'container-radio' },
                                                        'Test',
                                                        _react2.default.createElement('input', { type: 'radio', onChange: this.props.changeSelection.bind(this, 'lab'), checked: this.props.selected == 'lab', name: 'radio' }),
                                                        _react2.default.createElement('span', { className: 'doc-checkmark' })
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'dtl-radio' },
                                                    _react2.default.createElement(
                                                        'label',
                                                        { className: 'container-radio' },
                                                        'Dental Treatments',
                                                        _react2.default.createElement('input', { type: 'radio', onChange: this.props.changeSelection.bind(this, 'procedures'), checked: this.props.selected == 'procedures', name: 'radio' }),
                                                        _react2.default.createElement('span', { className: 'doc-checkmark' })
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'serch-nw-inputs' },
                                                _react2.default.createElement('input', (_React$createElement = { className: 'new-srch-doc-lab', autoComplete: 'off', placeholder: 'Search Doctors, Labs and Tests', onChange: this.inputHandler.bind(this), value: this.state.searchValue }, _defineProperty(_React$createElement, 'placeholder', this.props.title), _defineProperty(_React$createElement, 'onClick', function onClick() {
                                                    if (_this6.props.goBack) {
                                                        _this6.props.history.go(-1);
                                                    }
                                                }), _React$createElement)),
                                                _react2.default.createElement('img', { style: { width: '15px' }, className: 'srch-inp-img', src: "/assets" + "/img/shape-srch.svg" })
                                            )
                                        )
                                    )
                                )
                            ),
                            this.state.searchCities.length > 0 ? _react2.default.createElement(
                                'section',
                                null,
                                _react2.default.createElement(
                                    'div',
                                    { className: 'widget mb-10' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'common-search-container' },
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'srch-heading' },
                                            'Location Search'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'common-listing-cont' },
                                            _react2.default.createElement(
                                                'ul',
                                                null,
                                                this.state.searchCities.map(function (result, i) {
                                                    return _react2.default.createElement(
                                                        'li',
                                                        { key: i },
                                                        _react2.default.createElement(
                                                            'p',
                                                            { className: '', onClick: _this6.selectLocation.bind(_this6, result) },
                                                            result.description
                                                        )
                                                    );
                                                })
                                            )
                                        )
                                    )
                                )
                            ) : '',
                            this.state.searchCities.length > 0 ? "" : _react2.default.createElement(
                                'div',
                                null,
                                this.state.searchValue ? _react2.default.createElement(
                                    'section',
                                    null,
                                    this.state.searchResults.map(function (cat, j) {
                                        if (cat.values && cat.values.length) {
                                            return _react2.default.createElement(
                                                'div',
                                                { className: 'widget mb-10', key: j },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'common-search-container' },
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: 'srch-heading' },
                                                        cat.title
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'common-listing-cont' },
                                                        _react2.default.createElement(
                                                            'ul',
                                                            null,
                                                            cat.values.length < 1 ? _react2.default.createElement(
                                                                'li',
                                                                null,
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    { className: '' },
                                                                    'No Results Found ...'
                                                                )
                                                            ) : "",
                                                            cat.values.map(function (curr, i) {
                                                                return _react2.default.createElement(
                                                                    'li',
                                                                    { key: i },
                                                                    _react2.default.createElement(
                                                                        'p',
                                                                        { className: '', onClick: _this6.addCriteria.bind(_this6, curr, cat.title) },
                                                                        curr.name
                                                                    )
                                                                );
                                                            })
                                                        )
                                                    )
                                                )
                                            );
                                        } else {
                                            return "";
                                        }
                                    }),
                                    this.state.searchValue.length > 2 ? _react2.default.createElement(
                                        'div',
                                        null,
                                        this.props.type == 'opd' ? _react2.default.createElement(
                                            'div',
                                            { className: 'widget mb-10' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'common-search-container' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'common-listing-cont mt-0' },
                                                    _react2.default.createElement(
                                                        'ul',
                                                        null,
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: '', onClick: function onClick() {

                                                                        var data = {
                                                                            'Category': 'ConsumerApp', 'Action': 'DoctorNameSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-name-searched', 'DoctorNameSearched': _this6.state.searchValue || ''
                                                                        };
                                                                        _gtm2.default.sendEvent({ data: data });

                                                                        _this6.props.searchProceed(_this6.state.searchValue, "");
                                                                    } },
                                                                'Search Doctors by name : ',
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    { style: { color: '#000', fontWeight: 500 } },
                                                                    this.state.searchValue
                                                                )
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: '', onClick: function onClick() {

                                                                        var data = {
                                                                            'Category': 'ConsumerApp', 'Action': 'HospitalNameSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'hospital-name-searched', 'HospitalNameSearched': _this6.state.searchValue || ''
                                                                        };
                                                                        _gtm2.default.sendEvent({ data: data });

                                                                        _this6.props.searchProceed("", _this6.state.searchValue);
                                                                    } },
                                                                'Search Hospitals by name : ',
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    { style: { color: '#000', fontWeight: 500 } },
                                                                    this.state.searchValue
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        ) : _react2.default.createElement(
                                            'div',
                                            { className: 'widget mb-10' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'common-search-container' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'common-listing-cont mt-0' },
                                                    _react2.default.createElement(
                                                        'ul',
                                                        null,
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: '', onClick: function onClick() {

                                                                        var data = {
                                                                            'Category': 'ConsumerApp', 'Action': 'LabNameSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lab-name-searched', 'SearchString': _this6.state.searchValue || ''
                                                                        };
                                                                        _gtm2.default.sendEvent({ data: data });

                                                                        _this6.props.searchProceed(_this6.state.searchValue);
                                                                    } },
                                                                'Search Labs by name : ',
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    { style: { color: '#000', fontWeight: 500 } },
                                                                    this.state.searchValue
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    ) : ""
                                ) : this.props.checkForLoad ? this.props.children : _react2.default.createElement(_Loader2.default, null)
                            )
                        ),
                        this.props.clinic_card || this.props.lab_card ? '' : _react2.default.createElement(_RightBar2.default, { extraClass: ' chat-float-btn-2', newChatBtn: this.props.newChatBtn, type: this.props.type, noChatButton: this.props.searchPackages || this.props.searchDoctors || this.props.searchLabs, msgTemplate: 'gold_general_template' }),
                        this.props.bottom_content && this.props.bottom_content.length && parseInt(this.props.page) == 1 ? _react2.default.createElement(
                            'div',
                            { className: 'col-12 mrt-20' },
                            _react2.default.createElement('div', { className: 'search-result-card-collpase', dangerouslySetInnerHTML: { __html: this.props.bottom_content } })
                        ) : '',
                        this.props.ratings_title && this.props.ratings && this.props.reviews ? _react2.default.createElement(
                            'div',
                            { className: 'col-12 avg-rating mrt-20' },
                            _react2.default.createElement(
                                'p',
                                { className: 'fw-500' },
                                this.props.ratings_title + ' - Ratings & Reviews'
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'fw-500' },
                                'Average rating ',
                                ratingArray,
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    '\xA0',
                                    this.props.ratings,
                                    ' '
                                ),
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    '(',
                                    this.props.reviews,
                                    ' reviews)'
                                )
                            )
                        ) : ''
                    )
                ),
                showPackageStrip && !this.props.isPackage ? _react2.default.createElement(_packageCompareStrip2.default, this.props) : '',
                _react2.default.createElement(
                    'div',
                    { className: 'shw-srch-ftr d-md-none ' + (this.state.swipeDirection && this.state.swipeDirection != 'up' || !showSearch ? 'smth-ftr-hide' : '') },
                    this.props.searchPackages && this.props.compare_packages && this.props.compare_packages.length == 0 ? _react2.default.createElement(_FixedMobileFooter2.default, _extends({ searchPackagePage: true }, this.props)) : this.props.compare_packages && this.props.compare_packages.length == 0 && (this.props.searchDoctors || this.props.searchLabs) ? _react2.default.createElement(_FixedMobileFooter2.default, this.props) : ''
                )
            );
        }
    }]);

    return CriteriaSearchView;
}(_react2.default.Component);

exports.default = CriteriaSearchView;

/***/ }),

/***/ "./dev/js/components/commons/criteriaSearch/index.js":
/*!***********************************************************!*\
  !*** ./dev/js/components/commons/criteriaSearch/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CriteriaSearchView = __webpack_require__(/*! ./CriteriaSearchView.js */ "./dev/js/components/commons/criteriaSearch/CriteriaSearchView.js");

var _CriteriaSearchView2 = _interopRequireDefault(_CriteriaSearchView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _CriteriaSearchView2.default;

/***/ }),

/***/ "./dev/js/components/diagnosis/searchPackages/packageCompare/packageCompareStrip.js":
/*!******************************************************************************************!*\
  !*** ./dev/js/components/diagnosis/searchPackages/packageCompare/packageCompareStrip.js ***!
  \******************************************************************************************/
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

var PackageCompareStrip = function (_React$Component) {
  _inherits(PackageCompareStrip, _React$Component);

  function PackageCompareStrip(props) {
    _classCallCheck(this, PackageCompareStrip);

    var _this = _possibleConstructorReturn(this, (PackageCompareStrip.__proto__ || Object.getPrototypeOf(PackageCompareStrip)).call(this, props));

    _this.state = {
      checked: false
    };
    return _this;
  }

  _createClass(PackageCompareStrip, [{
    key: 'comparePackages',
    value: function comparePackages() {
      if (this.props.compare_packages.length > 5) {
        _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Max 5 packages can be compared" });
      } else {
        var selectedPkgCompareIds = [];
        if (this.props.compare_packages) {
          this.props.compare_packages.map(function (packages, i) {
            selectedPkgCompareIds.push(packages.id + '-' + packages.lab_id);
          });
        }
        this.props.history.push('/package/compare?package_ids=' + selectedPkgCompareIds);
      }
    }
  }, {
    key: 'clearPackage',
    value: function clearPackage() {
      this.props.resetPkgCompare();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: 'compare-package-footer cm-footer' },
        _react2.default.createElement(
          'ul',
          { className: 'compare-packages-home' },
          _react2.default.createElement(
            'li',
            { className: 'hlth-txt' },
            this.props.compare_packages.length,
            ' Health Package Selected'
          ),
          _react2.default.createElement(
            'li',
            { className: 'li-btn-compare' },
            _react2.default.createElement(
              'a',
              { className: 'pkg-btn-nw', onClick: this.comparePackages.bind(this) },
              'Compare'
            ),
            _react2.default.createElement(
              'span',
              { className: '' },
              _react2.default.createElement('img', { src: 'https://cdn.docprime.com/cp/assets/img/icons/close.png', alt: '', onClick: this.clearPackage.bind(this) })
            )
          )
        )
      );
    }
  }]);

  return PackageCompareStrip;
}(_react2.default.Component);

exports.default = PackageCompareStrip;

/***/ }),

/***/ "./dev/js/helpers/scrollHelper.js":
/*!****************************************!*\
  !*** ./dev/js/helpers/scrollHelper.js ***!
  \****************************************/
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollView = function (_React$Component) {
	_inherits(ScrollView, _React$Component);

	function ScrollView(props) {
		_classCallCheck(this, ScrollView);

		var _this = _possibleConstructorReturn(this, (ScrollView.__proto__ || Object.getPrototypeOf(ScrollView)).call(this, props));

		_this.addTouchMoveEvent = function (event) {
			var touch = event.touches[0] || event.changedTouches[0];
			_this.setState({
				touchmoveX: touch.screenX, touchmoveY: touch.screenY
			}, function () {
				_this.handleGesture();
			});
		};

		_this.state = {
			setTarget: false,
			touchstartX: 0,
			touchstartY: 0,
			touchendX: 0,
			touchendY: 0,
			touchmoveX: 0,
			touchmoveY: 0
		};
		return _this;
	}

	_createClass(ScrollView, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			if (this.props.target && !this.state.setTarget) {
				var target = this.props.target;
				target.addEventListener('touchstart', function (e) {
					return _this2.addTouchStartEvent(e);
				}, false);
				target.addEventListener('touchmove', function (e) {
					return _this2.addTouchMoveEvent(e);
				}, false);
				target.addEventListener('touchmove', function (e) {
					return _this2.addTouchEndEvent(e);
				}, false);
				this.setState({ setTarget: true });
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var _this3 = this;

			if (!this.state.setTarget && nextProps.target) {
				var target = nextProps.target;
				target.addEventListener('touchstart', function (e) {
					return _this3.addTouchStartEvent(e);
				}, false);
				target.addEventListener('touchmove', function (e) {
					return _this3.addTouchMoveEvent(e);
				}, false);
				target.addEventListener('touchmove', function (e) {
					return _this3.addTouchEndEvent(e);
				}, false);
				this.setState({ setTarget: true });
			}
		}
	}, {
		key: 'addTouchStartEvent',
		value: function addTouchStartEvent(event) {
			var touch = event.touches[0] || event.changedTouches[0];
			this.setState({ touchstartX: touch.screenX, touchstartY: touch.screenY });
		}
	}, {
		key: 'addTouchEndEvent',
		value: function addTouchEndEvent(event) {
			var _this4 = this;

			var touch = event.touches[0] || event.changedTouches[0];
			this.setState({
				touchendX: touch.screenX, touchendY: touch.screenY
			}, function () {
				_this4.handleGesture();
			});
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (this.state.setTarget) {
				var target = this.props.target;
				target.removeEventListener('touchstart', this.addTouchStartEvent);
				target.removeEventListener('touchmove', this.addTouchMoveEvent);
				target.removeEventListener('touchmove', this.addTouchEndEvent);
			}
		}
	}, {
		key: 'handleGesture',
		value: function handleGesture() {
			var swipe = '';
			/*if (SCROLL.touchendX < SCROLL.touchstartX) {
       return (swiped + 'left!');
   }
   if (SCROLL.touchendX > SCROLL.touchstartX) {
       return (swiped + 'right!');
   }*/
			if (this.state.touchendY < this.state.touchstartY || this.state.touchmoveY < this.state.touchstartY) {
				swipe = 'down';
			}
			if (this.state.touchendY > this.state.touchstartY || this.state.touchmoveY > this.state.touchstartY) {
				swipe = 'up';
			}

			this.props.getScrollView(_extends({}, this.state, { swipe: swipe }));
		}
	}, {
		key: 'render',
		value: function render() {
			return '';
		}
	}]);

	return ScrollView;
}(_react2.default.Component);

exports.default = ScrollView;

/***/ }),

/***/ "./dev/js/helpers/utils.js":
/*!*********************************!*\
  !*** ./dev/js/helpers/utils.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.buildOpenBanner = buildOpenBanner;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buildOpenBanner(lab_timing) {
    var lab_timing_data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var next_lab_timing = arguments[2];
    var next_lab_timing_data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    var is_open_now = false;
    var open_next_today = false;

    var time_now = new Date().getHours() + 0.5;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = lab_timing_data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var ltd = _step.value;

            if (time_now <= ltd.end && time_now >= ltd.start) {
                is_open_now = true;
                return _react2.default.createElement(
                    'p',
                    { style: { fontSize: 12 } },
                    lab_timing
                );
            }
            if (time_now < ltd.start) {
                open_next_today = ltd.start;
                open_next_today = _decimalToTime(open_next_today);
                break;
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

    if (open_next_today) {
        return _react2.default.createElement(
            'p',
            { style: { fontSize: 12 } },
            'Opens next at ',
            open_next_today,
            ', today'
        );
    }

    var WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var next_open = false;
    var next_open_today = "";
    if (next_lab_timing_data) {
        var today = new Date();
        var weekDayNumber = today.getDay();
        weekDayNumber = weekDayNumber == 0 ? 6 : weekDayNumber - 1;
        for (var i in next_lab_timing_data) {
            next_open = next_lab_timing_data[i][0].start;
            next_open = _decimalToTime(next_open);
            if (i - weekDayNumber == 1) {
                next_open_today = 'tomorrow';
            } else {
                next_open_today = WEEK_DAYS[i];
            }
            break;
        }
    }
    if (next_open && next_open_today) {
        return _react2.default.createElement(
            'p',
            { style: { fontSize: 12 } },
            'Opens next at ',
            next_open,
            ', ',
            next_open_today
        );
    }

    return "Closed";
}

function _decimalToTime(time) {
    time = time.toString();
    var hours = time.split('.')[0];
    var minutes = time.split('.')[1];
    hours = parseInt(hours);
    if (minutes == '5') {
        minutes = ':30';
    } else {
        minutes = "";
    }
    var day_time = "AM";
    if (hours >= 12) {
        day_time = "PM";
    }
    hours = hours % 12;
    return '' + hours + minutes + ' ' + day_time;
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2NyaXRlcmlhU2VhcmNoL0NyaXRlcmlhU2VhcmNoVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2NyaXRlcmlhU2VhcmNoL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2RpYWdub3Npcy9zZWFyY2hQYWNrYWdlcy9wYWNrYWdlQ29tcGFyZS9wYWNrYWdlQ29tcGFyZVN0cmlwLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9oZWxwZXJzL3Njcm9sbEhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvaGVscGVycy91dGlscy5qcyJdLCJuYW1lcyI6WyJkZWJvdW5jZXIiLCJmbiIsImRlbGF5IiwidGltZXIiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2FsbCIsIkNyaXRlcmlhU2VhcmNoVmlldyIsInByb3BzIiwic3RhdGUiLCJzZWFyY2hWYWx1ZSIsInNlYXJjaFJlc3VsdHMiLCJsb2FkaW5nIiwic2VhcmNoQ2l0aWVzIiwic3dpcGVEaXJlY3Rpb24iLCJnZXRTZWFyY2hSZXN1bHRzIiwiYmluZCIsImlucHV0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImhpc3RvcnkiLCJhY3Rpb24iLCJsb2NhdGlvbiIsInNlYXJjaCIsImluY2x1ZGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFN0YXRlIiwic2Nyb2xsVmlldyIsInN3aXBlIiwiZSIsInRhcmdldCIsInZhbHVlIiwidHlwZSIsImdldE9QRENyaXRlcmlhUmVzdWx0cyIsImNvbmRpdGlvbnMiLCJtYXAiLCJ4Iiwic3BlY2lhbGl6YXRpb25zIiwicHJvY2VkdXJlcyIsInJlc3VsdHMiLCJzZWxlY3RlZCIsInRpdGxlIiwidmFsdWVzIiwiZ2V0RGlhZ25vc2lzQ3JpdGVyaWFSZXN1bHRzIiwidGVzdHMiLCJjcml0ZXJpYSIsImRvY1R5cGUiLCJkYXRhIiwiR1RNIiwiZ2V0VXNlcklkIiwibmFtZSIsImlkIiwic2VuZEV2ZW50IiwidG9nZ2xlT1BEQ3JpdGVyaWEiLCJ0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSIsImxlbmd0aCIsImNpdHkiLCJjaGlsZCIsInNlbGVjdExvY2F0aW9uIiwic2VsZWN0ZWRMb2NhdGlvbiIsImZvcm1hdHRlZF9hZGRyZXNzIiwic2xpY2UiLCJyYXRpbmciLCJyYXRpbmdzIiwiTWF0aCIsImNlaWwiLCJyYXRpbmdBcnJheSIsImkiLCJmbG9vciIsInB1c2giLCJBU1NFVFNfQkFTRV9VUkwiLCJlbXB0eVN0YXJzIiwic2hvd1BhY2thZ2VTdHJpcCIsImNvbXBhcmVfcGFja2FnZXMiLCJzaG93U2VhcmNoIiwiaGlkZUhlYWRlck9uTW9iaWxlIiwiaXNQYWNrYWdlIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZ2V0U2Nyb2xsVmlldyIsInJlZnMiLCJnb0JhY2siLCJyZWYiLCJnZXRDaXR5TGlzdExheW91dCIsImNoYW5nZVNlbGVjdGlvbiIsImlucHV0SGFuZGxlciIsImdvIiwid2lkdGgiLCJyZXN1bHQiLCJkZXNjcmlwdGlvbiIsImNhdCIsImoiLCJjdXJyIiwiYWRkQ3JpdGVyaWEiLCJzZWFyY2hQcm9jZWVkIiwiY29sb3IiLCJmb250V2VpZ2h0IiwiY2hlY2tGb3JMb2FkIiwiY2hpbGRyZW4iLCJjbGluaWNfY2FyZCIsImxhYl9jYXJkIiwibmV3Q2hhdEJ0biIsInNlYXJjaFBhY2thZ2VzIiwic2VhcmNoRG9jdG9ycyIsInNlYXJjaExhYnMiLCJib3R0b21fY29udGVudCIsInBhcnNlSW50IiwicGFnZSIsIl9faHRtbCIsInJhdGluZ3NfdGl0bGUiLCJyZXZpZXdzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJQYWNrYWdlQ29tcGFyZVN0cmlwIiwiY2hlY2tlZCIsIlNuYWNrQmFyIiwic2hvdyIsInBvcyIsInRleHQiLCJzZWxlY3RlZFBrZ0NvbXBhcmVJZHMiLCJwYWNrYWdlcyIsImxhYl9pZCIsInJlc2V0UGtnQ29tcGFyZSIsImNvbXBhcmVQYWNrYWdlcyIsImNsZWFyUGFja2FnZSIsIlNjcm9sbFZpZXciLCJhZGRUb3VjaE1vdmVFdmVudCIsImV2ZW50IiwidG91Y2giLCJ0b3VjaGVzIiwiY2hhbmdlZFRvdWNoZXMiLCJ0b3VjaG1vdmVYIiwic2NyZWVuWCIsInRvdWNobW92ZVkiLCJzY3JlZW5ZIiwiaGFuZGxlR2VzdHVyZSIsInNldFRhcmdldCIsInRvdWNoc3RhcnRYIiwidG91Y2hzdGFydFkiLCJ0b3VjaGVuZFgiLCJ0b3VjaGVuZFkiLCJhZGRUb3VjaFN0YXJ0RXZlbnQiLCJhZGRUb3VjaEVuZEV2ZW50IiwibmV4dFByb3BzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImJ1aWxkT3BlbkJhbm5lciIsImxhYl90aW1pbmciLCJsYWJfdGltaW5nX2RhdGEiLCJuZXh0X2xhYl90aW1pbmciLCJuZXh0X2xhYl90aW1pbmdfZGF0YSIsImlzX29wZW5fbm93Iiwib3Blbl9uZXh0X3RvZGF5IiwidGltZV9ub3ciLCJEYXRlIiwiZ2V0SG91cnMiLCJsdGQiLCJlbmQiLCJzdGFydCIsImZvbnRTaXplIiwiX2RlY2ltYWxUb1RpbWUiLCJXRUVLX0RBWVMiLCJuZXh0X29wZW4iLCJuZXh0X29wZW5fdG9kYXkiLCJ0b2RheSIsIndlZWtEYXlOdW1iZXIiLCJnZXREYXkiLCJ0aW1lIiwidG9TdHJpbmciLCJob3VycyIsInNwbGl0IiwibWludXRlcyIsImRheV90aW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxJQUFNQSxZQUFZLFNBQVpBLFNBQVksQ0FBQ0MsRUFBRCxFQUFLQyxLQUFMLEVBQWU7QUFDN0IsUUFBSUMsUUFBUSxJQUFaO0FBQ0EsV0FBTyxZQUFZO0FBQUE7O0FBQ2ZDLHFCQUFhRCxLQUFiO0FBQ0FBLGdCQUFR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QkFBWVoscUJBQXFCbEYsQ0FBckIsRUFBd0IsQ0FBeEIsRUFBMkIwRixLQUF2QztBQUNBSSx3QkFBWUYsZUFBZUUsU0FBZixDQUFaO0FBQ0EsZ0JBQUk5RixJQUFJaUcsYUFBSixJQUFxQixDQUF6QixFQUE0QjtBQUN4QkYsa0NBQWtCLFVBQWxCO0FBQ0gsYUFGRCxNQUVPO0FBQ0hBLGtDQUFrQkYsVUFBVTdGLENBQVYsQ0FBbEI7QUFDSDtBQUNEO0FBQ0g7QUFDSjtBQUNELFFBQUk4RixhQUFhQyxlQUFqQixFQUFrQztBQUM5QixlQUFPO0FBQUE7QUFBQSxjQUFHLE9BQU8sRUFBRUosVUFBVSxFQUFaLEVBQVY7QUFBQTtBQUE0Q0cscUJBQTVDO0FBQUE7QUFBeURDO0FBQXpELFNBQVA7QUFDSDs7QUFFRCxXQUFPLFFBQVA7QUFFSDs7QUFHRCxTQUFTSCxjQUFULENBQXdCTyxJQUF4QixFQUE4QjtBQUMxQkEsV0FBT0EsS0FBS0MsUUFBTCxFQUFQO0FBQ0EsUUFBSUMsUUFBUUYsS0FBS0csS0FBTCxDQUFXLEdBQVgsRUFBZ0IsQ0FBaEIsQ0FBWjtBQUNBLFFBQUlDLFVBQVVKLEtBQUtHLEtBQUwsQ0FBVyxHQUFYLEVBQWdCLENBQWhCLENBQWQ7QUFDQUQsWUFBUTlELFNBQVM4RCxLQUFULENBQVI7QUFDQSxRQUFJRSxXQUFXLEdBQWYsRUFBb0I7QUFDaEJBLGtCQUFVLEtBQVY7QUFDSCxLQUZELE1BRU87QUFDSEEsa0JBQVUsRUFBVjtBQUNIO0FBQ0QsUUFBSUMsV0FBVyxJQUFmO0FBQ0EsUUFBSUgsU0FBUyxFQUFiLEVBQWlCO0FBQ2JHLG1CQUFXLElBQVg7QUFDSDtBQUNESCxZQUFRQSxRQUFRLEVBQWhCO0FBQ0EsZ0JBQVVBLEtBQVYsR0FBa0JFLE9BQWxCLFNBQTZCQyxRQUE3QjtBQUNILEMiLCJmaWxlIjoiMTYuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9Mb2FkZXInXG5cbmltcG9ydCBMZWZ0QmFyIGZyb20gJy4uL0xlZnRCYXInXG5pbXBvcnQgUmlnaHRCYXIgZnJvbSAnLi4vUmlnaHRCYXInXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5pbXBvcnQgTG9jYXRpb25FbGVtZW50cyBmcm9tICcuLi8uLi8uLi9jb250YWluZXJzL2NvbW1vbnMvbG9jYXRpb25FbGVtZW50cydcbmltcG9ydCBGaXhlZE1vYmlsZUZvb3RlciBmcm9tICcuLi9Ib21lL0ZpeGVkTW9iaWxlRm9vdGVyJztcbmltcG9ydCBQYWNrYWdlQ29tcGFyZVN0cmlwIGZyb20gJy4uLy4uL2RpYWdub3Npcy9zZWFyY2hQYWNrYWdlcy9wYWNrYWdlQ29tcGFyZS9wYWNrYWdlQ29tcGFyZVN0cmlwLmpzJ1xuaW1wb3J0IFNjcm9sbFdpZGdldCBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL3Njcm9sbEhlbHBlci5qcydcblxuXG5jb25zdCBkZWJvdW5jZXIgPSAoZm4sIGRlbGF5KSA9PiB7XG4gICAgbGV0IHRpbWVyID0gbnVsbFxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGZuLmNhbGwodGhpcylcbiAgICAgICAgfSwgZGVsYXkpXG4gICAgfVxufVxuXG5cbmNsYXNzIENyaXRlcmlhU2VhcmNoVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzZWFyY2hWYWx1ZTogJycsXG4gICAgICAgICAgICBzZWFyY2hSZXN1bHRzOiBbXSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgc2VhcmNoQ2l0aWVzOiBbXSxcbiAgICAgICAgICAgIHN3aXBlRGlyZWN0aW9uOiAnJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgICAgICAgdGhpcy5nZXRTZWFyY2hSZXN1bHRzID0gZGVib3VuY2VyKHRoaXMuZ2V0U2VhcmNoUmVzdWx0cy5iaW5kKHRoaXMpLCA1MDApXG4gICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3BDcml0ZXJpYVNlYXJjaCcpXG4gICAgICAgIC8vIGlmIGNvbWluZyBiYWNrIG9yIHJlZnJlc2ggZm9jdXMgb24gc2VhcmNoIGJhclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5oaXN0b3J5LmFjdGlvbiA9PT0gJ1BPUCcgJiYgIXRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdzZWFyY2gnKSkge1xuICAgICAgICAgICAgLy8gaW5wdXQuZm9jdXMoKVxuICAgICAgICB9XG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9wQ3JpdGVyaWFTZWFyY2gnKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvcENyaXRlcmlhU2VhcmNoJykuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsICgpID0+IHsgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaENpdGllczogJycgfSkgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFNjcm9sbFZpZXcoc2Nyb2xsVmlldyl7XG4gICAgICAgIGlmKHNjcm9sbFZpZXcgJiYgc2Nyb2xsVmlldy5zd2lwZSkge1xuICAgICAgICAgICAgLy9hbGVydChzY3JvbGxWaWV3LnN3aXBlKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3dpcGVEaXJlY3Rpb246c2Nyb2xsVmlldy5zd2lwZX0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbnB1dEhhbmRsZXIoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoVmFsdWU6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgIHRoaXMuZ2V0U2VhcmNoUmVzdWx0cygpXG4gICAgfVxuXG4gICAgZ2V0U2VhcmNoUmVzdWx0cygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSlcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy50eXBlID09ICdvcGQnKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldE9QRENyaXRlcmlhUmVzdWx0cyh0aGlzLnN0YXRlLnNlYXJjaFZhbHVlLCAoc2VhcmNoUmVzdWx0cykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzZWFyY2hSZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdHMuY29uZGl0aW9ucyA9IHNlYXJjaFJlc3VsdHMuY29uZGl0aW9ucy5tYXAoeCA9PiB7IHJldHVybiB7IC4uLngsIHR5cGU6ICdjb25kaXRpb24nIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0cy5zcGVjaWFsaXphdGlvbnMgPSBzZWFyY2hSZXN1bHRzLnNwZWNpYWxpemF0aW9ucy5tYXAoeCA9PiB7IHJldHVybiB7IC4uLngsIHR5cGU6ICdzcGVjaWFsaXR5JyB9IH0pXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdHMucHJvY2VkdXJlcyA9IHNlYXJjaFJlc3VsdHMucHJvY2VkdXJlcy5tYXAoeCA9PiB7IHJldHVybiB7IC4uLngsIHR5cGU6ICdwcm9jZWR1cmVzJyB9IH0pIHx8IFtdXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSBbXVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZCA9PSAnb3BkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQ29uZGl0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlczogc2VhcmNoUmVzdWx0cy5jb25kaXRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU3BlY2lhbGl6YXRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiBzZWFyY2hSZXN1bHRzLnNwZWNpYWxpemF0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1Byb2NlZHVyZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IHNlYXJjaFJlc3VsdHMucHJvY2VkdXJlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoUmVzdWx0czogWy4uLnJlc3VsdHNdLCBsb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldERpYWdub3Npc0NyaXRlcmlhUmVzdWx0cyh0aGlzLnN0YXRlLnNlYXJjaFZhbHVlLCAoc2VhcmNoUmVzdWx0cykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzZWFyY2hSZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXN0cyA9IHNlYXJjaFJlc3VsdHMudGVzdHMubWFwKHggPT4geyByZXR1cm4geyAuLi54LCB0eXBlOiAndGVzdCcgfSB9KVxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0cyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1Rlc3RzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IHRlc3RzXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFJlc3VsdHM6IHJlc3VsdHMsIGxvYWRpbmc6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZENyaXRlcmlhKGNyaXRlcmlhLCBkb2NUeXBlKSB7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PSAnb3BkJykge1xuXG4gICAgICAgICAgICBpZiAoZG9jVHlwZSA9PSAnQ29uZGl0aW9ucycpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdDb21tb25Db25kaXRpb25TZWFyY2hlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NvbW1vbi1jb25kaXRpb24tc2VhcmNoZWQnLCAnc2VsZWN0ZWQnOiBjcml0ZXJpYS5uYW1lIHx8ICcnLCAnc2VsZWN0ZWRJZCc6IGNyaXRlcmlhLmlkIHx8ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRvY1R5cGUgPT0gJ1NwZWNpYWxpemF0aW9ucycpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdDb21tb25TcGVjaWFsaXphdGlvbnNTZWFyY2hlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NvbW1vbi1zcGVjaWFsaXphdGlvbnMtc2VhcmNoZWQnLCAnc2VsZWN0ZWQnOiBjcml0ZXJpYS5uYW1lIHx8ICcnLCAnc2VsZWN0ZWRJZCc6IGNyaXRlcmlhLmlkIHx8ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkb2NUeXBlID09ICdQcm9jZWR1cmVzJykge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0NvbW1vblByb2NlZHVyZXNTZWFyY2hlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NvbW1vbi1wcm9jZWR1cmVzLXNlYXJjaGVkJywgJ3NlbGVjdGVkJzogY3JpdGVyaWEubmFtZSB8fCAnJywgJ3NlbGVjdGVkSWQnOiBjcml0ZXJpYS5pZCB8fCAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVPUERDcml0ZXJpYShjcml0ZXJpYS50eXBlLCBjcml0ZXJpYSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hWYWx1ZTogXCJcIiB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRvY1R5cGUgPT0gJ1Rlc3RzJykge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1Rlc3RTZWFyY2hlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3Rlc3Qtc2VhcmNoZWQnLCAnc2VsZWN0ZWQnOiBjcml0ZXJpYS5uYW1lIHx8ICcnLCAnc2VsZWN0ZWRJZCc6IGNyaXRlcmlhLmlkIHx8ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKGNyaXRlcmlhLnR5cGUsIGNyaXRlcmlhKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFZhbHVlOiBcIlwiIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRDaXR5TGlzdExheW91dChzZWFyY2hSZXN1bHRzID0gW10pIHtcbiAgICAgICAgaWYgKHNlYXJjaFJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoQ2l0aWVzOiBzZWFyY2hSZXN1bHRzIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoQ2l0aWVzOiBbXSwgc2VhcmNoVmFsdWU6ICcnIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3RMb2NhdGlvbihjaXR5KSB7XG4gICAgICAgIHRoaXMuY2hpbGQuc2VsZWN0TG9jYXRpb24oKGNpdHkpLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoQ2l0aWVzOiBbXSB9KVxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBsb2NhdGlvbiA9IFwiRGVsaGlcIlxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKSB7XG4gICAgICAgICAgICBsb2NhdGlvbiA9IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5mb3JtYXR0ZWRfYWRkcmVzcy5zbGljZSgwLCAyNSlcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByYXRpbmcgPSAnJ1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5yYXRpbmdzKSB7XG4gICAgICAgICAgICByYXRpbmcgPSAoTWF0aC5jZWlsKHRoaXMucHJvcHMucmF0aW5ncyAqIDIpKSAvIDI7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmF0aW5nQXJyYXkgPSBbXVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGguZmxvb3IocmF0aW5nKTsgaSsrKSB7XG4gICAgICAgICAgICByYXRpbmdBcnJheS5wdXNoKDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9yYXRpbmctc3Rhci1maWxsZWQuc3ZnJ30gY2xhc3NOYW1lPVwicmF0aW5nLXN0YXJcIiAvPilcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyYXRpbmcgIT0gTWF0aC5mbG9vcihyYXRpbmcpKSB7XG4gICAgICAgICAgICByYXRpbmdBcnJheS5wdXNoKDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9oYWxmc3Rhci5zdmcnfSBjbGFzc05hbWU9XCJyYXRpbmctc3RhclwiIC8+KVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGVtcHR5U3RhcnMgPSBNYXRoLmZsb29yKDUgLSByYXRpbmcpO1xuICAgICAgICBpZiAoZW1wdHlTdGFycykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbXB0eVN0YXJzOyBpKyspIHtcbiAgICAgICAgICAgICAgICByYXRpbmdBcnJheS5wdXNoKDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9yYXRpbmctc3Rhci1lbXB0eS5zdmcnfSBjbGFzc05hbWU9XCJyYXRpbmctc3RhclwiIC8+KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNob3dQYWNrYWdlU3RyaXAgPSB0aGlzLnByb3BzLmNvbXBhcmVfcGFja2FnZXMgJiYgdGhpcy5wcm9wcy5jb21wYXJlX3BhY2thZ2VzLmxlbmd0aCA+IDBcbiAgICAgICAgbGV0IHNob3dTZWFyY2ggPSB0cnVlXG4gICAgICAgIC8vIGlmKHRoaXMucHJvcHMubG9jYXRpb24gJiYgIHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoICYmICh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnZnJvbVZpcCcpIHx8IHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdmcm9tR29sZFZpcCcpKSl7XG4gICAgICAgIC8vICAgICBzaG93U2VhcmNoID0gZmFsc2VcbiAgICAgICAgLy8gfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaWRlSGVhZGVyT25Nb2JpbGUgPyA8ZGl2IGNsYXNzTmFtZT1cImhpZGUtNzYyXCI+PFByb2ZpbGVIZWFkZXIgc2hvd1NlYXJjaD17c2hvd1NlYXJjaH0gc2hvd1BhY2thZ2VTdHJpcD17c2hvd1BhY2thZ2VTdHJpcCB8fCB0aGlzLnByb3BzLmlzUGFja2FnZX0gbmV3X2ZpeGVkX2hlYWRlcj17MX0gaXNTZWFyY2hMaXN0PXt0cnVlfS8+PC9kaXY+IDogPFByb2ZpbGVIZWFkZXIgc2hvd1NlYXJjaD17c2hvd1NlYXJjaH0gc2hvd1BhY2thZ2VTdHJpcD17c2hvd1BhY2thZ2VTdHJpcCB8fCB0aGlzLnByb3BzLmlzUGFja2FnZX0gbmV3X2ZpeGVkX2hlYWRlcj17MX0gaXNTZWFyY2hMaXN0PXt0cnVlfS8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIHJlZj1cInNjcm9sbFRhcmdldFwiIGNsYXNzTmFtZT17YCR7IXNob3dTZWFyY2g/J2NvbnRhaW5lciBjb250YWluZXItdG9wLW1hcmdpbic6J2NvbnRhaW5lciBwYXJlbnQtc2VjdGlvbiBib29rLWFwcG9pbnRtZW50LXNlY3Rpb24gaG9zcGl0YWwtdmlldy1zZWN0aW9uJ30gJHt0aGlzLnByb3BzLmhpZGVIZWFkZXJPbk1vYmlsZSA/IFwiIG1wMFwiIDogXCJcIn0gICR7dGhpcy5wcm9wcy5pc1BhY2thZ2UgP1wicGtnQ29tYXByZVwiOlwiXCJ9IGB9PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgbmF2aWdhdG9yID09ICdvYmplY3QnICYmIG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5jbHVkZXMoJ2lQaG9uZScpPycnXG4gICAgICAgICAgICAgICAgICAgICAgICA6PFNjcm9sbFdpZGdldCBnZXRTY3JvbGxWaWV3PXt0aGlzLmdldFNjcm9sbFZpZXcuYmluZCh0aGlzKX0gdGFyZ2V0PXt0aGlzLnJlZnMgJiYgdGhpcy5yZWZzWydzY3JvbGxUYXJnZXQnXT90aGlzLnJlZnNbJ3Njcm9sbFRhcmdldCddOicnfS8+ICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0QmFyIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNvbC1sZy03IGNlbnRlci1jb2x1bW4gcHQtMFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBnb2JhY2sgZGVjaWRlcyBpZiBzZWFyY2ggYmFyIHdpbGwgYmUgc2hvd25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nb0JhY2sgPyBcIlwiIDogPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbWItMTAgbXJuZy10b3AtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXRvcC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzcmNoLWhlYWRpbmdcIj5TZWFyY2g8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJjaC1udy1pbnB1dHMtY29udGFpbmVyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2F0aW9uRWxlbWVudHMgey4uLnRoaXMucHJvcHN9IG9uUmVmPXtyZWYgPT4gKHRoaXMuY2hpbGQgPSByZWYpfSBnZXRDaXR5TGlzdExheW91dD17dGhpcy5nZXRDaXR5TGlzdExheW91dC5iaW5kKHRoaXMpfSByZXN1bHRUeXBlPSdzZWFyY2gnIGZyb21Dcml0ZXJpYT17dHJ1ZX0gY29tbW9uU2VhcmNoUGFnZT17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWFyY2hDaXRpZXMubGVuZ3RoID4gMCA/IFwiXCIgOiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3JjaC1yYWRpby1idG5zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHRsLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJhZGlvXCI+RG9jdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuY2hhbmdlU2VsZWN0aW9uLmJpbmQodGhpcywgJ29wZCcpfSBjaGVja2VkPXt0aGlzLnByb3BzLnNlbGVjdGVkID09ICdvcGQnfSBuYW1lPVwicmFkaW9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdGwtcmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIj5UZXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuY2hhbmdlU2VsZWN0aW9uLmJpbmQodGhpcywgJ2xhYicpfSBjaGVja2VkPXt0aGlzLnByb3BzLnNlbGVjdGVkID09ICdsYWInfSBuYW1lPVwicmFkaW9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdGwtcmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIj5EZW50YWwgVHJlYXRtZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmNoYW5nZVNlbGVjdGlvbi5iaW5kKHRoaXMsICdwcm9jZWR1cmVzJyl9IGNoZWNrZWQ9e3RoaXMucHJvcHMuc2VsZWN0ZWQgPT0gJ3Byb2NlZHVyZXMnfSBuYW1lPVwicmFkaW9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcmNoLW53LWlucHV0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibmV3LXNyY2gtZG9jLWxhYlwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIERvY3RvcnMsIExhYnMgYW5kIFRlc3RzXCIgb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaFZhbHVlfSBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy50aXRsZX0gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuZ29CYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LmdvKC0xKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMTVweCcgfX0gY2xhc3NOYW1lPVwic3JjaC1pbnAtaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvc2hhcGUtc3JjaC5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlYXJjaENpdGllcy5sZW5ndGggPiAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1iLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbW9uLXNlYXJjaC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNyY2gtaGVhZGluZ1wiPkxvY2F0aW9uIFNlYXJjaDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbW9uLWxpc3RpbmctY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWFyY2hDaXRpZXMubWFwKChyZXN1bHQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiIG9uQ2xpY2s9e3RoaXMuc2VsZWN0TG9jYXRpb24uYmluZCh0aGlzLCByZXN1bHQpfT57cmVzdWx0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlYXJjaENpdGllcy5sZW5ndGggPiAwID8gXCJcIiA6IDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSA/XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzLm1hcCgoY2F0LCBqKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXQudmFsdWVzICYmIGNhdC52YWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbWItMTBcIiBrZXk9e2p9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbW9uLXNlYXJjaC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3JjaC1oZWFkaW5nXCI+e2NhdC50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbW9uLWxpc3RpbmctY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0LnZhbHVlcy5sZW5ndGggPCAxID8gPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+Tm8gUmVzdWx0cyBGb3VuZCAuLi48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdC52YWx1ZXMubWFwKChjdXJyLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCIgb25DbGljaz17dGhpcy5hZGRDcml0ZXJpYS5iaW5kKHRoaXMsIGN1cnIsIGNhdC50aXRsZSl9PntjdXJyLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlLmxlbmd0aCA+IDIgPyA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnR5cGUgPT0gJ29wZCcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1iLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbW9uLXNlYXJjaC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbW9uLWxpc3RpbmctY29udCBtdC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIiBvbkNsaWNrPXsoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdEb2N0b3JOYW1lU2VhcmNoZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdkb2N0b3ItbmFtZS1zZWFyY2hlZCcsICdEb2N0b3JOYW1lU2VhcmNoZWQnOiB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlIHx8ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlYXJjaFByb2NlZWQodGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSwgXCJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlNlYXJjaCBEb2N0b3JzIGJ5IG5hbWUgOiA8c3BhbiBzdHlsZT17eyBjb2xvcjogJyMwMDAnLCBmb250V2VpZ2h0OiA1MDAgfX0+e3RoaXMuc3RhdGUuc2VhcmNoVmFsdWV9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCIgb25DbGljaz17KCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSG9zcGl0YWxOYW1lU2VhcmNoZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdob3NwaXRhbC1uYW1lLXNlYXJjaGVkJywgJ0hvc3BpdGFsTmFtZVNlYXJjaGVkJzogdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWFyY2hQcm9jZWVkKFwiXCIsIHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5TZWFyY2ggSG9zcGl0YWxzIGJ5IG5hbWUgOiA8c3BhbiBzdHlsZT17eyBjb2xvcjogJyMwMDAnLCBmb250V2VpZ2h0OiA1MDAgfX0+e3RoaXMuc3RhdGUuc2VhcmNoVmFsdWV9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1iLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbW9uLXNlYXJjaC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbW9uLWxpc3RpbmctY29udCBtdC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIiBvbkNsaWNrPXsoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdMYWJOYW1lU2VhcmNoZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdsYWItbmFtZS1zZWFyY2hlZCcsICdTZWFyY2hTdHJpbmcnOiB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlIHx8ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlYXJjaFByb2NlZWQodGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlNlYXJjaCBMYWJzIGJ5IG5hbWUgOiA8c3BhbiBzdHlsZT17eyBjb2xvcjogJyMwMDAnLCBmb250V2VpZ2h0OiA1MDAgfX0+e3RoaXMuc3RhdGUuc2VhcmNoVmFsdWV9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKHRoaXMucHJvcHMuY2hlY2tGb3JMb2FkID8gdGhpcy5wcm9wcy5jaGlsZHJlbiA6IDxMb2FkZXIgLz4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xpbmljX2NhcmQgfHwgdGhpcy5wcm9wcy5sYWJfY2FyZCA/ICcnIDogPFJpZ2h0QmFyIGV4dHJhQ2xhc3M9XCIgY2hhdC1mbG9hdC1idG4tMlwiIG5ld0NoYXRCdG49e3RoaXMucHJvcHMubmV3Q2hhdEJ0bn0gdHlwZT17dGhpcy5wcm9wcy50eXBlfSBub0NoYXRCdXR0b249e3RoaXMucHJvcHMuc2VhcmNoUGFja2FnZXMgfHwgdGhpcy5wcm9wcy5zZWFyY2hEb2N0b3JzIHx8IHRoaXMucHJvcHMuc2VhcmNoTGFic30gbXNnVGVtcGxhdGU9XCJnb2xkX2dlbmVyYWxfdGVtcGxhdGVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5ib3R0b21fY29udGVudCAmJiB0aGlzLnByb3BzLmJvdHRvbV9jb250ZW50Lmxlbmd0aCAmJiBwYXJzZUludCh0aGlzLnByb3BzLnBhZ2UpID09IDEgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBtcnQtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdC1jYXJkLWNvbGxwYXNlXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0aGlzLnByb3BzLmJvdHRvbV9jb250ZW50IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yYXRpbmdzX3RpdGxlICYmIHRoaXMucHJvcHMucmF0aW5ncyAmJiB0aGlzLnByb3BzLnJldmlld3MgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBhdmctcmF0aW5nIG1ydC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+e2Ake3RoaXMucHJvcHMucmF0aW5nc190aXRsZX0gLSBSYXRpbmdzICYgUmV2aWV3c2B9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+QXZlcmFnZSByYXRpbmcge3JhdGluZ0FycmF5fTxzcGFuPiZuYnNwO3t0aGlzLnByb3BzLnJhdGluZ3N9IDwvc3Bhbj48c3Bhbj4oe3RoaXMucHJvcHMucmV2aWV3c30gcmV2aWV3cyk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dQYWNrYWdlU3RyaXAgJiYgIXRoaXMucHJvcHMuaXNQYWNrYWdlP1xuICAgICAgICAgICAgICAgICAgICAgICAgPFBhY2thZ2VDb21wYXJlU3RyaXAgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHNody1zcmNoLWZ0ciBkLW1kLW5vbmUgJHt0aGlzLnN0YXRlLnN3aXBlRGlyZWN0aW9uICYmIHRoaXMuc3RhdGUuc3dpcGVEaXJlY3Rpb24hPSd1cCcgfHwgIXNob3dTZWFyY2g/J3NtdGgtZnRyLWhpZGUnOicnfWB9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWFyY2hQYWNrYWdlcyAmJiB0aGlzLnByb3BzLmNvbXBhcmVfcGFja2FnZXMgJiYgdGhpcy5wcm9wcy5jb21wYXJlX3BhY2thZ2VzLmxlbmd0aCA9PSAwP1xuICAgICAgICAgICAgICAgICAgICAgICAgPEZpeGVkTW9iaWxlRm9vdGVyIHNlYXJjaFBhY2thZ2VQYWdlPXt0cnVlfSB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29tcGFyZV9wYWNrYWdlcyAmJiB0aGlzLnByb3BzLmNvbXBhcmVfcGFja2FnZXMubGVuZ3RoID09IDAgJiYgKHRoaXMucHJvcHMuc2VhcmNoRG9jdG9ycyB8fCB0aGlzLnByb3BzLnNlYXJjaExhYnMpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rml4ZWRNb2JpbGVGb290ZXIgey4uLnRoaXMucHJvcHN9IC8+IDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyaXRlcmlhU2VhcmNoVmlldyIsImltcG9ydCBDcml0ZXJpYVNlYXJjaFZpZXcgZnJvbSAnLi9Dcml0ZXJpYVNlYXJjaFZpZXcuanMnXG5cbmV4cG9ydCBkZWZhdWx0IENyaXRlcmlhU2VhcmNoVmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5pdGlhbHNQaWN0dXJlIGZyb20gJy4uLy4uLy4uL2NvbW1vbnMvaW5pdGlhbHNQaWN0dXJlJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcblxuaW1wb3J0IHsgYnVpbGRPcGVuQmFubmVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcbmltcG9ydCB7IFhfT0sgfSBmcm9tICdjb25zdGFudHMnO1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5cbmNsYXNzIFBhY2thZ2VDb21wYXJlU3RyaXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlPXtcbiAgICAgICAgICAgIGNoZWNrZWQ6ZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBhcmVQYWNrYWdlcygpe1xuICAgICAgaWYodGhpcy5wcm9wcy5jb21wYXJlX3BhY2thZ2VzLmxlbmd0aCA+IDUpe1xuICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIk1heCA1IHBhY2thZ2VzIGNhbiBiZSBjb21wYXJlZFwiIH0pO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGxldCBzZWxlY3RlZFBrZ0NvbXBhcmVJZHM9W11cbiAgICAgICAgICBpZih0aGlzLnByb3BzLmNvbXBhcmVfcGFja2FnZXMpe1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLmNvbXBhcmVfcGFja2FnZXMubWFwKChwYWNrYWdlcywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQa2dDb21wYXJlSWRzLnB1c2gocGFja2FnZXMuaWQrJy0nK3BhY2thZ2VzLmxhYl9pZClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvcGFja2FnZS9jb21wYXJlP3BhY2thZ2VfaWRzPScrc2VsZWN0ZWRQa2dDb21wYXJlSWRzKSAgICAgIFxuICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyUGFja2FnZSgpe1xuICAgICAgdGhpcy5wcm9wcy5yZXNldFBrZ0NvbXBhcmUoKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbXBhcmUtcGFja2FnZS1mb290ZXIgY20tZm9vdGVyXCI+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb21wYXJlLXBhY2thZ2VzLWhvbWVcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaGx0aC10eHRcIj57dGhpcy5wcm9wcy5jb21wYXJlX3BhY2thZ2VzLmxlbmd0aH0gSGVhbHRoIFBhY2thZ2UgU2VsZWN0ZWQ8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaS1idG4tY29tcGFyZVwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicGtnLWJ0bi1ud1wiIG9uQ2xpY2s9e3RoaXMuY29tcGFyZVBhY2thZ2VzLmJpbmQodGhpcyl9PkNvbXBhcmU8L2E+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj48aW1nIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9jcC9hc3NldHMvaW1nL2ljb25zL2Nsb3NlLnBuZ1wiIGFsdD1cIlwiICBvbkNsaWNrPXt0aGlzLmNsZWFyUGFja2FnZS5iaW5kKHRoaXMpfS8+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L3NlY3Rpb24+ICBcbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBQYWNrYWdlQ29tcGFyZVN0cmlwXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIFNjcm9sbFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNldFRhcmdldDogZmFsc2UsXG5cdFx0XHR0b3VjaHN0YXJ0WCA6IDAsXG5cdFx0XHR0b3VjaHN0YXJ0WSA6MCxcblx0XHRcdHRvdWNoZW5kWCA6IDAsXG5cdFx0XHR0b3VjaGVuZFkgOiAwLFxuXHRcdFx0dG91Y2htb3ZlWDogMCxcblx0XHRcdHRvdWNobW92ZVk6IDBcdFx0XHRcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRpZih0aGlzLnByb3BzLnRhcmdldCAmJiAhdGhpcy5zdGF0ZS5zZXRUYXJnZXQpIHtcblx0XHRcdGxldCB0YXJnZXQgPSB0aGlzLnByb3BzLnRhcmdldFxuXHRcdFx0dGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZSk9PnRoaXMuYWRkVG91Y2hTdGFydEV2ZW50KGUpLCBmYWxzZSlcblx0XHRcdHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAgKGUpPT50aGlzLmFkZFRvdWNoTW92ZUV2ZW50KGUpLCBmYWxzZSlcblx0XHRcdHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAoZSk9PnRoaXMuYWRkVG91Y2hFbmRFdmVudChlKSwgZmFsc2UpXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtzZXRUYXJnZXQ6IHRydWV9KVxuXHRcdH1cblx0XHRcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG5cdFx0aWYoIXRoaXMuc3RhdGUuc2V0VGFyZ2V0ICYmIG5leHRQcm9wcy50YXJnZXQpIHtcblx0XHRcdGxldCB0YXJnZXQgPSBuZXh0UHJvcHMudGFyZ2V0XG5cdFx0XHR0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChlKT0+dGhpcy5hZGRUb3VjaFN0YXJ0RXZlbnQoZSksIGZhbHNlKVxuXHRcdFx0dGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsICAoZSk9PnRoaXMuYWRkVG91Y2hNb3ZlRXZlbnQoZSksIGZhbHNlKVxuXHRcdFx0dGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIChlKT0+dGhpcy5hZGRUb3VjaEVuZEV2ZW50KGUpLCBmYWxzZSlcblx0XHRcdHRoaXMuc2V0U3RhdGUoe3NldFRhcmdldDogdHJ1ZX0pXG5cdFx0fVxuXHR9XG5cblx0YWRkVG91Y2hTdGFydEV2ZW50KGV2ZW50KXtcblx0XHRsZXQgdG91Y2ggPSBldmVudC50b3VjaGVzWzBdIHx8IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdXG5cdFx0dGhpcy5zZXRTdGF0ZSh7dG91Y2hzdGFydFggOiB0b3VjaC5zY3JlZW5YLCB0b3VjaHN0YXJ0WSA6IHRvdWNoLnNjcmVlbll9KVxuXHR9XG5cblx0YWRkVG91Y2hNb3ZlRXZlbnQgPSAoZXZlbnQpPT57XG5cdFx0bGV0IHRvdWNoID0gZXZlbnQudG91Y2hlc1swXSB8fCBldmVudC5jaGFuZ2VkVG91Y2hlc1swXVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dG91Y2htb3ZlWCA6ICB0b3VjaC5zY3JlZW5YLCB0b3VjaG1vdmVZIDogdG91Y2guc2NyZWVuWVxuXHRcdH0sKCk9Pntcblx0XHRcdHRoaXMuaGFuZGxlR2VzdHVyZSgpXHRcblx0XHR9KVxuXHR9XG5cblx0YWRkVG91Y2hFbmRFdmVudChldmVudCl7XG5cdFx0bGV0IHRvdWNoID0gZXZlbnQudG91Y2hlc1swXSB8fCBldmVudC5jaGFuZ2VkVG91Y2hlc1swXVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dG91Y2hlbmRYIDogdG91Y2guc2NyZWVuWCwgdG91Y2hlbmRZIDogdG91Y2guc2NyZWVuWVxuXHRcdH0sKCk9Pntcblx0XHRcdHRoaXMuaGFuZGxlR2VzdHVyZSgpXHRcblx0XHR9KVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKXtcblx0XHRpZih0aGlzLnN0YXRlLnNldFRhcmdldCkge1xuXHRcdFx0bGV0IHRhcmdldCA9IHRoaXMucHJvcHMudGFyZ2V0XG5cdFx0XHR0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuYWRkVG91Y2hTdGFydEV2ZW50KVxuXHRcdFx0dGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsICB0aGlzLmFkZFRvdWNoTW92ZUV2ZW50KVxuXHRcdFx0dGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuYWRkVG91Y2hFbmRFdmVudClcblx0XHR9XG5cdH1cblxuXHRoYW5kbGVHZXN0dXJlKCl7XG5cdCAgICBsZXQgc3dpcGUgPSAnJ1xuXHQgICAgLyppZiAoU0NST0xMLnRvdWNoZW5kWCA8IFNDUk9MTC50b3VjaHN0YXJ0WCkge1xuXHQgICAgICAgIHJldHVybiAoc3dpcGVkICsgJ2xlZnQhJyk7XG5cdCAgICB9XG5cdCAgICBpZiAoU0NST0xMLnRvdWNoZW5kWCA+IFNDUk9MTC50b3VjaHN0YXJ0WCkge1xuXHQgICAgICAgIHJldHVybiAoc3dpcGVkICsgJ3JpZ2h0IScpO1xuXHQgICAgfSovXG5cdCAgICBpZiAodGhpcy5zdGF0ZS50b3VjaGVuZFkgPCB0aGlzLnN0YXRlLnRvdWNoc3RhcnRZIHx8IHRoaXMuc3RhdGUudG91Y2htb3ZlWTwgdGhpcy5zdGF0ZS50b3VjaHN0YXJ0WSkge1xuXHQgICAgICAgIHN3aXBlID0gJ2Rvd24nXG5cdCAgICB9XG5cdCAgICBpZiAodGhpcy5zdGF0ZS50b3VjaGVuZFkgPiB0aGlzLnN0YXRlLnRvdWNoc3RhcnRZIHx8IHRoaXMuc3RhdGUudG91Y2htb3ZlWSA+IHRoaXMuc3RhdGUudG91Y2hzdGFydFkpIHtcblx0ICAgICAgICBzd2lwZSA9ICd1cCdcblx0ICAgIH1cblxuXHQgICAgdGhpcy5wcm9wcy5nZXRTY3JvbGxWaWV3KHsuLi50aGlzLnN0YXRlLCBzd2lwZX0pXG5cblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAnJ1xuXHR9XG59XG5leHBvcnQgZGVmYXVsdCBTY3JvbGxWaWV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkT3BlbkJhbm5lcihsYWJfdGltaW5nLCBsYWJfdGltaW5nX2RhdGEgPSBbXSwgbmV4dF9sYWJfdGltaW5nLCBuZXh0X2xhYl90aW1pbmdfZGF0YSA9IG51bGwpIHtcbiAgICBsZXQgaXNfb3Blbl9ub3cgPSBmYWxzZVxuICAgIGxldCBvcGVuX25leHRfdG9kYXkgPSBmYWxzZVxuXG4gICAgbGV0IHRpbWVfbm93ID0gbmV3IERhdGUoKS5nZXRIb3VycygpICsgMC41XG4gICAgZm9yIChsZXQgbHRkIG9mIGxhYl90aW1pbmdfZGF0YSkge1xuICAgICAgICBpZiAodGltZV9ub3cgPD0gbHRkLmVuZCAmJiB0aW1lX25vdyA+PSBsdGQuc3RhcnQpIHtcbiAgICAgICAgICAgIGlzX29wZW5fbm93ID0gdHJ1ZVxuICAgICAgICAgICAgcmV0dXJuIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAxMiB9fSA+e2xhYl90aW1pbmd9PC9wPlxuICAgICAgICB9XG4gICAgICAgIGlmICh0aW1lX25vdyA8IGx0ZC5zdGFydCkge1xuICAgICAgICAgICAgb3Blbl9uZXh0X3RvZGF5ID0gbHRkLnN0YXJ0XG4gICAgICAgICAgICBvcGVuX25leHRfdG9kYXkgPSBfZGVjaW1hbFRvVGltZShvcGVuX25leHRfdG9kYXkpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9wZW5fbmV4dF90b2RheSkge1xuICAgICAgICByZXR1cm4gPHAgc3R5bGU9e3sgZm9udFNpemU6IDEyIH19ID5PcGVucyBuZXh0IGF0IHtvcGVuX25leHRfdG9kYXl9LCB0b2RheTwvcD5cbiAgICB9XG5cbiAgICBjb25zdCBXRUVLX0RBWVMgPSBbJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknLCAnU3VuZGF5J11cbiAgICBsZXQgbmV4dF9vcGVuID0gZmFsc2VcbiAgICBsZXQgbmV4dF9vcGVuX3RvZGF5ID0gXCJcIlxuICAgIGlmIChuZXh0X2xhYl90aW1pbmdfZGF0YSkge1xuICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpXG4gICAgICAgIGxldCB3ZWVrRGF5TnVtYmVyID0gdG9kYXkuZ2V0RGF5KClcbiAgICAgICAgd2Vla0RheU51bWJlciA9IHdlZWtEYXlOdW1iZXIgPT0gMCA/IDYgOiB3ZWVrRGF5TnVtYmVyIC0gMVxuICAgICAgICBmb3IgKGxldCBpIGluIG5leHRfbGFiX3RpbWluZ19kYXRhKSB7XG4gICAgICAgICAgICBuZXh0X29wZW4gPSBuZXh0X2xhYl90aW1pbmdfZGF0YVtpXVswXS5zdGFydFxuICAgICAgICAgICAgbmV4dF9vcGVuID0gX2RlY2ltYWxUb1RpbWUobmV4dF9vcGVuKVxuICAgICAgICAgICAgaWYgKGkgLSB3ZWVrRGF5TnVtYmVyID09IDEpIHtcbiAgICAgICAgICAgICAgICBuZXh0X29wZW5fdG9kYXkgPSAndG9tb3Jyb3cnXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5leHRfb3Blbl90b2RheSA9IFdFRUtfREFZU1tpXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAobmV4dF9vcGVuICYmIG5leHRfb3Blbl90b2RheSkge1xuICAgICAgICByZXR1cm4gPHAgc3R5bGU9e3sgZm9udFNpemU6IDEyIH19ID5PcGVucyBuZXh0IGF0IHtuZXh0X29wZW59LCB7bmV4dF9vcGVuX3RvZGF5fTwvcD5cbiAgICB9XG5cbiAgICByZXR1cm4gXCJDbG9zZWRcIlxuXG59XG5cblxuZnVuY3Rpb24gX2RlY2ltYWxUb1RpbWUodGltZSkge1xuICAgIHRpbWUgPSB0aW1lLnRvU3RyaW5nKClcbiAgICBsZXQgaG91cnMgPSB0aW1lLnNwbGl0KCcuJylbMF1cbiAgICBsZXQgbWludXRlcyA9IHRpbWUuc3BsaXQoJy4nKVsxXVxuICAgIGhvdXJzID0gcGFyc2VJbnQoaG91cnMpXG4gICAgaWYgKG1pbnV0ZXMgPT0gJzUnKSB7XG4gICAgICAgIG1pbnV0ZXMgPSAnOjMwJ1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1pbnV0ZXMgPSBcIlwiXG4gICAgfVxuICAgIGxldCBkYXlfdGltZSA9IFwiQU1cIlxuICAgIGlmIChob3VycyA+PSAxMikge1xuICAgICAgICBkYXlfdGltZSA9IFwiUE1cIlxuICAgIH1cbiAgICBob3VycyA9IGhvdXJzICUgMTJcbiAgICByZXR1cm4gYCR7aG91cnN9JHttaW51dGVzfSAke2RheV90aW1lfWBcbn0iXSwic291cmNlUm9vdCI6IiJ9