exports.ids = [87];
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

/***/ "./dev/js/components/commons/primeCare/primeCareSuccessView.js":
/*!*********************************************************************!*\
  !*** ./dev/js/components/commons/primeCare/primeCareSuccessView.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _LeftBar = __webpack_require__(/*! ../LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _footer = __webpack_require__(/*! ../Home/footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _Loader = __webpack_require__(/*! ../../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PrimeCareSuccessView extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            chatError: false
        };
    }

    getDate(unix_date) {
        let date = new Date(unix_date);
        let newDate = date.toDateString();
        return newDate;
    }

    render() {
        let self = this;
        if (this.props.data) {
            return _react2.default.createElement(
                'div',
                { className: 'profile-body-wrap', style: { paddingBottom: 54 } },
                _react2.default.createElement(_DesktopProfileHeader2.default, null),
                _react2.default.createElement(
                    'section',
                    { className: 'container container-top-margin' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row main-row parent-section-row' },
                        _react2.default.createElement(_LeftBar2.default, null),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12 col-md-7 col-lg-7 center-column' },
                            _react2.default.createElement('div', { className: 'container-fluid' }),
                            _react2.default.createElement(
                                'div',
                                { className: 'careFinalscreenContainer' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'careDocwithBg' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'careDocwithBglogo' },
                                        _react2.default.createElement('img', { className: 'careLogiImg', src: "/assets" + "/img/logo-care-white.png" })
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'careDecparacong' },
                                        'Congratulations!'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'careDecparasub' },
                                        'Your Docprime care membership is active'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'careDecparadate' },
                                        this.getDate(this.props.data.created_at),
                                        ' - ',
                                        this.getDate(this.props.data.expire_at)
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'careThankyouContainer' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'careThankyouContainerCard' },
                                    _react2.default.createElement(
                                        'ul',
                                        { className: 'UlcareListingWithSide mt-rmv' },
                                        this.props.data && this.props.data.unlimited_online_consultation ? _react2.default.createElement(
                                            'li',
                                            { className: 'careListiLi' },
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'careListin' },
                                                'Free Unlimited Online Consultation '
                                            ),
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                'Our online consultation timings are from 8:00 AM to 5:00 PM'
                                            )
                                        ) : '',
                                        this.props.data && this.props.data.priority_queue ? _react2.default.createElement(
                                            'li',
                                            { className: 'careListiLi' },
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'careListin' },
                                                'Priority Queue '
                                            ),
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                'No waiting time!'
                                            )
                                        ) : '',
                                        this.props.data ? Object.entries(this.props.data.features).map(function ([key, value]) {
                                            if (value.count != null) {
                                                return _react2.default.createElement(
                                                    'li',
                                                    { key: value.id, className: 'careListiLi' },
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: 'careListin' },
                                                        value.name,
                                                        ' '
                                                    ),
                                                    _react2.default.createElement(
                                                        'span',
                                                        null,
                                                        `Memeber can avail this offer ${value.count == 2 ? 'twice' : 'once'} in a year`
                                                    )
                                                );
                                            }
                                        }) : ''
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'd-flex justify-content-center align-items-center mrb-10', onClick: () => this.setState({ chatError: true }) },
                                        _react2.default.createElement(
                                            'button',
                                            { 'class': 'cstm-book-btn fw-500', style: { width: 100, marginTop: 0 } },
                                            'Chat now'
                                        )
                                    ),
                                    this.state.chatError ? _react2.default.createElement(
                                        'div',
                                        { className: 'info-rtl chat-err mrb-15' },
                                        'Due to Covida-19 outbreak, our chat services are temporarily suspended. We are sorry for the inconvenience caused'
                                    ) : '',
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'careThankpara' },
                                        'Thanks for choosing ',
                                        _react2.default.createElement(
                                            'a',
                                            { onClick: e => this.props.history.push('/') },
                                            'docprime.com'
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(_RightBar2.default, { className: 'col-md-5 mb-3' })
                    )
                ),
                _react2.default.createElement(_footer2.default, null)
            );
        } else {
            return _react2.default.createElement(
                'div',
                { className: 'profile-body-wrap', style: { paddingBottom: 54 } },
                _react2.default.createElement(_DesktopProfileHeader2.default, null),
                _react2.default.createElement('section', { className: 'container container-top-margin' }),
                _react2.default.createElement(_Loader2.default, null)
            );
        }
    }
}

exports.default = PrimeCareSuccessView;

/***/ }),

/***/ "./dev/js/containers/care/primeCareSuccess.js":
/*!****************************************************!*\
  !*** ./dev/js/containers/care/primeCareSuccess.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _primeCareSuccessView = __webpack_require__(/*! ../../components/commons/primeCare/primeCareSuccessView.js */ "./dev/js/components/commons/primeCare/primeCareSuccessView.js");

var _primeCareSuccessView2 = _interopRequireDefault(_primeCareSuccessView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class primeCareSuccess extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        };
    }

    componentDidMount() {
        const parsed = queryString.parse(this.props.location.search);

        this.props.retrieveCareDetails(parsed.user_plan, resp => {
            this.setState({ data: resp });
        });
        if (window) {
            window.scrollTo(0, 0);
        }
    }

    render() {

        return _react2.default.createElement(_primeCareSuccessView2.default, _extends({}, this.props, { data: this.state.data }));
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        retrieveCareDetails: (selectedPlan, cb) => dispatch((0, _index.retrieveCareDetails)(selectedPlan, cb))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(primeCareSuccess);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9wcmltZUNhcmUvcHJpbWVDYXJlU3VjY2Vzc1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvY2FyZS9wcmltZUNhcmVTdWNjZXNzLmpzIl0sIm5hbWVzIjpbIkxvYWRlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsImNsYXNzVHlwZSIsImlGcmFtZVBvcHVwIiwiUHJpbWVDYXJlU3VjY2Vzc1ZpZXciLCJzdGF0ZSIsImNoYXRFcnJvciIsImdldERhdGUiLCJ1bml4X2RhdGUiLCJkYXRlIiwiRGF0ZSIsIm5ld0RhdGUiLCJ0b0RhdGVTdHJpbmciLCJzZWxmIiwiZGF0YSIsInBhZGRpbmdCb3R0b20iLCJBU1NFVFNfQkFTRV9VUkwiLCJjcmVhdGVkX2F0IiwiZXhwaXJlX2F0IiwidW5saW1pdGVkX29ubGluZV9jb25zdWx0YXRpb24iLCJwcmlvcml0eV9xdWV1ZSIsIk9iamVjdCIsImVudHJpZXMiLCJmZWF0dXJlcyIsIm1hcCIsImtleSIsInZhbHVlIiwiY291bnQiLCJpZCIsIm5hbWUiLCJzZXRTdGF0ZSIsIndpZHRoIiwibWFyZ2luVG9wIiwiZSIsImhpc3RvcnkiLCJwdXNoIiwicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwicHJpbWVDYXJlU3VjY2VzcyIsImNvbXBvbmVudERpZE1vdW50IiwicGFyc2VkIiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsInJldHJpZXZlQ2FyZURldGFpbHMiLCJ1c2VyX3BsYW4iLCJyZXNwIiwid2luZG93Iiwic2Nyb2xsVG8iLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBE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U0FGRDtBQUdBLFlBQUlDLE1BQUosRUFBWTtBQUNSQSxtQkFBT0MsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQjtBQUNIO0FBQ0o7O0FBRUQvQyxhQUFTOztBQUVMLGVBQ0ksOEJBQUMsOEJBQUQsZUFBMEIsS0FBS0QsS0FBL0IsSUFBc0MsTUFBTSxLQUFLSyxLQUFMLENBQVdTLElBQXZELElBREo7QUFHSDtBQXhCMEM7O0FBMkIvQyxNQUFNbUMsa0JBQW1CNUMsS0FBRCxJQUFXO0FBQy9CLFdBQU8sRUFBUDtBQUdILENBSkQ7O0FBTUEsTUFBTTZDLHFCQUFzQkMsUUFBRCxJQUFjO0FBQ3JDLFdBQU87QUFDSFAsNkJBQW9CLENBQUNRLFlBQUQsRUFBZUMsRUFBZixLQUFzQkYsU0FBUyxnQ0FBb0JDLFlBQXBCLEVBQWlDQyxFQUFqQyxDQUFUO0FBRHZDLEtBQVA7QUFHSCxDQUpEOztrQkFPZSx5QkFBUUosZUFBUixFQUF5QkMsa0JBQXpCLEVBQTZDWixnQkFBN0MsQyIsImZpbGUiOiI4Ny5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBMb2FkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NUeXBlIHx8IFwibG9hZGVyQ2lyY3VsYXJcIn0gPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHAtbG9hZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlGcmFtZVBvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMTBcIj5SZWRpcmVjdGluZyB5b3UgdG8gUGhhcm1lYXN5IHdlYnNpdGUuLi48L3A+IDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlclxuIiwiaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMZWZ0QmFyIGZyb20gJy4uL0xlZnRCYXInXG5pbXBvcnQgUmlnaHRCYXIgZnJvbSAnLi4vUmlnaHRCYXInXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vSG9tZS9mb290ZXInXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvTG9hZGVyJ1xuXG5jbGFzcyBQcmltZUNhcmVTdWNjZXNzVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjaGF0RXJyb3I6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXREYXRlKHVuaXhfZGF0ZSl7XG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUodW5peF9kYXRlKVxuICAgICAgICBsZXQgbmV3RGF0ZT0gZGF0ZS50b0RhdGVTdHJpbmcoKVxuICAgICAgICByZXR1cm4gbmV3RGF0ZVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIGlmKHRoaXMucHJvcHMuZGF0YSl7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiA1NCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRhaW5lci10b3AtbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGVmdEJhciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNvbC1sZy03IGNlbnRlci1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZUZpbmFsc2NyZWVuQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmVEb2N3aXRoQmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmVEb2N3aXRoQmdsb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZUxvZ2lJbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9sb2dvLWNhcmUtd2hpdGUucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZURlY3BhcmFjb25nXCI+Q29uZ3JhdHVsYXRpb25zITwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJlRGVjcGFyYXN1YlwiPllvdXIgRG9jcHJpbWUgY2FyZSBtZW1iZXJzaGlwIGlzIGFjdGl2ZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJlRGVjcGFyYWRhdGVcIj57dGhpcy5nZXREYXRlKHRoaXMucHJvcHMuZGF0YS5jcmVhdGVkX2F0KX0gLSB7dGhpcy5nZXREYXRlKHRoaXMucHJvcHMuZGF0YS5leHBpcmVfYXQpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJlVGhhbmt5b3VDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZVRoYW5reW91Q29udGFpbmVyQ2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJVbGNhcmVMaXN0aW5nV2l0aFNpZGUgbXQtcm12XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGF0YSAmJiB0aGlzLnByb3BzLmRhdGEudW5saW1pdGVkX29ubGluZV9jb25zdWx0YXRpb24/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNhcmVMaXN0aUxpXCI+PHAgY2xhc3NOYW1lPVwiY2FyZUxpc3RpblwiPkZyZWUgVW5saW1pdGVkIE9ubGluZSBDb25zdWx0YXRpb24gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5PdXIgb25saW5lIGNvbnN1bHRhdGlvbiB0aW1pbmdzIGFyZSBmcm9tIDg6MDAgQU0gdG8gNTowMCBQTTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRhdGEgJiYgdGhpcy5wcm9wcy5kYXRhLnByaW9yaXR5X3F1ZXVlP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjYXJlTGlzdGlMaVwiPjxwIGNsYXNzTmFtZT1cImNhcmVMaXN0aW5cIj5Qcmlvcml0eSBRdWV1ZSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk5vIHdhaXRpbmcgdGltZSE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kYXRhP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuZGF0YS5mZWF0dXJlcykubWFwKGZ1bmN0aW9uIChba2V5LCB2YWx1ZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUuY291bnQgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17dmFsdWUuaWR9IGNsYXNzTmFtZT1cImNhcmVMaXN0aUxpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJlTGlzdGluXCI+e3ZhbHVlLm5hbWV9IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntgTWVtZWJlciBjYW4gYXZhaWwgdGhpcyBvZmZlciAke3ZhbHVlLmNvdW50ID09Mj8ndHdpY2UnOidvbmNlJ30gaW4gYSB5ZWFyYH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8cCBjbGFzc05hbWU9XCJjYXJlQXZsUFwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvdGVjLnN2Z1wifS8+e3ZhbHVlLmNvdW50fSBBdmFpbGFibGU8L3A+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBtcmItMTBcIiBvbkNsaWNrPXsoKT0+dGhpcy5zZXRTdGF0ZSh7Y2hhdEVycm9yOiB0cnVlfSkgfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjc3RtLWJvb2stYnRuIGZ3LTUwMFwiIHN0eWxlPXt7IHdpZHRoOiAxMDAsIG1hcmdpblRvcDogMCB9fT5DaGF0IG5vdzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jaGF0RXJyb3I/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1ydGwgY2hhdC1lcnIgbXJiLTE1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEdWUgdG8gQ292aWRhLTE5IG91dGJyZWFrLCBvdXIgY2hhdCBzZXJ2aWNlcyBhcmUgdGVtcG9yYXJpbHkgc3VzcGVuZGVkLiBXZSBhcmUgc29ycnkgZm9yIHRoZSBpbmNvbnZlbmllbmNlIGNhdXNlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmVUaGFua3BhcmFcIj5UaGFua3MgZm9yIGNob29zaW5nIDxhIG9uQ2xpY2s9eyhlKSA9PnRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJyl9PmRvY3ByaW1lLmNvbTwvYT48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJpZ2h0QmFyIGNsYXNzTmFtZT1cImNvbC1tZC01IG1iLTNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDU0IH19PlxuICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciAvPlxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGFpbmVyLXRvcC1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8TG9hZGVyIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFByaW1lQ2FyZVN1Y2Nlc3NWaWV3XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHtyZXRyaWV2ZUNhcmVEZXRhaWxzIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcblxuaW1wb3J0IFByaW1lQ2FyZVN1Y2Nlc3NWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9wcmltZUNhcmUvcHJpbWVDYXJlU3VjY2Vzc1ZpZXcuanMnXG5cbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cbmNsYXNzIHByaW1lQ2FyZVN1Y2Nlc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlPXtcbiAgICAgICAgICAgIGRhdGE6JydcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcblxuICAgICAgICB0aGlzLnByb3BzLnJldHJpZXZlQ2FyZURldGFpbHMocGFyc2VkLnVzZXJfcGxhbiwocmVzcCk9PntcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6cmVzcH0pXG4gICAgICAgIH0pXG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UHJpbWVDYXJlU3VjY2Vzc1ZpZXcgey4uLnRoaXMucHJvcHN9IGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0vPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcblxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmV0cmlldmVDYXJlRGV0YWlsczooc2VsZWN0ZWRQbGFuLCBjYikgPT4gZGlzcGF0Y2gocmV0cmlldmVDYXJlRGV0YWlscyhzZWxlY3RlZFBsYW4sY2IpKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShwcmltZUNhcmVTdWNjZXNzKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=