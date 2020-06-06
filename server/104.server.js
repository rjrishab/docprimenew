exports.ids = [104];
exports.modules = {

/***/ "./dev/js/components/commons/notFound/index.js":
/*!*****************************************************!*\
  !*** ./dev/js/components/commons/notFound/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _notFound = __webpack_require__(/*! ./notFound */ "./dev/js/components/commons/notFound/notFound.js");

var _notFound2 = _interopRequireDefault(_notFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _notFound2.default;

/***/ }),

/***/ "./dev/js/components/commons/notFound/notFound.js":
/*!********************************************************!*\
  !*** ./dev/js/components/commons/notFound/notFound.js ***!
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

class NotFound extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return _react2.default.createElement(
            "div",
            { className: "profile-body-wrap" },
            _react2.default.createElement(
                "header",
                { className: "profile-header", style: { display: 'block' } },
                _react2.default.createElement(
                    "div",
                    { className: "smiley-img-div" },
                    _react2.default.createElement("img", { src: "/assets" + "/img/customer-icons/smiley.png" })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "container" },
                    _react2.default.createElement(
                        "div",
                        { className: "row header-row" },
                        _react2.default.createElement(
                            "div",
                            { className: "col-12 text-center logo-icon-div" },
                            _react2.default.createElement(
                                "a",
                                { href: "javascript:;", onClick: () => {
                                        this.props.history.push('/');
                                    } },
                                _react2.default.createElement("img", { src: "/assets" + "/img/doc-prime-logo.png", className: "logo-icon" })
                            )
                        )
                    )
                )
            ),
            _react2.default.createElement("div", { className: "subheader" }),
            _react2.default.createElement(
                "div",
                { className: "container" },
                _react2.default.createElement(
                    "div",
                    { className: "row" },
                    _react2.default.createElement(
                        "div",
                        { className: "col-12 col-md-10 offset-md-1" },
                        _react2.default.createElement(
                            "div",
                            { className: "error-widget text-center" },
                            _react2.default.createElement(
                                "p",
                                { className: "error-head fw-500" },
                                "404"
                            ),
                            _react2.default.createElement("img", { src: "/assets" + "/img/icons/error.png" }),
                            _react2.default.createElement(
                                "p",
                                { className: "error-text fw-500" },
                                "Page not found !"
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "error-link" },
                                "Go to ",
                                _react2.default.createElement(
                                    "a",
                                    { href: "javascript:;", onClick: () => {
                                            this.props.history.push('/');
                                        } },
                                    "docprime homepage"
                                )
                            )
                        )
                    )
                )
            )
        );
    }
}

exports.default = NotFound;

/***/ }),

/***/ "./dev/js/containers/commons/404.js":
/*!******************************************!*\
  !*** ./dev/js/containers/commons/404.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

__webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _notFound = __webpack_require__(/*! ../../components/commons/notFound */ "./dev/js/components/commons/notFound/index.js");

var _notFound2 = _interopRequireDefault(_notFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class NotFound extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {

        return _react2.default.createElement(_notFound2.default, this.props);
    }
}

NotFound.contextTypes = {
    router: () => null
};
const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NotFound);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL25vdEZvdW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvbm90Rm91bmQvbm90Rm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvY29tbW9ucy80MDQuanMiXSwibmFtZXMiOlsiTm90Rm91bmRWaWV3IiwiTm90Rm91bmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJyZW5kZXIiLCJkaXNwbGF5IiwiQVNTRVRTX0JBU0VfVVJMIiwiaGlzdG9yeSIsInB1c2giLCJjb21wb25lbnREaWRNb3VudCIsImNvbnRleHRUeXBlcyIsInJvdXRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztrQkFFZUEsa0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7Ozs7QUFFQSxNQUFNQyxRQUFOLFNBQXVCQyxnQkFBTUMsU0FBN0IsQ0FBdUM7QUFDbkNDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjtBQUNIOztBQUVEQyxhQUFTOztBQUVMLGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSxtQkFBZjtBQUNJO0FBQUE7QUFBQSxrQkFBUSxXQUFVLGdCQUFsQixFQUFtQyxPQUFPLEVBQUVDLFNBQVMsT0FBWCxFQUExQztBQUNJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGdCQUFmO0FBQ0ksMkRBQUssS0FBS0MsU0FBZUEsR0FBRyxnQ0FBNUI7QUFESixpQkFESjtBQUlJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLFdBQWY7QUFDSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxnQkFBZjtBQUNJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLGtDQUFmO0FBQ0k7QUFBQTtBQUFBLGtDQUFHLE1BQUssY0FBUixFQUF1QixTQUFTLE1BQU07QUFDbEMsNkNBQUtILEtBQUwsQ0FBV0ksT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0IsR0FBeEI7QUFDSCxxQ0FGRDtBQUVHLHVFQUFLLEtBQUtGLFNBQWVBLEdBQUcseUJBQTVCLEVBQXVELFdBQVUsV0FBakU7QUFGSDtBQURKO0FBREo7QUFESjtBQUpKLGFBREo7QUFlSSxtREFBSyxXQUFVLFdBQWYsR0FmSjtBQWdCSTtBQUFBO0FBQUEsa0JBQUssV0FBVSxXQUFmO0FBQ0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsS0FBZjtBQUNJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLDhCQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFLLFdBQVUsMEJBQWY7QUFDSTtBQUFBO0FBQUEsa0NBQUcsV0FBVSxtQkFBYjtBQUFBO0FBQUEsNkJBREo7QUFFSSxtRUFBSyxLQUFLQSxTQUFlQSxHQUFHLHNCQUE1QixHQUZKO0FBR0k7QUFBQTtBQUFBLGtDQUFHLFdBQVUsbUJBQWI7QUFBQTtBQUFBLDZCQUhKO0FBSUk7QUFBQTtBQUFBLGtDQUFHLFdBQVUsWUFBYjtBQUFBO0FBQWdDO0FBQUE7QUFBQSxzQ0FBRyxNQUFLLGNBQVIsRUFBdUIsU0FBUyxNQUFNO0FBQ2xFLGlEQUFLSCxLQUFMLENBQVdJLE9BQVgsQ0FBbUJDLElBQW5CLENBQXdCLEdBQXhCO0FBQ0gseUNBRitCO0FBQUE7QUFBQTtBQUFoQztBQUpKO0FBREo7QUFESjtBQURKO0FBaEJKLFNBREo7QUFpQ0g7QUF4Q2tDOztrQkE0Q3hCVCxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Q2Y7Ozs7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7O0FBRUEsTUFBTUEsUUFBTixTQUF1QkMsZ0JBQU1DLFNBQTdCLENBQXVDO0FBQ25DQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDSDs7QUFNRE0sd0JBQW9CLENBRW5COztBQUVETCxhQUFTOztBQUVMLGVBQ0ksOEJBQUMsa0JBQUQsRUFBa0IsS0FBS0QsS0FBdkIsQ0FESjtBQUdIO0FBbEJrQzs7QUFBakNKLFEsQ0FLS1csWSxHQUFlO0FBQ2xCQyxZQUFRLE1BQU07QUFESSxDO0FBZ0IxQixNQUFNQyxrQkFBbUJDLEtBQUQsSUFBVztBQUMvQixXQUFPLEVBQVA7QUFHSCxDQUpEOztBQU1BLE1BQU1DLHFCQUFzQkMsUUFBRCxJQUFjO0FBQ3JDLFdBQU8sRUFBUDtBQUdILENBSkQ7O2tCQU9lLHlCQUFRSCxlQUFSLEVBQXlCRSxrQkFBekIsRUFBNkNmLFFBQTdDLEMiLCJmaWxlIjoiMTA0LnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb3RGb3VuZFZpZXcgZnJvbSAnLi9ub3RGb3VuZCdcblxuZXhwb3J0IGRlZmF1bHQgTm90Rm91bmRWaWV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgTm90Rm91bmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicHJvZmlsZS1oZWFkZXJcIiBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtaWxleS1pbWctZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3NtaWxleS5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBoZWFkZXItcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgdGV4dC1jZW50ZXIgbG9nby1pY29uLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2RvYy1wcmltZS1sb2dvLnBuZ1wifSBjbGFzc05hbWU9XCJsb2dvLWljb25cIiAvPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YmhlYWRlclwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC0xMCBvZmZzZXQtbWQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3Itd2lkZ2V0IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLWhlYWQgZnctNTAwXCI+NDA0PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2ljb25zL2Vycm9yLnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvci10ZXh0IGZ3LTUwMFwiPlBhZ2Ugbm90IGZvdW5kICE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLWxpbmtcIj5HbyB0byA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5kb2NwcmltZSBob21lcGFnZTwvYT48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTm90Rm91bmRcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5cbmltcG9ydCBOb3RGb3VuZFZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL25vdEZvdW5kJ1xuXG5jbGFzcyBOb3RGb3VuZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgcm91dGVyOiAoKSA9PiBudWxsXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxOb3RGb3VuZFZpZXcgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4ge1xuXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTm90Rm91bmQpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==