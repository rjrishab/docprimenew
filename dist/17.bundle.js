(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./dev/js/components/commons/locationPopup/index.js":
/*!**********************************************************!*\
  !*** ./dev/js/components/commons/locationPopup/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _locationPopupView = __webpack_require__(/*! ./locationPopupView */ "./dev/js/components/commons/locationPopup/locationPopupView.js");

var _locationPopupView2 = _interopRequireDefault(_locationPopupView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _locationPopupView2.default;

/***/ }),

/***/ "./dev/js/components/commons/locationPopup/locationPopupView.js":
/*!**********************************************************************!*\
  !*** ./dev/js/components/commons/locationPopup/locationPopupView.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _mapHelpers = __webpack_require__(/*! ../../../helpers/mapHelpers */ "./dev/js/helpers/mapHelpers.js");

var _gtm = __webpack_require__(/*! ../../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var LocationPopupView = function (_React$Component) {
    _inherits(LocationPopupView, _React$Component);

    function LocationPopupView(props) {
        _classCallCheck(this, LocationPopupView);

        var _this = _possibleConstructorReturn(this, (LocationPopupView.__proto__ || Object.getPrototypeOf(LocationPopupView)).call(this, props));

        _this.state = {
            search: '',
            location_object: null
        };
        return _this;
    }

    _createClass(LocationPopupView, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            if (props.selectedLocation && this.props.selectedLocation) {
                if (this.state.search) {
                    if (props.selectedLocation != this.props.selectedLocation) {
                        this.setState({ location_object: props.selectedLocation, search: props.selectedLocation.formatted_address });
                    }
                } else if (!props.locationType.includes("geo")) {
                    this.setState({ location_object: props.selectedLocation, search: props.selectedLocation.formatted_address });
                }
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.locationType && !this.props.locationType.includes("geo") && this.props.selectedLocation && this.props.selectedLocation.formatted_address) {
                this.setState({ location_object: this.props.selectedLocation, search: this.props.locationName || this.props.selectedLocation.formatted_address });
            }
        }
    }, {
        key: 'goToLocation',
        value: function goToLocation() {
            if (this.props.isTopbar) {
                var redirect_to = "";
                if (window.location.pathname.includes('sptcit') || window.location.pathname.includes('sptlitcit')) {
                    redirect_to = "/opd/searchresults";
                }

                if (window.location.pathname.includes('lbcit') || window.location.pathname.includes('lblitcit')) {
                    redirect_to = "/lab/searchresults";
                }

                var location_url = '/locationsearch';
                if (redirect_to) {
                    location_url += '?redirect_to=' + redirect_to;
                }

                var data = {
                    'Category': 'ChangeLocationDoctorResultsPopUp', 'Action': 'change-location-doctor-results-PopUp', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'change-location-doctor-results-PopUp', 'url': window.location.pathname
                };
                _gtm2.default.sendEvent({ data: data });
                this.props.history.push(location_url);
            }
        }
    }, {
        key: 'continueLocation',
        value: function continueLocation() {
            var _this2 = this;

            var parsed = queryString.parse(this.props.location.search);
            var data = {
                'Category': 'ContinueLocationDoctorResultsPopUp', 'Action': 'continue-location-doctor-results-PopUp', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'continue-location-doctor-results-PopUp', 'url': window.location.pathname
            };
            _gtm2.default.sendEvent({ data: data });
            if (parsed.lat && parsed.long) {
                (0, _mapHelpers._getlocationFromLatLong)(parsed.lat, parsed.long, 'locality', function (locationData) {
                    if (locationData) {
                        _this2.props.selectLocation(locationData, 'autoDetect');
                    }
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                { className: 'fr-location-popup-container' },
                _react2.default.createElement(
                    'p',
                    { className: 'fw-500 text-md' },
                    'Showing ',
                    this.props.count,
                    ' results ',
                    _react2.default.createElement(
                        'span',
                        { style: { fontWeight: 700 } },
                        this.props.criteriaString ? 'for ' + this.props.criteriaString : ''
                    )
                ),
                _react2.default.createElement(
                    'p',
                    { className: 'fw-700 text-md' },
                    this.props.locationName ? ' in ' + this.props.locationName : ''
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mrt-20' },
                    _react2.default.createElement(
                        'button',
                        { className: 'fw-500 fr-popup-cont', onClick: function onClick() {
                                return _this3.continueLocation();
                            } },
                        'Continue'
                    )
                ),
                _react2.default.createElement(
                    'p',
                    { className: 'fw-500 mrt-20 text-xs' },
                    'OR'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mrt-20' },
                    _react2.default.createElement(
                        'button',
                        { className: 'fw-500 fr-popup-change', onClick: this.goToLocation.bind(this) },
                        'Change Location'
                    )
                )
            );
        }
    }]);

    return LocationPopupView;
}(_react2.default.Component);

exports.default = LocationPopupView;

/***/ }),

/***/ "./dev/js/containers/commons/locationPopup.js":
/*!****************************************************!*\
  !*** ./dev/js/containers/commons/locationPopup.js ***!
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

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _index2 = __webpack_require__(/*! ../../components/commons/locationPopup/index.js */ "./dev/js/components/commons/locationPopup/index.js");

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LocationPopupContainer = function (_React$Component) {
    _inherits(LocationPopupContainer, _React$Component);

    function LocationPopupContainer(props) {
        _classCallCheck(this, LocationPopupContainer);

        return _possibleConstructorReturn(this, (LocationPopupContainer.__proto__ || Object.getPrototypeOf(LocationPopupContainer)).call(this, props));
    }

    _createClass(LocationPopupContainer, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(_index3.default, this.props);
        }
    }]);

    return LocationPopupContainer;
}(_react2.default.Component);

LocationPopupContainer.contextTypes = {
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LocationPopupContainer);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2xvY2F0aW9uUG9wdXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9sb2NhdGlvblBvcHVwL2xvY2F0aW9uUG9wdXBWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL2NvbW1vbnMvbG9jYXRpb25Qb3B1cC5qcyJdLCJuYW1lcyI6WyJsb2NhdGlvblBvcHVwIiwicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiTG9jYXRpb25Qb3B1cFZpZXciLCJwcm9wcyIsInN0YXRlIiwic2VhcmNoIiwibG9jYXRpb25fb2JqZWN0Iiwic2VsZWN0ZWRMb2NhdGlvbiIsInNldFN0YXRlIiwiZm9ybWF0dGVkX2FkZHJlc3MiLCJsb2NhdGlvblR5cGUiLCJpbmNsdWRlcyIsImxvY2F0aW9uTmFtZSIsImlzVG9wYmFyIiwicmVkaXJlY3RfdG8iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwibG9jYXRpb25fdXJsIiwiZGF0YSIsIkdUTSIsImdldFVzZXJJZCIsInNlbmRFdmVudCIsImhpc3RvcnkiLCJwdXNoIiwicGFyc2VkIiwicGFyc2UiLCJsYXQiLCJsb25nIiwibG9jYXRpb25EYXRhIiwic2VsZWN0TG9jYXRpb24iLCJjb3VudCIsImZvbnRXZWlnaHQiLCJjcml0ZXJpYVN0cmluZyIsImNvbnRpbnVlTG9jYXRpb24iLCJnb1RvTG9jYXRpb24iLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiLCJMb2NhdGlvblBvcHVwQ29udGFpbmVyIiwiY29udGV4dFR5cGVzIiwicm91dGVyIiwibWFwU3RhdGVUb1Byb3BzIiwiU0VBUkNIX0NSSVRFUklBX09QRCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7a0JBRWVBLDJCOzs7Ozs7Ozs7Ozs7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QixJQUF6QixDQUFULENBQXBCO0FBQUE7QUFEYixLQUFQO0FBR0gsQ0FKRDs7a0JBT2UseUJBQVFKLGVBQVIsRUFBeUJFLGtCQUF6QixFQUE2Q0wsc0JBQTdDLEMiLCJmaWxlIjoiMTcuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxvY2F0aW9uUG9wdXAgZnJvbSAnLi9sb2NhdGlvblBvcHVwVmlldydcblxuZXhwb3J0IGRlZmF1bHQgbG9jYXRpb25Qb3B1cCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IF9nZXRsb2NhdGlvbkZyb21MYXRMb25nIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9tYXBIZWxwZXJzJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0nXG5cbmNsYXNzIExvY2F0aW9uUG9wdXBWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2VhcmNoOiAnJyxcbiAgICAgICAgICAgIGxvY2F0aW9uX29iamVjdDogbnVsbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNlYXJjaCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5zZWxlY3RlZExvY2F0aW9uICE9IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9jYXRpb25fb2JqZWN0OiBwcm9wcy5zZWxlY3RlZExvY2F0aW9uLCBzZWFyY2g6IHByb3BzLnNlbGVjdGVkTG9jYXRpb24uZm9ybWF0dGVkX2FkZHJlc3MgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFwcm9wcy5sb2NhdGlvblR5cGUuaW5jbHVkZXMoXCJnZW9cIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9jYXRpb25fb2JqZWN0OiBwcm9wcy5zZWxlY3RlZExvY2F0aW9uLCBzZWFyY2g6IHByb3BzLnNlbGVjdGVkTG9jYXRpb24uZm9ybWF0dGVkX2FkZHJlc3MgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2NhdGlvblR5cGUgJiYgIXRoaXMucHJvcHMubG9jYXRpb25UeXBlLmluY2x1ZGVzKFwiZ2VvXCIpICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24uZm9ybWF0dGVkX2FkZHJlc3MpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2NhdGlvbl9vYmplY3Q6IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiwgc2VhcmNoOiB0aGlzLnByb3BzLmxvY2F0aW9uTmFtZSB8fCB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24uZm9ybWF0dGVkX2FkZHJlc3MgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdvVG9Mb2NhdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNUb3BiYXIpIHtcbiAgICAgICAgICAgIGxldCByZWRpcmVjdF90byA9IFwiXCJcbiAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJ3NwdGNpdCcpIHx8IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygnc3B0bGl0Y2l0JykpIHtcbiAgICAgICAgICAgICAgICByZWRpcmVjdF90byA9IFwiL29wZC9zZWFyY2hyZXN1bHRzXCJcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygnbGJjaXQnKSB8fCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJ2xibGl0Y2l0JykpIHtcbiAgICAgICAgICAgICAgICByZWRpcmVjdF90byA9IFwiL2xhYi9zZWFyY2hyZXN1bHRzXCJcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGxvY2F0aW9uX3VybCA9ICcvbG9jYXRpb25zZWFyY2gnXG4gICAgICAgICAgICBpZiAocmVkaXJlY3RfdG8pIHtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbl91cmwgKz0gYD9yZWRpcmVjdF90bz0ke3JlZGlyZWN0X3RvfWBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NoYW5nZUxvY2F0aW9uRG9jdG9yUmVzdWx0c1BvcFVwJywgJ0FjdGlvbic6ICdjaGFuZ2UtbG9jYXRpb24tZG9jdG9yLXJlc3VsdHMtUG9wVXAnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjaGFuZ2UtbG9jYXRpb24tZG9jdG9yLXJlc3VsdHMtUG9wVXAnLCAndXJsJzogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2gobG9jYXRpb25fdXJsKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29udGludWVMb2NhdGlvbigpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb250aW51ZUxvY2F0aW9uRG9jdG9yUmVzdWx0c1BvcFVwJywgJ0FjdGlvbic6ICdjb250aW51ZS1sb2NhdGlvbi1kb2N0b3ItcmVzdWx0cy1Qb3BVcCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NvbnRpbnVlLWxvY2F0aW9uLWRvY3Rvci1yZXN1bHRzLVBvcFVwJywgJ3VybCc6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIGlmIChwYXJzZWQubGF0ICYmIHBhcnNlZC5sb25nKSB7XG4gICAgICAgICAgICBfZ2V0bG9jYXRpb25Gcm9tTGF0TG9uZyhwYXJzZWQubGF0LCBwYXJzZWQubG9uZywgJ2xvY2FsaXR5JywgKGxvY2F0aW9uRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbkRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RMb2NhdGlvbihsb2NhdGlvbkRhdGEsICdhdXRvRGV0ZWN0JylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmci1sb2NhdGlvbi1wb3B1cC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1tZFwiPlNob3dpbmcge3RoaXMucHJvcHMuY291bnR9IHJlc3VsdHMgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogNzAwIH19Pnt0aGlzLnByb3BzLmNyaXRlcmlhU3RyaW5nID8gYGZvciAke3RoaXMucHJvcHMuY3JpdGVyaWFTdHJpbmd9YCA6ICcnfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNzAwIHRleHQtbWRcIj57dGhpcy5wcm9wcy5sb2NhdGlvbk5hbWUgPyBgIGluICR7dGhpcy5wcm9wcy5sb2NhdGlvbk5hbWV9YCA6ICcnfTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ydC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZ3LTUwMCBmci1wb3B1cC1jb250XCIgb25DbGljaz17KCkgPT4gdGhpcy5jb250aW51ZUxvY2F0aW9uKCl9PkNvbnRpbnVlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0yMCB0ZXh0LXhzXCI+T1I8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtcnQtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmdy01MDAgZnItcG9wdXAtY2hhbmdlXCIgb25DbGljaz17dGhpcy5nb1RvTG9jYXRpb24uYmluZCh0aGlzKX0+Q2hhbmdlIExvY2F0aW9uPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb25Qb3B1cFZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgc2VsZWN0TG9jYXRpb24gfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IExvY2F0aW9uUG9wdXBWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9sb2NhdGlvblBvcHVwL2luZGV4LmpzJ1xuXG5jbGFzcyBMb2NhdGlvblBvcHVwQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgICByb3V0ZXI6ICgpID0+IG51bGxcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMb2NhdGlvblBvcHVwVmlldyB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgbG9jYXRpb25UeXBlXG4gICAgfSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9PUERcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNlbGVjdGVkTG9jYXRpb24sXG4gICAgICAgIGxvY2F0aW9uVHlwZVxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VsZWN0TG9jYXRpb246IChsb2NhdGlvbiwgdHlwZSkgPT4gZGlzcGF0Y2goc2VsZWN0TG9jYXRpb24obG9jYXRpb24sIHR5cGUpKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShMb2NhdGlvblBvcHVwQ29udGFpbmVyKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=