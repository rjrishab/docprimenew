exports.ids = [97];
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

/***/ "./dev/js/components/commons/commonTnC.js":
/*!************************************************!*\
  !*** ./dev/js/components/commons/commonTnC.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _Loader = __webpack_require__(/*! ../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _DesktopProfileHeader = __webpack_require__(/*! ./DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _LeftBar = __webpack_require__(/*! ./LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _footer = __webpack_require__(/*! ./Home/footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CommonTnC extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        let dataParams = {
            id: this.props.match.params.id
        };
        this.props.getBannerInfo(dataParams, (err, resp) => {
            if (resp && resp.length) {
                resp = resp.filter(x => x.id == dataParams.id);
                this.setState({ data: resp });
            }
        });
    }

    render() {

        return _react2.default.createElement(
            'div',
            { className: 'profile-body-wrap sitemap-body' },
            _react2.default.createElement(_DesktopProfileHeader2.default, null),
            _react2.default.createElement('div', { className: 'sub-header d-none d-lg-block' }),
            _react2.default.createElement(
                'section',
                { className: 'container about-container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12 paypal-dtls-cont' },
                        this.state.data && this.state.data.length ? _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: this.state.data[0].body } }) : _react2.default.createElement(_Loader2.default, null)
                    )
                )
            ),
            _react2.default.createElement(_footer2.default, null)
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        getBannerInfo: (dataParams, cb) => dispatch((0, _index.getBannerInfo)(dataParams, cb))
    };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CommonTnC);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9jb21tb25UbkMuanMiXSwibmFtZXMiOlsiTG9hZGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIiwiY2xhc3NUeXBlIiwiaUZyYW1lUG9wdXAiLCJDb21tb25UbkMiLCJzdGF0ZSIsImRhdGEiLCJjb21wb25lbnREaWRNb3VudCIsImRhdGFQYXJhbXMiLCJpZCIsIm1hdGNoIiwicGFyYW1zIiwiZ2V0QmFubmVySW5mbyIsImVyciIsInJlc3AiLCJsZW5ndGgiLCJmaWx0ZXIiLCJ4Iiwic2V0U3RhdGUiLCJfX2h0bWwiLCJib2R5IiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsTUFBTUEsTUFBTixTQUFxQkMsZ0JBQU1DLFNBQTNCLENBQXFDO0FBQ2pDQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDSDs7QUFFREMsYUFBUzs7QUFFTCxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVcsS0FBS0QsS0FBTCxDQUFXRSxTQUFYLElBQXdCLGdCQUF4QztBQUNJLG1EQUFLLFdBQVUsV0FBZixHQURKO0FBR1EsaUJBQUtGLEtBQUwsQ0FBV0csV0FBWCxHQUNJO0FBQUE7QUFBQSxrQkFBRyxXQUFVLGVBQWI7QUFBQTtBQUFBLGFBREosR0FDK0U7QUFKdkYsU0FESjtBQVNIO0FBaEJnQzs7a0JBbUJ0QlAsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJmOzs7Ozs7a0JBRWVBLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxNQUFNUSxTQUFOLFNBQXdCUCxnQkFBTUMsU0FBOUIsQ0FBdUM7QUFDbkNDLGdCQUFZQyxLQUFaLEVBQWtCO0FBQ2QsY0FBTUEsS0FBTjtBQUNBLGFBQUtLLEtBQUwsR0FBYTtBQUNUQyxrQkFBTTtBQURHLFNBQWI7QUFHSDtBQUNEQyx3QkFBbUI7QUFDZixZQUFJQyxhQUFhO0FBQ2JDLGdCQUFJLEtBQUtULEtBQUwsQ0FBV1UsS0FBWCxDQUFpQkMsTUFBakIsQ0FBd0JGO0FBRGYsU0FBakI7QUFHQSxhQUFLVCxLQUFMLENBQVdZLGFBQVgsQ0FBeUJKLFVBQXpCLEVBQXFDLENBQUNLLEdBQUQsRUFBTUMsSUFBTixLQUFhO0FBQzlDLGdCQUFHQSxRQUFRQSxLQUFLQyxNQUFoQixFQUF1QjtBQUNuQkQsdUJBQU9BLEtBQUtFLE1BQUwsQ0FBWUMsS0FBR0EsRUFBRVIsRUFBRixJQUFRRCxXQUFXQyxFQUFsQyxDQUFQO0FBQ0EscUJBQUtTLFFBQUwsQ0FBYyxFQUFDWixNQUFNUSxJQUFQLEVBQWQ7QUFDSDtBQUNKLFNBTEQ7QUFNSDs7QUFFRGIsYUFBUTs7QUFFSixlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsZ0NBQWY7QUFDSSwwQ0FBQyw4QkFBRCxPQURKO0FBRUksbURBQUssV0FBVSw4QkFBZixHQUZKO0FBR0k7QUFBQTtBQUFBLGtCQUFTLFdBQVUsMkJBQW5CO0FBQ0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsS0FBZjtBQUNJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLHlCQUFmO0FBRVEsNkJBQUtJLEtBQUwsQ0FBV0MsSUFBWCxJQUFtQixLQUFLRCxLQUFMLENBQVdDLElBQVgsQ0FBZ0JTLE1BQW5DLEdBQ0EsdUNBQUsseUJBQXlCLEVBQUVJLFFBQVEsS0FBS2QsS0FBTCxDQUFXQyxJQUFYLENBQWdCLENBQWhCLEVBQW1CYyxJQUE3QixFQUE5QixHQURBLEdBRUMsOEJBQUMsZ0JBQUQ7QUFKVDtBQURKO0FBREosYUFISjtBQWVJLDBDQUFDLGdCQUFEO0FBZkosU0FESjtBQW1CSDtBQXhDa0M7O0FBMkN2QyxNQUFNQyxrQkFBbUJoQixLQUFELElBQVM7QUFDN0IsV0FBTyxFQUFQO0FBR0gsQ0FKRDs7QUFNQSxNQUFNaUIscUJBQXNCQyxRQUFELElBQWE7QUFDcEMsV0FBTTtBQUNGWCx1QkFBZSxDQUFDSixVQUFELEVBQWFnQixFQUFiLEtBQW9CRCxTQUFTLDBCQUFjZixVQUFkLEVBQTBCZ0IsRUFBMUIsQ0FBVDtBQURqQyxLQUFOO0FBR0gsQ0FKRDtrQkFLZSx5QkFBUUgsZUFBUixFQUF5QkMsa0JBQXpCLEVBQTZDbEIsU0FBN0MsQyIsImZpbGUiOiI5Ny5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBMb2FkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NUeXBlIHx8IFwibG9hZGVyQ2lyY3VsYXJcIn0gPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHAtbG9hZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlGcmFtZVBvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMTBcIj5SZWRpcmVjdGluZyB5b3UgdG8gUGhhcm1lYXN5IHdlYnNpdGUuLi48L3A+IDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlclxuIiwiaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGdldEJhbm5lckluZm8gfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9jb21tb25zL0xvYWRlcidcblxuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBMZWZ0QmFyIGZyb20gJy4vTGVmdEJhcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Ib21lL2Zvb3RlcidcblxuY2xhc3MgQ29tbW9uVG5DIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBkYXRhOiBbXVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIGxldCBkYXRhUGFyYW1zID0ge1xuICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5nZXRCYW5uZXJJbmZvKGRhdGFQYXJhbXMsIChlcnIsIHJlc3ApPT57XG4gICAgICAgICAgICBpZihyZXNwICYmIHJlc3AubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICByZXNwID0gcmVzcC5maWx0ZXIoeD0+eC5pZCA9PSBkYXRhUGFyYW1zLmlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOiByZXNwfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpe1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwIHNpdGVtYXAtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItaGVhZGVyIGQtbm9uZSBkLWxnLWJsb2NrXCIgLz5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgYWJvdXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBwYXlwYWwtZHRscy1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGEgJiYgdGhpcy5zdGF0ZS5kYXRhLmxlbmd0aD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRoaXMuc3RhdGUuZGF0YVswXS5ib2R5IH19PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PExvYWRlci8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpPT57XG4gICAgcmV0dXJuIHtcblxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PntcbiAgICByZXR1cm57XG4gICAgICAgIGdldEJhbm5lckluZm86IChkYXRhUGFyYW1zLCBjYikgPT4gZGlzcGF0Y2goZ2V0QmFubmVySW5mbyhkYXRhUGFyYW1zLCBjYikpXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ29tbW9uVG5DKTtcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9