exports.ids = [73];
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

/***/ "./dev/js/components/commons/orderSummary/index.js":
/*!*********************************************************!*\
  !*** ./dev/js/components/commons/orderSummary/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _orderSummaryView = __webpack_require__(/*! ./orderSummaryView */ "./dev/js/components/commons/orderSummary/orderSummaryView.js");

var _orderSummaryView2 = _interopRequireDefault(_orderSummaryView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _orderSummaryView2.default;

/***/ }),

/***/ "./dev/js/components/commons/orderSummary/orderSummaryView.js":
/*!********************************************************************!*\
  !*** ./dev/js/components/commons/orderSummary/orderSummaryView.js ***!
  \********************************************************************/
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

var _initialsPicture = __webpack_require__(/*! ../../commons/initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

var _criteo = __webpack_require__(/*! ../../../helpers/criteo.js */ "./dev/js/helpers/criteo.js");

var _criteo2 = _interopRequireDefault(_criteo);

var _staticDisclaimer = __webpack_require__(/*! ../../commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class OrderSummaryView extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            payment_success: this.props.location.search.includes('payment_success')
        };
    }

    componentDidMount() {
        if (window) {
            window.scrollTo(0, 0);
        }

        if (_storage2.default.checkAuth()) {
            this.props.fetchOrderSummary(this.props.match.params.id).then(res => {
                if (res.data && res.data.length) {
                    this.setState({ items: res.data, data: res });

                    let orderId = this.props.match.params.id;
                    let deal_price = 0;
                    let info = {};
                    info[orderId] = [];
                    let isLab = res.data[0].data.tests;
                    let isDoctor = res.data[0].data.doctor;
                    let appointmentId = res.data[0].booking_id;
                    res.data.map(data => {
                        info[orderId].push({ 'booking_id': data.booking_id, 'mrp': data.mrp, 'deal_price': data.deal_price });
                        deal_price += parseInt(data.deal_price);

                        if (data.payment_type && data.payment_type == 2) {
                            let analyticData = {
                                'Category': 'ConsumerApp', 'Action': 'OrderPlaced', 'CustomerID': _gtm2.default.getUserId(), 'leadid': orderId, 'event': 'cod-doctor-appointment-booked', 'mrp': data.mrp
                            };
                            _gtm2.default.sendEvent({ data: analyticData });
                        }
                    });
                    info = JSON.stringify(info);

                    _storage2.default.setAppointmentDetails(info).then(setCookie => {
                        if (this.state.payment_success) {
                            if (isLab && isLab.length > 0) {
                                let labData = {
                                    'Category': 'ConsumerApp', 'Action': 'LabAppointmentBooked', 'CustomerID': _gtm2.default.getUserId(), 'leadid': appointmentId, 'event': 'lab-appointment-booked'
                                };

                                _gtm2.default.sendEvent({ data: labData });
                            }

                            if (isDoctor && Object.keys(isDoctor).length > 0) {
                                let docData = {
                                    'Category': 'ConsumerApp', 'Action': 'DoctorAppointmentBooked', 'CustomerID': _gtm2.default.getUserId(), 'leadid': appointmentId, 'event': 'doctor-appointment-booked'
                                };
                                _gtm2.default.sendEvent({ data: docData });
                            }

                            let analyticData = {
                                'Category': 'ConsumerApp', 'Action': 'OrderPlaced', 'CustomerID': _gtm2.default.getUserId(), 'leadid': orderId, 'event': 'order-booked'
                            };
                            _gtm2.default.sendEvent({ data: analyticData });
                            this.props.history.replace(this.props.location.pathname + "?hide_button=true");

                            let criteo_data = {
                                'event': "trackTransaction", 'id': orderId, 'item': [{ 'id': "1", 'price': deal_price, 'quantity': 1 }]
                            };

                            _criteo2.default.sendData(criteo_data);
                        }
                    });
                }
            }).catch(e => {});
        }
    }

    viewDetail(item) {
        if (item.booking_id) {
            if (item.data.doctor) {
                this.props.history.push(`/opd/appointment/${item.booking_id}`);
            } else {
                this.props.history.push(`/lab/appointment/${item.booking_id}`);
            }
        } else {
            this.props.history.push('/cart');
        }
    }

    navigateToSBI() {
        window.open('http://13.235.199.36/webcore/docprimecallback', '_blank');
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
                            { className: 'booking-confirm-screen' },
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
                                            'h4',
                                            { className: 'shoping-cart-main-heading' },
                                            'Your Appointments'
                                        ),
                                        this.state.items.map((item, i) => {
                                            return _react2.default.createElement(
                                                'div',
                                                { key: i, className: 'widget mrb-15 mrng-top-12 p-relative pb-5' },
                                                _react2.default.createElement(
                                                    'div',
                                                    null,
                                                    item.booking_id ? _react2.default.createElement(
                                                        'p',
                                                        { className: 'cart-appntmnt' },
                                                        'Transaction success '
                                                    ) : _react2.default.createElement(
                                                        'p',
                                                        { className: 'cart-appntmnt-failed' },
                                                        'Transaction Failed '
                                                    ),
                                                    item.booking_id ? _react2.default.createElement(
                                                        'p',
                                                        { className: 'cartBooking' },
                                                        'Booking ID : ',
                                                        item.booking_id
                                                    ) : ""
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: item.booking_id ? "" : "cart-card-blur-opacity" },
                                                    !item.is_vip_member && !item.covered_under_vip ? _react2.default.createElement(
                                                        'div',
                                                        { className: 'shopng-cart-price' },
                                                        item.payment_type == 3 ? _react2.default.createElement(
                                                            'span',
                                                            null,
                                                            item.data.profile && item.data.profile.name ? item.data.profile.name : ''
                                                        ) : item.payment_type == 1 || item.payment_type == 4 ? _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            _react2.default.createElement('img', { src: "/assets" + "/img/rupee-icon.svg", alt: 'rupee-icon', className: 'icon-rupee' }),
                                                            " " + item.effective_price
                                                        ) : item.payment_type == 2 ? _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            _react2.default.createElement('img', { src: "/assets" + "/img/rupee-icon.svg", alt: 'rupee-icon', className: 'icon-rupee' }),
                                                            " " + (parseInt(item.cod_deal_price) - (parseInt(item.discount) || 0))
                                                        ) : _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            _react2.default.createElement('img', { src: "/assets" + "/img/rupee-icon.svg", alt: 'rupee-icon', className: 'icon-rupee' }),
                                                            " " + item.mrp
                                                        )
                                                    ) : _react2.default.createElement(
                                                        'div',
                                                        { className: 'shopng-cart-price' },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'text-right mb-2' },
                                                            item.is_gold_member ? _react2.default.createElement('img', { className: 'vip-main-ico img-fluid', src: "/assets" + '/img/gold-sm.png' }) : _react2.default.createElement('img', { className: 'vip-main-ico img-fluid', src: "/assets" + '/img/viplog.png' })
                                                        ),
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            '\u20B9 ',
                                                            item.effective_price,
                                                            ' ',
                                                            _react2.default.createElement(
                                                                'span',
                                                                { className: 'cstm-doc-cut-price' },
                                                                '\u20B9 ',
                                                                item.mrp,
                                                                ' '
                                                            )
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'widget-header dr-qucik-info' },
                                                        _react2.default.createElement(
                                                            'div',
                                                            null,
                                                            _react2.default.createElement(
                                                                'div',
                                                                null,
                                                                _react2.default.createElement(
                                                                    _initialsPicture2.default,
                                                                    { name: item.data.doctor ? item.data.doctor.name : item.data.lab.name, has_image: !!item.data.thumbnail, className: item.data.doctor && item.data.doctor.name ? 'img-round mt-0' : 'initialsPicture-ls mt-0' },
                                                                    _react2.default.createElement('img', { src: item.data.thumbnail,
                                                                        className: item.data.doctor ? 'img-round' : 'fltr-usr-image-lab' })
                                                                )
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'dr-profile mrt-10' },
                                                            item.data.doctor ? _react2.default.createElement(
                                                                'h1',
                                                                { className: 'dr-name' },
                                                                item.data.doctor.name
                                                            ) : _react2.default.createElement(
                                                                'h1',
                                                                { className: 'dr-name' },
                                                                item.data.lab.name
                                                            ),
                                                            item.data.hospital ? _react2.default.createElement(
                                                                'p',
                                                                { className: 'clinic-name text-sm' },
                                                                item.data.hospital.name
                                                            ) : "",
                                                            item.payment_type == 2 ? _react2.default.createElement(
                                                                'span',
                                                                { style: { top: -50 }, className: 'pay-at-clinic' },
                                                                'Pay at Clinic'
                                                            ) : ""
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'shopping-card-details-list' },
                                                        _react2.default.createElement(
                                                            'ul',
                                                            null,
                                                            _react2.default.createElement(
                                                                'li',
                                                                { className: 'cart-viewdtls-container' },
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    null,
                                                                    _react2.default.createElement(
                                                                        'span',
                                                                        { className: 'shpng-dtls-ico' },
                                                                        _react2.default.createElement('img', { src: "/assets" + "/img/watch-date.svg", style: { marginTop: '2px', width: '15px' } })
                                                                    ),
                                                                    new Date(item.time_slot_start).toLocaleDateString(),
                                                                    ' | ',
                                                                    new Date(item.time_slot_start).toLocaleTimeString()
                                                                ),
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    { onClick: this.viewDetail.bind(this, item), className: 'float-right cart-viewdtls-btn' },
                                                                    item.booking_id ? "View Detail" : "View in Cart"
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    item.payment_mode ? _react2.default.createElement(
                                                        'div',
                                                        { className: 'd-flex align-item-center jc-spaceb shopping-card-details-list fw-500' },
                                                        _react2.default.createElement(
                                                            'span',
                                                            null,
                                                            'Payment mode'
                                                        ),
                                                        _react2.default.createElement(
                                                            'span',
                                                            null,
                                                            item.payment_mode
                                                        )
                                                    ) : ''
                                                )
                                            );
                                        }),
                                        this.state.data && this.state.data.appointment_via_sbi ? _react2.default.createElement(
                                            'div',
                                            { className: 'fixed sticky-btn p-0 v-btn  btn-lg horizontal bottom no-round text-lg buttons-addcart-container ' },
                                            _react2.default.createElement(
                                                'button',
                                                { className: 'v-btn-primary book-btn-mrgn-adjust ', onClick: () => {
                                                        this.navigateToSBI();
                                                    } },
                                                'Go Back To SBIG Home'
                                            )
                                        ) : ''
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

exports.default = OrderSummaryView;

/***/ }),

/***/ "./dev/js/containers/commons/OrderSummary.js":
/*!***************************************************!*\
  !*** ./dev/js/containers/commons/OrderSummary.js ***!
  \***************************************************/
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

var _orderSummary = __webpack_require__(/*! ../../components/commons/orderSummary */ "./dev/js/components/commons/orderSummary/index.js");

var _orderSummary2 = _interopRequireDefault(_orderSummary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class OrderSummary extends _react2.default.Component {
    constructor(props) {
        super(props);
        if (!_storage2.default.checkAuth()) {
            this.props.history.replace(`/login?callback=/`);
        }
    }

    componentDidMount() {
        if (_storage2.default.checkAuth()) {
            this.props.getCartItems();
        }
    }

    render() {

        return _react2.default.createElement(_orderSummary2.default, this.props);
    }
}

const mapStateToProps = state => {

    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        fetchOrderSummary: order_id => dispatch((0, _index.fetchOrderSummary)(order_id)),
        getCartItems: () => dispatch((0, _index.getCartItems)())
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OrderSummary);

/***/ }),

/***/ "./dev/js/helpers/criteo.js":
/*!**********************************!*\
  !*** ./dev/js/helpers/criteo.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

const CRITEO = {

	sendData(data) {
		try {

			if (window) {

				window.criteo_q = window.criteo_q || [];
				var deviceType = navigator ? /iPad/.test(navigator.userAgent) ? "t" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(navigator.userAgent) ? "m" : "d" : '';

				window.criteo_q.push({ 'event': "setAccount", account: 57439 }, // You should never update this line
				{ 'event': "setEmail", 'email': '' }, { 'event': "setSiteType", type: deviceType }, data);
			}
		} catch (e) {}
	}
};

exports.default = CRITEO;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL29yZGVyU3VtbWFyeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL29yZGVyU3VtbWFyeS9vcmRlclN1bW1hcnlWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL2NvbW1vbnMvT3JkZXJTdW1tYXJ5LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9oZWxwZXJzL2NyaXRlby5qcyJdLCJuYW1lcyI6WyJpc1ZpcCIsImNvbG9yIiwiZm9udFNpemUiLCJwYWRkaW5nQm90dG9tIiwiT3JkZXJTdW1tYXJ5IiwiT3JkZXJTdW1tYXJ5VmlldyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiaXRlbXMiLCJwYXltZW50X3N1Y2Nlc3MiLCJsb2NhdGlvbiIsInNlYXJjaCIsImluY2x1ZGVzIiwiY29tcG9uZW50RGlkTW91bnQiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsIlNUT1JBR0UiLCJjaGVja0F1dGgiLCJmZXRjaE9yZGVyU3VtbWFyeSIsIm1hdGNoIiwicGFyYW1zIiwiaWQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImxlbmd0aCIsInNldFN0YXRlIiwib3JkZXJJZCIsImRlYWxfcHJpY2UiLCJpbmZvIiwiaXNMYWIiLCJ0ZXN0cyIsImlzRG9jdG9yIiwiZG9jdG9yIiwiYXBwb2ludG1lbnRJZCIsImJvb2tpbmdfaWQiLCJtYXAiLCJwdXNoIiwibXJwIiwicGFyc2VJbnQiLCJwYXltZW50X3R5cGUiLCJhbmFseXRpY0RhdGEiLCJHVE0iLCJnZXRVc2VySWQiLCJzZW5kRXZlbnQiLCJKU09OIiwic3RyaW5naWZ5Iiwic2V0QXBwb2ludG1lbnREZXRhaWxzIiwic2V0Q29va2llIiwibGFiRGF0YSIsIk9iamVjdCIsImtleXMiLCJkb2NEYXRhIiwiaGlzdG9yeSIsInJlcGxhY2UiLCJwYXRobmFtZSIsImNyaXRlb19kYXRhIiwiQ1JJVEVPIiwic2VuZERhdGEiLCJjYXRjaCIsImUiLCJ2aWV3RGV0YWlsIiwiaXRlbSIsIm5hdmlnYXRlVG9TQkkiLCJvcGVuIiwicmVuZGVyIiwiaSIsImlzX3ZpcF9tZW1iZXIiLCJjb3ZlcmVkX3VuZGVyX3ZpcCIsInByb2ZpbGUiLCJuYW1lIiwiQVNTRVRTX0JBU0VfVVJMIiwiZWZmZWN0aXZlX3ByaWNlIiwiY29kX2RlYWxfcHJpY2UiLCJkaXNjb3VudCIsImlzX2dvbGRfbWVtYmVyIiwibGFiIiwidGh1bWJuYWlsIiwiaG9zcGl0YWwiLCJ0b3AiLCJtYXJnaW5Ub3AiLCJ3aWR0aCIsIkRhdGUiLCJ0aW1lX3Nsb3Rfc3RhcnQiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJiaW5kIiwicGF5bWVudF9tb2RlIiwiYXBwb2ludG1lbnRfdmlhX3NiaSIsImdldENhcnRJdGVtcyIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwib3JkZXJfaWQiLCJjcml0ZW9fcSIsImRldmljZVR5cGUiLCJuYXZpZ2F0b3IiLCJ0ZXN0IiwidXNlckFnZW50IiwiYWNjb3VudCIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztrQkFDZSxDQUFDLEVBQUVBLEtBQUYsRUFBRCxLQUFlO0FBQzdCLFdBQVE7QUFBQTtBQUFBLFVBQUssV0FBWSxlQUFjQSxRQUFNLGtCQUFOLEdBQXlCLEVBQUcsRUFBM0Q7QUFDTztBQUFBO0FBQUEsY0FBRyxXQUFVLGVBQWIsRUFBNkIsT0FBTyxFQUFFQyxPQUFPLFNBQVQsRUFBb0JDLFVBQVUsRUFBOUIsRUFBcEM7QUFBQTtBQUFBLFNBRFA7QUFFTztBQUFBO0FBQUEsY0FBSyxXQUFVLDRCQUFmLEVBQTRDLE9BQU8sRUFBRUMs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LFNBQXJFLElBQWtGLEdBQWxGLEdBQXdGLEdBQTNJLEdBQStJLEVBQWhLOztBQUVBcEYsV0FBT2dGLFFBQVAsQ0FBZ0J6RCxJQUFoQixDQUFxQixFQUFFLFNBQVMsWUFBWCxFQUF5QjhELFNBQVMsS0FBbEMsRUFBckIsRUFBK0Q7QUFDL0QsTUFBQyxTQUFTLFVBQVYsRUFBc0IsU0FBUyxFQUEvQixFQURBLEVBRUEsRUFBRSxTQUFTLGFBQVgsRUFBMEJDLE1BQU1MLFVBQWhDLEVBRkEsRUFHQXZFLElBSEE7QUFLQTtBQUVELEdBZEQsQ0FjQyxPQUFNb0MsQ0FBTixFQUFRLENBRVI7QUFDRDtBQXBCYSxDQUFmOztrQkF1QmVILE0iLCJmaWxlIjoiNzMuc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuZXhwb3J0IGRlZmF1bHQgKHsgaXNWaXAgfSkgPT4ge1xuXHRyZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtgZHNjbG1lci1mdHIgJHtpc1ZpcD8nbWFyZ2luLWJvdHRvbS01NSc6Jyd9YH0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0yMFwiIHN0eWxlPXt7IGNvbG9yOiAnIzhhOGE4YScsIGZvbnRTaXplOiAxMCB9fSA+VGhlIFdlYnNpdGUgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgaW4gY2FzZSBvZiBhIG1lZGljYWwgZW1lcmdlbmN5IGFuZC8gb3IgY3JpdGljYWwgY2FyZSBhbmQgdGhlIHVzZXIgc2hvdWxkIGRpcmVjdGx5IGNvbnRhY3QgaGlzLyBoZXIgbWVkaWNhbCBzZXJ2aWNlIHByb3ZpZGVyIGZvciBQaHlzaWNhbCBFeGFtaW5hdGlvbi4gRG9jcHJpbWUgaXMgc29sZWx5IGEgdGVjaG5vbG9neSBwYXJ0bmVyLjwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBmb290ZXItbmV3LWNvcHlyZ2h0XCIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogNSB9fSA+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRvY3ByaW1lLmNvbSBDb3B5cmlnaHQgJmNvcHk7IDIwMjAuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5BbGwgcmlnaHRzIHJlc2VydmVkLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+RE9DUFJJTUUgVEVDSE5PTE9HSUVTIFBSSVZBVEUgTElNSVRFRDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+Q0lOIDogVTc0OTk5SFIyMDE2UFRDMDY0MzEyPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+KVxufSIsImltcG9ydCBPcmRlclN1bW1hcnkgZnJvbSAnLi9vcmRlclN1bW1hcnlWaWV3J1xuXG5leHBvcnQgZGVmYXVsdCBPcmRlclN1bW1hcnkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTGVmdEJhciBmcm9tICcuLi8uLi9jb21tb25zL0xlZnRCYXInXG5pbXBvcnQgUmlnaHRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9SaWdodEJhcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuaW1wb3J0IEluaXRpYWxzUGljdHVyZSBmcm9tICcuLi8uLi9jb21tb25zL2luaXRpYWxzUGljdHVyZSdcbmltcG9ydCBDUklURU8gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9jcml0ZW8uanMnXG5pbXBvcnQgRGlzY2xhaW1lciBmcm9tICcuLi8uLi9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcydcblxuY2xhc3MgT3JkZXJTdW1tYXJ5VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICBwYXltZW50X3N1Y2Nlc3M6IHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdwYXltZW50X3N1Y2Nlc3MnKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFNUT1JBR0UuY2hlY2tBdXRoKCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hPcmRlclN1bW1hcnkodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YSAmJiByZXMuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGl0ZW1zOiByZXMuZGF0YSwgZGF0YTogcmVzIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IG9yZGVySWQgPSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZFxuICAgICAgICAgICAgICAgICAgICBsZXQgZGVhbF9wcmljZSA9IDBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZm8gPSB7fVxuICAgICAgICAgICAgICAgICAgICBpbmZvW29yZGVySWRdID0gW11cbiAgICAgICAgICAgICAgICAgICAgbGV0IGlzTGFiID0gcmVzLmRhdGFbMF0uZGF0YS50ZXN0c1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXNEb2N0b3IgPSByZXMuZGF0YVswXS5kYXRhLmRvY3RvclxuICAgICAgICAgICAgICAgICAgICBsZXQgYXBwb2ludG1lbnRJZCA9IHJlcy5kYXRhWzBdLmJvb2tpbmdfaWRcbiAgICAgICAgICAgICAgICAgICAgcmVzLmRhdGEubWFwKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZvW29yZGVySWRdLnB1c2goeyAnYm9va2luZ19pZCc6IGRhdGEuYm9va2luZ19pZCwgJ21ycCc6IGRhdGEubXJwLCAnZGVhbF9wcmljZSc6IGRhdGEuZGVhbF9wcmljZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVhbF9wcmljZSArPSBwYXJzZUludChkYXRhLmRlYWxfcHJpY2UpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnBheW1lbnRfdHlwZSAmJiBkYXRhLnBheW1lbnRfdHlwZSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFuYWx5dGljRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdPcmRlclBsYWNlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogb3JkZXJJZCwgJ2V2ZW50JzogJ2NvZC1kb2N0b3ItYXBwb2ludG1lbnQtYm9va2VkJywgJ21ycCc6IGRhdGEubXJwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBhbmFseXRpY0RhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgaW5mbyA9IEpTT04uc3RyaW5naWZ5KGluZm8pXG5cbiAgICAgICAgICAgICAgICAgICAgU1RPUkFHRS5zZXRBcHBvaW50bWVudERldGFpbHMoaW5mbykudGhlbigoc2V0Q29va2llKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5wYXltZW50X3N1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpc0xhYiAmJiBpc0xhYi5sZW5ndGggPjApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGFiRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnTGFiQXBwb2ludG1lbnRCb29rZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6IGFwcG9pbnRtZW50SWQsICdldmVudCc6ICdsYWItYXBwb2ludG1lbnQtYm9va2VkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGxhYkRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpc0RvY3RvciAmJiBPYmplY3Qua2V5cyhpc0RvY3RvcikubGVuZ3RoID4wKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRvY0RhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0RvY3RvckFwcG9pbnRtZW50Qm9va2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiBhcHBvaW50bWVudElkLCAnZXZlbnQnOiAnZG9jdG9yLWFwcG9pbnRtZW50LWJvb2tlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZG9jRGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbmFseXRpY0RhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnT3JkZXJQbGFjZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6IG9yZGVySWQsICdldmVudCc6ICdvcmRlci1ib29rZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBhbmFseXRpY0RhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucmVwbGFjZSh0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lICsgXCI/aGlkZV9idXR0b249dHJ1ZVwiKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNyaXRlb19kYXRhID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudCc6IFwidHJhY2tUcmFuc2FjdGlvblwiLCAnaWQnOiBvcmRlcklkLCAnaXRlbSc6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgJ2lkJzogXCIxXCIsICdwcmljZSc6IGRlYWxfcHJpY2UsICdxdWFudGl0eSc6IDEgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JJVEVPLnNlbmREYXRhKGNyaXRlb19kYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmlld0RldGFpbChpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtLmJvb2tpbmdfaWQpIHtcbiAgICAgICAgICAgIGlmIChpdGVtLmRhdGEuZG9jdG9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9vcGQvYXBwb2ludG1lbnQvJHtpdGVtLmJvb2tpbmdfaWR9YClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9sYWIvYXBwb2ludG1lbnQvJHtpdGVtLmJvb2tpbmdfaWR9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvY2FydCcpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvU0JJKCl7XG4gICAgICAgIHdpbmRvdy5vcGVuKCdodHRwOi8vMTMuMjM1LjE5OS4zNi93ZWJjb3JlL2RvY3ByaW1lY2FsbGJhY2snLCAnX2JsYW5rJylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG4gICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGFpbmVyLXRvcC1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGVmdEJhciAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctNyBjZW50ZXItY29sdW1uXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJib29raW5nLWNvbmZpcm0tc2NyZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInNob3BpbmctY2FydC1tYWluLWhlYWRpbmdcIj5Zb3VyIEFwcG9pbnRtZW50czwvaDQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pdGVtcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTUgbXJuZy10b3AtMTIgcC1yZWxhdGl2ZSBwYi01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5ib29raW5nX2lkID8gPHAgY2xhc3NOYW1lPVwiY2FydC1hcHBudG1udFwiPlRyYW5zYWN0aW9uIHN1Y2Nlc3MgPC9wPiA6IDxwIGNsYXNzTmFtZT1cImNhcnQtYXBwbnRtbnQtZmFpbGVkXCI+VHJhbnNhY3Rpb24gRmFpbGVkIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmJvb2tpbmdfaWQgPyA8cCBjbGFzc05hbWU9XCJjYXJ0Qm9va2luZ1wiPkJvb2tpbmcgSUQgOiB7aXRlbS5ib29raW5nX2lkfTwvcD4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aXRlbS5ib29raW5nX2lkID8gXCJcIiA6IFwiY2FydC1jYXJkLWJsdXItb3BhY2l0eVwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS5pc192aXBfbWVtYmVyICYmICFpdGVtLmNvdmVyZWRfdW5kZXJfdmlwP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcG5nLWNhcnQtcHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5wYXltZW50X3R5cGUgPT0gMyA/IDxzcGFuPntpdGVtLmRhdGEucHJvZmlsZSAmJiBpdGVtLmRhdGEucHJvZmlsZS5uYW1lID8gaXRlbS5kYXRhLnByb2ZpbGUubmFtZSA6ICcnfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW0ucGF5bWVudF90eXBlID09IDEgfHwgaXRlbS5wYXltZW50X3R5cGUgPT0gNCA/IDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3J1cGVlLWljb24uc3ZnXCJ9IGFsdD1cInJ1cGVlLWljb25cIiBjbGFzc05hbWU9XCJpY29uLXJ1cGVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwiICsgaXRlbS5lZmZlY3RpdmVfcHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiA6IGl0ZW0ucGF5bWVudF90eXBlID09IDIgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9ydXBlZS1pY29uLnN2Z1wifSBhbHQ9XCJydXBlZS1pY29uXCIgY2xhc3NOYW1lPVwiaWNvbi1ydXBlZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwiICsgKCBwYXJzZUludChpdGVtLmNvZF9kZWFsX3ByaWNlKS0ocGFyc2VJbnQoaXRlbS5kaXNjb3VudCl8fDApICkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3J1cGVlLWljb24uc3ZnXCJ9IGFsdD1cInJ1cGVlLWljb25cIiBjbGFzc05hbWU9XCJpY29uLXJ1cGVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCIgKyBpdGVtLm1ycH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8ZGl2IGNsYXNzTmFtZT1cInNob3BuZy1jYXJ0LXByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pc19nb2xkX21lbWJlcj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInZpcC1tYWluLWljbyBpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2dvbGQtc20ucG5nJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PGltZyBjbGFzc05hbWU9XCJ2aXAtbWFpbi1pY28gaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXBsb2cucG5nJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPuKCuSB7aXRlbS5lZmZlY3RpdmVfcHJpY2V9IDxzcGFuIGNsYXNzTmFtZT1cImNzdG0tZG9jLWN1dC1wcmljZVwiPuKCuSB7aXRlbS5tcnB9IDwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1oZWFkZXIgZHItcXVjaWstaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5pdGlhbHNQaWN0dXJlIG5hbWU9e2l0ZW0uZGF0YS5kb2N0b3IgPyBpdGVtLmRhdGEuZG9jdG9yLm5hbWUgOiBpdGVtLmRhdGEubGFiLm5hbWV9IGhhc19pbWFnZT17ISFpdGVtLmRhdGEudGh1bWJuYWlsfSBjbGFzc05hbWU9e2l0ZW0uZGF0YS5kb2N0b3IgJiYgaXRlbS5kYXRhLmRvY3Rvci5uYW1lID8gJ2ltZy1yb3VuZCBtdC0wJyA6ICdpbml0aWFsc1BpY3R1cmUtbHMgbXQtMCd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmRhdGEudGh1bWJuYWlsfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2l0ZW0uZGF0YS5kb2N0b3IgPyAnaW1nLXJvdW5kJyA6ICdmbHRyLXVzci1pbWFnZS1sYWInIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5pdGlhbHNQaWN0dXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyLXByb2ZpbGUgbXJ0LTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZGF0YS5kb2N0b3IgPyA8aDEgY2xhc3NOYW1lPVwiZHItbmFtZVwiPntpdGVtLmRhdGEuZG9jdG9yLm5hbWV9PC9oMT4gOiA8aDEgY2xhc3NOYW1lPVwiZHItbmFtZVwiPntpdGVtLmRhdGEubGFiLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZGF0YS5ob3NwaXRhbCA/IDxwIGNsYXNzTmFtZT1cImNsaW5pYy1uYW1lIHRleHQtc21cIj57aXRlbS5kYXRhLmhvc3BpdGFsLm5hbWV9PC9wPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucGF5bWVudF90eXBlID09IDIgPyA8c3BhbiBzdHlsZT17eyB0b3A6IC01MCB9fSBjbGFzc05hbWU9XCJwYXktYXQtY2xpbmljXCI+UGF5IGF0IENsaW5pYzwvc3Bhbj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wcGluZy1jYXJkLWRldGFpbHMtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNhcnQtdmlld2R0bHMtY29udGFpbmVyXCI+PHA+PHNwYW4gY2xhc3NOYW1lPVwic2hwbmctZHRscy1pY29cIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3dhdGNoLWRhdGUuc3ZnXCJ9IHN0eWxlPXt7IG1hcmdpblRvcDogJzJweCcsIHdpZHRoOiAnMTVweCcgfX0gLz48L3NwYW4+eyhuZXcgRGF0ZShpdGVtLnRpbWVfc2xvdF9zdGFydCkpLnRvTG9jYWxlRGF0ZVN0cmluZygpfSB8IHsobmV3IERhdGUoaXRlbS50aW1lX3Nsb3Rfc3RhcnQpKS50b0xvY2FsZVRpbWVTdHJpbmcoKX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLnZpZXdEZXRhaWwuYmluZCh0aGlzLCBpdGVtKX0gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgY2FydC12aWV3ZHRscy1idG5cIj57aXRlbS5ib29raW5nX2lkID8gXCJWaWV3IERldGFpbFwiIDogXCJWaWV3IGluIENhcnRcIn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucGF5bWVudF9tb2RlP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW0tY2VudGVyIGpjLXNwYWNlYiBzaG9wcGluZy1jYXJkLWRldGFpbHMtbGlzdCBmdy01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UGF5bWVudCBtb2RlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS5wYXltZW50X21vZGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhICYmIHRoaXMuc3RhdGUuZGF0YS5hcHBvaW50bWVudF92aWFfc2JpID9cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgc3RpY2t5LWJ0biBwLTAgdi1idG4gIGJ0bi1sZyBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCB0ZXh0LWxnIGJ1dHRvbnMtYWRkY2FydC1jb250YWluZXIgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidi1idG4tcHJpbWFyeSBib29rLWJ0bi1tcmduLWFkanVzdCBcIiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMubmF2aWdhdGVUb1NCSSgpfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHbyBCYWNrIFRvIFNCSUcgSG9tZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFJpZ2h0QmFyIGV4dHJhQ2xhc3M9XCIgY2hhdC1mbG9hdC1idG4tMlwiIG5vQ2hhdEJ1dHRvbj17dHJ1ZX0gbXNnVGVtcGxhdGU9XCJnb2xkX2dlbmVyYWxfdGVtcGxhdGVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8RGlzY2xhaW1lciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVyU3VtbWFyeVZpZXdcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBmZXRjaE9yZGVyU3VtbWFyeSwgZ2V0Q2FydEl0ZW1zIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcblxuaW1wb3J0IE9yZGVyU3VtbWFyeVZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL29yZGVyU3VtbWFyeSdcblxuXG5jbGFzcyBPcmRlclN1bW1hcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICBpZiAoIVNUT1JBR0UuY2hlY2tBdXRoKCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5yZXBsYWNlKGAvbG9naW4/Y2FsbGJhY2s9L2ApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKFNUT1JBR0UuY2hlY2tBdXRoKCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0Q2FydEl0ZW1zKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE9yZGVyU3VtbWFyeVZpZXcgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcblxuICAgIHJldHVybiB7XG5cbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGZldGNoT3JkZXJTdW1tYXJ5OiAob3JkZXJfaWQpID0+IGRpc3BhdGNoKGZldGNoT3JkZXJTdW1tYXJ5KG9yZGVyX2lkKSksXG4gICAgICAgIGdldENhcnRJdGVtczogKCkgPT4gZGlzcGF0Y2goZ2V0Q2FydEl0ZW1zKCkpLFxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShPcmRlclN1bW1hcnkpO1xuIiwiXG5jb25zdCBDUklURU8gPSB7XG5cblx0c2VuZERhdGEoZGF0YSApe1xuXHRcdHRyeXtcblxuXHRcdFx0aWYod2luZG93KXtcblx0XHRcdFxuXHRcdFx0XHR3aW5kb3cuY3JpdGVvX3EgPSB3aW5kb3cuY3JpdGVvX3EgfHwgW11cblx0XHRcdFx0dmFyIGRldmljZVR5cGUgPSBuYXZpZ2F0b3I/L2lQYWQvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgPyBcInRcIiA6IC9Nb2JpbGV8aVAoaG9uZXxvZCl8QW5kcm9pZHxCbGFja0JlcnJ5fElFTW9iaWxlfFNpbGsvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgPyBcIm1cIiA6IFwiZFwiOicnO1xuXG5cdFx0XHRcdHdpbmRvdy5jcml0ZW9fcS5wdXNoKHsgJ2V2ZW50JzogXCJzZXRBY2NvdW50XCIsIGFjY291bnQ6IDU3NDM5fSwgLy8gWW91IHNob3VsZCBuZXZlciB1cGRhdGUgdGhpcyBsaW5lXG5cdFx0XHRcdHsnZXZlbnQnOiBcInNldEVtYWlsXCIsICdlbWFpbCc6ICcnfSxcblx0XHRcdFx0eyAnZXZlbnQnOiBcInNldFNpdGVUeXBlXCIsIHR5cGU6IGRldmljZVR5cGV9LFxuXHRcdFx0XHRkYXRhXG5cdFx0XHRcdClcblx0XHRcdH1cblxuXHRcdH1jYXRjaChlKXtcblxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDUklURU8iXSwic291cmNlUm9vdCI6IiJ9