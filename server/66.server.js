exports.ids = [66];
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

/***/ "./dev/js/components/commons/referral/index.js":
/*!*****************************************************!*\
  !*** ./dev/js/components/commons/referral/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _referralView = __webpack_require__(/*! ./referralView */ "./dev/js/components/commons/referral/referralView.js");

var _referralView2 = _interopRequireDefault(_referralView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _referralView2.default;

/***/ }),

/***/ "./dev/js/components/commons/referral/referralView.js":
/*!************************************************************!*\
  !*** ./dev/js/components/commons/referral/referralView.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _config = __webpack_require__(/*! ../../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _LeftBar = __webpack_require__(/*! ../../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _reactCopyToClipboard = __webpack_require__(/*! react-copy-to-clipboard */ "react-copy-to-clipboard");

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _staticDisclaimer = __webpack_require__(/*! ../../commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

var _Loader = __webpack_require__(/*! ../Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class ReferralView extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            referralCode: null,
            whatsapp_text: null,
            referral_amt: null
        };
    }

    componentDidMount() {
        if (window) {
            window.scrollTo(0, 0);
        }

        if (_storage2.default.checkAuth()) {
            this.props.fetchReferralCode().then(res => {
                if (res && res.code) {
                    this.setState({ referralCode: res.code, whatsapp_text: res.whatsapp_text, referral_amt: res.referral_amt });
                }
            }).catch(e => {});
        }
    }

    getLink() {
        return `${_config2.default.API_BASE_URL}/login?referral=${this.state.referralCode}`;
    }

    getShareText() {
        return this.state.whatsapp_text;
        // return `Save upto 50% on doctor appointments and lab tests. Sign up on docprime.com with my code ${this.state.referralCode} and get Rs 50 `
    }

    getFullText() {
        return this.getShareText() + " " + this.getLink();
    }

    share() {
        if (navigator.share && this.state.referralCode) {
            navigator.share({
                title: 'DocPrime Referral Code',
                text: this.getShareText(),
                url: this.getLink()
            }).then(() => console.log('Successful share')).catch(error => console.log('Error sharing', error));
        }
    }

    render() {
        return _react2.default.createElement(
            'div',
            { className: 'profile-body-wrap lgn-ovrflow' },
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
                            'div',
                            { className: 'container-fluid' },
                            _react2.default.createElement(
                                'div',
                                { className: 'row' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-12' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'widget mrng-top-12 mrb-15' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'widget-content' },
                                            _react2.default.createElement(
                                                'h4',
                                                { className: 'ref-heading' },
                                                'Refer and Earn'
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'multi-step-for-earn' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'steps' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'img-step' },
                                                        _react2.default.createElement('img', { src: "/assets" + "/img/step-1.png", alt: 'img', className: 'img-1' }),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'badge badge-refer' },
                                                            '1'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'text-step' },
                                                        'Invite your friends on ',
                                                        _react2.default.createElement('br', null),
                                                        ' docprime.com'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'steps step-2' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'text-step text-step-2' },
                                                        'Your friends get ',
                                                        _react2.default.createElement('img', { src: "/assets" + "/img/rupee-icon.svg", alt: 'rupee-icon', className: 'icon-rupee' }),
                                                        ' ',
                                                        this.props.refer_amount,
                                                        ' on ',
                                                        _react2.default.createElement('br', null),
                                                        ' Signup',
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'badge badge-refer' },
                                                            '2'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'img-step' },
                                                        _react2.default.createElement('img', { src: "/assets" + "/img/step-2.png", alt: 'img', className: '' })
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'steps' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'img-step' },
                                                        _react2.default.createElement('img', { src: "/assets" + "/img/step-3.png", alt: 'img', className: 'img-3' }),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'badge badge-refer' },
                                                            '3'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'text-step' },
                                                        'You get ',
                                                        _react2.default.createElement('img', { src: "/assets" + "/img/rupee-icon.svg", alt: 'rupee-icon', className: 'icon-rupee' }),
                                                        ' ',
                                                        this.props.refer_amount,
                                                        ' on completion of your friend\u2019s first appointment or on Gold Membership purchase'
                                                    )
                                                )
                                            ),
                                            _storage2.default.checkAuth() ? _react2.default.createElement(
                                                'div',
                                                null,
                                                _react2.default.createElement(
                                                    _reactCopyToClipboard.CopyToClipboard,
                                                    { text: this.getLink(), onCopy: () => {
                                                            _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Referral Link Copied" });
                                                        } },
                                                    _react2.default.createElement(
                                                        'h4',
                                                        { className: 'inviteCodeShare' },
                                                        _react2.default.createElement(
                                                            'span',
                                                            null,
                                                            this.state.referralCode
                                                        ),
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'refr-sub-cpy' },
                                                            _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + '/img/copy.svg' }),
                                                            'Tap to copy'
                                                        )
                                                    )
                                                ),
                                                this.state.referralCode ? _react2.default.createElement(
                                                    'a',
                                                    { className: 'text-center ref-whtsp', href: "whatsapp://send?text=" + this.getFullText() },
                                                    _react2.default.createElement('img', { src: "/assets" + "/img/wa-logo.svg", alt: 'whatsapp' }),
                                                    'Share on Whatsapp'
                                                ) : ''
                                            ) : _react2.default.createElement(
                                                'a',
                                                { style: { marginTop: 10 }, onClick: () => {
                                                        this.props.history.push('/login');
                                                    }, href: 'javascript:void(0);', className: 'btn-share' },
                                                'Login to see your invite code'
                                            )
                                        )
                                    )
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

exports.default = ReferralView;

/***/ }),

/***/ "./dev/js/containers/commons/referral.js":
/*!***********************************************!*\
  !*** ./dev/js/containers/commons/referral.js ***!
  \***********************************************/
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

var _referral = __webpack_require__(/*! ../../components/commons/referral */ "./dev/js/components/commons/referral/index.js");

var _referral2 = _interopRequireDefault(_referral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Referral extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {

        return _react2.default.createElement(_referral2.default, this.props);
    }
}

Referral.contextTypes = {
    router: () => null
};
const mapStateToProps = state => {
    let { refer_amount } = state.USER;
    return {
        refer_amount
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchReferralCode: () => dispatch((0, _index.fetchReferralCode)())
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Referral);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9yZWZlcnJhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3JlZmVycmFsL3JlZmVycmFsVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9jb21tb25zL3JlZmVycmFsLmpzIl0sIm5hbWVzIjpbImlzVmlwIiwiY29sb3IiLCJmb250U2l6ZSIsInBhZGRpbmdCb3R0b20iLCJMb2FkZXIiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJyZW5kZXIiLCJjbGFzc1R5cGUiLCJpRnJhbWVQb3B1cCIsIlJlZmVycmFsVmlldyIsInF1ZXJ5U3RyaW5nIiwicmVxdWlyZSIsInN0YXRlIiwicmVmZXJyYWxDb2RlIiwid2hhdHNhcHBfdGV4dCIsInJlZmVycmFsX2FtdCIsImNvbXBvbmVudERpZE1vdW50Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJTVE9SQUdFIiwiY2hlY2tBdXRoIiwiZmV0Y2hSZWZlcnJhbENvZGUiLCJ0aGVuIiwicmVzIiwiY29kZSIsInNldFN0YXRlIiwiY2F0Y2giLCJlIiwiZ2V0TGluayIsIkNPTkZJRyIsIkFQSV9CQVNFX1VSTCIsImdldFNoYXJlVGV4dCIsImdldEZ1bGxUZXh0Iiwic2hhcmUiLCJuYXZpZ2F0b3IiLCJ0aXRsZSIsInRleHQiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJBU1NFVFNfQkFTRV9VUkwiLCJyZWZlcl9hbW91bnQiLCJTbmFja0JhciIsInNob3ciLCJwb3MiLCJtYXJnaW5Ub3AiLCJoaXN0b3J5IiwicHVzaCIsIlJlZmVycmFsIiwiY29udGV4dFR5cGVzIiwicm91dGVyIiwibWFwU3RhdGVUb1Byb3BzIiwiVVNFUiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7a0JBQ2UsQ0FBQyxFQUFFQSxLQUFGLEVBQUQsS0FBZTtBQUM3QixXQUFRO0FBQUE7QUFBQSxVQUFLLFdBQVksZUFBY0EsUUFBTSxrQkFBTixHQUF5QixFQUFHLEVBQTNEO0FBQ087QUFBQTtBQUFBLGNBQUcsV0FBVSxlQUFiLEVBQTZCLE9BQU8sRUFBRUMsT0FBTyxTQUFULEVBQW9CQyxVQUFVLEVBQTlCLEVBQXBDO0FBQUE7QUFBQSxTQURQO0FBRU87QUFBQTtBQUFBLGNBQUssV0FBVSw0QkFBZixFQUE0QyxPQUFPLEVBQUVDLGVBQWUsQ0FBakIsRUFBbkQ7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEo7QUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFGUCxLQUFSO0FBU0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEQ7Ozs7OztBQUVBLE1BQU1DLE1BQU4sU0FBcUJDLGdCQUFNQyxTQUEzQixDQUFxQztBQUNqQ0MsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOO0FBQ0g7O0FBRURDLGFBQVM7O0FBRUwsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFXLEtBQUtELEtBQUwsQ0FBV0UsU0FBWCxJQUF3QixnQkFBeEM7QUFDSSxtREFBSyxXQUFVLFdBQWYsR0FESjtBQUdRLGlCQUFLRixLQUFMLENBQVdHLFdBQVgsR0FDSTtBQUFBO0FBQUEsa0JBQUcsV0FBVSxlQUFiO0FBQUE7QUFBQSxhQURKLEdBQytFO0FBSnZGLFNBREo7QUFTSDtBQWhC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Ozs7Ozs7Ozs7Ozs7Ozs7QUMzS2Y7Ozs7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7O0FBRUEsTUFBTXdDLFFBQU4sU0FBdUIvQyxnQkFBTUMsU0FBN0IsQ0FBdUM7QUFDbkNDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjtBQUNIOztBQU1EVyx3QkFBb0IsQ0FFbkI7O0FBRURWLGFBQVM7O0FBRUwsZUFDSSw4QkFBQyxrQkFBRCxFQUFrQixLQUFLRCxLQUF2QixDQURKO0FBR0g7QUFsQmtDOztBQUFqQzRDLFEsQ0FLS0MsWSxHQUFlO0FBQ2xCQyxZQUFRLE1BQU07QUFESSxDO0FBZ0IxQixNQUFNQyxrQkFBbUJ4QyxLQUFELElBQVc7QUFDL0IsUUFBSSxFQUFFOEIsWUFBRixLQUFtQjlCLE1BQU15QyxJQUE3QjtBQUNBLFdBQU87QUFDSFg7QUFERyxLQUFQO0FBR0gsQ0FMRDs7QUFPQSxNQUFNWSxxQkFBc0JDLFFBQUQsSUFBYztBQUNyQyxXQUFPO0FBQ0hsQywyQkFBbUIsTUFBTWtDLFNBQVMsK0JBQVQ7QUFEdEIsS0FBUDtBQUdILENBSkQ7O2tCQU9lLHlCQUFRSCxlQUFSLEVBQXlCRSxrQkFBekIsRUFBNkNMLFFBQTdDLEMiLCJmaWxlIjoiNjYuc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuZXhwb3J0IGRlZmF1bHQgKHsgaXNWaXAgfSkgPT4ge1xuXHRyZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtgZHNjbG1lci1mdHIgJHtpc1ZpcD8nbWFyZ2luLWJvdHRvbS01NSc6Jyd9YH0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0yMFwiIHN0eWxlPXt7IGNvbG9yOiAnIzhhOGE4YScsIGZvbnRTaXplOiAxMCB9fSA+VGhlIFdlYnNpdGUgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgaW4gY2FzZSBvZiBhIG1lZGljYWwgZW1lcmdlbmN5IGFuZC8gb3IgY3JpdGljYWwgY2FyZSBhbmQgdGhlIHVzZXIgc2hvdWxkIGRpcmVjdGx5IGNvbnRhY3QgaGlzLyBoZXIgbWVkaWNhbCBzZXJ2aWNlIHByb3ZpZGVyIGZvciBQaHlzaWNhbCBFeGFtaW5hdGlvbi4gRG9jcHJpbWUgaXMgc29sZWx5IGEgdGVjaG5vbG9neSBwYXJ0bmVyLjwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBmb290ZXItbmV3LWNvcHlyZ2h0XCIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogNSB9fSA+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRvY3ByaW1lLmNvbSBDb3B5cmlnaHQgJmNvcHk7IDIwMjAuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5BbGwgcmlnaHRzIHJlc2VydmVkLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+RE9DUFJJTUUgVEVDSE5PTE9HSUVTIFBSSVZBVEUgTElNSVRFRDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+Q0lOIDogVTc0OTk5SFIyMDE2UFRDMDY0MzEyPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+KVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIExvYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc1R5cGUgfHwgXCJsb2FkZXJDaXJjdWxhclwifSA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcC1sb2FkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaUZyYW1lUG9wdXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0xMFwiPlJlZGlyZWN0aW5nIHlvdSB0byBQaGFybWVhc3kgd2Vic2l0ZS4uLjwvcD4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyXG4iLCJpbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXIiLCJpbXBvcnQgUmVmZXJyYWxWaWV3IGZyb20gJy4vcmVmZXJyYWxWaWV3J1xuXG5leHBvcnQgZGVmYXVsdCBSZWZlcnJhbFZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcblxuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi8uLi9jb25maWcnXG5cbmltcG9ydCBMZWZ0QmFyIGZyb20gJy4uLy4uL2NvbW1vbnMvTGVmdEJhcidcbmltcG9ydCBSaWdodEJhciBmcm9tICcuLi8uLi9jb21tb25zL1JpZ2h0QmFyJ1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCB7IENvcHlUb0NsaXBib2FyZCB9IGZyb20gJ3JlYWN0LWNvcHktdG8tY2xpcGJvYXJkJztcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuaW1wb3J0IERpc2NsYWltZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9Ib21lL3N0YXRpY0Rpc2NsYWltZXIuanMnXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlcic7XG5cblxuY2xhc3MgUmVmZXJyYWxWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHJlZmVycmFsQ29kZTogbnVsbCxcbiAgICAgICAgICAgIHdoYXRzYXBwX3RleHQ6bnVsbCxcbiAgICAgICAgICAgIHJlZmVycmFsX2FtdDpudWxsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoU1RPUkFHRS5jaGVja0F1dGgoKSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5mZXRjaFJlZmVycmFsQ29kZSgpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLmNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlZmVycmFsQ29kZTogcmVzLmNvZGUsIHdoYXRzYXBwX3RleHQ6cmVzLndoYXRzYXBwX3RleHQsIHJlZmVycmFsX2FtdDpyZXMucmVmZXJyYWxfYW10IH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZ2V0TGluaygpIHtcbiAgICAgICAgcmV0dXJuIGAke0NPTkZJRy5BUElfQkFTRV9VUkx9L2xvZ2luP3JlZmVycmFsPSR7dGhpcy5zdGF0ZS5yZWZlcnJhbENvZGV9YFxuICAgIH1cblxuICAgIGdldFNoYXJlVGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUud2hhdHNhcHBfdGV4dFxuICAgICAgICAvLyByZXR1cm4gYFNhdmUgdXB0byA1MCUgb24gZG9jdG9yIGFwcG9pbnRtZW50cyBhbmQgbGFiIHRlc3RzLiBTaWduIHVwIG9uIGRvY3ByaW1lLmNvbSB3aXRoIG15IGNvZGUgJHt0aGlzLnN0YXRlLnJlZmVycmFsQ29kZX0gYW5kIGdldCBScyA1MCBgXG4gICAgfVxuXG4gICAgZ2V0RnVsbFRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFNoYXJlVGV4dCgpICsgXCIgXCIgKyB0aGlzLmdldExpbmsoKVxuICAgIH1cblxuICAgIHNoYXJlKCkge1xuICAgICAgICBpZiAobmF2aWdhdG9yLnNoYXJlICYmIHRoaXMuc3RhdGUucmVmZXJyYWxDb2RlKSB7XG4gICAgICAgICAgICBuYXZpZ2F0b3Iuc2hhcmUoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnRG9jUHJpbWUgUmVmZXJyYWwgQ29kZScsXG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5nZXRTaGFyZVRleHQoKSxcbiAgICAgICAgICAgICAgICB1cmw6IHRoaXMuZ2V0TGluaygpLFxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiBjb25zb2xlLmxvZygnU3VjY2Vzc2Z1bCBzaGFyZScpKVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKCdFcnJvciBzaGFyaW5nJywgZXJyb3IpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXAgbGduLW92cmZsb3dcIj5cbiAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciAvPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250YWluZXItdG9wLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0QmFyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctNyBjZW50ZXItY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJuZy10b3AtMTIgbXJiLTE1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJyZWYtaGVhZGluZ1wiPlJlZmVyIGFuZCBFYXJuPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXVsdGktc3RlcC1mb3ItZWFyblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctc3RlcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zdGVwLTEucG5nXCJ9IGFsdD1cImltZ1wiIGNsYXNzTmFtZT1cImltZy0xXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcmVmZXJcIj4xPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc3RlcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW52aXRlIHlvdXIgZnJpZW5kcyBvbiA8YnIgLz4gZG9jcHJpbWUuY29tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcHMgc3RlcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zdGVwIHRleHQtc3RlcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIGZyaWVuZHMgZ2V0IDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcnVwZWUtaWNvbi5zdmdcIn0gYWx0PVwicnVwZWUtaWNvblwiIGNsYXNzTmFtZT1cImljb24tcnVwZWVcIiAvPiB7dGhpcy5wcm9wcy5yZWZlcl9hbW91bnR9IG9uIDxiciAvPiBTaWdudXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcmVmZXJcIj4yPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLXN0ZXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvc3RlcC0yLnBuZ1wifSBhbHQ9XCJpbWdcIiBjbGFzc05hbWU9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXBzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLXN0ZXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvc3RlcC0zLnBuZ1wifSBhbHQ9XCJpbWdcIiBjbGFzc05hbWU9XCJpbWctM1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXJlZmVyXCI+MzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc3RlcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91IGdldCA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3J1cGVlLWljb24uc3ZnXCJ9IGFsdD1cInJ1cGVlLWljb25cIiBjbGFzc05hbWU9XCJpY29uLXJ1cGVlXCIgLz4ge3RoaXMucHJvcHMucmVmZXJfYW1vdW50fSBvbiBjb21wbGV0aW9uIG9mIHlvdXIgZnJpZW5k4oCZcyBmaXJzdCBhcHBvaW50bWVudCBvciBvbiBHb2xkIE1lbWJlcnNoaXAgcHVyY2hhc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTVE9SQUdFLmNoZWNrQXV0aCgpID8gPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmQgdGV4dD17dGhpcy5nZXRMaW5rKCl9IG9uQ29weT17KCkgPT4geyBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUmVmZXJyYWwgTGluayBDb3BpZWRcIiB9KTsgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImludml0ZUNvZGVTaGFyZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0aGlzLnN0YXRlLnJlZmVycmFsQ29kZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVmci1zdWItY3B5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jb3B5LnN2Zyd9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUYXAgdG8gY29weVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvbi1yZWZlcnJhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucmVmZXJyYWxDb2RlID8gPHVsIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPXtcIndoYXRzYXBwOi8vc2VuZD90ZXh0PVwiICsgdGhpcy5nZXRGdWxsVGV4dCgpfT48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3doYXRzYXBwLWljb24ucG5nXCJ9IGFsdD1cIndoYXRzYXBwXCIgLz48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9e2BtYWlsdG86P3N1YmplY3Q9RG9jUHJpbWUgUmVmZXImYm9keT0ke3RoaXMuZ2V0RnVsbFRleHQoKX1gfT48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2VtYWlsLWljb24ucG5nXCJ9IGFsdD1cImVtYWlsXCIgLz48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9e2BzbXM6PyZib2R5PSR7dGhpcy5nZXRMaW5rKCl9YH0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jaGF0LWljb24ucG5nXCJ9IGFsdD1cImNoYXRcIiAvPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBpZD1cImZiLXNoYXJlXCIgdHlwZT1cImljb25fbGlua1wiIG9uQ2xpY2s9eygpID0+IHsgd2luZG93Lm9wZW4oYGh0dHA6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci5waHA/cz0xMDAmcFt0aXRsZV09RG9jUHJpbWUgUmVmZXImcFtzdW1tYXJ5XT0ke3RoaXMuZ2V0U2hhcmVUZXh0KCl9JnBbdXJsXT0ke3RoaXMuZ2V0TGluaygpfScsJ3NoYXJlcicsJ3Rvb2xiYXI9MCxzdGF0dXM9MCx3aWR0aD01ODAsaGVpZ2h0PTMyNWApIH19IGhyZWY9XCJqYXZhc2NyaXB0OiB2b2lkKDApXCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9mYWNlYm9vay1pY29uLnBuZ1wifSBhbHQ9XCJmYWNlYm9va1wiIC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnNoYXJlID8gPGEgb25DbGljaz17dGhpcy5zaGFyZS5iaW5kKHRoaXMpfSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzTmFtZT1cImJ0bi1zaGFyZVwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvc2hhcmUtaWNvbi5wbmdcIn0gYWx0PVwic2hhcmVcIiAvPiBTaGFyZSBSZWZlcnJhbCBMaW5rPC9hPiA6IDxDb3B5VG9DbGlwYm9hcmQgdGV4dD17dGhpcy5nZXRMaW5rKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PiB7IFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJSZWZlcnJhbCBMaW5rIENvcGllZFwiIH0pOyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5zaGFyZS5iaW5kKHRoaXMpfSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzTmFtZT1cImJ0bi1zaGFyZVwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvc2hhcmUtaWNvbi5wbmdcIn0gYWx0PVwic2hhcmVcIiAvPiBTaGFyZSBSZWZlcnJhbCBMaW5rPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPiovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yZWZlcnJhbENvZGUgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciByZWYtd2h0c3BcIiBocmVmPXtcIndoYXRzYXBwOi8vc2VuZD90ZXh0PVwiICsgdGhpcy5nZXRGdWxsVGV4dCgpfT48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3dhLWxvZ28uc3ZnXCJ9IGFsdD1cIndoYXRzYXBwXCIgLz5TaGFyZSBvbiBXaGF0c2FwcDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogPGEgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMCB9fSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvbG9naW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3NOYW1lPVwiYnRuLXNoYXJlXCI+TG9naW4gdG8gc2VlIHlvdXIgaW52aXRlIGNvZGU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaWdodEJhciBub0NoYXRCdXR0b249e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8RGlzY2xhaW1lciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWZlcnJhbFZpZXdcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBmZXRjaFJlZmVycmFsQ29kZSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5cbmltcG9ydCBSZWZlcnJhbFZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL3JlZmVycmFsJ1xuXG5jbGFzcyBSZWZlcnJhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgcm91dGVyOiAoKSA9PiBudWxsXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWZlcnJhbFZpZXcgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICBsZXQgeyByZWZlcl9hbW91bnQgfSA9IHN0YXRlLlVTRVJcbiAgICByZXR1cm4ge1xuICAgICAgICByZWZlcl9hbW91bnRcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGZldGNoUmVmZXJyYWxDb2RlOiAoKSA9PiBkaXNwYXRjaChmZXRjaFJlZmVycmFsQ29kZSgpKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShSZWZlcnJhbCk7XG4iXSwic291cmNlUm9vdCI6IiJ9