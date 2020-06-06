exports.ids = [112];
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

/***/ "./dev/js/containers/vipClub/VipClubStaticView.js":
/*!********************************************************!*\
  !*** ./dev/js/containers/vipClub/VipClubStaticView.js ***!
  \********************************************************/
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

var _DesktopProfileHeader = __webpack_require__(/*! ../../components/commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _staticDisclaimer = __webpack_require__(/*! ../../components/commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import VipClubView from '../../components/vipClub/vipClubView.js'
// import Loader from '../../components/commons/Loader'
const queryString = __webpack_require__(/*! query-string */ "query-string");


class VipClubStaticView extends _react2.default.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

        if (_storage2.default.checkAuth()) {
            // this.props.getUserProfile()
        }
        if (window) {
            window.scrollTo(0, 0);
        }
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
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'vip-new-container' },
                            _react2.default.createElement(
                                'div',
                                { className: 'widget mrb-15 mt-20' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'fnl-vip-cont' },
                                    _react2.default.createElement('img', { src: "/assets" + '/img/dp-vip.png' }),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'mn-para' },
                                        'Your request for Docprime VIP has been ',
                                        _react2.default.createElement('br', null),
                                        'submitted successfully'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'sb-para' },
                                        'Our team will contact you soon'
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'button',
                    { className: 'vip-back-btn', onClick: () => this.props.history.push('/vip-club-details') },
                    'Done'
                )
            ),
            _react2.default.createElement(_staticDisclaimer2.default, { isVip: true })
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(VipClubStaticView);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy92aXBDbHViL1ZpcENsdWJTdGF0aWNWaWV3LmpzIl0sIm5hbWVzIjpbImlzVmlwIiwiY29sb3IiLCJmb250U2l6ZSIsInBhZGRpbmdCb3R0b20iLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJWaXBDbHViU3RhdGljVmlldyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiY29tcG9uZW50RGlkTW91bnQiLCJTVE9SQUdFIiwiY2hlY2tBdXRoIiwid2luZG93Iiwic2Nyb2xsVG8iLCJyZW5kZXIiLCJBU1NFVFNfQkFTRV9VUkwiLCJoaXN0b3J5IiwicHVzaCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7a0JBQ2UsQ0FBQyxFQUFFQSxLQUFGLEVBQUQsS0FBZTtBQUM3QixXQUFRO0FBQUE7QUFBQSxVQUFLLFdBQVksZUFBY0EsUUFBTSxrQkFBTixHQUF5QixFQUFHLEVBQTNEO0FBQ087QUFBQTtBQUFBLGNBQUcsV0FBVSxlQUFiLEVBQTZCLE9BQU8sRUFBRUMsT0FBTyxTQUFULEVBQW9CQyxVQUFVLEVBQTlCLEVBQXBDO0FBQUE7QUFBQSxTQURQO0FBRU87QUFBQTtBQUFBLGNBQUssV0FBVSw0QkFBZixFQUE0QyxPQUFPLEVBQUVDLGVBQWUsQ0FBakIsRUFBbkQ7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEo7QUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFGUCxLQUFSO0FBU0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEQ7Ozs7QUFDQTs7QUFFQTs7QUFHQTs7OztBQUNBOzs7O0FBRUE7Ozs7OztBQUxBO0FBQ0E7QUFHQSxNQUFNQyxjQUFjQyxtQkFBT0EsQ0FBQyxrQ0FBUixDQUFwQjs7O0FBR0EsTUFBTUMsaUJBQU4sU0FBZ0NDLGdCQUFNQyxTQUF0QyxDQUFnRDs7QUFFNUNDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjtBQUNBLGFBQUtDLEtBQUwsR0FBYSxFQUFiO0FBRUg7O0FBRURDLHdCQUFvQjs7QUFFaEIsWUFBSUMsa0JBQVFDLFNBQVIsRUFBSixFQUF5QjtBQUNyQjtBQUNIO0FBQ0QsWUFBSUMsTUFBSixFQUFZO0FBQ1JBLG1CQUFPQyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ0g7QUFDSjtBQUNEQyxhQUFTO0FBQ0wsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLG1CQUFmO0FBQ0ksMENBQUMsOEJBQUQsT0FESjtBQUVJO0FBQUE7QUFBQSxrQkFBUyxXQUFVLGdDQUFuQjtBQUNJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGlDQUFmO0FBQ0k7QUFBQTtBQUFBLDBCQUFLLFdBQVUsUUFBZjtBQUNJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLG1CQUFmO0FBQ0k7QUFBQTtBQUFBLGtDQUFLLFdBQVUscUJBQWY7QUFDSTtBQUFBO0FBQUEsc0NBQUssV0FBVSxjQUFmO0FBQ0ksMkVBQUssS0FBS0MsU0FBZUEsR0FBRyxpQkFBNUIsR0FESjtBQUVJO0FBQUE7QUFBQSwwQ0FBRyxXQUFVLFNBQWI7QUFBQTtBQUE4RCxpRkFBOUQ7QUFBQTtBQUFBLHFDQUZKO0FBR0k7QUFBQTtBQUFBLDBDQUFHLFdBQVUsU0FBYjtBQUFBO0FBQUE7QUFISjtBQURKO0FBREo7QUFESjtBQURKLGlCQURKO0FBY0k7QUFBQTtBQUFBLHNCQUFRLFdBQVUsY0FBbEIsRUFBaUMsU0FBUyxNQUFNLEtBQUtSLEtBQUwsQ0FBV1MsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0IsbUJBQXhCLENBQWhEO0FBQUE7QUFBQTtBQWRKLGFBRko7QUFrQkksMENBQUMsMEJBQUQsSUFBWSxPQUFPLElBQW5CO0FBbEJKLFNBREo7QUFzQkg7QUF4QzJDOztBQTJDaEQsTUFBTUMsa0JBQW1CVixLQUFELElBQVc7QUFDL0IsV0FBTyxFQUFQO0FBR0gsQ0FKRDs7QUFNQSxNQUFNVyxxQkFBc0JDLFFBQUQsSUFBYztBQUNyQyxXQUFPLEVBQVA7QUFFSCxDQUhEOztrQkFPZSx5QkFBUUYsZUFBUixFQUF5QkMsa0JBQXpCLEVBQTZDaEIsaUJBQTdDLEMiLCJmaWxlIjoiMTEyLnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmV4cG9ydCBkZWZhdWx0ICh7IGlzVmlwIH0pID0+IHtcblx0cmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17YGRzY2xtZXItZnRyICR7aXNWaXA/J21hcmdpbi1ib3R0b20tNTUnOicnfWB9PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMjBcIiBzdHlsZT17eyBjb2xvcjogJyM4YThhOGEnLCBmb250U2l6ZTogMTAgfX0gPlRoZSBXZWJzaXRlIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGluIGNhc2Ugb2YgYSBtZWRpY2FsIGVtZXJnZW5jeSBhbmQvIG9yIGNyaXRpY2FsIGNhcmUgYW5kIHRoZSB1c2VyIHNob3VsZCBkaXJlY3RseSBjb250YWN0IGhpcy8gaGVyIG1lZGljYWwgc2VydmljZSBwcm92aWRlciBmb3IgUGh5c2ljYWwgRXhhbWluYXRpb24uIERvY3ByaW1lIGlzIHNvbGVseSBhIHRlY2hub2xvZ3kgcGFydG5lci48L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgZm9vdGVyLW5ldy1jb3B5cmdodFwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDUgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8cD5Eb2NwcmltZS5jb20gQ29weXJpZ2h0ICZjb3B5OyAyMDIwLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+QWxsIHJpZ2h0cyByZXNlcnZlZC48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRPQ1BSSU1FIFRFQ0hOT0xPR0lFUyBQUklWQVRFIExJTUlURUQ8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkNJTiA6IFU3NDk5OUhSMjAxNlBUQzA2NDMxMjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2Pilcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7IH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcbi8vIGltcG9ydCBWaXBDbHViVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3ZpcENsdWIvdmlwQ2x1YlZpZXcuanMnXG4vLyBpbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXInXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuaW1wb3J0IERpc2NsYWltZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcydcblxuY2xhc3MgVmlwQ2x1YlN0YXRpY1ZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICAgICAgICBpZiAoU1RPUkFHRS5jaGVja0F1dGgoKSkge1xuICAgICAgICAgICAgLy8gdGhpcy5wcm9wcy5nZXRVc2VyUHJvZmlsZSgpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRhaW5lci10b3AtbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1uZXctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xNSBtdC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbmwtdmlwLWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvZHAtdmlwLnBuZyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibW4tcGFyYVwiPllvdXIgcmVxdWVzdCBmb3IgRG9jcHJpbWUgVklQIGhhcyBiZWVuIDxici8+c3VibWl0dGVkIHN1Y2Nlc3NmdWxseTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzYi1wYXJhXCI+T3VyIHRlYW0gd2lsbCBjb250YWN0IHlvdSBzb29uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInZpcC1iYWNrLWJ0blwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdmlwLWNsdWItZGV0YWlscycpfT5Eb25lPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxEaXNjbGFpbWVyIGlzVmlwPXt0cnVlfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcblxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICB9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShWaXBDbHViU3RhdGljVmlldykiXSwic291cmNlUm9vdCI6IiJ9