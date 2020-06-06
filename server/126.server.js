exports.ids = [126];
exports.modules = {

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class ChatRatingView extends _react2.default.Component {

    constructor(props) {
        super(props);

        this.submit = () => {
            const parsed = queryString.parse(this.props.location.search);

            if (!this.state.selectedNo) {
                setTimeout(() => {
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

            let dataParams = {
                ratings: this.state.selectedNo,
                comment: this.state.comment,
                appointment_id: parsed.appointment_id || ''
            };

            this.props.submitReportReview(dataParams, (resp, error) => {
                if (resp) {

                    setTimeout(() => {
                        _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Feedback Submitted Successfully" });
                        //this.props.history.push('/');
                    }, 500);

                    setTimeout(() => {
                        _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Feedback Submitted Successfully" });
                        this.props.history.push('/');
                    }, 500);
                } else if (error) {

                    setTimeout(() => {
                        _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please try after sometime" });
                    }, 500);
                }
            });
        };

        this.state = {
            comment: '',
            selectedNo: 0
        };
    }

    componentDidMount() {}

    render() {
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
                                _react2.default.createElement('img', { className: 'img-fluid cursor-pntr', onClick: () => this.setState({ selectedNo: 1 }), src: "/assets" + `${this.state.selectedNo >= 1 ? '/img/stargold.svg' : '/img/Stargray.svg'}` }),
                                _react2.default.createElement('img', { className: 'img-fluid cursor-pntr', onClick: () => this.setState({ selectedNo: 2 }), src: "/assets" + `${this.state.selectedNo >= 2 ? '/img/stargold.svg' : '/img/Stargray.svg'}` }),
                                _react2.default.createElement('img', { className: 'img-fluid cursor-pntr', onClick: () => this.setState({ selectedNo: 3 }), src: "/assets" + `${this.state.selectedNo >= 3 ? '/img/stargold.svg' : '/img/Stargray.svg'}` }),
                                _react2.default.createElement('img', { className: 'img-fluid cursor-pntr', onClick: () => this.setState({ selectedNo: 4 }), src: "/assets" + `${this.state.selectedNo >= 4 ? '/img/stargold.svg' : '/img/Stargray.svg'}` }),
                                _react2.default.createElement('img', { className: 'img-fluid cursor-pntr', onClick: () => this.setState({ selectedNo: 5 }), src: "/assets" + `${this.state.selectedNo >= 5 ? '/img/stargold.svg' : '/img/Stargray.svg'}` }),
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
                                { className: 'fb-textAra', onChange: e => this.setState({ comment: e.target.value }) },
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
}

const mapStateToProps = state => {

    return {};
};

const mapDispatchToProps = dispatch => {

    return {
        submitReportReview: (dataParams, cb) => dispatch((0, _index.submitReportReview)(dataParams, cb))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ChatRatingView);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2NoYXRSYXRpbmdzLmpzIl0sIm5hbWVzIjpbInF1ZXJ5U3RyaW5nIiwicmVxdWlyZSIsIkNoYXRSYXRpbmdWaWV3IiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3VibWl0IiwicGFyc2VkIiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsInN0YXRlIiwic2VsZWN0ZWRObyIsInNldFRpbWVvdXQiLCJTbmFja0JhciIsInNob3ciLCJwb3MiLCJ0ZXh0IiwiZGF0YVBhcmFtcyIsInJhdGluZ3MiLCJjb21tZW50IiwiYXBwb2ludG1lbnRfaWQiLCJzdWJtaXRSZXBvcnRSZXZpZXciLCJyZXNwIiwiZXJyb3IiLCJoaXN0b3J5IiwicHVzaCIsImNvbXBvbmVudERpZE1vdW50IiwicmVuZGVyIiwic2V0U3RhdGUiLCJBU1NFVFNfQkFTRV9VUkwiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImNiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBLE1BQU1BLGNBQWNDLG1CQUFPQSxDQUFDLGtDQUFSLENBQXBCOztBQUdBLE1BQU1DLGNBQU4sU0FBNkJDLGdCQUFNQyxTQUFuQyxDQUE2Qzs7QUFFekNDLGdCQUFZQyxLQUFaLEVBQWtCO0FBQ2QsY0FBTUEsS0FBTjs7QUFEYyxhQVlsQkMsTUFaa0IsR0FZVCxNQUFJO0FBQ1Qsa0JBQU1DLFNBQVNSLFlBQVlTLEtBQVosQ0FBa0IsS0FBS0gsS0FBTCxDQUFXSSxRQUFYLENBQW9CQyxNQUF0QyxDQUFmOztBQUVBLGdCQUFHLENBQUMsS0FBS0MsS0FBTCxDQUFXQyxVQUFmLEVBQTBCO0FBQ3RCQywyQkFBVyxNQUFNO0FBQ2JDLDJDQUFTQyxJQUFULENBQWMsRUFB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QXNCQyxRQUFELElBQWM7O0FBRXJDLFdBQU87QUFDSGQsNEJBQW9CLENBQUNKLFVBQUQsRUFBYW1CLEVBQWIsS0FBa0JELFNBQVMsK0JBQW1CbEIsVUFBbkIsRUFBK0JtQixFQUEvQixDQUFUO0FBRG5DLEtBQVA7QUFHSCxDQUxEOztrQkFPZSx5QkFBUUgsZUFBUixFQUF5QkMsa0JBQXpCLEVBQTZDbEMsY0FBN0MsQyIsImZpbGUiOiIxMjYuc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5cbmltcG9ydCB7IHN1Ym1pdFJlcG9ydFJldmlldyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuXG5cbmNsYXNzIENoYXRSYXRpbmdWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjb21tZW50OiAnJyxcbiAgICAgICAgICAgIHNlbGVjdGVkTm86IDBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gICAgfVxuXG4gICAgc3VibWl0ID0gKCk9PntcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG5cbiAgICAgICAgaWYoIXRoaXMuc3RhdGUuc2VsZWN0ZWRObyl7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIHNlbGVjdCB0aGUgcmF0aW5nXCIgfSk7XG4gICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmKCF0aGlzLnN0YXRlLmNvbW1lbnQpe1xuICAgICAgICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBhZGQgc29tZSBjb21tZW50XCIgfSk7XG4gICAgICAgIC8vICAgICB9LCA1MDApXG4gICAgICAgIC8vICAgICByZXR1cm4gO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgbGV0IGRhdGFQYXJhbXMgPSB7XG4gICAgICAgICAgICByYXRpbmdzOiB0aGlzLnN0YXRlLnNlbGVjdGVkTm8sXG4gICAgICAgICAgICBjb21tZW50OiB0aGlzLnN0YXRlLmNvbW1lbnQsXG4gICAgICAgICAgICBhcHBvaW50bWVudF9pZDogcGFyc2VkLmFwcG9pbnRtZW50X2lkIHx8ICcnXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb3BzLnN1Ym1pdFJlcG9ydFJldmlldyhkYXRhUGFyYW1zLCAocmVzcCwgZXJyb3IpPT57XG4gICAgICAgICAgICBpZihyZXNwKXtcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiRmVlZGJhY2sgU3VibWl0dGVkIFN1Y2Nlc3NmdWxseVwiIH0pO1xuICAgICAgICAgICAgICAgICAgICAvL3RoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJyk7XG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiRmVlZGJhY2sgU3VibWl0dGVkIFN1Y2Nlc3NmdWxseVwiIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpO1xuICAgICAgICAgICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgICAgIH1lbHNlIGlmKGVycm9yKXtcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIHRyeSBhZnRlciBzb21ldGltZVwiIH0pO1xuICAgICAgICAgICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tZXItZmVlZGJhY2sgY2YtaGdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNmLWNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2YtYm9keSBmYi1jaGF0LW1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZmItbWFpbi1oZG5nXCI+IExhYiBSZXBvcnQgUmV2aWV3PGJyIC8+IEZlZWRiYWNrPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmYi1tYWluLXR4dFwiPllvdXIgZmVlZGJhY2sgd2lsbCBoZWxwIHVzIGltcHJvdmUgc2VydmljZXMgZm9yIHRoZSB0aG91c2FuZHMgb2YgcGF0aWVudHMgdmlzaXRpbmcgdXMgZXZlcnlkYXkuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmYi1zdWItaGRuZ1wiPlBsZWFzZSByYXRlIHlvdXIgaW50ZXJhY3Rpb24gd2l0aCB0aGUgZG9jdG9yLiA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Rhci1yYXRpbmctY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNodC1mYi1zdGFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZCBjdXJzb3ItcG50clwiIG9uQ2xpY2s9eyAoKT0+dGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRObzogMX0pIH0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBgJHt0aGlzLnN0YXRlLnNlbGVjdGVkTm8+PTE/Jy9pbWcvc3RhcmdvbGQuc3ZnJzonL2ltZy9TdGFyZ3JheS5zdmcnfWB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZCBjdXJzb3ItcG50clwiIG9uQ2xpY2s9eyAoKT0+dGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRObzogMn0pIH0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBgJHt0aGlzLnN0YXRlLnNlbGVjdGVkTm8+PTI/Jy9pbWcvc3RhcmdvbGQuc3ZnJzonL2ltZy9TdGFyZ3JheS5zdmcnfWB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZCBjdXJzb3ItcG50clwiIG9uQ2xpY2s9eyAoKT0+dGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRObzogM30pIH0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBgJHt0aGlzLnN0YXRlLnNlbGVjdGVkTm8+PTM/Jy9pbWcvc3RhcmdvbGQuc3ZnJzonL2ltZy9TdGFyZ3JheS5zdmcnfWB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZCBjdXJzb3ItcG50clwiIG9uQ2xpY2s9eyAoKT0+dGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRObzogNH0pIH0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBgJHt0aGlzLnN0YXRlLnNlbGVjdGVkTm8+PTQ/Jy9pbWcvc3RhcmdvbGQuc3ZnJzonL2ltZy9TdGFyZ3JheS5zdmcnfWB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZCBjdXJzb3ItcG50clwiIG9uQ2xpY2s9eyAoKT0+dGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRObzogNX0pIH0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBgJHt0aGlzLnN0YXRlLnNlbGVjdGVkTm8+PTU/Jy9pbWcvc3RhcmdvbGQuc3ZnJzonL2ltZy9TdGFyZ3JheS5zdmcnfWB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdGFyLXR4dC1sZnRcIj5Qb29yPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3Rhci10eHQtcmh0XCI+RXhjZWxsZW50PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtZmItY29tbWVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+QW55IENvbW1lbnRzPzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmYi10ZXh0QXJhXCIgb25DaGFuZ2U9eyAoZSk9PnRoaXMuc2V0U3RhdGUoe2NvbW1lbnQ6IGUudGFyZ2V0LnZhbHVlfSkgfT57dGhpcy5zdGF0ZS5jb21tZW50fTwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk1heCAyMDAgQ2hhcmFjdGVyPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNmLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmItYnRuLXNlY1wiIG9uQ2xpY2s9e3RoaXMuc3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuXG5cbiAgICByZXR1cm4ge1xuXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHN1Ym1pdFJlcG9ydFJldmlldzogKGRhdGFQYXJhbXMsIGNiKT0+ZGlzcGF0Y2goc3VibWl0UmVwb3J0UmV2aWV3KGRhdGFQYXJhbXMsIGNiKSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENoYXRSYXRpbmdWaWV3KSJdLCJzb3VyY2VSb290IjoiIn0=