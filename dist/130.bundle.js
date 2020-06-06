(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[130],{

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _Loader = __webpack_require__(/*! ../../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _LeftBar = __webpack_require__(/*! ../../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _mapHelpers = __webpack_require__(/*! ../../../helpers/mapHelpers */ "./dev/js/helpers/mapHelpers.js");

var _expansionPanel = __webpack_require__(/*! ../../diagnosis/commons/labTests/expansionPanel */ "./dev/js/components/diagnosis/commons/labTests/expansionPanel.js");

var _expansionPanel2 = _interopRequireDefault(_expansionPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var LocationSearch = function (_React$Component) {
    _inherits(LocationSearch, _React$Component);

    function LocationSearch(props) {
        _classCallCheck(this, LocationSearch);

        var _this = _possibleConstructorReturn(this, (LocationSearch.__proto__ || Object.getPrototypeOf(LocationSearch)).call(this, props));

        var parsed = queryString.parse(_this.props.location.search);
        _this.state = {
            search: "",
            searchResults: [],
            detectLoading: false,
            redirect_to: parsed.redirect_to,
            defaultTest: [],
            radioChecked: "",
            testName: '',
            showLocationResult: true
        };
        return _this;
    }

    _createClass(LocationSearch, [{
        key: 'getLocation',
        value: function getLocation(location) {
            (0, _mapHelpers._autoCompleteService)(location, function (results, status) {
                results = results || [];
                this.setState({ searchResults: results });
            }.bind(this));
        }
    }, {
        key: 'inputHandler',
        value: function inputHandler(e) {
            this.setState({
                search: e.target.value,
                showLocationResult: true
            });
            this.getLocation(e.target.value);
        }
    }, {
        key: 'selectLocation',
        value: function selectLocation(location) {
            var _this2 = this;

            var timeout = setTimeout(function () {
                if (_this2.state.detectLoading) {
                    _this2.setState({ detectLoading: false });
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Could not select location." });
                }
            }, 5000);
            this.setState({ detectLoading: true, search: location.description, showLocationResult: false });

            (0, _mapHelpers._getLocationFromPlaceId)(location.reference, function (location_object) {
                var data = {
                    'Category': 'ConsumerApp', 'Action': 'UserLocation', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'user-location', 'location': location_object.name || '', 'place_id': location_object.place_id || '', 'formatted_address': location_object.formatted_address || ''
                };
                _gtm2.default.sendEvent({ data: data });

                _this2.props.selectLocation(location_object, 'autoComplete').then(function () {
                    _this2.setState({ detectLoading: false });
                    if (_this2.state.redirect_to) {
                        if (_this2.props.location.search && _this2.props.location.search.includes('?lab_card=true')) {
                            // do nothing
                        } else {
                            if (_this2.state.redirect_to.includes('searchresults')) {
                                _this2.props.history.replace(_this2.state.redirect_to);
                                return;
                            }
                            _this2.props.history.push(_this2.state.redirect_to);
                        }
                    } else {
                        if (_this2.props.location.search && _this2.props.location.search.includes('?lab_card=true')) {
                            // do nothing
                        } else {
                            _this2.props.history.go(-1);
                        }
                    }
                });
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var input = document.getElementById('topLocationSearch');
            input.focus();
            if (this.props.location.search && this.props.location.search.includes('?lab_card=true')) {
                var parsed = queryString.parse(this.props.location.search);
                var testIds = [];
                if (parsed.id) {
                    testIds = parsed.id.split(',').map(function (x) {
                        return parseInt(x);
                    });
                    this.setState({ defaultTest: testIds });
                }
                this.props.fetchTestList(parsed.id || '');
            }
        }
    }, {
        key: 'detectLocation',
        value: function detectLocation() {
            var _this3 = this;

            var timeout = setTimeout(function () {
                if (_this3.state.detectLoading) {
                    _this3.setState({ detectLoading: false });
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Could not fetch location." });
                }
            }, 5000);

            this.setState({ detectLoading: true });

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    (0, _mapHelpers._getlocationFromLatLong)(parseFloat(position.coords.latitude), parseFloat(position.coords.longitude), 'locality', function (location_object) {
                        _this3.props.selectLocation(location_object, 'autoDetect').then(function () {
                            clearTimeout(timeout);
                            if (_this3.state.redirect_to) {
                                if (_this3.props.location.search && _this3.props.location.search.includes('?lab_card=true')) {
                                    // do nothing
                                } else {
                                    _this3.props.history.push(_this3.state.redirect_to);
                                }
                            } else {
                                if (_this3.props.location.search && _this3.props.location.search.includes('?lab_card=true')) {
                                    // do nothing
                                } else {
                                    _this3.props.history.go(-1);
                                }
                            }
                            _this3.setState({ detectLoading: false });
                        });
                    });
                }, function (a, b, c) {
                    _this3.setState({ detectLoading: false });
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Could not fetch location." });
                }, function (a, b, c) {
                    _this3.setState({ detectLoading: false });
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Could not fetch location." });
                });
            } else {
                this.setState({ detectLoading: false });
                // geolocation is not supported
            }
        }
    }, {
        key: 'selectCategoryTests',
        value: function selectCategoryTests(catId, test) {
            this.setState({ radioChecked: test.id, testName: test.name, defaultTest: [] });
        }
    }, {
        key: 'doneBtnClick',
        value: function doneBtnClick() {
            var selectedTest = {};
            if (this.state.radioChecked) {
                selectedTest.name = this.state.testName;
                selectedTest.id = this.state.radioChecked;
                this.props.toggleDiagnosisCriteria('test', selectedTest || {}, true);
            }
            this.props.history.go(-1);
        }
    }, {
        key: 'focusOut',
        value: function focusOut() {
            var data = {
                'Category': 'ConsumerApp', 'Action': 'locationInputFocusOut', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'location-search-focus-out', 'searchString': this.state.search
            };
            _gtm2.default.sendEvent({ data: data });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

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
                                                _react2.default.createElement('input', { className: 'new-srch-inp', autoComplete: 'off', placeholder: 'Enter any city or locality', value: this.state.search, onChange: this.inputHandler.bind(this), id: 'topLocationSearch', disabled: this.state.detectLoading, onBlur: function onBlur() {
                                                        return _this4.focusOut();
                                                    } }),
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
                                                this.state.searchResults.map(function (result, i) {
                                                    return _react2.default.createElement(
                                                        'li',
                                                        { key: i, onClick: _this4.selectLocation.bind(_this4, result) },
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
                                this.props.testList && this.props.testList.length ? this.props.testList.filter(function (x) {
                                    return x.tests.length > 0;
                                }).map(function (test, i) {
                                    return _react2.default.createElement(_expansionPanel2.default, {
                                        key: i,
                                        locationSearch: true,
                                        heading: test.category_name,
                                        contentList: test.tests,
                                        categoryId: test.category_id,
                                        radioChecked: _this4.state.radioChecked,
                                        selectCategory: _this4.selectCategoryTests.bind(_this4),
                                        defaultTest: _this4.state.defaultTest
                                    });
                                }) : '',
                                _react2.default.createElement(
                                    'button',
                                    { className: 'v-btn p-3 v-btn-primary btn-lg fixed horizontal bottom no-round text-lg sticky-btn', onClick: function onClick() {
                                            return _this4.doneBtnClick();
                                        } },
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
    }]);

    return LocationSearch;
}(_react2.default.Component);

LocationSearch.contextTypes = {
    router: function router() {
        return null;
    }
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _index2 = __webpack_require__(/*! ../../components/opd/locationSearch/index.js */ "./dev/js/components/opd/locationSearch/index.js");

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LocationSearch = function (_React$Component) {
    _inherits(LocationSearch, _React$Component);

    function LocationSearch(props) {
        _classCallCheck(this, LocationSearch);

        return _possibleConstructorReturn(this, (LocationSearch.__proto__ || Object.getPrototypeOf(LocationSearch)).call(this, props));
    }

    _createClass(LocationSearch, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(_index3.default, this.props);
        }
    }]);

    return LocationSearch;
}(_react2.default.Component);

LocationSearch.contextTypes = {
    router: function router() {
        return null;
    }
};


var mapStateToProps = function mapStateToProps(state) {
    var selectedLocation = state.SEARCH_CRITERIA_OPD.selectedLocation;
    var testList = state.USER.testList;


    return {
        selectedLocation: selectedLocation, testList: testList
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        selectLocation: function selectLocation(location, type) {
            return dispatch((0, _index.selectLocation)(location, type));
        },
        fetchTestList: function fetchTestList(testIds) {
            return dispatch((0, _index.fetchTestList)(testIds));
        },
        toggleDiagnosisCriteria: function toggleDiagnosisCriteria(type, criteria, forceAdd) {
            return dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria, forceAdd));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LocationSearch);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvbG9jYXRpb25TZWFyY2gvTG9jYXRpb25TZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL2xvY2F0aW9uU2VhcmNoL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL29wZC9Mb2NhdGlvblNlYXJjaC5qcyJdLCJuYW1lcyI6WyJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJMb2NhdGlvblNlYXJjaCIsInByb3BzIiwicGFyc2VkIiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsInN0YXRlIiwic2VhcmNoUmVzdWx0cyIsImRldGVjdExvYWRpbmciLCJyZWRpcmVjdF90byIsImRlZmF1bHRUZXN0IiwicmFkaW9DaGVja2VkIiwidGVzdE5hbWUiLCJzaG93TG9jYXRpb25SZXN1bHQiLCJyZXN1bHRzIiwic3RhdHVzIiwic2V0U3RhdGUiLCJiaW5kIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZ2V0TG9jYXRpb24iLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsIlNuYWNrQmFyIiwic2hvdyIsInBvcyIsInRleHQiLCJkZXNjcmlwdGlvbiIsInJlZmVyZW5jZSIsImxvY2F0aW9uX29iamVjdCIsImRhdGEiLCJHVE0iLCJnZXRVc2VySWQiLCJuYW1lIiwicGxhY2VfaWQiLCJmb3JtYXR0ZWRfYWRkcmVzcyIsInNlbmRFdmVudCIsInNlbGVjdExvY2F0aW9uIiwidGhlbiIsImluY2x1ZGVzIiwiaGlzdG9yeSIsInJlcGxhY2UiLCJwdXNoIiwiZ28iLCJpbnB1dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmb2N1cyIsInRlc3RJZHMiLCJpZCIsInNwbGl0IiwibWFwIiwicGFyc2VJbnQiLCJ4IiwiZmV0Y2hUZXN0TGlzdCIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwicG9zaXRpb24iLCJwYXJzZUZsb2F0IiwiY29vcmRzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJjbGVhclRpbWVvdXQiLCJhIiwiYiIsImMiLCJjYXRJZCIsInRlc3QiLCJzZWxlY3RlZFRlc3QiLCJ0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nVG9wIiwiaW5wdXRIYW5kbGVyIiwiZm9jdXNPdXQiLCJBU1NFVFNfQkFTRV9VUkwiLCJkZXRlY3RMb2NhdGlvbiIsImxlbmd0aCIsInJlc3VsdCIsImkiLCJ0ZXN0TGlzdCIsImZpbHRlciIsInRlc3RzIiwiY2F0ZWdvcnlfbmFtZSIsImNhdGVnb3J5X2lkIiwic2VsZWN0Q2F0ZWdvcnlUZXN0cyIsImRvbmVCdG5DbGljayIsImRpc3BsYXkiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnRleHRUeXBlcyIsInJvdXRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsInNlbGVjdGVkTG9jYXRpb24iLCJTRUFSQ0hfQ1JJVEVSSUFfT1BEIiwiVVNFUiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwidHlwZSIsImNyaXRlcmlhIiwiZm9yY2VBZGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTUEsY0FBY0MsbUJBQU9BLENBQUMsMERBQVIsQ0FBcEI7O0lBRU1DLGM7OztBQUNGLDRCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0lBQ1RBLEtBRFM7O0FBRWYsWUFBTUMsU0FBU0osWUFBWUssS0FBWixDQUFrQixNQUFLRixLQUFMLENBQVdHLFFBQVgsQ0FBb0JDLE1BQXRDLENBQWY7QUFDQSxjQUFLQyxLQUFMLEdBQWE7QUFDVEQsb0JBQVEsRUFEQztBQUVURSwyQkFBZSxFQUZOO0FBR1RDLDJCQUFlLEtBSE47QUFJVEMseUJBQWFQLE9BQU9PLFdB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M0UsTUFBTTBGLElBUHFCLENBTTNCZixRQU4yQjs7O0FBUy9CLFdBQU87QUFDSGEsMENBREcsRUFDZWI7QUFEZixLQUFQO0FBR0gsQ0FaRDs7QUFjQSxJQUFNZ0IscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3JDLFdBQU87QUFDSDVELHdCQUFnQix3QkFBQ2xDLFFBQUQsRUFBVytGLElBQVg7QUFBQSxtQkFBb0JELFNBQVMsMkJBQWU5RixRQUFmLEVBQXlCK0YsSUFBekIsQ0FBVCxDQUFwQjtBQUFBLFNBRGI7QUFFSDVDLHVCQUFlLHVCQUFDTixPQUFEO0FBQUEsbUJBQWFpRCxTQUFTLDBCQUFjakQsT0FBZCxDQUFULENBQWI7QUFBQSxTQUZaO0FBR0hzQixpQ0FBeUIsaUNBQUM0QixJQUFELEVBQU9DLFFBQVAsRUFBaUJDLFFBQWpCO0FBQUEsbUJBQThCSCxTQUFTLG9DQUF3QkMsSUFBeEIsRUFBOEJDLFFBQTlCLEVBQXdDQyxRQUF4QyxDQUFULENBQTlCO0FBQUE7QUFIdEIsS0FBUDtBQUtILENBTkQ7O2tCQVNlLHlCQUFRUixlQUFSLEVBQXlCSSxrQkFBekIsRUFBNkNqRyxjQUE3QyxDIiwiZmlsZSI6IjEzMC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9Mb2FkZXInXG5pbXBvcnQgTGVmdEJhciBmcm9tICcuLi8uLi9jb21tb25zL0xlZnRCYXInXG5pbXBvcnQgUmlnaHRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9SaWdodEJhcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5pbXBvcnQgeyBfYXV0b0NvbXBsZXRlU2VydmljZSwgX2dldGxvY2F0aW9uRnJvbUxhdExvbmcsIF9nZXRMb2NhdGlvbkZyb21QbGFjZUlkIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9tYXBIZWxwZXJzJ1xuaW1wb3J0IEV4cGFuc2lvblBhbmVsIGZyb20gJy4uLy4uL2RpYWdub3Npcy9jb21tb25zL2xhYlRlc3RzL2V4cGFuc2lvblBhbmVsJztcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cbmNsYXNzIExvY2F0aW9uU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzZWFyY2g6IFwiXCIsXG4gICAgICAgICAgICBzZWFyY2hSZXN1bHRzOiBbXSxcbiAgICAgICAgICAgIGRldGVjdExvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgcmVkaXJlY3RfdG86IHBhcnNlZC5yZWRpcmVjdF90byxcbiAgICAgICAgICAgIGRlZmF1bHRUZXN0OiBbXSxcbiAgICAgICAgICAgIHJhZGlvQ2hlY2tlZDogXCJcIixcbiAgICAgICAgICAgIHRlc3ROYW1lOiAnJyxcbiAgICAgICAgICAgIHNob3dMb2NhdGlvblJlc3VsdDogdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TG9jYXRpb24obG9jYXRpb24pIHtcbiAgICAgICAgX2F1dG9Db21wbGV0ZVNlcnZpY2UobG9jYXRpb24sIGZ1bmN0aW9uIChyZXN1bHRzLCBzdGF0dXMpIHtcbiAgICAgICAgICAgIHJlc3VsdHMgPSByZXN1bHRzIHx8IFtdXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoUmVzdWx0czogcmVzdWx0cyB9KVxuICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgfVxuXG4gICAgaW5wdXRIYW5kbGVyKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzZWFyY2g6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgc2hvd0xvY2F0aW9uUmVzdWx0OiB0cnVlXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuZ2V0TG9jYXRpb24oZS50YXJnZXQudmFsdWUpXG5cbiAgICB9XG5cbiAgICBzZWxlY3RMb2NhdGlvbihsb2NhdGlvbikge1xuICAgICAgICBsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGV0ZWN0TG9hZGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRlY3RMb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJDb3VsZCBub3Qgc2VsZWN0IGxvY2F0aW9uLlwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCA1MDAwKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGV0ZWN0TG9hZGluZzogdHJ1ZSwgc2VhcmNoOiBsb2NhdGlvbi5kZXNjcmlwdGlvbiwgc2hvd0xvY2F0aW9uUmVzdWx0OiBmYWxzZSB9KVxuXG4gICAgICAgIF9nZXRMb2NhdGlvbkZyb21QbGFjZUlkKGxvY2F0aW9uLnJlZmVyZW5jZSwgKGxvY2F0aW9uX29iamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdVc2VyTG9jYXRpb24nLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6IDAsICdldmVudCc6ICd1c2VyLWxvY2F0aW9uJywgJ2xvY2F0aW9uJzogbG9jYXRpb25fb2JqZWN0Lm5hbWUgfHwgJycsICdwbGFjZV9pZCc6IGxvY2F0aW9uX29iamVjdC5wbGFjZV9pZCB8fCAnJywgJ2Zvcm1hdHRlZF9hZGRyZXNzJzogbG9jYXRpb25fb2JqZWN0LmZvcm1hdHRlZF9hZGRyZXNzIHx8ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdExvY2F0aW9uKGxvY2F0aW9uX29iamVjdCwgJ2F1dG9Db21wbGV0ZScpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRlY3RMb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnJlZGlyZWN0X3RvKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaCAmJiB0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnP2xhYl9jYXJkPXRydWUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucmVkaXJlY3RfdG8uaW5jbHVkZXMoJ3NlYXJjaHJlc3VsdHMnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5yZXBsYWNlKHRoaXMuc3RhdGUucmVkaXJlY3RfdG8pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCh0aGlzLnN0YXRlLnJlZGlyZWN0X3RvKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoICYmIHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCc/bGFiX2NhcmQ9dHJ1ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkuZ28oLTEpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9wTG9jYXRpb25TZWFyY2gnKVxuICAgICAgICBpbnB1dC5mb2N1cygpXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaCAmJiB0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnP2xhYl9jYXJkPXRydWUnKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgICAgICBsZXQgdGVzdElkcyA9IFtdXG4gICAgICAgICAgICBpZiAocGFyc2VkLmlkKSB7XG4gICAgICAgICAgICAgICAgdGVzdElkcyA9IHBhcnNlZC5pZC5zcGxpdCgnLCcpLm1hcCh4ID0+IHBhcnNlSW50KHgpKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZWZhdWx0VGVzdDogdGVzdElkcyB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5mZXRjaFRlc3RMaXN0KHBhcnNlZC5pZCB8fCAnJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXRlY3RMb2NhdGlvbigpIHtcbiAgICAgICAgbGV0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmRldGVjdExvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGV0ZWN0TG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiQ291bGQgbm90IGZldGNoIGxvY2F0aW9uLlwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCA1MDAwKVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRlY3RMb2FkaW5nOiB0cnVlIH0pXG5cbiAgICAgICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigocG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBfZ2V0bG9jYXRpb25Gcm9tTGF0TG9uZyhwYXJzZUZsb2F0KHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSksIHBhcnNlRmxvYXQocG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSksICdsb2NhbGl0eScsIChsb2NhdGlvbl9vYmplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RMb2NhdGlvbihsb2NhdGlvbl9vYmplY3QsICdhdXRvRGV0ZWN0JykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnJlZGlyZWN0X3RvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoICYmIHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCc/bGFiX2NhcmQ9dHJ1ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCh0aGlzLnN0YXRlLnJlZGlyZWN0X3RvKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoICYmIHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCc/bGFiX2NhcmQ9dHJ1ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkuZ28oLTEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRldGVjdExvYWRpbmc6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIChhLCBiLCBjKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRldGVjdExvYWRpbmc6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIkNvdWxkIG5vdCBmZXRjaCBsb2NhdGlvbi5cIiB9KTtcbiAgICAgICAgICAgIH0sIChhLCBiLCBjKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRldGVjdExvYWRpbmc6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIkNvdWxkIG5vdCBmZXRjaCBsb2NhdGlvbi5cIiB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGV0ZWN0TG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgICAgIC8vIGdlb2xvY2F0aW9uIGlzIG5vdCBzdXBwb3J0ZWRcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJvdXRlcjogKCkgPT4gbnVsbFxuICAgIH1cblxuICAgIHNlbGVjdENhdGVnb3J5VGVzdHMoY2F0SWQsIHRlc3QpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJhZGlvQ2hlY2tlZDogdGVzdC5pZCwgdGVzdE5hbWU6IHRlc3QubmFtZSwgZGVmYXVsdFRlc3Q6IFtdIH0pXG4gICAgfVxuXG4gICAgZG9uZUJ0bkNsaWNrKCkge1xuICAgICAgICB2YXIgc2VsZWN0ZWRUZXN0ID0ge31cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucmFkaW9DaGVja2VkKSB7XG4gICAgICAgICAgICBzZWxlY3RlZFRlc3QubmFtZSA9IHRoaXMuc3RhdGUudGVzdE5hbWU7XG4gICAgICAgICAgICBzZWxlY3RlZFRlc3QuaWQgPSB0aGlzLnN0YXRlLnJhZGlvQ2hlY2tlZDtcbiAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEoJ3Rlc3QnLCBzZWxlY3RlZFRlc3QgfHwge30sIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5nbygtMSk7XG4gICAgfVxuXG4gICAgZm9jdXNPdXQoKSB7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdsb2NhdGlvbklucHV0Rm9jdXNPdXQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdsb2NhdGlvbi1zZWFyY2gtZm9jdXMtb3V0JywgJ3NlYXJjaFN0cmluZyc6IHRoaXMuc3RhdGUuc2VhcmNoXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiA1NCB9fSA+XG4gICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgcGFyZW50LXNlY3Rpb24gcGFyZW50LXNlY3Rpb24tdGVtcFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0QmFyIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNvbC1sZy03IGNlbnRlci1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInNraW4td2hpdGUgbG9jYXRpb24tZGV0ZWN0LWhlYWRlciBzZWFyY0xvY2F0aW9uSGVhZGVyUGFkZGluZ1wiICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCIgc3R5bGU9e3sgcGFkZGluZ1RvcDogMTAgfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJjaC1udy1pbnB1dHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJuZXctc3JjaC1pbnBcIiBhdXRvQ29tcGxldGU9XCJvZmZcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGFueSBjaXR5IG9yIGxvY2FsaXR5XCIgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNofSBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gaWQ9XCJ0b3BMb2NhdGlvblNlYXJjaFwiIGRpc2FibGVkPXt0aGlzLnN0YXRlLmRldGVjdExvYWRpbmd9IG9uQmx1cj17KCkgPT4gdGhpcy5mb2N1c091dCgpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzcmNoLWlucC1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9uZXctbG9jLWljby5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3JjaC1pbnAtYnRuLWltZ1wiIG9uQ2xpY2s9e3RoaXMuZGV0ZWN0TG9jYXRpb24uYmluZCh0aGlzKX0+QXV0byBEZXRlY3QgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9sb2MtdHJhY2suc3ZnXCJ9IC8+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRvbi1ncm91cCBsb2NhdGlvbi1kZXRlY3QtZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2h9IG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgaW5wdXQtbWQgc2VhcmNoLWlucHV0IG5vLXNoYWRvd1wiIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGFueSBjaXR5IG9yIGxvY2FsaXR5XCIgaWQ9XCJ0b3BMb2NhdGlvblNlYXJjaFwiIGRpc2FibGVkPXt0aGlzLnN0YXRlLmRldGVjdExvYWRpbmd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3QtaW1nIGN0LWltZy1zbSBtYXAtbWFya2VyLWJsdWVcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL21hcC1tYXJrZXItYmx1ZS5zdmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0ZWN0LW15LWxvY2FpdG9uXCIgb25DbGljaz17dGhpcy5kZXRlY3RMb2NhdGlvbi5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjdC1pbWcgY3QtaW1nLXhzXCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9ncHMuc3ZnXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+PC9zcGFuPkRldGVjdCBNeSBMb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGV0ZWN0TG9hZGluZyA/IDxkaXYgY2xhc3NOYW1lPVwiZnVsbHNjcmVlblwiPjxMb2FkZXIgLz48L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzICYmIHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0cy5sZW5ndGggJiYgdGhpcy5zdGF0ZS5zaG93TG9jYXRpb25SZXN1bHQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogNTAsIHBhZGRpbmdUb3A6IDAgfX0gY2xhc3NOYW1lPVwibG9jYXRvbi1kZXRlY3Qtc2NyZWVuXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHdpZGdldCB3aWRnZXQtcGFuZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInBhbmVsLXRpdGxlIHdpZGdldC1wYW5lbC1ncmV5XCI+U2VhcmNoIFJlc3VsdDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbW9uLXNlYXJjaC1jb250YWluZXIgcHQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tb24tbGlzdGluZy1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QgY2l0eS1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0cy5tYXAoKHJlc3VsdCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpfSBvbkNsaWNrPXt0aGlzLnNlbGVjdExvY2F0aW9uLmJpbmQodGhpcywgcmVzdWx0KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW0tY2VudGVyIHctMTAwXCI+e3Jlc3VsdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNpdHktbG9jXCI+Q2l0eTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoICYmIHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCc/bGFiX2NhcmQ9dHJ1ZScpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImxjLXNlbGVjdC10ZXN0IHdpZGdldC1wYW5lbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJwYW5lbC10aXRsZVwiPlNlbGVjdCBUZXN0PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudGVzdExpc3QgJiYgdGhpcy5wcm9wcy50ZXN0TGlzdC5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50ZXN0TGlzdC5maWx0ZXIoeCA9PiB4LnRlc3RzLmxlbmd0aCA+IDApLm1hcCgodGVzdCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8RXhwYW5zaW9uUGFuZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvblNlYXJjaD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZz17dGVzdC5jYXRlZ29yeV9uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50TGlzdD17dGVzdC50ZXN0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlJZD17dGVzdC5jYXRlZ29yeV9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFkaW9DaGVja2VkPXt0aGlzLnN0YXRlLnJhZGlvQ2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0Q2F0ZWdvcnk9e3RoaXMuc2VsZWN0Q2F0ZWdvcnlUZXN0cy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VGVzdD17dGhpcy5zdGF0ZS5kZWZhdWx0VGVzdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInYtYnRuIHAtMyB2LWJ0bi1wcmltYXJ5IGJ0bi1sZyBmaXhlZCBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCB0ZXh0LWxnIHN0aWNreS1idG5cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmRvbmVCdG5DbGljaygpfT5Eb25lPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1hcFwiIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2ggJiYgdGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoJz9sYWJfY2FyZD10cnVlJykgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmlnaHRCYXIgZXh0cmFDbGFzcz1cIiBjaGF0LWZsb2F0LWJ0bi0yXCIgbXNnVGVtcGxhdGU9XCJnb2xkX2dlbmVyYWxfdGVtcGxhdGVcIi8+IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJpZ2h0QmFyIG1zZ1RlbXBsYXRlPVwiZ29sZF9nZW5lcmFsX3RlbXBsYXRlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb25TZWFyY2hcbiIsImltcG9ydCBMb2NhdGlvblNlYXJjaCBmcm9tICcuL0xvY2F0aW9uU2VhcmNoLmpzJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9uU2VhcmNoIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IHNlbGVjdExvY2F0aW9uLCBmZXRjaFRlc3RMaXN0LCB0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgTG9jYXRpb25TZWFyY2hWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvb3BkL2xvY2F0aW9uU2VhcmNoL2luZGV4LmpzJ1xuXG5jbGFzcyBMb2NhdGlvblNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgcm91dGVyOiAoKSA9PiBudWxsXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TG9jYXRpb25TZWFyY2hWaWV3IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBzZWxlY3RlZExvY2F0aW9uXG4gICAgfSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9PUERcblxuICAgIGNvbnN0IHtcbiAgICAgICAgdGVzdExpc3RcbiAgICB9ID0gc3RhdGUuVVNFUlxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbiwgdGVzdExpc3RcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHNlbGVjdExvY2F0aW9uOiAobG9jYXRpb24sIHR5cGUpID0+IGRpc3BhdGNoKHNlbGVjdExvY2F0aW9uKGxvY2F0aW9uLCB0eXBlKSksXG4gICAgICAgIGZldGNoVGVzdExpc3Q6ICh0ZXN0SWRzKSA9PiBkaXNwYXRjaChmZXRjaFRlc3RMaXN0KHRlc3RJZHMpKSxcbiAgICAgICAgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWE6ICh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQpID0+IGRpc3BhdGNoKHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKHR5cGUsIGNyaXRlcmlhLCBmb3JjZUFkZCkpXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKExvY2F0aW9uU2VhcmNoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=