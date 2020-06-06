exports.ids = [103];
exports.modules = {

/***/ "./dev/js/components/commons/chatHistory/ChatHistoryView.js":
/*!******************************************************************!*\
  !*** ./dev/js/components/commons/chatHistory/ChatHistoryView.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _LeftBar = __webpack_require__(/*! ../../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _initialsPicture = __webpack_require__(/*! ../../commons/initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ChatView extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    openChat(roomId = "") {
        this.props.history.push('/chat', {
            roomId: roomId
        });
    }

    render() {

        let { chatHistory } = this.props;
        chatHistory = chatHistory || [];

        return _react2.default.createElement(
            'div',
            { className: 'profile-body-wrap' },
            _react2.default.createElement(_DesktopProfileHeader2.default, null),
            _react2.default.createElement(
                'section',
                { className: 'container parent-section book-appointment-section' },
                _react2.default.createElement(
                    'div',
                    { className: 'row main-row parent-section-row' },
                    _react2.default.createElement(_LeftBar2.default, null),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12 col-md-7 col-lg-7 center-column' },
                        _react2.default.createElement(
                            'div',
                            { className: 'widget' },
                            _react2.default.createElement(
                                'ul',
                                { className: 'list chat-history-list' },
                                chatHistory.map((chat, i) => {
                                    let date_f = new Date(chat.date || 0).toDateString();
                                    return _react2.default.createElement(
                                        'li',
                                        { key: i, onClick: this.openChat.bind(this, chat.room_id) },
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'chat-history-list-label fw-500' },
                                            'Patient Name : ',
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                chat.user_name
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'chat-history-symptom fw-500' },
                                            'Symptom : ',
                                            chat.symptoms && chat.symptoms.length > 1 ? chat.symptoms.join(" | ") : chat.symptoms
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'chat-history-date clearfix mrb-5' },
                                            _react2.default.createElement('img', { src: "/assets" + "/img/icons/calendar.svg" }),
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'fw-500' },
                                                'Date : ',
                                                date_f
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'chat-history-date clearfix mrb-5' },
                                            _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/stethoscope.svg" }),
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'fw-500' },
                                                'Doctor Name : Dr. ',
                                                chat.doctor_name
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'arrow-custom-right' },
                                            _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/arrow-forward-right.svg" })
                                        )
                                    );
                                })
                            )
                        ),
                        _react2.default.createElement(
                            'button',
                            { onClick: () => {
                                    this.props.history.push('/chat');
                                }, className: 'v-btn v-btn-primary btn-lg add-more-members-btn' },
                            '+'
                        )
                    ),
                    _react2.default.createElement(_RightBar2.default, null)
                )
            )
        );
    }
}

exports.default = ChatView;

/***/ }),

/***/ "./dev/js/components/commons/chatHistory/index.js":
/*!********************************************************!*\
  !*** ./dev/js/components/commons/chatHistory/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ChatHistoryView = __webpack_require__(/*! ./ChatHistoryView.js */ "./dev/js/components/commons/chatHistory/ChatHistoryView.js");

var _ChatHistoryView2 = _interopRequireDefault(_ChatHistoryView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ChatHistoryView2.default;

/***/ }),

/***/ "./dev/js/containers/commons/chatHistory.js":
/*!**************************************************!*\
  !*** ./dev/js/containers/commons/chatHistory.js ***!
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

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _index2 = __webpack_require__(/*! ../../components/commons/chatHistory/index.js */ "./dev/js/components/commons/chatHistory/index.js");

var _index3 = _interopRequireDefault(_index2);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ChatHistory extends _react2.default.Component {
    constructor(props) {
        super(props);
        if (!_storage2.default.checkAuth()) {
            this.props.history.replace(`/login?callback=/chathistory`);
        }
    }

    componentDidMount() {
        if (_storage2.default.checkAuth()) {
            // this.props.fetchChatHistory()
        }
    }

    render() {

        return _react2.default.createElement(_index3.default, this.props);
    }
}

ChatHistory.contextTypes = {
    router: () => null
};
const mapStateToProps = state => {
    let { chatHistory } = state.USER;

    return {
        chatHistory
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchChatHistory: cb => dispatch((0, _index.fetchChatHistory)(cb))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ChatHistory);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2NoYXRIaXN0b3J5L0NoYXRIaXN0b3J5Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2NoYXRIaXN0b3J5L2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL2NvbW1vbnMvY2hhdEhpc3RvcnkuanMiXSwibmFtZXMiOlsiQ2hhdFZpZXciLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsIm9wZW5DaGF0Iiwicm9vbUlkIiwiaGlzdG9yeSIsInB1c2giLCJyZW5kZXIiLCJjaGF0SGlzdG9yeSIsIm1hcCIsImNoYXQiLCJpIiwiZGF0ZV9mIiwiRGF0ZSIsImRhdGUiLCJ0b0RhdGVTdHJpbmciLCJiaW5kIiwicm9vbV9pZCIsInVzZXJfbmFtZSIsInN5bXB0b21zIiwibGVuZ3RoIiwiam9pbiIsIkFTU0VUU19CQVNFX1VSTCIsImRvY3Rvcl9uYW1lIiwiQ2hhdEhpc3RvcnlWaWV3IiwiQ2hhdEhpc3RvcnkiLCJTVE9SQUdFIiwiY2hlY2tBdXRoIiwicmVwbGFjZSIsImNvbXBvbmVudERpZE1vdW50IiwiY29udGV4dFR5cGVzIiwicm91dGVyIiwibWFwU3RhdGVUb1Byb3BzIiwiVVNFUiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiZmV0Y2hDaGF0SGlzdG9yeSIsImNiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsTUFBTUEsUUFBTixTQUF1QkMsZ0JBQU1DLFNBQTdCLENBQXVDO0FBQ25DQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDQSxhQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUdIOztBQUVEQyxhQUFTQyxTQUFTLEVBQWxCLEVBQXNC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UixFQUFKLEVBQXlCO0FBQ3RCO0FBQ0Y7QUFDSjs7QUFNRHBCLGFBQVM7O0FBRUwsZUFDSSw4QkFBQyxlQUFELEVBQXFCLEtBQUtOLEtBQTFCLENBREo7QUFHSDtBQXZCcUM7O0FBQXBDd0IsVyxDQWNLSyxZLEdBQWU7QUFDbEJDLFlBQVEsTUFBTTtBQURJLEM7QUFZMUIsTUFBTUMsa0JBQW1COUIsS0FBRCxJQUFXO0FBQy9CLFFBQUksRUFBRU0sV0FBRixLQUFrQk4sTUFBTStCLElBQTVCOztBQUVBLFdBQU87QUFDSHpCO0FBREcsS0FBUDtBQUdILENBTkQ7O0FBUUEsTUFBTTBCLHFCQUFzQkMsUUFBRCxJQUFjO0FBQ3JDLFdBQU87QUFDSEMsMEJBQW1CQyxFQUFELElBQVFGLFNBQVMsNkJBQWlCRSxFQUFqQixDQUFUO0FBRHZCLEtBQVA7QUFHSCxDQUpEOztrQkFPZSx5QkFBUUwsZUFBUixFQUF5QkUsa0JBQXpCLEVBQTZDVCxXQUE3QyxDIiwiZmlsZSI6IjEwMy5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuXG5pbXBvcnQgTGVmdEJhciBmcm9tICcuLi8uLi9jb21tb25zL0xlZnRCYXInXG5pbXBvcnQgUmlnaHRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9SaWdodEJhcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgSW5pdGlhbHNQaWN0dXJlIGZyb20gJy4uLy4uL2NvbW1vbnMvaW5pdGlhbHNQaWN0dXJlJ1xuXG5jbGFzcyBDaGF0VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9wZW5DaGF0KHJvb21JZCA9IFwiXCIpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9jaGF0Jywge1xuICAgICAgICAgICAgcm9vbUlkOiByb29tSWRcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgbGV0IHsgY2hhdEhpc3RvcnkgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgY2hhdEhpc3RvcnkgPSBjaGF0SGlzdG9yeSB8fCBbXVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG4gICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgcGFyZW50LXNlY3Rpb24gYm9vay1hcHBvaW50bWVudC1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExlZnRCYXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNvbC1sZy03IGNlbnRlci1jb2x1bW5cIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aGVhZGVyIGNsYXNzTmFtZT1cIndhbGxldC1oZWFkZXIgc3RpY2t5LWhlYWRlciBjaGF0LWhlYWRlclwiIHN0eWxlPXt7aGVpZ2h0OiA1MH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgaGVhZGVyLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9sZWZ0LWFycm93LnN2Z1wifSBjbGFzc05hbWU9XCJiYWNrLWljb24tb3JhbmdlXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LmdvKC0xKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTggbG9nby1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlIGZ3LTcwMCBjYXBpdGFsaXplIHRleHQtd2hpdGUgdGV4dC1jZW50ZXJcIj5DaGF0IEhpc3Rvcnk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+ICovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QgY2hhdC1oaXN0b3J5LWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGF0SGlzdG9yeS5tYXAoKGNoYXQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGVfZiA9IG5ldyBEYXRlKGNoYXQuZGF0ZSB8fCAwKS50b0RhdGVTdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aX0gb25DbGljaz17dGhpcy5vcGVuQ2hhdC5iaW5kKHRoaXMsIGNoYXQucm9vbV9pZCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2hhdC1oaXN0b3J5LWxpc3QtbGFiZWwgZnctNTAwXCI+UGF0aWVudCBOYW1lIDogPHNwYW4+e2NoYXQudXNlcl9uYW1lfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjaGF0LWhpc3Rvcnktc3ltcHRvbSBmdy01MDBcIj5TeW1wdG9tIDogeyhjaGF0LnN5bXB0b21zICYmIGNoYXQuc3ltcHRvbXMubGVuZ3RoID4gMSkgPyBjaGF0LnN5bXB0b21zLmpvaW4oXCIgfCBcIikgOiBjaGF0LnN5bXB0b21zfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1oaXN0b3J5LWRhdGUgY2xlYXJmaXggbXJiLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2ljb25zL2NhbGVuZGFyLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPkRhdGUgOiB7ZGF0ZV9mfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWhpc3RvcnktZGF0ZSBjbGVhcmZpeCBtcmItNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvc3RldGhvc2NvcGUuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+RG9jdG9yIE5hbWUgOiBEci4ge2NoYXQuZG9jdG9yX25hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1jdXN0b20tcmlnaHRcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Fycm93LWZvcndhcmQtcmlnaHQuc3ZnXCJ9IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvY2hhdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPVwidi1idG4gdi1idG4tcHJpbWFyeSBidG4tbGcgYWRkLW1vcmUtbWVtYmVycy1idG5cIj4rPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaWdodEJhciAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbiA+XG4gICAgICAgICAgICA8L2RpdiA+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IENoYXRWaWV3XG4iLCJpbXBvcnQgQ2hhdEhpc3RvcnlWaWV3IGZyb20gJy4vQ2hhdEhpc3RvcnlWaWV3LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBDaGF0SGlzdG9yeVZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgZmV0Y2hDaGF0SGlzdG9yeSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5cbmltcG9ydCBDaGF0SGlzdG9yeVZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL2NoYXRIaXN0b3J5L2luZGV4LmpzJ1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuXG5jbGFzcyBDaGF0SGlzdG9yeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIGlmICghU1RPUkFHRS5jaGVja0F1dGgoKSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UoYC9sb2dpbj9jYWxsYmFjaz0vY2hhdGhpc3RvcnlgKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmIChTVE9SQUdFLmNoZWNrQXV0aCgpKSB7XG4gICAgICAgICAgIC8vIHRoaXMucHJvcHMuZmV0Y2hDaGF0SGlzdG9yeSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgICByb3V0ZXI6ICgpID0+IG51bGxcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDaGF0SGlzdG9yeVZpZXcgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICBsZXQgeyBjaGF0SGlzdG9yeSB9ID0gc3RhdGUuVVNFUlxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2hhdEhpc3RvcnlcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGZldGNoQ2hhdEhpc3Rvcnk6IChjYikgPT4gZGlzcGF0Y2goZmV0Y2hDaGF0SGlzdG9yeShjYikpXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENoYXRIaXN0b3J5KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=