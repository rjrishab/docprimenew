(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./dev/js/components/commons/locationElements/index.js":
/*!*************************************************************!*\
  !*** ./dev/js/components/commons/locationElements/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _locationElementsView = __webpack_require__(/*! ./locationElementsView */ "./dev/js/components/commons/locationElements/locationElementsView.js");

var _locationElementsView2 = _interopRequireDefault(_locationElementsView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _locationElementsView2.default;

/***/ }),

/***/ "./dev/js/components/commons/locationElements/locationElementsView.js":
/*!****************************************************************************!*\
  !*** ./dev/js/components/commons/locationElements/locationElementsView.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _mapHelpers = __webpack_require__(/*! ../../../helpers/mapHelpers */ "./dev/js/helpers/mapHelpers.js");

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LocationElementsView = function (_React$Component) {
    _inherits(LocationElementsView, _React$Component);

    function LocationElementsView(props) {
        _classCallCheck(this, LocationElementsView);

        var _this = _possibleConstructorReturn(this, (LocationElementsView.__proto__ || Object.getPrototypeOf(LocationElementsView)).call(this, props));

        _this.state = {
            search: '',
            searchResults: [],
            detectLoading: false,
            validationError: false,
            location_object: null,
            location_type: ''
        };
        return _this;
    }

    _createClass(LocationElementsView, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {

            if (props.selectedLocation && this.props.selectedLocation) {
                if (this.state.search) {
                    if (props.selectedLocation != this.props.selectedLocation) {
                        this.setState({ location_object: props.selectedLocation, search: props.selectedLocation.formatted_address });
                    }
                } else if (!props.locationType.includes("geo")) {
                    // this.setState({ location_object: props.selectedLocation, search: props.selectedLocation.formatted_address })
                }
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.onRef(this);
            if (this.props.locationType && !this.props.locationType.includes("geo") && this.props.selectedLocation && this.props.selectedLocation.formatted_address) {

                this.setState({ location_object: this.props.selectedLocation, search: this.props.locationName || this.props.selectedLocation.formatted_address });
            }

            // if (!this.props.isTopbar) {
            //     setTimeout(() => {
            //         if (document.getElementById('doc-input-field')) {
            //             document.getElementById('doc-input-field').addEventListener('focusin', () => {
            //                 let search_val = ""
            //                 if (this.props.locationType && !this.props.locationType.includes("geo") && this.props.selectedLocation && this.props.selectedLocation.formatted_address) {
            //                     search_val = this.props.locationName || this.props.selectedLocation.formatted_address
            //                 }
            //                 if (this.state.search == search_val) {
            //                     this.props.getCityListLayout()
            //                     this.setState({ location_object: null, search: '' })
            //                 }
            //             })

            //             document.getElementById('doc-input-field').addEventListener('focusout', () => {
            //                 if (!this.state.search) {
            //                     if (this.props.locationType && !this.props.locationType.includes("geo") && this.props.selectedLocation && this.props.selectedLocation.formatted_address) {
            //                         this.setState({ location_object: this.props.selectedLocation, search: this.props.locationName || this.props.selectedLocation.formatted_address })
            //                     }
            //                     this.props.getCityListLayout()
            //                 }
            //                 // this.setState({ location_object: null, search: '' })
            //             })
            //         }
            //     }, 500)
            // }
        }
    }, {
        key: 'onfocus',
        value: function onfocus(e) {
            if (!this.props.isTopbar) {
                var search_val = "";

                if (this.props.locationType && !this.props.locationType.includes("geo") && this.props.selectedLocation && this.props.selectedLocation.formatted_address) {
                    search_val = this.props.locationName || this.props.selectedLocation.formatted_address;
                }
                if (this.state.search == search_val) {
                    this.props.getCityListLayout();
                    this.setState({ location_object: null, search: '' });
                }
            }
            if (e.target.getAttribute('id') === 'article-type-input-field') {
                var top = document.getElementsByClassName('articleTypeloc')[0];
                if (top.offsetParent) {
                    window.scroll(0, top.offsetParent.offsetTop);
                }
            }
        }
    }, {
        key: 'onblur',
        value: function onblur() {
            if (!this.props.isTopbar) {
                if (!this.state.search) {
                    if (this.props.locationType && !this.props.locationType.includes("geo") && this.props.selectedLocation && this.props.selectedLocation.formatted_address) {
                        this.setState({ location_object: this.props.selectedLocation, search: this.props.locationName || this.props.selectedLocation.formatted_address });
                    }
                    this.props.getCityListLayout();
                }
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.props.onRef(undefined);
        }
    }, {
        key: 'getLocation',
        value: function getLocation(location) {
            (0, _mapHelpers._autoCompleteService)(location, function (results, status) {
                results = results || [];
                this.setState({ searchResults: results });

                //Search widget data identifiers
                var widget = {};
                widget.widgetId = this.props.widgetId || '';
                if (this.props.specialityId) {

                    widget.specialityId = this.props.specialityId || '';
                }
                this.props.getCityListLayout(results, widget);
            }.bind(this));
        }
    }, {
        key: 'inputHandler',
        value: function inputHandler(e) {
            if (!e.target.value) {
                this.props.getCityListLayout();
            }

            this.setState({
                search: e.target.value
            });
            this.getLocation(e.target.value);
        }
    }, {
        key: 'inputNoHandler',
        value: function inputNoHandler(e) {
            this.setState({
                mobile_no: e.target.value,
                validationError: false
            });
        }
    }, {
        key: 'selectLocation',
        value: function selectLocation(location, cb) {
            var _this2 = this;

            var timeout = setTimeout(function () {
                if (_this2.state.detectLoading) {
                    _this2.setState({ detectLoading: false });
                    // SnackBar.show({ pos: 'bottom-center', text: "Could not select location." });
                }
            }, 5000);
            this.setState({ detectLoading: true });

            (0, _mapHelpers._getLocationFromPlaceId)(location.reference, function (location_object) {
                _this2.props.selectLocation(location_object, 'autoComplete').then(function () {
                    _this2.setState({ detectLoading: false, searchResults: [], search: location_object.formatted_address });
                    cb();
                });
            });
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
        key: 'focusOut',
        value: function focusOut() {
            if (this.props.selectedLocation && this.props.selectedLocation.formatted_address) {
                this.setState({ search: props.selectedLocation.formatted_address || '' });
            }
        }
    }, {
        key: 'goToLocation',
        value: function goToLocation() {
            if (this.props.isTopbar) {
                var redirect_to = "";
                /*if (window.location.pathname.includes('sptcit') || window.location.pathname.includes('sptlitcit')) {
                    redirect_to = "/opd/searchresults"
                }
                 if (window.location.pathname.includes('lbcit') || window.location.pathname.includes('lblitcit')) {
                    redirect_to = "/lab/searchresults"
                }*/

                var location_url = '/locationsearch';
                if (redirect_to) {
                    location_url += '?redirect_to=' + redirect_to;
                }
                this.props.history.push(location_url);
            }
        }
    }, {
        key: 'clearSearch',
        value: function clearSearch() {
            var gtmData = {
                'Category': 'ConsumerApp', 'Action': 'ClearLocationSearchText', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'clear-location-search-text', 'searchString': this.state.search
            };
            _gtm2.default.sendEvent({ data: gtmData });
            this.setState({ search: '' });
            this.props.getCityListLayout();
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.props.commonSearchPage) {
                return _react2.default.createElement(
                    'div',
                    { className: 'serch-nw-inputs' },
                    _react2.default.createElement('input', { className: 'new-srch-inp', autoComplete: 'off', placeholder: 'Search Location', value: this.state.search, onChange: this.inputHandler.bind(this), id: 'doc-input-field', onBlur: this.onblur.bind(this), onFocus: this.onfocus.bind(this) }),
                    _react2.default.createElement('img', { className: 'srch-inp-img', src: "/assets" + "/img/new-loc-ico.svg" }),
                    this.state.search ? _react2.default.createElement(
                        'span',
                        { className: 'cursor-pntr search-close-icon', onClick: this.clearSearch.bind(this) },
                        _react2.default.createElement('img', { src: "/assets" + '/img/sl-close.svg' })
                    ) : '',
                    _react2.default.createElement(
                        'button',
                        { className: 'srch-inp-btn-img', onClick: this.detectLocation.bind(this) },
                        'Auto Detect ',
                        _react2.default.createElement('img', { src: "/assets" + "/img/loc-track.svg" })
                    )
                );
            }

            if (this.props.articleSearchPage) {
                return _react2.default.createElement(
                    'div',
                    { className: 'articleTypeloc' },
                    _react2.default.createElement(
                        'div',
                        { className: 'articleInputContainer' },
                        _react2.default.createElement(
                            'button',
                            { className: 'artc-btn-lft artc-disable' },
                            this.props.commonSearch ? _react2.default.createElement('img', { style: { width: '12px', marginRight: '10px' }, src: "/assets" + "/img/new-loc-ico.svg" }) : '',
                            this.props.commonSearch ? 'Location' : this.props.specialityName
                        ),
                        _react2.default.createElement('input', { className: 'artc-inp-loc', type: 'text', autoComplete: 'off', placeholder: 'Location', value: this.state.search, onChange: this.inputHandler.bind(this), id: 'doc-input-field article-type-input-field', onFocus: this.onfocus.bind(this), onBlur: this.onblur.bind(this) })
                    )
                );
            }

            return (
                // toggle class : 'doc-select-none'
                _react2.default.createElement(
                    'div',
                    { className: 'row ' + (this.props.fromVip ? 'searchForVip' : ''), style: { backgroundColor: 'var(--text--primary--color)', marginTop: 10, position: 'relative', zIndex: 11, marginLeft: 2, marginRight: 2 }, id: 'location_element' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12' },
                        this.props.resultType == 'list' ? _react2.default.createElement(
                            'p',
                            { className: 'location-txt-msg' },
                            'Select your location to get the most relevant results'
                        ) : '',
                        _react2.default.createElement('div', { className: this.props.resultType == 'list' ? "doc-caret" : "doc-select-none" })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12 ' + (this.props.fromVip ? 'vip-srch-pdng-adj' : ''), style: { paddingBottom: 10 } },
                        _react2.default.createElement(
                            'p',
                            { className: 'vip-srch-slct' },
                            'Select your location'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'doc-select-location-div' },
                            _react2.default.createElement(
                                'div',
                                { className: 'doc-input-loc-div', onClick: this.goToLocation.bind(this) },
                                _react2.default.createElement('input', { type: 'text', className: 'form-control doc-input-loc', id: 'doc-input-field', placeholder: 'Search your locality', value: this.state.search, onBlur: this.onblur.bind(this), onFocus: this.onfocus.bind(this), onChange: this.inputHandler.bind(this) }),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'doc-input-loc-icon' },
                                    _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/map-marker-blue.svg" })
                                ),
                                this.props.isTopbar ? "" : _react2.default.createElement(
                                    'div',
                                    { className: 'doc-or-text  text-center' },
                                    _react2.default.createElement(
                                        'p',
                                        { style: { color: '#fff', fontSize: 28 } },
                                        '|'
                                    )
                                ),
                                this.props.isTopbar ? "" : _react2.default.createElement(
                                    'div',
                                    { className: 'doc-auto-detect-div ', onClick: this.detectLocation.bind(this) },
                                    _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/crosshairs-gps.svg" }),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'fw-500 text-sm', style: { color: '#fff' } },
                                        'Auto Detect'
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement('div', { id: 'map1', style: { display: 'none' } })
                )
            );
        }
    }]);

    return LocationElementsView;
}(_react2.default.Component);

exports.default = LocationElementsView;

/***/ }),

/***/ "./dev/js/containers/commons/locationElements.js":
/*!*******************************************************!*\
  !*** ./dev/js/containers/commons/locationElements.js ***!
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

var _index2 = __webpack_require__(/*! ../../components/commons/locationElements/index.js */ "./dev/js/components/commons/locationElements/index.js");

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LocationElemContainer = function (_React$Component) {
    _inherits(LocationElemContainer, _React$Component);

    function LocationElemContainer(props) {
        _classCallCheck(this, LocationElemContainer);

        return _possibleConstructorReturn(this, (LocationElemContainer.__proto__ || Object.getPrototypeOf(LocationElemContainer)).call(this, props));
    }

    _createClass(LocationElemContainer, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(_index3.default, this.props);
        }
    }]);

    return LocationElemContainer;
}(_react2.default.Component);

LocationElemContainer.contextTypes = {
    router: function router() {
        return null;
    }
};


var mapStateToProps = function mapStateToProps(state) {
    var _state$SEARCH_CRITERI = state.SEARCH_CRITERIA_OPD,
        selectedLocation = _state$SEARCH_CRITERI.selectedLocation,
        locationType = _state$SEARCH_CRITERI.locationType;


    return {
        selectedLocation: selectedLocation,
        locationType: locationType
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        selectLocation: function selectLocation(location, type) {
            return dispatch((0, _index.selectLocation)(location, type));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LocationElemContainer);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2xvY2F0aW9uRWxlbWVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9sb2NhdGlvbkVsZW1lbnRzL2xvY2F0aW9uRWxlbWVudHNWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL2NvbW1vbnMvbG9jYXRpb25FbGVtZW50cy5qcyJdLCJuYW1lcyI6WyJsb2NhdGlvbkVsZW1lbnRzIiwiTG9jYXRpb25FbGVtZW50c1ZpZXciLCJwcm9wcyIsInN0YXRlIiwic2VhcmNoIiwic2VhcmNoUmVzdWx0cyIsImRldGVjdExvYWRpbmciLCJ2YWxpZGF0aW9uRXJyb3IiLCJsb2NhdGlvbl9vYmplY3QiLCJsb2NhdGlvbl90eXBlIiwic2VsZWN0ZWRMb2NhdGlvbiIsInNldFN0YXRlIiwiZm9ybWF0dGVkX2FkZHJlc3MiLCJsb2NhdGlvblR5cGUiLCJpbmNsdWRlcyIsIm9uUmVmIiwibG9jYXRpb25OYW1lIiwiZSIsImlzVG9wYmFyIiwic2VhcmNoX3ZhbCIsImdldENpdHlMaXN0TGF5b3V0IiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwidG9wIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib2Zmc2V0UGFyZW50Iiwid2luZG93Iiwic2Nyb2xsIiwib2Zmc2V0VG9wIiwidW5kZWZpbmVkIiwibG9jYXRpb24iLCJyZXN1bHRzIiwic3RhdHVzIiwid2lkZ2V0Iiwid2lkZ2V0SWQiLCJzcGVjaWFsaXR5SWQiLCJiaW5kIiwidmFsdWUiLCJnZXRMb2NhdGlvbiIsIm1vYmlsZV9ubyIsImNiIiwidGltZW91dCIsInNldFRpbWVvdXQiLCJyZWZlcmVuY2UiLCJzZWxlY3RMb2NhdGlvbiIsInRoZW4iLCJTbmFja0JhciIsInNob3ciLCJwb3MiLCJ0ZXh0IiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsInBhcnNlRmxvYXQiLCJjb29yZHMiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImNsZWFyVGltZW91dCIsImEiLCJiIiwiYyIsInJlZGlyZWN0X3RvIiwibG9jYXRpb25fdXJsIiwiaGlzdG9yeSIsInB1c2giLCJndG1EYXRhIiwiR1RNIiwiZ2V0VXNlcklkIiwic2VuZEV2ZW50IiwiZGF0YSIsImNvbW1vblNlYXJjaFBhZ2UiLCJpbnB1dEhhbmRsZXIiLCJvbmJsdXIiLCJvbmZvY3VzIiwiQVNTRVRTX0JBU0VfVVJMIiwiY2xlYXJTZWFyY2giLCJkZXRlY3RMb2NhdGlvbiIsImFydGljbGVTZWFyY2hQYWdlIiwiY29tbW9uU2VhcmNoIiwid2lkdGgiLCJtYXJnaW5SaWdodCIsInNwZWNpYWxpdHlOYW1lIiwiZnJvbVZpcCIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpblRvcCIsInpJbmRleCIsIm1hcmdpbkxlZnQiLCJyZXN1bHRUeXBlIiwicGFkZGluZ0JvdHRvbSIsImdvVG9Mb2NhdGlvbiIsImNvbG9yIiwiZm9udFNpemUiLCJkaXNwbGF5IiwiUmVhY3QiLCJDb21wb25lbnQiLCJMb2NhdGlvbkVsZW1Db250YWluZXIiLCJjb250ZXh0VHlwZXMiLCJyb3V0ZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJTRUFSQ0hfQ1JJVEVSSUFfT1BEIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztrQkFFZUEsOEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmY7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUMsb0I7OztBQUVGLGtDQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0pBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLG9CQUFRLEVBREM7QUFFVEMsMkJBQWUsRUFGTjtBQUdUQywyQkFBZSxLQUhOO0FBSVRDLDZCQUFpQixLQUpS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bWVudHMgZnJvbSAnLi9sb2NhdGlvbkVsZW1lbnRzVmlldydcblxuZXhwb3J0IGRlZmF1bHQgbG9jYXRpb25FbGVtZW50cyAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCB7IF9nZXRsb2NhdGlvbkZyb21MYXRMb25nLCBfZ2V0TG9jYXRpb25Gcm9tUGxhY2VJZCwgX2F1dG9Db21wbGV0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL21hcEhlbHBlcnMnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuXG5jbGFzcyBMb2NhdGlvbkVsZW1lbnRzVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlYXJjaDogJycsXG4gICAgICAgICAgICBzZWFyY2hSZXN1bHRzOiBbXSxcbiAgICAgICAgICAgIGRldGVjdExvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIGxvY2F0aW9uX29iamVjdDogbnVsbCxcbiAgICAgICAgICAgIGxvY2F0aW9uX3R5cGU6ICcnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG5cbiAgICAgICAgaWYgKHByb3BzLnNlbGVjdGVkTG9jYXRpb24gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5zZWFyY2gpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiAhPSB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvY2F0aW9uX29iamVjdDogcHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiwgc2VhcmNoOiBwcm9wcy5zZWxlY3RlZExvY2F0aW9uLmZvcm1hdHRlZF9hZGRyZXNzIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICghcHJvcHMubG9jYXRpb25UeXBlLmluY2x1ZGVzKFwiZ2VvXCIpKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7IGxvY2F0aW9uX29iamVjdDogcHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiwgc2VhcmNoOiBwcm9wcy5zZWxlY3RlZExvY2F0aW9uLmZvcm1hdHRlZF9hZGRyZXNzIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblJlZih0aGlzKVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2NhdGlvblR5cGUgJiYgIXRoaXMucHJvcHMubG9jYXRpb25UeXBlLmluY2x1ZGVzKFwiZ2VvXCIpICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24uZm9ybWF0dGVkX2FkZHJlc3MpIHtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvY2F0aW9uX29iamVjdDogdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLCBzZWFyY2g6IHRoaXMucHJvcHMubG9jYXRpb25OYW1lIHx8IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5mb3JtYXR0ZWRfYWRkcmVzcyB9KVxuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiAoIXRoaXMucHJvcHMuaXNUb3BiYXIpIHtcbiAgICAgICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9jLWlucHV0LWZpZWxkJykpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvYy1pbnB1dC1maWVsZCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCAoKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBsZXQgc2VhcmNoX3ZhbCA9IFwiXCJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uVHlwZSAmJiAhdGhpcy5wcm9wcy5sb2NhdGlvblR5cGUuaW5jbHVkZXMoXCJnZW9cIikgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5mb3JtYXR0ZWRfYWRkcmVzcykge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHNlYXJjaF92YWwgPSB0aGlzLnByb3BzLmxvY2F0aW9uTmFtZSB8fCB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24uZm9ybWF0dGVkX2FkZHJlc3NcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNlYXJjaCA9PSBzZWFyY2hfdmFsKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRDaXR5TGlzdExheW91dCgpXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvY2F0aW9uX29iamVjdDogbnVsbCwgc2VhcmNoOiAnJyB9KVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICAgICB9KVxuXG4gICAgICAgIC8vICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb2MtaW5wdXQtZmllbGQnKS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsICgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5zZWFyY2gpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2NhdGlvblR5cGUgJiYgIXRoaXMucHJvcHMubG9jYXRpb25UeXBlLmluY2x1ZGVzKFwiZ2VvXCIpICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24uZm9ybWF0dGVkX2FkZHJlc3MpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvY2F0aW9uX29iamVjdDogdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLCBzZWFyY2g6IHRoaXMucHJvcHMubG9jYXRpb25OYW1lIHx8IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5mb3JtYXR0ZWRfYWRkcmVzcyB9KVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldENpdHlMaXN0TGF5b3V0KClcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBsb2NhdGlvbl9vYmplY3Q6IG51bGwsIHNlYXJjaDogJycgfSlcbiAgICAgICAgLy8gICAgICAgICAgICAgfSlcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9LCA1MDApXG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBvbmZvY3VzKGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmlzVG9wYmFyKSB7XG4gICAgICAgICAgICBsZXQgc2VhcmNoX3ZhbCA9IFwiXCJcblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMubG9jYXRpb25UeXBlICYmICF0aGlzLnByb3BzLmxvY2F0aW9uVHlwZS5pbmNsdWRlcyhcImdlb1wiKSAmJiB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLmZvcm1hdHRlZF9hZGRyZXNzKSB7XG4gICAgICAgICAgICAgICAgc2VhcmNoX3ZhbCA9IHRoaXMucHJvcHMubG9jYXRpb25OYW1lIHx8IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5mb3JtYXR0ZWRfYWRkcmVzc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2VhcmNoID09IHNlYXJjaF92YWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldENpdHlMaXN0TGF5b3V0KClcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9jYXRpb25fb2JqZWN0OiBudWxsLCBzZWFyY2g6ICcnIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKSA9PT0gJ2FydGljbGUtdHlwZS1pbnB1dC1maWVsZCcpIHtcbiAgICAgICAgICAgIHZhciB0b3AgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhcnRpY2xlVHlwZWxvYycpWzBdO1xuICAgICAgICAgICAgaWYodG9wLm9mZnNldFBhcmVudCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGwoMCwgdG9wLm9mZnNldFBhcmVudC5vZmZzZXRUb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25ibHVyKCkge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMuaXNUb3BiYXIpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5zZWFyY2gpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2NhdGlvblR5cGUgJiYgIXRoaXMucHJvcHMubG9jYXRpb25UeXBlLmluY2x1ZGVzKFwiZ2VvXCIpICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24uZm9ybWF0dGVkX2FkZHJlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvY2F0aW9uX29iamVjdDogdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLCBzZWFyY2g6IHRoaXMucHJvcHMubG9jYXRpb25OYW1lIHx8IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5mb3JtYXR0ZWRfYWRkcmVzcyB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldENpdHlMaXN0TGF5b3V0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uUmVmKHVuZGVmaW5lZClcbiAgICB9XG5cbiAgICBnZXRMb2NhdGlvbihsb2NhdGlvbikge1xuICAgICAgICBfYXV0b0NvbXBsZXRlU2VydmljZShsb2NhdGlvbiwgZnVuY3Rpb24gKHJlc3VsdHMsIHN0YXR1cykge1xuICAgICAgICAgICAgcmVzdWx0cyA9IHJlc3VsdHMgfHwgW11cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hSZXN1bHRzOiByZXN1bHRzIH0pXG5cbiAgICAgICAgICAgIC8vU2VhcmNoIHdpZGdldCBkYXRhIGlkZW50aWZpZXJzXG4gICAgICAgICAgICBsZXQgd2lkZ2V0ID0ge31cbiAgICAgICAgICAgIHdpZGdldC53aWRnZXRJZCA9IHRoaXMucHJvcHMud2lkZ2V0SWQgfHwgJydcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNwZWNpYWxpdHlJZCkge1xuXG4gICAgICAgICAgICAgICAgd2lkZ2V0LnNwZWNpYWxpdHlJZCA9IHRoaXMucHJvcHMuc3BlY2lhbGl0eUlkIHx8ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldENpdHlMaXN0TGF5b3V0KHJlc3VsdHMsIHdpZGdldClcbiAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgIH1cblxuICAgIGlucHV0SGFuZGxlcihlKSB7XG4gICAgICAgIGlmICghZS50YXJnZXQudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0Q2l0eUxpc3RMYXlvdXQoKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzZWFyY2g6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuZ2V0TG9jYXRpb24oZS50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgaW5wdXROb0hhbmRsZXIoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1vYmlsZV9ubzogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3I6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc2VsZWN0TG9jYXRpb24obG9jYXRpb24sIGNiKSB7XG4gICAgICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5kZXRlY3RMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRldGVjdExvYWRpbmc6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgLy8gU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIkNvdWxkIG5vdCBzZWxlY3QgbG9jYXRpb24uXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDUwMDApXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRlY3RMb2FkaW5nOiB0cnVlIH0pXG5cbiAgICAgICAgX2dldExvY2F0aW9uRnJvbVBsYWNlSWQobG9jYXRpb24ucmVmZXJlbmNlLCAobG9jYXRpb25fb2JqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdExvY2F0aW9uKGxvY2F0aW9uX29iamVjdCwgJ2F1dG9Db21wbGV0ZScpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRlY3RMb2FkaW5nOiBmYWxzZSwgc2VhcmNoUmVzdWx0czogW10sIHNlYXJjaDogbG9jYXRpb25fb2JqZWN0LmZvcm1hdHRlZF9hZGRyZXNzIH0pXG4gICAgICAgICAgICAgICAgY2IoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBkZXRlY3RMb2NhdGlvbigpIHtcbiAgICAgICAgbGV0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmRldGVjdExvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGV0ZWN0TG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiQ291bGQgbm90IGZldGNoIGxvY2F0aW9uLlwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCA1MDAwKVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRlY3RMb2FkaW5nOiB0cnVlIH0pXG5cbiAgICAgICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigocG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBfZ2V0bG9jYXRpb25Gcm9tTGF0TG9uZyhwYXJzZUZsb2F0KHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSksIHBhcnNlRmxvYXQocG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSksICdsb2NhbGl0eScsIChsb2NhdGlvbl9vYmplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RMb2NhdGlvbihsb2NhdGlvbl9vYmplY3QsICdhdXRvRGV0ZWN0JykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRlY3RMb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCAoYSwgYiwgYykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRlY3RMb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJDb3VsZCBub3QgZmV0Y2ggbG9jYXRpb24uXCIgfSk7XG4gICAgICAgICAgICB9LCAoYSwgYiwgYykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRlY3RMb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJDb3VsZCBub3QgZmV0Y2ggbG9jYXRpb24uXCIgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRldGVjdExvYWRpbmc6IGZhbHNlIH0pXG4gICAgICAgICAgICAvLyBnZW9sb2NhdGlvbiBpcyBub3Qgc3VwcG9ydGVkXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb2N1c091dCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24uZm9ybWF0dGVkX2FkZHJlc3MpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2g6IHByb3BzLnNlbGVjdGVkTG9jYXRpb24uZm9ybWF0dGVkX2FkZHJlc3MgfHwgJycgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdvVG9Mb2NhdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNUb3BiYXIpIHtcbiAgICAgICAgICAgIGxldCByZWRpcmVjdF90byA9IFwiXCJcbiAgICAgICAgICAgIC8qaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygnc3B0Y2l0JykgfHwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCdzcHRsaXRjaXQnKSkge1xuICAgICAgICAgICAgICAgIHJlZGlyZWN0X3RvID0gXCIvb3BkL3NlYXJjaHJlc3VsdHNcIlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCdsYmNpdCcpIHx8IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygnbGJsaXRjaXQnKSkge1xuICAgICAgICAgICAgICAgIHJlZGlyZWN0X3RvID0gXCIvbGFiL3NlYXJjaHJlc3VsdHNcIlxuICAgICAgICAgICAgfSovXG5cbiAgICAgICAgICAgIGxldCBsb2NhdGlvbl91cmwgPSAnL2xvY2F0aW9uc2VhcmNoJ1xuICAgICAgICAgICAgaWYgKHJlZGlyZWN0X3RvKSB7XG4gICAgICAgICAgICAgICAgbG9jYXRpb25fdXJsICs9IGA/cmVkaXJlY3RfdG89JHtyZWRpcmVjdF90b31gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChsb2NhdGlvbl91cmwpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhclNlYXJjaCgpIHtcbiAgICAgICAgbGV0IGd0bURhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0NsZWFyTG9jYXRpb25TZWFyY2hUZXh0JywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2xlYXItbG9jYXRpb24tc2VhcmNoLXRleHQnLCAnc2VhcmNoU3RyaW5nJzogdGhpcy5zdGF0ZS5zZWFyY2hcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoOiAnJyB9KVxuICAgICAgICB0aGlzLnByb3BzLmdldENpdHlMaXN0TGF5b3V0KClcbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY29tbW9uU2VhcmNoUGFnZSkge1xuICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwic2VyY2gtbnctaW5wdXRzXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm5ldy1zcmNoLWlucFwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIExvY2F0aW9uXCIgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNofSBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gaWQ9XCJkb2MtaW5wdXQtZmllbGRcIiBvbkJsdXI9e3RoaXMub25ibHVyLmJpbmQodGhpcyl9IG9uRm9jdXM9e3RoaXMub25mb2N1cy5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic3JjaC1pbnAtaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbmV3LWxvYy1pY28uc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlYXJjaCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjdXJzb3ItcG50ciBzZWFyY2gtY2xvc2UtaWNvblwiIG9uQ2xpY2s9e3RoaXMuY2xlYXJTZWFyY2guYmluZCh0aGlzKX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3NsLWNsb3NlLnN2Zyd9IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3JjaC1pbnAtYnRuLWltZ1wiIG9uQ2xpY2s9e3RoaXMuZGV0ZWN0TG9jYXRpb24uYmluZCh0aGlzKX0+QXV0byBEZXRlY3QgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9sb2MtdHJhY2suc3ZnXCJ9IC8+PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmFydGljbGVTZWFyY2hQYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlVHlwZWxvY1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZUlucHV0Q29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYXJ0Yy1idG4tbGZ0IGFydGMtZGlzYWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29tbW9uU2VhcmNoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogJzEycHgnLCBtYXJnaW5SaWdodDogJzEwcHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL25ldy1sb2MtaWNvLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jb21tb25TZWFyY2ggPyAnTG9jYXRpb24nIDogdGhpcy5wcm9wcy5zcGVjaWFsaXR5TmFtZX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17YGFydGMtaW5wLWxvY2B9IHR5cGU9XCJ0ZXh0XCIgYXV0b0NvbXBsZXRlPVwib2ZmXCIgcGxhY2Vob2xkZXI9XCJMb2NhdGlvblwiIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaH0gb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IGlkPVwiZG9jLWlucHV0LWZpZWxkIGFydGljbGUtdHlwZS1pbnB1dC1maWVsZFwiIG9uRm9jdXM9e3RoaXMub25mb2N1cy5iaW5kKHRoaXMpfSBvbkJsdXI9e3RoaXMub25ibHVyLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAvLyB0b2dnbGUgY2xhc3MgOiAnZG9jLXNlbGVjdC1ub25lJ1xuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Byb3cgJHt0aGlzLnByb3BzLmZyb21WaXA/J3NlYXJjaEZvclZpcCc6Jyd9YH0gIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogYHZhcigtLXRleHQtLXByaW1hcnktLWNvbG9yKWAsIG1hcmdpblRvcDogMTAsIHBvc2l0aW9uOiAncmVsYXRpdmUnLCB6SW5kZXg6IDExLCBtYXJnaW5MZWZ0OjIsIG1hcmdpblJpZ2h0OjIgfX0gaWQ9XCJsb2NhdGlvbl9lbGVtZW50XCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlc3VsdFR5cGUgPT0gJ2xpc3QnID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsb2NhdGlvbi10eHQtbXNnXCI+U2VsZWN0IHlvdXIgbG9jYXRpb24gdG8gZ2V0IHRoZSBtb3N0IHJlbGV2YW50IHJlc3VsdHM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnJlc3VsdFR5cGUgPT0gJ2xpc3QnID8gXCJkb2MtY2FyZXRcIiA6IFwiZG9jLXNlbGVjdC1ub25lXCJ9PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2wtMTIgJHt0aGlzLnByb3BzLmZyb21WaXA/J3ZpcC1zcmNoLXBkbmctYWRqJzonJ31gfSBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAxMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidmlwLXNyY2gtc2xjdFwiPlNlbGVjdCB5b3VyIGxvY2F0aW9uPC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvYy1zZWxlY3QtbG9jYXRpb24tZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvYy1pbnB1dC1sb2MtZGl2XCIgb25DbGljaz17dGhpcy5nb1RvTG9jYXRpb24uYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGRvYy1pbnB1dC1sb2NcIiBpZD1cImRvYy1pbnB1dC1maWVsZFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIHlvdXIgbG9jYWxpdHlcIiB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2h9IG9uQmx1cj17dGhpcy5vbmJsdXIuYmluZCh0aGlzKX0gb25Gb2N1cz17dGhpcy5vbmZvY3VzLmJpbmQodGhpcyl9IG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1pbnB1dC1sb2MtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL21hcC1tYXJrZXItYmx1ZS5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlzVG9wYmFyID8gXCJcIiA6IDxkaXYgY2xhc3NOYW1lPVwiZG9jLW9yLXRleHQgIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJyNmZmYnLCBmb250U2l6ZTogMjggfX0+fDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pc1RvcGJhciA/IFwiXCIgOiA8ZGl2IGNsYXNzTmFtZT1cImRvYy1hdXRvLWRldGVjdC1kaXYgXCIgb25DbGljaz17dGhpcy5kZXRlY3RMb2NhdGlvbi5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvY3Jvc3NoYWlycy1ncHMuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1zbVwiIHN0eWxlPXt7IGNvbG9yOiAnI2ZmZicgfX0+QXV0byBEZXRlY3Q8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtYXAxXCIgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19PjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9uRWxlbWVudHNWaWV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IHNlbGVjdExvY2F0aW9uIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcbmltcG9ydCBMb2NhdGlvbkVsZW1lbnRWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9sb2NhdGlvbkVsZW1lbnRzL2luZGV4LmpzJ1xuXG5jbGFzcyBMb2NhdGlvbkVsZW1Db250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJvdXRlcjogKCkgPT4gbnVsbFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExvY2F0aW9uRWxlbWVudFZpZXcgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIHNlbGVjdGVkTG9jYXRpb24sXG4gICAgICAgIGxvY2F0aW9uVHlwZVxuICAgIH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfT1BEXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICBsb2NhdGlvblR5cGVcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHNlbGVjdExvY2F0aW9uOiAobG9jYXRpb24sIHR5cGUpID0+IGRpc3BhdGNoKHNlbGVjdExvY2F0aW9uKGxvY2F0aW9uLCB0eXBlKSlcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTG9jYXRpb25FbGVtQ29udGFpbmVyKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=