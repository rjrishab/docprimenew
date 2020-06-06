exports.ids = [59];
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

/***/ "./dev/js/components/commons/wallet/WalletView.js":
/*!********************************************************!*\
  !*** ./dev/js/components/commons/wallet/WalletView.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _transactions = __webpack_require__(/*! ./transactions */ "./dev/js/components/commons/wallet/transactions.js");

var _transactions2 = _interopRequireDefault(_transactions);

var _Loader = __webpack_require__(/*! ../Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _LeftBar = __webpack_require__(/*! ../../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _staticDisclaimer = __webpack_require__(/*! ../../commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class WalletView extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            openWithdraw: false
        };
    }

    componentDidMount() {
        if (window) {
            window.scrollTo(0, 0);
        }
    }

    toggleWithdraw() {
        this.setState({ openWithdraw: !this.state.openWithdraw });
    }

    refund() {
        this.setState({ loading: true });
        this.props.refundWallet((err, data) => {
            this.setState({ loading: false, openWithdraw: false });
        });
    }

    render() {

        let { userWalletBalance, userTransactions, userCashbackBalance } = this.props;

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
                        this.state.loading ? _react2.default.createElement(_Loader2.default, null) : _react2.default.createElement(
                            'div',
                            { className: 'container-fluid  new-profile-header-margin' },
                            _react2.default.createElement(
                                'div',
                                { className: 'widget mt-20' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'widget-content' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'wallet-cashback-container' },
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'csh-wallet-bal' },
                                            'Wallet Balance'
                                        ),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'csh-wallet-val' },
                                            '\u20B9 ',
                                            userWalletBalance + userCashbackBalance
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'cashback-balacne-val' },
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'csh-rfnd-text' },
                                                'Refundable Balance : ',
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    '\u20B9 ',
                                                    userWalletBalance
                                                )
                                            ),
                                            userWalletBalance > 0 ? _react2.default.createElement(
                                                'span',
                                                { onClick: this.toggleWithdraw.bind(this), className: 'cashback-withdraw' },
                                                'Withdraw'
                                            ) : ""
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'cashback-balacne-val' },
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'csh-rfnd-text' },
                                                'Promotional Balance : ',
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    '\u20B9 ',
                                                    userCashbackBalance
                                                )
                                            )
                                        )
                                    )
                                ),
                                userTransactions && userTransactions.length ? _react2.default.createElement(
                                    'div',
                                    { className: 'cashback-transactions-section' },
                                    _react2.default.createElement(
                                        'h4',
                                        { className: 'csh-trns-heading' },
                                        'Transactions'
                                    ),
                                    userTransactions.map((transaction, i) => {
                                        return _react2.default.createElement(_transactions2.default, _extends({ key: i }, this.props, { data: transaction }));
                                    })
                                ) : ""
                            ),
                            this.state.openWithdraw ? _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement('div', { className: 'cancel-overlay', onClick: this.toggleWithdraw.bind(this) }),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'widget cancel-appointment-div cancel-popup' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'widget-header text-center action-screen-header' },
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'fw-500 cancel-appointment-head' },
                                            'Withdraw Balance'
                                        ),
                                        _react2.default.createElement('img', { src: "/assets" + "/img/icons/close.png", className: 'close-modal', onClick: this.toggleWithdraw.bind(this) }),
                                        _react2.default.createElement('hr', null)
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: '', style: { padding: '0px 15px' } },
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'popUp-contetn' },
                                            'Your balance of ',
                                            _react2.default.createElement(
                                                'b',
                                                null,
                                                '\u20B9 ',
                                                userWalletBalance
                                            ),
                                            ' will be credited to you in 5-7 working days'
                                        ),
                                        _react2.default.createElement(
                                            'button',
                                            { className: 'PopUp-Btn', onClick: this.refund.bind(this) },
                                            'Confirm'
                                        )
                                    )
                                )
                            ) : ""
                        )
                    ),
                    _react2.default.createElement(_RightBar2.default, { noChatButton: true })
                )
            ),
            _react2.default.createElement(_staticDisclaimer2.default, null)
        );
    }
}

exports.default = WalletView;

/***/ }),

/***/ "./dev/js/components/commons/wallet/index.js":
/*!***************************************************!*\
  !*** ./dev/js/components/commons/wallet/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _WalletView = __webpack_require__(/*! ./WalletView */ "./dev/js/components/commons/wallet/WalletView.js");

var _WalletView2 = _interopRequireDefault(_WalletView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _WalletView2.default;

/***/ }),

/***/ "./dev/js/components/commons/wallet/transactions.js":
/*!**********************************************************!*\
  !*** ./dev/js/components/commons/wallet/transactions.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TYPE = {
    0: "Credited",
    1: "Debit"
};

const ACTION = {
    0: "CANCELLATION",
    1: "PAYMENT",
    2: "REFUND",
    3: "SALE",
    4: "RESCHEDULE_PAYMENT",
    5: "CASHBACK_CREDIT",
    7: "REFERRAL_CREDIT",
    8: "PROMOTIONAL_DEBIT"
};

const PRODUCT = {
    1: 'Doctor',
    2: 'Lab',
    3: 'Insurance',
    4: 'Plan',
    5: 'Chat',
    11: 'Vip Membership'
};

const SOURCE_FROM = {
    1: '',
    2: 'from Promotional Balance',
    3: '',
    11: ''
};

const SOURCE_TO = {
    1: '',
    2: 'to Promotional Balance'
};

const ENTITY = {
    1: 'Appointment',
    2: 'Appointment',
    3: '',
    4: '',
    5: 'Consultation',
    11: ''
};

class Transactions extends _react2.default.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    getAmountTag(data) {
        let { type, amount } = data;
        if (TYPE[type] == 'Credited') {
            return _react2.default.createElement(
                "span",
                { className: "csh-trns-price" },
                _react2.default.createElement(
                    "b",
                    { className: "pls-sgn" },
                    "+"
                ),
                " \u20B9 ",
                amount
            );
        } else {
            return _react2.default.createElement(
                "span",
                { className: "csh-trns-price" },
                _react2.default.createElement(
                    "b",
                    { className: "mns-sgn" },
                    "-"
                ),
                " \u20B9 ",
                amount
            );
        }
    }

    getImageTag(data) {
        let { type, amount } = data;
        if (TYPE[type] == 'Credited') {
            return _react2.default.createElement("img", { src: "/assets" + "/img/csh-back.svg", style: { width: '30px' } });
        } else {
            return _react2.default.createElement("img", { className: "minus-img", src: "/assets" + "/img/csh-back.svg", style: { width: '30px' } });
        }
    }

    formatDate(ts) {
        return new Date(ts).toDateString();
    }

    getTxMessage(data) {
        let { type, action, product_id, source } = data;
        if (!source) {
            source = 1;
        }

        switch (action) {
            case 0:
                {
                    return `Refund for ${PRODUCT[product_id]} Appointment ${SOURCE_TO[source]}`;
                }
            case 1:
                {
                    return "Added Money to Wallet";
                }
            case 2:
                {
                    return "Amount Refunded to Payment Source";
                }
            case 3:
                {
                    return `Paid for ${PRODUCT[product_id]} ${ENTITY[product_id]} ${SOURCE_FROM[source]}`;
                }
            case 4:
                {
                    return "Refund for rescheduled appointment";
                }
            case 5:
                {
                    return `Cashback Received for ${PRODUCT[product_id]} ${ENTITY[product_id]}`;
                }
            case 6:
                {
                    return `Referral Bonus`;
                }
            case 7:
                {
                    return "Promotional Amount Debited";
                }
        }
    }

    openAppointment(type, id) {
        if (id) {
            if (PRODUCT[type] == 'Doctor') {
                this.props.history.push(`/opd/appointment/${id}`);
            } else if (PRODUCT[type] == 'Plan') {
                this.props.history.push(`/prime/success?user_plan=${id}`);
            } else if (PRODUCT[type] == 'Insurance') {
                this.props.history.push(`/insurance/certificate?id=${id}`);
            } else {
                this.props.history.push(`/lab/appointment/${id}`);
            }
        }
    }

    render() {
        let { type, action, amount, created_at, reference_id, product_id } = this.props.data;

        return _react2.default.createElement(
            "div",
            { className: "cash-all-transaction" },
            _react2.default.createElement(
                "h5",
                { className: "csh-heading-bg" },
                this.formatDate(created_at)
            ),
            _react2.default.createElement(
                "div",
                { className: "csh-trns-data" },
                _react2.default.createElement(
                    "div",
                    { className: "csh-content-with-img" },
                    this.getImageTag(this.props.data),
                    _react2.default.createElement(
                        "div",
                        { className: "csh-booking-id-content" },
                        _react2.default.createElement(
                            "p",
                            null,
                            this.getTxMessage(this.props.data)
                        ),
                        reference_id ? product_id == 5 ? _react2.default.createElement(
                            "span",
                            null,
                            "Booking ID : ",
                            reference_id
                        ) : _react2.default.createElement(
                            "span",
                            { style: { cursor: 'pointer' }, onClick: this.openAppointment.bind(this, product_id, reference_id) },
                            "Booking ID : ",
                            reference_id
                        ) : ""
                    )
                ),
                this.getAmountTag(this.props.data)
            )
        );
    }

}

exports.default = Transactions;

/***/ }),

/***/ "./dev/js/containers/commons/Wallet.js":
/*!*********************************************!*\
  !*** ./dev/js/containers/commons/Wallet.js ***!
  \*********************************************/
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

var _wallet = __webpack_require__(/*! ../../components/commons/wallet */ "./dev/js/components/commons/wallet/index.js");

var _wallet2 = _interopRequireDefault(_wallet);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Home extends _react2.default.Component {
    constructor(props) {
        super(props);
        if (!_storage2.default.checkAuth()) {
            this.props.history.replace(`/login?callback=/wallet`);
        }
    }

    componentDidMount() {
        if (_storage2.default.checkAuth()) {
            // this.props.getUserProfile()
            this.props.fetchTransactions();
        }
    }

    render() {

        return _react2.default.createElement(_wallet2.default, _extends({}, this.props, this.state));
    }
}

Home.contextTypes = {
    router: () => null
};
const mapStateToProps = state => {
    let {
        userTransactions,
        userWalletBalance,
        userCashbackBalance
    } = state.USER;

    return {
        userTransactions,
        userWalletBalance,
        userCashbackBalance
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTransactions: cb => dispatch((0, _index.fetchTransactions)(cb)),
        getUserProfile: () => dispatch((0, _index.getUserProfile)()),
        refundWallet: cb => dispatch((0, _index.refundWallet)(cb))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy93YWxsZXQvV2FsbGV0Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3dhbGxldC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3dhbGxldC90cmFuc2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvY29tbW9ucy9XYWxsZXQuanMiXSwibmFtZXMiOlsiaXNWaXAiLCJjb2xvciIsImZvbnRTaXplIiwicGFkZGluZ0JvdHRvbSIsIkxvYWRlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsImNsYXNzVHlwZSIsImlGcmFtZVBvcHVwIiwiV2FsbGV0VmlldyIsInN0YXRlIiwibG9hZGluZyIsIm9wZW5XaXRoZHJhdyIsImNvbXBvbmVudERpZE1vdW50Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0b2dnbGVXaXRoZHJhdyIsInNldFN0YXRlIiwicmVmdW5kIiwicmVmdW5kV2FsbGV0IiwiZXJyIiwiZGF0YSIsInVzZXJXYWxsZXRCYWxhbmNlIiwidXNlclRyYW5zYWN0aW9ucyIsInVzZXJDYXNoYmFja0JhbGFuY2UiLCJiaW5kIiwibGVuZ3RoIiwibWFwIiwidHJhbnNhY3Rpb24iLCJpIiwiQVNTRVRTX0JBU0VfVVJMIiwicGFkZGluZyIsIlRZUEUiLCJBQ1RJT04iLCJQUk9EVUNUIiwiU09VUkNFX0ZST00iLCJTT1VSQ0VfVE8iLCJFTlRJVFkiLCJUcmFuc2FjdGlvbnMiLCJnZXRBbW91bnRUYWciLCJ0eXBlIiwiYW1vdW50IiwiZ2V0SW1hZ2VUYWciLCJ3aWR0aCIsImZvcm1hdERhdGUiLCJ0cyIsIkRhdGUiLCJ0b0RhdGVTdHJpbmciLCJnZXRUeE1lc3NhZ2UiLCJhY3Rpb24iLCJwcm9kdWN0X2lkIiwic291cmNlIiwib3BlbkFwcG9pbnRtZW50IiwiaWQiLCJoaXN0b3J5IiwicHVzaCIsImNyZWF0ZWRfYXQiLCJyZWZlcmVuY2VfaWQiLCJjdXJzb3IiLCJIb21lIiwiU1RPUkFHRSIsImNoZWNrQXV0aCIsInJlcGxhY2UiLCJmZXRjaFRyYW5zYWN0aW9ucyIsImNvbnRleHRUeXBlcyIsInJvdXRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsIlVTRVIiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImNiIiwiZ2V0VXNlclByb2ZpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztrQkFDZSxDQUFDLEVBQUVBLEtBQUYsRUFBRCxLQUFlO0FBQzdCLFdBQVE7QUFBQTtBQUFBLFVBQUssV0FBWSxlQUFjQSxRQUFNLGtCQUFOLEdBQXlCLEVBQUcsRUFBM0Q7QUFDTztBQUFBO0FBQUEsY0FBRyxXQUFVLGVBQWIsRUFBNkIsT0FBTyxFQUFFQyxPQUFPLFNBQVQsRUFBb0JDLFVBQVUsRUFBOUIsRUFBcEM7QUFBQTtBQUFBLFNBRFA7QUFFTztBQUFBO0FBQUEsY0FBSyxXQUFVLDRCQUFmLEVBQTRDLE9BQU8sRUFBRUMsZUFBZSxDQUFqQixFQUFuRDtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISjtBQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUZQLEtBQVI7QUFTQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYRDs7Ozs7O0FBRUEsTUFBTUMsTUFBTixTQUFxQkMsZ0JB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eUJBQWFDLEVBQWIsQ0FBVDtBQUhuQixLQUFQO0FBS0gsQ0FORDs7a0JBU2UseUJBQVFKLGVBQVIsRUFBeUJFLGtCQUF6QixFQUE2Q1QsSUFBN0MsQyIsImZpbGUiOiI1OS5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5leHBvcnQgZGVmYXVsdCAoeyBpc1ZpcCB9KSA9PiB7XG5cdHJldHVybiAoPGRpdiBjbGFzc05hbWU9e2Bkc2NsbWVyLWZ0ciAke2lzVmlwPydtYXJnaW4tYm90dG9tLTU1JzonJ31gfT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJ0LTIwXCIgc3R5bGU9e3sgY29sb3I6ICcjOGE4YThhJywgZm9udFNpemU6IDEwIH19ID5UaGUgV2Vic2l0ZSBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBpbiBjYXNlIG9mIGEgbWVkaWNhbCBlbWVyZ2VuY3kgYW5kLyBvciBjcml0aWNhbCBjYXJlIGFuZCB0aGUgdXNlciBzaG91bGQgZGlyZWN0bHkgY29udGFjdCBoaXMvIGhlciBtZWRpY2FsIHNlcnZpY2UgcHJvdmlkZXIgZm9yIFBoeXNpY2FsIEV4YW1pbmF0aW9uLiBEb2NwcmltZSBpcyBzb2xlbHkgYSB0ZWNobm9sb2d5IHBhcnRuZXIuPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGZvb3Rlci1uZXctY29weXJnaHRcIiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiA1IH19ID5cbiAgICAgICAgICAgICAgICAgICAgPHA+RG9jcHJpbWUuY29tIENvcHlyaWdodCAmY29weTsgMjAyMC48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkFsbCByaWdodHMgcmVzZXJ2ZWQuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5ET0NQUklNRSBURUNITk9MT0dJRVMgUFJJVkFURSBMSU1JVEVEPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5DSU4gOiBVNzQ5OTlIUjIwMTZQVEMwNjQzMTI8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4pXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgTG9hZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzVHlwZSB8fCBcImxvYWRlckNpcmN1bGFyXCJ9ID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRwLWxvYWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pRnJhbWVQb3B1cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJ0LTEwXCI+UmVkaXJlY3RpbmcgeW91IHRvIFBoYXJtZWFzeSB3ZWJzaXRlLi4uPC9wPiA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXJcbiIsImltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInXG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBUcmFuc2FjdGlvbnMgZnJvbSAnLi90cmFuc2FjdGlvbnMnXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlcidcbmltcG9ydCBMZWZ0QmFyIGZyb20gJy4uLy4uL2NvbW1vbnMvTGVmdEJhcidcbmltcG9ydCBSaWdodEJhciBmcm9tICcuLi8uLi9jb21tb25zL1JpZ2h0QmFyJ1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBEaXNjbGFpbWVyIGZyb20gJy4uLy4uL2NvbW1vbnMvSG9tZS9zdGF0aWNEaXNjbGFpbWVyLmpzJ1xuXG5jbGFzcyBXYWxsZXRWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgb3BlbldpdGhkcmF3OiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlV2l0aGRyYXcoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuV2l0aGRyYXc6ICF0aGlzLnN0YXRlLm9wZW5XaXRoZHJhdyB9KVxuICAgIH1cblxuICAgIHJlZnVuZCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSlcbiAgICAgICAgdGhpcy5wcm9wcy5yZWZ1bmRXYWxsZXQoKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBvcGVuV2l0aGRyYXc6IGZhbHNlIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCB7IHVzZXJXYWxsZXRCYWxhbmNlLCB1c2VyVHJhbnNhY3Rpb25zLCB1c2VyQ2FzaGJhY2tCYWxhbmNlIH0gPSB0aGlzLnByb3BzXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciAvPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250YWluZXItdG9wLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0QmFyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctNyBjZW50ZXItY29sdW1uXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubG9hZGluZyA/IDxMb2FkZXIgLz4gOiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCAgbmV3LXByb2ZpbGUtaGVhZGVyLW1hcmdpblwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtdC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YWxsZXQtY2FzaGJhY2stY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjc2gtd2FsbGV0LWJhbFwiPldhbGxldCBCYWxhbmNlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3NoLXdhbGxldC12YWxcIj7igrkge3VzZXJXYWxsZXRCYWxhbmNlICsgdXNlckNhc2hiYWNrQmFsYW5jZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2hiYWNrLWJhbGFjbmUtdmFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3NoLXJmbmQtdGV4dFwiPlJlZnVuZGFibGUgQmFsYW5jZSA6IDxzcGFuPuKCuSB7dXNlcldhbGxldEJhbGFuY2V9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcldhbGxldEJhbGFuY2UgPiAwID8gPHNwYW4gb25DbGljaz17dGhpcy50b2dnbGVXaXRoZHJhdy5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJjYXNoYmFjay13aXRoZHJhd1wiPldpdGhkcmF3PC9zcGFuPiA6IFwiXCJ9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNoYmFjay1iYWxhY25lLXZhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNzaC1yZm5kLXRleHRcIj5Qcm9tb3Rpb25hbCBCYWxhbmNlIDogPHNwYW4+4oK5IHt1c2VyQ2FzaGJhY2tCYWxhbmNlfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyVHJhbnNhY3Rpb25zICYmIHVzZXJUcmFuc2FjdGlvbnMubGVuZ3RoID8gPGRpdiBjbGFzc05hbWU9XCJjYXNoYmFjay10cmFuc2FjdGlvbnMtc2VjdGlvblwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY3NoLXRybnMtaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyYW5zYWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJUcmFuc2FjdGlvbnMubWFwKCh0cmFuc2FjdGlvbiwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFRyYW5zYWN0aW9ucyBrZXk9e2l9IHsuLi50aGlzLnByb3BzfSBkYXRhPXt0cmFuc2FjdGlvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUub3BlbldpdGhkcmF3ID8gPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWwtb3ZlcmxheVwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlV2l0aGRyYXcuYmluZCh0aGlzKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IGNhbmNlbC1hcHBvaW50bWVudC1kaXYgY2FuY2VsLXBvcHVwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1oZWFkZXIgdGV4dC1jZW50ZXIgYWN0aW9uLXNjcmVlbi1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgY2FuY2VsLWFwcG9pbnRtZW50LWhlYWRcIj5XaXRoZHJhdyBCYWxhbmNlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaWNvbnMvY2xvc2UucG5nXCJ9IGNsYXNzTmFtZT1cImNsb3NlLW1vZGFsXCIgb25DbGljaz17dGhpcy50b2dnbGVXaXRoZHJhdy5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiIHN0eWxlPXt7IHBhZGRpbmc6ICcwcHggMTVweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9wVXAtY29udGV0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIGJhbGFuY2Ugb2YgPGI+4oK5IHt1c2VyV2FsbGV0QmFsYW5jZX08L2I+IHdpbGwgYmUgY3JlZGl0ZWQgdG8geW91IGluIDUtNyB3b3JraW5nIGRheXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJQb3BVcC1CdG5cIiBvbkNsaWNrPXt0aGlzLnJlZnVuZC5iaW5kKHRoaXMpfT5Db25maXJtPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbW9uLXNlYXJjaC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3JjaC1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXYWxsZXQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbW9uLWxpc3RpbmctY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48aW1nIHN0eWxlPXt7IHdpZHRoOiAnNDVweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvcGF5dG0tbG9nby5wbmdcIn0gLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXl0bTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGluay1hY2NvdW50LXNwYW5cIj5MaW5rIEFjY291bnQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGltZyBzdHlsZT17eyB3aWR0aDogJzQ1cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3BheXRtLWxvZ28ucG5nXCJ9IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGF5dG08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpbmstYWNjb3VudC1zcGFuXCI+TGluayBBY2NvdW50PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxpbWcgc3R5bGU9e3sgd2lkdGg6ICc0NXB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9wYXl0bS1sb2dvLnBuZ1wifSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBheXRtPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaW5rLWFjY291bnQtc3BhblwiPkxpbmsgQWNjb3VudDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbWItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1vbi1zZWFyY2gtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNyY2gtaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT25saW5lIFBheW1lbnk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbW9uLWxpc3RpbmctY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48aW1nIHN0eWxlPXt7IHdpZHRoOiAnNDVweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvcGF5dG0tbG9nby5wbmdcIn0gLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXRiYW5raW5nPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnOHB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9yaWdodC1hcnJvdy5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48aW1nIHN0eWxlPXt7IHdpZHRoOiAnNDVweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvcGF5dG0tbG9nby5wbmdcIn0gLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWJpdCBDYXJkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnOHB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9yaWdodC1hcnJvdy5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48aW1nIHN0eWxlPXt7IHdpZHRoOiAnNDVweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvcGF5dG0tbG9nby5wbmdcIn0gLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVkaXQgQ2FyZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogJzhweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvcmlnaHQtYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaWdodEJhciBub0NoYXRCdXR0b249e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8RGlzY2xhaW1lciAvPlxuICAgICAgICAgICAgPC9kaXYgPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBXYWxsZXRWaWV3XG4iLCJpbXBvcnQgV2FsbGV0VmlldyBmcm9tICcuL1dhbGxldFZpZXcnXG5cbmV4cG9ydCBkZWZhdWx0IFdhbGxldFZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBUWVBFID0ge1xuICAgIDA6IFwiQ3JlZGl0ZWRcIixcbiAgICAxOiBcIkRlYml0XCJcbn1cblxuY29uc3QgQUNUSU9OID0ge1xuICAgIDA6IFwiQ0FOQ0VMTEFUSU9OXCIsXG4gICAgMTogXCJQQVlNRU5UXCIsXG4gICAgMjogXCJSRUZVTkRcIixcbiAgICAzOiBcIlNBTEVcIixcbiAgICA0OiBcIlJFU0NIRURVTEVfUEFZTUVOVFwiLFxuICAgIDU6IFwiQ0FTSEJBQ0tfQ1JFRElUXCIsXG4gICAgNzogXCJSRUZFUlJBTF9DUkVESVRcIixcbiAgICA4OiBcIlBST01PVElPTkFMX0RFQklUXCJcbn1cblxuY29uc3QgUFJPRFVDVCA9IHtcbiAgICAxOiAnRG9jdG9yJyxcbiAgICAyOiAnTGFiJyxcbiAgICAzOiAnSW5zdXJhbmNlJyxcbiAgICA0OiAnUGxhbicsXG4gICAgNTogJ0NoYXQnLFxuICAgIDExOiAnVmlwIE1lbWJlcnNoaXAnXG59XG5cbmNvbnN0IFNPVVJDRV9GUk9NID0ge1xuICAgIDE6ICcnLFxuICAgIDI6ICdmcm9tIFByb21vdGlvbmFsIEJhbGFuY2UnLFxuICAgIDM6ICcnLFxuICAgIDExOiAnJ1xufVxuXG5jb25zdCBTT1VSQ0VfVE8gPSB7XG4gICAgMTogJycsXG4gICAgMjogJ3RvIFByb21vdGlvbmFsIEJhbGFuY2UnXG59XG5cbmNvbnN0IEVOVElUWSA9IHtcbiAgICAxOiAnQXBwb2ludG1lbnQnLFxuICAgIDI6ICdBcHBvaW50bWVudCcsXG4gICAgMzogJycsXG4gICAgNDogJycsXG4gICAgNTogJ0NvbnN1bHRhdGlvbicsXG4gICAgMTE6ICcnXG59XG5cbmNsYXNzIFRyYW5zYWN0aW9ucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QW1vdW50VGFnKGRhdGEpIHtcbiAgICAgICAgbGV0IHsgdHlwZSwgYW1vdW50IH0gPSBkYXRhXG4gICAgICAgIGlmIChUWVBFW3R5cGVdID09ICdDcmVkaXRlZCcpIHtcbiAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJjc2gtdHJucy1wcmljZVwiPjxiIGNsYXNzTmFtZT1cInBscy1zZ25cIj4rPC9iPiDigrkge2Ftb3VudH08L3NwYW4+XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwiY3NoLXRybnMtcHJpY2VcIj48YiBjbGFzc05hbWU9XCJtbnMtc2duXCI+LTwvYj4g4oK5IHthbW91bnR9PC9zcGFuPlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0SW1hZ2VUYWcoZGF0YSkge1xuICAgICAgICBsZXQgeyB0eXBlLCBhbW91bnQgfSA9IGRhdGFcbiAgICAgICAgaWYgKFRZUEVbdHlwZV0gPT0gJ0NyZWRpdGVkJykge1xuICAgICAgICAgICAgcmV0dXJuIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3NoLWJhY2suc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiAnMzBweCcgfX0gLz5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiA8aW1nIGNsYXNzTmFtZT1cIm1pbnVzLWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NzaC1iYWNrLnN2Z1wifSBzdHlsZT17eyB3aWR0aDogJzMwcHgnIH19IC8+XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3JtYXREYXRlKHRzKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh0cykudG9EYXRlU3RyaW5nKClcbiAgICB9XG5cbiAgICBnZXRUeE1lc3NhZ2UoZGF0YSkge1xuICAgICAgICBsZXQgeyB0eXBlLCBhY3Rpb24sIHByb2R1Y3RfaWQsIHNvdXJjZSB9ID0gZGF0YVxuICAgICAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICAgICAgc291cmNlID0gMVxuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgMDoge1xuICAgICAgICAgICAgICAgIHJldHVybiBgUmVmdW5kIGZvciAke1BST0RVQ1RbcHJvZHVjdF9pZF19IEFwcG9pbnRtZW50ICR7U09VUkNFX1RPW3NvdXJjZV19YFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAxOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWRkZWQgTW9uZXkgdG8gV2FsbGV0XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgMjoge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIkFtb3VudCBSZWZ1bmRlZCB0byBQYXltZW50IFNvdXJjZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIDM6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYFBhaWQgZm9yICR7UFJPRFVDVFtwcm9kdWN0X2lkXX0gJHtFTlRJVFlbcHJvZHVjdF9pZF19ICR7U09VUkNFX0ZST01bc291cmNlXX1gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIDQ6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSZWZ1bmQgZm9yIHJlc2NoZWR1bGVkIGFwcG9pbnRtZW50XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgNToge1xuICAgICAgICAgICAgICAgIHJldHVybiBgQ2FzaGJhY2sgUmVjZWl2ZWQgZm9yICR7UFJPRFVDVFtwcm9kdWN0X2lkXX0gJHtFTlRJVFlbcHJvZHVjdF9pZF19YFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSA2OiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBSZWZlcnJhbCBCb251c2BcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgNzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIlByb21vdGlvbmFsIEFtb3VudCBEZWJpdGVkXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9wZW5BcHBvaW50bWVudCh0eXBlLCBpZCkge1xuICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICAgIGlmIChQUk9EVUNUW3R5cGVdID09ICdEb2N0b3InKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9vcGQvYXBwb2ludG1lbnQvJHtpZH1gKVxuICAgICAgICAgICAgfWVsc2UgaWYoUFJPRFVDVFt0eXBlXSA9PSAnUGxhbicpe1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvcHJpbWUvc3VjY2Vzcz91c2VyX3BsYW49JHtpZH1gKVxuICAgICAgICAgICAgfWVsc2UgaWYoUFJPRFVDVFt0eXBlXSA9PSAnSW5zdXJhbmNlJyl7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9pbnN1cmFuY2UvY2VydGlmaWNhdGU/aWQ9JHtpZH1gKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvbGFiL2FwcG9pbnRtZW50LyR7aWR9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgdHlwZSwgYWN0aW9uLCBhbW91bnQsIGNyZWF0ZWRfYXQsIHJlZmVyZW5jZV9pZCwgcHJvZHVjdF9pZCB9ID0gdGhpcy5wcm9wcy5kYXRhXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzaC1hbGwtdHJhbnNhY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY3NoLWhlYWRpbmctYmdcIj57dGhpcy5mb3JtYXREYXRlKGNyZWF0ZWRfYXQpfTwvaDU+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc2gtdHJucy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3NoLWNvbnRlbnQtd2l0aC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmdldEltYWdlVGFnKHRoaXMucHJvcHMuZGF0YSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNzaC1ib29raW5nLWlkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dGhpcy5nZXRUeE1lc3NhZ2UodGhpcy5wcm9wcy5kYXRhKX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2VfaWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9pZCA9PSA1ID8gPHNwYW4+Qm9va2luZyBJRCA6IHtyZWZlcmVuY2VfaWR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8c3BhbiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fSBvbkNsaWNrPXt0aGlzLm9wZW5BcHBvaW50bWVudC5iaW5kKHRoaXMsIHByb2R1Y3RfaWQsIHJlZmVyZW5jZV9pZCl9PkJvb2tpbmcgSUQgOiB7cmVmZXJlbmNlX2lkfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5nZXRBbW91bnRUYWcodGhpcy5wcm9wcy5kYXRhKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zYWN0aW9ucyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBnZXRVc2VyUHJvZmlsZSwgZmV0Y2hUcmFuc2FjdGlvbnMsIHJlZnVuZFdhbGxldCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5cbmltcG9ydCBXYWxsZXRWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy93YWxsZXQnXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICBpZiAoIVNUT1JBR0UuY2hlY2tBdXRoKCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5yZXBsYWNlKGAvbG9naW4/Y2FsbGJhY2s9L3dhbGxldGApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgICByb3V0ZXI6ICgpID0+IG51bGxcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKFNUT1JBR0UuY2hlY2tBdXRoKCkpIHtcbiAgICAgICAgICAgIC8vIHRoaXMucHJvcHMuZ2V0VXNlclByb2ZpbGUoKVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5mZXRjaFRyYW5zYWN0aW9ucygpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxXYWxsZXRWaWV3IHsuLi50aGlzLnByb3BzfSB7Li4udGhpcy5zdGF0ZX0gLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIGxldCB7XG4gICAgICAgIHVzZXJUcmFuc2FjdGlvbnMsXG4gICAgICAgIHVzZXJXYWxsZXRCYWxhbmNlLFxuICAgICAgICB1c2VyQ2FzaGJhY2tCYWxhbmNlXG4gICAgfSA9IHN0YXRlLlVTRVJcblxuICAgIHJldHVybiB7XG4gICAgICAgIHVzZXJUcmFuc2FjdGlvbnMsXG4gICAgICAgIHVzZXJXYWxsZXRCYWxhbmNlLFxuICAgICAgICB1c2VyQ2FzaGJhY2tCYWxhbmNlXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBmZXRjaFRyYW5zYWN0aW9uczogKGNiKSA9PiBkaXNwYXRjaChmZXRjaFRyYW5zYWN0aW9ucyhjYikpLFxuICAgICAgICBnZXRVc2VyUHJvZmlsZTogKCkgPT4gZGlzcGF0Y2goZ2V0VXNlclByb2ZpbGUoKSksXG4gICAgICAgIHJlZnVuZFdhbGxldDogKGNiKSA9PiBkaXNwYXRjaChyZWZ1bmRXYWxsZXQoY2IpKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShIb21lKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=