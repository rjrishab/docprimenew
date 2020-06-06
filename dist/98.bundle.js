(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[98],{

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

/***/ "./dev/js/components/diagnosis/searchCriteria/SearchCriteriaView.js":
/*!**************************************************************************!*\
  !*** ./dev/js/components/diagnosis/searchCriteria/SearchCriteriaView.js ***!
  \**************************************************************************/
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

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _index = __webpack_require__(/*! ../../commons/commonlySearched/index.js */ "./dev/js/components/commons/commonlySearched/index.js");

var _index2 = _interopRequireDefault(_index);

var _criteriaSearch = __webpack_require__(/*! ../../commons/criteriaSearch */ "./dev/js/components/commons/criteriaSearch/index.js");

var _criteriaSearch2 = _interopRequireDefault(_criteriaSearch);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchCriteriaView = function (_React$Component) {
    _inherits(SearchCriteriaView, _React$Component);

    function SearchCriteriaView(props) {
        _classCallCheck(this, SearchCriteriaView);

        var _this = _possibleConstructorReturn(this, (SearchCriteriaView.__proto__ || Object.getPrototypeOf(SearchCriteriaView)).call(this, props));

        _this.state = {
            focusInput: 0
        };
        return _this;
    }

    _createClass(SearchCriteriaView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (window) {
                window.scrollTo(0, 0);
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            if (props.locationType && props.locationType != "geo") {
                this.setState({ focusInput: 0 });
            }
        }
    }, {
        key: 'searchProceed',
        value: function searchProceed() {
            var lab_name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

            // handle doctor name, hospital name
            this.props.mergeLABState({
                filterCriteria: _extends({}, this.props.filterCriteria, {
                    lab_name: lab_name
                })
            }, true);
            this.props.history.push('/lab/searchresults');
        }
    }, {
        key: 'showLabs',
        value: function showLabs() {
            if (this.props.locationType == "geo") {
                this.setState({ focusInput: 1 });
                if (window) {
                    window.scrollTo(0, 0);
                }
                return null;
            }
            this.searchProceed("");
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('div', { id: 'map', style: { display: 'none' } }),
                _react2.default.createElement(
                    _criteriaSearch2.default,
                    _extends({}, this.props, { checkForLoad: this.props.LOADED_SEARCH_CRITERIA_LAB, title: 'Search for tests or lab', paddingTopClass: true, searchProceed: this.searchProceed.bind(this) }),
                    _react2.default.createElement(
                        'section',
                        { className: 'opd-search-section mbl-pdng-zero' },
                        this.state.focusInput ? _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'p',
                                { className: 'location-error-msg' },
                                'Please Select Location'
                            )
                        ) : '',
                        this.props.selectedCriterias && this.props.selectedCriterias.length > 0 ? _react2.default.createElement(_index2.default, {
                            heading: 'View Selected (' + this.props.selectedCriterias.length + ')',
                            data: this.props.selectedCriterias,
                            selected: [],
                            selectedPills: true,
                            toggle: this.props.toggleDiagnosisCriteria.bind(this)
                        }) : "",
                        _react2.default.createElement(_index2.default, {
                            heading: 'Common Test',
                            type: 'test',
                            data: this.props.common_tests,
                            selected: this.props.selectedCriterias.filter(function (x) {
                                return x.type == 'test';
                            }),
                            toggle: this.props.toggleDiagnosisCriteria.bind(this)
                        }),
                        _react2.default.createElement(
                            'button',
                            { onClick: this.showLabs.bind(this), className: 'v-btn p-3 v-btn-primary btn-lg fixed horizontal bottom no-round text-lg static-btn' },
                            'Show Labs'
                        )
                    )
                )
            );
        }
    }]);

    return SearchCriteriaView;
}(_react2.default.Component);

exports.default = SearchCriteriaView;

/***/ }),

/***/ "./dev/js/components/diagnosis/searchCriteria/index.js":
/*!*************************************************************!*\
  !*** ./dev/js/components/diagnosis/searchCriteria/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SearchCriteriaView = __webpack_require__(/*! ./SearchCriteriaView.js */ "./dev/js/components/diagnosis/searchCriteria/SearchCriteriaView.js");

var _SearchCriteriaView2 = _interopRequireDefault(_SearchCriteriaView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SearchCriteriaView2.default;

/***/ }),

/***/ "./dev/js/containers/diagnosis/SearchCriteria.js":
/*!*******************************************************!*\
  !*** ./dev/js/containers/diagnosis/SearchCriteria.js ***!
  \*******************************************************/
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

var _index2 = __webpack_require__(/*! ../../components/diagnosis/searchCriteria/index.js */ "./dev/js/components/diagnosis/searchCriteria/index.js");

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchCriteria = function (_React$Component) {
    _inherits(SearchCriteria, _React$Component);

    function SearchCriteria(props) {
        _classCallCheck(this, SearchCriteria);

        return _possibleConstructorReturn(this, (SearchCriteria.__proto__ || Object.getPrototypeOf(SearchCriteria)).call(this, props));
    }

    // static loadData(store) {
    //     return store.dispatch(loadLabCommonCriterias())
    // }

    _createClass(SearchCriteria, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.loadLabCommonCriterias();
            this.props.resetFilters();
            this.props.clearExtraTests();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_index3.default, this.props);
        }
    }]);

    return SearchCriteria;
}(_react2.default.Component);

SearchCriteria.contextTypes = {
    router: function router() {
        return null;
    }
};


var mapStateToProps = function mapStateToProps(state) {
    var _state$SEARCH_CRITERI = state.SEARCH_CRITERIA_LABS,
        LOADED_SEARCH_CRITERIA_LAB = _state$SEARCH_CRITERI.LOADED_SEARCH_CRITERIA_LAB,
        common_tests = _state$SEARCH_CRITERI.common_tests,
        common_conditions = _state$SEARCH_CRITERI.common_conditions,
        preferred_labs = _state$SEARCH_CRITERI.preferred_labs,
        selectedCriterias = _state$SEARCH_CRITERI.selectedCriterias,
        selectedLocation = _state$SEARCH_CRITERI.selectedLocation,
        filterCriteria = _state$SEARCH_CRITERI.filterCriteria,
        locationType = _state$SEARCH_CRITERI.locationType;


    return {
        LOADED_SEARCH_CRITERIA_LAB: LOADED_SEARCH_CRITERIA_LAB,
        common_tests: common_tests,
        common_conditions: common_conditions,
        preferred_labs: preferred_labs,
        selectedCriterias: selectedCriterias,
        selectedLocation: selectedLocation,
        filterCriteria: filterCriteria,
        locationType: locationType
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        loadLabCommonCriterias: function loadLabCommonCriterias() {
            return dispatch((0, _index.loadLabCommonCriterias)());
        },
        toggleDiagnosisCriteria: function toggleDiagnosisCriteria(type, criteria) {
            return dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria));
        },
        getDiagnosisCriteriaResults: function getDiagnosisCriteriaResults(searchString, callback) {
            return dispatch((0, _index.getDiagnosisCriteriaResults)(searchString, callback));
        },
        resetFilters: function resetFilters() {
            return dispatch((0, _index.resetFilters)());
        },
        clearExtraTests: function clearExtraTests() {
            return dispatch((0, _index.clearExtraTests)());
        },
        clearAllTests: function clearAllTests() {
            return dispatch((0, _index.clearAllTests)());
        },
        mergeLABState: function mergeLABState(state, fetchNewResults) {
            return dispatch((0, _index.mergeLABState)(state, fetchNewResults));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SearchCriteria);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL3NlYXJjaENyaXRlcmlhL1NlYXJjaENyaXRlcmlhVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvc2VhcmNoQ3JpdGVyaWEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvZGlhZ25vc2lzL1NlYXJjaENyaXRlcmlhLmpzIl0sIm5hbWVzIjpbIkxvYWRlciIsInByb3BzIiwiY2xhc3NUeXBlIiwiaUZyYW1lUG9wdXAiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlNlYXJjaENyaXRlcmlhVmlldyIsInN0YXRlIiwiZm9jdXNJbnB1dCIsIndpbmRvdyIsInNjcm9sbFRvIiwibG9jYXRpb25UeXBlIiwic2V0U3RhdGUiLCJsYWJfbmFtZSIsIm1lcmdlTEFCU3RhdGUiLCJmaWx0ZXJDcml0ZXJpYSIsImhpc3RvcnkiLCJwdXNoIiwic2VhcmNoUHJvY2VlZCIsImRpc3BsYXkiLCJMT0FERURfU0VBUkNIX0NSSVRFUklBX0xBQiIsImJpbmQiLCJzZWxlY3RlZENyaXRlcmlhcyIsImxlbmd0aCIsInRvZ2dsZURpYWdub3Npc0NyaXRlcmlhIiwiY29tbW9uX3Rlc3RzIiwiZmlsdGVyIiwieCIsInR5cGUiLCJzaG93TGFicyIsIlNlYXJjaENyaXRlcmlhIiwibG9hZExhYkNvbW1vbkNyaXRlcmlhcyIsInJlc2V0RmlsdGVycyIsImNsZWFyRXh0cmFUZXN0cyIsImNvbnRleHRUeXBlcyIsInJvdXRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsIlNFQVJDSF9DUklURVJJQV9MQUJTIiwiY29tbW9uX2NvbmRpdGlvbnMiLCJwcmVmZXJyZWRfbGFicyIsInNlbGVjdGVkTG9jYXRpb24iLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImNyaXRlcmlhIiwiZ2V0RGlhZ25vc2lzQ3JpdGVyaWFSZXN1bHRzIiwic2VhcmNoU3RyaW5nIiwiY2FsbGJhY2siLCJjbGVhckFsbFRlc3RzIiwiZmV0Y2hOZXdSZXN1bHRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU1BLE07OztBQUNGLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsK0dBQ1RBLEtBRFM7QUFFbEI7Ozs7aUNBRVE7O0FBRUwsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVcsS0FBS0EsS0FBTCxDQUFXQyxTQUFYLElBQXdCLGdCQUF4QztBQUNJLHVEQUFLLFdBQVUsV0FBZixHQURKO0FBR1EscUJBQUtELEtBQUwsQ0FBV0UsV0FBWCxHQUNJO0FBQUE7QUFBQSxzQkFBRyxXQUFVLGVBQWI7QUFBQTtBQUFBLGlCQURKLEdBQytFO0FBSnZGLGFBREo7QUFTSDs7OztFQWhCZ0JDLGdCQUFNQyxTOztrQkFtQlpMLE07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCZjs7Ozs7O2tCQUVlQSxnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTU0sa0I7OztBQUNGLGdDQUFZTCxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNElBQ1RBLEtBRFM7O0FBRWYsY0FBS00sS0FBTCxHQUFhO0FBQ1RDLHdCQUFZO0FBREgsU0FBYjtBQUZlO0FBS2xCOzs7OzRDQUVtQjtBQUNoQixnQkFBSUMsTUFBSixFQUFZO0FBQ1JBLHVCQUFPQyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ0g7QUFDSjs7O2tEQUV5QlQsSyxFQUFPO0FBQzdCLGdCQUFJQSxNQUFNVSxZQUFOLElBQXNCVixNQUFNVSxZQUFOLElBQXNCLEtBQWhELEVBQXVEO0FBQ25ELHFCQUFLQyxRQUFMLENB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QjtBQUFBLFNBRnRCO0FBR0hDLHFDQUE2QixxQ0FBQ0MsWUFBRCxFQUFlQyxRQUFmO0FBQUEsbUJBQTRCSixTQUFTLHdDQUE0QkcsWUFBNUIsRUFBMENDLFFBQTFDLENBQVQsQ0FBNUI7QUFBQSxTQUgxQjtBQUlIZCxzQkFBYztBQUFBLG1CQUFNVSxTQUFTLDBCQUFULENBQU47QUFBQSxTQUpYO0FBS0hULHlCQUFpQjtBQUFBLG1CQUFNUyxTQUFTLDZCQUFULENBQU47QUFBQSxTQUxkO0FBTUhLLHVCQUFlO0FBQUEsbUJBQU1MLFNBQVMsMkJBQVQsQ0FBTjtBQUFBLFNBTlo7QUFPSDVCLHVCQUFlLHVCQUFDUCxLQUFELEVBQVF5QyxlQUFSO0FBQUEsbUJBQTRCTixTQUFTLDBCQUFjbkMsS0FBZCxFQUFxQnlDLGVBQXJCLENBQVQsQ0FBNUI7QUFBQTtBQVBaLEtBQVA7QUFTSCxDQVZEOztrQkFhZSx5QkFBUVosZUFBUixFQUF5Qkssa0JBQXpCLEVBQTZDWCxjQUE3QyxDIiwiZmlsZSI6Ijk4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIExvYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc1R5cGUgfHwgXCJsb2FkZXJDaXJjdWxhclwifSA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcC1sb2FkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaUZyYW1lUG9wdXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0xMFwiPlJlZGlyZWN0aW5nIHlvdSB0byBQaGFybWVhc3kgd2Vic2l0ZS4uLjwvcD4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyXG4iLCJpbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IENvbW1vbmx5U2VhcmNoZWQgZnJvbSAnLi4vLi4vY29tbW9ucy9jb21tb25seVNlYXJjaGVkL2luZGV4LmpzJ1xuaW1wb3J0IENyaXRlcmlhU2VhcmNoIGZyb20gJy4uLy4uL2NvbW1vbnMvY3JpdGVyaWFTZWFyY2gnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuXG5jbGFzcyBTZWFyY2hDcml0ZXJpYVZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZm9jdXNJbnB1dDogMFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMubG9jYXRpb25UeXBlICYmIHByb3BzLmxvY2F0aW9uVHlwZSAhPSBcImdlb1wiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNJbnB1dDogMCB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VhcmNoUHJvY2VlZChsYWJfbmFtZSA9IFwiXCIpIHtcbiAgICAgICAgLy8gaGFuZGxlIGRvY3RvciBuYW1lLCBob3NwaXRhbCBuYW1lXG4gICAgICAgIHRoaXMucHJvcHMubWVyZ2VMQUJTdGF0ZSh7XG4gICAgICAgICAgICBmaWx0ZXJDcml0ZXJpYToge1xuICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuZmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgICAgICAgICAgbGFiX25hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSlcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9sYWIvc2VhcmNocmVzdWx0cycpXG4gICAgfVxuXG4gICAgc2hvd0xhYnMoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uVHlwZSA9PSBcImdlb1wiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNJbnB1dDogMSB9KVxuICAgICAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlYXJjaFByb2NlZWQoXCJcIilcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1hcFwiIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8Q3JpdGVyaWFTZWFyY2ggey4uLnRoaXMucHJvcHN9IGNoZWNrRm9yTG9hZD17dGhpcy5wcm9wcy5MT0FERURfU0VBUkNIX0NSSVRFUklBX0xBQn0gdGl0bGU9XCJTZWFyY2ggZm9yIHRlc3RzIG9yIGxhYlwiIHBhZGRpbmdUb3BDbGFzcz17dHJ1ZX0gc2VhcmNoUHJvY2VlZD17dGhpcy5zZWFyY2hQcm9jZWVkLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJvcGQtc2VhcmNoLXNlY3Rpb24gbWJsLXBkbmctemVyb1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5mb2N1c0lucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxvY2F0aW9uLWVycm9yLW1zZ1wiPlBsZWFzZSBTZWxlY3QgTG9jYXRpb248L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5zZWxlY3RlZENyaXRlcmlhcyAmJiB0aGlzLnByb3BzLnNlbGVjdGVkQ3JpdGVyaWFzLmxlbmd0aCA+IDApID8gPENvbW1vbmx5U2VhcmNoZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZz17YFZpZXcgU2VsZWN0ZWQgKCR7dGhpcy5wcm9wcy5zZWxlY3RlZENyaXRlcmlhcy5sZW5ndGh9KWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3RoaXMucHJvcHMuc2VsZWN0ZWRDcml0ZXJpYXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtbXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQaWxscz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlPXt0aGlzLnByb3BzLnRvZ2dsZURpYWdub3Npc0NyaXRlcmlhLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tb25seVNlYXJjaGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZz1cIkNvbW1vbiBUZXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGVzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17dGhpcy5wcm9wcy5jb21tb25fdGVzdHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMucHJvcHMuc2VsZWN0ZWRDcml0ZXJpYXMuZmlsdGVyKHggPT4geC50eXBlID09ICd0ZXN0Jyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlPXt0aGlzLnByb3BzLnRvZ2dsZURpYWdub3Npc0NyaXRlcmlhLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2hvd0xhYnMuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwidi1idG4gcC0zIHYtYnRuLXByaW1hcnkgYnRuLWxnIGZpeGVkIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIHRleHQtbGcgc3RhdGljLWJ0blwiPlNob3cgTGFiczwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9Dcml0ZXJpYVNlYXJjaD5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hDcml0ZXJpYVZpZXdcbiIsImltcG9ydCBTZWFyY2hDcml0ZXJpYVZpZXcgZnJvbSAnLi9TZWFyY2hDcml0ZXJpYVZpZXcuanMnXG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaENyaXRlcmlhVmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBtZXJnZUxBQlN0YXRlLCBjbGVhckFsbFRlc3RzLCByZXNldEZpbHRlcnMsIGxvYWRMYWJDb21tb25Dcml0ZXJpYXMsIHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhLCBnZXREaWFnbm9zaXNDcml0ZXJpYVJlc3VsdHMsIGNsZWFyRXh0cmFUZXN0cyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgU2VhcmNoQ3JpdGVyaWFWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGlhZ25vc2lzL3NlYXJjaENyaXRlcmlhL2luZGV4LmpzJ1xuXG5jbGFzcyBTZWFyY2hDcml0ZXJpYSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgLy8gc3RhdGljIGxvYWREYXRhKHN0b3JlKSB7XG4gICAgLy8gICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaChsb2FkTGFiQ29tbW9uQ3JpdGVyaWFzKCkpXG4gICAgLy8gfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMubG9hZExhYkNvbW1vbkNyaXRlcmlhcygpXG4gICAgICAgIHRoaXMucHJvcHMucmVzZXRGaWx0ZXJzKClcbiAgICAgICAgdGhpcy5wcm9wcy5jbGVhckV4dHJhVGVzdHMoKVxuICAgIH1cblxuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJvdXRlcjogKCkgPT4gbnVsbFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTZWFyY2hDcml0ZXJpYVZpZXcgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuXG4gICAgY29uc3Qge1xuICAgICAgICBMT0FERURfU0VBUkNIX0NSSVRFUklBX0xBQixcbiAgICAgICAgY29tbW9uX3Rlc3RzLFxuICAgICAgICBjb21tb25fY29uZGl0aW9ucyxcbiAgICAgICAgcHJlZmVycmVkX2xhYnMsXG4gICAgICAgIHNlbGVjdGVkQ3JpdGVyaWFzLFxuICAgICAgICBzZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICBmaWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgbG9jYXRpb25UeXBlXG4gICAgfSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9MQUJTXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBMT0FERURfU0VBUkNIX0NSSVRFUklBX0xBQixcbiAgICAgICAgY29tbW9uX3Rlc3RzLFxuICAgICAgICBjb21tb25fY29uZGl0aW9ucyxcbiAgICAgICAgcHJlZmVycmVkX2xhYnMsXG4gICAgICAgIHNlbGVjdGVkQ3JpdGVyaWFzLFxuICAgICAgICBzZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICBmaWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgbG9jYXRpb25UeXBlXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBsb2FkTGFiQ29tbW9uQ3JpdGVyaWFzOiAoKSA9PiBkaXNwYXRjaChsb2FkTGFiQ29tbW9uQ3JpdGVyaWFzKCkpLFxuICAgICAgICB0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYTogKHR5cGUsIGNyaXRlcmlhKSA9PiBkaXNwYXRjaCh0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSh0eXBlLCBjcml0ZXJpYSkpLFxuICAgICAgICBnZXREaWFnbm9zaXNDcml0ZXJpYVJlc3VsdHM6IChzZWFyY2hTdHJpbmcsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaChnZXREaWFnbm9zaXNDcml0ZXJpYVJlc3VsdHMoc2VhcmNoU3RyaW5nLCBjYWxsYmFjaykpLFxuICAgICAgICByZXNldEZpbHRlcnM6ICgpID0+IGRpc3BhdGNoKHJlc2V0RmlsdGVycygpKSxcbiAgICAgICAgY2xlYXJFeHRyYVRlc3RzOiAoKSA9PiBkaXNwYXRjaChjbGVhckV4dHJhVGVzdHMoKSksXG4gICAgICAgIGNsZWFyQWxsVGVzdHM6ICgpID0+IGRpc3BhdGNoKGNsZWFyQWxsVGVzdHMoKSksXG4gICAgICAgIG1lcmdlTEFCU3RhdGU6IChzdGF0ZSwgZmV0Y2hOZXdSZXN1bHRzKSA9PiBkaXNwYXRjaChtZXJnZUxBQlN0YXRlKHN0YXRlLCBmZXRjaE5ld1Jlc3VsdHMpKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTZWFyY2hDcml0ZXJpYSk7XG4iXSwic291cmNlUm9vdCI6IiJ9