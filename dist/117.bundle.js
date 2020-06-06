(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[117],{

/***/ "./dev/js/components/insurance/InsuranceNetworkView.js":
/*!*************************************************************!*\
  !*** ./dev/js/components/insurance/InsuranceNetworkView.js ***!
  \*************************************************************/
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

var _DesktopProfileHeader = __webpack_require__(/*! ../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _locationElements = __webpack_require__(/*! ../../containers/commons/locationElements */ "./dev/js/containers/commons/locationElements.js");

var _locationElements2 = _interopRequireDefault(_locationElements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InsuranceNetworkView = function (_React$Component) {
    _inherits(InsuranceNetworkView, _React$Component);

    function InsuranceNetworkView(props) {
        _classCallCheck(this, InsuranceNetworkView);

        var _this = _possibleConstructorReturn(this, (InsuranceNetworkView.__proto__ || Object.getPrototypeOf(InsuranceNetworkView)).call(this, props));

        _this.topLabClick = function () {
            _this.setState({
                topLabActive: true,
                selectedChar: null
            });
            _this.updateInsuranceNetwork('lab', '');
        };

        _this.state = {
            type: _this.props.networkType,
            searchValue: '',
            placeholder: '',
            searchCities: [],
            selectedChar: 0,
            showAlphabets: true,
            topLabActive: true,
            docSearch: 'name'
        };
        return _this;
    }

    _createClass(InsuranceNetworkView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (window) {
                window.scrollTo(0, 0);
            }
            var searchString = this.getCharacter(this.state.selectedChar);
            if (this.state.type == 'doctor') {
                this.updateInsuranceNetwork(this.state.type, searchString, this.state.docSearch);
            } else {
                this.updateInsuranceNetwork(this.state.type, searchString);
            }
            this.setState({ placeholder: 'Search ' + this.state.type });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.selectedLocation != this.props.selectedLocation) {
                var selectedLocation = '';
                var lat = 28.644800;
                var long = 77.216721;
                selectedLocation = nextProps.selectedLocation;
                lat = selectedLocation.geometry.location.lat;
                long = selectedLocation.geometry.location.lng;
                if (typeof lat === 'function') lat = lat();
                if (typeof long === 'function') long = long();
                var searchString = this.getCharacter(this.state.selectedChar);
                this.props.getInsuranceNetworks(lat, long, this.state.type, searchString);
            }
        }
    }, {
        key: 'getCharacter',
        value: function getCharacter(index) {
            return String.fromCharCode(97 + index);
        }
    }, {
        key: 'updateInsuranceNetwork',
        value: function updateInsuranceNetwork(type, string) {
            var searchBy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

            var _getLocation = this.getLocation(),
                lat = _getLocation.lat,
                long = _getLocation.long;

            this.props.getInsuranceNetworks(lat, long, type, string, searchBy); // get user insurance networks
        }
    }, {
        key: 'getLocation',
        value: function getLocation() {
            var selectedLocation = '';
            var lat = 28.644800;
            var long = 77.216721;
            if (this.props.selectedLocation) {
                selectedLocation = this.props.selectedLocation;
                lat = selectedLocation.geometry.location.lat;
                long = selectedLocation.geometry.location.lng;
                if (typeof lat === 'function') lat = lat();
                if (typeof long === 'function') long = long();
            }
            return { lat: lat, long: long };
        }
    }, {
        key: 'tabClick',
        value: function tabClick(type) {
            if (type == 'doctor') {
                this.setState({
                    type: type,
                    placeholder: 'Search doctor',
                    searchValue: '',
                    selectedChar: 0,
                    docSearch: 'name'
                });
                var searchString = this.getCharacter(0);
                this.updateInsuranceNetwork(type, searchString, 'name');
            } else if (type == 'lab') {
                this.setState({
                    type: type,
                    placeholder: 'Search lab',
                    searchValue: '',
                    topLabActive: true,
                    selectedChar: null
                });
                this.updateInsuranceNetwork(type, '');
            }
            this.props.setNetworkType(type);
            this.setState({ showAlphabets: true });
        }
    }, {
        key: 'inputHandler',
        value: function inputHandler(e) {
            this.setState({ searchValue: e.target.value });
            if (this.state.type == 'doctor') {
                if (e.target.value) {
                    this.setState({ showAlphabets: false });
                    this.updateInsuranceNetwork(this.state.type, e.target.value, this.state.docSearch);
                } else {
                    if (this.state.docSearch == 'name') {
                        this.setState({ showAlphabets: true });
                    } else {
                        this.setState({ showAlphabets: false });
                    }
                    var searchString = this.getCharacter(this.state.selectedChar);
                    this.updateInsuranceNetwork(this.state.type, searchString, this.state.docSearch);
                }
            } else {
                if (e.target.value) {
                    this.setState({ showAlphabets: false });
                    this.updateInsuranceNetwork(this.state.type, e.target.value);
                } else {
                    this.setState({ showAlphabets: true });
                    var _searchString = this.getCharacter(this.state.selectedChar);
                    this.updateInsuranceNetwork(this.state.type, _searchString);
                }
            }
        }
    }, {
        key: 'selectLocation',
        value: function selectLocation(city) {
            var _this2 = this;

            this.child.selectLocation(city, function () {
                _this2.setState({ searchCities: [] });
            });
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
        key: 'alphabetClick',
        value: function alphabetClick(index) {
            this.setState({ selectedChar: index, topLabActive: false });
            var searchString = this.getCharacter(index);
            if (this.state.type == 'doctor') {
                this.updateInsuranceNetwork(this.state.type, searchString, 'name');
            } else {
                this.updateInsuranceNetwork(this.state.type, searchString);
            }
            if (window) {
                window.scrollTo(0, 0);
            }
        }
    }, {
        key: 'getAlphabets',
        value: function getAlphabets() {
            var alphabets = [];
            for (var i = 0; i <= 25; i++) {
                alphabets.push(String.fromCharCode(65 + i));
            }
            return alphabets;
        }
    }, {
        key: 'resultClick',
        value: function resultClick(id, url) {
            if (url) {
                this.props.history.push('/' + url + '?from=insurance_network');
            } else {
                this.props.history.push('/opd/doctor/' + id + '?from=insurance_network');
            }
        }
    }, {
        key: 'radioClick',
        value: function radioClick(type) {
            var searchString = this.getCharacter(this.state.selectedChar);
            this.setState({ searchValue: '', showAlphabets: true });
            if (type == 'name') {
                this.setState({ docSearch: 'name', showAlphabets: true });
                this.updateInsuranceNetwork('doctor', searchString, 'name');
            } else {
                this.setState({ docSearch: 'specialization', showAlphabets: false });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var alphabets = this.getAlphabets();
            return _react2.default.createElement(
                'div',
                { className: 'profile-body-wrap' },
                _react2.default.createElement(_DesktopProfileHeader2.default, _extends({}, this.props, { showPackageStrip: true })),
                _react2.default.createElement(
                    'section',
                    { className: 'container dp-container-div' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12 col-md-7 col-lg-7 center-column' },
                            _react2.default.createElement(
                                'div',
                                { className: 'container-fluid' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-12' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'ntwrk-tabs' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'text-center', onClick: function onClick() {
                                                        return _this3.tabClick('doctor');
                                                    }, style: this.state.type == 'doctor' ? { borderBottom: '2px solid #f78631' } : {} },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'fw-500' },
                                                    'Doctors'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'text-center', onClick: function onClick() {
                                                        return _this3.tabClick('lab');
                                                    }, style: this.state.type == 'lab' ? { borderBottom: '2px solid #f78631' } : {} },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'fw-500' },
                                                    'Diagnostic Labs'
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'widget mb-10' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'search-top-container' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'serch-nw-inputs-container' },
                                                    _react2.default.createElement(_locationElements2.default, _extends({}, this.props, { onRef: function onRef(ref) {
                                                            return _this3.child = ref;
                                                        }, getCityListLayout: this.getCityListLayout.bind(this), resultType: 'search', fromCriteria: true, commonSearchPage: true })),
                                                    this.state.type == 'doctor' ? _react2.default.createElement(
                                                        'div',
                                                        { className: 'srch-radio-btns ipd-srch-radio-btn' },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'dtl-radio' },
                                                            _react2.default.createElement(
                                                                'label',
                                                                { className: 'container-radio', style: { fontSize: 13 } },
                                                                'Search by name',
                                                                _react2.default.createElement('input', { type: 'radio', onChange: function onChange() {
                                                                        return _this3.radioClick('name');
                                                                    }, checked: this.state.docSearch == 'name', name: 'radio' }),
                                                                _react2.default.createElement('span', { className: 'doc-checkmark' })
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'dtl-radio' },
                                                            _react2.default.createElement(
                                                                'label',
                                                                { className: 'container-radio', style: { fontSize: 13 } },
                                                                'Search by specialization',
                                                                _react2.default.createElement('input', { type: 'radio', onChange: function onChange() {
                                                                        return _this3.radioClick('specialization');
                                                                    }, checked: this.state.docSearch == 'specialization', name: 'radio' }),
                                                                _react2.default.createElement('span', { className: 'doc-checkmark' })
                                                            )
                                                        )
                                                    ) : '',
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'serch-nw-inputs mb-0' },
                                                        _react2.default.createElement('input', { type: 'text', autoComplete: 'off', className: 'd-block new-srch-doc-lab', id: 'search_bar', onChange: this.inputHandler.bind(this), value: this.state.searchValue, placeholder: this.state.placeholder }),
                                                        _react2.default.createElement('img', { style: { width: '15px' }, className: 'srch-inp-img', src: "/assets" + "/img/shape-srch.svg" })
                                                    )
                                                )
                                            )
                                        ),
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
                                                            this.state.searchCities.map(function (result, i) {
                                                                return _react2.default.createElement(
                                                                    'li',
                                                                    { key: i, onClick: _this3.selectLocation.bind(_this3, result) },
                                                                    _react2.default.createElement(
                                                                        'p',
                                                                        null,
                                                                        result.description
                                                                    )
                                                                );
                                                            })
                                                        )
                                                    )
                                                )
                                            )
                                        ) : '',
                                        this.state.searchCities.length == 0 ? _react2.default.createElement(
                                            'section',
                                            { className: 'widget searchMargin' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'ntwrk-alpha-div' },
                                                !this.state.searchValue && this.props.insuranceNetwork && this.props.insuranceNetwork.total_count ? _react2.default.createElement(
                                                    'p',
                                                    { className: 'fw-500', style: { paddingLeft: 10, marginBottom: 4 } },
                                                    this.props.insuranceNetwork.total_count,
                                                    ' ',
                                                    this.state.type,
                                                    's covered under insurance'
                                                ) : '',
                                                this.state.showAlphabets ? _react2.default.createElement(
                                                    'div',
                                                    { className: 'd-flex top-ntwrks-div' },
                                                    this.state.type == 'lab' ? _react2.default.createElement(
                                                        'div',
                                                        { className: 'top-ntwrks', onClick: this.topLabClick },
                                                        _react2.default.createElement(
                                                            'p',
                                                            { className: '' + (this.state.topLabActive ? 'fw-500 text-primary' : 'fw-500') },
                                                            'Top Labs'
                                                        )
                                                    ) : '',
                                                    _react2.default.createElement(
                                                        'ul',
                                                        { className: 'ntwrk-alpha' },
                                                        alphabets && alphabets.length ? alphabets.map(function (character, i) {
                                                            return _react2.default.createElement(
                                                                'li',
                                                                { key: i, onClick: function onClick() {
                                                                        return _this3.alphabetClick(i);
                                                                    }, style: i == _this3.state.selectedChar ? { cursor: 'auto' } : { cursor: 'pointer' } },
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    { className: i == _this3.state.selectedChar ? 'alphaSelected ntwrk-char fw-500' : 'ntwrk-char fw-500' },
                                                                    character
                                                                )
                                                            );
                                                        }) : ''
                                                    )
                                                ) : ''
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                null,
                                                this.props.insuranceNetwork && this.props.insuranceNetwork.results && this.props.insuranceNetwork.results.length ? _react2.default.createElement(
                                                    'ul',
                                                    null,
                                                    this.props.insuranceNetwork.results.map(function (result, index) {
                                                        return _react2.default.createElement(
                                                            'li',
                                                            { key: index, className: 'ntwrk-list-item', onClick: function onClick() {
                                                                    return _this3.resultClick(result.id, result.url);
                                                                } },
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'ntwrk-list-content' },
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    { className: 'ntwrk-list-content-name fw-500' },
                                                                    result.name
                                                                ),
                                                                _react2.default.createElement(
                                                                    'div',
                                                                    { className: 'd-flex align-items-center flex-wrap' },
                                                                    result.specializations && result.specializations.length ? _react2.default.createElement(
                                                                        'div',
                                                                        { className: 'd-flex align-items-center flex-wrap', style: { marginRight: 4 } },
                                                                        _react2.default.createElement(
                                                                            'p',
                                                                            { className: 'ntwrk-list-content-city fw-500' },
                                                                            result.specializations[0]
                                                                        ),
                                                                        _react2.default.createElement(
                                                                            'span',
                                                                            { style: { marginLeft: 4, color: '#757575' } },
                                                                            '|'
                                                                        )
                                                                    ) : '',
                                                                    _react2.default.createElement(
                                                                        'p',
                                                                        { className: 'ntwrk-list-content-city fw-500' },
                                                                        result.city
                                                                    )
                                                                )
                                                            ),
                                                            result.distance ? _react2.default.createElement(
                                                                'div',
                                                                { className: 'ntwrk-list-dist' },
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    { className: 'fw-500' },
                                                                    result.distance,
                                                                    ' km'
                                                                )
                                                            ) : ''
                                                        );
                                                    })
                                                ) : this.props.insuranceNetwork && this.props.insuranceNetwork.results && !this.props.insuranceNetwork.results.length ? _react2.default.createElement(
                                                    'p',
                                                    { className: 'fw-500 text-center', style: { fontSize: 18, padding: '15px 0px' } },
                                                    'No results found !!'
                                                ) : ''
                                            )
                                        ) : ""
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'button',
                                { onClick: function onClick() {
                                        return _this3.props.history.go(-1);
                                    }, className: 'v-btn p-3 v-btn-primary btn-lg fixed horizontal bottom no-round text-lg sticky-btn' },
                                'Back'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return InsuranceNetworkView;
}(_react2.default.Component);

exports.default = InsuranceNetworkView;

/***/ }),

/***/ "./dev/js/containers/insurance/InsuranceNetwork.js":
/*!*********************************************************!*\
  !*** ./dev/js/containers/insurance/InsuranceNetwork.js ***!
  \*********************************************************/
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

var _InsuranceNetworkView = __webpack_require__(/*! ../../components/insurance/InsuranceNetworkView.js */ "./dev/js/components/insurance/InsuranceNetworkView.js");

var _InsuranceNetworkView2 = _interopRequireDefault(_InsuranceNetworkView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InsuranceNetwork = function (_React$Component) {
    _inherits(InsuranceNetwork, _React$Component);

    function InsuranceNetwork() {
        _classCallCheck(this, InsuranceNetwork);

        return _possibleConstructorReturn(this, (InsuranceNetwork.__proto__ || Object.getPrototypeOf(InsuranceNetwork)).apply(this, arguments));
    }

    _createClass(InsuranceNetwork, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_InsuranceNetworkView2.default, this.props);
        }
    }]);

    return InsuranceNetwork;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    var _state$SITE_MAP = state.SITE_MAP,
        insuranceNetwork = _state$SITE_MAP.insuranceNetwork,
        inputString = _state$SITE_MAP.inputString,
        networkType = _state$SITE_MAP.networkType;
    var selectedLocation = state.SEARCH_CRITERIA_OPD.selectedLocation;


    return {
        insuranceNetwork: insuranceNetwork,
        inputString: inputString,
        selectedLocation: selectedLocation,
        networkType: networkType
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        getInsuranceNetworks: function getInsuranceNetworks(lat, long, type, searchString, searchBy) {
            return dispatch((0, _index.getInsuranceNetworks)(lat, long, type, searchString, searchBy));
        },
        setNetworkType: function setNetworkType(type) {
            return dispatch((0, _index.setNetworkType)(type));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(InsuranceNetwork);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9pbnN1cmFuY2UvSW5zdXJhbmNlTmV0d29ya1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvaW5zdXJhbmNlL0luc3VyYW5jZU5ldHdvcmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BhdGgtYnJvd3NlcmlmeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkluc3VyYW5jZU5ldHdvcmtWaWV3IiwicHJvcHMiLCJ0b3BMYWJDbGljayIsInNldFN0YXRlIiwidG9wTGFiQWN0aXZlIiwic2VsZWN0ZWRDaGFyIiwidXBkYXRlSW5zdXJhbmNlTmV0d29yayIsInN0YXRlIiwidHlwZSIsIm5ldHdvcmtUeXBlIiwic2VhcmNoVmFsdWUiLCJwbGFjZWhvbGRlciIsInNlYXJjaENpdGllcyIsInNob3dBbHBoYWJldHMiLCJkb2NTZWFyY2giLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInNlYXJjaFN0cmluZyIsImdldENoYXJhY3RlciIsIm5leHRQcm9wcyIsInNlbGVjdGVkTG9jYXRpb24iLCJsYXQiLCJsb25nIiwiZ2VvbWV0cnkiLCJsb2NhdGlvbiIsImxuZyIsImdldEluc3VyYW5jZU5ldHdvcmtzIiwiaW5kZXgiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJzdHJpbmciLCJzZWFyY2hCeSIsImdldExvY2F0aW9uIiwic2V0TmV0d29ya1R5cGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjaXR5IiwiY2hpbGQiLCJzZWxlY3RMb2NhdGlvbiIsInNlYXJjaFJlc3VsdHMiLCJsZW5ndGgiLCJhbHBoYWJldHMiLCJpIiwicHVzaCIsImlkIiwidXJsIiwiaGlzdG9yeSIsImdldEFscGhhYmV0cyIsInRhYkNsaWNrIiwiYm9yZGVyQm90dG9tIiwicmVmIiwiZ2V0Q2l0eUxpc3RMYXlvdXQiLCJiaW5kIiwiZm9udFNpemUiLCJyYWRpb0NsaWNrIiwiaW5wdXRIYW5kbGVyIiwid2lkdGgiLCJBU1NFVFNfQkFTRV9VUkwiLCJtYXAiLCJyZXN1bHQiLCJkZXNjcmlwdGlvbiIsImluc3VyYW5jZU5ldHdvcmsiLCJ0b3RhbF9jb3VudCIsInBhZGRpbmdMZWZ0IiwibWFyZ2luQm90dG9tIiwiY2hhcmFjdGVyIiwiYWxwaGFiZXRDbGljayIsImN1cnNvciIsInJlc3VsdHMiLCJyZXN1bHRDbGljayIsIm5hbWUiLCJzcGVjaWFsaXphdGlvbnMiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkxlZnQiLCJjb2xvciIsImRpc3RhbmNlIiwicGFkZGluZyIsImdvIiwiUmVhY3QiLCJDb21wb25lbnQiLCJJbnN1cmFuY2VOZXR3b3JrIiwibWFwU3RhdGVUb1Byb3BzIiwiU0lURV9NQVAiLCJpbnB1dFN0cmluZyIsIlNFQVJDSF9DUklURVJJQV9PUEQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxvQjs7O0FBQ0Ysa0NBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSkFDVEEsS0FEUzs7QUFBQSxjQXFLbkJDLFdBckttQixHQXFLTCxZQUFNO0FBQ2hCLGtCQUFLQyxRQUFMLENBQWM7QUFDVkMsOEJBQWMsSUFESjtBQUVWQyw4QkFBYztBQUZKLGFBQWQ7QUFJQSxrQkFBS0Msc0JBQUwsQ0FBNEIsS0FBNUIsRUFBbUMsRUFBbkM7QUFDSCxTQTNLa0I7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLGtCQUFNLE1BQUtQLEtBQUwsQ0FBV1EsV0FEUjtBQUVUQyx5QkFBYSxFQUZKO0FBR1RDLHlCQUFhLEVBSEo7QUFJVEMsMEJBQWMsRUFKTDtBQUtUUCwwQkFBYyxDQUxMO0FBTVRRLDJCQUFlLElBTk47QUFPVFQsMEJBQWMsSUFQTDtBQVFUVSx1QkFBVztBQVJGLFNBQWI7QUFGZTtB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJDO0FBQ0Y7QUFDVjtBQUNGO0FBQ007QUFDRjtBQUNKO0FBQ0Y7QUFDSTtBQUNGO0FBQ2M7QUFDRjtBQUNWO0FBQ0Y7QUFDYztBQUNGO0FBQ0o7QUFDRjtBQUNJIiwiZmlsZSI6IjExNy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IExvY2F0aW9uRWxlbWVudHMgZnJvbSAnLi4vLi4vY29udGFpbmVycy9jb21tb25zL2xvY2F0aW9uRWxlbWVudHMnO1xuXG5jbGFzcyBJbnN1cmFuY2VOZXR3b3JrVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0eXBlOiB0aGlzLnByb3BzLm5ldHdvcmtUeXBlLFxuICAgICAgICAgICAgc2VhcmNoVmFsdWU6ICcnLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgICAgICAgICAgc2VhcmNoQ2l0aWVzOiBbXSxcbiAgICAgICAgICAgIHNlbGVjdGVkQ2hhcjogMCxcbiAgICAgICAgICAgIHNob3dBbHBoYWJldHM6IHRydWUsXG4gICAgICAgICAgICB0b3BMYWJBY3RpdmU6IHRydWUsXG4gICAgICAgICAgICBkb2NTZWFyY2g6ICduYW1lJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2VhcmNoU3RyaW5nID0gdGhpcy5nZXRDaGFyYWN0ZXIodGhpcy5zdGF0ZS5zZWxlY3RlZENoYXIpXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnR5cGUgPT0gJ2RvY3RvcicpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSW5zdXJhbmNlTmV0d29yayh0aGlzLnN0YXRlLnR5cGUsIHNlYXJjaFN0cmluZywgdGhpcy5zdGF0ZS5kb2NTZWFyY2gpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUluc3VyYW5jZU5ldHdvcmsodGhpcy5zdGF0ZS50eXBlLCBzZWFyY2hTdHJpbmcpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBsYWNlaG9sZGVyOiBgU2VhcmNoICR7dGhpcy5zdGF0ZS50eXBlfWAgfSlcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAobmV4dFByb3BzLnNlbGVjdGVkTG9jYXRpb24gIT0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKSB7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRMb2NhdGlvbiA9ICcnXG4gICAgICAgICAgICBsZXQgbGF0ID0gMjguNjQ0ODAwXG4gICAgICAgICAgICBsZXQgbG9uZyA9IDc3LjIxNjcyMVxuICAgICAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbiA9IG5leHRQcm9wcy5zZWxlY3RlZExvY2F0aW9uO1xuICAgICAgICAgICAgbGF0ID0gc2VsZWN0ZWRMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sYXRcbiAgICAgICAgICAgIGxvbmcgPSBzZWxlY3RlZExvY2F0aW9uLmdlb21ldHJ5LmxvY2F0aW9uLmxuZ1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBsYXQgPT09ICdmdW5jdGlvbicpIGxhdCA9IGxhdCgpXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxvbmcgPT09ICdmdW5jdGlvbicpIGxvbmcgPSBsb25nKClcbiAgICAgICAgICAgIGxldCBzZWFyY2hTdHJpbmcgPSB0aGlzLmdldENoYXJhY3Rlcih0aGlzLnN0YXRlLnNlbGVjdGVkQ2hhcilcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0SW5zdXJhbmNlTmV0d29ya3MobGF0LCBsb25nLCB0aGlzLnN0YXRlLnR5cGUsIHNlYXJjaFN0cmluZylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldENoYXJhY3RlcihpbmRleCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSg5NyArIGluZGV4KVxuICAgIH1cblxuICAgIHVwZGF0ZUluc3VyYW5jZU5ldHdvcmsodHlwZSwgc3RyaW5nLCBzZWFyY2hCeSA9ICcnKSB7XG4gICAgICAgIGxldCB7IGxhdCwgbG9uZyB9ID0gdGhpcy5nZXRMb2NhdGlvbigpXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0SW5zdXJhbmNlTmV0d29ya3MobGF0LCBsb25nLCB0eXBlLCBzdHJpbmcsIHNlYXJjaEJ5KSAvLyBnZXQgdXNlciBpbnN1cmFuY2UgbmV0d29ya3NcbiAgICB9XG5cbiAgICBnZXRMb2NhdGlvbigpIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkTG9jYXRpb24gPSAnJ1xuICAgICAgICBsZXQgbGF0ID0gMjguNjQ0ODAwXG4gICAgICAgIGxldCBsb25nID0gNzcuMjE2NzIxXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24pIHtcbiAgICAgICAgICAgIHNlbGVjdGVkTG9jYXRpb24gPSB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb247XG4gICAgICAgICAgICBsYXQgPSBzZWxlY3RlZExvY2F0aW9uLmdlb21ldHJ5LmxvY2F0aW9uLmxhdFxuICAgICAgICAgICAgbG9uZyA9IHNlbGVjdGVkTG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubG5nXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxhdCA9PT0gJ2Z1bmN0aW9uJykgbGF0ID0gbGF0KClcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbG9uZyA9PT0gJ2Z1bmN0aW9uJykgbG9uZyA9IGxvbmcoKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGxhdCwgbG9uZyB9XG4gICAgfVxuXG4gICAgdGFiQ2xpY2sodHlwZSkge1xuICAgICAgICBpZiAodHlwZSA9PSAnZG9jdG9yJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1NlYXJjaCBkb2N0b3InLFxuICAgICAgICAgICAgICAgIHNlYXJjaFZhbHVlOiAnJyxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENoYXI6IDAsXG4gICAgICAgICAgICAgICAgZG9jU2VhcmNoOiAnbmFtZSdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBsZXQgc2VhcmNoU3RyaW5nID0gdGhpcy5nZXRDaGFyYWN0ZXIoMClcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSW5zdXJhbmNlTmV0d29yayh0eXBlLCBzZWFyY2hTdHJpbmcsICduYW1lJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09ICdsYWInKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnU2VhcmNoIGxhYicsXG4gICAgICAgICAgICAgICAgc2VhcmNoVmFsdWU6ICcnLFxuICAgICAgICAgICAgICAgIHRvcExhYkFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENoYXI6IG51bGxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUluc3VyYW5jZU5ldHdvcmsodHlwZSwgJycpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5zZXROZXR3b3JrVHlwZSh0eXBlKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0FscGhhYmV0czogdHJ1ZSB9KVxuICAgIH1cblxuICAgIGlucHV0SGFuZGxlcihlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hWYWx1ZTogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudHlwZSA9PSAnZG9jdG9yJykge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dBbHBoYWJldHM6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVJbnN1cmFuY2VOZXR3b3JrKHRoaXMuc3RhdGUudHlwZSwgZS50YXJnZXQudmFsdWUsIHRoaXMuc3RhdGUuZG9jU2VhcmNoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5kb2NTZWFyY2ggPT0gJ25hbWUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93QWxwaGFiZXRzOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dBbHBoYWJldHM6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBzZWFyY2hTdHJpbmcgPSB0aGlzLmdldENoYXJhY3Rlcih0aGlzLnN0YXRlLnNlbGVjdGVkQ2hhcilcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUluc3VyYW5jZU5ldHdvcmsodGhpcy5zdGF0ZS50eXBlLCBzZWFyY2hTdHJpbmcsIHRoaXMuc3RhdGUuZG9jU2VhcmNoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dBbHBoYWJldHM6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVJbnN1cmFuY2VOZXR3b3JrKHRoaXMuc3RhdGUudHlwZSwgZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93QWxwaGFiZXRzOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgbGV0IHNlYXJjaFN0cmluZyA9IHRoaXMuZ2V0Q2hhcmFjdGVyKHRoaXMuc3RhdGUuc2VsZWN0ZWRDaGFyKVxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSW5zdXJhbmNlTmV0d29yayh0aGlzLnN0YXRlLnR5cGUsIHNlYXJjaFN0cmluZylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdExvY2F0aW9uKGNpdHkpIHtcbiAgICAgICAgdGhpcy5jaGlsZC5zZWxlY3RMb2NhdGlvbigoY2l0eSksICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hDaXRpZXM6IFtdIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0Q2l0eUxpc3RMYXlvdXQoc2VhcmNoUmVzdWx0cyA9IFtdKSB7XG4gICAgICAgIGlmIChzZWFyY2hSZXN1bHRzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaENpdGllczogc2VhcmNoUmVzdWx0cyB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaENpdGllczogW10sIHNlYXJjaFZhbHVlOiAnJyB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWxwaGFiZXRDbGljayhpbmRleCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRDaGFyOiBpbmRleCwgdG9wTGFiQWN0aXZlOiBmYWxzZSB9KVxuICAgICAgICBsZXQgc2VhcmNoU3RyaW5nID0gdGhpcy5nZXRDaGFyYWN0ZXIoaW5kZXgpXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnR5cGUgPT0gJ2RvY3RvcicpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSW5zdXJhbmNlTmV0d29yayh0aGlzLnN0YXRlLnR5cGUsIHNlYXJjaFN0cmluZywgJ25hbWUnKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVJbnN1cmFuY2VOZXR3b3JrKHRoaXMuc3RhdGUudHlwZSwgc2VhcmNoU3RyaW5nKVxuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QWxwaGFiZXRzKCkge1xuICAgICAgICBsZXQgYWxwaGFiZXRzID0gW11cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMjU7IGkrKykge1xuICAgICAgICAgICAgYWxwaGFiZXRzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGkpKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhbHBoYWJldHNcbiAgICB9XG5cbiAgICByZXN1bHRDbGljayhpZCwgdXJsKSB7XG4gICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvJHt1cmx9P2Zyb209aW5zdXJhbmNlX25ldHdvcmtgKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9vcGQvZG9jdG9yLyR7aWR9P2Zyb209aW5zdXJhbmNlX25ldHdvcmtgKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9wTGFiQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdG9wTGFiQWN0aXZlOiB0cnVlLFxuICAgICAgICAgICAgc2VsZWN0ZWRDaGFyOiBudWxsXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMudXBkYXRlSW5zdXJhbmNlTmV0d29yaygnbGFiJywgJycpXG4gICAgfVxuXG4gICAgcmFkaW9DbGljayh0eXBlKSB7XG4gICAgICAgIGxldCBzZWFyY2hTdHJpbmcgPSB0aGlzLmdldENoYXJhY3Rlcih0aGlzLnN0YXRlLnNlbGVjdGVkQ2hhcilcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFZhbHVlOiAnJywgc2hvd0FscGhhYmV0czogdHJ1ZSB9KVxuICAgICAgICBpZiAodHlwZSA9PSAnbmFtZScpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkb2NTZWFyY2g6ICduYW1lJywgc2hvd0FscGhhYmV0czogdHJ1ZSB9KVxuICAgICAgICAgICAgdGhpcy51cGRhdGVJbnN1cmFuY2VOZXR3b3JrKCdkb2N0b3InLCBzZWFyY2hTdHJpbmcsICduYW1lJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkb2NTZWFyY2g6ICdzcGVjaWFsaXphdGlvbicsIHNob3dBbHBoYWJldHM6IGZhbHNlIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBhbHBoYWJldHMgPSB0aGlzLmdldEFscGhhYmV0cygpXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG4gICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgey4uLnRoaXMucHJvcHN9IHNob3dQYWNrYWdlU3RyaXA9e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGRwLWNvbnRhaW5lci1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNvbC1sZy03IGNlbnRlci1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm50d3JrLXRhYnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIG9uQ2xpY2s9eygpID0+IHRoaXMudGFiQ2xpY2soJ2RvY3RvcicpfSBzdHlsZT17dGhpcy5zdGF0ZS50eXBlID09ICdkb2N0b3InID8geyBib3JkZXJCb3R0b206ICcycHggc29saWQgI2Y3ODYzMScgfSA6IHt9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPkRvY3RvcnM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgb25DbGljaz17KCkgPT4gdGhpcy50YWJDbGljaygnbGFiJyl9IHN0eWxlPXt0aGlzLnN0YXRlLnR5cGUgPT0gJ2xhYicgPyB7IGJvcmRlckJvdHRvbTogJzJweCBzb2xpZCAjZjc4NjMxJyB9IDoge319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+RGlhZ25vc3RpYyBMYWJzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC10b3AtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcmNoLW53LWlucHV0cy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYXRpb25FbGVtZW50cyB7Li4udGhpcy5wcm9wc30gb25SZWY9e3JlZiA9PiAodGhpcy5jaGlsZCA9IHJlZil9IGdldENpdHlMaXN0TGF5b3V0PXt0aGlzLmdldENpdHlMaXN0TGF5b3V0LmJpbmQodGhpcyl9IHJlc3VsdFR5cGU9J3NlYXJjaCcgZnJvbUNyaXRlcmlhPXt0cnVlfSBjb21tb25TZWFyY2hQYWdlPXt0cnVlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiByYWRpbyBidXR0b25zICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50eXBlID09ICdkb2N0b3InID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3JjaC1yYWRpby1idG5zIGlwZC1zcmNoLXJhZGlvLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHRsLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIiBzdHlsZT17eyBmb250U2l6ZTogMTMgfX0+U2VhcmNoIGJ5IG5hbWU8aW5wdXQgdHlwZT1cInJhZGlvXCIgb25DaGFuZ2U9eygpID0+IHRoaXMucmFkaW9DbGljaygnbmFtZScpfSBjaGVja2VkPXt0aGlzLnN0YXRlLmRvY1NlYXJjaCA9PSAnbmFtZSd9IG5hbWU9XCJyYWRpb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb2MtY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHRsLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIiBzdHlsZT17eyBmb250U2l6ZTogMTMgfX0+U2VhcmNoIGJ5IHNwZWNpYWxpemF0aW9uPGlucHV0IHR5cGU9XCJyYWRpb1wiIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLnJhZGlvQ2xpY2soJ3NwZWNpYWxpemF0aW9uJyl9IGNoZWNrZWQ9e3RoaXMuc3RhdGUuZG9jU2VhcmNoID09ICdzcGVjaWFsaXphdGlvbid9IG5hbWU9XCJyYWRpb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb2MtY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJjaC1udy1pbnB1dHMgbWItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBhdXRvQ29tcGxldGU9XCJvZmZcIiBjbGFzc05hbWU9XCJkLWJsb2NrIG5ldy1zcmNoLWRvYy1sYWJcIiBpZD1cInNlYXJjaF9iYXJcIiBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNoVmFsdWV9IHBsYWNlaG9sZGVyPXt0aGlzLnN0YXRlLnBsYWNlaG9sZGVyfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMTVweCcgfX0gY2xhc3NOYW1lPVwic3JjaC1pbnAtaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvc2hhcGUtc3JjaC5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VhcmNoQ2l0aWVzLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgc2VhcmNoTWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbW9uLXNlYXJjaC1jb250YWluZXIgcHQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tb24tbGlzdGluZy1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlYXJjaENpdGllcy5tYXAoKHJlc3VsdCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpfSBvbkNsaWNrPXt0aGlzLnNlbGVjdExvY2F0aW9uLmJpbmQodGhpcywgcmVzdWx0KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntyZXN1bHQuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VhcmNoQ2l0aWVzLmxlbmd0aCA9PSAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIndpZGdldCBzZWFyY2hNYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnR3cmstYWxwaGEtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuc3RhdGUuc2VhcmNoVmFsdWUgJiYgdGhpcy5wcm9wcy5pbnN1cmFuY2VOZXR3b3JrICYmIHRoaXMucHJvcHMuaW5zdXJhbmNlTmV0d29yay50b3RhbF9jb3VudCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAxMCwgbWFyZ2luQm90dG9tOiA0IH19Pnt0aGlzLnByb3BzLmluc3VyYW5jZU5ldHdvcmsudG90YWxfY291bnR9IHt0aGlzLnN0YXRlLnR5cGV9cyBjb3ZlcmVkIHVuZGVyIGluc3VyYW5jZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0FscGhhYmV0cyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IHRvcC1udHdya3MtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50eXBlID09ICdsYWInID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbnR3cmtzXCIgb25DbGljaz17dGhpcy50b3BMYWJDbGlja30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Ake3RoaXMuc3RhdGUudG9wTGFiQWN0aXZlID8gYGZ3LTUwMCB0ZXh0LXByaW1hcnlgIDogYGZ3LTUwMGB9YH0+VG9wIExhYnM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibnR3cmstYWxwaGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFscGhhYmV0cyAmJiBhbHBoYWJldHMubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFscGhhYmV0cy5tYXAoKGNoYXJhY3RlciwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmFscGhhYmV0Q2xpY2soaSl9IHN0eWxlPXtpID09IHRoaXMuc3RhdGUuc2VsZWN0ZWRDaGFyID8geyBjdXJzb3I6ICdhdXRvJyB9IDogeyBjdXJzb3I6ICdwb2ludGVyJyB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17aSA9PSB0aGlzLnN0YXRlLnNlbGVjdGVkQ2hhciA/ICdhbHBoYVNlbGVjdGVkIG50d3JrLWNoYXIgZnctNTAwJyA6ICdudHdyay1jaGFyIGZ3LTUwMCd9PntjaGFyYWN0ZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaW5zdXJhbmNlTmV0d29yayAmJiB0aGlzLnByb3BzLmluc3VyYW5jZU5ldHdvcmsucmVzdWx0cyAmJiB0aGlzLnByb3BzLmluc3VyYW5jZU5ldHdvcmsucmVzdWx0cy5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pbnN1cmFuY2VOZXR3b3JrLnJlc3VsdHMubWFwKChyZXN1bHQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJudHdyay1saXN0LWl0ZW1cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnJlc3VsdENsaWNrKHJlc3VsdC5pZCwgcmVzdWx0LnVybCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm50d3JrLWxpc3QtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibnR3cmstbGlzdC1jb250ZW50LW5hbWUgZnctNTAwXCI+e3Jlc3VsdC5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zcGVjaWFsaXphdGlvbnMgJiYgcmVzdWx0LnNwZWNpYWxpemF0aW9ucy5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGZsZXgtd3JhcFwiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiA0IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm50d3JrLWxpc3QtY29udGVudC1jaXR5IGZ3LTUwMFwiPntyZXN1bHQuc3BlY2lhbGl6YXRpb25zWzBdfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiA0LCBjb2xvcjogJyM3NTc1NzUnIH19Pnw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJudHdyay1saXN0LWNvbnRlbnQtY2l0eSBmdy01MDBcIj57cmVzdWx0LmNpdHl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuZGlzdGFuY2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnR3cmstbGlzdC1kaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPntyZXN1bHQuZGlzdGFuY2V9IGttPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaW5zdXJhbmNlTmV0d29yayAmJiB0aGlzLnByb3BzLmluc3VyYW5jZU5ldHdvcmsucmVzdWx0cyAmJiAhdGhpcy5wcm9wcy5pbnN1cmFuY2VOZXR3b3JrLnJlc3VsdHMubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtY2VudGVyXCIgc3R5bGU9e3sgZm9udFNpemU6IDE4LCBwYWRkaW5nOiAnMTVweCAwcHgnIH19ID5ObyByZXN1bHRzIGZvdW5kICEhPC9wPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5oaXN0b3J5LmdvKC0xKX0gY2xhc3NOYW1lPVwidi1idG4gcC0zIHYtYnRuLXByaW1hcnkgYnRuLWxnIGZpeGVkIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIHRleHQtbGcgc3RpY2t5LWJ0blwiPkJhY2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdXJhbmNlTmV0d29ya1ZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBnZXRJbnN1cmFuY2VOZXR3b3Jrcywgc2V0TmV0d29ya1R5cGUgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IEluc3VyYW5jZU5ldHdvcmtWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW5zdXJhbmNlL0luc3VyYW5jZU5ldHdvcmtWaWV3LmpzJ1xuXG5jbGFzcyBJbnN1cmFuY2VOZXR3b3JrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxJbnN1cmFuY2VOZXR3b3JrVmlldyB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBpbnN1cmFuY2VOZXR3b3JrLFxuICAgICAgICBpbnB1dFN0cmluZyxcbiAgICAgICAgbmV0d29ya1R5cGVcbiAgICB9ID0gc3RhdGUuU0lURV9NQVBcblxuICAgIGNvbnN0IHtcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvblxuICAgIH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfT1BEXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbnN1cmFuY2VOZXR3b3JrLFxuICAgICAgICBpbnB1dFN0cmluZyxcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgbmV0d29ya1R5cGVcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldEluc3VyYW5jZU5ldHdvcmtzOiAobGF0LCBsb25nLCB0eXBlLCBzZWFyY2hTdHJpbmcsIHNlYXJjaEJ5KSA9PiBkaXNwYXRjaChnZXRJbnN1cmFuY2VOZXR3b3JrcyhsYXQsIGxvbmcsIHR5cGUsIHNlYXJjaFN0cmluZywgc2VhcmNoQnkpKSxcbiAgICAgICAgc2V0TmV0d29ya1R5cGU6ICh0eXBlKSA9PiBkaXNwYXRjaChzZXROZXR3b3JrVHlwZSh0eXBlKSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEluc3VyYW5jZU5ldHdvcmspIiwiLy8gLmRpcm5hbWUsIC5iYXNlbmFtZSwgYW5kIC5leHRuYW1lIG1ldGhvZHMgYXJlIGV4dHJhY3RlZCBmcm9tIE5vZGUuanMgdjguMTEuMSxcbi8vIGJhY2twb3J0ZWQgYW5kIHRyYW5zcGxpdGVkIHdpdGggQmFiZWwsIHdpdGggYmFja3dhcmRzLWNvbXBhdCBmaXhlc1xuXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXG4vLyBtdXN0IGJlIG5vIHNsYXNoZXMsIGVtcHR5IGVsZW1lbnRzLCBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxuLy8gKHNvIGFsc28gbm8gbGVhZGluZyBhbmQgdHJhaWxpbmcgc2xhc2hlcyAtIGl0IGRvZXMgbm90IGRpc3Rpbmd1aXNoXG4vLyByZWxhdGl2ZSBhbmQgYWJzb2x1dGUgcGF0aHMpXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcbiAgLy8gaWYgdGhlIHBhdGggdHJpZXMgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIGB1cGAgZW5kcyB1cCA+IDBcbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhcnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGxhc3QgPSBwYXJ0c1tpXTtcbiAgICBpZiAobGFzdCA9PT0gJy4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlIHBhdGggaXMgYWxsb3dlZCB0byBnbyBhYm92ZSB0aGUgcm9vdCwgcmVzdG9yZSBsZWFkaW5nIC4uc1xuICBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcbiAgICBmb3IgKDsgdXAtLTsgdXApIHtcbiAgICAgIHBhcnRzLnVuc2hpZnQoJy4uJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG4vLyBwYXRoLnJlc29sdmUoW2Zyb20gLi4uXSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlc29sdmUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlc29sdmVkUGF0aCA9ICcnLFxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMSAmJiAhcmVzb2x2ZWRBYnNvbHV0ZTsgaS0tKSB7XG4gICAgdmFyIHBhdGggPSAoaSA+PSAwKSA/IGFyZ3VtZW50c1tpXSA6IHByb2Nlc3MuY3dkKCk7XG5cbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcbiAgICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH0gZWxzZSBpZiAoIXBhdGgpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJlc29sdmVkUGF0aCA9IHBhdGggKyAnLycgKyByZXNvbHZlZFBhdGg7XG4gICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IHBhdGguY2hhckF0KDApID09PSAnLyc7XG4gIH1cblxuICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCwgYnV0XG4gIC8vIGhhbmRsZSByZWxhdGl2ZSBwYXRocyB0byBiZSBzYWZlIChtaWdodCBoYXBwZW4gd2hlbiBwcm9jZXNzLmN3ZCgpIGZhaWxzKVxuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICByZXNvbHZlZFBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocmVzb2x2ZWRQYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIXJlc29sdmVkQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICByZXR1cm4gKChyZXNvbHZlZEFic29sdXRlID8gJy8nIDogJycpICsgcmVzb2x2ZWRQYXRoKSB8fCAnLic7XG59O1xuXG4vLyBwYXRoLm5vcm1hbGl6ZShwYXRoKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHZhciBpc0Fic29sdXRlID0gZXhwb3J0cy5pc0Fic29sdXRlKHBhdGgpLFxuICAgICAgdHJhaWxpbmdTbGFzaCA9IHN1YnN0cihwYXRoLCAtMSkgPT09ICcvJztcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihwYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIWlzQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICBpZiAoIXBhdGggJiYgIWlzQWJzb2x1dGUpIHtcbiAgICBwYXRoID0gJy4nO1xuICB9XG4gIGlmIChwYXRoICYmIHRyYWlsaW5nU2xhc2gpIHtcbiAgICBwYXRoICs9ICcvJztcbiAgfVxuXG4gIHJldHVybiAoaXNBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHBhdGg7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmlzQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5qb2luID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwYXRocyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gIHJldHVybiBleHBvcnRzLm5vcm1hbGl6ZShmaWx0ZXIocGF0aHMsIGZ1bmN0aW9uKHAsIGluZGV4KSB7XG4gICAgaWYgKHR5cGVvZiBwICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGguam9pbiBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9XG4gICAgcmV0dXJuIHA7XG4gIH0pLmpvaW4oJy8nKSk7XG59O1xuXG5cbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlbGF0aXZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcbiAgZnJvbSA9IGV4cG9ydHMucmVzb2x2ZShmcm9tKS5zdWJzdHIoMSk7XG4gIHRvID0gZXhwb3J0cy5yZXNvbHZlKHRvKS5zdWJzdHIoMSk7XG5cbiAgZnVuY3Rpb24gdHJpbShhcnIpIHtcbiAgICB2YXIgc3RhcnQgPSAwO1xuICAgIGZvciAoOyBzdGFydCA8IGFyci5sZW5ndGg7IHN0YXJ0KyspIHtcbiAgICAgIGlmIChhcnJbc3RhcnRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgdmFyIGVuZCA9IGFyci5sZW5ndGggLSAxO1xuICAgIGZvciAoOyBlbmQgPj0gMDsgZW5kLS0pIHtcbiAgICAgIGlmIChhcnJbZW5kXSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChzdGFydCA+IGVuZCkgcmV0dXJuIFtdO1xuICAgIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSk7XG4gIH1cblxuICB2YXIgZnJvbVBhcnRzID0gdHJpbShmcm9tLnNwbGl0KCcvJykpO1xuICB2YXIgdG9QYXJ0cyA9IHRyaW0odG8uc3BsaXQoJy8nKSk7XG5cbiAgdmFyIGxlbmd0aCA9IE1hdGgubWluKGZyb21QYXJ0cy5sZW5ndGgsIHRvUGFydHMubGVuZ3RoKTtcbiAgdmFyIHNhbWVQYXJ0c0xlbmd0aCA9IGxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChmcm9tUGFydHNbaV0gIT09IHRvUGFydHNbaV0pIHtcbiAgICAgIHNhbWVQYXJ0c0xlbmd0aCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB2YXIgb3V0cHV0UGFydHMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIG91dHB1dFBhcnRzLnB1c2goJy4uJyk7XG4gIH1cblxuICBvdXRwdXRQYXJ0cyA9IG91dHB1dFBhcnRzLmNvbmNhdCh0b1BhcnRzLnNsaWNlKHNhbWVQYXJ0c0xlbmd0aCkpO1xuXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCcvJyk7XG59O1xuXG5leHBvcnRzLnNlcCA9ICcvJztcbmV4cG9ydHMuZGVsaW1pdGVyID0gJzonO1xuXG5leHBvcnRzLmRpcm5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICBpZiAocGF0aC5sZW5ndGggPT09IDApIHJldHVybiAnLic7XG4gIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KDApO1xuICB2YXIgaGFzUm9vdCA9IGNvZGUgPT09IDQ3IC8qLyovO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDE7IC0taSkge1xuICAgIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgZW5kID0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuIGhhc1Jvb3QgPyAnLycgOiAnLic7XG4gIGlmIChoYXNSb290ICYmIGVuZCA9PT0gMSkge1xuICAgIC8vIHJldHVybiAnLy8nO1xuICAgIC8vIEJhY2t3YXJkcy1jb21wYXQgZml4OlxuICAgIHJldHVybiAnLyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2UoMCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGJhc2VuYW1lKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcblxuICB2YXIgc3RhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICB2YXIgaTtcblxuICBmb3IgKGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgaWYgKHBhdGguY2hhckNvZGVBdChpKSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBwYXRoIGNvbXBvbmVudFxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuICcnO1xuICByZXR1cm4gcGF0aC5zbGljZShzdGFydCwgZW5kKTtcbn1cblxuLy8gVXNlcyBhIG1peGVkIGFwcHJvYWNoIGZvciBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSwgYXMgZXh0IGJlaGF2aW9yIGNoYW5nZWRcbi8vIGluIG5ldyBOb2RlLmpzIHZlcnNpb25zLCBzbyBvbmx5IGJhc2VuYW1lKCkgYWJvdmUgaXMgYmFja3BvcnRlZCBoZXJlXG5leHBvcnRzLmJhc2VuYW1lID0gZnVuY3Rpb24gKHBhdGgsIGV4dCkge1xuICB2YXIgZiA9IGJhc2VuYW1lKHBhdGgpO1xuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xuICB9XG4gIHJldHVybiBmO1xufTtcblxuZXhwb3J0cy5leHRuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgdmFyIHN0YXJ0RG90ID0gLTE7XG4gIHZhciBzdGFydFBhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICAvLyBUcmFjayB0aGUgc3RhdGUgb2YgY2hhcmFjdGVycyAoaWYgYW55KSB3ZSBzZWUgYmVmb3JlIG91ciBmaXJzdCBkb3QgYW5kXG4gIC8vIGFmdGVyIGFueSBwYXRoIHNlcGFyYXRvciB3ZSBmaW5kXG4gIHZhciBwcmVEb3RTdGF0ZSA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0UGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBleHRlbnNpb25cbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICAgIGlmIChjb2RlID09PSA0NiAvKi4qLykge1xuICAgICAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCBkb3QsIG1hcmsgaXQgYXMgdGhlIHN0YXJ0IG9mIG91ciBleHRlbnNpb25cbiAgICAgICAgaWYgKHN0YXJ0RG90ID09PSAtMSlcbiAgICAgICAgICBzdGFydERvdCA9IGk7XG4gICAgICAgIGVsc2UgaWYgKHByZURvdFN0YXRlICE9PSAxKVxuICAgICAgICAgIHByZURvdFN0YXRlID0gMTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0RG90ICE9PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBhbmQgbm9uLXBhdGggc2VwYXJhdG9yIGJlZm9yZSBvdXIgZG90LCBzbyB3ZSBzaG91bGRcbiAgICAgIC8vIGhhdmUgYSBnb29kIGNoYW5jZSBhdCBoYXZpbmcgYSBub24tZW1wdHkgZXh0ZW5zaW9uXG4gICAgICBwcmVEb3RTdGF0ZSA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGFydERvdCA9PT0gLTEgfHwgZW5kID09PSAtMSB8fFxuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBjaGFyYWN0ZXIgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBkb3RcbiAgICAgIHByZURvdFN0YXRlID09PSAwIHx8XG4gICAgICAvLyBUaGUgKHJpZ2h0LW1vc3QpIHRyaW1tZWQgcGF0aCBjb21wb25lbnQgaXMgZXhhY3RseSAnLi4nXG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMSAmJiBzdGFydERvdCA9PT0gZW5kIC0gMSAmJiBzdGFydERvdCA9PT0gc3RhcnRQYXJ0ICsgMSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZShzdGFydERvdCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGZpbHRlciAoeHMsIGYpIHtcbiAgICBpZiAoeHMuZmlsdGVyKSByZXR1cm4geHMuZmlsdGVyKGYpO1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChmKHhzW2ldLCBpLCB4cykpIHJlcy5wdXNoKHhzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLy8gU3RyaW5nLnByb3RvdHlwZS5zdWJzdHIgLSBuZWdhdGl2ZSBpbmRleCBkb24ndCB3b3JrIGluIElFOFxudmFyIHN1YnN0ciA9ICdhYicuc3Vic3RyKC0xKSA9PT0gJ2InXG4gICAgPyBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7IHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pIH1cbiAgICA6IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHtcbiAgICAgICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSBzdHIubGVuZ3RoICsgc3RhcnQ7XG4gICAgICAgIHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pO1xuICAgIH1cbjtcbiIsImltcG9ydCBfTWVtb3J5Um91dGVyIGZyb20gXCIuL01lbW9yeVJvdXRlclwiO1xuZXhwb3J0IHsgX01lbW9yeVJvdXRlciBhcyBNZW1vcnlSb3V0ZXIgfTtcbmltcG9ydCBfUHJvbXB0IGZyb20gXCIuL1Byb21wdFwiO1xuZXhwb3J0IHsgX1Byb21wdCBhcyBQcm9tcHQgfTtcbmltcG9ydCBfUmVkaXJlY3QgZnJvbSBcIi4vUmVkaXJlY3RcIjtcbmV4cG9ydCB7IF9SZWRpcmVjdCBhcyBSZWRpcmVjdCB9O1xuaW1wb3J0IF9Sb3V0ZSBmcm9tIFwiLi9Sb3V0ZVwiO1xuZXhwb3J0IHsgX1JvdXRlIGFzIFJvdXRlIH07XG5pbXBvcnQgX1JvdXRlciBmcm9tIFwiLi9Sb3V0ZXJcIjtcbmV4cG9ydCB7IF9Sb3V0ZXIgYXMgUm91dGVyIH07XG5pbXBvcnQgX1N0YXRpY1JvdXRlciBmcm9tIFwiLi9TdGF0aWNSb3V0ZXJcIjtcbmV4cG9ydCB7IF9TdGF0aWNSb3V0ZXIgYXMgU3RhdGljUm91dGVyIH07XG5pbXBvcnQgX1N3aXRjaCBmcm9tIFwiLi9Td2l0Y2hcIjtcbmV4cG9ydCB7IF9Td2l0Y2ggYXMgU3dpdGNoIH07XG5pbXBvcnQgX2dlbmVyYXRlUGF0aCBmcm9tIFwiLi9nZW5lcmF0ZVBhdGhcIjtcbmV4cG9ydCB7IF9nZW5lcmF0ZVBhdGggYXMgZ2VuZXJhdGVQYXRoIH07XG5pbXBvcnQgX21hdGNoUGF0aCBmcm9tIFwiLi9tYXRjaFBhdGhcIjtcbmV4cG9ydCB7IF9tYXRjaFBhdGggYXMgbWF0Y2hQYXRoIH07XG5pbXBvcnQgX3dpdGhSb3V0ZXIgZnJvbSBcIi4vd2l0aFJvdXRlclwiO1xuZXhwb3J0IHsgX3dpdGhSb3V0ZXIgYXMgd2l0aFJvdXRlciB9OyJdLCJzb3VyY2VSb290IjoiIn0=