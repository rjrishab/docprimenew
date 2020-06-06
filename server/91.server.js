exports.ids = [91];
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

/***/ "./dev/js/components/vipClub/digitOrderView.js":
/*!*****************************************************!*\
  !*** ./dev/js/components/vipClub/digitOrderView.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DigitOrderView extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let fullName = '';
        if (this.props.orderdata) {
            let memberData = this.props.orderdata.member_details[0];
            if (memberData) {
                fullName = memberData.first_name + ' ' + memberData.middle_name + ' ' + memberData.last_name;
            }
        }
        return this.props.orderdata ? _react2.default.createElement(
            'div',
            { className: 'widget mrb-10' },
            _react2.default.createElement(
                'div',
                { className: 'ins-card-head' },
                _react2.default.createElement(
                    'div',
                    { className: 'ins-name-head-div d-flex align-items-start digit-logo' },
                    _react2.default.createElement('img', { className: 'img-fluid ', width: '60', src: 'https://www.reinsurancene.ws/wp-content/uploads/2019/03/digit-insurance-logo.jpg' }),
                    _react2.default.createElement(
                        'p',
                        { className: 'fw-500 mrt-10' },
                        'Digit Covid Group insurance',
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'span',
                            { className: 'ins-active-container' },
                            _react2.default.createElement(
                                'p',
                                null,
                                'Active ',
                                _react2.default.createElement('img', { src: "/assets" + "/img/chk-green.svg" })
                            )
                        )
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'ins-policy-date' },
                _react2.default.createElement(
                    'div',
                    { className: 'details-flex-cont' },
                    _react2.default.createElement(
                        'div',
                        { className: 'ins-policy-details' },
                        _react2.default.createElement(
                            'p',
                            null,
                            'Policy Purchase Date'
                        ),
                        _react2.default.createElement(
                            'span',
                            null,
                            this.props.orderdata.purchase_date
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'ins-policy-details' },
                        _react2.default.createElement(
                            'p',
                            null,
                            'Valid Upto'
                        ),
                        _react2.default.createElement(
                            'span',
                            null,
                            this.props.orderdata.expiry_date
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'ins-policy-members-details mt-20' },
                    _react2.default.createElement(
                        'p',
                        null,
                        _react2.default.createElement(
                            'span',
                            null,
                            'Premium'
                        ),
                        ' : Rs ',
                        this.props.orderdata.amount
                    ),
                    _react2.default.createElement(
                        'p',
                        { style: { 'textTransform': 'capitalize' } },
                        _react2.default.createElement(
                            'span',
                            null,
                            'Proposer Name '
                        ),
                        ' : ',
                        fullName
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        _react2.default.createElement(
                            'span',
                            null,
                            'Policy Number'
                        ),
                        ' : "Will be provided Shortly"'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        _react2.default.createElement(
                            'span',
                            null,
                            'Cover'
                        ),
                        ' : 1 \'Member(s)\''
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            { style: { 'textTransform': 'capitalize' } },
                            _react2.default.createElement(
                                'span',
                                { className: 'insa-tbl-names' },
                                ' ',
                                fullName,
                                ' '
                            )
                        )
                    )
                )
            )
        ) : _react2.default.createElement('div', null);
    }
}

exports.default = DigitOrderView;

/***/ }),

/***/ "./dev/js/containers/vipClub/DigitOrderPage.js":
/*!*****************************************************!*\
  !*** ./dev/js/containers/vipClub/DigitOrderPage.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _digitOrderView = __webpack_require__(/*! ../../components/vipClub/digitOrderView.js */ "./dev/js/components/vipClub/digitOrderView.js");

var _digitOrderView2 = _interopRequireDefault(_digitOrderView);

var _Loader = __webpack_require__(/*! ../../components/commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _DesktopProfileHeader = __webpack_require__(/*! ../../components/commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class DigitOrderPage extends _react2.default.Component {

    constructor(props) {
        super(props);
        const parsed = queryString.parse(this.props.location.search);
        this.state = {
            data: null,
            source: parsed.source,
            is_from_organic: parsed.fromOrganic,
            is_pb: parsed.utm_source ? parsed.utm_source && parsed.utm_source.includes('policybazaar.com') : false
        };
    }

    componentDidMount() {

        if (_storage2.default.checkAuth()) {
            this.props.getUserProfile(); // to get loggedIn user profile
        }
        if (window) {
            window.scrollTo(0, 0);
        }
        let dataParams = {
            id: this.props.match.params.id
        };
        console.log(dataParams);
        this.props.retrieveDigitInsuranceData(dataParams, (err, data) => {
            if (!err && data) {
                this.setState({ data });
            }
        });
    }

    render() {
        return _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'profile-body-wrap' },
                    _react2.default.createElement(_DesktopProfileHeader2.default, { showPackageStrip: true }),
                    _react2.default.createElement('div', { className: 'bottomMargin' }),
                    _react2.default.createElement(
                        'section',
                        { className: 'container article-container bottomMargin' },
                        _react2.default.createElement(
                            'div',
                            { className: 'row main-row parent-section-row justify-content-center' },
                            _react2.default.createElement(
                                'div',
                                { className: 'col-12 col-md-10 col-lg-10 center-column' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'container-fluid mt-20' },
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement('div', { className: 'bottomMargin' }),
                                        _react2.default.createElement(_digitOrderView2.default, _extends({}, this.props, { orderdata: this.state.data }))
                                    )
                                )
                            )
                        )
                    )
                )
            )
        );
    }
}

const mapStateToProps = state => {
    const USER = state.USER;
    let { common_utm_tags, user_loggedIn_number } = state.USER;
    // let {  digitPlans,selected_digit_plan } = state.VIPCLUB

    return {
        USER, common_utm_tags, user_loggedIn_number
    };
};

const mapDispatchToProps = dispatch => {
    return {

        getUserProfile: () => dispatch((0, _index.getUserProfile)()),
        sendOTP: (number, viaSms, viaWhatsapp, message_type, cb) => dispatch((0, _index.sendOTP)(number, viaSms, viaWhatsapp, message_type, cb)),
        submitOTP: (number, otp, extraParamsData, cb) => dispatch((0, _index.submitOTP)(number, otp, extraParamsData, cb)),
        resetAuth: () => dispatch((0, _index.resetAuth)()),
        retrieveDigitInsuranceData: (dataParams, cb) => dispatch((0, _index.retrieveDigitInsuranceData)(dataParams, cb))
        // selectDigitPlan :(data,cb) => dispatch(selectDigitPlan(data,cb))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DigitOrderPage);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvdmlwQ2x1Yi9kaWdpdE9yZGVyVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy92aXBDbHViL0RpZ2l0T3JkZXJQYWdlLmpzIl0sIm5hbWVzIjpbIkxvYWRlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsImNsYXNzVHlwZSIsImlGcmFtZVBvcHVwIiwiRGlnaXRPcmRlclZpZXciLCJzdGF0ZSIsImZ1bGxOYW1lIiwib3JkZXJkYXRhIiwibWVtYmVyRGF0YSIsIm1lbWJlcl9kZXRhaWxzIiwiZmlyc3RfbmFtZSIsIm1pZGRsZV9uYW1lIiwibGFzdF9uYW1lIiwiQVNTRVRTX0JBU0VfVVJMIiwicHVyY2hhc2VfZGF0ZSIsImV4cGlyeV9kYXRlIiwiYW1vdW50IiwicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiRGlnaXRPcmRlclBhZ2UiLCJwYXJzZWQiLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwiZGF0YSIsInNvdXJjZSIsImlzX2Zyb21fb3JnYW5pYyIsImZyb21PcmdhbmljIiwiaXNfcGIiLCJ1dG1fc291cmNlIiwiaW5jbHVkZXMiLCJjb21wb25lbnREaWRNb3VudCIsIlNUT1JBR0UiLCJjaGVja0F1dGgiLCJnZXRVc2VyUHJvZmlsZSIsIndpbmRvdyIsInNjcm9sbFRvIiwiZGF0YVBhcmFtcyIsImlkIiwibWF0Y2giLCJwYXJhbXMiLCJjb25zb2xlIiwibG9nIiwicmV0cmlldmVEaWdpdEluc3VyYW5jZURhdGEiLCJlcnIiLCJzZXRTdGF0ZSIsIm1hcFN0YXRlVG9Qcm9wcyIsIlVTRVIiLCJjb21tb25fdXRtX3RhZ3MiLCJ1c2VyX2xvZ2dlZEluX251bWJlciIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwic2VuZE9UUCIsIm51bWJlciIsInZpYVNtcyIsInZpYVdoYXRzYXBwIiwibWVzc2FnZV90eXBlIiwiY2IiLCJzdWJtaXRPVFAiLCJvdHAiLCJleHRyYVBhcmFtc0RhdGEiLCJyZXNldEF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVBLE1BQU1BLE1BQU4sU0FBcUJDLGdCQUFNQyxTQUEzQixDQUFxQztBQUNqQ0MsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOO0FBQ0g7O0FBRURDLGFBQVM7O0FBRUwsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFXLEtBQUtELEtBQUwsQ0FBV0UsU0FBWCxJQUF3QixnQkFBeEM7QUFDSSxtREFBSyxXQUFVLFdBQWYsR0FESjtBQUdRLGlCQUFLRixLQUFMLENBQVdHLFdBQVgsR0FDSTtBQUFBO0FBQUEsa0JBQUcsV0FBVSxlQUFiO0FBQUE7QUFBQSxhQURKLEdBQytFO0FBSnZGLFNBREo7QUFTSDtBQWhCZ0M7O2tCQW1CdEJQLE07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCZjs7Ozs7O2tCQUVlQSxnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmY7Ozs7OztBQUVBLE1BQU1RLGNBQU4sU0FBNkJQLGdCQUFNQyxTQUFuQyxDQUE2QztBQUN6Q0MsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOO0FBQ0EsYUFBS0ssS0FBTCxHQUFhLEVBQWI7QUFFSDs7QUFFREosYUFBUztBQUNMLFlBQUlLLFdBQVcsRUFBZjtBQUNBLFlBQUcsS0FBS04sS0FBTCxDQUFXTyxTQUFkLEVBQXdCO0FBQ3BCLGdCQUFJQyxhQUFhLEtBQUtSLEtBQUwsQ0FBV08sU0FBWCxDQUFxQkUsY0FBckIsQ0FBb0MsQ0FBcEMsQ0FBakI7QUFDQSxnQkFBSUQsVUFBSixFQUFlO0FBQ1hGLDJCQUFXRSxXQUFXRSxVQUFYLEdBQXdCLEdBQXhCLEdBQThC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QTBENUMsTUFBTXNCLGtCQUFtQnpDLEtBQUQsSUFBVztBQUMvQixVQUFNMEMsT0FBTzFDLE1BQU0wQyxJQUFuQjtBQUNBLFFBQUksRUFBRUMsZUFBRixFQUFtQkMsb0JBQW5CLEtBQTRDNUMsTUFBTTBDLElBQXREO0FBQ0E7O0FBRUEsV0FBTztBQUNIQSxZQURHLEVBQ0dDLGVBREgsRUFDb0JDO0FBRHBCLEtBQVA7QUFHSCxDQVJEOztBQVVBLE1BQU1DLHFCQUFzQkMsUUFBRCxJQUFjO0FBQ3JDLFdBQU87O0FBRUhqQix3QkFBZ0IsTUFBTWlCLFNBQVMsNEJBQVQsQ0FGbkI7QUFHSEMsaUJBQVMsQ0FBQ0MsTUFBRCxFQUFRQyxNQUFSLEVBQWVDLFdBQWYsRUFBMkJDLFlBQTNCLEVBQXlDQyxFQUF6QyxLQUFnRE4sU0FBUyxvQkFBUUUsTUFBUixFQUFlQyxNQUFmLEVBQXNCQyxXQUF0QixFQUFrQ0MsWUFBbEMsRUFBZ0RDLEVBQWhELENBQVQsQ0FIdEQ7QUFJSEMsbUJBQVcsQ0FBQ0wsTUFBRCxFQUFTTSxHQUFULEVBQWNDLGVBQWQsRUFBOEJILEVBQTlCLEtBQXFDTixTQUFTLHNCQUFVRSxNQUFWLEVBQWtCTSxHQUFsQixFQUFzQkMsZUFBdEIsRUFBdUNILEVBQXZDLENBQVQsQ0FKN0M7QUFLSEksbUJBQVcsTUFBTVYsU0FBUyx1QkFBVCxDQUxkO0FBTUhSLG9DQUE0QixDQUFDTixVQUFELEVBQVlvQixFQUFaLEtBQW1CTixTQUFTLHVDQUEyQmQsVUFBM0IsRUFBdUNvQixFQUF2QyxDQUFUO0FBQy9DO0FBUEcsS0FBUDtBQVNILENBVkQ7O2tCQWNlLHlCQUFRWCxlQUFSLEVBQTBCSSxrQkFBMUIsRUFBOEMvQixjQUE5QyxDIiwiZmlsZSI6IjkxLnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIExvYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc1R5cGUgfHwgXCJsb2FkZXJDaXJjdWxhclwifSA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcC1sb2FkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaUZyYW1lUG9wdXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0xMFwiPlJlZGlyZWN0aW5nIHlvdSB0byBQaGFybWVhc3kgd2Vic2l0ZS4uLjwvcD4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyXG4iLCJpbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIERpZ2l0T3JkZXJWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGZ1bGxOYW1lID0gJyc7XG4gICAgICAgIGlmKHRoaXMucHJvcHMub3JkZXJkYXRhKXtcbiAgICAgICAgICAgIGxldCBtZW1iZXJEYXRhID0gdGhpcy5wcm9wcy5vcmRlcmRhdGEubWVtYmVyX2RldGFpbHNbMF07XG4gICAgICAgICAgICBpZiAobWVtYmVyRGF0YSl7XG4gICAgICAgICAgICAgICAgZnVsbE5hbWUgPSBtZW1iZXJEYXRhLmZpcnN0X25hbWUgKyAnICcgKyBtZW1iZXJEYXRhLm1pZGRsZV9uYW1lICsgJyAnICsgbWVtYmVyRGF0YS5sYXN0X25hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vcmRlcmRhdGE/XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLWNhcmQtaGVhZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLW5hbWUtaGVhZC1kaXYgZC1mbGV4IGFsaWduLWl0ZW1zLXN0YXJ0IGRpZ2l0LWxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWQgXCIgd2lkdGg9XCI2MFwiIHNyYz1cImh0dHBzOi8vd3d3LnJlaW5zdXJhbmNlbmUud3Mvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDMvZGlnaXQtaW5zdXJhbmNlLWxvZ28uanBnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRGlnaXQgQ292aWQgR3JvdXAgaW5zdXJhbmNlPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucy1hY3RpdmUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QWN0aXZlIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2hrLWdyZWVuLnN2Z1wifSAvPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtcG9saWN5LWRhdGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMtZmxleC1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLXBvbGljeS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Qb2xpY3kgUHVyY2hhc2UgRGF0ZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLm9yZGVyZGF0YS5wdXJjaGFzZV9kYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLXBvbGljeS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5WYWxpZCBVcHRvPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxzcGFuPjExdGggT2N0IDIwMjE8L3NwYW4+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMub3JkZXJkYXRhLmV4cGlyeV9kYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtcG9saWN5LW1lbWJlcnMtZGV0YWlscyBtdC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICA8cD48c3Bhbj5QcmVtaXVtPC9zcGFuPiA6IFJzIHt0aGlzLnByb3BzLm9yZGVyZGF0YS5hbW91bnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyAndGV4dFRyYW5zZm9ybSc6ICdjYXBpdGFsaXplJyB9fT48c3Bhbj5Qcm9wb3NlciBOYW1lIDwvc3Bhbj4gOiB7ZnVsbE5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD48c3Bhbj5Qb2xpY3kgTnVtYmVyPC9zcGFuPiA6IFwiV2lsbCBiZSBwcm92aWRlZCBTaG9ydGx5XCI8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuPkNvdmVyPC9zcGFuPiA6IDEgJ01lbWJlcihzKSc8L3A+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17eyAndGV4dFRyYW5zZm9ybSc6ICdjYXBpdGFsaXplJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnNhLXRibC1uYW1lc1wiPiB7ZnVsbE5hbWV9IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwiaW5zYS1zdWItdGJsLW5hbWVzXCI+IFNoYWR5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImluc2Etc3ViLXRibC1uYW1lc1wiPiBUZXN0SW5nPC9zcGFuPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+OjxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5leHBvcnQgZGVmYXVsdCBEaWdpdE9yZGVyVmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7IHNlbmRPVFAsIHN1Ym1pdE9UUCwgcmVzZXRBdXRoLCBnZXRVc2VyUHJvZmlsZSwgcmV0cmlldmVEaWdpdEluc3VyYW5jZURhdGEgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IERpZ2l0T3JkZXJWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdmlwQ2x1Yi9kaWdpdE9yZGVyVmlldy5qcydcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0xvYWRlcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cbmNsYXNzIERpZ2l0T3JkZXJQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHsgICAgXG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgdGhpcy5zdGF0ZT17XG4gICAgICAgICAgICBkYXRhOm51bGwsIFxuICAgICAgICAgICAgc291cmNlOnBhcnNlZC5zb3VyY2UsXG4gICAgICAgICAgICBpc19mcm9tX29yZ2FuaWM6cGFyc2VkLmZyb21PcmdhbmljLFxuICAgICAgICAgICAgaXNfcGI6cGFyc2VkLnV0bV9zb3VyY2U/cGFyc2VkLnV0bV9zb3VyY2UgJiYgcGFyc2VkLnV0bV9zb3VyY2UuaW5jbHVkZXMoJ3BvbGljeWJhemFhci5jb20nKTpmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAoU1RPUkFHRS5jaGVja0F1dGgoKSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRVc2VyUHJvZmlsZSgpIC8vIHRvIGdldCBsb2dnZWRJbiB1c2VyIHByb2ZpbGVcbiAgICAgICAgfVxuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuICAgICAgICBsZXQgZGF0YVBhcmFtcyA9IHtcbiAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZFxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGFQYXJhbXMpO1xuICAgICAgICB0aGlzLnByb3BzLnJldHJpZXZlRGlnaXRJbnN1cmFuY2VEYXRhKGRhdGFQYXJhbXMsIChlcnIsIGRhdGEsKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWVyciAmJiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGEgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPGRpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG5cdFx0XHRcdFx0XHQ8UHJvZmlsZUhlYWRlciBzaG93UGFja2FnZVN0cmlwPXt0cnVlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b21NYXJnaW5cIj48L2Rpdj5cblx0XHRcdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBhcnRpY2xlLWNvbnRhaW5lciBib3R0b21NYXJnaW5cIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtMTAgY29sLWxnLTEwIGNlbnRlci1jb2x1bW5cIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTIwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tTWFyZ2luXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaWdpdE9yZGVyVmlldyB7Li4udGhpcy5wcm9wc30gb3JkZXJkYXRhPXt0aGlzLnN0YXRlLmRhdGF9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXYgPiAgICBcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+ICAgIFxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgY29uc3QgVVNFUiA9IHN0YXRlLlVTRVJcbiAgICBsZXQgeyBjb21tb25fdXRtX3RhZ3MsIHVzZXJfbG9nZ2VkSW5fbnVtYmVyIH0gPSBzdGF0ZS5VU0VSXG4gICAgLy8gbGV0IHsgIGRpZ2l0UGxhbnMsc2VsZWN0ZWRfZGlnaXRfcGxhbiB9ID0gc3RhdGUuVklQQ0xVQlxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgVVNFUiwgY29tbW9uX3V0bV90YWdzLCB1c2VyX2xvZ2dlZEluX251bWJlclxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXG4gICAgICAgIGdldFVzZXJQcm9maWxlOiAoKSA9PiBkaXNwYXRjaChnZXRVc2VyUHJvZmlsZSgpKSxcbiAgICAgICAgc2VuZE9UUDogKG51bWJlcix2aWFTbXMsdmlhV2hhdHNhcHAsbWVzc2FnZV90eXBlLCBjYikgPT4gZGlzcGF0Y2goc2VuZE9UUChudW1iZXIsdmlhU21zLHZpYVdoYXRzYXBwLG1lc3NhZ2VfdHlwZSwgY2IpKSxcbiAgICAgICAgc3VibWl0T1RQOiAobnVtYmVyLCBvdHAsIGV4dHJhUGFyYW1zRGF0YSxjYikgPT4gZGlzcGF0Y2goc3VibWl0T1RQKG51bWJlciwgb3RwLGV4dHJhUGFyYW1zRGF0YSwgY2IpKSxcbiAgICAgICAgcmVzZXRBdXRoOiAoKSA9PiBkaXNwYXRjaChyZXNldEF1dGgoKSksXG4gICAgICAgIHJldHJpZXZlRGlnaXRJbnN1cmFuY2VEYXRhOiAoZGF0YVBhcmFtcyxjYikgPT4gZGlzcGF0Y2gocmV0cmlldmVEaWdpdEluc3VyYW5jZURhdGEoZGF0YVBhcmFtcywgY2IpKSxcbiAgICAgICAgLy8gc2VsZWN0RGlnaXRQbGFuIDooZGF0YSxjYikgPT4gZGlzcGF0Y2goc2VsZWN0RGlnaXRQbGFuKGRhdGEsY2IpKVxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzICwgbWFwRGlzcGF0Y2hUb1Byb3BzKShEaWdpdE9yZGVyUGFnZSkiXSwic291cmNlUm9vdCI6IiJ9