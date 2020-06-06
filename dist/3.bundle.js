(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./dev/js/components/commons/RightBar/RightBar.js":
/*!********************************************************!*\
  !*** ./dev/js/components/commons/RightBar/RightBar.js ***!
  \********************************************************/
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

var _upcoming = __webpack_require__(/*! ./upcoming.js */ "./dev/js/components/commons/RightBar/upcoming.js");

var _upcoming2 = _interopRequireDefault(_upcoming);

var _continue = __webpack_require__(/*! ./continue.js */ "./dev/js/components/commons/RightBar/continue.js");

var _continue2 = _interopRequireDefault(_continue);

var _healthTip = __webpack_require__(/*! ./healthTip.js */ "./dev/js/components/commons/RightBar/healthTip.js");

var _healthTip2 = _interopRequireDefault(_healthTip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RightBar = function (_React$Component) {
    _inherits(RightBar, _React$Component);

    function RightBar(props) {
        _classCallCheck(this, RightBar);

        return _possibleConstructorReturn(this, (RightBar.__proto__ || Object.getPrototypeOf(RightBar)).call(this, props));
    }

    _createClass(RightBar, [{
        key: 'openAppointment',
        value: function openAppointment(type, id) {
            this.props.history.push('/' + type + '/appointment/' + id);
        }
    }, {
        key: 'openBookingSummary',
        value: function openBookingSummary(data, e) {
            var _this2 = this;

            this.props.selectProfile(data.profile);
            if (data.type == 'lab' || data.lab) {
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
                    //always clear selected time at lab profile
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

                var slot = { time: {} };
                this.props.selectLabTimeSLot(slot, false);
                setTimeout(function () {
                    _this2.props.history.push('/lab/' + data.lab + '/book');
                }, 100);
            } else {
                //always clear selected time at doctor profile
                var _slot = { time: {} };
                this.props.selectOpdTimeSLot(_slot, false);
                this.props.history.push('/opd/doctor/' + data.doctor + '/' + data.hospital + '/bookdetails');
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var profileData = this.props.profiles[this.props.selectedProfile];

            return _react2.default.createElement(
                'div',
                { className: 'col-lg-3 right-section d-none d-lg-block' },
                _react2.default.createElement(
                    'div',
                    { className: "sticky-div" + (!this.props.hideStickyTemp ? " sticky-div-temp" : "") },
                    _react2.default.createElement(_healthTip2.default, { healthTips: this.props.healthTips }),
                    profileData ? this.props.userUpcomingAppointments.map(function (app, i) {
                        return _react2.default.createElement(_upcoming2.default, _extends({ key: i }, app, { openAppointment: _this3.openAppointment.bind(_this3) }));
                    }) : "",
                    profileData ? this.props.orderHistory.map(function (odHistory, i) {
                        return _react2.default.createElement(_continue2.default, _extends({ key: i }, odHistory, { openBookingSummary: _this3.openBookingSummary.bind(_this3, odHistory) }));
                    }) : ""
                )
            );
        }
    }]);

    return RightBar;
}(_react2.default.Component);

exports.default = RightBar;

/***/ }),

/***/ "./dev/js/components/commons/RightBar/continue.js":
/*!********************************************************!*\
  !*** ./dev/js/components/commons/RightBar/continue.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _initialsPicture = __webpack_require__(/*! ../initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var doctor_name = _ref.doctor_name,
        lab_name = _ref.lab_name,
        hospital_name = _ref.hospital_name,
        openBookingSummary = _ref.openBookingSummary,
        doctor_thumbnail = _ref.doctor_thumbnail,
        lab_thumbnail = _ref.lab_thumbnail,
        test_ids = _ref.test_ids;

    return _react2.default.createElement(
        'a',
        { href: 'javascript:;' },
        _react2.default.createElement(
            'div',
            { className: 'right-div-widget health-widget', onClick: function onClick() {
                    openBookingSummary();
                }, style: { marginBottom: 10 } },
            _react2.default.createElement(
                'div',
                { className: 'appointment-head-div' },
                _react2.default.createElement(
                    'span',
                    { className: 'appointment-head' },
                    'Continue Booking ',
                    lab_name ? "Lab" : "Doctor"
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'booking-details-div' },
                _react2.default.createElement(
                    'div',
                    { className: 'doc-img-div' },
                    _react2.default.createElement(
                        _initialsPicture2.default,
                        { name: lab_name || doctor_name, has_image: !!(doctor_thumbnail || lab_thumbnail), className: 'initialsPicture-cb' },
                        _react2.default.createElement('img', { src: doctor_thumbnail || lab_thumbnail, style: { width: 30, height: 30, borderRadius: '100%' }, className: 'doc-img' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'doc-desc-div' },
                    _react2.default.createElement(
                        'p',
                        { className: 'doc-name' },
                        doctor_name || lab_name
                    ),
                    hospital_name ? _react2.default.createElement(
                        'p',
                        { className: 'hospital-name' },
                        hospital_name
                    ) : "",
                    test_ids && test_ids.length ? test_ids.reduce(function (str, t, i) {
                        str += t.name + ', ';
                        return str;
                    }, "") : ""
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'continue-div' },
                _react2.default.createElement(
                    'span',
                    { className: 'continue-text' },
                    'Continue'
                ),
                _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/right-arrow.svg", className: 'rt-arrow-icon' })
            )
        )
    );
};

/***/ }),

/***/ "./dev/js/components/commons/RightBar/healthTip.js":
/*!*********************************************************!*\
  !*** ./dev/js/components/commons/RightBar/healthTip.js ***!
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HealthTip = function (_React$Component) {
    _inherits(HealthTip, _React$Component);

    function HealthTip(props) {
        _classCallCheck(this, HealthTip);

        var _this = _possibleConstructorReturn(this, (HealthTip.__proto__ || Object.getPrototypeOf(HealthTip)).call(this, props));

        _this.state = {
            selected: 0
        };
        return _this;
    }

    _createClass(HealthTip, [{
        key: "changeTip",
        value: function changeTip() {
            var back = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (back && this.state.selected > 0) {
                this.setState({ selected: this.state.selected - 1 });
            } else if (!back && this.state.selected < this.props.healthTips.length - 1) {
                this.setState({ selected: this.state.selected + 1 });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var selected = this.state.selected;
            var healthTips = this.props.healthTips;


            return _react2.default.createElement(
                "div",
                { className: "right-div-widget health-widget mrb-10 " + this.props.customClass },
                _react2.default.createElement(
                    "div",
                    { className: "appointment-head-div" },
                    _react2.default.createElement("img", { src: "/assets" + "/img/customer-icons/health-tip.jpg" }),
                    _react2.default.createElement(
                        "span",
                        { className: "appointment-head" },
                        "Health Tip of the Day"
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "tip-desc-div tip-desc-height" },
                    _react2.default.createElement(
                        "p",
                        { className: "tip-desc" },
                        healthTips && healthTips[selected] ? healthTips[selected].text : ""
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "tip-indicators-div mrt-20" },
                    _react2.default.createElement("img", { onClick: this.changeTip.bind(this, true), src: "/assets" + "/img/icons/forma-1-copy-3.svg" }),
                    _react2.default.createElement(
                        "div",
                        { className: "circleIndicators" },
                        this.props.healthTips.map(function (ht, i) {
                            return _react2.default.createElement("span", { key: i, className: "ci" + (i == selected ? "selected" : "") });
                        })
                    ),
                    _react2.default.createElement("img", { onClick: this.changeTip.bind(this, false), src: "/assets" + "/img/icons/forma-1-copy-7.svg" })
                )
            );
        }
    }]);

    return HealthTip;
}(_react2.default.Component);

exports.default = HealthTip;

/***/ }),

/***/ "./dev/js/components/commons/RightBar/index.js":
/*!*****************************************************!*\
  !*** ./dev/js/components/commons/RightBar/index.js ***!
  \*****************************************************/
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

var _index = __webpack_require__(/*! ../../../actions/index.js */ "./dev/js/actions/index.js");

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _RightBar = __webpack_require__(/*! ./RightBar */ "./dev/js/components/commons/RightBar/RightBar.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _ChatPanel = __webpack_require__(/*! ../ChatPanel */ "./dev/js/components/commons/ChatPanel/index.js");

var _ChatPanel2 = _interopRequireDefault(_ChatPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RightBar = function (_React$Component) {
    _inherits(RightBar, _React$Component);

    function RightBar(props) {
        _classCallCheck(this, RightBar);

        return _possibleConstructorReturn(this, (RightBar.__proto__ || Object.getPrototypeOf(RightBar)).call(this, props));
    }

    _createClass(RightBar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // this.props.fetchHeatlhTip()
            // if (STORAGE.checkAuth()) {
            //     this.props.getUpcomingAppointments()
            //     this.props.fetchOrderHistory()
            // }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_ChatPanel2.default, this.props)
            // <RightBarView {...this.props} />
            ;
        }
    }]);

    return RightBar;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    var passedProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _state$USER = state.USER,
        profiles = _state$USER.profiles,
        selectedProfile = _state$USER.selectedProfile,
        userUpcomingAppointments = _state$USER.userUpcomingAppointments,
        healthTips = _state$USER.healthTips,
        orderHistory = _state$USER.orderHistory;

    return {
        profiles: profiles, selectedProfile: selectedProfile, userUpcomingAppointments: userUpcomingAppointments, healthTips: healthTips, orderHistory: orderHistory, passedProps: passedProps
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        clearAllTests: function clearAllTests() {
            return dispatch((0, _index.clearAllTests)());
        },
        selectOpdTimeSLot: function selectOpdTimeSLot(slot, reschedule, appointmentId) {
            return dispatch((0, _index.selectOpdTimeSLot)(slot, reschedule, appointmentId));
        },
        selectLabTimeSLot: function selectLabTimeSLot(slot, reschedule) {
            return dispatch((0, _index.selectLabTimeSLot)(slot, reschedule));
        },
        getUpcomingAppointments: function getUpcomingAppointments() {
            return dispatch((0, _index.getUpcomingAppointments)());
        },
        fetchHeatlhTip: function fetchHeatlhTip() {
            return dispatch((0, _index.fetchHeatlhTip)());
        },
        fetchOrderHistory: function fetchOrderHistory() {
            return dispatch((0, _index.fetchOrderHistory)());
        },
        selectProfile: function selectProfile(profile_id) {
            return dispatch((0, _index.selectProfile)(profile_id));
        },
        toggleDiagnosisCriteria: function toggleDiagnosisCriteria(type, criteria, forceAdd) {
            return dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria, forceAdd));
        }
    };
};

// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RightBar))
exports.default = RightBar;

/***/ }),

/***/ "./dev/js/components/commons/RightBar/upcoming.js":
/*!********************************************************!*\
  !*** ./dev/js/components/commons/RightBar/upcoming.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var id = _ref.id,
        type = _ref.type,
        patient_name = _ref.patient_name,
        doctor_name = _ref.doctor_name,
        time_slot_start = _ref.time_slot_start,
        lab_name = _ref.lab_name,
        openAppointment = _ref.openAppointment;

    var app_time = new Date(time_slot_start).toLocaleDateString();
    var name = "Dr. " + doctor_name;
    if (lab_name) {
        name = "Lab " + lab_name;
    }
    return _react2.default.createElement(
        "a",
        { href: "javascript:;" },
        _react2.default.createElement(
            "div",
            { className: "right-div-widget", style: { marginBottom: 10 }, onClick: function onClick() {
                    var app_type = type == 'doctor' ? 'opd' : 'lab';
                    openAppointment(app_type, id);
                } },
            _react2.default.createElement(
                "div",
                { className: "appointment-head-div" },
                _react2.default.createElement("img", { src: "/assets" + "/img/customer-icons/appointment.svg", className: "appointment-img" }),
                _react2.default.createElement(
                    "span",
                    { className: "appointment-head" },
                    "Upcoming Appointment"
                )
            ),
            _react2.default.createElement(
                "div",
                { className: "appointment-details-div" },
                _react2.default.createElement(
                    "p",
                    null,
                    "Appointment for ",
                    patient_name
                ),
                _react2.default.createElement(
                    "p",
                    { className: "appointment-date" },
                    "On ",
                    app_time.toString()
                ),
                _react2.default.createElement(
                    "p",
                    { className: "appointment-doc" },
                    "With ",
                    name
                )
            )
        )
    );
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL1JpZ2h0QmFyL1JpZ2h0QmFyLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvUmlnaHRCYXIvY29udGludWUuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9SaWdodEJhci9oZWFsdGhUaXAuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9SaWdodEJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL1JpZ2h0QmFyL3VwY29taW5nLmpzIl0sIm5hbWVzIjpbIlJpZ2h0QmFyIiwicHJvcHMiLCJ0eXBlIiwiaWQiLCJoaXN0b3J5IiwicHVzaCIsImRhdGEiLCJlIiwic2VsZWN0UHJvZmlsZSIsInByb2ZpbGUiLCJsYWIiLCJjbGVhckFsbFRlc3RzIiwidGVzdF9pZHMiLCJjdXJyX3Rlc3QiLCJleHRyYV90ZXN0IiwibGFiX2lkIiwidG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEiLCJzbG90IiwidGltZSIsInNlbGVjdExhYlRpbWVTTG90Iiwic2V0VGltZW91dCIsInNlbGVjdE9wZFRpbWVTTG90IiwiZG9jdG9yIiwiaG9zcGl0YWwiLCJwcm9maWxlRGF0YSIsInByb2ZpbGVzIiwic2VsZWN0ZWRQcm9maWxlIiwiaGlkZVN0aWNreVRlbXAiLCJoZWFsdGhUaXBzIiwidXNlclVwY29taW5nQXBwb2ludG1lbnRzIiwibWFwIiwiYXBwIiwiaSIsIm9wZW5BcHBvaW50bWVudCIsImJpbmQiLCJvcmRlckhpc3RvcnkiLCJvZEhpc3RvcnkiLCJvcGVuQm9va2luZ1N1bW1hcnkiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRvY3Rvcl9uYW1lIiwibGFiX25hbWUiLCJob3NwaXRhbF9uYW1lIiwiZG9jdG9yX3RodW1ibmFpbCIsImxhYl90aHVtYm5haWwiLCJtYXJnaW5Cb3R0b20iLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImxlbmd0aCIsInJlZHVjZSIsInN0ciIsInQiLCJuYW1lIiwiQVNTRVRTX0JBU0VfVVJMIiwiSGVhbHRoVGlwIiwic3RhdGUiLCJzZWxlY3RlZCIsImJhY2siLCJzZXRTdGF0ZSIsImN1c3RvbUNsYXNzIiwidGV4dCIsImNoYW5nZVRpcCIsImh0IiwibWFwU3RhdGVUb1Byb3BzIiwicGFzc2VkUHJvcHMiLCJVU0VSIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJyZXNjaGVkdWxlIiwiYXBwb2ludG1lbnRJZCIsImdldFVwY29taW5nQXBwb2ludG1lbnRzIiwiZmV0Y2hIZWF0bGhUaXAiLCJmZXRjaE9yZGVySGlzdG9yeSIsInByb2ZpbGVfaWQiLCJjcml0ZXJpYSIsImZvcmNlQWRkIiwicGF0aWVudF9uYW1lIiwidGltZV9zbG90X3N0YXJ0IiwiYXBwX3RpbWUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiYXBwX3R5cGUiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLFE7OztBQUNGLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsbUhBQ1RBLEtBRFM7QUFFbEI7Ozs7d0NBRWVDLEksRUFBTUMsRSxFQUFJO0FBQ3RCLGlCQUFLRixLQUFMLENBQVdHLE9BQVgsQ0FBbUJDLElBQW5CLE9BQTRCSCxJQUE1QixxQkFBZ0RDLEVBQWhEO0FBQ0g7OzsyQ0FFa0JHLEksRUFBTUMsQyxFQUFHO0FBQUE7O0FBQ3hCLGlCQUFLTixLQUFMLENBQVdPLGFBQVgsQ0FBeUJGLEtBQUtHLE9BQTlCO0FBQ0EsZ0JBQUlILEtBQUtKLElBQUwsSUFBYSxLQUFiLElBQXNCSSxLQUFLSSxHQUEvQixFQUFvQztBQUNoQyxxQkFBS1QsS0FBTCxDQUFXVSxhQUFYO0FBRGdDO0FBQUE7QUFBQTs7QUFBQTtBQUVoQyx5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LHFDQUE1QixFQUFtRSxXQUFVLGlCQUE3RSxHQURKO0FBRUk7QUFBQTtBQUFBLHNCQUFNLFdBQVUsa0JBQWhCO0FBQUE7QUFBQTtBQUZKLGFBSko7QUFRSTtBQUFBO0FBQUEsa0JBQUssV0FBVSx5QkFBZjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQW9CdUI7QUFBcEIsaUJBREo7QUFFSTtBQUFBO0FBQUEsc0JBQUcsV0FBVSxrQkFBYjtBQUFBO0FBQW9DRSw2QkFBU0ksUUFBVDtBQUFwQyxpQkFGSjtBQUdJO0FBQUE7QUFBQSxzQkFBRyxXQUFVLGlCQUFiO0FBQUE7QUFBcUM5QjtBQUFyQztBQUhKO0FBUko7QUFERyxLQUFQO0FBZ0JILEMiLCJmaWxlIjoiMy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgVXBjb21pbmcgZnJvbSAnLi91cGNvbWluZy5qcydcbmltcG9ydCBDb250aW51ZUJvb2tpbmcgZnJvbSAnLi9jb250aW51ZS5qcydcbmltcG9ydCBIZWFsdGhUaXAgZnJvbSAnLi9oZWFsdGhUaXAuanMnXG5cbmNsYXNzIFJpZ2h0QmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICBvcGVuQXBwb2ludG1lbnQodHlwZSwgaWQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC8ke3R5cGV9L2FwcG9pbnRtZW50LyR7aWR9YClcbiAgICB9XG5cbiAgICBvcGVuQm9va2luZ1N1bW1hcnkoZGF0YSwgZSkge1xuICAgICAgICB0aGlzLnByb3BzLnNlbGVjdFByb2ZpbGUoZGF0YS5wcm9maWxlKVxuICAgICAgICBpZiAoZGF0YS50eXBlID09ICdsYWInIHx8IGRhdGEubGFiKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNsZWFyQWxsVGVzdHMoKVxuICAgICAgICAgICAgZm9yIChsZXQgY3Vycl90ZXN0IG9mIGRhdGEudGVzdF9pZHMpIHtcbiAgICAgICAgICAgICAgICBjdXJyX3Rlc3QuZXh0cmFfdGVzdCA9IHRydWVcbiAgICAgICAgICAgICAgICBjdXJyX3Rlc3QubGFiX2lkID0gZGF0YS5sYWJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKCd0ZXN0JywgY3Vycl90ZXN0LCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9hbHdheXMgY2xlYXIgc2VsZWN0ZWQgdGltZSBhdCBsYWIgcHJvZmlsZVxuICAgICAgICAgICAgbGV0IHNsb3QgPSB7IHRpbWU6IHt9IH1cbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0TGFiVGltZVNMb3Qoc2xvdCwgZmFsc2UpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2xhYi8ke2RhdGEubGFifS9ib29rYClcbiAgICAgICAgICAgIH0sIDEwMClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vYWx3YXlzIGNsZWFyIHNlbGVjdGVkIHRpbWUgYXQgZG9jdG9yIHByb2ZpbGVcbiAgICAgICAgICAgIGxldCBzbG90ID0geyB0aW1lOiB7fSB9XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdE9wZFRpbWVTTG90KHNsb3QsIGZhbHNlKVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9vcGQvZG9jdG9yLyR7ZGF0YS5kb2N0b3J9LyR7ZGF0YS5ob3NwaXRhbH0vYm9va2RldGFpbHNgKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCBwcm9maWxlRGF0YSA9IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgcmlnaHQtc2VjdGlvbiBkLW5vbmUgZC1sZy1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInN0aWNreS1kaXZcIiArICghdGhpcy5wcm9wcy5oaWRlU3RpY2t5VGVtcCA/IFwiIHN0aWNreS1kaXYtdGVtcFwiIDogXCJcIil9PlxuICAgICAgICAgICAgICAgICAgICA8SGVhbHRoVGlwIGhlYWx0aFRpcHM9e3RoaXMucHJvcHMuaGVhbHRoVGlwc30gLz5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZURhdGEgPyB0aGlzLnByb3BzLnVzZXJVcGNvbWluZ0FwcG9pbnRtZW50cy5tYXAoKGFwcCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8VXBjb21pbmcga2V5PXtpfSB7Li4uYXBwfSBvcGVuQXBwb2ludG1lbnQ9e3RoaXMub3BlbkFwcG9pbnRtZW50LmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVEYXRhID8gdGhpcy5wcm9wcy5vcmRlckhpc3RvcnkubWFwKChvZEhpc3RvcnksIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvbnRpbnVlQm9va2luZyBrZXk9e2l9IHsuLi5vZEhpc3Rvcnl9IG9wZW5Cb29raW5nU3VtbWFyeT17dGhpcy5vcGVuQm9va2luZ1N1bW1hcnkuYmluZCh0aGlzLCBvZEhpc3RvcnkpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmlnaHRCYXJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5pdGlhbHNQaWN0dXJlIGZyb20gJy4uL2luaXRpYWxzUGljdHVyZSdcblxuZXhwb3J0IGRlZmF1bHQgKHsgZG9jdG9yX25hbWUsIGxhYl9uYW1lLCBob3NwaXRhbF9uYW1lLCBvcGVuQm9va2luZ1N1bW1hcnksIGRvY3Rvcl90aHVtYm5haWwsIGxhYl90aHVtYm5haWwsIHRlc3RfaWRzIH0pID0+IHtcbiAgICByZXR1cm4gPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LWRpdi13aWRnZXQgaGVhbHRoLXdpZGdldFwiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIG9wZW5Cb29raW5nU3VtbWFyeSgpXG4gICAgICAgIH19IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAgfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcG9pbnRtZW50LWhlYWQtZGl2XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXBwb2ludG1lbnQtaGVhZFwiPkNvbnRpbnVlIEJvb2tpbmcge2xhYl9uYW1lID8gXCJMYWJcIiA6IFwiRG9jdG9yXCJ9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmctZGV0YWlscy1kaXZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvYy1pbWctZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbml0aWFsc1BpY3R1cmUgbmFtZT17KGxhYl9uYW1lIHx8IGRvY3Rvcl9uYW1lKX0gaGFzX2ltYWdlPXshIShkb2N0b3JfdGh1bWJuYWlsIHx8IGxhYl90aHVtYm5haWwpfSBjbGFzc05hbWU9XCJpbml0aWFsc1BpY3R1cmUtY2JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkb2N0b3JfdGh1bWJuYWlsIHx8IGxhYl90aHVtYm5haWx9IHN0eWxlPXt7IHdpZHRoOiAzMCwgaGVpZ2h0OiAzMCwgYm9yZGVyUmFkaXVzOiAnMTAwJScgfX0gY2xhc3NOYW1lPVwiZG9jLWltZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvSW5pdGlhbHNQaWN0dXJlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jLWRlc2MtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRvYy1uYW1lXCI+e2RvY3Rvcl9uYW1lIHx8IGxhYl9uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaG9zcGl0YWxfbmFtZSA/IDxwIGNsYXNzTmFtZT1cImhvc3BpdGFsLW5hbWVcIj57aG9zcGl0YWxfbmFtZX08L3A+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICh0ZXN0X2lkcyAmJiB0ZXN0X2lkcy5sZW5ndGgpID8gdGVzdF9pZHMucmVkdWNlKChzdHIsIHQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHIgKz0gYCR7dC5uYW1lfSwgYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIFwiXCIpIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJib29raW5nLXRpbWVcIj4xOHRoIEFwcmlsIHwgMzozMCBQTTwvcD4gKi99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGludWUtZGl2XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGludWUtdGV4dFwiPkNvbnRpbnVlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvcmlnaHQtYXJyb3cuc3ZnXCJ9IGNsYXNzTmFtZT1cInJ0LWFycm93LWljb25cIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvYT5cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBIZWFsdGhUaXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWQ6IDBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZVRpcChiYWNrID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGJhY2sgJiYgdGhpcy5zdGF0ZS5zZWxlY3RlZCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZDogdGhpcy5zdGF0ZS5zZWxlY3RlZCAtIDEgfSlcbiAgICAgICAgfSBlbHNlIGlmICghYmFjayAmJiB0aGlzLnN0YXRlLnNlbGVjdGVkIDwgdGhpcy5wcm9wcy5oZWFsdGhUaXBzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZDogdGhpcy5zdGF0ZS5zZWxlY3RlZCArIDEgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgeyBzZWxlY3RlZCB9ID0gdGhpcy5zdGF0ZVxuICAgICAgICBsZXQgeyBoZWFsdGhUaXBzIH0gPSB0aGlzLnByb3BzXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2ByaWdodC1kaXYtd2lkZ2V0IGhlYWx0aC13aWRnZXQgbXJiLTEwICR7dGhpcy5wcm9wcy5jdXN0b21DbGFzc31gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcG9pbnRtZW50LWhlYWQtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvaGVhbHRoLXRpcC5qcGdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXBwb2ludG1lbnQtaGVhZFwiPkhlYWx0aCBUaXAgb2YgdGhlIERheTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpcC1kZXNjLWRpdiB0aXAtZGVzYy1oZWlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGlwLWRlc2NcIj57KGhlYWx0aFRpcHMgJiYgaGVhbHRoVGlwc1tzZWxlY3RlZF0pID8gaGVhbHRoVGlwc1tzZWxlY3RlZF0udGV4dCA6IFwiXCJ9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlwLWluZGljYXRvcnMtZGl2IG1ydC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIG9uQ2xpY2s9e3RoaXMuY2hhbmdlVGlwLmJpbmQodGhpcywgdHJ1ZSl9IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2ljb25zL2Zvcm1hLTEtY29weS0zLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZUluZGljYXRvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhlYWx0aFRpcHMubWFwKChodCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4ga2V5PXtpfSBjbGFzc05hbWU9e1wiY2lcIiArIChpID09IHNlbGVjdGVkID8gXCJzZWxlY3RlZFwiIDogXCJcIil9Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBvbkNsaWNrPXt0aGlzLmNoYW5nZVRpcC5iaW5kKHRoaXMsIGZhbHNlKX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaWNvbnMvZm9ybWEtMS1jb3B5LTcuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWx0aFRpcFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBnZXRVcGNvbWluZ0FwcG9pbnRtZW50cywgZmV0Y2hIZWF0bGhUaXAsIGZldGNoT3JkZXJIaXN0b3J5LCB0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSwgc2VsZWN0UHJvZmlsZSwgc2VsZWN0TGFiVGltZVNMb3QsIHNlbGVjdE9wZFRpbWVTTG90LCBjbGVhckFsbFRlc3RzIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcblxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcblxuaW1wb3J0IFJpZ2h0QmFyVmlldyBmcm9tICcuL1JpZ2h0QmFyJ1xuaW1wb3J0IENoYXRQYW5lbCBmcm9tICcuLi9DaGF0UGFuZWwnXG5cbmNsYXNzIFJpZ2h0QmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5mZXRjaEhlYXRsaFRpcCgpXG4gICAgICAgIC8vIGlmIChTVE9SQUdFLmNoZWNrQXV0aCgpKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnByb3BzLmdldFVwY29taW5nQXBwb2ludG1lbnRzKClcbiAgICAgICAgLy8gICAgIHRoaXMucHJvcHMuZmV0Y2hPcmRlckhpc3RvcnkoKVxuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENoYXRQYW5lbCB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgIC8vIDxSaWdodEJhclZpZXcgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHBhc3NlZFByb3BzID0ge30pID0+IHtcbiAgICBsZXQgeyBwcm9maWxlcywgc2VsZWN0ZWRQcm9maWxlLCB1c2VyVXBjb21pbmdBcHBvaW50bWVudHMsIGhlYWx0aFRpcHMsIG9yZGVySGlzdG9yeSB9ID0gc3RhdGUuVVNFUlxuICAgIHJldHVybiB7XG4gICAgICAgIHByb2ZpbGVzLCBzZWxlY3RlZFByb2ZpbGUsIHVzZXJVcGNvbWluZ0FwcG9pbnRtZW50cywgaGVhbHRoVGlwcywgb3JkZXJIaXN0b3J5LCBwYXNzZWRQcm9wc1xuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2xlYXJBbGxUZXN0czogKCkgPT4gZGlzcGF0Y2goY2xlYXJBbGxUZXN0cygpKSxcbiAgICAgICAgc2VsZWN0T3BkVGltZVNMb3Q6IChzbG90LCByZXNjaGVkdWxlLCBhcHBvaW50bWVudElkKSA9PiBkaXNwYXRjaChzZWxlY3RPcGRUaW1lU0xvdChzbG90LCByZXNjaGVkdWxlLCBhcHBvaW50bWVudElkKSksXG4gICAgICAgIHNlbGVjdExhYlRpbWVTTG90OiAoc2xvdCwgcmVzY2hlZHVsZSkgPT4gZGlzcGF0Y2goc2VsZWN0TGFiVGltZVNMb3Qoc2xvdCwgcmVzY2hlZHVsZSkpLFxuICAgICAgICBnZXRVcGNvbWluZ0FwcG9pbnRtZW50czogKCkgPT4gZGlzcGF0Y2goZ2V0VXBjb21pbmdBcHBvaW50bWVudHMoKSksXG4gICAgICAgIGZldGNoSGVhdGxoVGlwOiAoKSA9PiBkaXNwYXRjaChmZXRjaEhlYXRsaFRpcCgpKSxcbiAgICAgICAgZmV0Y2hPcmRlckhpc3Rvcnk6ICgpID0+IGRpc3BhdGNoKGZldGNoT3JkZXJIaXN0b3J5KCkpLFxuICAgICAgICBzZWxlY3RQcm9maWxlOiAocHJvZmlsZV9pZCkgPT4gZGlzcGF0Y2goc2VsZWN0UHJvZmlsZShwcm9maWxlX2lkKSksXG4gICAgICAgIHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhOiAodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkKSA9PiBkaXNwYXRjaCh0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQpKVxuICAgIH1cbn1cblxuLy8gZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykod2l0aFJvdXRlcihSaWdodEJhcikpXG5leHBvcnQgZGVmYXVsdCBSaWdodEJhclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHsgaWQsIHR5cGUsIHBhdGllbnRfbmFtZSwgZG9jdG9yX25hbWUsIHRpbWVfc2xvdF9zdGFydCwgbGFiX25hbWUsIG9wZW5BcHBvaW50bWVudCB9KSA9PiB7XG4gICAgbGV0IGFwcF90aW1lID0gbmV3IERhdGUodGltZV9zbG90X3N0YXJ0KS50b0xvY2FsZURhdGVTdHJpbmcoKVxuICAgIGxldCBuYW1lID0gYERyLiAke2RvY3Rvcl9uYW1lfWBcbiAgICBpZiAobGFiX25hbWUpIHtcbiAgICAgICAgbmFtZSA9IGBMYWIgJHtsYWJfbmFtZX1gXG4gICAgfVxuICAgIHJldHVybiA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtZGl2LXdpZGdldFwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAgfX0gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgbGV0IGFwcF90eXBlID0gdHlwZSA9PSAnZG9jdG9yJyA/ICdvcGQnIDogJ2xhYidcbiAgICAgICAgICAgIG9wZW5BcHBvaW50bWVudChhcHBfdHlwZSwgaWQpXG4gICAgICAgIH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBvaW50bWVudC1oZWFkLWRpdlwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvYXBwb2ludG1lbnQuc3ZnXCJ9IGNsYXNzTmFtZT1cImFwcG9pbnRtZW50LWltZ1wiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXBwb2ludG1lbnQtaGVhZFwiPlVwY29taW5nIEFwcG9pbnRtZW50PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcG9pbnRtZW50LWRldGFpbHMtZGl2XCI+XG4gICAgICAgICAgICAgICAgPHA+QXBwb2ludG1lbnQgZm9yIHtwYXRpZW50X25hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFwcG9pbnRtZW50LWRhdGVcIj5PbiB7YXBwX3RpbWUudG9TdHJpbmcoKX08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXBwb2ludG1lbnQtZG9jXCI+V2l0aCB7bmFtZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9hPlxufSJdLCJzb3VyY2VSb290IjoiIn0=