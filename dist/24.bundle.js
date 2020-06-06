(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./dev/js/components/commons/commonSearch/CommonSearch.js":
/*!****************************************************************!*\
  !*** ./dev/js/components/commons/commonSearch/CommonSearch.js ***!
  \****************************************************************/
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

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _initialsPicture = __webpack_require__(/*! ../initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

var _mapHelpers = __webpack_require__(/*! ../../../helpers/mapHelpers.js */ "./dev/js/helpers/mapHelpers.js");

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

var CommonSearch = function (_React$Component) {
    _inherits(CommonSearch, _React$Component);

    function CommonSearch(props) {
        _classCallCheck(this, CommonSearch);

        var _this2 = _possibleConstructorReturn(this, (CommonSearch.__proto__ || Object.getPrototypeOf(CommonSearch)).call(this, props));

        _this2.state = {
            searchResults: [],
            searchValue: '',
            loading: ''
        };
        return _this2;
    }

    _createClass(CommonSearch, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            if (this.props.hospital_id_search) {
                var data = {
                    'Category': 'ConsumerApp', 'Action': 'IpdHospitalSearch', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-hospital-search', 'searched': '', 'searchString': this.state.searchValue, hospital_id: this.props.hospital_id_search, 'page': this.props.hospital_id_search ? 'hospitalSearch' : ''
                };

                _gtm2.default.sendEvent({ data: data });
            }
            this.getSearchResults = debouncer(this.getSearchResults.bind(this), 200);
        }
    }, {
        key: 'inputHandler',
        value: function inputHandler(e) {
            this.setState({ searchValue: e.target.value });
            var searchString = e.target.value.trim();
            if (searchString.length) {
                this.getSearchResults();
            } else {
                this.setState({ searchResults: [] });
            }
        }
    }, {
        key: 'focusOut',
        value: function focusOut() {
            var data = {
                'Category': 'ConsumerApp', 'Action': 'searchInputFocusOut', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'search-string-on-blur', 'searched': '', 'searchString': this.state.searchValue, 'type': '', 'from': 'article', 'page': this.props.hospital_id_search ? 'hospitalSearch' : ''
            };
            _gtm2.default.sendEvent({ data: data });
        }
    }, {
        key: 'getSearchResults',
        value: function getSearchResults() {
            var _this3 = this;

            this.setState({ loading: true });
            var lat = 28.644800;
            var long = 77.216721;
            var place_id = "";

            if (this.props.OPD_STATE && this.props.OPD_STATE.selectedLocation) {
                place_id = this.props.OPD_STATE.selectedLocation.place_id || "";
                lat = this.props.OPD_STATE.selectedLocation.geometry.location.lat;
                long = this.props.OPD_STATE.selectedLocation.geometry.location.lng;
                if (typeof lat === 'function') lat = lat();
                if (typeof long === 'function') long = long();

                lat = parseFloat(parseFloat(lat).toFixed(6));
                long = parseFloat(parseFloat(long).toFixed(6));
            }

            var location = { lat: lat, long: long };
            var searchType = '';
            var extraSearchParams = {};
            if (this.props.hospital_id_search) {
                extraSearchParams.hospital_id = this.props.hospital_id_search;
                searchType = 'opd';
                location.lat = this.props.hospital_lat || location.lat;
                location.long = this.props.hospital_long || location.long;
            }

            this.props.getElasticCriteriaResults(this.state.searchValue.trim(), searchType, location, extraSearchParams).then(function (filterSearchResults) {

                if (filterSearchResults && filterSearchResults.suggestion) {

                    var filterResultsName = filterSearchResults.suggestion.map(function (x) {
                        return x.name;
                    }).join(',') || '';
                    var gtmData = {
                        'Category': 'ConsumerApp', 'Action': 'searchquery', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'search-query', 'searchString': _this3.state.searchValue,
                        'searchType': '', 'results': filterResultsName, 'from': 'article', 'page': _this3.props.hospital_id_search ? 'hospitalSearch' : ''
                    };
                    _gtm2.default.sendEvent({ data: gtmData });
                    var filterData = filterSearchResults.suggestion;

                    _this3.setState({ searchResults: filterData, loading: false, type: '' });
                }
            });
        }
    }, {
        key: 'addCriteria',
        value: function addCriteria(criteria) {
            var _this4 = this;

            var LAB_TYPES = ['lab_test_synonym', 'lab_test', 'lab'];

            var OPD_TYPES = ['visit_reason', 'practice_specialization', 'doctor', 'hospital', 'practice_specialization_synonym'];

            var PROCEDURE_TYPES = ['procedure_category', 'procedure'];

            var IPD_TYPES = ['ipd'];

            if (this.props.latitude && this.props.longitude) {
                (0, _mapHelpers._getlocationFromLatLong)(this.props.latitude, this.props.longitude, 'city', function (locationData) {
                    if (locationData) {
                        _this4.props.selectLocation(locationData, 'geoip', true);
                    }
                });
            }

            criteria = Object.assign({}, criteria);

            if (criteria.type) {

                var type = '';

                var action = '',
                    event = '';

                if (criteria.type.includes('visit_reason')) {
                    type = 'opd';

                    var data = {
                        'Category': 'ConsumerApp', 'Action': 'VisitReasonSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'visit-reason-searched', 'SelectedId': criteria.id || '', 'searched': 'autosuggest', 'searchString': this.state.searchValue, 'page': this.props.hospital_id_search ? 'hospitalSearch' : ''
                    };
                    _gtm2.default.sendEvent({ data: data });

                    criteria.id = criteria.action.value.join(',');
                    criteria.type = 'speciality';
                } else if (criteria.action.param.includes('hospital_name')) {
                    type = 'opd';
                    var _data = {
                        'Category': 'ConsumerApp', 'Action': 'HospitalNameSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'hospital-name-searched', 'hospitalId': criteria.action.id || '', 'searched': 'autosuggest', 'searchString': this.state.searchValue || '', 'page': this.props.hospital_id_search ? 'hospitalSearch' : ''
                    };
                    _gtm2.default.sendEvent({ data: _data });

                    this.searchProceedOPD("", "", criteria.action.id);
                    return;
                } else if (criteria.action.param.includes('procedure_category_ids')) {
                    type = 'opd';
                    criteria.id = criteria.action.value[0];
                    criteria.type = 'procedures_category';
                } else if (criteria.action.param.includes('procedure_ids')) {
                    type = 'opd';
                    var _data2 = {
                        'Category': 'ConsumerApp', 'Action': 'CommonProceduresSelected', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'common-procedures-selected', 'selected': criteria.name || '', 'selectedId': criteria.action.value ? criteria.action.value[0] : '', 'searched': 'autosuggest', 'searchString': this.state.searchValue, 'page': this.props.hospital_id_search ? 'hospitalSearch' : ''
                    };
                    _gtm2.default.sendEvent({ data: _data2 });

                    criteria.id = criteria.action.value[0];
                    criteria.type = 'procedures';
                } else if (criteria.action.param.includes('specializations')) {
                    type = 'opd';
                    var _data3 = {
                        'Category': 'ConsumerApp', 'Action': 'CommonSpecializationsSelected', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'common-specializations-selected', 'selected': criteria.name || '', 'selectedId': criteria.action.value ? criteria.action.value[0] : '', 'searched': 'autosuggest', 'searchString': this.state.searchValue, 'page': this.props.hospital_id_search ? 'hospitalSearch' : ''
                    };
                    _gtm2.default.sendEvent({ data: _data3 });

                    criteria.id = criteria.action.value[0];
                    criteria.type = 'speciality';
                } else if (criteria.action.param.includes('doctor_name')) {
                    type = 'opd';

                    var _data4 = {
                        'Category': 'ConsumerApp', 'Action': 'DoctorNameSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-name-searched', 'selectedId': criteria.action.value[0] || '', 'searched': 'autosuggest', 'searchString': this.state.searchValue || '', 'page': this.props.hospital_id_search ? 'hospitalSearch' : ''
                    };
                    _gtm2.default.sendEvent({ data: _data4 });

                    this.props.history.push('/opd/doctor/' + criteria.action.value[0] + '?hide_search_data=true');

                    return;
                } else if (criteria.type == "lab") {
                    this.props.clearExtraTests();
                    var _data5 = {
                        'Category': 'ConsumerApp', 'Action': 'LabNameSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lab-name-searched', 'selectedId': criteria.action.value[0] || '', 'searched': 'autosuggest', 'searchString': this.state.searchValue || '', 'page': this.props.hospital_id_search ? 'hospitalSearch' : ''
                    };
                    _gtm2.default.sendEvent({ data: _data5 });

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

                    this.props.toggleDiagnosisCriteria('test', criteria, true);
                    setTimeout(function () {
                        _this4.searchProceedLAB("", false);
                    }, 100);
                } else if (criteria.type.includes('ipd')) {
                    var _data6 = {
                        'Category': 'ConsumerApp', 'Action': 'IPDNameSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-name-searched', 'selectedId': criteria.action.value[0] || '', 'searched': 'autosuggest', 'searchString': this.state.searchValue || '', 'page': this.props.hospital_id_search ? 'hospitalSearch' : ''
                    };
                    _gtm2.default.sendEvent({ data: _data6 });
                    var ipdData = Object.assign({}, criteria);
                    ipdData.id = criteria.action.value[0];
                    ipdData.type = 'ipd';
                    this.props.toggleIPDCriteria(ipdData, true);

                    setTimeout(function () {
                        _this4.props.history.push('/ipdInfo?ipd_id=' + ipdData.id);
                    }, 100);
                }

                if (type == 'opd') {
                    this.props.cloneCommonSelectedCriterias(criteria);
                    this.setState({ searchValue: "" });
                    this.searchProceedOPD('', '', this.props.hospital_id_search || '');
                }
            }
        }
    }, {
        key: 'searchProceedOPD',
        value: function searchProceedOPD() {
            var doctor_name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var hospital_name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            var hospital_id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

            // handle doctor name, hospital name
            var state = {
                filterCriteria: _extends({}, this.props.OPD_STATE.filterCriteria, {
                    doctor_name: doctor_name, hospital_name: hospital_name, hospital_id: hospital_id
                }),
                nextFilterCriteria: _extends({}, this.props.OPD_STATE.filterCriteria, {
                    doctor_name: doctor_name, hospital_name: hospital_name, hospital_id: hospital_id
                })
            };

            if (doctor_name || hospital_name || hospital_id) {
                state.selectedCriterias = [];
                state.commonSelectedCriterias = [];
            }

            this.props.mergeOPDState(state, true);

            this.props.history.push('/opd/searchresults');
        }
    }, {
        key: 'searchProceedLAB',
        value: function searchProceedLAB() {
            var lab_name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var show_all_labs = arguments[1];

            // handle doctor name, hospital name
            this.props.mergeLABState({
                filterCriteria: _extends({}, this.props.LAB_STATE.filterCriteria, {
                    lab_name: lab_name
                }),
                nextFilterCriteria: _extends({}, this.props.LAB_STATE.filterCriteria, {
                    lab_name: lab_name
                }),
                currentSearchedCriterias: show_all_labs ? [] : this.props.LAB_STATE.selectedCriterias,
                nextSelectedCriterias: show_all_labs ? [] : this.props.LAB_STATE.selectedCriterias
            }, true);

            var selectedTestIds = this.props.LAB_STATE.selectedCriterias.map(function (test) {
                return test.id;
            });
            var selectedTestsName = this.props.LAB_STATE.selectedCriterias.map(function (test) {
                return test.name;
            });
            var data = {
                'Category': 'ConsumerApp', 'Action': 'ShowLabClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'show-lab-clicked', 'SelectedTestIds': selectedTestIds.join(',') || '', 'SelectedTestName': selectedTestsName.join(','), 'TestCount': selectedTestIds.length || 0
            };
            _gtm2.default.sendEvent({ data: data });

            this.props.history.push('/lab/searchresults');
        }
    }, {
        key: 'onFocusIn',
        value: function onFocusIn() {
            if (this.props.getInputFocus) {
                this.props.getInputFocus();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'articleSearchWidget' },
                    _react2.default.createElement(
                        'div',
                        { className: 'articleInputContainer' },
                        _react2.default.createElement('input', { className: 'artc-inp', type: 'text', onChange: this.inputHandler.bind(this), value: this.state.searchValue, placeholder: this.props.hospital_id_search ? 'Search for Doctor, Speciality within Hospital' : "Search Doctors & Tests", onBlur: function onBlur() {
                                return _this5.focusOut();
                            }, onFocus: this.onFocusIn.bind(this) }),
                        _react2.default.createElement('img', { className: 'artc-img', src: "/assets" + "/images/vall.png" }),
                        this.props.commonSearch ? '' : _react2.default.createElement(
                            'button',
                            { className: 'artc-btn artc-disable' },
                            _react2.default.createElement('img', { src: "/assets" + "/img/new-loc-ico.svg" }),
                            this.props.location
                        )
                    )
                ),
                _react2.default.createElement(
                    'section',
                    null,
                    this.state.searchResults.length || this.state.searchValue ? _react2.default.createElement(
                        'div',
                        { className: 'widget searchMargin' },
                        _react2.default.createElement(
                            'div',
                            { className: 'common-search-container' },
                            _react2.default.createElement(
                                'p',
                                { className: 'srch-heading' },
                                'Search Results'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'common-listing-cont' },
                                _react2.default.createElement(
                                    'ul',
                                    null,
                                    this.state.searchResults.map(function (cat, j) {
                                        return _react2.default.createElement(
                                            'li',
                                            { key: j, onClick: _this5.addCriteria.bind(_this5, cat) },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'serach-rslt-with-img' },
                                                cat.type && cat.type.includes('doctor') ? _react2.default.createElement(
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
                                                    cat.type && cat.type.includes('ipd') ? _react2.default.createElement(
                                                        'span',
                                                        { className: 'search-span-sub' },
                                                        'IPD Procedures'
                                                    ) : cat.is_package && cat.is_package.length && cat.is_package[0] ? _react2.default.createElement(
                                                        'span',
                                                        { className: 'search-span-sub' },
                                                        'Health Package ',
                                                        cat.number_of_tests && cat.number_of_tests.length && cat.number_of_tests[0] ? ' | ' + cat.number_of_tests[0] + ' Test Included' : ''
                                                    ) : cat.type && cat.type.includes("hospital") ? _react2.default.createElement(
                                                        'span',
                                                        { className: 'search-span-sub' },
                                                        cat.locality && Array.isArray(cat.locality) ? cat.locality.join(', ') : cat.visible_name
                                                    ) : _react2.default.createElement(
                                                        'span',
                                                        { className: 'search-span-sub' },
                                                        cat.type && cat.type.includes('doctor') && cat.primary_name && Array.isArray(cat.primary_name) ? cat.primary_name.slice(0, 2).join(', ') : cat.visible_name
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
                                    this.state.searchValue.length > 2 ? _react2.default.createElement(
                                        'li',
                                        { onClick: function onClick() {

                                                var data = {
                                                    'Category': 'ConsumerApp', 'Action': 'DoctorNameSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-name-searched', 'selectedId': '', 'searched': '', 'searchString': _this5.state.searchValue || '', 'page': _this5.props.hospital_id_search ? 'hospitalSearch' : ''
                                                };
                                                _gtm2.default.sendEvent({ data: data });

                                                _this5.searchProceedOPD(_this5.state.searchValue, "", _this5.props.hospital_id_search || '');
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
                                    ) : '',
                                    this.state.searchValue.length > 2 && !this.props.hospital_id_search ? _react2.default.createElement(
                                        'li',
                                        { onClick: function onClick() {

                                                var data = {
                                                    'Category': 'ConsumerApp', 'Action': 'LabNameSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lab-name-searched', 'selectedId': '', 'searched': '', 'searchString': _this5.state.searchValue || '', 'page': _this5.props.hospital_id_search ? 'hospitalSearch' : ''
                                                };
                                                _gtm2.default.sendEvent({ data: data });

                                                _this5.searchProceedLAB(_this5.state.searchValue);
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
                                    ) : '',
                                    this.state.searchValue.length > 2 ? _react2.default.createElement(
                                        'li',
                                        { onClick: function onClick() {

                                                var data = {
                                                    'Category': 'ConsumerApp', 'Action': 'HospitalNameSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'hospital-name-searched', 'hospitalId': '', 'searched': '', 'searchString': _this5.state.searchValue || '', 'page': _this5.props.hospital_id_search ? 'hospitalSearch' : ''
                                                };
                                                _gtm2.default.sendEvent({ data: data });

                                                _this5.searchProceedOPD("", _this5.state.searchValue, _this5.props.hospital_id_search || '');
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
                )
            );
        }
    }]);

    return CommonSearch;
}(_react2.default.Component);

exports.default = CommonSearch;

/***/ }),

/***/ "./dev/js/components/commons/commonSearch/index.js":
/*!*********************************************************!*\
  !*** ./dev/js/components/commons/commonSearch/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CommonSearch = __webpack_require__(/*! ./CommonSearch.js */ "./dev/js/components/commons/commonSearch/CommonSearch.js");

var _CommonSearch2 = _interopRequireDefault(_CommonSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _CommonSearch2.default;

/***/ }),

/***/ "./dev/js/containers/commons/CommonSearch.js":
/*!***************************************************!*\
  !*** ./dev/js/containers/commons/CommonSearch.js ***!
  \***************************************************/
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

var _commonSearch = __webpack_require__(/*! ../../components/commons/commonSearch */ "./dev/js/components/commons/commonSearch/index.js");

var _commonSearch2 = _interopRequireDefault(_commonSearch);

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonSearch = function (_React$Component) {
	_inherits(CommonSearch, _React$Component);

	function CommonSearch() {
		_classCallCheck(this, CommonSearch);

		return _possibleConstructorReturn(this, (CommonSearch.__proto__ || Object.getPrototypeOf(CommonSearch)).apply(this, arguments));
	}

	_createClass(CommonSearch, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			setTimeout(function () {
				//	this.props.setFetchResults(true)
			}, 1000);
		}
	}, {
		key: 'render',
		value: function render() {

			return _react2.default.createElement(_commonSearch2.default, this.props);
		}
	}]);

	return CommonSearch;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {

	var OPD_STATE = function () {
		var _state$SEARCH_CRITERI = state.SEARCH_CRITERIA_OPD,
		    selectedLocation = _state$SEARCH_CRITERI.selectedLocation,
		    filterCriteria = _state$SEARCH_CRITERI.filterCriteria;


		return {
			selectedLocation: selectedLocation,
			filterCriteria: filterCriteria
		};
	}();

	var LAB_STATE = function () {
		var _state$SEARCH_CRITERI2 = state.SEARCH_CRITERIA_LABS,
		    selectedLocation = _state$SEARCH_CRITERI2.selectedLocation,
		    filterCriteria = _state$SEARCH_CRITERI2.filterCriteria,
		    selectedCriterias = _state$SEARCH_CRITERI2.selectedCriterias;


		return {
			selectedLocation: selectedLocation,
			filterCriteria: filterCriteria,
			selectedCriterias: selectedCriterias
		};
	}();

	var IPD_STATE = function () {
		var selectedCriterias = state.SEARCH_CRITERIA_IPD.selectedCriterias;


		return {
			selectedCriterias: selectedCriterias
		};
	}();

	return {
		OPD_STATE: OPD_STATE, LAB_STATE: LAB_STATE, IPD_STATE: IPD_STATE
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {

	return {
		getElasticCriteriaResults: function getElasticCriteriaResults(searchString, type, location, extraSearchParams) {
			return dispatch((0, _index.getElasticCriteriaResults)(searchString, type, location, extraSearchParams));
		},
		cloneCommonSelectedCriterias: function cloneCommonSelectedCriterias(selectedCriterias) {
			return dispatch((0, _index.cloneCommonSelectedCriterias)(selectedCriterias));
		},
		mergeOPDState: function mergeOPDState(state, fetchNewResults) {
			return dispatch((0, _index.mergeOPDState)(state, fetchNewResults));
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
		toggleDiagnosisCriteria: function toggleDiagnosisCriteria(type, criteria, forceAdd) {
			return dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria, forceAdd));
		},
		toggleIPDCriteria: function toggleIPDCriteria(criteria, forceAdd) {
			return dispatch((0, _index.toggleIPDCriteria)(criteria, forceAdd));
		},
		selectLocation: function selectLocation(location, type, fetchNewResults) {
			return dispatch((0, _index.selectLocation)(location, type, fetchNewResults));
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CommonSearch);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2NvbW1vblNlYXJjaC9Db21tb25TZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9jb21tb25TZWFyY2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvY29tbW9ucy9Db21tb25TZWFyY2guanMiXSwibmFtZXMiOlsiZGVib3VuY2VyIiwiZm4iLCJkZWxheSIsInRpbWVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImNhbGwiLCJDb21tb25TZWFyY2giLCJwcm9wcyIsInN0YXRlIiwic2VhcmNoUmVzdWx0cyIsInNlYXJjaFZhbHVlIiwibG9hZGluZyIsImhvc3BpdGFsX2lkX3NlYXJjaCIsImRhdGEiLCJHVE0iLCJnZXRVc2VySWQiLCJob3NwaXRhbF9pZCIsInNlbmRFdmVudCIsImdldFNlYXJjaFJlc3VsdHMiLCJiaW5kIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJzZWFyY2hTdHJpbmciLCJ0cmltIiwibGVuZ3RoIiwibGF0IiwibG9uZyIsInBsYWNlX2lkIiwiT1BEX1NUQVRFIiwic2VsZWN0ZWRMb2NhdGlvbiIsImdlb21ldHJ5IiwibG9jYXRpb24iLCJsbmciLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsInNlYXJjaFR5cGUiLCJleHRyYVNlYXJjaFBhcmFtcyIsImhvc3BpdGFsX2xhdCIsImhvc3BpdGFsX2xvbmciLCJnZXRFbGFzdGljQ3JpdGVyaWFSZXN1bHRzIiwidGhlbiIsImZpbHRlclNlYXJjaFJlc3VsdHMiLCJzdWdnZXN0aW9uIiwiZmlsdGVyUmVzdWx0c05hbWUiLCJtYXAiLCJ4IiwibmFtZSIsImpvaW4iLCJndG1EYXRhIiwiZmlsdGVyRGF0YSIsInR5cGUiLCJjcml0ZXJpYSIsIkxBQl9UWVBFUyIsIk9QRF9UWVBFUyIsIlBST0NFRFVSRV9UWVBFUyIsIklQRF9UWVBFUyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwibG9jYXRpb25EYXRhIiwic2VsZWN0TG9jYXRpb24iLCJPYmplY3QiLCJhc3NpZ24iLCJhY3Rpb24iLCJldmVudCIsImluY2x1ZGVzIiwiaWQiLCJwYXJhbSIsInNlYXJjaFByb2NlZWRPUEQiLCJoaXN0b3J5IiwicHVzaCIsImNsZWFyRXh0cmFUZXN0cyIsInVybCIsInRlc3RfdHlwZSIsInRvZ2dsZURpYWdub3Npc0NyaXRlcmlhIiwic2VhcmNoUHJvY2VlZExBQiIsImlwZERhdGEiLCJ0b2dnbGVJUERDcml0ZXJpYSIsImNsb25lQ29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMiLCJkb2N0b3JfbmFtZSIsImhvc3BpdGFsX25hbWUiLCJmaWx0ZXJDcml0ZXJpYSIsIm5leHRGaWx0ZXJDcml0ZXJpYSIsInNlbGVjdGVkQ3JpdGVyaWFzIiwiY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMiLCJtZXJnZU9QRFN0YXRlIiwibGFiX25hbWUiLCJzaG93X2FsbF9sYWJzIiwibWVyZ2VMQUJTdGF0ZSIsIkxBQl9TVEFURSIsImN1cnJlbnRTZWFyY2hlZENyaXRlcmlhcyIsIm5leHRTZWxlY3RlZENyaXRlcmlhcyIsInNlbGVjdGVkVGVzdElkcyIsInRlc3QiLCJzZWxlY3RlZFRlc3RzTmFtZSIsImdldElucHV0Rm9jdXMiLCJpbnB1dEhhbmRsZXIiLCJmb2N1c091dCIsIm9uRm9jdXNJbiIsIkFTU0VUU19CQVNFX1VSTCIsImNvbW1vblNlYXJjaCIsImNhdCIsImoiLCJhZGRDcml0ZXJpYSIsImltYWdlX3BhdGgiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsIm1hcmdpbiIsInBhZGRpbmciLCJpc19wYWNrYWdlIiwibnVtYmVyX29mX3Rlc3RzIiwibG9jYWxpdHkiLCJBcnJheSIsImlzQXJyYXkiLCJ2aXNpYmxlX25hbWUiLCJwcmltYXJ5X25hbWUiLCJzbGljZSIsInBvcHVsYXJpdHkiLCJSZWFjdCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsIlNFQVJDSF9DUklURVJJQV9PUEQiLCJTRUFSQ0hfQ1JJVEVSSUFfTEFCUyIsIklQRF9TVEFURSIsIlNFQVJDSF9DUklURVJJQV9JUEQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImZldGNoTmV3UmVzdWx0cyIsImNsZWFyQWxsVGVzdHMiLCJmb3JjZUFkZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVksU0FBWkEsU0FBWSxDQUFDQyxFQUFELEVBQUtDLEtBQUwsRUFBZTtBQUM3QixRQUFJQyxRQUFRLElBQVo7QUFDQSxXQUFPLFlBQVk7QUFBQTs7QUFDZkMscUJBQWFELEtBQWI7QUFDQUEsZ0JBQVFFLFdBQVcsWUFBTTtBQUNyQkosZUFBR0ssSUFBSCxDQUFRLEtBQVI7QUFDSCxTQUZPLEVBRUxKLEtBRkssQ0FBUjtBQUdILEtBTEQ7QUFNSCxDQVJEOztJQVVNSyxZOzs7QUFFTCwwQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLGlJQUNYQSxLQURXOztBQUVqQixlQUFLQyxLQUFMLEdBQWE7QUFDWkMsMkJBQWUsRUFESDtBQUVaQyx5QkFBYSxFQUZEO0FBR1pDLHFCQUFTO0FBSEcsU0FBYjtBQUZpQjtBQU9qQjs7Ozs0Q0FFa0I7O0FBRVosZ0JBQUcsS0FBS0osS0FBTCxDQUFXSyxrQkFBZCxFQUFrQztBQUM5QixvQkFBSUMsT0FBTztBQUNQLGdDQUFZLGFBREwsRUFDb0IsVUFBVSxtQkFEOUIsRUFDbUQsY0FBY0MsY0FBSUMsU0FBSixNQUFtQixFQURwRixFQUN3RixVQUFVLENBRGxHLEVBQ3FHLFNBQVMscUJBRDlHLEVBQ3FJLFlBQVksRUFEakosRUFDcUosZ0JBQWdCLEtBQUtQLEtBQUwsQ0FBV0UsV0FEaEwsRUFDNkxNLGFBQWEsS0FBS1QsS0FBTCxDQUFXSyxrQkFEck4sRUFDeU8sUUFBTyxLQUFLTCxLQUFMLENBQVdLLGtCQUFYLEdBQThCLGdCQUE5QixHQUEr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OEUsUUFBeEMsQ0FBVCxDQUE5QjtBQUFBLEdBUHpCO0FBUUFyRCxxQkFBbUIsMkJBQUN6QixRQUFELEVBQVc4RSxRQUFYO0FBQUEsVUFBd0JILFNBQVMsOEJBQWtCM0UsUUFBbEIsRUFBNEI4RSxRQUE1QixDQUFULENBQXhCO0FBQUEsR0FSbkI7QUFTQXRFLGtCQUFnQix3QkFBQzVCLFFBQUQsRUFBV21CLElBQVgsRUFBaUI2RSxlQUFqQjtBQUFBLFVBQXFDRCxTQUFTLDJCQUFlL0YsUUFBZixFQUF5Qm1CLElBQXpCLEVBQStCNkUsZUFBL0IsQ0FBVCxDQUFyQztBQUFBO0FBVGhCLEVBQVA7QUFZQSxDQWREOztrQkFnQmUseUJBQVFQLGVBQVIsRUFBeUJLLGtCQUF6QixFQUE2Q3pILFlBQTdDLEMiLCJmaWxlIjoiMjQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcbmltcG9ydCBJbml0aWFsc1BpY3R1cmUgZnJvbSAnLi4vaW5pdGlhbHNQaWN0dXJlJ1xuaW1wb3J0IHsgX2dldGxvY2F0aW9uRnJvbUxhdExvbmcgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL21hcEhlbHBlcnMuanMnXG5cbmNvbnN0IGRlYm91bmNlciA9IChmbiwgZGVsYXkpID0+IHtcbiAgICBsZXQgdGltZXIgPSBudWxsXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZm4uY2FsbCh0aGlzKVxuICAgICAgICB9LCBkZWxheSlcbiAgICB9XG59XG5cbmNsYXNzIENvbW1vblNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzZWFyY2hSZXN1bHRzOiBbXSxcblx0XHRcdHNlYXJjaFZhbHVlOiAnJyxcblx0XHRcdGxvYWRpbmc6ICcnXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblxuICAgICAgICBpZih0aGlzLnByb3BzLmhvc3BpdGFsX2lkX3NlYXJjaCkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdJcGRIb3NwaXRhbFNlYXJjaCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2lwZC1ob3NwaXRhbC1zZWFyY2gnLCAnc2VhcmNoZWQnOiAnJywgJ3NlYXJjaFN0cmluZyc6IHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUsIGhvc3BpdGFsX2lkOiB0aGlzLnByb3BzLmhvc3BpdGFsX2lkX3NlYXJjaCwgJ3BhZ2UnOnRoaXMucHJvcHMuaG9zcGl0YWxfaWRfc2VhcmNoPydob3NwaXRhbFNlYXJjaCc6JydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdldFNlYXJjaFJlc3VsdHMgPSBkZWJvdW5jZXIodGhpcy5nZXRTZWFyY2hSZXN1bHRzLmJpbmQodGhpcyksIDIwMClcblx0fVxuXG5cdGlucHV0SGFuZGxlcihlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hWYWx1ZTogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgbGV0IHNlYXJjaFN0cmluZyA9IGUudGFyZ2V0LnZhbHVlLnRyaW0oKVxuICAgICAgICBpZiAoc2VhcmNoU3RyaW5nLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5nZXRTZWFyY2hSZXN1bHRzKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hSZXN1bHRzOiBbXSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9jdXNPdXQoKSB7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdzZWFyY2hJbnB1dEZvY3VzT3V0JywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnc2VhcmNoLXN0cmluZy1vbi1ibHVyJywgJ3NlYXJjaGVkJzogJycsICdzZWFyY2hTdHJpbmcnOiB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlLCAndHlwZSc6ICcnLCAnZnJvbSc6ICdhcnRpY2xlJywgJ3BhZ2UnOnRoaXMucHJvcHMuaG9zcGl0YWxfaWRfc2VhcmNoPydob3NwaXRhbFNlYXJjaCc6JydcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgIH1cblxuXHRnZXRTZWFyY2hSZXN1bHRzKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxuICAgICAgICBsZXQgbGF0ID0gMjguNjQ0ODAwXG4gICAgICAgIGxldCBsb25nID0gNzcuMjE2NzIxXG4gICAgICAgIGxldCBwbGFjZV9pZCA9IFwiXCJcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5PUERfU1RBVEUgJiYgdGhpcy5wcm9wcy5PUERfU1RBVEUuc2VsZWN0ZWRMb2NhdGlvbikge1xuICAgICAgICAgICAgcGxhY2VfaWQgPSB0aGlzLnByb3BzLk9QRF9TVEFURS5zZWxlY3RlZExvY2F0aW9uLnBsYWNlX2lkIHx8IFwiXCJcbiAgICAgICAgICAgIGxhdCA9IHRoaXMucHJvcHMuT1BEX1NUQVRFLnNlbGVjdGVkTG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubGF0XG4gICAgICAgICAgICBsb25nID0gdGhpcy5wcm9wcy5PUERfU1RBVEUuc2VsZWN0ZWRMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sbmdcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGF0ID09PSAnZnVuY3Rpb24nKSBsYXQgPSBsYXQoKVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsb25nID09PSAnZnVuY3Rpb24nKSBsb25nID0gbG9uZygpXG5cbiAgICAgICAgICAgIGxhdCA9IHBhcnNlRmxvYXQocGFyc2VGbG9hdChsYXQpLnRvRml4ZWQoNikpXG4gICAgICAgICAgICBsb25nID0gcGFyc2VGbG9hdChwYXJzZUZsb2F0KGxvbmcpLnRvRml4ZWQoNikpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbG9jYXRpb24gPSB7IGxhdDogbGF0LCBsb25nOiBsb25nIH1cbiAgICAgICAgbGV0IHNlYXJjaFR5cGUgPSAnJ1xuICAgICAgICBsZXQgZXh0cmFTZWFyY2hQYXJhbXMgPSB7fVxuICAgICAgICBpZih0aGlzLnByb3BzLmhvc3BpdGFsX2lkX3NlYXJjaCkge1xuICAgICAgICAgICAgZXh0cmFTZWFyY2hQYXJhbXMuaG9zcGl0YWxfaWQgPSB0aGlzLnByb3BzLmhvc3BpdGFsX2lkX3NlYXJjaFxuICAgICAgICAgICAgc2VhcmNoVHlwZSA9ICdvcGQnXG4gICAgICAgICAgICBsb2NhdGlvbi5sYXQgPSB0aGlzLnByb3BzLmhvc3BpdGFsX2xhdCB8fCBsb2NhdGlvbi5sYXRcbiAgICAgICAgICAgIGxvY2F0aW9uLmxvbmcgPSB0aGlzLnByb3BzLmhvc3BpdGFsX2xvbmcgfHwgbG9jYXRpb24ubG9uZ1xuICAgICAgICB9XG5cblxuICAgICAgICB0aGlzLnByb3BzLmdldEVsYXN0aWNDcml0ZXJpYVJlc3VsdHModGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZS50cmltKCksc2VhcmNoVHlwZSwgbG9jYXRpb24sIGV4dHJhU2VhcmNoUGFyYW1zKS50aGVuKChmaWx0ZXJTZWFyY2hSZXN1bHRzKT0+IHtcblxuICAgICAgICAgICAgaWYgKGZpbHRlclNlYXJjaFJlc3VsdHMgJiYgZmlsdGVyU2VhcmNoUmVzdWx0cy5zdWdnZXN0aW9uKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgZmlsdGVyUmVzdWx0c05hbWUgPSBmaWx0ZXJTZWFyY2hSZXN1bHRzLnN1Z2dlc3Rpb24ubWFwKHggPT4geC5uYW1lKS5qb2luKCcsJykgfHwgJydcbiAgICAgICAgICAgICAgICBsZXQgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdzZWFyY2hxdWVyeScsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3NlYXJjaC1xdWVyeScsICdzZWFyY2hTdHJpbmcnOiB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAnc2VhcmNoVHlwZSc6ICcnLCAncmVzdWx0cyc6IGZpbHRlclJlc3VsdHNOYW1lLCAnZnJvbSc6J2FydGljbGUnLCAncGFnZSc6dGhpcy5wcm9wcy5ob3NwaXRhbF9pZF9zZWFyY2g/J2hvc3BpdGFsU2VhcmNoJzonJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJEYXRhID0gZmlsdGVyU2VhcmNoUmVzdWx0cy5zdWdnZXN0aW9uXG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoUmVzdWx0czogZmlsdGVyRGF0YSwgbG9hZGluZzogZmFsc2UsIHR5cGU6ICcnIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhZGRDcml0ZXJpYShjcml0ZXJpYSkge1xuXG4gICAgXHRsZXQgTEFCX1RZUEVTID0gWydsYWJfdGVzdF9zeW5vbnltJywgJ2xhYl90ZXN0JywgJ2xhYiddXG5cbiAgICAgICAgbGV0IE9QRF9UWVBFUyA9IFsndmlzaXRfcmVhc29uJywgJ3ByYWN0aWNlX3NwZWNpYWxpemF0aW9uJywgJ2RvY3RvcicsICdob3NwaXRhbCcsICdwcmFjdGljZV9zcGVjaWFsaXphdGlvbl9zeW5vbnltJ11cblxuICAgICAgICBsZXQgUFJPQ0VEVVJFX1RZUEVTID0gWydwcm9jZWR1cmVfY2F0ZWdvcnknLCAncHJvY2VkdXJlJ11cblxuICAgICAgICBsZXQgSVBEX1RZUEVTID0gWydpcGQnXVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxhdGl0dWRlICYmIHRoaXMucHJvcHMubG9uZ2l0dWRlKSB7XG4gICAgICAgICAgICBfZ2V0bG9jYXRpb25Gcm9tTGF0TG9uZyh0aGlzLnByb3BzLmxhdGl0dWRlLCB0aGlzLnByb3BzLmxvbmdpdHVkZSwgJ2NpdHknLCAobG9jYXRpb25EYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdExvY2F0aW9uKGxvY2F0aW9uRGF0YSwgJ2dlb2lwJywgdHJ1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgY3JpdGVyaWEgPSBPYmplY3QuYXNzaWduKHt9LCBjcml0ZXJpYSlcblxuICAgICAgICBpZiAoY3JpdGVyaWEudHlwZSkge1xuXG4gICAgICAgIFx0bGV0IHR5cGUgPSAnJ1xuXG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gJycsIGV2ZW50ID0gJydcblxuICAgICAgICAgICAgaWYgKGNyaXRlcmlhLnR5cGUuaW5jbHVkZXMoJ3Zpc2l0X3JlYXNvbicpKSB7XG4gICAgICAgICAgICBcdHR5cGUgPSAnb3BkJ1xuXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnVmlzaXRSZWFzb25TZWFyY2hlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3Zpc2l0LXJlYXNvbi1zZWFyY2hlZCcsICdTZWxlY3RlZElkJzogY3JpdGVyaWEuaWQgfHwgJycsICdzZWFyY2hlZCc6ICdhdXRvc3VnZ2VzdCcsICdzZWFyY2hTdHJpbmcnOiB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlLCAncGFnZSc6dGhpcy5wcm9wcy5ob3NwaXRhbF9pZF9zZWFyY2g/J2hvc3BpdGFsU2VhcmNoJzonJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgICAgICAgICAgY3JpdGVyaWEuaWQgPSBjcml0ZXJpYS5hY3Rpb24udmFsdWUuam9pbignLCcpXG4gICAgICAgICAgICAgICAgY3JpdGVyaWEudHlwZSA9ICdzcGVjaWFsaXR5J1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsc2UgaWYgKGNyaXRlcmlhLmFjdGlvbi5wYXJhbS5pbmNsdWRlcygnaG9zcGl0YWxfbmFtZScpKSB7XG4gICAgICAgICAgICBcdHR5cGUgPSAnb3BkJ1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0hvc3BpdGFsTmFtZVNlYXJjaGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnaG9zcGl0YWwtbmFtZS1zZWFyY2hlZCcsICdob3NwaXRhbElkJzogY3JpdGVyaWEuYWN0aW9uLmlkIHx8ICcnLCAnc2VhcmNoZWQnOiAnYXV0b3N1Z2dlc3QnLCAnc2VhcmNoU3RyaW5nJzogdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSB8fCAnJywgJ3BhZ2UnOnRoaXMucHJvcHMuaG9zcGl0YWxfaWRfc2VhcmNoPydob3NwaXRhbFNlYXJjaCc6JydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoUHJvY2VlZE9QRChcIlwiLCBcIlwiLCBjcml0ZXJpYS5hY3Rpb24uaWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3JpdGVyaWEuYWN0aW9uLnBhcmFtLmluY2x1ZGVzKCdwcm9jZWR1cmVfY2F0ZWdvcnlfaWRzJykpIHtcbiAgICAgICAgICAgIFx0dHlwZSA9ICdvcGQnXG4gICAgICAgICAgICAgICAgY3JpdGVyaWEuaWQgPSBjcml0ZXJpYS5hY3Rpb24udmFsdWVbMF1cbiAgICAgICAgICAgICAgICBjcml0ZXJpYS50eXBlID0gJ3Byb2NlZHVyZXNfY2F0ZWdvcnknXG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3JpdGVyaWEuYWN0aW9uLnBhcmFtLmluY2x1ZGVzKCdwcm9jZWR1cmVfaWRzJykpIHtcbiAgICAgICAgICAgIFx0dHlwZSA9ICdvcGQnXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQ29tbW9uUHJvY2VkdXJlc1NlbGVjdGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY29tbW9uLXByb2NlZHVyZXMtc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnOiBjcml0ZXJpYS5uYW1lIHx8ICcnLCAnc2VsZWN0ZWRJZCc6IGNyaXRlcmlhLmFjdGlvbi52YWx1ZSA/IGNyaXRlcmlhLmFjdGlvbi52YWx1ZVswXSA6ICcnLCAnc2VhcmNoZWQnOiAnYXV0b3N1Z2dlc3QnLCAnc2VhcmNoU3RyaW5nJzogdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSwgJ3BhZ2UnOnRoaXMucHJvcHMuaG9zcGl0YWxfaWRfc2VhcmNoPydob3NwaXRhbFNlYXJjaCc6JydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICAgICAgICAgIGNyaXRlcmlhLmlkID0gY3JpdGVyaWEuYWN0aW9uLnZhbHVlWzBdXG4gICAgICAgICAgICAgICAgY3JpdGVyaWEudHlwZSA9ICdwcm9jZWR1cmVzJ1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNyaXRlcmlhLmFjdGlvbi5wYXJhbS5pbmNsdWRlcygnc3BlY2lhbGl6YXRpb25zJykpIHtcbiAgICAgICAgICAgIFx0dHlwZSA9ICdvcGQnXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQ29tbW9uU3BlY2lhbGl6YXRpb25zU2VsZWN0ZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjb21tb24tc3BlY2lhbGl6YXRpb25zLXNlbGVjdGVkJywgJ3NlbGVjdGVkJzogY3JpdGVyaWEubmFtZSB8fCAnJywgJ3NlbGVjdGVkSWQnOiBjcml0ZXJpYS5hY3Rpb24udmFsdWUgPyBjcml0ZXJpYS5hY3Rpb24udmFsdWVbMF0gOiAnJywgJ3NlYXJjaGVkJzogJ2F1dG9zdWdnZXN0JywgJ3NlYXJjaFN0cmluZyc6IHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUsICdwYWdlJzp0aGlzLnByb3BzLmhvc3BpdGFsX2lkX3NlYXJjaD8naG9zcGl0YWxTZWFyY2gnOicnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgICAgICAgICBjcml0ZXJpYS5pZCA9IGNyaXRlcmlhLmFjdGlvbi52YWx1ZVswXVxuICAgICAgICAgICAgICAgIGNyaXRlcmlhLnR5cGUgPSAnc3BlY2lhbGl0eSdcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChjcml0ZXJpYS5hY3Rpb24ucGFyYW0uaW5jbHVkZXMoJ2RvY3Rvcl9uYW1lJykpIHtcbiAgICAgICAgICAgIFx0dHlwZSA9ICdvcGQnXG5cbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdEb2N0b3JOYW1lU2VhcmNoZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdkb2N0b3ItbmFtZS1zZWFyY2hlZCcsICdzZWxlY3RlZElkJzogY3JpdGVyaWEuYWN0aW9uLnZhbHVlWzBdIHx8ICcnLCAnc2VhcmNoZWQnOiAnYXV0b3N1Z2dlc3QnLCAnc2VhcmNoU3RyaW5nJzogdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSB8fCAnJywgJ3BhZ2UnOnRoaXMucHJvcHMuaG9zcGl0YWxfaWRfc2VhcmNoPydob3NwaXRhbFNlYXJjaCc6JydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvb3BkL2RvY3Rvci8ke2NyaXRlcmlhLmFjdGlvbi52YWx1ZVswXX0/aGlkZV9zZWFyY2hfZGF0YT10cnVlYClcblxuICAgICAgICAgICAgICAgIHJldHVyblxuXG4gICAgICAgICAgICB9ZWxzZSBpZiAoY3JpdGVyaWEudHlwZSA9PSBcImxhYlwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGVhckV4dHJhVGVzdHMoKVxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0xhYk5hbWVTZWFyY2hlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2xhYi1uYW1lLXNlYXJjaGVkJywgJ3NlbGVjdGVkSWQnOiBjcml0ZXJpYS5hY3Rpb24udmFsdWVbMF0gfHwgJycsICdzZWFyY2hlZCc6ICdhdXRvc3VnZ2VzdCcsICdzZWFyY2hTdHJpbmcnOiB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlIHx8ICcnLCAncGFnZSc6dGhpcy5wcm9wcy5ob3NwaXRhbF9pZF9zZWFyY2g/J2hvc3BpdGFsU2VhcmNoJzonJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9sYWIvJHtjcml0ZXJpYS5hY3Rpb24udmFsdWVbMF19YClcbiAgICAgICAgICAgICAgICByZXR1cm5cblxuICAgICAgICAgICAgfSBlbHNlIGlmIChjcml0ZXJpYS50eXBlID09IFwibGFiX3Rlc3RcIikge1xuICAgICAgICAgICAgICAgIGNyaXRlcmlhLnR5cGUgPSAndGVzdCdcbiAgICAgICAgICAgICAgICBjcml0ZXJpYS51cmwgPSAnJ1xuICAgICAgICAgICAgICAgIGNyaXRlcmlhLmlkID0gY3JpdGVyaWEuYWN0aW9uLnZhbHVlWzBdXG4gICAgICAgICAgICAgICAgaWYgKGNyaXRlcmlhLmFjdGlvbi50ZXN0X3R5cGUgJiYgY3JpdGVyaWEuYWN0aW9uLnRlc3RfdHlwZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY3JpdGVyaWEudGVzdF90eXBlID0gY3JpdGVyaWEuYWN0aW9uLnRlc3RfdHlwZVswXVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNyaXRlcmlhLnRlc3RfdHlwZSA9ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hWYWx1ZTogXCJcIiB9KVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEoJ3Rlc3QnLCBjcml0ZXJpYSwgdHJ1ZSlcblx0XHQgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdCAgICAgICAgICAgXHR0aGlzLnNlYXJjaFByb2NlZWRMQUIoXCJcIiwgZmFsc2UpXG5cdFx0ICAgICAgICB9LCAxMDApXG5cbiAgICAgICAgICAgIH1lbHNlIGlmIChjcml0ZXJpYS50eXBlLmluY2x1ZGVzKCdpcGQnKSkge1xuXHQgICAgICAgICAgICBsZXQgZGF0YSA9IHtcblx0ICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSVBETmFtZVNlYXJjaGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnaXBkLW5hbWUtc2VhcmNoZWQnLCAnc2VsZWN0ZWRJZCc6IGNyaXRlcmlhLmFjdGlvbi52YWx1ZVswXSB8fCAnJywgJ3NlYXJjaGVkJzogJ2F1dG9zdWdnZXN0JywgJ3NlYXJjaFN0cmluZyc6IHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUgfHwgJycsICdwYWdlJzp0aGlzLnByb3BzLmhvc3BpdGFsX2lkX3NlYXJjaD8naG9zcGl0YWxTZWFyY2gnOicnXG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblx0ICAgICAgICAgICAgbGV0IGlwZERhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBjcml0ZXJpYSlcblx0ICAgICAgICAgICAgaXBkRGF0YS5pZCA9IGNyaXRlcmlhLmFjdGlvbi52YWx1ZVswXVxuXHQgICAgICAgICAgICBpcGREYXRhLnR5cGUgPSAnaXBkJ1xuICAgICAgICBcdFx0dGhpcy5wcm9wcy50b2dnbGVJUERDcml0ZXJpYShpcGREYXRhLCB0cnVlKVxuXG4gICAgICAgIFx0XHRzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgIFx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvaXBkSW5mbz9pcGRfaWQ9JHtpcGREYXRhLmlkfWApXG4gICAgICAgIFx0XHR9LCAxMDApXG5cdCAgICAgICAgfSAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgIGlmKHR5cGU9PSdvcGQnKXtcbiAgICAgICAgICAgIFx0dGhpcy5wcm9wcy5jbG9uZUNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzKGNyaXRlcmlhKVxuICAgIFx0ICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoVmFsdWU6IFwiXCIgfSlcblx0ICAgICAgICAgICAgdGhpcy5zZWFyY2hQcm9jZWVkT1BEKCcnLCAnJywgdGhpcy5wcm9wcy5ob3NwaXRhbF9pZF9zZWFyY2h8fCcnKVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWFyY2hQcm9jZWVkT1BEKGRvY3Rvcl9uYW1lID0gXCJcIiwgaG9zcGl0YWxfbmFtZSA9IFwiXCIsIGhvc3BpdGFsX2lkID0gXCJcIikge1xuICAgICAgICAvLyBoYW5kbGUgZG9jdG9yIG5hbWUsIGhvc3BpdGFsIG5hbWVcbiAgICAgICAgbGV0IHN0YXRlID0ge1xuICAgICAgICAgICAgZmlsdGVyQ3JpdGVyaWE6IHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLk9QRF9TVEFURS5maWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgICAgICAgICBkb2N0b3JfbmFtZSwgaG9zcGl0YWxfbmFtZSwgaG9zcGl0YWxfaWRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuZXh0RmlsdGVyQ3JpdGVyaWE6IHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLk9QRF9TVEFURS5maWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgICAgICAgICBkb2N0b3JfbmFtZSwgaG9zcGl0YWxfbmFtZSwgaG9zcGl0YWxfaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKGRvY3Rvcl9uYW1lIHx8IGhvc3BpdGFsX25hbWUgfHwgaG9zcGl0YWxfaWQpIHtcbiAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkQ3JpdGVyaWFzID0gW11cbiAgICAgICAgICAgIHN0YXRlLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzID0gW11cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvcHMubWVyZ2VPUERTdGF0ZShzdGF0ZSwgdHJ1ZSlcblxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL29wZC9zZWFyY2hyZXN1bHRzJylcbiAgICB9XG5cbiAgICBzZWFyY2hQcm9jZWVkTEFCKGxhYl9uYW1lID0gXCJcIiwgc2hvd19hbGxfbGFicykge1xuICAgICAgICAvLyBoYW5kbGUgZG9jdG9yIG5hbWUsIGhvc3BpdGFsIG5hbWVcbiAgICAgICAgdGhpcy5wcm9wcy5tZXJnZUxBQlN0YXRlKHtcbiAgICAgICAgICAgIGZpbHRlckNyaXRlcmlhOiB7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5MQUJfU1RBVEUuZmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgICAgICAgICAgbGFiX25hbWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuZXh0RmlsdGVyQ3JpdGVyaWE6IHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLkxBQl9TVEFURS5maWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgICAgICAgICBsYWJfbmFtZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGN1cnJlbnRTZWFyY2hlZENyaXRlcmlhczogc2hvd19hbGxfbGFicyA/IFtdIDogdGhpcy5wcm9wcy5MQUJfU1RBVEUuc2VsZWN0ZWRDcml0ZXJpYXMsXG4gICAgICAgICAgICBuZXh0U2VsZWN0ZWRDcml0ZXJpYXM6IHNob3dfYWxsX2xhYnMgPyBbXSA6IHRoaXMucHJvcHMuTEFCX1NUQVRFLnNlbGVjdGVkQ3JpdGVyaWFzXG4gICAgICAgIH0sIHRydWUpXG5cbiAgICAgICAgbGV0IHNlbGVjdGVkVGVzdElkcyA9IHRoaXMucHJvcHMuTEFCX1NUQVRFLnNlbGVjdGVkQ3JpdGVyaWFzLm1hcCh0ZXN0ID0+IHRlc3QuaWQpXG4gICAgICAgIGxldCBzZWxlY3RlZFRlc3RzTmFtZSA9IHRoaXMucHJvcHMuTEFCX1NUQVRFLnNlbGVjdGVkQ3JpdGVyaWFzLm1hcCh0ZXN0ID0+IHRlc3QubmFtZSlcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1Nob3dMYWJDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnc2hvdy1sYWItY2xpY2tlZCcsICdTZWxlY3RlZFRlc3RJZHMnOiBzZWxlY3RlZFRlc3RJZHMuam9pbignLCcpIHx8ICcnLCAnU2VsZWN0ZWRUZXN0TmFtZSc6IHNlbGVjdGVkVGVzdHNOYW1lLmpvaW4oJywnKSwgJ1Rlc3RDb3VudCc6IHNlbGVjdGVkVGVzdElkcy5sZW5ndGggfHwgMFxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9sYWIvc2VhcmNocmVzdWx0cycpXG4gICAgfVxuXG4gICAgb25Gb2N1c0luKCkge1xuICAgICAgICBpZih0aGlzLnByb3BzLmdldElucHV0Rm9jdXMpe1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRJbnB1dEZvY3VzKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuXG4gICAgXHRyZXR1cm4oXG5cblx0XHQ8ZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFydGljbGVTZWFyY2hXaWRnZXRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGVJbnB1dENvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYXJ0Yy1pbnBcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZX0gcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMuaG9zcGl0YWxfaWRfc2VhcmNoP2BTZWFyY2ggZm9yIERvY3RvciwgU3BlY2lhbGl0eSB3aXRoaW4gSG9zcGl0YWxgOlwiU2VhcmNoIERvY3RvcnMgJiBUZXN0c1wifSAgb25CbHVyPXsoKSA9PiB0aGlzLmZvY3VzT3V0KCl9IG9uRm9jdXMgPXt0aGlzLm9uRm9jdXNJbi5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXJ0Yy1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltYWdlcy92YWxsLnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNvbW1vblNlYXJjaD8nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOjxidXR0b24gY2xhc3NOYW1lPVwiYXJ0Yy1idG4gYXJ0Yy1kaXNhYmxlXCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9uZXctbG9jLWljby5zdmdcIn0gLz57dGhpcy5wcm9wcy5sb2NhdGlvbn08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0cy5sZW5ndGggfHwgdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSA/XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IHNlYXJjaE1hcmdpblwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbW9uLXNlYXJjaC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzcmNoLWhlYWRpbmdcIj5TZWFyY2ggUmVzdWx0czwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1vbi1saXN0aW5nLWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzLm1hcCgoY2F0LCBqKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtqfSBvbkNsaWNrPXt0aGlzLmFkZENyaXRlcmlhLmJpbmQodGhpcywgY2F0KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcmFjaC1yc2x0LXdpdGgtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXQudHlwZSAmJiBjYXQudHlwZS5pbmNsdWRlcygnZG9jdG9yJykgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEluaXRpYWxzUGljdHVyZSBuYW1lPXtjYXQubmFtZX0gaGFzX2ltYWdlPXshIWNhdC5pbWFnZV9wYXRofSBjbGFzc05hbWU9XCJlbGFzdGljSW5pdGFsUGljIGluaXRpYWxzUGljdHVyZS1kcyBmbHRyLWluaXRpYWxQaWN0dXJlLWRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3JjaC1yc2x0LXdkLXNwYW4gdXNyLXNyY2gtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICczNXB4JywgaGVpZ2h0OiAnMzVweCcsIGJvcmRlclJhZGl1czogJzUwJScgfX0gY2xhc3NOYW1lPVwiXCIgc3JjPXtgaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL21lZGlhLyR7Y2F0LmltYWdlX3BhdGh9YH0gYWx0PXtjYXQubmFtZX0gdGl0bGU9e2NhdC5uYW1lfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Jbml0aWFsc1BpY3R1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxzcGFuIGNsYXNzTmFtZT1cInNyY2gtcnNsdC13ZC1zcGFuIHRleHQtY2VudGVyIHNyY2gtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogJzIycHgnLCBtYXJnaW46ICcwcHggMTBweCcgfX0gY2xhc3NOYW1lPVwiXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvc2hhcGUtc3JjaC5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IHBhZGRpbmc6ICcwIDUwcHggMCAwJyB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0LnR5cGUgJiYgY2F0LnR5cGUuaW5jbHVkZXMoJ2lwZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8c3BhbiBjbGFzc05hbWU9XCJzZWFyY2gtc3Bhbi1zdWJcIj5JUEQgUHJvY2VkdXJlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNhdC5pc19wYWNrYWdlICYmIGNhdC5pc19wYWNrYWdlLmxlbmd0aCAmJiBjYXQuaXNfcGFja2FnZVswXSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlYXJjaC1zcGFuLXN1YlwiPkhlYWx0aCBQYWNrYWdlIHtjYXQubnVtYmVyX29mX3Rlc3RzICYmIGNhdC5udW1iZXJfb2ZfdGVzdHMubGVuZ3RoICYmIGNhdC5udW1iZXJfb2ZfdGVzdHNbMF0gPyBgIHwgJHtjYXQubnVtYmVyX29mX3Rlc3RzWzBdfSBUZXN0IEluY2x1ZGVkYCA6ICcnfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjYXQudHlwZSAmJiBjYXQudHlwZS5pbmNsdWRlcyhcImhvc3BpdGFsXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxzcGFuIGNsYXNzTmFtZT1cInNlYXJjaC1zcGFuLXN1YlwiPntjYXQubG9jYWxpdHkgJiYgQXJyYXkuaXNBcnJheShjYXQubG9jYWxpdHkpID8gY2F0LmxvY2FsaXR5LmpvaW4oJywgJykgOiBjYXQudmlzaWJsZV9uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPHNwYW4gY2xhc3NOYW1lPVwic2VhcmNoLXNwYW4tc3ViXCI+e2NhdC50eXBlICYmIGNhdC50eXBlLmluY2x1ZGVzKCdkb2N0b3InKSAmJiBjYXQucHJpbWFyeV9uYW1lICYmIEFycmF5LmlzQXJyYXkoY2F0LnByaW1hcnlfbmFtZSkgPyBjYXQucHJpbWFyeV9uYW1lLnNsaWNlKDAsIDIpLmpvaW4oJywgJykgOiBjYXQudmlzaWJsZV9uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdC5wb3B1bGFyaXR5ICYmIGNhdC5wb3B1bGFyaXR5ID49IDUwMDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVsYXItdHh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmdy01MDBcIj5Qb3B1bGFyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdC5uYW1lICYmIGNhdC5uYW1lLmluY2x1ZGVzKCdBYXJvZ3lhbSBDJykgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVsYXItdHh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmdy01MDBcIj5Qb3B1bGFyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZS5sZW5ndGggPiAyIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxsaSBvbkNsaWNrPXsoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnRG9jdG9yTmFtZVNlYXJjaGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnZG9jdG9yLW5hbWUtc2VhcmNoZWQnLCAnc2VsZWN0ZWRJZCc6ICcnLCAnc2VhcmNoZWQnOiAnJywgJ3NlYXJjaFN0cmluZyc6IHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUgfHwgJycsICdwYWdlJzp0aGlzLnByb3BzLmhvc3BpdGFsX2lkX3NlYXJjaD8naG9zcGl0YWxTZWFyY2gnOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFByb2NlZWRPUEQodGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSwgXCJcIiwgdGhpcy5wcm9wcy5ob3NwaXRhbF9pZF9zZWFyY2h8fCcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VyYWNoLXJzbHQtd2l0aC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcmNoLXJzbHQtd2Qtc3BhbiB0ZXh0LWNlbnRlciBzcmNoLWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMjBweCcsIG1hcmdpbjogJzBweCAxMHB4JyB9fSBjbGFzc05hbWU9XCJcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zaGFwZS1zcmNoLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwLTBcIiA+U2VhcmNoIGFsbCBEb2N0b3JzIHdpdGggbmFtZSA6PHNwYW4gY2xhc3NOYW1lPVwic2VhcmNoLWVsLWNvZGUtYm9sZFwiPnt0aGlzLnN0YXRlLnNlYXJjaFZhbHVlfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHR0aGlzLnN0YXRlLnNlYXJjaFZhbHVlLmxlbmd0aCA+IDIgICYmICF0aGlzLnByb3BzLmhvc3BpdGFsX2lkX3NlYXJjaD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0PGxpIG9uQ2xpY2s9eygpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnTGFiTmFtZVNlYXJjaGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbGFiLW5hbWUtc2VhcmNoZWQnLCAnc2VsZWN0ZWRJZCc6ICcnLCAnc2VhcmNoZWQnOiAnJywgJ3NlYXJjaFN0cmluZyc6IHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUgfHwgJycsICdwYWdlJzp0aGlzLnByb3BzLmhvc3BpdGFsX2lkX3NlYXJjaD8naG9zcGl0YWxTZWFyY2gnOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFByb2NlZWRMQUIodGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJhY2gtcnNsdC13aXRoLWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3JjaC1yc2x0LXdkLXNwYW4gdGV4dC1jZW50ZXIgc3JjaC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMjJweCcsIG1hcmdpbjogJzBweCAxMHB4JyB9fSBjbGFzc05hbWU9XCJcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zaGFwZS1zcmNoLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicC0wXCIgPlNlYXJjaCBhbGwgTGFicyB3aXRoIG5hbWUgOjxzcGFuIGNsYXNzTmFtZT1cInNlYXJjaC1lbC1jb2RlLWJvbGRcIj57dGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZS5sZW5ndGggPiAyPyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdIb3NwaXRhbE5hbWVTZWFyY2hlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2hvc3BpdGFsLW5hbWUtc2VhcmNoZWQnLCAnaG9zcGl0YWxJZCc6ICcnLCAnc2VhcmNoZWQnOiAnJywgJ3NlYXJjaFN0cmluZyc6IHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUgfHwgJycsICdwYWdlJzp0aGlzLnByb3BzLmhvc3BpdGFsX2lkX3NlYXJjaD8naG9zcGl0YWxTZWFyY2gnOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFByb2NlZWRPUEQoXCJcIiwgdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSwgdGhpcy5wcm9wcy5ob3NwaXRhbF9pZF9zZWFyY2ggfHwgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VyYWNoLXJzbHQtd2l0aC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyY2gtcnNsdC13ZC1zcGFuIHRleHQtY2VudGVyIHNyY2gtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogJzIwcHgnLCBtYXJnaW46ICcwcHggMTBweCcgfX0gY2xhc3NOYW1lPVwiXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvc2hhcGUtc3JjaC5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAtMFwiID5TZWFyY2ggYWxsIEhvc3BpdGFscyB3aXRoIG5hbWUgOjxzcGFuIGNsYXNzTmFtZT1cInNlYXJjaC1lbC1jb2RlLWJvbGRcIj57dGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgXHQ8L3NlY3Rpb24+XG5cdFx0PC9kaXY+XG5cdFx0KVxuICAgIH1cblx0XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1vblNlYXJjaCIsImltcG9ydCBDb21tb25TZWFyY2ggZnJvbSAnLi9Db21tb25TZWFyY2guanMnXG5leHBvcnQgZGVmYXVsdCBDb21tb25TZWFyY2giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgQ29tbW9uU2VhcmNoVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvY29tbW9uU2VhcmNoJ1xuaW1wb3J0IHsgZ2V0RWxhc3RpY0NyaXRlcmlhUmVzdWx0cywgY2xvbmVDb21tb25TZWxlY3RlZENyaXRlcmlhcywgbWVyZ2VPUERTdGF0ZSwgY2xlYXJFeHRyYVRlc3RzLCBjbGVhckFsbFRlc3RzLCBtZXJnZUxBQlN0YXRlLCB0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSwgdG9nZ2xlSVBEQ3JpdGVyaWEsIHNlbGVjdExvY2F0aW9uIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcblxuY2xhc3MgQ29tbW9uU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHQvL1x0dGhpcy5wcm9wcy5zZXRGZXRjaFJlc3VsdHModHJ1ZSlcblx0XHR9LCAxMDAwKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxDb21tb25TZWFyY2hWaWV3IHsuLi50aGlzLnByb3BzfSAvPlxuXHRcdClcblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcblx0XG5cdGxldCBPUERfU1RBVEUgPSAoKCk9PiB7XG5cblx0XHRjb25zdCB7XG4gICAgICAgIHNlbGVjdGVkTG9jYXRpb24sXG4gICAgICAgIGZpbHRlckNyaXRlcmlhXG5cbiAgICBcdH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfT1BEXG5cbiAgICByZXR1cm4ge1xuICAgIFx0c2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgZmlsdGVyQ3JpdGVyaWFcbiAgICBcdH1cblxuXHR9KSgpXG5cblx0bGV0IExBQl9TVEFURSA9ICgoKT0+e1xuXG5cdFx0Y29uc3Qge1xuICAgICAgICBzZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICBmaWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgc2VsZWN0ZWRDcml0ZXJpYXNcblxuICAgIFx0fSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9MQUJTXG5cbiAgICByZXR1cm4ge1xuICAgIFx0c2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgZmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgIHNlbGVjdGVkQ3JpdGVyaWFzXG4gICAgXHR9XG5cblx0fSkoKVxuXG5cdGxldCBJUERfU1RBVEUgPSAoKCk9PntcblxuXHRcdGNvbnN0IHtcbiAgICAgICAgc2VsZWN0ZWRDcml0ZXJpYXNcblxuICAgIFx0fSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9JUERcblxuICAgIHJldHVybiB7XG4gICAgXHRzZWxlY3RlZENyaXRlcmlhc1xuICAgIFx0fVxuXG5cdH0pKClcblxuXHRyZXR1cm4ge1xuXHRcdE9QRF9TVEFURSwgTEFCX1NUQVRFLCBJUERfU1RBVEVcblx0fVxufVxuXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuXG5cdHJldHVybiB7XG5cdFx0Z2V0RWxhc3RpY0NyaXRlcmlhUmVzdWx0czogKHNlYXJjaFN0cmluZywgdHlwZSwgbG9jYXRpb24sIGV4dHJhU2VhcmNoUGFyYW1zKSA9PiBkaXNwYXRjaChnZXRFbGFzdGljQ3JpdGVyaWFSZXN1bHRzKHNlYXJjaFN0cmluZywgdHlwZSwgbG9jYXRpb24sIGV4dHJhU2VhcmNoUGFyYW1zKSksXG5cdFx0Y2xvbmVDb21tb25TZWxlY3RlZENyaXRlcmlhczogKHNlbGVjdGVkQ3JpdGVyaWFzKSA9PiBkaXNwYXRjaChjbG9uZUNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzKHNlbGVjdGVkQ3JpdGVyaWFzKSksXG5cdFx0bWVyZ2VPUERTdGF0ZTogKHN0YXRlLCBmZXRjaE5ld1Jlc3VsdHMpID0+IGRpc3BhdGNoKG1lcmdlT1BEU3RhdGUoc3RhdGUsIGZldGNoTmV3UmVzdWx0cykpLFxuXHRcdGNsZWFyRXh0cmFUZXN0czogKCkgPT4gZGlzcGF0Y2goY2xlYXJFeHRyYVRlc3RzKCkpLFxuICAgICAgICBjbGVhckFsbFRlc3RzOiAoKSA9PiBkaXNwYXRjaChjbGVhckFsbFRlc3RzKCkpLFxuICAgICAgICBtZXJnZUxBQlN0YXRlOiAoc3RhdGUsIGZldGNoTmV3UmVzdWx0cykgPT4gZGlzcGF0Y2gobWVyZ2VMQUJTdGF0ZShzdGF0ZSwgZmV0Y2hOZXdSZXN1bHRzKSksXG4gICAgICAgIHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhOiAodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkKSA9PiBkaXNwYXRjaCh0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQpKSxcbiAgICAgICAgdG9nZ2xlSVBEQ3JpdGVyaWE6IChjcml0ZXJpYSwgZm9yY2VBZGQpID0+IGRpc3BhdGNoKHRvZ2dsZUlQRENyaXRlcmlhKGNyaXRlcmlhLCBmb3JjZUFkZCkpLFxuICAgICAgICBzZWxlY3RMb2NhdGlvbjogKGxvY2F0aW9uLCB0eXBlLCBmZXRjaE5ld1Jlc3VsdHMpID0+IGRpc3BhdGNoKHNlbGVjdExvY2F0aW9uKGxvY2F0aW9uLCB0eXBlLCBmZXRjaE5ld1Jlc3VsdHMpKVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ29tbW9uU2VhcmNoKSJdLCJzb3VyY2VSb290IjoiIn0=