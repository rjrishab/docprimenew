(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./dev/js/components/commons/paymentForm/PaymentForm.js":
/*!**************************************************************!*\
  !*** ./dev/js/components/commons/paymentForm/PaymentForm.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _config = __webpack_require__(/*! ../../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PaymentForm = function (_React$Component) {
    _inherits(PaymentForm, _React$Component);

    function PaymentForm(props) {
        _classCallCheck(this, PaymentForm);

        var _this = _possibleConstructorReturn(this, (PaymentForm.__proto__ || Object.getPrototypeOf(PaymentForm)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(PaymentForm, [{
        key: 'sendEvent',
        value: function sendEvent() {
            var refs = this.props.refs;
            if (refs) {
                var data = {
                    'Category': 'ConsumerApp', 'Action': 'ContinueClicked', 'pageSource': refs, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'continue-clicked'
                };
                _gtm2.default.sendEvent({ data: data });
            } else {
                var _data = {
                    'Category': 'ConsumerApp', 'Action': 'ContinueClicked', 'pageSource': 'UNKNOWN', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'continue-clicked'
                };
                _gtm2.default.sendEvent({ data: _data });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.sendEvent();
        }
    }, {
        key: 'getPaymentNodeName',
        value: function getPaymentNodeName(name, index) {
            return name + '[' + index + ']';
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            // let data = { "paymentMode": "CC", "responseCode": "227", "bankTxId": "", "txDate": "Jun 4, 2018 12:10:23 PM", "bankName": "SBI", "statusMsg": "Oops an error occurred. We will get back to you!", "currency": "INR", "statusCode": 1, "pgGatewayName": "MOCK", "responseMessage": "Your payment has been declined by your bank. Please contact your bank for any queries. If money has been deducted from your account, your bank will inform us within 48 hrs and we will refund the same", "txStatus": "TXN_FAILURE", "customerId": 51, "orderNo": this.props.paymentData['orderId'], "statusShortMsg": "Others", "email": "dummy_appointment@policybazaar.com", "pbGatewayName": "paytm", "mobile": "9999999997", productId: this.props.paymentData['productId'] }

            // if (this.props.paymentData['referenceId']) {
            //     data['referenceId'] = this.props.paymentData['referenceId']
            // }

            // data['pgTxId'] = this.props.paymentData['orderId']
            // data = btoa(JSON.stringify(data))

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'form',
                    { id: 'paymentForm', ref: 'paymentForm', method: 'post', action: this.props.paymentData && this.props.paymentData['is_single_flow'] ? _config2.default.PG_MULTI_ORDER_URL : _config2.default.PG_URL, style: { display: 'none' } },
                    this.props.paymentData['is_single_flow'] ? _react2.default.createElement(
                        _react2.default.Fragment,
                        null,
                        this.props.paymentData['items'].map(function (item, i) {
                            return _react2.default.createElement(
                                _react2.default.Fragment,
                                null,
                                _react2.default.createElement('input', { type: 'text', name: _this2.getPaymentNodeName('name', i), id: item['name'], defaultValue: item['name'] }),
                                _react2.default.createElement('input', { type: 'text', name: _this2.getPaymentNodeName('productId', i), id: item['productId'], defaultValue: item['productId'] }),
                                _react2.default.createElement('input', { type: 'text', name: _this2.getPaymentNodeName('txAmount', i), id: item['txAmount'], defaultValue: item['txAmount'] }),
                                _react2.default.createElement('input', { type: 'text', name: _this2.getPaymentNodeName('orderId', i), id: item['orderId'], defaultValue: item['orderId'] }),
                                _react2.default.createElement('input', { type: 'text', name: _this2.getPaymentNodeName('holdPayment', i), id: item['holdPayment'], defaultValue: item['holdPayment'] }),
                                item && item['insurerCode'] ? _react2.default.createElement('input', { type: 'text', name: _this2.getPaymentNodeName('insurerCode', i), id: item['insurerCode'], defaultValue: item['insurerCode'] }) : ''
                            );
                        })
                    ) : _react2.default.createElement(
                        _react2.default.Fragment,
                        null,
                        _react2.default.createElement('input', { type: 'text', name: 'name', defaultValue: this.props.paymentData['name'] }),
                        _react2.default.createElement('input', { type: 'text', name: 'productId', defaultValue: this.props.paymentData['productId'] }),
                        _react2.default.createElement('input', { type: 'text', name: 'txAmount', defaultValue: this.props.paymentData['txAmount'] }),
                        _react2.default.createElement('input', { type: 'text', name: 'orderId', defaultValue: this.props.paymentData['orderId'] }),
                        _react2.default.createElement('input', { type: 'text', name: 'holdPayment', defaultValue: this.props.paymentData['holdPayment'] }),
                        this.props.paymentData && this.props.paymentData['insurerCode'] ? _react2.default.createElement('input', { type: 'text', name: 'insurerCode', defaultValue: this.props.paymentData['insurerCode'] }) : ''
                    ),
                    _react2.default.createElement('input', { type: 'text', name: 'custId', defaultValue: this.props.paymentData['custId'] }),
                    _react2.default.createElement('input', { type: 'text', name: 'mobile', defaultValue: this.props.paymentData['mobile'] }),
                    _react2.default.createElement('input', { type: 'text', name: 'email', defaultValue: this.props.paymentData['email'] }),
                    _react2.default.createElement('input', { type: 'text', name: 'surl', defaultValue: this.props.paymentData['surl'] }),
                    _react2.default.createElement('input', { type: 'text', name: 'furl', defaultValue: this.props.paymentData['furl'] }),
                    this.props.paymentData && this.props.paymentData['referenceId'] ? _react2.default.createElement('input', { type: 'text', name: 'referenceId', defaultValue: this.props.paymentData['referenceId'] }) : '',
                    _react2.default.createElement('input', { type: 'text', name: 'hash', defaultValue: this.props.paymentData['hash'] }),
                    _react2.default.createElement('input', { type: 'text', name: 'isPreAuth', defaultValue: this.props.paymentData['isPreAuth'] }),
                    this.props.paymentData && this.props.paymentData['paytmMsg'] ? _react2.default.createElement('input', { type: 'text', name: 'paytmMsg', defaultValue: this.props.paymentData['paytmMsg'] }) : '',
                    this.props.paymentData && this.props.paymentData['couponCode'] ? _react2.default.createElement(
                        _react2.default.Fragment,
                        null,
                        _react2.default.createElement('input', { type: 'text', name: 'couponCode', defaultValue: this.props.paymentData['couponCode'] }),
                        _react2.default.createElement('input', { type: 'text', name: 'discountedAmnt', defaultValue: this.props.paymentData['discountedAmnt'] }),
                        _react2.default.createElement('input', { type: 'text', name: 'couponPgMode', defaultValue: this.props.paymentData['couponPgMode'] })
                    ) : '',
                    this.props.paymentData && this.props.paymentData['refOrderId'] ? _react2.default.createElement('input', { type: 'text', name: 'refOrderId', defaultValue: this.props.paymentData['refOrderId'] }) : '',
                    this.props.paymentData && this.props.paymentData['refOrderNo'] ? _react2.default.createElement('input', { type: 'text', name: 'refOrderNo', defaultValue: this.props.paymentData['refOrderNo'] }) : '',
                    this.props.paymentData && this.props.paymentData['parentProductId'] ? _react2.default.createElement('input', { type: 'text', name: 'parentProductId', defaultValue: this.props.paymentData['parentProductId'] }) : ''
                )
            );
        }
    }]);

    return PaymentForm;
}(_react2.default.Component);

exports.default = PaymentForm;

/***/ }),

/***/ "./dev/js/components/commons/paymentForm/index.js":
/*!********************************************************!*\
  !*** ./dev/js/components/commons/paymentForm/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PaymentForm = __webpack_require__(/*! ./PaymentForm */ "./dev/js/components/commons/paymentForm/PaymentForm.js");

var _PaymentForm2 = _interopRequireDefault(_PaymentForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _PaymentForm2.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3BheW1lbnRGb3JtL1BheW1lbnRGb3JtLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvcGF5bWVudEZvcm0vaW5kZXguanMiXSwibmFtZXMiOlsiUGF5bWVudEZvcm0iLCJwcm9wcyIsInN0YXRlIiwicmVmcyIsImRhdGEiLCJHVE0iLCJnZXRVc2VySWQiLCJzZW5kRXZlbnQiLCJuYW1lIiwiaW5kZXgiLCJwYXltZW50RGF0YSIsIkNPTkZJRyIsIlBHX01VTFRJX09SREVSX1VSTCIsIlBHX1VSTCIsImRpc3BsYXkiLCJtYXAiLCJpdGVtIiwiaSIsImdldFBheW1lbnROb2RlTmFtZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUdNQSxXOzs7QUFDRix5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhIQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBRmU7QUFLbEI7Ozs7b0NBRVc7QUFDUixnQkFBSUMsT0FBTyxLQUFLRixLQUFMLENBQVdFLElBQXRCO0FBQ0EsZ0JBQUlBLElBQUosRUFBVTtBQUNOLG9CQUFJQyxPQUFPO0FBQ1AsZ0NBQVksYUFETCxFQUNvQixVQUFVLGlCQUQ5QixFQUNpRCxjQUFjRCxJQUQvRCxFQUNxRSxjQUFjRSxjQUFJQyxTQUFKLE1BQW1CLEVBRHRHLEVBQzBHLFVBQVUsQ0FEcEgsRUFDdUgsU0FBUztBQURoSSxpQkFBWDtBQUdBRCw4QkFBSUUsU0FBSixDQUFjLEVBQUVILE1BQU1BLElBQVIsRUFBZDtBQUNILGFBTEQsTUFLTztBQUNILG9CQUFJQSxRQUFPO0FBQ1AsZ0NBQVksYUFETCxFQUNvQixVQUFVLGlCQUQ5QixFQUNpRCxjQUFjLFNBRC9ELEVBQzBFLGNBQWNDLGNBQUlDLFNBQUosTUFB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QW1CLE1BQUssY0FBeEIsRUFBdUMsY0FBYyxLQUFLVCxLQUFMLENBQVdTLFdBQVgsQ0FBdUIsY0FBdkIsQ0FBckQ7QUFISixxQkFEQSxHQU1FLEVBOURWO0FBa0VRLHlCQUFLVCxLQUFMLENBQVdTLFdBQVgsSUFBMEIsS0FBS1QsS0FBTCxDQUFXUyxXQUFYLENBQXVCLFlBQXZCLENBQTFCLEdBQ0EseUNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssWUFBeEIsRUFBcUMsY0FBYyxLQUFLVCxLQUFMLENBQVdTLFdBQVgsQ0FBdUIsWUFBdkIsQ0FBbkQsR0FEQSxHQUVDLEVBcEVUO0FBd0VRLHlCQUFLVCxLQUFMLENBQVdTLFdBQVgsSUFBMEIsS0FBS1QsS0FBTCxDQUFXUyxXQUFYLENBQXVCLFlBQXZCLENBQTFCLEdBQ0EseUNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssWUFBeEIsRUFBcUMsY0FBYyxLQUFLVCxLQUFMLENBQVdTLFdBQVgsQ0FBdUIsWUFBdkIsQ0FBbkQsR0FEQSxHQUVDLEVBMUVUO0FBOEVRLHlCQUFLVCxLQUFMLENBQVdTLFdBQVgsSUFBMEIsS0FBS1QsS0FBTCxDQUFXUyxXQUFYLENBQXVCLGlCQUF2QixDQUExQixHQUNBLHlDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLGlCQUF4QixFQUEwQyxjQUFjLEtBQUtULEtBQUwsQ0FBV1MsV0FBWCxDQUF1QixpQkFBdkIsQ0FBeEQsR0FEQSxHQUVDO0FBaEZUO0FBRkosYUFESjtBQStGSDs7OztFQXpJcUJTLGdCQUFNQyxTOztrQkE2SWpCcEIsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEpmOzs7Ozs7a0JBRWVBLHFCIiwiZmlsZSI6IjkuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vLi4vY29uZmlnJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcblxuXG5jbGFzcyBQYXltZW50Rm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBzZW5kRXZlbnQoKSB7XG4gICAgICAgIGxldCByZWZzID0gdGhpcy5wcm9wcy5yZWZzXG4gICAgICAgIGlmIChyZWZzKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0NvbnRpbnVlQ2xpY2tlZCcsICdwYWdlU291cmNlJzogcmVmcywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY29udGludWUtY2xpY2tlZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0NvbnRpbnVlQ2xpY2tlZCcsICdwYWdlU291cmNlJzogJ1VOS05PV04nLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjb250aW51ZS1jbGlja2VkJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNlbmRFdmVudCgpXG4gICAgfVxuXG4gICAgZ2V0UGF5bWVudE5vZGVOYW1lKG5hbWUsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBgJHtuYW1lfVske2luZGV4fV1gXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIC8vIGxldCBkYXRhID0geyBcInBheW1lbnRNb2RlXCI6IFwiQ0NcIiwgXCJyZXNwb25zZUNvZGVcIjogXCIyMjdcIiwgXCJiYW5rVHhJZFwiOiBcIlwiLCBcInR4RGF0ZVwiOiBcIkp1biA0LCAyMDE4IDEyOjEwOjIzIFBNXCIsIFwiYmFua05hbWVcIjogXCJTQklcIiwgXCJzdGF0dXNNc2dcIjogXCJPb3BzIGFuIGVycm9yIG9jY3VycmVkLiBXZSB3aWxsIGdldCBiYWNrIHRvIHlvdSFcIiwgXCJjdXJyZW5jeVwiOiBcIklOUlwiLCBcInN0YXR1c0NvZGVcIjogMSwgXCJwZ0dhdGV3YXlOYW1lXCI6IFwiTU9DS1wiLCBcInJlc3BvbnNlTWVzc2FnZVwiOiBcIllvdXIgcGF5bWVudCBoYXMgYmVlbiBkZWNsaW5lZCBieSB5b3VyIGJhbmsuIFBsZWFzZSBjb250YWN0IHlvdXIgYmFuayBmb3IgYW55IHF1ZXJpZXMuIElmIG1vbmV5IGhhcyBiZWVuIGRlZHVjdGVkIGZyb20geW91ciBhY2NvdW50LCB5b3VyIGJhbmsgd2lsbCBpbmZvcm0gdXMgd2l0aGluIDQ4IGhycyBhbmQgd2Ugd2lsbCByZWZ1bmQgdGhlIHNhbWVcIiwgXCJ0eFN0YXR1c1wiOiBcIlRYTl9GQUlMVVJFXCIsIFwiY3VzdG9tZXJJZFwiOiA1MSwgXCJvcmRlck5vXCI6IHRoaXMucHJvcHMucGF5bWVudERhdGFbJ29yZGVySWQnXSwgXCJzdGF0dXNTaG9ydE1zZ1wiOiBcIk90aGVyc1wiLCBcImVtYWlsXCI6IFwiZHVtbXlfYXBwb2ludG1lbnRAcG9saWN5YmF6YWFyLmNvbVwiLCBcInBiR2F0ZXdheU5hbWVcIjogXCJwYXl0bVwiLCBcIm1vYmlsZVwiOiBcIjk5OTk5OTk5OTdcIiwgcHJvZHVjdElkOiB0aGlzLnByb3BzLnBheW1lbnREYXRhWydwcm9kdWN0SWQnXSB9XG5cbiAgICAgICAgLy8gaWYgKHRoaXMucHJvcHMucGF5bWVudERhdGFbJ3JlZmVyZW5jZUlkJ10pIHtcbiAgICAgICAgLy8gICAgIGRhdGFbJ3JlZmVyZW5jZUlkJ10gPSB0aGlzLnByb3BzLnBheW1lbnREYXRhWydyZWZlcmVuY2VJZCddXG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBkYXRhWydwZ1R4SWQnXSA9IHRoaXMucHJvcHMucGF5bWVudERhdGFbJ29yZGVySWQnXVxuICAgICAgICAvLyBkYXRhID0gYnRvYShKU09OLnN0cmluZ2lmeShkYXRhKSlcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwicGF5bWVudEZvcm1cIiByZWY9XCJwYXltZW50Rm9ybVwiIG1ldGhvZD1cInBvc3RcIiBhY3Rpb249e3RoaXMucHJvcHMucGF5bWVudERhdGEgJiYgdGhpcy5wcm9wcy5wYXltZW50RGF0YVsnaXNfc2luZ2xlX2Zsb3cnXT9DT05GSUcuUEdfTVVMVElfT1JERVJfVVJMOkNPTkZJRy5QR19VUkx9IHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wYXltZW50RGF0YVsnaXNfc2luZ2xlX2Zsb3cnXT9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGF5bWVudERhdGFbJ2l0ZW1zJ10ubWFwKChpdGVtLCBpKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPXt0aGlzLmdldFBheW1lbnROb2RlTmFtZSgnbmFtZScsIGkpfSBpZD17aXRlbVsnbmFtZSddfSBkZWZhdWx0VmFsdWU9e2l0ZW1bJ25hbWUnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPXt0aGlzLmdldFBheW1lbnROb2RlTmFtZSgncHJvZHVjdElkJywgaSl9IGlkPXtpdGVtWydwcm9kdWN0SWQnXX0gZGVmYXVsdFZhbHVlPXtpdGVtWydwcm9kdWN0SWQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPXt0aGlzLmdldFBheW1lbnROb2RlTmFtZSgndHhBbW91bnQnLCBpKX0gaWQ9e2l0ZW1bJ3R4QW1vdW50J119IGRlZmF1bHRWYWx1ZT17aXRlbVsndHhBbW91bnQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPXt0aGlzLmdldFBheW1lbnROb2RlTmFtZSgnb3JkZXJJZCcsIGkpfSBpZD17aXRlbVsnb3JkZXJJZCddfSBkZWZhdWx0VmFsdWU9e2l0ZW1bJ29yZGVySWQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPXt0aGlzLmdldFBheW1lbnROb2RlTmFtZSgnaG9sZFBheW1lbnQnLCBpKX0gIGlkPXtpdGVtWydob2xkUGF5bWVudCddfSBkZWZhdWx0VmFsdWU9e2l0ZW1bJ2hvbGRQYXltZW50J119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtICYmIGl0ZW1bJ2luc3VyZXJDb2RlJ10/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9e3RoaXMuZ2V0UGF5bWVudE5vZGVOYW1lKCdpbnN1cmVyQ29kZScsIGkpfSBpZD17aXRlbVsnaW5zdXJlckNvZGUnXX0gZGVmYXVsdFZhbHVlPXtpdGVtWydpbnN1cmVyQ29kZSddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDo8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ25hbWUnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicHJvZHVjdElkXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydwcm9kdWN0SWQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidHhBbW91bnRcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ3R4QW1vdW50J119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm9yZGVySWRcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ29yZGVySWQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiaG9sZFBheW1lbnRcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ2hvbGRQYXltZW50J119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBheW1lbnREYXRhICYmIHRoaXMucHJvcHMucGF5bWVudERhdGFbJ2luc3VyZXJDb2RlJ10/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJpbnN1cmVyQ29kZVwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnaW5zdXJlckNvZGUnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4gICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImN1c3RJZFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnY3VzdElkJ119IC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJtb2JpbGVcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ21vYmlsZSddfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbWFpbFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnZW1haWwnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN1cmxcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ3N1cmwnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZ1cmxcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ2Z1cmwnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wYXltZW50RGF0YSAmJiB0aGlzLnByb3BzLnBheW1lbnREYXRhWydyZWZlcmVuY2VJZCddP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInJlZmVyZW5jZUlkXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydyZWZlcmVuY2VJZCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJoYXNoXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydoYXNoJ119IC8+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiaXNQcmVBdXRoXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydpc1ByZUF1dGgnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wYXltZW50RGF0YSAmJiB0aGlzLnByb3BzLnBheW1lbnREYXRhWydwYXl0bU1zZyddP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBheXRtTXNnXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydwYXl0bU1zZyddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wYXltZW50RGF0YSAmJiB0aGlzLnByb3BzLnBheW1lbnREYXRhWydjb3Vwb25Db2RlJ10gP1xuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjb3Vwb25Db2RlXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydjb3Vwb25Db2RlJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRpc2NvdW50ZWRBbW50XCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydkaXNjb3VudGVkQW1udCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjb3Vwb25QZ01vZGVcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ2NvdXBvblBnTW9kZSddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGF5bWVudERhdGEgJiYgdGhpcy5wcm9wcy5wYXltZW50RGF0YVsncmVmT3JkZXJJZCddP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInJlZk9yZGVySWRcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ3JlZk9yZGVySWQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wYXltZW50RGF0YSAmJiB0aGlzLnByb3BzLnBheW1lbnREYXRhWydyZWZPcmRlck5vJ10/XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicmVmT3JkZXJOb1wiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsncmVmT3JkZXJObyddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBheW1lbnREYXRhICYmIHRoaXMucHJvcHMucGF5bWVudERhdGFbJ3BhcmVudFByb2R1Y3RJZCddP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBhcmVudFByb2R1Y3RJZFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsncGFyZW50UHJvZHVjdElkJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG5cblxuICAgICAgICAgICAgICAgIHsvKiA8Zm9ybSBpZD1cInBheW1lbnRGb3JtXCIgcmVmPVwicGF5bWVudEZvcm1cIiBtZXRob2Q9XCJwb3N0XCIgYWN0aW9uPXtgJHtDT05GSUcuQVBJX0JBU0VfVVJMfS9hcGkvdjEvdXNlci90cmFuc2FjdGlvbi9zYXZlYH0gc3R5bGU9e3sgdmlzaWJpbGl0eTogJ2hpZGRlbicgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJyZXNwb25zZVwiIGRlZmF1bHRWYWx1ZT17ZGF0YX0gLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+ICovfVxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudEZvcm1cbiIsImltcG9ydCBQYXltZW50Rm9ybSBmcm9tICcuL1BheW1lbnRGb3JtJ1xuXG5leHBvcnQgZGVmYXVsdCBQYXltZW50Rm9ybSJdLCJzb3VyY2VSb290IjoiIn0=