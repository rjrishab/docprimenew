exports.ids = [69];
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

/***/ "./dev/js/components/diagnosis/commons/labTests/expansionPanel.js":
/*!************************************************************************!*\
  !*** ./dev/js/components/diagnosis/commons/labTests/expansionPanel.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ExpansionPanel extends _react2.default.Component {

    constructor(props) {
        super(props);

        this.radioClick = (cat_id, test) => {
            this.props.selectCategory(cat_id, test);
        };

        this.state = {
            open: false
        };
    }

    toggleOpen() {
        this.setState({ open: !this.state.open });
    }

    componentWillReceiveProps() {
        if (this.props.locationSearch) {
            this.props.contentList.map((cont, i) => {
                if (this.props.defaultTest.includes(cont.id)) {
                    this.setState({ open: true });
                }
            });
        }
    }

    render() {
        let categoryId = '';
        let { heading, contentList } = this.props;
        if (contentList && contentList.length && !this.props.locationSearch) {
            heading += `  (includes ${contentList.length} tests)`;
        }
        if (this.props.locationSearch) {
            categoryId = this.props.categoryId;
        }
        return _react2.default.createElement(
            'li',
            { className: 'expansion-panel-list-item', style: this.props.locationSearch ? { listStyle: 'none', cursor: 'auto' } : {} },
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: this.props.locationSearch ? 'title lc-test-heading' : 'title', onClick: this.toggleOpen.bind(this), style: { marginBottom: 0, fontSize: 15, fontWeight: 400, paddingRight: 30, position: 'relative' } },
                    heading,
                    this.state.open ? _react2.default.createElement('img', { className: 'titlearrow-up', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" }) : _react2.default.createElement('img', { className: 'titlearrow', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                ),
                this.state.open ? _react2.default.createElement(
                    'div',
                    { className: 'more-content' },
                    this.props.content ? _react2.default.createElement('span', { className: 'pkg-content', dangerouslySetInnerHTML: { __html: this.props.content } }) : '',
                    this.props.locationSearch ? _react2.default.createElement(
                        'ul',
                        { className: 'lc-test-list mrt-10' },
                        contentList.map((cont, i) => {
                            return _react2.default.createElement(
                                'li',
                                { key: i, onClick: () => this.radioClick(categoryId, cont) },
                                _react2.default.createElement('input', { className: 'lc-test-radio', type: 'radio', value: cont.id, checked: this.props.radioChecked === cont.id || this.props.defaultTest.includes(cont.id), name: 'test' }),
                                _react2.default.createElement('span', { className: 'doc-checkmark' }),
                                cont.name
                            );
                        })
                    ) : _react2.default.createElement(
                        'ul',
                        { className: 'pkgs-drp-listing' },
                        contentList.map((cont, i) => {
                            return _react2.default.createElement(
                                'li',
                                { key: i },
                                cont
                            );
                        })
                    )
                ) : ""
            )
        );
    }
}

exports.default = ExpansionPanel;

/***/ }),

/***/ "./dev/js/components/opd/locationSearch/LocationSearch.js":
/*!****************************************************************!*\
  !*** ./dev/js/components/opd/locationSearch/LocationSearch.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _axios = __webpack_require__(/*! axios */ "axios");

var _axios2 = _interopRequireDefault(_axios);

var _Loader = __webpack_require__(/*! ../../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _LeftBar = __webpack_require__(/*! ../../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _mapHelpers = __webpack_require__(/*! ../../../helpers/mapHelpers */ "./dev/js/helpers/mapHelpers.js");

var _expansionPanel = __webpack_require__(/*! ../../diagnosis/commons/labTests/expansionPanel */ "./dev/js/components/diagnosis/commons/labTests/expansionPanel.js");

var _expansionPanel2 = _interopRequireDefault(_expansionPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class LocationSearch extends _react2.default.Component {
    constructor(props) {
        super(props);
        const parsed = queryString.parse(this.props.location.search);
        this.state = {
            search: "",
            searchResults: [],
            detectLoading: false,
            redirect_to: parsed.redirect_to,
            defaultTest: [],
            radioChecked: "",
            testName: '',
            showLocationResult: true
        };
    }

    getLocation(location) {
        (0, _mapHelpers._autoCompleteService)(location, function (results, status) {
            results = results || [];
            this.setState({ searchResults: results });
        }.bind(this));
    }

    inputHandler(e) {
        this.setState({
            search: e.target.value,
            showLocationResult: true
        });
        this.getLocation(e.target.value);
    }

    selectLocation(location) {
        let timeout = setTimeout(() => {
            if (this.state.detectLoading) {
                this.setState({ detectLoading: false });
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Could not select location." });
            }
        }, 5000);
        this.setState({ detectLoading: true, search: location.description, showLocationResult: false });

        (0, _mapHelpers._getLocationFromPlaceId)(location.reference, location_object => {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'UserLocation', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'user-location', 'location': location_object.name || '', 'place_id': location_object.place_id || '', 'formatted_address': location_object.formatted_address || ''
            };
            _gtm2.default.sendEvent({ data: data });

            this.props.selectLocation(location_object, 'autoComplete').then(() => {
                this.setState({ detectLoading: false });
                if (this.state.redirect_to) {
                    if (this.props.location.search && this.props.location.search.includes('?lab_card=true')) {
                        // do nothing
                    } else {
                        if (this.state.redirect_to.includes('searchresults')) {
                            this.props.history.replace(this.state.redirect_to);
                            return;
                        }
                        this.props.history.push(this.state.redirect_to);
                    }
                } else {
                    if (this.props.location.search && this.props.location.search.includes('?lab_card=true')) {
                        // do nothing
                    } else {
                        this.props.history.go(-1);
                    }
                }
            });
        });
    }

    componentDidMount() {
        let input = document.getElementById('topLocationSearch');
        input.focus();
        if (this.props.location.search && this.props.location.search.includes('?lab_card=true')) {
            const parsed = queryString.parse(this.props.location.search);
            let testIds = [];
            if (parsed.id) {
                testIds = parsed.id.split(',').map(x => parseInt(x));
                this.setState({ defaultTest: testIds });
            }
            this.props.fetchTestList(parsed.id || '');
        }
    }

    detectLocation() {
        let timeout = setTimeout(() => {
            if (this.state.detectLoading) {
                this.setState({ detectLoading: false });
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Could not fetch location." });
            }
        }, 5000);

        this.setState({ detectLoading: true });

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                (0, _mapHelpers._getlocationFromLatLong)(parseFloat(position.coords.latitude), parseFloat(position.coords.longitude), 'locality', location_object => {
                    this.props.selectLocation(location_object, 'autoDetect').then(() => {
                        clearTimeout(timeout);
                        if (this.state.redirect_to) {
                            if (this.props.location.search && this.props.location.search.includes('?lab_card=true')) {
                                // do nothing
                            } else {
                                this.props.history.push(this.state.redirect_to);
                            }
                        } else {
                            if (this.props.location.search && this.props.location.search.includes('?lab_card=true')) {
                                // do nothing
                            } else {
                                this.props.history.go(-1);
                            }
                        }
                        this.setState({ detectLoading: false });
                    });
                });
            }, (a, b, c) => {
                this.setState({ detectLoading: false });
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Could not fetch location." });
            }, (a, b, c) => {
                this.setState({ detectLoading: false });
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Could not fetch location." });
            });
        } else {
            this.setState({ detectLoading: false });
            // geolocation is not supported
        }
    }

    selectCategoryTests(catId, test) {
        this.setState({ radioChecked: test.id, testName: test.name, defaultTest: [] });
    }

    doneBtnClick() {
        var selectedTest = {};
        if (this.state.radioChecked) {
            selectedTest.name = this.state.testName;
            selectedTest.id = this.state.radioChecked;
            this.props.toggleDiagnosisCriteria('test', selectedTest || {}, true);
        }
        this.props.history.go(-1);
    }

    focusOut() {
        let data = {
            'Category': 'ConsumerApp', 'Action': 'locationInputFocusOut', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'location-search-focus-out', 'searchString': this.state.search
        };
        _gtm2.default.sendEvent({ data: data });
    }

    render() {

        return _react2.default.createElement(
            'div',
            { className: 'profile-body-wrap', style: { paddingBottom: 54 } },
            _react2.default.createElement(_DesktopProfileHeader2.default, null),
            _react2.default.createElement(
                'section',
                { className: 'container parent-section parent-section-temp' },
                _react2.default.createElement(
                    'div',
                    { className: 'row main-row parent-section-row' },
                    _react2.default.createElement(_LeftBar2.default, null),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12 col-md-7 col-lg-7 center-column' },
                        _react2.default.createElement(
                            'header',
                            { className: 'skin-white location-detect-header searcLocationHeaderPadding' },
                            _react2.default.createElement(
                                'div',
                                { className: 'container-fluid' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-12', style: { paddingTop: 10 } },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'serch-nw-inputs' },
                                            _react2.default.createElement('input', { className: 'new-srch-inp', autoComplete: 'off', placeholder: 'Enter any city or locality', value: this.state.search, onChange: this.inputHandler.bind(this), id: 'topLocationSearch', disabled: this.state.detectLoading, onBlur: () => this.focusOut() }),
                                            _react2.default.createElement('img', { className: 'srch-inp-img', src: "/assets" + "/img/new-loc-ico.svg" }),
                                            _react2.default.createElement(
                                                'button',
                                                { className: 'srch-inp-btn-img', onClick: this.detectLocation.bind(this) },
                                                'Auto Detect ',
                                                _react2.default.createElement('img', { src: "/assets" + "/img/loc-track.svg" })
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        this.state.detectLoading ? _react2.default.createElement(
                            'div',
                            { className: 'fullscreen' },
                            _react2.default.createElement(_Loader2.default, null)
                        ) : "",
                        this.state.searchResults && this.state.searchResults.length && this.state.showLocationResult ? _react2.default.createElement(
                            'section',
                            { style: { paddingBottom: 50, paddingTop: 0 }, className: 'locaton-detect-screen' },
                            _react2.default.createElement(
                                'div',
                                { className: ' widget widget-panel' },
                                _react2.default.createElement(
                                    'h4',
                                    { className: 'panel-title widget-panel-grey' },
                                    'Search Result'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'common-search-container pt-0' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'common-listing-cont' },
                                        _react2.default.createElement(
                                            'ul',
                                            { className: 'list city-list' },
                                            this.state.searchResults.map((result, i) => {
                                                return _react2.default.createElement(
                                                    'li',
                                                    { key: i, onClick: this.selectLocation.bind(this, result) },
                                                    _react2.default.createElement(
                                                        'p',
                                                        null,
                                                        _react2.default.createElement(
                                                            'a',
                                                            { className: 'd-flex justify-content-between align-item-center w-100' },
                                                            result.description,
                                                            _react2.default.createElement(
                                                                'span',
                                                                { className: 'city-loc' },
                                                                'City'
                                                            )
                                                        )
                                                    )
                                                );
                                            })
                                        )
                                    )
                                )
                            )
                        ) : '',
                        this.props.location.search && this.props.location.search.includes('?lab_card=true') ? _react2.default.createElement(
                            'section',
                            { className: 'lc-select-test widget-panel' },
                            _react2.default.createElement(
                                'h4',
                                { className: 'panel-title' },
                                'Select Test'
                            ),
                            this.props.testList && this.props.testList.length ? this.props.testList.filter(x => x.tests.length > 0).map((test, i) => {
                                return _react2.default.createElement(_expansionPanel2.default, {
                                    key: i,
                                    locationSearch: true,
                                    heading: test.category_name,
                                    contentList: test.tests,
                                    categoryId: test.category_id,
                                    radioChecked: this.state.radioChecked,
                                    selectCategory: this.selectCategoryTests.bind(this),
                                    defaultTest: this.state.defaultTest
                                });
                            }) : '',
                            _react2.default.createElement(
                                'button',
                                { className: 'v-btn p-3 v-btn-primary btn-lg fixed horizontal bottom no-round text-lg sticky-btn', onClick: () => this.doneBtnClick() },
                                'Done'
                            )
                        ) : '',
                        _react2.default.createElement('div', { id: 'map', style: { display: 'none' } })
                    ),
                    this.props.location.search && this.props.location.search.includes('?lab_card=true') ? _react2.default.createElement(_RightBar2.default, { extraClass: ' chat-float-btn-2', msgTemplate: 'gold_general_template' }) : _react2.default.createElement(_RightBar2.default, { msgTemplate: 'gold_general_template' })
                )
            )
        );
    }
}

LocationSearch.contextTypes = {
    router: () => null
};
exports.default = LocationSearch;

/***/ }),

/***/ "./dev/js/components/opd/locationSearch/index.js":
/*!*******************************************************!*\
  !*** ./dev/js/components/opd/locationSearch/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LocationSearch = __webpack_require__(/*! ./LocationSearch.js */ "./dev/js/components/opd/locationSearch/LocationSearch.js");

var _LocationSearch2 = _interopRequireDefault(_LocationSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _LocationSearch2.default;

/***/ }),

/***/ "./dev/js/containers/opd/LocationSearch.js":
/*!*************************************************!*\
  !*** ./dev/js/containers/opd/LocationSearch.js ***!
  \*************************************************/
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

var _index2 = __webpack_require__(/*! ../../components/opd/locationSearch/index.js */ "./dev/js/components/opd/locationSearch/index.js");

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LocationSearch extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return _react2.default.createElement(_index3.default, this.props);
    }
}

LocationSearch.contextTypes = {
    router: () => null
};
const mapStateToProps = state => {
    const {
        selectedLocation
    } = state.SEARCH_CRITERIA_OPD;

    const {
        testList
    } = state.USER;

    return {
        selectedLocation, testList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        selectLocation: (location, type) => dispatch((0, _index.selectLocation)(location, type)),
        fetchTestList: testIds => dispatch((0, _index.fetchTestList)(testIds)),
        toggleDiagnosisCriteria: (type, criteria, forceAdd) => dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria, forceAdd))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LocationSearch);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL2NvbW1vbnMvbGFiVGVzdHMvZXhwYW5zaW9uUGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL2xvY2F0aW9uU2VhcmNoL0xvY2F0aW9uU2VhcmNoLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL29wZC9sb2NhdGlvblNlYXJjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9vcGQvTG9jYXRpb25TZWFyY2guanMiXSwibmFtZXMiOlsiTG9hZGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIiwiY2xhc3NUeXBlIiwiaUZyYW1lUG9wdXAiLCJFeHBhbnNpb25QYW5lbCIsInJhZGlvQ2xpY2siLCJjYXRfaWQiLCJ0ZXN0Iiwic2VsZWN0Q2F0ZWdvcnkiLCJzdGF0ZSIsIm9wZW4iLCJ0b2dnbGVPcGVuIiwic2V0U3RhdGUiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibG9jYXRpb25TZWFyY2giLCJjb250ZW50TGlzdCIsIm1hcCIsImNvbnQiLCJpIiwiZGVmYXVsdFRlc3QiLCJpbmNsdWRlcyIsImlkIiwiY2F0ZWdvcnlJZCIsImhlYWRpbmciLCJsZW5ndGgiLCJsaXN0U3R5bGUiLCJjdXJzb3IiLCJiaW5kIiwibWFyZ2luQm90dG9tIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwicGFkZGluZ1JpZ2h0IiwicG9zaXRpb24iLCJBU1NFVFNfQkFTRV9VUkwiLCJjb250ZW50IiwiX19odG1sIiwicmFkaW9DaGVja2VkIiwibmFtZSIsInF1ZXJ5U3RyaW5nIiwicmVxdWlyZSIsIkxvY2F0aW9uU2VhcmNoIiwicGFyc2VkIiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsInNlYXJjaFJlc3VsdHMiLCJkZXRlY3RMb2FkaW5nIiwicmVkaXJlY3RfdG8iLCJ0ZXN0TmFtZSIsInNob3dMb2NhdGlvblJlc3VsdCIsImdldExvY2F0aW9uIiwicmVzdWx0cyIsInN0YXR1cyIsImlucHV0SGFuZGxlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlbGVjdExvY2F0aW9uIiwidGltZW91dCIsInNldFRpbWVvdXQiLCJTbmFja0JhciIsInNob3ciLCJwb3MiLCJ0ZXh0IiwiZGVzY3JpcHRpb24iLCJyZWZlcmVuY2UiLCJsb2NhdGlvbl9vYmplY3QiLCJkYXRhIiwiR1RNIiwiZ2V0VXNlcklkIiwicGxhY2VfaWQiLCJmb3JtYXR0ZWRfYWRkcmVzcyIsInNlbmRFdmVudCIsInRoZW4iLCJoaXN0b3J5IiwicmVwbGFjZSIsInB1c2giLCJnbyIsImNvbXBvbmVudERpZE1vdW50IiwiaW5wdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZm9jdXMiLCJ0ZXN0SWRzIiwic3BsaXQiLCJ4IiwicGFyc2VJbnQiLCJmZXRjaFRlc3RMaXN0IiwiZGV0ZWN0TG9jYXRpb24iLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsInBhcnNlRmxvYXQiLCJjb29yZHMiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImNsZWFyVGltZW91dCIsImEiLCJiIiwiYyIsInNlbGVjdENhdGVnb3J5VGVzdHMiLCJjYXRJZCIsImRvbmVCdG5DbGljayIsInNlbGVjdGVkVGVzdCIsInRvZ2dsZURpYWdub3Npc0NyaXRlcmlhIiwiZm9jdXNPdXQiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ1RvcCIsInJlc3VsdCIsInRlc3RMaXN0IiwiZmlsdGVyIiwidGVzdHMiLCJjYXRlZ29yeV9uYW1lIiwiY2F0ZWdvcnlfaWQiLCJkaXNwbGF5IiwiY29udGV4dFR5cGVzIiwicm91dGVyIiwibWFwU3RhdGVUb1Byb3BzIiwic2VsZWN0ZWRMb2NhdGlvbiIsIlNFQVJDSF9DUklURVJJQV9PUEQiLCJVU0VSIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJ0eXBlIiwiY3JpdGVyaWEiLCJmb3JjZUFkZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsTUFBTUEsTUFBTixTQUFxQkMsZ0JBQU1DLFNBQTNCLENBQXFDO0FBQ2pDQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDSDs7QUFFREMsYUFBUzs7QUFFTCxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVcsS0FBS0QsS0FBTCxDQUFXRSxTQUFYLElBQXdCLGdCQUF4QztBQUNJLG1EQUFLLFdBQVUsV0FBZixHQURKO0FBR1EsaUJBQUtGLEtBQUwsQ0FBV0csV0FBWCxHQUNJO0FBQUE7QUFBQSxrQkFBRyxXQUFVLGVBQWI7QUFBQTtBQUFBLGFBREosR0FDK0U7QUFKdkYsU0FESjtBQVNIO0FBaEJnQzs7a0JBbUJ0QlAsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJmOzs7Ozs7a0JBRWVBLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7OztBQUNBOzs7O0FBRUEsTUFBTVEsY0FBTixTQUE2QlAsZ0JBQU1DLFNBQW5DLENBQTZDOztBQUV6Q0MsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOOztBQURlLGFBV25CSyxVQVhtQixHQVdOLENBQUNDLE1BQUQsRUFBU0MsSUFBVCxLQUFrQjtBQUMzQixpQkFBS1AsS0FBTCxDQUFXUSxjQUFYLENBQTBCRixNQUExQixFQUFrQ0MsSUFBbEM7QUFDSCxTQWJrQjs7QUFFZixhQUFLRSxLQUFMLEdBQWE7QUFDVEMsa0JBQU07QUFERyxTQUFiO0FBR0g7O0FBRURDLGlCQUFhO0FBQ1QsYUFBS0MsUUFBTCxDQUFjLEVBQUVGLE1BQU0sQ0FBQyxLQUFLRCxLQUFMLENBQVdDLElBQXBCLEVBQWQ7QUFDSDs7QUFNREcs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S0FBUDtBQUtILENBTkQ7O2tCQVNlLHlCQUFRUixlQUFSLEVBQXlCSSxrQkFBekIsRUFBNkNqRixjQUE3QyxDIiwiZmlsZSI6IjY5LnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIExvYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc1R5cGUgfHwgXCJsb2FkZXJDaXJjdWxhclwifSA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcC1sb2FkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaUZyYW1lUG9wdXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0xMFwiPlJlZGlyZWN0aW5nIHlvdSB0byBQaGFybWVhc3kgd2Vic2l0ZS4uLjwvcD4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyXG4iLCJpbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuY2xhc3MgRXhwYW5zaW9uUGFuZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvcGVuOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlT3BlbigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46ICF0aGlzLnN0YXRlLm9wZW4gfSlcbiAgICB9XG5cbiAgICByYWRpb0NsaWNrID0gKGNhdF9pZCwgdGVzdCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLnNlbGVjdENhdGVnb3J5KGNhdF9pZCwgdGVzdClcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2NhdGlvblNlYXJjaCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jb250ZW50TGlzdC5tYXAoKGNvbnQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5kZWZhdWx0VGVzdC5pbmNsdWRlcyhjb250LmlkKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgY2F0ZWdvcnlJZCA9ICcnXG4gICAgICAgIGxldCB7IGhlYWRpbmcsIGNvbnRlbnRMaXN0IH0gPSB0aGlzLnByb3BzXG4gICAgICAgIGlmIChjb250ZW50TGlzdCAmJiBjb250ZW50TGlzdC5sZW5ndGggJiYgIXRoaXMucHJvcHMubG9jYXRpb25TZWFyY2gpIHtcbiAgICAgICAgICAgIGhlYWRpbmcgKz0gYCAgKGluY2x1ZGVzICR7Y29udGVudExpc3QubGVuZ3RofSB0ZXN0cylgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMubG9jYXRpb25TZWFyY2gpIHtcbiAgICAgICAgICAgIGNhdGVnb3J5SWQgPSB0aGlzLnByb3BzLmNhdGVnb3J5SWRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImV4cGFuc2lvbi1wYW5lbC1saXN0LWl0ZW1cIiBzdHlsZT17dGhpcy5wcm9wcy5sb2NhdGlvblNlYXJjaCA/IHsgbGlzdFN0eWxlOiAnbm9uZScsIGN1cnNvcjogJ2F1dG8nIH0gOiB7fX0gPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmxvY2F0aW9uU2VhcmNoID8gJ3RpdGxlIGxjLXRlc3QtaGVhZGluZycgOiAndGl0bGUnfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZU9wZW4uYmluZCh0aGlzKX0gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAwLCBmb250U2l6ZTogMTUsIGZvbnRXZWlnaHQ6IDQwMCwgcGFkZGluZ1JpZ2h0OiAzMCwgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5vcGVuID8gPGltZyBjbGFzc05hbWU9XCJ0aXRsZWFycm93LXVwXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+IDogPGltZyBjbGFzc05hbWU9XCJ0aXRsZWFycm93XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm9wZW4gPyA8ZGl2IGNsYXNzTmFtZT1cIm1vcmUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb250ZW50ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBrZy1jb250ZW50XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0aGlzLnByb3BzLmNvbnRlbnQgfX0+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubG9jYXRpb25TZWFyY2ggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbGMtdGVzdC1saXN0IG1ydC0xMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50TGlzdC5tYXAoKGNvbnQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnJhZGlvQ2xpY2soY2F0ZWdvcnlJZCwgY29udCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJsYy10ZXN0LXJhZGlvXCIgdHlwZT0ncmFkaW8nIHZhbHVlPXtjb250LmlkfSBjaGVja2VkPXt0aGlzLnByb3BzLnJhZGlvQ2hlY2tlZCA9PT0gY29udC5pZCB8fCB0aGlzLnByb3BzLmRlZmF1bHRUZXN0LmluY2x1ZGVzKGNvbnQuaWQpfSBuYW1lPSd0ZXN0JyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J3BrZ3MtZHJwLWxpc3RpbmcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudExpc3QubWFwKChjb250LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBFeHBhbnNpb25QYW5lbFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvTG9hZGVyJ1xuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9MZWZ0QmFyJ1xuaW1wb3J0IFJpZ2h0QmFyIGZyb20gJy4uLy4uL2NvbW1vbnMvUmlnaHRCYXInXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi8uLi9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IHsgX2F1dG9Db21wbGV0ZVNlcnZpY2UsIF9nZXRsb2NhdGlvbkZyb21MYXRMb25nLCBfZ2V0TG9jYXRpb25Gcm9tUGxhY2VJZCB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvbWFwSGVscGVycydcbmltcG9ydCBFeHBhbnNpb25QYW5lbCBmcm9tICcuLi8uLi9kaWFnbm9zaXMvY29tbW9ucy9sYWJUZXN0cy9leHBhbnNpb25QYW5lbCc7XG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuXG5jbGFzcyBMb2NhdGlvblNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2VhcmNoOiBcIlwiLFxuICAgICAgICAgICAgc2VhcmNoUmVzdWx0czogW10sXG4gICAgICAgICAgICBkZXRlY3RMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHJlZGlyZWN0X3RvOiBwYXJzZWQucmVkaXJlY3RfdG8sXG4gICAgICAgICAgICBkZWZhdWx0VGVzdDogW10sXG4gICAgICAgICAgICByYWRpb0NoZWNrZWQ6IFwiXCIsXG4gICAgICAgICAgICB0ZXN0TmFtZTogJycsXG4gICAgICAgICAgICBzaG93TG9jYXRpb25SZXN1bHQ6IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldExvY2F0aW9uKGxvY2F0aW9uKSB7XG4gICAgICAgIF9hdXRvQ29tcGxldGVTZXJ2aWNlKGxvY2F0aW9uLCBmdW5jdGlvbiAocmVzdWx0cywgc3RhdHVzKSB7XG4gICAgICAgICAgICByZXN1bHRzID0gcmVzdWx0cyB8fCBbXVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFJlc3VsdHM6IHJlc3VsdHMgfSlcbiAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgIH1cblxuICAgIGlucHV0SGFuZGxlcihlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2VhcmNoOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgIHNob3dMb2NhdGlvblJlc3VsdDogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmdldExvY2F0aW9uKGUudGFyZ2V0LnZhbHVlKVxuXG4gICAgfVxuXG4gICAgc2VsZWN0TG9jYXRpb24obG9jYXRpb24pIHtcbiAgICAgICAgbGV0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmRldGVjdExvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGV0ZWN0TG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiQ291bGQgbm90IHNlbGVjdCBsb2NhdGlvbi5cIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgNTAwMClcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRldGVjdExvYWRpbmc6IHRydWUsIHNlYXJjaDogbG9jYXRpb24uZGVzY3JpcHRpb24sIHNob3dMb2NhdGlvblJlc3VsdDogZmFsc2UgfSlcblxuICAgICAgICBfZ2V0TG9jYXRpb25Gcm9tUGxhY2VJZChsb2NhdGlvbi5yZWZlcmVuY2UsIChsb2NhdGlvbl9vYmplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnVXNlckxvY2F0aW9uJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAndXNlci1sb2NhdGlvbicsICdsb2NhdGlvbic6IGxvY2F0aW9uX29iamVjdC5uYW1lIHx8ICcnLCAncGxhY2VfaWQnOiBsb2NhdGlvbl9vYmplY3QucGxhY2VfaWQgfHwgJycsICdmb3JtYXR0ZWRfYWRkcmVzcyc6IGxvY2F0aW9uX29iamVjdC5mb3JtYXR0ZWRfYWRkcmVzcyB8fCAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RMb2NhdGlvbihsb2NhdGlvbl9vYmplY3QsICdhdXRvQ29tcGxldGUnKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGV0ZWN0TG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5yZWRpcmVjdF90bykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2ggJiYgdGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoJz9sYWJfY2FyZD10cnVlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnJlZGlyZWN0X3RvLmluY2x1ZGVzKCdzZWFyY2hyZXN1bHRzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucmVwbGFjZSh0aGlzLnN0YXRlLnJlZGlyZWN0X3RvKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2godGhpcy5zdGF0ZS5yZWRpcmVjdF90bylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaCAmJiB0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnP2xhYl9jYXJkPXRydWUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LmdvKC0xKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvcExvY2F0aW9uU2VhcmNoJylcbiAgICAgICAgaW5wdXQuZm9jdXMoKVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2ggJiYgdGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoJz9sYWJfY2FyZD10cnVlJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICAgICAgbGV0IHRlc3RJZHMgPSBbXVxuICAgICAgICAgICAgaWYgKHBhcnNlZC5pZCkge1xuICAgICAgICAgICAgICAgIHRlc3RJZHMgPSBwYXJzZWQuaWQuc3BsaXQoJywnKS5tYXAoeCA9PiBwYXJzZUludCh4KSlcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGVmYXVsdFRlc3Q6IHRlc3RJZHMgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hUZXN0TGlzdChwYXJzZWQuaWQgfHwgJycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGV0ZWN0TG9jYXRpb24oKSB7XG4gICAgICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5kZXRlY3RMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRldGVjdExvYWRpbmc6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIkNvdWxkIG5vdCBmZXRjaCBsb2NhdGlvbi5cIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgNTAwMClcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGV0ZWN0TG9hZGluZzogdHJ1ZSB9KVxuXG4gICAgICAgIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICAgICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgX2dldGxvY2F0aW9uRnJvbUxhdExvbmcocGFyc2VGbG9hdChwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUpLCBwYXJzZUZsb2F0KHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUpLCAnbG9jYWxpdHknLCAobG9jYXRpb25fb2JqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0TG9jYXRpb24obG9jYXRpb25fb2JqZWN0LCAnYXV0b0RldGVjdCcpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5yZWRpcmVjdF90bykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaCAmJiB0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnP2xhYl9jYXJkPXRydWUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2godGhpcy5zdGF0ZS5yZWRpcmVjdF90bylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaCAmJiB0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnP2xhYl9jYXJkPXRydWUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LmdvKC0xKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRlY3RMb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCAoYSwgYiwgYykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRlY3RMb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJDb3VsZCBub3QgZmV0Y2ggbG9jYXRpb24uXCIgfSk7XG4gICAgICAgICAgICB9LCAoYSwgYiwgYykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRlY3RMb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJDb3VsZCBub3QgZmV0Y2ggbG9jYXRpb24uXCIgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRldGVjdExvYWRpbmc6IGZhbHNlIH0pXG4gICAgICAgICAgICAvLyBnZW9sb2NhdGlvbiBpcyBub3Qgc3VwcG9ydGVkXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgICByb3V0ZXI6ICgpID0+IG51bGxcbiAgICB9XG5cbiAgICBzZWxlY3RDYXRlZ29yeVRlc3RzKGNhdElkLCB0ZXN0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByYWRpb0NoZWNrZWQ6IHRlc3QuaWQsIHRlc3ROYW1lOiB0ZXN0Lm5hbWUsIGRlZmF1bHRUZXN0OiBbXSB9KVxuICAgIH1cblxuICAgIGRvbmVCdG5DbGljaygpIHtcbiAgICAgICAgdmFyIHNlbGVjdGVkVGVzdCA9IHt9XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnJhZGlvQ2hlY2tlZCkge1xuICAgICAgICAgICAgc2VsZWN0ZWRUZXN0Lm5hbWUgPSB0aGlzLnN0YXRlLnRlc3ROYW1lO1xuICAgICAgICAgICAgc2VsZWN0ZWRUZXN0LmlkID0gdGhpcy5zdGF0ZS5yYWRpb0NoZWNrZWQ7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKCd0ZXN0Jywgc2VsZWN0ZWRUZXN0IHx8IHt9LCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkuZ28oLTEpO1xuICAgIH1cblxuICAgIGZvY3VzT3V0KCkge1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnbG9jYXRpb25JbnB1dEZvY3VzT3V0JywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbG9jYXRpb24tc2VhcmNoLWZvY3VzLW91dCcsICdzZWFyY2hTdHJpbmcnOiB0aGlzLnN0YXRlLnNlYXJjaFxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogNTQgfX0gPlxuICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIHBhcmVudC1zZWN0aW9uIHBhcmVudC1zZWN0aW9uLXRlbXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGVmdEJhciAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctNyBjZW50ZXItY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJza2luLXdoaXRlIGxvY2F0aW9uLWRldGVjdC1oZWFkZXIgc2VhcmNMb2NhdGlvbkhlYWRlclBhZGRpbmdcIiAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiIHN0eWxlPXt7IHBhZGRpbmdUb3A6IDEwIH19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VyY2gtbnctaW5wdXRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibmV3LXNyY2gtaW5wXCIgYXV0b0NvbXBsZXRlPVwib2ZmXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBhbnkgY2l0eSBvciBsb2NhbGl0eVwiIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaH0gb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IGlkPVwidG9wTG9jYXRpb25TZWFyY2hcIiBkaXNhYmxlZD17dGhpcy5zdGF0ZS5kZXRlY3RMb2FkaW5nfSBvbkJsdXI9eygpID0+IHRoaXMuZm9jdXNPdXQoKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic3JjaC1pbnAtaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbmV3LWxvYy1pY28uc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNyY2gtaW5wLWJ0bi1pbWdcIiBvbkNsaWNrPXt0aGlzLmRldGVjdExvY2F0aW9uLmJpbmQodGhpcyl9PkF1dG8gRGV0ZWN0IDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbG9jLXRyYWNrLnN2Z1wifSAvPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkb24tZ3JvdXAgbG9jYXRpb24tZGV0ZWN0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNofSBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGlucHV0LW1kIHNlYXJjaC1pbnB1dCBuby1zaGFkb3dcIiBwbGFjZWhvbGRlcj1cIlNlbGVjdCBhbnkgY2l0eSBvciBsb2NhbGl0eVwiIGlkPVwidG9wTG9jYXRpb25TZWFyY2hcIiBkaXNhYmxlZD17dGhpcy5zdGF0ZS5kZXRlY3RMb2FkaW5nfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImN0LWltZyBjdC1pbWctc20gbWFwLW1hcmtlci1ibHVlXCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9tYXAtbWFya2VyLWJsdWUuc3ZnXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGVjdC1teS1sb2NhaXRvblwiIG9uQ2xpY2s9e3RoaXMuZGV0ZWN0TG9jYXRpb24uYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3QtaW1nIGN0LWltZy14c1wiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZ3BzLnN2Z1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPjwvc3Bhbj5EZXRlY3QgTXkgTG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRldGVjdExvYWRpbmcgPyA8ZGl2IGNsYXNzTmFtZT1cImZ1bGxzY3JlZW5cIj48TG9hZGVyIC8+PC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0cyAmJiB0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdHMubGVuZ3RoICYmIHRoaXMuc3RhdGUuc2hvd0xvY2F0aW9uUmVzdWx0ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDUwLCBwYWRkaW5nVG9wOiAwIH19IGNsYXNzTmFtZT1cImxvY2F0b24tZGV0ZWN0LXNjcmVlblwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3aWRnZXQgd2lkZ2V0LXBhbmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJwYW5lbC10aXRsZSB3aWRnZXQtcGFuZWwtZ3JleVwiPlNlYXJjaCBSZXN1bHQ8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1vbi1zZWFyY2gtY29udGFpbmVyIHB0LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbW9uLWxpc3RpbmctY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0IGNpdHktbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdHMubWFwKChyZXN1bHQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aX0gb25DbGljaz17dGhpcy5zZWxlY3RMb2NhdGlvbi5iaW5kKHRoaXMsIHJlc3VsdCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtLWNlbnRlciB3LTEwMFwiPntyZXN1bHQuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaXR5LWxvY1wiPkNpdHk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaCAmJiB0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnP2xhYl9jYXJkPXRydWUnKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJsYy1zZWxlY3QtdGVzdCB3aWRnZXQtcGFuZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwicGFuZWwtdGl0bGVcIj5TZWxlY3QgVGVzdDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRlc3RMaXN0ICYmIHRoaXMucHJvcHMudGVzdExpc3QubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudGVzdExpc3QuZmlsdGVyKHggPT4geC50ZXN0cy5sZW5ndGggPiAwKS5tYXAoKHRlc3QsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEV4cGFuc2lvblBhbmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25TZWFyY2g9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9e3Rlc3QuY2F0ZWdvcnlfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudExpc3Q9e3Rlc3QudGVzdHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5SWQ9e3Rlc3QuY2F0ZWdvcnlfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhZGlvQ2hlY2tlZD17dGhpcy5zdGF0ZS5yYWRpb0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdENhdGVnb3J5PXt0aGlzLnNlbGVjdENhdGVnb3J5VGVzdHMuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFRlc3Q9e3RoaXMuc3RhdGUuZGVmYXVsdFRlc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ2LWJ0biBwLTMgdi1idG4tcHJpbWFyeSBidG4tbGcgZml4ZWQgaG9yaXpvbnRhbCBib3R0b20gbm8tcm91bmQgdGV4dC1sZyBzdGlja3ktYnRuXCIgb25DbGljaz17KCkgPT4gdGhpcy5kb25lQnRuQ2xpY2soKX0+RG9uZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtYXBcIiBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoICYmIHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCc/bGFiX2NhcmQ9dHJ1ZScpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJpZ2h0QmFyIGV4dHJhQ2xhc3M9XCIgY2hhdC1mbG9hdC1idG4tMlwiIG1zZ1RlbXBsYXRlPVwiZ29sZF9nZW5lcmFsX3RlbXBsYXRlXCIvPiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSaWdodEJhciBtc2dUZW1wbGF0ZT1cImdvbGRfZ2VuZXJhbF90ZW1wbGF0ZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9uU2VhcmNoXG4iLCJpbXBvcnQgTG9jYXRpb25TZWFyY2ggZnJvbSAnLi9Mb2NhdGlvblNlYXJjaC5qcydcblxuXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvblNlYXJjaCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBzZWxlY3RMb2NhdGlvbiwgZmV0Y2hUZXN0TGlzdCwgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IExvY2F0aW9uU2VhcmNoVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL29wZC9sb2NhdGlvblNlYXJjaC9pbmRleC5qcydcblxuY2xhc3MgTG9jYXRpb25TZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJvdXRlcjogKCkgPT4gbnVsbFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExvY2F0aW9uU2VhcmNoVmlldyB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvblxuICAgIH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfT1BEXG5cbiAgICBjb25zdCB7XG4gICAgICAgIHRlc3RMaXN0XG4gICAgfSA9IHN0YXRlLlVTRVJcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNlbGVjdGVkTG9jYXRpb24sIHRlc3RMaXN0XG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RMb2NhdGlvbjogKGxvY2F0aW9uLCB0eXBlKSA9PiBkaXNwYXRjaChzZWxlY3RMb2NhdGlvbihsb2NhdGlvbiwgdHlwZSkpLFxuICAgICAgICBmZXRjaFRlc3RMaXN0OiAodGVzdElkcykgPT4gZGlzcGF0Y2goZmV0Y2hUZXN0TGlzdCh0ZXN0SWRzKSksXG4gICAgICAgIHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhOiAodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkKSA9PiBkaXNwYXRjaCh0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQpKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShMb2NhdGlvblNlYXJjaCk7XG4iXSwic291cmNlUm9vdCI6IiJ9