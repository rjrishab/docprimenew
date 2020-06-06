exports.ids = [76];
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

/***/ "./dev/js/components/commons/OrderMedicine/orderMedicineView.js":
/*!**********************************************************************!*\
  !*** ./dev/js/components/commons/OrderMedicine/orderMedicineView.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _DesktopProfileHeader = __webpack_require__(/*! ../DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _footer = __webpack_require__(/*! ../Home/footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _RightBar = __webpack_require__(/*! ../RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _BookingConfirmationPopup = __webpack_require__(/*! ../../diagnosis/bookingSummary/BookingConfirmationPopup */ "./dev/js/components/diagnosis/bookingSummary/BookingConfirmationPopup.js");

var _BookingConfirmationPopup2 = _interopRequireDefault(_BookingConfirmationPopup);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _config = __webpack_require__(/*! ../../../config/config */ "./dev/js/config/config.js");

var _config2 = _interopRequireDefault(_config);

var _Loader = __webpack_require__(/*! ../Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class OrderMedicineView extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            clickedOn: ''
        };
    }

    componentDidMount() {
        let sessionId = sessionStorage.getItem('iFrameId');
        if (!sessionId) {
            this.props.iFrameState('', true);
        }
    }

    orderMedicineClick(source) {
        this.setState({ showPopup: true, clickedOn: source }, () => {
            setTimeout(() => this.continueClick(), 1000);
        });
        if (source === 'newOrder') {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'OrderPageNewOrderClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'order-page-new-order-click'
            };
            _gtm2.default.sendEvent({ data: data });
        } else if (source === 'prevOrder') {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'OrderPagePreviousOrderClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'orde-page-previous-order-click'
            };
            _gtm2.default.sendEvent({ data: data });
        }
    }

    continueClick() {
        // if (this.state.clickedOn === 'newOrder') {
        //     let data = {
        //         'Category': 'ConsumerApp', 'Action': 'OrderPageContinueClick', 'CustomerID': GTM.getUserId() || '', 'leadid': 0, 'event': 'order-page-continue-click'
        //     }
        //     GTM.sendEvent({ data: data })
        // }
        // else if (this.state.clickedOn === 'prevOrder') {
        //     let data = {
        //         'Category': 'ConsumerApp', 'Action': 'OrderPagePreviousOrderClick', 'CustomerID': GTM.getUserId() || '', 'leadid': 0, 'event': 'order-page-previous-order-click'
        //     }
        //     GTM.sendEvent({ data: data })
        // }

        if (typeof navigator === 'object') {
            var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            if (/mobile/i.test(navigator.userAgent) && !isSafari) {
                this.props.iFrameState(this.props.location.pathname, false);
                sessionStorage.setItem('iFrameId', 1);
            } else {
                if (this.state.clickedOn === 'newOrder') {
                    window.open(_config2.default.PHARMEASY_NEW_ORDER_IFRAME_URL, '_blank');
                } else {
                    window.open(_config2.default.PHARMEASY_PREV_ORDER_IFRAME_URL, '_blank');
                }
            }
        }

        setTimeout(() => {
            this.setState({
                showPopup: false
            });
        }, 1000);
    }

    hidePopup() {
        this.setState({ showPopup: false });
    }

    render() {
        let showIframe = false;
        if (this.props.iFrameUrls.includes(this.props.location.pathname)) {
            showIframe = true;
        }

        let sessionId = sessionStorage.getItem('iFrameId');
        return _react2.default.createElement(
            'div',
            { className: 'profile-body-wrap', style: { backgroundColor: '#fff' } },
            _react2.default.createElement(_DesktopProfileHeader2.default, null),
            showIframe && sessionId ? _react2.default.createElement('iframe', { src: this.state.clickedOn === 'newOrder' ? `${_config2.default.PHARMEASY_NEW_ORDER_IFRAME_URL}` : `${_config2.default.PHARMEASY_PREV_ORDER_IFRAME_URL}`, className: 'pharmeasy-iframe' }) : _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    'section',
                    { className: 'container container-top-margin' },
                    this.state.showPopup ? _react2.default.createElement(_Loader2.default, { iFramePopup: true }) : '',
                    _react2.default.createElement(
                        'div',
                        { className: 'row main-row parent-section-row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12 col-md-7 col-lg-7 center-column' },
                            _react2.default.createElement(
                                'div',
                                { className: 'container-fluid main-container' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row art-search-row' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-12 mrt-20' },
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'fw-500 mrb-20', style: { fontSize: 16 } },
                                            'Order Medicines'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-12' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'order-widget d-flex align-items-center', onClick: () => this.orderMedicineClick('newOrder') },
                                            _react2.default.createElement('img', { src: "/assets" + '/img/customer-icons/new-order.svg', className: 'order-med-img' }),
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'fw-500 flex-1' },
                                                'New Order'
                                            ),
                                            _react2.default.createElement('img', { src: "/assets" + '/img/customer-icons/arrow-forward-right.svg' })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-12' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'order-widget d-flex align-items-center', onClick: () => this.orderMedicineClick('prevOrder') },
                                            _react2.default.createElement('img', { src: "/assets" + '/img/customer-icons/prev-order.svg', className: 'order-med-img' }),
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'fw-500 flex-1' },
                                                'Previous Order'
                                            ),
                                            _react2.default.createElement('img', { src: "/assets" + '/img/customer-icons/arrow-forward-right.svg' })
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(_RightBar2.default, { msgTemplate: 'gold_general_template' })
                    )
                ),
                typeof navigator === 'object' && /mobile/i.test(navigator.userAgent) ? '' : _react2.default.createElement(_footer2.default, null)
            )
        );
    }
}

exports.default = OrderMedicineView;

/***/ }),

/***/ "./dev/js/components/diagnosis/bookingSummary/BookingConfirmationPopup.js":
/*!********************************************************************************!*\
  !*** ./dev/js/components/diagnosis/bookingSummary/BookingConfirmationPopup.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BookingConfirmationPopup extends _react2.default.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return _react2.default.createElement(
			'div',
			{ className: 'search-el-popup-overlay' },
			_react2.default.createElement(
				'div',
				{ className: 'search-el-popup vip-srch-pop-min' },
				_react2.default.createElement(
					'div',
					{ className: 'widget' },
					_react2.default.createElement(
						'div',
						{ className: 'widget-content padiing-srch-el' },
						_react2.default.createElement(
							_react2.default.Fragment,
							null,
							_react2.default.createElement(
								'p',
								{ className: 'srch-el-conent' },
								this.props.is_gold ? 'Confirm delete member?' : 'Do you wish to continue?'
							),
							_react2.default.createElement(
								'div',
								{ className: 'search-el-btn-container' },
								_react2.default.createElement(
									'button',
									{ onClick: this.props.priceConfirmationPopup.bind(this, true) },
									'Yes'
								),
								_react2.default.createElement(
									'button',
									{ onClick: this.props.priceConfirmationPopup.bind(this, false) },
									'No'
								)
							)
						)
					)
				)
			)
		);
	}
}

exports.default = BookingConfirmationPopup;

/***/ }),

/***/ "./dev/js/containers/commons/orderMedicine.js":
/*!****************************************************!*\
  !*** ./dev/js/containers/commons/orderMedicine.js ***!
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

var _orderMedicineView = __webpack_require__(/*! ../../components/commons/OrderMedicine/orderMedicineView.js */ "./dev/js/components/commons/OrderMedicine/orderMedicineView.js");

var _orderMedicineView2 = _interopRequireDefault(_orderMedicineView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class OrderMedicine extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return _react2.default.createElement(_orderMedicineView2.default, this.props);
    }
}

const mapStateToProps = state => {
    let {
        iFrameUrls
    } = state.USER;
    return {
        iFrameUrls
    };
};

const mapDispatchToProps = dispatch => {
    return {
        iFrameState: (url, emptyUrls) => dispatch((0, _index.iFrameState)(url, emptyUrls))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OrderMedicine);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9PcmRlck1lZGljaW5lL29yZGVyTWVkaWNpbmVWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2RpYWdub3Npcy9ib29raW5nU3VtbWFyeS9Cb29raW5nQ29uZmlybWF0aW9uUG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvY29tbW9ucy9vcmRlck1lZGljaW5lLmpzIl0sIm5hbWVzIjpbIkxvYWRlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsImNsYXNzVHlwZSIsImlGcmFtZVBvcHVwIiwiT3JkZXJNZWRpY2luZVZpZXciLCJzdGF0ZSIsInNob3dQb3B1cCIsImNsaWNrZWRPbiIsImNvbXBvbmVudERpZE1vdW50Iiwic2Vzc2lvbklkIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiaUZyYW1lU3RhdGUiLCJvcmRlck1lZGljaW5lQ2xpY2siLCJzb3VyY2UiLCJzZXRTdGF0ZSIsInNldFRpbWVvdXQiLCJjb250aW51ZUNsaWNrIiwiZGF0YSIsIkdUTSIsImdldFVzZXJJZCIsInNlbmRFdmVudCIsIm5hdmlnYXRvciIsImlzU2FmYXJpIiwidGVzdCIsInVzZXJBZ2VudCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzZXRJdGVtIiwid2luZG93Iiwib3BlbiIsIkNPTkZJRyIsIlBIQVJNRUFTWV9ORVdfT1JERVJfSUZSQU1FX1VSTCIsIlBIQVJNRUFTWV9QUkVWX09SREVSX0lGUkFNRV9VUkwiLCJoaWRlUG9wdXAiLCJzaG93SWZyYW1lIiwiaUZyYW1lVXJscyIsImluY2x1ZGVzIiwiYmFja2dyb3VuZENvbG9yIiwiZm9udFNpemUiLCJBU1NFVFNfQkFTRV9VUkwiLCJCb29raW5nQ29uZmlybWF0aW9uUG9wdXAiLCJpc19nb2xkIiwicHJpY2VDb25maXJtYXRpb25Qb3B1cCIsImJpbmQiLCJPcmRlck1lZGljaW5lIiwibWFwU3RhdGVUb1Byb3BzIiwiVVNFUiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwidXJsIiwiZW1wdHlVcmxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFFQSxNQUFNQSxNQUFOLFNBQXFCQyxnQkFBTUMsU0FBM0IsQ0FBcUM7QUFDakNDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjtBQUNIOztBQUVEQyxhQUFTOztBQUVMLGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVyxLQUFLRCxLQUFMLENBQVdFLFNBQVgsSUFBd0IsZ0JBQXhDO0FBQ0ksbURBQUssV0FBVSxXQUFmLEdBREo7QUFHUSxpQkFBS0YsS0FBTCxDQUFXRyxXQUFYLEdBQ0k7QUFBQTtBQUFBLGtCQUFHLFdBQVUsZUFBYjtBQUFBO0FBQUEsYUFESixHQUMrRTtBQUp2RixTQURKO0FBU0g7QUFoQmdDOztrQkFtQnRCUCxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQmY7Ozs7OztrQkFFZUEsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLE1BQU1RLGlCQUFOLFNBQWdDUCxnQkFBTUMsU0FBdEMsQ0FBZ0Q7QUFDNUNDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjtBQUNBLGFBQUtLLEtBQUwsR0FBYTtBQUNUQyx1QkFBVyxLQURGO0FBRVRDLHVCQUFXO0FBRkYsU0FBYjtBQUlIOztBQUVEQyx3QkFBb0I7QUFDaEIsWUFBSUMsWUFBWUMsZUFBZUMsT0FBZixDQUF1QixVQUF2QixDQUFoQjtBQUNBLFlBQUksQ0FB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QUFBQTtBQUZEO0FBRkQ7QUFERDtBQUREO0FBREQ7QUFERCxHQUREO0FBd0RBO0FBakVxRDs7a0JBb0V4Q0gsd0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFZjs7OztBQUNBOztBQUVBOztBQUNBOzs7Ozs7QUFFQSxNQUFNSSxhQUFOLFNBQTRCaEQsZ0JBQU1DLFNBQWxDLENBQTRDO0FBQ3hDQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDSDs7QUFFREMsYUFBUztBQUNMLGVBQ0ksOEJBQUMsMkJBQUQsRUFBdUIsS0FBS0QsS0FBNUIsQ0FESjtBQUdIO0FBVHVDOztBQVk1QyxNQUFNOEMsa0JBQW1CekMsS0FBRCxJQUFXO0FBQy9CLFFBQUk7QUFDQStCO0FBREEsUUFFQS9CLE1BQU0wQyxJQUZWO0FBR0EsV0FBTztBQUNIWDtBQURHLEtBQVA7QUFHSCxDQVBEOztBQVNBLE1BQU1ZLHFCQUFzQkMsUUFBRCxJQUFjO0FBQ3JDLFdBQU87QUFDSHJDLHFCQUFhLENBQUNzQyxHQUFELEVBQU1DLFNBQU4sS0FBb0JGLFNBQVMsd0JBQVlDLEdBQVosRUFBaUJDLFNBQWpCLENBQVQ7QUFEOUIsS0FBUDtBQUdILENBSkQ7O2tCQU1lLHlCQUFRTCxlQUFSLEVBQXlCRSxrQkFBekIsRUFBNkNILGFBQTdDLEMiLCJmaWxlIjoiNzYuc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgTG9hZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzVHlwZSB8fCBcImxvYWRlckNpcmN1bGFyXCJ9ID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRwLWxvYWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pRnJhbWVQb3B1cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJ0LTEwXCI+UmVkaXJlY3RpbmcgeW91IHRvIFBoYXJtZWFzeSB3ZWJzaXRlLi4uPC9wPiA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXJcbiIsImltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInXG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRGVza3RvcFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vRGVza3RvcFByb2ZpbGVIZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9Ib21lL2Zvb3RlcidcbmltcG9ydCBSaWdodEJhciBmcm9tICcuLi9SaWdodEJhcic7XG5pbXBvcnQgQm9va2luZ0NvbmZpcm1hdGlvblBvcHVwIGZyb20gJy4uLy4uL2RpYWdub3Npcy9ib29raW5nU3VtbWFyeS9Cb29raW5nQ29uZmlybWF0aW9uUG9wdXAnO1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bSc7XG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uLy4uL2NvbmZpZy9jb25maWcnO1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXInO1xuXG5jbGFzcyBPcmRlck1lZGljaW5lVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzaG93UG9wdXA6IGZhbHNlLFxuICAgICAgICAgICAgY2xpY2tlZE9uOiAnJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCBzZXNzaW9uSWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdpRnJhbWVJZCcpXG4gICAgICAgIGlmICghc2Vzc2lvbklkKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmlGcmFtZVN0YXRlKCcnLCB0cnVlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb3JkZXJNZWRpY2luZUNsaWNrKHNvdXJjZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1BvcHVwOiB0cnVlLCBjbGlja2VkT246IHNvdXJjZSB9LCAoKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY29udGludWVDbGljaygpLCAxMDAwKTtcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHNvdXJjZSA9PT0gJ25ld09yZGVyJykge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdPcmRlclBhZ2VOZXdPcmRlckNsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnb3JkZXItcGFnZS1uZXctb3JkZXItY2xpY2snXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNvdXJjZSA9PT0gJ3ByZXZPcmRlcicpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnT3JkZXJQYWdlUHJldmlvdXNPcmRlckNsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnb3JkZS1wYWdlLXByZXZpb3VzLW9yZGVyLWNsaWNrJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRpbnVlQ2xpY2soKSB7XG4gICAgICAgIC8vIGlmICh0aGlzLnN0YXRlLmNsaWNrZWRPbiA9PT0gJ25ld09yZGVyJykge1xuICAgICAgICAvLyAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgIC8vICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdPcmRlclBhZ2VDb250aW51ZUNsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnb3JkZXItcGFnZS1jb250aW51ZS1jbGljaydcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZSBpZiAodGhpcy5zdGF0ZS5jbGlja2VkT24gPT09ICdwcmV2T3JkZXInKSB7XG4gICAgICAgIC8vICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgLy8gICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ09yZGVyUGFnZVByZXZpb3VzT3JkZXJDbGljaycsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ29yZGVyLXBhZ2UtcHJldmlvdXMtb3JkZXItY2xpY2snXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB2YXIgaXNTYWZhcmkgPSAvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgICAgICAgaWYgKC9tb2JpbGUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICFpc1NhZmFyaSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaUZyYW1lU3RhdGUodGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZSwgZmFsc2UpXG4gICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnaUZyYW1lSWQnLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmNsaWNrZWRPbiA9PT0gJ25ld09yZGVyJykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihDT05GSUcuUEhBUk1FQVNZX05FV19PUkRFUl9JRlJBTUVfVVJMLCAnX2JsYW5rJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKENPTkZJRy5QSEFSTUVBU1lfUFJFVl9PUkRFUl9JRlJBTUVfVVJMLCAnX2JsYW5rJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHNob3dQb3B1cDogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDEwMDApXG4gICAgfVxuXG4gICAgaGlkZVBvcHVwKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1BvcHVwOiBmYWxzZSB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHNob3dJZnJhbWUgPSBmYWxzZVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5pRnJhbWVVcmxzLmluY2x1ZGVzKHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICBzaG93SWZyYW1lID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNlc3Npb25JZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2lGcmFtZUlkJylcbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNmZmYnIH19PlxuICAgICAgICAgICAgICAgIDxEZXNrdG9wUHJvZmlsZUhlYWRlciAvPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0lmcmFtZSAmJiBzZXNzaW9uSWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZSBzcmM9e3RoaXMuc3RhdGUuY2xpY2tlZE9uID09PSAnbmV3T3JkZXInID8gYCR7Q09ORklHLlBIQVJNRUFTWV9ORVdfT1JERVJfSUZSQU1FX1VSTH1gIDogYCR7Q09ORklHLlBIQVJNRUFTWV9QUkVWX09SREVSX0lGUkFNRV9VUkx9YH0gY2xhc3NOYW1lPVwicGhhcm1lYXN5LWlmcmFtZVwiPjwvaWZyYW1lPlxuICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250YWluZXItdG9wLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93UG9wdXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb29raW5nQ29uZmlybWF0aW9uUG9wdXAgY29udGludWVDbGljaz17KCkgPT4gdGhpcy5jb250aW51ZUNsaWNrKCl9IGlGcmFtZVBvcHVwPXt0cnVlfSBoaWRlUG9wdXA9eygpID0+IHRoaXMuaGlkZVBvcHVwKCl9IC8+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93UG9wdXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkZXIgaUZyYW1lUG9wdXA9e3RydWV9IC8+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNvbC1sZy03IGNlbnRlci1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtYWluLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhcnQtc2VhcmNoLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgbXJ0LTIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1yYi0yMFwiIHN0eWxlPXt7IGZvbnRTaXplOiAxNiB9fT5PcmRlciBNZWRpY2luZXM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlci13aWRnZXQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiIG9uQ2xpY2s9eygpID0+IHRoaXMub3JkZXJNZWRpY2luZUNsaWNrKCduZXdPcmRlcicpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL25ldy1vcmRlci5zdmcnfSBjbGFzc05hbWU9XCJvcmRlci1tZWQtaW1nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGZsZXgtMVwiPk5ldyBPcmRlcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL2Fycm93LWZvcndhcmQtcmlnaHQuc3ZnJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyLXdpZGdldCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCIgb25DbGljaz17KCkgPT4gdGhpcy5vcmRlck1lZGljaW5lQ2xpY2soJ3ByZXZPcmRlcicpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL3ByZXYtb3JkZXIuc3ZnJ30gY2xhc3NOYW1lPVwib3JkZXItbWVkLWltZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBmbGV4LTFcIj5QcmV2aW91cyBPcmRlcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL2Fycm93LWZvcndhcmQtcmlnaHQuc3ZnJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJpZ2h0QmFyIG1zZ1RlbXBsYXRlPVwiZ29sZF9nZW5lcmFsX3RlbXBsYXRlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgbmF2aWdhdG9yID09PSAnb2JqZWN0JyAmJiAvbW9iaWxlL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT3JkZXJNZWRpY2luZVZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuXG5jbGFzcyBCb29raW5nQ29uZmlybWF0aW9uUG9wdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLXBvcHVwLW92ZXJsYXlcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZWwtcG9wdXAgdmlwLXNyY2gtcG9wLW1pblwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IHBhZGlpbmctc3JjaC1lbFwiPlxuXHRcdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic3JjaC1lbC1jb25lbnRcIj57dGhpcy5wcm9wcy5pc19nb2xkPydDb25maXJtIGRlbGV0ZSBtZW1iZXI/JzonRG8geW91IHdpc2ggdG8gY29udGludWU/J308L3A+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZWwtYnRuLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLnByaWNlQ29uZmlybWF0aW9uUG9wdXAuYmluZCh0aGlzLCB0cnVlKX0+WWVzPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMucHJpY2VDb25maXJtYXRpb25Qb3B1cC5iaW5kKHRoaXMsIGZhbHNlKX0+Tm88L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0LyoodGhpcy5wcm9wcy5pc192aXBfYXBwbGljYWJsZSB8fCB0aGlzLnByb3BzLmlzX2luc3VyYW5jZV9hcHBsaWNhYmxlKSB8fCB0aGlzLnByb3BzLmlzQ2FydCB8fCB0aGlzLnByb3BzLmlzTGFiP1xuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgcGFkaWluZy1zcmNoLWVsXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaUZyYW1lUG9wdXAgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1ydC0yMCB0ZXh0LWNlbnRlciBmdy01MDBcIj5XZSBhcmUgcmVkaXJlY3RpbmcgeW91IHRvIFBoYXJtRWFzeSB3ZWJzaXRlIGluIDMgc2Vjb25kcy4uLjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJzcmNoLWVsLWNvbmVudFwiPkRvIHlvdSB3aXNoIHRvIGNvbnRpbnVlPzwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLWJ0bi1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLnByaWNlQ29uZmlybWF0aW9uUG9wdXAuYmluZCh0aGlzLCB0cnVlKX0+WWVzPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5wcmljZUNvbmZpcm1hdGlvblBvcHVwLmJpbmQodGhpcywgZmFsc2UpfT5ObzwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0OlxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInZpcC1iYW5uZXItY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidmlwLWJhbm5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIHZwLWNscy1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcC1wb3AtY2xzLnN2Zyd9IG9uQ2xpY2s9e3RoaXMucHJvcHMuYmFubmVyQ29uZmlybWF0aW9uUG9wdXAuYmluZCh0aGlzLGZhbHNlKX0vPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIHZwLWJuci1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcC1pbWctcG9wLnBuZyd9IC8+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3AtYm5yLXR4dFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidnAtYm5yLWtub3ctdHh0XCIgb25DbGljaz17KGUpID0+IHtcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgXHQnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0Jvb2tpbmdQYWdlVmlwQmFubmVyQ2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdib29raW5ncGFnZS12aXAtY2xpY2snXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgXHR9XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgXHRHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3ZpcC1jbHViLWRldGFpbHM/c291cmNlPWJvb2tpbmdwYWdlJmxlYWRfc291cmNlPWJvb2tpbmdwYWdlJykgfX0+S25vdyBtb3JlIGFib3V0IERvY3ByaW1lIFZJUDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInZwLWJuci1zdWItdHh0XCIgb25DbGljaz17dGhpcy5wcm9wcy5iYW5uZXJDb25maXJtYXRpb25Qb3B1cC5iaW5kKHRoaXMsdHJ1ZSl9Pk5vdCBJbnRlcmVzdGVkPyBDb250aW51ZSBCb29raW5nIDxpbWcgc3R5bGU9e3t3aWR0aDonN3B4J319IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwLXJnaHQuc3ZnJ30gLz48L3A+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+Ki9cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tpbmdDb25maXJtYXRpb25Qb3B1cCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBpRnJhbWVTdGF0ZSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgT3JkZXJNZWRpY2luZVZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL09yZGVyTWVkaWNpbmUvb3JkZXJNZWRpY2luZVZpZXcuanMnO1xuXG5jbGFzcyBPcmRlck1lZGljaW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8T3JkZXJNZWRpY2luZVZpZXcgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICBsZXQge1xuICAgICAgICBpRnJhbWVVcmxzXG4gICAgfSA9IHN0YXRlLlVTRVJcbiAgICByZXR1cm4ge1xuICAgICAgICBpRnJhbWVVcmxzXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBpRnJhbWVTdGF0ZTogKHVybCwgZW1wdHlVcmxzKSA9PiBkaXNwYXRjaChpRnJhbWVTdGF0ZSh1cmwsIGVtcHR5VXJscykpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShPcmRlck1lZGljaW5lKTsiXSwic291cmNlUm9vdCI6IiJ9