exports.ids = [100];
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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _Loader = __webpack_require__(/*! ../../components/commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");


class DirectBooking extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const parsed = queryString.parse(this.props.location.search);
        let OTT = parsed.token;
        let user_id = parsed.user_id;
        let callbackurl = parsed.callbackurl;
        //Add UTM tags for building url
        try {
            if (parsed.utm_source && parsed.utm_source == 'OfflineAffiliate') {
                let sessionId = Math.floor(Math.random() * 103) * 21 + 1050;
                if (sessionStorage) {
                    sessionStorage.setItem('sessionIdVal', sessionId);
                }
                let spo_tags = {
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
            this.props.OTTLogin(OTT, user_id).then(resp => {
                if (callbackurl) {
                    if (callbackurl == 'lab' || callbackurl == 'opd') {
                        window.location.href = '/#' + callbackurl;
                    } else {
                        if (parsed.test_ids) {
                            callbackurl += '&test_ids=' + parsed.test_ids;
                            this.props.history.push('/' + callbackurl);
                        } else {
                            callbackurl = callbackurl.replace(/\*/g, '&');
                            window.location.href = window.location.origin + '/' + callbackurl + `?${parsed.queryParams}`;
                        }
                    }
                } else {
                    this.props.history.push('/cart?is_agent_booking=true');
                }
            }).catch(() => {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Token Expired." });
                this.props.history.push('/');
            });
        } else {
            this.props.history.push('/');
        }
    }

    buildOPDTimeSlot(data) {
        let timeObject = {};
        timeObject.time = data.time;
        timeObject.date = new Date(data.date);
        timeObject.selectedClinic = data.hospital;
        timeObject.selectedDoctor = data.doctor;

        return timeObject;
    }

    buildLabTimeSlot(data) {
        let timeObject = {};
        timeObject.time = data.time;
        timeObject.date = new Date(data.date);

        return timeObject;
    }

    setLabBooking(data) {
        this.props.clearAllTests();
        for (let curr_test of data.test_ids) {
            curr_test.extra_test = true;
            curr_test.lab_id = data.lab;
            this.props.toggleDiagnosisCriteria('test', curr_test, true);
        }

        this.props.selectProfile(data.profile);
        let time_slot = this.buildLabTimeSlot(data);
        this.props.selectLabTimeSLot(time_slot, false);
        this.props.history.push(`/lab/${data.lab}/book`);
    }

    setOpdBooking(data) {
        this.props.selectProfile(data.profile);
        let time_slot = this.buildOPDTimeSlot(data);
        this.props.selectOpdTimeSLot(time_slot, false);
        if (data.procedure_ids && data.procedure_ids.length) {
            this.props.saveProfileProcedures('', '', data.procedure_ids, true);
        }
        this.props.history.push(`/opd/doctor/${data.doctor}/${data.hospital}/bookdetails`);
    }

    render() {

        return _react2.default.createElement(_Loader2.default, null);
    }
}

DirectBooking.contextTypes = {
    router: () => null
};
const mapStateToProps = state => {
    let { profiles, selectedProfile } = state.USER;
    let { selectedAddress } = state.LAB_SEARCH;

    return {
        profiles, selectedProfile, selectedAddress
    };
};

const mapDispatchToProps = dispatch => {
    return {
        OTTLogin: (ott, user_id) => dispatch((0, _index.OTTLogin)(ott, user_id)),
        fetchOrderById: order_id => dispatch((0, _index.fetchOrderById)(order_id)),
        clearAllTests: () => dispatch((0, _index.clearAllTests)()),
        selectOpdTimeSLot: (slot, reschedule, appointmentId) => dispatch((0, _index.selectOpdTimeSLot)(slot, reschedule, appointmentId)),
        selectLabTimeSLot: (slot, reschedule) => dispatch((0, _index.selectLabTimeSLot)(slot, reschedule)),
        selectProfile: profile_id => dispatch((0, _index.selectProfile)(profile_id)),
        toggleDiagnosisCriteria: (type, criteria, forceAdd) => dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria, forceAdd)),
        selectPickupAddress: address => dispatch((0, _index.selectPickupAddress)(address)),
        selectLabAppointmentType: type => dispatch((0, _index.selectLabAppointmentType)(type)),
        saveProfileProcedures: (doctor_id, clinic_id, selectedProcedures, forceAdd) => dispatch((0, _index.saveProfileProcedures)(doctor_id, clinic_id, selectedProcedures, forceAdd)),
        setCommonUtmTags: (type, tag) => dispatch((0, _index.setCommonUtmTags)(type, tag))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DirectBooking);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvY29tbW9ucy9kaXJlY3RCb29raW5nLmpzIl0sIm5hbWVzIjpbIkxvYWRlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsImNsYXNzVHlwZSIsImlGcmFtZVBvcHVwIiwicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiRGlyZWN0Qm9va2luZyIsImNvbXBvbmVudERpZE1vdW50IiwicGFyc2VkIiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsIk9UVCIsInRva2VuIiwidXNlcl9pZCIsImNhbGxiYWNrdXJsIiwidXRtX3NvdXJjZSIsInNlc3Npb25JZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsInNwb190YWdzIiwidXRtX3RhZ3MiLCJ1dG1fdGVybSIsInV0bV9tZWRpdW0iLCJ1dG1fY2FtcGFpZ24iLCJ0aW1lIiwiRGF0ZSIsImdldFRpbWUiLCJjdXJyZW50U2Vzc2lvbklkIiwic2V0Q29tbW9uVXRtVGFncyIsImUiLCJPVFRMb2dpbiIsInRoZW4iLCJyZXNwIiwid2luZG93IiwiaHJlZiIsInRlc3RfaWRzIiwiaGlzdG9yeSIsInB1c2giLCJyZXBsYWNlIiwib3JpZ2luIiwicXVlcnlQYXJhbXMiLCJjYXRjaCIsIlNuYWNrQmFyIiwic2hvdyIsInBvcyIsInRleHQiLCJidWlsZE9QRFRpbWVTbG90IiwiZGF0YSIsInRpbWVPYmplY3QiLCJkYXRlIiwic2VsZWN0ZWRDbGluaWMiLCJob3NwaXRhbCIsInNlbGVjdGVkRG9jdG9yIiwiZG9jdG9yIiwiYnVpbGRMYWJUaW1lU2xvdCIsInNldExhYkJvb2tpbmciLCJjbGVhckFsbFRlc3RzIiwiY3Vycl90ZXN0IiwiZXh0cmFfdGVzdCIsImxhYl9pZCIsImxhYiIsInRvZ2dsZURpYWdub3Npc0NyaXRlcmlhIiwic2VsZWN0UHJvZmlsZSIsInByb2ZpbGUiLCJ0aW1lX3Nsb3QiLCJzZWxlY3RMYWJUaW1lU0xvdCIsInNldE9wZEJvb2tpbmciLCJzZWxlY3RPcGRUaW1lU0xvdCIsInByb2NlZHVyZV9pZHMiLCJsZW5ndGgiLCJzYXZlUHJvZmlsZVByb2NlZHVyZXMiLCJjb250ZXh0VHlwZXMiLCJyb3V0ZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInByb2ZpbGVzIiwic2VsZWN0ZWRQcm9maWxlIiwiVVNFUiIsInNlbGVjdGVkQWRkcmVzcyIsIkxBQl9TRUFSQ0giLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIm90dCIsImZldGNoT3JkZXJCeUlkIiwib3JkZXJfaWQiLCJzbG90IiwicmVzY2hlZHVsZSIsImFwcG9pbnRtZW50SWQiLCJwcm9maWxlX2lkIiwidHlwZSIsImNyaXRlcmlhIiwiZm9yY2VBZGQiLCJzZWxlY3RQaWNrdXBBZGRyZXNzIiwiYWRkcmVzcyIsInNlbGVjdExhYkFwcG9pbnRtZW50VHlwZSIsImRvY3Rvcl9pZCIsImNsaW5pY19pZCIsInNlbGVjdGVkUHJvY2VkdXJlcyIsInRhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsTUFBTUEsTUFBTixTQUFxQkMsZ0JBQU1DLFNBQTNCLENBQXFDO0FBQ2pDQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDSDs7QUFFREMsYUFBUzs7QUFFTCxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVcsS0FBS0QsS0FBTCxDQUFXRSxTQUFYLElBQXdCLGdCQUF4QztBQUNJLG1EQUFLLFdBQVUsV0FBZixHQURKO0FBR1EsaUJBQUtGLEtBQUwsQ0FBV0csV0FBWCxHQUNJO0FBQUE7QUFBQSxrQkFBRyxXQUFVLGVBQWI7QUFBQTtB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QkFBekIsRUFBNkM5RSxhQUE3QyxDIiwiZmlsZSI6IjEwMC5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBMb2FkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NUeXBlIHx8IFwibG9hZGVyQ2lyY3VsYXJcIn0gPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHAtbG9hZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlGcmFtZVBvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMTBcIj5SZWRpcmVjdGluZyB5b3UgdG8gUGhhcm1lYXN5IHdlYnNpdGUuLi48L3A+IDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlclxuIiwiaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5cbmltcG9ydCB7IE9UVExvZ2luLCBmZXRjaE9yZGVyQnlJZCwgZ2V0VXBjb21pbmdBcHBvaW50bWVudHMsIGZldGNoSGVhdGxoVGlwLCBmZXRjaE9yZGVySGlzdG9yeSwgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEsIHNlbGVjdFByb2ZpbGUsIHNlbGVjdExhYlRpbWVTTG90LCBzZWxlY3RPcGRUaW1lU0xvdCwgY2xlYXJBbGxUZXN0cywgc2VsZWN0UGlja3VwQWRkcmVzcywgc2VsZWN0TGFiQXBwb2ludG1lbnRUeXBlLCBzYXZlUHJvZmlsZVByb2NlZHVyZXMsIHNldENvbW1vblV0bVRhZ3MgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvTG9hZGVyJ1xuXG5jbGFzcyBEaXJlY3RCb29raW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgICByb3V0ZXI6ICgpID0+IG51bGxcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCBPVFQgPSBwYXJzZWQudG9rZW5cbiAgICAgICAgbGV0IHVzZXJfaWQgPSBwYXJzZWQudXNlcl9pZFxuICAgICAgICBsZXQgY2FsbGJhY2t1cmwgPSBwYXJzZWQuY2FsbGJhY2t1cmwgXG4gICAgICAgIC8vQWRkIFVUTSB0YWdzIGZvciBidWlsZGluZyB1cmxcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgaWYocGFyc2VkLnV0bV9zb3VyY2UgJiYgcGFyc2VkLnV0bV9zb3VyY2U9PSdPZmZsaW5lQWZmaWxpYXRlJyl7XG4gICAgICAgICAgICAgICAgbGV0IHNlc3Npb25JZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMykqMjEgKyAxMDUwXG4gICAgICAgICAgICAgICAgaWYoc2Vzc2lvblN0b3JhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnc2Vzc2lvbklkVmFsJyxzZXNzaW9uSWQpICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBzcG9fdGFncyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdXRtX3RhZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0bV9zb3VyY2U6IHBhcnNlZC51dG1fc291cmNlfHwnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0bV90ZXJtOiBwYXJzZWQudXRtX3Rlcm18fCcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXRtX21lZGl1bTogcGFyc2VkLnV0bV9tZWRpdW18fCcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXRtX2NhbXBhaWduOiBwYXJzZWQudXRtX2NhbXBhaWdufHwnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFNlc3Npb25JZDogc2Vzc2lvbklkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0Q29tbW9uVXRtVGFncygnc3BvJywgc3BvX3RhZ3MpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1jYXRjaChlKSB7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChPVFQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuT1RUTG9naW4oT1RULHVzZXJfaWQpLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBpZihjYWxsYmFja3VybCl7XG4gICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrdXJsID09ICdsYWInIHx8IGNhbGxiYWNrdXJsID09ICdvcGQnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8jJyArIGNhbGxiYWNrdXJsXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYocGFyc2VkLnRlc3RfaWRzKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3VybCs9JyZ0ZXN0X2lkcz0nK3BhcnNlZC50ZXN0X2lkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJytjYWxsYmFja3VybClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrdXJsID0gY2FsbGJhY2t1cmwucmVwbGFjZSgvXFwqL2csJyYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4rJy8nK2NhbGxiYWNrdXJsK2A/JHtwYXJzZWQucXVlcnlQYXJhbXN9YFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9jYXJ0P2lzX2FnZW50X2Jvb2tpbmc9dHJ1ZScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJUb2tlbiBFeHBpcmVkLlwiIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJylcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJylcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgYnVpbGRPUERUaW1lU2xvdChkYXRhKSB7XG4gICAgICAgIGxldCB0aW1lT2JqZWN0ID0ge31cbiAgICAgICAgdGltZU9iamVjdC50aW1lID0gZGF0YS50aW1lXG4gICAgICAgIHRpbWVPYmplY3QuZGF0ZSA9IG5ldyBEYXRlKGRhdGEuZGF0ZSlcbiAgICAgICAgdGltZU9iamVjdC5zZWxlY3RlZENsaW5pYyA9IGRhdGEuaG9zcGl0YWxcbiAgICAgICAgdGltZU9iamVjdC5zZWxlY3RlZERvY3RvciA9IGRhdGEuZG9jdG9yXG5cbiAgICAgICAgcmV0dXJuIHRpbWVPYmplY3RcbiAgICB9XG5cblxuICAgIGJ1aWxkTGFiVGltZVNsb3QoZGF0YSkge1xuICAgICAgICBsZXQgdGltZU9iamVjdCA9IHt9XG4gICAgICAgIHRpbWVPYmplY3QudGltZSA9IGRhdGEudGltZVxuICAgICAgICB0aW1lT2JqZWN0LmRhdGUgPSBuZXcgRGF0ZShkYXRhLmRhdGUpXG5cbiAgICAgICAgcmV0dXJuIHRpbWVPYmplY3RcbiAgICB9XG5cbiAgICBzZXRMYWJCb29raW5nKGRhdGEpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5jbGVhckFsbFRlc3RzKClcbiAgICAgICAgZm9yIChsZXQgY3Vycl90ZXN0IG9mIGRhdGEudGVzdF9pZHMpIHtcbiAgICAgICAgICAgIGN1cnJfdGVzdC5leHRyYV90ZXN0ID0gdHJ1ZVxuICAgICAgICAgICAgY3Vycl90ZXN0LmxhYl9pZCA9IGRhdGEubGFiXG4gICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKCd0ZXN0JywgY3Vycl90ZXN0LCB0cnVlKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RQcm9maWxlKGRhdGEucHJvZmlsZSlcbiAgICAgICAgbGV0IHRpbWVfc2xvdCA9IHRoaXMuYnVpbGRMYWJUaW1lU2xvdChkYXRhKVxuICAgICAgICB0aGlzLnByb3BzLnNlbGVjdExhYlRpbWVTTG90KHRpbWVfc2xvdCwgZmFsc2UpXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvbGFiLyR7ZGF0YS5sYWJ9L2Jvb2tgKVxuICAgIH1cblxuICAgIHNldE9wZEJvb2tpbmcoZGF0YSkge1xuICAgICAgICB0aGlzLnByb3BzLnNlbGVjdFByb2ZpbGUoZGF0YS5wcm9maWxlKVxuICAgICAgICBsZXQgdGltZV9zbG90ID0gdGhpcy5idWlsZE9QRFRpbWVTbG90KGRhdGEpXG4gICAgICAgIHRoaXMucHJvcHMuc2VsZWN0T3BkVGltZVNMb3QodGltZV9zbG90LCBmYWxzZSlcbiAgICAgICAgaWYgKGRhdGEucHJvY2VkdXJlX2lkcyAmJiBkYXRhLnByb2NlZHVyZV9pZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNhdmVQcm9maWxlUHJvY2VkdXJlcygnJywgJycsIGRhdGEucHJvY2VkdXJlX2lkcywgdHJ1ZSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL29wZC9kb2N0b3IvJHtkYXRhLmRvY3Rvcn0vJHtkYXRhLmhvc3BpdGFsfS9ib29rZGV0YWlsc2ApXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TG9hZGVyIC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICBsZXQgeyBwcm9maWxlcywgc2VsZWN0ZWRQcm9maWxlIH0gPSBzdGF0ZS5VU0VSXG4gICAgbGV0IHsgc2VsZWN0ZWRBZGRyZXNzIH0gPSBzdGF0ZS5MQUJfU0VBUkNIXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9maWxlcywgc2VsZWN0ZWRQcm9maWxlLCBzZWxlY3RlZEFkZHJlc3NcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIE9UVExvZ2luOiAob3R0LHVzZXJfaWQpID0+IGRpc3BhdGNoKE9UVExvZ2luKG90dCx1c2VyX2lkKSksXG4gICAgICAgIGZldGNoT3JkZXJCeUlkOiAob3JkZXJfaWQpID0+IGRpc3BhdGNoKGZldGNoT3JkZXJCeUlkKG9yZGVyX2lkKSksXG4gICAgICAgIGNsZWFyQWxsVGVzdHM6ICgpID0+IGRpc3BhdGNoKGNsZWFyQWxsVGVzdHMoKSksXG4gICAgICAgIHNlbGVjdE9wZFRpbWVTTG90OiAoc2xvdCwgcmVzY2hlZHVsZSwgYXBwb2ludG1lbnRJZCkgPT4gZGlzcGF0Y2goc2VsZWN0T3BkVGltZVNMb3Qoc2xvdCwgcmVzY2hlZHVsZSwgYXBwb2ludG1lbnRJZCkpLFxuICAgICAgICBzZWxlY3RMYWJUaW1lU0xvdDogKHNsb3QsIHJlc2NoZWR1bGUpID0+IGRpc3BhdGNoKHNlbGVjdExhYlRpbWVTTG90KHNsb3QsIHJlc2NoZWR1bGUpKSxcbiAgICAgICAgc2VsZWN0UHJvZmlsZTogKHByb2ZpbGVfaWQpID0+IGRpc3BhdGNoKHNlbGVjdFByb2ZpbGUocHJvZmlsZV9pZCkpLFxuICAgICAgICB0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYTogKHR5cGUsIGNyaXRlcmlhLCBmb3JjZUFkZCkgPT4gZGlzcGF0Y2godG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkKSksXG4gICAgICAgIHNlbGVjdFBpY2t1cEFkZHJlc3M6IChhZGRyZXNzKSA9PiBkaXNwYXRjaChzZWxlY3RQaWNrdXBBZGRyZXNzKGFkZHJlc3MpKSxcbiAgICAgICAgc2VsZWN0TGFiQXBwb2ludG1lbnRUeXBlOiAodHlwZSkgPT4gZGlzcGF0Y2goc2VsZWN0TGFiQXBwb2ludG1lbnRUeXBlKHR5cGUpKSxcbiAgICAgICAgc2F2ZVByb2ZpbGVQcm9jZWR1cmVzOiAoZG9jdG9yX2lkLCBjbGluaWNfaWQsIHNlbGVjdGVkUHJvY2VkdXJlcywgZm9yY2VBZGQpID0+IGRpc3BhdGNoKHNhdmVQcm9maWxlUHJvY2VkdXJlcyhkb2N0b3JfaWQsIGNsaW5pY19pZCwgc2VsZWN0ZWRQcm9jZWR1cmVzLCBmb3JjZUFkZCkpLFxuICAgICAgICBzZXRDb21tb25VdG1UYWdzOiAodHlwZSwgdGFnKSA9PiBkaXNwYXRjaChzZXRDb21tb25VdG1UYWdzKHR5cGUsIHRhZykpXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKERpcmVjdEJvb2tpbmcpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==