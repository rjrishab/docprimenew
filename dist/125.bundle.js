(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[125],{

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

/***/ "./dev/js/containers/commons/agentLogin.js":
/*!*************************************************!*\
  !*** ./dev/js/containers/commons/agentLogin.js ***!
  \*************************************************/
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

var _Loader = __webpack_require__(/*! ../../components/commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var AgentLogin = function (_React$Component) {
    _inherits(AgentLogin, _React$Component);

    function AgentLogin(props) {
        _classCallCheck(this, AgentLogin);

        return _possibleConstructorReturn(this, (AgentLogin.__proto__ || Object.getPrototypeOf(AgentLogin)).call(this, props));
    }

    _createClass(AgentLogin, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var parsed = queryString.parse(this.props.location.search);
            if (parsed.token) {
                this.props.agentLogin(parsed.token, function () {
                    setTimeout(function () {
                        _this2.props.history.push('/');
                    }, 100);
                });
            } else {
                this.props.history.push('/');
            }
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(_Loader2.default, null);
        }
    }]);

    return AgentLogin;
}(_react2.default.Component);

AgentLogin.contextTypes = {
    router: function router() {
        return null;
    }
};


var mapStateToProps = function mapStateToProps(state) {
    _objectDestructuringEmpty(state.AUTH);

    return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        agentLogin: function agentLogin(token, cb) {
            return dispatch((0, _index.agentLogin)(token, cb));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AgentLogin);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvY29tbW9ucy9hZ2VudExvZ2luLmpzIl0sIm5hbWVzIjpbIkxvYWRlciIsInByb3BzIiwiY2xhc3NUeXBlIiwiaUZyYW1lUG9wdXAiLCJSZWFjdCIsIkNvbXBvbmVudCIsInF1ZXJ5U3RyaW5nIiwicmVxdWlyZSIsIkFnZW50TG9naW4iLCJwYXJzZWQiLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwidG9rZW4iLCJhZ2VudExvZ2luIiwic2V0VGltZW91dCIsImhpc3RvcnkiLCJwdXNoIiwiY29udGV4dFR5cGVzIiwicm91dGVyIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJBVVRIIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFDRixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLCtHQUNUQSxLQURTO0FBRWxCOzs7O2lDQUVROztBQUVMLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFXLEtBQUtBLEtBQUwsQ0FBV0MsU0FBWCxJQUF3QixnQkFBeEM7QUFDSSx1REFBSyxXQUFVLFdBQWYsR0FESjtBQUdRLHFCQUFLRCxLQUFMLENBQVdFLFdBQVgsR0FDSTtBQUFBO0FBQUEsc0JBQUcsV0FBVSxlQUFiO0FBQUE7QUFBQSxpQkFESixHQUMrRTtBQUp2RixhQURKO0FBU0g7Ozs7RUFoQmdCQyxnQkFBTUMsUzs7a0JBbUJaTCxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQmY7Ozs7OztrQkFFZUEsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmY7Ozs7QUFDQTs7QUFHQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFIQSxJQUFNTSxjQUFjQyxtQkFBT0EsQ0FBQywwREFBUixDQUFwQjs7SUFLTUMsVTs7O0FBQ0Ysd0JBQVlQLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx1SEFDVEEsS0FEUztBQUVsQjs7Ozs0Q0FNbUI7QUFBQTs7QUFDaEIsZ0JBQU1RLFNBQVNILFlBQVlJLEtBQVosQ0FBa0IsS0FBS1QsS0FBTCxDQUFXVSxRQUFYLENBQW9CQyxNQUF0QyxDQUFmO0FBQ0EsZ0JBQUlILE9BQU9JLEtBQVgsRUFBa0I7QUFDZCxxQkFBS1osS0FBTCxDQUFXYSxVQUFYLENBQXNCTCxPQUFPSSxLQUE3QixFQUFvQyxZQUFNO0FBQ3RDRSwrQkFBVyxZQUFNO0FBQ2IsK0JBQUtkLEtBQUwsQ0FBV2UsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0IsR0FBeEI7QUFDSCxxQkFGRCxFQUVHLEdBRkg7QUFHSCxpQkFKRDtBQUtILGFBTkQsTUFNTztBQUNILHFCQUFLaEIsS0FBTCxDQUFXZSxPQUFYLENBQW1CQyxJQUFuQixDQUF3QixHQUF4QjtBQUNIO0FBQ0o7OztpQ0FFUTs7QUFFTCxtQkFDSSw4QkFBQyxnQkFBRCxPQURKO0FBR0g7Ozs7RUEzQm9CYixnQkFBTUMsUzs7QUFBekJHLFUsQ0FLS1UsWSxHQUFlO0FBQ2xCQyxZQUFRO0FBQUEsZUFBTSxJQUFOO0FBQUE7QUFEVSxDOzs7QUF5QjFCLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsOEJBRzNCQSxNQUFNQyxJQUhxQjs7QUFLL0IsV0FBTyxFQUFQO0FBR0gsQ0FSRDs7QUFVQSxJQUFNQyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDckMsV0FBTztBQUNIVixvQkFBWSxvQkFBQ0QsS0FBRCxFQUFRWSxFQUFSO0FBQUEsbUJBQWVELFNBQVMsdUJBQVdYLEtBQVgsRUFBa0JZLEVBQWxCLENBQVQsQ0FBZjtBQUFBO0FBRFQsS0FBUDtBQUdILENBSkQ7O2tCQU9lLHlCQUFRTCxlQUFSLEVBQXlCRyxrQkFBekIsRUFBNkNmLFVBQTdDLEMiLCJmaWxlIjoiMTI1LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIExvYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc1R5cGUgfHwgXCJsb2FkZXJDaXJjdWxhclwifSA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcC1sb2FkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaUZyYW1lUG9wdXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0xMFwiPlJlZGlyZWN0aW5nIHlvdSB0byBQaGFybWVhc3kgd2Vic2l0ZS4uLjwvcD4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyXG4iLCJpbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cbmltcG9ydCB7IGFnZW50TG9naW4gfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvTG9hZGVyJ1xuXG5jbGFzcyBBZ2VudExvZ2luIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgICByb3V0ZXI6ICgpID0+IG51bGxcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGlmIChwYXJzZWQudG9rZW4pIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYWdlbnRMb2dpbihwYXJzZWQudG9rZW4sICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nKVxuICAgICAgICAgICAgICAgIH0sIDEwMClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIGxldCB7XG5cbiAgICB9ID0gc3RhdGUuQVVUSFxuXG4gICAgcmV0dXJuIHtcblxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWdlbnRMb2dpbjogKHRva2VuLCBjYikgPT4gZGlzcGF0Y2goYWdlbnRMb2dpbih0b2tlbiwgY2IpKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBZ2VudExvZ2luKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=