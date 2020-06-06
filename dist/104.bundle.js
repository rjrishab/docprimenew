(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[104],{

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

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var HealthPackageAdvisorView = function (_React$Component) {
    _inherits(HealthPackageAdvisorView, _React$Component);

    function HealthPackageAdvisorView(props) {
        _classCallCheck(this, HealthPackageAdvisorView);

        var _this = _possibleConstructorReturn(this, (HealthPackageAdvisorView.__proto__ || Object.getPrototypeOf(HealthPackageAdvisorView)).call(this, props));

        _this.state = {
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
        return _this;
    }

    _createClass(HealthPackageAdvisorView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.setState(_extends({}, this.props.filterCriteriaPackages), function () {
                _this2.setState({ selectedTestIds: _this2.props.filterCriteriaPackages.test_ids !== '' ? _this2.props.filterCriteriaPackages.test_ids : [] });
                if (_this2.state.max_age == 20) {
                    _this2.setState({ age: 1 });
                } else if (_this2.state.min_age == 20) {
                    _this2.setState({ age: 2 });
                } else if (_this2.state.max_age == 20) {
                    _this2.setState({ age: 3 });
                }
            });
            if (this.props.recommended_package && this.props.recommended_package.result.length > 0) {
                var _data = {};
                var newData = [];
                Object.entries(this.props.recommended_package.result).map(function (_ref) {
                    var _ref2 = _slicedToArray(_ref, 2),
                        key = _ref2[0],
                        rPackages = _ref2[1];

                    var data = {};
                    data.cat_id = rPackages.id;
                    data.subSetTest = [];
                    data.isSubset = false;
                    Object.entries(rPackages.tests).map(function (_ref3) {
                        var _ref4 = _slicedToArray(_ref3, 2),
                            key = _ref4[0],
                            value = _ref4[1];

                        data.subSetTest.push(value.id);
                    });
                    newData.push(data);
                });
                this.setState({ initialData: newData });
            }

            if (window) {
                window.scrollTo(0, 0);
            }

            var parsed = queryString.parse(this.props.location.search);

            var data = {
                'Category': 'ConsumerApp', 'Action': 'OpenHealthPackageAdvisorPage', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'open-health-package-advisor-from-' + (parsed.from || "default"), 'from': parsed.from
            };

            _gtm2.default.sendEvent({ data: data });
        }
    }, {
        key: 'searchLab',
        value: function searchLab(test) {
            var _this3 = this;

            var isPackage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var event = arguments[2];

            test.type = 'test';
            this.props.toggleDiagnosisCriteria('test', test, true);
            setTimeout(function () {
                _this3.props.history.push('/lab/searchresults');
            }, 100);
        }
    }, {
        key: 'toggleInfo',
        value: function toggleInfo(test_id) {
            var test_ids = [].concat(this.state.testInfoIds);
            var self = this;
            var found = false;
            test_ids = test_ids.filter(function (x) {
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

    }, {
        key: 'selectCategory',
        value: function selectCategory(cat_id, isSubset, cat_data) {
            var selected_catIds = [].concat(this.state.selectCatIDs);
            var self = this;
            var found = false;

            selected_catIds = selected_catIds.filter(function (x) {
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
    }, {
        key: 'selectAge',
        value: function selectAge(event) {
            var event = document.getElementById("selectage");
            if (event.options[event.selectedIndex].value == 1) {
                this.setState({ age: event.options[event.selectedIndex].value, min_age: 0, max_age: 20 });
            } else if (event.options[event.selectedIndex].value == 2) {
                this.setState({ age: event.options[event.selectedIndex].value, min_age: 20, max_age: 50 });
            } else if (event.options[event.selectedIndex].value == 3) {
                this.setState({ age: event.options[event.selectedIndex].value, min_age: 0, max_age: 50 });
            }
        }
    }, {
        key: 'selectPackage',
        value: function selectPackage(packageName) {
            this.setState({ packageType: packageName });
        }
    }, {
        key: 'selectGender',
        value: function selectGender(genderVal) {
            this.setState({ gender: genderVal });
        }
    }, {
        key: 'showPackage',
        value: function showPackage() {
            var _this4 = this;

            var cat_ids = [];
            var test_ids = [];
            if (this.state.selectCatIDs.length > 0) {
                Object.entries(this.state.selectCatIDs).map(function (_ref5) {
                    var _ref6 = _slicedToArray(_ref5, 2),
                        key = _ref6[0],
                        value = _ref6[1];

                    if (!value.isSubset) {
                        cat_ids.push(value.cat_id);
                    } else {
                        if (value.subSetTest.length > 0) {
                            Object.entries(value.subSetTest).map(function (_ref7) {
                                var _ref8 = _slicedToArray(_ref7, 2),
                                    k = _ref8[0],
                                    val = _ref8[1];

                                test_ids.push(val);
                            });
                        }
                    }
                });
            }
            var newCategoryState = {};
            var filterstate = _extends({}, this.props.filterCriteriaPackages);
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
            setTimeout(function () {
                _this4.props.history.push('/searchpackages');
            }, 100);

            var data = {
                'Category': 'ConsumerApp', 'Action': 'showPackagesButtonClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'show-packages-button-click', 'SelectedCategories': this.state.selectCatIDs || {}
            };

            _gtm2.default.sendEvent({ data: data });
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
        key: 'showInfo',
        value: function showInfo(infoId, event) {
            this.setState({ showInfoText: infoId, showInfo: true });
            event.stopPropagation();
        }
    }, {
        key: 'closeInfo',
        value: function closeInfo() {
            this.setState({ showInfo: false });
        }
    }, {
        key: 'goBack',
        value: function goBack() {
            this.props.history.push('/');
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            var self = this;
            var selectedCatIDs = [];
            if (this.state.selectCatIDs.length > 0) {
                Object.entries(this.state.selectCatIDs).map(function (_ref9) {
                    var _ref10 = _slicedToArray(_ref9, 2),
                        key = _ref10[0],
                        selectedCats = _ref10[1];

                    Object.entries(self.state.initialData).map(function (_ref11) {
                        var _ref12 = _slicedToArray(_ref11, 2),
                            key = _ref12[0],
                            initialResp = _ref12[1];

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
                                        _react2.default.createElement(_locationElements2.default, _extends({}, this.props, { onRef: function onRef(ref) {
                                                return _this6.child = ref;
                                            }, getCityListLayout: this.getCityListLayout.bind(this), resultType: 'search', fromCriteria: true, commonSearchPage: true }))
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
                                                    this.props.recommended_package.filters && this.props.recommended_package.filters.length > 0 ? Object.entries(this.props.recommended_package.filters).map(function (_ref13) {
                                                        var _ref14 = _slicedToArray(_ref13, 2),
                                                            key = _ref14[0],
                                                            filter = _ref14[1];

                                                        return _react2.default.createElement(
                                                            'div',
                                                            { className: 'dtl-radio d-flex align-items-center dtl-margin-lg pkgTypeBorder', key: key },
                                                            _react2.default.createElement(
                                                                'label',
                                                                { className: 'container-radio mb-0 hpa-container-radio', onChange: self.selectPackage.bind(self, filter.id) },
                                                                filter.name,
                                                                _react2.default.createElement('input', { type: 'radio', name: 'radio2_' + filter.id, checked: self.state.packageType == filter.id ? true : false, style: { left: 0 } }),
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
                                Object.entries(this.props.recommended_package.result).map(function (_ref15) {
                                    var _ref16 = _slicedToArray(_ref15, 2),
                                        key = _ref16[0],
                                        rPackages = _ref16[1];

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
                                            Object.entries(this.props.common_package).map(function (_ref17) {
                                                var _ref18 = _slicedToArray(_ref17, 2),
                                                    key = _ref18[0],
                                                    value = _ref18[1];

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
    }]);

    return HealthPackageAdvisorView;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InfoPopup = function (_React$Component) {
    _inherits(InfoPopup, _React$Component);

    function InfoPopup(props) {
        _classCallCheck(this, InfoPopup);

        var _this = _possibleConstructorReturn(this, (InfoPopup.__proto__ || Object.getPrototypeOf(InfoPopup)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(InfoPopup, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var information_text = [];
            information_text = this.props.package_information.filter(function (x) {
                return parseInt(x.id) == parseInt(_this2.props.infoTextId);
            });
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement("div", { className: "cancel-overlay", onClick: function onClick() {
                        _this2.props.closeInfo();
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
                        _react2.default.createElement("img", { src: "/assets" + "/img/icons/close.png", className: "close-modal", onClick: function onClick() {
                                _this2.props.closeInfo();
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
    }]);

    return InfoPopup;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _HealthPackageAdvisorView = __webpack_require__(/*! ../../components/diagnosis/healthPackageAdvisor/HealthPackageAdvisorView.js */ "./dev/js/components/diagnosis/healthPackageAdvisor/HealthPackageAdvisorView.js");

var _HealthPackageAdvisorView2 = _interopRequireDefault(_HealthPackageAdvisorView);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HealthPackageAdvisor = function (_React$Component) {
    _inherits(HealthPackageAdvisor, _React$Component);

    function HealthPackageAdvisor(props) {
        _classCallCheck(this, HealthPackageAdvisor);

        var _this = _possibleConstructorReturn(this, (HealthPackageAdvisor.__proto__ || Object.getPrototypeOf(HealthPackageAdvisor)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(HealthPackageAdvisor, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (_storage2.default.checkAuth()) {
                this.props.getUserProfile();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_HealthPackageAdvisorView2.default, this.props);
        }
    }]);

    return HealthPackageAdvisor;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, passedProps) {
    /**
     * initialServerData is server rendered async data required build html on server. 
     */
    var initialServerData = null;
    var staticContext = passedProps.staticContext;

    if (staticContext && staticContext.data) {
        initialServerData = staticContext.data;
    }

    var _state$USER = state.USER,
        profiles = _state$USER.profiles,
        selectedProfile = _state$USER.selectedProfile,
        newNotification = _state$USER.newNotification,
        notifications = _state$USER.notifications,
        articles = _state$USER.articles,
        healthTips = _state$USER.healthTips,
        device_info = _state$USER.device_info,
        offerList = _state$USER.offerList;
    var _state$SEARCH_CRITERI = state.SEARCH_CRITERIA_LABS,
        LOADED_SEARCH_CRITERIA_LAB = _state$SEARCH_CRITERI.LOADED_SEARCH_CRITERIA_LAB,
        common_tests = _state$SEARCH_CRITERI.common_tests,
        common_package = _state$SEARCH_CRITERI.common_package,
        selectedLocation = _state$SEARCH_CRITERI.selectedLocation,
        recommended_package = _state$SEARCH_CRITERI.recommended_package;

    var filterCriteria_lab = state.SEARCH_CRITERIA_LABS.filterCriteria;
    var filterCriteriaPackages = state.SEARCH_CRITERIA_LABS.filterCriteriaPackages;

    var _state$SEARCH_CRITERI2 = state.SEARCH_CRITERIA_OPD,
        LOADED_SEARCH_CRITERIA_OPD = _state$SEARCH_CRITERI2.LOADED_SEARCH_CRITERIA_OPD,
        specializations = _state$SEARCH_CRITERI2.specializations;

    var filterCriteria_opd = state.SEARCH_CRITERIA_OPD.filterCriteria;

    return {
        profiles: profiles, selectedProfile: selectedProfile, newNotification: newNotification, notifications: notifications, articles: articles, healthTips: healthTips, common_tests: common_tests || [], specializations: specializations || [], selectedLocation: selectedLocation, filterCriteria_lab: filterCriteria_lab, filterCriteria_opd: filterCriteria_opd, device_info: device_info, common_package: common_package || [], initialServerData: initialServerData, offerList: offerList, recommended_package: recommended_package || [], filterCriteriaPackages: filterCriteriaPackages
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        getUserProfile: function getUserProfile() {
            return dispatch((0, _index.getUserProfile)());
        },
        toggleDiagnosisCriteria: function toggleDiagnosisCriteria(type, test, forceAdd) {
            return dispatch((0, _index.toggleDiagnosisCriteria)(type, test, forceAdd));
        },
        mergeLABState: function mergeLABState(state, fetchNewResults) {
            return dispatch((0, _index.mergeLABState)(state, fetchNewResults));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(HealthPackageAdvisor);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvaGVhbHRoUGFja2FnZUFkdmlzb3IvSGVhbHRoUGFja2FnZUFkdmlzb3JWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2RpYWdub3Npcy9oZWFsdGhQYWNrYWdlQWR2aXNvci9oZWFsdGhQYWNrYWdlSW5mb1BvcHVwLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL2RpYWdub3Npcy9IZWFsdGhQYWNrYWdlQWR2aXNvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGF0aC1icm93c2VyaWZ5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvZXMvaW5kZXguanMiXSwibmFtZXMiOlsicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiSGVhbHRoUGFja2FnZUFkdmlzb3JWaWV3IiwicHJvcHMiLCJzdGF0ZSIsInRlc3RJbmZvSWRzIiwic2VsZWN0ZWRUZXN0SWRzIiwic2VsZWN0Q2F0SURzIiwicGFja2FnZVR5cGUiLCJnZW5kZXIiLCJhZ2UiLCJtaW5fYWdlIiwibWF4X2FnZSIsInNlYXJjaENpdGllcyIsInNob3dJbmZvIiwic2hvd0luZm9UZXh0IiwiaW5pdGlhbERhdGEiLCJwYWNrYWdlX2lkcyIsInNldFN0YXRlIiwiZmlsdGVyQ3JpdGVyaWFQYWNrYWdlcyIsInRlc3RfaWRzIiwicmVjb21tZW5kZWRfcGFja2FnZSIsInJlc3VsdCIsImxlbmd0aCIsImRhdGEiLCJuZXdEYXRhIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsImtleSIsInJQYWNrYWdlcyIsImNhdF9pZCIsImlkIiwic3ViU2V0VGVzdCIsImlzU3Vic2V0IiwidGVzdHMiLCJ2YWx1ZSIsInB1c2giLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInBhcnNlZCIsInBhcnNlIiwibG9jYXRpb24iLCJzZWFyY2giLCJHVE0iLCJnZXRVc2VySWQiLCJmcm9tIiwic2VuZEV2ZW50IiwidGVzdCIsImlzUGFja2FnZSIsImV2ZW50IiwidHlwZSIsInRvZ2dsZURpYWdub3Npc0NyaXRlcmlhIiwic2V0VGltZW91dCIsImhpc3RvcnkiLCJ0ZXN0X2lkIiwiY29uY2F0Iiwic2VsZiIsImZvdW5kIiwiZmlsdGVyIiwieCIsImNhdF9kYXRhIiwic2VsZWN0ZWRfY2F0SWRzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwicGFja2FnZU5hbWUiLCJnZW5kZXJWYWwiLCJjYXRfaWRzIiwiayIsInZhbCIsIm5ld0NhdGVnb3J5U3RhdGUiLCJmaWx0ZXJzdGF0ZSIsIm1lcmdlTEFCU3RhdGUiLCJzZWFyY2hSZXN1bHRzIiwic2VhcmNoVmFsdWUiLCJjaXR5IiwiY2hpbGQiLCJzZWxlY3RMb2NhdGlvbiIsImluZm9JZCIsInN0b3BQcm9wYWdhdGlvbiIsInNlbGVjdGVkQ2F0SURzIiwic2VsZWN0ZWRDYXRzIiwiaW5pdGlhbFJlc3AiLCJwYWRkaW5nQm90dG9tIiwiY2Fub25pY2FsVXJsIiwicmVmIiwiZ2V0Q2l0eUxpc3RMYXlvdXQiLCJiaW5kIiwiZmxleFdyYXAiLCJmaWx0ZXJzIiwic2VsZWN0UGFja2FnZSIsIm5hbWUiLCJsZWZ0IiwiaW5mb3JtYXRpb24iLCJBU1NFVFNfQkFTRV9VUkwiLCJpIiwiZGVzY3JpcHRpb24iLCJrZXlzIiwiYWxpZ25JdGVtcyIsInNlbGVjdENhdGVnb3J5IiwiaW5kZXhPZiIsImljb24iLCJjb21tb25fcGFja2FnZSIsInNlYXJjaExhYiIsIndpZHRoIiwic2hvd1BhY2thZ2UiLCJjbG9zZUluZm8iLCJSZWFjdCIsIkNvbXBvbmVudCIsIkluZm9Qb3B1cCIsImluZm9ybWF0aW9uX3RleHQiLCJwYWNrYWdlX2luZm9ybWF0aW9uIiwicGFyc2VJbnQiLCJpbmZvVGV4dElkIiwiaW5mb190aXRsZSIsInBhZGRpbmdUb3AiLCJIZWFsdGhQYWNrYWdlQWR2aXNvciIsIlNUT1JBR0UiLCJjaGVja0F1dGgiLCJnZXRVc2VyUHJvZmlsZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInBhc3NlZFByb3BzIiwiaW5pdGlhbFNlcnZlckRhdGEiLCJzdGF0aWNDb250ZXh0IiwiVVNFUiIsInByb2ZpbGVzIiwic2VsZWN0ZWRQcm9maWxlIiwibmV3Tm90aWZpY2F0aW9uIiwibm90aWZpY2F0aW9ucyIsImFydGljbGVzIiwiaGVhbHRoVGlwcyIsImRldmljZV9pbmZvIiwib2ZmZXJMaXN0IiwiU0VBUkNIX0NSSVRFUklBX0xBQlMiLCJMT0FERURfU0VBUkNIX0NSSVRFUklBX0xBQiIsImNvbW1vbl90ZXN0cyIsInNlbGVjdGVkTG9jYXRpb24iLCJmaWx0ZXJDcml0ZXJpYV9sYWIiLCJmaWx0ZXJDcml0ZXJpYSIsIlNFQVJDSF9DUklURVJJQV9PUEQiLCJMT0FERURfU0VBUkNIX0NSSVRFUklBX09QRCIsInNwZWNpYWxpemF0aW9ucyIsImZpbHRlckNyaXRlcmlhX29wZCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiZm9yY2VBZGQiLCJmZXRjaE5ld1Jlc3VsdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBLElBQU1BLGNBQWNDLG1CQUFPQSxDQUFDLDBEQUFSLENBQXBCOztJQUVNQyx3Qjs7O0FBQ0Ysc0NBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3SkFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMseUJBQWEsRUFESjtBQUVUQyw2QkFBaUIsRUFGUjtBQUdUQywwQkFBYyxFQUhMO0FBSVRDLHlCQUFhLEVBSko7QUFLVEMsb0JBQVEsRUFMQztBQU1UQyxpQkFBSyxFQU5JO0FBT1RDLHFCQUFTLEVBUEE7QUFRVEMscUJBQVMsRUFSQTtBQVNUQywwQkFBYyxFQVRMO0FBVVRDLHNCQUFVLEtBVkQ7QUFXVEMsMEJBQWMsRUFYTDtBQVlU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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixRQUFRO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3U0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkM7QUFDRjtBQUNWO0FBQ0Y7QUFDTTtBQUNGO0FBQ0o7QUFDRjtBQUNJO0FBQ0Y7QUFDYztBQUNGO0FBQ1Y7QUFDRjtBQUNjO0FBQ0Y7QUFDSjtBQUNGO0FBQ0kiLCJmaWxlIjoiMTA0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi8uLi9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IExvY2F0aW9uRWxlbWVudHMgZnJvbSAnLi4vLi4vLi4vY29udGFpbmVycy9jb21tb25zL2xvY2F0aW9uRWxlbWVudHMnXG5pbXBvcnQgSW5mb1BvcHVwIGZyb20gJy4vaGVhbHRoUGFja2FnZUluZm9Qb3B1cC5qcydcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0nO1xuaW1wb3J0IEhlbG1ldFRhZ3MgZnJvbSAnLi4vLi4vY29tbW9ucy9IZWxtZXRUYWdzJztcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cbmNsYXNzIEhlYWx0aFBhY2thZ2VBZHZpc29yVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0ZXN0SW5mb0lkczogW10sXG4gICAgICAgICAgICBzZWxlY3RlZFRlc3RJZHM6IFtdLFxuICAgICAgICAgICAgc2VsZWN0Q2F0SURzOiBbXSxcbiAgICAgICAgICAgIHBhY2thZ2VUeXBlOiAnJyxcbiAgICAgICAgICAgIGdlbmRlcjogJycsXG4gICAgICAgICAgICBhZ2U6ICcnLFxuICAgICAgICAgICAgbWluX2FnZTogJycsXG4gICAgICAgICAgICBtYXhfYWdlOiAnJyxcbiAgICAgICAgICAgIHNlYXJjaENpdGllczogW10sXG4gICAgICAgICAgICBzaG93SW5mbzogZmFsc2UsXG4gICAgICAgICAgICBzaG93SW5mb1RleHQ6ICcnLFxuICAgICAgICAgICAgaW5pdGlhbERhdGE6IFtdLFxuICAgICAgICAgICAgcGFja2FnZV9pZHM6ICcnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMucHJvcHMuZmlsdGVyQ3JpdGVyaWFQYWNrYWdlcyB9LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRUZXN0SWRzOiB0aGlzLnByb3BzLmZpbHRlckNyaXRlcmlhUGFja2FnZXMudGVzdF9pZHMgIT09ICcnID8gdGhpcy5wcm9wcy5maWx0ZXJDcml0ZXJpYVBhY2thZ2VzLnRlc3RfaWRzIDogW10gfSlcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLm1heF9hZ2UgPT0gMjApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWdlOiAxIH0pXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUubWluX2FnZSA9PSAyMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhZ2U6IDIgfSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5tYXhfYWdlID09IDIwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFnZTogMyB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5yZWNvbW1lbmRlZF9wYWNrYWdlICYmIHRoaXMucHJvcHMucmVjb21tZW5kZWRfcGFja2FnZS5yZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7fVxuICAgICAgICAgICAgbGV0IG5ld0RhdGEgPSBbXVxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5yZWNvbW1lbmRlZF9wYWNrYWdlLnJlc3VsdCkubWFwKGZ1bmN0aW9uIChba2V5LCByUGFja2FnZXNdKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7fVxuICAgICAgICAgICAgICAgIGRhdGEuY2F0X2lkID0gclBhY2thZ2VzLmlkXG4gICAgICAgICAgICAgICAgZGF0YS5zdWJTZXRUZXN0ID0gW11cbiAgICAgICAgICAgICAgICBkYXRhLmlzU3Vic2V0ID0gZmFsc2VcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhyUGFja2FnZXMudGVzdHMpLm1hcChmdW5jdGlvbiAoW2tleSwgdmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuc3ViU2V0VGVzdC5wdXNoKHZhbHVlLmlkKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgbmV3RGF0YS5wdXNoKGRhdGEpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGluaXRpYWxEYXRhOiBuZXdEYXRhIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdPcGVuSGVhbHRoUGFja2FnZUFkdmlzb3JQYWdlJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiBgb3Blbi1oZWFsdGgtcGFja2FnZS1hZHZpc29yLWZyb20tJHtwYXJzZWQuZnJvbSB8fCBcImRlZmF1bHRcIn1gLCAnZnJvbSc6IHBhcnNlZC5mcm9tXG4gICAgICAgIH1cblxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgIH1cbiAgICBzZWFyY2hMYWIodGVzdCwgaXNQYWNrYWdlID0gZmFsc2UsIGV2ZW50KSB7XG4gICAgICAgIHRlc3QudHlwZSA9ICd0ZXN0J1xuICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKCd0ZXN0JywgdGVzdCwgdHJ1ZSlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2xhYi9zZWFyY2hyZXN1bHRzJylcbiAgICAgICAgfSwgMTAwKVxuICAgIH1cbiAgICB0b2dnbGVJbmZvKHRlc3RfaWQpIHtcbiAgICAgICAgbGV0IHRlc3RfaWRzID0gW10uY29uY2F0KHRoaXMuc3RhdGUudGVzdEluZm9JZHMpXG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBsZXQgZm91bmQgPSBmYWxzZVxuICAgICAgICB0ZXN0X2lkcyA9IHRlc3RfaWRzLmZpbHRlcigoeCkgPT4ge1xuICAgICAgICAgICAgaWYgKHggPT0gdGVzdF9pZCkge1xuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgICAgdGVzdF9pZHMucHVzaCh0ZXN0X2lkKVxuICAgICAgICB9XG4gICAgICAgIHNlbGYuc2V0U3RhdGUoeyB0ZXN0SW5mb0lkczogdGVzdF9pZHMgfSlcbiAgICB9XG4gICAgLy8gc2VsZWN0Q2F0ZWdvcnkoY2F0X2lkLCBpc1N1YnNldCxjYXRfZGF0YSkge1xuICAgIC8vICAgICBsZXQgaWRzID0gdGhpcy5zdGF0ZS5zZWxlY3RDYXRJRHMuZmlsdGVyKHggPT4gcGFyc2VJbnQoeC5jYXRfaWQpID09IHBhcnNlSW50KGNhdF9pZCkpXG4gICAgLy8gICAgIGxldCBzZWxlY3RlZF9jYXRJZHMgPSBbXS5jb25jYXQodGhpcy5zdGF0ZS5zZWxlY3RDYXRJRHMpXG4gICAgLy8gICAgIGxldCBzZWxlY3RlZF90ZXN0aWRzPSBbXS5jb25jYXQodGhpcy5zdGF0ZS5zZWxlY3RlZFRlc3RJZHMpXG4gICAgLy8gICAgIGxldCBzdWJTZXRUZXN0SWRzID0gW11cbiAgICAvLyAgICAgbGV0IGluaXRpYWxEYXRhVmFsID0gW11cbiAgICAvLyAgICAgaWYgKGlkcy5sZW5ndGgpIHtcbiAgICAvLyAgICAgICAgIGluaXRpYWxEYXRhVmFsID0gdGhpcy5zdGF0ZS5pbml0aWFsRGF0YS5maWx0ZXIoeCA9PiBwYXJzZUludCh4LmNhdF9pZCkgPT0gcGFyc2VJbnQoY2F0X2lkKSlcbiAgICAvLyAgICAgICAgIGlmIChpbml0aWFsRGF0YVZhbFswXS5zdWJTZXRUZXN0Lmxlbmd0aCAhPSBpZHNbMF0uc3ViU2V0VGVzdC5sZW5ndGggKSB7XG4gICAgLy8gICAgICAgICAgICAgc2VsZWN0ZWRfY2F0SWRzID0gdGhpcy5zdGF0ZS5zZWxlY3RDYXRJRHMuZmlsdGVyKHggPT4gcGFyc2VJbnQoeC5jYXRfaWQpICE9IHBhcnNlSW50KGNhdF9pZCkpXG4gICAgLy8gICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY2F0X2RhdGEudGVzdHMpLm1hcChmdW5jdGlvbiAoW2tleSwgdmFsdWVdKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHNlbGVjdGVkX3Rlc3RpZHMucHVzaCh2YWx1ZS5pZClcbiAgICAvLyAgICAgICAgICAgICAgICAgc3ViU2V0VGVzdElkcy5wdXNoKHZhbHVlLmlkKVxuICAgIC8vICAgICAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICAgICAgc2VsZWN0ZWRfY2F0SWRzLnB1c2goeyBjYXRfaWQ6IGNhdF9pZCwgaXNTdWJzZXQ6IGlkc1swXS5pc1N1YnNldCwgc3ViU2V0VGVzdDpzdWJTZXRUZXN0SWRzIH0pXG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgIGlmIChpZHNbMF0uY2F0X2lkID09IGNhdF9pZCkge1xuICAgIC8vICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhpZHNbMF0uc3ViU2V0VGVzdCkubWFwKGZ1bmN0aW9uIChba2V5LCB2YWx1ZV0pIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkX3Rlc3RpZHMgPSBzZWxlY3RlZF90ZXN0aWRzLmZpbHRlcih4ID0+IHBhcnNlSW50KHgpICE9IHBhcnNlSW50KHZhbHVlKSlcbiAgICAvLyAgICAgICAgICAgICAgICAgfSlcbiAgICAvLyAgICAgICAgICAgICAgICAgc2VsZWN0ZWRfY2F0SWRzID0gc2VsZWN0ZWRfY2F0SWRzLmZpbHRlcih4ID0+IHBhcnNlSW50KHguY2F0X2lkKSAhPSBwYXJzZUludChjYXRfaWQpKVxuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIE9iamVjdC5lbnRyaWVzKGNhdF9kYXRhLnRlc3RzKS5tYXAoZnVuY3Rpb24gKFtrZXksIHZhbHVlXSkge1xuICAgIC8vICAgICAgICAgICAgIHNlbGVjdGVkX3Rlc3RpZHMucHVzaCh2YWx1ZS5pZClcbiAgICAvLyAgICAgICAgICAgICBzdWJTZXRUZXN0SWRzLnB1c2godmFsdWUuaWQpXG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vICAgICAgICAgc2VsZWN0ZWRfY2F0SWRzLnB1c2goeyBjYXRfaWQ6IGNhdF9pZCwgaXNTdWJzZXQ6IGlzU3Vic2V0LCBzdWJTZXRUZXN0OiBzdWJTZXRUZXN0SWRzIH0pXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgc2VsZWN0ZWRfdGVzdGlkcyA9IHNlbGVjdGVkX3Rlc3RpZHMuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0sIGluZGV4KXtcbiAgICAvLyAgICAgICAgIHJldHVybiBzZWxlY3RlZF90ZXN0aWRzLmluZGV4T2YoaXRlbSkgPj0gaW5kZXg7XG4gICAgLy8gICAgIH0pXG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RDYXRJRHM6IHNlbGVjdGVkX2NhdElkcywgc2VsZWN0ZWRUZXN0SWRzOnNlbGVjdGVkX3Rlc3RpZHMgfSlcbiAgICAvLyB9XG4gICAgLy8gc2VsZWN0VGVzdCh0ZXN0X2lkLCBwYWNrYWdlX2lkKSB7XG4gICAgLy8gICAgIGxldCB0ZXN0X2lkcyA9IFtdLmNvbmNhdCh0aGlzLnN0YXRlLnNlbGVjdGVkVGVzdElkcylcbiAgICAvLyAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgLy8gICAgIGxldCBmb3VuZCA9IGZhbHNlXG5cbiAgICAvLyAgICAgdGVzdF9pZHMgPSB0ZXN0X2lkcy5maWx0ZXIoKHgpID0+IHtcbiAgICAvLyAgICAgICAgIGlmICh4ID09IHRlc3RfaWQpIHtcbiAgICAvLyAgICAgICAgICAgICBmb3VuZCA9IHRydWVcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIHJldHVybiB0cnVlXG4gICAgLy8gICAgIH0pXG5cbiAgICAvLyAgICAgaWYgKCFmb3VuZCkge1xuICAgIC8vICAgICAgICAgdGVzdF9pZHMucHVzaCh0ZXN0X2lkKVxuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgbGV0IHBhY2thZ2VfaWRzID0gW11cbiAgICAvLyAgICAgbGV0IHNlbGVjdGVkSWRzID0gW11cbiAgICAvLyAgICAgbGV0IGZpbmFsSWRzID0gW10uY29uY2F0KHRoaXMuc3RhdGUuc2VsZWN0Q2F0SURzKVxuICAgIC8vICAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RDYXRJRHMubGVuZ3RoID4gMCkge1xuICAgIC8vICAgICAgICAgc2VsZWN0ZWRJZHMgPSB0aGlzLnN0YXRlLnNlbGVjdENhdElEcy5maWx0ZXIoeCA9PiBwYXJzZUludCh4LmNhdF9pZCkgPT0gcGFyc2VJbnQocGFja2FnZV9pZCkpXG4gICAgLy8gICAgICAgICBwYWNrYWdlX2lkcyA9IHRoaXMuc3RhdGUuc2VsZWN0Q2F0SURzLmZpbHRlcih4ID0+IHBhcnNlSW50KHguY2F0X2lkKSAhPSBwYXJzZUludChwYWNrYWdlX2lkXG4gICAgLy8gICAgICAgICAgICAgKSlcbiAgICAvLyAgICAgICAgIGlmIChzZWxlY3RlZElkcy5sZW5ndGggPiAwKSB7XG4gICAgLy8gICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoc2VsZWN0ZWRJZHMpLm1hcChmdW5jdGlvbiAoW2tleSwgdmFsdWVdKSB7XG5cbiAgICAvLyAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLmNhdF9pZCA9PSBwYWNrYWdlX2lkKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdmFsdWUuaXNTdWJzZXQgPSBmYWxzZVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdmFsdWUuc3ViU2V0VGVzdCA9IHZhbHVlLnN1YlNldFRlc3QuZmlsdGVyKCh4KSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHggPT0gdGVzdF9pZCkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWVcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9KVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnN1YlNldFRlc3QucHVzaCh0ZXN0X2lkKVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgfSlcbiAgICAvLyAgICAgICAgICAgICBmaW5hbElkcyA9IFsuLi5wYWNrYWdlX2lkcywgLi4uc2VsZWN0ZWRJZHNdXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBpZihwYWNrYWdlX2lkcy5sZW5ndGggPiAwKXtcbiAgICAvLyAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhwYWNrYWdlX2lkcykubWFwKGZ1bmN0aW9uIChba2V5LCB2YWxdKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGlmKHNlbGVjdGVkSWRzLmxlbmd0aD4wKXtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHBhY2thZ2VfaWRzKS5tYXAoZnVuY3Rpb24gKFtrZXksIHNlbGVjdGVkSWRdKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWYocGFyc2VJbnQodmFsLmNhdF9pZCkgIT0gcGFyc2VJbnQocGFja2FnZV9pZCkgJiYgc2VsZWN0ZWRJZC5jYXRfaWQgIT0gcGFja2FnZV9pZCl7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH0gXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9KVxuICAgIC8vICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmKHBhcnNlSW50KHZhbC5jYXRfaWQpICE9IHBhcnNlSW50KHBhY2thZ2VfaWQpKXtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbElkcy5wdXNoKHsgY2F0X2lkOiBwYWNrYWdlX2lkLCBpc1N1YnNldDogZmFsc2UsIHN1YlNldFRlc3Q6IFtdLmNvbmNhdCh0ZXN0X2lkKSB9KVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgfSkgICAgICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICAgICAgZmluYWxJZHMgPSBBcnJheS5mcm9tKG5ldyBTZXQoZmluYWxJZHMubWFwKEpTT04uc3RyaW5naWZ5KSkpLm1hcChKU09OLnBhcnNlKVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9ZWxzZXtcbiAgICAvLyAgICAgICAgIGZpbmFsSWRzLnB1c2goeyBjYXRfaWQ6IHBhY2thZ2VfaWQsIGlzU3Vic2V0OiBmYWxzZSwgc3ViU2V0VGVzdDogW10uY29uY2F0KHRlc3RfaWQpIH0pXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgc2VsZi5zZXRTdGF0ZSh7IHNlbGVjdGVkVGVzdElkczogdGVzdF9pZHMsIHNlbGVjdENhdElEczogZmluYWxJZHN9KVxuICAgIC8vIH1cblxuICAgIHNlbGVjdENhdGVnb3J5KGNhdF9pZCwgaXNTdWJzZXQsIGNhdF9kYXRhKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZF9jYXRJZHMgPSBbXS5jb25jYXQodGhpcy5zdGF0ZS5zZWxlY3RDYXRJRHMpXG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBsZXQgZm91bmQgPSBmYWxzZVxuXG4gICAgICAgIHNlbGVjdGVkX2NhdElkcyA9IHNlbGVjdGVkX2NhdElkcy5maWx0ZXIoKHgpID0+IHtcbiAgICAgICAgICAgIGlmICh4ID09IGNhdF9pZCkge1xuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICBzZWxlY3RlZF9jYXRJZHMucHVzaChjYXRfaWQpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0Q2F0SURzOiBzZWxlY3RlZF9jYXRJZHMgfSlcbiAgICB9XG4gICAgc2VsZWN0QWdlKGV2ZW50KSB7XG4gICAgICAgIHZhciBldmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0YWdlXCIpXG4gICAgICAgIGlmIChldmVudC5vcHRpb25zW2V2ZW50LnNlbGVjdGVkSW5kZXhdLnZhbHVlID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhZ2U6IGV2ZW50Lm9wdGlvbnNbZXZlbnQuc2VsZWN0ZWRJbmRleF0udmFsdWUsIG1pbl9hZ2U6IDAsIG1heF9hZ2U6IDIwIH0pXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQub3B0aW9uc1tldmVudC5zZWxlY3RlZEluZGV4XS52YWx1ZSA9PSAyKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWdlOiBldmVudC5vcHRpb25zW2V2ZW50LnNlbGVjdGVkSW5kZXhdLnZhbHVlLCBtaW5fYWdlOiAyMCwgbWF4X2FnZTogNTAgfSlcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5vcHRpb25zW2V2ZW50LnNlbGVjdGVkSW5kZXhdLnZhbHVlID09IDMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhZ2U6IGV2ZW50Lm9wdGlvbnNbZXZlbnQuc2VsZWN0ZWRJbmRleF0udmFsdWUsIG1pbl9hZ2U6IDAsIG1heF9hZ2U6IDUwIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2VsZWN0UGFja2FnZShwYWNrYWdlTmFtZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGFja2FnZVR5cGU6IHBhY2thZ2VOYW1lIH0pXG4gICAgfVxuICAgIHNlbGVjdEdlbmRlcihnZW5kZXJWYWwpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdlbmRlcjogZ2VuZGVyVmFsIH0pXG4gICAgfVxuICAgIHNob3dQYWNrYWdlKCkge1xuICAgICAgICBsZXQgY2F0X2lkcyA9IFtdXG4gICAgICAgIGxldCB0ZXN0X2lkcyA9IFtdXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdENhdElEcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLnN0YXRlLnNlbGVjdENhdElEcykubWFwKGZ1bmN0aW9uIChba2V5LCB2YWx1ZV0pIHtcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlLmlzU3Vic2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhdF9pZHMucHVzaCh2YWx1ZS5jYXRfaWQpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLnN1YlNldFRlc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModmFsdWUuc3ViU2V0VGVzdCkubWFwKGZ1bmN0aW9uIChbaywgdmFsXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3RfaWRzLnB1c2godmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmV3Q2F0ZWdvcnlTdGF0ZSA9IHt9XG4gICAgICAgIGxldCBmaWx0ZXJzdGF0ZSA9IHsgLi4udGhpcy5wcm9wcy5maWx0ZXJDcml0ZXJpYVBhY2thZ2VzIH1cbiAgICAgICAgLy8gbmV3Q2F0ZWdvcnlTdGF0ZVsnY2F0SWRzJ10gPSBjYXRfaWRzXG4gICAgICAgIG5ld0NhdGVnb3J5U3RhdGVbJ2NhdElkcyddID0gdGhpcy5zdGF0ZS5zZWxlY3RDYXRJRHNcbiAgICAgICAgbmV3Q2F0ZWdvcnlTdGF0ZVsnc2VsZWN0Q2F0SURzJ10gPSB0aGlzLnN0YXRlLnNlbGVjdENhdElEc1xuICAgICAgICBuZXdDYXRlZ29yeVN0YXRlWyd0ZXN0X2lkcyddID0gdGVzdF9pZHNcbiAgICAgICAgbmV3Q2F0ZWdvcnlTdGF0ZVsnZGlzdGFuY2VSYW5nZSddID0gWzAsIDE1XVxuICAgICAgICBuZXdDYXRlZ29yeVN0YXRlWydwcmljZVJhbmdlJ10gPSBbMCwgMjAwMDBdXG4gICAgICAgIG5ld0NhdGVnb3J5U3RhdGVbJ3NvcnRfb24nXSA9IG51bGxcbiAgICAgICAgbmV3Q2F0ZWdvcnlTdGF0ZVsnbWF4X2FnZSddID0gdGhpcy5zdGF0ZS5tYXhfYWdlXG4gICAgICAgIG5ld0NhdGVnb3J5U3RhdGVbJ21pbl9hZ2UnXSA9IHRoaXMuc3RhdGUubWluX2FnZVxuICAgICAgICBuZXdDYXRlZ29yeVN0YXRlWydnZW5kZXInXSA9IHRoaXMuc3RhdGUuZ2VuZGVyXG4gICAgICAgIG5ld0NhdGVnb3J5U3RhdGVbJ3BhY2thZ2VUeXBlJ10gPSB0aGlzLnN0YXRlLnBhY2thZ2VUeXBlXG4gICAgICAgIG5ld0NhdGVnb3J5U3RhdGVbJ3BhY2thZ2VfaWRzJ10gPSBbXVxuICAgICAgICB0aGlzLnByb3BzLm1lcmdlTEFCU3RhdGUoeyBmaWx0ZXJDcml0ZXJpYVBhY2thZ2VzOiBuZXdDYXRlZ29yeVN0YXRlIH0pXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9zZWFyY2hwYWNrYWdlcycpXG4gICAgICAgIH0sIDEwMClcblxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnc2hvd1BhY2thZ2VzQnV0dG9uQ2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdzaG93LXBhY2thZ2VzLWJ1dHRvbi1jbGljaycsICdTZWxlY3RlZENhdGVnb3JpZXMnOiB0aGlzLnN0YXRlLnNlbGVjdENhdElEcyB8fCB7fVxuICAgICAgICB9XG5cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICB9XG4gICAgZ2V0Q2l0eUxpc3RMYXlvdXQoc2VhcmNoUmVzdWx0cyA9IFtdKSB7XG4gICAgICAgIGlmIChzZWFyY2hSZXN1bHRzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaENpdGllczogc2VhcmNoUmVzdWx0cyB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaENpdGllczogW10sIHNlYXJjaFZhbHVlOiAnJyB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIHNlbGVjdExvY2F0aW9uKGNpdHkpIHtcbiAgICAgICAgdGhpcy5jaGlsZC5zZWxlY3RMb2NhdGlvbigoY2l0eSksICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hDaXRpZXM6IFtdIH0pXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHNob3dJbmZvKGluZm9JZCwgZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dJbmZvVGV4dDogaW5mb0lkLCBzaG93SW5mbzogdHJ1ZSB9KVxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIH1cbiAgICBjbG9zZUluZm8oKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93SW5mbzogZmFsc2UgfSlcbiAgICB9XG4gICAgZ29CYWNrKCkge1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpXG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIGxldCBzZWxlY3RlZENhdElEcyA9IFtdXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdENhdElEcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLnN0YXRlLnNlbGVjdENhdElEcykubWFwKGZ1bmN0aW9uIChba2V5LCBzZWxlY3RlZENhdHNdKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoc2VsZi5zdGF0ZS5pbml0aWFsRGF0YSkubWFwKGZ1bmN0aW9uIChba2V5LCBpbml0aWFsUmVzcF0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkQ2F0cy5jYXRfaWQgPT0gaW5pdGlhbFJlc3AuY2F0X2lkICYmIHNlbGVjdGVkQ2F0cy5zdWJTZXRUZXN0Lmxlbmd0aCA9PSBpbml0aWFsUmVzcC5zdWJTZXRUZXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXRJRHMucHVzaChzZWxlY3RlZENhdHMuY2F0X2lkKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXAgZHAtY29udGFpbmVyLWRpdlwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDU0IH19ID5cbiAgICAgICAgICAgICAgICA8SGVsbWV0VGFncyB0YWdzRGF0YT17e1xuICAgICAgICAgICAgICAgICAgICBjYW5vbmljYWxVcmw6ICcvZnVsbC1ib2R5LWNoZWNrdXAtaGVhbHRoLXBhY2thZ2VzJ1xuICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctNyBwdC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbWItMTAgbXJuZy10b3AtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWR2aXNvckNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZ3LTUwMFwiPkhlYWx0aCBQYWNrYWdlIEFkdmlzb3I8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtdG9wLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJjaC1udy1pbnB1dHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYXRpb25FbGVtZW50cyB7Li4udGhpcy5wcm9wc30gb25SZWY9e3JlZiA9PiAodGhpcy5jaGlsZCA9IHJlZil9IGdldENpdHlMaXN0TGF5b3V0PXt0aGlzLmdldENpdHlMaXN0TGF5b3V0LmJpbmQodGhpcyl9IHJlc3VsdFR5cGU9J3NlYXJjaCcgZnJvbUNyaXRlcmlhPXt0cnVlfSBjb21tb25TZWFyY2hQYWdlPXt0cnVlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWFyY2hDaXRpZXMubGVuZ3RoID09IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJocGEtZmxleCBtcmItMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhwYS1mbGV4IGhwYS1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZ3LTUwMFwiPkFnZSA6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInNlbGVjdGFnZVwiIHZhbHVlPXt0aGlzLnN0YXRlLmFnZX0gb25DaGFuZ2U9e3RoaXMuc2VsZWN0QWdlLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBpZD17MH0gdmFsdWU9ezB9PlNlbGVjdDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBpZD17MX0gdmFsdWU9ezF9PiAwLTIwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGlkPXsyfSB2YWx1ZT17Mn0+IDIxLTUwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGlkPXszfSB2YWx1ZT17M30+ID41MDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhwYS1mbGV4IGhwYS1nZW5kZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZ3LTUwMFwiPkdlbmRlciA6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHRsLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lci1yYWRpbyBtYi0wIGhwYS1jb250YWluZXItcmFkaW9cIiBzdHlsZT17eyBtYXJnaW5SaWdodDogMTYgfX0gb25DaGFuZ2U9e3RoaXMuc2VsZWN0R2VuZGVyLmJpbmQodGhpcywgMSl9Pk1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInJhZGlvXCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5nZW5kZXIgPT0gMSA/IHRydWUgOiBmYWxzZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFyayBocGEtcmFkaW8gaHBhLXJhZGlvLWdlbmRlclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR0bC1yYWRpb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW8gbWItMCBocGEtY29udGFpbmVyLXJhZGlvXCIgb25DaGFuZ2U9e3RoaXMuc2VsZWN0R2VuZGVyLmJpbmQodGhpcywgMil9PkZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInJhZGlvXCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5nZW5kZXIgPT0gMiA/IHRydWUgOiBmYWxzZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFyayBocGEtcmFkaW8gaHBhLXJhZGlvLWdlbmRlclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhwYS1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJocGEtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZnctNTAwXCI+UGFja2FnZSBUeXBlIDo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiIHN0eWxlPXt7IGZsZXhXcmFwOiAnd3JhcCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5yZWNvbW1lbmRlZF9wYWNrYWdlLmZpbHRlcnMgJiYgdGhpcy5wcm9wcy5yZWNvbW1lbmRlZF9wYWNrYWdlLmZpbHRlcnMubGVuZ3RoID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5yZWNvbW1lbmRlZF9wYWNrYWdlLmZpbHRlcnMpLm1hcChmdW5jdGlvbiAoW2tleSwgZmlsdGVyXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJkdGwtcmFkaW8gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBkdGwtbWFyZ2luLWxnIHBrZ1R5cGVCb3JkZXJcIiBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJhZGlvIG1iLTAgaHBhLWNvbnRhaW5lci1yYWRpb1wiIG9uQ2hhbmdlPXtzZWxmLnNlbGVjdFBhY2thZ2UuYmluZChzZWxmLCBmaWx0ZXIuaWQpfT57ZmlsdGVyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9e2ByYWRpbzJfJHtmaWx0ZXIuaWR9YH0gY2hlY2tlZD17c2VsZi5zdGF0ZS5wYWNrYWdlVHlwZSA9PSBmaWx0ZXIuaWQgPyB0cnVlIDogZmFsc2V9IHN0eWxlPXt7IGxlZnQ6IDAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb2MtY2hlY2ttYXJrIGhwYS1yYWRpbyBocGEtcmFkaW8tZ2VuZGVyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIuaW5mb3JtYXRpb24gIT0gJycgPyA8aW1nIGNsYXNzTmFtZT1cImhwYS1pbmZvLWljb25cIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY29ucy9pbmZvLnN2Z1wifSBvbkNsaWNrPXtzZWxmLnNob3dJbmZvLmJpbmQoc2VsZiwgZmlsdGVyLmlkKX0gLz4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlYXJjaENpdGllcy5sZW5ndGggPiAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbW9uLXNlYXJjaC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3JjaC1oZWFkaW5nXCI+TG9jYXRpb24gU2VhcmNoPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1vbi1saXN0aW5nLWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VhcmNoQ2l0aWVzLm1hcCgocmVzdWx0LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aX0gb25DbGljaz17dGhpcy5zZWxlY3RMb2NhdGlvbi5iaW5kKHRoaXMsIHJlc3VsdCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiID57cmVzdWx0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnByb3BzLnJlY29tbWVuZGVkX3BhY2thZ2UpLmxlbmd0aCA+IDAgJiYgdGhpcy5zdGF0ZS5zZWFyY2hDaXRpZXMubGVuZ3RoID09IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJocGEtaGVhZGluZyBtcnQtMTAgbXJiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+U2VsZWN0IENhdGVnb3JpZXM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLnJlY29tbWVuZGVkX3BhY2thZ2UucmVzdWx0KS5tYXAoZnVuY3Rpb24gKFtrZXksIHJQYWNrYWdlc10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbWItMTAgbXJ0LTEwXCIga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC10b3AtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2stYnggcGtnQ2hlY2stYm94XCIgb25DaGFuZ2U9e3NlbGYuc2VsZWN0Q2F0ZWdvcnkuYmluZChzZWxmLCByUGFja2FnZXMuaWQsIGZhbHNlLCByUGFja2FnZXMpfT57clBhY2thZ2VzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPXtgcmFkaW9fJHtyUGFja2FnZXMuaWR9YH0gY2hlY2tlZD17c2VsZi5zdGF0ZS5zZWxlY3RDYXRJRHMuZmlsdGVyKHggPT4geC5jYXRfaWQgPT0gclBhY2thZ2VzLmlkICYmICF4LmlzU3Vic2V0KS5sZW5ndGggPyB0cnVlIDogZmFsc2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmsgaHBhLXJhZGlvXCIgc3R5bGU9e3sgdG9wOiA0IH19ID48L3NwYW4+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIm9uXCIgY2hlY2tlZD17c2VsZi5zdGF0ZS5zZWxlY3RDYXRJRHMuaW5kZXhPZihyUGFja2FnZXMuaWQpID4gLTEgPyB0cnVlIDogZmFsc2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFyayBocGEtY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByUGFja2FnZXMuaWNvbiAmJiByUGFja2FnZXMuaWNvbi5sZW5ndGggPiAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnQ2F0SW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e3JQYWNrYWdlcy5pY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxsYWJlbCBjbGFzc05hbWU9XCJjay1ieFwiIHN0eWxlPXt7IGZvbnRTaXplOiAxMiB9fSBvbkNoYW5nZT17c2VsZi5zZWxlY3RDYXRlZ29yeS5iaW5kKHNlbGYsIHJQYWNrYWdlcy5pZCwgdHJ1ZSl9PlNlbGVjdCBUZXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNrLWJ4XCIgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBwYWRkaW5nTGVmdDogMjQgfX0gb25DaGFuZ2U9e3NlbGYuc2VsZWN0Q2F0ZWdvcnkuYmluZChzZWxmLCByUGFja2FnZXMuaWQsIHRydWUpfT5TZWxlY3QgVGVzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT17YHJhZGlvXyR7clBhY2thZ2VzLmlkfWB9IGNoZWNrZWQ9e3NlbGYuc3RhdGUuc2VsZWN0Q2F0SURzLmZpbHRlcih4ID0+IHguY2F0X2lkID09IHJQYWNrYWdlcy5pZCAmJiB4LmlzU3Vic2V0KS5sZW5ndGggPyB0cnVlIDogZmFsc2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmsgaHBhLXJhZGlvXCIgc3R5bGU9e3sgdG9wOiAwIH19Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwib25cIiBjaGVja2VkPXtzZWxmLnN0YXRlLnNlbGVjdENhdElEcy5maWx0ZXIoeCA9PiB4LmNhdF9pZCA9PSByUGFja2FnZXMuaWQgJiYgeC5pc1N1YnNldCkubGVuZ3RoID8gdHJ1ZSA6IGZhbHNlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmsgaHBhLWNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IHN0eWxlPXt7ZGlzcGxheTogc2VsZi5zdGF0ZS5zZWxlY3RDYXRJRHMuZmlsdGVyKHggPT4geC5jYXRfaWQgPT0gclBhY2thZ2VzLmlkICYmICF4LmlzU3Vic2V0KS5sZW5ndGggPydibG9jayc6J25vbmUnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QgaHBhLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoclBhY2thZ2VzLnRlc3RzKS5tYXAoZnVuY3Rpb24gKFtrLCB0ZXN0XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtrfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgLy90byBiZSBjb21tZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zdGF0ZS5zZWxlY3RDYXRJRHMuZmlsdGVyKHggPT4geC5jYXRfaWQgPT0gclBhY2thZ2VzLmlkICYmIHguaXNTdWJzZXQpLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjay1ieCBmdy00MDBcIiBzdHlsZT17eyBmb250U2l6ZTogMTQsIGZsZXg6IDEsIHBhZGRpbmdMZWZ0OiAyNCB9fSBvbkNoYW5nZT17c2VsZi5zZWxlY3RUZXN0LmJpbmQoc2VsZiwgdGVzdC5pZCwgclBhY2thZ2VzLmlkKX0+e3Rlc3QubmFtZX0ge3Rlc3QubnVtX29mX3BhcmFtZXRlcnMgIT0gMCA/ICcoJyArIHRlc3QubnVtX29mX3BhcmFtZXRlcnMgKyAnKScgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIm9uXCIgY2hlY2tlZD17c2VsZi5zdGF0ZS5zZWxlY3RlZFRlc3RJZHMuaW5kZXhPZih0ZXN0LmlkKSA+IC0xID8gdHJ1ZSA6IGZhbHNlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrIGhwYS1jaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPHAgY2xhc3NOYW1lPVwiZnctNDAwXCIgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IDI0LCBsaW5lSGVpZ2h0OiAnMjBweCcgfX0+e3Rlc3QubmFtZX0ge3Rlc3QubnVtX29mX3BhcmFtZXRlcnMgIT0gMCA/ICcoJyArIHRlc3QubnVtX29mX3BhcmFtZXRlcnMgKyAnKScgOiAnJ308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2stYnggZnctNDAwXCIgc3R5bGU9e3sgZm9udFNpemU6IDE0LCBmbGV4OiAxLCBwYWRkaW5nTGVmdDogMjQgfX0gb25DaGFuZ2U9e3NlbGYuc2VsZWN0VGVzdC5iaW5kKHNlbGYsIHRlc3QuaWQsIHJQYWNrYWdlcy5pZCl9Pnt0ZXN0Lm5hbWV9IHt0ZXN0Lm51bV9vZl9wYXJhbWV0ZXJzICE9IDAgPyAnKCcgKyB0ZXN0Lm51bV9vZl9wYXJhbWV0ZXJzICsgJyknIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwib25cIiBjaGVja2VkPXtzZWxmLnN0YXRlLnNlbGVjdGVkVGVzdElkcy5pbmRleE9mKHRlc3QuaWQpID4gLTEgPyB0cnVlIDogZmFsc2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrIGhwYS1jaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3QucGFyYW1ldGVycy5sZW5ndGggPiAwID8gPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Zyd9IG9uQ2xpY2s9e3NlbGYudG9nZ2xlSW5mby5iaW5kKHNlbGYsIHRlc3QuaWQpfSAvPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnN0YXRlLnRlc3RJbmZvSWRzLmluZGV4T2YodGVzdC5pZCkgPiAtMSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtcnQtMTBcIiBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBwYWRkaW5nTGVmdDogMzAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyh0ZXN0LnBhcmFtZXRlcnMpLm1hcChmdW5jdGlvbiAoW3BhcmFtX2ssIHBhcmFtdGVyXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxwIGtleT17cGFyYW1fa30gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA0IH19ID57cGFyYW10ZXJ9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb21tb25fcGFja2FnZS5sZW5ndGggPiAwICYmIHRoaXMuc3RhdGUuc2VhcmNoQ2l0aWVzLmxlbmd0aCA9PSAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJocGEtaGVhZGluZyBtcnQtMTAgbXJiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPlRvcCBTZWxsaW5nIEhlYWx0aCBQYWNrYWdlczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtdG9wLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QgaHBhLWxpc3QtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLmNvbW1vbl9wYWNrYWdlKS5tYXAoZnVuY3Rpb24gKFtrZXksIHZhbHVlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17a2V5fSBpZD17dmFsdWUuaWR9IG9uQ2xpY2s9e3NlbGYuc2VhcmNoTGFiLmJpbmQoc2VsZiwgdmFsdWUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt2YWx1ZS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcmVkaXJlY3QtYXJyb3cuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiAxNSB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicC0zIHYtYnRuIHYtYnRuLXByaW1hcnkgYnRuLWxnIGZpeGVkIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIHRleHQtbGcgc3RpY2t5LWJ0blwiIG9uQ2xpY2s9e3RoaXMuc2hvd1BhY2thZ2UuYmluZCh0aGlzKX0+U2hvdyBQYWNrYWdlczwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0luZm8gP1xuICAgICAgICAgICAgICAgICAgICAgICAgPEluZm9Qb3B1cCBjbG9zZUluZm89e3RoaXMuY2xvc2VJbmZvLmJpbmQodGhpcyl9IGluZm9UZXh0SWQ9e3RoaXMuc3RhdGUuc2hvd0luZm9UZXh0fSBwYWNrYWdlX2luZm9ybWF0aW9uPXt0aGlzLnByb3BzLnJlY29tbWVuZGVkX3BhY2thZ2UuZmlsdGVycy5sZW5ndGggPiAwID8gdGhpcy5wcm9wcy5yZWNvbW1lbmRlZF9wYWNrYWdlLmZpbHRlcnMgOiAnJ30gLz4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFsdGhQYWNrYWdlQWR2aXNvclZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBJbmZvUG9wdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICBsZXQgaW5mb3JtYXRpb25fdGV4dCA9IFtdXG4gICAgICAgIGluZm9ybWF0aW9uX3RleHQgPSB0aGlzLnByb3BzLnBhY2thZ2VfaW5mb3JtYXRpb24uZmlsdGVyKHggPT4gcGFyc2VJbnQoeC5pZCkgPT0gcGFyc2VJbnQodGhpcy5wcm9wcy5pbmZvVGV4dElkKSlcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLW92ZXJsYXlcIiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5wcm9wcy5jbG9zZUluZm8oKX19PjwvZGl2PlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgY2FuY2VsLWFwcG9pbnRtZW50LWRpdiBjYW5jZWwtcG9wdXBcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWhlYWRlciB0ZXh0LWNlbnRlciBhY3Rpb24tc2NyZWVuLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGNhbmNlbC1hcHBvaW50bWVudC1oZWFkXCI+e2luZm9ybWF0aW9uX3RleHRbMF0uaW5mb190aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2ljb25zL2Nsb3NlLnBuZ1wifSBjbGFzc05hbWU9XCJjbG9zZS1tb2RhbFwiIG9uQ2xpY2s9eygpID0+IHt0aGlzLnByb3BzLmNsb3NlSW5mbygpfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLXBvbGljeS10ZXh0XCIgc3R5bGU9e3twYWRkaW5nVG9wOiAwfX0+XG4gICAgICAgICAgICAgICAgICAgICB7aW5mb3JtYXRpb25fdGV4dFswXS5pbmZvcm1hdGlvbn1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIH1cbmV4cG9ydCBkZWZhdWx0IEluZm9Qb3B1cFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7Z2V0VXNlclByb2ZpbGUsdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEsbWVyZ2VMQUJTdGF0ZX0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcbmltcG9ydCBIZWFsdGhQYWNrYWdlQWR2aXNvclZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kaWFnbm9zaXMvaGVhbHRoUGFja2FnZUFkdmlzb3IvSGVhbHRoUGFja2FnZUFkdmlzb3JWaWV3LmpzJ1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuXG5jbGFzcyBIZWFsdGhQYWNrYWdlQWR2aXNvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKFNUT1JBR0UuY2hlY2tBdXRoKCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0VXNlclByb2ZpbGUoKVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxIZWFsdGhQYWNrYWdlQWR2aXNvclZpZXcgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHBhc3NlZFByb3BzKSA9PiB7XG4gICAgLyoqXG4gICAgICogaW5pdGlhbFNlcnZlckRhdGEgaXMgc2VydmVyIHJlbmRlcmVkIGFzeW5jIGRhdGEgcmVxdWlyZWQgYnVpbGQgaHRtbCBvbiBzZXJ2ZXIuIFxuICAgICAqL1xuICAgIGxldCBpbml0aWFsU2VydmVyRGF0YSA9IG51bGxcbiAgICBsZXQgeyBzdGF0aWNDb250ZXh0IH0gPSBwYXNzZWRQcm9wc1xuICAgIGlmIChzdGF0aWNDb250ZXh0ICYmIHN0YXRpY0NvbnRleHQuZGF0YSkge1xuICAgICAgICBpbml0aWFsU2VydmVyRGF0YSA9IHN0YXRpY0NvbnRleHQuZGF0YVxuICAgIH1cblxuICAgIGxldCB7XG4gICAgICAgIHByb2ZpbGVzLCBzZWxlY3RlZFByb2ZpbGUsIG5ld05vdGlmaWNhdGlvbiwgbm90aWZpY2F0aW9ucywgYXJ0aWNsZXMsIGhlYWx0aFRpcHMsIGRldmljZV9pbmZvLCBvZmZlckxpc3RcbiAgICB9ID0gc3RhdGUuVVNFUlxuXG4gICAgY29uc3Qge1xuICAgICAgICBMT0FERURfU0VBUkNIX0NSSVRFUklBX0xBQixcbiAgICAgICAgY29tbW9uX3Rlc3RzLFxuICAgICAgICBjb21tb25fcGFja2FnZSxcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgcmVjb21tZW5kZWRfcGFja2FnZVxuICAgIH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfTEFCU1xuICAgIGxldCBmaWx0ZXJDcml0ZXJpYV9sYWIgPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfTEFCUy5maWx0ZXJDcml0ZXJpYVxuICAgIGxldCBmaWx0ZXJDcml0ZXJpYVBhY2thZ2VzID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX0xBQlMuZmlsdGVyQ3JpdGVyaWFQYWNrYWdlc1xuXG4gICAgY29uc3Qge1xuICAgICAgICBMT0FERURfU0VBUkNIX0NSSVRFUklBX09QRCxcbiAgICAgICAgc3BlY2lhbGl6YXRpb25zXG4gICAgfSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9PUERcbiAgICBsZXQgZmlsdGVyQ3JpdGVyaWFfb3BkID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX09QRC5maWx0ZXJDcml0ZXJpYVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvZmlsZXMsIHNlbGVjdGVkUHJvZmlsZSwgbmV3Tm90aWZpY2F0aW9uLCBub3RpZmljYXRpb25zLCBhcnRpY2xlcywgaGVhbHRoVGlwcywgY29tbW9uX3Rlc3RzOiBjb21tb25fdGVzdHMgfHwgW10sIHNwZWNpYWxpemF0aW9uczogc3BlY2lhbGl6YXRpb25zIHx8IFtdLCBzZWxlY3RlZExvY2F0aW9uLCBmaWx0ZXJDcml0ZXJpYV9sYWIsIGZpbHRlckNyaXRlcmlhX29wZCwgZGV2aWNlX2luZm8sIGNvbW1vbl9wYWNrYWdlOiBjb21tb25fcGFja2FnZSB8fCBbXSwgaW5pdGlhbFNlcnZlckRhdGEsIG9mZmVyTGlzdCwgcmVjb21tZW5kZWRfcGFja2FnZTpyZWNvbW1lbmRlZF9wYWNrYWdlIHx8IFtdLCBmaWx0ZXJDcml0ZXJpYVBhY2thZ2VzXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRVc2VyUHJvZmlsZTogKCkgPT4gZGlzcGF0Y2goZ2V0VXNlclByb2ZpbGUoKSksXG4gICAgICAgIHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhOiAodHlwZSwgdGVzdCwgZm9yY2VBZGQpID0+IGRpc3BhdGNoKHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKHR5cGUsIHRlc3QsIGZvcmNlQWRkKSksXG4gICAgICAgIG1lcmdlTEFCU3RhdGU6IChzdGF0ZSwgZmV0Y2hOZXdSZXN1bHRzKSA9PiBkaXNwYXRjaChtZXJnZUxBQlN0YXRlKHN0YXRlLCBmZXRjaE5ld1Jlc3VsdHMpKSxcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEhlYWx0aFBhY2thZ2VBZHZpc29yKTsiLCIvLyAuZGlybmFtZSwgLmJhc2VuYW1lLCBhbmQgLmV4dG5hbWUgbWV0aG9kcyBhcmUgZXh0cmFjdGVkIGZyb20gTm9kZS5qcyB2OC4xMS4xLFxuLy8gYmFja3BvcnRlZCBhbmQgdHJhbnNwbGl0ZWQgd2l0aCBCYWJlbCwgd2l0aCBiYWNrd2FyZHMtY29tcGF0IGZpeGVzXG5cbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4vLyByZXNvbHZlcyAuIGFuZCAuLiBlbGVtZW50cyBpbiBhIHBhdGggYXJyYXkgd2l0aCBkaXJlY3RvcnkgbmFtZXMgdGhlcmVcbi8vIG11c3QgYmUgbm8gc2xhc2hlcywgZW1wdHkgZWxlbWVudHMsIG9yIGRldmljZSBuYW1lcyAoYzpcXCkgaW4gdGhlIGFycmF5XG4vLyAoc28gYWxzbyBubyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzbGFzaGVzIC0gaXQgZG9lcyBub3QgZGlzdGluZ3Vpc2hcbi8vIHJlbGF0aXZlIGFuZCBhYnNvbHV0ZSBwYXRocylcbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5KHBhcnRzLCBhbGxvd0Fib3ZlUm9vdCkge1xuICAvLyBpZiB0aGUgcGF0aCB0cmllcyB0byBnbyBhYm92ZSB0aGUgcm9vdCwgYHVwYCBlbmRzIHVwID4gMFxuICB2YXIgdXAgPSAwO1xuICBmb3IgKHZhciBpID0gcGFydHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgbGFzdCA9IHBhcnRzW2ldO1xuICAgIGlmIChsYXN0ID09PSAnLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICB9IGVsc2UgaWYgKGxhc3QgPT09ICcuLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXAtLTtcbiAgICB9XG4gIH1cblxuICAvLyBpZiB0aGUgcGF0aCBpcyBhbGxvd2VkIHRvIGdvIGFib3ZlIHRoZSByb290LCByZXN0b3JlIGxlYWRpbmcgLi5zXG4gIGlmIChhbGxvd0Fib3ZlUm9vdCkge1xuICAgIGZvciAoOyB1cC0tOyB1cCkge1xuICAgICAgcGFydHMudW5zaGlmdCgnLi4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydHM7XG59XG5cbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcmVzb2x2ZWRQYXRoID0gJycsXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XG5cbiAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpID49IC0xICYmICFyZXNvbHZlZEFic29sdXRlOyBpLS0pIHtcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcblxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xuICAgIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmVzb2x2ZWRQYXRoID0gcGF0aCArICcvJyArIHJlc29sdmVkUGF0aDtcbiAgICByZXNvbHZlZEFic29sdXRlID0gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbiAgfVxuXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcbiAgLy8gaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKCkgZmFpbHMpXG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHJlc29sdmVkUGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihyZXNvbHZlZFBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIHJldHVybiAoKHJlc29sdmVkQWJzb2x1dGUgPyAnLycgOiAnJykgKyByZXNvbHZlZFBhdGgpIHx8ICcuJztcbn07XG5cbi8vIHBhdGgubm9ybWFsaXplKHBhdGgpXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgdmFyIGlzQWJzb2x1dGUgPSBleHBvcnRzLmlzQWJzb2x1dGUocGF0aCksXG4gICAgICB0cmFpbGluZ1NsYXNoID0gc3Vic3RyKHBhdGgsIC0xKSA9PT0gJy8nO1xuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICBwYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhaXNBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIGlmICghcGF0aCAmJiAhaXNBYnNvbHV0ZSkge1xuICAgIHBhdGggPSAnLic7XG4gIH1cbiAgaWYgKHBhdGggJiYgdHJhaWxpbmdTbGFzaCkge1xuICAgIHBhdGggKz0gJy8nO1xuICB9XG5cbiAgcmV0dXJuIChpc0Fic29sdXRlID8gJy8nIDogJycpICsgcGF0aDtcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmpvaW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHBhdGhzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgcmV0dXJuIGV4cG9ydHMubm9ybWFsaXplKGZpbHRlcihwYXRocywgZnVuY3Rpb24ocCwgaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIHAgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH1cbiAgICByZXR1cm4gcDtcbiAgfSkuam9pbignLycpKTtcbn07XG5cblxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xuICBmcm9tID0gZXhwb3J0cy5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcbiAgdG8gPSBleHBvcnRzLnJlc29sdmUodG8pLnN1YnN0cigxKTtcblxuICBmdW5jdGlvbiB0cmltKGFycikge1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgZm9yICg7IHN0YXJ0IDwgYXJyLmxlbmd0aDsgc3RhcnQrKykge1xuICAgICAgaWYgKGFycltzdGFydF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICB2YXIgZW5kID0gYXJyLmxlbmd0aCAtIDE7XG4gICAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xuICAgICAgaWYgKGFycltlbmRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0ID4gZW5kKSByZXR1cm4gW107XG4gICAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kIC0gc3RhcnQgKyAxKTtcbiAgfVxuXG4gIHZhciBmcm9tUGFydHMgPSB0cmltKGZyb20uc3BsaXQoJy8nKSk7XG4gIHZhciB0b1BhcnRzID0gdHJpbSh0by5zcGxpdCgnLycpKTtcblxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xuICB2YXIgc2FtZVBhcnRzTGVuZ3RoID0gbGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xuICBmb3IgKHZhciBpID0gc2FtZVBhcnRzTGVuZ3RoOyBpIDwgZnJvbVBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcbiAgfVxuXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XG5cbiAgcmV0dXJuIG91dHB1dFBhcnRzLmpvaW4oJy8nKTtcbn07XG5cbmV4cG9ydHMuc2VwID0gJy8nO1xuZXhwb3J0cy5kZWxpbWl0ZXIgPSAnOic7XG5cbmV4cG9ydHMuZGlybmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcuJztcbiAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoMCk7XG4gIHZhciBoYXNSb290ID0gY29kZSA9PT0gNDcgLyovKi87XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMTsgLS1pKSB7XG4gICAgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBlbmQgPSBpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3JcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gaGFzUm9vdCA/ICcvJyA6ICcuJztcbiAgaWYgKGhhc1Jvb3QgJiYgZW5kID09PSAxKSB7XG4gICAgLy8gcmV0dXJuICcvLyc7XG4gICAgLy8gQmFja3dhcmRzLWNvbXBhdCBmaXg6XG4gICAgcmV0dXJuICcvJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZSgwLCBlbmQpO1xufTtcblxuZnVuY3Rpb24gYmFzZW5hbWUocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuXG4gIHZhciBzdGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIHZhciBpO1xuXG4gIGZvciAoaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICBpZiAocGF0aC5jaGFyQ29kZUF0KGkpID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIHBhdGggY29tcG9uZW50XG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gJyc7XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0LCBlbmQpO1xufVxuXG4vLyBVc2VzIGEgbWl4ZWQgYXBwcm9hY2ggZm9yIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5LCBhcyBleHQgYmVoYXZpb3IgY2hhbmdlZFxuLy8gaW4gbmV3IE5vZGUuanMgdmVyc2lvbnMsIHNvIG9ubHkgYmFzZW5hbWUoKSBhYm92ZSBpcyBiYWNrcG9ydGVkIGhlcmVcbmV4cG9ydHMuYmFzZW5hbWUgPSBmdW5jdGlvbiAocGF0aCwgZXh0KSB7XG4gIHZhciBmID0gYmFzZW5hbWUocGF0aCk7XG4gIGlmIChleHQgJiYgZi5zdWJzdHIoLTEgKiBleHQubGVuZ3RoKSA9PT0gZXh0KSB7XG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIGY7XG59O1xuXG5leHBvcnRzLmV4dG5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICB2YXIgc3RhcnREb3QgPSAtMTtcbiAgdmFyIHN0YXJ0UGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIC8vIFRyYWNrIHRoZSBzdGF0ZSBvZiBjaGFyYWN0ZXJzIChpZiBhbnkpIHdlIHNlZSBiZWZvcmUgb3VyIGZpcnN0IGRvdCBhbmRcbiAgLy8gYWZ0ZXIgYW55IHBhdGggc2VwYXJhdG9yIHdlIGZpbmRcbiAgdmFyIHByZURvdFN0YXRlID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnRQYXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIGV4dGVuc2lvblxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gICAgaWYgKGNvZGUgPT09IDQ2IC8qLiovKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgb3VyIGZpcnN0IGRvdCwgbWFyayBpdCBhcyB0aGUgc3RhcnQgb2Ygb3VyIGV4dGVuc2lvblxuICAgICAgICBpZiAoc3RhcnREb3QgPT09IC0xKVxuICAgICAgICAgIHN0YXJ0RG90ID0gaTtcbiAgICAgICAgZWxzZSBpZiAocHJlRG90U3RhdGUgIT09IDEpXG4gICAgICAgICAgcHJlRG90U3RhdGUgPSAxO1xuICAgIH0gZWxzZSBpZiAoc3RhcnREb3QgIT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGFuZCBub24tcGF0aCBzZXBhcmF0b3IgYmVmb3JlIG91ciBkb3QsIHNvIHdlIHNob3VsZFxuICAgICAgLy8gaGF2ZSBhIGdvb2QgY2hhbmNlIGF0IGhhdmluZyBhIG5vbi1lbXB0eSBleHRlbnNpb25cbiAgICAgIHByZURvdFN0YXRlID0gLTE7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXJ0RG90ID09PSAtMSB8fCBlbmQgPT09IC0xIHx8XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGNoYXJhY3RlciBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIGRvdFxuICAgICAgcHJlRG90U3RhdGUgPT09IDAgfHxcbiAgICAgIC8vIFRoZSAocmlnaHQtbW9zdCkgdHJpbW1lZCBwYXRoIGNvbXBvbmVudCBpcyBleGFjdGx5ICcuLidcbiAgICAgIHByZURvdFN0YXRlID09PSAxICYmIHN0YXJ0RG90ID09PSBlbmQgLSAxICYmIHN0YXJ0RG90ID09PSBzdGFydFBhcnQgKyAxKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0RG90LCBlbmQpO1xufTtcblxuZnVuY3Rpb24gZmlsdGVyICh4cywgZikge1xuICAgIGlmICh4cy5maWx0ZXIpIHJldHVybiB4cy5maWx0ZXIoZik7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGYoeHNbaV0sIGksIHhzKSkgcmVzLnB1c2goeHNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vLyBTdHJpbmcucHJvdG90eXBlLnN1YnN0ciAtIG5lZ2F0aXZlIGluZGV4IGRvbid0IHdvcmsgaW4gSUU4XG52YXIgc3Vic3RyID0gJ2FiJy5zdWJzdHIoLTEpID09PSAnYidcbiAgICA/IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHsgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbikgfVxuICAgIDogZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikge1xuICAgICAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IHN0ci5sZW5ndGggKyBzdGFydDtcbiAgICAgICAgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbik7XG4gICAgfVxuO1xuIiwiaW1wb3J0IF9NZW1vcnlSb3V0ZXIgZnJvbSBcIi4vTWVtb3J5Um91dGVyXCI7XG5leHBvcnQgeyBfTWVtb3J5Um91dGVyIGFzIE1lbW9yeVJvdXRlciB9O1xuaW1wb3J0IF9Qcm9tcHQgZnJvbSBcIi4vUHJvbXB0XCI7XG5leHBvcnQgeyBfUHJvbXB0IGFzIFByb21wdCB9O1xuaW1wb3J0IF9SZWRpcmVjdCBmcm9tIFwiLi9SZWRpcmVjdFwiO1xuZXhwb3J0IHsgX1JlZGlyZWN0IGFzIFJlZGlyZWN0IH07XG5pbXBvcnQgX1JvdXRlIGZyb20gXCIuL1JvdXRlXCI7XG5leHBvcnQgeyBfUm91dGUgYXMgUm91dGUgfTtcbmltcG9ydCBfUm91dGVyIGZyb20gXCIuL1JvdXRlclwiO1xuZXhwb3J0IHsgX1JvdXRlciBhcyBSb3V0ZXIgfTtcbmltcG9ydCBfU3RhdGljUm91dGVyIGZyb20gXCIuL1N0YXRpY1JvdXRlclwiO1xuZXhwb3J0IHsgX1N0YXRpY1JvdXRlciBhcyBTdGF0aWNSb3V0ZXIgfTtcbmltcG9ydCBfU3dpdGNoIGZyb20gXCIuL1N3aXRjaFwiO1xuZXhwb3J0IHsgX1N3aXRjaCBhcyBTd2l0Y2ggfTtcbmltcG9ydCBfZ2VuZXJhdGVQYXRoIGZyb20gXCIuL2dlbmVyYXRlUGF0aFwiO1xuZXhwb3J0IHsgX2dlbmVyYXRlUGF0aCBhcyBnZW5lcmF0ZVBhdGggfTtcbmltcG9ydCBfbWF0Y2hQYXRoIGZyb20gXCIuL21hdGNoUGF0aFwiO1xuZXhwb3J0IHsgX21hdGNoUGF0aCBhcyBtYXRjaFBhdGggfTtcbmltcG9ydCBfd2l0aFJvdXRlciBmcm9tIFwiLi93aXRoUm91dGVyXCI7XG5leHBvcnQgeyBfd2l0aFJvdXRlciBhcyB3aXRoUm91dGVyIH07Il0sInNvdXJjZVJvb3QiOiIifQ==