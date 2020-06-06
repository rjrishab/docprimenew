exports.ids = [115];
exports.modules = {

/***/ "./dev/js/components/commons/adsBooking/adsBookingView.js":
/*!****************************************************************!*\
  !*** ./dev/js/components/commons/adsBooking/adsBookingView.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _ChatPanel = __webpack_require__(/*! ../../commons/ChatPanel */ "./dev/js/components/commons/ChatPanel/index.js");

var _ChatPanel2 = _interopRequireDefault(_ChatPanel);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AdsBookingView extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: '',
            name: '',
            message: '',
            phonenumber: '',
            bookingsGA: false
        };
    }
    handleChange(feild, event) {
        let gender_value = event.target.value;
        this.setState({ [event.target.getAttribute('data-param')]: event.target.value });
    }

    handleSubmit() {
        let member_data = {};
        if (this.state.gender != '' && this.state.name != '' && this.state.message != '' && this.state.phonenumber != '') {
            if (this.state.phonenumber.length < 10) {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Enter Valid phone number" });
            } else {
                member_data.gender = this.state.gender;
                member_data.name = this.state.name;
                member_data.message = this.state.message;
                member_data.phone_number = this.state.phonenumber;
                this.props.userCreate(member_data, resp => {
                    if (resp.status) {
                        this.props.history.push('/mobileviewchat?botagent=true&force_start=true');
                        let data = {
                            'Category': 'Chat', 'Action': 'getHelpBtnClick', 'CustomerID': GTM.getUserId(), 'leadid': 0, 'event': 'chat-button-clicked-leadform', "url": window.location.pathname
                        };
                        GTM.sendEvent({ data: data });
                    }
                });
            }
        } else {
            _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "All fields are manadtory" });
        }
    }
    handlekey(event) {
        if (this.state.phonenumber.length == 10) {
            event.preventDefault();
        }
    }
    render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
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
                            { className: 'col-12 col-md-7 col-lg-7 ins-main-padding' },
                            _react2.default.createElement(
                                'div',
                                { className: 'wedget mb-3' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'ins-card-head' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'ins-name-head' },
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'm-0' },
                                            'Get exclusive discounts on best medical services near you'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'section',
                                { className: 'section-margin-bottom' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'widget' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'insurance-member-container' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'insurance-member-details' },
                                            _react2.default.createElement(
                                                'h4',
                                                null,
                                                'Let us know what you are looking for?'
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'fkd-textarea' },
                                                _react2.default.createElement('textarea', { placeholder: '', value: this.state.message, 'data-param': 'message', onChange: this.handleChange.bind(this, 'message') })
                                            ),
                                            _react2.default.createElement(
                                                'h3',
                                                { className: 'tell-hedng' },
                                                'Tell us about yourself'
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'row no-gutters' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'col-12' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'ins-form-radio' },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'dtl-radio' },
                                                            _react2.default.createElement(
                                                                'label',
                                                                { className: 'container-radio' },
                                                                'Male',
                                                                _react2.default.createElement('input', { type: 'radio', name: 'gender', value: 'm', 'data-param': 'gender', checked: this.state.gender === 'm', onChange: this.handleChange.bind(this, 'm') }),
                                                                _react2.default.createElement('span', { className: 'doc-checkmark' })
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'dtl-radio' },
                                                            _react2.default.createElement(
                                                                'label',
                                                                { className: 'container-radio' },
                                                                'Female',
                                                                _react2.default.createElement('input', { type: 'radio', name: 'gender', value: 'f', 'data-param': 'gender', checked: this.state.gender === 'f', onChange: this.handleChange.bind(this, 'f') }),
                                                                _react2.default.createElement('span', { className: 'doc-checkmark' })
                                                            )
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'col-12' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'ins-form-group inp-margin-right ' },
                                                        _react2.default.createElement('input', { type: 'text', id: 'name', className: 'form-control ins-form-control', 'data-param': 'name', required: true, autoComplete: 'off', onChange: this.handleChange.bind(this, 'name'), value: this.state.name }),
                                                        _react2.default.createElement(
                                                            'label',
                                                            { className: 'form-control-placeholder', htmlFor: 'name' },
                                                            'Name'
                                                        ),
                                                        _react2.default.createElement('img', { className: 'ins-input-img', style: { width: '19px' }, src: "/assets" + "/img/ins-usr.svg" })
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'col-12' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'ins-form-group' },
                                                        _react2.default.createElement('input', { type: 'number', id: 'number', className: 'form-control ins-form-control', required: true, autoComplete: 'off', 'data-param': 'phonenumber', onChange: this.handleChange.bind(this, 'phonenumber'), value: this.state.phonenumber, onKeyPress: this.handlekey.bind(this) }),
                                                        _react2.default.createElement(
                                                            'label',
                                                            { className: 'form-control-placeholder', htmlFor: 'number' },
                                                            'Phone Number'
                                                        ),
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'number-nine' },
                                                            '+91'
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'text-center col-12' },
                                                    _react2.default.createElement(
                                                        'button',
                                                        { className: 'adsBookingBtn', onClick: this.handleSubmit.bind(this) },
                                                        'Submit'
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-5 mb-3', onClick: this.handleSubmit.bind(this) },
                            _react2.default.createElement(_ChatPanel2.default, { newChatBtnAds: true })
                        )
                    )
                )
            )
        );
    }
}

exports.default = AdsBookingView;

/***/ }),

/***/ "./dev/js/containers/commons/adsBooking.js":
/*!*************************************************!*\
  !*** ./dev/js/containers/commons/adsBooking.js ***!
  \*************************************************/
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

var _adsBookingView = __webpack_require__(/*! ../../components/commons/adsBooking/adsBookingView.js */ "./dev/js/components/commons/adsBooking/adsBookingView.js");

var _adsBookingView2 = _interopRequireDefault(_adsBookingView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class adsBooking extends _react2.default.Component {
    render() {
        return _react2.default.createElement(_adsBookingView2.default, this.props);
    }
}

const mapStateToProps = state => {
    // let { insurnaceData} = state.INSURANCE
    return {
        // insurnaceData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        userCreate: (criteria, callback) => dispatch((0, _index.userCreate)(criteria, callback))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(adsBooking);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2Fkc0Jvb2tpbmcvYWRzQm9va2luZ1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvY29tbW9ucy9hZHNCb29raW5nLmpzIl0sIm5hbWVzIjpbIkFkc0Jvb2tpbmdWaWV3IiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJnZW5kZXIiLCJuYW1lIiwibWVzc2FnZSIsInBob25lbnVtYmVyIiwiYm9va2luZ3NHQSIsImhhbmRsZUNoYW5nZSIsImZlaWxkIiwiZXZlbnQiLCJnZW5kZXJfdmFsdWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwiZ2V0QXR0cmlidXRlIiwiaGFuZGxlU3VibWl0IiwibWVtYmVyX2RhdGEiLCJsZW5ndGgiLCJTbmFja0JhciIsInNob3ciLCJwb3MiLCJ0ZXh0IiwicGhvbmVfbnVtYmVyIiwidXNlckNyZWF0ZSIsInJlc3AiLCJzdGF0dXMiLCJoaXN0b3J5IiwicHVzaCIsImRhdGEiLCJHVE0iLCJnZXRVc2VySWQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic2VuZEV2ZW50IiwiaGFuZGxla2V5IiwicHJldmVudERlZmF1bHQiLCJyZW5kZXIiLCJiaW5kIiwid2lkdGgiLCJBU1NFVFNfQkFTRV9VUkwiLCJhZHNCb29raW5nIiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjcml0ZXJpYSIsImNhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxNQUFNQSxjQUFOLFNBQTZCQyxnQkFBTUMsU0FBbkMsQ0FBNkM7QUFDekNDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjtBQUNBLGFBQUtDLEtBQUwsR0FBYTtBQUNUQyxvQkFB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cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBDaGF0UGFuZWwgZnJvbSAnLi4vLi4vY29tbW9ucy9DaGF0UGFuZWwnXG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcblxuY2xhc3MgQWRzQm9va2luZ1ZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZ2VuZGVyOiAnJyxcbiAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgbWVzc2FnZTogJycsXG4gICAgICAgICAgICBwaG9uZW51bWJlcjogJycsXG4gICAgICAgICAgICBib29raW5nc0dBOmZhbHNlXG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlQ2hhbmdlKGZlaWxkLCBldmVudCkge1xuICAgICAgICBsZXQgZ2VuZGVyX3ZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wYXJhbScpXTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KCkge1xuICAgICAgICBsZXQgbWVtYmVyX2RhdGEgPSB7fVxuICAgICAgICBpZih0aGlzLnN0YXRlLmdlbmRlciAhPSAnJyAmJiB0aGlzLnN0YXRlLm5hbWUgIT0gJycgJiYgdGhpcy5zdGF0ZS5tZXNzYWdlICE9ICcnICYmIHRoaXMuc3RhdGUucGhvbmVudW1iZXIgIT0gJycpe1xuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5waG9uZW51bWJlci5sZW5ndGggPCAxMCl7XG4gICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiRW50ZXIgVmFsaWQgcGhvbmUgbnVtYmVyXCIgfSk7IFxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgbWVtYmVyX2RhdGEuZ2VuZGVyID0gdGhpcy5zdGF0ZS5nZW5kZXJcbiAgICAgICAgICAgICAgICBtZW1iZXJfZGF0YS5uYW1lID0gdGhpcy5zdGF0ZS5uYW1lXG4gICAgICAgICAgICAgICAgbWVtYmVyX2RhdGEubWVzc2FnZSA9IHRoaXMuc3RhdGUubWVzc2FnZVxuICAgICAgICAgICAgICAgIG1lbWJlcl9kYXRhLnBob25lX251bWJlciA9IHRoaXMuc3RhdGUucGhvbmVudW1iZXJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZXJDcmVhdGUobWVtYmVyX2RhdGEsKHJlc3ApPT57XG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3Auc3RhdHVzKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvbW9iaWxldmlld2NoYXQ/Ym90YWdlbnQ9dHJ1ZSZmb3JjZV9zdGFydD10cnVlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ2hhdCcsICdBY3Rpb24nOiAnZ2V0SGVscEJ0bkNsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2hhdC1idXR0b24tY2xpY2tlZC1sZWFkZm9ybScsIFwidXJsXCI6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSkgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJBbGwgZmllbGRzIGFyZSBtYW5hZHRvcnlcIiB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVrZXkoZXZlbnQpe1xuICAgICAgICBpZih0aGlzLnN0YXRlLnBob25lbnVtYmVyLmxlbmd0aCA9PSAxMCl7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG4gICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgLz5cblxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250YWluZXItdG9wLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNvbC1sZy03IGlucy1tYWluLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlZGdldCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLWNhcmQtaGVhZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtbmFtZS1oZWFkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdldCBleGNsdXNpdmUgZGlzY291bnRzIG9uIGJlc3QgbWVkaWNhbCBzZXJ2aWNlcyBuZWFyIHlvdSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uLW1hcmdpbi1ib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zdXJhbmNlLW1lbWJlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluc3VyYW5jZS1tZW1iZXItZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+TGV0IHVzIGtub3cgd2hhdCB5b3UgYXJlIGxvb2tpbmcgZm9yPzwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmtkLXRleHRhcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9XCJcIiB2YWx1ZT17dGhpcy5zdGF0ZS5tZXNzYWdlfSBkYXRhLXBhcmFtPVwibWVzc2FnZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMsICdtZXNzYWdlJyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZWxsLWhlZG5nXCI+VGVsbCB1cyBhYm91dCB5b3Vyc2VsZjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1yYWRpb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR0bC1yYWRpb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lci1yYWRpb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJnZW5kZXJcIiB2YWx1ZT0nbScgZGF0YS1wYXJhbT0nZ2VuZGVyJyBjaGVja2VkPXt0aGlzLnN0YXRlLmdlbmRlciA9PT0gJ20nfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzLCAnbScpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdGwtcmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGZW1hbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJnZW5kZXJcIiB2YWx1ZT0nZicgZGF0YS1wYXJhbT0nZ2VuZGVyJyBjaGVja2VkPXt0aGlzLnN0YXRlLmdlbmRlciA9PT0gJ2YnfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzLCAnZicpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLWdyb3VwIGlucC1tYXJnaW4tcmlnaHQgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBpbnMtZm9ybS1jb250cm9sXCIgZGF0YS1wYXJhbT1cIm5hbWVcIiByZXF1aXJlZCBhdXRvQ29tcGxldGU9XCJvZmZcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzLCAnbmFtZScpfSB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyXCIgaHRtbEZvcj1cIm5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbnMtaW5wdXQtaW1nXCIgc3R5bGU9e3sgd2lkdGg6ICcxOXB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pbnMtdXNyLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBpbnMtZm9ybS1jb250cm9sXCIgcmVxdWlyZWQgYXV0b0NvbXBsZXRlPVwib2ZmXCIgZGF0YS1wYXJhbT1cInBob25lbnVtYmVyXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcywgJ3Bob25lbnVtYmVyJyl9IHZhbHVlPXt0aGlzLnN0YXRlLnBob25lbnVtYmVyfSBvbktleVByZXNzPXt0aGlzLmhhbmRsZWtleS5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXJcIiBodG1sRm9yPVwibnVtYmVyXCI+UGhvbmUgTnVtYmVyPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibnVtYmVyLW5pbmVcIj4rOTE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhZHNCb29raW5nQnRuXCIgb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0+U3VibWl0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01IG1iLTNcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hhdFBhbmVsIG5ld0NoYXRCdG5BZHM9e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRzQm9va2luZ1ZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgeyB1c2VyQ3JlYXRlfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IEFkc0Jvb2tpbmdWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9hZHNCb29raW5nL2Fkc0Jvb2tpbmdWaWV3LmpzJ1xuXG5jbGFzcyBhZHNCb29raW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8QWRzQm9va2luZ1ZpZXcgey4uLnRoaXMucHJvcHN9Lz5cblx0XHQpXG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgLy8gbGV0IHsgaW5zdXJuYWNlRGF0YX0gPSBzdGF0ZS5JTlNVUkFOQ0VcbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBpbnN1cm5hY2VEYXRhXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VyQ3JlYXRlOiAoY3JpdGVyaWEsY2FsbGJhY2spID0+IGRpc3BhdGNoKHVzZXJDcmVhdGUoY3JpdGVyaWEsY2FsbGJhY2spKVxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzICwgbWFwRGlzcGF0Y2hUb1Byb3BzKShhZHNCb29raW5nKSJdLCJzb3VyY2VSb290IjoiIn0=