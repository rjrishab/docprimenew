(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

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

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var isVip = _ref.isVip;

    return _react2.default.createElement(
        'div',
        { className: 'dsclmer-ftr ' + (isVip ? 'margin-bottom-55' : '') },
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loader = function (_React$Component) {
    _inherits(Loader, _React$Component);

    function Loader(props) {
        _classCallCheck(this, Loader);

        return _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).call(this, props));
    }

    _createClass(Loader, [{
        key: "render",
        value: function render() {

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
    }]);

    return Loader;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WalletView = function (_React$Component) {
    _inherits(WalletView, _React$Component);

    function WalletView(props) {
        _classCallCheck(this, WalletView);

        var _this = _possibleConstructorReturn(this, (WalletView.__proto__ || Object.getPrototypeOf(WalletView)).call(this, props));

        _this.state = {
            loading: false,
            openWithdraw: false
        };
        return _this;
    }

    _createClass(WalletView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (window) {
                window.scrollTo(0, 0);
            }
        }
    }, {
        key: 'toggleWithdraw',
        value: function toggleWithdraw() {
            this.setState({ openWithdraw: !this.state.openWithdraw });
        }
    }, {
        key: 'refund',
        value: function refund() {
            var _this2 = this;

            this.setState({ loading: true });
            this.props.refundWallet(function (err, data) {
                _this2.setState({ loading: false, openWithdraw: false });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                userWalletBalance = _props.userWalletBalance,
                userTransactions = _props.userTransactions,
                userCashbackBalance = _props.userCashbackBalance;


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
                                        userTransactions.map(function (transaction, i) {
                                            return _react2.default.createElement(_transactions2.default, _extends({ key: i }, _this3.props, { data: transaction }));
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
    }]);

    return WalletView;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TYPE = {
    0: "Credited",
    1: "Debit"
};

var ACTION = {
    0: "CANCELLATION",
    1: "PAYMENT",
    2: "REFUND",
    3: "SALE",
    4: "RESCHEDULE_PAYMENT",
    5: "CASHBACK_CREDIT",
    7: "REFERRAL_CREDIT",
    8: "PROMOTIONAL_DEBIT"
};

var PRODUCT = {
    1: 'Doctor',
    2: 'Lab',
    3: 'Insurance',
    4: 'Plan',
    5: 'Chat',
    11: 'Vip Membership'
};

var SOURCE_FROM = {
    1: '',
    2: 'from Promotional Balance',
    3: '',
    11: ''
};

var SOURCE_TO = {
    1: '',
    2: 'to Promotional Balance'
};

var ENTITY = {
    1: 'Appointment',
    2: 'Appointment',
    3: '',
    4: '',
    5: 'Consultation',
    11: ''
};

var Transactions = function (_React$Component) {
    _inherits(Transactions, _React$Component);

    function Transactions(props) {
        _classCallCheck(this, Transactions);

        var _this = _possibleConstructorReturn(this, (Transactions.__proto__ || Object.getPrototypeOf(Transactions)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(Transactions, [{
        key: "getAmountTag",
        value: function getAmountTag(data) {
            var type = data.type,
                amount = data.amount;

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
    }, {
        key: "getImageTag",
        value: function getImageTag(data) {
            var type = data.type,
                amount = data.amount;

            if (TYPE[type] == 'Credited') {
                return _react2.default.createElement("img", { src: "/assets" + "/img/csh-back.svg", style: { width: '30px' } });
            } else {
                return _react2.default.createElement("img", { className: "minus-img", src: "/assets" + "/img/csh-back.svg", style: { width: '30px' } });
            }
        }
    }, {
        key: "formatDate",
        value: function formatDate(ts) {
            return new Date(ts).toDateString();
        }
    }, {
        key: "getTxMessage",
        value: function getTxMessage(data) {
            var type = data.type,
                action = data.action,
                product_id = data.product_id,
                source = data.source;

            if (!source) {
                source = 1;
            }

            switch (action) {
                case 0:
                    {
                        return "Refund for " + PRODUCT[product_id] + " Appointment " + SOURCE_TO[source];
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
                        return "Paid for " + PRODUCT[product_id] + " " + ENTITY[product_id] + " " + SOURCE_FROM[source];
                    }
                case 4:
                    {
                        return "Refund for rescheduled appointment";
                    }
                case 5:
                    {
                        return "Cashback Received for " + PRODUCT[product_id] + " " + ENTITY[product_id];
                    }
                case 6:
                    {
                        return "Referral Bonus";
                    }
                case 7:
                    {
                        return "Promotional Amount Debited";
                    }
            }
        }
    }, {
        key: "openAppointment",
        value: function openAppointment(type, id) {
            if (id) {
                if (PRODUCT[type] == 'Doctor') {
                    this.props.history.push("/opd/appointment/" + id);
                } else if (PRODUCT[type] == 'Plan') {
                    this.props.history.push("/prime/success?user_plan=" + id);
                } else if (PRODUCT[type] == 'Insurance') {
                    this.props.history.push("/insurance/certificate?id=" + id);
                } else {
                    this.props.history.push("/lab/appointment/" + id);
                }
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _props$data = this.props.data,
                type = _props$data.type,
                action = _props$data.action,
                amount = _props$data.amount,
                created_at = _props$data.created_at,
                reference_id = _props$data.reference_id,
                product_id = _props$data.product_id;


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
    }]);

    return Transactions;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _wallet = __webpack_require__(/*! ../../components/commons/wallet */ "./dev/js/components/commons/wallet/index.js");

var _wallet2 = _interopRequireDefault(_wallet);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home(props) {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

        if (!_storage2.default.checkAuth()) {
            _this.props.history.replace('/login?callback=/wallet');
        }
        return _this;
    }

    _createClass(Home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (_storage2.default.checkAuth()) {
                // this.props.getUserProfile()
                this.props.fetchTransactions();
            }
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(_wallet2.default, _extends({}, this.props, this.state));
        }
    }]);

    return Home;
}(_react2.default.Component);

Home.contextTypes = {
    router: function router() {
        return null;
    }
};


var mapStateToProps = function mapStateToProps(state) {
    var _state$USER = state.USER,
        userTransactions = _state$USER.userTransactions,
        userWalletBalance = _state$USER.userWalletBalance,
        userCashbackBalance = _state$USER.userCashbackBalance;


    return {
        userTransactions: userTransactions,
        userWalletBalance: userWalletBalance,
        userCashbackBalance: userCashbackBalance
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        fetchTransactions: function fetchTransactions(cb) {
            return dispatch((0, _index.fetchTransactions)(cb));
        },
        getUserProfile: function getUserProfile() {
            return dispatch((0, _index.getUserProfile)());
        },
        refundWallet: function refundWallet(cb) {
            return dispatch((0, _index.refundWallet)(cb));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);

/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/react-router/es/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-router/es/index.js ***!
  \***********************************************/
/*! exports provided: MemoryRouter, Prompt, Redirect, Route, Router, StaticRouter, Switch, generatePath, matchPath, withRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MemoryRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MemoryRouter */ "./node_modules/react-router/es/MemoryRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return _MemoryRouter__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Prompt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Prompt */ "./node_modules/react-router/es/Prompt.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return _Prompt__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Redirect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Redirect */ "./node_modules/react-router/es/Redirect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return _Redirect__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Route */ "./node_modules/react-router/es/Route.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return _Route__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Router */ "./node_modules/react-router/es/Router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return _Router__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _StaticRouter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StaticRouter */ "./node_modules/react-router/es/StaticRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return _StaticRouter__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Switch */ "./node_modules/react-router/es/Switch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _Switch__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _generatePath__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./generatePath */ "./node_modules/react-router/es/generatePath.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generatePath", function() { return _generatePath__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _matchPath__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./matchPath */ "./node_modules/react-router/es/matchPath.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return _matchPath__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _withRouter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./withRouter */ "./node_modules/react-router/es/withRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return _withRouter__WEBPACK_IMPORTED_MODULE_9__["default"]; });






















/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy93YWxsZXQvV2FsbGV0Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3dhbGxldC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3dhbGxldC90cmFuc2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvY29tbW9ucy9XYWxsZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BhdGgtYnJvd3NlcmlmeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbImlzVmlwIiwiY29sb3IiLCJmb250U2l6ZSIsInBhZGRpbmdCb3R0b20iLCJMb2FkZXIiLCJwcm9wcyIsImNsYXNzVHlwZSIsImlGcmFtZVBvcHVwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJXYWxsZXRWaWV3Iiwic3RhdGUiLCJsb2FkaW5nIiwib3BlbldpdGhkcmF3Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJzZXRTdGF0ZSIsInJlZnVuZFdhbGxldCIsImVyciIsImRhdGEiLCJ1c2VyV2FsbGV0QmFsYW5jZSIsInVzZXJUcmFuc2FjdGlvbnMiLCJ1c2VyQ2FzaGJhY2tCYWxhbmNlIiwidG9nZ2xlV2l0aGRyYXciLCJiaW5kIiwibGVuZ3RoIiwibWFwIiwidHJhbnNhY3Rpb24iLCJpIiwiQVNTRVRTX0JBU0VfVVJMIiwicGFkZGluZyIsInJlZnVuZCIsIlRZUEUiLCJBQ1RJT04iLCJQUk9EVUNUIiwiU09VUkNFX0ZST00iLCJTT1VSQ0VfVE8iLCJFTlRJVFkiLCJUcmFuc2FjdGlvbnMiLCJ0eXBlIiwiYW1vdW50Iiwid2lkdGgiLCJ0cyIsIkRhdGUiLCJ0b0RhdGVTdHJpbmciLCJhY3Rpb24iLCJwcm9kdWN0X2lkIiwic291cmNlIiwiaWQiLCJoaXN0b3J5IiwicHVzaCIsImNyZWF0ZWRfYXQiLCJyZWZlcmVuY2VfaWQiLCJmb3JtYXREYXRlIiwiZ2V0SW1hZ2VUYWciLCJnZXRUeE1lc3NhZ2UiLCJjdXJzb3IiLCJvcGVuQXBwb2ludG1lbnQiLCJnZXRBbW91bnRUYWciLCJIb21lIiwiU1RPUkFHRSIsImNoZWNrQXV0aCIsInJlcGxhY2UiLCJmZXRjaFRyYW5zYWN0aW9ucyIsImNvbnRleHRUeXBlcyIsInJvdXRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsIlVTRVIiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImNiIiwiZ2V0VXNlclByb2ZpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O2tCQUNlLGdCQUFlO0FBQUEsUUFBWkEsS0FBWSxRQUFaQSxLQUFZOztBQUM3QixXQUFRO0FBQUE7QUFBQSxVQUFLLDZCQUEwQkEsUUFBTSxrQkFBTixHQUF5QixFQUFuRCxDQUFMO0FBQ087QUFBQTtBQUFBLGNBQUcsV0FBVSxlQUFiLEVBQTZCLE9BQU8sRUFBRUMsT0FBTyxTQUFULEVBQW9CQyxVQUFVLEVBQTlCLEVBQXBDO0FBQUE7QUFBQSxTQURQO0FBRU87QUFBQTtBQUFBLGNBQUssV0FBVSw0QkFBZixFQUE0QyxPQUFPLEVBQUVDLGVBQWUsQ0FBakIsRUFBbkQ7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEo7QUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFG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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN1NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJDO0FBQ0Y7QUFDVjtBQUNGO0FBQ007QUFDRjtBQUNKO0FBQ0Y7QUFDSTtBQUNGO0FBQ2M7QUFDRjtBQUNWO0FBQ0Y7QUFDYztBQUNGO0FBQ0o7QUFDRjtBQUNJIiwiZmlsZSI6IjY2LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmV4cG9ydCBkZWZhdWx0ICh7IGlzVmlwIH0pID0+IHtcblx0cmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17YGRzY2xtZXItZnRyICR7aXNWaXA/J21hcmdpbi1ib3R0b20tNTUnOicnfWB9PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMjBcIiBzdHlsZT17eyBjb2xvcjogJyM4YThhOGEnLCBmb250U2l6ZTogMTAgfX0gPlRoZSBXZWJzaXRlIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGluIGNhc2Ugb2YgYSBtZWRpY2FsIGVtZXJnZW5jeSBhbmQvIG9yIGNyaXRpY2FsIGNhcmUgYW5kIHRoZSB1c2VyIHNob3VsZCBkaXJlY3RseSBjb250YWN0IGhpcy8gaGVyIG1lZGljYWwgc2VydmljZSBwcm92aWRlciBmb3IgUGh5c2ljYWwgRXhhbWluYXRpb24uIERvY3ByaW1lIGlzIHNvbGVseSBhIHRlY2hub2xvZ3kgcGFydG5lci48L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgZm9vdGVyLW5ldy1jb3B5cmdodFwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDUgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8cD5Eb2NwcmltZS5jb20gQ29weXJpZ2h0ICZjb3B5OyAyMDIwLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+QWxsIHJpZ2h0cyByZXNlcnZlZC48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRPQ1BSSU1FIFRFQ0hOT0xPR0lFUyBQUklWQVRFIExJTUlURUQ8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkNJTiA6IFU3NDk5OUhSMjAxNlBUQzA2NDMxMjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2Pilcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBMb2FkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NUeXBlIHx8IFwibG9hZGVyQ2lyY3VsYXJcIn0gPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHAtbG9hZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlGcmFtZVBvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMTBcIj5SZWRpcmVjdGluZyB5b3UgdG8gUGhhcm1lYXN5IHdlYnNpdGUuLi48L3A+IDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlclxuIiwiaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFRyYW5zYWN0aW9ucyBmcm9tICcuL3RyYW5zYWN0aW9ucydcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vTG9hZGVyJ1xuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9MZWZ0QmFyJ1xuaW1wb3J0IFJpZ2h0QmFyIGZyb20gJy4uLy4uL2NvbW1vbnMvUmlnaHRCYXInXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi8uLi9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IERpc2NsYWltZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9Ib21lL3N0YXRpY0Rpc2NsYWltZXIuanMnXG5cbmNsYXNzIFdhbGxldFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBvcGVuV2l0aGRyYXc6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVXaXRoZHJhdygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5XaXRoZHJhdzogIXRoaXMuc3RhdGUub3BlbldpdGhkcmF3IH0pXG4gICAgfVxuXG4gICAgcmVmdW5kKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxuICAgICAgICB0aGlzLnByb3BzLnJlZnVuZFdhbGxldCgoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIG9wZW5XaXRoZHJhdzogZmFsc2UgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgbGV0IHsgdXNlcldhbGxldEJhbGFuY2UsIHVzZXJUcmFuc2FjdGlvbnMsIHVzZXJDYXNoYmFja0JhbGFuY2UgfSA9IHRoaXMucHJvcHNcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRhaW5lci10b3AtbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExlZnRCYXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNvbC1sZy03IGNlbnRlci1jb2x1bW5cIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5sb2FkaW5nID8gPExvYWRlciAvPiA6IDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkICBuZXctcHJvZmlsZS1oZWFkZXItbWFyZ2luXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG10LTIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhbGxldC1jYXNoYmFjay1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNzaC13YWxsZXQtYmFsXCI+V2FsbGV0IEJhbGFuY2U8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjc2gtd2FsbGV0LXZhbFwiPuKCuSB7dXNlcldhbGxldEJhbGFuY2UgKyB1c2VyQ2FzaGJhY2tCYWxhbmNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzaGJhY2stYmFsYWNuZS12YWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjc2gtcmZuZC10ZXh0XCI+UmVmdW5kYWJsZSBCYWxhbmNlIDogPHNwYW4+4oK5IHt1c2VyV2FsbGV0QmFsYW5jZX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyV2FsbGV0QmFsYW5jZSA+IDAgPyA8c3BhbiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVdpdGhkcmF3LmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cImNhc2hiYWNrLXdpdGhkcmF3XCI+V2l0aGRyYXc8L3NwYW4+IDogXCJcIn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2hiYWNrLWJhbGFjbmUtdmFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3NoLXJmbmQtdGV4dFwiPlByb21vdGlvbmFsIEJhbGFuY2UgOiA8c3Bhbj7igrkge3VzZXJDYXNoYmFja0JhbGFuY2V9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJUcmFuc2FjdGlvbnMgJiYgdXNlclRyYW5zYWN0aW9ucy5sZW5ndGggPyA8ZGl2IGNsYXNzTmFtZT1cImNhc2hiYWNrLXRyYW5zYWN0aW9ucy1zZWN0aW9uXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjc2gtdHJucy1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhbnNhY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlclRyYW5zYWN0aW9ucy5tYXAoKHRyYW5zYWN0aW9uLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8VHJhbnNhY3Rpb25zIGtleT17aX0gey4uLnRoaXMucHJvcHN9IGRhdGE9e3RyYW5zYWN0aW9ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5vcGVuV2l0aGRyYXcgPyA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbC1vdmVybGF5XCIgb25DbGljaz17dGhpcy50b2dnbGVXaXRoZHJhdy5iaW5kKHRoaXMpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgY2FuY2VsLWFwcG9pbnRtZW50LWRpdiBjYW5jZWwtcG9wdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWhlYWRlciB0ZXh0LWNlbnRlciBhY3Rpb24tc2NyZWVuLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBjYW5jZWwtYXBwb2ludG1lbnQtaGVhZFwiPldpdGhkcmF3IEJhbGFuY2U8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY29ucy9jbG9zZS5wbmdcIn0gY2xhc3NOYW1lPVwiY2xvc2UtbW9kYWxcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVdpdGhkcmF3LmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIgc3R5bGU9e3sgcGFkZGluZzogJzBweCAxNXB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwb3BVcC1jb250ZXRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgYmFsYW5jZSBvZiA8Yj7igrkge3VzZXJXYWxsZXRCYWxhbmNlfTwvYj4gd2lsbCBiZSBjcmVkaXRlZCB0byB5b3UgaW4gNS03IHdvcmtpbmcgZGF5c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIlBvcFVwLUJ0blwiIG9uQ2xpY2s9e3RoaXMucmVmdW5kLmJpbmQodGhpcyl9PkNvbmZpcm08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1iLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tb24tc2VhcmNoLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzcmNoLWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdhbGxldDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tb24tbGlzdGluZy1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxpbWcgc3R5bGU9e3sgd2lkdGg6ICc0NXB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9wYXl0bS1sb2dvLnBuZ1wifSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBheXRtPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaW5rLWFjY291bnQtc3BhblwiPkxpbmsgQWNjb3VudDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48aW1nIHN0eWxlPXt7IHdpZHRoOiAnNDVweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvcGF5dG0tbG9nby5wbmdcIn0gLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXl0bTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGluay1hY2NvdW50LXNwYW5cIj5MaW5rIEFjY291bnQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGltZyBzdHlsZT17eyB3aWR0aDogJzQ1cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3BheXRtLWxvZ28ucG5nXCJ9IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGF5dG08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpbmstYWNjb3VudC1zcGFuXCI+TGluayBBY2NvdW50PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbW9uLXNlYXJjaC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3JjaC1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPbmxpbmUgUGF5bWVueTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tb24tbGlzdGluZy1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxpbWcgc3R5bGU9e3sgd2lkdGg6ICc0NXB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9wYXl0bS1sb2dvLnBuZ1wifSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5ldGJhbmtpbmc8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICc4cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3JpZ2h0LWFycm93LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxpbWcgc3R5bGU9e3sgd2lkdGg6ICc0NXB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9wYXl0bS1sb2dvLnBuZ1wifSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlYml0IENhcmQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICc4cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3JpZ2h0LWFycm93LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxpbWcgc3R5bGU9e3sgd2lkdGg6ICc0NXB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9wYXl0bS1sb2dvLnBuZ1wifSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWRpdCBDYXJkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnOHB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9yaWdodC1hcnJvdy5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJpZ2h0QmFyIG5vQ2hhdEJ1dHRvbj17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxEaXNjbGFpbWVyIC8+XG4gICAgICAgICAgICA8L2RpdiA+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFdhbGxldFZpZXdcbiIsImltcG9ydCBXYWxsZXRWaWV3IGZyb20gJy4vV2FsbGV0VmlldydcblxuZXhwb3J0IGRlZmF1bHQgV2FsbGV0VmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFRZUEUgPSB7XG4gICAgMDogXCJDcmVkaXRlZFwiLFxuICAgIDE6IFwiRGViaXRcIlxufVxuXG5jb25zdCBBQ1RJT04gPSB7XG4gICAgMDogXCJDQU5DRUxMQVRJT05cIixcbiAgICAxOiBcIlBBWU1FTlRcIixcbiAgICAyOiBcIlJFRlVORFwiLFxuICAgIDM6IFwiU0FMRVwiLFxuICAgIDQ6IFwiUkVTQ0hFRFVMRV9QQVlNRU5UXCIsXG4gICAgNTogXCJDQVNIQkFDS19DUkVESVRcIixcbiAgICA3OiBcIlJFRkVSUkFMX0NSRURJVFwiLFxuICAgIDg6IFwiUFJPTU9USU9OQUxfREVCSVRcIlxufVxuXG5jb25zdCBQUk9EVUNUID0ge1xuICAgIDE6ICdEb2N0b3InLFxuICAgIDI6ICdMYWInLFxuICAgIDM6ICdJbnN1cmFuY2UnLFxuICAgIDQ6ICdQbGFuJyxcbiAgICA1OiAnQ2hhdCcsXG4gICAgMTE6ICdWaXAgTWVtYmVyc2hpcCdcbn1cblxuY29uc3QgU09VUkNFX0ZST00gPSB7XG4gICAgMTogJycsXG4gICAgMjogJ2Zyb20gUHJvbW90aW9uYWwgQmFsYW5jZScsXG4gICAgMzogJycsXG4gICAgMTE6ICcnXG59XG5cbmNvbnN0IFNPVVJDRV9UTyA9IHtcbiAgICAxOiAnJyxcbiAgICAyOiAndG8gUHJvbW90aW9uYWwgQmFsYW5jZSdcbn1cblxuY29uc3QgRU5USVRZID0ge1xuICAgIDE6ICdBcHBvaW50bWVudCcsXG4gICAgMjogJ0FwcG9pbnRtZW50JyxcbiAgICAzOiAnJyxcbiAgICA0OiAnJyxcbiAgICA1OiAnQ29uc3VsdGF0aW9uJyxcbiAgICAxMTogJydcbn1cblxuY2xhc3MgVHJhbnNhY3Rpb25zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBbW91bnRUYWcoZGF0YSkge1xuICAgICAgICBsZXQgeyB0eXBlLCBhbW91bnQgfSA9IGRhdGFcbiAgICAgICAgaWYgKFRZUEVbdHlwZV0gPT0gJ0NyZWRpdGVkJykge1xuICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cImNzaC10cm5zLXByaWNlXCI+PGIgY2xhc3NOYW1lPVwicGxzLXNnblwiPis8L2I+IOKCuSB7YW1vdW50fTwvc3Bhbj5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJjc2gtdHJucy1wcmljZVwiPjxiIGNsYXNzTmFtZT1cIm1ucy1zZ25cIj4tPC9iPiDigrkge2Ftb3VudH08L3NwYW4+XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRJbWFnZVRhZyhkYXRhKSB7XG4gICAgICAgIGxldCB7IHR5cGUsIGFtb3VudCB9ID0gZGF0YVxuICAgICAgICBpZiAoVFlQRVt0eXBlXSA9PSAnQ3JlZGl0ZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jc2gtYmFjay5zdmdcIn0gc3R5bGU9e3sgd2lkdGg6ICczMHB4JyB9fSAvPlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDxpbWcgY2xhc3NOYW1lPVwibWludXMtaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3NoLWJhY2suc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiAnMzBweCcgfX0gLz5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvcm1hdERhdGUodHMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRzKS50b0RhdGVTdHJpbmcoKVxuICAgIH1cblxuICAgIGdldFR4TWVzc2FnZShkYXRhKSB7XG4gICAgICAgIGxldCB7IHR5cGUsIGFjdGlvbiwgcHJvZHVjdF9pZCwgc291cmNlIH0gPSBkYXRhXG4gICAgICAgIGlmICghc291cmNlKSB7XG4gICAgICAgICAgICBzb3VyY2UgPSAxXG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgICAgICAgY2FzZSAwOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBSZWZ1bmQgZm9yICR7UFJPRFVDVFtwcm9kdWN0X2lkXX0gQXBwb2ludG1lbnQgJHtTT1VSQ0VfVE9bc291cmNlXX1gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIDE6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBZGRlZCBNb25leSB0byBXYWxsZXRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAyOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQW1vdW50IFJlZnVuZGVkIHRvIFBheW1lbnQgU291cmNlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgMzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBgUGFpZCBmb3IgJHtQUk9EVUNUW3Byb2R1Y3RfaWRdfSAke0VOVElUWVtwcm9kdWN0X2lkXX0gJHtTT1VSQ0VfRlJPTVtzb3VyY2VdfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgNDoge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIlJlZnVuZCBmb3IgcmVzY2hlZHVsZWQgYXBwb2ludG1lbnRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSA1OiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBDYXNoYmFjayBSZWNlaXZlZCBmb3IgJHtQUk9EVUNUW3Byb2R1Y3RfaWRdfSAke0VOVElUWVtwcm9kdWN0X2lkXX1gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIDY6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYFJlZmVycmFsIEJvbnVzYFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSA3OiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUHJvbW90aW9uYWwgQW1vdW50IERlYml0ZWRcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb3BlbkFwcG9pbnRtZW50KHR5cGUsIGlkKSB7XG4gICAgICAgIGlmIChpZCkge1xuICAgICAgICAgICAgaWYgKFBST0RVQ1RbdHlwZV0gPT0gJ0RvY3RvcicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL29wZC9hcHBvaW50bWVudC8ke2lkfWApXG4gICAgICAgICAgICB9ZWxzZSBpZihQUk9EVUNUW3R5cGVdID09ICdQbGFuJyl7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9wcmltZS9zdWNjZXNzP3VzZXJfcGxhbj0ke2lkfWApXG4gICAgICAgICAgICB9ZWxzZSBpZihQUk9EVUNUW3R5cGVdID09ICdJbnN1cmFuY2UnKXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2luc3VyYW5jZS9jZXJ0aWZpY2F0ZT9pZD0ke2lkfWApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9sYWIvYXBwb2ludG1lbnQvJHtpZH1gKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgeyB0eXBlLCBhY3Rpb24sIGFtb3VudCwgY3JlYXRlZF9hdCwgcmVmZXJlbmNlX2lkLCBwcm9kdWN0X2lkIH0gPSB0aGlzLnByb3BzLmRhdGFcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNoLWFsbC10cmFuc2FjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjc2gtaGVhZGluZy1iZ1wiPnt0aGlzLmZvcm1hdERhdGUoY3JlYXRlZF9hdCl9PC9oNT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNzaC10cm5zLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc2gtY29udGVudC13aXRoLWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuZ2V0SW1hZ2VUYWcodGhpcy5wcm9wcy5kYXRhKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3NoLWJvb2tpbmctaWQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0aGlzLmdldFR4TWVzc2FnZSh0aGlzLnByb3BzLmRhdGEpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZV9pZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2lkID09IDUgPyA8c3Bhbj5Cb29raW5nIElEIDoge3JlZmVyZW5jZV9pZH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxzcGFuIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319IG9uQ2xpY2s9e3RoaXMub3BlbkFwcG9pbnRtZW50LmJpbmQodGhpcywgcHJvZHVjdF9pZCwgcmVmZXJlbmNlX2lkKX0+Qm9va2luZyBJRCA6IHtyZWZlcmVuY2VfaWR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLmdldEFtb3VudFRhZyh0aGlzLnByb3BzLmRhdGEpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNhY3Rpb25zIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGdldFVzZXJQcm9maWxlLCBmZXRjaFRyYW5zYWN0aW9ucywgcmVmdW5kV2FsbGV0IH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcblxuaW1wb3J0IFdhbGxldFZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL3dhbGxldCdcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIGlmICghU1RPUkFHRS5jaGVja0F1dGgoKSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UoYC9sb2dpbj9jYWxsYmFjaz0vd2FsbGV0YClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJvdXRlcjogKCkgPT4gbnVsbFxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAoU1RPUkFHRS5jaGVja0F1dGgoKSkge1xuICAgICAgICAgICAgLy8gdGhpcy5wcm9wcy5nZXRVc2VyUHJvZmlsZSgpXG4gICAgICAgICAgICB0aGlzLnByb3BzLmZldGNoVHJhbnNhY3Rpb25zKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFdhbGxldFZpZXcgey4uLnRoaXMucHJvcHN9IHsuLi50aGlzLnN0YXRlfSAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgbGV0IHtcbiAgICAgICAgdXNlclRyYW5zYWN0aW9ucyxcbiAgICAgICAgdXNlcldhbGxldEJhbGFuY2UsXG4gICAgICAgIHVzZXJDYXNoYmFja0JhbGFuY2VcbiAgICB9ID0gc3RhdGUuVVNFUlxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlclRyYW5zYWN0aW9ucyxcbiAgICAgICAgdXNlcldhbGxldEJhbGFuY2UsXG4gICAgICAgIHVzZXJDYXNoYmFja0JhbGFuY2VcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGZldGNoVHJhbnNhY3Rpb25zOiAoY2IpID0+IGRpc3BhdGNoKGZldGNoVHJhbnNhY3Rpb25zKGNiKSksXG4gICAgICAgIGdldFVzZXJQcm9maWxlOiAoKSA9PiBkaXNwYXRjaChnZXRVc2VyUHJvZmlsZSgpKSxcbiAgICAgICAgcmVmdW5kV2FsbGV0OiAoY2IpID0+IGRpc3BhdGNoKHJlZnVuZFdhbGxldChjYikpXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEhvbWUpO1xuIiwiLy8gLmRpcm5hbWUsIC5iYXNlbmFtZSwgYW5kIC5leHRuYW1lIG1ldGhvZHMgYXJlIGV4dHJhY3RlZCBmcm9tIE5vZGUuanMgdjguMTEuMSxcbi8vIGJhY2twb3J0ZWQgYW5kIHRyYW5zcGxpdGVkIHdpdGggQmFiZWwsIHdpdGggYmFja3dhcmRzLWNvbXBhdCBmaXhlc1xuXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXG4vLyBtdXN0IGJlIG5vIHNsYXNoZXMsIGVtcHR5IGVsZW1lbnRzLCBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxuLy8gKHNvIGFsc28gbm8gbGVhZGluZyBhbmQgdHJhaWxpbmcgc2xhc2hlcyAtIGl0IGRvZXMgbm90IGRpc3Rpbmd1aXNoXG4vLyByZWxhdGl2ZSBhbmQgYWJzb2x1dGUgcGF0aHMpXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcbiAgLy8gaWYgdGhlIHBhdGggdHJpZXMgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIGB1cGAgZW5kcyB1cCA+IDBcbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhcnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGxhc3QgPSBwYXJ0c1tpXTtcbiAgICBpZiAobGFzdCA9PT0gJy4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlIHBhdGggaXMgYWxsb3dlZCB0byBnbyBhYm92ZSB0aGUgcm9vdCwgcmVzdG9yZSBsZWFkaW5nIC4uc1xuICBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcbiAgICBmb3IgKDsgdXAtLTsgdXApIHtcbiAgICAgIHBhcnRzLnVuc2hpZnQoJy4uJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG4vLyBwYXRoLnJlc29sdmUoW2Zyb20gLi4uXSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlc29sdmUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlc29sdmVkUGF0aCA9ICcnLFxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMSAmJiAhcmVzb2x2ZWRBYnNvbHV0ZTsgaS0tKSB7XG4gICAgdmFyIHBhdGggPSAoaSA+PSAwKSA/IGFyZ3VtZW50c1tpXSA6IHByb2Nlc3MuY3dkKCk7XG5cbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcbiAgICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH0gZWxzZSBpZiAoIXBhdGgpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJlc29sdmVkUGF0aCA9IHBhdGggKyAnLycgKyByZXNvbHZlZFBhdGg7XG4gICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IHBhdGguY2hhckF0KDApID09PSAnLyc7XG4gIH1cblxuICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCwgYnV0XG4gIC8vIGhhbmRsZSByZWxhdGl2ZSBwYXRocyB0byBiZSBzYWZlIChtaWdodCBoYXBwZW4gd2hlbiBwcm9jZXNzLmN3ZCgpIGZhaWxzKVxuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICByZXNvbHZlZFBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocmVzb2x2ZWRQYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIXJlc29sdmVkQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICByZXR1cm4gKChyZXNvbHZlZEFic29sdXRlID8gJy8nIDogJycpICsgcmVzb2x2ZWRQYXRoKSB8fCAnLic7XG59O1xuXG4vLyBwYXRoLm5vcm1hbGl6ZShwYXRoKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHZhciBpc0Fic29sdXRlID0gZXhwb3J0cy5pc0Fic29sdXRlKHBhdGgpLFxuICAgICAgdHJhaWxpbmdTbGFzaCA9IHN1YnN0cihwYXRoLCAtMSkgPT09ICcvJztcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihwYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIWlzQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICBpZiAoIXBhdGggJiYgIWlzQWJzb2x1dGUpIHtcbiAgICBwYXRoID0gJy4nO1xuICB9XG4gIGlmIChwYXRoICYmIHRyYWlsaW5nU2xhc2gpIHtcbiAgICBwYXRoICs9ICcvJztcbiAgfVxuXG4gIHJldHVybiAoaXNBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHBhdGg7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmlzQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5qb2luID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwYXRocyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gIHJldHVybiBleHBvcnRzLm5vcm1hbGl6ZShmaWx0ZXIocGF0aHMsIGZ1bmN0aW9uKHAsIGluZGV4KSB7XG4gICAgaWYgKHR5cGVvZiBwICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGguam9pbiBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9XG4gICAgcmV0dXJuIHA7XG4gIH0pLmpvaW4oJy8nKSk7XG59O1xuXG5cbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlbGF0aXZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcbiAgZnJvbSA9IGV4cG9ydHMucmVzb2x2ZShmcm9tKS5zdWJzdHIoMSk7XG4gIHRvID0gZXhwb3J0cy5yZXNvbHZlKHRvKS5zdWJzdHIoMSk7XG5cbiAgZnVuY3Rpb24gdHJpbShhcnIpIHtcbiAgICB2YXIgc3RhcnQgPSAwO1xuICAgIGZvciAoOyBzdGFydCA8IGFyci5sZW5ndGg7IHN0YXJ0KyspIHtcbiAgICAgIGlmIChhcnJbc3RhcnRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgdmFyIGVuZCA9IGFyci5sZW5ndGggLSAxO1xuICAgIGZvciAoOyBlbmQgPj0gMDsgZW5kLS0pIHtcbiAgICAgIGlmIChhcnJbZW5kXSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChzdGFydCA+IGVuZCkgcmV0dXJuIFtdO1xuICAgIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSk7XG4gIH1cblxuICB2YXIgZnJvbVBhcnRzID0gdHJpbShmcm9tLnNwbGl0KCcvJykpO1xuICB2YXIgdG9QYXJ0cyA9IHRyaW0odG8uc3BsaXQoJy8nKSk7XG5cbiAgdmFyIGxlbmd0aCA9IE1hdGgubWluKGZyb21QYXJ0cy5sZW5ndGgsIHRvUGFydHMubGVuZ3RoKTtcbiAgdmFyIHNhbWVQYXJ0c0xlbmd0aCA9IGxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChmcm9tUGFydHNbaV0gIT09IHRvUGFydHNbaV0pIHtcbiAgICAgIHNhbWVQYXJ0c0xlbmd0aCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB2YXIgb3V0cHV0UGFydHMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIG91dHB1dFBhcnRzLnB1c2goJy4uJyk7XG4gIH1cblxuICBvdXRwdXRQYXJ0cyA9IG91dHB1dFBhcnRzLmNvbmNhdCh0b1BhcnRzLnNsaWNlKHNhbWVQYXJ0c0xlbmd0aCkpO1xuXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCcvJyk7XG59O1xuXG5leHBvcnRzLnNlcCA9ICcvJztcbmV4cG9ydHMuZGVsaW1pdGVyID0gJzonO1xuXG5leHBvcnRzLmRpcm5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICBpZiAocGF0aC5sZW5ndGggPT09IDApIHJldHVybiAnLic7XG4gIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KDApO1xuICB2YXIgaGFzUm9vdCA9IGNvZGUgPT09IDQ3IC8qLyovO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDE7IC0taSkge1xuICAgIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgZW5kID0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuIGhhc1Jvb3QgPyAnLycgOiAnLic7XG4gIGlmIChoYXNSb290ICYmIGVuZCA9PT0gMSkge1xuICAgIC8vIHJldHVybiAnLy8nO1xuICAgIC8vIEJhY2t3YXJkcy1jb21wYXQgZml4OlxuICAgIHJldHVybiAnLyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2UoMCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGJhc2VuYW1lKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcblxuICB2YXIgc3RhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICB2YXIgaTtcblxuICBmb3IgKGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgaWYgKHBhdGguY2hhckNvZGVBdChpKSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBwYXRoIGNvbXBvbmVudFxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuICcnO1xuICByZXR1cm4gcGF0aC5zbGljZShzdGFydCwgZW5kKTtcbn1cblxuLy8gVXNlcyBhIG1peGVkIGFwcHJvYWNoIGZvciBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSwgYXMgZXh0IGJlaGF2aW9yIGNoYW5nZWRcbi8vIGluIG5ldyBOb2RlLmpzIHZlcnNpb25zLCBzbyBvbmx5IGJhc2VuYW1lKCkgYWJvdmUgaXMgYmFja3BvcnRlZCBoZXJlXG5leHBvcnRzLmJhc2VuYW1lID0gZnVuY3Rpb24gKHBhdGgsIGV4dCkge1xuICB2YXIgZiA9IGJhc2VuYW1lKHBhdGgpO1xuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xuICB9XG4gIHJldHVybiBmO1xufTtcblxuZXhwb3J0cy5leHRuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgdmFyIHN0YXJ0RG90ID0gLTE7XG4gIHZhciBzdGFydFBhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICAvLyBUcmFjayB0aGUgc3RhdGUgb2YgY2hhcmFjdGVycyAoaWYgYW55KSB3ZSBzZWUgYmVmb3JlIG91ciBmaXJzdCBkb3QgYW5kXG4gIC8vIGFmdGVyIGFueSBwYXRoIHNlcGFyYXRvciB3ZSBmaW5kXG4gIHZhciBwcmVEb3RTdGF0ZSA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0UGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBleHRlbnNpb25cbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICAgIGlmIChjb2RlID09PSA0NiAvKi4qLykge1xuICAgICAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCBkb3QsIG1hcmsgaXQgYXMgdGhlIHN0YXJ0IG9mIG91ciBleHRlbnNpb25cbiAgICAgICAgaWYgKHN0YXJ0RG90ID09PSAtMSlcbiAgICAgICAgICBzdGFydERvdCA9IGk7XG4gICAgICAgIGVsc2UgaWYgKHByZURvdFN0YXRlICE9PSAxKVxuICAgICAgICAgIHByZURvdFN0YXRlID0gMTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0RG90ICE9PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBhbmQgbm9uLXBhdGggc2VwYXJhdG9yIGJlZm9yZSBvdXIgZG90LCBzbyB3ZSBzaG91bGRcbiAgICAgIC8vIGhhdmUgYSBnb29kIGNoYW5jZSBhdCBoYXZpbmcgYSBub24tZW1wdHkgZXh0ZW5zaW9uXG4gICAgICBwcmVEb3RTdGF0ZSA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGFydERvdCA9PT0gLTEgfHwgZW5kID09PSAtMSB8fFxuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBjaGFyYWN0ZXIgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBkb3RcbiAgICAgIHByZURvdFN0YXRlID09PSAwIHx8XG4gICAgICAvLyBUaGUgKHJpZ2h0LW1vc3QpIHRyaW1tZWQgcGF0aCBjb21wb25lbnQgaXMgZXhhY3RseSAnLi4nXG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMSAmJiBzdGFydERvdCA9PT0gZW5kIC0gMSAmJiBzdGFydERvdCA9PT0gc3RhcnRQYXJ0ICsgMSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZShzdGFydERvdCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGZpbHRlciAoeHMsIGYpIHtcbiAgICBpZiAoeHMuZmlsdGVyKSByZXR1cm4geHMuZmlsdGVyKGYpO1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChmKHhzW2ldLCBpLCB4cykpIHJlcy5wdXNoKHhzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLy8gU3RyaW5nLnByb3RvdHlwZS5zdWJzdHIgLSBuZWdhdGl2ZSBpbmRleCBkb24ndCB3b3JrIGluIElFOFxudmFyIHN1YnN0ciA9ICdhYicuc3Vic3RyKC0xKSA9PT0gJ2InXG4gICAgPyBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7IHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pIH1cbiAgICA6IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHtcbiAgICAgICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSBzdHIubGVuZ3RoICsgc3RhcnQ7XG4gICAgICAgIHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pO1xuICAgIH1cbjtcbiIsImltcG9ydCBfTWVtb3J5Um91dGVyIGZyb20gXCIuL01lbW9yeVJvdXRlclwiO1xuZXhwb3J0IHsgX01lbW9yeVJvdXRlciBhcyBNZW1vcnlSb3V0ZXIgfTtcbmltcG9ydCBfUHJvbXB0IGZyb20gXCIuL1Byb21wdFwiO1xuZXhwb3J0IHsgX1Byb21wdCBhcyBQcm9tcHQgfTtcbmltcG9ydCBfUmVkaXJlY3QgZnJvbSBcIi4vUmVkaXJlY3RcIjtcbmV4cG9ydCB7IF9SZWRpcmVjdCBhcyBSZWRpcmVjdCB9O1xuaW1wb3J0IF9Sb3V0ZSBmcm9tIFwiLi9Sb3V0ZVwiO1xuZXhwb3J0IHsgX1JvdXRlIGFzIFJvdXRlIH07XG5pbXBvcnQgX1JvdXRlciBmcm9tIFwiLi9Sb3V0ZXJcIjtcbmV4cG9ydCB7IF9Sb3V0ZXIgYXMgUm91dGVyIH07XG5pbXBvcnQgX1N0YXRpY1JvdXRlciBmcm9tIFwiLi9TdGF0aWNSb3V0ZXJcIjtcbmV4cG9ydCB7IF9TdGF0aWNSb3V0ZXIgYXMgU3RhdGljUm91dGVyIH07XG5pbXBvcnQgX1N3aXRjaCBmcm9tIFwiLi9Td2l0Y2hcIjtcbmV4cG9ydCB7IF9Td2l0Y2ggYXMgU3dpdGNoIH07XG5pbXBvcnQgX2dlbmVyYXRlUGF0aCBmcm9tIFwiLi9nZW5lcmF0ZVBhdGhcIjtcbmV4cG9ydCB7IF9nZW5lcmF0ZVBhdGggYXMgZ2VuZXJhdGVQYXRoIH07XG5pbXBvcnQgX21hdGNoUGF0aCBmcm9tIFwiLi9tYXRjaFBhdGhcIjtcbmV4cG9ydCB7IF9tYXRjaFBhdGggYXMgbWF0Y2hQYXRoIH07XG5pbXBvcnQgX3dpdGhSb3V0ZXIgZnJvbSBcIi4vd2l0aFJvdXRlclwiO1xuZXhwb3J0IHsgX3dpdGhSb3V0ZXIgYXMgd2l0aFJvdXRlciB9OyJdLCJzb3VyY2VSb290IjoiIn0=