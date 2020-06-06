(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[84],{

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loader = function (_React$Component) {
    _inherits(Loader, _React$Component);

    function Loader(props) {
        _classCallCheck(this, Loader);

        return _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).call(this, props));
    }

    _createClass(Loader, [{
        key: "render",
        value: function render() {

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
    }]);

    return Loader;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var HospitalInventoryView = function (_React$Component) {
    _inherits(HospitalInventoryView, _React$Component);

    function HospitalInventoryView(props) {
        _classCallCheck(this, HospitalInventoryView);

        var _this = _possibleConstructorReturn(this, (HospitalInventoryView.__proto__ || Object.getPrototypeOf(HospitalInventoryView)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(HospitalInventoryView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var parsed = '';
            if (this.props.location.search) {
                parsed = queryString.parse(this.props.location.search);
            }
            this.getHospitalInventoryList(parsed.city || 'Delhi');
        }
    }, {
        key: 'getHospitalInventoryList',
        value: function getHospitalInventoryList(city) {
            this.props.getHospitalInventoryList(city);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'profile-body-wrap' },
                _react2.default.createElement(_DesktopProfileHeader2.default, this.props),
                _react2.default.createElement(_HelmetTags2.default, { tagsData: {
                        title: '',
                        description: '',
                        canonicalUrl: '' + _config2.default.API_BASE_URL + this.props.match.url
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
                                        { href: '/', onClick: function onClick(e) {
                                                e.preventDefault();
                                                _this2.props.history.push('/');
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
                                        { href: '/', onClick: function onClick(e) {
                                                e.preventDefault();
                                                _this2.props.history.push('/hospitals');
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
                                { style: { cursor: 'pointer' }, onClick: function onClick() {
                                        return _this2.props.history.push('/' + _this2.props.hospitalLocalityList.url);
                                    } },
                                _react2.default.createElement(
                                    'h1',
                                    { className: 'fw-500 sitemap-title' },
                                    this.props.hospitalLocalityList.name
                                )
                            ) : '',
                            _react2.default.createElement(
                                'div',
                                { className: 'row sitemap-row' },
                                this.props.hospitalListLoading ? _react2.default.createElement(_Loader2.default, null) : this.props.hospitalLocalityList && this.props.hospitalLocalityList.result && this.props.hospitalLocalityList.result.length ? this.props.hospitalLocalityList.result.map(function (locality, index) {
                                    return _react2.default.createElement(
                                        'div',
                                        { key: index, className: 'col-12 col-md-6 tests-brdr-btm' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'anchor-data-style', onClick: function onClick() {
                                                    return _this2.props.history.push('/' + (locality.url ? locality.url : '/'));
                                                } },
                                            locality.url ? _react2.default.createElement(
                                                'div',
                                                null,
                                                _react2.default.createElement(
                                                    'a',
                                                    { href: '/' + locality.url, onClick: function onClick(e) {
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
    }]);

    return HospitalInventoryView;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HospitalListView = function (_React$Component) {
    _inherits(HospitalListView, _React$Component);

    function HospitalListView(props) {
        _classCallCheck(this, HospitalListView);

        var _this = _possibleConstructorReturn(this, (HospitalListView.__proto__ || Object.getPrototypeOf(HospitalListView)).call(this, props));

        _this.state = {
            page: 1
        };
        return _this;
    }

    _createClass(HospitalListView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getHospitalList();
        }
    }, {
        key: 'getHospitalList',
        value: function getHospitalList() {
            this.props.getHospitalList(this.props.selectedLocation, this.state.page);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'profile-body-wrap' },
                _react2.default.createElement(_DesktopProfileHeader2.default, this.props),
                _react2.default.createElement(_HelmetTags2.default, { tagsData: {
                        title: 'List of Hospitals in India | Indian Hospitals | Best Hospitals in India',
                        description: 'List of Hospitals in India: Get state wise list of hospitals and other required information like location, doctors list, price and facility available at the hospital.',
                        canonicalUrl: '' + _config2.default.API_BASE_URL + this.props.match.url
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
                                        { href: '/', onClick: function onClick(e) {
                                                e.preventDefault();
                                                _this2.props.history.push('/');
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
                                this.props.hospitalIndexLoading ? _react2.default.createElement(_Loader2.default, null) : this.props.selectedHospitalList && this.props.selectedHospitalList.length ? this.props.selectedHospitalList.map(function (test, index) {
                                    return _react2.default.createElement(
                                        'div',
                                        { key: index, className: 'col-12 col-md-6 col-lg-4 tests-brdr-btm' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'anchor-data-style', onClick: function onClick() {
                                                    return _this2.props.history.push('/hospitals/inventory?city=' + (test.name ? test.name : 'Delhi'));
                                                } },
                                            test.name ? _react2.default.createElement(
                                                'div',
                                                null,
                                                _react2.default.createElement(
                                                    'a',
                                                    { href: '/hospitals/inventory?city=' + (test.name ? test.name : ''), onClick: function onClick(e) {
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
    }]);

    return HospitalListView;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _hospitalListView = __webpack_require__(/*! ../../components/commons/hospitalList/hospitalListView */ "./dev/js/components/commons/hospitalList/hospitalListView.js");

var _hospitalListView2 = _interopRequireDefault(_hospitalListView);

var _hospitalInventoryView = __webpack_require__(/*! ../../components/commons/hospitalList/hospitalInventoryView */ "./dev/js/components/commons/hospitalList/hospitalInventoryView.js");

var _hospitalInventoryView2 = _interopRequireDefault(_hospitalInventoryView);

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HospitalList = function (_React$Component) {
    _inherits(HospitalList, _React$Component);

    function HospitalList() {
        _classCallCheck(this, HospitalList);

        return _possibleConstructorReturn(this, (HospitalList.__proto__ || Object.getPrototypeOf(HospitalList)).apply(this, arguments));
    }

    _createClass(HospitalList, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.props.match.url === "/hospitals/inventory" ? _react2.default.createElement(_hospitalInventoryView2.default, this.props) : _react2.default.createElement(_hospitalListView2.default, this.props)
            );
        }
    }], [{
        key: 'loadData',
        value: function loadData(store, match) {
            var queryParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            if (match.url === "/hospitals/inventory") {
                return store.dispatch((0, _index.getHospitalInventoryList)(queryParams && queryParams.city ? queryParams.city : 'Delhi'));
            } else {
                return store.dispatch((0, _index.getHospitalList)());
            }
        }
    }]);

    return HospitalList;
}(_react2.default.Component);

HospitalList.contextTypes = {
    router: function router() {
        return null;
    }
};


var mapStateToProps = function mapStateToProps(state) {
    var _state$SITE_MAP = state.SITE_MAP,
        hospitalIndexLoading = _state$SITE_MAP.hospitalIndexLoading,
        selectedHospitalList = _state$SITE_MAP.selectedHospitalList,
        hospitalLocalityList = _state$SITE_MAP.hospitalLocalityList,
        hospitalListLoading = _state$SITE_MAP.hospitalListLoading;
    var selectedLocation = state.SEARCH_CRITERIA_OPD.selectedLocation;


    return {
        hospitalIndexLoading: hospitalIndexLoading,
        selectedHospitalList: selectedHospitalList,
        selectedLocation: selectedLocation,
        hospitalLocalityList: hospitalLocalityList,
        hospitalListLoading: hospitalListLoading
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        getHospitalList: function getHospitalList(selectedLocation, page) {
            return dispatch((0, _index.getHospitalList)(selectedLocation, page));
        },
        getHospitalInventoryList: function getHospitalInventoryList(city) {
            return dispatch((0, _index.getHospitalInventoryList)(city));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(HospitalList);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9ob3NwaXRhbExpc3QvaG9zcGl0YWxJbnZlbnRvcnlWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvaG9zcGl0YWxMaXN0L2hvc3BpdGFsTGlzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvY29tbW9ucy9ob3NwaXRhbExpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BhdGgtYnJvd3NlcmlmeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxvYWRlciIsInByb3BzIiwiY2xhc3NUeXBlIiwiaUZyYW1lUG9wdXAiLCJSZWFjdCIsIkNvbXBvbmVudCIsInF1ZXJ5U3RyaW5nIiwicmVxdWlyZSIsIkhvc3BpdGFsSW52ZW50b3J5VmlldyIsInN0YXRlIiwicGFyc2VkIiwibG9jYXRpb24iLCJzZWFyY2giLCJwYXJzZSIsImdldEhvc3BpdGFsSW52ZW50b3J5TGlzdCIsImNpdHkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY2Fub25pY2FsVXJsIiwiQ09ORklHIiwiQVBJX0JBU0VfVVJMIiwibWF0Y2giLCJ1cmwiLCJ3b3JkQnJlYWsiLCJlIiwicHJldmVudERlZmF1bHQiLCJoaXN0b3J5IiwicHVzaCIsImhvc3BpdGFsTG9jYWxpdHlMaXN0IiwibmFtZSIsImN1cnNvciIsImhvc3BpdGFsTGlzdExvYWRpbmciLCJyZXN1bHQiLCJsZW5ndGgiLCJtYXAiLCJsb2NhbGl0eSIsImluZGV4IiwiZm9udFNpemUiLCJIb3NwaXRhbExpc3RWaWV3IiwicGFnZSIsImdldEhvc3BpdGFsTGlzdCIsInNlbGVjdGVkTG9jYXRpb24iLCJob3NwaXRhbEluZGV4TG9hZGluZyIsInNlbGVjdGVkSG9zcGl0YWxMaXN0IiwidGVzdCIsIkhvc3BpdGFsTGlzdCIsInN0b3JlIiwicXVlcnlQYXJhbXMiLCJkaXNwYXRjaCIsImNvbnRleHRUeXBlcyIsInJvdXRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsIlNJVEVfTUFQIiwiU0VBUkNIX0NSSVRFUklBX09QRCIsIm1hcERpc3BhdGNoVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFDRixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLCtHQUNUQSxLQURTO0FBRWxCOzs7O2lDQUVROztBQUVMLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFXLEtBQUtBLEtBQUwsQ0FBV0MsU0FBWCxJQUF3QixnQkFBeEM7QUFDSSx1REFBSyxXQUFVLFdBQWYsR0FESjtBQUdRLHFCQUFLRCxLQUFMLENBQVdFLFdBQVgsR0FDSTtBQUFBO0FBQUEsc0JBQUcsV0FBVSxlQUFiO0FBQUE7QUFBQSxpQkFESixHQUMrRTtBQUp2RixhQURKO0FBU0g7Ozs7RUFoQmdCQyxnQkFBTUMsUzs7a0JBbUJaTCxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQmY7Ozs7OztrQkFFZUEsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmY7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQSxJQUFNTSxjQUFjQyxtQkFBT0EsQ0FBQywwREFBUixDQUFwQjs7SUFFTUMscUI7OztBQUVGLG1DQUFZUCxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0pBQ1RBLEtBRFM7O0FBRWYsY0FBS1EsS0FBTCxHQUFhLEVBQWI7QUFGZTtBQUtsQjs7Ozs0Q0FFbUI7QUFDaEIsZ0JBQUlDLFNBQVMsRUFBYjtBQUNBLGdCQUFJLEtBQUtULEtBQUws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cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgTG9hZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzVHlwZSB8fCBcImxvYWRlckNpcmN1bGFyXCJ9ID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRwLWxvYWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pRnJhbWVQb3B1cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJ0LTEwXCI+UmVkaXJlY3RpbmcgeW91IHRvIFBoYXJtZWFzeSB3ZWJzaXRlLi4uPC9wPiA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXJcbiIsImltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInXG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uL0Rlc2t0b3BQcm9maWxlSGVhZGVyJztcbmltcG9ydCBIZWxtZXRUYWdzIGZyb20gJy4uL0hlbG1ldFRhZ3MnO1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi8uLi9jb25maWcvY29uZmlnJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vSG9tZS9mb290ZXInO1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXInO1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcblxuY2xhc3MgSG9zcGl0YWxJbnZlbnRvcnlWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IHBhcnNlZCA9ICcnXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaCkge1xuICAgICAgICAgICAgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXRIb3NwaXRhbEludmVudG9yeUxpc3QocGFyc2VkLmNpdHkgfHwgJ0RlbGhpJylcbiAgICB9XG5cbiAgICBnZXRIb3NwaXRhbEludmVudG9yeUxpc3QoY2l0eSkge1xuICAgICAgICB0aGlzLnByb3BzLmdldEhvc3BpdGFsSW52ZW50b3J5TGlzdChjaXR5KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICA8SGVsbWV0VGFncyB0YWdzRGF0YT17e1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgY2Fub25pY2FsVXJsOiBgJHtDT05GSUcuQVBJX0JBU0VfVVJMfSR7dGhpcy5wcm9wcy5tYXRjaC51cmx9YFxuICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGRwLWNvbnRhaW5lci1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtcmItMTAgbXJ0LTIwIGJyZWFkY3J1bWItbGlzdFwiIHN0eWxlPXt7IHdvcmRCcmVhazogJ2JyZWFrLXdvcmQnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmdy01MDAgYnJlYWRjcnVtYi10aXRsZSBicmVhZGNydW1iLWNvbG9yZWQtdGl0bGVcIj5Ib21lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1hcnJvd1wiPiZndDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvaG9zcGl0YWxzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMCBicmVhZGNydW1iLXRpdGxlIGJyZWFkY3J1bWItY29sb3JlZC10aXRsZVwiPkhvc3BpdGFscyBpbiBJbmRpYTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItYXJyb3dcIj4mZ3Q7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhvc3BpdGFsTG9jYWxpdHlMaXN0ICYmIHRoaXMucHJvcHMuaG9zcGl0YWxMb2NhbGl0eUxpc3QubmFtZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBicmVhZGNydW1iLXRpdGxlXCI+e3RoaXMucHJvcHMuaG9zcGl0YWxMb2NhbGl0eUxpc3QubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaG9zcGl0YWxMb2NhbGl0eUxpc3QgJiYgdGhpcy5wcm9wcy5ob3NwaXRhbExvY2FsaXR5TGlzdC5uYW1lICYmIHRoaXMucHJvcHMuaG9zcGl0YWxMb2NhbGl0eUxpc3QudXJsID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC8ke3RoaXMucHJvcHMuaG9zcGl0YWxMb2NhbGl0eUxpc3QudXJsfWApfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZnctNTAwIHNpdGVtYXAtdGl0bGVcIj57dGhpcy5wcm9wcy5ob3NwaXRhbExvY2FsaXR5TGlzdC5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBzaXRlbWFwLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhvc3BpdGFsTGlzdExvYWRpbmcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5ob3NwaXRhbExvY2FsaXR5TGlzdCAmJiB0aGlzLnByb3BzLmhvc3BpdGFsTG9jYWxpdHlMaXN0LnJlc3VsdCAmJiB0aGlzLnByb3BzLmhvc3BpdGFsTG9jYWxpdHlMaXN0LnJlc3VsdC5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhvc3BpdGFsTG9jYWxpdHlMaXN0LnJlc3VsdC5tYXAoKGxvY2FsaXR5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IHRlc3RzLWJyZHItYnRtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmNob3ItZGF0YS1zdHlsZVwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvJHtsb2NhbGl0eS51cmwgPyBsb2NhbGl0eS51cmwgOiBgL2B9YCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGl0eS51cmwgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvJHtsb2NhbGl0eS51cmx9YH0gb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT57bG9jYWxpdHkubmFtZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpdGVtYXAtcmlnaHQtYXJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvY3VzdG9tZXItaWNvbnMvYXJyb3ctZm9yd2FyZC1yaWdodC5zdmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19ID57bG9jYWxpdHkubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGZ3LTUwMCB0ZXh0LWNlbnRlciBtcnQtMjBcIiBzdHlsZT17eyBmb250U2l6ZTogMTggfX0gPk5vIHJlY29yZCBGb3VuZCAhITwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb3NwaXRhbEludmVudG9yeVZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi9EZXNrdG9wUHJvZmlsZUhlYWRlcic7XG5pbXBvcnQgSGVsbWV0VGFncyBmcm9tICcuLi9IZWxtZXRUYWdzJztcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vLi4vY29uZmlnL2NvbmZpZyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0hvbWUvZm9vdGVyJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vTG9hZGVyJ1xuXG5jbGFzcyBIb3NwaXRhbExpc3RWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcGFnZTogMVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuZ2V0SG9zcGl0YWxMaXN0KClcbiAgICB9XG5cbiAgICBnZXRIb3NwaXRhbExpc3QoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZ2V0SG9zcGl0YWxMaXN0KHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiwgdGhpcy5zdGF0ZS5wYWdlKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICA8SGVsbWV0VGFncyB0YWdzRGF0YT17e1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0xpc3Qgb2YgSG9zcGl0YWxzIGluIEluZGlhIHwgSW5kaWFuIEhvc3BpdGFscyB8IEJlc3QgSG9zcGl0YWxzIGluIEluZGlhJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdMaXN0IG9mIEhvc3BpdGFscyBpbiBJbmRpYTogR2V0IHN0YXRlIHdpc2UgbGlzdCBvZiBob3NwaXRhbHMgYW5kIG90aGVyIHJlcXVpcmVkIGluZm9ybWF0aW9uIGxpa2UgbG9jYXRpb24sIGRvY3RvcnMgbGlzdCwgcHJpY2UgYW5kIGZhY2lsaXR5IGF2YWlsYWJsZSBhdCB0aGUgaG9zcGl0YWwuJyxcbiAgICAgICAgICAgICAgICAgICAgY2Fub25pY2FsVXJsOiBgJHtDT05GSUcuQVBJX0JBU0VfVVJMfSR7dGhpcy5wcm9wcy5tYXRjaC51cmx9YFxuICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGRwLWNvbnRhaW5lci1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtcmItMTAgbXJ0LTIwIGJyZWFkY3J1bWItbGlzdFwiIHN0eWxlPXt7IHdvcmRCcmVhazogJ2JyZWFrLXdvcmQnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmdy01MDAgYnJlYWRjcnVtYi10aXRsZSBicmVhZGNydW1iLWNvbG9yZWQtdGl0bGVcIj5Ib21lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1hcnJvd1wiPiZndDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGJyZWFkY3J1bWItdGl0bGVcIj5Ib3NwaXRhbHMgaW4gSW5kaWE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZnctNTAwIHNpdGVtYXAtdGl0bGVcIj5Ib3NwaXRhbHMgaW4gSW5kaWE8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHNpdGVtYXAtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaG9zcGl0YWxJbmRleExvYWRpbmcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMucHJvcHMuc2VsZWN0ZWRIb3NwaXRhbExpc3QgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZEhvc3BpdGFsTGlzdC5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdGVkSG9zcGl0YWxMaXN0Lm1hcCgodGVzdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNCB0ZXN0cy1icmRyLWJ0bVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5jaG9yLWRhdGEtc3R5bGVcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2hvc3BpdGFscy9pbnZlbnRvcnk/Y2l0eT0ke3Rlc3QubmFtZSA/IHRlc3QubmFtZSA6IGBEZWxoaWB9YCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXN0Lm5hbWUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvaG9zcGl0YWxzL2ludmVudG9yeT9jaXR5PSR7dGVzdC5uYW1lID8gdGVzdC5uYW1lIDogYGB9YH0gb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT57dGVzdC5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2l0ZW1hcC1yaWdodC1hcnJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltZy9jdXN0b21lci1pY29ucy9hcnJvdy1mb3J3YXJkLXJpZ2h0LnN2Z1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gPnt0ZXN0Lm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBmdy01MDAgdGV4dC1jZW50ZXIgbXJ0LTIwXCIgc3R5bGU9e3sgZm9udFNpemU6IDE4IH19ID5ObyByZWNvcmQgRm91bmQgISE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9zcGl0YWxMaXN0VmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBIb3NwaXRhbExpc3RWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9ob3NwaXRhbExpc3QvaG9zcGl0YWxMaXN0Vmlldyc7XG5pbXBvcnQgSG9zcGl0YWxJbnZlbnRvcnlWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9ob3NwaXRhbExpc3QvaG9zcGl0YWxJbnZlbnRvcnlWaWV3JztcbmltcG9ydCB7IGdldEhvc3BpdGFsTGlzdCwgZ2V0SG9zcGl0YWxJbnZlbnRvcnlMaXN0IH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcblxuY2xhc3MgSG9zcGl0YWxMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBsb2FkRGF0YShzdG9yZSwgbWF0Y2gsIHF1ZXJ5UGFyYW1zID0ge30pIHtcbiAgICAgICAgaWYgKG1hdGNoLnVybCA9PT0gXCIvaG9zcGl0YWxzL2ludmVudG9yeVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZ2V0SG9zcGl0YWxJbnZlbnRvcnlMaXN0KHF1ZXJ5UGFyYW1zICYmIHF1ZXJ5UGFyYW1zLmNpdHkgPyBxdWVyeVBhcmFtcy5jaXR5IDogJ0RlbGhpJykpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZ2V0SG9zcGl0YWxMaXN0KCkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgICByb3V0ZXI6ICgpID0+IG51bGxcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm1hdGNoLnVybCA9PT0gXCIvaG9zcGl0YWxzL2ludmVudG9yeVwiID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxIb3NwaXRhbEludmVudG9yeVZpZXcgey4uLnRoaXMucHJvcHN9IC8+IDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIb3NwaXRhbExpc3RWaWV3IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgaG9zcGl0YWxJbmRleExvYWRpbmcsXG4gICAgICAgIHNlbGVjdGVkSG9zcGl0YWxMaXN0LFxuICAgICAgICBob3NwaXRhbExvY2FsaXR5TGlzdCxcbiAgICAgICAgaG9zcGl0YWxMaXN0TG9hZGluZ1xuICAgIH0gPSBzdGF0ZS5TSVRFX01BUFxuXG4gICAgY29uc3Qge1xuICAgICAgICBzZWxlY3RlZExvY2F0aW9uXG4gICAgfSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9PUERcblxuICAgIHJldHVybiB7XG4gICAgICAgIGhvc3BpdGFsSW5kZXhMb2FkaW5nLFxuICAgICAgICBzZWxlY3RlZEhvc3BpdGFsTGlzdCxcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgaG9zcGl0YWxMb2NhbGl0eUxpc3QsXG4gICAgICAgIGhvc3BpdGFsTGlzdExvYWRpbmdcbiAgICB9XG59XG5cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0SG9zcGl0YWxMaXN0OiAoc2VsZWN0ZWRMb2NhdGlvbiwgcGFnZSkgPT4gZGlzcGF0Y2goZ2V0SG9zcGl0YWxMaXN0KHNlbGVjdGVkTG9jYXRpb24sIHBhZ2UpKSxcbiAgICAgICAgZ2V0SG9zcGl0YWxJbnZlbnRvcnlMaXN0OiAoY2l0eSkgPT4gZGlzcGF0Y2goZ2V0SG9zcGl0YWxJbnZlbnRvcnlMaXN0KGNpdHkpKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSG9zcGl0YWxMaXN0KSIsIi8vIC5kaXJuYW1lLCAuYmFzZW5hbWUsIGFuZCAuZXh0bmFtZSBtZXRob2RzIGFyZSBleHRyYWN0ZWQgZnJvbSBOb2RlLmpzIHY4LjExLjEsXG4vLyBiYWNrcG9ydGVkIGFuZCB0cmFuc3BsaXRlZCB3aXRoIEJhYmVsLCB3aXRoIGJhY2t3YXJkcy1jb21wYXQgZml4ZXNcblxuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIHJlc29sdmVzIC4gYW5kIC4uIGVsZW1lbnRzIGluIGEgcGF0aCBhcnJheSB3aXRoIGRpcmVjdG9yeSBuYW1lcyB0aGVyZVxuLy8gbXVzdCBiZSBubyBzbGFzaGVzLCBlbXB0eSBlbGVtZW50cywgb3IgZGV2aWNlIG5hbWVzIChjOlxcKSBpbiB0aGUgYXJyYXlcbi8vIChzbyBhbHNvIG5vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMgLSBpdCBkb2VzIG5vdCBkaXN0aW5ndWlzaFxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXkocGFydHMsIGFsbG93QWJvdmVSb290KSB7XG4gIC8vIGlmIHRoZSBwYXRoIHRyaWVzIHRvIGdvIGFib3ZlIHRoZSByb290LCBgdXBgIGVuZHMgdXAgPiAwXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXJ0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBsYXN0ID0gcGFydHNbaV07XG4gICAgaWYgKGxhc3QgPT09ICcuJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSBpZiAobGFzdCA9PT0gJy4uJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcbiAgaWYgKGFsbG93QWJvdmVSb290KSB7XG4gICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICBwYXJ0cy51bnNoaWZ0KCcuLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXNvbHZlZFBhdGggPSAnJyxcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTEgJiYgIXJlc29sdmVkQWJzb2x1dGU7IGktLSkge1xuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xuXG4gICAgLy8gU2tpcCBlbXB0eSBhbmQgaW52YWxpZCBlbnRyaWVzXG4gICAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGgucmVzb2x2ZSBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xuICAgIHJlc29sdmVkQWJzb2x1dGUgPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICB9XG5cbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHJlc29sdmVkUGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xufTtcblxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMubm9ybWFsaXplID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgaXNBYnNvbHV0ZSA9IGV4cG9ydHMuaXNBYnNvbHV0ZShwYXRoKSxcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBzdWJzdHIocGF0aCwgLTEpID09PSAnLyc7XG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFpc0Fic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XG4gICAgcGF0aCA9ICcuJztcbiAgfVxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XG4gICAgcGF0aCArPSAnLyc7XG4gIH1cblxuICByZXR1cm4gKGlzQWJzb2x1dGUgPyAnLycgOiAnJykgKyBwYXRoO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuam9pbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcGF0aHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICByZXR1cm4gZXhwb3J0cy5ub3JtYWxpemUoZmlsdGVyKHBhdGhzLCBmdW5jdGlvbihwLCBpbmRleCkge1xuICAgIGlmICh0eXBlb2YgcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfVxuICAgIHJldHVybiBwO1xuICB9KS5qb2luKCcvJykpO1xufTtcblxuXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XG4gIGZyb20gPSBleHBvcnRzLnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xuICB0byA9IGV4cG9ydHMucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xuXG4gIGZ1bmN0aW9uIHRyaW0oYXJyKSB7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICBmb3IgKDsgc3RhcnQgPCBhcnIubGVuZ3RoOyBzdGFydCsrKSB7XG4gICAgICBpZiAoYXJyW3N0YXJ0XSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSBhcnIubGVuZ3RoIC0gMTtcbiAgICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XG4gICAgICBpZiAoYXJyW2VuZF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoc3RhcnQgPiBlbmQpIHJldHVybiBbXTtcbiAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEpO1xuICB9XG5cbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW0oZnJvbS5zcGxpdCgnLycpKTtcbiAgdmFyIHRvUGFydHMgPSB0cmltKHRvLnNwbGl0KCcvJykpO1xuXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIG91dHB1dFBhcnRzID0gW107XG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xuICB9XG5cbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcblxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xufTtcblxuZXhwb3J0cy5zZXAgPSAnLyc7XG5leHBvcnRzLmRlbGltaXRlciA9ICc6JztcblxuZXhwb3J0cy5kaXJuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSByZXR1cm4gJy4nO1xuICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdCgwKTtcbiAgdmFyIGhhc1Jvb3QgPSBjb2RlID09PSA0NyAvKi8qLztcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAxOyAtLWkpIHtcbiAgICBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIGVuZCA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvclxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiBoYXNSb290ID8gJy8nIDogJy4nO1xuICBpZiAoaGFzUm9vdCAmJiBlbmQgPT09IDEpIHtcbiAgICAvLyByZXR1cm4gJy8vJztcbiAgICAvLyBCYWNrd2FyZHMtY29tcGF0IGZpeDpcbiAgICByZXR1cm4gJy8nO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKDAsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBiYXNlbmFtZShwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG5cbiAgdmFyIHN0YXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgdmFyIGk7XG5cbiAgZm9yIChpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIGlmIChwYXRoLmNoYXJDb2RlQXQoaSkgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gcGF0aCBjb21wb25lbnRcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiAnJztcbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnQsIGVuZCk7XG59XG5cbi8vIFVzZXMgYSBtaXhlZCBhcHByb2FjaCBmb3IgYmFja3dhcmRzLWNvbXBhdGliaWxpdHksIGFzIGV4dCBiZWhhdmlvciBjaGFuZ2VkXG4vLyBpbiBuZXcgTm9kZS5qcyB2ZXJzaW9ucywgc28gb25seSBiYXNlbmFtZSgpIGFib3ZlIGlzIGJhY2twb3J0ZWQgaGVyZVxuZXhwb3J0cy5iYXNlbmFtZSA9IGZ1bmN0aW9uIChwYXRoLCBleHQpIHtcbiAgdmFyIGYgPSBiYXNlbmFtZShwYXRoKTtcbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcbiAgICBmID0gZi5zdWJzdHIoMCwgZi5sZW5ndGggLSBleHQubGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gZjtcbn07XG5cbmV4cG9ydHMuZXh0bmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIHZhciBzdGFydERvdCA9IC0xO1xuICB2YXIgc3RhcnRQYXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgLy8gVHJhY2sgdGhlIHN0YXRlIG9mIGNoYXJhY3RlcnMgKGlmIGFueSkgd2Ugc2VlIGJlZm9yZSBvdXIgZmlyc3QgZG90IGFuZFxuICAvLyBhZnRlciBhbnkgcGF0aCBzZXBhcmF0b3Igd2UgZmluZFxuICB2YXIgcHJlRG90U3RhdGUgPSAwO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydFBhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gZXh0ZW5zaW9uXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gNDYgLyouKi8pIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBvdXIgZmlyc3QgZG90LCBtYXJrIGl0IGFzIHRoZSBzdGFydCBvZiBvdXIgZXh0ZW5zaW9uXG4gICAgICAgIGlmIChzdGFydERvdCA9PT0gLTEpXG4gICAgICAgICAgc3RhcnREb3QgPSBpO1xuICAgICAgICBlbHNlIGlmIChwcmVEb3RTdGF0ZSAhPT0gMSlcbiAgICAgICAgICBwcmVEb3RTdGF0ZSA9IDE7XG4gICAgfSBlbHNlIGlmIChzdGFydERvdCAhPT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgYW5kIG5vbi1wYXRoIHNlcGFyYXRvciBiZWZvcmUgb3VyIGRvdCwgc28gd2Ugc2hvdWxkXG4gICAgICAvLyBoYXZlIGEgZ29vZCBjaGFuY2UgYXQgaGF2aW5nIGEgbm9uLWVtcHR5IGV4dGVuc2lvblxuICAgICAgcHJlRG90U3RhdGUgPSAtMTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhcnREb3QgPT09IC0xIHx8IGVuZCA9PT0gLTEgfHxcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgY2hhcmFjdGVyIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgZG90XG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMCB8fFxuICAgICAgLy8gVGhlIChyaWdodC1tb3N0KSB0cmltbWVkIHBhdGggY29tcG9uZW50IGlzIGV4YWN0bHkgJy4uJ1xuICAgICAgcHJlRG90U3RhdGUgPT09IDEgJiYgc3RhcnREb3QgPT09IGVuZCAtIDEgJiYgc3RhcnREb3QgPT09IHN0YXJ0UGFydCArIDEpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnREb3QsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBmaWx0ZXIgKHhzLCBmKSB7XG4gICAgaWYgKHhzLmZpbHRlcikgcmV0dXJuIHhzLmZpbHRlcihmKTtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZih4c1tpXSwgaSwgeHMpKSByZXMucHVzaCh4c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8vIFN0cmluZy5wcm90b3R5cGUuc3Vic3RyIC0gbmVnYXRpdmUgaW5kZXggZG9uJ3Qgd29yayBpbiBJRThcbnZhciBzdWJzdHIgPSAnYWInLnN1YnN0cigtMSkgPT09ICdiJ1xuICAgID8gZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikgeyByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKSB9XG4gICAgOiBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7XG4gICAgICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gc3RyLmxlbmd0aCArIHN0YXJ0O1xuICAgICAgICByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKTtcbiAgICB9XG47XG4iLCJpbXBvcnQgX01lbW9yeVJvdXRlciBmcm9tIFwiLi9NZW1vcnlSb3V0ZXJcIjtcbmV4cG9ydCB7IF9NZW1vcnlSb3V0ZXIgYXMgTWVtb3J5Um91dGVyIH07XG5pbXBvcnQgX1Byb21wdCBmcm9tIFwiLi9Qcm9tcHRcIjtcbmV4cG9ydCB7IF9Qcm9tcHQgYXMgUHJvbXB0IH07XG5pbXBvcnQgX1JlZGlyZWN0IGZyb20gXCIuL1JlZGlyZWN0XCI7XG5leHBvcnQgeyBfUmVkaXJlY3QgYXMgUmVkaXJlY3QgfTtcbmltcG9ydCBfUm91dGUgZnJvbSBcIi4vUm91dGVcIjtcbmV4cG9ydCB7IF9Sb3V0ZSBhcyBSb3V0ZSB9O1xuaW1wb3J0IF9Sb3V0ZXIgZnJvbSBcIi4vUm91dGVyXCI7XG5leHBvcnQgeyBfUm91dGVyIGFzIFJvdXRlciB9O1xuaW1wb3J0IF9TdGF0aWNSb3V0ZXIgZnJvbSBcIi4vU3RhdGljUm91dGVyXCI7XG5leHBvcnQgeyBfU3RhdGljUm91dGVyIGFzIFN0YXRpY1JvdXRlciB9O1xuaW1wb3J0IF9Td2l0Y2ggZnJvbSBcIi4vU3dpdGNoXCI7XG5leHBvcnQgeyBfU3dpdGNoIGFzIFN3aXRjaCB9O1xuaW1wb3J0IF9nZW5lcmF0ZVBhdGggZnJvbSBcIi4vZ2VuZXJhdGVQYXRoXCI7XG5leHBvcnQgeyBfZ2VuZXJhdGVQYXRoIGFzIGdlbmVyYXRlUGF0aCB9O1xuaW1wb3J0IF9tYXRjaFBhdGggZnJvbSBcIi4vbWF0Y2hQYXRoXCI7XG5leHBvcnQgeyBfbWF0Y2hQYXRoIGFzIG1hdGNoUGF0aCB9O1xuaW1wb3J0IF93aXRoUm91dGVyIGZyb20gXCIuL3dpdGhSb3V0ZXJcIjtcbmV4cG9ydCB7IF93aXRoUm91dGVyIGFzIHdpdGhSb3V0ZXIgfTsiXSwic291cmNlUm9vdCI6IiJ9