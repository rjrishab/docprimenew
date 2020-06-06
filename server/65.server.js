exports.ids = [65];
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

/***/ "./dev/js/components/commons/codPaymentSummary/codPaymentSummary.js":
/*!**************************************************************************!*\
  !*** ./dev/js/components/commons/codPaymentSummary/codPaymentSummary.js ***!
  \**************************************************************************/
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

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _staticDisclaimer = __webpack_require__(/*! ../../commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");


class CodPaymentView extends _react2.default.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        if (window) {
            window.scrollTo(0, 0);
        }

        const parsed = queryString.parse(this.props.location.search);

        if (_storage2.default.checkAuth() && parsed.order_id) {
            this.props.fetchOrderSummary(parsed.order_id).then(res => {
                if (res.data && res.data.length) {
                    this.setState({ items: res.data });
                }
            }).catch(e => {});
        } else {
            this.props.history.push('/');
        }
    }

    proceed(order_id) {

        this.props.history.push(`/payment/${order_id}`);
    }

    render() {

        const parsed = queryString.parse(this.props.location.search);
        let amount_payable = 0;
        let doctor_name = '';
        if (this.state.items && this.state.items.length) {
            this.state.items.map((order, i) => {
                if (i == 0 && order.data && order.data.doctor && order.data.doctor.name) {
                    doctor_name = order.data.doctor.name;
                }
                amount_payable += parseInt(order.deal_price);
            });
        }

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
                            'div',
                            { className: 'container-fluid cardMainPaddingRmv' },
                            _react2.default.createElement(
                                'div',
                                { className: 'row mrb-20' },
                                parsed.order_id && this.state.items && this.state.items.length ? _react2.default.createElement(
                                    'div',
                                    { className: 'col-12' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'widget mrb-15 mrng-top-12' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'widget-content' },
                                            _react2.default.createElement(
                                                'h1',
                                                { className: 'cod-id' },
                                                'Order id : ',
                                                parsed.order_id
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'cod-content' },
                                                doctor_name ? _react2.default.createElement(
                                                    'p',
                                                    { className: 'cod-prc-bkng' },
                                                    `Appointment with ${doctor_name}`
                                                ) : '',
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'cod-prd' },
                                                    '\u20B9 ',
                                                    amount_payable
                                                ),
                                                _react2.default.createElement(
                                                    'button',
                                                    { className: 'cod-btn', onClick: this.proceed.bind(this, parsed.order_id) },
                                                    'Proceed to Pay'
                                                )
                                            )
                                        )
                                    )
                                ) : _react2.default.createElement(
                                    'div',
                                    { className: 'col-12' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'widget mrb-15 mrng-top-12' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'widget-content' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'cod-content' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'cod-prc-bkng' },
                                                    'No Appointment Found for this Order Id'
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(_RightBar2.default, { extraClass: ' chat-float-btn-2', noChatButton: true, msgTemplate: 'gold_general_template' })
                )
            ),
            _react2.default.createElement(_staticDisclaimer2.default, null)
        );
    }
}

exports.default = CodPaymentView;

/***/ }),

/***/ "./dev/js/components/commons/codPaymentSummary/index.js":
/*!**************************************************************!*\
  !*** ./dev/js/components/commons/codPaymentSummary/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _codPaymentSummary = __webpack_require__(/*! ./codPaymentSummary.js */ "./dev/js/components/commons/codPaymentSummary/codPaymentSummary.js");

var _codPaymentSummary2 = _interopRequireDefault(_codPaymentSummary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _codPaymentSummary2.default;

/***/ }),

/***/ "./dev/js/containers/commons/codPayment.js":
/*!*************************************************!*\
  !*** ./dev/js/containers/commons/codPayment.js ***!
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

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _codPaymentSummary = __webpack_require__(/*! ../../components/commons/codPaymentSummary */ "./dev/js/components/commons/codPaymentSummary/index.js");

var _codPaymentSummary2 = _interopRequireDefault(_codPaymentSummary);

var _Loader = __webpack_require__(/*! ../../components/commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");


class CodPaymentPage extends _react2.default.Component {

	constructor(props) {
		super(props);
		this.state = {
			showPaymentPage: false
		};
	}

	componentDidMount() {
		const parsed = queryString.parse(this.props.location.search);
		if (parsed.token) {
			this.props.agentLogin(parsed.token, () => {
				setTimeout(() => {
					this.setState({ showPaymentPage: true });
				}, 100);
			});
		} else {
			this.props.history.push('/');
		}
	}

	render() {

		return _react2.default.createElement(
			_react2.default.Fragment,
			null,
			this.state.showPaymentPage ? _react2.default.createElement(_codPaymentSummary2.default, this.props) : _react2.default.createElement(_Loader2.default, null)
		);
	}
}

const mapStateTopProps = state => {
	return {};
};

const mapDispatchTopProps = dispatch => {

	return {
		fetchOrderSummary: order_id => dispatch((0, _index.fetchOrderSummary)(order_id)),
		agentLogin: (token, cb) => dispatch((0, _index.agentLogin)(token, cb))
	};
};

exports.default = (0, _reactRedux.connect)(mapStateTopProps, mapDispatchTopProps)(CodPaymentPage);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9jb2RQYXltZW50U3VtbWFyeS9jb2RQYXltZW50U3VtbWFyeS5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2NvZFBheW1lbnRTdW1tYXJ5L2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL2NvbW1vbnMvY29kUGF5bWVudC5qcyJdLCJuYW1lcyI6WyJpc1ZpcCIsImNvbG9yIiwiZm9udFNpemUiLCJwYWRkaW5nQm90dG9tIiwiTG9hZGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIiwiY2xhc3NUeXBlIiwiaUZyYW1lUG9wdXAiLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJDb2RQYXltZW50VmlldyIsInN0YXRlIiwiaXRlbXMiLCJjb21wb25lbnREaWRNb3VudCIsIndpbmRvdyIsInNjcm9sbFRvIiwicGFyc2VkIiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsIlNUT1JBR0UiLCJjaGVja0F1dGgiLCJvcmRlcl9pZCIsImZldGNoT3JkZXJTdW1tYXJ5IiwidGhlbiIsInJlcyIsImRhdGEiLCJsZW5ndGgiLCJzZXRTdGF0ZSIsImNhdGNoIiwiZSIsImhpc3RvcnkiLCJwdXNoIiwicHJvY2VlZCIsImFtb3VudF9wYXlhYmxlIiwiZG9jdG9yX25hbWUiLCJtYXAiLCJvcmRlciIsImkiLCJkb2N0b3IiLCJuYW1lIiwicGFyc2VJbnQiLCJkZWFsX3ByaWNlIiwiYmluZCIsIkNvZFN1bW1hcnlWaWV3IiwiQ29kUGF5bWVudFBhZ2UiLCJzaG93UGF5bWVudFBhZ2UiLCJ0b2tlbiIsImFnZW50TG9naW4iLCJzZXRUaW1lb3V0IiwibWFwU3RhdGVUb3BQcm9wcyIsIm1hcERpc3BhdGNoVG9wUHJvcHMiLCJkaXNwYXRjaCIsImNiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7a0JBQ2UsQ0FBQyxFQUFFQSxLQUFGLEVBQUQsS0FBZTtBQUM3QixXQUFRO0FBQUE7QUFBQSxVQUFLLFdBQVksZUFBY0EsUUFBTSxrQkFBTixHQUF5QixFQUFHLEVBQTNEO0FBQ087QUFBQTtBQUFBLGNBQUcsV0FBVSxlQUFiLEVBQTZCLE9BQU8sRUFBRUMsT0FBTyxTQUFULEVBQW9CQyxVQUFVLEVBQTlCLEVBQXBDO0FBQUE7QUFBQSxTQURQO0FBRU87QUFBQTtBQUFBLGNBQUssV0FBVSw0QkFBZixFQUE0QyxPQUFPLEVBQUVDLGVBQWUsQ0FBakIsRUFBbkQ7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEo7QUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFGUCxLQUFSO0FBU0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEQ7Ozs7OztBQUVBLE1BQU1DLE1BQU4sU0FBcUJDLGdCQUFNQyxTQUEzQixDQUFxQztBQUNqQ0MsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOO0FBQ0g7O0FBRURDLGFBQVM7O0FBRUwsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFXLEtBQUtELEtBQUwsQ0FBV0UsU0FBWCxJQUF3QixnQkFBeEM7QUFDSSxtREFBSyxXQUFVLFdBQWYsR0FESjtBQUdRLGlCQUFLRixLQUFMLENBQVdHLFdBQVgsR0FDSTtBQUFBO0FBQUEsa0JBQUcsV0FBVSxlQUFiO0FBQUE7QUFBQSxhQURKLEdBQytFO0FBSnZGLFNBREo7QUFT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WCxFQUFrQk0sRUFBbEIsQ0FBVDtBQUZyQixFQUFQO0FBS0EsQ0FQRDs7a0JBU2UseUJBQVFILGdCQUFSLEVBQTBCQyxtQkFBMUIsRUFBK0NOLGNBQS9DLEMiLCJmaWxlIjoiNjUuc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuZXhwb3J0IGRlZmF1bHQgKHsgaXNWaXAgfSkgPT4ge1xuXHRyZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtgZHNjbG1lci1mdHIgJHtpc1ZpcD8nbWFyZ2luLWJvdHRvbS01NSc6Jyd9YH0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0yMFwiIHN0eWxlPXt7IGNvbG9yOiAnIzhhOGE4YScsIGZvbnRTaXplOiAxMCB9fSA+VGhlIFdlYnNpdGUgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgaW4gY2FzZSBvZiBhIG1lZGljYWwgZW1lcmdlbmN5IGFuZC8gb3IgY3JpdGljYWwgY2FyZSBhbmQgdGhlIHVzZXIgc2hvdWxkIGRpcmVjdGx5IGNvbnRhY3QgaGlzLyBoZXIgbWVkaWNhbCBzZXJ2aWNlIHByb3ZpZGVyIGZvciBQaHlzaWNhbCBFeGFtaW5hdGlvbi4gRG9jcHJpbWUgaXMgc29sZWx5IGEgdGVjaG5vbG9neSBwYXJ0bmVyLjwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBmb290ZXItbmV3LWNvcHlyZ2h0XCIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogNSB9fSA+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRvY3ByaW1lLmNvbSBDb3B5cmlnaHQgJmNvcHk7IDIwMjAuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5BbGwgcmlnaHRzIHJlc2VydmVkLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+RE9DUFJJTUUgVEVDSE5PTE9HSUVTIFBSSVZBVEUgTElNSVRFRDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+Q0lOIDogVTc0OTk5SFIyMDE2UFRDMDY0MzEyPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+KVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIExvYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc1R5cGUgfHwgXCJsb2FkZXJDaXJjdWxhclwifSA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcC1sb2FkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaUZyYW1lUG9wdXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0xMFwiPlJlZGlyZWN0aW5nIHlvdSB0byBQaGFybWVhc3kgd2Vic2l0ZS4uLjwvcD4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyXG4iLCJpbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGVmdEJhciBmcm9tICcuLi8uLi9jb21tb25zL0xlZnRCYXInXG5pbXBvcnQgUmlnaHRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9SaWdodEJhcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcbmltcG9ydCBEaXNjbGFpbWVyIGZyb20gJy4uLy4uL2NvbW1vbnMvSG9tZS9zdGF0aWNEaXNjbGFpbWVyLmpzJ1xuXG5jbGFzcyBDb2RQYXltZW50VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGl0ZW1zOiBbXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG5cbiAgICAgICAgaWYgKFNUT1JBR0UuY2hlY2tBdXRoKCkgJiYgcGFyc2VkLm9yZGVyX2lkKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmZldGNoT3JkZXJTdW1tYXJ5KHBhcnNlZC5vcmRlcl9pZCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhICYmIHJlcy5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXRlbXM6IHJlcy5kYXRhIH0pXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9jZWVkKG9yZGVyX2lkKXtcblxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL3BheW1lbnQvJHtvcmRlcl9pZH1gKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgbGV0IGFtb3VudF9wYXlhYmxlID0gMFxuICAgICAgICBsZXQgZG9jdG9yX25hbWUgPSAnJ1xuICAgICAgICBpZih0aGlzLnN0YXRlLml0ZW1zICYmIHRoaXMuc3RhdGUuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLml0ZW1zLm1hcCgob3JkZXIsIGkpPT4ge1xuICAgICAgICAgICAgICAgIGlmKGk9PTAgJiYgb3JkZXIuZGF0YSAmJiBvcmRlci5kYXRhLmRvY3RvciAmJiBvcmRlci5kYXRhLmRvY3Rvci5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3Rvcl9uYW1lID0gb3JkZXIuZGF0YS5kb2N0b3IubmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhbW91bnRfcGF5YWJsZSs9IHBhcnNlSW50KG9yZGVyLmRlYWxfcHJpY2UpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciAvPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250YWluZXItdG9wLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0QmFyIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNvbC1sZy03IGNlbnRlci1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBjYXJkTWFpblBhZGRpbmdSbXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXJiLTIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkLm9yZGVyX2lkICYmIHRoaXMuc3RhdGUuaXRlbXMgJiYgdGhpcy5zdGF0ZS5pdGVtcy5sZW5ndGg/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJiLTE1IG1ybmctdG9wLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNvZC1pZFwiPk9yZGVyIGlkIDoge3BhcnNlZC5vcmRlcl9pZH08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29kLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yX25hbWU/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb2QtcHJjLWJrbmdcIj57YEFwcG9pbnRtZW50IHdpdGggJHtkb2N0b3JfbmFtZX1gfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29kLXByZFwiPuKCuSB7YW1vdW50X3BheWFibGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvZC1idG5cIiBvbkNsaWNrPXt0aGlzLnByb2NlZWQuYmluZCh0aGlzLCBwYXJzZWQub3JkZXJfaWQpfT5Qcm9jZWVkIHRvIFBheTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTUgbXJuZy10b3AtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvZC1wcmMtYmtuZ1wiPk5vIEFwcG9pbnRtZW50IEZvdW5kIGZvciB0aGlzIE9yZGVyIElkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmlnaHRCYXIgZXh0cmFDbGFzcz1cIiBjaGF0LWZsb2F0LWJ0bi0yXCIgbm9DaGF0QnV0dG9uPXt0cnVlfSBtc2dUZW1wbGF0ZT1cImdvbGRfZ2VuZXJhbF90ZW1wbGF0ZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxEaXNjbGFpbWVyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29kUGF5bWVudFZpZXciLCJpbXBvcnQgQ29kU3VtbWFyeVZpZXcgZnJvbSAnLi9jb2RQYXltZW50U3VtbWFyeS5qcydcbmV4cG9ydCBkZWZhdWx0IENvZFN1bW1hcnlWaWV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgZmV0Y2hPcmRlclN1bW1hcnksIGFnZW50TG9naW4gfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuXG5pbXBvcnQgQ29kUGF5bWVudFN1bW1hcnlWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9jb2RQYXltZW50U3VtbWFyeSdcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXInXG5cbmNsYXNzIENvZFBheW1lbnRQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzaG93UGF5bWVudFBhZ2U6IGZhbHNlXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHRjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgaWYgKHBhcnNlZC50b2tlbikge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5hZ2VudExvZ2luKHBhcnNlZC50b2tlbiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93UGF5bWVudFBhZ2U6IHRydWV9KVxuICAgICAgICAgICAgICAgIH0sIDEwMClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpXG4gICAgICAgIH1cblx0fVxuXG5cdHJlbmRlcigpe1xuXG5cdFx0cmV0dXJuKFxuXHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlLnNob3dQYXltZW50UGFnZT9cblx0XHRcdFx0PENvZFBheW1lbnRTdW1tYXJ5VmlldyB7Li4udGhpcy5wcm9wc30vPlxuXHRcdFx0XHQ6PExvYWRlci8+XG5cdFx0XHR9XG5cdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXG5cdFx0XHQpXG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb3BQcm9wcyA9IChzdGF0ZSkgPT4ge1xuXHRyZXR1cm4ge1xuXG5cdH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb3BQcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuXHRcblx0cmV0dXJuIHtcblx0XHRmZXRjaE9yZGVyU3VtbWFyeTogKG9yZGVyX2lkKSA9PiBkaXNwYXRjaChmZXRjaE9yZGVyU3VtbWFyeShvcmRlcl9pZCkpLFxuXHRcdGFnZW50TG9naW46ICh0b2tlbiwgY2IpID0+IGRpc3BhdGNoKGFnZW50TG9naW4odG9rZW4sIGNiKSlcdFxuXHR9XG5cdFxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9wUHJvcHMsIG1hcERpc3BhdGNoVG9wUHJvcHMpKENvZFBheW1lbnRQYWdlKSJdLCJzb3VyY2VSb290IjoiIn0=