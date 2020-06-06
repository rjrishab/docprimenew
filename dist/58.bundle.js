(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "./dev/js/components/commons/Home/CorporateLeadPopup.js":
/*!**************************************************************!*\
  !*** ./dev/js/components/commons/Home/CorporateLeadPopup.js ***!
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

var _commonFixedPopup = __webpack_require__(/*! ../commonFixedPopup/commonFixedPopup.js */ "./dev/js/components/commons/commonFixedPopup/commonFixedPopup.js");

var _commonFixedPopup2 = _interopRequireDefault(_commonFixedPopup);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Method to add before use,
// 1) cancelOverlay()
// 2) pushLead()


var CorporateLeadPopup = function (_React$Component) {
    _inherits(CorporateLeadPopup, _React$Component);

    function CorporateLeadPopup(props) {
        _classCallCheck(this, CorporateLeadPopup);

        var _this = _possibleConstructorReturn(this, (CorporateLeadPopup.__proto__ || Object.getPrototypeOf(CorporateLeadPopup)).call(this, props));

        _this.inputHandler = function (e) {
            if (e.target.name == "phoneNumber") {
                if (e.target.value.length <= 10) {
                    _this.setState(_defineProperty({}, e.target.name, e.target.value));
                }
            } else {
                _this.setState(_defineProperty({}, e.target.name, e.target.value));
            }
        };

        _this.submit = function () {
            if (!_this.state.companyName) {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter Your Company Name" });
                return;
            }
            if (!_this.state.email) {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter Email Id" });
                return;
            }
            if (!_this.state.email.match(/\S+@\S+\.\S+/)) {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter Valid Email" });
                return;
            }
            if (!_this.state.name) {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter Your Name" });
                return;
            }
            if (!_this.state.phoneNumber) {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter Your Phone Number" });
                return;
            }

            if (_this.state.phoneNumber.length < 10) {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter Valid Phone Number" });
                return;
            }

            var data = {
                'lead_source': 'CorporateGold',
                'source': '',
                'phone_number': _this.state.phoneNumber,
                'company_name': _this.state.companyName,
                'contact_person_name': _this.state.name,
                'email': _this.state.email,
                'number_of_employees': _this.state.noe,
                'lead_type': 'CORPORATEGOLD'
            };
            _this.props.pushLeads(data);
        };

        _this.state = {
            companyName: '',
            noe: '',
            email: '',
            phoneNumber: '',
            name: ''
        };
        return _this;
    }

    _createClass(CorporateLeadPopup, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _commonFixedPopup2.default,
                { cancelOverlay: this.props.cancelOverlay, className: 'test-clas' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-sm-12 corporate-detail-section' },
                    _react2.default.createElement('img', { className: 'modal-close-img', src: "/assets" + "/img/customer-icons/close-black.svg", alt: 'close', onClick: this.props.cancelOverlay }),
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Drop your details'
                    ),
                    _react2.default.createElement(
                        'h6',
                        null,
                        'We will reach you for further assistance'
                    ),
                    _react2.default.createElement(
                        'form',
                        { action: '' },
                        _react2.default.createElement(
                            'div',
                            { className: 'input-field-row' },
                            _react2.default.createElement('input', { type: 'text', placeholder: '* Company Name', style: { marginRight: 12 }, name: 'companyName', value: this.state.companyName, onChange: this.inputHandler }),
                            _react2.default.createElement('input', { type: 'number', placeholder: 'No of employees', name: 'noe', value: this.state.noe, onChange: this.inputHandler })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'input-field-row' },
                            _react2.default.createElement('input', { type: 'text', placeholder: '* Email Address', name: 'email', value: this.state.email, onChange: this.inputHandler })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'input-field-row' },
                            _react2.default.createElement('input', { type: 'text', placeholder: '* Contact Person Name', name: 'name', value: this.state.name, onChange: this.inputHandler })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'input-field-row' },
                            _react2.default.createElement('input', { type: 'number', max: '10', placeholder: '* Contact Number', name: 'phoneNumber', value: this.state.phoneNumber, onChange: this.inputHandler })
                        )
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'ipd-inp-sbmt float-right', onClick: this.submit },
                        'Submit'
                    )
                )
            );
        }
    }]);

    return CorporateLeadPopup;
}(_react2.default.Component);

exports.default = CorporateLeadPopup;

/***/ }),

/***/ "./dev/js/components/commons/Home/DemoWidget.js":
/*!******************************************************!*\
  !*** ./dev/js/components/commons/Home/DemoWidget.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopProcedureWidgets = function (_React$Component) {
    _inherits(TopProcedureWidgets, _React$Component);

    function TopProcedureWidgets() {
        _classCallCheck(this, TopProcedureWidgets);

        return _possibleConstructorReturn(this, (TopProcedureWidgets.__proto__ || Object.getPrototypeOf(TopProcedureWidgets)).apply(this, arguments));
    }

    _createClass(TopProcedureWidgets, [{
        key: 'navigateTo',
        value: function navigateTo(data, e) {
            e.preventDefault();
            e.stopPropagation();
            var selectedCriteria = {
                type: 'ipd',
                id: data.id,
                name: data.name
            };

            var gtmData = {
                'Category': 'ConsumerApp', 'Action': 'HomeWidgetProcedureClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'home-widget-procedure-clicked', 'selected': data.name || '', 'selectedId': data.id || ''
            };
            _gtm2.default.sendEvent({ data: gtmData });

            this.props.toggleIPDCriteria(selectedCriteria, true);

            if (data.url) {
                this.props.history.push('/' + data.url + '?showPopup=true');
            } else {
                this.props.history.push('/ipdInfo?ipd_id=' + data.id + '&showPopup=true');
            }
        }
    }, {
        key: 'scroll',
        value: function scroll(type) {
            var elmnt = document.getElementById("top_ipd");
            var outerDivWidth = elmnt.offsetWidth;
            var childDivWidth = document.getElementsByClassName('top_ipd_list')[0].offsetWidth;
            var cardCount = document.getElementsByClassName('top_ipd_list')[0].childElementCount;
            var cardWidth = Math.ceil(childDivWidth / cardCount);

            var leftScroll = document.getElementById("top_ipd").scrollLeft;
            var scrollVal = Math.floor(outerDivWidth / cardWidth) * cardWidth;
            var cardEnd = cardCount * cardWidth;

            if (type == 'right') {
                elmnt.scroll({ left: leftScroll + scrollVal, behavior: 'smooth' });
                if (cardEnd <= leftScroll + scrollVal + outerDivWidth) {
                    document.getElementById('leftArrow_ipd').classList.add("d-none");
                }
                document.getElementById('RightArrow_ipd').classList.remove("d-none");
            } else {
                elmnt.scroll({ left: leftScroll - scrollVal, behavior: 'smooth' });
                if (leftScroll - scrollVal <= 0) {
                    document.getElementById('RightArrow_ipd').classList.add("d-none");
                }
                document.getElementById('leftArrow_ipd').classList.remove("d-none");
            }
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'pakg-slider-container mt-10 mb-10' },
                _react2.default.createElement(
                    'div',
                    { className: 'pkgSliderHeading' },
                    _react2.default.createElement(
                        'h5',
                        null,
                        'Health Package Categories'
                    ),
                    _react2.default.createElement(
                        'span',
                        null,
                        'View All'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'pkgSliderContainer', id: 'top_ipd' },
                    _react2.default.createElement(
                        'div',
                        { className: 'pkgCardsList d-inline-flex sub-wd-cards top_ipd_list' },
                        _react2.default.createElement(
                            'a',
                            { className: 'pkgcustCards health-pkg-card-width' },
                            _react2.default.createElement(
                                'div',
                                { className: 'pkgcardImgCont' },
                                _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/ipd_procedure/images/delivery-01.png' })
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'pkgtstName prcd-height' },
                                'Full Body Check Up'
                            )
                        ),
                        _react2.default.createElement(
                            'a',
                            { className: 'pkgcustCards health-pkg-card-width' },
                            _react2.default.createElement(
                                'div',
                                { className: 'pkgcardImgCont' },
                                _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/ipd_procedure/images/delivery-01.png' })
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'pkgtstName prcd-height' },
                                'Full Body Check Up'
                            )
                        ),
                        _react2.default.createElement(
                            'a',
                            { className: 'pkgcustCards health-pkg-card-width' },
                            _react2.default.createElement(
                                'div',
                                { className: 'pkgcardImgCont' },
                                _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/ipd_procedure/images/delivery-01.png' })
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'pkgtstName prcd-height' },
                                'Full Body Check Up'
                            )
                        ),
                        _react2.default.createElement(
                            'a',
                            { className: 'pkgcustCards health-pkg-card-width' },
                            _react2.default.createElement(
                                'div',
                                { className: 'pkgcardImgCont' },
                                _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/ipd_procedure/images/delivery-01.png' })
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'pkgtstName prcd-height' },
                                'Full Body Check Up'
                            )
                        ),
                        _react2.default.createElement(
                            'a',
                            { className: 'pkgcustCards health-pkg-card-width' },
                            _react2.default.createElement(
                                'div',
                                { className: 'pkgcardImgCont' },
                                _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/ipd_procedure/images/delivery-01.png' })
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'pkgtstName prcd-height' },
                                'Full Body Check Up'
                            )
                        ),
                        _react2.default.createElement(
                            'a',
                            { className: 'pkgcustCards health-pkg-card-width' },
                            _react2.default.createElement(
                                'div',
                                { className: 'pkgcardImgCont' },
                                _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/ipd_procedure/images/delivery-01.png' })
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'pkgtstName prcd-height' },
                                'Full Body Check Up'
                            )
                        ),
                        _react2.default.createElement(
                            'a',
                            { className: 'pkgcustCards health-pkg-card-width' },
                            _react2.default.createElement(
                                'div',
                                { className: 'pkgcardImgCont' },
                                _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/ipd_procedure/images/delivery-01.png' })
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'pkgtstName prcd-height' },
                                'Full Body Check Up'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'pkglftRhtbtncont' },
                    _react2.default.createElement(
                        'div',
                        { className: 'pkg-btnlft d-none', id: 'RightArrow_ipd', onClick: this.scroll.bind(this, 'left') },
                        _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'pkg-btnrgt', id: 'leftArrow_ipd', onClick: this.scroll.bind(this, 'right') },
                        _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                    )
                )
            );
        }
    }]);

    return TopProcedureWidgets;
}(_react2.default.Component);

exports.default = TopProcedureWidgets;

/***/ }),

/***/ "./dev/js/components/commons/Home/GoldHomePageBanner.js":
/*!**************************************************************!*\
  !*** ./dev/js/components/commons/Home/GoldHomePageBanner.js ***!
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoldHomePageView = function (_React$PureComponent) {
    _inherits(GoldHomePageView, _React$PureComponent);

    function GoldHomePageView() {
        _classCallCheck(this, GoldHomePageView);

        return _possibleConstructorReturn(this, (GoldHomePageView.__proto__ || Object.getPrototypeOf(GoldHomePageView)).apply(this, arguments));
    }

    _createClass(GoldHomePageView, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "div",
                { className: "gold-banner-container d-lg-none d-none mb-10" },
                _react2.default.createElement(
                    "div",
                    { className: "gold-banner-card" },
                    _react2.default.createElement(
                        "div",
                        { className: "gld-home-icon" },
                        _react2.default.createElement(
                            "p",
                            null,
                            "Docprime ",
                            _react2.default.createElement("img", { className: "img-fluid", src: "/assets" + '/img/gold-lg.png' })
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "gld-home-content" },
                        _react2.default.createElement(
                            "h3",
                            null,
                            "The Healthcare Membership ",
                            _react2.default.createElement("br", null),
                            "You Can\u2019t Do Without"
                        ),
                        _react2.default.createElement(
                            "p",
                            null,
                            "Save More Than \u20B96,000/yr With Special Prices on OPD Consultations, Lab Tests and Medicines"
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "gld-home-ico" },
                        _react2.default.createElement(
                            "div",
                            { className: "gld-ico-card" },
                            _react2.default.createElement("img", { className: "img-fluid", src: "/assets" + '/img/dicicon1.svg' }),
                            _react2.default.createElement(
                                "p",
                                null,
                                "Exclusive Prices",
                                _react2.default.createElement("br", null),
                                "On Doctors & Labs"
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "gld-ico-card" },
                            _react2.default.createElement("img", { className: "img-fluid", src: "/assets" + '/img/dicicon2.svg' }),
                            _react2.default.createElement(
                                "p",
                                null,
                                "Flat 23% OFF ",
                                _react2.default.createElement("br", null),
                                "on Medicines"
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "gld-ico-card" },
                            _react2.default.createElement("img", { className: "img-fluid", src: "/assets" + '/img/dicicon3.svg' }),
                            _react2.default.createElement(
                                "p",
                                null,
                                "Unlimited Tele",
                                _react2.default.createElement("br", null),
                                "Consultations"
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "gold-home-price" },
                        _react2.default.createElement(
                            "p",
                            null,
                            "Starting at just ",
                            _react2.default.createElement(
                                "strong",
                                null,
                                "\u20B9199"
                            ),
                            "/yr "
                        ),
                        _react2.default.createElement(
                            "button",
                            { onClick: this.props.clickedGoldBanner },
                            "View Plans"
                        )
                    )
                )
            );
        }
    }]);

    return GoldHomePageView;
}(_react2.default.PureComponent);

exports.default = GoldHomePageView;

/***/ }),

/***/ "./dev/js/components/commons/Home/HomeNewView.js":
/*!*******************************************************!*\
  !*** ./dev/js/components/commons/Home/HomeNewView.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _DesktopProfileHeader = __webpack_require__(/*! ../DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _footer = __webpack_require__(/*! ./footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _ChatPanel = __webpack_require__(/*! ../ChatPanel */ "./dev/js/components/commons/ChatPanel/index.js");

var _ChatPanel2 = _interopRequireDefault(_ChatPanel);

var _HelmetTags = __webpack_require__(/*! ../HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _config = __webpack_require__(/*! ../../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _Accordian = __webpack_require__(/*! ./Accordian */ "./dev/js/components/commons/Home/Accordian.js");

var _Accordian2 = _interopRequireDefault(_Accordian);

var _FixedMobileFooter = __webpack_require__(/*! ./FixedMobileFooter */ "./dev/js/components/commons/Home/FixedMobileFooter.js");

var _FixedMobileFooter2 = _interopRequireDefault(_FixedMobileFooter);

var _bannerCarousel = __webpack_require__(/*! ./bannerCarousel */ "./dev/js/components/commons/Home/bannerCarousel.js");

var _bannerCarousel2 = _interopRequireDefault(_bannerCarousel);

var _upComingAppointment = __webpack_require__(/*! ./upComingAppointment.js */ "./dev/js/components/commons/Home/upComingAppointment.js");

var _upComingAppointment2 = _interopRequireDefault(_upComingAppointment);

var _packageCompareStrip = __webpack_require__(/*! ../../diagnosis/searchPackages/packageCompare/packageCompareStrip.js */ "./dev/js/components/diagnosis/searchPackages/packageCompare/packageCompareStrip.js");

var _packageCompareStrip2 = _interopRequireDefault(_packageCompareStrip);

var _HomePagePackageWidget = __webpack_require__(/*! ./HomePagePackageWidget.js */ "./dev/js/components/commons/Home/HomePagePackageWidget.js");

var _HomePagePackageWidget2 = _interopRequireDefault(_HomePagePackageWidget);

var _criteo = __webpack_require__(/*! ../../../helpers/criteo.js */ "./dev/js/helpers/criteo.js");

var _criteo2 = _interopRequireDefault(_criteo);

var _HomePageTopHospitals = __webpack_require__(/*! ./HomePageTopHospitals.js */ "./dev/js/components/commons/Home/HomePageTopHospitals.js");

var _HomePageTopHospitals2 = _interopRequireDefault(_HomePageTopHospitals);

var _HomePageProcedureWidgets = __webpack_require__(/*! ./HomePageProcedureWidgets.js */ "./dev/js/components/commons/Home/HomePageProcedureWidgets.js");

var _HomePageProcedureWidgets2 = _interopRequireDefault(_HomePageProcedureWidgets);

var _HomePagePackageCategory = __webpack_require__(/*! ./HomePagePackageCategory.js */ "./dev/js/components/commons/Home/HomePagePackageCategory.js");

var _HomePagePackageCategory2 = _interopRequireDefault(_HomePagePackageCategory);

var _HomePageChatWidget = __webpack_require__(/*! ./HomePageChatWidget */ "./dev/js/components/commons/Home/HomePageChatWidget.js");

var _HomePageChatWidget2 = _interopRequireDefault(_HomePageChatWidget);

var _DemoWidget = __webpack_require__(/*! ./DemoWidget.js */ "./dev/js/components/commons/Home/DemoWidget.js");

var _DemoWidget2 = _interopRequireDefault(_DemoWidget);

var _BookingConfirmationPopup = __webpack_require__(/*! ../../diagnosis/bookingSummary/BookingConfirmationPopup */ "./dev/js/components/diagnosis/bookingSummary/BookingConfirmationPopup.js");

var _BookingConfirmationPopup2 = _interopRequireDefault(_BookingConfirmationPopup);

var _Loader = __webpack_require__(/*! ../Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _vipClubPopup = __webpack_require__(/*! ../../vipClub/vipClubPopup.js */ "./dev/js/components/vipClub/vipClubPopup.js");

var _vipClubPopup2 = _interopRequireDefault(_vipClubPopup);

var _PrescriptionUpload = __webpack_require__(/*! ../../../containers/commons/PrescriptionUpload.js */ "./dev/js/containers/commons/PrescriptionUpload.js");

var _PrescriptionUpload2 = _interopRequireDefault(_PrescriptionUpload);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _HomePageWidget = __webpack_require__(/*! ../HomeNewView/HomePageWidget.js */ "./dev/js/components/commons/HomeNewView/HomePageWidget.js");

var _HomePageWidget2 = _interopRequireDefault(_HomePageWidget);

var _CorporateLeadPopup = __webpack_require__(/*! ./CorporateLeadPopup.js */ "./dev/js/components/commons/Home/CorporateLeadPopup.js");

var _CorporateLeadPopup2 = _interopRequireDefault(_CorporateLeadPopup);

var _StaticHomePageContent = __webpack_require__(/*! ../HomeNewView/StaticHomePageContent.js */ "./dev/js/components/commons/HomeNewView/StaticHomePageContent.js");

var _StaticHomePageContent2 = _interopRequireDefault(_StaticHomePageContent);

var _GoldHomePageBanner = __webpack_require__(/*! ./GoldHomePageBanner.js */ "./dev/js/components/commons/Home/GoldHomePageBanner.js");

var _GoldHomePageBanner2 = _interopRequireDefault(_GoldHomePageBanner);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var MainView = function (_React$Component) {
    _inherits(MainView, _React$Component);

    function MainView(props) {
        _classCallCheck(this, MainView);

        // let footerData = null
        // if (this.props.initialServerData) {
        //     footerData = this.props.initialServerData.footerData
        // }
        var _this = _possibleConstructorReturn(this, (MainView.__proto__ || Object.getPrototypeOf(MainView)).call(this, props));

        _this.animateValue = function (obj) {
            var start = 25000;
            var end = null;
            var duration = 3000;
            if (obj) {
                // save starting text for later (and as a fallback text if JS not running and/or google)
                var textStarting = obj.innerHTML;

                // remove non-numeric from starting text if not specified
                //end = end || parseInt(textStarting.replace(/\D/g, ""));
                end = end || parseFloat(textStarting);

                var range = end - start;

                // no timer shorter than 50ms (not really visible any way)
                var minTimer = 100;

                // calc step time to show all interediate values
                var stepTime = Math.abs(Math.floor(duration / range));

                // never go below minTimer
                stepTime = Math.max(stepTime, minTimer);

                // get current time and calculate desired end time
                var startTime = new Date().getTime();
                var endTime = startTime + duration;
                var timer = void 0;
                //const posY = window.pageYOffset;
                var run = function run() {
                    var now = new Date().getTime();
                    var remaining = Math.max((endTime - now) / duration, 0);
                    var value = Math.round(end - remaining * range);
                    // replace numeric digits only in the original string
                    obj.innerHTML = textStarting.replace(/([0-9]+)/g, value);
                    if (value == end) {
                        clearInterval(timer);
                    }
                };
                window.addEventListener('scroll', function () {
                    if (window.pageYOffset >= 1000) {
                        timer = setInterval(run, stepTime);
                        run();
                    }
                });
            }
        };

        _this.searchLab = function (test) {
            var data = void 0;
            if (test.topPackages) {
                test.type = 'package';
                _this.props.setPackageId(test.id, true);
                data = {
                    'Category': 'ConsumerApp', 'Action': 'SelectedHealthPackage', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'selected-health-package', 'selected': test.name || '', 'selectedId': test.id || ''
                };
            } else {
                test.type = 'test';
                _this.props.toggleDiagnosisCriteria('test', test, true);
                data = {
                    'Category': 'ConsumerApp', 'Action': 'SelectedBookTest', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'selected-book-test', 'selected': test.name || '', 'selectedId': test.id || ''
                };
            }

            _gtm2.default.sendEvent({ data: data });

            if (test.topPackages) {
                setTimeout(function () {
                    _this.props.history.push('/searchpackages');
                }, 100);
            } else {
                setTimeout(function () {
                    _this.props.history.push('/lab/searchresults');
                }, 100);
            }
        };

        _this.searchDoctor = function (speciality) {
            if (speciality.url) {
                _this.props.history.push('/' + speciality.url);
            } else {
                speciality.type = 'speciality';
                _this.props.toggleOPDCriteria('speciality', speciality, true);
                setTimeout(function () {
                    _this.props.history.push('/opd/searchresults');
                }, 100);
            }
            var data = {
                'Category': 'ConsumerApp', 'Action': 'SelectedDoctorSpecializations', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'selected-doctor-specializations', 'selected': speciality.name || '', 'selectedId': speciality.id || ''
            };
            _gtm2.default.sendEvent({ data: data });
        };

        _this.goToSearch = function (data) {
            if (data.type) {
                _this.props.selectSearchType(data.type);
            }
            _this.props.history.push(data.where);
        };

        _this.searchHospitals = function (data) {

            var gtmData = {};
            if (data.topHospitals) {
                gtmData = {
                    'Category': 'ConsumerApp', 'Action': 'HomeWidgetHospitalClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'home-widget-hospital-clicked', 'selected': '', 'selectedId': data.id || ''
                };
            } else {
                gtmData = {
                    'Category': 'ConsumerApp', 'Action': 'HomeWidgetNearbyHospitalClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'home-widget-nearby-hospital-clicked', 'selected': '', 'selectedId': data.id || ''
                };
            }

            _gtm2.default.sendEvent({ data: gtmData });

            var redirectUrl = '';

            if (data.url) {
                redirectUrl = '/' + data.url;
            } else {
                redirectUrl = '/ipd/hospital/' + data.id;
            }

            if (data.is_ipd_hospital) {
                redirectUrl += '?showPopup=true';
            }
            _this.props.history.push(redirectUrl);
        };

        _this.sbiBannerClicked = function () {
            var data = {
                'Category': 'ConsumerApp', 'Action': 'SBIGOLDBANNER', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'sbi-gold-banner'
            };
            _gtm2.default.sendEvent({ data: data });
            _this.props.history.push('/vip-gold-details?is_gold=true&source=mobile-sbi-gold-clicked&lead_source=Docprime');
        };

        _this.nearbyHospitalViewAllClicked = function () {
            var gtmData = {
                'Category': 'ConsumerApp', 'Action': 'HomeWidgetHospitalViewAllClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'home-widget-hospital-view-all-clicked'
            };
            _gtm2.default.sendEvent({ data: gtmData });
            _this.props.mergeIpdCriteria({
                commonSelectedCriterias: [],
                nextSelectedCriterias: []
            });
            _this.props.history.push('/ipd/searchHospitals');
        };

        _this.afterUserLogin = function () {
            var is_user_insurance_active = false;
            var user_insurance_status = null;
            if (_this.props.defaultProfile && _this.props.profiles && _this.props.profiles[_this.props.defaultProfile]) {
                user_insurance_status = _this.props.profiles[_this.props.defaultProfile].insurance_status;
            }
            is_user_insurance_active = user_insurance_status == 1 || user_insurance_status == 5 || user_insurance_status == 4 || user_insurance_status == 7;
            if (is_user_insurance_active) {
                setTimeout(function () {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "For insured customers, prescription upload is required at the time of booking" });
                }, 1000);
                _this.setState({ is_user_insurance_active: true });
            }
        };

        _this.getCorporateLead = function () {
            var gtmData = {
                'Category': 'ConsumerApp', 'Action': 'CorporateHomePageClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'corporate-home-page-clicked'
            };
            _gtm2.default.sendEvent({ data: gtmData });
            _this.setState({ openCorporateBlock: true });
        };

        _this.cancelOverlay = function () {
            _this.setState({ openCorporateBlock: false });
        };

        _this.pushLeads = function (data) {
            var parsed = queryString.parse(window.location.search);
            var params = _extends({}, data);
            if (parsed) {
                params['source'] = {
                    utm_source: parsed.utm_source || '',
                    utm_term: parsed.utm_term || '',
                    utm_medium: parsed.utm_medium || '',
                    utm_campaign: parsed.utm_campaign || ''
                };
            }
            _this.props.NonIpdBookingLead(params).then(function () {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Response Submitted Successfully" });
                _this.cancelOverlay();
            });
        };

        _this.clickedGoldBanner = function () {
            var data = {
                'Category': 'ConsumerApp', 'Action': 'MobileHomePageGoldBannerClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'mobile-homepage-gold-banner-clicked'
            };
            _gtm2.default.sendEvent({ data: data });
            _this.props.history.push('/vip-gold-details?is_gold=true&source=mobile-home-page-gold-banner&lead_source=Docprime');
        };

        _this.state = {
            // specialityFooterData: footerData,
            showPopup: false,
            clickedOn: '',
            show_popup: false,
            is_user_insurance_active: false,
            openCorporateBlock: false
        };
        return _this;
    }

    _createClass(MainView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (window) {
                window.scrollTo(0, 0);
            }

            var user_insurance_status = null;
            if (this.props.defaultProfile && this.props.profiles && this.props.profiles[this.props.defaultProfile]) {
                user_insurance_status = this.props.profiles[this.props.defaultProfile].insurance_status;
            }
            user_insurance_status = user_insurance_status == 1 || user_insurance_status == 5 || user_insurance_status == 4 || user_insurance_status == 7;
            this.setState({ is_user_insurance_active: user_insurance_status });

            // this.props.getSpecialityFooterData((cb) => {
            //     this.setState({ specialityFooterData: cb });
            // });
            if (!this.props.static_footer_data) {
                this.props.getSpecialityFooterData();
            }

            var selectedLocation = '';
            var lat = 28.644800;
            var long = 77.216721;
            if (this.props.selectedLocation) {
                selectedLocation = this.props.selectedLocation;
                lat = selectedLocation.geometry.location.lat;
                long = selectedLocation.geometry.location.lng;
                if (typeof lat === 'function') lat = lat();
                if (typeof long === 'function') long = long();
            }

            this.props.getOfferList(lat, long);

            var data = { 'event': "viewHome"

                //background circle animation
            };if (window) {
                var mView = document.getElementById('mainView');
                window.addEventListener('scroll', function () {

                    //background circle animatiom
                    var positionY = window.pageYOffset / 2;
                    mView.style.backgroundPosition = '0 -' + positionY + 'px';
                });
            }
            //background circle animation

            //count animation

            var cVal1 = document.getElementById('countNum');
            var cVal2 = document.getElementById('countNum2');
            this.animateValue(cVal1);
            this.animateValue(cVal2);
            //count animation
            _criteo2.default.sendData(data);
        }
    }, {
        key: 'navigateTo',
        value: function navigateTo(where, type, data, e) {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            if (type) {
                this.props.selectSearchType(type);
            }
            if (where == '/chat') {
                this.props.history.push(where, data);
            } else {
                this.props.history.push(where);
            }
        }
    }, {
        key: 'getAge',
        value: function getAge(birthday) {
            birthday = new Date(birthday);
            var ageDifMs = Date.now() - birthday.getTime();
            var ageDate = new Date(ageDifMs); // miliseconds from epoch
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        }
    }, {
        key: 'gotToSignup',
        value: function gotToSignup() {
            var data = {
                'Category': 'ConsumerApp', 'Action': 'HomepageBannerSignupClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'homepage-banner-signup-clicked'
            };
            _gtm2.default.sendEvent({ data: data });
            this.props.history.push('/user?ref=home');
        }
    }, {
        key: 'gotToDoctorSignup',
        value: function gotToDoctorSignup(isLab) {
            var data = void 0;
            if (isLab) {
                data = {
                    'Category': 'ConsumerApp', 'Action': 'RunLabBannerClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'run-lab-banner-clicked'
                };
            } else {
                data = {
                    'Category': 'ConsumerApp', 'Action': 'RunClinicBannerClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'run-clinic-banner-clicked'
                };
            }
            _gtm2.default.sendEvent({ data: data });
            this.props.history.push('/doctorsignup');
        }
    }, {
        key: 'getTopList',
        value: function getTopList(list) {
            var topList = [];
            if (list.length > 5) {
                topList = list.slice(0, 5);
            } else {
                topList = list;
            }
            return topList;
        }
    }, {
        key: 'orderMedClick',
        value: function orderMedClick(source) {
            var _this2 = this;

            this.setState({ showPopup: true, clickedOn: source }, function () {
                setTimeout(function () {
                    return _this2.continueClick();
                }, 1000);
            });
            if (source === 'newOrder') {
                var data = {
                    'Category': 'ConsumerApp', 'Action': 'DesktopNewOrderClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'desktop-new-order-click'
                };
                _gtm2.default.sendEvent({ data: data });
            } else if (source === 'prevOrder') {
                var _data = {
                    'Category': 'ConsumerApp', 'Action': 'DesktopPreviousOrderClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'desktop-previous-order-click'
                };
                _gtm2.default.sendEvent({ data: _data });
            }
        }
    }, {
        key: 'continueClick',
        value: function continueClick() {
            var _this3 = this;

            if ((typeof navigator === 'undefined' ? 'undefined' : _typeof(navigator)) === 'object') {
                if (/mobile/i.test(navigator.userAgent)) {} else {
                    if (this.state.clickedOn === 'newOrder') {
                        window.open(_config2.default.PHARMEASY_NEW_ORDER_IFRAME_URL, '_blank');
                    } else {
                        window.open(_config2.default.PHARMEASY_PREV_ORDER_IFRAME_URL, '_blank');
                    }
                }
            }
            setTimeout(function () {
                _this3.setState({
                    showPopup: false
                });
            }, 1000);
        }
    }, {
        key: 'hidePopup',
        value: function hidePopup() {
            this.setState({ showPopup: false });
        }
    }, {
        key: 'closeLeadPopup',
        value: function closeLeadPopup() {
            this.setState({ show_popup: false });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this,
                _React$createElement,
                _React$createElement2;

            var parsed = queryString.parse(this.props.location.search);
            var topSpecializations = [];
            if (this.props.specializations && this.props.specializations.length) {
                topSpecializations = this.props.specializations; //.slice(0, 9)//this.getTopList(this.props.specializations)
            }

            var topTests = [];
            if (this.props.common_tests && this.props.common_tests.length) {
                topTests = this.props.common_tests; //.slice(0, 9)//this.getTopList(this.props.common_tests)
            }

            var topPackages = [];
            if (this.props.common_package && this.props.common_package.length) {
                topPackages = this.props.common_package; //this.getTopList(this.props.common_package)
            }

            var articles = this.props.articles || [];

            var isSBI = this.props.mergeState && document && (typeof document === 'undefined' ? 'undefined' : _typeof(document)) == 'object' && document.location && document.location.host && document.location.host.includes('sbi');
            var showPackageStrip = this.props.compare_packages && this.props.compare_packages.length > 0 && !this.props.isPackage;

            var defaultUserProfile = null;
            if (this.props.defaultProfile && this.props.profiles && this.props.profiles[this.props.defaultProfile]) {
                defaultUserProfile = this.props.profiles[this.props.defaultProfile];
            }

            var showGoldBanner = false;

            if (this.props.user_detail_fetched) {

                if (defaultUserProfile && Object.keys(defaultUserProfile).length) {

                    showGoldBanner = !(this.props.is_any_user_buy_gold || defaultUserProfile.insurance_status == 1 || defaultUserProfile.insurance_status == 5 || defaultUserProfile.insurance_status == 4 || defaultUserProfile.insurance_status == 7);
                } else {
                    showGoldBanner = true;
                }
            }

            if (!_storage2.default.checkAuth()) {
                showGoldBanner = true;
            }

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'container-fluid p-0' },
                    _react2.default.createElement(_DesktopProfileHeader2.default, { homePage: true, showSearch: true, showPackageStrip: showPackageStrip, new_fixed_header: 1 }),
                    this.state.openCorporateBlock ? _react2.default.createElement(_CorporateLeadPopup2.default, { cancelOverlay: this.cancelOverlay, pushLeads: this.pushLeads }) : '',
                    _react2.default.createElement(
                        'div',
                        { className: 'new-main-view', id: 'mainView' },
                        showGoldBanner ? _react2.default.createElement(
                            'section',
                            { className: 'card-block-row banner-slider-row mbl-banner' },
                            !isSBI && this.props.offerList && this.props.offerList.filter(function (x) {
                                return x.slider_location === 'home_page';
                            }).length ? _react2.default.createElement(_bannerCarousel2.default, _extends({}, this.props, { sliderLocation: 'home_page' })) : ''
                        ) : '',
                        _react2.default.createElement(
                            'section',
                            { className: 'card-block-row banner-slider-row d-banner' },
                            !isSBI && this.props.offerList && this.props.offerList.filter(function (x) {
                                return x.slider_location === 'home_page';
                            }).length ? _react2.default.createElement(_bannerCarousel2.default, _extends({}, this.props, { sliderLocation: 'home_page' })) : ''
                        ),
                        _react2.default.createElement(_upComingAppointment2.default, this.props),
                        _react2.default.createElement(
                            'section',
                            { className: 'd-none full-banner-section' },
                            _react2.default.createElement('img', { style: { width: '100%' }, className: 'img-fluid', src: 'https://cdn.docprime.com/media/web/custom_images/Gold_home-min_1.png', onClick: function onClick(e) {
                                    var data = {
                                        'Category': 'ConsumerApp', 'Action': 'MobileLeftMenuGoldClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'mobile-leftmenu-gold-clicked'
                                    };
                                    _gtm2.default.sendEvent({ data: data });
                                    _this4.props.history.push('/vip-gold-details?is_gold=true&source=mobile-leftmenu-gold-clicked&lead_source=Docprime');
                                } }),
                            _react2.default.createElement(
                                'a',
                                { href: '', onClick: function onClick(e) {
                                        return e.preventDefault();
                                    } },
                                _react2.default.createElement(
                                    'span',
                                    { onClick: this.getCorporateLead },
                                    'Special plans available for Corporates',
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'down-icon-yellow' },
                                        '>'
                                    )
                                )
                            )
                        ),
                        showGoldBanner ? '' : _react2.default.createElement(
                            'section',
                            { className: 'card-block-row banner-slider-row mbl-banner' },
                            !isSBI && this.props.offerList && this.props.offerList.filter(function (x) {
                                return x.slider_location === 'home_page';
                            }).length ? _react2.default.createElement(_bannerCarousel2.default, _extends({}, this.props, { sliderLocation: 'home_page' })) : ''
                        ),
                        showGoldBanner ? _react2.default.createElement(_GoldHomePageBanner2.default, { clickedGoldBanner: this.clickedGoldBanner }) : '',
                        this.props.top_hospitals && this.props.top_hospitals.length ? _react2.default.createElement(_HomePageWidget2.default, {
                            heading: 'Top Hospitals',
                            list: this.props.top_hospitals,
                            topHospitals: true,
                            dataType: 'home_top_hsptl',
                            historyObj: this.props.history,
                            searchFunc: this.searchHospitals
                        }) : '',
                        this.props.nearbyHospitals && this.props.nearbyHospitals.hospitals && this.props.nearbyHospitals.hospitals.length ? _react2.default.createElement(_HomePageWidget2.default, {
                            heading: 'Hospitals Near you',
                            list: this.props.nearbyHospitals.hospitals,
                            dataType: 'home_nearby-hsptl',
                            historyObj: this.props.history,
                            searchFunc: this.searchHospitals
                        }) : '',
                        topSpecializations && topSpecializations.length ? _react2.default.createElement(_HomePageWidget2.default, (_React$createElement = {
                            heading: 'Book Doctor Appointments',
                            rightText: 'Search more specializations',
                            rightButtonClicked: this.goToSearch,
                            searchFunc: this.searchDoctor,
                            list: topSpecializations,
                            dataType: 'home_top_specz',
                            discount: '50%',
                            historyObj: this.props.history,
                            type: 'opd',
                            navTo: '/search?from=home',
                            count: 10,
                            searchType: 'specializations'
                        }, _defineProperty(_React$createElement, 'historyObj', this.props.history), _defineProperty(_React$createElement, 'locationObj', this.props.location), _defineProperty(_React$createElement, 'selectSearchType', this.props.selectSearchType), _React$createElement)) : '',
                        topPackages && topPackages.length ? _react2.default.createElement(_HomePageWidget2.default, {
                            heading: 'Popular Health Packages',
                            rightText: 'View all',
                            rightButtonClicked: this.goToSearch,
                            topPackages: true,
                            list: topPackages,
                            searchFunc: this.searchLab,
                            dataType: 'home_top_pckg',
                            historyObj: this.props.history,
                            type: 'package',
                            navTo: '/searchpackages'
                            //count={8} 
                            // searchType="packages"
                            // historyObj={this.props.history}
                            // locationObj={this.props.location}
                            // selectSearchType={this.props.selectSearchType}
                        }) : '',
                        topTests && topTests.length ? _react2.default.createElement(_HomePageWidget2.default, (_React$createElement2 = {
                            heading: 'Book Lab Tests',
                            rightText: 'Search more test',
                            rightButtonClicked: this.goToSearch,
                            list: topTests,
                            searchFunc: this.searchLab,
                            dataType: 'home_top_tests',
                            discount: '50%',
                            historyObj: this.props.history,
                            type: 'lab',
                            navTo: '/search?from=home',
                            count: 10,
                            is_user_insurance_active: this.state.is_user_insurance_active
                        }, _defineProperty(_React$createElement2, 'historyObj', this.props.history), _defineProperty(_React$createElement2, 'locationObj', this.props.location), _defineProperty(_React$createElement2, 'afterUserLogin', this.afterUserLogin), _defineProperty(_React$createElement2, 'profiles', this.props.profiles), _defineProperty(_React$createElement2, 'searchType', 'tests'), _defineProperty(_React$createElement2, 'selectSearchType', this.props.selectSearchType), _React$createElement2)) : '',
                        this.state.is_user_insurance_active ? '' : _react2.default.createElement(_PrescriptionUpload2.default, { historyObj: this.props.history, is_home_page: true, locationObj: this.props.location, profiles: this.props.profiles, afterUserLogin: this.afterUserLogin }),
                        _react2.default.createElement(_StaticHomePageContent2.default, null),
                        _react2.default.createElement(_Accordian2.default, null)
                    ),
                    _react2.default.createElement(
                        'section',
                        { className: 'card-block-row detail-row' },
                        _react2.default.createElement(
                            'h6',
                            null,
                            'Download the App Now'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'row m-0' },
                            _react2.default.createElement(
                                'div',
                                { className: 'col-12 col-sm-6 col-lg-5 other-details p-0' },
                                _react2.default.createElement(
                                    'ul',
                                    null,
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'Online Consultations'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'Book Doctor Appointments the Prime Way'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'Doctors: For you, Near you'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'Book Lab Tests and Free Health Check-Ups'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'Store Medical Records'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'download-links d-flex align-item-center' },
                                    _react2.default.createElement(
                                        'a',
                                        { href: 'https://docprimeapp.page.link/HomepageAppInstallAndroid', target: '_blank' },
                                        _react2.default.createElement('img', { width: '180', style: { marginLeft: "-12px" }, src: "/assets" + "/img/google-play.png", alt: 'Android' })
                                    ),
                                    _react2.default.createElement(
                                        'a',
                                        { href: 'https://docprimeapp.page.link/HomepageAppInstalliOS', target: '_blank' },
                                        _react2.default.createElement('img', { width: '160', src: "/assets" + "/img/ios.png", alt: 'ios' })
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-12 col-sm-6 col-lg-7 demo-mbl-screen-col' },
                                _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + "/img/demo-mbl.png", alt: 'ios' })
                            )
                        )
                    ),
                    _react2.default.createElement(_FixedMobileFooter2.default, this.props),
                    _react2.default.createElement(_footer2.default, { specialityFooterData: this.props.static_footer_data })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'd-none new-chat-box' },
                    _react2.default.createElement('input', { type: 'checkbox' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'chatbox-main mb-3' },
                        _react2.default.createElement(_ChatPanel2.default, { key: 'chat', homePage: true, offerList: this.props.offerList })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'chat-box-circle d-flex justify-content-center align-items-center text-center flex-column' },
                        _react2.default.createElement('img', { height: '17', className: 'img-fluid', src: "/assets" + "/img/chat.svg", alt: 'chat' }),
                        _react2.default.createElement(
                            'h6',
                            null,
                            'Doctor ',
                            _react2.default.createElement('br', null),
                            'Consultation'
                        ),
                        _react2.default.createElement(
                            'h3',
                            { className: 'align-items-center justify-content-center' },
                            _react2.default.createElement('img', { src: "/assets" + "/img/minimize.svg", alt: 'cancel' })
                        )
                    )
                )
            );
        }
    }]);

    return MainView;
}(_react2.default.Component);

exports.default = MainView;

/***/ }),

/***/ "./dev/js/components/commons/Home/HomePageChatWidget.js":
/*!**************************************************************!*\
  !*** ./dev/js/components/commons/Home/HomePageChatWidget.js ***!
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

var _gtm = __webpack_require__(/*! ../../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopChatWidget = function (_React$Component) {
	_inherits(TopChatWidget, _React$Component);

	function TopChatWidget(props) {
		_classCallCheck(this, TopChatWidget);

		return _possibleConstructorReturn(this, (TopChatWidget.__proto__ || Object.getPrototypeOf(TopChatWidget)).call(this, props));
	}

	_createClass(TopChatWidget, [{
		key: 'widgetClick',
		value: function widgetClick() {
			var knowMore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;


			// this.props.history.push('/mobileviewchat')
			if (knowMore) {
				var gtmData = {
					'Category': 'ConsumerApp', 'Action': 'HomeVipWidgetClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'home-vip-widget-click'
				};
				_gtm2.default.sendEvent({ data: gtmData });
				this.props.clearVipSelectedPlan();
				this.props.history.push('/vip-gold-details?is_gold=true&source=mobile-chat-widget-gold-clicked&lead_source=Docprime');
			} else {
				var _gtmData = {
					'Category': 'ConsumerApp', 'Action': 'HomeChatWidgetClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'home-chat-widget-click'
				};
				_gtm2.default.sendEvent({ data: _gtmData });
				this.props.history.push('/mobileviewchat');
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				{ className: 'd-md-none home-duo-widget' },
				_react2.default.createElement(
					'div',
					{ className: ' widget mrb-10 cursor-pntr', style: { padding: '4px 6px', borderBottom: '5px solid #ffb601', alignItems: 'center', justifyContent: 'space-between' }, onClick: function onClick() {
							return _this2.widgetClick(true);
						} },
					_react2.default.createElement(
						'div',
						{ className: 'home-vip-cont' },
						_react2.default.createElement(
							'div',
							{ className: 'doc-avatar' },
							_react2.default.createElement('img', { style: { width: 30 }, src: "/assets" + '/img/gold-lg.png' })
						),
						_react2.default.createElement(
							'div',
							{ style: { flex: 1 } },
							_react2.default.createElement(
								'p',
								{ className: 'fw-700', style: { fontSize: 12 } },
								'Become a Docprime Gold member',
								_react2.default.createElement(
									'span',
									{ className: 'vip-tp-sub-txt' },
									'Save more with exclusive membership'
								)
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'chat-now-btn text-right' },
						_react2.default.createElement(
							'p',
							{ className: 'fw-500' },
							'Know More'
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: ' widget mrb-10 cursor-pntr', style: { padding: '4px 6px', borderBottom: '5px solid #4289fe', alignItems: 'center', justifyContent: 'space-between' }, onClick: function onClick() {
							return _this2.widgetClick();
						} },
					_react2.default.createElement(
						'div',
						{ className: 'home-vip-cont' },
						_react2.default.createElement(
							'div',
							{ className: 'doc-avatar' },
							_react2.default.createElement('img', { src: "/assets" + '/img/customer-icons/chat-icon.png' })
						),
						_react2.default.createElement(
							'div',
							{ style: { flex: 1 } },
							_react2.default.createElement(
								'p',
								{ className: 'fw-700', style: { fontSize: 12 } },
								'Online Doctor Consultation',
								_react2.default.createElement(
									'span',
									{ className: 'vip-tp-sub-txt' },
									'Talk to top doctors without any wait times'
								)
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'chat-now-btn text-right' },
						_react2.default.createElement(
							'p',
							{ className: 'fw-500' },
							'Consult Now'
						)
					)
				)
			);
		}
	}]);

	return TopChatWidget;
}(_react2.default.Component);

exports.default = TopChatWidget;

/***/ }),

/***/ "./dev/js/components/commons/Home/HomePagePackageCategory.js":
/*!*******************************************************************!*\
  !*** ./dev/js/components/commons/Home/HomePagePackageCategory.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePagePackageCategory = function (_React$PureComponent) {
    _inherits(HomePagePackageCategory, _React$PureComponent);

    function HomePagePackageCategory() {
        _classCallCheck(this, HomePagePackageCategory);

        return _possibleConstructorReturn(this, (HomePagePackageCategory.__proto__ || Object.getPrototypeOf(HomePagePackageCategory)).apply(this, arguments));
    }

    _createClass(HomePagePackageCategory, [{
        key: 'navigateTo',
        value: function navigateTo(PkgData, e) {
            var data = {
                'Category': 'ConsumerApp', 'Action': 'HomePageComparePackageClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'home-page-compare-package-clicked', 'package_id': PkgData
            };
            _gtm2.default.sendEvent({ data: data });

            var packages = {};
            var selectedPkgCompareIds = [];
            this.props.historyObj.push('/package/compare?category_ids=' + PkgData.id);
        }
    }, {
        key: 'scroll',
        value: function scroll(type) {
            var elmnt = document.getElementById("top_pkgCat");
            var outerDivWidth = elmnt.offsetWidth;
            var childDivWidth = document.getElementsByClassName('top_pkgCat')[0].offsetWidth;
            var cardCount = document.getElementsByClassName('top_pkgCat')[0].childElementCount;
            var cardWidth = Math.ceil(childDivWidth / cardCount);

            var leftScroll = document.getElementById("top_pkgCat").scrollLeft;
            var scrollVal = Math.floor(outerDivWidth / cardWidth) * cardWidth;
            var cardEnd = cardCount * cardWidth;

            if (type == 'right') {
                elmnt.scroll({ left: leftScroll + scrollVal, behavior: 'smooth' });
                if (cardEnd <= leftScroll + scrollVal + outerDivWidth) {
                    document.getElementById('leftArrow_pkgCat').classList.add("d-none");
                }
                document.getElementById('RightArrow_pkgCat').classList.remove("d-none");
            } else {
                elmnt.scroll({ left: leftScroll - scrollVal, behavior: 'smooth' });
                if (leftScroll - scrollVal <= 0) {
                    document.getElementById('RightArrow_pkgCat').classList.add("d-none");
                }
                document.getElementById('leftArrow_pkgCat').classList.remove("d-none");
            }
        }
    }, {
        key: 'ViewAll',
        value: function ViewAll() {
            var package_category_ids = [];
            this.props.top_data.map(function (data, i) {
                package_category_ids.push(data.id);
            });
            this.props.historyObj.push('/searchpackages?package_category_ids=' + package_category_ids);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'pakg-slider-container mt-10 mb-10' },
                _react2.default.createElement(
                    'div',
                    { className: 'pkgSliderHeading' },
                    _react2.default.createElement(
                        'h5',
                        null,
                        'Health Package Categories'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'pkgSliderContainer', id: 'top_pkgCat' },
                    _react2.default.createElement(
                        'div',
                        { className: 'pkgCardsList d-inline-flex sub-wd-cards top_pkgCat' },
                        this.props.top_data.map(function (data, i) {
                            return _react2.default.createElement(
                                'a',
                                { className: 'pkgcustCards health-pkg-card-width', key: i, onClick: _this2.navigateTo.bind(_this2, data) },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'pkgcardImgCont' },
                                    _react2.default.createElement('img', { className: 'img-fluid', src: data.svg_icon ? data.svg_icon : data.icon })
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'pkgtstName prcd-height' },
                                    data.name
                                )
                            );
                        })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'pkglftRhtbtncont' },
                    _react2.default.createElement(
                        'div',
                        { className: 'pkg-btnlft d-none', id: 'RightArrow_pkgCat', onClick: this.scroll.bind(this, 'left') },
                        _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'pkg-btnrgt', id: 'leftArrow_pkgCat', onClick: this.scroll.bind(this, 'right') },
                        _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                    )
                )
            );
        }
    }]);

    return HomePagePackageCategory;
}(_react2.default.PureComponent);

exports.default = HomePagePackageCategory;

/***/ }),

/***/ "./dev/js/components/commons/Home/index.js":
/*!*************************************************!*\
  !*** ./dev/js/components/commons/Home/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HomeNewView = __webpack_require__(/*! ./HomeNewView */ "./dev/js/components/commons/Home/HomeNewView.js");

var _HomeNewView2 = _interopRequireDefault(_HomeNewView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _HomeNewView2.default;

/***/ }),

/***/ "./dev/js/components/commons/HomeNewView/StaticHomePageContent.js":
/*!************************************************************************!*\
  !*** ./dev/js/components/commons/HomeNewView/StaticHomePageContent.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {

    function scroll(type) {
        var dataType = 'static_review_blck';
        var elmnt = document.getElementById(dataType);

        if (elmnt) {
            var outerDivWidth = elmnt.offsetWidth;
            var cardCount = elmnt.children && elmnt.children.length ? elmnt.children.length : 6;
            var childDivWidth = elmnt.scrollWidth ? elmnt.scrollWidth : 3000;
            var cardWidth = Math.ceil(childDivWidth / cardCount);

            var leftScroll = elmnt.scrollLeft;

            if (type == 'right') {
                elmnt.scroll({ left: leftScroll + outerDivWidth, behavior: 'smooth' });
                if (childDivWidth <= leftScroll + 2 * outerDivWidth) {
                    document.getElementById(dataType + '_leftArrow_hsptl').classList.add("d-none");
                }
                document.getElementById(dataType + '_RightArrow_hsptl').classList.remove("d-none");
            } else {
                elmnt.scroll({ left: leftScroll - outerDivWidth, behavior: 'smooth' });
                if (leftScroll - outerDivWidth <= 0) {
                    document.getElementById(dataType + '_RightArrow_hsptl').classList.add("d-none");
                }
                document.getElementById(dataType + '_leftArrow_hsptl').classList.remove("d-none");
            }
        }
    }

    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
            'section',
            { className: 'card-block-row' },
            _react2.default.createElement(
                'h6',
                { className: 'text-center fw-500 our-partner-heading-text' },
                'Our Partners'
            ),
            _react2.default.createElement(
                'div',
                { className: 'card-slider-container partner-section d-flex justify-content-center align-item-center flex-wrap' },
                _react2.default.createElement(
                    'div',
                    { className: 'partner-img-block' },
                    _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/web/custom_images/Image_1-12x.png', alt: 'Partners' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'partner-img-block' },
                    _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/web/custom_images/Image_2-12x.png', alt: 'Partners' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'partner-img-block' },
                    _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/web/custom_images/Image_72x.png', alt: 'Partners' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'partner-img-block' },
                    _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/web/custom_images/Image_92x.png', alt: 'Partners' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'partner-img-block' },
                    _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/web/custom_images/Image_102x.png', alt: 'Partners' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'partner-img-block' },
                    _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/web/custom_images/Image_182x.png', alt: 'Partners' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'partner-img-block' },
                    _react2.default.createElement('img', { className: 'img-fluid transform-sc-1', src: 'https://cdn.docprime.com/media/web/custom_images/Image_6-12x.png', alt: 'Partners' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'partner-img-block' },
                    _react2.default.createElement('img', { style: { transform: "scale(0.5)" }, className: 'img-fluid', src: 'https://cdn.docprime.com/media/web/custom_images/Image_4-12x.png', alt: 'Partners' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'partner-img-block' },
                    _react2.default.createElement('img', { style: { transform: "scale(0.5)" }, className: 'img-fluid', src: 'https://cdn.docprime.com/media/web/custom_images/Image_3-12x.png', alt: 'Partners' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'partner-img-block' },
                    _react2.default.createElement('img', { style: { transform: "scale(0.5)" }, className: 'img-fluid', src: 'https://cdn.docprime.com/media/web/custom_images/Image_52x.png', alt: 'Partners' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'partner-img-block' },
                    _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/web/custom_images/Image_112x.png', alt: 'Partners' })
                )
            )
        ),
        _react2.default.createElement(
            'section',
            { className: 'card-block-row' },
            _react2.default.createElement(
                'div',
                { className: 'card-slider-container d-flex justify-content-between milestone-section', id: 'counter-section' },
                _react2.default.createElement(
                    'div',
                    { className: 'consultation-col' },
                    _react2.default.createElement(
                        'h3',
                        { className: 'fw-500 text-center' },
                        _react2.default.createElement(
                            'span',
                            null,
                            '1 Lakh +'
                        ),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'span',
                            null,
                            'Doctor and Lab Appointments'
                        )
                    ),
                    _react2.default.createElement(
                        'h3',
                        { className: 'fw-500 text-center' },
                        _react2.default.createElement(
                            'span',
                            null,
                            '10 Lakh +'
                        ),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'span',
                            null,
                            'Online Consultation'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'consultation-col left-border' },
                    _react2.default.createElement(
                        'h4',
                        { className: 'fw-500 text-center' },
                        _react2.default.createElement(
                            'span',
                            { id: 'countNum' },
                            '30000 +'
                        ),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'span',
                            null,
                            'Doctor Network'
                        )
                    ),
                    _react2.default.createElement(
                        'h4',
                        { className: 'fw-500 text-center' },
                        _react2.default.createElement(
                            'span',
                            { id: 'countNum2' },
                            '5000 +'
                        ),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'span',
                            null,
                            'Lab Network'
                        )
                    ),
                    _react2.default.createElement(
                        'h4',
                        { className: 'fw-500 text-center' },
                        _react2.default.createElement(
                            'span',
                            null,
                            '2 Lakh +'
                        ),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'span',
                            null,
                            'Prescription Delivered'
                        )
                    )
                )
            )
        ),
        _react2.default.createElement(
            'section',
            { className: 'card-block-row ' },
            _react2.default.createElement(
                'h6',
                { className: 'text-center fw-500 customer-review-heading' },
                'Our Happy Customers '
            ),
            _react2.default.createElement(
                'div',
                { className: 'card-slider-container cust-review d-flex justify-content-between cust-feedback-col', id: 'static_review_blck' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-10 col-sm-4 text-center' },
                    _react2.default.createElement(
                        'div',
                        { className: 'cust-img-block d-flex justify-content-center align-items-center fw-500' },
                        _react2.default.createElement(
                            'span',
                            null,
                            'AG'
                        )
                    ),
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Ananda Ghoshal '
                    ),
                    _react2.default.createElement(
                        'ul',
                        { className: 'd-flex justify-content-center align-item-center mb-2' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        )
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'text-center mb-2' },
                        'Docprime has provided me the chance to consult the Doctor at the earliest. Their customer care is prompt and cooperative to sort out my problem as soon as possible. It is the easiest way to book Doctor apponintments'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-10 col-sm-4 text-center' },
                    _react2.default.createElement(
                        'div',
                        { className: 'cust-img-block d-flex justify-content-center align-items-center fw-500' },
                        _react2.default.createElement(
                            'span',
                            null,
                            'S'
                        )
                    ),
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Sanat'
                    ),
                    _react2.default.createElement(
                        'ul',
                        { className: 'd-flex justify-content-center align-item-center mb-2' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        )
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'text-center mb-2' },
                        'Docprime has helped me choose a doctor (dentist) without any hassle, considering the fact that I am completely new to the city & has absolutely no knowledge about which doctor to consult. Thank you very much Docprime.'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-10 col-sm-4 text-center' },
                    _react2.default.createElement(
                        'div',
                        { className: 'cust-img-block d-flex justify-content-center align-items-center fw-500' },
                        _react2.default.createElement(
                            'span',
                            null,
                            'PS'
                        )
                    ),
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Purnima Singla'
                    ),
                    _react2.default.createElement(
                        'ul',
                        { className: 'd-flex justify-content-center align-item-center mb-2' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/grey-star.svg", alt: 'star' })
                        )
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'text-center mb-2' },
                        'I have booked 3 full body health packages for my family. After receiving the report, I got a call from a doctor who explained each and every element of the report to me and my family. He even prescribed some medicines to my mother and directed us to take some multivitamins. I truly loved the service.'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-10 col-sm-4 text-center' },
                    _react2.default.createElement(
                        'div',
                        { className: 'cust-img-block d-flex justify-content-center align-items-center fw-500' },
                        _react2.default.createElement(
                            'span',
                            null,
                            'PS'
                        )
                    ),
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Preet Sohal'
                    ),
                    _react2.default.createElement(
                        'ul',
                        { className: 'd-flex justify-content-center align-item-center mb-2' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        )
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'text-center mb-2' },
                        'I don\'t generally write reviews but Docprime really deserves 5 stars. I had been struggling to find a dermatologist in my area, did Google search, asked around from friends but didn\'t find one as per my expectations. This app showed me the one clinic which is not on Google search. I booked the appointment immediately. It\'s just a great experience.'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-10 col-sm-4 text-center' },
                    _react2.default.createElement(
                        'div',
                        { className: 'cust-img-block d-flex justify-content-center align-items-center fw-500' },
                        _react2.default.createElement(
                            'span',
                            null,
                            'SS'
                        )
                    ),
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Sonam Sinha '
                    ),
                    _react2.default.createElement(
                        'ul',
                        { className: 'd-flex justify-content-center align-item-center mb-2' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/grey-star.svg", alt: 'star' })
                        )
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'text-center mb-2' },
                        'I booked preventive health packages for my parents living in Delhi. I am so glad that I can take care of their health by sitting in Bangalore. They collected the blood sample from my parent\'s home and sent the report on email which was reviewed by their Doctor. He prescribed some medicines to my parents and I got 23% off on medicine online delivery. Had an overall amazing experience!'
                    )
                )
            ),
            _react2.default.createElement(
                'a',
                { className: 'pkg-btnlft d-none', id: 'static_review_blck_RightArrow_hsptl', onClick: function onClick() {
                        return scroll('left');
                    } },
                _react2.default.createElement('img', { height: '12', src: "/assets" + "/img/color-chev.svg", alt: 'chev-left' })
            ),
            _react2.default.createElement(
                'a',
                { className: 'pkg-btnrgt', id: 'static_review_blck_leftArrow_hsptl', onClick: function onClick() {
                        return scroll('right');
                    } },
                _react2.default.createElement('img', { height: '12', src: "/assets" + "/img/color-chev.svg", alt: 'chev-right' })
            )
        )
    );
};

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookingConfirmationPopup = function (_React$Component) {
	_inherits(BookingConfirmationPopup, _React$Component);

	function BookingConfirmationPopup(props) {
		_classCallCheck(this, BookingConfirmationPopup);

		var _this = _possibleConstructorReturn(this, (BookingConfirmationPopup.__proto__ || Object.getPrototypeOf(BookingConfirmationPopup)).call(this, props));

		_this.state = {};
		return _this;
	}

	_createClass(BookingConfirmationPopup, [{
		key: 'render',
		value: function render() {
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
	}]);

	return BookingConfirmationPopup;
}(_react2.default.Component);

exports.default = BookingConfirmationPopup;

/***/ }),

/***/ "./dev/js/containers/commons/Home.js":
/*!*******************************************!*\
  !*** ./dev/js/containers/commons/Home.js ***!
  \*******************************************/
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

var _Home = __webpack_require__(/*! ../../components/commons/Home */ "./dev/js/components/commons/Home/index.js");

var _Home2 = _interopRequireDefault(_Home);

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

        _this.state = {
            mergeState: false
        };
        return _this;
    }

    _createClass(Home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            //If user is logged in ,fetch user data
            if (_storage2.default.checkAuth()) {
                this.props.getUserProfile();
                this.props.getUpComingAppointment();
            }

            // this.props.fetchHeatlhTip()
            // this.props.fetchArticles()
            if (!this.props.common_tests.length || !this.props.common_package.length || !this.props.specializations.length || this.props.selectedLocation && this.props.selectedLocation.locality) {}
            var extraData = {
                selectedLocation: this.props.selectedLocation
            };
            this.props.getNearbyHospitals(extraData);
            // if(! (this.props.common_tests && this.props.common_tests.length) ){
            //     this.props.loadLabCommonCriterias()
            // }
            this.props.loadLabCommonCriterias();
            // this.props.loadOPDInsurance(this.props.selectedLocation)
            this.props.loadOPDCommonCriteria(this.props.selectedLocation);

            this.props.resetFilters();
            this.props.clearExtraTests();
            setTimeout(function () {
                _this2.setState({ mergeState: true });
            }, 100);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Home2.default, _extends({}, this.props, this.state));
        }
    }], [{
        key: 'loadData',
        value: function loadData(store, match) {
            return new Promise(function (resolve, reject) {
                Promise.all([store.dispatch((0, _index.loadOPDCommonCriteria)()), store.dispatch((0, _index.loadLabCommonCriterias)()), store.dispatch((0, _index.getNearbyHospitals)())]).then(function () {
                    resolve({});
                }).catch(function (e) {
                    reject();
                });
            });
        }
    }]);

    return Home;
}(_react2.default.Component);

Home.contextTypes = {
    router: function router() {
        return null;
    }
};


var mapStateToProps = function mapStateToProps(state, passedProps) {
    /**
     * initialServerData is server rendered async data required build html on server. 
     */
    var initialServerData = null;
    var staticContext = passedProps.staticContext;

    if (staticContext && staticContext.data) {
        initialServerData = staticContext.data;
    }

    var _state$USER = state.USER,
        profiles = _state$USER.profiles,
        selectedProfile = _state$USER.selectedProfile,
        newNotification = _state$USER.newNotification,
        notifications = _state$USER.notifications,
        articles = _state$USER.articles,
        healthTips = _state$USER.healthTips,
        device_info = _state$USER.device_info,
        offerList = _state$USER.offerList,
        upcoming_appointments = _state$USER.upcoming_appointments,
        is_ipd_form_submitted = _state$USER.is_ipd_form_submitted,
        defaultProfile = _state$USER.defaultProfile,
        is_any_user_buy_gold = _state$USER.is_any_user_buy_gold,
        user_detail_fetched = _state$USER.user_detail_fetched;
    var _state$SEARCH_CRITERI = state.SEARCH_CRITERIA_LABS,
        LOADED_SEARCH_CRITERIA_LAB = _state$SEARCH_CRITERI.LOADED_SEARCH_CRITERIA_LAB,
        common_tests = _state$SEARCH_CRITERI.common_tests,
        common_package = _state$SEARCH_CRITERI.common_package,
        selectedLocation = _state$SEARCH_CRITERI.selectedLocation,
        compare_packages = _state$SEARCH_CRITERI.compare_packages;

    var filterCriteria_lab = state.SEARCH_CRITERIA_LABS.filterCriteria;

    var _state$SEARCH_CRITERI2 = state.SEARCH_CRITERIA_OPD,
        LOADED_SEARCH_CRITERIA_OPD = _state$SEARCH_CRITERI2.LOADED_SEARCH_CRITERIA_OPD,
        specializations = _state$SEARCH_CRITERI2.specializations,
        ipd_procedures = _state$SEARCH_CRITERI2.ipd_procedures,
        top_hospitals = _state$SEARCH_CRITERI2.top_hospitals,
        common_settings = _state$SEARCH_CRITERI2.common_settings,
        package_categories = _state$SEARCH_CRITERI2.package_categories,
        nearbyHospitals = _state$SEARCH_CRITERI2.nearbyHospitals;


    var filterCriteria_opd = state.SEARCH_CRITERIA_OPD.filterCriteria;

    var static_footer_data = state.DOCTOR_SEARCH.static_footer_data;


    return {
        profiles: profiles, selectedProfile: selectedProfile, newNotification: newNotification, notifications: notifications, articles: articles, healthTips: healthTips, common_tests: common_tests || [], specializations: specializations || [], selectedLocation: selectedLocation, filterCriteria_lab: filterCriteria_lab, filterCriteria_opd: filterCriteria_opd, device_info: device_info, common_package: common_package || [], initialServerData: initialServerData, offerList: offerList, upcoming_appointments: upcoming_appointments, compare_packages: compare_packages, ipd_procedures: ipd_procedures, top_hospitals: top_hospitals, common_settings: common_settings, is_ipd_form_submitted: is_ipd_form_submitted, package_categories: package_categories, nearbyHospitals: nearbyHospitals, static_footer_data: static_footer_data, defaultProfile: defaultProfile, is_any_user_buy_gold: is_any_user_buy_gold, user_detail_fetched: user_detail_fetched
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        loadLabCommonCriterias: function loadLabCommonCriterias() {
            return dispatch((0, _index.loadLabCommonCriterias)());
        },
        loadOPDCommonCriteria: function loadOPDCommonCriteria(city) {
            return dispatch((0, _index.loadOPDCommonCriteria)(city));
        },
        toggleOPDCriteria: function toggleOPDCriteria(type, criteria, forceAdd, filters) {
            return dispatch((0, _index.toggleOPDCriteria)(type, criteria, forceAdd, filters));
        },
        toggleDiagnosisCriteria: function toggleDiagnosisCriteria(type, criteria, forceAdd, filters) {
            return dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria, forceAdd, filters));
        },
        getUserProfile: function getUserProfile() {
            return dispatch((0, _index.getUserProfile)());
        },
        fetchHeatlhTip: function fetchHeatlhTip() {
            return dispatch((0, _index.fetchHeatlhTip)());
        },
        fetchArticles: function fetchArticles() {
            return dispatch((0, _index.fetchArticles)());
        },
        resetFilters: function resetFilters() {
            return dispatch((0, _index.resetFilters)());
        },
        clearExtraTests: function clearExtraTests() {
            return dispatch((0, _index.clearExtraTests)());
        },
        getSpecialityFooterData: function getSpecialityFooterData(cb) {
            return dispatch((0, _index.getSpecialityFooterData)(cb));
        },
        selectSearchType: function selectSearchType(type) {
            return dispatch((0, _index.selectSearchType)(type));
        },
        getOfferList: function getOfferList(lat, long) {
            return dispatch((0, _index.getOfferList)(lat, long));
        },
        clearAllTests: function clearAllTests() {
            return dispatch((0, _index.clearAllTests)());
        },
        setPackageId: function setPackageId(package_id, isHomePage) {
            return dispatch((0, _index.setPackageId)(package_id, isHomePage));
        },
        getUpComingAppointment: function getUpComingAppointment() {
            return dispatch((0, _index.getUpComingAppointment)());
        },
        resetPkgCompare: function resetPkgCompare() {
            return dispatch((0, _index.resetPkgCompare)());
        },
        toggleIPDCriteria: function toggleIPDCriteria(criteria, forceAdd) {
            return dispatch((0, _index.toggleIPDCriteria)(criteria, forceAdd));
        },
        loadOPDInsurance: function loadOPDInsurance(city) {
            return dispatch((0, _index.loadOPDInsurance)(city));
        },
        mergeIpdCriteria: function mergeIpdCriteria(filterCriteria) {
            return dispatch((0, _index.mergeIpdCriteria)(filterCriteria));
        },
        getNearbyHospitals: function getNearbyHospitals(params, cb) {
            return dispatch((0, _index.getNearbyHospitals)(params, cb));
        },
        clearVipSelectedPlan: function clearVipSelectedPlan() {
            return dispatch((0, _index.clearVipSelectedPlan)());
        },
        NonIpdBookingLead: function NonIpdBookingLead(data, cb) {
            return dispatch((0, _index.NonIpdBookingLead)(data, cb));
        }

    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);

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

var CRITEO = {
	sendData: function sendData(data) {
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

/***/ }),

/***/ "./node_modules/compress.js/index.js":
/*!*******************************************!*\
  !*** ./node_modules/compress.js/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var a=n[i]={exports:{},id:i,loaded:!1};return t[i].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){var i,a,r;!function(o,u){a=[t,n(1),n(2),n(3),n(4),n(5),n(6)],i=u,r="function"==typeof i?i.apply(e,a):i,!(void 0!==r&&(t.exports=r))}(this,function(t,e,n,i,a,r,o){"use strict";function u(t){return t&&t.__esModule?t:{default:t}}function s(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var d=u(e),l=u(n),c=u(i),h=u(a),v=u(r),p=u(o),g=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),w=function(){function t(){f(this,t)}return g(t,[{key:"attach",value:function(t,e){var n=this;return new Promise(function(i,a){var r=document.querySelector(t);r.setAttribute("accept","image/*"),r.addEventListener("change",function(t){var a=n.compress([].concat(s(t.target.files)),e);i(a)},!1)})}},{key:"compress",value:function(t,e){function n(t,e){var n=new v.default(e);return n.start=window.performance.now(),n.alt=t.name,n.ext=t.type,n.startSize=t.size,p.default.orientation(t).then(function(e){return n.orientation=e,c.default.load(t)}).then(i(n))}function i(t){return function(e){return h.default.load(e).then(function(e){if(t.startWidth=e.naturalWidth,t.startHeight=e.naturalHeight,t.resize){var n=h.default.resize(t.maxWidth,t.maxHeight)(e.naturalWidth,e.naturalHeight),i=n.width,a=n.height;t.endWidth=i,t.endHeight=a}else t.endWidth=e.naturalWidth,t.endHeight=e.naturalHeight;return l.default.imageToCanvas(t.endWidth,t.endHeight,t.orientation)(e)}).then(function(e){return t.iterations=1,t.base64prefix=d.default.prefix(t.ext),a(e,t.startSize,t.quality,t.size,t.minQuality,t.iterations)}).then(function(e){return t.finalSize=d.default.size(e),d.default.data(e)}).then(function(e){t.end=window.performance.now();var n=t.end-t.start;return{data:e,prefix:t.base64prefix,elapsedTimeInSeconds:n/1e3,alt:t.alt,initialSizeInMb:l.default.size(t.startSize).MB,endSizeInMb:l.default.size(t.finalSize).MB,ext:t.ext,quality:t.quality,endWidthInPx:t.endWidth,endHeightInPx:t.endHeight,initialWidthInPx:t.startWidth,initialHeightInPx:t.startHeight,sizeReducedInPercent:(t.startSize-t.finalSize)/t.startSize*100,iterations:t.iterations}})}}function a(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=arguments[3],r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=arguments[5],u=l.default.canvasToBase64(t,n),s=d.default.size(u);return o+=1,s>i?a(t,s,n-.1,i,r,o):n>r?a(t,s,n-.1,i,r,o):n<.5?u:u}return Promise.all(t.map(function(t){return n(t,e)}))}}],[{key:"convertBase64ToFile",value:function(t,e){return l.default.base64ToFile(t,e)}}]),t}();t.exports=w})},function(t,e,n){var i,a,r;!function(n,o){a=[e],i=o,r="function"==typeof i?i.apply(e,a):i,!(void 0!==r&&(t.exports=r))}(this,function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(t){var e=t.replace(/^data:image\/\w+;base64,/,"").length;return(e-814)/1.37},n=function(t){return t.split(";")[0].match(/jpeg|png|gif/)[0]},i=function(t){return t.replace(/^data:image\/\w+;base64,/,"")},a=function(t){return"data:"+t+";base64,"};t.default={size:e,mime:n,data:i,prefix:a}})},function(t,e,n){var i,a,r;!function(n,o){a=[e],i=o,r="function"==typeof i?i.apply(e,a):i,!(void 0!==r&&(t.exports=r))}(this,function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"image/jpeg",n=window.atob(t),i=[],a=0;a<n.length;a++)i[a]=n.charCodeAt(a);return new window.Blob([new Uint8Array(i)],{type:e})},n=function(t,e,n){var i=document.createElement("canvas"),a=i.getContext("2d");return i.width=t,i.height=e,function(r){if(!n||n>8)return a.drawImage(r,0,0,i.width,i.height),i;switch(n>4&&(i.width=e,i.height=t),n){case 2:a.translate(t,0),a.scale(-1,1);break;case 3:a.translate(t,e),a.rotate(Math.PI);break;case 4:a.translate(0,e),a.scale(1,-1);break;case 5:a.rotate(.5*Math.PI),a.scale(1,-1);break;case 6:a.rotate(.5*Math.PI),a.translate(0,-e);break;case 7:a.rotate(.5*Math.PI),a.translate(t,-e),a.scale(-1,1);break;case 8:a.rotate(-.5*Math.PI),a.translate(-t,0)}return n>4?a.drawImage(r,0,0,i.height,i.width):a.drawImage(r,0,0,i.width,i.height),i}},i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.75,n=t.toDataURL("image/jpeg",e);return n},a=function(t){return{KB:t/1e3,MB:t/1e6}};t.default={base64ToFile:e,imageToCanvas:n,canvasToBase64:i,size:a}})},function(t,e,n){var i,a,r;!function(n,o){a=[e],i=o,r="function"==typeof i?i.apply(e,a):i,!(void 0!==r&&(t.exports=r))}(this,function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(t){return new Promise(function(e,n){var i=new window.FileReader;i.addEventListener("load",function(t){e(t.target.result)},!1),i.addEventListener("error",function(t){n(t)},!1),i.readAsDataURL(t)})};t.default={load:e}})},function(t,e,n){var i,a,r;!function(n,o){a=[e],i=o,r="function"==typeof i?i.apply(e,a):i,!(void 0!==r&&(t.exports=r))}(this,function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(t){return new Promise(function(e,n){var i=new window.Image;i.addEventListener("load",function(){e(i)},!1),i.addEventListener("error",function(t){n(t)},!1),i.src=t})},n=function(t,e){return function(n,i){if(!t&&!e)return{width:n,height:i};var a=n/i,r=t/e,o=void 0,u=void 0;return a>r?(o=Math.min(n,t),u=o/a):(u=Math.min(i,e),o=u*a),{width:o,height:u}}};t.default={load:e,resize:n}})},function(t,e,n){var i,a,r;!function(n,o){a=[e],i=o,r="function"==typeof i?i.apply(e,a):i,!(void 0!==r&&(t.exports=r))}(this,function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function t(n){var i=n.quality,a=void 0===i?.75:i,r=n.size,o=void 0===r?2:r,u=n.maxWidth,s=void 0===u?1920:u,f=n.maxHeight,d=void 0===f?1920:f,l=n.resize,c=void 0===l||l;e(this,t),this.start=window.performance.now(),this.end=null,this.alt=null,this.ext=null,this.startSize=null,this.startWidth=null,this.startHeight=null,this.size=1e3*o*1e3,this.endSize=null,this.endWidth=null,this.endHeight=null,this.iterations=0,this.base64prefix=null,this.quality=a,this.resize=c,this.maxWidth=s,this.maxHeight=d,this.orientation=1};t.default=n})},function(t,e,n){var i,a,r;!function(n,o){a=[e],i=o,r="function"==typeof i?i.apply(e,a):i,!(void 0!==r&&(t.exports=r))}(this,function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(t){return new Promise(function(e,n){var i=new window.FileReader;i.onload=function(t){var n=new DataView(t.target.result);65496!==n.getUint16(0,!1)&&e(-2);for(var i=n.byteLength,a=2;a<i;){var r=n.getUint16(a,!1);if(a+=2,65505===r){1165519206!==n.getUint32(a+=2,!1)&&e(-1);var o=18761===n.getUint16(a+=6,!1);a+=n.getUint32(a+4,o);var u=n.getUint16(a,o);a+=2;for(var s=0;s<u;s++)274===n.getUint16(a+12*s,o)&&e(n.getUint16(a+12*s+8,o))}else{if(65280!==(65280&r))break;a+=n.getUint16(a,!1)}}e(-1)},i.readAsArrayBuffer(t.slice(0,65536))})};t.default={orientation:e}})}])});
//# sourceMappingURL=index.js.map

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvQ29ycG9yYXRlTGVhZFBvcHVwLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvSG9tZS9EZW1vV2lkZ2V0LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvSG9tZS9Hb2xkSG9tZVBhZ2VCYW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Ib21lL0hvbWVOZXdWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvSG9tZS9Ib21lUGFnZUNoYXRXaWRnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Ib21lL0hvbWVQYWdlUGFja2FnZUNhdGVnb3J5LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvSG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWVOZXdWaWV3L1N0YXRpY0hvbWVQYWdlQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvYm9va2luZ1N1bW1hcnkvQm9va2luZ0NvbmZpcm1hdGlvblBvcHVwLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL2NvbW1vbnMvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvaGVscGVycy9jcml0ZW8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbXByZXNzLmpzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvcnBvcmF0ZUxlYWRQb3B1cCIsInByb3BzIiwiaW5wdXRIYW5kbGVyIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImxlbmd0aCIsInNldFN0YXRlIiwic3VibWl0Iiwic3RhdGUiLCJjb21wYW55TmFtZSIsIlNuYWNrQmFyIiwic2hvdyIsInBvcyIsInRleHQiLCJlbWFpbCIsIm1hdGNoIiwicGhvbmVOdW1iZXIiLCJkYXRhIiwibm9lIiwicHVzaExlYWRzIiwiY2FuY2VsT3ZlcmxheSIsIkFTU0VUU19CQVNFX1VSTCIsIm1hcmdpblJpZ2h0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJUb3BQcm9jZWR1cmVXaWRnZXRzIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJzZWxlY3RlZENyaXRlcmlhIiwidHlwZSIsImlkIiwiZ3RtRGF0YSIsIkdUTSIsImdldFVzZXJJZCIsInNlbmRFdmVudCIsInRvZ2dsZUlQRENyaXRlcmlhIiwidXJsIiwiaGlzdG9yeSIsInB1c2giLCJlbG1udCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvdXRlckRpdldpZHRoIiwib2Zmc2V0V2lkdGgiLCJjaGlsZERpdldpZHRoIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNhcmRDb3VudCIsImNoaWxkRWxlbWVudENvdW50IiwiY2FyZFdpZHRoIiwiTWF0aCIsImNlaWwiLCJsZWZ0U2Nyb2xsIiwic2Nyb2xsTGVmdCIsInNjcm9sbFZhbCIsImZsb29yIiwiY2FyZEVuZCIsInNjcm9sbCIsImxlZnQiLCJiZWhhdmlvciIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImJpbmQiLCJHb2xkSG9tZVBhZ2VWaWV3IiwiY2xpY2tlZEdvbGRCYW5uZXIiLCJQdXJlQ29tcG9uZW50IiwicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiTWFpblZpZXciLCJhbmltYXRlVmFsdWUiLCJvYmoiLCJzdGFydCIsImVuZCIsImR1cmF0aW9uIiwidGV4dFN0YXJ0aW5nIiwiaW5uZXJIVE1MIiwicGFyc2VGbG9hdCIsInJhbmdlIiwibWluVGltZXIiLCJzdGVwVGltZSIsImFicyIsIm1heCIsInN0YXJ0VGltZSIsIkRhdGUiLCJnZXRUaW1lIiwiZW5kVGltZSIsInRpbWVyIiwicnVuIiwibm93IiwicmVtYWluaW5nIiwicm91bmQiLCJyZXBsYWNlIiwiY2xlYXJJbnRlcnZhbCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYWdlWU9mZnNldCIsInNldEludGVydmFsIiwic2VhcmNoTGFiIiwidGVzdCIsInRvcFBhY2thZ2VzIiwic2V0UGFja2FnZUlkIiwidG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEiLCJzZXRUaW1lb3V0Iiwic2VhcmNoRG9jdG9yIiwic3BlY2lhbGl0eSIsInRvZ2dsZU9QRENyaXRlcmlhIiwiZ29Ub1NlYXJjaCIsInNlbGVjdFNlYXJjaFR5cGUiLCJ3aGVyZSIsInNlYXJjaEhvc3BpdGFscyIsInRvcEhvc3BpdGFscyIsInJlZGlyZWN0VXJsIiwiaXNfaXBkX2hvc3BpdGFsIiwic2JpQmFubmVyQ2xpY2tlZCIsIm5lYXJieUhvc3BpdGFsVmlld0FsbENsaWNrZWQiLCJtZXJnZUlwZENyaXRlcmlhIiwiY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMiLCJuZXh0U2VsZWN0ZWRDcml0ZXJpYXMiLCJhZnRlclVzZXJMb2dpbiIsImlzX3VzZXJfaW5zdXJhbmNlX2FjdGl2ZSIsInVzZXJfaW5zdXJhbmNlX3N0YXR1cyIsImRlZmF1bHRQcm9maWxlIiwicHJvZmlsZXMiLCJpbnN1cmFuY2Vfc3RhdHVzIiwiZ2V0Q29ycG9yYXRlTGVhZCIsIm9wZW5Db3Jwb3JhdGVCbG9jayIsInBhcnNlZCIsInBhcnNlIiwibG9jYXRpb24iLCJzZWFyY2giLCJwYXJhbXMiLCJ1dG1fc291cmNlIiwidXRtX3Rlcm0iLCJ1dG1fbWVkaXVtIiwidXRtX2NhbXBhaWduIiwiTm9uSXBkQm9va2luZ0xlYWQiLCJ0aGVuIiwic2hvd1BvcHVwIiwiY2xpY2tlZE9uIiwic2hvd19wb3B1cCIsInNjcm9sbFRvIiwic3RhdGljX2Zvb3Rlcl9kYXRhIiwiZ2V0U3BlY2lhbGl0eUZvb3RlckRhdGEiLCJzZWxlY3RlZExvY2F0aW9uIiwibGF0IiwibG9uZyIsImdlb21ldHJ5IiwibG5nIiwiZ2V0T2ZmZXJMaXN0IiwibVZpZXciLCJwb3NpdGlvblkiLCJzdHlsZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImNWYWwxIiwiY1ZhbDIiLCJDUklURU8iLCJzZW5kRGF0YSIsImJpcnRoZGF5IiwiYWdlRGlmTXMiLCJhZ2VEYXRlIiwiZ2V0VVRDRnVsbFllYXIiLCJpc0xhYiIsImxpc3QiLCJ0b3BMaXN0Iiwic2xpY2UiLCJzb3VyY2UiLCJjb250aW51ZUNsaWNrIiwibmF2aWdhdG9yIiwidXNlckFnZW50Iiwib3BlbiIsIkNPTkZJRyIsIlBIQVJNRUFTWV9ORVdfT1JERVJfSUZSQU1FX1VSTCIsIlBIQVJNRUFTWV9QUkVWX09SREVSX0lGUkFNRV9VUkwiLCJ0b3BTcGVjaWFsaXphdGlvbnMiLCJzcGVjaWFsaXphdGlvbnMiLCJ0b3BUZXN0cyIsImNvbW1vbl90ZXN0cyIsImNvbW1vbl9wYWNrYWdlIiwiYXJ0aWNsZXMiLCJpc1NCSSIsIm1lcmdlU3RhdGUiLCJob3N0IiwiaW5jbHVkZXMiLCJzaG93UGFja2FnZVN0cmlwIiwiY29tcGFyZV9wYWNrYWdlcyIsImlzUGFja2FnZSIsImRlZmF1bHRVc2VyUHJvZmlsZSIsInNob3dHb2xkQmFubmVyIiwidXNlcl9kZXRhaWxfZmV0Y2hlZCIsIk9iamVjdCIsImtleXMiLCJpc19hbnlfdXNlcl9idXlfZ29sZCIsIlNUT1JBR0UiLCJjaGVja0F1dGgiLCJvZmZlckxpc3QiLCJmaWx0ZXIiLCJ4Iiwic2xpZGVyX2xvY2F0aW9uIiwid2lkdGgiLCJ0b3BfaG9zcGl0YWxzIiwibmVhcmJ5SG9zcGl0YWxzIiwiaG9zcGl0YWxzIiwibWFyZ2luTGVmdCIsIlRvcENoYXRXaWRnZXQiLCJrbm93TW9yZSIsImNsZWFyVmlwU2VsZWN0ZWRQbGFuIiwicGFkZGluZyIsImJvcmRlckJvdHRvbSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIndpZGdldENsaWNrIiwiZmxleCIsImZvbnRTaXplIiwiSG9tZVBhZ2VQYWNrYWdlQ2F0ZWdvcnkiLCJQa2dEYXRhIiwicGFja2FnZXMiLCJzZWxlY3RlZFBrZ0NvbXBhcmVJZHMiLCJoaXN0b3J5T2JqIiwicGFja2FnZV9jYXRlZ29yeV9pZHMiLCJ0b3BfZGF0YSIsIm1hcCIsImkiLCJuYXZpZ2F0ZVRvIiwic3ZnX2ljb24iLCJpY29uIiwiZGF0YVR5cGUiLCJjaGlsZHJlbiIsInNjcm9sbFdpZHRoIiwidHJhbnNmb3JtIiwiQm9va2luZ0NvbmZpcm1hdGlvblBvcHVwIiwiaXNfZ29sZCIsInByaWNlQ29uZmlybWF0aW9uUG9wdXAiLCJIb21lIiwiZ2V0VXNlclByb2ZpbGUiLCJnZXRVcENvbWluZ0FwcG9pbnRtZW50IiwibG9jYWxpdHkiLCJleHRyYURhdGEiLCJnZXROZWFyYnlIb3NwaXRhbHMiLCJsb2FkTGFiQ29tbW9uQ3JpdGVyaWFzIiwibG9hZE9QRENvbW1vbkNyaXRlcmlhIiwicmVzZXRGaWx0ZXJzIiwiY2xlYXJFeHRyYVRlc3RzIiwic3RvcmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImFsbCIsImRpc3BhdGNoIiwiY2F0Y2giLCJjb250ZXh0VHlwZXMiLCJyb3V0ZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJwYXNzZWRQcm9wcyIsImluaXRpYWxTZXJ2ZXJEYXRhIiwic3RhdGljQ29udGV4dCIsIlVTRVIiLCJzZWxlY3RlZFByb2ZpbGUiLCJuZXdOb3RpZmljYXRpb24iLCJub3RpZmljYXRpb25zIiwiaGVhbHRoVGlwcyIsImRldmljZV9pbmZvIiwidXBjb21pbmdfYXBwb2ludG1lbnRzIiwiaXNfaXBkX2Zvcm1fc3VibWl0dGVkIiwiU0VBUkNIX0NSSVRFUklBX0xBQlMiLCJMT0FERURfU0VBUkNIX0NSSVRFUklBX0xBQiIsImZpbHRlckNyaXRlcmlhX2xhYiIsImZpbHRlckNyaXRlcmlhIiwiU0VBUkNIX0NSSVRFUklBX09QRCIsIkxPQURFRF9TRUFSQ0hfQ1JJVEVSSUFfT1BEIiwiaXBkX3Byb2NlZHVyZXMiLCJjb21tb25fc2V0dGluZ3MiLCJwYWNrYWdlX2NhdGVnb3JpZXMiLCJmaWx0ZXJDcml0ZXJpYV9vcGQiLCJET0NUT1JfU0VBUkNIIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY2l0eSIsImNyaXRlcmlhIiwiZm9yY2VBZGQiLCJmaWx0ZXJzIiwiZmV0Y2hIZWF0bGhUaXAiLCJmZXRjaEFydGljbGVzIiwiY2IiLCJjbGVhckFsbFRlc3RzIiwicGFja2FnZV9pZCIsImlzSG9tZVBhZ2UiLCJyZXNldFBrZ0NvbXBhcmUiLCJsb2FkT1BESW5zdXJhbmNlIiwiY3JpdGVvX3EiLCJkZXZpY2VUeXBlIiwiYWNjb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTs7O0lBR01BLGtCOzs7QUFFTCxnQ0FBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLDRJQUNYQSxLQURXOztBQUFBLGNBWWZDLFlBWmUsR0FZQSxVQUFDQyxDQUFELEVBQU07QUFDcEIsZ0JBQUdBLEVBQUVDLE1BQUYsQ0FBU0MsSUFBVCxJQUFlLGFBQWxCLEVBQWlDO0FBQ2hDLG9CQUFHRixFQUFFQyxNQUFGLENBQVNFLEtBQVQsQ0FBZUMsTUFBZixJQUF3QixFQUEzQixFQUE4QjtBQUM3QiwwQkFBS0MsUUFBTCxxQkFBaUJMLEVBQUVDLE1BQUYsQ0FBU0MsSUFBMUIsRUFBaUNGLEVBQUVDLE1BQUYsQ0FBU0UsS0FBMUM7QUFDQTtBQUNELGFBSkQsTUFJTTtBQUNMLHNCQUFLRSxRQUFMLHFCQUFpQkwsRUFBRUMsTUFBRixDQUFTQyxJQUExQixFQUFpQ0YsRUFBRUMsTUFBRixDQUFTRSxLQUExQztBQUNBO0FBQ0QsU0FwQmM7O0FBQUEsY0FzQmZHLE1BdEJlLEdBc0JOLFlBQUk7QUFDVCxnQkFBSSxDQUFDLE1BQUtDLEtBQUwsQ0FBV0MsV0FBaEIsRUFBNkI7QUFDekJDLHVDQUFTQyxJQUFULENBQWMsRUFBRUMsS0FBSyxlQUFQLEVBQXdCQyxNQUFNLGdDQUE5QixFQUFkO0FBQ0E7QUFDSDtBQUNELGdCQUFJLENBQUMsTUFBS0wsS0FBTCxDQUFXTSxLQUFoQixFQUF1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dUIsS0FBSyxZQUFZLElBQUksNERBQTRELEtBQUssMkJBQTJCLHNCQUFzQixNQUFNLHVDQUF1QyxHQUFHLFdBQVcsZUFBZSxFQUFFLEdBQUc7QUFDLy9PLGlDIiwiZmlsZSI6IjU4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tbW9uUG9wdXAgZnJvbSAnLi4vY29tbW9uRml4ZWRQb3B1cC9jb21tb25GaXhlZFBvcHVwLmpzJ1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5cbi8vIE1ldGhvZCB0byBhZGQgYmVmb3JlIHVzZSxcbi8vIDEpIGNhbmNlbE92ZXJsYXkoKVxuLy8gMikgcHVzaExlYWQoKVxuXG5cbmNsYXNzIENvcnBvcmF0ZUxlYWRQb3B1cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRjb21wYW55TmFtZTogJycsXG5cdFx0XHRub2U6JycsXG5cdFx0XHRlbWFpbDonJyxcblx0XHRcdHBob25lTnVtYmVyOicnLFxuXHRcdFx0bmFtZTonJ1xuXHRcdH1cblx0fVxuXG5cdFxuICAgIGlucHV0SGFuZGxlciA9IChlKT0+IHtcbiAgICBcdGlmKGUudGFyZ2V0Lm5hbWU9PVwicGhvbmVOdW1iZXJcIikge1xuICAgIFx0XHRpZihlLnRhcmdldC52YWx1ZS5sZW5ndGggPD0xMCl7XG4gICAgXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgXHRcdH1cbiAgICBcdH1lbHNlIHtcbiAgICBcdFx0dGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSlcbiAgICBcdH1cbiAgICB9XG5cbiAgICBzdWJtaXQgPSAoKT0+e1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuY29tcGFueU5hbWUpIHtcbiAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgRW50ZXIgWW91ciBDb21wYW55IE5hbWVcIiB9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmVtYWlsKSB7XG4gICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIEVudGVyIEVtYWlsIElkXCIgfSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLmVtYWlsLm1hdGNoKC9cXFMrQFxcUytcXC5cXFMrLykpe1xuICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBFbnRlciBWYWxpZCBFbWFpbFwiIH0pXG4gICAgICAgICAgICByZXR1cm4gICBcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUubmFtZSkge1xuICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBFbnRlciBZb3VyIE5hbWVcIiB9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnBob25lTnVtYmVyKSB7XG4gICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIEVudGVyIFlvdXIgUGhvbmUgTnVtYmVyXCIgfSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucGhvbmVOdW1iZXIubGVuZ3RoPDEwKSB7XG4gICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIEVudGVyIFZhbGlkIFBob25lIE51bWJlclwiIH0pXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ2xlYWRfc291cmNlJzogJ0NvcnBvcmF0ZUdvbGQnLFxuICAgICAgICAgICAgJ3NvdXJjZSc6ICcnLFxuICAgICAgICAgICAgJ3Bob25lX251bWJlcic6IHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsXG4gICAgICAgICAgICAnY29tcGFueV9uYW1lJzogdGhpcy5zdGF0ZS5jb21wYW55TmFtZSxcbiAgICAgICAgICAgICdjb250YWN0X3BlcnNvbl9uYW1lJzogdGhpcy5zdGF0ZS5uYW1lLFxuICAgICAgICAgICAgJ2VtYWlsJzogdGhpcy5zdGF0ZS5lbWFpbCxcbiAgICAgICAgICAgICdudW1iZXJfb2ZfZW1wbG95ZWVzJzogdGhpcy5zdGF0ZS5ub2UsXG4gICAgICAgICAgICAnbGVhZF90eXBlJzogJ0NPUlBPUkFURUdPTEQnXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5wdXNoTGVhZHMoZGF0YSk7XG4gICAgfVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybihcblx0XHRcdDxDb21tb25Qb3B1cCBjYW5jZWxPdmVybGF5PXt0aGlzLnByb3BzLmNhbmNlbE92ZXJsYXl9IGNsYXNzTmFtZT1cInRlc3QtY2xhc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvcnBvcmF0ZS1kZXRhaWwtc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1vZGFsLWNsb3NlLWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Nsb3NlLWJsYWNrLnN2Z1wifSBhbHQ9XCJjbG9zZVwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuY2FuY2VsT3ZlcmxheX0vPlxuICAgICAgICAgICAgICAgICAgICA8aDM+RHJvcCB5b3VyIGRldGFpbHM8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aDY+V2Ugd2lsbCByZWFjaCB5b3UgZm9yIGZ1cnRoZXIgYXNzaXN0YW5jZTwvaDY+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIiogQ29tcGFueSBOYW1lXCIgc3R5bGU9e3ttYXJnaW5SaWdodDogMTJ9fSBuYW1lPVwiY29tcGFueU5hbWVcIiB2YWx1ZT17dGhpcy5zdGF0ZS5jb21wYW55TmFtZX0gb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIk5vIG9mIGVtcGxveWVlc1wiIG5hbWU9XCJub2VcIiB2YWx1ZT17dGhpcy5zdGF0ZS5ub2V9IG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIiogRW1haWwgQWRkcmVzc1wiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfSBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCIqIENvbnRhY3QgUGVyc29uIE5hbWVcIiBuYW1lPVwibmFtZVwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG1heD1cIjEwXCIgcGxhY2Vob2xkZXI9XCIqIENvbnRhY3QgTnVtYmVyXCIgbmFtZT1cInBob25lTnVtYmVyXCIgdmFsdWU9e3RoaXMuc3RhdGUucGhvbmVOdW1iZXJ9IG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaXBkLWlucC1zYm10IGZsb2F0LXJpZ2h0XCIgb25DbGljaz17dGhpcy5zdWJtaXR9PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db21tb25Qb3B1cD5cblx0XHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3Jwb3JhdGVMZWFkUG9wdXA7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcblxuY2xhc3MgVG9wUHJvY2VkdXJlV2lkZ2V0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBuYXZpZ2F0ZVRvKGRhdGEsIGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgbGV0IHNlbGVjdGVkQ3JpdGVyaWEgPSB7XG4gICAgICAgICAgICB0eXBlOiAnaXBkJyxcbiAgICAgICAgICAgIGlkOiBkYXRhLmlkLFxuICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSG9tZVdpZGdldFByb2NlZHVyZUNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdob21lLXdpZGdldC1wcm9jZWR1cmUtY2xpY2tlZCcsICdzZWxlY3RlZCc6IGRhdGEubmFtZSB8fCAnJywgJ3NlbGVjdGVkSWQnOiBkYXRhLmlkIHx8ICcnXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bURhdGEgfSlcblxuICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZUlQRENyaXRlcmlhKHNlbGVjdGVkQ3JpdGVyaWEsIHRydWUpXG5cbiAgICAgICAgaWYgKGRhdGEudXJsKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgLyR7ZGF0YS51cmx9P3Nob3dQb3B1cD10cnVlYClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvaXBkSW5mbz9pcGRfaWQ9JHtkYXRhLmlkfSZzaG93UG9wdXA9dHJ1ZWApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzY3JvbGwodHlwZSkge1xuICAgICAgICB2YXIgZWxtbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvcF9pcGRcIilcbiAgICAgICAgbGV0IG91dGVyRGl2V2lkdGggPSBlbG1udC5vZmZzZXRXaWR0aFxuICAgICAgICBsZXQgY2hpbGREaXZXaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvcF9pcGRfbGlzdCcpWzBdLm9mZnNldFdpZHRoXG4gICAgICAgIGxldCBjYXJkQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0b3BfaXBkX2xpc3QnKVswXS5jaGlsZEVsZW1lbnRDb3VudFxuICAgICAgICBsZXQgY2FyZFdpZHRoID0gTWF0aC5jZWlsKGNoaWxkRGl2V2lkdGggLyBjYXJkQ291bnQpXG5cbiAgICAgICAgbGV0IGxlZnRTY3JvbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvcF9pcGRcIikuc2Nyb2xsTGVmdFxuICAgICAgICBsZXQgc2Nyb2xsVmFsID0gTWF0aC5mbG9vcihvdXRlckRpdldpZHRoIC8gY2FyZFdpZHRoKSAqIGNhcmRXaWR0aFxuICAgICAgICBsZXQgY2FyZEVuZCA9IGNhcmRDb3VudCAqIGNhcmRXaWR0aFxuXG4gICAgICAgIGlmICh0eXBlID09ICdyaWdodCcpIHtcbiAgICAgICAgICAgIGVsbW50LnNjcm9sbCh7IGxlZnQ6IGxlZnRTY3JvbGwgKyBzY3JvbGxWYWwsIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgICAgICAgaWYgKGNhcmRFbmQgPD0gbGVmdFNjcm9sbCArIHNjcm9sbFZhbCArIG91dGVyRGl2V2lkdGgpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdEFycm93X2lwZCcpLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdSaWdodEFycm93X2lwZCcpLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsbW50LnNjcm9sbCh7IGxlZnQ6IGxlZnRTY3JvbGwgLSBzY3JvbGxWYWwsIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgICAgICAgaWYgKGxlZnRTY3JvbGwgLSBzY3JvbGxWYWwgPD0gMCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdSaWdodEFycm93X2lwZCcpLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0QXJyb3dfaXBkJykuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBha2ctc2xpZGVyLWNvbnRhaW5lciBtdC0xMCBtYi0xMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnU2xpZGVySGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDU+SGVhbHRoIFBhY2thZ2UgQ2F0ZWdvcmllczwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlZpZXcgQWxsPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnU2xpZGVyQ29udGFpbmVyXCIgaWQ9XCJ0b3BfaXBkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwa2dDYXJkc0xpc3QgZC1pbmxpbmUtZmxleCBzdWItd2QtY2FyZHMgdG9wX2lwZF9saXN0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBrZ2N1c3RDYXJkcyBoZWFsdGgtcGtnLWNhcmQtd2lkdGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ2NhcmRJbWdDb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL21lZGlhL2lwZF9wcm9jZWR1cmUvaW1hZ2VzL2RlbGl2ZXJ5LTAxLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGtndHN0TmFtZSBwcmNkLWhlaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGdWxsIEJvZHkgQ2hlY2sgVXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicGtnY3VzdENhcmRzIGhlYWx0aC1wa2ctY2FyZC13aWR0aFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnY2FyZEltZ0NvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vbWVkaWEvaXBkX3Byb2NlZHVyZS9pbWFnZXMvZGVsaXZlcnktMDEucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwa2d0c3ROYW1lIHByY2QtaGVpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZ1bGwgQm9keSBDaGVjayBVcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwa2djdXN0Q2FyZHMgaGVhbHRoLXBrZy1jYXJkLXdpZHRoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2djYXJkSW1nQ29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9tZWRpYS9pcGRfcHJvY2VkdXJlL2ltYWdlcy9kZWxpdmVyeS0wMS5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBrZ3RzdE5hbWUgcHJjZC1oZWlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRnVsbCBCb2R5IENoZWNrIFVwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBrZ2N1c3RDYXJkcyBoZWFsdGgtcGtnLWNhcmQtd2lkdGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ2NhcmRJbWdDb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL21lZGlhL2lwZF9wcm9jZWR1cmUvaW1hZ2VzL2RlbGl2ZXJ5LTAxLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGtndHN0TmFtZSBwcmNkLWhlaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGdWxsIEJvZHkgQ2hlY2sgVXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicGtnY3VzdENhcmRzIGhlYWx0aC1wa2ctY2FyZC13aWR0aFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnY2FyZEltZ0NvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vbWVkaWEvaXBkX3Byb2NlZHVyZS9pbWFnZXMvZGVsaXZlcnktMDEucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwa2d0c3ROYW1lIHByY2QtaGVpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZ1bGwgQm9keSBDaGVjayBVcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwa2djdXN0Q2FyZHMgaGVhbHRoLXBrZy1jYXJkLXdpZHRoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2djYXJkSW1nQ29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9tZWRpYS9pcGRfcHJvY2VkdXJlL2ltYWdlcy9kZWxpdmVyeS0wMS5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBrZ3RzdE5hbWUgcHJjZC1oZWlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRnVsbCBCb2R5IENoZWNrIFVwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBrZ2N1c3RDYXJkcyBoZWFsdGgtcGtnLWNhcmQtd2lkdGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ2NhcmRJbWdDb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL21lZGlhL2lwZF9wcm9jZWR1cmUvaW1hZ2VzL2RlbGl2ZXJ5LTAxLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGtndHN0TmFtZSBwcmNkLWhlaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGdWxsIEJvZHkgQ2hlY2sgVXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnbGZ0Umh0YnRuY29udFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZy1idG5sZnQgZC1ub25lXCIgaWQ9XCJSaWdodEFycm93X2lwZFwiIG9uQ2xpY2s9e3RoaXMuc2Nyb2xsLmJpbmQodGhpcywgJ2xlZnQnKX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2ctYnRucmd0XCIgaWQ9XCJsZWZ0QXJyb3dfaXBkXCIgb25DbGljaz17dGhpcy5zY3JvbGwuYmluZCh0aGlzLCAncmlnaHQnKX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb3BQcm9jZWR1cmVXaWRnZXRzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgR29sZEhvbWVQYWdlVmlldyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1iYW5uZXItY29udGFpbmVyIGQtbGctbm9uZSBkLW5vbmUgbWItMTBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvbGQtYmFubmVyLWNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbGQtaG9tZS1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Eb2NwcmltZSA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvZ29sZC1sZy5wbmcnfSAvPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2xkLWhvbWUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlRoZSBIZWFsdGhjYXJlIE1lbWJlcnNoaXAgPGJyIC8+WW91IENhbuKAmXQgRG8gV2l0aG91dDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5TYXZlIE1vcmUgVGhhbiDigrk2LDAwMC95ciBXaXRoIFNwZWNpYWwgUHJpY2VzIG9uIE9QRCBDb25zdWx0YXRpb25zLCBMYWIgVGVzdHMgYW5kIE1lZGljaW5lczwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2xkLWhvbWUtaWNvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdsZC1pY28tY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9kaWNpY29uMS5zdmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkV4Y2x1c2l2ZSBQcmljZXM8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPbiBEb2N0b3JzICYgTGFic1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbGQtaWNvLWNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvZGljaWNvbjIuc3ZnJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GbGF0IDIzJSBPRkYgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb24gTWVkaWNpbmVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdsZC1pY28tY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9kaWNpY29uMy5zdmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlVubGltaXRlZCBUZWxlPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uc3VsdGF0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb2xkLWhvbWUtcHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlN0YXJ0aW5nIGF0IGp1c3QgPHN0cm9uZz7igrkxOTk8L3N0cm9uZz4veXIgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLmNsaWNrZWRHb2xkQmFubmVyfT5WaWV3IFBsYW5zPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR29sZEhvbWVQYWdlVmlldztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBEZXNrdG9wUHJvZmlsZUhlYWRlciBmcm9tICcuLi9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXInXG5pbXBvcnQgQ2hhdFBhbmVsIGZyb20gJy4uL0NoYXRQYW5lbCdcbmltcG9ydCBIZWxtZXRUYWdzIGZyb20gJy4uL0hlbG1ldFRhZ3MnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi8uLi9jb25maWcnXG5pbXBvcnQgQWNjb3JkaWFuIGZyb20gJy4vQWNjb3JkaWFuJ1xuaW1wb3J0IEZpeGVkTW9iaWxlRm9vdGVyIGZyb20gJy4vRml4ZWRNb2JpbGVGb290ZXInXG5pbXBvcnQgQmFubmVyQ2Fyb3VzZWwgZnJvbSAnLi9iYW5uZXJDYXJvdXNlbCc7XG5pbXBvcnQgVXBDb21pbmdBcHBvaW50bWVudFZpZXcgZnJvbSAnLi91cENvbWluZ0FwcG9pbnRtZW50LmpzJ1xuaW1wb3J0IFBhY2thZ2VDb21wYXJlU3RyaXAgZnJvbSAnLi4vLi4vZGlhZ25vc2lzL3NlYXJjaFBhY2thZ2VzL3BhY2thZ2VDb21wYXJlL3BhY2thZ2VDb21wYXJlU3RyaXAuanMnXG5pbXBvcnQgSG9tZVBhZ2VQYWNrYWdlV2lkZ2V0IGZyb20gJy4vSG9tZVBhZ2VQYWNrYWdlV2lkZ2V0LmpzJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcbmltcG9ydCBDUklURU8gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9jcml0ZW8uanMnXG5pbXBvcnQgSG9tZVBhZ2VUb3BIb3NwaXRhbHMgZnJvbSAnLi9Ib21lUGFnZVRvcEhvc3BpdGFscy5qcydcbmltcG9ydCBIb21lUGFnZVRvcFByb2NlZHVyZXMgZnJvbSAnLi9Ib21lUGFnZVByb2NlZHVyZVdpZGdldHMuanMnXG5pbXBvcnQgSG9tZVBhZ2VQYWNrYWdlQ2F0ZWdvcnkgZnJvbSAnLi9Ib21lUGFnZVBhY2thZ2VDYXRlZ29yeS5qcydcbmltcG9ydCBUb3BDaGF0V2lkZ2V0IGZyb20gJy4vSG9tZVBhZ2VDaGF0V2lkZ2V0JztcbmltcG9ydCBEZW1vV2lkZ2V0IGZyb20gJy4vRGVtb1dpZGdldC5qcydcbmltcG9ydCBCb29raW5nQ29uZmlybWF0aW9uUG9wdXAgZnJvbSAnLi4vLi4vZGlhZ25vc2lzL2Jvb2tpbmdTdW1tYXJ5L0Jvb2tpbmdDb25maXJtYXRpb25Qb3B1cCc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlcic7XG5pbXBvcnQgVmlwTG9naW5Qb3B1cCBmcm9tICcuLi8uLi92aXBDbHViL3ZpcENsdWJQb3B1cC5qcydcbmltcG9ydCBQcmVzY3JpcHRpb25VcGxvYWQgZnJvbSAnLi4vLi4vLi4vY29udGFpbmVycy9jb21tb25zL1ByZXNjcmlwdGlvblVwbG9hZC5qcydcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuaW1wb3J0IEhvbWVQYWdlV2lkZ2V0IGZyb20gJy4uL0hvbWVOZXdWaWV3L0hvbWVQYWdlV2lkZ2V0LmpzJ1xuaW1wb3J0IENvcnBvcmF0ZUxlYWRQb3B1cCBmcm9tICcuL0NvcnBvcmF0ZUxlYWRQb3B1cC5qcydcbmltcG9ydCBTdGF0aWNDb250ZW50IGZyb20gJy4uL0hvbWVOZXdWaWV3L1N0YXRpY0hvbWVQYWdlQ29udGVudC5qcydcblxuaW1wb3J0IEdvbGRIb21lUGFnZUJhbm5lciBmcm9tICcuL0dvbGRIb21lUGFnZUJhbm5lci5qcydcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcblxuXG5cbmNsYXNzIE1haW5WaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgLy8gbGV0IGZvb3RlckRhdGEgPSBudWxsXG4gICAgICAgIC8vIGlmICh0aGlzLnByb3BzLmluaXRpYWxTZXJ2ZXJEYXRhKSB7XG4gICAgICAgIC8vICAgICBmb290ZXJEYXRhID0gdGhpcy5wcm9wcy5pbml0aWFsU2VydmVyRGF0YS5mb290ZXJEYXRhXG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIC8vIHNwZWNpYWxpdHlGb290ZXJEYXRhOiBmb290ZXJEYXRhLFxuICAgICAgICAgICAgc2hvd1BvcHVwOiBmYWxzZSxcbiAgICAgICAgICAgIGNsaWNrZWRPbjogJycsXG4gICAgICAgICAgICBzaG93X3BvcHVwOmZhbHNlLFxuICAgICAgICAgICAgaXNfdXNlcl9pbnN1cmFuY2VfYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgIG9wZW5Db3Jwb3JhdGVCbG9jazogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB1c2VyX2luc3VyYW5jZV9zdGF0dXMgPSBudWxsXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlICYmIHRoaXMucHJvcHMucHJvZmlsZXMgJiYgdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXSkge1xuICAgICAgICAgICAgdXNlcl9pbnN1cmFuY2Vfc3RhdHVzID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXS5pbnN1cmFuY2Vfc3RhdHVzXG4gICAgICAgIH1cbiAgICAgICAgdXNlcl9pbnN1cmFuY2Vfc3RhdHVzID0gKHVzZXJfaW5zdXJhbmNlX3N0YXR1cz09MSB8fCB1c2VyX2luc3VyYW5jZV9zdGF0dXM9PTUgfHwgdXNlcl9pbnN1cmFuY2Vfc3RhdHVzPT00IHx8IHVzZXJfaW5zdXJhbmNlX3N0YXR1cz09NylcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNfdXNlcl9pbnN1cmFuY2VfYWN0aXZlOiB1c2VyX2luc3VyYW5jZV9zdGF0dXN9KVxuXG4gICAgICAgIC8vIHRoaXMucHJvcHMuZ2V0U3BlY2lhbGl0eUZvb3RlckRhdGEoKGNiKSA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHsgc3BlY2lhbGl0eUZvb3RlckRhdGE6IGNiIH0pO1xuICAgICAgICAvLyB9KTtcbiAgICAgICAgaWYoIXRoaXMucHJvcHMuc3RhdGljX2Zvb3Rlcl9kYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldFNwZWNpYWxpdHlGb290ZXJEYXRhKCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2VsZWN0ZWRMb2NhdGlvbiA9ICcnXG4gICAgICAgIGxldCBsYXQgPSAyOC42NDQ4MDBcbiAgICAgICAgbGV0IGxvbmcgPSA3Ny4yMTY3MjFcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbikge1xuICAgICAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbiA9IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbjtcbiAgICAgICAgICAgIGxhdCA9IHNlbGVjdGVkTG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubGF0XG4gICAgICAgICAgICBsb25nID0gc2VsZWN0ZWRMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sbmdcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGF0ID09PSAnZnVuY3Rpb24nKSBsYXQgPSBsYXQoKVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsb25nID09PSAnZnVuY3Rpb24nKSBsb25nID0gbG9uZygpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb3BzLmdldE9mZmVyTGlzdChsYXQsIGxvbmcpO1xuXG4gICAgICAgIGxldCBkYXRhID0geyAnZXZlbnQnOiBcInZpZXdIb21lXCIgfVxuICAgICAgICBcbiAgICAgICAgLy9iYWNrZ3JvdW5kIGNpcmNsZSBhbmltYXRpb25cbiAgICAgICAgaWYod2luZG93KXtcbiAgICAgICAgICAgIGNvbnN0IG1WaWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5WaWV3Jyk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgICgpID0+IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL2JhY2tncm91bmQgY2lyY2xlIGFuaW1hdGlvbVxuICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvblkgPSB3aW5kb3cucGFnZVlPZmZzZXQvMjtcbiAgICAgICAgICAgICAgICBtVmlldy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSBgMCAtJHtwb3NpdGlvbll9cHhgO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAvL2JhY2tncm91bmQgY2lyY2xlIGFuaW1hdGlvblxuXG4gICAgICAgIC8vY291bnQgYW5pbWF0aW9uXG4gICAgICAgIFxuICAgICAgICBjb25zdCBjVmFsMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudE51bScpO1xuICAgICAgICBjb25zdCBjVmFsMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudE51bTInKTtcbiAgICAgICAgdGhpcy5hbmltYXRlVmFsdWUoY1ZhbDEpO1xuICAgICAgICB0aGlzLmFuaW1hdGVWYWx1ZShjVmFsMik7IFxuICAgICAgICAvL2NvdW50IGFuaW1hdGlvblxuICAgICAgICBDUklURU8uc2VuZERhdGEoZGF0YSlcbiAgICB9XG5cbiAgICBhbmltYXRlVmFsdWUgPSAob2JqKSA9PiB7XG4gICAgICAgIGxldCBzdGFydCA9IDI1MDAwO1xuICAgICAgICBsZXQgZW5kID0gbnVsbDtcbiAgICAgICAgbGV0IGR1cmF0aW9uID0gMzAwMDtcbiAgICAgICAgaWYgKG9iaikge1xuICAgICAgICAgICAgLy8gc2F2ZSBzdGFydGluZyB0ZXh0IGZvciBsYXRlciAoYW5kIGFzIGEgZmFsbGJhY2sgdGV4dCBpZiBKUyBub3QgcnVubmluZyBhbmQvb3IgZ29vZ2xlKVxuICAgICAgICAgICAgbGV0IHRleHRTdGFydGluZyA9IG9iai5pbm5lckhUTUw7XG4gICAgXG4gICAgICAgICAgICAvLyByZW1vdmUgbm9uLW51bWVyaWMgZnJvbSBzdGFydGluZyB0ZXh0IGlmIG5vdCBzcGVjaWZpZWRcbiAgICAgICAgICAgIC8vZW5kID0gZW5kIHx8IHBhcnNlSW50KHRleHRTdGFydGluZy5yZXBsYWNlKC9cXEQvZywgXCJcIikpO1xuICAgICAgICAgICAgZW5kID0gZW5kIHx8IHBhcnNlRmxvYXQodGV4dFN0YXJ0aW5nKTtcblxuICAgICAgICAgICAgbGV0IHJhbmdlID0gZW5kIC0gc3RhcnQ7XG4gICAgXG4gICAgICAgICAgICAvLyBubyB0aW1lciBzaG9ydGVyIHRoYW4gNTBtcyAobm90IHJlYWxseSB2aXNpYmxlIGFueSB3YXkpXG4gICAgICAgICAgICBsZXQgbWluVGltZXIgPSAxMDA7XG4gICAgXG4gICAgICAgICAgICAvLyBjYWxjIHN0ZXAgdGltZSB0byBzaG93IGFsbCBpbnRlcmVkaWF0ZSB2YWx1ZXNcbiAgICAgICAgICAgIGxldCBzdGVwVGltZSA9IE1hdGguYWJzKE1hdGguZmxvb3IoZHVyYXRpb24gLyByYW5nZSkpO1xuICAgIFxuICAgICAgICAgICAgLy8gbmV2ZXIgZ28gYmVsb3cgbWluVGltZXJcbiAgICAgICAgICAgIHN0ZXBUaW1lID0gTWF0aC5tYXgoc3RlcFRpbWUsIG1pblRpbWVyKTtcbiAgICBcbiAgICAgICAgICAgIC8vIGdldCBjdXJyZW50IHRpbWUgYW5kIGNhbGN1bGF0ZSBkZXNpcmVkIGVuZCB0aW1lXG4gICAgICAgICAgICBsZXQgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBsZXQgZW5kVGltZSA9IHN0YXJ0VGltZSArIGR1cmF0aW9uO1xuICAgICAgICAgICAgbGV0IHRpbWVyO1xuICAgICAgICAgICAgLy9jb25zdCBwb3NZID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICAgICAgY29uc3QgcnVuID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVtYWluaW5nID0gTWF0aC5tYXgoKGVuZFRpbWUgLSBub3cpIC8gZHVyYXRpb24sIDApO1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IE1hdGgucm91bmQoZW5kIC0gKHJlbWFpbmluZyAqIHJhbmdlKSk7XG4gICAgICAgICAgICAgICAgLy8gcmVwbGFjZSBudW1lcmljIGRpZ2l0cyBvbmx5IGluIHRoZSBvcmlnaW5hbCBzdHJpbmdcbiAgICAgICAgICAgICAgICBvYmouaW5uZXJIVE1MID0gdGV4dFN0YXJ0aW5nLnJlcGxhY2UoLyhbMC05XSspL2csIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKT0+e1xuICAgICAgICAgICAgICAgIGlmICggd2luZG93LnBhZ2VZT2Zmc2V0ID49IDEwMDApe1xuICAgICAgICAgICAgICAgICAgICB0aW1lciA9IHNldEludGVydmFsKHJ1biwgc3RlcFRpbWUpO1xuICAgICAgICAgICAgICAgICAgICBydW4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBuYXZpZ2F0ZVRvKHdoZXJlLCB0eXBlLCBkYXRhLCBlKSB7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RTZWFyY2hUeXBlKHR5cGUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdoZXJlID09ICcvY2hhdCcpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHdoZXJlLCBkYXRhKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2god2hlcmUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBZ2UoYmlydGhkYXkpIHtcbiAgICAgICAgYmlydGhkYXkgPSBuZXcgRGF0ZShiaXJ0aGRheSlcbiAgICAgICAgdmFyIGFnZURpZk1zID0gRGF0ZS5ub3coKSAtIGJpcnRoZGF5LmdldFRpbWUoKTtcbiAgICAgICAgdmFyIGFnZURhdGUgPSBuZXcgRGF0ZShhZ2VEaWZNcyk7IC8vIG1pbGlzZWNvbmRzIGZyb20gZXBvY2hcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKGFnZURhdGUuZ2V0VVRDRnVsbFllYXIoKSAtIDE5NzApO1xuICAgIH1cblxuICAgIHNlYXJjaExhYiA9ICh0ZXN0ICkgPT57XG4gICAgICAgIGxldCBkYXRhXG4gICAgICAgIGlmICh0ZXN0LnRvcFBhY2thZ2VzKSB7XG4gICAgICAgICAgICB0ZXN0LnR5cGUgPSAncGFja2FnZSdcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0UGFja2FnZUlkKHRlc3QuaWQsIHRydWUpXG4gICAgICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnU2VsZWN0ZWRIZWFsdGhQYWNrYWdlJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnc2VsZWN0ZWQtaGVhbHRoLXBhY2thZ2UnLCAnc2VsZWN0ZWQnOiB0ZXN0Lm5hbWUgfHwgJycsICdzZWxlY3RlZElkJzogdGVzdC5pZCB8fCAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGVzdC50eXBlID0gJ3Rlc3QnXG4gICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKCd0ZXN0JywgdGVzdCwgdHJ1ZSlcbiAgICAgICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdTZWxlY3RlZEJvb2tUZXN0JywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnc2VsZWN0ZWQtYm9vay10ZXN0JywgJ3NlbGVjdGVkJzogdGVzdC5uYW1lIHx8ICcnLCAnc2VsZWN0ZWRJZCc6IHRlc3QuaWQgfHwgJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgaWYgKHRlc3QudG9wUGFja2FnZXMpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvc2VhcmNocGFja2FnZXMnKVxuICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9sYWIvc2VhcmNocmVzdWx0cycpXG4gICAgICAgICAgICB9LCAxMDApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWFyY2hEb2N0b3IgPSAoc3BlY2lhbGl0eSkgPT57XG4gICAgICAgIGlmIChzcGVjaWFsaXR5LnVybCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC8ke3NwZWNpYWxpdHkudXJsfWApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzcGVjaWFsaXR5LnR5cGUgPSAnc3BlY2lhbGl0eSdcbiAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlT1BEQ3JpdGVyaWEoJ3NwZWNpYWxpdHknLCBzcGVjaWFsaXR5LCB0cnVlKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9vcGQvc2VhcmNocmVzdWx0cycpXG4gICAgICAgICAgICB9LCAxMDApXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1NlbGVjdGVkRG9jdG9yU3BlY2lhbGl6YXRpb25zJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnc2VsZWN0ZWQtZG9jdG9yLXNwZWNpYWxpemF0aW9ucycsICdzZWxlY3RlZCc6IHNwZWNpYWxpdHkubmFtZSB8fCAnJywgJ3NlbGVjdGVkSWQnOiBzcGVjaWFsaXR5LmlkIHx8ICcnXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICB9XG5cbiAgICBnb1RvU2VhcmNoID0gKGRhdGEpPT57XG4gICAgICAgIGlmIChkYXRhLnR5cGUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0U2VhcmNoVHlwZShkYXRhLnR5cGUpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goZGF0YS53aGVyZSlcbiAgICB9XG5cbiAgICBzZWFyY2hIb3NwaXRhbHMgPSAoZGF0YSkgPT4ge1xuICAgICAgICBcbiAgICAgICAgbGV0IGd0bURhdGEgPSB7fVxuICAgICAgICBpZihkYXRhLnRvcEhvc3BpdGFscykge1xuICAgICAgICAgICAgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSG9tZVdpZGdldEhvc3BpdGFsQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2hvbWUtd2lkZ2V0LWhvc3BpdGFsLWNsaWNrZWQnLCAnc2VsZWN0ZWQnOiAnJywgJ3NlbGVjdGVkSWQnOiBkYXRhLmlkIHx8ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSG9tZVdpZGdldE5lYXJieUhvc3BpdGFsQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2hvbWUtd2lkZ2V0LW5lYXJieS1ob3NwaXRhbC1jbGlja2VkJywgJ3NlbGVjdGVkJzogJycsICdzZWxlY3RlZElkJzogZGF0YS5pZCB8fCAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuXG4gICAgICAgIGxldCByZWRpcmVjdFVybCA9ICcnXG5cbiAgICAgICAgaWYoZGF0YS51cmwpIHtcbiAgICAgICAgICAgIHJlZGlyZWN0VXJsID0gYC8ke2RhdGEudXJsfWBcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgcmVkaXJlY3RVcmwgPSBgL2lwZC9ob3NwaXRhbC8ke2RhdGEuaWR9YFxuICAgICAgICB9XG5cbiAgICAgICAgaWYoZGF0YS5pc19pcGRfaG9zcGl0YWwpIHtcbiAgICAgICAgICAgIHJlZGlyZWN0VXJsKz0gYD9zaG93UG9wdXA9dHJ1ZWBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChyZWRpcmVjdFVybClcbiAgICB9XG5cbiAgICBnb3RUb1NpZ251cCgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0hvbWVwYWdlQmFubmVyU2lnbnVwQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2hvbWVwYWdlLWJhbm5lci1zaWdudXAtY2xpY2tlZCdcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3VzZXI/cmVmPWhvbWUnKVxuICAgIH1cblxuICAgIGdvdFRvRG9jdG9yU2lnbnVwKGlzTGFiKSB7XG4gICAgICAgIGxldCBkYXRhXG4gICAgICAgIGlmIChpc0xhYikge1xuICAgICAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1J1bkxhYkJhbm5lckNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdydW4tbGFiLWJhbm5lci1jbGlja2VkJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1J1bkNsaW5pY0Jhbm5lckNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdydW4tY2xpbmljLWJhbm5lci1jbGlja2VkJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvZG9jdG9yc2lnbnVwJylcbiAgICB9XG5cbiAgICBnZXRUb3BMaXN0KGxpc3QpIHtcbiAgICAgICAgbGV0IHRvcExpc3QgPSBbXVxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPiA1KSB7XG4gICAgICAgICAgICB0b3BMaXN0ID0gbGlzdC5zbGljZSgwLCA1KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9wTGlzdCA9IGxpc3RcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9wTGlzdFxuICAgIH1cblxuICAgIG9yZGVyTWVkQ2xpY2soc291cmNlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93UG9wdXA6IHRydWUsIGNsaWNrZWRPbjogc291cmNlIH0sICgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jb250aW51ZUNsaWNrKCksIDEwMDApO1xuICAgICAgICB9KVxuICAgICAgICBpZiAoc291cmNlID09PSAnbmV3T3JkZXInKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0Rlc2t0b3BOZXdPcmRlckNsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnZGVza3RvcC1uZXctb3JkZXItY2xpY2snXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNvdXJjZSA9PT0gJ3ByZXZPcmRlcicpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnRGVza3RvcFByZXZpb3VzT3JkZXJDbGljaycsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2Rlc2t0b3AtcHJldmlvdXMtb3JkZXItY2xpY2snXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29udGludWVDbGljaygpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAoL21vYmlsZS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuY2xpY2tlZE9uID09PSAnbmV3T3JkZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKENPTkZJRy5QSEFSTUVBU1lfTkVXX09SREVSX0lGUkFNRV9VUkwsICdfYmxhbmsnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oQ09ORklHLlBIQVJNRUFTWV9QUkVWX09SREVSX0lGUkFNRV9VUkwsICdfYmxhbmsnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHNob3dQb3B1cDogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDEwMDApXG4gICAgfVxuXG4gICAgaGlkZVBvcHVwKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1BvcHVwOiBmYWxzZSB9KVxuICAgIH1cblxuICAgIHNiaUJhbm5lckNsaWNrZWQ9ICgpPT57XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnU0JJR09MREJBTk5FUicsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3NiaS1nb2xkLWJhbm5lcidcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3ZpcC1nb2xkLWRldGFpbHM/aXNfZ29sZD10cnVlJnNvdXJjZT1tb2JpbGUtc2JpLWdvbGQtY2xpY2tlZCZsZWFkX3NvdXJjZT1Eb2NwcmltZScpXG4gICAgfVxuXG4gICAgY2xvc2VMZWFkUG9wdXAoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93X3BvcHVwOiBmYWxzZSB9KVxuICAgIH1cbiAgICBcbiAgICBuZWFyYnlIb3NwaXRhbFZpZXdBbGxDbGlja2VkID0gKCk9PntcbiAgICAgICAgbGV0IGd0bURhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0hvbWVXaWRnZXRIb3NwaXRhbFZpZXdBbGxDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnaG9tZS13aWRnZXQtaG9zcGl0YWwtdmlldy1hbGwtY2xpY2tlZCdcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuICAgICAgICB0aGlzLnByb3BzLm1lcmdlSXBkQ3JpdGVyaWEoe1xuICAgICAgICAgICAgY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXM6IFtdLFxuICAgICAgICAgICAgbmV4dFNlbGVjdGVkQ3JpdGVyaWFzOiBbXVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2lwZC9zZWFyY2hIb3NwaXRhbHNgKSAgIFxuICAgIH1cblxuICAgIGFmdGVyVXNlckxvZ2luID0gKCk9PntcbiAgICAgICAgbGV0IGlzX3VzZXJfaW5zdXJhbmNlX2FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBsZXQgdXNlcl9pbnN1cmFuY2Vfc3RhdHVzID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGUgJiYgdGhpcy5wcm9wcy5wcm9maWxlcyAmJiB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGVdKSB7XG4gICAgICAgICAgICB1c2VyX2luc3VyYW5jZV9zdGF0dXMgPSB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGVdLmluc3VyYW5jZV9zdGF0dXNcbiAgICAgICAgfVxuICAgICAgICBpc191c2VyX2luc3VyYW5jZV9hY3RpdmUgPSAodXNlcl9pbnN1cmFuY2Vfc3RhdHVzPT0xIHx8IHVzZXJfaW5zdXJhbmNlX3N0YXR1cz09NSB8fCB1c2VyX2luc3VyYW5jZV9zdGF0dXM9PTQgfHwgdXNlcl9pbnN1cmFuY2Vfc3RhdHVzPT03KVxuICAgICAgICBpZihpc191c2VyX2luc3VyYW5jZV9hY3RpdmUpe1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIkZvciBpbnN1cmVkIGN1c3RvbWVycywgcHJlc2NyaXB0aW9uIHVwbG9hZCBpcyByZXF1aXJlZCBhdCB0aGUgdGltZSBvZiBib29raW5nXCIgfSlcbiAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc191c2VyX2luc3VyYW5jZV9hY3RpdmU6IHRydWUgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldENvcnBvcmF0ZUxlYWQgPSAoKT0+e1xuICAgICAgICBsZXQgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQ29ycG9yYXRlSG9tZVBhZ2VDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY29ycG9yYXRlLWhvbWUtcGFnZS1jbGlja2VkJ1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5Db3Jwb3JhdGVCbG9jazogdHJ1ZX0pXG4gICAgfVxuXG4gICAgY2FuY2VsT3ZlcmxheSA9ICgpPT57XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5Db3Jwb3JhdGVCbG9jazogZmFsc2V9KSAgIFxuICAgIH1cblxuICAgIHB1c2hMZWFkcyA9IChkYXRhKT0+e1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh3aW5kb3cubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBsZXQgcGFyYW1zID0gey4uLmRhdGF9O1xuICAgICAgICBpZihwYXJzZWQpe1xuICAgICAgICAgICAgcGFyYW1zWydzb3VyY2UnXSA9IHtcbiAgICAgICAgICAgICAgICB1dG1fc291cmNlOiBwYXJzZWQudXRtX3NvdXJjZXx8JycsXG4gICAgICAgICAgICAgICAgdXRtX3Rlcm06IHBhcnNlZC51dG1fdGVybXx8JycsXG4gICAgICAgICAgICAgICAgdXRtX21lZGl1bTogcGFyc2VkLnV0bV9tZWRpdW18fCcnLFxuICAgICAgICAgICAgICAgIHV0bV9jYW1wYWlnbjogcGFyc2VkLnV0bV9jYW1wYWlnbnx8JydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLk5vbklwZEJvb2tpbmdMZWFkKHBhcmFtcykudGhlbigoKT0+e1xuICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlJlc3BvbnNlIFN1Ym1pdHRlZCBTdWNjZXNzZnVsbHlcIiB9KTtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsT3ZlcmxheSgpO1xuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9XG5cbiAgICBjbGlja2VkR29sZEJhbm5lciA9ICgpPT57XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ01vYmlsZUhvbWVQYWdlR29sZEJhbm5lckNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdtb2JpbGUtaG9tZXBhZ2UtZ29sZC1iYW5uZXItY2xpY2tlZCdcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KTtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy92aXAtZ29sZC1kZXRhaWxzP2lzX2dvbGQ9dHJ1ZSZzb3VyY2U9bW9iaWxlLWhvbWUtcGFnZS1nb2xkLWJhbm5lciZsZWFkX3NvdXJjZT1Eb2NwcmltZScpXG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpe1xuXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBsZXQgdG9wU3BlY2lhbGl6YXRpb25zID0gW11cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc3BlY2lhbGl6YXRpb25zICYmIHRoaXMucHJvcHMuc3BlY2lhbGl6YXRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgdG9wU3BlY2lhbGl6YXRpb25zID0gdGhpcy5wcm9wcy5zcGVjaWFsaXphdGlvbnM7Ly8uc2xpY2UoMCwgOSkvL3RoaXMuZ2V0VG9wTGlzdCh0aGlzLnByb3BzLnNwZWNpYWxpemF0aW9ucylcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0b3BUZXN0cyA9IFtdXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvbW1vbl90ZXN0cyAmJiB0aGlzLnByb3BzLmNvbW1vbl90ZXN0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRvcFRlc3RzID0gdGhpcy5wcm9wcy5jb21tb25fdGVzdHM7Ly8uc2xpY2UoMCwgOSkvL3RoaXMuZ2V0VG9wTGlzdCh0aGlzLnByb3BzLmNvbW1vbl90ZXN0cylcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0b3BQYWNrYWdlcyA9IFtdXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvbW1vbl9wYWNrYWdlICYmIHRoaXMucHJvcHMuY29tbW9uX3BhY2thZ2UubGVuZ3RoKSB7XG4gICAgICAgICAgICB0b3BQYWNrYWdlcyA9IHRoaXMucHJvcHMuY29tbW9uX3BhY2thZ2UvL3RoaXMuZ2V0VG9wTGlzdCh0aGlzLnByb3BzLmNvbW1vbl9wYWNrYWdlKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFydGljbGVzID0gdGhpcy5wcm9wcy5hcnRpY2xlcyB8fCBbXVxuICAgICAgICBcbiAgICAgICAgbGV0IGlzU0JJID0gdGhpcy5wcm9wcy5tZXJnZVN0YXRlICYmIGRvY3VtZW50ICYmIHR5cGVvZiBkb2N1bWVudD09J29iamVjdCcgJiYgZG9jdW1lbnQubG9jYXRpb24gJiYgZG9jdW1lbnQubG9jYXRpb24uaG9zdCAmJiBkb2N1bWVudC5sb2NhdGlvbi5ob3N0LmluY2x1ZGVzKCdzYmknKVxuICAgICAgICBsZXQgc2hvd1BhY2thZ2VTdHJpcCA9IHRoaXMucHJvcHMuY29tcGFyZV9wYWNrYWdlcyAmJiB0aGlzLnByb3BzLmNvbXBhcmVfcGFja2FnZXMubGVuZ3RoID4gMCAmJiAhdGhpcy5wcm9wcy5pc1BhY2thZ2VcblxuICAgICAgICBsZXQgZGVmYXVsdFVzZXJQcm9maWxlID0gbnVsbFxuICAgICAgICBpZiAodGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZSAmJiB0aGlzLnByb3BzLnByb2ZpbGVzICYmIHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0pIHtcbiAgICAgICAgICAgIGRlZmF1bHRVc2VyUHJvZmlsZSA9IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV07XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2hvd0dvbGRCYW5uZXIgPSBmYWxzZTtcblxuICAgICAgICBpZih0aGlzLnByb3BzLnVzZXJfZGV0YWlsX2ZldGNoZWQpIHtcblxuICAgICAgICAgICAgaWYoZGVmYXVsdFVzZXJQcm9maWxlICYmIE9iamVjdC5rZXlzKGRlZmF1bHRVc2VyUHJvZmlsZSkubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgICAgICBzaG93R29sZEJhbm5lciA9ICEodGhpcy5wcm9wcy5pc19hbnlfdXNlcl9idXlfZ29sZCB8fCBkZWZhdWx0VXNlclByb2ZpbGUuaW5zdXJhbmNlX3N0YXR1cyA9PSAxIHx8IGRlZmF1bHRVc2VyUHJvZmlsZS5pbnN1cmFuY2Vfc3RhdHVzID09IDUgfHwgZGVmYXVsdFVzZXJQcm9maWxlLmluc3VyYW5jZV9zdGF0dXMgPT0gNHx8IGRlZmF1bHRVc2VyUHJvZmlsZS5pbnN1cmFuY2Vfc3RhdHVzID09IDcpXG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgc2hvd0dvbGRCYW5uZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoIVNUT1JBR0UuY2hlY2tBdXRoKCkpe1xuICAgICAgICAgICAgc2hvd0dvbGRCYW5uZXIgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHAtMFwiPlxuICAgICAgICAgICAgICAgICAgICB7LyoqKioqKiBIZWFkZXIgKioqKioqKioqL31cbiAgICAgICAgICAgICAgICAgICAgPERlc2t0b3BQcm9maWxlSGVhZGVyIGhvbWVQYWdlPXt0cnVlfSBzaG93U2VhcmNoPXt0cnVlfSBzaG93UGFja2FnZVN0cmlwPXtzaG93UGFja2FnZVN0cmlwfSBuZXdfZml4ZWRfaGVhZGVyPXsxfS8+XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5vcGVuQ29ycG9yYXRlQmxvY2s/XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29ycG9yYXRlTGVhZFBvcHVwIGNhbmNlbE92ZXJsYXk9e3RoaXMuY2FuY2VsT3ZlcmxheX0gcHVzaExlYWRzPXt0aGlzLnB1c2hMZWFkc30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgey8qKioqKiogaG9tZXBhZ2UgIHZpZXcgKioqKioqKioqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXctbWFpbi12aWV3XCIgaWQ9XCJtYWluVmlld1wiPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0dvbGRCYW5uZXI/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FyZC1ibG9jay1yb3cgYmFubmVyLXNsaWRlci1yb3cgbWJsLWJhbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNTQkkgJiYgdGhpcy5wcm9wcy5vZmZlckxpc3QgJiYgdGhpcy5wcm9wcy5vZmZlckxpc3QuZmlsdGVyKHggPT4geC5zbGlkZXJfbG9jYXRpb24gPT09ICdob21lX3BhZ2UnKS5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYW5uZXJDYXJvdXNlbCB7Li4udGhpcy5wcm9wc30gc2xpZGVyTG9jYXRpb249XCJob21lX3BhZ2VcIiAvPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qKioqKiogIGRlc2t0b3AgYmFubmVyICoqKioqKioqKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjYXJkLWJsb2NrLXJvdyBiYW5uZXItc2xpZGVyLXJvdyBkLWJhbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNTQkkgJiYgdGhpcy5wcm9wcy5vZmZlckxpc3QgJiYgdGhpcy5wcm9wcy5vZmZlckxpc3QuZmlsdGVyKHggPT4geC5zbGlkZXJfbG9jYXRpb24gPT09ICdob21lX3BhZ2UnKS5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYW5uZXJDYXJvdXNlbCB7Li4udGhpcy5wcm9wc30gc2xpZGVyTG9jYXRpb249XCJob21lX3BhZ2VcIiAvPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyoqKioqKiAgZGVza3RvcCBiYW5uZXIgKioqKioqKioqL30gIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyoqKioqKiAgZnVsbCB3aWR0aCBiYW5uZXIgKioqKioqKioqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxVcENvbWluZ0FwcG9pbnRtZW50VmlldyB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImQtbm9uZSBmdWxsLWJhbm5lci1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOicxMDAlJ319IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9tZWRpYS93ZWIvY3VzdG9tX2ltYWdlcy9Hb2xkX2hvbWUtbWluXzEucG5nXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnTW9iaWxlTGVmdE1lbnVHb2xkQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ21vYmlsZS1sZWZ0bWVudS1nb2xkLWNsaWNrZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdmlwLWdvbGQtZGV0YWlscz9pc19nb2xkPXRydWUmc291cmNlPW1vYmlsZS1sZWZ0bWVudS1nb2xkLWNsaWNrZWQmbGVhZF9zb3VyY2U9RG9jcHJpbWUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIG9uQ2xpY2s9eyhlKT0+ZS5wcmV2ZW50RGVmYXVsdCgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17dGhpcy5nZXRDb3Jwb3JhdGVMZWFkfSA+U3BlY2lhbCBwbGFucyBhdmFpbGFibGUgZm9yIENvcnBvcmF0ZXMgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3duLWljb24teWVsbG93XCI+Jmd0Ozwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKioqKioqICBtYmwgYmFubmVyICoqKioqKioqKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0dvbGRCYW5uZXI/Jyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FyZC1ibG9jay1yb3cgYmFubmVyLXNsaWRlci1yb3cgbWJsLWJhbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNTQkkgJiYgdGhpcy5wcm9wcy5vZmZlckxpc3QgJiYgdGhpcy5wcm9wcy5vZmZlckxpc3QuZmlsdGVyKHggPT4geC5zbGlkZXJfbG9jYXRpb24gPT09ICdob21lX3BhZ2UnKS5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYW5uZXJDYXJvdXNlbCB7Li4udGhpcy5wcm9wc30gc2xpZGVyTG9jYXRpb249XCJob21lX3BhZ2VcIiAvPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPiAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyoqKioqKiAgbWJsIGJhbm5lciAqKioqKioqKiovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyoqKioqKiAgdG9wIGhvc3BpdGFscyAqKioqKioqKiovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0dvbGRCYW5uZXI/PEdvbGRIb21lUGFnZUJhbm5lciBjbGlja2VkR29sZEJhbm5lcj17dGhpcy5jbGlja2VkR29sZEJhbm5lcn0vPjonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b3BfaG9zcGl0YWxzICYmIHRoaXMucHJvcHMudG9wX2hvc3BpdGFscy5sZW5ndGg/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhvbWVQYWdlV2lkZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9XCJUb3AgSG9zcGl0YWxzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdD17dGhpcy5wcm9wcy50b3BfaG9zcGl0YWxzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3BIb3NwaXRhbHM9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlPSdob21lX3RvcF9oc3B0bCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeU9iaiA9e3RoaXMucHJvcHMuaGlzdG9yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoRnVuYz17dGhpcy5zZWFyY2hIb3NwaXRhbHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5uZWFyYnlIb3NwaXRhbHMgJiYgdGhpcy5wcm9wcy5uZWFyYnlIb3NwaXRhbHMuaG9zcGl0YWxzICYmIHRoaXMucHJvcHMubmVhcmJ5SG9zcGl0YWxzLmhvc3BpdGFscy5sZW5ndGg/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhvbWVQYWdlV2lkZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9XCJIb3NwaXRhbHMgTmVhciB5b3VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0PXt0aGlzLnByb3BzLm5lYXJieUhvc3BpdGFscy5ob3NwaXRhbHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlPSdob21lX25lYXJieS1oc3B0bCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeU9iaiA9e3RoaXMucHJvcHMuaGlzdG9yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoRnVuYz17dGhpcy5zZWFyY2hIb3NwaXRhbHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyoqKioqKiAgZG9jdG9yIGFwb2ludG1lbnQgc2VjdGlvbiAqKioqKioqKiovfVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcFNwZWNpYWxpemF0aW9ucyAmJiB0b3BTcGVjaWFsaXphdGlvbnMubGVuZ3RoP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIb21lUGFnZVdpZGdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPVwiQm9vayBEb2N0b3IgQXBwb2ludG1lbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRUZXh0PSBcIlNlYXJjaCBtb3JlIHNwZWNpYWxpemF0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0QnV0dG9uQ2xpY2tlZCA9IHt0aGlzLmdvVG9TZWFyY2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaEZ1bmM9e3RoaXMuc2VhcmNoRG9jdG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0PXt0b3BTcGVjaWFsaXphdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlPSdob21lX3RvcF9zcGVjeidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzY291bnQ9XCI1MCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5T2JqID17dGhpcy5wcm9wcy5oaXN0b3J5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwib3BkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2VG89XCIvc2VhcmNoP2Zyb209aG9tZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50PXsxMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoVHlwZT1cInNwZWNpYWxpemF0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpc3RvcnlPYmo9e3RoaXMucHJvcHMuaGlzdG9yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25PYmo9e3RoaXMucHJvcHMubG9jYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFNlYXJjaFR5cGU9e3RoaXMucHJvcHMuc2VsZWN0U2VhcmNoVHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyoqKioqKiAgUG9wdWxhciBoZWFsdGggcGFja2FnZXMgc2VjdGlvbiAqKioqKioqKiovfSAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3BQYWNrYWdlcyAmJiB0b3BQYWNrYWdlcy5sZW5ndGg/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhvbWVQYWdlV2lkZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9XCJQb3B1bGFyIEhlYWx0aCBQYWNrYWdlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0VGV4dD0gXCJWaWV3IGFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0QnV0dG9uQ2xpY2tlZCA9IHt0aGlzLmdvVG9TZWFyY2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcFBhY2thZ2VzPSB7dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdD17dG9wUGFja2FnZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaEZ1bmM9e3RoaXMuc2VhcmNoTGFifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZT0naG9tZV90b3BfcGNrZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeU9iaiA9e3RoaXMucHJvcHMuaGlzdG9yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhY2thZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZUbz1cIi9zZWFyY2hwYWNrYWdlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY291bnQ9ezh9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWFyY2hUeXBlPVwicGFja2FnZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBoaXN0b3J5T2JqPXt0aGlzLnByb3BzLmhpc3Rvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvY2F0aW9uT2JqPXt0aGlzLnByb3BzLmxvY2F0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWxlY3RTZWFyY2hUeXBlPXt0aGlzLnByb3BzLnNlbGVjdFNlYXJjaFR5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgey8qKioqKiogIEJvb2sgbGFiIHRlc3QgKioqKioqKioqL30gIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wVGVzdHMgJiYgdG9wVGVzdHMubGVuZ3RoP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIb21lUGFnZVdpZGdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPVwiQm9vayBMYWIgVGVzdHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodFRleHQ9IFwiU2VhcmNoIG1vcmUgdGVzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0QnV0dG9uQ2xpY2tlZCA9IHt0aGlzLmdvVG9TZWFyY2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q9e3RvcFRlc3RzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hGdW5jPXt0aGlzLnNlYXJjaExhYn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU9J2hvbWVfdG9wX3Rlc3RzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNjb3VudD1cIjUwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpc3RvcnlPYmogPXt0aGlzLnByb3BzLmhpc3Rvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJsYWJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZUbz1cIi9zZWFyY2g/ZnJvbT1ob21lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ9ezEwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc191c2VyX2luc3VyYW5jZV9hY3RpdmU9e3RoaXMuc3RhdGUuaXNfdXNlcl9pbnN1cmFuY2VfYWN0aXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5T2JqPXt0aGlzLnByb3BzLmhpc3Rvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uT2JqPXt0aGlzLnByb3BzLmxvY2F0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZnRlclVzZXJMb2dpbj17dGhpcy5hZnRlclVzZXJMb2dpbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZXM9e3RoaXMucHJvcHMucHJvZmlsZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFR5cGU9XCJ0ZXN0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFNlYXJjaFR5cGU9e3RoaXMucHJvcHMuc2VsZWN0U2VhcmNoVHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNfdXNlcl9pbnN1cmFuY2VfYWN0aXZlPycnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxQcmVzY3JpcHRpb25VcGxvYWQgaGlzdG9yeU9iaj17dGhpcy5wcm9wcy5oaXN0b3J5fSBpc19ob21lX3BhZ2U9e3RydWV9IGxvY2F0aW9uT2JqID0ge3RoaXMucHJvcHMubG9jYXRpb259IHByb2ZpbGVzPXt0aGlzLnByb3BzLnByb2ZpbGVzfSBhZnRlclVzZXJMb2dpbj17dGhpcy5hZnRlclVzZXJMb2dpbn0vPiAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGF0aWNDb250ZW50IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaWFuLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHsvKioqKioqICBvdGhlciBkZXRhaWxzICoqKioqKioqKi99XG5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FyZC1ibG9jay1yb3cgZGV0YWlsLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkRvd25sb2FkIHRoZSBBcHAgTm93PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG0tMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1sZy01IG90aGVyLWRldGFpbHMgcC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5PbmxpbmUgQ29uc3VsdGF0aW9uczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Qm9vayBEb2N0b3IgQXBwb2ludG1lbnRzIHRoZSBQcmltZSBXYXk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkRvY3RvcnM6IEZvciB5b3UsIE5lYXIgeW91PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Cb29rIExhYiBUZXN0cyBhbmQgRnJlZSBIZWFsdGggQ2hlY2stVXBzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TdG9yZSBNZWRpY2FsIFJlY29yZHM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvd25sb2FkLWxpbmtzIGQtZmxleCBhbGlnbi1pdGVtLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZG9jcHJpbWVhcHAucGFnZS5saW5rL0hvbWVwYWdlQXBwSW5zdGFsbEFuZHJvaWRcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMTgwXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCItMTJweFwifX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvZ29vZ2xlLXBsYXkucG5nXCJ9IGFsdD1cIkFuZHJvaWRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9kb2NwcmltZWFwcC5wYWdlLmxpbmsvSG9tZXBhZ2VBcHBJbnN0YWxsaU9TXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyB3aWR0aD1cIjE2MFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2lvcy5wbmdcIn0gYWx0PVwiaW9zXCIvPiAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1sZy03IGRlbW8tbWJsLXNjcmVlbi1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9kZW1vLW1ibC5wbmdcIn0gYWx0PVwiaW9zXCIvPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIHsvKioqKioqICBvdGhlciBkZXRhaWxzICoqKioqKioqKi99XG4gICAgICAgICAgICAgICAgICAgIHsvKioqKioqIGhvbWVwYWdlICB2aWV3ICoqKioqKioqKi99XG4gICAgICAgICAgICAgICAgICAgIHsvKioqKioqIGZvb3RlciAqKioqKioqKiovfVxuICAgICAgICAgICAgICAgICAgICA8Rml4ZWRNb2JpbGVGb290ZXIgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxGb290ZXIgc3BlY2lhbGl0eUZvb3RlckRhdGE9e3RoaXMucHJvcHMuc3RhdGljX2Zvb3Rlcl9kYXRhfS8+XG4gICAgICAgICAgICAgICAgICAgIHsvKioqKioqIGZvb3RlciAqKioqKioqKiovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKioqKioqIGNoYXQgdmlldyBidXR0b24gICoqKioqKioqKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLW5vbmUgbmV3LWNoYXQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdGJveC1tYWluIG1iLTNcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPENoYXRQYW5lbCAga2V5PVwiY2hhdFwiIGhvbWVQYWdlPXt0cnVlfSBvZmZlckxpc3Q9e3RoaXMucHJvcHMub2ZmZXJMaXN0fS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtYm94LWNpcmNsZSBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgZmxleC1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaGVpZ2h0PVwiMTdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jaGF0LnN2Z1wifSBhbHQ9XCJjaGF0XCIvPiAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkRvY3RvciA8YnIvPkNvbnN1bHRhdGlvbjwvaDY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL21pbmltaXplLnN2Z1wifSBhbHQ9XCJjYW5jZWxcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7LyoqKioqKiBjaGF0IHZpZXcgYnV0dG9uICAqKioqKioqKiovfVxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cblxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluVmlldzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtJztcblxuY2xhc3MgVG9wQ2hhdFdpZGdldCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXG5cdHdpZGdldENsaWNrKGtub3dNb3JlID0gZmFsc2UpIHtcblxuXHRcdC8vIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvbW9iaWxldmlld2NoYXQnKVxuXHRcdGlmIChrbm93TW9yZSkge1xuXHRcdFx0bGV0IGd0bURhdGEgPSB7XG5cdFx0XHRcdCdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSG9tZVZpcFdpZGdldENsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnaG9tZS12aXAtd2lkZ2V0LWNsaWNrJ1xuXHRcdFx0fVxuXHRcdFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bURhdGEgfSlcblx0XHRcdHRoaXMucHJvcHMuY2xlYXJWaXBTZWxlY3RlZFBsYW4oKVxuXHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy92aXAtZ29sZC1kZXRhaWxzP2lzX2dvbGQ9dHJ1ZSZzb3VyY2U9bW9iaWxlLWNoYXQtd2lkZ2V0LWdvbGQtY2xpY2tlZCZsZWFkX3NvdXJjZT1Eb2NwcmltZScpXG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCBndG1EYXRhID0ge1xuXHRcdFx0XHQnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0hvbWVDaGF0V2lkZ2V0Q2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdob21lLWNoYXQtd2lkZ2V0LWNsaWNrJ1xuXHRcdFx0fVxuXHRcdFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bURhdGEgfSlcblx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvbW9iaWxldmlld2NoYXQnKVxuXHRcdH1cblxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtbWQtbm9uZSBob21lLWR1by13aWRnZXRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCIgd2lkZ2V0IG1yYi0xMCBjdXJzb3ItcG50clwiIHN0eWxlPXt7IHBhZGRpbmc6ICc0cHggNnB4JywgYm9yZGVyQm90dG9tOiAnNXB4IHNvbGlkICNmZmI2MDEnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fSBvbkNsaWNrPXsoKSA9PiB0aGlzLndpZGdldENsaWNrKHRydWUpfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhvbWUtdmlwLWNvbnRcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZG9jLWF2YXRhclwiPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHN0eWxlPXt7d2lkdGg6IDMwfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9nb2xkLWxnLnBuZyd9IC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgZmxleDogMSB9fSA+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTcwMFwiIHN0eWxlPXt7IGZvbnRTaXplOiAxMiB9fT5CZWNvbWUgYSBEb2NwcmltZSBHb2xkIG1lbWJlcjxzcGFuIGNsYXNzTmFtZT1cInZpcC10cC1zdWItdHh0XCI+U2F2ZSBtb3JlIHdpdGggZXhjbHVzaXZlIG1lbWJlcnNoaXA8L3NwYW4+PC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjaGF0LW5vdy1idG4gdGV4dC1yaWdodFwiPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+S25vdyBNb3JlPC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCIgd2lkZ2V0IG1yYi0xMCBjdXJzb3ItcG50clwiIHN0eWxlPXt7IHBhZGRpbmc6ICc0cHggNnB4JywgYm9yZGVyQm90dG9tOiAnNXB4IHNvbGlkICM0Mjg5ZmUnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fSBvbkNsaWNrPXsoKSA9PiB0aGlzLndpZGdldENsaWNrKCl9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaG9tZS12aXAtY29udFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkb2MtYXZhdGFyXCI+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9jaGF0LWljb24ucG5nJ30gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBmbGV4OiAxIH19ID5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNzAwXCIgc3R5bGU9e3sgZm9udFNpemU6IDEyIH19Pk9ubGluZSBEb2N0b3IgQ29uc3VsdGF0aW9uPHNwYW4gY2xhc3NOYW1lPVwidmlwLXRwLXN1Yi10eHRcIj5UYWxrIHRvIHRvcCBkb2N0b3JzIHdpdGhvdXQgYW55IHdhaXQgdGltZXM8L3NwYW4+PC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjaGF0LW5vdy1idG4gdGV4dC1yaWdodFwiPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+Q29uc3VsdCBOb3c8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9wQ2hhdFdpZGdldCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5cbmNsYXNzIEhvbWVQYWdlUGFja2FnZUNhdGVnb3J5IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG5cbiAgICBuYXZpZ2F0ZVRvKFBrZ0RhdGEsIGUpe1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSG9tZVBhZ2VDb21wYXJlUGFja2FnZUNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdob21lLXBhZ2UtY29tcGFyZS1wYWNrYWdlLWNsaWNrZWQnLCAncGFja2FnZV9pZCc6IFBrZ0RhdGFcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgIGxldCBwYWNrYWdlcz17fVxuICAgICAgICBsZXQgc2VsZWN0ZWRQa2dDb21wYXJlSWRzPVtdXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeU9iai5wdXNoKCcvcGFja2FnZS9jb21wYXJlP2NhdGVnb3J5X2lkcz0nKyBQa2dEYXRhLmlkKVxuICAgIH1cblxuICAgIHNjcm9sbCh0eXBlKSB7XG4gICAgICAgIHZhciBlbG1udCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9wX3BrZ0NhdFwiKVxuICAgICAgICBsZXQgb3V0ZXJEaXZXaWR0aCA9IGVsbW50Lm9mZnNldFdpZHRoXG4gICAgICAgIGxldCBjaGlsZERpdldpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG9wX3BrZ0NhdCcpWzBdLm9mZnNldFdpZHRoXG4gICAgICAgIGxldCBjYXJkQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0b3BfcGtnQ2F0JylbMF0uY2hpbGRFbGVtZW50Q291bnRcbiAgICAgICAgbGV0IGNhcmRXaWR0aCA9IE1hdGguY2VpbChjaGlsZERpdldpZHRoIC8gY2FyZENvdW50KVxuXG4gICAgICAgIGxldCBsZWZ0U2Nyb2xsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3BfcGtnQ2F0XCIpLnNjcm9sbExlZnRcbiAgICAgICAgbGV0IHNjcm9sbFZhbCA9IE1hdGguZmxvb3Iob3V0ZXJEaXZXaWR0aCAvIGNhcmRXaWR0aCkgKiBjYXJkV2lkdGhcbiAgICAgICAgbGV0IGNhcmRFbmQgPSBjYXJkQ291bnQgKiBjYXJkV2lkdGhcblxuICAgICAgICBpZiAodHlwZSA9PSAncmlnaHQnKSB7XG4gICAgICAgICAgICBlbG1udC5zY3JvbGwoeyBsZWZ0OiBsZWZ0U2Nyb2xsICsgc2Nyb2xsVmFsLCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgICAgICAgIGlmIChjYXJkRW5kIDw9IGxlZnRTY3JvbGwgKyBzY3JvbGxWYWwgKyBvdXRlckRpdldpZHRoKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnRBcnJvd19wa2dDYXQnKS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUmlnaHRBcnJvd19wa2dDYXQnKS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbG1udC5zY3JvbGwoeyBsZWZ0OiBsZWZ0U2Nyb2xsIC0gc2Nyb2xsVmFsLCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgICAgICAgIGlmIChsZWZ0U2Nyb2xsIC0gc2Nyb2xsVmFsIDw9IDApIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUmlnaHRBcnJvd19wa2dDYXQnKS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdEFycm93X3BrZ0NhdCcpLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIilcbiAgICAgICAgfVxuICAgIH1cbiAgICBWaWV3QWxsKCl7XG4gICAgICAgIGxldCBwYWNrYWdlX2NhdGVnb3J5X2lkcz1bXVxuICAgICAgIHRoaXMucHJvcHMudG9wX2RhdGEubWFwKChkYXRhLCBpKSA9PiB7XG4gICAgICAgICAgICBwYWNrYWdlX2NhdGVnb3J5X2lkcy5wdXNoKGRhdGEuaWQpXG4gICAgICAgfSlcbiAgICAgICB0aGlzLnByb3BzLmhpc3RvcnlPYmoucHVzaCgnL3NlYXJjaHBhY2thZ2VzP3BhY2thZ2VfY2F0ZWdvcnlfaWRzPScrIHBhY2thZ2VfY2F0ZWdvcnlfaWRzKVxuICAgIH1cblx0XG5cdHJlbmRlcigpe1xuXG5cdFx0cmV0dXJuKFxuXHRcdCAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWtnLXNsaWRlci1jb250YWluZXIgbXQtMTAgbWItMTBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ1NsaWRlckhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg1PkhlYWx0aCBQYWNrYWdlIENhdGVnb3JpZXM8L2g1PlxuICAgICAgICAgICAgICAgICAgICB7Lyo8c3BhbiBvbkNsaWNrPXt0aGlzLlZpZXdBbGwuYmluZCh0aGlzKX0+VmlldyBBbGw8L3NwYW4+Ki99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2dTbGlkZXJDb250YWluZXJcIiBpZD1cInRvcF9wa2dDYXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BrZ0NhcmRzTGlzdCBkLWlubGluZS1mbGV4IHN1Yi13ZC1jYXJkcyB0b3BfcGtnQ2F0Jz5cbiAgICAgICAgICAgICAgICAgICAgXHR7XG4gICAgICAgICAgICAgICAgICAgIFx0XHR0aGlzLnByb3BzLnRvcF9kYXRhLm1hcCgoZGF0YSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBcdFx0XHRyZXR1cm4gPGEgY2xhc3NOYW1lPVwicGtnY3VzdENhcmRzIGhlYWx0aC1wa2ctY2FyZC13aWR0aFwiIGtleT17aX0gb25DbGljaz17dGhpcy5uYXZpZ2F0ZVRvLmJpbmQodGhpcywgZGF0YSl9PlxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ2NhcmRJbWdDb250XCI+XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17ZGF0YS5zdmdfaWNvbj9kYXRhLnN2Z19pY29uOmRhdGEuaWNvbn0gLz5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBrZ3RzdE5hbWUgcHJjZC1oZWlnaHRcIj5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm5hbWV9XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgXHQ8L3A+XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlx0XHRcbiAgICAgICAgICAgICAgICAgICAgXHRcdH0pXG4gICAgICAgICAgICAgICAgICAgIFx0fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ2xmdFJodGJ0bmNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2ctYnRubGZ0IGQtbm9uZVwiIGlkPVwiUmlnaHRBcnJvd19wa2dDYXRcIiBvbkNsaWNrPXt0aGlzLnNjcm9sbC5iaW5kKHRoaXMsICdsZWZ0Jyl9PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnLWJ0bnJndFwiIGlkPVwibGVmdEFycm93X3BrZ0NhdFwiIG9uQ2xpY2s9e3RoaXMuc2Nyb2xsLmJpbmQodGhpcywgJ3JpZ2h0Jyl9PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VQYWNrYWdlQ2F0ZWdvcnkiLCJpbXBvcnQgTWFpblZpZXcgZnJvbSAnLi9Ib21lTmV3VmlldydcblxuZXhwb3J0IGRlZmF1bHQgTWFpblZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpPT4ge1xuXG4gICAgZnVuY3Rpb24gc2Nyb2xsKHR5cGUpIHtcbiAgICAgICAgbGV0IGRhdGFUeXBlID0gJ3N0YXRpY19yZXZpZXdfYmxjaydcbiAgICAgICAgdmFyIGVsbW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YVR5cGUpXG5cbiAgICAgICAgaWYoZWxtbnQpIHtcbiAgICAgICAgICAgIGxldCBvdXRlckRpdldpZHRoID0gZWxtbnQub2Zmc2V0V2lkdGhcbiAgICAgICAgICAgIGxldCBjYXJkQ291bnQgPSBlbG1udC5jaGlsZHJlbiAmJiBlbG1udC5jaGlsZHJlbi5sZW5ndGg/ZWxtbnQuY2hpbGRyZW4ubGVuZ3RoOjY7XG4gICAgICAgICAgICBsZXQgY2hpbGREaXZXaWR0aCA9IGVsbW50LnNjcm9sbFdpZHRoP2VsbW50LnNjcm9sbFdpZHRoOjMwMDA7XG4gICAgICAgICAgICBsZXQgY2FyZFdpZHRoID0gTWF0aC5jZWlsKGNoaWxkRGl2V2lkdGggLyBjYXJkQ291bnQpXG5cbiAgICAgICAgICAgIGxldCBsZWZ0U2Nyb2xsID0gZWxtbnQuc2Nyb2xsTGVmdFxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PSAncmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgZWxtbnQuc2Nyb2xsKHsgbGVmdDogbGVmdFNjcm9sbCArIG91dGVyRGl2V2lkdGgsIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgICAgICAgICAgIGlmIChjaGlsZERpdldpZHRoIDw9IChsZWZ0U2Nyb2xsICsgIDIqb3V0ZXJEaXZXaWR0aCApICkgIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZGF0YVR5cGV9X2xlZnRBcnJvd19oc3B0bGApLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZGF0YVR5cGV9X1JpZ2h0QXJyb3dfaHNwdGxgKS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsbW50LnNjcm9sbCh7IGxlZnQ6IGxlZnRTY3JvbGwgLSBvdXRlckRpdldpZHRoLCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgICAgICAgICAgICBpZiAobGVmdFNjcm9sbCAtIG91dGVyRGl2V2lkdGggPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtkYXRhVHlwZX1fUmlnaHRBcnJvd19oc3B0bGApLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZGF0YVR5cGV9X2xlZnRBcnJvd19oc3B0bGApLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXHRyZXR1cm4oXG5cdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdCB7LyoqKioqKiAgT3VyIFBhcnRuZXJzIHNlY3Rpb24gKioqKioqKioqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FyZC1ibG9jay1yb3dcIj5cbiAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmdy01MDAgb3VyLXBhcnRuZXItaGVhZGluZy10ZXh0XCI+T3VyIFBhcnRuZXJzPC9oNj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1zbGlkZXItY29udGFpbmVyIHBhcnRuZXItc2VjdGlvbiBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtLWNlbnRlciBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcnRuZXItaW1nLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL21lZGlhL3dlYi9jdXN0b21faW1hZ2VzL0ltYWdlXzEtMTJ4LnBuZ1wiIGFsdD1cIlBhcnRuZXJzXCIvPiAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFydG5lci1pbWctYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vbWVkaWEvd2ViL2N1c3RvbV9pbWFnZXMvSW1hZ2VfMi0xMngucG5nXCIgYWx0PVwiUGFydG5lcnNcIi8+ICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJ0bmVyLWltZy1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9tZWRpYS93ZWIvY3VzdG9tX2ltYWdlcy9JbWFnZV83MngucG5nXCIgYWx0PVwiUGFydG5lcnNcIi8+ICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJ0bmVyLWltZy1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9tZWRpYS93ZWIvY3VzdG9tX2ltYWdlcy9JbWFnZV85MngucG5nXCIgYWx0PVwiUGFydG5lcnNcIi8+ICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJ0bmVyLWltZy1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9tZWRpYS93ZWIvY3VzdG9tX2ltYWdlcy9JbWFnZV8xMDJ4LnBuZ1wiIGFsdD1cIlBhcnRuZXJzXCIvPiAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFydG5lci1pbWctYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vbWVkaWEvd2ViL2N1c3RvbV9pbWFnZXMvSW1hZ2VfMTgyeC5wbmdcIiAgYWx0PVwiUGFydG5lcnNcIi8+ICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicGFydG5lci1pbWctYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vbWVkaWEvd2ViL2N1c3RvbV9pbWFnZXMvSW1hZ2VfMTkyeC5wbmdcIiAgYWx0PVwiUGFydG5lcnNcIi8+ICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFydG5lci1pbWctYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWQgdHJhbnNmb3JtLXNjLTFcIiBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vbWVkaWEvd2ViL2N1c3RvbV9pbWFnZXMvSW1hZ2VfNi0xMngucG5nXCIgYWx0PVwiUGFydG5lcnNcIi8+ICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJ0bmVyLWltZy1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7dHJhbnNmb3JtOlwic2NhbGUoMC41KVwifX0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL21lZGlhL3dlYi9jdXN0b21faW1hZ2VzL0ltYWdlXzQtMTJ4LnBuZ1wiIGFsdD1cIlBhcnRuZXJzXCIvPiAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFydG5lci1pbWctYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3RyYW5zZm9ybTpcInNjYWxlKDAuNSlcIn19IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9tZWRpYS93ZWIvY3VzdG9tX2ltYWdlcy9JbWFnZV8zLTEyeC5wbmdcIiBhbHQ9XCJQYXJ0bmVyc1wiLz4gICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcnRuZXItaW1nLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3t0cmFuc2Zvcm06XCJzY2FsZSgwLjUpXCJ9fSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vbWVkaWEvd2ViL2N1c3RvbV9pbWFnZXMvSW1hZ2VfNTJ4LnBuZ1wiIGFsdD1cIlBhcnRuZXJzXCIvPiAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFydG5lci1pbWctYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vbWVkaWEvd2ViL2N1c3RvbV9pbWFnZXMvSW1hZ2VfMTEyeC5wbmdcIiBhbHQ9XCJQYXJ0bmVyc1wiLz4gICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIHsvKioqKioqICBPdXIgUGFydG5lcnMgc2VjdGlvbiAqKioqKioqKiovfVxuICAgICAgICB7LyoqKioqKiAgV2hlcmUgd2UgYXJlICoqKioqKioqKi99XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNhcmQtYmxvY2stcm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtc2xpZGVyLWNvbnRhaW5lciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWlsZXN0b25lLXNlY3Rpb25cIiBpZD1cImNvdW50ZXItc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kLWNvbCBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgaGVpZ2h0PVwiMTVcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zdGFyLnN2Z1wifSBhbHQ9XCJzdGFyXCIvPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBoZWlnaHQ9XCIxNVwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3N0YXIuc3ZnXCJ9IGFsdD1cInN0YXJcIi8+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGhlaWdodD1cIjE1XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvc3Rhci5zdmdcIn0gYWx0PVwic3RhclwiLz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgaGVpZ2h0PVwiMTVcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zdGFyLnN2Z1wifSBhbHQ9XCJzdGFyXCIvPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBoZWlnaHQ9XCIxNVwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3N0YXIuc3ZnXCJ9IGFsdD1cInN0YXJcIi8+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPGgzPndlIGFyZSBoZXJlIDxici8+c28gZmFyPC9oMz4gIFxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3Byb2ZpdC5zdmdcIn0gYWx0PVwicHJvZml0XCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnN1bHRhdGlvbi1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+MSBMYWtoICs8L3NwYW4+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkRvY3RvciBhbmQgTGFiIEFwcG9pbnRtZW50czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+MTAgTGFraCArPC9zcGFuPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5PbmxpbmUgQ29uc3VsdGF0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uc3VsdGF0aW9uLWNvbCBsZWZ0LWJvcmRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImNvdW50TnVtXCI+MzAwMDAgKzwvc3Bhbj48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RG9jdG9yIE5ldHdvcms8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiY291bnROdW0yXCI+NTAwMCArPC9zcGFuPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5MYWIgTmV0d29yazwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+MiBMYWtoICs8L3NwYW4+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlByZXNjcmlwdGlvbiBEZWxpdmVyZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICB7LyoqKioqKiAgV2hlcmUgd2UgYXJlICoqKioqKioqKi99IFxuICAgICAgICB7LyoqKioqKiAgY3VzdG9tZXIgcmV2aWV3ICoqKioqKioqKi99XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNhcmQtYmxvY2stcm93IFwiPlxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZ3LTUwMCBjdXN0b21lci1yZXZpZXctaGVhZGluZ1wiPk91ciBIYXBweSBDdXN0b21lcnMgPC9oNj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1zbGlkZXItY29udGFpbmVyIGN1c3QtcmV2aWV3IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBjdXN0LWZlZWRiYWNrLWNvbFwiIGlkPVwic3RhdGljX3Jldmlld19ibGNrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgY29sLXNtLTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0LWltZy1ibG9jayBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgZnctNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wcm9maWxlLWltZy5wbmdcIn0gYWx0PVwibmFtZVwiLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BRzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5BbmFuZGEgR2hvc2hhbCA8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbS1jZW50ZXIgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgaGVpZ2h0PVwiMTVcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zdGFyLnN2Z1wifSBhbHQ9XCJzdGFyXCIvPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBoZWlnaHQ9XCIxNVwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3N0YXIuc3ZnXCJ9IGFsdD1cInN0YXJcIi8+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGhlaWdodD1cIjE1XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvc3Rhci5zdmdcIn0gYWx0PVwic3RhclwiLz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgaGVpZ2h0PVwiMTVcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zdGFyLnN2Z1wifSBhbHQ9XCJzdGFyXCIvPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBoZWlnaHQ9XCIxNVwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3N0YXIuc3ZnXCJ9IGFsdD1cInN0YXJcIi8+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItMlwiPkRvY3ByaW1lIGhhcyBwcm92aWRlZCBtZSB0aGUgY2hhbmNlIHRvIGNvbnN1bHQgdGhlIERvY3RvciBhdCB0aGUgZWFybGllc3QuIFRoZWlyIGN1c3RvbWVyIGNhcmUgaXMgcHJvbXB0IGFuZCBjb29wZXJhdGl2ZSB0byBzb3J0IG91dCBteSBwcm9ibGVtIGFzIHNvb24gYXMgcG9zc2libGUuIEl0IGlzIHRoZSBlYXNpZXN0IHdheSB0byBib29rIERvY3RvciBhcHBvbmludG1lbnRzPC9wPlxuICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBoZWlnaHQ9XCIyMFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2ctcGxheS5wbmdcIn0gYWx0PVwiZ29vZ2xlLXBsYXlcIi8+ICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwIGNvbC1zbS00IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdC1pbWctYmxvY2sgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGZ3LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcHJvZmlsZS1pbWcucG5nXCJ9IGFsdD1cIm5hbWVcIi8+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Uzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5TYW5hdDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtLWNlbnRlciBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBoZWlnaHQ9XCIxNVwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3N0YXIuc3ZnXCJ9IGFsdD1cInN0YXJcIi8+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGhlaWdodD1cIjE1XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvc3Rhci5zdmdcIn0gYWx0PVwic3RhclwiLz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgaGVpZ2h0PVwiMTVcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zdGFyLnN2Z1wifSBhbHQ9XCJzdGFyXCIvPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBoZWlnaHQ9XCIxNVwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3N0YXIuc3ZnXCJ9IGFsdD1cInN0YXJcIi8+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGhlaWdodD1cIjE1XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvc3Rhci5zdmdcIn0gYWx0PVwic3RhclwiLz48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0yXCI+RG9jcHJpbWUgaGFzIGhlbHBlZCBtZSBjaG9vc2UgYSBkb2N0b3IgKGRlbnRpc3QpIHdpdGhvdXQgYW55IGhhc3NsZSwgY29uc2lkZXJpbmcgdGhlIGZhY3QgdGhhdCBJIGFtIGNvbXBsZXRlbHkgbmV3IHRvIHRoZSBjaXR5ICYgaGFzIGFic29sdXRlbHkgbm8ga25vd2xlZGdlIGFib3V0IHdoaWNoIGRvY3RvciB0byBjb25zdWx0LiBUaGFuayB5b3UgdmVyeSBtdWNoIERvY3ByaW1lLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgaGVpZ2h0PVwiMjBcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9nLXBsYXkucG5nXCJ9IGFsdD1cImdvb2dsZS1wbGF5XCIvPiAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBjb2wtc20tNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3QtaW1nLWJsb2NrIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBmdy01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3Byb2ZpbGUtaW1nLnBuZ1wifSBhbHQ9XCJuYW1lXCIvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlBTPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPlB1cm5pbWEgU2luZ2xhPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW0tY2VudGVyIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGhlaWdodD1cIjE1XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvc3Rhci5zdmdcIn0gYWx0PVwic3RhclwiLz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgaGVpZ2h0PVwiMTVcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zdGFyLnN2Z1wifSBhbHQ9XCJzdGFyXCIvPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBoZWlnaHQ9XCIxNVwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3N0YXIuc3ZnXCJ9IGFsdD1cInN0YXJcIi8+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGhlaWdodD1cIjE1XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvc3Rhci5zdmdcIn0gYWx0PVwic3RhclwiLz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgaGVpZ2h0PVwiMTVcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9ncmV5LXN0YXIuc3ZnXCJ9IGFsdD1cInN0YXJcIi8+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItMlwiPkkgaGF2ZSBib29rZWQgMyBmdWxsIGJvZHkgaGVhbHRoIHBhY2thZ2VzIGZvciBteSBmYW1pbHkuIEFmdGVyIHJlY2VpdmluZyB0aGUgcmVwb3J0LCBJIGdvdCBhIGNhbGwgZnJvbSBhIGRvY3RvciB3aG8gZXhwbGFpbmVkIGVhY2ggYW5kIGV2ZXJ5IGVsZW1lbnQgb2YgdGhlIHJlcG9ydCB0byBtZSBhbmQgbXkgZmFtaWx5LiBIZSBldmVuIHByZXNjcmliZWQgc29tZSBtZWRpY2luZXMgdG8gbXkgbW90aGVyIGFuZCBkaXJlY3RlZCB1cyB0byB0YWtlIHNvbWUgbXVsdGl2aXRhbWlucy4gSSB0cnVseSBsb3ZlZCB0aGUgc2VydmljZS48L3A+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIGhlaWdodD1cIjIwXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvZy1wbGF5LnBuZ1wifSBhbHQ9XCJnb29nbGUtcGxheVwiLz4gKi99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgY29sLXNtLTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0LWltZy1ibG9jayBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgZnctNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wcm9maWxlLWltZy5wbmdcIn0gYWx0PVwibmFtZVwiLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5QUzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5QcmVldCBTb2hhbDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtLWNlbnRlciBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBoZWlnaHQ9XCIxNVwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3N0YXIuc3ZnXCJ9IGFsdD1cInN0YXJcIi8+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGhlaWdodD1cIjE1XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvc3Rhci5zdmdcIn0gYWx0PVwic3RhclwiLz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgaGVpZ2h0PVwiMTVcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zdGFyLnN2Z1wifSBhbHQ9XCJzdGFyXCIvPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBoZWlnaHQ9XCIxNVwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3N0YXIuc3ZnXCJ9IGFsdD1cInN0YXJcIi8+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGhlaWdodD1cIjE1XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvc3Rhci5zdmdcIn0gYWx0PVwic3RhclwiLz48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0yXCI+SSBkb24ndCBnZW5lcmFsbHkgd3JpdGUgcmV2aWV3cyBidXQgRG9jcHJpbWUgcmVhbGx5IGRlc2VydmVzIDUgc3RhcnMuIEkgaGFkIGJlZW4gc3RydWdnbGluZyB0byBmaW5kIGEgZGVybWF0b2xvZ2lzdCBpbiBteSBhcmVhLCBkaWQgR29vZ2xlIHNlYXJjaCwgYXNrZWQgYXJvdW5kIGZyb20gZnJpZW5kcyBidXQgZGlkbid0IGZpbmQgb25lIGFzIHBlciBteSBleHBlY3RhdGlvbnMuIFRoaXMgYXBwIHNob3dlZCBtZSB0aGUgb25lIGNsaW5pYyB3aGljaCBpcyBub3Qgb24gR29vZ2xlIHNlYXJjaC4gSSBib29rZWQgdGhlIGFwcG9pbnRtZW50IGltbWVkaWF0ZWx5LiBJdCdzIGp1c3QgYSBncmVhdCBleHBlcmllbmNlLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgaGVpZ2h0PVwiMjBcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9nLXBsYXkucG5nXCJ9IGFsdD1cImdvb2dsZS1wbGF5XCIvPiAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBjb2wtc20tNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3QtaW1nLWJsb2NrIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBmdy01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3Byb2ZpbGUtaW1nLnBuZ1wifSBhbHQ9XCJuYW1lXCIvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlNTPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPlNvbmFtIFNpbmhhIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtLWNlbnRlciBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBoZWlnaHQ9XCIxNVwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3N0YXIuc3ZnXCJ9IGFsdD1cInN0YXJcIi8+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGhlaWdodD1cIjE1XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvc3Rhci5zdmdcIn0gYWx0PVwic3RhclwiLz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgaGVpZ2h0PVwiMTVcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zdGFyLnN2Z1wifSBhbHQ9XCJzdGFyXCIvPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBoZWlnaHQ9XCIxNVwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3N0YXIuc3ZnXCJ9IGFsdD1cInN0YXJcIi8+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGhlaWdodD1cIjE1XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvZ3JleS1zdGFyLnN2Z1wifSBhbHQ9XCJzdGFyXCIvPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTJcIj5JIGJvb2tlZCBwcmV2ZW50aXZlIGhlYWx0aCBwYWNrYWdlcyBmb3IgbXkgcGFyZW50cyBsaXZpbmcgaW4gRGVsaGkuIEkgYW0gc28gZ2xhZCB0aGF0IEkgY2FuIHRha2UgY2FyZSBvZiB0aGVpciBoZWFsdGggYnkgc2l0dGluZyBpbiBCYW5nYWxvcmUuIFRoZXkgY29sbGVjdGVkIHRoZSBibG9vZCBzYW1wbGUgZnJvbSBteSBwYXJlbnQncyBob21lIGFuZCBzZW50IHRoZSByZXBvcnQgb24gZW1haWwgd2hpY2ggd2FzIHJldmlld2VkIGJ5IHRoZWlyIERvY3Rvci4gSGUgcHJlc2NyaWJlZCBzb21lIG1lZGljaW5lcyB0byBteSBwYXJlbnRzIGFuZCBJIGdvdCAyMyUgb2ZmIG9uIG1lZGljaW5lIG9ubGluZSBkZWxpdmVyeS4gSGFkIGFuIG92ZXJhbGwgYW1hemluZyBleHBlcmllbmNlITwvcD5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgaGVpZ2h0PVwiMjBcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9nLXBsYXkucG5nXCJ9IGFsdD1cImdvb2dsZS1wbGF5XCIvPiAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7Lyogc2xpZGVyIGJ1dHRvbnMgKi99XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwa2ctYnRubGZ0IGQtbm9uZVwiICBpZD17YHN0YXRpY19yZXZpZXdfYmxja19SaWdodEFycm93X2hzcHRsYH0gb25DbGljaz17KCk9PnNjcm9sbCgnbGVmdCcpfT4gXG4gICAgICAgICAgICAgICAgPGltZyBoZWlnaHQ9XCIxMlwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NvbG9yLWNoZXYuc3ZnXCJ9IGFsdD1cImNoZXYtbGVmdFwiLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBrZy1idG5yZ3RcIiBpZD17YHN0YXRpY19yZXZpZXdfYmxja19sZWZ0QXJyb3dfaHNwdGxgfSBvbkNsaWNrPXsoKT0+c2Nyb2xsKCdyaWdodCcpfT4gXG4gICAgICAgICAgICAgICAgPGltZyBoZWlnaHQ9XCIxMlwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NvbG9yLWNoZXYuc3ZnXCJ9IGFsdD1cImNoZXYtcmlnaHRcIi8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cblx0XHQpXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcblxuY2xhc3MgQm9va2luZ0NvbmZpcm1hdGlvblBvcHVwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1wb3B1cC1vdmVybGF5XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLXBvcHVwIHZpcC1zcmNoLXBvcC1taW5cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBwYWRpaW5nLXNyY2gtZWxcIj5cblx0XHRcdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInNyY2gtZWwtY29uZW50XCI+e3RoaXMucHJvcHMuaXNfZ29sZD8nQ29uZmlybSBkZWxldGUgbWVtYmVyPyc6J0RvIHlvdSB3aXNoIHRvIGNvbnRpbnVlPyd9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLWJ0bi1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5wcmljZUNvbmZpcm1hdGlvblBvcHVwLmJpbmQodGhpcywgdHJ1ZSl9PlllczwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLnByaWNlQ29uZmlybWF0aW9uUG9wdXAuYmluZCh0aGlzLCBmYWxzZSl9Pk5vPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdC8qKHRoaXMucHJvcHMuaXNfdmlwX2FwcGxpY2FibGUgfHwgdGhpcy5wcm9wcy5pc19pbnN1cmFuY2VfYXBwbGljYWJsZSkgfHwgdGhpcy5wcm9wcy5pc0NhcnQgfHwgdGhpcy5wcm9wcy5pc0xhYj9cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IHBhZGlpbmctc3JjaC1lbFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmlGcmFtZVBvcHVwID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtcnQtMjAgdGV4dC1jZW50ZXIgZnctNTAwXCI+V2UgYXJlIHJlZGlyZWN0aW5nIHlvdSB0byBQaGFybUVhc3kgd2Vic2l0ZSBpbiAzIHNlY29uZHMuLi48L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic3JjaC1lbC1jb25lbnRcIj5EbyB5b3Ugd2lzaCB0byBjb250aW51ZT88L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1idG4tY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5wcmljZUNvbmZpcm1hdGlvblBvcHVwLmJpbmQodGhpcywgdHJ1ZSl9PlllczwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMucHJpY2VDb25maXJtYXRpb25Qb3B1cC5iaW5kKHRoaXMsIGZhbHNlKX0+Tm88L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDpcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ2aXAtYmFubmVyLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInZpcC1iYW5uZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZCB2cC1jbHMtaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXAtcG9wLWNscy5zdmcnfSBvbkNsaWNrPXt0aGlzLnByb3BzLmJhbm5lckNvbmZpcm1hdGlvblBvcHVwLmJpbmQodGhpcyxmYWxzZSl9Lz5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZCB2cC1ibnItaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXAtaW1nLXBvcC5wbmcnfSAvPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9wLWJuci10eHRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInZwLWJuci1rbm93LXR4dFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIFx0J0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdCb29raW5nUGFnZVZpcEJhbm5lckNsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnYm9va2luZ3BhZ2UtdmlwLWNsaWNrJ1xuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgIFx0fVxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgIFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy92aXAtY2x1Yi1kZXRhaWxzP3NvdXJjZT1ib29raW5ncGFnZSZsZWFkX3NvdXJjZT1ib29raW5ncGFnZScpIH19Pktub3cgbW9yZSBhYm91dCBEb2NwcmltZSBWSVA8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ2cC1ibnItc3ViLXR4dFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuYmFubmVyQ29uZmlybWF0aW9uUG9wdXAuYmluZCh0aGlzLHRydWUpfT5Ob3QgSW50ZXJlc3RlZD8gQ29udGludWUgQm9va2luZyA8aW1nIHN0eWxlPXt7d2lkdGg6JzdweCd9fSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcC1yZ2h0LnN2Zyd9IC8+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PiovXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29raW5nQ29uZmlybWF0aW9uUG9wdXAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgY2xlYXJBbGxUZXN0cywgdG9nZ2xlT1BEQ3JpdGVyaWEsIHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhLCByZXNldEZpbHRlcnMsIGdldFVzZXJQcm9maWxlLCBmZXRjaEFydGljbGVzLCBmZXRjaEhlYXRsaFRpcCwgbG9hZE9QRENvbW1vbkNyaXRlcmlhLCBsb2FkTGFiQ29tbW9uQ3JpdGVyaWFzLCBjbGVhckV4dHJhVGVzdHMsIGdldFNwZWNpYWxpdHlGb290ZXJEYXRhLCBzZWxlY3RTZWFyY2hUeXBlLCBnZXRPZmZlckxpc3QsIHNldFBhY2thZ2VJZCwgZ2V0VXBDb21pbmdBcHBvaW50bWVudCwgcmVzZXRQa2dDb21wYXJlLCB0b2dnbGVJUERDcml0ZXJpYSwgbG9hZE9QREluc3VyYW5jZSwgbWVyZ2VJcGRDcml0ZXJpYSwgZ2V0TmVhcmJ5SG9zcGl0YWxzLCBjbGVhclZpcFNlbGVjdGVkUGxhbiwgTm9uSXBkQm9va2luZ0xlYWQgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuXG5pbXBvcnQgSG9tZVZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0hvbWUnXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbWVyZ2VTdGF0ZTogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkRGF0YShzdG9yZSwgbWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtzdG9yZS5kaXNwYXRjaChsb2FkT1BEQ29tbW9uQ3JpdGVyaWEoKSksIHN0b3JlLmRpc3BhdGNoKGxvYWRMYWJDb21tb25Dcml0ZXJpYXMoKSksIHN0b3JlLmRpc3BhdGNoKGdldE5lYXJieUhvc3BpdGFscygpKSBdKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHsgfSlcbiAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgcm91dGVyOiAoKSA9PiBudWxsXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIC8vSWYgdXNlciBpcyBsb2dnZWQgaW4gLGZldGNoIHVzZXIgZGF0YVxuICAgICAgICBpZiAoU1RPUkFHRS5jaGVja0F1dGgoKSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRVc2VyUHJvZmlsZSgpXG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldFVwQ29taW5nQXBwb2ludG1lbnQoKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhpcy5wcm9wcy5mZXRjaEhlYXRsaFRpcCgpXG4gICAgICAgIC8vIHRoaXMucHJvcHMuZmV0Y2hBcnRpY2xlcygpXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5jb21tb25fdGVzdHMubGVuZ3RoIHx8ICF0aGlzLnByb3BzLmNvbW1vbl9wYWNrYWdlLmxlbmd0aCB8fCAhdGhpcy5wcm9wcy5zcGVjaWFsaXphdGlvbnMubGVuZ3RoIHx8ICh0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLmxvY2FsaXR5KSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBsZXQgZXh0cmFEYXRhID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbjogdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5nZXROZWFyYnlIb3NwaXRhbHMoZXh0cmFEYXRhKTtcbiAgICAgICAgLy8gaWYoISAodGhpcy5wcm9wcy5jb21tb25fdGVzdHMgJiYgdGhpcy5wcm9wcy5jb21tb25fdGVzdHMubGVuZ3RoKSApe1xuICAgICAgICAvLyAgICAgdGhpcy5wcm9wcy5sb2FkTGFiQ29tbW9uQ3JpdGVyaWFzKClcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLnByb3BzLmxvYWRMYWJDb21tb25Dcml0ZXJpYXMoKVxuICAgICAgICAvLyB0aGlzLnByb3BzLmxvYWRPUERJbnN1cmFuY2UodGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKVxuICAgICAgICB0aGlzLnByb3BzLmxvYWRPUERDb21tb25Dcml0ZXJpYSh0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24pXG5cbiAgICAgICAgdGhpcy5wcm9wcy5yZXNldEZpbHRlcnMoKVxuICAgICAgICB0aGlzLnByb3BzLmNsZWFyRXh0cmFUZXN0cygpXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21lcmdlU3RhdGU6IHRydWV9KVxuICAgICAgICB9LDEwMClcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8SG9tZVZpZXcgey4uLnRoaXMucHJvcHN9IHsuLi50aGlzLnN0YXRlfS8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHBhc3NlZFByb3BzKSA9PiB7XG4gICAgLyoqXG4gICAgICogaW5pdGlhbFNlcnZlckRhdGEgaXMgc2VydmVyIHJlbmRlcmVkIGFzeW5jIGRhdGEgcmVxdWlyZWQgYnVpbGQgaHRtbCBvbiBzZXJ2ZXIuIFxuICAgICAqL1xuICAgIGxldCBpbml0aWFsU2VydmVyRGF0YSA9IG51bGxcbiAgICBsZXQgeyBzdGF0aWNDb250ZXh0IH0gPSBwYXNzZWRQcm9wc1xuICAgIGlmIChzdGF0aWNDb250ZXh0ICYmIHN0YXRpY0NvbnRleHQuZGF0YSkge1xuICAgICAgICBpbml0aWFsU2VydmVyRGF0YSA9IHN0YXRpY0NvbnRleHQuZGF0YVxuICAgIH1cblxuICAgIGxldCB7XG4gICAgICAgIHByb2ZpbGVzLCBzZWxlY3RlZFByb2ZpbGUsIG5ld05vdGlmaWNhdGlvbiwgbm90aWZpY2F0aW9ucywgYXJ0aWNsZXMsIGhlYWx0aFRpcHMsIGRldmljZV9pbmZvLCBvZmZlckxpc3QsIHVwY29taW5nX2FwcG9pbnRtZW50cywgaXNfaXBkX2Zvcm1fc3VibWl0dGVkLCBkZWZhdWx0UHJvZmlsZSwgaXNfYW55X3VzZXJfYnV5X2dvbGQsIHVzZXJfZGV0YWlsX2ZldGNoZWRcbiAgICB9ID0gc3RhdGUuVVNFUlxuXG4gICAgY29uc3Qge1xuICAgICAgICBMT0FERURfU0VBUkNIX0NSSVRFUklBX0xBQixcbiAgICAgICAgY29tbW9uX3Rlc3RzLFxuICAgICAgICBjb21tb25fcGFja2FnZSxcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgY29tcGFyZV9wYWNrYWdlc1xuICAgIH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfTEFCU1xuICAgIGxldCBmaWx0ZXJDcml0ZXJpYV9sYWIgPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfTEFCUy5maWx0ZXJDcml0ZXJpYVxuXG4gICAgY29uc3Qge1xuICAgICAgICBMT0FERURfU0VBUkNIX0NSSVRFUklBX09QRCxcbiAgICAgICAgc3BlY2lhbGl6YXRpb25zLFxuICAgICAgICBpcGRfcHJvY2VkdXJlcyxcbiAgICAgICAgdG9wX2hvc3BpdGFscyxcbiAgICAgICAgY29tbW9uX3NldHRpbmdzLFxuICAgICAgICBwYWNrYWdlX2NhdGVnb3JpZXMsXG4gICAgICAgIG5lYXJieUhvc3BpdGFsc1xuICAgIH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfT1BEXG4gICAgXG4gICAgbGV0IGZpbHRlckNyaXRlcmlhX29wZCA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9PUEQuZmlsdGVyQ3JpdGVyaWFcblxuICAgIGxldCB7XG4gICAgICAgIHN0YXRpY19mb290ZXJfZGF0YVxuICAgIH0gPSBzdGF0ZS5ET0NUT1JfU0VBUkNIXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9maWxlcywgc2VsZWN0ZWRQcm9maWxlLCBuZXdOb3RpZmljYXRpb24sIG5vdGlmaWNhdGlvbnMsIGFydGljbGVzLCBoZWFsdGhUaXBzLCBjb21tb25fdGVzdHM6IGNvbW1vbl90ZXN0cyB8fCBbXSwgc3BlY2lhbGl6YXRpb25zOiBzcGVjaWFsaXphdGlvbnMgfHwgW10sIHNlbGVjdGVkTG9jYXRpb24sIGZpbHRlckNyaXRlcmlhX2xhYiwgZmlsdGVyQ3JpdGVyaWFfb3BkLCBkZXZpY2VfaW5mbywgY29tbW9uX3BhY2thZ2U6IGNvbW1vbl9wYWNrYWdlIHx8IFtdLCBpbml0aWFsU2VydmVyRGF0YSwgb2ZmZXJMaXN0LCB1cGNvbWluZ19hcHBvaW50bWVudHMsIGNvbXBhcmVfcGFja2FnZXMsIGlwZF9wcm9jZWR1cmVzLCB0b3BfaG9zcGl0YWxzLCBjb21tb25fc2V0dGluZ3MsIGlzX2lwZF9mb3JtX3N1Ym1pdHRlZCwgcGFja2FnZV9jYXRlZ29yaWVzLCBuZWFyYnlIb3NwaXRhbHMsIHN0YXRpY19mb290ZXJfZGF0YSwgZGVmYXVsdFByb2ZpbGUsIGlzX2FueV91c2VyX2J1eV9nb2xkLCB1c2VyX2RldGFpbF9mZXRjaGVkXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBsb2FkTGFiQ29tbW9uQ3JpdGVyaWFzOiAoKSA9PiBkaXNwYXRjaChsb2FkTGFiQ29tbW9uQ3JpdGVyaWFzKCkpLFxuICAgICAgICBsb2FkT1BEQ29tbW9uQ3JpdGVyaWE6IChjaXR5KSA9PiBkaXNwYXRjaChsb2FkT1BEQ29tbW9uQ3JpdGVyaWEoY2l0eSkpLFxuICAgICAgICB0b2dnbGVPUERDcml0ZXJpYTogKHR5cGUsIGNyaXRlcmlhLCBmb3JjZUFkZCwgZmlsdGVycykgPT4gZGlzcGF0Y2godG9nZ2xlT1BEQ3JpdGVyaWEodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkLCBmaWx0ZXJzKSksXG4gICAgICAgIHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhOiAodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkLCBmaWx0ZXJzKSA9PiBkaXNwYXRjaCh0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQsIGZpbHRlcnMpKSxcbiAgICAgICAgZ2V0VXNlclByb2ZpbGU6ICgpID0+IGRpc3BhdGNoKGdldFVzZXJQcm9maWxlKCkpLFxuICAgICAgICBmZXRjaEhlYXRsaFRpcDogKCkgPT4gZGlzcGF0Y2goZmV0Y2hIZWF0bGhUaXAoKSksXG4gICAgICAgIGZldGNoQXJ0aWNsZXM6ICgpID0+IGRpc3BhdGNoKGZldGNoQXJ0aWNsZXMoKSksXG4gICAgICAgIHJlc2V0RmlsdGVyczogKCkgPT4gZGlzcGF0Y2gocmVzZXRGaWx0ZXJzKCkpLFxuICAgICAgICBjbGVhckV4dHJhVGVzdHM6ICgpID0+IGRpc3BhdGNoKGNsZWFyRXh0cmFUZXN0cygpKSxcbiAgICAgICAgZ2V0U3BlY2lhbGl0eUZvb3RlckRhdGE6IChjYikgPT4gZGlzcGF0Y2goZ2V0U3BlY2lhbGl0eUZvb3RlckRhdGEoY2IpKSxcbiAgICAgICAgc2VsZWN0U2VhcmNoVHlwZTogKHR5cGUpID0+IGRpc3BhdGNoKHNlbGVjdFNlYXJjaFR5cGUodHlwZSkpLFxuICAgICAgICBnZXRPZmZlckxpc3Q6IChsYXQsIGxvbmcpID0+IGRpc3BhdGNoKGdldE9mZmVyTGlzdChsYXQsIGxvbmcpKSxcbiAgICAgICAgY2xlYXJBbGxUZXN0czogKCkgPT4gZGlzcGF0Y2goY2xlYXJBbGxUZXN0cygpKSxcbiAgICAgICAgc2V0UGFja2FnZUlkOiAocGFja2FnZV9pZCwgaXNIb21lUGFnZSkgPT4gZGlzcGF0Y2goc2V0UGFja2FnZUlkKHBhY2thZ2VfaWQsIGlzSG9tZVBhZ2UpKSxcbiAgICAgICAgZ2V0VXBDb21pbmdBcHBvaW50bWVudDogKCkgPT4gZGlzcGF0Y2goZ2V0VXBDb21pbmdBcHBvaW50bWVudCgpKSxcbiAgICAgICAgcmVzZXRQa2dDb21wYXJlOiAoKSA9PiBkaXNwYXRjaChyZXNldFBrZ0NvbXBhcmUoKSksXG4gICAgICAgIHRvZ2dsZUlQRENyaXRlcmlhOiAoY3JpdGVyaWEsIGZvcmNlQWRkKSA9PiBkaXNwYXRjaCh0b2dnbGVJUERDcml0ZXJpYShjcml0ZXJpYSwgZm9yY2VBZGQpKSxcbiAgICAgICAgbG9hZE9QREluc3VyYW5jZTogKGNpdHkpID0+IGRpc3BhdGNoKGxvYWRPUERJbnN1cmFuY2UoY2l0eSkpLFxuICAgICAgICBtZXJnZUlwZENyaXRlcmlhOiAoZmlsdGVyQ3JpdGVyaWEpPT4gZGlzcGF0Y2gobWVyZ2VJcGRDcml0ZXJpYShmaWx0ZXJDcml0ZXJpYSkpLFxuICAgICAgICBnZXROZWFyYnlIb3NwaXRhbHM6IChwYXJhbXMsIGNiKSA9PiBkaXNwYXRjaChnZXROZWFyYnlIb3NwaXRhbHMocGFyYW1zLCBjYikpLFxuICAgICAgICBjbGVhclZpcFNlbGVjdGVkUGxhbjooKSA9PiBkaXNwYXRjaChjbGVhclZpcFNlbGVjdGVkUGxhbigpKSxcbiAgICAgICAgTm9uSXBkQm9va2luZ0xlYWQ6KGRhdGEsY2IpID0+ZGlzcGF0Y2goTm9uSXBkQm9va2luZ0xlYWQoZGF0YSwgY2IpKSxcblxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShIb21lKTtcbiIsIlxuY29uc3QgQ1JJVEVPID0ge1xuXG5cdHNlbmREYXRhKGRhdGEgKXtcblx0XHR0cnl7XG5cblx0XHRcdGlmKHdpbmRvdyl7XG5cdFx0XHRcblx0XHRcdFx0d2luZG93LmNyaXRlb19xID0gd2luZG93LmNyaXRlb19xIHx8IFtdXG5cdFx0XHRcdHZhciBkZXZpY2VUeXBlID0gbmF2aWdhdG9yPy9pUGFkLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpID8gXCJ0XCIgOiAvTW9iaWxlfGlQKGhvbmV8b2QpfEFuZHJvaWR8QmxhY2tCZXJyeXxJRU1vYmlsZXxTaWxrLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpID8gXCJtXCIgOiBcImRcIjonJztcblxuXHRcdFx0XHR3aW5kb3cuY3JpdGVvX3EucHVzaCh7ICdldmVudCc6IFwic2V0QWNjb3VudFwiLCBhY2NvdW50OiA1NzQzOX0sIC8vIFlvdSBzaG91bGQgbmV2ZXIgdXBkYXRlIHRoaXMgbGluZVxuXHRcdFx0XHR7J2V2ZW50JzogXCJzZXRFbWFpbFwiLCAnZW1haWwnOiAnJ30sXG5cdFx0XHRcdHsgJ2V2ZW50JzogXCJzZXRTaXRlVHlwZVwiLCB0eXBlOiBkZXZpY2VUeXBlfSxcblx0XHRcdFx0ZGF0YVxuXHRcdFx0XHQpXG5cdFx0XHR9XG5cblx0XHR9Y2F0Y2goZSl7XG5cblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ1JJVEVPIiwiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sZSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5Db21wcmVzcz1lKCk6dC5Db21wcmVzcz1lKCl9KHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShpKXtpZihuW2ldKXJldHVybiBuW2ldLmV4cG9ydHM7dmFyIGE9bltpXT17ZXhwb3J0czp7fSxpZDppLGxvYWRlZDohMX07cmV0dXJuIHRbaV0uY2FsbChhLmV4cG9ydHMsYSxhLmV4cG9ydHMsZSksYS5sb2FkZWQ9ITAsYS5leHBvcnRzfXZhciBuPXt9O3JldHVybiBlLm09dCxlLmM9bixlLnA9XCJcIixlKDApfShbZnVuY3Rpb24odCxlLG4pe3ZhciBpLGEscjshZnVuY3Rpb24obyx1KXthPVt0LG4oMSksbigyKSxuKDMpLG4oNCksbig1KSxuKDYpXSxpPXUscj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBpP2kuYXBwbHkoZSxhKTppLCEodm9pZCAwIT09ciYmKHQuZXhwb3J0cz1yKSl9KHRoaXMsZnVuY3Rpb24odCxlLG4saSxhLHIsbyl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdSh0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e2RlZmF1bHQ6dH19ZnVuY3Rpb24gcyh0KXtpZihBcnJheS5pc0FycmF5KHQpKXtmb3IodmFyIGU9MCxuPUFycmF5KHQubGVuZ3RoKTtlPHQubGVuZ3RoO2UrKyluW2VdPXRbZV07cmV0dXJuIG59cmV0dXJuIEFycmF5LmZyb20odCl9ZnVuY3Rpb24gZih0LGUpe2lmKCEodCBpbnN0YW5jZW9mIGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9dmFyIGQ9dShlKSxsPXUobiksYz11KGkpLGg9dShhKSx2PXUocikscD11KG8pLGc9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsZSl7Zm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciBpPWVbbl07aS5lbnVtZXJhYmxlPWkuZW51bWVyYWJsZXx8ITEsaS5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gaSYmKGkud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGkua2V5LGkpfX1yZXR1cm4gZnVuY3Rpb24oZSxuLGkpe3JldHVybiBuJiZ0KGUucHJvdG90eXBlLG4pLGkmJnQoZSxpKSxlfX0oKSx3PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe2YodGhpcyx0KX1yZXR1cm4gZyh0LFt7a2V5OlwiYXR0YWNoXCIsdmFsdWU6ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzO3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihpLGEpe3ZhciByPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodCk7ci5zZXRBdHRyaWJ1dGUoXCJhY2NlcHRcIixcImltYWdlLypcIiksci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsZnVuY3Rpb24odCl7dmFyIGE9bi5jb21wcmVzcyhbXS5jb25jYXQocyh0LnRhcmdldC5maWxlcykpLGUpO2koYSl9LCExKX0pfX0se2tleTpcImNvbXByZXNzXCIsdmFsdWU6ZnVuY3Rpb24odCxlKXtmdW5jdGlvbiBuKHQsZSl7dmFyIG49bmV3IHYuZGVmYXVsdChlKTtyZXR1cm4gbi5zdGFydD13aW5kb3cucGVyZm9ybWFuY2Uubm93KCksbi5hbHQ9dC5uYW1lLG4uZXh0PXQudHlwZSxuLnN0YXJ0U2l6ZT10LnNpemUscC5kZWZhdWx0Lm9yaWVudGF0aW9uKHQpLnRoZW4oZnVuY3Rpb24oZSl7cmV0dXJuIG4ub3JpZW50YXRpb249ZSxjLmRlZmF1bHQubG9hZCh0KX0pLnRoZW4oaShuKSl9ZnVuY3Rpb24gaSh0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGguZGVmYXVsdC5sb2FkKGUpLnRoZW4oZnVuY3Rpb24oZSl7aWYodC5zdGFydFdpZHRoPWUubmF0dXJhbFdpZHRoLHQuc3RhcnRIZWlnaHQ9ZS5uYXR1cmFsSGVpZ2h0LHQucmVzaXplKXt2YXIgbj1oLmRlZmF1bHQucmVzaXplKHQubWF4V2lkdGgsdC5tYXhIZWlnaHQpKGUubmF0dXJhbFdpZHRoLGUubmF0dXJhbEhlaWdodCksaT1uLndpZHRoLGE9bi5oZWlnaHQ7dC5lbmRXaWR0aD1pLHQuZW5kSGVpZ2h0PWF9ZWxzZSB0LmVuZFdpZHRoPWUubmF0dXJhbFdpZHRoLHQuZW5kSGVpZ2h0PWUubmF0dXJhbEhlaWdodDtyZXR1cm4gbC5kZWZhdWx0LmltYWdlVG9DYW52YXModC5lbmRXaWR0aCx0LmVuZEhlaWdodCx0Lm9yaWVudGF0aW9uKShlKX0pLnRoZW4oZnVuY3Rpb24oZSl7cmV0dXJuIHQuaXRlcmF0aW9ucz0xLHQuYmFzZTY0cHJlZml4PWQuZGVmYXVsdC5wcmVmaXgodC5leHQpLGEoZSx0LnN0YXJ0U2l6ZSx0LnF1YWxpdHksdC5zaXplLHQubWluUXVhbGl0eSx0Lml0ZXJhdGlvbnMpfSkudGhlbihmdW5jdGlvbihlKXtyZXR1cm4gdC5maW5hbFNpemU9ZC5kZWZhdWx0LnNpemUoZSksZC5kZWZhdWx0LmRhdGEoZSl9KS50aGVuKGZ1bmN0aW9uKGUpe3QuZW5kPXdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTt2YXIgbj10LmVuZC10LnN0YXJ0O3JldHVybntkYXRhOmUscHJlZml4OnQuYmFzZTY0cHJlZml4LGVsYXBzZWRUaW1lSW5TZWNvbmRzOm4vMWUzLGFsdDp0LmFsdCxpbml0aWFsU2l6ZUluTWI6bC5kZWZhdWx0LnNpemUodC5zdGFydFNpemUpLk1CLGVuZFNpemVJbk1iOmwuZGVmYXVsdC5zaXplKHQuZmluYWxTaXplKS5NQixleHQ6dC5leHQscXVhbGl0eTp0LnF1YWxpdHksZW5kV2lkdGhJblB4OnQuZW5kV2lkdGgsZW5kSGVpZ2h0SW5QeDp0LmVuZEhlaWdodCxpbml0aWFsV2lkdGhJblB4OnQuc3RhcnRXaWR0aCxpbml0aWFsSGVpZ2h0SW5QeDp0LnN0YXJ0SGVpZ2h0LHNpemVSZWR1Y2VkSW5QZXJjZW50Oih0LnN0YXJ0U2l6ZS10LmZpbmFsU2l6ZSkvdC5zdGFydFNpemUqMTAwLGl0ZXJhdGlvbnM6dC5pdGVyYXRpb25zfX0pfX1mdW5jdGlvbiBhKHQsZSl7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOjEsaT1hcmd1bWVudHNbM10scj1hcmd1bWVudHMubGVuZ3RoPjQmJnZvaWQgMCE9PWFyZ3VtZW50c1s0XT9hcmd1bWVudHNbNF06MSxvPWFyZ3VtZW50c1s1XSx1PWwuZGVmYXVsdC5jYW52YXNUb0Jhc2U2NCh0LG4pLHM9ZC5kZWZhdWx0LnNpemUodSk7cmV0dXJuIG8rPTEscz5pP2EodCxzLG4tLjEsaSxyLG8pOm4+cj9hKHQscyxuLS4xLGkscixvKTpuPC41P3U6dX1yZXR1cm4gUHJvbWlzZS5hbGwodC5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIG4odCxlKX0pKX19XSxbe2tleTpcImNvbnZlcnRCYXNlNjRUb0ZpbGVcIix2YWx1ZTpmdW5jdGlvbih0LGUpe3JldHVybiBsLmRlZmF1bHQuYmFzZTY0VG9GaWxlKHQsZSl9fV0pLHR9KCk7dC5leHBvcnRzPXd9KX0sZnVuY3Rpb24odCxlLG4pe3ZhciBpLGEscjshZnVuY3Rpb24obixvKXthPVtlXSxpPW8scj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBpP2kuYXBwbHkoZSxhKTppLCEodm9pZCAwIT09ciYmKHQuZXhwb3J0cz1yKSl9KHRoaXMsZnVuY3Rpb24odCl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGU9ZnVuY3Rpb24odCl7dmFyIGU9dC5yZXBsYWNlKC9eZGF0YTppbWFnZVxcL1xcdys7YmFzZTY0LC8sXCJcIikubGVuZ3RoO3JldHVybihlLTgxNCkvMS4zN30sbj1mdW5jdGlvbih0KXtyZXR1cm4gdC5zcGxpdChcIjtcIilbMF0ubWF0Y2goL2pwZWd8cG5nfGdpZi8pWzBdfSxpPWZ1bmN0aW9uKHQpe3JldHVybiB0LnJlcGxhY2UoL15kYXRhOmltYWdlXFwvXFx3KztiYXNlNjQsLyxcIlwiKX0sYT1mdW5jdGlvbih0KXtyZXR1cm5cImRhdGE6XCIrdCtcIjtiYXNlNjQsXCJ9O3QuZGVmYXVsdD17c2l6ZTplLG1pbWU6bixkYXRhOmkscHJlZml4OmF9fSl9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgaSxhLHI7IWZ1bmN0aW9uKG4sbyl7YT1bZV0saT1vLHI9XCJmdW5jdGlvblwiPT10eXBlb2YgaT9pLmFwcGx5KGUsYSk6aSwhKHZvaWQgMCE9PXImJih0LmV4cG9ydHM9cikpfSh0aGlzLGZ1bmN0aW9uKHQpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBlPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06XCJpbWFnZS9qcGVnXCIsbj13aW5kb3cuYXRvYih0KSxpPVtdLGE9MDthPG4ubGVuZ3RoO2ErKylpW2FdPW4uY2hhckNvZGVBdChhKTtyZXR1cm4gbmV3IHdpbmRvdy5CbG9iKFtuZXcgVWludDhBcnJheShpKV0se3R5cGU6ZX0pfSxuPWZ1bmN0aW9uKHQsZSxuKXt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLGE9aS5nZXRDb250ZXh0KFwiMmRcIik7cmV0dXJuIGkud2lkdGg9dCxpLmhlaWdodD1lLGZ1bmN0aW9uKHIpe2lmKCFufHxuPjgpcmV0dXJuIGEuZHJhd0ltYWdlKHIsMCwwLGkud2lkdGgsaS5oZWlnaHQpLGk7c3dpdGNoKG4+NCYmKGkud2lkdGg9ZSxpLmhlaWdodD10KSxuKXtjYXNlIDI6YS50cmFuc2xhdGUodCwwKSxhLnNjYWxlKC0xLDEpO2JyZWFrO2Nhc2UgMzphLnRyYW5zbGF0ZSh0LGUpLGEucm90YXRlKE1hdGguUEkpO2JyZWFrO2Nhc2UgNDphLnRyYW5zbGF0ZSgwLGUpLGEuc2NhbGUoMSwtMSk7YnJlYWs7Y2FzZSA1OmEucm90YXRlKC41Kk1hdGguUEkpLGEuc2NhbGUoMSwtMSk7YnJlYWs7Y2FzZSA2OmEucm90YXRlKC41Kk1hdGguUEkpLGEudHJhbnNsYXRlKDAsLWUpO2JyZWFrO2Nhc2UgNzphLnJvdGF0ZSguNSpNYXRoLlBJKSxhLnRyYW5zbGF0ZSh0LC1lKSxhLnNjYWxlKC0xLDEpO2JyZWFrO2Nhc2UgODphLnJvdGF0ZSgtLjUqTWF0aC5QSSksYS50cmFuc2xhdGUoLXQsMCl9cmV0dXJuIG4+ND9hLmRyYXdJbWFnZShyLDAsMCxpLmhlaWdodCxpLndpZHRoKTphLmRyYXdJbWFnZShyLDAsMCxpLndpZHRoLGkuaGVpZ2h0KSxpfX0saT1mdW5jdGlvbih0KXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06Ljc1LG49dC50b0RhdGFVUkwoXCJpbWFnZS9qcGVnXCIsZSk7cmV0dXJuIG59LGE9ZnVuY3Rpb24odCl7cmV0dXJue0tCOnQvMWUzLE1COnQvMWU2fX07dC5kZWZhdWx0PXtiYXNlNjRUb0ZpbGU6ZSxpbWFnZVRvQ2FudmFzOm4sY2FudmFzVG9CYXNlNjQ6aSxzaXplOmF9fSl9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgaSxhLHI7IWZ1bmN0aW9uKG4sbyl7YT1bZV0saT1vLHI9XCJmdW5jdGlvblwiPT10eXBlb2YgaT9pLmFwcGx5KGUsYSk6aSwhKHZvaWQgMCE9PXImJih0LmV4cG9ydHM9cikpfSh0aGlzLGZ1bmN0aW9uKHQpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBlPWZ1bmN0aW9uKHQpe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihlLG4pe3ZhciBpPW5ldyB3aW5kb3cuRmlsZVJlYWRlcjtpLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsZnVuY3Rpb24odCl7ZSh0LnRhcmdldC5yZXN1bHQpfSwhMSksaS5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixmdW5jdGlvbih0KXtuKHQpfSwhMSksaS5yZWFkQXNEYXRhVVJMKHQpfSl9O3QuZGVmYXVsdD17bG9hZDplfX0pfSxmdW5jdGlvbih0LGUsbil7dmFyIGksYSxyOyFmdW5jdGlvbihuLG8pe2E9W2VdLGk9byxyPVwiZnVuY3Rpb25cIj09dHlwZW9mIGk/aS5hcHBseShlLGEpOmksISh2b2lkIDAhPT1yJiYodC5leHBvcnRzPXIpKX0odGhpcyxmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgZT1mdW5jdGlvbih0KXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oZSxuKXt2YXIgaT1uZXcgd2luZG93LkltYWdlO2kuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixmdW5jdGlvbigpe2UoaSl9LCExKSxpLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLGZ1bmN0aW9uKHQpe24odCl9LCExKSxpLnNyYz10fSl9LG49ZnVuY3Rpb24odCxlKXtyZXR1cm4gZnVuY3Rpb24obixpKXtpZighdCYmIWUpcmV0dXJue3dpZHRoOm4saGVpZ2h0Oml9O3ZhciBhPW4vaSxyPXQvZSxvPXZvaWQgMCx1PXZvaWQgMDtyZXR1cm4gYT5yPyhvPU1hdGgubWluKG4sdCksdT1vL2EpOih1PU1hdGgubWluKGksZSksbz11KmEpLHt3aWR0aDpvLGhlaWdodDp1fX19O3QuZGVmYXVsdD17bG9hZDplLHJlc2l6ZTpufX0pfSxmdW5jdGlvbih0LGUsbil7dmFyIGksYSxyOyFmdW5jdGlvbihuLG8pe2E9W2VdLGk9byxyPVwiZnVuY3Rpb25cIj09dHlwZW9mIGk/aS5hcHBseShlLGEpOmksISh2b2lkIDAhPT1yJiYodC5leHBvcnRzPXIpKX0odGhpcyxmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKHQsZSl7aWYoISh0IGluc3RhbmNlb2YgZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1mdW5jdGlvbiB0KG4pe3ZhciBpPW4ucXVhbGl0eSxhPXZvaWQgMD09PWk/Ljc1Omkscj1uLnNpemUsbz12b2lkIDA9PT1yPzI6cix1PW4ubWF4V2lkdGgscz12b2lkIDA9PT11PzE5MjA6dSxmPW4ubWF4SGVpZ2h0LGQ9dm9pZCAwPT09Zj8xOTIwOmYsbD1uLnJlc2l6ZSxjPXZvaWQgMD09PWx8fGw7ZSh0aGlzLHQpLHRoaXMuc3RhcnQ9d2luZG93LnBlcmZvcm1hbmNlLm5vdygpLHRoaXMuZW5kPW51bGwsdGhpcy5hbHQ9bnVsbCx0aGlzLmV4dD1udWxsLHRoaXMuc3RhcnRTaXplPW51bGwsdGhpcy5zdGFydFdpZHRoPW51bGwsdGhpcy5zdGFydEhlaWdodD1udWxsLHRoaXMuc2l6ZT0xZTMqbyoxZTMsdGhpcy5lbmRTaXplPW51bGwsdGhpcy5lbmRXaWR0aD1udWxsLHRoaXMuZW5kSGVpZ2h0PW51bGwsdGhpcy5pdGVyYXRpb25zPTAsdGhpcy5iYXNlNjRwcmVmaXg9bnVsbCx0aGlzLnF1YWxpdHk9YSx0aGlzLnJlc2l6ZT1jLHRoaXMubWF4V2lkdGg9cyx0aGlzLm1heEhlaWdodD1kLHRoaXMub3JpZW50YXRpb249MX07dC5kZWZhdWx0PW59KX0sZnVuY3Rpb24odCxlLG4pe3ZhciBpLGEscjshZnVuY3Rpb24obixvKXthPVtlXSxpPW8scj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBpP2kuYXBwbHkoZSxhKTppLCEodm9pZCAwIT09ciYmKHQuZXhwb3J0cz1yKSl9KHRoaXMsZnVuY3Rpb24odCl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGU9ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGUsbil7dmFyIGk9bmV3IHdpbmRvdy5GaWxlUmVhZGVyO2kub25sb2FkPWZ1bmN0aW9uKHQpe3ZhciBuPW5ldyBEYXRhVmlldyh0LnRhcmdldC5yZXN1bHQpOzY1NDk2IT09bi5nZXRVaW50MTYoMCwhMSkmJmUoLTIpO2Zvcih2YXIgaT1uLmJ5dGVMZW5ndGgsYT0yO2E8aTspe3ZhciByPW4uZ2V0VWludDE2KGEsITEpO2lmKGErPTIsNjU1MDU9PT1yKXsxMTY1NTE5MjA2IT09bi5nZXRVaW50MzIoYSs9MiwhMSkmJmUoLTEpO3ZhciBvPTE4NzYxPT09bi5nZXRVaW50MTYoYSs9NiwhMSk7YSs9bi5nZXRVaW50MzIoYSs0LG8pO3ZhciB1PW4uZ2V0VWludDE2KGEsbyk7YSs9Mjtmb3IodmFyIHM9MDtzPHU7cysrKTI3ND09PW4uZ2V0VWludDE2KGErMTIqcyxvKSYmZShuLmdldFVpbnQxNihhKzEyKnMrOCxvKSl9ZWxzZXtpZig2NTI4MCE9PSg2NTI4MCZyKSlicmVhazthKz1uLmdldFVpbnQxNihhLCExKX19ZSgtMSl9LGkucmVhZEFzQXJyYXlCdWZmZXIodC5zbGljZSgwLDY1NTM2KSl9KX07dC5kZWZhdWx0PXtvcmllbnRhdGlvbjplfX0pfV0pfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9