exports.ids = [44];
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

var _react = __webpack_require__(/*! react */ "react");

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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _staticDisclaimer = __webpack_require__(/*! ../../commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class StaticPagesView extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        if (window) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        //const parsed = queryString.parse(window.location.search)
        const parsed = queryString.parse(this.props.location.search);

        let pathname = '';
        if (this.props.location && this.props.location.pathname) {
            pathname = this.props.location.pathname;
        }

        return _react2.default.createElement(
            'div',
            { className: 'profile-body-wrap' },
            parsed.fromApp ? '' : _react2.default.createElement(_DesktopProfileHeader2.default, null),
            pathname && pathname.includes('doctorsignup') ? '' : _react2.default.createElement('div', { className: 'sub-header d-none d-lg-block' }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/about', render: props => {
                    return _react2.default.createElement(_aboutUs2.default, _extends({}, this.props, props, { fromApp: parsed.fromApp ? parsed.fromApp : false }));
                } }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/contact', render: props => {
                    return _react2.default.createElement(_contactUs2.default, _extends({}, this.props, props, { fromApp: parsed.fromApp ? parsed.fromApp : false }));
                } }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/privacy', render: props => {
                    return _react2.default.createElement(_privacy2.default, _extends({}, this.props, props));
                } }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/howitworks', render: props => {
                    return _react2.default.createElement(_howitWorks2.default, _extends({}, this.props, props));
                } }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/disclaimer', render: props => {
                    return _react2.default.createElement(_disclaimer2.default, _extends({}, this.props, props, { fromApp: parsed.fromApp ? parsed.fromApp : false }));
                } }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/terms', render: props => {
                    return _react2.default.createElement(_terms2.default, _extends({}, this.props, props, { fromApp: parsed.fromApp ? parsed.fromApp : false, forScroll: parsed.forBookingScroll ? parsed.forBookingScroll : false }));
                } }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/careers', render: props => {
                    return _react2.default.createElement(_careers2.default, _extends({}, this.props, props));
                } }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/media', render: props => {
                    return _react2.default.createElement(_media2.default, _extends({}, this.props, props));
                } }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/doctorsignup', render: props => {
                    return _react2.default.createElement(_doctorsignup2.default, _extends({}, this.props, props, { member_type: parsed.member_type ? parseInt(parsed.member_type) : '' }));
                } }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/cancelpolicy', render: props => {
                    return _react2.default.createElement(_cancelPolicy2.default, _extends({}, this.props, props, { fromApp: parsed.fromApp ? parsed.fromApp : false }));
                } }),
            parsed.fromApp ? _react2.default.createElement(_staticDisclaimer2.default, null) : _react2.default.createElement(_footer2.default, null)
        );
    }
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _HelmetTags = __webpack_require__(/*! ../HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AboutUs extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    navigateTo(where) {
        this.props.history.push(where);
    }

    render() {
        let mainClass;
        let headingClass;
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
                            { onClick: () => {
                                    this.props.fromApp ? this.navigateTo("/contact?fromApp=true") : this.navigateTo("/contact");
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _HelmetTags = __webpack_require__(/*! ../HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CancelPolicy extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let mainClass;
        let headingClass;
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
                                    { style: { color: `var(--text--primary--color)`, cursor: 'pointer', display: 'inline-block' }, onClick: () => this.props.history.push(this.props.fromApp ? '/terms?forBookingScroll=true&fromApp=true' : '/terms?forBookingScroll=true') },
                                    'click here'
                                )
                            )
                        )
                    )
                )
            )
        );
    }
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _HelmetTags = __webpack_require__(/*! ../HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Careers extends _react2.default.Component {
	constructor(props) {
		super(props);

		this.changeHandler = (event, key) => {
			this.setState({
				[key]: event.target.value
			});
		};

		this.filePicker = e => {
			this.setState({
				'resume': e.target.files[0]
			});
		};

		this.state = {
			resume: null,
			name: "",
			mobile: "",
			email: "",
			profile_type: ""
		};
	}

	onSubmitProfile(e) {
		e.preventDefault();
		let form_data = new FormData();
		form_data.append("resume", this.state.resume, "resume.pdf");
		form_data.append('name', this.state.name);
		form_data.append('mobile', this.state.mobile);
		form_data.append('email', this.state.email);
		form_data.append('profile_type', this.state.profile_type);
		this.props.submitCareerProfile(form_data, (error, res) => {
			this.setState({
				resume: null,
				name: "",
				mobile: "",
				email: "",
				profile_type: ""
			});
			_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Your job application submitted successfully." });
		});
	}

	render() {
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
								{ onSubmit: e => this.onSubmitProfile(e) },
								_react2.default.createElement(
									'div',
									{ className: 'form-group' },
									_react2.default.createElement(
										'select',
										{ className: 'form-control', value: this.state.profile_type, onChange: event => this.changeHandler(event, 'profile_type'), required: true },
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
									_react2.default.createElement('input', { type: 'text', id: 'name', className: 'form-control', placeholder: 'Your Name', value: this.state.name, onChange: event => this.changeHandler(event, 'name'), required: true })
								),
								_react2.default.createElement(
									'div',
									{ className: 'form-group' },
									_react2.default.createElement('input', { type: 'number', id: 'mobile', className: 'form-control', min: 5000000000, max: 9999999999, placeholder: 'Mobile Number', value: this.state.mobile, onChange: event => this.changeHandler(event, 'mobile'), required: true })
								),
								_react2.default.createElement(
									'div',
									{ className: 'form-group' },
									_react2.default.createElement('input', { type: 'email', id: 'email', className: 'form-control', placeholder: 'Email', value: this.state.email, onChange: event => this.changeHandler(event, 'email'), required: true })
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
										_react2.default.createElement('input', { type: 'file', name: 'resume', id: 'upload-resume', onChange: e => this.filePicker(e), required: true })
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _HelmetTags = __webpack_require__(/*! ../HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ContactUs extends _react2.default.Component {
    constructor(props) {
        super(props);

        this.changeHandler = (event, key) => {
            this.setState({
                [key]: event.target.value
            });
        };

        this.state = {
            name: "",
            mobile: "",
            email: "",
            message: ""
        };
    }

    onSubmitData(e) {
        e.preventDefault();
        this.props.submitContactMessage(this.state, (error, res) => {
            this.setState({
                name: "",
                mobile: "",
                email: "",
                message: ""
            });
            _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Contact Request taken successfully." });
        });
    }

    render() {
        let mainClass;
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
                                _react2.default.createElement('input', { type: 'text', className: 'form-control', placeholder: 'Name', value: this.state.name, onChange: e => {
                                        this.changeHandler(e, 'name');
                                    }, required: true })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'contact-fields' },
                                _react2.default.createElement('input', { type: 'email', className: 'form-control', placeholder: 'Email', value: this.state.email, onChange: e => {
                                        this.changeHandler(e, 'email');
                                    }, required: true })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'contact-fields' },
                                _react2.default.createElement('input', { type: 'number', className: 'form-control', placeholder: 'Mobile Number', max: 9999999999, min: 5000000000, value: this.state.mobile, onChange: e => {
                                        this.changeHandler(e, 'mobile');
                                    }, required: true })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'contact-fields' },
                                _react2.default.createElement('textarea', { className: 'form-control', placeholder: 'Message', rows: 3, value: this.state.message, onChange: e => {
                                        this.changeHandler(e, 'message');
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _HelmetTags = __webpack_require__(/*! ../HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Disclaimer extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let mainClass;
        let headingClass;
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Doctorsignup extends _react2.default.Component {
	constructor(props) {
		super(props);

		this.changeHandler = (event, key) => {
			this.setState({
				[key]: event.target.value
			});

			if (key === 'city') {
				if (event.target.value === "") {
					this.setState({ cityDropdownVisible: false });
				} else {
					this.setState({ cityDropdownVisible: true });
					this.props.getCities(event.target.value);
				}
			}
		};

		this.setCity = (cityName, cityId) => {
			this.setState({
				city: cityName,
				city_name: cityId,
				cityDropdownVisible: false
			});
		};

		this.state = {
			name: "",
			mobile: "",
			email: "",
			city: "",
			member_type: this.props.member_type ? this.props.member_type : '',
			cityDropdownVisible: false,
			city_name: "",
			utm_params: props.utm_tags || {},
			source: 'Consumer',
			showSuccessBox: false
		};
	}

	componentWillReceiveProps(props) {
		if (this.state.utm_params != props.utm_tags) {
			this.setState({ utm_params: props.utm_tags });
		}
	}

	componentDidMount() {
		this.setState({ showSuccessBox: false });

		if (window) {
			(function (window, document) {

				var loader = function () {

					var script = document.createElement("script"),
					    tag = document.getElementsByTagName("script")[0];

					script.src = "https://www.bajajfinserv.in/sites/bajaj/pstp/js/DocPrimeexternalwidget.js";

					tag.parentNode.insertBefore(script, tag);
				};

				window.addEventListener ? window.addEventListener("load", loader, false) : window.attachEvent("onload", loader);
			})(window, document);
		}
	}

	onSubmitData(e) {
		e.preventDefault();
		this.props.signupDoctor(this.state, (error, res) => {
			this.setState({
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

	render() {
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
								{ href: '/', onClick: e => {
										e.preventDefault();
										this.props.history.push('/');
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
								{ className: 'doc-lab-sgnup-cont', onSubmit: e => this.onSubmitData(e), autoComplete: 'off', autoCorrect: 'off', spellCheck: 'off' },
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
										{ name: 'member_type', className: 'form-control', value: this.state.member_type, required: true, id: 'dsp-select-profession', onChange: event => this.changeHandler(event, 'member_type') },
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
									_react2.default.createElement('input', { type: 'text', name: 'name', maxLength: 255, className: 'form-control', required: true, id: 'dsp-name', value: this.state.name, onChange: event => this.changeHandler(event, 'name') })
								),
								_react2.default.createElement(
									'div',
									{ className: 'form-group' },
									_react2.default.createElement(
										'label',
										null,
										'Mobile No:'
									),
									_react2.default.createElement('input', { type: 'number', name: 'mobile', max: 9999999999, id: 'dsp-mobile', className: 'form-control', required: true, min: 5000000000, value: this.state.mobile, onChange: event => this.changeHandler(event, 'mobile') })
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
										_react2.default.createElement('input', { type: 'text', name: 'city_name', maxLength: 255, className: 'form-control', required: true, id: 'dsp-city', value: this.state.city, onChange: event => this.changeHandler(event, 'city') }),
										this.state.cityDropdownVisible ? _react2.default.createElement(
											'div',
											{ className: 'dsp-city-dropdown' },
											_react2.default.createElement(
												'ul',
												{ className: 'dsp-city-list' },
												this.props.citiesName.map(city => {
													return _react2.default.createElement(
														'li',
														{ onClick: () => this.setCity(city.name, city.value), className: 'dsp-city-list-item', key: city.value },
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
									_react2.default.createElement('input', { type: 'email', name: 'email', pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$', value: this.state.email, className: 'form-control', required: true, maxLength: 254, id: 'dsp-email', onChange: event => this.changeHandler(event, 'email') })
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _HelmetTags = __webpack_require__(/*! ../HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HowitWorks extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _HelmetTags = __webpack_require__(/*! ../HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Media extends _react2.default.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {

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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _HelmetTags = __webpack_require__(/*! ../HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Privacy extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _HelmetTags = __webpack_require__(/*! ../HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Terms extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0,
            scrollPosition: 0
        };
    }

    setTab(val) {
        this.setState({ selected: val });
    }

    render() {
        if (this.props.forScroll) {
            if (document.getElementById('rescheduling_9')) {
                var elementTop = document.getElementById('rescheduling_9').getBoundingClientRect().top;
                var elementHeight = document.getElementById('rescheduling_9').clientHeight;
                var scrollPosition = elementTop - elementHeight;
                window.scrollTo(0, parseInt(scrollPosition));
            }
        }

        let mainClass;
        let headingClass;
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _staticPages = __webpack_require__(/*! ../../components/commons/staticPages */ "./dev/js/components/commons/staticPages/index.js");

var _staticPages2 = _interopRequireDefault(_staticPages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class StaticPages extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {

        return _react2.default.createElement(_staticPages2.default, this.props);
    }
}

StaticPages.contextTypes = {
    router: () => null
};
const mapStateToProps = state => {

    let {
        citiesName,
        utm_tags
    } = state.USER;
    return {
        citiesName,
        utm_tags
    };
};

const mapDispatchToProps = dispatch => {
    return {
        submitCareerProfile: (postCareerData, cb) => dispatch((0, _index.submitCareerProfile)(postCareerData, cb)),
        submitContactMessage: (postContactData, cb) => dispatch((0, _index.submitContactMessage)(postContactData, cb)),
        signupDoctor: (signupDoctorData, cb) => dispatch((0, _index.signupDoctor)(signupDoctorData, cb)),
        getCities: filterText => dispatch((0, _index.getCities)(filterText))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(StaticPages);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9zdGF0aWNQYWdlcy9TdGF0aWNQYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3N0YXRpY1BhZ2VzL2Fib3V0VXMuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9zdGF0aWNQYWdlcy9jYW5jZWxQb2xpY3kuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9zdGF0aWNQYWdlcy9jYXJlZXJzLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvc3RhdGljUGFnZXMvY29udGFjdFVzLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvc3RhdGljUGFnZXMvZGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3N0YXRpY1BhZ2VzL2RvY3RvcnNpZ251cC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3N0YXRpY1BhZ2VzL2hvd2l0V29ya3MuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9zdGF0aWNQYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3N0YXRpY1BhZ2VzL21lZGlhLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvc3RhdGljUGFnZXMvcHJpdmFjeS5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3N0YXRpY1BhZ2VzL3Rlcm1zLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL2NvbW1vbnMvU3RhdGljUGFnZXMuanMiXSwibmFtZXMiOlsiaXNWaXAiLCJjb2xvciIsImZvbnRTaXplIiwicGFkZGluZ0JvdHRvbSIsIkxvYWRlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsImNsYXNzVHlwZSIsImlGcmFtZVBvcHVwIiwicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiU3RhdGljUGFnZXNWaWV3Iiwic3RhdGUiLCJjb21wb25lbnREaWRNb3VudCIsIndpbmRvdyIsInNjcm9sbFRvIiwicGFyc2VkIiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsInBhdGhuYW1lIiwiZnJvbUFwcCIsImluY2x1ZGVzIiwiZm9yQm9va2luZ1Njcm9sbCIsIm1lbWJlcl90eXBlIiwicGFyc2VJbnQiLCJBYm91dFVzIiwibmF2aWdhdGVUbyIsIndoZXJlIiwiaGlzdG9yeSIsInB1c2giLCJtYWluQ2xhc3MiLCJoZWFkaW5nQ2xhc3MiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiQVNTRVRTX0JBU0VfVVJMIiwiQ2FuY2VsUG9saWN5IiwicGFkZGluZ1RvcCIsImxpc3RTdHlsZSIsInBhZGRpbmdMZWZ0IiwiY3Vyc29yIiwiZGlzcGxheSIsIkNhcmVlcnMiLCJjaGFuZ2VIYW5kbGVyIiwiZXZlbnQiLCJrZXkiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiZmlsZVBpY2tlciIsImUiLCJmaWxlcyIsInJlc3VtZSIsIm5hbWUiLCJtb2JpbGUiLCJlbWFpbCIsInByb2ZpbGVfdHlwZSIsIm9uU3VibWl0UHJvZmlsZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybV9kYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJzdWJtaXRDYXJlZXJQcm9maWxlIiwiZXJyb3IiLCJyZXMiLCJTbmFja0JhciIsInNob3ciLCJwb3MiLCJ0ZXh0IiwiQ29udGFjdFVzIiwibWVzc2FnZSIsIm9uU3VibWl0RGF0YSIsInN1Ym1pdENvbnRhY3RNZXNzYWdlIiwiYmluZCIsIkRpc2NsYWltZXIiLCJtYXJnaW5Cb3R0b20iLCJEb2N0b3JzaWdudXAiLCJjaXR5RHJvcGRvd25WaXNpYmxlIiwiZ2V0Q2l0aWVzIiwic2V0Q2l0eSIsImNpdHlOYW1lIiwiY2l0eUlkIiwiY2l0eSIsImNpdHlfbmFtZSIsInV0bV9wYXJhbXMiLCJ1dG1fdGFncyIsInNvdXJjZSIsInNob3dTdWNjZXNzQm94IiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsImRvY3VtZW50IiwibG9hZGVyIiwic2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsInRhZyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic3JjIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJhdHRhY2hFdmVudCIsInNpZ251cERvY3RvciIsIndpZHRoIiwiY2l0aWVzTmFtZSIsIm1hcCIsIkhvd2l0V29ya3MiLCJsaXN0U3R5bGVUeXBlIiwibWFyZ2luVG9wIiwiU3RhdGljUGFnZXMiLCJNZWRpYSIsInZlcnRpY2FsQWxpZ24iLCJib3JkZXIiLCJvdmVyZmxvdyIsIlByaXZhY3kiLCJ0ZXh0QWxpZ24iLCJUZXJtcyIsInNlbGVjdGVkIiwic2Nyb2xsUG9zaXRpb24iLCJzZXRUYWIiLCJ2YWwiLCJmb3JTY3JvbGwiLCJnZXRFbGVtZW50QnlJZCIsImVsZW1lbnRUb3AiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJlbGVtZW50SGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiY29udGV4dFR5cGVzIiwicm91dGVyIiwibWFwU3RhdGVUb1Byb3BzIiwiVVNFUiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwicG9zdENhcmVlckRhdGEiLCJjYiIsInBvc3RDb250YWN0RGF0YSIs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bUIsWSxHQUFlO0FBQ2xCQyxZQUFRLE1BQU07QUFESSxDO0FBZ0IxQixNQUFNQyxrQkFBbUJwSCxLQUFELElBQVc7O0FBRS9CLFFBQUk7QUFDQTBGLGtCQURBO0FBRUFqQjtBQUZBLFFBR0F6RSxNQUFNcUgsSUFIVjtBQUlBLFdBQU87QUFDSDNCLGtCQURHO0FBRUhqQjtBQUZHLEtBQVA7QUFJSCxDQVZEOztBQVlBLE1BQU02QyxxQkFBc0JDLFFBQUQsSUFBYztBQUNyQyxXQUFPO0FBQ0hyRSw2QkFBcUIsQ0FBQ3NFLGNBQUQsRUFBaUJDLEVBQWpCLEtBQXdCRixTQUFTLGdDQUFvQkMsY0FBcEIsRUFBb0NDLEVBQXBDLENBQVQsQ0FEMUM7QUFFSDdELDhCQUFzQixDQUFDOEQsZUFBRCxFQUFrQkQsRUFBbEIsS0FBeUJGLFNBQVMsaUNBQXFCRyxlQUFyQixFQUFzQ0QsRUFBdEMsQ0FBVCxDQUY1QztBQUdIakMsc0JBQWMsQ0FBQ21DLGdCQUFELEVBQW1CRixFQUFuQixLQUEwQkYsU0FBUyx5QkFBYUksZ0JBQWIsRUFBK0JGLEVBQS9CLENBQVQsQ0FIckM7QUFJSHZELG1CQUFZMEQsVUFBRCxJQUFnQkwsU0FBUyxzQkFBVUssVUFBVixDQUFUO0FBSnhCLEtBQVA7QUFNSCxDQVBEOztrQkFVZSx5QkFBUVIsZUFBUixFQUF5QkUsa0JBQXpCLEVBQTZDdkIsV0FBN0MsQyIsImZpbGUiOiI0NC5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5leHBvcnQgZGVmYXVsdCAoeyBpc1ZpcCB9KSA9PiB7XG5cdHJldHVybiAoPGRpdiBjbGFzc05hbWU9e2Bkc2NsbWVyLWZ0ciAke2lzVmlwPydtYXJnaW4tYm90dG9tLTU1JzonJ31gfT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJ0LTIwXCIgc3R5bGU9e3sgY29sb3I6ICcjOGE4YThhJywgZm9udFNpemU6IDEwIH19ID5UaGUgV2Vic2l0ZSBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBpbiBjYXNlIG9mIGEgbWVkaWNhbCBlbWVyZ2VuY3kgYW5kLyBvciBjcml0aWNhbCBjYXJlIGFuZCB0aGUgdXNlciBzaG91bGQgZGlyZWN0bHkgY29udGFjdCBoaXMvIGhlciBtZWRpY2FsIHNlcnZpY2UgcHJvdmlkZXIgZm9yIFBoeXNpY2FsIEV4YW1pbmF0aW9uLiBEb2NwcmltZSBpcyBzb2xlbHkgYSB0ZWNobm9sb2d5IHBhcnRuZXIuPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGZvb3Rlci1uZXctY29weXJnaHRcIiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiA1IH19ID5cbiAgICAgICAgICAgICAgICAgICAgPHA+RG9jcHJpbWUuY29tIENvcHlyaWdodCAmY29weTsgMjAyMC48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkFsbCByaWdodHMgcmVzZXJ2ZWQuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5ET0NQUklNRSBURUNITk9MT0dJRVMgUFJJVkFURSBMSU1JVEVEPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5DSU4gOiBVNzQ5OTlIUjIwMTZQVEMwNjQzMTI8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4pXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgTG9hZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzVHlwZSB8fCBcImxvYWRlckNpcmN1bGFyXCJ9ID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRwLWxvYWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pRnJhbWVQb3B1cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJ0LTEwXCI+UmVkaXJlY3RpbmcgeW91IHRvIFBoYXJtZWFzeSB3ZWJzaXRlLi4uPC9wPiA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXJcbiIsImltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInXG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBBYm91dFVzIGZyb20gJy4vYWJvdXRVcy5qcydcbmltcG9ydCBDb250YWN0VXMgZnJvbSAnLi9jb250YWN0VXMnXG5pbXBvcnQgUHJpdmFjeSBmcm9tICcuL3ByaXZhY3knXG5pbXBvcnQgSG93aXRXb3JrcyBmcm9tICcuL2hvd2l0V29ya3MnXG5pbXBvcnQgRGlzY2xhaW1lciBmcm9tICcuL2Rpc2NsYWltZXInXG5pbXBvcnQgVGVybXMgZnJvbSAnLi90ZXJtcydcbmltcG9ydCBDYXJlZXJzIGZyb20gJy4vY2FyZWVycydcbmltcG9ydCBNZWRpYSBmcm9tICcuL21lZGlhJ1xuaW1wb3J0IERvY3RvcnNpZ251cCBmcm9tICcuL2RvY3RvcnNpZ251cCdcbmltcG9ydCBDYW5jZWxQb2xpY3kgZnJvbSAnLi9jYW5jZWxQb2xpY3kuanMnXG5cbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9Ib21lL2Zvb3RlcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvTG9hZGVyJ1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IFN0YXRpY0Rpc2NsYWltZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9Ib21lL3N0YXRpY0Rpc2NsYWltZXIuanMnXG5cbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cblxuXG5cbmNsYXNzIFN0YXRpY1BhZ2VzVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2Uod2luZG93LmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG5cbiAgICAgICAgbGV0IHBhdGhuYW1lID0gJydcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubG9jYXRpb24gJiYgdGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZSkge1xuICAgICAgICAgICAgcGF0aG5hbWUgPSB0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLmZyb21BcHAgPyAnJyA6IDxQcm9maWxlSGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSAmJiBwYXRobmFtZS5pbmNsdWRlcygnZG9jdG9yc2lnbnVwJykgP1xuICAgICAgICAgICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLWhlYWRlciBkLW5vbmUgZC1sZy1ibG9ja1wiIC8+XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJkLWxnLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJ3YWxsZXQtaGVhZGVyIHN0aWNreS1oZWFkZXIgY2hhdC1oZWFkZXJcIiBzdHlsZT17eyBoZWlnaHQ6IDUwIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGhlYWRlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBoZWFkZXItcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvbGVmdC1hcnJvdy5zdmdcIn0gY2xhc3NOYW1lPVwiYmFjay1pY29uLW9yYW5nZVwiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkuZ28oLTEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOCBsb2dvLWNvbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltZy9kb2MtcHJpbWUtbG9nby5wbmdcIiBzdHlsZT17eyB3aWR0aDogNjAgfX0gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cblxuICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPXsnL2Fib3V0J30gcmVuZGVyPXsocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxBYm91dFVzIHsuLi50aGlzLnByb3BzfSB7Li4ucHJvcHN9IGZyb21BcHA9e3BhcnNlZC5mcm9tQXBwID8gcGFyc2VkLmZyb21BcHAgOiBmYWxzZX0gLz5cbiAgICAgICAgICAgICAgICB9fSAvPlxuXG4gICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9eycvY29udGFjdCd9IHJlbmRlcj17KHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q29udGFjdFVzIHsuLi50aGlzLnByb3BzfSB7Li4ucHJvcHN9IGZyb21BcHA9e3BhcnNlZC5mcm9tQXBwID8gcGFyc2VkLmZyb21BcHAgOiBmYWxzZX0gLz5cbiAgICAgICAgICAgICAgICB9fSAvPlxuXG4gICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9eycvcHJpdmFjeSd9IHJlbmRlcj17KHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8UHJpdmFjeSB7Li4udGhpcy5wcm9wc30gey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgIH19IC8+XG5cbiAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17Jy9ob3dpdHdvcmtzJ30gcmVuZGVyPXsocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxIb3dpdFdvcmtzIHsuLi50aGlzLnByb3BzfSB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgfX0gLz5cblxuICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPXsnL2Rpc2NsYWltZXInfSByZW5kZXI9eyhwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPERpc2NsYWltZXIgey4uLnRoaXMucHJvcHN9IHsuLi5wcm9wc30gZnJvbUFwcD17cGFyc2VkLmZyb21BcHAgPyBwYXJzZWQuZnJvbUFwcCA6IGZhbHNlfSAvPlxuICAgICAgICAgICAgICAgIH19IC8+XG5cbiAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17Jy90ZXJtcyd9IHJlbmRlcj17KHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8VGVybXMgey4uLnRoaXMucHJvcHN9IHsuLi5wcm9wc30gZnJvbUFwcD17cGFyc2VkLmZyb21BcHAgPyBwYXJzZWQuZnJvbUFwcCA6IGZhbHNlfSBmb3JTY3JvbGw9e3BhcnNlZC5mb3JCb29raW5nU2Nyb2xsID8gcGFyc2VkLmZvckJvb2tpbmdTY3JvbGwgOiBmYWxzZX0gLz5cbiAgICAgICAgICAgICAgICB9fSAvPlxuXG4gICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9eycvY2FyZWVycyd9IHJlbmRlcj17KHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q2FyZWVycyB7Li4udGhpcy5wcm9wc30gey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgIH19IC8+XG5cbiAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17Jy9tZWRpYSd9IHJlbmRlcj17KHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8TWVkaWEgey4uLnRoaXMucHJvcHN9IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICB9fSAvPlxuXG4gICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9eycvZG9jdG9yc2lnbnVwJ30gcmVuZGVyPXsocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxEb2N0b3JzaWdudXAgey4uLnRoaXMucHJvcHN9IHsuLi5wcm9wc30gbWVtYmVyX3R5cGU9e3BhcnNlZC5tZW1iZXJfdHlwZT9wYXJzZUludChwYXJzZWQubWVtYmVyX3R5cGUpOicnfS8+XG4gICAgICAgICAgICAgICAgfX0gLz5cblxuICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPXsnL2NhbmNlbHBvbGljeSd9IHJlbmRlcj17KHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q2FuY2VsUG9saWN5IHsuLi50aGlzLnByb3BzfSB7Li4ucHJvcHN9IGZyb21BcHA9e3BhcnNlZC5mcm9tQXBwID8gcGFyc2VkLmZyb21BcHAgOiBmYWxzZX0gLz5cbiAgICAgICAgICAgICAgICB9fSAvPlxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQuZnJvbUFwcCA/IDxTdGF0aWNEaXNjbGFpbWVyIC8+IDogPEZvb3RlciAvPlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRpY1BhZ2VzVmlld1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWxtZXRUYWdzIGZyb20gJy4uL0hlbG1ldFRhZ3MnXG5cbmNsYXNzIEFib3V0VXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvKHdoZXJlKSB7XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHdoZXJlKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IG1haW5DbGFzc1xuICAgICAgICBsZXQgaGVhZGluZ0NsYXNzXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmZyb21BcHApIHtcbiAgICAgICAgICAgIG1haW5DbGFzcyA9IFwiY29udGFpbmVyIGFib3V0LWNvbnRhaW5lciBhcHBVcmxQYWRkaW5nXCJcbiAgICAgICAgICAgIGhlYWRpbmdDbGFzcyA9IFwiY29sLTEyIHRleHQtY2VudGVyIGQtbm9uZSBkLW1kLWJsb2NrXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1haW5DbGFzcyA9ICdjb250YWluZXIgYWJvdXQtY29udGFpbmVyJ1xuICAgICAgICAgICAgaGVhZGluZ0NsYXNzID0gXCJjb2wtMTIgdGV4dC1jZW50ZXJcIlxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e21haW5DbGFzc30+XG4gICAgICAgICAgICAgICAgICAgIDxIZWxtZXRUYWdzIHRhZ3NEYXRhPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogKCdBYm91dCBVcyB8IERvY3ByaW1lJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogKCdEb2NwcmltZTogRG9jcHJpbWUgaXMgb25lIHN0b3AgaGVhbHRoIGNhcmUgc29sdXRpb24gZm9yIHBhdGllbnRzIGFuZCBkb2N0b3JzLiBQYXRpZW50cyBjYW4gYm9vayBkb2N0b3JzIG9ubGluZSBhbmQgZG9jdG9ycyBjYW4gbWFuYWdlIHBhdGllbnRzIG9ubGluZS4nKVxuICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2hlYWRpbmdDbGFzc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGFib3V0LWhlYWRpbmdcIj5BYm91dCBVczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZnJvbUFwcCA/IDxzcGFuPlRoaXMgTW9iaWxlIEFwcCBpcyBtYW5hZ2VkIGFuZCBvcGVyYXRlZCBieSBEb2NwcmltZSBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkLiA8L3NwYW4+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGFib3V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRG9jcHJpbWUsIGEgUG9saWN5QmF6YWFyIGdyb3VwIGNvbXBhbnksIGlzIGEgeW91bmcgb25saW5lIG1lZGljYWwgc2VydmljZXMgcHJvdmlkZXIuIFN0YXJ0ZWQgd2l0aCBhIHRlYW0gb2YgeW91bmcsIGV4cGVyaWVuY2VkIGFuZCB2aWJyYW50IHByb2Zlc3Npb25hbHMsIHRoZSBjb21wYW55IGhhcyBhIGh1bWFuaXRhcmlhbiBhcHByb2FjaCB0b3dhcmRzIHByb3ZpZGluZyBlYXN5IGFjY2VzcyB0byBoZWFsdGggY2FyZSBzZXJ2aWNlcy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC00IGZlYXR1cmUtY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlLWltZy1kaXYgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9hYm91dC0xLnBuZ1wifSBjbGFzc05hbWU9XCJmZWF0dXJlLWltZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlLWRpdiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgZmVhdHVyZS1oZWFkaW5nXCI+QWZmb3JkYWJsZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmVhdHVyZS1jb250ZW50XCI+V2Ugb2ZmZXIgb3VyIG11bHRpcGxlIHNlcnZpY2VzIGF0IGFuIGFmZm9yZGFibGUgcHJpY2UuIFdlIGFpbSBhdCBtYWtpbmcgaGVhbHRoIGNhcmUgc2VydmljZXMgZWFzaWx5IGFjY2Vzc2libGUgYW5kIGFmZm9yZGFibGUgdG8gZW5zdXJlIHRoYXQgcGF0aWVudHMgZG8gbm90IGhlc2l0YXRlIHdoaWxlIGNvbnN1bHRpbmcgZG9jdG9ycyBvbmxpbmUuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNCBmZWF0dXJlLWNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZS1pbWctZGl2IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvYWJvdXQtMi5wbmdcIn0gY2xhc3NOYW1lPVwiZmVhdHVyZS1pbWdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZS1kaXYgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGZlYXR1cmUtaGVhZGluZ1wiPlNhZmU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZlYXR1cmUtY29udGVudFwiPldlIHdvcmsgcm91bmQgdGhlIGNsb2NrIHRvIGVuc3VyZSBoaWdoZXN0IGxldmVscyBvZiBkYXRhIHNlY3VyaXR5LiBXaXRoIG91ciBwbGF0Zm9ybSwgdGhlIHJlY29yZHMgb2YgYm90aCwgdGhlIHBhdGllbnRzIGFuZCB0aGUgZG9jdG9ycyBhcmUgc2FmZS4gT3VyIHNlcGFyYXRlIGluZnJhc3RydWN0dXJlIGVuc3VyZXMgdGhhdCB0aGUgcHJvdmlkZXLigJlzIGRhdGEgYW5kIHRoZSBjb25zdW1lcuKAmXMgZGF0YSBhcmUgaXNvbGF0ZWQgZnJvbSBlYWNoIG90aGVyLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTQgZmVhdHVyZS1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmUtaW1nLWRpdiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Fib3V0LTMucG5nXCJ9IGNsYXNzTmFtZT1cImZlYXR1cmUtaW1nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmUtZGl2IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBmZWF0dXJlLWhlYWRpbmdcIj5TdHJhaWdodCBGb3J3YXJkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmZWF0dXJlLWNvbnRlbnRcIj5UaGUgRG9jcHJpbWUgcGxhdGZvcm0gaXMgZWFzeSB0byBuYXZpZ2F0ZSBhbmQgaGFzIGEgc3RyYWlnaHRmb3J3YXJkIGFwcHJvYWNoLiBUaGUgbWluaW1hbGlzdCBkZXNpZ24gb2YgdGhlIHdlYnNpdGUgZW5zdXJlcyB0aGF0IHRoZSBjb25zdW1lcnMgY2FuIGZpbmQgdGhlIGluZm9ybWF0aW9uIGZvciB0aGVpciByZWZlcmVuY2Ugc3dpZnRseSBhbmQgZWZmb3J0bGVzc2x5LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgYWJvdXQtY29udGVudC1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgYWJvdXQtY29udGVudFwiPkRvY3ByaW1lIGlzIGRlZGljYXRlZCB0b3dhcmRzIHRoZSB3ZWxmYXJlIG9mIHRoZSBwZW9wbGUgYW5kIHRvIG1ha2UgYSBjbG9zZWx5IGtuaXQgY29tbXVuaXR5IG9mIGRvY3RvcnMgYW5kIHBhdGllbnRzLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgYWJvdXQtY29udGVudFwiPlRvZGF5LCB0aGUgYXZlcmFnZSBsaWZlc3R5bGUgb2YgYSBodW1hbiBiZWluZyBpcyBmYXN0LXBhY2VkLiBJbiB0aGlzIGZhc3QtcGFjZWQgbGlmZXN0eWxlLCBwZW9wbGUgaWdub3JlIHRoZWlyIGhlYWx0aCB0aGF0IGxlYWRzIHRvIHNldmVyYWwgaGVhbHRoIGNvbXBsaWNhdGlvbnMuIEF0IERvY3ByaW1lLCB3ZSBhaW0gdG8gYmUgdGhlIGd1aWRlIGFuZCB0aGUgaGVscGluZyBoYW5kIHRvIGVuc3VyZSBiZXR0ZXIgaGVhbHRoIGZvciBldmVyeW9uZSBhbmQgaGVscCB0aGVtIGF0IGVhY2ggc3RlcCB0b3dhcmRzIGhlYWx0aCBpbXByb3ZlbWVudC48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGFib3V0LWNvbnRlbnRcIj5Eb2NwcmltZSBhaW1zIGF0IGNvbm5lY3RpbmcgcGVvcGxlIGJ5IHByb3ZpZGluZyB0aGVtIHdpdGggZXZlcnkgcGllY2Ugb2YgaW5mb3JtYXRpb24gdGhleSBuZWVkIHRvIHNlY3VyZSB0aGVtc2VsdmVzIGFuZCB0aGVpciBmYW1pbHnigJlzIHdlbGwtYmVpbmcuIEFzc2Vzc2luZyBoZWFsdGggaXNzdWVzLCBjb25zdWx0aW5nIGV4cGVyaWVuY2VkIG1lZGljYWwgcHJhY3RpdGlvbmVycyBhbmQgc3RvcmluZyBoZWFsdGggcmVjb3JkcyBhcmUgZmV3IHNlcnZpY2VzIG9mZmVyZWQgYnkgdGhlIGNvbXBhbnkuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBhYm91dC1jb250ZW50XCI+Tm90IG9ubHkgYXJlIHdlIGRlZGljYXRlZCB0byBwcm92aWRpbmcgYSBiZXR0ZXIgaGVhbHRoIHRvIHBlb3BsZSwgd2UgYWxzbyBlbnN1cmUgdGhhdCB0aGV5IGdldCBlYXN5IGFjY2VzcyB0byBjb3VudHJ54oCZcyBiZXN0IGRvY3RvcnMgaW4gdGhlIG1vc3QgY29udmVuaWVudCBhbmQgYWZmb3JkYWJsZSB3YXlzLiBPbiBvdXIgd2F5IHRvIGNyZWF0aW5nIGFuIGV4cGVyaWVuY2UgdHJ1bHkgcHJpbWUgZm9yIHVzZXJzIGFuZCBoZWFsdGhjYXJlIGV4cGVydHMsIHdlIG92ZXJjb21lIG11bHRpdHVkaW5vdXMgY2hhbGxlbmdlcyBhbG1vc3QgZXZlcnkgZGF5LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTQgYWJvdXQtc3RlcHMtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC1zdGVwc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtaWNvbi1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvc3RlcC1jYWxlbmRhci5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1oZWFkaW5nLWRpdiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIHN0ZXAtaGVhZGluZ1wiPkJvb2sgQXBwb2ludG1lbnRzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWNvbnRlbnQtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1jaXJjbGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN0ZXAtZGF0YSBmdy01MDBcIj4xMCwwMDArIFZlcmlmaWVkIERvY3RvcnM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWNpcmNsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RlcC1kYXRhIGZ3LTUwMFwiPkJvb2sgQXBwb2ludG1lbnRzIDI0Kjc8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWNpcmNsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RlcC1kYXRhIGZ3LTUwMFwiPkZpbmQgRG9jdG9ycyBFYXNpbHk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWNpcmNsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RlcC1kYXRhIGZ3LTUwMFwiPkVmZmljaWVudCBQYXRpZW50IEFkbWluaXN0cmF0aW9uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1jaXJjbGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN0ZXAtZGF0YSBmdy01MDBcIj5Td2lmdCBBcHBvaW50bWVudCBDb25maXJtYXRpb248L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC00IGFib3V0LXN0ZXBzLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtc3RlcHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWljb24tZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3N0ZXAtY2hhdC5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1oZWFkaW5nLWRpdiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIHN0ZXAtaGVhZGluZ1wiPk9ubGluZSBDaGF0IENvbnN1bHRhdGlvbjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1jb250ZW50LWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtY2lyY2xlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdGVwLWRhdGEgZnctNTAwXCI+R2V0IERvY3ByaW1lIGFwcCBmb3Igc2VhbWxlc3Mgb25saW5lIGNoYXQgY29uc3VsdGF0aW9uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1jaXJjbGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN0ZXAtZGF0YSBmdy01MDBcIj5Mb3cgUmVzcG9uc2UgVGltZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtY2lyY2xlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdGVwLWRhdGEgZnctNTAwXCI+VmVyaWZpZWQgRG9jdG9ycyBBdmFpbGFibGUgYXQgeW91ciBEaXNwb3NhbDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtY2lyY2xlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdGVwLWRhdGEgZnctNTAwXCI+MTAwJSBDb25maWRlbnRpYWwgYW5kIFByaXZhdGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWNpcmNsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RlcC1kYXRhIGZ3LTUwMFwiPk9uLURlbWFuZCBDb25zdWx0YXRpb24gQXZhaWxhYmxlIEFueXRpbWUgYW5kIEFueXdoZXJlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNCBhYm91dC1zdGVwcy1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LXN0ZXBzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1pY29uLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9zdGVwLXBhcnRuZXIuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtaGVhZGluZy1kaXYgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBzdGVwLWhlYWRpbmdcIj5CZWNvbWUgYSBQYXJ0bmVyIHdpdGggRG9jcHJpbWU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtY29udGVudC1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWNpcmNsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RlcC1kYXRhIGZ3LTUwMFwiPlJlYWNoIE5ldyBQYXRpZW50czwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtY2lyY2xlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdGVwLWRhdGEgZnctNTAwXCI+TWF4aW1pemUgeW91ciBFYXJuaW5nczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtY2lyY2xlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdGVwLWRhdGEgZnctNTAwXCI+S2VlcCBUcmFjayBvZiBQYXRpZW50cyBhbmQgdGhlaXIgRmVlZGJhY2s8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWNpcmNsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RlcC1kYXRhIGZ3LTUwMFwiPkVkaXQgeW91ciBQcm9maWxlIEVmZm9ydGxlc3NseTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtY2lyY2xlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdGVwLWRhdGEgZnctNTAwXCI+Q2hhdCBXaXRoIFBhdGllbnRzIHdpdGhvdXQgR2l2aW5nIHlvdXIgUGVyc29uYWwgQ29udGFjdCBEZXRhaWxzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBhYm91dC1jb250ZW50LWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBhYm91dC1jb250ZW50XCI+RG9jcHJpbWUgZW5zdXJlcyB0aGF0IHlvdSBnZXQgdGhlIHJpZ2h0IHNvbHV0aW9uIGFuZCB0cmVhdG1lbnQsIGFuZCB0aGF0IGlzIHdoeSB3ZSBoYXZlIGhpcmVkIGNvdW50cnnigJlzIGJlc3QgYW5kIG1vc3QgZXhwZXJpZW5jZWQgZG9jdG9ycyB3aG8gYXJlIGtub3dsZWRnZWFibGUsIHNraWxsZWQgYW5kIHRoZSBiZXN0IGluIHRoZWlyIGFyZWFzIG9mIGV4cGVydGlzZS4gVGhleSBhcmUgYXZhaWxhYmxlIHRvIHNvbHZlIHlvdXIgaGVhbHRoIHJlbGF0ZWQgcXVlcmllcyBhbmQgcHJvdmlkZSBvbi1kZW1hbmQgaGVhbHRoY2FyZSBzb2x1dGlvbnMsIDI0WDdYMzY1LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgYWJvdXQtY29udGVudFwiPkF0IERvY3ByaW1lLCB3ZSB1bmRlcnN0YW5kIHRoZSB2YWx1ZSBvZiB5b3VyIHRpbWUgYW5kIHRoYXTigJlzIHdoeSB3ZSB3YW50IHRvIG9mZmVyIHlvdSB0aGUgYmVzdCBoZWFsdGhjYXJlIHJpZ2h0IGZyb20gdGhlIGNvbWZvcnQgb2YgeW91ciBob21lLiBXZSBwcm92aWRlIGRvY3RvcnMsIHBoeXNpb3RoZXJhcGlzdHMgYW5kIG51cnNlcyBmb3IgaG9tZSB2aXNpdHMgdG8gZW5zdXJlIHRoYXQgeW91IGRvbuKAmXQgbmVlZCB0byBzdGVwIG91dCB3aGVuIHRoZSBuZWVkIGFyaXNlcy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGFib3V0LWNvbnRlbnRcIj5XZSBhaW0gdG8gdGFwIHRoZSBsYXRlc3QgdGVjaG5vbG9neSB0byBmaW5kIHNvbHV0aW9ucyB0byB2YXJpb3VzIGlzc3VlcyBpbiBvcmRlciB0byBkaXNydXB0IHRoZSBnbG9iYWwgaGVhbHRoY2FyZSBkZWxpdmVyeSBzeXN0ZW0uIE91ciBpbm5vdmF0aXZlIGhlYWx0aGNhcmUgc29sdXRpb25zIGFyZSBhIHN0ZXAgdG93YXJkcyBicmlkZ2luZyB0aGUgZ2FwIGJldHdlZW4gaGVhbHRoY2FyZSBleHBlcnRzIGFuZCB0aGUgcGF0aWVudHMuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyB0aGlzLnByb3BzLmZyb21BcHAgPyB0aGlzLm5hdmlnYXRlVG8oXCIvY29udGFjdD9mcm9tQXBwPXRydWVcIikgOiB0aGlzLm5hdmlnYXRlVG8oXCIvY29udGFjdFwiKSB9fSBjbGFzc05hbWU9XCJjb250YWN0LWJ0blwiPkNvbnRhY3QgVXM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0X21hbmFnbWVudF9jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtoZWFkaW5nQ2xhc3N9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBhYm91dC1oZWFkaW5nXCI+QWJvdXQgbWFuYWdlbWVudDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dF9tbmdfY2FyZF9jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgY29sLWxnLTYgbXJuZy1ib3R0b20tMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRfbW5nX2NhcmRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnQtaW1nLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9hYnQtaW1nL3lzLnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFidC11c3Itbm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5ZYXNoaXNoIERhaGl5YTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Dby1mb3VuZGVyICYgQ0VPLCA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Qb2xpY3lCYXphYXIgR3JvdXAgb2YgQ29tcGFuaWVzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFidC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPllhc2hpc2ggRGFoaXlhIGlzIHRoZSBDaGllZiBFeGVjdXRpdmUgT2ZmaWNlciBhbmQgQ28tRm91bmRlciBvZiBQb2xpY3lCYXphYXIgR3JvdXAgb2YgQ29tcGFuaWVzLiBIZSBoYXMgYnVpbHQgUG9saWN5YmF6YWFyLmNvbSBpbnRvIGEgMywwMDAtY3JvcmUgcGx1cyBpbnN1cmFuY2UgbWFya2V0cGxhY2Ugd2l0aGluIGEgc2hvcnQgc3BhbiBvZiAxMCB5ZWFycy4gVW5kZXIgaGlzIGxlYWRlcnNoaXAsIHRoZSBncm91cCBjb21wYW55IHN0YXJ0ZWQgUGFpc2FCYXphYXIuY29tLCBhbiBvbmxpbmUgZmluYW5jaWFsIG1hcmtldHBsYWNlIGZvciBpbnZlc3RtZW50IGFuZCBsZW5kaW5nIHByb2R1Y3RzIGluIDIwMTQuICBXaXRoIHRoZSBiYWNraW5nIG9mIGEgaG9zdCBvZiBpbnZlc3RvcnMsIFlhc2hpc2ggaGFzIG5vdyBzZXQgaGlzIHNpZ2h0cyBvbiB0cmFuc2Zvcm1pbmcgdGhlIGhlYWx0aGNhcmUgaW5kdXN0cnkgb3ZlcmFsbCB3aXRoIHRoZSBsYXVuY2ggb2YgRG9jcHJpbWUuY29tLiBCZWZvcmUgc3RhcnRpbmcgaGlzIGVudHJlcHJlbmV1cmlhbCBqb3VybmV5IHdpdGggUG9saWN5QmF6YWFyLmNvbSwgaGUgd2FzIHRoZSBNYW5hZ2luZyBEaXJlY3RvciBvZiBlYm9va2Vycy5jb20sIGEgbGVhZGluZyBwYW4tRXVyb3BlYW4gb25saW5lIHRyYXZlbCBkaXN0cmlidXRvciwgd2hpY2ggd2FzIGFsc28gYW4gRlRTRSAyNTAgY29tcGFueSBsaXN0ZWQgb24gTmFzZGFxLiBZYXNoaXNoIHdhcyBhbHNvIGEgbWFuYWdlbWVudCBjb25zdWx0YW50IHdpdGggQmFpbiAmIENvLiBpbiB0aGVpciBMb25kb24gb2ZmaWNlLiBZYXNoaXNoIGhvbGRzIGEgQmFjaGVsb3LigJlzIERlZ3JlZSBpbiBFbmdpbmVlcmluZyBmcm9tIElJVCBEZWxoaSwgYSBQb3N0IEdyYWR1YXRlIERpcGxvbWEgaW4gTWFuYWdlbWVudCBmcm9tIElJTSBBaG1lZGFiYWQsIGFuZCBhbiBNQkEgZnJvbSBJTlNFQUQuIFlhc2hpc2ggbGlrZXMgdG8gc3BlbmQgaGlzIHNwYXJlIHRpbWUgb3V0ZG9vcnMsIGlzIHRoZSBjdXJyZW50IG1hc3RlcnMgbmF0aW9uYWwgY2hhbXBpb24gaW4gc3dpbW1pbmcgYW5kIGlzIHRoZSBmaWZ0aCBmYXN0ZXN0IElyb25tYW4gZnJvbSBJbmRpYSBhY3Jvc3MgYWxsIGFnZXMuIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgY29sLWxnLTYgbXJuZy1ib3R0b20tMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRfbW5nX2NhcmRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnQtaW1nLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9hYnQtaW1nL2Fsay5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnQtdXNyLW5tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+QWxvayBCYW5zYWw8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q28tZm91bmRlciAmIENGTywgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UG9saWN5QmF6YWFyIEdyb3VwIG9mIENvbXBhbmllczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BbG9rIEJhbnNhbCBpcyB0aGUgQ28tRm91bmRlciAmIENGTyBvZiBQb2xpY3lCYXphYXIgR3JvdXAgb2YgQ29tcGFuaWVzIC4gSGUgaGVhZHMgdmFyaW91cyBmdW5jdGlvbnMgaW5jbHVkaW5nIGNvcnBvcmF0ZSBmaW5hbmNlIGFuZCBjb250cm9sbGVyc2hpcCwgdGF4LCB0cmVhc3VyeSwgc3RyYXRlZ2ljIHBsYW5uaW5nLCBhbmQgYW5hbHl0aWNzLiBIZSBmaXJtbHkgYmVsaWV2ZXMgdGhhdCB0aGUgcHJpbWFyeSByZXNwb25zaWJpbGl0eSBvZiBhIENGTyBpcyB0byBhY2NvbXBsaXNoIGJ1c2luZXNzIGdvYWxzIHJhdGhlciB0aGFuIGp1c3QgY29uY2VudHJhdGluZyBvbiBmdW5jdGlvbmFsIGdvYWxzLiBBY2NvcmRpbmcgdG8gaGltLCB0aGUgc3VjY2VzcyBvZiBhbnkgYnVzaW5lc3MgbGllcyBpbiB3b3JraW5nIHdpdGggYSB0ZWFtIHdpdGggZGlmZmVyZW50IG1pbmQgc2V0cywgYWxsb3dpbmcgdGhlbSB0aGUgZmxleGliaWxpdHkgYW5kIGZyZWVkb20gdG8gZXhwZXJpbWVudCwgaW5ub3ZhdGUgYW5kIGNvbnRyaWJ1dGUuIEFsb2vigJlzIGNvcmUgc3RyZW5ndGggbGllcyBpbiBzdHJhdGVnaWMgdGhpbmtpbmcsIHByb2Nlc3MgY29udHJvbCwgYW5kIGV4ZWN1dGlvbi4gUHJpb3IgdG8gam9pbmluZyBQb2xpY3lCYXphYXIuY29tLCBBbG9rIGhhcyB3b3JrZWQgaW4gdmFyaW91cyBjcm9zcy1mdW5jdGlvbmFsIGxlYWRlcnNoaXAgcm9sZXMgd2l0aCBNYWhpbmRyYSAmIE1haGluZHJhLCBpR2F0ZSBHbG9iYWwgU29sdXRpb25zIGFuZCBHRS4gSGUgd2FzIHJlY29nbml6ZWQgYXMgb25lIG9mIHRoZSB0b3AgMTAwIENGT3MgaW4gdGhlIGNvdW50cnkgYnkgdGhlIENGTyBJbmRpYSBNYWdhemluZSBpbiAyMDE2LiBBbG9rIGhhcyBhIHNwZWNpYWwgaW50ZXJlc3QgaW4gc2NpZW5jZSBhbmQgdGVjaG5vbG9neSwgZWNvbm9taWMgZW1wb3dlcm1lbnQsIGVkdWNhdGlvbiBhbmQgY2l2aWwgcmlnaHRzLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgY29sLWxnLTYgbXJuZy1ib3R0b20tMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRfbW5nX2NhcmRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnQtaW1nLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9hYnQtaW1nL2FzaC5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnQtdXNyLW5tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+QXNoaXNoIEd1cHRhIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DRU8swqBEb2NwcmltZS5jb23CoGFuZCA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DaGllZiBUZWNoIEV2YW5nZWxpc3QsIFBvbGljeWJhemFhci5jb20gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFidC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXNoaXNoIEd1cHRhIGlzIGN1cnJlbnRseSB0aGUgQ0VPIG9mIERvY3ByaW1lLmNvbSBhbmQgaXMgcmVzcG9uc2libGUgZm9yIHJ1bm5pbmcgYWxsIGZhY2V0cyBvZiB0aGUgYnVzaW5lc3MuIEhlIGlzIHBhc3Npb25hdGUgYWJvdXQgdGhlIGhlYWx0aCBpbmR1c3RyeSBhbmQgaW4gaGlzIHByZXNlbnQgcG9zaXRpb24sIGNvbW1pdHRlZCB0byBidWlsZCBhbiBpbnRlZ3JhdGVkIGVjb3N5c3RlbSB0byBicmlkZ2UgdGhlIGdhcCBiZXR3ZWVuIGRvY3RvcnMgYW5kIHBhdGllbnRzLiAgUHJpb3IgdG8gdGhpcywgaGUgc2VydmVkIGFzIHRoZSBDaGllZiBUZWNobm9sb2d5IE9mZmljZXIgKENUTykgb2YgUG9saWN5YmF6YWFyLmNvbSB3aGljaCBoZSBqb2luZWQgaW4gMjAxNS4gV2l0aCBhbiBvdmVyYWxsIGV4cGVyaWVuY2Ugb2YgMTYgeWVhcnMsIEFzaGlzaCBoYXMgYmVlbiBhdCBhIHJlYWxtIG9mIG1hbnkgaW5ub3ZhdGlvbnMuIEJlZm9yZSBqb2luaW5nIHRoZSByZXZvbHV0aW9uYXJ5IG9ubGluZSBpbnN1cmFuY2UgY29tcGFueSwgQXNoaXNoIHdhcyB0aGUgVmljZS1QcmVzaWRlbnQgYW5kIENUTyBhdCBIZWFsdGhLYXJ0LCBhIHByZW1pZXIgZS1oZWFsdGggc3RvcmUuIEhlIGFsc28gaGFkIGhpcyBvd24gc3RhcnQtdXAgY2FsbGVkIENvdXBvblZvb2Rvby5jb20sIHdoaWNoIGFpbWVkIGF0IHNpbXBsaWZ5aW5nIGEgc2hvcHBlcuKAmXMgYnV5aW5nIGRlY2lzaW9uIGJhc2VkIHVwb24gcHJpY2luZy4gIEhpcyBpbml0aWFsIGZldyBqb2JzIGluY2x1ZGVkIGJlaW5nIGEgbWFuYWdlbWVudCB0cmFpbmVlIHdpdGggdGhlIGF1dG9tb3RpdmUgZGl2aXNpb24gb2YgSUNJIFBhaW50cyBhbmQgbGVhcm5pbmcgYW5kIGdyb3dpbmcgYnkgYmVpbmcgaW52b2x2ZWQgaW4gb3RoZXIgY3Jvc3MtZnVuY3Rpb25hbCByb2xlcy4gQXBhcnQgZnJvbSB3b3JraW5nLCBoZSBlbmpveXMgdHJhdmVsaW5nIGFuZCBleHBsb3Jpbmcgb3RoZXIgY291bnRyaWVzIG9yIGNpdGllcy4gQSBncmFkdWF0ZSBpbiBDaGVtaWNhbCBFbmdpbmVlcmluZyBmcm9tIElJVCBEZWxoaSwgQXNoaXNoIGxvdmVzIGJlaW5nIGJlaGluZCB0aGUgd2hlZWxzIGFuZCBnb2luZyBvbiBsb25nIGRyaXZlcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBjb2wtbGctNiBtcm5nLWJvdHRvbS0yMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dF9tbmdfY2FyZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFidC1pbWctdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2FidC1pbWcvYWJoYXkucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJ0LXVzci1ubVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkFiaGF5IFNpbmdhdmk8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwPkNvLWZvdW5kZXIgJiA8L3A+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2hpZWYgT3BlcmF0aW5nIE9mZmljZXI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Eb2NwcmltZS5jb208L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJ0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QWJoYXkgU2luZ2F2aSBpcyBDaGllZiBPcGVyYXRpbmcgT2ZmaWNlciBhdCBEb2NwcmltZS5jb20uICBIZSBpcyByZXNwb25zaWJsZSBmb3IgZXhlY3V0aW5nIHRoZSBjb21wYW554oCZcyBidXNpbmVzcyBzdHJhdGVneSwgZHJpdmluZyB0aGUgb3ZlcmFsbCBncm93dGggYW5kIHBlcmZvcm1hbmNlIG9mIGtleSBidXNpbmVzcyB1bml0cy4gQWJoYXkgYnJpbmdzIGluIG1vcmUgdGhhbiAxMiB5ZWFycyBvZiBsZWFkZXJzaGlwIGV4cGVyaWVuY2UgaW4gdGhlIGhlYWx0aGNhcmUgc2VjdG9yLlxuPGJyLz5cbjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJpb3IgdG8gam9pbmluZyBEb2NwcmltZSwgQWJoYXkgd2FzIGxlYWRpbmcga2V5IHN0cmF0ZWdpYyBpbml0aWF0aXZlcyBjb3ZlcmluZyBjbGluaWNhbCBvdXRjb21lcywgc2VydmljZSBleGNlbGxlbmNlLCBvcGVyYXRpb24gb3B0aW1pemF0aW9uLCBidXNpbmVzcyBpbm5vdmF0aW9uIGFuZCBhIHZhcmlldHkgb2YgbGVhZGVyc2hpcCByb2xlcyBhdCBNZWRhbnRhIGZvciA3IHllYXJzLiBIZSB3YXMgYWxzbyB5b3VuZ2VzdCBDRU8gaW4gdGhlIGhlYWx0aGNhcmUgaW5kdXN0cnkgd2hpbGUgaGUgc2VydmVkIGF0IE5hcmF5YW5hIEhlYWx0aCBncm91cCBhcyBDRU8gLSBQcmV2ZW50aXZlIEhlYWx0aCB3aGVyZSBoZSB3YXMgaW5zdHJ1bWVudGFsIGluIGhhbmRsaW5nIHRoZSBwcmV2ZW50aXZlIGhlYWx0aCBhbmQgd2VsbG5lc3MgbWFuYWdlbWVudCBhY3Jvc3MgZ3JvdXAuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQWJvdXRVc1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWxtZXRUYWdzIGZyb20gJy4uL0hlbG1ldFRhZ3MnXG5cbmNsYXNzIENhbmNlbFBvbGljeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IG1haW5DbGFzc1xuICAgICAgICBsZXQgaGVhZGluZ0NsYXNzXG4gICAgICAgIGlmKHRoaXMucHJvcHMuZnJvbUFwcCl7XG4gICAgICAgICAgICBtYWluQ2xhc3MgPSBcImNvbnRhaW5lciBhYm91dC1jb250YWluZXIgYXBwVXJsUGFkZGluZ1wiXG4gICAgICAgICAgICBoZWFkaW5nQ2xhc3MgPSBcImNvbC0xMiB0ZXh0LWNlbnRlciBkLW5vbmUgZC1tZC1ibG9ja1wiXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbWFpbkNsYXNzID0gJ2NvbnRhaW5lciBhYm91dC1jb250YWluZXInXG4gICAgICAgICAgICBoZWFkaW5nQ2xhc3MgPSAnY29sLTEyIHRleHQtY2VudGVyJ1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWFpbkNsYXNzfT5cbiAgICAgICAgICAgICAgICA8SGVsbWV0VGFncyB0YWdzRGF0YT17e1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogKCdDYW5jZWwgUG9saWN5IHwgZG9jcHJpbWUnKSxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICgnZG9jcHJpbWU6IGRvY3ByaW1lIGlzIG9uZSBzdG9wIGhlYWx0aCBjYXJlIHNvbHV0aW9uIGZvciBwYXRpZW50cyBhbmQgZG9jdG9ycy4gUGF0aWVudHMgY2FuIGJvb2sgZG9jdG9ycyBvbmxpbmUgYW5kIGRvY3RvcnMgY2FuIG1hbmFnZSBwYXRpZW50cyBvbmxpbmUuJylcbiAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtoZWFkaW5nQ2xhc3N9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGFib3V0LWhlYWRpbmdcIj5DYW5jZWwgUG9saWN5PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLXBvbGljeS10ZXh0XCIgc3R5bGU9e3twYWRkaW5nVG9wOiAwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bGlzdFN0eWxlOiAnZGlzYycsIHBhZGRpbmdMZWZ0OiAxMH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZnctNTAwIG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9yIGFueSBvbmxpbmUgcGFpZCBhcHBvaW50bWVudHMsIHlvdSBjYW4gY2FuY2VsIHlvdXIgc2NoZWR1bGVkIG9yIHJlLWJvb2tlZCBhcHBvaW50bWVudCBhbmQgaW5pdGlhdGUgaW1tZWRpYXRlIHJlZnVuZCBhdCBhbnkgdGltZS4gQW4gaW1tZWRpYXRlIHJlZnVuZCBzaGFsbCBiZSBzdWJqZWN0IHRvIHRlcm1zIGFuZCBjb25kaXRpb25zIGFzIGRlc2NyaWJlZCB1bmRlciB0aGlzIHNlY3Rpb24gbWVudGlvbmVkIGJlbG93LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZnctNTAwIG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW4gdGhlIGV2ZW50LCB0aGUgc2VydmljZXMgYXJlIG5vdCBhdmFpbGVkIGF0IHRoZSBhcHBvaW50ZWQgZGF0ZSBhbmQgdGltZSBhbmQgb3VyIHN5c3RlbXMgZG8gbm90IHZhbGlkYXRlIHRoZSBVUk4gZ2VuZXJhdGVkIG9uIHlvdXIgcmVnaXN0ZXJlZCBtb2JpbGUgbnVtYmVyLCB3ZSB3aWxsIGF1dG9tYXRpY2FsbHkgY2FuY2VsIHlvdXIgYXBwb2ludG1lbnQgYXQgMTI6MDAgbWlkbmlnaHQgb2YgbmV4dCBkYXRlIG9mIHlvdXIgYXBwb2ludG1lbnQgZGF0ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZ3LTUwMCBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9jY2FzaW9uYWxseSwgYXBwb2ludG1lbnRzIG1heSBiZSBjYW5jZWxsZWQgb3IgcG9zdHBvbmVkIGJ5IHRoZSBUaGlyZCBQYXJ0eSBTZXJ2aWNlIFByb3ZpZGVyLiBTaG91bGQgdGhpcyBvY2N1ciwgd2Ugd2lsbCBhdHRlbXB0IHRvIGNvbnRhY3Qgb3IgaW5mb3JtIHlvdSBhbmQgeW91IG1heSByZS1zY2hlZHVsZSB5b3VyIGFwcG9pbnRtZW50IGFzIHBlciB5b3VyIGNvbnZlbmllbmNlIG9yIHZpc2l0IHd3dy5kb2NwcmltZS5jb20gZm9yIGZyZXNoL3JlLWJvb2tpbmcgb24gdGhlIFdlYnNpdGUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmdy01MDAgbXJiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxsYXRpb24gdGhyb3VnaCBtYWlsIG9yIGNhbGwgY2VudGVyIGlzIGFsbG93ZWQgZm9yIGFsbCB0aGUgYm9va2luZ3MgdW50aWwgdGhlIHRpbWUgb2YgYXBwb2ludG1lbnQgb3IgMTI6MDAgbWlkbmlnaHQgb2YgbmV4dCBkYXRlIG9mIHlvdXIgYXBwb2ludG1lbnQgZGF0ZS4gSW4gc3VjaCBjYXNlcywgd2Ugd2lsbCBpbml0aWF0ZSBhbiBpbW1lZGlhdGUgcmVmdW5kIG9mIHlvdXIgbW9uZXkgYXMgcGVyIHRoZSBwcm9jZXNzIGRlZmluZWQgdW5kZXIgUmVmdW5kLCBSZXNjaGVkdWxpbmcgYW5kIENhbmNlbGxhdGlvbiBzZWN0aW9uIHVuZGVyIHRoZSBFbmQgVXNlciBBZ3JlZW1lbnQuIDx1IHN0eWxlPXt7Y29sb3I6IGB2YXIoLS10ZXh0LS1wcmltYXJ5LS1jb2xvcilgLGN1cnNvcjoncG9pbnRlcicsZGlzcGxheTonaW5saW5lLWJsb2NrJ319IG9uQ2xpY2s9eygpID0+dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2godGhpcy5wcm9wcy5mcm9tQXBwPycvdGVybXM/Zm9yQm9va2luZ1Njcm9sbD10cnVlJmZyb21BcHA9dHJ1ZSc6Jy90ZXJtcz9mb3JCb29raW5nU2Nyb2xsPXRydWUnKX0+Y2xpY2sgaGVyZTwvdT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IENhbmNlbFBvbGljeVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuaW1wb3J0IEhlbG1ldFRhZ3MgZnJvbSAnLi4vSGVsbWV0VGFncydcblxuY2xhc3MgQ2FyZWVycyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHJlc3VtZTogbnVsbCxcblx0XHRcdG5hbWU6IFwiXCIsXG5cdFx0XHRtb2JpbGU6IFwiXCIsXG5cdFx0XHRlbWFpbDogXCJcIixcblx0XHRcdHByb2ZpbGVfdHlwZTogXCJcIlxuXHRcdH1cblx0fVxuXG5cdGNoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIGtleSkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0W2tleV06IGV2ZW50LnRhcmdldC52YWx1ZVxuXHRcdH0pO1xuXHR9XG5cblx0ZmlsZVBpY2tlciA9IChlKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHQncmVzdW1lJzogZS50YXJnZXQuZmlsZXNbMF1cblx0XHR9KTtcblx0fVxuXG5cdG9uU3VibWl0UHJvZmlsZShlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0bGV0IGZvcm1fZGF0YSA9IG5ldyBGb3JtRGF0YSgpXG5cdFx0Zm9ybV9kYXRhLmFwcGVuZChcInJlc3VtZVwiLCB0aGlzLnN0YXRlLnJlc3VtZSwgXCJyZXN1bWUucGRmXCIpXG5cdFx0Zm9ybV9kYXRhLmFwcGVuZCgnbmFtZScsIHRoaXMuc3RhdGUubmFtZSlcblx0XHRmb3JtX2RhdGEuYXBwZW5kKCdtb2JpbGUnLCB0aGlzLnN0YXRlLm1vYmlsZSlcblx0XHRmb3JtX2RhdGEuYXBwZW5kKCdlbWFpbCcsIHRoaXMuc3RhdGUuZW1haWwpXG5cdFx0Zm9ybV9kYXRhLmFwcGVuZCgncHJvZmlsZV90eXBlJywgdGhpcy5zdGF0ZS5wcm9maWxlX3R5cGUpXG5cdFx0dGhpcy5wcm9wcy5zdWJtaXRDYXJlZXJQcm9maWxlKGZvcm1fZGF0YSwgKGVycm9yLCByZXMpID0+IHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRyZXN1bWU6IG51bGwsXG5cdFx0XHRcdG5hbWU6IFwiXCIsXG5cdFx0XHRcdG1vYmlsZTogXCJcIixcblx0XHRcdFx0ZW1haWw6IFwiXCIsXG5cdFx0XHRcdHByb2ZpbGVfdHlwZTogXCJcIlxuXHRcdFx0fSk7XG5cdFx0XHRTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiWW91ciBqb2IgYXBwbGljYXRpb24gc3VibWl0dGVkIHN1Y2Nlc3NmdWxseS5cIiB9KTtcblx0XHR9KTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PEhlbG1ldFRhZ3MgdGFnc0RhdGE9e3tcblx0XHRcdFx0XHR0aXRsZTogKCdDYXJlZXIgYXQgZG9jcHJpbWUnKSxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogKFwiRmluZSBjYXJlZXIgb3Bwb3J0dW5pdHkgYXQgZG9jcHJpbWUsIEluZGlhJ3Mgb25lIHN0b3AgaGVhbHRoIGNhcmUgc29sdXRpb24uXCIpXG5cdFx0XHRcdH19IC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGFwdG9wLWltZy1kaXYgYWJzb2x1dGUtaW1hZ2VzXCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jYXJlZXIvbGFwdG9wLnBuZ1wifS8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhZ2VzLWltZy1kaXYgYWJzb2x1dGUtaW1hZ2VzXCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jYXJlZXIvcGFnZXMucG5nXCJ9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjYXJlZXJzLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBoaXJpbmctY29sXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGlyaW5nLWhlYWRpbmctZGl2XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jYXJlZXIvaGlyaW5nLnBuZ1wifSBjbGFzc05hbWU9XCJoaXJpbmctaW1nXCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwiaGlyaW5nLWhlYWRpbmdcIj5XZSBBcmUgSGlyaW5nICE8L2gxPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoaXJpbmctZGVzYy1kaXZcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwiaGlyaW5nLWRlc2NcIj5XZSBhcmUgaGlyaW5nIGZvciBtdWx0aXBsZSBwb3NpdGlvbnMuPC9oMz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2FyZWVyL2Fycm93LnN2Z1wifSBjbGFzc05hbWU9XCJjYXJlZXJzLWFycm93LWltZyBhYnNvbHV0ZS1pbWFnZXNcIiAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBoaXJpbmctY29sXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGlyaW5nLWZvcm0tZGl2XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGZvcm0gb25TdWJtaXQ9eyhlKSA9PiB0aGlzLm9uU3VibWl0UHJvZmlsZShlKX0gPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3RoaXMuc3RhdGUucHJvZmlsZV90eXBlfSBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLmNoYW5nZUhhbmRsZXIoZXZlbnQsICdwcm9maWxlX3R5cGUnKX0gcmVxdWlyZWQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBGdW5jdGlvbjwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIxXCI+UHJvZHVjdDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIyXCI+VGVjaG5vbG9neTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIzXCI+U2FsZXM8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiNFwiPkNvbnRlbnQ8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiNVwiPk1hcmtldGluZzwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCI2XCI+UUM8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiN1wiPlNlcnZpY2UgJmFtcDsgU3VwcG9ydDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCI4XCI+RG9jdG9yczwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBOYW1lXCIgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5jaGFuZ2VIYW5kbGVyKGV2ZW50LCAnbmFtZScpfSByZXF1aXJlZCAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cIm1vYmlsZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG1pbj17NTAwMDAwMDAwMH0gbWF4PXs5OTk5OTk5OTk5fSBwbGFjZWhvbGRlcj1cIk1vYmlsZSBOdW1iZXJcIiB2YWx1ZT17dGhpcy5zdGF0ZS5tb2JpbGV9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuY2hhbmdlSGFuZGxlcihldmVudCwgJ21vYmlsZScpfSByZXF1aXJlZCAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuY2hhbmdlSGFuZGxlcihldmVudCwgJ2VtYWlsJyl9IHJlcXVpcmVkIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidXBsb2FkLXJlc3VtZS1kaXZcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInJlc3VtZS1sYWJlbFwiIGh0bWxGb3I9XCJ1cGxvYWQtcmVzdW1lXCI+VXBsb2FkIFJlc3VtZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZWVycy11cGxvYWQtYnRuXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jYXJlZXIvdXBsb2FkLnN2Z1wifSBjbGFzc05hbWU9XCJ1cGxvYWQtaWNvblwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY2FyZWVycy11cGxvYWQtdGV4dFwiPlVwbG9hZDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZWVycy1pbnB1dC1maWxlXCI+PGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cInJlc3VtZVwiIGlkPVwidXBsb2FkLXJlc3VtZVwiIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5maWxlUGlja2VyKGUpfSByZXF1aXJlZCAvPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmVlcnMtc3VibWl0LWJ0bi1kaXZcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGNhcmVlcnMtc2VuZC1idG5cIj5TdWJtaXQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29mZmVlLWltZy1kaXYgYWJzb2x1dGUtaW1hZ2VzXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jYXJlZXIvY29mZmVlLnBuZ1wifSBjbGFzc05hbWU9XCJjb2ZmZWUtaW1nXCIgLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGFic29sdXRlLWltYWdlc1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGNhcmVlci1pbWctcm93XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJhZy1pbWcgY2FyZWVyLWltZy1kaXZcIj5cblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jYXJlZXIvYmFnLnBuZ1wifSBjbGFzc05hbWU9XCJjYXJlZXItaW1nXCIgLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzcGVjcy1pbWcgY2FyZWVyLWltZy1kaXZcIj5cblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jYXJlZXIvc3BlY3MucG5nXCJ9IGNsYXNzTmFtZT1cImNhcmVlci1pbWdcIiAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBlbi1pbWcgY2FyZWVyLWltZy1kaXZcIj5cblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jYXJlZXIvcGVuLnBuZ1wifSBjbGFzc05hbWU9XCJjYXJlZXItaW1nXCIgLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdi1pbWcgY2FyZWVyLWltZy1kaXZcIj5cblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jYXJlZXIvY3YucG5nXCJ9IGNsYXNzTmFtZT1cImNhcmVlci1pbWdcIiAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImV4YW0taW1nIGNhcmVlci1pbWctZGl2XCI+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2FyZWVyL2V4YW0ucG5nXCJ9IGNsYXNzTmFtZT1cImNhcmVlci1pbWdcIiAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IENhcmVlcnNcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBIZWxtZXRUYWdzIGZyb20gJy4uL0hlbG1ldFRhZ3MnXG5cbmNsYXNzIENvbnRhY3RVcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICAgICAgbW9iaWxlOiBcIlwiLFxuICAgICAgICAgICAgZW1haWw6IFwiXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBrZXkpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBba2V5XTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uU3VibWl0RGF0YShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5wcm9wcy5zdWJtaXRDb250YWN0TWVzc2FnZSh0aGlzLnN0YXRlLCAoZXJyb3IsIHJlcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgICAgICAgICBtb2JpbGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgZW1haWw6IFwiXCIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiQ29udGFjdCBSZXF1ZXN0IHRha2VuIHN1Y2Nlc3NmdWxseS5cIiB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbWFpbkNsYXNzXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmZyb21BcHApIHtcbiAgICAgICAgICAgIG1haW5DbGFzcyA9IFwiY29udGFpbmVyIGFib3V0LWNvbnRhaW5lciBhcHBVcmxQYWRkaW5nXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1haW5DbGFzcyA9ICdjb250YWluZXIgYWJvdXQtY29udGFpbmVyJ1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWFpbkNsYXNzfT5cbiAgICAgICAgICAgICAgICA8SGVsbWV0VGFncyB0YWdzRGF0YT17e1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogKCdDb250YWN0IFVzIHwgZG9jcHJpbWUnKSxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICgnQ29udGFjdCBVczogQ29udGFjdCBkb2NwcmltZSBmb3IgcXVlcnkgcmVsYXRlZCB0byBib29raW5nLCBzaWdudXAgYW5kIG1vcmUuJylcbiAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgYWJvdXQtaGVhZGluZ1wiIHN0eWxlPXt7IGZvbnRTaXplOiAyMCB9fSA+Q29udGFjdCBVczwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+RmVlbCBsaWtlIGNvbnRhY3RpbmcgdXM/IFN1Ym1pdCB5b3VyIHF1ZXJpZXMgaGVyZSBhbmQgd2Ugd2lsbCBnZXQgYmFjayB0byB5b3UgYXMgc29vbiBhcyBwb3NzaWJsZS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImdwc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1sb2NhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbG90IE5vLiAxMTksIFNlY3Rvci00NCwgR3VydWdyYW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLSAxMjIwMDEsIEhhcnlhbmEgKEluZGlhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3ctZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtbG9jYXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9sb2NhdGlvbi5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IG1ydC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tdGl0bGVcIiBzdHlsZT17eyBmb250U2l6ZTogMTYgfX0gPlNlbmQgVXMgYSBNZXNzYWdlPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXREYXRhLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtZmllbGRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT17KGUpID0+IHsgdGhpcy5jaGFuZ2VIYW5kbGVyKGUsICduYW1lJykgfX0gcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1maWVsZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IG9uQ2hhbmdlPXsoZSkgPT4geyB0aGlzLmNoYW5nZUhhbmRsZXIoZSwgJ2VtYWlsJykgfX0gcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1maWVsZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJNb2JpbGUgTnVtYmVyXCIgbWF4PXs5OTk5OTk5OTk5fSBtaW49ezUwMDAwMDAwMDB9IHZhbHVlPXt0aGlzLnN0YXRlLm1vYmlsZX0gb25DaGFuZ2U9eyhlKSA9PiB7IHRoaXMuY2hhbmdlSGFuZGxlcihlLCAnbW9iaWxlJykgfX0gcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1maWVsZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIiByb3dzPXszfSB2YWx1ZT17dGhpcy5zdGF0ZS5tZXNzYWdlfSBvbkNoYW5nZT17KGUpID0+IHsgdGhpcy5jaGFuZ2VIYW5kbGVyKGUsICdtZXNzYWdlJykgfX0gcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gc3VibWl0LWJ0biBtcnQtMjBcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBvZmZzZXQtbWQtMSBjb2wtbWQtNSBtcnQtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1yYi0xMFwiPllvdSBjYW4gYWxzbyBjb250YWN0IHVzIHZpYSA6PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcmItMTBcIj48c3BhbiBjbGFzc05hbWU9XCJmdy03MDBcIj5FLW1haWwgOjwvc3Bhbj4gY3VzdG9tZXJjYXJlQGRvY3ByaW1lLmNvbTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIj48c3BhbiBjbGFzc05hbWU9XCJmdy03MDBcIj5QaG9uZSA6PC9zcGFuPiAxODAwLTEyMy05NDE5PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RVc1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWxtZXRUYWdzIGZyb20gJy4uL0hlbG1ldFRhZ3MnXG5cbmNsYXNzIERpc2NsYWltZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBtYWluQ2xhc3NcbiAgICAgICAgbGV0IGhlYWRpbmdDbGFzc1xuICAgICAgICBpZih0aGlzLnByb3BzLmZyb21BcHApe1xuICAgICAgICAgICAgbWFpbkNsYXNzID0gXCJjb250YWluZXIgYWJvdXQtY29udGFpbmVyIGFwcFVybFBhZGRpbmdcIlxuICAgICAgICAgICAgaGVhZGluZ0NsYXNzID0gXCJjb2wtMTIgdGV4dC1jZW50ZXIgZC1ub25lIGQtbWQtYmxvY2tcIlxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIG1haW5DbGFzcyA9ICdjb250YWluZXIgYWJvdXQtY29udGFpbmVyJ1xuICAgICAgICAgICAgaGVhZGluZ0NsYXNzID0gXCJjb2wtMTIgdGV4dC1jZW50ZXJcIlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWFpbkNsYXNzfT5cbiAgICAgICAgICAgICAgICA8SGVsbWV0VGFncyB0YWdzRGF0YT17e1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogKCdEaXNjbGFpbWVyIHwgZG9jcHJpbWUnKSxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICgnRGlzY2xhaW1lcjogUmVhZCBEaXNjbGFpbWVyIGRvY3VtZW50IG9mIGRvY3ByaW1lLicpXG4gICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aGVhZGluZ0NsYXNzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBhYm91dC1oZWFkaW5nXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fT5EaXNjbGFpbWVyPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBwcml2YWN5LWRlc2MtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgaW5mb3JtYXRpb24gY29udGFpbmVkIG9uIERvY3ByaW1lIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQgd2Vic2l0ZSB3d3cuZG9jcHJpbWUuY29tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKOKAnFdlYnNpdGXigJ0pIGlzIHNvbGVseSBwcm92aWRlZCBmb3IgaW5mb3JtYXRpb25hbCBwdXJwb3NlcyBvbmx5IGFuZCBpcyBub3QgbWVhbnQgdG8gc3Vic3RpdHV0ZSBmb3IgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWR2aWNlIHByb3ZpZGVkIGJ5IHlvdXIgcGVyc29uYWwgZG9jdG9yIGFuZC9vciBvdGhlciBwZXJzb24ocykgc3BlY2lhbGl6aW5nIGluIGhlYWx0aGNhcmUvbWVkaWNhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmUuIEluZm9ybWF0aW9uIGFuZCBzdGF0ZW1lbnRzIHJlZ2FyZGluZyB2YXJpb3VzIHRlc3RzIG9mZmVyZWQgYnkgbGFicy9ob3NwaXRhbHMgb3IgY29uc3VsdGFuY3lcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmFtcywgdHJlYXRtZW50cywgaXMgc29sZWx5IGZvciBnZW5lcmFsIHJlYWRpbmcgYW5kIGlzIGEgY29tcGlsYXRpb24gZnJvbSBvcGVuIHNvdXJjZSB0aGF0IHdhc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZSB0byB1cyBhbmQvb3IgdGhlIGluZm9ybWF0aW9uIHN1cHBsaWVkIHRvIHVzIGZyb20gdGhpcmQgcGFydHkgbGFicy9ob3NwaXRhbHMvZG9jdG9ycy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbnljb25zdWx0YXRpb24gYW5kIHZhcmlvdXMgdGVzdChzKSBhcmUgaW50ZW5kZWQgZm9yIGdlbmVyYWwgcHVycG9zZSBvbmx5IGFuZCBhcmUgbm90IG1lYW50IHRvIGJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlZCBpbiBlbWVyZ2VuY2llcy9zZXJpb3VzIGlsbG5lc3NlcyByZXF1aXJpbmcgcGh5c2ljYWwvZmFjZSB0byBmYWNlIGNvbnN1bHRhdGlvbi4gSW4gY2FzZSBvZiBhbnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWdsaWdlbmNlIG9uIHRoZSBwYXJ0IG9mIHRoZSBVc2VyIG9mIHdlYnNpdGUgaW4gYWN0aW5nIG9uIHRoZSBzYW1lIGFuZCB0aGUgY29uZGl0aW9uIG9mIHRoZSBVc2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0ZXJpb3JhdGVzLCBEb2NwcmltZSBzaGFsbCBub3QgYmUgbGlhYmxlIGZvciBhbnkgY29uc2VxdWVuY2VzIGFyaXNpbmcgb3V0IG9mLCBpbiByZWxhdGlvbiBvciBpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24sIG9yIGFzIGEgcmVzdWx0IG9mIHRoZSBzYW1lLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQW55IGludGVyYWN0aW9ucyBhbmQgYXNzb2NpYXRlZCBpc3N1ZXMgd2l0aCB0aGUgbGFicy9ob3NwaXRhbHMvZG9jdG9ycyBvbiB0aGUgV2Vic2l0ZSwgaXMgc3RyaWN0bHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZXR3ZWVuIFVzZXIgYW5kIHRoZSBsYWJzL2hvc3BpdGFscy9kb2N0b3JzLiBVc2VyIHNoYWxsIG5vdCBob2xkIERvY3ByaW1lIHJlc3BvbnNpYmxlIGZvciBhbnkgYW5kIGFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2ggaW50ZXJhY3Rpb25zIGFuZCBhc3NvY2lhdGVkIGlzc3Vlcy4gSWYgdGhlIFVzZXIgZGVjaWRlcyB0byBlbmdhZ2Ugd2l0aCBhIGxhYi9ob3NwaXRhbC9kb2N0b3IgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlIGRpYWdub3N0aWMgc2VydmljZXMsIHRoZSBVc2VyIHdpbGwgZG8gc28gYXQgaGlzL2hlciBvd24gcmlzay5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJlIGl0IG5vdGVkLCB0aGUgaW5mb3JtYXRpb24gcHJvdmlkZWQgaGVyZSBpcyBub3QgbWVkaWNhbCBhZHZpY2UgaGVuY2UgaXMgbm90IGludGVuZGVkIHRvIHJlcGxhY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YXRpb24gd2l0aCBhIG1lZGljYWwgcHJhY3RpdGlvbmVyLCBhbmQgc2hvdWxkIG5vdCBiZSB0cmVhdGVkIGFzIGFuIGFsdGVybmF0aXZlIHRvIG1lZGljYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFnbm9zaXMgb3IgdHJlYXRtZW50IGZyb20geW91ciBkb2N0b3IsIG9yIGFueSBvdGhlciBsaWNlbnNlZCBoZWFsdGhjYXJlIHByb2Zlc3Npb25hbC4gRG9jcHJpbWUgaXMgbm90XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYSBtZWRpY2FsIHNlcnZpY2UgcHJvdmlkZXIgb3IgYSBjbGluaWNhbCBlc3RhYmxpc2htZW50LCBub3IgaXQgaXMgaW52b2x2ZWQgaW4gcHJvdmlkaW5nIGFueSBoZWFsdGhjYXJlIG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWNhbCBhZHZpY2Ugb3IgZGlhZ25vc2lzIHNlcnZpY2UsIGl0IHNoYWxsIGhlbmNlIG5vdCBiZSByZXNwb25zaWJsZSBhbmQgb3ducyBubyBsaWFiaWxpdHkgdG8gVXNlcnMgZm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW55IG91dGNvbWUgZnJvbSB0aGUgY29uc3VsdGF0aW9uIGFuZCBvciB0aGUgdmFyaW91cyB0ZXN0IG9mZmVyZWQgYnkgbGFiKHMpcyBvbiB0aGUgd2Vic2l0ZS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvIG5vdCBzZWxmLWRpYWdub3NlIG9yIHRyZWF0IHlvdXJzZWxmIGJhc2VkIG9uIHRoZSBpbmZvcm1hdGlvbiBwcm92aWRlZCBvbiB0aGlzIFdlYnNpdGUuIFdlIGZ1cnRoZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NlcnQsIHBsZWFzZSBzZWVrIG1lZGljYWwgYWR2aWNlIGFuZCBkbyBub3QgZGlzcmVnYXJkIG1lZGljYWwgYWR2aWNlLCBvciBkaXNjb250aW51ZSBtZWRpY2FsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50IGJ5IHJlbHlpbmcgdXBvbiB0aGUgaW5mb3JtYXRpb24gcHJvdmlkZWQgb24gdGhpcyBXZWJzaXRlLiBFeHRlcm5hbCBsaW5rcyB0byB2aWRlb3MgYW5kIG90aGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Vic2l0ZXMgcHJvdmlkZWQgaGVyZSBhcmUgcHVyZWx5IGZvciBpbmZvcm1hdGlvbiBwdXJwb3NlcyBhbmQgRG9jcHJpbWUgZG9lcyBub3Qgd2FycmFudCBvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGd1YXJhbnRlZSB0aGUgYWNjdXJhY3ksIGdlbnVpbmVuZXNzLCByZWxpYWJpbGl0eSBvZiBzdWNoIGxpbmtzL3dlYnNpdGVzLiBXZSBkbyBub3QgZ3VhcmFudGVlIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcnJlY3RuZXNzIG9mIHRoZSBpbmZvcm1hdGlvbiwgcGxlYXNlIGV4ZXJjaXNlIGRpc2NyZXRpb24gd2hpbGUgYXBwbHlpbmcgdGhlIGluZm9ybWF0aW9uIHRvIHVzZS4gVGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mb3JtYXRpb24gcHJvdmlkZWQgaGVyZXVuZGVyIGlzIG5vdCBpbnRlbmRlZCB0byBiZSBhIHN1YnN0aXR1dGUgZm9yIGdldHRpbmcgaW4gdG91Y2ggd2l0aCBlbWVyZ2VuY3lcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFsdGhjYXJlLiBJZiB5b3UgKG9yIHRoZSBwZXJzb24geW91IGludGVuZCB0byBwcm92aWRlIGluZm9ybWF0aW9uIHRvKSBhcmUgZmFjaW5nIGEgbWVkaWNhbCBlbWVyZ2VuY3ksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxlYXNlIGNvbnRhY3QgYW4gYW1idWxhbmNlIHNlcnZpY2Ugb3IgaG9zcGl0YWwgZGlyZWN0bHkuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2MgbXJ0LTIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Db3B5cmlnaHQgMjAyMC4gZG9jcHJpbWUuY29tLiBBbGwgcmlnaHRzIHJlc2VydmVkLjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBEaXNjbGFpbWVyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5cbmNsYXNzIERvY3RvcnNpZ251cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG5hbWU6IFwiXCIsXG5cdFx0XHRtb2JpbGU6IFwiXCIsXG5cdFx0XHRlbWFpbDogXCJcIixcblx0XHRcdGNpdHk6IFwiXCIsXG5cdFx0XHRtZW1iZXJfdHlwZTogdGhpcy5wcm9wcy5tZW1iZXJfdHlwZSA/IHRoaXMucHJvcHMubWVtYmVyX3R5cGUgOiAnJyxcblx0XHRcdGNpdHlEcm9wZG93blZpc2libGU6IGZhbHNlLFxuXHRcdFx0Y2l0eV9uYW1lOiBcIlwiLFxuXHRcdFx0dXRtX3BhcmFtczogcHJvcHMudXRtX3RhZ3MgfHwge30sXG5cdFx0XHRzb3VyY2U6ICdDb25zdW1lcicsXG5cdFx0XHRzaG93U3VjY2Vzc0JveDogZmFsc2Vcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG5cdFx0aWYgKHRoaXMuc3RhdGUudXRtX3BhcmFtcyAhPSBwcm9wcy51dG1fdGFncykge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHV0bV9wYXJhbXM6IHByb3BzLnV0bV90YWdzIH0pXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dTdWNjZXNzQm94OiBmYWxzZSB9KTtcblxuXHRcdGlmICh3aW5kb3cpIHtcblx0XHRcdChmdW5jdGlvbiAod2luZG93LCBkb2N1bWVudCkge1xuXG5cdFx0XHRcdHZhciBsb2FkZXIgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSwgdGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIilbMF07XG5cblx0XHRcdFx0XHRzY3JpcHQuc3JjID0gXCJodHRwczovL3d3dy5iYWphamZpbnNlcnYuaW4vc2l0ZXMvYmFqYWovcHN0cC9qcy9Eb2NQcmltZWV4dGVybmFsd2lkZ2V0LmpzXCI7XG5cblx0XHRcdFx0XHR0YWcucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2NyaXB0LCB0YWcpO1xuXG5cdFx0XHRcdH07XG5cblx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIgPyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgbG9hZGVyLCBmYWxzZSkgOiB3aW5kb3cuYXR0YWNoRXZlbnQoXCJvbmxvYWRcIiwgbG9hZGVyKTtcblxuXHRcdFx0fSkod2luZG93LCBkb2N1bWVudCk7XG5cdFx0fVxuXHR9XG5cblx0Y2hhbmdlSGFuZGxlciA9IChldmVudCwga2V5KSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRba2V5XTogZXZlbnQudGFyZ2V0LnZhbHVlXG5cdFx0fSk7XG5cblx0XHRpZiAoa2V5ID09PSAnY2l0eScpIHtcblx0XHRcdGlmIChldmVudC50YXJnZXQudmFsdWUgPT09IFwiXCIpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGNpdHlEcm9wZG93blZpc2libGU6IGZhbHNlIH0pO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBjaXR5RHJvcGRvd25WaXNpYmxlOiB0cnVlIH0pO1xuXHRcdFx0XHR0aGlzLnByb3BzLmdldENpdGllcyhldmVudC50YXJnZXQudmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHNldENpdHkgPSAoY2l0eU5hbWUsIGNpdHlJZCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y2l0eTogY2l0eU5hbWUsXG5cdFx0XHRjaXR5X25hbWU6IGNpdHlJZCxcblx0XHRcdGNpdHlEcm9wZG93blZpc2libGU6IGZhbHNlXG5cdFx0fSk7XG5cdH1cblxuXHRvblN1Ym1pdERhdGEoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnByb3BzLnNpZ251cERvY3Rvcih0aGlzLnN0YXRlLCAoZXJyb3IsIHJlcykgPT4ge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdG5hbWU6IFwiXCIsXG5cdFx0XHRcdG1vYmlsZTogXCJcIixcblx0XHRcdFx0ZW1haWw6IFwiXCIsXG5cdFx0XHRcdGNpdHk6IFwiXCIsXG5cdFx0XHRcdG1lbWJlcl90eXBlOiBcIlwiLFxuXHRcdFx0XHRjaXR5X25hbWU6IFwiXCIsXG5cdFx0XHRcdHNob3dTdWNjZXNzQm94OiB0cnVlXG5cdFx0XHR9KTtcblx0XHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJTaWduIFVwIHdhcyBzdWNjZXNzZnVsLlwiIH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdDxkaXYgaWQ9XCJteVdpZGdldFwiPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInN1Yi1oZWFkZXIgZC1ub25lIGQtbGctYmxvY2tcIj48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgYWJvdXQtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5zaG93U3VjY2Vzc0JveCA/XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic3VibWl0LWFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiByb2xlPVwiYWxlcnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHN0cm9uZz5UaGFuayB5b3UgPC9zdHJvbmc+Zm9yIGNob29zaW5nIDxhIGhyZWY9XCIvXCIgb25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5kb2NwcmltZS5jb208L2E+LiBPdXIgdGVhbSB3aWxsIGdldCBpbiB0b3VjaCB3aXRoIHlvdSBzaG9ydGx5LlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+IDogJydcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGRzcC1tYWluLWluZm8tZGl2XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZHNwLXBob25lLWltZy1kaXZcIj5cblx0XHRcdFx0XHRcdFx0XHR7Lyo8aW1nIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9zdGF0aWMvd2ViL2ltYWdlcy9waG9uZV9kb2MuYzFmZTg2NDk3MTFmLnBuZ1wiIGNsYXNzTmFtZT1cImRzcC1waG9uZS1pbWdcIiAvPiovfVxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvZG9jLXNpZ251cC5wbmdcIn0gc3R5bGU9e3sgd2lkdGg6IDMyMCB9fSBjbGFzc05hbWU9XCJkc3AtcGhvbmUtaW1nXCIgLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZHNwLWltZy1pbmZvLWRpdlwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZHNwLWxvZ28tZGl2XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9zdGF0aWMvd2ViL2ltYWdlcy9sb2dvLjllYTExNjY1N2E2MC5wbmdcIiBjbGFzc05hbWU9XCJkc3AtbG9nb1wiIHN0eWxlPXt7IHdpZHRoOiAxNjAgfX0gLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJjb21pbmctc29vbi1kaXZcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJjb21pbmctc29vbi10ZXh0XCI+Q09NSU5HIFNPT048L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PiAqL31cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRzcC1kZXRhaWwtdGV4dC1kaXYgbXJ0LTIwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJkc3AtZGV0YWlsLXRleHRcIj5CZWNvbWUgb3VyIHBhcnRuZXIgJmFtcDsgaGVscCB1cyBzZXJ2ZSBtaWxsaW9ucyBvZiBwYXRpZW50cyBhY3Jvc3MgSW5kaWE8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGZvcm0gY2xhc3NOYW1lPVwiZG9jLWxhYi1zZ251cC1jb250XCIgb25TdWJtaXQ9eyhlKSA9PiB0aGlzLm9uU3VibWl0RGF0YShlKX0gYXV0b0NvbXBsZXRlPVwib2ZmXCIgYXV0b0NvcnJlY3Q9XCJvZmZcIiBzcGVsbENoZWNrPVwib2ZmXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJkc3Atc2lnbnVwLWRpdiBtcnQtMjBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImRzcC1zaWdudXAtbGFiZWxcIj5TaWduVXAgYXM8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+ICovfVxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbD5TaWduVXAgYXM8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0IG5hbWU9XCJtZW1iZXJfdHlwZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0aGlzLnN0YXRlLm1lbWJlcl90eXBlfSByZXF1aXJlZCBpZD1cImRzcC1zZWxlY3QtcHJvZmVzc2lvblwiIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuY2hhbmdlSGFuZGxlcihldmVudCwgJ21lbWJlcl90eXBlJyl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3Q8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPXsxfT5Eb2N0b3I8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPXsyfT5EaWFnbm9zdGljIENlbnRlcjwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9ezN9Pkhvc3BpdGFsL0NsaW5pYzwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbD5OYW1lPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBtYXhMZW5ndGg9ezI1NX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcmVxdWlyZWQgaWQ9XCJkc3AtbmFtZVwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuY2hhbmdlSGFuZGxlcihldmVudCwgJ25hbWUnKX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbD5Nb2JpbGUgTm86PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwibW9iaWxlXCIgbWF4PXs5OTk5OTk5OTk5fSBpZD1cImRzcC1tb2JpbGVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiByZXF1aXJlZCBtaW49ezUwMDAwMDAwMDB9IHZhbHVlPXt0aGlzLnN0YXRlLm1vYmlsZX0gb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5jaGFuZ2VIYW5kbGVyKGV2ZW50LCAnbW9iaWxlJyl9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbD5DaXR5OjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3R5LXJsdHZcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY2l0eV9uYW1lXCIgbWF4TGVuZ3RoPXsyNTV9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHJlcXVpcmVkIGlkPVwiZHNwLWNpdHlcIiB2YWx1ZT17dGhpcy5zdGF0ZS5jaXR5fSBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLmNoYW5nZUhhbmRsZXIoZXZlbnQsICdjaXR5Jyl9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5jaXR5RHJvcGRvd25WaXNpYmxlID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkc3AtY2l0eS1kcm9wZG93blwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJkc3AtY2l0eS1saXN0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuY2l0aWVzTmFtZS5tYXAoY2l0eSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxsaSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldENpdHkoY2l0eS5uYW1lLCBjaXR5LnZhbHVlKX0gY2xhc3NOYW1lPVwiZHNwLWNpdHktbGlzdC1pdGVtXCIga2V5PXtjaXR5LnZhbHVlfT57Y2l0eS5uYW1lfTwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+IDogXCJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWw+RW1haWw6PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBhdHRlcm49XCJbYS16MC05Ll8lKy1dK0BbYS16MC05Li1dK1xcLlthLXpdezIsM30kXCIgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHJlcXVpcmVkIG1heExlbmd0aD17MjU0fSBpZD1cImRzcC1lbWFpbFwiIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuY2hhbmdlSGFuZGxlcihldmVudCwgJ2VtYWlsJyl9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBkc3Atc2VuZC1idG5cIj5TdWJtaXQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERvY3RvcnNpZ251cCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVsbWV0VGFncyBmcm9tICcuLi9IZWxtZXRUYWdzJ1xuXG5jbGFzcyBIb3dpdFdvcmtzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBhYm91dC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8SGVsbWV0VGFncyB0YWdzRGF0YT17e1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogKCdIb3cgZG9jcHJpbWUgV29ya3MgfCBkb2NwcmltZScpLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogKCdob3cgZG9lcyBkb2NwcmltZSB3b3JrcyBmb3IgdGhlIHBhdGllbnRzIGFuZCBkb2N0b3JzLicpXG4gICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGFib3V0LWhlYWRpbmdcIj5Ib3cgaXQgV29ya3M8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGFib3V0LWNvbnRlbnRcIj5kb2NwcmltZS5jb20gYWltcyB0byByZWRlZmluZSBob3cgSW5kaWFucyBzZWVrIGhlYWx0aGNhcmUgc2VydmljZXMuIEl0IGNvbm5lY3RzIHBhdGllbnRzIHdpdGggbWVkaWNhbCBjb25zdWx0YW50cyBpbiByZWFsIHRpbWUgYW5kIGJyaWRnZXMgdGhlIGdhcCBiZXR3ZWVuIG5lZWQgYW5kIGZ1bGZpbG1lbnQgdXNpbmcgc3RhdGUtb2YtdGhlLWFydCB0ZWNobm9sb2d5IGFuZCBhIHJvYnVzdCBvZmZsaW5lIG5ldHdvcmsuIEl0IGFsc28gZmFjaWxpdGF0ZXMgYm9va2luZyBvZiBkb2N0b3IgYXBwb2ludG1lbnRzIGFuZCBsYWIgdGVzdHMgYXQgZGlzY291bnRlZCByYXRlcy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgYWJvdXQtY29udGVudFwiPk91ciBLZXkgU2VydmljZXMgYXJlOjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgd29ya2luZy1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JraW5nLWNvbnRlbnQtZGl2IGNvbC0xMiBjb2wtbGctOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2N0b3ItY29uc3VsdGF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JraW5nLWNvdW50IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPjE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25zdWx0YXRpb24tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIj5GcmVlIGZvciBMaWZlLURvY3RvciBjb25zdWx0YXRpb248L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17eyBsaXN0U3R5bGVUeXBlOiAnZGlzYycgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmdy01MDBcIj5GcmVlIG1lZGljYWwgY29uc3VsdGF0aW9uIG92ZXIgY2hhdCBhbmQgcGhvbmUgZnJvbSBleHBlcmllbmNlZCBtZWRpY2FsIGNvbnN1bHRhbnRzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZ3LTUwMFwiPkluc3RhbnQgYW5kIHJlYWwtdGltZSBpbnRlcmFjdGlvbiB3aXRoIG1lZGljYWwgY29uc3VsdGFudHMgdG8gaGVscCBpZGVudGlmeSB0aGUgcm9vdCBjYXVzZSBvZiB0aGUgcHJvYmxlbTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmdy01MDBcIj5Vc2VycyBjYW4gYW5vbnltb3VzbHksIG9yIG90aGVyd2lzZSwgY29tbXVuaWNhdGUgd2l0aCBkb2N0b3JzIHdpdGggdmFyaW91cyBhcmVhcyBvZiBleHBlcnRpc2UgZGlyZWN0bHkgZnJvbSB0aGVpciBzbWFydHBob25lcyBvciBkZXNrdG9wczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBkLW5vbmUgZC1sZy1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjb25zdWx0YXRpb24taW1hZ2VcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9kb2N0b3JDb25zbHV0YXRpb24ucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHdvcmtpbmctcm93IGxhYlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmtpbmctY29udGVudC1kaXYgY29sLTEyIGNvbC1sZy04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY3Rvci1jb25zdWx0YXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmtpbmctY291bnQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+MjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnN1bHRhdGlvbi10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPkRvY3RvciBTZWFyY2ggYW5kIE9ubGluZSBBcHBvaW50bWVudCBCb29raW5nPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY3RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3sgbGlzdFN0eWxlVHlwZTogJ2Rpc2MnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZnctNTAwXCI+U2VhcmNoIHRoZSBiZXN0IGRvY3RvcnMgbmVhcmJ5IHlvdXIgYXJlYSBhbmQgYm9vayB5b3VyIG5leHQgZG9jdG9yIHZpc2l0IGNvbnZlbmllbnRseSB0aHJvdWdoIHVzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZ3LTUwMFwiPkF2YWlsIGRpc2NvdW50IHVwdG8gNTAlIG9uIGJvb2tpbmcgZG9jdG9yIHNlcnZpY2VzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZ3LTUwMFwiPjE0MDAwK2RvY3RvcnMgZnJvbSByZXB1dGVkIGFuZCBsZWFkaW5nIGNsaW5pY3MgYW5kIGhvc3BpdGFscyBvbiBib2FyZCB0byBwcm92aWRlIGJlc3QgaGVhbHRoY2FyZSBzZXJ2aWNlczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBkLW5vbmUgZC1sZy1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsYWItaW1hZ2VcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9waG9uZS5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgd29ya2luZy1yb3cgbGFiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29ya2luZy1jb250ZW50LWRpdiBjb2wtMTIgY29sLWxnLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jdG9yLWNvbnN1bHRhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29ya2luZy1jb3VudCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIj4zPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uc3VsdGF0aW9uLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+U2VhcmNoIGFuZCBCb29rIExhYiBUZXN0cyBhdCBEaXNjb3VudGVkIFJhdGVzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY3RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3sgbGlzdFN0eWxlVHlwZTogJ2Rpc2MnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZnctNTAwXCI+U2VhcmNoIHRoZSBiZXN0IGRpYWdub3N0aWMgbGFiIG5lYXJieSB5b3VyIGFyZWE8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZnctNTAwXCI+QXZhaWwgZGlzY291bnQgdXB0byA2MCUgb24gbGFiIHRlc3RzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZ3LTUwMFwiPkNvbXByZWhlbnNpdmUgbmV0d29yayBvZiByZXB1dGVkIDQwMDArIGRpYWdub3N0aWMgbGFiczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmdy01MDBcIj5EZXRhaWxlZCBpbmZvcm1hdGlvbiBhYm91dCBwcm9jZWR1cmVzIG9mIHRoZSB0ZXN0cywgcHJpY2VzLCBhbmQgcmVsZXZhbnQgcHJlcGFyYXRpb25zIGFyZSBlYXNpbHkgYWNjZXNzaWJsZSBvbiB0aGUgcGxhdGZvcm08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZnctNTAwXCI+SG9tZSBjb2xsZWN0aW9uIGZhY2lsaXR5IGF2YWlsYWJsZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBkLW5vbmUgZC1sZy1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjb25zdWx0YXRpb24taW1hZ2VcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zdGF5aW5naGVhbHRoeS5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgd29ya2luZy1yb3cgbGFiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29ya2luZy1jb250ZW50LWRpdiBjb2wtMTIgY29sLWxnLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jdG9yLWNvbnN1bHRhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29ya2luZy1jb3VudCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIj40PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uc3VsdGF0aW9uLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+SGVhbHRoIGZlZWQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17eyBsaXN0U3R5bGVUeXBlOiAnZGlzYycgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmdy01MDBcIj5JbXBvcnRhbnQgZmFjdHMgYW5kIGtub3dsZWRnZSBhYm91dCB2YXJpb3VzIGRpc2Vhc2VzIGFuZCBtZWRpY2luZXMsIGFuZCBob3cgdG8gbWFuYWdlIHRoZSBjb25kaXRpb248L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZnctNTAwXCI+SW5mb3JtYXRpb24gb24gdXNlZnVsIGxpZmVzdHlsZSBjaGFuZ2VzIGZvciBvdmVyYWxsIHdlbGwtYmVpbmc8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbGFiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29ya2luZy1jb250ZW50LWRpdiBjb2wtMTIgY29sLWxnLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LXhsXCI+T3VyIFVwY29taW5nIFNlcnZpY2VzIDo8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHdvcmtpbmctcm93IGxhYlwiIHN0eWxlPXt7IG1hcmdpblRvcDogNDAgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmtpbmctY29udGVudC1kaXYgY29sLTEyIGNvbC1sZy04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY3Rvci1jb25zdWx0YXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmtpbmctY291bnQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+MTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnN1bHRhdGlvbi10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPlN1YnNjcmlwdGlvbiBiYXNlZCBPUEQgcHJvZHVjdDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2N0ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7IGxpc3RTdHlsZVR5cGU6ICdkaXNjJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZ3LTUwMFwiPlVubGltaXRlZCBjb25zdWx0YXRpb25zIGFuZCBkaWFnbm9zdGljIHRlc3QgdG8gbWFrZSByZWd1bGFyIE9QRCB2aXNpdHMgY29udmVuaWVudCwgYWNjZXNzaWJsZSwgYW5kIGFmZm9yZGFibGU8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZnctNTAwXCI+RWFzZSBvZiBjYXNobGVzcyB0cmFuc2FjdGlvbnMgZm9yIE9QRCBzZXJ2aWNlczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmdy01MDBcIj5PbmxpbmUgYXBwb2ludG1lbnQgYm9va2luZzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB3b3JraW5nLXJvdyBsYWJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JraW5nLWNvbnRlbnQtZGl2IGNvbC0xMiBjb2wtbGctOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2N0b3ItY29uc3VsdGF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JraW5nLWNvdW50IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPjI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25zdWx0YXRpb24tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIj5lUGhhcm1hY3k8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17eyBsaXN0U3R5bGVUeXBlOiAnZGlzYycgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmdy01MDBcIj5Db21wcmVoZW5zaXZlIG5ldHdvcmsgb2YgcGhhcm1hY2llczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmdy01MDBcIj5Eb29yc3RlcCBkZWxpdmVyeSBvZiBtZWRpY2luZXMgYXQgZGlzY291bnRlZCByYXRlczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBIb3dpdFdvcmtzXG4iLCJpbXBvcnQgU3RhdGljUGFnZXMgZnJvbSAnLi9TdGF0aWNQYWdlcy5qcydcblxuZXhwb3J0IGRlZmF1bHQgU3RhdGljUGFnZXMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlbG1ldFRhZ3MgZnJvbSAnLi4vSGVsbWV0VGFncydcblxuY2xhc3MgTWVkaWEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbWVkaWEtY29udGFpbmVyXCI+XG5cdFx0XHRcdDxIZWxtZXRUYWdzIHRhZ3NEYXRhPXt7XG5cdFx0XHRcdFx0dGl0bGU6ICgnTWVkaWEgQ292ZXJhZ2VzIEFuZCBQcmVzcyBSZWxlYXNlcyB8IGRvY3ByaW1lJyksXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246ICgnUmVhZCBhYm91dCBtZWRpYSBjb3ZlcmFnZXMsIHByZXNzIHJlbGVhc2VzIGFuZCBuZXdzIHJlbGF0ZWQgdG8gZG9jcHJpbWUuJylcblx0XHRcdFx0fX0gLz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgbWVkaWEtcm93XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLWxnLTNcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtbWVkaWEtc3RpY2t5LWRpdlwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWxpc3QtZGl2IGQtbm9uZSBkLWxnLWJsb2NrXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cIm1lZGlhLWxpc3Qtb3B0aW9uc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtZWRpYS1saXN0LW9wdGlvbnMtaXRlbSBtZWRpYS1zZWxlY3RlZC1vcHRpb25cIj5BbGwgTWVkaWE8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0ey8qIDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3M9XCJtZWRpYS1saXN0LW9wdGlvbnMtaXRlbVwiPk5ld3MgZnJvbSBNZWRpYTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzPVwibWVkaWEtbGlzdC1vcHRpb25zLWl0ZW1cIj5QcmVzcyBSZWxlYXNlczwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzPVwibWVkaWEtbGlzdC1vcHRpb25zLWl0ZW1cIj5UViBDb21tZXJjaWFsczwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzPVwibWVkaWEtbGlzdC1vcHRpb25zLWl0ZW1cIj5OZXdzIGluIEdlbmVyYWxzPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT4gKi99XG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtY29udGFjdC1kaXYgZC1ub25lIGQtbGctYmxvY2tcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWNvbnRhY3QtbGFiZWwtZGl2XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtZWRpYS1jb250YWN0LWxhYmVsXCI+Q29udGFjdCBVczwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWNvbnRhY3QtaXRlbXMtZGl2XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWNvbnRhY3QtaXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWNvbnRhY3Qtc3ViaXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbWVkaWEvZW1haWwtaWNvbi5zdmdcIn0gc3R5bGU9e3sgdmVydGljYWxBbGlnbjogJ21pZGRsZScgfX0gY2xhc3NOYW1lPVwibWVkaWEtY29udGFjdC1pY29uXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtY29udGFjdC1zdWJpdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWVkaWEtY29udGFjdC10ZXh0XCI+bWVkaWFAZG9jcHJpbWUuY29tPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZWRpYS1jb250YWN0LWl0ZW0gbWVkaWEtbG9jYXRpb24taXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWNvbnRhY3Qtc3ViaXRlbSBtZWRpYS1sb2NhdGlvbi1zdWJpdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9tZWRpYS9tZWRpYS1sb2Muc3ZnXCJ9IGNsYXNzTmFtZT1cIm1lZGlhLWNvbnRhY3QtaWNvblwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWNvbnRhY3Qtc3ViaXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1lZGlhLWNvbnRhY3QtdGV4dFwiPlBsb3Qgbm88L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWVkaWEtY29udGFjdC10ZXh0XCI+MTE5LCBTZWN0b3IgNDQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWVkaWEtY29udGFjdC10ZXh0XCI+R3VydWdyYW0gLSAxMjIwMDE8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLWxnLTZcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtZGl2LWhlYWRcIj5cblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9tZWRpYS9uZXdzcGFwZXIucG5nXCJ9IC8+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPlByZXNzIFJlbGVhc2VzPC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWRpdi1jYXJkXCI+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1lZGlhLWNhcmQtaGVhZGluZ1wiPlBvbGljeWJhemFhci5jb20gdG8gZm9yYXkgaW50byBoZWFsdGhjYXJlIGFuZCB0ZWNoIHNlcnZpY2VzPC9wPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtZWRpYS1jYXJkLWRhdGVcIj4zMCBNYXJjaCwgMjAxODwvcD5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWVkaWEtY2FyZC1jb250ZW50XCI+UG9saWN5YmF6YWFyLmNvbSwgSW5kaWEncyBsYXJnZXN0IGluc3VyYW5jZSB3ZWJzaXRlIGFuZCBjb21wYXJpc29uIHBvcnRhbCwgaXMgcGxhbm5pbmcgdG8gZm9yYXkgaW50byB0aGUgaGVhbHRoY2FyZSB0ZWNobm9sb2d5IGFuZCBzZXJ2aWNlcyBzcGFjZTwvcD5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWVkaWEtY2FyZC1jb250ZW50XCI+VGhlIG5ldyBwbGF0Zm9ybSB3aWxsIHByb3ZpZGUgY29uc3VtZXJzIHdpdGggZWFzeSwgb25saW5lIGFuZCBmcmVlIGFjY2VzcyB0byBQb2xpY3lCYXphYXIncyBlbXBhbmVsbGVkIHRvcC1ub3RjaCBkb2N0b3JzIGFuZCBtZWRpY2FsIGNvbnN1bHRhbnRzLlRvIGJlZ2luIHdpdGgsIHRoZSBjb21wYW55IGludGVuZHMgdG8gcGFydG5lciB3aXRoIDEwMCBob3NwaXRhbHMgYW5kIDIwLDAwMCBkb2N0b3JzLCBkaWFnbm9zdGljIGNlbnRyZXMsIGFuZCBjbGluaWNzIGJ5IHRoZSBlbmQgb2YgTWFyY2ggMjAxOS5UaGUgaGVhbHRoY2FyZSB2ZXJ0aWNhbCBhbHNvIHBsYW5zIHRvIG9mZmVyIGEgaHVnZSBhcnJheSBvZiBoZWFsdGhjYXJlIHNlcnZpY2VzLCB3aGljaCBpbmNsdWRlcyBpbi1ob3NwaXRhbCBjb25jaWVyZ2Ugc2VydmljZXMgZm9yIGl0cyBoZWFsdGggaW5zdXJhbmNlIGN1c3RvbWVycy5CeSBkb2luZyB0aGlzLCBQb2xpY3liYXphYXIuY29tIHdhbnRzIHRvIGJlIHdpdGggaXRzIGN1c3RvbWVycyBhdCB0aGUgbW9tZW50IG9mIHRydXRoLCB3aGljaCBpcyBhdCB0aGUgdGltZSBvZiBjbGFpbXMuXG5cdFx0XHRcdFx0XHRcdCAgXCJPdXIgZm9yYXkgaW50byB0aGUgaGVhbHRoY2FyZSBzZXJ2aWNlcyBzcGFjZSBpcyBpbiBzeW5jIHdpdGggdGhlIHZpc2lvbiBvZiBleHBhbmRpbmcgdGhlIHNvY2lhbCBzZWN1cml0eSBuZXQgb2YgSW5kaWEuIFdpdGggdGhpcyB2ZW50dXJlLCB3ZSBzZWVrIHRvIGZ1bGZpbGwgdGhlIG5lZWQgb2YgcHJvdmlkaW5nIHF1YWxpdHkgYW5kIGFmZm9yZGFibGUgaGVhbHRoY2FyZSBvZiB0aGUgYnVyZ2VvbmluZyBwb3B1bGF0aW9uIGF0IGxhcmdlIGJ5IGNvbm5lY3RpbmcgdGhlIGNvbnN1bWVycyB3aXRoIG91ciBpbi1ob3VzZSBtZWRpY2FsIHByYWN0aXRpb25lcnMuIFRoZSBuZXcgcG9ydGFsIHdpbGwgZmFjaWxpdGF0ZSB0aGUgY3JlYXRpb24gb2YgYW4gaW5jbHVzaXZlIGhlYWx0aGNhcmUgc3lzdGVtLCB3aGljaCB3aWxsIGV2ZW50dWFsbHkgb2ZmZXIgY3VzdG9taXNlZCBvcHRpb25zIGZvciBpbi1wYXRpZW50IGRlcGFydG1lbnQgaW5zdXJhbmNlIGJhc2VkIG9uIGRldGFpbGVkIGFuYWx5c2lzIHVuZGVydGFrZW4gYWZ0ZXIgc3R1ZHlpbmcgY29uc3VtZXIgaGVhbHRoY2FyZSBoYWJpdHMgYW5kIHBhdGllbnQncyBpbnRlcmFjdGlvbnMgd2l0aCB0aGUgZG9jdG9ycyxcIiBzYWlkIFlhc2hpc2ggRGFoaXlhLCBjby1mb3VuZGVyIGFuZCBDRU8sIFBvbGljeWJhemFhci5jb20uSW4gdGhlIGxvbmcgcnVuLCBQb2xpY3lCYXphYXIuY29tIHdhbnRzIHRvIG9mZmVyIGl0cyBjdXN0b21lcnMgYSBiZXR0ZXIgYW5kIHBlcnNvbmFsaXNlZCBjbGFpbSBhbmQgaW4taG9zcGl0YWwgZXhwZXJpZW5jZS5Qb2xpY3liYXphYXIgaXMgYWxzbyBnb2luZyB0byB3b3JrIHdpdGggaW5zdXJlcnMgdG8gY3JlYXRlIGEgbmV3IGNhdGVnb3J5IG9mIGhlYWx0aCBpbnN1cmFuY2UgZm9yIE91dC1wYXRpZW50IGV4cGVuc2VzIChPUEQpIGFuZCBwcm92aWRlIGZyZWUgb25saW5lIG1lZGljYWwgY29uc3VsdGF0aW9uIHRvIGNvbnN1bWVycyBvdmVyIHBob25lIGFuZCBjaGF0LlxuXHRcdFx0XHRcdFx0XHQgIFBvbGljeWJhemFhci5jb20gaXMgaW4gZGlzY3Vzc2lvbnMgd2l0aCBpbnN1cmFuY2UgY29tcGFuaWVzIHRvIG9mZmVyIGEgZmlyc3Qgb2YgaXRzIGtpbmQgT1BEIGluc3VyYW5jZSBwcm9kdWN0LlxuICAgICAgICAgICAgICAgIFRoZSBjb21wYW55IGFpbXMgdG8gb2ZmZXIgNSBtaWxsaW9uIE9QRCBjb25zdWx0YXRpb25zIGJ5IG5leHQgRlkuPC9wPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWljb25zLWRpdlwiPlxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwOi8vd3d3LmluZGlhLmNvbS9uZXdzL2FnZW5jaWVzL3BvbGljeWJhemFhci1jb20tdG8tZm9yYXktaW50by1oZWFsdGhjYXJlLXRlY2gtc2VydmljZS1zcGFjZS0zMTA4NzM5L1wiIHJlbD1cIm5vZm9sbG93XCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGltZyBzcmM9XCIvYXNzZXRzL2ltZy9tZWRpYS9pbmQtYmx3aC5wbmdcIiBvbm1vdXNlb3Zlcj1cInRoaXMuc3JjPScvYXNzZXRzL2ltZy9tZWRpYS9pbmQtY29sb3IucG5nJ1wiIG9ubW91c2VvdXQ9XCJ0aGlzLnNyYz0nL2Fzc2V0cy9pbWcvbWVkaWEvaW5kLWJsd2gucG5nJ1wiIC8+PC9hPlxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwOi8vd3d3LmFicGxpdmUuaW4vYnVzaW5lc3MvcG9saWN5YmF6YWFyLWNvbS10by1mb3JheS1pbnRvLWhlYWx0aGNhcmUtYW5kLXRlY2gtc2VydmljZXMtNjc2ODY0XCIgcmVsPVwibm9mb2xsb3dcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIHNyYz1cIi9hc3NldHMvaW1nL21lZGlhL2FicC1ibHdoLnBuZ1wiIG9ubW91c2VvdmVyPVwidGhpcy5zcmM9Jy9hc3NldHMvaW1nL21lZGlhL2FicC1jb2xvci5wbmcnXCIgb25tb3VzZW91dD1cInRoaXMuc3JjPScvYXNzZXRzL2ltZy9tZWRpYS9hYnAtYmx3aC5wbmcnXCIgLz48L2E+XG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vaGVhbHRoLmVjb25vbWljdGltZXMuaW5kaWF0aW1lcy5jb20vbmV3cy9oZWFsdGgtaXQvcG9saWN5YmF6YWFyLWNvbS10by1mb3JheS1pbnRvLWhlYWx0aGNhcmUtdGVjaC82MzU3Nzk4M1wiIHJlbD1cIm5vZm9sbG93XCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGltZyBzcmM9XCIvYXNzZXRzL2ltZy9tZWRpYS9ldC1ibHdoLnBuZ1wiIG9ubW91c2VvdmVyPVwidGhpcy5zcmM9Jy9hc3NldHMvaW1nL21lZGlhL2V0LWNvbG9yLnBuZydcIiBvbm1vdXNlb3V0PVwidGhpcy5zcmM9Jy9hc3NldHMvaW1nL21lZGlhL2V0LWJsd2gucG5nJ1wiIC8+PC9hPlxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5vdXRsb29raW5kaWEuY29tL25ld3NzY3JvbGwvcG9saWN5YmF6YWFyY29tLXRvLWZvcmF5LWludG8taGVhbHRoY2FyZS10ZWNoLXNlcnZpY2Utc3BhY2UvMTMyOTE4MVwiIHJlbD1cIm5vZm9sbG93XCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGltZyBzcmM9XCIvYXNzZXRzL2ltZy9tZWRpYS9vdXQtYmx3aC5wbmdcIiBvbm1vdXNlb3Zlcj1cInRoaXMuc3JjPScvYXNzZXRzL2ltZy9tZWRpYS9vdXQtY29sb3IucG5nJ1wiIG9ubW91c2VvdXQ9XCJ0aGlzLnNyYz0nL2Fzc2V0cy9pbWcvbWVkaWEvb3V0LWJsd2gucG5nJ1wiIC8+PC9hPlxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5kZWNjYW5jaHJvbmljbGUuY29tL2J1c2luZXNzL2NvbXBhbmllcy8wMjA0MTgvcG9saWN5YmF6YWFyY29tLXRvLWZvcmF5LWludG8taGVhbHRoY2FyZS10ZWNobm9sb2d5Lmh0bWxcIiByZWw9XCJub2ZvbGxvd1wiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvbWVkaWEvZGMtYmx3aC5wbmdcIiBvbm1vdXNlb3Zlcj1cInRoaXMuc3JjPScvYXNzZXRzL2ltZy9tZWRpYS9kYy1jb2xvci5wbmcnXCIgb25tb3VzZW91dD1cInRoaXMuc3JjPScvYXNzZXRzL2ltZy9tZWRpYS9kYy1ibHdoLnBuZydcIiAvPjwvYT5cblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cuZ2FkZ2V0c25vdy5jb20vdGVjaC1uZXdzL3BvbGljeWJhemFhci10by1lbnRlci1oZWFsdGhjYXJlLXRlY2gtYW5kLXNlcnZpY2VzLXNwYWNlL2FydGljbGVzaG93LzYzMjY1Nzk4LmNtc1wiIHJlbD1cIm5vZm9sbG93XCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGltZyBzcmM9XCIvYXNzZXRzL2ltZy9tZWRpYS9nbi1ibHdoLnBuZ1wiIG9ubW91c2VvdmVyPVwidGhpcy5zcmM9Jy9hc3NldHMvaW1nL21lZGlhL2duLWNvbG9yLnBuZydcIiBvbm1vdXNlb3V0PVwidGhpcy5zcmM9Jy9hc3NldHMvaW1nL21lZGlhL2duLWJsd2gucG5nJ1wiIC8+PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZWRpYS1kaXYtY2FyZFwiPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtZWRpYS1jYXJkLWhlYWRpbmdcIj5OZXcgdmVudHVyZSBwcm9tb3RlZCB0byBvZmZlciBmcmVlIG9ubGluZSAmYW1wOyBvdmVyIHBob25lIG1lZGljYWwgY29uc3VsdGF0aW9uczwvcD5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWVkaWEtY2FyZC1kYXRlXCI+MTMgSnVuZSwgMjAxODwvcD5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWVkaWEtY2FyZC1jb250ZW50IGNvbnRlbnQtc2hvd25cIj5ZYXNoaXNoIERhaGl5YSwgQ28tZm91bmRlciAmYW1wOyBDRU8sIFBvbGljeUJhemFhciBHcm91cCBvZiBDb21wYW5pZXMgc2FpZDogXCJXZSB3aWxsIGJlIGJ1aWxkaW5nIGEgdGVhbSBvZiBjZXJ0aWZpZWQgYW5kIHF1YWxpdHkgbWVkaWNhbCBwcm9mZXNzaW9uYWxzIHRvIGdpdmUgZnJlZSBvbmxpbmUgY29uc3VsdGF0aW9ucyB0byBjdXN0b21lcnMuIFRoaXMgc2hhbGwgYmUgc3VwcG9ydGVkIGJ5IGEgcm9idXN0IG9mZmxpbmUgbmV0d29yazwvcD5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWVkaWEtY2FyZC1jb250ZW50IGNvbnRlbnQtaGlkZGVuXCI+QUkgd2lsbCBwbGF5IGEga2V5IHJvbGUgaW4gaGVscGluZyB1cyBidWlsZCB0aGlzIGluIHNjYWxlIGFuZCBlZmZpY2llbmN5LkVUZWNoQWNlcyBNYXJrZXRpbmcgJmFtcDsgQ29uc3VsdGluZyBQdnQuIChFVGVjaEFjZXPigJ0pLCB3aGljaCBvd25zIEluZGlh4oCZcyBsZWFkaW5nIGluc3VydGVjaCBicmFuZCwgUG9saWN5QmF6YWFyLmNvbSjigJxQb2xpY3lCYXphYXLigJ0pIGFuZCBJbmRpYeKAmXMgbGVhZGluZyBsZW5kaW5nIG1hcmtldHBsYWNlLCBQYWlzYUJhemFhci5jb20gKOKAnFBhaXNhQmF6YWFy4oCdKSwgaGFzIGZsb2F0ZWQgYW5vdGhlciBmYXJtIGBkb2NwcmltZScgZm9yIGZvcmF5aW5nIGludG8gdGhlIGhlYWx0aGNhcmUgdGVjaCBhbmQgc2VydmljZSBzcGFjZS5BcyBwYXJ0IG9mIGl0cyBwbGFucyB0byBjYXB0dXJlIHRoZSBvdXQgb2YgcG9ja2V0IGhlYWx0aGNhcmUgbWFya2V0IGluIEluZGlhIGVzdGltYXRlZCBhdCBuZWFybHkgJDEwMCtibiwgdGhlIG5ldyB2ZW50dXJlICB3aWxsIHByb3ZpZGUgZnJlZSBvbmxpbmUgYW5kIG92ZXIgcGhvbmUgbWVkaWNhbCBjb25zdWx0YXRpb25zLCB0byBiZWdpbiB3aXRoLiBJdCBhaW1zIHRvIHByb3ZpZGUgMSBtaWxsaW9uIGZyZWUgbWVkaWNhbCBjb25zdWx0YXRpb25zIGJ5IE1hcmNoIDIwMTkgYW5kIHJlYWNoIHRoZSBzY2FsZSBvZiA1IG1pbGxpb24gYnkgTWFyY2ggMjAyMC5cblx0XHRcdFx0XHRcdFx0ICBTcGVha2luZyBvbiB0aGUgbGF0ZXN0IHZlbnR1cmUsIFlhc2hpc2ggRGFoaXlhLCBDby1mb3VuZGVyICZhbXA7IENFTywgUG9saWN5QmF6YWFyIEdyb3VwIG9mIENvbXBhbmllcyBzYWlkOiBcIldlIHdpbGwgYmUgYnVpbGRpbmcgYSB0ZWFtIG9mIGNlcnRpZmllZCBhbmQgcXVhbGl0eSBtZWRpY2FsIHByb2Zlc3Npb25hbHMgdG8gZ2l2ZSBmcmVlIG9ubGluZSBjb25zdWx0YXRpb25zIHRvIGN1c3RvbWVycy4gVGhpcyBzaGFsbCBiZSBzdXBwb3J0ZWQgYnkgYSByb2J1c3Qgb2ZmbGluZSBuZXR3b3JrLiBBSSB3aWxsIHBsYXkgYSBrZXkgcm9sZSBpbiBoZWxwaW5nIHVzIGJ1aWxkIHRoaXMgaW4gc2NhbGUgYW5kIGVmZmljaWVuY3kuIE91ciB2aXNpb24gaXMgdG8gY2hhbmdlIGN1c3RvbWVyIGJlaGF2aW9yIGluIHRoZSBoZWFsdGhjYXJlIHNwYWNlIGJ5IG1ha2luZyB0aGUgY29uc3VtZXIgc2hpZnQgdG8gb25saW5lIG1lZGljYWwgY29uc3VsdGF0aW9uIGZyb20gb2ZmbGluZSBieSBidWlsZGluZyBhbiBlYXN5IHRvIHVzZSwgY29udmVuaWVudCBhbmQgdHJ1c3R3b3J0aHkgc29sdXRpb24uIFdlIGJlbGlldmUgdGhhdCBoZWFsdGhjYXJlIHNwYWNlIGhhcyBodWdlIHBvdGVudGlhbCB0byBkaXNydXB0LCBhbmQgY2FuIGZvbGxvdyB0aGUgc2FtZSBncm93dGggdHJhamVjdG9yeSBhcyB0aGUgZGlnaXRhbCBpbnN1cmFuY2Ugc3BhY2Ugd2hpY2ggaW5pdGlhbGx5IGZhY2VkIGEgc2ltaWxhciBraW5kIG9mIGNvbnN1bWVyIGluZXJ0aWEgdGhhdCB0aGlzIHNwYWNlIGZhY2VzLlwiXG4gICAgICAgICAgICAgICAgSW5kaWEgaGFzIG9uZSBvZiB0aGUgbG93ZXN0IHJhdGlvcyBmb3IgYSBkb2N0b3IgcGVyIDEsMDAwIHBlb3BsZSBhbW9uZ3N0IHRoZSBkZXZlbG9waW5nIGNvdW50cmllcy4gSGF2aW5nIGEgcGh5c2ljYWwgaW50ZXJhY3Rpb24gd2l0aCBhIG1lZGljYWwgcHJhY3RpdGlvbmVyIGlzIG5vdCBvbmx5IGEgdGltZS1jb25zdW1pbmcgcHJvY2VzcyBidXQgYWxzbyBhbiBleHBlbnNpdmUgb25lLCBlc3BlY2lhbGx5IGluIHRoZSBwcml2YXRlIHNlY3Rvci4gRXZlbiB0aG91Z2ggZ292ZXJubWVudCBob3NwaXRhbHMgYW5kIHN0YXRlLXJ1biBoZWFsdGggY2VudGVycyBvZmZlciBjb25zdWx0YXRpb25zIGVpdGhlciBmcmVlIG9mIGNvc3Qgb3IgYXQgc3Vic2lkaXplZCBwcmljaW5nLCBpdCdzIG5vdCBlYXN5IHRvIGdldCBhbiBhY2Nlc3MgdG8gdGhlc2Ugc2VydmljZXMuPC9wPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWljb25zLWRpdlwiPlxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwOi8vd3d3LmFzaWFpbnN1cmFuY2Vwb3N0LmNvbS9oZWFsdGgvcG9saWN5YmF6YWFycy1wcm9tb3Rlci1vZmZlci1mcmVlLW9ubGluZS1tZWRpY2FsLWNvbnN1bHRhdGlvbnNcIiByZWw9XCJub2ZvbGxvd1wiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbWVkaWEvYXNpbnN1cmFuY2UtYmx3aC5wbmdcIn0gb25tb3VzZW92ZXI9XCJ0aGlzLnNyYz0nL2Fzc2V0cy9pbWcvbWVkaWEvYXNpbnN1cmFuY2UtY29sb3IucG5nJ1wiIG9ubW91c2VvdXQ9XCJ0aGlzLnNyYz0nL2Fzc2V0cy9pbWcvbWVkaWEvYXNpbnN1cmFuY2UtYmx3aC5wbmcnXCIgLz48L2E+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWRpdi1jYXJkXCI+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1lZGlhLWNhcmQtaGVhZGluZ1wiPmRvY3ByaW1lLmNvbcKgZ2V0cyBpbnRlcm5hbCBmdW5kIGluZnVzaW9uwqB3b3J0aCAkNTAgbWlsbGlvbiBmcm9tIFBvbGljeWJhemFhciBHcm91cDwvcD5cblxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtZWRpYS1jYXJkLWNvbnRlbnRcIj48c3BhbiBjbGFzc05hbWU9XCJtZWRpYS1jYXJkLWhlYWRpbmdcIj5HdXJ1Z3JhbSzCoFNlcHRlbWJlciAxNywgMjAxODo8L3NwYW4+Jm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vZG9jcHJpbWUuY29tXCIgcmVsPVwibm9mb2xsb3dcIiB0YXJnZXQ9XCJfYmxhbmtcIj5kb2NwcmltZS5jb208L2E+LCB0aGUgbGF0ZXN0IGhlYWx0aGNhcmUgdmVudHVyZSBieSBFdGVjaEFjZXMgTWFya2V0aW5nIGFuZCBDb25zdWx0aW5nIFByaXZhdGUgTGltaXRlZCAo4oCcUG9saWN5YmF6YWFyIEdyb3Vw4oCdKSwgYW5ub3VuY2VkIHRoYXQgaXQgaGFzIHJlY2VpdmVkIGluaXRpYWwgaW50ZXJuYWwgZnVuZGluZyBvZiAkNTAgbWlsbGlvbiBmcm9tIHRoZSBwYXJlbnQgY29tcGFueS4gVGhlIFBvbGljeWJhemFhciBHcm91cCBhbHNvIG93bnMgSW5kaWHigJlzIGxlYWRpbmcgaW5zdXJ0ZWNoIGJyYW5kIFBvbGljeUJhemFhci5jb20gYW5kIGxlYWRpbmcgbGVuZGluZyBtYXJrZXRwbGFjZSwgUGFpc2FiYXphYXIuY29tLjwvcD5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWVkaWEtY2FyZC1jb250ZW50XCI+PHNwYW4gY2xhc3NOYW1lPVwibWVkaWEtY2FyZC1oZWFkaW5nXCI+QWNjb3JkaW5nIHRvIFlhc2hpc2ggRGFoaXlhLCBDRU8gYW5kIENvLWZvdW5kZXIsIFBvbGljeWJhemFhciBHcm91cCBvZiBDb21wYW5pZXMsPC9zcGFuPiDigJxIZWFsdGhjYXJlIHNlY3RvciBoYXMgYSBsb3Qgb2YgdW50YXBwZWQgcG90ZW50aWFsIGFuZCBjdXJyZW50bHksIHRoZSBzZXJ2aWNlcyBhcmUgbm90IGFmZm9yZGFibGUgYW5kIGFjY2Vzc2libGUgZm9yIGFsbC4gV2l0aCByaXNpbmcgb3V0LW9mLXBvY2tldCBleHBlbnNlcywgdGhlcmXigJlzIGEgbmVlZCB0byBwcm92aWRlIHF1YWxpdHkgaGVhbHRoY2FyZSBhdCBjb21wZXRpdGl2ZSBwcmljZXMgdGhhdCBjYW4gYmUgYWNjZXNzZWQgYnkgYW55b25lLCBhbnl3aGVyZS4gQXMgYSBHcm91cCwgd2Ugd2hvbGVoZWFydGVkbHkgc3VwcG9ydMKgZG9jcHJpbWUuY29t4oCZcyB2aXNpb24gdG8gcHJvdmlkZSBhIGN1c3RvbWl6ZWQgZXhwZXJpZW5jZSBhbmQgbWF4aW1pemUgaGVhbHRoIGJlbmVmaXRzIGZvciBldmVyeW9uZS7igJ08L3A+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1lZGlhLWNhcmQtY29udGVudFwiPjxzcGFuIGNsYXNzTmFtZT1cIm1lZGlhLWNhcmQtaGVhZGluZ1wiPkV4Y2l0ZWQgYWJvdXQgdGhlIGludmVzdG1lbnQswqBBc2hpc2ggR3VwdGEsIENFTyzCoGRvY3ByaW1lLmNvbcKgc2FpZCw8L3NwYW4+ICDigJxXZSBpbnRlbmQgdG8gdXNlIHRoZSBjYXBpdGFsIGluIHByb3ZpZGluZyBzZWFtbGVzcyB1c2VyIGV4cGVyaWVuY2UgYW5kIGJyaW5naW5nIGlubm92YXRpb24gaW4gdGhlIGhlYWx0aGNhcmUgc3BhY2UuIE91ciBmb2N1cyBpcyB0byBtYWtlIHRoZSBzZXJ2aWNlcyBtb3JlIGN1c3RvbWVyLWZyaWVuZGx5IGRyaXZlbiBieSB0cmFuc3BhcmVuY3ksIHRydXN0IGFuZCBzdXN0YWluYWJpbGl0eS7CoFdlIGFyZSBicmluZ2luZyBpbm5vdmF0aW9uIHRocm91Z2ggdXNlIG9mIHZhcmlvdXMgdGVjaG5vbG9neSB0b29scyBsaWtlIEFJLCBkYXRhIHNjaWVuY2UgYW5kIGRlZXAgYW5hbHl0aWNzLuKAnTwvcD5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWVkaWEtY2FyZC1jb250ZW50XCI+PHNwYW4gY2xhc3NOYW1lPVwibWVkaWEtY2FyZC1oZWFkaW5nXCI+SGUgZnVydGhlciBhZGRlZCw8L3NwYW4+XCJPdXIgY29yZSBvZmZlcmluZ3MgaW5jbHVkZSBmcmVlIGNvbnN1bHRhdGlvbiBzZXJ2aWNlcyB0aHJvdWdoIGNoYXQgYW5kIHBob25lIGZyb20gb3VyIGluLWhvdXNlIGRvY3RvcnMsIGFuZCBkaXNjb3VudGVkwqBkb2N0b3IgYW5kIGxhYiBhcHBvaW50bWVudCBib29raW5nc8KgdG8gZW5jb3VyYWdlIGNvbnN1bWVycyBpbiBzZWVraW5nIGV4cGVydCBtZWRpY2FsIGFkdmljZSBhbmQgZ2V0dGluZyByaWdodCBzb2x1dGlvbnMgaW4gYSB0aW1lbHkgbWFubmVyLsKgU29vbiwgd2Ugd2lsbCBhbHNvIGJyaW5nIGEgdW5pcXVlIE9QRCBzdWJzY3JpcHRpb24tYmFzZWQgcHJvZHVjdCwgd2hpY2ggd2lsbCBjb3ZlciB1bmxpbWl0ZWQgY29uc3VsdGF0aW9ucyBhbmQgZGlhZ25vc3RpYyB0ZXN0cy5cIjwvcD5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWVkaWEtY2FyZC1jb250ZW50XCI+ZG9jcHJpbWUuY29twqBoYXMgdGllZC11cCB3aXRoIDE0LDAwMCBkb2N0b3JzIGFuZCA1LDAwMCBkaWFnbm9zdGljIGxhYnMgYXQgcHJlc2VudCBhbmQgYWltcyB0byBleHBhbmQgaXRzIG5ldHdvcmsgdG8gMSw1MCwwMDAgZG9jdG9ycyBhbmQgMjAsMDAwIGxhYnMgYWNyb3NzIDEwMCsgY2l0aWVzLiBDdXJyZW50bHksIGFwcG9pbnRtZW50cyBjYW4gYmUgYm9va2VkIHdpdGggZG9jdG9ycyBhbmQgbGFicyBiYXNlZCBpbiBEZWxoaS1OQ1IgYnV0IGZyb20gbmV4dCBtb250aCBvbndhcmRzLCB0aGUgZmFjaWxpdHkgd2lsbCBiZSBtYWRlIGF2YWlsYWJsZSBhY3Jvc3MgYWxsIG1ham9yIGNpdGllcyBpbmNsdWRpbmcgTXVtYmFpLCBCYW5nYWxvcmUsIEh5ZGVyYWJhZCAmIENoZW5uYWnCoDwvcD5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWVkaWEtY2FyZC1jb250ZW50XCI+PHNwYW4gY2xhc3NOYW1lPVwibWVkaWEtY2FyZC1oZWFkaW5nXCI+QWJvdXTCoGRvY3ByaW1lLmNvbTwvc3Bhbj48L3A+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1lZGlhLWNhcmQtY29udGVudFwiPmRvY3ByaW1lLmNvbcKgaXMgdGhlIGxhdGVzdCB2ZW50dXJlIGJ5IHRoZSBQb2xpY3liYXphYXIgR3JvdXAgd2l0aCBhbiBhaW0gdG8gcmVkZWZpbmUgaG93IEluZGlhbnMgc2VlayBoZWFsdGhjYXJlIHNlcnZpY2VzLiBJdCBjb25uZWN0cyBwYXRpZW50cyB3aXRoIGRvY3RvcnMgaW4gcmVhbCB0aW1lIGFuZCBicmlkZ2VzIHRoZSBnYXAgYmV0d2VlbiBuZWVkIGFuZCBmdWxmaWxsbWVudCB1c2luZyBzdGF0ZS1vZi10aGUtYXJ0IHRlY2hub2xvZ3kgYW5kIGEgcm9idXN0IG9mZmxpbmUgbmV0d29yay4gQmVzaWRlcyBwcm92aWRpbmcgZnJlZSBjb25zdWx0YXRpb24gb24gY2hhdCBhbmQgcGhvbmUgYnkgaW4taG91c2UgdGVhbSBvZiBoZWFsdGggZXhwZXJ0cywgaXQgYWxzbyBmYWNpbGl0YXRlcyBib29raW5nIG9mIGRvY3RvciBhcHBvaW50bWVudHMgYW5kIGxhYiB0ZXN0cyBhdCBkaXNjb3VudGVkIHJhdGVzIGFuZCB3aWxsIHNvb24gYmUgZ2l2aW5nIHRoZSBvcHRpb24gb2YgT1BEIHN1YnNjcmlwdGlvbiBwYWNrYWdlcyB3aXRoIHVubGltaXRlZCBjb25zdWx0YXRpb25zIGFuZCB0ZXN0cy4gVGhlIGNvbXBhbnkgaXMgdGFyZ2V0aW5nIDEgbWlsbGlvbiBmcmVlIG1lZGljYWwgY29uc3VsdGF0aW9ucyBieSBNYXJjaCAyMDE5IGFuZCB1cCB0byA1IG1pbGxpb24gYnkgTWFyY2ggMjAyMC48L3A+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1lZGlhLWNhcmQtY29udGVudFwiPjxzcGFuIGNsYXNzTmFtZT1cIm1lZGlhLWNhcmQtaGVhZGluZ1wiPkFib3V0IEVUZWNoQWNlc8KgTWFya2V0aW5nICYgQ29uc3VsdGluZyBQdnQuIEx0ZC48L3NwYW4+PC9wPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtZWRpYS1jYXJkLWNvbnRlbnRcIj5FVGVjaEFjZXMgaXMgdGhlIHBhcmVudCBjb21wYW55IHRoYXQgaG9sZHMgSW5kaWHigJlzIGxlYWRpbmcgaW5zdXJ0ZWNoIGJyYW5kLCBQb2xpY3liYXphYXIuY29tIGFuZCBsZWFkaW5nIGxlbmRpbmcgbWFya2V0cGxhY2UsIFBhaXNhYmF6YWFyLmNvbS4gVGhlIGNvbXBhbnkgaGFzIGJhY2tpbmcgZnJvbSBhIGhvc3Qgb2YgaW52ZXN0b3JzIGluY2x1ZGluZyB0aGUgbGlrZXMgb2YgU29mdGJhbmssIFRlbWFzZWssIFRpZ2VyIEdsb2JhbCBNYW5hZ2VtZW50LCBUcnVlIE5vcnRoLCBJbmZvRWRnZSAoTmF1a3JpLmNvbSksIFByZW1qaSBJbnZlc3QsIGJlc2lkZXMgaW52ZXN0bWVudHMgZnJvbSBvdGhlciBQRSBmdW5kcyBhbmQgZmFtaWx5IG9mZmljZXMuPC9wPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtZWRpYS1jYXJkLWNvbnRlbnRcIj5FVGVjaEFjZXMgc3RhcnRlZCBQb2xpY3liYXphYXIuY29tIHdpdGggYSBwdXJwb3NlIHRvIGVkdWNhdGUgcGVvcGxlIG9uIGluc3VyYW5jZSBwcm9kdWN0cyBhbmQgaGFzIHRyYW5zZm9ybWVkIHRoZSB3YXkgaG93IGluc3VyYW5jZSBpcyBib3VnaHQgaW4gdGhlIGNvdW50cnkuIEZyb20gcmVjZWl2aW5nIHRyYWZmaWMgb2YgMTgwLDAwMCB2aXNpdG9ycyBpbiAyMDA4LCBQb2xpY3liYXphYXIuY29tIGhhcyBjb21lIGEgbG9uZyB3YXkgYW5kIHRvZGF5LCBob3N0cyBvdmVyIDEwMCBtaWxsaW9uIHZpc2l0b3JzIHllYXJseSBhbmQgcmVjb3JkcyBzYWxlIG9mIG5lYXJseSAzMDAsMDAwIHRyYW5zYWN0aW9ucyBhIG1vbnRoLiBDdXJyZW50bHksIFBvbGljeWJhemFhci5jb20gYWNjb3VudHMgZm9yIG5lYXJseSAyNSUgb2YgSW5kaWHigJlzIGxpZmUgY292ZXIuPC9wPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtZWRpYS1jYXJkLWNvbnRlbnRcIj5JbiAyMDE0LCBFVGVjaEFjZXMgc3RhcnRlZCBQYWlzYWJhemFhci5jb20sIGFuIG9ubGluZSBmaW5hbmNpYWwgbWFya2V0cGxhY2UgZm9yIGludmVzdG1lbnQgYW5kIGxlbmRpbmcgcHJvZHVjdHMuIFRvZGF5LCBQYWlzYWJhemFhci5jb20gaXMgSW5kaWHigJlzIGxhcmdlc3Qgb25saW5lIGZpbmFuY2lhbCBtYXJrZXRwbGFjZSBmb3IgbG9hbnMgYW5kIGNyZWRpdCBjYXJkcy4gSXQgaGFzIGNvbGxhYm9yYXRlZCB3aXRoIG1vcmUgdGhhbiA3NSBwYXJ0bmVycyBhY3Jvc3MgbGVuZGluZyBhbmQgaW52ZXN0bWVudCBjYXRlZ29yaWVzIHdpdGggMzAwKyBwcm9kdWN0cyBvbiBvZmZlci7CoMKgPC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtMTJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtc3RpY2t5LWRpdlwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInR3aXR0ZXItZmVlZFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzPVwidHdpdHRlci10aW1lbGluZVwiIHJlbD1cIm5vZm9sbG93XCIgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vRG9jUHJpbWVJbmRpYT9yZWZfc3JjPXR3c3JjJTVFdGZ3XCI+VHdlZXRzIGJ5IGRvY3ByaW1lSW5kaWE8L2E+IDxzY3JpcHQgYXN5bmMgc3JjPVwiaHR0cHM6Ly9wbGF0Zm9ybS50d2l0dGVyLmNvbS93aWRnZXRzLmpzXCIgY2hhcnNldD1cInV0Zi04XCI+PC9zY3JpcHQ+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZhY2Vib29rLWZlZWRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9wbHVnaW5zL3BhZ2UucGhwP2hyZWY9aHR0cHMlM0ElMkYlMkZ3d3cuZmFjZWJvb2suY29tJTJGRG9jUHJpbWVJbmRpYSZ0YWJzPXRpbWVsaW5lJndpZHRoPTM0MCZoZWlnaHQ9NTAwJnNtYWxsX2hlYWRlcj10cnVlJmFkYXB0X2NvbnRhaW5lcl93aWR0aD10cnVlJmhpZGVfY292ZXI9dHJ1ZSZzaG93X2ZhY2VwaWxlPXRydWUmYXBwSWRcIiB3aWR0aD17MzQwfSBoZWlnaHQ9ezUwMH0gc3R5bGU9e3sgYm9yZGVyOiAnbm9uZScsIG92ZXJmbG93OiAnaGlkZGVuJyB9fSBzY3JvbGxpbmc9XCJub1wiIGZyYW1lQm9yZGVyPXswfSBhbGxvd1RyYW5zcGFyZW5jeT1cInRydWVcIiBhbGxvdz1cImVuY3J5cHRlZC1tZWRpYVwiIC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLWxnLTMgZC1sZy1ub25lXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLXN0aWNreS1kaXZcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZWRpYS1jb250YWN0LWRpdlwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtY29udGFjdC1sYWJlbC1kaXZcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1lZGlhLWNvbnRhY3QtbGFiZWxcIj5Db250YWN0IFVzPC9wPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtY29udGFjdC1pdGVtcy1kaXZcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtY29udGFjdC1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtY29udGFjdC1zdWJpdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9tZWRpYS9lbWFpbC1pY29uLnN2Z1wifSBzdHlsZT17eyB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyB9fSBjbGFzc05hbWU9XCJtZWRpYS1jb250YWN0LWljb25cIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZWRpYS1jb250YWN0LXN1Yml0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtZWRpYS1jb250YWN0LXRleHRcIj5tZWRpYUBkb2NwcmltZS5jb208L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWNvbnRhY3QtaXRlbSBtZWRpYS1sb2NhdGlvbi1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtY29udGFjdC1zdWJpdGVtIG1lZGlhLWxvY2F0aW9uLXN1Yml0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL21lZGlhL21lZGlhLWxvYy5zdmdcIn0gY2xhc3NOYW1lPVwibWVkaWEtY29udGFjdC1pY29uXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtY29udGFjdC1zdWJpdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWVkaWEtY29udGFjdC10ZXh0XCI+UGxvdCBubzwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtZWRpYS1jb250YWN0LXRleHRcIj4xMTksIFNlY3RvciA0NDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtZWRpYS1jb250YWN0LXRleHRcIj5HdXJ1Z3JhbSAtIDEyMjAwMTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTWVkaWFcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVsbWV0VGFncyBmcm9tICcuLi9IZWxtZXRUYWdzJ1xuXG5jbGFzcyBQcml2YWN5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBhYm91dC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8SGVsbWV0VGFncyB0YWdzRGF0YT17e1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogKCdQcml2YWN5IFBvbGljeSB8IGRvY3ByaW1lJyksXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAoJ1RoZSBwb2xpY3kgaXMgZWZmZWN0aXZlIGZyb20gdGhlIGRhdGUgYW5kIHRpbWUgYSB1c2VyIHJlZ2lzdGVycyB3aXRoIGRvY3ByaW1lIGJ5IGZpbGxpbmcgdXAgdGhlIFJlZ2lzdHJhdGlvbiBmb3JtIGFuZCBhY2NlcHRpbmcgdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zLicpXG4gICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGFib3V0LWhlYWRpbmdcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19PlByaXZhY3kgUG9saWN5PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBwcml2YWN5LWRlc2MtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj5kb2NwcmltZS5jb20gKOKAnFdlYnNpdGUvTW9iaWxlIEFwcGxpY2F0aW9u4oCdKSBvcGVyYXRlZCBieSBkb2NwcmltZSBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICjigJxDb21wYW55L3dlL3Vz4oCdKSByZWNvZ25pemVzIHRoZSBpbXBvcnRhbmNlIG9mIG1haW50YWluaW5nIHlvdXIgcHJpdmFjeS4gVGhlIENvbXBhbnkgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWl0dGVkIHRvIG1haW50YWluIHRoZSBjb25maWRlbnRpYWxpdHksIGludGVncml0eSBhbmQgc2VjdXJpdHkgb2YgYWxsIGluZm9ybWF0aW9uIG9mIG91ciB1c2Vycy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBQcml2YWN5IFBvbGljeSBleHBsYWlucyBob3cgd2UgY29sbGVjdCwgdXNlLCBzaGFyZSwgZGlzY2xvc2UgYW5kIHByb3RlY3QgUGVyc29uYWwgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvdXQgdGhlIFVzZXJzIG9mIHRoZSBTZXJ2aWNlcywgaW5jbHVkaW5nIGFuZCB0aGUgdmlzaXRvcnMgb2YgV2Vic2l0ZSAoam9pbnRseSBhbmQgc2V2ZXJhbGx5IHJlZmVycmVkXG4gICAgICAgICAgICAgIHRvIGFzIOKAnHlvdeKAnSBvciDigJxVc2Vyc+KAnSBpbiB0aGlzIFByaXZhY3kgUG9saWN5KS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj5UaGlzIFByaXZhY3kgUG9saWN5IGlzIHB1Ymxpc2hlZCBpbiBjb21wbGlhbmNlIG9mIHRoZSAoSW5kaWFuKSBJbmZvcm1hdGlvbiBUZWNobm9sb2d5IEFjdCwgMjAwMCBhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIHJ1bGVzLCByZWd1bGF0aW9ucywgZ3VpZGVsaW5lcyBhbmQgY2xhcmlmaWNhdGlvbnMgZnJhbWVkIHRoZXJldW5kZXIsIGluY2x1ZGluZyB0aGUgKEluZGlhbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mb3JtYXRpb24gVGVjaG5vbG9neSAoUmVhc29uYWJsZSBTZWN1cml0eSBQcmFjdGljZXMgYW5kIFByb2NlZHVyZXMgYW5kIFNlbnNpdGl2ZSBQZXJzb25hbFxuICAgICAgICAgICAgICBJbmZvcm1hdGlvbikgUnVsZXMsIDIwMTEgKFNQSSBSdWxlcykuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+UGxlYXNlIHJlYWQgdGhpcyBwcml2YWN5IHBvbGljeSBjYXJlZnVsbHkgYW5kIHNlZSBiZWxvdyBmb3IgZGV0YWlscyBvbiB3aGF0IHR5cGUgb2YgaW5mb3JtYXRpb24gd2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF5IGNvbGxlY3QgZnJvbSB5b3UsIGhvdyB0aGF0IGluZm9ybWF0aW9uIGlzIHVzZWQgaW4gY29ubmVjdGlvbiB3aXRoIHRoZSBzZXJ2aWNlcyBvZmZlcmVkIHRocm91Z2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3VyIFdlYnNpdGUgYW5kIHNoYXJlZCB3aXRoIG91ciBidXNpbmVzcyBwYXJ0bmVycy4gVGhpcyBQcml2YWN5IFBvbGljeSBhcHBsaWVzIHRvIGN1cnJlbnQgYW5kXG4gICAgICAgICAgICAgIGZvcm1lciB2aXNpdG9ycyBhbmQgY3VzdG9tZXJzIHRvIHRoZSBXZWJzaXRlLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiPkJ5IHZpc2l0aW5nIGFuZC9vciBhY2Nlc3NpbmcgdGhlIFdlYnNpdGUsIHlvdSBhZ3JlZSB0byB0aGlzIFByaXZhY3kgUG9saWN5LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzYy1zdWJoZWFkaW5nXCI+MS4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtDT0xMRUNUSU9OIE9GIFBFUlNPTkFMIElORk9STUFUSU9OPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+V2hlbiB5b3UgYWNjZXNzIHRoZSBTZXJ2aWNlcywgb3IgdGhyb3VnaCBhbnkgaW50ZXJhY3Rpb24gd2l0aCB1cyB2aWEgZW1haWxzLCB0ZWxlcGhvbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbHMgb3Igb3RoZXIgY29ycmVzcG9uZGVuY2UsIHdlIG1heSBhc2sgeW91IHRvIHZvbHVudGFyaWx5IHByb3ZpZGUgdXMgd2l0aCBjZXJ0YWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluZm9ybWF0aW9uIHRoYXQgcGVyc29uYWxseSBpZGVudGlmaWVzIHlvdSBvciBjb3VsZCBiZSB1c2VkIHRvIHBlcnNvbmFsbHkgaWRlbnRpZnkgeW91LiBZb3VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVyZWJ5IGNvbnNlbnQgdG8gdGhlIGNvbGxlY3Rpb24gb2Ygc3VjaCBpbmZvcm1hdGlvbiBieSB0aGUgQ29tcGFueS4gV2l0aG91dCBwcmVqdWRpY2UgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGdlbmVyYWxpdHkgb2YgdGhlIGFib3ZlLCBpbmZvcm1hdGlvbiBjb2xsZWN0ZWQgYnkgdXMgZnJvbSB5b3UgbWF5IGluY2x1ZGUgKGJ1dCBpcyBub3RcbiAgICAgICAgICAgICAgbGltaXRlZCB0bykgdGhlIGZvbGxvd2luZzo8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwic3ViLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Y29udGFjdCBkYXRhIChzdWNoIGFzIHlvdXIgZnVsbCBuYW1lLCBlbWFpbCBhZGRyZXNzIGFuZCBwaG9uZSBudW1iZXIpOzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPmRlbW9ncmFwaGljIGRhdGEgKHN1Y2ggYXMgeW91ciBnZW5kZXIsIHlvdXIgZGF0ZSBvZiBiaXJ0aCBhbmQgeW91ciBwaW4gY29kZSk7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+ZGF0YSByZWdhcmRpbmcgeW91ciB1c2FnZSBvZiB0aGUgc2VydmljZXMgYW5kIGhpc3Rvcnkgb2YgdGhlIGFwcG9pbnRtZW50cyBtYWRlIGJ5IG9yIHdpdGhcbiAgICAgICAgICAgICAgICB5b3UgdGhyb3VnaCB0aGUgdXNlIG9mIFNlcnZpY2VzOzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPmRhdGEgcmVnYXJkaW5nIHlvdXIgbWVkaWNhbCByZWNvcmRzIGhpc3Rvcnk7IGFuZCBpbnN1cmFuY2UgZGF0YTs8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5vdGhlciBpbmZvcm1hdGlvbiB0aGF0IHlvdSB2b2x1bnRhcmlseSBjaG9vc2UgdG8gcHJvdmlkZSB0byB1cyAoc3VjaCBhcyBpbmZvcm1hdGlvbiBzaGFyZWRcbiAgICAgICAgICAgICAgICBieSB5b3Ugd2l0aCB1cyB0aHJvdWdoIGVtYWlscyBvciBsZXR0ZXJzKS48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiPlRoZSBpbmZvcm1hdGlvbiBjb2xsZWN0ZWQgZnJvbSB5b3UgYnkgdGhlIENvbXBhbnkgbWF5IGNvbnN0aXR1dGUg4oCYcGVyc29uYWwgaW5mb3JtYXRpb27igJlcbiAgICAgICAgICAgICAgb3Ig4oCYc2Vuc2l0aXZlIHBlcnNvbmFsIGRhdGEgb3IgaW5mb3JtYXRpb27igJkgdW5kZXIgdGhlIFNQSSBSdWxlcy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj48c3Bhbj7igJxQZXJzb25hbCBJbmZvcm1hdGlvbuKAnTwvc3Bhbj4gaXMgZGVmaW5lZCB1bmRlciB0aGUgU1BJIFJ1bGVzIHRvIG1lYW4gYW55IGluZm9ybWF0aW9uIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRlcyB0byBhIG5hdHVyYWwgcGVyc29uLCB3aGljaCwgZWl0aGVyIGRpcmVjdGx5IG9yIGluZGlyZWN0bHksIGluIGNvbWJpbmF0aW9uIHdpdGggb3RoZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mb3JtYXRpb24gYXZhaWxhYmxlIG9yIGxpa2VseSB0byBiZSBhdmFpbGFibGUgdG8gYSBib2R5IGNvcnBvcmF0ZSwgaXMgY2FwYWJsZSBvZiBpZGVudGlmeWluZ1xuICAgICAgICAgICAgICBzdWNoIHBlcnNvbi48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj5UaGUgU1BJIFJ1bGVzIGZ1cnRoZXIgZGVmaW5lIOKAnFNlbnNpdGl2ZSBQZXJzb25hbCBEYXRhIG9yIEluZm9ybWF0aW9u4oCdIG9mIGEgcGVyc29uIHRvIG1lYW5cbiAgICAgICAgICAgICAgcGVyc29uYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhhdCBwZXJzb24gcmVsYXRpbmcgdG86PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cInN1Yi1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPnBhc3N3b3Jkczs8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5maW5hbmNpYWwgaW5mb3JtYXRpb24gc3VjaCBhcyBiYW5rIGFjY291bnRzLCBjcmVkaXQgYW5kIGRlYml0IGNhcmQgZGV0YWlscyBvciBvdGhlclxuICAgICAgICAgICAgICAgIHBheW1lbnQgaW5zdHJ1bWVudCBkZXRhaWxzOzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPnBoeXNpY2FsLCBwaHlzaW9sb2dpY2FsIGFuZCBtZW50YWwgaGVhbHRoIGNvbmRpdGlvbjs8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5zZXh1YWwgb3JpZW50YXRpb247PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+bWVkaWNhbCByZWNvcmRzIGFuZCBoaXN0b3J5OzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPmJpb21ldHJpYyBpbmZvcm1hdGlvbjs8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5pbmZvcm1hdGlvbiByZWNlaXZlZCBieSBib2R5IGNvcnBvcmF0ZSB1bmRlciBsYXdmdWwgY29udHJhY3Qgb3Igb3RoZXJ3aXNlOzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPnZpc2l0b3IgZGV0YWlscyBhcyBwcm92aWRlZCBhdCB0aGUgdGltZSBvZiByZWdpc3RyYXRpb24gb3IgdGhlcmVhZnRlcjsgYW5kPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Y2FsbCBkYXRhIHJlY29yZHMuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj5UbyB0aGUgZXh0ZW50IG5lY2Vzc2FyeSB0byBwcm92aWRlIFVzZXJzIHdpdGggdGhlIFNlcnZpY2VzLCBvZmZlcnMgYW5kIHByb21vdGlvbnMgdGhyb3VnaFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgV2Vic2l0ZSwgQ29tcGFueSBtYXkgcHJvdmlkZSB5b3VyIFBlcnNvbmFsIEluZm9ybWF0aW9uIHRvIHRoaXJkIHBhcnR5KGllcykgd2hvIHdvcmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb24gYmVoYWxmIG9mIG9yIHdpdGggQ29tcGFueSB0byBwcm92aWRlIHRoZSBVc2VycyB3aXRoIHN1Y2ggU2VydmljZXMsIG9mZmVycyBhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbW90aW9ucywgdG8gaGVscCBDb21wYW55IGNvbW11bmljYXRlIHdpdGggVXNlcnMgb3IgdG8gbWFpbnRhaW4gdGhlIFdlYnNpdGUuIEluIHN1Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2lyY3Vtc3RhbmNlcywgeW91IGNvbnNlbnQgdG8gdXMgZGlzY2xvc2luZyB5b3VyIFBlcnNvbmFsIEluZm9ybWF0aW9uIHRvIHN1Y2ggdGhpcmQgcGFydGllc1xuICAgICAgICAgICAgICBhbmQgY29udHJhY3RvcnMsIHNvbGVseSBmb3IgdGhlIGludGVuZGVkIHB1cnBvc2VzIG9ubHkuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+SG93ZXZlciwgQ29tcGFueSB3aWxsIGJlIGZyZWUgdG8gdXNlLCBjb2xsZWN0IGFuZCBkaXNjbG9zZSBpbmZvcm1hdGlvbiB0aGF0IGlzIGZyZWVseVxuICAgICAgICAgICAgICBhdmFpbGFibGUgYWJvdXQgeW91IGluIHRoZSBwdWJsaWMgZG9tYWluIHdpdGhvdXQgeW91ciBjb25zZW50LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzYy1zdWJoZWFkaW5nXCI+Mi4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtDT05UUk9MTEVSUyBPRiBQRVJTT05BTCBJTkZPUk1BVElPTjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiPllvdXIgcGVyc29uYWwgZGF0YSB3aWxsIGJlIHN0b3JlZCBhbmQgY29sbGVjdGVkIGJ5IGRvY3ByaW1lIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQgYW5kIHdpdGggaXRzIHBhcmVudCBjb21wYW55IEV0ZWNoYWNlcyBNYXJrZXRpbmcgYW5kIENvbnN1bHRpbmcgUHJpdmF0ZSBMaW1pdGVkLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzYy1zdWJoZWFkaW5nXCI+My4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtQVVJQT1NFUyBPRiBDT0xMRUNUSU9OIE9GIFlPVVIgREFUQTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiPkNvbXBhbnkgY29sbGVjdHMgeW91ciBpbmZvcm1hdGlvbiB3aGVuIHlvdSByZWdpc3RlciBmb3IgYW4gYWNjb3VudCwgd2hlbiB5b3UgdXNlIGl0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cyBvciBzZXJ2aWNlcywgdmlzaXQgaXRzIFdlYnNpdGUncyBwYWdlcywgYW5kIHdoZW4geW91IGVudGVyIHlvdXIgZGV0YWlscyBmb3IgcmVjZWl2aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb21vdGlvbnMgb3Igb2ZmZXJzIGFzIGZlYXR1cmVkIG9uIG9yIG9mZmVyZWQgYnkgdGhlIFdlYnNpdGUuIFdoZW4geW91IHJlZ2lzdGVyIHdpdGggdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFdlYnNpdGUsIHlvdSBhcmUgYXNrZWQgZm9yIHlvdXIgZmlyc3QgbmFtZSwgbGFzdCBuYW1lLCBzdGF0ZSBhbmQgY2l0eSBvZiByZXNpZGVuY2UsIGVtYWlsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3MsIGRhdGUgb2YgYmlydGgsIGFuZCBzZXggZXRjLiBPbmNlIHlvdSByZWdpc3RlciBhdCB0aGUgV2Vic2l0ZSBhbmQgc2lnbiBpbiB5b3UgYXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5vdCBhbm9ueW1vdXMgdG8gdXMuIEFsc28sIHlvdSBhcmUgYXNrZWQgZm9yIHlvdXIgY29udGFjdCBudW1iZXIgZHVyaW5nIHJlZ2lzdHJhdGlvbiBhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF5IGJlIHNlbnQgU01TKHMpLCBub3RpZmljYXRpb25zIGFib3V0IG91ciBzZXJ2aWNlcy4gRnVydGhlciwgc29tZSBmZWF0dXJlcyBvZiB0aGlzIFdlYnNpdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3Igb3VyIFNlcnZpY2VzIHdpbGwgcmVxdWlyZSB5b3UgdG8gZnVybmlzaCB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIGFzIHByb3ZpZGVkIGJ5IHlvdVxuICAgICAgICAgICAgICB1bmRlciB5b3VyIGFjY291bnQgc2VjdGlvbiBvbiBvdXIgV2Vic2l0ZS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj5IZW5jZSwgYnkgcmVnaXN0ZXJpbmcgeW91IGF1dGhvcml6ZSB0aGUgQ29tcGFueSB0byBzZW5kIHRleHRzIGFuZCBlbWFpbCBhbGVydHMgdG8geW91IHdpdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeW91ciBsb2dpbiBkZXRhaWxzIGFuZCBhbnkgb3RoZXIgc2VydmljZSByZXF1aXJlbWVudHMsIGluY2x1ZGluZyBwcm9tb3Rpb25hbCBtYWlscyBhbmRcbiAgICAgICAgICAgICAgU01Tcy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj5GdXJ0aGVyLCBJbiBvcmRlciB0byBhdmFpbCBzb21lIG9mIHRoZSBTZXJ2aWNlcywgdGhlIFVzZXJzIG1heSBiZSByZXF1aXJlZCB0byB1cGxvYWQgY29waWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9mIHRoZWlyIHByZXNjcmlwdGlvbnMsIG9uIHRoZSBXZWJzaXRlIGFuZC8gb3IgZS1tYWlsIHRoZSBzYW1lIHRvIENvbXBhbnkgaW4gYWNjb3JkYW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoIHRoZSBUZXJtcyBvZiBVc2UgYW5kIHRoZSBwcmVzY3JpcHRpb25zIHdpbGwgYmUgc3RvcmVkLyBkaXNjbG9zZWQgYnkgQ29tcGFueSBvbmx5IGluXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBtYW5uZXIgc3BlY2lmaWVkIGluIHRoaXMgUHJpdmFjeSBQb2xpY3kgYW5kIHRoZSBUZXJtcyBvZiBVc2UuIFRoZSB0ZXJtIHBlcnNvbmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluZm9ybWF0aW9uL2RhdGEgc2hhbGwgYWxzbyBpbmNsdWRlIGFueSBzdWNoIHByZXNjcmlwdGlvbnMgdXBsb2FkZWQgb3Igb3RoZXJ3aXNlIHByb3ZpZGVkXG4gICAgICAgICAgICAgIGJ5IFVzZXJzLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiPkZ1cnRoZXJtb3JlLCBDb21wYW55IG1heSBrZWVwIHJlY29yZHMgb2YgdGVsZXBob25lIGNhbGxzIHJlY2VpdmVkIGFuZCBtYWRlIGZvciBtYWtpbmdcbiAgICAgICAgICAgICAgaW5xdWlyaWVzLCBvcmRlcnMsIG9yIG90aGVyIHB1cnBvc2VzIGZvciB0aGUgcHVycG9zZSBvZiBhZG1pbmlzdHJhdGlvbiBvZiBTZXJ2aWNlcy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj5XZSB1c2UgeW91ciBpbmZvcm1hdGlvbiBpbiBvcmRlciB0bzo8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibXJ0LTEwXCIgc3R5bGU9e3sgbGlzdFN0eWxlOiAnZGlzYycsIHBhZGRpbmdMZWZ0OiA0MCwgdGV4dEFsaWduOiAnbGVmdCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1yYi0xMFwiPlJlZ2lzdGVyIHlvdSBhcyBjdXN0b21lci91c2VyIG9uIHRoZSBXZWJzaXRlOzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1yYi0xMFwiPkRlYWxpbmcgd2l0aCByZXF1ZXN0cywgZW5xdWlyaWVzIG9yIGNvbXBsYWludHMgYW5kIG90aGVyIGN1c3RvbWVyIGNhcmUgcmVsYXRlZCBhY3Rpdml0aWVzOyBhbmQgYWxsIG90aGVyIGdlbmVyYWwgYWRtaW5pc3RyYXRpdmUgYW5kIGJ1c2luZXNzIHB1cnBvc2VzLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1yYi0xMFwiPlByb2Nlc3MgeW91ciBvcmRlcnMgb3IgYXBwbGljYXRpb25zIGFuZCBwcm92aXNpb24gb2YgcHJvZHVjdHMgYW5kIHNlcnZpY2VzLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1yYi0xMFwiPkFkbWluaXN0ZXIgb3Igb3RoZXJ3aXNlIGNhcnJ5IG91dCBvdXIgb2JsaWdhdGlvbnMgaW4gcmVsYXRpb24gdG8gYW55IGFncmVlbWVudCB3aXRoXG4gICAgICAgICAgICAgICAgb3VyIGJ1c2luZXNzIHBhcnRuZXJzL2NvbnRyYWN0b3JzOzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1yYi0xMFwiPlJlc2VhcmNoIGFuZCBkZXZlbG9wbWVudCBhbmQgZm9yIFVzZXIgYWRtaW5pc3RyYXRpb24gKGluY2x1ZGluZyBjb25kdWN0aW5nIFVzZXJcbiAgICAgICAgICAgICAgICBzdXJ2ZXlzKTs8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtcmItMTBcIj5UZWNobmljYWwgYWRtaW5pc3RyYXRpb24gYW5kIGN1c3RvbWl6YXRpb24gb2YgV2Vic2l0ZTs8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtcmItMTBcIj5UbyBzZW5kIHlvdSBpbmZvcm1hdGlvbiBhYm91dCBzcGVjaWFsIHByb21vdGlvbnMgb3Igb2ZmZXJzIChlaXRoZXIgb2ZmZXJlZCBieSB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbXBhbnkgb3IgYnkgaXRzIGJ1c2luZXNzIHBhcnRuZXJzKS4gV2UgbWlnaHQgYWxzbyB0ZWxsIHlvdSBhYm91dCBuZXcgZmVhdHVyZXMgb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzLiBUaGVzZSBtaWdodCBiZSBvdXIgb3duIG9mZmVycyBvciBwcm9kdWN0cywgb3IgdGhpcmQtcGFydHkgb2ZmZXJzIG9yXG4gICAgICAgICAgICAgICAgcHJvZHVjdHMgd2l0aCB3aG9tIENvbXBhbnkgaGFzIGEgdGllLXVwOzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1yYi0xMFwiPkltcHJvdmVtZW50IG9mIFNlcnZpY2VzIGFuZCBmZWF0dXJlcyBvbiB0aGUgV2Vic2l0ZS4gSW4gdGhpcyByZWdhcmQsIHdlIG1heVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tYmluZSBpbmZvcm1hdGlvbiB3ZSBnZXQgZnJvbSB5b3Ugd2l0aCBpbmZvcm1hdGlvbiBhYm91dCB5b3Ugd2UgZ2V0IGZyb20gdGhpcmRcbiAgICAgICAgICAgICAgICBwYXJ0aWVzLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1yYi0xMFwiPnRvIHNlbmQgeW91IG5vdGljZXMsIGNvbW11bmljYXRpb25zLCBvZmZlciBhbGVydHMgcmVsZXZhbnQgdG8geW91ciB1c2Ugb2YgdGhlXG4gICAgICAgICAgICAgICAgU2VydmljZXMgb2ZmZXJlZCBvbiB0aGlzIFdlYnNpdGUuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXJiLTEwXCI+YXMgb3RoZXJ3aXNlIHByb3ZpZGVkIGluIHRoaXMgUHJpdmFjeSBQb2xpY3kuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2Mtc3ViaGVhZGluZ1wiPjQuJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7SU5GT1JNQVRJT04gU0hBUklORywgVFJBTlNGRVIgQU5EIERJU0NMT1NVUkU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwicHJpdmFjeS1vcmRlci1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktb3JkZXItaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZSBtYXkgbmVlZCB0byBkaXNjbG9zZS8gdHJhbnNmZXIgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbiB0byB0aGUgZm9sbG93aW5nIHRoaXJkIHBhcnRpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBwdXJwb3NlcyBtZW50aW9uZWQgaW4gdGhpcyBQcml2YWN5IFBvbGljeSBhbmQgdGhlIFRlcm1zIG9mIFVzZTpcbiAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwic3ViLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5UbyBidXNpbmVzcyBwYXJ0bmVycyBhbmQgb3RoZXIgc2VydmljZSBwcm92aWRlcnMgYXBwb2ludGVkIGJ5IHVzIGZvciB0aGUgcHVycG9zZSBvZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJyeWluZyBvdXQgc2VydmljZXMgb24gb3VyIGJlaGFsZiB1bmRlciBhIGNvbnRyYWN0LiBHZW5lcmFsbHkgdGhlc2UgcGFydGllcyBkbyBub3QgaGF2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnkgaW5kZXBlbmRlbnQgcmlnaHQgdG8gc2hhcmUgdGhpcyBpbmZvcm1hdGlvbiwgaG93ZXZlciBjZXJ0YWluIHBhcnRpZXMgd2hvIHByb3ZpZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZXMgb24gdGhlIFdlYnNpdGUsIGluY2x1ZGluZyBidXQgbm90IGxpbWl0ZWQgdG8gdGhlIHByb3ZpZGVycyBvZiBvbmxpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbXVuaWNhdGlvbnMgc2VydmljZXMsIHdpbGwgaGF2ZSByaWdodHMgdG8gdXNlIGFuZCBkaXNjbG9zZSB0aGUgcGVyc29uYWwgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGVkIGluIGNvbm5lY3Rpb24gd2l0aCB0aGUgcHJvdmlzaW9uIG9mIHRoZXNlIHNlcnZpY2VzIGluIGFjY29yZGFuY2Ugd2l0aCB0aGVpciBvd25cbiAgICAgICAgICAgICAgICAgICAgcHJpdmFjeSBwb2xpY2llcy48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlRvIG91ciBhZmZpbGlhdGVzIGluIEluZGlhIG9yIGluIG90aGVyIGNvdW50cmllcyB3aG8gbWF5IHVzZSBhbmQgZGlzY2xvc2UgeW91clxuICAgICAgICAgICAgICAgICAgICBpbmZvcm1hdGlvbiBmb3IgdGhlIHNhbWUgcHVycG9zZXMgYXMgdXMuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5XZSBtYXkgYWxzbyBzaGFyZSwgc2VsbCwgYW5kL29yIHRyYW5zZmVyIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24gdG8gYW55XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3Nvci1pbi1pbnRlcmVzdCBhcyBhIHJlc3VsdCBvZiBhIHNhbGUgb2YgYW55IHBhcnQgb2Ygb3VyIGJ1c2luZXNzIG9yIHVwb24gdGhlIG1lcmdlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVvcmdhbml6YXRpb24sIG9yIGNvbnNvbGlkYXRpb24gb2YgaXQgd2l0aCBhbm90aGVyIGVudGl0eSBvbiBhIGJhc2lzIHRoYXQgaXQgaXMgbm90IHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXJ2aXZpbmcgZW50aXR5LiBXZSBtYXkgYWxzbyBkaXNjbG9zZSBvciB0cmFuc2ZlciB5b3VyIEluZm9ybWF0aW9uLCB0byBhbm90aGVyIHRoaXJkIHBhcnR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzIHBhcnQgb2YgcmVvcmdhbml6YXRpb24gb3IgYSBzYWxlIG9mIHRoZSBhc3NldHMgb2YgYSBDb21wYW554oCZcyBjb3Jwb3JhdGlvbiBkaXZpc2lvbiBvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYW55LiBBbnkgdGhpcmQgcGFydHkgdG8gd2hpY2ggd2UgdHJhbnNmZXIgb3Igc2VsbCBvdXIgYXNzZXRzLCB3aWxsIGhhdmUgdGhlIHJpZ2h0IHRvXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlIHRvIHVzZSB0aGUgcGVyc29uYWwgZGF0YSBhbmQvIG9yIG90aGVyIGluZm9ybWF0aW9uIHRoYXQgeW91IGhhdmUgcHJvdmlkZWQgdG8gdXMuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5UbyBnb3Zlcm5tZW50IGluc3RpdHV0aW9ucy8gYXV0aG9yaXRpZXMgdG8gdGhlIGV4dGVudCByZXF1aXJlZCBhKSB1bmRlciB0aGUgbGF3cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXMsIGFuZCByZWd1bGF0aW9ucyBhbmQgb3IgdW5kZXIgb3JkZXJzIG9mIGFueSByZWxldmFudCBqdWRpY2lhbCBvciBxdWFzaS1qdWRpY2lhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3JpdHk7IGIpIHRvIHByb3RlY3QgYW5kIGRlZmVuZCB0aGUgcmlnaHRzIG9yIHByb3BlcnR5IG9mIHRoZSBDb21wYW55OyBjKSB0byBmaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmF1ZCBhbmQgY3JlZGl0IHJpc2s7IGQpIHRvIGVuZm9yY2Ugb3VyIFRlcm1zIG9mIFVzZSAodG8gd2hpY2ggdGhpcyBQcml2YWN5IFBvbGljeSBpcyBhbHNvIGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydCkgOyBvciBlKSB3aGVuIENvbXBhbnksIGluIGl0cyBzb2xlIGRpc2NyZXRpb24sIGRlZW1zIGl0IG5lY2Vzc2FyeSBpbiBvcmRlciB0byBwcm90ZWN0XG4gICAgICAgICAgICAgICAgICAgIGl0cyByaWdodHMgb3IgdGhlIHJpZ2h0cyBvZiBvdGhlcnMuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JZiBvdGhlcndpc2UgcmVxdWlyZWQgYnkgYW4gb3JkZXIgdW5kZXIgYW55IGxhdyBmb3IgdGhlIHRpbWUgYmVpbmcgaW4gZm9yY2UgaW5jbHVkaW5nIGluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlIHRvIGVucXVpcmllcyBieSBHb3Zlcm5tZW50IGFnZW5jaWVzIGZvciB0aGUgcHVycG9zZSBvZiB2ZXJpZmljYXRpb24gb2YgaWRlbnRpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yIGZvciBwcmV2ZW50aW9uLCBkZXRlY3Rpb24sIGludmVzdGlnYXRpb24gaW5jbHVkaW5nIGN5YmVyIGluY2lkZW50cywgcHJvc2VjdXRpb24sIGFuZFxuICAgICAgICAgICAgICAgICAgICBwdW5pc2htZW50IG9mIG9mZmVuY2VzLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+SW4gY2FzZSBvZiBhbnkgY29udGVzdHMgb3Igc3VydmV5cyBjb25kdWN0ZWQgYnkgdGhlIENvbXBhbnkgaW4gd2hpY2ggdGhlIHlvdVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZSwgeW91ciBpbmZvcm1hdGlvbiBtYXkgYmUgZGlzY2xvc2VkIHRvIHRoaXJkIHBhcnRpZXMsIGFsc28gYmUgZGlzY2xvc2VkIHRvIHRoaXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpZXMgdG8gdGhlIGV4dGVudCBuZWNlc3NhcnkgZm9yIGZ1bGZpbG1lbnQgb2YgYW55IG9mZmVyL3ZvdWNoZXJzIGV0Yy4gYW5kIG90aGVyXG4gICAgICAgICAgICAgICAgICAgIGFzcGVjdHMgb2Ygc3VjaCBjb250ZXN0IG9yIHNpbWlsYXIgb2ZmZXJpbmcuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LW9yZGVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2UgbWFrZSBhbGwgeW91ciBwZXJzb25hbCBJbmZvcm1hdGlvbiBhY2Nlc3NpYmxlIHRvIG91ciBlbXBsb3llZXMgYW5kIGRhdGEgcHJvY2Vzc29yc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmx5IG9uIGEgbmVlZC10by1rbm93IGJhc2lzLiBBbGwgb3VyIGVtcGxveWVlcyBhbmQgZGF0YSBwcm9jZXNzb3JzLCB3aG8gaGF2ZSBhY2Nlc3MgdG8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBhcmUgYXNzb2NpYXRlZCB3aXRoIHRoZSBwcm9jZXNzaW5nIG9mIHlvdXIgSW5mb3JtYXRpb24sIGFyZSBvYmxpZ2VkIHRvIHJlc3BlY3QgaXRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZGVudGlhbGl0eS5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1vcmRlci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vbi1wZXJzb25hbGx5IGlkZW50aWZpYWJsZSBpbmZvcm1hdGlvbiBtYXkgYmUgZGlzY2xvc2VkIHRvIHRoaXJkIHBhcnR5IGFkIHNlcnZlcnMsIGFkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFnZW5jaWVzLCB0ZWNobm9sb2d5IHZlbmRvcnMgYW5kIHJlc2VhcmNoIGZpcm1zIHRvIHNlcnZlIGFkdmVydGlzZW1lbnRzIHRvIHRoZSBVc2Vycy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tcGFueSBtYXkgYWxzbyBzaGFyZSBpdHMgYWdncmVnYXRlIGZpbmRpbmdzIChub3Qgc3BlY2lmaWMgaW5mb3JtYXRpb24pIGJhc2VkIG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZm9ybWF0aW9uIHJlbGF0aW5nIHRvIHlvdXIgaW50ZXJuZXQgdXNlIHRvIHByb3NwZWN0aXZlLCBpbnZlc3RvcnMsIHN0cmF0ZWdpYyBwYXJ0bmVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BvbnNvcnMgYW5kIG90aGVycyBpbiBvcmRlciB0byBoZWxwIGdyb3d0aCBvZiBvdXIgYnVzaW5lc3MuIFRoZXNlIGNvbXBhbmllcyBtYXkgdXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZm9ybWF0aW9uIChleGNsdWRpbmcgeW91ciBuYW1lLCBhZGRyZXNzLCBlbWFpbCBhZGRyZXNzLCBvciB0ZWxlcGhvbmUgbnVtYmVyKSBhYm91dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5b3VyIHZpc2l0cyB0byB0aGlzIFdlYnNpdGUgaW4gb3JkZXIgdG8gcHJvdmlkZSBhZHZlcnRpc2VtZW50cyBvbiB0aGlzIFdlYnNpdGUgYW5kIG90aGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXJkIHBhcnR5IHdlYnNpdGVzIGFib3V0IGdvb2RzIGFuZCBzZXJ2aWNlcyB0aGF0IG1heSBiZSBvZiBpbnRlcmVzdCB0byB5b3UuIFdlIHVzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlyZC1wYXJ0eSBzZXJ2aWNlIHByb3ZpZGVycyB0byBzZXJ2ZSBhZHMgb24gb3VyIGJlaGFsZiBhY3Jvc3MgdGhlIGludGVybmV0IGFuZCBzb21ldGltZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb24gdGhpcyBXZWJzaXRlLiBUaGV5IG1heSBjb2xsZWN0IGFub255bW91cyBpbmZvcm1hdGlvbiBhYm91dCB5b3VyIHZpc2l0cyB0byBXZWJzaXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgeW91ciBpbnRlcmFjdGlvbiB3aXRoIG91ciBwcm9kdWN0cyBhbmQgc2VydmljZXMuIFRoZXkgbWF5IGFsc28gdXNlIGluZm9ybWF0aW9uIGFib3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlvdXIgdmlzaXRzIHRvIHRoaXMgYW5kIG90aGVyIHdlYnNpdGVzIGZvciB0YXJnZXRlZCBhZHZlcnRpc2VtZW50cyBmb3IgZ29vZHMgYW5kIHNlcnZpY2VzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGFub255bW91cyBpbmZvcm1hdGlvbiBpcyBjb2xsZWN0ZWQgdGhyb3VnaCB0aGUgdXNlIG9mIGEgcGl4ZWwgdGFnLCB3aGljaCBpcyBpbmR1c3RyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFuZGFyZCB0ZWNobm9sb2d5IHVzZWQgYnkgbW9zdCBtYWpvciB3ZWJzaXRlcy4gTm8gcGVyc29uYWxseSBpZGVudGlmaWFibGUgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXMgY29sbGVjdGVkIG9yIHVzZWQgaW4gdGhpcyBwcm9jZXNzLlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LW9yZGVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2UgbWF5IG1ha2UgYW5vbnltb3VzIG9yIGFnZ3JlZ2F0ZSBwZXJzb25hbCBpbmZvcm1hdGlvbiBhbmQgZGlzY2xvc2Ugc3VjaCBkYXRhIG9ubHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW4gYSBub24tcGVyc29uYWxseSBpZGVudGlmaWFibGUgbWFubmVyLiBTdWNoIGluZm9ybWF0aW9uIGRvZXMgbm90IGlkZW50aWZ5IHlvdVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRpdmlkdWFsbHkuXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktb3JkZXItaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY2Nlc3MgdG8geW91ciBhY2NvdW50IGluZm9ybWF0aW9uIGFuZCBhbnkgb3RoZXIgcGVyc29uYWwgaWRlbnRpZmlhYmxlIGluZm9ybWF0aW9uIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmljdGx5IHJlc3RyaWN0ZWQgYW5kIHVzZWQgb25seSBpbiBhY2NvcmRhbmNlIHdpdGggc3BlY2lmaWMgaW50ZXJuYWwgcHJvY2VkdXJlcywgaW4gb3JkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gb3BlcmF0ZSwgZGV2ZWxvcCBvciBpbXByb3ZlIG91ciBTZXJ2aWNlcy4gV2UgbWF5IHVzZSB0aGlyZCBwYXJ0eSBzZXJ2aWNlIHByb3ZpZGVycyB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGUgeW91IHRvIHByb3ZpZGUgd2l0aCBvdXIgc2VydmljZXMgYW5kIHdlIHJlcXVpcmUgc3VjaCB0aGlyZCBwYXJ0aWVzIHRvIG1haW50YWluIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWRlbnRpYWxpdHkgb2YgdGhlIGluZm9ybWF0aW9uIHdlIHByb3ZpZGUgdG8gdGhlbSB1bmRlciBvdXIgY29udHJhY3RzIHdpdGggdGhlbS5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1vcmRlci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZXJlIGFyZSBudW1iZXIgb2YgUHJvZHVjdHMgYW5kL29yIFNlcnZpY2VzLCBvZmZlcmVkIGJ5IHRoaXJkIFBhcnRpZXMgb24gdGhlIFdlYnNpdGUuIElmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlvdSBjaG9vc2UgdG8gYXZhaWwgZm9yIHRoZXNlIHNlcGFyYXRlIFByb2R1Y3RzIG9yIFNlcnZpY2VzLCBkaXNjbG9zZSBpbmZvcm1hdGlvbiB0byB0aGVzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlIHByb3ZpZGVycywgdGhlbiB0aGVpciB1c2Ugb2YgeW91ciBpbmZvcm1hdGlvbiBpcyBnb3Zlcm5lZCBieSB0aGVpciBwcml2YWN5IHBvbGljaWVzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21wYW55IGlzIG5vdCByZXNwb25zaWJsZSBmb3IgdGhlaXIgcHJpdmFjeSBwb2xpY2llcy5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2Mtc3ViaGVhZGluZ1wiPjUuJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7V0UgQ09MTEVDVCBDT09LSUVTPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+V2UgbWF5IGFsc28gcmVjZWl2ZSBhbmQvb3IgaG9sZCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgVXNlcuKAmXMgYnJvd3NpbmcgaGlzdG9yeSBpbmNsdWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIFVSTCBvZiB0aGUgc2l0ZSB0aGF0IHRoZSBVc2VyIHZpc2l0ZWQgcHJpb3IgdG8gdmlzaXRpbmcgdGhlIHdlYnNpdGUgYXMgd2VsbCBhcyB0aGUgSW50ZXJuZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvdG9jb2wgKElQKSBhZGRyZXNzIG9mIGVhY2ggVXNlcidzIGNvbXB1dGVyIChvciB0aGUgcHJveHkgc2VydmVyIGEgVXNlciB1c2VkIHRvIGFjY2VzcyB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgV29ybGQgV2lkZSBXZWIpLCBVc2VyJ3MgY29tcHV0ZXIgb3BlcmF0aW5nIHN5c3RlbSBhbmQgdHlwZSBvZiB3ZWIgYnJvd3NlciB0aGUgVXNlciBpc1xuICAgICAgICAgICAgICB1c2luZyBhcyB3ZWxsIGFzIHRoZSBuYW1lIG9mIFVzZXIncyBJU1AuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+VGhlIFdlYnNpdGUgdXNlcyB0ZW1wb3JhcnkgY29va2llcyB0byBzdG9yZSBjZXJ0YWluIGRhdGEgKHRoYXQgaXMgbm90IHNlbnNpdGl2ZSBwZXJzb25hbFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhIG9yIGluZm9ybWF0aW9uKSB0aGF0IGlzIHVzZWQgYnkgdGhlIENvbXBhbnkgYW5kIGl0cyBzZXJ2aWNlIHByb3ZpZGVycyBmb3IgdGhlIHRlY2huaWNhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhZG1pbmlzdHJhdGlvbiBvZiB0aGUgV2Vic2l0ZSwgcmVzZWFyY2ggYW5kIGRldmVsb3BtZW50LCBhbmQgZm9yIFVzZXIgYWRtaW5pc3RyYXRpb24uIEFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29va2llIGlzIGEgcGllY2Ugb2YgZGF0YSBzdG9yZWQgb24gdGhlIHVzZXIncyBjb21wdXRlciB0aWVkIHRvIGluZm9ybWF0aW9uIGFib3V0IHRoZSB1c2VyLlxuICAgICAgICAgICAgICAgICAgICAgICAgICBXZSBtYXkgdXNlIGJvdGggc2Vzc2lvbiBJRCBjb29raWVzIGFuZCBwZXJzaXN0ZW50IGNvb2tpZXMuIEZvciBzZXNzaW9uIElEIGNvb2tpZXMsIG9uY2UgeW91XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlIHlvdXIgYnJvd3NlciBvciBsb2cgb3V0LCB0aGUgY29va2llIHRlcm1pbmF0ZXMgYW5kIGlzIGVyYXNlZC4gQSBwZXJzaXN0ZW50IGNvb2tpZSBpcyBhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsIHRleHQgZmlsZSBzdG9yZWQgb24geW91ciBjb21wdXRlcuKAmXMgaGFyZCBkcml2ZSBmb3IgYW4gZXh0ZW5kZWQgcGVyaW9kIG9mIHRpbWUuIFNlc3Npb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgSUQgY29va2llcyBtYXkgYmUgdXNlZCBieSBQUlAgdG8gdHJhY2sgdXNlciBwcmVmZXJlbmNlcyB3aGlsZSB0aGUgdXNlciBpcyB2aXNpdGluZyB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2Vic2l0ZS4gVGhleSBhbHNvIGhlbHAgdG8gbWluaW1pemUgbG9hZCB0aW1lcyBhbmQgc2F2ZSBvbiBzZXJ2ZXIgcHJvY2Vzc2luZy4gUGVyc2lzdGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb29raWVzIG1heSBiZSB1c2VkIGJ5IFBSUCB0byBzdG9yZSB3aGV0aGVyLCBmb3IgZXhhbXBsZSwgeW91IHdhbnQgeW91ciBwYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZW1lbWJlcmVkIG9yIG5vdCwgYW5kIG90aGVyIGluZm9ybWF0aW9uLiBDb29raWVzIHVzZWQgb24gdGhlIFBSUCB3ZWJzaXRlIGRvIG5vdCBjb250YWluXG4gICAgICAgICAgICAgIHBlcnNvbmFsbHkgaWRlbnRpZmlhYmxlIGluZm9ybWF0aW9uLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzYy1zdWJoZWFkaW5nXCI+Ni4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtMT0cgRklMRVM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj5MaWtlIG1vc3Qgc3RhbmRhcmQgd2Vic2l0ZXMsIHdlIHVzZSBsb2cgZmlsZXMuIFRoaXMgaW5mb3JtYXRpb24gbWF5IGluY2x1ZGUgaW50ZXJuZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdG9jb2wgKElQKSBhZGRyZXNzZXMsIGJyb3dzZXIgdHlwZSwgaW50ZXJuZXQgc2VydmljZSBwcm92aWRlciAoSVNQKSwgcmVmZXJyaW5nL2V4aXQgcGFnZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXRmb3JtIHR5cGUsIGRhdGUvdGltZSBzdGFtcCwgYW5kIG51bWJlciBvZiBjbGlja3MgdG8gYW5hbHlzZSB0cmVuZHMsIGFkbWluaXN0ZXIgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpdGUsIHRyYWNrIHVzZXIncyBtb3ZlbWVudCBpbiB0aGUgYWdncmVnYXRlLCBhbmQgZ2F0aGVyIGJyb2FkIGRlbW9ncmFwaGljIGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvciBhZ2dyZWdhdGUgdXNlLiBXZSBtYXkgY29tYmluZSB0aGlzIGF1dG9tYXRpY2FsbHkgY29sbGVjdGVkIGxvZyBpbmZvcm1hdGlvbiB3aXRoIG90aGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluZm9ybWF0aW9uIHdlIGNvbGxlY3QgYWJvdXQgeW91LiBXZSBkbyB0aGlzIHRvIGltcHJvdmUgc2VydmljZXMgd2Ugb2ZmZXIgdG8geW91LCB0b1xuICAgICAgICAgICAgICBpbXByb3ZlIG1hcmtldGluZywgYW5hbHl0aWNzIG9yIHNpdGUgZnVuY3Rpb25hbGl0eS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2Mtc3ViaGVhZGluZ1wiPjcuJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7RW1haWwtIE9wdCBvdXQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj5JZiB5b3UgYXJlIG5vIGxvbmdlciBpbnRlcmVzdGVkIGluIHJlY2VpdmluZyBlLW1haWwgYW5ub3VuY2VtZW50cyBhbmQgb3RoZXIga2luZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0aW5nIGluZm9ybWF0aW9uL2NvbW11bmljYXRpb25zIGZyb20gdXMsIHBsZWFzZSBlLW1haWwgeW91ciByZXF1ZXN0IGF0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJlQGRvY3ByaW1lLmNvbS4gUGxlYXNlIG5vdGUgdGhhdCBpdCBtYXkgdGFrZSBhYm91dCA3IChzZXZlbikgd29ya2luZyBkYXlzIHRvIHByb2Nlc3NcbiAgICAgICAgICAgICAgeW91ciByZXF1ZXN0LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzYy1zdWJoZWFkaW5nXCI+OC4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtTRUNVUklUWTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiPldlIGVtcGxveSBhcHByb3ByaWF0ZSB0ZWNobmljYWwgYW5kIG9yZ2FuaXphdGlvbmFsIHNlY3VyaXR5IG1lYXN1cmVzIGF0IGFsbCB0aW1lcyB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm90ZWN0IHRoZSBpbmZvcm1hdGlvbiB3ZSBjb2xsZWN0IGZyb20geW91LiBXZSB1c2UgbXVsdGlwbGUgZWxlY3Ryb25pYywgcHJvY2VkdXJhbCwgYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBoeXNpY2FsIHNlY3VyaXR5IG1lYXN1cmVzIHRvIHByb3RlY3QgYWdhaW5zdCB1bmF1dGhvcml6ZWQgb3IgdW5sYXdmdWwgdXNlIG9yIGFsdGVyYXRpb24gb2ZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mb3JtYXRpb24sIGFuZCBhZ2FpbnN0IGFueSBhY2NpZGVudGFsIGxvc3MsIGRlc3RydWN0aW9uLCBvciBkYW1hZ2UgdG8gaW5mb3JtYXRpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEhvd2V2ZXIsIG5vIG1ldGhvZCBvZiB0cmFuc21pc3Npb24gb3ZlciB0aGUgSW50ZXJuZXQsIG9yIG1ldGhvZCBvZiBlbGVjdHJvbmljIHN0b3JhZ2UsIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDEwMCUgc2VjdXJlLiBUaGVyZWZvcmUsIHdlIGNhbm5vdCBndWFyYW50ZWUgaXRzIGFic29sdXRlIHNlY3VyaXR5LiBGdXJ0aGVyLCB5b3UgYXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpYmxlIGZvciBtYWludGFpbmluZyB0aGUgY29uZmlkZW50aWFsaXR5IGFuZCBzZWN1cml0eSBvZiB5b3VyIGxvZ2luIGlkIGFuZCBwYXNzd29yZCxcbiAgICAgICAgICAgICAgYW5kIG1heSBub3QgcHJvdmlkZSB0aGVzZSBjcmVkZW50aWFscyB0byBhbnkgdGhpcmQgcGFydHkuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjLXN1YmhlYWRpbmdcIj45LiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO1RISVJEIFBBUlRZIEFEVkVSVElTSU5HPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+V2UgbWF5IHVzZSB0aGlyZC1wYXJ0eSBhZHZlcnRpc2luZyBjb21wYW5pZXMgYW5kL29yIGFkIGFnZW5jaWVzIHRvIHNlcnZlIGFkcyB3aGVuIHlvdVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpdCBvdXIgV2Vic2l0ZS4gVGhlc2UgY29tcGFuaWVzIG1heSB1c2UgaW5mb3JtYXRpb24gKGV4Y2x1ZGluZyB5b3VyIG5hbWUsIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsIGFkZHJlc3MsIG9yIHRlbGVwaG9uZSBudW1iZXIpIGFib3V0IHlvdXIgdmlzaXRzIHRvIHRoaXMgV2Vic2l0ZSBpbiBvcmRlciB0byBwcm92aWRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFkdmVydGlzZW1lbnRzIG9uIHRoaXMgV2Vic2l0ZSBhbmQgb3RoZXIgdGhpcmQgcGFydHkgd2Vic2l0ZXMgYWJvdXQgZ29vZHMgYW5kIHNlcnZpY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQgbWF5IGJlIG9mIGludGVyZXN0IHRvIHlvdS4gV2UgdXNlIHRoaXJkLXBhcnR5IHNlcnZpY2UgcHJvdmlkZXJzIHRvIHNlcnZlIGFkcyBvbiBvdXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmVoYWxmIGFjcm9zcyB0aGUgaW50ZXJuZXQgYW5kIHNvbWV0aW1lcyBvbiB0aGlzIFdlYnNpdGUuIFRoZXkgbWF5IGNvbGxlY3QgYW5vbnltb3VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluZm9ybWF0aW9uIGFib3V0IHlvdXIgdmlzaXRzIHRvIFdlYnNpdGUsIGFuZCB5b3VyIGludGVyYWN0aW9uIHdpdGggb3VyIHByb2R1Y3RzIGFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlcy4gVGhleSBtYXkgYWxzbyB1c2UgaW5mb3JtYXRpb24gYWJvdXQgeW91ciB2aXNpdHMgdG8gdGhpcyBhbmQgb3RoZXIgV2Vic2l0ZXMgZm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldGVkIGFkdmVydGlzZW1lbnRzIGZvciBnb29kcyBhbmQgc2VydmljZXMuIFRoaXMgYW5vbnltb3VzIGluZm9ybWF0aW9uIGlzIGNvbGxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdWdoIHRoZSB1c2Ugb2YgYSBwaXhlbCB0YWcsIHdoaWNoIGlzIGluZHVzdHJ5IHN0YW5kYXJkIHRlY2hub2xvZ3kgdXNlZCBieSBtb3N0IG1ham9yXG4gICAgICAgICAgICAgIFdlYnNpdGVzLiBObyBwZXJzb25hbGx5IGlkZW50aWZpYWJsZSBpbmZvcm1hdGlvbiBpcyBjb2xsZWN0ZWQgb3IgdXNlZCBpbiB0aGlzIHByb2Nlc3MuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjLXN1YmhlYWRpbmdcIj4xMC4mbmJzcDsmbmJzcDsmbmJzcDtMSU5LUyBUTyBPVEhFUiBXRUJTSVRFUzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiPlRoZXJlIG1pZ2h0IGJlIGFmZmlsaWF0ZXMgb3Igb3RoZXIgc2l0ZXMgbGlua2VkIHRvIHRoZSBXZWJzaXRlLiBQZXJzb25hbCBpbmZvcm1hdGlvbiB0aGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHlvdSBwcm92aWRlIHRvIHRob3NlIHNpdGVzIGFyZSBub3Qgb3VyIHByb3BlcnR5LiBUaGVzZSBhZmZpbGlhdGVkIHNpdGVzIG1heSBoYXZlIGRpZmZlcmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcml2YWN5IHByYWN0aWNlcyBhbmQgd2UgZW5jb3VyYWdlIHlvdSB0byByZWFkIHRoZWlyIHByaXZhY3kgcG9saWNpZXMgb2YgdGhlc2Ugd2Vic2l0ZXMsXG4gICAgICAgICAgICAgIHdoZW4geW91IHZpc2l0IHRoZW0uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjLXN1YmhlYWRpbmdcIj4xMS4mbmJzcDsmbmJzcDsmbmJzcDtDSEFOR0VTIElOIFRISVMgUFJJVkFDWSBQT0xJQ1k8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj5Db21wYW55IHJlc2VydmVzIHRoZSByaWdodCB0byBjaGFuZ2UgdGhpcyBwb2xpY3kgZnJvbSB0aW1lIHRvIHRpbWUsIHdpdGggb3Igd2l0aG91dFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhZHZhbmNlIG5vdGljZSwgYXQgaXRzIHNvbGUgZGlzY3JldGlvbi4gV2UgbWF5IHVwZGF0ZSB0aGlzIHByaXZhY3kgcG9saWN5IHRvIHJlZmxlY3QgY2hhbmdlc1xuICAgICAgICAgICAgICB0byBvdXIgaW5mb3JtYXRpb24gcHJhY3RpY2VzLiBXZSBlbmNvdXJhZ2UgeW91IHRvIHBlcmlvZGljYWxseSB2aXNpdCB0aGlzIHdlYnBhZ2UuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjLXN1YmhlYWRpbmdcIj4xMi4mbmJzcDsmbmJzcDsmbmJzcDtBRERJVElPTkFMIE5PVEVTIFRPIFRIRSBVU0VSPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cInByaXZhY3ktb3JkZXItbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LW9yZGVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tcGFueSBkb2VzIG5vdCBleGVyY2lzZSBjb250cm9sIG92ZXIgdGhlIHNpdGVzIGRpc3BsYXllZCBhcyBzZWFyY2ggcmVzdWx0cyBvciBsaW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIHdpdGhpbiBpdHMgU2VydmljZXMuIFRoZXNlIG90aGVyIHNpdGVzIG1heSBwbGFjZSB0aGVpciBvd24gY29va2llcyBvciBvdGhlciBmaWxlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbiB0aGUgVXNlcnMnIGNvbXB1dGVyLCBjb2xsZWN0IGRhdGEgb3Igc29saWNpdCBwZXJzb25hbCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBVc2VycywgZm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWNoIENvbXBhbnkgaXMgbm90IHJlc3BvbnNpYmxlIG9yIGxpYWJsZS4gQWNjb3JkaW5nbHksIENvbXBhbnkgZG9lcyBub3QgbWFrZSBhbnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwcmVzZW50YXRpb25zIGNvbmNlcm5pbmcgdGhlIHByaXZhY3kgcHJhY3RpY2VzIG9yIHBvbGljaWVzIG9mIHN1Y2ggdGhpcmQgcGFydGllcyBvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXJtcyBvZiB1c2Ugb2Ygc3VjaCB3ZWJzaXRlcywgbm9yIGRvZXMgQ29tcGFueSBndWFyYW50ZWUgdGhlIGFjY3VyYWN5LCBpbnRlZ3JpdHksIG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YWxpdHkgb2YgdGhlIGluZm9ybWF0aW9uLCBkYXRhLCB0ZXh0LCBzb2Z0d2FyZSwgc291bmQsIHBob3RvZ3JhcGhzLCBncmFwaGljcywgdmlkZW9zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcyBvciBvdGhlciBtYXRlcmlhbHMgYXZhaWxhYmxlIG9uIHN1Y2ggd2Vic2l0ZXMuIENvbXBhbnkgZW5jb3VyYWdlcyB0aGUgVXNlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byByZWFkIHRoZSBwcml2YWN5IHBvbGljaWVzIG9mIHRoYXQgd2Vic2l0ZS5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1vcmRlci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbXBhbnkgc2hhbGwgbm90IGJlIHJlc3BvbnNpYmxlIGluIGFueSBtYW5uZXIgZm9yIHRoZSBhdXRoZW50aWNpdHkgb2YgdGhlIHBlcnNvbmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZm9ybWF0aW9uIG9yIHNlbnNpdGl2ZSBwZXJzb25hbCBkYXRhIG9yIGluZm9ybWF0aW9uIHN1cHBsaWVkIGJ5IHRoZSBVc2VyIHRvIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21wYW55IG9yIGFueSBvZiBpdHMgYnVzaW5lc3MgcGFydG5lcnMuIElmIGEgVXNlciBwcm92aWRlcyBhbnkgaW5mb3JtYXRpb24gdGhhdCBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnRydWUsIGluYWNjdXJhdGUsIG5vdCBjdXJyZW50IG9yIGluY29tcGxldGUgKG9yIGJlY29tZXMgdW50cnVlLCBpbmFjY3VyYXRlLCBub3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCBvciBpbmNvbXBsZXRlKSwgb3IgQ29tcGFueSBoYXMgcmVhc29uYWJsZSBncm91bmRzIHRvIHN1c3BlY3QgdGhhdCBzdWNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZm9ybWF0aW9uIGlzIHVudHJ1ZSwgaW5hY2N1cmF0ZSwgbm90IGN1cnJlbnQgb3IgaW5jb21wbGV0ZSwgQ29tcGFueSBoYXMgdGhlIHJpZ2h0IHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1c3BlbmQgb3IgdGVybWluYXRlIHN1Y2ggYWNjb3VudCBhdCBpdHMgc29sZSBkaXNjcmV0aW9uLlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LW9yZGVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tcGFueSBzaGFsbCBub3QgYmUgcmVzcG9uc2libGUgZm9yIGFueSBicmVhY2ggb2Ygc2VjdXJpdHkgb3IgZm9yIGFueSBhY3Rpb25zIG9mIGFueVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlyZCBwYXJ0aWVzIHRoYXQgcmVjZWl2ZSBVc2VycycgcGVyc29uYWwgZGF0YSBvciBldmVudHMgdGhhdCBhcmUgYmV5b25kIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFzb25hYmxlIGNvbnRyb2wgb2YgQ29tcGFueSBpbmNsdWRpbmcsIGFjdHMgb2YgZ292ZXJubWVudCwgY29tcHV0ZXIgaGFja2luZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5hdXRob3JpemVkIGFjY2VzcyB0byBjb21wdXRlciBkYXRhIGFuZCBzdG9yYWdlIGRldmljZSwgY29tcHV0ZXIgY3Jhc2hlcywgYnJlYWNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mIHNlY3VyaXR5IGFuZCBlbmNyeXB0aW9uLCBldGMuXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktb3JkZXItaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgVXNlciBpcyByZXNwb25zaWJsZSBmb3IgbWFpbnRhaW5pbmcgdGhlIGNvbmZpZGVudGlhbGl0eSBvZiB0aGUgVXNlcidzIGFjY291bnQgYWNjZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZm9ybWF0aW9uIGFuZCBwYXNzd29yZC4gVGhlIFVzZXIgc2hhbGwgYmUgcmVzcG9uc2libGUgZm9yIGFsbCB1c2VzIG9mIHRoZSBVc2VyJ3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudCBhbmQgcGFzc3dvcmQsIHdoZXRoZXIgb3Igbm90IGF1dGhvcml6ZWQgYnkgdGhlIFVzZXIuIFRoZSBVc2VyIHNoYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltbWVkaWF0ZWx5IG5vdGlmeSBDb21wYW55IG9mIGFueSBhY3R1YWwgb3Igc3VzcGVjdGVkIHVuYXV0aG9yaXplZCB1c2Ugb2YgdGhlIFVzZXInc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50IG9yIHBhc3N3b3JkLlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzYy1zdWJoZWFkaW5nXCI+MTMuJm5ic3A7Jm5ic3A7Jm5ic3A7R1JJRVZBTkNFIE9GRklDRVI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj5JbiBjYXNlIHlvdSBoYXZlIGFueSBncmlldmFuY2VzIHdpdGggcmVzcGVjdCB0byBpbiBhY2NvcmRhbmNlIHdpdGggYXBwbGljYWJsZSBsYXcgb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mb3JtYXRpb24gVGVjaG5vbG9neSBhbmQgcnVsZXMgbWFkZSB0aGVyZSB1bmRlciwgdGhlIG5hbWUgYW5kIGNvbnRhY3QgZGV0YWlscyBvZiB0aGVcbiAgICAgICAgICAgICAgR3JpZXZhbmNlIE9mZmljZXIgYXJlIHByb3ZpZGVkIGJlbG93OjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+TXIuIEFzaGlzaCBBam1hbmk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiIHN0eWxlPXt7IG1hcmdpblRvcDogMCwgbWFyZ2luQm90dG9tOiAwIH19PmRvY3ByaW1lLmNvbTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiIHN0eWxlPXt7IG1hcmdpblRvcDogMCwgbWFyZ2luQm90dG9tOiAwIH19PlBsb3QgTm8uIDEzMSw8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IDAsIG1hcmdpbkJvdHRvbTogMCB9fT5TZWN0b3ItNDQsIEd1cnVncmFtLTEyMjAwMSw8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IDAsIG1hcmdpbkJvdHRvbTogMTAgfX0+SGFyeWFuYTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+RW1haWwgOiBjYXJlQGRvY3ByaW1lLmNvbTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+SWYgeW91IGhhdmUgcXVlc3Rpb25zLCBjb25jZXJucywgb3Igc3VnZ2VzdGlvbnMgcmVnYXJkaW5nIG91ciBQcml2YWN5IFBvbGljeSwgd2UgY2FuIGJlXG4gICAgICAgICAgICAgIHJlYWNoZWQgdXNpbmcgdGhlIGNvbnRhY3QgaW5mb3JtYXRpb24gb24gb3VyIENvbnRhY3QgVXMgcGFnZSBvciBhdCBjYXJlQGRvY3ByaW1lLmNvbS48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFByaXZhY3lcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVsbWV0VGFncyBmcm9tICcuLi9IZWxtZXRUYWdzJ1xuXG5jbGFzcyBUZXJtcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzZWxlY3RlZDogMCxcbiAgICAgICAgICAgIHNjcm9sbFBvc2l0aW9uOjBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFRhYih2YWwpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkOiB2YWwgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZm9yU2Nyb2xsKXtcbiAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2NoZWR1bGluZ185JykpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudFRvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNjaGVkdWxpbmdfOScpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudEhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNjaGVkdWxpbmdfOScpLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsUG9zaXRpb24gPSBlbGVtZW50VG9wIC0gZWxlbWVudEhlaWdodDtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgcGFyc2VJbnQoc2Nyb2xsUG9zaXRpb24pKVxuICAgICAgICAgICAgfSAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBtYWluQ2xhc3NcbiAgICAgICAgbGV0IGhlYWRpbmdDbGFzc1xuICAgICAgICBpZih0aGlzLnByb3BzLmZyb21BcHApe1xuICAgICAgICAgICAgbWFpbkNsYXNzID0gXCJjb250YWluZXIgYWJvdXQtY29udGFpbmVyIGFwcFVybFBhZGRpbmdcIlxuICAgICAgICAgICAgaGVhZGluZ0NsYXNzID0gXCJjb2wtMTIgdGV4dC1jZW50ZXIgZC1ub25lIGQtbWQtYmxvY2tcIlxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIG1haW5DbGFzcyA9ICdjb250YWluZXIgYWJvdXQtY29udGFpbmVyJ1xuICAgICAgICAgICAgaGVhZGluZ0NsYXNzID0gXCJjb2wtMTIgdGV4dC1jZW50ZXJcIlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWFpbkNsYXNzfT5cbiAgICAgICAgICAgICAgICA8SGVsbWV0VGFncyB0YWdzRGF0YT17e1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogKCdUZXJtcyAmIENvbmRpdGlvbnMgLSBTdWJtaXNzaW9uLCBMaXN0aW5ncyAmIFBheW1lbnQgVGVybXMnKSxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICgnZG9jcHJpbWU6IFJlYWQgVGVybXMgJiBDb25kaXRpb25zLCBkZXRhaWxzIG9uIFN1Ym1pc3Npb24gYW5kIEFkbWluaXN0cmF0aW9uIG9mIExpc3RpbmdzLCBQYXltZW50IFRlcm1zLicpXG4gICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aGVhZGluZ0NsYXNzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBhYm91dC1oZWFkaW5nXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fT5UZXJtcyAmYW1wOyBDb25kaXRpb25zPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcml2YWN5LXRhYi1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJwcml2YWN5LXRhYlwiICsgKHRoaXMuc3RhdGUuc2VsZWN0ZWQgPT0gMCA/IFwiIHByaXZhY3ktdGFiLWFjdGl2ZVwiIDogXCJcIil9IG9uQ2xpY2s9e3RoaXMuc2V0VGFiLmJpbmQodGhpcywgMCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIj5FbmQgVXNlciBBZ3JlZW1lbnQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicHJpdmFjeS10YWJcIiArICh0aGlzLnN0YXRlLnNlbGVjdGVkID09IDEgPyBcIiBwcml2YWN5LXRhYi1hY3RpdmVcIiA6IFwiXCIpfSBvbkNsaWNrPXt0aGlzLnNldFRhYi5iaW5kKHRoaXMsIDEpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+UHJvdmlkZXIgVGVybXMgYW5kIENvbmRpdGlvbnM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgY3VzdG9tZXItdGVybXMtcm93XCIgaGlkZGVuPXt0aGlzLnN0YXRlLnNlbGVjdGVkID09IDF9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBwcml2YWN5LWRlc2MtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj5UaGVzZSBUZXJtcyBvZiBVc2Ugc2V0cyBmb3J0aCB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgdGhhdCBhcHBseSB0byB0aGUgYWNjZXNzIGFuZCB1c2Ugb2YgdGhlIHNpdGUgXCJ3d3cuZG9jcHJpbWUuY29tXCIgYW5kIGl0cyBNb2JpbGUgQXBwbGljYXRpb24gKGNvbGxlY3RpdmVseSBiZSByZWZlcnJlZCB0byBhcyDigJxXZWJzaXRl4oCdKSwgd2hpY2ggaXMgb3duZWQgYW5kIG9wZXJhdGVkIGJ5IGRvY3ByaW1lIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQsIGEgY29tcGFueSBkdWx5IGluY29ycG9yYXRlZCB1bmRlciB0aGUgcHJvdmlzaW9ucyBvZiB0aGUgQ29tcGFuaWVzIEFjdCwgMjAxMywgKGhlcmVpbmFmdGVyIGNvbGxlY3RpdmVseSBiZSByZWZlcnJlZCB0byBhcyBcIkNvbXBhbnlcIiBvciDigJxkb2NwcmltZeKAnSkuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+UExFQVNFIFJFQUQgVEhFU0UgVEVSTVMgT0YgVVNFIENBUkVGVUxMWSBCWSBBQ0NFU1NJTkcgT1IgVVNJTkcgVEhJUyBJTlRFUk5FVCBCQVNFRCBQTEFURk9STSwgWU9VIEFHUkVFIFRPIEJFIEJPVU5EIEJZIFRIRSBURVJNUyBERVNDUklCRUQgSEVSRUlOIEFORCBBTEwgVEVSTVMgSU5DT1JQT1JBVEVEIEJZIFJFRkVSRU5DRS4gSUYgWU9VIERPIE5PVCBBR1JFRSBUTyBBTEwgT0YgVEhFU0UgVEVSTVMsIERPIE5PVCBVU0UgVEhJUyBJTlRFUk5FVCBCQVNFRCBQTEFURk9STS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2Mtc3ViaGVhZGluZ1wiPjEuJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7TkFUVVJFIEFORCBBUFBMSUNBQklMSVRZIE9GIFRFUk1TPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGRvY3VtZW50L2FncmVlbWVudCBpcyBhbiBlbGVjdHJvbmljIHJlY29yZCBpbiB0ZXJtcyBvZiBJbmZvcm1hdGlvbiBUZWNobm9sb2d5IEFjdCwgMjAwMCBhbmQgZ2VuZXJhdGVkIGJ5IGEgY29tcHV0ZXIgc3lzdGVtIGFuZCBkb2VzIG5vdCByZXF1aXJlIGFueSBwaHlzaWNhbCBvciBkaWdpdGFsIHNpZ25hdHVyZXMuIFRoaXMgZG9jdW1lbnQgaXMgcHVibGlzaGVkIGluIGFjY29yZGFuY2Ugd2l0aCB0aGUgcHJvdmlzaW9ucyBvZiBSdWxlIDMgb2YgdGhlIEluZm9ybWF0aW9uIFRlY2hub2xvZ3kgKEludGVybWVkaWFyaWVzIGd1aWRlbGluZXMpIDIwMTEsIHRoYXQgcHJvdmlkZXMgZm9yIHRoZSBkdWUgZGlsaWdlbmNlIHRvIGJlIGV4ZXJjaXNlZCBmb3IgdGhlIGFjY2VzcyBvciB1c2FnZSBvZiB0aGlzIFdlYnNpdGUuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIGFjY2VzcyBvciB1c2Ugb2YgdGhlIFdlYnNpdGUsIHRyYW5zYWN0aW9uIG9uIHRoZSBXZWJzaXRlIGFuZCB1c2Ugb2YgU2VydmljZXMgKGFzIGRlZmluZWQgaGVyZWluIGJlbG93KSBob3N0ZWQgb3IgbWFuYWdlZCByZW1vdGVseSB0aHJvdWdoIHRoZSBXZWJzaXRlLCBhcmUgZ292ZXJuZWQgYnkgdGhlIGZvbGxvd2luZyB0ZXJtcyBhbmQgY29uZGl0aW9ucyAoaGVyZWluYWZ0ZXIgcmVmZXJyZWQgdG8gYXMgdGhlIFwiVGVybXMgb2YgVXNl4oCdKSwgaW5jbHVkaW5nIHRoZSBhcHBsaWNhYmxlIHBvbGljaWVzIHdoaWNoIGFyZSBpbmNvcnBvcmF0ZWQgaGVyZWluIGJ5IHdheSBvZiByZWZlcmVuY2UsIGFzIG1heSBiZSBwb3N0ZWQgZWxzZXdoZXJlIG9uIHRoZSBXZWJzaXRlLiBUaGVzZSBUZXJtcyBvZiBVc2UgY29uc3RpdHV0ZXMgYSBsZWdhbCBhbmQgYmluZGluZyBjb250cmFjdCBiZXR3ZWVuIHlvdSAoaGVyZWluYWZ0ZXIgcmVmZXJyZWQgdG8gYXMg4oCcWW914oCdIG9yIOKAnFlvdXLigJ0gb3IgdGhlIOKAnFVzZXLigJ0pIG9uIG9uZSBwYXJ0IGFuZCBDb21wYW55IG9uIHRoZSBvdGhlciBQYXJ0LlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnkgYWNjZXNzaW5nLCBicm93c2luZyBvciBpbiBhbnkgd2F5IHRyYW5zYWN0aW5nIG9uIHRoZSBXZWJzaXRlLCBvciBhdmFpbGluZyBhbnkgU2VydmljZXMsIFlvdVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduaWZ5IFlvdXIgYWdyZWVtZW50IHRvIGJlIGJvdW5kIGJ5IHRoZXNlIFRlcm1zIG9mIFVzZS4gRnVydGhlciwgYnkgaW1wbGllZGx5IG9yIGV4cHJlc3NseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHRpbmcgdGhlc2UgVGVybXMgb2YgVXNlLCB5b3UgYWxzbyBhY2NlcHQgYW5kIGFncmVlIHRvIGJlIGJvdW5kIGJ5IE91ciBwb2xpY2llcywgaW5jbHVkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBQcml2YWN5IFBvbGljeSwgYW55IGRpc2NsYWltZXJzIGFuZCBzdWNoIG90aGVyIHJ1bGVzLCBndWlkZWxpbmVzLCBwb2xpY2llcywgdGVybXMgYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbnMgYXMgYXJlIHJlbGV2YW50IHVuZGVyIHRoZSBhcHBsaWNhYmxlIGxhdyhzKSBpbiBJbmRpYSBmb3IgdGhlIHB1cnBvc2VzIG9mIGFjY2Vzc2luZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJvd3Npbmcgb3IgdHJhbnNhY3Rpbmcgb24gdGhlIFdlYnNpdGUsIG9yIGF2YWlsaW5nIGFueSBvZiB0aGUgU2VydmljZXMsIHNoYWxsIGJlIGRlZW1lZCB0byBiZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmNvcnBvcmF0ZWQgaW50bywgYW5kIGNvbnNpZGVyZWQgYXMgcGFydCBhbmQgcGFyY2VsIG9mIHRoZXNlIFRlcm1zIG9mIFVzZS4gSG93ZXZlciwgaWYgWW91XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlIGF3YXkgZnJvbSB0aGUgV2Vic2l0ZSB0byBhIHRoaXJkIHBhcnR5IHdlYnNpdGUsIFlvdSBtYXkgYmUgc3ViamVjdCB0byBhbHRlcm5hdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXJtcyBhbmQgY29uZGl0aW9ucyBvZiB1c2UgYW5kIHByaXZhY3kgcG9saWN5LCBhcyBtYXkgYmUgc3BlY2lmaWVkIG9uIHN1Y2ggd2Vic2l0ZS4gSW4gc3VjaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudCwgdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zIG9mIHVzZSBhbmQgcHJpdmFjeSBwb2xpY3kgYXBwbGljYWJsZSB0byB0aGF0IHdlYnNpdGUgd2lsbCBnb3Zlcm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciB1c2Ugb2YgdGhhdCB3ZWJzaXRlLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmUgc3VyZSB0byByZXR1cm4gdG8gdGhpcyBwYWdlIHBlcmlvZGljYWxseSB0byByZXZpZXcgdGhlIG1vc3QgY3VycmVudCB2ZXJzaW9uIG9mIHRoZSBUT1UuIFdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2VydmUgdGhlIHJpZ2h0IGF0IGFueSB0aW1lLCBhdCBvdXIgc29sZSBkaXNjcmV0aW9uLCB0byBjaGFuZ2Ugb3Igb3RoZXJ3aXNlIG1vZGlmeSB0aGUgVE9VXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhvdXQgcHJpb3Igbm90aWNlLCBhbmQgeW91ciBjb250aW51ZWQgYWNjZXNzIG9yIHVzZSBvZiB0aGlzIFdlYnNpdGUgc2lnbmlmaWVzIHlvdXIgYWNjZXB0YW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZiB0aGUgdXBkYXRlZCBvciBtb2RpZmllZCBUT1UuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGVzZSBUZXJtcyBvZiBVc2UgYXJlIGEgYmluZGluZyBjb250cmFjdCBhbmQgYXBwbGllcyB0byB5b3Ugd2hldGhlciB5b3UgYXJlIGEgcGF0aWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlzL2hlciByZXByZXNlbnRhdGl2ZXMgb3IgYWZmaWxpYXRlcywgc2VhcmNoaW5nIGZvciBNZWRpY2FsIEV4cGVydHMgb3IgVGhpcmQgUGFydHkgaGVhbHRoIGNhcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZSBwcm92aWRlcnMgKHN1Y2ggYXMgZG9jdG9ycywgaG9zcGl0YWxzLCBkaWFnbm9zdGljIGNlbnRyZXMgb3IgY2xpbmljcywgbGFib3JhdG9yaWVzLCBldGMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm91Z2ggdGhlIFdlYnNpdGUo4oCcRW5kLVVzZXLigJ0sIOKAnHlvdeKAnSBvciDigJxVc2Vy4oCdKTsgb3Igb3RoZXJ3aXNlIGEgdXNlci92aXNpdG9yIG9mIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWJzaXRlKOKAnHlvdeKAnSBvciDigJxVc2Vy4oCdKS5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjLXN1YmhlYWRpbmdcIj4yLiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO1NFUlZJQ0VTPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+VGhlIFdlYnNpdGUgaXMgYSBwbGF0Zm9ybSB0aGF0IGZhY2lsaXRhdGVzIChpKSBkaWFnbm9zdGljIHNlcnZpY2VzIGJlaW5nIG9mZmVyZWQgYnkgdmFyaW91cyB0aGlyZCBwYXJ0eSBkaWFnbm9zdGljIGNlbnRyZXMgb3Igb3RoZXIgaGVhbHRoIGNhcmUgc2VydmljZSBwcm92aWRlcnMgKHN1Y2ggYXMgZG9jdG9ycywgaG9zcGl0YWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhZ25vc3RpYyBjZW50cmVzIG9yIGNsaW5pY3MsIGxhYm9yYXRvcmllcywgZXRjKSAo4oCcVGhpcmQgUGFydHkgTGFicy8gVGhpcmQgUGFydHkgc2VydmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJz4oCdKTsgKGlpKSBvbmxpbmUgbWVkaWNhbCBjb25zdWx0YW5jeSBzZXJ2aWNlcy8gc2Vjb25kIG9waW5pb24gYmVpbmcgb2ZmZXJlZCBieSB0aGlyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydHkgaW5kZXBlbmRlbnQgZG9jdG9ycyAo4oCcTWVkaWNhbCBFeHBlcnRz4oCdKTsgYW5kIChpaWkpIG9ubGluZSBhZHZlcnRpc2VtZW50cyBvZiB2YXJpb3VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzcG9uc29ycyBhZHZlcnRpc2luZyBhbmQgbWFya2V0aW5nIHRoZWlyIG93biBnb29kIGFuZCBzZXJ2aWNlcyAo4oCcVGhpcmQgUGFydHkgQWR2ZXJ0aXNlcnPigJ0pLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcmQgUGFydHkgTGFicywgTWVkaWNhbCBFeHBlcnRzIGFuZCB0aGUgVGhpcmQgUGFydHkgQWR2ZXJ0aXNlcnMgYXJlIGNvbGxlY3RpdmVseSByZWZlcnJlZCB0byBhc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIOKAnFRoaXJkIFBhcnR5IFNlcnZpY2UgUHJvdmlkZXJz4oCdLiBGdXJ0aGVyIHRoZSBXZWJzaXRlIGFsc28gc2VydmVzIGFzIGFuIGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF0Zm9ybSBwcm92aWRpbmcgaGVhbHRoIGFuZCB3ZWxsbmVzcyByZWxhdGVkIGluZm9ybWF0aW9uIHRvIHRoZSBVc2VycyBhY2Nlc3NpbmcgdGhlIFdlYnNpdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChUaGUgc2VydmljZXMgb2YgVGhpcmQgUGFydHkgU2VydmljZXMgUHJvdmlkZXIgYW5kIHRoZSBpbmZvcm1hdGlvbiBzZXJ2aWNlcyBwcm92aWRlZCB0aHJvdWdoIG91ciBXZWJzaXRlIGlzIGNvbGxlY3RpdmVseSByZWZlcnJlZCB0byBhcyB0aGUg4oCcU2VydmljZXPigJ0pLlxuICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGFycmFuZ2VtZW50IGJldHdlZW4gdGhlIFRoaXJkIFBhcnR5IFNlcnZpY2UgUHJvdmlkZXJzLCBZb3UgYW5kIFVzIHNoYWxsIGJlIGdvdmVybmVkIGluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3JkYW5jZSB3aXRoIHRoZXNlIFRlcm1zIG9mIFVzZS4gVGhlIFNlcnZpY2VzIHdvdWxkIGJlIG1hZGUgYXZhaWxhYmxlIHRvIHN1Y2ggbmF0dXJhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNvbnMgd2hvIGhhdmUgYWdyZWVkIHRvIHVzZSB0aGUgV2Vic2l0ZSBhZnRlciBvYnRhaW5pbmcgZHVlIHJlZ2lzdHJhdGlvbiwgaW4gYWNjb3JkYW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGggdGhlIHByb2NlZHVyZSBhcyBkZXRlcm1pbmVkIGJ5IFVzLCBmcm9tIHRpbWUgdG8gdGltZSwgKHJlZmVycmVkIHRvIGFzIOKAnFlvdeKAnSBvciDigJxZb3Vy4oCdIG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg4oCcWW91cnNlbGbigJ0gb3Ig4oCcVXNlcuKAnSwgd2hpY2ggdGVybXMgc2hhbGwgYWxzbyBpbmNsdWRlIG5hdHVyYWwgcGVyc29ucyB3aG8gYXJlIGFjY2Vzc2luZyB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWJzaXRlIG1lcmVseSBhcyB2aXNpdG9ycykuIFRoZSBTZXJ2aWNlcyBhcmUgb2ZmZXJlZCB0byBZb3UgdGhyb3VnaCB2YXJpb3VzIG1vZGVzIHdoaWNoIHNoYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZSBpc3N1ZSBvZiBkaXNjb3VudCBjb3Vwb25zIGFuZCB2b3VjaGVycyB0aGF0IGNhbiBiZSByZWRlZW1lZCBmb3IgdmFyaW91cyBnb29kcy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlcyBvZmZlcmVkIGZvciBzYWxlIGJ5IHJlbGV2YW50IFRoaXJkIFBhcnR5IFNlcnZpY2UgUHJvdmlkZXJzLiBUbyBmYWNpbGl0YXRlIHRoZSByZWxhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJldHdlZW4gWW91IGFuZCB0aGUgVGhpcmQgUGFydHkgU2VydmljZSBQcm92aWRlcnMgdGhyb3VnaCB0aGUgV2Vic2l0ZSwgZG9jcHJpbWUgc2hhbGwgc2VuZCB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdSAocHJvbW90aW9uYWwgY29udGVudCBpbmNsdWRpbmcgYnV0IG5vdCBsaW1pdGVkIHRvIGUtbWFpbGVycywgbm90aWZpY2F0aW9ucyBhbmQgbWVzc2FnZXMpLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBhZ3JlZSBhbmQgYWNrbm93bGVkZ2UgdGhhdCB0aGUgV2Vic2l0ZSBpcyBhIHBsYXRmb3JtIHRoYXQgWW91IGFuZCBUaGlyZCBQYXJ0eSBTZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvdmlkZXJzIHV0aWxpemUgdG8gbWVldCBhbmQgaW50ZXJhY3Qgd2l0aCBhbm90aGVyIGZvciB0aGVpciB0cmFuc2FjdGlvbnMuIGRvY3ByaW1lIGlzIG5vdCBhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5ub3QgYmUgYSBwYXJ0eSB0byBvciBzYXZlIGFzIGV4Y2VwdCBhcyBtYXkgYmUgcHJvdmlkZWQgaW4gdGhlc2UgVGVybXMgb2YgVXNlLCBjb250cm9sIGluIGFueVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbm5lciwgYW55IHRyYW5zYWN0aW9uIGJldHdlZW4gWW91IGFuZCB0aGUgVGhpcmQgUGFydHkgU2VydmljZSBQcm92aWRlcnMuIEFzIGEgY29uZGl0aW9uIG9mIFlvdXIgdXNlIG9mIGFuZCBhY2Nlc3MgdG8gdGhlIGRpYWdub3N0aWMgc2VydmljZXMgcHJvdmlkZWQgdGhyb3VnaCB0aGUgV2Vic2l0ZSBhbmQgWW91ciBhY2NlcHRhbmNlIG9mIHRoZXNlIFRlcm1zIG9mIFVzZSwgWW91IGFyZSBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgcnVsZXMvZ3VpZGVsaW5lczpcbiAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jcHJpbWUgcHJvdmlkZXMgU2VydmljZXMgdGhyb3VnaCB0aGUgV2Vic2l0ZSBhcyBhIG1hcmtldHBsYWNlIGFuZCBmYWNpbGl0YXRlcyB0aGUgVXNlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYXZhaWwgZGlhZ25vc3RpYyB0ZXN0LyBwYWNrYWdlcyBmYWNpbGl0aWVzIG9mZmVyZWQgYnkgVGhpcmQgUGFydHkgTGFicyB0aHJvdWdoIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWJzaXRlLiBkb2NwcmltZSBpcyBub3QgYW5kIHNoYWxsIG5vdCBiZSByZXNwb25zaWJsZSBmb3IgYW55IHNhbXBsZSBjb2xsZWN0ZWQsIHRlc3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmR1Y3RlZCBhbmQgcmVwb3J0cyBnZW5lcmF0ZWQgYnkgdGhlIFRoaXJkIFBhcnR5IExhYnMgYW5kIGRvZXMgbm90IGRlYWwgd2l0aCBhbnkgb2ZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcmQgUGFydHkgTGFic+KAmSBjbGllbnQgb3IgcGF0aWVudCBtYW5hZ2VkIGJ5IHN1Y2ggVGhpcmQgUGFydHkgTGFicyB0aHJvdWdoIHRoZSBXZWJzaXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBvbmx5IHByb3ZpZGVzIGZhY2lsaXRhdGlvbiBTZXJ2aWNlcyB0byB0aGUgVXNlcnMgdGhyb3VnaCB0aGUgV2Vic2l0ZS4gVXNlIG9mIHRoZSBXZWJzaXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heSByZXF1aXJlIHRoZSBUaGlyZCBQYXJ0eSBMYWJzIHRvIHVzZSBzb2Z0d2FyZSBhbmQgdGhlIFRoaXJkIFBhcnR5IGhlYWx0aCBjYXJlIHNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzIGhhdmUgdG8gZW5zdXJlIHRoZSBwcm9jdXJlbWVudCBvZiBzdWNoIHNvZnR3YXJlIGZyb20gdGhlIGNvbmNlcm5lZCBwcm92aWRlcnMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXIgYW5kIHRoZSBUaGlyZCBQYXJ0eSBMYWJzIGFncmVlIHRvIHVzZSB0aGUgV2Vic2l0ZSBhbmQgdGhlIG1hdGVyaWFscyBwcm92aWRlZCB0aGVyZWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ubHkgZm9yIHB1cnBvc2VzIHRoYXQgYXJlIHBlcm1pdHRlZCBieTogKGEpIHRoZXNlIFRlcm1zIG9mIFVzZTsgYW5kIChiKSBhbnkgYXBwbGljYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXcocyksIHJlZ3VsYXRpb24gb3IgZ2VuZXJhbGx5IGFjY2VwdGVkIHByYWN0aWNlcyBvciBndWlkZWxpbmVzIGluIHRoZSByZWxldmFudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXJpc2RpY3Rpb25zLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Tk8gRE9DVE9SLVBBVElFTlQgUkVMQVRJT05TSElQOjwvc3Bhbj4gZG9jcHJpbWUgZG9lcyBub3QgcmVwbGFjZSBZb3VyIHJlbGF0aW9uc2hpcCB3aXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBoeXNpY2lhbiBvciBoZWFsdGhjYXJlIHByb3ZpZGVyLiBUaGUgaW5mb3JtYXRpb24gaW50ZXJwcmV0ZWRTSE9VTEQgTk9UIGJlIHJlbGllZCB1cG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzIGEgc3Vic3RpdHV0ZSBmb3Igc291bmQgcHJvZmVzc2lvbmFsIG1lZGljYWwgYWR2aWNlLCBldmFsdWF0aW9uIG9yIGNhcmUgZnJvbSBZb3VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBoeXNpY2lhbiBvciBvdGhlciBxdWFsaWZpZWQgaGVhbHRoY2FyZSBwcm92aWRlci5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBhY2tub3dsZWRnZSB0aGF0IHRoZSBNZWRpY2FsIEV4cGVydHMgZW1wYW5lbGVkIHdpdGggVXMgYXJlIGluZGVwZW5kZW50IGNvbnRyYWN0b3JzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCB0aGVyZWJ5IGRvY3ByaW1lIGhhcyBhbiBpbmRlcGVuZGVudCBjb250cmFjdG9yIHJlbGF0aW9uc2hpcCB3aXRoIHN1Y2ggTWVkaWNhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeHBlcnRzIGFuZCB0aGVyZWZvcmUgaW4gbm8gZXZlbnQgZG9jcHJpbWUgd2lsbCBiZSBkaXJlY3RseSBvciB2aWNhcmlvdXNseSBsaWFibGUgZm9yIGFueVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZHZpY2Ugb3IgbWVkaWNhbCBjb25zdWx0YW5jeSBvciBhbnkgbG9zcyBhcmlzaW5nIHRoZXJlZnJvbSB0aGF0IHRoZSBNZWRpY2FsIEV4cGVydHMgbWF5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGUgdG8gWW91IG9yIFlvdSBtYXkgYXZhaWwgYXMgcGFydCBvZiB0aGUgU2VydmljZXMuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3UgYWNrbm93bGVkZ2UgdGhhdCB0aGUgZS1wcmVzY3JpcHRpb24gd2hpY2ggbWF5IGJlIGlzc3VlZCBieSB0aGUgTWVkaWNhbCBFeHBlcnQocykgd2lsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZSBhIHZhbGlkIHByZXNjcmlwdGlvbiB1bmRlciBhcHBsaWNhYmxlIGxhdyhzKSBvZiBJbmRpYSBhbmQgbWF5IGJlIHVzZWQgZm9yIGRpc3BlbnNhdGlvbiBvZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRpY2luZXMgYnkgYW55IHBoYXJtYWNpc3QgaW4gSW5kaWEuIFlvdSBmdXJ0aGVyIGFncmVlIGFuZCBhY2tub3dsZWRnZSB0aGF0IGlmIGFueSBlLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzY3JpcHRpb24gd2hpY2ggaXMgcHJvY2Vzc2VkIHRocm91Z2ggdGhlIFdlYnNpdGUgKHdoZXRoZXIgb3JpZ2luYWwgb3Igc2Nhbm5lZCBjb3B5IG9mXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBvcmlnaW5hbCBwcmVzY3JpcHRpb24pIGZvciBwcm9jdXJpbmcgbWVkaWNpbmVzIGlzIG9ubHkgYnkgdGhlIE1lZGljYWwgRXhwZXJ0cywgYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3ByaW1lIHdpbGwgb25seSBhY3QgYXMgYW4gYWdncmVnYXRvciBhbmQgYXNzdW1lIG5vIHJlc3BvbnNpYmlsaXR5IGFuZC8gb3IgbGlhYmlsaXR5IGluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF0aW9uIHRvIHN1Y2ggZS1wcmVzY3JpcHRpb24uXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2NwcmltZSBpcyBkZXNpZ25lZCB0byBzdXBwb3J0IHRoZSBoZWFsdGggZGVjaXNpb25zIGFuZCBjaG9pY2VzIHRoYXQgWW91IG1ha2UuIFRoZXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2lzaW9ucyBhbmQgY2hvaWNlcyBhcmUgWW91cnMsIGFuZCBXZSBiZWxpZXZlIHRoYXQgWW91LCBpbiBjb25uZWN0aW9uIHdpdGggdGhlIGFkdmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3UgcmVjZWl2ZSBmcm9tIFlvdXIgZG9jdG9yIG9yIG90aGVyIHByb2Zlc3Npb25hbCBoZWFsdGhjYXJlIHByb3ZpZGVyLCBhcmUgdGhlIGJlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaXNpb24gbWFrZXIgYWJvdXQgWW91ciBoZWFsdGguIFdlIGNhbm5vdCBtYWtlIGRlY2lzaW9ucyBmb3IgeW91LiBIb3dldmVyLCB3aGF0IFdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbiBkbyBpcyBoZWxwIFlvdSBmaW5kIGdvb2QgaGVhbHRoIGluZm9ybWF0aW9uIGFuZCBjb25uZWN0IHdpdGggZG9jdG9ycyBmb3IgaW4tcGVyc29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZm9ybWF0aW9uLiBPbiBkb2NwcmltZSBZb3UgY2FuIGFzayBhbmQgZmluZCBpbmZvcm1hdGlvbmFsIHF1ZXN0aW9ucyBhbmQgcmVsYXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZHVjYXRpb25hbCBhbnN3ZXJzIGJ5IE1lZGljYWwgRXhwZXJ0cy4gVGhlIFdlYnNpdGUgaXMgbm90IGEgcGxhY2UgZm9yIHRoZSBwcmFjdGljZSBvZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRpY2luZSwgYnV0IE1lZGljYWwgRXhwZXJ0cyBvbiB0aGUgV2Vic2l0ZSBjYW4gYmUgYSByZXNvdXJjZSBmb3IgcmVsaWFibGUsIHJlbGV2YW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYWwgaGVhbHRoIGluZm9ybWF0aW9uLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIFNlcnZpY2VzIHNob3VsZCBub3QgYmUgZGVwZW5kZWQgdXBvbiBhbmQgc2hvdWxkIG5vdCBiZSB0cmVhdGVkIGFzIGEgcmVwbGFjZW1lbnQgZm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9idGFpbmluZyBjb25zdWx0YXRpb24gZm9yIGRpc2Vhc2VzIGFzIHRoZSBjb25zdWx0YXRpb24gcHJvdmlkZWQgdGhyb3VnaCB0aGUgV2Vic2l0ZSBpcyBnZW5lcmljIGluIHRoZSBhcHByb2FjaCBhbmQgc2hhbGwgbm90IGFuZCBjYW5ub3QgYWN0IGFzIGEgc3Vic3RpdHV0ZSBmb3IgcGh5c2ljYWwgY29uc3VsdGF0aW9uIHdpdGggYSBkb2N0b3IuIEFsc28gdGhlIENvbnN1bHRhdGlvbnMgcHJvdmlkZWQgdGhyb3VnaCB0aGUgV2Vic2l0ZSBtYXkgbm90IGJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWdub3N0aWMgaW4gbmF0dXJlLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2UgZG8gbm90IHJlY29tbWVuZCBvciBlbmRvcnNlIGFueSBzcGVjaWZpYyBNZWRpY2FsIEV4cGVydChzKSwgdGVzdHMsIHByb2R1Y3RzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZWR1cmVzLCBvcGluaW9ucywgb3Igb3RoZXIgaW5mb3JtYXRpb24gdGhhdCBtYXkgYmUgbWVudGlvbmVkIG9uIHRoZSBXZWJzaXRlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWxpYW5jZSBvbiBhbnkgaW5mb3JtYXRpb24gcHJvdmlkZWQgb24gdGhlIFdlYnNpdGUgaXMgc29sZWx5IGF0IFlvdXIgb3duIHJpc2suIEluIGNhc2Ugb2ZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW55IG1lZGljYWwgZW1lcmdlbmN5LCBraW5kbHkgY29udGFjdCBZb3VyIG5lYXJlc3QgZG9jdG9yL2hvc3BpdGFsIG9yIGFueSByZWxhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBsaW5lLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIFNlcnZpY2VzIGFyZSBub3QgZm9yIHVzZSBpbiBtZWRpY2FsIGVtZXJnZW5jaWVzIG9yIGZvciBjcml0aWNhbCBoZWFsdGggc2l0dWF0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJpbmcgcHJvbXB0IG1lZGljYWwgYXR0ZW50aW9uLiBUaGUgU2VydmljZXMgYXJlIG5vdCBpbnRlbmRlZCB0byBiZSByZWFsLXRpbWUgYW5kIG1heVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3QgYmUgdGhlIGJlc3Qgc29sdXRpb24gd2hlbiBhIGZhY2UtdG8tZmFjZSBjb25zdWx0YXRpb24gaXMgYSBtdXN0IGFuZCB0aGVyZWZvcmUgV2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb25nbHkgZGlzY291cmFnZSBhbnkgZGVsYXkgaW4gc2Vla2luZyBhZHZpY2UgZnJvbSBZb3VyIGRvY3RvciBvbiBhY2NvdW50IG9mIHNvbWV0aGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0IFlvdSBtYXkgaGF2ZSBoZWFyZC92aWV3ZWQgb24gdGhlIFdlYnNpdGUuIFlvdSB0YWtlIGZ1bGwgcmVzcG9uc2liaWxpdHkgZm9yIGVuc3VyaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQgdGhlIGluZm9ybWF0aW9uIHN1Ym1pdHRlZCBpcyBhY2N1cmF0ZSBhbmQgZG9jcHJpbWUgc2hhbGwgbm90IG1ha2UgYW55IGVmZm9ydCB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZSBhbnkgaW5mb3JtYXRpb24gcHJvdmlkZWQgYnkgWW91IGZvciB1c2luZyB0aGUgU2VydmljZXMgd2l0aCByZXNwZWN0IHRvIGNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcnJlY3RuZXNzIG9yIHVzYWJpbGl0eS4gV2UsIHdpdGggYW4gaW50ZW50aW9uIHRvIHByb3ZpZGUgdGhlIGJlc3Qgc2VydmljZXMgcG9zc2libGUgY291bGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNrIFlvdSB0byBzaGFyZSBtb3JlIGluZm9ybWF0aW9uIGFzIGFuZCB3aGVuIG5lZWRlZC4gVGhlIFNlcnZpY2VzIHNob3VsZCBub3QgYmUgdXNlZCBmb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1lcmdlbmN5IGFwcG9pbnRtZW50IHB1cnBvc2VzLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIG9waW5pb25zLCBzdGF0ZW1lbnRzLCBhbnN3ZXJzIGFuZCB0ZWxlLWNvbnN1bHRhdGlvbnMgKGNvbGxlY3RpdmVseSDigJxDb25zdWx0YXRpb27igJ0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVkIGJ5IHRoZSBNZWRpY2FsIEV4cGVydHMgdGhyb3VnaCB0aGUgV2Vic2l0ZSBhcmUgc29sZWx5IHRoZSBpbmRpdmlkdWFsIGFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRlcGVuZGVudCBvcGluaW9ucyBhbmQgc3RhdGVtZW50cyBvZiBzdWNoIE1lZGljYWwgRXhwZXJ0cyBhbmQgZG8gbm90IHJlZmxlY3QgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9waW5pb25zIG9mIGRvY3ByaW1lLCBpbmNsdWRpbmcgYnV0IG5vdCBsaW1pdGVkIHRvIGl0cyBvZmZpY2VycywgZGlyZWN0b3JzLCByZXByZXNlbnRhdGl2ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIGl0cyBhZmZpbGlhdGVzLiBkb2NwcmltZSBkb2VzIG5vdCByZWNvbW1lbmQgb3IgZW5kb3JzZSBhbnkgc3BlY2lmaWMgdGVzdHMsIHBoeXNpY2lhbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzLCBwcm9jZWR1cmVzLCBvcGluaW9ucywgb3Igb3RoZXIgaW5mb3JtYXRpb24gdGhhdCBtYXkgYmUgbWVudGlvbmVkIG9uIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWJzaXRlLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGluY2x1c2lvbiBvZiBwcm9mZXNzaW9uYWxzLCBzcGVjaWFsaXN0cyBhbmQvIG9yIE1lZGljYWwgRXhwZXJ0cyBvbiB0aGUgV2Vic2l0ZSBvciBpbiBhbnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmVzc2lvbmFsIGRpcmVjdG9yeSBvbiB0aGUgV2Vic2l0ZSBkb2VzIG5vdCBpbXBseSByZWNvbW1lbmRhdGlvbiBvciBlbmRvcnNlbWVudCBvZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNoIHNwZWNpYWxpc3RzIGFuZC8gb3IgTWVkaWNhbCBFeHBlcnRzIG5vciBpcyBzdWNoIGluZm9ybWF0aW9uIGludGVuZGVkIGFzIGEgdG9vbCBmb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVyaWZ5aW5nIHRoZSBjcmVkZW50aWFscywgcXVhbGlmaWNhdGlvbnMsIG9yIGFiaWxpdGllcyBvZiBhbnkgc3BlY2lhbGlzdHMgYW5kLyBvciBNZWRpY2FsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV4cGVydHMgY29udGFpbmVkIHRoZXJlaW4uIFN1Y2ggaW5mb3JtYXRpb24gaXMgcHJvdmlkZWQgb24gYW4g4oCYYXMtaXPigJkgYmFzaXMgYW5kIGRvY3ByaW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2NsYWltcyBhbGwgd2FycmFudGllcywgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZCwgaW5jbHVkaW5nIGJ1dCBub3QgbGltaXRlZCB0byB0aGUgaW1wbGllZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXJyYW50aWVzIG9mIG1lcmNoYW50YWJpbGl0eSBhbmQgZml0bmVzcyBmb3IgcGFydGljdWxhciBwdXJwb3NlLiBkb2NwcmltZSBkaXNjbGFpbXMgYW55XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2FsIG9yIGZpbmFuY2lhbCBldmVudHMgb3Igb3V0Y29tZXMgcmVsYXRlZCB0byB0aGUgU2VydmljZXMgYXZhaWxlZCB0aHJvdWdoIHRoZSB1c2Ugb2YgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlYnNpdGUuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2NwcmltZSBtYWtlcyBubyB3YXJyYW50eSB0aGF0IHRoZSBTZXJ2aWNlcyB3aWxsIG1lZXQgWW91ciByZXF1aXJlbWVudHMsIG9yIHRoYXQgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnZpY2Uocykgd2lsbCBiZSB1bmludGVycnVwdGVkLCB0aW1lbHksIHNlY3VyZSwgb3IgZXJyb3IgZnJlZS4gVGhpcyBpbmNsdWRlcyBsb3NzIG9mIGRhdGEgb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW55IHNlcnZpY2UgaW50ZXJydXB0aW9uIGNhdXNlZCBieSBkb2NwcmltZSBlbXBsb3llZXMgb3IgcmVwcmVzZW50YXRpdmVzLiBkb2NwcmltZSBpcyBub3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2libGUgZm9yIHRyYW5zbWlzc2lvbiBlcnJvcnMsIGNvcnJ1cHRpb24gb2YgZGF0YS5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3ByaW1lIGlzIGZvciBwZXJzb25hbCB1c2UgYW5kIHRoZSBTZXJ2aWNlcyBhcmUgZm9yIGluZGl2aWR1YWxzIHRvIHVzZSBmb3Igc3VwcG9ydGluZyB0aGVpclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25hbCBoZWFsdGggZGVjaXNpb25zLiBZb3UgbWF5IHVzZSB0aGUgV2Vic2l0ZSBmb3IgcGVyc29uYWwsIGJ1dCBub3QgZm9yIGNvbW1lcmNpYWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1cnBvc2VzLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciByaWdodCB0byB1c2UgdGhlIFNlcnZpY2VzIGlzIG5vdCB0cmFuc2ZlcmFibGUuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3R3aXRoc3RhbmRpbmcgYW55dGhpbmcgdG8gdGhlIGNvbnRyYXJ5IGNvbnRhaW5lZCBoZXJlaW4sIFlvdSBhbG9uZSBzaGFsbCBiZSBsaWFibGUgZm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgZGVhbGluZ3MgYW5kIGludGVyYWN0aW9uIHdpdGggcGF0aWVudHMgb3IgTWVkaWNhbCBFeHBlcnRzIChhcyB0aGUgY2FzZSBtYXkgYmUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhY3RlZCBvciBtYW5hZ2VkIHRocm91Z2ggdGhlIFdlYnNpdGUgYW5kIGRvY3ByaW1lIHNoYWxsIGhhdmUgbm8gbGlhYmlsaXR5IG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpYmlsaXR5IGluIHRoaXMgcmVnYXJkLiBkb2NwcmltZSBkb2VzIG5vdCBndWFyYW50ZWUgb3IgbWFrZSBhbnkgcmVwcmVzZW50YXRpb24gd2l0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwZWN0IHRvIHRoZSBjb3JyZWN0bmVzcywgY29tcGxldGVuZXNzIG9yIGFjY3VyYWN5IG9mIHRoZSBpbmZvcm1hdGlvbiBvciBkZXRhaWwgcHJvdmlkZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnkgc3VjaCBjbGllbnQsIHBhdGllbnQsIFVzZXIsIE1lZGljYWwgRXhwZXJ0cyBvciBhbnkgdGhpcmQgcGFydHkgdGhyb3VnaCB0aGUgV2Vic2l0ZS5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBleGNoYW5nZXMgYmV0d2VlbiB0aGUgTWVkaWNhbCBFeHBlcnRzIGFuZCB0aGUgcGF0aWVudCB0aHJvdWdoIHRoZSBjaGF0IHdpbmRvdyBvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyIHRlbGVwaG9uZSAoYXMgdGhlIGNhc2UgbWF5YmUpIGFuZCB0aGUgZS1wcmVzY3JpcHRpb24gd291bGQgYmUgYWNjZXNzaWJsZSB0byBkb2NwcmltZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHB1cnBvc2VzIG9mIG1vbml0b3JpbmcgdGhlIHF1YWxpdHkgb2YgdGhlIGNvbnN1bHRhdGlvbi5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3ByaW1lIG1heSwgYXQgaXRzIHNvbGUgZGlzY3JldGlvbiwgc3VzcGVuZCBVc2Vy4oCZcyBvciBNZWRpY2FsIEV4cGVydOKAmXMgYWJpbGl0eSB0byB1c2Ugb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzIHRoZSBXZWJzaXRlIGF0IGFueSB0aW1lIHdoaWxlIGRvY3ByaW1lIGludmVzdGlnYXRlcyBjb21wbGFpbnRzIG9yIGFsbGVnZWQgdmlvbGF0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZiB0aGVzZSBUZXJtcyBvZiBVc2UsIG9yIGZvciBhbnkgb3RoZXIgcmVhc29uLiBkb2NwcmltZSBoYXMgdGhlIHJpZ2h0IHRvIGVkaXQgcHJvZmlsZXMgb2ZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVkaWNhbCBFeHBlcnRzIHRvIG1ha2UgdGhlbSBtb3JlIHN1aXRhYmxlIGZvciBwYXRpZW50LyBVc2VycyBzZWFyY2hlcyBvbiB0aGUgV2Vic2l0ZS5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdHdpdGhzdGFuZGluZyBhbnl0aGluZyB0byB0aGUgY29udHJhcnkgY29udGFpbmVkIGhlcmVpbiwgVXNlcnMgYWxvbmUgc2hhbGwgYmUgbGlhYmxlIGZvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWFsaW5ncyBhbmQgaW50ZXJhY3Rpb24gd2l0aCBUaGlyZCBQYXJ0eSBMYWJzIGFuZCBNZWRpY2FsIEV4cGVydHMgY29udGFjdGVkIG9yIG1hbmFnZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3VnaCB0aGUgV2Vic2l0ZSBhbmQgZG9jcHJpbWUgc2hhbGwgaGF2ZSBubyBsaWFiaWxpdHkgb3IgcmVzcG9uc2liaWxpdHkgaW4gdGhpcyByZWdhcmQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3ByaW1lIGRvZXMgbm90IGd1YXJhbnRlZSBvciBtYWtlIGFueSByZXByZXNlbnRhdGlvbiB3aXRoIHJlc3BlY3QgdG8gdGhlIGNvcnJlY3RuZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZW5lc3Mgb3IgYWNjdXJhY3kgb2YgdGhlIHRlc3RzIGNvbmR1Y3RlZCBhbmQgcmVwb3J0cyBnZW5lcmF0ZWQgYnkgdGhlIFRoaXJkIFBhcnR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExhYnMgb3IgZS1wcmVzY3JpcHRpb24gcHJlc2NyaWJlZCBieSBNZWRpY2FsIEV4cGVydHMuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2NwcmltZSBtYXksIGF0IGl0cyBzb2xlIGRpc2NyZXRpb24sIHN1c3BlbmQgVGhpcmQgUGFydHkgTGFicyBvciBVc2VycyBhYmlsaXR5IHRvIHVzZSBvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3MgdGhlIFdlYnNpdGUgYXQgYW55IHRpbWUgd2hpbGUgZG9jcHJpbWUgaW52ZXN0aWdhdGVzIGNvbXBsYWludHMgb3IgYWxsZWdlZCB2aW9sYXRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mIHRoZXNlIFRlcm1zIG9mIFVzZSwgb3IgZm9yIGFueSBvdGhlciByZWFzb24uIGRvY3ByaW1lIGhhcyB0aGUgcmlnaHQgdG8gZWRpdCBwcm9maWxlcyBvZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlyZCBQYXJ0eSBMYWJzIHRvIG1ha2UgdGhlbSBtb3JlIHN1aXRhYmxlIGZvciBwYWNrYWdlIHNlYXJjaGVzIG9uIHRoZSBXZWJzaXRlLiBJZiBUaGlyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXJ0eSBMYWJzIGFuZC8gb3IgVXNlcnMgZmluZCBhbnkgd3JvbmcgaW5mb3JtYXRpb24gb24gdGhlIFdlYnNpdGUgaW4gcmVsYXRpb24gdG8gc3VjaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlyZCBQYXJ0eSBMYWJzIGFuZC8gb3IgVXNlciwgdGhleSBjYW4gY29ycmVjdCBpdCB0aGVtc2VsdmVzIG9yIGNvbnRhY3QgZG9jcHJpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1tZWRpYXRlbHkgZm9yIHN1Y2ggY29ycmVjdGlvbnMuIGRvY3ByaW1lIHNoYWxsIGhhdmUgbm8gbGlhYmlsaXR5IG9yIHJlc3BvbnNpYmlsaXR5IGluIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnYXJkLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2Mtc3ViaGVhZGluZ1wiPjMuJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7RUxJR0lCSUxJVFk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFzIGEgY29uZGl0aW9uIHRvIFlvdXIgdXNlIG9mIHRoZSBXZWJzaXRlLCBZb3UgbXVzdCBiZSAxOCAoZWlnaHRlZW4pIHllYXJzIG9mIGFnZSBvciBvbGRlciB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2Ugb3IgdmlzaXQgdGhlIFdlYnNpdGUgaW4gYW55IG1hbm5lci4gQnkgdmlzaXRpbmcgdGhlIFdlYnNpdGUgb3IgYWNjZXB0aW5nIHRoZXNlIFRlcm1zIG9mIFVzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91IHJlcHJlc2VudCBhbmQgd2FycmFudCB0byBkb2NwcmltZSB0aGF0IFlvdSBhcmUgMTggKGVpZ2h0ZWVuKSB5ZWFycyBvZiBhZ2Ugb3Igb2xkZXIsIGFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0IFlvdSBoYXZlIHRoZSByaWdodCwgYXV0aG9yaXR5IGFuZCBjYXBhY2l0eSB0byB1c2UgdGhlIFdlYnNpdGUgYW5kIGFncmVlIHRvIGFuZCBhYmlkZSBieVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVzZSBUZXJtcyBvZiBVc2UuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGb3IgdGhlIHB1cnBvc2VzIG9mIGF2YWlsaW5nIHRoZSBTZXJ2aWNlcyBhbmQvb3IgdHJhbnNhY3Rpbmcgd2l0aCB0aGUgVGhpcmQgUGFydHkgU2VydmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm92aWRlcnMgdGhyb3VnaCB0aGUgV2Vic2l0ZSwgWW91IGFyZSByZXF1aXJlZCB0byBvYnRhaW4gcmVnaXN0cmF0aW9uLCBpbiBhY2NvcmRhbmNlIHdpdGggdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2NlZHVyZSBlc3RhYmxpc2hlZCBieSBkb2NwcmltZSBpbiB0aGlzIHJlZ2FyZC4gQXMgcGFydCBvZiB0aGUgcmVnaXN0cmF0aW9uIHByb2Nlc3MsIGRvY3ByaW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heSBjb2xsZWN0IHRoZSBmb2xsb3dpbmcgcGVyc29uYWwgaW5mb3JtYXRpb24gZnJvbSBZb3U6XG4gICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwic3ViLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOYW1lO1xuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyIElEO1xuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbWFpbCBhZGRyZXNzO1xuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGRyZXNzIChpbmNsdWRpbmcgY291bnRyeSBhbmQgWklQLyBwb3N0YWwgY29kZSk7XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdlbmRlcjtcbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWdlO1xuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQaG9uZSBudW1iZXI7XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgYW5kIFlvdXIgZmFtaWx54oCZIG1lZGljYWwgaGlzdG9yeTtcbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQW55IG90aGVyIGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSByZWdpc3RyYXRpb24gb24gb3IgdXNlLyBhY2Nlc3Mgb2YgdGhlIFdlYnNpdGUgaXMgb25seSBhdmFpbGFibGUgdG8gbmF0dXJhbCBwZXJzb25zLCBvdGhlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGFuIHRob3NlIHdobyBhcmUg4oCYaW5jb21wZXRlbnQgdG8gY29udHJhY3TigJkgdW5kZXIgdGhlIENvbnRyYWN0IEFjdC4gVGhhdCBpcywgcGVyc29uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRpbmcgbWlub3JzLCB1bi1kaXNjaGFyZ2VkIGluc29sdmVudHMgZXRjLiBhcmUgbm90IGVsaWdpYmxlIHRvIHJlZ2lzdGVyIG9uLCBvciB1c2UvIGFjY2Vzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgV2Vic2l0ZS4gQnkgcmVnaXN0ZXJpbmcsIGFjY2Vzc2luZyBvciB1c2luZyB0aGUgV2Vic2l0ZSwgWW91IGFjY2VwdCB0aGUgdGVybXMgb2YgdGhlc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVybXMgb2YgVXNlIGFuZCByZXByZXNlbnQgYW5kIHdhcnJhbnQgdG8gZG9jcHJpbWUgdGhhdCB5b3UgYXJlIOKAmGNvbXBldGVudCB0byBjb250cmFjdOKAmVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlciB0aGUgQ29udHJhY3QgQWN0IGFuZCBoYXZlIHRoZSByaWdodCwgYXV0aG9yaXR5IGFuZCBjYXBhY2l0eSB0byB1c2UgdGhlIFdlYnNpdGUgYW5kIGFncmVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGFuZCBhYmlkZSBieSB0aGVzZSBUZXJtcyBvZiBVc2UuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBIHJlZ2lzdGVyZWQgaWQgY2FuIG9ubHkgYmUgdXRpbGl6ZWQgYnkgdGhlIHBlcnNvbiB3aG9zZSBkZXRhaWxzIGhhdmUgYmVlbiBwcm92aWRlZCBhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jcHJpbWUgZG9lcyBub3QgcGVybWl0IG11bHRpcGxlIHBlcnNvbnMgdG8gc2hhcmUgYSBzaW5nbGUgbG9nIGluLyByZWdpc3RyYXRpb24gaWQuIEhvd2V2ZXIsIGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJlZCB1c2VyLCBiZWluZyBhbHNvIGEgcGFyZW50IG9yIGxlZ2FsIGd1YXJkaWFuIG9mIGEgcGVyc29uIOKAmGluY29tcGV0ZW50IHRvIGNvbnRyYWN04oCZXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2ggYXMgbWlub3JzIG9yIHBlcnNvbnMgd2l0aCB1bnNvdW5kIG1pbmQsIHdvdWxkIGJlIHBlcm1pdHRlZCB0byBhY2Nlc3MgYW5kIHVzZSB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2Vic2l0ZSBmb3IgdGhlIHB1cnBvc2VzIG9mIHByb2N1cmluZyB0aGUgU2VydmljZXMsIG9uIGJlaGFsZiBvZiBzdWNoIHBlcnNvbnMuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPcmdhbml6YXRpb25zLCBjb21wYW5pZXMsIGFuZCBidXNpbmVzc2VzIG1heSBub3QgYmVjb21lIHJlZ2lzdGVyZWQgbWVtYmVycyBvbiB0aGUgV2Vic2l0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvciB1c2UgdGhlIFdlYnNpdGUgYXMgaW5kaXZpZHVhbCBtZW1iZXJzLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2Mtc3ViaGVhZGluZ1wiPjQuJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7WU9VUiBBQ0NPVU5UPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+WW91IGFncmVlIGFuZCBhY2tub3dsZWRnZSB0aGF0IFlvdSB3b3VsZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZSBhY2N1cmF0ZSwgdHJ1dGhmdWwsIGN1cnJlbnQgYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlIGluZm9ybWF0aW9uIHdoZW4gY3JlYXRpbmcgWW91ciBhY2NvdW50IGFuZCBpbiBhbGwgWW91ciBkZWFsaW5ncyB0aHJvdWdoIHRoZSBXZWJzaXRlO1xuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbnRhaW4gYW5kIHByb21wdGx5IHVwZGF0ZSBZb3VyIGFjY291bnQgaW5mb3JtYXRpb247XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWludGFpbiB0aGUgc2VjdXJpdHkgb2YgWW91clxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50IGJ5IG5vdCBzaGFyaW5nIFlvdXIgcGFzc3dvcmQgd2l0aCBvdGhlcnMgYW5kIHJlc3RyaWN0aW5nIGFjY2VzcyB0byBZb3VyIGFjY291bnQgYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgY29tcHV0ZXI7XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9tcHRseSBub3RpZnkgZG9jcHJpbWUgaWYgWW91IGRpc2NvdmVyIG9yIG90aGVyd2lzZSBzdXNwZWN0IGFueSBzZWN1cml0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhY2hlcyByZWxhdGluZyB0byB0aGUgV2Vic2l0ZTsgYW5kXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWtlIHJlc3BvbnNpYmlsaXR5IGZvciBhbGwgdGhlIGFjdGl2aXRpZXMgdGhhdCBvY2N1ciB1bmRlciBZb3VyIGFjY291bnQgYW5kIGFjY2VwdCBhbGwgcmlzayBvZiB1bmF1dGhvcml6ZWQgYWNjZXNzLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2Mtc3ViaGVhZGluZ1wiPjUuJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Q09OVEVOVCBBTkQgSU5GT1JNQVRJT04gT04gVEhFIFdFQlNJVEU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj5kb2NwcmltZSBhdXRob3JpemVzIFlvdSB0byB2aWV3IGFuZCBhY2Nlc3MgdGhlIGNvbnRlbnQgYXZhaWxhYmxlIG9uIHRoZSBXZWJzaXRlIHNvbGVseSBmb3IgdGhlIHB1cnBvc2VzIG9mIGF2YWlsaW5nIHRoZSBTZXJ2aWNlcywgc3VjaCBhcyB2aXNpdGluZywgdXNpbmcsIG9yZGVyaW5nLCByZWNlaXZpbmcsIGRlbGl2ZXJpbmcgYW5kIGNvbW11bmljYXRpbmcgb25seSBhcyBwZXIgdGhlc2UgVGVybXMgb2YgVXNlLiBUaGUgY29udGVudHMgb24gdGhlIFdlYnNpdGUgaW5jbHVkaW5nIGluZm9ybWF0aW9uLCB0ZXh0LCBncmFwaGljcywgaW1hZ2VzLCBsb2dvcywgYnV0dG9uIGljb25zLCBzb2Z0d2FyZSBjb2RlLCBkZXNpZ24sIGFuZCB0aGUgY29sbGVjdGlvbiwgYXJyYW5nZW1lbnQgYW5kIGFzc2VtYmx5IG9mIGNvbnRlbnQgKOKAnENvbnRlbnTigJ0pLCBjb250YWlucyB0aGUgZm9sbG93aW5nOjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcmQgUGFydHkgU2VydmljZSBQcm92aWRlcnPigJkgY29udGVudCBpbmNsdWRpbmcgYW55IGNvbnRlbnQgd2hpY2ggbWF5IGJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldmVsb3BlZCBvbiBiZWhhbGYgb2YgYW5kIHB1Ymxpc2hlZCBpbiB0aGUgbmFtZSBvZiBhIFRoaXJkIFNlcnZpY2VzIFByb3ZpZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICjigJxUaGlyZCBQYXJ0eSBDb250ZW504oCdKVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW4taG91c2UgY29udGVudCBwcm92aWRlZCBieSBkb2NwcmltZSBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uLCB0ZXh0LCBjb3B5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdWRpbywgdmlkZW8sIHBob3RvZ3JhcGhzLCBpbGx1c3RyYXRpb25zLCBncmFwaGljcyBhbmQgb3RoZXIgdmlzdWFscyAo4oCcZG9jcHJpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGVudOKAnSlcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFueSBjb250ZW50IHN1Ym1pdHRlZCBieSBZb3U7XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiPlRoZSBkb2NwcmltZSBjb250ZW50IGlzIHRoZSBwcm9wZXJ0eSBvZiBkb2NwcmltZSBhbmQgaXMgcHJvdGVjdGVkIHVuZGVyIGNvcHlyaWdodCwgdHJhZGVtYXJrIGFuZCBvdGhlciBhcHBsaWNhYmxlIGxhdyhzKS4gWW91IHNoYWxsIG5vdCBtb2RpZnkgdGhlIGRvY3ByaW1lIENvbnRlbnQgb3IgcmVwcm9kdWNlLCBkaXNwbGF5LCBwdWJsaWNseSBwZXJmb3JtLCBkaXN0cmlidXRlLCBvciBvdGhlcndpc2UgdXNlIHRoZSBkb2NwcmltZSBDb250ZW50IGluIGFueSB3YXkgZm9yIGFueSBwdWJsaWMgb3IgY29tbWVyY2lhbCBwdXJwb3NlIG9yIGZvciBwZXJzb25hbCBnYWluLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiPldpdGggcmVzcGVjdCB0byBzdWNoIENvbnRlbnQgdGhhdCB5b3Ugc3VibWl0IG9yIG1ha2UgYXZhaWxhYmxlIG9uIHRoaXMgV2Vic2l0LCB5b3UgZ3JhbnQgZG9jcHJpbWUgYSBwZXJwZXR1YWwsIGlycmV2b2NhYmxlLCBub24tdGVybWluYWJsZSwgd29ybGR3aWRlLCByb3lhbHR5LWZyZWUgYW5kIG5vbi1leGNsdXNpdmUgbGljZW5zZSB0byB1c2UsIGNvcHksIGRpc3RyaWJ1dGUsIHB1YmxpY2x5IGRpc3BsYXksIG1vZGlmeSwgY3JlYXRlIGRlcml2YXRpdmUgd29ya3MsIGFuZCBzdWJsaWNlbnNlIHN1Y2ggbWF0ZXJpYWxzIG9yIGFueSBwYXJ0IG9mIHN1Y2ggbWF0ZXJpYWxzL0NvbnRlbnQgKGFzIHdlbGwgYXMgdXNlIHRoZSBuYW1lIHRoYXQgeW91IHN1Ym1pdCBpbiBjb25uZWN0aW9uIHdpdGggc3VjaCBzdWJtaXR0ZWQgY29udGVudCkuIFdlIHRha2Ugbm8gcmVzcG9uc2liaWxpdHkgYW5kIGFzc3VtZSBubyBsaWFiaWxpdHkgZm9yIGFueSBDb250ZW50IHBvc3RlZCBvciBzdWJtaXR0ZWQgYnkgeW91LiBXZSBoYXZlIG5vIG9ibGlnYXRpb24gdG8gcG9zdCB5b3VyIGNvbW1lbnRzOyB3ZSByZXNlcnZlIHRoZSByaWdodCBpbiBvdXIgYWJzb2x1dGUgZGlzY3JldGlvbiB0byBkZXRlcm1pbmUgd2hpY2ggY29tbWVudHMgYXJlIHB1Ymxpc2hlZCBvbiB0aGUgV2Vic2l0ZS4gSWYgeW91IGRvIG5vdCBhZ3JlZSB0byB0aGVzZSB0ZXJtcyBhbmQgY29uZGl0aW9ucywgcGxlYXNlIGRvIG5vdCBwcm92aWRlIHVzIHdpdGggYW55IHN1Ym1pdHRlZCBDb250ZW50LiBZb3UgYWdyZWUgdGhhdCB5b3UgYXJlIGZ1bGx5IHJlc3BvbnNpYmxlIGZvciB0aGUgY29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgeW91IHN1Ym1pdC5cbiAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiPjxzcGFuPlByb2hpYml0ZWQgQ29udGVudDo8L3NwYW4+IFlvdSBhZ3JlZSB0aGF0IGFueSBDb250ZW50IHN1Ym1pdHRlZCBieSBZb3Ugc2hhbGwgbm90IGluZnJpbmdlIHRoZSBpbnRlbGxlY3R1YWwgcHJvcGVydHksIHByaXZhY3ksIHB1YmxpY2l0eSwgY29weXJpZ2h0LCBvciBvdGhlciBsZWdhbCByaWdodHMgb2YgYW55IHBlcnNvbiBvciBlbnRpdHkuIFRoZSBDb250ZW50IG11c3Qgbm90IGJlIGZhbHNlLCBtaXNsZWFkaW5nLCBmcmF1ZHVsZW50LCBkZWZhbWF0b3J5LCBvciBkZWNlcHRpdmUuIFRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9sbG93aW5nIENvbnRlbnQgaXMgcHJvaGliaXRlZCBvbiB0aGUgV2Vic2l0ZTpcbiAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJzdWItbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCB0aGF0IGRlbWVhbnMsIGRlZ3JhZGVzLCBvciBzaG93cyBoYXRlIHRvd2FyZCBhIHBhcnRpY3VsYXIgcmFjZSwgZ2VuZGVyLCBjdWx0dXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudHJ5LCBiZWxpZWYsIG9yIHRvd2FyZCBhbnkgbWVtYmVyIG9mIGEgcHJvdGVjdGVkIGNsYXNzO1xuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgZGVwaWN0aW5nIG51ZGl0eSwgc2V4dWFsIGJlaGF2aW91ciwgb3Igb2JzY2VuZSBnZXN0dXJlcztcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50IGRlcGljdGluZyBkcnVnIHVzZTtcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50IGRlcGljdGluZyBleGNlc3NpdmUgdmlvbGVuY2UsIGluY2x1ZGluZyB0aGUgaGFybWluZyBvZiBhbmltYWxzO1xuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob2NraW5nLCBzZW5zYXRpb25hbCwgb3IgZGlzcmVzcGVjdGZ1bCBjb250ZW50O1xuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2VwdGl2ZSwgZmFsc2Ugb3IgbWlzbGVhZGluZyBjb250ZW50LCBpbmNsdWRpbmcgZGVjZXB0aXZlIGNsYWltcywgb2ZmZXJzLCBvciBidXNpbmVzcyBwcmFjdGljZXM7XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCB0aGF0IGRpcmVjdHMgdXNlcnMgdG8gcGhpc2hpbmcgbGlua3MsIG1hbHdhcmUsIG9yIHNpbWlsYXJseSBoYXJtZnVsIGNvZGVzIG9yIHNpdGVzOyBhbmRcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50IHRoYXQgZGVjZWl2ZXMgb3RoZXIgVXNlcnMgaW4gYW55IG1hbm5lciBmb3IgcHJvdmlkaW5nIHRoZWlyIHBlcnNvbmFsIGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhvdXQgdGhlaXIga25vd2xlZGdlLCB1bmRlciBmYWxzZSBwcmV0ZW5jZXMsIG9yIHRvIGNvbXBhbmllcyB0aGF0IHJlc2VsbCwgdHJhZGUsIG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyd2lzZSBtaXN1c2UgdGhhdCBwZXJzb25hbCBpbmZvcm1hdGlvblxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj5JZiBkb2NwcmltZSBkZXRlcm1pbmVzIHRoYXQgeW91IGhhdmUgcHJvdmlkZWQgZnJhdWR1bGVudCwgaW5hY2N1cmF0ZSwgb3IgaW5jb21wbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mb3JtYXRpb24sIGluY2x1ZGluZyB0aHJvdWdoIGZlZWRiYWNrLCBkb2NwcmltZSByZXNlcnZlcyB0aGUgcmlnaHQgdG8gaW1tZWRpYXRlbHkgc3VzcGVuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgeW91ciBhY2Nlc3MgdG8gdGhlIFdlYnNpdGUgb3IgYW55IG9mIHlvdXIgYWNjb3VudHMgd2l0aCBkb2NwcmltZSBhbmQgbWFrZXMgc3VjaCBkZWNsYXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb24gdGhlIHdlYnNpdGUgYWxvbmdzaWRlIHlvdXIgbmFtZS95b3VyIGNsaW5pY+KAmXMgbmFtZSBhcyBkZXRlcm1pbmVkIGJ5IGRvY3ByaW1lIGZvciB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3RlY3Rpb24gb2YgaXRzIGJ1c2luZXNzIGFuZCBpbiB0aGUgaW50ZXJlc3RzIG9mIFVzZXJzLiBZb3Ugc2hhbGwgYmUgbGlhYmxlIHRvIGluZGVtbmlmeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jcHJpbWUgZm9yIGFueSBsb3NzZXMgaW5jdXJyZWQgYXMgYSByZXN1bHQgb2YgeW91ciBtaXNyZXByZXNlbnRhdGlvbnMgb3IgZnJhdWR1bGVudCBmZWVkYmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdCBoYXMgYWR2ZXJzZWx5IGFmZmVjdGVkIGRvY3ByaW1lIG9yIGl0cyBVc2Vycy5cbiAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiPllvdSBhY2tub3dsZWRnZSB0aGF0IGFsdGhvdWdoIHNvbWUgb2YgdGhlIGNvbnRlbnQsIHRleHQsIGRhdGEsIGdyYXBoaWNzLCBpbWFnZXMsIGluZm9ybWF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnMsIGd1aWRhbmNlLCBhbmQgb3RoZXIgbWF0ZXJpYWwgKGNvbGxlY3RpdmVseSwg4oCcSW5mb3JtYXRpb27igJ0pIHRoYXQgaXMgcHJvdmlkZWQgdG8gWW91XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbiB0aGUgV2Vic2l0ZSAoaW5jbHVkaW5nIEluZm9ybWF0aW9uIHByb3ZpZGVkIGluIGRpcmVjdCByZXNwb25zZSB0byBZb3VyIHF1ZXN0aW9ucyBvciBwb3N0aW5ncylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heSBiZSBwcm92aWRlZCBieSBpbmRpdmlkdWFscyBpbiB0aGUgbWVkaWNhbCBwcm9mZXNzaW9uLCB0aGUgcHJvdmlzaW9uIG9mIHN1Y2ggSW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvZXMgbm90IGNyZWF0ZSBhIGRvY3Rvci9tZWRpY2FsIHByb2Zlc3Npb25hbC1wYXRpZW50IHJlbGF0aW9uc2hpcCwgYnV0IGlzIHByb3ZpZGVkIHRvIGluZm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91IG9uIHZhcmlvdXMgbWVkaWNhbCBjb25kaXRpb25zLCBtZWRpY2FsIGRpYWdub3NpcyBhbmQgdHJlYXRtZW50IGFuZCBpdCBkb2VzIG5vdCBjb25zdGl0dXRlIGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdCBtZWRpY2FsIGRpYWdub3NpcywgdHJlYXRtZW50IG9yIHByZXNjcmlwdGlvbi4gRXZlcnl0aGluZyBvbiB0aGUgV2Vic2l0ZSBzaG91bGQgYmUgdXNlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIGluZm9ybWF0aW9uIHB1cnBvc2VzIG9ubHkuXG4gICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2Mtc3ViaGVhZGluZ1wiPjYuJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7RElTQ0xBSU1FUjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiPkFzIHdpdGggYW55IG1lZGljYWwgcHJvY2VkdXJlLCB0aGVyZSBhcmUgcG90ZW50aWFsIHJpc2tzIGFzc29jaWF0ZWQgd2l0aCB1c2luZyB0aGUgU2VydmljZXMgb2ZmZXJlZCBieSB0aGUgV2Vic2l0ZS4gQnkgdXNpbmcgdGhlIFNlcnZpY2VzLCBZb3UgYWdyZWUgdG8gYWJpZGUgYnkgdGhlc2UgVGVybXMgb2YgVXNlLCBQcml2YWN5IFBvbGljeSBhbmQgcmlza3MgZGVzY3JpYmVkIGJlbG93LiBUaGVzZSByaXNrcyBpbmNsdWRlLCBidXQgbWF5IG5vdCBiZSBsaW1pdGVkIHRvOjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2hpbGUgdGhlIFdlYnNpdGUgaXMgYW4gaG9uZXN0IGF0dGVtcHQgdG8gcHJvdmlkZSBhY2Nlc3MgdG8gdGhlIGJlc3QgcG9zc2libGUgbWVkaWNhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvcm1hdGlvbiB0byB0aGUgVXNlcnMsIHRoZSBNZWRpY2FsIEV4cGVydHMgd2lsbCBub3QgYmUgZXhhbWluaW5nIFlvdSBwaHlzaWNhbGx5LiBUaGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVkaWNhbCBFeHBlcnRzIG1heSBub3QgaGF2ZSBhY2Nlc3MgdG8gYWxsIG9yIHNvbWUgb2YgWW91ciBtZWRpY2FsIGhpc3RvcnkgdGhhdCBtaWdodCBiZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcml0aWNhbCB0byBjb25zdWx0IFlvdS4gVGhlIE1lZGljYWwgRXhwZXJ0cyB3aWxsIG5vdCBoYXZlIHRoZSBiZW5lZml0IG9mIGluZm9ybWF0aW9uIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd291bGQgYmUgb2J0YWluZWQgYnkgZXhhbWluaW5nIFlvdSBpbiBwZXJzb24sIG9ic2VydmluZyBZb3VyIHBoeXNpY2FsIGNvbmRpdGlvbiBhbmQgYnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ29pbmcgdGhyb3VnaCBZb3VyIG1lZGljYWwgcmVjb3Jkcy4gVGhpcyBtZWFucyB0aGF0IHRoZSBTZXJ2aWNlcyBwcm92aWRlZCBpcyBkaWZmZXJlbnQgZnJvbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgZGlhZ25vc3RpYyBhbmQgdHJlYXRtZW50IHNlcnZpY2VzIHR5cGljYWxseSBkZWNpZGVkIGJ5IGEgcGh5c2ljaWFuLiBUaGVyZWZvcmUsIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZWRpY2FsIEV4cGVydHMgbWF5IG5vdCBiZSBhd2FyZSBvZiBmYWN0cyBvciBpbmZvcm1hdGlvbiB0aGF0IHdvdWxkIGFmZmVjdCBoaXMgb3IgaGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9waW5pb24gb2YgWW91ciBkaWFnbm9zaXMuIFRvIHJlZHVjZSB0aGUgcmlzayBvZiB0aGlzIGxpbWl0YXRpb24sIGRvY3ByaW1lIHN0cm9uZ2x5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuY291cmFnZXMgWW91IHRvIGJlIGluIHRvdWNoIHdpdGggYW4gb24tZ3JvdW5kIHBoeXNpY2lhbiBhbmQgc2hhcmUgdGhlIGRvY3ByaW1l4oCZc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGluaW9uIHdpdGggaGltL2hlci5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJ5IHJlcXVlc3RpbmcgYSBtZWRpY2FsIG9waW5pb24gdGhyb3VnaCB0aGUgV2Vic2l0ZSwgWW91IGFja25vd2xlZGdlIGFuZCBhZ3JlZSB0aGF0OlxuICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cInN1Yi1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGFkdmljZS9pbmZvcm1hdGlvbi9vcGluaW9uIG9uIGRpYWdub3NpcyBZb3UgbWF5IHJlY2VpdmUgY291bGQgYmUgbGltaXRlZCBhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aXNpb25hbDtcbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIG1lZGljYWwgb3BpbmlvbiBpcyBub3QgaW50ZW5kZWQgdG8gcmVwbGFjZSBhIGZhY2UtdG8tZmFjZSB2aXNpdCB3aXRoIGEgcGh5c2ljaWFuIGFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0IGRvZXMgcmVwbGFjZSBhbiBhY3R1YWwgZG9jdG9yLXBhdGllbnQgcmVsYXRpb25zaGlwO1xuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbiBjYXNlIG9mIGEgc2Vjb25kIG9waW5pb24gd2hlcmUgdGhlcmUgaXMgYSBkaWZmZXJlbmNlIG9mIG9waW5pb24gYW1vbmcgT3VyIE1lZGljYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeHBlcnRzIGFuZCBZb3VyIHBlcnNvbmFsIHBoeXNpY2lhbiwgWW91IHdvdWxkIGJlYXIgdGhlIHJlc3BvbnNpYmlsaXR5IHRvIGRlY2lkZSBvbiBvbmxpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvciBvZmZsaW5lIGNvbnN1bHRhdGlvbiwgb3IgcHJvY2VkdXJlLCBhbmQvb3IgdHJlYXRtZW50O1xuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgTWVkaWNhbCBFeHBlcnQgaXMgcmVsaWFudCBvbiBpbmZvcm1hdGlvbiBwcm92aWRlZCBieSBZb3UgYW5kIGhlbmNlIGFueSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbW9uc3RyYXRlZCB0byBoYXZlIGJlZW4gZmFsc2lmaWVkLCBtaXNsZWFkaW5nIG9yIGluY29tcGxldGUgd2lsbCBpbW1lZGlhdGVseSByZW5kZXIgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BpbmlvbiBhbmQgYWxsIGRldGFpbHMgdGhlcmVpbiBudWxsIGFuZCB2b2lkO1xuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBaW4gc29tZSBjYXNlcywgdGhlIE1lZGljYWwgRXhwZXJ0IG1heSBkZXRlcm1pbmUgdGhhdCB0aGUgdHJhbnNtaXR0ZWQgaW5mb3JtYXRpb24gaXMgb2ZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmFkZXF1YXRlIHF1YWxpdHkgYW5kIG1heSBhc2sgZm9yIG1vcmUgaW5mb3JtYXRpb24sIHdpdGhvdXQgd2hpY2ggaGUvc2hlIG1heSByZWZ1c2UgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXIgdGhlIHF1ZXJ5O1xuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbiByYXJlIGNhc2VzLCB0aGUgTWVkaWNhbCBFeHBlcnRzIG1heSBmZWVsIHRoYXQgdGhlIHF1ZXJ5IG1heSBub3QgYmUgYW5zd2VyYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhvdXQgcGh5c2ljYWxseSBleGFtaW5pbmcgdGhlIHBhdGllbnQvIFVzZXJzIGFuZCB0aGUgQ29uc3VsdGF0aW9uIG1heSBiZSByZWZ1c2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ydGh3aXRoO1xuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbiB2ZXJ5IHJhcmUgaW5zdGFuY2VzLCBzZWN1cml0eSBwcm90b2NvbHMgY291bGQgZmFpbCwgY2F1c2luZyBhIGJyZWFjaCBvZiBwcml2YWN5IG9mXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyc29uYWwgbWVkaWNhbCBpbmZvcm1hdGlvbjsgYW5kXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5cyBpbiBtZWRpY2FsIGV2YWx1YXRpb24gYW5kIGFuc3dlcnMgY291bGQgb2NjdXIgZHVlIHRvIGRlZmljaWVuY2llcyBvciBmYWlsdXJlcyBvZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBzZXJ2aWNlIGFzIHBlciB0aG9zZSBtZW50aW9uZWQgaW4gdGhlc2UgVGVybXMgb2YgVXNlLlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzYy1zdWJoZWFkaW5nXCI+Ny4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtCT09LIEFQUE9JTlRNRU5UIEFORCBDQUxMIEZBQ0lMSVRZPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2NwcmltZSBlbmFibGVzIFVzZXJzIHRvIGNvbm5lY3Qgd2l0aCBNZWRpY2FsIEV4cGVydHMgYW5kIFRoaXJkIFBhcnR5IExhYnMgdGhyb3VnaCB0d29cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kczogYSkgQm9vayBmYWNpbGl0eSB0aGF0IGFsbG93cyBVc2VycyBib29rIGFuIGFwcG9pbnRtZW50IHRocm91Z2ggdGhlIFdlYnNpdGU7IGIpIG9ubGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvciB0ZWxlLWNvbnN1bHRhdGlvbiBzZXJ2aWNlcyB3aGljaCBjb25uZWN0IFVzZXJzIGRpcmVjdGx5IHRvIHRoZSBNZWRpY2FsIEV4cGVydHMgZW5nYWdlZCBieVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2NwcmltZS5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3ByaW1lIHdpbGwgZW5zdXJlIFVzZXJzIGFyZSBwcm92aWRlZCBjb25maXJtZWQgYXBwb2ludG1lbnQgb24gdGhlIEJvb2sgZmFjaWxpdHkuIEhvd2V2ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3ByaW1lIGhhcyBubyBsaWFiaWxpdHkgaWYgc3VjaCBhbiBhcHBvaW50bWVudCBpcyBsYXRlciBjYW5jZWxsZWQgYnkgdGhlIE1lZGljYWwgRXhwZXJ0IG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXJkIFBhcnR5IExhYnMsIG9yIHRoZXkgYXJlIG5vdCBhdmFpbGFibGUgZm9yIGFwcG9pbnRtZW50LlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSWYgYSBVc2VyIGhhcyB1dGlsaXplZCB0aGUgb25saW5lIGNvbnN1bHRhdGlvbi90ZWxlcGhvbmljIHNlcnZpY2VzLCBkb2NwcmltZSByZXNlcnZlcyB0aGUgcmlnaHQgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmUgdGhlIGluZm9ybWF0aW9uIHByb3ZpZGVkIGJ5IHRoZSBVc2VyIHdpdGggdGhlIE1lZGljYWwgRXhwZXJ0cyBhbmQgVGhpcmQgUGFydHkgTGFicyBhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgc3VjaCBpbmZvcm1hdGlvbiBhbmQvb3IgY29udmVyc2F0aW9uIG9mIHRoZSBVc2VyIHdpdGggdGhlIE1lZGljYWwgRXhwZXJ0cyBhbmQgVGhpcmQgUGFydHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGFicywgaW4gYWNjb3JkYW5jZSB3aXRoIG91ciBQcml2YWN5IFBvbGljeSAuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgcmVzdWx0cyBvZiBhbnkgc2VhcmNoIFVzZXJzIHBlcmZvcm0gb24gdGhlIFdlYnNpdGUgZm9yIE1lZGljYWwgRXhwZXJ0cyBhbmQgVGhpcmQgUGFydHkgTGFic1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG91bGQgbm90IGJlIGNvbnN0cnVlZCBhcyBhbiBlbmRvcnNlbWVudCBieSBkb2NwcmltZSBvZiBhbnkgc3VjaCBwYXJ0aWN1bGFyIE1lZGljYWwgRXhwZXJ0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgVGhpcmQgUGFydHkgTGFicy4gSWYgdGhlIFVzZXIgZGVjaWRlcyB0byBlbmdhZ2Ugd2l0aCBhIE1lZGljYWwgRXhwZXJ0cyBhbmQgVGhpcmQgUGFydHkgTGFic1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBzZWVrIG1lZGljYWwgc2VydmljZXMsIHRoZSBVc2VyIHNoYWxsIGJlIGRvaW5nIHNvIGF0IGhpcy9oZXIgb3duIHJpc2suXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaXRob3V0IHByZWp1ZGljZSB0byB0aGUgZ2VuZXJhbGl0eSBvZiB0aGUgYWJvdmUsIGRvY3ByaW1lIGlzIGFjdGluZyBhcyBhIG1lcmUgZmFjaWxpdGF0b3IgYW5kIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdCBpbnZvbHZlZCBpbiBwcm92aWRpbmcgYW55IGhlYWx0aGNhcmUgb3IgbWVkaWNhbCBhZHZpY2Ugb3IgZGlhZ25vc2lzIGFuZCBoZW5jZSBpcyBub3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2libGUgZm9yIGFueSBpbnRlcmFjdGlvbnMgYmV0d2VlbiBVc2VyIGFuZCBNZWRpY2FsIEV4cGVydHMgYW5kIFRoaXJkIFBhcnR5IExhYnMuIFVzZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJzdGFuZHMgYW5kIGFncmVlcyB0aGF0IGRvY3ByaW1lIHdpbGwgbm90IGJlIGxpYWJsZSBmb3I6XG4gICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwic3ViLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyIGludGVyYWN0aW9ucyBhbmQgYXNzb2NpYXRlZCBpc3N1ZXMgVXNlciBoYXMgd2l0aCB0aGUgTWVkaWNhbCBFeHBlcnRzIGFuZCBUaGlyZCBQYXJ0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExhYnM7XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBhYmlsaXR5IG9yIGludGVudCBvZiB0aGUgTWVkaWNhbCBFeHBlcnRzIGFuZCBUaGlyZCBQYXJ0eSBMYWJzIG9yIHRoZSBsYWNrIG9mIGl0LCBpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGZpbGxpbmcgdGhlaXIgb2JsaWdhdGlvbnMgdG93YXJkcyBVc2VycztcbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW55IHdyb25nIG1lZGljYXRpb24gb3IgcXVhbGl0eSBvZiB0cmVhdG1lbnQgYmVpbmcgZ2l2ZW4gYnkgdGhlIE1lZGljYWwgRXhwZXJ0cyBhbmQgVGhpcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXJ0eSBMYWJzLCBvciBhbnkgbWVkaWNhbCBuZWdsaWdlbmNlIG9uIHBhcnQgb2YgdGhlIE1lZGljYWwgRXhwZXJ0cyBhbmQgVGhpcmQgUGFydHkgTGFicztcbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5hcHByb3ByaWF0ZSB0cmVhdG1lbnQsIG9yIHNpbWlsYXIgZGlmZmljdWx0aWVzIG9yIGFueSB0eXBlIG9mIGluY29udmVuaWVuY2Ugc3VmZmVyZWQgYnkgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlciBkdWUgdG8gYSBmYWlsdXJlIG9uIHRoZSBwYXJ0IG9mIHRoZSBNZWRpY2FsIEV4cGVydHMgYW5kIFRoaXJkIFBhcnR5IExhYnMgdG8gcHJvdmlkZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFncmVlZCBTZXJ2aWNlcztcbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW55IG1pc2NvbmR1Y3Qgb3IgaW5hcHByb3ByaWF0ZSBiZWhhdmlvdXIgYnkgdGhlIE1lZGljYWwgRXhwZXJ0cyBhbmQgVGhpcmQgUGFydHkgTGFicyBvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZWlyIHJlc3BlY3RpdmUgc3RhZmY7XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbGxhdGlvbiBvciBubyBzaG93IGJ5IHRoZSBNZWRpY2FsIEV4cGVydHMgYW5kIFRoaXJkIFBhcnR5IExhYnMgb3IgcmVzY2hlZHVsaW5nIG9mXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9va2VkIGFwcG9pbnRtZW50LlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VycyBhcmUgYWxsb3dlZCB0byBwcm92aWRlIGZlZWRiYWNrIGFib3V0IHRoZWlyIGV4cGVyaWVuY2VzIHdpdGggdGhlIFByYWN0aXRpb25lciwgaG93ZXZlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIFVzZXIgc2hhbGwgZW5zdXJlIHRoYXQsIHRoZSBzYW1lIGlzIHByb3ZpZGVkIGluIGFjY29yZGFuY2Ugd2l0aCBhcHBsaWNhYmxlIGxhdy4gVXNlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3dldmVyIHVuZGVyc3RhbmRzIHRoYXQsIGRvY3ByaW1lIHNoYWxsIG5vdCBiZSBvYmxpZ2VkIHRvIGFjdCBpbiBzdWNoIG1hbm5lciBhcyBtYXkgYmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgdG8gZ2l2ZSBlZmZlY3QgdG8gdGhlIGNvbnRlbnQgb2YgVXNlcnMgZmVlZGJhY2ssIHN1Y2ggYXMgc3VnZ2VzdGlvbnMgZm9yIGRlbGlzdGluZyBvZiBhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY3VsYXIgTWVkaWNhbCBFeHBlcnRzIGFuZCBUaGlyZCBQYXJ0eSBMYWJzIGZyb20gdGhlIFdlYnNpdGUuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzYy1zdWJoZWFkaW5nXCI+OC4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtDT01NVU5JQ0FUSU9OUyBUTyBZT1U8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj5Zb3UgYWdyZWUgYW5kIGF1dGhvcml6ZSBkb2NwcmltZSB0byBzaGFyZSB5b3VyIGluZm9ybWF0aW9uIHdpdGggaXRzIGdyb3VwIGNvbXBhbmllcyBhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyIHRoaXJkIHBhcnRpZXMsIGluIHNvIGZhciBhcyByZXF1aXJlZCBmb3Igam9pbnQgbWFya2V0aW5nIHB1cnBvc2VzL29mZmVyaW5nIHZhcmlvdXMgc2VydmljZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yIHZhcmlvdXMgdmFsdWUgYWRkZWQgc2VydmljZXMsIGluIGFzc29jaWF0aW9uIHdpdGggdGhlIFNlcnZpY2VzIG9mIHRoZSBXZWJzaXRlIG9yIG90aGVyd2lzZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBhZ3JlZSB0byByZWNlaXZlIGNvbW11bmljYXRpb25zIHRocm91Z2ggZW1haWxzLCB0ZWxlcGhvbmUgYW5kL29yIHNtcywgZnJvbSBkb2NwcmltZSBvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRzIGdyb3VwIGNvbXBhbmllcyBvciBpdHMgdGhpcmQgcGFydHkgdmVuZG9ycy9idXNpbmVzcyBwYXJ0bmVycyBvciBUaGlyZCBQYXJ0eSBTZXJ2aWNlIFByb3ZpZGVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnYXJkaW5nIHRoZSBTZXJ2aWNlcy9zZXJ2aWNlcyB1cGRhdGVzLCB0cmFuc2FjdGlvbmFsIGFuZCBwcm9tb3Rpb25hbCBlbWFpbHMgYW5kL29yIGFueVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5ub3VuY2VtZW50cy4gSW4gdGhpcyBjb250ZXh0LCB5b3UgYWdyZWUgYW5kIGNvbnNlbnQgdG8gcmVjZWl2ZSBhbGwgY29tbXVuaWNhdGlvbnMgYXQgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGUgbnVtYmVyIHByb3ZpZGVkLCBldmVuIGlmIHRoaXMgbW9iaWxlIG51bWJlciBpcyByZWdpc3RlcmVkIHVuZGVyIERORC9OQ1BSIGxpc3QgdW5kZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlbGVjb20gUmVndWxhdG9yeSBBdXRob3JpdHkgb2YgSW5kaWEgKFRSQUkpIGxhd3MsIHJ1bGVzIGFuZCByZWd1bGF0aW9ucy4gQW5kIGZvciB0aGF0IHB1cnBvc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB5b3UgZnVydGhlciBhdXRob3JpemUgQ29tcGFueSB0byBzaGFyZS9kaXNjbG9zZSB0aGUgaW5mb3JtYXRpb24gdG8gYW55IHRoaXJkIHBhcnR5IHNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyIG9yIGFueSBhZmZpbGlhdGVzLCBncm91cCBjb21wYW5pZXMsIHRoZWlyIGF1dGhvcml6ZWQgYWdlbnRzIG9yIHRoaXJkIHBhcnR5IHNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVycy4gWW91IGFncmVlIHRoYXQgaW4gYWNjb3JkYW5jZSB3aXRoIHRoZSBhcHBsaWNhYmxlIFRSQUkgcmVndWxhdGlvbnMgc3BlY2lmaWNhbGx5IFRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVsZWNvbSBDb21tZXJjaWFsIENvbW11bmljYXRpb25zIEN1c3RvbWVyIFJlZ3VsYXRpb25zLCAyMDE0IDpcbiAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWFjaCB0aW1lIFlvdSBkbyB2aXNpdC90cmFuc2FjdCBvciBsb2dpbiBpbiB5b3VyIGFjY291bnQgb24gdGhlIFdlYnNpdGUsIGl0IHNoYWxsIGJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2FyZGVkIGFzIGEgdmVyaWZpYWJsZSByZXF1ZXN0IGZyb20geW91IHBlcnRhaW5pbmcgdG8gcmVjZWlwdCBvZiBvdXIgU2VydmljZXMgYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2aXRpZXM7XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3Ugc2hvdWxkIHZpc2l0IHlvdXIgYWNjb3VudCBhdCBsZWFzdCBvbmNlIGluIHNpeCBtb250aHMgb3RoZXJ3aXNlIGRvY3ByaW1lIHJlc2VydnMgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0IHRvIGRlYWN0aXZhdGUgeW91ciBhY2NvdW50IGZvciBpbmFjdGlvbiwgYW5kIGluIHRoaXMgcmVnYXJkIGRvY3ByaW1lIHdpbGwgc2VuZCB5b3UgU01TXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBlbWFpbCBjb21tdW5pY2F0aW9ucyBwcmlvciB0byB0aGUgZXhwaXJ5IG9mIHNpeCBtb250aHMgZnJvbSB0aGUgZGF0ZSBvZiBsYXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2l0L3RyYW5zYWN0aW9uL2xvZ2luIGludG8geW91ciBhY2NvdW50IG9uIHRoZSBXZWJzaXRlO1xuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWFjaCB0aW1lIHlvdSB2aXNpdC9sb2dpbi90cmFuc2FjdCBvbiB0aGUgV2Vic2l0ZSBpdCB3aWxsIGJlIGRlZW1lZCB0byBiZSBhcyBhIGZyZXNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3QgZnJvbSB5b3UgZm9yIGNvbnRpbnVpbmcgdG8gcmVjZWl2ZSBjb21tdW5pY2F0aW9uIGZyb20gZG9jcHJpbWVcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluIGNhc2UgeW91IGRvIG5vdCB3aXNoIHRvIHJlY2VpdmUgYW55IGNvbW11bmljYXRpb24gZnJvbSB1cyBvciBwcm92aWRlIHlvdXIgZmVlZGJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvdXQgdGhlIHNlcnZpY2VzLCB5b3UgY2FuIG1haWwgdXMgYXQgY2FyZUBkb2NwcmltZS5jb21cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jcHJpbWUgd2lsbCByZXRhaW4gYW5kIHVzZSB5b3VyIGluZm9ybWF0aW9uIGFzIG5lY2Vzc2FyeSB0byBjb21wbHkgd2l0aCBvdXIgbGVnYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmxpZ2F0aW9ucywgcmVzb2x2ZSBkaXNwdXRlcyBhbmQgZW5mb3JjZSBvdXIgYWdyZWVtZW50cyBlbnRlcmVkIGludG8gZm9yIHByb3ZpZGluZyBTZXJ2aWNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBhbmNpbGxhcnkgc2VydmljZXMuXG4gICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2Mtc3ViaGVhZGluZ1wiIGlkPVwicmVzY2hlZHVsaW5nXzlcIj45LiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO1JFU0NIRURVTElORywgUkVGVU5EICZhbXA7IENBTkNFTExBVElPTiBQT0xJQ1k8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbGxhdGlvbnM6XG4gICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwic3ViLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGb3IgYW55IG9ubGluZSBwYWlkIGFwcG9pbnRtZW50cywgeW91IGNhbiBjYW5jZWwgeW91ciBzY2hlZHVsZWQgb3IgcmUtYm9va2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwb2ludG1lbnQgYW5kIGluaXRpYXRlIGltbWVkaWF0ZSByZWZ1bmQgYXQgYW55IHRpbWUuIEltbWVkaWF0ZSByZWZ1bmQgc2hhbGwgYmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0IHRvIHRlcm1zIGFuZCBjb25kaXRpb25zIGFzIGRlc2NyaWJlZCB1bmRlciB0aGlzIHNlY3Rpb24gbWVudGlvbmVkIGJlbG93LlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbiB0aGUgZXZlbnQgdGhlIHNlcnZpY2VzIGFyZSBub3QgYXZhaWxlZCBhdCB0aGUgYXBwb2ludGVkIGRhdGUgYW5kIHRpbWUgYW5kIG91clxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5c3RlbXMgZG8gbm90IHZhbGlkYXRlIHRoZSBVUk4gZ2VuZXJhdGVkIG9uIHlvdXIgcmVnaXN0ZXJlZCBtb2JpbGUgbnVtYmVyLCB3ZSB3aWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b21hdGljYWxseSBjYW5jZWwgeW91ciBhcHBvaW50bWVudCBhdCAxMjowMCBtaWRuaWdodCBvZiBuZXh0IGRhdGUgb2YgeW91clxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcG9pbnRtZW50IGRhdGUuXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFPY2Nhc2lvbmFsbHksIGFwcG9pbnRtZW50cyBtYXkgYmUgY2FuY2VsbGVkIG9yIHBvc3Rwb25lZCBieSB0aGUgVGhpcmQgUGFydHkgU2VydmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb3ZpZGVyLiBTaG91bGQgdGhpcyBvY2N1ciwgd2Ugd2lsbCBhdHRlbXB0IHRvIGNvbnRhY3Qgb3IgaW5mb3JtIHlvdSBhbmQgeW91IG1heSByZS1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZSB5b3VyIGFwcG9pbnRtZW50IGFzIHBlciB5b3VyIGNvbnZlbmllbmNlIG9yIHZpc2l0IHd3dy5kb2NwcmltZS5jb20gZm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJlc2gvcmUtYm9va2luZyBvbiB0aGUgV2Vic2l0ZS5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsbGF0aW9uIHRocm91Z2ggbWFpbCBvciBjYWxsIGNlbnRyZSBpcyBhbGxvd2VkIGZvciBhbGwgdGhlIGJvb2tpbmdzIHVudGlsIHRoZSB0aW1lIG9mXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwb2ludG1lbnQgb3IgMTI6MDAgbWlkbmlnaHQgb2YgbmV4dCBkYXRlIG9mIHlvdXIgYXBwb2ludG1lbnQgZGF0ZS4gSW4gc3VjaCBjYXNlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZSB3aWxsIGluaXRpYXRlIGltbWVkaWF0ZSByZWZ1bmQgb2YgeW91ciBtb25leSBhcyBwZXIgdGhlIHByb2Nlc3MgZGVmaW5lZCBiZWxvdy5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVzY2hlZHVsaW5nOlxuICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cInN1Yi1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmUtc2NoZWR1bGluZyBvZiBhbGwgYXBwb2ludG1lbnRzIGNhbiBiZSBkb25lIG9ubHkgdW50aWwgdGhlIGF1dG8tY2FuY2VsbGF0aW9uIGlzIGRvbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIG91ciBzeXN0ZW1zLiBPbmNlIHRoZSBhdXRvIGNhbmNlbGxhdGlvbiBpcyBnZW5lcmF0ZWQsIGNhbmNlbGxhdGlvbiwgYW5kIHJlZnVuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3MgYXMgbWVudGlvbmVkIHVuZGVyIHRoaXMgc2VjdGlvbiBzaG91bGQgYmUgZm9sbG93ZWQgYW5kIHJlLXByb2Nlc3MgZm9yIGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmVzaC9yZS1ib29raW5nLCBpZiBuZWVkIGJlLlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3UgY2FuIHJlLXNjaGVkdWxlIHlvdXIgYXBwb2ludG1lbnQgaS5lLiBib29rIHlvdXIgYXBwb2ludG1lbnQgZm9yIGEgZGlmZmVyZW50IGRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgdGltZTsgd2l0aCB0aGUgc2FtZSBUaGlyZCBwYXJ0eSBIZWFsdGggU2VydmljZSBQcm92aWRlciBmb3IgdGhlIHNhbWUgdHlwZSBvZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWx0aGNhcmUgc2VydmljZS5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW4gY2FzZSBvZiByZS1zY2hlZHVsaW5nLCBpZiB0aGVyZSBpcyBhbnkgZGlmZmVyZW5jZSBpbiB0aGUgY2hhcmdlcyBmb3IgcmUtc2NoZWR1bGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwb2ludG1lbnQsIHdlIHdpbGwgZWl0aGVyIGNvbGxlY3QgdGhlIGRpZmZlcmVudGlhbCBhbW91bnQgb3IgcmVmdW5kIHRoZSBzYW1lLCBhcyB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIG1heSBiZS5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmUtYm9va2luZzpcbiAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJzdWItbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBjYW4gcmUtYm9vayB5b3VyIGFwcG9pbnRtZW50IGJ5IGNoYW5naW5nIHRoZSBwYXJ0aWN1bGFycyBvZiB5b3VyIGFwcG9pbnRtZW50IGkuZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlciwgdHlwZSBvZiBzZXJ2aWNlLCBkYXRlIGFuZCB0aW1lIGV0Yy5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmUtYm9va2luZyBvZiBhbGwgYXBwb2ludG1lbnRzIGNhbiBiZSBkb25lIGF0IHRoZSBjaG9pY2Ugb2YgdGhlIEN1c3RvbWVyIGFuZCBpbiBzdWNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZXMgY3VzdG9tZXIgaGFzIHRvIGNsaWNrIG9uIOKAnENhbmNlbGxhdGlvbiBhbmQgcmVib29r4oCdIG9wdGlvbiBkaXNwbGF5ZWQgaW4gbXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50IHNlY3Rpb24gb2YgdGhlIGN1c3RvbWVyLlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGb3IgYWxsIGFwcG9pbnRtZW50cyB3aGljaCBhcmUgcmUtYm9va2VkIGNhc2VzLCB0aGUgYW1vdW50IHBhaWQgYnkgdGhlIGN1c3RvbWVyIGZvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBwcmV2aW91cyBib29raW5nIGNhbiBiZSB1dGlsaXplZCB3aXRoaW4gMjQodHdlbnR5IGZvdXIpIGhvdXJzIGZyb20gdGhlIGRhdGUgb24gd2hpY2ggY2FuY2VsbGF0aW9uIGlzIGluaXRpYXRlZCBieSB0aGUgY3VzdG9tZXIgYW5kIGJlZm9yZSBpbnN0cnVjdGlvbiB0byByZWZ1bmQgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWF0ZWQgZnJvbSBvdXIgZW5kICZhbXA7IHByb2Nlc3NlZCBieSB0aGUgcGF5bWVudCBnYXRld2F5IGludGVncmF0ZWQgb24gb3VyIFdlYnNpdGUuXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgcHJldmlvdXMgYm9va2luZyBhbW91bnQgd2lsbCBiZSByZWZsZWN0ZWQgYnkgd2F5IG9mIGNyZWRpdHMgaW4geW91ciBhY2NvdW50LiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlZGl0ID0gMSBydXBlZS5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW4gY2FzZSBtb25leSBmb3IgeW91ciByZS1ib29rZWQgYXBwb2ludG1lbnQgaXMgYWRqdXN0ZWQgYWdhaW5zdCB0aGUgbW9uZXkgcGFpZCBmb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91cyBib29raW5nLCBmb2xsb3dpbmcgbWF5IGJlIGFwcGxpY2FibGUsIGFzIHRoZSBjYXNlIG1heSBiZTpcbiAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtcnQtMTBcIiBzdHlsZT17eyBsaXN0U3R5bGU6ICdkaXNjJywgcGFkZGluZ0xlZnQ6IDQwLCB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1yYi0xMFwiPklmIHRoZSBjaGFyZ2VzIGZvciByZS1ib29raW5nIGFwcG9pbnRtZW50IGFyZSBtb3JlIHRoYW4gdGhlIGFtb3VudCBwYWlkIGZvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91cyBib29raW5nLCB5b3Ugd2lsbCBiZSByZXF1aXJlZCB0byBwYXkgdGhlIHNob3J0ZmFsbCBhbW91bnQgZm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRpbmcgdGhlIHJlLWJvb2tlZCBhcHBvaW50bWVudC5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtcmItMTBcIj5JZiB0aGUgY2hhcmdlcyBmb3IgcmUtYm9va2luZyBhcHBvaW50bWVudCBhcmUgbGVzcyB0aGFuIHRoZSBhbW91bnQgcGFpZCBmb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXMgYm9va2luZywgd2Ugd2lsbCBpbml0aWF0ZSBpbW1lZGlhdGUgcmVmdW5kIGZvciB0aGUgZGlmZmVyZW50aWFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudC5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVmdW5kczpcbiAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJzdWItbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwb24gcmVjZWlwdCBhIHZhbGlkIGNhbmNlbGxhdGlvbiwgd2Ugd2lsbCBpbml0aWF0ZSByZWZ1bmQgb2YgeW91ciBtb25leSBpbiB0aGUgc2FtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbm5lciBhcyB0aGUgbW9uZXkgd2FzIHJlY2VpdmVkLlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbiBjYXNlIHlvdSBmYWlsIHRvIHV0aWxpemUgcHJldmlvdXMgYm9va2luZyBtb25leSBmb3IgYW55IHJlLWJvb2tpbmcgY2FzZXMsIHdlIHdpbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWF0ZSBpbW1lZGlhdGUgcmVmdW5kIHdpdGhpbiBleHBpcnkgb2YgMjQodHdlbnR5IGZvdXIpIGhvdXJzIGZyb20gdGhlIGRhdGUgb2ZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxsYXRpb24uXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR5cGljYWxseSwgYWxsIHJlZnVuZHMgYXJlIHByb2Nlc3NlZCB3aXRoIDE0KGZvdXJ0ZWVuKSB3b3JraW5nIGRheXMgZnJvbSB0aGUgZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltbWVkaWF0ZSByZWZ1bmQgaXMgaW5pdGlhdGVkIGF0IG91ciBlbmQuXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlYXNlIG5vdGUgdGhhdCB3ZSBzaGFsbCBub3QgYmUgcmVzcG9uc2libGUgZm9yIGFueSBkZWxheXMgaW4gY3JlZGl0IHRvIHRoZSBDYXJkaG9sZGVyJ3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVkaXQgY2FyZCBhY2NvdW50LyBhY2NvdW50aG9sZGVy4oCZcyBiYW5rIGFjY291bnQgZHVlIHRvIGFueSByZWFzb25zIGNpdGVkIGJ5IHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBheW1lbnQgR2F0ZXdheSBvciBDYXJkaG9sZGVyJ3MgaXNzdWluZyBiYW5rLlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3Ugd2lsbCBiZSBwcm92aWRlZCB3aXRoIHJlZnVuZCByZWZlcmVuY2UgbnVtYmVyIGZvciBmdXJ0aGVyIGNvbW11bmljYXRpb24gd2l0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlvdXIgYmFuay5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm8gcmVmdW5kcyAvIGNhbmNlbGxhdGlvbiByZXF1ZXN0cyBzaGFsbCBiZSBlbnRlcnRhaW5lZCBpbiBjYXNlIG9mIHBheW1lbnQgYWdhaW5zdCBiaWxsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8gU2VydmljZXMgcmVjZWl2ZWQuXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVuZGVyIG5vIGNpcmN1bXN0YW5jZXMsIGNhc2ggd2lsbCBiZSByZWZ1bmRlZCBhZ2FpbnN0IGFueSBjYW5jZWxsYXRpb24uXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjLXN1YmhlYWRpbmdcIj4xMC4mbmJzcDsmbmJzcDsmbmJzcDtQQVlNRU5ULCBGRUVTIEFORCBUQVhFUzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVnaXN0cmF0aW9uIG9uIHRoZSBXZWJzaXRlIGFuZCB0aGUgYWNjZXNzIHRvIHRoZSBpbmZvcm1hdGlvbiBwcm92aWRlZCBvbiB0aGUgV2Vic2l0ZSBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmVlLiBkb2NwcmltZSBkb2VzIG5vdCBjaGFyZ2UgYW55IGZlZSBmb3IgYWNjZXNzaW5nLCBhbmQgYnJvd3NpbmcgdGhyb3VnaCB0aGUgV2Vic2l0ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSG93ZXZlciwgZG9jcHJpbWUgbWF5IGNvbGxlY3QgcGF5bWVudHMgKHdoaWNoIHNoYWxsIGluY2x1ZGUgYXBwbGljYWJsZSB0YXhlcyBhbmQgc2VydmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWUvY29tbWlzc2lvbiBvZiBkb2NwcmltZSkgZnJvbSBZb3Ugb24gYmVoYWxmIG9mIFRoaXJkIFBhcnR5IFNlcnZpY2UgUHJvdmlkZXJzIHRocm91Z2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUkJJIGF1dGhvcml6ZWQgcGF5bWVudCBjb2xsZWN0b3JzIG9yIGdhdGV3YXlzLiBZb3UgYWdyZWUgYW5kIGFja25vd2xlZGdlIHRoYXQgWW91IHNoYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdCBob2xkIGRvY3ByaW1lIHJlc3BvbnNpYmxlIGZvciBhbnkgbG9zcyBvciBkYW1hZ2UgY2F1c2VkIHRvIFlvdSBkdXJpbmcgdGhlIHByb2Nlc3Mgb2ZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbiBvZiBwYXltZW50cyBmcm9tIFlvdSwgb3IgZHVlIHRvIGFueSBhY3RzIG9yIG9taXNzaW9uIG9uIHRoZSBwYXJ0IG9mIHRoaXJkIHBhcnRpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdml6LiBwYXltZW50IGNvbGxlY3RvcnMgb3IgZm9yIGFueSBhY3Rpb25zLyBvbWlzc2lvbnMgd2hpY2ggYXJlIGJleW9uZCB0aGUgY29udHJvbCBvZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2NwcmltZS5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFsbCBmZWVzIGRpc3BsYXllZCBvbiB0aGUgV2Vic2l0ZSBhcmUgaW5jbHVzaXZlIG9mIGFwcGxpY2FibGUgdGF4ZXMuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2NwcmltZSByZXNlcnZlcyB0aGUgcmlnaHQgdG8gbW9kaWZ5IHRoZSBmZWUgc3RydWN0dXJlIGJ5IHByb3ZpZGluZyBvbiB0aGUgV2Vic2l0ZSB3aGljaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFsbCBiZSBjb25zaWRlcmVkIGFzIHZhbGlkIGFuZCBhZ3JlZWQgY29tbXVuaWNhdGlvbi5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluIG9yZGVyIHRvIHByb2Nlc3MgdGhlIHBheW1lbnRzLCBkb2NwcmltZSBtaWdodCByZXF1aXJlIGRldGFpbHMgb2YgVXNlcuKAmXMvIFRoaXJkIFBhcnR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnZpY2UgUHJvdmlkZXJz4oCZIGJhbmsgYWNjb3VudCwgY3JlZGl0IGNhcmQgbnVtYmVyIGV0Yy4gUGxlYXNlIGNoZWNrIE91ciBQcml2YWN5IFBvbGljeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbiBob3cgZG9jcHJpbWUgdXNlcyB0aGUgY29uZmlkZW50aWFsIGluZm9ybWF0aW9uIHByb3ZpZGVkIGJ5IFVzZXJzLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2Mtc3ViaGVhZGluZ1wiPjExLiZuYnNwOyZuYnNwOyZuYnNwO1JFU1RSSUNUSU9OUyBPTiBVU0UgT0YgVEhFIFdFQlNJVEU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBhZ3JlZSBhbmQgdW5kZXJ0YWtlIHRoYXQgWW91IHNoYWxsIG5vdCBkbyBhbnkgYWN0IG9yIHBvc3QsIGRpc3BsYXksIHVwbG9hZCwgbW9kaWZ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdWJsaXNoLCB0cmFuc21pdCwgdXBkYXRlIG9yIHNoYXJlIGFueSBpbmZvcm1hdGlvbiB0aGF0IC1cbiAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJzdWItbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlbG9uZ3MgdG8gYW5vdGhlciBwZXJzb24gYW5kIHRvIHdoaWNoIFlvdSBkb2VzIG5vdCBiZWxvbmcgdG8gWW91IG9yIGRvIG5vdCBoYXZlIGFueVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpcyBncm9zc2x5IGhhcm1mdWwsIGhhcmFzc2luZywgZGVmYW1hdG9yeSwgb2JzY2VuZSwgcG9ybm9ncmFwaGljLCBsaWJlbG91cywgaW52YXNpdmUgb2ZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbm90aGVyJ3MgcHJpdmFjeSwgaGF0ZWZ1bCwgb3Igb2JqZWN0aW9uYWJsZSwgcmVsYXRpbmcgb3IgZW5jb3VyYWdpbmcgbW9uZXkgbGF1bmRlcmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yIGdhbWJsaW5nLCBvciBvdGhlcndpc2UgdW5sYXdmdWwgaW4gYW55IG1hbm5lciB3aGF0ZXZlcjtcbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mcmluZ2VzIGFueSBwYXRlbnQsIHRyYWRlbWFyaywgY29weXJpZ2h0IG9yIG90aGVyIGludGVsbGVjdHVhbCBwcm9wcmlldGFyeSByaWdodHMgb2ZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnkgdGhpcmQgcGFydHk7XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpb2xhdGVzIGFueSBsYXcgZm9yIHRoZSB0aW1lIGJlaW5nIGluIGZvcmNlO1xuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBlcnNvbmF0ZXMgYW5vdGhlciBwZXJzb247XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5zIHNvZnR3YXJlIHZpcnVzZXMgb3IgYW55IG90aGVyIGNvbXB1dGVyIGNvZGUsIGZpbGVzIG9yIHByb2dyYW1zIGRlc2lnbmVkIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJydXB0LCBkZXN0cm95IG9yIGxpbWl0IHRoZSBmdW5jdGlvbmFsaXR5IG9mIGFueSBjb21wdXRlciByZXNvdXJjZTtcbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXMgcHJvaGliaXRlZCB1bmRlciBhcHBsaWNhYmxlIGxhdyhzKSBmb3IgdGhlIHRpbWUgYmVpbmcgaW4gZm9yY2UgYW5kIHJ1bGVzIG1hZGUgdGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlcjsgYW5kXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocmVhdGVucyB0aGUgdW5pdHksIGludGVncml0eSwgZGVmZW5zZSwgc2VjdXJpdHkgb3Igc292ZXJlaWdudHkgb2YgSW5kaWEsIGZyaWVuZGx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRpb25zIHdpdGggZm9yZWlnbiBzdGF0ZXMsIG9yIHB1YmxpYyBvcmRlciBvciBjYXVzZXMgaW5jaXRlbWVudCB0byB0aGUgY29tbWlzc2lvbiBvZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFueSBjb2duaXphYmxlIG9mZmVuY2Ugb3IgcHJldmVudHMgaW52ZXN0aWdhdGlvbiBvZiBhbnkgb2ZmZW5jZSBvciBpcyBpbnN1bHRpbmcgYW55IG90aGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aW9uLlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3UgYXJlIGFsc28gcHJvaGliaXRlZCBmcm9tOlxuICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cInN1Yi1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlvbGF0aW5nIG9yIGF0dGVtcHRpbmcgdG8gdmlvbGF0ZSB0aGUgaW50ZWdyaXR5IG9yIHNlY3VyaXR5IG9mIHRoZSBXZWJzaXRlIG9yIGFueVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3ByaW1lIENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbWl0dGluZyBhbnkgaW5mb3JtYXRpb24gKGluY2x1ZGluZyBqb2IgcG9zdHMsIG1lc3NhZ2VzIGFuZCBoeXBlcmxpbmtzKSBvbiBvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm91Z2ggdGhlIFdlYnNpdGUgdGhhdCBpcyBkaXNydXB0aXZlIG9yIGNvbXBldGl0aXZlIHRvIHRoZSBwcm92aXNpb24gb2YgU2VydmljZXMgYnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2NwcmltZTtcbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZW50aW9uYWxseSBzdWJtaXR0aW5nIG9uIHRoZSBXZWJzaXRlIGFueSBpbmNvbXBsZXRlLCBmYWxzZSBvciBpbmFjY3VyYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mb3JtYXRpb247XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ha2luZyBhbnkgdW5zb2xpY2l0ZWQgY29tbXVuaWNhdGlvbnMgdG8gb3RoZXIgQ292ZW5hbnRlcnM7XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzaW5nIGFueSBlbmdpbmUsIHNvZnR3YXJlLCB0b29sLCBhZ2VudCBvciBvdGhlciBkZXZpY2Ugb3IgbWVjaGFuaXNtIChzdWNoIGFzIHNwaWRlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9ib3RzLCBhdmF0YXJzIG9yIGludGVsbGlnZW50IGFnZW50cykgdG8gbmF2aWdhdGUgb3Igc2VhcmNoIHRoZSBXZWJzaXRlO1xuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRlbXB0aW5nIHRvIGRlY2lwaGVyLCBkZWNvbXBpbGUsIGRpc2Fzc2VtYmxlIG9yIHJldmVyc2UgZW5naW5lZXIgYW55IHBhcnQgb2YgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2Vic2l0ZTtcbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29weWluZyBvciBkdXBsaWNhdGluZyBpbiBhbnkgbWFubmVyIGFueSBvZiB0aGUgZG9jcHJpbWUgQ29udGVudCBvciBvdGhlciBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZSBmcm9tIHRoZSBXZWJzaXRlOyBhbmRcbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj5UaGUgV2Vic2l0ZSBzaGFsbCBub3QgYmUgdXNlZCBmb3IgaWxsZWdhbCBwdXJwb3Nlcy4gVGhlIGluZm9ybWF0aW9uIGFuZCBTZXJ2aWNlcyBzaGFsbCBub3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlIHVzZWQgZm9yIGFueSBpbGxlZ2FsIHB1cnBvc2UuIFlvdSBtYXkgbm90IGFjY2VzcyBvdXIgbmV0d29ya3MsIGNvbXB1dGVycywgb3IgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvcm1hdGlvbiBhbmQgU2VydmljZXMgaW4gYW55IG1hbm5lciB0aGF0IGNvdWxkIGRhbWFnZSwgZGlzYWJsZSwgb3ZlcmJ1cmRlbiwgb3IgaW1wYWlyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtLCBvciBpbnRlcmZlcmUgd2l0aCBhbnkgb3RoZXIgcGVyc29uJ3MgdXNlIGFuZCBlbmpveW1lbnQuIFlvdSBzaGFsbCBub3QgYXR0ZW1wdCB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FpbiB1bmF1dGhvcml6ZWQgYWNjZXNzIHRvIGFueSBJbmZvcm1hdGlvbiBvciBTZXJ2aWNlcywgb3RoZXIgYWNjb3VudHMsIGNvbXB1dGVyIHN5c3RlbXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvciBuZXR3b3JrcyBjb25uZWN0ZWQgd2l0aCB0aGUgV2Vic2l0ZSwgdGhlIEluZm9ybWF0aW9uLCBvciBTZXJ2aWNlcy4gWW91IHNoYWxsIG5vdCB1c2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFueSBhdXRvbWF0ZWQgbWVhbnMgKHN1Y2ggYXMgYSBzY3JhcGVyKSB0byBhY2Nlc3MgdGhlIFdlYnNpdGUsIHRoZSBJbmZvcm1hdGlvbiwgb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnZpY2VzIGZvciBhbnkgcHVycG9zZS4gU3VjaCB1bmF1dGhvcml6ZWQgYWNjZXNzIGluY2x1ZGVzLCBidXQgaXMgbm90IGxpbWl0ZWQgdG8sIHVzaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhbm90aGVyIHBlcnNvbuKAmXMgbG9naW4gY3JlZGVudGlhbHMgdG8gYWNjZXNzIGhpcyBvciBoZXIgZG9jcHJpbWUgcHJvZmlsZS8gYWNjb3VudC4gQW55XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRlbXB0IGJ5IGFueSBpbmRpdmlkdWFsIG9yIGVudGl0eSB0byBzb2xpY2l0IGxvZ2luIGluZm9ybWF0aW9uIG9mIGFueSBvdGhlciB1c2VyIHRvIGFjY2Vzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgYW55IHN1Y2ggYWNjb3VudCBpcyBhbiBleHByZXNzIGFuZCBkaXJlY3QgdmlvbGF0aW9uIG9mIHRoZXNlIFRlcm1zIG9mIFVzZSBhbmQgb2YgYXBwbGljYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF3KHMpLCBpbmNsdWRpbmcgcmVsZXZhbnQgcHJpdmFjeSBhbmQgc2VjdXJpdHkgbGF3cyBhbmQgbGF3cyBwcm9oaWJpdGluZyB1bmZhaXIgb3IgdW5ldGhpY2FsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBidXNpbmVzcyBwcmFjdGljZXMuXG4gICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2Mtc3ViaGVhZGluZ1wiPjEyLiZuYnNwOyZuYnNwOyZuYnNwO05PIFdBUlJBTlRJRVM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj5Vc2VycyBhY2NlcHQgYW5kIGFja25vd2xlZGdlcyB0aGF0IHRoZSBTZXJ2aWNlcyBvZmZlcmVkIGJ5IGRvY3ByaW1lIHRocm91Z2ggdGhlIFdlYnNpdGUgKG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhbnkgb2YgaXRzIGxpY2Vuc29ycyBvciBwcm92aWRlcnMgb3IgVGhpcmQgUGFydHkgU2VydmljZSBQcm92aWRlcnMpIGFyZSBwcm92aWRlZCDigJhhcyBpc+KAmSwgYXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZSwgYW5kIHdpdGhvdXQgYW55IHdhcnJhbnRpZXMgb3IgcmVwcmVzZW50YXRpb25zIG9yIGNvbmRpdGlvbnMgKGV4cHJlc3Mgb3IgaW1wbGllZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGluZyB0aGUgaW1wbGllZCB3YXJyYW50aWVzIG9yIHJlcHJlc2VudGF0aW9ucyBvZiBtZXJjaGFudGFiaWxpdHksIGFjY3VyYWN5LCBmaXRuZXNzIGZvciBhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWN1bGFyIHB1cnBvc2UsIHRpdGxlIGFuZCBub24taW5mcmluZ2VtZW50LCBhcmlzaW5nIGJ5IHN0YXR1dGUgb3Igb3RoZXJ3aXNlIGluIGxhdyBvciBmcm9tIGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdXJzZSBvZiBkZWFsaW5nIG9yIHVzYWdlIG9yIHRyYWRlKS4gZG9jcHJpbWUgZG9lcyBub3QgcHJvdmlkZSBvciBtYWtlIGFueSByZXByZXNlbnRhdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB3YXJyYW50aWVzIG9yIGd1YXJhbnRlZXMgZXhwcmVzcyBvciBpbXBsaWVkIGFib3V0IHRoZSBXZWJzaXRlIG9yIHRoZSBTZXJ2aWNlcy4gZG9jcHJpbWUgZG9lc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90IHZlcmlmeSBhbnkgY29udGVudCBvciBpbmZvcm1hdGlvbiBwcm92aWRlZCBieSB0aGUgVXNlcnMgb3IgYW55IFRoaXJkIFBhcnR5IFNlcnZpY2UgUHJvdmlkZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoY29sbGVjdGl2ZWx5IHJlZmVycmVkIHRvIGFzIHRoZSDigJxPdGhlciBQYXJ0aWVz4oCdKSBvbiB0aGUgV2Vic2l0ZSBhbmQgdG8gdGhlIGZ1bGxlc3QgZXh0ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJtaXR0ZWQgYnkgYXBwbGljYWJsZSBsYXcocyksIGRpc2NsYWltcyBhbGwgbGlhYmlsaXR5IGFyaXNpbmcgb3V0IG9mIHRoZSBPdGhlciBQYXJ0aWVz4oCZIHVzZSBvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsaWFuY2UgdXBvbiB0aGUgV2Vic2l0ZSwgdGhlIFNlcnZpY2VzLCB0aGUgZG9jcHJpbWUgQ29udGVudCwgVGhpcmQgUGFydHkgQ29udGVudHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByZXByZXNlbnRhdGlvbnMgYW5kIHdhcnJhbnRpZXMgbWFkZSBieSB0aGUgT3RoZXIgUGFydGllcyBvbiB0aGUgV2Vic2l0ZSBvciBhbnkgbG9zcyBhcmlzaW5nIG91dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb2YgdGhlIG1hbm5lciBpbiB3aGljaCB0aGUgU2VydmljZXMgaGF2ZSBiZWVuIHJlbmRlcmVkLlxuICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+ZG9jcHJpbWUgYWxzbyBkb2VzIG5vdCBwcm92aWRlIGFueSByZXByZXNlbnRhdGlvbiBvciBnaXZlIGFueSBndWFyYW50ZWUgb3Igd2FycmFudHkgKHdoZXRoZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Mgb3IgaW1wbGllZCkgYWJvdXQgdGhlIFdlYnNpdGUgb3IgYW55IG9mIHRoZSBTZXJ2aWNlcyBvZmZlcmVkIG9yIHNlcnZpY2VzIG9mZmVyZWQgb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVkIGJ5IHRoZSBUaGlyZCBQYXJ0eSBTZXJ2aWNlIFByb3ZpZGVycy5cbiAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzYy1zdWJoZWFkaW5nXCI+MTMuJm5ic3A7Jm5ic3A7Jm5ic3A7TElBQklMSVRZPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cInN1Yi1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPmRvY3ByaW1lIHNoYWxsIG5vdCBiZSByZXNwb25zaWJsZSBvciBsaWFibGUgaW4gYW55IG1hbm5lciB0byB0aGUgVXNlcnMgb3IgYW55IFRoaXJkIFBhcnR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VydmljZSBQcm92aWRlcnMgKGNvbGxlY3RpdmVseSByZWZlcnJlZCB0byBhcyB0aGUg4oCcT3RoZXIgUGFydGllc+KAnSkgZm9yIGFueSBsb3NzZXMsIGRhbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmp1cmllcyBvciBleHBlbnNlcyBpbmN1cnJlZCBieSBhcyBhIHJlc3VsdCBvZiBhbnkgZGlzY2xvc3VyZXMgbWFkZSBieSBkb2NwcmltZSwgd2hlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPdGhlciBQYXJ0aWVzIGhhdmUgY29uc2VudGVkIHRvIHRoZSBtYWtpbmcgb2Ygc3VjaCBkaXNjbG9zdXJlcyBieSBkb2NwcmltZS4gVGhlIE90aGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFydGllcyBzaGFsbCBub3QgaG9sZCBkb2NwcmltZSByZXNwb25zaWJsZSBvciBsaWFibGUgaW4gYW55IHdheSBmb3IgYW55IGRpc2Nsb3N1cmVzIGJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jcHJpbWUgZm9yIGNvbGxlY3Rpb24sIHVzZSwgc3RvcmFnZSBhbmQgdHJhbnNmZXIgb2YgcGVyc29uYWwgaW5mb3JtYXRpb24gdW5kZXIgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJpdmFjeSBQb2xpY3kuIGRvY3ByaW1lIHNoYWxsIG5vdCBiZSByZXNwb25zaWJsZSBmb3IgdGhlIG1pc2hhcHMvbWlzc2VkIHNlcnZpY2VzIGR1ZSB0byBub1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2Uvbm8gc2hvdyBmcm9tIHRoZSBPdGhlciBQYXJ0aWVzOyBkb2NwcmltZSBzaGFsbCBub3QgYmUgcmVzcG9uc2libGUgZm9yIGFueSBlcnJvciBpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFueSBvZiB0aGUgc2VydmljZXMgYmVpbmcgcHJvdmlkZWQgYnkgdGhlIFRoaXJkIFBhcnR5IFNlcnZpY2UgUHJvdmlkZXJzLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+ZG9jcHJpbWUgYXNzdW1lcyBubyByZXNwb25zaWJpbGl0eSwgYW5kIHNoYWxsIG5vdCBiZSBsaWFibGUgZm9yLCBhbnkgZGFtYWdlcyB0bywgb3IgdmlydXNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQgbWF5IGluZmVjdCBPdGhlciBQYXJ0aWVz4oCZIGVxdWlwbWVudCBvbiBhY2NvdW50IG9mIHRoZSBPdGhlciBQYXJ0aWVz4oCZIGFjY2VzcyB0bywgdXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2YsIG9yIGJyb3dzaW5nIHRoZSBXZWJzaXRlIG9yIHRoZSBkb3dubG9hZGluZyBvZiBhbnkgbWF0ZXJpYWwsIGRhdGEsIHRleHQsIGltYWdlcywgdmlkZW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LCBvciBhdWRpbyBjb250ZW50IGZyb20gdGhlIFdlYnNpdGUuIElmIGFueSBvZiB0aGUgT3RoZXIgUGFydHkgaXMgZGlzc2F0aXNmaWVkIHdpdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgV2Vic2l0ZSwgdGhlIHNvbGUgcmVtZWR5IG9mIHN1Y2ggT3RoZXIgUGFydHkocykgaXMgdG8gZGlzY29udGludWUgdXNpbmcgdGhlIFdlYnNpdGUuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5UbyB0aGUgbWF4aW11bSBleHRlbnQgcGVybWl0dGVkIGJ5IGFwcGxpY2FibGUgbGF3KHMpLCBkb2NwcmltZSwgaXRzIGFmZmlsaWF0ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXBlbmRlbnQgY29udHJhY3RvcnMsIHNlcnZpY2UgcHJvdmlkZXJzLCBjb25zdWx0YW50cywgbGljZW5zb3JzLCBhZ2VudHMsIGFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcHJlc2VudGF0aXZlcywgYWZmaWxpYXRlcywgZ3JvdXAgY29tcGFuaWVzIGFuZCBlYWNoIG9mIHRoZWlyIHJlc3BlY3RpdmUgZGlyZWN0b3JzLCBvZmZpY2Vyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yIGVtcGxveWVlcyAo4oCcUHJvdGVjdGVkIEVudGl0aWVz4oCdKSwgc2hhbGwgbm90IGJlIGxpYWJsZSBmb3IgYW55IGRpcmVjdCwgaW5kaXJlY3QsIHNwZWNpYWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jaWRlbnRhbCwgcHVuaXRpdmUsIGV4ZW1wbGFyeSBvciBjb25zZXF1ZW50aWFsIGRhbWFnZXMsIG9yIGFueSBvdGhlciBkYW1hZ2VzIG9mIGFueVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQsIGFyaXNpbmcgZnJvbSwgb3IgaW4gY29ubmVjdCB3aXRoIG9yIGRpcmVjdGx5IG9yIGluZGlyZWN0bHkgcmVsYXRlZCB0bywgdGhlIHVzZSBvZiwgb3IgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5hYmlsaXR5IHRvIHVzZSwgdGhlIFdlYnNpdGUgb3IgdGhlIGNvbnRlbnQsIG1hdGVyaWFscyBhbmQgZnVuY3Rpb25zIHJlbGF0ZWQgdGhlcmV0bzsgZXZlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIFByb3RlY3RlZCBFbnRpdGllcyBoYXMgYmVlbiBhZHZpc2VkIG9mIHRoZSBwb3NzaWJpbGl0eSBvZiBzdWNoIGRhbWFnZXMuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JbiAoaXYpLCBhbGwgb3IgYW55IHByb2R1Y3RzIG9yIHNlcnZpY2UgYnkgYSBUaGlyZCBQYXJ0eSBTZXJ2aWNlIFByb3ZpZGVyIHRvIGFueSBVc2VyOyBvciAoaWkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW55IGNvbW1lbnRzIG9yIGZlZWRiYWNrIGdpdmVuIGJ5IGFueSBvZiB0aGUgVXNlcnMgaW4gcmVsYXRpb24gdG8gdGhlIGdvb2RzIG9yIHNlcnZpY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZWQgYnkgYW55IFRoaXJkIFBhcnR5IFNlcnZpY2UgUHJvdmlkZXJzOyBvciAoaWkpIGFueSBjb250ZW50IHBvc3RlZCwgdHJhbnNtaXR0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhjaGFuZ2VkIG9yIHJlY2VpdmVkIGJ5IG9yIG9uIGJlaGFsZiBvZiBhbnkgVXNlciwgVGhpcmQgUGFydHkgU2VydmljZSBQcm92aWRlcnMgb3Igb3RoZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzb24gb24gb3IgdGhyb3VnaCB0aGUgV2Vic2l0ZS5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkluIG5vIGV2ZW50IHNoYWxsIHRoZSBQcm90ZWN0ZWQgRW50aXRpZXMgYmUgbGlhYmxlIGZvciBmYWlsdXJlIG9uIHRoZSBwYXJ0IG9mIHRoZSBVc2VycyBvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXJkIFBhcnR5IFNlcnZpY2UgUHJvdmlkZXJzIHRvIHByb3ZpZGUgYWdyZWVkIHNlcnZpY2VzIG9yIHRvIG1ha2UgaGltc2VsZi9oZXJzZWxmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlIGF0IHRoZSBhcHBvaW50ZWQgdGltZSwgY2FuY2VsbGF0aW9uIG9yIHJlc2NoZWR1bGluZyBvZiBhcHBvaW50bWVudHMuIEluIG5vIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhbGwgdGhlIFByb3RlY3RlZCBFbnRpdGllcyBiZSBsaWFibGUgZm9yIGFueSBjb21tZW50cyBvciBmZWVkYmFjayBnaXZlbiBieSBhbnkgb2YgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlcnMgaW4gcmVsYXRpb24gdG8gdGhlIHNlcnZpY2VzIHByb3ZpZGVkIGJ5IGEgVGhpcmQgUGFydHkgU2VydmljZSBQcm92aWRlcnNcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPmRvY3ByaW1lIGRpc2NsYWltcyBhbnkgbGlhYmlsaXR5IGluIHJlbGF0aW9uIHRvIHRoZSB2YWxpZGl0eSBvZiB0aGUgbWVkaWNhbCBhZHZpY2UgcHJvdmlkZWQgYnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgTWVkaWNhbCBFeHBlcnRzIGFuZCB0aGUgdmFsaWRpdHkgYW5kIGxlZ2FsaXR5IG9mIHRoZSBlLXByZXNjcmlwdGlvbiBmb3IgZGlzcGVuc2F0aW9uIG9mXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWNpbmVzIGFuZCBjb25kdWN0IG9mIGRpYWdub3N0aWMgdGVzdHMuIEFsbCBsaWFiaWxpdGllcyBhcmlzaW5nIG91dCBvZiBhbnkgd3JvbmcgZGlhZ25vc2lzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2YgbWVkaWNhbCBjb25kaXRpb24gYnkgdGhlIE1lZGljYWwgRXhwZXJ0cyBhbmQvIG9yIGFyaXNpbmcgZnJvbSB0aGUgZS1wcmVzY3JpcHRpb24gd2lsbCBiZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mIHRoZSBjb25jZXJuZWQgTWVkaWNhbCBFeHBlcnQuIEZ1cnRoZXIsIGFsbCBsaWFiaWxpdGllcyBhcmlzaW5nIG91dCBvZiBhbnkgd3JvbmcgZGlhZ25vc2lzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwb3J0IGJ5IHRoZSBUaGlyZCBQYXJ0eSBMYWJzIGFuZC8gb3IgYXJpc2luZyBmcm9tIHRoZSB3cm9uZyBkaXNwZW5zYXRpb24gb2YgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGhhcm1hY2V1dGljYWwgR29vZHMgYW5kIFNlcnZpY2VzIHdpbGwgYmUgb2YgdGhlIGNvbmNlcm5lZCBUaGlyZCBQYXJ0eSBTZXJ2aWNlIFByb3ZpZGVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzIHRoZSBjYXNlIG1heSBiZS5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlRoZSBVc2VycyBtYXkgc2hhcmUgdGhlaXIgcHJldmlvdXMgbWVkaWNhbCBoaXN0b3J5IGR1cmluZyBpbnRlcmFjdGlvbiB3aXRoIHRoZSBNZWRpY2FsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXhwZXJ0cy4gVGhlIFVzZXJzIHVuZGVydGFrZSB0byBzaGFyZSBzdWNoIGluZm9ybWF0aW9uIGF0IHRoZWlyIG93biByaXNrLiBkb2NwcmltZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2VydmVzIHRoZSByaWdodCB0byByZXRhaW4gc3VjaCBpbmZvcm1hdGlvbiBmb3IgdGhlIHB1cnBvc2Ugb2YgcHJvdmlkaW5nIFNlcnZpY2VzIHRvIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJzLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+VGhlIFVzZXJzIGFja25vd2xlZGdlIHRoYXQgdGhlIFByb3RlY3RlZCBFbnRpdGllcyBtZXJlbHkgYWN0IGluIHRoZSBjYXBhY2l0eSBvZiBmYWNpbGl0YXRvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZXR3ZWVuIHRoZSBPdGhlciBQYXJ0aWVzIGJ5IHByb3ZpZGluZyBhIHBsYXRmb3JtIGZvciB0aGVtIHRvIGludGVyYWN0IGFuZCB0cmFuc2FjdC4gSW4gbm9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudCBzaGFsbCB0aGUgUHJvdGVjdGVkIEVudGl0aWVzIGJlIGhlbGQgbGlhYmxlIGZvciBhbnkgb2YgdGhlIGxvc3NlcyBhdHRyaWJ1dGFibGUgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlcyBvZmZlcmVkIHRocm91Z2ggdGhlIFdlYnNpdGUuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JbiBubyBldmVudCBzaGFsbCB0aGUgdG90YWwgYWdncmVnYXRlIGxpYWJpbGl0eSBvZiB0aGUgUHJvdGVjdGVkIEVudGl0aWVzIHRvIGFueSBPdGhlciBQYXJ0aWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIGFsbCBkYW1hZ2VzLCBsb3NzZXMsIGFuZCBjYXVzZXMgb2YgYWN0aW9uICh3aGV0aGVyIGluIGNvbnRyYWN0IG9yIHRvcnQsIGluY2x1ZGluZywgYnV0IG5vdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0ZWQgdG8gbmVnbGlnZW5jZSwgc3RyaWN0IGxpYWJpbGl0eSwgcHJvZHVjdCBsaWFiaWxpdHkgb3Igb3RoZXJ3aXNlKSBhcmlzaW5nIGZyb20gdGhlc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXJtcyBvZiBVc2Ugb3IgYW55IE90aGVyIFBhcnRpZXPigJkgdXNlIG9mIHRoZSBXZWJzaXRlIGV4Y2VlZCBhbiBhZ2dyZWdhdGUgYW1vdW50IG9mIElOUlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMDAvLSAoSW5kaWFuIFJ1cGVlcyBUaG91c2FuZCBvbmx5KS5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPmRvY3ByaW1lIGFjY2VwdHMgbm8gbGlhYmlsaXR5IGZvciBhbnkgZXJyb3JzIG9yIG9taXNzaW9ucyBvbiBiZWhhbGYgb2YgdGhlIE90aGVyIFBhcnRpZXMuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2Mtc3ViaGVhZGluZ1wiPjE0LiZuYnNwOyZuYnNwOyZuYnNwO0lOREVNTklUWTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiPllvdSBhZ3JlZSB0byBkZWZlbmQsIGluZGVtbmlmeSBhbmQgaG9sZCBoYXJtbGVzcyBkb2NwcmltZSwgdGhlIFByb3RlY3RlZCBFbnRpdGllcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGVwZW5kZW50IGNvbnRyYWN0b3JzLCBzZXJ2aWNlIHByb3ZpZGVycywgY29uc3VsdGFudHMsIGxpY2Vuc29ycywgYWdlbnRzLCBhbmQgcmVwcmVzZW50YXRpdmVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIGVhY2ggb2YgdGhlaXIgcmVzcGVjdGl2ZSBkaXJlY3RvcnMsIG9mZmljZXJzIGFuZCBlbXBsb3llZXMsIGZyb20gYW5kIGFnYWluc3QgYW55IGFuZCBhbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYWltcywgbG9zc2VzLCBsaWFiaWxpdHksIGRhbWFnZXMsIGFuZC9vciBjb3N0cyAoaW5jbHVkaW5nLCBidXQgbm90IGxpbWl0ZWQgdG8sIHJlYXNvbmFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dG9ybmV5IGZlZXMgYW5kIGNvc3RzKSBhcmlzaW5nIGZyb20gb3IgcmVsYXRlZCB0byAoYSkgYWNjZXNzIHRvIG9yIHVzZSBvZiBXZWJzaXRlOyAoYikgdmlvbGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvZiB0aGVzZSBUZXJtcyBvZiBVc2Ugb3IgYW55IGFwcGxpY2FibGUgbGF3KHMpOyAoYykgdmlvbGF0aW9uIG9mIGFueSByaWdodHMgb2YgYW5vdGhlciBwZXJzb24vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHksIGluY2x1ZGluZyBpbmZyaW5nZW1lbnQgb2YgdGhlaXIgaW50ZWxsZWN0dWFsIHByb3BlcnR5IHJpZ2h0czsgb3IgKGQpIGNvbmR1Y3QgaW4gY29ubmVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aCB0aGUgV2Vic2l0ZS5cbiAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzYy1zdWJoZWFkaW5nXCI+MTUuJm5ic3A7Jm5ic3A7Jm5ic3A7R0VORVJBTCBURVJNUzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJzdWItbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TGlua3MgdG8gVGhpcmQgUGFydHkgV2Vic2l0ZXM6PC9zcGFuPiBUaGUgV2Vic2l0ZSBtYXkgYmUgbGlua2VkIHRvIHRoZSB3ZWJzaXRlIG9mIHRoaXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpZXMsIGFmZmlsaWF0ZXMgYW5kIGJ1c2luZXNzIHBhcnRuZXJzLiBkb2NwcmltZSBoYXMgbm8gY29udHJvbCBvdmVyLCBhbmQgbm90IGxpYWJsZSBvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zaWJsZSBmb3IgY29udGVudCwgYWNjdXJhY3ksIHZhbGlkaXR5LCByZWxpYWJpbGl0eSwgcXVhbGl0eSBvZiBzdWNoIHdlYnNpdGVzIG9yIG1hZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlIGJ5L3Rocm91Z2ggdGhlIFdlYnNpdGUuIEluY2x1c2lvbiBvZiBhbnkgbGluayBvbiB0aGUgV2Vic2l0ZSBkb2VzIG5vdCBpbXBseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0IGRvY3ByaW1lIGVuZG9yc2VzIHRoZSBsaW5rZWQgd2Vic2l0ZS4gT3RoZXIgUGFydGllcyBtYXkgdXNlIHRoZSBsaW5rcyBhbmQgdGhlc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZXMgYXQgdGhlaXIgb3duIHJpc2suXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TW9kaWZpY2F0aW9uczo8L3NwYW4+IGRvY3ByaW1lIHJlc2VydmVzIHRoZSByaWdodCB0byBjaGFuZ2Ugb3IgbW9kaWZ5IHRoZXNlIFRlcm1zIG9mIFVzZSBvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnkgcG9saWN5IG9yIGd1aWRlbGluZSBvZiB0aGUgV2Vic2l0ZSBpbmNsdWRpbmcgdGhlIFByaXZhY3kgUG9saWN5LCBhdCBhbnkgdGltZSBhbmQgaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRzIHNvbGUgZGlzY3JldGlvbi4gQW55IGNoYW5nZXMgb3IgbW9kaWZpY2F0aW9ucyB3aWxsIGJlIGVmZmVjdGl2ZSBpbW1lZGlhdGVseSB1cG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RpbmcgdGhlIHJldmlzaW9ucyBvbiB0aGUgV2Vic2l0ZSBhbmQgWW91IHdhaXZlIGFueSByaWdodCBZb3UgbWF5IGhhdmUgdG8gcmVjZWl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVjaWZpYyBub3RpY2Ugb2Ygc3VjaCBjaGFuZ2VzIG9yIG1vZGlmaWNhdGlvbnMuIFlvdXIgY29udGludWVkIHVzZSBvZiB0aGUgV2Vic2l0ZSB3aWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm0gWW91ciBhY2NlcHRhbmNlIG9mIHN1Y2ggY2hhbmdlcyBvciBtb2RpZmljYXRpb25zOyB0aGVyZWZvcmUsIFlvdSBzaG91bGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJlcXVlbnRseSByZXZpZXcgdGhlc2UgVGVybXMgb2YgVXNlIGFuZCBhcHBsaWNhYmxlIHBvbGljaWVzIHRvIHVuZGVyc3RhbmQgdGhlIHRlcm1zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBjb25kaXRpb25zIHRoYXQgYXBwbHkgdG8gWW91ciB1c2Ugb2YgdGhlIFdlYnNpdGUuIEZ1cnRoZXIsIGRvY3ByaW1lIGFsc28gcmVzZXJ2ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIHJpZ2h0IHRvIG1vZGlmeSBvciBkaXNjb250aW51ZSwgdGVtcG9yYXJpbHkgb3IgcGVybWFuZW50bHksIHRoZSBXZWJzaXRlIG9yIGFueVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlcyBvciBwb3J0aW9ucyB0aGVyZW9mIHdpdGhvdXQgcHJpb3Igbm90aWNlLiBZb3UgYWdyZWUgdGhhdCBkb2NwcmltZSB3aWxsIG5vdCBiZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWFibGUgZm9yIGFueSBtb2RpZmljYXRpb24sIHN1c3BlbnNpb24gb3IgZGlzY29udGludWFuY2Ugb2YgdGhlIFdlYnNpdGUgb3IgYW55IG90aGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnQgdGhlcmVvZi5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Db29raWVzOjwvc3Bhbj4gVGhlIFdlYnNpdGUgdXNlcyB0ZW1wb3JhcnkgY29va2llcyB0byBzdG9yZSBjZXJ0YWluIGRhdGEgKHRoYXQgaXMgbm90IHNlbnNpdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25hbCBkYXRhIG9yIGluZm9ybWF0aW9uKSB0aGF0IGlzIHVzZWQgYnkgZG9jcHJpbWUgZm9yIHRoZSB0ZWNobmljYWwgYWRtaW5pc3RyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2YgdGhlIFdlYnNpdGUsIHJlc2VhcmNoIGFuZCBkZXZlbG9wbWVudCwgYW5kIGZvciBVc2VyIGFkbWluaXN0cmF0aW9uLiBJbiB0aGUgY291cnNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mIHNlcnZpbmcgb3Igb3B0aW1pemluZyBzZXJ2aWNlcyB0byBZb3UsIGRvY3ByaW1lIG1heSBhbGxvdyBhdXRob3JpemVkIHRoaXJkIHBhcnRpZXMgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Ugb3IgcmVjb2duaXplIGEgdW5pcXVlIGNvb2tpZSBvbiB0aGUgWW91ciBicm93c2VyLiBkb2NwcmltZSBkb2VzIG5vdCBzdG9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25hbGx5IGlkZW50aWZpYWJsZSBpbmZvcm1hdGlvbiBpbiB0aGUgY29va2llcy5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5JbnRlbGxlY3R1YWwgcHJvcGVydHkgcmlnaHRzOjwvc3Bhbj4gQWxsIHRoZSBpbnRlbGxlY3R1YWwgcHJvcGVydHkgdXNlZCBvbiB0aGUgV2Vic2l0ZSBleGNlcHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhvc2Ugd2hpY2ggaGF2ZSBiZWVuIGlkZW50aWZpZWQgYXMgdGhlIGludGVsbGVjdHVhbCBwcm9wZXJ0aWVzIG9mIHRoZSBPdGhlciBQYXJ0aWVzKGFzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluZWQgYWJvdmUpIHNoYWxsIHJlbWFpbiB0aGUgZXhjbHVzaXZlIHByb3BlcnR5IG9mIHRoZSBDb21wYW55LiBUaGUgT3RoZXIgUGFydGllc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZ3JlZSBub3QgdG8gY2lyY3VtdmVudCwgZGlzYWJsZSBvciBvdGhlcndpc2UgaW50ZXJmZXJlIHdpdGggc2VjdXJpdHkgcmVsYXRlZCBmZWF0dXJlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZiB0aGUgV2Vic2l0ZSBvciBmZWF0dXJlcyB0aGF0IHByZXZlbnQgb3IgcmVzdHJpY3QgdXNlIG9yIGNvcHlpbmcgb2YgYW55IG1hdGVyaWFscyBvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmZvcmNlIGxpbWl0YXRpb25zIG9uIHVzZSBvZiB0aGUgV2Vic2l0ZSBvciB0aGUgbWF0ZXJpYWxzIHRoZXJlaW4uIFRoZSBtYXRlcmlhbHMgb24gdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlYnNpdGUgb3Igb3RoZXJ3aXNlIG1heSBub3QgYmUgbW9kaWZpZWQsIGNvcGllZCwgcmVwcm9kdWNlZCwgZGlzdHJpYnV0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcHVibGlzaGVkLCBkb3dubG9hZGVkLCBkaXNwbGF5ZWQsIHNvbGQsIGNvbXBpbGVkLCBwb3N0ZWQgb3IgdHJhbnNtaXR0ZWQgaW4gYW55IGZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3IgYnkgYW55IG1lYW5zLCBpbmNsdWRpbmcgYnV0IG5vdCBsaW1pdGVkIHRvLCBlbGVjdHJvbmljLCBtZWNoYW5pY2FsLCBwaG90b2NvcHlpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZGluZyBvciBvdGhlciBtZWFucy5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Db21wbGlhbmNlIG9mIEFwcGxpY2FibGUgTGF3Ojwvc3Bhbj4gV2hpbGUgY29tbXVuaWNhdGluZy8gdHJhbnNhY3Rpbmcgd2l0aCBlYWNoIG90aGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm91Z2ggdGhlIFdlYnNpdGUsIFRoaXJkIFBhcnR5IFNlcnZpY2UgUHJvdmlkZXJzIHNoYWxsIGF0IGFsbCB0aW1lcyBlbnN1cmUgZnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGlhbmNlIHdpdGggdGhlIGFwcGxpY2FibGUgcHJvdmlzaW9ucyBvZiB0aGUgQ29udHJhY3QgQWN0LCBJVCBBY3QsIERydWdzIEFjdCByZWFkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGggdGhlIERydWcgUnVsZXMsIERydWdzIGFuZCBNYWdpYyBBY3QsIFRoZSBJbmRpYW4gTWVkaWNhbCBDb3VuY2lsIEFjdCwgMTk1NiByZWFkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGggdGhlIEluZGlhbiBNZWRpY2FsIENvdW5jaWwgUnVsZXMsIDE5NTcsIFBoYXJtYWN5IEFjdCwgQ29uc3VtZXIgUHJvdGVjdGlvbiBBY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE5ODYsIElUIGxhdyAoaW5jbHVkaW5nIHJ1bGVzIGZvciBzZW5zaXRpdmUgcGVyc29uYWwgaW5mb3JtYXRpb24gYXMgZW5zaHJpbmVkIHVuZGVyIElUXG4gICAgICAgICAgICAgICBsYXcpLCBldGMuIDxzdHJvbmc+KOKAnENhcHRpb25lZCBMYXdz4oCdKTwvc3Ryb25nPiBhcyB3ZWxsIGFzIGFsbCBvdGhlciBsYXdzIGZvciB0aGUgdGltZSBiZWluZyBpbiBmb3JjZS5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5UZXJtaW5hdGlvbjo8L3NwYW4+IGRvY3ByaW1lIHJlc2VydmVzIHRoZSByaWdodCB0bywgYXQgYW55IHRpbWUsIGFuZCB3aXRoIG9yIHdpdGhvdXQgbm90aWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXJtaW5hdGUgdGhlc2UgVGVybXMgb2YgVXNlIGFnYWluc3QgdGhlIFVzZXIocyksIGlmIHRoZXJlIGlzOlxuICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cInByaXZhY3ktb3JkZXItbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktb3JkZXItaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJyZWFjaCBvZiBhbnkgb2YgYXBwbGljYWJsZSBsYXcocyksIGluY2x1ZGluZyBidXQgbm90IGxpbWl0ZWQgdG8gdGhlIENhcHRpb25lZCBMYXdzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3IgdGhlIHByb3Zpc2lvbnMgb2YgdGhlc2UgVGVybXMgb2YgVXNlIG9yIHRoZSB0ZXJtcyBvZiB0aGUgUHJpdmFjeSBQb2xpY3kgb3IgYW55XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXIgdGVybXMsIGNvbmRpdGlvbnMsIG9yIHBvbGljaWVzIHRoYXQgbWF5IGJlIGFwcGxpY2FibGUgdG8gdGhlIFNlcnZpY2VzIGZyb21cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lIHRvIHRpbWUgKG9yIGhhdmUgYWN0ZWQgaW4gYSBtYW5uZXIgdGhhdCBjbGVhcmx5IHNob3dzIHRoYXQgT3RoZXIgUGFydHkocykgZG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3QgaW50ZW5kIHRvLCBvciBhcmUgdW5hYmxlIHRvLCBjb21wbHkgd2l0aCB0aGUgc2FtZSk7IG9yXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktb3JkZXItaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJyZWFjaCBvZiBhbnkgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YgdGhlc2UgVGVybXMgb2YgVXNlO1xuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LW9yZGVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2NwcmltZSBpcyB1bmFibGUgdG8gdmVyaWZ5IG9yIGF1dGhlbnRpY2F0ZSBhbnkgaW5mb3JtYXRpb24gcHJvdmlkZWQgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2NwcmltZTsgb3JcbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1vcmRlci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQSB0aGlyZCBwYXJ0eSByZXBvcnRzIHZpb2xhdGlvbiBvZiBhbnkgb2YgaXRzIHJpZ2h0IGFzIGEgcmVzdWx0IG9mIHlvdXIgdXNlIG9mIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnZpY2VzO1xuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LW9yZGVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2NwcmltZSBoYXMgcmVhc29uYWJsZSBncm91bmRzIGZvciBzdXNwZWN0aW5nIGFueSBpbGxlZ2FsLCBmcmF1ZHVsZW50IG9yIGFidXNpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpdml0eSBvbiBwYXJ0IG9mIHN1Y2ggVXNlcjsgb3JcbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1vcmRlci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jcHJpbWUgYmVsaWV2ZXMsIGluIGl0cyBzb2xlIGRpc2NyZXRpb24sIHRoYXQgT3RoZXIgUGFydGllcyBhY3Rpb25zIG1heSBjYXVzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2FsIGxpYWJpbGl0eSBmb3IgZG9jcHJpbWUgKG9yIGFueSBvZiBpdHMgYWZmaWxpYXRlcywgaW5kZXBlbmRlbnQgY29udHJhY3RvcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZSBwcm92aWRlcnMsIGNvbnN1bHRhbnRzLCBsaWNlbnNvcnMsIGFnZW50cywgYW5kIHJlcHJlc2VudGF0aXZlcykgb3IgYXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJhcnkgdG8gdGhlIGludGVyZXN0cyBvZiB0aGUgV2Vic2l0ZTsgb3JcbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1vcmRlci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jcHJpbWUgaXMgcmVxdWlyZWQgdG8gZG8gc28gYnkgbGF3OyBvclxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LW9yZGVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgcHJvdmlzaW9uIG9mIHRoZSBTZXJ2aWNlcyB0byB0aGUgZ2VuZXJhbCBwdWJsaWMsIGlzIGluIGRvY3ByaW1l4oCZcyBvcGluaW9uLCBub1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvbmdlciBjb21tZXJjaWFsbHkgdmlhYmxlOyBvclxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LW9yZGVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2NwcmltZSBoYXMgZWxlY3RlZCB0byBkaXNjb250aW51ZSwgd2l0aCBvciB3aXRob3V0IHJlYXNvbiwgYWNjZXNzIHRvIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlYnNpdGUgb3IgdGhlIFNlcnZpY2VzIChvciBhbnkgcGFydCB0aGVyZW9mKS5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1vcmRlci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jcHJpbWUgYmVsaWV2ZXMgaW4gaXRzIHNvbGUgZGlzY3JldGlvbiB0aGF0IFVzZXLigJlzIGFjdGlvbnMgbWF5IGNhdXNlIGxlZ2FsIGxpYWJpbGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciBzdWNoIFVzZXIsIG90aGVyIFVzZXJzIG9yIGZvciBkb2NwcmltZSBvciBhcmUgY29udHJhcnkgdG8gdGhlIGludGVyZXN0cyBvZiB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWJzaXRlLlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LW9yZGVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPbmNlIHRlbXBvcmFyaWx5IHN1c3BlbmRlZCwgaW5kZWZpbml0ZWx5IHN1c3BlbmRlZCBvciB0ZXJtaW5hdGVkLCB0aGUgVXNlciBtYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3QgY29udGludWUgdG8gdXNlIHRoZSBXZWJzaXRlIHVuZGVyIHRoZSBzYW1lIGFjY291bnQsIGEgZGlmZmVyZW50IGFjY291bnQgb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZS1yZWdpc3RlciB1bmRlciBhIG5ldyBhY2NvdW50LiBPbiB0ZXJtaW5hdGlvbiBvZiBhbiBhY2NvdW50IGR1ZSB0byB0aGUgcmVhc29uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbnRpb25lZCBoZXJlaW4sIHN1Y2ggVXNlciBzaGFsbCBubyBsb25nZXIgaGF2ZSBhY2Nlc3MgdG8gZGF0YSwgbWVzc2FnZXMsIGZpbGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIG90aGVyIG1hdGVyaWFsIGtlcHQgb24gdGhlIFdlYnNpdGUgYnkgc3VjaCBVc2VyLiBUaGUgVXNlciBzaGFsbCBlbnN1cmUgdGhhdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlL3NoZS9pdCBoYXMgY29udGludW91cyBiYWNrdXAgb2YgYW55IG1lZGljYWwgc2VydmljZXMgdGhlIFVzZXIgaGFzIHJlbmRlcmVkIGluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIgdG8gY29tcGx5IHdpdGggdGhlIFVzZXLigJlzIHJlY29yZCBrZWVwaW5nIHByb2Nlc3MgYW5kIHByYWN0aWNlc1xuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LW9yZGVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgcmlnaHQgdG8gdGVybWluYXRlLyBzdXNwZW5kIHRoZSBhY2NvdW50IGlzIGluIGFkZGl0aW9uIHRvLCBhbmQgd2l0aG91dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWp1ZGljZSB0bywgZG9jcHJpbWXigJlzIHJpZ2h0IHRvIGluaXRpYXRlIGFjdGlvbiBhZ2FpbnN0IGEgVXNlciAob3IgT3RoZXIgUGFydGllcyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW4gYWNjb3JkYW5jZSB3aXRoIGFwcGxpY2FibGUgbGF3LlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Rm9yY2UgTWFqZXVyZTo8L3NwYW4+IE90aGVyIFBhcnRpZXMgYWNjZXB0IGFuZCBhY2tub3dsZWRnZSB0aGF0IGRvY3ByaW1lIHNoYWxsIG5vdCBiZSBsaWFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIGFueSBsb3NzIG9yIGRhbWFnZSBjYXVzZWQgdG8gdGhlIFVzZXIgYXMgYSByZXN1bHQgb2YgZGVsYXkgb3IgZGVmYXVsdCBvciBkZWZpY2llbmN5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yIGZhaWx1cmUgaW4gdGhlIFNlcnZpY2VzIGFzIGEgcmVzdWx0IG9mIGFueSBuYXR1cmFsIGRpc2FzdGVycywgZmlyZSwgcmlvdHMsIGNpdmlsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3R1cmJhbmNlcywgYWN0aW9ucyBvciBkZWNyZWVzIG9mIGdvdmVybm1lbnRhbCBib2RpZXMsIGNvbW11bmljYXRpb24gbGluZSBmYWlsdXJlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAod2hpY2ggYXJlIG5vdCBjYXVzZWQgZHVlIHRvIHRoZSBmYXVsdCBvZiBkb2NwcmltZSBvciB0aGUgVGhpcmQgUGFydHkgU2VydmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm92aWRlcnMpLCBvciBhbnkgb3RoZXIgZGVsYXkgb3IgZGVmYXVsdCBvciBkZWZpY2llbmN5IG9yIGZhaWx1cmUgd2hpY2ggYXJpc2VzIGZyb21cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F1c2VzIGJleW9uZCBkb2NwcmltZeKAmXMgcmVhc29uYWJsZSBjb250cm9sICjigJxGb3JjZSBNYWpldXJlIEV2ZW504oCdKS4gSW4gdGhlIGV2ZW50IG9mXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFueSBGb3JjZSBNYWpldXJlIEV2ZW50IGFyaXNpbmcsIGRvY3ByaW1lLCBkZXBlbmRpbmcgb24gd2hvc2UgcGVyZm9ybWFuY2UgaGFzIGJlZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wYWN0ZWQgdW5kZXIgdGhlIFRlcm1zIG9mIFVzZSwgc2hhbGwgaW1tZWRpYXRlbHkgZ2l2ZSBub3RpY2UgdG8gdGhlIE90aGVyIFBhcnR5KHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mIHRoZSBmYWN0cyB3aGljaCBjb25zdGl0dXRlIHRoZSBGb3JjZSBNYWpldXJlIEV2ZW50LlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkdvdmVybmluZyBMYXcgYW5kIERpc3B1dGUgUmVzb2x1dGlvbjo8L3NwYW4+IFRoZXNlIFRlcm1zIG9mIFVzZSBhbmQgYW55IGNvbnRyYWN0dWFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ibGlnYXRpb24gYmV0d2VlbiB0aGUgUGFydGllcyB3aWxsIGJlIGdvdmVybmVkIGJ5IHRoZSBsYXdzIG9mIEluZGlhLCB3aXRob3V0IHJlZmVyZW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byB0aGUgY29uZmxpY3Qgb2YgbGF3cyBwcmluY2lwbGVzLiBBbnkgbGVnYWwgYWN0aW9uIG9yIHByb2NlZWRpbmcgcmVsYXRlZCB0byBPdGhlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXJ0eShzKSBhY2Nlc3MgdG8sIG9yIHVzZSBvZiwgdGhlIFdlYnNpdGUgb3IgdGhlc2UgVGVybXMgb2YgVXNlIHNoYWxsIGJlIHN1YmplY3QgdG8gdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2x1c2l2ZSBqdXJpc2RpY3Rpb24gb2YgdGhlIGNvdXJ0cyBhdCBHdXJ1Z3JhbS5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TdXJ2aXZhbDo8L3NwYW4+IEV2ZW4gYWZ0ZXIgdGVybWluYXRpb24sIGNlcnRhaW4gdGVybXMvb2JsaWdhdGlvbnMgbWVudGlvbmVkIHVuZGVyIHRoZXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlcm1zIG9mIFVzZSBzdWNoIGFzIExpYWJpbGl0eSwgSW5kZW1uaXR5LCBJbnRlbGxlY3R1YWwgUHJvcGVydHksIERpc3B1dGUgUmVzb2x1dGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFsbCBjb250aW51ZSBhbmQgc3Vydml2ZSB0ZXJtaW5hdGlvbi5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TZXZlcmFiaWxpdHk6PC9zcGFuPiBJZiBhbnkgcHJvdmlzaW9uIG9mIHRoZXNlIFRlcm1zIG9mIFVzZSBpcyBkZWVtZWQgaW52YWxpZCwgdW5sYXdmdWwsIHZvaWQgb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIGFueSBvdGhlciByZWFzb24gdW5lbmZvcmNlYWJsZSwgdGhlbiB0aGF0IHByb3Zpc2lvbiBzaGFsbCBiZSBkZWVtZWQgc2V2ZXJhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gdGhlc2UgVGVybXMgb2YgVXNlIGFuZCBzaGFsbCBub3QgYWZmZWN0IHRoZSB2YWxpZGl0eSBhbmQgZW5mb3JjZWFiaWxpdHkgb2YgYW55IG9mXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSByZW1haW5pbmcgcHJvdmlzaW9ucy5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5XYWl2ZXI6PC9zcGFuPiBObyBwcm92aXNpb24gb2YgdGhlc2UgVGVybXMgb2YgVXNlIHNoYWxsIGJlIGRlZW1lZCB0byBiZSB3YWl2ZWQgYW5kIG5vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFjaCBleGN1c2VkLCB1bmxlc3Mgc3VjaCB3YWl2ZXIgb3IgY29uc2VudCBzaGFsbCBiZSBpbiB3cml0aW5nIGFuZCBzaWduZWQgYnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jcHJpbWUuIEFueSBjb25zZW50IGJ5IGRvY3ByaW1lIHRvLCBvciBhIHdhaXZlciBieSBkb2NwcmltZSBvZiBhbnkgYnJlYWNoIGJ5IE90aGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhcnRpZXMsIHdoZXRoZXIgZXhwcmVzc2VkIG9yIGltcGxpZWQsIHNoYWxsIG5vdCBjb25zdGl0dXRlIGNvbnNlbnQgdG8sIHdhaXZlciBvZiwgb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhjdXNlIGZvciBhbnkgb3RoZXIgZGlmZmVyZW50IG9yIHN1YnNlcXVlbnQgYnJlYWNoLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkhlYWRpbmdzOjwvc3Bhbj4gVGhlIGhlYWRpbmdzIGFuZCBzdWJoZWFkaW5ncyBoZXJlaW4gYXJlIGluY2x1ZGVkIGZvciBjb252ZW5pZW5jZSBhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRlbnRpZmljYXRpb24gb25seSBhbmQgYXJlIG5vdCBpbnRlbmRlZCB0byBkZXNjcmliZSwgaW50ZXJwcmV0LCBkZWZpbmUgb3IgbGltaXQgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLCBleHRlbnQgb3IgaW50ZW50IG9mIHRoZXNlIFRlcm1zIG9mIFVzZS5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5HcmlldmFuY2UgT2ZmaWNlciBhbmQgQ29udGFjdCB1czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSWYgYW55IFVzZXIvWW91IGhhdmUgYW55IGdyaWV2YW5jZSwgY29tbWVudCwgcXVlc3Rpb24gb3Igc3VnZ2VzdGlvbiByZWdhcmRpbmcgYW55IG9mXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91ciBTZXJ2aWNlcyBvciB0aGUgV2Vic2l0ZSBvciBhbnl0aGluZyByZWxhdGVkIHRvIGFueSBvZiB0aGUgZm9yZ29pbmcsIHBsZWFzZSBjb250YWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzIGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluIGFjY29yZGFuY2Ugd2l0aCB0aGUgSW5mb3JtYXRpb24gVGVjaG5vbG9neSBBY3QsIDIwMDAsIGFuZCB0aGUgcnVsZXMgbWFkZSB0aGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlciwgaWYgeW91IGhhdmUgYW55IGdyaWV2YW5jZSB3aXRoIHJlc3BlY3QgdG8gdGhlIFdlYnNpdGUgb3IgdGhlIHNlcnZpY2UsIGluY2x1ZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnkgZGlzY3JlcGFuY2llcyBhbmQgZ3JpZXZhbmNlcyB3aXRoIHJlc3BlY3QgdG8gcHJvY2Vzc2luZyBvZiBpbmZvcm1hdGlvbiwgeW91IGNhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWN0IG91ciBHcmlldmFuY2UgT2ZmaWNlciBhdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Jm5ic3A7PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIj5OYW1lOiBBc2hpc2ggQWptYW5pPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIj5EZXNpZ25hdGlvbjogTWFuYWdlciBPcGVyYXRpb25zPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIj5FbWFpbDogYXNoaXNoYWptYW5pQGRvY3ByaW1lLmNvbTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZG9jdG9yLXRlcm1zLXJvd1wiIGhpZGRlbj17dGhpcy5zdGF0ZS5zZWxlY3RlZCA9PSAwfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcHJpdmFjeS1kZXNjLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjLWhlYWRpbmcgbXJiLTIwXCI+VEVSTVMgQU5EIENPTkRJVElPTlMgRk9SIEVNUEFORUxNRU5UIE9GIEhPU1BJVEFMUy9ESUFHTk9TVElDIENFTlRFUlMvQ0xJTklDUy9ET0NUT1JTPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+VGhpcyBhZ3JlZW1lbnQgc2V0cyBmb3J0aCB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgdGhhdCBhcHBseSB0byB0aGUgZW1wYW5lbG1lbnQgb2YgSG9zcGl0YWxzL0RpYWdub3N0aWMgY2VudGVycy9DbGluaWNzL0RvY3RvcnMgKOKAnEhlYWx0aCBTZXJ2aWNlIHByb3ZpZGVyL0hTQuKAnSkgdG8gcHJvdmlkZSBhY2Nlc3MgdG8gaGVhbHRoIGNhcmUgc2VydmljZXMgYnkgZGlzc2VtaW5hdGluZyBoZWFsdGhjYXJlIGluZm9ybWF0aW9uIGFuZCBkYXRhIGluIGFuIHVuYmlhc2VkIG1hbm5lciB1bmRlciBpdHMgc2NvcGUgb2YgbGljZW5zdXJlIG9yIGFjY3JlZGl0YXRpb24gKFNlcnZpY2VzKSB0byB0aGUgdXNlcnMvY3VzdG9tZXJzIG9mIHRoaXMgV2Vic2l0ZSBhbmQgaXRzIE1vYmlsZSBBcHBsaWNhdGlvbiAoY29sbGVjdGl2ZWx5IGJlIHJlZmVycmVkIHRvIGFzIOKAnFdlYnNpdGXigJ0pLCB3aGljaCBpcyBtYW5hZ2VkIGFuZCBvcGVyYXRlZCBieSBQYW5hY2VhIFRlY2hubyBTZXJ2aWNlcyBQcml2YXRlIExpbWl0ZWQgKOKAnENvbXBhbnnigJ0pLiBZb3UgdW5kZXJzdGFuZCBhbmQgYWdyZWUgdGhhdCBDb21wYW55IHJlc2VydmVzIHRoZSByaWdodCB0byBlbnJvbGwvIGFwcG9pbnQgb3RoZXIgaGVhbHRoIHNlcnZpY2UgcHJvdmlkZXJzIGZvciBzaW1pbGFyIHNlcnZpY2VzIGFzIGVudmlzYWdlZCBoZXJlaW4gYW5kIHlvdSBzaGFsbCBoYXZlIG5vIG9iamVjdGlvbiBmb3IgdGhlIHNhbWUgYW5kIHZpY2UtdmVyc2EuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjXCI+VGhpcyBkb2N1bWVudC9hZ3JlZW1lbnQgaXMgYW4gZWxlY3Ryb25pYyByZWNvcmQgaW4gdGVybXMgb2YgSW5mb3JtYXRpb24gVGVjaG5vbG9neSBBY3QsIDIwMDAgYW5kIGdlbmVyYXRlZCBieSBhIGNvbXB1dGVyIHN5c3RlbSBhbmQgZG9lcyBub3QgcmVxdWlyZSBhbnkgcGh5c2ljYWwgb3IgZGlnaXRhbCBzaWduYXR1cmVzLiBUaGlzIGRvY3VtZW50IGlzIHB1Ymxpc2hlZCBpbiBhY2NvcmRhbmNlIHdpdGggdGhlIHByb3Zpc2lvbnMgb2YgUnVsZSAzIG9mIHRoZSBJbmZvcm1hdGlvbiBUZWNobm9sb2d5IChJbnRlcm1lZGlhcmllcyBndWlkZWxpbmVzKSAyMDExLCB0aGF0IHByb3ZpZGVzIGZvciB0aGUgZHVlIGRpbGlnZW5jZSB0byBiZSBleGVyY2lzZWQgZm9yIHRoZSBhY2Nlc3Mgb3IgdXNhZ2Ugb2YgdGhpcyBXZWJzaXRlLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiPlBMRUFTRSBSRUFEIFRIRVNFIFRFUk1TIEFORCBDT05ESVRJT05TIENBUkVGVUxMWS4gWU9VUiBBQ0NFUFRBTkNFIE9GIFRFUk1TIENPTlRBSU5FRCBIRVJFSU4gQ09OU1RJVFVURVMgVEhFIEFHUkVFTUVOVCBCRVRXRUVOIFlPVSBBTkQgQ09NUEFOWSBGT1IgVEhFIFBVUlBPU0UgQVMgREVGSU5ERUQgSEVSRVVOREVSLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzYy1zdWJoZWFkaW5nXCI+MS4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtTQ09QRSBBTkQgUFVSUE9TRTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVhbHRoIFNlcnZpY2UgUHJvdmlkZXIgaXMgZGVzaXJvdXMgYW5kIGhhZCBhcHByb2FjaGVkIHRoZSBDb21wYW55IHRvIGRpc3BsYXkvbGlzdCB0aGUgaW5mb3JtYXRpb24gcGVydGFpbmluZyB0byB0aGUgSGVhbHRoIFNlcnZpY2UgUHJvdmlkZXIgb24gdGhlIFdlYnNpdGUgdG8gZGlzc2VtaW5hdGUgaW5mb3JtYXRpb24gcmVnYXJkaW5nIHRoZSBhdmFpbGFiaWxpdHkgb2YgbWVkaWNhbC9oZWFsdGggZmFjaWxpdGllcyB3aXRoIHRoZSBIZWFsdGggU2VydmljZSBQcm92aWRlciB0byB0aGUgcHJvc3BlY3RpdmUgdXNlcnMvY3VzdG9tZXJzIG9mIHRoZSBXZWJzaXRlIGFuZCB0byByZW5kZXIgbWVkaWNhbC9oZWFsdGggY2FyZSBzZXJ2aWNlcyB0byB0aGUgY3VzdG9tZXJzIG9mIHRoZSBDb21wYW55IHdobyBhcmUgZGVzaXJvdXMgb2YgYXZhaWxpbmcgc3VjaCBtZWRpY2FsIGJlbmVmaXRzIHRocm91Z2ggdGhlIFdlYnNpdGUuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXJ0aWVzIGFncmVlIHRoYXQgQ29tcGFueSBzaGFsbCBwcm92aWRlIHRoZSBjdXN0b21lciBkZXRhaWxzIG9mIHN1Y2ggY3VzdG9tZXJzIHdobyBoYXZlIGV4cHJlc3NlZCB0byBhdmFpbCB0aGUgc2VydmljZXMgb2YgdGhlIEhlYWx0aCBTZXJ2aWNlIFByb3ZpZGVyIHN1Y2ggYXMgYnkgYm9va2luZyBhbiBvbmxpbmUgY29uc3VsdGF0aW9uLCB0aHJvdWdoIHRoZSBkZXNpZ25hdGVkIHdlYnNpdGUgb2YgdGhlIENvbXBhbnkuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGb3IgYWxsIGN1c3RvbWVycyByZWZlcnJlZCBieSB0aGUgQ29tcGFueSwgQ29tcGFueSBzaGFsbCBiZSBlbnRpdGxlZCB0byBzZW5kIGluZm9ybWF0aW9uIHRocm91Z2ggU01TIG9yIEUtTWFpbCB0byB0aGUgU1BPQyBvZiBTZXJ2aWNlIFByb3ZpZGVyLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSWYgYW55IHNlcnZpY2VzLCBmdW5jdGlvbnMgb3IgcmVzcG9uc2liaWxpdGllcyBub3Qgc3BlY2lmaWNhbGx5IGRlc2NyaWJlZCBoZXJlaW4gb3IgaW4gYW55IHJlbGF0ZWQgZG9jdW1lbnRzIGJ1dCBhcmUgaW5oZXJlbnQsIG5lY2Vzc2FyeSBvciBjdXN0b21hcnkgcGFydCBvZiB0aGUgc2VydmljZXMgb3IgYXJlIHJlYXNvbmFibHkgcmVxdWlyZWQgZm9yIHByb3BlciBwZXJmb3JtYW5jZSBvZiB0aGUgU2VydmljZXMgaW4gYWNjb3JkYW5jZSB3aXRoIHRoZSBBZ3JlZW1lbnQsIHRoZXkgc2hhbGwgYmUgZGVlbWVkIHRvIGJlIGluY2x1ZGVkIHdpdGhpbiB0aGUgU2NvcGUgb2YgU2VydmljZXMgYXMgaWYgc3VjaCBzZXJ2aWNlcywgZnVuY3Rpb25zIG9yIHJlc3BvbnNpYmlsaXRpZXMgd2VyZSBzcGVjaWZpY2FsbHkgZGVzY3JpYmVkIGluIHRoaXMgQWdyZWVtZW50LlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2Mtc3ViaGVhZGluZ1wiPjIuJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7T0JMSUdBVElPTlMgT0YgVEhFIFNFUlZJQ0UgUFJPVklERVI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgQWdyZWVtZW50IGlzIGJldHdlZW4gdGhlIEhlYWx0aCBTZXJ2aWNlIFByb3ZpZGVyIGFuZCB0aGUgQ29tcGFueS4gSG93ZXZlciwgaXQgd291bGQgYmUgYXBwbGljYWJsZSB0byBhbGwgc3BlY2lhbHRpZXMgb2ZmZXJlZCBieSA8c3Bhbj5TZXJ2aWNlIFByb3ZpZGVyIEdyb3VwIG9mIEhvc3BpdGFscy8gZGlhZ25vc3RpYyBjZW50ZXJzL0NsaW5pY3MsPC9zcGFuPiBhcyBtYXkgYmUgYXBwbGljYWJsZSwgYW5kIGFzIHByb3ZpZGVkIGJ5IHRoZSBIZWFsdGggU2VydmljZSBQcm92aWRlciBmcm9tIHRpbWUgdG8gdGltZS5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBlbXBhbmVsbGVkIEhlYWx0aCBTZXJ2aWNlIFByb3ZpZGVyIGlzIGV4cGVjdGVkIHRvIHByb3ZpZGUgaXRzIFNlcnZpY2VzIGFzIHBlciB0aGUgaW5kdXN0cnkgc3RhbmRhcmRzIGFuZCBpbiBhIHByb2Zlc3Npb25hbCAmYW1wOyBldGhpY2FsIG1hbm5lci5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlYWx0aCBTZXJ2aWNlIFByb3ZpZGVyIG1heSBzZXQtdXAgYSBzZXBhcmF0ZSBDb21wYW554oCZcyDigJxDby1vcmRpbmF0aW9uIERlc2vigJ0gcm91bmQgdGhlIGNsb2NrIGluIHRoZSBIZWFsdGggU2VydmljZSBQcm92aWRlciBQcmVtaXNlcywgYXMgbWF5IGJlIG11dHVhbGx5IGFncmVlZCB3aXRoIHRoZSBDb21wYW55LlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVhbHRoIFNlcnZpY2UgUHJvdmlkZXIgc2hhbGwgbm90aWZ5IGFuZCBzaGFyZSB3aXRoIHRoZSBDb21wYW55IHRoZSBjb3N0L3JhdGUgbGlzdCBkZXRhaWxpbmcgdGhlIGNvc3RzIG9mIGVhY2ggbWVkaWNhbCB0cmVhdG1lbnQgYW5kIHByb2NlZHVyZXMsIHdoaWNoIGNhbiBiZSBzdWl0YWJseSBkaXNwbGF5ZWQgb24gdGhlIHdlYnNpdGUgb2YgdGhlIENvbXBhbnkuIEluIGNhc2Ugb2YgYW55IGNoYW5nZXMvbW9kaWZpY2F0aW9uIHRvIHN1Y2ggY29zdHMvcmF0ZXMgdGhlIFNlcnZpY2UgUHJvdmlkZXIgc2hhbGwgbm90aWZ5IHRoZSBzYW1lIHdpdGhpbiAyKHR3bykgZGF5cyBwcmlvciB0byBzdWNoIGNoYW5nZXMgYXJlIHRvIGJlIG1hZGUgZWZmZWN0aXZlLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVhbHRoIFNlcnZpY2UgUHJvdmlkZXIgYWdyZWVzIHRvIHByb3ZpZGUgdGhlIFNlcnZpY2VzIHRvIHRoZSBjdXN0b21lcnMgb2YgdGhlIENvbXBhbnkgd2l0aCB0aGUgc2FtZSBkZWdyZWUgb2YgY2FyZSBhbmQgc2tpbGwgYXMgY3VzdG9tYXJpbHkgcHJvdmlkZWQgdG8gaXRzIG93biBwYXRpZW50cyB3aG8gYXJlIG5vdCBjdXN0b21lcnMgb2YgdGhlIENvbXBhbnksIGkuZS4gYWNjb3JkaW5nIHRvIGdlbmVyYWxseSBhY2NlcHRlZCBzdGFuZGFyZHMgb2YgcHJhY3RpY2UgaW5jbHVkaW5nIG1lZGljYWwgcHJvZmVzc2lvbiBpbiBJbmRpYS5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlYWx0aCBTZXJ2aWNlIFByb3ZpZGVyIGFncmVlcyBub3QgdG8gZGlzY3JpbWluYXRlIGFnYWluc3QgY3VzdG9tZXJzIG9mIHRoZSBDb21wYW55IG9uIHRoZSBiYXNpcyBvZiByYWNlLCBldGhuaWNpdHksIGdlbmRlciwgY3JlZWQsIGFuY2VzdHJ5LCBsYXdmdWwgb2NjdXBhdGlvbiwgYWdlLCByZWxpZ2lvbiwgbWFyaXRhbCBzdGF0dXMsIHNleHVhbCBvcmllbnRhdGlvbiwgbWVudGFsIG9yIHBoeXNpY2FsIGRpc2FiaWxpdHksIG1lZGljYWwgaGlzdG9yeSwgY29sb3IsIG5hdGlvbmFsIG9yaWdpbiwgcGxhY2Ugb2YgcmVzaWRlbmNlLCBoZWFsdGggc3RhdHVzLCBvciBhbnkgb3RoZXIgZ3JvdW5kcyBwcm9oaWJpdGVkIGJ5IGxhdy5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlYWx0aCBTZXJ2aWNlIFByb3ZpZGVyIGFsc28gYWdyZWVzIHRvIGFsbG93IENvbXBhbnkgdG8gYXVkaXQgdGhlIHJlbGV2YW50IGJpbGxzLyBkb2N1bWVudHMgcGVydGFpbmluZyB0byB0aGlzIEFncmVlbWVudDsgYXMgYW5kIHdoZW4gcmVxdWVzdGVkIGJ5IHRoZSBDb21wYW55LiBTdWNoIGF1ZGl0aW5nIHNoYWxsIGJlIHNjaGVkdWxlZCBtdXR1YWxseSBiZXR3ZWVuIHRoZSBwYXJ0aWVzLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVhbHRoIFNlcnZpY2UgUHJvdmlkZXIgc2hhbGwgZW5zdXJlIHRoYXQgdGhlIGluZm9ybWF0aW9uIHByb3ZpZGVkIHRvIHRoZSBDb21wYW55IGZvciBkaXNwbGF5IG9uIGl0cyBXZWJzaXRlIHNoYWxsIGJlIHVwIHRvIGRhdGVkLCB0cnVlIGFuZCBjb3JyZWN0LiBJbiB0aGlzIGNvbnRleHQsIGhlYWx0aCBTZXJ2aWNlIFByb3ZpZGVyIHdpbGwgbm90IGhvbGQgdGhlIENvbXBhbnkgKGluY2x1ZGluZyBpdHMgYWZmaWxpYXRlZCBjb21wYW5pZXMvZ3JvdXAgY29tcGFuaWVzIGFuZCByZWxhdGVkIHdlYnNpdGVzKSBsaWFibGUgZm9yIGFueSBpbmZvcm1hdGlvbiByZWxpZWQgdXBvbiBieSBDb21wYW55IGFzIHByb3ZpZGVkIGJ5IHRoZSBIZWFsdGggU2VydmljZSBQcm92aWRlci5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlYWx0aCBTZXJ2aWNlIFByb3ZpZGVyIGF1dGhvcml6ZXMgQ29tcGFueSB0byBjb2xsZWN0IGFuZCByZWNlaXZlIG1vbmllcyB0b3dhcmRzIHRoZSBhbW91bnRzIHBheWFibGUgYnkgdGhlIGN1c3RvbWVyIGZvciB0aGUgc2VydmljZXMgYXZhaWxlZCwgb24gYmVoYWxmIG9mIHRoZSBTZXJ2aWNlIFByb3ZpZGVyLiBGdXJ0aGVyLCBzZXR0bGVtZW50IG9mIG1vbmllcyB0byB0aGUgU2VydmljZSBQcm92aWRlciBzaGFsbCBiZSBpbiBhY2NvcmRhbmNlIHdpdGggdGhlIHRlcm1zIGFzIG11dHVhbGx5IGFncmVlZCBiZXR3ZWVuIHRoZSBwYXJ0aWVzLiBBbGwgc2V0dGxlbWVudHMgZm9yIHRoZSBwcmVjZWRpbmcgbW9udGggc2hhbGwgYmUgbWFkZSB3aXRoaW4gNjAoc2l4dHkpIGRheXMgZnJvbSB0aGUgc3VjY2VlZGluZyBtb250aCBkdXJpbmcgd2hpY2ggdGhlIGludm9pY2UgaXMgcmFpc2VkIGJ5IHRoZSBTZXJ2aWNlIFByb3ZpZGVyLiBJbiB0aGlzIHJlZ2FyZCwgdGhlIFNlcnZpY2UgUHJvdmlkZXIgc2hhbGwgcmFpc2UgdGhlIGludm9pY2Ugb24gb3IgYmVmb3JlIHRoZSA3dGggZGF5IG9mIHRoZSBzdWNjZXNzaXZlIG1vbnRoIGZvciB0aGUgc2V0dGxlbWVudCBvZiBwcmVjZWRpbmcgbW9udGguXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgSGVhbHRoIFNlcnZpY2UgUHJvdmlkZXIgc2hhbGwgYmUgc29sZWx5IHJlc3BvbnNpYmxlIGZvciBhbnkgbWlzY29uZHVjdCwgZGFtYWdlLCB3aWxsZnVsbCBjb21taXNzaW9uIG9yIG9taXNzaW9uIG9mIGFueSBzZXJ2aWNlcyB3aGljaCBhcmUgbm90IGxpc3RlZCB1bmRlciB0aGVzZSBUZXJtcyAmYW1wOyBDb25kaXRpb25zIG9yIGFueXRoaW5nIHdoaWNoIGdvZXMgYWdhaW5zdCB0aGUgc3Bpcml0IG9mIGZyZWUsIGZhaXIgYW5kIGV0aGljYWwgcHJhY3RpY2Ugb2YgcGF0aWVudCBjYXJlLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q29uZmlkZW50aWFsaXR5IDo8L3NwYW4+IFRoZSBIZWFsdGggU2VydmljZSBQcm92aWRlciB1bmRlcnRha2VzIHRvIG1haW50YWluIGluIGFic29sdXRlIGNvbmZpZGVuY2UgYW5kIG5vdCB0byByZXZlYWwgdG8gYW55IHBlcnNvbiBvciBib2R5LCBhbnkgaW5mb3JtYXRpb24gb3IgZGF0YSB3aGljaCBpdCByZWNlaXZlcyB0aHJvdWdoIGFuZCBzdWJzZXF1ZW50IGZvciBwcm92aWRpbmcgdGhlIFNlcnZpY2VzIHB1cnN1YW50IHRvIHRoaXMgYWdyZWVtZW50IGFuZCB3aGljaCBwZXJ0YWluczsgZGlyZWN0bHkgb3IgaW5kaXJlY3RseTsgdG8gdGhlIENvbXBhbnkgb3IgaXRzIGN1c3RvbWVycywgaW5jbHVkaW5nIHRoZSBhbmQgd2l0aG91dCBkZXJvZ2F0aW5nIGZyb20gdGhlIGdlbmVyYWxpdHkgb2YgdGhlIGFmb3Jlc2FpZCBuYW1lcywgYWRkcmVzc2VzLCBkZXRhaWxzIGFuZCBtZWRpY2FsIGJhY2tncm91bmQgb2YgdGhlIENvbXBhbnnigJlzIGN1c3RvbWVycywgaW5mb3JtYXRpb24gd2hpY2ggcGVydGFpbnMgdG8gdGhlIENvbXBhbnnigJlzIGJ1c2luZXNzICBvciBhbnkgb3RoZXIgZGF0YSB3aGljaCBpcyBwcm9wcmlldGFyeSB0byB0aGUgQ29tcGFueSBhbmQgaXRzIGN1c3RvbWVycy4gSXQgaXMgZnVydGhlciBhZ3JlZWQgdGhhdCB0aGUgY29udGVudHMgb2YgdGhpcyBzdWItc2VjdGlvbiBjYW5ub3QgZGVyb2dhdGUgZnJvbSB0aGUgZHV0eSBvZiB0aGUgSGVhbHRoIFNlcnZpY2UgUHJvdmlkZXIgaW4gcmVwb3J0aW5nIHRoZSBDb21wYW55IG9mIGFueSBkYXRhLCBpbmZvcm1hdGlvbiBvciBtZWRpY2FsIGJhY2tncm91bmQgd2hpY2ggbWF5IGJlIHJlbGV2YW50IHRvIHRoZSBDb21wYW55IGluIGRldGVybWluYXRpb24gb2YgaXRzIHNjb3BlIG9mIHdvcmsuICBUaGUgdHJhbnNmZXIgb2YgaW5mb3JtYXRpb24gc2hhbGwgYmUgaW4gYWNjb3JkYW5jZSB0byB0aGUgcHJvY2VkdXJlcyBlc3RhYmxpc2hlZCBieSB0aGUgQ29tcGFueS4gVGhlIEhlYWx0aCBTZXJ2aWNlIFByb3ZpZGVyIGFja25vd2xlZGdlcyB0aGF0IGl0cyB1bmRlcnRha2luZ3MgZ2l2ZW4gaW4gdGhpcyBBZ3JlZW1lbnQgd2l0aCByZWdhcmQgdG8gdGhlIGNvbmZpZGVudGlhbGl0eSBzaGFsbCBiZSB2YWxpZCB0aHJvdWdob3V0IHRoZSBUZXJtIG9mIHRoaXMgQWdyZWVtZW50IGFuZCBpdCBzaGFsbCBhYmlkZSBieSB0aGUgc2FtZSBldmVuIGFmdGVyIHRoZSBleHBpcnkgb2YgdGhpcyBBZ3JlZW1lbnQuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzYy1zdWJoZWFkaW5nXCI+My4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtSRVBSRVNFTlRBVElPTlMgQU5EIERFQ0xBUkFUSU9OUyBCWSBUSEUgU0VSVklDRSBQUk9WSURFUjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIEhlYWx0aCBTZXJ2aWNlIFByb3ZpZGVyIGRlY2xhcmVzIGFuZCB1bmRlcnRha2VzIHRoYXQgaXQgaGFzIGFsbCB0aGUgbmVjZXNzYXJ5IHJlZ2lzdHJhdGlvbnMvIGxpY2Vuc2VzLyBhcHByb3ZhbHMvIGF1dGhvcml6YXRpb25zIHJlcXVpcmVkIGJ5IHRoZSBsYXcgaW4gb3JkZXIgdG8gcHJvdmlkZSB0aGUgbWVkaWNhbCBzZXJ2aWNlcyBwdXJzdWFudCB0byB0aGlzIGFncmVlbWVudCBhbmQgdGhhdCBpdCBoYXMgYWRlcXVhdGUgYWJpbGl0eSwga25vd2xlZGdlLCBleHBlcmllbmNlIGFuZCBlcXVpcG1lbnTigJlzIHJlcXVpcmVkIGluIG9yZGVyIHRvIHByb3ZpZGUgdGhlIHNhaWQgc2VydmljZSBhcyByZXF1aXJlZCBpbiB0aGlzIGFncmVlbWVudC5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBIZWFsdGggU2VydmljZSBQcm92aWRlciB1bmRlcnRha2VzIHRvIHVwaG9sZCBhbGwgb2YgdGhlIHJlcXVpcmVtZW50cyBvZiB0aGUgbGF3IGFzIGFwcGxpY2FibGUgdG8gaXQgZnJvbSB0aW1lIHRvIHRpbWUgYW5kIHNoYWxsIGtlZXAgdXBkYXRlZCB0aGUgQ29tcGFueSwgaW4gY2FzZSBvZiBhbnkgc2lnbmlmaWNhbnQgY2hhbmdlIGluIHRoZSBwcmVzZW50IHN0YXR1cyBvZiB0aGUgUHJvdmlkZXIuIFRoZSBTZXJ2aWNlIFByb3ZpZGVyIGFsc28gdW5kZXJ0YWtlcyB0aGF0IGl0IHNoYWxsIHByb3ZpZGUgdGhlIHNhaWQgc2VydmljZXMgaW4gYWNjb3JkYW5jZSB3aXRoIHRoZSBwcm92aXNpb25zIG9mIHRoZSBsYXcgYW5kIHRoZSByZWd1bGF0aW9ucywgd2hpY2ggYXJlIGVuYWN0ZWQsIGZyb20gdGltZSB0byB0aW1lLCBieSB0aGUgY2VudHJhbCBvciB0aGUgc3RhdGUgZ292ZXJubWVudCBvciB0aGUgbG9jYWwgYWRtaW5pc3RyYXRpb24vIGJvZGllcy5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBIZWFsdGggU2VydmljZSBQcm92aWRlciBoYXMgYW5kIHdpbGwgY29udGludWUgdG8gaGF2ZSBpdHMgZmFjaWxpdGllcyBjb3ZlcmVkIGJ5IHByb3BlciBpbmRlbW5pdHkgcG9saWN5LCBpbmNsdWRpbmcgZXJyb3IsIG9taXNzaW9uIGFuZCBwcm9mZXNzaW9uYWwgaW5kZW1uaXR5IGFuZCBhZ3JlZXMgdG8ga2VlcCBzdWNoIHBvbGljaWVzIGluIGZvcmNlIGR1cmluZyB0aGUgY3VycmVuY3kgb2YgdGhpcyBBZ3JlZW1lbnQuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgSGVhbHRoIFNlcnZpY2UgUHJvdmlkZXIgZGVjbGFyZXMgdGhhdCBpdCBoYXMgbm90IGJlZW4gcHJldmVudGVkIGZyb20gcHJhY3RpY2luZyBtZWRpY2luZXMgYW5kIHRoYXQgbm8gY3JpbWluYWwgY2hhcmdlIG9mIGFueSBraW5kIGhhcyBldmVyIGJlZW4gZmlsZWQgYWdhaW5zdCBpdCBkdWUgdG8gbWVkaWNhbCBtYWxwcmFjdGljZSwgbWVkaWNhbCBuZWdsaWdlbmNlIGFuZC8gb3Igbm8gY2l2aWwgY2xhaW0gaGFzIGV2ZXIgYmVlbiBmaWxlZCBhZ2FpbnN0IGl0IGR1ZSB0byBkYW1hZ2UgaW5mbGljdGVkIGR1cmluZyBhIG1lZGljYWwgdHJlYXRtZW50LlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIEhlYWx0aCBTZXJ2aWNlIFByb3ZpZGVyIGFsc28gdW5kZXJ0YWtlcyB0byBpbmZvcm0gdGhlIENvbXBhbnkgaW4gdGhlIGV2ZW50IG9mIGFueSBjb21wbGFpbnQgb2YgbWVkaWNhbCBtYWxwcmFjdGljZSBpcyBmaWxlZCBhZ2FpbnN0IGl0IGR1cmluZyB0aGUgY3VycmVuY3kgb2YgdGhpcyBBZ3JlZW1lbnQuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdCBoYXMgYmVlbiBkdWx5IGNvbnN0aXR1dGVkIHVuZGVyIHRoZSBhcHBsaWNhYmxlIGxhd3MgYW5kIGhhcyBjb21wbGllZCB3aXRoIGFuZCBzaGFsbCBjb250aW51ZSB0byBjb21wbHkgd2l0aCB0aGUgYXBwbGljYWJsZSBsYXdzLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXQgaGFzIHRoZSByZXF1aXNpdGUgbGljZW5zZXMsIHBlcm1pc3Npb25zLCBhdXRob3JpemF0aW9ucywgY29uc2VudHMsIGFwcHJvdmFscyBhbmQgcmVnaXN0cmF0aW9ucyB1bmRlciB0aGUgYXBwbGljYWJsZSBsYXdzIGFuZCB0aGUgYXV0aG9yaXR5IHRvIGV4ZWN1dGUgdGhpcyBBZ3JlZW1lbnQgYXZhaWwgdGhlIHJlcXVpcmVkIFNlcnZpY2VzIGFuZCBwZXJmb3JtIGl0cyBvYmxpZ2F0aW9ucyBoZXJldW5kZXIuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZWl0aGVyIHRoZSBleGVjdXRpb24gYW5kIGRlbGl2ZXJ5IG9mIHRoaXMgQWdyZWVtZW50LCB0aGUgY29uc3VtbWF0aW9uIG9mIHRoZSB0cmFuc2FjdGlvbnMgY29udGVtcGxhdGVkIGhlcmVieSwgb3IgdGhlIGZ1bGZpbGxtZW50IG9mIG9yIGNvbXBsaWFuY2Ugd2l0aCB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YgdGhpcyBBZ3JlZW1lbnQsIGNvbmZsaWN0IHdpdGggb3IgcmVzdWx0IGluIGEgYnJlYWNoIG9mIG9yIGEgZGVmYXVsdCB1bmRlciBhbnkgb2YgdGhlIHRlcm1zLCBjb25kaXRpb25zIG9yIHByb3Zpc2lvbnMgb2YgYW55IGxlZ2FsIHJlc3RyaWN0aW9uIChpbmNsdWRpbmcsIHdpdGhvdXQgbGltaXRhdGlvbiwgYW55IGp1ZGdtZW50LCBvcmRlciwgaW5qdW5jdGlvbiwgZGVjcmVlIG9yIHJ1bGluZyBvZiBhbnkgY291cnQgb3IgZ292ZXJubWVudGFsIGF1dGhvcml0eSwgb3IgYW55IGNlbnRyYWwsIHN0YXRlLCBsb2NhbCBvciBvdGhlciBsYXcsIHN0YXR1dGUsIHJ1bGUgb3IgcmVndWxhdGlvbikgb3IgYW55IGNvdmVuYW50IG9yIGFncmVlbWVudCBvciBpbnN0cnVtZW50IHRvIHdoaWNoIGl0IGlzIGEgUGFydHksIG9yIGJ5IHdoaWNoIGl0IGlzIGJvdW5kLCBub3IgZG9lcyBzdWNoIGV4ZWN1dGlvbiwgZGVsaXZlcnksIGNvbnN1bW1hdGlvbiBvciBjb21wbGlhbmNlIHZpb2xhdGUgb3IgcmVzdWx0IGluIHRoZSB2aW9sYXRpb24gb2YgaXRzIGNvbnN0aXR1dGlvbmFsIGRvY3VtZW50cy5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpdmFjeS1kZXNjLXN1YmhlYWRpbmdcIj40LiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO0lOVEVMTEVDVFVBTCBQUk9QRVJUWSBSSUdIVFM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBQYXJ0aWVzIGhlcmVieSBhY2tub3dsZWRnZSB0aGF0IGVhY2ggUGFydHkgaXMgdGhlIGxlZ2FsIGFuZCBiZW5lZmljaWFsIG93bmVyIG9mIGFuZCBoYXMgZXhjbHVzaXZlIHJpZ2h0LCB0aXRsZSBhbmQgaW50ZXJlc3Qgb3ZlciBpdHMgb3duIEludGVsbGVjdHVhbCBQcm9wZXJ0eSBhbmQgYWxsIG90aGVyIHByb3ByaWV0YXJ5IGluZm9ybWF0aW9uIGluIHJlbGF0aW9uIHRvIGl0cyBidXNpbmVzcy4gTm90aGluZyBpbiB0aGlzIEFncmVlbWVudCBzaGFsbCBiZSBkZWVtZWQgaW4gYW55IHdheSB0byBjb25zdGl0dXRlIGEgdHJhbnNmZXIgb3IgYXNzaWdubWVudCBvZiBhbnkgSW50ZWxsZWN0dWFsIFByb3BlcnR5IGJ5IGVpdGhlciBQYXJ0eS4gSXQgaXMgZnVydGhlciBhZ3JlZWQgYW5kIHVuZGVyc3Rvb2QgYmV0d2VlbiB0aGUgUGFydGllcyB0aGF0IHRoZSBkYXRhIGFuZCBpbmZvcm1hdGlvbiBvZiB1c2Vycy9jdXN0b21lcnMgcHJvZHVjZWQgdGhyb3VnaCB0aGlzIGFncmVlbWVudCBzaGFsbCBqb2ludGx5IG93bmVkIGJ5IHRoZSBIZWFsdGggU2VydmljZSBQcm92aWRlciBhbmQgdGhlIENvbXBhbnkuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgSGVhbHRoIFNlcnZpY2UgUHJvdmlkZXIgaGVyZWJ5IGdyYW50cyB0byB0aGUgQ29tcGFueSBhIGxpbWl0ZWQsIG5vbi1leGNsdXNpdmUsIG5vbi10cmFuc2ZlcmFibGUgcmlnaHQsIG9ubHkgZm9yIHRoZSBUZXJtIG9mIHRoaXMgQWdyZWVtZW50LCB0byB1c2UgdGhlIFNlcnZpY2UgUHJvdmlkZXLigJlzIEludGVsbGVjdHVhbCBQcm9wZXJ0eSwgaW5jbHVkaW5nIGl0cyBtYXJrcywgbG9nb3MgYW5kIGJyYW5kL3RyYWRlIG5hbWVzLCBzb2xlbHkgZm9yIGluIHJlbGF0aW9uIHRvIHRoZSBTZXJ2aWNlcyB0byBiZSByZW5kZXJlZCBieSB0aGUgU2VydmljZSBQcm92aWRlciBpbiBhY2NvcmRhbmNlIHdpdGggdGhlIHRlcm1zIG9mIHRoaXMgQWdyZWVtZW50LiBTdWJqZWN0IHRvIHRoZSBjb25maWRlbnRpYWxpdHkgY2xhdXNlIGhlcmVpbiwgdGhlIENvbXBhbnkgbWF5IGRpc3BsYXkgb24gaXRzIHdlYiBwb3J0YWxzLCBhdCBhbGwgdGltZXMgZHVyaW5nIHRoZSBUZXJtIG9mIHRoaXMgQWdyZWVtZW50LCB0aGUgSGVhbHRoIFNlcnZpY2UgUHJvdmlkZXLigJlzIG1hcmtzLCBsb2dvIGFuZCBicmFuZC90cmFkZSBuYW1lcywgYXMgbXV0dWFsbHkgZGV0ZXJtaW5lZCBpbiB3cml0aW5nIGJ5IHRoZSBQYXJ0aWVzIHNvbGVseSBmb3IgcHVycG9zZXMgc3BlY2lmaWVkIGluIHRoaXMgQWdyZWVtZW50LlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpdmFjeS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mb3JtYXRpb24gYW5kIGRhdGEgb2YgdGhlIEhlYWx0aCBTZXJ2aWNlIFByb3ZpZGVyIHNoYWxsIGJlIHB1Ymxpc2hlZCBieSB0aGUgQ29tcGFueSBlaXRoZXIgYnkgcmVseWluZyBvbiB0aGUgaW5mb3JtYXRpb24gcHJvdmlkZWQgYnkgdGhlIFNlcnZpY2UgUHJvdmlkZXLigJlzIG9yIGlmIHRha2VuIGZyb20gSGVhbHRoIFNlcnZpY2UgUHJvdmlkZXLigJlzIHdlYnNpdGUgdGhlbiBieSBzZWVraW5nIHByaW9yIHdyaXR0ZW4gYXBwcm92YWwgZnJvbSB0aGUgSGVhbHRoIFNlcnZpY2UgUHJvdmlkZXIuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzYy1zdWJoZWFkaW5nXCI+NS4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtJTkRFTU5JVFk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj5UaGUgU2VydmljZSBQcm92aWRlciBoZXJlYnkgY292ZW5hbnRzIHRvIGluZGVtbmlmeSBhbmQgaG9sZCBoYXJtbGVzcyBDb21wYW55LCBpdHMgZW1wbG95ZWVzLCBzZXJ2YW50cyBhbmQgYWdlbnRzIGZyb20gYW5kIGFnYWluc3QgYWxsIGFjdGlvbnMsIGNsYWltcywgZGVtYW5kcywgbG9zc2VzLCBkYW1hZ2VzLCBjb3N0cyBhbmQgZXhwZW5zZXMgZm9yIHdoaWNoICBDb21wYW55IHNoYWxsIG9yIG1heSBiZSBvciBiZWNvbWUgbGlhYmxlIGluIHJlc3BlY3Qgb2YgYW5kIHRvIHRoZSBleHRlbnQgdGhhdCB0aGV5IGFyaXNlIGZyb206PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgSGVhbHRoIFNlcnZpY2UgUHJvdmlkZXIgY29tbWl0dGluZyBhbnkgYnJlYWNoIG9yIGNvbnRyYXZlbnRpb24gb2YgdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zIG9mIHRoaXMgQWdyZWVtZW50LCBpdHMgb2JsaWdhdGlvbnMgdW5kZXIgdGhpcyBBZ3JlZW1lbnQsIGFwcGxpY2FibGUgTGF3cywgYXBwbGljYWJsZSBwZXJtaXRzLCBjb2Rlcywgb3JkaW5hbmNlcyBvciByZWd1bGF0aW9ucywgYnllIGxhd3M7XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnkgYWN0IG9mIGNvbW1pc3Npb24gb3Igb21pc3Npb24sIG9yIGRlZmF1bHQgb24gdGhlIHBhcnQgb2YgdGhlIFNlcnZpY2UgUHJvdmlkZXIgYW5kL29yIGl0cyBwZXJzb25uZWwsIHJlcHJlc2VudGF0aXZlcywgb2ZmaWNlcnMsIGFnZW50cywgYWZmaWxpYXRlcztcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBuZWdsaWdlbnQgdXNlLCBtaXN1c2UsIGJ5IHRoZSBoZWFsdGggU2VydmljZSBQcm92aWRlciBvciBhbnkgb2YgaXRzIGVtcGxveWVlLCBzZXJ2YW50LCBhZ2VudCwgd2l0aCByZXNwZWN0IHRvIHRoZSBtZWRpY2FsIHNlcnZpY2VzIHByb3ZpZGVkIHRvIHRoZSBDdXN0b21lcihzKSBvZiB0aGUgQ29tcGFueTtcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBIZWFsdGggU2VydmljZSBQcm92aWRlciBhbHNvIGFncmVlcyB0byBpbmRlbW5pZnkgYW5kIGhvbGQgaGFybWxlc3MgQ29tcGFueSBmcm9tIHRpbWUgdG8gdGltZSBhbmQgYXQgYWxsIHRpbWVzIGhlcmVhZnRlciwgZnJvbSBhbmQgYWdhaW5zdCwgYWxsIG5vdGljZXMsIGNsYWltcywgZGVtYW5kcywgYWN0aW9uLCBzdWl0cyBvciBwcm9jZWVkaW5ncyBnaXZlbiwgbWFkZSBvciBpbml0aWF0ZWQgYWdhaW5zdCBDb21wYW55IG9uIGFjY291bnQgb2YgdGhlIFNlcnZpY2UgUHJvdmlkZXIsIGFzIGFsc28gYWdhaW5zdCBhbGwgY29zdHMsIGNoYXJnZXMgYW5kIGV4cGVuc2VzIHN1ZmZlcmVkIG9yIGluY3VycmVkIGJ5IENvbXBhbnkgYXMgYSByZXN1bHQgb2YgYW55IHByb2NlZWRpbmcgb3IgbGVnYWwgYWN0aW9uIGZpbGVkIGJ5IHRoZSBjdXN0b21lciBvciBhbnkgdGhpcmQgcGFydHkuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzYy1zdWJoZWFkaW5nXCI+Ni4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtHRU5FUkFMIFBST1ZJU0lPTlM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwicHJpdmFjeS1vcmRlci1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktb3JkZXItaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Hb3Zlcm5pbmcgTGF3OyBEaXNwdXRlIFJlc29sdXRpb246PC9zcGFuPiBUaGlzIEFncmVlbWVudCBzaGFsbCBiZSBnb3Zlcm5lZCBieSwgYW5kIGNvbnN0cnVlZCBpbiBhY2NvcmRhbmNlIHdpdGgsIHRoZSBsYXdzIG9mIEluZGlhLCB3aXRob3V0IHJlZ2FyZCB0byB0aGUgcHJpbmNpcGxlcyBvZiBjb25mbGljdCBvZiBsYXdzIG9mIGFueSBvdGhlciBqdXJpc2RpY3Rpb24uIFRoZSBjb3VydHMgb2YgR3VydWdyYW0sIEluZGlhIHdoaWNoIHNoYWxsIGhhdmUgZXhjbHVzaXZlIGp1cmlzZGljdGlvbiwgZm9yIHJlbWVkaWVzIGF2YWlsYWJsZSBhdCBsYXcgdG8gc3VjaCBQYXJ0eS5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktb3JkZXItaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5SZWxhdGlvbnNoaXAgb2YgUGFydGllczo8L3NwYW4+IFRoZSBQYXJ0aWVzIGFyZSBpbmRlcGVuZGVudCBjb250cmFjdGluZyBwYXJ0aWVzIGFuZCB3aWxsIGhhdmUgbm8gcG93ZXIgb3IgYXV0aG9yaXR5IHRvIGFzc3VtZSBvciBjcmVhdGUgYW55IG9ibGlnYXRpb24gb3IgcmVzcG9uc2liaWxpdHkgb24gYmVoYWxmIG9mIGVhY2ggb3RoZXIuIFRoaXMgQWdyZWVtZW50IHdpbGwgbm90IGJlIGNvbnN0cnVlZCB0byBjcmVhdGUgb3IgaW1wbHkgYW55IHBhcnRuZXJzaGlwLCBhZ2VuY3ksIG9yIGpvaW50IHZlbnR1cmUsIG9yIGVtcGxveWVyLWVtcGxveWVlIHJlbGF0aW9uc2hpcC5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaXZhY3ktb3JkZXItaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5CaW5kaW5nIEVmZmVjdDsgU2V2ZXJhYmlsaXR5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwic3ViLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbGwgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YgdGhpcyBBZ3JlZW1lbnQgc2hhbGwgYmUgYmluZGluZyB1cG9uLCBpbnVyZSB0byB0aGUgYmVuZWZpdCBvZiwgYW5kIGJlIGVuZm9yY2VhYmxlIGJ5IHRoZSBsZWdhbCByZXByZXNlbnRhdGl2ZXMsIHN1Y2Nlc3NvcnMgYW5kIGFzc2lnbnMgb2YgdGhlIFBhcnRpZXMuXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFueSB0ZXJtIG9yIHByb3Zpc2lvbiBvZiB0aGlzIEFncmVlbWVudCB0aGF0IGlzIGludmFsaWQgb3IgdW5lbmZvcmNlYWJsZSBpbiBhbnkganVyaXNkaWN0aW9uIHdpbGwsIGFzIHRvIHRoYXQganVyaXNkaWN0aW9uLCBiZSBpbmVmZmVjdGl2ZSB0byB0aGUgZXh0ZW50IG9mIHN1Y2ggaW52YWxpZGl0eSBvciB1bmVuZm9yY2VhYmlsaXR5IHdpdGhvdXQgcmVuZGVyaW5nIGludmFsaWQgb3IgdW5lbmZvcmNlYWJsZSB0aGUgcmVtYWluaW5nIHRlcm1zIGFuZCBwcm92aXNpb25zIG9mIHRoaXMgQWdyZWVtZW50IG9yIGFmZmVjdGluZyB0aGUgdmFsaWRpdHkgb3IgZW5mb3JjZWFiaWxpdHkgb2YgYW55IG9mIHRoZSB0ZXJtcyBvciBwcm92aXNpb25zIG9mIHRoaXMgQWdyZWVtZW50IGluIGFueSBvdGhlciBqdXJpc2RpY3Rpb24uICBJZiBhbnkgcHJvdmlzaW9uIG9mIHRoaXMgQWdyZWVtZW50IGlzIHNvIGJyb2FkIGFzIHRvIGJlIHVuZW5mb3JjZWFibGUsIHRoZSBwcm92aXNpb24gd2lsbCBiZSBpbnRlcnByZXRlZCB0byBiZSBvbmx5IHNvIGJyb2FkIGFzIGlzIGVuZm9yY2VhYmxlLlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcml2YWN5LW9yZGVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RW50aXJlIEFncmVlbWVudDo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiPlRoaXMgQWdyZWVtZW50IGNvbnN0aXR1dGVzIHRoZSBlbnRpcmUgYWdyZWVtZW50IGJldHdlZW4gdGhlIFBhcnRpZXMgcmVsYXRpbmcgdG8gdGhlIHN1YmplY3QgbWF0dGVyIG9mIHRoaXMgQWdyZWVtZW50IGFuZCBzdXBlcnNlZGVzIGFueSBwcmV2aW91cyB3cml0dGVuIG9yIG9yYWwgdW5kZXJzdGFuZGluZywgbmVnb3RpYXRpb25zLCBjb21tdW5pY2F0aW9ucyBhbmQgYWdyZWVtZW50IGJldHdlZW4gdGhlIFBhcnRpZXMgaW4gcmVsYXRpb24gdG8gdGhlIG1hdHRlcnMgZGVhbHQgd2l0aCBpbiB0aGlzIEFncmVlbWVudC48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2MtaGVhZGluZyBtcnQtMjBcIj5DT0RFIE9GIENPTkRVQ1Q8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2NcIj5IZWFsdGggU2VydmljZSBQcm92aWRlcjo8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwic3ViLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYWxsIGFiaWRlIGJ5IHRoZSBJbmRpYW4gTWVkaWNhbCBDb3VuY2lsIChQcm9mZXNzaW9uYWwgY29uZHVjdCwgRXRpcXVldHRlIGFuZCBFdGhpY3MpIFJlZ3VsYXRpb25zLCAyMDAyIGFuZCBvdGhlciBhcHBsaWNhYmxlIGxhd3MgdG8gbWVkaWNhbCBwcm9mZXNzaW9uIEkgSW5kaWFcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFsbCBlbnN1cmUgdGhhdCBpdCBoYXMgdGhlIHJlcXVpc2l0ZSDigItxdWFsaWZpY2F0aW9uIHJlY29nbml6ZWQgYnkgTWVkaWNhbCBDb3VuY2lsIG9mIEluZGlhIGFuZCByZWdpc3RlcmVkIHdpdGggTWVkaWNhbCBDb3VuY2lsIG9mIEluZGlhL1N0YXRlIE1lZGljYWwgQ291bmNpbCAocykgaXMgYWxsb3dlZCB0byBwcmFjdGljZSBhcyBwZXIgdGhlIGFwcGxpY2FibGUgbGF3cyBpbiBJbmRpYVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYWxsIGJlIGxpYWJsZSB0byBwcm90ZWN0IHBhdGllbnQvY3VzdG9tZXJzIHByaXZhY3kgYW5kIGNvbmZpZGVudGlhbGl0eSBpbmNsdWRpbmcgYW55IG1lZGljYWwgaW5mb3JtYXRpb24gb3IgZGF0YSBwcm92aWRlZCBieSB0aGUgQ29tcGFueeKAmXMgY3VzdG9tZXJzLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdobyBwYXJ0aWNpcGF0ZSBpbiB0ZWxlbWVkaWNpbmUvb25saW5lIGNvbnN1bHRhdGlvbiBzaGFsbCBlbnN1cmUgYW5kIG1haW50YWluIGFuIGV0aGljYWwgcmVzcG9uc2liaWxpdHkgdG8gdXBob2xkIGZ1bmRhbWVudGFsIGZpZHVjaWFyeSBvYmxpZ2F0aW9ucyBieSBkaXNjbG9zaW5nIGFueSBmaW5hbmNpYWwgb3Igb3RoZXIgaW50ZXJlc3RzIGl0IGhhcyBpbiB0aGUgdGVsZW1lZGljaW5lL29ubGluZSBjb25zdWx0YXRpb24gYXBwbGljYXRpb24gb3Igc2VydmljZSBhbmQgc2hhbGwgaW1tZWRpYXRlbHkgZGlzY2xvc2UgaXQgdG8gdGhlIENvbXBhbnkgc28gdGhhdCBDb21wYW55IGNhbiBhcHByb3ByaWF0ZSBzdGVwcyB0byBtYW5hZ2Ugb3IgZWxpbWluYXRlIGNvbmZsaWN0cyBvZiBpbnRlcmVzdHNcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aG8gcHJvdmlkZSBjbGluaWNhbCBzZXJ2aWNlcyBhbmQvb3IgdW5kZXJ3cml0aW5nIGRlY2lzaW9uIGZvciBoZWFsdGggYW5kIG90aGVyIGluc3VyYW5jZXMsIHRocm91Z2ggdGVsZW1lZGljaW5lIG11c3QgdXBob2xkIHRoZSBzdGFuZGFyZHMgb2YgcHJvZmVzc2lvbmFsaXNtIGFzIGFyZSBhcHBsaWNhYmxlIGluIGluLXBlcnNvbiBpbnRlcmFjdGlvbnMgYW5kIGZvbGxvdyBhcHByb3ByaWF0ZSBldGhpY2FsIGd1aWRlbGluZXMgYW5kIHByYWN0aWNlcyBhcyBwZXIgbWVkaWNhbCBsYXdzIGFwcGxpY2FibGUgaW4gSW5kaWFcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG91bGQgYmUgcmVzcG9uc2libGUgaW4gdW5kZXJzdGFuZGluZyB0aGUg4oCLY3VycmVudCBtZWRpY2FsIGNvbmRpdGlvbiwgdGhlIHBhc3QtaGlzdG9yeSwgdGhlIHNvY2lhbCBoaXN0b3J5LCBzZXZlcml0eSBvZiBleGlzdGluZyBkaXNlYXNlcywgY29tcGxpY2F0aW9ucyBhbmQgY3VycmVudCBtYW5hZ2VtZW50IGxpbmUgb2YgcHJvc3BlY3RpdmUgYW5kIGN1cnJlbnQgY3VzdG9tZXJzIGZvciBoZWFsdGggYW5kIG90aGVyIGluc3VyYW5jZXMuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhbGwgYmUgcHJ1ZGVudCBpbiBjYXJyeWluZyBvdXQgYSBkaWFnbm9zdGljIGV2YWx1YXRpb24gb3IgcHJlc2NyaWJpbmcgbWVkaWNhdGlvbiBieTpcbiAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFc3RhYmxpc2hpbmcgdGhlIHBhdGllbnTigJlzIGlkZW50aXR5XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpcm1pbmcgdGhhdCB0ZWxlbWVkaWNpbmUgc2VydmljZXMgYXJlIGFwcHJvcHJpYXRlIGZvciB0aGF0IHBhdGllbnTigJlzIGluZGl2aWR1YWwgc2l0dWF0aW9uIGFuZCBtZWRpY2FsIG5lZWRzXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV2YWx1YXRpbmcgdGhlIGluZGljYXRpb24sIGFwcHJvcHJpYXRlbmVzcyBhbmQgc2FmZXR5IG9mIGFueSBwcmVzY3JpcHRpb24gaW4ga2VlcGluZyB3aXRoIGJlc3RcbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJhY3RpY2UgZ3VpZGVsaW5lcyBhbmQgYW55IGZvcm11bGFyeSBsaW1pdGF0aW9ucyB0aGF0IGFwcGx5IHRvIHRoZSBlbGVjdHJvbmljIGludGVyYWN0aW9uXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvY3VtZW50aW5nIHRoZSBjbGluaWNhbCBldmFsdWF0aW9uIGFuZCBwcmVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYWxsIGF0dGVuZCBtYW5kYXRvcnkgaW4taG91c2UgdHJhaW5pbmcgcHJvZ3JhbXMgdGhhdCBtYXkgYmUgY29uZHVjdGVkIGJ5IHRoZSBDb21wYW55IGZyb20gdGltZSB0byB0aW1lLiBUaGlzIG1heSByZXF1aXJlIHRoZSBIZWFsdGggU2VydmljZSBQcm92aWRlciB0byB1bmRlcmdvIHdlYi1iYXNlZCBhbmQgb3RoZXIgdHJhaW5pbmcgcHJvZ3JhbXMuIENvbXBhbnkgc2hhbGwgaGF2ZSB0aGUgcmlnaHQgdG8gcmVndWxhcmx5IGFuZCBtb25pdG9yIGFuZCB0aGUgcXVhbGl0eSBvZiB3b3JrL3NlcnZpY2UgcGVyZm9ybWVkIGJ5IHRoZSBIZWFsdGggU2VydmljZSBQcm92aWRlLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYWxsIG1haW50YWluIGFsbCBwYXRpZW50IHJlbGF0ZWQgcmVjb3JkcyBpbiBhbiBlbGVjdHJvbmljIG1hbm5lciBpbiBhY2NvcmRhbmNlIHdpdGggcHJvdmlzaW9ucyBsYWlkIGRvd24gYnkgdGhlIE1lZGljYWwgQ291bmNpbCBvZiBJbmRpYSBhbmQgaW4gYWRkaXRpb24sIGluIHRoZSBmb3JtIGFuZCBtYW5uZXIgYXMgaW5zdHJ1Y3RlZCBieSB0aGUgQ29tcGFueS5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFsbCBrZWVwIGl0c2VsZiB1cCB0byBkYXRlIHdpdGggdGhlIGRldmVsb3BtZW50cyBpbiBtZWRpY2FsIHByb2Zlc3Npb24gYW5kIHN0dWRpZXMsbmV3IGRydWdzLCB0cmVhdG1lbnRzIGFuZCBtZWRpY2F0aW9ucywgaW5jbHVkaW5nIGNvbXBsZW1lbnRhcnkgbWVkaWNpbmUgZXRjLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYWxsIGF0IGFsbCB0aW1lcyBtYWludGFpbiBhIHByb2Zlc3Npb25hbCBhcHBlYXJhbmNlIGFuZCBhdHRpdHVkZSB3aGlsZSByZW5kZWluZyBtZWRpY2FsIGFuZCBoZWFsdGggY2FyZSBzZXJ2aWNlcy5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFsbCBlbnN1cmUgY2xlYXIgYW5kIHByb21wdCBjb21tdW5pY2F0aW9uIGluIGl0cyBkZWFsaW5nIHdpdGggQ29tcGFueeKAmXMgY3VzdG9tZXJzLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYWxsIGFjdCBpbiB1dG1vc3QgZ29vZCBmYWl0aCBhbmQgZXhlcmNpc2UgZHVlIGNhcmUsIGRpbGlnZW5jZSBhbmQgcGVyc29uYWwgYW5kIHByb2Zlc3Npb25hbCBpbnRlZ3JpdHkgaW4gdGhlIHBlcmZvcm1hbmNlIG9mIHRoZWlyIGR1dGllcyBhbmQgcmVzcG9uc2liaWxpdGllcyBhcyBtZWRpY2FsIHByYWN0aXRpb25lciBhbmQgc2hhbGwgaW4gbm8gZXZlbnQgY29tcHJvbWlzZSB3aXRoIHRoZWlyIGluZGVwZW5kZW5jZSBvZiBqdWRnbWVudFxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYWxsIG5vdCBleHBsb2l0IGZvciB0aGVpciBvd24gcGVyc29uYWwgZ2Fpbiwgb3Bwb3J0dW5pdGllcyB0aGF0IGFyZSBkaXNjb3ZlcmVkIHRocm91Z2ggdXNlIG9mIGNvcnBvcmF0ZSBwcm9wZXJ0eSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcml2YWN5LWRlc2Mtc3ViaGVhZGluZ1wiPkRlY2xhcmF0aW9uOjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaXZhY3ktZGVzY1wiPlRoaXMgaXMgdG8gY29uZmlybSB0aGF0IHdlIGhhdmUgdW5kZXJzdG9vZCB0aGUgY29udGVudHMgb2YgQ29tcGFueeKAmXMgQ29kZSBvZiBDb25kdWN0IGZvciBIZWFsdGggU2VydmljZSBQcm92aWRlciBhbmQgdGhlIHNhbWUgaGFzIGJlZW4gZXhwbGFpbmVkIGFuZCB1bmRlcnN0b29kIGJ5IHVzLiAgV2UgYWdyZWUgYW5kIHVuZGVydGFrZSB0aGF0IGluIHBlcmZvcm1hbmNlIG9mIG91ciBvYmxpZ2F0aW9ucyB1bmRlciB0aGlzIGFncmVlbWVudCB3aXRoICBDb21wYW55IHdlIHNoYWxsIGluY2x1ZGluZyBidXQgbm90IGxpbWl0ZWQgdG8gb3VyIG9mZmljZXJzLCBkaXJlY3RvcnMsIGVtcGxveWVlcywgYWdlbnRzLCBjb25zdWx0YW50cyBvciByZXByZXNlbnRhdGl2ZXMsIGV0Yy4sIHNoYWxsIGJlIHJlcXVpcmVkIHRvIGFkaGVyZSB0byB0aGUgcmVxdWlyZW1lbnRzIG9mIHRoaXMgYWNrbm93bGVkZ2VtZW50LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVGVybXNcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBzdWJtaXRDYXJlZXJQcm9maWxlLCBzdWJtaXRDb250YWN0TWVzc2FnZSwgc2lnbnVwRG9jdG9yLCBnZXRDaXRpZXMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuXG5pbXBvcnQgU3RhdGljUGFnZXNWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9zdGF0aWNQYWdlcydcblxuY2xhc3MgU3RhdGljUGFnZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJvdXRlcjogKCkgPT4gbnVsbFxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U3RhdGljUGFnZXNWaWV3IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG5cbiAgICBsZXQge1xuICAgICAgICBjaXRpZXNOYW1lLFxuICAgICAgICB1dG1fdGFnc1xuICAgIH0gPSBzdGF0ZS5VU0VSXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2l0aWVzTmFtZSxcbiAgICAgICAgdXRtX3RhZ3NcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHN1Ym1pdENhcmVlclByb2ZpbGU6IChwb3N0Q2FyZWVyRGF0YSwgY2IpID0+IGRpc3BhdGNoKHN1Ym1pdENhcmVlclByb2ZpbGUocG9zdENhcmVlckRhdGEsIGNiKSksXG4gICAgICAgIHN1Ym1pdENvbnRhY3RNZXNzYWdlOiAocG9zdENvbnRhY3REYXRhLCBjYikgPT4gZGlzcGF0Y2goc3VibWl0Q29udGFjdE1lc3NhZ2UocG9zdENvbnRhY3REYXRhLCBjYikpLFxuICAgICAgICBzaWdudXBEb2N0b3I6IChzaWdudXBEb2N0b3JEYXRhLCBjYikgPT4gZGlzcGF0Y2goc2lnbnVwRG9jdG9yKHNpZ251cERvY3RvckRhdGEsIGNiKSksXG4gICAgICAgIGdldENpdGllczogKGZpbHRlclRleHQpID0+IGRpc3BhdGNoKGdldENpdGllcyhmaWx0ZXJUZXh0KSlcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU3RhdGljUGFnZXMpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==