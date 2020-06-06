exports.ids = [17];
exports.modules = {

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _initialsPicture = __webpack_require__(/*! ../initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

var _mapHelpers = __webpack_require__(/*! ../../../helpers/mapHelpers.js */ "./dev/js/helpers/mapHelpers.js");

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

class CommonSearch extends _react2.default.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchResults: [],
            searchValue: '',
            loading: ''
        };
    }

    componentDidMount() {

        if (this.props.hospital_id_search) {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'IpdHospitalSearch', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-hospital-search', 'searched': '', 'searchString': this.state.searchValue, hospital_id: this.props.hospital_id_search, 'page': this.props.hospital_id_search ? 'hospitalSearch' : ''
            };

            _gtm2.default.sendEvent({ data: data });
        }
        this.getSearchResults = debouncer(this.getSearchResults.bind(this), 200);
    }

    inputHandler(e) {
        this.setState({ searchValue: e.target.value });
        let searchString = e.target.value.trim();
        if (searchString.length) {
            this.getSearchResults();
        } else {
            this.setState({ searchResults: [] });
        }
    }

    focusOut() {
        let data = {
            'Category': 'ConsumerApp', 'Action': 'searchInputFocusOut', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'search-string-on-blur', 'searched': '', 'searchString': this.state.searchValue, 'type': '', 'from': 'article', 'page': this.props.hospital_id_search ? 'hospitalSearch' : ''
        };
        _gtm2.default.sendEvent({ data: data });
    }

    getSearchResults() {
        this.setState({ loading: true });
        let lat = 28.644800;
        let long = 77.216721;
        let place_id = "";

        if (this.props.OPD_STATE && this.props.OPD_STATE.selectedLocation) {
            place_id = this.props.OPD_STATE.selectedLocation.place_id || "";
            lat = this.props.OPD_STATE.selectedLocation.geometry.location.lat;
            long = this.props.OPD_STATE.selectedLocation.geometry.location.lng;
            if (typeof lat === 'function') lat = lat();
            if (typeof long === 'function') long = long();

            lat = parseFloat(parseFloat(lat).toFixed(6));
            long = parseFloat(parseFloat(long).toFixed(6));
        }

        let location = { lat: lat, long: long };
        let searchType = '';
        let extraSearchParams = {};
        if (this.props.hospital_id_search) {
            extraSearchParams.hospital_id = this.props.hospital_id_search;
            searchType = 'opd';
            location.lat = this.props.hospital_lat || location.lat;
            location.long = this.props.hospital_long || location.long;
        }

        this.props.getElasticCriteriaResults(this.state.searchValue.trim(), searchType, location, extraSearchParams).then(filterSearchResults => {

            if (filterSearchResults && filterSearchResults.suggestion) {

                let filterResultsName = filterSearchResults.suggestion.map(x => x.name).join(',') || '';
                let gtmData = {
                    'Category': 'ConsumerApp', 'Action': 'searchquery', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'search-query', 'searchString': this.state.searchValue,
                    'searchType': '', 'results': filterResultsName, 'from': 'article', 'page': this.props.hospital_id_search ? 'hospitalSearch' : ''
                };
                _gtm2.default.sendEvent({ data: gtmData });
                let filterData = filterSearchResults.suggestion;

                this.setState({ searchResults: filterData, loading: false, type: '' });
            }
        });
    }

    addCriteria(criteria) {

        let LAB_TYPES = ['lab_test_synonym', 'lab_test', 'lab'];

        let OPD_TYPES = ['visit_reason', 'practice_specialization', 'doctor', 'hospital', 'practice_specialization_synonym'];

        let PROCEDURE_TYPES = ['procedure_category', 'procedure'];

        let IPD_TYPES = ['ipd'];

        if (this.props.latitude && this.props.longitude) {
            (0, _mapHelpers._getlocationFromLatLong)(this.props.latitude, this.props.longitude, 'city', locationData => {
                if (locationData) {
                    this.props.selectLocation(locationData, 'geoip', true);
                }
            });
        }

        criteria = Object.assign({}, criteria);

        if (criteria.type) {

            let type = '';

            let action = '',
                event = '';

            if (criteria.type.includes('visit_reason')) {
                type = 'opd';

                let data = {
                    'Category': 'ConsumerApp', 'Action': 'VisitReasonSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'visit-reason-searched', 'SelectedId': criteria.id || '', 'searched': 'autosuggest', 'searchString': this.state.searchValue, 'page': this.props.hospital_id_search ? 'hospitalSearch' : ''
                };
                _gtm2.default.sendEvent({ data: data });

                criteria.id = criteria.action.value.join(',');
                criteria.type = 'speciality';
            } else if (criteria.action.param.includes('hospital_name')) {
                type = 'opd';
                let data = {
                    'Category': 'ConsumerApp', 'Action': 'HospitalNameSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'hospital-name-searched', 'hospitalId': criteria.action.id || '', 'searched': 'autosuggest', 'searchString': this.state.searchValue || '', 'page': this.props.hospital_id_search ? 'hospitalSearch' : ''
                };
                _gtm2.default.sendEvent({ data: data });

                this.searchProceedOPD("", "", criteria.action.id);
                return;
            } else if (criteria.action.param.includes('procedure_category_ids')) {
                type = 'opd';
                criteria.id = criteria.action.value[0];
                criteria.type = 'procedures_category';
            } else if (criteria.action.param.includes('procedure_ids')) {
                type = 'opd';
                let data = {
                    'Category': 'ConsumerApp', 'Action': 'CommonProceduresSelected', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'common-procedures-selected', 'selected': criteria.name || '', 'selectedId': criteria.action.value ? criteria.action.value[0] : '', 'searched': 'autosuggest', 'searchString': this.state.searchValue, 'page': this.props.hospital_id_search ? 'hospitalSearch' : ''
                };
                _gtm2.default.sendEvent({ data: data });

                criteria.id = criteria.action.value[0];
                criteria.type = 'procedures';
            } else if (criteria.action.param.includes('specializations')) {
                type = 'opd';
                let data = {
                    'Category': 'ConsumerApp', 'Action': 'CommonSpecializationsSelected', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'common-specializations-selected', 'selected': criteria.name || '', 'selectedId': criteria.action.value ? criteria.action.value[0] : '', 'searched': 'autosuggest', 'searchString': this.state.searchValue, 'page': this.props.hospital_id_search ? 'hospitalSearch' : ''
                };
                _gtm2.default.sendEvent({ data: data });

                criteria.id = criteria.action.value[0];
                criteria.type = 'speciality';
            } else if (criteria.action.param.includes('doctor_name')) {
                type = 'opd';

                let data = {
                    'Category': 'ConsumerApp', 'Action': 'DoctorNameSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-name-searched', 'selectedId': criteria.action.value[0] || '', 'searched': 'autosuggest', 'searchString': this.state.searchValue || '', 'page': this.props.hospital_id_search ? 'hospitalSearch' : ''
                };
                _gtm2.default.sendEvent({ data: data });

                this.props.history.push(`/opd/doctor/${criteria.action.value[0]}?hide_search_data=true`);

                return;
            } else if (criteria.type == "lab") {
                this.props.clearExtraTests();
                let data = {
                    'Category': 'ConsumerApp', 'Action': 'LabNameSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lab-name-searched', 'selectedId': criteria.action.value[0] || '', 'searched': 'autosuggest', 'searchString': this.state.searchValue || '', 'page': this.props.hospital_id_search ? 'hospitalSearch' : ''
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

                this.props.toggleDiagnosisCriteria('test', criteria, true);
                setTimeout(() => {
                    this.searchProceedLAB("", false);
                }, 100);
            } else if (criteria.type.includes('ipd')) {
                let data = {
                    'Category': 'ConsumerApp', 'Action': 'IPDNameSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-name-searched', 'selectedId': criteria.action.value[0] || '', 'searched': 'autosuggest', 'searchString': this.state.searchValue || '', 'page': this.props.hospital_id_search ? 'hospitalSearch' : ''
                };
                _gtm2.default.sendEvent({ data: data });
                let ipdData = Object.assign({}, criteria);
                ipdData.id = criteria.action.value[0];
                ipdData.type = 'ipd';
                this.props.toggleIPDCriteria(ipdData, true);

                setTimeout(() => {
                    this.props.history.push(`/ipdInfo?ipd_id=${ipdData.id}`);
                }, 100);
            }

            if (type == 'opd') {
                this.props.cloneCommonSelectedCriterias(criteria);
                this.setState({ searchValue: "" });
                this.searchProceedOPD('', '', this.props.hospital_id_search || '');
            }
        }
    }

    searchProceedOPD(doctor_name = "", hospital_name = "", hospital_id = "") {
        // handle doctor name, hospital name
        let state = {
            filterCriteria: _extends({}, this.props.OPD_STATE.filterCriteria, {
                doctor_name, hospital_name, hospital_id
            }),
            nextFilterCriteria: _extends({}, this.props.OPD_STATE.filterCriteria, {
                doctor_name, hospital_name, hospital_id
            })
        };

        if (doctor_name || hospital_name || hospital_id) {
            state.selectedCriterias = [];
            state.commonSelectedCriterias = [];
        }

        this.props.mergeOPDState(state, true);

        this.props.history.push('/opd/searchresults');
    }

    searchProceedLAB(lab_name = "", show_all_labs) {
        // handle doctor name, hospital name
        this.props.mergeLABState({
            filterCriteria: _extends({}, this.props.LAB_STATE.filterCriteria, {
                lab_name
            }),
            nextFilterCriteria: _extends({}, this.props.LAB_STATE.filterCriteria, {
                lab_name
            }),
            currentSearchedCriterias: show_all_labs ? [] : this.props.LAB_STATE.selectedCriterias,
            nextSelectedCriterias: show_all_labs ? [] : this.props.LAB_STATE.selectedCriterias
        }, true);

        let selectedTestIds = this.props.LAB_STATE.selectedCriterias.map(test => test.id);
        let selectedTestsName = this.props.LAB_STATE.selectedCriterias.map(test => test.name);
        let data = {
            'Category': 'ConsumerApp', 'Action': 'ShowLabClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'show-lab-clicked', 'SelectedTestIds': selectedTestIds.join(',') || '', 'SelectedTestName': selectedTestsName.join(','), 'TestCount': selectedTestIds.length || 0
        };
        _gtm2.default.sendEvent({ data: data });

        this.props.history.push('/lab/searchresults');
    }

    onFocusIn() {
        if (this.props.getInputFocus) {
            this.props.getInputFocus();
        }
    }

    render() {

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                { className: 'articleSearchWidget' },
                _react2.default.createElement(
                    'div',
                    { className: 'articleInputContainer' },
                    _react2.default.createElement('input', { className: 'artc-inp', type: 'text', onChange: this.inputHandler.bind(this), value: this.state.searchValue, placeholder: this.props.hospital_id_search ? `Search for Doctor, Speciality within Hospital` : "Search Doctors & Tests", onBlur: () => this.focusOut(), onFocus: this.onFocusIn.bind(this) }),
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
                                this.state.searchResults.map((cat, j) => {
                                    return _react2.default.createElement(
                                        'li',
                                        { key: j, onClick: this.addCriteria.bind(this, cat) },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'serach-rslt-with-img' },
                                            cat.type && cat.type.includes('doctor') ? _react2.default.createElement(
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
                                                cat.type && cat.type.includes('ipd') ? _react2.default.createElement(
                                                    'span',
                                                    { className: 'search-span-sub' },
                                                    'IPD Procedures'
                                                ) : cat.is_package && cat.is_package.length && cat.is_package[0] ? _react2.default.createElement(
                                                    'span',
                                                    { className: 'search-span-sub' },
                                                    'Health Package ',
                                                    cat.number_of_tests && cat.number_of_tests.length && cat.number_of_tests[0] ? ` | ${cat.number_of_tests[0]} Test Included` : ''
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
                                    { onClick: () => {

                                            let data = {
                                                'Category': 'ConsumerApp', 'Action': 'DoctorNameSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-name-searched', 'selectedId': '', 'searched': '', 'searchString': this.state.searchValue || '', 'page': this.props.hospital_id_search ? 'hospitalSearch' : ''
                                            };
                                            _gtm2.default.sendEvent({ data: data });

                                            this.searchProceedOPD(this.state.searchValue, "", this.props.hospital_id_search || '');
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
                                    { onClick: () => {

                                            let data = {
                                                'Category': 'ConsumerApp', 'Action': 'LabNameSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lab-name-searched', 'selectedId': '', 'searched': '', 'searchString': this.state.searchValue || '', 'page': this.props.hospital_id_search ? 'hospitalSearch' : ''
                                            };
                                            _gtm2.default.sendEvent({ data: data });

                                            this.searchProceedLAB(this.state.searchValue);
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
                                    { onClick: () => {

                                            let data = {
                                                'Category': 'ConsumerApp', 'Action': 'HospitalNameSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'hospital-name-searched', 'hospitalId': '', 'searched': '', 'searchString': this.state.searchValue || '', 'page': this.props.hospital_id_search ? 'hospitalSearch' : ''
                                            };
                                            _gtm2.default.sendEvent({ data: data });

                                            this.searchProceedOPD("", this.state.searchValue, this.props.hospital_id_search || '');
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

}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _commonSearch = __webpack_require__(/*! ../../components/commons/commonSearch */ "./dev/js/components/commons/commonSearch/index.js");

var _commonSearch2 = _interopRequireDefault(_commonSearch);

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CommonSearch extends _react2.default.Component {

	componentDidMount() {
		setTimeout(() => {
			//	this.props.setFetchResults(true)
		}, 1000);
	}

	render() {

		return _react2.default.createElement(_commonSearch2.default, this.props);
	}
}

const mapStateToProps = state => {

	let OPD_STATE = (() => {

		const {
			selectedLocation,
			filterCriteria

		} = state.SEARCH_CRITERIA_OPD;

		return {
			selectedLocation,
			filterCriteria
		};
	})();

	let LAB_STATE = (() => {

		const {
			selectedLocation,
			filterCriteria,
			selectedCriterias

		} = state.SEARCH_CRITERIA_LABS;

		return {
			selectedLocation,
			filterCriteria,
			selectedCriterias
		};
	})();

	let IPD_STATE = (() => {

		const {
			selectedCriterias

		} = state.SEARCH_CRITERIA_IPD;

		return {
			selectedCriterias
		};
	})();

	return {
		OPD_STATE, LAB_STATE, IPD_STATE
	};
};

const mapDispatchToProps = dispatch => {

	return {
		getElasticCriteriaResults: (searchString, type, location, extraSearchParams) => dispatch((0, _index.getElasticCriteriaResults)(searchString, type, location, extraSearchParams)),
		cloneCommonSelectedCriterias: selectedCriterias => dispatch((0, _index.cloneCommonSelectedCriterias)(selectedCriterias)),
		mergeOPDState: (state, fetchNewResults) => dispatch((0, _index.mergeOPDState)(state, fetchNewResults)),
		clearExtraTests: () => dispatch((0, _index.clearExtraTests)()),
		clearAllTests: () => dispatch((0, _index.clearAllTests)()),
		mergeLABState: (state, fetchNewResults) => dispatch((0, _index.mergeLABState)(state, fetchNewResults)),
		toggleDiagnosisCriteria: (type, criteria, forceAdd) => dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria, forceAdd)),
		toggleIPDCriteria: (criteria, forceAdd) => dispatch((0, _index.toggleIPDCriteria)(criteria, forceAdd)),
		selectLocation: (location, type, fetchNewResults) => dispatch((0, _index.selectLocation)(location, type, fetchNewResults))
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CommonSearch);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2NvbW1vblNlYXJjaC9Db21tb25TZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9jb21tb25TZWFyY2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvY29tbW9ucy9Db21tb25TZWFyY2guanMiXSwibmFtZXMiOlsiZGVib3VuY2VyIiwiZm4iLCJkZWxheSIsInRpbWVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImNhbGwiLCJDb21tb25TZWFyY2giLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInNlYXJjaFJlc3VsdHMiLCJzZWFyY2hWYWx1ZSIsImxvYWRpbmciLCJjb21wb25lbnREaWRNb3VudCIsImhvc3BpdGFsX2lkX3NlYXJjaCIsImRhdGEiLCJHVE0iLCJnZXRVc2VySWQiLCJob3NwaXRhbF9pZCIsInNlbmRFdmVudCIsImdldFNlYXJjaFJlc3VsdHMiLCJiaW5kIiwiaW5wdXRIYW5kbGVyIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJzZWFyY2hTdHJpbmciLCJ0cmltIiwibGVuZ3RoIiwiZm9jdXNPdXQiLCJsYXQiLCJsb25nIiwicGxhY2VfaWQiLCJPUERfU1RBVEUiLCJzZWxlY3RlZExvY2F0aW9uIiwiZ2VvbWV0cnkiLCJsb2NhdGlvbiIsImxuZyIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwic2VhcmNoVHlwZSIsImV4dHJhU2VhcmNoUGFyYW1zIiwiaG9zcGl0YWxfbGF0IiwiaG9zcGl0YWxfbG9uZyIsImdldEVsYXN0aWNDcml0ZXJpYVJlc3VsdHMiLCJ0aGVuIiwiZmlsdGVyU2VhcmNoUmVzdWx0cyIsInN1Z2dlc3Rpb24iLCJmaWx0ZXJSZXN1bHRzTmFtZSIsIm1hcCIsIngiLCJuYW1lIiwiam9pbiIsImd0bURhdGEiLCJmaWx0ZXJEYXRhIiwidHlwZSIsImFkZENyaXRlcmlhIiwiY3JpdGVyaWEiLCJMQUJfVFlQRVMiLCJPUERfVFlQRVMiLCJQUk9DRURVUkVfVFlQRVMiLCJJUERfVFlQRVMiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImxvY2F0aW9uRGF0YSIsInNlbGVjdExvY2F0aW9uIiwiT2JqZWN0IiwiYXNzaWduIiwiYWN0aW9uIiwiZXZlbnQiLCJpbmNsdWRlcyIsImlkIiwicGFyYW0iLCJzZWFyY2hQcm9jZWVkT1BEIiwiaGlzdG9yeSIsInB1c2giLCJjbGVhckV4dHJhVGVzdHMiLCJ1cmwiLCJ0ZXN0X3R5cGUiLCJ0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSIsInNlYXJjaFByb2NlZWRMQUIiLCJpcGREYXRhIiwidG9nZ2xlSVBEQ3JpdGVyaWEiLCJjbG9uZUNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzIiwiZG9jdG9yX25hbWUiLCJob3NwaXRhbF9uYW1lIiwiZmlsdGVyQ3JpdGVyaWEiLCJuZXh0RmlsdGVyQ3JpdGVyaWEiLCJzZWxlY3RlZENyaXRlcmlhcyIsImNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzIiwibWVyZ2VPUERTdGF0ZSIsImxhYl9uYW1lIiwic2hvd19hbGxfbGFicyIsIm1lcmdlTEFCU3RhdGUiLCJMQUJfU1RBVEUiLCJjdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMiLCJuZXh0U2VsZWN0ZWRDcml0ZXJpYXMiLCJzZWxlY3RlZFRlc3RJZHMiLCJ0ZXN0Iiwic2VsZWN0ZWRUZXN0c05hbWUiLCJvbkZvY3VzSW4iLCJnZXRJbnB1dEZvY3VzIiwicmVuZGVyIiwiQVNTRVRTX0JBU0VfVVJMIiwiY29tbW9uU2VhcmNoIiwiY2F0IiwiaiIsImltYWdlX3BhdGgiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsIm1hcmdpbiIsInBhZGRpbmciLCJpc19wYWNrYWdlIiwibnVtYmVyX29mX3Rlc3RzIiwibG9jYWxpdHkiLCJBcnJheSIsImlzQXJyYXkiLCJ2aXNpYmxlX25hbWUiLCJwcmltYXJ5X25hbWUiLCJzbGljZSIsInBvcHVsYXJpdHkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJTRUFSQ0hfQ1JJVEVSSUFfT1BEIiwiU0VBUkNIX0NSSVRFUklBX0xBQlMiLCJJUERfU1RBVEUiLCJTRUFSQ0hfQ1JJVEVSSUFfSVBEIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJmZXRjaE5ld1Jlc3VsdHMiLCJjbGVhckFsbFRlc3RzIiwiZm9yY2VBZGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLE1BQU1BLFlBQVksQ0FBQ0MsRUFBRCxFQUFLQyxLQUFMLEtBQWU7QUFDN0IsUUFBSUMsUUFBUSxJQUFaO0FBQ0EsV0FBTyxZQUFZO0FBQ2ZDLHFCQUFhRCxLQUFiO0FBQ0FBLGdCQUFRRSxXQUFXLE1BQU07QUFDckJKLGVBQUdLLElBQUgsQ0FBUSxJQUFSO0FBQ0gsU0FGTyxFQUVMSixLQUZLLENBQVI7QUFHSCxLQUxEO0FBTUgsQ0FSRDs7QUFVQSxNQUFNSyxZQUFOLFNBQTJCQyxnQkFBTUMsU0FBakMsQ0FBMkM7O0FBRTFDQyxnQkFBWUMsS0FBWixFQUFrQjtBQUNqQixjQUFNQSxLQUFOO0FBQ0EsYUFBS0MsS0FBTCxHQUFhO0FBQ1pDLDJCQUFlLEVBREg7QUFFWkMseUJBQWEsRUFGRDtBQUdaQyxxQkFBUztBQUhHLFNBQWI7QUFLQTs7QUFFREMsd0JBQW1COztBQUVaLFlBQUcsS0FBS0wsS0FBTCxDQUFXTSxrQkFBZCxFQUFrQztBQUM5QixnQkFBSUMsT0FBTztBQUNQLDRCQUFZLGFBREwsRUFDb0IsVUFBVSxtQkFEOUIsRUFDbUQsY0FBY0MsY0FBSUMsU0FBSixNQUFtQixFQURwRixFQUN3RixVQUFVLENBRGxHLEVBQ3FHLFNBQVMscUJBRDlHLEVBQ3FJLFlBQVksRUFEakosRUFDcUosZ0JBQWdCLEtBQUtSLEtBQUwsQ0FBV0UsV0FEaEwsRUFDNkxPLGFBQWEsS0FBS1YsS0FBTCxDQUFXTSxrQkFEck4sRUFDeU8sUUFB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QWdCZSx5QkFBUVAsZUFBUixFQUF5Qkssa0JBQXpCLEVBQTZDNUgsWUFBN0MsQyIsImZpbGUiOiIxNy5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IEluaXRpYWxzUGljdHVyZSBmcm9tICcuLi9pbml0aWFsc1BpY3R1cmUnXG5pbXBvcnQgeyBfZ2V0bG9jYXRpb25Gcm9tTGF0TG9uZyB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvbWFwSGVscGVycy5qcydcblxuY29uc3QgZGVib3VuY2VyID0gKGZuLCBkZWxheSkgPT4ge1xuICAgIGxldCB0aW1lciA9IG51bGxcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBmbi5jYWxsKHRoaXMpXG4gICAgICAgIH0sIGRlbGF5KVxuICAgIH1cbn1cblxuY2xhc3MgQ29tbW9uU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNlYXJjaFJlc3VsdHM6IFtdLFxuXHRcdFx0c2VhcmNoVmFsdWU6ICcnLFxuXHRcdFx0bG9hZGluZzogJydcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXG4gICAgICAgIGlmKHRoaXMucHJvcHMuaG9zcGl0YWxfaWRfc2VhcmNoKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0lwZEhvc3BpdGFsU2VhcmNoJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnaXBkLWhvc3BpdGFsLXNlYXJjaCcsICdzZWFyY2hlZCc6ICcnLCAnc2VhcmNoU3RyaW5nJzogdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSwgaG9zcGl0YWxfaWQ6IHRoaXMucHJvcHMuaG9zcGl0YWxfaWRfc2VhcmNoLCAncGFnZSc6dGhpcy5wcm9wcy5ob3NwaXRhbF9pZF9zZWFyY2g/J2hvc3BpdGFsU2VhcmNoJzonJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0U2VhcmNoUmVzdWx0cyA9IGRlYm91bmNlcih0aGlzLmdldFNlYXJjaFJlc3VsdHMuYmluZCh0aGlzKSwgMjAwKVxuXHR9XG5cblx0aW5wdXRIYW5kbGVyKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFZhbHVlOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICBsZXQgc2VhcmNoU3RyaW5nID0gZS50YXJnZXQudmFsdWUudHJpbSgpXG4gICAgICAgIGlmIChzZWFyY2hTdHJpbmcubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmdldFNlYXJjaFJlc3VsdHMoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFJlc3VsdHM6IFtdIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb2N1c091dCgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ3NlYXJjaElucHV0Rm9jdXNPdXQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdzZWFyY2gtc3RyaW5nLW9uLWJsdXInLCAnc2VhcmNoZWQnOiAnJywgJ3NlYXJjaFN0cmluZyc6IHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUsICd0eXBlJzogJycsICdmcm9tJzogJ2FydGljbGUnLCAncGFnZSc6dGhpcy5wcm9wcy5ob3NwaXRhbF9pZF9zZWFyY2g/J2hvc3BpdGFsU2VhcmNoJzonJ1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgfVxuXG5cdGdldFNlYXJjaFJlc3VsdHMoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pXG4gICAgICAgIGxldCBsYXQgPSAyOC42NDQ4MDBcbiAgICAgICAgbGV0IGxvbmcgPSA3Ny4yMTY3MjFcbiAgICAgICAgbGV0IHBsYWNlX2lkID0gXCJcIlxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLk9QRF9TVEFURSAmJiB0aGlzLnByb3BzLk9QRF9TVEFURS5zZWxlY3RlZExvY2F0aW9uKSB7XG4gICAgICAgICAgICBwbGFjZV9pZCA9IHRoaXMucHJvcHMuT1BEX1NUQVRFLnNlbGVjdGVkTG9jYXRpb24ucGxhY2VfaWQgfHwgXCJcIlxuICAgICAgICAgICAgbGF0ID0gdGhpcy5wcm9wcy5PUERfU1RBVEUuc2VsZWN0ZWRMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sYXRcbiAgICAgICAgICAgIGxvbmcgPSB0aGlzLnByb3BzLk9QRF9TVEFURS5zZWxlY3RlZExvY2F0aW9uLmdlb21ldHJ5LmxvY2F0aW9uLmxuZ1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBsYXQgPT09ICdmdW5jdGlvbicpIGxhdCA9IGxhdCgpXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxvbmcgPT09ICdmdW5jdGlvbicpIGxvbmcgPSBsb25nKClcblxuICAgICAgICAgICAgbGF0ID0gcGFyc2VGbG9hdChwYXJzZUZsb2F0KGxhdCkudG9GaXhlZCg2KSlcbiAgICAgICAgICAgIGxvbmcgPSBwYXJzZUZsb2F0KHBhcnNlRmxvYXQobG9uZykudG9GaXhlZCg2KSlcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsb2NhdGlvbiA9IHsgbGF0OiBsYXQsIGxvbmc6IGxvbmcgfVxuICAgICAgICBsZXQgc2VhcmNoVHlwZSA9ICcnXG4gICAgICAgIGxldCBleHRyYVNlYXJjaFBhcmFtcyA9IHt9XG4gICAgICAgIGlmKHRoaXMucHJvcHMuaG9zcGl0YWxfaWRfc2VhcmNoKSB7XG4gICAgICAgICAgICBleHRyYVNlYXJjaFBhcmFtcy5ob3NwaXRhbF9pZCA9IHRoaXMucHJvcHMuaG9zcGl0YWxfaWRfc2VhcmNoXG4gICAgICAgICAgICBzZWFyY2hUeXBlID0gJ29wZCdcbiAgICAgICAgICAgIGxvY2F0aW9uLmxhdCA9IHRoaXMucHJvcHMuaG9zcGl0YWxfbGF0IHx8IGxvY2F0aW9uLmxhdFxuICAgICAgICAgICAgbG9jYXRpb24ubG9uZyA9IHRoaXMucHJvcHMuaG9zcGl0YWxfbG9uZyB8fCBsb2NhdGlvbi5sb25nXG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0RWxhc3RpY0NyaXRlcmlhUmVzdWx0cyh0aGlzLnN0YXRlLnNlYXJjaFZhbHVlLnRyaW0oKSxzZWFyY2hUeXBlLCBsb2NhdGlvbiwgZXh0cmFTZWFyY2hQYXJhbXMpLnRoZW4oKGZpbHRlclNlYXJjaFJlc3VsdHMpPT4ge1xuXG4gICAgICAgICAgICBpZiAoZmlsdGVyU2VhcmNoUmVzdWx0cyAmJiBmaWx0ZXJTZWFyY2hSZXN1bHRzLnN1Z2dlc3Rpb24pIHtcblxuICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJSZXN1bHRzTmFtZSA9IGZpbHRlclNlYXJjaFJlc3VsdHMuc3VnZ2VzdGlvbi5tYXAoeCA9PiB4Lm5hbWUpLmpvaW4oJywnKSB8fCAnJ1xuICAgICAgICAgICAgICAgIGxldCBndG1EYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ3NlYXJjaHF1ZXJ5JywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnc2VhcmNoLXF1ZXJ5JywgJ3NlYXJjaFN0cmluZyc6IHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICdzZWFyY2hUeXBlJzogJycsICdyZXN1bHRzJzogZmlsdGVyUmVzdWx0c05hbWUsICdmcm9tJzonYXJ0aWNsZScsICdwYWdlJzp0aGlzLnByb3BzLmhvc3BpdGFsX2lkX3NlYXJjaD8naG9zcGl0YWxTZWFyY2gnOicnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG4gICAgICAgICAgICAgICAgbGV0IGZpbHRlckRhdGEgPSBmaWx0ZXJTZWFyY2hSZXN1bHRzLnN1Z2dlc3Rpb25cblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hSZXN1bHRzOiBmaWx0ZXJEYXRhLCBsb2FkaW5nOiBmYWxzZSwgdHlwZTogJycgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZENyaXRlcmlhKGNyaXRlcmlhKSB7XG5cbiAgICBcdGxldCBMQUJfVFlQRVMgPSBbJ2xhYl90ZXN0X3N5bm9ueW0nLCAnbGFiX3Rlc3QnLCAnbGFiJ11cblxuICAgICAgICBsZXQgT1BEX1RZUEVTID0gWyd2aXNpdF9yZWFzb24nLCAncHJhY3RpY2Vfc3BlY2lhbGl6YXRpb24nLCAnZG9jdG9yJywgJ2hvc3BpdGFsJywgJ3ByYWN0aWNlX3NwZWNpYWxpemF0aW9uX3N5bm9ueW0nXVxuXG4gICAgICAgIGxldCBQUk9DRURVUkVfVFlQRVMgPSBbJ3Byb2NlZHVyZV9jYXRlZ29yeScsICdwcm9jZWR1cmUnXVxuXG4gICAgICAgIGxldCBJUERfVFlQRVMgPSBbJ2lwZCddXG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMubGF0aXR1ZGUgJiYgdGhpcy5wcm9wcy5sb25naXR1ZGUpIHtcbiAgICAgICAgICAgIF9nZXRsb2NhdGlvbkZyb21MYXRMb25nKHRoaXMucHJvcHMubGF0aXR1ZGUsIHRoaXMucHJvcHMubG9uZ2l0dWRlLCAnY2l0eScsIChsb2NhdGlvbkRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobG9jYXRpb25EYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0TG9jYXRpb24obG9jYXRpb25EYXRhLCAnZ2VvaXAnLCB0cnVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBjcml0ZXJpYSA9IE9iamVjdC5hc3NpZ24oe30sIGNyaXRlcmlhKVxuXG4gICAgICAgIGlmIChjcml0ZXJpYS50eXBlKSB7XG5cbiAgICAgICAgXHRsZXQgdHlwZSA9ICcnXG5cbiAgICAgICAgICAgIGxldCBhY3Rpb24gPSAnJywgZXZlbnQgPSAnJ1xuXG4gICAgICAgICAgICBpZiAoY3JpdGVyaWEudHlwZS5pbmNsdWRlcygndmlzaXRfcmVhc29uJykpIHtcbiAgICAgICAgICAgIFx0dHlwZSA9ICdvcGQnXG5cbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdWaXNpdFJlYXNvblNlYXJjaGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAndmlzaXQtcmVhc29uLXNlYXJjaGVkJywgJ1NlbGVjdGVkSWQnOiBjcml0ZXJpYS5pZCB8fCAnJywgJ3NlYXJjaGVkJzogJ2F1dG9zdWdnZXN0JywgJ3NlYXJjaFN0cmluZyc6IHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUsICdwYWdlJzp0aGlzLnByb3BzLmhvc3BpdGFsX2lkX3NlYXJjaD8naG9zcGl0YWxTZWFyY2gnOicnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgICAgICAgICBjcml0ZXJpYS5pZCA9IGNyaXRlcmlhLmFjdGlvbi52YWx1ZS5qb2luKCcsJylcbiAgICAgICAgICAgICAgICBjcml0ZXJpYS50eXBlID0gJ3NwZWNpYWxpdHknXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxzZSBpZiAoY3JpdGVyaWEuYWN0aW9uLnBhcmFtLmluY2x1ZGVzKCdob3NwaXRhbF9uYW1lJykpIHtcbiAgICAgICAgICAgIFx0dHlwZSA9ICdvcGQnXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSG9zcGl0YWxOYW1lU2VhcmNoZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdob3NwaXRhbC1uYW1lLXNlYXJjaGVkJywgJ2hvc3BpdGFsSWQnOiBjcml0ZXJpYS5hY3Rpb24uaWQgfHwgJycsICdzZWFyY2hlZCc6ICdhdXRvc3VnZ2VzdCcsICdzZWFyY2hTdHJpbmcnOiB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlIHx8ICcnLCAncGFnZSc6dGhpcy5wcm9wcy5ob3NwaXRhbF9pZF9zZWFyY2g/J2hvc3BpdGFsU2VhcmNoJzonJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hQcm9jZWVkT1BEKFwiXCIsIFwiXCIsIGNyaXRlcmlhLmFjdGlvbi5pZClcbiAgICAgICAgICAgICAgICByZXR1cm5cblxuICAgICAgICAgICAgfSBlbHNlIGlmIChjcml0ZXJpYS5hY3Rpb24ucGFyYW0uaW5jbHVkZXMoJ3Byb2NlZHVyZV9jYXRlZ29yeV9pZHMnKSkge1xuICAgICAgICAgICAgXHR0eXBlID0gJ29wZCdcbiAgICAgICAgICAgICAgICBjcml0ZXJpYS5pZCA9IGNyaXRlcmlhLmFjdGlvbi52YWx1ZVswXVxuICAgICAgICAgICAgICAgIGNyaXRlcmlhLnR5cGUgPSAncHJvY2VkdXJlc19jYXRlZ29yeSdcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChjcml0ZXJpYS5hY3Rpb24ucGFyYW0uaW5jbHVkZXMoJ3Byb2NlZHVyZV9pZHMnKSkge1xuICAgICAgICAgICAgXHR0eXBlID0gJ29wZCdcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdDb21tb25Qcm9jZWR1cmVzU2VsZWN0ZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjb21tb24tcHJvY2VkdXJlcy1zZWxlY3RlZCcsICdzZWxlY3RlZCc6IGNyaXRlcmlhLm5hbWUgfHwgJycsICdzZWxlY3RlZElkJzogY3JpdGVyaWEuYWN0aW9uLnZhbHVlID8gY3JpdGVyaWEuYWN0aW9uLnZhbHVlWzBdIDogJycsICdzZWFyY2hlZCc6ICdhdXRvc3VnZ2VzdCcsICdzZWFyY2hTdHJpbmcnOiB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlLCAncGFnZSc6dGhpcy5wcm9wcy5ob3NwaXRhbF9pZF9zZWFyY2g/J2hvc3BpdGFsU2VhcmNoJzonJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgICAgICAgICAgY3JpdGVyaWEuaWQgPSBjcml0ZXJpYS5hY3Rpb24udmFsdWVbMF1cbiAgICAgICAgICAgICAgICBjcml0ZXJpYS50eXBlID0gJ3Byb2NlZHVyZXMnXG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3JpdGVyaWEuYWN0aW9uLnBhcmFtLmluY2x1ZGVzKCdzcGVjaWFsaXphdGlvbnMnKSkge1xuICAgICAgICAgICAgXHR0eXBlID0gJ29wZCdcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdDb21tb25TcGVjaWFsaXphdGlvbnNTZWxlY3RlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NvbW1vbi1zcGVjaWFsaXphdGlvbnMtc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnOiBjcml0ZXJpYS5uYW1lIHx8ICcnLCAnc2VsZWN0ZWRJZCc6IGNyaXRlcmlhLmFjdGlvbi52YWx1ZSA/IGNyaXRlcmlhLmFjdGlvbi52YWx1ZVswXSA6ICcnLCAnc2VhcmNoZWQnOiAnYXV0b3N1Z2dlc3QnLCAnc2VhcmNoU3RyaW5nJzogdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSwgJ3BhZ2UnOnRoaXMucHJvcHMuaG9zcGl0YWxfaWRfc2VhcmNoPydob3NwaXRhbFNlYXJjaCc6JydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICAgICAgICAgIGNyaXRlcmlhLmlkID0gY3JpdGVyaWEuYWN0aW9uLnZhbHVlWzBdXG4gICAgICAgICAgICAgICAgY3JpdGVyaWEudHlwZSA9ICdzcGVjaWFsaXR5J1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNyaXRlcmlhLmFjdGlvbi5wYXJhbS5pbmNsdWRlcygnZG9jdG9yX25hbWUnKSkge1xuICAgICAgICAgICAgXHR0eXBlID0gJ29wZCdcblxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0RvY3Rvck5hbWVTZWFyY2hlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2RvY3Rvci1uYW1lLXNlYXJjaGVkJywgJ3NlbGVjdGVkSWQnOiBjcml0ZXJpYS5hY3Rpb24udmFsdWVbMF0gfHwgJycsICdzZWFyY2hlZCc6ICdhdXRvc3VnZ2VzdCcsICdzZWFyY2hTdHJpbmcnOiB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlIHx8ICcnLCAncGFnZSc6dGhpcy5wcm9wcy5ob3NwaXRhbF9pZF9zZWFyY2g/J2hvc3BpdGFsU2VhcmNoJzonJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9vcGQvZG9jdG9yLyR7Y3JpdGVyaWEuYWN0aW9uLnZhbHVlWzBdfT9oaWRlX3NlYXJjaF9kYXRhPXRydWVgKVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgICAgIH1lbHNlIGlmIChjcml0ZXJpYS50eXBlID09IFwibGFiXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsZWFyRXh0cmFUZXN0cygpXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnTGFiTmFtZVNlYXJjaGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbGFiLW5hbWUtc2VhcmNoZWQnLCAnc2VsZWN0ZWRJZCc6IGNyaXRlcmlhLmFjdGlvbi52YWx1ZVswXSB8fCAnJywgJ3NlYXJjaGVkJzogJ2F1dG9zdWdnZXN0JywgJ3NlYXJjaFN0cmluZyc6IHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUgfHwgJycsICdwYWdlJzp0aGlzLnByb3BzLmhvc3BpdGFsX2lkX3NlYXJjaD8naG9zcGl0YWxTZWFyY2gnOicnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2xhYi8ke2NyaXRlcmlhLmFjdGlvbi52YWx1ZVswXX1gKVxuICAgICAgICAgICAgICAgIHJldHVyblxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNyaXRlcmlhLnR5cGUgPT0gXCJsYWJfdGVzdFwiKSB7XG4gICAgICAgICAgICAgICAgY3JpdGVyaWEudHlwZSA9ICd0ZXN0J1xuICAgICAgICAgICAgICAgIGNyaXRlcmlhLnVybCA9ICcnXG4gICAgICAgICAgICAgICAgY3JpdGVyaWEuaWQgPSBjcml0ZXJpYS5hY3Rpb24udmFsdWVbMF1cbiAgICAgICAgICAgICAgICBpZiAoY3JpdGVyaWEuYWN0aW9uLnRlc3RfdHlwZSAmJiBjcml0ZXJpYS5hY3Rpb24udGVzdF90eXBlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjcml0ZXJpYS50ZXN0X3R5cGUgPSBjcml0ZXJpYS5hY3Rpb24udGVzdF90eXBlWzBdXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3JpdGVyaWEudGVzdF90eXBlID0gJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFZhbHVlOiBcIlwiIH0pXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSgndGVzdCcsIGNyaXRlcmlhLCB0cnVlKVxuXHRcdCAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0ICAgICAgICAgICBcdHRoaXMuc2VhcmNoUHJvY2VlZExBQihcIlwiLCBmYWxzZSlcblx0XHQgICAgICAgIH0sIDEwMClcblxuICAgICAgICAgICAgfWVsc2UgaWYgKGNyaXRlcmlhLnR5cGUuaW5jbHVkZXMoJ2lwZCcpKSB7XG5cdCAgICAgICAgICAgIGxldCBkYXRhID0ge1xuXHQgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdJUEROYW1lU2VhcmNoZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdpcGQtbmFtZS1zZWFyY2hlZCcsICdzZWxlY3RlZElkJzogY3JpdGVyaWEuYWN0aW9uLnZhbHVlWzBdIHx8ICcnLCAnc2VhcmNoZWQnOiAnYXV0b3N1Z2dlc3QnLCAnc2VhcmNoU3RyaW5nJzogdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSB8fCAnJywgJ3BhZ2UnOnRoaXMucHJvcHMuaG9zcGl0YWxfaWRfc2VhcmNoPydob3NwaXRhbFNlYXJjaCc6Jydcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXHQgICAgICAgICAgICBsZXQgaXBkRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGNyaXRlcmlhKVxuXHQgICAgICAgICAgICBpcGREYXRhLmlkID0gY3JpdGVyaWEuYWN0aW9uLnZhbHVlWzBdXG5cdCAgICAgICAgICAgIGlwZERhdGEudHlwZSA9ICdpcGQnXG4gICAgICAgIFx0XHR0aGlzLnByb3BzLnRvZ2dsZUlQRENyaXRlcmlhKGlwZERhdGEsIHRydWUpXG5cbiAgICAgICAgXHRcdHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgXHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9pcGRJbmZvP2lwZF9pZD0ke2lwZERhdGEuaWR9YClcbiAgICAgICAgXHRcdH0sIDEwMClcblx0ICAgICAgICB9ICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgaWYodHlwZT09J29wZCcpe1xuICAgICAgICAgICAgXHR0aGlzLnByb3BzLmNsb25lQ29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMoY3JpdGVyaWEpXG4gICAgXHQgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hWYWx1ZTogXCJcIiB9KVxuXHQgICAgICAgICAgICB0aGlzLnNlYXJjaFByb2NlZWRPUEQoJycsICcnLCB0aGlzLnByb3BzLmhvc3BpdGFsX2lkX3NlYXJjaHx8JycpXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlYXJjaFByb2NlZWRPUEQoZG9jdG9yX25hbWUgPSBcIlwiLCBob3NwaXRhbF9uYW1lID0gXCJcIiwgaG9zcGl0YWxfaWQgPSBcIlwiKSB7XG4gICAgICAgIC8vIGhhbmRsZSBkb2N0b3IgbmFtZSwgaG9zcGl0YWwgbmFtZVxuICAgICAgICBsZXQgc3RhdGUgPSB7XG4gICAgICAgICAgICBmaWx0ZXJDcml0ZXJpYToge1xuICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuT1BEX1NUQVRFLmZpbHRlckNyaXRlcmlhLFxuICAgICAgICAgICAgICAgIGRvY3Rvcl9uYW1lLCBob3NwaXRhbF9uYW1lLCBob3NwaXRhbF9pZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5leHRGaWx0ZXJDcml0ZXJpYToge1xuICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuT1BEX1NUQVRFLmZpbHRlckNyaXRlcmlhLFxuICAgICAgICAgICAgICAgIGRvY3Rvcl9uYW1lLCBob3NwaXRhbF9uYW1lLCBob3NwaXRhbF9pZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoZG9jdG9yX25hbWUgfHwgaG9zcGl0YWxfbmFtZSB8fCBob3NwaXRhbF9pZCkge1xuICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWRDcml0ZXJpYXMgPSBbXVxuICAgICAgICAgICAgc3RhdGUuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMgPSBbXVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9wcy5tZXJnZU9QRFN0YXRlKHN0YXRlLCB0cnVlKVxuXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvb3BkL3NlYXJjaHJlc3VsdHMnKVxuICAgIH1cblxuICAgIHNlYXJjaFByb2NlZWRMQUIobGFiX25hbWUgPSBcIlwiLCBzaG93X2FsbF9sYWJzKSB7XG4gICAgICAgIC8vIGhhbmRsZSBkb2N0b3IgbmFtZSwgaG9zcGl0YWwgbmFtZVxuICAgICAgICB0aGlzLnByb3BzLm1lcmdlTEFCU3RhdGUoe1xuICAgICAgICAgICAgZmlsdGVyQ3JpdGVyaWE6IHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLkxBQl9TVEFURS5maWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgICAgICAgICBsYWJfbmFtZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5leHRGaWx0ZXJDcml0ZXJpYToge1xuICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuTEFCX1NUQVRFLmZpbHRlckNyaXRlcmlhLFxuICAgICAgICAgICAgICAgIGxhYl9uYW1lXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzOiBzaG93X2FsbF9sYWJzID8gW10gOiB0aGlzLnByb3BzLkxBQl9TVEFURS5zZWxlY3RlZENyaXRlcmlhcyxcbiAgICAgICAgICAgIG5leHRTZWxlY3RlZENyaXRlcmlhczogc2hvd19hbGxfbGFicyA/IFtdIDogdGhpcy5wcm9wcy5MQUJfU1RBVEUuc2VsZWN0ZWRDcml0ZXJpYXNcbiAgICAgICAgfSwgdHJ1ZSlcblxuICAgICAgICBsZXQgc2VsZWN0ZWRUZXN0SWRzID0gdGhpcy5wcm9wcy5MQUJfU1RBVEUuc2VsZWN0ZWRDcml0ZXJpYXMubWFwKHRlc3QgPT4gdGVzdC5pZClcbiAgICAgICAgbGV0IHNlbGVjdGVkVGVzdHNOYW1lID0gdGhpcy5wcm9wcy5MQUJfU1RBVEUuc2VsZWN0ZWRDcml0ZXJpYXMubWFwKHRlc3QgPT4gdGVzdC5uYW1lKVxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnU2hvd0xhYkNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdzaG93LWxhYi1jbGlja2VkJywgJ1NlbGVjdGVkVGVzdElkcyc6IHNlbGVjdGVkVGVzdElkcy5qb2luKCcsJykgfHwgJycsICdTZWxlY3RlZFRlc3ROYW1lJzogc2VsZWN0ZWRUZXN0c05hbWUuam9pbignLCcpLCAnVGVzdENvdW50Jzogc2VsZWN0ZWRUZXN0SWRzLmxlbmd0aCB8fCAwXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2xhYi9zZWFyY2hyZXN1bHRzJylcbiAgICB9XG5cbiAgICBvbkZvY3VzSW4oKSB7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZ2V0SW5wdXRGb2N1cyl7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldElucHV0Rm9jdXMoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG5cbiAgICBcdHJldHVybihcblxuXHRcdDxkaXY+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZVNlYXJjaFdpZGdldFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZUlucHV0Q29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJhcnRjLWlucFwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaFZhbHVlfSBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5ob3NwaXRhbF9pZF9zZWFyY2g/YFNlYXJjaCBmb3IgRG9jdG9yLCBTcGVjaWFsaXR5IHdpdGhpbiBIb3NwaXRhbGA6XCJTZWFyY2ggRG9jdG9ycyAmIFRlc3RzXCJ9ICBvbkJsdXI9eygpID0+IHRoaXMuZm9jdXNPdXQoKX0gb25Gb2N1cyA9e3RoaXMub25Gb2N1c0luLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhcnRjLWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1hZ2VzL3ZhbGwucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29tbW9uU2VhcmNoPycnXG4gICAgICAgICAgICAgICAgICAgICAgICA6PGJ1dHRvbiBjbGFzc05hbWU9XCJhcnRjLWJ0biBhcnRjLWRpc2FibGVcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL25ldy1sb2MtaWNvLnN2Z1wifSAvPnt0aGlzLnByb3BzLmxvY2F0aW9ufTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzLmxlbmd0aCB8fCB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlID9cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgc2VhcmNoTWFyZ2luXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tb24tc2VhcmNoLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNyY2gtaGVhZGluZ1wiPlNlYXJjaCBSZXN1bHRzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbW9uLWxpc3RpbmctY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdHMubWFwKChjYXQsIGopID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2p9IG9uQ2xpY2s9e3RoaXMuYWRkQ3JpdGVyaWEuYmluZCh0aGlzLCBjYXQpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VyYWNoLXJzbHQtd2l0aC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdC50eXBlICYmIGNhdC50eXBlLmluY2x1ZGVzKCdkb2N0b3InKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5pdGlhbHNQaWN0dXJlIG5hbWU9e2NhdC5uYW1lfSBoYXNfaW1hZ2U9eyEhY2F0LmltYWdlX3BhdGh9IGNsYXNzTmFtZT1cImVsYXN0aWNJbml0YWxQaWMgaW5pdGlhbHNQaWN0dXJlLWRzIGZsdHItaW5pdGlhbFBpY3R1cmUtZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcmNoLXJzbHQtd2Qtc3BhbiB1c3Itc3JjaC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogJzM1cHgnLCBoZWlnaHQ6ICczNXB4JywgYm9yZGVyUmFkaXVzOiAnNTAlJyB9fSBjbGFzc05hbWU9XCJcIiBzcmM9e2BodHRwczovL2Nkbi5kb2NwcmltZS5jb20vbWVkaWEvJHtjYXQuaW1hZ2VfcGF0aH1gfSBhbHQ9e2NhdC5uYW1lfSB0aXRsZT17Y2F0Lm5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0luaXRpYWxzUGljdHVyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPHNwYW4gY2xhc3NOYW1lPVwic3JjaC1yc2x0LXdkLXNwYW4gdGV4dC1jZW50ZXIgc3JjaC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMjJweCcsIG1hcmdpbjogJzBweCAxMHB4JyB9fSBjbGFzc05hbWU9XCJcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zaGFwZS1zcmNoLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgcGFkZGluZzogJzAgNTBweCAwIDAnIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXQudHlwZSAmJiBjYXQudHlwZS5pbmNsdWRlcygnaXBkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxzcGFuIGNsYXNzTmFtZT1cInNlYXJjaC1zcGFuLXN1YlwiPklQRCBQcm9jZWR1cmVzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY2F0LmlzX3BhY2thZ2UgJiYgY2F0LmlzX3BhY2thZ2UubGVuZ3RoICYmIGNhdC5pc19wYWNrYWdlWzBdID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VhcmNoLXNwYW4tc3ViXCI+SGVhbHRoIFBhY2thZ2Uge2NhdC5udW1iZXJfb2ZfdGVzdHMgJiYgY2F0Lm51bWJlcl9vZl90ZXN0cy5sZW5ndGggJiYgY2F0Lm51bWJlcl9vZl90ZXN0c1swXSA/IGAgfCAke2NhdC5udW1iZXJfb2ZfdGVzdHNbMF19IFRlc3QgSW5jbHVkZWRgIDogJyd9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNhdC50eXBlICYmIGNhdC50eXBlLmluY2x1ZGVzKFwiaG9zcGl0YWxcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPHNwYW4gY2xhc3NOYW1lPVwic2VhcmNoLXNwYW4tc3ViXCI+e2NhdC5sb2NhbGl0eSAmJiBBcnJheS5pc0FycmF5KGNhdC5sb2NhbGl0eSkgPyBjYXQubG9jYWxpdHkuam9pbignLCAnKSA6IGNhdC52aXNpYmxlX25hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8c3BhbiBjbGFzc05hbWU9XCJzZWFyY2gtc3Bhbi1zdWJcIj57Y2F0LnR5cGUgJiYgY2F0LnR5cGUuaW5jbHVkZXMoJ2RvY3RvcicpICYmIGNhdC5wcmltYXJ5X25hbWUgJiYgQXJyYXkuaXNBcnJheShjYXQucHJpbWFyeV9uYW1lKSA/IGNhdC5wcmltYXJ5X25hbWUuc2xpY2UoMCwgMikuam9pbignLCAnKSA6IGNhdC52aXNpYmxlX25hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0LnBvcHVsYXJpdHkgJiYgY2F0LnBvcHVsYXJpdHkgPj0gNTAwMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdWxhci10eHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMFwiPlBvcHVsYXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Lm5hbWUgJiYgY2F0Lm5hbWUuaW5jbHVkZXMoJ0Fhcm9neWFtIEMnKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdWxhci10eHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMFwiPlBvcHVsYXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlLmxlbmd0aCA+IDIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPGxpIG9uQ2xpY2s9eygpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdEb2N0b3JOYW1lU2VhcmNoZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdkb2N0b3ItbmFtZS1zZWFyY2hlZCcsICdzZWxlY3RlZElkJzogJycsICdzZWFyY2hlZCc6ICcnLCAnc2VhcmNoU3RyaW5nJzogdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSB8fCAnJywgJ3BhZ2UnOnRoaXMucHJvcHMuaG9zcGl0YWxfaWRfc2VhcmNoPydob3NwaXRhbFNlYXJjaCc6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoUHJvY2VlZE9QRCh0aGlzLnN0YXRlLnNlYXJjaFZhbHVlLCBcIlwiLCB0aGlzLnByb3BzLmhvc3BpdGFsX2lkX3NlYXJjaHx8JycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJhY2gtcnNsdC13aXRoLWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyY2gtcnNsdC13ZC1zcGFuIHRleHQtY2VudGVyIHNyY2gtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcyMHB4JywgbWFyZ2luOiAnMHB4IDEwcHgnIH19IGNsYXNzTmFtZT1cIlwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3NoYXBlLXNyY2guc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAtMFwiID5TZWFyY2ggYWxsIERvY3RvcnMgd2l0aCBuYW1lIDo8c3BhbiBjbGFzc05hbWU9XCJzZWFyY2gtZWwtY29kZS1ib2xkXCI+e3RoaXMuc3RhdGUuc2VhcmNoVmFsdWV9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUubGVuZ3RoID4gMiAgJiYgIXRoaXMucHJvcHMuaG9zcGl0YWxfaWRfc2VhcmNoP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHQ8bGkgb25DbGljaz17KCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdMYWJOYW1lU2VhcmNoZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdsYWItbmFtZS1zZWFyY2hlZCcsICdzZWxlY3RlZElkJzogJycsICdzZWFyY2hlZCc6ICcnLCAnc2VhcmNoU3RyaW5nJzogdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSB8fCAnJywgJ3BhZ2UnOnRoaXMucHJvcHMuaG9zcGl0YWxfaWRfc2VhcmNoPydob3NwaXRhbFNlYXJjaCc6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoUHJvY2VlZExBQih0aGlzLnN0YXRlLnNlYXJjaFZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcmFjaC1yc2x0LXdpdGgtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcmNoLXJzbHQtd2Qtc3BhbiB0ZXh0LWNlbnRlciBzcmNoLWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcyMnB4JywgbWFyZ2luOiAnMHB4IDEwcHgnIH19IGNsYXNzTmFtZT1cIlwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3NoYXBlLXNyY2guc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwLTBcIiA+U2VhcmNoIGFsbCBMYWJzIHdpdGggbmFtZSA6PHNwYW4gY2xhc3NOYW1lPVwic2VhcmNoLWVsLWNvZGUtYm9sZFwiPnt0aGlzLnN0YXRlLnNlYXJjaFZhbHVlfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlLmxlbmd0aCA+IDI/IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0hvc3BpdGFsTmFtZVNlYXJjaGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnaG9zcGl0YWwtbmFtZS1zZWFyY2hlZCcsICdob3NwaXRhbElkJzogJycsICdzZWFyY2hlZCc6ICcnLCAnc2VhcmNoU3RyaW5nJzogdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSB8fCAnJywgJ3BhZ2UnOnRoaXMucHJvcHMuaG9zcGl0YWxfaWRfc2VhcmNoPydob3NwaXRhbFNlYXJjaCc6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoUHJvY2VlZE9QRChcIlwiLCB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlLCB0aGlzLnByb3BzLmhvc3BpdGFsX2lkX3NlYXJjaCB8fCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJhY2gtcnNsdC13aXRoLWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3JjaC1yc2x0LXdkLXNwYW4gdGV4dC1jZW50ZXIgc3JjaC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMjBweCcsIG1hcmdpbjogJzBweCAxMHB4JyB9fSBjbGFzc05hbWU9XCJcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zaGFwZS1zcmNoLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicC0wXCIgPlNlYXJjaCBhbGwgSG9zcGl0YWxzIHdpdGggbmFtZSA6PHNwYW4gY2xhc3NOYW1lPVwic2VhcmNoLWVsLWNvZGUtYm9sZFwiPnt0aGlzLnN0YXRlLnNlYXJjaFZhbHVlfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICBcdDwvc2VjdGlvbj5cblx0XHQ8L2Rpdj5cblx0XHQpXG4gICAgfVxuXHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tbW9uU2VhcmNoIiwiaW1wb3J0IENvbW1vblNlYXJjaCBmcm9tICcuL0NvbW1vblNlYXJjaC5qcydcbmV4cG9ydCBkZWZhdWx0IENvbW1vblNlYXJjaCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBDb21tb25TZWFyY2hWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9jb21tb25TZWFyY2gnXG5pbXBvcnQgeyBnZXRFbGFzdGljQ3JpdGVyaWFSZXN1bHRzLCBjbG9uZUNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLCBtZXJnZU9QRFN0YXRlLCBjbGVhckV4dHJhVGVzdHMsIGNsZWFyQWxsVGVzdHMsIG1lcmdlTEFCU3RhdGUsIHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhLCB0b2dnbGVJUERDcml0ZXJpYSwgc2VsZWN0TG9jYXRpb24gfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuXG5jbGFzcyBDb21tb25TZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdC8vXHR0aGlzLnByb3BzLnNldEZldGNoUmVzdWx0cyh0cnVlKVxuXHRcdH0sIDEwMDApXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PENvbW1vblNlYXJjaFZpZXcgey4uLnRoaXMucHJvcHN9IC8+XG5cdFx0KVxuXHR9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuXHRcblx0bGV0IE9QRF9TVEFURSA9ICgoKT0+IHtcblxuXHRcdGNvbnN0IHtcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgZmlsdGVyQ3JpdGVyaWFcblxuICAgIFx0fSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9PUERcblxuICAgIHJldHVybiB7XG4gICAgXHRzZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICBmaWx0ZXJDcml0ZXJpYVxuICAgIFx0fVxuXG5cdH0pKClcblxuXHRsZXQgTEFCX1NUQVRFID0gKCgpPT57XG5cblx0XHRjb25zdCB7XG4gICAgICAgIHNlbGVjdGVkTG9jYXRpb24sXG4gICAgICAgIGZpbHRlckNyaXRlcmlhLFxuICAgICAgICBzZWxlY3RlZENyaXRlcmlhc1xuXG4gICAgXHR9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX0xBQlNcblxuICAgIHJldHVybiB7XG4gICAgXHRzZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICBmaWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgc2VsZWN0ZWRDcml0ZXJpYXNcbiAgICBcdH1cblxuXHR9KSgpXG5cblx0bGV0IElQRF9TVEFURSA9ICgoKT0+e1xuXG5cdFx0Y29uc3Qge1xuICAgICAgICBzZWxlY3RlZENyaXRlcmlhc1xuXG4gICAgXHR9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX0lQRFxuXG4gICAgcmV0dXJuIHtcbiAgICBcdHNlbGVjdGVkQ3JpdGVyaWFzXG4gICAgXHR9XG5cblx0fSkoKVxuXG5cdHJldHVybiB7XG5cdFx0T1BEX1NUQVRFLCBMQUJfU1RBVEUsIElQRF9TVEFURVxuXHR9XG59XG5cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG5cblx0cmV0dXJuIHtcblx0XHRnZXRFbGFzdGljQ3JpdGVyaWFSZXN1bHRzOiAoc2VhcmNoU3RyaW5nLCB0eXBlLCBsb2NhdGlvbiwgZXh0cmFTZWFyY2hQYXJhbXMpID0+IGRpc3BhdGNoKGdldEVsYXN0aWNDcml0ZXJpYVJlc3VsdHMoc2VhcmNoU3RyaW5nLCB0eXBlLCBsb2NhdGlvbiwgZXh0cmFTZWFyY2hQYXJhbXMpKSxcblx0XHRjbG9uZUNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzOiAoc2VsZWN0ZWRDcml0ZXJpYXMpID0+IGRpc3BhdGNoKGNsb25lQ29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMoc2VsZWN0ZWRDcml0ZXJpYXMpKSxcblx0XHRtZXJnZU9QRFN0YXRlOiAoc3RhdGUsIGZldGNoTmV3UmVzdWx0cykgPT4gZGlzcGF0Y2gobWVyZ2VPUERTdGF0ZShzdGF0ZSwgZmV0Y2hOZXdSZXN1bHRzKSksXG5cdFx0Y2xlYXJFeHRyYVRlc3RzOiAoKSA9PiBkaXNwYXRjaChjbGVhckV4dHJhVGVzdHMoKSksXG4gICAgICAgIGNsZWFyQWxsVGVzdHM6ICgpID0+IGRpc3BhdGNoKGNsZWFyQWxsVGVzdHMoKSksXG4gICAgICAgIG1lcmdlTEFCU3RhdGU6IChzdGF0ZSwgZmV0Y2hOZXdSZXN1bHRzKSA9PiBkaXNwYXRjaChtZXJnZUxBQlN0YXRlKHN0YXRlLCBmZXRjaE5ld1Jlc3VsdHMpKSxcbiAgICAgICAgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWE6ICh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQpID0+IGRpc3BhdGNoKHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKHR5cGUsIGNyaXRlcmlhLCBmb3JjZUFkZCkpLFxuICAgICAgICB0b2dnbGVJUERDcml0ZXJpYTogKGNyaXRlcmlhLCBmb3JjZUFkZCkgPT4gZGlzcGF0Y2godG9nZ2xlSVBEQ3JpdGVyaWEoY3JpdGVyaWEsIGZvcmNlQWRkKSksXG4gICAgICAgIHNlbGVjdExvY2F0aW9uOiAobG9jYXRpb24sIHR5cGUsIGZldGNoTmV3UmVzdWx0cykgPT4gZGlzcGF0Y2goc2VsZWN0TG9jYXRpb24obG9jYXRpb24sIHR5cGUsIGZldGNoTmV3UmVzdWx0cykpXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDb21tb25TZWFyY2gpIl0sInNvdXJjZVJvb3QiOiIifQ==