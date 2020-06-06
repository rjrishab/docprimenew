exports.ids = [10];
exports.modules = {

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

var _FixedMobileFooter = __webpack_require__(/*! ../Home/FixedMobileFooter */ "./dev/js/components/commons/Home/FixedMobileFooter.js");

var _FixedMobileFooter2 = _interopRequireDefault(_FixedMobileFooter);

var _packageCompareStrip = __webpack_require__(/*! ../../diagnosis/searchPackages/packageCompare/packageCompareStrip.js */ "./dev/js/components/diagnosis/searchPackages/packageCompare/packageCompareStrip.js");

var _packageCompareStrip2 = _interopRequireDefault(_packageCompareStrip);

var _scrollHelper = __webpack_require__(/*! ../../../helpers/scrollHelper.js */ "./dev/js/helpers/scrollHelper.js");

var _scrollHelper2 = _interopRequireDefault(_scrollHelper);

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

class CriteriaSearchView extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            searchResults: [],
            loading: false,
            searchCities: [],
            swipeDirection: ''
        };
    }

    componentDidMount() {

        this.getSearchResults = debouncer(this.getSearchResults.bind(this), 500);
        let input = document.getElementById('topCriteriaSearch');
        // if coming back or refresh focus on search bar
        if (this.props.history.action === 'POP' && !this.props.location.search.includes('search')) {
            // input.focus()
        }
        if (document.getElementById('topCriteriaSearch')) {
            document.getElementById('topCriteriaSearch').addEventListener('focusin', () => {
                this.setState({ searchCities: '' });
            });
        }
    }

    getScrollView(scrollView) {
        if (scrollView && scrollView.swipe) {
            //alert(scrollView.swipe)
            this.setState({ swipeDirection: scrollView.swipe });
        }
    }

    inputHandler(e) {
        this.setState({ searchValue: e.target.value });
        this.getSearchResults();
    }

    getSearchResults() {
        this.setState({ loading: true });

        if (this.props.type == 'opd') {
            this.props.getOPDCriteriaResults(this.state.searchValue, searchResults => {
                if (searchResults) {
                    searchResults.conditions = searchResults.conditions.map(x => {
                        return _extends({}, x, { type: 'condition' });
                    });
                    searchResults.specializations = searchResults.specializations.map(x => {
                        return _extends({}, x, { type: 'speciality' });
                    });
                    searchResults.procedures = searchResults.procedures.map(x => {
                        return _extends({}, x, { type: 'procedures' });
                    }) || [];

                    let results = [];
                    if (this.props.selected == 'opd') {
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
                    this.setState({ searchResults: [...results], loading: false });
                }
            });
        } else {
            this.props.getDiagnosisCriteriaResults(this.state.searchValue, searchResults => {
                if (searchResults) {
                    let tests = searchResults.tests.map(x => {
                        return _extends({}, x, { type: 'test' });
                    });
                    let results = [{
                        title: 'Tests',
                        values: tests
                    }];
                    this.setState({ searchResults: results, loading: false });
                }
            });
        }
    }

    addCriteria(criteria, docType) {

        if (this.props.type == 'opd') {

            if (docType == 'Conditions') {
                let data = {
                    'Category': 'ConsumerApp', 'Action': 'CommonConditionSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'common-condition-searched', 'selected': criteria.name || '', 'selectedId': criteria.id || ''
                };
                _gtm2.default.sendEvent({ data: data });
            } else if (docType == 'Specializations') {
                let data = {
                    'Category': 'ConsumerApp', 'Action': 'CommonSpecializationsSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'common-specializations-searched', 'selected': criteria.name || '', 'selectedId': criteria.id || ''
                };
                _gtm2.default.sendEvent({ data: data });
            } else if (docType == 'Procedures') {
                let data = {
                    'Category': 'ConsumerApp', 'Action': 'CommonProceduresSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'common-procedures-searched', 'selected': criteria.name || '', 'selectedId': criteria.id || ''
                };
                _gtm2.default.sendEvent({ data: data });
            }
            this.props.toggleOPDCriteria(criteria.type, criteria);
            this.setState({ searchValue: "" });
        } else {
            if (docType == 'Tests') {
                let data = {
                    'Category': 'ConsumerApp', 'Action': 'TestSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'test-searched', 'selected': criteria.name || '', 'selectedId': criteria.id || ''
                };
                _gtm2.default.sendEvent({ data: data });
            }
            this.props.toggleDiagnosisCriteria(criteria.type, criteria);
            this.setState({ searchValue: "" });
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

    render() {
        let location = "Delhi";
        if (this.props.selectedLocation) {
            location = this.props.selectedLocation.formatted_address.slice(0, 25);
        }

        let rating = '';
        if (this.props.ratings) {
            rating = Math.ceil(this.props.ratings * 2) / 2;
        }

        let ratingArray = [];
        for (let i = 0; i < Math.floor(rating); i++) {
            ratingArray.push(_react2.default.createElement('img', { src: "/assets" + '/img/customer-icons/rating-star-filled.svg', className: 'rating-star' }));
        }

        if (rating != Math.floor(rating)) {
            ratingArray.push(_react2.default.createElement('img', { src: "/assets" + '/img/customer-icons/halfstar.svg', className: 'rating-star' }));
        }

        let emptyStars = Math.floor(5 - rating);
        if (emptyStars) {
            for (let i = 0; i < emptyStars; i++) {
                ratingArray.push(_react2.default.createElement('img', { src: "/assets" + '/img/customer-icons/rating-star-empty.svg', className: 'rating-star' }));
            }
        }

        let showPackageStrip = this.props.compare_packages && this.props.compare_packages.length > 0;
        let showSearch = true;
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
                { ref: 'scrollTarget', className: `${!showSearch ? 'container container-top-margin' : 'container parent-section book-appointment-section hospital-view-section'} ${this.props.hideHeaderOnMobile ? " mp0" : ""}  ${this.props.isPackage ? "pkgComapre" : ""} ` },
                typeof navigator == 'object' && navigator && navigator.userAgent && navigator.userAgent.includes('iPhone') ? '' : _react2.default.createElement(_scrollHelper2.default, { getScrollView: this.getScrollView.bind(this), target: this.refs && this.refs['scrollTarget'] ? this.refs['scrollTarget'] : '' }),
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
                                    _react2.default.createElement(_locationElements2.default, _extends({}, this.props, { onRef: ref => this.child = ref, getCityListLayout: this.getCityListLayout.bind(this), resultType: 'search', fromCriteria: true, commonSearchPage: true })),
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
                                            _react2.default.createElement('input', { className: 'new-srch-doc-lab', autoComplete: 'off', placeholder: 'Search Doctors, Labs and Tests', onChange: this.inputHandler.bind(this), value: this.state.searchValue, placeholder: this.props.title, onClick: () => {
                                                    if (this.props.goBack) {
                                                        this.props.history.go(-1);
                                                    }
                                                } }),
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
                                            this.state.searchCities.map((result, i) => {
                                                return _react2.default.createElement(
                                                    'li',
                                                    { key: i },
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: '', onClick: this.selectLocation.bind(this, result) },
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
                                this.state.searchResults.map((cat, j) => {
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
                                                        cat.values.map((curr, i) => {
                                                            return _react2.default.createElement(
                                                                'li',
                                                                { key: i },
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    { className: '', onClick: this.addCriteria.bind(this, curr, cat.title) },
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
                                                            { className: '', onClick: () => {

                                                                    let data = {
                                                                        'Category': 'ConsumerApp', 'Action': 'DoctorNameSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-name-searched', 'DoctorNameSearched': this.state.searchValue || ''
                                                                    };
                                                                    _gtm2.default.sendEvent({ data: data });

                                                                    this.props.searchProceed(this.state.searchValue, "");
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
                                                            { className: '', onClick: () => {

                                                                    let data = {
                                                                        'Category': 'ConsumerApp', 'Action': 'HospitalNameSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'hospital-name-searched', 'HospitalNameSearched': this.state.searchValue || ''
                                                                    };
                                                                    _gtm2.default.sendEvent({ data: data });

                                                                    this.props.searchProceed("", this.state.searchValue);
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
                                                            { className: '', onClick: () => {

                                                                    let data = {
                                                                        'Category': 'ConsumerApp', 'Action': 'LabNameSearched', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lab-name-searched', 'SearchString': this.state.searchValue || ''
                                                                    };
                                                                    _gtm2.default.sendEvent({ data: data });

                                                                    this.props.searchProceed(this.state.searchValue);
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
                            `${this.props.ratings_title} - Ratings & Reviews`
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
                { className: `shw-srch-ftr d-md-none ${this.state.swipeDirection && this.state.swipeDirection != 'up' || !showSearch ? 'smth-ftr-hide' : ''}` },
                this.props.searchPackages && this.props.compare_packages && this.props.compare_packages.length == 0 ? _react2.default.createElement(_FixedMobileFooter2.default, _extends({ searchPackagePage: true }, this.props)) : this.props.compare_packages && this.props.compare_packages.length == 0 && (this.props.searchDoctors || this.props.searchLabs) ? _react2.default.createElement(_FixedMobileFooter2.default, this.props) : ''
            )
        );
    }
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _initialsPicture = __webpack_require__(/*! ../../../commons/initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

var _gtm = __webpack_require__(/*! ../../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _utils = __webpack_require__(/*! ../../../../helpers/utils.js */ "./dev/js/helpers/utils.js");

var _storage = __webpack_require__(/*! ../../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _constants = __webpack_require__(/*! constants */ "constants");

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PackageCompareStrip extends _react2.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  comparePackages() {
    if (this.props.compare_packages.length > 5) {
      _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Max 5 packages can be compared" });
    } else {
      let selectedPkgCompareIds = [];
      if (this.props.compare_packages) {
        this.props.compare_packages.map((packages, i) => {
          selectedPkgCompareIds.push(packages.id + '-' + packages.lab_id);
        });
      }
      this.props.history.push('/package/compare?package_ids=' + selectedPkgCompareIds);
    }
  }

  clearPackage() {
    this.props.resetPkgCompare();
  }

  render() {
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ScrollView extends _react2.default.Component {

	constructor(props) {
		super(props);

		this.addTouchMoveEvent = event => {
			let touch = event.touches[0] || event.changedTouches[0];
			this.setState({
				touchmoveX: touch.screenX, touchmoveY: touch.screenY
			}, () => {
				this.handleGesture();
			});
		};

		this.state = {
			setTarget: false,
			touchstartX: 0,
			touchstartY: 0,
			touchendX: 0,
			touchendY: 0,
			touchmoveX: 0,
			touchmoveY: 0
		};
	}

	componentDidMount() {
		if (this.props.target && !this.state.setTarget) {
			let target = this.props.target;
			target.addEventListener('touchstart', e => this.addTouchStartEvent(e), false);
			target.addEventListener('touchmove', e => this.addTouchMoveEvent(e), false);
			target.addEventListener('touchmove', e => this.addTouchEndEvent(e), false);
			this.setState({ setTarget: true });
		}
	}

	componentWillReceiveProps(nextProps) {
		if (!this.state.setTarget && nextProps.target) {
			let target = nextProps.target;
			target.addEventListener('touchstart', e => this.addTouchStartEvent(e), false);
			target.addEventListener('touchmove', e => this.addTouchMoveEvent(e), false);
			target.addEventListener('touchmove', e => this.addTouchEndEvent(e), false);
			this.setState({ setTarget: true });
		}
	}

	addTouchStartEvent(event) {
		let touch = event.touches[0] || event.changedTouches[0];
		this.setState({ touchstartX: touch.screenX, touchstartY: touch.screenY });
	}

	addTouchEndEvent(event) {
		let touch = event.touches[0] || event.changedTouches[0];
		this.setState({
			touchendX: touch.screenX, touchendY: touch.screenY
		}, () => {
			this.handleGesture();
		});
	}

	componentWillUnmount() {
		if (this.state.setTarget) {
			let target = this.props.target;
			target.removeEventListener('touchstart', this.addTouchStartEvent);
			target.removeEventListener('touchmove', this.addTouchMoveEvent);
			target.removeEventListener('touchmove', this.addTouchEndEvent);
		}
	}

	handleGesture() {
		let swipe = '';
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

		this.props.getScrollView(_extends({}, this.state, { swipe }));
	}

	render() {
		return '';
	}
}
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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buildOpenBanner(lab_timing, lab_timing_data = [], next_lab_timing, next_lab_timing_data = null) {
    let is_open_now = false;
    let open_next_today = false;

    let time_now = new Date().getHours() + 0.5;
    for (let ltd of lab_timing_data) {
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

    if (open_next_today) {
        return _react2.default.createElement(
            'p',
            { style: { fontSize: 12 } },
            'Opens next at ',
            open_next_today,
            ', today'
        );
    }

    const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let next_open = false;
    let next_open_today = "";
    if (next_lab_timing_data) {
        let today = new Date();
        let weekDayNumber = today.getDay();
        weekDayNumber = weekDayNumber == 0 ? 6 : weekDayNumber - 1;
        for (let i in next_lab_timing_data) {
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
    let hours = time.split('.')[0];
    let minutes = time.split('.')[1];
    hours = parseInt(hours);
    if (minutes == '5') {
        minutes = ':30';
    } else {
        minutes = "";
    }
    let day_time = "AM";
    if (hours >= 12) {
        day_time = "PM";
    }
    hours = hours % 12;
    return `${hours}${minutes} ${day_time}`;
}

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2NyaXRlcmlhU2VhcmNoL0NyaXRlcmlhU2VhcmNoVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2NyaXRlcmlhU2VhcmNoL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2RpYWdub3Npcy9zZWFyY2hQYWNrYWdlcy9wYWNrYWdlQ29tcGFyZS9wYWNrYWdlQ29tcGFyZVN0cmlwLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9oZWxwZXJzL3Njcm9sbEhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvaGVscGVycy91dGlscy5qcyJdLCJuYW1lcyI6WyJkZWJvdW5jZXIiLCJmbiIsImRlbGF5IiwidGltZXIiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2FsbCIsIkNyaXRlcmlhU2VhcmNoVmlldyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwic2VhcmNoVmFsdWUiLCJzZWFyY2hSZXN1bHRzIiwibG9hZGluZyIsInNlYXJjaENpdGllcyIsInN3aXBlRGlyZWN0aW9uIiwiY29tcG9uZW50RGlkTW91bnQiLCJnZXRTZWFyY2hSZXN1bHRzIiwiYmluZCIsImlucHV0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImhpc3RvcnkiLCJhY3Rpb24iLCJsb2NhdGlvbiIsInNlYXJjaCIsImluY2x1ZGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFN0YXRlIiwiZ2V0U2Nyb2xsVmlldyIsInNjcm9sbFZpZXciLCJzd2lwZSIsImlucHV0SGFuZGxlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInR5cGUiLCJnZXRPUERDcml0ZXJpYVJlc3VsdHMiLCJjb25kaXRpb25zIiwibWFwIiwieCIsInNwZWNpYWxpemF0aW9ucyIsInByb2NlZHVyZXMiLCJyZXN1bHRzIiwic2VsZWN0ZWQiLCJ0aXRsZSIsInZhbHVlcyIsImdldERpYWdub3Npc0NyaXRlcmlhUmVzdWx0cyIsInRlc3RzIiwiYWRkQ3JpdGVyaWEiLCJjcml0ZXJpYSIsImRvY1R5cGUiLCJkYXRhIiwiR1RNIiwiZ2V0VXNlcklkIiwibmFtZSIsImlkIiwic2VuZEV2ZW50IiwidG9nZ2xlT1BEQ3JpdGVyaWEiLCJ0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSIsImdldENpdHlMaXN0TGF5b3V0IiwibGVuZ3RoIiwic2VsZWN0TG9jYXRpb24iLCJjaXR5IiwiY2hpbGQiLCJyZW5kZXIiLCJzZWxlY3RlZExvY2F0aW9uIiwiZm9ybWF0dGVkX2FkZHJlc3MiLCJzbGljZSIsInJhdGluZyIsInJhdGluZ3MiLCJNYXRoIiwiY2VpbCIsInJhdGluZ0FycmF5IiwiaSIsImZsb29yIiwicHVzaCIsIkFTU0VUU19CQVNFX1VSTCIsImVtcHR5U3RhcnMiLCJzaG93UGFja2FnZVN0cmlwIiwiY29tcGFyZV9wYWNrYWdlcyIsInNob3dTZWFyY2giLCJoaWRlSGVhZGVyT25Nb2JpbGUiLCJpc1BhY2thZ2UiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJyZWZzIiwiZ29CYWNrIiwicmVmIiwiY2hhbmdlU2VsZWN0aW9uIiwiZ28iLCJ3aWR0aCIsInJlc3VsdCIsImRlc2NyaXB0aW9uIiwiY2F0IiwiaiIsImN1cnIiLCJzZWFyY2hQcm9jZWVkIiwiY29sb3IiLCJmb250V2VpZ2h0IiwiY2hlY2tGb3JMb2FkIiwiY2hpbGRyZW4iLCJjbGluaWNfY2FyZCIsImxhYl9jYXJkIiwibmV3Q2hhdEJ0biIsInNlYXJjaFBhY2thZ2VzIiwic2VhcmNoRG9jdG9ycyIsInNlYXJjaExhYnMiLCJib3R0b21fY29udGVudCIsInBhcnNlSW50IiwicGFnZSIsIl9faHRtbCIsInJhdGluZ3NfdGl0bGUiLCJyZXZpZXdzIiwiUGFja2FnZUNvbXBhcmVTdHJpcCIsImNoZWNrZWQiLCJjb21wYXJlUGFja2FnZXMiLCJTbmFja0JhciIsInNob3ciLCJwb3MiLCJ0ZXh0Iiwic2VsZWN0ZWRQa2dDb21wYXJlSWRzIiwicGFja2FnZXMiLCJsYWJfaWQiLCJjbGVhclBhY2thZ2UiLCJyZXNldFBrZ0NvbXBhcmUiLCJTY3JvbGxWaWV3IiwiYWRkVG91Y2hNb3ZlRXZlbnQiLCJldmVudCIsInRvdWNoIiwidG91Y2hlcyIsImNoYW5nZWRUb3VjaGVzIiwidG91Y2htb3ZlWCIsInNjcmVlblgiLCJ0b3VjaG1vdmVZIiwic2NyZWVuWSIsImhhbmRsZUdlc3R1cmUiLCJzZXRUYXJnZXQiLCJ0b3VjaHN0YXJ0WCIsInRvdWNoc3RhcnRZIiwidG91Y2hlbmRYIiwidG91Y2hlbmRZIiwiYWRkVG91Y2hTdGFydEV2ZW50IiwiYWRkVG91Y2hFbmRFdmVudCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJidWlsZE9wZW5CYW5uZXIiLCJsYWJfdGltaW5nIiwibGFiX3RpbWluZ19kYXRhIiwibmV4dF9sYWJfdGltaW5nIiwibmV4dF9sYWJfdGltaW5nX2RhdGEiLCJpc19vcGVuX25vdyIsIm9wZW5fbmV4dF90b2RheSIsInRpbWVfbm93IiwiRGF0ZSIsImdldEhvdXJzIiwibHRkIiwiZW5kIiwic3RhcnQiLCJmb250U2l6ZSIsIl9kZWNpbWFsVG9UaW1lIiwiV0VFS19EQVlTIiwibmV4dF9vcGVuIiwibmV4dF9vcGVuX3RvZGF5IiwidG9kYXkiLCJ3ZWVrRGF5TnVtYmVyIiwiZ2V0RGF5IiwidGltZSIsInRvU3RyaW5nIiwiaG91cnMiLCJzcGxpdCIsIm1pbnV0ZXMiLCJkYXlfdGltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSxNQUFNQSxZQUFZLENBQUNDLEVBQUQsRUFBS0MsS0FBTCxLQUFlO0FB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RixVQUFVekYsQ0FBVixDQUFsQjtBQUNIO0FBQ0Q7QUFDSDtBQUNKO0FBQ0QsUUFBSTBGLGFBQWFDLGVBQWpCLEVBQWtDO0FBQzlCLGVBQU87QUFBQTtBQUFBLGNBQUcsT0FBTyxFQUFFSixVQUFVLEVBQVosRUFBVjtBQUFBO0FBQTRDRyxxQkFBNUM7QUFBQTtBQUF5REM7QUFBekQsU0FBUDtBQUNIOztBQUVELFdBQU8sUUFBUDtBQUVIOztBQUdELFNBQVNILGNBQVQsQ0FBd0JPLElBQXhCLEVBQThCO0FBQzFCQSxXQUFPQSxLQUFLQyxRQUFMLEVBQVA7QUFDQSxRQUFJQyxRQUFRRixLQUFLRyxLQUFMLENBQVcsR0FBWCxFQUFnQixDQUFoQixDQUFaO0FBQ0EsUUFBSUMsVUFBVUosS0FBS0csS0FBTCxDQUFXLEdBQVgsRUFBZ0IsQ0FBaEIsQ0FBZDtBQUNBRCxZQUFROUQsU0FBUzhELEtBQVQsQ0FBUjtBQUNBLFFBQUlFLFdBQVcsR0FBZixFQUFvQjtBQUNoQkEsa0JBQVUsS0FBVjtBQUNILEtBRkQsTUFFTztBQUNIQSxrQkFBVSxFQUFWO0FBQ0g7QUFDRCxRQUFJQyxXQUFXLElBQWY7QUFDQSxRQUFJSCxTQUFTLEVBQWIsRUFBaUI7QUFDYkcsbUJBQVcsSUFBWDtBQUNIO0FBQ0RILFlBQVFBLFFBQVEsRUFBaEI7QUFDQSxXQUFRLEdBQUVBLEtBQU0sR0FBRUUsT0FBUSxJQUFHQyxRQUFTLEVBQXRDO0FBQ0gsQyIsImZpbGUiOiIxMC5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9jb21tb25zL0xvYWRlcidcblxuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vTGVmdEJhcidcbmltcG9ydCBSaWdodEJhciBmcm9tICcuLi9SaWdodEJhcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcbmltcG9ydCBMb2NhdGlvbkVsZW1lbnRzIGZyb20gJy4uLy4uLy4uL2NvbnRhaW5lcnMvY29tbW9ucy9sb2NhdGlvbkVsZW1lbnRzJ1xuaW1wb3J0IEZpeGVkTW9iaWxlRm9vdGVyIGZyb20gJy4uL0hvbWUvRml4ZWRNb2JpbGVGb290ZXInO1xuaW1wb3J0IFBhY2thZ2VDb21wYXJlU3RyaXAgZnJvbSAnLi4vLi4vZGlhZ25vc2lzL3NlYXJjaFBhY2thZ2VzL3BhY2thZ2VDb21wYXJlL3BhY2thZ2VDb21wYXJlU3RyaXAuanMnXG5pbXBvcnQgU2Nyb2xsV2lkZ2V0IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvc2Nyb2xsSGVscGVyLmpzJ1xuXG5cbmNvbnN0IGRlYm91bmNlciA9IChmbiwgZGVsYXkpID0+IHtcbiAgICBsZXQgdGltZXIgPSBudWxsXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZm4uY2FsbCh0aGlzKVxuICAgICAgICB9LCBkZWxheSlcbiAgICB9XG59XG5cblxuY2xhc3MgQ3JpdGVyaWFTZWFyY2hWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlYXJjaFZhbHVlOiAnJyxcbiAgICAgICAgICAgIHNlYXJjaFJlc3VsdHM6IFtdLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBzZWFyY2hDaXRpZXM6IFtdLFxuICAgICAgICAgICAgc3dpcGVEaXJlY3Rpb246ICcnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICAgICAgICB0aGlzLmdldFNlYXJjaFJlc3VsdHMgPSBkZWJvdW5jZXIodGhpcy5nZXRTZWFyY2hSZXN1bHRzLmJpbmQodGhpcyksIDUwMClcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvcENyaXRlcmlhU2VhcmNoJylcbiAgICAgICAgLy8gaWYgY29taW5nIGJhY2sgb3IgcmVmcmVzaCBmb2N1cyBvbiBzZWFyY2ggYmFyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmhpc3RvcnkuYWN0aW9uID09PSAnUE9QJyAmJiAhdGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoJ3NlYXJjaCcpKSB7XG4gICAgICAgICAgICAvLyBpbnB1dC5mb2N1cygpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3BDcml0ZXJpYVNlYXJjaCcpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9wQ3JpdGVyaWFTZWFyY2gnKS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgKCkgPT4geyB0aGlzLnNldFN0YXRlKHsgc2VhcmNoQ2l0aWVzOiAnJyB9KSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U2Nyb2xsVmlldyhzY3JvbGxWaWV3KXtcbiAgICAgICAgaWYoc2Nyb2xsVmlldyAmJiBzY3JvbGxWaWV3LnN3aXBlKSB7XG4gICAgICAgICAgICAvL2FsZXJ0KHNjcm9sbFZpZXcuc3dpcGUpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzd2lwZURpcmVjdGlvbjpzY3JvbGxWaWV3LnN3aXBlfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlucHV0SGFuZGxlcihlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hWYWx1ZTogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgdGhpcy5nZXRTZWFyY2hSZXN1bHRzKClcbiAgICB9XG5cbiAgICBnZXRTZWFyY2hSZXN1bHRzKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnR5cGUgPT0gJ29wZCcpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0T1BEQ3JpdGVyaWFSZXN1bHRzKHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUsIChzZWFyY2hSZXN1bHRzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaFJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0cy5jb25kaXRpb25zID0gc2VhcmNoUmVzdWx0cy5jb25kaXRpb25zLm1hcCh4ID0+IHsgcmV0dXJuIHsgLi4ueCwgdHlwZTogJ2NvbmRpdGlvbicgfSB9KVxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHRzLnNwZWNpYWxpemF0aW9ucyA9IHNlYXJjaFJlc3VsdHMuc3BlY2lhbGl6YXRpb25zLm1hcCh4ID0+IHsgcmV0dXJuIHsgLi4ueCwgdHlwZTogJ3NwZWNpYWxpdHknIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0cy5wcm9jZWR1cmVzID0gc2VhcmNoUmVzdWx0cy5wcm9jZWR1cmVzLm1hcCh4ID0+IHsgcmV0dXJuIHsgLi4ueCwgdHlwZTogJ3Byb2NlZHVyZXMnIH0gfSkgfHwgW11cblxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0cyA9IFtdXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkID09ICdvcGQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdDb25kaXRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiBzZWFyY2hSZXN1bHRzLmNvbmRpdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTcGVjaWFsaXphdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IHNlYXJjaFJlc3VsdHMuc3BlY2lhbGl6YXRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUHJvY2VkdXJlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlczogc2VhcmNoUmVzdWx0cy5wcm9jZWR1cmVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hSZXN1bHRzOiBbLi4ucmVzdWx0c10sIGxvYWRpbmc6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0RGlhZ25vc2lzQ3JpdGVyaWFSZXN1bHRzKHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUsIChzZWFyY2hSZXN1bHRzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaFJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRlc3RzID0gc2VhcmNoUmVzdWx0cy50ZXN0cy5tYXAoeCA9PiB7IHJldHVybiB7IC4uLngsIHR5cGU6ICd0ZXN0JyB9IH0pXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHRzID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnVGVzdHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlczogdGVzdHNcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoUmVzdWx0czogcmVzdWx0cywgbG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkQ3JpdGVyaWEoY3JpdGVyaWEsIGRvY1R5cGUpIHtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy50eXBlID09ICdvcGQnKSB7XG5cbiAgICAgICAgICAgIGlmIChkb2NUeXBlID09ICdDb25kaXRpb25zJykge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0NvbW1vbkNvbmRpdGlvblNlYXJjaGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY29tbW9uLWNvbmRpdGlvbi1zZWFyY2hlZCcsICdzZWxlY3RlZCc6IGNyaXRlcmlhLm5hbWUgfHwgJycsICdzZWxlY3RlZElkJzogY3JpdGVyaWEuaWQgfHwgJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZG9jVHlwZSA9PSAnU3BlY2lhbGl6YXRpb25zJykge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0NvbW1vblNwZWNpYWxpemF0aW9uc1NlYXJjaGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY29tbW9uLXNwZWNpYWxpemF0aW9ucy1zZWFyY2hlZCcsICdzZWxlY3RlZCc6IGNyaXRlcmlhLm5hbWUgfHwgJycsICdzZWxlY3RlZElkJzogY3JpdGVyaWEuaWQgfHwgJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRvY1R5cGUgPT0gJ1Byb2NlZHVyZXMnKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQ29tbW9uUHJvY2VkdXJlc1NlYXJjaGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY29tbW9uLXByb2NlZHVyZXMtc2VhcmNoZWQnLCAnc2VsZWN0ZWQnOiBjcml0ZXJpYS5uYW1lIHx8ICcnLCAnc2VsZWN0ZWRJZCc6IGNyaXRlcmlhLmlkIHx8ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZU9QRENyaXRlcmlhKGNyaXRlcmlhLnR5cGUsIGNyaXRlcmlhKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFZhbHVlOiBcIlwiIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZG9jVHlwZSA9PSAnVGVzdHMnKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnVGVzdFNlYXJjaGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAndGVzdC1zZWFyY2hlZCcsICdzZWxlY3RlZCc6IGNyaXRlcmlhLm5hbWUgfHwgJycsICdzZWxlY3RlZElkJzogY3JpdGVyaWEuaWQgfHwgJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEoY3JpdGVyaWEudHlwZSwgY3JpdGVyaWEpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoVmFsdWU6IFwiXCIgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldENpdHlMaXN0TGF5b3V0KHNlYXJjaFJlc3VsdHMgPSBbXSkge1xuICAgICAgICBpZiAoc2VhcmNoUmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hDaXRpZXM6IHNlYXJjaFJlc3VsdHMgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hDaXRpZXM6IFtdLCBzZWFyY2hWYWx1ZTogJycgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdExvY2F0aW9uKGNpdHkpIHtcbiAgICAgICAgdGhpcy5jaGlsZC5zZWxlY3RMb2NhdGlvbigoY2l0eSksICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hDaXRpZXM6IFtdIH0pXG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGxvY2F0aW9uID0gXCJEZWxoaVwiXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24pIHtcbiAgICAgICAgICAgIGxvY2F0aW9uID0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLmZvcm1hdHRlZF9hZGRyZXNzLnNsaWNlKDAsIDI1KVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJhdGluZyA9ICcnXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnJhdGluZ3MpIHtcbiAgICAgICAgICAgIHJhdGluZyA9IChNYXRoLmNlaWwodGhpcy5wcm9wcy5yYXRpbmdzICogMikpIC8gMjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByYXRpbmdBcnJheSA9IFtdXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5mbG9vcihyYXRpbmcpOyBpKyspIHtcbiAgICAgICAgICAgIHJhdGluZ0FycmF5LnB1c2goPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL3JhdGluZy1zdGFyLWZpbGxlZC5zdmcnfSBjbGFzc05hbWU9XCJyYXRpbmctc3RhclwiIC8+KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJhdGluZyAhPSBNYXRoLmZsb29yKHJhdGluZykpIHtcbiAgICAgICAgICAgIHJhdGluZ0FycmF5LnB1c2goPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL2hhbGZzdGFyLnN2Zyd9IGNsYXNzTmFtZT1cInJhdGluZy1zdGFyXCIgLz4pXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZW1wdHlTdGFycyA9IE1hdGguZmxvb3IoNSAtIHJhdGluZyk7XG4gICAgICAgIGlmIChlbXB0eVN0YXJzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVtcHR5U3RhcnM7IGkrKykge1xuICAgICAgICAgICAgICAgIHJhdGluZ0FycmF5LnB1c2goPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL3JhdGluZy1zdGFyLWVtcHR5LnN2Zyd9IGNsYXNzTmFtZT1cInJhdGluZy1zdGFyXCIgLz4pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2hvd1BhY2thZ2VTdHJpcCA9IHRoaXMucHJvcHMuY29tcGFyZV9wYWNrYWdlcyAmJiB0aGlzLnByb3BzLmNvbXBhcmVfcGFja2FnZXMubGVuZ3RoID4gMFxuICAgICAgICBsZXQgc2hvd1NlYXJjaCA9IHRydWVcbiAgICAgICAgLy8gaWYodGhpcy5wcm9wcy5sb2NhdGlvbiAmJiAgdGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2ggJiYgKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdmcm9tVmlwJykgfHwgdGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoJ2Zyb21Hb2xkVmlwJykpKXtcbiAgICAgICAgLy8gICAgIHNob3dTZWFyY2ggPSBmYWxzZVxuICAgICAgICAvLyB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpZGVIZWFkZXJPbk1vYmlsZSA/IDxkaXYgY2xhc3NOYW1lPVwiaGlkZS03NjJcIj48UHJvZmlsZUhlYWRlciBzaG93U2VhcmNoPXtzaG93U2VhcmNofSBzaG93UGFja2FnZVN0cmlwPXtzaG93UGFja2FnZVN0cmlwIHx8IHRoaXMucHJvcHMuaXNQYWNrYWdlfSBuZXdfZml4ZWRfaGVhZGVyPXsxfSBpc1NlYXJjaExpc3Q9e3RydWV9Lz48L2Rpdj4gOiA8UHJvZmlsZUhlYWRlciBzaG93U2VhcmNoPXtzaG93U2VhcmNofSBzaG93UGFja2FnZVN0cmlwPXtzaG93UGFja2FnZVN0cmlwIHx8IHRoaXMucHJvcHMuaXNQYWNrYWdlfSBuZXdfZml4ZWRfaGVhZGVyPXsxfSBpc1NlYXJjaExpc3Q9e3RydWV9Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gcmVmPVwic2Nyb2xsVGFyZ2V0XCIgY2xhc3NOYW1lPXtgJHshc2hvd1NlYXJjaD8nY29udGFpbmVyIGNvbnRhaW5lci10b3AtbWFyZ2luJzonY29udGFpbmVyIHBhcmVudC1zZWN0aW9uIGJvb2stYXBwb2ludG1lbnQtc2VjdGlvbiBob3NwaXRhbC12aWV3LXNlY3Rpb24nfSAke3RoaXMucHJvcHMuaGlkZUhlYWRlck9uTW9iaWxlID8gXCIgbXAwXCIgOiBcIlwifSAgJHt0aGlzLnByb3BzLmlzUGFja2FnZSA/XCJwa2dDb21hcHJlXCI6XCJcIn0gYH0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBuYXZpZ2F0b3IgPT0gJ29iamVjdCcgJiYgbmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcygnaVBob25lJyk/JydcbiAgICAgICAgICAgICAgICAgICAgICAgIDo8U2Nyb2xsV2lkZ2V0IGdldFNjcm9sbFZpZXc9e3RoaXMuZ2V0U2Nyb2xsVmlldy5iaW5kKHRoaXMpfSB0YXJnZXQ9e3RoaXMucmVmcyAmJiB0aGlzLnJlZnNbJ3Njcm9sbFRhcmdldCddP3RoaXMucmVmc1snc2Nyb2xsVGFyZ2V0J106Jyd9Lz4gICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExlZnRCYXIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTcgY29sLWxnLTcgY2VudGVyLWNvbHVtbiBwdC0wXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdvYmFjayBkZWNpZGVzIGlmIHNlYXJjaCBiYXIgd2lsbCBiZSBzaG93blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdvQmFjayA/IFwiXCIgOiA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtYi0xMCBtcm5nLXRvcC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtdG9wLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNyY2gtaGVhZGluZ1wiPlNlYXJjaDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcmNoLW53LWlucHV0cy1jb250YWluZXJcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYXRpb25FbGVtZW50cyB7Li4udGhpcy5wcm9wc30gb25SZWY9e3JlZiA9PiAodGhpcy5jaGlsZCA9IHJlZil9IGdldENpdHlMaXN0TGF5b3V0PXt0aGlzLmdldENpdHlMaXN0TGF5b3V0LmJpbmQodGhpcyl9IHJlc3VsdFR5cGU9J3NlYXJjaCcgZnJvbUNyaXRlcmlhPXt0cnVlfSBjb21tb25TZWFyY2hQYWdlPXt0cnVlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlYXJjaENpdGllcy5sZW5ndGggPiAwID8gXCJcIiA6IDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcmNoLXJhZGlvLWJ0bnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdGwtcmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIj5Eb2N0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5jaGFuZ2VTZWxlY3Rpb24uYmluZCh0aGlzLCAnb3BkJyl9IGNoZWNrZWQ9e3RoaXMucHJvcHMuc2VsZWN0ZWQgPT0gJ29wZCd9IG5hbWU9XCJyYWRpb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR0bC1yYWRpb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lci1yYWRpb1wiPlRlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5jaGFuZ2VTZWxlY3Rpb24uYmluZCh0aGlzLCAnbGFiJyl9IGNoZWNrZWQ9e3RoaXMucHJvcHMuc2VsZWN0ZWQgPT0gJ2xhYid9IG5hbWU9XCJyYWRpb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR0bC1yYWRpb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lci1yYWRpb1wiPkRlbnRhbCBUcmVhdG1lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuY2hhbmdlU2VsZWN0aW9uLmJpbmQodGhpcywgJ3Byb2NlZHVyZXMnKX0gY2hlY2tlZD17dGhpcy5wcm9wcy5zZWxlY3RlZCA9PSAncHJvY2VkdXJlcyd9IG5hbWU9XCJyYWRpb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VyY2gtbnctaW5wdXRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJuZXctc3JjaC1kb2MtbGFiXCIgYXV0b0NvbXBsZXRlPVwib2ZmXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggRG9jdG9ycywgTGFicyBhbmQgVGVzdHNcIiBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNoVmFsdWV9IHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnRpdGxlfSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5nb0JhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkuZ28oLTEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcxNXB4JyB9fSBjbGFzc05hbWU9XCJzcmNoLWlucC1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zaGFwZS1zcmNoLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VhcmNoQ2l0aWVzLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbWItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tb24tc2VhcmNoLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3JjaC1oZWFkaW5nXCI+TG9jYXRpb24gU2VhcmNoPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tb24tbGlzdGluZy1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlYXJjaENpdGllcy5tYXAoKHJlc3VsdCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCIgb25DbGljaz17dGhpcy5zZWxlY3RMb2NhdGlvbi5iaW5kKHRoaXMsIHJlc3VsdCl9PntyZXN1bHQuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VhcmNoQ2l0aWVzLmxlbmd0aCA+IDAgPyBcIlwiIDogPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlID9cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdHMubWFwKChjYXQsIGopID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhdC52YWx1ZXMgJiYgY2F0LnZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtYi0xMFwiIGtleT17an0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tb24tc2VhcmNoLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzcmNoLWhlYWRpbmdcIj57Y2F0LnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tb24tbGlzdGluZy1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXQudmFsdWVzLmxlbmd0aCA8IDEgPyA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj5ObyBSZXN1bHRzIEZvdW5kIC4uLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0LnZhbHVlcy5tYXAoKGN1cnIsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIiBvbkNsaWNrPXt0aGlzLmFkZENyaXRlcmlhLmJpbmQodGhpcywgY3VyciwgY2F0LnRpdGxlKX0+e2N1cnIubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUubGVuZ3RoID4gMiA/IDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudHlwZSA9PSAnb3BkJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbWItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tb24tc2VhcmNoLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tb24tbGlzdGluZy1jb250IG10LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiIG9uQ2xpY2s9eygpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0RvY3Rvck5hbWVTZWFyY2hlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2RvY3Rvci1uYW1lLXNlYXJjaGVkJywgJ0RvY3Rvck5hbWVTZWFyY2hlZCc6IHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VhcmNoUHJvY2VlZCh0aGlzLnN0YXRlLnNlYXJjaFZhbHVlLCBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+U2VhcmNoIERvY3RvcnMgYnkgbmFtZSA6IDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnIzAwMCcsIGZvbnRXZWlnaHQ6IDUwMCB9fT57dGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIiBvbkNsaWNrPXsoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdIb3NwaXRhbE5hbWVTZWFyY2hlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2hvc3BpdGFsLW5hbWUtc2VhcmNoZWQnLCAnSG9zcGl0YWxOYW1lU2VhcmNoZWQnOiB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlIHx8ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlYXJjaFByb2NlZWQoXCJcIiwgdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlNlYXJjaCBIb3NwaXRhbHMgYnkgbmFtZSA6IDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnIzAwMCcsIGZvbnRXZWlnaHQ6IDUwMCB9fT57dGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbWItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tb24tc2VhcmNoLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tb24tbGlzdGluZy1jb250IG10LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiIG9uQ2xpY2s9eygpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0xhYk5hbWVTZWFyY2hlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2xhYi1uYW1lLXNlYXJjaGVkJywgJ1NlYXJjaFN0cmluZyc6IHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VhcmNoUHJvY2VlZCh0aGlzLnN0YXRlLnNlYXJjaFZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+U2VhcmNoIExhYnMgYnkgbmFtZSA6IDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnIzAwMCcsIGZvbnRXZWlnaHQ6IDUwMCB9fT57dGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAodGhpcy5wcm9wcy5jaGVja0ZvckxvYWQgPyB0aGlzLnByb3BzLmNoaWxkcmVuIDogPExvYWRlciAvPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGluaWNfY2FyZCB8fCB0aGlzLnByb3BzLmxhYl9jYXJkID8gJycgOiA8UmlnaHRCYXIgZXh0cmFDbGFzcz1cIiBjaGF0LWZsb2F0LWJ0bi0yXCIgbmV3Q2hhdEJ0bj17dGhpcy5wcm9wcy5uZXdDaGF0QnRufSB0eXBlPXt0aGlzLnByb3BzLnR5cGV9IG5vQ2hhdEJ1dHRvbj17dGhpcy5wcm9wcy5zZWFyY2hQYWNrYWdlcyB8fCB0aGlzLnByb3BzLnNlYXJjaERvY3RvcnMgfHwgdGhpcy5wcm9wcy5zZWFyY2hMYWJzfSBtc2dUZW1wbGF0ZT1cImdvbGRfZ2VuZXJhbF90ZW1wbGF0ZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJvdHRvbV9jb250ZW50ICYmIHRoaXMucHJvcHMuYm90dG9tX2NvbnRlbnQubGVuZ3RoICYmIHBhcnNlSW50KHRoaXMucHJvcHMucGFnZSkgPT0gMSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIG1ydC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtcmVzdWx0LWNhcmQtY29sbHBhc2VcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRoaXMucHJvcHMuYm90dG9tX2NvbnRlbnQgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJhdGluZ3NfdGl0bGUgJiYgdGhpcy5wcm9wcy5yYXRpbmdzICYmIHRoaXMucHJvcHMucmV2aWV3cyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGF2Zy1yYXRpbmcgbXJ0LTIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIj57YCR7dGhpcy5wcm9wcy5yYXRpbmdzX3RpdGxlfSAtIFJhdGluZ3MgJiBSZXZpZXdzYH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIj5BdmVyYWdlIHJhdGluZyB7cmF0aW5nQXJyYXl9PHNwYW4+Jm5ic3A7e3RoaXMucHJvcHMucmF0aW5nc30gPC9zcGFuPjxzcGFuPih7dGhpcy5wcm9wcy5yZXZpZXdzfSByZXZpZXdzKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd1BhY2thZ2VTdHJpcCAmJiAhdGhpcy5wcm9wcy5pc1BhY2thZ2U/XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFja2FnZUNvbXBhcmVTdHJpcCB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc2h3LXNyY2gtZnRyIGQtbWQtbm9uZSAke3RoaXMuc3RhdGUuc3dpcGVEaXJlY3Rpb24gJiYgdGhpcy5zdGF0ZS5zd2lwZURpcmVjdGlvbiE9J3VwJyB8fCAhc2hvd1NlYXJjaD8nc210aC1mdHItaGlkZSc6Jyd9YH0+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlYXJjaFBhY2thZ2VzICYmIHRoaXMucHJvcHMuY29tcGFyZV9wYWNrYWdlcyAmJiB0aGlzLnByb3BzLmNvbXBhcmVfcGFja2FnZXMubGVuZ3RoID09IDA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rml4ZWRNb2JpbGVGb290ZXIgc2VhcmNoUGFja2FnZVBhZ2U9e3RydWV9IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb21wYXJlX3BhY2thZ2VzICYmIHRoaXMucHJvcHMuY29tcGFyZV9wYWNrYWdlcy5sZW5ndGggPT0gMCAmJiAodGhpcy5wcm9wcy5zZWFyY2hEb2N0b3JzIHx8IHRoaXMucHJvcHMuc2VhcmNoTGFicykgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaXhlZE1vYmlsZUZvb3RlciB7Li4udGhpcy5wcm9wc30gLz4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JpdGVyaWFTZWFyY2hWaWV3IiwiaW1wb3J0IENyaXRlcmlhU2VhcmNoVmlldyBmcm9tICcuL0NyaXRlcmlhU2VhcmNoVmlldy5qcydcblxuZXhwb3J0IGRlZmF1bHQgQ3JpdGVyaWFTZWFyY2hWaWV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbml0aWFsc1BpY3R1cmUgZnJvbSAnLi4vLi4vLi4vY29tbW9ucy9pbml0aWFsc1BpY3R1cmUnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuXG5pbXBvcnQgeyBidWlsZE9wZW5CYW5uZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuaW1wb3J0IHsgWF9PSyB9IGZyb20gJ2NvbnN0YW50cyc7XG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcblxuY2xhc3MgUGFja2FnZUNvbXBhcmVTdHJpcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGU9e1xuICAgICAgICAgICAgY2hlY2tlZDpmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcGFyZVBhY2thZ2VzKCl7XG4gICAgICBpZih0aGlzLnByb3BzLmNvbXBhcmVfcGFja2FnZXMubGVuZ3RoID4gNSl7XG4gICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiTWF4IDUgcGFja2FnZXMgY2FuIGJlIGNvbXBhcmVkXCIgfSk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgbGV0IHNlbGVjdGVkUGtnQ29tcGFyZUlkcz1bXVxuICAgICAgICAgIGlmKHRoaXMucHJvcHMuY29tcGFyZV9wYWNrYWdlcyl7XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuY29tcGFyZV9wYWNrYWdlcy5tYXAoKHBhY2thZ2VzLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZFBrZ0NvbXBhcmVJZHMucHVzaChwYWNrYWdlcy5pZCsnLScrcGFja2FnZXMubGFiX2lkKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9wYWNrYWdlL2NvbXBhcmU/cGFja2FnZV9pZHM9JytzZWxlY3RlZFBrZ0NvbXBhcmVJZHMpICAgICAgXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXJQYWNrYWdlKCl7XG4gICAgICB0aGlzLnByb3BzLnJlc2V0UGtnQ29tcGFyZSgpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29tcGFyZS1wYWNrYWdlLWZvb3RlciBjbS1mb290ZXJcIj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNvbXBhcmUtcGFja2FnZXMtaG9tZVwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJobHRoLXR4dFwiPnt0aGlzLnByb3BzLmNvbXBhcmVfcGFja2FnZXMubGVuZ3RofSBIZWFsdGggUGFja2FnZSBTZWxlY3RlZDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpLWJ0bi1jb21wYXJlXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwa2ctYnRuLW53XCIgb25DbGljaz17dGhpcy5jb21wYXJlUGFja2FnZXMuYmluZCh0aGlzKX0+Q29tcGFyZTwvYT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL2NwL2Fzc2V0cy9pbWcvaWNvbnMvY2xvc2UucG5nXCIgYWx0PVwiXCIgIG9uQ2xpY2s9e3RoaXMuY2xlYXJQYWNrYWdlLmJpbmQodGhpcyl9Lz48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvc2VjdGlvbj4gIFxuICAgICAgICApXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFBhY2thZ2VDb21wYXJlU3RyaXBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY2xhc3MgU2Nyb2xsVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2V0VGFyZ2V0OiBmYWxzZSxcblx0XHRcdHRvdWNoc3RhcnRYIDogMCxcblx0XHRcdHRvdWNoc3RhcnRZIDowLFxuXHRcdFx0dG91Y2hlbmRYIDogMCxcblx0XHRcdHRvdWNoZW5kWSA6IDAsXG5cdFx0XHR0b3VjaG1vdmVYOiAwLFxuXHRcdFx0dG91Y2htb3ZlWTogMFx0XHRcdFxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGlmKHRoaXMucHJvcHMudGFyZ2V0ICYmICF0aGlzLnN0YXRlLnNldFRhcmdldCkge1xuXHRcdFx0bGV0IHRhcmdldCA9IHRoaXMucHJvcHMudGFyZ2V0XG5cdFx0XHR0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChlKT0+dGhpcy5hZGRUb3VjaFN0YXJ0RXZlbnQoZSksIGZhbHNlKVxuXHRcdFx0dGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsICAoZSk9PnRoaXMuYWRkVG91Y2hNb3ZlRXZlbnQoZSksIGZhbHNlKVxuXHRcdFx0dGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIChlKT0+dGhpcy5hZGRUb3VjaEVuZEV2ZW50KGUpLCBmYWxzZSlcblx0XHRcdHRoaXMuc2V0U3RhdGUoe3NldFRhcmdldDogdHJ1ZX0pXG5cdFx0fVxuXHRcdFxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcblx0XHRpZighdGhpcy5zdGF0ZS5zZXRUYXJnZXQgJiYgbmV4dFByb3BzLnRhcmdldCkge1xuXHRcdFx0bGV0IHRhcmdldCA9IG5leHRQcm9wcy50YXJnZXRcblx0XHRcdHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGUpPT50aGlzLmFkZFRvdWNoU3RhcnRFdmVudChlKSwgZmFsc2UpXG5cdFx0XHR0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgIChlKT0+dGhpcy5hZGRUb3VjaE1vdmVFdmVudChlKSwgZmFsc2UpXG5cdFx0XHR0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGUpPT50aGlzLmFkZFRvdWNoRW5kRXZlbnQoZSksIGZhbHNlKVxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7c2V0VGFyZ2V0OiB0cnVlfSlcblx0XHR9XG5cdH1cblxuXHRhZGRUb3VjaFN0YXJ0RXZlbnQoZXZlbnQpe1xuXHRcdGxldCB0b3VjaCA9IGV2ZW50LnRvdWNoZXNbMF0gfHwgZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF1cblx0XHR0aGlzLnNldFN0YXRlKHt0b3VjaHN0YXJ0WCA6IHRvdWNoLnNjcmVlblgsIHRvdWNoc3RhcnRZIDogdG91Y2guc2NyZWVuWX0pXG5cdH1cblxuXHRhZGRUb3VjaE1vdmVFdmVudCA9IChldmVudCk9Pntcblx0XHRsZXQgdG91Y2ggPSBldmVudC50b3VjaGVzWzBdIHx8IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR0b3VjaG1vdmVYIDogIHRvdWNoLnNjcmVlblgsIHRvdWNobW92ZVkgOiB0b3VjaC5zY3JlZW5ZXG5cdFx0fSwoKT0+e1xuXHRcdFx0dGhpcy5oYW5kbGVHZXN0dXJlKClcdFxuXHRcdH0pXG5cdH1cblxuXHRhZGRUb3VjaEVuZEV2ZW50KGV2ZW50KXtcblx0XHRsZXQgdG91Y2ggPSBldmVudC50b3VjaGVzWzBdIHx8IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR0b3VjaGVuZFggOiB0b3VjaC5zY3JlZW5YLCB0b3VjaGVuZFkgOiB0b3VjaC5zY3JlZW5ZXG5cdFx0fSwoKT0+e1xuXHRcdFx0dGhpcy5oYW5kbGVHZXN0dXJlKClcdFxuXHRcdH0pXG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuXHRcdGlmKHRoaXMuc3RhdGUuc2V0VGFyZ2V0KSB7XG5cdFx0XHRsZXQgdGFyZ2V0ID0gdGhpcy5wcm9wcy50YXJnZXRcblx0XHRcdHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5hZGRUb3VjaFN0YXJ0RXZlbnQpXG5cdFx0XHR0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgIHRoaXMuYWRkVG91Y2hNb3ZlRXZlbnQpXG5cdFx0XHR0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5hZGRUb3VjaEVuZEV2ZW50KVxuXHRcdH1cblx0fVxuXG5cdGhhbmRsZUdlc3R1cmUoKXtcblx0ICAgIGxldCBzd2lwZSA9ICcnXG5cdCAgICAvKmlmIChTQ1JPTEwudG91Y2hlbmRYIDwgU0NST0xMLnRvdWNoc3RhcnRYKSB7XG5cdCAgICAgICAgcmV0dXJuIChzd2lwZWQgKyAnbGVmdCEnKTtcblx0ICAgIH1cblx0ICAgIGlmIChTQ1JPTEwudG91Y2hlbmRYID4gU0NST0xMLnRvdWNoc3RhcnRYKSB7XG5cdCAgICAgICAgcmV0dXJuIChzd2lwZWQgKyAncmlnaHQhJyk7XG5cdCAgICB9Ki9cblx0ICAgIGlmICh0aGlzLnN0YXRlLnRvdWNoZW5kWSA8IHRoaXMuc3RhdGUudG91Y2hzdGFydFkgfHwgdGhpcy5zdGF0ZS50b3VjaG1vdmVZPCB0aGlzLnN0YXRlLnRvdWNoc3RhcnRZKSB7XG5cdCAgICAgICAgc3dpcGUgPSAnZG93bidcblx0ICAgIH1cblx0ICAgIGlmICh0aGlzLnN0YXRlLnRvdWNoZW5kWSA+IHRoaXMuc3RhdGUudG91Y2hzdGFydFkgfHwgdGhpcy5zdGF0ZS50b3VjaG1vdmVZID4gdGhpcy5zdGF0ZS50b3VjaHN0YXJ0WSkge1xuXHQgICAgICAgIHN3aXBlID0gJ3VwJ1xuXHQgICAgfVxuXG5cdCAgICB0aGlzLnByb3BzLmdldFNjcm9sbFZpZXcoey4uLnRoaXMuc3RhdGUsIHN3aXBlfSlcblxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuICcnXG5cdH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbFZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRPcGVuQmFubmVyKGxhYl90aW1pbmcsIGxhYl90aW1pbmdfZGF0YSA9IFtdLCBuZXh0X2xhYl90aW1pbmcsIG5leHRfbGFiX3RpbWluZ19kYXRhID0gbnVsbCkge1xuICAgIGxldCBpc19vcGVuX25vdyA9IGZhbHNlXG4gICAgbGV0IG9wZW5fbmV4dF90b2RheSA9IGZhbHNlXG5cbiAgICBsZXQgdGltZV9ub3cgPSBuZXcgRGF0ZSgpLmdldEhvdXJzKCkgKyAwLjVcbiAgICBmb3IgKGxldCBsdGQgb2YgbGFiX3RpbWluZ19kYXRhKSB7XG4gICAgICAgIGlmICh0aW1lX25vdyA8PSBsdGQuZW5kICYmIHRpbWVfbm93ID49IGx0ZC5zdGFydCkge1xuICAgICAgICAgICAgaXNfb3Blbl9ub3cgPSB0cnVlXG4gICAgICAgICAgICByZXR1cm4gPHAgc3R5bGU9e3sgZm9udFNpemU6IDEyIH19ID57bGFiX3RpbWluZ308L3A+XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRpbWVfbm93IDwgbHRkLnN0YXJ0KSB7XG4gICAgICAgICAgICBvcGVuX25leHRfdG9kYXkgPSBsdGQuc3RhcnRcbiAgICAgICAgICAgIG9wZW5fbmV4dF90b2RheSA9IF9kZWNpbWFsVG9UaW1lKG9wZW5fbmV4dF90b2RheSlcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3Blbl9uZXh0X3RvZGF5KSB7XG4gICAgICAgIHJldHVybiA8cCBzdHlsZT17eyBmb250U2l6ZTogMTIgfX0gPk9wZW5zIG5leHQgYXQge29wZW5fbmV4dF90b2RheX0sIHRvZGF5PC9wPlxuICAgIH1cblxuICAgIGNvbnN0IFdFRUtfREFZUyA9IFsnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheScsICdTdW5kYXknXVxuICAgIGxldCBuZXh0X29wZW4gPSBmYWxzZVxuICAgIGxldCBuZXh0X29wZW5fdG9kYXkgPSBcIlwiXG4gICAgaWYgKG5leHRfbGFiX3RpbWluZ19kYXRhKSB7XG4gICAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKClcbiAgICAgICAgbGV0IHdlZWtEYXlOdW1iZXIgPSB0b2RheS5nZXREYXkoKVxuICAgICAgICB3ZWVrRGF5TnVtYmVyID0gd2Vla0RheU51bWJlciA9PSAwID8gNiA6IHdlZWtEYXlOdW1iZXIgLSAxXG4gICAgICAgIGZvciAobGV0IGkgaW4gbmV4dF9sYWJfdGltaW5nX2RhdGEpIHtcbiAgICAgICAgICAgIG5leHRfb3BlbiA9IG5leHRfbGFiX3RpbWluZ19kYXRhW2ldWzBdLnN0YXJ0XG4gICAgICAgICAgICBuZXh0X29wZW4gPSBfZGVjaW1hbFRvVGltZShuZXh0X29wZW4pXG4gICAgICAgICAgICBpZiAoaSAtIHdlZWtEYXlOdW1iZXIgPT0gMSkge1xuICAgICAgICAgICAgICAgIG5leHRfb3Blbl90b2RheSA9ICd0b21vcnJvdydcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV4dF9vcGVuX3RvZGF5ID0gV0VFS19EQVlTW2ldXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChuZXh0X29wZW4gJiYgbmV4dF9vcGVuX3RvZGF5KSB7XG4gICAgICAgIHJldHVybiA8cCBzdHlsZT17eyBmb250U2l6ZTogMTIgfX0gPk9wZW5zIG5leHQgYXQge25leHRfb3Blbn0sIHtuZXh0X29wZW5fdG9kYXl9PC9wPlxuICAgIH1cblxuICAgIHJldHVybiBcIkNsb3NlZFwiXG5cbn1cblxuXG5mdW5jdGlvbiBfZGVjaW1hbFRvVGltZSh0aW1lKSB7XG4gICAgdGltZSA9IHRpbWUudG9TdHJpbmcoKVxuICAgIGxldCBob3VycyA9IHRpbWUuc3BsaXQoJy4nKVswXVxuICAgIGxldCBtaW51dGVzID0gdGltZS5zcGxpdCgnLicpWzFdXG4gICAgaG91cnMgPSBwYXJzZUludChob3VycylcbiAgICBpZiAobWludXRlcyA9PSAnNScpIHtcbiAgICAgICAgbWludXRlcyA9ICc6MzAnXG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWludXRlcyA9IFwiXCJcbiAgICB9XG4gICAgbGV0IGRheV90aW1lID0gXCJBTVwiXG4gICAgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICAgIGRheV90aW1lID0gXCJQTVwiXG4gICAgfVxuICAgIGhvdXJzID0gaG91cnMgJSAxMlxuICAgIHJldHVybiBgJHtob3Vyc30ke21pbnV0ZXN9ICR7ZGF5X3RpbWV9YFxufSJdLCJzb3VyY2VSb290IjoiIn0=