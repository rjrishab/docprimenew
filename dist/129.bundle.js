(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[129],{

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFound = function (_React$Component) {
    _inherits(NotFound, _React$Component);

    function NotFound(props) {
        _classCallCheck(this, NotFound);

        return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).call(this, props));
    }

    _createClass(NotFound, [{
        key: "render",
        value: function render() {
            var _this2 = this;

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
                                    { href: "javascript:;", onClick: function onClick() {
                                            _this2.props.history.push('/');
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
                                        { href: "javascript:;", onClick: function onClick() {
                                                _this2.props.history.push('/');
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
    }]);

    return NotFound;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

__webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _notFound = __webpack_require__(/*! ../../components/commons/notFound */ "./dev/js/components/commons/notFound/index.js");

var _notFound2 = _interopRequireDefault(_notFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFound = function (_React$Component) {
    _inherits(NotFound, _React$Component);

    function NotFound(props) {
        _classCallCheck(this, NotFound);

        return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).call(this, props));
    }

    _createClass(NotFound, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(_notFound2.default, this.props);
        }
    }]);

    return NotFound;
}(_react2.default.Component);

NotFound.contextTypes = {
    router: function router() {
        return null;
    }
};


var mapStateToProps = function mapStateToProps(state) {
    return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NotFound);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL25vdEZvdW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvbm90Rm91bmQvbm90Rm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvY29tbW9ucy80MDQuanMiXSwibmFtZXMiOlsiTm90Rm91bmRWaWV3IiwiTm90Rm91bmQiLCJwcm9wcyIsImRpc3BsYXkiLCJBU1NFVFNfQkFTRV9VUkwiLCJoaXN0b3J5IiwicHVzaCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29udGV4dFR5cGVzIiwicm91dGVyIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7a0JBRWVBLGtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7Ozs7Ozs7Ozs7SUFFTUMsUTs7O0FBQ0Ysc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxtSEFDVEEsS0FEUztBQUVsQjs7OztpQ0FFUTtBQUFBOztBQUVMLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLG1CQUFmO0FBQ0k7QUFBQTtBQUFBLHNCQUFRLFdBQVUsZ0JBQWxCLEVBQW1DLE9BQU8sRUFBRUMsU0FBUyxPQUFYLEVBQTFDO0FBQ0k7QUFBQTtBQUFBLDBCQUFLLFdBQVUsZ0JBQWY7QUFDSSwrREFBSyxLQUFLQyxTQUFlQSxHQUFHLGdDQUE1QjtBQURKLHFCQURKO0FBSUk7QUFBQTtBQUFBLDBCQUFLLFdBQVUsV0FBZjtBQUNJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLGdCQUFmO0FBQ0k7QUFBQTtBQUFBLGtDQUFLLFdBQVUsa0NBQWY7QUFDSTtBQUFBO0FBQUEsc0NBQUcsTUFBSyxjQUFSLEVBQXVCLFNBQVMsbUJBQU07QUFDbEMsbURBQUtGLEtBQUwsQ0FBV0csT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0IsR0FBeEI7QUFDSCx5Q0FGRDtBQUVHLDJFQUFLLEtBQUtGLFNBQWVBLEdBQUcseUJBQTVCLEVBQXVELFdBQVUsV0FBakU7QUFGSDtBQURKO0FBREo7QUFESjtBQUpKLGlCQURKO0FBZUksdURBQUssV0FBVSxXQUFmLEdBZko7QUFnQkk7QUFBQTtBQUFBLHNCQUFLLFdBQVUsV0FBZjtBQUNJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLEtBQWY7QUFDSTtBQUFBO0FBQUEsOEJBQUssV0FBVSw4QkFBZjtBQUNJO0FBQUE7QUFBQSxrQ0FBSyxXQUFVLDBCQUFmO0FBQ0k7QUFBQTtBQUFBLHNDQUFHLFdBQVUsbUJBQWI7QUFBQTtBQUFBLGlDQURKO0FBRUksdUVBQUssS0FBS0EsU0FBZUEsR0FBRyxzQkFBNUIsR0FGSjtBQUdJO0FBQUE7QUFBQSxzQ0FBRyxXQUFVLG1CQUFiO0FBQUE7QUFBQSxpQ0FISjtBQUlJO0FBQUE7QUFBQSxzQ0FBRyxXQUFVLFlBQWI7QUFBQTtBQUFnQztBQUFBO0FBQUEsMENBQUcsTUFBSyxjQUFSLEVBQXVCLFNBQVMsbUJBQU07QUFDbEUsdURBQUtGLEtBQUwsQ0FBV0csT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0IsR0FBeEI7QUFDSCw2Q0FGK0I7QUFBQTtBQUFBO0FBQWhDO0FBSko7QUFESjtBQURKO0FBREo7QUFoQkosYUFESjtBQWlDSDs7OztFQXhDa0JDLGdCQUFNQyxTOztrQkE0Q2RQLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNmOzs7O0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7OztJQUVNQSxROzs7QUFDRixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG1IQUNUQSxLQURTO0FBRWxCOzs7OzRDQU1tQixDQUVuQjs7O2lDQUVROztBQUVMLG1CQUNJLDhCQUFDLGtCQUFELEVBQWtCLEtBQUtBLEtBQXZCLENBREo7QUFHSDs7OztFQWxCa0JLLGdCQUFNQyxTOztBQUF2QlAsUSxDQUtLUSxZLEdBQWU7QUFDbEJDLFlBQVE7QUFBQSxlQUFNLElBQU47QUFBQTtBQURVLEM7OztBQWdCMUIsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDL0IsV0FBTyxFQUFQO0FBR0gsQ0FKRDs7QUFNQSxJQUFNQyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDckMsV0FBTyxFQUFQO0FBR0gsQ0FKRDs7a0JBT2UseUJBQVFILGVBQVIsRUFBeUJFLGtCQUF6QixFQUE2Q1osUUFBN0MsQyIsImZpbGUiOiIxMjkuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vdEZvdW5kVmlldyBmcm9tICcuL25vdEZvdW5kJ1xuXG5leHBvcnQgZGVmYXVsdCBOb3RGb3VuZFZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBOb3RGb3VuZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJwcm9maWxlLWhlYWRlclwiIHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21pbGV5LWltZy1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvc21pbGV5LnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGhlYWRlci1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiB0ZXh0LWNlbnRlciBsb2dvLWljb24tZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvZG9jLXByaW1lLWxvZ28ucG5nXCJ9IGNsYXNzTmFtZT1cImxvZ28taWNvblwiIC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViaGVhZGVyXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTEwIG9mZnNldC1tZC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci13aWRnZXQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItaGVhZCBmdy01MDBcIj40MDQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaWNvbnMvZXJyb3IucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHQgZnctNTAwXCI+UGFnZSBub3QgZm91bmQgITwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItbGlua1wiPkdvIHRvIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PmRvY3ByaW1lIGhvbWVwYWdlPC9hPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBOb3RGb3VuZFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcblxuaW1wb3J0IE5vdEZvdW5kVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvbm90Rm91bmQnXG5cbmNsYXNzIE5vdEZvdW5kIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgICByb3V0ZXI6ICgpID0+IG51bGxcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE5vdEZvdW5kVmlldyB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG5cbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIFxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShOb3RGb3VuZCk7XG4iXSwic291cmNlUm9vdCI6IiJ9