exports.ids = [63];
exports.modules = {

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

var _react = __webpack_require__(/*! react */ "react");

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

const debouncer = (fn, delay) => {
    let timer = null;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.call(this);
        }, delay);
    };
};

class CriteriaElasticSearchView extends _react2.default.Component {
    constructor(props) {
        super(props);

        this.afterUserLogin = () => {
            let is_user_insurance_active = false;
            let user_insurance_status = null;
            if (this.props.defaultProfile && this.props.profiles && this.props.profiles[this.props.defaultProfile]) {
                user_insurance_status = this.props.profiles[this.props.defaultProfile].insurance_status;
            }
            is_user_insurance_active = user_insurance_status == 1 || user_insurance_status == 5 || user_insurance_status == 4 || user_insurance_status == 7;
            //this.setState({is_user_insurance_active: true, showPrescriptionInsuranceError: true})
            if (is_user_insurance_active) {
                this.setState({ is_user_insurance_active: true, showPrescriptionInsuranceError: true });
            }
        };

        this.state = {
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
    }

    componentDidMount() {
        this.getSearchResults = debouncer(this.getSearchResults.bind(this), 200);
        let input = document.getElementById('topCriteriaSearch');
        if (window) {
            window.scroll(0, 0);
        }

        let user_insurance_status = null;
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
            document.getElementById('topCriteriaSearch').addEventListener('focusin', () => {
                this.setState({ searchCities: '' });
            });
        }

        if (document.getElementById('search_results_view') && document.getElementById('search_bar')) {
            document.getElementById('search_bar').addEventListener('focusin', () => {
                document.getElementById('search_results_view').scrollIntoView();
            });
        }
        this.selectSearchType(this.props.type);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.type != nextProps.type) {

            if (nextProps.elasticSearchString) {
                this.setState({ searchValue: nextProps.elasticSearchString, searchResults: [] });
                this.getSearchResults();
            } else {
                this.setState({ searchValue: '', searchResults: [] });
            }
        }
    }

    inputHandler(e) {
        this.setState({ searchValue: e.target.value });
        let searchString = e.target.value.trim();
        if (searchString.length) {
            this.getSearchResults();
            this.props.toggleFixedMobileFooter(false);
        } else {
            this.setState({ searchResults: [] });
            this.props.toggleFixedMobileFooter(true);
        }
    }

    selectSearchType(type) {
        if (this.textInput) {
            this.textInput.focus();
        }
        if (this.textInput_desktop) {
            this.textInput_desktop.focus();
        }

        this.props.changeSelection(type, '');
    }

    getSearchResults() {
        this.setState({ loading: true });
        let lat = 28.644800;
        let long = 77.216721;
        let place_id = "";

        if (this.props.dataState.selectedLocation) {
            place_id = this.props.dataState.selectedLocation.place_id || "";
            lat = this.props.dataState.selectedLocation.geometry.location.lat;
            long = this.props.dataState.selectedLocation.geometry.location.lng;
            if (typeof lat === 'function') lat = lat();
            if (typeof long === 'function') long = long();

            lat = parseFloat(parseFloat(lat).toFixed(6));
            long = parseFloat(parseFloat(long).toFixed(6));
        }

        let location = { lat: lat, long: long };

        let LAB_TYPES = ['lab_test_synonym', 'lab_test', 'lab'];

        let OPD_TYPES = ['visit_reason', 'practice_specialization', 'doctor', 'hospital', 'practice_specialization_synonym'];

        let PROCEDURE_TYPES = ['procedure_category', 'procedure'];

        let IPD_TYPES = ['ipd'];

        let type = '';
        let visibleType = '';
        let filterResults = this.props.getElasticCriteriaResults(this.state.searchValue.trim(), this.props.type.includes('package') ? 'test' : this.props.type, location);

        let allSearchResults = this.props.getElasticCriteriaResults(this.state.searchValue.trim(), '', location);

        Promise.all([filterResults, allSearchResults]).then(([filterSearchResults, searchResults]) => {

            if (searchResults && searchResults.suggestion && searchResults.suggestion.length) {

                if (LAB_TYPES.indexOf(searchResults.suggestion[0].type) > -1 && this.props.type != 'lab') {

                    type = 'lab';
                    visibleType = searchResults.suggestion[0];
                } else if (OPD_TYPES.indexOf(searchResults.suggestion[0].type) > -1 && this.props.type != 'opd') {

                    type = 'opd';
                    visibleType = searchResults.suggestion[0];
                } else if (IPD_TYPES.indexOf(searchResults.suggestion[0].type) > -1 && this.props.type != 'ipd') {
                    type = 'ipd';
                    visibleType = searchResults.suggestion[0];
                }

                /*else if(PROCEDURE_TYPES.indexOf(searchResults.suggestion[0].type)>-1 && this.props.type !='procedures'){
                     type = 'procedures'
                    visibleType = searchResults.suggestion[0]
                }*/
            }
            if (filterSearchResults) {

                let filterResultsName = filterSearchResults.suggestion.map(x => x.name).join(',') || '';
                let gtmData = {
                    'Category': 'ConsumerApp', 'Action': 'searchquery', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'search-query', 'searchString': this.state.searchValue,
                    'searchType': this.props.type, 'results': filterResultsName
                };
                _gtm2.default.sendEvent({ data: gtmData });
                let filterData = filterSearchResults.suggestion;
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
                this.setState({ searchResults: filterData, searchedCategories: filterSearchResults.suggestedCategories, loading: false, type: type, visibleType: visibleType });
            }
        });
    }

    addCriteria(criteria) {

        criteria = Object.assign({}, criteria);

        if (this.props.type == 'opd' || this.props.type == 'procedures') {

            let action = '',
                event = '';

            if (criteria.type.includes('visit_reason')) {

                let data = {
                    'Category': 'ConsumerApp', 'Action': 'VisitReasonSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'visit-reason-searched', 'SelectedId': criteria.id || '', 'searched': 'autosuggest', 'searchString': this.state.searchValue
                };
                _gtm2.default.sendEvent({ data: data });

                criteria.id = criteria.action.value.join(',');
                criteria.type = 'speciality';
            } else if (criteria.action.param.includes('hospital_name')) {
                let data = {
                    'Category': 'ConsumerApp', 'Action': 'HospitalNameSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'hospital-name-searched', 'hospitalId': criteria.action.id || '', 'searched': 'autosuggest', 'searchString': this.state.searchValue || ''
                };
                _gtm2.default.sendEvent({ data: data });

                this.props.searchProceed("", "", criteria.action.id);
                return;
            } else if (criteria.action.param.includes('procedure_category_ids')) {

                criteria.id = criteria.action.value[0];
                criteria.type = 'procedures_category';
            } else if (criteria.action.param.includes('procedure_ids')) {
                let data = {
                    'Category': 'ConsumerApp', 'Action': 'CommonProceduresSelected', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'common-procedures-selected', 'selected': criteria.name || '', 'selectedId': criteria.action.value ? criteria.action.value[0] : '', 'searched': 'autosuggest', 'searchString': this.state.searchValue
                };
                _gtm2.default.sendEvent({ data: data });

                criteria.id = criteria.action.value[0];
                criteria.type = 'procedures';
            } else if (criteria.action.param.includes('specializations')) {
                let data = {
                    'Category': 'ConsumerApp', 'Action': 'CommonSpecializationsSelected', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'common-specializations-selected', 'selected': criteria.name || '', 'selectedId': criteria.action.value ? criteria.action.value[0] : '', 'searched': 'autosuggest', 'searchString': this.state.searchValue
                };
                _gtm2.default.sendEvent({ data: data });

                criteria.id = criteria.action.value[0];
                criteria.type = 'speciality';
            } else if (criteria.action.param.includes('doctor_name')) {

                let data = {
                    'Category': 'ConsumerApp', 'Action': 'DoctorNameSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-name-searched', 'selectedId': criteria.action.value[0] || '', 'searched': 'autosuggest', 'searchString': this.state.searchValue || ''
                };
                _gtm2.default.sendEvent({ data: data });

                this.props.history.push(`/opd/doctor/${criteria.action.value[0]}?hide_search_data=true`);

                //this.props.searchProceed(criteria.action.value[0],"")
                return;
            }

            this.props.cloneCommonSelectedCriterias(criteria);
            this.setState({ searchValue: "" });
            this.props.showResults('opd');
        } else if (this.props.type.includes('ipd')) {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'IPDNameSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-name-searched', 'selectedId': criteria.action.value[0] || '', 'searched': 'autosuggest', 'searchString': this.state.searchValue || ''
            };
            _gtm2.default.sendEvent({ data: data });
            let ipdData = Object.assign({}, criteria);
            ipdData.id = criteria.action.value[0];
            ipdData.url = null;
            this.props.toggleIpd('ipd', ipdData, this.state.searchValue);
        } else {

            if (criteria.type == "lab") {
                this.props.clearExtraTests();
                let data = {
                    'Category': 'ConsumerApp', 'Action': 'LabNameSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lab-name-searched', 'selectedId': criteria.action.value[0] || '', 'searched': 'autosuggest', 'searchString': this.state.searchValue || ''
                };
                _gtm2.default.sendEvent({ data: data });

                this.props.history.push(`/lab/${criteria.action.value[0]}`);
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

    getCityListLayout(searchResults = []) {
        if (searchResults.length) {
            this.setState({ searchCities: searchResults });
        } else {
            this.setState({ searchCities: [], searchValue: '' });
        }
    }

    selectLocation(city) {
        this.child.selectLocation(city, () => {
            this.setState({ searchCities: [] });
        });
    }

    focusOut() {
        let data = {
            'Category': 'ConsumerApp', 'Action': 'searchInputFocusOut', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'search-string-on-blur', 'searched': '', 'searchString': this.state.searchValue, 'type': this.props.type
        };
        _gtm2.default.sendEvent({ data: data });
    }

    render() {
        //Check user for insurance 
        let user_insurance_status = null;
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
                        _react2.default.createElement('img', { className: 'search-back-main-ico', src: "/assets" + "/img/customer-icons/back-icon.png", onClick: () => this.props.history.goBack() }),

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
                                        _react2.default.createElement('img', { className: 'cursor-pntr', width: '15', src: "/assets" + "/img/red-times-icon.svg", onClick: () => this.setState({ showPrescriptionInsuranceError: false }) })
                                    ) : '',
                                    _react2.default.createElement(_locationElements2.default, _extends({}, this.props, { onRef: ref => this.child = ref, getCityListLayout: this.getCityListLayout.bind(this), resultType: 'search', fromCriteria: true, commonSearchPage: true })),
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
                                            _react2.default.createElement('input', { type: 'text', autoComplete: 'off', className: 'd-block d-lg-none new-srch-doc-lab', id: 'search_bar', onChange: this.inputHandler.bind(this), value: this.state.searchValue, placeholder: this.props.title, onClick: () => {
                                                    if (this.props.goBack) {
                                                        this.props.history.go(-1);
                                                    }
                                                }, onBlur: () => this.focusOut(),
                                                ref: input => {
                                                    this.textInput = input;
                                                } }),
                                            _react2.default.createElement('input', { type: 'text', autoComplete: 'off', className: 'd-none d-lg-block new-srch-doc-lab', id: 'search_bar_desktop', onChange: this.inputHandler.bind(this), value: this.state.searchValue, placeholder: this.props.title, onClick: () => {
                                                    if (this.props.goBack) {
                                                        this.props.history.go(-1);
                                                    }
                                                }, onBlur: () => this.focusOut()
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
                                            this.state.searchCities.map((result, i) => {
                                                return _react2.default.createElement(
                                                    'li',
                                                    { key: i, onClick: this.selectLocation.bind(this, result) },
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
                                            { style: { cursor: 'pointer' }, onClick: () => {

                                                    let data = {
                                                        'Category': 'ConsumerApp', 'Action': 'ChangeTypeClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'change-type-clicked', 'hospitalId': '', 'searched': '', 'searchString': this.state.searchValue || ''
                                                    };
                                                    _gtm2.default.sendEvent({ data: data });

                                                    this.props.changeSelection(this.state.type, this.state.visibleType.name || '');
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
                                                this.state.searchResults.map((cat, j) => {
                                                    return _react2.default.createElement(
                                                        'li',
                                                        { key: j, onClick: this.addCriteria.bind(this, cat) },
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
                                                                    _react2.default.createElement('img', { style: { width: '35px', height: '35px', borderRadius: '50%' }, className: '', src: `https://cdn.docprime.com/media/${cat.image_path}`, alt: cat.name, title: cat.name })
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
                                                                this.props.type.includes('ipd') ? _react2.default.createElement(
                                                                    'span',
                                                                    { className: 'search-span-sub' },
                                                                    'IPD Procedures'
                                                                ) : cat.is_package && cat.is_package.length && cat.is_package[0] ? _react2.default.createElement(
                                                                    'span',
                                                                    { className: 'search-span-sub' },
                                                                    'Health Package ',
                                                                    cat.number_of_tests && cat.number_of_tests.length && cat.number_of_tests[0] ? ` | ${cat.number_of_tests[0]} Test Included` : ''
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
                                                    { onClick: () => {

                                                            let data = {
                                                                'Category': 'ConsumerApp', 'Action': 'DoctorNameSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-name-searched', 'selectedId': '', 'searched': '', 'searchString': this.state.searchValue || ''
                                                            };
                                                            _gtm2.default.sendEvent({ data: data });

                                                            this.props.searchProceed(this.state.searchValue, "");
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
                                                    { onClick: () => {

                                                            let data = {
                                                                'Category': 'ConsumerApp', 'Action': 'LabNameSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lab-name-searched', 'selectedId': '', 'searched': '', 'searchString': this.state.searchValue || ''
                                                            };
                                                            _gtm2.default.sendEvent({ data: data });

                                                            this.props.searchProceed(this.state.searchValue);
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
                                                    { onClick: () => {

                                                            let data = {
                                                                'Category': 'ConsumerApp', 'Action': 'PackageNameSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'package-name-searched', 'selectedId': '', 'searched': '', 'searchString': this.state.searchValue || ''
                                                            };
                                                            _gtm2.default.sendEvent({ data: data });

                                                            this.props.searchProceed(this.state.searchValue);
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
                                                    { onClick: () => {

                                                            let data = {
                                                                'Category': 'ConsumerApp', 'Action': 'HospitalNameSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'hospital-name-searched', 'hospitalId': '', 'searched': '', 'searchString': this.state.searchValue || ''
                                                            };
                                                            _gtm2.default.sendEvent({ data: data });

                                                            this.props.searchProceed("", this.state.searchValue);
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

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

const queryString = __webpack_require__(/*! query-string */ "query-string");

class SearchView extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        if (window) {
            window.scrollTo(0, 0);
        }

        const parsed = queryString.parse(this.props.location.search);

        let data = {
            'Category': 'ConsumerApp', 'Action': 'OpenSearchPage', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': `open-search-from-${parsed.from || "default"}`, from: parsed.from
        };

        _gtm2.default.sendEvent({ data: data });
    }

    searchProceedOPD(doctor_name = "", hospital_name = "") {
        // handle doctor name, hospital name
        this.props.mergeOPDState({
            filterCriteria: _extends({}, this.props.filterCriteria, {
                doctor_name, hospital_name
            }),
            page: 1
        }, true);

        let data = {
            'Category': 'ConsumerApp', 'Action': 'ShowDoctorsClicked', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'show-doctors-clicked'
        };
        _gtm2.default.sendEvent({ data: data });

        this.props.history.push({
            pathname: '/opd/searchresults',
            state: { search_back: true }
        });
    }

    searchProceedLAB(lab_name = "") {
        // handle doctor name, hospital name
        this.props.mergeLABState({
            filterCriteria: _extends({}, this.props.filterCriteria, {
                lab_name
            }),
            page: 1
        }, true);

        this.props.history.push({
            pathname: '/lab/searchresults',
            state: { search_back: true }
        });
    }

    showDoctors(type) {
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
            this.props.cloneCommonSelectedCriterias(this.props.selectedCriterias.filter(x => !x.type.includes("procedures")));
        } else {
            this.props.cloneCommonSelectedCriterias(this.props.selectedCriterias.filter(x => x.type.includes("procedures")));
        }

        this.searchProceedOPD("", "");
    }

    showLabs() {
        if (this.props.locationType == "geo") {
            this.setState({ focusInput: 1 });
            if (window) {
                window.scrollTo(0, 0);
            }
            return null;
        }
        this.searchProceedLAB("");
    }

    render() {
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
                        this.props.selectedCriterias && this.props.selectedCriterias.filter(x => !x.type.includes("procedures")).length > 0 ? _react2.default.createElement(_index2.default, _extends({}, this.props, {
                            heading: `View Selected (${this.props.selectedCriterias.length})`,
                            data: this.props.selectedCriterias.filter(x => !x.type.includes("procedures")),
                            selectedPills: true,
                            selected: [],
                            toggle: this.props.toggleOPDCriteria.bind(this)
                        })) : "",
                        _react2.default.createElement(_index2.default, _extends({}, this.props, {
                            heading: 'Common Specialities',
                            type: 'speciality',
                            data: this.props.specializations,
                            selected: this.props.selectedCriterias.filter(x => x.type == 'speciality'),
                            toggle: this.props.toggleOPDCriteria.bind(this)
                        })),
                        _react2.default.createElement(_index2.default, _extends({}, this.props, {
                            heading: 'Common Conditions',
                            type: 'condition',
                            data: this.props.conditions,
                            selected: this.props.selectedCriterias.filter(x => x.type == 'condition'),
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
                            heading: `View Selected (${this.props.selectedCriterias.length})`,
                            data: this.props.selectedCriterias,
                            selected: [],
                            selectedPills: true,
                            toggle: this.props.toggleDiagnosisCriteria.bind(this)
                        })) : "",
                        _react2.default.createElement(_index2.default, _extends({}, this.props, {
                            heading: 'Common Test',
                            type: 'test',
                            data: this.props.common_tests.filter(x => !x.is_package),
                            selected: this.props.selectedCriterias.filter(x => x.type == 'test').filter(x => !x.is_package),
                            toggle: this.props.toggleDiagnosisCriteria.bind(this)
                        })),
                        this.props.common_tests.filter(x => x.is_package).length ? _react2.default.createElement(_index2.default, _extends({}, this.props, {
                            heading: 'Common Health Packages',
                            type: 'test',
                            data: this.props.common_tests.filter(x => x.is_package),
                            selected: this.props.selectedCriterias.filter(x => x.type == 'test').filter(x => x.is_package),
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
                        this.props.selectedCriterias && this.props.selectedCriterias.filter(x => x.type.includes("procedures")).length > 0 ? _react2.default.createElement(_index2.default, _extends({}, this.props, {
                            heading: `View Selected (${this.props.selectedCriterias.length})`,
                            data: this.props.selectedCriterias.filter(x => x.type.includes("procedures")),
                            selectedPills: true,
                            selected: [],
                            toggle: this.props.toggleOPDCriteria.bind(this)
                        })) : "",
                        _react2.default.createElement(_index2.default, _extends({}, this.props, {
                            heading: 'Common Dental Treatments',
                            type: 'procedures_category',
                            data: this.props.procedure_categories,
                            selected: this.props.selectedCriterias.filter(x => x.type == 'procedures_category'),
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
}

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

var _react = __webpack_require__(/*! react */ "react");

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

const queryString = __webpack_require__(/*! query-string */ "query-string");

class SearchElasticView extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTestType: {},
            searchString: '',
            showFixedMobileFooter: true
        };
    }

    componentDidMount() {
        if (window) {
            window.scroll(0, 0);
        }

        const parsed = queryString.parse(this.props.location.search);

        let data = {
            'Category': 'ConsumerApp', 'Action': 'OpenSearchPage', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': `open-search-from-${parsed.from || "default"}`, 'from': parsed.from, 'defaultSearchButton': this.props.selectedSearchType || '', 'page': parsed.pageType ? parsed.pageType : ''
        };

        _gtm2.default.sendEvent({ data: data });
    }

    searchProceedOPD(doctor_name = "", hospital_name = "", hospital_id = "") {
        // handle doctor name, hospital name
        let state = {
            filterCriteria: _extends({}, this.props.dataState.filterCriteria, {
                doctor_name, hospital_name, hospital_id
            }),
            nextFilterCriteria: _extends({}, this.props.dataState.filterCriteria, {
                doctor_name, hospital_name, hospital_id
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

    searchProceedLAB(lab_name = "", show_all_labs) {
        // handle doctor name, hospital name
        this.props.mergeLABState({
            filterCriteria: _extends({}, this.props.dataState.filterCriteria, {
                lab_name
            }),
            nextFilterCriteria: _extends({}, this.props.dataState.filterCriteria, {
                lab_name
            }),
            currentSearchedCriterias: show_all_labs ? [] : this.props.dataState.selectedCriterias,
            nextSelectedCriterias: show_all_labs ? [] : this.props.dataState.selectedCriterias
        }, true);

        let selectedTestIds = this.props.dataState.selectedCriterias.map(test => test.id);
        let selectedTestsName = this.props.dataState.selectedCriterias.map(test => test.name);
        let data = {
            'Category': 'ConsumerApp', 'Action': 'ShowLabClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'show-lab-clicked', 'SelectedTestIds': selectedTestIds.join(',') || '', 'SelectedTestName': selectedTestsName.join(','), 'TestCount': selectedTestIds.length || 0
        };
        _gtm2.default.sendEvent({ data: data });

        this.props.history.push({
            pathname: '/lab/searchresults',
            state: { search_back: true }
        });
    }

    searchProceedPackages() {
        let selectedPackagesIds = [];
        if (this.props.dataState.selectedPackages.length > 0) {
            this.props.dataState.selectedPackages.map(x => {
                selectedPackagesIds.push(x.id);
            });
            this.props.setPackageId(selectedPackagesIds, false);
        }
        setTimeout(() => {
            this.props.history.push('/searchpackages');
        }, 100);
    }

    showDoctors(type) {
        if (this.props.locationType == "geo") {
            this.setState({ focusInput: 1 });
            if (window) {
                window.scrollTo(0, 0);
            }
            return null;
        }

        this.searchProceedOPD("", "");
    }

    setCommonSelectedCriterias(type, criteria) {
        criteria = Object.assign({}, criteria);
        criteria.type = type;
        this.props.cloneCommonSelectedCriterias(criteria);
        this.showDoctors();
    }

    showLabs(show_all_labs) {
        if (this.props.locationType == "geo") {
            this.setState({ focusInput: 1 });
            if (window) {
                window.scrollTo(0, 0);
            }
            return null;
        }
        this.searchProceedLAB("", show_all_labs);
    }

    showPackages() {
        if (this.props.locationType == "geo") {
            this.setState({ focusInput: 1 });
            if (window) {
                window.scrollTo(0, 0);
            }
            return null;
        }
        this.searchProceedPackages();
    }

    clickPopUp(type) {
        if (type == 1) {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'YesClickedLabTestPopup', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'yes-clicked-lab-test-popup', 'selected': this.state.currentTestType.name || '', 'selectedId': this.state.currentTestType.id || '', 'searched': this.state.searchString ? 'autosuggest' : '', 'searchString': this.state.searchString
            };
            _gtm2.default.sendEvent({ data: data });
            this.props.toggleDiagnosisCriteria('test', this.state.currentTestType, true);
        } else {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'NoClickedLabTestPopup', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'no-clicked-lab-test-popup', 'searched': this.state.searchString ? 'autosuggest' : '', 'searchString': this.state.searchString
            };
        }
        if (document.getElementById('search_results_view')) {
            document.getElementById('search_results_view').scrollIntoView();
        }
        this.setState({ currentTestType: {} });
    }

    toggleLabTests(type, criteria, searchString = "") {
        if (criteria.is_package && criteria.is_package[0]) {
            this.togglePackages('', criteria);
        } else {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'TestSelected', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'test-selected', 'selected': criteria.name || '', 'selectedId': criteria.id || '', 'searched': 'autosuggest', 'searchString': searchString
            };
            _gtm2.default.sendEvent({ data: data });

            let selectedTestIds = [];
            // this.props.dataState.selectedCriterias.map((x) => {
            //     if (x.test_type) {
            //         selectedTestIds.push(x.test_type)
            //     }
            // })
            if (selectedTestIds.length && criteria.test_type) {
                if (selectedTestIds.indexOf(criteria.test_type) == -1) {
                    this.setState({ currentTestType: criteria, searchString: searchString });
                    let data = {
                        'Category': 'ConsumerApp', 'Action': 'PopUpOpenLabTestError', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'popup-open-lab-test-error', 'selected': criteria.name || '', 'selectedId': criteria.id || '', 'searched': 'autosuggest', 'searchString': searchString
                    };
                    _gtm2.default.sendEvent({ data: data });
                    return;
                }
            }
            if (document.getElementById('search_results_view')) {
                document.getElementById('search_results_view').scrollIntoView();
            }

            this.props.toggleDiagnosisCriteria('test', criteria, true);
            setTimeout(() => {
                this.showLabs();
            }, 100);
        }
    }

    togglePackages(type, criteria, searchString = "") {
        let data = {
            'Category': 'ConsumerApp', 'Action': 'PackageSelected', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'package-selected', 'selected': criteria.name || '', 'selectedId': criteria.id || '', 'searched': 'autosuggest', 'searchString': searchString
        };
        _gtm2.default.sendEvent({ data: data });
        // this.props.toggleSearchPackages(criteria)
        this.props.setPackageId(criteria.id);
        setTimeout(() => {
            this.showPackages();
        }, 100);
    }

    searchProceedIPD() {}

    showIPD(id, url = null) {

        if (url) {
            this.props.history.push(`/${url}?showPopup=true`);
        } else {
            this.props.history.push(`/ipdInfo?ipd_id=${id}&showPopup=true`);
        }
    }

    toggleIpd(type, criteria, searchString = "") {
        let selectedCriteria = _extends({}, criteria);
        selectedCriteria.type = 'ipd';
        this.props.toggleIPDCriteria(selectedCriteria, true);
        this.showIPD(criteria.id, criteria.url);
    }

    toggleFixedMobileFooter(toShow) {
        if (toShow) {
            this.setState({ showFixedMobileFooter: true });
        } else {
            this.setState({ showFixedMobileFooter: false });
        }
    }

    render() {

        let title = '';
        let searchProceed = '';
        let showResults = '';
        let commonSearched = '';

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
                                            `Pathology and Radiology tests (lab visit
                                                    required) cannot be booked together. Do you want to search ${this.state.currentTestType.name}  test instead ?`
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

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

class Search extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = { elasticSearchString: '' };
    }

    changeSelection(which, searchString = '') {
        let data = {
            'Category': 'ConsumerApp', 'Action': 'ToggleSearchType', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'toogle-search-type', 'type': which || ''
        };

        this.setState({ elasticSearchString: searchString });
        _gtm2.default.sendEvent({ data: data });
        this.props.selectSearchType(which);
    }

    componentDidMount() {
        if (window) {
            window.scroll(0, 0);
        }
        //opd
        let locality = '';
        let selectedLocation = null;
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

    render() {

        if (_config2.default.SEARCH_ELASTIC_VIEW) {
            let dataState = '';

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
}

Search.contextTypes = {
    router: () => null
};
const mapStateToProps = state => {
    let OPD_STATE = (() => {
        const {
            LOADED_SEARCH_CRITERIA_OPD,
            specializations,
            conditions,
            selectedCriterias,
            selectedLocation,
            filterCriteria,
            locationType,
            procedure_categories,
            procedures,
            common_settings
        } = state.SEARCH_CRITERIA_OPD;

        return {
            LOADED_SEARCH_CRITERIA_OPD,
            specializations,
            conditions,
            selectedCriterias,
            selectedLocation,
            filterCriteria,
            locationType,
            procedure_categories,
            procedures,
            common_settings
        };
    })();

    let LAB_STATE = (() => {
        const {
            LOADED_SEARCH_CRITERIA_LAB,
            common_tests,
            common_conditions,
            preferred_labs,
            selectedCriterias,
            selectedLocation,
            filterCriteria,
            locationType,
            common_package,
            filterCriteriaPackages,
            selectedPackages
        } = state.SEARCH_CRITERIA_LABS;

        return {
            LOADED_SEARCH_CRITERIA_LAB,
            common_tests,
            common_conditions,
            preferred_labs,
            selectedCriterias,
            selectedLocation,
            filterCriteria,
            locationType,
            common_package,
            filterCriteriaPackages,
            selectedPackages
        };
    })();

    let IPD_STATE = (() => {
        const {
            LOADED_SEARCH_CRITERIA_OPD,
            ipd_procedures,
            selectedLocation,
            locationType

        } = state.SEARCH_CRITERIA_OPD;

        const {
            selectedCriterias
        } = state.SEARCH_CRITERIA_IPD;

        return {
            LOADED_SEARCH_CRITERIA_OPD,
            ipd_procedures,
            selectedLocation,
            locationType,
            selectedCriterias
        };
    })();

    let { selectedSearchType, is_login_user_insured, profiles, defaultProfile } = state.USER;

    return { OPD_STATE, LAB_STATE, selectedSearchType, IPD_STATE, is_login_user_insured, profiles, defaultProfile };
};

const mapDispatchToProps = dispatch => {
    return {
        // opd
        loadOPDCommonCriteria: selectedLocation => dispatch((0, _index.loadOPDCommonCriteria)(selectedLocation)),
        toggleOPDCriteria: (type, criteria) => dispatch((0, _index.toggleOPDCriteria)(type, criteria)),
        getOPDCriteriaResults: (searchString, callback) => dispatch((0, _index.getOPDCriteriaResults)(searchString, callback)),
        resetFilters: () => dispatch((0, _index.resetFilters)()),
        mergeOPDState: (state, fetchNewResults) => dispatch((0, _index.mergeOPDState)(state, fetchNewResults)),
        cloneCommonSelectedCriterias: selectedCriterias => dispatch((0, _index.cloneCommonSelectedCriterias)(selectedCriterias)),
        filterSelectedCriteria: type => dispatch((0, _index.filterSelectedCriteria)(type)),
        //lab
        loadLabCommonCriterias: () => dispatch((0, _index.loadLabCommonCriterias)()),
        toggleDiagnosisCriteria: (type, criteria, forceAdd) => dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria, forceAdd)),
        getDiagnosisCriteriaResults: (searchString, callback) => dispatch((0, _index.getDiagnosisCriteriaResults)(searchString, callback)),
        clearExtraTests: () => dispatch((0, _index.clearExtraTests)()),
        clearAllTests: () => dispatch((0, _index.clearAllTests)()),
        mergeLABState: (state, fetchNewResults) => dispatch((0, _index.mergeLABState)(state, fetchNewResults)),
        selectSearchType: type => dispatch((0, _index.selectSearchType)(type)),
        getElasticCriteriaResults: (searchString, type, location, callback) => dispatch((0, _index.getElasticCriteriaResults)(searchString, type, location, callback)),
        // package
        setPackageId: (package_id, isHomePage) => dispatch((0, _index.setPackageId)(package_id, isHomePage)),
        toggleSearchPackages: healthPackage => dispatch((0, _index.toggleSearchPackages)(healthPackage)),
        toggleIPDCriteria: (criteria, forceAdd) => dispatch((0, _index.toggleIPDCriteria)(criteria, forceAdd)),
        loadOPDInsurance: city => dispatch((0, _index.loadOPDInsurance)(city))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Search);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2NyaXRlcmlhRWxhc3RpY1NlYXJjaC9jcml0ZXJpYUVsYXN0aWNTZWFyY2hWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvY3JpdGVyaWFFbGFzdGljU2VhcmNoL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvc2VhcmNoL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvc2VhcmNoL3NlYXJjaFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9zZWFyY2hFbGFzdGljL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvc2VhcmNoRWxhc3RpYy9zZWFyY2hFbGFzdGljVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9jb21tb25zL3NlYXJjaC5qcyJdLCJuYW1lcyI6WyJkZWJvdW5jZXIiLCJmbiIsImRlbGF5IiwidGltZXIiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2FsbCIsIkNyaXRlcmlhRWxhc3RpY1NlYXJjaFZpZXciLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJhZnRlclVzZXJMb2dpbiIsImlzX3VzZXJfaW5zdXJhbmNlX2FjdGl2ZSIsInVzZXJfaW5zdXJhbmNlX3N0YXR1cyIsImRlZmF1bHRQcm9maWxlIiwicHJvZmlsZXMiLCJpbnN1cmFuY2Vfc3RhdHVzIiwic2V0U3RhdGUiLCJzaG93UHJlc2NyaXB0aW9uSW5zdXJhbmNlRXJyb3IiLCJzdGF0ZSIsInNlYXJjaFZhbHVlIiwic2VhcmNoUmVzdWx0cyIsImxvYWRpbmciLCJzZWFyY2hDaXRpZXMiLCJjdXJyZW50VGVzdFR5cGUiLCJ0eXBlIiwidmlzaWJsZVR5cGUiLCJjb21wb25lbnREaWRNb3VudCIsImdldFNlYXJjaFJlc3VsdHMiLCJiaW5kIiwiaW5wdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwid2luZG93Iiwic2Nyb2xsIiwiaGlzdG9yeSIsImFjdGlvbiIsImxvY2F0aW9uIiwic2VhcmNoIiwiaW5jbHVkZXMiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsSW50b1ZpZXciLCJzZWxlY3RTZWFyY2hUeXBlIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsImVsYXN0aWNTZWFyY2hTdHJpbmciLCJpbnB1dEhhbmRsZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZWFyY2hTdHJpbmciLCJ0cmltIiwibGVuZ3RoIiwidG9nZ2xlRml4ZWRNb2JpbGVGb290ZXIiLCJ0ZXh0SW5wdXQiLCJmb2N1cyIsInRleHRJbnB1dF9kZXNrdG9wIiwiY2hhbmdlU2VsZWN0aW9uIiwibGF0IiwibG9uZyIsInBsYWNlX2lkIiwiZGF0YVN0YXRlIiwic2VsZWN0ZWRMb2NhdGlvbiIsImdlb21ldHJ5IiwibG5nIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJMQUJfVFlQRVMiLCJPUERfVFlQRVMiLCJQUk9DRURVUkVfVFlQRVMiLCJJUERfVFlQRVMiLCJmaWx0ZXJSZXN1bHRzIiwiZ2V0RWxhc3RpY0NyaXRlcmlhUmVzdWx0cyIsImFsbFNlYXJjaFJlc3VsdHMiLCJQcm9taXNlIiwiYWxsIiwidGhlbiIsImZpbHRlclNlYXJjaFJlc3VsdHMiLCJzdWdnZXN0aW9uIiwiaW5kZXhPZiIsImZpbHRlclJlc3VsdHNOYW1lIiwibWFwIiwieCIsIm5hbWUiLCJqb2luIiwiZ3RtRGF0YSIsIkdUTSIsImdldFVzZXJJZCIsInNlbmRFdmVudCIsImRhdGEiLCJmaWx0ZXJEYXRhIiwic2VhcmNoZWRDYXRlZ29yaWVzIiwic3VnZ2VzdGVkQ2F0ZWdvcmllcyIsImFkZENyaXRlcmlhIiwiY3JpdGVyaWEiLCJPYmplY3QiLCJhc3NpZ24iLCJldmVudCIsImlkIiwicGFyYW0iLCJzZWFyY2hQcm9jZWVkIiwicHVzaCIsImNsb25lQ29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMiLCJzaG93UmVzdWx0cyIsImlwZERhdGEiLCJ1cmwiLCJ0b2dnbGVJcGQiLCJjbGVhckV4dHJhVGVzdHMiLCJ0ZXN0X3R5cGUiLCJpc19wYWNrYWdlIiwidG9nZ2xlUGFja2FnZXMiLCJ0b2dnbGVMYWJUZXN0cyIsImdldENpdHlMaXN0TGF5b3V0Iiwic2VsZWN0TG9jYXRpb24iLCJjaXR5IiwiY2hpbGQiLCJmb2N1c091dCIsInJlbmRlciIsImhpZGVIZWFkZXJPbk1vYmlsZSIsIkFTU0VUU19CQVNFX1VSTCIsImdvQmFjayIsInNlbGVjdGVkIiwicmVmIiwidGl0bGUiLCJnbyIsIndpZHRoIiwicmVzdWx0IiwiaSIsImRlc2NyaXB0aW9uIiwidmFsdWVzIiwiY3Vyc29yIiwidmlzaWJsZV9uYW1lIiwiY2F0IiwiaiIsImltYWdlX3BhdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW4iLCJwYWRkaW5nIiwibnVtYmVyX29mX3Rlc3RzIiwibG9jYWxpdHkiLCJBcnJheSIsImlzQXJyYXkiLCJwcmltYXJ5X25hbWUiLCJzbGljZSIsInBvcHVsYXJpdHkiLCJjaGVja0ZvckxvYWQiLCJjaGlsZHJlbiIsImNsaW5pY19jYXJkIiwibGFiX2NhcmQiLCJzZWFyY2hFbGFzdGljVmlldyIsIm5ld0NoYXRCdG4iLCJjcml0ZXJpYUVsYXN0aWNTZWFyY2hWaWV3Iiwic2VhcmNoVmlldyIsInF1ZXJ5U3RyaW5nIiwicmVxdWlyZSIsIlNlYXJjaFZpZXciLCJzY3JvbGxUbyIsInBhcnNlZCIsInBhcnNlIiwiZnJvbSIsInNlYXJjaFByb2NlZWRPUEQiLCJkb2N0b3JfbmFtZSIsImhvc3BpdGFsX25hbWUiLCJtZXJnZU9QRFN0YXRlIiwiZmlsdGVyQ3JpdGVyaWEiLCJwYWdlIiwicGF0aG5hbWUiLCJzZWFyY2hfYmFjayIsInNlYXJjaFByb2NlZWRMQUIiLCJsYWJfbmFtZSIsIm1lcmdlTEFCU3RhdGUiLCJzaG93RG9jdG9ycyIsImxvY2F0aW9uVHlwZSIsImZvY3VzSW5wdXQiLCJmaWx0ZXJTZWxlY3RlZENyaXRlcmlhIiwic2VsZWN0ZWRDcml0ZXJpYXMiLCJmaWx0ZXIiLCJzaG93TGFicyIsImRpc3BsYXkiLCJMT0FERURfU0VBUkNIX0NSSVRFUklBX09QRCIsInRvZ2dsZU9QRENyaXRlcmlhIiwic3BlY2lhbGl6YXRpb25zIiwiY29uZGl0aW9ucyIsIkxPQURFRF9TRUFSQ0hfQ1JJVEVSSUFfTEFCIiwidG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEiLCJjb21tb25fdGVzdHMiLCJwcm9jZWR1cmVfY2F0ZWdvcmllcyIsIlNlYXJjaEVsYXN0aWNWaWV3Iiwic2hvd0ZpeGVkTW9iaWxlRm9vdGVyIiwic2VsZWN0ZWRTZWFyY2hUeXBlIiwicGFnZVR5cGUiLCJob3NwaXRhbF9pZCIsIm5leHRGaWx0ZXJDcml0ZXJpYSIsImNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzIiwic2hvd19hbGxfbGFicyIsImN1cnJlbnRTZWFyY2hlZENyaXRlcmlhcyIsIm5leHRTZWxlY3RlZENyaXRlcmlhcyIsInNlbGVjdGVkVGVzdElkcyIsInRlc3QiLCJzZWxlY3RlZFRlc3RzTmFtZSIsInNlYXJjaFByb2NlZWRQYWNrYWdlcyIsInNlbGVjdGVkUGFja2FnZXNJZHMiLCJzZWxlY3RlZFBhY2thZ2VzIiwic2V0UGFja2FnZUlkIiwic2V0Q29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMiLCJzaG93UGFja2FnZXMiLCJjbGlja1BvcFVwIiwic2VhcmNoUHJvY2VlZElQRCIsInNob3dJUEQiLCJzZWxlY3RlZENyaXRlcmlhIiwidG9nZ2xlSVBEQ3JpdGVyaWEiLCJ0b1Nob3ciLCJjb21tb25TZWFyY2hlZCIsImNvbW1vbl9wYWNrYWdlIiwiaXBkX3Byb2NlZHVyZXMiLCJpc19sb2dpbl91c2VyX2luc3VyZWQiLCJTZWFyY2giLCJ3aGljaCIsIk9QRF9TVEFURSIsImxvYWRPUERDb21tb25Dcml0ZXJpYSIsInJlc2V0RmlsdGVycyIsImxvYWRMYWJDb21tb25Dcml0ZXJpYXMiLCJDT05GSUciLCJTRUFSQ0hfRUxBU1RJQ19WSUVXIiwiSVBEX1NUQVRFIiwiTEFCX1NUQVRFIiwiY29tbW9uX3NldHRpbmdzIiwiY29udGV4dFR5cGVzIiwicm91dGVyIiwibWFwU3RhdGVUb1Byb3BzIiwicHJvY2VkdXJlcyIsIlNFQVJDSF9DUklURVJJQV9PUEQiLCJjb21tb25fY29uZGl0aW9ucyIsInByZWZlcnJlZF9sYWJzIiwiZmlsdGVyQ3JpdGVyaWFQYWNrYWdlcyIsIlNFQVJDSF9DUklURVJJQV9MQUJTIiwiU0VBUkNIX0NSSVRFUklBX0lQRCIsIlVTRVIiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImdldE9QRENyaXRlcmlhUmVzdWx0cyIsImNhbGxiYWNrIiwiZmV0Y2hOZXdSZXN1bHRzIiwiZm9yY2VBZGQiLCJnZXREaWFnbm9zaXNDcml0ZXJpYVJlc3VsdHMiLCJjbGVhckFsbFRlc3RzIiwicGFja2FnZV9pZCIsImlzSG9tZVBhZ2UiLCJ0b2dnbGVTZWFyY2hQYWNrYWdlcyIsImhlYWx0aFBhY2thZ2UiLCJsb2FkT1BESW5zdXJhbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxNQUFNQSxZQUFZLENBQUNDLEVBQUQsRUFBS0MsS0FBTCxLQUFlO0FBQzdCLFFBQUlDLFFBQVEsSUFBWjtBQUNBLFdBQU8sWUFBWTtBQUNmQyxxQkFBYUQsS0FBYjtBQUNBQSxnQkFBUUUsV0FBVyxNQUFNO0FBQ3JCSixlQUFHSyxJQUFILENBQVEsSUFBUjtBQUNILFNBRk8sRUFFTEosS0FGSyxDQUFSO0FBR0gsS0FMRDtBQU1ILENBUkQ7O0FBV0EsTUFBTUsseUJBQU4sU0FBd0NDLGdCQUFNQyxTQUE5QyxDQUF3RDtBQUNwREMsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixj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SSxTQUFTLDZCQUFULENBYnBCO0FBY0hNLHVCQUFlLE1BQU1OLFNBQVMsMkJBQVQsQ0FkbEI7QUFlSHJFLHVCQUFlLENBQUN4SixLQUFELEVBQVFnTyxlQUFSLEtBQTRCSCxTQUFTLDBCQUFjN04sS0FBZCxFQUFxQmdPLGVBQXJCLENBQVQsQ0FmeEM7QUFnQkh6TSwwQkFBbUJqQixJQUFELElBQVV1TixTQUFTLDZCQUFpQnZOLElBQWpCLENBQVQsQ0FoQnpCO0FBaUJIK0MsbUNBQTJCLENBQUN0QixZQUFELEVBQWV6QixJQUFmLEVBQXFCWSxRQUFyQixFQUErQjZNLFFBQS9CLEtBQTRDRixTQUFTLHNDQUEwQjlMLFlBQTFCLEVBQXdDekIsSUFBeEMsRUFBOENZLFFBQTlDLEVBQXdENk0sUUFBeEQsQ0FBVCxDQWpCcEU7QUFrQkg7QUFDQXRDLHNCQUFjLENBQUMyQyxVQUFELEVBQWFDLFVBQWIsS0FBNEJSLFNBQVMseUJBQWFPLFVBQWIsRUFBeUJDLFVBQXpCLENBQVQsQ0FuQnZDO0FBb0JIQyw4QkFBdUJDLGFBQUQsSUFBbUJWLFNBQVMsaUNBQXFCVSxhQUFyQixDQUFULENBcEJ0QztBQXFCSHZDLDJCQUFtQixDQUFDckgsUUFBRCxFQUFXc0osUUFBWCxLQUF3QkosU0FBUyw4QkFBa0JsSixRQUFsQixFQUE0QnNKLFFBQTVCLENBQVQsQ0FyQnhDO0FBc0JITywwQkFBbUJ6SSxJQUFELElBQVU4SCxTQUFTLDZCQUFpQjlILElBQWpCLENBQVQ7QUF0QnpCLEtBQVA7QUF3QkgsQ0F6QkQ7O2tCQTRCZSx5QkFBUW9ILGVBQVIsRUFBeUJTLGtCQUF6QixFQUE2Q3RCLE1BQTdDLEMiLCJmaWxlIjoiNjMuc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9Mb2FkZXInXG5cbmltcG9ydCBMZWZ0QmFyIGZyb20gJy4uL0xlZnRCYXInXG5pbXBvcnQgUmlnaHRCYXIgZnJvbSAnLi4vUmlnaHRCYXInXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5pbXBvcnQgTG9jYXRpb25FbGVtZW50cyBmcm9tICcuLi8uLi8uLi9jb250YWluZXJzL2NvbW1vbnMvbG9jYXRpb25FbGVtZW50cydcbmltcG9ydCBJbml0aWFsc1BpY3R1cmUgZnJvbSAnLi4vaW5pdGlhbHNQaWN0dXJlJ1xuaW1wb3J0IFByZXNjcmlwdGlvblVwbG9hZCBmcm9tICcuLi8uLi8uLi9jb250YWluZXJzL2NvbW1vbnMvUHJlc2NyaXB0aW9uVXBsb2FkLmpzJ1xuXG5jb25zdCBkZWJvdW5jZXIgPSAoZm4sIGRlbGF5KSA9PiB7XG4gICAgbGV0IHRpbWVyID0gbnVsbFxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGZuLmNhbGwodGhpcylcbiAgICAgICAgfSwgZGVsYXkpXG4gICAgfVxufVxuXG5cbmNsYXNzIENyaXRlcmlhRWxhc3RpY1NlYXJjaFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICBcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlYXJjaFZhbHVlOiAnJyxcbiAgICAgICAgICAgIHNlYXJjaFJlc3VsdHM6IFtdLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBzZWFyY2hDaXRpZXM6IFtdLFxuICAgICAgICAgICAgY3VycmVudFRlc3RUeXBlOiB7fSxcbiAgICAgICAgICAgIHR5cGU6ICcnLFxuICAgICAgICAgICAgdmlzaWJsZVR5cGU6ICcnLFxuICAgICAgICAgICAgaXNfdXNlcl9pbnN1cmFuY2VfYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dQcmVzY3JpcHRpb25JbnN1cmFuY2VFcnJvcjogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmdldFNlYXJjaFJlc3VsdHMgPSBkZWJvdW5jZXIodGhpcy5nZXRTZWFyY2hSZXN1bHRzLmJpbmQodGhpcyksIDIwMClcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvcENyaXRlcmlhU2VhcmNoJylcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbCgwLCAwKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHVzZXJfaW5zdXJhbmNlX3N0YXR1cyA9IG51bGxcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGUgJiYgdGhpcy5wcm9wcy5wcm9maWxlcyAmJiB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGVdKSB7XG4gICAgICAgICAgICB1c2VyX2luc3VyYW5jZV9zdGF0dXMgPSB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGVdLmluc3VyYW5jZV9zdGF0dXNcbiAgICAgICAgfVxuICAgICAgICB1c2VyX2luc3VyYW5jZV9zdGF0dXMgPSAodXNlcl9pbnN1cmFuY2Vfc3RhdHVzPT0xIHx8IHVzZXJfaW5zdXJhbmNlX3N0YXR1cz09NSB8fCB1c2VyX2luc3VyYW5jZV9zdGF0dXM9PTQgfHwgdXNlcl9pbnN1cmFuY2Vfc3RhdHVzPT03KVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtpc191c2VyX2luc3VyYW5jZV9hY3RpdmU6IHVzZXJfaW5zdXJhbmNlX3N0YXR1c30pXG5cbiAgICAgICAgLy8gaWYgY29taW5nIGJhY2sgb3IgcmVmcmVzaCBmb2N1cyBvbiBzZWFyY2ggYmFyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmhpc3RvcnkuYWN0aW9uID09PSAnUE9QJyAmJiAhdGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoJ3NlYXJjaCcpKSB7XG4gICAgICAgICAgICAvLyBpbnB1dC5mb2N1cygpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3BDcml0ZXJpYVNlYXJjaCcpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9wQ3JpdGVyaWFTZWFyY2gnKS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgKCkgPT4geyB0aGlzLnNldFN0YXRlKHsgc2VhcmNoQ2l0aWVzOiAnJyB9KSB9KVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaF9yZXN1bHRzX3ZpZXcnKSAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoX2JhcicpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoX2JhcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaF9yZXN1bHRzX3ZpZXcnKS5zY3JvbGxJbnRvVmlldygpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0U2VhcmNoVHlwZSh0aGlzLnByb3BzLnR5cGUpXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudHlwZSAhPSBuZXh0UHJvcHMudHlwZSkge1xuXG4gICAgICAgICAgICBpZiAobmV4dFByb3BzLmVsYXN0aWNTZWFyY2hTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoVmFsdWU6IG5leHRQcm9wcy5lbGFzdGljU2VhcmNoU3RyaW5nLCBzZWFyY2hSZXN1bHRzOiBbXSB9KVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U2VhcmNoUmVzdWx0cygpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hWYWx1ZTogJycsIHNlYXJjaFJlc3VsdHM6IFtdIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbnB1dEhhbmRsZXIoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoVmFsdWU6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgIGxldCBzZWFyY2hTdHJpbmcgPSBlLnRhcmdldC52YWx1ZS50cmltKClcbiAgICAgICAgaWYgKHNlYXJjaFN0cmluZy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0U2VhcmNoUmVzdWx0cygpXG4gICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZUZpeGVkTW9iaWxlRm9vdGVyKGZhbHNlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFJlc3VsdHM6IFtdIH0pXG4gICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZUZpeGVkTW9iaWxlRm9vdGVyKHRydWUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3RTZWFyY2hUeXBlKHR5cGUpe1xuICAgICAgICBpZiAodGhpcy50ZXh0SW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dElucHV0LmZvY3VzKClcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50ZXh0SW5wdXRfZGVza3RvcCkge1xuICAgICAgICAgICAgdGhpcy50ZXh0SW5wdXRfZGVza3RvcC5mb2N1cygpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMucHJvcHMuY2hhbmdlU2VsZWN0aW9uKHR5cGUsJycpXG4gICAgfVxuXG4gICAgZ2V0U2VhcmNoUmVzdWx0cygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSlcbiAgICAgICAgbGV0IGxhdCA9IDI4LjY0NDgwMFxuICAgICAgICBsZXQgbG9uZyA9IDc3LjIxNjcyMVxuICAgICAgICBsZXQgcGxhY2VfaWQgPSBcIlwiXG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGF0YVN0YXRlLnNlbGVjdGVkTG9jYXRpb24pIHtcbiAgICAgICAgICAgIHBsYWNlX2lkID0gdGhpcy5wcm9wcy5kYXRhU3RhdGUuc2VsZWN0ZWRMb2NhdGlvbi5wbGFjZV9pZCB8fCBcIlwiXG4gICAgICAgICAgICBsYXQgPSB0aGlzLnByb3BzLmRhdGFTdGF0ZS5zZWxlY3RlZExvY2F0aW9uLmdlb21ldHJ5LmxvY2F0aW9uLmxhdFxuICAgICAgICAgICAgbG9uZyA9IHRoaXMucHJvcHMuZGF0YVN0YXRlLnNlbGVjdGVkTG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubG5nXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxhdCA9PT0gJ2Z1bmN0aW9uJykgbGF0ID0gbGF0KClcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbG9uZyA9PT0gJ2Z1bmN0aW9uJykgbG9uZyA9IGxvbmcoKVxuXG4gICAgICAgICAgICBsYXQgPSBwYXJzZUZsb2F0KHBhcnNlRmxvYXQobGF0KS50b0ZpeGVkKDYpKVxuICAgICAgICAgICAgbG9uZyA9IHBhcnNlRmxvYXQocGFyc2VGbG9hdChsb25nKS50b0ZpeGVkKDYpKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxvY2F0aW9uID0geyBsYXQ6IGxhdCwgbG9uZzogbG9uZyB9XG5cbiAgICAgICAgbGV0IExBQl9UWVBFUyA9IFsnbGFiX3Rlc3Rfc3lub255bScsICdsYWJfdGVzdCcsICdsYWInXVxuXG4gICAgICAgIGxldCBPUERfVFlQRVMgPSBbJ3Zpc2l0X3JlYXNvbicsICdwcmFjdGljZV9zcGVjaWFsaXphdGlvbicsICdkb2N0b3InLCAnaG9zcGl0YWwnLCAncHJhY3RpY2Vfc3BlY2lhbGl6YXRpb25fc3lub255bSddXG5cbiAgICAgICAgbGV0IFBST0NFRFVSRV9UWVBFUyA9IFsncHJvY2VkdXJlX2NhdGVnb3J5JywgJ3Byb2NlZHVyZSddXG5cbiAgICAgICAgbGV0IElQRF9UWVBFUyA9IFsnaXBkJ11cblxuICAgICAgICBsZXQgdHlwZSA9ICcnXG4gICAgICAgIGxldCB2aXNpYmxlVHlwZSA9ICcnXG4gICAgICAgIGxldCBmaWx0ZXJSZXN1bHRzID0gdGhpcy5wcm9wcy5nZXRFbGFzdGljQ3JpdGVyaWFSZXN1bHRzKHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUudHJpbSgpLCB0aGlzLnByb3BzLnR5cGUuaW5jbHVkZXMoJ3BhY2thZ2UnKSA/ICd0ZXN0JyA6IHRoaXMucHJvcHMudHlwZSwgbG9jYXRpb24pXG5cbiAgICAgICAgbGV0IGFsbFNlYXJjaFJlc3VsdHMgPSB0aGlzLnByb3BzLmdldEVsYXN0aWNDcml0ZXJpYVJlc3VsdHModGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZS50cmltKCksICcnLCBsb2NhdGlvbilcblxuICAgICAgICBQcm9taXNlLmFsbChbZmlsdGVyUmVzdWx0cywgYWxsU2VhcmNoUmVzdWx0c10pLnRoZW4oKFtmaWx0ZXJTZWFyY2hSZXN1bHRzLCBzZWFyY2hSZXN1bHRzXSkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoc2VhcmNoUmVzdWx0cyAmJiBzZWFyY2hSZXN1bHRzLnN1Z2dlc3Rpb24gJiYgc2VhcmNoUmVzdWx0cy5zdWdnZXN0aW9uLmxlbmd0aCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKExBQl9UWVBFUy5pbmRleE9mKHNlYXJjaFJlc3VsdHMuc3VnZ2VzdGlvblswXS50eXBlKSA+IC0xICYmIHRoaXMucHJvcHMudHlwZSAhPSAnbGFiJykge1xuXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnbGFiJ1xuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlVHlwZSA9IHNlYXJjaFJlc3VsdHMuc3VnZ2VzdGlvblswXVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoT1BEX1RZUEVTLmluZGV4T2Yoc2VhcmNoUmVzdWx0cy5zdWdnZXN0aW9uWzBdLnR5cGUpID4gLTEgJiYgdGhpcy5wcm9wcy50eXBlICE9ICdvcGQnKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICdvcGQnXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGVUeXBlID0gc2VhcmNoUmVzdWx0cy5zdWdnZXN0aW9uWzBdXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChJUERfVFlQRVMuaW5kZXhPZihzZWFyY2hSZXN1bHRzLnN1Z2dlc3Rpb25bMF0udHlwZSkgPiAtMSAmJiB0aGlzLnByb3BzLnR5cGUgIT0gJ2lwZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICdpcGQnXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGVUeXBlID0gc2VhcmNoUmVzdWx0cy5zdWdnZXN0aW9uWzBdXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLyplbHNlIGlmKFBST0NFRFVSRV9UWVBFUy5pbmRleE9mKHNlYXJjaFJlc3VsdHMuc3VnZ2VzdGlvblswXS50eXBlKT4tMSAmJiB0aGlzLnByb3BzLnR5cGUgIT0ncHJvY2VkdXJlcycpe1xuXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSAncHJvY2VkdXJlcydcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZVR5cGUgPSBzZWFyY2hSZXN1bHRzLnN1Z2dlc3Rpb25bMF1cbiAgICAgICAgICAgICAgICB9Ki9cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpbHRlclNlYXJjaFJlc3VsdHMpIHtcblxuICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJSZXN1bHRzTmFtZSA9IGZpbHRlclNlYXJjaFJlc3VsdHMuc3VnZ2VzdGlvbi5tYXAoeCA9PiB4Lm5hbWUpLmpvaW4oJywnKSB8fCAnJ1xuICAgICAgICAgICAgICAgIGxldCBndG1EYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ3NlYXJjaHF1ZXJ5JywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnc2VhcmNoLXF1ZXJ5JywgJ3NlYXJjaFN0cmluZyc6IHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICdzZWFyY2hUeXBlJzogdGhpcy5wcm9wcy50eXBlLCAncmVzdWx0cyc6IGZpbHRlclJlc3VsdHNOYW1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG4gICAgICAgICAgICAgICAgbGV0IGZpbHRlckRhdGEgPSBmaWx0ZXJTZWFyY2hSZXN1bHRzLnN1Z2dlc3Rpb25cbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5wcm9wcy50eXBlLmluY2x1ZGVzKCdwYWNrYWdlJykpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgZmlsdGVyRGF0YSA9IGZpbHRlclNlYXJjaFJlc3VsdHMuc3VnZ2VzdGlvbi5maWx0ZXIoKHgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlmICh4LmlzX3BhY2thZ2UgJiYgeC5pc19wYWNrYWdlLmxlbmd0aCAmJiB4LmlzX3BhY2thZ2VbMF0pIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgLy8gICAgIH0pXG4gICAgICAgICAgICAgICAgLy8gfSBlbHNlIGlmICh0aGlzLnByb3BzLnR5cGUuaW5jbHVkZXMoJ2xhYicpKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGZpbHRlckRhdGEgPSBmaWx0ZXJTZWFyY2hSZXN1bHRzLnN1Z2dlc3Rpb24uZmlsdGVyKCh4KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBpZiAoeC5pc19wYWNrYWdlICYmIHguaXNfcGFja2FnZS5sZW5ndGggJiYgIXguaXNfcGFja2FnZVswXSkge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFJlc3VsdHM6IGZpbHRlckRhdGEsIHNlYXJjaGVkQ2F0ZWdvcmllczogZmlsdGVyU2VhcmNoUmVzdWx0cy5zdWdnZXN0ZWRDYXRlZ29yaWVzLCBsb2FkaW5nOiBmYWxzZSwgdHlwZTogdHlwZSwgdmlzaWJsZVR5cGU6IHZpc2libGVUeXBlIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhZGRDcml0ZXJpYShjcml0ZXJpYSkge1xuXG4gICAgICAgIGNyaXRlcmlhID0gT2JqZWN0LmFzc2lnbih7fSwgY3JpdGVyaWEpXG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PSAnb3BkJyB8fCB0aGlzLnByb3BzLnR5cGUgPT0gJ3Byb2NlZHVyZXMnKSB7XG5cbiAgICAgICAgICAgIGxldCBhY3Rpb24gPSAnJywgZXZlbnQgPSAnJ1xuXG4gICAgICAgICAgICBpZiAoY3JpdGVyaWEudHlwZS5pbmNsdWRlcygndmlzaXRfcmVhc29uJykpIHtcblxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1Zpc2l0UmVhc29uU2VhcmNoZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICd2aXNpdC1yZWFzb24tc2VhcmNoZWQnLCAnU2VsZWN0ZWRJZCc6IGNyaXRlcmlhLmlkIHx8ICcnLCAnc2VhcmNoZWQnOiAnYXV0b3N1Z2dlc3QnLCAnc2VhcmNoU3RyaW5nJzogdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgICAgICAgICAgY3JpdGVyaWEuaWQgPSBjcml0ZXJpYS5hY3Rpb24udmFsdWUuam9pbignLCcpXG4gICAgICAgICAgICAgICAgY3JpdGVyaWEudHlwZSA9ICdzcGVjaWFsaXR5J1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsc2UgaWYgKGNyaXRlcmlhLmFjdGlvbi5wYXJhbS5pbmNsdWRlcygnaG9zcGl0YWxfbmFtZScpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSG9zcGl0YWxOYW1lU2VhcmNoZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdob3NwaXRhbC1uYW1lLXNlYXJjaGVkJywgJ2hvc3BpdGFsSWQnOiBjcml0ZXJpYS5hY3Rpb24uaWQgfHwgJycsICdzZWFyY2hlZCc6ICdhdXRvc3VnZ2VzdCcsICdzZWFyY2hTdHJpbmcnOiB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlIHx8ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlYXJjaFByb2NlZWQoXCJcIiwgXCJcIiwgY3JpdGVyaWEuYWN0aW9uLmlkKVxuICAgICAgICAgICAgICAgIHJldHVyblxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNyaXRlcmlhLmFjdGlvbi5wYXJhbS5pbmNsdWRlcygncHJvY2VkdXJlX2NhdGVnb3J5X2lkcycpKSB7XG5cbiAgICAgICAgICAgICAgICBjcml0ZXJpYS5pZCA9IGNyaXRlcmlhLmFjdGlvbi52YWx1ZVswXVxuICAgICAgICAgICAgICAgIGNyaXRlcmlhLnR5cGUgPSAncHJvY2VkdXJlc19jYXRlZ29yeSdcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChjcml0ZXJpYS5hY3Rpb24ucGFyYW0uaW5jbHVkZXMoJ3Byb2NlZHVyZV9pZHMnKSkge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0NvbW1vblByb2NlZHVyZXNTZWxlY3RlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NvbW1vbi1wcm9jZWR1cmVzLXNlbGVjdGVkJywgJ3NlbGVjdGVkJzogY3JpdGVyaWEubmFtZSB8fCAnJywgJ3NlbGVjdGVkSWQnOiBjcml0ZXJpYS5hY3Rpb24udmFsdWUgPyBjcml0ZXJpYS5hY3Rpb24udmFsdWVbMF0gOiAnJywgJ3NlYXJjaGVkJzogJ2F1dG9zdWdnZXN0JywgJ3NlYXJjaFN0cmluZyc6IHRoaXMuc3RhdGUuc2VhcmNoVmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICAgICAgICAgIGNyaXRlcmlhLmlkID0gY3JpdGVyaWEuYWN0aW9uLnZhbHVlWzBdXG4gICAgICAgICAgICAgICAgY3JpdGVyaWEudHlwZSA9ICdwcm9jZWR1cmVzJ1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNyaXRlcmlhLmFjdGlvbi5wYXJhbS5pbmNsdWRlcygnc3BlY2lhbGl6YXRpb25zJykpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdDb21tb25TcGVjaWFsaXphdGlvbnNTZWxlY3RlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NvbW1vbi1zcGVjaWFsaXphdGlvbnMtc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnOiBjcml0ZXJpYS5uYW1lIHx8ICcnLCAnc2VsZWN0ZWRJZCc6IGNyaXRlcmlhLmFjdGlvbi52YWx1ZSA/IGNyaXRlcmlhLmFjdGlvbi52YWx1ZVswXSA6ICcnLCAnc2VhcmNoZWQnOiAnYXV0b3N1Z2dlc3QnLCAnc2VhcmNoU3RyaW5nJzogdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgICAgICAgICAgY3JpdGVyaWEuaWQgPSBjcml0ZXJpYS5hY3Rpb24udmFsdWVbMF1cbiAgICAgICAgICAgICAgICBjcml0ZXJpYS50eXBlID0gJ3NwZWNpYWxpdHknXG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3JpdGVyaWEuYWN0aW9uLnBhcmFtLmluY2x1ZGVzKCdkb2N0b3JfbmFtZScpKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdEb2N0b3JOYW1lU2VhcmNoZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdkb2N0b3ItbmFtZS1zZWFyY2hlZCcsICdzZWxlY3RlZElkJzogY3JpdGVyaWEuYWN0aW9uLnZhbHVlWzBdIHx8ICcnLCAnc2VhcmNoZWQnOiAnYXV0b3N1Z2dlc3QnLCAnc2VhcmNoU3RyaW5nJzogdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSB8fCAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9vcGQvZG9jdG9yLyR7Y3JpdGVyaWEuYWN0aW9uLnZhbHVlWzBdfT9oaWRlX3NlYXJjaF9kYXRhPXRydWVgKVxuXG4gICAgICAgICAgICAgICAgLy90aGlzLnByb3BzLnNlYXJjaFByb2NlZWQoY3JpdGVyaWEuYWN0aW9uLnZhbHVlWzBdLFwiXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNsb25lQ29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMoY3JpdGVyaWEpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoVmFsdWU6IFwiXCIgfSlcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2hvd1Jlc3VsdHMoJ29wZCcpXG5cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnR5cGUuaW5jbHVkZXMoJ2lwZCcpKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0lQRE5hbWVTZWFyY2hlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2lwZC1uYW1lLXNlYXJjaGVkJywgJ3NlbGVjdGVkSWQnOiBjcml0ZXJpYS5hY3Rpb24udmFsdWVbMF0gfHwgJycsICdzZWFyY2hlZCc6ICdhdXRvc3VnZ2VzdCcsICdzZWFyY2hTdHJpbmcnOiB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlIHx8ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgbGV0IGlwZERhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBjcml0ZXJpYSlcbiAgICAgICAgICAgIGlwZERhdGEuaWQgPSBjcml0ZXJpYS5hY3Rpb24udmFsdWVbMF1cbiAgICAgICAgICAgIGlwZERhdGEudXJsID0gbnVsbFxuICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVJcGQoJ2lwZCcsIGlwZERhdGEsIHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUpXG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKGNyaXRlcmlhLnR5cGUgPT0gXCJsYWJcIikge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xlYXJFeHRyYVRlc3RzKClcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdMYWJOYW1lU2VhcmNoZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdsYWItbmFtZS1zZWFyY2hlZCcsICdzZWxlY3RlZElkJzogY3JpdGVyaWEuYWN0aW9uLnZhbHVlWzBdIHx8ICcnLCAnc2VhcmNoZWQnOiAnYXV0b3N1Z2dlc3QnLCAnc2VhcmNoU3RyaW5nJzogdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSB8fCAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9sYWIvJHtjcml0ZXJpYS5hY3Rpb24udmFsdWVbMF19YClcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3JpdGVyaWEudHlwZSA9PSBcImxhYl90ZXN0XCIpIHtcbiAgICAgICAgICAgICAgICBjcml0ZXJpYS50eXBlID0gJ3Rlc3QnXG4gICAgICAgICAgICAgICAgY3JpdGVyaWEudXJsID0gJydcbiAgICAgICAgICAgICAgICBjcml0ZXJpYS5pZCA9IGNyaXRlcmlhLmFjdGlvbi52YWx1ZVswXVxuICAgICAgICAgICAgICAgIGlmIChjcml0ZXJpYS5hY3Rpb24udGVzdF90eXBlICYmIGNyaXRlcmlhLmFjdGlvbi50ZXN0X3R5cGUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNyaXRlcmlhLnRlc3RfdHlwZSA9IGNyaXRlcmlhLmFjdGlvbi50ZXN0X3R5cGVbMF1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjcml0ZXJpYS50ZXN0X3R5cGUgPSAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoVmFsdWU6IFwiXCIgfSlcblxuICAgICAgICAgICAgICAgIGlmKGNyaXRlcmlhLmlzX3BhY2thZ2UgJiYgY3JpdGVyaWEuaXNfcGFja2FnZVswXSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlUGFja2FnZXMoJ3Rlc3QnLCBjcml0ZXJpYSwgdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSlcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVMYWJUZXN0cygndGVzdCcsIGNyaXRlcmlhLCB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBpZiAoIWNyaXRlcmlhLmlzX3BhY2thZ2VbMF0pIHtcblxuICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICAgICBjcml0ZXJpYS50eXBlID0gJ3BhY2thZ2UnLy9wYWNrYWdlXG4gICAgICAgICAgICAgICAgLy8gICAgIGNyaXRlcmlhLmlkID0gY3JpdGVyaWEuYWN0aW9uLnZhbHVlWzBdXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hWYWx1ZTogXCJcIiB9KVxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnByb3BzLnRvZ2dsZVNlYXJjaFBhY2thZ2VzKGNyaXRlcmlhKVxuICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgIC8qbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnVGVzdFNlbGVjdGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAndGVzdC1zZWxlY3RlZCcsICdzZWxlY3RlZCc6IGNyaXRlcmlhLm5hbWUgfHwgJycsICdzZWxlY3RlZElkJzogY3JpdGVyaWEuYWN0aW9uLnZhbHVlIHx8ICcnLCAnc2VhcmNoZWQnOiAnYXV0b3N1Z2dlc3QnLCAnc2VhcmNoU3RyaW5nJzogdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkVGVzdElkcyA9IFtdXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kYXRhU3RhdGUuc2VsZWN0ZWRDcml0ZXJpYXMubWFwKCh4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4LnRlc3RfdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUZXN0SWRzLnB1c2goeC50ZXN0X3R5cGUpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZFRlc3RJZHMubGVuZ3RoICYmIGNyaXRlcmlhLmFjdGlvbi50ZXN0X3R5cGUgJiYgY3JpdGVyaWEuYWN0aW9uLnRlc3RfdHlwZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkVGVzdElkcy5pbmRleE9mKGNyaXRlcmlhLmFjdGlvbi50ZXN0X3R5cGVbMF0pID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFRlc3RUeXBlOiBjcml0ZXJpYSwgc2VhcmNoVmFsdWU6IFwiXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnUG9wVXBPcGVuTGFiVGVzdEVycm9yJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAncG9wdXAtb3Blbi1sYWItdGVzdC1lcnJvcicsICdzZWxlY3RlZCc6IGNyaXRlcmlhLm5hbWUgfHwgJycsICdzZWxlY3RlZElkJzogY3JpdGVyaWEuYWN0aW9uLnZhbHVlIHx8ICcnLCAnc2VhcmNoZWQnOiAnYXV0b3N1Z2dlc3QnLCAnc2VhcmNoU3RyaW5nJzogdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hfcmVzdWx0c192aWV3JykpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoX3Jlc3VsdHNfdmlldycpLnNjcm9sbEludG9WaWV3KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEoJ3Rlc3QnLCBjcml0ZXJpYSkqL1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Q2l0eUxpc3RMYXlvdXQoc2VhcmNoUmVzdWx0cyA9IFtdKSB7XG4gICAgICAgIGlmIChzZWFyY2hSZXN1bHRzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaENpdGllczogc2VhcmNoUmVzdWx0cyB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaENpdGllczogW10sIHNlYXJjaFZhbHVlOiAnJyB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VsZWN0TG9jYXRpb24oY2l0eSkge1xuICAgICAgICB0aGlzLmNoaWxkLnNlbGVjdExvY2F0aW9uKChjaXR5KSwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaENpdGllczogW10gfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmb2N1c091dCgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ3NlYXJjaElucHV0Rm9jdXNPdXQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdzZWFyY2gtc3RyaW5nLW9uLWJsdXInLCAnc2VhcmNoZWQnOiAnJywgJ3NlYXJjaFN0cmluZyc6IHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUsICd0eXBlJzogdGhpcy5wcm9wcy50eXBlXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICB9XG5cbiAgICBhZnRlclVzZXJMb2dpbiA9ICgpPT57XG4gICAgICAgIGxldCBpc191c2VyX2luc3VyYW5jZV9hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgbGV0IHVzZXJfaW5zdXJhbmNlX3N0YXR1cyA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlICYmIHRoaXMucHJvcHMucHJvZmlsZXMgJiYgdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXSkge1xuICAgICAgICAgICAgdXNlcl9pbnN1cmFuY2Vfc3RhdHVzID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXS5pbnN1cmFuY2Vfc3RhdHVzXG4gICAgICAgIH1cbiAgICAgICAgaXNfdXNlcl9pbnN1cmFuY2VfYWN0aXZlID0gKHVzZXJfaW5zdXJhbmNlX3N0YXR1cz09MSB8fCB1c2VyX2luc3VyYW5jZV9zdGF0dXM9PTUgfHwgdXNlcl9pbnN1cmFuY2Vfc3RhdHVzPT00IHx8IHVzZXJfaW5zdXJhbmNlX3N0YXR1cz09NylcbiAgICAgICAgLy90aGlzLnNldFN0YXRlKHtpc191c2VyX2luc3VyYW5jZV9hY3RpdmU6IHRydWUsIHNob3dQcmVzY3JpcHRpb25JbnN1cmFuY2VFcnJvcjogdHJ1ZX0pXG4gICAgICAgIGlmKGlzX3VzZXJfaW5zdXJhbmNlX2FjdGl2ZSl7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc191c2VyX2luc3VyYW5jZV9hY3RpdmU6IHRydWUsIHNob3dQcmVzY3JpcHRpb25JbnN1cmFuY2VFcnJvcjogdHJ1ZX0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vQ2hlY2sgdXNlciBmb3IgaW5zdXJhbmNlIFxuICAgICAgICBsZXQgdXNlcl9pbnN1cmFuY2Vfc3RhdHVzID0gbnVsbFxuICAgICAgICBpZiAodGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZSAmJiB0aGlzLnByb3BzLnByb2ZpbGVzICYmIHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0pIHtcbiAgICAgICAgICAgIHVzZXJfaW5zdXJhbmNlX3N0YXR1cyA9IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0uaW5zdXJhbmNlX3N0YXR1c1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlkZUhlYWRlck9uTW9iaWxlID8gPGRpdiBjbGFzc05hbWU9XCJoaWRlLTc2MlwiPjxQcm9maWxlSGVhZGVyIHNob3dTZWFyY2g9e3RydWV9IC8+PC9kaXY+IDogPFByb2ZpbGVIZWFkZXIgc2hvd1NlYXJjaD17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e1wiY29udGFpbmVyIHBhcmVudC1zZWN0aW9uIGJvb2stYXBwb2ludG1lbnQtc2VjdGlvblwiICsgKHRoaXMucHJvcHMuaGlkZUhlYWRlck9uTW9iaWxlID8gXCIgbXAwXCIgOiBcIlwiKX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExlZnRCYXIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtbmV3LWNvbnRhaW5lciBjZW50ZXItY29sdW1uIHB0LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNlYXJjaC1iYWNrLW1haW4taWNvXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvYmFjay1pY29uLnBuZ1wifSBvbkNsaWNrPXsoKT0+IHRoaXMucHJvcHMuaGlzdG9yeS5nb0JhY2soKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ29iYWNrIGRlY2lkZXMgaWYgc2VhcmNoIGJhciB3aWxsIGJlIHNob3duXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZ29CYWNrID8gXCJcIiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtdG9wLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwic3JjaC1oZWFkaW5nXCI+U2VhcmNoPC9wPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJjaC1udy1pbnB1dHMtY29udGFpbmVyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdGVkID09ICdsYWInICYmIHRoaXMuc3RhdGUuc2hvd1ByZXNjcmlwdGlvbkluc3VyYW5jZUVycm9yP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhbHRoLWFkdmlzb3ItY29sIGQtZmxleCBhbGlnbi1pdGVtcy1zdGFydCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCIxN1wiIGNsYXNzTmFtZT1cImluZm8tZGV0YWlsLWljb25cIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pbmZvLWljb24uc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTJcIj4gRm9yIGluc3VyZWQgY3VzdG9tZXJzLCBwcmVzY3JpcHRpb24gdXBsb2FkIGlzIHJlcXVpcmVkIGF0IHRoZSB0aW1lIG9mIGJvb2tpbmc8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY3Vyc29yLXBudHJcIiB3aWR0aD1cIjE1XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcmVkLXRpbWVzLWljb24uc3ZnXCJ9IG9uQ2xpY2s9eyAoKT0+dGhpcy5zZXRTdGF0ZSh7c2hvd1ByZXNjcmlwdGlvbkluc3VyYW5jZUVycm9yOiBmYWxzZX0pIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj46JydcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYXRpb25FbGVtZW50cyB7Li4udGhpcy5wcm9wc30gb25SZWY9e3JlZiA9PiAodGhpcy5jaGlsZCA9IHJlZil9IGdldENpdHlMaXN0TGF5b3V0PXt0aGlzLmdldENpdHlMaXN0TGF5b3V0LmJpbmQodGhpcyl9IHJlc3VsdFR5cGU9J3NlYXJjaCcgZnJvbUNyaXRlcmlhPXt0cnVlfSBjb21tb25TZWFyY2hQYWdlPXt0cnVlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VhcmNoQ2l0aWVzLmxlbmd0aCA+IDAgPyBcIlwiIDogPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcmNoLXJhZGlvLWJ0bnMgaXBkLXNyY2gtcmFkaW8tYnRuXCIgaWQ9XCJzZWFyY2hfcmVzdWx0c192aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR0bC1yYWRpb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIj5Eb2N0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgb25DaGFuZ2U9e3RoaXMuc2VsZWN0U2VhcmNoVHlwZS5iaW5kKHRoaXMsICdvcGQnKX0gY2hlY2tlZD17dGhpcy5wcm9wcy5zZWxlY3RlZCA9PSAnb3BkJ30gbmFtZT1cInJhZGlvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR0bC1yYWRpb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIj5MYWIgVGVzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBvbkNoYW5nZT17dGhpcy5zZWxlY3RTZWFyY2hUeXBlLmJpbmQodGhpcywgJ2xhYicpfSBjaGVja2VkPXt0aGlzLnByb3BzLnNlbGVjdGVkID09ICdsYWInfSBuYW1lPVwicmFkaW9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb2MtY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHRsLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lci1yYWRpb1wiPkhlYWx0aCBQYWNrYWdlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5jaGFuZ2VTZWxlY3Rpb24uYmluZCh0aGlzLCAncGFja2FnZScsICcnKX0gY2hlY2tlZD17dGhpcy5wcm9wcy5zZWxlY3RlZCA9PSAncGFja2FnZSd9IG5hbWU9XCJyYWRpb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR0bC1yYWRpb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIj5TdXJnZXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG9uQ2hhbmdlPXt0aGlzLnNlbGVjdFNlYXJjaFR5cGUuYmluZCh0aGlzLCAnaXBkJyl9IGNoZWNrZWQ9e3RoaXMucHJvcHMuc2VsZWN0ZWQgPT0gJ2lwZCd9IG5hbWU9XCJyYWRpb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJjaC1udy1pbnB1dHMgbWItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgYXV0b0NvbXBsZXRlPVwib2ZmXCIgY2xhc3NOYW1lPVwiZC1ibG9jayBkLWxnLW5vbmUgbmV3LXNyY2gtZG9jLWxhYlwiIGlkPVwic2VhcmNoX2JhclwiIG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZX0gcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMudGl0bGV9IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5nb0JhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LmdvKC0xKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IG9uQmx1cj17KCkgPT4gdGhpcy5mb2N1c091dCgpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17KGlucHV0KSA9PiB7dGhpcy50ZXh0SW5wdXQgPSBpbnB1dCB9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBhdXRvQ29tcGxldGU9XCJvZmZcIiBjbGFzc05hbWU9XCJkLW5vbmUgZC1sZy1ibG9jayBuZXctc3JjaC1kb2MtbGFiXCIgaWQ9XCJzZWFyY2hfYmFyX2Rlc2t0b3BcIiBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNoVmFsdWV9IHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnRpdGxlfSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuZ29CYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5nbygtMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBvbkJsdXI9eygpID0+IHRoaXMuZm9jdXNPdXQoKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogJzE1cHgnIH19IGNsYXNzTmFtZT1cInNyY2gtaW5wLWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3NoYXBlLXNyY2guc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWQgPT0gJ2xhYicgJiYgISh0aGlzLnN0YXRlLmlzX3VzZXJfaW5zdXJhbmNlX2FjdGl2ZSk/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmVzY3JpcHRpb25VcGxvYWQgaGlzdG9yeU9iaj17dGhpcy5wcm9wcy5oaXN0b3J5fSBzZWFyY2hfbGFiPXt0cnVlfSBsb2NhdGlvbk9iaiA9IHt0aGlzLnByb3BzLmxvY2F0aW9ufSBwcm9maWxlcz17dGhpcy5wcm9wcy5wcm9maWxlc30gYWZ0ZXJVc2VyTG9naW49e3RoaXMuYWZ0ZXJVc2VyTG9naW59IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VhcmNoQ2l0aWVzLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgc2VhcmNoTWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbW9uLXNlYXJjaC1jb250YWluZXIgcHQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cInNyY2gtaGVhZGluZ1wiPkxvY2F0aW9uIFNlYXJjaDwvcD4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1vbi1saXN0aW5nLWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VhcmNoQ2l0aWVzLm1hcCgocmVzdWx0LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2l9IG9uQ2xpY2s9e3RoaXMuc2VsZWN0TG9jYXRpb24uYmluZCh0aGlzLCByZXN1bHQpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCIgPntyZXN1bHQuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VhcmNoQ2l0aWVzLmxlbmd0aCA+IDAgPyBcIlwiIDogPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlIHx8IE9iamVjdC52YWx1ZXModGhpcy5zdGF0ZS5jdXJyZW50VGVzdFR5cGUpLmxlbmd0aCA/XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzLmxlbmd0aCB8fCB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgc2VhcmNoTWFyZ2luXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tb24tc2VhcmNoLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJzcmNoLWhlYWRpbmdcIj5TZWFyY2ggUmVzdWx0czwvcD4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5zdGF0ZS5zZWFyY2hDaXRpZXMubGVuZ3RoICYmIHRoaXMuc3RhdGUudHlwZSAmJiAodGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSB8fCBPYmplY3QudmFsdWVzKHRoaXMuc3RhdGUuY3VycmVudFRlc3RUeXBlKS5sZW5ndGgpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17KCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQ2hhbmdlVHlwZUNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjaGFuZ2UtdHlwZS1jbGlja2VkJywgJ2hvc3BpdGFsSWQnOiAnJywgJ3NlYXJjaGVkJzogJycsICdzZWFyY2hTdHJpbmcnOiB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlIHx8ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNoYW5nZVNlbGVjdGlvbih0aGlzLnN0YXRlLnR5cGUsIHRoaXMuc3RhdGUudmlzaWJsZVR5cGUubmFtZSB8fCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAtMCBzcmNoLXBybnNsLXR4dFwiID5EaWQgeW91IG1lYW46IDxzcGFuIGNsYXNzTmFtZT1cInNlYXJjaC1wcm5zbC1yc2x0c1wiPnt0aGlzLnN0YXRlLnZpc2libGVUeXBlLm5hbWUgfHwgJyd9PC9zcGFuPiBpbiA8c3BhbiBjbGFzc05hbWU9XCJmdy03MDBcIj57dGhpcy5zdGF0ZS52aXNpYmxlVHlwZS52aXNpYmxlX25hbWV9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8cCBjbGFzc05hbWU9XCJzcmNoLWhlYWRpbmdcIj57Y2F0Lm5hbWV9PC9wPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbW9uLWxpc3RpbmctY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdHMubWFwKChjYXQsIGopID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2p9IG9uQ2xpY2s9e3RoaXMuYWRkQ3JpdGVyaWEuYmluZCh0aGlzLCBjYXQpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VyYWNoLXJzbHQtd2l0aC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdC50eXBlICYmIGNhdC50eXBlLmluY2x1ZGVzKCdkb2N0b3InKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKjxzcGFuIGNsYXNzTmFtZT1cInNyY2gtcnNsdC13ZC1zcGFuIHVzci1zcmNoLWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICczNXB4JywgYm9yZGVyUmFkaXVzOiAnNTAlJyB9fSBjbGFzc05hbWU9XCJcIiBzcmM9e2BodHRwczovL2Nkbi5kb2NwcmltZS5jb20vbWVkaWEvJHtjYXQuaW1hZ2VfcGF0aH1gfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5pdGlhbHNQaWN0dXJlIG5hbWU9e2NhdC5uYW1lfSBoYXNfaW1hZ2U9eyEhY2F0LmltYWdlX3BhdGh9IGNsYXNzTmFtZT1cImVsYXN0aWNJbml0YWxQaWMgaW5pdGlhbHNQaWN0dXJlLWRzIGZsdHItaW5pdGlhbFBpY3R1cmUtZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcmNoLXJzbHQtd2Qtc3BhbiB1c3Itc3JjaC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogJzM1cHgnLCBoZWlnaHQ6ICczNXB4JywgYm9yZGVyUmFkaXVzOiAnNTAlJyB9fSBjbGFzc05hbWU9XCJcIiBzcmM9e2BodHRwczovL2Nkbi5kb2NwcmltZS5jb20vbWVkaWEvJHtjYXQuaW1hZ2VfcGF0aH1gfSBhbHQ9e2NhdC5uYW1lfSB0aXRsZT17Y2F0Lm5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0luaXRpYWxzUGljdHVyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPHNwYW4gY2xhc3NOYW1lPVwic3JjaC1yc2x0LXdkLXNwYW4gdGV4dC1jZW50ZXIgc3JjaC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMjJweCcsIG1hcmdpbjogJzBweCAxMHB4JyB9fSBjbGFzc05hbWU9XCJcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zaGFwZS1zcmNoLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgcGFkZGluZzogJzAgNTBweCAwIDAnIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnR5cGUuaW5jbHVkZXMoJ2lwZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8c3BhbiBjbGFzc05hbWU9XCJzZWFyY2gtc3Bhbi1zdWJcIj5JUEQgUHJvY2VkdXJlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNhdC5pc19wYWNrYWdlICYmIGNhdC5pc19wYWNrYWdlLmxlbmd0aCAmJiBjYXQuaXNfcGFja2FnZVswXSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlYXJjaC1zcGFuLXN1YlwiPkhlYWx0aCBQYWNrYWdlIHtjYXQubnVtYmVyX29mX3Rlc3RzICYmIGNhdC5udW1iZXJfb2ZfdGVzdHMubGVuZ3RoICYmIGNhdC5udW1iZXJfb2ZfdGVzdHNbMF0gPyBgIHwgJHtjYXQubnVtYmVyX29mX3Rlc3RzWzBdfSBUZXN0IEluY2x1ZGVkYCA6ICcnfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjYXQudHlwZSA9PSBcImhvc3BpdGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPHNwYW4gY2xhc3NOYW1lPVwic2VhcmNoLXNwYW4tc3ViXCI+e2NhdC5sb2NhbGl0eSAmJiBBcnJheS5pc0FycmF5KGNhdC5sb2NhbGl0eSkgPyBjYXQubG9jYWxpdHkuam9pbignLCAnKSA6IGNhdC52aXNpYmxlX25hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8c3BhbiBjbGFzc05hbWU9XCJzZWFyY2gtc3Bhbi1zdWJcIj57Y2F0LnR5cGUuaW5jbHVkZXMoJ2RvY3RvcicpICYmIGNhdC5wcmltYXJ5X25hbWUgJiYgQXJyYXkuaXNBcnJheShjYXQucHJpbWFyeV9uYW1lKSA/IGNhdC5wcmltYXJ5X25hbWUuc2xpY2UoMCwgMikuam9pbignLCAnKSA6IGNhdC52aXNpYmxlX25hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0LnBvcHVsYXJpdHkgJiYgY2F0LnBvcHVsYXJpdHkgPj0gNTAwMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdWxhci10eHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMFwiPlBvcHVsYXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Lm5hbWUgJiYgY2F0Lm5hbWUuaW5jbHVkZXMoJ0Fhcm9neWFtIEMnKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdWxhci10eHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMFwiPlBvcHVsYXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZS5sZW5ndGggPiAyICYmICh0aGlzLnByb3BzLnR5cGUgPT0gJ29wZCcgfHwgdGhpcy5wcm9wcy50eXBlID09ICdwcm9jZWR1cmVzJykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPGxpIG9uQ2xpY2s9eygpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdEb2N0b3JOYW1lU2VhcmNoZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdkb2N0b3ItbmFtZS1zZWFyY2hlZCcsICdzZWxlY3RlZElkJzogJycsICdzZWFyY2hlZCc6ICcnLCAnc2VhcmNoU3RyaW5nJzogdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWFyY2hQcm9jZWVkKHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUsIFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJhY2gtcnNsdC13aXRoLWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyY2gtcnNsdC13ZC1zcGFuIHRleHQtY2VudGVyIHNyY2gtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcyMHB4JywgbWFyZ2luOiAnMHB4IDEwcHgnIH19IGNsYXNzTmFtZT1cIlwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3NoYXBlLXNyY2guc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAtMFwiID5TZWFyY2ggYWxsIERvY3RvcnMgd2l0aCBuYW1lIDo8c3BhbiBjbGFzc05hbWU9XCJzZWFyY2gtZWwtY29kZS1ib2xkXCI+e3RoaXMuc3RhdGUuc2VhcmNoVmFsdWV9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICh0aGlzLnN0YXRlLnNlYXJjaFZhbHVlLmxlbmd0aCA+IDIgJiYgdGhpcy5wcm9wcy50eXBlLmluY2x1ZGVzKCdsYWInKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPGxpIG9uQ2xpY2s9eygpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0xhYk5hbWVTZWFyY2hlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2xhYi1uYW1lLXNlYXJjaGVkJywgJ3NlbGVjdGVkSWQnOiAnJywgJ3NlYXJjaGVkJzogJycsICdzZWFyY2hTdHJpbmcnOiB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlIHx8ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlYXJjaFByb2NlZWQodGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VyYWNoLXJzbHQtd2l0aC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3JjaC1yc2x0LXdkLXNwYW4gdGV4dC1jZW50ZXIgc3JjaC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcyMnB4JywgbWFyZ2luOiAnMHB4IDEwcHgnIH19IGNsYXNzTmFtZT1cIlwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3NoYXBlLXNyY2guc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicC0wXCIgPlNlYXJjaCBhbGwgTGFicyB3aXRoIG5hbWUgOjxzcGFuIGNsYXNzTmFtZT1cInNlYXJjaC1lbC1jb2RlLWJvbGRcIj57dGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUubGVuZ3RoID4gMiAmJiAodGhpcy5wcm9wcy50eXBlID09ICdwYWNrYWdlJykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8bGkgb25DbGljaz17KCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdQYWNrYWdlTmFtZVNlYXJjaGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAncGFja2FnZS1uYW1lLXNlYXJjaGVkJywgJ3NlbGVjdGVkSWQnOiAnJywgJ3NlYXJjaGVkJzogJycsICdzZWFyY2hTdHJpbmcnOiB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlIHx8ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlYXJjaFByb2NlZWQodGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJhY2gtcnNsdC13aXRoLWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3JjaC1yc2x0LXdkLXNwYW4gdGV4dC1jZW50ZXIgc3JjaC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMjJweCcsIG1hcmdpbjogJzBweCAxMHB4JyB9fSBjbGFzc05hbWU9XCJcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zaGFwZS1zcmNoLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicC0wXCIgPlNlYXJjaCBhbGwgUGFja2FnZXMgd2l0aCBuYW1lIDo8c3BhbiBjbGFzc05hbWU9XCJzZWFyY2gtZWwtY29kZS1ib2xkXCI+e3RoaXMuc3RhdGUuc2VhcmNoVmFsdWV9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLnNlYXJjaFZhbHVlLmxlbmd0aCA+IDIgJiYgKHRoaXMucHJvcHMudHlwZSA9PSAnb3BkJyB8fCB0aGlzLnByb3BzLnR5cGUgPT0gJ3Byb2NlZHVyZXMnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8bGkgb25DbGljaz17KCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0hvc3BpdGFsTmFtZVNlYXJjaGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnaG9zcGl0YWwtbmFtZS1zZWFyY2hlZCcsICdob3NwaXRhbElkJzogJycsICdzZWFyY2hlZCc6ICcnLCAnc2VhcmNoU3RyaW5nJzogdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWFyY2hQcm9jZWVkKFwiXCIsIHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJhY2gtcnNsdC13aXRoLWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyY2gtcnNsdC13ZC1zcGFuIHRleHQtY2VudGVyIHNyY2gtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcyMHB4JywgbWFyZ2luOiAnMHB4IDEwcHgnIH19IGNsYXNzTmFtZT1cIlwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3NoYXBlLXNyY2guc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAtMFwiID5TZWFyY2ggYWxsIEhvc3BpdGFscyB3aXRoIG5hbWUgOjxzcGFuIGNsYXNzTmFtZT1cInNlYXJjaC1lbC1jb2RlLWJvbGRcIj57dGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAodGhpcy5wcm9wcy5jaGVja0ZvckxvYWQgPyB0aGlzLnByb3BzLmNoaWxkcmVuIDogPExvYWRlciAvPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xpbmljX2NhcmQgfHwgdGhpcy5wcm9wcy5sYWJfY2FyZCB8fCB0aGlzLnByb3BzLnNlYXJjaEVsYXN0aWNWaWV3ID8gJycgOiA8UmlnaHRCYXIgZXh0cmFDbGFzcz1cIiBjaGF0LWZsb2F0LWJ0bi0yXCIgbmV3Q2hhdEJ0bj17dGhpcy5wcm9wcy5uZXdDaGF0QnRufSBtc2dUZW1wbGF0ZT1cImdvbGRfZ2VuZXJhbF90ZW1wbGF0ZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IENyaXRlcmlhRWxhc3RpY1NlYXJjaFZpZXdcbiIsImltcG9ydCBjcml0ZXJpYUVsYXN0aWNTZWFyY2hWaWV3IGZyb20gJy4vY3JpdGVyaWFFbGFzdGljU2VhcmNoVmlldydcblxuZXhwb3J0IGRlZmF1bHQgY3JpdGVyaWFFbGFzdGljU2VhcmNoVmlldyIsImltcG9ydCBzZWFyY2hWaWV3IGZyb20gJy4vc2VhcmNoVmlldy5qcydcblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoVmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgQ29tbW9ubHlTZWFyY2hlZCBmcm9tICcuLi8uLi9jb21tb25zL2NvbW1vbmx5U2VhcmNoZWQvaW5kZXguanMnXG5pbXBvcnQgQ3JpdGVyaWFTZWFyY2ggZnJvbSAnLi4vLi4vY29tbW9ucy9jcml0ZXJpYVNlYXJjaCdcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5pbXBvcnQgTGVmdEJhciBmcm9tICcuLi9MZWZ0QmFyJ1xuaW1wb3J0IFJpZ2h0QmFyIGZyb20gJy4uL1JpZ2h0QmFyJ1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vRGVza3RvcFByb2ZpbGVIZWFkZXInXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuXG5jbGFzcyBTZWFyY2hWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG5cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ09wZW5TZWFyY2hQYWdlJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiBgb3Blbi1zZWFyY2gtZnJvbS0ke3BhcnNlZC5mcm9tIHx8IFwiZGVmYXVsdFwifWAsIGZyb206IHBhcnNlZC5mcm9tXG4gICAgICAgIH1cblxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgIH1cblxuICAgIHNlYXJjaFByb2NlZWRPUEQoZG9jdG9yX25hbWUgPSBcIlwiLCBob3NwaXRhbF9uYW1lID0gXCJcIikge1xuICAgICAgICAvLyBoYW5kbGUgZG9jdG9yIG5hbWUsIGhvc3BpdGFsIG5hbWVcbiAgICAgICAgdGhpcy5wcm9wcy5tZXJnZU9QRFN0YXRlKHtcbiAgICAgICAgICAgIGZpbHRlckNyaXRlcmlhOiB7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5maWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgICAgICAgICBkb2N0b3JfbmFtZSwgaG9zcGl0YWxfbmFtZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhZ2U6IDFcbiAgICAgICAgfSwgdHJ1ZSlcblxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnU2hvd0RvY3RvcnNDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnc2hvdy1kb2N0b3JzLWNsaWNrZWQnXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCh7XG4gICAgICAgICAgICBwYXRobmFtZTogJy9vcGQvc2VhcmNocmVzdWx0cycsXG4gICAgICAgICAgICBzdGF0ZTogeyBzZWFyY2hfYmFjazogdHJ1ZSB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc2VhcmNoUHJvY2VlZExBQihsYWJfbmFtZSA9IFwiXCIpIHtcbiAgICAgICAgLy8gaGFuZGxlIGRvY3RvciBuYW1lLCBob3NwaXRhbCBuYW1lXG4gICAgICAgIHRoaXMucHJvcHMubWVyZ2VMQUJTdGF0ZSh7XG4gICAgICAgICAgICBmaWx0ZXJDcml0ZXJpYToge1xuICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuZmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgICAgICAgICAgbGFiX25hbWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYWdlOiAxXG4gICAgICAgIH0sIHRydWUpXG5cbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goe1xuICAgICAgICAgICAgcGF0aG5hbWU6ICcvbGFiL3NlYXJjaHJlc3VsdHMnLFxuICAgICAgICAgICAgc3RhdGU6IHsgc2VhcmNoX2JhY2s6IHRydWUgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHNob3dEb2N0b3JzKHR5cGUpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubG9jYXRpb25UeXBlID09IFwiZ2VvXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c0lucHV0OiAxIH0pXG4gICAgICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZmlsdGVyU2VsZWN0ZWRDcml0ZXJpYSh0eXBlKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT0gJ29wZCcpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2xvbmVDb21tb25TZWxlY3RlZENyaXRlcmlhcyh0aGlzLnByb3BzLnNlbGVjdGVkQ3JpdGVyaWFzLmZpbHRlcih4ID0+ICF4LnR5cGUuaW5jbHVkZXMoXCJwcm9jZWR1cmVzXCIpKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2xvbmVDb21tb25TZWxlY3RlZENyaXRlcmlhcyh0aGlzLnByb3BzLnNlbGVjdGVkQ3JpdGVyaWFzLmZpbHRlcih4ID0+IHgudHlwZS5pbmNsdWRlcyhcInByb2NlZHVyZXNcIikpKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZWFyY2hQcm9jZWVkT1BEKFwiXCIsIFwiXCIpXG4gICAgfVxuXG4gICAgc2hvd0xhYnMoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uVHlwZSA9PSBcImdlb1wiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNJbnB1dDogMSB9KVxuICAgICAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlYXJjaFByb2NlZWRMQUIoXCJcIilcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibWFwXCIgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19PjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZCA9PSBcIm9wZFwiID8gPENyaXRlcmlhU2VhcmNoIHsuLi50aGlzLnByb3BzfSBjaGVja0ZvckxvYWQ9e3RoaXMucHJvcHMuTE9BREVEX1NFQVJDSF9DUklURVJJQV9PUER9IHRpdGxlPVwiU2VhcmNoIGZvciBkb2N0b3Igb3IgZGlzZWFzZVwiIHR5cGU9XCJvcGRcIiBwYWRkaW5nVG9wQ2xhc3M9e3RydWV9IHNlYXJjaFByb2NlZWQ9e3RoaXMuc2VhcmNoUHJvY2VlZE9QRC5iaW5kKHRoaXMpfSBmb2N1c0lucHV0PXt0aGlzLnN0YXRlLmZvY3VzSW5wdXR9IGhpZGVIZWFkZXJPbk1vYmlsZT17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwib3BkLXNlYXJjaC1zZWN0aW9uIG1ibC1wZG5nLXplcm9cIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5zZWxlY3RlZENyaXRlcmlhcyAmJiB0aGlzLnByb3BzLnNlbGVjdGVkQ3JpdGVyaWFzLmZpbHRlcih4ID0+ICF4LnR5cGUuaW5jbHVkZXMoXCJwcm9jZWR1cmVzXCIpKS5sZW5ndGggPiAwKSA/IDxDb21tb25seVNlYXJjaGVkIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9e2BWaWV3IFNlbGVjdGVkICgke3RoaXMucHJvcHMuc2VsZWN0ZWRDcml0ZXJpYXMubGVuZ3RofSlgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3RoaXMucHJvcHMuc2VsZWN0ZWRDcml0ZXJpYXMuZmlsdGVyKHggPT4gIXgudHlwZS5pbmNsdWRlcyhcInByb2NlZHVyZXNcIikpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUGlsbHM9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e1tdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZT17dGhpcy5wcm9wcy50b2dnbGVPUERDcml0ZXJpYS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbW9ubHlTZWFyY2hlZCB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9XCJDb21tb24gU3BlY2lhbGl0aWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzcGVjaWFsaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3RoaXMucHJvcHMuc3BlY2lhbGl6YXRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMucHJvcHMuc2VsZWN0ZWRDcml0ZXJpYXMuZmlsdGVyKHggPT4geC50eXBlID09ICdzcGVjaWFsaXR5Jyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGU9e3RoaXMucHJvcHMudG9nZ2xlT1BEQ3JpdGVyaWEuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbW9ubHlTZWFyY2hlZCB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9XCJDb21tb24gQ29uZGl0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY29uZGl0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3RoaXMucHJvcHMuY29uZGl0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnByb3BzLnNlbGVjdGVkQ3JpdGVyaWFzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAnY29uZGl0aW9uJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGU9e3RoaXMucHJvcHMudG9nZ2xlT1BEQ3JpdGVyaWEuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2hvd0RvY3RvcnMuYmluZCh0aGlzLCAnb3BkJyl9IGNsYXNzTmFtZT1cInAtMyB2LWJ0biB2LWJ0bi1wcmltYXJ5IGJ0bi1sZyBmaXhlZCBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCB0ZXh0LWxnIHN0aWNreS1idG5cIj5TaG93IERvY3RvcnM8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ3JpdGVyaWFTZWFyY2g+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZCA9PSBcImxhYlwiID8gPENyaXRlcmlhU2VhcmNoIHsuLi50aGlzLnByb3BzfSBjaGVja0ZvckxvYWQ9e3RoaXMucHJvcHMuTE9BREVEX1NFQVJDSF9DUklURVJJQV9MQUJ9IHRpdGxlPVwiU2VhcmNoIGZvciB0ZXN0cyBvciBsYWJcIiBwYWRkaW5nVG9wQ2xhc3M9e3RydWV9IHNlYXJjaFByb2NlZWQ9e3RoaXMuc2VhcmNoUHJvY2VlZExBQi5iaW5kKHRoaXMpfSBmb2N1c0lucHV0PXt0aGlzLnN0YXRlLmZvY3VzSW5wdXR9IGhpZGVIZWFkZXJPbk1vYmlsZT17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwib3BkLXNlYXJjaC1zZWN0aW9uIG1ibC1wZG5nLXplcm9cIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5zZWxlY3RlZENyaXRlcmlhcyAmJiB0aGlzLnByb3BzLnNlbGVjdGVkQ3JpdGVyaWFzLmxlbmd0aCA+IDApID8gPENvbW1vbmx5U2VhcmNoZWQgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZz17YFZpZXcgU2VsZWN0ZWQgKCR7dGhpcy5wcm9wcy5zZWxlY3RlZENyaXRlcmlhcy5sZW5ndGh9KWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17dGhpcy5wcm9wcy5zZWxlY3RlZENyaXRlcmlhc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17W119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQaWxscz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGU9e3RoaXMucHJvcHMudG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1vbmx5U2VhcmNoZWQgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPVwiQ29tbW9uIFRlc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRlc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17dGhpcy5wcm9wcy5jb21tb25fdGVzdHMuZmlsdGVyKHggPT4gIXguaXNfcGFja2FnZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5wcm9wcy5zZWxlY3RlZENyaXRlcmlhcy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gJ3Rlc3QnKS5maWx0ZXIoeCA9PiAheC5pc19wYWNrYWdlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZT17dGhpcy5wcm9wcy50b2dnbGVEaWFnbm9zaXNDcml0ZXJpYS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29tbW9uX3Rlc3RzLmZpbHRlcih4ID0+IHguaXNfcGFja2FnZSkubGVuZ3RoID8gPENvbW1vbmx5U2VhcmNoZWQgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZz1cIkNvbW1vbiBIZWFsdGggUGFja2FnZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXt0aGlzLnByb3BzLmNvbW1vbl90ZXN0cy5maWx0ZXIoeCA9PiB4LmlzX3BhY2thZ2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnByb3BzLnNlbGVjdGVkQ3JpdGVyaWFzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAndGVzdCcpLmZpbHRlcih4ID0+IHguaXNfcGFja2FnZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlPXt0aGlzLnByb3BzLnRvZ2dsZURpYWdub3Npc0NyaXRlcmlhLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zaG93TGFicy5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJ2LWJ0biBwLTMgdi1idG4tcHJpbWFyeSBidG4tbGcgZml4ZWQgaG9yaXpvbnRhbCBib3R0b20gbm8tcm91bmQgdGV4dC1sZyBzdGlja3ktYnRuXCI+U2hvdyBMYWJzPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NyaXRlcmlhU2VhcmNoPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWQgPT0gXCJwcm9jZWR1cmVzXCIgPyA8Q3JpdGVyaWFTZWFyY2ggey4uLnRoaXMucHJvcHN9IGNoZWNrRm9yTG9hZD17dGhpcy5wcm9wcy5MT0FERURfU0VBUkNIX0NSSVRFUklBX09QRH0gdGl0bGU9XCJTZWFyY2ggZm9yIGRlbnRhbCB0cmVhdG1lbnRzXCIgdHlwZT1cIm9wZFwiIHBhZGRpbmdUb3BDbGFzcz17dHJ1ZX0gc2VhcmNoUHJvY2VlZD17dGhpcy5zZWFyY2hQcm9jZWVkT1BELmJpbmQodGhpcyl9IGZvY3VzSW5wdXQ9e3RoaXMuc3RhdGUuZm9jdXNJbnB1dH0gaGlkZUhlYWRlck9uTW9iaWxlPXt0cnVlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJvcGQtc2VhcmNoLXNlY3Rpb24gbWJsLXBkbmctemVyb1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLnNlbGVjdGVkQ3JpdGVyaWFzICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRDcml0ZXJpYXMuZmlsdGVyKHggPT4geC50eXBlLmluY2x1ZGVzKFwicHJvY2VkdXJlc1wiKSkubGVuZ3RoID4gMCkgPyA8Q29tbW9ubHlTZWFyY2hlZCB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPXtgVmlldyBTZWxlY3RlZCAoJHt0aGlzLnByb3BzLnNlbGVjdGVkQ3JpdGVyaWFzLmxlbmd0aH0pYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXt0aGlzLnByb3BzLnNlbGVjdGVkQ3JpdGVyaWFzLmZpbHRlcih4ID0+IHgudHlwZS5pbmNsdWRlcyhcInByb2NlZHVyZXNcIikpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUGlsbHM9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e1tdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZT17dGhpcy5wcm9wcy50b2dnbGVPUERDcml0ZXJpYS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbW9ubHlTZWFyY2hlZCB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9XCJDb21tb24gRGVudGFsIFRyZWF0bWVudHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByb2NlZHVyZXNfY2F0ZWdvcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17dGhpcy5wcm9wcy5wcm9jZWR1cmVfY2F0ZWdvcmllc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnByb3BzLnNlbGVjdGVkQ3JpdGVyaWFzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAncHJvY2VkdXJlc19jYXRlZ29yeScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlPXt0aGlzLnByb3BzLnRvZ2dsZU9QRENyaXRlcmlhLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNob3dEb2N0b3JzLmJpbmQodGhpcywgJ3Byb2NlZHVyZXMnKX0gY2xhc3NOYW1lPVwicC0zIHYtYnRuIHYtYnRuLXByaW1hcnkgYnRuLWxnIGZpeGVkIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIHRleHQtbGcgc3RpY2t5LWJ0blwiPlNob3cgRG9jdG9yczwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Dcml0ZXJpYVNlYXJjaD4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hWaWV3XG4iLCJpbXBvcnQgc2VhcmNoRWxhc3RpY1ZpZXcgZnJvbSAnLi9zZWFyY2hFbGFzdGljVmlldy5qcydcblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoRWxhc3RpY1ZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBDb21tb25seVNlYXJjaGVkIGZyb20gJy4uLy4uL2NvbW1vbnMvY29tbW9ubHlTZWFyY2hlZC9pbmRleC5qcydcbmltcG9ydCBDcml0ZXJpYUVsYXN0aWNTZWFyY2ggZnJvbSAnLi4vLi4vY29tbW9ucy9jcml0ZXJpYUVsYXN0aWNTZWFyY2gnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IEZpeGVkTW9iaWxlRm9vdGVyIGZyb20gJy4uL0hvbWUvRml4ZWRNb2JpbGVGb290ZXIuanMnO1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcblxuXG5jbGFzcyBTZWFyY2hFbGFzdGljVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjdXJyZW50VGVzdFR5cGU6IHt9LFxuICAgICAgICAgICAgc2VhcmNoU3RyaW5nOiAnJyxcbiAgICAgICAgICAgIHNob3dGaXhlZE1vYmlsZUZvb3RlcjogdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGwoMCwgMClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdPcGVuU2VhcmNoUGFnZScsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogYG9wZW4tc2VhcmNoLWZyb20tJHtwYXJzZWQuZnJvbSB8fCBcImRlZmF1bHRcIn1gLCAnZnJvbSc6IHBhcnNlZC5mcm9tLCAnZGVmYXVsdFNlYXJjaEJ1dHRvbic6IHRoaXMucHJvcHMuc2VsZWN0ZWRTZWFyY2hUeXBlIHx8ICcnLCAncGFnZSc6IHBhcnNlZC5wYWdlVHlwZT9wYXJzZWQucGFnZVR5cGU6JydcbiAgICAgICAgfVxuXG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgfVxuXG4gICAgc2VhcmNoUHJvY2VlZE9QRChkb2N0b3JfbmFtZSA9IFwiXCIsIGhvc3BpdGFsX25hbWUgPSBcIlwiLCBob3NwaXRhbF9pZCA9IFwiXCIpIHtcbiAgICAgICAgLy8gaGFuZGxlIGRvY3RvciBuYW1lLCBob3NwaXRhbCBuYW1lXG4gICAgICAgIGxldCBzdGF0ZSA9IHtcbiAgICAgICAgICAgIGZpbHRlckNyaXRlcmlhOiB7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5kYXRhU3RhdGUuZmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgICAgICAgICAgZG9jdG9yX25hbWUsIGhvc3BpdGFsX25hbWUsIGhvc3BpdGFsX2lkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmV4dEZpbHRlckNyaXRlcmlhOiB7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5kYXRhU3RhdGUuZmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgICAgICAgICAgZG9jdG9yX25hbWUsIGhvc3BpdGFsX25hbWUsIGhvc3BpdGFsX2lkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChkb2N0b3JfbmFtZSB8fCBob3NwaXRhbF9uYW1lIHx8IGhvc3BpdGFsX2lkKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZENyaXRlcmlhcyA9IFtdXG4gICAgICAgICAgICBzdGF0ZS5jb21tb25TZWxlY3RlZENyaXRlcmlhcyA9IFtdXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb3BzLm1lcmdlT1BEU3RhdGUoc3RhdGUsIHRydWUpXG5cbiAgICAgICAgLyogICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1Nob3dEb2N0b3JzQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3Nob3ctZG9jdG9ycy1jbGlja2VkJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KSovXG5cbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goe1xuICAgICAgICAgICAgcGF0aG5hbWU6ICcvb3BkL3NlYXJjaHJlc3VsdHMnLFxuICAgICAgICAgICAgc3RhdGU6IHsgc2VhcmNoX2JhY2s6IHRydWUgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHNlYXJjaFByb2NlZWRMQUIobGFiX25hbWUgPSBcIlwiLCBzaG93X2FsbF9sYWJzKSB7XG4gICAgICAgIC8vIGhhbmRsZSBkb2N0b3IgbmFtZSwgaG9zcGl0YWwgbmFtZVxuICAgICAgICB0aGlzLnByb3BzLm1lcmdlTEFCU3RhdGUoe1xuICAgICAgICAgICAgZmlsdGVyQ3JpdGVyaWE6IHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLmRhdGFTdGF0ZS5maWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgICAgICAgICBsYWJfbmFtZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5leHRGaWx0ZXJDcml0ZXJpYToge1xuICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuZGF0YVN0YXRlLmZpbHRlckNyaXRlcmlhLFxuICAgICAgICAgICAgICAgIGxhYl9uYW1lXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzOiBzaG93X2FsbF9sYWJzID8gW10gOiB0aGlzLnByb3BzLmRhdGFTdGF0ZS5zZWxlY3RlZENyaXRlcmlhcyxcbiAgICAgICAgICAgIG5leHRTZWxlY3RlZENyaXRlcmlhczogc2hvd19hbGxfbGFicyA/IFtdIDogdGhpcy5wcm9wcy5kYXRhU3RhdGUuc2VsZWN0ZWRDcml0ZXJpYXNcbiAgICAgICAgfSwgdHJ1ZSlcblxuICAgICAgICBsZXQgc2VsZWN0ZWRUZXN0SWRzID0gdGhpcy5wcm9wcy5kYXRhU3RhdGUuc2VsZWN0ZWRDcml0ZXJpYXMubWFwKHRlc3QgPT4gdGVzdC5pZClcbiAgICAgICAgbGV0IHNlbGVjdGVkVGVzdHNOYW1lID0gdGhpcy5wcm9wcy5kYXRhU3RhdGUuc2VsZWN0ZWRDcml0ZXJpYXMubWFwKHRlc3QgPT4gdGVzdC5uYW1lKVxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnU2hvd0xhYkNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdzaG93LWxhYi1jbGlja2VkJywgJ1NlbGVjdGVkVGVzdElkcyc6IHNlbGVjdGVkVGVzdElkcy5qb2luKCcsJykgfHwgJycsICdTZWxlY3RlZFRlc3ROYW1lJzogc2VsZWN0ZWRUZXN0c05hbWUuam9pbignLCcpLCAnVGVzdENvdW50Jzogc2VsZWN0ZWRUZXN0SWRzLmxlbmd0aCB8fCAwXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCh7XG4gICAgICAgICAgICBwYXRobmFtZTogJy9sYWIvc2VhcmNocmVzdWx0cycsXG4gICAgICAgICAgICBzdGF0ZTogeyBzZWFyY2hfYmFjazogdHJ1ZSB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc2VhcmNoUHJvY2VlZFBhY2thZ2VzKCkge1xuICAgICAgICBsZXQgc2VsZWN0ZWRQYWNrYWdlc0lkcyA9IFtdXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRhdGFTdGF0ZS5zZWxlY3RlZFBhY2thZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZGF0YVN0YXRlLnNlbGVjdGVkUGFja2FnZXMubWFwKHggPT4ge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkUGFja2FnZXNJZHMucHVzaCh4LmlkKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0UGFja2FnZUlkKHNlbGVjdGVkUGFja2FnZXNJZHMsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9zZWFyY2hwYWNrYWdlcycpXG4gICAgICAgIH0sIDEwMClcbiAgICB9XG5cbiAgICBzaG93RG9jdG9ycyh0eXBlKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uVHlwZSA9PSBcImdlb1wiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNJbnB1dDogMSB9KVxuICAgICAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VhcmNoUHJvY2VlZE9QRChcIlwiLCBcIlwiKVxuICAgIH1cblxuICAgIHNldENvbW1vblNlbGVjdGVkQ3JpdGVyaWFzKHR5cGUsIGNyaXRlcmlhKSB7XG4gICAgICAgIGNyaXRlcmlhID0gT2JqZWN0LmFzc2lnbih7fSwgY3JpdGVyaWEpXG4gICAgICAgIGNyaXRlcmlhLnR5cGUgPSB0eXBlXG4gICAgICAgIHRoaXMucHJvcHMuY2xvbmVDb21tb25TZWxlY3RlZENyaXRlcmlhcyhjcml0ZXJpYSlcbiAgICAgICAgdGhpcy5zaG93RG9jdG9ycygpXG4gICAgfVxuXG4gICAgc2hvd0xhYnMoc2hvd19hbGxfbGFicykge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2NhdGlvblR5cGUgPT0gXCJnZW9cIikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzSW5wdXQ6IDEgfSlcbiAgICAgICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWFyY2hQcm9jZWVkTEFCKFwiXCIsIHNob3dfYWxsX2xhYnMpXG4gICAgfVxuXG4gICAgc2hvd1BhY2thZ2VzKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2NhdGlvblR5cGUgPT0gXCJnZW9cIikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzSW5wdXQ6IDEgfSlcbiAgICAgICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWFyY2hQcm9jZWVkUGFja2FnZXMoKVxuICAgIH1cblxuICAgIGNsaWNrUG9wVXAodHlwZSkge1xuICAgICAgICBpZiAodHlwZSA9PSAxKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1llc0NsaWNrZWRMYWJUZXN0UG9wdXAnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICd5ZXMtY2xpY2tlZC1sYWItdGVzdC1wb3B1cCcsICdzZWxlY3RlZCc6IHRoaXMuc3RhdGUuY3VycmVudFRlc3RUeXBlLm5hbWUgfHwgJycsICdzZWxlY3RlZElkJzogdGhpcy5zdGF0ZS5jdXJyZW50VGVzdFR5cGUuaWQgfHwgJycsICdzZWFyY2hlZCc6IHRoaXMuc3RhdGUuc2VhcmNoU3RyaW5nID8gJ2F1dG9zdWdnZXN0JyA6ICcnLCAnc2VhcmNoU3RyaW5nJzogdGhpcy5zdGF0ZS5zZWFyY2hTdHJpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKCd0ZXN0JywgdGhpcy5zdGF0ZS5jdXJyZW50VGVzdFR5cGUsIHRydWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ05vQ2xpY2tlZExhYlRlc3RQb3B1cCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ25vLWNsaWNrZWQtbGFiLXRlc3QtcG9wdXAnLCAnc2VhcmNoZWQnOiB0aGlzLnN0YXRlLnNlYXJjaFN0cmluZyA/ICdhdXRvc3VnZ2VzdCcgOiAnJywgJ3NlYXJjaFN0cmluZyc6IHRoaXMuc3RhdGUuc2VhcmNoU3RyaW5nXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hfcmVzdWx0c192aWV3JykpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hfcmVzdWx0c192aWV3Jykuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50VGVzdFR5cGU6IHt9IH0pXG4gICAgfVxuXG4gICAgdG9nZ2xlTGFiVGVzdHModHlwZSwgY3JpdGVyaWEsIHNlYXJjaFN0cmluZyA9IFwiXCIpIHtcbiAgICAgICAgaWYoY3JpdGVyaWEuaXNfcGFja2FnZSAmJiBjcml0ZXJpYS5pc19wYWNrYWdlWzBdKXtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlUGFja2FnZXMoJycsY3JpdGVyaWEpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdUZXN0U2VsZWN0ZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICd0ZXN0LXNlbGVjdGVkJywgJ3NlbGVjdGVkJzogY3JpdGVyaWEubmFtZSB8fCAnJywgJ3NlbGVjdGVkSWQnOiBjcml0ZXJpYS5pZCB8fCAnJywgJ3NlYXJjaGVkJzogJ2F1dG9zdWdnZXN0JywgJ3NlYXJjaFN0cmluZyc6IHNlYXJjaFN0cmluZ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkVGVzdElkcyA9IFtdXG4gICAgICAgICAgICAvLyB0aGlzLnByb3BzLmRhdGFTdGF0ZS5zZWxlY3RlZENyaXRlcmlhcy5tYXAoKHgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBpZiAoeC50ZXN0X3R5cGUpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgc2VsZWN0ZWRUZXN0SWRzLnB1c2goeC50ZXN0X3R5cGUpXG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZFRlc3RJZHMubGVuZ3RoICYmIGNyaXRlcmlhLnRlc3RfdHlwZSkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZFRlc3RJZHMuaW5kZXhPZihjcml0ZXJpYS50ZXN0X3R5cGUpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50VGVzdFR5cGU6IGNyaXRlcmlhLCBzZWFyY2hTdHJpbmc6IHNlYXJjaFN0cmluZyB9KVxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnUG9wVXBPcGVuTGFiVGVzdEVycm9yJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAncG9wdXAtb3Blbi1sYWItdGVzdC1lcnJvcicsICdzZWxlY3RlZCc6IGNyaXRlcmlhLm5hbWUgfHwgJycsICdzZWxlY3RlZElkJzogY3JpdGVyaWEuaWQgfHwgJycsICdzZWFyY2hlZCc6ICdhdXRvc3VnZ2VzdCcsICdzZWFyY2hTdHJpbmcnOiBzZWFyY2hTdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaF9yZXN1bHRzX3ZpZXcnKSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hfcmVzdWx0c192aWV3Jykuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKCd0ZXN0JywgY3JpdGVyaWEsIHRydWUpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dMYWJzKClcbiAgICAgICAgICAgIH0sIDEwMClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZVBhY2thZ2VzKHR5cGUsIGNyaXRlcmlhLCBzZWFyY2hTdHJpbmcgPSBcIlwiKSB7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdQYWNrYWdlU2VsZWN0ZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdwYWNrYWdlLXNlbGVjdGVkJywgJ3NlbGVjdGVkJzogY3JpdGVyaWEubmFtZSB8fCAnJywgJ3NlbGVjdGVkSWQnOiBjcml0ZXJpYS5pZCB8fCAnJywgJ3NlYXJjaGVkJzogJ2F1dG9zdWdnZXN0JywgJ3NlYXJjaFN0cmluZyc6IHNlYXJjaFN0cmluZ1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIC8vIHRoaXMucHJvcHMudG9nZ2xlU2VhcmNoUGFja2FnZXMoY3JpdGVyaWEpXG4gICAgICAgIHRoaXMucHJvcHMuc2V0UGFja2FnZUlkKGNyaXRlcmlhLmlkKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1BhY2thZ2VzKClcbiAgICAgICAgfSwgMTAwKVxuICAgIH1cblxuICAgIHNlYXJjaFByb2NlZWRJUEQoKSB7XG5cbiAgICB9XG5cbiAgICBzaG93SVBEKGlkLCB1cmw9bnVsbCkge1xuXG4gICAgICAgIGlmKHVybCl7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgLyR7dXJsfT9zaG93UG9wdXA9dHJ1ZWApXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9pcGRJbmZvP2lwZF9pZD0ke2lkfSZzaG93UG9wdXA9dHJ1ZWApXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgdG9nZ2xlSXBkKHR5cGUsIGNyaXRlcmlhLCBzZWFyY2hTdHJpbmcgPSBcIlwiKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZENyaXRlcmlhID0geyAuLi5jcml0ZXJpYSB9XG4gICAgICAgIHNlbGVjdGVkQ3JpdGVyaWEudHlwZSA9ICdpcGQnXG4gICAgICAgIHRoaXMucHJvcHMudG9nZ2xlSVBEQ3JpdGVyaWEoc2VsZWN0ZWRDcml0ZXJpYSwgdHJ1ZSlcbiAgICAgICAgdGhpcy5zaG93SVBEKGNyaXRlcmlhLmlkLCBjcml0ZXJpYS51cmwpXG4gICAgfVxuXG4gICAgdG9nZ2xlRml4ZWRNb2JpbGVGb290ZXIodG9TaG93KSB7XG4gICAgICAgIGlmICh0b1Nob3cpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Rml4ZWRNb2JpbGVGb290ZXI6IHRydWUgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Rml4ZWRNb2JpbGVGb290ZXI6IGZhbHNlIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgbGV0IHRpdGxlID0gJydcbiAgICAgICAgbGV0IHNlYXJjaFByb2NlZWQgPSAnJ1xuICAgICAgICBsZXQgc2hvd1Jlc3VsdHMgPSAnJ1xuICAgICAgICBsZXQgY29tbW9uU2VhcmNoZWQgPSAnJ1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkU2VhcmNoVHlwZS5pbmNsdWRlcygnb3BkJykpIHtcbiAgICAgICAgICAgIHRpdGxlID0gXCJTZWFyY2ggZm9yIGRvY3RvciwgaG9zcGl0YWwsIHNwZWNpYWx0eVwiXG4gICAgICAgICAgICBzZWFyY2hQcm9jZWVkID0gdGhpcy5zZWFyY2hQcm9jZWVkT1BELmJpbmQodGhpcylcbiAgICAgICAgICAgIHNob3dSZXN1bHRzID0gdGhpcy5zaG93RG9jdG9ycy5iaW5kKHRoaXMpXG5cbiAgICAgICAgICAgIGNvbW1vblNlYXJjaGVkID0gPENvbW1vbmx5U2VhcmNoZWQgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgaGVhZGluZz1cIkNvbW1vbiBTcGVjaWFsaXRpZXNcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJzcGVjaWFsaXR5XCJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFNlYXJjaFR5cGU9e3RoaXMucHJvcHMuc2VsZWN0ZWRTZWFyY2hUeXBlfVxuICAgICAgICAgICAgICAgIGRhdGE9e3RoaXMucHJvcHMuZGF0YVN0YXRlLnNwZWNpYWxpemF0aW9uc31cbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17W10vKnRoaXMucHJvcHMuc2VsZWN0ZWRDcml0ZXJpYXMuZmlsdGVyKHggPT4geC50eXBlID09ICdzcGVjaWFsaXR5JykqL31cbiAgICAgICAgICAgICAgICB0b2dnbGU9e3RoaXMuc2V0Q29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkU2VhcmNoVHlwZS5pbmNsdWRlcygnbGFiJykpIHtcbiAgICAgICAgICAgIHRpdGxlID0gXCJTZWFyY2ggZm9yIHRlc3QsIGxhYiwgaGVhbHRoIHBhY2thZ2VcIlxuICAgICAgICAgICAgc2VhcmNoUHJvY2VlZCA9IHRoaXMuc2VhcmNoUHJvY2VlZExBQi5iaW5kKHRoaXMpXG4gICAgICAgICAgICBzaG93UmVzdWx0cyA9IHRoaXMuc2hvd0xhYnMuYmluZCh0aGlzKVxuXG4gICAgICAgICAgICBjb21tb25TZWFyY2hlZCA9IDxDb21tb25seVNlYXJjaGVkIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgIGhlYWRpbmc9XCJDb21tb24gVGVzdFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRlc3RcIlxuICAgICAgICAgICAgICAgIHNlbGVjdGVkU2VhcmNoVHlwZT17dGhpcy5wcm9wcy5zZWxlY3RlZFNlYXJjaFR5cGV9XG4gICAgICAgICAgICAgICAgZGF0YT17dGhpcy5wcm9wcy5kYXRhU3RhdGUuY29tbW9uX3Rlc3RzfVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtbXS8qdGhpcy5wcm9wcy5kYXRhU3RhdGUuc2VsZWN0ZWRDcml0ZXJpYXMqL31cbiAgICAgICAgICAgICAgICB0b2dnbGU9e3RoaXMudG9nZ2xlTGFiVGVzdHMuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICBzZWxlY3RlZENyaXRlcmlhcz17dGhpcy5wcm9wcy5kYXRhU3RhdGUuc2VsZWN0ZWRDcml0ZXJpYXN9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZFNlYXJjaFR5cGUuaW5jbHVkZXMoJ3BhY2thZ2UnKSkge1xuICAgICAgICAgICAgdGl0bGUgPSBcImhlYWx0aCBwYWNrYWdlc1wiXG4gICAgICAgICAgICBzZWFyY2hQcm9jZWVkID0gdGhpcy5zZWFyY2hQcm9jZWVkUGFja2FnZXMuYmluZCh0aGlzKVxuICAgICAgICAgICAgc2hvd1Jlc3VsdHMgPSB0aGlzLnNob3dQYWNrYWdlcy5iaW5kKHRoaXMpXG5cbiAgICAgICAgICAgIGNvbW1vblNlYXJjaGVkID0gPENvbW1vbmx5U2VhcmNoZWQgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgaGVhZGluZz1cIkNvbW1vbiBIZWFsdGggUGFja2FnZXNcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYWNrYWdlXCJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFNlYXJjaFR5cGU9e3RoaXMucHJvcHMuc2VsZWN0ZWRTZWFyY2hUeXBlfVxuICAgICAgICAgICAgICAgIGRhdGE9e3RoaXMucHJvcHMuZGF0YVN0YXRlLmNvbW1vbl9wYWNrYWdlfVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnByb3BzLmRhdGFTdGF0ZS5zZWxlY3RlZFBhY2thZ2VzfVxuICAgICAgICAgICAgICAgIHRvZ2dsZT17dGhpcy50b2dnbGVQYWNrYWdlcy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ3JpdGVyaWFzPXt0aGlzLnByb3BzLmRhdGFTdGF0ZS5zZWxlY3RlZFBhY2thZ2VzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkU2VhcmNoVHlwZS5pbmNsdWRlcygnaXBkJykpIHtcblxuICAgICAgICAgICAgdGl0bGUgPSBcIlNlYXJjaCBmb3Igc3VyZ2VyeSwgcHJvY2VkdXJlXCJcbiAgICAgICAgICAgIHNlYXJjaFByb2NlZWQgPSB0aGlzLnNlYXJjaFByb2NlZWRJUEQuYmluZCh0aGlzKVxuICAgICAgICAgICAgc2hvd1Jlc3VsdHMgPSB0aGlzLnNob3dJUEQuYmluZCh0aGlzKVxuXG4gICAgICAgICAgICBjb21tb25TZWFyY2hlZCA9IDxDb21tb25seVNlYXJjaGVkIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgIGhlYWRpbmc9XCJDb21tb25seSBTZWFyY2hlZFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImlwZFwiXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRTZWFyY2hUeXBlPXt0aGlzLnByb3BzLnNlbGVjdGVkU2VhcmNoVHlwZX1cbiAgICAgICAgICAgICAgICBkYXRhPXt0aGlzLnByb3BzLmRhdGFTdGF0ZS5pcGRfcHJvY2VkdXJlc31cbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17W119XG4gICAgICAgICAgICAgICAgdG9nZ2xlPXt0aGlzLnRvZ2dsZUlwZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ3JpdGVyaWFzPXt0aGlzLnByb3BzLmRhdGFTdGF0ZS5zZWxlY3RlZENyaXRlcmlhc31cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVsc2UgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRTZWFyY2hUeXBlLmluY2x1ZGVzKCdwYWNrYWdlJykpIHtcbiAgICAgICAgLy8gICAgIHRpdGxlID0gXCJoZWFsdGggcGFja2FnZXNcIlxuICAgICAgICAvLyAgICAgc2VhcmNoUHJvY2VlZCA9IHRoaXMuc2VhcmNoUHJvY2VlZFBhY2thZ2VzLmJpbmQodGhpcylcbiAgICAgICAgLy8gICAgIHNob3dSZXN1bHRzID0gdGhpcy5zaG93UGFja2FnZXMuYmluZCh0aGlzKVxuXG4gICAgICAgIC8vICAgICBjb21tb25TZWFyY2hlZCA9IDxDb21tb25seVNlYXJjaGVkXG4gICAgICAgIC8vICAgICAgICAgaGVhZGluZz1cIkNvbW1vbiBIZWFsdGggUGFja2FnZXNcIlxuICAgICAgICAvLyAgICAgICAgIHR5cGU9XCJwYWNrYWdlXCJcbiAgICAgICAgLy8gICAgICAgICBzZWxlY3RlZFNlYXJjaFR5cGU9e3RoaXMucHJvcHMuc2VsZWN0ZWRTZWFyY2hUeXBlfVxuICAgICAgICAvLyAgICAgICAgIGRhdGE9e3RoaXMucHJvcHMuZGF0YVN0YXRlLmNvbW1vbl9wYWNrYWdlfVxuICAgICAgICAvLyAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnByb3BzLmRhdGFTdGF0ZS5zZWxlY3RlZFBhY2thZ2VzfVxuICAgICAgICAvLyAgICAgICAgIHRvZ2dsZT17dGhpcy50b2dnbGVQYWNrYWdlcy5iaW5kKHRoaXMpfVxuICAgICAgICAvLyAgICAgICAgIHNlbGVjdGVkQ3JpdGVyaWFzPXt0aGlzLnByb3BzLmRhdGFTdGF0ZS5zZWxlY3RlZFBhY2thZ2VzfVxuICAgICAgICAvLyAgICAgLz5cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibWFwXCIgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19PjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDcml0ZXJpYUVsYXN0aWNTZWFyY2ggey4uLnRoaXMucHJvcHN9IGNoZWNrRm9yTG9hZD17dHJ1ZX0gdGl0bGU9e3RpdGxlfSB0eXBlPXt0aGlzLnByb3BzLnNlbGVjdGVkU2VhcmNoVHlwZX0gcGFkZGluZ1RvcENsYXNzPXt0cnVlfSBzZWFyY2hQcm9jZWVkPXtzZWFyY2hQcm9jZWVkfSBzaG93UmVzdWx0cz17c2hvd1Jlc3VsdHN9IGZvY3VzSW5wdXQ9e3RoaXMuc3RhdGUuZm9jdXNJbnB1dH0gaGlkZUhlYWRlck9uTW9iaWxlPXt0cnVlfSB0b2dnbGVMYWJUZXN0cz17dGhpcy50b2dnbGVMYWJUZXN0cy5iaW5kKHRoaXMpfSB0b2dnbGVJcGQ9e3RoaXMudG9nZ2xlSXBkLmJpbmQodGhpcyl9IHNlYXJjaEVsYXN0aWNWaWV3PXt0cnVlfSB0b2dnbGVGaXhlZE1vYmlsZUZvb3Rlcj17dGhpcy50b2dnbGVGaXhlZE1vYmlsZUZvb3Rlci5iaW5kKHRoaXMpfSB0b2dnbGVQYWNrYWdlcz17dGhpcy50b2dnbGVQYWNrYWdlcy5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm9wZC1zZWFyY2gtc2VjdGlvbiBtYmwtcGRuZy16ZXJvXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMuc2VsZWN0ZWRTZWFyY2hUeXBlLmluY2x1ZGVzKCdsYWInKSAmJiB0aGlzLnByb3BzLmRhdGFTdGF0ZS5zZWxlY3RlZENyaXRlcmlhcyAmJiB0aGlzLnByb3BzLmRhdGFTdGF0ZS5zZWxlY3RlZENyaXRlcmlhcy5sZW5ndGggPiAwKSA/IDxDb21tb25seVNlYXJjaGVkIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZz17YFZpZXcgU2VsZWN0ZWQgKCR7dGhpcy5wcm9wcy5kYXRhU3RhdGUuc2VsZWN0ZWRDcml0ZXJpYXMubGVuZ3RofSlgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17dGhpcy5wcm9wcy5kYXRhU3RhdGUuc2VsZWN0ZWRDcml0ZXJpYXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFNlYXJjaFR5cGU9e3RoaXMucHJvcHMuc2VsZWN0ZWRTZWFyY2hUeXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e1tdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQaWxscz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZT17dGhpcy5wcm9wcy50b2dnbGVEaWFnbm9zaXNDcml0ZXJpYS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL31cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLnNlbGVjdGVkU2VhcmNoVHlwZS5pbmNsdWRlcygncGFja2FnZScpICYmIHRoaXMucHJvcHMuZGF0YVN0YXRlLnNlbGVjdGVkUGFja2FnZXMgJiYgdGhpcy5wcm9wcy5kYXRhU3RhdGUuc2VsZWN0ZWRQYWNrYWdlcy5sZW5ndGggPiAwKSA/IDxDb21tb25seVNlYXJjaGVkIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZz17YFZpZXcgU2VsZWN0ZWQgKCR7dGhpcy5wcm9wcy5kYXRhU3RhdGUuc2VsZWN0ZWRQYWNrYWdlcy5sZW5ndGh9KWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFja2FnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXt0aGlzLnByb3BzLmRhdGFTdGF0ZS5zZWxlY3RlZFBhY2thZ2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRTZWFyY2hUeXBlPXt0aGlzLnByb3BzLnNlbGVjdGVkU2VhcmNoVHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtbXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUGlsbHM9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGU9e3RoaXMudG9nZ2xlUGFja2FnZXMuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAqL31cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb21tb25TZWFyY2hlZH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZFNlYXJjaFR5cGUuaW5jbHVkZXMoJ2xhYicpICYmICF0aGlzLnByb3BzLmlzX2xvZ2luX3VzZXJfaW5zdXJlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbW9ubHlTZWFyY2hlZCB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPVwiQ29tbW9uIEhlYWx0aCBQYWNrYWdlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRlc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3RoaXMucHJvcHMuZGF0YVN0YXRlLmNvbW1vbl9wYWNrYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU2VhcmNoVHlwZT17dGhpcy5wcm9wcy5zZWxlY3RlZFNlYXJjaFR5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e1tdLyp0aGlzLnByb3BzLmRhdGFTdGF0ZS5zZWxlY3RlZENyaXRlcmlhcy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gJ3Rlc3QnKSovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZT17dGhpcy50b2dnbGVQYWNrYWdlcy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUGFja2FnZSA9IHt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWRTZWFyY2hUeXBlID09ICdsYWInID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zaG93TGFicy5iaW5kKHRoaXMsIHRydWUpfSBjbGFzc05hbWU9XCJwLTMgdi1idG4gdi1idG4tcHJpbWFyeSBidG4tbGcgZml4ZWQgaG9yaXpvbnRhbCBib3R0b20gbm8tcm91bmQgdGV4dC1sZyBzdGlja3ktYnRuXCI+U2hvdyBMYWJzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAqL31cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnN0YXRlLmN1cnJlbnRUZXN0VHlwZSkubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLXBvcHVwLW92ZXJsYXkgXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLXBvcHVwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IHBhZGlpbmctc3JjaC1lbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNyY2gtZWwtY29uZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgUGF0aG9sb2d5IGFuZCBSYWRpb2xvZ3kgdGVzdHMgKGxhYiB2aXNpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkKSBjYW5ub3QgYmUgYm9va2VkIHRvZ2V0aGVyLiBEbyB5b3Ugd2FudCB0byBzZWFyY2ggJHt0aGlzLnN0YXRlLmN1cnJlbnRUZXN0VHlwZS5uYW1lfSAgdGVzdCBpbnN0ZWFkID9gfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1idG4tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5jbGlja1BvcFVwLmJpbmQodGhpcywgMSl9PlllczwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwic3JjLWVsLWJ0bi1ib3JkZXJcIj48L3NwYW4+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2xpY2tQb3BVcC5iaW5kKHRoaXMsIDIpfT5ObzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L0NyaXRlcmlhRWxhc3RpY1NlYXJjaD5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93Rml4ZWRNb2JpbGVGb290ZXIgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPEZpeGVkTW9iaWxlRm9vdGVyIHsuLi50aGlzLnByb3BzfSAvPiA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hFbGFzdGljVmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBtZXJnZU9QRFN0YXRlLCByZXNldEZpbHRlcnMsIGdldE9QRENyaXRlcmlhUmVzdWx0cywgdG9nZ2xlT1BEQ3JpdGVyaWEsIGxvYWRPUERDb21tb25Dcml0ZXJpYSwgY2xvbmVDb21tb25TZWxlY3RlZENyaXRlcmlhcywgbWVyZ2VMQUJTdGF0ZSwgY2xlYXJBbGxUZXN0cywgbG9hZExhYkNvbW1vbkNyaXRlcmlhcywgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEsIGdldERpYWdub3Npc0NyaXRlcmlhUmVzdWx0cywgY2xlYXJFeHRyYVRlc3RzLCBzZWxlY3RTZWFyY2hUeXBlLCBmaWx0ZXJTZWxlY3RlZENyaXRlcmlhLCBnZXRFbGFzdGljQ3JpdGVyaWFSZXN1bHRzLCBzZXRQYWNrYWdlSWQsIHRvZ2dsZVNlYXJjaFBhY2thZ2VzLCB0b2dnbGVJUERDcml0ZXJpYSwgbG9hZE9QREluc3VyYW5jZSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5cbmltcG9ydCBTZWFyY2hWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9zZWFyY2gnXG5pbXBvcnQgU2VhcmNoRWxhc3RpY1ZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL3NlYXJjaEVsYXN0aWMnXG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uL2NvbmZpZydcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vaGVscGVycy9ndG0uanMnXG5cbmNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IGVsYXN0aWNTZWFyY2hTdHJpbmc6ICcnIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VTZWxlY3Rpb24od2hpY2gsIHNlYXJjaFN0cmluZyA9ICcnKSB7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdUb2dnbGVTZWFyY2hUeXBlJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAndG9vZ2xlLXNlYXJjaC10eXBlJywgJ3R5cGUnOiB3aGljaCB8fCAnJ1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVsYXN0aWNTZWFyY2hTdHJpbmc6IHNlYXJjaFN0cmluZyB9KVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB0aGlzLnByb3BzLnNlbGVjdFNlYXJjaFR5cGUod2hpY2gpXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGwoMCwgMClcbiAgICAgICAgfVxuICAgICAgICAvL29wZFxuICAgICAgICBsZXQgbG9jYWxpdHkgPSAnJ1xuICAgICAgICBsZXQgc2VsZWN0ZWRMb2NhdGlvbiA9IG51bGxcbiAgICAgICAgaWYodGhpcy5wcm9wcy5PUERfU1RBVEUgJiYgdGhpcy5wcm9wcy5PUERfU1RBVEUuc2VsZWN0ZWRMb2NhdGlvbil7XG4gICAgICAgICAgICBsb2NhbGl0eSA9IHRoaXMucHJvcHMuT1BEX1NUQVRFLnNlbGVjdGVkTG9jYXRpb24ubG9jYWxpdHl8fCcnXG4gICAgICAgICAgICBzZWxlY3RlZExvY2F0aW9uID0gdGhpcy5wcm9wcy5PUERfU1RBVEUuc2VsZWN0ZWRMb2NhdGlvblxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMubG9hZE9QRENvbW1vbkNyaXRlcmlhKHNlbGVjdGVkTG9jYXRpb24pXG4gICAgICAgIHRoaXMucHJvcHMucmVzZXRGaWx0ZXJzKClcbiAgICAgICAgLy8gbGFiXG4gICAgICAgIHRoaXMucHJvcHMubG9hZExhYkNvbW1vbkNyaXRlcmlhcygpXG4gICAgICAgIC8vIHRoaXMucHJvcHMubG9hZE9QREluc3VyYW5jZShzZWxlY3RlZExvY2F0aW9uKVxuICAgICAgICAvLyB0aGlzLnByb3BzLmNsZWFyRXh0cmFUZXN0cygpXG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgcm91dGVyOiAoKSA9PiBudWxsXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGlmIChDT05GSUcuU0VBUkNIX0VMQVNUSUNfVklFVykge1xuICAgICAgICAgICAgbGV0IGRhdGFTdGF0ZSA9ICcnXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMuc2VsZWN0ZWRTZWFyY2hUeXBlID09ICdvcGQnIHx8IHRoaXMucHJvcHMuc2VsZWN0ZWRTZWFyY2hUeXBlID09ICdwcm9jZWR1cmVzJykge1xuICAgICAgICAgICAgICAgIGRhdGFTdGF0ZSA9IHRoaXMucHJvcHMuT1BEX1NUQVRFXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMuc2VsZWN0ZWRTZWFyY2hUeXBlID09ICdpcGQnKSB7XG4gICAgICAgICAgICAgICAgZGF0YVN0YXRlID0gdGhpcy5wcm9wcy5JUERfU1RBVEVcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgZGF0YVN0YXRlID0gdGhpcy5wcm9wcy5MQUJfU1RBVEVcbiAgICAgICAgICAgIH0gXG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFNlYXJjaEVsYXN0aWNWaWV3IHsuLi50aGlzLnByb3BzfSBkYXRhU3RhdGU9e2RhdGFTdGF0ZX0gc2VsZWN0ZWQ9e3RoaXMucHJvcHMuc2VsZWN0ZWRTZWFyY2hUeXBlfSBjaGFuZ2VTZWxlY3Rpb249e3RoaXMuY2hhbmdlU2VsZWN0aW9uLmJpbmQodGhpcyl9IGVsYXN0aWNTZWFyY2hTdHJpbmc9e3RoaXMuc3RhdGUuZWxhc3RpY1NlYXJjaFN0cmluZ30gY29tbW9uX3NldHRpbmdzPXt0aGlzLnByb3BzLk9QRF9TVEFURS5jb21tb25fc2V0dGluZ3N9Lz5cbiAgICAgICAgICAgIClcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZFNlYXJjaFR5cGUgPT0gJ29wZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoVmlldyB7Li4udGhpcy5wcm9wc30gey4uLnRoaXMucHJvcHMuT1BEX1NUQVRFfSBzZWxlY3RlZD17dGhpcy5wcm9wcy5zZWxlY3RlZFNlYXJjaFR5cGV9IGNoYW5nZVNlbGVjdGlvbj17dGhpcy5jaGFuZ2VTZWxlY3Rpb24uYmluZCh0aGlzKX0gY29tbW9uX3NldHRpbmdzPXt0aGlzLnByb3BzLk9QRF9TVEFURS5jb21tb25fc2V0dGluZ3N9IC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRTZWFyY2hUeXBlID09ICdsYWInKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaFZpZXcgey4uLnRoaXMucHJvcHN9IHsuLi50aGlzLnByb3BzLkxBQl9TVEFURX0gc2VsZWN0ZWQ9e3RoaXMucHJvcHMuc2VsZWN0ZWRTZWFyY2hUeXBlfSBjaGFuZ2VTZWxlY3Rpb249e3RoaXMuY2hhbmdlU2VsZWN0aW9uLmJpbmQodGhpcyl9IGNvbW1vbl9zZXR0aW5ncz17dGhpcy5wcm9wcy5PUERfU1RBVEUuY29tbW9uX3NldHRpbmdzfSAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkU2VhcmNoVHlwZSA9PSAncHJvY2VkdXJlcycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoVmlldyB7Li4udGhpcy5wcm9wc30gey4uLnRoaXMucHJvcHMuT1BEX1NUQVRFfSBzZWxlY3RlZD17dGhpcy5wcm9wcy5zZWxlY3RlZFNlYXJjaFR5cGV9IGNoYW5nZVNlbGVjdGlvbj17dGhpcy5jaGFuZ2VTZWxlY3Rpb24uYmluZCh0aGlzKX0gY29tbW9uX3NldHRpbmdzPXt0aGlzLnByb3BzLk9QRF9TVEFURS5jb21tb25fc2V0dGluZ3N9Lz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgbGV0IE9QRF9TVEFURSA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIExPQURFRF9TRUFSQ0hfQ1JJVEVSSUFfT1BELFxuICAgICAgICAgICAgc3BlY2lhbGl6YXRpb25zLFxuICAgICAgICAgICAgY29uZGl0aW9ucyxcbiAgICAgICAgICAgIHNlbGVjdGVkQ3JpdGVyaWFzLFxuICAgICAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgICAgIGZpbHRlckNyaXRlcmlhLFxuICAgICAgICAgICAgbG9jYXRpb25UeXBlLFxuICAgICAgICAgICAgcHJvY2VkdXJlX2NhdGVnb3JpZXMsXG4gICAgICAgICAgICBwcm9jZWR1cmVzLFxuICAgICAgICAgICAgY29tbW9uX3NldHRpbmdzXG4gICAgICAgIH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfT1BEXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIExPQURFRF9TRUFSQ0hfQ1JJVEVSSUFfT1BELFxuICAgICAgICAgICAgc3BlY2lhbGl6YXRpb25zLFxuICAgICAgICAgICAgY29uZGl0aW9ucyxcbiAgICAgICAgICAgIHNlbGVjdGVkQ3JpdGVyaWFzLFxuICAgICAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgICAgIGZpbHRlckNyaXRlcmlhLFxuICAgICAgICAgICAgbG9jYXRpb25UeXBlLFxuICAgICAgICAgICAgcHJvY2VkdXJlX2NhdGVnb3JpZXMsXG4gICAgICAgICAgICBwcm9jZWR1cmVzLFxuICAgICAgICAgICAgY29tbW9uX3NldHRpbmdzXG4gICAgICAgIH1cbiAgICB9KSgpXG5cbiAgICBsZXQgTEFCX1NUQVRFID0gKCgpID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgTE9BREVEX1NFQVJDSF9DUklURVJJQV9MQUIsXG4gICAgICAgICAgICBjb21tb25fdGVzdHMsXG4gICAgICAgICAgICBjb21tb25fY29uZGl0aW9ucyxcbiAgICAgICAgICAgIHByZWZlcnJlZF9sYWJzLFxuICAgICAgICAgICAgc2VsZWN0ZWRDcml0ZXJpYXMsXG4gICAgICAgICAgICBzZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICAgICAgZmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgICAgICBsb2NhdGlvblR5cGUsXG4gICAgICAgICAgICBjb21tb25fcGFja2FnZSxcbiAgICAgICAgICAgIGZpbHRlckNyaXRlcmlhUGFja2FnZXMsXG4gICAgICAgICAgICBzZWxlY3RlZFBhY2thZ2VzXG4gICAgICAgIH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfTEFCU1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBMT0FERURfU0VBUkNIX0NSSVRFUklBX0xBQixcbiAgICAgICAgICAgIGNvbW1vbl90ZXN0cyxcbiAgICAgICAgICAgIGNvbW1vbl9jb25kaXRpb25zLFxuICAgICAgICAgICAgcHJlZmVycmVkX2xhYnMsXG4gICAgICAgICAgICBzZWxlY3RlZENyaXRlcmlhcyxcbiAgICAgICAgICAgIHNlbGVjdGVkTG9jYXRpb24sXG4gICAgICAgICAgICBmaWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgICAgIGxvY2F0aW9uVHlwZSxcbiAgICAgICAgICAgIGNvbW1vbl9wYWNrYWdlLFxuICAgICAgICAgICAgZmlsdGVyQ3JpdGVyaWFQYWNrYWdlcyxcbiAgICAgICAgICAgIHNlbGVjdGVkUGFja2FnZXNcbiAgICAgICAgfVxuICAgIH0pKClcblxuICAgIGxldCBJUERfU1RBVEUgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBMT0FERURfU0VBUkNIX0NSSVRFUklBX09QRCxcbiAgICAgICAgICAgIGlwZF9wcm9jZWR1cmVzLFxuICAgICAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgICAgIGxvY2F0aW9uVHlwZVxuXG4gICAgICAgIH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfT1BEXG5cbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgc2VsZWN0ZWRDcml0ZXJpYXNcbiAgICAgICAgfSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9JUERcblxuICAgICAgICByZXR1cm57XG4gICAgICAgICAgICBMT0FERURfU0VBUkNIX0NSSVRFUklBX09QRCxcbiAgICAgICAgICAgIGlwZF9wcm9jZWR1cmVzLFxuICAgICAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgICAgIGxvY2F0aW9uVHlwZSxcbiAgICAgICAgICAgIHNlbGVjdGVkQ3JpdGVyaWFzXG4gICAgICAgIH1cblxuICAgIH0pKClcblxuICAgIGxldCB7IHNlbGVjdGVkU2VhcmNoVHlwZSwgaXNfbG9naW5fdXNlcl9pbnN1cmVkLCBwcm9maWxlcywgZGVmYXVsdFByb2ZpbGUgfSA9IHN0YXRlLlVTRVJcblxuICAgIHJldHVybiB7IE9QRF9TVEFURSwgTEFCX1NUQVRFLCBzZWxlY3RlZFNlYXJjaFR5cGUsIElQRF9TVEFURSwgaXNfbG9naW5fdXNlcl9pbnN1cmVkLCBwcm9maWxlcywgZGVmYXVsdFByb2ZpbGUgfVxuXG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8vIG9wZFxuICAgICAgICBsb2FkT1BEQ29tbW9uQ3JpdGVyaWE6IChzZWxlY3RlZExvY2F0aW9uKSA9PiBkaXNwYXRjaChsb2FkT1BEQ29tbW9uQ3JpdGVyaWEoc2VsZWN0ZWRMb2NhdGlvbikpLFxuICAgICAgICB0b2dnbGVPUERDcml0ZXJpYTogKHR5cGUsIGNyaXRlcmlhKSA9PiBkaXNwYXRjaCh0b2dnbGVPUERDcml0ZXJpYSh0eXBlLCBjcml0ZXJpYSkpLFxuICAgICAgICBnZXRPUERDcml0ZXJpYVJlc3VsdHM6IChzZWFyY2hTdHJpbmcsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaChnZXRPUERDcml0ZXJpYVJlc3VsdHMoc2VhcmNoU3RyaW5nLCBjYWxsYmFjaykpLFxuICAgICAgICByZXNldEZpbHRlcnM6ICgpID0+IGRpc3BhdGNoKHJlc2V0RmlsdGVycygpKSxcbiAgICAgICAgbWVyZ2VPUERTdGF0ZTogKHN0YXRlLCBmZXRjaE5ld1Jlc3VsdHMpID0+IGRpc3BhdGNoKG1lcmdlT1BEU3RhdGUoc3RhdGUsIGZldGNoTmV3UmVzdWx0cykpLFxuICAgICAgICBjbG9uZUNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzOiAoc2VsZWN0ZWRDcml0ZXJpYXMpID0+IGRpc3BhdGNoKGNsb25lQ29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMoc2VsZWN0ZWRDcml0ZXJpYXMpKSxcbiAgICAgICAgZmlsdGVyU2VsZWN0ZWRDcml0ZXJpYTogKHR5cGUpID0+IGRpc3BhdGNoKGZpbHRlclNlbGVjdGVkQ3JpdGVyaWEodHlwZSkpLFxuICAgICAgICAvL2xhYlxuICAgICAgICBsb2FkTGFiQ29tbW9uQ3JpdGVyaWFzOiAoKSA9PiBkaXNwYXRjaChsb2FkTGFiQ29tbW9uQ3JpdGVyaWFzKCkpLFxuICAgICAgICB0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYTogKHR5cGUsIGNyaXRlcmlhLCBmb3JjZUFkZCkgPT4gZGlzcGF0Y2godG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkKSksXG4gICAgICAgIGdldERpYWdub3Npc0NyaXRlcmlhUmVzdWx0czogKHNlYXJjaFN0cmluZywgY2FsbGJhY2spID0+IGRpc3BhdGNoKGdldERpYWdub3Npc0NyaXRlcmlhUmVzdWx0cyhzZWFyY2hTdHJpbmcsIGNhbGxiYWNrKSksXG4gICAgICAgIGNsZWFyRXh0cmFUZXN0czogKCkgPT4gZGlzcGF0Y2goY2xlYXJFeHRyYVRlc3RzKCkpLFxuICAgICAgICBjbGVhckFsbFRlc3RzOiAoKSA9PiBkaXNwYXRjaChjbGVhckFsbFRlc3RzKCkpLFxuICAgICAgICBtZXJnZUxBQlN0YXRlOiAoc3RhdGUsIGZldGNoTmV3UmVzdWx0cykgPT4gZGlzcGF0Y2gobWVyZ2VMQUJTdGF0ZShzdGF0ZSwgZmV0Y2hOZXdSZXN1bHRzKSksXG4gICAgICAgIHNlbGVjdFNlYXJjaFR5cGU6ICh0eXBlKSA9PiBkaXNwYXRjaChzZWxlY3RTZWFyY2hUeXBlKHR5cGUpKSxcbiAgICAgICAgZ2V0RWxhc3RpY0NyaXRlcmlhUmVzdWx0czogKHNlYXJjaFN0cmluZywgdHlwZSwgbG9jYXRpb24sIGNhbGxiYWNrKSA9PiBkaXNwYXRjaChnZXRFbGFzdGljQ3JpdGVyaWFSZXN1bHRzKHNlYXJjaFN0cmluZywgdHlwZSwgbG9jYXRpb24sIGNhbGxiYWNrKSksXG4gICAgICAgIC8vIHBhY2thZ2VcbiAgICAgICAgc2V0UGFja2FnZUlkOiAocGFja2FnZV9pZCwgaXNIb21lUGFnZSkgPT4gZGlzcGF0Y2goc2V0UGFja2FnZUlkKHBhY2thZ2VfaWQsIGlzSG9tZVBhZ2UpKSxcbiAgICAgICAgdG9nZ2xlU2VhcmNoUGFja2FnZXM6IChoZWFsdGhQYWNrYWdlKSA9PiBkaXNwYXRjaCh0b2dnbGVTZWFyY2hQYWNrYWdlcyhoZWFsdGhQYWNrYWdlKSksXG4gICAgICAgIHRvZ2dsZUlQRENyaXRlcmlhOiAoY3JpdGVyaWEsIGZvcmNlQWRkKSA9PiBkaXNwYXRjaCh0b2dnbGVJUERDcml0ZXJpYShjcml0ZXJpYSwgZm9yY2VBZGQpKSxcbiAgICAgICAgbG9hZE9QREluc3VyYW5jZTogKGNpdHkpID0+IGRpc3BhdGNoKGxvYWRPUERJbnN1cmFuY2UoY2l0eSkpXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNlYXJjaCk7XG4iXSwic291cmNlUm9vdCI6IiJ9