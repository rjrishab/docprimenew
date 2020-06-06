exports.ids = [3];
exports.modules = {

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _upcoming = __webpack_require__(/*! ./upcoming.js */ "./dev/js/components/commons/RightBar/upcoming.js");

var _upcoming2 = _interopRequireDefault(_upcoming);

var _continue = __webpack_require__(/*! ./continue.js */ "./dev/js/components/commons/RightBar/continue.js");

var _continue2 = _interopRequireDefault(_continue);

var _healthTip = __webpack_require__(/*! ./healthTip.js */ "./dev/js/components/commons/RightBar/healthTip.js");

var _healthTip2 = _interopRequireDefault(_healthTip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RightBar extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    openAppointment(type, id) {
        this.props.history.push(`/${type}/appointment/${id}`);
    }

    openBookingSummary(data, e) {
        this.props.selectProfile(data.profile);
        if (data.type == 'lab' || data.lab) {
            this.props.clearAllTests();
            for (let curr_test of data.test_ids) {
                curr_test.extra_test = true;
                curr_test.lab_id = data.lab;
                this.props.toggleDiagnosisCriteria('test', curr_test, true);
            }
            //always clear selected time at lab profile
            let slot = { time: {} };
            this.props.selectLabTimeSLot(slot, false);
            setTimeout(() => {
                this.props.history.push(`/lab/${data.lab}/book`);
            }, 100);
        } else {
            //always clear selected time at doctor profile
            let slot = { time: {} };
            this.props.selectOpdTimeSLot(slot, false);
            this.props.history.push(`/opd/doctor/${data.doctor}/${data.hospital}/bookdetails`);
        }
    }

    render() {

        let profileData = this.props.profiles[this.props.selectedProfile];

        return _react2.default.createElement(
            'div',
            { className: 'col-lg-3 right-section d-none d-lg-block' },
            _react2.default.createElement(
                'div',
                { className: "sticky-div" + (!this.props.hideStickyTemp ? " sticky-div-temp" : "") },
                _react2.default.createElement(_healthTip2.default, { healthTips: this.props.healthTips }),
                profileData ? this.props.userUpcomingAppointments.map((app, i) => {
                    return _react2.default.createElement(_upcoming2.default, _extends({ key: i }, app, { openAppointment: this.openAppointment.bind(this) }));
                }) : "",
                profileData ? this.props.orderHistory.map((odHistory, i) => {
                    return _react2.default.createElement(_continue2.default, _extends({ key: i }, odHistory, { openBookingSummary: this.openBookingSummary.bind(this, odHistory) }));
                }) : ""
            )
        );
    }
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _initialsPicture = __webpack_require__(/*! ../initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = ({ doctor_name, lab_name, hospital_name, openBookingSummary, doctor_thumbnail, lab_thumbnail, test_ids }) => {
    return _react2.default.createElement(
        'a',
        { href: 'javascript:;' },
        _react2.default.createElement(
            'div',
            { className: 'right-div-widget health-widget', onClick: () => {
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
                    test_ids && test_ids.length ? test_ids.reduce((str, t, i) => {
                        str += `${t.name}, `;
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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HealthTip extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        };
    }

    changeTip(back = false) {
        if (back && this.state.selected > 0) {
            this.setState({ selected: this.state.selected - 1 });
        } else if (!back && this.state.selected < this.props.healthTips.length - 1) {
            this.setState({ selected: this.state.selected + 1 });
        }
    }

    render() {

        let { selected } = this.state;
        let { healthTips } = this.props;

        return _react2.default.createElement(
            "div",
            { className: `right-div-widget health-widget mrb-10 ${this.props.customClass}` },
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
                    this.props.healthTips.map((ht, i) => {
                        return _react2.default.createElement("span", { key: i, className: "ci" + (i == selected ? "selected" : "") });
                    })
                ),
                _react2.default.createElement("img", { onClick: this.changeTip.bind(this, false), src: "/assets" + "/img/icons/forma-1-copy-7.svg" })
            )
        );
    }
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _index = __webpack_require__(/*! ../../../actions/index.js */ "./dev/js/actions/index.js");

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _RightBar = __webpack_require__(/*! ./RightBar */ "./dev/js/components/commons/RightBar/RightBar.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _ChatPanel = __webpack_require__(/*! ../ChatPanel */ "./dev/js/components/commons/ChatPanel/index.js");

var _ChatPanel2 = _interopRequireDefault(_ChatPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RightBar extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.fetchHeatlhTip()
        // if (STORAGE.checkAuth()) {
        //     this.props.getUpcomingAppointments()
        //     this.props.fetchOrderHistory()
        // }
    }

    render() {
        return _react2.default.createElement(_ChatPanel2.default, this.props)
        // <RightBarView {...this.props} />
        ;
    }
}

const mapStateToProps = (state, passedProps = {}) => {
    let { profiles, selectedProfile, userUpcomingAppointments, healthTips, orderHistory } = state.USER;
    return {
        profiles, selectedProfile, userUpcomingAppointments, healthTips, orderHistory, passedProps
    };
};

const mapDispatchToProps = dispatch => {
    return {
        clearAllTests: () => dispatch((0, _index.clearAllTests)()),
        selectOpdTimeSLot: (slot, reschedule, appointmentId) => dispatch((0, _index.selectOpdTimeSLot)(slot, reschedule, appointmentId)),
        selectLabTimeSLot: (slot, reschedule) => dispatch((0, _index.selectLabTimeSLot)(slot, reschedule)),
        getUpcomingAppointments: () => dispatch((0, _index.getUpcomingAppointments)()),
        fetchHeatlhTip: () => dispatch((0, _index.fetchHeatlhTip)()),
        fetchOrderHistory: () => dispatch((0, _index.fetchOrderHistory)()),
        selectProfile: profile_id => dispatch((0, _index.selectProfile)(profile_id)),
        toggleDiagnosisCriteria: (type, criteria, forceAdd) => dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria, forceAdd))
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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = ({ id, type, patient_name, doctor_name, time_slot_start, lab_name, openAppointment }) => {
    let app_time = new Date(time_slot_start).toLocaleDateString();
    let name = `Dr. ${doctor_name}`;
    if (lab_name) {
        name = `Lab ${lab_name}`;
    }
    return _react2.default.createElement(
        "a",
        { href: "javascript:;" },
        _react2.default.createElement(
            "div",
            { className: "right-div-widget", style: { marginBottom: 10 }, onClick: () => {
                    let app_type = type == 'doctor' ? 'opd' : 'lab';
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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL1JpZ2h0QmFyL1JpZ2h0QmFyLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvUmlnaHRCYXIvY29udGludWUuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9SaWdodEJhci9oZWFsdGhUaXAuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9SaWdodEJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL1JpZ2h0QmFyL3VwY29taW5nLmpzIl0sIm5hbWVzIjpbIlJpZ2h0QmFyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwib3BlbkFwcG9pbnRtZW50IiwidHlwZSIsImlkIiwiaGlzdG9yeSIsInB1c2giLCJvcGVuQm9va2luZ1N1bW1hcnkiLCJkYXRhIiwiZSIsInNlbGVjdFByb2ZpbGUiLCJwcm9maWxlIiwibGFiIiwiY2xlYXJBbGxUZXN0cyIsImN1cnJfdGVzdCIsInRlc3RfaWRzIiwiZXh0cmFfdGVzdCIsImxhYl9pZCIsInRvZ2dsZURpYWdub3Npc0NyaXRlcmlhIiwic2xvdCIsInRpbWUiLCJzZWxlY3RMYWJUaW1lU0xvdCIsInNldFRpbWVvdXQiLCJzZWxlY3RPcGRUaW1lU0xvdCIsImRvY3RvciIsImhvc3BpdGFsIiwicmVuZGVyIiwicHJvZmlsZURhdGEiLCJwcm9maWxlcyIsInNlbGVjdGVkUHJvZmlsZSIsImhpZGVTdGlja3lUZW1wIiwiaGVhbHRoVGlwcyIsInVzZXJVcGNvbWluZ0FwcG9pbnRtZW50cyIsIm1hcCIsImFwcCIsImkiLCJiaW5kIiwib3JkZXJIaXN0b3J5Iiwib2RIaXN0b3J5IiwiZG9jdG9yX25hbWUiLCJsYWJfbmFtZSIsImhvc3BpdGFsX25hbWUiLCJkb2N0b3JfdGh1bWJuYWlsIiwibGFiX3RodW1ibmFpbCIsIm1hcmdpbkJvdHRvbSIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwibGVuZ3RoIiwicmVkdWNlIiwic3RyIiwidCIsIm5hbWUiLCJBU1NFVFNfQkFTRV9VUkwiLCJIZWFsdGhUaXAiLCJzdGF0ZSIsInNlbGVjdGVkIiwiY2hhbmdlVGlwIiwiYmFjayIsInNldFN0YXRlIiwiY3VzdG9tQ2xhc3MiLCJ0ZXh0IiwiaHQiLCJjb21wb25lbnREaWRNb3VudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInBhc3NlZFByb3BzIiwiVVNFUiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwicmVzY2hlZHVsZSIsImFwcG9pbnRtZW50SWQiLCJnZXRVcGNvbWluZ0FwcG9pbnRtZW50cyIsImZldGNoSGVhdGxoVGlwIiwiZmV0Y2hPcmRlckhpc3RvcnkiLCJwcm9maWxlX2lkIiwiY3JpdGVyaWEiLCJmb3JjZUFkZCIsInBhdGllbnRfbmFtZSIsInRpbWVfc2xvdF9zdGFydCIsImFwcF90aW1lIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImFwcF90eXBlIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsTUFBTUEsUUFBTixTQUF1QkMsZ0JBQU1DLFNBQTdCLENBQXVDO0FBQ25DQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDSDs7QUFFREMsb0JBQWdCQyxJQUFoQixFQUFzQkMsRUFBdEIsRUFBMEI7QUFDdEIsYUFBS0gsS0FBTCxDQUFXSSxPQUFYLENBQW1CQyxJQUFuQixDQUF5QixJQUFHSCxJQUFLLGdCQUFlQyxFQUFHLEVBQW5EO0FBQ0g7O0FBRURHLHVCQUFtQkMsSUFBbkIsRUFBeUJDLENBQXpCLEVBQTRCO0FBQ3hCLGFBQUtSLEtBQUwsQ0FBV1MsYUFBWCxDQUF5QkYsS0FBS0csT0FBOUI7QUFDQSxZQUFJSCxLQUFLTCxJQUFMLElB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VyxJQUFJQyxJQUFKLENBQVNGLGVBQVQsRUFBMEJHLGtCQUExQixFQUFmO0FBQ0EsUUFBSTdCLE9BQVEsT0FBTWIsV0FBWSxFQUE5QjtBQUNBLFFBQUlDLFFBQUosRUFBYztBQUNWWSxlQUFRLE9BQU1aLFFBQVMsRUFBdkI7QUFDSDtBQUNELFdBQU87QUFBQTtBQUFBLFVBQUcsTUFBSyxjQUFSO0FBQ0g7QUFBQTtBQUFBLGNBQUssV0FBVSxrQkFBZixFQUFrQyxPQUFPLEVBQUVJLGNBQWMsRUFBaEIsRUFBekMsRUFBK0QsU0FBUyxNQUFNO0FBQzFFLHdCQUFJc0MsV0FBVy9FLFFBQVEsUUFBUixHQUFtQixLQUFuQixHQUEyQixLQUExQztBQUNBRCxvQ0FBZ0JnRixRQUFoQixFQUEwQjlFLEVBQTFCO0FBQ0gsaUJBSEQ7QUFJSTtBQUFBO0FBQUEsa0JBQUssV0FBVSxzQkFBZjtBQUNJLHVEQUFLLEtBQUtpRCxTQUFlQSxHQUFHLHFDQUE1QixFQUFtRSxXQUFVLGlCQUE3RSxHQURKO0FBRUk7QUFBQTtBQUFBLHNCQUFNLFdBQVUsa0JBQWhCO0FBQUE7QUFBQTtBQUZKLGFBSko7QUFRSTtBQUFBO0FBQUEsa0JBQUssV0FBVSx5QkFBZjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQW9Cd0I7QUFBcEIsaUJBREo7QUFFSTtBQUFBO0FBQUEsc0JBQUcsV0FBVSxrQkFBYjtBQUFBO0FBQW9DRSw2QkFBU0ksUUFBVDtBQUFwQyxpQkFGSjtBQUdJO0FBQUE7QUFBQSxzQkFBRyxXQUFVLGlCQUFiO0FBQUE7QUFBcUMvQjtBQUFyQztBQUhKO0FBUko7QUFERyxLQUFQO0FBZ0JILEMiLCJmaWxlIjoiMy5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgVXBjb21pbmcgZnJvbSAnLi91cGNvbWluZy5qcydcbmltcG9ydCBDb250aW51ZUJvb2tpbmcgZnJvbSAnLi9jb250aW51ZS5qcydcbmltcG9ydCBIZWFsdGhUaXAgZnJvbSAnLi9oZWFsdGhUaXAuanMnXG5cbmNsYXNzIFJpZ2h0QmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICBvcGVuQXBwb2ludG1lbnQodHlwZSwgaWQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC8ke3R5cGV9L2FwcG9pbnRtZW50LyR7aWR9YClcbiAgICB9XG5cbiAgICBvcGVuQm9va2luZ1N1bW1hcnkoZGF0YSwgZSkge1xuICAgICAgICB0aGlzLnByb3BzLnNlbGVjdFByb2ZpbGUoZGF0YS5wcm9maWxlKVxuICAgICAgICBpZiAoZGF0YS50eXBlID09ICdsYWInIHx8IGRhdGEubGFiKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNsZWFyQWxsVGVzdHMoKVxuICAgICAgICAgICAgZm9yIChsZXQgY3Vycl90ZXN0IG9mIGRhdGEudGVzdF9pZHMpIHtcbiAgICAgICAgICAgICAgICBjdXJyX3Rlc3QuZXh0cmFfdGVzdCA9IHRydWVcbiAgICAgICAgICAgICAgICBjdXJyX3Rlc3QubGFiX2lkID0gZGF0YS5sYWJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKCd0ZXN0JywgY3Vycl90ZXN0LCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9hbHdheXMgY2xlYXIgc2VsZWN0ZWQgdGltZSBhdCBsYWIgcHJvZmlsZVxuICAgICAgICAgICAgbGV0IHNsb3QgPSB7IHRpbWU6IHt9IH1cbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0TGFiVGltZVNMb3Qoc2xvdCwgZmFsc2UpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2xhYi8ke2RhdGEubGFifS9ib29rYClcbiAgICAgICAgICAgIH0sIDEwMClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vYWx3YXlzIGNsZWFyIHNlbGVjdGVkIHRpbWUgYXQgZG9jdG9yIHByb2ZpbGVcbiAgICAgICAgICAgIGxldCBzbG90ID0geyB0aW1lOiB7fSB9XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdE9wZFRpbWVTTG90KHNsb3QsIGZhbHNlKVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9vcGQvZG9jdG9yLyR7ZGF0YS5kb2N0b3J9LyR7ZGF0YS5ob3NwaXRhbH0vYm9va2RldGFpbHNgKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCBwcm9maWxlRGF0YSA9IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgcmlnaHQtc2VjdGlvbiBkLW5vbmUgZC1sZy1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInN0aWNreS1kaXZcIiArICghdGhpcy5wcm9wcy5oaWRlU3RpY2t5VGVtcCA/IFwiIHN0aWNreS1kaXYtdGVtcFwiIDogXCJcIil9PlxuICAgICAgICAgICAgICAgICAgICA8SGVhbHRoVGlwIGhlYWx0aFRpcHM9e3RoaXMucHJvcHMuaGVhbHRoVGlwc30gLz5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZURhdGEgPyB0aGlzLnByb3BzLnVzZXJVcGNvbWluZ0FwcG9pbnRtZW50cy5tYXAoKGFwcCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8VXBjb21pbmcga2V5PXtpfSB7Li4uYXBwfSBvcGVuQXBwb2ludG1lbnQ9e3RoaXMub3BlbkFwcG9pbnRtZW50LmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVEYXRhID8gdGhpcy5wcm9wcy5vcmRlckhpc3RvcnkubWFwKChvZEhpc3RvcnksIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvbnRpbnVlQm9va2luZyBrZXk9e2l9IHsuLi5vZEhpc3Rvcnl9IG9wZW5Cb29raW5nU3VtbWFyeT17dGhpcy5vcGVuQm9va2luZ1N1bW1hcnkuYmluZCh0aGlzLCBvZEhpc3RvcnkpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmlnaHRCYXJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5pdGlhbHNQaWN0dXJlIGZyb20gJy4uL2luaXRpYWxzUGljdHVyZSdcblxuZXhwb3J0IGRlZmF1bHQgKHsgZG9jdG9yX25hbWUsIGxhYl9uYW1lLCBob3NwaXRhbF9uYW1lLCBvcGVuQm9va2luZ1N1bW1hcnksIGRvY3Rvcl90aHVtYm5haWwsIGxhYl90aHVtYm5haWwsIHRlc3RfaWRzIH0pID0+IHtcbiAgICByZXR1cm4gPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LWRpdi13aWRnZXQgaGVhbHRoLXdpZGdldFwiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIG9wZW5Cb29raW5nU3VtbWFyeSgpXG4gICAgICAgIH19IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAgfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcG9pbnRtZW50LWhlYWQtZGl2XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXBwb2ludG1lbnQtaGVhZFwiPkNvbnRpbnVlIEJvb2tpbmcge2xhYl9uYW1lID8gXCJMYWJcIiA6IFwiRG9jdG9yXCJ9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmctZGV0YWlscy1kaXZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvYy1pbWctZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbml0aWFsc1BpY3R1cmUgbmFtZT17KGxhYl9uYW1lIHx8IGRvY3Rvcl9uYW1lKX0gaGFzX2ltYWdlPXshIShkb2N0b3JfdGh1bWJuYWlsIHx8IGxhYl90aHVtYm5haWwpfSBjbGFzc05hbWU9XCJpbml0aWFsc1BpY3R1cmUtY2JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkb2N0b3JfdGh1bWJuYWlsIHx8IGxhYl90aHVtYm5haWx9IHN0eWxlPXt7IHdpZHRoOiAzMCwgaGVpZ2h0OiAzMCwgYm9yZGVyUmFkaXVzOiAnMTAwJScgfX0gY2xhc3NOYW1lPVwiZG9jLWltZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvSW5pdGlhbHNQaWN0dXJlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jLWRlc2MtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRvYy1uYW1lXCI+e2RvY3Rvcl9uYW1lIHx8IGxhYl9uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaG9zcGl0YWxfbmFtZSA/IDxwIGNsYXNzTmFtZT1cImhvc3BpdGFsLW5hbWVcIj57aG9zcGl0YWxfbmFtZX08L3A+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICh0ZXN0X2lkcyAmJiB0ZXN0X2lkcy5sZW5ndGgpID8gdGVzdF9pZHMucmVkdWNlKChzdHIsIHQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHIgKz0gYCR7dC5uYW1lfSwgYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIFwiXCIpIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJib29raW5nLXRpbWVcIj4xOHRoIEFwcmlsIHwgMzozMCBQTTwvcD4gKi99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGludWUtZGl2XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGludWUtdGV4dFwiPkNvbnRpbnVlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvcmlnaHQtYXJyb3cuc3ZnXCJ9IGNsYXNzTmFtZT1cInJ0LWFycm93LWljb25cIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvYT5cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBIZWFsdGhUaXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWQ6IDBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZVRpcChiYWNrID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGJhY2sgJiYgdGhpcy5zdGF0ZS5zZWxlY3RlZCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZDogdGhpcy5zdGF0ZS5zZWxlY3RlZCAtIDEgfSlcbiAgICAgICAgfSBlbHNlIGlmICghYmFjayAmJiB0aGlzLnN0YXRlLnNlbGVjdGVkIDwgdGhpcy5wcm9wcy5oZWFsdGhUaXBzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZDogdGhpcy5zdGF0ZS5zZWxlY3RlZCArIDEgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgeyBzZWxlY3RlZCB9ID0gdGhpcy5zdGF0ZVxuICAgICAgICBsZXQgeyBoZWFsdGhUaXBzIH0gPSB0aGlzLnByb3BzXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2ByaWdodC1kaXYtd2lkZ2V0IGhlYWx0aC13aWRnZXQgbXJiLTEwICR7dGhpcy5wcm9wcy5jdXN0b21DbGFzc31gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcG9pbnRtZW50LWhlYWQtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvaGVhbHRoLXRpcC5qcGdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXBwb2ludG1lbnQtaGVhZFwiPkhlYWx0aCBUaXAgb2YgdGhlIERheTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpcC1kZXNjLWRpdiB0aXAtZGVzYy1oZWlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGlwLWRlc2NcIj57KGhlYWx0aFRpcHMgJiYgaGVhbHRoVGlwc1tzZWxlY3RlZF0pID8gaGVhbHRoVGlwc1tzZWxlY3RlZF0udGV4dCA6IFwiXCJ9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlwLWluZGljYXRvcnMtZGl2IG1ydC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIG9uQ2xpY2s9e3RoaXMuY2hhbmdlVGlwLmJpbmQodGhpcywgdHJ1ZSl9IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2ljb25zL2Zvcm1hLTEtY29weS0zLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZUluZGljYXRvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhlYWx0aFRpcHMubWFwKChodCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4ga2V5PXtpfSBjbGFzc05hbWU9e1wiY2lcIiArIChpID09IHNlbGVjdGVkID8gXCJzZWxlY3RlZFwiIDogXCJcIil9Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBvbkNsaWNrPXt0aGlzLmNoYW5nZVRpcC5iaW5kKHRoaXMsIGZhbHNlKX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaWNvbnMvZm9ybWEtMS1jb3B5LTcuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWx0aFRpcFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBnZXRVcGNvbWluZ0FwcG9pbnRtZW50cywgZmV0Y2hIZWF0bGhUaXAsIGZldGNoT3JkZXJIaXN0b3J5LCB0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSwgc2VsZWN0UHJvZmlsZSwgc2VsZWN0TGFiVGltZVNMb3QsIHNlbGVjdE9wZFRpbWVTTG90LCBjbGVhckFsbFRlc3RzIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcblxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcblxuaW1wb3J0IFJpZ2h0QmFyVmlldyBmcm9tICcuL1JpZ2h0QmFyJ1xuaW1wb3J0IENoYXRQYW5lbCBmcm9tICcuLi9DaGF0UGFuZWwnXG5cbmNsYXNzIFJpZ2h0QmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5mZXRjaEhlYXRsaFRpcCgpXG4gICAgICAgIC8vIGlmIChTVE9SQUdFLmNoZWNrQXV0aCgpKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnByb3BzLmdldFVwY29taW5nQXBwb2ludG1lbnRzKClcbiAgICAgICAgLy8gICAgIHRoaXMucHJvcHMuZmV0Y2hPcmRlckhpc3RvcnkoKVxuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENoYXRQYW5lbCB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgIC8vIDxSaWdodEJhclZpZXcgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHBhc3NlZFByb3BzID0ge30pID0+IHtcbiAgICBsZXQgeyBwcm9maWxlcywgc2VsZWN0ZWRQcm9maWxlLCB1c2VyVXBjb21pbmdBcHBvaW50bWVudHMsIGhlYWx0aFRpcHMsIG9yZGVySGlzdG9yeSB9ID0gc3RhdGUuVVNFUlxuICAgIHJldHVybiB7XG4gICAgICAgIHByb2ZpbGVzLCBzZWxlY3RlZFByb2ZpbGUsIHVzZXJVcGNvbWluZ0FwcG9pbnRtZW50cywgaGVhbHRoVGlwcywgb3JkZXJIaXN0b3J5LCBwYXNzZWRQcm9wc1xuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2xlYXJBbGxUZXN0czogKCkgPT4gZGlzcGF0Y2goY2xlYXJBbGxUZXN0cygpKSxcbiAgICAgICAgc2VsZWN0T3BkVGltZVNMb3Q6IChzbG90LCByZXNjaGVkdWxlLCBhcHBvaW50bWVudElkKSA9PiBkaXNwYXRjaChzZWxlY3RPcGRUaW1lU0xvdChzbG90LCByZXNjaGVkdWxlLCBhcHBvaW50bWVudElkKSksXG4gICAgICAgIHNlbGVjdExhYlRpbWVTTG90OiAoc2xvdCwgcmVzY2hlZHVsZSkgPT4gZGlzcGF0Y2goc2VsZWN0TGFiVGltZVNMb3Qoc2xvdCwgcmVzY2hlZHVsZSkpLFxuICAgICAgICBnZXRVcGNvbWluZ0FwcG9pbnRtZW50czogKCkgPT4gZGlzcGF0Y2goZ2V0VXBjb21pbmdBcHBvaW50bWVudHMoKSksXG4gICAgICAgIGZldGNoSGVhdGxoVGlwOiAoKSA9PiBkaXNwYXRjaChmZXRjaEhlYXRsaFRpcCgpKSxcbiAgICAgICAgZmV0Y2hPcmRlckhpc3Rvcnk6ICgpID0+IGRpc3BhdGNoKGZldGNoT3JkZXJIaXN0b3J5KCkpLFxuICAgICAgICBzZWxlY3RQcm9maWxlOiAocHJvZmlsZV9pZCkgPT4gZGlzcGF0Y2goc2VsZWN0UHJvZmlsZShwcm9maWxlX2lkKSksXG4gICAgICAgIHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhOiAodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkKSA9PiBkaXNwYXRjaCh0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQpKVxuICAgIH1cbn1cblxuLy8gZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykod2l0aFJvdXRlcihSaWdodEJhcikpXG5leHBvcnQgZGVmYXVsdCBSaWdodEJhclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHsgaWQsIHR5cGUsIHBhdGllbnRfbmFtZSwgZG9jdG9yX25hbWUsIHRpbWVfc2xvdF9zdGFydCwgbGFiX25hbWUsIG9wZW5BcHBvaW50bWVudCB9KSA9PiB7XG4gICAgbGV0IGFwcF90aW1lID0gbmV3IERhdGUodGltZV9zbG90X3N0YXJ0KS50b0xvY2FsZURhdGVTdHJpbmcoKVxuICAgIGxldCBuYW1lID0gYERyLiAke2RvY3Rvcl9uYW1lfWBcbiAgICBpZiAobGFiX25hbWUpIHtcbiAgICAgICAgbmFtZSA9IGBMYWIgJHtsYWJfbmFtZX1gXG4gICAgfVxuICAgIHJldHVybiA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtZGl2LXdpZGdldFwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAgfX0gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgbGV0IGFwcF90eXBlID0gdHlwZSA9PSAnZG9jdG9yJyA/ICdvcGQnIDogJ2xhYidcbiAgICAgICAgICAgIG9wZW5BcHBvaW50bWVudChhcHBfdHlwZSwgaWQpXG4gICAgICAgIH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBvaW50bWVudC1oZWFkLWRpdlwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvYXBwb2ludG1lbnQuc3ZnXCJ9IGNsYXNzTmFtZT1cImFwcG9pbnRtZW50LWltZ1wiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXBwb2ludG1lbnQtaGVhZFwiPlVwY29taW5nIEFwcG9pbnRtZW50PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcG9pbnRtZW50LWRldGFpbHMtZGl2XCI+XG4gICAgICAgICAgICAgICAgPHA+QXBwb2ludG1lbnQgZm9yIHtwYXRpZW50X25hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFwcG9pbnRtZW50LWRhdGVcIj5PbiB7YXBwX3RpbWUudG9TdHJpbmcoKX08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXBwb2ludG1lbnQtZG9jXCI+V2l0aCB7bmFtZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9hPlxufSJdLCJzb3VyY2VSb290IjoiIn0=