exports.ids = [106];
exports.modules = {

/***/ "./dev/js/components/diagnosis/healthPackageAdvisor/HealthPackageAdvisorView.js":
/*!**************************************************************************************!*\
  !*** ./dev/js/components/diagnosis/healthPackageAdvisor/HealthPackageAdvisorView.js ***!
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

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _locationElements = __webpack_require__(/*! ../../../containers/commons/locationElements */ "./dev/js/containers/commons/locationElements.js");

var _locationElements2 = _interopRequireDefault(_locationElements);

var _healthPackageInfoPopup = __webpack_require__(/*! ./healthPackageInfoPopup.js */ "./dev/js/components/diagnosis/healthPackageAdvisor/healthPackageInfoPopup.js");

var _healthPackageInfoPopup2 = _interopRequireDefault(_healthPackageInfoPopup);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _HelmetTags = __webpack_require__(/*! ../../commons/HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class HealthPackageAdvisorView extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            testInfoIds: [],
            selectedTestIds: [],
            selectCatIDs: [],
            packageType: '',
            gender: '',
            age: '',
            min_age: '',
            max_age: '',
            searchCities: [],
            showInfo: false,
            showInfoText: '',
            initialData: [],
            package_ids: ''
        };
    }

    componentDidMount() {
        this.setState(_extends({}, this.props.filterCriteriaPackages), () => {
            this.setState({ selectedTestIds: this.props.filterCriteriaPackages.test_ids !== '' ? this.props.filterCriteriaPackages.test_ids : [] });
            if (this.state.max_age == 20) {
                this.setState({ age: 1 });
            } else if (this.state.min_age == 20) {
                this.setState({ age: 2 });
            } else if (this.state.max_age == 20) {
                this.setState({ age: 3 });
            }
        });
        if (this.props.recommended_package && this.props.recommended_package.result.length > 0) {
            let data = {};
            let newData = [];
            Object.entries(this.props.recommended_package.result).map(function ([key, rPackages]) {
                let data = {};
                data.cat_id = rPackages.id;
                data.subSetTest = [];
                data.isSubset = false;
                Object.entries(rPackages.tests).map(function ([key, value]) {
                    data.subSetTest.push(value.id);
                });
                newData.push(data);
            });
            this.setState({ initialData: newData });
        }

        if (window) {
            window.scrollTo(0, 0);
        }

        const parsed = queryString.parse(this.props.location.search);

        let data = {
            'Category': 'ConsumerApp', 'Action': 'OpenHealthPackageAdvisorPage', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': `open-health-package-advisor-from-${parsed.from || "default"}`, 'from': parsed.from
        };

        _gtm2.default.sendEvent({ data: data });
    }
    searchLab(test, isPackage = false, event) {
        test.type = 'test';
        this.props.toggleDiagnosisCriteria('test', test, true);
        setTimeout(() => {
            this.props.history.push('/lab/searchresults');
        }, 100);
    }
    toggleInfo(test_id) {
        let test_ids = [].concat(this.state.testInfoIds);
        let self = this;
        let found = false;
        test_ids = test_ids.filter(x => {
            if (x == test_id) {
                found = true;
                return false;
            }
            return true;
        });
        if (!found) {
            test_ids.push(test_id);
        }
        self.setState({ testInfoIds: test_ids });
    }
    // selectCategory(cat_id, isSubset,cat_data) {
    //     let ids = this.state.selectCatIDs.filter(x => parseInt(x.cat_id) == parseInt(cat_id))
    //     let selected_catIds = [].concat(this.state.selectCatIDs)
    //     let selected_testids= [].concat(this.state.selectedTestIds)
    //     let subSetTestIds = []
    //     let initialDataVal = []
    //     if (ids.length) {
    //         initialDataVal = this.state.initialData.filter(x => parseInt(x.cat_id) == parseInt(cat_id))
    //         if (initialDataVal[0].subSetTest.length != ids[0].subSetTest.length ) {
    //             selected_catIds = this.state.selectCatIDs.filter(x => parseInt(x.cat_id) != parseInt(cat_id))
    //             Object.entries(cat_data.tests).map(function ([key, value]) {
    //                 selected_testids.push(value.id)
    //                 subSetTestIds.push(value.id)
    //             })
    //             selected_catIds.push({ cat_id: cat_id, isSubset: ids[0].isSubset, subSetTest:subSetTestIds })
    //         } else {
    //             if (ids[0].cat_id == cat_id) {
    //                 Object.entries(ids[0].subSetTest).map(function ([key, value]) {
    //                     selected_testids = selected_testids.filter(x => parseInt(x) != parseInt(value))
    //                 })
    //                 selected_catIds = selected_catIds.filter(x => parseInt(x.cat_id) != parseInt(cat_id))
    //             }
    //         }
    //     } else {
    //         Object.entries(cat_data.tests).map(function ([key, value]) {
    //             selected_testids.push(value.id)
    //             subSetTestIds.push(value.id)
    //         })
    //         selected_catIds.push({ cat_id: cat_id, isSubset: isSubset, subSetTest: subSetTestIds })
    //     }
    //     selected_testids = selected_testids.filter(function(item, index){
    //         return selected_testids.indexOf(item) >= index;
    //     })
    //     this.setState({ selectCatIDs: selected_catIds, selectedTestIds:selected_testids })
    // }
    // selectTest(test_id, package_id) {
    //     let test_ids = [].concat(this.state.selectedTestIds)
    //     let self = this
    //     let found = false

    //     test_ids = test_ids.filter((x) => {
    //         if (x == test_id) {
    //             found = true
    //             return false
    //         }
    //         return true
    //     })

    //     if (!found) {
    //         test_ids.push(test_id)
    //     }

    //     let package_ids = []
    //     let selectedIds = []
    //     let finalIds = [].concat(this.state.selectCatIDs)
    //     if (this.state.selectCatIDs.length > 0) {
    //         selectedIds = this.state.selectCatIDs.filter(x => parseInt(x.cat_id) == parseInt(package_id))
    //         package_ids = this.state.selectCatIDs.filter(x => parseInt(x.cat_id) != parseInt(package_id
    //             ))
    //         if (selectedIds.length > 0) {
    //             Object.entries(selectedIds).map(function ([key, value]) {

    //                 if (value.cat_id == package_id) {
    //                     let found = false
    //                     value.isSubset = false
    //                     value.subSetTest = value.subSetTest.filter((x) => {
    //                         if (x == test_id) {
    //                             found = true
    //                             return false
    //                         }
    //                         return true
    //                     })
    //                     if (!found) {
    //                         value.subSetTest.push(test_id)
    //                     }
    //                 }
    //             })
    //             finalIds = [...package_ids, ...selectedIds]
    //         }
    //         if(package_ids.length > 0){
    //             Object.entries(package_ids).map(function ([key, val]) {
    //                 if(selectedIds.length>0){
    //                     Object.entries(package_ids).map(function ([key, selectedId]) {
    //                         if(parseInt(val.cat_id) != parseInt(package_id) && selectedId.cat_id != package_id){
    //                             return
    //                         } 
    //                     })
    //                 }else{
    //                     if(parseInt(val.cat_id) != parseInt(package_id)){
    //                         finalIds.push({ cat_id: package_id, isSubset: false, subSetTest: [].concat(test_id) })
    //                     }
    //                 }
    //             })                
    //             finalIds = Array.from(new Set(finalIds.map(JSON.stringify))).map(JSON.parse)
    //         }
    //     }else{
    //         finalIds.push({ cat_id: package_id, isSubset: false, subSetTest: [].concat(test_id) })
    //     }
    //     self.setState({ selectedTestIds: test_ids, selectCatIDs: finalIds})
    // }

    selectCategory(cat_id, isSubset, cat_data) {
        let selected_catIds = [].concat(this.state.selectCatIDs);
        let self = this;
        let found = false;

        selected_catIds = selected_catIds.filter(x => {
            if (x == cat_id) {
                found = true;
                return false;
            }
            return true;
        });

        if (!found) {
            selected_catIds.push(cat_id);
        }

        this.setState({ selectCatIDs: selected_catIds });
    }
    selectAge(event) {
        var event = document.getElementById("selectage");
        if (event.options[event.selectedIndex].value == 1) {
            this.setState({ age: event.options[event.selectedIndex].value, min_age: 0, max_age: 20 });
        } else if (event.options[event.selectedIndex].value == 2) {
            this.setState({ age: event.options[event.selectedIndex].value, min_age: 20, max_age: 50 });
        } else if (event.options[event.selectedIndex].value == 3) {
            this.setState({ age: event.options[event.selectedIndex].value, min_age: 0, max_age: 50 });
        }
    }
    selectPackage(packageName) {
        this.setState({ packageType: packageName });
    }
    selectGender(genderVal) {
        this.setState({ gender: genderVal });
    }
    showPackage() {
        let cat_ids = [];
        let test_ids = [];
        if (this.state.selectCatIDs.length > 0) {
            Object.entries(this.state.selectCatIDs).map(function ([key, value]) {
                if (!value.isSubset) {
                    cat_ids.push(value.cat_id);
                } else {
                    if (value.subSetTest.length > 0) {
                        Object.entries(value.subSetTest).map(function ([k, val]) {
                            test_ids.push(val);
                        });
                    }
                }
            });
        }
        let newCategoryState = {};
        let filterstate = _extends({}, this.props.filterCriteriaPackages);
        // newCategoryState['catIds'] = cat_ids
        newCategoryState['catIds'] = this.state.selectCatIDs;
        newCategoryState['selectCatIDs'] = this.state.selectCatIDs;
        newCategoryState['test_ids'] = test_ids;
        newCategoryState['distanceRange'] = [0, 15];
        newCategoryState['priceRange'] = [0, 20000];
        newCategoryState['sort_on'] = null;
        newCategoryState['max_age'] = this.state.max_age;
        newCategoryState['min_age'] = this.state.min_age;
        newCategoryState['gender'] = this.state.gender;
        newCategoryState['packageType'] = this.state.packageType;
        newCategoryState['package_ids'] = [];
        this.props.mergeLABState({ filterCriteriaPackages: newCategoryState });
        setTimeout(() => {
            this.props.history.push('/searchpackages');
        }, 100);

        let data = {
            'Category': 'ConsumerApp', 'Action': 'showPackagesButtonClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'show-packages-button-click', 'SelectedCategories': this.state.selectCatIDs || {}
        };

        _gtm2.default.sendEvent({ data: data });
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
    showInfo(infoId, event) {
        this.setState({ showInfoText: infoId, showInfo: true });
        event.stopPropagation();
    }
    closeInfo() {
        this.setState({ showInfo: false });
    }
    goBack() {
        this.props.history.push('/');
    }
    render() {
        let self = this;
        let selectedCatIDs = [];
        if (this.state.selectCatIDs.length > 0) {
            Object.entries(this.state.selectCatIDs).map(function ([key, selectedCats]) {
                Object.entries(self.state.initialData).map(function ([key, initialResp]) {
                    if (selectedCats.cat_id == initialResp.cat_id && selectedCats.subSetTest.length == initialResp.subSetTest.length) {
                        selectedCatIDs.push(selectedCats.cat_id);
                    }
                });
            });
        }
        return _react2.default.createElement(
            'div',
            { className: 'profile-body-wrap dp-container-div', style: { paddingBottom: 54 } },
            _react2.default.createElement(_HelmetTags2.default, { tagsData: {
                    canonicalUrl: '/full-body-checkup-health-packages'
                } }),
            _react2.default.createElement(_DesktopProfileHeader2.default, null),
            _react2.default.createElement(
                'section',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row main-row parent-section-row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12 col-md-7 col-lg-7 pt-0' },
                        _react2.default.createElement(
                            'div',
                            { className: 'widget mb-10 mrng-top-20' },
                            _react2.default.createElement(
                                'div',
                                { className: 'd-flex advisorContainer' },
                                _react2.default.createElement(
                                    'h1',
                                    { className: 'fw-500' },
                                    'Health Package Advisor'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'search-top-container' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'serch-nw-inputs' },
                                    _react2.default.createElement(_locationElements2.default, _extends({}, this.props, { onRef: ref => this.child = ref, getCityListLayout: this.getCityListLayout.bind(this), resultType: 'search', fromCriteria: true, commonSearchPage: true }))
                                ),
                                this.state.searchCities.length == 0 ? _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'hpa-flex' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'hpa-flex' },
                                            _react2.default.createElement(
                                                'label',
                                                { className: 'fw-500' },
                                                'Package Type :'
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'd-flex', style: { flexWrap: 'wrap' } },
                                                this.props.recommended_package.filters && this.props.recommended_package.filters.length > 0 ? Object.entries(this.props.recommended_package.filters).map(function ([key, filter]) {
                                                    return _react2.default.createElement(
                                                        'div',
                                                        { className: 'dtl-radio d-flex align-items-center dtl-margin-lg pkgTypeBorder', key: key },
                                                        _react2.default.createElement(
                                                            'label',
                                                            { className: 'container-radio mb-0 hpa-container-radio', onChange: self.selectPackage.bind(self, filter.id) },
                                                            filter.name,
                                                            _react2.default.createElement('input', { type: 'radio', name: `radio2_${filter.id}`, checked: self.state.packageType == filter.id ? true : false, style: { left: 0 } }),
                                                            _react2.default.createElement('span', { className: 'doc-checkmark hpa-radio hpa-radio-gender' })
                                                        ),
                                                        filter.information != '' ? _react2.default.createElement('img', { className: 'hpa-info-icon', src: "/assets" + "/img/icons/info.svg", onClick: self.showInfo.bind(self, filter.id) }) : ''
                                                    );
                                                }) : ''
                                            )
                                        )
                                    )
                                ) : '',
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
                                ) : ''
                            )
                        ),
                        Object.keys(this.props.recommended_package).length > 0 && this.state.searchCities.length == 0 ? _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'div',
                                { className: 'hpa-heading mrt-10 mrb-10' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'fw-500' },
                                    'Select Categories'
                                )
                            ),
                            Object.entries(this.props.recommended_package.result).map(function ([key, rPackages]) {
                                return _react2.default.createElement(
                                    'div',
                                    { className: 'widget mb-10 mrt-10', key: key },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'search-top-container' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'd-flex justify-content-between', style: { alignItems: 'center' } },
                                            _react2.default.createElement(
                                                'label',
                                                { className: 'ck-bx pkgCheck-box', onChange: self.selectCategory.bind(self, rPackages.id, false, rPackages) },
                                                rPackages.name,
                                                _react2.default.createElement('input', { type: 'checkbox', value: 'on', checked: self.state.selectCatIDs.indexOf(rPackages.id) > -1 ? true : false }),
                                                _react2.default.createElement('span', { className: 'checkmark hpa-checkmark' })
                                            ),
                                            rPackages.icon && rPackages.icon.length > 0 ? _react2.default.createElement(
                                                'div',
                                                { className: 'pkgCatImg' },
                                                _react2.default.createElement('img', { className: 'img-fluid', src: rPackages.icon })
                                            ) : ''
                                        )
                                    )
                                );
                            })
                        ) : '',
                        this.props.common_package.length > 0 && this.state.searchCities.length == 0 ? _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'div',
                                { className: 'hpa-heading mrt-10 mrb-10' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'fw-500' },
                                    'Top Selling Health Packages'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'widget mrb-10' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'search-top-container' },
                                    _react2.default.createElement(
                                        'ul',
                                        { className: 'list hpa-list-2' },
                                        Object.entries(this.props.common_package).map(function ([key, value]) {
                                            return _react2.default.createElement(
                                                'li',
                                                { key: key, id: value.id, onClick: self.searchLab.bind(self, value) },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    value.name
                                                ),
                                                _react2.default.createElement('img', { src: "/assets" + "/img/redirect-arrow.svg", style: { width: 15 } })
                                            );
                                        })
                                    )
                                )
                            )
                        ) : "",
                        _react2.default.createElement(
                            'button',
                            { className: 'p-3 v-btn v-btn-primary btn-lg fixed horizontal bottom no-round text-lg sticky-btn', onClick: this.showPackage.bind(this) },
                            'Show Packages'
                        )
                    )
                )
            ),
            this.state.showInfo ? _react2.default.createElement(_healthPackageInfoPopup2.default, { closeInfo: this.closeInfo.bind(this), infoTextId: this.state.showInfoText, package_information: this.props.recommended_package.filters.length > 0 ? this.props.recommended_package.filters : '' }) : ''
        );
    }
}

exports.default = HealthPackageAdvisorView;

/***/ }),

/***/ "./dev/js/components/diagnosis/healthPackageAdvisor/healthPackageInfoPopup.js":
/*!************************************************************************************!*\
  !*** ./dev/js/components/diagnosis/healthPackageAdvisor/healthPackageInfoPopup.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class InfoPopup extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let information_text = [];
        information_text = this.props.package_information.filter(x => parseInt(x.id) == parseInt(this.props.infoTextId));
        return _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement("div", { className: "cancel-overlay", onClick: () => {
                    this.props.closeInfo();
                } }),
            _react2.default.createElement(
                "div",
                { className: "widget cancel-appointment-div cancel-popup" },
                _react2.default.createElement(
                    "div",
                    { className: "widget-header text-center action-screen-header" },
                    _react2.default.createElement(
                        "p",
                        { className: "fw-500 cancel-appointment-head" },
                        information_text[0].info_title
                    ),
                    _react2.default.createElement("img", { src: "/assets" + "/img/icons/close.png", className: "close-modal", onClick: () => {
                            this.props.closeInfo();
                        } }),
                    _react2.default.createElement("hr", null)
                ),
                _react2.default.createElement(
                    "div",
                    { className: "cancel-policy-text", style: { paddingTop: 0 } },
                    information_text[0].information
                )
            )
        );
    }
}
exports.default = InfoPopup;

/***/ }),

/***/ "./dev/js/containers/diagnosis/HealthPackageAdvisor.js":
/*!*************************************************************!*\
  !*** ./dev/js/containers/diagnosis/HealthPackageAdvisor.js ***!
  \*************************************************************/
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

var _HealthPackageAdvisorView = __webpack_require__(/*! ../../components/diagnosis/healthPackageAdvisor/HealthPackageAdvisorView.js */ "./dev/js/components/diagnosis/healthPackageAdvisor/HealthPackageAdvisorView.js");

var _HealthPackageAdvisorView2 = _interopRequireDefault(_HealthPackageAdvisorView);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HealthPackageAdvisor extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        if (_storage2.default.checkAuth()) {
            this.props.getUserProfile();
        }
    }
    render() {
        return _react2.default.createElement(_HealthPackageAdvisorView2.default, this.props);
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

    let {
        profiles, selectedProfile, newNotification, notifications, articles, healthTips, device_info, offerList
    } = state.USER;

    const {
        LOADED_SEARCH_CRITERIA_LAB,
        common_tests,
        common_package,
        selectedLocation,
        recommended_package
    } = state.SEARCH_CRITERIA_LABS;
    let filterCriteria_lab = state.SEARCH_CRITERIA_LABS.filterCriteria;
    let filterCriteriaPackages = state.SEARCH_CRITERIA_LABS.filterCriteriaPackages;

    const {
        LOADED_SEARCH_CRITERIA_OPD,
        specializations
    } = state.SEARCH_CRITERIA_OPD;
    let filterCriteria_opd = state.SEARCH_CRITERIA_OPD.filterCriteria;

    return {
        profiles, selectedProfile, newNotification, notifications, articles, healthTips, common_tests: common_tests || [], specializations: specializations || [], selectedLocation, filterCriteria_lab, filterCriteria_opd, device_info, common_package: common_package || [], initialServerData, offerList, recommended_package: recommended_package || [], filterCriteriaPackages
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getUserProfile: () => dispatch((0, _index.getUserProfile)()),
        toggleDiagnosisCriteria: (type, test, forceAdd) => dispatch((0, _index.toggleDiagnosisCriteria)(type, test, forceAdd)),
        mergeLABState: (state, fetchNewResults) => dispatch((0, _index.mergeLABState)(state, fetchNewResults))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(HealthPackageAdvisor);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvaGVhbHRoUGFja2FnZUFkdmlzb3IvSGVhbHRoUGFja2FnZUFkdmlzb3JWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2RpYWdub3Npcy9oZWFsdGhQYWNrYWdlQWR2aXNvci9oZWFsdGhQYWNrYWdlSW5mb1BvcHVwLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL2RpYWdub3Npcy9IZWFsdGhQYWNrYWdlQWR2aXNvci5qcyJdLCJuYW1lcyI6WyJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJIZWFsdGhQYWNrYWdlQWR2aXNvclZpZXciLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInRlc3RJbmZvSWRzIiwic2VsZWN0ZWRUZXN0SWRzIiwic2VsZWN0Q2F0SURzIiwicGFja2FnZVR5cGUiLCJnZW5kZXIiLCJhZ2UiLCJtaW5fYWdlIiwibWF4X2FnZSIsInNlYXJjaENpdGllcyIsInNob3dJbmZvIiwic2hvd0luZm9UZXh0IiwiaW5pdGlhbERhdGEiLCJwYWNrYWdlX2lkcyIsImNvbXBvbmVudERpZE1vdW50Iiwic2V0U3RhdGUiLCJmaWx0ZXJDcml0ZXJpYVBhY2thZ2VzIiwidGVzdF9pZHMiLCJyZWNvbW1lbmRlZF9wYWNrYWdlIiwicmVzdWx0IiwibGVuZ3RoIiwiZGF0YSIsIm5ld0RhdGEiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwia2V5IiwiclBhY2thZ2VzIiwiY2F0X2lkIiwiaWQiLCJzdWJTZXRUZXN0IiwiaXNTdWJzZXQiLCJ0ZXN0cyIsInZhbHVlIiwicHVzaCIsIndpbmRvdyIsInNjcm9sbFRvIiwicGFyc2VkIiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsIkdUTSIsImdldFVzZXJJZCIsImZyb20iLCJzZW5kRXZlbnQiLCJzZWFyY2hMYWIiLCJ0ZXN0IiwiaXNQYWNrYWdlIiwiZXZlbnQiLCJ0eXBlIiwidG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEiLCJzZXRUaW1lb3V0IiwiaGlzdG9yeSIsInRvZ2dsZUluZm8iLCJ0ZXN0X2lkIiwiY29uY2F0Iiwic2VsZiIsImZvdW5kIiwiZmlsdGVyIiwieCIsInNlbGVjdENhdGVnb3J5IiwiY2F0X2RhdGEiLCJzZWxlY3RlZF9jYXRJZHMiLCJzZWxlY3RBZ2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJzZWxlY3RQYWNrYWdlIiwicGFja2FnZU5hbWUiLCJzZWxlY3RHZW5kZXIiLCJnZW5kZXJWYWwiLCJzaG93UGFja2FnZSIsImNhdF9pZHMiLCJrIiwidmFsIiwibmV3Q2F0ZWdvcnlTdGF0ZSIsImZpbHRlcnN0YXRlIiwibWVyZ2VMQUJTdGF0ZSIsImdldENpdHlMaXN0TGF5b3V0Iiwic2VhcmNoUmVzdWx0cyIsInNlYXJjaFZhbHVlIiwic2VsZWN0TG9jYXRpb24iLCJjaXR5IiwiY2hpbGQiLCJpbmZvSWQiLCJzdG9wUHJvcGFnYXRpb24iLCJjbG9zZUluZm8iLCJnb0JhY2siLCJyZW5kZXIiLCJzZWxlY3RlZENhdElEcyIsInNlbGVjdGVkQ2F0cyIsImluaXRpYWxSZXNwIiwicGFkZGluZ0JvdHRvbSIsImNhbm9uaWNhbFVybCIsInJlZiIsImJpbmQiLCJmbGV4V3JhcCIsImZpbHRlcnMiLCJuYW1lIiwibGVmdCIsImluZm9ybWF0aW9uIiwiQVNTRVRTX0JBU0VfVVJMIiwiaSIsImRlc2NyaXB0aW9uIiwia2V5cyIsImFsaWduSXRlbXMiLCJpbmRleE9mIiwiaWNvbiIsImNvbW1vbl9wYWNrYWdlIiwid2lkdGgiLCJJbmZvUG9wdXAiLCJpbmZvcm1hdGlvbl90ZXh0IiwicGFja2FnZV9pbmZvcm1hdGlvbiIsInBhcnNlSW50IiwiaW5mb1RleHRJZCIsImluZm9fdGl0bGUiLCJwYWRkaW5nVG9wIiwiSGVhbHRoUGFja2FnZUFkdmlzb3IiLCJTVE9SQUdFIiwiY2hlY2tBdXRoIiwiZ2V0VXNlclByb2ZpbGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJwYXNzZWRQcm9wcyIsImluaXRpYWxTZXJ2ZXJEYXRhIiwic3RhdGljQ29udGV4dCIsInByb2ZpbGVzIiwic2VsZWN0ZWRQcm9maWxlIiwibmV3Tm90aWZpY2F0aW9uIiwibm90aWZpY2F0aW9ucyIsImFydGljbGVzIiwiaGVhbHRoVGlwcyIsImRldmljZV9pbmZvIiwib2ZmZXJMaXN0IiwiVVNFUiIsIkxPQURFRF9TRUFSQ0hfQ1JJVEVSSUFfTEFCIiwiY29tbW9uX3Rlc3RzIiwic2VsZWN0ZWRMb2NhdGlvbiIsIlNFQVJDSF9DUklURVJJQV9MQUJTIiwiZmlsdGVyQ3JpdGVyaWFfbGFiIiwiZmlsdGVyQ3JpdGVyaWEiLCJMT0FERURfU0VBUkNIX0NSSVRFUklBX09QRCIsInNwZWNpYWxpemF0aW9ucyIsIlNFQVJDSF9DUklURVJJQV9PUEQiLCJmaWx0ZXJDcml0ZXJpYV9vcGQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImZvcmNlQWRkIiwiZmV0Y2hOZXdSZXN1bHRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFDQSxNQUFNQSxjQUFjQyxtQkFBT0EsQ0FBQyxrQ0FBUixDQUFwQjs7QUFFQSxNQUFNQyx3QkFBTixTQUF1Q0MsZ0JBQU1DLFNBQTdDLENBQXVEO0FBQ25EQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDQSxhQUFLQyxLQUFMLEdBQWE7QUFDVEMseUJBQWEsRUFESjtBQUVUQyw2QkFBaUIsRUFGUjtBQUdUQywwQkFBYyxFQUhMO0FBSVRDLHlCQUFhLEVBSko7QUFLVEMsb0JBQVEsRUFMQztBQU1UQyxpQkFBSyxFQU5JO0FBT1RDLHFCQUFTLEVBUEE7QUFRVEMscUJBQVMsRUFSQTtBQVNUQywwQkFBYyxFQVRMO0FBVVRDLHNCQUFVLEtBVkQ7QUFXVEMsMEJBQWMsRUFYTDtB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RDs7a0JBUWUseUJBQVExQixlQUFSLEVBQXlCdUIsa0JBQXpCLEVBQTZDM0Isb0JBQTdDLEMiLCJmaWxlIjoiMTA2LnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi8uLi9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IExvY2F0aW9uRWxlbWVudHMgZnJvbSAnLi4vLi4vLi4vY29udGFpbmVycy9jb21tb25zL2xvY2F0aW9uRWxlbWVudHMnXG5pbXBvcnQgSW5mb1BvcHVwIGZyb20gJy4vaGVhbHRoUGFja2FnZUluZm9Qb3B1cC5qcydcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0nO1xuaW1wb3J0IEhlbG1ldFRhZ3MgZnJvbSAnLi4vLi4vY29tbW9ucy9IZWxtZXRUYWdzJztcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cbmNsYXNzIEhlYWx0aFBhY2thZ2VBZHZpc29yVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0ZXN0SW5mb0lkczogW10sXG4gICAgICAgICAgICBzZWxlY3RlZFRlc3RJZHM6IFtdLFxuICAgICAgICAgICAgc2VsZWN0Q2F0SURzOiBbXSxcbiAgICAgICAgICAgIHBhY2thZ2VUeXBlOiAnJyxcbiAgICAgICAgICAgIGdlbmRlcjogJycsXG4gICAgICAgICAgICBhZ2U6ICcnLFxuICAgICAgICAgICAgbWluX2FnZTogJycsXG4gICAgICAgICAgICBtYXhfYWdlOiAnJyxcbiAgICAgICAgICAgIHNlYXJjaENpdGllczogW10sXG4gICAgICAgICAgICBzaG93SW5mbzogZmFsc2UsXG4gICAgICAgICAgICBzaG93SW5mb1RleHQ6ICcnLFxuICAgICAgICAgICAgaW5pdGlhbERhdGE6IFtdLFxuICAgICAgICAgICAgcGFja2FnZV9pZHM6ICcnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMucHJvcHMuZmlsdGVyQ3JpdGVyaWFQYWNrYWdlcyB9LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRUZXN0SWRzOiB0aGlzLnByb3BzLmZpbHRlckNyaXRlcmlhUGFja2FnZXMudGVzdF9pZHMgIT09ICcnID8gdGhpcy5wcm9wcy5maWx0ZXJDcml0ZXJpYVBhY2thZ2VzLnRlc3RfaWRzIDogW10gfSlcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLm1heF9hZ2UgPT0gMjApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWdlOiAxIH0pXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUubWluX2FnZSA9PSAyMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhZ2U6IDIgfSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5tYXhfYWdlID09IDIwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFnZTogMyB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5yZWNvbW1lbmRlZF9wYWNrYWdlICYmIHRoaXMucHJvcHMucmVjb21tZW5kZWRfcGFja2FnZS5yZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7fVxuICAgICAgICAgICAgbGV0IG5ld0RhdGEgPSBbXVxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5yZWNvbW1lbmRlZF9wYWNrYWdlLnJlc3VsdCkubWFwKGZ1bmN0aW9uIChba2V5LCByUGFja2FnZXNdKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7fVxuICAgICAgICAgICAgICAgIGRhdGEuY2F0X2lkID0gclBhY2thZ2VzLmlkXG4gICAgICAgICAgICAgICAgZGF0YS5zdWJTZXRUZXN0ID0gW11cbiAgICAgICAgICAgICAgICBkYXRhLmlzU3Vic2V0ID0gZmFsc2VcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhyUGFja2FnZXMudGVzdHMpLm1hcChmdW5jdGlvbiAoW2tleSwgdmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuc3ViU2V0VGVzdC5wdXNoKHZhbHVlLmlkKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgbmV3RGF0YS5wdXNoKGRhdGEpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGluaXRpYWxEYXRhOiBuZXdEYXRhIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdPcGVuSGVhbHRoUGFja2FnZUFkdmlzb3JQYWdlJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiBgb3Blbi1oZWFsdGgtcGFja2FnZS1hZHZpc29yLWZyb20tJHtwYXJzZWQuZnJvbSB8fCBcImRlZmF1bHRcIn1gLCAnZnJvbSc6IHBhcnNlZC5mcm9tXG4gICAgICAgIH1cblxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgIH1cbiAgICBzZWFyY2hMYWIodGVzdCwgaXNQYWNrYWdlID0gZmFsc2UsIGV2ZW50KSB7XG4gICAgICAgIHRlc3QudHlwZSA9ICd0ZXN0J1xuICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKCd0ZXN0JywgdGVzdCwgdHJ1ZSlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2xhYi9zZWFyY2hyZXN1bHRzJylcbiAgICAgICAgfSwgMTAwKVxuICAgIH1cbiAgICB0b2dnbGVJbmZvKHRlc3RfaWQpIHtcbiAgICAgICAgbGV0IHRlc3RfaWRzID0gW10uY29uY2F0KHRoaXMuc3RhdGUudGVzdEluZm9JZHMpXG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBsZXQgZm91bmQgPSBmYWxzZVxuICAgICAgICB0ZXN0X2lkcyA9IHRlc3RfaWRzLmZpbHRlcigoeCkgPT4ge1xuICAgICAgICAgICAgaWYgKHggPT0gdGVzdF9pZCkge1xuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgICAgdGVzdF9pZHMucHVzaCh0ZXN0X2lkKVxuICAgICAgICB9XG4gICAgICAgIHNlbGYuc2V0U3RhdGUoeyB0ZXN0SW5mb0lkczogdGVzdF9pZHMgfSlcbiAgICB9XG4gICAgLy8gc2VsZWN0Q2F0ZWdvcnkoY2F0X2lkLCBpc1N1YnNldCxjYXRfZGF0YSkge1xuICAgIC8vICAgICBsZXQgaWRzID0gdGhpcy5zdGF0ZS5zZWxlY3RDYXRJRHMuZmlsdGVyKHggPT4gcGFyc2VJbnQoeC5jYXRfaWQpID09IHBhcnNlSW50KGNhdF9pZCkpXG4gICAgLy8gICAgIGxldCBzZWxlY3RlZF9jYXRJZHMgPSBbXS5jb25jYXQodGhpcy5zdGF0ZS5zZWxlY3RDYXRJRHMpXG4gICAgLy8gICAgIGxldCBzZWxlY3RlZF90ZXN0aWRzPSBbXS5jb25jYXQodGhpcy5zdGF0ZS5zZWxlY3RlZFRlc3RJZHMpXG4gICAgLy8gICAgIGxldCBzdWJTZXRUZXN0SWRzID0gW11cbiAgICAvLyAgICAgbGV0IGluaXRpYWxEYXRhVmFsID0gW11cbiAgICAvLyAgICAgaWYgKGlkcy5sZW5ndGgpIHtcbiAgICAvLyAgICAgICAgIGluaXRpYWxEYXRhVmFsID0gdGhpcy5zdGF0ZS5pbml0aWFsRGF0YS5maWx0ZXIoeCA9PiBwYXJzZUludCh4LmNhdF9pZCkgPT0gcGFyc2VJbnQoY2F0X2lkKSlcbiAgICAvLyAgICAgICAgIGlmIChpbml0aWFsRGF0YVZhbFswXS5zdWJTZXRUZXN0Lmxlbmd0aCAhPSBpZHNbMF0uc3ViU2V0VGVzdC5sZW5ndGggKSB7XG4gICAgLy8gICAgICAgICAgICAgc2VsZWN0ZWRfY2F0SWRzID0gdGhpcy5zdGF0ZS5zZWxlY3RDYXRJRHMuZmlsdGVyKHggPT4gcGFyc2VJbnQoeC5jYXRfaWQpICE9IHBhcnNlSW50KGNhdF9pZCkpXG4gICAgLy8gICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY2F0X2RhdGEudGVzdHMpLm1hcChmdW5jdGlvbiAoW2tleSwgdmFsdWVdKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHNlbGVjdGVkX3Rlc3RpZHMucHVzaCh2YWx1ZS5pZClcbiAgICAvLyAgICAgICAgICAgICAgICAgc3ViU2V0VGVzdElkcy5wdXNoKHZhbHVlLmlkKVxuICAgIC8vICAgICAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICAgICAgc2VsZWN0ZWRfY2F0SWRzLnB1c2goeyBjYXRfaWQ6IGNhdF9pZCwgaXNTdWJzZXQ6IGlkc1swXS5pc1N1YnNldCwgc3ViU2V0VGVzdDpzdWJTZXRUZXN0SWRzIH0pXG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgIGlmIChpZHNbMF0uY2F0X2lkID09IGNhdF9pZCkge1xuICAgIC8vICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhpZHNbMF0uc3ViU2V0VGVzdCkubWFwKGZ1bmN0aW9uIChba2V5LCB2YWx1ZV0pIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkX3Rlc3RpZHMgPSBzZWxlY3RlZF90ZXN0aWRzLmZpbHRlcih4ID0+IHBhcnNlSW50KHgpICE9IHBhcnNlSW50KHZhbHVlKSlcbiAgICAvLyAgICAgICAgICAgICAgICAgfSlcbiAgICAvLyAgICAgICAgICAgICAgICAgc2VsZWN0ZWRfY2F0SWRzID0gc2VsZWN0ZWRfY2F0SWRzLmZpbHRlcih4ID0+IHBhcnNlSW50KHguY2F0X2lkKSAhPSBwYXJzZUludChjYXRfaWQpKVxuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIE9iamVjdC5lbnRyaWVzKGNhdF9kYXRhLnRlc3RzKS5tYXAoZnVuY3Rpb24gKFtrZXksIHZhbHVlXSkge1xuICAgIC8vICAgICAgICAgICAgIHNlbGVjdGVkX3Rlc3RpZHMucHVzaCh2YWx1ZS5pZClcbiAgICAvLyAgICAgICAgICAgICBzdWJTZXRUZXN0SWRzLnB1c2godmFsdWUuaWQpXG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vICAgICAgICAgc2VsZWN0ZWRfY2F0SWRzLnB1c2goeyBjYXRfaWQ6IGNhdF9pZCwgaXNTdWJzZXQ6IGlzU3Vic2V0LCBzdWJTZXRUZXN0OiBzdWJTZXRUZXN0SWRzIH0pXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgc2VsZWN0ZWRfdGVzdGlkcyA9IHNlbGVjdGVkX3Rlc3RpZHMuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0sIGluZGV4KXtcbiAgICAvLyAgICAgICAgIHJldHVybiBzZWxlY3RlZF90ZXN0aWRzLmluZGV4T2YoaXRlbSkgPj0gaW5kZXg7XG4gICAgLy8gICAgIH0pXG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RDYXRJRHM6IHNlbGVjdGVkX2NhdElkcywgc2VsZWN0ZWRUZXN0SWRzOnNlbGVjdGVkX3Rlc3RpZHMgfSlcbiAgICAvLyB9XG4gICAgLy8gc2VsZWN0VGVzdCh0ZXN0X2lkLCBwYWNrYWdlX2lkKSB7XG4gICAgLy8gICAgIGxldCB0ZXN0X2lkcyA9IFtdLmNvbmNhdCh0aGlzLnN0YXRlLnNlbGVjdGVkVGVzdElkcylcbiAgICAvLyAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgLy8gICAgIGxldCBmb3VuZCA9IGZhbHNlXG5cbiAgICAvLyAgICAgdGVzdF9pZHMgPSB0ZXN0X2lkcy5maWx0ZXIoKHgpID0+IHtcbiAgICAvLyAgICAgICAgIGlmICh4ID09IHRlc3RfaWQpIHtcbiAgICAvLyAgICAgICAgICAgICBmb3VuZCA9IHRydWVcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIHJldHVybiB0cnVlXG4gICAgLy8gICAgIH0pXG5cbiAgICAvLyAgICAgaWYgKCFmb3VuZCkge1xuICAgIC8vICAgICAgICAgdGVzdF9pZHMucHVzaCh0ZXN0X2lkKVxuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgbGV0IHBhY2thZ2VfaWRzID0gW11cbiAgICAvLyAgICAgbGV0IHNlbGVjdGVkSWRzID0gW11cbiAgICAvLyAgICAgbGV0IGZpbmFsSWRzID0gW10uY29uY2F0KHRoaXMuc3RhdGUuc2VsZWN0Q2F0SURzKVxuICAgIC8vICAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RDYXRJRHMubGVuZ3RoID4gMCkge1xuICAgIC8vICAgICAgICAgc2VsZWN0ZWRJZHMgPSB0aGlzLnN0YXRlLnNlbGVjdENhdElEcy5maWx0ZXIoeCA9PiBwYXJzZUludCh4LmNhdF9pZCkgPT0gcGFyc2VJbnQocGFja2FnZV9pZCkpXG4gICAgLy8gICAgICAgICBwYWNrYWdlX2lkcyA9IHRoaXMuc3RhdGUuc2VsZWN0Q2F0SURzLmZpbHRlcih4ID0+IHBhcnNlSW50KHguY2F0X2lkKSAhPSBwYXJzZUludChwYWNrYWdlX2lkXG4gICAgLy8gICAgICAgICAgICAgKSlcbiAgICAvLyAgICAgICAgIGlmIChzZWxlY3RlZElkcy5sZW5ndGggPiAwKSB7XG4gICAgLy8gICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoc2VsZWN0ZWRJZHMpLm1hcChmdW5jdGlvbiAoW2tleSwgdmFsdWVdKSB7XG5cbiAgICAvLyAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLmNhdF9pZCA9PSBwYWNrYWdlX2lkKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdmFsdWUuaXNTdWJzZXQgPSBmYWxzZVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdmFsdWUuc3ViU2V0VGVzdCA9IHZhbHVlLnN1YlNldFRlc3QuZmlsdGVyKCh4KSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHggPT0gdGVzdF9pZCkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWVcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9KVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnN1YlNldFRlc3QucHVzaCh0ZXN0X2lkKVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgfSlcbiAgICAvLyAgICAgICAgICAgICBmaW5hbElkcyA9IFsuLi5wYWNrYWdlX2lkcywgLi4uc2VsZWN0ZWRJZHNdXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBpZihwYWNrYWdlX2lkcy5sZW5ndGggPiAwKXtcbiAgICAvLyAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhwYWNrYWdlX2lkcykubWFwKGZ1bmN0aW9uIChba2V5LCB2YWxdKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGlmKHNlbGVjdGVkSWRzLmxlbmd0aD4wKXtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHBhY2thZ2VfaWRzKS5tYXAoZnVuY3Rpb24gKFtrZXksIHNlbGVjdGVkSWRdKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWYocGFyc2VJbnQodmFsLmNhdF9pZCkgIT0gcGFyc2VJbnQocGFja2FnZV9pZCkgJiYgc2VsZWN0ZWRJZC5jYXRfaWQgIT0gcGFja2FnZV9pZCl7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH0gXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9KVxuICAgIC8vICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmKHBhcnNlSW50KHZhbC5jYXRfaWQpICE9IHBhcnNlSW50KHBhY2thZ2VfaWQpKXtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbElkcy5wdXNoKHsgY2F0X2lkOiBwYWNrYWdlX2lkLCBpc1N1YnNldDogZmFsc2UsIHN1YlNldFRlc3Q6IFtdLmNvbmNhdCh0ZXN0X2lkKSB9KVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgfSkgICAgICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICAgICAgZmluYWxJZHMgPSBBcnJheS5mcm9tKG5ldyBTZXQoZmluYWxJZHMubWFwKEpTT04uc3RyaW5naWZ5KSkpLm1hcChKU09OLnBhcnNlKVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9ZWxzZXtcbiAgICAvLyAgICAgICAgIGZpbmFsSWRzLnB1c2goeyBjYXRfaWQ6IHBhY2thZ2VfaWQsIGlzU3Vic2V0OiBmYWxzZSwgc3ViU2V0VGVzdDogW10uY29uY2F0KHRlc3RfaWQpIH0pXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgc2VsZi5zZXRTdGF0ZSh7IHNlbGVjdGVkVGVzdElkczogdGVzdF9pZHMsIHNlbGVjdENhdElEczogZmluYWxJZHN9KVxuICAgIC8vIH1cblxuICAgIHNlbGVjdENhdGVnb3J5KGNhdF9pZCwgaXNTdWJzZXQsIGNhdF9kYXRhKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZF9jYXRJZHMgPSBbXS5jb25jYXQodGhpcy5zdGF0ZS5zZWxlY3RDYXRJRHMpXG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBsZXQgZm91bmQgPSBmYWxzZVxuXG4gICAgICAgIHNlbGVjdGVkX2NhdElkcyA9IHNlbGVjdGVkX2NhdElkcy5maWx0ZXIoKHgpID0+IHtcbiAgICAgICAgICAgIGlmICh4ID09IGNhdF9pZCkge1xuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICBzZWxlY3RlZF9jYXRJZHMucHVzaChjYXRfaWQpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0Q2F0SURzOiBzZWxlY3RlZF9jYXRJZHMgfSlcbiAgICB9XG4gICAgc2VsZWN0QWdlKGV2ZW50KSB7XG4gICAgICAgIHZhciBldmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0YWdlXCIpXG4gICAgICAgIGlmIChldmVudC5vcHRpb25zW2V2ZW50LnNlbGVjdGVkSW5kZXhdLnZhbHVlID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhZ2U6IGV2ZW50Lm9wdGlvbnNbZXZlbnQuc2VsZWN0ZWRJbmRleF0udmFsdWUsIG1pbl9hZ2U6IDAsIG1heF9hZ2U6IDIwIH0pXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQub3B0aW9uc1tldmVudC5zZWxlY3RlZEluZGV4XS52YWx1ZSA9PSAyKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWdlOiBldmVudC5vcHRpb25zW2V2ZW50LnNlbGVjdGVkSW5kZXhdLnZhbHVlLCBtaW5fYWdlOiAyMCwgbWF4X2FnZTogNTAgfSlcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5vcHRpb25zW2V2ZW50LnNlbGVjdGVkSW5kZXhdLnZhbHVlID09IDMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhZ2U6IGV2ZW50Lm9wdGlvbnNbZXZlbnQuc2VsZWN0ZWRJbmRleF0udmFsdWUsIG1pbl9hZ2U6IDAsIG1heF9hZ2U6IDUwIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2VsZWN0UGFja2FnZShwYWNrYWdlTmFtZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGFja2FnZVR5cGU6IHBhY2thZ2VOYW1lIH0pXG4gICAgfVxuICAgIHNlbGVjdEdlbmRlcihnZW5kZXJWYWwpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdlbmRlcjogZ2VuZGVyVmFsIH0pXG4gICAgfVxuICAgIHNob3dQYWNrYWdlKCkge1xuICAgICAgICBsZXQgY2F0X2lkcyA9IFtdXG4gICAgICAgIGxldCB0ZXN0X2lkcyA9IFtdXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdENhdElEcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLnN0YXRlLnNlbGVjdENhdElEcykubWFwKGZ1bmN0aW9uIChba2V5LCB2YWx1ZV0pIHtcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlLmlzU3Vic2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhdF9pZHMucHVzaCh2YWx1ZS5jYXRfaWQpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLnN1YlNldFRlc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModmFsdWUuc3ViU2V0VGVzdCkubWFwKGZ1bmN0aW9uIChbaywgdmFsXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3RfaWRzLnB1c2godmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmV3Q2F0ZWdvcnlTdGF0ZSA9IHt9XG4gICAgICAgIGxldCBmaWx0ZXJzdGF0ZSA9IHsgLi4udGhpcy5wcm9wcy5maWx0ZXJDcml0ZXJpYVBhY2thZ2VzIH1cbiAgICAgICAgLy8gbmV3Q2F0ZWdvcnlTdGF0ZVsnY2F0SWRzJ10gPSBjYXRfaWRzXG4gICAgICAgIG5ld0NhdGVnb3J5U3RhdGVbJ2NhdElkcyddID0gdGhpcy5zdGF0ZS5zZWxlY3RDYXRJRHNcbiAgICAgICAgbmV3Q2F0ZWdvcnlTdGF0ZVsnc2VsZWN0Q2F0SURzJ10gPSB0aGlzLnN0YXRlLnNlbGVjdENhdElEc1xuICAgICAgICBuZXdDYXRlZ29yeVN0YXRlWyd0ZXN0X2lkcyddID0gdGVzdF9pZHNcbiAgICAgICAgbmV3Q2F0ZWdvcnlTdGF0ZVsnZGlzdGFuY2VSYW5nZSddID0gWzAsIDE1XVxuICAgICAgICBuZXdDYXRlZ29yeVN0YXRlWydwcmljZVJhbmdlJ10gPSBbMCwgMjAwMDBdXG4gICAgICAgIG5ld0NhdGVnb3J5U3RhdGVbJ3NvcnRfb24nXSA9IG51bGxcbiAgICAgICAgbmV3Q2F0ZWdvcnlTdGF0ZVsnbWF4X2FnZSddID0gdGhpcy5zdGF0ZS5tYXhfYWdlXG4gICAgICAgIG5ld0NhdGVnb3J5U3RhdGVbJ21pbl9hZ2UnXSA9IHRoaXMuc3RhdGUubWluX2FnZVxuICAgICAgICBuZXdDYXRlZ29yeVN0YXRlWydnZW5kZXInXSA9IHRoaXMuc3RhdGUuZ2VuZGVyXG4gICAgICAgIG5ld0NhdGVnb3J5U3RhdGVbJ3BhY2thZ2VUeXBlJ10gPSB0aGlzLnN0YXRlLnBhY2thZ2VUeXBlXG4gICAgICAgIG5ld0NhdGVnb3J5U3RhdGVbJ3BhY2thZ2VfaWRzJ10gPSBbXVxuICAgICAgICB0aGlzLnByb3BzLm1lcmdlTEFCU3RhdGUoeyBmaWx0ZXJDcml0ZXJpYVBhY2thZ2VzOiBuZXdDYXRlZ29yeVN0YXRlIH0pXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9zZWFyY2hwYWNrYWdlcycpXG4gICAgICAgIH0sIDEwMClcblxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnc2hvd1BhY2thZ2VzQnV0dG9uQ2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdzaG93LXBhY2thZ2VzLWJ1dHRvbi1jbGljaycsICdTZWxlY3RlZENhdGVnb3JpZXMnOiB0aGlzLnN0YXRlLnNlbGVjdENhdElEcyB8fCB7fVxuICAgICAgICB9XG5cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICB9XG4gICAgZ2V0Q2l0eUxpc3RMYXlvdXQoc2VhcmNoUmVzdWx0cyA9IFtdKSB7XG4gICAgICAgIGlmIChzZWFyY2hSZXN1bHRzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaENpdGllczogc2VhcmNoUmVzdWx0cyB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaENpdGllczogW10sIHNlYXJjaFZhbHVlOiAnJyB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIHNlbGVjdExvY2F0aW9uKGNpdHkpIHtcbiAgICAgICAgdGhpcy5jaGlsZC5zZWxlY3RMb2NhdGlvbigoY2l0eSksICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hDaXRpZXM6IFtdIH0pXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHNob3dJbmZvKGluZm9JZCwgZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dJbmZvVGV4dDogaW5mb0lkLCBzaG93SW5mbzogdHJ1ZSB9KVxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIH1cbiAgICBjbG9zZUluZm8oKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93SW5mbzogZmFsc2UgfSlcbiAgICB9XG4gICAgZ29CYWNrKCkge1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpXG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIGxldCBzZWxlY3RlZENhdElEcyA9IFtdXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdENhdElEcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLnN0YXRlLnNlbGVjdENhdElEcykubWFwKGZ1bmN0aW9uIChba2V5LCBzZWxlY3RlZENhdHNdKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoc2VsZi5zdGF0ZS5pbml0aWFsRGF0YSkubWFwKGZ1bmN0aW9uIChba2V5LCBpbml0aWFsUmVzcF0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkQ2F0cy5jYXRfaWQgPT0gaW5pdGlhbFJlc3AuY2F0X2lkICYmIHNlbGVjdGVkQ2F0cy5zdWJTZXRUZXN0Lmxlbmd0aCA9PSBpbml0aWFsUmVzcC5zdWJTZXRUZXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXRJRHMucHVzaChzZWxlY3RlZENhdHMuY2F0X2lkKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXAgZHAtY29udGFpbmVyLWRpdlwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDU0IH19ID5cbiAgICAgICAgICAgICAgICA8SGVsbWV0VGFncyB0YWdzRGF0YT17e1xuICAgICAgICAgICAgICAgICAgICBjYW5vbmljYWxVcmw6ICcvZnVsbC1ib2R5LWNoZWNrdXAtaGVhbHRoLXBhY2thZ2VzJ1xuICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctNyBwdC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbWItMTAgbXJuZy10b3AtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWR2aXNvckNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZ3LTUwMFwiPkhlYWx0aCBQYWNrYWdlIEFkdmlzb3I8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtdG9wLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJjaC1udy1pbnB1dHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYXRpb25FbGVtZW50cyB7Li4udGhpcy5wcm9wc30gb25SZWY9e3JlZiA9PiAodGhpcy5jaGlsZCA9IHJlZil9IGdldENpdHlMaXN0TGF5b3V0PXt0aGlzLmdldENpdHlMaXN0TGF5b3V0LmJpbmQodGhpcyl9IHJlc3VsdFR5cGU9J3NlYXJjaCcgZnJvbUNyaXRlcmlhPXt0cnVlfSBjb21tb25TZWFyY2hQYWdlPXt0cnVlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWFyY2hDaXRpZXMubGVuZ3RoID09IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJocGEtZmxleCBtcmItMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhwYS1mbGV4IGhwYS1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZ3LTUwMFwiPkFnZSA6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInNlbGVjdGFnZVwiIHZhbHVlPXt0aGlzLnN0YXRlLmFnZX0gb25DaGFuZ2U9e3RoaXMuc2VsZWN0QWdlLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBpZD17MH0gdmFsdWU9ezB9PlNlbGVjdDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBpZD17MX0gdmFsdWU9ezF9PiAwLTIwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGlkPXsyfSB2YWx1ZT17Mn0+IDIxLTUwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGlkPXszfSB2YWx1ZT17M30+ID41MDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhwYS1mbGV4IGhwYS1nZW5kZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZ3LTUwMFwiPkdlbmRlciA6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHRsLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lci1yYWRpbyBtYi0wIGhwYS1jb250YWluZXItcmFkaW9cIiBzdHlsZT17eyBtYXJnaW5SaWdodDogMTYgfX0gb25DaGFuZ2U9e3RoaXMuc2VsZWN0R2VuZGVyLmJpbmQodGhpcywgMSl9Pk1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInJhZGlvXCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5nZW5kZXIgPT0gMSA/IHRydWUgOiBmYWxzZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFyayBocGEtcmFkaW8gaHBhLXJhZGlvLWdlbmRlclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR0bC1yYWRpb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW8gbWItMCBocGEtY29udGFpbmVyLXJhZGlvXCIgb25DaGFuZ2U9e3RoaXMuc2VsZWN0R2VuZGVyLmJpbmQodGhpcywgMil9PkZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInJhZGlvXCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5nZW5kZXIgPT0gMiA/IHRydWUgOiBmYWxzZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFyayBocGEtcmFkaW8gaHBhLXJhZGlvLWdlbmRlclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhwYS1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJocGEtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZnctNTAwXCI+UGFja2FnZSBUeXBlIDo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiIHN0eWxlPXt7IGZsZXhXcmFwOiAnd3JhcCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5yZWNvbW1lbmRlZF9wYWNrYWdlLmZpbHRlcnMgJiYgdGhpcy5wcm9wcy5yZWNvbW1lbmRlZF9wYWNrYWdlLmZpbHRlcnMubGVuZ3RoID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5yZWNvbW1lbmRlZF9wYWNrYWdlLmZpbHRlcnMpLm1hcChmdW5jdGlvbiAoW2tleSwgZmlsdGVyXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJkdGwtcmFkaW8gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBkdGwtbWFyZ2luLWxnIHBrZ1R5cGVCb3JkZXJcIiBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJhZGlvIG1iLTAgaHBhLWNvbnRhaW5lci1yYWRpb1wiIG9uQ2hhbmdlPXtzZWxmLnNlbGVjdFBhY2thZ2UuYmluZChzZWxmLCBmaWx0ZXIuaWQpfT57ZmlsdGVyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9e2ByYWRpbzJfJHtmaWx0ZXIuaWR9YH0gY2hlY2tlZD17c2VsZi5zdGF0ZS5wYWNrYWdlVHlwZSA9PSBmaWx0ZXIuaWQgPyB0cnVlIDogZmFsc2V9IHN0eWxlPXt7IGxlZnQ6IDAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb2MtY2hlY2ttYXJrIGhwYS1yYWRpbyBocGEtcmFkaW8tZ2VuZGVyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIuaW5mb3JtYXRpb24gIT0gJycgPyA8aW1nIGNsYXNzTmFtZT1cImhwYS1pbmZvLWljb25cIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY29ucy9pbmZvLnN2Z1wifSBvbkNsaWNrPXtzZWxmLnNob3dJbmZvLmJpbmQoc2VsZiwgZmlsdGVyLmlkKX0gLz4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlYXJjaENpdGllcy5sZW5ndGggPiAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbW9uLXNlYXJjaC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3JjaC1oZWFkaW5nXCI+TG9jYXRpb24gU2VhcmNoPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1vbi1saXN0aW5nLWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VhcmNoQ2l0aWVzLm1hcCgocmVzdWx0LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aX0gb25DbGljaz17dGhpcy5zZWxlY3RMb2NhdGlvbi5iaW5kKHRoaXMsIHJlc3VsdCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiID57cmVzdWx0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnByb3BzLnJlY29tbWVuZGVkX3BhY2thZ2UpLmxlbmd0aCA+IDAgJiYgdGhpcy5zdGF0ZS5zZWFyY2hDaXRpZXMubGVuZ3RoID09IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJocGEtaGVhZGluZyBtcnQtMTAgbXJiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+U2VsZWN0IENhdGVnb3JpZXM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLnJlY29tbWVuZGVkX3BhY2thZ2UucmVzdWx0KS5tYXAoZnVuY3Rpb24gKFtrZXksIHJQYWNrYWdlc10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbWItMTAgbXJ0LTEwXCIga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC10b3AtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2stYnggcGtnQ2hlY2stYm94XCIgb25DaGFuZ2U9e3NlbGYuc2VsZWN0Q2F0ZWdvcnkuYmluZChzZWxmLCByUGFja2FnZXMuaWQsIGZhbHNlLCByUGFja2FnZXMpfT57clBhY2thZ2VzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPXtgcmFkaW9fJHtyUGFja2FnZXMuaWR9YH0gY2hlY2tlZD17c2VsZi5zdGF0ZS5zZWxlY3RDYXRJRHMuZmlsdGVyKHggPT4geC5jYXRfaWQgPT0gclBhY2thZ2VzLmlkICYmICF4LmlzU3Vic2V0KS5sZW5ndGggPyB0cnVlIDogZmFsc2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmsgaHBhLXJhZGlvXCIgc3R5bGU9e3sgdG9wOiA0IH19ID48L3NwYW4+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIm9uXCIgY2hlY2tlZD17c2VsZi5zdGF0ZS5zZWxlY3RDYXRJRHMuaW5kZXhPZihyUGFja2FnZXMuaWQpID4gLTEgPyB0cnVlIDogZmFsc2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFyayBocGEtY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByUGFja2FnZXMuaWNvbiAmJiByUGFja2FnZXMuaWNvbi5sZW5ndGggPiAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnQ2F0SW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e3JQYWNrYWdlcy5pY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxsYWJlbCBjbGFzc05hbWU9XCJjay1ieFwiIHN0eWxlPXt7IGZvbnRTaXplOiAxMiB9fSBvbkNoYW5nZT17c2VsZi5zZWxlY3RDYXRlZ29yeS5iaW5kKHNlbGYsIHJQYWNrYWdlcy5pZCwgdHJ1ZSl9PlNlbGVjdCBUZXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNrLWJ4XCIgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBwYWRkaW5nTGVmdDogMjQgfX0gb25DaGFuZ2U9e3NlbGYuc2VsZWN0Q2F0ZWdvcnkuYmluZChzZWxmLCByUGFja2FnZXMuaWQsIHRydWUpfT5TZWxlY3QgVGVzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT17YHJhZGlvXyR7clBhY2thZ2VzLmlkfWB9IGNoZWNrZWQ9e3NlbGYuc3RhdGUuc2VsZWN0Q2F0SURzLmZpbHRlcih4ID0+IHguY2F0X2lkID09IHJQYWNrYWdlcy5pZCAmJiB4LmlzU3Vic2V0KS5sZW5ndGggPyB0cnVlIDogZmFsc2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmsgaHBhLXJhZGlvXCIgc3R5bGU9e3sgdG9wOiAwIH19Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwib25cIiBjaGVja2VkPXtzZWxmLnN0YXRlLnNlbGVjdENhdElEcy5maWx0ZXIoeCA9PiB4LmNhdF9pZCA9PSByUGFja2FnZXMuaWQgJiYgeC5pc1N1YnNldCkubGVuZ3RoID8gdHJ1ZSA6IGZhbHNlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmsgaHBhLWNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IHN0eWxlPXt7ZGlzcGxheTogc2VsZi5zdGF0ZS5zZWxlY3RDYXRJRHMuZmlsdGVyKHggPT4geC5jYXRfaWQgPT0gclBhY2thZ2VzLmlkICYmICF4LmlzU3Vic2V0KS5sZW5ndGggPydibG9jayc6J25vbmUnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QgaHBhLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoclBhY2thZ2VzLnRlc3RzKS5tYXAoZnVuY3Rpb24gKFtrLCB0ZXN0XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtrfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgLy90byBiZSBjb21tZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zdGF0ZS5zZWxlY3RDYXRJRHMuZmlsdGVyKHggPT4geC5jYXRfaWQgPT0gclBhY2thZ2VzLmlkICYmIHguaXNTdWJzZXQpLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjay1ieCBmdy00MDBcIiBzdHlsZT17eyBmb250U2l6ZTogMTQsIGZsZXg6IDEsIHBhZGRpbmdMZWZ0OiAyNCB9fSBvbkNoYW5nZT17c2VsZi5zZWxlY3RUZXN0LmJpbmQoc2VsZiwgdGVzdC5pZCwgclBhY2thZ2VzLmlkKX0+e3Rlc3QubmFtZX0ge3Rlc3QubnVtX29mX3BhcmFtZXRlcnMgIT0gMCA/ICcoJyArIHRlc3QubnVtX29mX3BhcmFtZXRlcnMgKyAnKScgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIm9uXCIgY2hlY2tlZD17c2VsZi5zdGF0ZS5zZWxlY3RlZFRlc3RJZHMuaW5kZXhPZih0ZXN0LmlkKSA+IC0xID8gdHJ1ZSA6IGZhbHNlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrIGhwYS1jaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPHAgY2xhc3NOYW1lPVwiZnctNDAwXCIgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IDI0LCBsaW5lSGVpZ2h0OiAnMjBweCcgfX0+e3Rlc3QubmFtZX0ge3Rlc3QubnVtX29mX3BhcmFtZXRlcnMgIT0gMCA/ICcoJyArIHRlc3QubnVtX29mX3BhcmFtZXRlcnMgKyAnKScgOiAnJ308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2stYnggZnctNDAwXCIgc3R5bGU9e3sgZm9udFNpemU6IDE0LCBmbGV4OiAxLCBwYWRkaW5nTGVmdDogMjQgfX0gb25DaGFuZ2U9e3NlbGYuc2VsZWN0VGVzdC5iaW5kKHNlbGYsIHRlc3QuaWQsIHJQYWNrYWdlcy5pZCl9Pnt0ZXN0Lm5hbWV9IHt0ZXN0Lm51bV9vZl9wYXJhbWV0ZXJzICE9IDAgPyAnKCcgKyB0ZXN0Lm51bV9vZl9wYXJhbWV0ZXJzICsgJyknIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwib25cIiBjaGVja2VkPXtzZWxmLnN0YXRlLnNlbGVjdGVkVGVzdElkcy5pbmRleE9mKHRlc3QuaWQpID4gLTEgPyB0cnVlIDogZmFsc2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrIGhwYS1jaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3QucGFyYW1ldGVycy5sZW5ndGggPiAwID8gPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Zyd9IG9uQ2xpY2s9e3NlbGYudG9nZ2xlSW5mby5iaW5kKHNlbGYsIHRlc3QuaWQpfSAvPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnN0YXRlLnRlc3RJbmZvSWRzLmluZGV4T2YodGVzdC5pZCkgPiAtMSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtcnQtMTBcIiBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBwYWRkaW5nTGVmdDogMzAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyh0ZXN0LnBhcmFtZXRlcnMpLm1hcChmdW5jdGlvbiAoW3BhcmFtX2ssIHBhcmFtdGVyXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxwIGtleT17cGFyYW1fa30gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA0IH19ID57cGFyYW10ZXJ9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb21tb25fcGFja2FnZS5sZW5ndGggPiAwICYmIHRoaXMuc3RhdGUuc2VhcmNoQ2l0aWVzLmxlbmd0aCA9PSAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJocGEtaGVhZGluZyBtcnQtMTAgbXJiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPlRvcCBTZWxsaW5nIEhlYWx0aCBQYWNrYWdlczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtdG9wLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QgaHBhLWxpc3QtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLmNvbW1vbl9wYWNrYWdlKS5tYXAoZnVuY3Rpb24gKFtrZXksIHZhbHVlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17a2V5fSBpZD17dmFsdWUuaWR9IG9uQ2xpY2s9e3NlbGYuc2VhcmNoTGFiLmJpbmQoc2VsZiwgdmFsdWUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt2YWx1ZS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcmVkaXJlY3QtYXJyb3cuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiAxNSB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicC0zIHYtYnRuIHYtYnRuLXByaW1hcnkgYnRuLWxnIGZpeGVkIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIHRleHQtbGcgc3RpY2t5LWJ0blwiIG9uQ2xpY2s9e3RoaXMuc2hvd1BhY2thZ2UuYmluZCh0aGlzKX0+U2hvdyBQYWNrYWdlczwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0luZm8gP1xuICAgICAgICAgICAgICAgICAgICAgICAgPEluZm9Qb3B1cCBjbG9zZUluZm89e3RoaXMuY2xvc2VJbmZvLmJpbmQodGhpcyl9IGluZm9UZXh0SWQ9e3RoaXMuc3RhdGUuc2hvd0luZm9UZXh0fSBwYWNrYWdlX2luZm9ybWF0aW9uPXt0aGlzLnByb3BzLnJlY29tbWVuZGVkX3BhY2thZ2UuZmlsdGVycy5sZW5ndGggPiAwID8gdGhpcy5wcm9wcy5yZWNvbW1lbmRlZF9wYWNrYWdlLmZpbHRlcnMgOiAnJ30gLz4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFsdGhQYWNrYWdlQWR2aXNvclZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBJbmZvUG9wdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICBsZXQgaW5mb3JtYXRpb25fdGV4dCA9IFtdXG4gICAgICAgIGluZm9ybWF0aW9uX3RleHQgPSB0aGlzLnByb3BzLnBhY2thZ2VfaW5mb3JtYXRpb24uZmlsdGVyKHggPT4gcGFyc2VJbnQoeC5pZCkgPT0gcGFyc2VJbnQodGhpcy5wcm9wcy5pbmZvVGV4dElkKSlcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLW92ZXJsYXlcIiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5wcm9wcy5jbG9zZUluZm8oKX19PjwvZGl2PlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgY2FuY2VsLWFwcG9pbnRtZW50LWRpdiBjYW5jZWwtcG9wdXBcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWhlYWRlciB0ZXh0LWNlbnRlciBhY3Rpb24tc2NyZWVuLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGNhbmNlbC1hcHBvaW50bWVudC1oZWFkXCI+e2luZm9ybWF0aW9uX3RleHRbMF0uaW5mb190aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2ljb25zL2Nsb3NlLnBuZ1wifSBjbGFzc05hbWU9XCJjbG9zZS1tb2RhbFwiIG9uQ2xpY2s9eygpID0+IHt0aGlzLnByb3BzLmNsb3NlSW5mbygpfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLXBvbGljeS10ZXh0XCIgc3R5bGU9e3twYWRkaW5nVG9wOiAwfX0+XG4gICAgICAgICAgICAgICAgICAgICB7aW5mb3JtYXRpb25fdGV4dFswXS5pbmZvcm1hdGlvbn1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIH1cbmV4cG9ydCBkZWZhdWx0IEluZm9Qb3B1cFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7Z2V0VXNlclByb2ZpbGUsdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEsbWVyZ2VMQUJTdGF0ZX0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcbmltcG9ydCBIZWFsdGhQYWNrYWdlQWR2aXNvclZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kaWFnbm9zaXMvaGVhbHRoUGFja2FnZUFkdmlzb3IvSGVhbHRoUGFja2FnZUFkdmlzb3JWaWV3LmpzJ1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuXG5jbGFzcyBIZWFsdGhQYWNrYWdlQWR2aXNvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKFNUT1JBR0UuY2hlY2tBdXRoKCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0VXNlclByb2ZpbGUoKVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxIZWFsdGhQYWNrYWdlQWR2aXNvclZpZXcgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHBhc3NlZFByb3BzKSA9PiB7XG4gICAgLyoqXG4gICAgICogaW5pdGlhbFNlcnZlckRhdGEgaXMgc2VydmVyIHJlbmRlcmVkIGFzeW5jIGRhdGEgcmVxdWlyZWQgYnVpbGQgaHRtbCBvbiBzZXJ2ZXIuIFxuICAgICAqL1xuICAgIGxldCBpbml0aWFsU2VydmVyRGF0YSA9IG51bGxcbiAgICBsZXQgeyBzdGF0aWNDb250ZXh0IH0gPSBwYXNzZWRQcm9wc1xuICAgIGlmIChzdGF0aWNDb250ZXh0ICYmIHN0YXRpY0NvbnRleHQuZGF0YSkge1xuICAgICAgICBpbml0aWFsU2VydmVyRGF0YSA9IHN0YXRpY0NvbnRleHQuZGF0YVxuICAgIH1cblxuICAgIGxldCB7XG4gICAgICAgIHByb2ZpbGVzLCBzZWxlY3RlZFByb2ZpbGUsIG5ld05vdGlmaWNhdGlvbiwgbm90aWZpY2F0aW9ucywgYXJ0aWNsZXMsIGhlYWx0aFRpcHMsIGRldmljZV9pbmZvLCBvZmZlckxpc3RcbiAgICB9ID0gc3RhdGUuVVNFUlxuXG4gICAgY29uc3Qge1xuICAgICAgICBMT0FERURfU0VBUkNIX0NSSVRFUklBX0xBQixcbiAgICAgICAgY29tbW9uX3Rlc3RzLFxuICAgICAgICBjb21tb25fcGFja2FnZSxcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgcmVjb21tZW5kZWRfcGFja2FnZVxuICAgIH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfTEFCU1xuICAgIGxldCBmaWx0ZXJDcml0ZXJpYV9sYWIgPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfTEFCUy5maWx0ZXJDcml0ZXJpYVxuICAgIGxldCBmaWx0ZXJDcml0ZXJpYVBhY2thZ2VzID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX0xBQlMuZmlsdGVyQ3JpdGVyaWFQYWNrYWdlc1xuXG4gICAgY29uc3Qge1xuICAgICAgICBMT0FERURfU0VBUkNIX0NSSVRFUklBX09QRCxcbiAgICAgICAgc3BlY2lhbGl6YXRpb25zXG4gICAgfSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9PUERcbiAgICBsZXQgZmlsdGVyQ3JpdGVyaWFfb3BkID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX09QRC5maWx0ZXJDcml0ZXJpYVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvZmlsZXMsIHNlbGVjdGVkUHJvZmlsZSwgbmV3Tm90aWZpY2F0aW9uLCBub3RpZmljYXRpb25zLCBhcnRpY2xlcywgaGVhbHRoVGlwcywgY29tbW9uX3Rlc3RzOiBjb21tb25fdGVzdHMgfHwgW10sIHNwZWNpYWxpemF0aW9uczogc3BlY2lhbGl6YXRpb25zIHx8IFtdLCBzZWxlY3RlZExvY2F0aW9uLCBmaWx0ZXJDcml0ZXJpYV9sYWIsIGZpbHRlckNyaXRlcmlhX29wZCwgZGV2aWNlX2luZm8sIGNvbW1vbl9wYWNrYWdlOiBjb21tb25fcGFja2FnZSB8fCBbXSwgaW5pdGlhbFNlcnZlckRhdGEsIG9mZmVyTGlzdCwgcmVjb21tZW5kZWRfcGFja2FnZTpyZWNvbW1lbmRlZF9wYWNrYWdlIHx8IFtdLCBmaWx0ZXJDcml0ZXJpYVBhY2thZ2VzXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRVc2VyUHJvZmlsZTogKCkgPT4gZGlzcGF0Y2goZ2V0VXNlclByb2ZpbGUoKSksXG4gICAgICAgIHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhOiAodHlwZSwgdGVzdCwgZm9yY2VBZGQpID0+IGRpc3BhdGNoKHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKHR5cGUsIHRlc3QsIGZvcmNlQWRkKSksXG4gICAgICAgIG1lcmdlTEFCU3RhdGU6IChzdGF0ZSwgZmV0Y2hOZXdSZXN1bHRzKSA9PiBkaXNwYXRjaChtZXJnZUxBQlN0YXRlKHN0YXRlLCBmZXRjaE5ld1Jlc3VsdHMpKSxcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEhlYWx0aFBhY2thZ2VBZHZpc29yKTsiXSwic291cmNlUm9vdCI6IiJ9