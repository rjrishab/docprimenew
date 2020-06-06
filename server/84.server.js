exports.ids = [84];
exports.modules = {

/***/ "./dev/js/components/commons/Home/staticDisclaimer.js":
/*!************************************************************!*\
  !*** ./dev/js/components/commons/Home/staticDisclaimer.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = ({ isVip }) => {
    return _react2.default.createElement(
        'div',
        { className: `dsclmer-ftr ${isVip ? 'margin-bottom-55' : ''}` },
        _react2.default.createElement(
            'p',
            { className: 'fw-500 mrt-20', style: { color: '#8a8a8a', fontSize: 10 } },
            'The Website is not intended to be used in case of a medical emergency and/ or critical care and the user should directly contact his/ her medical service provider for Physical Examination. Docprime is solely a technology partner.'
        ),
        _react2.default.createElement(
            'div',
            { className: 'col-12 footer-new-copyrght', style: { paddingBottom: 5 } },
            _react2.default.createElement(
                'p',
                null,
                'Docprime.com Copyright \xA9 2020.'
            ),
            _react2.default.createElement(
                'p',
                null,
                'All rights reserved.'
            ),
            _react2.default.createElement(
                'p',
                null,
                'DOCPRIME TECHNOLOGIES PRIVATE LIMITED'
            ),
            _react2.default.createElement(
                'p',
                null,
                'CIN : U74999HR2016PTC064312'
            )
        )
    );
};

/***/ }),

/***/ "./dev/js/components/commons/Notifications/Notifications.js":
/*!******************************************************************!*\
  !*** ./dev/js/components/commons/Notifications/Notifications.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _LeftBar = __webpack_require__(/*! ../../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _staticDisclaimer = __webpack_require__(/*! ../../commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class NotificationsView extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        if (window) {
            window.scrollTo(0, 0);
        }
    }

    openAppointment(data) {
        this.props.markNotificationsAsRead(data.id, () => {});
        this.props.history.push(data.content.url);
    }

    render() {

        return _react2.default.createElement(
            'div',
            { className: 'profile-body-wrap' },
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
                        _react2.default.createElement(
                            'section',
                            { className: 'notification-page skin-white new-profile-header-margin' },
                            _react2.default.createElement(
                                'div',
                                { className: 'notificatons' },
                                this.props.notifications && this.props.notifications.length == 0 ? _react2.default.createElement(
                                    'div',
                                    { className: 'text-center pd-20' },
                                    _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/no-notification.png" }),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'fw-500 text-lg mrt-20' },
                                        'No Notifications !!'
                                    )
                                ) : "",
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'list notificaton-list dp-user-list' },
                                    this.props.notifications.map((note, i) => {
                                        return _react2.default.createElement(
                                            'li',
                                            { key: i, onClick: this.openAppointment.bind(this, note) },
                                            _react2.default.createElement(
                                                'a',
                                                null,
                                                _react2.default.createElement('img', { src: "/assets" + "/img/icons/bell-md.png", className: 'img-fluid noti-icon' }),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'noti-content' },
                                                    _react2.default.createElement(
                                                        'h4',
                                                        { className: note.read_at ? "noti-title" : "noti-title newappointmenth4" },
                                                        note.content.title,
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'updated-on' },
                                                            note.viewed_at ? "" : "New"
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: note.read_at ? "" : "newappointment" },
                                                        note.content.body
                                                    )
                                                )
                                            )
                                        );
                                    })
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(_RightBar2.default, { noChatButton: true })
                )
            ),
            _react2.default.createElement(_staticDisclaimer2.default, null)
        );
    }
}

exports.default = NotificationsView;

/***/ }),

/***/ "./dev/js/components/commons/Notifications/index.js":
/*!**********************************************************!*\
  !*** ./dev/js/components/commons/Notifications/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Notifications = __webpack_require__(/*! ./Notifications */ "./dev/js/components/commons/Notifications/Notifications.js");

var _Notifications2 = _interopRequireDefault(_Notifications);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Notifications2.default;

/***/ }),

/***/ "./dev/js/containers/commons/Notifications.js":
/*!****************************************************!*\
  !*** ./dev/js/containers/commons/Notifications.js ***!
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

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _index2 = __webpack_require__(/*! ../../components/commons/Notifications/index.js */ "./dev/js/components/commons/Notifications/index.js");

var _index3 = _interopRequireDefault(_index2);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Notifications extends _react2.default.Component {
    constructor(props) {
        super(props);
        if (!_storage2.default.checkAuth()) {
            this.props.history.replace(`/login?callback=/user`);
        }
    }

    componentDidMount() {
        if (_storage2.default.checkAuth()) {
            this.props.markNotificationsAsViewed();
        }
    }

    render() {
        return _react2.default.createElement(_index3.default, this.props);
    }
}

Notifications.contextTypes = {
    router: () => null
};
const mapStateToProps = state => {
    const { notifications, newNotification } = state.USER;

    return {
        notifications, newNotification
    };
};

const mapDispatchToProps = dispatch => {
    return {
        markNotificationsAsViewed: () => dispatch((0, _index.markNotificationsAsViewed)()),
        markNotificationsAsRead: (notificationid, cb) => dispatch((0, _index.markNotificationsAsRead)(notificationid, cb))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Notifications);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL05vdGlmaWNhdGlvbnMvTm90aWZpY2F0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL05vdGlmaWNhdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvY29tbW9ucy9Ob3RpZmljYXRpb25zLmpzIl0sIm5hbWVzIjpbImlzVmlwIiwiY29sb3IiLCJmb250U2l6ZSIsInBhZGRpbmdCb3R0b20iLCJOb3RpZmljYXRpb25zVmlldyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiY29tcG9uZW50RGlkTW91bnQiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsIm9wZW5BcHBvaW50bWVudCIsImRhdGEiLCJtYXJrTm90aWZpY2F0aW9uc0FzUmVhZCIsImlkIiwiaGlzdG9yeSIsInB1c2giLCJjb250ZW50IiwidXJsIiwicmVuZGVyIiwibm90aWZpY2F0aW9ucyIsImxlbmd0aCIsIkFTU0VUU19CQVNFX1VSTCIsIm1hcCIsIm5vdGUiLCJpIiwiYmluZCIsInJlYWRfYXQiLCJ0aXRsZSIsInZpZXdlZF9hdCIsImJvZHkiLCJOb3RpZmljYXRpb25zIiwiU1RPUkFHRSIsImNoZWNrQXV0aCIsInJlcGxhY2UiLCJtYXJrTm90aWZpY2F0aW9uc0FzVmlld2VkIiwiY29udGV4dFR5cGVzIiwicm91dGVyIiwibWFwU3RhdGVUb1Byb3BzIiwibmV3Tm90aWZpY2F0aW9uIiwiVVNFUiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwibm90aWZpY2F0aW9uaWQiLCJjYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O2tCQUNlLENBQUMsRUFB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QUFELElBQWM7QUFDckMsV0FBTztBQUNIUCxtQ0FBMkIsTUFBTU8sU0FBUyx1Q0FBVCxDQUQ5QjtBQUVIN0IsaUNBQXlCLENBQUM4QixjQUFELEVBQWlCQyxFQUFqQixLQUF3QkYsU0FBUyxvQ0FBd0JDLGNBQXhCLEVBQXdDQyxFQUF4QyxDQUFUO0FBRjlDLEtBQVA7QUFJSCxDQUxEOztrQkFRZSx5QkFBUU4sZUFBUixFQUF5Qkcsa0JBQXpCLEVBQTZDVixhQUE3QyxDIiwiZmlsZSI6Ijg0LnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmV4cG9ydCBkZWZhdWx0ICh7IGlzVmlwIH0pID0+IHtcblx0cmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17YGRzY2xtZXItZnRyICR7aXNWaXA/J21hcmdpbi1ib3R0b20tNTUnOicnfWB9PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMjBcIiBzdHlsZT17eyBjb2xvcjogJyM4YThhOGEnLCBmb250U2l6ZTogMTAgfX0gPlRoZSBXZWJzaXRlIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGluIGNhc2Ugb2YgYSBtZWRpY2FsIGVtZXJnZW5jeSBhbmQvIG9yIGNyaXRpY2FsIGNhcmUgYW5kIHRoZSB1c2VyIHNob3VsZCBkaXJlY3RseSBjb250YWN0IGhpcy8gaGVyIG1lZGljYWwgc2VydmljZSBwcm92aWRlciBmb3IgUGh5c2ljYWwgRXhhbWluYXRpb24uIERvY3ByaW1lIGlzIHNvbGVseSBhIHRlY2hub2xvZ3kgcGFydG5lci48L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgZm9vdGVyLW5ldy1jb3B5cmdodFwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDUgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8cD5Eb2NwcmltZS5jb20gQ29weXJpZ2h0ICZjb3B5OyAyMDIwLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+QWxsIHJpZ2h0cyByZXNlcnZlZC48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRPQ1BSSU1FIFRFQ0hOT0xPR0lFUyBQUklWQVRFIExJTUlURUQ8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkNJTiA6IFU3NDk5OUhSMjAxNlBUQzA2NDMxMjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2Pilcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTGVmdEJhciBmcm9tICcuLi8uLi9jb21tb25zL0xlZnRCYXInXG5pbXBvcnQgUmlnaHRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9SaWdodEJhcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgRGlzY2xhaW1lciBmcm9tICcuLi8uLi9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcydcblxuY2xhc3MgTm90aWZpY2F0aW9uc1ZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvcGVuQXBwb2ludG1lbnQoZGF0YSkge1xuICAgICAgICB0aGlzLnByb3BzLm1hcmtOb3RpZmljYXRpb25zQXNSZWFkKGRhdGEuaWQsICgpID0+IHtcblxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChkYXRhLmNvbnRlbnQudXJsKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRhaW5lci10b3AtbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExlZnRCYXIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTcgY29sLWxnLTcgY2VudGVyLWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aGVhZGVyIGNsYXNzTmFtZT1cInNraW4tcHJpbWFyeSBmaXhlZCBob3Jpem9udGFsIHRvcCBzdGlja3ktaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrLWljb25cIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkuZ28oLTEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY29ucy9iYWNrLnBuZ1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlIGZ3LTcwMCBjYXBpdGFsaXplIHRleHQtY2VudGVyIHRleHQtd2hpdGVcIj5Ob3RpZmljYXRpb25zPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaGVhZGVyPiAqL31cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbi1wYWdlIHNraW4td2hpdGUgbmV3LXByb2ZpbGUtaGVhZGVyLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGlmaWNhdG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLm5vdGlmaWNhdGlvbnMgJiYgdGhpcy5wcm9wcy5ub3RpZmljYXRpb25zLmxlbmd0aCA9PSAwKSA/IDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcGQtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9uby1ub3RpZmljYXRpb24ucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LWxnIG1ydC0yMFwiPk5vIE5vdGlmaWNhdGlvbnMgISE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3Qgbm90aWZpY2F0b24tbGlzdCBkcC11c2VyLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubm90aWZpY2F0aW9ucy5tYXAoKG5vdGUsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpfSBvbkNsaWNrPXt0aGlzLm9wZW5BcHBvaW50bWVudC5iaW5kKHRoaXMsIG5vdGUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY29ucy9iZWxsLW1kLnBuZ1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWQgbm90aS1pY29uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3RpLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e25vdGUucmVhZF9hdCA/IFwibm90aS10aXRsZVwiIDogXCJub3RpLXRpdGxlIG5ld2FwcG9pbnRtZW50aDRcIn0+e25vdGUuY29udGVudC50aXRsZX08c3BhbiBjbGFzc05hbWU9XCJ1cGRhdGVkLW9uXCI+e25vdGUudmlld2VkX2F0ID8gXCJcIiA6IFwiTmV3XCJ9PC9zcGFuPjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e25vdGUucmVhZF9hdCA/IFwiXCIgOiBcIm5ld2FwcG9pbnRtZW50XCJ9Pntub3RlLmNvbnRlbnQuYm9keX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFJpZ2h0QmFyIG5vQ2hhdEJ1dHRvbj17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxEaXNjbGFpbWVyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uc1ZpZXdcbiIsImltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gJy4vTm90aWZpY2F0aW9ucydcblxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9ucyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBtYXJrTm90aWZpY2F0aW9uc0FzVmlld2VkLCBtYXJrTm90aWZpY2F0aW9uc0FzUmVhZCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5cbmltcG9ydCBOb3RpZmljYXRpb25zVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvTm90aWZpY2F0aW9ucy9pbmRleC5qcydcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcblxuY2xhc3MgTm90aWZpY2F0aW9ucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIGlmICghU1RPUkFHRS5jaGVja0F1dGgoKSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UoYC9sb2dpbj9jYWxsYmFjaz0vdXNlcmApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKFNUT1JBR0UuY2hlY2tBdXRoKCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMubWFya05vdGlmaWNhdGlvbnNBc1ZpZXdlZCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgICByb3V0ZXI6ICgpID0+IG51bGxcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uc1ZpZXcgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICBjb25zdCB7IG5vdGlmaWNhdGlvbnMsIG5ld05vdGlmaWNhdGlvbiB9ID0gc3RhdGUuVVNFUlxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbm90aWZpY2F0aW9ucywgbmV3Tm90aWZpY2F0aW9uXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBtYXJrTm90aWZpY2F0aW9uc0FzVmlld2VkOiAoKSA9PiBkaXNwYXRjaChtYXJrTm90aWZpY2F0aW9uc0FzVmlld2VkKCkpLFxuICAgICAgICBtYXJrTm90aWZpY2F0aW9uc0FzUmVhZDogKG5vdGlmaWNhdGlvbmlkLCBjYikgPT4gZGlzcGF0Y2gobWFya05vdGlmaWNhdGlvbnNBc1JlYWQobm90aWZpY2F0aW9uaWQsIGNiKSlcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTm90aWZpY2F0aW9ucyk7XG4iXSwic291cmNlUm9vdCI6IiJ9