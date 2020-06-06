exports.ids = [38];
exports.modules = {

/***/ "./dev/js/components/diagnosis/testSelector/TestSelector.js":
/*!******************************************************************!*\
  !*** ./dev/js/components/diagnosis/testSelector/TestSelector.js ***!
  \******************************************************************/
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

var _LeftBar = __webpack_require__(/*! ../../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _reactInfiniteScroller = __webpack_require__(/*! react-infinite-scroller */ "react-infinite-scroller");

var _reactInfiniteScroller2 = _interopRequireDefault(_reactInfiniteScroller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class TestSelectorView extends _react2.default.Component {
    constructor(props) {
        super(props);

        this.hideResultIndicator = () => {
            window.scrollY > 10 ? this.setState({ moreResultIndicator: false }) : "";
        };

        const parsed = queryString.parse(this.props.location.search);

        let lab_id = this.props.selectedLab;

        this.hideResultIndicator = this.hideResultIndicator.bind(this);
        this.state = {
            hasMore: false,
            selectedLab: lab_id,
            searchResults: [],
            searchString: '',
            moreResultIndicator: true,
            page: 1,
            itemSelectedVisible: true
        };
    }

    fetchData(props) {
        if (props.selectedLab) {
            let testIds = props.lab_test_data[props.selectedLab] || [];
            testIds = testIds.map(x => x.id);

            props.getLabById(props.selectedLab, testIds);
            this.getSearchList("");

            if (this.inputRef) {
                this.inputRef.focus();
            }

            if (window) {
                window.scrollTo(0, 0);
            }

            window.addEventListener('scroll', this.hideResultIndicator);

            setTimeout(() => {
                this.setState({ hasMore: true });
            }, 0);
        }
    }

    componentWillReceiveProps(props) {
        if (props.selectedLab != this.props.selectedLab) {
            this.fetchData(props);
        }
    }

    componentDidMount() {
        this.fetchData(this.props);
    }

    toggleTest(test_to_toggle) {
        let test = Object.assign({}, test_to_toggle.test);
        test.mrp = test_to_toggle.mrp;
        test.deal_price = test_to_toggle.deal_price;
        test.extra_test = true;
        test.lab_id = this.props.selectedLab;

        this.props.toggleDiagnosisCriteria('test', test);
    }

    inputHandler(e) {
        this.setState({ searchString: e.target.value, hasMore: true, page: 1, searchResults: [] }, () => {
            this.getSearchList(this.state.searchString);
        });
        if (window) {
            window.scrollTo(0, 0);
        }
        if (e.target.value) {
            this.setState({ itemSelectedVisible: false });
        } else {
            this.setState({ itemSelectedVisible: true });
        }
    }

    getSearchList(search_string, page_no = 1, cb) {
        this.props.getLabTests(this.props.selectedLab, search_string, searchResults => {
            if (searchResults) {
                if (cb) {
                    cb(searchResults);
                } else {
                    this.setState({ searchResults: searchResults });
                }
            }
        }, page_no);
        search_string ? this.setState({ moreResultIndicator: false }) : "";
    }

    loadMore() {
        let page = this.state.page;
        this.setState({ hasMore: false, loading: true });

        this.getSearchList(this.state.searchString, page + 1, searchResults => {
            searchResults = searchResults || [];
            let results = this.state.searchResults.concat(searchResults);
            let dedupe = {};
            results = results.filter(test => {
                if (!dedupe[test.test.id]) {
                    dedupe[test.test.id] = true;
                    return true;
                }
                return false;
            });
            let more = false;
            if (results > this.state.searchResults) {
                more = true;
            }
            this.setState({ loading: false, page: page + 1, searchResults: results, hasMore: more });
        });
    }

    testInfo(test_id, url, event) {
        let lab_id = this.props.selectedLab;
        let selected_test_ids = this.props.selectedCriterias || [];
        selected_test_ids = selected_test_ids.map(x => x.id);
        let lat = 28.644800;
        let long = 77.216721;
        if (this.props.selectedLocation !== null) {
            lat = this.props.selectedLocation.geometry.location.lat;
            long = this.props.selectedLocation.geometry.location.lng;

            if (typeof lat === 'function') lat = lat();
            if (typeof long === 'function') long = long();
        }
        if (url && url != '') {
            this.props.history.push('/' + url + '?test_ids=' + test_id + '&lab_id=' + lab_id + '&selected_test_ids=' + selected_test_ids + '&lat=' + lat + '&long=' + long);
        } else {
            this.props.history.push('/search/testinfo?test_ids=' + test_id + '&lab_id=' + lab_id + '&selected_test_ids=' + selected_test_ids + '&lat=' + lat + '&long=' + long);
        }
        event.stopPropagation();
        let data = {
            'Category': 'ConsumerApp', 'Action': 'testInfoClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'test-info-click', 'pageSource': 'lab-test-page'
        };
        _gtm2.default.sendEvent({ data: data });
    }
    render() {
        let labData = this.props.LABS[this.props.selectedLab];
        let selectedTests = this.props.lab_test_data[this.props.selectedLab] || [];
        let selectedTestIds = selectedTests.map(x => x.id);
        let tests = [];
        let testIds = [];
        let allTests = this.state.searchResults;
        let testVal = {};
        let is_user_insured = false;
        let is_user_vip = false;
        let is_user_gold_vip = false;

        //Check for USER STATUS

        if (this.props.profiles && this.props.profiles[this.props.defaultProfile]) {
            is_user_insured = this.props.profiles[this.props.defaultProfile].is_insured;
            is_user_vip = this.props.profiles[this.props.defaultProfile].is_vip_member;
            is_user_gold_vip = this.props.profiles[this.props.defaultProfile].is_vip_gold_member;
        }

        if (labData) {

            selectedTests.map(criteria => {
                let found = false;
                testVal = {};
                for (let test of allTests) {
                    if (test.test.id == criteria.id) {
                        found = true;
                        testVal = test;
                    }
                }
                if (!found) {
                    testIds.push(criteria.id);
                    //GET insurance Data
                    let test_insured = [];
                    let insurance_data = {};
                    if (this.props.currentLabSelectedTests && this.props.currentLabSelectedTests.length) {
                        test_insured = this.props.currentLabSelectedTests.filter(x => x.id == criteria.id);
                        if (test_insured && test_insured.length && test_insured[0].insurance) {
                            insurance_data = test_insured[0].insurance;
                        }
                    }
                    tests.push(_extends({}, criteria, { test: criteria }, testVal, insurance_data));
                }
            });
            tests = labData && labData.tests ? labData.tests.filter(x => testIds.indexOf(x.test.id) > -1) : [];
        }

        return _react2.default.createElement(
            'div',
            { className: 'profile-body-wrap' },
            _react2.default.createElement(_DesktopProfileHeader2.default, null),
            _react2.default.createElement(
                'section',
                { className: 'container parent-section test-search-section' },
                _react2.default.createElement(
                    'div',
                    { className: 'row main-row parent-section-row' },
                    _react2.default.createElement(_LeftBar2.default, null),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12 col-md-7 col-lg-7 center-column' },
                        labData ? _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'header',
                                { className: 'skin-white fixed horizontal top location-detect-header sticky-header', style: { top: 44 } },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'container-fluid' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-12', style: { paddingTop: 10, borderBottom: '1px solid #d3d3d3' } },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'search-row' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'adon-group location-detect-field' },
                                                    _react2.default.createElement('input', { type: 'text', ref: input => {
                                                            this.inputRef = input;
                                                        }, className: 'new-srch-doc-lab', placeholder: 'Search Test', onChange: this.inputHandler.bind(this) }),
                                                    _react2.default.createElement('img', { className: 'srch-inp-img', src: "/assets" + "/img/shape-srch.svg", style: { width: 15 } })
                                                )
                                            )
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'section',
                                { className: 'wrap', style: { paddingTop: 0 } },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'widget-panel' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'panel-content pd-0' },
                                        _react2.default.createElement(
                                            'div',
                                            null,
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'label-cpn text-right' },
                                                'Coupon applies at booking summary'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'detect-my-locaiton rmv-pointer mrt-10', style: { textAlign: 'left', color: '#000', paddingLeft: "20px" } },
                                            this.state.itemSelectedVisible ? selectedTestIds.length > 1 ? `${selectedTestIds.length} Items Selected` : `${selectedTestIds.length} Item Selected` : ''
                                        ),
                                        _react2.default.createElement(
                                            'ul',
                                            { className: 'list all-test-list mrt-10', id: 'lab-tests-list' },
                                            this.state.searchResults.length ? _react2.default.createElement(
                                                _reactInfiniteScroller2.default,
                                                {
                                                    pageStart: 0,
                                                    loadMore: this.loadMore.bind(this),
                                                    hasMore: this.state.hasMore,
                                                    useWindow: true
                                                },
                                                this.state.searchString == '' ? tests.map((test, i) => {
                                                    return _react2.default.createElement(
                                                        'li',
                                                        { key: i + "srt" },
                                                        _react2.default.createElement(
                                                            'label',
                                                            { className: 'ck-bx', style: { fontWeight: 400, fontSize: 14 } },
                                                            test.test.name,
                                                            test.test.show_details ? _react2.default.createElement(
                                                                'span',
                                                                { style: { 'marginLeft': '5px', marginTop: '2px', display: 'inline-block' }, onClick: this.testInfo.bind(this, test.test.id, test.url) },
                                                                _react2.default.createElement('img', { src: 'https://cdn.docprime.com/cp/assets/img/icons/Info.svg', style: { width: '15px' } })
                                                            ) : '',
                                                            _react2.default.createElement('input', { type: 'checkbox', checked: selectedTestIds.indexOf(test.test.id) > -1, onChange: this.toggleTest.bind(this, test) }),
                                                            _react2.default.createElement('span', { className: 'checkmark' })
                                                        ),
                                                        test.insurance && test.insurance.is_insurance_covered && test.insurance.is_user_insured || test.included_in_user_plan ? _react2.default.createElement(
                                                            'div',
                                                            { className: 'test-price text-sm' },
                                                            '\u20B9 ',
                                                            0
                                                        ) : test.deal_price == test.mrp.split('.')[0] ? _react2.default.createElement(
                                                            'span',
                                                            { className: 'test-price text-sm' },
                                                            '\u20B9 ',
                                                            test.deal_price
                                                        ) : _react2.default.createElement(
                                                            'span',
                                                            { className: 'test-price text-sm' },
                                                            '\u20B9 ',
                                                            test.deal_price,
                                                            _react2.default.createElement(
                                                                'span',
                                                                { className: 'test-mrp' },
                                                                '\u20B9 ',
                                                                test.mrp.split('.')[0]
                                                            )
                                                        )
                                                    );
                                                }) : '',
                                                this.state.searchResults.map((test, i) => {
                                                    return _react2.default.createElement(
                                                        'li',
                                                        { key: i + "srt" },
                                                        _react2.default.createElement(
                                                            'label',
                                                            { className: 'ck-bx', style: { fontWeight: 400, fontSize: 14 } },
                                                            test.test.name,
                                                            test.test.show_details ? _react2.default.createElement(
                                                                'span',
                                                                { style: { 'marginLeft': '5px', marginTop: '2px', display: 'inline-block' }, onClick: this.testInfo.bind(this, test.test.id, test.url) },
                                                                _react2.default.createElement('img', { src: 'https://cdn.docprime.com/cp/assets/img/icons/Info.svg', style: { width: '15px' } })
                                                            ) : '',
                                                            _react2.default.createElement('input', { type: 'checkbox', checked: selectedTestIds.indexOf(test.test.id) > -1, onChange: this.toggleTest.bind(this, test) }),
                                                            _react2.default.createElement('span', { className: 'checkmark' })
                                                        ),
                                                        test.insurance && test.insurance.is_insurance_covered && test.insurance.is_user_insured || test.included_in_user_plan ? _react2.default.createElement(
                                                            'div',
                                                            { className: 'test-price text-sm' },
                                                            '\u20B9 ',
                                                            0
                                                        ) : is_user_vip || is_user_gold_vip ? parseInt(test.vip.vip_gold_price) + parseInt(test.vip.vip_convenience_amount) == test.mrp.split('.')[0] ? _react2.default.createElement(
                                                            'span',
                                                            { className: 'test-price text-sm' },
                                                            '\u20B9 ',
                                                            parseInt(test.vip.vip_gold_price || 0) + parseInt(test.vip.vip_convenience_amount || 0)
                                                        ) : _react2.default.createElement(
                                                            'span',
                                                            { className: 'test-price text-sm' },
                                                            '\u20B9 ',
                                                            parseInt(test.vip.vip_gold_price) + parseInt(test.vip.vip_convenience_amount),
                                                            _react2.default.createElement(
                                                                'span',
                                                                { className: 'test-mrp' },
                                                                '\u20B9 ',
                                                                test.mrp.split('.')[0]
                                                            )
                                                        ) : test.deal_price == test.mrp.split('.')[0] ? _react2.default.createElement(
                                                            'span',
                                                            { className: 'test-price text-sm' },
                                                            '\u20B9 ',
                                                            test.deal_price
                                                        ) : _react2.default.createElement(
                                                            'span',
                                                            { className: 'test-price text-sm' },
                                                            '\u20B9 ',
                                                            test.deal_price,
                                                            _react2.default.createElement(
                                                                'span',
                                                                { className: 'test-mrp' },
                                                                '\u20B9 ',
                                                                test.mrp.split('.')[0]
                                                            )
                                                        )
                                                    );
                                                })
                                            ) : ''
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'button',
                                { className: 'v-btn p-3 v-btn-primary btn-lg fixed horizontal bottom no-round text-lg sticky-btn', onClick: () => {
                                        let data = {
                                            'Category': 'ConsumerApp', 'Action': 'DoneClickedOnAddTestPage', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'done-clicked-add-test-page'
                                        };
                                        _gtm2.default.sendEvent({ data: data });
                                        this.props.history.go(-1);
                                    } },
                                'Done'
                            )
                        ) : _react2.default.createElement(_Loader2.default, null)
                    ),
                    _react2.default.createElement(_RightBar2.default, { extraClass: ' chat-float-btn-2', type: 'lab', msgTemplate: 'gold_general_template' })
                )
            )
        );
    }
}

exports.default = TestSelectorView;

/***/ }),

/***/ "./dev/js/components/diagnosis/testSelector/index.js":
/*!***********************************************************!*\
  !*** ./dev/js/components/diagnosis/testSelector/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TestSelector = __webpack_require__(/*! ./TestSelector */ "./dev/js/components/diagnosis/testSelector/TestSelector.js");

var _TestSelector2 = _interopRequireDefault(_TestSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TestSelector2.default;

/***/ }),

/***/ "./dev/js/containers/diagnosis/TestSelector.js":
/*!*****************************************************!*\
  !*** ./dev/js/containers/diagnosis/TestSelector.js ***!
  \*****************************************************/
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

var _testSelector = __webpack_require__(/*! ../../components/diagnosis/testSelector */ "./dev/js/components/diagnosis/testSelector/index.js");

var _testSelector2 = _interopRequireDefault(_testSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class TestSelector extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const parsed = queryString.parse(this.props.location.search);
        let lab_id = this.props.selectedLab || this.props.match.params.id || parsed.lab_id;

        return _react2.default.createElement(_testSelector2.default, _extends({}, this.props, { selectedLab: lab_id }));
    }
}

TestSelector.contextTypes = {
    router: () => null
};
const mapStateToProps = state => {

    const {
        lab_test_data,
        selectedLocation,
        selectedCriterias,
        filterCriteria,
        LOADED_SEARCH_CRITERIA_LAB,
        currentLabSelectedTests
    } = state.SEARCH_CRITERIA_LABS;

    const { selectedProfile, profiles, defaultProfile, is_any_user_buy_gold } = state.USER;

    let LABS = state.LABS;

    return {
        lab_test_data,
        selectedCriterias,
        selectedLocation,
        LABS,
        currentLabSelectedTests,
        selectedProfile, profiles, defaultProfile, is_any_user_buy_gold
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleDiagnosisCriteria: (type, criteria) => dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria)),
        getLabById: (labId, testIds) => dispatch((0, _index.getLabById)(labId, testIds)),
        getLabTests: (labid, search_string, callback, page) => dispatch((0, _index.getLabTests)(labid, search_string, callback, page))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TestSelector);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvdGVzdFNlbGVjdG9yL1Rlc3RTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvdGVzdFNlbGVjdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL2RpYWdub3Npcy9UZXN0U2VsZWN0b3IuanMiXSwibmFtZXMiOlsicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiVGVzdFNlbGVjdG9yVmlldyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImhpZGVSZXN1bHRJbmRpY2F0b3IiLCJ3aW5kb3ciLCJzY3JvbGxZIiwic2V0U3RhdGUiLCJtb3JlUmVzdWx0SW5kaWNhdG9yIiwicGFyc2VkIiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsImxhYl9pZCIsInNlbGVjdGVkTGFiIiwiYmluZCIsInN0YXRlIiwiaGFzTW9yZSIsInNlYXJjaFJlc3VsdHMiLCJzZWFyY2hTdHJpbmciLCJwYWdlIiwiaXRlbVNlbGVjdGVkVmlzaWJsZSIsImZldGNoRGF0YSIsInRlc3RJZHMiLCJsYWJfdGVzdF9kYXRhIiwibWFwIiwieCIsImlkIiwiZ2V0TGFiQnlJZCIsImdldFNlYXJjaExpc3QiLCJpbnB1dFJlZiIsImZvY3VzIiwic2Nyb2xsVG8iLCJhZGRFdmVudExpc3RlbmVyIiwic2V0VGltZW91dCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJjb21wb25lbnREaWRNb3VudCIsInRvZ2dsZVRlc3QiLCJ0ZXN0X3RvX3RvZ2dsZSIsInRlc3QiLCJPYmplY3QiLCJhc3NpZ24iLCJtcnAiLCJkZWFsX3ByaWNlIiwiZXh0cmFfdGVzdCIsInRvZ2dsZURpYWdub3Npc0NyaXRlcmlhIiwiaW5wdXRIYW5kbGVyIiwiZSIsInRhcmdldCIsInZhbHVlIiwic2VhcmNoX3N0cmluZyIsInBhZ2Vfbm8iLCJjYiIsImdldExhYlRlc3RzIiwibG9hZE1vcmUiLCJsb2FkaW5nIiwicmVzdWx0cyIsImNvbmNhdCIsImRlZHVwZSIsImZpbHRlciIsIm1vcmUiLCJ0ZXN0SW5mbyIsInRlc3RfaWQiLCJ1cmwiLCJldmVudCIsInNlbGVjdGVkX3Rlc3RfaWRzIiwic2VsZWN0ZWRDcml0ZXJpYXMiLCJsYXQiLCJsb25nIiwic2VsZWN0ZWRMb2NhdGlvbiIsImdlb21ldHJ5IiwibG5nIiwiaGlzdG9yeSIsInB1c2giLCJzdG9wUHJvcGFnYXRpb24iLCJkYXRhIiwiR1RNIiwiZ2V0VXNlcklkIiwic2VuZEV2ZW50IiwicmVuZGVyIiwibGFiRGF0YSIsIkxBQlMiLCJzZWxlY3RlZFRlc3RzIiwic2VsZWN0ZWRUZXN0SWRzIiwidGVzdHMiLCJhbGxUZXN0cyIsInRlc3RWYWwiLCJpc191c2VyX2luc3VyZWQiLCJpc191c2VyX3ZpcCIsImlzX3VzZXJfZ29sZF92aXAiLCJwcm9maWxlcyIsImRlZmF1bHRQcm9maWxlIiwiaXNfaW5zdXJlZCIsImlzX3ZpcF9tZW1iZXIiLCJpc192aXBfZ29sZF9tZW1iZXIiLCJjcml0ZXJpYSIsImZvdW5kIiwidGVzdF9pbnN1cmVkIiwiaW5zdXJhbmNlX2RhdGEiLCJjdXJyZW50TGFiU2VsZWN0ZWRUZXN0cyIsImxlbmd0aCIsImluc3VyYW5jZSIsImluZGV4T2YiLCJ0b3AiLCJwYWRkaW5nVG9wIiwiYm9yZGVyQm90dG9tIiwiaW5wdXQiLCJBU1NFVFNfQkFTRV9VUkwiLCJ3aWR0aCIsInRleHRBbGlnbiIsImNvbG9yIiwicGFkZGluZ0xlZnQiLCJpIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibmFtZSIsInNob3dfZGV0YWlscyIsIm1hcmdpblRvcCIsImRpc3BsYXkiLCJpc19pbnN1cmFuY2VfY292ZXJlZCIsImluY2x1ZGVkX2luX3VzZXJfcGxhbiIsInNwbGl0IiwicGFyc2VJbnQiLCJ2aXAiLCJ2aXBfZ29sZF9wcmljZSIsInZpcF9jb252ZW5pZW5jZV9hbW91bnQiLCJnbyIsIlRlc3RTZWxlY3RvciIsIm1hdGNoIiwicGFyYW1zIiwiY29udGV4dFR5cGVzIiwicm91dGVyIiwibWFwU3RhdGVUb1Byb3BzIiwiZmlsdGVyQ3JpdGVyaWEiLCJMT0FERURfU0VBUkNIX0NSSVRFUklBX0xBQiIsIlNFQVJDSF9DUklURVJJQV9MQUJTIiwic2VsZWN0ZWRQcm9maWxlIiwiaXNfYW55X3VzZXJfYnV5X2dvbGQiLCJVU0VSIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJ0eXBlIiwibGFiSWQiLCJsYWJpZCIsImNhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUNBLE1BQU1BLGNBQWNDLG1CQUFPQSxDQUFDLGtDQUFSLENBQXBCOztBQUVBLE1BQU1DLGdCQUFOLFNBQStCQyxnQkFBTUMsU0FBckMsQ0FBK0M7QUFDM0NDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjs7QUFEZSxhQXFEbkJDLG1CQXJEbUIsR0FxREcsTUFBTTtBQUN4QkMsbUJBQU9DLE9BQVAsR0FBaUIsRUFBakIsR0FBc0IsS0FBS0MsUUFBTCxDQUFjLEVBQUVDLHFCQUFxQixLQUF2QixFQUFkLENBQXRCLEdBQXNFLEVBQXRFO0FBQ0gsU0F2RGtCOztBQUdmLGNBQU1DLFNBQVNaLFlBQVlhLEtBQVosQ0FBa0IsS0FBS1AsS0FBTCxDQUFXUSxRQUFYLENBQW9CQyxNQUF0QyxDQUFmOztBQUVBLFlBQUlDLFNBQVMsS0FBS1YsS0FBTCxDQUFXVyxXQUF4Qjs7QUFFQSxhQUFLVixtQkFBTCxHQUEyQixLQUFLQSxtQkFBTCxDQUF5QlcsSUFBekIsQ0FBOEIsSUFBOUIsQ0FBM0I7QUFDQSxhQUFLQyxLQUFMLEdBQWE7QUFDVEMscUJBQVMsS0FEQTtBQUVUSCx5QkFBYUQsTUFGSjtBQUdUSywyQkFBZSxFQUhOO0FBSVRDLDBCQUFjLEVBSkw7QUFLVFgsaUNBQXFCLElB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YSxDQUFDMEYsS0FBRCxFQUFRN0YsYUFBUixFQUF1QjhGLFFBQXZCLEVBQWlDNUgsSUFBakMsS0FBMEN3SCxTQUFTLHdCQUFZRyxLQUFaLEVBQW1CN0YsYUFBbkIsRUFBa0M4RixRQUFsQyxFQUE0QzVILElBQTVDLENBQVQ7QUFIcEQsS0FBUDtBQUtILENBTkQ7O2tCQVNlLHlCQUFRZ0gsZUFBUixFQUF5Qk8sa0JBQXpCLEVBQTZDWixZQUE3QyxDIiwiZmlsZSI6IjM4LnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvTG9hZGVyJ1xuXG5pbXBvcnQgTGVmdEJhciBmcm9tICcuLi8uLi9jb21tb25zL0xlZnRCYXInXG5pbXBvcnQgUmlnaHRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9SaWdodEJhcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IEluZmluaXRlU2Nyb2xsIGZyb20gJ3JlYWN0LWluZmluaXRlLXNjcm9sbGVyJztcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cbmNsYXNzIFRlc3RTZWxlY3RvclZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXG4gICAgICAgIGxldCBsYWJfaWQgPSB0aGlzLnByb3BzLnNlbGVjdGVkTGFiXG5cbiAgICAgICAgdGhpcy5oaWRlUmVzdWx0SW5kaWNhdG9yID0gdGhpcy5oaWRlUmVzdWx0SW5kaWNhdG9yLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBoYXNNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIHNlbGVjdGVkTGFiOiBsYWJfaWQsXG4gICAgICAgICAgICBzZWFyY2hSZXN1bHRzOiBbXSxcbiAgICAgICAgICAgIHNlYXJjaFN0cmluZzogJycsXG4gICAgICAgICAgICBtb3JlUmVzdWx0SW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgICAgIGl0ZW1TZWxlY3RlZFZpc2libGU6IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZldGNoRGF0YShwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMuc2VsZWN0ZWRMYWIpIHtcbiAgICAgICAgICAgIGxldCB0ZXN0SWRzID0gcHJvcHMubGFiX3Rlc3RfZGF0YVtwcm9wcy5zZWxlY3RlZExhYl0gfHwgW11cbiAgICAgICAgICAgIHRlc3RJZHMgPSB0ZXN0SWRzLm1hcCh4ID0+IHguaWQpXG5cbiAgICAgICAgICAgIHByb3BzLmdldExhYkJ5SWQocHJvcHMuc2VsZWN0ZWRMYWIsIHRlc3RJZHMpXG4gICAgICAgICAgICB0aGlzLmdldFNlYXJjaExpc3QoXCJcIilcblxuICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRSZWYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0UmVmLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGlkZVJlc3VsdEluZGljYXRvcik7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNNb3JlOiB0cnVlIH0pXG4gICAgICAgICAgICB9LCAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMuc2VsZWN0ZWRMYWIgIT0gdGhpcy5wcm9wcy5zZWxlY3RlZExhYikge1xuICAgICAgICAgICAgdGhpcy5mZXRjaERhdGEocHJvcHMpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hEYXRhKHRoaXMucHJvcHMpXG4gICAgfVxuXG4gICAgaGlkZVJlc3VsdEluZGljYXRvciA9ICgpID0+IHtcbiAgICAgICAgd2luZG93LnNjcm9sbFkgPiAxMCA/IHRoaXMuc2V0U3RhdGUoeyBtb3JlUmVzdWx0SW5kaWNhdG9yOiBmYWxzZSB9KSA6IFwiXCJcbiAgICB9XG5cbiAgICB0b2dnbGVUZXN0KHRlc3RfdG9fdG9nZ2xlKSB7XG4gICAgICAgIGxldCB0ZXN0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGVzdF90b190b2dnbGUudGVzdClcbiAgICAgICAgdGVzdC5tcnAgPSB0ZXN0X3RvX3RvZ2dsZS5tcnBcbiAgICAgICAgdGVzdC5kZWFsX3ByaWNlID0gdGVzdF90b190b2dnbGUuZGVhbF9wcmljZVxuICAgICAgICB0ZXN0LmV4dHJhX3Rlc3QgPSB0cnVlXG4gICAgICAgIHRlc3QubGFiX2lkID0gdGhpcy5wcm9wcy5zZWxlY3RlZExhYlxuXG4gICAgICAgIHRoaXMucHJvcHMudG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEoJ3Rlc3QnLCB0ZXN0KVxuICAgIH1cblxuICAgIGlucHV0SGFuZGxlcihlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hTdHJpbmc6IGUudGFyZ2V0LnZhbHVlLCBoYXNNb3JlOiB0cnVlLCBwYWdlOiAxLCBzZWFyY2hSZXN1bHRzOiBbXSB9LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdldFNlYXJjaExpc3QodGhpcy5zdGF0ZS5zZWFyY2hTdHJpbmcpXG4gICAgICAgIH0pXG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGl0ZW1TZWxlY3RlZFZpc2libGU6IGZhbHNlIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXRlbVNlbGVjdGVkVmlzaWJsZTogdHJ1ZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U2VhcmNoTGlzdChzZWFyY2hfc3RyaW5nLCBwYWdlX25vID0gMSwgY2IpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5nZXRMYWJUZXN0cyh0aGlzLnByb3BzLnNlbGVjdGVkTGFiLCBzZWFyY2hfc3RyaW5nLCAoc2VhcmNoUmVzdWx0cykgPT4ge1xuICAgICAgICAgICAgaWYgKHNlYXJjaFJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICAgICAgICAgICAgY2Ioc2VhcmNoUmVzdWx0cylcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoUmVzdWx0czogc2VhcmNoUmVzdWx0cyB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgcGFnZV9ubylcbiAgICAgICAgc2VhcmNoX3N0cmluZyA/IHRoaXMuc2V0U3RhdGUoeyBtb3JlUmVzdWx0SW5kaWNhdG9yOiBmYWxzZSB9KSA6IFwiXCJcbiAgICB9XG5cbiAgICBsb2FkTW9yZSgpIHtcbiAgICAgICAgbGV0IHBhZ2UgPSB0aGlzLnN0YXRlLnBhZ2VcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhhc01vcmU6IGZhbHNlLCBsb2FkaW5nOiB0cnVlIH0pXG5cbiAgICAgICAgdGhpcy5nZXRTZWFyY2hMaXN0KHRoaXMuc3RhdGUuc2VhcmNoU3RyaW5nLCBwYWdlICsgMSwgKHNlYXJjaFJlc3VsdHMpID0+IHtcbiAgICAgICAgICAgIHNlYXJjaFJlc3VsdHMgPSBzZWFyY2hSZXN1bHRzIHx8IFtdXG4gICAgICAgICAgICBsZXQgcmVzdWx0cyA9IHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0cy5jb25jYXQoc2VhcmNoUmVzdWx0cylcbiAgICAgICAgICAgIGxldCBkZWR1cGUgPSB7fVxuICAgICAgICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuZmlsdGVyKCh0ZXN0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFkZWR1cGVbdGVzdC50ZXN0LmlkXSkge1xuICAgICAgICAgICAgICAgICAgICBkZWR1cGVbdGVzdC50ZXN0LmlkXSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgbGV0IG1vcmUgPSBmYWxzZVxuICAgICAgICAgICAgaWYgKHJlc3VsdHMgPiB0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICBtb3JlID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBwYWdlOiBwYWdlICsgMSwgc2VhcmNoUmVzdWx0czogcmVzdWx0cywgaGFzTW9yZTogbW9yZSB9KVxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgdGVzdEluZm8odGVzdF9pZCwgdXJsLCBldmVudCkge1xuICAgICAgICBsZXQgbGFiX2lkID0gdGhpcy5wcm9wcy5zZWxlY3RlZExhYlxuICAgICAgICBsZXQgc2VsZWN0ZWRfdGVzdF9pZHMgPSB0aGlzLnByb3BzLnNlbGVjdGVkQ3JpdGVyaWFzIHx8IFtdXG4gICAgICAgIHNlbGVjdGVkX3Rlc3RfaWRzID0gc2VsZWN0ZWRfdGVzdF9pZHMubWFwKHggPT4geC5pZClcbiAgICAgICAgbGV0IGxhdCA9IDI4LjY0NDgwMFxuICAgICAgICBsZXQgbG9uZyA9IDc3LjIxNjcyMVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICBsYXQgPSB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubGF0XG4gICAgICAgICAgICBsb25nID0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLmdlb21ldHJ5LmxvY2F0aW9uLmxuZ1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxhdCA9PT0gJ2Z1bmN0aW9uJykgbGF0ID0gbGF0KClcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbG9uZyA9PT0gJ2Z1bmN0aW9uJykgbG9uZyA9IGxvbmcoKVxuICAgICAgICB9XG4gICAgICAgIGlmICh1cmwgJiYgdXJsICE9ICcnKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycgKyB1cmwgKyAnP3Rlc3RfaWRzPScgKyB0ZXN0X2lkICsgJyZsYWJfaWQ9JyArIGxhYl9pZCArICcmc2VsZWN0ZWRfdGVzdF9pZHM9JyArIHNlbGVjdGVkX3Rlc3RfaWRzICsgJyZsYXQ9JyArIGxhdCArICcmbG9uZz0nICsgbG9uZylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvc2VhcmNoL3Rlc3RpbmZvP3Rlc3RfaWRzPScgKyB0ZXN0X2lkICsgJyZsYWJfaWQ9JyArIGxhYl9pZCArICcmc2VsZWN0ZWRfdGVzdF9pZHM9JyArIHNlbGVjdGVkX3Rlc3RfaWRzICsgJyZsYXQ9JyArIGxhdCArICcmbG9uZz0nICsgbG9uZylcbiAgICAgICAgfVxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAndGVzdEluZm9DbGljaycsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3Rlc3QtaW5mby1jbGljaycsICdwYWdlU291cmNlJzogJ2xhYi10ZXN0LXBhZ2UnXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbGFiRGF0YSA9IHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXVxuICAgICAgICBsZXQgc2VsZWN0ZWRUZXN0cyA9IHRoaXMucHJvcHMubGFiX3Rlc3RfZGF0YVt0aGlzLnByb3BzLnNlbGVjdGVkTGFiXSB8fCBbXVxuICAgICAgICBsZXQgc2VsZWN0ZWRUZXN0SWRzID0gc2VsZWN0ZWRUZXN0cy5tYXAoeCA9PiB4LmlkKVxuICAgICAgICBsZXQgdGVzdHMgPSBbXVxuICAgICAgICBsZXQgdGVzdElkcyA9IFtdXG4gICAgICAgIGxldCBhbGxUZXN0cyA9IHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0c1xuICAgICAgICBsZXQgdGVzdFZhbCA9IHt9XG4gICAgICAgIGxldCBpc191c2VyX2luc3VyZWQgPSBmYWxzZVxuICAgICAgICBsZXQgaXNfdXNlcl92aXAgPSBmYWxzZVxuICAgICAgICBsZXQgaXNfdXNlcl9nb2xkX3ZpcCA9IGZhbHNlXG5cbiAgICAgICAgLy9DaGVjayBmb3IgVVNFUiBTVEFUVVNcblxuICAgICAgICBpZih0aGlzLnByb3BzLnByb2ZpbGVzICYmIHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0pe1xuICAgICAgICAgICAgaXNfdXNlcl9pbnN1cmVkID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXS5pc19pbnN1cmVkXG4gICAgICAgICAgICBpc191c2VyX3ZpcCA9IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0uaXNfdmlwX21lbWJlclxuICAgICAgICAgICAgaXNfdXNlcl9nb2xkX3ZpcCA9IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0uaXNfdmlwX2dvbGRfbWVtYmVyXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGFiRGF0YSkge1xuXG4gICAgICAgICAgICBzZWxlY3RlZFRlc3RzLm1hcCgoY3JpdGVyaWEpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRlc3RWYWwgPSB7fVxuICAgICAgICAgICAgICAgIGZvciAobGV0IHRlc3Qgb2YgYWxsVGVzdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlc3QudGVzdC5pZCA9PSBjcml0ZXJpYS5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXN0VmFsID0gdGVzdFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGVzdElkcy5wdXNoKGNyaXRlcmlhLmlkKVxuICAgICAgICAgICAgICAgICAgICAvL0dFVCBpbnN1cmFuY2UgRGF0YVxuICAgICAgICAgICAgICAgICAgICBsZXQgdGVzdF9pbnN1cmVkID0gW11cbiAgICAgICAgICAgICAgICAgICAgbGV0IGluc3VyYW5jZV9kYXRhID0ge31cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY3VycmVudExhYlNlbGVjdGVkVGVzdHMgJiYgdGhpcy5wcm9wcy5jdXJyZW50TGFiU2VsZWN0ZWRUZXN0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlc3RfaW5zdXJlZCA9IHRoaXMucHJvcHMuY3VycmVudExhYlNlbGVjdGVkVGVzdHMuZmlsdGVyKCh4ID0+IHguaWQgPT0gY3JpdGVyaWEuaWQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlc3RfaW5zdXJlZCAmJiB0ZXN0X2luc3VyZWQubGVuZ3RoICYmIHRlc3RfaW5zdXJlZFswXS5pbnN1cmFuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN1cmFuY2VfZGF0YSA9IHRlc3RfaW5zdXJlZFswXS5pbnN1cmFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0ZXN0cy5wdXNoKHsgLi4uY3JpdGVyaWEsIHRlc3Q6IGNyaXRlcmlhLCAuLi50ZXN0VmFsLCAuLi5pbnN1cmFuY2VfZGF0YSB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0ZXN0cyA9IGxhYkRhdGEgJiYgbGFiRGF0YS50ZXN0cyA/IGxhYkRhdGEudGVzdHMuZmlsdGVyKCh4ID0+IHRlc3RJZHMuaW5kZXhPZih4LnRlc3QuaWQpID4gLTEpKSA6IFtdXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIHBhcmVudC1zZWN0aW9uIHRlc3Qtc2VhcmNoLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGVmdEJhciAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctNyBjZW50ZXItY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJEYXRhID9cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInNraW4td2hpdGUgZml4ZWQgaG9yaXpvbnRhbCB0b3AgbG9jYXRpb24tZGV0ZWN0LWhlYWRlciBzdGlja3ktaGVhZGVyXCIgc3R5bGU9e3sgdG9wOiA0NCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIiBzdHlsZT17eyBwYWRkaW5nVG9wOiAxMCwgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNkM2QzZDMnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRvbi1ncm91cCBsb2NhdGlvbi1kZXRlY3QtZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9eyhpbnB1dCkgPT4geyB0aGlzLmlucHV0UmVmID0gaW5wdXQ7IH19IGNsYXNzTmFtZT1cIm5ldy1zcmNoLWRvYy1sYWJcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBUZXN0XCIgb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzcmNoLWlucC1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zaGFwZS1zcmNoLnN2Z1wifSBzdHlsZT17eyB3aWR0aDogMTUgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIndyYXBcIiBzdHlsZT17eyBwYWRkaW5nVG9wOiAwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1wYW5lbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1jb250ZW50IHBkLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsYWJlbC1jcG4gdGV4dC1yaWdodFwiPkNvdXBvbiBhcHBsaWVzIGF0IGJvb2tpbmcgc3VtbWFyeTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGVjdC1teS1sb2NhaXRvbiBybXYtcG9pbnRlciBtcnQtMTBcIiBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgY29sb3I6ICcjMDAwJywgcGFkZGluZ0xlZnQ6IFwiMjBweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLml0ZW1TZWxlY3RlZFZpc2libGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVGVzdElkcy5sZW5ndGggPiAxID8gYCR7c2VsZWN0ZWRUZXN0SWRzLmxlbmd0aH0gSXRlbXMgU2VsZWN0ZWRgIDogYCR7c2VsZWN0ZWRUZXN0SWRzLmxlbmd0aH0gSXRlbSBTZWxlY3RlZGAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QgYWxsLXRlc3QtbGlzdCBtcnQtMTBcIiBpZD1cImxhYi10ZXN0cy1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0cy5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbmZpbml0ZVNjcm9sbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlU3RhcnQ9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRNb3JlPXt0aGlzLmxvYWRNb3JlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc01vcmU9e3RoaXMuc3RhdGUuaGFzTW9yZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlV2luZG93PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWFyY2hTdHJpbmcgPT0gJycgPyB0ZXN0cy5tYXAoKHRlc3QsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aSArIFwic3J0XCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2stYnhcIiBzdHlsZT17eyBmb250V2VpZ2h0OiA0MDAsIGZvbnRTaXplOiAxNCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXN0LnRlc3QubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXN0LnRlc3Quc2hvd19kZXRhaWxzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyAnbWFyZ2luTGVmdCc6ICc1cHgnLCBtYXJnaW5Ub3A6ICcycHgnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fSBvbkNsaWNrPXt0aGlzLnRlc3RJbmZvLmJpbmQodGhpcywgdGVzdC50ZXN0LmlkLCB0ZXN0LnVybCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9jcC9hc3NldHMvaW1nL2ljb25zL0luZm8uc3ZnXCIgc3R5bGU9e3t3aWR0aDonMTVweCd9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtzZWxlY3RlZFRlc3RJZHMuaW5kZXhPZih0ZXN0LnRlc3QuaWQpID4gLTF9IG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZVRlc3QuYmluZCh0aGlzLCB0ZXN0KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3QuaW5zdXJhbmNlICYmIHRlc3QuaW5zdXJhbmNlLmlzX2luc3VyYW5jZV9jb3ZlcmVkICYmIHRlc3QuaW5zdXJhbmNlLmlzX3VzZXJfaW5zdXJlZCB8fCB0ZXN0LmluY2x1ZGVkX2luX3VzZXJfcGxhbiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0LXByaWNlIHRleHQtc21cIj4mIzgzNzc7IHswfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXN0LmRlYWxfcHJpY2UgPT0gdGVzdC5tcnAuc3BsaXQoJy4nKVswXSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlc3QtcHJpY2UgdGV4dC1zbVwiPiYjODM3Nzsge3Rlc3QuZGVhbF9wcmljZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVzdC1wcmljZSB0ZXh0LXNtXCI+JiM4Mzc3OyB7dGVzdC5kZWFsX3ByaWNlfTxzcGFuIGNsYXNzTmFtZT1cInRlc3QtbXJwXCI+JiM4Mzc3OyB7dGVzdC5tcnAuc3BsaXQoJy4nKVswXX08L3NwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0cy5tYXAoKHRlc3QsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aSArIFwic3J0XCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2stYnhcIiBzdHlsZT17eyBmb250V2VpZ2h0OiA0MDAsIGZvbnRTaXplOiAxNCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXN0LnRlc3QubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXN0LnRlc3Quc2hvd19kZXRhaWxzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyAnbWFyZ2luTGVmdCc6ICc1cHgnLCBtYXJnaW5Ub3A6ICcycHgnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fSBvbkNsaWNrPXt0aGlzLnRlc3RJbmZvLmJpbmQodGhpcywgdGVzdC50ZXN0LmlkLCB0ZXN0LnVybCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9jcC9hc3NldHMvaW1nL2ljb25zL0luZm8uc3ZnXCIgc3R5bGU9e3t3aWR0aDonMTVweCd9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtzZWxlY3RlZFRlc3RJZHMuaW5kZXhPZih0ZXN0LnRlc3QuaWQpID4gLTF9IG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZVRlc3QuYmluZCh0aGlzLCB0ZXN0KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3QuaW5zdXJhbmNlICYmIHRlc3QuaW5zdXJhbmNlLmlzX2luc3VyYW5jZV9jb3ZlcmVkICYmIHRlc3QuaW5zdXJhbmNlLmlzX3VzZXJfaW5zdXJlZCB8fCB0ZXN0LmluY2x1ZGVkX2luX3VzZXJfcGxhbiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0LXByaWNlIHRleHQtc21cIj4mIzgzNzc7IHswfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDooaXNfdXNlcl92aXAgfHwgaXNfdXNlcl9nb2xkX3ZpcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8oIChwYXJzZUludCh0ZXN0LnZpcC52aXBfZ29sZF9wcmljZSkgKyBwYXJzZUludCh0ZXN0LnZpcC52aXBfY29udmVuaWVuY2VfYW1vdW50KSApID09IHRlc3QubXJwLnNwbGl0KCcuJylbMF0gKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlc3QtcHJpY2UgdGV4dC1zbVwiPiYjODM3Nzsge3BhcnNlSW50KHRlc3QudmlwLnZpcF9nb2xkX3ByaWNlfHwwKSArIHBhcnNlSW50KHRlc3QudmlwLnZpcF9jb252ZW5pZW5jZV9hbW91bnR8fDApfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxzcGFuIGNsYXNzTmFtZT1cInRlc3QtcHJpY2UgdGV4dC1zbVwiPiYjODM3NzsgeyBwYXJzZUludCh0ZXN0LnZpcC52aXBfZ29sZF9wcmljZSkgKyBwYXJzZUludCh0ZXN0LnZpcC52aXBfY29udmVuaWVuY2VfYW1vdW50KSB9PHNwYW4gY2xhc3NOYW1lPVwidGVzdC1tcnBcIj4mIzgzNzc7IHt0ZXN0Lm1ycC5zcGxpdCgnLicpWzBdfTwvc3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dGVzdC5kZWFsX3ByaWNlID09IHRlc3QubXJwLnNwbGl0KCcuJylbMF0gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXN0LXByaWNlIHRleHQtc21cIj4mIzgzNzc7IHt0ZXN0LmRlYWxfcHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PHNwYW4gY2xhc3NOYW1lPVwidGVzdC1wcmljZSB0ZXh0LXNtXCI+JiM4Mzc3OyB7dGVzdC5kZWFsX3ByaWNlfTxzcGFuIGNsYXNzTmFtZT1cInRlc3QtbXJwXCI+JiM4Mzc3OyB7dGVzdC5tcnAuc3BsaXQoJy4nKVswXX08L3NwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5maW5pdGVTY3JvbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInYtYnRuIHAtMyB2LWJ0bi1wcmltYXJ5IGJ0bi1sZyBmaXhlZCBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCB0ZXh0LWxnIHN0aWNreS1idG5cIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdEb25lQ2xpY2tlZE9uQWRkVGVzdFBhZ2UnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdkb25lLWNsaWNrZWQtYWRkLXRlc3QtcGFnZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkuZ28oLTEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+RG9uZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogPExvYWRlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1vcmVSZXN1bHRJbmRpY2F0b3IgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3JlLXRlc3QtcmVzdWx0cy1kaXYgZC1ub25lIGQtbGctZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPm1vcmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kb3duYXJyb3dfd2hpdGUuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmlnaHRCYXIgZXh0cmFDbGFzcz1cIiBjaGF0LWZsb2F0LWJ0bi0yXCIgdHlwZT1cImxhYlwiIG1zZ1RlbXBsYXRlPVwiZ29sZF9nZW5lcmFsX3RlbXBsYXRlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVzdFNlbGVjdG9yVmlld1xuIiwiaW1wb3J0IFRlc3RTZWxlY3RvciBmcm9tICcuL1Rlc3RTZWxlY3RvcidcbmV4cG9ydCBkZWZhdWx0IFRlc3RTZWxlY3RvciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBnZXRMYWJCeUlkLCB0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSwgZ2V0TGFiVGVzdHMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcblxuaW1wb3J0IFRlc3RTZWxlY3RvclZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kaWFnbm9zaXMvdGVzdFNlbGVjdG9yJ1xuXG5jbGFzcyBUZXN0U2VsZWN0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJvdXRlcjogKCkgPT4gbnVsbFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCBsYWJfaWQgPSB0aGlzLnByb3BzLnNlbGVjdGVkTGFiIHx8IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkIHx8IHBhcnNlZC5sYWJfaWRcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRlc3RTZWxlY3RvclZpZXcgey4uLnRoaXMucHJvcHN9IHNlbGVjdGVkTGFiPXtsYWJfaWR9IC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcblxuICAgIGNvbnN0IHtcbiAgICAgICAgbGFiX3Rlc3RfZGF0YSxcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgc2VsZWN0ZWRDcml0ZXJpYXMsXG4gICAgICAgIGZpbHRlckNyaXRlcmlhLFxuICAgICAgICBMT0FERURfU0VBUkNIX0NSSVRFUklBX0xBQixcbiAgICAgICAgY3VycmVudExhYlNlbGVjdGVkVGVzdHNcbiAgICB9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX0xBQlNcblxuICAgIGNvbnN0IHsgc2VsZWN0ZWRQcm9maWxlLCBwcm9maWxlcywgZGVmYXVsdFByb2ZpbGUsIGlzX2FueV91c2VyX2J1eV9nb2xkIH0gPSBzdGF0ZS5VU0VSXG5cblxuICAgIGxldCBMQUJTID0gc3RhdGUuTEFCU1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGFiX3Rlc3RfZGF0YSxcbiAgICAgICAgc2VsZWN0ZWRDcml0ZXJpYXMsXG4gICAgICAgIHNlbGVjdGVkTG9jYXRpb24sXG4gICAgICAgIExBQlMsXG4gICAgICAgIGN1cnJlbnRMYWJTZWxlY3RlZFRlc3RzLFxuICAgICAgICBzZWxlY3RlZFByb2ZpbGUsIHByb2ZpbGVzLCBkZWZhdWx0UHJvZmlsZSwgaXNfYW55X3VzZXJfYnV5X2dvbGRcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhOiAodHlwZSwgY3JpdGVyaWEpID0+IGRpc3BhdGNoKHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKHR5cGUsIGNyaXRlcmlhKSksXG4gICAgICAgIGdldExhYkJ5SWQ6IChsYWJJZCwgdGVzdElkcykgPT4gZGlzcGF0Y2goZ2V0TGFiQnlJZChsYWJJZCwgdGVzdElkcykpLFxuICAgICAgICBnZXRMYWJUZXN0czogKGxhYmlkLCBzZWFyY2hfc3RyaW5nLCBjYWxsYmFjaywgcGFnZSkgPT4gZGlzcGF0Y2goZ2V0TGFiVGVzdHMobGFiaWQsIHNlYXJjaF9zdHJpbmcsIGNhbGxiYWNrLCBwYWdlKSlcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVGVzdFNlbGVjdG9yKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=