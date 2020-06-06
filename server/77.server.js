exports.ids = [77];
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

/***/ "./dev/js/components/commons/hospitalList/hospitalInventoryView.js":
/*!*************************************************************************!*\
  !*** ./dev/js/components/commons/hospitalList/hospitalInventoryView.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _DesktopProfileHeader = __webpack_require__(/*! ../DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _HelmetTags = __webpack_require__(/*! ../HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

var _config = __webpack_require__(/*! ../../../config/config */ "./dev/js/config/config.js");

var _config2 = _interopRequireDefault(_config);

var _footer = __webpack_require__(/*! ../Home/footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _Loader = __webpack_require__(/*! ../Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class HospitalInventoryView extends _react2.default.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        let parsed = '';
        if (this.props.location.search) {
            parsed = queryString.parse(this.props.location.search);
        }
        this.getHospitalInventoryList(parsed.city || 'Delhi');
    }

    getHospitalInventoryList(city) {
        this.props.getHospitalInventoryList(city);
    }

    render() {
        return _react2.default.createElement(
            'div',
            { className: 'profile-body-wrap' },
            _react2.default.createElement(_DesktopProfileHeader2.default, this.props),
            _react2.default.createElement(_HelmetTags2.default, { tagsData: {
                    title: '',
                    description: '',
                    canonicalUrl: `${_config2.default.API_BASE_URL}${this.props.match.url}`
                } }),
            _react2.default.createElement(
                'section',
                { className: 'container dp-container-div' },
                _react2.default.createElement(
                    'div',
                    { className: 'row main-row parent-section-row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12' },
                        _react2.default.createElement(
                            'ul',
                            { className: 'mrb-10 mrt-20 breadcrumb-list', style: { wordBreak: 'break-word' } },
                            _react2.default.createElement(
                                'li',
                                { className: 'breadcrumb-list-item' },
                                _react2.default.createElement(
                                    'a',
                                    { href: '/', onClick: e => {
                                            e.preventDefault();
                                            this.props.history.push('/');
                                        } },
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'fw-500 breadcrumb-title breadcrumb-colored-title' },
                                        'Home'
                                    )
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'breadcrumb-arrow' },
                                    '>'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'breadcrumb-list-item' },
                                _react2.default.createElement(
                                    'a',
                                    { href: '/', onClick: e => {
                                            e.preventDefault();
                                            this.props.history.push('/hospitals');
                                        } },
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'fw-500 breadcrumb-title breadcrumb-colored-title' },
                                        'Hospitals in India'
                                    )
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'breadcrumb-arrow' },
                                    '>'
                                )
                            ),
                            this.props.hospitalLocalityList && this.props.hospitalLocalityList.name ? _react2.default.createElement(
                                'li',
                                { className: 'breadcrumb-list-item' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'fw-500 breadcrumb-title' },
                                    this.props.hospitalLocalityList.name
                                )
                            ) : ''
                        ),
                        this.props.hospitalLocalityList && this.props.hospitalLocalityList.name && this.props.hospitalLocalityList.url ? _react2.default.createElement(
                            'div',
                            { style: { cursor: 'pointer' }, onClick: () => this.props.history.push(`/${this.props.hospitalLocalityList.url}`) },
                            _react2.default.createElement(
                                'h1',
                                { className: 'fw-500 sitemap-title' },
                                this.props.hospitalLocalityList.name
                            )
                        ) : '',
                        _react2.default.createElement(
                            'div',
                            { className: 'row sitemap-row' },
                            this.props.hospitalListLoading ? _react2.default.createElement(_Loader2.default, null) : this.props.hospitalLocalityList && this.props.hospitalLocalityList.result && this.props.hospitalLocalityList.result.length ? this.props.hospitalLocalityList.result.map((locality, index) => {
                                return _react2.default.createElement(
                                    'div',
                                    { key: index, className: 'col-12 col-md-6 tests-brdr-btm' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'anchor-data-style', onClick: () => this.props.history.push(`/${locality.url ? locality.url : `/`}`) },
                                        locality.url ? _react2.default.createElement(
                                            'div',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: `/${locality.url}`, onClick: e => {
                                                        e.preventDefault();
                                                    } },
                                                locality.name
                                            ),
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'sitemap-right-arrow' },
                                                _react2.default.createElement('img', { src: '/assets/img/customer-icons/arrow-forward-right.svg' })
                                            )
                                        ) : _react2.default.createElement(
                                            'span',
                                            { style: { cursor: 'pointer' } },
                                            locality.name
                                        )
                                    )
                                );
                            }) : _react2.default.createElement(
                                'div',
                                { className: 'col-12 fw-500 text-center mrt-20', style: { fontSize: 18 } },
                                'No record Found !!'
                            )
                        )
                    )
                )
            ),
            _react2.default.createElement(_footer2.default, null)
        );
    }
}

exports.default = HospitalInventoryView;

/***/ }),

/***/ "./dev/js/components/commons/hospitalList/hospitalListView.js":
/*!********************************************************************!*\
  !*** ./dev/js/components/commons/hospitalList/hospitalListView.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _DesktopProfileHeader = __webpack_require__(/*! ../DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _HelmetTags = __webpack_require__(/*! ../HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

var _config = __webpack_require__(/*! ../../../config/config */ "./dev/js/config/config.js");

var _config2 = _interopRequireDefault(_config);

var _footer = __webpack_require__(/*! ../Home/footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _Loader = __webpack_require__(/*! ../Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HospitalListView extends _react2.default.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 1
        };
    }

    componentDidMount() {
        this.getHospitalList();
    }

    getHospitalList() {
        this.props.getHospitalList(this.props.selectedLocation, this.state.page);
    }

    render() {
        return _react2.default.createElement(
            'div',
            { className: 'profile-body-wrap' },
            _react2.default.createElement(_DesktopProfileHeader2.default, this.props),
            _react2.default.createElement(_HelmetTags2.default, { tagsData: {
                    title: 'List of Hospitals in India | Indian Hospitals | Best Hospitals in India',
                    description: 'List of Hospitals in India: Get state wise list of hospitals and other required information like location, doctors list, price and facility available at the hospital.',
                    canonicalUrl: `${_config2.default.API_BASE_URL}${this.props.match.url}`
                } }),
            _react2.default.createElement(
                'section',
                { className: 'container dp-container-div' },
                _react2.default.createElement(
                    'div',
                    { className: 'row main-row parent-section-row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12' },
                        _react2.default.createElement(
                            'ul',
                            { className: 'mrb-10 mrt-20 breadcrumb-list', style: { wordBreak: 'break-word' } },
                            _react2.default.createElement(
                                'li',
                                { className: 'breadcrumb-list-item' },
                                _react2.default.createElement(
                                    'a',
                                    { href: '/', onClick: e => {
                                            e.preventDefault();
                                            this.props.history.push('/');
                                        } },
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'fw-500 breadcrumb-title breadcrumb-colored-title' },
                                        'Home'
                                    )
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'breadcrumb-arrow' },
                                    '>'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'breadcrumb-list-item' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'fw-500 breadcrumb-title' },
                                    'Hospitals in India'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'h1',
                                { className: 'fw-500 sitemap-title' },
                                'Hospitals in India'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'row sitemap-row' },
                            this.props.hospitalIndexLoading ? _react2.default.createElement(_Loader2.default, null) : this.props.selectedHospitalList && this.props.selectedHospitalList.length ? this.props.selectedHospitalList.map((test, index) => {
                                return _react2.default.createElement(
                                    'div',
                                    { key: index, className: 'col-12 col-md-6 col-lg-4 tests-brdr-btm' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'anchor-data-style', onClick: () => this.props.history.push(`/hospitals/inventory?city=${test.name ? test.name : `Delhi`}`) },
                                        test.name ? _react2.default.createElement(
                                            'div',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: `/hospitals/inventory?city=${test.name ? test.name : ``}`, onClick: e => {
                                                        e.preventDefault();
                                                    } },
                                                test.name
                                            ),
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'sitemap-right-arrow' },
                                                _react2.default.createElement('img', { src: '/assets/img/customer-icons/arrow-forward-right.svg' })
                                            )
                                        ) : _react2.default.createElement(
                                            'span',
                                            { style: { cursor: 'pointer' } },
                                            test.name
                                        )
                                    )
                                );
                            }) : _react2.default.createElement(
                                'div',
                                { className: 'col-12 fw-500 text-center mrt-20', style: { fontSize: 18 } },
                                'No record Found !!'
                            )
                        )
                    )
                )
            ),
            _react2.default.createElement(_footer2.default, null)
        );
    }
}

exports.default = HospitalListView;

/***/ }),

/***/ "./dev/js/containers/commons/hospitalList.js":
/*!***************************************************!*\
  !*** ./dev/js/containers/commons/hospitalList.js ***!
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

var _hospitalListView = __webpack_require__(/*! ../../components/commons/hospitalList/hospitalListView */ "./dev/js/components/commons/hospitalList/hospitalListView.js");

var _hospitalListView2 = _interopRequireDefault(_hospitalListView);

var _hospitalInventoryView = __webpack_require__(/*! ../../components/commons/hospitalList/hospitalInventoryView */ "./dev/js/components/commons/hospitalList/hospitalInventoryView.js");

var _hospitalInventoryView2 = _interopRequireDefault(_hospitalInventoryView);

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HospitalList extends _react2.default.Component {

    static loadData(store, match, queryParams = {}) {
        if (match.url === "/hospitals/inventory") {
            return store.dispatch((0, _index.getHospitalInventoryList)(queryParams && queryParams.city ? queryParams.city : 'Delhi'));
        } else {
            return store.dispatch((0, _index.getHospitalList)());
        }
    }

    render() {
        return _react2.default.createElement(
            _react2.default.Fragment,
            null,
            this.props.match.url === "/hospitals/inventory" ? _react2.default.createElement(_hospitalInventoryView2.default, this.props) : _react2.default.createElement(_hospitalListView2.default, this.props)
        );
    }
}

HospitalList.contextTypes = {
    router: () => null
};
const mapStateToProps = state => {
    const {
        hospitalIndexLoading,
        selectedHospitalList,
        hospitalLocalityList,
        hospitalListLoading
    } = state.SITE_MAP;

    const {
        selectedLocation
    } = state.SEARCH_CRITERIA_OPD;

    return {
        hospitalIndexLoading,
        selectedHospitalList,
        selectedLocation,
        hospitalLocalityList,
        hospitalListLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getHospitalList: (selectedLocation, page) => dispatch((0, _index.getHospitalList)(selectedLocation, page)),
        getHospitalInventoryList: city => dispatch((0, _index.getHospitalInventoryList)(city))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(HospitalList);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9ob3NwaXRhbExpc3QvaG9zcGl0YWxJbnZlbnRvcnlWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvaG9zcGl0YWxMaXN0L2hvc3BpdGFsTGlzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvY29tbW9ucy9ob3NwaXRhbExpc3QuanMiXSwibmFtZXMiOlsiTG9hZGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIiwiY2xhc3NUeXBlIiwiaUZyYW1lUG9wdXAiLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJIb3NwaXRhbEludmVudG9yeVZpZXciLCJzdGF0ZSIsImNvbXBvbmVudERpZE1vdW50IiwicGFyc2VkIiwibG9jYXRpb24iLCJzZWFyY2giLCJwYXJzZSIsImdldEhvc3BpdGFsSW52ZW50b3J5TGlzdCIsImNpdHkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY2Fub25pY2FsVXJsIiwiQ09ORklHIiwiQVBJX0JBU0VfVVJMIiwibWF0Y2giLCJ1cmwiLCJ3b3JkQnJlYWsiLCJlIiwicHJldmVudERlZmF1bHQiLCJoaXN0b3J5IiwicHVzaCIsImhvc3BpdGFsTG9jYWxpdHlMaXN0IiwibmFtZSIsImN1cnNvciIsImhvc3BpdGFsTGlzdExvYWRpbmciLCJyZXN1bHQiLCJsZW5ndGgiLCJtYXAiLCJsb2NhbGl0eSIsImluZGV4IiwiZm9udFNpemUiLCJIb3NwaXRhbExpc3RWaWV3IiwicGFnZSIsImdldEhvc3BpdGFsTGlzdCIsInNlbGVjdGVkTG9jYXRpb24iLCJob3NwaXRhbEluZGV4TG9hZGluZyIsInNlbGVjdGVkSG9zcGl0YWxMaXN0IiwidGVzdCIsIkhvc3BpdGFsTGlzdCIsImxvYWREYXRhIiwic3RvcmUiLCJxdWVyeVBhcmFtcyIsImRpc3BhdGNoIiwiY29udGV4dFR5cGVzIiwicm91dGVyIiwibWFwU3RhdGVUb1Byb3BzIiwiU0lURV9NQVAiLCJTRUFSQ0hfQ1JJVEVSSUFfT1BEIiwibWFwRGlzcGF0Y2hUb1Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFFQSxNQUFNQSxNQUFOLFNBQXFCQyxnQkFBTUMsU0FBM0IsQ0FBcUM7QUFDakNDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjtBQUNIOztBQUVEQyxhQUFTOztBQUVMLGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVyxLQUFLRCxLQUFMLENBQVdFLFNBQVgsSUFBd0IsZ0JBQXhDO0FBQ0ksbURBQUssV0FBVSxXQUFmLEdBREo7QUFHUSxpQkFBS0YsS0FBTCxDQUFXRyxXQUFYLEdBQ0k7QUFBQTtBQUFBLGtCQUFHLFdBQVUsZUFBYjtBQUFBO0FBQUEsYUFESixHQUMrRTtBQUp2RixTQURKO0FBU0g7QUFoQmdDOztrQkFtQnRCUCxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQmY7Ozs7OztrQkFFZUEsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBQ0EsTUFBTVEsY0FBY0MsbUJBQU9BLENBQUMsa0NBQVIsQ0FBcEI7O0FBRUEsTUFBTUMscUJBQU4sU0FBb0NULGdCQUFNQyxTQUExQyxDQUFvRDs7QUFFaERDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjtBQUNBLGFBQUtPLEtBQUwsR0FBYSxFQUFiO0FBR0g7O0FBRURDLHdCQUFvQjtBQUNoQixZQUFJQyxTQUFTLEVBQWI7QUFDQSxZQUFJLEtBQUtULEtBQUwsQ0FBV1UsUUFBWCxDQUFvQkMsTUFBeEIsRUFBZ0M7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OEJBQUMsK0JBQUQsRUFBMkIsS0FBS3JCLEtBQWhDLENBREosR0FFSSw4QkFBQywwQkFBRCxFQUFzQixLQUFLQSxLQUEzQjtBQUpaLFNBREo7QUFTSDtBQXpCc0M7O0FBQXJDNEMsWSxDQVdLSyxZLEdBQWU7QUFDbEJDLFlBQVEsTUFBTTtBQURJLEM7QUFpQjFCLE1BQU1DLGtCQUFtQjVDLEtBQUQsSUFBVztBQUMvQixVQUFNO0FBQ0ZrQyw0QkFERTtBQUVGQyw0QkFGRTtBQUdGZiw0QkFIRTtBQUlGRztBQUpFLFFBS0Z2QixNQUFNNkMsUUFMVjs7QUFPQSxVQUFNO0FBQ0ZaO0FBREUsUUFFRmpDLE1BQU04QyxtQkFGVjs7QUFJQSxXQUFPO0FBQ0haLDRCQURHO0FBRUhDLDRCQUZHO0FBR0hGLHdCQUhHO0FBSUhiLDRCQUpHO0FBS0hHO0FBTEcsS0FBUDtBQU9ILENBbkJEOztBQXNCQSxNQUFNd0IscUJBQXNCTixRQUFELElBQWM7QUFDckMsV0FBTztBQUNIVCx5QkFBaUIsQ0FBQ0MsZ0JBQUQsRUFBbUJGLElBQW5CLEtBQTRCVSxTQUFTLDRCQUFnQlIsZ0JBQWhCLEVBQWtDRixJQUFsQyxDQUFULENBRDFDO0FBRUh6QixrQ0FBMkJDLElBQUQsSUFBVWtDLFNBQVMscUNBQXlCbEMsSUFBekIsQ0FBVDtBQUZqQyxLQUFQO0FBSUgsQ0FMRDs7a0JBT2UseUJBQVFxQyxlQUFSLEVBQXlCRyxrQkFBekIsRUFBNkNWLFlBQTdDLEMiLCJmaWxlIjoiNzcuc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgTG9hZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzVHlwZSB8fCBcImxvYWRlckNpcmN1bGFyXCJ9ID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRwLWxvYWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pRnJhbWVQb3B1cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJ0LTEwXCI+UmVkaXJlY3RpbmcgeW91IHRvIFBoYXJtZWFzeSB3ZWJzaXRlLi4uPC9wPiA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXJcbiIsImltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInXG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uL0Rlc2t0b3BQcm9maWxlSGVhZGVyJztcbmltcG9ydCBIZWxtZXRUYWdzIGZyb20gJy4uL0hlbG1ldFRhZ3MnO1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi8uLi9jb25maWcvY29uZmlnJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vSG9tZS9mb290ZXInO1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXInO1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcblxuY2xhc3MgSG9zcGl0YWxJbnZlbnRvcnlWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IHBhcnNlZCA9ICcnXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaCkge1xuICAgICAgICAgICAgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXRIb3NwaXRhbEludmVudG9yeUxpc3QocGFyc2VkLmNpdHkgfHwgJ0RlbGhpJylcbiAgICB9XG5cbiAgICBnZXRIb3NwaXRhbEludmVudG9yeUxpc3QoY2l0eSkge1xuICAgICAgICB0aGlzLnByb3BzLmdldEhvc3BpdGFsSW52ZW50b3J5TGlzdChjaXR5KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICA8SGVsbWV0VGFncyB0YWdzRGF0YT17e1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgY2Fub25pY2FsVXJsOiBgJHtDT05GSUcuQVBJX0JBU0VfVVJMfSR7dGhpcy5wcm9wcy5tYXRjaC51cmx9YFxuICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGRwLWNvbnRhaW5lci1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtcmItMTAgbXJ0LTIwIGJyZWFkY3J1bWItbGlzdFwiIHN0eWxlPXt7IHdvcmRCcmVhazogJ2JyZWFrLXdvcmQnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmdy01MDAgYnJlYWRjcnVtYi10aXRsZSBicmVhZGNydW1iLWNvbG9yZWQtdGl0bGVcIj5Ib21lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1hcnJvd1wiPiZndDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvaG9zcGl0YWxzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMCBicmVhZGNydW1iLXRpdGxlIGJyZWFkY3J1bWItY29sb3JlZC10aXRsZVwiPkhvc3BpdGFscyBpbiBJbmRpYTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItYXJyb3dcIj4mZ3Q7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhvc3BpdGFsTG9jYWxpdHlMaXN0ICYmIHRoaXMucHJvcHMuaG9zcGl0YWxMb2NhbGl0eUxpc3QubmFtZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBicmVhZGNydW1iLXRpdGxlXCI+e3RoaXMucHJvcHMuaG9zcGl0YWxMb2NhbGl0eUxpc3QubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaG9zcGl0YWxMb2NhbGl0eUxpc3QgJiYgdGhpcy5wcm9wcy5ob3NwaXRhbExvY2FsaXR5TGlzdC5uYW1lICYmIHRoaXMucHJvcHMuaG9zcGl0YWxMb2NhbGl0eUxpc3QudXJsID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC8ke3RoaXMucHJvcHMuaG9zcGl0YWxMb2NhbGl0eUxpc3QudXJsfWApfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZnctNTAwIHNpdGVtYXAtdGl0bGVcIj57dGhpcy5wcm9wcy5ob3NwaXRhbExvY2FsaXR5TGlzdC5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBzaXRlbWFwLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhvc3BpdGFsTGlzdExvYWRpbmcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5ob3NwaXRhbExvY2FsaXR5TGlzdCAmJiB0aGlzLnByb3BzLmhvc3BpdGFsTG9jYWxpdHlMaXN0LnJlc3VsdCAmJiB0aGlzLnByb3BzLmhvc3BpdGFsTG9jYWxpdHlMaXN0LnJlc3VsdC5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhvc3BpdGFsTG9jYWxpdHlMaXN0LnJlc3VsdC5tYXAoKGxvY2FsaXR5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IHRlc3RzLWJyZHItYnRtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmNob3ItZGF0YS1zdHlsZVwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvJHtsb2NhbGl0eS51cmwgPyBsb2NhbGl0eS51cmwgOiBgL2B9YCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGl0eS51cmwgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvJHtsb2NhbGl0eS51cmx9YH0gb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT57bG9jYWxpdHkubmFtZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpdGVtYXAtcmlnaHQtYXJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvY3VzdG9tZXItaWNvbnMvYXJyb3ctZm9yd2FyZC1yaWdodC5zdmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19ID57bG9jYWxpdHkubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGZ3LTUwMCB0ZXh0LWNlbnRlciBtcnQtMjBcIiBzdHlsZT17eyBmb250U2l6ZTogMTggfX0gPk5vIHJlY29yZCBGb3VuZCAhITwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb3NwaXRhbEludmVudG9yeVZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi9EZXNrdG9wUHJvZmlsZUhlYWRlcic7XG5pbXBvcnQgSGVsbWV0VGFncyBmcm9tICcuLi9IZWxtZXRUYWdzJztcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vLi4vY29uZmlnL2NvbmZpZyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0hvbWUvZm9vdGVyJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vTG9hZGVyJ1xuXG5jbGFzcyBIb3NwaXRhbExpc3RWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcGFnZTogMVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuZ2V0SG9zcGl0YWxMaXN0KClcbiAgICB9XG5cbiAgICBnZXRIb3NwaXRhbExpc3QoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZ2V0SG9zcGl0YWxMaXN0KHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiwgdGhpcy5zdGF0ZS5wYWdlKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICA8SGVsbWV0VGFncyB0YWdzRGF0YT17e1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0xpc3Qgb2YgSG9zcGl0YWxzIGluIEluZGlhIHwgSW5kaWFuIEhvc3BpdGFscyB8IEJlc3QgSG9zcGl0YWxzIGluIEluZGlhJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdMaXN0IG9mIEhvc3BpdGFscyBpbiBJbmRpYTogR2V0IHN0YXRlIHdpc2UgbGlzdCBvZiBob3NwaXRhbHMgYW5kIG90aGVyIHJlcXVpcmVkIGluZm9ybWF0aW9uIGxpa2UgbG9jYXRpb24sIGRvY3RvcnMgbGlzdCwgcHJpY2UgYW5kIGZhY2lsaXR5IGF2YWlsYWJsZSBhdCB0aGUgaG9zcGl0YWwuJyxcbiAgICAgICAgICAgICAgICAgICAgY2Fub25pY2FsVXJsOiBgJHtDT05GSUcuQVBJX0JBU0VfVVJMfSR7dGhpcy5wcm9wcy5tYXRjaC51cmx9YFxuICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGRwLWNvbnRhaW5lci1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtcmItMTAgbXJ0LTIwIGJyZWFkY3J1bWItbGlzdFwiIHN0eWxlPXt7IHdvcmRCcmVhazogJ2JyZWFrLXdvcmQnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmdy01MDAgYnJlYWRjcnVtYi10aXRsZSBicmVhZGNydW1iLWNvbG9yZWQtdGl0bGVcIj5Ib21lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1hcnJvd1wiPiZndDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGJyZWFkY3J1bWItdGl0bGVcIj5Ib3NwaXRhbHMgaW4gSW5kaWE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZnctNTAwIHNpdGVtYXAtdGl0bGVcIj5Ib3NwaXRhbHMgaW4gSW5kaWE8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHNpdGVtYXAtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaG9zcGl0YWxJbmRleExvYWRpbmcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMucHJvcHMuc2VsZWN0ZWRIb3NwaXRhbExpc3QgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZEhvc3BpdGFsTGlzdC5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdGVkSG9zcGl0YWxMaXN0Lm1hcCgodGVzdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNCB0ZXN0cy1icmRyLWJ0bVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5jaG9yLWRhdGEtc3R5bGVcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2hvc3BpdGFscy9pbnZlbnRvcnk/Y2l0eT0ke3Rlc3QubmFtZSA/IHRlc3QubmFtZSA6IGBEZWxoaWB9YCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXN0Lm5hbWUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvaG9zcGl0YWxzL2ludmVudG9yeT9jaXR5PSR7dGVzdC5uYW1lID8gdGVzdC5uYW1lIDogYGB9YH0gb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT57dGVzdC5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2l0ZW1hcC1yaWdodC1hcnJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltZy9jdXN0b21lci1pY29ucy9hcnJvdy1mb3J3YXJkLXJpZ2h0LnN2Z1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gPnt0ZXN0Lm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBmdy01MDAgdGV4dC1jZW50ZXIgbXJ0LTIwXCIgc3R5bGU9e3sgZm9udFNpemU6IDE4IH19ID5ObyByZWNvcmQgRm91bmQgISE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9zcGl0YWxMaXN0VmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBIb3NwaXRhbExpc3RWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9ob3NwaXRhbExpc3QvaG9zcGl0YWxMaXN0Vmlldyc7XG5pbXBvcnQgSG9zcGl0YWxJbnZlbnRvcnlWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9ob3NwaXRhbExpc3QvaG9zcGl0YWxJbnZlbnRvcnlWaWV3JztcbmltcG9ydCB7IGdldEhvc3BpdGFsTGlzdCwgZ2V0SG9zcGl0YWxJbnZlbnRvcnlMaXN0IH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcblxuY2xhc3MgSG9zcGl0YWxMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBsb2FkRGF0YShzdG9yZSwgbWF0Y2gsIHF1ZXJ5UGFyYW1zID0ge30pIHtcbiAgICAgICAgaWYgKG1hdGNoLnVybCA9PT0gXCIvaG9zcGl0YWxzL2ludmVudG9yeVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZ2V0SG9zcGl0YWxJbnZlbnRvcnlMaXN0KHF1ZXJ5UGFyYW1zICYmIHF1ZXJ5UGFyYW1zLmNpdHkgPyBxdWVyeVBhcmFtcy5jaXR5IDogJ0RlbGhpJykpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZ2V0SG9zcGl0YWxMaXN0KCkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgICByb3V0ZXI6ICgpID0+IG51bGxcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm1hdGNoLnVybCA9PT0gXCIvaG9zcGl0YWxzL2ludmVudG9yeVwiID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxIb3NwaXRhbEludmVudG9yeVZpZXcgey4uLnRoaXMucHJvcHN9IC8+IDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIb3NwaXRhbExpc3RWaWV3IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgaG9zcGl0YWxJbmRleExvYWRpbmcsXG4gICAgICAgIHNlbGVjdGVkSG9zcGl0YWxMaXN0LFxuICAgICAgICBob3NwaXRhbExvY2FsaXR5TGlzdCxcbiAgICAgICAgaG9zcGl0YWxMaXN0TG9hZGluZ1xuICAgIH0gPSBzdGF0ZS5TSVRFX01BUFxuXG4gICAgY29uc3Qge1xuICAgICAgICBzZWxlY3RlZExvY2F0aW9uXG4gICAgfSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9PUERcblxuICAgIHJldHVybiB7XG4gICAgICAgIGhvc3BpdGFsSW5kZXhMb2FkaW5nLFxuICAgICAgICBzZWxlY3RlZEhvc3BpdGFsTGlzdCxcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgaG9zcGl0YWxMb2NhbGl0eUxpc3QsXG4gICAgICAgIGhvc3BpdGFsTGlzdExvYWRpbmdcbiAgICB9XG59XG5cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0SG9zcGl0YWxMaXN0OiAoc2VsZWN0ZWRMb2NhdGlvbiwgcGFnZSkgPT4gZGlzcGF0Y2goZ2V0SG9zcGl0YWxMaXN0KHNlbGVjdGVkTG9jYXRpb24sIHBhZ2UpKSxcbiAgICAgICAgZ2V0SG9zcGl0YWxJbnZlbnRvcnlMaXN0OiAoY2l0eSkgPT4gZGlzcGF0Y2goZ2V0SG9zcGl0YWxJbnZlbnRvcnlMaXN0KGNpdHkpKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSG9zcGl0YWxMaXN0KSJdLCJzb3VyY2VSb290IjoiIn0=