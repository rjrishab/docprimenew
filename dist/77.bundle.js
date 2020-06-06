(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

/***/ "./dev/js/components/commons/criteriaElasticSearch/criteriaElasticSearchView.js":
/*!**************************************************************************************!*\
  !*** ./dev/js/components/commons/criteriaElasticSearch/criteriaElasticSearchView.js ***!
  \**************************************************************************************/
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

var _initialsPicture = __webpack_require__(/*! ../initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

var _PrescriptionUpload = __webpack_require__(/*! ../../../containers/commons/PrescriptionUpload.js */ "./dev/js/containers/commons/PrescriptionUpload.js");

var _PrescriptionUpload2 = _interopRequireDefault(_PrescriptionUpload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var CriteriaElasticSearchView = function (_React$Component) {
    _inherits(CriteriaElasticSearchView, _React$Component);

    function CriteriaElasticSearchView(props) {
        _classCallCheck(this, CriteriaElasticSearchView);

        var _this2 = _possibleConstructorReturn(this, (CriteriaElasticSearchView.__proto__ || Object.getPrototypeOf(CriteriaElasticSearchView)).call(this, props));

        _this2.afterUserLogin = function () {
            var is_user_insurance_active = false;
            var user_insurance_status = null;
            if (_this2.props.defaultProfile && _this2.props.profiles && _this2.props.profiles[_this2.props.defaultProfile]) {
                user_insurance_status = _this2.props.profiles[_this2.props.defaultProfile].insurance_status;
            }
            is_user_insurance_active = user_insurance_status == 1 || user_insurance_status == 5 || user_insurance_status == 4 || user_insurance_status == 7;
            //this.setState({is_user_insurance_active: true, showPrescriptionInsuranceError: true})
            if (is_user_insurance_active) {
                _this2.setState({ is_user_insurance_active: true, showPrescriptionInsuranceError: true });
            }
        };

        _this2.state = {
            searchValue: '',
            searchResults: [],
            loading: false,
            searchCities: [],
            currentTestType: {},
            type: '',
            visibleType: '',
            is_user_insurance_active: false,
            showPrescriptionInsuranceError: false
        };
        return _this2;
    }

    _createClass(CriteriaElasticSearchView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            this.getSearchResults = debouncer(this.getSearchResults.bind(this), 200);
            var input = document.getElementById('topCriteriaSearch');
            if (window) {
                window.scroll(0, 0);
            }

            var user_insurance_status = null;
            if (this.props.defaultProfile && this.props.profiles && this.props.profiles[this.props.defaultProfile]) {
                user_insurance_status = this.props.profiles[this.props.defaultProfile].insurance_status;
            }
            user_insurance_status = user_insurance_status == 1 || user_insurance_status == 5 || user_insurance_status == 4 || user_insurance_status == 7;
            this.setState({ is_user_insurance_active: user_insurance_status });

            // if coming back or refresh focus on search bar
            if (this.props.history.action === 'POP' && !this.props.location.search.includes('search')) {
                // input.focus()
            }
            if (document.getElementById('topCriteriaSearch')) {
                document.getElementById('topCriteriaSearch').addEventListener('focusin', function () {
                    _this3.setState({ searchCities: '' });
                });
            }

            if (document.getElementById('search_results_view') && document.getElementById('search_bar')) {
                document.getElementById('search_bar').addEventListener('focusin', function () {
                    document.getElementById('search_results_view').scrollIntoView();
                });
            }
            this.selectSearchType(this.props.type);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.type != nextProps.type) {

                if (nextProps.elasticSearchString) {
                    this.setState({ searchValue: nextProps.elasticSearchString, searchResults: [] });
                    this.getSearchResults();
                } else {
                    this.setState({ searchValue: '', searchResults: [] });
                }
            }
        }
    }, {
        key: 'inputHandler',
        value: function inputHandler(e) {
            this.setState({ searchValue: e.target.value });
            var searchString = e.target.value.trim();
            if (searchString.length) {
                this.getSearchResults();
                this.props.toggleFixedMobileFooter(false);
            } else {
                this.setState({ searchResults: [] });
                this.props.toggleFixedMobileFooter(true);
            }
        }
    }, {
        key: 'selectSearchType',
        value: function selectSearchType(type) {
            if (this.textInput) {
                this.textInput.focus();
            }
            if (this.textInput_desktop) {
                this.textInput_desktop.focus();
            }

            this.props.changeSelection(type, '');
        }
    }, {
        key: 'getSearchResults',
        value: function getSearchResults() {
            var _this4 = this;

            this.setState({ loading: true });
            var lat = 28.644800;
            var long = 77.216721;
            var place_id = "";

            if (this.props.dataState.selectedLocation) {
                place_id = this.props.dataState.selectedLocation.place_id || "";
                lat = this.props.dataState.selectedLocation.geometry.location.lat;
                long = this.props.dataState.selectedLocation.geometry.location.lng;
                if (typeof lat === 'function') lat = lat();
                if (typeof long === 'function') long = long();

                lat = parseFloat(parseFloat(lat).toFixed(6));
                long = parseFloat(parseFloat(long).toFixed(6));
            }

            var location = { lat: lat, long: long };

            var LAB_TYPES = ['lab_test_synonym', 'lab_test', 'lab'];

            var OPD_TYPES = ['visit_reason', 'practice_specialization', 'doctor', 'hospital', 'practice_specialization_synonym'];

            var PROCEDURE_TYPES = ['procedure_category', 'procedure'];

            var IPD_TYPES = ['ipd'];

            var type = '';
            var visibleType = '';
            var filterResults = this.props.getElasticCriteriaResults(this.state.searchValue.trim(), this.props.type.includes('package') ? 'test' : this.props.type, location);

            var allSearchResults = this.props.getElasticCriteriaResults(this.state.searchValue.trim(), '', location);

            Promise.all([filterResults, allSearchResults]).then(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    filterSearchResults = _ref2[0],
                    searchResults = _ref2[1];

                if (searchResults && searchResults.suggestion && searchResults.suggestion.length) {

                    if (LAB_TYPES.indexOf(searchResults.suggestion[0].type) > -1 && _this4.props.type != 'lab') {

                        type = 'lab';
                        visibleType = searchResults.suggestion[0];
                    } else if (OPD_TYPES.indexOf(searchResults.suggestion[0].type) > -1 && _this4.props.type != 'opd') {

                        type = 'opd';
                        visibleType = searchResults.suggestion[0];
                    } else if (IPD_TYPES.indexOf(searchResults.suggestion[0].type) > -1 && _this4.props.type != 'ipd') {
                        type = 'ipd';
                        visibleType = searchResults.suggestion[0];
                    }

                    /*else if(PROCEDURE_TYPES.indexOf(searchResults.suggestion[0].type)>-1 && this.props.type !='procedures'){
                         type = 'procedures'
                        visibleType = searchResults.suggestion[0]
                    }*/
                }
                if (filterSearchResults) {

                    var filterResultsName = filterSearchResults.suggestion.map(function (x) {
                        return x.name;
                    }).join(',') || '';
                    var gtmData = {
                        'Category': 'ConsumerApp', 'Action': 'searchquery', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'search-query', 'searchString': _this4.state.searchValue,
                        'searchType': _this4.props.type, 'results': filterResultsName
                    };
                    _gtm2.default.sendEvent({ data: gtmData });
                    var filterData = filterSearchResults.suggestion;
                    // if (this.props.type.includes('package')) {
                    //     filterData = filterSearchResults.suggestion.filter((x) => {
                    //         if (x.is_package && x.is_package.length && x.is_package[0]) {
                    //             return true
                    //         }
                    //         return false
                    //     })
                    // } else if (this.props.type.includes('lab')) {
                    //     filterData = filterSearchResults.suggestion.filter((x) => {
                    //         if (x.is_package && x.is_package.length && !x.is_package[0]) {
                    //             return true
                    //         }
                    //         return false
                    //     })
                    // }
                    _this4.setState({ searchResults: filterData, searchedCategories: filterSearchResults.suggestedCategories, loading: false, type: type, visibleType: visibleType });
                }
            });
        }
    }, {
        key: 'addCriteria',
        value: function addCriteria(criteria) {

            criteria = Object.assign({}, criteria);

            if (this.props.type == 'opd' || this.props.type == 'procedures') {

                var action = '',
                    event = '';

                if (criteria.type.includes('visit_reason')) {

                    var data = {
                        'Category': 'ConsumerApp', 'Action': 'VisitReasonSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'visit-reason-searched', 'SelectedId': criteria.id || '', 'searched': 'autosuggest', 'searchString': this.state.searchValue
                    };
                    _gtm2.default.sendEvent({ data: data });

                    criteria.id = criteria.action.value.join(',');
                    criteria.type = 'speciality';
                } else if (criteria.action.param.includes('hospital_name')) {
                    var _data = {
                        'Category': 'ConsumerApp', 'Action': 'HospitalNameSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'hospital-name-searched', 'hospitalId': criteria.action.id || '', 'searched': 'autosuggest', 'searchString': this.state.searchValue || ''
                    };
                    _gtm2.default.sendEvent({ data: _data });

                    this.props.searchProceed("", "", criteria.action.id);
                    return;
                } else if (criteria.action.param.includes('procedure_category_ids')) {

                    criteria.id = criteria.action.value[0];
                    criteria.type = 'procedures_category';
                } else if (criteria.action.param.includes('procedure_ids')) {
                    var _data2 = {
                        'Category': 'ConsumerApp', 'Action': 'CommonProceduresSelected', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'common-procedures-selected', 'selected': criteria.name || '', 'selectedId': criteria.action.value ? criteria.action.value[0] : '', 'searched': 'autosuggest', 'searchString': this.state.searchValue
                    };
                    _gtm2.default.sendEvent({ data: _data2 });

                    criteria.id = criteria.action.value[0];
                    criteria.type = 'procedures';
                } else if (criteria.action.param.includes('specializations')) {
                    var _data3 = {
                        'Category': 'ConsumerApp', 'Action': 'CommonSpecializationsSelected', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'common-specializations-selected', 'selected': criteria.name || '', 'selectedId': criteria.action.value ? criteria.action.value[0] : '', 'searched': 'autosuggest', 'searchString': this.state.searchValue
                    };
                    _gtm2.default.sendEvent({ data: _data3 });

                    criteria.id = criteria.action.value[0];
                    criteria.type = 'speciality';
                } else if (criteria.action.param.includes('doctor_name')) {

                    var _data4 = {
                        'Category': 'ConsumerApp', 'Action': 'DoctorNameSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-name-searched', 'selectedId': criteria.action.value[0] || '', 'searched': 'autosuggest', 'searchString': this.state.searchValue || ''
                    };
                    _gtm2.default.sendEvent({ data: _data4 });

                    this.props.history.push('/opd/doctor/' + criteria.action.value[0] + '?hide_search_data=true');

                    //this.props.searchProceed(criteria.action.value[0],"")
                    return;
                }

                this.props.cloneCommonSelectedCriterias(criteria);
                this.setState({ searchValue: "" });
                this.props.showResults('opd');
            } else if (this.props.type.includes('ipd')) {
                var _data5 = {
                    'Category': 'ConsumerApp', 'Action': 'IPDNameSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-name-searched', 'selectedId': criteria.action.value[0] || '', 'searched': 'autosuggest', 'searchString': this.state.searchValue || ''
                };
                _gtm2.default.sendEvent({ data: _data5 });
                var ipdData = Object.assign({}, criteria);
                ipdData.id = criteria.action.value[0];
                ipdData.url = null;
                this.props.toggleIpd('ipd', ipdData, this.state.searchValue);
            } else {

                if (criteria.type == "lab") {
                    this.props.clearExtraTests();
                    var _data6 = {
                        'Category': 'ConsumerApp', 'Action': 'LabNameSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lab-name-searched', 'selectedId': criteria.action.value[0] || '', 'searched': 'autosuggest', 'searchString': this.state.searchValue || ''
                    };
                    _gtm2.default.sendEvent({ data: _data6 });

                    this.props.history.push('/lab/' + criteria.action.value[0]);
                    return;
                } else if (criteria.type == "lab_test") {
                    criteria.type = 'test';
                    criteria.url = '';
                    criteria.id = criteria.action.value[0];
                    if (criteria.action.test_type && criteria.action.test_type.length) {
                        criteria.test_type = criteria.action.test_type[0];
                    } else {
                        criteria.test_type = '';
                    }
                    this.setState({ searchValue: "" });

                    if (criteria.is_package && criteria.is_package[0]) {
                        this.props.togglePackages('test', criteria, this.state.searchValue);
                    } else {
                        this.props.toggleLabTests('test', criteria, this.state.searchValue);
                    }

                    // if (!criteria.is_package[0]) {

                    // }

                    // else {
                    //     criteria.type = 'package'//package
                    //     criteria.id = criteria.action.value[0]
                    //     this.setState({ searchValue: "" })
                    //     this.props.toggleSearchPackages(criteria)
                    // }

                    /*let data = {
                        'Category': 'ConsumerApp', 'Action': 'TestSelected', 'CustomerID': GTM.getUserId() || '', 'leadid': 0, 'event': 'test-selected', 'selected': criteria.name || '', 'selectedId': criteria.action.value || '', 'searched': 'autosuggest', 'searchString': this.state.searchValue
                    }
                    GTM.sendEvent({ data: data })
                     let selectedTestIds = []
                    this.props.dataState.selectedCriterias.map((x) => {
                        if (x.test_type) {
                            selectedTestIds.push(x.test_type)
                        }
                    })
                    if (selectedTestIds.length && criteria.action.test_type && criteria.action.test_type.length) {
                        if (selectedTestIds.indexOf(criteria.action.test_type[0]) == -1) {
                            this.setState({ currentTestType: criteria, searchValue: "" })
                            let data = {
                                'Category': 'ConsumerApp', 'Action': 'PopUpOpenLabTestError', 'CustomerID': GTM.getUserId() || '', 'leadid': 0, 'event': 'popup-open-lab-test-error', 'selected': criteria.name || '', 'selectedId': criteria.action.value || '', 'searched': 'autosuggest', 'searchString': this.state.searchValue
                            }
                            GTM.sendEvent({ data: data })
                            return
                        }
                    }
                    }
                    if (document.getElementById('search_results_view')) {
                    document.getElementById('search_results_view').scrollIntoView()
                    }
                    this.props.toggleDiagnosisCriteria('test', criteria)*/
                }
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
        key: 'focusOut',
        value: function focusOut() {
            var data = {
                'Category': 'ConsumerApp', 'Action': 'searchInputFocusOut', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'search-string-on-blur', 'searched': '', 'searchString': this.state.searchValue, 'type': this.props.type
            };
            _gtm2.default.sendEvent({ data: data });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            //Check user for insurance 
            var user_insurance_status = null;
            if (this.props.defaultProfile && this.props.profiles && this.props.profiles[this.props.defaultProfile]) {
                user_insurance_status = this.props.profiles[this.props.defaultProfile].insurance_status;
            }

            return _react2.default.createElement(
                'div',
                { className: 'profile-body-wrap' },
                this.props.hideHeaderOnMobile ? _react2.default.createElement(
                    'div',
                    { className: 'hide-762' },
                    _react2.default.createElement(_DesktopProfileHeader2.default, { showSearch: true })
                ) : _react2.default.createElement(_DesktopProfileHeader2.default, { showSearch: true }),
                _react2.default.createElement(
                    'section',
                    { className: "container parent-section book-appointment-section" + (this.props.hideHeaderOnMobile ? " mp0" : "") },
                    _react2.default.createElement(
                        'div',
                        { className: 'row main-row parent-section-row' },
                        _react2.default.createElement(_LeftBar2.default, null),
                        _react2.default.createElement(
                            'div',
                            { className: 'vip-new-container center-column pt-0' },
                            _react2.default.createElement('img', { className: 'search-back-main-ico', src: "/assets" + "/img/customer-icons/back-icon.png", onClick: function onClick() {
                                    return _this6.props.history.goBack();
                                } }),

                            // goback decides if search bar will be shown
                            this.props.goBack ? "" : _react2.default.createElement(
                                'div',
                                { className: 'widget mb-3' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'search-top-container' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'serch-nw-inputs-container' },
                                        this.props.selected == 'lab' && this.state.showPrescriptionInsuranceError ? _react2.default.createElement(
                                            'div',
                                            { className: 'health-advisor-col d-flex align-items-start mb-2' },
                                            _react2.default.createElement('img', { width: '17', className: 'info-detail-icon', src: "/assets" + "/img/info-icon.svg" }),
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'ml-2' },
                                                ' For insured customers, prescription upload is required at the time of booking'
                                            ),
                                            _react2.default.createElement('img', { className: 'cursor-pntr', width: '15', src: "/assets" + "/img/red-times-icon.svg", onClick: function onClick() {
                                                    return _this6.setState({ showPrescriptionInsuranceError: false });
                                                } })
                                        ) : '',
                                        _react2.default.createElement(_locationElements2.default, _extends({}, this.props, { onRef: function onRef(ref) {
                                                return _this6.child = ref;
                                            }, getCityListLayout: this.getCityListLayout.bind(this), resultType: 'search', fromCriteria: true, commonSearchPage: true })),
                                        this.state.searchCities.length > 0 ? "" : _react2.default.createElement(
                                            'div',
                                            null,
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'srch-radio-btns ipd-srch-radio-btn', id: 'search_results_view' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'dtl-radio' },
                                                    _react2.default.createElement(
                                                        'label',
                                                        { className: 'container-radio' },
                                                        'Doctor',
                                                        _react2.default.createElement('input', { type: 'radio', onChange: this.selectSearchType.bind(this, 'opd'), checked: this.props.selected == 'opd', name: 'radio' }),
                                                        _react2.default.createElement('span', { className: 'doc-checkmark' })
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'dtl-radio' },
                                                    _react2.default.createElement(
                                                        'label',
                                                        { className: 'container-radio' },
                                                        'Lab Test',
                                                        _react2.default.createElement('input', { type: 'radio', onChange: this.selectSearchType.bind(this, 'lab'), checked: this.props.selected == 'lab', name: 'radio' }),
                                                        _react2.default.createElement('span', { className: 'doc-checkmark' })
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'serch-nw-inputs mb-0' },
                                                _react2.default.createElement('input', { type: 'text', autoComplete: 'off', className: 'd-block d-lg-none new-srch-doc-lab', id: 'search_bar', onChange: this.inputHandler.bind(this), value: this.state.searchValue, placeholder: this.props.title, onClick: function onClick() {
                                                        if (_this6.props.goBack) {
                                                            _this6.props.history.go(-1);
                                                        }
                                                    }, onBlur: function onBlur() {
                                                        return _this6.focusOut();
                                                    },
                                                    ref: function ref(input) {
                                                        _this6.textInput = input;
                                                    } }),
                                                _react2.default.createElement('input', { type: 'text', autoComplete: 'off', className: 'd-none d-lg-block new-srch-doc-lab', id: 'search_bar_desktop', onChange: this.inputHandler.bind(this), value: this.state.searchValue, placeholder: this.props.title, onClick: function onClick() {
                                                        if (_this6.props.goBack) {
                                                            _this6.props.history.go(-1);
                                                        }
                                                    }, onBlur: function onBlur() {
                                                        return _this6.focusOut();
                                                    }
                                                }),
                                                _react2.default.createElement('img', { style: { width: '15px' }, className: 'srch-inp-img', src: "/assets" + "/img/shape-srch.svg" })
                                            )
                                        )
                                    )
                                )
                            ),
                            this.props.selected == 'lab' && !this.state.is_user_insurance_active ? _react2.default.createElement(_PrescriptionUpload2.default, { historyObj: this.props.history, search_lab: true, locationObj: this.props.location, profiles: this.props.profiles, afterUserLogin: this.afterUserLogin }) : '',
                            this.state.searchCities.length > 0 ? _react2.default.createElement(
                                'section',
                                null,
                                _react2.default.createElement(
                                    'div',
                                    { className: 'widget searchMargin' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'common-search-container pt-0' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'common-listing-cont' },
                                            _react2.default.createElement(
                                                'ul',
                                                null,
                                                this.state.searchCities.map(function (result, i) {
                                                    return _react2.default.createElement(
                                                        'li',
                                                        { key: i, onClick: _this6.selectLocation.bind(_this6, result) },
                                                        _react2.default.createElement(
                                                            'p',
                                                            { className: '' },
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
                                this.state.searchValue || Object.values(this.state.currentTestType).length ? _react2.default.createElement(
                                    'section',
                                    null,
                                    this.state.searchResults.length || this.state.searchValue ? _react2.default.createElement(
                                        'div',
                                        { className: 'widget searchMargin' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'common-search-container' },
                                            !this.state.searchCities.length && this.state.type && (this.state.searchValue || Object.values(this.state.currentTestType).length) ? _react2.default.createElement(
                                                'div',
                                                { style: { cursor: 'pointer' }, onClick: function onClick() {

                                                        var data = {
                                                            'Category': 'ConsumerApp', 'Action': 'ChangeTypeClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'change-type-clicked', 'hospitalId': '', 'searched': '', 'searchString': _this6.state.searchValue || ''
                                                        };
                                                        _gtm2.default.sendEvent({ data: data });

                                                        _this6.props.changeSelection(_this6.state.type, _this6.state.visibleType.name || '');
                                                    } },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'p-0 srch-prnsl-txt' },
                                                    'Did you mean: ',
                                                    _react2.default.createElement(
                                                        'span',
                                                        { className: 'search-prnsl-rslts' },
                                                        this.state.visibleType.name || ''
                                                    ),
                                                    ' in ',
                                                    _react2.default.createElement(
                                                        'span',
                                                        { className: 'fw-700' },
                                                        this.state.visibleType.visible_name
                                                    )
                                                )
                                            ) : '',
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'common-listing-cont' },
                                                _react2.default.createElement(
                                                    'ul',
                                                    null,
                                                    this.state.searchResults.map(function (cat, j) {
                                                        return _react2.default.createElement(
                                                            'li',
                                                            { key: j, onClick: _this6.addCriteria.bind(_this6, cat) },
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'serach-rslt-with-img' },
                                                                cat.type && cat.type.includes('doctor') ?
                                                                /*<span className="srch-rslt-wd-span usr-srch-img">
                                                                    <img style={{ width: '35px', borderRadius: '50%' }} className="" src={`https://cdn.docprime.com/media/${cat.image_path}`} />
                                                                </span>*/
                                                                _react2.default.createElement(
                                                                    _initialsPicture2.default,
                                                                    { name: cat.name, has_image: !!cat.image_path, className: 'elasticInitalPic initialsPicture-ds fltr-initialPicture-ds' },
                                                                    _react2.default.createElement(
                                                                        'span',
                                                                        { className: 'srch-rslt-wd-span usr-srch-img' },
                                                                        _react2.default.createElement('img', { style: { width: '35px', height: '35px', borderRadius: '50%' }, className: '', src: 'https://cdn.docprime.com/media/' + cat.image_path, alt: cat.name, title: cat.name })
                                                                    )
                                                                ) : _react2.default.createElement(
                                                                    'span',
                                                                    { className: 'srch-rslt-wd-span text-center srch-img' },
                                                                    _react2.default.createElement('img', { style: { width: '22px', margin: '0px 10px' }, className: '', src: "/assets" + "/img/shape-srch.svg" })
                                                                ),
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    { style: { padding: '0 50px 0 0' } },
                                                                    cat.name,
                                                                    _this6.props.type.includes('ipd') ? _react2.default.createElement(
                                                                        'span',
                                                                        { className: 'search-span-sub' },
                                                                        'IPD Procedures'
                                                                    ) : cat.is_package && cat.is_package.length && cat.is_package[0] ? _react2.default.createElement(
                                                                        'span',
                                                                        { className: 'search-span-sub' },
                                                                        'Health Package ',
                                                                        cat.number_of_tests && cat.number_of_tests.length && cat.number_of_tests[0] ? ' | ' + cat.number_of_tests[0] + ' Test Included' : ''
                                                                    ) : cat.type == "hospital" ? _react2.default.createElement(
                                                                        'span',
                                                                        { className: 'search-span-sub' },
                                                                        cat.locality && Array.isArray(cat.locality) ? cat.locality.join(', ') : cat.visible_name
                                                                    ) : _react2.default.createElement(
                                                                        'span',
                                                                        { className: 'search-span-sub' },
                                                                        cat.type.includes('doctor') && cat.primary_name && Array.isArray(cat.primary_name) ? cat.primary_name.slice(0, 2).join(', ') : cat.visible_name
                                                                    )
                                                                )
                                                            ),
                                                            cat.popularity && cat.popularity >= 5000 ? _react2.default.createElement(
                                                                'div',
                                                                { className: 'popular-txt' },
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    { className: 'fw-500' },
                                                                    'Popular'
                                                                )
                                                            ) : '',
                                                            cat.name && cat.name.includes('Aarogyam C') ? _react2.default.createElement(
                                                                'div',
                                                                { className: 'popular-txt' },
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    { className: 'fw-500' },
                                                                    'Popular'
                                                                )
                                                            ) : ''
                                                        );
                                                    }),
                                                    this.state.searchValue.length > 2 && (this.props.type == 'opd' || this.props.type == 'procedures') ? _react2.default.createElement(
                                                        'li',
                                                        { onClick: function onClick() {

                                                                var data = {
                                                                    'Category': 'ConsumerApp', 'Action': 'DoctorNameSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-name-searched', 'selectedId': '', 'searched': '', 'searchString': _this6.state.searchValue || ''
                                                                };
                                                                _gtm2.default.sendEvent({ data: data });

                                                                _this6.props.searchProceed(_this6.state.searchValue, "");
                                                            } },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'serach-rslt-with-img' },
                                                            _react2.default.createElement(
                                                                'span',
                                                                { className: 'srch-rslt-wd-span text-center srch-img' },
                                                                _react2.default.createElement('img', { style: { width: '20px', margin: '0px 10px' }, className: '', src: "/assets" + "/img/shape-srch.svg" })
                                                            ),
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'p-0' },
                                                                'Search all Doctors with name :',
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    { className: 'search-el-code-bold' },
                                                                    this.state.searchValue
                                                                )
                                                            )
                                                        )
                                                    ) : this.state.searchValue.length > 2 && this.props.type.includes('lab') ? _react2.default.createElement(
                                                        'li',
                                                        { onClick: function onClick() {

                                                                var data = {
                                                                    'Category': 'ConsumerApp', 'Action': 'LabNameSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lab-name-searched', 'selectedId': '', 'searched': '', 'searchString': _this6.state.searchValue || ''
                                                                };
                                                                _gtm2.default.sendEvent({ data: data });

                                                                _this6.props.searchProceed(_this6.state.searchValue);
                                                            } },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'serach-rslt-with-img' },
                                                            _react2.default.createElement(
                                                                'span',
                                                                { className: 'srch-rslt-wd-span text-center srch-img' },
                                                                _react2.default.createElement('img', { style: { width: '22px', margin: '0px 10px' }, className: '', src: "/assets" + "/img/shape-srch.svg" })
                                                            ),
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'p-0' },
                                                                'Search all Labs with name :',
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    { className: 'search-el-code-bold' },
                                                                    this.state.searchValue
                                                                )
                                                            )
                                                        )
                                                    ) : this.state.searchValue.length > 2 && this.props.type == 'package' ? _react2.default.createElement(
                                                        'li',
                                                        { onClick: function onClick() {

                                                                var data = {
                                                                    'Category': 'ConsumerApp', 'Action': 'PackageNameSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'package-name-searched', 'selectedId': '', 'searched': '', 'searchString': _this6.state.searchValue || ''
                                                                };
                                                                _gtm2.default.sendEvent({ data: data });

                                                                _this6.props.searchProceed(_this6.state.searchValue);
                                                            } },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'serach-rslt-with-img' },
                                                            _react2.default.createElement(
                                                                'span',
                                                                { className: 'srch-rslt-wd-span text-center srch-img' },
                                                                _react2.default.createElement('img', { style: { width: '22px', margin: '0px 10px' }, className: '', src: "/assets" + "/img/shape-srch.svg" })
                                                            ),
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'p-0' },
                                                                'Search all Packages with name :',
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    { className: 'search-el-code-bold' },
                                                                    this.state.searchValue
                                                                )
                                                            )
                                                        )
                                                    ) : '',
                                                    this.state.searchValue.length > 2 && (this.props.type == 'opd' || this.props.type == 'procedures') ? _react2.default.createElement(
                                                        'li',
                                                        { onClick: function onClick() {

                                                                var data = {
                                                                    'Category': 'ConsumerApp', 'Action': 'HospitalNameSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'hospital-name-searched', 'hospitalId': '', 'searched': '', 'searchString': _this6.state.searchValue || ''
                                                                };
                                                                _gtm2.default.sendEvent({ data: data });

                                                                _this6.props.searchProceed("", _this6.state.searchValue);
                                                            } },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'serach-rslt-with-img' },
                                                            _react2.default.createElement(
                                                                'span',
                                                                { className: 'srch-rslt-wd-span text-center srch-img' },
                                                                _react2.default.createElement('img', { style: { width: '20px', margin: '0px 10px' }, className: '', src: "/assets" + "/img/shape-srch.svg" })
                                                            ),
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'p-0' },
                                                                'Search all Hospitals with name :',
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    { className: 'search-el-code-bold' },
                                                                    this.state.searchValue
                                                                )
                                                            )
                                                        )
                                                    ) : ''
                                                )
                                            )
                                        )
                                    ) : ''
                                ) : this.props.checkForLoad ? this.props.children : _react2.default.createElement(_Loader2.default, null)
                            )
                        ),
                        this.props.clinic_card || this.props.lab_card || this.props.searchElasticView ? '' : _react2.default.createElement(_RightBar2.default, { extraClass: ' chat-float-btn-2', newChatBtn: this.props.newChatBtn, msgTemplate: 'gold_general_template' })
                    )
                )
            );
        }
    }]);

    return CriteriaElasticSearchView;
}(_react2.default.Component);

exports.default = CriteriaElasticSearchView;

/***/ }),

/***/ "./dev/js/components/commons/criteriaElasticSearch/index.js":
/*!******************************************************************!*\
  !*** ./dev/js/components/commons/criteriaElasticSearch/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _criteriaElasticSearchView = __webpack_require__(/*! ./criteriaElasticSearchView */ "./dev/js/components/commons/criteriaElasticSearch/criteriaElasticSearchView.js");

var _criteriaElasticSearchView2 = _interopRequireDefault(_criteriaElasticSearchView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _criteriaElasticSearchView2.default;

/***/ }),

/***/ "./dev/js/components/commons/search/index.js":
/*!***************************************************!*\
  !*** ./dev/js/components/commons/search/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _searchView = __webpack_require__(/*! ./searchView.js */ "./dev/js/components/commons/search/searchView.js");

var _searchView2 = _interopRequireDefault(_searchView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _searchView2.default;

/***/ }),

/***/ "./dev/js/components/commons/search/searchView.js":
/*!********************************************************!*\
  !*** ./dev/js/components/commons/search/searchView.js ***!
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

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _index = __webpack_require__(/*! ../../commons/commonlySearched/index.js */ "./dev/js/components/commons/commonlySearched/index.js");

var _index2 = _interopRequireDefault(_index);

var _criteriaSearch = __webpack_require__(/*! ../../commons/criteriaSearch */ "./dev/js/components/commons/criteriaSearch/index.js");

var _criteriaSearch2 = _interopRequireDefault(_criteriaSearch);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _LeftBar = __webpack_require__(/*! ../LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var SearchView = function (_React$Component) {
    _inherits(SearchView, _React$Component);

    function SearchView(props) {
        _classCallCheck(this, SearchView);

        var _this = _possibleConstructorReturn(this, (SearchView.__proto__ || Object.getPrototypeOf(SearchView)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(SearchView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (window) {
                window.scrollTo(0, 0);
            }

            var parsed = queryString.parse(this.props.location.search);

            var data = {
                'Category': 'ConsumerApp', 'Action': 'OpenSearchPage', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'open-search-from-' + (parsed.from || "default"), from: parsed.from
            };

            _gtm2.default.sendEvent({ data: data });
        }
    }, {
        key: 'searchProceedOPD',
        value: function searchProceedOPD() {
            var doctor_name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var hospital_name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

            // handle doctor name, hospital name
            this.props.mergeOPDState({
                filterCriteria: _extends({}, this.props.filterCriteria, {
                    doctor_name: doctor_name, hospital_name: hospital_name
                }),
                page: 1
            }, true);

            var data = {
                'Category': 'ConsumerApp', 'Action': 'ShowDoctorsClicked', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'show-doctors-clicked'
            };
            _gtm2.default.sendEvent({ data: data });

            this.props.history.push({
                pathname: '/opd/searchresults',
                state: { search_back: true }
            });
        }
    }, {
        key: 'searchProceedLAB',
        value: function searchProceedLAB() {
            var lab_name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

            // handle doctor name, hospital name
            this.props.mergeLABState({
                filterCriteria: _extends({}, this.props.filterCriteria, {
                    lab_name: lab_name
                }),
                page: 1
            }, true);

            this.props.history.push({
                pathname: '/lab/searchresults',
                state: { search_back: true }
            });
        }
    }, {
        key: 'showDoctors',
        value: function showDoctors(type) {
            if (this.props.locationType == "geo") {
                this.setState({ focusInput: 1 });
                if (window) {
                    window.scrollTo(0, 0);
                }
                return null;
            }

            if (type) {
                this.props.filterSelectedCriteria(type);
            }

            if (type == 'opd') {
                this.props.cloneCommonSelectedCriterias(this.props.selectedCriterias.filter(function (x) {
                    return !x.type.includes("procedures");
                }));
            } else {
                this.props.cloneCommonSelectedCriterias(this.props.selectedCriterias.filter(function (x) {
                    return x.type.includes("procedures");
                }));
            }

            this.searchProceedOPD("", "");
        }
    }, {
        key: 'showLabs',
        value: function showLabs() {
            if (this.props.locationType == "geo") {
                this.setState({ focusInput: 1 });
                if (window) {
                    window.scrollTo(0, 0);
                }
                return null;
            }
            this.searchProceedLAB("");
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                null,
                _react2.default.createElement('div', { id: 'map', style: { display: 'none' } }),
                _react2.default.createElement(
                    'div',
                    { className: 'container-fluid' },
                    this.props.selected == "opd" ? _react2.default.createElement(
                        _criteriaSearch2.default,
                        _extends({}, this.props, { checkForLoad: this.props.LOADED_SEARCH_CRITERIA_OPD, title: 'Search for doctor or disease', type: 'opd', paddingTopClass: true, searchProceed: this.searchProceedOPD.bind(this), focusInput: this.state.focusInput, hideHeaderOnMobile: true }),
                        _react2.default.createElement(
                            'section',
                            { className: 'opd-search-section mbl-pdng-zero' },
                            this.props.selectedCriterias && this.props.selectedCriterias.filter(function (x) {
                                return !x.type.includes("procedures");
                            }).length > 0 ? _react2.default.createElement(_index2.default, _extends({}, this.props, {
                                heading: 'View Selected (' + this.props.selectedCriterias.length + ')',
                                data: this.props.selectedCriterias.filter(function (x) {
                                    return !x.type.includes("procedures");
                                }),
                                selectedPills: true,
                                selected: [],
                                toggle: this.props.toggleOPDCriteria.bind(this)
                            })) : "",
                            _react2.default.createElement(_index2.default, _extends({}, this.props, {
                                heading: 'Common Specialities',
                                type: 'speciality',
                                data: this.props.specializations,
                                selected: this.props.selectedCriterias.filter(function (x) {
                                    return x.type == 'speciality';
                                }),
                                toggle: this.props.toggleOPDCriteria.bind(this)
                            })),
                            _react2.default.createElement(_index2.default, _extends({}, this.props, {
                                heading: 'Common Conditions',
                                type: 'condition',
                                data: this.props.conditions,
                                selected: this.props.selectedCriterias.filter(function (x) {
                                    return x.type == 'condition';
                                }),
                                toggle: this.props.toggleOPDCriteria.bind(this)
                            })),
                            _react2.default.createElement(
                                'button',
                                { onClick: this.showDoctors.bind(this, 'opd'), className: 'p-3 v-btn v-btn-primary btn-lg fixed horizontal bottom no-round text-lg sticky-btn' },
                                'Show Doctors'
                            )
                        )
                    ) : "",
                    this.props.selected == "lab" ? _react2.default.createElement(
                        _criteriaSearch2.default,
                        _extends({}, this.props, { checkForLoad: this.props.LOADED_SEARCH_CRITERIA_LAB, title: 'Search for tests or lab', paddingTopClass: true, searchProceed: this.searchProceedLAB.bind(this), focusInput: this.state.focusInput, hideHeaderOnMobile: true }),
                        _react2.default.createElement(
                            'section',
                            { className: 'opd-search-section mbl-pdng-zero' },
                            this.props.selectedCriterias && this.props.selectedCriterias.length > 0 ? _react2.default.createElement(_index2.default, _extends({}, this.props, {
                                heading: 'View Selected (' + this.props.selectedCriterias.length + ')',
                                data: this.props.selectedCriterias,
                                selected: [],
                                selectedPills: true,
                                toggle: this.props.toggleDiagnosisCriteria.bind(this)
                            })) : "",
                            _react2.default.createElement(_index2.default, _extends({}, this.props, {
                                heading: 'Common Test',
                                type: 'test',
                                data: this.props.common_tests.filter(function (x) {
                                    return !x.is_package;
                                }),
                                selected: this.props.selectedCriterias.filter(function (x) {
                                    return x.type == 'test';
                                }).filter(function (x) {
                                    return !x.is_package;
                                }),
                                toggle: this.props.toggleDiagnosisCriteria.bind(this)
                            })),
                            this.props.common_tests.filter(function (x) {
                                return x.is_package;
                            }).length ? _react2.default.createElement(_index2.default, _extends({}, this.props, {
                                heading: 'Common Health Packages',
                                type: 'test',
                                data: this.props.common_tests.filter(function (x) {
                                    return x.is_package;
                                }),
                                selected: this.props.selectedCriterias.filter(function (x) {
                                    return x.type == 'test';
                                }).filter(function (x) {
                                    return x.is_package;
                                }),
                                toggle: this.props.toggleDiagnosisCriteria.bind(this)
                            })) : "",
                            _react2.default.createElement(
                                'button',
                                { onClick: this.showLabs.bind(this), className: 'v-btn p-3 v-btn-primary btn-lg fixed horizontal bottom no-round text-lg sticky-btn' },
                                'Show Labs'
                            )
                        )
                    ) : "",
                    this.props.selected == "procedures" ? _react2.default.createElement(
                        _criteriaSearch2.default,
                        _extends({}, this.props, { checkForLoad: this.props.LOADED_SEARCH_CRITERIA_OPD, title: 'Search for dental treatments', type: 'opd', paddingTopClass: true, searchProceed: this.searchProceedOPD.bind(this), focusInput: this.state.focusInput, hideHeaderOnMobile: true }),
                        _react2.default.createElement(
                            'section',
                            { className: 'opd-search-section mbl-pdng-zero' },
                            this.props.selectedCriterias && this.props.selectedCriterias.filter(function (x) {
                                return x.type.includes("procedures");
                            }).length > 0 ? _react2.default.createElement(_index2.default, _extends({}, this.props, {
                                heading: 'View Selected (' + this.props.selectedCriterias.length + ')',
                                data: this.props.selectedCriterias.filter(function (x) {
                                    return x.type.includes("procedures");
                                }),
                                selectedPills: true,
                                selected: [],
                                toggle: this.props.toggleOPDCriteria.bind(this)
                            })) : "",
                            _react2.default.createElement(_index2.default, _extends({}, this.props, {
                                heading: 'Common Dental Treatments',
                                type: 'procedures_category',
                                data: this.props.procedure_categories,
                                selected: this.props.selectedCriterias.filter(function (x) {
                                    return x.type == 'procedures_category';
                                }),
                                toggle: this.props.toggleOPDCriteria.bind(this)
                            })),
                            _react2.default.createElement(
                                'button',
                                { onClick: this.showDoctors.bind(this, 'procedures'), className: 'p-3 v-btn v-btn-primary btn-lg fixed horizontal bottom no-round text-lg sticky-btn' },
                                'Show Doctors'
                            )
                        )
                    ) : ""
                )
            );
        }
    }]);

    return SearchView;
}(_react2.default.Component);

exports.default = SearchView;

/***/ }),

/***/ "./dev/js/components/commons/searchElastic/index.js":
/*!**********************************************************!*\
  !*** ./dev/js/components/commons/searchElastic/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _searchElasticView = __webpack_require__(/*! ./searchElasticView.js */ "./dev/js/components/commons/searchElastic/searchElasticView.js");

var _searchElasticView2 = _interopRequireDefault(_searchElasticView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _searchElasticView2.default;

/***/ }),

/***/ "./dev/js/components/commons/searchElastic/searchElasticView.js":
/*!**********************************************************************!*\
  !*** ./dev/js/components/commons/searchElastic/searchElasticView.js ***!
  \**********************************************************************/
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

var _index = __webpack_require__(/*! ../../commons/commonlySearched/index.js */ "./dev/js/components/commons/commonlySearched/index.js");

var _index2 = _interopRequireDefault(_index);

var _criteriaElasticSearch = __webpack_require__(/*! ../../commons/criteriaElasticSearch */ "./dev/js/components/commons/criteriaElasticSearch/index.js");

var _criteriaElasticSearch2 = _interopRequireDefault(_criteriaElasticSearch);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _FixedMobileFooter = __webpack_require__(/*! ../Home/FixedMobileFooter.js */ "./dev/js/components/commons/Home/FixedMobileFooter.js");

var _FixedMobileFooter2 = _interopRequireDefault(_FixedMobileFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var SearchElasticView = function (_React$Component) {
    _inherits(SearchElasticView, _React$Component);

    function SearchElasticView(props) {
        _classCallCheck(this, SearchElasticView);

        var _this = _possibleConstructorReturn(this, (SearchElasticView.__proto__ || Object.getPrototypeOf(SearchElasticView)).call(this, props));

        _this.state = {
            currentTestType: {},
            searchString: '',
            showFixedMobileFooter: true
        };
        return _this;
    }

    _createClass(SearchElasticView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (window) {
                window.scroll(0, 0);
            }

            var parsed = queryString.parse(this.props.location.search);

            var data = {
                'Category': 'ConsumerApp', 'Action': 'OpenSearchPage', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'open-search-from-' + (parsed.from || "default"), 'from': parsed.from, 'defaultSearchButton': this.props.selectedSearchType || '', 'page': parsed.pageType ? parsed.pageType : ''
            };

            _gtm2.default.sendEvent({ data: data });
        }
    }, {
        key: 'searchProceedOPD',
        value: function searchProceedOPD() {
            var doctor_name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var hospital_name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            var hospital_id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

            // handle doctor name, hospital name
            var state = {
                filterCriteria: _extends({}, this.props.dataState.filterCriteria, {
                    doctor_name: doctor_name, hospital_name: hospital_name, hospital_id: hospital_id
                }),
                nextFilterCriteria: _extends({}, this.props.dataState.filterCriteria, {
                    doctor_name: doctor_name, hospital_name: hospital_name, hospital_id: hospital_id
                })
            };

            if (doctor_name || hospital_name || hospital_id) {
                state.selectedCriterias = [];
                state.commonSelectedCriterias = [];
            }

            this.props.mergeOPDState(state, true);

            /*        let data = {
                        'Category': 'ConsumerApp', 'Action': 'ShowDoctorsClicked', 'CustomerID': GTM.getUserId(), 'leadid': 0, 'event': 'show-doctors-clicked'
                    }
                    GTM.sendEvent({ data: data })*/

            this.props.history.push({
                pathname: '/opd/searchresults',
                state: { search_back: true }
            });
        }
    }, {
        key: 'searchProceedLAB',
        value: function searchProceedLAB() {
            var lab_name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var show_all_labs = arguments[1];

            // handle doctor name, hospital name
            this.props.mergeLABState({
                filterCriteria: _extends({}, this.props.dataState.filterCriteria, {
                    lab_name: lab_name
                }),
                nextFilterCriteria: _extends({}, this.props.dataState.filterCriteria, {
                    lab_name: lab_name
                }),
                currentSearchedCriterias: show_all_labs ? [] : this.props.dataState.selectedCriterias,
                nextSelectedCriterias: show_all_labs ? [] : this.props.dataState.selectedCriterias
            }, true);

            var selectedTestIds = this.props.dataState.selectedCriterias.map(function (test) {
                return test.id;
            });
            var selectedTestsName = this.props.dataState.selectedCriterias.map(function (test) {
                return test.name;
            });
            var data = {
                'Category': 'ConsumerApp', 'Action': 'ShowLabClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'show-lab-clicked', 'SelectedTestIds': selectedTestIds.join(',') || '', 'SelectedTestName': selectedTestsName.join(','), 'TestCount': selectedTestIds.length || 0
            };
            _gtm2.default.sendEvent({ data: data });

            this.props.history.push({
                pathname: '/lab/searchresults',
                state: { search_back: true }
            });
        }
    }, {
        key: 'searchProceedPackages',
        value: function searchProceedPackages() {
            var _this2 = this;

            var selectedPackagesIds = [];
            if (this.props.dataState.selectedPackages.length > 0) {
                this.props.dataState.selectedPackages.map(function (x) {
                    selectedPackagesIds.push(x.id);
                });
                this.props.setPackageId(selectedPackagesIds, false);
            }
            setTimeout(function () {
                _this2.props.history.push('/searchpackages');
            }, 100);
        }
    }, {
        key: 'showDoctors',
        value: function showDoctors(type) {
            if (this.props.locationType == "geo") {
                this.setState({ focusInput: 1 });
                if (window) {
                    window.scrollTo(0, 0);
                }
                return null;
            }

            this.searchProceedOPD("", "");
        }
    }, {
        key: 'setCommonSelectedCriterias',
        value: function setCommonSelectedCriterias(type, criteria) {
            criteria = Object.assign({}, criteria);
            criteria.type = type;
            this.props.cloneCommonSelectedCriterias(criteria);
            this.showDoctors();
        }
    }, {
        key: 'showLabs',
        value: function showLabs(show_all_labs) {
            if (this.props.locationType == "geo") {
                this.setState({ focusInput: 1 });
                if (window) {
                    window.scrollTo(0, 0);
                }
                return null;
            }
            this.searchProceedLAB("", show_all_labs);
        }
    }, {
        key: 'showPackages',
        value: function showPackages() {
            if (this.props.locationType == "geo") {
                this.setState({ focusInput: 1 });
                if (window) {
                    window.scrollTo(0, 0);
                }
                return null;
            }
            this.searchProceedPackages();
        }
    }, {
        key: 'clickPopUp',
        value: function clickPopUp(type) {
            if (type == 1) {
                var data = {
                    'Category': 'ConsumerApp', 'Action': 'YesClickedLabTestPopup', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'yes-clicked-lab-test-popup', 'selected': this.state.currentTestType.name || '', 'selectedId': this.state.currentTestType.id || '', 'searched': this.state.searchString ? 'autosuggest' : '', 'searchString': this.state.searchString
                };
                _gtm2.default.sendEvent({ data: data });
                this.props.toggleDiagnosisCriteria('test', this.state.currentTestType, true);
            } else {
                var _data = {
                    'Category': 'ConsumerApp', 'Action': 'NoClickedLabTestPopup', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'no-clicked-lab-test-popup', 'searched': this.state.searchString ? 'autosuggest' : '', 'searchString': this.state.searchString
                };
            }
            if (document.getElementById('search_results_view')) {
                document.getElementById('search_results_view').scrollIntoView();
            }
            this.setState({ currentTestType: {} });
        }
    }, {
        key: 'toggleLabTests',
        value: function toggleLabTests(type, criteria) {
            var _this3 = this;

            var searchString = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

            if (criteria.is_package && criteria.is_package[0]) {
                this.togglePackages('', criteria);
            } else {
                var data = {
                    'Category': 'ConsumerApp', 'Action': 'TestSelected', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'test-selected', 'selected': criteria.name || '', 'selectedId': criteria.id || '', 'searched': 'autosuggest', 'searchString': searchString
                };
                _gtm2.default.sendEvent({ data: data });

                var selectedTestIds = [];
                // this.props.dataState.selectedCriterias.map((x) => {
                //     if (x.test_type) {
                //         selectedTestIds.push(x.test_type)
                //     }
                // })
                if (selectedTestIds.length && criteria.test_type) {
                    if (selectedTestIds.indexOf(criteria.test_type) == -1) {
                        this.setState({ currentTestType: criteria, searchString: searchString });
                        var _data2 = {
                            'Category': 'ConsumerApp', 'Action': 'PopUpOpenLabTestError', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'popup-open-lab-test-error', 'selected': criteria.name || '', 'selectedId': criteria.id || '', 'searched': 'autosuggest', 'searchString': searchString
                        };
                        _gtm2.default.sendEvent({ data: _data2 });
                        return;
                    }
                }
                if (document.getElementById('search_results_view')) {
                    document.getElementById('search_results_view').scrollIntoView();
                }

                this.props.toggleDiagnosisCriteria('test', criteria, true);
                setTimeout(function () {
                    _this3.showLabs();
                }, 100);
            }
        }
    }, {
        key: 'togglePackages',
        value: function togglePackages(type, criteria) {
            var _this4 = this;

            var searchString = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

            var data = {
                'Category': 'ConsumerApp', 'Action': 'PackageSelected', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'package-selected', 'selected': criteria.name || '', 'selectedId': criteria.id || '', 'searched': 'autosuggest', 'searchString': searchString
            };
            _gtm2.default.sendEvent({ data: data });
            // this.props.toggleSearchPackages(criteria)
            this.props.setPackageId(criteria.id);
            setTimeout(function () {
                _this4.showPackages();
            }, 100);
        }
    }, {
        key: 'searchProceedIPD',
        value: function searchProceedIPD() {}
    }, {
        key: 'showIPD',
        value: function showIPD(id) {
            var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


            if (url) {
                this.props.history.push('/' + url + '?showPopup=true');
            } else {
                this.props.history.push('/ipdInfo?ipd_id=' + id + '&showPopup=true');
            }
        }
    }, {
        key: 'toggleIpd',
        value: function toggleIpd(type, criteria) {
            var searchString = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

            var selectedCriteria = _extends({}, criteria);
            selectedCriteria.type = 'ipd';
            this.props.toggleIPDCriteria(selectedCriteria, true);
            this.showIPD(criteria.id, criteria.url);
        }
    }, {
        key: 'toggleFixedMobileFooter',
        value: function toggleFixedMobileFooter(toShow) {
            if (toShow) {
                this.setState({ showFixedMobileFooter: true });
            } else {
                this.setState({ showFixedMobileFooter: false });
            }
        }
    }, {
        key: 'render',
        value: function render() {

            var title = '';
            var searchProceed = '';
            var showResults = '';
            var commonSearched = '';

            if (this.props.selectedSearchType.includes('opd')) {
                title = "Search for doctor, hospital, specialty";
                searchProceed = this.searchProceedOPD.bind(this);
                showResults = this.showDoctors.bind(this);

                commonSearched = _react2.default.createElement(_index2.default, _extends({}, this.props, {
                    heading: 'Common Specialities',
                    type: 'speciality',
                    selectedSearchType: this.props.selectedSearchType,
                    data: this.props.dataState.specializations,
                    selected: [] /*this.props.selectedCriterias.filter(x => x.type == 'speciality')*/,
                    toggle: this.setCommonSelectedCriterias.bind(this)
                }));
            } else if (this.props.selectedSearchType.includes('lab')) {
                title = "Search for test, lab, health package";
                searchProceed = this.searchProceedLAB.bind(this);
                showResults = this.showLabs.bind(this);

                commonSearched = _react2.default.createElement(_index2.default, _extends({}, this.props, {
                    heading: 'Common Test',
                    type: 'test',
                    selectedSearchType: this.props.selectedSearchType,
                    data: this.props.dataState.common_tests,
                    selected: [] /*this.props.dataState.selectedCriterias*/,
                    toggle: this.toggleLabTests.bind(this),
                    selectedCriterias: this.props.dataState.selectedCriterias
                }));
            } else if (this.props.selectedSearchType.includes('package')) {
                title = "health packages";
                searchProceed = this.searchProceedPackages.bind(this);
                showResults = this.showPackages.bind(this);

                commonSearched = _react2.default.createElement(_index2.default, _extends({}, this.props, {
                    heading: 'Common Health Packages',
                    type: 'package',
                    selectedSearchType: this.props.selectedSearchType,
                    data: this.props.dataState.common_package,
                    selected: this.props.dataState.selectedPackages,
                    toggle: this.togglePackages.bind(this),
                    selectedCriterias: this.props.dataState.selectedPackages
                }));
            } else if (this.props.selectedSearchType.includes('ipd')) {

                title = "Search for surgery, procedure";
                searchProceed = this.searchProceedIPD.bind(this);
                showResults = this.showIPD.bind(this);

                commonSearched = _react2.default.createElement(_index2.default, _extends({}, this.props, {
                    heading: 'Commonly Searched',
                    type: 'ipd',
                    selectedSearchType: this.props.selectedSearchType,
                    data: this.props.dataState.ipd_procedures,
                    selected: [],
                    toggle: this.toggleIpd.bind(this),
                    selectedCriterias: this.props.dataState.selectedCriterias
                }));
            }

            // else if (this.props.selectedSearchType.includes('package')) {
            //     title = "health packages"
            //     searchProceed = this.searchProceedPackages.bind(this)
            //     showResults = this.showPackages.bind(this)

            //     commonSearched = <CommonlySearched
            //         heading="Common Health Packages"
            //         type="package"
            //         selectedSearchType={this.props.selectedSearchType}
            //         data={this.props.dataState.common_package}
            //         selected={this.props.dataState.selectedPackages}
            //         toggle={this.togglePackages.bind(this)}
            //         selectedCriterias={this.props.dataState.selectedPackages}
            //     />
            // }

            return _react2.default.createElement(
                'section',
                null,
                _react2.default.createElement('div', { id: 'map', style: { display: 'none' } }),
                _react2.default.createElement(
                    'div',
                    { className: 'container-fluid' },
                    _react2.default.createElement(
                        _criteriaElasticSearch2.default,
                        _extends({}, this.props, { checkForLoad: true, title: title, type: this.props.selectedSearchType, paddingTopClass: true, searchProceed: searchProceed, showResults: showResults, focusInput: this.state.focusInput, hideHeaderOnMobile: true, toggleLabTests: this.toggleLabTests.bind(this), toggleIpd: this.toggleIpd.bind(this), searchElasticView: true, toggleFixedMobileFooter: this.toggleFixedMobileFooter.bind(this), togglePackages: this.togglePackages.bind(this) }),
                        _react2.default.createElement(
                            'section',
                            { className: 'opd-search-section mbl-pdng-zero' },
                            commonSearched,
                            this.props.selectedSearchType.includes('lab') && !this.props.is_login_user_insured ? _react2.default.createElement(_index2.default, _extends({}, this.props, {
                                heading: 'Common Health Packages',
                                type: 'test',
                                data: this.props.dataState.common_package,
                                selectedSearchType: this.props.selectedSearchType,
                                selected: [] /*this.props.dataState.selectedCriterias.filter(x => x.type == 'test')*/,
                                toggle: this.togglePackages.bind(this),
                                isPackage: true
                            })) : '',
                            Object.values(this.state.currentTestType).length ? _react2.default.createElement(
                                'div',
                                { className: 'search-el-popup-overlay ' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'search-el-popup' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'widget' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'widget-content padiing-srch-el' },
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'srch-el-conent' },
                                                'Pathology and Radiology tests (lab visit\n                                                    required) cannot be booked together. Do you want to search ' + this.state.currentTestType.name + '  test instead ?'
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'search-el-btn-container' },
                                                _react2.default.createElement(
                                                    'button',
                                                    { onClick: this.clickPopUp.bind(this, 1) },
                                                    'Yes'
                                                ),
                                                _react2.default.createElement(
                                                    'button',
                                                    { onClick: this.clickPopUp.bind(this, 2) },
                                                    'No'
                                                )
                                            )
                                        )
                                    )
                                )
                            ) : ''
                        )
                    )
                ),
                this.state.showFixedMobileFooter ? _react2.default.createElement(_FixedMobileFooter2.default, this.props) : ''
            );
        }
    }]);

    return SearchElasticView;
}(_react2.default.Component);

exports.default = SearchElasticView;

/***/ }),

/***/ "./dev/js/containers/commons/search.js":
/*!*********************************************!*\
  !*** ./dev/js/containers/commons/search.js ***!
  \*********************************************/
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

var _search = __webpack_require__(/*! ../../components/commons/search */ "./dev/js/components/commons/search/index.js");

var _search2 = _interopRequireDefault(_search);

var _searchElastic = __webpack_require__(/*! ../../components/commons/searchElastic */ "./dev/js/components/commons/searchElastic/index.js");

var _searchElastic2 = _interopRequireDefault(_searchElastic);

var _config = __webpack_require__(/*! ../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
    _inherits(Search, _React$Component);

    function Search(props) {
        _classCallCheck(this, Search);

        var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

        _this.state = { elasticSearchString: '' };
        return _this;
    }

    _createClass(Search, [{
        key: 'changeSelection',
        value: function changeSelection(which) {
            var searchString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            var data = {
                'Category': 'ConsumerApp', 'Action': 'ToggleSearchType', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'toogle-search-type', 'type': which || ''
            };

            this.setState({ elasticSearchString: searchString });
            _gtm2.default.sendEvent({ data: data });
            this.props.selectSearchType(which);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (window) {
                window.scroll(0, 0);
            }
            //opd
            var locality = '';
            var selectedLocation = null;
            if (this.props.OPD_STATE && this.props.OPD_STATE.selectedLocation) {
                locality = this.props.OPD_STATE.selectedLocation.locality || '';
                selectedLocation = this.props.OPD_STATE.selectedLocation;
            }
            this.props.loadOPDCommonCriteria(selectedLocation);
            this.props.resetFilters();
            // lab
            this.props.loadLabCommonCriterias();
            // this.props.loadOPDInsurance(selectedLocation)
            // this.props.clearExtraTests()
        }
    }, {
        key: 'render',
        value: function render() {

            if (_config2.default.SEARCH_ELASTIC_VIEW) {
                var dataState = '';

                if (this.props.selectedSearchType == 'opd' || this.props.selectedSearchType == 'procedures') {
                    dataState = this.props.OPD_STATE;
                } else if (this.props.selectedSearchType == 'ipd') {
                    dataState = this.props.IPD_STATE;
                } else {
                    dataState = this.props.LAB_STATE;
                }

                return _react2.default.createElement(_searchElastic2.default, _extends({}, this.props, { dataState: dataState, selected: this.props.selectedSearchType, changeSelection: this.changeSelection.bind(this), elasticSearchString: this.state.elasticSearchString, common_settings: this.props.OPD_STATE.common_settings }));
            } else {

                if (this.props.selectedSearchType == 'opd') {
                    return _react2.default.createElement(_search2.default, _extends({}, this.props, this.props.OPD_STATE, { selected: this.props.selectedSearchType, changeSelection: this.changeSelection.bind(this), common_settings: this.props.OPD_STATE.common_settings }));
                }

                if (this.props.selectedSearchType == 'lab') {
                    return _react2.default.createElement(_search2.default, _extends({}, this.props, this.props.LAB_STATE, { selected: this.props.selectedSearchType, changeSelection: this.changeSelection.bind(this), common_settings: this.props.OPD_STATE.common_settings }));
                }

                if (this.props.selectedSearchType == 'procedures') {
                    return _react2.default.createElement(_search2.default, _extends({}, this.props, this.props.OPD_STATE, { selected: this.props.selectedSearchType, changeSelection: this.changeSelection.bind(this), common_settings: this.props.OPD_STATE.common_settings }));
                }
            }
        }
    }]);

    return Search;
}(_react2.default.Component);

Search.contextTypes = {
    router: function router() {
        return null;
    }
};


var mapStateToProps = function mapStateToProps(state) {
    var OPD_STATE = function () {
        var _state$SEARCH_CRITERI = state.SEARCH_CRITERIA_OPD,
            LOADED_SEARCH_CRITERIA_OPD = _state$SEARCH_CRITERI.LOADED_SEARCH_CRITERIA_OPD,
            specializations = _state$SEARCH_CRITERI.specializations,
            conditions = _state$SEARCH_CRITERI.conditions,
            selectedCriterias = _state$SEARCH_CRITERI.selectedCriterias,
            selectedLocation = _state$SEARCH_CRITERI.selectedLocation,
            filterCriteria = _state$SEARCH_CRITERI.filterCriteria,
            locationType = _state$SEARCH_CRITERI.locationType,
            procedure_categories = _state$SEARCH_CRITERI.procedure_categories,
            procedures = _state$SEARCH_CRITERI.procedures,
            common_settings = _state$SEARCH_CRITERI.common_settings;


        return {
            LOADED_SEARCH_CRITERIA_OPD: LOADED_SEARCH_CRITERIA_OPD,
            specializations: specializations,
            conditions: conditions,
            selectedCriterias: selectedCriterias,
            selectedLocation: selectedLocation,
            filterCriteria: filterCriteria,
            locationType: locationType,
            procedure_categories: procedure_categories,
            procedures: procedures,
            common_settings: common_settings
        };
    }();

    var LAB_STATE = function () {
        var _state$SEARCH_CRITERI2 = state.SEARCH_CRITERIA_LABS,
            LOADED_SEARCH_CRITERIA_LAB = _state$SEARCH_CRITERI2.LOADED_SEARCH_CRITERIA_LAB,
            common_tests = _state$SEARCH_CRITERI2.common_tests,
            common_conditions = _state$SEARCH_CRITERI2.common_conditions,
            preferred_labs = _state$SEARCH_CRITERI2.preferred_labs,
            selectedCriterias = _state$SEARCH_CRITERI2.selectedCriterias,
            selectedLocation = _state$SEARCH_CRITERI2.selectedLocation,
            filterCriteria = _state$SEARCH_CRITERI2.filterCriteria,
            locationType = _state$SEARCH_CRITERI2.locationType,
            common_package = _state$SEARCH_CRITERI2.common_package,
            filterCriteriaPackages = _state$SEARCH_CRITERI2.filterCriteriaPackages,
            selectedPackages = _state$SEARCH_CRITERI2.selectedPackages;


        return {
            LOADED_SEARCH_CRITERIA_LAB: LOADED_SEARCH_CRITERIA_LAB,
            common_tests: common_tests,
            common_conditions: common_conditions,
            preferred_labs: preferred_labs,
            selectedCriterias: selectedCriterias,
            selectedLocation: selectedLocation,
            filterCriteria: filterCriteria,
            locationType: locationType,
            common_package: common_package,
            filterCriteriaPackages: filterCriteriaPackages,
            selectedPackages: selectedPackages
        };
    }();

    var IPD_STATE = function () {
        var _state$SEARCH_CRITERI3 = state.SEARCH_CRITERIA_OPD,
            LOADED_SEARCH_CRITERIA_OPD = _state$SEARCH_CRITERI3.LOADED_SEARCH_CRITERIA_OPD,
            ipd_procedures = _state$SEARCH_CRITERI3.ipd_procedures,
            selectedLocation = _state$SEARCH_CRITERI3.selectedLocation,
            locationType = _state$SEARCH_CRITERI3.locationType;
        var selectedCriterias = state.SEARCH_CRITERIA_IPD.selectedCriterias;


        return {
            LOADED_SEARCH_CRITERIA_OPD: LOADED_SEARCH_CRITERIA_OPD,
            ipd_procedures: ipd_procedures,
            selectedLocation: selectedLocation,
            locationType: locationType,
            selectedCriterias: selectedCriterias
        };
    }();

    var _state$USER = state.USER,
        selectedSearchType = _state$USER.selectedSearchType,
        is_login_user_insured = _state$USER.is_login_user_insured,
        profiles = _state$USER.profiles,
        defaultProfile = _state$USER.defaultProfile;


    return { OPD_STATE: OPD_STATE, LAB_STATE: LAB_STATE, selectedSearchType: selectedSearchType, IPD_STATE: IPD_STATE, is_login_user_insured: is_login_user_insured, profiles: profiles, defaultProfile: defaultProfile };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        // opd
        loadOPDCommonCriteria: function loadOPDCommonCriteria(selectedLocation) {
            return dispatch((0, _index.loadOPDCommonCriteria)(selectedLocation));
        },
        toggleOPDCriteria: function toggleOPDCriteria(type, criteria) {
            return dispatch((0, _index.toggleOPDCriteria)(type, criteria));
        },
        getOPDCriteriaResults: function getOPDCriteriaResults(searchString, callback) {
            return dispatch((0, _index.getOPDCriteriaResults)(searchString, callback));
        },
        resetFilters: function resetFilters() {
            return dispatch((0, _index.resetFilters)());
        },
        mergeOPDState: function mergeOPDState(state, fetchNewResults) {
            return dispatch((0, _index.mergeOPDState)(state, fetchNewResults));
        },
        cloneCommonSelectedCriterias: function cloneCommonSelectedCriterias(selectedCriterias) {
            return dispatch((0, _index.cloneCommonSelectedCriterias)(selectedCriterias));
        },
        filterSelectedCriteria: function filterSelectedCriteria(type) {
            return dispatch((0, _index.filterSelectedCriteria)(type));
        },
        //lab
        loadLabCommonCriterias: function loadLabCommonCriterias() {
            return dispatch((0, _index.loadLabCommonCriterias)());
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
        clearAllTests: function clearAllTests() {
            return dispatch((0, _index.clearAllTests)());
        },
        mergeLABState: function mergeLABState(state, fetchNewResults) {
            return dispatch((0, _index.mergeLABState)(state, fetchNewResults));
        },
        selectSearchType: function selectSearchType(type) {
            return dispatch((0, _index.selectSearchType)(type));
        },
        getElasticCriteriaResults: function getElasticCriteriaResults(searchString, type, location, callback) {
            return dispatch((0, _index.getElasticCriteriaResults)(searchString, type, location, callback));
        },
        // package
        setPackageId: function setPackageId(package_id, isHomePage) {
            return dispatch((0, _index.setPackageId)(package_id, isHomePage));
        },
        toggleSearchPackages: function toggleSearchPackages(healthPackage) {
            return dispatch((0, _index.toggleSearchPackages)(healthPackage));
        },
        toggleIPDCriteria: function toggleIPDCriteria(criteria, forceAdd) {
            return dispatch((0, _index.toggleIPDCriteria)(criteria, forceAdd));
        },
        loadOPDInsurance: function loadOPDInsurance(city) {
            return dispatch((0, _index.loadOPDInsurance)(city));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Search);

/***/ }),

/***/ "./node_modules/compress.js/index.js":
/*!*******************************************!*\
  !*** ./node_modules/compress.js/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var a=n[i]={exports:{},id:i,loaded:!1};return t[i].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){var i,a,r;!function(o,u){a=[t,n(1),n(2),n(3),n(4),n(5),n(6)],i=u,r="function"==typeof i?i.apply(e,a):i,!(void 0!==r&&(t.exports=r))}(this,function(t,e,n,i,a,r,o){"use strict";function u(t){return t&&t.__esModule?t:{default:t}}function s(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var d=u(e),l=u(n),c=u(i),h=u(a),v=u(r),p=u(o),g=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),w=function(){function t(){f(this,t)}return g(t,[{key:"attach",value:function(t,e){var n=this;return new Promise(function(i,a){var r=document.querySelector(t);r.setAttribute("accept","image/*"),r.addEventListener("change",function(t){var a=n.compress([].concat(s(t.target.files)),e);i(a)},!1)})}},{key:"compress",value:function(t,e){function n(t,e){var n=new v.default(e);return n.start=window.performance.now(),n.alt=t.name,n.ext=t.type,n.startSize=t.size,p.default.orientation(t).then(function(e){return n.orientation=e,c.default.load(t)}).then(i(n))}function i(t){return function(e){return h.default.load(e).then(function(e){if(t.startWidth=e.naturalWidth,t.startHeight=e.naturalHeight,t.resize){var n=h.default.resize(t.maxWidth,t.maxHeight)(e.naturalWidth,e.naturalHeight),i=n.width,a=n.height;t.endWidth=i,t.endHeight=a}else t.endWidth=e.naturalWidth,t.endHeight=e.naturalHeight;return l.default.imageToCanvas(t.endWidth,t.endHeight,t.orientation)(e)}).then(function(e){return t.iterations=1,t.base64prefix=d.default.prefix(t.ext),a(e,t.startSize,t.quality,t.size,t.minQuality,t.iterations)}).then(function(e){return t.finalSize=d.default.size(e),d.default.data(e)}).then(function(e){t.end=window.performance.now();var n=t.end-t.start;return{data:e,prefix:t.base64prefix,elapsedTimeInSeconds:n/1e3,alt:t.alt,initialSizeInMb:l.default.size(t.startSize).MB,endSizeInMb:l.default.size(t.finalSize).MB,ext:t.ext,quality:t.quality,endWidthInPx:t.endWidth,endHeightInPx:t.endHeight,initialWidthInPx:t.startWidth,initialHeightInPx:t.startHeight,sizeReducedInPercent:(t.startSize-t.finalSize)/t.startSize*100,iterations:t.iterations}})}}function a(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=arguments[3],r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=arguments[5],u=l.default.canvasToBase64(t,n),s=d.default.size(u);return o+=1,s>i?a(t,s,n-.1,i,r,o):n>r?a(t,s,n-.1,i,r,o):n<.5?u:u}return Promise.all(t.map(function(t){return n(t,e)}))}}],[{key:"convertBase64ToFile",value:function(t,e){return l.default.base64ToFile(t,e)}}]),t}();t.exports=w})},function(t,e,n){var i,a,r;!function(n,o){a=[e],i=o,r="function"==typeof i?i.apply(e,a):i,!(void 0!==r&&(t.exports=r))}(this,function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(t){var e=t.replace(/^data:image\/\w+;base64,/,"").length;return(e-814)/1.37},n=function(t){return t.split(";")[0].match(/jpeg|png|gif/)[0]},i=function(t){return t.replace(/^data:image\/\w+;base64,/,"")},a=function(t){return"data:"+t+";base64,"};t.default={size:e,mime:n,data:i,prefix:a}})},function(t,e,n){var i,a,r;!function(n,o){a=[e],i=o,r="function"==typeof i?i.apply(e,a):i,!(void 0!==r&&(t.exports=r))}(this,function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"image/jpeg",n=window.atob(t),i=[],a=0;a<n.length;a++)i[a]=n.charCodeAt(a);return new window.Blob([new Uint8Array(i)],{type:e})},n=function(t,e,n){var i=document.createElement("canvas"),a=i.getContext("2d");return i.width=t,i.height=e,function(r){if(!n||n>8)return a.drawImage(r,0,0,i.width,i.height),i;switch(n>4&&(i.width=e,i.height=t),n){case 2:a.translate(t,0),a.scale(-1,1);break;case 3:a.translate(t,e),a.rotate(Math.PI);break;case 4:a.translate(0,e),a.scale(1,-1);break;case 5:a.rotate(.5*Math.PI),a.scale(1,-1);break;case 6:a.rotate(.5*Math.PI),a.translate(0,-e);break;case 7:a.rotate(.5*Math.PI),a.translate(t,-e),a.scale(-1,1);break;case 8:a.rotate(-.5*Math.PI),a.translate(-t,0)}return n>4?a.drawImage(r,0,0,i.height,i.width):a.drawImage(r,0,0,i.width,i.height),i}},i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.75,n=t.toDataURL("image/jpeg",e);return n},a=function(t){return{KB:t/1e3,MB:t/1e6}};t.default={base64ToFile:e,imageToCanvas:n,canvasToBase64:i,size:a}})},function(t,e,n){var i,a,r;!function(n,o){a=[e],i=o,r="function"==typeof i?i.apply(e,a):i,!(void 0!==r&&(t.exports=r))}(this,function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(t){return new Promise(function(e,n){var i=new window.FileReader;i.addEventListener("load",function(t){e(t.target.result)},!1),i.addEventListener("error",function(t){n(t)},!1),i.readAsDataURL(t)})};t.default={load:e}})},function(t,e,n){var i,a,r;!function(n,o){a=[e],i=o,r="function"==typeof i?i.apply(e,a):i,!(void 0!==r&&(t.exports=r))}(this,function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(t){return new Promise(function(e,n){var i=new window.Image;i.addEventListener("load",function(){e(i)},!1),i.addEventListener("error",function(t){n(t)},!1),i.src=t})},n=function(t,e){return function(n,i){if(!t&&!e)return{width:n,height:i};var a=n/i,r=t/e,o=void 0,u=void 0;return a>r?(o=Math.min(n,t),u=o/a):(u=Math.min(i,e),o=u*a),{width:o,height:u}}};t.default={load:e,resize:n}})},function(t,e,n){var i,a,r;!function(n,o){a=[e],i=o,r="function"==typeof i?i.apply(e,a):i,!(void 0!==r&&(t.exports=r))}(this,function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function t(n){var i=n.quality,a=void 0===i?.75:i,r=n.size,o=void 0===r?2:r,u=n.maxWidth,s=void 0===u?1920:u,f=n.maxHeight,d=void 0===f?1920:f,l=n.resize,c=void 0===l||l;e(this,t),this.start=window.performance.now(),this.end=null,this.alt=null,this.ext=null,this.startSize=null,this.startWidth=null,this.startHeight=null,this.size=1e3*o*1e3,this.endSize=null,this.endWidth=null,this.endHeight=null,this.iterations=0,this.base64prefix=null,this.quality=a,this.resize=c,this.maxWidth=s,this.maxHeight=d,this.orientation=1};t.default=n})},function(t,e,n){var i,a,r;!function(n,o){a=[e],i=o,r="function"==typeof i?i.apply(e,a):i,!(void 0!==r&&(t.exports=r))}(this,function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(t){return new Promise(function(e,n){var i=new window.FileReader;i.onload=function(t){var n=new DataView(t.target.result);65496!==n.getUint16(0,!1)&&e(-2);for(var i=n.byteLength,a=2;a<i;){var r=n.getUint16(a,!1);if(a+=2,65505===r){1165519206!==n.getUint32(a+=2,!1)&&e(-1);var o=18761===n.getUint16(a+=6,!1);a+=n.getUint32(a+4,o);var u=n.getUint16(a,o);a+=2;for(var s=0;s<u;s++)274===n.getUint16(a+12*s,o)&&e(n.getUint16(a+12*s+8,o))}else{if(65280!==(65280&r))break;a+=n.getUint16(a,!1)}}e(-1)},i.readAsArrayBuffer(t.slice(0,65536))})};t.default={orientation:e}})}])});
//# sourceMappingURL=index.js.map

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2NyaXRlcmlhRWxhc3RpY1NlYXJjaC9jcml0ZXJpYUVsYXN0aWNTZWFyY2hWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvY3JpdGVyaWFFbGFzdGljU2VhcmNoL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvc2VhcmNoL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvc2VhcmNoL3NlYXJjaFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9zZWFyY2hFbGFzdGljL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvc2VhcmNoRWxhc3RpYy9zZWFyY2hFbGFzdGljVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9jb21tb25zL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29tcHJlc3MuanMvaW5kZXguanMiXSwibmFtZXMiOlsiZGVib3VuY2VyIiwiZm4iLCJkZWxheSIsInRpbWVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImNhbGwiLCJDcml0ZXJpYUVsYXN0aWNTZWFyY2hWaWV3IiwicHJvcHMiLCJhZnRlclVzZXJMb2dpbiIsImlzX3VzZXJfaW5zdXJhbmNlX2FjdGl2ZSIsInVzZXJfaW5zdXJhbmNlX3N0YXR1cyIsImRlZmF1bHRQcm9maWxlIiwicHJvZmlsZXMiLCJpbnN1cmFuY2Vfc3RhdHVzIiwic2V0U3RhdGUiLCJzaG93UHJlc2NyaXB0aW9uSW5zdXJhbmNlRXJyb3IiLCJzdGF0ZSIsInNlYXJjaFZhbHVlIiwic2VhcmNoUmVzdWx0cyIsImxvYWRpbmciLCJzZWFyY2hDaXRpZXMiLCJjdXJyZW50VGVzdFR5cGUiLCJ0eXBlIiwidmlzaWJsZVR5cGUiLCJnZXRTZWFyY2hSZXN1bHRzIiwiYmluZCIsImlucHV0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndpbmRvdyIsInNjcm9sbCIsImhpc3RvcnkiLCJhY3Rpb24iLCJsb2NhdGlvbiIsInNlYXJjaCIsImluY2x1ZGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbEludG9WaWV3Iiwic2VsZWN0U2VhcmNoVHlwZSIsIm5leHRQcm9wcyIsImVsYXN0aWNTZWFyY2hTdHJpbmciLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZWFyY2hTdHJpbmciLCJ0cmltIiwibGVuZ3RoIiwidG9nZ2xlRml4ZWRNb2JpbGVGb290ZXIiLCJ0ZXh0SW5wdXQiLCJmb2N1cyIsInRleHRJbnB1dF9kZXNrdG9wIiwiY2hhbmdlU2VsZWN0aW9uIiwibGF0IiwibG9uZyIsInBsYWNlX2lkIiwiZGF0YVN0YXRlIiwic2VsZWN0ZWRMb2NhdGlvbiIsImdlb21ldHJ5IiwibG5nIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJMQUJfVFlQRVMiLCJPUERfVFlQRVMiLCJQUk9DRURVUkVfVFlQRVMiLCJJUERfVFlQRVMiLCJmaWx0ZXJSZXN1bHRzIiwiZ2V0RWxhc3RpY0NyaXRlcmlhUmVzdWx0cyIsImFsbFNlYXJjaFJlc3VsdHMiLCJQcm9taXNlIiwiYWxsIiwidGhlbiIsImZpbHRlclNlYXJjaFJlc3VsdHMiLCJzdWdnZXN0aW9uIiwiaW5kZXhPZiIsImZpbHRlclJlc3VsdHNOYW1lIiwibWFwIiwieCIsIm5hbWUiLCJqb2luIiwiZ3RtRGF0YSIsIkdUTSIsImdldFVzZXJJZCIsInNlbmRFdmVudCIsImRhdGEiLCJmaWx0ZXJEYXRhIiwic2VhcmNoZWRDYXRlZ29yaWVzIiwic3VnZ2VzdGVkQ2F0ZWdvcmllcyIsImNyaXRlcmlhIiwiT2JqZWN0IiwiYXNzaWduIiwiZXZlbnQiLCJpZCIsInBhcmFtIiwic2VhcmNoUHJvY2VlZCIsInB1c2giLCJjbG9uZUNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzIiwic2hvd1Jlc3VsdHMiLCJpcGREYXRhIiwidXJsIiwidG9nZ2xlSXBkIiwiY2xlYXJFeHRyYVRlc3RzIiwidGVzdF90eXBlIiwiaXNfcGFja2FnZSIsInRvZ2dsZVBhY2thZ2VzIiwidG9nZ2xlTGFiVGVzdHMiLCJjaXR5IiwiY2hpbGQiLCJzZWxlY3RMb2NhdGlvbiIsImhpZGVIZWFkZXJPbk1vYmlsZSIsIkFTU0VUU19CQVNFX1VSTCIsImdvQmFjayIsInNlbGVjdGVkIiwicmVmIiwiZ2V0Q2l0eUxpc3RMYXlvdXQiLCJpbnB1dEhhbmRsZXIiLCJ0aXRsZSIsImdvIiwiZm9jdXNPdXQiLCJ3aWR0aCIsInJlc3VsdCIsImkiLCJkZXNjcmlwdGlvbiIsInZhbHVlcyIsImN1cnNvciIsInZpc2libGVfbmFtZSIsImNhdCIsImoiLCJhZGRDcml0ZXJpYSIsImltYWdlX3BhdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW4iLCJwYWRkaW5nIiwibnVtYmVyX29mX3Rlc3RzIiwibG9jYWxpdHkiLCJBcnJheSIsImlzQXJyYXkiLCJwcmltYXJ5X25hbWUiLCJzbGljZSIsInBvcHVsYXJpdHkiLCJjaGVja0ZvckxvYWQiLCJjaGlsZHJlbiIsImNsaW5pY19jYXJkIiwibGFiX2NhcmQiLCJzZWFyY2hFbGFzdGljVmlldyIsIm5ld0NoYXRCdG4iLCJSZWFjdCIsIkNvbXBvbmVudCIsImNyaXRlcmlhRWxhc3RpY1NlYXJjaFZpZXciLCJzZWFyY2hWaWV3IiwicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiU2VhcmNoVmlldyIsInNjcm9sbFRvIiwicGFyc2VkIiwicGFyc2UiLCJmcm9tIiwiZG9jdG9yX25hbWUiLCJob3NwaXRhbF9uYW1lIiwibWVyZ2VPUERTdGF0ZSIsImZpbHRlckNyaXRlcmlhIiwicGFnZSIsInBhdGhuYW1lIiwic2VhcmNoX2JhY2siLCJsYWJfbmFtZSIsIm1lcmdlTEFCU3RhdGUiLCJsb2NhdGlvblR5cGUiLCJmb2N1c0lucHV0IiwiZmlsdGVyU2VsZWN0ZWRDcml0ZXJpYSIsInNlbGVjdGVkQ3JpdGVyaWFzIiwiZmlsdGVyIiwic2VhcmNoUHJvY2VlZE9QRCIsInNlYXJjaFByb2NlZWRMQUIiLCJkaXNwbGF5IiwiTE9BREVEX1NFQVJDSF9DUklURVJJQV9PUEQiLCJ0b2dnbGVPUERDcml0ZXJpYSIsInNwZWNpYWxpemF0aW9ucyIsImNvbmRpdGlvbnMiLCJzaG93RG9jdG9ycyIsIkxPQURFRF9TRUFSQ0hfQ1JJVEVSSUFfTEFCIiwidG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEiLCJjb21tb25fdGVzdHMiLCJzaG93TGFicyIsInByb2NlZHVyZV9jYXRlZ29yaWVzIiwiU2VhcmNoRWxhc3RpY1ZpZXciLCJzaG93Rml4ZWRNb2JpbGVGb290ZXIiLCJzZWxlY3RlZFNlYXJjaFR5cGUiLCJwYWdlVHlwZSIsImhvc3BpdGFsX2lkIiwibmV4dEZpbHRlckNyaXRlcmlhIiwiY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMiLCJzaG93X2FsbF9sYWJzIiwiY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzIiwibmV4dFNlbGVjdGVkQ3JpdGVyaWFzIiwic2VsZWN0ZWRUZXN0SWRzIiwidGVzdCIsInNlbGVjdGVkVGVzdHNOYW1lIiwic2VsZWN0ZWRQYWNrYWdlc0lkcyIsInNlbGVjdGVkUGFja2FnZXMiLCJzZXRQYWNrYWdlSWQiLCJzZWFyY2hQcm9jZWVkUGFja2FnZXMiLCJzaG93UGFja2FnZXMiLCJzZWxlY3RlZENyaXRlcmlhIiwidG9nZ2xlSVBEQ3JpdGVyaWEiLCJzaG93SVBEIiwidG9TaG93IiwiY29tbW9uU2VhcmNoZWQiLCJzZXRDb21tb25TZWxlY3RlZENyaXRlcmlhcyIsImNvbW1vbl9wYWNrYWdlIiwic2VhcmNoUHJvY2VlZElQRCIsImlwZF9wcm9jZWR1cmVzIiwiaXNfbG9naW5fdXNlcl9pbnN1cmVkIiwiY2xpY2tQb3BVcCIsIlNlYXJjaCIsIndoaWNoIiwiT1BEX1NUQVRFIiwibG9hZE9QRENvbW1vbkNyaXRlcmlhIiwicmVzZXRGaWx0ZXJzIiwibG9hZExhYkNvbW1vbkNyaXRlcmlhcyIsIkNPTkZJRyIsIlNFQVJDSF9FTEFTVElDX1ZJRVciLCJJUERfU1RBVEUiLCJMQUJfU1RBVEUiLCJjb21tb25fc2V0dGluZ3MiLCJjb250ZXh0VHlwZXMiLCJyb3V0ZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJTRUFSQ0hfQ1JJVEVSSUFfT1BEIiwicHJvY2VkdXJlcyIsIlNFQVJDSF9DUklURVJJQV9MQUJTIiwiY29tbW9uX2NvbmRpdGlvbnMiLCJwcmVmZXJyZWRfbGFicyIsImZpbHRlckNyaXRlcmlhUGFja2FnZXMiLCJTRUFSQ0hfQ1JJVEVSSUFfSVBEIiwiVVNFUiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiZ2V0T1BEQ3JpdGVyaWFSZXN1bHRzIiwiY2FsbGJhY2siLCJmZXRjaE5ld1Jlc3VsdHMiLCJmb3JjZUFkZCIsImdldERpYWdub3Npc0NyaXRlcmlhUmVzdWx0cyIsImNsZWFyQWxsVGVzdHMiLCJwYWNrYWdlX2lkIiwiaXNIb21lUGFnZSIsInRvZ2dsZVNlYXJjaFBhY2thZ2VzIiwiaGVhbHRoUGFja2FnZSIsImxvYWRPUERJbnN1cmFuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVksU0FBWkEsU0FBWSxDQUFDQyxFQUFELEVBQUtDLEtBQUwsRUFBZTtBQUM3QixRQUFJQyxRQUFRLElBQVo7QUFDQSxXQUFPLFlBQVk7QUFBQTs7QUFDZkMscUJBQWFELEtBQWI7QUFDQUEsZ0JBQVFFLFdBQVcsWUFBTTtBQUNyQkosZUFBR0ssSUFBSCxDQUFRLEtBQVI7QUFDSCxTQUZPLEVBRUxKLEtBRkssQ0FBUjtBQUdILEtBTEQ7QUFNSCxDQVJEOztJQVdNSyx5Qjs7O0FBQ0YsdUNBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwySkFDVEEsS0FEUzs7QUFBQSxlQW9WbkJD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LElBQUksNERBQTRELEtBQUssMkJBQTJCLHNCQUFzQixNQUFNLHVDQUF1QyxHQUFHLFdBQVcsZUFBZSxFQUFFLEdBQUc7QUFDLy9PLGlDIiwiZmlsZSI6Ijc3LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvTG9hZGVyJ1xuXG5pbXBvcnQgTGVmdEJhciBmcm9tICcuLi9MZWZ0QmFyJ1xuaW1wb3J0IFJpZ2h0QmFyIGZyb20gJy4uL1JpZ2h0QmFyJ1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IExvY2F0aW9uRWxlbWVudHMgZnJvbSAnLi4vLi4vLi4vY29udGFpbmVycy9jb21tb25zL2xvY2F0aW9uRWxlbWVudHMnXG5pbXBvcnQgSW5pdGlhbHNQaWN0dXJlIGZyb20gJy4uL2luaXRpYWxzUGljdHVyZSdcbmltcG9ydCBQcmVzY3JpcHRpb25VcGxvYWQgZnJvbSAnLi4vLi4vLi4vY29udGFpbmVycy9jb21tb25zL1ByZXNjcmlwdGlvblVwbG9hZC5qcydcblxuY29uc3QgZGVib3VuY2VyID0gKGZuLCBkZWxheSkgPT4ge1xuICAgIGxldCB0aW1lciA9IG51bGxcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBmbi5jYWxsKHRoaXMpXG4gICAgICAgIH0sIGRlbGF5KVxuICAgIH1cbn1cblxuXG5jbGFzcyBDcml0ZXJpYUVsYXN0aWNTZWFyY2hWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzZWFyY2hWYWx1ZTogJycsXG4gICAgICAgICAgICBzZWFyY2hSZXN1bHRzOiBbXSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgc2VhcmNoQ2l0aWVzOiBbXSxcbiAgICAgICAgICAgIGN1cnJlbnRUZXN0VHlwZToge30sXG4gICAgICAgICAgICB0eXBlOiAnJyxcbiAgICAgICAgICAgIHZpc2libGVUeXBlOiAnJyxcbiAgICAgICAgICAgIGlzX3VzZXJfaW5zdXJhbmNlX2FjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICBzaG93UHJlc2NyaXB0aW9uSW5zdXJhbmNlRXJyb3I6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5nZXRTZWFyY2hSZXN1bHRzID0gZGVib3VuY2VyKHRoaXMuZ2V0U2VhcmNoUmVzdWx0cy5iaW5kKHRoaXMpLCAyMDApXG4gICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3BDcml0ZXJpYVNlYXJjaCcpXG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGwoMCwgMClcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB1c2VyX2luc3VyYW5jZV9zdGF0dXMgPSBudWxsXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlICYmIHRoaXMucHJvcHMucHJvZmlsZXMgJiYgdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXSkge1xuICAgICAgICAgICAgdXNlcl9pbnN1cmFuY2Vfc3RhdHVzID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXS5pbnN1cmFuY2Vfc3RhdHVzXG4gICAgICAgIH1cbiAgICAgICAgdXNlcl9pbnN1cmFuY2Vfc3RhdHVzID0gKHVzZXJfaW5zdXJhbmNlX3N0YXR1cz09MSB8fCB1c2VyX2luc3VyYW5jZV9zdGF0dXM9PTUgfHwgdXNlcl9pbnN1cmFuY2Vfc3RhdHVzPT00IHx8IHVzZXJfaW5zdXJhbmNlX3N0YXR1cz09NylcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNfdXNlcl9pbnN1cmFuY2VfYWN0aXZlOiB1c2VyX2luc3VyYW5jZV9zdGF0dXN9KVxuXG4gICAgICAgIC8vIGlmIGNvbWluZyBiYWNrIG9yIHJlZnJlc2ggZm9jdXMgb24gc2VhcmNoIGJhclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5oaXN0b3J5LmFjdGlvbiA9PT0gJ1BPUCcgJiYgIXRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdzZWFyY2gnKSkge1xuICAgICAgICAgICAgLy8gaW5wdXQuZm9jdXMoKVxuICAgICAgICB9XG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9wQ3JpdGVyaWFTZWFyY2gnKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvcENyaXRlcmlhU2VhcmNoJykuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsICgpID0+IHsgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaENpdGllczogJycgfSkgfSlcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hfcmVzdWx0c192aWV3JykgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaF9iYXInKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaF9iYXInKS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hfcmVzdWx0c192aWV3Jykuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbGVjdFNlYXJjaFR5cGUodGhpcy5wcm9wcy50eXBlKVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnR5cGUgIT0gbmV4dFByb3BzLnR5cGUpIHtcblxuICAgICAgICAgICAgaWYgKG5leHRQcm9wcy5lbGFzdGljU2VhcmNoU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFZhbHVlOiBuZXh0UHJvcHMuZWxhc3RpY1NlYXJjaFN0cmluZywgc2VhcmNoUmVzdWx0czogW10gfSlcbiAgICAgICAgICAgICAgICB0aGlzLmdldFNlYXJjaFJlc3VsdHMoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoVmFsdWU6ICcnLCBzZWFyY2hSZXN1bHRzOiBbXSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5wdXRIYW5kbGVyKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFZhbHVlOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICBsZXQgc2VhcmNoU3RyaW5nID0gZS50YXJnZXQudmFsdWUudHJpbSgpXG4gICAgICAgIGlmIChzZWFyY2hTdHJpbmcubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmdldFNlYXJjaFJlc3VsdHMoKVxuICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVGaXhlZE1vYmlsZUZvb3RlcihmYWxzZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hSZXN1bHRzOiBbXSB9KVxuICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVGaXhlZE1vYmlsZUZvb3Rlcih0cnVlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VsZWN0U2VhcmNoVHlwZSh0eXBlKXtcbiAgICAgICAgaWYgKHRoaXMudGV4dElucHV0KSB7XG4gICAgICAgICAgICB0aGlzLnRleHRJbnB1dC5mb2N1cygpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGV4dElucHV0X2Rlc2t0b3ApIHtcbiAgICAgICAgICAgIHRoaXMudGV4dElucHV0X2Rlc2t0b3AuZm9jdXMoKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnByb3BzLmNoYW5nZVNlbGVjdGlvbih0eXBlLCcnKVxuICAgIH1cblxuICAgIGdldFNlYXJjaFJlc3VsdHMoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pXG4gICAgICAgIGxldCBsYXQgPSAyOC42NDQ4MDBcbiAgICAgICAgbGV0IGxvbmcgPSA3Ny4yMTY3MjFcbiAgICAgICAgbGV0IHBsYWNlX2lkID0gXCJcIlxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRhdGFTdGF0ZS5zZWxlY3RlZExvY2F0aW9uKSB7XG4gICAgICAgICAgICBwbGFjZV9pZCA9IHRoaXMucHJvcHMuZGF0YVN0YXRlLnNlbGVjdGVkTG9jYXRpb24ucGxhY2VfaWQgfHwgXCJcIlxuICAgICAgICAgICAgbGF0ID0gdGhpcy5wcm9wcy5kYXRhU3RhdGUuc2VsZWN0ZWRMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sYXRcbiAgICAgICAgICAgIGxvbmcgPSB0aGlzLnByb3BzLmRhdGFTdGF0ZS5zZWxlY3RlZExvY2F0aW9uLmdlb21ldHJ5LmxvY2F0aW9uLmxuZ1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBsYXQgPT09ICdmdW5jdGlvbicpIGxhdCA9IGxhdCgpXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxvbmcgPT09ICdmdW5jdGlvbicpIGxvbmcgPSBsb25nKClcblxuICAgICAgICAgICAgbGF0ID0gcGFyc2VGbG9hdChwYXJzZUZsb2F0KGxhdCkudG9GaXhlZCg2KSlcbiAgICAgICAgICAgIGxvbmcgPSBwYXJzZUZsb2F0KHBhcnNlRmxvYXQobG9uZykudG9GaXhlZCg2KSlcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsb2NhdGlvbiA9IHsgbGF0OiBsYXQsIGxvbmc6IGxvbmcgfVxuXG4gICAgICAgIGxldCBMQUJfVFlQRVMgPSBbJ2xhYl90ZXN0X3N5bm9ueW0nLCAnbGFiX3Rlc3QnLCAnbGFiJ11cblxuICAgICAgICBsZXQgT1BEX1RZUEVTID0gWyd2aXNpdF9yZWFzb24nLCAncHJhY3RpY2Vfc3BlY2lhbGl6YXRpb24nLCAnZG9jdG9yJywgJ2hvc3BpdGFsJywgJ3ByYWN0aWNlX3NwZWNpYWxpemF0aW9uX3N5bm9ueW0nXVxuXG4gICAgICAgIGxldCBQUk9DRURVUkVfVFlQRVMgPSBbJ3Byb2NlZHVyZV9jYXRlZ29yeScsICdwcm9jZWR1cmUnXVxuXG4gICAgICAgIGxldCBJUERfVFlQRVMgPSBbJ2lwZCddXG5cbiAgICAgICAgbGV0IHR5cGUgPSAnJ1xuICAgICAgICBsZXQgdmlzaWJsZVR5cGUgPSAnJ1xuICAgICAgICBsZXQgZmlsdGVyUmVzdWx0cyA9IHRoaXMucHJvcHMuZ2V0RWxhc3RpY0NyaXRlcmlhUmVzdWx0cyh0aGlzLnN0YXRlLnNlYXJjaFZhbHVlLnRyaW0oKSwgdGhpcy5wcm9wcy50eXBlLmluY2x1ZGVzKCdwYWNrYWdlJykgPyAndGVzdCcgOiB0aGlzLnByb3BzLnR5cGUsIGxvY2F0aW9uKVxuXG4gICAgICAgIGxldCBhbGxTZWFyY2hSZXN1bHRzID0gdGhpcy5wcm9wcy5nZXRFbGFzdGljQ3JpdGVyaWFSZXN1bHRzKHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUudHJpbSgpLCAnJywgbG9jYXRpb24pXG5cbiAgICAgICAgUHJvbWlzZS5hbGwoW2ZpbHRlclJlc3VsdHMsIGFsbFNlYXJjaFJlc3VsdHNdKS50aGVuKChbZmlsdGVyU2VhcmNoUmVzdWx0cywgc2VhcmNoUmVzdWx0c10pID0+IHtcblxuICAgICAgICAgICAgaWYgKHNlYXJjaFJlc3VsdHMgJiYgc2VhcmNoUmVzdWx0cy5zdWdnZXN0aW9uICYmIHNlYXJjaFJlc3VsdHMuc3VnZ2VzdGlvbi5sZW5ndGgpIHtcblxuICAgICAgICAgICAgICAgIGlmIChMQUJfVFlQRVMuaW5kZXhPZihzZWFyY2hSZXN1bHRzLnN1Z2dlc3Rpb25bMF0udHlwZSkgPiAtMSAmJiB0aGlzLnByb3BzLnR5cGUgIT0gJ2xhYicpIHtcblxuICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ2xhYidcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZVR5cGUgPSBzZWFyY2hSZXN1bHRzLnN1Z2dlc3Rpb25bMF1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKE9QRF9UWVBFUy5pbmRleE9mKHNlYXJjaFJlc3VsdHMuc3VnZ2VzdGlvblswXS50eXBlKSA+IC0xICYmIHRoaXMucHJvcHMudHlwZSAhPSAnb3BkJykge1xuXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnb3BkJ1xuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlVHlwZSA9IHNlYXJjaFJlc3VsdHMuc3VnZ2VzdGlvblswXVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoSVBEX1RZUEVTLmluZGV4T2Yoc2VhcmNoUmVzdWx0cy5zdWdnZXN0aW9uWzBdLnR5cGUpID4gLTEgJiYgdGhpcy5wcm9wcy50eXBlICE9ICdpcGQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnaXBkJ1xuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlVHlwZSA9IHNlYXJjaFJlc3VsdHMuc3VnZ2VzdGlvblswXVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8qZWxzZSBpZihQUk9DRURVUkVfVFlQRVMuaW5kZXhPZihzZWFyY2hSZXN1bHRzLnN1Z2dlc3Rpb25bMF0udHlwZSk+LTEgJiYgdGhpcy5wcm9wcy50eXBlICE9J3Byb2NlZHVyZXMnKXtcblxuICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ3Byb2NlZHVyZXMnXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGVUeXBlID0gc2VhcmNoUmVzdWx0cy5zdWdnZXN0aW9uWzBdXG4gICAgICAgICAgICAgICAgfSovXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmaWx0ZXJTZWFyY2hSZXN1bHRzKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgZmlsdGVyUmVzdWx0c05hbWUgPSBmaWx0ZXJTZWFyY2hSZXN1bHRzLnN1Z2dlc3Rpb24ubWFwKHggPT4geC5uYW1lKS5qb2luKCcsJykgfHwgJydcbiAgICAgICAgICAgICAgICBsZXQgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdzZWFyY2hxdWVyeScsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3NlYXJjaC1xdWVyeScsICdzZWFyY2hTdHJpbmcnOiB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAnc2VhcmNoVHlwZSc6IHRoaXMucHJvcHMudHlwZSwgJ3Jlc3VsdHMnOiBmaWx0ZXJSZXN1bHRzTmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJEYXRhID0gZmlsdGVyU2VhcmNoUmVzdWx0cy5zdWdnZXN0aW9uXG4gICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMucHJvcHMudHlwZS5pbmNsdWRlcygncGFja2FnZScpKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGZpbHRlckRhdGEgPSBmaWx0ZXJTZWFyY2hSZXN1bHRzLnN1Z2dlc3Rpb24uZmlsdGVyKCh4KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBpZiAoeC5pc19wYWNrYWdlICYmIHguaXNfcGFja2FnZS5sZW5ndGggJiYgeC5pc19wYWNrYWdlWzBdKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIC8vICAgICB9KVxuICAgICAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAodGhpcy5wcm9wcy50eXBlLmluY2x1ZGVzKCdsYWInKSkge1xuICAgICAgICAgICAgICAgIC8vICAgICBmaWx0ZXJEYXRhID0gZmlsdGVyU2VhcmNoUmVzdWx0cy5zdWdnZXN0aW9uLmZpbHRlcigoeCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWYgKHguaXNfcGFja2FnZSAmJiB4LmlzX3BhY2thZ2UubGVuZ3RoICYmICF4LmlzX3BhY2thZ2VbMF0pIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgLy8gICAgIH0pXG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hSZXN1bHRzOiBmaWx0ZXJEYXRhLCBzZWFyY2hlZENhdGVnb3JpZXM6IGZpbHRlclNlYXJjaFJlc3VsdHMuc3VnZ2VzdGVkQ2F0ZWdvcmllcywgbG9hZGluZzogZmFsc2UsIHR5cGU6IHR5cGUsIHZpc2libGVUeXBlOiB2aXNpYmxlVHlwZSB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkQ3JpdGVyaWEoY3JpdGVyaWEpIHtcblxuICAgICAgICBjcml0ZXJpYSA9IE9iamVjdC5hc3NpZ24oe30sIGNyaXRlcmlhKVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnR5cGUgPT0gJ29wZCcgfHwgdGhpcy5wcm9wcy50eXBlID09ICdwcm9jZWR1cmVzJykge1xuXG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gJycsIGV2ZW50ID0gJydcblxuICAgICAgICAgICAgaWYgKGNyaXRlcmlhLnR5cGUuaW5jbHVkZXMoJ3Zpc2l0X3JlYXNvbicpKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdWaXNpdFJlYXNvblNlYXJjaGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAndmlzaXQtcmVhc29uLXNlYXJjaGVkJywgJ1NlbGVjdGVkSWQnOiBjcml0ZXJpYS5pZCB8fCAnJywgJ3NlYXJjaGVkJzogJ2F1dG9zdWdnZXN0JywgJ3NlYXJjaFN0cmluZyc6IHRoaXMuc3RhdGUuc2VhcmNoVmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICAgICAgICAgIGNyaXRlcmlhLmlkID0gY3JpdGVyaWEuYWN0aW9uLnZhbHVlLmpvaW4oJywnKVxuICAgICAgICAgICAgICAgIGNyaXRlcmlhLnR5cGUgPSAnc3BlY2lhbGl0eSdcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNlIGlmIChjcml0ZXJpYS5hY3Rpb24ucGFyYW0uaW5jbHVkZXMoJ2hvc3BpdGFsX25hbWUnKSkge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0hvc3BpdGFsTmFtZVNlYXJjaGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnaG9zcGl0YWwtbmFtZS1zZWFyY2hlZCcsICdob3NwaXRhbElkJzogY3JpdGVyaWEuYWN0aW9uLmlkIHx8ICcnLCAnc2VhcmNoZWQnOiAnYXV0b3N1Z2dlc3QnLCAnc2VhcmNoU3RyaW5nJzogdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSB8fCAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWFyY2hQcm9jZWVkKFwiXCIsIFwiXCIsIGNyaXRlcmlhLmFjdGlvbi5pZClcbiAgICAgICAgICAgICAgICByZXR1cm5cblxuICAgICAgICAgICAgfSBlbHNlIGlmIChjcml0ZXJpYS5hY3Rpb24ucGFyYW0uaW5jbHVkZXMoJ3Byb2NlZHVyZV9jYXRlZ29yeV9pZHMnKSkge1xuXG4gICAgICAgICAgICAgICAgY3JpdGVyaWEuaWQgPSBjcml0ZXJpYS5hY3Rpb24udmFsdWVbMF1cbiAgICAgICAgICAgICAgICBjcml0ZXJpYS50eXBlID0gJ3Byb2NlZHVyZXNfY2F0ZWdvcnknXG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3JpdGVyaWEuYWN0aW9uLnBhcmFtLmluY2x1ZGVzKCdwcm9jZWR1cmVfaWRzJykpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdDb21tb25Qcm9jZWR1cmVzU2VsZWN0ZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjb21tb24tcHJvY2VkdXJlcy1zZWxlY3RlZCcsICdzZWxlY3RlZCc6IGNyaXRlcmlhLm5hbWUgfHwgJycsICdzZWxlY3RlZElkJzogY3JpdGVyaWEuYWN0aW9uLnZhbHVlID8gY3JpdGVyaWEuYWN0aW9uLnZhbHVlWzBdIDogJycsICdzZWFyY2hlZCc6ICdhdXRvc3VnZ2VzdCcsICdzZWFyY2hTdHJpbmcnOiB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgICAgICAgICBjcml0ZXJpYS5pZCA9IGNyaXRlcmlhLmFjdGlvbi52YWx1ZVswXVxuICAgICAgICAgICAgICAgIGNyaXRlcmlhLnR5cGUgPSAncHJvY2VkdXJlcydcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChjcml0ZXJpYS5hY3Rpb24ucGFyYW0uaW5jbHVkZXMoJ3NwZWNpYWxpemF0aW9ucycpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQ29tbW9uU3BlY2lhbGl6YXRpb25zU2VsZWN0ZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjb21tb24tc3BlY2lhbGl6YXRpb25zLXNlbGVjdGVkJywgJ3NlbGVjdGVkJzogY3JpdGVyaWEubmFtZSB8fCAnJywgJ3NlbGVjdGVkSWQnOiBjcml0ZXJpYS5hY3Rpb24udmFsdWUgPyBjcml0ZXJpYS5hY3Rpb24udmFsdWVbMF0gOiAnJywgJ3NlYXJjaGVkJzogJ2F1dG9zdWdnZXN0JywgJ3NlYXJjaFN0cmluZyc6IHRoaXMuc3RhdGUuc2VhcmNoVmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICAgICAgICAgIGNyaXRlcmlhLmlkID0gY3JpdGVyaWEuYWN0aW9uLnZhbHVlWzBdXG4gICAgICAgICAgICAgICAgY3JpdGVyaWEudHlwZSA9ICdzcGVjaWFsaXR5J1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNyaXRlcmlhLmFjdGlvbi5wYXJhbS5pbmNsdWRlcygnZG9jdG9yX25hbWUnKSkge1xuXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnRG9jdG9yTmFtZVNlYXJjaGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnZG9jdG9yLW5hbWUtc2VhcmNoZWQnLCAnc2VsZWN0ZWRJZCc6IGNyaXRlcmlhLmFjdGlvbi52YWx1ZVswXSB8fCAnJywgJ3NlYXJjaGVkJzogJ2F1dG9zdWdnZXN0JywgJ3NlYXJjaFN0cmluZyc6IHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUgfHwgJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvb3BkL2RvY3Rvci8ke2NyaXRlcmlhLmFjdGlvbi52YWx1ZVswXX0/aGlkZV9zZWFyY2hfZGF0YT10cnVlYClcblxuICAgICAgICAgICAgICAgIC8vdGhpcy5wcm9wcy5zZWFyY2hQcm9jZWVkKGNyaXRlcmlhLmFjdGlvbi52YWx1ZVswXSxcIlwiKVxuICAgICAgICAgICAgICAgIHJldHVyblxuXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jbG9uZUNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzKGNyaXRlcmlhKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFZhbHVlOiBcIlwiIH0pXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNob3dSZXN1bHRzKCdvcGQnKVxuXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy50eXBlLmluY2x1ZGVzKCdpcGQnKSkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdJUEROYW1lU2VhcmNoZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdpcGQtbmFtZS1zZWFyY2hlZCcsICdzZWxlY3RlZElkJzogY3JpdGVyaWEuYWN0aW9uLnZhbHVlWzBdIHx8ICcnLCAnc2VhcmNoZWQnOiAnYXV0b3N1Z2dlc3QnLCAnc2VhcmNoU3RyaW5nJzogdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSB8fCAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgIGxldCBpcGREYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgY3JpdGVyaWEpXG4gICAgICAgICAgICBpcGREYXRhLmlkID0gY3JpdGVyaWEuYWN0aW9uLnZhbHVlWzBdXG4gICAgICAgICAgICBpcGREYXRhLnVybCA9IG51bGxcbiAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlSXBkKCdpcGQnLCBpcGREYXRhLCB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlKVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmIChjcml0ZXJpYS50eXBlID09IFwibGFiXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsZWFyRXh0cmFUZXN0cygpXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnTGFiTmFtZVNlYXJjaGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbGFiLW5hbWUtc2VhcmNoZWQnLCAnc2VsZWN0ZWRJZCc6IGNyaXRlcmlhLmFjdGlvbi52YWx1ZVswXSB8fCAnJywgJ3NlYXJjaGVkJzogJ2F1dG9zdWdnZXN0JywgJ3NlYXJjaFN0cmluZyc6IHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUgfHwgJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvbGFiLyR7Y3JpdGVyaWEuYWN0aW9uLnZhbHVlWzBdfWApXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNyaXRlcmlhLnR5cGUgPT0gXCJsYWJfdGVzdFwiKSB7XG4gICAgICAgICAgICAgICAgY3JpdGVyaWEudHlwZSA9ICd0ZXN0J1xuICAgICAgICAgICAgICAgIGNyaXRlcmlhLnVybCA9ICcnXG4gICAgICAgICAgICAgICAgY3JpdGVyaWEuaWQgPSBjcml0ZXJpYS5hY3Rpb24udmFsdWVbMF1cbiAgICAgICAgICAgICAgICBpZiAoY3JpdGVyaWEuYWN0aW9uLnRlc3RfdHlwZSAmJiBjcml0ZXJpYS5hY3Rpb24udGVzdF90eXBlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjcml0ZXJpYS50ZXN0X3R5cGUgPSBjcml0ZXJpYS5hY3Rpb24udGVzdF90eXBlWzBdXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3JpdGVyaWEudGVzdF90eXBlID0gJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFZhbHVlOiBcIlwiIH0pXG5cbiAgICAgICAgICAgICAgICBpZihjcml0ZXJpYS5pc19wYWNrYWdlICYmIGNyaXRlcmlhLmlzX3BhY2thZ2VbMF0pe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZVBhY2thZ2VzKCd0ZXN0JywgY3JpdGVyaWEsIHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUpXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlTGFiVGVzdHMoJ3Rlc3QnLCBjcml0ZXJpYSwgdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gaWYgKCFjcml0ZXJpYS5pc19wYWNrYWdlWzBdKSB7XG5cbiAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICAvLyBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgY3JpdGVyaWEudHlwZSA9ICdwYWNrYWdlJy8vcGFja2FnZVxuICAgICAgICAgICAgICAgIC8vICAgICBjcml0ZXJpYS5pZCA9IGNyaXRlcmlhLmFjdGlvbi52YWx1ZVswXVxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoVmFsdWU6IFwiXCIgfSlcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5wcm9wcy50b2dnbGVTZWFyY2hQYWNrYWdlcyhjcml0ZXJpYSlcbiAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICAvKmxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1Rlc3RTZWxlY3RlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3Rlc3Qtc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnOiBjcml0ZXJpYS5uYW1lIHx8ICcnLCAnc2VsZWN0ZWRJZCc6IGNyaXRlcmlhLmFjdGlvbi52YWx1ZSB8fCAnJywgJ3NlYXJjaGVkJzogJ2F1dG9zdWdnZXN0JywgJ3NlYXJjaFN0cmluZyc6IHRoaXMuc3RhdGUuc2VhcmNoVmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZFRlc3RJZHMgPSBbXVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGF0YVN0YXRlLnNlbGVjdGVkQ3JpdGVyaWFzLm1hcCgoeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoeC50ZXN0X3R5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVGVzdElkcy5wdXNoKHgudGVzdF90eXBlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRUZXN0SWRzLmxlbmd0aCAmJiBjcml0ZXJpYS5hY3Rpb24udGVzdF90eXBlICYmIGNyaXRlcmlhLmFjdGlvbi50ZXN0X3R5cGUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZFRlc3RJZHMuaW5kZXhPZihjcml0ZXJpYS5hY3Rpb24udGVzdF90eXBlWzBdKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRUZXN0VHlwZTogY3JpdGVyaWEsIHNlYXJjaFZhbHVlOiBcIlwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1BvcFVwT3BlbkxhYlRlc3RFcnJvcicsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3BvcHVwLW9wZW4tbGFiLXRlc3QtZXJyb3InLCAnc2VsZWN0ZWQnOiBjcml0ZXJpYS5uYW1lIHx8ICcnLCAnc2VsZWN0ZWRJZCc6IGNyaXRlcmlhLmFjdGlvbi52YWx1ZSB8fCAnJywgJ3NlYXJjaGVkJzogJ2F1dG9zdWdnZXN0JywgJ3NlYXJjaFN0cmluZyc6IHRoaXMuc3RhdGUuc2VhcmNoVmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoX3Jlc3VsdHNfdmlldycpKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaF9yZXN1bHRzX3ZpZXcnKS5zY3JvbGxJbnRvVmlldygpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKCd0ZXN0JywgY3JpdGVyaWEpKi9cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldENpdHlMaXN0TGF5b3V0KHNlYXJjaFJlc3VsdHMgPSBbXSkge1xuICAgICAgICBpZiAoc2VhcmNoUmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hDaXRpZXM6IHNlYXJjaFJlc3VsdHMgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hDaXRpZXM6IFtdLCBzZWFyY2hWYWx1ZTogJycgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdExvY2F0aW9uKGNpdHkpIHtcbiAgICAgICAgdGhpcy5jaGlsZC5zZWxlY3RMb2NhdGlvbigoY2l0eSksICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hDaXRpZXM6IFtdIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZm9jdXNPdXQoKSB7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdzZWFyY2hJbnB1dEZvY3VzT3V0JywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnc2VhcmNoLXN0cmluZy1vbi1ibHVyJywgJ3NlYXJjaGVkJzogJycsICdzZWFyY2hTdHJpbmcnOiB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlLCAndHlwZSc6IHRoaXMucHJvcHMudHlwZVxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgfVxuXG4gICAgYWZ0ZXJVc2VyTG9naW4gPSAoKT0+e1xuICAgICAgICBsZXQgaXNfdXNlcl9pbnN1cmFuY2VfYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGxldCB1c2VyX2luc3VyYW5jZV9zdGF0dXMgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZSAmJiB0aGlzLnByb3BzLnByb2ZpbGVzICYmIHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0pIHtcbiAgICAgICAgICAgIHVzZXJfaW5zdXJhbmNlX3N0YXR1cyA9IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0uaW5zdXJhbmNlX3N0YXR1c1xuICAgICAgICB9XG4gICAgICAgIGlzX3VzZXJfaW5zdXJhbmNlX2FjdGl2ZSA9ICh1c2VyX2luc3VyYW5jZV9zdGF0dXM9PTEgfHwgdXNlcl9pbnN1cmFuY2Vfc3RhdHVzPT01IHx8IHVzZXJfaW5zdXJhbmNlX3N0YXR1cz09NCB8fCB1c2VyX2luc3VyYW5jZV9zdGF0dXM9PTcpXG4gICAgICAgIC8vdGhpcy5zZXRTdGF0ZSh7aXNfdXNlcl9pbnN1cmFuY2VfYWN0aXZlOiB0cnVlLCBzaG93UHJlc2NyaXB0aW9uSW5zdXJhbmNlRXJyb3I6IHRydWV9KVxuICAgICAgICBpZihpc191c2VyX2luc3VyYW5jZV9hY3RpdmUpe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNfdXNlcl9pbnN1cmFuY2VfYWN0aXZlOiB0cnVlLCBzaG93UHJlc2NyaXB0aW9uSW5zdXJhbmNlRXJyb3I6IHRydWV9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvL0NoZWNrIHVzZXIgZm9yIGluc3VyYW5jZSBcbiAgICAgICAgbGV0IHVzZXJfaW5zdXJhbmNlX3N0YXR1cyA9IG51bGxcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGUgJiYgdGhpcy5wcm9wcy5wcm9maWxlcyAmJiB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGVdKSB7XG4gICAgICAgICAgICB1c2VyX2luc3VyYW5jZV9zdGF0dXMgPSB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGVdLmluc3VyYW5jZV9zdGF0dXNcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpZGVIZWFkZXJPbk1vYmlsZSA/IDxkaXYgY2xhc3NOYW1lPVwiaGlkZS03NjJcIj48UHJvZmlsZUhlYWRlciBzaG93U2VhcmNoPXt0cnVlfSAvPjwvZGl2PiA6IDxQcm9maWxlSGVhZGVyIHNob3dTZWFyY2g9e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtcImNvbnRhaW5lciBwYXJlbnQtc2VjdGlvbiBib29rLWFwcG9pbnRtZW50LXNlY3Rpb25cIiArICh0aGlzLnByb3BzLmhpZGVIZWFkZXJPbk1vYmlsZSA/IFwiIG1wMFwiIDogXCJcIil9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0QmFyIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLW5ldy1jb250YWluZXIgY2VudGVyLWNvbHVtbiBwdC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzZWFyY2gtYmFjay1tYWluLWljb1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2JhY2staWNvbi5wbmdcIn0gb25DbGljaz17KCk9PiB0aGlzLnByb3BzLmhpc3RvcnkuZ29CYWNrKCl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdvYmFjayBkZWNpZGVzIGlmIHNlYXJjaCBiYXIgd2lsbCBiZSBzaG93blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdvQmFjayA/IFwiXCIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXRvcC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cInNyY2gtaGVhZGluZ1wiPlNlYXJjaDwvcD4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VyY2gtbnctaW5wdXRzLWNvbnRhaW5lclwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZCA9PSAnbGFiJyAmJiB0aGlzLnN0YXRlLnNob3dQcmVzY3JpcHRpb25JbnN1cmFuY2VFcnJvcj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWx0aC1hZHZpc29yLWNvbCBkLWZsZXggYWxpZ24taXRlbXMtc3RhcnQgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMTdcIiBjbGFzc05hbWU9XCJpbmZvLWRldGFpbC1pY29uXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaW5mby1pY29uLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yXCI+IEZvciBpbnN1cmVkIGN1c3RvbWVycywgcHJlc2NyaXB0aW9uIHVwbG9hZCBpcyByZXF1aXJlZCBhdCB0aGUgdGltZSBvZiBib29raW5nPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImN1cnNvci1wbnRyXCIgd2lkdGg9XCIxNVwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3JlZC10aW1lcy1pY29uLnN2Z1wifSBvbkNsaWNrPXsgKCk9PnRoaXMuc2V0U3RhdGUoe3Nob3dQcmVzY3JpcHRpb25JbnN1cmFuY2VFcnJvcjogZmFsc2V9KSB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+OicnXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2F0aW9uRWxlbWVudHMgey4uLnRoaXMucHJvcHN9IG9uUmVmPXtyZWYgPT4gKHRoaXMuY2hpbGQgPSByZWYpfSBnZXRDaXR5TGlzdExheW91dD17dGhpcy5nZXRDaXR5TGlzdExheW91dC5iaW5kKHRoaXMpfSByZXN1bHRUeXBlPSdzZWFyY2gnIGZyb21Dcml0ZXJpYT17dHJ1ZX0gY29tbW9uU2VhcmNoUGFnZT17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlYXJjaENpdGllcy5sZW5ndGggPiAwID8gXCJcIiA6IDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3JjaC1yYWRpby1idG5zIGlwZC1zcmNoLXJhZGlvLWJ0blwiIGlkPVwic2VhcmNoX3Jlc3VsdHNfdmlld1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdGwtcmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJhZGlvXCI+RG9jdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG9uQ2hhbmdlPXt0aGlzLnNlbGVjdFNlYXJjaFR5cGUuYmluZCh0aGlzLCAnb3BkJyl9IGNoZWNrZWQ9e3RoaXMucHJvcHMuc2VsZWN0ZWQgPT0gJ29wZCd9IG5hbWU9XCJyYWRpb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdGwtcmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJhZGlvXCI+TGFiIFRlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgb25DaGFuZ2U9e3RoaXMuc2VsZWN0U2VhcmNoVHlwZS5iaW5kKHRoaXMsICdsYWInKX0gY2hlY2tlZD17dGhpcy5wcm9wcy5zZWxlY3RlZCA9PSAnbGFiJ30gbmFtZT1cInJhZGlvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR0bC1yYWRpb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIj5IZWFsdGggUGFja2FnZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuY2hhbmdlU2VsZWN0aW9uLmJpbmQodGhpcywgJ3BhY2thZ2UnLCAnJyl9IGNoZWNrZWQ9e3RoaXMucHJvcHMuc2VsZWN0ZWQgPT0gJ3BhY2thZ2UnfSBuYW1lPVwicmFkaW9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb2MtY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdGwtcmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJhZGlvXCI+U3VyZ2VyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBvbkNoYW5nZT17dGhpcy5zZWxlY3RTZWFyY2hUeXBlLmJpbmQodGhpcywgJ2lwZCcpfSBjaGVja2VkPXt0aGlzLnByb3BzLnNlbGVjdGVkID09ICdpcGQnfSBuYW1lPVwicmFkaW9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb2MtY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VyY2gtbnctaW5wdXRzIG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiIGNsYXNzTmFtZT1cImQtYmxvY2sgZC1sZy1ub25lIG5ldy1zcmNoLWRvYy1sYWJcIiBpZD1cInNlYXJjaF9iYXJcIiBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNoVmFsdWV9IHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnRpdGxlfSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuZ29CYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5nbygtMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBvbkJsdXI9eygpID0+IHRoaXMuZm9jdXNPdXQoKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9eyhpbnB1dCkgPT4ge3RoaXMudGV4dElucHV0ID0gaW5wdXQgfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgYXV0b0NvbXBsZXRlPVwib2ZmXCIgY2xhc3NOYW1lPVwiZC1ub25lIGQtbGctYmxvY2sgbmV3LXNyY2gtZG9jLWxhYlwiIGlkPVwic2VhcmNoX2Jhcl9kZXNrdG9wXCIgb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaFZhbHVlfSBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy50aXRsZX0gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmdvQmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkuZ28oLTEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gb25CbHVyPXsoKSA9PiB0aGlzLmZvY3VzT3V0KCl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcxNXB4JyB9fSBjbGFzc05hbWU9XCJzcmNoLWlucC1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zaGFwZS1zcmNoLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdGVkID09ICdsYWInICYmICEodGhpcy5zdGF0ZS5pc191c2VyX2luc3VyYW5jZV9hY3RpdmUpP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJlc2NyaXB0aW9uVXBsb2FkIGhpc3RvcnlPYmo9e3RoaXMucHJvcHMuaGlzdG9yeX0gc2VhcmNoX2xhYj17dHJ1ZX0gbG9jYXRpb25PYmogPSB7dGhpcy5wcm9wcy5sb2NhdGlvbn0gcHJvZmlsZXM9e3RoaXMucHJvcHMucHJvZmlsZXN9IGFmdGVyVXNlckxvZ2luPXt0aGlzLmFmdGVyVXNlckxvZ2lufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlYXJjaENpdGllcy5sZW5ndGggPiAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IHNlYXJjaE1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1vbi1zZWFyY2gtY29udGFpbmVyIHB0LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJzcmNoLWhlYWRpbmdcIj5Mb2NhdGlvbiBTZWFyY2g8L3A+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tb24tbGlzdGluZy1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlYXJjaENpdGllcy5tYXAoKHJlc3VsdCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpfSBvbkNsaWNrPXt0aGlzLnNlbGVjdExvY2F0aW9uLmJpbmQodGhpcywgcmVzdWx0KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiID57cmVzdWx0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlYXJjaENpdGllcy5sZW5ndGggPiAwID8gXCJcIiA6IDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSB8fCBPYmplY3QudmFsdWVzKHRoaXMuc3RhdGUuY3VycmVudFRlc3RUeXBlKS5sZW5ndGggP1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0cy5sZW5ndGggfHwgdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IHNlYXJjaE1hcmdpblwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbW9uLXNlYXJjaC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwic3JjaC1oZWFkaW5nXCI+U2VhcmNoIFJlc3VsdHM8L3A+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuc3RhdGUuc2VhcmNoQ2l0aWVzLmxlbmd0aCAmJiB0aGlzLnN0YXRlLnR5cGUgJiYgKHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUgfHwgT2JqZWN0LnZhbHVlcyh0aGlzLnN0YXRlLmN1cnJlbnRUZXN0VHlwZSkubGVuZ3RoKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9eygpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0NoYW5nZVR5cGVDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2hhbmdlLXR5cGUtY2xpY2tlZCcsICdob3NwaXRhbElkJzogJycsICdzZWFyY2hlZCc6ICcnLCAnc2VhcmNoU3RyaW5nJzogdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VTZWxlY3Rpb24odGhpcy5zdGF0ZS50eXBlLCB0aGlzLnN0YXRlLnZpc2libGVUeXBlLm5hbWUgfHwgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwLTAgc3JjaC1wcm5zbC10eHRcIiA+RGlkIHlvdSBtZWFuOiA8c3BhbiBjbGFzc05hbWU9XCJzZWFyY2gtcHJuc2wtcnNsdHNcIj57dGhpcy5zdGF0ZS52aXNpYmxlVHlwZS5uYW1lIHx8ICcnfTwvc3Bhbj4gaW4gPHNwYW4gY2xhc3NOYW1lPVwiZnctNzAwXCI+e3RoaXMuc3RhdGUudmlzaWJsZVR5cGUudmlzaWJsZV9uYW1lfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPHAgY2xhc3NOYW1lPVwic3JjaC1oZWFkaW5nXCI+e2NhdC5uYW1lfTwvcD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1vbi1saXN0aW5nLWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzLm1hcCgoY2F0LCBqKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtqfSBvbkNsaWNrPXt0aGlzLmFkZENyaXRlcmlhLmJpbmQodGhpcywgY2F0KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcmFjaC1yc2x0LXdpdGgtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXQudHlwZSAmJiBjYXQudHlwZS5pbmNsdWRlcygnZG9jdG9yJykgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyo8c3BhbiBjbGFzc05hbWU9XCJzcmNoLXJzbHQtd2Qtc3BhbiB1c3Itc3JjaC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMzVweCcsIGJvcmRlclJhZGl1czogJzUwJScgfX0gY2xhc3NOYW1lPVwiXCIgc3JjPXtgaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL21lZGlhLyR7Y2F0LmltYWdlX3BhdGh9YH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4qL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEluaXRpYWxzUGljdHVyZSBuYW1lPXtjYXQubmFtZX0gaGFzX2ltYWdlPXshIWNhdC5pbWFnZV9wYXRofSBjbGFzc05hbWU9XCJlbGFzdGljSW5pdGFsUGljIGluaXRpYWxzUGljdHVyZS1kcyBmbHRyLWluaXRpYWxQaWN0dXJlLWRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3JjaC1yc2x0LXdkLXNwYW4gdXNyLXNyY2gtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICczNXB4JywgaGVpZ2h0OiAnMzVweCcsIGJvcmRlclJhZGl1czogJzUwJScgfX0gY2xhc3NOYW1lPVwiXCIgc3JjPXtgaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL21lZGlhLyR7Y2F0LmltYWdlX3BhdGh9YH0gYWx0PXtjYXQubmFtZX0gdGl0bGU9e2NhdC5uYW1lfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Jbml0aWFsc1BpY3R1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxzcGFuIGNsYXNzTmFtZT1cInNyY2gtcnNsdC13ZC1zcGFuIHRleHQtY2VudGVyIHNyY2gtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogJzIycHgnLCBtYXJnaW46ICcwcHggMTBweCcgfX0gY2xhc3NOYW1lPVwiXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvc2hhcGUtc3JjaC5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IHBhZGRpbmc6ICcwIDUwcHggMCAwJyB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50eXBlLmluY2x1ZGVzKCdpcGQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPHNwYW4gY2xhc3NOYW1lPVwic2VhcmNoLXNwYW4tc3ViXCI+SVBEIFByb2NlZHVyZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjYXQuaXNfcGFja2FnZSAmJiBjYXQuaXNfcGFja2FnZS5sZW5ndGggJiYgY2F0LmlzX3BhY2thZ2VbMF0gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWFyY2gtc3Bhbi1zdWJcIj5IZWFsdGggUGFja2FnZSB7Y2F0Lm51bWJlcl9vZl90ZXN0cyAmJiBjYXQubnVtYmVyX29mX3Rlc3RzLmxlbmd0aCAmJiBjYXQubnVtYmVyX29mX3Rlc3RzWzBdID8gYCB8ICR7Y2F0Lm51bWJlcl9vZl90ZXN0c1swXX0gVGVzdCBJbmNsdWRlZGAgOiAnJ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY2F0LnR5cGUgPT0gXCJob3NwaXRhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxzcGFuIGNsYXNzTmFtZT1cInNlYXJjaC1zcGFuLXN1YlwiPntjYXQubG9jYWxpdHkgJiYgQXJyYXkuaXNBcnJheShjYXQubG9jYWxpdHkpID8gY2F0LmxvY2FsaXR5LmpvaW4oJywgJykgOiBjYXQudmlzaWJsZV9uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPHNwYW4gY2xhc3NOYW1lPVwic2VhcmNoLXNwYW4tc3ViXCI+e2NhdC50eXBlLmluY2x1ZGVzKCdkb2N0b3InKSAmJiBjYXQucHJpbWFyeV9uYW1lICYmIEFycmF5LmlzQXJyYXkoY2F0LnByaW1hcnlfbmFtZSkgPyBjYXQucHJpbWFyeV9uYW1lLnNsaWNlKDAsIDIpLmpvaW4oJywgJykgOiBjYXQudmlzaWJsZV9uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdC5wb3B1bGFyaXR5ICYmIGNhdC5wb3B1bGFyaXR5ID49IDUwMDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVsYXItdHh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmdy01MDBcIj5Qb3B1bGFyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdC5uYW1lICYmIGNhdC5uYW1lLmluY2x1ZGVzKCdBYXJvZ3lhbSBDJykgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVsYXItdHh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmdy01MDBcIj5Qb3B1bGFyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUubGVuZ3RoID4gMiAmJiAodGhpcy5wcm9wcy50eXBlID09ICdvcGQnIHx8IHRoaXMucHJvcHMudHlwZSA9PSAncHJvY2VkdXJlcycpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxsaSBvbkNsaWNrPXsoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnRG9jdG9yTmFtZVNlYXJjaGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnZG9jdG9yLW5hbWUtc2VhcmNoZWQnLCAnc2VsZWN0ZWRJZCc6ICcnLCAnc2VhcmNoZWQnOiAnJywgJ3NlYXJjaFN0cmluZyc6IHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VhcmNoUHJvY2VlZCh0aGlzLnN0YXRlLnNlYXJjaFZhbHVlLCBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VyYWNoLXJzbHQtd2l0aC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcmNoLXJzbHQtd2Qtc3BhbiB0ZXh0LWNlbnRlciBzcmNoLWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMjBweCcsIG1hcmdpbjogJzBweCAxMHB4JyB9fSBjbGFzc05hbWU9XCJcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zaGFwZS1zcmNoLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwLTBcIiA+U2VhcmNoIGFsbCBEb2N0b3JzIHdpdGggbmFtZSA6PHNwYW4gY2xhc3NOYW1lPVwic2VhcmNoLWVsLWNvZGUtYm9sZFwiPnt0aGlzLnN0YXRlLnNlYXJjaFZhbHVlfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAodGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZS5sZW5ndGggPiAyICYmIHRoaXMucHJvcHMudHlwZS5pbmNsdWRlcygnbGFiJykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxsaSBvbkNsaWNrPXsoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdMYWJOYW1lU2VhcmNoZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdsYWItbmFtZS1zZWFyY2hlZCcsICdzZWxlY3RlZElkJzogJycsICdzZWFyY2hlZCc6ICcnLCAnc2VhcmNoU3RyaW5nJzogdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWFyY2hQcm9jZWVkKHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcmFjaC1yc2x0LXdpdGgtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyY2gtcnNsdC13ZC1zcGFuIHRleHQtY2VudGVyIHNyY2gtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMjJweCcsIG1hcmdpbjogJzBweCAxMHB4JyB9fSBjbGFzc05hbWU9XCJcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zaGFwZS1zcmNoLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAtMFwiID5TZWFyY2ggYWxsIExhYnMgd2l0aCBuYW1lIDo8c3BhbiBjbGFzc05hbWU9XCJzZWFyY2gtZWwtY29kZS1ib2xkXCI+e3RoaXMuc3RhdGUuc2VhcmNoVmFsdWV9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICh0aGlzLnN0YXRlLnNlYXJjaFZhbHVlLmxlbmd0aCA+IDIgJiYgKHRoaXMucHJvcHMudHlwZSA9PSAncGFja2FnZScpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPGxpIG9uQ2xpY2s9eygpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnUGFja2FnZU5hbWVTZWFyY2hlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3BhY2thZ2UtbmFtZS1zZWFyY2hlZCcsICdzZWxlY3RlZElkJzogJycsICdzZWFyY2hlZCc6ICcnLCAnc2VhcmNoU3RyaW5nJzogdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWFyY2hQcm9jZWVkKHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VyYWNoLXJzbHQtd2l0aC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyY2gtcnNsdC13ZC1zcGFuIHRleHQtY2VudGVyIHNyY2gtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogJzIycHgnLCBtYXJnaW46ICcwcHggMTBweCcgfX0gY2xhc3NOYW1lPVwiXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvc2hhcGUtc3JjaC5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAtMFwiID5TZWFyY2ggYWxsIFBhY2thZ2VzIHdpdGggbmFtZSA6PHNwYW4gY2xhc3NOYW1lPVwic2VhcmNoLWVsLWNvZGUtYm9sZFwiPnt0aGlzLnN0YXRlLnNlYXJjaFZhbHVlfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZS5sZW5ndGggPiAyICYmICh0aGlzLnByb3BzLnR5cGUgPT0gJ29wZCcgfHwgdGhpcy5wcm9wcy50eXBlID09ICdwcm9jZWR1cmVzJykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPGxpIG9uQ2xpY2s9eygpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdIb3NwaXRhbE5hbWVTZWFyY2hlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2hvc3BpdGFsLW5hbWUtc2VhcmNoZWQnLCAnaG9zcGl0YWxJZCc6ICcnLCAnc2VhcmNoZWQnOiAnJywgJ3NlYXJjaFN0cmluZyc6IHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VhcmNoUHJvY2VlZChcIlwiLCB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VyYWNoLXJzbHQtd2l0aC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcmNoLXJzbHQtd2Qtc3BhbiB0ZXh0LWNlbnRlciBzcmNoLWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMjBweCcsIG1hcmdpbjogJzBweCAxMHB4JyB9fSBjbGFzc05hbWU9XCJcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zaGFwZS1zcmNoLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwLTBcIiA+U2VhcmNoIGFsbCBIb3NwaXRhbHMgd2l0aCBuYW1lIDo8c3BhbiBjbGFzc05hbWU9XCJzZWFyY2gtZWwtY29kZS1ib2xkXCI+e3RoaXMuc3RhdGUuc2VhcmNoVmFsdWV9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKHRoaXMucHJvcHMuY2hlY2tGb3JMb2FkID8gdGhpcy5wcm9wcy5jaGlsZHJlbiA6IDxMb2FkZXIgLz4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsaW5pY19jYXJkIHx8IHRoaXMucHJvcHMubGFiX2NhcmQgfHwgdGhpcy5wcm9wcy5zZWFyY2hFbGFzdGljVmlldyA/ICcnIDogPFJpZ2h0QmFyIGV4dHJhQ2xhc3M9XCIgY2hhdC1mbG9hdC1idG4tMlwiIG5ld0NoYXRCdG49e3RoaXMucHJvcHMubmV3Q2hhdEJ0bn0gbXNnVGVtcGxhdGU9XCJnb2xkX2dlbmVyYWxfdGVtcGxhdGVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDcml0ZXJpYUVsYXN0aWNTZWFyY2hWaWV3XG4iLCJpbXBvcnQgY3JpdGVyaWFFbGFzdGljU2VhcmNoVmlldyBmcm9tICcuL2NyaXRlcmlhRWxhc3RpY1NlYXJjaFZpZXcnXG5cbmV4cG9ydCBkZWZhdWx0IGNyaXRlcmlhRWxhc3RpY1NlYXJjaFZpZXciLCJpbXBvcnQgc2VhcmNoVmlldyBmcm9tICcuL3NlYXJjaFZpZXcuanMnXG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaFZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IENvbW1vbmx5U2VhcmNoZWQgZnJvbSAnLi4vLi4vY29tbW9ucy9jb21tb25seVNlYXJjaGVkL2luZGV4LmpzJ1xuaW1wb3J0IENyaXRlcmlhU2VhcmNoIGZyb20gJy4uLy4uL2NvbW1vbnMvY3JpdGVyaWFTZWFyY2gnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vTGVmdEJhcidcbmltcG9ydCBSaWdodEJhciBmcm9tICcuLi9SaWdodEJhcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcblxuY2xhc3MgU2VhcmNoVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdPcGVuU2VhcmNoUGFnZScsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogYG9wZW4tc2VhcmNoLWZyb20tJHtwYXJzZWQuZnJvbSB8fCBcImRlZmF1bHRcIn1gLCBmcm9tOiBwYXJzZWQuZnJvbVxuICAgICAgICB9XG5cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICB9XG5cbiAgICBzZWFyY2hQcm9jZWVkT1BEKGRvY3Rvcl9uYW1lID0gXCJcIiwgaG9zcGl0YWxfbmFtZSA9IFwiXCIpIHtcbiAgICAgICAgLy8gaGFuZGxlIGRvY3RvciBuYW1lLCBob3NwaXRhbCBuYW1lXG4gICAgICAgIHRoaXMucHJvcHMubWVyZ2VPUERTdGF0ZSh7XG4gICAgICAgICAgICBmaWx0ZXJDcml0ZXJpYToge1xuICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuZmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgICAgICAgICAgZG9jdG9yX25hbWUsIGhvc3BpdGFsX25hbWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYWdlOiAxXG4gICAgICAgIH0sIHRydWUpXG5cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1Nob3dEb2N0b3JzQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3Nob3ctZG9jdG9ycy1jbGlja2VkJ1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goe1xuICAgICAgICAgICAgcGF0aG5hbWU6ICcvb3BkL3NlYXJjaHJlc3VsdHMnLFxuICAgICAgICAgICAgc3RhdGU6IHsgc2VhcmNoX2JhY2s6IHRydWUgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHNlYXJjaFByb2NlZWRMQUIobGFiX25hbWUgPSBcIlwiKSB7XG4gICAgICAgIC8vIGhhbmRsZSBkb2N0b3IgbmFtZSwgaG9zcGl0YWwgbmFtZVxuICAgICAgICB0aGlzLnByb3BzLm1lcmdlTEFCU3RhdGUoe1xuICAgICAgICAgICAgZmlsdGVyQ3JpdGVyaWE6IHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLmZpbHRlckNyaXRlcmlhLFxuICAgICAgICAgICAgICAgIGxhYl9uYW1lXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFnZTogMVxuICAgICAgICB9LCB0cnVlKVxuXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnL2xhYi9zZWFyY2hyZXN1bHRzJyxcbiAgICAgICAgICAgIHN0YXRlOiB7IHNlYXJjaF9iYWNrOiB0cnVlIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzaG93RG9jdG9ycyh0eXBlKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uVHlwZSA9PSBcImdlb1wiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNJbnB1dDogMSB9KVxuICAgICAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmZpbHRlclNlbGVjdGVkQ3JpdGVyaWEodHlwZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09ICdvcGQnKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNsb25lQ29tbW9uU2VsZWN0ZWRDcml0ZXJpYXModGhpcy5wcm9wcy5zZWxlY3RlZENyaXRlcmlhcy5maWx0ZXIoeCA9PiAheC50eXBlLmluY2x1ZGVzKFwicHJvY2VkdXJlc1wiKSkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNsb25lQ29tbW9uU2VsZWN0ZWRDcml0ZXJpYXModGhpcy5wcm9wcy5zZWxlY3RlZENyaXRlcmlhcy5maWx0ZXIoeCA9PiB4LnR5cGUuaW5jbHVkZXMoXCJwcm9jZWR1cmVzXCIpKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VhcmNoUHJvY2VlZE9QRChcIlwiLCBcIlwiKVxuICAgIH1cblxuICAgIHNob3dMYWJzKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2NhdGlvblR5cGUgPT0gXCJnZW9cIikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzSW5wdXQ6IDEgfSlcbiAgICAgICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWFyY2hQcm9jZWVkTEFCKFwiXCIpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1hcFwiIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWQgPT0gXCJvcGRcIiA/IDxDcml0ZXJpYVNlYXJjaCB7Li4udGhpcy5wcm9wc30gY2hlY2tGb3JMb2FkPXt0aGlzLnByb3BzLkxPQURFRF9TRUFSQ0hfQ1JJVEVSSUFfT1BEfSB0aXRsZT1cIlNlYXJjaCBmb3IgZG9jdG9yIG9yIGRpc2Vhc2VcIiB0eXBlPVwib3BkXCIgcGFkZGluZ1RvcENsYXNzPXt0cnVlfSBzZWFyY2hQcm9jZWVkPXt0aGlzLnNlYXJjaFByb2NlZWRPUEQuYmluZCh0aGlzKX0gZm9jdXNJbnB1dD17dGhpcy5zdGF0ZS5mb2N1c0lucHV0fSBoaWRlSGVhZGVyT25Nb2JpbGU9e3RydWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm9wZC1zZWFyY2gtc2VjdGlvbiBtYmwtcGRuZy16ZXJvXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMuc2VsZWN0ZWRDcml0ZXJpYXMgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZENyaXRlcmlhcy5maWx0ZXIoeCA9PiAheC50eXBlLmluY2x1ZGVzKFwicHJvY2VkdXJlc1wiKSkubGVuZ3RoID4gMCkgPyA8Q29tbW9ubHlTZWFyY2hlZCB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPXtgVmlldyBTZWxlY3RlZCAoJHt0aGlzLnByb3BzLnNlbGVjdGVkQ3JpdGVyaWFzLmxlbmd0aH0pYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXt0aGlzLnByb3BzLnNlbGVjdGVkQ3JpdGVyaWFzLmZpbHRlcih4ID0+ICF4LnR5cGUuaW5jbHVkZXMoXCJwcm9jZWR1cmVzXCIpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFBpbGxzPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtbXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGU9e3RoaXMucHJvcHMudG9nZ2xlT1BEQ3JpdGVyaWEuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1vbmx5U2VhcmNoZWQgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPVwiQ29tbW9uIFNwZWNpYWxpdGllc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3BlY2lhbGl0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXt0aGlzLnByb3BzLnNwZWNpYWxpemF0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnByb3BzLnNlbGVjdGVkQ3JpdGVyaWFzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAnc3BlY2lhbGl0eScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlPXt0aGlzLnByb3BzLnRvZ2dsZU9QRENyaXRlcmlhLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1vbmx5U2VhcmNoZWQgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPVwiQ29tbW9uIENvbmRpdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNvbmRpdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXt0aGlzLnByb3BzLmNvbmRpdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5wcm9wcy5zZWxlY3RlZENyaXRlcmlhcy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gJ2NvbmRpdGlvbicpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlPXt0aGlzLnByb3BzLnRvZ2dsZU9QRENyaXRlcmlhLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNob3dEb2N0b3JzLmJpbmQodGhpcywgJ29wZCcpfSBjbGFzc05hbWU9XCJwLTMgdi1idG4gdi1idG4tcHJpbWFyeSBidG4tbGcgZml4ZWQgaG9yaXpvbnRhbCBib3R0b20gbm8tcm91bmQgdGV4dC1sZyBzdGlja3ktYnRuXCI+U2hvdyBEb2N0b3JzPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NyaXRlcmlhU2VhcmNoPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWQgPT0gXCJsYWJcIiA/IDxDcml0ZXJpYVNlYXJjaCB7Li4udGhpcy5wcm9wc30gY2hlY2tGb3JMb2FkPXt0aGlzLnByb3BzLkxPQURFRF9TRUFSQ0hfQ1JJVEVSSUFfTEFCfSB0aXRsZT1cIlNlYXJjaCBmb3IgdGVzdHMgb3IgbGFiXCIgcGFkZGluZ1RvcENsYXNzPXt0cnVlfSBzZWFyY2hQcm9jZWVkPXt0aGlzLnNlYXJjaFByb2NlZWRMQUIuYmluZCh0aGlzKX0gZm9jdXNJbnB1dD17dGhpcy5zdGF0ZS5mb2N1c0lucHV0fSBoaWRlSGVhZGVyT25Nb2JpbGU9e3RydWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm9wZC1zZWFyY2gtc2VjdGlvbiBtYmwtcGRuZy16ZXJvXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMuc2VsZWN0ZWRDcml0ZXJpYXMgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZENyaXRlcmlhcy5sZW5ndGggPiAwKSA/IDxDb21tb25seVNlYXJjaGVkIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9e2BWaWV3IFNlbGVjdGVkICgke3RoaXMucHJvcHMuc2VsZWN0ZWRDcml0ZXJpYXMubGVuZ3RofSlgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3RoaXMucHJvcHMuc2VsZWN0ZWRDcml0ZXJpYXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e1tdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUGlsbHM9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlPXt0aGlzLnByb3BzLnRvZ2dsZURpYWdub3Npc0NyaXRlcmlhLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tb25seVNlYXJjaGVkIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZz1cIkNvbW1vbiBUZXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3RoaXMucHJvcHMuY29tbW9uX3Rlc3RzLmZpbHRlcih4ID0+ICF4LmlzX3BhY2thZ2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMucHJvcHMuc2VsZWN0ZWRDcml0ZXJpYXMuZmlsdGVyKHggPT4geC50eXBlID09ICd0ZXN0JykuZmlsdGVyKHggPT4gIXguaXNfcGFja2FnZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGU9e3RoaXMucHJvcHMudG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNvbW1vbl90ZXN0cy5maWx0ZXIoeCA9PiB4LmlzX3BhY2thZ2UpLmxlbmd0aCA/IDxDb21tb25seVNlYXJjaGVkIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9XCJDb21tb24gSGVhbHRoIFBhY2thZ2VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGVzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17dGhpcy5wcm9wcy5jb21tb25fdGVzdHMuZmlsdGVyKHggPT4geC5pc19wYWNrYWdlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5wcm9wcy5zZWxlY3RlZENyaXRlcmlhcy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gJ3Rlc3QnKS5maWx0ZXIoeCA9PiB4LmlzX3BhY2thZ2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZT17dGhpcy5wcm9wcy50b2dnbGVEaWFnbm9zaXNDcml0ZXJpYS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2hvd0xhYnMuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwidi1idG4gcC0zIHYtYnRuLXByaW1hcnkgYnRuLWxnIGZpeGVkIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIHRleHQtbGcgc3RpY2t5LWJ0blwiPlNob3cgTGFiczwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Dcml0ZXJpYVNlYXJjaD4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdGVkID09IFwicHJvY2VkdXJlc1wiID8gPENyaXRlcmlhU2VhcmNoIHsuLi50aGlzLnByb3BzfSBjaGVja0ZvckxvYWQ9e3RoaXMucHJvcHMuTE9BREVEX1NFQVJDSF9DUklURVJJQV9PUER9IHRpdGxlPVwiU2VhcmNoIGZvciBkZW50YWwgdHJlYXRtZW50c1wiIHR5cGU9XCJvcGRcIiBwYWRkaW5nVG9wQ2xhc3M9e3RydWV9IHNlYXJjaFByb2NlZWQ9e3RoaXMuc2VhcmNoUHJvY2VlZE9QRC5iaW5kKHRoaXMpfSBmb2N1c0lucHV0PXt0aGlzLnN0YXRlLmZvY3VzSW5wdXR9IGhpZGVIZWFkZXJPbk1vYmlsZT17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwib3BkLXNlYXJjaC1zZWN0aW9uIG1ibC1wZG5nLXplcm9cIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5zZWxlY3RlZENyaXRlcmlhcyAmJiB0aGlzLnByb3BzLnNlbGVjdGVkQ3JpdGVyaWFzLmZpbHRlcih4ID0+IHgudHlwZS5pbmNsdWRlcyhcInByb2NlZHVyZXNcIikpLmxlbmd0aCA+IDApID8gPENvbW1vbmx5U2VhcmNoZWQgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZz17YFZpZXcgU2VsZWN0ZWQgKCR7dGhpcy5wcm9wcy5zZWxlY3RlZENyaXRlcmlhcy5sZW5ndGh9KWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17dGhpcy5wcm9wcy5zZWxlY3RlZENyaXRlcmlhcy5maWx0ZXIoeCA9PiB4LnR5cGUuaW5jbHVkZXMoXCJwcm9jZWR1cmVzXCIpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFBpbGxzPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtbXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGU9e3RoaXMucHJvcHMudG9nZ2xlT1BEQ3JpdGVyaWEuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1vbmx5U2VhcmNoZWQgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPVwiQ29tbW9uIERlbnRhbCBUcmVhdG1lbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcm9jZWR1cmVzX2NhdGVnb3J5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3RoaXMucHJvcHMucHJvY2VkdXJlX2NhdGVnb3JpZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5wcm9wcy5zZWxlY3RlZENyaXRlcmlhcy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gJ3Byb2NlZHVyZXNfY2F0ZWdvcnknKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZT17dGhpcy5wcm9wcy50b2dnbGVPUERDcml0ZXJpYS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zaG93RG9jdG9ycy5iaW5kKHRoaXMsICdwcm9jZWR1cmVzJyl9IGNsYXNzTmFtZT1cInAtMyB2LWJ0biB2LWJ0bi1wcmltYXJ5IGJ0bi1sZyBmaXhlZCBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCB0ZXh0LWxnIHN0aWNreS1idG5cIj5TaG93IERvY3RvcnM8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ3JpdGVyaWFTZWFyY2g+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoVmlld1xuIiwiaW1wb3J0IHNlYXJjaEVsYXN0aWNWaWV3IGZyb20gJy4vc2VhcmNoRWxhc3RpY1ZpZXcuanMnXG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaEVsYXN0aWNWaWV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgQ29tbW9ubHlTZWFyY2hlZCBmcm9tICcuLi8uLi9jb21tb25zL2NvbW1vbmx5U2VhcmNoZWQvaW5kZXguanMnXG5pbXBvcnQgQ3JpdGVyaWFFbGFzdGljU2VhcmNoIGZyb20gJy4uLy4uL2NvbW1vbnMvY3JpdGVyaWFFbGFzdGljU2VhcmNoJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcbmltcG9ydCBGaXhlZE1vYmlsZUZvb3RlciBmcm9tICcuLi9Ib21lL0ZpeGVkTW9iaWxlRm9vdGVyLmpzJztcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cblxuY2xhc3MgU2VhcmNoRWxhc3RpY1ZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY3VycmVudFRlc3RUeXBlOiB7fSxcbiAgICAgICAgICAgIHNlYXJjaFN0cmluZzogJycsXG4gICAgICAgICAgICBzaG93Rml4ZWRNb2JpbGVGb290ZXI6IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsKDAsIDApXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcblxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnT3BlblNlYXJjaFBhZ2UnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6IGBvcGVuLXNlYXJjaC1mcm9tLSR7cGFyc2VkLmZyb20gfHwgXCJkZWZhdWx0XCJ9YCwgJ2Zyb20nOiBwYXJzZWQuZnJvbSwgJ2RlZmF1bHRTZWFyY2hCdXR0b24nOiB0aGlzLnByb3BzLnNlbGVjdGVkU2VhcmNoVHlwZSB8fCAnJywgJ3BhZ2UnOiBwYXJzZWQucGFnZVR5cGU/cGFyc2VkLnBhZ2VUeXBlOicnXG4gICAgICAgIH1cblxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgIH1cblxuICAgIHNlYXJjaFByb2NlZWRPUEQoZG9jdG9yX25hbWUgPSBcIlwiLCBob3NwaXRhbF9uYW1lID0gXCJcIiwgaG9zcGl0YWxfaWQgPSBcIlwiKSB7XG4gICAgICAgIC8vIGhhbmRsZSBkb2N0b3IgbmFtZSwgaG9zcGl0YWwgbmFtZVxuICAgICAgICBsZXQgc3RhdGUgPSB7XG4gICAgICAgICAgICBmaWx0ZXJDcml0ZXJpYToge1xuICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuZGF0YVN0YXRlLmZpbHRlckNyaXRlcmlhLFxuICAgICAgICAgICAgICAgIGRvY3Rvcl9uYW1lLCBob3NwaXRhbF9uYW1lLCBob3NwaXRhbF9pZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5leHRGaWx0ZXJDcml0ZXJpYToge1xuICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuZGF0YVN0YXRlLmZpbHRlckNyaXRlcmlhLFxuICAgICAgICAgICAgICAgIGRvY3Rvcl9uYW1lLCBob3NwaXRhbF9uYW1lLCBob3NwaXRhbF9pZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoZG9jdG9yX25hbWUgfHwgaG9zcGl0YWxfbmFtZSB8fCBob3NwaXRhbF9pZCkge1xuICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWRDcml0ZXJpYXMgPSBbXVxuICAgICAgICAgICAgc3RhdGUuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMgPSBbXVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9wcy5tZXJnZU9QRFN0YXRlKHN0YXRlLCB0cnVlKVxuXG4gICAgICAgIC8qICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdTaG93RG9jdG9yc0NsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdzaG93LWRvY3RvcnMtY2xpY2tlZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSkqL1xuXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnL29wZC9zZWFyY2hyZXN1bHRzJyxcbiAgICAgICAgICAgIHN0YXRlOiB7IHNlYXJjaF9iYWNrOiB0cnVlIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzZWFyY2hQcm9jZWVkTEFCKGxhYl9uYW1lID0gXCJcIiwgc2hvd19hbGxfbGFicykge1xuICAgICAgICAvLyBoYW5kbGUgZG9jdG9yIG5hbWUsIGhvc3BpdGFsIG5hbWVcbiAgICAgICAgdGhpcy5wcm9wcy5tZXJnZUxBQlN0YXRlKHtcbiAgICAgICAgICAgIGZpbHRlckNyaXRlcmlhOiB7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5kYXRhU3RhdGUuZmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgICAgICAgICAgbGFiX25hbWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuZXh0RmlsdGVyQ3JpdGVyaWE6IHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLmRhdGFTdGF0ZS5maWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgICAgICAgICBsYWJfbmFtZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGN1cnJlbnRTZWFyY2hlZENyaXRlcmlhczogc2hvd19hbGxfbGFicyA/IFtdIDogdGhpcy5wcm9wcy5kYXRhU3RhdGUuc2VsZWN0ZWRDcml0ZXJpYXMsXG4gICAgICAgICAgICBuZXh0U2VsZWN0ZWRDcml0ZXJpYXM6IHNob3dfYWxsX2xhYnMgPyBbXSA6IHRoaXMucHJvcHMuZGF0YVN0YXRlLnNlbGVjdGVkQ3JpdGVyaWFzXG4gICAgICAgIH0sIHRydWUpXG5cbiAgICAgICAgbGV0IHNlbGVjdGVkVGVzdElkcyA9IHRoaXMucHJvcHMuZGF0YVN0YXRlLnNlbGVjdGVkQ3JpdGVyaWFzLm1hcCh0ZXN0ID0+IHRlc3QuaWQpXG4gICAgICAgIGxldCBzZWxlY3RlZFRlc3RzTmFtZSA9IHRoaXMucHJvcHMuZGF0YVN0YXRlLnNlbGVjdGVkQ3JpdGVyaWFzLm1hcCh0ZXN0ID0+IHRlc3QubmFtZSlcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1Nob3dMYWJDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnc2hvdy1sYWItY2xpY2tlZCcsICdTZWxlY3RlZFRlc3RJZHMnOiBzZWxlY3RlZFRlc3RJZHMuam9pbignLCcpIHx8ICcnLCAnU2VsZWN0ZWRUZXN0TmFtZSc6IHNlbGVjdGVkVGVzdHNOYW1lLmpvaW4oJywnKSwgJ1Rlc3RDb3VudCc6IHNlbGVjdGVkVGVzdElkcy5sZW5ndGggfHwgMFxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goe1xuICAgICAgICAgICAgcGF0aG5hbWU6ICcvbGFiL3NlYXJjaHJlc3VsdHMnLFxuICAgICAgICAgICAgc3RhdGU6IHsgc2VhcmNoX2JhY2s6IHRydWUgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHNlYXJjaFByb2NlZWRQYWNrYWdlcygpIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkUGFja2FnZXNJZHMgPSBbXVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5kYXRhU3RhdGUuc2VsZWN0ZWRQYWNrYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmRhdGFTdGF0ZS5zZWxlY3RlZFBhY2thZ2VzLm1hcCh4ID0+IHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFBhY2thZ2VzSWRzLnB1c2goeC5pZClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNldFBhY2thZ2VJZChzZWxlY3RlZFBhY2thZ2VzSWRzLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvc2VhcmNocGFja2FnZXMnKVxuICAgICAgICB9LCAxMDApXG4gICAgfVxuXG4gICAgc2hvd0RvY3RvcnModHlwZSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2NhdGlvblR5cGUgPT0gXCJnZW9cIikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzSW5wdXQ6IDEgfSlcbiAgICAgICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNlYXJjaFByb2NlZWRPUEQoXCJcIiwgXCJcIilcbiAgICB9XG5cbiAgICBzZXRDb21tb25TZWxlY3RlZENyaXRlcmlhcyh0eXBlLCBjcml0ZXJpYSkge1xuICAgICAgICBjcml0ZXJpYSA9IE9iamVjdC5hc3NpZ24oe30sIGNyaXRlcmlhKVxuICAgICAgICBjcml0ZXJpYS50eXBlID0gdHlwZVxuICAgICAgICB0aGlzLnByb3BzLmNsb25lQ29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMoY3JpdGVyaWEpXG4gICAgICAgIHRoaXMuc2hvd0RvY3RvcnMoKVxuICAgIH1cblxuICAgIHNob3dMYWJzKHNob3dfYWxsX2xhYnMpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubG9jYXRpb25UeXBlID09IFwiZ2VvXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c0lucHV0OiAxIH0pXG4gICAgICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VhcmNoUHJvY2VlZExBQihcIlwiLCBzaG93X2FsbF9sYWJzKVxuICAgIH1cblxuICAgIHNob3dQYWNrYWdlcygpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubG9jYXRpb25UeXBlID09IFwiZ2VvXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c0lucHV0OiAxIH0pXG4gICAgICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VhcmNoUHJvY2VlZFBhY2thZ2VzKClcbiAgICB9XG5cbiAgICBjbGlja1BvcFVwKHR5cGUpIHtcbiAgICAgICAgaWYgKHR5cGUgPT0gMSkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdZZXNDbGlja2VkTGFiVGVzdFBvcHVwJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAneWVzLWNsaWNrZWQtbGFiLXRlc3QtcG9wdXAnLCAnc2VsZWN0ZWQnOiB0aGlzLnN0YXRlLmN1cnJlbnRUZXN0VHlwZS5uYW1lIHx8ICcnLCAnc2VsZWN0ZWRJZCc6IHRoaXMuc3RhdGUuY3VycmVudFRlc3RUeXBlLmlkIHx8ICcnLCAnc2VhcmNoZWQnOiB0aGlzLnN0YXRlLnNlYXJjaFN0cmluZyA/ICdhdXRvc3VnZ2VzdCcgOiAnJywgJ3NlYXJjaFN0cmluZyc6IHRoaXMuc3RhdGUuc2VhcmNoU3RyaW5nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSgndGVzdCcsIHRoaXMuc3RhdGUuY3VycmVudFRlc3RUeXBlLCB0cnVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdOb0NsaWNrZWRMYWJUZXN0UG9wdXAnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICduby1jbGlja2VkLWxhYi10ZXN0LXBvcHVwJywgJ3NlYXJjaGVkJzogdGhpcy5zdGF0ZS5zZWFyY2hTdHJpbmcgPyAnYXV0b3N1Z2dlc3QnIDogJycsICdzZWFyY2hTdHJpbmcnOiB0aGlzLnN0YXRlLnNlYXJjaFN0cmluZ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoX3Jlc3VsdHNfdmlldycpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoX3Jlc3VsdHNfdmlldycpLnNjcm9sbEludG9WaWV3KClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFRlc3RUeXBlOiB7fSB9KVxuICAgIH1cblxuICAgIHRvZ2dsZUxhYlRlc3RzKHR5cGUsIGNyaXRlcmlhLCBzZWFyY2hTdHJpbmcgPSBcIlwiKSB7XG4gICAgICAgIGlmKGNyaXRlcmlhLmlzX3BhY2thZ2UgJiYgY3JpdGVyaWEuaXNfcGFja2FnZVswXSl7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVBhY2thZ2VzKCcnLGNyaXRlcmlhKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnVGVzdFNlbGVjdGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAndGVzdC1zZWxlY3RlZCcsICdzZWxlY3RlZCc6IGNyaXRlcmlhLm5hbWUgfHwgJycsICdzZWxlY3RlZElkJzogY3JpdGVyaWEuaWQgfHwgJycsICdzZWFyY2hlZCc6ICdhdXRvc3VnZ2VzdCcsICdzZWFyY2hTdHJpbmcnOiBzZWFyY2hTdHJpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgICAgIGxldCBzZWxlY3RlZFRlc3RJZHMgPSBbXVxuICAgICAgICAgICAgLy8gdGhpcy5wcm9wcy5kYXRhU3RhdGUuc2VsZWN0ZWRDcml0ZXJpYXMubWFwKCh4KSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgaWYgKHgudGVzdF90eXBlKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHNlbGVjdGVkVGVzdElkcy5wdXNoKHgudGVzdF90eXBlKVxuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRUZXN0SWRzLmxlbmd0aCAmJiBjcml0ZXJpYS50ZXN0X3R5cGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRUZXN0SWRzLmluZGV4T2YoY3JpdGVyaWEudGVzdF90eXBlKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFRlc3RUeXBlOiBjcml0ZXJpYSwgc2VhcmNoU3RyaW5nOiBzZWFyY2hTdHJpbmcgfSlcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1BvcFVwT3BlbkxhYlRlc3RFcnJvcicsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3BvcHVwLW9wZW4tbGFiLXRlc3QtZXJyb3InLCAnc2VsZWN0ZWQnOiBjcml0ZXJpYS5uYW1lIHx8ICcnLCAnc2VsZWN0ZWRJZCc6IGNyaXRlcmlhLmlkIHx8ICcnLCAnc2VhcmNoZWQnOiAnYXV0b3N1Z2dlc3QnLCAnc2VhcmNoU3RyaW5nJzogc2VhcmNoU3RyaW5nXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hfcmVzdWx0c192aWV3JykpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoX3Jlc3VsdHNfdmlldycpLnNjcm9sbEludG9WaWV3KClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSgndGVzdCcsIGNyaXRlcmlhLCB0cnVlKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TGFicygpXG4gICAgICAgICAgICB9LCAxMDApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVQYWNrYWdlcyh0eXBlLCBjcml0ZXJpYSwgc2VhcmNoU3RyaW5nID0gXCJcIikge1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnUGFja2FnZVNlbGVjdGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAncGFja2FnZS1zZWxlY3RlZCcsICdzZWxlY3RlZCc6IGNyaXRlcmlhLm5hbWUgfHwgJycsICdzZWxlY3RlZElkJzogY3JpdGVyaWEuaWQgfHwgJycsICdzZWFyY2hlZCc6ICdhdXRvc3VnZ2VzdCcsICdzZWFyY2hTdHJpbmcnOiBzZWFyY2hTdHJpbmdcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAvLyB0aGlzLnByb3BzLnRvZ2dsZVNlYXJjaFBhY2thZ2VzKGNyaXRlcmlhKVxuICAgICAgICB0aGlzLnByb3BzLnNldFBhY2thZ2VJZChjcml0ZXJpYS5pZClcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dQYWNrYWdlcygpXG4gICAgICAgIH0sIDEwMClcbiAgICB9XG5cbiAgICBzZWFyY2hQcm9jZWVkSVBEKCkge1xuXG4gICAgfVxuXG4gICAgc2hvd0lQRChpZCwgdXJsPW51bGwpIHtcblxuICAgICAgICBpZih1cmwpe1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC8ke3VybH0/c2hvd1BvcHVwPXRydWVgKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvaXBkSW5mbz9pcGRfaWQ9JHtpZH0mc2hvd1BvcHVwPXRydWVgKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIHRvZ2dsZUlwZCh0eXBlLCBjcml0ZXJpYSwgc2VhcmNoU3RyaW5nID0gXCJcIikge1xuICAgICAgICBsZXQgc2VsZWN0ZWRDcml0ZXJpYSA9IHsgLi4uY3JpdGVyaWEgfVxuICAgICAgICBzZWxlY3RlZENyaXRlcmlhLnR5cGUgPSAnaXBkJ1xuICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZUlQRENyaXRlcmlhKHNlbGVjdGVkQ3JpdGVyaWEsIHRydWUpXG4gICAgICAgIHRoaXMuc2hvd0lQRChjcml0ZXJpYS5pZCwgY3JpdGVyaWEudXJsKVxuICAgIH1cblxuICAgIHRvZ2dsZUZpeGVkTW9iaWxlRm9vdGVyKHRvU2hvdykge1xuICAgICAgICBpZiAodG9TaG93KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0ZpeGVkTW9iaWxlRm9vdGVyOiB0cnVlIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0ZpeGVkTW9iaWxlRm9vdGVyOiBmYWxzZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCB0aXRsZSA9ICcnXG4gICAgICAgIGxldCBzZWFyY2hQcm9jZWVkID0gJydcbiAgICAgICAgbGV0IHNob3dSZXN1bHRzID0gJydcbiAgICAgICAgbGV0IGNvbW1vblNlYXJjaGVkID0gJydcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZFNlYXJjaFR5cGUuaW5jbHVkZXMoJ29wZCcpKSB7XG4gICAgICAgICAgICB0aXRsZSA9IFwiU2VhcmNoIGZvciBkb2N0b3IsIGhvc3BpdGFsLCBzcGVjaWFsdHlcIlxuICAgICAgICAgICAgc2VhcmNoUHJvY2VlZCA9IHRoaXMuc2VhcmNoUHJvY2VlZE9QRC5iaW5kKHRoaXMpXG4gICAgICAgICAgICBzaG93UmVzdWx0cyA9IHRoaXMuc2hvd0RvY3RvcnMuYmluZCh0aGlzKVxuXG4gICAgICAgICAgICBjb21tb25TZWFyY2hlZCA9IDxDb21tb25seVNlYXJjaGVkIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgIGhlYWRpbmc9XCJDb21tb24gU3BlY2lhbGl0aWVzXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3BlY2lhbGl0eVwiXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRTZWFyY2hUeXBlPXt0aGlzLnByb3BzLnNlbGVjdGVkU2VhcmNoVHlwZX1cbiAgICAgICAgICAgICAgICBkYXRhPXt0aGlzLnByb3BzLmRhdGFTdGF0ZS5zcGVjaWFsaXphdGlvbnN9XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e1tdLyp0aGlzLnByb3BzLnNlbGVjdGVkQ3JpdGVyaWFzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAnc3BlY2lhbGl0eScpKi99XG4gICAgICAgICAgICAgICAgdG9nZ2xlPXt0aGlzLnNldENvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZFNlYXJjaFR5cGUuaW5jbHVkZXMoJ2xhYicpKSB7XG4gICAgICAgICAgICB0aXRsZSA9IFwiU2VhcmNoIGZvciB0ZXN0LCBsYWIsIGhlYWx0aCBwYWNrYWdlXCJcbiAgICAgICAgICAgIHNlYXJjaFByb2NlZWQgPSB0aGlzLnNlYXJjaFByb2NlZWRMQUIuYmluZCh0aGlzKVxuICAgICAgICAgICAgc2hvd1Jlc3VsdHMgPSB0aGlzLnNob3dMYWJzLmJpbmQodGhpcylcblxuICAgICAgICAgICAgY29tbW9uU2VhcmNoZWQgPSA8Q29tbW9ubHlTZWFyY2hlZCB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICBoZWFkaW5nPVwiQ29tbW9uIFRlc3RcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXN0XCJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFNlYXJjaFR5cGU9e3RoaXMucHJvcHMuc2VsZWN0ZWRTZWFyY2hUeXBlfVxuICAgICAgICAgICAgICAgIGRhdGE9e3RoaXMucHJvcHMuZGF0YVN0YXRlLmNvbW1vbl90ZXN0c31cbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17W10vKnRoaXMucHJvcHMuZGF0YVN0YXRlLnNlbGVjdGVkQ3JpdGVyaWFzKi99XG4gICAgICAgICAgICAgICAgdG9nZ2xlPXt0aGlzLnRvZ2dsZUxhYlRlc3RzLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDcml0ZXJpYXM9e3RoaXMucHJvcHMuZGF0YVN0YXRlLnNlbGVjdGVkQ3JpdGVyaWFzfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRTZWFyY2hUeXBlLmluY2x1ZGVzKCdwYWNrYWdlJykpIHtcbiAgICAgICAgICAgIHRpdGxlID0gXCJoZWFsdGggcGFja2FnZXNcIlxuICAgICAgICAgICAgc2VhcmNoUHJvY2VlZCA9IHRoaXMuc2VhcmNoUHJvY2VlZFBhY2thZ2VzLmJpbmQodGhpcylcbiAgICAgICAgICAgIHNob3dSZXN1bHRzID0gdGhpcy5zaG93UGFja2FnZXMuYmluZCh0aGlzKVxuXG4gICAgICAgICAgICBjb21tb25TZWFyY2hlZCA9IDxDb21tb25seVNlYXJjaGVkIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgIGhlYWRpbmc9XCJDb21tb24gSGVhbHRoIFBhY2thZ2VzXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFja2FnZVwiXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRTZWFyY2hUeXBlPXt0aGlzLnByb3BzLnNlbGVjdGVkU2VhcmNoVHlwZX1cbiAgICAgICAgICAgICAgICBkYXRhPXt0aGlzLnByb3BzLmRhdGFTdGF0ZS5jb21tb25fcGFja2FnZX1cbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5wcm9wcy5kYXRhU3RhdGUuc2VsZWN0ZWRQYWNrYWdlc31cbiAgICAgICAgICAgICAgICB0b2dnbGU9e3RoaXMudG9nZ2xlUGFja2FnZXMuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICBzZWxlY3RlZENyaXRlcmlhcz17dGhpcy5wcm9wcy5kYXRhU3RhdGUuc2VsZWN0ZWRQYWNrYWdlc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZFNlYXJjaFR5cGUuaW5jbHVkZXMoJ2lwZCcpKSB7XG5cbiAgICAgICAgICAgIHRpdGxlID0gXCJTZWFyY2ggZm9yIHN1cmdlcnksIHByb2NlZHVyZVwiXG4gICAgICAgICAgICBzZWFyY2hQcm9jZWVkID0gdGhpcy5zZWFyY2hQcm9jZWVkSVBELmJpbmQodGhpcylcbiAgICAgICAgICAgIHNob3dSZXN1bHRzID0gdGhpcy5zaG93SVBELmJpbmQodGhpcylcblxuICAgICAgICAgICAgY29tbW9uU2VhcmNoZWQgPSA8Q29tbW9ubHlTZWFyY2hlZCB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICBoZWFkaW5nPVwiQ29tbW9ubHkgU2VhcmNoZWRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJpcGRcIlxuICAgICAgICAgICAgICAgIHNlbGVjdGVkU2VhcmNoVHlwZT17dGhpcy5wcm9wcy5zZWxlY3RlZFNlYXJjaFR5cGV9XG4gICAgICAgICAgICAgICAgZGF0YT17dGhpcy5wcm9wcy5kYXRhU3RhdGUuaXBkX3Byb2NlZHVyZXN9XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e1tdfVxuICAgICAgICAgICAgICAgIHRvZ2dsZT17dGhpcy50b2dnbGVJcGQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICBzZWxlY3RlZENyaXRlcmlhcz17dGhpcy5wcm9wcy5kYXRhU3RhdGUuc2VsZWN0ZWRDcml0ZXJpYXN9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBlbHNlIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkU2VhcmNoVHlwZS5pbmNsdWRlcygncGFja2FnZScpKSB7XG4gICAgICAgIC8vICAgICB0aXRsZSA9IFwiaGVhbHRoIHBhY2thZ2VzXCJcbiAgICAgICAgLy8gICAgIHNlYXJjaFByb2NlZWQgPSB0aGlzLnNlYXJjaFByb2NlZWRQYWNrYWdlcy5iaW5kKHRoaXMpXG4gICAgICAgIC8vICAgICBzaG93UmVzdWx0cyA9IHRoaXMuc2hvd1BhY2thZ2VzLmJpbmQodGhpcylcblxuICAgICAgICAvLyAgICAgY29tbW9uU2VhcmNoZWQgPSA8Q29tbW9ubHlTZWFyY2hlZFxuICAgICAgICAvLyAgICAgICAgIGhlYWRpbmc9XCJDb21tb24gSGVhbHRoIFBhY2thZ2VzXCJcbiAgICAgICAgLy8gICAgICAgICB0eXBlPVwicGFja2FnZVwiXG4gICAgICAgIC8vICAgICAgICAgc2VsZWN0ZWRTZWFyY2hUeXBlPXt0aGlzLnByb3BzLnNlbGVjdGVkU2VhcmNoVHlwZX1cbiAgICAgICAgLy8gICAgICAgICBkYXRhPXt0aGlzLnByb3BzLmRhdGFTdGF0ZS5jb21tb25fcGFja2FnZX1cbiAgICAgICAgLy8gICAgICAgICBzZWxlY3RlZD17dGhpcy5wcm9wcy5kYXRhU3RhdGUuc2VsZWN0ZWRQYWNrYWdlc31cbiAgICAgICAgLy8gICAgICAgICB0b2dnbGU9e3RoaXMudG9nZ2xlUGFja2FnZXMuYmluZCh0aGlzKX1cbiAgICAgICAgLy8gICAgICAgICBzZWxlY3RlZENyaXRlcmlhcz17dGhpcy5wcm9wcy5kYXRhU3RhdGUuc2VsZWN0ZWRQYWNrYWdlc31cbiAgICAgICAgLy8gICAgIC8+XG4gICAgICAgIC8vIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1hcFwiIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICA8Q3JpdGVyaWFFbGFzdGljU2VhcmNoIHsuLi50aGlzLnByb3BzfSBjaGVja0ZvckxvYWQ9e3RydWV9IHRpdGxlPXt0aXRsZX0gdHlwZT17dGhpcy5wcm9wcy5zZWxlY3RlZFNlYXJjaFR5cGV9IHBhZGRpbmdUb3BDbGFzcz17dHJ1ZX0gc2VhcmNoUHJvY2VlZD17c2VhcmNoUHJvY2VlZH0gc2hvd1Jlc3VsdHM9e3Nob3dSZXN1bHRzfSBmb2N1c0lucHV0PXt0aGlzLnN0YXRlLmZvY3VzSW5wdXR9IGhpZGVIZWFkZXJPbk1vYmlsZT17dHJ1ZX0gdG9nZ2xlTGFiVGVzdHM9e3RoaXMudG9nZ2xlTGFiVGVzdHMuYmluZCh0aGlzKX0gdG9nZ2xlSXBkPXt0aGlzLnRvZ2dsZUlwZC5iaW5kKHRoaXMpfSBzZWFyY2hFbGFzdGljVmlldz17dHJ1ZX0gdG9nZ2xlRml4ZWRNb2JpbGVGb290ZXI9e3RoaXMudG9nZ2xlRml4ZWRNb2JpbGVGb290ZXIuYmluZCh0aGlzKX0gdG9nZ2xlUGFja2FnZXM9e3RoaXMudG9nZ2xlUGFja2FnZXMuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJvcGQtc2VhcmNoLXNlY3Rpb24gbWJsLXBkbmctemVyb1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLnNlbGVjdGVkU2VhcmNoVHlwZS5pbmNsdWRlcygnbGFiJykgJiYgdGhpcy5wcm9wcy5kYXRhU3RhdGUuc2VsZWN0ZWRDcml0ZXJpYXMgJiYgdGhpcy5wcm9wcy5kYXRhU3RhdGUuc2VsZWN0ZWRDcml0ZXJpYXMubGVuZ3RoID4gMCkgPyA8Q29tbW9ubHlTZWFyY2hlZCB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9e2BWaWV3IFNlbGVjdGVkICgke3RoaXMucHJvcHMuZGF0YVN0YXRlLnNlbGVjdGVkQ3JpdGVyaWFzLmxlbmd0aH0pYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3RoaXMucHJvcHMuZGF0YVN0YXRlLnNlbGVjdGVkQ3JpdGVyaWFzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRTZWFyY2hUeXBlPXt0aGlzLnByb3BzLnNlbGVjdGVkU2VhcmNoVHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtbXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUGlsbHM9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGU9e3RoaXMucHJvcHMudG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKi99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5zZWxlY3RlZFNlYXJjaFR5cGUuaW5jbHVkZXMoJ3BhY2thZ2UnKSAmJiB0aGlzLnByb3BzLmRhdGFTdGF0ZS5zZWxlY3RlZFBhY2thZ2VzICYmIHRoaXMucHJvcHMuZGF0YVN0YXRlLnNlbGVjdGVkUGFja2FnZXMubGVuZ3RoID4gMCkgPyA8Q29tbW9ubHlTZWFyY2hlZCB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9e2BWaWV3IFNlbGVjdGVkICgke3RoaXMucHJvcHMuZGF0YVN0YXRlLnNlbGVjdGVkUGFja2FnZXMubGVuZ3RofSlgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhY2thZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17dGhpcy5wcm9wcy5kYXRhU3RhdGUuc2VsZWN0ZWRQYWNrYWdlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU2VhcmNoVHlwZT17dGhpcy5wcm9wcy5zZWxlY3RlZFNlYXJjaFR5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17W119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFBpbGxzPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlPXt0aGlzLnRvZ2dsZVBhY2thZ2VzLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKi99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29tbW9uU2VhcmNoZWR9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWRTZWFyY2hUeXBlLmluY2x1ZGVzKCdsYWInKSAmJiAhdGhpcy5wcm9wcy5pc19sb2dpbl91c2VyX2luc3VyZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1vbmx5U2VhcmNoZWQgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZz1cIkNvbW1vbiBIZWFsdGggUGFja2FnZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXt0aGlzLnByb3BzLmRhdGFTdGF0ZS5jb21tb25fcGFja2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFNlYXJjaFR5cGU9e3RoaXMucHJvcHMuc2VsZWN0ZWRTZWFyY2hUeXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtbXS8qdGhpcy5wcm9wcy5kYXRhU3RhdGUuc2VsZWN0ZWRDcml0ZXJpYXMuZmlsdGVyKHggPT4geC50eXBlID09ICd0ZXN0JykqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGU9e3RoaXMudG9nZ2xlUGFja2FnZXMuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1BhY2thZ2UgPSB7dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdGVkU2VhcmNoVHlwZSA9PSAnbGFiJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2hvd0xhYnMuYmluZCh0aGlzLCB0cnVlKX0gY2xhc3NOYW1lPVwicC0zIHYtYnRuIHYtYnRuLXByaW1hcnkgYnRuLWxnIGZpeGVkIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIHRleHQtbGcgc3RpY2t5LWJ0blwiPlNob3cgTGFiczwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKi99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5zdGF0ZS5jdXJyZW50VGVzdFR5cGUpLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1wb3B1cC1vdmVybGF5IFwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1wb3B1cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBwYWRpaW5nLXNyY2gtZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzcmNoLWVsLWNvbmVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YFBhdGhvbG9neSBhbmQgUmFkaW9sb2d5IHRlc3RzIChsYWIgdmlzaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCkgY2Fubm90IGJlIGJvb2tlZCB0b2dldGhlci4gRG8geW91IHdhbnQgdG8gc2VhcmNoICR7dGhpcy5zdGF0ZS5jdXJyZW50VGVzdFR5cGUubmFtZX0gIHRlc3QgaW5zdGVhZCA/YH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZWwtYnRuLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2xpY2tQb3BVcC5iaW5kKHRoaXMsIDEpfT5ZZXM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxzcGFuIGNsYXNzTmFtZT1cInNyYy1lbC1idG4tYm9yZGVyXCI+PC9zcGFuPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNsaWNrUG9wVXAuYmluZCh0aGlzLCAyKX0+Tm88L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Dcml0ZXJpYUVsYXN0aWNTZWFyY2g+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0ZpeGVkTW9iaWxlRm9vdGVyID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaXhlZE1vYmlsZUZvb3RlciB7Li4udGhpcy5wcm9wc30gLz4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoRWxhc3RpY1ZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgbWVyZ2VPUERTdGF0ZSwgcmVzZXRGaWx0ZXJzLCBnZXRPUERDcml0ZXJpYVJlc3VsdHMsIHRvZ2dsZU9QRENyaXRlcmlhLCBsb2FkT1BEQ29tbW9uQ3JpdGVyaWEsIGNsb25lQ29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMsIG1lcmdlTEFCU3RhdGUsIGNsZWFyQWxsVGVzdHMsIGxvYWRMYWJDb21tb25Dcml0ZXJpYXMsIHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhLCBnZXREaWFnbm9zaXNDcml0ZXJpYVJlc3VsdHMsIGNsZWFyRXh0cmFUZXN0cywgc2VsZWN0U2VhcmNoVHlwZSwgZmlsdGVyU2VsZWN0ZWRDcml0ZXJpYSwgZ2V0RWxhc3RpY0NyaXRlcmlhUmVzdWx0cywgc2V0UGFja2FnZUlkLCB0b2dnbGVTZWFyY2hQYWNrYWdlcywgdG9nZ2xlSVBEQ3JpdGVyaWEsIGxvYWRPUERJbnN1cmFuY2UgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuXG5pbXBvcnQgU2VhcmNoVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvc2VhcmNoJ1xuaW1wb3J0IFNlYXJjaEVsYXN0aWNWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9zZWFyY2hFbGFzdGljJ1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi9jb25maWcnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuXG5jbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0geyBlbGFzdGljU2VhcmNoU3RyaW5nOiAnJyB9XG4gICAgfVxuXG4gICAgY2hhbmdlU2VsZWN0aW9uKHdoaWNoLCBzZWFyY2hTdHJpbmcgPSAnJykge1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnVG9nZ2xlU2VhcmNoVHlwZScsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3Rvb2dsZS1zZWFyY2gtdHlwZScsICd0eXBlJzogd2hpY2ggfHwgJydcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlbGFzdGljU2VhcmNoU3RyaW5nOiBzZWFyY2hTdHJpbmcgfSlcbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RTZWFyY2hUeXBlKHdoaWNoKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsKDAsIDApXG4gICAgICAgIH1cbiAgICAgICAgLy9vcGRcbiAgICAgICAgbGV0IGxvY2FsaXR5ID0gJydcbiAgICAgICAgbGV0IHNlbGVjdGVkTG9jYXRpb24gPSBudWxsXG4gICAgICAgIGlmKHRoaXMucHJvcHMuT1BEX1NUQVRFICYmIHRoaXMucHJvcHMuT1BEX1NUQVRFLnNlbGVjdGVkTG9jYXRpb24pe1xuICAgICAgICAgICAgbG9jYWxpdHkgPSB0aGlzLnByb3BzLk9QRF9TVEFURS5zZWxlY3RlZExvY2F0aW9uLmxvY2FsaXR5fHwnJ1xuICAgICAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbiA9IHRoaXMucHJvcHMuT1BEX1NUQVRFLnNlbGVjdGVkTG9jYXRpb25cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLmxvYWRPUERDb21tb25Dcml0ZXJpYShzZWxlY3RlZExvY2F0aW9uKVxuICAgICAgICB0aGlzLnByb3BzLnJlc2V0RmlsdGVycygpXG4gICAgICAgIC8vIGxhYlxuICAgICAgICB0aGlzLnByb3BzLmxvYWRMYWJDb21tb25Dcml0ZXJpYXMoKVxuICAgICAgICAvLyB0aGlzLnByb3BzLmxvYWRPUERJbnN1cmFuY2Uoc2VsZWN0ZWRMb2NhdGlvbilcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5jbGVhckV4dHJhVGVzdHMoKVxuICAgIH1cblxuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJvdXRlcjogKCkgPT4gbnVsbFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBpZiAoQ09ORklHLlNFQVJDSF9FTEFTVElDX1ZJRVcpIHtcbiAgICAgICAgICAgIGxldCBkYXRhU3RhdGUgPSAnJ1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih0aGlzLnByb3BzLnNlbGVjdGVkU2VhcmNoVHlwZSA9PSAnb3BkJyB8fCB0aGlzLnByb3BzLnNlbGVjdGVkU2VhcmNoVHlwZSA9PSAncHJvY2VkdXJlcycpIHtcbiAgICAgICAgICAgICAgICBkYXRhU3RhdGUgPSB0aGlzLnByb3BzLk9QRF9TVEFURVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnNlbGVjdGVkU2VhcmNoVHlwZSA9PSAnaXBkJykge1xuICAgICAgICAgICAgICAgIGRhdGFTdGF0ZSA9IHRoaXMucHJvcHMuSVBEX1NUQVRFXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGRhdGFTdGF0ZSA9IHRoaXMucHJvcHMuTEFCX1NUQVRFXG4gICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxTZWFyY2hFbGFzdGljVmlldyB7Li4udGhpcy5wcm9wc30gZGF0YVN0YXRlPXtkYXRhU3RhdGV9IHNlbGVjdGVkPXt0aGlzLnByb3BzLnNlbGVjdGVkU2VhcmNoVHlwZX0gY2hhbmdlU2VsZWN0aW9uPXt0aGlzLmNoYW5nZVNlbGVjdGlvbi5iaW5kKHRoaXMpfSBlbGFzdGljU2VhcmNoU3RyaW5nPXt0aGlzLnN0YXRlLmVsYXN0aWNTZWFyY2hTdHJpbmd9IGNvbW1vbl9zZXR0aW5ncz17dGhpcy5wcm9wcy5PUERfU1RBVEUuY29tbW9uX3NldHRpbmdzfS8+XG4gICAgICAgICAgICApXG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRTZWFyY2hUeXBlID09ICdvcGQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaFZpZXcgey4uLnRoaXMucHJvcHN9IHsuLi50aGlzLnByb3BzLk9QRF9TVEFURX0gc2VsZWN0ZWQ9e3RoaXMucHJvcHMuc2VsZWN0ZWRTZWFyY2hUeXBlfSBjaGFuZ2VTZWxlY3Rpb249e3RoaXMuY2hhbmdlU2VsZWN0aW9uLmJpbmQodGhpcyl9IGNvbW1vbl9zZXR0aW5ncz17dGhpcy5wcm9wcy5PUERfU1RBVEUuY29tbW9uX3NldHRpbmdzfSAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkU2VhcmNoVHlwZSA9PSAnbGFiJykge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hWaWV3IHsuLi50aGlzLnByb3BzfSB7Li4udGhpcy5wcm9wcy5MQUJfU1RBVEV9IHNlbGVjdGVkPXt0aGlzLnByb3BzLnNlbGVjdGVkU2VhcmNoVHlwZX0gY2hhbmdlU2VsZWN0aW9uPXt0aGlzLmNoYW5nZVNlbGVjdGlvbi5iaW5kKHRoaXMpfSBjb21tb25fc2V0dGluZ3M9e3RoaXMucHJvcHMuT1BEX1NUQVRFLmNvbW1vbl9zZXR0aW5nc30gLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZFNlYXJjaFR5cGUgPT0gJ3Byb2NlZHVyZXMnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaFZpZXcgey4uLnRoaXMucHJvcHN9IHsuLi50aGlzLnByb3BzLk9QRF9TVEFURX0gc2VsZWN0ZWQ9e3RoaXMucHJvcHMuc2VsZWN0ZWRTZWFyY2hUeXBlfSBjaGFuZ2VTZWxlY3Rpb249e3RoaXMuY2hhbmdlU2VsZWN0aW9uLmJpbmQodGhpcyl9IGNvbW1vbl9zZXR0aW5ncz17dGhpcy5wcm9wcy5PUERfU1RBVEUuY29tbW9uX3NldHRpbmdzfS8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIGxldCBPUERfU1RBVEUgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBMT0FERURfU0VBUkNIX0NSSVRFUklBX09QRCxcbiAgICAgICAgICAgIHNwZWNpYWxpemF0aW9ucyxcbiAgICAgICAgICAgIGNvbmRpdGlvbnMsXG4gICAgICAgICAgICBzZWxlY3RlZENyaXRlcmlhcyxcbiAgICAgICAgICAgIHNlbGVjdGVkTG9jYXRpb24sXG4gICAgICAgICAgICBmaWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgICAgIGxvY2F0aW9uVHlwZSxcbiAgICAgICAgICAgIHByb2NlZHVyZV9jYXRlZ29yaWVzLFxuICAgICAgICAgICAgcHJvY2VkdXJlcyxcbiAgICAgICAgICAgIGNvbW1vbl9zZXR0aW5nc1xuICAgICAgICB9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX09QRFxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBMT0FERURfU0VBUkNIX0NSSVRFUklBX09QRCxcbiAgICAgICAgICAgIHNwZWNpYWxpemF0aW9ucyxcbiAgICAgICAgICAgIGNvbmRpdGlvbnMsXG4gICAgICAgICAgICBzZWxlY3RlZENyaXRlcmlhcyxcbiAgICAgICAgICAgIHNlbGVjdGVkTG9jYXRpb24sXG4gICAgICAgICAgICBmaWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgICAgIGxvY2F0aW9uVHlwZSxcbiAgICAgICAgICAgIHByb2NlZHVyZV9jYXRlZ29yaWVzLFxuICAgICAgICAgICAgcHJvY2VkdXJlcyxcbiAgICAgICAgICAgIGNvbW1vbl9zZXR0aW5nc1xuICAgICAgICB9XG4gICAgfSkoKVxuXG4gICAgbGV0IExBQl9TVEFURSA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIExPQURFRF9TRUFSQ0hfQ1JJVEVSSUFfTEFCLFxuICAgICAgICAgICAgY29tbW9uX3Rlc3RzLFxuICAgICAgICAgICAgY29tbW9uX2NvbmRpdGlvbnMsXG4gICAgICAgICAgICBwcmVmZXJyZWRfbGFicyxcbiAgICAgICAgICAgIHNlbGVjdGVkQ3JpdGVyaWFzLFxuICAgICAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgICAgIGZpbHRlckNyaXRlcmlhLFxuICAgICAgICAgICAgbG9jYXRpb25UeXBlLFxuICAgICAgICAgICAgY29tbW9uX3BhY2thZ2UsXG4gICAgICAgICAgICBmaWx0ZXJDcml0ZXJpYVBhY2thZ2VzLFxuICAgICAgICAgICAgc2VsZWN0ZWRQYWNrYWdlc1xuICAgICAgICB9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX0xBQlNcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgTE9BREVEX1NFQVJDSF9DUklURVJJQV9MQUIsXG4gICAgICAgICAgICBjb21tb25fdGVzdHMsXG4gICAgICAgICAgICBjb21tb25fY29uZGl0aW9ucyxcbiAgICAgICAgICAgIHByZWZlcnJlZF9sYWJzLFxuICAgICAgICAgICAgc2VsZWN0ZWRDcml0ZXJpYXMsXG4gICAgICAgICAgICBzZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICAgICAgZmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgICAgICBsb2NhdGlvblR5cGUsXG4gICAgICAgICAgICBjb21tb25fcGFja2FnZSxcbiAgICAgICAgICAgIGZpbHRlckNyaXRlcmlhUGFja2FnZXMsXG4gICAgICAgICAgICBzZWxlY3RlZFBhY2thZ2VzXG4gICAgICAgIH1cbiAgICB9KSgpXG5cbiAgICBsZXQgSVBEX1NUQVRFID0gKCgpID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgTE9BREVEX1NFQVJDSF9DUklURVJJQV9PUEQsXG4gICAgICAgICAgICBpcGRfcHJvY2VkdXJlcyxcbiAgICAgICAgICAgIHNlbGVjdGVkTG9jYXRpb24sXG4gICAgICAgICAgICBsb2NhdGlvblR5cGVcblxuICAgICAgICB9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX09QRFxuXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHNlbGVjdGVkQ3JpdGVyaWFzXG4gICAgICAgIH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfSVBEXG5cbiAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgTE9BREVEX1NFQVJDSF9DUklURVJJQV9PUEQsXG4gICAgICAgICAgICBpcGRfcHJvY2VkdXJlcyxcbiAgICAgICAgICAgIHNlbGVjdGVkTG9jYXRpb24sXG4gICAgICAgICAgICBsb2NhdGlvblR5cGUsXG4gICAgICAgICAgICBzZWxlY3RlZENyaXRlcmlhc1xuICAgICAgICB9XG5cbiAgICB9KSgpXG5cbiAgICBsZXQgeyBzZWxlY3RlZFNlYXJjaFR5cGUsIGlzX2xvZ2luX3VzZXJfaW5zdXJlZCwgcHJvZmlsZXMsIGRlZmF1bHRQcm9maWxlIH0gPSBzdGF0ZS5VU0VSXG5cbiAgICByZXR1cm4geyBPUERfU1RBVEUsIExBQl9TVEFURSwgc2VsZWN0ZWRTZWFyY2hUeXBlLCBJUERfU1RBVEUsIGlzX2xvZ2luX3VzZXJfaW5zdXJlZCwgcHJvZmlsZXMsIGRlZmF1bHRQcm9maWxlIH1cblxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBvcGRcbiAgICAgICAgbG9hZE9QRENvbW1vbkNyaXRlcmlhOiAoc2VsZWN0ZWRMb2NhdGlvbikgPT4gZGlzcGF0Y2gobG9hZE9QRENvbW1vbkNyaXRlcmlhKHNlbGVjdGVkTG9jYXRpb24pKSxcbiAgICAgICAgdG9nZ2xlT1BEQ3JpdGVyaWE6ICh0eXBlLCBjcml0ZXJpYSkgPT4gZGlzcGF0Y2godG9nZ2xlT1BEQ3JpdGVyaWEodHlwZSwgY3JpdGVyaWEpKSxcbiAgICAgICAgZ2V0T1BEQ3JpdGVyaWFSZXN1bHRzOiAoc2VhcmNoU3RyaW5nLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2goZ2V0T1BEQ3JpdGVyaWFSZXN1bHRzKHNlYXJjaFN0cmluZywgY2FsbGJhY2spKSxcbiAgICAgICAgcmVzZXRGaWx0ZXJzOiAoKSA9PiBkaXNwYXRjaChyZXNldEZpbHRlcnMoKSksXG4gICAgICAgIG1lcmdlT1BEU3RhdGU6IChzdGF0ZSwgZmV0Y2hOZXdSZXN1bHRzKSA9PiBkaXNwYXRjaChtZXJnZU9QRFN0YXRlKHN0YXRlLCBmZXRjaE5ld1Jlc3VsdHMpKSxcbiAgICAgICAgY2xvbmVDb21tb25TZWxlY3RlZENyaXRlcmlhczogKHNlbGVjdGVkQ3JpdGVyaWFzKSA9PiBkaXNwYXRjaChjbG9uZUNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzKHNlbGVjdGVkQ3JpdGVyaWFzKSksXG4gICAgICAgIGZpbHRlclNlbGVjdGVkQ3JpdGVyaWE6ICh0eXBlKSA9PiBkaXNwYXRjaChmaWx0ZXJTZWxlY3RlZENyaXRlcmlhKHR5cGUpKSxcbiAgICAgICAgLy9sYWJcbiAgICAgICAgbG9hZExhYkNvbW1vbkNyaXRlcmlhczogKCkgPT4gZGlzcGF0Y2gobG9hZExhYkNvbW1vbkNyaXRlcmlhcygpKSxcbiAgICAgICAgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWE6ICh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQpID0+IGRpc3BhdGNoKHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKHR5cGUsIGNyaXRlcmlhLCBmb3JjZUFkZCkpLFxuICAgICAgICBnZXREaWFnbm9zaXNDcml0ZXJpYVJlc3VsdHM6IChzZWFyY2hTdHJpbmcsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaChnZXREaWFnbm9zaXNDcml0ZXJpYVJlc3VsdHMoc2VhcmNoU3RyaW5nLCBjYWxsYmFjaykpLFxuICAgICAgICBjbGVhckV4dHJhVGVzdHM6ICgpID0+IGRpc3BhdGNoKGNsZWFyRXh0cmFUZXN0cygpKSxcbiAgICAgICAgY2xlYXJBbGxUZXN0czogKCkgPT4gZGlzcGF0Y2goY2xlYXJBbGxUZXN0cygpKSxcbiAgICAgICAgbWVyZ2VMQUJTdGF0ZTogKHN0YXRlLCBmZXRjaE5ld1Jlc3VsdHMpID0+IGRpc3BhdGNoKG1lcmdlTEFCU3RhdGUoc3RhdGUsIGZldGNoTmV3UmVzdWx0cykpLFxuICAgICAgICBzZWxlY3RTZWFyY2hUeXBlOiAodHlwZSkgPT4gZGlzcGF0Y2goc2VsZWN0U2VhcmNoVHlwZSh0eXBlKSksXG4gICAgICAgIGdldEVsYXN0aWNDcml0ZXJpYVJlc3VsdHM6IChzZWFyY2hTdHJpbmcsIHR5cGUsIGxvY2F0aW9uLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2goZ2V0RWxhc3RpY0NyaXRlcmlhUmVzdWx0cyhzZWFyY2hTdHJpbmcsIHR5cGUsIGxvY2F0aW9uLCBjYWxsYmFjaykpLFxuICAgICAgICAvLyBwYWNrYWdlXG4gICAgICAgIHNldFBhY2thZ2VJZDogKHBhY2thZ2VfaWQsIGlzSG9tZVBhZ2UpID0+IGRpc3BhdGNoKHNldFBhY2thZ2VJZChwYWNrYWdlX2lkLCBpc0hvbWVQYWdlKSksXG4gICAgICAgIHRvZ2dsZVNlYXJjaFBhY2thZ2VzOiAoaGVhbHRoUGFja2FnZSkgPT4gZGlzcGF0Y2godG9nZ2xlU2VhcmNoUGFja2FnZXMoaGVhbHRoUGFja2FnZSkpLFxuICAgICAgICB0b2dnbGVJUERDcml0ZXJpYTogKGNyaXRlcmlhLCBmb3JjZUFkZCkgPT4gZGlzcGF0Y2godG9nZ2xlSVBEQ3JpdGVyaWEoY3JpdGVyaWEsIGZvcmNlQWRkKSksXG4gICAgICAgIGxvYWRPUERJbnN1cmFuY2U6IChjaXR5KSA9PiBkaXNwYXRjaChsb2FkT1BESW5zdXJhbmNlKGNpdHkpKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTZWFyY2gpO1xuIiwiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sZSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5Db21wcmVzcz1lKCk6dC5Db21wcmVzcz1lKCl9KHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShpKXtpZihuW2ldKXJldHVybiBuW2ldLmV4cG9ydHM7dmFyIGE9bltpXT17ZXhwb3J0czp7fSxpZDppLGxvYWRlZDohMX07cmV0dXJuIHRbaV0uY2FsbChhLmV4cG9ydHMsYSxhLmV4cG9ydHMsZSksYS5sb2FkZWQ9ITAsYS5leHBvcnRzfXZhciBuPXt9O3JldHVybiBlLm09dCxlLmM9bixlLnA9XCJcIixlKDApfShbZnVuY3Rpb24odCxlLG4pe3ZhciBpLGEscjshZnVuY3Rpb24obyx1KXthPVt0LG4oMSksbigyKSxuKDMpLG4oNCksbig1KSxuKDYpXSxpPXUscj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBpP2kuYXBwbHkoZSxhKTppLCEodm9pZCAwIT09ciYmKHQuZXhwb3J0cz1yKSl9KHRoaXMsZnVuY3Rpb24odCxlLG4saSxhLHIsbyl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdSh0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e2RlZmF1bHQ6dH19ZnVuY3Rpb24gcyh0KXtpZihBcnJheS5pc0FycmF5KHQpKXtmb3IodmFyIGU9MCxuPUFycmF5KHQubGVuZ3RoKTtlPHQubGVuZ3RoO2UrKyluW2VdPXRbZV07cmV0dXJuIG59cmV0dXJuIEFycmF5LmZyb20odCl9ZnVuY3Rpb24gZih0LGUpe2lmKCEodCBpbnN0YW5jZW9mIGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9dmFyIGQ9dShlKSxsPXUobiksYz11KGkpLGg9dShhKSx2PXUocikscD11KG8pLGc9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsZSl7Zm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciBpPWVbbl07aS5lbnVtZXJhYmxlPWkuZW51bWVyYWJsZXx8ITEsaS5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gaSYmKGkud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGkua2V5LGkpfX1yZXR1cm4gZnVuY3Rpb24oZSxuLGkpe3JldHVybiBuJiZ0KGUucHJvdG90eXBlLG4pLGkmJnQoZSxpKSxlfX0oKSx3PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe2YodGhpcyx0KX1yZXR1cm4gZyh0LFt7a2V5OlwiYXR0YWNoXCIsdmFsdWU6ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzO3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihpLGEpe3ZhciByPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodCk7ci5zZXRBdHRyaWJ1dGUoXCJhY2NlcHRcIixcImltYWdlLypcIiksci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsZnVuY3Rpb24odCl7dmFyIGE9bi5jb21wcmVzcyhbXS5jb25jYXQocyh0LnRhcmdldC5maWxlcykpLGUpO2koYSl9LCExKX0pfX0se2tleTpcImNvbXByZXNzXCIsdmFsdWU6ZnVuY3Rpb24odCxlKXtmdW5jdGlvbiBuKHQsZSl7dmFyIG49bmV3IHYuZGVmYXVsdChlKTtyZXR1cm4gbi5zdGFydD13aW5kb3cucGVyZm9ybWFuY2Uubm93KCksbi5hbHQ9dC5uYW1lLG4uZXh0PXQudHlwZSxuLnN0YXJ0U2l6ZT10LnNpemUscC5kZWZhdWx0Lm9yaWVudGF0aW9uKHQpLnRoZW4oZnVuY3Rpb24oZSl7cmV0dXJuIG4ub3JpZW50YXRpb249ZSxjLmRlZmF1bHQubG9hZCh0KX0pLnRoZW4oaShuKSl9ZnVuY3Rpb24gaSh0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGguZGVmYXVsdC5sb2FkKGUpLnRoZW4oZnVuY3Rpb24oZSl7aWYodC5zdGFydFdpZHRoPWUubmF0dXJhbFdpZHRoLHQuc3RhcnRIZWlnaHQ9ZS5uYXR1cmFsSGVpZ2h0LHQucmVzaXplKXt2YXIgbj1oLmRlZmF1bHQucmVzaXplKHQubWF4V2lkdGgsdC5tYXhIZWlnaHQpKGUubmF0dXJhbFdpZHRoLGUubmF0dXJhbEhlaWdodCksaT1uLndpZHRoLGE9bi5oZWlnaHQ7dC5lbmRXaWR0aD1pLHQuZW5kSGVpZ2h0PWF9ZWxzZSB0LmVuZFdpZHRoPWUubmF0dXJhbFdpZHRoLHQuZW5kSGVpZ2h0PWUubmF0dXJhbEhlaWdodDtyZXR1cm4gbC5kZWZhdWx0LmltYWdlVG9DYW52YXModC5lbmRXaWR0aCx0LmVuZEhlaWdodCx0Lm9yaWVudGF0aW9uKShlKX0pLnRoZW4oZnVuY3Rpb24oZSl7cmV0dXJuIHQuaXRlcmF0aW9ucz0xLHQuYmFzZTY0cHJlZml4PWQuZGVmYXVsdC5wcmVmaXgodC5leHQpLGEoZSx0LnN0YXJ0U2l6ZSx0LnF1YWxpdHksdC5zaXplLHQubWluUXVhbGl0eSx0Lml0ZXJhdGlvbnMpfSkudGhlbihmdW5jdGlvbihlKXtyZXR1cm4gdC5maW5hbFNpemU9ZC5kZWZhdWx0LnNpemUoZSksZC5kZWZhdWx0LmRhdGEoZSl9KS50aGVuKGZ1bmN0aW9uKGUpe3QuZW5kPXdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTt2YXIgbj10LmVuZC10LnN0YXJ0O3JldHVybntkYXRhOmUscHJlZml4OnQuYmFzZTY0cHJlZml4LGVsYXBzZWRUaW1lSW5TZWNvbmRzOm4vMWUzLGFsdDp0LmFsdCxpbml0aWFsU2l6ZUluTWI6bC5kZWZhdWx0LnNpemUodC5zdGFydFNpemUpLk1CLGVuZFNpemVJbk1iOmwuZGVmYXVsdC5zaXplKHQuZmluYWxTaXplKS5NQixleHQ6dC5leHQscXVhbGl0eTp0LnF1YWxpdHksZW5kV2lkdGhJblB4OnQuZW5kV2lkdGgsZW5kSGVpZ2h0SW5QeDp0LmVuZEhlaWdodCxpbml0aWFsV2lkdGhJblB4OnQuc3RhcnRXaWR0aCxpbml0aWFsSGVpZ2h0SW5QeDp0LnN0YXJ0SGVpZ2h0LHNpemVSZWR1Y2VkSW5QZXJjZW50Oih0LnN0YXJ0U2l6ZS10LmZpbmFsU2l6ZSkvdC5zdGFydFNpemUqMTAwLGl0ZXJhdGlvbnM6dC5pdGVyYXRpb25zfX0pfX1mdW5jdGlvbiBhKHQsZSl7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOjEsaT1hcmd1bWVudHNbM10scj1hcmd1bWVudHMubGVuZ3RoPjQmJnZvaWQgMCE9PWFyZ3VtZW50c1s0XT9hcmd1bWVudHNbNF06MSxvPWFyZ3VtZW50c1s1XSx1PWwuZGVmYXVsdC5jYW52YXNUb0Jhc2U2NCh0LG4pLHM9ZC5kZWZhdWx0LnNpemUodSk7cmV0dXJuIG8rPTEscz5pP2EodCxzLG4tLjEsaSxyLG8pOm4+cj9hKHQscyxuLS4xLGkscixvKTpuPC41P3U6dX1yZXR1cm4gUHJvbWlzZS5hbGwodC5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIG4odCxlKX0pKX19XSxbe2tleTpcImNvbnZlcnRCYXNlNjRUb0ZpbGVcIix2YWx1ZTpmdW5jdGlvbih0LGUpe3JldHVybiBsLmRlZmF1bHQuYmFzZTY0VG9GaWxlKHQsZSl9fV0pLHR9KCk7dC5leHBvcnRzPXd9KX0sZnVuY3Rpb24odCxlLG4pe3ZhciBpLGEscjshZnVuY3Rpb24obixvKXthPVtlXSxpPW8scj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBpP2kuYXBwbHkoZSxhKTppLCEodm9pZCAwIT09ciYmKHQuZXhwb3J0cz1yKSl9KHRoaXMsZnVuY3Rpb24odCl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGU9ZnVuY3Rpb24odCl7dmFyIGU9dC5yZXBsYWNlKC9eZGF0YTppbWFnZVxcL1xcdys7YmFzZTY0LC8sXCJcIikubGVuZ3RoO3JldHVybihlLTgxNCkvMS4zN30sbj1mdW5jdGlvbih0KXtyZXR1cm4gdC5zcGxpdChcIjtcIilbMF0ubWF0Y2goL2pwZWd8cG5nfGdpZi8pWzBdfSxpPWZ1bmN0aW9uKHQpe3JldHVybiB0LnJlcGxhY2UoL15kYXRhOmltYWdlXFwvXFx3KztiYXNlNjQsLyxcIlwiKX0sYT1mdW5jdGlvbih0KXtyZXR1cm5cImRhdGE6XCIrdCtcIjtiYXNlNjQsXCJ9O3QuZGVmYXVsdD17c2l6ZTplLG1pbWU6bixkYXRhOmkscHJlZml4OmF9fSl9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgaSxhLHI7IWZ1bmN0aW9uKG4sbyl7YT1bZV0saT1vLHI9XCJmdW5jdGlvblwiPT10eXBlb2YgaT9pLmFwcGx5KGUsYSk6aSwhKHZvaWQgMCE9PXImJih0LmV4cG9ydHM9cikpfSh0aGlzLGZ1bmN0aW9uKHQpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBlPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06XCJpbWFnZS9qcGVnXCIsbj13aW5kb3cuYXRvYih0KSxpPVtdLGE9MDthPG4ubGVuZ3RoO2ErKylpW2FdPW4uY2hhckNvZGVBdChhKTtyZXR1cm4gbmV3IHdpbmRvdy5CbG9iKFtuZXcgVWludDhBcnJheShpKV0se3R5cGU6ZX0pfSxuPWZ1bmN0aW9uKHQsZSxuKXt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLGE9aS5nZXRDb250ZXh0KFwiMmRcIik7cmV0dXJuIGkud2lkdGg9dCxpLmhlaWdodD1lLGZ1bmN0aW9uKHIpe2lmKCFufHxuPjgpcmV0dXJuIGEuZHJhd0ltYWdlKHIsMCwwLGkud2lkdGgsaS5oZWlnaHQpLGk7c3dpdGNoKG4+NCYmKGkud2lkdGg9ZSxpLmhlaWdodD10KSxuKXtjYXNlIDI6YS50cmFuc2xhdGUodCwwKSxhLnNjYWxlKC0xLDEpO2JyZWFrO2Nhc2UgMzphLnRyYW5zbGF0ZSh0LGUpLGEucm90YXRlKE1hdGguUEkpO2JyZWFrO2Nhc2UgNDphLnRyYW5zbGF0ZSgwLGUpLGEuc2NhbGUoMSwtMSk7YnJlYWs7Y2FzZSA1OmEucm90YXRlKC41Kk1hdGguUEkpLGEuc2NhbGUoMSwtMSk7YnJlYWs7Y2FzZSA2OmEucm90YXRlKC41Kk1hdGguUEkpLGEudHJhbnNsYXRlKDAsLWUpO2JyZWFrO2Nhc2UgNzphLnJvdGF0ZSguNSpNYXRoLlBJKSxhLnRyYW5zbGF0ZSh0LC1lKSxhLnNjYWxlKC0xLDEpO2JyZWFrO2Nhc2UgODphLnJvdGF0ZSgtLjUqTWF0aC5QSSksYS50cmFuc2xhdGUoLXQsMCl9cmV0dXJuIG4+ND9hLmRyYXdJbWFnZShyLDAsMCxpLmhlaWdodCxpLndpZHRoKTphLmRyYXdJbWFnZShyLDAsMCxpLndpZHRoLGkuaGVpZ2h0KSxpfX0saT1mdW5jdGlvbih0KXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06Ljc1LG49dC50b0RhdGFVUkwoXCJpbWFnZS9qcGVnXCIsZSk7cmV0dXJuIG59LGE9ZnVuY3Rpb24odCl7cmV0dXJue0tCOnQvMWUzLE1COnQvMWU2fX07dC5kZWZhdWx0PXtiYXNlNjRUb0ZpbGU6ZSxpbWFnZVRvQ2FudmFzOm4sY2FudmFzVG9CYXNlNjQ6aSxzaXplOmF9fSl9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgaSxhLHI7IWZ1bmN0aW9uKG4sbyl7YT1bZV0saT1vLHI9XCJmdW5jdGlvblwiPT10eXBlb2YgaT9pLmFwcGx5KGUsYSk6aSwhKHZvaWQgMCE9PXImJih0LmV4cG9ydHM9cikpfSh0aGlzLGZ1bmN0aW9uKHQpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBlPWZ1bmN0aW9uKHQpe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihlLG4pe3ZhciBpPW5ldyB3aW5kb3cuRmlsZVJlYWRlcjtpLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsZnVuY3Rpb24odCl7ZSh0LnRhcmdldC5yZXN1bHQpfSwhMSksaS5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixmdW5jdGlvbih0KXtuKHQpfSwhMSksaS5yZWFkQXNEYXRhVVJMKHQpfSl9O3QuZGVmYXVsdD17bG9hZDplfX0pfSxmdW5jdGlvbih0LGUsbil7dmFyIGksYSxyOyFmdW5jdGlvbihuLG8pe2E9W2VdLGk9byxyPVwiZnVuY3Rpb25cIj09dHlwZW9mIGk/aS5hcHBseShlLGEpOmksISh2b2lkIDAhPT1yJiYodC5leHBvcnRzPXIpKX0odGhpcyxmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgZT1mdW5jdGlvbih0KXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oZSxuKXt2YXIgaT1uZXcgd2luZG93LkltYWdlO2kuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixmdW5jdGlvbigpe2UoaSl9LCExKSxpLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLGZ1bmN0aW9uKHQpe24odCl9LCExKSxpLnNyYz10fSl9LG49ZnVuY3Rpb24odCxlKXtyZXR1cm4gZnVuY3Rpb24obixpKXtpZighdCYmIWUpcmV0dXJue3dpZHRoOm4saGVpZ2h0Oml9O3ZhciBhPW4vaSxyPXQvZSxvPXZvaWQgMCx1PXZvaWQgMDtyZXR1cm4gYT5yPyhvPU1hdGgubWluKG4sdCksdT1vL2EpOih1PU1hdGgubWluKGksZSksbz11KmEpLHt3aWR0aDpvLGhlaWdodDp1fX19O3QuZGVmYXVsdD17bG9hZDplLHJlc2l6ZTpufX0pfSxmdW5jdGlvbih0LGUsbil7dmFyIGksYSxyOyFmdW5jdGlvbihuLG8pe2E9W2VdLGk9byxyPVwiZnVuY3Rpb25cIj09dHlwZW9mIGk/aS5hcHBseShlLGEpOmksISh2b2lkIDAhPT1yJiYodC5leHBvcnRzPXIpKX0odGhpcyxmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKHQsZSl7aWYoISh0IGluc3RhbmNlb2YgZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1mdW5jdGlvbiB0KG4pe3ZhciBpPW4ucXVhbGl0eSxhPXZvaWQgMD09PWk/Ljc1Omkscj1uLnNpemUsbz12b2lkIDA9PT1yPzI6cix1PW4ubWF4V2lkdGgscz12b2lkIDA9PT11PzE5MjA6dSxmPW4ubWF4SGVpZ2h0LGQ9dm9pZCAwPT09Zj8xOTIwOmYsbD1uLnJlc2l6ZSxjPXZvaWQgMD09PWx8fGw7ZSh0aGlzLHQpLHRoaXMuc3RhcnQ9d2luZG93LnBlcmZvcm1hbmNlLm5vdygpLHRoaXMuZW5kPW51bGwsdGhpcy5hbHQ9bnVsbCx0aGlzLmV4dD1udWxsLHRoaXMuc3RhcnRTaXplPW51bGwsdGhpcy5zdGFydFdpZHRoPW51bGwsdGhpcy5zdGFydEhlaWdodD1udWxsLHRoaXMuc2l6ZT0xZTMqbyoxZTMsdGhpcy5lbmRTaXplPW51bGwsdGhpcy5lbmRXaWR0aD1udWxsLHRoaXMuZW5kSGVpZ2h0PW51bGwsdGhpcy5pdGVyYXRpb25zPTAsdGhpcy5iYXNlNjRwcmVmaXg9bnVsbCx0aGlzLnF1YWxpdHk9YSx0aGlzLnJlc2l6ZT1jLHRoaXMubWF4V2lkdGg9cyx0aGlzLm1heEhlaWdodD1kLHRoaXMub3JpZW50YXRpb249MX07dC5kZWZhdWx0PW59KX0sZnVuY3Rpb24odCxlLG4pe3ZhciBpLGEscjshZnVuY3Rpb24obixvKXthPVtlXSxpPW8scj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBpP2kuYXBwbHkoZSxhKTppLCEodm9pZCAwIT09ciYmKHQuZXhwb3J0cz1yKSl9KHRoaXMsZnVuY3Rpb24odCl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGU9ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGUsbil7dmFyIGk9bmV3IHdpbmRvdy5GaWxlUmVhZGVyO2kub25sb2FkPWZ1bmN0aW9uKHQpe3ZhciBuPW5ldyBEYXRhVmlldyh0LnRhcmdldC5yZXN1bHQpOzY1NDk2IT09bi5nZXRVaW50MTYoMCwhMSkmJmUoLTIpO2Zvcih2YXIgaT1uLmJ5dGVMZW5ndGgsYT0yO2E8aTspe3ZhciByPW4uZ2V0VWludDE2KGEsITEpO2lmKGErPTIsNjU1MDU9PT1yKXsxMTY1NTE5MjA2IT09bi5nZXRVaW50MzIoYSs9MiwhMSkmJmUoLTEpO3ZhciBvPTE4NzYxPT09bi5nZXRVaW50MTYoYSs9NiwhMSk7YSs9bi5nZXRVaW50MzIoYSs0LG8pO3ZhciB1PW4uZ2V0VWludDE2KGEsbyk7YSs9Mjtmb3IodmFyIHM9MDtzPHU7cysrKTI3ND09PW4uZ2V0VWludDE2KGErMTIqcyxvKSYmZShuLmdldFVpbnQxNihhKzEyKnMrOCxvKSl9ZWxzZXtpZig2NTI4MCE9PSg2NTI4MCZyKSlicmVhazthKz1uLmdldFVpbnQxNihhLCExKX19ZSgtMSl9LGkucmVhZEFzQXJyYXlCdWZmZXIodC5zbGljZSgwLDY1NTM2KSl9KX07dC5kZWZhdWx0PXtvcmllbnRhdGlvbjplfX0pfV0pfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9