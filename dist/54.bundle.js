(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

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

/***/ "./dev/js/components/commons/staticPages/StaticPages.js":
/*!**************************************************************!*\
  !*** ./dev/js/components/commons/staticPages/StaticPages.js ***!
  \**************************************************************/
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

var _aboutUs = __webpack_require__(/*! ./aboutUs.js */ "./dev/js/components/commons/staticPages/aboutUs.js");

var _aboutUs2 = _interopRequireDefault(_aboutUs);

var _contactUs = __webpack_require__(/*! ./contactUs */ "./dev/js/components/commons/staticPages/contactUs.js");

var _contactUs2 = _interopRequireDefault(_contactUs);

var _privacy = __webpack_require__(/*! ./privacy */ "./dev/js/components/commons/staticPages/privacy.js");

var _privacy2 = _interopRequireDefault(_privacy);

var _howitWorks = __webpack_require__(/*! ./howitWorks */ "./dev/js/components/commons/staticPages/howitWorks.js");

var _howitWorks2 = _interopRequireDefault(_howitWorks);

var _disclaimer = __webpack_require__(/*! ./disclaimer */ "./dev/js/components/commons/staticPages/disclaimer.js");

var _disclaimer2 = _interopRequireDefault(_disclaimer);

var _terms = __webpack_require__(/*! ./terms */ "./dev/js/components/commons/staticPages/terms.js");

var _terms2 = _interopRequireDefault(_terms);

var _careers = __webpack_require__(/*! ./careers */ "./dev/js/components/commons/staticPages/careers.js");

var _careers2 = _interopRequireDefault(_careers);

var _media = __webpack_require__(/*! ./media */ "./dev/js/components/commons/staticPages/media.js");

var _media2 = _interopRequireDefault(_media);

var _doctorsignup = __webpack_require__(/*! ./doctorsignup */ "./dev/js/components/commons/staticPages/doctorsignup.js");

var _doctorsignup2 = _interopRequireDefault(_doctorsignup);

var _cancelPolicy = __webpack_require__(/*! ./cancelPolicy.js */ "./dev/js/components/commons/staticPages/cancelPolicy.js");

var _cancelPolicy2 = _interopRequireDefault(_cancelPolicy);

var _footer = __webpack_require__(/*! ../../commons/Home/footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _Loader = __webpack_require__(/*! ../../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _staticDisclaimer = __webpack_require__(/*! ../../commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var StaticPagesView = function (_React$Component) {
    _inherits(StaticPagesView, _React$Component);

    function StaticPagesView(props) {
        _classCallCheck(this, StaticPagesView);

        var _this = _possibleConstructorReturn(this, (StaticPagesView.__proto__ || Object.getPrototypeOf(StaticPagesView)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(StaticPagesView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (window) {
                window.scrollTo(0, 0);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            //const parsed = queryString.parse(window.location.search)
            var parsed = queryString.parse(this.props.location.search);

            var pathname = '';
            if (this.props.location && this.props.location.pathname) {
                pathname = this.props.location.pathname;
            }

            return _react2.default.createElement(
                'div',
                { className: 'profile-body-wrap' },
                parsed.fromApp ? '' : _react2.default.createElement(_DesktopProfileHeader2.default, null),
                pathname && pathname.includes('doctorsignup') ? '' : _react2.default.createElement('div', { className: 'sub-header d-none d-lg-block' }),
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/about', render: function render(props) {
                        return _react2.default.createElement(_aboutUs2.default, _extends({}, _this2.props, props, { fromApp: parsed.fromApp ? parsed.fromApp : false }));
                    } }),
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/contact', render: function render(props) {
                        return _react2.default.createElement(_contactUs2.default, _extends({}, _this2.props, props, { fromApp: parsed.fromApp ? parsed.fromApp : false }));
                    } }),
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/privacy', render: function render(props) {
                        return _react2.default.createElement(_privacy2.default, _extends({}, _this2.props, props));
                    } }),
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/howitworks', render: function render(props) {
                        return _react2.default.createElement(_howitWorks2.default, _extends({}, _this2.props, props));
                    } }),
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/disclaimer', render: function render(props) {
                        return _react2.default.createElement(_disclaimer2.default, _extends({}, _this2.props, props, { fromApp: parsed.fromApp ? parsed.fromApp : false }));
                    } }),
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/terms', render: function render(props) {
                        return _react2.default.createElement(_terms2.default, _extends({}, _this2.props, props, { fromApp: parsed.fromApp ? parsed.fromApp : false, forScroll: parsed.forBookingScroll ? parsed.forBookingScroll : false }));
                    } }),
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/careers', render: function render(props) {
                        return _react2.default.createElement(_careers2.default, _extends({}, _this2.props, props));
                    } }),
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/media', render: function render(props) {
                        return _react2.default.createElement(_media2.default, _extends({}, _this2.props, props));
                    } }),
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/doctorsignup', render: function render(props) {
                        return _react2.default.createElement(_doctorsignup2.default, _extends({}, _this2.props, props, { member_type: parsed.member_type ? parseInt(parsed.member_type) : '' }));
                    } }),
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/cancelpolicy', render: function render(props) {
                        return _react2.default.createElement(_cancelPolicy2.default, _extends({}, _this2.props, props, { fromApp: parsed.fromApp ? parsed.fromApp : false }));
                    } }),
                parsed.fromApp ? _react2.default.createElement(_staticDisclaimer2.default, null) : _react2.default.createElement(_footer2.default, null)
            );
        }
    }]);

    return StaticPagesView;
}(_react2.default.Component);

exports.default = StaticPagesView;

/***/ }),

/***/ "./dev/js/components/commons/staticPages/aboutUs.js":
/*!**********************************************************!*\
  !*** ./dev/js/components/commons/staticPages/aboutUs.js ***!
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

var _HelmetTags = __webpack_require__(/*! ../HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AboutUs = function (_React$Component) {
    _inherits(AboutUs, _React$Component);

    function AboutUs(props) {
        _classCallCheck(this, AboutUs);

        var _this = _possibleConstructorReturn(this, (AboutUs.__proto__ || Object.getPrototypeOf(AboutUs)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(AboutUs, [{
        key: 'navigateTo',
        value: function navigateTo(where) {
            this.props.history.push(where);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var mainClass = void 0;
            var headingClass = void 0;
            if (this.props.fromApp) {
                mainClass = "container about-container appUrlPadding";
                headingClass = "col-12 text-center d-none d-md-block";
            } else {
                mainClass = 'container about-container';
                headingClass = "col-12 text-center";
            }

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: mainClass },
                    _react2.default.createElement(_HelmetTags2.default, { tagsData: {
                            title: 'About Us | Docprime',
                            description: 'Docprime: Docprime is one stop health care solution for patients and doctors. Patients can book doctors online and doctors can manage patients online.'
                        } }),
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: headingClass },
                            _react2.default.createElement(
                                'p',
                                { className: 'fw-500 about-heading' },
                                'About Us'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12' },
                            this.props.fromApp ? _react2.default.createElement(
                                'span',
                                null,
                                'This Mobile App is managed and operated by Docprime Technologies Private Limited. '
                            ) : '',
                            _react2.default.createElement(
                                'p',
                                { className: 'fw-500 about-content' },
                                'Docprime, a PolicyBazaar group company, is a young online medical services provider. Started with a team of young, experienced and vibrant professionals, the company has a humanitarian approach towards providing easy access to health care services.'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12 col-md-4 feature-col' },
                            _react2.default.createElement(
                                'div',
                                { className: 'feature-img-div text-center' },
                                _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/about-1.png", className: 'feature-img' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'feature-div text-center' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'fw-500 feature-heading' },
                                    'Affordable'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'feature-content' },
                                    'We offer our multiple services at an affordable price. We aim at making health care services easily accessible and affordable to ensure that patients do not hesitate while consulting doctors online.'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12 col-md-4 feature-col' },
                            _react2.default.createElement(
                                'div',
                                { className: 'feature-img-div text-center' },
                                _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/about-2.png", className: 'feature-img' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'feature-div text-center' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'fw-500 feature-heading' },
                                    'Safe'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'feature-content' },
                                    'We work round the clock to ensure highest levels of data security. With our platform, the records of both, the patients and the doctors are safe. Our separate infrastructure ensures that the provider\u2019s data and the consumer\u2019s data are isolated from each other.'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12 col-md-4 feature-col' },
                            _react2.default.createElement(
                                'div',
                                { className: 'feature-img-div text-center' },
                                _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/about-3.png", className: 'feature-img' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'feature-div text-center' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'fw-500 feature-heading' },
                                    'Straight Forward'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'feature-content' },
                                    'The Docprime platform is easy to navigate and has a straightforward approach. The minimalist design of the website ensures that the consumers can find the information for their reference swiftly and effortlessly.'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12 about-content-div' },
                            _react2.default.createElement(
                                'p',
                                { className: 'fw-500 about-content' },
                                'Docprime is dedicated towards the welfare of the people and to make a closely knit community of doctors and patients.'
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'fw-500 about-content' },
                                'Today, the average lifestyle of a human being is fast-paced. In this fast-paced lifestyle, people ignore their health that leads to several health complications. At Docprime, we aim to be the guide and the helping hand to ensure better health for everyone and help them at each step towards health improvement.'
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'fw-500 about-content' },
                                'Docprime aims at connecting people by providing them with every piece of information they need to secure themselves and their family\u2019s well-being. Assessing health issues, consulting experienced medical practitioners and storing health records are few services offered by the company.'
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'fw-500 about-content' },
                                'Not only are we dedicated to providing a better health to people, we also ensure that they get easy access to country\u2019s best doctors in the most convenient and affordable ways. On our way to creating an experience truly prime for users and healthcare experts, we overcome multitudinous challenges almost every day.'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12 col-md-4 about-steps-div' },
                            _react2.default.createElement(
                                'div',
                                { className: 'about-steps' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'step-icon-div' },
                                    _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/step-calendar.svg" })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'step-heading-div text-center' },
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'fw-500 step-heading' },
                                        'Book Appointments'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'step-content-div' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'step-content' },
                                        _react2.default.createElement('div', { className: 'step-circle' }),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'step-data fw-500' },
                                            '10,000+ Verified Doctors'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'step-content' },
                                        _react2.default.createElement('div', { className: 'step-circle' }),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'step-data fw-500' },
                                            'Book Appointments 24*7'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'step-content' },
                                        _react2.default.createElement('div', { className: 'step-circle' }),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'step-data fw-500' },
                                            'Find Doctors Easily'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'step-content' },
                                        _react2.default.createElement('div', { className: 'step-circle' }),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'step-data fw-500' },
                                            'Efficient Patient Administration'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'step-content' },
                                        _react2.default.createElement('div', { className: 'step-circle' }),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'step-data fw-500' },
                                            'Swift Appointment Confirmation'
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12 col-md-4 about-steps-div' },
                            _react2.default.createElement(
                                'div',
                                { className: 'about-steps' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'step-icon-div' },
                                    _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/step-chat.svg" })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'step-heading-div text-center' },
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'fw-500 step-heading' },
                                        'Online Chat Consultation'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'step-content-div' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'step-content' },
                                        _react2.default.createElement('div', { className: 'step-circle' }),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'step-data fw-500' },
                                            'Get Docprime app for seamless online chat consultation'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'step-content' },
                                        _react2.default.createElement('div', { className: 'step-circle' }),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'step-data fw-500' },
                                            'Low Response Time'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'step-content' },
                                        _react2.default.createElement('div', { className: 'step-circle' }),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'step-data fw-500' },
                                            'Verified Doctors Available at your Disposal'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'step-content' },
                                        _react2.default.createElement('div', { className: 'step-circle' }),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'step-data fw-500' },
                                            '100% Confidential and Private'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'step-content' },
                                        _react2.default.createElement('div', { className: 'step-circle' }),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'step-data fw-500' },
                                            'On-Demand Consultation Available Anytime and Anywhere'
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12 col-md-4 about-steps-div' },
                            _react2.default.createElement(
                                'div',
                                { className: 'about-steps' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'step-icon-div' },
                                    _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/step-partner.svg" })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'step-heading-div text-center' },
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'fw-500 step-heading' },
                                        'Become a Partner with Docprime'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'step-content-div' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'step-content' },
                                        _react2.default.createElement('div', { className: 'step-circle' }),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'step-data fw-500' },
                                            'Reach New Patients'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'step-content' },
                                        _react2.default.createElement('div', { className: 'step-circle' }),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'step-data fw-500' },
                                            'Maximize your Earnings'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'step-content' },
                                        _react2.default.createElement('div', { className: 'step-circle' }),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'step-data fw-500' },
                                            'Keep Track of Patients and their Feedback'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'step-content' },
                                        _react2.default.createElement('div', { className: 'step-circle' }),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'step-data fw-500' },
                                            'Edit your Profile Effortlessly'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'step-content' },
                                        _react2.default.createElement('div', { className: 'step-circle' }),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'step-data fw-500' },
                                            'Chat With Patients without Giving your Personal Contact Details'
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12 about-content-div' },
                            _react2.default.createElement(
                                'p',
                                { className: 'fw-500 about-content' },
                                'Docprime ensures that you get the right solution and treatment, and that is why we have hired country\u2019s best and most experienced doctors who are knowledgeable, skilled and the best in their areas of expertise. They are available to solve your health related queries and provide on-demand healthcare solutions, 24X7X365.'
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'fw-500 about-content' },
                                'At Docprime, we understand the value of your time and that\u2019s why we want to offer you the best healthcare right from the comfort of your home. We provide doctors, physiotherapists and nurses for home visits to ensure that you don\u2019t need to step out when the need arises.'
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'fw-500 about-content' },
                                'We aim to tap the latest technology to find solutions to various issues in order to disrupt the global healthcare delivery system. Our innovative healthcare solutions are a step towards bridging the gap between healthcare experts and the patients.'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12' },
                            _react2.default.createElement(
                                'button',
                                { onClick: function onClick() {
                                        _this2.props.fromApp ? _this2.navigateTo("/contact?fromApp=true") : _this2.navigateTo("/contact");
                                    }, className: 'contact-btn' },
                                'Contact Us'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'about_managment_container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'container' },
                        _react2.default.createElement(
                            'div',
                            { className: headingClass },
                            _react2.default.createElement(
                                'p',
                                { className: 'fw-500 about-heading' },
                                'About management'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'about_mng_card_cont' },
                            _react2.default.createElement(
                                'div',
                                { className: 'row' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-md-12 col-lg-6 mrng-bottom-20' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'about_mng_cards' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'abt-img-text' },
                                            _react2.default.createElement('img', { src: "/assets" + "/img/abt-img/ys.png" }),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'abt-usr-nm' },
                                                _react2.default.createElement(
                                                    'h4',
                                                    null,
                                                    'Yashish Dahiya'
                                                ),
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'Co-founder & CEO, '
                                                ),
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'PolicyBazaar Group of Companies'
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'abt-content' },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Yashish Dahiya is the Chief Executive Officer and Co-Founder of PolicyBazaar Group of Companies. He has built Policybazaar.com into a 3,000-crore plus insurance marketplace within a short span of 10 years. Under his leadership, the group company started PaisaBazaar.com, an online financial marketplace for investment and lending products in 2014.  With the backing of a host of investors, Yashish has now set his sights on transforming the healthcare industry overall with the launch of Docprime.com. Before starting his entrepreneurial journey with PolicyBazaar.com, he was the Managing Director of ebookers.com, a leading pan-European online travel distributor, which was also an FTSE 250 company listed on Nasdaq. Yashish was also a management consultant with Bain & Co. in their London office. Yashish holds a Bachelor\u2019s Degree in Engineering from IIT Delhi, a Post Graduate Diploma in Management from IIM Ahmedabad, and an MBA from INSEAD. Yashish likes to spend his spare time outdoors, is the current masters national champion in swimming and is the fifth fastest Ironman from India across all ages. '
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-md-12 col-lg-6 mrng-bottom-20' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'about_mng_cards' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'abt-img-text' },
                                            _react2.default.createElement('img', { src: "/assets" + "/img/abt-img/alk.png" }),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'abt-usr-nm' },
                                                _react2.default.createElement(
                                                    'h4',
                                                    null,
                                                    'Alok Bansal'
                                                ),
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'Co-founder & CFO, '
                                                ),
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'PolicyBazaar Group of Companies'
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'abt-content' },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Alok Bansal is the Co-Founder & CFO of PolicyBazaar Group of Companies . He heads various functions including corporate finance and controllership, tax, treasury, strategic planning, and analytics. He firmly believes that the primary responsibility of a CFO is to accomplish business goals rather than just concentrating on functional goals. According to him, the success of any business lies in working with a team with different mind sets, allowing them the flexibility and freedom to experiment, innovate and contribute. Alok\u2019s core strength lies in strategic thinking, process control, and execution. Prior to joining PolicyBazaar.com, Alok has worked in various cross-functional leadership roles with Mahindra & Mahindra, iGate Global Solutions and GE. He was recognized as one of the top 100 CFOs in the country by the CFO India Magazine in 2016. Alok has a special interest in science and technology, economic empowerment, education and civil rights.'
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-md-12 col-lg-6 mrng-bottom-20' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'about_mng_cards' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'abt-img-text' },
                                            _react2.default.createElement('img', { src: "/assets" + "/img/abt-img/ash.png" }),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'abt-usr-nm' },
                                                _react2.default.createElement(
                                                    'h4',
                                                    null,
                                                    'Ashish Gupta '
                                                ),
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'CEO,\xA0Docprime.com\xA0and '
                                                ),
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'Chief Tech Evangelist, Policybazaar.com '
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'abt-content' },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Ashish Gupta is currently the CEO of Docprime.com and is responsible for running all facets of the business. He is passionate about the health industry and in his present position, committed to build an integrated ecosystem to bridge the gap between doctors and patients.  Prior to this, he served as the Chief Technology Officer (CTO) of Policybazaar.com which he joined in 2015. With an overall experience of 16 years, Ashish has been at a realm of many innovations. Before joining the revolutionary online insurance company, Ashish was the Vice-President and CTO at HealthKart, a premier e-health store. He also had his own start-up called CouponVoodoo.com, which aimed at simplifying a shopper\u2019s buying decision based upon pricing.  His initial few jobs included being a management trainee with the automotive division of ICI Paints and learning and growing by being involved in other cross-functional roles. Apart from working, he enjoys traveling and exploring other countries or cities. A graduate in Chemical Engineering from IIT Delhi, Ashish loves being behind the wheels and going on long drives.'
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-md-12 col-lg-6 mrng-bottom-20' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'about_mng_cards' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'abt-img-text' },
                                            _react2.default.createElement('img', { src: "/assets" + "/img/abt-img/abhay.png" }),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'abt-usr-nm' },
                                                _react2.default.createElement(
                                                    'h4',
                                                    null,
                                                    'Abhay Singavi'
                                                ),
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'Chief Operating Officer'
                                                ),
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'Docprime.com'
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'abt-content' },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Abhay Singavi is Chief Operating Officer at Docprime.com.  He is responsible for executing the company\u2019s business strategy, driving the overall growth and performance of key business units. Abhay brings in more than 12 years of leadership experience in the healthcare sector.',
                                                _react2.default.createElement('br', null),
                                                _react2.default.createElement('br', null),
                                                'Prior to joining Docprime, Abhay was leading key strategic initiatives covering clinical outcomes, service excellence, operation optimization, business innovation and a variety of leadership roles at Medanta for 7 years. He was also youngest CEO in the healthcare industry while he served at Narayana Health group as CEO - Preventive Health where he was instrumental in handling the preventive health and wellness management across group.'
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AboutUs;
}(_react2.default.Component);

exports.default = AboutUs;

/***/ }),

/***/ "./dev/js/components/commons/staticPages/cancelPolicy.js":
/*!***************************************************************!*\
  !*** ./dev/js/components/commons/staticPages/cancelPolicy.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _HelmetTags = __webpack_require__(/*! ../HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CancelPolicy = function (_React$Component) {
    _inherits(CancelPolicy, _React$Component);

    function CancelPolicy(props) {
        _classCallCheck(this, CancelPolicy);

        var _this = _possibleConstructorReturn(this, (CancelPolicy.__proto__ || Object.getPrototypeOf(CancelPolicy)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(CancelPolicy, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var mainClass = void 0;
            var headingClass = void 0;
            if (this.props.fromApp) {
                mainClass = "container about-container appUrlPadding";
                headingClass = "col-12 text-center d-none d-md-block";
            } else {
                mainClass = 'container about-container';
                headingClass = 'col-12 text-center';
            }
            return _react2.default.createElement(
                'div',
                { className: mainClass },
                _react2.default.createElement(_HelmetTags2.default, { tagsData: {
                        title: 'Cancel Policy | docprime',
                        description: 'docprime: docprime is one stop health care solution for patients and doctors. Patients can book doctors online and doctors can manage patients online.'
                    } }),
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: headingClass },
                        _react2.default.createElement(
                            'p',
                            { className: 'fw-500 about-heading' },
                            'Cancel Policy'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'cancel-policy-text', style: { paddingTop: 0 } },
                            _react2.default.createElement(
                                'ul',
                                { style: { listStyle: 'disc', paddingLeft: 10 } },
                                _react2.default.createElement(
                                    'li',
                                    { className: 'fw-500 mrb-10' },
                                    'For any online paid appointments, you can cancel your scheduled or re-booked appointment and initiate immediate refund at any time. An immediate refund shall be subject to terms and conditions as described under this section mentioned below.'
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'fw-500 mrb-10' },
                                    'In the event, the services are not availed at the appointed date and time and our systems do not validate the URN generated on your registered mobile number, we will automatically cancel your appointment at 12:00 midnight of next date of your appointment date.'
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'fw-500 mrb-10' },
                                    'Occasionally, appointments may be cancelled or postponed by the Third Party Service Provider. Should this occur, we will attempt to contact or inform you and you may re-schedule your appointment as per your convenience or visit www.docprime.com for fresh/re-booking on the Website.'
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'fw-500 mrb-10' },
                                    'Cancellation through mail or call center is allowed for all the bookings until the time of appointment or 12:00 midnight of next date of your appointment date. In such cases, we will initiate an immediate refund of your money as per the process defined under Refund, Rescheduling and Cancellation section under the End User Agreement. ',
                                    _react2.default.createElement(
                                        'u',
                                        { style: { color: 'var(--text--primary--color)', cursor: 'pointer', display: 'inline-block' }, onClick: function onClick() {
                                                return _this2.props.history.push(_this2.props.fromApp ? '/terms?forBookingScroll=true&fromApp=true' : '/terms?forBookingScroll=true');
                                            } },
                                        'click here'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return CancelPolicy;
}(_react2.default.Component);

exports.default = CancelPolicy;

/***/ }),

/***/ "./dev/js/components/commons/staticPages/careers.js":
/*!**********************************************************!*\
  !*** ./dev/js/components/commons/staticPages/careers.js ***!
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

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _HelmetTags = __webpack_require__(/*! ../HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Careers = function (_React$Component) {
	_inherits(Careers, _React$Component);

	function Careers(props) {
		_classCallCheck(this, Careers);

		var _this = _possibleConstructorReturn(this, (Careers.__proto__ || Object.getPrototypeOf(Careers)).call(this, props));

		_this.changeHandler = function (event, key) {
			_this.setState(_defineProperty({}, key, event.target.value));
		};

		_this.filePicker = function (e) {
			_this.setState({
				'resume': e.target.files[0]
			});
		};

		_this.state = {
			resume: null,
			name: "",
			mobile: "",
			email: "",
			profile_type: ""
		};
		return _this;
	}

	_createClass(Careers, [{
		key: 'onSubmitProfile',
		value: function onSubmitProfile(e) {
			var _this2 = this;

			e.preventDefault();
			var form_data = new FormData();
			form_data.append("resume", this.state.resume, "resume.pdf");
			form_data.append('name', this.state.name);
			form_data.append('mobile', this.state.mobile);
			form_data.append('email', this.state.email);
			form_data.append('profile_type', this.state.profile_type);
			this.props.submitCareerProfile(form_data, function (error, res) {
				_this2.setState({
					resume: null,
					name: "",
					mobile: "",
					email: "",
					profile_type: ""
				});
				_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Your job application submitted successfully." });
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_HelmetTags2.default, { tagsData: {
						title: 'Career at docprime',
						description: "Fine career opportunity at docprime, India's one stop health care solution."
					} }),
				_react2.default.createElement(
					'div',
					{ className: 'laptop-img-div absolute-images' },
					_react2.default.createElement('img', { src: "/assets" + "/img/career/laptop.png" })
				),
				_react2.default.createElement(
					'div',
					{ className: 'pages-img-div absolute-images' },
					_react2.default.createElement('img', { src: "/assets" + "/img/career/pages.png" })
				),
				_react2.default.createElement(
					'div',
					{ className: 'container careers-container' },
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement(
							'div',
							{ className: 'col-12 col-md-6 hiring-col' },
							_react2.default.createElement(
								'div',
								{ className: 'hiring-heading-div' },
								_react2.default.createElement('img', { src: "/assets" + "/img/career/hiring.png", className: 'hiring-img' }),
								_react2.default.createElement(
									'h1',
									{ className: 'hiring-heading' },
									'We Are Hiring !'
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'hiring-desc-div' },
								_react2.default.createElement(
									'h3',
									{ className: 'hiring-desc' },
									'We are hiring for multiple positions.'
								)
							),
							_react2.default.createElement('img', { src: "/assets" + "/img/career/arrow.svg", className: 'careers-arrow-img absolute-images' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-12 col-md-6 hiring-col' },
							_react2.default.createElement(
								'div',
								{ className: 'hiring-form-div' },
								_react2.default.createElement(
									'form',
									{ onSubmit: function onSubmit(e) {
											return _this3.onSubmitProfile(e);
										} },
									_react2.default.createElement(
										'div',
										{ className: 'form-group' },
										_react2.default.createElement(
											'select',
											{ className: 'form-control', value: this.state.profile_type, onChange: function onChange(event) {
													return _this3.changeHandler(event, 'profile_type');
												}, required: true },
											_react2.default.createElement(
												'option',
												{ value: '' },
												'Select Function'
											),
											_react2.default.createElement(
												'option',
												{ value: '1' },
												'Product'
											),
											_react2.default.createElement(
												'option',
												{ value: '2' },
												'Technology'
											),
											_react2.default.createElement(
												'option',
												{ value: '3' },
												'Sales'
											),
											_react2.default.createElement(
												'option',
												{ value: '4' },
												'Content'
											),
											_react2.default.createElement(
												'option',
												{ value: '5' },
												'Marketing'
											),
											_react2.default.createElement(
												'option',
												{ value: '6' },
												'QC'
											),
											_react2.default.createElement(
												'option',
												{ value: '7' },
												'Service & Support'
											),
											_react2.default.createElement(
												'option',
												{ value: '8' },
												'Doctors'
											)
										)
									),
									_react2.default.createElement(
										'div',
										{ className: 'form-group' },
										_react2.default.createElement('input', { type: 'text', id: 'name', className: 'form-control', placeholder: 'Your Name', value: this.state.name, onChange: function onChange(event) {
												return _this3.changeHandler(event, 'name');
											}, required: true })
									),
									_react2.default.createElement(
										'div',
										{ className: 'form-group' },
										_react2.default.createElement('input', { type: 'number', id: 'mobile', className: 'form-control', min: 5000000000, max: 9999999999, placeholder: 'Mobile Number', value: this.state.mobile, onChange: function onChange(event) {
												return _this3.changeHandler(event, 'mobile');
											}, required: true })
									),
									_react2.default.createElement(
										'div',
										{ className: 'form-group' },
										_react2.default.createElement('input', { type: 'email', id: 'email', className: 'form-control', placeholder: 'Email', value: this.state.email, onChange: function onChange(event) {
												return _this3.changeHandler(event, 'email');
											}, required: true })
									),
									_react2.default.createElement(
										'div',
										{ className: 'upload-resume-div' },
										_react2.default.createElement(
											'label',
											{ className: 'resume-label', htmlFor: 'upload-resume' },
											'Upload Resume'
										),
										_react2.default.createElement(
											'div',
											{ className: 'careers-upload-btn' },
											_react2.default.createElement('img', { src: "/assets" + "/img/career/upload.svg", className: 'upload-icon' }),
											_react2.default.createElement(
												'p',
												{ className: 'careers-upload-text' },
												'Upload'
											)
										),
										_react2.default.createElement(
											'div',
											{ className: 'careers-input-file' },
											_react2.default.createElement('input', { type: 'file', name: 'resume', id: 'upload-resume', onChange: function onChange(e) {
													return _this3.filePicker(e);
												}, required: true })
										)
									),
									_react2.default.createElement(
										'div',
										{ className: 'careers-submit-btn-div' },
										_react2.default.createElement(
											'button',
											{ type: 'submit', className: 'btn btn-primary careers-send-btn' },
											'Submit'
										)
									)
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'coffee-img-div absolute-images' },
								_react2.default.createElement('img', { src: "/assets" + "/img/career/coffee.png", className: 'coffee-img' })
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'container-fluid absolute-images' },
					_react2.default.createElement(
						'div',
						{ className: 'row career-img-row' },
						_react2.default.createElement(
							'div',
							{ className: 'bag-img career-img-div' },
							_react2.default.createElement('img', { src: "/assets" + "/img/career/bag.png", className: 'career-img' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'specs-img career-img-div' },
							_react2.default.createElement('img', { src: "/assets" + "/img/career/specs.png", className: 'career-img' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'pen-img career-img-div' },
							_react2.default.createElement('img', { src: "/assets" + "/img/career/pen.png", className: 'career-img' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'cv-img career-img-div' },
							_react2.default.createElement('img', { src: "/assets" + "/img/career/cv.png", className: 'career-img' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'exam-img career-img-div' },
							_react2.default.createElement('img', { src: "/assets" + "/img/career/exam.png", className: 'career-img' })
						)
					)
				)
			);
		}
	}]);

	return Careers;
}(_react2.default.Component);

exports.default = Careers;

/***/ }),

/***/ "./dev/js/components/commons/staticPages/contactUs.js":
/*!************************************************************!*\
  !*** ./dev/js/components/commons/staticPages/contactUs.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _HelmetTags = __webpack_require__(/*! ../HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactUs = function (_React$Component) {
    _inherits(ContactUs, _React$Component);

    function ContactUs(props) {
        _classCallCheck(this, ContactUs);

        var _this = _possibleConstructorReturn(this, (ContactUs.__proto__ || Object.getPrototypeOf(ContactUs)).call(this, props));

        _this.changeHandler = function (event, key) {
            _this.setState(_defineProperty({}, key, event.target.value));
        };

        _this.state = {
            name: "",
            mobile: "",
            email: "",
            message: ""
        };
        return _this;
    }

    _createClass(ContactUs, [{
        key: 'onSubmitData',
        value: function onSubmitData(e) {
            var _this2 = this;

            e.preventDefault();
            this.props.submitContactMessage(this.state, function (error, res) {
                _this2.setState({
                    name: "",
                    mobile: "",
                    email: "",
                    message: ""
                });
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Contact Request taken successfully." });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var mainClass = void 0;
            if (this.props.fromApp) {
                mainClass = "container about-container appUrlPadding";
            } else {
                mainClass = 'container about-container';
            }
            return _react2.default.createElement(
                'div',
                { className: mainClass },
                _react2.default.createElement(_HelmetTags2.default, { tagsData: {
                        title: 'Contact Us | docprime',
                        description: 'Contact Us: Contact docprime for query related to booking, signup and more.'
                    } }),
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12 text-center' },
                        _react2.default.createElement(
                            'p',
                            { className: 'fw-500 about-heading', style: { fontSize: 20 } },
                            'Contact Us'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'contact-text' },
                            _react2.default.createElement(
                                'p',
                                { className: 'fw-500' },
                                'Feel like contacting us? Submit your queries here and we will get back to you as soon as possible.'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12 col-md-6 mrt-20' },
                        _react2.default.createElement(
                            'div',
                            { className: 'shadow' },
                            _react2.default.createElement(
                                'div',
                                { className: 'form-title', style: { fontSize: 16 } },
                                'Send Us a Message'
                            ),
                            _react2.default.createElement(
                                'form',
                                { onSubmit: this.onSubmitData.bind(this) },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'contact-fields' },
                                    _react2.default.createElement('input', { type: 'text', className: 'form-control', placeholder: 'Name', value: this.state.name, onChange: function onChange(e) {
                                            _this3.changeHandler(e, 'name');
                                        }, required: true })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'contact-fields' },
                                    _react2.default.createElement('input', { type: 'email', className: 'form-control', placeholder: 'Email', value: this.state.email, onChange: function onChange(e) {
                                            _this3.changeHandler(e, 'email');
                                        }, required: true })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'contact-fields' },
                                    _react2.default.createElement('input', { type: 'number', className: 'form-control', placeholder: 'Mobile Number', max: 9999999999, min: 5000000000, value: this.state.mobile, onChange: function onChange(e) {
                                            _this3.changeHandler(e, 'mobile');
                                        }, required: true })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'contact-fields' },
                                    _react2.default.createElement('textarea', { className: 'form-control', placeholder: 'Message', rows: 3, value: this.state.message, onChange: function onChange(e) {
                                            _this3.changeHandler(e, 'message');
                                        }, required: true })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'submit' },
                                    _react2.default.createElement(
                                        'button',
                                        { type: 'submit', className: 'btn submit-btn mrt-20' },
                                        'Submit'
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12 offset-md-1 col-md-5 mrt-20' },
                        _react2.default.createElement(
                            'div',
                            { className: 'contact-text' },
                            _react2.default.createElement(
                                'p',
                                { className: 'fw-500 mrb-10' },
                                'You can also contact us via :'
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'fw-500 mrb-10' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'fw-700' },
                                    'E-mail :'
                                ),
                                ' customercare@docprime.com'
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'fw-500' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'fw-700' },
                                    'Phone :'
                                ),
                                ' 1800-123-9419'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ContactUs;
}(_react2.default.Component);

exports.default = ContactUs;

/***/ }),

/***/ "./dev/js/components/commons/staticPages/disclaimer.js":
/*!*************************************************************!*\
  !*** ./dev/js/components/commons/staticPages/disclaimer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _HelmetTags = __webpack_require__(/*! ../HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Disclaimer = function (_React$Component) {
    _inherits(Disclaimer, _React$Component);

    function Disclaimer(props) {
        _classCallCheck(this, Disclaimer);

        var _this = _possibleConstructorReturn(this, (Disclaimer.__proto__ || Object.getPrototypeOf(Disclaimer)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(Disclaimer, [{
        key: 'render',
        value: function render() {
            var mainClass = void 0;
            var headingClass = void 0;
            if (this.props.fromApp) {
                mainClass = "container about-container appUrlPadding";
                headingClass = "col-12 text-center d-none d-md-block";
            } else {
                mainClass = 'container about-container';
                headingClass = "col-12 text-center";
            }
            return _react2.default.createElement(
                'div',
                { className: mainClass },
                _react2.default.createElement(_HelmetTags2.default, { tagsData: {
                        title: 'Disclaimer | docprime',
                        description: 'Disclaimer: Read Disclaimer document of docprime.'
                    } }),
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: headingClass },
                        _react2.default.createElement(
                            'p',
                            { className: 'fw-500 about-heading', style: { marginBottom: 20 } },
                            'Disclaimer'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12 privacy-desc-div' },
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'The information contained on Docprime Technologies Private Limited website www.docprime.com (\u201CWebsite\u201D) is solely provided for informational purposes only and is not meant to substitute for the advice provided by your personal doctor and/or other person(s) specializing in healthcare/medical care. Information and statements regarding various tests offered by labs/hospitals or consultancy programs, treatments, is solely for general reading and is a compilation from open source that was available to us and/or the information supplied to us from third party labs/hospitals/doctors. Anyconsultation and various test(s) are intended for general purpose only and are not meant to be used in emergencies/serious illnesses requiring physical/face to face consultation. In case of any negligence on the part of the User of website in acting on the same and the condition of the User deteriorates, Docprime shall not be liable for any consequences arising out of, in relation or in connection, or as a result of the same.'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'Any interactions and associated issues with the labs/hospitals/doctors on the Website, is strictly between User and the labs/hospitals/doctors. User shall not hold Docprime responsible for any and all such interactions and associated issues. If the User decides to engage with a lab/hospital/doctor to provide diagnostic services, the User will do so at his/her own risk.'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'Be it noted, the information provided here is not medical advice hence is not intended to replace consultation with a medical practitioner, and should not be treated as an alternative to medical diagnosis or treatment from your doctor, or any other licensed healthcare professional. Docprime is not a medical service provider or a clinical establishment, nor it is involved in providing any healthcare or medical advice or diagnosis service, it shall hence not be responsible and owns no liability to Users for any outcome from the consultation and or the various test offered by lab(s)s on the website.'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'Do not self-diagnose or treat yourself based on the information provided on this Website. We further assert, please seek medical advice and do not disregard medical advice, or discontinue medical treatment by relying upon the information provided on this Website. External links to videos and other websites provided here are purely for information purposes and Docprime does not warrant or guarantee the accuracy, genuineness, reliability of such links/websites. We do not guarantee the correctness of the information, please exercise discretion while applying the information to use. The information provided hereunder is not intended to be a substitute for getting in touch with emergency healthcare. If you (or the person you intend to provide information to) are facing a medical emergency, please contact an ambulance service or hospital directly.'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc mrt-20' },
                            _react2.default.createElement(
                                'strong',
                                null,
                                'Copyright 2020. docprime.com. All rights reserved.'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Disclaimer;
}(_react2.default.Component);

exports.default = Disclaimer;

/***/ }),

/***/ "./dev/js/components/commons/staticPages/doctorsignup.js":
/*!***************************************************************!*\
  !*** ./dev/js/components/commons/staticPages/doctorsignup.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Doctorsignup = function (_React$Component) {
	_inherits(Doctorsignup, _React$Component);

	function Doctorsignup(props) {
		_classCallCheck(this, Doctorsignup);

		var _this = _possibleConstructorReturn(this, (Doctorsignup.__proto__ || Object.getPrototypeOf(Doctorsignup)).call(this, props));

		_this.changeHandler = function (event, key) {
			_this.setState(_defineProperty({}, key, event.target.value));

			if (key === 'city') {
				if (event.target.value === "") {
					_this.setState({ cityDropdownVisible: false });
				} else {
					_this.setState({ cityDropdownVisible: true });
					_this.props.getCities(event.target.value);
				}
			}
		};

		_this.setCity = function (cityName, cityId) {
			_this.setState({
				city: cityName,
				city_name: cityId,
				cityDropdownVisible: false
			});
		};

		_this.state = {
			name: "",
			mobile: "",
			email: "",
			city: "",
			member_type: _this.props.member_type ? _this.props.member_type : '',
			cityDropdownVisible: false,
			city_name: "",
			utm_params: props.utm_tags || {},
			source: 'Consumer',
			showSuccessBox: false
		};
		return _this;
	}

	_createClass(Doctorsignup, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(props) {
			if (this.state.utm_params != props.utm_tags) {
				this.setState({ utm_params: props.utm_tags });
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.setState({ showSuccessBox: false });

			if (window) {
				(function (window, document) {

					var loader = function loader() {

						var script = document.createElement("script"),
						    tag = document.getElementsByTagName("script")[0];

						script.src = "https://www.bajajfinserv.in/sites/bajaj/pstp/js/DocPrimeexternalwidget.js";

						tag.parentNode.insertBefore(script, tag);
					};

					window.addEventListener ? window.addEventListener("load", loader, false) : window.attachEvent("onload", loader);
				})(window, document);
			}
		}
	}, {
		key: 'onSubmitData',
		value: function onSubmitData(e) {
			var _this2 = this;

			e.preventDefault();
			this.props.signupDoctor(this.state, function (error, res) {
				_this2.setState({
					name: "",
					mobile: "",
					email: "",
					city: "",
					member_type: "",
					city_name: "",
					showSuccessBox: true
				});
				_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Sign Up was successful." });
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(
				_react2.default.Fragment,
				null,
				_react2.default.createElement('div', { id: 'myWidget' }),
				_react2.default.createElement('div', { className: 'sub-header d-none d-lg-block' }),
				_react2.default.createElement(
					'div',
					{ className: 'container about-container' },
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						this.state.showSuccessBox ? _react2.default.createElement(
							'div',
							{ className: 'col-12' },
							_react2.default.createElement(
								'div',
								{ className: 'submit-alert alert-success', role: 'alert' },
								_react2.default.createElement(
									'strong',
									null,
									'Thank you '
								),
								'for choosing ',
								_react2.default.createElement(
									'a',
									{ href: '/', onClick: function onClick(e) {
											e.preventDefault();
											_this3.props.history.push('/');
										} },
									'docprime.com'
								),
								'. Our team will get in touch with you shortly.'
							)
						) : '',
						_react2.default.createElement(
							'div',
							{ className: 'col-12 dsp-main-info-div' },
							_react2.default.createElement(
								'div',
								{ className: 'dsp-phone-img-div' },
								_react2.default.createElement('img', { src: "/assets" + "/img/doc-signup.png", style: { width: 320 }, className: 'dsp-phone-img' })
							),
							_react2.default.createElement(
								'div',
								{ className: 'dsp-img-info-div' },
								_react2.default.createElement(
									'div',
									{ className: 'dsp-logo-div' },
									_react2.default.createElement('img', { src: 'https://cdn.docprime.com/static/web/images/logo.9ea116657a60.png', className: 'dsp-logo', style: { width: 160 } })
								),
								_react2.default.createElement(
									'div',
									{ className: 'dsp-detail-text-div mrt-20' },
									_react2.default.createElement(
										'p',
										{ className: 'dsp-detail-text' },
										'Become our partner & help us serve millions of patients across India'
									)
								),
								_react2.default.createElement(
									'form',
									{ className: 'doc-lab-sgnup-cont', onSubmit: function onSubmit(e) {
											return _this3.onSubmitData(e);
										}, autoComplete: 'off', autoCorrect: 'off', spellCheck: 'off' },
									_react2.default.createElement(
										'div',
										{ className: 'form-group' },
										_react2.default.createElement(
											'label',
											null,
											'SignUp as'
										),
										_react2.default.createElement(
											'select',
											{ name: 'member_type', className: 'form-control', value: this.state.member_type, required: true, id: 'dsp-select-profession', onChange: function onChange(event) {
													return _this3.changeHandler(event, 'member_type');
												} },
											_react2.default.createElement(
												'option',
												{ value: '' },
												'Select'
											),
											_react2.default.createElement(
												'option',
												{ value: 1 },
												'Doctor'
											),
											_react2.default.createElement(
												'option',
												{ value: 2 },
												'Diagnostic Center'
											),
											_react2.default.createElement(
												'option',
												{ value: 3 },
												'Hospital/Clinic'
											)
										)
									),
									_react2.default.createElement(
										'div',
										{ className: 'form-group' },
										_react2.default.createElement(
											'label',
											null,
											'Name'
										),
										_react2.default.createElement('input', { type: 'text', name: 'name', maxLength: 255, className: 'form-control', required: true, id: 'dsp-name', value: this.state.name, onChange: function onChange(event) {
												return _this3.changeHandler(event, 'name');
											} })
									),
									_react2.default.createElement(
										'div',
										{ className: 'form-group' },
										_react2.default.createElement(
											'label',
											null,
											'Mobile No:'
										),
										_react2.default.createElement('input', { type: 'number', name: 'mobile', max: 9999999999, id: 'dsp-mobile', className: 'form-control', required: true, min: 5000000000, value: this.state.mobile, onChange: function onChange(event) {
												return _this3.changeHandler(event, 'mobile');
											} })
									),
									_react2.default.createElement(
										'div',
										{ className: 'form-group' },
										_react2.default.createElement(
											'label',
											null,
											'City:'
										),
										_react2.default.createElement(
											'div',
											{ className: 'cty-rltv' },
											_react2.default.createElement('input', { type: 'text', name: 'city_name', maxLength: 255, className: 'form-control', required: true, id: 'dsp-city', value: this.state.city, onChange: function onChange(event) {
													return _this3.changeHandler(event, 'city');
												} }),
											this.state.cityDropdownVisible ? _react2.default.createElement(
												'div',
												{ className: 'dsp-city-dropdown' },
												_react2.default.createElement(
													'ul',
													{ className: 'dsp-city-list' },
													this.props.citiesName.map(function (city) {
														return _react2.default.createElement(
															'li',
															{ onClick: function onClick() {
																	return _this3.setCity(city.name, city.value);
																}, className: 'dsp-city-list-item', key: city.value },
															city.name
														);
													})
												)
											) : ""
										)
									),
									_react2.default.createElement(
										'div',
										{ className: 'form-group' },
										_react2.default.createElement(
											'label',
											null,
											'Email:'
										),
										_react2.default.createElement('input', { type: 'email', name: 'email', pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$', value: this.state.email, className: 'form-control', required: true, maxLength: 254, id: 'dsp-email', onChange: function onChange(event) {
												return _this3.changeHandler(event, 'email');
											} })
									),
									_react2.default.createElement(
										'button',
										{ type: 'submit', className: 'btn btn-primary dsp-send-btn' },
										'Submit'
									)
								)
							)
						)
					)
				)
			);
		}
	}]);

	return Doctorsignup;
}(_react2.default.Component);

exports.default = Doctorsignup;

/***/ }),

/***/ "./dev/js/components/commons/staticPages/howitWorks.js":
/*!*************************************************************!*\
  !*** ./dev/js/components/commons/staticPages/howitWorks.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _HelmetTags = __webpack_require__(/*! ../HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HowitWorks = function (_React$Component) {
    _inherits(HowitWorks, _React$Component);

    function HowitWorks(props) {
        _classCallCheck(this, HowitWorks);

        var _this = _possibleConstructorReturn(this, (HowitWorks.__proto__ || Object.getPrototypeOf(HowitWorks)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(HowitWorks, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'container about-container' },
                _react2.default.createElement(_HelmetTags2.default, { tagsData: {
                        title: 'How docprime Works | docprime',
                        description: 'how does docprime works for the patients and doctors.'
                    } }),
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12 text-center' },
                        _react2.default.createElement(
                            'p',
                            { className: 'fw-500 about-heading' },
                            'How it Works'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12' },
                        _react2.default.createElement(
                            'p',
                            { className: 'fw-500 about-content' },
                            'docprime.com aims to redefine how Indians seek healthcare services. It connects patients with medical consultants in real time and bridges the gap between need and fulfilment using state-of-the-art technology and a robust offline network. It also facilitates booking of doctor appointments and lab tests at discounted rates.'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'fw-500 about-content' },
                            'Our Key Services are:'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row working-row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'working-content-div col-12 col-lg-8' },
                        _react2.default.createElement(
                            'div',
                            { className: 'doctor-consultation' },
                            _react2.default.createElement(
                                'div',
                                { className: 'working-count text-center' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'fw-500' },
                                    '1'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'consultation-text' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'fw-500' },
                                    'Free for Life-Doctor consultation'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'doctext' },
                            _react2.default.createElement(
                                'ul',
                                { style: { listStyleType: 'disc' } },
                                _react2.default.createElement(
                                    'li',
                                    { className: 'fw-500' },
                                    'Free medical consultation over chat and phone from experienced medical consultants'
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'fw-500' },
                                    'Instant and real-time interaction with medical consultants to help identify the root cause of the problem'
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'fw-500' },
                                    'Users can anonymously, or otherwise, communicate with doctors with various areas of expertise directly from their smartphones or desktops'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-lg-4 d-none d-lg-block' },
                        _react2.default.createElement('img', { className: 'consultation-image', src: "/assets" + "/img/doctorConslutation.png" })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row working-row lab' },
                    _react2.default.createElement(
                        'div',
                        { className: 'working-content-div col-12 col-lg-8' },
                        _react2.default.createElement(
                            'div',
                            { className: 'doctor-consultation' },
                            _react2.default.createElement(
                                'div',
                                { className: 'working-count text-center' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'fw-500' },
                                    '2'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'consultation-text' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'fw-500' },
                                    'Doctor Search and Online Appointment Booking'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'doctext' },
                            _react2.default.createElement(
                                'ul',
                                { style: { listStyleType: 'disc' } },
                                _react2.default.createElement(
                                    'li',
                                    { className: 'fw-500' },
                                    'Search the best doctors nearby your area and book your next doctor visit conveniently through us'
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'fw-500' },
                                    'Avail discount upto 50% on booking doctor services'
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'fw-500' },
                                    '14000+doctors from reputed and leading clinics and hospitals on board to provide best healthcare services'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-lg-4 d-none d-lg-block' },
                        _react2.default.createElement('img', { className: 'lab-image', src: "/assets" + "/img/phone.png" })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row working-row lab' },
                    _react2.default.createElement(
                        'div',
                        { className: 'working-content-div col-12 col-lg-8' },
                        _react2.default.createElement(
                            'div',
                            { className: 'doctor-consultation' },
                            _react2.default.createElement(
                                'div',
                                { className: 'working-count text-center' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'fw-500' },
                                    '3'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'consultation-text' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'fw-500' },
                                    'Search and Book Lab Tests at Discounted Rates'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'doctext' },
                            _react2.default.createElement(
                                'ul',
                                { style: { listStyleType: 'disc' } },
                                _react2.default.createElement(
                                    'li',
                                    { className: 'fw-500' },
                                    'Search the best diagnostic lab nearby your area'
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'fw-500' },
                                    'Avail discount upto 60% on lab tests'
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'fw-500' },
                                    'Comprehensive network of reputed 4000+ diagnostic labs'
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'fw-500' },
                                    'Detailed information about procedures of the tests, prices, and relevant preparations are easily accessible on the platform'
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'fw-500' },
                                    'Home collection facility available'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-lg-4 d-none d-lg-block' },
                        _react2.default.createElement('img', { className: 'consultation-image', src: "/assets" + "/img/stayinghealthy.png" })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row working-row lab' },
                    _react2.default.createElement(
                        'div',
                        { className: 'working-content-div col-12 col-lg-8' },
                        _react2.default.createElement(
                            'div',
                            { className: 'doctor-consultation' },
                            _react2.default.createElement(
                                'div',
                                { className: 'working-count text-center' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'fw-500' },
                                    '4'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'consultation-text' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'fw-500' },
                                    'Health feed'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'doctext' },
                            _react2.default.createElement(
                                'ul',
                                { style: { listStyleType: 'disc' } },
                                _react2.default.createElement(
                                    'li',
                                    { className: 'fw-500' },
                                    'Important facts and knowledge about various diseases and medicines, and how to manage the condition'
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'fw-500' },
                                    'Information on useful lifestyle changes for overall well-being'
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row lab' },
                    _react2.default.createElement(
                        'div',
                        { className: 'working-content-div col-12 col-lg-8' },
                        _react2.default.createElement(
                            'p',
                            { className: 'fw-500 text-xl' },
                            'Our Upcoming Services :'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row working-row lab', style: { marginTop: 40 } },
                    _react2.default.createElement(
                        'div',
                        { className: 'working-content-div col-12 col-lg-8' },
                        _react2.default.createElement(
                            'div',
                            { className: 'doctor-consultation' },
                            _react2.default.createElement(
                                'div',
                                { className: 'working-count text-center' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'fw-500' },
                                    '1'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'consultation-text' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'fw-500' },
                                    'Subscription based OPD product'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'doctext' },
                            _react2.default.createElement(
                                'ul',
                                { style: { listStyleType: 'disc' } },
                                _react2.default.createElement(
                                    'li',
                                    { className: 'fw-500' },
                                    'Unlimited consultations and diagnostic test to make regular OPD visits convenient, accessible, and affordable'
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'fw-500' },
                                    'Ease of cashless transactions for OPD services'
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'fw-500' },
                                    'Online appointment booking'
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row working-row lab' },
                    _react2.default.createElement(
                        'div',
                        { className: 'working-content-div col-12 col-lg-8' },
                        _react2.default.createElement(
                            'div',
                            { className: 'doctor-consultation' },
                            _react2.default.createElement(
                                'div',
                                { className: 'working-count text-center' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'fw-500' },
                                    '2'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'consultation-text' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'fw-500' },
                                    'ePharmacy'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'doctext' },
                            _react2.default.createElement(
                                'ul',
                                { style: { listStyleType: 'disc' } },
                                _react2.default.createElement(
                                    'li',
                                    { className: 'fw-500' },
                                    'Comprehensive network of pharmacies'
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'fw-500' },
                                    'Doorstep delivery of medicines at discounted rates'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return HowitWorks;
}(_react2.default.Component);

exports.default = HowitWorks;

/***/ }),

/***/ "./dev/js/components/commons/staticPages/index.js":
/*!********************************************************!*\
  !*** ./dev/js/components/commons/staticPages/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _StaticPages = __webpack_require__(/*! ./StaticPages.js */ "./dev/js/components/commons/staticPages/StaticPages.js");

var _StaticPages2 = _interopRequireDefault(_StaticPages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _StaticPages2.default;

/***/ }),

/***/ "./dev/js/components/commons/staticPages/media.js":
/*!********************************************************!*\
  !*** ./dev/js/components/commons/staticPages/media.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _HelmetTags = __webpack_require__(/*! ../HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Media = function (_React$Component) {
	_inherits(Media, _React$Component);

	function Media(props) {
		_classCallCheck(this, Media);

		var _this = _possibleConstructorReturn(this, (Media.__proto__ || Object.getPrototypeOf(Media)).call(this, props));

		_this.state = {};
		return _this;
	}

	_createClass(Media, [{
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				'div',
				{ className: 'container media-container' },
				_react2.default.createElement(_HelmetTags2.default, { tagsData: {
						title: 'Media Coverages And Press Releases | docprime',
						description: 'Read about media coverages, press releases and news related to docprime.'
					} }),
				_react2.default.createElement(
					'div',
					{ className: 'row media-row' },
					_react2.default.createElement(
						'div',
						{ className: 'col-12 col-lg-3' },
						_react2.default.createElement(
							'div',
							{ className: 'media-media-sticky-div' },
							_react2.default.createElement(
								'div',
								{ className: 'media-list-div d-none d-lg-block' },
								_react2.default.createElement(
									'ul',
									{ className: 'media-list-options' },
									_react2.default.createElement(
										'li',
										null,
										_react2.default.createElement(
											'p',
											{ className: 'media-list-options-item media-selected-option' },
											'All Media'
										)
									)
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'media-contact-div d-none d-lg-block' },
								_react2.default.createElement(
									'div',
									{ className: 'media-contact-label-div' },
									_react2.default.createElement(
										'p',
										{ className: 'media-contact-label' },
										'Contact Us'
									)
								),
								_react2.default.createElement(
									'div',
									{ className: 'media-contact-items-div' },
									_react2.default.createElement(
										'div',
										{ className: 'media-contact-item' },
										_react2.default.createElement(
											'div',
											{ className: 'media-contact-subitem' },
											_react2.default.createElement('img', { src: "/assets" + "/img/media/email-icon.svg", style: { verticalAlign: 'middle' }, className: 'media-contact-icon' })
										),
										_react2.default.createElement(
											'div',
											{ className: 'media-contact-subitem' },
											_react2.default.createElement(
												'p',
												{ className: 'media-contact-text' },
												'media@docprime.com'
											)
										)
									),
									_react2.default.createElement(
										'div',
										{ className: 'media-contact-item media-location-item' },
										_react2.default.createElement(
											'div',
											{ className: 'media-contact-subitem media-location-subitem' },
											_react2.default.createElement('img', { src: "/assets" + "/img/media/media-loc.svg", className: 'media-contact-icon' })
										),
										_react2.default.createElement(
											'div',
											{ className: 'media-contact-subitem' },
											_react2.default.createElement(
												'p',
												{ className: 'media-contact-text' },
												'Plot no'
											),
											_react2.default.createElement(
												'p',
												{ className: 'media-contact-text' },
												'119, Sector 44'
											),
											_react2.default.createElement(
												'p',
												{ className: 'media-contact-text' },
												'Gurugram - 122001'
											)
										)
									)
								)
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'col-12 col-lg-6' },
						_react2.default.createElement(
							'div',
							{ className: 'media-div-head' },
							_react2.default.createElement('img', { src: "/assets" + "/img/media/newspaper.png" }),
							_react2.default.createElement(
								'span',
								null,
								'Press Releases'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'media-div-card' },
							_react2.default.createElement(
								'p',
								{ className: 'media-card-heading' },
								'Policybazaar.com to foray into healthcare and tech services'
							),
							_react2.default.createElement(
								'p',
								{ className: 'media-card-date' },
								'30 March, 2018'
							),
							_react2.default.createElement(
								'p',
								{ className: 'media-card-content' },
								'Policybazaar.com, India\'s largest insurance website and comparison portal, is planning to foray into the healthcare technology and services space'
							),
							_react2.default.createElement(
								'p',
								{ className: 'media-card-content' },
								'The new platform will provide consumers with easy, online and free access to PolicyBazaar\'s empanelled top-notch doctors and medical consultants.To begin with, the company intends to partner with 100 hospitals and 20,000 doctors, diagnostic centres, and clinics by the end of March 2019.The healthcare vertical also plans to offer a huge array of healthcare services, which includes in-hospital concierge services for its health insurance customers.By doing this, Policybazaar.com wants to be with its customers at the moment of truth, which is at the time of claims. "Our foray into the healthcare services space is in sync with the vision of expanding the social security net of India. With this venture, we seek to fulfill the need of providing quality and affordable healthcare of the burgeoning population at large by connecting the consumers with our in-house medical practitioners. The new portal will facilitate the creation of an inclusive healthcare system, which will eventually offer customised options for in-patient department insurance based on detailed analysis undertaken after studying consumer healthcare habits and patient\'s interactions with the doctors," said Yashish Dahiya, co-founder and CEO, Policybazaar.com.In the long run, PolicyBazaar.com wants to offer its customers a better and personalised claim and in-hospital experience.Policybazaar is also going to work with insurers to create a new category of health insurance for Out-patient expenses (OPD) and provide free online medical consultation to consumers over phone and chat. Policybazaar.com is in discussions with insurance companies to offer a first of its kind OPD insurance product. The company aims to offer 5 million OPD consultations by next FY.'
							),
							_react2.default.createElement(
								'div',
								{ className: 'media-icons-div' },
								_react2.default.createElement(
									'a',
									{ href: 'http://www.india.com/news/agencies/policybazaar-com-to-foray-into-healthcare-tech-service-space-3108739/', rel: 'nofollow', target: '_blank' },
									_react2.default.createElement('img', { src: '/assets/img/media/ind-blwh.png', onmouseover: 'this.src=\'/assets/img/media/ind-color.png\'', onmouseout: 'this.src=\'/assets/img/media/ind-blwh.png\'' })
								),
								_react2.default.createElement(
									'a',
									{ href: 'http://www.abplive.in/business/policybazaar-com-to-foray-into-healthcare-and-tech-services-676864', rel: 'nofollow', target: '_blank' },
									_react2.default.createElement('img', { src: '/assets/img/media/abp-blwh.png', onmouseover: 'this.src=\'/assets/img/media/abp-color.png\'', onmouseout: 'this.src=\'/assets/img/media/abp-blwh.png\'' })
								),
								_react2.default.createElement(
									'a',
									{ href: 'https://health.economictimes.indiatimes.com/news/health-it/policybazaar-com-to-foray-into-healthcare-tech/63577983', rel: 'nofollow', target: '_blank' },
									_react2.default.createElement('img', { src: '/assets/img/media/et-blwh.png', onmouseover: 'this.src=\'/assets/img/media/et-color.png\'', onmouseout: 'this.src=\'/assets/img/media/et-blwh.png\'' })
								),
								_react2.default.createElement(
									'a',
									{ href: 'https://www.outlookindia.com/newsscroll/policybazaarcom-to-foray-into-healthcare-tech-service-space/1329181', rel: 'nofollow', target: '_blank' },
									_react2.default.createElement('img', { src: '/assets/img/media/out-blwh.png', onmouseover: 'this.src=\'/assets/img/media/out-color.png\'', onmouseout: 'this.src=\'/assets/img/media/out-blwh.png\'' })
								),
								_react2.default.createElement(
									'a',
									{ href: 'https://www.deccanchronicle.com/business/companies/020418/policybazaarcom-to-foray-into-healthcare-technology.html', rel: 'nofollow', target: '_blank' },
									_react2.default.createElement('img', { src: '/assets/img/media/dc-blwh.png', onmouseover: 'this.src=\'/assets/img/media/dc-color.png\'', onmouseout: 'this.src=\'/assets/img/media/dc-blwh.png\'' })
								),
								_react2.default.createElement(
									'a',
									{ href: 'https://www.gadgetsnow.com/tech-news/policybazaar-to-enter-healthcare-tech-and-services-space/articleshow/63265798.cms', rel: 'nofollow', target: '_blank' },
									_react2.default.createElement('img', { src: '/assets/img/media/gn-blwh.png', onmouseover: 'this.src=\'/assets/img/media/gn-color.png\'', onmouseout: 'this.src=\'/assets/img/media/gn-blwh.png\'' })
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'media-div-card' },
							_react2.default.createElement(
								'p',
								{ className: 'media-card-heading' },
								'New venture promoted to offer free online & over phone medical consultations'
							),
							_react2.default.createElement(
								'p',
								{ className: 'media-card-date' },
								'13 June, 2018'
							),
							_react2.default.createElement(
								'p',
								{ className: 'media-card-content content-shown' },
								'Yashish Dahiya, Co-founder & CEO, PolicyBazaar Group of Companies said: "We will be building a team of certified and quality medical professionals to give free online consultations to customers. This shall be supported by a robust offline network'
							),
							_react2.default.createElement(
								'p',
								{ className: 'media-card-content content-hidden' },
								'AI will play a key role in helping us build this in scale and efficiency.ETechAces Marketing & Consulting Pvt. (ETechAces\u201D), which owns India\u2019s leading insurtech brand, PolicyBazaar.com(\u201CPolicyBazaar\u201D) and India\u2019s leading lending marketplace, PaisaBazaar.com (\u201CPaisaBazaar\u201D), has floated another farm `docprime\' for foraying into the healthcare tech and service space.As part of its plans to capture the out of pocket healthcare market in India estimated at nearly $100+bn, the new venture  will provide free online and over phone medical consultations, to begin with. It aims to provide 1 million free medical consultations by March 2019 and reach the scale of 5 million by March 2020. Speaking on the latest venture, Yashish Dahiya, Co-founder & CEO, PolicyBazaar Group of Companies said: "We will be building a team of certified and quality medical professionals to give free online consultations to customers. This shall be supported by a robust offline network. AI will play a key role in helping us build this in scale and efficiency. Our vision is to change customer behavior in the healthcare space by making the consumer shift to online medical consultation from offline by building an easy to use, convenient and trustworthy solution. We believe that healthcare space has huge potential to disrupt, and can follow the same growth trajectory as the digital insurance space which initially faced a similar kind of consumer inertia that this space faces." India has one of the lowest ratios for a doctor per 1,000 people amongst the developing countries. Having a physical interaction with a medical practitioner is not only a time-consuming process but also an expensive one, especially in the private sector. Even though government hospitals and state-run health centers offer consultations either free of cost or at subsidized pricing, it\'s not easy to get an access to these services.'
							),
							_react2.default.createElement(
								'div',
								{ className: 'media-icons-div' },
								_react2.default.createElement(
									'a',
									{ href: 'http://www.asiainsurancepost.com/health/policybazaars-promoter-offer-free-online-medical-consultations', rel: 'nofollow', target: '_blank' },
									_react2.default.createElement('img', { src: "/assets" + "/img/media/asinsurance-blwh.png", onmouseover: 'this.src=\'/assets/img/media/asinsurance-color.png\'', onmouseout: 'this.src=\'/assets/img/media/asinsurance-blwh.png\'' })
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'media-div-card' },
							_react2.default.createElement(
								'p',
								{ className: 'media-card-heading' },
								'docprime.com\xA0gets internal fund infusion\xA0worth $50 million from Policybazaar Group'
							),
							_react2.default.createElement(
								'p',
								{ className: 'media-card-content' },
								_react2.default.createElement(
									'span',
									{ className: 'media-card-heading' },
									'Gurugram,\xA0September 17, 2018:'
								),
								'\xA0',
								_react2.default.createElement(
									'a',
									{ href: 'https://docprime.com', rel: 'nofollow', target: '_blank' },
									'docprime.com'
								),
								', the latest healthcare venture by EtechAces Marketing and Consulting Private Limited (\u201CPolicybazaar Group\u201D), announced that it has received initial internal funding of $50 million from the parent company. The Policybazaar Group also owns India\u2019s leading insurtech brand PolicyBazaar.com and leading lending marketplace, Paisabazaar.com.'
							),
							_react2.default.createElement(
								'p',
								{ className: 'media-card-content' },
								_react2.default.createElement(
									'span',
									{ className: 'media-card-heading' },
									'According to Yashish Dahiya, CEO and Co-founder, Policybazaar Group of Companies,'
								),
								' \u201CHealthcare sector has a lot of untapped potential and currently, the services are not affordable and accessible for all. With rising out-of-pocket expenses, there\u2019s a need to provide quality healthcare at competitive prices that can be accessed by anyone, anywhere. As a Group, we wholeheartedly support\xA0docprime.com\u2019s vision to provide a customized experience and maximize health benefits for everyone.\u201D'
							),
							_react2.default.createElement(
								'p',
								{ className: 'media-card-content' },
								_react2.default.createElement(
									'span',
									{ className: 'media-card-heading' },
									'Excited about the investment,\xA0Ashish Gupta, CEO,\xA0docprime.com\xA0said,'
								),
								'  \u201CWe intend to use the capital in providing seamless user experience and bringing innovation in the healthcare space. Our focus is to make the services more customer-friendly driven by transparency, trust and sustainability.\xA0We are bringing innovation through use of various technology tools like AI, data science and deep analytics.\u201D'
							),
							_react2.default.createElement(
								'p',
								{ className: 'media-card-content' },
								_react2.default.createElement(
									'span',
									{ className: 'media-card-heading' },
									'He further added,'
								),
								'"Our core offerings include free consultation services through chat and phone from our in-house doctors, and discounted\xA0doctor and lab appointment bookings\xA0to encourage consumers in seeking expert medical advice and getting right solutions in a timely manner.\xA0Soon, we will also bring a unique OPD subscription-based product, which will cover unlimited consultations and diagnostic tests."'
							),
							_react2.default.createElement(
								'p',
								{ className: 'media-card-content' },
								'docprime.com\xA0has tied-up with 14,000 doctors and 5,000 diagnostic labs at present and aims to expand its network to 1,50,000 doctors and 20,000 labs across 100+ cities. Currently, appointments can be booked with doctors and labs based in Delhi-NCR but from next month onwards, the facility will be made available across all major cities including Mumbai, Bangalore, Hyderabad & Chennai\xA0'
							),
							_react2.default.createElement(
								'p',
								{ className: 'media-card-content' },
								_react2.default.createElement(
									'span',
									{ className: 'media-card-heading' },
									'About\xA0docprime.com'
								)
							),
							_react2.default.createElement(
								'p',
								{ className: 'media-card-content' },
								'docprime.com\xA0is the latest venture by the Policybazaar Group with an aim to redefine how Indians seek healthcare services. It connects patients with doctors in real time and bridges the gap between need and fulfillment using state-of-the-art technology and a robust offline network. Besides providing free consultation on chat and phone by in-house team of health experts, it also facilitates booking of doctor appointments and lab tests at discounted rates and will soon be giving the option of OPD subscription packages with unlimited consultations and tests. The company is targeting 1 million free medical consultations by March 2019 and up to 5 million by March 2020.'
							),
							_react2.default.createElement(
								'p',
								{ className: 'media-card-content' },
								_react2.default.createElement(
									'span',
									{ className: 'media-card-heading' },
									'About ETechAces\xA0Marketing & Consulting Pvt. Ltd.'
								)
							),
							_react2.default.createElement(
								'p',
								{ className: 'media-card-content' },
								'ETechAces is the parent company that holds India\u2019s leading insurtech brand, Policybazaar.com and leading lending marketplace, Paisabazaar.com. The company has backing from a host of investors including the likes of Softbank, Temasek, Tiger Global Management, True North, InfoEdge (Naukri.com), Premji Invest, besides investments from other PE funds and family offices.'
							),
							_react2.default.createElement(
								'p',
								{ className: 'media-card-content' },
								'ETechAces started Policybazaar.com with a purpose to educate people on insurance products and has transformed the way how insurance is bought in the country. From receiving traffic of 180,000 visitors in 2008, Policybazaar.com has come a long way and today, hosts over 100 million visitors yearly and records sale of nearly 300,000 transactions a month. Currently, Policybazaar.com accounts for nearly 25% of India\u2019s life cover.'
							),
							_react2.default.createElement(
								'p',
								{ className: 'media-card-content' },
								'In 2014, ETechAces started Paisabazaar.com, an online financial marketplace for investment and lending products. Today, Paisabazaar.com is India\u2019s largest online financial marketplace for loans and credit cards. It has collaborated with more than 75 partners across lending and investment categories with 300+ products on offer.\xA0\xA0'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'col-lg-3 col-12' },
						_react2.default.createElement(
							'div',
							{ className: 'media-sticky-div' },
							_react2.default.createElement(
								'div',
								{ className: 'twitter-feed' },
								_react2.default.createElement(
									'a',
									{ 'class': 'twitter-timeline', rel: 'nofollow', href: 'https://twitter.com/DocPrimeIndia?ref_src=twsrc%5Etfw' },
									'Tweets by docprimeIndia'
								),
								' ',
								_react2.default.createElement('script', { async: true, src: 'https://platform.twitter.com/widgets.js', charset: 'utf-8' })
							),
							_react2.default.createElement(
								'div',
								{ className: 'facebook-feed' },
								_react2.default.createElement('iframe', { src: 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDocPrimeIndia&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId', width: 340, height: 500, style: { border: 'none', overflow: 'hidden' }, scrolling: 'no', frameBorder: 0, allowTransparency: 'true', allow: 'encrypted-media' })
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'col-12 col-lg-3 d-lg-none' },
						_react2.default.createElement(
							'div',
							{ className: 'media-sticky-div' },
							_react2.default.createElement(
								'div',
								{ className: 'media-contact-div' },
								_react2.default.createElement(
									'div',
									{ className: 'media-contact-label-div' },
									_react2.default.createElement(
										'p',
										{ className: 'media-contact-label' },
										'Contact Us'
									)
								),
								_react2.default.createElement(
									'div',
									{ className: 'media-contact-items-div' },
									_react2.default.createElement(
										'div',
										{ className: 'media-contact-item' },
										_react2.default.createElement(
											'div',
											{ className: 'media-contact-subitem' },
											_react2.default.createElement('img', { src: "/assets" + "/img/media/email-icon.svg", style: { verticalAlign: 'middle' }, className: 'media-contact-icon' })
										),
										_react2.default.createElement(
											'div',
											{ className: 'media-contact-subitem' },
											_react2.default.createElement(
												'p',
												{ className: 'media-contact-text' },
												'media@docprime.com'
											)
										)
									),
									_react2.default.createElement(
										'div',
										{ className: 'media-contact-item media-location-item' },
										_react2.default.createElement(
											'div',
											{ className: 'media-contact-subitem media-location-subitem' },
											_react2.default.createElement('img', { src: "/assets" + "/img/media/media-loc.svg", className: 'media-contact-icon' })
										),
										_react2.default.createElement(
											'div',
											{ className: 'media-contact-subitem' },
											_react2.default.createElement(
												'p',
												{ className: 'media-contact-text' },
												'Plot no'
											),
											_react2.default.createElement(
												'p',
												{ className: 'media-contact-text' },
												'119, Sector 44'
											),
											_react2.default.createElement(
												'p',
												{ className: 'media-contact-text' },
												'Gurugram - 122001'
											)
										)
									)
								)
							)
						)
					)
				)
			);
		}
	}]);

	return Media;
}(_react2.default.Component);

exports.default = Media;

/***/ }),

/***/ "./dev/js/components/commons/staticPages/privacy.js":
/*!**********************************************************!*\
  !*** ./dev/js/components/commons/staticPages/privacy.js ***!
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

var _HelmetTags = __webpack_require__(/*! ../HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Privacy = function (_React$Component) {
    _inherits(Privacy, _React$Component);

    function Privacy(props) {
        _classCallCheck(this, Privacy);

        var _this = _possibleConstructorReturn(this, (Privacy.__proto__ || Object.getPrototypeOf(Privacy)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(Privacy, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'container about-container' },
                _react2.default.createElement(_HelmetTags2.default, { tagsData: {
                        title: 'Privacy Policy | docprime',
                        description: 'The policy is effective from the date and time a user registers with docprime by filling up the Registration form and accepting the terms and conditions.'
                    } }),
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12 text-center' },
                        _react2.default.createElement(
                            'p',
                            { className: 'fw-500 about-heading', style: { marginBottom: 20 } },
                            'Privacy Policy'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12 privacy-desc-div' },
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'docprime.com (\u201CWebsite/Mobile Application\u201D) operated by docprime Technologies Private Limited (\u201CCompany/we/us\u201D) recognizes the importance of maintaining your privacy. The Company is committed to maintain the confidentiality, integrity and security of all information of our users. This Privacy Policy explains how we collect, use, share, disclose and protect Personal information about the Users of the Services, including and the visitors of Website (jointly and severally referred to as \u201Cyou\u201D or \u201CUsers\u201D in this Privacy Policy).'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'This Privacy Policy is published in compliance of the (Indian) Information Technology Act, 2000 and the rules, regulations, guidelines and clarifications framed thereunder, including the (Indian) Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Information) Rules, 2011 (SPI Rules).'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'Please read this privacy policy carefully and see below for details on what type of information we may collect from you, how that information is used in connection with the services offered through our Website and shared with our business partners. This Privacy Policy applies to current and former visitors and customers to the Website.'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'By visiting and/or accessing the Website, you agree to this Privacy Policy.'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc-subheading' },
                            '1.\xA0\xA0\xA0\xA0COLLECTION OF PERSONAL INFORMATION'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'When you access the Services, or through any interaction with us via emails, telephone calls or other correspondence, we may ask you to voluntarily provide us with certain information that personally identifies you or could be used to personally identify you. You hereby consent to the collection of such information by the Company. Without prejudice to the generality of the above, information collected by us from you may include (but is not limited to) the following:'
                        ),
                        _react2.default.createElement(
                            'ol',
                            { className: 'sub-list' },
                            _react2.default.createElement(
                                'li',
                                null,
                                'contact data (such as your full name, email address and phone number);'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'demographic data (such as your gender, your date of birth and your pin code);'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'data regarding your usage of the services and history of the appointments made by or with you through the use of Services;'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'data regarding your medical records history; and insurance data;'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'other information that you voluntarily choose to provide to us (such as information shared by you with us through emails or letters).'
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'The information collected from you by the Company may constitute \u2018personal information\u2019 or \u2018sensitive personal data or information\u2019 under the SPI Rules.'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            _react2.default.createElement(
                                'span',
                                null,
                                '\u201CPersonal Information\u201D'
                            ),
                            ' is defined under the SPI Rules to mean any information that relates to a natural person, which, either directly or indirectly, in combination with other information available or likely to be available to a body corporate, is capable of identifying such person.'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'The SPI Rules further define \u201CSensitive Personal Data or Information\u201D of a person to mean personal information about that person relating to:'
                        ),
                        _react2.default.createElement(
                            'ol',
                            { className: 'sub-list' },
                            _react2.default.createElement(
                                'li',
                                null,
                                'passwords;'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'financial information such as bank accounts, credit and debit card details or other payment instrument details;'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'physical, physiological and mental health condition;'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'sexual orientation;'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'medical records and history;'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'biometric information;'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'information received by body corporate under lawful contract or otherwise;'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'visitor details as provided at the time of registration or thereafter; and'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'call data records.'
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'To the extent necessary to provide Users with the Services, offers and promotions through the Website, Company may provide your Personal Information to third party(ies) who work on behalf of or with Company to provide the Users with such Services, offers and promotions, to help Company communicate with Users or to maintain the Website. In such circumstances, you consent to us disclosing your Personal Information to such third parties and contractors, solely for the intended purposes only.'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'However, Company will be free to use, collect and disclose information that is freely available about you in the public domain without your consent.'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc-subheading' },
                            '2.\xA0\xA0\xA0\xA0CONTROLLERS OF PERSONAL INFORMATION'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'Your personal data will be stored and collected by docprime Technologies Private Limited and with its parent company Etechaces Marketing and Consulting Private Limited.'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc-subheading' },
                            '3.\xA0\xA0\xA0\xA0PURPOSES OF COLLECTION OF YOUR DATA'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'Company collects your information when you register for an account, when you use its products or services, visit its Website\'s pages, and when you enter your details for receiving promotions or offers as featured on or offered by the Website. When you register with the Website, you are asked for your first name, last name, state and city of residence, email address, date of birth, and sex etc. Once you register at the Website and sign in you are not anonymous to us. Also, you are asked for your contact number during registration and may be sent SMS(s), notifications about our services. Further, some features of this Website or our Services will require you to furnish your personal information as provided by you under your account section on our Website.'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'Hence, by registering you authorize the Company to send texts and email alerts to you with your login details and any other service requirements, including promotional mails and SMSs.'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'Further, In order to avail some of the Services, the Users may be required to upload copies of their prescriptions, on the Website and/ or e-mail the same to Company in accordance with the Terms of Use and the prescriptions will be stored/ disclosed by Company only in the manner specified in this Privacy Policy and the Terms of Use. The term personal information/data shall also include any such prescriptions uploaded or otherwise provided by Users.'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'Furthermore, Company may keep records of telephone calls received and made for making inquiries, orders, or other purposes for the purpose of administration of Services.'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'We use your information in order to:'
                        ),
                        _react2.default.createElement(
                            'ul',
                            { className: 'mrt-10', style: { listStyle: 'disc', paddingLeft: 40, textAlign: 'left' } },
                            _react2.default.createElement(
                                'li',
                                { className: 'mrb-10' },
                                'Register you as customer/user on the Website;'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'mrb-10' },
                                'Dealing with requests, enquiries or complaints and other customer care related activities; and all other general administrative and business purposes.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'mrb-10' },
                                'Process your orders or applications and provision of products and services.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'mrb-10' },
                                'Administer or otherwise carry out our obligations in relation to any agreement with our business partners/contractors;'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'mrb-10' },
                                'Research and development and for User administration (including conducting User surveys);'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'mrb-10' },
                                'Technical administration and customization of Website;'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'mrb-10' },
                                'To send you information about special promotions or offers (either offered by the Company or by its business partners). We might also tell you about new features or products. These might be our own offers or products, or third-party offers or products with whom Company has a tie-up;'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'mrb-10' },
                                'Improvement of Services and features on the Website. In this regard, we may combine information we get from you with information about you we get from third parties.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'mrb-10' },
                                'to send you notices, communications, offer alerts relevant to your use of the Services offered on this Website.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'mrb-10' },
                                'as otherwise provided in this Privacy Policy.'
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc-subheading' },
                            '4.\xA0\xA0\xA0\xA0INFORMATION SHARING, TRANSFER AND DISCLOSURE'
                        ),
                        _react2.default.createElement(
                            'ol',
                            { className: 'privacy-order-list' },
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-order-item' },
                                'We may need to disclose/ transfer your personal information to the following third parties for the purposes mentioned in this Privacy Policy and the Terms of Use:',
                                _react2.default.createElement(
                                    'ol',
                                    { className: 'sub-list' },
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'To business partners and other service providers appointed by us for the purpose of carrying out services on our behalf under a contract. Generally these parties do not have any independent right to share this information, however certain parties who provide services on the Website, including but not limited to the providers of online communications services, will have rights to use and disclose the personal information collected in connection with the provision of these services in accordance with their own privacy policies.'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'To our affiliates in India or in other countries who may use and disclose your information for the same purposes as us.'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'We may also share, sell, and/or transfer your personal information to any successor-in-interest as a result of a sale of any part of our business or upon the merger, reorganization, or consolidation of it with another entity on a basis that it is not the surviving entity. We may also disclose or transfer your Information, to another third party as part of reorganization or a sale of the assets of a Company\u2019s corporation division or company. Any third party to which we transfer or sell our assets, will have the right to continue to use the personal data and/ or other information that you have provided to us.'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'To government institutions/ authorities to the extent required a) under the laws, rules, and regulations and or under orders of any relevant judicial or quasi-judicial authority; b) to protect and defend the rights or property of the Company; c) to fight fraud and credit risk; d) to enforce our Terms of Use (to which this Privacy Policy is also a part) ; or e) when Company, in its sole discretion, deems it necessary in order to protect its rights or the rights of others.'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'If otherwise required by an order under any law for the time being in force including in response to enquiries by Government agencies for the purpose of verification of identity, or for prevention, detection, investigation including cyber incidents, prosecution, and punishment of offences.'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'In case of any contests or surveys conducted by the Company in which the you participate, your information may be disclosed to third parties, also be disclosed to third parties to the extent necessary for fulfilment of any offer/vouchers etc. and other aspects of such contest or similar offering.'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-order-item' },
                                'We make all your personal Information accessible to our employees and data processors only on a need-to-know basis. All our employees and data processors, who have access to, and are associated with the processing of your Information, are obliged to respect its confidentiality.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-order-item' },
                                'Non-personally identifiable information may be disclosed to third party ad servers, ad agencies, technology vendors and research firms to serve advertisements to the Users. Company may also share its aggregate findings (not specific information) based on information relating to your internet use to prospective, investors, strategic partners, sponsors and others in order to help growth of our business. These companies may use information (excluding your name, address, email address, or telephone number) about your visits to this Website in order to provide advertisements on this Website and other third party websites about goods and services that may be of interest to you. We use third-party service providers to serve ads on our behalf across the internet and sometimes on this Website. They may collect anonymous information about your visits to Website, and your interaction with our products and services. They may also use information about your visits to this and other websites for targeted advertisements for goods and services. This anonymous information is collected through the use of a pixel tag, which is industry standard technology used by most major websites. No personally identifiable information is collected or used in this process.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-order-item' },
                                'We may make anonymous or aggregate personal information and disclose such data only in a non-personally identifiable manner. Such information does not identify you individually.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-order-item' },
                                'Access to your account information and any other personal identifiable information is strictly restricted and used only in accordance with specific internal procedures, in order to operate, develop or improve our Services. We may use third party service providers to enable you to provide with our services and we require such third parties to maintain the confidentiality of the information we provide to them under our contracts with them.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-order-item' },
                                'There are number of Products and/or Services, offered by third Parties on the Website. If you choose to avail for these separate Products or Services, disclose information to these service providers, then their use of your information is governed by their privacy policies. Company is not responsible for their privacy policies.'
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc-subheading' },
                            '5.\xA0\xA0\xA0\xA0WE COLLECT COOKIES'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'We may also receive and/or hold information about the User\u2019s browsing history including the URL of the site that the User visited prior to visiting the website as well as the Internet Protocol (IP) address of each User\'s computer (or the proxy server a User used to access the World Wide Web), User\'s computer operating system and type of web browser the User is using as well as the name of User\'s ISP.'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'The Website uses temporary cookies to store certain data (that is not sensitive personal data or information) that is used by the Company and its service providers for the technical administration of the Website, research and development, and for User administration. A cookie is a piece of data stored on the user\'s computer tied to information about the user. We may use both session ID cookies and persistent cookies. For session ID cookies, once you close your browser or log out, the cookie terminates and is erased. A persistent cookie is a small text file stored on your computer\u2019s hard drive for an extended period of time. Session ID cookies may be used by PRP to track user preferences while the user is visiting the website. They also help to minimize load times and save on server processing. Persistent cookies may be used by PRP to store whether, for example, you want your password remembered or not, and other information. Cookies used on the PRP website do not contain personally identifiable information.'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc-subheading' },
                            '6.\xA0\xA0\xA0\xA0LOG FILES'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'Like most standard websites, we use log files. This information may include internet protocol (IP) addresses, browser type, internet service provider (ISP), referring/exit pages, platform type, date/time stamp, and number of clicks to analyse trends, administer the site, track user\'s movement in the aggregate, and gather broad demographic information for aggregate use. We may combine this automatically collected log information with other information we collect about you. We do this to improve services we offer to you, to improve marketing, analytics or site functionality.'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc-subheading' },
                            '7.\xA0\xA0\xA0\xA0Email- Opt out'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'If you are no longer interested in receiving e-mail announcements and other kinds marketing information/communications from us, please e-mail your request at: care@docprime.com. Please note that it may take about 7 (seven) working days to process your request.'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc-subheading' },
                            '8.\xA0\xA0\xA0\xA0SECURITY'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'We employ appropriate technical and organizational security measures at all times to protect the information we collect from you. We use multiple electronic, procedural, and physical security measures to protect against unauthorized or unlawful use or alteration of information, and against any accidental loss, destruction, or damage to information. However, no method of transmission over the Internet, or method of electronic storage, is 100% secure. Therefore, we cannot guarantee its absolute security. Further, you are responsible for maintaining the confidentiality and security of your login id and password, and may not provide these credentials to any third party.'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc-subheading' },
                            '9.\xA0\xA0\xA0\xA0THIRD PARTY ADVERTISING'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'We may use third-party advertising companies and/or ad agencies to serve ads when you visit our Website. These companies may use information (excluding your name, address, email address, or telephone number) about your visits to this Website in order to provide advertisements on this Website and other third party websites about goods and services that may be of interest to you. We use third-party service providers to serve ads on our behalf across the internet and sometimes on this Website. They may collect anonymous information about your visits to Website, and your interaction with our products and services. They may also use information about your visits to this and other Websites for targeted advertisements for goods and services. This anonymous information is collected through the use of a pixel tag, which is industry standard technology used by most major Websites. No personally identifiable information is collected or used in this process.'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc-subheading' },
                            '10.\xA0\xA0\xA0LINKS TO OTHER WEBSITES'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'There might be affiliates or other sites linked to the Website. Personal information that you provide to those sites are not our property. These affiliated sites may have different privacy practices and we encourage you to read their privacy policies of these websites, when you visit them.'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc-subheading' },
                            '11.\xA0\xA0\xA0CHANGES IN THIS PRIVACY POLICY'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'Company reserves the right to change this policy from time to time, with or without advance notice, at its sole discretion. We may update this privacy policy to reflect changes to our information practices. We encourage you to periodically visit this webpage.'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc-subheading' },
                            '12.\xA0\xA0\xA0ADDITIONAL NOTES TO THE USER'
                        ),
                        _react2.default.createElement(
                            'ol',
                            { className: 'privacy-order-list' },
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-order-item' },
                                'Company does not exercise control over the sites displayed as search results or links from within its Services. These other sites may place their own cookies or other files on the Users\' computer, collect data or solicit personal information from the Users, for which Company is not responsible or liable. Accordingly, Company does not make any representations concerning the privacy practices or policies of such third parties or terms of use of such websites, nor does Company guarantee the accuracy, integrity, or quality of the information, data, text, software, sound, photographs, graphics, videos, messages or other materials available on such websites. Company encourages the User to read the privacy policies of that website.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-order-item' },
                                'Company shall not be responsible in any manner for the authenticity of the personal information or sensitive personal data or information supplied by the User to the Company or any of its business partners. If a User provides any information that is untrue, inaccurate, not current or incomplete (or becomes untrue, inaccurate, not current or incomplete), or Company has reasonable grounds to suspect that such information is untrue, inaccurate, not current or incomplete, Company has the right to suspend or terminate such account at its sole discretion.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-order-item' },
                                'Company shall not be responsible for any breach of security or for any actions of any third parties that receive Users\' personal data or events that are beyond the reasonable control of Company including, acts of government, computer hacking, unauthorized access to computer data and storage device, computer crashes, breach of security and encryption, etc.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-order-item' },
                                'The User is responsible for maintaining the confidentiality of the User\'s account access information and password. The User shall be responsible for all uses of the User\'s account and password, whether or not authorized by the User. The User shall immediately notify Company of any actual or suspected unauthorized use of the User\'s account or password.'
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc-subheading' },
                            '13.\xA0\xA0\xA0GRIEVANCE OFFICER'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'In case you have any grievances with respect to in accordance with applicable law on Information Technology and rules made there under, the name and contact details of the Grievance Officer are provided below:'
                        ),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'Mr. Ashish Ajmani'
                        ),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc', style: { marginTop: 0, marginBottom: 0 } },
                            'docprime.com'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc', style: { marginTop: 0, marginBottom: 0 } },
                            'Plot No. 131,'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc', style: { marginTop: 0, marginBottom: 0 } },
                            'Sector-44, Gurugram-122001,'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc', style: { marginTop: 0, marginBottom: 10 } },
                            'Haryana'
                        ),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'Email : care@docprime.com'
                        ),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'If you have questions, concerns, or suggestions regarding our Privacy Policy, we can be reached using the contact information on our Contact Us page or at care@docprime.com.'
                        )
                    )
                )
            );
        }
    }]);

    return Privacy;
}(_react2.default.Component);

exports.default = Privacy;

/***/ }),

/***/ "./dev/js/components/commons/staticPages/terms.js":
/*!********************************************************!*\
  !*** ./dev/js/components/commons/staticPages/terms.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _HelmetTags = __webpack_require__(/*! ../HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Terms = function (_React$Component) {
    _inherits(Terms, _React$Component);

    function Terms(props) {
        _classCallCheck(this, Terms);

        var _this = _possibleConstructorReturn(this, (Terms.__proto__ || Object.getPrototypeOf(Terms)).call(this, props));

        _this.state = {
            selected: 0,
            scrollPosition: 0
        };
        return _this;
    }

    _createClass(Terms, [{
        key: 'setTab',
        value: function setTab(val) {
            this.setState({ selected: val });
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.props.forScroll) {
                if (document.getElementById('rescheduling_9')) {
                    var elementTop = document.getElementById('rescheduling_9').getBoundingClientRect().top;
                    var elementHeight = document.getElementById('rescheduling_9').clientHeight;
                    var scrollPosition = elementTop - elementHeight;
                    window.scrollTo(0, parseInt(scrollPosition));
                }
            }

            var mainClass = void 0;
            var headingClass = void 0;
            if (this.props.fromApp) {
                mainClass = "container about-container appUrlPadding";
                headingClass = "col-12 text-center d-none d-md-block";
            } else {
                mainClass = 'container about-container';
                headingClass = "col-12 text-center";
            }
            return _react2.default.createElement(
                'div',
                { className: mainClass },
                _react2.default.createElement(_HelmetTags2.default, { tagsData: {
                        title: 'Terms & Conditions - Submission, Listings & Payment Terms',
                        description: 'docprime: Read Terms & Conditions, details on Submission and Administration of Listings, Payment Terms.'
                    } }),
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: headingClass },
                        _react2.default.createElement(
                            'p',
                            { className: 'fw-500 about-heading', style: { marginBottom: 20 } },
                            'Terms & Conditions'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'privacy-tab-div' },
                            _react2.default.createElement(
                                'div',
                                { className: "privacy-tab" + (this.state.selected == 0 ? " privacy-tab-active" : ""), onClick: this.setTab.bind(this, 0) },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'fw-500' },
                                    'End User Agreement'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: "privacy-tab" + (this.state.selected == 1 ? " privacy-tab-active" : ""), onClick: this.setTab.bind(this, 1) },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'fw-500' },
                                    'Provider Terms and Conditions'
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row customer-terms-row', hidden: this.state.selected == 1 },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12 privacy-desc-div' },
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'These Terms of Use sets forth the terms and conditions that apply to the access and use of the site "www.docprime.com" and its Mobile Application (collectively be referred to as \u201CWebsite\u201D), which is owned and operated by docprime Technologies Private Limited, a company duly incorporated under the provisions of the Companies Act, 2013, (hereinafter collectively be referred to as "Company" or \u201Cdocprime\u201D).'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'PLEASE READ THESE TERMS OF USE CAREFULLY BY ACCESSING OR USING THIS INTERNET BASED PLATFORM, YOU AGREE TO BE BOUND BY THE TERMS DESCRIBED HEREIN AND ALL TERMS INCORPORATED BY REFERENCE. IF YOU DO NOT AGREE TO ALL OF THESE TERMS, DO NOT USE THIS INTERNET BASED PLATFORM.'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc-subheading' },
                            '1.\xA0\xA0\xA0\xA0NATURE AND APPLICABILITY OF TERMS'
                        ),
                        _react2.default.createElement(
                            'ol',
                            { className: 'privacy-list-group' },
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'This document/agreement is an electronic record in terms of Information Technology Act, 2000 and generated by a computer system and does not require any physical or digital signatures. This document is published in accordance with the provisions of Rule 3 of the Information Technology (Intermediaries guidelines) 2011, that provides for the due diligence to be exercised for the access or usage of this Website.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'Your access or use of the Website, transaction on the Website and use of Services (as defined herein below) hosted or managed remotely through the Website, are governed by the following terms and conditions (hereinafter referred to as the "Terms of Use\u201D), including the applicable policies which are incorporated herein by way of reference, as may be posted elsewhere on the Website. These Terms of Use constitutes a legal and binding contract between you (hereinafter referred to as \u201CYou\u201D or \u201CYour\u201D or the \u201CUser\u201D) on one part and Company on the other Part.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'By accessing, browsing or in any way transacting on the Website, or availing any Services, You signify Your agreement to be bound by these Terms of Use. Further, by impliedly or expressly accepting these Terms of Use, you also accept and agree to be bound by Our policies, including the Privacy Policy, any disclaimers and such other rules, guidelines, policies, terms and conditions as are relevant under the applicable law(s) in India for the purposes of accessing, browsing or transacting on the Website, or availing any of the Services, shall be deemed to be incorporated into, and considered as part and parcel of these Terms of Use. However, if You navigate away from the Website to a third party website, You may be subject to alternative terms and conditions of use and privacy policy, as may be specified on such website. In such event, the terms and conditions of use and privacy policy applicable to that website will govern Your use of that website.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'Be sure to return to this page periodically to review the most current version of the TOU. We reserve the right at any time, at our sole discretion, to change or otherwise modify the TOU without prior notice, and your continued access or use of this Website signifies your acceptance of the updated or modified TOU.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'These Terms of Use are a binding contract and applies to you whether you are a patient, his/her representatives or affiliates, searching for Medical Experts or Third Party health care service providers (such as doctors, hospitals, diagnostic centres or clinics, laboratories, etc) through the Website(\u201CEnd-User\u201D, \u201Cyou\u201D or \u201CUser\u201D); or otherwise a user/visitor of the Website(\u201Cyou\u201D or \u201CUser\u201D).'
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc-subheading' },
                            '2.\xA0\xA0\xA0\xA0SERVICES'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'The Website is a platform that facilitates (i) diagnostic services being offered by various third party diagnostic centres or other health care service providers (such as doctors, hospitals, diagnostic centres or clinics, laboratories, etc) (\u201CThird Party Labs/ Third Party service providers\u201D); (ii) online medical consultancy services/ second opinion being offered by third party independent doctors (\u201CMedical Experts\u201D); and (iii) online advertisements of various sponsors advertising and marketing their own good and services (\u201CThird Party Advertisers\u201D). Third Party Labs, Medical Experts and the Third Party Advertisers are collectively referred to as the \u201CThird Party Service Providers\u201D. Further the Website also serves as an information platform providing health and wellness related information to the Users accessing the Website (The services of Third Party Services Provider and the information services provided through our Website is collectively referred to as the \u201CServices\u201D).'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'The arrangement between the Third Party Service Providers, You and Us shall be governed in accordance with these Terms of Use. The Services would be made available to such natural persons who have agreed to use the Website after obtaining due registration, in accordance with the procedure as determined by Us, from time to time, (referred to as \u201CYou\u201D or \u201CYour\u201D or \u201CYourself\u201D or \u201CUser\u201D, which terms shall also include natural persons who are accessing the Website merely as visitors). The Services are offered to You through various modes which shall include issue of discount coupons and vouchers that can be redeemed for various goods/ services offered for sale by relevant Third Party Service Providers. To facilitate the relation between You and the Third Party Service Providers through the Website, docprime shall send to You (promotional content including but not limited to e-mailers, notifications and messages). You agree and acknowledge that the Website is a platform that You and Third Party Service Providers utilize to meet and interact with another for their transactions. docprime is not and cannot be a party to or save as except as may be provided in these Terms of Use, control in any manner, any transaction between You and the Third Party Service Providers. As a condition of Your use of and access to the diagnostic services provided through the Website and Your acceptance of these Terms of Use, You are subject to the following rules/guidelines:'
                        ),
                        _react2.default.createElement(
                            'ol',
                            { className: 'privacy-list-group' },
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'docprime provides Services through the Website as a marketplace and facilitates the Users to avail diagnostic test/ packages facilities offered by Third Party Labs through the Website. docprime is not and shall not be responsible for any sample collected, tests conducted and reports generated by the Third Party Labs and does not deal with any of Third Party Labs\u2019 client or patient managed by such Third Party Labs through the Website and only provides facilitation Services to the Users through the Website. Use of the Website may require the Third Party Labs to use software and the Third Party health care service providers have to ensure the procurement of such software from the concerned providers. User and the Third Party Labs agree to use the Website and the materials provided therein only for purposes that are permitted by: (a) these Terms of Use; and (b) any applicable law(s), regulation or generally accepted practices or guidelines in the relevant jurisdictions.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    'NO DOCTOR-PATIENT RELATIONSHIP:'
                                ),
                                ' docprime does not replace Your relationship with physician or healthcare provider. The information interpretedSHOULD NOT be relied upon as a substitute for sound professional medical advice, evaluation or care from Your physician or other qualified healthcare provider.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'You acknowledge that the Medical Experts empaneled with Us are independent contractors and thereby docprime has an independent contractor relationship with such Medical Experts and therefore in no event docprime will be directly or vicariously liable for any advice or medical consultancy or any loss arising therefrom that the Medical Experts may provide to You or You may avail as part of the Services.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'You acknowledge that the e-prescription which may be issued by the Medical Expert(s) will be a valid prescription under applicable law(s) of India and may be used for dispensation of medicines by any pharmacist in India. You further agree and acknowledge that if any e- prescription which is processed through the Website (whether original or scanned copy of the original prescription) for procuring medicines is only by the Medical Experts, and docprime will only act as an aggregator and assume no responsibility and/ or liability in relation to such e-prescription.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'docprime is designed to support the health decisions and choices that You make. These decisions and choices are Yours, and We believe that You, in connection with the advice You receive from Your doctor or other professional healthcare provider, are the best decision maker about Your health. We cannot make decisions for you. However, what We can do is help You find good health information and connect with doctors for in-person information. On docprime You can ask and find informational questions and related educational answers by Medical Experts. The Website is not a place for the practice of medicine, but Medical Experts on the Website can be a resource for reliable, relevant general health information.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'The Services should not be depended upon and should not be treated as a replacement for obtaining consultation for diseases as the consultation provided through the Website is generic in the approach and shall not and cannot act as a substitute for physical consultation with a doctor. Also the Consultations provided through the Website may not be diagnostic in nature.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'We do not recommend or endorse any specific Medical Expert(s), tests, products, procedures, opinions, or other information that may be mentioned on the Website. Reliance on any information provided on the Website is solely at Your own risk. In case of any medical emergency, kindly contact Your nearest doctor/hospital or any related helpline.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'The Services are not for use in medical emergencies or for critical health situations requiring prompt medical attention. The Services are not intended to be real-time and may not be the best solution when a face-to-face consultation is a must and therefore We strongly discourage any delay in seeking advice from Your doctor on account of something that You may have heard/viewed on the Website. You take full responsibility for ensuring that the information submitted is accurate and docprime shall not make any effort to validate any information provided by You for using the Services with respect to content, correctness or usability. We, with an intention to provide the best services possible could ask You to share more information as and when needed. The Services should not be used for emergency appointment purposes.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'The opinions, statements, answers and tele-consultations (collectively \u201CConsultation\u201D) provided by the Medical Experts through the Website are solely the individual and independent opinions and statements of such Medical Experts and do not reflect the opinions of docprime, including but not limited to its officers, directors, representatives and its affiliates. docprime does not recommend or endorse any specific tests, physicians, products, procedures, opinions, or other information that may be mentioned on the Website.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'The inclusion of professionals, specialists and/ or Medical Experts on the Website or in any professional directory on the Website does not imply recommendation or endorsement of such specialists and/ or Medical Experts nor is such information intended as a tool for verifying the credentials, qualifications, or abilities of any specialists and/ or Medical Experts contained therein. Such information is provided on an \u2018as-is\u2019 basis and docprime disclaims all warranties, either express or implied, including but not limited to the implied warranties of merchantability and fitness for particular purpose. docprime disclaims any legal or financial events or outcomes related to the Services availed through the use of the Website.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'docprime makes no warranty that the Services will meet Your requirements, or that the Service(s) will be uninterrupted, timely, secure, or error free. This includes loss of data or any service interruption caused by docprime employees or representatives. docprime is not responsible for transmission errors, corruption of data.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'docprime is for personal use and the Services are for individuals to use for supporting their personal health decisions. You may use the Website for personal, but not for commercial, purposes.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'Your right to use the Services is not transferable.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'Notwithstanding anything to the contrary contained herein, You alone shall be liable for Your dealings and interaction with patients or Medical Experts (as the case may be) contacted or managed through the Website and docprime shall have no liability or responsibility in this regard. docprime does not guarantee or make any representation with respect to the correctness, completeness or accuracy of the information or detail provided by such client, patient, User, Medical Experts or any third party through the Website.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'The exchanges between the Medical Experts and the patient through the chat window or over telephone (as the case maybe) and the e-prescription would be accessible to docprime for the purposes of monitoring the quality of the consultation.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'docprime may, at its sole discretion, suspend User\u2019s or Medical Expert\u2019s ability to use or access the Website at any time while docprime investigates complaints or alleged violations of these Terms of Use, or for any other reason. docprime has the right to edit profiles of Medical Experts to make them more suitable for patient/ Users searches on the Website.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'Notwithstanding anything to the contrary contained herein, Users alone shall be liable for dealings and interaction with Third Party Labs and Medical Experts contacted or managed through the Website and docprime shall have no liability or responsibility in this regard. docprime does not guarantee or make any representation with respect to the correctness, completeness or accuracy of the tests conducted and reports generated by the Third Party Labs or e-prescription prescribed by Medical Experts.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'docprime may, at its sole discretion, suspend Third Party Labs or Users ability to use or access the Website at any time while docprime investigates complaints or alleged violations of these Terms of Use, or for any other reason. docprime has the right to edit profiles of Third Party Labs to make them more suitable for package searches on the Website. If Third Party Labs and/ or Users find any wrong information on the Website in relation to such Third Party Labs and/ or User, they can correct it themselves or contact docprime immediately for such corrections. docprime shall have no liability or responsibility in this regard.'
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc-subheading' },
                            '3.\xA0\xA0\xA0\xA0ELIGIBILITY'
                        ),
                        _react2.default.createElement(
                            'ol',
                            { className: 'privacy-list-group' },
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'As a condition to Your use of the Website, You must be 18 (eighteen) years of age or older to use or visit the Website in any manner. By visiting the Website or accepting these Terms of Use, You represent and warrant to docprime that You are 18 (eighteen) years of age or older, and that You have the right, authority and capacity to use the Website and agree to and abide by these Terms of Use.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'For the purposes of availing the Services and/or transacting with the Third Party Service Providers through the Website, You are required to obtain registration, in accordance with the procedure established by docprime in this regard. As part of the registration process, docprime may collect the following personal information from You:',
                                _react2.default.createElement(
                                    'ol',
                                    { className: 'sub-list' },
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'Name;'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'User ID;'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'Email address;'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'Address (including country and ZIP/ postal code);'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'Gender;'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'Age;'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'Phone number;'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'Your and Your family\u2019 medical history;'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'Any other information'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'The registration on or use/ access of the Website is only available to natural persons, other than those who are \u2018incompetent to contract\u2019 under the Contract Act. That is, persons including minors, un-discharged insolvents etc. are not eligible to register on, or use/ access the Website. By registering, accessing or using the Website, You accept the terms of these Terms of Use and represent and warrant to docprime that you are \u2018competent to contract\u2019 under the Contract Act and have the right, authority and capacity to use the Website and agree to and abide by these Terms of Use.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'A registered id can only be utilized by the person whose details have been provided and docprime does not permit multiple persons to share a single log in/ registration id. However, a registered user, being also a parent or legal guardian of a person \u2018incompetent to contract\u2019 such as minors or persons with unsound mind, would be permitted to access and use the Website for the purposes of procuring the Services, on behalf of such persons.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'Organizations, companies, and businesses may not become registered members on the Website or use the Website as individual members.'
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc-subheading' },
                            '4.\xA0\xA0\xA0\xA0YOUR ACCOUNT'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'You agree and acknowledge that You would'
                        ),
                        _react2.default.createElement(
                            'ol',
                            { className: 'privacy-list-group' },
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'provide accurate, truthful, current and complete information when creating Your account and in all Your dealings through the Website;'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'maintain and promptly update Your account information;'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'maintain the security of Your account by not sharing Your password with others and restricting access to Your account and Your computer;'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'promptly notify docprime if You discover or otherwise suspect any security breaches relating to the Website; and'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'take responsibility for all the activities that occur under Your account and accept all risk of unauthorized access.'
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc-subheading' },
                            '5.\xA0\xA0\xA0\xA0CONTENT AND INFORMATION ON THE WEBSITE'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'docprime authorizes You to view and access the content available on the Website solely for the purposes of availing the Services, such as visiting, using, ordering, receiving, delivering and communicating only as per these Terms of Use. The contents on the Website including information, text, graphics, images, logos, button icons, software code, design, and the collection, arrangement and assembly of content (\u201CContent\u201D), contains the following:'
                        ),
                        _react2.default.createElement(
                            'ol',
                            { className: 'privacy-list-group' },
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'Third Party Service Providers\u2019 content including any content which may be developed on behalf of and published in the name of a Third Services Provider (\u201CThird Party Content\u201D)'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'in-house content provided by docprime including without limitation, text, copy, audio, video, photographs, illustrations, graphics and other visuals (\u201Cdocprime Content\u201D)'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'Any content submitted by You;'
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'The docprime content is the property of docprime and is protected under copyright, trademark and other applicable law(s). You shall not modify the docprime Content or reproduce, display, publicly perform, distribute, or otherwise use the docprime Content in any way for any public or commercial purpose or for personal gain.'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'With respect to such Content that you submit or make available on this Websit, you grant docprime a perpetual, irrevocable, non-terminable, worldwide, royalty-free and non-exclusive license to use, copy, distribute, publicly display, modify, create derivative works, and sublicense such materials or any part of such materials/Content (as well as use the name that you submit in connection with such submitted content). We take no responsibility and assume no liability for any Content posted or submitted by you. We have no obligation to post your comments; we reserve the right in our absolute discretion to determine which comments are published on the Website. If you do not agree to these terms and conditions, please do not provide us with any submitted Content. You agree that you are fully responsible for the content you submit.'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            _react2.default.createElement(
                                'span',
                                null,
                                'Prohibited Content:'
                            ),
                            ' You agree that any Content submitted by You shall not infringe the intellectual property, privacy, publicity, copyright, or other legal rights of any person or entity. The Content must not be false, misleading, fraudulent, defamatory, or deceptive. The following Content is prohibited on the Website:'
                        ),
                        _react2.default.createElement(
                            'ol',
                            { className: 'sub-list' },
                            _react2.default.createElement(
                                'li',
                                null,
                                'content that demeans, degrades, or shows hate toward a particular race, gender, culture, country, belief, or toward any member of a protected class;'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'content depicting nudity, sexual behaviour, or obscene gestures;'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'content depicting drug use;'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'content depicting excessive violence, including the harming of animals;'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'shocking, sensational, or disrespectful content;'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'deceptive, false or misleading content, including deceptive claims, offers, or business practices;'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'content that directs users to phishing links, malware, or similarly harmful codes or sites; and'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'content that deceives other Users in any manner for providing their personal information without their knowledge, under false pretences, or to companies that resell, trade, or otherwise misuse that personal information'
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'If docprime determines that you have provided fraudulent, inaccurate, or incomplete information, including through feedback, docprime reserves the right to immediately suspend your access to the Website or any of your accounts with docprime and makes such declaration on the website alongside your name/your clinic\u2019s name as determined by docprime for the protection of its business and in the interests of Users. You shall be liable to indemnify docprime for any losses incurred as a result of your misrepresentations or fraudulent feedback that has adversely affected docprime or its Users.'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'You acknowledge that although some of the content, text, data, graphics, images, information, suggestions, guidance, and other material (collectively, \u201CInformation\u201D) that is provided to You on the Website (including Information provided in direct response to Your questions or postings) may be provided by individuals in the medical profession, the provision of such Information does not create a doctor/medical professional-patient relationship, but is provided to inform You on various medical conditions, medical diagnosis and treatment and it does not constitute a direct medical diagnosis, treatment or prescription. Everything on the Website should be used for information purposes only.'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc-subheading' },
                            '6.\xA0\xA0\xA0\xA0DISCLAIMER'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'As with any medical procedure, there are potential risks associated with using the Services offered by the Website. By using the Services, You agree to abide by these Terms of Use, Privacy Policy and risks described below. These risks include, but may not be limited to:'
                        ),
                        _react2.default.createElement(
                            'ol',
                            { className: 'privacy-list-group' },
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'While the Website is an honest attempt to provide access to the best possible medical information to the Users, the Medical Experts will not be examining You physically. The Medical Experts may not have access to all or some of Your medical history that might be critical to consult You. The Medical Experts will not have the benefit of information that would be obtained by examining You in person, observing Your physical condition and by going through Your medical records. This means that the Services provided is different from the diagnostic and treatment services typically decided by a physician. Therefore, the Medical Experts may not be aware of facts or information that would affect his or her opinion of Your diagnosis. To reduce the risk of this limitation, docprime strongly encourages You to be in touch with an on-ground physician and share the docprime\u2019s opinion with him/her.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'By requesting a medical opinion through the Website, You acknowledge and agree that:',
                                _react2.default.createElement(
                                    'ol',
                                    { className: 'sub-list' },
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'the advice/information/opinion on diagnosis You may receive could be limited and provisional;'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'the medical opinion is not intended to replace a face-to-face visit with a physician and it does replace an actual doctor-patient relationship;'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'in case of a second opinion where there is a difference of opinion among Our Medical Experts and Your personal physician, You would bear the responsibility to decide on online or offline consultation, or procedure, and/or treatment;'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'the Medical Expert is reliant on information provided by You and hence any information demonstrated to have been falsified, misleading or incomplete will immediately render the opinion and all details therein null and void;'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'Ain some cases, the Medical Expert may determine that the transmitted information is of inadequate quality and may ask for more information, without which he/she may refuse to answer the query;'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'in rare cases, the Medical Experts may feel that the query may not be answerable without physically examining the patient/ Users and the Consultation may be refused forthwith;'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'in very rare instances, security protocols could fail, causing a breach of privacy of personal medical information; and'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'delays in medical evaluation and answers could occur due to deficiencies or failures of the service as per those mentioned in these Terms of Use.'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc-subheading' },
                            '7.\xA0\xA0\xA0\xA0BOOK APPOINTMENT AND CALL FACILITY'
                        ),
                        _react2.default.createElement(
                            'ol',
                            { className: 'privacy-list-group' },
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'docprime enables Users to connect with Medical Experts and Third Party Labs through two methods: a) Book facility that allows Users book an appointment through the Website; b) online or tele-consultation services which connect Users directly to the Medical Experts engaged by docprime.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'docprime will ensure Users are provided confirmed appointment on the Book facility. However, docprime has no liability if such an appointment is later cancelled by the Medical Expert or Third Party Labs, or they are not available for appointment.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'If a User has utilized the online consultation/telephonic services, docprime reserves the right to share the information provided by the User with the Medical Experts and Third Party Labs and store such information and/or conversation of the User with the Medical Experts and Third Party Labs, in accordance with our Privacy Policy .'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'The results of any search Users perform on the Website for Medical Experts and Third Party Labs should not be construed as an endorsement by docprime of any such particular Medical Experts and Third Party Labs. If the User decides to engage with a Medical Experts and Third Party Labs to seek medical services, the User shall be doing so at his/her own risk.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'Without prejudice to the generality of the above, docprime is acting as a mere facilitator and is not involved in providing any healthcare or medical advice or diagnosis and hence is not responsible for any interactions between User and Medical Experts and Third Party Labs. User understands and agrees that docprime will not be liable for:',
                                _react2.default.createElement(
                                    'ol',
                                    { className: 'sub-list' },
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'User interactions and associated issues User has with the Medical Experts and Third Party Labs;'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'the ability or intent of the Medical Experts and Third Party Labs or the lack of it, in fulfilling their obligations towards Users;'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'any wrong medication or quality of treatment being given by the Medical Experts and Third Party Labs, or any medical negligence on part of the Medical Experts and Third Party Labs;'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'inappropriate treatment, or similar difficulties or any type of inconvenience suffered by the User due to a failure on the part of the Medical Experts and Third Party Labs to provide agreed Services;'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'any misconduct or inappropriate behaviour by the Medical Experts and Third Party Labs or their respective staff;'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'cancellation or no show by the Medical Experts and Third Party Labs or rescheduling of booked appointment.'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'Users are allowed to provide feedback about their experiences with the Practitioner, however, the User shall ensure that, the same is provided in accordance with applicable law. User however understands that, docprime shall not be obliged to act in such manner as may be required to give effect to the content of Users feedback, such as suggestions for delisting of a particular Medical Experts and Third Party Labs from the Website.'
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc-subheading' },
                            '8.\xA0\xA0\xA0\xA0COMMUNICATIONS TO YOU'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'You agree and authorize docprime to share your information with its group companies and other third parties, in so far as required for joint marketing purposes/offering various services or various value added services, in association with the Services of the Website or otherwise. You agree to receive communications through emails, telephone and/or sms, from docprime or its group companies or its third party vendors/business partners or Third Party Service Providers regarding the Services/services updates, transactional and promotional emails and/or any announcements. In this context, you agree and consent to receive all communications at the mobile number provided, even if this mobile number is registered under DND/NCPR list under Telecom Regulatory Authority of India (TRAI) laws, rules and regulations. And for that purpose, you further authorize Company to share/disclose the information to any third party service provider or any affiliates, group companies, their authorized agents or third party service providers. You agree that in accordance with the applicable TRAI regulations specifically The Telecom Commercial Communications Customer Regulations, 2014 :'
                        ),
                        _react2.default.createElement(
                            'ol',
                            { className: 'privacy-list-group' },
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'Each time You do visit/transact or login in your account on the Website, it shall be regarded as a verifiable request from you pertaining to receipt of our Services and activities;'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'You should visit your account at least once in six months otherwise docprime reservs the right to deactivate your account for inaction, and in this regard docprime will send you SMS and email communications prior to the expiry of six months from the date of last visit/transaction/login into your account on the Website;'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'Each time you visit/login/transact on the Website it will be deemed to be as a fresh request from you for continuing to receive communication from docprime'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'In case you do not wish to receive any communication from us or provide your feedback about the services, you can mail us at care@docprime.com'
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'docprime will retain and use your information as necessary to comply with our legal obligations, resolve disputes and enforce our agreements entered into for providing Services and ancillary services.'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc-subheading', id: 'rescheduling_9' },
                            '9.\xA0\xA0\xA0\xA0RESCHEDULING, REFUND & CANCELLATION POLICY'
                        ),
                        _react2.default.createElement(
                            'ol',
                            { className: 'privacy-list-group' },
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'Cancellations:',
                                _react2.default.createElement(
                                    'ol',
                                    { className: 'sub-list' },
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'For any online paid appointments, you can cancel your scheduled or re-booked appointment and initiate immediate refund at any time. Immediate refund shall be subject to terms and conditions as described under this section mentioned below.'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'In the event the services are not availed at the appointed date and time and our systems do not validate the URN generated on your registered mobile number, we will automatically cancel your appointment at 12:00 midnight of next date of your appointment date.'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'aOccasionally, appointments may be cancelled or postponed by the Third Party Service Provider. Should this occur, we will attempt to contact or inform you and you may re- schedule your appointment as per your convenience or visit www.docprime.com for fresh/re-booking on the Website.'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'Cancellation through mail or call centre is allowed for all the bookings until the time of appointment or 12:00 midnight of next date of your appointment date. In such cases, we will initiate immediate refund of your money as per the process defined below.'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'Rescheduling:',
                                _react2.default.createElement(
                                    'ol',
                                    { className: 'sub-list' },
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'Re-scheduling of all appointments can be done only until the auto-cancellation is done from our systems. Once the auto cancellation is generated, cancellation, and refund process as mentioned under this section should be followed and re-process for a fresh/re-booking, if need be.'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'You can re-schedule your appointment i.e. book your appointment for a different date and time; with the same Third party Health Service Provider for the same type of healthcare service.'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'In case of re-scheduling, if there is any difference in the charges for re-scheduled appointment, we will either collect the differential amount or refund the same, as the case may be.'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'Re-booking:',
                                _react2.default.createElement(
                                    'ol',
                                    { className: 'sub-list' },
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'You can re-book your appointment by changing the particulars of your appointment i.e. provider, type of service, date and time etc.'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'Re-booking of all appointments can be done at the choice of the Customer and in such cases customer has to click on \u201CCancellation and rebook\u201D option displayed in my account section of the customer.'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'For all appointments which are re-booked cases, the amount paid by the customer for the previous booking can be utilized within 24(twenty four) hours from the date on which cancellation is initiated by the customer and before instruction to refund is initiated from our end & processed by the payment gateway integrated on our Website.'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'Your previous booking amount will be reflected by way of credits in your account. 1 credit = 1 rupee.'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'In case money for your re-booked appointment is adjusted against the money paid for previous booking, following may be applicable, as the case may be:',
                                        _react2.default.createElement(
                                            'ul',
                                            { className: 'mrt-10', style: { listStyle: 'disc', paddingLeft: 40, textAlign: 'left' } },
                                            _react2.default.createElement(
                                                'li',
                                                { className: 'mrb-10' },
                                                'If the charges for re-booking appointment are more than the amount paid for previous booking, you will be required to pay the shortfall amount for completing the re-booked appointment.'
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                { className: 'mrb-10' },
                                                'If the charges for re-booking appointment are less than the amount paid for previous booking, we will initiate immediate refund for the differential amount.'
                                            )
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'Refunds:',
                                _react2.default.createElement(
                                    'ol',
                                    { className: 'sub-list' },
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'Upon receipt a valid cancellation, we will initiate refund of your money in the same manner as the money was received.'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'In case you fail to utilize previous booking money for any re-booking cases, we will initiate immediate refund within expiry of 24(twenty four) hours from the date of cancellation.'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'Typically, all refunds are processed with 14(fourteen) working days from the date immediate refund is initiated at our end.'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'Pease note that we shall not be responsible for any delays in credit to the Cardholder\'s credit card account/ accountholder\u2019s bank account due to any reasons cited by the Payment Gateway or Cardholder\'s issuing bank.'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'You will be provided with refund reference number for further communication with your bank.'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'No refunds / cancellation requests shall be entertained in case of payment against bills / Services received.'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'Under no circumstances, cash will be refunded against any cancellation.'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc-subheading' },
                            '10.\xA0\xA0\xA0PAYMENT, FEES AND TAXES'
                        ),
                        _react2.default.createElement(
                            'ol',
                            { className: 'privacy-list-group' },
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'Registration on the Website and the access to the information provided on the Website is free. docprime does not charge any fee for accessing, and browsing through the Website. However, docprime may collect payments (which shall include applicable taxes and service fee/commission of docprime) from You on behalf of Third Party Service Providers through RBI authorized payment collectors or gateways. You agree and acknowledge that You shall not hold docprime responsible for any loss or damage caused to You during the process of collection of payments from You, or due to any acts or omission on the part of third parties viz. payment collectors or for any actions/ omissions which are beyond the control of docprime.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'All fees displayed on the Website are inclusive of applicable taxes.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'docprime reserves the right to modify the fee structure by providing on the Website which shall be considered as valid and agreed communication.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'In order to process the payments, docprime might require details of User\u2019s/ Third Party Service Providers\u2019 bank account, credit card number etc. Please check Our Privacy Policy on how docprime uses the confidential information provided by Users.'
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc-subheading' },
                            '11.\xA0\xA0\xA0RESTRICTIONS ON USE OF THE WEBSITE'
                        ),
                        _react2.default.createElement(
                            'ol',
                            { className: 'privacy-list-group' },
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'You agree and undertake that You shall not do any act or post, display, upload, modify, publish, transmit, update or share any information that -',
                                _react2.default.createElement(
                                    'ol',
                                    { className: 'sub-list' },
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'belongs to another person and to which You does not belong to You or do not have any right;'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'is grossly harmful, harassing, defamatory, obscene, pornographic, libelous, invasive of another\'s privacy, hateful, or objectionable, relating or encouraging money laundering or gambling, or otherwise unlawful in any manner whatever;'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'infringes any patent, trademark, copyright or other intellectual proprietary rights of any third party;'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'violates any law for the time being in force;'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'impersonates another person;'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer resource;'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'is prohibited under applicable law(s) for the time being in force and rules made there under; and'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'threatens the unity, integrity, defense, security or sovereignty of India, friendly relations with foreign states, or public order or causes incitement to the commission of any cognizable offence or prevents investigation of any offence or is insulting any other nation.'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'You are also prohibited from:',
                                _react2.default.createElement(
                                    'ol',
                                    { className: 'sub-list' },
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'violating or attempting to violate the integrity or security of the Website or any docprime Content;'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'transmitting any information (including job posts, messages and hyperlinks) on or through the Website that is disruptive or competitive to the provision of Services by docprime;'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'intentionally submitting on the Website any incomplete, false or inaccurate information;'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'making any unsolicited communications to other Covenanters;'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'using any engine, software, tool, agent or other device or mechanism (such as spiders, robots, avatars or intelligent agents) to navigate or search the Website;'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'attempting to decipher, decompile, disassemble or reverse engineer any part of the Website;'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'copying or duplicating in any manner any of the docprime Content or other information available from the Website; and'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'The Website shall not be used for illegal purposes. The information and Services shall not be used for any illegal purpose. You may not access our networks, computers, or the Information and Services in any manner that could damage, disable, overburden, or impair them, or interfere with any other person\'s use and enjoyment. You shall not attempt to gain unauthorized access to any Information or Services, other accounts, computer systems, or networks connected with the Website, the Information, or Services. You shall not use any automated means (such as a scraper) to access the Website, the Information, or Services for any purpose. Such unauthorized access includes, but is not limited to, using another person\u2019s login credentials to access his or her docprime profile/ account. Any attempt by any individual or entity to solicit login information of any other user to access any such account is an express and direct violation of these Terms of Use and of applicable law(s), including relevant privacy and security laws and laws prohibiting unfair or unethical business practices.'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc-subheading' },
                            '12.\xA0\xA0\xA0NO WARRANTIES'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'Users accept and acknowledges that the Services offered by docprime through the Website (or any of its licensors or providers or Third Party Service Providers) are provided \u2018as is\u2019, as available, and without any warranties or representations or conditions (express or implied, including the implied warranties or representations of merchantability, accuracy, fitness for a particular purpose, title and non-infringement, arising by statute or otherwise in law or from a course of dealing or usage or trade). docprime does not provide or make any representations, warranties or guarantees express or implied about the Website or the Services. docprime does not verify any content or information provided by the Users or any Third Party Service Providers (collectively referred to as the \u201COther Parties\u201D) on the Website and to the fullest extent permitted by applicable law(s), disclaims all liability arising out of the Other Parties\u2019 use or reliance upon the Website, the Services, the docprime Content, Third Party Contents, representations and warranties made by the Other Parties on the Website or any loss arising out of the manner in which the Services have been rendered.'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'docprime also does not provide any representation or give any guarantee or warranty (whether express or implied) about the Website or any of the Services offered or services offered or provided by the Third Party Service Providers.'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc-subheading' },
                            '13.\xA0\xA0\xA0LIABILITY'
                        ),
                        _react2.default.createElement(
                            'ol',
                            { className: 'sub-list' },
                            _react2.default.createElement(
                                'li',
                                null,
                                'docprime shall not be responsible or liable in any manner to the Users or any Third Party Service Providers (collectively referred to as the \u201COther Parties\u201D) for any losses, damage, injuries or expenses incurred by as a result of any disclosures made by docprime, where Other Parties have consented to the making of such disclosures by docprime. The Other Parties shall not hold docprime responsible or liable in any way for any disclosures by docprime for collection, use, storage and transfer of personal information under the Privacy Policy. docprime shall not be responsible for the mishaps/missed services due to no service/no show from the Other Parties; docprime shall not be responsible for any error in any of the services being provided by the Third Party Service Providers.'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'docprime assumes no responsibility, and shall not be liable for, any damages to, or viruses that may infect Other Parties\u2019 equipment on account of the Other Parties\u2019 access to, use of, or browsing the Website or the downloading of any material, data, text, images, video content, or audio content from the Website. If any of the Other Party is dissatisfied with the Website, the sole remedy of such Other Party(s) is to discontinue using the Website.'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'To the maximum extent permitted by applicable law(s), docprime, its affiliates, independent contractors, service providers, consultants, licensors, agents, and representatives, affiliates, group companies and each of their respective directors, officers or employees (\u201CProtected Entities\u201D), shall not be liable for any direct, indirect, special, incidental, punitive, exemplary or consequential damages, or any other damages of any kind, arising from, or in connect with or directly or indirectly related to, the use of, or the inability to use, the Website or the content, materials and functions related thereto; even if Protected Entities has been advised of the possibility of such damages.'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'In (iv), all or any products or service by a Third Party Service Provider to any User; or (ii) any comments or feedback given by any of the Users in relation to the goods or services provided by any Third Party Service Providers; or (ii) any content posted, transmitted, exchanged or received by or on behalf of any User, Third Party Service Providers or other person on or through the Website.'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'In no event shall the Protected Entities be liable for failure on the part of the Users or Third Party Service Providers to provide agreed services or to make himself/herself available at the appointed time, cancellation or rescheduling of appointments. In no event shall the Protected Entities be liable for any comments or feedback given by any of the Users in relation to the services provided by a Third Party Service Providers'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'docprime disclaims any liability in relation to the validity of the medical advice provided by the Medical Experts and the validity and legality of the e-prescription for dispensation of medicines and conduct of diagnostic tests. All liabilities arising out of any wrong diagnosis of medical condition by the Medical Experts and/ or arising from the e-prescription will be of the concerned Medical Expert. Further, all liabilities arising out of any wrong diagnosis report by the Third Party Labs and/ or arising from the wrong dispensation of the Pharmaceutical Goods and Services will be of the concerned Third Party Service Providers as the case may be.'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'The Users may share their previous medical history during interaction with the Medical Experts. The Users undertake to share such information at their own risk. docprime reserves the right to retain such information for the purpose of providing Services to the Users.'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'The Users acknowledge that the Protected Entities merely act in the capacity of facilitators between the Other Parties by providing a platform for them to interact and transact. In no event shall the Protected Entities be held liable for any of the losses attributable to Services offered through the Website.'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'In no event shall the total aggregate liability of the Protected Entities to any Other Parties for all damages, losses, and causes of action (whether in contract or tort, including, but not limited to negligence, strict liability, product liability or otherwise) arising from these Terms of Use or any Other Parties\u2019 use of the Website exceed an aggregate amount of INR 1000/- (Indian Rupees Thousand only).'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'docprime accepts no liability for any errors or omissions on behalf of the Other Parties.'
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc-subheading' },
                            '14.\xA0\xA0\xA0INDEMNITY'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'You agree to defend, indemnify and hold harmless docprime, the Protected Entities, independent contractors, service providers, consultants, licensors, agents, and representatives, and each of their respective directors, officers and employees, from and against any and all claims, losses, liability, damages, and/or costs (including, but not limited to, reasonable attorney fees and costs) arising from or related to (a) access to or use of Website; (b) violation of these Terms of Use or any applicable law(s); (c) violation of any rights of another person/ entity, including infringement of their intellectual property rights; or (d) conduct in connection with the Website.'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc-subheading' },
                            '15.\xA0\xA0\xA0GENERAL TERMS'
                        ),
                        _react2.default.createElement(
                            'ol',
                            { className: 'sub-list' },
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    'Links to Third Party Websites:'
                                ),
                                ' The Website may be linked to the website of third parties, affiliates and business partners. docprime has no control over, and not liable or responsible for content, accuracy, validity, reliability, quality of such websites or made available by/through the Website. Inclusion of any link on the Website does not imply that docprime endorses the linked website. Other Parties may use the links and these services at their own risk.'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    'Modifications:'
                                ),
                                ' docprime reserves the right to change or modify these Terms of Use or any policy or guideline of the Website including the Privacy Policy, at any time and in its sole discretion. Any changes or modifications will be effective immediately upon posting the revisions on the Website and You waive any right You may have to receive specific notice of such changes or modifications. Your continued use of the Website will confirm Your acceptance of such changes or modifications; therefore, You should frequently review these Terms of Use and applicable policies to understand the terms and conditions that apply to Your use of the Website. Further, docprime also reserves the right to modify or discontinue, temporarily or permanently, the Website or any features or portions thereof without prior notice. You agree that docprime will not be liable for any modification, suspension or discontinuance of the Website or any other part thereof.'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    'Cookies:'
                                ),
                                ' The Website uses temporary cookies to store certain data (that is not sensitive personal data or information) that is used by docprime for the technical administration of the Website, research and development, and for User administration. In the course of serving or optimizing services to You, docprime may allow authorized third parties to place or recognize a unique cookie on the Your browser. docprime does not store personally identifiable information in the cookies.'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    'Intellectual property rights:'
                                ),
                                ' All the intellectual property used on the Website except those which have been identified as the intellectual properties of the Other Parties(as defined above) shall remain the exclusive property of the Company. The Other Parties agree not to circumvent, disable or otherwise interfere with security related features of the Website or features that prevent or restrict use or copying of any materials or enforce limitations on use of the Website or the materials therein. The materials on the Website or otherwise may not be modified, copied, reproduced, distributed, republished, downloaded, displayed, sold, compiled, posted or transmitted in any form or by any means, including but not limited to, electronic, mechanical, photocopying, recording or other means.'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    'Compliance of Applicable Law:'
                                ),
                                ' While communicating/ transacting with each other through the Website, Third Party Service Providers shall at all times ensure full compliance with the applicable provisions of the Contract Act, IT Act, Drugs Act read with the Drug Rules, Drugs and Magic Act, The Indian Medical Council Act, 1956 read with the Indian Medical Council Rules, 1957, Pharmacy Act, Consumer Protection Act, 1986, IT law (including rules for sensitive personal information as enshrined under IT law), etc. ',
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    '(\u201CCaptioned Laws\u201D)'
                                ),
                                ' as well as all other laws for the time being in force.'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    'Termination:'
                                ),
                                ' docprime reserves the right to, at any time, and with or without notice, terminate these Terms of Use against the User(s), if there is:',
                                _react2.default.createElement(
                                    'ol',
                                    { className: 'privacy-order-list' },
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'privacy-order-item' },
                                        'Breach of any of applicable law(s), including but not limited to the Captioned Laws or the provisions of these Terms of Use or the terms of the Privacy Policy or any other terms, conditions, or policies that may be applicable to the Services from time to time (or have acted in a manner that clearly shows that Other Party(s) do not intend to, or are unable to, comply with the same); or'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'privacy-order-item' },
                                        'Breach of any terms and conditions of these Terms of Use;'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'privacy-order-item' },
                                        'docprime is unable to verify or authenticate any information provided to docprime; or'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'privacy-order-item' },
                                        'A third party reports violation of any of its right as a result of your use of the Services;'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'privacy-order-item' },
                                        'docprime has reasonable grounds for suspecting any illegal, fraudulent or abusive activity on part of such User; or'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'privacy-order-item' },
                                        'docprime believes, in its sole discretion, that Other Parties actions may cause legal liability for docprime (or any of its affiliates, independent contractors, service providers, consultants, licensors, agents, and representatives) or are contrary to the interests of the Website; or'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'privacy-order-item' },
                                        'docprime is required to do so by law; or'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'privacy-order-item' },
                                        'The provision of the Services to the general public, is in docprime\u2019s opinion, no longer commercially viable; or'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'privacy-order-item' },
                                        'docprime has elected to discontinue, with or without reason, access to the Website or the Services (or any part thereof).'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'privacy-order-item' },
                                        'docprime believes in its sole discretion that User\u2019s actions may cause legal liability for such User, other Users or for docprime or are contrary to the interests of the Website.'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'privacy-order-item' },
                                        'Once temporarily suspended, indefinitely suspended or terminated, the User may not continue to use the Website under the same account, a different account or re-register under a new account. On termination of an account due to the reasons mentioned herein, such User shall no longer have access to data, messages, files and other material kept on the Website by such User. The User shall ensure that he/she/it has continuous backup of any medical services the User has rendered in order to comply with the User\u2019s record keeping process and practices'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'privacy-order-item' },
                                        'The right to terminate/ suspend the account is in addition to, and without prejudice to, docprime\u2019s right to initiate action against a User (or Other Parties), in accordance with applicable law.'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    'Force Majeure:'
                                ),
                                ' Other Parties accept and acknowledge that docprime shall not be liable for any loss or damage caused to the User as a result of delay or default or deficiency or failure in the Services as a result of any natural disasters, fire, riots, civil disturbances, actions or decrees of governmental bodies, communication line failures (which are not caused due to the fault of docprime or the Third Party Service Providers), or any other delay or default or deficiency or failure which arises from causes beyond docprime\u2019s reasonable control (\u201CForce Majeure Event\u201D). In the event of any Force Majeure Event arising, docprime, depending on whose performance has been impacted under the Terms of Use, shall immediately give notice to the Other Party(s) of the facts which constitute the Force Majeure Event.'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    'Governing Law and Dispute Resolution:'
                                ),
                                ' These Terms of Use and any contractual obligation between the Parties will be governed by the laws of India, without reference to the conflict of laws principles. Any legal action or proceeding related to Other Party(s) access to, or use of, the Website or these Terms of Use shall be subject to the exclusive jurisdiction of the courts at Gurugram.'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    'Survival:'
                                ),
                                ' Even after termination, certain terms/obligations mentioned under these Terms of Use such as Liability, Indemnity, Intellectual Property, Dispute Resolution shall continue and survive termination.'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    'Severability:'
                                ),
                                ' If any provision of these Terms of Use is deemed invalid, unlawful, void or for any other reason unenforceable, then that provision shall be deemed severable from these Terms of Use and shall not affect the validity and enforceability of any of the remaining provisions.'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    'Waiver:'
                                ),
                                ' No provision of these Terms of Use shall be deemed to be waived and no breach excused, unless such waiver or consent shall be in writing and signed by docprime. Any consent by docprime to, or a waiver by docprime of any breach by Other Parties, whether expressed or implied, shall not constitute consent to, waiver of, or excuse for any other different or subsequent breach.'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    'Headings:'
                                ),
                                ' The headings and subheadings herein are included for convenience and identification only and are not intended to describe, interpret, define or limit the scope, extent or intent of these Terms of Use.'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    'Grievance Officer and Contact us'
                                ),
                                'If any User/You have any grievance, comment, question or suggestion regarding any of our Services or the Website or anything related to any of the forgoing, please contact us at In accordance with the Information Technology Act, 2000, and the rules made there under, if you have any grievance with respect to the Website or the service, including any discrepancies and grievances with respect to processing of information, you can contact our Grievance Officer at:',
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    '\xA0'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'fw-500' },
                                    'Name: Ashish Ajmani'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'fw-500' },
                                    'Designation: Manager Operations'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'fw-500' },
                                    'Email: ashishajmani@docprime.com'
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row doctor-terms-row', hidden: this.state.selected == 0 },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12 privacy-desc-div' },
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc-heading mrb-20' },
                            'TERMS AND CONDITIONS FOR EMPANELMENT OF HOSPITALS/DIAGNOSTIC CENTERS/CLINICS/DOCTORS'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'This agreement sets forth the terms and conditions that apply to the empanelment of Hospitals/Diagnostic centers/Clinics/Doctors (\u201CHealth Service provider/HSB\u201D) to provide access to health care services by disseminating healthcare information and data in an unbiased manner under its scope of licensure or accreditation (Services) to the users/customers of this Website and its Mobile Application (collectively be referred to as \u201CWebsite\u201D), which is managed and operated by Panacea Techno Services Private Limited (\u201CCompany\u201D). You understand and agree that Company reserves the right to enroll/ appoint other health service providers for similar services as envisaged herein and you shall have no objection for the same and vice-versa.'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'This document/agreement is an electronic record in terms of Information Technology Act, 2000 and generated by a computer system and does not require any physical or digital signatures. This document is published in accordance with the provisions of Rule 3 of the Information Technology (Intermediaries guidelines) 2011, that provides for the due diligence to be exercised for the access or usage of this Website.'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY. YOUR ACCEPTANCE OF TERMS CONTAINED HEREIN CONSTITUTES THE AGREEMENT BETWEEN YOU AND COMPANY FOR THE PURPOSE AS DEFINDED HEREUNDER.'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc-subheading' },
                            '1.\xA0\xA0\xA0\xA0SCOPE AND PURPOSE'
                        ),
                        _react2.default.createElement(
                            'ol',
                            { className: 'privacy-list-group' },
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'Health Service Provider is desirous and had approached the Company to display/list the information pertaining to the Health Service Provider on the Website to disseminate information regarding the availability of medical/health facilities with the Health Service Provider to the prospective users/customers of the Website and to render medical/health care services to the customers of the Company who are desirous of availing such medical benefits through the Website.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'Parties agree that Company shall provide the customer details of such customers who have expressed to avail the services of the Health Service Provider such as by booking an online consultation, through the designated website of the Company.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'For all customers referred by the Company, Company shall be entitled to send information through SMS or E-Mail to the SPOC of Service Provider.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'If any services, functions or responsibilities not specifically described herein or in any related documents but are inherent, necessary or customary part of the services or are reasonably required for proper performance of the Services in accordance with the Agreement, they shall be deemed to be included within the Scope of Services as if such services, functions or responsibilities were specifically described in this Agreement.'
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc-subheading' },
                            '2.\xA0\xA0\xA0\xA0OBLIGATIONS OF THE SERVICE PROVIDER'
                        ),
                        _react2.default.createElement(
                            'ol',
                            { className: 'privacy-list-group' },
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'This Agreement is between the Health Service Provider and the Company. However, it would be applicable to all specialties offered by ',
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    'Service Provider Group of Hospitals/ diagnostic centers/Clinics,'
                                ),
                                ' as may be applicable, and as provided by the Health Service Provider from time to time.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'The empanelled Health Service Provider is expected to provide its Services as per the industry standards and in a professional & ethical manner.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'Health Service Provider may set-up a separate Company\u2019s \u201CCo-ordination Desk\u201D round the clock in the Health Service Provider Premises, as may be mutually agreed with the Company.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'Health Service Provider shall notify and share with the Company the cost/rate list detailing the costs of each medical treatment and procedures, which can be suitably displayed on the website of the Company. In case of any changes/modification to such costs/rates the Service Provider shall notify the same within 2(two) days prior to such changes are to be made effective.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'Health Service Provider agrees to provide the Services to the customers of the Company with the same degree of care and skill as customarily provided to its own patients who are not customers of the Company, i.e. according to generally accepted standards of practice including medical profession in India.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'Health Service Provider agrees not to discriminate against customers of the Company on the basis of race, ethnicity, gender, creed, ancestry, lawful occupation, age, religion, marital status, sexual orientation, mental or physical disability, medical history, color, national origin, place of residence, health status, or any other grounds prohibited by law.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'Health Service Provider also agrees to allow Company to audit the relevant bills/ documents pertaining to this Agreement; as and when requested by the Company. Such auditing shall be scheduled mutually between the parties.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'Health Service Provider shall ensure that the information provided to the Company for display on its Website shall be up to dated, true and correct. In this context, health Service Provider will not hold the Company (including its affiliated companies/group companies and related websites) liable for any information relied upon by Company as provided by the Health Service Provider.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'Health Service Provider authorizes Company to collect and receive monies towards the amounts payable by the customer for the services availed, on behalf of the Service Provider. Further, settlement of monies to the Service Provider shall be in accordance with the terms as mutually agreed between the parties. All settlements for the preceding month shall be made within 60(sixty) days from the succeeding month during which the invoice is raised by the Service Provider. In this regard, the Service Provider shall raise the invoice on or before the 7th day of the successive month for the settlement of preceding month.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'The Health Service Provider shall be solely responsible for any misconduct, damage, willfull commission or omission of any services which are not listed under these Terms & Conditions or anything which goes against the spirit of free, fair and ethical practice of patient care.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    'Confidentiality :'
                                ),
                                ' The Health Service Provider undertakes to maintain in absolute confidence and not to reveal to any person or body, any information or data which it receives through and subsequent for providing the Services pursuant to this agreement and which pertains; directly or indirectly; to the Company or its customers, including the and without derogating from the generality of the aforesaid names, addresses, details and medical background of the Company\u2019s customers, information which pertains to the Company\u2019s business  or any other data which is proprietary to the Company and its customers. It is further agreed that the contents of this sub-section cannot derogate from the duty of the Health Service Provider in reporting the Company of any data, information or medical background which may be relevant to the Company in determination of its scope of work.  The transfer of information shall be in accordance to the procedures established by the Company. The Health Service Provider acknowledges that its undertakings given in this Agreement with regard to the confidentiality shall be valid throughout the Term of this Agreement and it shall abide by the same even after the expiry of this Agreement.'
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc-subheading' },
                            '3.\xA0\xA0\xA0\xA0REPRESENTATIONS AND DECLARATIONS BY THE SERVICE PROVIDER'
                        ),
                        _react2.default.createElement(
                            'ol',
                            { className: 'privacy-list-group' },
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'The Health Service Provider declares and undertakes that it has all the necessary registrations/ licenses/ approvals/ authorizations required by the law in order to provide the medical services pursuant to this agreement and that it has adequate ability, knowledge, experience and equipment\u2019s required in order to provide the said service as required in this agreement.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'The Health Service Provider undertakes to uphold all of the requirements of the law as applicable to it from time to time and shall keep updated the Company, in case of any significant change in the present status of the Provider. The Service Provider also undertakes that it shall provide the said services in accordance with the provisions of the law and the regulations, which are enacted, from time to time, by the central or the state government or the local administration/ bodies.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'The Health Service Provider has and will continue to have its facilities covered by proper indemnity policy, including error, omission and professional indemnity and agrees to keep such policies in force during the currency of this Agreement.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'The Health Service Provider declares that it has not been prevented from practicing medicines and that no criminal charge of any kind has ever been filed against it due to medical malpractice, medical negligence and/ or no civil claim has ever been filed against it due to damage inflicted during a medical treatment.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'The Health Service Provider also undertakes to inform the Company in the event of any complaint of medical malpractice is filed against it during the currency of this Agreement.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'It has been duly constituted under the applicable laws and has complied with and shall continue to comply with the applicable laws.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'It has the requisite licenses, permissions, authorizations, consents, approvals and registrations under the applicable laws and the authority to execute this Agreement avail the required Services and perform its obligations hereunder.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'Neither the execution and delivery of this Agreement, the consummation of the transactions contemplated hereby, or the fulfillment of or compliance with the terms and conditions of this Agreement, conflict with or result in a breach of or a default under any of the terms, conditions or provisions of any legal restriction (including, without limitation, any judgment, order, injunction, decree or ruling of any court or governmental authority, or any central, state, local or other law, statute, rule or regulation) or any covenant or agreement or instrument to which it is a Party, or by which it is bound, nor does such execution, delivery, consummation or compliance violate or result in the violation of its constitutional documents.'
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc-subheading' },
                            '4.\xA0\xA0\xA0\xA0INTELLECTUAL PROPERTY RIGHTS'
                        ),
                        _react2.default.createElement(
                            'ol',
                            { className: 'privacy-list-group' },
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'The Parties hereby acknowledge that each Party is the legal and beneficial owner of and has exclusive right, title and interest over its own Intellectual Property and all other proprietary information in relation to its business. Nothing in this Agreement shall be deemed in any way to constitute a transfer or assignment of any Intellectual Property by either Party. It is further agreed and understood between the Parties that the data and information of users/customers produced through this agreement shall jointly owned by the Health Service Provider and the Company.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'The Health Service Provider hereby grants to the Company a limited, non-exclusive, non-transferable right, only for the Term of this Agreement, to use the Service Provider\u2019s Intellectual Property, including its marks, logos and brand/trade names, solely for in relation to the Services to be rendered by the Service Provider in accordance with the terms of this Agreement. Subject to the confidentiality clause herein, the Company may display on its web portals, at all times during the Term of this Agreement, the Health Service Provider\u2019s marks, logo and brand/trade names, as mutually determined in writing by the Parties solely for purposes specified in this Agreement.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'Information and data of the Health Service Provider shall be published by the Company either by relying on the information provided by the Service Provider\u2019s or if taken from Health Service Provider\u2019s website then by seeking prior written approval from the Health Service Provider.'
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc-subheading' },
                            '5.\xA0\xA0\xA0\xA0INDEMNITY'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'The Service Provider hereby covenants to indemnify and hold harmless Company, its employees, servants and agents from and against all actions, claims, demands, losses, damages, costs and expenses for which  Company shall or may be or become liable in respect of and to the extent that they arise from:'
                        ),
                        _react2.default.createElement(
                            'ol',
                            { className: 'privacy-list-group' },
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'The Health Service Provider committing any breach or contravention of the terms and conditions of this Agreement, its obligations under this Agreement, applicable Laws, applicable permits, codes, ordinances or regulations, bye laws;'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'any act of commission or omission, or default on the part of the Service Provider and/or its personnel, representatives, officers, agents, affiliates;'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'the negligent use, misuse, by the health Service Provider or any of its employee, servant, agent, with respect to the medical services provided to the Customer(s) of the Company;'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-list-item' },
                                'The Health Service Provider also agrees to indemnify and hold harmless Company from time to time and at all times hereafter, from and against, all notices, claims, demands, action, suits or proceedings given, made or initiated against Company on account of the Service Provider, as also against all costs, charges and expenses suffered or incurred by Company as a result of any proceeding or legal action filed by the customer or any third party.'
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc-subheading' },
                            '6.\xA0\xA0\xA0\xA0GENERAL PROVISIONS'
                        ),
                        _react2.default.createElement(
                            'ol',
                            { className: 'privacy-order-list' },
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-order-item' },
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    'Governing Law; Dispute Resolution:'
                                ),
                                ' This Agreement shall be governed by, and construed in accordance with, the laws of India, without regard to the principles of conflict of laws of any other jurisdiction. The courts of Gurugram, India which shall have exclusive jurisdiction, for remedies available at law to such Party.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-order-item' },
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    'Relationship of Parties:'
                                ),
                                ' The Parties are independent contracting parties and will have no power or authority to assume or create any obligation or responsibility on behalf of each other. This Agreement will not be construed to create or imply any partnership, agency, or joint venture, or employer-employee relationship.'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-order-item' },
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    'Binding Effect; Severability'
                                ),
                                _react2.default.createElement(
                                    'ol',
                                    { className: 'sub-list' },
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'All terms and conditions of this Agreement shall be binding upon, inure to the benefit of, and be enforceable by the legal representatives, successors and assigns of the Parties.'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'Any term or provision of this Agreement that is invalid or unenforceable in any jurisdiction will, as to that jurisdiction, be ineffective to the extent of such invalidity or unenforceability without rendering invalid or unenforceable the remaining terms and provisions of this Agreement or affecting the validity or enforceability of any of the terms or provisions of this Agreement in any other jurisdiction.  If any provision of this Agreement is so broad as to be unenforceable, the provision will be interpreted to be only so broad as is enforceable.'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'privacy-order-item' },
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    'Entire Agreement:'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'privacy-desc' },
                                    'This Agreement constitutes the entire agreement between the Parties relating to the subject matter of this Agreement and supersedes any previous written or oral understanding, negotiations, communications and agreement between the Parties in relation to the matters dealt with in this Agreement.'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc-heading mrt-20' },
                            'CODE OF CONDUCT'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'Health Service Provider:'
                        ),
                        _react2.default.createElement(
                            'ol',
                            { className: 'sub-list' },
                            _react2.default.createElement(
                                'li',
                                null,
                                'shall abide by the Indian Medical Council (Professional conduct, Etiquette and Ethics) Regulations, 2002 and other applicable laws to medical profession I India'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'shall ensure that it has the requisite \u200Bqualification recognized by Medical Council of India and registered with Medical Council of India/State Medical Council (s) is allowed to practice as per the applicable laws in India'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'shall be liable to protect patient/customers privacy and confidentiality including any medical information or data provided by the Company\u2019s customers.'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'who participate in telemedicine/online consultation shall ensure and maintain an ethical responsibility to uphold fundamental fiduciary obligations by disclosing any financial or other interests it has in the telemedicine/online consultation application or service and shall immediately disclose it to the Company so that Company can appropriate steps to manage or eliminate conflicts of interests'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'who provide clinical services and/or underwriting decision for health and other insurances, through telemedicine must uphold the standards of professionalism as are applicable in in-person interactions and follow appropriate ethical guidelines and practices as per medical laws applicable in India'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'should be responsible in understanding the \u200Bcurrent medical condition, the past-history, the social history, severity of existing diseases, complications and current management line of prospective and current customers for health and other insurances.'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'shall be prudent in carrying out a diagnostic evaluation or prescribing medication by:',
                                _react2.default.createElement(
                                    'ul',
                                    null,
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'Establishing the patient\u2019s identity'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'Confirming that telemedicine services are appropriate for that patient\u2019s individual situation and medical needs'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'Evaluating the indication, appropriateness and safety of any prescription in keeping with best'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'practice guidelines and any formulary limitations that apply to the electronic interaction'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        'Documenting the clinical evaluation and prescription'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'shall attend mandatory in-house training programs that may be conducted by the Company from time to time. This may require the Health Service Provider to undergo web-based and other training programs. Company shall have the right to regularly and monitor and the quality of work/service performed by the Health Service Provide.'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'shall maintain all patient related records in an electronic manner in accordance with provisions laid down by the Medical Council of India and in addition, in the form and manner as instructed by the Company.'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'shall keep itself up to date with the developments in medical profession and studies,new drugs, treatments and medications, including complementary medicine etc.'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'shall at all times maintain a professional appearance and attitude while rendeing medical and health care services.'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'shall ensure clear and prompt communication in its dealing with Company\u2019s customers.'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'shall act in utmost good faith and exercise due care, diligence and personal and professional integrity in the performance of their duties and responsibilities as medical practitioner and shall in no event compromise with their independence of judgment'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'shall not exploit for their own personal gain, opportunities that are discovered through use of corporate property information'
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc-subheading' },
                            'Declaration:'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'privacy-desc' },
                            'This is to confirm that we have understood the contents of Company\u2019s Code of Conduct for Health Service Provider and the same has been explained and understood by us.  We agree and undertake that in performance of our obligations under this agreement with  Company we shall including but not limited to our officers, directors, employees, agents, consultants or representatives, etc., shall be required to adhere to the requirements of this acknowledgement.'
                        )
                    )
                )
            );
        }
    }]);

    return Terms;
}(_react2.default.Component);

exports.default = Terms;

/***/ }),

/***/ "./dev/js/containers/commons/StaticPages.js":
/*!**************************************************!*\
  !*** ./dev/js/containers/commons/StaticPages.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _staticPages = __webpack_require__(/*! ../../components/commons/staticPages */ "./dev/js/components/commons/staticPages/index.js");

var _staticPages2 = _interopRequireDefault(_staticPages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StaticPages = function (_React$Component) {
    _inherits(StaticPages, _React$Component);

    function StaticPages(props) {
        _classCallCheck(this, StaticPages);

        return _possibleConstructorReturn(this, (StaticPages.__proto__ || Object.getPrototypeOf(StaticPages)).call(this, props));
    }

    _createClass(StaticPages, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(_staticPages2.default, this.props);
        }
    }]);

    return StaticPages;
}(_react2.default.Component);

StaticPages.contextTypes = {
    router: function router() {
        return null;
    }
};


var mapStateToProps = function mapStateToProps(state) {
    var _state$USER = state.USER,
        citiesName = _state$USER.citiesName,
        utm_tags = _state$USER.utm_tags;

    return {
        citiesName: citiesName,
        utm_tags: utm_tags
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        submitCareerProfile: function submitCareerProfile(postCareerData, cb) {
            return dispatch((0, _index.submitCareerProfile)(postCareerData, cb));
        },
        submitContactMessage: function submitContactMessage(postContactData, cb) {
            return dispatch((0, _index.submitContactMessage)(postContactData, cb));
        },
        signupDoctor: function signupDoctor(signupDoctorData, cb) {
            return dispatch((0, _index.signupDoctor)(signupDoctorData, cb));
        },
        getCities: function getCities(filterText) {
            return dispatch((0, _index.getCities)(filterText));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(StaticPages);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9zdGF0aWNQYWdlcy9TdGF0aWNQYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3N0YXRpY1BhZ2VzL2Fib3V0VXMuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9zdGF0aWNQYWdlcy9jYW5jZWxQb2xpY3kuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9zdGF0aWNQYWdlcy9jYXJlZXJzLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvc3RhdGljUGFnZXMvY29udGFjdFVzLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvc3RhdGljUGFnZXMvZGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3N0YXRpY1BhZ2VzL2RvY3RvcnNpZ251cC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3N0YXRpY1BhZ2VzL2hvd2l0V29ya3MuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9zdGF0aWNQYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3N0YXRpY1BhZ2VzL21lZGlhLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvc3RhdGljUGFnZXMvcHJpdmFjeS5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3N0YXRpY1BhZ2VzL3Rlcm1zLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL2NvbW1vbnMvU3RhdGljUGFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BhdGgtYnJvd3NlcmlmeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbImlzVmlwIiwiY29sb3IiLCJmb250U2l6ZSIsInBhZGRpbmdCb3R0b20iLCJMb2FkZXIiLCJwcm9wcyIsImNsYXNzVHlwZSIsImlGcmFtZVBvcHVwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJTdGF0aWNQYWdlc1ZpZXciLCJzdGF0ZSIsIndpbmRvdyIsInNjcm9sbFRvIiwicGFyc2VkIiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsInBhdGhuYW1lIiwiZnJvbUFwcCIsImluY2x1ZGVzIiwiZm9yQm9va2luZ1Njcm9sbCIsIm1lbWJlcl90eXBlIiwicGFyc2VJbnQiLCJBYm91dFVzIiwid2hlcmUiLCJoaXN0b3J5IiwicHVzaCIsIm1haW5DbGFzcyIsImhlYWRpbmdDbGFzcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJBU1NFVFNfQkFTRV9VUkwiLCJuYXZpZ2F0ZVRvIiwiQ2FuY2VsUG9saWN5IiwicGFkZGluZ1RvcCIsImxpc3RTdHlsZSIsInBhZGRpbmdMZWZ0IiwiY3Vyc29yIiwiZGlzcGxheSIsIkNhcmVlcnMiLCJjaGFuZ2VIYW5kbGVyIiwiZXZlbnQiLCJrZXkiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiZmlsZVBpY2tlciIsImUiLCJmaWxlcyIsInJlc3VtZSIsIm5hbWUiLCJtb2JpbGUiLCJlbWFpbCIsInByb2ZpbGVfdHlwZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybV9kYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJzdWJtaXRDYXJlZXJQcm9maWxlIiwiZXJyb3IiLCJyZXMiLCJTbmFja0JhciIsInNob3ciLCJwb3MiLCJ0ZXh0Iiwib25TdWJtaXRQcm9maWxlIiwiQ29udGFjdFVzIiwibWVzc2FnZSIsInN1Ym1pdENvbnRhY3RNZXNzYWdlIiwib25TdWJtaXREYXRhIiwiYmluZCIsIkRpc2NsYWltZXIiLCJtYXJnaW5Cb3R0b20iLCJEb2N0b3JzaWdudXAiLCJjaXR5RHJvcGRvd25WaXNpYmxlIiwiZ2V0Q2l0aWVzIiwic2V0Q2l0eSIsImNpdHlOYW1lIiwiY2l0eUlkIiwiY2l0eSIsImNpdHlfbmFtZSIsInV0bV9wYXJhbXMiLCJ1dG1fdGFncyIsInNvdXJjZSIsInNob3dTdWNjZXNzQm94IiwiZG9jdW1lbnQiLCJsb2FkZXIiLCJzY3JpcHQiLCJjcmVhdGVFbGVtZW50IiwidGFnIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzcmMiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImF0dGFjaEV2ZW50Iiwic2lnbnVwRG9jdG9yIiwid2lkdGgiLCJjaXRpZXNOYW1lIiwibWFwIiwiSG93aXRXb3JrcyIsImxpc3RTdHlsZVR5cGUiLCJtYXJnaW5Ub3AiLCJTdGF0aWNQYWdlcyIsIk1lZGlhIiwidmVydGljYWxBbGlnbiIsImJvcmRlciIsIm92ZXJmbG93IiwiUHJpdmFjeSIsInRleHRBbGlnbiIsIlRlcm1zIiwic2VsZWN0ZWQiLCJzY3JvbGxQb3NpdGlvbiIsInZhbCIsImZvclNjcm9sbCIsImdldEVsZW1lbnRCeUlkIiwiZWxlbWVudFRvcCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImVsZW1lbnRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzZXRUYWIiLCJjb250ZXh0VHlwZXMiLCJyb3V0ZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJVU0VSIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJwb3N0Q2FyZWVyRGF0YSIsImNiIiwicG9zdENvbnRhY3REYXRhIiwic2lnbnVwRG9jdG9yRGF0YSIsImZpbHRlclRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O2tCQUNlLGdCQUFlO0FBQUEsUUFBWkEsS0FBWSxRQUFaQSxLQUFZOztBQUM3QixXQUFRO0FBQUE7QUFBQSxVQUFLLDZCQUEwQkEsUUFBTSxrQkFBTixHQUF5QixFQUFuRCxDQUFMO0FBQ087QUFBQTtBQUFBLGNBQUcsV0FBVSxlQUFiLEVBQTZCLE9BQU8sRUFBRUMsT0FBTyxTQUFULEVBQW9CQyxVQUFVLEVBQTlCLEVBQXBDO0FBQUE7QUFBQSxTQURQO0FBRU87QUFBQTtBQUFBLGNBQUssV0FBVSw0QkFBZixFQUE0QyxPQUFPLEVBQUVDLGVBQWUsQ0FBakIsRUFBbkQ7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEo7QUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFGUCxLQUFSO0FBU0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYRDs7Ozs7Ozs7Ozs7O0lBRU1DLE07OztBQUNGLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsK0dBQ1RBLEtBRFM7QUFFbEI7Ozs7aUNBRVE7O0FBRUwsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVcsS0FBS0EsS0FBTCxDQUFXQyxTQUFYLElBQXdCLGdCQUF4QztBQUNJLHVEQUFLLFdBQVUsV0FBZixHQURKO0FBR1EscUJBQUtELEtBQUwsQ0FBV0UsV0FBWCxHQUNJO0FBQUE7QUFBQSxzQkFBRyxXQUFVLGVBQWI7QUFBQTtBQUFBLGlCQURKLEdBQytFO0FBSnZGLGFBREo7QUFTSDs7OztFQWhCZ0JDLGdCQUFNQyxTOztrQkFtQlpMLE07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCZjs7Ozs7O2tCQUVlQSxnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7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OztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3U0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkM7QUFDRjtBQUNWO0FBQ0Y7QUFDTTtBQUNGO0FBQ0o7QUFDRjtBQUNJO0FBQ0Y7QUFDYztBQUNGO0FBQ1Y7QUFDRjtBQUNjO0FBQ0Y7QUFDSjtBQUNGO0FBQ0kiLCJmaWxlIjoiNTQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuZXhwb3J0IGRlZmF1bHQgKHsgaXNWaXAgfSkgPT4ge1xuXHRyZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtgZHNjbG1lci1mdHIgJHtpc1ZpcD8nbWFyZ2luLWJvdHRvbS01NSc6Jyd9YH0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0yMFwiIHN0eWxlPXt7IGNvbG9yOiAnIzhhOGE4YScsIGZvbnRTaXplOiAxMCB9fSA+VGhlIFdlYnNpdGUgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgaW4gY2FzZSBvZiBhIG1lZGljYWwgZW1lcmdlbmN5IGFuZC8gb3IgY3JpdGljYWwgY2FyZSBhbmQgdGhlIHVzZXIgc2hvdWxkIGRpcmVjdGx5IGNvbnRhY3QgaGlzLyBoZXIgbWVkaWNhbCBzZXJ2aWNlIHByb3ZpZGVyIGZvciBQaHlzaWNhbCBFeGFtaW5hdGlvbi4gRG9jcHJpbWUgaXMgc29sZWx5IGEgdGVjaG5vbG9neSBwYXJ0bmVyLjwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBmb290ZXItbmV3LWNvcHlyZ2h0XCIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogNSB9fSA+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRvY3ByaW1lLmNvbSBDb3B5cmlnaHQgJmNvcHk7IDIwMjAuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5BbGwgcmlnaHRzIHJlc2VydmVkLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+RE9DUFJJTUUgVEVDSE5PTE9HSUVTIFBSSVZBVEUgTElNSVRFRDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+Q0lOIDogVTc0OTk5SFIyMDE2UFRDMDY0MzEyPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+KVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIExvYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc1R5cGUgfHwgXCJsb2FkZXJDaXJjdWxhclwifSA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcC1sb2FkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaUZyYW1lUG9wdXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0xMFwiPlJlZGlyZWN0aW5nIHlvdSB0byBQaGFybWVhc3kgd2Vic2l0ZS4uLjwvcD4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyXG4iLCJpbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQWJvdXRVcyBmcm9tICcuL2Fib3V0VXMuanMnXG5pbXBvcnQgQ29udGFjdFVzIGZyb20gJy4vY29udGFjdFVzJ1xuaW1wb3J0IFByaXZhY3kgZnJvbSAnLi9wcml2YWN5J1xuaW1wb3J0IEhvd2l0V29ya3MgZnJvbSAnLi9ob3dpdFdvcmtzJ1xuaW1wb3J0IERpc2NsYWltZXIgZnJvbSAnLi9kaXNjbGFpbWVyJ1xuaW1wb3J0IFRlcm1zIGZyb20gJy4vdGVybXMnXG5pbXBvcnQgQ2FyZWVycyBmcm9tICcuL2NhcmVlcnMnXG5pbXBvcnQgTWVkaWEgZnJvbSAnLi9tZWRpYSdcbmltcG9ydCBEb2N0b3JzaWdudXAgZnJvbSAnLi9kb2N0b3JzaWdudXAnXG5pbXBvcnQgQ2FuY2VsUG9saWN5IGZyb20gJy4vY2FuY2VsUG9saWN5LmpzJ1xuXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvSG9tZS9mb290ZXInXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi8uLi9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9jb21tb25zL0xvYWRlcidcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBTdGF0aWNEaXNjbGFpbWVyIGZyb20gJy4uLy4uL2NvbW1vbnMvSG9tZS9zdGF0aWNEaXNjbGFpbWVyLmpzJ1xuXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuXG5cblxuXG5jbGFzcyBTdGF0aWNQYWdlc1ZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvL2NvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXG4gICAgICAgIGxldCBwYXRobmFtZSA9ICcnXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uICYmIHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWUpIHtcbiAgICAgICAgICAgIHBhdGhuYW1lID0gdGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5mcm9tQXBwID8gJycgOiA8UHJvZmlsZUhlYWRlciAvPlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUgJiYgcGF0aG5hbWUuaW5jbHVkZXMoJ2RvY3RvcnNpZ251cCcpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1oZWFkZXIgZC1ub25lIGQtbGctYmxvY2tcIiAvPlxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZC1sZy1ub25lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwid2FsbGV0LWhlYWRlciBzdGlja3ktaGVhZGVyIGNoYXQtaGVhZGVyXCIgc3R5bGU9e3sgaGVpZ2h0OiA1MCB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBoZWFkZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgaGVhZGVyLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2xlZnQtYXJyb3cuc3ZnXCJ9IGNsYXNzTmFtZT1cImJhY2staWNvbi1vcmFuZ2VcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LmdvKC0xKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTggbG9nby1jb2wgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvZG9jLXByaW1lLWxvZ28ucG5nXCIgc3R5bGU9e3sgd2lkdGg6IDYwIH19IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG5cbiAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17Jy9hYm91dCd9IHJlbmRlcj17KHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8QWJvdXRVcyB7Li4udGhpcy5wcm9wc30gey4uLnByb3BzfSBmcm9tQXBwPXtwYXJzZWQuZnJvbUFwcCA/IHBhcnNlZC5mcm9tQXBwIDogZmFsc2V9IC8+XG4gICAgICAgICAgICAgICAgfX0gLz5cblxuICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPXsnL2NvbnRhY3QnfSByZW5kZXI9eyhwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvbnRhY3RVcyB7Li4udGhpcy5wcm9wc30gey4uLnByb3BzfSBmcm9tQXBwPXtwYXJzZWQuZnJvbUFwcCA/IHBhcnNlZC5mcm9tQXBwIDogZmFsc2V9IC8+XG4gICAgICAgICAgICAgICAgfX0gLz5cblxuICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPXsnL3ByaXZhY3knfSByZW5kZXI9eyhwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFByaXZhY3kgey4uLnRoaXMucHJvcHN9IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICB9fSAvPlxuXG4gICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9eycvaG93aXR3b3Jrcyd9IHJlbmRlcj17KHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8SG93aXRXb3JrcyB7Li4udGhpcy5wcm9wc30gey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgIH19IC8+XG5cbiAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17Jy9kaXNjbGFpbWVyJ30gcmVuZGVyPXsocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxEaXNjbGFpbWVyIHsuLi50aGlzLnByb3BzfSB7Li4ucHJvcHN9IGZyb21BcHA9e3BhcnNlZC5mcm9tQXBwID8gcGFyc2VkLmZyb21BcHAgOiBmYWxzZX0gLz5cbiAgICAgICAgICAgICAgICB9fSAvPlxuXG4gICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9eycvdGVybXMnfSByZW5kZXI9eyhwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFRlcm1zIHsuLi50aGlzLnByb3BzfSB7Li4ucHJvcHN9IGZyb21BcHA9e3BhcnNlZC5mcm9tQXBwID8gcGFyc2VkLmZyb21BcHAgOiBmYWxzZX0gZm9yU2Nyb2xsPXtwYXJzZWQuZm9yQm9va2luZ1Njcm9sbCA/IHBhcnNlZC5mb3JCb29raW5nU2Nyb2xsIDogZmFsc2V9IC8+XG4gICAgICAgICAgICAgICAgfX0gLz5cblxuICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPXsnL2NhcmVlcnMnfSByZW5kZXI9eyhwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENhcmVlcnMgey4uLnRoaXMucHJvcHN9IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICB9fSAvPlxuXG4gICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9eycvbWVkaWEnfSByZW5kZXI9eyhwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPE1lZGlhIHsuLi50aGlzLnByb3BzfSB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgfX0gLz5cblxuICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPXsnL2RvY3RvcnNpZ251cCd9IHJlbmRlcj17KHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8RG9jdG9yc2lnbnVwIHsuLi50aGlzLnByb3BzfSB7Li4ucHJvcHN9IG1lbWJlcl90eXBlPXtwYXJzZWQubWVtYmVyX3R5cGU/cGFyc2VJbnQocGFyc2VkLm1lbWJlcl90eXBlKTonJ30vPlxuICAgICAgICAgICAgICAgIH19IC8+XG5cbiAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17Jy9jYW5jZWxwb2xpY3knfSByZW5kZXI9eyhwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENhbmNlbFBvbGljeSB7Li4udGhpcy5wcm9wc30gey4uLnByb3BzfSBmcm9tQXBwPXtwYXJzZWQuZnJvbUFwcCA/IHBhcnNlZC5mcm9tQXBwIDogZmFsc2V9IC8+XG4gICAgICAgICAgICAgICAgfX0gLz5cblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLmZyb21BcHAgPyA8U3RhdGljRGlzY2xhaW1lciAvPiA6IDxGb290ZXIgLz5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBTdGF0aWNQYWdlc1ZpZXdcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVsbWV0VGFncyBmcm9tICcuLi9IZWxtZXRUYWdzJ1xuXG5jbGFzcyBBYm91dFVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmF2aWdhdGVUbyh3aGVyZSkge1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCh3aGVyZSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBtYWluQ2xhc3NcbiAgICAgICAgbGV0IGhlYWRpbmdDbGFzc1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5mcm9tQXBwKSB7XG4gICAgICAgICAgICBtYWluQ2xhc3MgPSBcImNvbnRhaW5lciBhYm91dC1jb250YWluZXIgYXBwVXJsUGFkZGluZ1wiXG4gICAgICAgICAgICBoZWFkaW5nQ2xhc3MgPSBcImNvbC0xMiB0ZXh0LWNlbnRlciBkLW5vbmUgZC1tZC1ibG9ja1wiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYWluQ2xhc3MgPSAnY29udGFpbmVyIGFib3V0LWNvbnRhaW5lcidcbiAgICAgICAgICAgIGhlYWRpbmdDbGFzcyA9IFwiY29sLTEyIHRleHQtY2VudGVyXCJcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluQ2xhc3N9PlxuICAgICAgICAgICAgICAgICAgICA8SGVsbWV0VGFncyB0YWdzRGF0YT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICgnQWJvdXQgVXMgfCBEb2NwcmltZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICgnRG9jcHJpbWU6IERvY3ByaW1lIGlzIG9uZSBzdG9wIGhlYWx0aCBjYXJlIHNvbHV0aW9uIGZvciBwYXRpZW50cyBhbmQgZG9jdG9ycy4gUGF0aWVudHMgY2FuIGJvb2sgZG9jdG9ycyBvbmxpbmUgYW5kIGRvY3RvcnMgY2FuIG1hbmFnZSBwYXRpZW50cyBvbmxpbmUuJylcbiAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtoZWFkaW5nQ2xhc3N9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBhYm91dC1oZWFkaW5nXCI+QWJvdXQgVXM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmZyb21BcHAgPyA8c3Bhbj5UaGlzIE1vYmlsZSBBcHAgaXMgbWFuYWdlZCBhbmQgb3BlcmF0ZWQgYnkgRG9jcHJpbWUgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZC4gPC9zcGFuPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBhYm91dC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvY3ByaW1lLCBhIFBvbGljeUJhemFhciBncm91cCBjb21wYW55LCBpcyBhIHlvdW5nIG9ubGluZSBtZWRpY2FsIHNlcnZpY2VzIHByb3ZpZGVyLiBTdGFydGVkIHdpdGggYSB0ZWFtIG9mIHlvdW5nLCBleHBlcmllbmNlZCBhbmQgdmlicmFudCBwcm9mZXNzaW9uYWxzLCB0aGUgY29tcGFueSBoYXMgYSBodW1hbml0YXJpYW4gYXBwcm9hY2ggdG93YXJkcyBwcm92aWRpbmcgZWFzeSBhY2Nlc3MgdG8gaGVhbHRoIGNhcmUgc2VydmljZXMuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNCBmZWF0dXJlLWNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZS1pbWctZGl2IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvYWJvdXQtMS5wbmdcIn0gY2xhc3NOYW1lPVwiZmVhdHVyZS1pbWdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZS1kaXYgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGZlYXR1cmUtaGVhZGluZ1wiPkFmZm9yZGFibGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZlYXR1cmUtY29udGVudFwiPldlIG9mZmVyIG91ciBtdWx0aXBsZSBzZXJ2aWNlcyBhdCBhbiBhZmZvcmRhYmxlIHByaWNlLiBXZSBhaW0gYXQgbWFraW5nIGhlYWx0aCBjYXJlIHNlcnZpY2VzIGVhc2lseSBhY2Nlc3NpYmxlIGFuZCBhZmZvcmRhYmxlIHRvIGVuc3VyZSB0aGF0IHBhdGllbnRzIGRvIG5vdCBoZXNpdGF0ZSB3aGlsZSBjb25zdWx0aW5nIGRvY3RvcnMgb25saW5lLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTQgZmVhdHVyZS1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmUtaW1nLWRpdiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Fib3V0LTIucG5nXCJ9IGNsYXNzTmFtZT1cImZlYXR1cmUtaW1nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmUtZGl2IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBmZWF0dXJlLWhlYWRpbmdcIj5TYWZlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmZWF0dXJlLWNvbnRlbnRcIj5XZSB3b3JrIHJvdW5kIHRoZSBjbG9jayB0byBlbnN1cmUgaGlnaGVzdCBsZXZlbHMgb2YgZGF0YSBzZWN1cml0eS4gV2l0aCBvdXIgcGxhdGZvcm0sIHRoZSByZWNvcmRzIG9mIGJvdGgsIHRoZSBwYXRpZW50cyBhbmQgdGhlIGRvY3RvcnMgYXJlIHNhZmUuIE91ciBzZXBhcmF0ZSBpbmZyYXN0cnVjdHVyZSBlbnN1cmVzIHRoYXQgdGhlIHByb3ZpZGVy4oCZcyBkYXRhIGFuZCB0aGUgY29uc3VtZXLigJlzIGRhdGEgYXJlIGlzb2xhdGVkIGZyb20gZWFjaCBvdGhlci48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC00IGZlYXR1cmUtY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlLWltZy1kaXYgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9hYm91dC0zLnBuZ1wifSBjbGFzc05hbWU9XCJmZWF0dXJlLWltZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlLWRpdiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgZmVhdHVyZS1oZWFkaW5nXCI+U3RyYWlnaHQgRm9yd2FyZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmVhdHVyZS1jb250ZW50XCI+VGhlIERvY3ByaW1lIHBsYXRmb3JtIGlzIGVhc3kgdG8gbmF2aWdhdGUgYW5kIGhhcyBhIHN0cmFpZ2h0Zm9yd2FyZCBhcHByb2FjaC4gVGhlIG1pbmltYWxpc3QgZGVzaWduIG9mIHRoZSB3ZWJzaXRlIGVuc3VyZXMgdGhhdCB0aGUgY29uc3VtZXJzIGNhbiBmaW5kIHRoZSBpbmZvcm1hdGlvbiBmb3IgdGhlaXIgcmVmZXJlbmNlIHN3aWZ0bHkgYW5kIGVmZm9ydGxlc3NseS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGFib3V0LWNvbnRlbnQtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGFib3V0LWNvbnRlbnRcIj5Eb2NwcmltZSBpcyBkZWRpY2F0ZWQgdG93YXJkcyB0aGUgd2VsZmFyZSBvZiB0aGUgcGVvcGxlIGFuZCB0byBtYWtlIGEgY2xvc2VseSBrbml0IGNvbW11bml0eSBvZiBkb2N0b3JzIGFuZCBwYXRpZW50cy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGFib3V0LWNvbnRlbnRcIj5Ub2RheSwgdGhlIGF2ZXJhZ2UgbGlmZXN0eWxlIG9mIGEgaHVtYW4gYmVpbmcgaXMgZmFzdC1wYWNlZC4gSW4gdGhpcyBmYXN0LXBhY2VkIGxpZmVzdHlsZSwgcGVvcGxlIGlnbm9yZSB0aGVpciBoZWFsdGggdGhhdCBsZWFkcyB0byBzZXZlcmFsIGhlYWx0aCBjb21wbGljYXRpb25zLiBBdCBEb2NwcmltZSwgd2UgYWltIHRvIGJlIHRoZSBndWlkZSBhbmQgdGhlIGhlbHBpbmcgaGFuZCB0byBlbnN1cmUgYmV0dGVyIGhlYWx0aCBmb3IgZXZlcnlvbmUgYW5kIGhlbHAgdGhlbSBhdCBlYWNoIHN0ZXAgdG93YXJkcyBoZWFsdGggaW1wcm92ZW1lbnQuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBhYm91dC1jb250ZW50XCI+RG9jcHJpbWUgYWltcyBhdCBjb25uZWN0aW5nIHBlb3BsZSBieSBwcm92aWRpbmcgdGhlbSB3aXRoIGV2ZXJ5IHBpZWNlIG9mIGluZm9ybWF0aW9uIHRoZXkgbmVlZCB0byBzZWN1cmUgdGhlbXNlbHZlcyBhbmQgdGhlaXIgZmFtaWx54oCZcyB3ZWxsLWJlaW5nLiBBc3Nlc3NpbmcgaGVhbHRoIGlzc3VlcywgY29uc3VsdGluZyBleHBlcmllbmNlZCBtZWRpY2FsIHByYWN0aXRpb25lcnMgYW5kIHN0b3JpbmcgaGVhbHRoIHJlY29yZHMgYXJlIGZldyBzZXJ2aWNlcyBvZmZlcmVkIGJ5IHRoZSBjb21wYW55LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgYWJvdXQtY29udGVudFwiPk5vdCBvbmx5IGFyZSB3ZSBkZWRpY2F0ZWQgdG8gcHJvdmlkaW5nIGEgYmV0dGVyIGhlYWx0aCB0byBwZW9wbGUsIHdlIGFsc28gZW5zdXJlIHRoYXQgdGhleSBnZXQgZWFzeSBhY2Nlc3MgdG8gY291bnRyeeKAmXMgYmVzdCBkb2N0b3JzIGluIHRoZSBtb3N0IGNvbnZlbmllbnQgYW5kIGFmZm9yZGFibGUgd2F5cy4gT24gb3VyIHdheSB0byBjcmVhdGluZyBhbiBleHBlcmllbmNlIHRydWx5IHByaW1lIGZvciB1c2VycyBhbmQgaGVhbHRoY2FyZSBleHBlcnRzLCB3ZSBvdmVyY29tZSBtdWx0aXR1ZGlub3VzIGNoYWxsZW5nZXMgYWxtb3N0IGV2ZXJ5IGRheS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC00IGFib3V0LXN0ZXBzLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtc3RlcHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWljb24tZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3N0ZXAtY2FsZW5kYXIuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtaGVhZGluZy1kaXYgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBzdGVwLWhlYWRpbmdcIj5Cb29rIEFwcG9pbnRtZW50czwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1jb250ZW50LWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtY2lyY2xlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdGVwLWRhdGEgZnctNTAwXCI+MTAsMDAwKyBWZXJpZmllZCBEb2N0b3JzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1jaXJjbGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN0ZXAtZGF0YSBmdy01MDBcIj5Cb29rIEFwcG9pbnRtZW50cyAyNCo3PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1jaXJjbGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN0ZXAtZGF0YSBmdy01MDBcIj5GaW5kIERvY3RvcnMgRWFzaWx5PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1jaXJjbGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN0ZXAtZGF0YSBmdy01MDBcIj5FZmZpY2llbnQgUGF0aWVudCBBZG1pbmlzdHJhdGlvbjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtY2lyY2xlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdGVwLWRhdGEgZnctNTAwXCI+U3dpZnQgQXBwb2ludG1lbnQgQ29uZmlybWF0aW9uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNCBhYm91dC1zdGVwcy1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LXN0ZXBzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1pY29uLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9zdGVwLWNoYXQuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtaGVhZGluZy1kaXYgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBzdGVwLWhlYWRpbmdcIj5PbmxpbmUgQ2hhdCBDb25zdWx0YXRpb248L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtY29udGVudC1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWNpcmNsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RlcC1kYXRhIGZ3LTUwMFwiPkdldCBEb2NwcmltZSBhcHAgZm9yIHNlYW1sZXNzIG9ubGluZSBjaGF0IGNvbnN1bHRhdGlvbjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtY2lyY2xlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdGVwLWRhdGEgZnctNTAwXCI+TG93IFJlc3BvbnNlIFRpbWU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWNpcmNsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RlcC1kYXRhIGZ3LTUwMFwiPlZlcmlmaWVkIERvY3RvcnMgQXZhaWxhYmxlIGF0IHlvdXIgRGlzcG9zYWw8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWNpcmNsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RlcC1kYXRhIGZ3LTUwMFwiPjEwMCUgQ29uZmlkZW50aWFsIGFuZCBQcml2YXRlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1jaXJjbGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN0ZXAtZGF0YSBmdy01MDBcIj5Pbi1EZW1hbmQgQ29uc3VsdGF0aW9uIEF2YWlsYWJsZSBBbnl0aW1lIGFuZCBBbnl3aGVyZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTQgYWJvdXQtc3RlcHMtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC1zdGVwc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtaWNvbi1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvc3RlcC1wYXJ0bmVyLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWhlYWRpbmctZGl2IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgc3RlcC1oZWFkaW5nXCI+QmVjb21lIGEgUGFydG5lciB3aXRoIERvY3ByaW1lPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWNvbnRlbnQtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1jaXJjbGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN0ZXAtZGF0YSBmdy01MDBcIj5SZWFjaCBOZXcgUGF0aWVudHM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWNpcmNsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RlcC1kYXRhIGZ3LTUwMFwiPk1heGltaXplIHlvdXIgRWFybmluZ3M8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWNpcmNsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RlcC1kYXRhIGZ3LTUwMFwiPktlZXAgVHJhY2sgb2YgUGF0aWVudHMgYW5kIHRoZWlyIEZlZWRiYWNrPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1jaXJjbGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN0ZXAtZGF0YSBmdy01MDBcIj5FZGl0IHlvdXIgUHJvZmlsZSBFZmZvcnRsZXNzbHk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWNpcmNsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RlcC1kYXRhIGZ3LTUwMFwiPkNoYXQgV2l0aCBQYXRpZW50cyB3aXRob3V0IEdpdmluZyB5b3VyIFBlcnNvbmFsIENvbnRhY3QgRGV0YWlsczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgYWJvdXQtY29udGVudC1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgYWJvdXQtY29udGVudFwiPkRvY3ByaW1lIGVuc3VyZXMgdGhhdCB5b3UgZ2V0IHRoZSByaWdodCBzb2x1dGlvbiBhbmQgdHJlYXRtZW50LCBhbmQgdGhhdCBpcyB3aHkgd2UgaGF2ZSBoaXJlZCBjb3VudHJ54oCZcyBiZXN0IGFuZCBtb3N0IGV4cGVyaWVuY2VkIGRvY3RvcnMgd2hvIGFyZSBrbm93bGVkZ2VhYmxlLCBza2lsbGVkIGFuZCB0aGUgYmVzdCBpbiB0aGVpciBhcmVhcyBvZiBleHBlcnRpc2UuIFRoZXkgYXJlIGF2YWlsYWJsZSB0byBzb2x2ZSB5b3VyIGhlYWx0aCByZWxhdGVkIHF1ZXJpZXMgYW5kIHByb3ZpZGUgb24tZGVtYW5kIGhlYWx0aGNhcmUgc29sdXRpb25zLCAyNFg3WDM2NS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGFib3V0LWNvbnRlbnRcIj5BdCBEb2NwcmltZSwgd2UgdW5kZXJzdGFuZCB0aGUgdmFsdWUgb2YgeW91ciB0aW1lIGFuZCB0aGF04oCZcyB3aHkgd2Ugd2FudCB0byBvZmZlciB5b3UgdGhlIGJlc3QgaGVhbHRoY2FyZSByaWdodCBmcm9tIHRoZSBjb21mb3J0IG9mIHlvdXIgaG9tZS4gV2UgcHJvdmlkZSBkb2N0b3JzLCBwaHlzaW90aGVyYXBpc3RzIGFuZCBudXJzZXMgZm9yIGhvbWUgdmlzaXRzIHRvIGVuc3VyZSB0aGF0IHlvdSBkb27igJl0IG5lZWQgdG8gc3RlcCBvdXQgd2hlbiB0aGUgbmVlZCBhcmlzZXMuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBhYm91dC1jb250ZW50XCI+V2UgYWltIHRvIHRhcCB0aGUgbGF0ZXN0IHRlY2hub2xvZ3kgdG8gZmluZCBzb2x1dGlvbnMgdG8gdmFyaW91cyBpc3N1ZXMgaW4gb3JkZXIgdG8gZGlzcnVwdCB0aGUgZ2xvYmFsIGhlYWx0aGNhcmUgZGVsaXZlcnkgc3lzdGVtLiBPdXIgaW5ub3ZhdGl2ZSBoZWFsdGhjYXJlIHNvbHV0aW9ucyBhcmUgYSBzdGVwIHRvd2FyZHMgYnJpZGdpbmcgdGhlIGdhcCBiZXR3ZWVuIGhlYWx0aGNhcmUgZXhwZXJ0cyBhbmQgdGhlIHBhdGllbnRzLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgdGhpcy5wcm9wcy5mcm9tQXBwID8gdGhpcy5uYXZpZ2F0ZVRvKFwiL2NvbnRhY3Q/ZnJvbUFwcD10cnVlXCIpIDogdGhpcy5uYXZpZ2F0ZVRvKFwiL2NvbnRhY3RcIikgfX0gY2xhc3NOYW1lPVwiY29udGFjdC1idG5cIj5Db250YWN0IFVzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dF9tYW5hZ21lbnRfY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aGVhZGluZ0NsYXNzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgYWJvdXQtaGVhZGluZ1wiPkFib3V0IG1hbmFnZW1lbnQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRfbW5nX2NhcmRfY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC1sZy02IG1ybmctYm90dG9tLTIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0X21uZ19jYXJkc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJ0LWltZy10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvYWJ0LWltZy95cy5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnQtdXNyLW5tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+WWFzaGlzaCBEYWhpeWE8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q28tZm91bmRlciAmIENFTywgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UG9saWN5QmF6YWFyIEdyb3VwIG9mIENvbXBhbmllczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5ZYXNoaXNoIERhaGl5YSBpcyB0aGUgQ2hpZWYgRXhlY3V0aXZlIE9mZmljZXIgYW5kIENvLUZvdW5kZXIgb2YgUG9saWN5QmF6YWFyIEdyb3VwIG9mIENvbXBhbmllcy4gSGUgaGFzIGJ1aWx0IFBvbGljeWJhemFhci5jb20gaW50byBhIDMsMDAwLWNyb3JlIHBsdXMgaW5zdXJhbmNlIG1hcmtldHBsYWNlIHdpdGhpbiBhIHNob3J0IHNwYW4gb2YgMTAgeWVhcnMuIFVuZGVyIGhpcyBsZWFkZXJzaGlwLCB0aGUgZ3JvdXAgY29tcGFueSBzdGFydGVkIFBhaXNhQmF6YWFyLmNvbSwgYW4gb25saW5lIGZpbmFuY2lhbCBtYXJrZXRwbGFjZSBmb3IgaW52ZXN0bWVudCBhbmQgbGVuZGluZyBwcm9kdWN0cyBpbiAyMDE0LiAgV2l0aCB0aGUgYmFja2luZyBvZiBhIGhvc3Qgb2YgaW52ZXN0b3JzLCBZYXNoaXNoIGhhcyBub3cgc2V0IGhpcyBzaWdodHMgb24gdHJhbnNmb3JtaW5nIHRoZSBoZWFsdGhjYXJlIGluZHVzdHJ5IG92ZXJhbGwgd2l0aCB0aGUgbGF1bmNoIG9mIERvY3ByaW1lLmNvbS4gQmVmb3JlIHN0YXJ0aW5nIGhpcyBlbnRyZXByZW5ldXJpYWwgam91cm5leSB3aXRoIFBvbGljeUJhemFhci5jb20sIGhlIHdhcyB0aGUgTWFuYWdpbmcgRGlyZWN0b3Igb2YgZWJvb2tlcnMuY29tLCBhIGxlYWRpbmcgcGFuLUV1cm9wZWFuIG9ubGluZSB0cmF2ZWwgZGlzdHJpYnV0b3IsIHdoaWNoIHdhcyBhbHNvIGFuIEZUU0UgMjUwIGNvbXBhbnkgbGlzdGVkIG9uIE5hc2RhcS4gWWFzaGlzaCB3YXMgYWxzbyBhIG1hbmFnZW1lbnQgY29uc3VsdGFudCB3aXRoIEJhaW4gJiBDby4gaW4gdGhlaXIgTG9uZG9uIG9mZmljZS4gWWFzaGlzaCBob2xkcyBhIEJhY2hlbG9y4oCZcyBEZWdyZWUgaW4gRW5naW5lZXJpbmcgZnJvbSBJSVQgRGVsaGksIGEgUG9zdCBHcmFkdWF0ZSBEaXBsb21hIGluIE1hbmFnZW1lbnQgZnJvbSBJSU0gQWhtZWRhYmFkLCBhbmQgYW4gTUJBIGZyb20gSU5TRUFELiBZYXNoaXNoIGxpa2VzIHRvIHNwZW5kIGhpcyBzcGFyZSB0aW1lIG91dGRvb3JzLCBpcyB0aGUgY3VycmVudCBtYXN0ZXJzIG5hdGlvbmFsIGNoYW1waW9uIGluIHN3aW1taW5nIGFuZCBpcyB0aGUgZmlmdGggZmFzdGVzdCBJcm9ubWFuIGZyb20gSW5kaWEgYWNyb3NzIGFsbCBhZ2VzLiA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC1sZy02IG1ybmctYm90dG9tLTIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0X21uZ19jYXJkc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJ0LWltZy10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvYWJ0LWltZy9hbGsucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJ0LXVzci1ubVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkFsb2sgQmFuc2FsPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNvLWZvdW5kZXIgJiBDRk8sIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlBvbGljeUJhemFhciBHcm91cCBvZiBDb21wYW5pZXM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJ0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QWxvayBCYW5zYWwgaXMgdGhlIENvLUZvdW5kZXIgJiBDRk8gb2YgUG9saWN5QmF6YWFyIEdyb3VwIG9mIENvbXBhbmllcyAuIEhlIGhlYWRzIHZhcmlvdXMgZnVuY3Rpb25zIGluY2x1ZGluZyBjb3Jwb3JhdGUgZmluYW5jZSBhbmQgY29udHJvbGxlcnNoaXAsIHRheCwgdHJlYXN1cnksIHN0cmF0ZWdpYyBwbGFubmluZywgYW5kIGFuYWx5dGljcy4gSGUgZmlybWx5IGJlbGlldmVzIHRoYXQgdGhlIHByaW1hcnkgcmVzcG9uc2liaWxpdHkgb2YgYSBDRk8gaXMgdG8gYWNjb21wbGlzaCBidXNpbmVzcyBnb2FscyByYXRoZXIgdGhhbiBqdXN0IGNvbmNlbnRyYXRpbmcgb24gZnVuY3Rpb25hbCBnb2Fscy4gQWNjb3JkaW5nIHRvIGhpbSwgdGhlIHN1Y2Nlc3Mgb2YgYW55IGJ1c2luZXNzIGxpZXMgaW4gd29ya2luZyB3aXRoIGEgdGVhbSB3aXRoIGRpZmZlcmVudCBtaW5kIHNldHMsIGFsbG93aW5nIHRoZW0gdGhlIGZsZXhpYmlsaXR5IGFuZCBmcmVlZG9tIHRvIGV4cGVyaW1lbnQsIGlubm92YXRlIGFuZCBjb250cmlidXRlLiBBbG9r4oCZcyBjb3JlIHN0cmVuZ3RoIGxpZXMgaW4gc3RyYXRlZ2ljIHRoaW5raW5nLCBwcm9jZXNzIGNvbnRyb2wsIGFuZCBleGVjdXRpb24uIFByaW9yIHRvIGpvaW5pbmcgUG9saWN5QmF6YWFyLmNvbSwgQWxvayBoYXMgd29ya2VkIGluIHZhcmlvdXMgY3Jvc3MtZnVuY3Rpb25hbCBsZWFkZXJzaGlwIHJvbGVzIHdpdGggTWFoaW5kcmEgJiBNYWhpbmRyYSwgaUdhdGUgR2xvYmFsIFNvbHV0aW9ucyBhbmQgR0UuIEhlIHdhcyByZWNvZ25pemVkIGFzIG9uZSBvZiB0aGUgdG9wIDEwMCBDRk9zIGluIHRoZSBjb3VudHJ5IGJ5IHRoZSBDRk8gSW5kaWEgTWFnYXppbmUgaW4gMjAxNi4gQWxvayBoYXMgYSBzcGVjaWFsIGludGVyZXN0IGluIHNjaWVuY2UgYW5kIHRlY2hub2xvZ3ksIGVjb25vbWljIGVtcG93ZXJtZW50LCBlZHVjYXRpb24gYW5kIGNpdmlsIHJpZ2h0cy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC1sZy02IG1ybmctYm90dG9tLTIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0X21uZ19jYXJkc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJ0LWltZy10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvYWJ0LWltZy9hc2gucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJ0LXVzci1ubVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkFzaGlzaCBHdXB0YSA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q0VPLMKgRG9jcHJpbWUuY29twqBhbmQgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2hpZWYgVGVjaCBFdmFuZ2VsaXN0LCBQb2xpY3liYXphYXIuY29tIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFzaGlzaCBHdXB0YSBpcyBjdXJyZW50bHkgdGhlIENFTyBvZiBEb2NwcmltZS5jb20gYW5kIGlzIHJlc3BvbnNpYmxlIGZvciBydW5uaW5nIGFsbCBmYWNldHMgb2YgdGhlIGJ1c2luZXNzLiBIZSBpcyBwYXNzaW9uYXRlIGFib3V0IHRoZSBoZWFsdGggaW5kdXN0cnkgYW5kIGluIGhpcyBwcmVzZW50IHBvc2l0aW9uLCBjb21taXR0ZWQgdG8gYnVpbGQgYW4gaW50ZWdyYXRlZCBlY29zeXN0ZW0gdG8gYnJpZGdlIHRoZSBnYXAgYmV0d2VlbiBkb2N0b3JzIGFuZCBwYXRpZW50cy4gIFByaW9yIHRvIHRoaXMsIGhlIHNlcnZlZCBhcyB0aGUgQ2hpZWYgVGVjaG5vbG9neSBPZmZpY2VyIChDVE8pIG9mIFBvbGljeWJhemFhci5jb20gd2hpY2ggaGUgam9pbmVkIGluIDIwMTUuIFdpdGggYW4gb3ZlcmFsbCBleHBlcmllbmNlIG9mIDE2IHllYXJzLCBBc2hpc2ggaGFzIGJlZW4gYXQgYSByZWFsbSBvZiBtYW55IGlubm92YXRpb25zLiBCZWZvcmUgam9pbmluZyB0aGUgcmV2b2x1dGlvbmFyeSBvbmxpbmUgaW5zdXJhbmNlIGNvbXBhbnksIEFzaGlzaCB3YXMgdGhlIFZpY2UtUHJlc2lkZW50IGFuZCBDVE8gYXQgSGVhbHRoS2FydCwgYSBwcmVtaWVyIGUtaGVhbHRoIHN0b3JlLiBIZSBhbHNvIGhhZCBoaXMgb3duIHN0YXJ0LXVwIGNhbGxlZCBDb3Vwb25Wb29kb28uY29tLCB3aGljaCBhaW1lZCBhdCBzaW1wbGlmeWluZyBhIHNob3BwZXLigJlzIGJ1eWluZyBkZWNpc2lvbiBiYXNlZCB1cG9uIHByaWNpbmcuICBIaXMgaW5pdGlhbCBmZXcgam9icyBpbmNsdWRlZCBiZWluZyBhIG1hbmFnZW1lbnQgdHJhaW5lZSB3aXRoIHRoZSBhdXRvbW90aXZlIGRpdmlzaW9uIG9mIElDSSBQYWludHMgYW5kIGxlYXJuaW5nIGFuZCBncm93aW5nIGJ5IGJlaW5nIGludm9sdmVkIGluIG90aGVyIGNyb3NzLWZ1bmN0aW9uYWwgcm9sZXMuIEFwYXJ0IGZyb20gd29ya2luZywgaGUgZW5qb3lzIHRyYXZlbGluZyBhbmQgZXhwbG9yaW5nIG90aGVyIGNvdW50cmllcyBvciBjaXRpZXMuIEEgZ3JhZHVhdGUgaW4gQ2hlbWljYWwgRW5naW5lZXJpbmcgZnJvbSBJSVQgRGVsaGksIEFzaGlzaCBsb3ZlcyBiZWluZyBiZWhpbmQgdGhlIHdoZWVscyBhbmQgZ29pbmcgb24gbG9uZyBkcml2ZXMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgY29sLWxnLTYgbXJuZy1ib3R0b20tMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRfbW5nX2NhcmRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnQtaW1nLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9hYnQtaW1nL2FiaGF5LnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFidC11c3Itbm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5BYmhheSBTaW5nYXZpPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8cD5Dby1mb3VuZGVyICYgPC9wPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNoaWVmIE9wZXJhdGluZyBPZmZpY2VyPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RG9jcHJpbWUuY29tPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFidC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFiaGF5IFNpbmdhdmkgaXMgQ2hpZWYgT3BlcmF0aW5nIE9mZmljZXIgYXQgRG9jcHJpbWUuY29tLiAgSGUgaXMgcmVzcG9uc2libGUgZm9yIGV4ZWN1dGluZyB0aGUgY29tcGFueeKAmXMgYnVzaW5lc3Mgc3RyYXRlZ3ksIGRyaXZpbmcgdGhlIG92ZXJhbGwgZ3Jvd3RoIGFuZCBwZXJmb3JtYW5jZSBvZiBrZXkgYnVzaW5lc3MgdW5pdHMuIEFiaGF5IGJyaW5ncyBpbiBtb3JlIHRoYW4gMTIgeWVhcnMgb2YgbGVhZGVyc2hpcCBleHBlcmllbmNlIGluIHRoZSBoZWFsdGhjYXJlIHNlY3Rvci5cbjxici8+XG48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByaW9yIHRvIGpvaW5pbmcgRG9jcHJpbWUsIEFiaGF5IHdhcyBsZWFkaW5nIGtleSBzdHJhdGVnaWMgaW5pdGlhdGl2ZXMgY292ZXJpbmcgY2xpbmljYWwgb3V0Y29tZXMsIHNlcnZpY2UgZXhjZWxsZW5jZSwgb3BlcmF0aW9uIG9wdGltaXphdGlvbiwgYnVzaW5lc3MgaW5ub3ZhdGlvbiBhbmQgYSB2YXJpZXR5IG9mIGxlYWRlcnNoaXAgcm9sZXMgYXQgTWVkYW50YSBmb3IgNyB5ZWFycy4gSGUgd2FzIGFsc28geW91bmdlc3QgQ0VPIGluIHRoZSBoZWFsdGhjYXJlIGluZHVzdHJ5IHdoaWxlIGhlIHNlcnZlZCBhdCBOYXJheWFuYSBIZWFsdGggZ3JvdXAgYXMgQ0VPIC0gUHJldmVudGl2ZSBIZWFsdGggd2hlcmUgaGUgd2FzIGluc3RydW1lbnRhbCBpbiBoYW5kbGluZyB0aGUgcHJldmVudGl2ZSBoZWFsdGggYW5kIHdlbGxuZXNzIG1hbmFnZW1lbnQgYWNyb3NzIGdyb3VwLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0VXNcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVsbWV0VGFncyBmcm9tICcuLi9IZWxtZXRUYWdzJ1xuXG5jbGFzcyBDYW5jZWxQb2xpY3kgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBtYWluQ2xhc3NcbiAgICAgICAgbGV0IGhlYWRpbmdDbGFzc1xuICAgICAgICBpZih0aGlzLnByb3BzLmZyb21BcHApe1xuICAgICAgICAgICAgbWFpbkNsYXNzID0gXCJjb250YWluZXIgYWJvdXQtY29udGFpbmVyIGFwcFVybFBhZGRpbmdcIlxuICAgICAgICAgICAgaGVhZGluZ0NsYXNzID0gXCJjb2wtMTIgdGV4dC1jZW50ZXIgZC1ub25lIGQtbWQtYmxvY2tcIlxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIG1haW5DbGFzcyA9ICdjb250YWluZXIgYWJvdXQtY29udGFpbmVyJ1xuICAgICAgICAgICAgaGVhZGluZ0NsYXNzID0gJ2NvbC0xMiB0ZXh0LWNlbnRlcidcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e21haW5DbGFzc30+XG4gICAgICAgICAgICAgICAgPEhlbG1ldFRhZ3MgdGFnc0RhdGE9e3tcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICgnQ2FuY2VsIFBvbGljeSB8IGRvY3ByaW1lJyksXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAoJ2RvY3ByaW1lOiBkb2NwcmltZSBpcyBvbmUgc3RvcCBoZWFsdGggY2FyZSBzb2x1dGlvbiBmb3IgcGF0aWVudHMgYW5kIGRvY3RvcnMuIFBhdGllbnRzIGNhbiBib29rIGRvY3RvcnMgb25saW5lIGFuZCBkb2N0b3JzIGNhbiBtYW5hZ2UgcGF0aWVudHMgb25saW5lLicpXG4gICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aGVhZGluZ0NsYXNzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBhYm91dC1oZWFkaW5nXCI+Q2FuY2VsIFBvbGljeTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbC1wb2xpY3ktdGV4dFwiIHN0eWxlPXt7cGFkZGluZ1RvcDogMH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17e2xpc3RTdHlsZTogJ2Rpc2MnLCBwYWRkaW5nTGVmdDogMTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZ3LTUwMCBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvciBhbnkgb25saW5lIHBhaWQgYXBwb2ludG1lbnRzLCB5b3UgY2FuIGNhbmNlbCB5b3VyIHNjaGVkdWxlZCBvciByZS1ib29rZWQgYXBwb2ludG1lbnQgYW5kIGluaXRpYXRlIGltbWVkaWF0ZSByZWZ1bmQgYXQgYW55IHRpbWUuIEFuIGltbWVkaWF0ZSByZWZ1bmQgc2hhbGwgYmUgc3ViamVjdCB0byB0ZXJtcyBhbmQgY29uZGl0aW9ucyBhcyBkZXNjcmliZWQgdW5kZXIgdGhpcyBzZWN0aW9uIG1lbnRpb25lZCBiZWxvdy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZ3LTUwMCBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluIHRoZSBldmVudCwgdGhlIHNlcnZpY2VzIGFyZSBub3QgYXZhaWxlZCBhdCB0aGUgYXBwb2ludGVkIGRhdGUgYW5kIHRpbWUgYW5kIG91ciBzeXN0ZW1zIGRvIG5vdCB2YWxpZGF0ZSB0aGUgVVJOIGdlbmVyYXRlZCBvbiB5b3VyIHJlZ2lzdGVyZWQgbW9iaWxlIG51bWJlciwgd2Ugd2lsbCBhdXRvbWF0aWNhbGx5IGNhbmNlbCB5b3VyIGFwcG9pbnRtZW50IGF0IDEyOjAwIG1pZG5pZ2h0IG9mIG5leHQgZGF0ZSBvZiB5b3VyIGFwcG9pbnRtZW50IGRhdGUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmdy01MDAgbXJiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPY2Nhc2lvbmFsbHksIGFwcG9pbnRtZW50cyBtYXkgYmUgY2FuY2VsbGVkIG9yIHBvc3Rwb25lZCBieSB0aGUgVGhpcmQgUGFydHkgU2VydmljZSBQcm92aWRlci4gU2hvdWxkIHRoaXMgb2NjdXIsIHdlIHdpbGwgYXR0ZW1wdCB0byBjb250YWN0IG9yIGluZm9ybSB5b3UgYW5kIHlvdSBtYXkgcmUtc2NoZWR1bGUgeW91ciBhcHBvaW50bWVudCBhcyBwZXIgeW91ciBjb252ZW5pZW5jZSBvciB2aXNpdCB3d3cuZG9jcHJpbWUuY29tIGZvciBmcmVzaC9yZS1ib29raW5nIG9uIHRoZSBXZWJzaXRlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZnctNTAwIG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsbGF0aW9uIHRocm91Z2ggbWFpbCBvciBjYWxsIGNlbnRlciBpcyBhbGxvd2VkIGZvciBhbGwgdGhlIGJvb2tpbmdzIHVudGlsIHRoZSB0aW1lIG9mIGFwcG9pbnRtZW50IG9yIDEyOjAwIG1pZG5pZ2h0IG9mIG5leHQgZGF0ZSBvZiB5b3VyIGFwcG9pbnRtZW50IGRhdGUuIEluIHN1Y2ggY2FzZXMsIHdlIHdpbGwgaW5pdGlhdGUgYW4gaW1tZWRpYXRlIHJlZnVuZCBvZiB5b3VyIG1vbmV5IGFzIHBlciB0aGUgcHJvY2VzcyBkZWZpbmVkIHVuZGVyIFJlZnVuZCwgUmVzY2hlZHVsaW5nIGFuZCBDYW5jZWxsYXRpb24gc2VjdGlvbiB1bmRlciB0aGUgRW5kIFVzZXIgQWdyZWVtZW50LiA8dSBzdHlsZT17e2NvbG9yOiBgdmFyKC0tdGV4dC0tcHJpbWFyeS0tY29sb3IpYCxjdXJzb3I6J3BvaW50ZXInLGRpc3BsYXk6J2lubGluZS1ibG9jayd9fSBvbkNsaWNrPXsoKSA9PnRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHRoaXMucHJvcHMuZnJvbUFwcD8nL3Rlcm1zP2ZvckJvb2tpbmdTY3JvbGw9dHJ1ZSZmcm9tQXBwPXRydWUnOicvdGVybXM/Zm9yQm9va2luZ1Njcm9sbD10cnVlJyl9PmNsaWNrIGhlcmU8L3U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDYW5jZWxQb2xpY3lcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBIZWxtZXRUYWdzIGZyb20gJy4uL0hlbG1ldFRhZ3MnXG5cbmNsYXNzIENhcmVlcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRyZXN1bWU6IG51bGwsXG5cdFx0XHRuYW1lOiBcIlwiLFxuXHRcdFx0bW9iaWxlOiBcIlwiLFxuXHRcdFx0ZW1haWw6IFwiXCIsXG5cdFx0XHRwcm9maWxlX3R5cGU6IFwiXCJcblx0XHR9XG5cdH1cblxuXHRjaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBrZXkpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFtrZXldOiBldmVudC50YXJnZXQudmFsdWVcblx0XHR9KTtcblx0fVxuXG5cdGZpbGVQaWNrZXIgPSAoZSkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0J3Jlc3VtZSc6IGUudGFyZ2V0LmZpbGVzWzBdXG5cdFx0fSk7XG5cdH1cblxuXHRvblN1Ym1pdFByb2ZpbGUoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdGxldCBmb3JtX2RhdGEgPSBuZXcgRm9ybURhdGEoKVxuXHRcdGZvcm1fZGF0YS5hcHBlbmQoXCJyZXN1bWVcIiwgdGhpcy5zdGF0ZS5yZXN1bWUsIFwicmVzdW1lLnBkZlwiKVxuXHRcdGZvcm1fZGF0YS5hcHBlbmQoJ25hbWUnLCB0aGlzLnN0YXRlLm5hbWUpXG5cdFx0Zm9ybV9kYXRhLmFwcGVuZCgnbW9iaWxlJywgdGhpcy5zdGF0ZS5tb2JpbGUpXG5cdFx0Zm9ybV9kYXRhLmFwcGVuZCgnZW1haWwnLCB0aGlzLnN0YXRlLmVtYWlsKVxuXHRcdGZvcm1fZGF0YS5hcHBlbmQoJ3Byb2ZpbGVfdHlwZScsIHRoaXMuc3RhdGUucHJvZmlsZV90eXBlKVxuXHRcdHRoaXMucHJvcHMuc3VibWl0Q2FyZWVyUHJvZmlsZShmb3JtX2RhdGEsIChlcnJvciwgcmVzKSA9PiB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0cmVzdW1lOiBudWxsLFxuXHRcdFx0XHRuYW1lOiBcIlwiLFxuXHRcdFx0XHRtb2JpbGU6IFwiXCIsXG5cdFx0XHRcdGVtYWlsOiBcIlwiLFxuXHRcdFx0XHRwcm9maWxlX3R5cGU6IFwiXCJcblx0XHRcdH0pO1xuXHRcdFx0U25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIllvdXIgam9iIGFwcGxpY2F0aW9uIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHkuXCIgfSk7XG5cdFx0fSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxIZWxtZXRUYWdzIHRhZ3NEYXRhPXt7XG5cdFx0XHRcdFx0dGl0bGU6ICgnQ2FyZWVyIGF0IGRvY3ByaW1lJyksXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IChcIkZpbmUgY2FyZWVyIG9wcG9ydHVuaXR5IGF0IGRvY3ByaW1lLCBJbmRpYSdzIG9uZSBzdG9wIGhlYWx0aCBjYXJlIHNvbHV0aW9uLlwiKVxuXHRcdFx0XHR9fSAvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxhcHRvcC1pbWctZGl2IGFic29sdXRlLWltYWdlc1wiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2FyZWVyL2xhcHRvcC5wbmdcIn0vPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYWdlcy1pbWctZGl2IGFic29sdXRlLWltYWdlc1wiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2FyZWVyL3BhZ2VzLnBuZ1wifSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2FyZWVycy1jb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgaGlyaW5nLWNvbFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhpcmluZy1oZWFkaW5nLWRpdlwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2FyZWVyL2hpcmluZy5wbmdcIn0gY2xhc3NOYW1lPVwiaGlyaW5nLWltZ1wiIC8+XG5cdFx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cImhpcmluZy1oZWFkaW5nXCI+V2UgQXJlIEhpcmluZyAhPC9oMT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGlyaW5nLWRlc2MtZGl2XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cImhpcmluZy1kZXNjXCI+V2UgYXJlIGhpcmluZyBmb3IgbXVsdGlwbGUgcG9zaXRpb25zLjwvaDM+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NhcmVlci9hcnJvdy5zdmdcIn0gY2xhc3NOYW1lPVwiY2FyZWVycy1hcnJvdy1pbWcgYWJzb2x1dGUtaW1hZ2VzXCIgLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgaGlyaW5nLWNvbFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhpcmluZy1mb3JtLWRpdlwiPlxuXHRcdFx0XHRcdFx0XHRcdDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gdGhpcy5vblN1Ym1pdFByb2ZpbGUoZSl9ID5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0aGlzLnN0YXRlLnByb2ZpbGVfdHlwZX0gb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5jaGFuZ2VIYW5kbGVyKGV2ZW50LCAncHJvZmlsZV90eXBlJyl9IHJlcXVpcmVkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgRnVuY3Rpb248L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMVwiPlByb2R1Y3Q8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMlwiPlRlY2hub2xvZ3k8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiM1wiPlNhbGVzPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjRcIj5Db250ZW50PC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjVcIj5NYXJrZXRpbmc8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiNlwiPlFDPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjdcIj5TZXJ2aWNlICZhbXA7IFN1cHBvcnQ8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiOFwiPkRvY3RvcnM8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIllvdXIgTmFtZVwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuY2hhbmdlSGFuZGxlcihldmVudCwgJ25hbWUnKX0gcmVxdWlyZWQgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJtb2JpbGVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBtaW49ezUwMDAwMDAwMDB9IG1heD17OTk5OTk5OTk5OX0gcGxhY2Vob2xkZXI9XCJNb2JpbGUgTnVtYmVyXCIgdmFsdWU9e3RoaXMuc3RhdGUubW9iaWxlfSBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLmNoYW5nZUhhbmRsZXIoZXZlbnQsICdtb2JpbGUnKX0gcmVxdWlyZWQgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfSBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLmNoYW5nZUhhbmRsZXIoZXZlbnQsICdlbWFpbCcpfSByZXF1aXJlZCAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVwbG9hZC1yZXN1bWUtZGl2XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJyZXN1bWUtbGFiZWxcIiBodG1sRm9yPVwidXBsb2FkLXJlc3VtZVwiPlVwbG9hZCBSZXN1bWU8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmVlcnMtdXBsb2FkLWJ0blwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2FyZWVyL3VwbG9hZC5zdmdcIn0gY2xhc3NOYW1lPVwidXBsb2FkLWljb25cIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImNhcmVlcnMtdXBsb2FkLXRleHRcIj5VcGxvYWQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmVlcnMtaW5wdXQtZmlsZVwiPjxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJyZXN1bWVcIiBpZD1cInVwbG9hZC1yZXN1bWVcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuZmlsZVBpY2tlcihlKX0gcmVxdWlyZWQgLz48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJlZXJzLXN1Ym1pdC1idG4tZGl2XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBjYXJlZXJzLXNlbmQtYnRuXCI+U3VibWl0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvZmZlZS1pbWctZGl2IGFic29sdXRlLWltYWdlc1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2FyZWVyL2NvZmZlZS5wbmdcIn0gY2xhc3NOYW1lPVwiY29mZmVlLWltZ1wiIC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBhYnNvbHV0ZS1pbWFnZXNcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBjYXJlZXItaW1nLXJvd1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYWctaW1nIGNhcmVlci1pbWctZGl2XCI+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2FyZWVyL2JhZy5wbmdcIn0gY2xhc3NOYW1lPVwiY2FyZWVyLWltZ1wiIC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic3BlY3MtaW1nIGNhcmVlci1pbWctZGl2XCI+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2FyZWVyL3NwZWNzLnBuZ1wifSBjbGFzc05hbWU9XCJjYXJlZXItaW1nXCIgLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwZW4taW1nIGNhcmVlci1pbWctZGl2XCI+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2FyZWVyL3Blbi5wbmdcIn0gY2xhc3NOYW1lPVwiY2FyZWVyLWltZ1wiIC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3YtaW1nIGNhcmVlci1pbWctZGl2XCI+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2FyZWVyL2N2LnBuZ1wifSBjbGFzc05hbWU9XCJjYXJlZXItaW1nXCIgLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJleGFtLWltZyBjYXJlZXItaW1nLWRpdlwiPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NhcmVlci9leGFtLnBuZ1wifSBjbGFzc05hbWU9XCJjYXJlZXItaW1nXCIgLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDYXJlZXJzXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5pbXBvcnQgSGVsbWV0VGFncyBmcm9tICcuLi9IZWxtZXRUYWdzJ1xuXG5jbGFzcyBDb250YWN0VXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgICAgIG1vYmlsZTogXCJcIixcbiAgICAgICAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlSGFuZGxlciA9IChldmVudCwga2V5KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW2tleV06IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblN1Ym1pdERhdGEoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMucHJvcHMuc3VibWl0Q29udGFjdE1lc3NhZ2UodGhpcy5zdGF0ZSwgKGVycm9yLCByZXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9iaWxlOiBcIlwiLFxuICAgICAgICAgICAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIkNvbnRhY3QgUmVxdWVzdCB0YWtlbiBzdWNjZXNzZnVsbHkuXCIgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IG1haW5DbGFzc1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5mcm9tQXBwKSB7XG4gICAgICAgICAgICBtYWluQ2xhc3MgPSBcImNvbnRhaW5lciBhYm91dC1jb250YWluZXIgYXBwVXJsUGFkZGluZ1wiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYWluQ2xhc3MgPSAnY29udGFpbmVyIGFib3V0LWNvbnRhaW5lcidcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e21haW5DbGFzc30+XG4gICAgICAgICAgICAgICAgPEhlbG1ldFRhZ3MgdGFnc0RhdGE9e3tcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICgnQ29udGFjdCBVcyB8IGRvY3ByaW1lJyksXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAoJ0NvbnRhY3QgVXM6IENvbnRhY3QgZG9jcHJpbWUgZm9yIHF1ZXJ5IHJlbGF0ZWQgdG8gYm9va2luZywgc2lnbnVwIGFuZCBtb3JlLicpXG4gICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGFib3V0LWhlYWRpbmdcIiBzdHlsZT17eyBmb250U2l6ZTogMjAgfX0gPkNvbnRhY3QgVXM8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPkZlZWwgbGlrZSBjb250YWN0aW5nIHVzPyBTdWJtaXQgeW91ciBxdWVyaWVzIGhlcmUgYW5kIHdlIHdpbGwgZ2V0IGJhY2sgdG8geW91IGFzIHNvb24gYXMgcG9zc2libGUuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJncHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtbG9jYXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxvdCBOby4gMTE5LCBTZWN0b3ItNDQsIEd1cnVncmFtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gMTIyMDAxLCBIYXJ5YW5hIChJbmRpYSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93LWRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWxvY2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvbG9jYXRpb24ucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBtcnQtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXRpdGxlXCIgc3R5bGU9e3sgZm9udFNpemU6IDE2IH19ID5TZW5kIFVzIGEgTWVzc2FnZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0RGF0YS5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWZpZWxkc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9eyhlKSA9PiB7IHRoaXMuY2hhbmdlSGFuZGxlcihlLCAnbmFtZScpIH19IHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtZmllbGRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfSBvbkNoYW5nZT17KGUpID0+IHsgdGhpcy5jaGFuZ2VIYW5kbGVyKGUsICdlbWFpbCcpIH19IHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtZmllbGRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiTW9iaWxlIE51bWJlclwiIG1heD17OTk5OTk5OTk5OX0gbWluPXs1MDAwMDAwMDAwfSB2YWx1ZT17dGhpcy5zdGF0ZS5tb2JpbGV9IG9uQ2hhbmdlPXsoZSkgPT4geyB0aGlzLmNoYW5nZUhhbmRsZXIoZSwgJ21vYmlsZScpIH19IHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtZmllbGRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCIgcm93cz17M30gdmFsdWU9e3RoaXMuc3RhdGUubWVzc2FnZX0gb25DaGFuZ2U9eyhlKSA9PiB7IHRoaXMuY2hhbmdlSGFuZGxlcihlLCAnbWVzc2FnZScpIH19IHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIHN1Ym1pdC1idG4gbXJ0LTIwXCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgb2Zmc2V0LW1kLTEgY29sLW1kLTUgbXJ0LTIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcmItMTBcIj5Zb3UgY2FuIGFsc28gY29udGFjdCB1cyB2aWEgOjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJiLTEwXCI+PHNwYW4gY2xhc3NOYW1lPVwiZnctNzAwXCI+RS1tYWlsIDo8L3NwYW4+IGN1c3RvbWVyY2FyZUBkb2NwcmltZS5jb208L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+PHNwYW4gY2xhc3NOYW1lPVwiZnctNzAwXCI+UGhvbmUgOjwvc3Bhbj4gMTgwMC0xMjMtOTQxOTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0VXNcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVsbWV0VGFncyBmcm9tICcuLi9IZWxtZXRUYWdzJ1xuXG5jbGFzcyBEaXNjbGFpbWVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbWFpbkNsYXNzXG4gICAgICAgIGxldCBoZWFkaW5nQ2xhc3NcbiAgICAgICAgaWYodGhpcy5wcm9wcy5mcm9tQXBwKXtcbiAgICAgICAgICAgIG1haW5DbGFzcyA9IFwiY29udGFpbmVyIGFib3V0LWNvbnRhaW5lciBhcHBVcmxQYWRkaW5nXCJcbiAgICAgICAgICAgIGhlYWRpbmdDbGFzcyA9IFwiY29sLTEyIHRleHQtY2VudGVyIGQtbm9uZSBkLW1kLWJsb2NrXCJcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBtYWluQ2xhc3MgPSAnY29udGFpbmVyIGFib3V0LWNvbnRhaW5lcidcbiAgICAgICAgICAgIGhlYWRpbmdDbGFzcyA9IFwiY29sLTEyIHRleHQtY2VudGVyXCJcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e21haW5DbGFzc30+XG4gICAgICAgICAgICAgICAgPEhlbG1ldFRhZ3MgdGFnc0RhdGE9e3tcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICgnRGlzY2xhaW1lciB8IGRvY3ByaW1lJyksXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAoJ0Rpc2NsYWltZXI6IFJlYWQgRGlzY2xhaW1lciBkb2N1bWVudCBvZiBkb2NwcmltZS4nKVxuICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2hlYWRpbmdDbGFzc30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgYWJvdXQtaGVhZGluZ1wiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX0+RGlzY2xhaW1lcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcHJpdmFjeS1kZXNjLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGluZm9ybWF0aW9uIGNvbnRhaW5lZCBvbiBEb2NwcmltZSBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIHdlYnNpdGUgd3d3LmRvY3ByaW1lLmNvbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICjigJxXZWJzaXRl4oCdKSBpcyBzb2xlbHkgcHJvdmlkZWQgZm9yIGluZm9ybWF0aW9uYWwgcHVycG9zZXMgb25seSBhbmQgaXMgbm90IG1lYW50IHRvIHN1YnN0aXR1dGUgZm9yIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkdmljZSBwcm92aWRlZCBieSB5b3VyIHBlcnNvbmFsIGRvY3RvciBhbmQvb3Igb3RoZXIgcGVyc29uKHMpIHNwZWNpYWxpemluZyBpbiBoZWFsdGhjYXJlL21lZGljYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJlLiBJbmZvcm1hdGlvbiBhbmQgc3RhdGVtZW50cyByZWdhcmRpbmcgdmFyaW91cyB0ZXN0cyBvZmZlcmVkIGJ5IGxhYnMvaG9zcGl0YWxzIG9yIGNvbnN1bHRhbmN5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3JhbXMsIHRyZWF0bWVudHMsIGlzIHNvbGVseSBmb3IgZ2VuZXJhbCByZWFkaW5nIGFuZCBpcyBhIGNvbXBpbGF0aW9uIGZyb20gb3BlbiBzb3VyY2UgdGhhdCB3YXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGUgdG8gdXMgYW5kL29yIHRoZSBpbmZvcm1hdGlvbiBzdXBwbGllZCB0byB1cyBmcm9tIHRoaXJkIHBhcnR5IGxhYnMvaG9zcGl0YWxzL2RvY3RvcnMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQW55Y29uc3VsdGF0aW9uIGFuZCB2YXJpb3VzIHRlc3QocykgYXJlIGludGVuZGVkIGZvciBnZW5lcmFsIHB1cnBvc2Ugb25seSBhbmQgYXJlIG5vdCBtZWFudCB0byBiZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZWQgaW4gZW1lcmdlbmNpZXMvc2VyaW91cyBpbGxuZXNzZXMgcmVxdWlyaW5nIHBoeXNpY2FsL2ZhY2UgdG8gZmFjZSBjb25zdWx0YXRpb24uIEluIGNhc2Ugb2YgYW55XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVnbGlnZW5jZSBvbiB0aGUgcGFydCBvZiB0aGUgVXNlciBvZiB3ZWJzaXRlIGluIGFjdGluZyBvbiB0aGUgc2FtZSBhbmQgdGhlIGNvbmRpdGlvbiBvZiB0aGUgVXNlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGVyaW9yYXRlcywgRG9jcHJpbWUgc2hhbGwgbm90IGJlIGxpYWJsZSBmb3IgYW55IGNvbnNlcXVlbmNlcyBhcmlzaW5nIG91dCBvZiwgaW4gcmVsYXRpb24gb3IgaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9uLCBvciBhcyBhIHJlc3VsdCBvZiB0aGUgc2FtZS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFueSBpbnRlcmFjdGlvbnMgYW5kIGFzc29jaWF0ZWQgaXNzdWVzIHdpdGggdGhlIGxhYnMvaG9zcGl0YWxzL2RvY3RvcnMgb24gdGhlIFdlYnNpdGUsIGlzIHN0cmljdGx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmV0d2VlbiBVc2VyIGFuZCB0aGUgbGFicy9ob3NwaXRhbHMvZG9jdG9ycy4gVXNlciBzaGFsbCBub3QgaG9sZCBEb2NwcmltZSByZXNwb25zaWJsZSBmb3IgYW55IGFuZCBhbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNoIGludGVyYWN0aW9ucyBhbmQgYXNzb2NpYXRlZCBpc3N1ZXMuIElmIHRoZSBVc2VyIGRlY2lkZXMgdG8gZW5nYWdlIHdpdGggYSBsYWIvaG9zcGl0YWwvZG9jdG9yIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZSBkaWFnbm9zdGljIHNlcnZpY2VzLCB0aGUgVXNlciB3aWxsIGRvIHNvIGF0IGhpcy9oZXIgb3duIHJpc2suXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCZSBpdCBub3RlZCwgdGhlIGluZm9ybWF0aW9uIHByb3ZpZGVkIGhlcmUgaXMgbm90IG1lZGljYWwgYWR2aWNlIGhlbmNlIGlzIG5vdCBpbnRlbmRlZCB0byByZXBsYWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGF0aW9uIHdpdGggYSBtZWRpY2FsIHByYWN0aXRpb25lciwgYW5kIHNob3VsZCBub3QgYmUgdHJlYXRlZCBhcyBhbiBhbHRlcm5hdGl2ZSB0byBtZWRpY2FsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhZ25vc2lzIG9yIHRyZWF0bWVudCBmcm9tIHlvdXIgZG9jdG9yLCBvciBhbnkgb3RoZXIgbGljZW5zZWQgaGVhbHRoY2FyZSBwcm9mZXNzaW9uYWwuIERvY3ByaW1lIGlzIG5vdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgbWVkaWNhbCBzZXJ2aWNlIHByb3ZpZGVyIG9yIGEgY2xpbmljYWwgZXN0YWJsaXNobWVudCwgbm9yIGl0IGlzIGludm9sdmVkIGluIHByb3ZpZGluZyBhbnkgaGVhbHRoY2FyZSBvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGljYWwgYWR2aWNlIG9yIGRpYWdub3NpcyBzZXJ2aWNlLCBpdCBzaGFsbCBoZW5jZSBub3QgYmUgcmVzcG9uc2libGUgYW5kIG93bnMgbm8gbGlhYmlsaXR5IHRvIFVzZXJzIGZvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFueSBvdXRjb21lIGZyb20gdGhlIGNvbnN1bHRhdGlvbiBhbmQgb3IgdGhlIHZhcmlvdXMgdGVzdCBvZmZlcmVkIGJ5IGxhYihzKXMgb24gdGhlIHdlYnNpdGUuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEbyBub3Qgc2VsZi1kaWFnbm9zZSBvciB0cmVhdCB5b3Vyc2VsZiBiYXNlZCBvbiB0aGUgaW5mb3JtYXRpb24gcHJvdmlkZWQgb24gdGhpcyBXZWJzaXRlLiBXZSBmdXJ0aGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXJ0LCBwbGVhc2Ugc2VlayBtZWRpY2FsIGFkdmljZSBhbmQgZG8gbm90IGRpc3JlZ2FyZCBtZWRpY2FsIGFkdmljZSwgb3IgZGlzY29udGludWUgbWVkaWNhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudCBieSByZWx5aW5nIHVwb24gdGhlIGluZm9ybWF0aW9uIHByb3ZpZGVkIG9uIHRoaXMgV2Vic2l0ZS4gRXh0ZXJuYWwgbGlua3MgdG8gdmlkZW9zIGFuZCBvdGhlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYnNpdGVzIHByb3ZpZGVkIGhlcmUgYXJlIHB1cmVseSBmb3IgaW5mb3JtYXRpb24gcHVycG9zZXMgYW5kIERvY3ByaW1lIGRvZXMgbm90IHdhcnJhbnQgb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWFyYW50ZWUgdGhlIGFjY3VyYWN5LCBnZW51aW5lbmVzcywgcmVsaWFiaWxpdHkgb2Ygc3VjaCBsaW5rcy93ZWJzaXRlcy4gV2UgZG8gbm90IGd1YXJhbnRlZSB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3JyZWN0bmVzcyBvZiB0aGUgaW5mb3JtYXRpb24sIHBsZWFzZSBleGVyY2lzZSBkaXNjcmV0aW9uIHdoaWxlIGFwcGx5aW5nIHRoZSBpbmZvcm1hdGlvbiB0byB1c2UuIFRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZm9ybWF0aW9uIHByb3ZpZGVkIGhlcmV1bmRlciBpcyBub3QgaW50ZW5kZWQgdG8gYmUgYSBzdWJzdGl0dXRlIGZvciBnZXR0aW5nIGluIHRvdWNoIHdpdGggZW1lcmdlbmN5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhbHRoY2FyZS4gSWYgeW91IChvciB0aGUgcGVyc29uIHlvdSBpbnRlbmQgdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiB0bykgYXJlIGZhY2luZyBhIG1lZGljYWwgZW1lcmdlbmN5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsZWFzZSBjb250YWN0IGFuIGFtYnVsYW5jZSBzZXJ2aWNlIG9yIGhvc3BpdGFsIGRpcmVjdGx5LlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjIG1ydC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Q29weXJpZ2h0IDIwMjAuIGRvY3ByaW1lLmNvbS4gQWxsIHJpZ2h0cyByZXNlcnZlZC48L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgRGlzY2xhaW1lclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuXG5jbGFzcyBEb2N0b3JzaWdudXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRuYW1lOiBcIlwiLFxuXHRcdFx0bW9iaWxlOiBcIlwiLFxuXHRcdFx0ZW1haWw6IFwiXCIsXG5cdFx0XHRjaXR5OiBcIlwiLFxuXHRcdFx0bWVtYmVyX3R5cGU6IHRoaXMucHJvcHMubWVtYmVyX3R5cGUgPyB0aGlzLnByb3BzLm1lbWJlcl90eXBlIDogJycsXG5cdFx0XHRjaXR5RHJvcGRvd25WaXNpYmxlOiBmYWxzZSxcblx0XHRcdGNpdHlfbmFtZTogXCJcIixcblx0XHRcdHV0bV9wYXJhbXM6IHByb3BzLnV0bV90YWdzIHx8IHt9LFxuXHRcdFx0c291cmNlOiAnQ29uc3VtZXInLFxuXHRcdFx0c2hvd1N1Y2Nlc3NCb3g6IGZhbHNlXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuXHRcdGlmICh0aGlzLnN0YXRlLnV0bV9wYXJhbXMgIT0gcHJvcHMudXRtX3RhZ3MpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyB1dG1fcGFyYW1zOiBwcm9wcy51dG1fdGFncyB9KVxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93U3VjY2Vzc0JveDogZmFsc2UgfSk7XG5cblx0XHRpZiAod2luZG93KSB7XG5cdFx0XHQoZnVuY3Rpb24gKHdpbmRvdywgZG9jdW1lbnQpIHtcblxuXHRcdFx0XHR2YXIgbG9hZGVyID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiksIHRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpWzBdO1xuXG5cdFx0XHRcdFx0c2NyaXB0LnNyYyA9IFwiaHR0cHM6Ly93d3cuYmFqYWpmaW5zZXJ2LmluL3NpdGVzL2JhamFqL3BzdHAvanMvRG9jUHJpbWVleHRlcm5hbHdpZGdldC5qc1wiO1xuXG5cdFx0XHRcdFx0dGFnLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNjcmlwdCwgdGFnKTtcblxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyID8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGxvYWRlciwgZmFsc2UpIDogd2luZG93LmF0dGFjaEV2ZW50KFwib25sb2FkXCIsIGxvYWRlcik7XG5cblx0XHRcdH0pKHdpbmRvdywgZG9jdW1lbnQpO1xuXHRcdH1cblx0fVxuXG5cdGNoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIGtleSkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0W2tleV06IGV2ZW50LnRhcmdldC52YWx1ZVxuXHRcdH0pO1xuXG5cdFx0aWYgKGtleSA9PT0gJ2NpdHknKSB7XG5cdFx0XHRpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09PSBcIlwiKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBjaXR5RHJvcGRvd25WaXNpYmxlOiBmYWxzZSB9KTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgY2l0eURyb3Bkb3duVmlzaWJsZTogdHJ1ZSB9KTtcblx0XHRcdFx0dGhpcy5wcm9wcy5nZXRDaXRpZXMoZXZlbnQudGFyZ2V0LnZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRzZXRDaXR5ID0gKGNpdHlOYW1lLCBjaXR5SWQpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGNpdHk6IGNpdHlOYW1lLFxuXHRcdFx0Y2l0eV9uYW1lOiBjaXR5SWQsXG5cdFx0XHRjaXR5RHJvcGRvd25WaXNpYmxlOiBmYWxzZVxuXHRcdH0pO1xuXHR9XG5cblx0b25TdWJtaXREYXRhKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5wcm9wcy5zaWdudXBEb2N0b3IodGhpcy5zdGF0ZSwgKGVycm9yLCByZXMpID0+IHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRuYW1lOiBcIlwiLFxuXHRcdFx0XHRtb2JpbGU6IFwiXCIsXG5cdFx0XHRcdGVtYWlsOiBcIlwiLFxuXHRcdFx0XHRjaXR5OiBcIlwiLFxuXHRcdFx0XHRtZW1iZXJfdHlwZTogXCJcIixcblx0XHRcdFx0Y2l0eV9uYW1lOiBcIlwiLFxuXHRcdFx0XHRzaG93U3VjY2Vzc0JveDogdHJ1ZVxuXHRcdFx0fSk7XG5cdFx0XHRTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiU2lnbiBVcCB3YXMgc3VjY2Vzc2Z1bC5cIiB9KTtcblx0XHR9KTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHQ8ZGl2IGlkPVwibXlXaWRnZXRcIj48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzdWItaGVhZGVyIGQtbm9uZSBkLWxnLWJsb2NrXCI+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGFib3V0LWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUuc2hvd1N1Y2Nlc3NCb3ggP1xuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInN1Ym1pdC1hbGVydCBhbGVydC1zdWNjZXNzXCIgcm9sZT1cImFsZXJ0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzdHJvbmc+VGhhbmsgeW91IDwvc3Ryb25nPmZvciBjaG9vc2luZyA8YSBocmVmPVwiL1wiIG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+ZG9jcHJpbWUuY29tPC9hPi4gT3VyIHRlYW0gd2lsbCBnZXQgaW4gdG91Y2ggd2l0aCB5b3Ugc2hvcnRseS5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PiA6ICcnXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBkc3AtbWFpbi1pbmZvLWRpdlwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRzcC1waG9uZS1pbWctZGl2XCI+XG5cdFx0XHRcdFx0XHRcdFx0ey8qPGltZyBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vc3RhdGljL3dlYi9pbWFnZXMvcGhvbmVfZG9jLmMxZmU4NjQ5NzExZi5wbmdcIiBjbGFzc05hbWU9XCJkc3AtcGhvbmUtaW1nXCIgLz4qL31cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2RvYy1zaWdudXAucG5nXCJ9IHN0eWxlPXt7IHdpZHRoOiAzMjAgfX0gY2xhc3NOYW1lPVwiZHNwLXBob25lLWltZ1wiIC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRzcC1pbWctaW5mby1kaXZcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRzcC1sb2dvLWRpdlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vc3RhdGljL3dlYi9pbWFnZXMvbG9nby45ZWExMTY2NTdhNjAucG5nXCIgY2xhc3NOYW1lPVwiZHNwLWxvZ29cIiBzdHlsZT17eyB3aWR0aDogMTYwIH19IC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPVwiY29taW5nLXNvb24tZGl2XCI+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY29taW5nLXNvb24tdGV4dFwiPkNPTUlORyBTT09OPC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj4gKi99XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkc3AtZGV0YWlsLXRleHQtZGl2IG1ydC0yMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZHNwLWRldGFpbC10ZXh0XCI+QmVjb21lIG91ciBwYXJ0bmVyICZhbXA7IGhlbHAgdXMgc2VydmUgbWlsbGlvbnMgb2YgcGF0aWVudHMgYWNyb3NzIEluZGlhPC9wPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxmb3JtIGNsYXNzTmFtZT1cImRvYy1sYWItc2dudXAtY29udFwiIG9uU3VibWl0PXsoZSkgPT4gdGhpcy5vblN1Ym1pdERhdGEoZSl9IGF1dG9Db21wbGV0ZT1cIm9mZlwiIGF1dG9Db3JyZWN0PVwib2ZmXCIgc3BlbGxDaGVjaz1cIm9mZlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPVwiZHNwLXNpZ251cC1kaXYgbXJ0LTIwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJkc3Atc2lnbnVwLWxhYmVsXCI+U2lnblVwIGFzPC9wPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PiAqL31cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWw+U2lnblVwIGFzPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNlbGVjdCBuYW1lPVwibWVtYmVyX3R5cGVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dGhpcy5zdGF0ZS5tZW1iZXJfdHlwZX0gcmVxdWlyZWQgaWQ9XCJkc3Atc2VsZWN0LXByb2Zlc3Npb25cIiBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLmNoYW5nZUhhbmRsZXIoZXZlbnQsICdtZW1iZXJfdHlwZScpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0PC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT17MX0+RG9jdG9yPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT17Mn0+RGlhZ25vc3RpYyBDZW50ZXI8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPXszfT5Ib3NwaXRhbC9DbGluaWM8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWw+TmFtZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgbWF4TGVuZ3RoPXsyNTV9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHJlcXVpcmVkIGlkPVwiZHNwLW5hbWVcIiB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLmNoYW5nZUhhbmRsZXIoZXZlbnQsICduYW1lJyl9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWw+TW9iaWxlIE5vOjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cIm1vYmlsZVwiIG1heD17OTk5OTk5OTk5OX0gaWQ9XCJkc3AtbW9iaWxlXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcmVxdWlyZWQgbWluPXs1MDAwMDAwMDAwfSB2YWx1ZT17dGhpcy5zdGF0ZS5tb2JpbGV9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuY2hhbmdlSGFuZGxlcihldmVudCwgJ21vYmlsZScpfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWw+Q2l0eTo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImN0eS1ybHR2XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNpdHlfbmFtZVwiIG1heExlbmd0aD17MjU1fSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiByZXF1aXJlZCBpZD1cImRzcC1jaXR5XCIgdmFsdWU9e3RoaXMuc3RhdGUuY2l0eX0gb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5jaGFuZ2VIYW5kbGVyKGV2ZW50LCAnY2l0eScpfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUuY2l0eURyb3Bkb3duVmlzaWJsZSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZHNwLWNpdHktZHJvcGRvd25cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiZHNwLWNpdHktbGlzdFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmNpdGllc05hbWUubWFwKGNpdHkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8bGkgb25DbGljaz17KCkgPT4gdGhpcy5zZXRDaXR5KGNpdHkubmFtZSwgY2l0eS52YWx1ZSl9IGNsYXNzTmFtZT1cImRzcC1jaXR5LWxpc3QtaXRlbVwiIGtleT17Y2l0eS52YWx1ZX0+e2NpdHkubmFtZX08L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PiA6IFwiXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsPkVtYWlsOjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBwYXR0ZXJuPVwiW2EtejAtOS5fJSstXStAW2EtejAtOS4tXStcXC5bYS16XXsyLDN9JFwiIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiByZXF1aXJlZCBtYXhMZW5ndGg9ezI1NH0gaWQ9XCJkc3AtZW1haWxcIiBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLmNoYW5nZUhhbmRsZXIoZXZlbnQsICdlbWFpbCcpfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgZHNwLXNlbmQtYnRuXCI+U3VibWl0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBEb2N0b3JzaWdudXAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlbG1ldFRhZ3MgZnJvbSAnLi4vSGVsbWV0VGFncydcblxuY2xhc3MgSG93aXRXb3JrcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgYWJvdXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPEhlbG1ldFRhZ3MgdGFnc0RhdGE9e3tcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICgnSG93IGRvY3ByaW1lIFdvcmtzIHwgZG9jcHJpbWUnKSxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICgnaG93IGRvZXMgZG9jcHJpbWUgd29ya3MgZm9yIHRoZSBwYXRpZW50cyBhbmQgZG9jdG9ycy4nKVxuICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBhYm91dC1oZWFkaW5nXCI+SG93IGl0IFdvcmtzPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBhYm91dC1jb250ZW50XCI+ZG9jcHJpbWUuY29tIGFpbXMgdG8gcmVkZWZpbmUgaG93IEluZGlhbnMgc2VlayBoZWFsdGhjYXJlIHNlcnZpY2VzLiBJdCBjb25uZWN0cyBwYXRpZW50cyB3aXRoIG1lZGljYWwgY29uc3VsdGFudHMgaW4gcmVhbCB0aW1lIGFuZCBicmlkZ2VzIHRoZSBnYXAgYmV0d2VlbiBuZWVkIGFuZCBmdWxmaWxtZW50IHVzaW5nIHN0YXRlLW9mLXRoZS1hcnQgdGVjaG5vbG9neSBhbmQgYSByb2J1c3Qgb2ZmbGluZSBuZXR3b3JrLiBJdCBhbHNvIGZhY2lsaXRhdGVzIGJvb2tpbmcgb2YgZG9jdG9yIGFwcG9pbnRtZW50cyBhbmQgbGFiIHRlc3RzIGF0IGRpc2NvdW50ZWQgcmF0ZXMuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGFib3V0LWNvbnRlbnRcIj5PdXIgS2V5IFNlcnZpY2VzIGFyZTo8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHdvcmtpbmctcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29ya2luZy1jb250ZW50LWRpdiBjb2wtMTIgY29sLWxnLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jdG9yLWNvbnN1bHRhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29ya2luZy1jb3VudCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIj4xPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uc3VsdGF0aW9uLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+RnJlZSBmb3IgTGlmZS1Eb2N0b3IgY29uc3VsdGF0aW9uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY3RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3sgbGlzdFN0eWxlVHlwZTogJ2Rpc2MnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZnctNTAwXCI+RnJlZSBtZWRpY2FsIGNvbnN1bHRhdGlvbiBvdmVyIGNoYXQgYW5kIHBob25lIGZyb20gZXhwZXJpZW5jZWQgbWVkaWNhbCBjb25zdWx0YW50czwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmdy01MDBcIj5JbnN0YW50IGFuZCByZWFsLXRpbWUgaW50ZXJhY3Rpb24gd2l0aCBtZWRpY2FsIGNvbnN1bHRhbnRzIHRvIGhlbHAgaWRlbnRpZnkgdGhlIHJvb3QgY2F1c2Ugb2YgdGhlIHByb2JsZW08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZnctNTAwXCI+VXNlcnMgY2FuIGFub255bW91c2x5LCBvciBvdGhlcndpc2UsIGNvbW11bmljYXRlIHdpdGggZG9jdG9ycyB3aXRoIHZhcmlvdXMgYXJlYXMgb2YgZXhwZXJ0aXNlIGRpcmVjdGx5IGZyb20gdGhlaXIgc21hcnRwaG9uZXMgb3IgZGVza3RvcHM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgZC1ub25lIGQtbGctYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY29uc3VsdGF0aW9uLWltYWdlXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvZG9jdG9yQ29uc2x1dGF0aW9uLnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB3b3JraW5nLXJvdyBsYWJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JraW5nLWNvbnRlbnQtZGl2IGNvbC0xMiBjb2wtbGctOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2N0b3ItY29uc3VsdGF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JraW5nLWNvdW50IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPjI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25zdWx0YXRpb24tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIj5Eb2N0b3IgU2VhcmNoIGFuZCBPbmxpbmUgQXBwb2ludG1lbnQgQm9va2luZzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2N0ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7IGxpc3RTdHlsZVR5cGU6ICdkaXNjJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZ3LTUwMFwiPlNlYXJjaCB0aGUgYmVzdCBkb2N0b3JzIG5lYXJieSB5b3VyIGFyZWEgYW5kIGJvb2sgeW91ciBuZXh0IGRvY3RvciB2aXNpdCBjb252ZW5pZW50bHkgdGhyb3VnaCB1czwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmdy01MDBcIj5BdmFpbCBkaXNjb3VudCB1cHRvIDUwJSBvbiBib29raW5nIGRvY3RvciBzZXJ2aWNlczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmdy01MDBcIj4xNDAwMCtkb2N0b3JzIGZyb20gcmVwdXRlZCBhbmQgbGVhZGluZyBjbGluaWNzIGFuZCBob3NwaXRhbHMgb24gYm9hcmQgdG8gcHJvdmlkZSBiZXN0IGhlYWx0aGNhcmUgc2VydmljZXM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgZC1ub25lIGQtbGctYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibGFiLWltYWdlXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcGhvbmUucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHdvcmtpbmctcm93IGxhYlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmtpbmctY29udGVudC1kaXYgY29sLTEyIGNvbC1sZy04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY3Rvci1jb25zdWx0YXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmtpbmctY291bnQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+MzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnN1bHRhdGlvbi10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPlNlYXJjaCBhbmQgQm9vayBMYWIgVGVzdHMgYXQgRGlzY291bnRlZCBSYXRlczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2N0ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7IGxpc3RTdHlsZVR5cGU6ICdkaXNjJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZ3LTUwMFwiPlNlYXJjaCB0aGUgYmVzdCBkaWFnbm9zdGljIGxhYiBuZWFyYnkgeW91ciBhcmVhPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZ3LTUwMFwiPkF2YWlsIGRpc2NvdW50IHVwdG8gNjAlIG9uIGxhYiB0ZXN0czwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmdy01MDBcIj5Db21wcmVoZW5zaXZlIG5ldHdvcmsgb2YgcmVwdXRlZCA0MDAwKyBkaWFnbm9zdGljIGxhYnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZnctNTAwXCI+RGV0YWlsZWQgaW5mb3JtYXRpb24gYWJvdXQgcHJvY2VkdXJlcyBvZiB0aGUgdGVzdHMsIHByaWNlcywgYW5kIHJlbGV2YW50IHByZXBhcmF0aW9ucyBhcmUgZWFzaWx5IGFjY2Vzc2libGUgb24gdGhlIHBsYXRmb3JtPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZ3LTUwMFwiPkhvbWUgY29sbGVjdGlvbiBmYWNpbGl0eSBhdmFpbGFibGU8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgZC1ub25lIGQtbGctYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY29uc3VsdGF0aW9uLWltYWdlXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvc3RheWluZ2hlYWx0aHkucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHdvcmtpbmctcm93IGxhYlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmtpbmctY29udGVudC1kaXYgY29sLTEyIGNvbC1sZy04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY3Rvci1jb25zdWx0YXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmtpbmctY291bnQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+NDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnN1bHRhdGlvbi10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPkhlYWx0aCBmZWVkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY3RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3sgbGlzdFN0eWxlVHlwZTogJ2Rpc2MnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZnctNTAwXCI+SW1wb3J0YW50IGZhY3RzIGFuZCBrbm93bGVkZ2UgYWJvdXQgdmFyaW91cyBkaXNlYXNlcyBhbmQgbWVkaWNpbmVzLCBhbmQgaG93IHRvIG1hbmFnZSB0aGUgY29uZGl0aW9uPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZ3LTUwMFwiPkluZm9ybWF0aW9uIG9uIHVzZWZ1bCBsaWZlc3R5bGUgY2hhbmdlcyBmb3Igb3ZlcmFsbCB3ZWxsLWJlaW5nPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGxhYlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmtpbmctY29udGVudC1kaXYgY29sLTEyIGNvbC1sZy04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC14bFwiPk91ciBVcGNvbWluZyBTZXJ2aWNlcyA6PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB3b3JraW5nLXJvdyBsYWJcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IDQwIH19ID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JraW5nLWNvbnRlbnQtZGl2IGNvbC0xMiBjb2wtbGctOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2N0b3ItY29uc3VsdGF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JraW5nLWNvdW50IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPjE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25zdWx0YXRpb24tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIj5TdWJzY3JpcHRpb24gYmFzZWQgT1BEIHByb2R1Y3Q8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17eyBsaXN0U3R5bGVUeXBlOiAnZGlzYycgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmdy01MDBcIj5VbmxpbWl0ZWQgY29uc3VsdGF0aW9ucyBhbmQgZGlhZ25vc3RpYyB0ZXN0IHRvIG1ha2UgcmVndWxhciBPUEQgdmlzaXRzIGNvbnZlbmllbnQsIGFjY2Vzc2libGUsIGFuZCBhZmZvcmRhYmxlPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZ3LTUwMFwiPkVhc2Ugb2YgY2FzaGxlc3MgdHJhbnNhY3Rpb25zIGZvciBPUEQgc2VydmljZXM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZnctNTAwXCI+T25saW5lIGFwcG9pbnRtZW50IGJvb2tpbmc8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgd29ya2luZy1yb3cgbGFiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29ya2luZy1jb250ZW50LWRpdiBjb2wtMTIgY29sLWxnLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jdG9yLWNvbnN1bHRhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29ya2luZy1jb3VudCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIj4yPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uc3VsdGF0aW9uLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+ZVBoYXJtYWN5PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY3RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3sgbGlzdFN0eWxlVHlwZTogJ2Rpc2MnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZnctNTAwXCI+Q29tcHJlaGVuc2l2ZSBuZXR3b3JrIG9mIHBoYXJtYWNpZXM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZnctNTAwXCI+RG9vcnN0ZXAgZGVsaXZlcnkgb2YgbWVkaWNpbmVzIGF0IGRpc2NvdW50ZWQgcmF0ZXM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgSG93aXRXb3Jrc1xuIiwiaW1wb3J0IFN0YXRpY1BhZ2VzIGZyb20gJy4vU3RhdGljUGFnZXMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRpY1BhZ2VzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWxtZXRUYWdzIGZyb20gJy4uL0hlbG1ldFRhZ3MnXG5cbmNsYXNzIE1lZGlhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG1lZGlhLWNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8SGVsbWV0VGFncyB0YWdzRGF0YT17e1xuXHRcdFx0XHRcdHRpdGxlOiAoJ01lZGlhIENvdmVyYWdlcyBBbmQgUHJlc3MgUmVsZWFzZXMgfCBkb2NwcmltZScpLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiAoJ1JlYWQgYWJvdXQgbWVkaWEgY292ZXJhZ2VzLCBwcmVzcyByZWxlYXNlcyBhbmQgbmV3cyByZWxhdGVkIHRvIGRvY3ByaW1lLicpXG5cdFx0XHRcdH19IC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IG1lZGlhLXJvd1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1sZy0zXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLW1lZGlhLXN0aWNreS1kaXZcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZWRpYS1saXN0LWRpdiBkLW5vbmUgZC1sZy1ibG9ja1wiPlxuXHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJtZWRpYS1saXN0LW9wdGlvbnNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWVkaWEtbGlzdC1vcHRpb25zLWl0ZW0gbWVkaWEtc2VsZWN0ZWQtb3B0aW9uXCI+QWxsIE1lZGlhPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdHsvKiA8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzPVwibWVkaWEtbGlzdC1vcHRpb25zLWl0ZW1cIj5OZXdzIGZyb20gTWVkaWE8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzcz1cIm1lZGlhLWxpc3Qtb3B0aW9ucy1pdGVtXCI+UHJlc3MgUmVsZWFzZXM8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzcz1cIm1lZGlhLWxpc3Qtb3B0aW9ucy1pdGVtXCI+VFYgQ29tbWVyY2lhbHM8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzcz1cIm1lZGlhLWxpc3Qtb3B0aW9ucy1pdGVtXCI+TmV3cyBpbiBHZW5lcmFsczwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+ICovfVxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWNvbnRhY3QtZGl2IGQtbm9uZSBkLWxnLWJsb2NrXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZWRpYS1jb250YWN0LWxhYmVsLWRpdlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWVkaWEtY29udGFjdC1sYWJlbFwiPkNvbnRhY3QgVXM8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZWRpYS1jb250YWN0LWl0ZW1zLWRpdlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZWRpYS1jb250YWN0LWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZWRpYS1jb250YWN0LXN1Yml0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL21lZGlhL2VtYWlsLWljb24uc3ZnXCJ9IHN0eWxlPXt7IHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnIH19IGNsYXNzTmFtZT1cIm1lZGlhLWNvbnRhY3QtaWNvblwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWNvbnRhY3Qtc3ViaXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1lZGlhLWNvbnRhY3QtdGV4dFwiPm1lZGlhQGRvY3ByaW1lLmNvbTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtY29udGFjdC1pdGVtIG1lZGlhLWxvY2F0aW9uLWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZWRpYS1jb250YWN0LXN1Yml0ZW0gbWVkaWEtbG9jYXRpb24tc3ViaXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbWVkaWEvbWVkaWEtbG9jLnN2Z1wifSBjbGFzc05hbWU9XCJtZWRpYS1jb250YWN0LWljb25cIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZWRpYS1jb250YWN0LXN1Yml0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtZWRpYS1jb250YWN0LXRleHRcIj5QbG90IG5vPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1lZGlhLWNvbnRhY3QtdGV4dFwiPjExOSwgU2VjdG9yIDQ0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1lZGlhLWNvbnRhY3QtdGV4dFwiPkd1cnVncmFtIC0gMTIyMDAxPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1sZy02XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWRpdi1oZWFkXCI+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbWVkaWEvbmV3c3BhcGVyLnBuZ1wifSAvPlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5QcmVzcyBSZWxlYXNlczwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZWRpYS1kaXYtY2FyZFwiPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtZWRpYS1jYXJkLWhlYWRpbmdcIj5Qb2xpY3liYXphYXIuY29tIHRvIGZvcmF5IGludG8gaGVhbHRoY2FyZSBhbmQgdGVjaCBzZXJ2aWNlczwvcD5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWVkaWEtY2FyZC1kYXRlXCI+MzAgTWFyY2gsIDIwMTg8L3A+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1lZGlhLWNhcmQtY29udGVudFwiPlBvbGljeWJhemFhci5jb20sIEluZGlhJ3MgbGFyZ2VzdCBpbnN1cmFuY2Ugd2Vic2l0ZSBhbmQgY29tcGFyaXNvbiBwb3J0YWwsIGlzIHBsYW5uaW5nIHRvIGZvcmF5IGludG8gdGhlIGhlYWx0aGNhcmUgdGVjaG5vbG9neSBhbmQgc2VydmljZXMgc3BhY2U8L3A+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1lZGlhLWNhcmQtY29udGVudFwiPlRoZSBuZXcgcGxhdGZvcm0gd2lsbCBwcm92aWRlIGNvbnN1bWVycyB3aXRoIGVhc3ksIG9ubGluZSBhbmQgZnJlZSBhY2Nlc3MgdG8gUG9saWN5QmF6YWFyJ3MgZW1wYW5lbGxlZCB0b3Atbm90Y2ggZG9jdG9ycyBhbmQgbWVkaWNhbCBjb25zdWx0YW50cy5UbyBiZWdpbiB3aXRoLCB0aGUgY29tcGFueSBpbnRlbmRzIHRvIHBhcnRuZXIgd2l0aCAxMDAgaG9zcGl0YWxzIGFuZCAyMCwwMDAgZG9jdG9ycywgZGlhZ25vc3RpYyBjZW50cmVzLCBhbmQgY2xpbmljcyBieSB0aGUgZW5kIG9mIE1hcmNoIDIwMTkuVGhlIGhlYWx0aGNhcmUgdmVydGljYWwgYWxzbyBwbGFucyB0byBvZmZlciBhIGh1Z2UgYXJyYXkgb2YgaGVhbHRoY2FyZSBzZXJ2aWNlcywgd2hpY2ggaW5jbHVkZXMgaW4taG9zcGl0YWwgY29uY2llcmdlIHNlcnZpY2VzIGZvciBpdHMgaGVhbHRoIGluc3VyYW5jZSBjdXN0b21lcnMuQnkgZG9pbmcgdGhpcywgUG9saWN5YmF6YWFyLmNvbSB3YW50cyB0byBiZSB3aXRoIGl0cyBjdXN0b21lcnMgYXQgdGhlIG1vbWVudCBvZiB0cnV0aCwgd2hpY2ggaXMgYXQgdGhlIHRpbWUgb2YgY2xhaW1zLlxuXHRcdFx0XHRcdFx0XHQgIFwiT3VyIGZvcmF5IGludG8gdGhlIGhlYWx0aGNhcmUgc2VydmljZXMgc3BhY2UgaXMgaW4gc3luYyB3aXRoIHRoZSB2aXNpb24gb2YgZXhwYW5kaW5nIHRoZSBzb2NpYWwgc2VjdXJpdHkgbmV0IG9mIEluZGlhLiBXaXRoIHRoaXMgdmVudHVyZSwgd2Ugc2VlayB0byBmdWxmaWxsIHRoZSBuZWVkIG9mIHByb3ZpZGluZyBxdWFsaXR5IGFuZCBhZmZvcmRhYmxlIGhlYWx0aGNhcmUgb2YgdGhlIGJ1cmdlb25pbmcgcG9wdWxhdGlvbiBhdCBsYXJnZSBieSBjb25uZWN0aW5nIHRoZSBjb25zdW1lcnMgd2l0aCBvdXIgaW4taG91c2UgbWVkaWNhbCBwcmFjdGl0aW9uZXJzLiBUaGUgbmV3IHBvcnRhbCB3aWxsIGZhY2lsaXRhdGUgdGhlIGNyZWF0aW9uIG9mIGFuIGluY2x1c2l2ZSBoZWFsdGhjYXJlIHN5c3RlbSwgd2hpY2ggd2lsbCBldmVudHVhbGx5IG9mZmVyIGN1c3RvbWlzZWQgb3B0aW9ucyBmb3IgaW4tcGF0aWVudCBkZXBhcnRtZW50IGluc3VyYW5jZSBiYXNlZCBvbiBkZXRhaWxlZCBhbmFseXNpcyB1bmRlcnRha2VuIGFmdGVyIHN0dWR5aW5nIGNvbnN1bWVyIGhlYWx0aGNhcmUgaGFiaXRzIGFuZCBwYXRpZW50J3MgaW50ZXJhY3Rpb25zIHdpdGggdGhlIGRvY3RvcnMsXCIgc2FpZCBZYXNoaXNoIERhaGl5YSwgY28tZm91bmRlciBhbmQgQ0VPLCBQb2xpY3liYXphYXIuY29tLkluIHRoZSBsb25nIHJ1biwgUG9saWN5QmF6YWFyLmNvbSB3YW50cyB0byBvZmZlciBpdHMgY3VzdG9tZXJzIGEgYmV0dGVyIGFuZCBwZXJzb25hbGlzZWQgY2xhaW0gYW5kIGluLWhvc3BpdGFsIGV4cGVyaWVuY2UuUG9saWN5YmF6YWFyIGlzIGFsc28gZ29pbmcgdG8gd29yayB3aXRoIGluc3VyZXJzIHRvIGNyZWF0ZSBhIG5ldyBjYXRlZ29yeSBvZiBoZWFsdGggaW5zdXJhbmNlIGZvciBPdXQtcGF0aWVudCBleHBlbnNlcyAoT1BEKSBhbmQgcHJvdmlkZSBmcmVlIG9ubGluZSBtZWRpY2FsIGNvbnN1bHRhdGlvbiB0byBjb25zdW1lcnMgb3ZlciBwaG9uZSBhbmQgY2hhdC5cblx0XHRcdFx0XHRcdFx0ICBQb2xpY3liYXphYXIuY29tIGlzIGluIGRpc2N1c3Npb25zIHdpdGggaW5zdXJhbmNlIGNvbXBhbmllcyB0byBvZmZlciBhIGZpcnN0IG9mIGl0cyBraW5kIE9QRCBpbnN1cmFuY2UgcHJvZHVjdC5cbiAgICAgICAgICAgICAgICBUaGUgY29tcGFueSBhaW1zIHRvIG9mZmVyIDUgbWlsbGlvbiBPUEQgY29uc3VsdGF0aW9ucyBieSBuZXh0IEZZLjwvcD5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZWRpYS1pY29ucy1kaXZcIj5cblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cDovL3d3dy5pbmRpYS5jb20vbmV3cy9hZ2VuY2llcy9wb2xpY3liYXphYXItY29tLXRvLWZvcmF5LWludG8taGVhbHRoY2FyZS10ZWNoLXNlcnZpY2Utc3BhY2UtMzEwODczOS9cIiByZWw9XCJub2ZvbGxvd1wiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvbWVkaWEvaW5kLWJsd2gucG5nXCIgb25tb3VzZW92ZXI9XCJ0aGlzLnNyYz0nL2Fzc2V0cy9pbWcvbWVkaWEvaW5kLWNvbG9yLnBuZydcIiBvbm1vdXNlb3V0PVwidGhpcy5zcmM9Jy9hc3NldHMvaW1nL21lZGlhL2luZC1ibHdoLnBuZydcIiAvPjwvYT5cblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cDovL3d3dy5hYnBsaXZlLmluL2J1c2luZXNzL3BvbGljeWJhemFhci1jb20tdG8tZm9yYXktaW50by1oZWFsdGhjYXJlLWFuZC10ZWNoLXNlcnZpY2VzLTY3Njg2NFwiIHJlbD1cIm5vZm9sbG93XCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGltZyBzcmM9XCIvYXNzZXRzL2ltZy9tZWRpYS9hYnAtYmx3aC5wbmdcIiBvbm1vdXNlb3Zlcj1cInRoaXMuc3JjPScvYXNzZXRzL2ltZy9tZWRpYS9hYnAtY29sb3IucG5nJ1wiIG9ubW91c2VvdXQ9XCJ0aGlzLnNyYz0nL2Fzc2V0cy9pbWcvbWVkaWEvYWJwLWJsd2gucG5nJ1wiIC8+PC9hPlxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL2hlYWx0aC5lY29ub21pY3RpbWVzLmluZGlhdGltZXMuY29tL25ld3MvaGVhbHRoLWl0L3BvbGljeWJhemFhci1jb20tdG8tZm9yYXktaW50by1oZWFsdGhjYXJlLXRlY2gvNjM1Nzc5ODNcIiByZWw9XCJub2ZvbGxvd1wiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvbWVkaWEvZXQtYmx3aC5wbmdcIiBvbm1vdXNlb3Zlcj1cInRoaXMuc3JjPScvYXNzZXRzL2ltZy9tZWRpYS9ldC1jb2xvci5wbmcnXCIgb25tb3VzZW91dD1cInRoaXMuc3JjPScvYXNzZXRzL2ltZy9tZWRpYS9ldC1ibHdoLnBuZydcIiAvPjwvYT5cblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cub3V0bG9va2luZGlhLmNvbS9uZXdzc2Nyb2xsL3BvbGljeWJhemFhcmNvbS10by1mb3JheS1pbnRvLWhlYWx0aGNhcmUtdGVjaC1zZXJ2aWNlLXNwYWNlLzEzMjkxODFcIiByZWw9XCJub2ZvbGxvd1wiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvbWVkaWEvb3V0LWJsd2gucG5nXCIgb25tb3VzZW92ZXI9XCJ0aGlzLnNyYz0nL2Fzc2V0cy9pbWcvbWVkaWEvb3V0LWNvbG9yLnBuZydcIiBvbm1vdXNlb3V0PVwidGhpcy5zcmM9Jy9hc3NldHMvaW1nL21lZGlhL291dC1ibHdoLnBuZydcIiAvPjwvYT5cblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cuZGVjY2FuY2hyb25pY2xlLmNvbS9idXNpbmVzcy9jb21wYW5pZXMvMDIwNDE4L3BvbGljeWJhemFhcmNvbS10by1mb3JheS1pbnRvLWhlYWx0aGNhcmUtdGVjaG5vbG9neS5odG1sXCIgcmVsPVwibm9mb2xsb3dcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIHNyYz1cIi9hc3NldHMvaW1nL21lZGlhL2RjLWJsd2gucG5nXCIgb25tb3VzZW92ZXI9XCJ0aGlzLnNyYz0nL2Fzc2V0cy9pbWcvbWVkaWEvZGMtY29sb3IucG5nJ1wiIG9ubW91c2VvdXQ9XCJ0aGlzLnNyYz0nL2Fzc2V0cy9pbWcvbWVkaWEvZGMtYmx3aC5wbmcnXCIgLz48L2E+XG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3LmdhZGdldHNub3cuY29tL3RlY2gtbmV3cy9wb2xpY3liYXphYXItdG8tZW50ZXItaGVhbHRoY2FyZS10ZWNoLWFuZC1zZXJ2aWNlcy1zcGFjZS9hcnRpY2xlc2hvdy82MzI2NTc5OC5jbXNcIiByZWw9XCJub2ZvbGxvd1wiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvbWVkaWEvZ24tYmx3aC5wbmdcIiBvbm1vdXNlb3Zlcj1cInRoaXMuc3JjPScvYXNzZXRzL2ltZy9tZWRpYS9nbi1jb2xvci5wbmcnXCIgb25tb3VzZW91dD1cInRoaXMuc3JjPScvYXNzZXRzL2ltZy9tZWRpYS9nbi1ibHdoLnBuZydcIiAvPjwvYT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtZGl2LWNhcmRcIj5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWVkaWEtY2FyZC1oZWFkaW5nXCI+TmV3IHZlbnR1cmUgcHJvbW90ZWQgdG8gb2ZmZXIgZnJlZSBvbmxpbmUgJmFtcDsgb3ZlciBwaG9uZSBtZWRpY2FsIGNvbnN1bHRhdGlvbnM8L3A+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1lZGlhLWNhcmQtZGF0ZVwiPjEzIEp1bmUsIDIwMTg8L3A+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1lZGlhLWNhcmQtY29udGVudCBjb250ZW50LXNob3duXCI+WWFzaGlzaCBEYWhpeWEsIENvLWZvdW5kZXIgJmFtcDsgQ0VPLCBQb2xpY3lCYXphYXIgR3JvdXAgb2YgQ29tcGFuaWVzIHNhaWQ6IFwiV2Ugd2lsbCBiZSBidWlsZGluZyBhIHRlYW0gb2YgY2VydGlmaWVkIGFuZCBxdWFsaXR5IG1lZGljYWwgcHJvZmVzc2lvbmFscyB0byBnaXZlIGZyZWUgb25saW5lIGNvbnN1bHRhdGlvbnMgdG8gY3VzdG9tZXJzLiBUaGlzIHNoYWxsIGJlIHN1cHBvcnRlZCBieSBhIHJvYnVzdCBvZmZsaW5lIG5ldHdvcms8L3A+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1lZGlhLWNhcmQtY29udGVudCBjb250ZW50LWhpZGRlblwiPkFJIHdpbGwgcGxheSBhIGtleSByb2xlIGluIGhlbHBpbmcgdXMgYnVpbGQgdGhpcyBpbiBzY2FsZSBhbmQgZWZmaWNpZW5jeS5FVGVjaEFjZXMgTWFya2V0aW5nICZhbXA7IENvbnN1bHRpbmcgUHZ0LiAoRVRlY2hBY2Vz4oCdKSwgd2hpY2ggb3ducyBJbmRpYeKAmXMgbGVhZGluZyBpbnN1cnRlY2ggYnJhbmQsIFBvbGljeUJhemFhci5jb20o4oCcUG9saWN5QmF6YWFy4oCdKSBhbmQgSW5kaWHigJlzIGxlYWRpbmcgbGVuZGluZyBtYXJrZXRwbGFjZSwgUGFpc2FCYXphYXIuY29tICjigJxQYWlzYUJhemFhcuKAnSksIGhhcyBmbG9hdGVkIGFub3RoZXIgZmFybSBgZG9jcHJpbWUnIGZvciBmb3JheWluZyBpbnRvIHRoZSBoZWFsdGhjYXJlIHRlY2ggYW5kIHNlcnZpY2Ugc3BhY2UuQXMgcGFydCBvZiBpdHMgcGxhbnMgdG8gY2FwdHVyZSB0aGUgb3V0IG9mIHBvY2tldCBoZWFsdGhjYXJlIG1hcmtldCBpbiBJbmRpYSBlc3RpbWF0ZWQgYXQgbmVhcmx5ICQxMDArYm4sIHRoZSBuZXcgdmVudHVyZSAgd2lsbCBwcm92aWRlIGZyZWUgb25saW5lIGFuZCBvdmVyIHBob25lIG1lZGljYWwgY29uc3VsdGF0aW9ucywgdG8gYmVnaW4gd2l0aC4gSXQgYWltcyB0byBwcm92aWRlIDEgbWlsbGlvbiBmcmVlIG1lZGljYWwgY29uc3VsdGF0aW9ucyBieSBNYXJjaCAyMDE5IGFuZCByZWFjaCB0aGUgc2NhbGUgb2YgNSBtaWxsaW9uIGJ5IE1hcmNoIDIwMjAuXG5cdFx0XHRcdFx0XHRcdCAgU3BlYWtpbmcgb24gdGhlIGxhdGVzdCB2ZW50dXJlLCBZYXNoaXNoIERhaGl5YSwgQ28tZm91bmRlciAmYW1wOyBDRU8sIFBvbGljeUJhemFhciBHcm91cCBvZiBDb21wYW5pZXMgc2FpZDogXCJXZSB3aWxsIGJlIGJ1aWxkaW5nIGEgdGVhbSBvZiBjZXJ0aWZpZWQgYW5kIHF1YWxpdHkgbWVkaWNhbCBwcm9mZXNzaW9uYWxzIHRvIGdpdmUgZnJlZSBvbmxpbmUgY29uc3VsdGF0aW9ucyB0byBjdXN0b21lcnMuIFRoaXMgc2hhbGwgYmUgc3VwcG9ydGVkIGJ5IGEgcm9idXN0IG9mZmxpbmUgbmV0d29yay4gQUkgd2lsbCBwbGF5IGEga2V5IHJvbGUgaW4gaGVscGluZyB1cyBidWlsZCB0aGlzIGluIHNjYWxlIGFuZCBlZmZpY2llbmN5LiBPdXIgdmlzaW9uIGlzIHRvIGNoYW5nZSBjdXN0b21lciBiZWhhdmlvciBpbiB0aGUgaGVhbHRoY2FyZSBzcGFjZSBieSBtYWtpbmcgdGhlIGNvbnN1bWVyIHNoaWZ0IHRvIG9ubGluZSBtZWRpY2FsIGNvbnN1bHRhdGlvbiBmcm9tIG9mZmxpbmUgYnkgYnVpbGRpbmcgYW4gZWFzeSB0byB1c2UsIGNvbnZlbmllbnQgYW5kIHRydXN0d29ydGh5IHNvbHV0aW9uLiBXZSBiZWxpZXZlIHRoYXQgaGVhbHRoY2FyZSBzcGFjZSBoYXMgaHVnZSBwb3RlbnRpYWwgdG8gZGlzcnVwdCwgYW5kIGNhbiBmb2xsb3cgdGhlIHNhbWUgZ3Jvd3RoIHRyYWplY3RvcnkgYXMgdGhlIGRpZ2l0YWwgaW5zdXJhbmNlIHNwYWNlIHdoaWNoIGluaXRpYWxseSBmYWNlZCBhIHNpbWlsYXIga2luZCBvZiBjb25zdW1lciBpbmVydGlhIHRoYXQgdGhpcyBzcGFjZSBmYWNlcy5cIlxuICAgICAgICAgICAgICAgIEluZGlhIGhhcyBvbmUgb2YgdGhlIGxvd2VzdCByYXRpb3MgZm9yIGEgZG9jdG9yIHBlciAxLDAwMCBwZW9wbGUgYW1vbmdzdCB0aGUgZGV2ZWxvcGluZyBjb3VudHJpZXMuIEhhdmluZyBhIHBoeXNpY2FsIGludGVyYWN0aW9uIHdpdGggYSBtZWRpY2FsIHByYWN0aXRpb25lciBpcyBub3Qgb25seSBhIHRpbWUtY29uc3VtaW5nIHByb2Nlc3MgYnV0IGFsc28gYW4gZXhwZW5zaXZlIG9uZSwgZXNwZWNpYWxseSBpbiB0aGUgcHJpdmF0ZSBzZWN0b3IuIEV2ZW4gdGhvdWdoIGdvdmVybm1lbnQgaG9zcGl0YWxzIGFuZCBzdGF0ZS1ydW4gaGVhbHRoIGNlbnRlcnMgb2ZmZXIgY29uc3VsdGF0aW9ucyBlaXRoZXIgZnJlZSBvZiBjb3N0IG9yIGF0IHN1YnNpZGl6ZWQgcHJpY2luZywgaXQncyBub3QgZWFzeSB0byBnZXQgYW4gYWNjZXNzIHRvIHRoZXNlIHNlcnZpY2VzLjwvcD5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZWRpYS1pY29ucy1kaXZcIj5cblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cDovL3d3dy5hc2lhaW5zdXJhbmNlcG9zdC5jb20vaGVhbHRoL3BvbGljeWJhemFhcnMtcHJvbW90ZXItb2ZmZXItZnJlZS1vbmxpbmUtbWVkaWNhbC1jb25zdWx0YXRpb25zXCIgcmVsPVwibm9mb2xsb3dcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL21lZGlhL2FzaW5zdXJhbmNlLWJsd2gucG5nXCJ9IG9ubW91c2VvdmVyPVwidGhpcy5zcmM9Jy9hc3NldHMvaW1nL21lZGlhL2FzaW5zdXJhbmNlLWNvbG9yLnBuZydcIiBvbm1vdXNlb3V0PVwidGhpcy5zcmM9Jy9hc3NldHMvaW1nL21lZGlhL2FzaW5zdXJhbmNlLWJsd2gucG5nJ1wiIC8+PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZWRpYS1kaXYtY2FyZFwiPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtZWRpYS1jYXJkLWhlYWRpbmdcIj5kb2NwcmltZS5jb23CoGdldHMgaW50ZXJuYWwgZnVuZCBpbmZ1c2lvbsKgd29ydGggJDUwIG1pbGxpb24gZnJvbSBQb2xpY3liYXphYXIgR3JvdXA8L3A+XG5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWVkaWEtY2FyZC1jb250ZW50XCI+PHNwYW4gY2xhc3NOYW1lPVwibWVkaWEtY2FyZC1oZWFkaW5nXCI+R3VydWdyYW0swqBTZXB0ZW1iZXIgMTcsIDIwMTg6PC9zcGFuPiZuYnNwOzxhIGhyZWY9XCJodHRwczovL2RvY3ByaW1lLmNvbVwiIHJlbD1cIm5vZm9sbG93XCIgdGFyZ2V0PVwiX2JsYW5rXCI+ZG9jcHJpbWUuY29tPC9hPiwgdGhlIGxhdGVzdCBoZWFsdGhjYXJlIHZlbnR1cmUgYnkgRXRlY2hBY2VzIE1hcmtldGluZyBhbmQgQ29uc3VsdGluZyBQcml2YXRlIExpbWl0ZWQgKOKAnFBvbGljeWJhemFhciBHcm91cOKAnSksIGFubm91bmNlZCB0aGF0IGl0IGhhcyByZWNlaXZlZCBpbml0aWFsIGludGVybmFsIGZ1bmRpbmcgb2YgJDUwIG1pbGxpb24gZnJvbSB0aGUgcGFyZW50IGNvbXBhbnkuIFRoZSBQb2xpY3liYXphYXIgR3JvdXAgYWxzbyBvd25zIEluZGlh4oCZcyBsZWFkaW5nIGluc3VydGVjaCBicmFuZCBQb2xpY3lCYXphYXIuY29tIGFuZCBsZWFkaW5nIGxlbmRpbmcgbWFya2V0cGxhY2UsIFBhaXNhYmF6YWFyLmNvbS48L3A+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1lZGlhLWNhcmQtY29udGVudFwiPjxzcGFuIGNsYXNzTmFtZT1cIm1lZGlhLWNhcmQtaGVhZGluZ1wiPkFjY29yZGluZyB0byBZYXNoaXNoIERhaGl5YSwgQ0VPIGFuZCBDby1mb3VuZGVyLCBQb2xpY3liYXphYXIgR3JvdXAgb2YgQ29tcGFuaWVzLDwvc3Bhbj4g4oCcSGVhbHRoY2FyZSBzZWN0b3IgaGFzIGEgbG90IG9mIHVudGFwcGVkIHBvdGVudGlhbCBhbmQgY3VycmVudGx5LCB0aGUgc2VydmljZXMgYXJlIG5vdCBhZmZvcmRhYmxlIGFuZCBhY2Nlc3NpYmxlIGZvciBhbGwuIFdpdGggcmlzaW5nIG91dC1vZi1wb2NrZXQgZXhwZW5zZXMsIHRoZXJl4oCZcyBhIG5lZWQgdG8gcHJvdmlkZSBxdWFsaXR5IGhlYWx0aGNhcmUgYXQgY29tcGV0aXRpdmUgcHJpY2VzIHRoYXQgY2FuIGJlIGFjY2Vzc2VkIGJ5IGFueW9uZSwgYW55d2hlcmUuIEFzIGEgR3JvdXAsIHdlIHdob2xlaGVhcnRlZGx5IHN1cHBvcnTCoGRvY3ByaW1lLmNvbeKAmXMgdmlzaW9uIHRvIHByb3ZpZGUgYSBjdXN0b21pemVkIGV4cGVyaWVuY2UgYW5kIG1heGltaXplIGhlYWx0aCBiZW5lZml0cyBmb3IgZXZlcnlvbmUu4oCdPC9wPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtZWRpYS1jYXJkLWNvbnRlbnRcIj48c3BhbiBjbGFzc05hbWU9XCJtZWRpYS1jYXJkLWhlYWRpbmdcIj5FeGNpdGVkIGFib3V0IHRoZSBpbnZlc3RtZW50LMKgQXNoaXNoIEd1cHRhLCBDRU8swqBkb2NwcmltZS5jb23CoHNhaWQsPC9zcGFuPiAg4oCcV2UgaW50ZW5kIHRvIHVzZSB0aGUgY2FwaXRhbCBpbiBwcm92aWRpbmcgc2VhbWxlc3MgdXNlciBleHBlcmllbmNlIGFuZCBicmluZ2luZyBpbm5vdmF0aW9uIGluIHRoZSBoZWFsdGhjYXJlIHNwYWNlLiBPdXIgZm9jdXMgaXMgdG8gbWFrZSB0aGUgc2VydmljZXMgbW9yZSBjdXN0b21lci1mcmllbmRseSBkcml2ZW4gYnkgdHJhbnNwYXJlbmN5LCB0cnVzdCBhbmQgc3VzdGFpbmFiaWxpdHkuwqBXZSBhcmUgYnJpbmdpbmcgaW5ub3ZhdGlvbiB0aHJvdWdoIHVzZSBvZiB2YXJpb3VzIHRlY2hub2xvZ3kgdG9vbHMgbGlrZSBBSSwgZGF0YSBzY2llbmNlIGFuZCBkZWVwIGFuYWx5dGljcy7igJ08L3A+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1lZGlhLWNhcmQtY29udGVudFwiPjxzcGFuIGNsYXNzTmFtZT1cIm1lZGlhLWNhcmQtaGVhZGluZ1wiPkhlIGZ1cnRoZXIgYWRkZWQsPC9zcGFuPlwiT3VyIGNvcmUgb2ZmZXJpbmdzIGluY2x1ZGUgZnJlZSBjb25zdWx0YXRpb24gc2VydmljZXMgdGhyb3VnaCBjaGF0IGFuZCBwaG9uZSBmcm9tIG91ciBpbi1ob3VzZSBkb2N0b3JzLCBhbmQgZGlzY291bnRlZMKgZG9jdG9yIGFuZCBsYWIgYXBwb2ludG1lbnQgYm9va2luZ3PCoHRvIGVuY291cmFnZSBjb25zdW1lcnMgaW4gc2Vla2luZyBleHBlcnQgbWVkaWNhbCBhZHZpY2UgYW5kIGdldHRpbmcgcmlnaHQgc29sdXRpb25zIGluIGEgdGltZWx5IG1hbm5lci7CoFNvb24sIHdlIHdpbGwgYWxzbyBicmluZyBhIHVuaXF1ZSBPUEQgc3Vic2NyaXB0aW9uLWJhc2VkIHByb2R1Y3QsIHdoaWNoIHdpbGwgY292ZXIgdW5saW1pdGVkIGNvbnN1bHRhdGlvbnMgYW5kIGRpYWdub3N0aWMgdGVzdHMuXCI8L3A+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1lZGlhLWNhcmQtY29udGVudFwiPmRvY3ByaW1lLmNvbcKgaGFzIHRpZWQtdXAgd2l0aCAxNCwwMDAgZG9jdG9ycyBhbmQgNSwwMDAgZGlhZ25vc3RpYyBsYWJzIGF0IHByZXNlbnQgYW5kIGFpbXMgdG8gZXhwYW5kIGl0cyBuZXR3b3JrIHRvIDEsNTAsMDAwIGRvY3RvcnMgYW5kIDIwLDAwMCBsYWJzIGFjcm9zcyAxMDArIGNpdGllcy4gQ3VycmVudGx5LCBhcHBvaW50bWVudHMgY2FuIGJlIGJvb2tlZCB3aXRoIGRvY3RvcnMgYW5kIGxhYnMgYmFzZWQgaW4gRGVsaGktTkNSIGJ1dCBmcm9tIG5leHQgbW9udGggb253YXJkcywgdGhlIGZhY2lsaXR5IHdpbGwgYmUgbWFkZSBhdmFpbGFibGUgYWNyb3NzIGFsbCBtYWpvciBjaXRpZXMgaW5jbHVkaW5nIE11bWJhaSwgQmFuZ2Fsb3JlLCBIeWRlcmFiYWQgJiBDaGVubmFpwqA8L3A+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1lZGlhLWNhcmQtY29udGVudFwiPjxzcGFuIGNsYXNzTmFtZT1cIm1lZGlhLWNhcmQtaGVhZGluZ1wiPkFib3V0wqBkb2NwcmltZS5jb208L3NwYW4+PC9wPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtZWRpYS1jYXJkLWNvbnRlbnRcIj5kb2NwcmltZS5jb23CoGlzIHRoZSBsYXRlc3QgdmVudHVyZSBieSB0aGUgUG9saWN5YmF6YWFyIEdyb3VwIHdpdGggYW4gYWltIHRvIHJlZGVmaW5lIGhvdyBJbmRpYW5zIHNlZWsgaGVhbHRoY2FyZSBzZXJ2aWNlcy4gSXQgY29ubmVjdHMgcGF0aWVudHMgd2l0aCBkb2N0b3JzIGluIHJlYWwgdGltZSBhbmQgYnJpZGdlcyB0aGUgZ2FwIGJldHdlZW4gbmVlZCBhbmQgZnVsZmlsbG1lbnQgdXNpbmcgc3RhdGUtb2YtdGhlLWFydCB0ZWNobm9sb2d5IGFuZCBhIHJvYnVzdCBvZmZsaW5lIG5ldHdvcmsuIEJlc2lkZXMgcHJvdmlkaW5nIGZyZWUgY29uc3VsdGF0aW9uIG9uIGNoYXQgYW5kIHBob25lIGJ5IGluLWhvdXNlIHRlYW0gb2YgaGVhbHRoIGV4cGVydHMsIGl0IGFsc28gZmFjaWxpdGF0ZXMgYm9va2luZyBvZiBkb2N0b3IgYXBwb2ludG1lbnRzIGFuZCBsYWIgdGVzdHMgYXQgZGlzY291bnRlZCByYXRlcyBhbmQgd2lsbCBzb29uIGJlIGdpdmluZyB0aGUgb3B0aW9uIG9mIE9QRCBzdWJzY3JpcHRpb24gcGFja2FnZXMgd2l0aCB1bmxpbWl0ZWQgY29uc3VsdGF0aW9ucyBhbmQgdGVzdHMuIFRoZSBjb21wYW55IGlzIHRhcmdldGluZyAxIG1pbGxpb24gZnJlZSBtZWRpY2FsIGNvbnN1bHRhdGlvbnMgYnkgTWFyY2ggMjAxOSBhbmQgdXAgdG8gNSBtaWxsaW9uIGJ5IE1hcmNoIDIwMjAuPC9wPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtZWRpYS1jYXJkLWNvbnRlbnRcIj48c3BhbiBjbGFzc05hbWU9XCJtZWRpYS1jYXJkLWhlYWRpbmdcIj5BYm91dCBFVGVjaEFjZXPCoE1hcmtldGluZyAmIENvbnN1bHRpbmcgUHZ0LiBMdGQuPC9zcGFuPjwvcD5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWVkaWEtY2FyZC1jb250ZW50XCI+RVRlY2hBY2VzIGlzIHRoZSBwYXJlbnQgY29tcGFueSB0aGF0IGhvbGRzIEluZGlh4oCZcyBsZWFkaW5nIGluc3VydGVjaCBicmFuZCwgUG9saWN5YmF6YWFyLmNvbSBhbmQgbGVhZGluZyBsZW5kaW5nIG1hcmtldHBsYWNlLCBQYWlzYWJhemFhci5jb20uIFRoZSBjb21wYW55IGhhcyBiYWNraW5nIGZyb20gYSBob3N0IG9mIGludmVzdG9ycyBpbmNsdWRpbmcgdGhlIGxpa2VzIG9mIFNvZnRiYW5rLCBUZW1hc2VrLCBUaWdlciBHbG9iYWwgTWFuYWdlbWVudCwgVHJ1ZSBOb3J0aCwgSW5mb0VkZ2UgKE5hdWtyaS5jb20pLCBQcmVtamkgSW52ZXN0LCBiZXNpZGVzIGludmVzdG1lbnRzIGZyb20gb3RoZXIgUEUgZnVuZHMgYW5kIGZhbWlseSBvZmZpY2VzLjwvcD5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWVkaWEtY2FyZC1jb250ZW50XCI+RVRlY2hBY2VzIHN0YXJ0ZWQgUG9saWN5YmF6YWFyLmNvbSB3aXRoIGEgcHVycG9zZSB0byBlZHVjYXRlIHBlb3BsZSBvbiBpbnN1cmFuY2UgcHJvZHVjdHMgYW5kIGhhcyB0cmFuc2Zvcm1lZCB0aGUgd2F5IGhvdyBpbnN1cmFuY2UgaXMgYm91Z2h0IGluIHRoZSBjb3VudHJ5LiBGcm9tIHJlY2VpdmluZyB0cmFmZmljIG9mIDE4MCwwMDAgdmlzaXRvcnMgaW4gMjAwOCwgUG9saWN5YmF6YWFyLmNvbSBoYXMgY29tZSBhIGxvbmcgd2F5IGFuZCB0b2RheSwgaG9zdHMgb3ZlciAxMDAgbWlsbGlvbiB2aXNpdG9ycyB5ZWFybHkgYW5kIHJlY29yZHMgc2FsZSBvZiBuZWFybHkgMzAwLDAwMCB0cmFuc2FjdGlvbnMgYSBtb250aC4gQ3VycmVudGx5LCBQb2xpY3liYXphYXIuY29tIGFjY291bnRzIGZvciBuZWFybHkgMjUlIG9mIEluZGlh4oCZcyBsaWZlIGNvdmVyLjwvcD5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWVkaWEtY2FyZC1jb250ZW50XCI+SW4gMjAxNCwgRVRlY2hBY2VzIHN0YXJ0ZWQgUGFpc2FiYXphYXIuY29tLCBhbiBvbmxpbmUgZmluYW5jaWFsIG1hcmtldHBsYWNlIGZvciBpbnZlc3RtZW50IGFuZCBsZW5kaW5nIHByb2R1Y3RzLiBUb2RheSwgUGFpc2FiYXphYXIuY29tIGlzIEluZGlh4oCZcyBsYXJnZXN0IG9ubGluZSBmaW5hbmNpYWwgbWFya2V0cGxhY2UgZm9yIGxvYW5zIGFuZCBjcmVkaXQgY2FyZHMuIEl0IGhhcyBjb2xsYWJvcmF0ZWQgd2l0aCBtb3JlIHRoYW4gNzUgcGFydG5lcnMgYWNyb3NzIGxlbmRpbmcgYW5kIGludmVzdG1lbnQgY2F0ZWdvcmllcyB3aXRoIDMwMCsgcHJvZHVjdHMgb24gb2ZmZXIuwqDCoDwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLTEyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLXN0aWNreS1kaXZcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0d2l0dGVyLWZlZWRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzcz1cInR3aXR0ZXItdGltZWxpbmVcIiByZWw9XCJub2ZvbGxvd1wiIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL0RvY1ByaW1lSW5kaWE/cmVmX3NyYz10d3NyYyU1RXRmd1wiPlR3ZWV0cyBieSBkb2NwcmltZUluZGlhPC9hPiA8c2NyaXB0IGFzeW5jIHNyYz1cImh0dHBzOi8vcGxhdGZvcm0udHdpdHRlci5jb20vd2lkZ2V0cy5qc1wiIGNoYXJzZXQ9XCJ1dGYtOFwiPjwvc2NyaXB0PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmYWNlYm9vay1mZWVkXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vcGx1Z2lucy9wYWdlLnBocD9ocmVmPWh0dHBzJTNBJTJGJTJGd3d3LmZhY2Vib29rLmNvbSUyRkRvY1ByaW1lSW5kaWEmdGFicz10aW1lbGluZSZ3aWR0aD0zNDAmaGVpZ2h0PTUwMCZzbWFsbF9oZWFkZXI9dHJ1ZSZhZGFwdF9jb250YWluZXJfd2lkdGg9dHJ1ZSZoaWRlX2NvdmVyPXRydWUmc2hvd19mYWNlcGlsZT10cnVlJmFwcElkXCIgd2lkdGg9ezM0MH0gaGVpZ2h0PXs1MDB9IHN0eWxlPXt7IGJvcmRlcjogJ25vbmUnLCBvdmVyZmxvdzogJ2hpZGRlbicgfX0gc2Nyb2xsaW5nPVwibm9cIiBmcmFtZUJvcmRlcj17MH0gYWxsb3dUcmFuc3BhcmVuY3k9XCJ0cnVlXCIgYWxsb3c9XCJlbmNyeXB0ZWQtbWVkaWFcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1sZy0zIGQtbGctbm9uZVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZWRpYS1zdGlja3ktZGl2XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtY29udGFjdC1kaXZcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWNvbnRhY3QtbGFiZWwtZGl2XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtZWRpYS1jb250YWN0LWxhYmVsXCI+Q29udGFjdCBVczwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWNvbnRhY3QtaXRlbXMtZGl2XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWNvbnRhY3QtaXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWNvbnRhY3Qtc3ViaXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbWVkaWEvZW1haWwtaWNvbi5zdmdcIn0gc3R5bGU9e3sgdmVydGljYWxBbGlnbjogJ21pZGRsZScgfX0gY2xhc3NOYW1lPVwibWVkaWEtY29udGFjdC1pY29uXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtY29udGFjdC1zdWJpdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWVkaWEtY29udGFjdC10ZXh0XCI+bWVkaWFAZG9jcHJpbWUuY29tPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZWRpYS1jb250YWN0LWl0ZW0gbWVkaWEtbG9jYXRpb24taXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWNvbnRhY3Qtc3ViaXRlbSBtZWRpYS1sb2NhdGlvbi1zdWJpdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9tZWRpYS9tZWRpYS1sb2Muc3ZnXCJ9IGNsYXNzTmFtZT1cIm1lZGlhLWNvbnRhY3QtaWNvblwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWNvbnRhY3Qtc3ViaXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1lZGlhLWNvbnRhY3QtdGV4dFwiPlBsb3Qgbm88L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWVkaWEtY29udGFjdC10ZXh0XCI+MTE5LCBTZWN0b3IgNDQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWVkaWEtY29udGFjdC10ZXh0XCI+R3VydWdyYW0gLSAxMjIwMDE8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE1lZGlhXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlbG1ldFRhZ3MgZnJvbSAnLi4vSGVsbWV0VGFncydcblxuY2xhc3MgUHJpdmFjeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgYWJvdXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPEhlbG1ldFRhZ3MgdGFnc0RhdGE9e3tcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICgnUHJpdmFjeSBQb2xpY3kgfCBkb2NwcmltZScpLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogKCdUaGUgcG9saWN5IGlzIGVmZmVjdGl2ZSBmcm9tIHRoZSBkYXRlIGFuZCB0aW1lIGEgdXNlciByZWdpc3RlcnMgd2l0aCBkb2NwcmltZSBieSBmaWxsaW5nIHVwIHRoZSBSZWdpc3RyYXRpb24gZm9ybSBhbmQgYWNjZXB0aW5nIHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucy4nKVxuICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBhYm91dC1oZWFkaW5nXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fT5Qcml2YWN5IFBvbGljeTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcHJpdmFjeS1kZXNjLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+ZG9jcHJpbWUuY29tICjigJxXZWJzaXRlL01vYmlsZSBBcHBsaWNhdGlvbuKAnSkgb3BlcmF0ZWQgYnkgZG9jcHJpbWUgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAo4oCcQ29tcGFueS93ZS91c+KAnSkgcmVjb2duaXplcyB0aGUgaW1wb3J0YW5jZSBvZiBtYWludGFpbmluZyB5b3VyIHByaXZhY3kuIFRoZSBDb21wYW55IGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1pdHRlZCB0byBtYWludGFpbiB0aGUgY29uZmlkZW50aWFsaXR5LCBpbnRlZ3JpdHkgYW5kIHNlY3VyaXR5IG9mIGFsbCBpbmZvcm1hdGlvbiBvZiBvdXIgdXNlcnMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgUHJpdmFjeSBQb2xpY3kgZXhwbGFpbnMgaG93IHdlIGNvbGxlY3QsIHVzZSwgc2hhcmUsIGRpc2Nsb3NlIGFuZCBwcm90ZWN0IFBlcnNvbmFsIGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFib3V0IHRoZSBVc2VycyBvZiB0aGUgU2VydmljZXMsIGluY2x1ZGluZyBhbmQgdGhlIHZpc2l0b3JzIG9mIFdlYnNpdGUgKGpvaW50bHkgYW5kIHNldmVyYWxseSByZWZlcnJlZFxuICAgICAgICAgICAgICB0byBhcyDigJx5b3XigJ0gb3Ig4oCcVXNlcnPigJ0gaW4gdGhpcyBQcml2YWN5IFBvbGljeSkuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+VGhpcyBQcml2YWN5IFBvbGljeSBpcyBwdWJsaXNoZWQgaW4gY29tcGxpYW5jZSBvZiB0aGUgKEluZGlhbikgSW5mb3JtYXRpb24gVGVjaG5vbG9neSBBY3QsIDIwMDAgYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBydWxlcywgcmVndWxhdGlvbnMsIGd1aWRlbGluZXMgYW5kIGNsYXJpZmljYXRpb25zIGZyYW1lZCB0aGVyZXVuZGVyLCBpbmNsdWRpbmcgdGhlIChJbmRpYW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEluZm9ybWF0aW9uIFRlY2hub2xvZ3kgKFJlYXNvbmFibGUgU2VjdXJpdHkgUHJhY3RpY2VzIGFuZCBQcm9jZWR1cmVzIGFuZCBTZW5zaXRpdmUgUGVyc29uYWxcbiAgICAgICAgICAgICAgSW5mb3JtYXRpb24pIFJ1bGVzLCAyMDExIChTUEkgUnVsZXMpLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiPlBsZWFzZSByZWFkIHRoaXMgcHJpdmFjeSBwb2xpY3kgY2FyZWZ1bGx5IGFuZCBzZWUgYmVsb3cgZm9yIGRldGFpbHMgb24gd2hhdCB0eXBlIG9mIGluZm9ybWF0aW9uIHdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1heSBjb2xsZWN0IGZyb20geW91LCBob3cgdGhhdCBpbmZvcm1hdGlvbiBpcyB1c2VkIGluIGNvbm5lY3Rpb24gd2l0aCB0aGUgc2VydmljZXMgb2ZmZXJlZCB0aHJvdWdoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG91ciBXZWJzaXRlIGFuZCBzaGFyZWQgd2l0aCBvdXIgYnVzaW5lc3MgcGFydG5lcnMuIFRoaXMgUHJpdmFjeSBQb2xpY3kgYXBwbGllcyB0byBjdXJyZW50IGFuZFxuICAgICAgICAgICAgICBmb3JtZXIgdmlzaXRvcnMgYW5kIGN1c3RvbWVycyB0byB0aGUgV2Vic2l0ZS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj5CeSB2aXNpdGluZyBhbmQvb3IgYWNjZXNzaW5nIHRoZSBXZWJzaXRlLCB5b3UgYWdyZWUgdG8gdGhpcyBQcml2YWN5IFBvbGljeS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2Mtc3ViaGVhZGluZ1wiPjEuJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Q09MTEVDVElPTiBPRiBQRVJTT05BTCBJTkZPUk1BVElPTjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiPldoZW4geW91IGFjY2VzcyB0aGUgU2VydmljZXMsIG9yIHRocm91Z2ggYW55IGludGVyYWN0aW9uIHdpdGggdXMgdmlhIGVtYWlscywgdGVsZXBob25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxzIG9yIG90aGVyIGNvcnJlc3BvbmRlbmNlLCB3ZSBtYXkgYXNrIHlvdSB0byB2b2x1bnRhcmlseSBwcm92aWRlIHVzIHdpdGggY2VydGFpblxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvcm1hdGlvbiB0aGF0IHBlcnNvbmFsbHkgaWRlbnRpZmllcyB5b3Ugb3IgY291bGQgYmUgdXNlZCB0byBwZXJzb25hbGx5IGlkZW50aWZ5IHlvdS4gWW91XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlcmVieSBjb25zZW50IHRvIHRoZSBjb2xsZWN0aW9uIG9mIHN1Y2ggaW5mb3JtYXRpb24gYnkgdGhlIENvbXBhbnkuIFdpdGhvdXQgcHJlanVkaWNlIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBnZW5lcmFsaXR5IG9mIHRoZSBhYm92ZSwgaW5mb3JtYXRpb24gY29sbGVjdGVkIGJ5IHVzIGZyb20geW91IG1heSBpbmNsdWRlIChidXQgaXMgbm90XG4gICAgICAgICAgICAgIGxpbWl0ZWQgdG8pIHRoZSBmb2xsb3dpbmc6PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cInN1Yi1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPmNvbnRhY3QgZGF0YSAoc3VjaCBhcyB5b3VyIGZ1bGwgbmFtZSwgZW1haWwgYWRkcmVzcyBhbmQgcGhvbmUgbnVtYmVyKTs8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5kZW1vZ3JhcGhpYyBkYXRhIChzdWNoIGFzIHlvdXIgZ2VuZGVyLCB5b3VyIGRhdGUgb2YgYmlydGggYW5kIHlvdXIgcGluIGNvZGUpOzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPmRhdGEgcmVnYXJkaW5nIHlvdXIgdXNhZ2Ugb2YgdGhlIHNlcnZpY2VzIGFuZCBoaXN0b3J5IG9mIHRoZSBhcHBvaW50bWVudHMgbWFkZSBieSBvciB3aXRoXG4gICAgICAgICAgICAgICAgeW91IHRocm91Z2ggdGhlIHVzZSBvZiBTZXJ2aWNlczs8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5kYXRhIHJlZ2FyZGluZyB5b3VyIG1lZGljYWwgcmVjb3JkcyBoaXN0b3J5OyBhbmQgaW5zdXJhbmNlIGRhdGE7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+b3RoZXIgaW5mb3JtYXRpb24gdGhhdCB5b3Ugdm9sdW50YXJpbHkgY2hvb3NlIHRvIHByb3ZpZGUgdG8gdXMgKHN1Y2ggYXMgaW5mb3JtYXRpb24gc2hhcmVkXG4gICAgICAgICAgICAgICAgYnkgeW91IHdpdGggdXMgdGhyb3VnaCBlbWFpbHMgb3IgbGV0dGVycykuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj5UaGUgaW5mb3JtYXRpb24gY29sbGVjdGVkIGZyb20geW91IGJ5IHRoZSBDb21wYW55IG1heSBjb25zdGl0dXRlIOKAmHBlcnNvbmFsIGluZm9ybWF0aW9u4oCZXG4gICAgICAgICAgICAgIG9yIOKAmHNlbnNpdGl2ZSBwZXJzb25hbCBkYXRhIG9yIGluZm9ybWF0aW9u4oCZIHVuZGVyIHRoZSBTUEkgUnVsZXMuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+PHNwYW4+4oCcUGVyc29uYWwgSW5mb3JtYXRpb27igJ08L3NwYW4+IGlzIGRlZmluZWQgdW5kZXIgdGhlIFNQSSBSdWxlcyB0byBtZWFuIGFueSBpbmZvcm1hdGlvbiB0aGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF0ZXMgdG8gYSBuYXR1cmFsIHBlcnNvbiwgd2hpY2gsIGVpdGhlciBkaXJlY3RseSBvciBpbmRpcmVjdGx5LCBpbiBjb21iaW5hdGlvbiB3aXRoIG90aGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluZm9ybWF0aW9uIGF2YWlsYWJsZSBvciBsaWtlbHkgdG8gYmUgYXZhaWxhYmxlIHRvIGEgYm9keSBjb3Jwb3JhdGUsIGlzIGNhcGFibGUgb2YgaWRlbnRpZnlpbmdcbiAgICAgICAgICAgICAgc3VjaCBwZXJzb24uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+VGhlIFNQSSBSdWxlcyBmdXJ0aGVyIGRlZmluZSDigJxTZW5zaXRpdmUgUGVyc29uYWwgRGF0YSBvciBJbmZvcm1hdGlvbuKAnSBvZiBhIHBlcnNvbiB0byBtZWFuXG4gICAgICAgICAgICAgIHBlcnNvbmFsIGluZm9ybWF0aW9uIGFib3V0IHRoYXQgcGVyc29uIHJlbGF0aW5nIHRvOjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJzdWItbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5wYXNzd29yZHM7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+ZmluYW5jaWFsIGluZm9ybWF0aW9uIHN1Y2ggYXMgYmFuayBhY2NvdW50cywgY3JlZGl0IGFuZCBkZWJpdCBjYXJkIGRldGFpbHMgb3Igb3RoZXJcbiAgICAgICAgICAgICAgICBwYXltZW50IGluc3RydW1lbnQgZGV0YWlsczs8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5waHlzaWNhbCwgcGh5c2lvbG9naWNhbCBhbmQgbWVudGFsIGhlYWx0aCBjb25kaXRpb247PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+c2V4dWFsIG9yaWVudGF0aW9uOzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPm1lZGljYWwgcmVjb3JkcyBhbmQgaGlzdG9yeTs8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5iaW9tZXRyaWMgaW5mb3JtYXRpb247PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+aW5mb3JtYXRpb24gcmVjZWl2ZWQgYnkgYm9keSBjb3Jwb3JhdGUgdW5kZXIgbGF3ZnVsIGNvbnRyYWN0IG9yIG90aGVyd2lzZTs8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT52aXNpdG9yIGRldGFpbHMgYXMgcHJvdmlkZWQgYXQgdGhlIHRpbWUgb2YgcmVnaXN0cmF0aW9uIG9yIHRoZXJlYWZ0ZXI7IGFuZDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPmNhbGwgZGF0YSByZWNvcmRzLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+VG8gdGhlIGV4dGVudCBuZWNlc3NhcnkgdG8gcHJvdmlkZSBVc2VycyB3aXRoIHRoZSBTZXJ2aWNlcywgb2ZmZXJzIGFuZCBwcm9tb3Rpb25zIHRocm91Z2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIFdlYnNpdGUsIENvbXBhbnkgbWF5IHByb3ZpZGUgeW91ciBQZXJzb25hbCBJbmZvcm1hdGlvbiB0byB0aGlyZCBwYXJ0eShpZXMpIHdobyB3b3JrXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uIGJlaGFsZiBvZiBvciB3aXRoIENvbXBhbnkgdG8gcHJvdmlkZSB0aGUgVXNlcnMgd2l0aCBzdWNoIFNlcnZpY2VzLCBvZmZlcnMgYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb21vdGlvbnMsIHRvIGhlbHAgQ29tcGFueSBjb21tdW5pY2F0ZSB3aXRoIFVzZXJzIG9yIHRvIG1haW50YWluIHRoZSBXZWJzaXRlLiBJbiBzdWNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNpcmN1bXN0YW5jZXMsIHlvdSBjb25zZW50IHRvIHVzIGRpc2Nsb3NpbmcgeW91ciBQZXJzb25hbCBJbmZvcm1hdGlvbiB0byBzdWNoIHRoaXJkIHBhcnRpZXNcbiAgICAgICAgICAgICAgYW5kIGNvbnRyYWN0b3JzLCBzb2xlbHkgZm9yIHRoZSBpbnRlbmRlZCBwdXJwb3NlcyBvbmx5LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiPkhvd2V2ZXIsIENvbXBhbnkgd2lsbCBiZSBmcmVlIHRvIHVzZSwgY29sbGVjdCBhbmQgZGlzY2xvc2UgaW5mb3JtYXRpb24gdGhhdCBpcyBmcmVlbHlcbiAgICAgICAgICAgICAgYXZhaWxhYmxlIGFib3V0IHlvdSBpbiB0aGUgcHVibGljIGRvbWFpbiB3aXRob3V0IHlvdXIgY29uc2VudC48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2Mtc3ViaGVhZGluZ1wiPjIuJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Q09OVFJPTExFUlMgT0YgUEVSU09OQUwgSU5GT1JNQVRJT048L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj5Zb3VyIHBlcnNvbmFsIGRhdGEgd2lsbCBiZSBzdG9yZWQgYW5kIGNvbGxlY3RlZCBieSBkb2NwcmltZSBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIGFuZCB3aXRoIGl0cyBwYXJlbnQgY29tcGFueSBFdGVjaGFjZXMgTWFya2V0aW5nIGFuZCBDb25zdWx0aW5nIFByaXZhdGUgTGltaXRlZC48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2Mtc3ViaGVhZGluZ1wiPjMuJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7UFVSUE9TRVMgT0YgQ09MTEVDVElPTiBPRiBZT1VSIERBVEE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj5Db21wYW55IGNvbGxlY3RzIHlvdXIgaW5mb3JtYXRpb24gd2hlbiB5b3UgcmVnaXN0ZXIgZm9yIGFuIGFjY291bnQsIHdoZW4geW91IHVzZSBpdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMgb3Igc2VydmljZXMsIHZpc2l0IGl0cyBXZWJzaXRlJ3MgcGFnZXMsIGFuZCB3aGVuIHlvdSBlbnRlciB5b3VyIGRldGFpbHMgZm9yIHJlY2VpdmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9tb3Rpb25zIG9yIG9mZmVycyBhcyBmZWF0dXJlZCBvbiBvciBvZmZlcmVkIGJ5IHRoZSBXZWJzaXRlLiBXaGVuIHlvdSByZWdpc3RlciB3aXRoIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBXZWJzaXRlLCB5b3UgYXJlIGFza2VkIGZvciB5b3VyIGZpcnN0IG5hbWUsIGxhc3QgbmFtZSwgc3RhdGUgYW5kIGNpdHkgb2YgcmVzaWRlbmNlLCBlbWFpbFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLCBkYXRlIG9mIGJpcnRoLCBhbmQgc2V4IGV0Yy4gT25jZSB5b3UgcmVnaXN0ZXIgYXQgdGhlIFdlYnNpdGUgYW5kIHNpZ24gaW4geW91IGFyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBub3QgYW5vbnltb3VzIHRvIHVzLiBBbHNvLCB5b3UgYXJlIGFza2VkIGZvciB5b3VyIGNvbnRhY3QgbnVtYmVyIGR1cmluZyByZWdpc3RyYXRpb24gYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1heSBiZSBzZW50IFNNUyhzKSwgbm90aWZpY2F0aW9ucyBhYm91dCBvdXIgc2VydmljZXMuIEZ1cnRoZXIsIHNvbWUgZmVhdHVyZXMgb2YgdGhpcyBXZWJzaXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9yIG91ciBTZXJ2aWNlcyB3aWxsIHJlcXVpcmUgeW91IHRvIGZ1cm5pc2ggeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbiBhcyBwcm92aWRlZCBieSB5b3VcbiAgICAgICAgICAgICAgdW5kZXIgeW91ciBhY2NvdW50IHNlY3Rpb24gb24gb3VyIFdlYnNpdGUuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+SGVuY2UsIGJ5IHJlZ2lzdGVyaW5nIHlvdSBhdXRob3JpemUgdGhlIENvbXBhbnkgdG8gc2VuZCB0ZXh0cyBhbmQgZW1haWwgYWxlcnRzIHRvIHlvdSB3aXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHlvdXIgbG9naW4gZGV0YWlscyBhbmQgYW55IG90aGVyIHNlcnZpY2UgcmVxdWlyZW1lbnRzLCBpbmNsdWRpbmcgcHJvbW90aW9uYWwgbWFpbHMgYW5kXG4gICAgICAgICAgICAgIFNNU3MuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+RnVydGhlciwgSW4gb3JkZXIgdG8gYXZhaWwgc29tZSBvZiB0aGUgU2VydmljZXMsIHRoZSBVc2VycyBtYXkgYmUgcmVxdWlyZWQgdG8gdXBsb2FkIGNvcGllc1xuICAgICAgICAgICAgICAgICAgICAgICAgICBvZiB0aGVpciBwcmVzY3JpcHRpb25zLCBvbiB0aGUgV2Vic2l0ZSBhbmQvIG9yIGUtbWFpbCB0aGUgc2FtZSB0byBDb21wYW55IGluIGFjY29yZGFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aCB0aGUgVGVybXMgb2YgVXNlIGFuZCB0aGUgcHJlc2NyaXB0aW9ucyB3aWxsIGJlIHN0b3JlZC8gZGlzY2xvc2VkIGJ5IENvbXBhbnkgb25seSBpblxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgbWFubmVyIHNwZWNpZmllZCBpbiB0aGlzIFByaXZhY3kgUG9saWN5IGFuZCB0aGUgVGVybXMgb2YgVXNlLiBUaGUgdGVybSBwZXJzb25hbFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvcm1hdGlvbi9kYXRhIHNoYWxsIGFsc28gaW5jbHVkZSBhbnkgc3VjaCBwcmVzY3JpcHRpb25zIHVwbG9hZGVkIG9yIG90aGVyd2lzZSBwcm92aWRlZFxuICAgICAgICAgICAgICBieSBVc2Vycy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj5GdXJ0aGVybW9yZSwgQ29tcGFueSBtYXkga2VlcCByZWNvcmRzIG9mIHRlbGVwaG9uZSBjYWxscyByZWNlaXZlZCBhbmQgbWFkZSBmb3IgbWFraW5nXG4gICAgICAgICAgICAgIGlucXVpcmllcywgb3JkZXJzLCBvciBvdGhlciBwdXJwb3NlcyBmb3IgdGhlIHB1cnBvc2Ugb2YgYWRtaW5pc3RyYXRpb24gb2YgU2VydmljZXMuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+V2UgdXNlIHlvdXIgaW5mb3JtYXRpb24gaW4gb3JkZXIgdG86PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1ydC0xMFwiIHN0eWxlPXt7IGxpc3RTdHlsZTogJ2Rpc2MnLCBwYWRkaW5nTGVmdDogNDAsIHRleHRBbGlnbjogJ2xlZnQnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtcmItMTBcIj5SZWdpc3RlciB5b3UgYXMgY3VzdG9tZXIvdXNlciBvbiB0aGUgV2Vic2l0ZTs8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtcmItMTBcIj5EZWFsaW5nIHdpdGggcmVxdWVzdHMsIGVucXVpcmllcyBvciBjb21wbGFpbnRzIGFuZCBvdGhlciBjdXN0b21lciBjYXJlIHJlbGF0ZWQgYWN0aXZpdGllczsgYW5kIGFsbCBvdGhlciBnZW5lcmFsIGFkbWluaXN0cmF0aXZlIGFuZCBidXNpbmVzcyBwdXJwb3Nlcy48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtcmItMTBcIj5Qcm9jZXNzIHlvdXIgb3JkZXJzIG9yIGFwcGxpY2F0aW9ucyBhbmQgcHJvdmlzaW9uIG9mIHByb2R1Y3RzIGFuZCBzZXJ2aWNlcy48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtcmItMTBcIj5BZG1pbmlzdGVyIG9yIG90aGVyd2lzZSBjYXJyeSBvdXQgb3VyIG9ibGlnYXRpb25zIGluIHJlbGF0aW9uIHRvIGFueSBhZ3JlZW1lbnQgd2l0aFxuICAgICAgICAgICAgICAgIG91ciBidXNpbmVzcyBwYXJ0bmVycy9jb250cmFjdG9yczs8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtcmItMTBcIj5SZXNlYXJjaCBhbmQgZGV2ZWxvcG1lbnQgYW5kIGZvciBVc2VyIGFkbWluaXN0cmF0aW9uIChpbmNsdWRpbmcgY29uZHVjdGluZyBVc2VyXG4gICAgICAgICAgICAgICAgc3VydmV5cyk7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXJiLTEwXCI+VGVjaG5pY2FsIGFkbWluaXN0cmF0aW9uIGFuZCBjdXN0b21pemF0aW9uIG9mIFdlYnNpdGU7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXJiLTEwXCI+VG8gc2VuZCB5b3UgaW5mb3JtYXRpb24gYWJvdXQgc3BlY2lhbCBwcm9tb3Rpb25zIG9yIG9mZmVycyAoZWl0aGVyIG9mZmVyZWQgYnkgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21wYW55IG9yIGJ5IGl0cyBidXNpbmVzcyBwYXJ0bmVycykuIFdlIG1pZ2h0IGFsc28gdGVsbCB5b3UgYWJvdXQgbmV3IGZlYXR1cmVzIG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cy4gVGhlc2UgbWlnaHQgYmUgb3VyIG93biBvZmZlcnMgb3IgcHJvZHVjdHMsIG9yIHRoaXJkLXBhcnR5IG9mZmVycyBvclxuICAgICAgICAgICAgICAgIHByb2R1Y3RzIHdpdGggd2hvbSBDb21wYW55IGhhcyBhIHRpZS11cDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtcmItMTBcIj5JbXByb3ZlbWVudCBvZiBTZXJ2aWNlcyBhbmQgZmVhdHVyZXMgb24gdGhlIFdlYnNpdGUuIEluIHRoaXMgcmVnYXJkLCB3ZSBtYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbWJpbmUgaW5mb3JtYXRpb24gd2UgZ2V0IGZyb20geW91IHdpdGggaW5mb3JtYXRpb24gYWJvdXQgeW91IHdlIGdldCBmcm9tIHRoaXJkXG4gICAgICAgICAgICAgICAgcGFydGllcy48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtcmItMTBcIj50byBzZW5kIHlvdSBub3RpY2VzLCBjb21tdW5pY2F0aW9ucywgb2ZmZXIgYWxlcnRzIHJlbGV2YW50IHRvIHlvdXIgdXNlIG9mIHRoZVxuICAgICAgICAgICAgICAgIFNlcnZpY2VzIG9mZmVyZWQgb24gdGhpcyBXZWJzaXRlLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1yYi0xMFwiPmFzIG90aGVyd2lzZSBwcm92aWRlZCBpbiB0aGlzIFByaXZhY3kgUG9saWN5LjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjLXN1YmhlYWRpbmdcIj40LiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO0lORk9STUFUSU9OIFNIQVJJTkcsIFRSQU5TRkVSIEFORCBESVNDTE9TVVJFPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cInByaXZhY3ktb3JkZXItbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LW9yZGVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2UgbWF5IG5lZWQgdG8gZGlzY2xvc2UvIHRyYW5zZmVyIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24gdG8gdGhlIGZvbGxvd2luZyB0aGlyZCBwYXJ0aWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgcHVycG9zZXMgbWVudGlvbmVkIGluIHRoaXMgUHJpdmFjeSBQb2xpY3kgYW5kIHRoZSBUZXJtcyBvZiBVc2U6XG4gICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cInN1Yi1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+VG8gYnVzaW5lc3MgcGFydG5lcnMgYW5kIG90aGVyIHNlcnZpY2UgcHJvdmlkZXJzIGFwcG9pbnRlZCBieSB1cyBmb3IgdGhlIHB1cnBvc2Ugb2ZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Fycnlpbmcgb3V0IHNlcnZpY2VzIG9uIG91ciBiZWhhbGYgdW5kZXIgYSBjb250cmFjdC4gR2VuZXJhbGx5IHRoZXNlIHBhcnRpZXMgZG8gbm90IGhhdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW55IGluZGVwZW5kZW50IHJpZ2h0IHRvIHNoYXJlIHRoaXMgaW5mb3JtYXRpb24sIGhvd2V2ZXIgY2VydGFpbiBwYXJ0aWVzIHdobyBwcm92aWRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VzIG9uIHRoZSBXZWJzaXRlLCBpbmNsdWRpbmcgYnV0IG5vdCBsaW1pdGVkIHRvIHRoZSBwcm92aWRlcnMgb2Ygb25saW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW11bmljYXRpb25zIHNlcnZpY2VzLCB3aWxsIGhhdmUgcmlnaHRzIHRvIHVzZSBhbmQgZGlzY2xvc2UgdGhlIHBlcnNvbmFsIGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3RlZCBpbiBjb25uZWN0aW9uIHdpdGggdGhlIHByb3Zpc2lvbiBvZiB0aGVzZSBzZXJ2aWNlcyBpbiBhY2NvcmRhbmNlIHdpdGggdGhlaXIgb3duXG4gICAgICAgICAgICAgICAgICAgIHByaXZhY3kgcG9saWNpZXMuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5UbyBvdXIgYWZmaWxpYXRlcyBpbiBJbmRpYSBvciBpbiBvdGhlciBjb3VudHJpZXMgd2hvIG1heSB1c2UgYW5kIGRpc2Nsb3NlIHlvdXJcbiAgICAgICAgICAgICAgICAgICAgaW5mb3JtYXRpb24gZm9yIHRoZSBzYW1lIHB1cnBvc2VzIGFzIHVzLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+V2UgbWF5IGFsc28gc2hhcmUsIHNlbGwsIGFuZC9vciB0cmFuc2ZlciB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIHRvIGFueVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzb3ItaW4taW50ZXJlc3QgYXMgYSByZXN1bHQgb2YgYSBzYWxlIG9mIGFueSBwYXJ0IG9mIG91ciBidXNpbmVzcyBvciB1cG9uIHRoZSBtZXJnZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlb3JnYW5pemF0aW9uLCBvciBjb25zb2xpZGF0aW9uIG9mIGl0IHdpdGggYW5vdGhlciBlbnRpdHkgb24gYSBiYXNpcyB0aGF0IGl0IGlzIG5vdCB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vydml2aW5nIGVudGl0eS4gV2UgbWF5IGFsc28gZGlzY2xvc2Ugb3IgdHJhbnNmZXIgeW91ciBJbmZvcm1hdGlvbiwgdG8gYW5vdGhlciB0aGlyZCBwYXJ0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcyBwYXJ0IG9mIHJlb3JnYW5pemF0aW9uIG9yIGEgc2FsZSBvZiB0aGUgYXNzZXRzIG9mIGEgQ29tcGFueeKAmXMgY29ycG9yYXRpb24gZGl2aXNpb24gb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFueS4gQW55IHRoaXJkIHBhcnR5IHRvIHdoaWNoIHdlIHRyYW5zZmVyIG9yIHNlbGwgb3VyIGFzc2V0cywgd2lsbCBoYXZlIHRoZSByaWdodCB0b1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZSB0byB1c2UgdGhlIHBlcnNvbmFsIGRhdGEgYW5kLyBvciBvdGhlciBpbmZvcm1hdGlvbiB0aGF0IHlvdSBoYXZlIHByb3ZpZGVkIHRvIHVzLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+VG8gZ292ZXJubWVudCBpbnN0aXR1dGlvbnMvIGF1dGhvcml0aWVzIHRvIHRoZSBleHRlbnQgcmVxdWlyZWQgYSkgdW5kZXIgdGhlIGxhd3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzLCBhbmQgcmVndWxhdGlvbnMgYW5kIG9yIHVuZGVyIG9yZGVycyBvZiBhbnkgcmVsZXZhbnQganVkaWNpYWwgb3IgcXVhc2ktanVkaWNpYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yaXR5OyBiKSB0byBwcm90ZWN0IGFuZCBkZWZlbmQgdGhlIHJpZ2h0cyBvciBwcm9wZXJ0eSBvZiB0aGUgQ29tcGFueTsgYykgdG8gZmlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhdWQgYW5kIGNyZWRpdCByaXNrOyBkKSB0byBlbmZvcmNlIG91ciBUZXJtcyBvZiBVc2UgKHRvIHdoaWNoIHRoaXMgUHJpdmFjeSBQb2xpY3kgaXMgYWxzbyBhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnQpIDsgb3IgZSkgd2hlbiBDb21wYW55LCBpbiBpdHMgc29sZSBkaXNjcmV0aW9uLCBkZWVtcyBpdCBuZWNlc3NhcnkgaW4gb3JkZXIgdG8gcHJvdGVjdFxuICAgICAgICAgICAgICAgICAgICBpdHMgcmlnaHRzIG9yIHRoZSByaWdodHMgb2Ygb3RoZXJzLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+SWYgb3RoZXJ3aXNlIHJlcXVpcmVkIGJ5IGFuIG9yZGVyIHVuZGVyIGFueSBsYXcgZm9yIHRoZSB0aW1lIGJlaW5nIGluIGZvcmNlIGluY2x1ZGluZyBpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSB0byBlbnF1aXJpZXMgYnkgR292ZXJubWVudCBhZ2VuY2llcyBmb3IgdGhlIHB1cnBvc2Ugb2YgdmVyaWZpY2F0aW9uIG9mIGlkZW50aXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvciBmb3IgcHJldmVudGlvbiwgZGV0ZWN0aW9uLCBpbnZlc3RpZ2F0aW9uIGluY2x1ZGluZyBjeWJlciBpbmNpZGVudHMsIHByb3NlY3V0aW9uLCBhbmRcbiAgICAgICAgICAgICAgICAgICAgcHVuaXNobWVudCBvZiBvZmZlbmNlcy48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkluIGNhc2Ugb2YgYW55IGNvbnRlc3RzIG9yIHN1cnZleXMgY29uZHVjdGVkIGJ5IHRoZSBDb21wYW55IGluIHdoaWNoIHRoZSB5b3VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGUsIHlvdXIgaW5mb3JtYXRpb24gbWF5IGJlIGRpc2Nsb3NlZCB0byB0aGlyZCBwYXJ0aWVzLCBhbHNvIGJlIGRpc2Nsb3NlZCB0byB0aGlyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWVzIHRvIHRoZSBleHRlbnQgbmVjZXNzYXJ5IGZvciBmdWxmaWxtZW50IG9mIGFueSBvZmZlci92b3VjaGVycyBldGMuIGFuZCBvdGhlclxuICAgICAgICAgICAgICAgICAgICBhc3BlY3RzIG9mIHN1Y2ggY29udGVzdCBvciBzaW1pbGFyIG9mZmVyaW5nLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1vcmRlci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlIG1ha2UgYWxsIHlvdXIgcGVyc29uYWwgSW5mb3JtYXRpb24gYWNjZXNzaWJsZSB0byBvdXIgZW1wbG95ZWVzIGFuZCBkYXRhIHByb2Nlc3NvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25seSBvbiBhIG5lZWQtdG8ta25vdyBiYXNpcy4gQWxsIG91ciBlbXBsb3llZXMgYW5kIGRhdGEgcHJvY2Vzc29ycywgd2hvIGhhdmUgYWNjZXNzIHRvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgYXJlIGFzc29jaWF0ZWQgd2l0aCB0aGUgcHJvY2Vzc2luZyBvZiB5b3VyIEluZm9ybWF0aW9uLCBhcmUgb2JsaWdlZCB0byByZXNwZWN0IGl0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWRlbnRpYWxpdHkuXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktb3JkZXItaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb24tcGVyc29uYWxseSBpZGVudGlmaWFibGUgaW5mb3JtYXRpb24gbWF5IGJlIGRpc2Nsb3NlZCB0byB0aGlyZCBwYXJ0eSBhZCBzZXJ2ZXJzLCBhZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZ2VuY2llcywgdGVjaG5vbG9neSB2ZW5kb3JzIGFuZCByZXNlYXJjaCBmaXJtcyB0byBzZXJ2ZSBhZHZlcnRpc2VtZW50cyB0byB0aGUgVXNlcnMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbXBhbnkgbWF5IGFsc28gc2hhcmUgaXRzIGFnZ3JlZ2F0ZSBmaW5kaW5ncyAobm90IHNwZWNpZmljIGluZm9ybWF0aW9uKSBiYXNlZCBvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvcm1hdGlvbiByZWxhdGluZyB0byB5b3VyIGludGVybmV0IHVzZSB0byBwcm9zcGVjdGl2ZSwgaW52ZXN0b3JzLCBzdHJhdGVnaWMgcGFydG5lcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwb25zb3JzIGFuZCBvdGhlcnMgaW4gb3JkZXIgdG8gaGVscCBncm93dGggb2Ygb3VyIGJ1c2luZXNzLiBUaGVzZSBjb21wYW5pZXMgbWF5IHVzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvcm1hdGlvbiAoZXhjbHVkaW5nIHlvdXIgbmFtZSwgYWRkcmVzcywgZW1haWwgYWRkcmVzcywgb3IgdGVsZXBob25lIG51bWJlcikgYWJvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeW91ciB2aXNpdHMgdG8gdGhpcyBXZWJzaXRlIGluIG9yZGVyIHRvIHByb3ZpZGUgYWR2ZXJ0aXNlbWVudHMgb24gdGhpcyBXZWJzaXRlIGFuZCBvdGhlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlyZCBwYXJ0eSB3ZWJzaXRlcyBhYm91dCBnb29kcyBhbmQgc2VydmljZXMgdGhhdCBtYXkgYmUgb2YgaW50ZXJlc3QgdG8geW91LiBXZSB1c2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcmQtcGFydHkgc2VydmljZSBwcm92aWRlcnMgdG8gc2VydmUgYWRzIG9uIG91ciBiZWhhbGYgYWNyb3NzIHRoZSBpbnRlcm5ldCBhbmQgc29tZXRpbWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uIHRoaXMgV2Vic2l0ZS4gVGhleSBtYXkgY29sbGVjdCBhbm9ueW1vdXMgaW5mb3JtYXRpb24gYWJvdXQgeW91ciB2aXNpdHMgdG8gV2Vic2l0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIHlvdXIgaW50ZXJhY3Rpb24gd2l0aCBvdXIgcHJvZHVjdHMgYW5kIHNlcnZpY2VzLiBUaGV5IG1heSBhbHNvIHVzZSBpbmZvcm1hdGlvbiBhYm91dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5b3VyIHZpc2l0cyB0byB0aGlzIGFuZCBvdGhlciB3ZWJzaXRlcyBmb3IgdGFyZ2V0ZWQgYWR2ZXJ0aXNlbWVudHMgZm9yIGdvb2RzIGFuZCBzZXJ2aWNlcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBhbm9ueW1vdXMgaW5mb3JtYXRpb24gaXMgY29sbGVjdGVkIHRocm91Z2ggdGhlIHVzZSBvZiBhIHBpeGVsIHRhZywgd2hpY2ggaXMgaW5kdXN0cnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhbmRhcmQgdGVjaG5vbG9neSB1c2VkIGJ5IG1vc3QgbWFqb3Igd2Vic2l0ZXMuIE5vIHBlcnNvbmFsbHkgaWRlbnRpZmlhYmxlIGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzIGNvbGxlY3RlZCBvciB1c2VkIGluIHRoaXMgcHJvY2Vzcy5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1vcmRlci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlIG1heSBtYWtlIGFub255bW91cyBvciBhZ2dyZWdhdGUgcGVyc29uYWwgaW5mb3JtYXRpb24gYW5kIGRpc2Nsb3NlIHN1Y2ggZGF0YSBvbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluIGEgbm9uLXBlcnNvbmFsbHkgaWRlbnRpZmlhYmxlIG1hbm5lci4gU3VjaCBpbmZvcm1hdGlvbiBkb2VzIG5vdCBpZGVudGlmeSB5b3VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kaXZpZHVhbGx5LlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LW9yZGVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjZXNzIHRvIHlvdXIgYWNjb3VudCBpbmZvcm1hdGlvbiBhbmQgYW55IG90aGVyIHBlcnNvbmFsIGlkZW50aWZpYWJsZSBpbmZvcm1hdGlvbiBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpY3RseSByZXN0cmljdGVkIGFuZCB1c2VkIG9ubHkgaW4gYWNjb3JkYW5jZSB3aXRoIHNwZWNpZmljIGludGVybmFsIHByb2NlZHVyZXMsIGluIG9yZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIG9wZXJhdGUsIGRldmVsb3Agb3IgaW1wcm92ZSBvdXIgU2VydmljZXMuIFdlIG1heSB1c2UgdGhpcmQgcGFydHkgc2VydmljZSBwcm92aWRlcnMgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlIHlvdSB0byBwcm92aWRlIHdpdGggb3VyIHNlcnZpY2VzIGFuZCB3ZSByZXF1aXJlIHN1Y2ggdGhpcmQgcGFydGllcyB0byBtYWludGFpbiB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlkZW50aWFsaXR5IG9mIHRoZSBpbmZvcm1hdGlvbiB3ZSBwcm92aWRlIHRvIHRoZW0gdW5kZXIgb3VyIGNvbnRyYWN0cyB3aXRoIHRoZW0uXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktb3JkZXItaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGVyZSBhcmUgbnVtYmVyIG9mIFByb2R1Y3RzIGFuZC9vciBTZXJ2aWNlcywgb2ZmZXJlZCBieSB0aGlyZCBQYXJ0aWVzIG9uIHRoZSBXZWJzaXRlLiBJZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5b3UgY2hvb3NlIHRvIGF2YWlsIGZvciB0aGVzZSBzZXBhcmF0ZSBQcm9kdWN0cyBvciBTZXJ2aWNlcywgZGlzY2xvc2UgaW5mb3JtYXRpb24gdG8gdGhlc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZSBwcm92aWRlcnMsIHRoZW4gdGhlaXIgdXNlIG9mIHlvdXIgaW5mb3JtYXRpb24gaXMgZ292ZXJuZWQgYnkgdGhlaXIgcHJpdmFjeSBwb2xpY2llcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tcGFueSBpcyBub3QgcmVzcG9uc2libGUgZm9yIHRoZWlyIHByaXZhY3kgcG9saWNpZXMuXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjLXN1YmhlYWRpbmdcIj41LiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO1dFIENPTExFQ1QgQ09PS0lFUzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiPldlIG1heSBhbHNvIHJlY2VpdmUgYW5kL29yIGhvbGQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIFVzZXLigJlzIGJyb3dzaW5nIGhpc3RvcnkgaW5jbHVkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBVUkwgb2YgdGhlIHNpdGUgdGhhdCB0aGUgVXNlciB2aXNpdGVkIHByaW9yIHRvIHZpc2l0aW5nIHRoZSB3ZWJzaXRlIGFzIHdlbGwgYXMgdGhlIEludGVybmV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFByb3RvY29sIChJUCkgYWRkcmVzcyBvZiBlYWNoIFVzZXIncyBjb21wdXRlciAob3IgdGhlIHByb3h5IHNlcnZlciBhIFVzZXIgdXNlZCB0byBhY2Nlc3MgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFdvcmxkIFdpZGUgV2ViKSwgVXNlcidzIGNvbXB1dGVyIG9wZXJhdGluZyBzeXN0ZW0gYW5kIHR5cGUgb2Ygd2ViIGJyb3dzZXIgdGhlIFVzZXIgaXNcbiAgICAgICAgICAgICAgdXNpbmcgYXMgd2VsbCBhcyB0aGUgbmFtZSBvZiBVc2VyJ3MgSVNQLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiPlRoZSBXZWJzaXRlIHVzZXMgdGVtcG9yYXJ5IGNvb2tpZXMgdG8gc3RvcmUgY2VydGFpbiBkYXRhICh0aGF0IGlzIG5vdCBzZW5zaXRpdmUgcGVyc29uYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSBvciBpbmZvcm1hdGlvbikgdGhhdCBpcyB1c2VkIGJ5IHRoZSBDb21wYW55IGFuZCBpdHMgc2VydmljZSBwcm92aWRlcnMgZm9yIHRoZSB0ZWNobmljYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWRtaW5pc3RyYXRpb24gb2YgdGhlIFdlYnNpdGUsIHJlc2VhcmNoIGFuZCBkZXZlbG9wbWVudCwgYW5kIGZvciBVc2VyIGFkbWluaXN0cmF0aW9uLiBBXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvb2tpZSBpcyBhIHBpZWNlIG9mIGRhdGEgc3RvcmVkIG9uIHRoZSB1c2VyJ3MgY29tcHV0ZXIgdGllZCB0byBpbmZvcm1hdGlvbiBhYm91dCB0aGUgdXNlci5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgV2UgbWF5IHVzZSBib3RoIHNlc3Npb24gSUQgY29va2llcyBhbmQgcGVyc2lzdGVudCBjb29raWVzLiBGb3Igc2Vzc2lvbiBJRCBjb29raWVzLCBvbmNlIHlvdVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZSB5b3VyIGJyb3dzZXIgb3IgbG9nIG91dCwgdGhlIGNvb2tpZSB0ZXJtaW5hdGVzIGFuZCBpcyBlcmFzZWQuIEEgcGVyc2lzdGVudCBjb29raWUgaXMgYVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbCB0ZXh0IGZpbGUgc3RvcmVkIG9uIHlvdXIgY29tcHV0ZXLigJlzIGhhcmQgZHJpdmUgZm9yIGFuIGV4dGVuZGVkIHBlcmlvZCBvZiB0aW1lLiBTZXNzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIElEIGNvb2tpZXMgbWF5IGJlIHVzZWQgYnkgUFJQIHRvIHRyYWNrIHVzZXIgcHJlZmVyZW5jZXMgd2hpbGUgdGhlIHVzZXIgaXMgdmlzaXRpbmcgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdlYnNpdGUuIFRoZXkgYWxzbyBoZWxwIHRvIG1pbmltaXplIGxvYWQgdGltZXMgYW5kIHNhdmUgb24gc2VydmVyIHByb2Nlc3NpbmcuIFBlcnNpc3RlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29va2llcyBtYXkgYmUgdXNlZCBieSBQUlAgdG8gc3RvcmUgd2hldGhlciwgZm9yIGV4YW1wbGUsIHlvdSB3YW50IHlvdXIgcGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtZW1iZXJlZCBvciBub3QsIGFuZCBvdGhlciBpbmZvcm1hdGlvbi4gQ29va2llcyB1c2VkIG9uIHRoZSBQUlAgd2Vic2l0ZSBkbyBub3QgY29udGFpblxuICAgICAgICAgICAgICBwZXJzb25hbGx5IGlkZW50aWZpYWJsZSBpbmZvcm1hdGlvbi48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2Mtc3ViaGVhZGluZ1wiPjYuJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7TE9HIEZJTEVTPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+TGlrZSBtb3N0IHN0YW5kYXJkIHdlYnNpdGVzLCB3ZSB1c2UgbG9nIGZpbGVzLiBUaGlzIGluZm9ybWF0aW9uIG1heSBpbmNsdWRlIGludGVybmV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb3RvY29sIChJUCkgYWRkcmVzc2VzLCBicm93c2VyIHR5cGUsIGludGVybmV0IHNlcnZpY2UgcHJvdmlkZXIgKElTUCksIHJlZmVycmluZy9leGl0IHBhZ2VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF0Zm9ybSB0eXBlLCBkYXRlL3RpbWUgc3RhbXAsIGFuZCBudW1iZXIgb2YgY2xpY2tzIHRvIGFuYWx5c2UgdHJlbmRzLCBhZG1pbmlzdGVyIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXRlLCB0cmFjayB1c2VyJ3MgbW92ZW1lbnQgaW4gdGhlIGFnZ3JlZ2F0ZSwgYW5kIGdhdGhlciBicm9hZCBkZW1vZ3JhcGhpYyBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgYWdncmVnYXRlIHVzZS4gV2UgbWF5IGNvbWJpbmUgdGhpcyBhdXRvbWF0aWNhbGx5IGNvbGxlY3RlZCBsb2cgaW5mb3JtYXRpb24gd2l0aCBvdGhlclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvcm1hdGlvbiB3ZSBjb2xsZWN0IGFib3V0IHlvdS4gV2UgZG8gdGhpcyB0byBpbXByb3ZlIHNlcnZpY2VzIHdlIG9mZmVyIHRvIHlvdSwgdG9cbiAgICAgICAgICAgICAgaW1wcm92ZSBtYXJrZXRpbmcsIGFuYWx5dGljcyBvciBzaXRlIGZ1bmN0aW9uYWxpdHkuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjLXN1YmhlYWRpbmdcIj43LiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO0VtYWlsLSBPcHQgb3V0PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+SWYgeW91IGFyZSBubyBsb25nZXIgaW50ZXJlc3RlZCBpbiByZWNlaXZpbmcgZS1tYWlsIGFubm91bmNlbWVudHMgYW5kIG90aGVyIGtpbmRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldGluZyBpbmZvcm1hdGlvbi9jb21tdW5pY2F0aW9ucyBmcm9tIHVzLCBwbGVhc2UgZS1tYWlsIHlvdXIgcmVxdWVzdCBhdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZUBkb2NwcmltZS5jb20uIFBsZWFzZSBub3RlIHRoYXQgaXQgbWF5IHRha2UgYWJvdXQgNyAoc2V2ZW4pIHdvcmtpbmcgZGF5cyB0byBwcm9jZXNzXG4gICAgICAgICAgICAgIHlvdXIgcmVxdWVzdC48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2Mtc3ViaGVhZGluZ1wiPjguJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7U0VDVVJJVFk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj5XZSBlbXBsb3kgYXBwcm9wcmlhdGUgdGVjaG5pY2FsIGFuZCBvcmdhbml6YXRpb25hbCBzZWN1cml0eSBtZWFzdXJlcyBhdCBhbGwgdGltZXMgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdGVjdCB0aGUgaW5mb3JtYXRpb24gd2UgY29sbGVjdCBmcm9tIHlvdS4gV2UgdXNlIG11bHRpcGxlIGVsZWN0cm9uaWMsIHByb2NlZHVyYWwsIGFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwaHlzaWNhbCBzZWN1cml0eSBtZWFzdXJlcyB0byBwcm90ZWN0IGFnYWluc3QgdW5hdXRob3JpemVkIG9yIHVubGF3ZnVsIHVzZSBvciBhbHRlcmF0aW9uIG9mXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluZm9ybWF0aW9uLCBhbmQgYWdhaW5zdCBhbnkgYWNjaWRlbnRhbCBsb3NzLCBkZXN0cnVjdGlvbiwgb3IgZGFtYWdlIHRvIGluZm9ybWF0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICBIb3dldmVyLCBubyBtZXRob2Qgb2YgdHJhbnNtaXNzaW9uIG92ZXIgdGhlIEludGVybmV0LCBvciBtZXRob2Qgb2YgZWxlY3Ryb25pYyBzdG9yYWdlLCBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAlIHNlY3VyZS4gVGhlcmVmb3JlLCB3ZSBjYW5ub3QgZ3VhcmFudGVlIGl0cyBhYnNvbHV0ZSBzZWN1cml0eS4gRnVydGhlciwgeW91IGFyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zaWJsZSBmb3IgbWFpbnRhaW5pbmcgdGhlIGNvbmZpZGVudGlhbGl0eSBhbmQgc2VjdXJpdHkgb2YgeW91ciBsb2dpbiBpZCBhbmQgcGFzc3dvcmQsXG4gICAgICAgICAgICAgIGFuZCBtYXkgbm90IHByb3ZpZGUgdGhlc2UgY3JlZGVudGlhbHMgdG8gYW55IHRoaXJkIHBhcnR5LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzYy1zdWJoZWFkaW5nXCI+OS4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtUSElSRCBQQVJUWSBBRFZFUlRJU0lORzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiPldlIG1heSB1c2UgdGhpcmQtcGFydHkgYWR2ZXJ0aXNpbmcgY29tcGFuaWVzIGFuZC9vciBhZCBhZ2VuY2llcyB0byBzZXJ2ZSBhZHMgd2hlbiB5b3VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaXQgb3VyIFdlYnNpdGUuIFRoZXNlIGNvbXBhbmllcyBtYXkgdXNlIGluZm9ybWF0aW9uIChleGNsdWRpbmcgeW91ciBuYW1lLCBhZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbCBhZGRyZXNzLCBvciB0ZWxlcGhvbmUgbnVtYmVyKSBhYm91dCB5b3VyIHZpc2l0cyB0byB0aGlzIFdlYnNpdGUgaW4gb3JkZXIgdG8gcHJvdmlkZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhZHZlcnRpc2VtZW50cyBvbiB0aGlzIFdlYnNpdGUgYW5kIG90aGVyIHRoaXJkIHBhcnR5IHdlYnNpdGVzIGFib3V0IGdvb2RzIGFuZCBzZXJ2aWNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0IG1heSBiZSBvZiBpbnRlcmVzdCB0byB5b3UuIFdlIHVzZSB0aGlyZC1wYXJ0eSBzZXJ2aWNlIHByb3ZpZGVycyB0byBzZXJ2ZSBhZHMgb24gb3VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJlaGFsZiBhY3Jvc3MgdGhlIGludGVybmV0IGFuZCBzb21ldGltZXMgb24gdGhpcyBXZWJzaXRlLiBUaGV5IG1heSBjb2xsZWN0IGFub255bW91c1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvcm1hdGlvbiBhYm91dCB5b3VyIHZpc2l0cyB0byBXZWJzaXRlLCBhbmQgeW91ciBpbnRlcmFjdGlvbiB3aXRoIG91ciBwcm9kdWN0cyBhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZXMuIFRoZXkgbWF5IGFsc28gdXNlIGluZm9ybWF0aW9uIGFib3V0IHlvdXIgdmlzaXRzIHRvIHRoaXMgYW5kIG90aGVyIFdlYnNpdGVzIGZvclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRlZCBhZHZlcnRpc2VtZW50cyBmb3IgZ29vZHMgYW5kIHNlcnZpY2VzLiBUaGlzIGFub255bW91cyBpbmZvcm1hdGlvbiBpcyBjb2xsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3VnaCB0aGUgdXNlIG9mIGEgcGl4ZWwgdGFnLCB3aGljaCBpcyBpbmR1c3RyeSBzdGFuZGFyZCB0ZWNobm9sb2d5IHVzZWQgYnkgbW9zdCBtYWpvclxuICAgICAgICAgICAgICBXZWJzaXRlcy4gTm8gcGVyc29uYWxseSBpZGVudGlmaWFibGUgaW5mb3JtYXRpb24gaXMgY29sbGVjdGVkIG9yIHVzZWQgaW4gdGhpcyBwcm9jZXNzLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzYy1zdWJoZWFkaW5nXCI+MTAuJm5ic3A7Jm5ic3A7Jm5ic3A7TElOS1MgVE8gT1RIRVIgV0VCU0lURVM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj5UaGVyZSBtaWdodCBiZSBhZmZpbGlhdGVzIG9yIG90aGVyIHNpdGVzIGxpbmtlZCB0byB0aGUgV2Vic2l0ZS4gUGVyc29uYWwgaW5mb3JtYXRpb24gdGhhdFxuICAgICAgICAgICAgICAgICAgICAgICAgICB5b3UgcHJvdmlkZSB0byB0aG9zZSBzaXRlcyBhcmUgbm90IG91ciBwcm9wZXJ0eS4gVGhlc2UgYWZmaWxpYXRlZCBzaXRlcyBtYXkgaGF2ZSBkaWZmZXJlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmFjeSBwcmFjdGljZXMgYW5kIHdlIGVuY291cmFnZSB5b3UgdG8gcmVhZCB0aGVpciBwcml2YWN5IHBvbGljaWVzIG9mIHRoZXNlIHdlYnNpdGVzLFxuICAgICAgICAgICAgICB3aGVuIHlvdSB2aXNpdCB0aGVtLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzYy1zdWJoZWFkaW5nXCI+MTEuJm5ic3A7Jm5ic3A7Jm5ic3A7Q0hBTkdFUyBJTiBUSElTIFBSSVZBQ1kgUE9MSUNZPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+Q29tcGFueSByZXNlcnZlcyB0aGUgcmlnaHQgdG8gY2hhbmdlIHRoaXMgcG9saWN5IGZyb20gdGltZSB0byB0aW1lLCB3aXRoIG9yIHdpdGhvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWR2YW5jZSBub3RpY2UsIGF0IGl0cyBzb2xlIGRpc2NyZXRpb24uIFdlIG1heSB1cGRhdGUgdGhpcyBwcml2YWN5IHBvbGljeSB0byByZWZsZWN0IGNoYW5nZXNcbiAgICAgICAgICAgICAgdG8gb3VyIGluZm9ybWF0aW9uIHByYWN0aWNlcy4gV2UgZW5jb3VyYWdlIHlvdSB0byBwZXJpb2RpY2FsbHkgdmlzaXQgdGhpcyB3ZWJwYWdlLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzYy1zdWJoZWFkaW5nXCI+MTIuJm5ic3A7Jm5ic3A7Jm5ic3A7QURESVRJT05BTCBOT1RFUyBUTyBUSEUgVVNFUjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJwcml2YWN5LW9yZGVyLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1vcmRlci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbXBhbnkgZG9lcyBub3QgZXhlcmNpc2UgY29udHJvbCBvdmVyIHRoZSBzaXRlcyBkaXNwbGF5ZWQgYXMgc2VhcmNoIHJlc3VsdHMgb3IgbGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSB3aXRoaW4gaXRzIFNlcnZpY2VzLiBUaGVzZSBvdGhlciBzaXRlcyBtYXkgcGxhY2UgdGhlaXIgb3duIGNvb2tpZXMgb3Igb3RoZXIgZmlsZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb24gdGhlIFVzZXJzJyBjb21wdXRlciwgY29sbGVjdCBkYXRhIG9yIHNvbGljaXQgcGVyc29uYWwgaW5mb3JtYXRpb24gZnJvbSB0aGUgVXNlcnMsIGZvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGljaCBDb21wYW55IGlzIG5vdCByZXNwb25zaWJsZSBvciBsaWFibGUuIEFjY29yZGluZ2x5LCBDb21wYW55IGRvZXMgbm90IG1ha2UgYW55XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcHJlc2VudGF0aW9ucyBjb25jZXJuaW5nIHRoZSBwcml2YWN5IHByYWN0aWNlcyBvciBwb2xpY2llcyBvZiBzdWNoIHRoaXJkIHBhcnRpZXMgb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVybXMgb2YgdXNlIG9mIHN1Y2ggd2Vic2l0ZXMsIG5vciBkb2VzIENvbXBhbnkgZ3VhcmFudGVlIHRoZSBhY2N1cmFjeSwgaW50ZWdyaXR5LCBvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWFsaXR5IG9mIHRoZSBpbmZvcm1hdGlvbiwgZGF0YSwgdGV4dCwgc29mdHdhcmUsIHNvdW5kLCBwaG90b2dyYXBocywgZ3JhcGhpY3MsIHZpZGVvcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMgb3Igb3RoZXIgbWF0ZXJpYWxzIGF2YWlsYWJsZSBvbiBzdWNoIHdlYnNpdGVzLiBDb21wYW55IGVuY291cmFnZXMgdGhlIFVzZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gcmVhZCB0aGUgcHJpdmFjeSBwb2xpY2llcyBvZiB0aGF0IHdlYnNpdGUuXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktb3JkZXItaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21wYW55IHNoYWxsIG5vdCBiZSByZXNwb25zaWJsZSBpbiBhbnkgbWFubmVyIGZvciB0aGUgYXV0aGVudGljaXR5IG9mIHRoZSBwZXJzb25hbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvcm1hdGlvbiBvciBzZW5zaXRpdmUgcGVyc29uYWwgZGF0YSBvciBpbmZvcm1hdGlvbiBzdXBwbGllZCBieSB0aGUgVXNlciB0byB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tcGFueSBvciBhbnkgb2YgaXRzIGJ1c2luZXNzIHBhcnRuZXJzLiBJZiBhIFVzZXIgcHJvdmlkZXMgYW55IGluZm9ybWF0aW9uIHRoYXQgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW50cnVlLCBpbmFjY3VyYXRlLCBub3QgY3VycmVudCBvciBpbmNvbXBsZXRlIChvciBiZWNvbWVzIHVudHJ1ZSwgaW5hY2N1cmF0ZSwgbm90XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgb3IgaW5jb21wbGV0ZSksIG9yIENvbXBhbnkgaGFzIHJlYXNvbmFibGUgZ3JvdW5kcyB0byBzdXNwZWN0IHRoYXQgc3VjaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvcm1hdGlvbiBpcyB1bnRydWUsIGluYWNjdXJhdGUsIG5vdCBjdXJyZW50IG9yIGluY29tcGxldGUsIENvbXBhbnkgaGFzIHRoZSByaWdodCB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXNwZW5kIG9yIHRlcm1pbmF0ZSBzdWNoIGFjY291bnQgYXQgaXRzIHNvbGUgZGlzY3JldGlvbi5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1vcmRlci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbXBhbnkgc2hhbGwgbm90IGJlIHJlc3BvbnNpYmxlIGZvciBhbnkgYnJlYWNoIG9mIHNlY3VyaXR5IG9yIGZvciBhbnkgYWN0aW9ucyBvZiBhbnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcmQgcGFydGllcyB0aGF0IHJlY2VpdmUgVXNlcnMnIHBlcnNvbmFsIGRhdGEgb3IgZXZlbnRzIHRoYXQgYXJlIGJleW9uZCB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhc29uYWJsZSBjb250cm9sIG9mIENvbXBhbnkgaW5jbHVkaW5nLCBhY3RzIG9mIGdvdmVybm1lbnQsIGNvbXB1dGVyIGhhY2tpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuYXV0aG9yaXplZCBhY2Nlc3MgdG8gY29tcHV0ZXIgZGF0YSBhbmQgc3RvcmFnZSBkZXZpY2UsIGNvbXB1dGVyIGNyYXNoZXMsIGJyZWFjaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZiBzZWN1cml0eSBhbmQgZW5jcnlwdGlvbiwgZXRjLlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LW9yZGVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIFVzZXIgaXMgcmVzcG9uc2libGUgZm9yIG1haW50YWluaW5nIHRoZSBjb25maWRlbnRpYWxpdHkgb2YgdGhlIFVzZXIncyBhY2NvdW50IGFjY2Vzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvcm1hdGlvbiBhbmQgcGFzc3dvcmQuIFRoZSBVc2VyIHNoYWxsIGJlIHJlc3BvbnNpYmxlIGZvciBhbGwgdXNlcyBvZiB0aGUgVXNlcidzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQgYW5kIHBhc3N3b3JkLCB3aGV0aGVyIG9yIG5vdCBhdXRob3JpemVkIGJ5IHRoZSBVc2VyLiBUaGUgVXNlciBzaGFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbW1lZGlhdGVseSBub3RpZnkgQ29tcGFueSBvZiBhbnkgYWN0dWFsIG9yIHN1c3BlY3RlZCB1bmF1dGhvcml6ZWQgdXNlIG9mIHRoZSBVc2VyJ3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudCBvciBwYXNzd29yZC5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2Mtc3ViaGVhZGluZ1wiPjEzLiZuYnNwOyZuYnNwOyZuYnNwO0dSSUVWQU5DRSBPRkZJQ0VSPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+SW4gY2FzZSB5b3UgaGF2ZSBhbnkgZ3JpZXZhbmNlcyB3aXRoIHJlc3BlY3QgdG8gaW4gYWNjb3JkYW5jZSB3aXRoIGFwcGxpY2FibGUgbGF3IG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEluZm9ybWF0aW9uIFRlY2hub2xvZ3kgYW5kIHJ1bGVzIG1hZGUgdGhlcmUgdW5kZXIsIHRoZSBuYW1lIGFuZCBjb250YWN0IGRldGFpbHMgb2YgdGhlXG4gICAgICAgICAgICAgIEdyaWV2YW5jZSBPZmZpY2VyIGFyZSBwcm92aWRlZCBiZWxvdzo8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiPk1yLiBBc2hpc2ggQWptYW5pPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IDAsIG1hcmdpbkJvdHRvbTogMCB9fT5kb2NwcmltZS5jb208L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IDAsIG1hcmdpbkJvdHRvbTogMCB9fT5QbG90IE5vLiAxMzEsPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAwLCBtYXJnaW5Cb3R0b206IDAgfX0+U2VjdG9yLTQ0LCBHdXJ1Z3JhbS0xMjIwMDEsPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAwLCBtYXJnaW5Cb3R0b206IDEwIH19PkhhcnlhbmE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiPkVtYWlsIDogY2FyZUBkb2NwcmltZS5jb208L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiPklmIHlvdSBoYXZlIHF1ZXN0aW9ucywgY29uY2VybnMsIG9yIHN1Z2dlc3Rpb25zIHJlZ2FyZGluZyBvdXIgUHJpdmFjeSBQb2xpY3ksIHdlIGNhbiBiZVxuICAgICAgICAgICAgICByZWFjaGVkIHVzaW5nIHRoZSBjb250YWN0IGluZm9ybWF0aW9uIG9uIG91ciBDb250YWN0IFVzIHBhZ2Ugb3IgYXQgY2FyZUBkb2NwcmltZS5jb20uPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBQcml2YWN5XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlbG1ldFRhZ3MgZnJvbSAnLi4vSGVsbWV0VGFncydcblxuY2xhc3MgVGVybXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWQ6IDAsXG4gICAgICAgICAgICBzY3JvbGxQb3NpdGlvbjowXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRUYWIodmFsKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZDogdmFsIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZih0aGlzLnByb3BzLmZvclNjcm9sbCl7XG4gICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNjaGVkdWxpbmdfOScpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRUb3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzY2hlZHVsaW5nXzknKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzY2hlZHVsaW5nXzknKS5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbFBvc2l0aW9uID0gZWxlbWVudFRvcCAtIGVsZW1lbnRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHBhcnNlSW50KHNjcm9sbFBvc2l0aW9uKSlcbiAgICAgICAgICAgIH0gIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgbWFpbkNsYXNzXG4gICAgICAgIGxldCBoZWFkaW5nQ2xhc3NcbiAgICAgICAgaWYodGhpcy5wcm9wcy5mcm9tQXBwKXtcbiAgICAgICAgICAgIG1haW5DbGFzcyA9IFwiY29udGFpbmVyIGFib3V0LWNvbnRhaW5lciBhcHBVcmxQYWRkaW5nXCJcbiAgICAgICAgICAgIGhlYWRpbmdDbGFzcyA9IFwiY29sLTEyIHRleHQtY2VudGVyIGQtbm9uZSBkLW1kLWJsb2NrXCJcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBtYWluQ2xhc3MgPSAnY29udGFpbmVyIGFib3V0LWNvbnRhaW5lcidcbiAgICAgICAgICAgIGhlYWRpbmdDbGFzcyA9IFwiY29sLTEyIHRleHQtY2VudGVyXCJcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e21haW5DbGFzc30+XG4gICAgICAgICAgICAgICAgPEhlbG1ldFRhZ3MgdGFnc0RhdGE9e3tcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICgnVGVybXMgJiBDb25kaXRpb25zIC0gU3VibWlzc2lvbiwgTGlzdGluZ3MgJiBQYXltZW50IFRlcm1zJyksXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAoJ2RvY3ByaW1lOiBSZWFkIFRlcm1zICYgQ29uZGl0aW9ucywgZGV0YWlscyBvbiBTdWJtaXNzaW9uIGFuZCBBZG1pbmlzdHJhdGlvbiBvZiBMaXN0aW5ncywgUGF5bWVudCBUZXJtcy4nKVxuICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2hlYWRpbmdDbGFzc30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgYWJvdXQtaGVhZGluZ1wiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX0+VGVybXMgJmFtcDsgQ29uZGl0aW9uczwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpdmFjeS10YWItZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicHJpdmFjeS10YWJcIiArICh0aGlzLnN0YXRlLnNlbGVjdGVkID09IDAgPyBcIiBwcml2YWN5LXRhYi1hY3RpdmVcIiA6IFwiXCIpfSBvbkNsaWNrPXt0aGlzLnNldFRhYi5iaW5kKHRoaXMsIDApfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+RW5kIFVzZXIgQWdyZWVtZW50PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInByaXZhY3ktdGFiXCIgKyAodGhpcy5zdGF0ZS5zZWxlY3RlZCA9PSAxID8gXCIgcHJpdmFjeS10YWItYWN0aXZlXCIgOiBcIlwiKX0gb25DbGljaz17dGhpcy5zZXRUYWIuYmluZCh0aGlzLCAxKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPlByb3ZpZGVyIFRlcm1zIGFuZCBDb25kaXRpb25zPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGN1c3RvbWVyLXRlcm1zLXJvd1wiIGhpZGRlbj17dGhpcy5zdGF0ZS5zZWxlY3RlZCA9PSAxfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcHJpdmFjeS1kZXNjLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+VGhlc2UgVGVybXMgb2YgVXNlIHNldHMgZm9ydGggdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zIHRoYXQgYXBwbHkgdG8gdGhlIGFjY2VzcyBhbmQgdXNlIG9mIHRoZSBzaXRlIFwid3d3LmRvY3ByaW1lLmNvbVwiIGFuZCBpdHMgTW9iaWxlIEFwcGxpY2F0aW9uIChjb2xsZWN0aXZlbHkgYmUgcmVmZXJyZWQgdG8gYXMg4oCcV2Vic2l0ZeKAnSksIHdoaWNoIGlzIG93bmVkIGFuZCBvcGVyYXRlZCBieSBkb2NwcmltZSBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkLCBhIGNvbXBhbnkgZHVseSBpbmNvcnBvcmF0ZWQgdW5kZXIgdGhlIHByb3Zpc2lvbnMgb2YgdGhlIENvbXBhbmllcyBBY3QsIDIwMTMsIChoZXJlaW5hZnRlciBjb2xsZWN0aXZlbHkgYmUgcmVmZXJyZWQgdG8gYXMgXCJDb21wYW55XCIgb3Ig4oCcZG9jcHJpbWXigJ0pLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiPlBMRUFTRSBSRUFEIFRIRVNFIFRFUk1TIE9GIFVTRSBDQVJFRlVMTFkgQlkgQUNDRVNTSU5HIE9SIFVTSU5HIFRISVMgSU5URVJORVQgQkFTRUQgUExBVEZPUk0sIFlPVSBBR1JFRSBUTyBCRSBCT1VORCBCWSBUSEUgVEVSTVMgREVTQ1JJQkVEIEhFUkVJTiBBTkQgQUxMIFRFUk1TIElOQ09SUE9SQVRFRCBCWSBSRUZFUkVOQ0UuIElGIFlPVSBETyBOT1QgQUdSRUUgVE8gQUxMIE9GIFRIRVNFIFRFUk1TLCBETyBOT1QgVVNFIFRISVMgSU5URVJORVQgQkFTRUQgUExBVEZPUk0uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjLXN1YmhlYWRpbmdcIj4xLiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO05BVFVSRSBBTkQgQVBQTElDQUJJTElUWSBPRiBURVJNUzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBkb2N1bWVudC9hZ3JlZW1lbnQgaXMgYW4gZWxlY3Ryb25pYyByZWNvcmQgaW4gdGVybXMgb2YgSW5mb3JtYXRpb24gVGVjaG5vbG9neSBBY3QsIDIwMDAgYW5kIGdlbmVyYXRlZCBieSBhIGNvbXB1dGVyIHN5c3RlbSBhbmQgZG9lcyBub3QgcmVxdWlyZSBhbnkgcGh5c2ljYWwgb3IgZGlnaXRhbCBzaWduYXR1cmVzLiBUaGlzIGRvY3VtZW50IGlzIHB1Ymxpc2hlZCBpbiBhY2NvcmRhbmNlIHdpdGggdGhlIHByb3Zpc2lvbnMgb2YgUnVsZSAzIG9mIHRoZSBJbmZvcm1hdGlvbiBUZWNobm9sb2d5IChJbnRlcm1lZGlhcmllcyBndWlkZWxpbmVzKSAyMDExLCB0aGF0IHByb3ZpZGVzIGZvciB0aGUgZHVlIGRpbGlnZW5jZSB0byBiZSBleGVyY2lzZWQgZm9yIHRoZSBhY2Nlc3Mgb3IgdXNhZ2Ugb2YgdGhpcyBXZWJzaXRlLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBhY2Nlc3Mgb3IgdXNlIG9mIHRoZSBXZWJzaXRlLCB0cmFuc2FjdGlvbiBvbiB0aGUgV2Vic2l0ZSBhbmQgdXNlIG9mIFNlcnZpY2VzIChhcyBkZWZpbmVkIGhlcmVpbiBiZWxvdykgaG9zdGVkIG9yIG1hbmFnZWQgcmVtb3RlbHkgdGhyb3VnaCB0aGUgV2Vic2l0ZSwgYXJlIGdvdmVybmVkIGJ5IHRoZSBmb2xsb3dpbmcgdGVybXMgYW5kIGNvbmRpdGlvbnMgKGhlcmVpbmFmdGVyIHJlZmVycmVkIHRvIGFzIHRoZSBcIlRlcm1zIG9mIFVzZeKAnSksIGluY2x1ZGluZyB0aGUgYXBwbGljYWJsZSBwb2xpY2llcyB3aGljaCBhcmUgaW5jb3Jwb3JhdGVkIGhlcmVpbiBieSB3YXkgb2YgcmVmZXJlbmNlLCBhcyBtYXkgYmUgcG9zdGVkIGVsc2V3aGVyZSBvbiB0aGUgV2Vic2l0ZS4gVGhlc2UgVGVybXMgb2YgVXNlIGNvbnN0aXR1dGVzIGEgbGVnYWwgYW5kIGJpbmRpbmcgY29udHJhY3QgYmV0d2VlbiB5b3UgKGhlcmVpbmFmdGVyIHJlZmVycmVkIHRvIGFzIOKAnFlvdeKAnSBvciDigJxZb3Vy4oCdIG9yIHRoZSDigJxVc2Vy4oCdKSBvbiBvbmUgcGFydCBhbmQgQ29tcGFueSBvbiB0aGUgb3RoZXIgUGFydC5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJ5IGFjY2Vzc2luZywgYnJvd3Npbmcgb3IgaW4gYW55IHdheSB0cmFuc2FjdGluZyBvbiB0aGUgV2Vic2l0ZSwgb3IgYXZhaWxpbmcgYW55IFNlcnZpY2VzLCBZb3VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmlmeSBZb3VyIGFncmVlbWVudCB0byBiZSBib3VuZCBieSB0aGVzZSBUZXJtcyBvZiBVc2UuIEZ1cnRoZXIsIGJ5IGltcGxpZWRseSBvciBleHByZXNzbHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0aW5nIHRoZXNlIFRlcm1zIG9mIFVzZSwgeW91IGFsc28gYWNjZXB0IGFuZCBhZ3JlZSB0byBiZSBib3VuZCBieSBPdXIgcG9saWNpZXMsIGluY2x1ZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgUHJpdmFjeSBQb2xpY3ksIGFueSBkaXNjbGFpbWVycyBhbmQgc3VjaCBvdGhlciBydWxlcywgZ3VpZGVsaW5lcywgcG9saWNpZXMsIHRlcm1zIGFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25zIGFzIGFyZSByZWxldmFudCB1bmRlciB0aGUgYXBwbGljYWJsZSBsYXcocykgaW4gSW5kaWEgZm9yIHRoZSBwdXJwb3NlcyBvZiBhY2Nlc3NpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyb3dzaW5nIG9yIHRyYW5zYWN0aW5nIG9uIHRoZSBXZWJzaXRlLCBvciBhdmFpbGluZyBhbnkgb2YgdGhlIFNlcnZpY2VzLCBzaGFsbCBiZSBkZWVtZWQgdG8gYmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jb3Jwb3JhdGVkIGludG8sIGFuZCBjb25zaWRlcmVkIGFzIHBhcnQgYW5kIHBhcmNlbCBvZiB0aGVzZSBUZXJtcyBvZiBVc2UuIEhvd2V2ZXIsIGlmIFlvdVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZSBhd2F5IGZyb20gdGhlIFdlYnNpdGUgdG8gYSB0aGlyZCBwYXJ0eSB3ZWJzaXRlLCBZb3UgbWF5IGJlIHN1YmplY3QgdG8gYWx0ZXJuYXRpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YgdXNlIGFuZCBwcml2YWN5IHBvbGljeSwgYXMgbWF5IGJlIHNwZWNpZmllZCBvbiBzdWNoIHdlYnNpdGUuIEluIHN1Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQsIHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucyBvZiB1c2UgYW5kIHByaXZhY3kgcG9saWN5IGFwcGxpY2FibGUgdG8gdGhhdCB3ZWJzaXRlIHdpbGwgZ292ZXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgdXNlIG9mIHRoYXQgd2Vic2l0ZS5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJlIHN1cmUgdG8gcmV0dXJuIHRvIHRoaXMgcGFnZSBwZXJpb2RpY2FsbHkgdG8gcmV2aWV3IHRoZSBtb3N0IGN1cnJlbnQgdmVyc2lvbiBvZiB0aGUgVE9VLiBXZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNlcnZlIHRoZSByaWdodCBhdCBhbnkgdGltZSwgYXQgb3VyIHNvbGUgZGlzY3JldGlvbiwgdG8gY2hhbmdlIG9yIG90aGVyd2lzZSBtb2RpZnkgdGhlIFRPVVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRob3V0IHByaW9yIG5vdGljZSwgYW5kIHlvdXIgY29udGludWVkIGFjY2VzcyBvciB1c2Ugb2YgdGhpcyBXZWJzaXRlIHNpZ25pZmllcyB5b3VyIGFjY2VwdGFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2YgdGhlIHVwZGF0ZWQgb3IgbW9kaWZpZWQgVE9VLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlc2UgVGVybXMgb2YgVXNlIGFyZSBhIGJpbmRpbmcgY29udHJhY3QgYW5kIGFwcGxpZXMgdG8geW91IHdoZXRoZXIgeW91IGFyZSBhIHBhdGllbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpcy9oZXIgcmVwcmVzZW50YXRpdmVzIG9yIGFmZmlsaWF0ZXMsIHNlYXJjaGluZyBmb3IgTWVkaWNhbCBFeHBlcnRzIG9yIFRoaXJkIFBhcnR5IGhlYWx0aCBjYXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2UgcHJvdmlkZXJzIChzdWNoIGFzIGRvY3RvcnMsIGhvc3BpdGFscywgZGlhZ25vc3RpYyBjZW50cmVzIG9yIGNsaW5pY3MsIGxhYm9yYXRvcmllcywgZXRjKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdWdoIHRoZSBXZWJzaXRlKOKAnEVuZC1Vc2Vy4oCdLCDigJx5b3XigJ0gb3Ig4oCcVXNlcuKAnSk7IG9yIG90aGVyd2lzZSBhIHVzZXIvdmlzaXRvciBvZiB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2Vic2l0ZSjigJx5b3XigJ0gb3Ig4oCcVXNlcuKAnSkuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzYy1zdWJoZWFkaW5nXCI+Mi4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtTRVJWSUNFUzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiPlRoZSBXZWJzaXRlIGlzIGEgcGxhdGZvcm0gdGhhdCBmYWNpbGl0YXRlcyAoaSkgZGlhZ25vc3RpYyBzZXJ2aWNlcyBiZWluZyBvZmZlcmVkIGJ5IHZhcmlvdXMgdGhpcmQgcGFydHkgZGlhZ25vc3RpYyBjZW50cmVzIG9yIG90aGVyIGhlYWx0aCBjYXJlIHNlcnZpY2UgcHJvdmlkZXJzIChzdWNoIGFzIGRvY3RvcnMsIGhvc3BpdGFscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWdub3N0aWMgY2VudHJlcyBvciBjbGluaWNzLCBsYWJvcmF0b3JpZXMsIGV0YykgKOKAnFRoaXJkIFBhcnR5IExhYnMvIFRoaXJkIFBhcnR5IHNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyc+KAnSk7IChpaSkgb25saW5lIG1lZGljYWwgY29uc3VsdGFuY3kgc2VydmljZXMvIHNlY29uZCBvcGluaW9uIGJlaW5nIG9mZmVyZWQgYnkgdGhpcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnR5IGluZGVwZW5kZW50IGRvY3RvcnMgKOKAnE1lZGljYWwgRXhwZXJ0c+KAnSk7IGFuZCAoaWlpKSBvbmxpbmUgYWR2ZXJ0aXNlbWVudHMgb2YgdmFyaW91c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BvbnNvcnMgYWR2ZXJ0aXNpbmcgYW5kIG1hcmtldGluZyB0aGVpciBvd24gZ29vZCBhbmQgc2VydmljZXMgKOKAnFRoaXJkIFBhcnR5IEFkdmVydGlzZXJz4oCdKS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXJkIFBhcnR5IExhYnMsIE1lZGljYWwgRXhwZXJ0cyBhbmQgdGhlIFRoaXJkIFBhcnR5IEFkdmVydGlzZXJzIGFyZSBjb2xsZWN0aXZlbHkgcmVmZXJyZWQgdG8gYXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSDigJxUaGlyZCBQYXJ0eSBTZXJ2aWNlIFByb3ZpZGVyc+KAnS4gRnVydGhlciB0aGUgV2Vic2l0ZSBhbHNvIHNlcnZlcyBhcyBhbiBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhdGZvcm0gcHJvdmlkaW5nIGhlYWx0aCBhbmQgd2VsbG5lc3MgcmVsYXRlZCBpbmZvcm1hdGlvbiB0byB0aGUgVXNlcnMgYWNjZXNzaW5nIHRoZSBXZWJzaXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoVGhlIHNlcnZpY2VzIG9mIFRoaXJkIFBhcnR5IFNlcnZpY2VzIFByb3ZpZGVyIGFuZCB0aGUgaW5mb3JtYXRpb24gc2VydmljZXMgcHJvdmlkZWQgdGhyb3VnaCBvdXIgV2Vic2l0ZSBpcyBjb2xsZWN0aXZlbHkgcmVmZXJyZWQgdG8gYXMgdGhlIOKAnFNlcnZpY2Vz4oCdKS5cbiAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBhcnJhbmdlbWVudCBiZXR3ZWVuIHRoZSBUaGlyZCBQYXJ0eSBTZXJ2aWNlIFByb3ZpZGVycywgWW91IGFuZCBVcyBzaGFsbCBiZSBnb3Zlcm5lZCBpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY29yZGFuY2Ugd2l0aCB0aGVzZSBUZXJtcyBvZiBVc2UuIFRoZSBTZXJ2aWNlcyB3b3VsZCBiZSBtYWRlIGF2YWlsYWJsZSB0byBzdWNoIG5hdHVyYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25zIHdobyBoYXZlIGFncmVlZCB0byB1c2UgdGhlIFdlYnNpdGUgYWZ0ZXIgb2J0YWluaW5nIGR1ZSByZWdpc3RyYXRpb24sIGluIGFjY29yZGFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoIHRoZSBwcm9jZWR1cmUgYXMgZGV0ZXJtaW5lZCBieSBVcywgZnJvbSB0aW1lIHRvIHRpbWUsIChyZWZlcnJlZCB0byBhcyDigJxZb3XigJ0gb3Ig4oCcWW91cuKAnSBvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKAnFlvdXJzZWxm4oCdIG9yIOKAnFVzZXLigJ0sIHdoaWNoIHRlcm1zIHNoYWxsIGFsc28gaW5jbHVkZSBuYXR1cmFsIHBlcnNvbnMgd2hvIGFyZSBhY2Nlc3NpbmcgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2Vic2l0ZSBtZXJlbHkgYXMgdmlzaXRvcnMpLiBUaGUgU2VydmljZXMgYXJlIG9mZmVyZWQgdG8gWW91IHRocm91Z2ggdmFyaW91cyBtb2RlcyB3aGljaCBzaGFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGUgaXNzdWUgb2YgZGlzY291bnQgY291cG9ucyBhbmQgdm91Y2hlcnMgdGhhdCBjYW4gYmUgcmVkZWVtZWQgZm9yIHZhcmlvdXMgZ29vZHMvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZXMgb2ZmZXJlZCBmb3Igc2FsZSBieSByZWxldmFudCBUaGlyZCBQYXJ0eSBTZXJ2aWNlIFByb3ZpZGVycy4gVG8gZmFjaWxpdGF0ZSB0aGUgcmVsYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZXR3ZWVuIFlvdSBhbmQgdGhlIFRoaXJkIFBhcnR5IFNlcnZpY2UgUHJvdmlkZXJzIHRocm91Z2ggdGhlIFdlYnNpdGUsIGRvY3ByaW1lIHNoYWxsIHNlbmQgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3UgKHByb21vdGlvbmFsIGNvbnRlbnQgaW5jbHVkaW5nIGJ1dCBub3QgbGltaXRlZCB0byBlLW1haWxlcnMsIG5vdGlmaWNhdGlvbnMgYW5kIG1lc3NhZ2VzKS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3UgYWdyZWUgYW5kIGFja25vd2xlZGdlIHRoYXQgdGhlIFdlYnNpdGUgaXMgYSBwbGF0Zm9ybSB0aGF0IFlvdSBhbmQgVGhpcmQgUGFydHkgU2VydmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb3ZpZGVycyB1dGlsaXplIHRvIG1lZXQgYW5kIGludGVyYWN0IHdpdGggYW5vdGhlciBmb3IgdGhlaXIgdHJhbnNhY3Rpb25zLiBkb2NwcmltZSBpcyBub3QgYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Fubm90IGJlIGEgcGFydHkgdG8gb3Igc2F2ZSBhcyBleGNlcHQgYXMgbWF5IGJlIHByb3ZpZGVkIGluIHRoZXNlIFRlcm1zIG9mIFVzZSwgY29udHJvbCBpbiBhbnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYW5uZXIsIGFueSB0cmFuc2FjdGlvbiBiZXR3ZWVuIFlvdSBhbmQgdGhlIFRoaXJkIFBhcnR5IFNlcnZpY2UgUHJvdmlkZXJzLiBBcyBhIGNvbmRpdGlvbiBvZiBZb3VyIHVzZSBvZiBhbmQgYWNjZXNzIHRvIHRoZSBkaWFnbm9zdGljIHNlcnZpY2VzIHByb3ZpZGVkIHRocm91Z2ggdGhlIFdlYnNpdGUgYW5kIFlvdXIgYWNjZXB0YW5jZSBvZiB0aGVzZSBUZXJtcyBvZiBVc2UsIFlvdSBhcmUgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIHJ1bGVzL2d1aWRlbGluZXM6XG4gICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3ByaW1lIHByb3ZpZGVzIFNlcnZpY2VzIHRocm91Z2ggdGhlIFdlYnNpdGUgYXMgYSBtYXJrZXRwbGFjZSBhbmQgZmFjaWxpdGF0ZXMgdGhlIFVzZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGF2YWlsIGRpYWdub3N0aWMgdGVzdC8gcGFja2FnZXMgZmFjaWxpdGllcyBvZmZlcmVkIGJ5IFRoaXJkIFBhcnR5IExhYnMgdGhyb3VnaCB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2Vic2l0ZS4gZG9jcHJpbWUgaXMgbm90IGFuZCBzaGFsbCBub3QgYmUgcmVzcG9uc2libGUgZm9yIGFueSBzYW1wbGUgY29sbGVjdGVkLCB0ZXN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kdWN0ZWQgYW5kIHJlcG9ydHMgZ2VuZXJhdGVkIGJ5IHRoZSBUaGlyZCBQYXJ0eSBMYWJzIGFuZCBkb2VzIG5vdCBkZWFsIHdpdGggYW55IG9mXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXJkIFBhcnR5IExhYnPigJkgY2xpZW50IG9yIHBhdGllbnQgbWFuYWdlZCBieSBzdWNoIFRoaXJkIFBhcnR5IExhYnMgdGhyb3VnaCB0aGUgV2Vic2l0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgb25seSBwcm92aWRlcyBmYWNpbGl0YXRpb24gU2VydmljZXMgdG8gdGhlIFVzZXJzIHRocm91Z2ggdGhlIFdlYnNpdGUuIFVzZSBvZiB0aGUgV2Vic2l0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXkgcmVxdWlyZSB0aGUgVGhpcmQgUGFydHkgTGFicyB0byB1c2Ugc29mdHdhcmUgYW5kIHRoZSBUaGlyZCBQYXJ0eSBoZWFsdGggY2FyZSBzZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVycyBoYXZlIHRvIGVuc3VyZSB0aGUgcHJvY3VyZW1lbnQgb2Ygc3VjaCBzb2Z0d2FyZSBmcm9tIHRoZSBjb25jZXJuZWQgcHJvdmlkZXJzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyIGFuZCB0aGUgVGhpcmQgUGFydHkgTGFicyBhZ3JlZSB0byB1c2UgdGhlIFdlYnNpdGUgYW5kIHRoZSBtYXRlcmlhbHMgcHJvdmlkZWQgdGhlcmVpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmx5IGZvciBwdXJwb3NlcyB0aGF0IGFyZSBwZXJtaXR0ZWQgYnk6IChhKSB0aGVzZSBUZXJtcyBvZiBVc2U7IGFuZCAoYikgYW55IGFwcGxpY2FibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF3KHMpLCByZWd1bGF0aW9uIG9yIGdlbmVyYWxseSBhY2NlcHRlZCBwcmFjdGljZXMgb3IgZ3VpZGVsaW5lcyBpbiB0aGUgcmVsZXZhbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVyaXNkaWN0aW9ucy5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk5PIERPQ1RPUi1QQVRJRU5UIFJFTEFUSU9OU0hJUDo8L3NwYW4+IGRvY3ByaW1lIGRvZXMgbm90IHJlcGxhY2UgWW91ciByZWxhdGlvbnNoaXAgd2l0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaHlzaWNpYW4gb3IgaGVhbHRoY2FyZSBwcm92aWRlci4gVGhlIGluZm9ybWF0aW9uIGludGVycHJldGVkU0hPVUxEIE5PVCBiZSByZWxpZWQgdXBvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcyBhIHN1YnN0aXR1dGUgZm9yIHNvdW5kIHByb2Zlc3Npb25hbCBtZWRpY2FsIGFkdmljZSwgZXZhbHVhdGlvbiBvciBjYXJlIGZyb20gWW91clxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaHlzaWNpYW4gb3Igb3RoZXIgcXVhbGlmaWVkIGhlYWx0aGNhcmUgcHJvdmlkZXIuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3UgYWNrbm93bGVkZ2UgdGhhdCB0aGUgTWVkaWNhbCBFeHBlcnRzIGVtcGFuZWxlZCB3aXRoIFVzIGFyZSBpbmRlcGVuZGVudCBjb250cmFjdG9yc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgdGhlcmVieSBkb2NwcmltZSBoYXMgYW4gaW5kZXBlbmRlbnQgY29udHJhY3RvciByZWxhdGlvbnNoaXAgd2l0aCBzdWNoIE1lZGljYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXhwZXJ0cyBhbmQgdGhlcmVmb3JlIGluIG5vIGV2ZW50IGRvY3ByaW1lIHdpbGwgYmUgZGlyZWN0bHkgb3IgdmljYXJpb3VzbHkgbGlhYmxlIGZvciBhbnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWR2aWNlIG9yIG1lZGljYWwgY29uc3VsdGFuY3kgb3IgYW55IGxvc3MgYXJpc2luZyB0aGVyZWZyb20gdGhhdCB0aGUgTWVkaWNhbCBFeHBlcnRzIG1heVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlIHRvIFlvdSBvciBZb3UgbWF5IGF2YWlsIGFzIHBhcnQgb2YgdGhlIFNlcnZpY2VzLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91IGFja25vd2xlZGdlIHRoYXQgdGhlIGUtcHJlc2NyaXB0aW9uIHdoaWNoIG1heSBiZSBpc3N1ZWQgYnkgdGhlIE1lZGljYWwgRXhwZXJ0KHMpIHdpbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmUgYSB2YWxpZCBwcmVzY3JpcHRpb24gdW5kZXIgYXBwbGljYWJsZSBsYXcocykgb2YgSW5kaWEgYW5kIG1heSBiZSB1c2VkIGZvciBkaXNwZW5zYXRpb24gb2ZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWNpbmVzIGJ5IGFueSBwaGFybWFjaXN0IGluIEluZGlhLiBZb3UgZnVydGhlciBhZ3JlZSBhbmQgYWNrbm93bGVkZ2UgdGhhdCBpZiBhbnkgZS1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2NyaXB0aW9uIHdoaWNoIGlzIHByb2Nlc3NlZCB0aHJvdWdoIHRoZSBXZWJzaXRlICh3aGV0aGVyIG9yaWdpbmFsIG9yIHNjYW5uZWQgY29weSBvZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgb3JpZ2luYWwgcHJlc2NyaXB0aW9uKSBmb3IgcHJvY3VyaW5nIG1lZGljaW5lcyBpcyBvbmx5IGJ5IHRoZSBNZWRpY2FsIEV4cGVydHMsIGFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2NwcmltZSB3aWxsIG9ubHkgYWN0IGFzIGFuIGFnZ3JlZ2F0b3IgYW5kIGFzc3VtZSBubyByZXNwb25zaWJpbGl0eSBhbmQvIG9yIGxpYWJpbGl0eSBpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxhdGlvbiB0byBzdWNoIGUtcHJlc2NyaXB0aW9uLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jcHJpbWUgaXMgZGVzaWduZWQgdG8gc3VwcG9ydCB0aGUgaGVhbHRoIGRlY2lzaW9ucyBhbmQgY2hvaWNlcyB0aGF0IFlvdSBtYWtlLiBUaGVzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpc2lvbnMgYW5kIGNob2ljZXMgYXJlIFlvdXJzLCBhbmQgV2UgYmVsaWV2ZSB0aGF0IFlvdSwgaW4gY29ubmVjdGlvbiB3aXRoIHRoZSBhZHZpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91IHJlY2VpdmUgZnJvbSBZb3VyIGRvY3RvciBvciBvdGhlciBwcm9mZXNzaW9uYWwgaGVhbHRoY2FyZSBwcm92aWRlciwgYXJlIHRoZSBiZXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2lzaW9uIG1ha2VyIGFib3V0IFlvdXIgaGVhbHRoLiBXZSBjYW5ub3QgbWFrZSBkZWNpc2lvbnMgZm9yIHlvdS4gSG93ZXZlciwgd2hhdCBXZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW4gZG8gaXMgaGVscCBZb3UgZmluZCBnb29kIGhlYWx0aCBpbmZvcm1hdGlvbiBhbmQgY29ubmVjdCB3aXRoIGRvY3RvcnMgZm9yIGluLXBlcnNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvcm1hdGlvbi4gT24gZG9jcHJpbWUgWW91IGNhbiBhc2sgYW5kIGZpbmQgaW5mb3JtYXRpb25hbCBxdWVzdGlvbnMgYW5kIHJlbGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWR1Y2F0aW9uYWwgYW5zd2VycyBieSBNZWRpY2FsIEV4cGVydHMuIFRoZSBXZWJzaXRlIGlzIG5vdCBhIHBsYWNlIGZvciB0aGUgcHJhY3RpY2Ugb2ZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWNpbmUsIGJ1dCBNZWRpY2FsIEV4cGVydHMgb24gdGhlIFdlYnNpdGUgY2FuIGJlIGEgcmVzb3VyY2UgZm9yIHJlbGlhYmxlLCByZWxldmFudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmFsIGhlYWx0aCBpbmZvcm1hdGlvbi5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBTZXJ2aWNlcyBzaG91bGQgbm90IGJlIGRlcGVuZGVkIHVwb24gYW5kIHNob3VsZCBub3QgYmUgdHJlYXRlZCBhcyBhIHJlcGxhY2VtZW50IGZvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnRhaW5pbmcgY29uc3VsdGF0aW9uIGZvciBkaXNlYXNlcyBhcyB0aGUgY29uc3VsdGF0aW9uIHByb3ZpZGVkIHRocm91Z2ggdGhlIFdlYnNpdGUgaXMgZ2VuZXJpYyBpbiB0aGUgYXBwcm9hY2ggYW5kIHNoYWxsIG5vdCBhbmQgY2Fubm90IGFjdCBhcyBhIHN1YnN0aXR1dGUgZm9yIHBoeXNpY2FsIGNvbnN1bHRhdGlvbiB3aXRoIGEgZG9jdG9yLiBBbHNvIHRoZSBDb25zdWx0YXRpb25zIHByb3ZpZGVkIHRocm91Z2ggdGhlIFdlYnNpdGUgbWF5IG5vdCBiZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFnbm9zdGljIGluIG5hdHVyZS5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlIGRvIG5vdCByZWNvbW1lbmQgb3IgZW5kb3JzZSBhbnkgc3BlY2lmaWMgTWVkaWNhbCBFeHBlcnQocyksIHRlc3RzLCBwcm9kdWN0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2VkdXJlcywgb3BpbmlvbnMsIG9yIG90aGVyIGluZm9ybWF0aW9uIHRoYXQgbWF5IGJlIG1lbnRpb25lZCBvbiB0aGUgV2Vic2l0ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVsaWFuY2Ugb24gYW55IGluZm9ybWF0aW9uIHByb3ZpZGVkIG9uIHRoZSBXZWJzaXRlIGlzIHNvbGVseSBhdCBZb3VyIG93biByaXNrLiBJbiBjYXNlIG9mXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFueSBtZWRpY2FsIGVtZXJnZW5jeSwga2luZGx5IGNvbnRhY3QgWW91ciBuZWFyZXN0IGRvY3Rvci9ob3NwaXRhbCBvciBhbnkgcmVsYXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwbGluZS5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBTZXJ2aWNlcyBhcmUgbm90IGZvciB1c2UgaW4gbWVkaWNhbCBlbWVyZ2VuY2llcyBvciBmb3IgY3JpdGljYWwgaGVhbHRoIHNpdHVhdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyaW5nIHByb21wdCBtZWRpY2FsIGF0dGVudGlvbi4gVGhlIFNlcnZpY2VzIGFyZSBub3QgaW50ZW5kZWQgdG8gYmUgcmVhbC10aW1lIGFuZCBtYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90IGJlIHRoZSBiZXN0IHNvbHV0aW9uIHdoZW4gYSBmYWNlLXRvLWZhY2UgY29uc3VsdGF0aW9uIGlzIGEgbXVzdCBhbmQgdGhlcmVmb3JlIFdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9uZ2x5IGRpc2NvdXJhZ2UgYW55IGRlbGF5IGluIHNlZWtpbmcgYWR2aWNlIGZyb20gWW91ciBkb2N0b3Igb24gYWNjb3VudCBvZiBzb21ldGhpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdCBZb3UgbWF5IGhhdmUgaGVhcmQvdmlld2VkIG9uIHRoZSBXZWJzaXRlLiBZb3UgdGFrZSBmdWxsIHJlc3BvbnNpYmlsaXR5IGZvciBlbnN1cmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0IHRoZSBpbmZvcm1hdGlvbiBzdWJtaXR0ZWQgaXMgYWNjdXJhdGUgYW5kIGRvY3ByaW1lIHNoYWxsIG5vdCBtYWtlIGFueSBlZmZvcnQgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUgYW55IGluZm9ybWF0aW9uIHByb3ZpZGVkIGJ5IFlvdSBmb3IgdXNpbmcgdGhlIFNlcnZpY2VzIHdpdGggcmVzcGVjdCB0byBjb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3JyZWN0bmVzcyBvciB1c2FiaWxpdHkuIFdlLCB3aXRoIGFuIGludGVudGlvbiB0byBwcm92aWRlIHRoZSBiZXN0IHNlcnZpY2VzIHBvc3NpYmxlIGNvdWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzayBZb3UgdG8gc2hhcmUgbW9yZSBpbmZvcm1hdGlvbiBhcyBhbmQgd2hlbiBuZWVkZWQuIFRoZSBTZXJ2aWNlcyBzaG91bGQgbm90IGJlIHVzZWQgZm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtZXJnZW5jeSBhcHBvaW50bWVudCBwdXJwb3Nlcy5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBvcGluaW9ucywgc3RhdGVtZW50cywgYW5zd2VycyBhbmQgdGVsZS1jb25zdWx0YXRpb25zIChjb2xsZWN0aXZlbHkg4oCcQ29uc3VsdGF0aW9u4oCdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlZCBieSB0aGUgTWVkaWNhbCBFeHBlcnRzIHRocm91Z2ggdGhlIFdlYnNpdGUgYXJlIHNvbGVseSB0aGUgaW5kaXZpZHVhbCBhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXBlbmRlbnQgb3BpbmlvbnMgYW5kIHN0YXRlbWVudHMgb2Ygc3VjaCBNZWRpY2FsIEV4cGVydHMgYW5kIGRvIG5vdCByZWZsZWN0IHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGluaW9ucyBvZiBkb2NwcmltZSwgaW5jbHVkaW5nIGJ1dCBub3QgbGltaXRlZCB0byBpdHMgb2ZmaWNlcnMsIGRpcmVjdG9ycywgcmVwcmVzZW50YXRpdmVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBpdHMgYWZmaWxpYXRlcy4gZG9jcHJpbWUgZG9lcyBub3QgcmVjb21tZW5kIG9yIGVuZG9yc2UgYW55IHNwZWNpZmljIHRlc3RzLCBwaHlzaWNpYW5zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cywgcHJvY2VkdXJlcywgb3BpbmlvbnMsIG9yIG90aGVyIGluZm9ybWF0aW9uIHRoYXQgbWF5IGJlIG1lbnRpb25lZCBvbiB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2Vic2l0ZS5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBpbmNsdXNpb24gb2YgcHJvZmVzc2lvbmFscywgc3BlY2lhbGlzdHMgYW5kLyBvciBNZWRpY2FsIEV4cGVydHMgb24gdGhlIFdlYnNpdGUgb3IgaW4gYW55XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Zlc3Npb25hbCBkaXJlY3Rvcnkgb24gdGhlIFdlYnNpdGUgZG9lcyBub3QgaW1wbHkgcmVjb21tZW5kYXRpb24gb3IgZW5kb3JzZW1lbnQgb2ZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjaCBzcGVjaWFsaXN0cyBhbmQvIG9yIE1lZGljYWwgRXhwZXJ0cyBub3IgaXMgc3VjaCBpbmZvcm1hdGlvbiBpbnRlbmRlZCBhcyBhIHRvb2wgZm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcmlmeWluZyB0aGUgY3JlZGVudGlhbHMsIHF1YWxpZmljYXRpb25zLCBvciBhYmlsaXRpZXMgb2YgYW55IHNwZWNpYWxpc3RzIGFuZC8gb3IgTWVkaWNhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeHBlcnRzIGNvbnRhaW5lZCB0aGVyZWluLiBTdWNoIGluZm9ybWF0aW9uIGlzIHByb3ZpZGVkIG9uIGFuIOKAmGFzLWlz4oCZIGJhc2lzIGFuZCBkb2NwcmltZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNjbGFpbXMgYWxsIHdhcnJhbnRpZXMsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQsIGluY2x1ZGluZyBidXQgbm90IGxpbWl0ZWQgdG8gdGhlIGltcGxpZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FycmFudGllcyBvZiBtZXJjaGFudGFiaWxpdHkgYW5kIGZpdG5lc3MgZm9yIHBhcnRpY3VsYXIgcHVycG9zZS4gZG9jcHJpbWUgZGlzY2xhaW1zIGFueVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWdhbCBvciBmaW5hbmNpYWwgZXZlbnRzIG9yIG91dGNvbWVzIHJlbGF0ZWQgdG8gdGhlIFNlcnZpY2VzIGF2YWlsZWQgdGhyb3VnaCB0aGUgdXNlIG9mIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWJzaXRlLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jcHJpbWUgbWFrZXMgbm8gd2FycmFudHkgdGhhdCB0aGUgU2VydmljZXMgd2lsbCBtZWV0IFlvdXIgcmVxdWlyZW1lbnRzLCBvciB0aGF0IHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlKHMpIHdpbGwgYmUgdW5pbnRlcnJ1cHRlZCwgdGltZWx5LCBzZWN1cmUsIG9yIGVycm9yIGZyZWUuIFRoaXMgaW5jbHVkZXMgbG9zcyBvZiBkYXRhIG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFueSBzZXJ2aWNlIGludGVycnVwdGlvbiBjYXVzZWQgYnkgZG9jcHJpbWUgZW1wbG95ZWVzIG9yIHJlcHJlc2VudGF0aXZlcy4gZG9jcHJpbWUgaXMgbm90XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpYmxlIGZvciB0cmFuc21pc3Npb24gZXJyb3JzLCBjb3JydXB0aW9uIG9mIGRhdGEuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2NwcmltZSBpcyBmb3IgcGVyc29uYWwgdXNlIGFuZCB0aGUgU2VydmljZXMgYXJlIGZvciBpbmRpdmlkdWFscyB0byB1c2UgZm9yIHN1cHBvcnRpbmcgdGhlaXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyc29uYWwgaGVhbHRoIGRlY2lzaW9ucy4gWW91IG1heSB1c2UgdGhlIFdlYnNpdGUgZm9yIHBlcnNvbmFsLCBidXQgbm90IGZvciBjb21tZXJjaWFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXJwb3Nlcy5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgcmlnaHQgdG8gdXNlIHRoZSBTZXJ2aWNlcyBpcyBub3QgdHJhbnNmZXJhYmxlLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm90d2l0aHN0YW5kaW5nIGFueXRoaW5nIHRvIHRoZSBjb250cmFyeSBjb250YWluZWQgaGVyZWluLCBZb3UgYWxvbmUgc2hhbGwgYmUgbGlhYmxlIGZvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIGRlYWxpbmdzIGFuZCBpbnRlcmFjdGlvbiB3aXRoIHBhdGllbnRzIG9yIE1lZGljYWwgRXhwZXJ0cyAoYXMgdGhlIGNhc2UgbWF5IGJlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWN0ZWQgb3IgbWFuYWdlZCB0aHJvdWdoIHRoZSBXZWJzaXRlIGFuZCBkb2NwcmltZSBzaGFsbCBoYXZlIG5vIGxpYWJpbGl0eSBvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zaWJpbGl0eSBpbiB0aGlzIHJlZ2FyZC4gZG9jcHJpbWUgZG9lcyBub3QgZ3VhcmFudGVlIG9yIG1ha2UgYW55IHJlcHJlc2VudGF0aW9uIHdpdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcGVjdCB0byB0aGUgY29ycmVjdG5lc3MsIGNvbXBsZXRlbmVzcyBvciBhY2N1cmFjeSBvZiB0aGUgaW5mb3JtYXRpb24gb3IgZGV0YWlsIHByb3ZpZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5IHN1Y2ggY2xpZW50LCBwYXRpZW50LCBVc2VyLCBNZWRpY2FsIEV4cGVydHMgb3IgYW55IHRoaXJkIHBhcnR5IHRocm91Z2ggdGhlIFdlYnNpdGUuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgZXhjaGFuZ2VzIGJldHdlZW4gdGhlIE1lZGljYWwgRXhwZXJ0cyBhbmQgdGhlIHBhdGllbnQgdGhyb3VnaCB0aGUgY2hhdCB3aW5kb3cgb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlciB0ZWxlcGhvbmUgKGFzIHRoZSBjYXNlIG1heWJlKSBhbmQgdGhlIGUtcHJlc2NyaXB0aW9uIHdvdWxkIGJlIGFjY2Vzc2libGUgdG8gZG9jcHJpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBwdXJwb3NlcyBvZiBtb25pdG9yaW5nIHRoZSBxdWFsaXR5IG9mIHRoZSBjb25zdWx0YXRpb24uXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2NwcmltZSBtYXksIGF0IGl0cyBzb2xlIGRpc2NyZXRpb24sIHN1c3BlbmQgVXNlcuKAmXMgb3IgTWVkaWNhbCBFeHBlcnTigJlzIGFiaWxpdHkgdG8gdXNlIG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VzcyB0aGUgV2Vic2l0ZSBhdCBhbnkgdGltZSB3aGlsZSBkb2NwcmltZSBpbnZlc3RpZ2F0ZXMgY29tcGxhaW50cyBvciBhbGxlZ2VkIHZpb2xhdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2YgdGhlc2UgVGVybXMgb2YgVXNlLCBvciBmb3IgYW55IG90aGVyIHJlYXNvbi4gZG9jcHJpbWUgaGFzIHRoZSByaWdodCB0byBlZGl0IHByb2ZpbGVzIG9mXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lZGljYWwgRXhwZXJ0cyB0byBtYWtlIHRoZW0gbW9yZSBzdWl0YWJsZSBmb3IgcGF0aWVudC8gVXNlcnMgc2VhcmNoZXMgb24gdGhlIFdlYnNpdGUuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3R3aXRoc3RhbmRpbmcgYW55dGhpbmcgdG8gdGhlIGNvbnRyYXJ5IGNvbnRhaW5lZCBoZXJlaW4sIFVzZXJzIGFsb25lIHNoYWxsIGJlIGxpYWJsZSBmb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVhbGluZ3MgYW5kIGludGVyYWN0aW9uIHdpdGggVGhpcmQgUGFydHkgTGFicyBhbmQgTWVkaWNhbCBFeHBlcnRzIGNvbnRhY3RlZCBvciBtYW5hZ2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm91Z2ggdGhlIFdlYnNpdGUgYW5kIGRvY3ByaW1lIHNoYWxsIGhhdmUgbm8gbGlhYmlsaXR5IG9yIHJlc3BvbnNpYmlsaXR5IGluIHRoaXMgcmVnYXJkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2NwcmltZSBkb2VzIG5vdCBndWFyYW50ZWUgb3IgbWFrZSBhbnkgcmVwcmVzZW50YXRpb24gd2l0aCByZXNwZWN0IHRvIHRoZSBjb3JyZWN0bmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVuZXNzIG9yIGFjY3VyYWN5IG9mIHRoZSB0ZXN0cyBjb25kdWN0ZWQgYW5kIHJlcG9ydHMgZ2VuZXJhdGVkIGJ5IHRoZSBUaGlyZCBQYXJ0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYWJzIG9yIGUtcHJlc2NyaXB0aW9uIHByZXNjcmliZWQgYnkgTWVkaWNhbCBFeHBlcnRzLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jcHJpbWUgbWF5LCBhdCBpdHMgc29sZSBkaXNjcmV0aW9uLCBzdXNwZW5kIFRoaXJkIFBhcnR5IExhYnMgb3IgVXNlcnMgYWJpbGl0eSB0byB1c2Ugb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzIHRoZSBXZWJzaXRlIGF0IGFueSB0aW1lIHdoaWxlIGRvY3ByaW1lIGludmVzdGlnYXRlcyBjb21wbGFpbnRzIG9yIGFsbGVnZWQgdmlvbGF0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZiB0aGVzZSBUZXJtcyBvZiBVc2UsIG9yIGZvciBhbnkgb3RoZXIgcmVhc29uLiBkb2NwcmltZSBoYXMgdGhlIHJpZ2h0IHRvIGVkaXQgcHJvZmlsZXMgb2ZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcmQgUGFydHkgTGFicyB0byBtYWtlIHRoZW0gbW9yZSBzdWl0YWJsZSBmb3IgcGFja2FnZSBzZWFyY2hlcyBvbiB0aGUgV2Vic2l0ZS4gSWYgVGhpcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFydHkgTGFicyBhbmQvIG9yIFVzZXJzIGZpbmQgYW55IHdyb25nIGluZm9ybWF0aW9uIG9uIHRoZSBXZWJzaXRlIGluIHJlbGF0aW9uIHRvIHN1Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcmQgUGFydHkgTGFicyBhbmQvIG9yIFVzZXIsIHRoZXkgY2FuIGNvcnJlY3QgaXQgdGhlbXNlbHZlcyBvciBjb250YWN0IGRvY3ByaW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltbWVkaWF0ZWx5IGZvciBzdWNoIGNvcnJlY3Rpb25zLiBkb2NwcmltZSBzaGFsbCBoYXZlIG5vIGxpYWJpbGl0eSBvciByZXNwb25zaWJpbGl0eSBpbiB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2FyZC5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjLXN1YmhlYWRpbmdcIj4zLiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO0VMSUdJQklMSVRZPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcyBhIGNvbmRpdGlvbiB0byBZb3VyIHVzZSBvZiB0aGUgV2Vic2l0ZSwgWW91IG11c3QgYmUgMTggKGVpZ2h0ZWVuKSB5ZWFycyBvZiBhZ2Ugb3Igb2xkZXIgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlIG9yIHZpc2l0IHRoZSBXZWJzaXRlIGluIGFueSBtYW5uZXIuIEJ5IHZpc2l0aW5nIHRoZSBXZWJzaXRlIG9yIGFjY2VwdGluZyB0aGVzZSBUZXJtcyBvZiBVc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdSByZXByZXNlbnQgYW5kIHdhcnJhbnQgdG8gZG9jcHJpbWUgdGhhdCBZb3UgYXJlIDE4IChlaWdodGVlbikgeWVhcnMgb2YgYWdlIG9yIG9sZGVyLCBhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdCBZb3UgaGF2ZSB0aGUgcmlnaHQsIGF1dGhvcml0eSBhbmQgY2FwYWNpdHkgdG8gdXNlIHRoZSBXZWJzaXRlIGFuZCBhZ3JlZSB0byBhbmQgYWJpZGUgYnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlc2UgVGVybXMgb2YgVXNlLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9yIHRoZSBwdXJwb3NlcyBvZiBhdmFpbGluZyB0aGUgU2VydmljZXMgYW5kL29yIHRyYW5zYWN0aW5nIHdpdGggdGhlIFRoaXJkIFBhcnR5IFNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvdmlkZXJzIHRocm91Z2ggdGhlIFdlYnNpdGUsIFlvdSBhcmUgcmVxdWlyZWQgdG8gb2J0YWluIHJlZ2lzdHJhdGlvbiwgaW4gYWNjb3JkYW5jZSB3aXRoIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZWR1cmUgZXN0YWJsaXNoZWQgYnkgZG9jcHJpbWUgaW4gdGhpcyByZWdhcmQuIEFzIHBhcnQgb2YgdGhlIHJlZ2lzdHJhdGlvbiBwcm9jZXNzLCBkb2NwcmltZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXkgY29sbGVjdCB0aGUgZm9sbG93aW5nIHBlcnNvbmFsIGluZm9ybWF0aW9uIGZyb20gWW91OlxuICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cInN1Yi1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmFtZTtcbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlciBJRDtcbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW1haWwgYWRkcmVzcztcbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkcmVzcyAoaW5jbHVkaW5nIGNvdW50cnkgYW5kIFpJUC8gcG9zdGFsIGNvZGUpO1xuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZW5kZXI7XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFnZTtcbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGhvbmUgbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIGFuZCBZb3VyIGZhbWlseeKAmSBtZWRpY2FsIGhpc3Rvcnk7XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFueSBvdGhlciBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgcmVnaXN0cmF0aW9uIG9uIG9yIHVzZS8gYWNjZXNzIG9mIHRoZSBXZWJzaXRlIGlzIG9ubHkgYXZhaWxhYmxlIHRvIG5hdHVyYWwgcGVyc29ucywgb3RoZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhbiB0aG9zZSB3aG8gYXJlIOKAmGluY29tcGV0ZW50IHRvIGNvbnRyYWN04oCZIHVuZGVyIHRoZSBDb250cmFjdCBBY3QuIFRoYXQgaXMsIHBlcnNvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkaW5nIG1pbm9ycywgdW4tZGlzY2hhcmdlZCBpbnNvbHZlbnRzIGV0Yy4gYXJlIG5vdCBlbGlnaWJsZSB0byByZWdpc3RlciBvbiwgb3IgdXNlLyBhY2Nlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIFdlYnNpdGUuIEJ5IHJlZ2lzdGVyaW5nLCBhY2Nlc3Npbmcgb3IgdXNpbmcgdGhlIFdlYnNpdGUsIFlvdSBhY2NlcHQgdGhlIHRlcm1zIG9mIHRoZXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlcm1zIG9mIFVzZSBhbmQgcmVwcmVzZW50IGFuZCB3YXJyYW50IHRvIGRvY3ByaW1lIHRoYXQgeW91IGFyZSDigJhjb21wZXRlbnQgdG8gY29udHJhY3TigJlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXIgdGhlIENvbnRyYWN0IEFjdCBhbmQgaGF2ZSB0aGUgcmlnaHQsIGF1dGhvcml0eSBhbmQgY2FwYWNpdHkgdG8gdXNlIHRoZSBXZWJzaXRlIGFuZCBhZ3JlZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhbmQgYWJpZGUgYnkgdGhlc2UgVGVybXMgb2YgVXNlLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQSByZWdpc3RlcmVkIGlkIGNhbiBvbmx5IGJlIHV0aWxpemVkIGJ5IHRoZSBwZXJzb24gd2hvc2UgZGV0YWlscyBoYXZlIGJlZW4gcHJvdmlkZWQgYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3ByaW1lIGRvZXMgbm90IHBlcm1pdCBtdWx0aXBsZSBwZXJzb25zIHRvIHNoYXJlIGEgc2luZ2xlIGxvZyBpbi8gcmVnaXN0cmF0aW9uIGlkLiBIb3dldmVyLCBhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWQgdXNlciwgYmVpbmcgYWxzbyBhIHBhcmVudCBvciBsZWdhbCBndWFyZGlhbiBvZiBhIHBlcnNvbiDigJhpbmNvbXBldGVudCB0byBjb250cmFjdOKAmVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNoIGFzIG1pbm9ycyBvciBwZXJzb25zIHdpdGggdW5zb3VuZCBtaW5kLCB3b3VsZCBiZSBwZXJtaXR0ZWQgdG8gYWNjZXNzIGFuZCB1c2UgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlYnNpdGUgZm9yIHRoZSBwdXJwb3NlcyBvZiBwcm9jdXJpbmcgdGhlIFNlcnZpY2VzLCBvbiBiZWhhbGYgb2Ygc3VjaCBwZXJzb25zLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3JnYW5pemF0aW9ucywgY29tcGFuaWVzLCBhbmQgYnVzaW5lc3NlcyBtYXkgbm90IGJlY29tZSByZWdpc3RlcmVkIG1lbWJlcnMgb24gdGhlIFdlYnNpdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3IgdXNlIHRoZSBXZWJzaXRlIGFzIGluZGl2aWR1YWwgbWVtYmVycy5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjLXN1YmhlYWRpbmdcIj40LiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO1lPVVIgQUNDT1VOVDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiPllvdSBhZ3JlZSBhbmQgYWNrbm93bGVkZ2UgdGhhdCBZb3Ugd291bGQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGUgYWNjdXJhdGUsIHRydXRoZnVsLCBjdXJyZW50IGFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZSBpbmZvcm1hdGlvbiB3aGVuIGNyZWF0aW5nIFlvdXIgYWNjb3VudCBhbmQgaW4gYWxsIFlvdXIgZGVhbGluZ3MgdGhyb3VnaCB0aGUgV2Vic2l0ZTtcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW50YWluIGFuZCBwcm9tcHRseSB1cGRhdGUgWW91ciBhY2NvdW50IGluZm9ybWF0aW9uO1xuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbnRhaW4gdGhlIHNlY3VyaXR5IG9mIFlvdXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudCBieSBub3Qgc2hhcmluZyBZb3VyIHBhc3N3b3JkIHdpdGggb3RoZXJzIGFuZCByZXN0cmljdGluZyBhY2Nlc3MgdG8gWW91ciBhY2NvdW50IGFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIGNvbXB1dGVyO1xuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbXB0bHkgbm90aWZ5IGRvY3ByaW1lIGlmIFlvdSBkaXNjb3ZlciBvciBvdGhlcndpc2Ugc3VzcGVjdCBhbnkgc2VjdXJpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWNoZXMgcmVsYXRpbmcgdG8gdGhlIFdlYnNpdGU7IGFuZFxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFrZSByZXNwb25zaWJpbGl0eSBmb3IgYWxsIHRoZSBhY3Rpdml0aWVzIHRoYXQgb2NjdXIgdW5kZXIgWW91ciBhY2NvdW50IGFuZCBhY2NlcHQgYWxsIHJpc2sgb2YgdW5hdXRob3JpemVkIGFjY2Vzcy5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjLXN1YmhlYWRpbmdcIj41LiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO0NPTlRFTlQgQU5EIElORk9STUFUSU9OIE9OIFRIRSBXRUJTSVRFPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+ZG9jcHJpbWUgYXV0aG9yaXplcyBZb3UgdG8gdmlldyBhbmQgYWNjZXNzIHRoZSBjb250ZW50IGF2YWlsYWJsZSBvbiB0aGUgV2Vic2l0ZSBzb2xlbHkgZm9yIHRoZSBwdXJwb3NlcyBvZiBhdmFpbGluZyB0aGUgU2VydmljZXMsIHN1Y2ggYXMgdmlzaXRpbmcsIHVzaW5nLCBvcmRlcmluZywgcmVjZWl2aW5nLCBkZWxpdmVyaW5nIGFuZCBjb21tdW5pY2F0aW5nIG9ubHkgYXMgcGVyIHRoZXNlIFRlcm1zIG9mIFVzZS4gVGhlIGNvbnRlbnRzIG9uIHRoZSBXZWJzaXRlIGluY2x1ZGluZyBpbmZvcm1hdGlvbiwgdGV4dCwgZ3JhcGhpY3MsIGltYWdlcywgbG9nb3MsIGJ1dHRvbiBpY29ucywgc29mdHdhcmUgY29kZSwgZGVzaWduLCBhbmQgdGhlIGNvbGxlY3Rpb24sIGFycmFuZ2VtZW50IGFuZCBhc3NlbWJseSBvZiBjb250ZW50ICjigJxDb250ZW504oCdKSwgY29udGFpbnMgdGhlIGZvbGxvd2luZzo8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXJkIFBhcnR5IFNlcnZpY2UgUHJvdmlkZXJz4oCZIGNvbnRlbnQgaW5jbHVkaW5nIGFueSBjb250ZW50IHdoaWNoIG1heSBiZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXZlbG9wZWQgb24gYmVoYWxmIG9mIGFuZCBwdWJsaXNoZWQgaW4gdGhlIG5hbWUgb2YgYSBUaGlyZCBTZXJ2aWNlcyBQcm92aWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAo4oCcVGhpcmQgUGFydHkgQ29udGVudOKAnSlcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluLWhvdXNlIGNvbnRlbnQgcHJvdmlkZWQgYnkgZG9jcHJpbWUgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiwgdGV4dCwgY29weSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW8sIHZpZGVvLCBwaG90b2dyYXBocywgaWxsdXN0cmF0aW9ucywgZ3JhcGhpY3MgYW5kIG90aGVyIHZpc3VhbHMgKOKAnGRvY3ByaW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRlbnTigJ0pXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbnkgY29udGVudCBzdWJtaXR0ZWQgYnkgWW91O1xuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj5UaGUgZG9jcHJpbWUgY29udGVudCBpcyB0aGUgcHJvcGVydHkgb2YgZG9jcHJpbWUgYW5kIGlzIHByb3RlY3RlZCB1bmRlciBjb3B5cmlnaHQsIHRyYWRlbWFyayBhbmQgb3RoZXIgYXBwbGljYWJsZSBsYXcocykuIFlvdSBzaGFsbCBub3QgbW9kaWZ5IHRoZSBkb2NwcmltZSBDb250ZW50IG9yIHJlcHJvZHVjZSwgZGlzcGxheSwgcHVibGljbHkgcGVyZm9ybSwgZGlzdHJpYnV0ZSwgb3Igb3RoZXJ3aXNlIHVzZSB0aGUgZG9jcHJpbWUgQ29udGVudCBpbiBhbnkgd2F5IGZvciBhbnkgcHVibGljIG9yIGNvbW1lcmNpYWwgcHVycG9zZSBvciBmb3IgcGVyc29uYWwgZ2Fpbi48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj5XaXRoIHJlc3BlY3QgdG8gc3VjaCBDb250ZW50IHRoYXQgeW91IHN1Ym1pdCBvciBtYWtlIGF2YWlsYWJsZSBvbiB0aGlzIFdlYnNpdCwgeW91IGdyYW50IGRvY3ByaW1lIGEgcGVycGV0dWFsLCBpcnJldm9jYWJsZSwgbm9uLXRlcm1pbmFibGUsIHdvcmxkd2lkZSwgcm95YWx0eS1mcmVlIGFuZCBub24tZXhjbHVzaXZlIGxpY2Vuc2UgdG8gdXNlLCBjb3B5LCBkaXN0cmlidXRlLCBwdWJsaWNseSBkaXNwbGF5LCBtb2RpZnksIGNyZWF0ZSBkZXJpdmF0aXZlIHdvcmtzLCBhbmQgc3VibGljZW5zZSBzdWNoIG1hdGVyaWFscyBvciBhbnkgcGFydCBvZiBzdWNoIG1hdGVyaWFscy9Db250ZW50IChhcyB3ZWxsIGFzIHVzZSB0aGUgbmFtZSB0aGF0IHlvdSBzdWJtaXQgaW4gY29ubmVjdGlvbiB3aXRoIHN1Y2ggc3VibWl0dGVkIGNvbnRlbnQpLiBXZSB0YWtlIG5vIHJlc3BvbnNpYmlsaXR5IGFuZCBhc3N1bWUgbm8gbGlhYmlsaXR5IGZvciBhbnkgQ29udGVudCBwb3N0ZWQgb3Igc3VibWl0dGVkIGJ5IHlvdS4gV2UgaGF2ZSBubyBvYmxpZ2F0aW9uIHRvIHBvc3QgeW91ciBjb21tZW50czsgd2UgcmVzZXJ2ZSB0aGUgcmlnaHQgaW4gb3VyIGFic29sdXRlIGRpc2NyZXRpb24gdG8gZGV0ZXJtaW5lIHdoaWNoIGNvbW1lbnRzIGFyZSBwdWJsaXNoZWQgb24gdGhlIFdlYnNpdGUuIElmIHlvdSBkbyBub3QgYWdyZWUgdG8gdGhlc2UgdGVybXMgYW5kIGNvbmRpdGlvbnMsIHBsZWFzZSBkbyBub3QgcHJvdmlkZSB1cyB3aXRoIGFueSBzdWJtaXR0ZWQgQ29udGVudC4gWW91IGFncmVlIHRoYXQgeW91IGFyZSBmdWxseSByZXNwb25zaWJsZSBmb3IgdGhlIGNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHlvdSBzdWJtaXQuXG4gICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj48c3Bhbj5Qcm9oaWJpdGVkIENvbnRlbnQ6PC9zcGFuPiBZb3UgYWdyZWUgdGhhdCBhbnkgQ29udGVudCBzdWJtaXR0ZWQgYnkgWW91IHNoYWxsIG5vdCBpbmZyaW5nZSB0aGUgaW50ZWxsZWN0dWFsIHByb3BlcnR5LCBwcml2YWN5LCBwdWJsaWNpdHksIGNvcHlyaWdodCwgb3Igb3RoZXIgbGVnYWwgcmlnaHRzIG9mIGFueSBwZXJzb24gb3IgZW50aXR5LiBUaGUgQ29udGVudCBtdXN0IG5vdCBiZSBmYWxzZSwgbWlzbGVhZGluZywgZnJhdWR1bGVudCwgZGVmYW1hdG9yeSwgb3IgZGVjZXB0aXZlLiBUaGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbGxvd2luZyBDb250ZW50IGlzIHByb2hpYml0ZWQgb24gdGhlIFdlYnNpdGU6XG4gICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwic3ViLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgdGhhdCBkZW1lYW5zLCBkZWdyYWRlcywgb3Igc2hvd3MgaGF0ZSB0b3dhcmQgYSBwYXJ0aWN1bGFyIHJhY2UsIGdlbmRlciwgY3VsdHVyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRyeSwgYmVsaWVmLCBvciB0b3dhcmQgYW55IG1lbWJlciBvZiBhIHByb3RlY3RlZCBjbGFzcztcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50IGRlcGljdGluZyBudWRpdHksIHNleHVhbCBiZWhhdmlvdXIsIG9yIG9ic2NlbmUgZ2VzdHVyZXM7XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCBkZXBpY3RpbmcgZHJ1ZyB1c2U7XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCBkZXBpY3RpbmcgZXhjZXNzaXZlIHZpb2xlbmNlLCBpbmNsdWRpbmcgdGhlIGhhcm1pbmcgb2YgYW5pbWFscztcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG9ja2luZywgc2Vuc2F0aW9uYWwsIG9yIGRpc3Jlc3BlY3RmdWwgY29udGVudDtcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNlcHRpdmUsIGZhbHNlIG9yIG1pc2xlYWRpbmcgY29udGVudCwgaW5jbHVkaW5nIGRlY2VwdGl2ZSBjbGFpbXMsIG9mZmVycywgb3IgYnVzaW5lc3MgcHJhY3RpY2VzO1xuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgdGhhdCBkaXJlY3RzIHVzZXJzIHRvIHBoaXNoaW5nIGxpbmtzLCBtYWx3YXJlLCBvciBzaW1pbGFybHkgaGFybWZ1bCBjb2RlcyBvciBzaXRlczsgYW5kXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCB0aGF0IGRlY2VpdmVzIG90aGVyIFVzZXJzIGluIGFueSBtYW5uZXIgZm9yIHByb3ZpZGluZyB0aGVpciBwZXJzb25hbCBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRob3V0IHRoZWlyIGtub3dsZWRnZSwgdW5kZXIgZmFsc2UgcHJldGVuY2VzLCBvciB0byBjb21wYW5pZXMgdGhhdCByZXNlbGwsIHRyYWRlLCBvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlcndpc2UgbWlzdXNlIHRoYXQgcGVyc29uYWwgaW5mb3JtYXRpb25cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+SWYgZG9jcHJpbWUgZGV0ZXJtaW5lcyB0aGF0IHlvdSBoYXZlIHByb3ZpZGVkIGZyYXVkdWxlbnQsIGluYWNjdXJhdGUsIG9yIGluY29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZm9ybWF0aW9uLCBpbmNsdWRpbmcgdGhyb3VnaCBmZWVkYmFjaywgZG9jcHJpbWUgcmVzZXJ2ZXMgdGhlIHJpZ2h0IHRvIGltbWVkaWF0ZWx5IHN1c3BlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHlvdXIgYWNjZXNzIHRvIHRoZSBXZWJzaXRlIG9yIGFueSBvZiB5b3VyIGFjY291bnRzIHdpdGggZG9jcHJpbWUgYW5kIG1ha2VzIHN1Y2ggZGVjbGFyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uIHRoZSB3ZWJzaXRlIGFsb25nc2lkZSB5b3VyIG5hbWUveW91ciBjbGluaWPigJlzIG5hbWUgYXMgZGV0ZXJtaW5lZCBieSBkb2NwcmltZSBmb3IgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwcm90ZWN0aW9uIG9mIGl0cyBidXNpbmVzcyBhbmQgaW4gdGhlIGludGVyZXN0cyBvZiBVc2Vycy4gWW91IHNoYWxsIGJlIGxpYWJsZSB0byBpbmRlbW5pZnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3ByaW1lIGZvciBhbnkgbG9zc2VzIGluY3VycmVkIGFzIGEgcmVzdWx0IG9mIHlvdXIgbWlzcmVwcmVzZW50YXRpb25zIG9yIGZyYXVkdWxlbnQgZmVlZGJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQgaGFzIGFkdmVyc2VseSBhZmZlY3RlZCBkb2NwcmltZSBvciBpdHMgVXNlcnMuXG4gICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj5Zb3UgYWNrbm93bGVkZ2UgdGhhdCBhbHRob3VnaCBzb21lIG9mIHRoZSBjb250ZW50LCB0ZXh0LCBkYXRhLCBncmFwaGljcywgaW1hZ2VzLCBpbmZvcm1hdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zLCBndWlkYW5jZSwgYW5kIG90aGVyIG1hdGVyaWFsIChjb2xsZWN0aXZlbHksIOKAnEluZm9ybWF0aW9u4oCdKSB0aGF0IGlzIHByb3ZpZGVkIHRvIFlvdVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb24gdGhlIFdlYnNpdGUgKGluY2x1ZGluZyBJbmZvcm1hdGlvbiBwcm92aWRlZCBpbiBkaXJlY3QgcmVzcG9uc2UgdG8gWW91ciBxdWVzdGlvbnMgb3IgcG9zdGluZ3MpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBtYXkgYmUgcHJvdmlkZWQgYnkgaW5kaXZpZHVhbHMgaW4gdGhlIG1lZGljYWwgcHJvZmVzc2lvbiwgdGhlIHByb3Zpc2lvbiBvZiBzdWNoIEluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBkb2VzIG5vdCBjcmVhdGUgYSBkb2N0b3IvbWVkaWNhbCBwcm9mZXNzaW9uYWwtcGF0aWVudCByZWxhdGlvbnNoaXAsIGJ1dCBpcyBwcm92aWRlZCB0byBpbmZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBvbiB2YXJpb3VzIG1lZGljYWwgY29uZGl0aW9ucywgbWVkaWNhbCBkaWFnbm9zaXMgYW5kIHRyZWF0bWVudCBhbmQgaXQgZG9lcyBub3QgY29uc3RpdHV0ZSBhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3QgbWVkaWNhbCBkaWFnbm9zaXMsIHRyZWF0bWVudCBvciBwcmVzY3JpcHRpb24uIEV2ZXJ5dGhpbmcgb24gdGhlIFdlYnNpdGUgc2hvdWxkIGJlIHVzZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciBpbmZvcm1hdGlvbiBwdXJwb3NlcyBvbmx5LlxuICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjLXN1YmhlYWRpbmdcIj42LiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO0RJU0NMQUlNRVI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj5BcyB3aXRoIGFueSBtZWRpY2FsIHByb2NlZHVyZSwgdGhlcmUgYXJlIHBvdGVudGlhbCByaXNrcyBhc3NvY2lhdGVkIHdpdGggdXNpbmcgdGhlIFNlcnZpY2VzIG9mZmVyZWQgYnkgdGhlIFdlYnNpdGUuIEJ5IHVzaW5nIHRoZSBTZXJ2aWNlcywgWW91IGFncmVlIHRvIGFiaWRlIGJ5IHRoZXNlIFRlcm1zIG9mIFVzZSwgUHJpdmFjeSBQb2xpY3kgYW5kIHJpc2tzIGRlc2NyaWJlZCBiZWxvdy4gVGhlc2Ugcmlza3MgaW5jbHVkZSwgYnV0IG1heSBub3QgYmUgbGltaXRlZCB0bzo8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoaWxlIHRoZSBXZWJzaXRlIGlzIGFuIGhvbmVzdCBhdHRlbXB0IHRvIHByb3ZpZGUgYWNjZXNzIHRvIHRoZSBiZXN0IHBvc3NpYmxlIG1lZGljYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mb3JtYXRpb24gdG8gdGhlIFVzZXJzLCB0aGUgTWVkaWNhbCBFeHBlcnRzIHdpbGwgbm90IGJlIGV4YW1pbmluZyBZb3UgcGh5c2ljYWxseS4gVGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lZGljYWwgRXhwZXJ0cyBtYXkgbm90IGhhdmUgYWNjZXNzIHRvIGFsbCBvciBzb21lIG9mIFlvdXIgbWVkaWNhbCBoaXN0b3J5IHRoYXQgbWlnaHQgYmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JpdGljYWwgdG8gY29uc3VsdCBZb3UuIFRoZSBNZWRpY2FsIEV4cGVydHMgd2lsbCBub3QgaGF2ZSB0aGUgYmVuZWZpdCBvZiBpbmZvcm1hdGlvbiB0aGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvdWxkIGJlIG9idGFpbmVkIGJ5IGV4YW1pbmluZyBZb3UgaW4gcGVyc29uLCBvYnNlcnZpbmcgWW91ciBwaHlzaWNhbCBjb25kaXRpb24gYW5kIGJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvaW5nIHRocm91Z2ggWW91ciBtZWRpY2FsIHJlY29yZHMuIFRoaXMgbWVhbnMgdGhhdCB0aGUgU2VydmljZXMgcHJvdmlkZWQgaXMgZGlmZmVyZW50IGZyb21cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGRpYWdub3N0aWMgYW5kIHRyZWF0bWVudCBzZXJ2aWNlcyB0eXBpY2FsbHkgZGVjaWRlZCBieSBhIHBoeXNpY2lhbi4gVGhlcmVmb3JlLCB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVkaWNhbCBFeHBlcnRzIG1heSBub3QgYmUgYXdhcmUgb2YgZmFjdHMgb3IgaW5mb3JtYXRpb24gdGhhdCB3b3VsZCBhZmZlY3QgaGlzIG9yIGhlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGluaW9uIG9mIFlvdXIgZGlhZ25vc2lzLiBUbyByZWR1Y2UgdGhlIHJpc2sgb2YgdGhpcyBsaW1pdGF0aW9uLCBkb2NwcmltZSBzdHJvbmdseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmNvdXJhZ2VzIFlvdSB0byBiZSBpbiB0b3VjaCB3aXRoIGFuIG9uLWdyb3VuZCBwaHlzaWNpYW4gYW5kIHNoYXJlIHRoZSBkb2NwcmltZeKAmXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BpbmlvbiB3aXRoIGhpbS9oZXIuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCeSByZXF1ZXN0aW5nIGEgbWVkaWNhbCBvcGluaW9uIHRocm91Z2ggdGhlIFdlYnNpdGUsIFlvdSBhY2tub3dsZWRnZSBhbmQgYWdyZWUgdGhhdDpcbiAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJzdWItbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBhZHZpY2UvaW5mb3JtYXRpb24vb3BpbmlvbiBvbiBkaWFnbm9zaXMgWW91IG1heSByZWNlaXZlIGNvdWxkIGJlIGxpbWl0ZWQgYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlzaW9uYWw7XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBtZWRpY2FsIG9waW5pb24gaXMgbm90IGludGVuZGVkIHRvIHJlcGxhY2UgYSBmYWNlLXRvLWZhY2UgdmlzaXQgd2l0aCBhIHBoeXNpY2lhbiBhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdCBkb2VzIHJlcGxhY2UgYW4gYWN0dWFsIGRvY3Rvci1wYXRpZW50IHJlbGF0aW9uc2hpcDtcbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW4gY2FzZSBvZiBhIHNlY29uZCBvcGluaW9uIHdoZXJlIHRoZXJlIGlzIGEgZGlmZmVyZW5jZSBvZiBvcGluaW9uIGFtb25nIE91ciBNZWRpY2FsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXhwZXJ0cyBhbmQgWW91ciBwZXJzb25hbCBwaHlzaWNpYW4sIFlvdSB3b3VsZCBiZWFyIHRoZSByZXNwb25zaWJpbGl0eSB0byBkZWNpZGUgb24gb25saW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Igb2ZmbGluZSBjb25zdWx0YXRpb24sIG9yIHByb2NlZHVyZSwgYW5kL29yIHRyZWF0bWVudDtcbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIE1lZGljYWwgRXhwZXJ0IGlzIHJlbGlhbnQgb24gaW5mb3JtYXRpb24gcHJvdmlkZWQgYnkgWW91IGFuZCBoZW5jZSBhbnkgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZW1vbnN0cmF0ZWQgdG8gaGF2ZSBiZWVuIGZhbHNpZmllZCwgbWlzbGVhZGluZyBvciBpbmNvbXBsZXRlIHdpbGwgaW1tZWRpYXRlbHkgcmVuZGVyIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9waW5pb24gYW5kIGFsbCBkZXRhaWxzIHRoZXJlaW4gbnVsbCBhbmQgdm9pZDtcbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWluIHNvbWUgY2FzZXMsIHRoZSBNZWRpY2FsIEV4cGVydCBtYXkgZGV0ZXJtaW5lIHRoYXQgdGhlIHRyYW5zbWl0dGVkIGluZm9ybWF0aW9uIGlzIG9mXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5hZGVxdWF0ZSBxdWFsaXR5IGFuZCBtYXkgYXNrIGZvciBtb3JlIGluZm9ybWF0aW9uLCB3aXRob3V0IHdoaWNoIGhlL3NoZSBtYXkgcmVmdXNlIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2VyIHRoZSBxdWVyeTtcbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW4gcmFyZSBjYXNlcywgdGhlIE1lZGljYWwgRXhwZXJ0cyBtYXkgZmVlbCB0aGF0IHRoZSBxdWVyeSBtYXkgbm90IGJlIGFuc3dlcmFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRob3V0IHBoeXNpY2FsbHkgZXhhbWluaW5nIHRoZSBwYXRpZW50LyBVc2VycyBhbmQgdGhlIENvbnN1bHRhdGlvbiBtYXkgYmUgcmVmdXNlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcnRod2l0aDtcbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW4gdmVyeSByYXJlIGluc3RhbmNlcywgc2VjdXJpdHkgcHJvdG9jb2xzIGNvdWxkIGZhaWwsIGNhdXNpbmcgYSBicmVhY2ggb2YgcHJpdmFjeSBvZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNvbmFsIG1lZGljYWwgaW5mb3JtYXRpb247IGFuZFxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheXMgaW4gbWVkaWNhbCBldmFsdWF0aW9uIGFuZCBhbnN3ZXJzIGNvdWxkIG9jY3VyIGR1ZSB0byBkZWZpY2llbmNpZXMgb3IgZmFpbHVyZXMgb2ZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgc2VydmljZSBhcyBwZXIgdGhvc2UgbWVudGlvbmVkIGluIHRoZXNlIFRlcm1zIG9mIFVzZS5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2Mtc3ViaGVhZGluZ1wiPjcuJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Qk9PSyBBUFBPSU5UTUVOVCBBTkQgQ0FMTCBGQUNJTElUWTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jcHJpbWUgZW5hYmxlcyBVc2VycyB0byBjb25uZWN0IHdpdGggTWVkaWNhbCBFeHBlcnRzIGFuZCBUaGlyZCBQYXJ0eSBMYWJzIHRocm91Z2ggdHdvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZHM6IGEpIEJvb2sgZmFjaWxpdHkgdGhhdCBhbGxvd3MgVXNlcnMgYm9vayBhbiBhcHBvaW50bWVudCB0aHJvdWdoIHRoZSBXZWJzaXRlOyBiKSBvbmxpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3IgdGVsZS1jb25zdWx0YXRpb24gc2VydmljZXMgd2hpY2ggY29ubmVjdCBVc2VycyBkaXJlY3RseSB0byB0aGUgTWVkaWNhbCBFeHBlcnRzIGVuZ2FnZWQgYnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jcHJpbWUuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2NwcmltZSB3aWxsIGVuc3VyZSBVc2VycyBhcmUgcHJvdmlkZWQgY29uZmlybWVkIGFwcG9pbnRtZW50IG9uIHRoZSBCb29rIGZhY2lsaXR5LiBIb3dldmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2NwcmltZSBoYXMgbm8gbGlhYmlsaXR5IGlmIHN1Y2ggYW4gYXBwb2ludG1lbnQgaXMgbGF0ZXIgY2FuY2VsbGVkIGJ5IHRoZSBNZWRpY2FsIEV4cGVydCBvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlyZCBQYXJ0eSBMYWJzLCBvciB0aGV5IGFyZSBub3QgYXZhaWxhYmxlIGZvciBhcHBvaW50bWVudC5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElmIGEgVXNlciBoYXMgdXRpbGl6ZWQgdGhlIG9ubGluZSBjb25zdWx0YXRpb24vdGVsZXBob25pYyBzZXJ2aWNlcywgZG9jcHJpbWUgcmVzZXJ2ZXMgdGhlIHJpZ2h0IHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlIHRoZSBpbmZvcm1hdGlvbiBwcm92aWRlZCBieSB0aGUgVXNlciB3aXRoIHRoZSBNZWRpY2FsIEV4cGVydHMgYW5kIFRoaXJkIFBhcnR5IExhYnMgYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlIHN1Y2ggaW5mb3JtYXRpb24gYW5kL29yIGNvbnZlcnNhdGlvbiBvZiB0aGUgVXNlciB3aXRoIHRoZSBNZWRpY2FsIEV4cGVydHMgYW5kIFRoaXJkIFBhcnR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExhYnMsIGluIGFjY29yZGFuY2Ugd2l0aCBvdXIgUHJpdmFjeSBQb2xpY3kgLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIHJlc3VsdHMgb2YgYW55IHNlYXJjaCBVc2VycyBwZXJmb3JtIG9uIHRoZSBXZWJzaXRlIGZvciBNZWRpY2FsIEV4cGVydHMgYW5kIFRoaXJkIFBhcnR5IExhYnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdWxkIG5vdCBiZSBjb25zdHJ1ZWQgYXMgYW4gZW5kb3JzZW1lbnQgYnkgZG9jcHJpbWUgb2YgYW55IHN1Y2ggcGFydGljdWxhciBNZWRpY2FsIEV4cGVydHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIFRoaXJkIFBhcnR5IExhYnMuIElmIHRoZSBVc2VyIGRlY2lkZXMgdG8gZW5nYWdlIHdpdGggYSBNZWRpY2FsIEV4cGVydHMgYW5kIFRoaXJkIFBhcnR5IExhYnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gc2VlayBtZWRpY2FsIHNlcnZpY2VzLCB0aGUgVXNlciBzaGFsbCBiZSBkb2luZyBzbyBhdCBoaXMvaGVyIG93biByaXNrLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2l0aG91dCBwcmVqdWRpY2UgdG8gdGhlIGdlbmVyYWxpdHkgb2YgdGhlIGFib3ZlLCBkb2NwcmltZSBpcyBhY3RpbmcgYXMgYSBtZXJlIGZhY2lsaXRhdG9yIGFuZCBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3QgaW52b2x2ZWQgaW4gcHJvdmlkaW5nIGFueSBoZWFsdGhjYXJlIG9yIG1lZGljYWwgYWR2aWNlIG9yIGRpYWdub3NpcyBhbmQgaGVuY2UgaXMgbm90XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpYmxlIGZvciBhbnkgaW50ZXJhY3Rpb25zIGJldHdlZW4gVXNlciBhbmQgTWVkaWNhbCBFeHBlcnRzIGFuZCBUaGlyZCBQYXJ0eSBMYWJzLiBVc2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVyc3RhbmRzIGFuZCBhZ3JlZXMgdGhhdCBkb2NwcmltZSB3aWxsIG5vdCBiZSBsaWFibGUgZm9yOlxuICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cInN1Yi1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlciBpbnRlcmFjdGlvbnMgYW5kIGFzc29jaWF0ZWQgaXNzdWVzIFVzZXIgaGFzIHdpdGggdGhlIE1lZGljYWwgRXhwZXJ0cyBhbmQgVGhpcmQgUGFydHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYWJzO1xuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgYWJpbGl0eSBvciBpbnRlbnQgb2YgdGhlIE1lZGljYWwgRXhwZXJ0cyBhbmQgVGhpcmQgUGFydHkgTGFicyBvciB0aGUgbGFjayBvZiBpdCwgaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxmaWxsaW5nIHRoZWlyIG9ibGlnYXRpb25zIHRvd2FyZHMgVXNlcnM7XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFueSB3cm9uZyBtZWRpY2F0aW9uIG9yIHF1YWxpdHkgb2YgdHJlYXRtZW50IGJlaW5nIGdpdmVuIGJ5IHRoZSBNZWRpY2FsIEV4cGVydHMgYW5kIFRoaXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFydHkgTGFicywgb3IgYW55IG1lZGljYWwgbmVnbGlnZW5jZSBvbiBwYXJ0IG9mIHRoZSBNZWRpY2FsIEV4cGVydHMgYW5kIFRoaXJkIFBhcnR5IExhYnM7XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluYXBwcm9wcmlhdGUgdHJlYXRtZW50LCBvciBzaW1pbGFyIGRpZmZpY3VsdGllcyBvciBhbnkgdHlwZSBvZiBpbmNvbnZlbmllbmNlIHN1ZmZlcmVkIGJ5IHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXIgZHVlIHRvIGEgZmFpbHVyZSBvbiB0aGUgcGFydCBvZiB0aGUgTWVkaWNhbCBFeHBlcnRzIGFuZCBUaGlyZCBQYXJ0eSBMYWJzIHRvIHByb3ZpZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZ3JlZWQgU2VydmljZXM7XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFueSBtaXNjb25kdWN0IG9yIGluYXBwcm9wcmlhdGUgYmVoYXZpb3VyIGJ5IHRoZSBNZWRpY2FsIEV4cGVydHMgYW5kIFRoaXJkIFBhcnR5IExhYnMgb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVpciByZXNwZWN0aXZlIHN0YWZmO1xuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxsYXRpb24gb3Igbm8gc2hvdyBieSB0aGUgTWVkaWNhbCBFeHBlcnRzIGFuZCBUaGlyZCBQYXJ0eSBMYWJzIG9yIHJlc2NoZWR1bGluZyBvZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvb2tlZCBhcHBvaW50bWVudC5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlcnMgYXJlIGFsbG93ZWQgdG8gcHJvdmlkZSBmZWVkYmFjayBhYm91dCB0aGVpciBleHBlcmllbmNlcyB3aXRoIHRoZSBQcmFjdGl0aW9uZXIsIGhvd2V2ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBVc2VyIHNoYWxsIGVuc3VyZSB0aGF0LCB0aGUgc2FtZSBpcyBwcm92aWRlZCBpbiBhY2NvcmRhbmNlIHdpdGggYXBwbGljYWJsZSBsYXcuIFVzZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG93ZXZlciB1bmRlcnN0YW5kcyB0aGF0LCBkb2NwcmltZSBzaGFsbCBub3QgYmUgb2JsaWdlZCB0byBhY3QgaW4gc3VjaCBtYW5uZXIgYXMgbWF5IGJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIHRvIGdpdmUgZWZmZWN0IHRvIHRoZSBjb250ZW50IG9mIFVzZXJzIGZlZWRiYWNrLCBzdWNoIGFzIHN1Z2dlc3Rpb25zIGZvciBkZWxpc3Rpbmcgb2YgYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWN1bGFyIE1lZGljYWwgRXhwZXJ0cyBhbmQgVGhpcmQgUGFydHkgTGFicyBmcm9tIHRoZSBXZWJzaXRlLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2Mtc3ViaGVhZGluZ1wiPjguJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Q09NTVVOSUNBVElPTlMgVE8gWU9VPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+WW91IGFncmVlIGFuZCBhdXRob3JpemUgZG9jcHJpbWUgdG8gc2hhcmUgeW91ciBpbmZvcm1hdGlvbiB3aXRoIGl0cyBncm91cCBjb21wYW5pZXMgYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlciB0aGlyZCBwYXJ0aWVzLCBpbiBzbyBmYXIgYXMgcmVxdWlyZWQgZm9yIGpvaW50IG1hcmtldGluZyBwdXJwb3Nlcy9vZmZlcmluZyB2YXJpb3VzIHNlcnZpY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvciB2YXJpb3VzIHZhbHVlIGFkZGVkIHNlcnZpY2VzLCBpbiBhc3NvY2lhdGlvbiB3aXRoIHRoZSBTZXJ2aWNlcyBvZiB0aGUgV2Vic2l0ZSBvciBvdGhlcndpc2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBZb3UgYWdyZWUgdG8gcmVjZWl2ZSBjb21tdW5pY2F0aW9ucyB0aHJvdWdoIGVtYWlscywgdGVsZXBob25lIGFuZC9vciBzbXMsIGZyb20gZG9jcHJpbWUgb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0cyBncm91cCBjb21wYW5pZXMgb3IgaXRzIHRoaXJkIHBhcnR5IHZlbmRvcnMvYnVzaW5lc3MgcGFydG5lcnMgb3IgVGhpcmQgUGFydHkgU2VydmljZSBQcm92aWRlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2FyZGluZyB0aGUgU2VydmljZXMvc2VydmljZXMgdXBkYXRlcywgdHJhbnNhY3Rpb25hbCBhbmQgcHJvbW90aW9uYWwgZW1haWxzIGFuZC9vciBhbnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFubm91bmNlbWVudHMuIEluIHRoaXMgY29udGV4dCwgeW91IGFncmVlIGFuZCBjb25zZW50IHRvIHJlY2VpdmUgYWxsIGNvbW11bmljYXRpb25zIGF0IHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlIG51bWJlciBwcm92aWRlZCwgZXZlbiBpZiB0aGlzIG1vYmlsZSBudW1iZXIgaXMgcmVnaXN0ZXJlZCB1bmRlciBETkQvTkNQUiBsaXN0IHVuZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBUZWxlY29tIFJlZ3VsYXRvcnkgQXV0aG9yaXR5IG9mIEluZGlhIChUUkFJKSBsYXdzLCBydWxlcyBhbmQgcmVndWxhdGlvbnMuIEFuZCBmb3IgdGhhdCBwdXJwb3NlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgeW91IGZ1cnRoZXIgYXV0aG9yaXplIENvbXBhbnkgdG8gc2hhcmUvZGlzY2xvc2UgdGhlIGluZm9ybWF0aW9uIHRvIGFueSB0aGlyZCBwYXJ0eSBzZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlciBvciBhbnkgYWZmaWxpYXRlcywgZ3JvdXAgY29tcGFuaWVzLCB0aGVpciBhdXRob3JpemVkIGFnZW50cyBvciB0aGlyZCBwYXJ0eSBzZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnMuIFlvdSBhZ3JlZSB0aGF0IGluIGFjY29yZGFuY2Ugd2l0aCB0aGUgYXBwbGljYWJsZSBUUkFJIHJlZ3VsYXRpb25zIHNwZWNpZmljYWxseSBUaGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlbGVjb20gQ29tbWVyY2lhbCBDb21tdW5pY2F0aW9ucyBDdXN0b21lciBSZWd1bGF0aW9ucywgMjAxNCA6XG4gICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVhY2ggdGltZSBZb3UgZG8gdmlzaXQvdHJhbnNhY3Qgb3IgbG9naW4gaW4geW91ciBhY2NvdW50IG9uIHRoZSBXZWJzaXRlLCBpdCBzaGFsbCBiZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdhcmRlZCBhcyBhIHZlcmlmaWFibGUgcmVxdWVzdCBmcm9tIHlvdSBwZXJ0YWluaW5nIHRvIHJlY2VpcHQgb2Ygb3VyIFNlcnZpY2VzIGFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpdml0aWVzO1xuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91IHNob3VsZCB2aXNpdCB5b3VyIGFjY291bnQgYXQgbGVhc3Qgb25jZSBpbiBzaXggbW9udGhzIG90aGVyd2lzZSBkb2NwcmltZSByZXNlcnZzIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodCB0byBkZWFjdGl2YXRlIHlvdXIgYWNjb3VudCBmb3IgaW5hY3Rpb24sIGFuZCBpbiB0aGlzIHJlZ2FyZCBkb2NwcmltZSB3aWxsIHNlbmQgeW91IFNNU1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgZW1haWwgY29tbXVuaWNhdGlvbnMgcHJpb3IgdG8gdGhlIGV4cGlyeSBvZiBzaXggbW9udGhzIGZyb20gdGhlIGRhdGUgb2YgbGFzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpdC90cmFuc2FjdGlvbi9sb2dpbiBpbnRvIHlvdXIgYWNjb3VudCBvbiB0aGUgV2Vic2l0ZTtcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVhY2ggdGltZSB5b3UgdmlzaXQvbG9naW4vdHJhbnNhY3Qgb24gdGhlIFdlYnNpdGUgaXQgd2lsbCBiZSBkZWVtZWQgdG8gYmUgYXMgYSBmcmVzaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0IGZyb20geW91IGZvciBjb250aW51aW5nIHRvIHJlY2VpdmUgY29tbXVuaWNhdGlvbiBmcm9tIGRvY3ByaW1lXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbiBjYXNlIHlvdSBkbyBub3Qgd2lzaCB0byByZWNlaXZlIGFueSBjb21tdW5pY2F0aW9uIGZyb20gdXMgb3IgcHJvdmlkZSB5b3VyIGZlZWRiYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFib3V0IHRoZSBzZXJ2aWNlcywgeW91IGNhbiBtYWlsIHVzIGF0IGNhcmVAZG9jcHJpbWUuY29tXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3ByaW1lIHdpbGwgcmV0YWluIGFuZCB1c2UgeW91ciBpbmZvcm1hdGlvbiBhcyBuZWNlc3NhcnkgdG8gY29tcGx5IHdpdGggb3VyIGxlZ2FsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JsaWdhdGlvbnMsIHJlc29sdmUgZGlzcHV0ZXMgYW5kIGVuZm9yY2Ugb3VyIGFncmVlbWVudHMgZW50ZXJlZCBpbnRvIGZvciBwcm92aWRpbmcgU2VydmljZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgYW5jaWxsYXJ5IHNlcnZpY2VzLlxuICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjLXN1YmhlYWRpbmdcIiBpZD1cInJlc2NoZWR1bGluZ185XCI+OS4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtSRVNDSEVEVUxJTkcsIFJFRlVORCAmYW1wOyBDQU5DRUxMQVRJT04gUE9MSUNZPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxsYXRpb25zOlxuICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cInN1Yi1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9yIGFueSBvbmxpbmUgcGFpZCBhcHBvaW50bWVudHMsIHlvdSBjYW4gY2FuY2VsIHlvdXIgc2NoZWR1bGVkIG9yIHJlLWJvb2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcG9pbnRtZW50IGFuZCBpbml0aWF0ZSBpbW1lZGlhdGUgcmVmdW5kIGF0IGFueSB0aW1lLiBJbW1lZGlhdGUgcmVmdW5kIHNoYWxsIGJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdCB0byB0ZXJtcyBhbmQgY29uZGl0aW9ucyBhcyBkZXNjcmliZWQgdW5kZXIgdGhpcyBzZWN0aW9uIG1lbnRpb25lZCBiZWxvdy5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW4gdGhlIGV2ZW50IHRoZSBzZXJ2aWNlcyBhcmUgbm90IGF2YWlsZWQgYXQgdGhlIGFwcG9pbnRlZCBkYXRlIGFuZCB0aW1lIGFuZCBvdXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeXN0ZW1zIGRvIG5vdCB2YWxpZGF0ZSB0aGUgVVJOIGdlbmVyYXRlZCBvbiB5b3VyIHJlZ2lzdGVyZWQgbW9iaWxlIG51bWJlciwgd2Ugd2lsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpY2FsbHkgY2FuY2VsIHlvdXIgYXBwb2ludG1lbnQgYXQgMTI6MDAgbWlkbmlnaHQgb2YgbmV4dCBkYXRlIG9mIHlvdXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBvaW50bWVudCBkYXRlLlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhT2NjYXNpb25hbGx5LCBhcHBvaW50bWVudHMgbWF5IGJlIGNhbmNlbGxlZCBvciBwb3N0cG9uZWQgYnkgdGhlIFRoaXJkIFBhcnR5IFNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm92aWRlci4gU2hvdWxkIHRoaXMgb2NjdXIsIHdlIHdpbGwgYXR0ZW1wdCB0byBjb250YWN0IG9yIGluZm9ybSB5b3UgYW5kIHlvdSBtYXkgcmUtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZWR1bGUgeW91ciBhcHBvaW50bWVudCBhcyBwZXIgeW91ciBjb252ZW5pZW5jZSBvciB2aXNpdCB3d3cuZG9jcHJpbWUuY29tIGZvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyZXNoL3JlLWJvb2tpbmcgb24gdGhlIFdlYnNpdGUuXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbGxhdGlvbiB0aHJvdWdoIG1haWwgb3IgY2FsbCBjZW50cmUgaXMgYWxsb3dlZCBmb3IgYWxsIHRoZSBib29raW5ncyB1bnRpbCB0aGUgdGltZSBvZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcG9pbnRtZW50IG9yIDEyOjAwIG1pZG5pZ2h0IG9mIG5leHQgZGF0ZSBvZiB5b3VyIGFwcG9pbnRtZW50IGRhdGUuIEluIHN1Y2ggY2FzZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Ugd2lsbCBpbml0aWF0ZSBpbW1lZGlhdGUgcmVmdW5kIG9mIHlvdXIgbW9uZXkgYXMgcGVyIHRoZSBwcm9jZXNzIGRlZmluZWQgYmVsb3cuXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlc2NoZWR1bGluZzpcbiAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJzdWItbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlLXNjaGVkdWxpbmcgb2YgYWxsIGFwcG9pbnRtZW50cyBjYW4gYmUgZG9uZSBvbmx5IHVudGlsIHRoZSBhdXRvLWNhbmNlbGxhdGlvbiBpcyBkb25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSBvdXIgc3lzdGVtcy4gT25jZSB0aGUgYXV0byBjYW5jZWxsYXRpb24gaXMgZ2VuZXJhdGVkLCBjYW5jZWxsYXRpb24sIGFuZCByZWZ1bmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzIGFzIG1lbnRpb25lZCB1bmRlciB0aGlzIHNlY3Rpb24gc2hvdWxkIGJlIGZvbGxvd2VkIGFuZCByZS1wcm9jZXNzIGZvciBhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJlc2gvcmUtYm9va2luZywgaWYgbmVlZCBiZS5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91IGNhbiByZS1zY2hlZHVsZSB5b3VyIGFwcG9pbnRtZW50IGkuZS4gYm9vayB5b3VyIGFwcG9pbnRtZW50IGZvciBhIGRpZmZlcmVudCBkYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIHRpbWU7IHdpdGggdGhlIHNhbWUgVGhpcmQgcGFydHkgSGVhbHRoIFNlcnZpY2UgUHJvdmlkZXIgZm9yIHRoZSBzYW1lIHR5cGUgb2ZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFsdGhjYXJlIHNlcnZpY2UuXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluIGNhc2Ugb2YgcmUtc2NoZWR1bGluZywgaWYgdGhlcmUgaXMgYW55IGRpZmZlcmVuY2UgaW4gdGhlIGNoYXJnZXMgZm9yIHJlLXNjaGVkdWxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcG9pbnRtZW50LCB3ZSB3aWxsIGVpdGhlciBjb2xsZWN0IHRoZSBkaWZmZXJlbnRpYWwgYW1vdW50IG9yIHJlZnVuZCB0aGUgc2FtZSwgYXMgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBtYXkgYmUuXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlLWJvb2tpbmc6XG4gICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwic3ViLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3UgY2FuIHJlLWJvb2sgeW91ciBhcHBvaW50bWVudCBieSBjaGFuZ2luZyB0aGUgcGFydGljdWxhcnMgb2YgeW91ciBhcHBvaW50bWVudCBpLmUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIsIHR5cGUgb2Ygc2VydmljZSwgZGF0ZSBhbmQgdGltZSBldGMuXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlLWJvb2tpbmcgb2YgYWxsIGFwcG9pbnRtZW50cyBjYW4gYmUgZG9uZSBhdCB0aGUgY2hvaWNlIG9mIHRoZSBDdXN0b21lciBhbmQgaW4gc3VjaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2VzIGN1c3RvbWVyIGhhcyB0byBjbGljayBvbiDigJxDYW5jZWxsYXRpb24gYW5kIHJlYm9va+KAnSBvcHRpb24gZGlzcGxheWVkIGluIG15XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudCBzZWN0aW9uIG9mIHRoZSBjdXN0b21lci5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9yIGFsbCBhcHBvaW50bWVudHMgd2hpY2ggYXJlIHJlLWJvb2tlZCBjYXNlcywgdGhlIGFtb3VudCBwYWlkIGJ5IHRoZSBjdXN0b21lciBmb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgcHJldmlvdXMgYm9va2luZyBjYW4gYmUgdXRpbGl6ZWQgd2l0aGluIDI0KHR3ZW50eSBmb3VyKSBob3VycyBmcm9tIHRoZSBkYXRlIG9uIHdoaWNoIGNhbmNlbGxhdGlvbiBpcyBpbml0aWF0ZWQgYnkgdGhlIGN1c3RvbWVyIGFuZCBiZWZvcmUgaW5zdHJ1Y3Rpb24gdG8gcmVmdW5kIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhdGVkIGZyb20gb3VyIGVuZCAmYW1wOyBwcm9jZXNzZWQgYnkgdGhlIHBheW1lbnQgZ2F0ZXdheSBpbnRlZ3JhdGVkIG9uIG91ciBXZWJzaXRlLlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIHByZXZpb3VzIGJvb2tpbmcgYW1vdW50IHdpbGwgYmUgcmVmbGVjdGVkIGJ5IHdheSBvZiBjcmVkaXRzIGluIHlvdXIgYWNjb3VudC4gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWRpdCA9IDEgcnVwZWUuXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluIGNhc2UgbW9uZXkgZm9yIHlvdXIgcmUtYm9va2VkIGFwcG9pbnRtZW50IGlzIGFkanVzdGVkIGFnYWluc3QgdGhlIG1vbmV5IHBhaWQgZm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXMgYm9va2luZywgZm9sbG93aW5nIG1heSBiZSBhcHBsaWNhYmxlLCBhcyB0aGUgY2FzZSBtYXkgYmU6XG4gICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibXJ0LTEwXCIgc3R5bGU9e3sgbGlzdFN0eWxlOiAnZGlzYycsIHBhZGRpbmdMZWZ0OiA0MCwgdGV4dEFsaWduOiAnbGVmdCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtcmItMTBcIj5JZiB0aGUgY2hhcmdlcyBmb3IgcmUtYm9va2luZyBhcHBvaW50bWVudCBhcmUgbW9yZSB0aGFuIHRoZSBhbW91bnQgcGFpZCBmb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXMgYm9va2luZywgeW91IHdpbGwgYmUgcmVxdWlyZWQgdG8gcGF5IHRoZSBzaG9ydGZhbGwgYW1vdW50IGZvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0aW5nIHRoZSByZS1ib29rZWQgYXBwb2ludG1lbnQuXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXJiLTEwXCI+SWYgdGhlIGNoYXJnZXMgZm9yIHJlLWJvb2tpbmcgYXBwb2ludG1lbnQgYXJlIGxlc3MgdGhhbiB0aGUgYW1vdW50IHBhaWQgZm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzIGJvb2tpbmcsIHdlIHdpbGwgaW5pdGlhdGUgaW1tZWRpYXRlIHJlZnVuZCBmb3IgdGhlIGRpZmZlcmVudGlhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQuXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlZnVuZHM6XG4gICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwic3ViLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcG9uIHJlY2VpcHQgYSB2YWxpZCBjYW5jZWxsYXRpb24sIHdlIHdpbGwgaW5pdGlhdGUgcmVmdW5kIG9mIHlvdXIgbW9uZXkgaW4gdGhlIHNhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYW5uZXIgYXMgdGhlIG1vbmV5IHdhcyByZWNlaXZlZC5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW4gY2FzZSB5b3UgZmFpbCB0byB1dGlsaXplIHByZXZpb3VzIGJvb2tpbmcgbW9uZXkgZm9yIGFueSByZS1ib29raW5nIGNhc2VzLCB3ZSB3aWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhdGUgaW1tZWRpYXRlIHJlZnVuZCB3aXRoaW4gZXhwaXJ5IG9mIDI0KHR3ZW50eSBmb3VyKSBob3VycyBmcm9tIHRoZSBkYXRlIG9mXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsbGF0aW9uLlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUeXBpY2FsbHksIGFsbCByZWZ1bmRzIGFyZSBwcm9jZXNzZWQgd2l0aCAxNChmb3VydGVlbikgd29ya2luZyBkYXlzIGZyb20gdGhlIGRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbW1lZGlhdGUgcmVmdW5kIGlzIGluaXRpYXRlZCBhdCBvdXIgZW5kLlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZWFzZSBub3RlIHRoYXQgd2Ugc2hhbGwgbm90IGJlIHJlc3BvbnNpYmxlIGZvciBhbnkgZGVsYXlzIGluIGNyZWRpdCB0byB0aGUgQ2FyZGhvbGRlcidzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlZGl0IGNhcmQgYWNjb3VudC8gYWNjb3VudGhvbGRlcuKAmXMgYmFuayBhY2NvdW50IGR1ZSB0byBhbnkgcmVhc29ucyBjaXRlZCBieSB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXltZW50IEdhdGV3YXkgb3IgQ2FyZGhvbGRlcidzIGlzc3VpbmcgYmFuay5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91IHdpbGwgYmUgcHJvdmlkZWQgd2l0aCByZWZ1bmQgcmVmZXJlbmNlIG51bWJlciBmb3IgZnVydGhlciBjb21tdW5pY2F0aW9uIHdpdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5b3VyIGJhbmsuXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vIHJlZnVuZHMgLyBjYW5jZWxsYXRpb24gcmVxdWVzdHMgc2hhbGwgYmUgZW50ZXJ0YWluZWQgaW4gY2FzZSBvZiBwYXltZW50IGFnYWluc3QgYmlsbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvIFNlcnZpY2VzIHJlY2VpdmVkLlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVbmRlciBubyBjaXJjdW1zdGFuY2VzLCBjYXNoIHdpbGwgYmUgcmVmdW5kZWQgYWdhaW5zdCBhbnkgY2FuY2VsbGF0aW9uLlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzYy1zdWJoZWFkaW5nXCI+MTAuJm5ic3A7Jm5ic3A7Jm5ic3A7UEFZTUVOVCwgRkVFUyBBTkQgVEFYRVM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlZ2lzdHJhdGlvbiBvbiB0aGUgV2Vic2l0ZSBhbmQgdGhlIGFjY2VzcyB0byB0aGUgaW5mb3JtYXRpb24gcHJvdmlkZWQgb24gdGhlIFdlYnNpdGUgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJlZS4gZG9jcHJpbWUgZG9lcyBub3QgY2hhcmdlIGFueSBmZWUgZm9yIGFjY2Vzc2luZywgYW5kIGJyb3dzaW5nIHRocm91Z2ggdGhlIFdlYnNpdGUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvd2V2ZXIsIGRvY3ByaW1lIG1heSBjb2xsZWN0IHBheW1lbnRzICh3aGljaCBzaGFsbCBpbmNsdWRlIGFwcGxpY2FibGUgdGF4ZXMgYW5kIHNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlL2NvbW1pc3Npb24gb2YgZG9jcHJpbWUpIGZyb20gWW91IG9uIGJlaGFsZiBvZiBUaGlyZCBQYXJ0eSBTZXJ2aWNlIFByb3ZpZGVycyB0aHJvdWdoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJCSSBhdXRob3JpemVkIHBheW1lbnQgY29sbGVjdG9ycyBvciBnYXRld2F5cy4gWW91IGFncmVlIGFuZCBhY2tub3dsZWRnZSB0aGF0IFlvdSBzaGFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3QgaG9sZCBkb2NwcmltZSByZXNwb25zaWJsZSBmb3IgYW55IGxvc3Mgb3IgZGFtYWdlIGNhdXNlZCB0byBZb3UgZHVyaW5nIHRoZSBwcm9jZXNzIG9mXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb24gb2YgcGF5bWVudHMgZnJvbSBZb3UsIG9yIGR1ZSB0byBhbnkgYWN0cyBvciBvbWlzc2lvbiBvbiB0aGUgcGFydCBvZiB0aGlyZCBwYXJ0aWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpei4gcGF5bWVudCBjb2xsZWN0b3JzIG9yIGZvciBhbnkgYWN0aW9ucy8gb21pc3Npb25zIHdoaWNoIGFyZSBiZXlvbmQgdGhlIGNvbnRyb2wgb2ZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jcHJpbWUuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbGwgZmVlcyBkaXNwbGF5ZWQgb24gdGhlIFdlYnNpdGUgYXJlIGluY2x1c2l2ZSBvZiBhcHBsaWNhYmxlIHRheGVzLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jcHJpbWUgcmVzZXJ2ZXMgdGhlIHJpZ2h0IHRvIG1vZGlmeSB0aGUgZmVlIHN0cnVjdHVyZSBieSBwcm92aWRpbmcgb24gdGhlIFdlYnNpdGUgd2hpY2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhbGwgYmUgY29uc2lkZXJlZCBhcyB2YWxpZCBhbmQgYWdyZWVkIGNvbW11bmljYXRpb24uXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbiBvcmRlciB0byBwcm9jZXNzIHRoZSBwYXltZW50cywgZG9jcHJpbWUgbWlnaHQgcmVxdWlyZSBkZXRhaWxzIG9mIFVzZXLigJlzLyBUaGlyZCBQYXJ0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlIFByb3ZpZGVyc+KAmSBiYW5rIGFjY291bnQsIGNyZWRpdCBjYXJkIG51bWJlciBldGMuIFBsZWFzZSBjaGVjayBPdXIgUHJpdmFjeSBQb2xpY3lcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb24gaG93IGRvY3ByaW1lIHVzZXMgdGhlIGNvbmZpZGVudGlhbCBpbmZvcm1hdGlvbiBwcm92aWRlZCBieSBVc2Vycy5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjLXN1YmhlYWRpbmdcIj4xMS4mbmJzcDsmbmJzcDsmbmJzcDtSRVNUUklDVElPTlMgT04gVVNFIE9GIFRIRSBXRUJTSVRFPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3UgYWdyZWUgYW5kIHVuZGVydGFrZSB0aGF0IFlvdSBzaGFsbCBub3QgZG8gYW55IGFjdCBvciBwb3N0LCBkaXNwbGF5LCB1cGxvYWQsIG1vZGlmeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVibGlzaCwgdHJhbnNtaXQsIHVwZGF0ZSBvciBzaGFyZSBhbnkgaW5mb3JtYXRpb24gdGhhdCAtXG4gICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwic3ViLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWxvbmdzIHRvIGFub3RoZXIgcGVyc29uIGFuZCB0byB3aGljaCBZb3UgZG9lcyBub3QgYmVsb25nIHRvIFlvdSBvciBkbyBub3QgaGF2ZSBhbnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDtcbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXMgZ3Jvc3NseSBoYXJtZnVsLCBoYXJhc3NpbmcsIGRlZmFtYXRvcnksIG9ic2NlbmUsIHBvcm5vZ3JhcGhpYywgbGliZWxvdXMsIGludmFzaXZlIG9mXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5vdGhlcidzIHByaXZhY3ksIGhhdGVmdWwsIG9yIG9iamVjdGlvbmFibGUsIHJlbGF0aW5nIG9yIGVuY291cmFnaW5nIG1vbmV5IGxhdW5kZXJpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvciBnYW1ibGluZywgb3Igb3RoZXJ3aXNlIHVubGF3ZnVsIGluIGFueSBtYW5uZXIgd2hhdGV2ZXI7XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZnJpbmdlcyBhbnkgcGF0ZW50LCB0cmFkZW1hcmssIGNvcHlyaWdodCBvciBvdGhlciBpbnRlbGxlY3R1YWwgcHJvcHJpZXRhcnkgcmlnaHRzIG9mXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW55IHRoaXJkIHBhcnR5O1xuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aW9sYXRlcyBhbnkgbGF3IGZvciB0aGUgdGltZSBiZWluZyBpbiBmb3JjZTtcbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wZXJzb25hdGVzIGFub3RoZXIgcGVyc29uO1xuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWlucyBzb2Z0d2FyZSB2aXJ1c2VzIG9yIGFueSBvdGhlciBjb21wdXRlciBjb2RlLCBmaWxlcyBvciBwcm9ncmFtcyBkZXNpZ25lZCB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycnVwdCwgZGVzdHJveSBvciBsaW1pdCB0aGUgZnVuY3Rpb25hbGl0eSBvZiBhbnkgY29tcHV0ZXIgcmVzb3VyY2U7XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzIHByb2hpYml0ZWQgdW5kZXIgYXBwbGljYWJsZSBsYXcocykgZm9yIHRoZSB0aW1lIGJlaW5nIGluIGZvcmNlIGFuZCBydWxlcyBtYWRlIHRoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXI7IGFuZFxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJlYXRlbnMgdGhlIHVuaXR5LCBpbnRlZ3JpdHksIGRlZmVuc2UsIHNlY3VyaXR5IG9yIHNvdmVyZWlnbnR5IG9mIEluZGlhLCBmcmllbmRseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF0aW9ucyB3aXRoIGZvcmVpZ24gc3RhdGVzLCBvciBwdWJsaWMgb3JkZXIgb3IgY2F1c2VzIGluY2l0ZW1lbnQgdG8gdGhlIGNvbW1pc3Npb24gb2ZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnkgY29nbml6YWJsZSBvZmZlbmNlIG9yIHByZXZlbnRzIGludmVzdGlnYXRpb24gb2YgYW55IG9mZmVuY2Ugb3IgaXMgaW5zdWx0aW5nIGFueSBvdGhlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdGlvbi5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91IGFyZSBhbHNvIHByb2hpYml0ZWQgZnJvbTpcbiAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJzdWItbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpb2xhdGluZyBvciBhdHRlbXB0aW5nIHRvIHZpb2xhdGUgdGhlIGludGVncml0eSBvciBzZWN1cml0eSBvZiB0aGUgV2Vic2l0ZSBvciBhbnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2NwcmltZSBDb250ZW50O1xuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc21pdHRpbmcgYW55IGluZm9ybWF0aW9uIChpbmNsdWRpbmcgam9iIHBvc3RzLCBtZXNzYWdlcyBhbmQgaHlwZXJsaW5rcykgb24gb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdWdoIHRoZSBXZWJzaXRlIHRoYXQgaXMgZGlzcnVwdGl2ZSBvciBjb21wZXRpdGl2ZSB0byB0aGUgcHJvdmlzaW9uIG9mIFNlcnZpY2VzIGJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jcHJpbWU7XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVudGlvbmFsbHkgc3VibWl0dGluZyBvbiB0aGUgV2Vic2l0ZSBhbnkgaW5jb21wbGV0ZSwgZmFsc2Ugb3IgaW5hY2N1cmF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZm9ybWF0aW9uO1xuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWtpbmcgYW55IHVuc29saWNpdGVkIGNvbW11bmljYXRpb25zIHRvIG90aGVyIENvdmVuYW50ZXJzO1xuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2luZyBhbnkgZW5naW5lLCBzb2Z0d2FyZSwgdG9vbCwgYWdlbnQgb3Igb3RoZXIgZGV2aWNlIG9yIG1lY2hhbmlzbSAoc3VjaCBhcyBzcGlkZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvYm90cywgYXZhdGFycyBvciBpbnRlbGxpZ2VudCBhZ2VudHMpIHRvIG5hdmlnYXRlIG9yIHNlYXJjaCB0aGUgV2Vic2l0ZTtcbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW1wdGluZyB0byBkZWNpcGhlciwgZGVjb21waWxlLCBkaXNhc3NlbWJsZSBvciByZXZlcnNlIGVuZ2luZWVyIGFueSBwYXJ0IG9mIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlYnNpdGU7XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcHlpbmcgb3IgZHVwbGljYXRpbmcgaW4gYW55IG1hbm5lciBhbnkgb2YgdGhlIGRvY3ByaW1lIENvbnRlbnQgb3Igb3RoZXIgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGUgZnJvbSB0aGUgV2Vic2l0ZTsgYW5kXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+VGhlIFdlYnNpdGUgc2hhbGwgbm90IGJlIHVzZWQgZm9yIGlsbGVnYWwgcHVycG9zZXMuIFRoZSBpbmZvcm1hdGlvbiBhbmQgU2VydmljZXMgc2hhbGwgbm90XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBiZSB1c2VkIGZvciBhbnkgaWxsZWdhbCBwdXJwb3NlLiBZb3UgbWF5IG5vdCBhY2Nlc3Mgb3VyIG5ldHdvcmtzLCBjb21wdXRlcnMsIG9yIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mb3JtYXRpb24gYW5kIFNlcnZpY2VzIGluIGFueSBtYW5uZXIgdGhhdCBjb3VsZCBkYW1hZ2UsIGRpc2FibGUsIG92ZXJidXJkZW4sIG9yIGltcGFpclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbSwgb3IgaW50ZXJmZXJlIHdpdGggYW55IG90aGVyIHBlcnNvbidzIHVzZSBhbmQgZW5qb3ltZW50LiBZb3Ugc2hhbGwgbm90IGF0dGVtcHQgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhaW4gdW5hdXRob3JpemVkIGFjY2VzcyB0byBhbnkgSW5mb3JtYXRpb24gb3IgU2VydmljZXMsIG90aGVyIGFjY291bnRzLCBjb21wdXRlciBzeXN0ZW1zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb3IgbmV0d29ya3MgY29ubmVjdGVkIHdpdGggdGhlIFdlYnNpdGUsIHRoZSBJbmZvcm1hdGlvbiwgb3IgU2VydmljZXMuIFlvdSBzaGFsbCBub3QgdXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhbnkgYXV0b21hdGVkIG1lYW5zIChzdWNoIGFzIGEgc2NyYXBlcikgdG8gYWNjZXNzIHRoZSBXZWJzaXRlLCB0aGUgSW5mb3JtYXRpb24sIG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlcyBmb3IgYW55IHB1cnBvc2UuIFN1Y2ggdW5hdXRob3JpemVkIGFjY2VzcyBpbmNsdWRlcywgYnV0IGlzIG5vdCBsaW1pdGVkIHRvLCB1c2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5vdGhlciBwZXJzb27igJlzIGxvZ2luIGNyZWRlbnRpYWxzIHRvIGFjY2VzcyBoaXMgb3IgaGVyIGRvY3ByaW1lIHByb2ZpbGUvIGFjY291bnQuIEFueVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW1wdCBieSBhbnkgaW5kaXZpZHVhbCBvciBlbnRpdHkgdG8gc29saWNpdCBsb2dpbiBpbmZvcm1hdGlvbiBvZiBhbnkgb3RoZXIgdXNlciB0byBhY2Nlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFueSBzdWNoIGFjY291bnQgaXMgYW4gZXhwcmVzcyBhbmQgZGlyZWN0IHZpb2xhdGlvbiBvZiB0aGVzZSBUZXJtcyBvZiBVc2UgYW5kIG9mIGFwcGxpY2FibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdyhzKSwgaW5jbHVkaW5nIHJlbGV2YW50IHByaXZhY3kgYW5kIHNlY3VyaXR5IGxhd3MgYW5kIGxhd3MgcHJvaGliaXRpbmcgdW5mYWlyIG9yIHVuZXRoaWNhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVzaW5lc3MgcHJhY3RpY2VzLlxuICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjLXN1YmhlYWRpbmdcIj4xMi4mbmJzcDsmbmJzcDsmbmJzcDtOTyBXQVJSQU5USUVTPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+VXNlcnMgYWNjZXB0IGFuZCBhY2tub3dsZWRnZXMgdGhhdCB0aGUgU2VydmljZXMgb2ZmZXJlZCBieSBkb2NwcmltZSB0aHJvdWdoIHRoZSBXZWJzaXRlIChvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYW55IG9mIGl0cyBsaWNlbnNvcnMgb3IgcHJvdmlkZXJzIG9yIFRoaXJkIFBhcnR5IFNlcnZpY2UgUHJvdmlkZXJzKSBhcmUgcHJvdmlkZWQg4oCYYXMgaXPigJksIGFzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGUsIGFuZCB3aXRob3V0IGFueSB3YXJyYW50aWVzIG9yIHJlcHJlc2VudGF0aW9ucyBvciBjb25kaXRpb25zIChleHByZXNzIG9yIGltcGxpZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRpbmcgdGhlIGltcGxpZWQgd2FycmFudGllcyBvciByZXByZXNlbnRhdGlvbnMgb2YgbWVyY2hhbnRhYmlsaXR5LCBhY2N1cmFjeSwgZml0bmVzcyBmb3IgYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljdWxhciBwdXJwb3NlLCB0aXRsZSBhbmQgbm9uLWluZnJpbmdlbWVudCwgYXJpc2luZyBieSBzdGF0dXRlIG9yIG90aGVyd2lzZSBpbiBsYXcgb3IgZnJvbSBhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjb3Vyc2Ugb2YgZGVhbGluZyBvciB1c2FnZSBvciB0cmFkZSkuIGRvY3ByaW1lIGRvZXMgbm90IHByb3ZpZGUgb3IgbWFrZSBhbnkgcmVwcmVzZW50YXRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FycmFudGllcyBvciBndWFyYW50ZWVzIGV4cHJlc3Mgb3IgaW1wbGllZCBhYm91dCB0aGUgV2Vic2l0ZSBvciB0aGUgU2VydmljZXMuIGRvY3ByaW1lIGRvZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdCB2ZXJpZnkgYW55IGNvbnRlbnQgb3IgaW5mb3JtYXRpb24gcHJvdmlkZWQgYnkgdGhlIFVzZXJzIG9yIGFueSBUaGlyZCBQYXJ0eSBTZXJ2aWNlIFByb3ZpZGVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvbGxlY3RpdmVseSByZWZlcnJlZCB0byBhcyB0aGUg4oCcT3RoZXIgUGFydGllc+KAnSkgb24gdGhlIFdlYnNpdGUgYW5kIHRvIHRoZSBmdWxsZXN0IGV4dGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVybWl0dGVkIGJ5IGFwcGxpY2FibGUgbGF3KHMpLCBkaXNjbGFpbXMgYWxsIGxpYWJpbGl0eSBhcmlzaW5nIG91dCBvZiB0aGUgT3RoZXIgUGFydGllc+KAmSB1c2Ugb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbGlhbmNlIHVwb24gdGhlIFdlYnNpdGUsIHRoZSBTZXJ2aWNlcywgdGhlIGRvY3ByaW1lIENvbnRlbnQsIFRoaXJkIFBhcnR5IENvbnRlbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwcmVzZW50YXRpb25zIGFuZCB3YXJyYW50aWVzIG1hZGUgYnkgdGhlIE90aGVyIFBhcnRpZXMgb24gdGhlIFdlYnNpdGUgb3IgYW55IGxvc3MgYXJpc2luZyBvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mIHRoZSBtYW5uZXIgaW4gd2hpY2ggdGhlIFNlcnZpY2VzIGhhdmUgYmVlbiByZW5kZXJlZC5cbiAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiPmRvY3ByaW1lIGFsc28gZG9lcyBub3QgcHJvdmlkZSBhbnkgcmVwcmVzZW50YXRpb24gb3IgZ2l2ZSBhbnkgZ3VhcmFudGVlIG9yIHdhcnJhbnR5ICh3aGV0aGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzIG9yIGltcGxpZWQpIGFib3V0IHRoZSBXZWJzaXRlIG9yIGFueSBvZiB0aGUgU2VydmljZXMgb2ZmZXJlZCBvciBzZXJ2aWNlcyBvZmZlcmVkIG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlZCBieSB0aGUgVGhpcmQgUGFydHkgU2VydmljZSBQcm92aWRlcnMuXG4gICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2Mtc3ViaGVhZGluZ1wiPjEzLiZuYnNwOyZuYnNwOyZuYnNwO0xJQUJJTElUWTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJzdWItbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5kb2NwcmltZSBzaGFsbCBub3QgYmUgcmVzcG9uc2libGUgb3IgbGlhYmxlIGluIGFueSBtYW5uZXIgdG8gdGhlIFVzZXJzIG9yIGFueSBUaGlyZCBQYXJ0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnZpY2UgUHJvdmlkZXJzIChjb2xsZWN0aXZlbHkgcmVmZXJyZWQgdG8gYXMgdGhlIOKAnE90aGVyIFBhcnRpZXPigJ0pIGZvciBhbnkgbG9zc2VzLCBkYW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5qdXJpZXMgb3IgZXhwZW5zZXMgaW5jdXJyZWQgYnkgYXMgYSByZXN1bHQgb2YgYW55IGRpc2Nsb3N1cmVzIG1hZGUgYnkgZG9jcHJpbWUsIHdoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3RoZXIgUGFydGllcyBoYXZlIGNvbnNlbnRlZCB0byB0aGUgbWFraW5nIG9mIHN1Y2ggZGlzY2xvc3VyZXMgYnkgZG9jcHJpbWUuIFRoZSBPdGhlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhcnRpZXMgc2hhbGwgbm90IGhvbGQgZG9jcHJpbWUgcmVzcG9uc2libGUgb3IgbGlhYmxlIGluIGFueSB3YXkgZm9yIGFueSBkaXNjbG9zdXJlcyBieVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3ByaW1lIGZvciBjb2xsZWN0aW9uLCB1c2UsIHN0b3JhZ2UgYW5kIHRyYW5zZmVyIG9mIHBlcnNvbmFsIGluZm9ybWF0aW9uIHVuZGVyIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByaXZhY3kgUG9saWN5LiBkb2NwcmltZSBzaGFsbCBub3QgYmUgcmVzcG9uc2libGUgZm9yIHRoZSBtaXNoYXBzL21pc3NlZCBzZXJ2aWNlcyBkdWUgdG8gbm9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlL25vIHNob3cgZnJvbSB0aGUgT3RoZXIgUGFydGllczsgZG9jcHJpbWUgc2hhbGwgbm90IGJlIHJlc3BvbnNpYmxlIGZvciBhbnkgZXJyb3IgaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnkgb2YgdGhlIHNlcnZpY2VzIGJlaW5nIHByb3ZpZGVkIGJ5IHRoZSBUaGlyZCBQYXJ0eSBTZXJ2aWNlIFByb3ZpZGVycy5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPmRvY3ByaW1lIGFzc3VtZXMgbm8gcmVzcG9uc2liaWxpdHksIGFuZCBzaGFsbCBub3QgYmUgbGlhYmxlIGZvciwgYW55IGRhbWFnZXMgdG8sIG9yIHZpcnVzZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0IG1heSBpbmZlY3QgT3RoZXIgUGFydGllc+KAmSBlcXVpcG1lbnQgb24gYWNjb3VudCBvZiB0aGUgT3RoZXIgUGFydGllc+KAmSBhY2Nlc3MgdG8sIHVzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mLCBvciBicm93c2luZyB0aGUgV2Vic2l0ZSBvciB0aGUgZG93bmxvYWRpbmcgb2YgYW55IG1hdGVyaWFsLCBkYXRhLCB0ZXh0LCBpbWFnZXMsIHZpZGVvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCwgb3IgYXVkaW8gY29udGVudCBmcm9tIHRoZSBXZWJzaXRlLiBJZiBhbnkgb2YgdGhlIE90aGVyIFBhcnR5IGlzIGRpc3NhdGlzZmllZCB3aXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIFdlYnNpdGUsIHRoZSBzb2xlIHJlbWVkeSBvZiBzdWNoIE90aGVyIFBhcnR5KHMpIGlzIHRvIGRpc2NvbnRpbnVlIHVzaW5nIHRoZSBXZWJzaXRlLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+VG8gdGhlIG1heGltdW0gZXh0ZW50IHBlcm1pdHRlZCBieSBhcHBsaWNhYmxlIGxhdyhzKSwgZG9jcHJpbWUsIGl0cyBhZmZpbGlhdGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGVwZW5kZW50IGNvbnRyYWN0b3JzLCBzZXJ2aWNlIHByb3ZpZGVycywgY29uc3VsdGFudHMsIGxpY2Vuc29ycywgYWdlbnRzLCBhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXByZXNlbnRhdGl2ZXMsIGFmZmlsaWF0ZXMsIGdyb3VwIGNvbXBhbmllcyBhbmQgZWFjaCBvZiB0aGVpciByZXNwZWN0aXZlIGRpcmVjdG9ycywgb2ZmaWNlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvciBlbXBsb3llZXMgKOKAnFByb3RlY3RlZCBFbnRpdGllc+KAnSksIHNoYWxsIG5vdCBiZSBsaWFibGUgZm9yIGFueSBkaXJlY3QsIGluZGlyZWN0LCBzcGVjaWFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY2lkZW50YWwsIHB1bml0aXZlLCBleGVtcGxhcnkgb3IgY29uc2VxdWVudGlhbCBkYW1hZ2VzLCBvciBhbnkgb3RoZXIgZGFtYWdlcyBvZiBhbnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kLCBhcmlzaW5nIGZyb20sIG9yIGluIGNvbm5lY3Qgd2l0aCBvciBkaXJlY3RseSBvciBpbmRpcmVjdGx5IHJlbGF0ZWQgdG8sIHRoZSB1c2Ugb2YsIG9yIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluYWJpbGl0eSB0byB1c2UsIHRoZSBXZWJzaXRlIG9yIHRoZSBjb250ZW50LCBtYXRlcmlhbHMgYW5kIGZ1bmN0aW9ucyByZWxhdGVkIHRoZXJldG87IGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiBQcm90ZWN0ZWQgRW50aXRpZXMgaGFzIGJlZW4gYWR2aXNlZCBvZiB0aGUgcG9zc2liaWxpdHkgb2Ygc3VjaCBkYW1hZ2VzLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+SW4gKGl2KSwgYWxsIG9yIGFueSBwcm9kdWN0cyBvciBzZXJ2aWNlIGJ5IGEgVGhpcmQgUGFydHkgU2VydmljZSBQcm92aWRlciB0byBhbnkgVXNlcjsgb3IgKGlpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFueSBjb21tZW50cyBvciBmZWVkYmFjayBnaXZlbiBieSBhbnkgb2YgdGhlIFVzZXJzIGluIHJlbGF0aW9uIHRvIHRoZSBnb29kcyBvciBzZXJ2aWNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVkIGJ5IGFueSBUaGlyZCBQYXJ0eSBTZXJ2aWNlIFByb3ZpZGVyczsgb3IgKGlpKSBhbnkgY29udGVudCBwb3N0ZWQsIHRyYW5zbWl0dGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2hhbmdlZCBvciByZWNlaXZlZCBieSBvciBvbiBiZWhhbGYgb2YgYW55IFVzZXIsIFRoaXJkIFBhcnR5IFNlcnZpY2UgUHJvdmlkZXJzIG9yIG90aGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyc29uIG9uIG9yIHRocm91Z2ggdGhlIFdlYnNpdGUuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JbiBubyBldmVudCBzaGFsbCB0aGUgUHJvdGVjdGVkIEVudGl0aWVzIGJlIGxpYWJsZSBmb3IgZmFpbHVyZSBvbiB0aGUgcGFydCBvZiB0aGUgVXNlcnMgb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlyZCBQYXJ0eSBTZXJ2aWNlIFByb3ZpZGVycyB0byBwcm92aWRlIGFncmVlZCBzZXJ2aWNlcyBvciB0byBtYWtlIGhpbXNlbGYvaGVyc2VsZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZSBhdCB0aGUgYXBwb2ludGVkIHRpbWUsIGNhbmNlbGxhdGlvbiBvciByZXNjaGVkdWxpbmcgb2YgYXBwb2ludG1lbnRzLiBJbiBubyBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYWxsIHRoZSBQcm90ZWN0ZWQgRW50aXRpZXMgYmUgbGlhYmxlIGZvciBhbnkgY29tbWVudHMgb3IgZmVlZGJhY2sgZ2l2ZW4gYnkgYW55IG9mIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJzIGluIHJlbGF0aW9uIHRvIHRoZSBzZXJ2aWNlcyBwcm92aWRlZCBieSBhIFRoaXJkIFBhcnR5IFNlcnZpY2UgUHJvdmlkZXJzXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5kb2NwcmltZSBkaXNjbGFpbXMgYW55IGxpYWJpbGl0eSBpbiByZWxhdGlvbiB0byB0aGUgdmFsaWRpdHkgb2YgdGhlIG1lZGljYWwgYWR2aWNlIHByb3ZpZGVkIGJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIE1lZGljYWwgRXhwZXJ0cyBhbmQgdGhlIHZhbGlkaXR5IGFuZCBsZWdhbGl0eSBvZiB0aGUgZS1wcmVzY3JpcHRpb24gZm9yIGRpc3BlbnNhdGlvbiBvZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGljaW5lcyBhbmQgY29uZHVjdCBvZiBkaWFnbm9zdGljIHRlc3RzLiBBbGwgbGlhYmlsaXRpZXMgYXJpc2luZyBvdXQgb2YgYW55IHdyb25nIGRpYWdub3Npc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mIG1lZGljYWwgY29uZGl0aW9uIGJ5IHRoZSBNZWRpY2FsIEV4cGVydHMgYW5kLyBvciBhcmlzaW5nIGZyb20gdGhlIGUtcHJlc2NyaXB0aW9uIHdpbGwgYmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZiB0aGUgY29uY2VybmVkIE1lZGljYWwgRXhwZXJ0LiBGdXJ0aGVyLCBhbGwgbGlhYmlsaXRpZXMgYXJpc2luZyBvdXQgb2YgYW55IHdyb25nIGRpYWdub3Npc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcG9ydCBieSB0aGUgVGhpcmQgUGFydHkgTGFicyBhbmQvIG9yIGFyaXNpbmcgZnJvbSB0aGUgd3JvbmcgZGlzcGVuc2F0aW9uIG9mIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBoYXJtYWNldXRpY2FsIEdvb2RzIGFuZCBTZXJ2aWNlcyB3aWxsIGJlIG9mIHRoZSBjb25jZXJuZWQgVGhpcmQgUGFydHkgU2VydmljZSBQcm92aWRlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcyB0aGUgY2FzZSBtYXkgYmUuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5UaGUgVXNlcnMgbWF5IHNoYXJlIHRoZWlyIHByZXZpb3VzIG1lZGljYWwgaGlzdG9yeSBkdXJpbmcgaW50ZXJhY3Rpb24gd2l0aCB0aGUgTWVkaWNhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV4cGVydHMuIFRoZSBVc2VycyB1bmRlcnRha2UgdG8gc2hhcmUgc3VjaCBpbmZvcm1hdGlvbiBhdCB0aGVpciBvd24gcmlzay4gZG9jcHJpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNlcnZlcyB0aGUgcmlnaHQgdG8gcmV0YWluIHN1Y2ggaW5mb3JtYXRpb24gZm9yIHRoZSBwdXJwb3NlIG9mIHByb3ZpZGluZyBTZXJ2aWNlcyB0byB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2Vycy5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlRoZSBVc2VycyBhY2tub3dsZWRnZSB0aGF0IHRoZSBQcm90ZWN0ZWQgRW50aXRpZXMgbWVyZWx5IGFjdCBpbiB0aGUgY2FwYWNpdHkgb2YgZmFjaWxpdGF0b3JzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmV0d2VlbiB0aGUgT3RoZXIgUGFydGllcyBieSBwcm92aWRpbmcgYSBwbGF0Zm9ybSBmb3IgdGhlbSB0byBpbnRlcmFjdCBhbmQgdHJhbnNhY3QuIEluIG5vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQgc2hhbGwgdGhlIFByb3RlY3RlZCBFbnRpdGllcyBiZSBoZWxkIGxpYWJsZSBmb3IgYW55IG9mIHRoZSBsb3NzZXMgYXR0cmlidXRhYmxlIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VydmljZXMgb2ZmZXJlZCB0aHJvdWdoIHRoZSBXZWJzaXRlLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+SW4gbm8gZXZlbnQgc2hhbGwgdGhlIHRvdGFsIGFnZ3JlZ2F0ZSBsaWFiaWxpdHkgb2YgdGhlIFByb3RlY3RlZCBFbnRpdGllcyB0byBhbnkgT3RoZXIgUGFydGllc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciBhbGwgZGFtYWdlcywgbG9zc2VzLCBhbmQgY2F1c2VzIG9mIGFjdGlvbiAod2hldGhlciBpbiBjb250cmFjdCBvciB0b3J0LCBpbmNsdWRpbmcsIGJ1dCBub3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW1pdGVkIHRvIG5lZ2xpZ2VuY2UsIHN0cmljdCBsaWFiaWxpdHksIHByb2R1Y3QgbGlhYmlsaXR5IG9yIG90aGVyd2lzZSkgYXJpc2luZyBmcm9tIHRoZXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVybXMgb2YgVXNlIG9yIGFueSBPdGhlciBQYXJ0aWVz4oCZIHVzZSBvZiB0aGUgV2Vic2l0ZSBleGNlZWQgYW4gYWdncmVnYXRlIGFtb3VudCBvZiBJTlJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAwLy0gKEluZGlhbiBSdXBlZXMgVGhvdXNhbmQgb25seSkuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5kb2NwcmltZSBhY2NlcHRzIG5vIGxpYWJpbGl0eSBmb3IgYW55IGVycm9ycyBvciBvbWlzc2lvbnMgb24gYmVoYWxmIG9mIHRoZSBPdGhlciBQYXJ0aWVzLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjLXN1YmhlYWRpbmdcIj4xNC4mbmJzcDsmbmJzcDsmbmJzcDtJTkRFTU5JVFk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj5Zb3UgYWdyZWUgdG8gZGVmZW5kLCBpbmRlbW5pZnkgYW5kIGhvbGQgaGFybWxlc3MgZG9jcHJpbWUsIHRoZSBQcm90ZWN0ZWQgRW50aXRpZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRlcGVuZGVudCBjb250cmFjdG9ycywgc2VydmljZSBwcm92aWRlcnMsIGNvbnN1bHRhbnRzLCBsaWNlbnNvcnMsIGFnZW50cywgYW5kIHJlcHJlc2VudGF0aXZlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBlYWNoIG9mIHRoZWlyIHJlc3BlY3RpdmUgZGlyZWN0b3JzLCBvZmZpY2VycyBhbmQgZW1wbG95ZWVzLCBmcm9tIGFuZCBhZ2FpbnN0IGFueSBhbmQgYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFpbXMsIGxvc3NlcywgbGlhYmlsaXR5LCBkYW1hZ2VzLCBhbmQvb3IgY29zdHMgKGluY2x1ZGluZywgYnV0IG5vdCBsaW1pdGVkIHRvLCByZWFzb25hYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRvcm5leSBmZWVzIGFuZCBjb3N0cykgYXJpc2luZyBmcm9tIG9yIHJlbGF0ZWQgdG8gKGEpIGFjY2VzcyB0byBvciB1c2Ugb2YgV2Vic2l0ZTsgKGIpIHZpb2xhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb2YgdGhlc2UgVGVybXMgb2YgVXNlIG9yIGFueSBhcHBsaWNhYmxlIGxhdyhzKTsgKGMpIHZpb2xhdGlvbiBvZiBhbnkgcmlnaHRzIG9mIGFub3RoZXIgcGVyc29uL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LCBpbmNsdWRpbmcgaW5mcmluZ2VtZW50IG9mIHRoZWlyIGludGVsbGVjdHVhbCBwcm9wZXJ0eSByaWdodHM7IG9yIChkKSBjb25kdWN0IGluIGNvbm5lY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGggdGhlIFdlYnNpdGUuXG4gICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2Mtc3ViaGVhZGluZ1wiPjE1LiZuYnNwOyZuYnNwOyZuYnNwO0dFTkVSQUwgVEVSTVM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwic3ViLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkxpbmtzIHRvIFRoaXJkIFBhcnR5IFdlYnNpdGVzOjwvc3Bhbj4gVGhlIFdlYnNpdGUgbWF5IGJlIGxpbmtlZCB0byB0aGUgd2Vic2l0ZSBvZiB0aGlyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWVzLCBhZmZpbGlhdGVzIGFuZCBidXNpbmVzcyBwYXJ0bmVycy4gZG9jcHJpbWUgaGFzIG5vIGNvbnRyb2wgb3ZlciwgYW5kIG5vdCBsaWFibGUgb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2libGUgZm9yIGNvbnRlbnQsIGFjY3VyYWN5LCB2YWxpZGl0eSwgcmVsaWFiaWxpdHksIHF1YWxpdHkgb2Ygc3VjaCB3ZWJzaXRlcyBvciBtYWRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZSBieS90aHJvdWdoIHRoZSBXZWJzaXRlLiBJbmNsdXNpb24gb2YgYW55IGxpbmsgb24gdGhlIFdlYnNpdGUgZG9lcyBub3QgaW1wbHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdCBkb2NwcmltZSBlbmRvcnNlcyB0aGUgbGlua2VkIHdlYnNpdGUuIE90aGVyIFBhcnRpZXMgbWF5IHVzZSB0aGUgbGlua3MgYW5kIHRoZXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VzIGF0IHRoZWlyIG93biByaXNrLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk1vZGlmaWNhdGlvbnM6PC9zcGFuPiBkb2NwcmltZSByZXNlcnZlcyB0aGUgcmlnaHQgdG8gY2hhbmdlIG9yIG1vZGlmeSB0aGVzZSBUZXJtcyBvZiBVc2Ugb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW55IHBvbGljeSBvciBndWlkZWxpbmUgb2YgdGhlIFdlYnNpdGUgaW5jbHVkaW5nIHRoZSBQcml2YWN5IFBvbGljeSwgYXQgYW55IHRpbWUgYW5kIGluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0cyBzb2xlIGRpc2NyZXRpb24uIEFueSBjaGFuZ2VzIG9yIG1vZGlmaWNhdGlvbnMgd2lsbCBiZSBlZmZlY3RpdmUgaW1tZWRpYXRlbHkgdXBvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0aW5nIHRoZSByZXZpc2lvbnMgb24gdGhlIFdlYnNpdGUgYW5kIFlvdSB3YWl2ZSBhbnkgcmlnaHQgWW91IG1heSBoYXZlIHRvIHJlY2VpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlY2lmaWMgbm90aWNlIG9mIHN1Y2ggY2hhbmdlcyBvciBtb2RpZmljYXRpb25zLiBZb3VyIGNvbnRpbnVlZCB1c2Ugb2YgdGhlIFdlYnNpdGUgd2lsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtIFlvdXIgYWNjZXB0YW5jZSBvZiBzdWNoIGNoYW5nZXMgb3IgbW9kaWZpY2F0aW9uczsgdGhlcmVmb3JlLCBZb3Ugc2hvdWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyZXF1ZW50bHkgcmV2aWV3IHRoZXNlIFRlcm1zIG9mIFVzZSBhbmQgYXBwbGljYWJsZSBwb2xpY2llcyB0byB1bmRlcnN0YW5kIHRoZSB0ZXJtc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgY29uZGl0aW9ucyB0aGF0IGFwcGx5IHRvIFlvdXIgdXNlIG9mIHRoZSBXZWJzaXRlLiBGdXJ0aGVyLCBkb2NwcmltZSBhbHNvIHJlc2VydmVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSByaWdodCB0byBtb2RpZnkgb3IgZGlzY29udGludWUsIHRlbXBvcmFyaWx5IG9yIHBlcm1hbmVudGx5LCB0aGUgV2Vic2l0ZSBvciBhbnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZXMgb3IgcG9ydGlvbnMgdGhlcmVvZiB3aXRob3V0IHByaW9yIG5vdGljZS4gWW91IGFncmVlIHRoYXQgZG9jcHJpbWUgd2lsbCBub3QgYmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlhYmxlIGZvciBhbnkgbW9kaWZpY2F0aW9uLCBzdXNwZW5zaW9uIG9yIGRpc2NvbnRpbnVhbmNlIG9mIHRoZSBXZWJzaXRlIG9yIGFueSBvdGhlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0IHRoZXJlb2YuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q29va2llczo8L3NwYW4+IFRoZSBXZWJzaXRlIHVzZXMgdGVtcG9yYXJ5IGNvb2tpZXMgdG8gc3RvcmUgY2VydGFpbiBkYXRhICh0aGF0IGlzIG5vdCBzZW5zaXRpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyc29uYWwgZGF0YSBvciBpbmZvcm1hdGlvbikgdGhhdCBpcyB1c2VkIGJ5IGRvY3ByaW1lIGZvciB0aGUgdGVjaG5pY2FsIGFkbWluaXN0cmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mIHRoZSBXZWJzaXRlLCByZXNlYXJjaCBhbmQgZGV2ZWxvcG1lbnQsIGFuZCBmb3IgVXNlciBhZG1pbmlzdHJhdGlvbi4gSW4gdGhlIGNvdXJzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZiBzZXJ2aW5nIG9yIG9wdGltaXppbmcgc2VydmljZXMgdG8gWW91LCBkb2NwcmltZSBtYXkgYWxsb3cgYXV0aG9yaXplZCB0aGlyZCBwYXJ0aWVzIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlIG9yIHJlY29nbml6ZSBhIHVuaXF1ZSBjb29raWUgb24gdGhlIFlvdXIgYnJvd3Nlci4gZG9jcHJpbWUgZG9lcyBub3Qgc3RvcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyc29uYWxseSBpZGVudGlmaWFibGUgaW5mb3JtYXRpb24gaW4gdGhlIGNvb2tpZXMuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+SW50ZWxsZWN0dWFsIHByb3BlcnR5IHJpZ2h0czo8L3NwYW4+IEFsbCB0aGUgaW50ZWxsZWN0dWFsIHByb3BlcnR5IHVzZWQgb24gdGhlIFdlYnNpdGUgZXhjZXB0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRob3NlIHdoaWNoIGhhdmUgYmVlbiBpZGVudGlmaWVkIGFzIHRoZSBpbnRlbGxlY3R1YWwgcHJvcGVydGllcyBvZiB0aGUgT3RoZXIgUGFydGllcyhhc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZpbmVkIGFib3ZlKSBzaGFsbCByZW1haW4gdGhlIGV4Y2x1c2l2ZSBwcm9wZXJ0eSBvZiB0aGUgQ29tcGFueS4gVGhlIE90aGVyIFBhcnRpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWdyZWUgbm90IHRvIGNpcmN1bXZlbnQsIGRpc2FibGUgb3Igb3RoZXJ3aXNlIGludGVyZmVyZSB3aXRoIHNlY3VyaXR5IHJlbGF0ZWQgZmVhdHVyZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2YgdGhlIFdlYnNpdGUgb3IgZmVhdHVyZXMgdGhhdCBwcmV2ZW50IG9yIHJlc3RyaWN0IHVzZSBvciBjb3B5aW5nIG9mIGFueSBtYXRlcmlhbHMgb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5mb3JjZSBsaW1pdGF0aW9ucyBvbiB1c2Ugb2YgdGhlIFdlYnNpdGUgb3IgdGhlIG1hdGVyaWFscyB0aGVyZWluLiBUaGUgbWF0ZXJpYWxzIG9uIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWJzaXRlIG9yIG90aGVyd2lzZSBtYXkgbm90IGJlIG1vZGlmaWVkLCBjb3BpZWQsIHJlcHJvZHVjZWQsIGRpc3RyaWJ1dGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXB1Ymxpc2hlZCwgZG93bmxvYWRlZCwgZGlzcGxheWVkLCBzb2xkLCBjb21waWxlZCwgcG9zdGVkIG9yIHRyYW5zbWl0dGVkIGluIGFueSBmb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yIGJ5IGFueSBtZWFucywgaW5jbHVkaW5nIGJ1dCBub3QgbGltaXRlZCB0bywgZWxlY3Ryb25pYywgbWVjaGFuaWNhbCwgcGhvdG9jb3B5aW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNvcmRpbmcgb3Igb3RoZXIgbWVhbnMuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q29tcGxpYW5jZSBvZiBBcHBsaWNhYmxlIExhdzo8L3NwYW4+IFdoaWxlIGNvbW11bmljYXRpbmcvIHRyYW5zYWN0aW5nIHdpdGggZWFjaCBvdGhlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdWdoIHRoZSBXZWJzaXRlLCBUaGlyZCBQYXJ0eSBTZXJ2aWNlIFByb3ZpZGVycyBzaGFsbCBhdCBhbGwgdGltZXMgZW5zdXJlIGZ1bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxpYW5jZSB3aXRoIHRoZSBhcHBsaWNhYmxlIHByb3Zpc2lvbnMgb2YgdGhlIENvbnRyYWN0IEFjdCwgSVQgQWN0LCBEcnVncyBBY3QgcmVhZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoIHRoZSBEcnVnIFJ1bGVzLCBEcnVncyBhbmQgTWFnaWMgQWN0LCBUaGUgSW5kaWFuIE1lZGljYWwgQ291bmNpbCBBY3QsIDE5NTYgcmVhZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoIHRoZSBJbmRpYW4gTWVkaWNhbCBDb3VuY2lsIFJ1bGVzLCAxOTU3LCBQaGFybWFjeSBBY3QsIENvbnN1bWVyIFByb3RlY3Rpb24gQWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxOTg2LCBJVCBsYXcgKGluY2x1ZGluZyBydWxlcyBmb3Igc2Vuc2l0aXZlIHBlcnNvbmFsIGluZm9ybWF0aW9uIGFzIGVuc2hyaW5lZCB1bmRlciBJVFxuICAgICAgICAgICAgICAgbGF3KSwgZXRjLiA8c3Ryb25nPijigJxDYXB0aW9uZWQgTGF3c+KAnSk8L3N0cm9uZz4gYXMgd2VsbCBhcyBhbGwgb3RoZXIgbGF3cyBmb3IgdGhlIHRpbWUgYmVpbmcgaW4gZm9yY2UuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VGVybWluYXRpb246PC9zcGFuPiBkb2NwcmltZSByZXNlcnZlcyB0aGUgcmlnaHQgdG8sIGF0IGFueSB0aW1lLCBhbmQgd2l0aCBvciB3aXRob3V0IG5vdGljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVybWluYXRlIHRoZXNlIFRlcm1zIG9mIFVzZSBhZ2FpbnN0IHRoZSBVc2VyKHMpLCBpZiB0aGVyZSBpczpcbiAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJwcml2YWN5LW9yZGVyLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LW9yZGVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCcmVhY2ggb2YgYW55IG9mIGFwcGxpY2FibGUgbGF3KHMpLCBpbmNsdWRpbmcgYnV0IG5vdCBsaW1pdGVkIHRvIHRoZSBDYXB0aW9uZWQgTGF3c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yIHRoZSBwcm92aXNpb25zIG9mIHRoZXNlIFRlcm1zIG9mIFVzZSBvciB0aGUgdGVybXMgb2YgdGhlIFByaXZhY3kgUG9saWN5IG9yIGFueVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyIHRlcm1zLCBjb25kaXRpb25zLCBvciBwb2xpY2llcyB0aGF0IG1heSBiZSBhcHBsaWNhYmxlIHRvIHRoZSBTZXJ2aWNlcyBmcm9tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZSB0byB0aW1lIChvciBoYXZlIGFjdGVkIGluIGEgbWFubmVyIHRoYXQgY2xlYXJseSBzaG93cyB0aGF0IE90aGVyIFBhcnR5KHMpIGRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90IGludGVuZCB0bywgb3IgYXJlIHVuYWJsZSB0bywgY29tcGx5IHdpdGggdGhlIHNhbWUpOyBvclxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LW9yZGVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCcmVhY2ggb2YgYW55IHRlcm1zIGFuZCBjb25kaXRpb25zIG9mIHRoZXNlIFRlcm1zIG9mIFVzZTtcbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1vcmRlci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jcHJpbWUgaXMgdW5hYmxlIHRvIHZlcmlmeSBvciBhdXRoZW50aWNhdGUgYW55IGluZm9ybWF0aW9uIHByb3ZpZGVkIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jcHJpbWU7IG9yXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktb3JkZXItaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEEgdGhpcmQgcGFydHkgcmVwb3J0cyB2aW9sYXRpb24gb2YgYW55IG9mIGl0cyByaWdodCBhcyBhIHJlc3VsdCBvZiB5b3VyIHVzZSBvZiB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlcztcbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1vcmRlci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jcHJpbWUgaGFzIHJlYXNvbmFibGUgZ3JvdW5kcyBmb3Igc3VzcGVjdGluZyBhbnkgaWxsZWdhbCwgZnJhdWR1bGVudCBvciBhYnVzaXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZpdHkgb24gcGFydCBvZiBzdWNoIFVzZXI7IG9yXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktb3JkZXItaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3ByaW1lIGJlbGlldmVzLCBpbiBpdHMgc29sZSBkaXNjcmV0aW9uLCB0aGF0IE90aGVyIFBhcnRpZXMgYWN0aW9ucyBtYXkgY2F1c2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWdhbCBsaWFiaWxpdHkgZm9yIGRvY3ByaW1lIChvciBhbnkgb2YgaXRzIGFmZmlsaWF0ZXMsIGluZGVwZW5kZW50IGNvbnRyYWN0b3JzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2UgcHJvdmlkZXJzLCBjb25zdWx0YW50cywgbGljZW5zb3JzLCBhZ2VudHMsIGFuZCByZXByZXNlbnRhdGl2ZXMpIG9yIGFyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyYXJ5IHRvIHRoZSBpbnRlcmVzdHMgb2YgdGhlIFdlYnNpdGU7IG9yXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktb3JkZXItaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3ByaW1lIGlzIHJlcXVpcmVkIHRvIGRvIHNvIGJ5IGxhdzsgb3JcbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1vcmRlci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIHByb3Zpc2lvbiBvZiB0aGUgU2VydmljZXMgdG8gdGhlIGdlbmVyYWwgcHVibGljLCBpcyBpbiBkb2NwcmltZeKAmXMgb3Bpbmlvbiwgbm9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb25nZXIgY29tbWVyY2lhbGx5IHZpYWJsZTsgb3JcbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1vcmRlci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jcHJpbWUgaGFzIGVsZWN0ZWQgdG8gZGlzY29udGludWUsIHdpdGggb3Igd2l0aG91dCByZWFzb24sIGFjY2VzcyB0byB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWJzaXRlIG9yIHRoZSBTZXJ2aWNlcyAob3IgYW55IHBhcnQgdGhlcmVvZikuXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktb3JkZXItaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3ByaW1lIGJlbGlldmVzIGluIGl0cyBzb2xlIGRpc2NyZXRpb24gdGhhdCBVc2Vy4oCZcyBhY3Rpb25zIG1heSBjYXVzZSBsZWdhbCBsaWFiaWxpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3Igc3VjaCBVc2VyLCBvdGhlciBVc2VycyBvciBmb3IgZG9jcHJpbWUgb3IgYXJlIGNvbnRyYXJ5IHRvIHRoZSBpbnRlcmVzdHMgb2YgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2Vic2l0ZS5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1vcmRlci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT25jZSB0ZW1wb3JhcmlseSBzdXNwZW5kZWQsIGluZGVmaW5pdGVseSBzdXNwZW5kZWQgb3IgdGVybWluYXRlZCwgdGhlIFVzZXIgbWF5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90IGNvbnRpbnVlIHRvIHVzZSB0aGUgV2Vic2l0ZSB1bmRlciB0aGUgc2FtZSBhY2NvdW50LCBhIGRpZmZlcmVudCBhY2NvdW50IG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmUtcmVnaXN0ZXIgdW5kZXIgYSBuZXcgYWNjb3VudC4gT24gdGVybWluYXRpb24gb2YgYW4gYWNjb3VudCBkdWUgdG8gdGhlIHJlYXNvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW50aW9uZWQgaGVyZWluLCBzdWNoIFVzZXIgc2hhbGwgbm8gbG9uZ2VyIGhhdmUgYWNjZXNzIHRvIGRhdGEsIG1lc3NhZ2VzLCBmaWxlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBvdGhlciBtYXRlcmlhbCBrZXB0IG9uIHRoZSBXZWJzaXRlIGJ5IHN1Y2ggVXNlci4gVGhlIFVzZXIgc2hhbGwgZW5zdXJlIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZS9zaGUvaXQgaGFzIGNvbnRpbnVvdXMgYmFja3VwIG9mIGFueSBtZWRpY2FsIHNlcnZpY2VzIHRoZSBVc2VyIGhhcyByZW5kZXJlZCBpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyIHRvIGNvbXBseSB3aXRoIHRoZSBVc2Vy4oCZcyByZWNvcmQga2VlcGluZyBwcm9jZXNzIGFuZCBwcmFjdGljZXNcbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1vcmRlci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIHJpZ2h0IHRvIHRlcm1pbmF0ZS8gc3VzcGVuZCB0aGUgYWNjb3VudCBpcyBpbiBhZGRpdGlvbiB0bywgYW5kIHdpdGhvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVqdWRpY2UgdG8sIGRvY3ByaW1l4oCZcyByaWdodCB0byBpbml0aWF0ZSBhY3Rpb24gYWdhaW5zdCBhIFVzZXIgKG9yIE90aGVyIFBhcnRpZXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluIGFjY29yZGFuY2Ugd2l0aCBhcHBsaWNhYmxlIGxhdy5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkZvcmNlIE1hamV1cmU6PC9zcGFuPiBPdGhlciBQYXJ0aWVzIGFjY2VwdCBhbmQgYWNrbm93bGVkZ2UgdGhhdCBkb2NwcmltZSBzaGFsbCBub3QgYmUgbGlhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciBhbnkgbG9zcyBvciBkYW1hZ2UgY2F1c2VkIHRvIHRoZSBVc2VyIGFzIGEgcmVzdWx0IG9mIGRlbGF5IG9yIGRlZmF1bHQgb3IgZGVmaWNpZW5jeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvciBmYWlsdXJlIGluIHRoZSBTZXJ2aWNlcyBhcyBhIHJlc3VsdCBvZiBhbnkgbmF0dXJhbCBkaXNhc3RlcnMsIGZpcmUsIHJpb3RzLCBjaXZpbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXN0dXJiYW5jZXMsIGFjdGlvbnMgb3IgZGVjcmVlcyBvZiBnb3Zlcm5tZW50YWwgYm9kaWVzLCBjb21tdW5pY2F0aW9uIGxpbmUgZmFpbHVyZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHdoaWNoIGFyZSBub3QgY2F1c2VkIGR1ZSB0byB0aGUgZmF1bHQgb2YgZG9jcHJpbWUgb3IgdGhlIFRoaXJkIFBhcnR5IFNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvdmlkZXJzKSwgb3IgYW55IG90aGVyIGRlbGF5IG9yIGRlZmF1bHQgb3IgZGVmaWNpZW5jeSBvciBmYWlsdXJlIHdoaWNoIGFyaXNlcyBmcm9tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdXNlcyBiZXlvbmQgZG9jcHJpbWXigJlzIHJlYXNvbmFibGUgY29udHJvbCAo4oCcRm9yY2UgTWFqZXVyZSBFdmVudOKAnSkuIEluIHRoZSBldmVudCBvZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnkgRm9yY2UgTWFqZXVyZSBFdmVudCBhcmlzaW5nLCBkb2NwcmltZSwgZGVwZW5kaW5nIG9uIHdob3NlIHBlcmZvcm1hbmNlIGhhcyBiZWVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcGFjdGVkIHVuZGVyIHRoZSBUZXJtcyBvZiBVc2UsIHNoYWxsIGltbWVkaWF0ZWx5IGdpdmUgbm90aWNlIHRvIHRoZSBPdGhlciBQYXJ0eShzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZiB0aGUgZmFjdHMgd2hpY2ggY29uc3RpdHV0ZSB0aGUgRm9yY2UgTWFqZXVyZSBFdmVudC5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Hb3Zlcm5pbmcgTGF3IGFuZCBEaXNwdXRlIFJlc29sdXRpb246PC9zcGFuPiBUaGVzZSBUZXJtcyBvZiBVc2UgYW5kIGFueSBjb250cmFjdHVhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmxpZ2F0aW9uIGJldHdlZW4gdGhlIFBhcnRpZXMgd2lsbCBiZSBnb3Zlcm5lZCBieSB0aGUgbGF3cyBvZiBJbmRpYSwgd2l0aG91dCByZWZlcmVuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gdGhlIGNvbmZsaWN0IG9mIGxhd3MgcHJpbmNpcGxlcy4gQW55IGxlZ2FsIGFjdGlvbiBvciBwcm9jZWVkaW5nIHJlbGF0ZWQgdG8gT3RoZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFydHkocykgYWNjZXNzIHRvLCBvciB1c2Ugb2YsIHRoZSBXZWJzaXRlIG9yIHRoZXNlIFRlcm1zIG9mIFVzZSBzaGFsbCBiZSBzdWJqZWN0IHRvIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGNsdXNpdmUganVyaXNkaWN0aW9uIG9mIHRoZSBjb3VydHMgYXQgR3VydWdyYW0uXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U3Vydml2YWw6PC9zcGFuPiBFdmVuIGFmdGVyIHRlcm1pbmF0aW9uLCBjZXJ0YWluIHRlcm1zL29ibGlnYXRpb25zIG1lbnRpb25lZCB1bmRlciB0aGVzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXJtcyBvZiBVc2Ugc3VjaCBhcyBMaWFiaWxpdHksIEluZGVtbml0eSwgSW50ZWxsZWN0dWFsIFByb3BlcnR5LCBEaXNwdXRlIFJlc29sdXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhbGwgY29udGludWUgYW5kIHN1cnZpdmUgdGVybWluYXRpb24uXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2V2ZXJhYmlsaXR5Ojwvc3Bhbj4gSWYgYW55IHByb3Zpc2lvbiBvZiB0aGVzZSBUZXJtcyBvZiBVc2UgaXMgZGVlbWVkIGludmFsaWQsIHVubGF3ZnVsLCB2b2lkIG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciBhbnkgb3RoZXIgcmVhc29uIHVuZW5mb3JjZWFibGUsIHRoZW4gdGhhdCBwcm92aXNpb24gc2hhbGwgYmUgZGVlbWVkIHNldmVyYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIHRoZXNlIFRlcm1zIG9mIFVzZSBhbmQgc2hhbGwgbm90IGFmZmVjdCB0aGUgdmFsaWRpdHkgYW5kIGVuZm9yY2VhYmlsaXR5IG9mIGFueSBvZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgcmVtYWluaW5nIHByb3Zpc2lvbnMuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+V2FpdmVyOjwvc3Bhbj4gTm8gcHJvdmlzaW9uIG9mIHRoZXNlIFRlcm1zIG9mIFVzZSBzaGFsbCBiZSBkZWVtZWQgdG8gYmUgd2FpdmVkIGFuZCBub1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhY2ggZXhjdXNlZCwgdW5sZXNzIHN1Y2ggd2FpdmVyIG9yIGNvbnNlbnQgc2hhbGwgYmUgaW4gd3JpdGluZyBhbmQgc2lnbmVkIGJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3ByaW1lLiBBbnkgY29uc2VudCBieSBkb2NwcmltZSB0bywgb3IgYSB3YWl2ZXIgYnkgZG9jcHJpbWUgb2YgYW55IGJyZWFjaCBieSBPdGhlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXJ0aWVzLCB3aGV0aGVyIGV4cHJlc3NlZCBvciBpbXBsaWVkLCBzaGFsbCBub3QgY29uc3RpdHV0ZSBjb25zZW50IHRvLCB3YWl2ZXIgb2YsIG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4Y3VzZSBmb3IgYW55IG90aGVyIGRpZmZlcmVudCBvciBzdWJzZXF1ZW50IGJyZWFjaC5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5IZWFkaW5nczo8L3NwYW4+IFRoZSBoZWFkaW5ncyBhbmQgc3ViaGVhZGluZ3MgaGVyZWluIGFyZSBpbmNsdWRlZCBmb3IgY29udmVuaWVuY2UgYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkZW50aWZpY2F0aW9uIG9ubHkgYW5kIGFyZSBub3QgaW50ZW5kZWQgdG8gZGVzY3JpYmUsIGludGVycHJldCwgZGVmaW5lIG9yIGxpbWl0IHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZSwgZXh0ZW50IG9yIGludGVudCBvZiB0aGVzZSBUZXJtcyBvZiBVc2UuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+R3JpZXZhbmNlIE9mZmljZXIgYW5kIENvbnRhY3QgdXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElmIGFueSBVc2VyL1lvdSBoYXZlIGFueSBncmlldmFuY2UsIGNvbW1lbnQsIHF1ZXN0aW9uIG9yIHN1Z2dlc3Rpb24gcmVnYXJkaW5nIGFueSBvZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXIgU2VydmljZXMgb3IgdGhlIFdlYnNpdGUgb3IgYW55dGhpbmcgcmVsYXRlZCB0byBhbnkgb2YgdGhlIGZvcmdvaW5nLCBwbGVhc2UgY29udGFjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cyBhdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbiBhY2NvcmRhbmNlIHdpdGggdGhlIEluZm9ybWF0aW9uIFRlY2hub2xvZ3kgQWN0LCAyMDAwLCBhbmQgdGhlIHJ1bGVzIG1hZGUgdGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXIsIGlmIHlvdSBoYXZlIGFueSBncmlldmFuY2Ugd2l0aCByZXNwZWN0IHRvIHRoZSBXZWJzaXRlIG9yIHRoZSBzZXJ2aWNlLCBpbmNsdWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW55IGRpc2NyZXBhbmNpZXMgYW5kIGdyaWV2YW5jZXMgd2l0aCByZXNwZWN0IHRvIHByb2Nlc3Npbmcgb2YgaW5mb3JtYXRpb24sIHlvdSBjYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFjdCBvdXIgR3JpZXZhbmNlIE9mZmljZXIgYXQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiZuYnNwOzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+TmFtZTogQXNoaXNoIEFqbWFuaTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+RGVzaWduYXRpb246IE1hbmFnZXIgT3BlcmF0aW9uczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+RW1haWw6IGFzaGlzaGFqbWFuaUBkb2NwcmltZS5jb208L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGRvY3Rvci10ZXJtcy1yb3dcIiBoaWRkZW49e3RoaXMuc3RhdGUuc2VsZWN0ZWQgPT0gMH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHByaXZhY3ktZGVzYy1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzYy1oZWFkaW5nIG1yYi0yMFwiPlRFUk1TIEFORCBDT05ESVRJT05TIEZPUiBFTVBBTkVMTUVOVCBPRiBIT1NQSVRBTFMvRElBR05PU1RJQyBDRU5URVJTL0NMSU5JQ1MvRE9DVE9SUzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiPlRoaXMgYWdyZWVtZW50IHNldHMgZm9ydGggdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zIHRoYXQgYXBwbHkgdG8gdGhlIGVtcGFuZWxtZW50IG9mIEhvc3BpdGFscy9EaWFnbm9zdGljIGNlbnRlcnMvQ2xpbmljcy9Eb2N0b3JzICjigJxIZWFsdGggU2VydmljZSBwcm92aWRlci9IU0LigJ0pIHRvIHByb3ZpZGUgYWNjZXNzIHRvIGhlYWx0aCBjYXJlIHNlcnZpY2VzIGJ5IGRpc3NlbWluYXRpbmcgaGVhbHRoY2FyZSBpbmZvcm1hdGlvbiBhbmQgZGF0YSBpbiBhbiB1bmJpYXNlZCBtYW5uZXIgdW5kZXIgaXRzIHNjb3BlIG9mIGxpY2Vuc3VyZSBvciBhY2NyZWRpdGF0aW9uIChTZXJ2aWNlcykgdG8gdGhlIHVzZXJzL2N1c3RvbWVycyBvZiB0aGlzIFdlYnNpdGUgYW5kIGl0cyBNb2JpbGUgQXBwbGljYXRpb24gKGNvbGxlY3RpdmVseSBiZSByZWZlcnJlZCB0byBhcyDigJxXZWJzaXRl4oCdKSwgd2hpY2ggaXMgbWFuYWdlZCBhbmQgb3BlcmF0ZWQgYnkgUGFuYWNlYSBUZWNobm8gU2VydmljZXMgUHJpdmF0ZSBMaW1pdGVkICjigJxDb21wYW554oCdKS4gWW91IHVuZGVyc3RhbmQgYW5kIGFncmVlIHRoYXQgQ29tcGFueSByZXNlcnZlcyB0aGUgcmlnaHQgdG8gZW5yb2xsLyBhcHBvaW50IG90aGVyIGhlYWx0aCBzZXJ2aWNlIHByb3ZpZGVycyBmb3Igc2ltaWxhciBzZXJ2aWNlcyBhcyBlbnZpc2FnZWQgaGVyZWluIGFuZCB5b3Ugc2hhbGwgaGF2ZSBubyBvYmplY3Rpb24gZm9yIHRoZSBzYW1lIGFuZCB2aWNlLXZlcnNhLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiPlRoaXMgZG9jdW1lbnQvYWdyZWVtZW50IGlzIGFuIGVsZWN0cm9uaWMgcmVjb3JkIGluIHRlcm1zIG9mIEluZm9ybWF0aW9uIFRlY2hub2xvZ3kgQWN0LCAyMDAwIGFuZCBnZW5lcmF0ZWQgYnkgYSBjb21wdXRlciBzeXN0ZW0gYW5kIGRvZXMgbm90IHJlcXVpcmUgYW55IHBoeXNpY2FsIG9yIGRpZ2l0YWwgc2lnbmF0dXJlcy4gVGhpcyBkb2N1bWVudCBpcyBwdWJsaXNoZWQgaW4gYWNjb3JkYW5jZSB3aXRoIHRoZSBwcm92aXNpb25zIG9mIFJ1bGUgMyBvZiB0aGUgSW5mb3JtYXRpb24gVGVjaG5vbG9neSAoSW50ZXJtZWRpYXJpZXMgZ3VpZGVsaW5lcykgMjAxMSwgdGhhdCBwcm92aWRlcyBmb3IgdGhlIGR1ZSBkaWxpZ2VuY2UgdG8gYmUgZXhlcmNpc2VkIGZvciB0aGUgYWNjZXNzIG9yIHVzYWdlIG9mIHRoaXMgV2Vic2l0ZS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj5QTEVBU0UgUkVBRCBUSEVTRSBURVJNUyBBTkQgQ09ORElUSU9OUyBDQVJFRlVMTFkuIFlPVVIgQUNDRVBUQU5DRSBPRiBURVJNUyBDT05UQUlORUQgSEVSRUlOIENPTlNUSVRVVEVTIFRIRSBBR1JFRU1FTlQgQkVUV0VFTiBZT1UgQU5EIENPTVBBTlkgRk9SIFRIRSBQVVJQT1NFIEFTIERFRklOREVEIEhFUkVVTkRFUi48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2Mtc3ViaGVhZGluZ1wiPjEuJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7U0NPUEUgQU5EIFBVUlBPU0U8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlYWx0aCBTZXJ2aWNlIFByb3ZpZGVyIGlzIGRlc2lyb3VzIGFuZCBoYWQgYXBwcm9hY2hlZCB0aGUgQ29tcGFueSB0byBkaXNwbGF5L2xpc3QgdGhlIGluZm9ybWF0aW9uIHBlcnRhaW5pbmcgdG8gdGhlIEhlYWx0aCBTZXJ2aWNlIFByb3ZpZGVyIG9uIHRoZSBXZWJzaXRlIHRvIGRpc3NlbWluYXRlIGluZm9ybWF0aW9uIHJlZ2FyZGluZyB0aGUgYXZhaWxhYmlsaXR5IG9mIG1lZGljYWwvaGVhbHRoIGZhY2lsaXRpZXMgd2l0aCB0aGUgSGVhbHRoIFNlcnZpY2UgUHJvdmlkZXIgdG8gdGhlIHByb3NwZWN0aXZlIHVzZXJzL2N1c3RvbWVycyBvZiB0aGUgV2Vic2l0ZSBhbmQgdG8gcmVuZGVyIG1lZGljYWwvaGVhbHRoIGNhcmUgc2VydmljZXMgdG8gdGhlIGN1c3RvbWVycyBvZiB0aGUgQ29tcGFueSB3aG8gYXJlIGRlc2lyb3VzIG9mIGF2YWlsaW5nIHN1Y2ggbWVkaWNhbCBiZW5lZml0cyB0aHJvdWdoIHRoZSBXZWJzaXRlLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFydGllcyBhZ3JlZSB0aGF0IENvbXBhbnkgc2hhbGwgcHJvdmlkZSB0aGUgY3VzdG9tZXIgZGV0YWlscyBvZiBzdWNoIGN1c3RvbWVycyB3aG8gaGF2ZSBleHByZXNzZWQgdG8gYXZhaWwgdGhlIHNlcnZpY2VzIG9mIHRoZSBIZWFsdGggU2VydmljZSBQcm92aWRlciBzdWNoIGFzIGJ5IGJvb2tpbmcgYW4gb25saW5lIGNvbnN1bHRhdGlvbiwgdGhyb3VnaCB0aGUgZGVzaWduYXRlZCB3ZWJzaXRlIG9mIHRoZSBDb21wYW55LlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9yIGFsbCBjdXN0b21lcnMgcmVmZXJyZWQgYnkgdGhlIENvbXBhbnksIENvbXBhbnkgc2hhbGwgYmUgZW50aXRsZWQgdG8gc2VuZCBpbmZvcm1hdGlvbiB0aHJvdWdoIFNNUyBvciBFLU1haWwgdG8gdGhlIFNQT0Mgb2YgU2VydmljZSBQcm92aWRlci5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElmIGFueSBzZXJ2aWNlcywgZnVuY3Rpb25zIG9yIHJlc3BvbnNpYmlsaXRpZXMgbm90IHNwZWNpZmljYWxseSBkZXNjcmliZWQgaGVyZWluIG9yIGluIGFueSByZWxhdGVkIGRvY3VtZW50cyBidXQgYXJlIGluaGVyZW50LCBuZWNlc3Nhcnkgb3IgY3VzdG9tYXJ5IHBhcnQgb2YgdGhlIHNlcnZpY2VzIG9yIGFyZSByZWFzb25hYmx5IHJlcXVpcmVkIGZvciBwcm9wZXIgcGVyZm9ybWFuY2Ugb2YgdGhlIFNlcnZpY2VzIGluIGFjY29yZGFuY2Ugd2l0aCB0aGUgQWdyZWVtZW50LCB0aGV5IHNoYWxsIGJlIGRlZW1lZCB0byBiZSBpbmNsdWRlZCB3aXRoaW4gdGhlIFNjb3BlIG9mIFNlcnZpY2VzIGFzIGlmIHN1Y2ggc2VydmljZXMsIGZ1bmN0aW9ucyBvciByZXNwb25zaWJpbGl0aWVzIHdlcmUgc3BlY2lmaWNhbGx5IGRlc2NyaWJlZCBpbiB0aGlzIEFncmVlbWVudC5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjLXN1YmhlYWRpbmdcIj4yLiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO09CTElHQVRJT05TIE9GIFRIRSBTRVJWSUNFIFBST1ZJREVSPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIEFncmVlbWVudCBpcyBiZXR3ZWVuIHRoZSBIZWFsdGggU2VydmljZSBQcm92aWRlciBhbmQgdGhlIENvbXBhbnkuIEhvd2V2ZXIsIGl0IHdvdWxkIGJlIGFwcGxpY2FibGUgdG8gYWxsIHNwZWNpYWx0aWVzIG9mZmVyZWQgYnkgPHNwYW4+U2VydmljZSBQcm92aWRlciBHcm91cCBvZiBIb3NwaXRhbHMvIGRpYWdub3N0aWMgY2VudGVycy9DbGluaWNzLDwvc3Bhbj4gYXMgbWF5IGJlIGFwcGxpY2FibGUsIGFuZCBhcyBwcm92aWRlZCBieSB0aGUgSGVhbHRoIFNlcnZpY2UgUHJvdmlkZXIgZnJvbSB0aW1lIHRvIHRpbWUuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgZW1wYW5lbGxlZCBIZWFsdGggU2VydmljZSBQcm92aWRlciBpcyBleHBlY3RlZCB0byBwcm92aWRlIGl0cyBTZXJ2aWNlcyBhcyBwZXIgdGhlIGluZHVzdHJ5IHN0YW5kYXJkcyBhbmQgaW4gYSBwcm9mZXNzaW9uYWwgJmFtcDsgZXRoaWNhbCBtYW5uZXIuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZWFsdGggU2VydmljZSBQcm92aWRlciBtYXkgc2V0LXVwIGEgc2VwYXJhdGUgQ29tcGFueeKAmXMg4oCcQ28tb3JkaW5hdGlvbiBEZXNr4oCdIHJvdW5kIHRoZSBjbG9jayBpbiB0aGUgSGVhbHRoIFNlcnZpY2UgUHJvdmlkZXIgUHJlbWlzZXMsIGFzIG1heSBiZSBtdXR1YWxseSBhZ3JlZWQgd2l0aCB0aGUgQ29tcGFueS5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlYWx0aCBTZXJ2aWNlIFByb3ZpZGVyIHNoYWxsIG5vdGlmeSBhbmQgc2hhcmUgd2l0aCB0aGUgQ29tcGFueSB0aGUgY29zdC9yYXRlIGxpc3QgZGV0YWlsaW5nIHRoZSBjb3N0cyBvZiBlYWNoIG1lZGljYWwgdHJlYXRtZW50IGFuZCBwcm9jZWR1cmVzLCB3aGljaCBjYW4gYmUgc3VpdGFibHkgZGlzcGxheWVkIG9uIHRoZSB3ZWJzaXRlIG9mIHRoZSBDb21wYW55LiBJbiBjYXNlIG9mIGFueSBjaGFuZ2VzL21vZGlmaWNhdGlvbiB0byBzdWNoIGNvc3RzL3JhdGVzIHRoZSBTZXJ2aWNlIFByb3ZpZGVyIHNoYWxsIG5vdGlmeSB0aGUgc2FtZSB3aXRoaW4gMih0d28pIGRheXMgcHJpb3IgdG8gc3VjaCBjaGFuZ2VzIGFyZSB0byBiZSBtYWRlIGVmZmVjdGl2ZS5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlYWx0aCBTZXJ2aWNlIFByb3ZpZGVyIGFncmVlcyB0byBwcm92aWRlIHRoZSBTZXJ2aWNlcyB0byB0aGUgY3VzdG9tZXJzIG9mIHRoZSBDb21wYW55IHdpdGggdGhlIHNhbWUgZGVncmVlIG9mIGNhcmUgYW5kIHNraWxsIGFzIGN1c3RvbWFyaWx5IHByb3ZpZGVkIHRvIGl0cyBvd24gcGF0aWVudHMgd2hvIGFyZSBub3QgY3VzdG9tZXJzIG9mIHRoZSBDb21wYW55LCBpLmUuIGFjY29yZGluZyB0byBnZW5lcmFsbHkgYWNjZXB0ZWQgc3RhbmRhcmRzIG9mIHByYWN0aWNlIGluY2x1ZGluZyBtZWRpY2FsIHByb2Zlc3Npb24gaW4gSW5kaWEuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZWFsdGggU2VydmljZSBQcm92aWRlciBhZ3JlZXMgbm90IHRvIGRpc2NyaW1pbmF0ZSBhZ2FpbnN0IGN1c3RvbWVycyBvZiB0aGUgQ29tcGFueSBvbiB0aGUgYmFzaXMgb2YgcmFjZSwgZXRobmljaXR5LCBnZW5kZXIsIGNyZWVkLCBhbmNlc3RyeSwgbGF3ZnVsIG9jY3VwYXRpb24sIGFnZSwgcmVsaWdpb24sIG1hcml0YWwgc3RhdHVzLCBzZXh1YWwgb3JpZW50YXRpb24sIG1lbnRhbCBvciBwaHlzaWNhbCBkaXNhYmlsaXR5LCBtZWRpY2FsIGhpc3RvcnksIGNvbG9yLCBuYXRpb25hbCBvcmlnaW4sIHBsYWNlIG9mIHJlc2lkZW5jZSwgaGVhbHRoIHN0YXR1cywgb3IgYW55IG90aGVyIGdyb3VuZHMgcHJvaGliaXRlZCBieSBsYXcuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZWFsdGggU2VydmljZSBQcm92aWRlciBhbHNvIGFncmVlcyB0byBhbGxvdyBDb21wYW55IHRvIGF1ZGl0IHRoZSByZWxldmFudCBiaWxscy8gZG9jdW1lbnRzIHBlcnRhaW5pbmcgdG8gdGhpcyBBZ3JlZW1lbnQ7IGFzIGFuZCB3aGVuIHJlcXVlc3RlZCBieSB0aGUgQ29tcGFueS4gU3VjaCBhdWRpdGluZyBzaGFsbCBiZSBzY2hlZHVsZWQgbXV0dWFsbHkgYmV0d2VlbiB0aGUgcGFydGllcy5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlYWx0aCBTZXJ2aWNlIFByb3ZpZGVyIHNoYWxsIGVuc3VyZSB0aGF0IHRoZSBpbmZvcm1hdGlvbiBwcm92aWRlZCB0byB0aGUgQ29tcGFueSBmb3IgZGlzcGxheSBvbiBpdHMgV2Vic2l0ZSBzaGFsbCBiZSB1cCB0byBkYXRlZCwgdHJ1ZSBhbmQgY29ycmVjdC4gSW4gdGhpcyBjb250ZXh0LCBoZWFsdGggU2VydmljZSBQcm92aWRlciB3aWxsIG5vdCBob2xkIHRoZSBDb21wYW55IChpbmNsdWRpbmcgaXRzIGFmZmlsaWF0ZWQgY29tcGFuaWVzL2dyb3VwIGNvbXBhbmllcyBhbmQgcmVsYXRlZCB3ZWJzaXRlcykgbGlhYmxlIGZvciBhbnkgaW5mb3JtYXRpb24gcmVsaWVkIHVwb24gYnkgQ29tcGFueSBhcyBwcm92aWRlZCBieSB0aGUgSGVhbHRoIFNlcnZpY2UgUHJvdmlkZXIuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZWFsdGggU2VydmljZSBQcm92aWRlciBhdXRob3JpemVzIENvbXBhbnkgdG8gY29sbGVjdCBhbmQgcmVjZWl2ZSBtb25pZXMgdG93YXJkcyB0aGUgYW1vdW50cyBwYXlhYmxlIGJ5IHRoZSBjdXN0b21lciBmb3IgdGhlIHNlcnZpY2VzIGF2YWlsZWQsIG9uIGJlaGFsZiBvZiB0aGUgU2VydmljZSBQcm92aWRlci4gRnVydGhlciwgc2V0dGxlbWVudCBvZiBtb25pZXMgdG8gdGhlIFNlcnZpY2UgUHJvdmlkZXIgc2hhbGwgYmUgaW4gYWNjb3JkYW5jZSB3aXRoIHRoZSB0ZXJtcyBhcyBtdXR1YWxseSBhZ3JlZWQgYmV0d2VlbiB0aGUgcGFydGllcy4gQWxsIHNldHRsZW1lbnRzIGZvciB0aGUgcHJlY2VkaW5nIG1vbnRoIHNoYWxsIGJlIG1hZGUgd2l0aGluIDYwKHNpeHR5KSBkYXlzIGZyb20gdGhlIHN1Y2NlZWRpbmcgbW9udGggZHVyaW5nIHdoaWNoIHRoZSBpbnZvaWNlIGlzIHJhaXNlZCBieSB0aGUgU2VydmljZSBQcm92aWRlci4gSW4gdGhpcyByZWdhcmQsIHRoZSBTZXJ2aWNlIFByb3ZpZGVyIHNoYWxsIHJhaXNlIHRoZSBpbnZvaWNlIG9uIG9yIGJlZm9yZSB0aGUgN3RoIGRheSBvZiB0aGUgc3VjY2Vzc2l2ZSBtb250aCBmb3IgdGhlIHNldHRsZW1lbnQgb2YgcHJlY2VkaW5nIG1vbnRoLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIEhlYWx0aCBTZXJ2aWNlIFByb3ZpZGVyIHNoYWxsIGJlIHNvbGVseSByZXNwb25zaWJsZSBmb3IgYW55IG1pc2NvbmR1Y3QsIGRhbWFnZSwgd2lsbGZ1bGwgY29tbWlzc2lvbiBvciBvbWlzc2lvbiBvZiBhbnkgc2VydmljZXMgd2hpY2ggYXJlIG5vdCBsaXN0ZWQgdW5kZXIgdGhlc2UgVGVybXMgJmFtcDsgQ29uZGl0aW9ucyBvciBhbnl0aGluZyB3aGljaCBnb2VzIGFnYWluc3QgdGhlIHNwaXJpdCBvZiBmcmVlLCBmYWlyIGFuZCBldGhpY2FsIHByYWN0aWNlIG9mIHBhdGllbnQgY2FyZS5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkNvbmZpZGVudGlhbGl0eSA6PC9zcGFuPiBUaGUgSGVhbHRoIFNlcnZpY2UgUHJvdmlkZXIgdW5kZXJ0YWtlcyB0byBtYWludGFpbiBpbiBhYnNvbHV0ZSBjb25maWRlbmNlIGFuZCBub3QgdG8gcmV2ZWFsIHRvIGFueSBwZXJzb24gb3IgYm9keSwgYW55IGluZm9ybWF0aW9uIG9yIGRhdGEgd2hpY2ggaXQgcmVjZWl2ZXMgdGhyb3VnaCBhbmQgc3Vic2VxdWVudCBmb3IgcHJvdmlkaW5nIHRoZSBTZXJ2aWNlcyBwdXJzdWFudCB0byB0aGlzIGFncmVlbWVudCBhbmQgd2hpY2ggcGVydGFpbnM7IGRpcmVjdGx5IG9yIGluZGlyZWN0bHk7IHRvIHRoZSBDb21wYW55IG9yIGl0cyBjdXN0b21lcnMsIGluY2x1ZGluZyB0aGUgYW5kIHdpdGhvdXQgZGVyb2dhdGluZyBmcm9tIHRoZSBnZW5lcmFsaXR5IG9mIHRoZSBhZm9yZXNhaWQgbmFtZXMsIGFkZHJlc3NlcywgZGV0YWlscyBhbmQgbWVkaWNhbCBiYWNrZ3JvdW5kIG9mIHRoZSBDb21wYW554oCZcyBjdXN0b21lcnMsIGluZm9ybWF0aW9uIHdoaWNoIHBlcnRhaW5zIHRvIHRoZSBDb21wYW554oCZcyBidXNpbmVzcyAgb3IgYW55IG90aGVyIGRhdGEgd2hpY2ggaXMgcHJvcHJpZXRhcnkgdG8gdGhlIENvbXBhbnkgYW5kIGl0cyBjdXN0b21lcnMuIEl0IGlzIGZ1cnRoZXIgYWdyZWVkIHRoYXQgdGhlIGNvbnRlbnRzIG9mIHRoaXMgc3ViLXNlY3Rpb24gY2Fubm90IGRlcm9nYXRlIGZyb20gdGhlIGR1dHkgb2YgdGhlIEhlYWx0aCBTZXJ2aWNlIFByb3ZpZGVyIGluIHJlcG9ydGluZyB0aGUgQ29tcGFueSBvZiBhbnkgZGF0YSwgaW5mb3JtYXRpb24gb3IgbWVkaWNhbCBiYWNrZ3JvdW5kIHdoaWNoIG1heSBiZSByZWxldmFudCB0byB0aGUgQ29tcGFueSBpbiBkZXRlcm1pbmF0aW9uIG9mIGl0cyBzY29wZSBvZiB3b3JrLiAgVGhlIHRyYW5zZmVyIG9mIGluZm9ybWF0aW9uIHNoYWxsIGJlIGluIGFjY29yZGFuY2UgdG8gdGhlIHByb2NlZHVyZXMgZXN0YWJsaXNoZWQgYnkgdGhlIENvbXBhbnkuIFRoZSBIZWFsdGggU2VydmljZSBQcm92aWRlciBhY2tub3dsZWRnZXMgdGhhdCBpdHMgdW5kZXJ0YWtpbmdzIGdpdmVuIGluIHRoaXMgQWdyZWVtZW50IHdpdGggcmVnYXJkIHRvIHRoZSBjb25maWRlbnRpYWxpdHkgc2hhbGwgYmUgdmFsaWQgdGhyb3VnaG91dCB0aGUgVGVybSBvZiB0aGlzIEFncmVlbWVudCBhbmQgaXQgc2hhbGwgYWJpZGUgYnkgdGhlIHNhbWUgZXZlbiBhZnRlciB0aGUgZXhwaXJ5IG9mIHRoaXMgQWdyZWVtZW50LlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2Mtc3ViaGVhZGluZ1wiPjMuJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7UkVQUkVTRU5UQVRJT05TIEFORCBERUNMQVJBVElPTlMgQlkgVEhFIFNFUlZJQ0UgUFJPVklERVI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBIZWFsdGggU2VydmljZSBQcm92aWRlciBkZWNsYXJlcyBhbmQgdW5kZXJ0YWtlcyB0aGF0IGl0IGhhcyBhbGwgdGhlIG5lY2Vzc2FyeSByZWdpc3RyYXRpb25zLyBsaWNlbnNlcy8gYXBwcm92YWxzLyBhdXRob3JpemF0aW9ucyByZXF1aXJlZCBieSB0aGUgbGF3IGluIG9yZGVyIHRvIHByb3ZpZGUgdGhlIG1lZGljYWwgc2VydmljZXMgcHVyc3VhbnQgdG8gdGhpcyBhZ3JlZW1lbnQgYW5kIHRoYXQgaXQgaGFzIGFkZXF1YXRlIGFiaWxpdHksIGtub3dsZWRnZSwgZXhwZXJpZW5jZSBhbmQgZXF1aXBtZW504oCZcyByZXF1aXJlZCBpbiBvcmRlciB0byBwcm92aWRlIHRoZSBzYWlkIHNlcnZpY2UgYXMgcmVxdWlyZWQgaW4gdGhpcyBhZ3JlZW1lbnQuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgSGVhbHRoIFNlcnZpY2UgUHJvdmlkZXIgdW5kZXJ0YWtlcyB0byB1cGhvbGQgYWxsIG9mIHRoZSByZXF1aXJlbWVudHMgb2YgdGhlIGxhdyBhcyBhcHBsaWNhYmxlIHRvIGl0IGZyb20gdGltZSB0byB0aW1lIGFuZCBzaGFsbCBrZWVwIHVwZGF0ZWQgdGhlIENvbXBhbnksIGluIGNhc2Ugb2YgYW55IHNpZ25pZmljYW50IGNoYW5nZSBpbiB0aGUgcHJlc2VudCBzdGF0dXMgb2YgdGhlIFByb3ZpZGVyLiBUaGUgU2VydmljZSBQcm92aWRlciBhbHNvIHVuZGVydGFrZXMgdGhhdCBpdCBzaGFsbCBwcm92aWRlIHRoZSBzYWlkIHNlcnZpY2VzIGluIGFjY29yZGFuY2Ugd2l0aCB0aGUgcHJvdmlzaW9ucyBvZiB0aGUgbGF3IGFuZCB0aGUgcmVndWxhdGlvbnMsIHdoaWNoIGFyZSBlbmFjdGVkLCBmcm9tIHRpbWUgdG8gdGltZSwgYnkgdGhlIGNlbnRyYWwgb3IgdGhlIHN0YXRlIGdvdmVybm1lbnQgb3IgdGhlIGxvY2FsIGFkbWluaXN0cmF0aW9uLyBib2RpZXMuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgSGVhbHRoIFNlcnZpY2UgUHJvdmlkZXIgaGFzIGFuZCB3aWxsIGNvbnRpbnVlIHRvIGhhdmUgaXRzIGZhY2lsaXRpZXMgY292ZXJlZCBieSBwcm9wZXIgaW5kZW1uaXR5IHBvbGljeSwgaW5jbHVkaW5nIGVycm9yLCBvbWlzc2lvbiBhbmQgcHJvZmVzc2lvbmFsIGluZGVtbml0eSBhbmQgYWdyZWVzIHRvIGtlZXAgc3VjaCBwb2xpY2llcyBpbiBmb3JjZSBkdXJpbmcgdGhlIGN1cnJlbmN5IG9mIHRoaXMgQWdyZWVtZW50LlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIEhlYWx0aCBTZXJ2aWNlIFByb3ZpZGVyIGRlY2xhcmVzIHRoYXQgaXQgaGFzIG5vdCBiZWVuIHByZXZlbnRlZCBmcm9tIHByYWN0aWNpbmcgbWVkaWNpbmVzIGFuZCB0aGF0IG5vIGNyaW1pbmFsIGNoYXJnZSBvZiBhbnkga2luZCBoYXMgZXZlciBiZWVuIGZpbGVkIGFnYWluc3QgaXQgZHVlIHRvIG1lZGljYWwgbWFscHJhY3RpY2UsIG1lZGljYWwgbmVnbGlnZW5jZSBhbmQvIG9yIG5vIGNpdmlsIGNsYWltIGhhcyBldmVyIGJlZW4gZmlsZWQgYWdhaW5zdCBpdCBkdWUgdG8gZGFtYWdlIGluZmxpY3RlZCBkdXJpbmcgYSBtZWRpY2FsIHRyZWF0bWVudC5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBIZWFsdGggU2VydmljZSBQcm92aWRlciBhbHNvIHVuZGVydGFrZXMgdG8gaW5mb3JtIHRoZSBDb21wYW55IGluIHRoZSBldmVudCBvZiBhbnkgY29tcGxhaW50IG9mIG1lZGljYWwgbWFscHJhY3RpY2UgaXMgZmlsZWQgYWdhaW5zdCBpdCBkdXJpbmcgdGhlIGN1cnJlbmN5IG9mIHRoaXMgQWdyZWVtZW50LlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXQgaGFzIGJlZW4gZHVseSBjb25zdGl0dXRlZCB1bmRlciB0aGUgYXBwbGljYWJsZSBsYXdzIGFuZCBoYXMgY29tcGxpZWQgd2l0aCBhbmQgc2hhbGwgY29udGludWUgdG8gY29tcGx5IHdpdGggdGhlIGFwcGxpY2FibGUgbGF3cy5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0IGhhcyB0aGUgcmVxdWlzaXRlIGxpY2Vuc2VzLCBwZXJtaXNzaW9ucywgYXV0aG9yaXphdGlvbnMsIGNvbnNlbnRzLCBhcHByb3ZhbHMgYW5kIHJlZ2lzdHJhdGlvbnMgdW5kZXIgdGhlIGFwcGxpY2FibGUgbGF3cyBhbmQgdGhlIGF1dGhvcml0eSB0byBleGVjdXRlIHRoaXMgQWdyZWVtZW50IGF2YWlsIHRoZSByZXF1aXJlZCBTZXJ2aWNlcyBhbmQgcGVyZm9ybSBpdHMgb2JsaWdhdGlvbnMgaGVyZXVuZGVyLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmVpdGhlciB0aGUgZXhlY3V0aW9uIGFuZCBkZWxpdmVyeSBvZiB0aGlzIEFncmVlbWVudCwgdGhlIGNvbnN1bW1hdGlvbiBvZiB0aGUgdHJhbnNhY3Rpb25zIGNvbnRlbXBsYXRlZCBoZXJlYnksIG9yIHRoZSBmdWxmaWxsbWVudCBvZiBvciBjb21wbGlhbmNlIHdpdGggdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zIG9mIHRoaXMgQWdyZWVtZW50LCBjb25mbGljdCB3aXRoIG9yIHJlc3VsdCBpbiBhIGJyZWFjaCBvZiBvciBhIGRlZmF1bHQgdW5kZXIgYW55IG9mIHRoZSB0ZXJtcywgY29uZGl0aW9ucyBvciBwcm92aXNpb25zIG9mIGFueSBsZWdhbCByZXN0cmljdGlvbiAoaW5jbHVkaW5nLCB3aXRob3V0IGxpbWl0YXRpb24sIGFueSBqdWRnbWVudCwgb3JkZXIsIGluanVuY3Rpb24sIGRlY3JlZSBvciBydWxpbmcgb2YgYW55IGNvdXJ0IG9yIGdvdmVybm1lbnRhbCBhdXRob3JpdHksIG9yIGFueSBjZW50cmFsLCBzdGF0ZSwgbG9jYWwgb3Igb3RoZXIgbGF3LCBzdGF0dXRlLCBydWxlIG9yIHJlZ3VsYXRpb24pIG9yIGFueSBjb3ZlbmFudCBvciBhZ3JlZW1lbnQgb3IgaW5zdHJ1bWVudCB0byB3aGljaCBpdCBpcyBhIFBhcnR5LCBvciBieSB3aGljaCBpdCBpcyBib3VuZCwgbm9yIGRvZXMgc3VjaCBleGVjdXRpb24sIGRlbGl2ZXJ5LCBjb25zdW1tYXRpb24gb3IgY29tcGxpYW5jZSB2aW9sYXRlIG9yIHJlc3VsdCBpbiB0aGUgdmlvbGF0aW9uIG9mIGl0cyBjb25zdGl0dXRpb25hbCBkb2N1bWVudHMuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzYy1zdWJoZWFkaW5nXCI+NC4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtJTlRFTExFQ1RVQUwgUFJPUEVSVFkgUklHSFRTPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgUGFydGllcyBoZXJlYnkgYWNrbm93bGVkZ2UgdGhhdCBlYWNoIFBhcnR5IGlzIHRoZSBsZWdhbCBhbmQgYmVuZWZpY2lhbCBvd25lciBvZiBhbmQgaGFzIGV4Y2x1c2l2ZSByaWdodCwgdGl0bGUgYW5kIGludGVyZXN0IG92ZXIgaXRzIG93biBJbnRlbGxlY3R1YWwgUHJvcGVydHkgYW5kIGFsbCBvdGhlciBwcm9wcmlldGFyeSBpbmZvcm1hdGlvbiBpbiByZWxhdGlvbiB0byBpdHMgYnVzaW5lc3MuIE5vdGhpbmcgaW4gdGhpcyBBZ3JlZW1lbnQgc2hhbGwgYmUgZGVlbWVkIGluIGFueSB3YXkgdG8gY29uc3RpdHV0ZSBhIHRyYW5zZmVyIG9yIGFzc2lnbm1lbnQgb2YgYW55IEludGVsbGVjdHVhbCBQcm9wZXJ0eSBieSBlaXRoZXIgUGFydHkuIEl0IGlzIGZ1cnRoZXIgYWdyZWVkIGFuZCB1bmRlcnN0b29kIGJldHdlZW4gdGhlIFBhcnRpZXMgdGhhdCB0aGUgZGF0YSBhbmQgaW5mb3JtYXRpb24gb2YgdXNlcnMvY3VzdG9tZXJzIHByb2R1Y2VkIHRocm91Z2ggdGhpcyBhZ3JlZW1lbnQgc2hhbGwgam9pbnRseSBvd25lZCBieSB0aGUgSGVhbHRoIFNlcnZpY2UgUHJvdmlkZXIgYW5kIHRoZSBDb21wYW55LlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIEhlYWx0aCBTZXJ2aWNlIFByb3ZpZGVyIGhlcmVieSBncmFudHMgdG8gdGhlIENvbXBhbnkgYSBsaW1pdGVkLCBub24tZXhjbHVzaXZlLCBub24tdHJhbnNmZXJhYmxlIHJpZ2h0LCBvbmx5IGZvciB0aGUgVGVybSBvZiB0aGlzIEFncmVlbWVudCwgdG8gdXNlIHRoZSBTZXJ2aWNlIFByb3ZpZGVy4oCZcyBJbnRlbGxlY3R1YWwgUHJvcGVydHksIGluY2x1ZGluZyBpdHMgbWFya3MsIGxvZ29zIGFuZCBicmFuZC90cmFkZSBuYW1lcywgc29sZWx5IGZvciBpbiByZWxhdGlvbiB0byB0aGUgU2VydmljZXMgdG8gYmUgcmVuZGVyZWQgYnkgdGhlIFNlcnZpY2UgUHJvdmlkZXIgaW4gYWNjb3JkYW5jZSB3aXRoIHRoZSB0ZXJtcyBvZiB0aGlzIEFncmVlbWVudC4gU3ViamVjdCB0byB0aGUgY29uZmlkZW50aWFsaXR5IGNsYXVzZSBoZXJlaW4sIHRoZSBDb21wYW55IG1heSBkaXNwbGF5IG9uIGl0cyB3ZWIgcG9ydGFscywgYXQgYWxsIHRpbWVzIGR1cmluZyB0aGUgVGVybSBvZiB0aGlzIEFncmVlbWVudCwgdGhlIEhlYWx0aCBTZXJ2aWNlIFByb3ZpZGVy4oCZcyBtYXJrcywgbG9nbyBhbmQgYnJhbmQvdHJhZGUgbmFtZXMsIGFzIG11dHVhbGx5IGRldGVybWluZWQgaW4gd3JpdGluZyBieSB0aGUgUGFydGllcyBzb2xlbHkgZm9yIHB1cnBvc2VzIHNwZWNpZmllZCBpbiB0aGlzIEFncmVlbWVudC5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm9ybWF0aW9uIGFuZCBkYXRhIG9mIHRoZSBIZWFsdGggU2VydmljZSBQcm92aWRlciBzaGFsbCBiZSBwdWJsaXNoZWQgYnkgdGhlIENvbXBhbnkgZWl0aGVyIGJ5IHJlbHlpbmcgb24gdGhlIGluZm9ybWF0aW9uIHByb3ZpZGVkIGJ5IHRoZSBTZXJ2aWNlIFByb3ZpZGVy4oCZcyBvciBpZiB0YWtlbiBmcm9tIEhlYWx0aCBTZXJ2aWNlIFByb3ZpZGVy4oCZcyB3ZWJzaXRlIHRoZW4gYnkgc2Vla2luZyBwcmlvciB3cml0dGVuIGFwcHJvdmFsIGZyb20gdGhlIEhlYWx0aCBTZXJ2aWNlIFByb3ZpZGVyLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2Mtc3ViaGVhZGluZ1wiPjUuJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7SU5ERU1OSVRZPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+VGhlIFNlcnZpY2UgUHJvdmlkZXIgaGVyZWJ5IGNvdmVuYW50cyB0byBpbmRlbW5pZnkgYW5kIGhvbGQgaGFybWxlc3MgQ29tcGFueSwgaXRzIGVtcGxveWVlcywgc2VydmFudHMgYW5kIGFnZW50cyBmcm9tIGFuZCBhZ2FpbnN0IGFsbCBhY3Rpb25zLCBjbGFpbXMsIGRlbWFuZHMsIGxvc3NlcywgZGFtYWdlcywgY29zdHMgYW5kIGV4cGVuc2VzIGZvciB3aGljaCAgQ29tcGFueSBzaGFsbCBvciBtYXkgYmUgb3IgYmVjb21lIGxpYWJsZSBpbiByZXNwZWN0IG9mIGFuZCB0byB0aGUgZXh0ZW50IHRoYXQgdGhleSBhcmlzZSBmcm9tOjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIEhlYWx0aCBTZXJ2aWNlIFByb3ZpZGVyIGNvbW1pdHRpbmcgYW55IGJyZWFjaCBvciBjb250cmF2ZW50aW9uIG9mIHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucyBvZiB0aGlzIEFncmVlbWVudCwgaXRzIG9ibGlnYXRpb25zIHVuZGVyIHRoaXMgQWdyZWVtZW50LCBhcHBsaWNhYmxlIExhd3MsIGFwcGxpY2FibGUgcGVybWl0cywgY29kZXMsIG9yZGluYW5jZXMgb3IgcmVndWxhdGlvbnMsIGJ5ZSBsYXdzO1xuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW55IGFjdCBvZiBjb21taXNzaW9uIG9yIG9taXNzaW9uLCBvciBkZWZhdWx0IG9uIHRoZSBwYXJ0IG9mIHRoZSBTZXJ2aWNlIFByb3ZpZGVyIGFuZC9vciBpdHMgcGVyc29ubmVsLCByZXByZXNlbnRhdGl2ZXMsIG9mZmljZXJzLCBhZ2VudHMsIGFmZmlsaWF0ZXM7XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgbmVnbGlnZW50IHVzZSwgbWlzdXNlLCBieSB0aGUgaGVhbHRoIFNlcnZpY2UgUHJvdmlkZXIgb3IgYW55IG9mIGl0cyBlbXBsb3llZSwgc2VydmFudCwgYWdlbnQsIHdpdGggcmVzcGVjdCB0byB0aGUgbWVkaWNhbCBzZXJ2aWNlcyBwcm92aWRlZCB0byB0aGUgQ3VzdG9tZXIocykgb2YgdGhlIENvbXBhbnk7XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgSGVhbHRoIFNlcnZpY2UgUHJvdmlkZXIgYWxzbyBhZ3JlZXMgdG8gaW5kZW1uaWZ5IGFuZCBob2xkIGhhcm1sZXNzIENvbXBhbnkgZnJvbSB0aW1lIHRvIHRpbWUgYW5kIGF0IGFsbCB0aW1lcyBoZXJlYWZ0ZXIsIGZyb20gYW5kIGFnYWluc3QsIGFsbCBub3RpY2VzLCBjbGFpbXMsIGRlbWFuZHMsIGFjdGlvbiwgc3VpdHMgb3IgcHJvY2VlZGluZ3MgZ2l2ZW4sIG1hZGUgb3IgaW5pdGlhdGVkIGFnYWluc3QgQ29tcGFueSBvbiBhY2NvdW50IG9mIHRoZSBTZXJ2aWNlIFByb3ZpZGVyLCBhcyBhbHNvIGFnYWluc3QgYWxsIGNvc3RzLCBjaGFyZ2VzIGFuZCBleHBlbnNlcyBzdWZmZXJlZCBvciBpbmN1cnJlZCBieSBDb21wYW55IGFzIGEgcmVzdWx0IG9mIGFueSBwcm9jZWVkaW5nIG9yIGxlZ2FsIGFjdGlvbiBmaWxlZCBieSB0aGUgY3VzdG9tZXIgb3IgYW55IHRoaXJkIHBhcnR5LlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2Mtc3ViaGVhZGluZ1wiPjYuJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7R0VORVJBTCBQUk9WSVNJT05TPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cInByaXZhY3ktb3JkZXItbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LW9yZGVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+R292ZXJuaW5nIExhdzsgRGlzcHV0ZSBSZXNvbHV0aW9uOjwvc3Bhbj4gVGhpcyBBZ3JlZW1lbnQgc2hhbGwgYmUgZ292ZXJuZWQgYnksIGFuZCBjb25zdHJ1ZWQgaW4gYWNjb3JkYW5jZSB3aXRoLCB0aGUgbGF3cyBvZiBJbmRpYSwgd2l0aG91dCByZWdhcmQgdG8gdGhlIHByaW5jaXBsZXMgb2YgY29uZmxpY3Qgb2YgbGF3cyBvZiBhbnkgb3RoZXIganVyaXNkaWN0aW9uLiBUaGUgY291cnRzIG9mIEd1cnVncmFtLCBJbmRpYSB3aGljaCBzaGFsbCBoYXZlIGV4Y2x1c2l2ZSBqdXJpc2RpY3Rpb24sIGZvciByZW1lZGllcyBhdmFpbGFibGUgYXQgbGF3IHRvIHN1Y2ggUGFydHkuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LW9yZGVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UmVsYXRpb25zaGlwIG9mIFBhcnRpZXM6PC9zcGFuPiBUaGUgUGFydGllcyBhcmUgaW5kZXBlbmRlbnQgY29udHJhY3RpbmcgcGFydGllcyBhbmQgd2lsbCBoYXZlIG5vIHBvd2VyIG9yIGF1dGhvcml0eSB0byBhc3N1bWUgb3IgY3JlYXRlIGFueSBvYmxpZ2F0aW9uIG9yIHJlc3BvbnNpYmlsaXR5IG9uIGJlaGFsZiBvZiBlYWNoIG90aGVyLiBUaGlzIEFncmVlbWVudCB3aWxsIG5vdCBiZSBjb25zdHJ1ZWQgdG8gY3JlYXRlIG9yIGltcGx5IGFueSBwYXJ0bmVyc2hpcCwgYWdlbmN5LCBvciBqb2ludCB2ZW50dXJlLCBvciBlbXBsb3llci1lbXBsb3llZSByZWxhdGlvbnNoaXAuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LW9yZGVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QmluZGluZyBFZmZlY3Q7IFNldmVyYWJpbGl0eTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cInN1Yi1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWxsIHRlcm1zIGFuZCBjb25kaXRpb25zIG9mIHRoaXMgQWdyZWVtZW50IHNoYWxsIGJlIGJpbmRpbmcgdXBvbiwgaW51cmUgdG8gdGhlIGJlbmVmaXQgb2YsIGFuZCBiZSBlbmZvcmNlYWJsZSBieSB0aGUgbGVnYWwgcmVwcmVzZW50YXRpdmVzLCBzdWNjZXNzb3JzIGFuZCBhc3NpZ25zIG9mIHRoZSBQYXJ0aWVzLlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbnkgdGVybSBvciBwcm92aXNpb24gb2YgdGhpcyBBZ3JlZW1lbnQgdGhhdCBpcyBpbnZhbGlkIG9yIHVuZW5mb3JjZWFibGUgaW4gYW55IGp1cmlzZGljdGlvbiB3aWxsLCBhcyB0byB0aGF0IGp1cmlzZGljdGlvbiwgYmUgaW5lZmZlY3RpdmUgdG8gdGhlIGV4dGVudCBvZiBzdWNoIGludmFsaWRpdHkgb3IgdW5lbmZvcmNlYWJpbGl0eSB3aXRob3V0IHJlbmRlcmluZyBpbnZhbGlkIG9yIHVuZW5mb3JjZWFibGUgdGhlIHJlbWFpbmluZyB0ZXJtcyBhbmQgcHJvdmlzaW9ucyBvZiB0aGlzIEFncmVlbWVudCBvciBhZmZlY3RpbmcgdGhlIHZhbGlkaXR5IG9yIGVuZm9yY2VhYmlsaXR5IG9mIGFueSBvZiB0aGUgdGVybXMgb3IgcHJvdmlzaW9ucyBvZiB0aGlzIEFncmVlbWVudCBpbiBhbnkgb3RoZXIganVyaXNkaWN0aW9uLiAgSWYgYW55IHByb3Zpc2lvbiBvZiB0aGlzIEFncmVlbWVudCBpcyBzbyBicm9hZCBhcyB0byBiZSB1bmVuZm9yY2VhYmxlLCB0aGUgcHJvdmlzaW9uIHdpbGwgYmUgaW50ZXJwcmV0ZWQgdG8gYmUgb25seSBzbyBicm9hZCBhcyBpcyBlbmZvcmNlYWJsZS5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1vcmRlci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkVudGlyZSBBZ3JlZW1lbnQ6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj5UaGlzIEFncmVlbWVudCBjb25zdGl0dXRlcyB0aGUgZW50aXJlIGFncmVlbWVudCBiZXR3ZWVuIHRoZSBQYXJ0aWVzIHJlbGF0aW5nIHRvIHRoZSBzdWJqZWN0IG1hdHRlciBvZiB0aGlzIEFncmVlbWVudCBhbmQgc3VwZXJzZWRlcyBhbnkgcHJldmlvdXMgd3JpdHRlbiBvciBvcmFsIHVuZGVyc3RhbmRpbmcsIG5lZ290aWF0aW9ucywgY29tbXVuaWNhdGlvbnMgYW5kIGFncmVlbWVudCBiZXR3ZWVuIHRoZSBQYXJ0aWVzIGluIHJlbGF0aW9uIHRvIHRoZSBtYXR0ZXJzIGRlYWx0IHdpdGggaW4gdGhpcyBBZ3JlZW1lbnQuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjLWhlYWRpbmcgbXJ0LTIwXCI+Q09ERSBPRiBDT05EVUNUPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+SGVhbHRoIFNlcnZpY2UgUHJvdmlkZXI6PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cInN1Yi1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFsbCBhYmlkZSBieSB0aGUgSW5kaWFuIE1lZGljYWwgQ291bmNpbCAoUHJvZmVzc2lvbmFsIGNvbmR1Y3QsIEV0aXF1ZXR0ZSBhbmQgRXRoaWNzKSBSZWd1bGF0aW9ucywgMjAwMiBhbmQgb3RoZXIgYXBwbGljYWJsZSBsYXdzIHRvIG1lZGljYWwgcHJvZmVzc2lvbiBJIEluZGlhXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhbGwgZW5zdXJlIHRoYXQgaXQgaGFzIHRoZSByZXF1aXNpdGUg4oCLcXVhbGlmaWNhdGlvbiByZWNvZ25pemVkIGJ5IE1lZGljYWwgQ291bmNpbCBvZiBJbmRpYSBhbmQgcmVnaXN0ZXJlZCB3aXRoIE1lZGljYWwgQ291bmNpbCBvZiBJbmRpYS9TdGF0ZSBNZWRpY2FsIENvdW5jaWwgKHMpIGlzIGFsbG93ZWQgdG8gcHJhY3RpY2UgYXMgcGVyIHRoZSBhcHBsaWNhYmxlIGxhd3MgaW4gSW5kaWFcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFsbCBiZSBsaWFibGUgdG8gcHJvdGVjdCBwYXRpZW50L2N1c3RvbWVycyBwcml2YWN5IGFuZCBjb25maWRlbnRpYWxpdHkgaW5jbHVkaW5nIGFueSBtZWRpY2FsIGluZm9ybWF0aW9uIG9yIGRhdGEgcHJvdmlkZWQgYnkgdGhlIENvbXBhbnnigJlzIGN1c3RvbWVycy5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aG8gcGFydGljaXBhdGUgaW4gdGVsZW1lZGljaW5lL29ubGluZSBjb25zdWx0YXRpb24gc2hhbGwgZW5zdXJlIGFuZCBtYWludGFpbiBhbiBldGhpY2FsIHJlc3BvbnNpYmlsaXR5IHRvIHVwaG9sZCBmdW5kYW1lbnRhbCBmaWR1Y2lhcnkgb2JsaWdhdGlvbnMgYnkgZGlzY2xvc2luZyBhbnkgZmluYW5jaWFsIG9yIG90aGVyIGludGVyZXN0cyBpdCBoYXMgaW4gdGhlIHRlbGVtZWRpY2luZS9vbmxpbmUgY29uc3VsdGF0aW9uIGFwcGxpY2F0aW9uIG9yIHNlcnZpY2UgYW5kIHNoYWxsIGltbWVkaWF0ZWx5IGRpc2Nsb3NlIGl0IHRvIHRoZSBDb21wYW55IHNvIHRoYXQgQ29tcGFueSBjYW4gYXBwcm9wcmlhdGUgc3RlcHMgdG8gbWFuYWdlIG9yIGVsaW1pbmF0ZSBjb25mbGljdHMgb2YgaW50ZXJlc3RzXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hvIHByb3ZpZGUgY2xpbmljYWwgc2VydmljZXMgYW5kL29yIHVuZGVyd3JpdGluZyBkZWNpc2lvbiBmb3IgaGVhbHRoIGFuZCBvdGhlciBpbnN1cmFuY2VzLCB0aHJvdWdoIHRlbGVtZWRpY2luZSBtdXN0IHVwaG9sZCB0aGUgc3RhbmRhcmRzIG9mIHByb2Zlc3Npb25hbGlzbSBhcyBhcmUgYXBwbGljYWJsZSBpbiBpbi1wZXJzb24gaW50ZXJhY3Rpb25zIGFuZCBmb2xsb3cgYXBwcm9wcmlhdGUgZXRoaWNhbCBndWlkZWxpbmVzIGFuZCBwcmFjdGljZXMgYXMgcGVyIG1lZGljYWwgbGF3cyBhcHBsaWNhYmxlIGluIEluZGlhXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdWxkIGJlIHJlc3BvbnNpYmxlIGluIHVuZGVyc3RhbmRpbmcgdGhlIOKAi2N1cnJlbnQgbWVkaWNhbCBjb25kaXRpb24sIHRoZSBwYXN0LWhpc3RvcnksIHRoZSBzb2NpYWwgaGlzdG9yeSwgc2V2ZXJpdHkgb2YgZXhpc3RpbmcgZGlzZWFzZXMsIGNvbXBsaWNhdGlvbnMgYW5kIGN1cnJlbnQgbWFuYWdlbWVudCBsaW5lIG9mIHByb3NwZWN0aXZlIGFuZCBjdXJyZW50IGN1c3RvbWVycyBmb3IgaGVhbHRoIGFuZCBvdGhlciBpbnN1cmFuY2VzLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYWxsIGJlIHBydWRlbnQgaW4gY2Fycnlpbmcgb3V0IGEgZGlhZ25vc3RpYyBldmFsdWF0aW9uIG9yIHByZXNjcmliaW5nIG1lZGljYXRpb24gYnk6XG4gICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXN0YWJsaXNoaW5nIHRoZSBwYXRpZW504oCZcyBpZGVudGl0eVxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maXJtaW5nIHRoYXQgdGVsZW1lZGljaW5lIHNlcnZpY2VzIGFyZSBhcHByb3ByaWF0ZSBmb3IgdGhhdCBwYXRpZW504oCZcyBpbmRpdmlkdWFsIHNpdHVhdGlvbiBhbmQgbWVkaWNhbCBuZWVkc1xuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFdmFsdWF0aW5nIHRoZSBpbmRpY2F0aW9uLCBhcHByb3ByaWF0ZW5lc3MgYW5kIHNhZmV0eSBvZiBhbnkgcHJlc2NyaXB0aW9uIGluIGtlZXBpbmcgd2l0aCBiZXN0XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByYWN0aWNlIGd1aWRlbGluZXMgYW5kIGFueSBmb3JtdWxhcnkgbGltaXRhdGlvbnMgdGhhdCBhcHBseSB0byB0aGUgZWxlY3Ryb25pYyBpbnRlcmFjdGlvblxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb2N1bWVudGluZyB0aGUgY2xpbmljYWwgZXZhbHVhdGlvbiBhbmQgcHJlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFsbCBhdHRlbmQgbWFuZGF0b3J5IGluLWhvdXNlIHRyYWluaW5nIHByb2dyYW1zIHRoYXQgbWF5IGJlIGNvbmR1Y3RlZCBieSB0aGUgQ29tcGFueSBmcm9tIHRpbWUgdG8gdGltZS4gVGhpcyBtYXkgcmVxdWlyZSB0aGUgSGVhbHRoIFNlcnZpY2UgUHJvdmlkZXIgdG8gdW5kZXJnbyB3ZWItYmFzZWQgYW5kIG90aGVyIHRyYWluaW5nIHByb2dyYW1zLiBDb21wYW55IHNoYWxsIGhhdmUgdGhlIHJpZ2h0IHRvIHJlZ3VsYXJseSBhbmQgbW9uaXRvciBhbmQgdGhlIHF1YWxpdHkgb2Ygd29yay9zZXJ2aWNlIHBlcmZvcm1lZCBieSB0aGUgSGVhbHRoIFNlcnZpY2UgUHJvdmlkZS5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFsbCBtYWludGFpbiBhbGwgcGF0aWVudCByZWxhdGVkIHJlY29yZHMgaW4gYW4gZWxlY3Ryb25pYyBtYW5uZXIgaW4gYWNjb3JkYW5jZSB3aXRoIHByb3Zpc2lvbnMgbGFpZCBkb3duIGJ5IHRoZSBNZWRpY2FsIENvdW5jaWwgb2YgSW5kaWEgYW5kIGluIGFkZGl0aW9uLCBpbiB0aGUgZm9ybSBhbmQgbWFubmVyIGFzIGluc3RydWN0ZWQgYnkgdGhlIENvbXBhbnkuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhbGwga2VlcCBpdHNlbGYgdXAgdG8gZGF0ZSB3aXRoIHRoZSBkZXZlbG9wbWVudHMgaW4gbWVkaWNhbCBwcm9mZXNzaW9uIGFuZCBzdHVkaWVzLG5ldyBkcnVncywgdHJlYXRtZW50cyBhbmQgbWVkaWNhdGlvbnMsIGluY2x1ZGluZyBjb21wbGVtZW50YXJ5IG1lZGljaW5lIGV0Yy5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFsbCBhdCBhbGwgdGltZXMgbWFpbnRhaW4gYSBwcm9mZXNzaW9uYWwgYXBwZWFyYW5jZSBhbmQgYXR0aXR1ZGUgd2hpbGUgcmVuZGVpbmcgbWVkaWNhbCBhbmQgaGVhbHRoIGNhcmUgc2VydmljZXMuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhbGwgZW5zdXJlIGNsZWFyIGFuZCBwcm9tcHQgY29tbXVuaWNhdGlvbiBpbiBpdHMgZGVhbGluZyB3aXRoIENvbXBhbnnigJlzIGN1c3RvbWVycy5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFsbCBhY3QgaW4gdXRtb3N0IGdvb2QgZmFpdGggYW5kIGV4ZXJjaXNlIGR1ZSBjYXJlLCBkaWxpZ2VuY2UgYW5kIHBlcnNvbmFsIGFuZCBwcm9mZXNzaW9uYWwgaW50ZWdyaXR5IGluIHRoZSBwZXJmb3JtYW5jZSBvZiB0aGVpciBkdXRpZXMgYW5kIHJlc3BvbnNpYmlsaXRpZXMgYXMgbWVkaWNhbCBwcmFjdGl0aW9uZXIgYW5kIHNoYWxsIGluIG5vIGV2ZW50IGNvbXByb21pc2Ugd2l0aCB0aGVpciBpbmRlcGVuZGVuY2Ugb2YganVkZ21lbnRcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFsbCBub3QgZXhwbG9pdCBmb3IgdGhlaXIgb3duIHBlcnNvbmFsIGdhaW4sIG9wcG9ydHVuaXRpZXMgdGhhdCBhcmUgZGlzY292ZXJlZCB0aHJvdWdoIHVzZSBvZiBjb3Jwb3JhdGUgcHJvcGVydHkgaW5mb3JtYXRpb25cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjLXN1YmhlYWRpbmdcIj5EZWNsYXJhdGlvbjo8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj5UaGlzIGlzIHRvIGNvbmZpcm0gdGhhdCB3ZSBoYXZlIHVuZGVyc3Rvb2QgdGhlIGNvbnRlbnRzIG9mIENvbXBhbnnigJlzIENvZGUgb2YgQ29uZHVjdCBmb3IgSGVhbHRoIFNlcnZpY2UgUHJvdmlkZXIgYW5kIHRoZSBzYW1lIGhhcyBiZWVuIGV4cGxhaW5lZCBhbmQgdW5kZXJzdG9vZCBieSB1cy4gIFdlIGFncmVlIGFuZCB1bmRlcnRha2UgdGhhdCBpbiBwZXJmb3JtYW5jZSBvZiBvdXIgb2JsaWdhdGlvbnMgdW5kZXIgdGhpcyBhZ3JlZW1lbnQgd2l0aCAgQ29tcGFueSB3ZSBzaGFsbCBpbmNsdWRpbmcgYnV0IG5vdCBsaW1pdGVkIHRvIG91ciBvZmZpY2VycywgZGlyZWN0b3JzLCBlbXBsb3llZXMsIGFnZW50cywgY29uc3VsdGFudHMgb3IgcmVwcmVzZW50YXRpdmVzLCBldGMuLCBzaGFsbCBiZSByZXF1aXJlZCB0byBhZGhlcmUgdG8gdGhlIHJlcXVpcmVtZW50cyBvZiB0aGlzIGFja25vd2xlZGdlbWVudC48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFRlcm1zXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgc3VibWl0Q2FyZWVyUHJvZmlsZSwgc3VibWl0Q29udGFjdE1lc3NhZ2UsIHNpZ251cERvY3RvciwgZ2V0Q2l0aWVzIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcblxuaW1wb3J0IFN0YXRpY1BhZ2VzVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvc3RhdGljUGFnZXMnXG5cbmNsYXNzIFN0YXRpY1BhZ2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgICByb3V0ZXI6ICgpID0+IG51bGxcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFN0YXRpY1BhZ2VzVmlldyB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuXG4gICAgbGV0IHtcbiAgICAgICAgY2l0aWVzTmFtZSxcbiAgICAgICAgdXRtX3RhZ3NcbiAgICB9ID0gc3RhdGUuVVNFUlxuICAgIHJldHVybiB7XG4gICAgICAgIGNpdGllc05hbWUsXG4gICAgICAgIHV0bV90YWdzXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdWJtaXRDYXJlZXJQcm9maWxlOiAocG9zdENhcmVlckRhdGEsIGNiKSA9PiBkaXNwYXRjaChzdWJtaXRDYXJlZXJQcm9maWxlKHBvc3RDYXJlZXJEYXRhLCBjYikpLFxuICAgICAgICBzdWJtaXRDb250YWN0TWVzc2FnZTogKHBvc3RDb250YWN0RGF0YSwgY2IpID0+IGRpc3BhdGNoKHN1Ym1pdENvbnRhY3RNZXNzYWdlKHBvc3RDb250YWN0RGF0YSwgY2IpKSxcbiAgICAgICAgc2lnbnVwRG9jdG9yOiAoc2lnbnVwRG9jdG9yRGF0YSwgY2IpID0+IGRpc3BhdGNoKHNpZ251cERvY3RvcihzaWdudXBEb2N0b3JEYXRhLCBjYikpLFxuICAgICAgICBnZXRDaXRpZXM6IChmaWx0ZXJUZXh0KSA9PiBkaXNwYXRjaChnZXRDaXRpZXMoZmlsdGVyVGV4dCkpXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFN0YXRpY1BhZ2VzKTtcbiIsIi8vIC5kaXJuYW1lLCAuYmFzZW5hbWUsIGFuZCAuZXh0bmFtZSBtZXRob2RzIGFyZSBleHRyYWN0ZWQgZnJvbSBOb2RlLmpzIHY4LjExLjEsXG4vLyBiYWNrcG9ydGVkIGFuZCB0cmFuc3BsaXRlZCB3aXRoIEJhYmVsLCB3aXRoIGJhY2t3YXJkcy1jb21wYXQgZml4ZXNcblxuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIHJlc29sdmVzIC4gYW5kIC4uIGVsZW1lbnRzIGluIGEgcGF0aCBhcnJheSB3aXRoIGRpcmVjdG9yeSBuYW1lcyB0aGVyZVxuLy8gbXVzdCBiZSBubyBzbGFzaGVzLCBlbXB0eSBlbGVtZW50cywgb3IgZGV2aWNlIG5hbWVzIChjOlxcKSBpbiB0aGUgYXJyYXlcbi8vIChzbyBhbHNvIG5vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMgLSBpdCBkb2VzIG5vdCBkaXN0aW5ndWlzaFxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXkocGFydHMsIGFsbG93QWJvdmVSb290KSB7XG4gIC8vIGlmIHRoZSBwYXRoIHRyaWVzIHRvIGdvIGFib3ZlIHRoZSByb290LCBgdXBgIGVuZHMgdXAgPiAwXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXJ0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBsYXN0ID0gcGFydHNbaV07XG4gICAgaWYgKGxhc3QgPT09ICcuJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSBpZiAobGFzdCA9PT0gJy4uJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcbiAgaWYgKGFsbG93QWJvdmVSb290KSB7XG4gICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICBwYXJ0cy51bnNoaWZ0KCcuLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXNvbHZlZFBhdGggPSAnJyxcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTEgJiYgIXJlc29sdmVkQWJzb2x1dGU7IGktLSkge1xuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xuXG4gICAgLy8gU2tpcCBlbXB0eSBhbmQgaW52YWxpZCBlbnRyaWVzXG4gICAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGgucmVzb2x2ZSBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xuICAgIHJlc29sdmVkQWJzb2x1dGUgPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICB9XG5cbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHJlc29sdmVkUGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xufTtcblxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMubm9ybWFsaXplID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgaXNBYnNvbHV0ZSA9IGV4cG9ydHMuaXNBYnNvbHV0ZShwYXRoKSxcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBzdWJzdHIocGF0aCwgLTEpID09PSAnLyc7XG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFpc0Fic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XG4gICAgcGF0aCA9ICcuJztcbiAgfVxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XG4gICAgcGF0aCArPSAnLyc7XG4gIH1cblxuICByZXR1cm4gKGlzQWJzb2x1dGUgPyAnLycgOiAnJykgKyBwYXRoO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuam9pbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcGF0aHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICByZXR1cm4gZXhwb3J0cy5ub3JtYWxpemUoZmlsdGVyKHBhdGhzLCBmdW5jdGlvbihwLCBpbmRleCkge1xuICAgIGlmICh0eXBlb2YgcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfVxuICAgIHJldHVybiBwO1xuICB9KS5qb2luKCcvJykpO1xufTtcblxuXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XG4gIGZyb20gPSBleHBvcnRzLnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xuICB0byA9IGV4cG9ydHMucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xuXG4gIGZ1bmN0aW9uIHRyaW0oYXJyKSB7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICBmb3IgKDsgc3RhcnQgPCBhcnIubGVuZ3RoOyBzdGFydCsrKSB7XG4gICAgICBpZiAoYXJyW3N0YXJ0XSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSBhcnIubGVuZ3RoIC0gMTtcbiAgICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XG4gICAgICBpZiAoYXJyW2VuZF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoc3RhcnQgPiBlbmQpIHJldHVybiBbXTtcbiAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEpO1xuICB9XG5cbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW0oZnJvbS5zcGxpdCgnLycpKTtcbiAgdmFyIHRvUGFydHMgPSB0cmltKHRvLnNwbGl0KCcvJykpO1xuXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIG91dHB1dFBhcnRzID0gW107XG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xuICB9XG5cbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcblxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xufTtcblxuZXhwb3J0cy5zZXAgPSAnLyc7XG5leHBvcnRzLmRlbGltaXRlciA9ICc6JztcblxuZXhwb3J0cy5kaXJuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSByZXR1cm4gJy4nO1xuICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdCgwKTtcbiAgdmFyIGhhc1Jvb3QgPSBjb2RlID09PSA0NyAvKi8qLztcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAxOyAtLWkpIHtcbiAgICBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIGVuZCA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvclxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiBoYXNSb290ID8gJy8nIDogJy4nO1xuICBpZiAoaGFzUm9vdCAmJiBlbmQgPT09IDEpIHtcbiAgICAvLyByZXR1cm4gJy8vJztcbiAgICAvLyBCYWNrd2FyZHMtY29tcGF0IGZpeDpcbiAgICByZXR1cm4gJy8nO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKDAsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBiYXNlbmFtZShwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG5cbiAgdmFyIHN0YXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgdmFyIGk7XG5cbiAgZm9yIChpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIGlmIChwYXRoLmNoYXJDb2RlQXQoaSkgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gcGF0aCBjb21wb25lbnRcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiAnJztcbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnQsIGVuZCk7XG59XG5cbi8vIFVzZXMgYSBtaXhlZCBhcHByb2FjaCBmb3IgYmFja3dhcmRzLWNvbXBhdGliaWxpdHksIGFzIGV4dCBiZWhhdmlvciBjaGFuZ2VkXG4vLyBpbiBuZXcgTm9kZS5qcyB2ZXJzaW9ucywgc28gb25seSBiYXNlbmFtZSgpIGFib3ZlIGlzIGJhY2twb3J0ZWQgaGVyZVxuZXhwb3J0cy5iYXNlbmFtZSA9IGZ1bmN0aW9uIChwYXRoLCBleHQpIHtcbiAgdmFyIGYgPSBiYXNlbmFtZShwYXRoKTtcbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcbiAgICBmID0gZi5zdWJzdHIoMCwgZi5sZW5ndGggLSBleHQubGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gZjtcbn07XG5cbmV4cG9ydHMuZXh0bmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIHZhciBzdGFydERvdCA9IC0xO1xuICB2YXIgc3RhcnRQYXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgLy8gVHJhY2sgdGhlIHN0YXRlIG9mIGNoYXJhY3RlcnMgKGlmIGFueSkgd2Ugc2VlIGJlZm9yZSBvdXIgZmlyc3QgZG90IGFuZFxuICAvLyBhZnRlciBhbnkgcGF0aCBzZXBhcmF0b3Igd2UgZmluZFxuICB2YXIgcHJlRG90U3RhdGUgPSAwO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydFBhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gZXh0ZW5zaW9uXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gNDYgLyouKi8pIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBvdXIgZmlyc3QgZG90LCBtYXJrIGl0IGFzIHRoZSBzdGFydCBvZiBvdXIgZXh0ZW5zaW9uXG4gICAgICAgIGlmIChzdGFydERvdCA9PT0gLTEpXG4gICAgICAgICAgc3RhcnREb3QgPSBpO1xuICAgICAgICBlbHNlIGlmIChwcmVEb3RTdGF0ZSAhPT0gMSlcbiAgICAgICAgICBwcmVEb3RTdGF0ZSA9IDE7XG4gICAgfSBlbHNlIGlmIChzdGFydERvdCAhPT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgYW5kIG5vbi1wYXRoIHNlcGFyYXRvciBiZWZvcmUgb3VyIGRvdCwgc28gd2Ugc2hvdWxkXG4gICAgICAvLyBoYXZlIGEgZ29vZCBjaGFuY2UgYXQgaGF2aW5nIGEgbm9uLWVtcHR5IGV4dGVuc2lvblxuICAgICAgcHJlRG90U3RhdGUgPSAtMTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhcnREb3QgPT09IC0xIHx8IGVuZCA9PT0gLTEgfHxcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgY2hhcmFjdGVyIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgZG90XG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMCB8fFxuICAgICAgLy8gVGhlIChyaWdodC1tb3N0KSB0cmltbWVkIHBhdGggY29tcG9uZW50IGlzIGV4YWN0bHkgJy4uJ1xuICAgICAgcHJlRG90U3RhdGUgPT09IDEgJiYgc3RhcnREb3QgPT09IGVuZCAtIDEgJiYgc3RhcnREb3QgPT09IHN0YXJ0UGFydCArIDEpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnREb3QsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBmaWx0ZXIgKHhzLCBmKSB7XG4gICAgaWYgKHhzLmZpbHRlcikgcmV0dXJuIHhzLmZpbHRlcihmKTtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZih4c1tpXSwgaSwgeHMpKSByZXMucHVzaCh4c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8vIFN0cmluZy5wcm90b3R5cGUuc3Vic3RyIC0gbmVnYXRpdmUgaW5kZXggZG9uJ3Qgd29yayBpbiBJRThcbnZhciBzdWJzdHIgPSAnYWInLnN1YnN0cigtMSkgPT09ICdiJ1xuICAgID8gZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikgeyByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKSB9XG4gICAgOiBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7XG4gICAgICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gc3RyLmxlbmd0aCArIHN0YXJ0O1xuICAgICAgICByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKTtcbiAgICB9XG47XG4iLCJpbXBvcnQgX01lbW9yeVJvdXRlciBmcm9tIFwiLi9NZW1vcnlSb3V0ZXJcIjtcbmV4cG9ydCB7IF9NZW1vcnlSb3V0ZXIgYXMgTWVtb3J5Um91dGVyIH07XG5pbXBvcnQgX1Byb21wdCBmcm9tIFwiLi9Qcm9tcHRcIjtcbmV4cG9ydCB7IF9Qcm9tcHQgYXMgUHJvbXB0IH07XG5pbXBvcnQgX1JlZGlyZWN0IGZyb20gXCIuL1JlZGlyZWN0XCI7XG5leHBvcnQgeyBfUmVkaXJlY3QgYXMgUmVkaXJlY3QgfTtcbmltcG9ydCBfUm91dGUgZnJvbSBcIi4vUm91dGVcIjtcbmV4cG9ydCB7IF9Sb3V0ZSBhcyBSb3V0ZSB9O1xuaW1wb3J0IF9Sb3V0ZXIgZnJvbSBcIi4vUm91dGVyXCI7XG5leHBvcnQgeyBfUm91dGVyIGFzIFJvdXRlciB9O1xuaW1wb3J0IF9TdGF0aWNSb3V0ZXIgZnJvbSBcIi4vU3RhdGljUm91dGVyXCI7XG5leHBvcnQgeyBfU3RhdGljUm91dGVyIGFzIFN0YXRpY1JvdXRlciB9O1xuaW1wb3J0IF9Td2l0Y2ggZnJvbSBcIi4vU3dpdGNoXCI7XG5leHBvcnQgeyBfU3dpdGNoIGFzIFN3aXRjaCB9O1xuaW1wb3J0IF9nZW5lcmF0ZVBhdGggZnJvbSBcIi4vZ2VuZXJhdGVQYXRoXCI7XG5leHBvcnQgeyBfZ2VuZXJhdGVQYXRoIGFzIGdlbmVyYXRlUGF0aCB9O1xuaW1wb3J0IF9tYXRjaFBhdGggZnJvbSBcIi4vbWF0Y2hQYXRoXCI7XG5leHBvcnQgeyBfbWF0Y2hQYXRoIGFzIG1hdGNoUGF0aCB9O1xuaW1wb3J0IF93aXRoUm91dGVyIGZyb20gXCIuL3dpdGhSb3V0ZXJcIjtcbmV4cG9ydCB7IF93aXRoUm91dGVyIGFzIHdpdGhSb3V0ZXIgfTsiXSwic291cmNlUm9vdCI6IiJ9