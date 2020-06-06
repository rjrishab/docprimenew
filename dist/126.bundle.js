(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[126],{

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

/***/ "./dev/js/containers/commons/directBooking.js":
/*!****************************************************!*\
  !*** ./dev/js/containers/commons/directBooking.js ***!
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

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _Loader = __webpack_require__(/*! ../../components/commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var DirectBooking = function (_React$Component) {
    _inherits(DirectBooking, _React$Component);

    function DirectBooking(props) {
        _classCallCheck(this, DirectBooking);

        return _possibleConstructorReturn(this, (DirectBooking.__proto__ || Object.getPrototypeOf(DirectBooking)).call(this, props));
    }

    _createClass(DirectBooking, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var parsed = queryString.parse(this.props.location.search);
            var OTT = parsed.token;
            var user_id = parsed.user_id;
            var callbackurl = parsed.callbackurl;
            //Add UTM tags for building url
            try {
                if (parsed.utm_source && parsed.utm_source == 'OfflineAffiliate') {
                    var sessionId = Math.floor(Math.random() * 103) * 21 + 1050;
                    if (sessionStorage) {
                        sessionStorage.setItem('sessionIdVal', sessionId);
                    }
                    var spo_tags = {
                        utm_tags: {
                            utm_source: parsed.utm_source || '',
                            utm_term: parsed.utm_term || '',
                            utm_medium: parsed.utm_medium || '',
                            utm_campaign: parsed.utm_campaign || ''
                        },
                        time: new Date().getTime(),
                        currentSessionId: sessionId
                    };
                    this.props.setCommonUtmTags('spo', spo_tags);
                }
            } catch (e) {}

            if (OTT) {
                this.props.OTTLogin(OTT, user_id).then(function (resp) {
                    if (callbackurl) {
                        if (callbackurl == 'lab' || callbackurl == 'opd') {
                            window.location.href = '/#' + callbackurl;
                        } else {
                            if (parsed.test_ids) {
                                callbackurl += '&test_ids=' + parsed.test_ids;
                                _this2.props.history.push('/' + callbackurl);
                            } else {
                                callbackurl = callbackurl.replace(/\*/g, '&');
                                window.location.href = window.location.origin + '/' + callbackurl + ('?' + parsed.queryParams);
                            }
                        }
                    } else {
                        _this2.props.history.push('/cart?is_agent_booking=true');
                    }
                }).catch(function () {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Token Expired." });
                    _this2.props.history.push('/');
                });
            } else {
                this.props.history.push('/');
            }
        }
    }, {
        key: 'buildOPDTimeSlot',
        value: function buildOPDTimeSlot(data) {
            var timeObject = {};
            timeObject.time = data.time;
            timeObject.date = new Date(data.date);
            timeObject.selectedClinic = data.hospital;
            timeObject.selectedDoctor = data.doctor;

            return timeObject;
        }
    }, {
        key: 'buildLabTimeSlot',
        value: function buildLabTimeSlot(data) {
            var timeObject = {};
            timeObject.time = data.time;
            timeObject.date = new Date(data.date);

            return timeObject;
        }
    }, {
        key: 'setLabBooking',
        value: function setLabBooking(data) {
            this.props.clearAllTests();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = data.test_ids[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var curr_test = _step.value;

                    curr_test.extra_test = true;
                    curr_test.lab_id = data.lab;
                    this.props.toggleDiagnosisCriteria('test', curr_test, true);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this.props.selectProfile(data.profile);
            var time_slot = this.buildLabTimeSlot(data);
            this.props.selectLabTimeSLot(time_slot, false);
            this.props.history.push('/lab/' + data.lab + '/book');
        }
    }, {
        key: 'setOpdBooking',
        value: function setOpdBooking(data) {
            this.props.selectProfile(data.profile);
            var time_slot = this.buildOPDTimeSlot(data);
            this.props.selectOpdTimeSLot(time_slot, false);
            if (data.procedure_ids && data.procedure_ids.length) {
                this.props.saveProfileProcedures('', '', data.procedure_ids, true);
            }
            this.props.history.push('/opd/doctor/' + data.doctor + '/' + data.hospital + '/bookdetails');
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(_Loader2.default, null);
        }
    }]);

    return DirectBooking;
}(_react2.default.Component);

DirectBooking.contextTypes = {
    router: function router() {
        return null;
    }
};


var mapStateToProps = function mapStateToProps(state) {
    var _state$USER = state.USER,
        profiles = _state$USER.profiles,
        selectedProfile = _state$USER.selectedProfile;
    var selectedAddress = state.LAB_SEARCH.selectedAddress;


    return {
        profiles: profiles, selectedProfile: selectedProfile, selectedAddress: selectedAddress
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        OTTLogin: function OTTLogin(ott, user_id) {
            return dispatch((0, _index.OTTLogin)(ott, user_id));
        },
        fetchOrderById: function fetchOrderById(order_id) {
            return dispatch((0, _index.fetchOrderById)(order_id));
        },
        clearAllTests: function clearAllTests() {
            return dispatch((0, _index.clearAllTests)());
        },
        selectOpdTimeSLot: function selectOpdTimeSLot(slot, reschedule, appointmentId) {
            return dispatch((0, _index.selectOpdTimeSLot)(slot, reschedule, appointmentId));
        },
        selectLabTimeSLot: function selectLabTimeSLot(slot, reschedule) {
            return dispatch((0, _index.selectLabTimeSLot)(slot, reschedule));
        },
        selectProfile: function selectProfile(profile_id) {
            return dispatch((0, _index.selectProfile)(profile_id));
        },
        toggleDiagnosisCriteria: function toggleDiagnosisCriteria(type, criteria, forceAdd) {
            return dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria, forceAdd));
        },
        selectPickupAddress: function selectPickupAddress(address) {
            return dispatch((0, _index.selectPickupAddress)(address));
        },
        selectLabAppointmentType: function selectLabAppointmentType(type) {
            return dispatch((0, _index.selectLabAppointmentType)(type));
        },
        saveProfileProcedures: function saveProfileProcedures(doctor_id, clinic_id, selectedProcedures, forceAdd) {
            return dispatch((0, _index.saveProfileProcedures)(doctor_id, clinic_id, selectedProcedures, forceAdd));
        },
        setCommonUtmTags: function setCommonUtmTags(type, tag) {
            return dispatch((0, _index.setCommonUtmTags)(type, tag));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DirectBooking);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvY29tbW9ucy9kaXJlY3RCb29raW5nLmpzIl0sIm5hbWVzIjpbIkxvYWRlciIsInByb3BzIiwiY2xhc3NUeXBlIiwiaUZyYW1lUG9wdXAiLCJSZWFjdCIsIkNvbXBvbmVudCIsInF1ZXJ5U3RyaW5nIiwicmVxdWlyZSIsIkRpcmVjdEJvb2tpbmciLCJwYXJzZWQiLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwiT1RUIiwidG9rZW4iLCJ1c2VyX2lkIiwiY2FsbGJhY2t1cmwiLCJ1dG1fc291cmNlIiwic2Vzc2lvbklkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwic3BvX3RhZ3MiLCJ1dG1fdGFncyIsInV0bV90ZXJtIiwidXRtX21lZGl1bSIsInV0bV9jYW1wYWlnbiIsInRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsImN1cnJlbnRTZXNzaW9uSWQiLCJzZXRDb21tb25VdG1UYWdzIiwiZSIsIk9UVExvZ2luIiwidGhlbiIsInJlc3AiLCJ3aW5kb3ciLCJocmVmIiwidGVzdF9pZHMiLCJoaXN0b3J5IiwicHVzaCIsInJlcGxhY2UiLCJvcmlnaW4iLCJxdWVyeVBhcmFtcyIsImNhdGNoIiwiU25hY2tCYXIiLCJzaG93IiwicG9zIiwidGV4dCIsImRhdGEiLCJ0aW1lT2JqZWN0IiwiZGF0ZSIsInNlbGVjdGVkQ2xpbmljIiwiaG9zcGl0YWwiLCJzZWxlY3RlZERvY3RvciIsImRvY3RvciIsImNsZWFyQWxsVGVzdHMiLCJjdXJyX3Rlc3QiLCJleHRyYV90ZXN0IiwibGFiX2lkIiwibGFiIiwidG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEiLCJzZWxlY3RQcm9maWxlIiwicHJvZmlsZSIsInRpbWVfc2xvdCIsImJ1aWxkTGFiVGltZVNsb3QiLCJzZWxlY3RMYWJUaW1lU0xvdCIsImJ1aWxkT1BEVGltZVNsb3QiLCJzZWxlY3RPcGRUaW1lU0xvdCIsInByb2NlZHVyZV9pZHMiLCJsZW5ndGgiLCJzYXZlUHJvZmlsZVByb2NlZHVyZXMiLCJjb250ZXh0VHlwZXMiLCJyb3V0ZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIlVTRVIiLCJwcm9maWxlcyIsInNlbGVjdGVkUHJvZmlsZSIsInNlbGVjdGVkQWRkcmVzcyIsIkxBQl9TRUFSQ0giLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIm90dCIsImZldGNoT3JkZXJCeUlkIiwib3JkZXJfaWQiLCJzbG90IiwicmVzY2hlZHVsZSIsImFwcG9pbnRtZW50SWQiLCJwcm9maWxlX2lkIiwidHlwZSIsImNyaXRlcmlhIiwiZm9yY2VBZGQiLCJzZWxlY3RQaWNrdXBBZGRyZXNzIiwiYWRkcmVzcyIsInNlbGVjdExhYkFwcG9pbnRtZW50VHlwZSIsImRvY3Rvcl9pZCIsImNsaW5pY19pZCIsInNlbGVjdGVkUHJvY2VkdXJlcyIsInRhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFDRixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLCtHQUNUQSxLQURTO0FBRWxCOzs7O2lDQUVROztBQUVMLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFXLEtBQUtBLEtBQUwsQ0FBV0MsU0FBWCxJQUF3QixnQkFBeEM7QUFDSSx1REFBSyxXQUFVLFdBQWYsR0FESjtBQUdRLHFCQUFLRCxLQUFMLENBQVdFLFdBQVgsR0FDSTtBQUFBO0FBQUEsc0JBQUcsV0FBVSxlQUFiO0FBQUE7QUFBQSxpQkFESixHQUMrRTtBQUp2RixhQURKO0FBU0g7Ozs7RUFoQmdCQyxnQkFBTUMsUzs7a0JBbUJaTCxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQmY7Ozs7OztrQkFF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WUMsU0FBWixFQUF1QkMsa0JBQXZCLEVBQTJDTixRQUEzQztBQUFBLG1CQUF3RFYsU0FBUyxrQ0FBc0JjLFNBQXRCLEVBQWlDQyxTQUFqQyxFQUE0Q0Msa0JBQTVDLEVBQWdFTixRQUFoRSxDQUFULENBQXhEO0FBQUEsU0FWcEI7QUFXSDdELDBCQUFrQiwwQkFBQzJELElBQUQsRUFBT1MsR0FBUDtBQUFBLG1CQUFlakIsU0FBUyw2QkFBaUJRLElBQWpCLEVBQXVCUyxHQUF2QixDQUFULENBQWY7QUFBQTtBQVhmLEtBQVA7QUFhSCxDQWREOztrQkFpQmUseUJBQVF6QixlQUFSLEVBQXlCTyxrQkFBekIsRUFBNkMzRSxhQUE3QyxDIiwiZmlsZSI6IjEyNi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBMb2FkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NUeXBlIHx8IFwibG9hZGVyQ2lyY3VsYXJcIn0gPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHAtbG9hZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlGcmFtZVBvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMTBcIj5SZWRpcmVjdGluZyB5b3UgdG8gUGhhcm1lYXN5IHdlYnNpdGUuLi48L3A+IDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlclxuIiwiaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5cbmltcG9ydCB7IE9UVExvZ2luLCBmZXRjaE9yZGVyQnlJZCwgZ2V0VXBjb21pbmdBcHBvaW50bWVudHMsIGZldGNoSGVhdGxoVGlwLCBmZXRjaE9yZGVySGlzdG9yeSwgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEsIHNlbGVjdFByb2ZpbGUsIHNlbGVjdExhYlRpbWVTTG90LCBzZWxlY3RPcGRUaW1lU0xvdCwgY2xlYXJBbGxUZXN0cywgc2VsZWN0UGlja3VwQWRkcmVzcywgc2VsZWN0TGFiQXBwb2ludG1lbnRUeXBlLCBzYXZlUHJvZmlsZVByb2NlZHVyZXMsIHNldENvbW1vblV0bVRhZ3MgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvTG9hZGVyJ1xuXG5jbGFzcyBEaXJlY3RCb29raW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgICByb3V0ZXI6ICgpID0+IG51bGxcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCBPVFQgPSBwYXJzZWQudG9rZW5cbiAgICAgICAgbGV0IHVzZXJfaWQgPSBwYXJzZWQudXNlcl9pZFxuICAgICAgICBsZXQgY2FsbGJhY2t1cmwgPSBwYXJzZWQuY2FsbGJhY2t1cmwgXG4gICAgICAgIC8vQWRkIFVUTSB0YWdzIGZvciBidWlsZGluZyB1cmxcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgaWYocGFyc2VkLnV0bV9zb3VyY2UgJiYgcGFyc2VkLnV0bV9zb3VyY2U9PSdPZmZsaW5lQWZmaWxpYXRlJyl7XG4gICAgICAgICAgICAgICAgbGV0IHNlc3Npb25JZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMykqMjEgKyAxMDUwXG4gICAgICAgICAgICAgICAgaWYoc2Vzc2lvblN0b3JhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnc2Vzc2lvbklkVmFsJyxzZXNzaW9uSWQpICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBzcG9fdGFncyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdXRtX3RhZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0bV9zb3VyY2U6IHBhcnNlZC51dG1fc291cmNlfHwnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0bV90ZXJtOiBwYXJzZWQudXRtX3Rlcm18fCcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXRtX21lZGl1bTogcGFyc2VkLnV0bV9tZWRpdW18fCcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXRtX2NhbXBhaWduOiBwYXJzZWQudXRtX2NhbXBhaWdufHwnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFNlc3Npb25JZDogc2Vzc2lvbklkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0Q29tbW9uVXRtVGFncygnc3BvJywgc3BvX3RhZ3MpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1jYXRjaChlKSB7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChPVFQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuT1RUTG9naW4oT1RULHVzZXJfaWQpLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBpZihjYWxsYmFja3VybCl7XG4gICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrdXJsID09ICdsYWInIHx8IGNhbGxiYWNrdXJsID09ICdvcGQnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8jJyArIGNhbGxiYWNrdXJsXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYocGFyc2VkLnRlc3RfaWRzKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3VybCs9JyZ0ZXN0X2lkcz0nK3BhcnNlZC50ZXN0X2lkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJytjYWxsYmFja3VybClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrdXJsID0gY2FsbGJhY2t1cmwucmVwbGFjZSgvXFwqL2csJyYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4rJy8nK2NhbGxiYWNrdXJsK2A/JHtwYXJzZWQucXVlcnlQYXJhbXN9YFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9jYXJ0P2lzX2FnZW50X2Jvb2tpbmc9dHJ1ZScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJUb2tlbiBFeHBpcmVkLlwiIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJylcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJylcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgYnVpbGRPUERUaW1lU2xvdChkYXRhKSB7XG4gICAgICAgIGxldCB0aW1lT2JqZWN0ID0ge31cbiAgICAgICAgdGltZU9iamVjdC50aW1lID0gZGF0YS50aW1lXG4gICAgICAgIHRpbWVPYmplY3QuZGF0ZSA9IG5ldyBEYXRlKGRhdGEuZGF0ZSlcbiAgICAgICAgdGltZU9iamVjdC5zZWxlY3RlZENsaW5pYyA9IGRhdGEuaG9zcGl0YWxcbiAgICAgICAgdGltZU9iamVjdC5zZWxlY3RlZERvY3RvciA9IGRhdGEuZG9jdG9yXG5cbiAgICAgICAgcmV0dXJuIHRpbWVPYmplY3RcbiAgICB9XG5cblxuICAgIGJ1aWxkTGFiVGltZVNsb3QoZGF0YSkge1xuICAgICAgICBsZXQgdGltZU9iamVjdCA9IHt9XG4gICAgICAgIHRpbWVPYmplY3QudGltZSA9IGRhdGEudGltZVxuICAgICAgICB0aW1lT2JqZWN0LmRhdGUgPSBuZXcgRGF0ZShkYXRhLmRhdGUpXG5cbiAgICAgICAgcmV0dXJuIHRpbWVPYmplY3RcbiAgICB9XG5cbiAgICBzZXRMYWJCb29raW5nKGRhdGEpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5jbGVhckFsbFRlc3RzKClcbiAgICAgICAgZm9yIChsZXQgY3Vycl90ZXN0IG9mIGRhdGEudGVzdF9pZHMpIHtcbiAgICAgICAgICAgIGN1cnJfdGVzdC5leHRyYV90ZXN0ID0gdHJ1ZVxuICAgICAgICAgICAgY3Vycl90ZXN0LmxhYl9pZCA9IGRhdGEubGFiXG4gICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKCd0ZXN0JywgY3Vycl90ZXN0LCB0cnVlKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RQcm9maWxlKGRhdGEucHJvZmlsZSlcbiAgICAgICAgbGV0IHRpbWVfc2xvdCA9IHRoaXMuYnVpbGRMYWJUaW1lU2xvdChkYXRhKVxuICAgICAgICB0aGlzLnByb3BzLnNlbGVjdExhYlRpbWVTTG90KHRpbWVfc2xvdCwgZmFsc2UpXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvbGFiLyR7ZGF0YS5sYWJ9L2Jvb2tgKVxuICAgIH1cblxuICAgIHNldE9wZEJvb2tpbmcoZGF0YSkge1xuICAgICAgICB0aGlzLnByb3BzLnNlbGVjdFByb2ZpbGUoZGF0YS5wcm9maWxlKVxuICAgICAgICBsZXQgdGltZV9zbG90ID0gdGhpcy5idWlsZE9QRFRpbWVTbG90KGRhdGEpXG4gICAgICAgIHRoaXMucHJvcHMuc2VsZWN0T3BkVGltZVNMb3QodGltZV9zbG90LCBmYWxzZSlcbiAgICAgICAgaWYgKGRhdGEucHJvY2VkdXJlX2lkcyAmJiBkYXRhLnByb2NlZHVyZV9pZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNhdmVQcm9maWxlUHJvY2VkdXJlcygnJywgJycsIGRhdGEucHJvY2VkdXJlX2lkcywgdHJ1ZSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL29wZC9kb2N0b3IvJHtkYXRhLmRvY3Rvcn0vJHtkYXRhLmhvc3BpdGFsfS9ib29rZGV0YWlsc2ApXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TG9hZGVyIC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICBsZXQgeyBwcm9maWxlcywgc2VsZWN0ZWRQcm9maWxlIH0gPSBzdGF0ZS5VU0VSXG4gICAgbGV0IHsgc2VsZWN0ZWRBZGRyZXNzIH0gPSBzdGF0ZS5MQUJfU0VBUkNIXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9maWxlcywgc2VsZWN0ZWRQcm9maWxlLCBzZWxlY3RlZEFkZHJlc3NcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIE9UVExvZ2luOiAob3R0LHVzZXJfaWQpID0+IGRpc3BhdGNoKE9UVExvZ2luKG90dCx1c2VyX2lkKSksXG4gICAgICAgIGZldGNoT3JkZXJCeUlkOiAob3JkZXJfaWQpID0+IGRpc3BhdGNoKGZldGNoT3JkZXJCeUlkKG9yZGVyX2lkKSksXG4gICAgICAgIGNsZWFyQWxsVGVzdHM6ICgpID0+IGRpc3BhdGNoKGNsZWFyQWxsVGVzdHMoKSksXG4gICAgICAgIHNlbGVjdE9wZFRpbWVTTG90OiAoc2xvdCwgcmVzY2hlZHVsZSwgYXBwb2ludG1lbnRJZCkgPT4gZGlzcGF0Y2goc2VsZWN0T3BkVGltZVNMb3Qoc2xvdCwgcmVzY2hlZHVsZSwgYXBwb2ludG1lbnRJZCkpLFxuICAgICAgICBzZWxlY3RMYWJUaW1lU0xvdDogKHNsb3QsIHJlc2NoZWR1bGUpID0+IGRpc3BhdGNoKHNlbGVjdExhYlRpbWVTTG90KHNsb3QsIHJlc2NoZWR1bGUpKSxcbiAgICAgICAgc2VsZWN0UHJvZmlsZTogKHByb2ZpbGVfaWQpID0+IGRpc3BhdGNoKHNlbGVjdFByb2ZpbGUocHJvZmlsZV9pZCkpLFxuICAgICAgICB0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYTogKHR5cGUsIGNyaXRlcmlhLCBmb3JjZUFkZCkgPT4gZGlzcGF0Y2godG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkKSksXG4gICAgICAgIHNlbGVjdFBpY2t1cEFkZHJlc3M6IChhZGRyZXNzKSA9PiBkaXNwYXRjaChzZWxlY3RQaWNrdXBBZGRyZXNzKGFkZHJlc3MpKSxcbiAgICAgICAgc2VsZWN0TGFiQXBwb2ludG1lbnRUeXBlOiAodHlwZSkgPT4gZGlzcGF0Y2goc2VsZWN0TGFiQXBwb2ludG1lbnRUeXBlKHR5cGUpKSxcbiAgICAgICAgc2F2ZVByb2ZpbGVQcm9jZWR1cmVzOiAoZG9jdG9yX2lkLCBjbGluaWNfaWQsIHNlbGVjdGVkUHJvY2VkdXJlcywgZm9yY2VBZGQpID0+IGRpc3BhdGNoKHNhdmVQcm9maWxlUHJvY2VkdXJlcyhkb2N0b3JfaWQsIGNsaW5pY19pZCwgc2VsZWN0ZWRQcm9jZWR1cmVzLCBmb3JjZUFkZCkpLFxuICAgICAgICBzZXRDb21tb25VdG1UYWdzOiAodHlwZSwgdGFnKSA9PiBkaXNwYXRjaChzZXRDb21tb25VdG1UYWdzKHR5cGUsIHRhZykpXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKERpcmVjdEJvb2tpbmcpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==