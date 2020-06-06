(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[144],{

/***/ "./dev/js/components/commons/chatRatings.js":
/*!**************************************************!*\
  !*** ./dev/js/components/commons/chatRatings.js ***!
  \**************************************************/
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var ChatRatingView = function (_React$Component) {
    _inherits(ChatRatingView, _React$Component);

    function ChatRatingView(props) {
        _classCallCheck(this, ChatRatingView);

        var _this = _possibleConstructorReturn(this, (ChatRatingView.__proto__ || Object.getPrototypeOf(ChatRatingView)).call(this, props));

        _this.submit = function () {
            var parsed = queryString.parse(_this.props.location.search);

            if (!_this.state.selectedNo) {
                setTimeout(function () {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please select the rating" });
                }, 500);
                return;
            }
            // if(!this.state.comment){
            //     setTimeout(() => {
            //         SnackBar.show({ pos: 'bottom-center', text: "Please add some comment" });
            //     }, 500)
            //     return ;
            // }

            var dataParams = {
                ratings: _this.state.selectedNo,
                comment: _this.state.comment,
                appointment_id: parsed.appointment_id || ''
            };

            _this.props.submitReportReview(dataParams, function (resp, error) {
                if (resp) {

                    setTimeout(function () {
                        _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Feedback Submitted Successfully" });
                        //this.props.history.push('/');
                    }, 500);

                    setTimeout(function () {
                        _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Feedback Submitted Successfully" });
                        _this.props.history.push('/');
                    }, 500);
                } else if (error) {

                    setTimeout(function () {
                        _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please try after sometime" });
                    }, 500);
                }
            });
        };

        _this.state = {
            comment: '',
            selectedNo: 0
        };
        return _this;
    }

    _createClass(ChatRatingView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'customer-feedback cf-hght' },
                    _react2.default.createElement(
                        'div',
                        { className: 'cf-card' },
                        _react2.default.createElement(
                            'div',
                            { className: 'cf-body fb-chat-main' },
                            _react2.default.createElement(
                                'h1',
                                { className: 'fb-main-hdng' },
                                ' Lab Report Review',
                                _react2.default.createElement('br', null),
                                ' Feedback'
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'fb-main-txt' },
                                'Your feedback will help us improve services for the thousands of patients visiting us everyday.'
                            ),
                            _react2.default.createElement(
                                'h5',
                                { className: 'fb-sub-hdng' },
                                'Please rate your interaction with the doctor. '
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'star-rating-cont' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'cht-fb-star' },
                                    _react2.default.createElement('img', { className: 'img-fluid cursor-pntr', onClick: function onClick() {
                                            return _this2.setState({ selectedNo: 1 });
                                        }, src: "/assets" + ('' + (this.state.selectedNo >= 1 ? '/img/stargold.svg' : '/img/Stargray.svg')) }),
                                    _react2.default.createElement('img', { className: 'img-fluid cursor-pntr', onClick: function onClick() {
                                            return _this2.setState({ selectedNo: 2 });
                                        }, src: "/assets" + ('' + (this.state.selectedNo >= 2 ? '/img/stargold.svg' : '/img/Stargray.svg')) }),
                                    _react2.default.createElement('img', { className: 'img-fluid cursor-pntr', onClick: function onClick() {
                                            return _this2.setState({ selectedNo: 3 });
                                        }, src: "/assets" + ('' + (this.state.selectedNo >= 3 ? '/img/stargold.svg' : '/img/Stargray.svg')) }),
                                    _react2.default.createElement('img', { className: 'img-fluid cursor-pntr', onClick: function onClick() {
                                            return _this2.setState({ selectedNo: 4 });
                                        }, src: "/assets" + ('' + (this.state.selectedNo >= 4 ? '/img/stargold.svg' : '/img/Stargray.svg')) }),
                                    _react2.default.createElement('img', { className: 'img-fluid cursor-pntr', onClick: function onClick() {
                                            return _this2.setState({ selectedNo: 5 });
                                        }, src: "/assets" + ('' + (this.state.selectedNo >= 5 ? '/img/stargold.svg' : '/img/Stargray.svg')) }),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'star-txt-lft' },
                                        'Poor'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'star-txt-rht' },
                                        'Excellent'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'chat-fb-comment' },
                                _react2.default.createElement(
                                    'h3',
                                    null,
                                    'Any Comments?'
                                ),
                                _react2.default.createElement(
                                    'textarea',
                                    { className: 'fb-textAra', onChange: function onChange(e) {
                                            return _this2.setState({ comment: e.target.value });
                                        } },
                                    this.state.comment
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'Max 200 Character'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'cf-footer' },
                            _react2.default.createElement(
                                'button',
                                { className: 'fb-btn-sec', onClick: this.submit },
                                'Submit'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ChatRatingView;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {

    return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {

    return {
        submitReportReview: function submitReportReview(dataParams, cb) {
            return dispatch((0, _index.submitReportReview)(dataParams, cb));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ChatRatingView);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2NoYXRSYXRpbmdzLmpzIl0sIm5hbWVzIjpbInF1ZXJ5U3RyaW5nIiwicmVxdWlyZSIsIkNoYXRSYXRpbmdWaWV3IiwicHJvcHMiLCJzdWJtaXQiLCJwYXJzZWQiLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwic3RhdGUiLCJzZWxlY3RlZE5vIiwic2V0VGltZW91dCIsIlNuYWNrQmFyIiwic2hvdyIsInBvcyIsInRleHQiLCJkYXRhUGFyYW1zIiwicmF0aW5ncyIsImNvbW1lbnQiLCJhcHBvaW50bWVudF9pZCIsInN1Ym1pdFJlcG9ydFJldmlldyIsInJlc3AiLCJlcnJvciIsImhpc3RvcnkiLCJwdXNoIiwic2V0U3RhdGUiLCJBU1NFVFNfQkFTRV9VUkwiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiY2IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7OztBQUNBLElBQU1BLGNBQWNDLG1CQUFPQSxDQUFDLDBEQUFSLENBQXBCOztJQUdNQyxjOzs7QUFFRiw0QkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLG9JQUNSQSxLQURROztBQUFBLGNBWWxCQyxNQVprQixHQVlULFlBQUk7QUFDVCxnQkFBTUMsU0FBU0wsWUFBWU0sS0FBWixDQUFrQixNQUFLSCxLQUFMLENBQVdJLFFBQVgsQ0FBb0JDLE1BQXRDLENBQWY7O0FBRUEsZ0JBQUcsQ0FBQyxNQUFLQyxLQUFMLENBQVdDLFVBQWYsRUFBMEI7QUFDdEJDLDJCQUFXLFlBQU07QUFDYkMsMkNBQVNDLElBQVQsQ0FBYyxFQUFFQyxLQUFLLGVBQVAsRUFBd0JDLE1BQU0sMEJBQTlCLEVBQWQ7QUFDSCxpQkFGRCxFQUVHLEdBRkg7QUFHQTtB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QVc7O0FBRy9CLFdBQU8sRUFBUDtBQUdILENBTkQ7O0FBUUEsSUFBTXdCLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBYzs7QUFFckMsV0FBTztBQUNIZCw0QkFBb0IsNEJBQUNKLFVBQUQsRUFBYW1CLEVBQWI7QUFBQSxtQkFBa0JELFNBQVMsK0JBQW1CbEIsVUFBbkIsRUFBK0JtQixFQUEvQixDQUFULENBQWxCO0FBQUE7QUFEakIsS0FBUDtBQUdILENBTEQ7O2tCQU9lLHlCQUFRSCxlQUFSLEVBQXlCQyxrQkFBekIsRUFBNkMvQixjQUE3QyxDIiwiZmlsZSI6IjE0NC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcblxuaW1wb3J0IHsgc3VibWl0UmVwb3J0UmV2aWV3IH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cblxuY2xhc3MgQ2hhdFJhdGluZ1ZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNvbW1lbnQ6ICcnLFxuICAgICAgICAgICAgc2VsZWN0ZWRObzogMFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgICB9XG5cbiAgICBzdWJtaXQgPSAoKT0+e1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcblxuICAgICAgICBpZighdGhpcy5zdGF0ZS5zZWxlY3RlZE5vKXtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2Ugc2VsZWN0IHRoZSByYXRpbmdcIiB9KTtcbiAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgIHJldHVybiA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYoIXRoaXMuc3RhdGUuY29tbWVudCl7XG4gICAgICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIGFkZCBzb21lIGNvbW1lbnRcIiB9KTtcbiAgICAgICAgLy8gICAgIH0sIDUwMClcbiAgICAgICAgLy8gICAgIHJldHVybiA7XG4gICAgICAgIC8vIH1cblxuICAgICAgICBsZXQgZGF0YVBhcmFtcyA9IHtcbiAgICAgICAgICAgIHJhdGluZ3M6IHRoaXMuc3RhdGUuc2VsZWN0ZWRObyxcbiAgICAgICAgICAgIGNvbW1lbnQ6IHRoaXMuc3RhdGUuY29tbWVudCxcbiAgICAgICAgICAgIGFwcG9pbnRtZW50X2lkOiBwYXJzZWQuYXBwb2ludG1lbnRfaWQgfHwgJydcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvcHMuc3VibWl0UmVwb3J0UmV2aWV3KGRhdGFQYXJhbXMsIChyZXNwLCBlcnJvcik9PntcbiAgICAgICAgICAgIGlmKHJlc3Ape1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJGZWVkYmFjayBTdWJtaXR0ZWQgU3VjY2Vzc2Z1bGx5XCIgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nKTtcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJGZWVkYmFjayBTdWJtaXR0ZWQgU3VjY2Vzc2Z1bGx5XCIgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJyk7XG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICAgICAgfWVsc2UgaWYoZXJyb3Ipe1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgdHJ5IGFmdGVyIHNvbWV0aW1lXCIgfSk7XG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b21lci1mZWVkYmFjayBjZi1oZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2YtY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZi1ib2R5IGZiLWNoYXQtbWFpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmYi1tYWluLWhkbmdcIj4gTGFiIFJlcG9ydCBSZXZpZXc8YnIgLz4gRmVlZGJhY2s8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZiLW1haW4tdHh0XCI+WW91ciBmZWVkYmFjayB3aWxsIGhlbHAgdXMgaW1wcm92ZSBzZXJ2aWNlcyBmb3IgdGhlIHRob3VzYW5kcyBvZiBwYXRpZW50cyB2aXNpdGluZyB1cyBldmVyeWRheS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZiLXN1Yi1oZG5nXCI+UGxlYXNlIHJhdGUgeW91ciBpbnRlcmFjdGlvbiB3aXRoIHRoZSBkb2N0b3IuIDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGFyLXJhdGluZy1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2h0LWZiLXN0YXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGN1cnNvci1wbnRyXCIgb25DbGljaz17ICgpPT50aGlzLnNldFN0YXRlKHtzZWxlY3RlZE5vOiAxfSkgfSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIGAke3RoaXMuc3RhdGUuc2VsZWN0ZWRObz49MT8nL2ltZy9zdGFyZ29sZC5zdmcnOicvaW1nL1N0YXJncmF5LnN2Zyd9YH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGN1cnNvci1wbnRyXCIgb25DbGljaz17ICgpPT50aGlzLnNldFN0YXRlKHtzZWxlY3RlZE5vOiAyfSkgfSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIGAke3RoaXMuc3RhdGUuc2VsZWN0ZWRObz49Mj8nL2ltZy9zdGFyZ29sZC5zdmcnOicvaW1nL1N0YXJncmF5LnN2Zyd9YH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGN1cnNvci1wbnRyXCIgb25DbGljaz17ICgpPT50aGlzLnNldFN0YXRlKHtzZWxlY3RlZE5vOiAzfSkgfSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIGAke3RoaXMuc3RhdGUuc2VsZWN0ZWRObz49Mz8nL2ltZy9zdGFyZ29sZC5zdmcnOicvaW1nL1N0YXJncmF5LnN2Zyd9YH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGN1cnNvci1wbnRyXCIgb25DbGljaz17ICgpPT50aGlzLnNldFN0YXRlKHtzZWxlY3RlZE5vOiA0fSkgfSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIGAke3RoaXMuc3RhdGUuc2VsZWN0ZWRObz49ND8nL2ltZy9zdGFyZ29sZC5zdmcnOicvaW1nL1N0YXJncmF5LnN2Zyd9YH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGN1cnNvci1wbnRyXCIgb25DbGljaz17ICgpPT50aGlzLnNldFN0YXRlKHtzZWxlY3RlZE5vOiA1fSkgfSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIGAke3RoaXMuc3RhdGUuc2VsZWN0ZWRObz49NT8nL2ltZy9zdGFyZ29sZC5zdmcnOicvaW1nL1N0YXJncmF5LnN2Zyd9YH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN0YXItdHh0LWxmdFwiPlBvb3I8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdGFyLXR4dC1yaHRcIj5FeGNlbGxlbnQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1mYi1jb21tZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5BbnkgQ29tbWVudHM/PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZiLXRleHRBcmFcIiBvbkNoYW5nZT17IChlKT0+dGhpcy5zZXRTdGF0ZSh7Y29tbWVudDogZS50YXJnZXQudmFsdWV9KSB9Pnt0aGlzLnN0YXRlLmNvbW1lbnR9PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TWF4IDIwMCBDaGFyYWN0ZXI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2YtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmYi1idG4tc2VjXCIgb25DbGljaz17dGhpcy5zdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG5cblxuICAgIHJldHVybiB7XG5cbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3VibWl0UmVwb3J0UmV2aWV3OiAoZGF0YVBhcmFtcywgY2IpPT5kaXNwYXRjaChzdWJtaXRSZXBvcnRSZXZpZXcoZGF0YVBhcmFtcywgY2IpKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ2hhdFJhdGluZ1ZpZXcpIl0sInNvdXJjZVJvb3QiOiIifQ==