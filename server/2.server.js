exports.ids = [2];
exports.modules = {

/***/ "./dev/js/components/commons/LeftBar/LeftBar.js":
/*!******************************************************!*\
  !*** ./dev/js/components/commons/LeftBar/LeftBar.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _initialsPicture = __webpack_require__(/*! ../initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GENDER = {
    "m": "Male",
    "f": "Female",
    "o": "Other"
};

class LeftBar extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    gotTo(where) {
        this.props.history.push(`/user/${where}`);
    }

    getAge(birthday) {
        birthday = new Date(birthday);
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    render() {

        let profileData = this.props.profiles[this.props.defaultProfile];
        let { pathname } = this.props.location;

        return _react2.default.createElement(
            'div',
            { className: 'col-lg-3 profile-section d-none d-lg-block' },
            profileData ? _react2.default.createElement(
                'div',
                { className: "sticky-div" + (!this.props.hideStickyTemp ? " sticky-div-temp" : "") },
                _react2.default.createElement(
                    'div',
                    { className: 'profile-img-section', onClick: () => {
                            if (profileData.isDummyUser) {
                                this.props.history.push(`/addprofile?existing=true`);
                            } else {
                                this.props.history.push(`/user/edit/${this.props.defaultProfile}`);
                            }
                        } },
                    _react2.default.createElement(
                        _initialsPicture2.default,
                        { name: profileData.name, has_image: !!profileData.profile_image, className: 'initialsPicture' },
                        _react2.default.createElement('img', { src: profileData.profile_image, className: 'profile-icon' })
                    )
                ),
                !profileData.isDummyUser ? _react2.default.createElement(
                    'div',
                    { className: 'profile-name-section' },
                    _react2.default.createElement(
                        'p',
                        { className: 'profile-name' },
                        profileData.name
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'profile-info-section' },
                        profileData.gender == 'm' ? _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/gender.svg", className: 'gender-icon' }) : _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/gender.svg", className: 'gender-icon', style: { transform: 'rotate(135deg)' } }),
                        _react2.default.createElement(
                            'span',
                            { className: 'profile-info-web' },
                            GENDER[profileData.gender],
                            ', ',
                            this.getAge(profileData.dob)
                        )
                    )
                ) : "",
                _react2.default.createElement(
                    'div',
                    { className: 'profile-feature-list-section' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'profile-feature-list' },
                        _react2.default.createElement(
                            'li',
                            { onClick: this.gotTo.bind(this, 'appointments'), className: pathname.includes('/appointments') ? "selectedtabpill" : "" },
                            _react2.default.createElement(
                                'div',
                                { className: 'list-inline-div list-img-div' },
                                _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/opd-visit.svg", className: 'profile-list-icons' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'list-inline-div' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'profile-feature-name' },
                                    'My Appointments'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { onClick: this.gotTo.bind(this, 'family'), className: pathname.includes('/family') ? "selectedtabpill" : "" },
                            _react2.default.createElement(
                                'div',
                                { className: 'list-inline-div list-img-div' },
                                _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/family.svg", className: 'profile-list-icons' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'list-inline-div' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'profile-feature-name' },
                                    'My Family'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { onClick: () => {
                                    this.props.history.push('/wallet');
                                }, className: pathname.includes('/wallet') ? "selectedtabpill" : "" },
                            _react2.default.createElement(
                                'div',
                                { className: 'list-inline-div list-img-div' },
                                _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/transaction.svg", className: 'profile-list-icons' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'list-inline-div' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'profile-feature-name' },
                                    'My Transactions'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { onClick: () => {
                                    this.props.history.push('/user/address');
                                }, className: pathname.includes('/user/address') ? "selectedtabpill" : "" },
                            _react2.default.createElement(
                                'div',
                                { className: 'list-inline-div list-img-div' },
                                _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/address.svg", className: 'profile-list-icons' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'list-inline-div' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'profile-feature-name' },
                                    'Manage Address'
                                )
                            )
                        )
                    )
                )
            ) : _react2.default.createElement(
                'div',
                { className: "sticky-div loggedOut-div" + (!this.props.hideStickyTemp ? " sticky-div-temp" : "") },
                _react2.default.createElement(
                    'div',
                    { className: 'dummy-img-section' },
                    _react2.default.createElement('img', { src: "/assets" + "/img/icons/dummy-profile.svg", className: 'dummy-icon' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'login-btn-section' },
                    _react2.default.createElement(
                        'button',
                        { className: 'login-btn-web', onClick: () => {
                                this.props.history.push('/user');
                            } },
                        'Login'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'register-div' },
                    _react2.default.createElement(
                        'p',
                        { className: 'register-text fw-500' },
                        'Register/Login and manage'
                    ),
                    _react2.default.createElement(
                        'ul',
                        { className: 'login-feature-list' },
                        _react2.default.createElement(
                            'li',
                            { className: 'login-feature-list-item' },
                            'Your Profile'
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'login-feature-list-item' },
                            'Your Appointments'
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'login-feature-list-item' },
                            'Your Medical Records'
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'login-feature-list-item' },
                            'Your Medical History'
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'login-feature-list-item' },
                            'Your Family Members'
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'login-feature-list-item' },
                            'Your OPD Insurance'
                        )
                    )
                )
            )
        );
    }
}

exports.default = LeftBar;

/***/ }),

/***/ "./dev/js/components/commons/LeftBar/index.js":
/*!****************************************************!*\
  !*** ./dev/js/components/commons/LeftBar/index.js ***!
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

var _index = __webpack_require__(/*! ../../../actions/index.js */ "./dev/js/actions/index.js");

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _LeftBar = __webpack_require__(/*! ./LeftBar */ "./dev/js/components/commons/LeftBar/LeftBar.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LeftBar extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        /* Fectch user profile if logged in and user profile is not loaded i.e(public pages) */
        // if (STORAGE.checkAuth()) {
        //     if (!this.props.profiles[this.props.selectedProfile]) {
        //         this.props.getUserProfile()
        //     }
        // }
    }

    render() {

        return ""
        // <LeftBarView {...this.props} />
        ;
    }
}

const mapStateToProps = state => {
    let { profiles, selectedProfile, defaultProfile } = state.USER;
    return {
        profiles, selectedProfile, defaultProfile
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getUserProfile: () => dispatch((0, _index.getUserProfile)())
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactRouter.withRouter)(LeftBar));

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xlZnRCYXIvTGVmdEJhci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xlZnRCYXIvaW5kZXguanMiXSwibmFtZXMiOlsiR0VOREVSIiwiTGVmdEJhciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImdvdFRvIiwid2hlcmUiLCJoaXN0b3J5IiwicHVzaCIsImdldEFnZSIsImJpcnRoZGF5IiwiRGF0ZSIsImFnZURpZk1zIiwibm93IiwiZ2V0VGltZSIsImFnZURhdGUiLCJNYXRoIiwiYWJzIiwiZ2V0VVRDRnVsbFllYXIiLCJyZW5kZXIiLCJwcm9maWxlRGF0YSIsInByb2ZpbGVzIiwiZGVmYXVsdFByb2ZpbGUiLCJwYXRobmFtZSIsImxvY2F0aW9uIiwiaGlkZVN0aWNreVRlbXAiLCJpc0R1bW15VXNlciIsIm5hbWUiLCJwcm9maWxlX2ltYWdlIiwiZ2VuZGVyIiwiQVNTRVRTX0JBU0VfVVJMIiwidHJhbnNmb3JtIiwiZG9iIiwiYmluZCIsImluY2x1ZGVzIiwiY29tcG9uZW50RGlkTW91bnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInNlbGVjdGVkUHJvZmlsZSIsIlVTRVIiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImdldFVzZXJQcm9maWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLE1BQU1BLFNBQVM7QUFDWCxTQUFLLE1BRE07QUFFWCxTQUFLLFFBRk07QUFHWCxTQUFLO0FBSE0sQ0FBZjs7QUFNQSxNQUFNQyxPQUFOLFNBQXNCQyxnQkFBTUMsU0FBNUIsQ0FBc0M7QUFDbENDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjtBQUNIOztBQUVEQyxVQUFNQyxLQUFOLEVBQWE7QUFDVCxhQUFLRixLQUFMLENBQVdHLE9B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QUE7QUFOSjtBQUZKO0FBVEM7QUExSGpCLFNBREo7QUF5Skg7QUE5S2lDOztrQkFpTHZCUixPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxTGY7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7OztBQUVBOzs7Ozs7QUFFQSxNQUFNQSxPQUFOLFNBQXNCQyxnQkFBTUMsU0FBNUIsQ0FBc0M7QUFDbENDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjtBQUNIOztBQUVEK0Isd0JBQW9CO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEaEIsYUFBUzs7QUFFTCxlQUNJO0FBQ0E7QUFGSjtBQUlIO0FBcEJpQzs7QUF1QnRDLE1BQU1pQixrQkFBbUJDLEtBQUQsSUFBVztBQUMvQixRQUFJLEVBQUVoQixRQUFGLEVBQVlpQixlQUFaLEVBQTZCaEIsY0FBN0IsS0FBZ0RlLE1BQU1FLElBQTFEO0FBQ0EsV0FBTztBQUNIbEIsZ0JBREcsRUFDT2lCLGVBRFAsRUFDd0JoQjtBQUR4QixLQUFQO0FBR0gsQ0FMRDs7QUFPQSxNQUFNa0IscUJBQXNCQyxRQUFELElBQWM7QUFDckMsV0FBTztBQUNIQyx3QkFBZ0IsTUFBTUQsU0FBUyw0QkFBVDtBQURuQixLQUFQO0FBR0gsQ0FKRDs7a0JBTWUseUJBQVFMLGVBQVIsRUFBeUJJLGtCQUF6QixFQUE2Qyw2QkFBV3hDLE9BQVgsQ0FBN0MsQyIsImZpbGUiOiIyLnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5pdGlhbHNQaWN0dXJlIGZyb20gJy4uL2luaXRpYWxzUGljdHVyZSdcblxuY29uc3QgR0VOREVSID0ge1xuICAgIFwibVwiOiBcIk1hbGVcIixcbiAgICBcImZcIjogXCJGZW1hbGVcIixcbiAgICBcIm9cIjogXCJPdGhlclwiXG59XG5cbmNsYXNzIExlZnRCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIGdvdFRvKHdoZXJlKSB7XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvdXNlci8ke3doZXJlfWApXG4gICAgfVxuXG4gICAgZ2V0QWdlKGJpcnRoZGF5KSB7XG4gICAgICAgIGJpcnRoZGF5ID0gbmV3IERhdGUoYmlydGhkYXkpXG4gICAgICAgIHZhciBhZ2VEaWZNcyA9IERhdGUubm93KCkgLSBiaXJ0aGRheS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBhZ2VEYXRlID0gbmV3IERhdGUoYWdlRGlmTXMpOyAvLyBtaWxpc2Vjb25kcyBmcm9tIGVwb2NoXG4gICAgICAgIHJldHVybiBNYXRoLmFicyhhZ2VEYXRlLmdldFVUQ0Z1bGxZZWFyKCkgLSAxOTcwKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgbGV0IHByb2ZpbGVEYXRhID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXVxuICAgICAgICBsZXQgeyBwYXRobmFtZSB9ID0gdGhpcy5wcm9wcy5sb2NhdGlvblxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIHByb2ZpbGUtc2VjdGlvbiBkLW5vbmUgZC1sZy1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZURhdGEgPyA8ZGl2IGNsYXNzTmFtZT17XCJzdGlja3ktZGl2XCIgKyAoIXRoaXMucHJvcHMuaGlkZVN0aWNreVRlbXAgPyBcIiBzdGlja3ktZGl2LXRlbXBcIiA6IFwiXCIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1pbWctc2VjdGlvblwiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvZmlsZURhdGEuaXNEdW1teVVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9hZGRwcm9maWxlP2V4aXN0aW5nPXRydWVgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvdXNlci9lZGl0LyR7dGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZX1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbml0aWFsc1BpY3R1cmUgbmFtZT17cHJvZmlsZURhdGEubmFtZX0gaGFzX2ltYWdlPXshIXByb2ZpbGVEYXRhLnByb2ZpbGVfaW1hZ2V9IGNsYXNzTmFtZT1cImluaXRpYWxzUGljdHVyZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvZmlsZURhdGEucHJvZmlsZV9pbWFnZX0gY2xhc3NOYW1lPVwicHJvZmlsZS1pY29uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0luaXRpYWxzUGljdHVyZT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXByb2ZpbGVEYXRhLmlzRHVtbXlVc2VyID8gPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLW5hbWUtc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9maWxlLW5hbWVcIj57cHJvZmlsZURhdGEubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1pbmZvLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlRGF0YS5nZW5kZXIgPT0gJ20nID8gPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9nZW5kZXIuc3ZnXCJ9IGNsYXNzTmFtZT1cImdlbmRlci1pY29uXCIgLz4gOiA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2dlbmRlci5zdmdcIn0gY2xhc3NOYW1lPVwiZ2VuZGVyLWljb25cIiBzdHlsZT17eyB0cmFuc2Zvcm06ICdyb3RhdGUoMTM1ZGVnKScgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2ZpbGUtaW5mby13ZWJcIj57R0VOREVSW3Byb2ZpbGVEYXRhLmdlbmRlcl19LCB7dGhpcy5nZXRBZ2UocHJvZmlsZURhdGEuZG9iKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1mZWF0dXJlLWxpc3Qtc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwcm9maWxlLWZlYXR1cmUtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaW5saW5lLWRpdiBsaXN0LWltZy1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvaW5zdXJhbmNlLnN2Z1wifSBjbGFzc05hbWU9XCJwcm9maWxlLWxpc3QtaWNvbnNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWlubGluZS1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2ZpbGUtZmVhdHVyZS1uYW1lXCI+T1BEIEluc3VyYW5jZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxpc3Qtc21hbGwtdGV4dFwiPlJlbmV3IG9uIDFzdCBKdW5lIDIwMTg8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhc3QtbGlzdC1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxhc3QtbGlzdC1kaXYtdGV4dFwiPkFjdGl2ZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGkgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9jaGF0aGlzdG9yeScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT17cGF0aG5hbWUuaW5jbHVkZXMoJy9jaGF0aGlzdG9yeScpID8gXCJzZWxlY3RlZHRhYnBpbGxcIiA6IFwiXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWlubGluZS1kaXYgbGlzdC1pbWctZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9tZXNzYWdlLnN2Z1wifSBjbGFzc05hbWU9XCJwcm9maWxlLWxpc3QtaWNvbnNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaW5saW5lLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2ZpbGUtZmVhdHVyZS1uYW1lXCI+T25saW5lIENvbnN1bHRhdGlvbjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5nb3RUby5iaW5kKHRoaXMsICdhcHBvaW50bWVudHMnKX0gY2xhc3NOYW1lPXtwYXRobmFtZS5pbmNsdWRlcygnL2FwcG9pbnRtZW50cycpID8gXCJzZWxlY3RlZHRhYnBpbGxcIiA6IFwiXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWlubGluZS1kaXYgbGlzdC1pbWctZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9vcGQtdmlzaXQuc3ZnXCJ9IGNsYXNzTmFtZT1cInByb2ZpbGUtbGlzdC1pY29uc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pbmxpbmUtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZmlsZS1mZWF0dXJlLW5hbWVcIj5NeSBBcHBvaW50bWVudHM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImxhc3QtbGlzdC1kaXYgbGlzdC1uby1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxpc3Qtbm9cIj44PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaW5saW5lLWRpdiBsaXN0LWltZy1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL21lZGljYWwuc3ZnXCJ9IGNsYXNzTmFtZT1cInByb2ZpbGUtbGlzdC1pY29uc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pbmxpbmUtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZmlsZS1mZWF0dXJlLW5hbWVcIj5NZWRpY2FsIEhpc3Rvcnk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFzdC1saXN0LWRpdiBsaXN0LW5vLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxpc3Qtbm9cIj44PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaW5saW5lLWRpdiBsaXN0LWltZy1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvdGVzdC1yZXBvcnQuc3ZnXCJ9IGNsYXNzTmFtZT1cInByb2ZpbGUtbGlzdC1pY29uc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaW5saW5lLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZmlsZS1mZWF0dXJlLW5hbWVcIj5UZXN0IFJlcG9ydHM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhc3QtbGlzdC1kaXYgbGlzdC1uby1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxpc3Qtbm9cIj44PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMuZ290VG8uYmluZCh0aGlzLCAnZmFtaWx5Jyl9IGNsYXNzTmFtZT17cGF0aG5hbWUuaW5jbHVkZXMoJy9mYW1pbHknKSA/IFwic2VsZWN0ZWR0YWJwaWxsXCIgOiBcIlwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pbmxpbmUtZGl2IGxpc3QtaW1nLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZmFtaWx5LnN2Z1wifSBjbGFzc05hbWU9XCJwcm9maWxlLWxpc3QtaWNvbnNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaW5saW5lLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2ZpbGUtZmVhdHVyZS1uYW1lXCI+TXkgRmFtaWx5PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pbmxpbmUtZGl2IGxpc3QtaW1nLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9saWZlc3R5bGUuc3ZnXCJ9IGNsYXNzTmFtZT1cInByb2ZpbGUtbGlzdC1pY29uc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaW5saW5lLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZmlsZS1mZWF0dXJlLW5hbWVcIj5MaWZlc3R5bGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy93YWxsZXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9e3BhdGhuYW1lLmluY2x1ZGVzKCcvd2FsbGV0JykgPyBcInNlbGVjdGVkdGFicGlsbFwiIDogXCJcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaW5saW5lLWRpdiBsaXN0LWltZy1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3RyYW5zYWN0aW9uLnN2Z1wifSBjbGFzc05hbWU9XCJwcm9maWxlLWxpc3QtaWNvbnNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaW5saW5lLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2ZpbGUtZmVhdHVyZS1uYW1lXCI+TXkgVHJhbnNhY3Rpb25zPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3VzZXIvYWRkcmVzcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT17cGF0aG5hbWUuaW5jbHVkZXMoJy91c2VyL2FkZHJlc3MnKSA/IFwic2VsZWN0ZWR0YWJwaWxsXCIgOiBcIlwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pbmxpbmUtZGl2IGxpc3QtaW1nLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvYWRkcmVzcy5zdmdcIn0gY2xhc3NOYW1lPVwicHJvZmlsZS1saXN0LWljb25zXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWlubGluZS1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9maWxlLWZlYXR1cmUtbmFtZVwiPk1hbmFnZSBBZGRyZXNzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiA8ZGl2IGNsYXNzTmFtZT17XCJzdGlja3ktZGl2IGxvZ2dlZE91dC1kaXZcIiArICghdGhpcy5wcm9wcy5oaWRlU3RpY2t5VGVtcCA/IFwiIHN0aWNreS1kaXYtdGVtcFwiIDogXCJcIil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVtbXktaW1nLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY29ucy9kdW1teS1wcm9maWxlLnN2Z1wifSBjbGFzc05hbWU9XCJkdW1teS1pY29uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWJ0bi1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibG9naW4tYnRuLXdlYlwiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdXNlcicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmVnaXN0ZXItdGV4dCBmdy01MDBcIj5SZWdpc3Rlci9Mb2dpbiBhbmQgbWFuYWdlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibG9naW4tZmVhdHVyZS1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibG9naW4tZmVhdHVyZS1saXN0LWl0ZW1cIj5Zb3VyIFByb2ZpbGU8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxvZ2luLWZlYXR1cmUtbGlzdC1pdGVtXCI+WW91ciBBcHBvaW50bWVudHM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxvZ2luLWZlYXR1cmUtbGlzdC1pdGVtXCI+WW91ciBNZWRpY2FsIFJlY29yZHM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxvZ2luLWZlYXR1cmUtbGlzdC1pdGVtXCI+WW91ciBNZWRpY2FsIEhpc3Rvcnk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxvZ2luLWZlYXR1cmUtbGlzdC1pdGVtXCI+WW91ciBGYW1pbHkgTWVtYmVyczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibG9naW4tZmVhdHVyZS1saXN0LWl0ZW1cIj5Zb3VyIE9QRCBJbnN1cmFuY2U8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGhyIC8+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHVsIGNsYXNzTmFtZT1cImxvZ2luLWZlYXR1cmUtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPjxsaSBjbGFzc05hbWU9XCJsb2dpbi1mZWF0dXJlLWxpc3QtaXRlbVwiPkJvb2sgR2VucmFsIFBoeXNpY2lhbnMgaW4gRGVsaGk8L2xpPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj48bGkgY2xhc3NOYW1lPVwibG9naW4tZmVhdHVyZS1saXN0LWl0ZW1cIj5Cb29rIERlbnRpc3QgaW4gRGVsaGk8L2xpPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVmdEJhclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBnZXRVc2VyUHJvZmlsZSB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5cbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5cbmltcG9ydCBMZWZ0QmFyVmlldyBmcm9tICcuL0xlZnRCYXInXG5cbmNsYXNzIExlZnRCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAvKiBGZWN0Y2ggdXNlciBwcm9maWxlIGlmIGxvZ2dlZCBpbiBhbmQgdXNlciBwcm9maWxlIGlzIG5vdCBsb2FkZWQgaS5lKHB1YmxpYyBwYWdlcykgKi9cbiAgICAgICAgLy8gaWYgKFNUT1JBR0UuY2hlY2tBdXRoKCkpIHtcbiAgICAgICAgLy8gICAgIGlmICghdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV0pIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnByb3BzLmdldFVzZXJQcm9maWxlKClcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgLy8gPExlZnRCYXJWaWV3IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgbGV0IHsgcHJvZmlsZXMsIHNlbGVjdGVkUHJvZmlsZSwgZGVmYXVsdFByb2ZpbGUgfSA9IHN0YXRlLlVTRVJcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9maWxlcywgc2VsZWN0ZWRQcm9maWxlLCBkZWZhdWx0UHJvZmlsZVxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0VXNlclByb2ZpbGU6ICgpID0+IGRpc3BhdGNoKGdldFVzZXJQcm9maWxlKCkpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKSh3aXRoUm91dGVyKExlZnRCYXIpKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==