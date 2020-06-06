(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./dev/js/components/commons/Home/footer.js":
/*!**************************************************!*\
  !*** ./dev/js/components/commons/Home/footer.js ***!
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

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");

var _gtm = __webpack_require__(/*! ../../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _index = __webpack_require__(/*! ../../../actions/index.js */ "./dev/js/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
    _inherits(Footer, _React$Component);

    function Footer(props) {
        _classCallCheck(this, Footer);

        var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));

        _this.state = {
            hideSource: false,
            showFooterData: [],
            footerDataString: []
        };
        return _this;
    }

    _createClass(Footer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({ hideSource: true });
        }
    }, {
        key: 'navigateTo',
        value: function navigateTo(where) {
            this.props.clearOpdPage();
            this.props.history.push(where);
        }
    }, {
        key: 'toggleFooterData',
        value: function toggleFooterData(args) {
            if (typeof args == 'number') {
                var data = [].concat(_toConsumableArray(this.state.showFooterData));
                if (data && data.length && data.includes(args)) {
                    data = data.filter(function (x) {
                        return x != args ? true : false;
                    });
                    this.setState({
                        showFooterData: data
                    });
                } else {
                    data.push(args);
                    this.setState({
                        showFooterData: data
                    });
                }
            } else if (typeof args == 'string') {
                var _data = [].concat(_toConsumableArray(this.state.footerDataString));
                if (_data && _data.length && _data.includes(args)) {
                    _data = _data.filter(function (x) {
                        return x != args ? true : false;
                    });
                    this.setState({
                        footerDataString: _data
                    });
                } else {
                    _data.push(args);
                    this.setState({
                        footerDataString: _data
                    });
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var menu = [];
            if (this.props.footerData && this.props.footerData.menu && this.props.footerData.menu.length) {
                menu = this.props.footerData.menu;
            }

            return _react2.default.createElement(
                'footer',
                { className: '' + (this.props.testsListPage ? 'profile-footer stick-btm-footer' : 'profile-footer fxd-ftr-btm-pdng') },
                menu.length > 0 ? _react2.default.createElement(
                    'div',
                    { className: 'container-fluid footer-2' },
                    _react2.default.createElement(
                        'div',
                        { className: 'container' },
                        menu.map(function (f, i) {
                            return _react2.default.createElement(
                                'div',
                                { className: 'footer-doctor-listing', key: i },
                                _react2.default.createElement(
                                    'h2',
                                    null,
                                    f.sub_heading
                                ),
                                _react2.default.createElement(
                                    'ul',
                                    null,
                                    f.url_list.map(function (u, j) {
                                        return _react2.default.createElement(
                                            'li',
                                            { key: j },
                                            _react2.default.createElement(
                                                'a',
                                                { href: "/" + u.url, onClick: function onClick(e) {
                                                        e.preventDefault();
                                                        _this2.navigateTo('/' + u.url);
                                                    } },
                                                u.title
                                            )
                                        );
                                    })
                                )
                            );
                        })
                    )
                ) : '',
                this.props.specialityFooterData && this.props.specialityFooterData.length ? _react2.default.createElement(
                    'div',
                    { className: 'container-fluid mrt-10' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row justify-content-center' },
                        this.props.specialityFooterData.map(function (footerData, i) {
                            return _react2.default.createElement(
                                'div',
                                { className: 'col-12 col-md-2', style: { marginBottom: 15, paddingTop: 10 }, key: "div" + i },
                                _react2.default.createElement(
                                    'h3',
                                    { className: 'speciality-footer-head d-block d-md-none', onClick: function onClick() {
                                            return _this2.toggleFooterData(i);
                                        } },
                                    footerData.title
                                ),
                                _react2.default.createElement(
                                    'ul',
                                    { className: _this2.state.showFooterData.length && _this2.state.showFooterData.includes(i) ? 'speciality-footer-list d-block d-md-none' : 'speciality-footer-list d-none d-md-none' },
                                    footerData.urls.map(function (url, j) {
                                        return _react2.default.createElement(
                                            'li',
                                            { key: "li" + j },
                                            _react2.default.createElement(
                                                'a',
                                                { href: '/' + url.url, onClick: function onClick(e) {
                                                        e.preventDefault();
                                                        _this2.navigateTo('/' + url.url);
                                                    } },
                                                url.title
                                            )
                                        );
                                    })
                                ),
                                _react2.default.createElement(
                                    'h3',
                                    { className: 'speciality-footer-head d-none d-md-block', style: { cursor: 'auto' } },
                                    footerData.title
                                ),
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'speciality-footer-list d-none d-md-block' },
                                    footerData.urls.map(function (url, j) {
                                        return _react2.default.createElement(
                                            'li',
                                            { key: "li" + j },
                                            _react2.default.createElement(
                                                'a',
                                                { href: '/' + url.url, onClick: function onClick(e) {
                                                        e.preventDefault();
                                                        _this2.navigateTo('/' + url.url);
                                                    } },
                                                url.title
                                            )
                                        );
                                    })
                                ),
                                _react2.default.createElement('img', { className: 'footer-dropdown d-md-none', style: _this2.state.showFooterData.length && _this2.state.showFooterData.includes(i) ? { transform: 'rotate(180deg)' } : {}, src: "/assets" + '/img/customer-icons/dropdown-arrow.svg' })
                            );
                        })
                    )
                ) : '',
                _react2.default.createElement(
                    'section',
                    { className: '' + (this.props.testsListPage ? 'container-fluid mrt-0' : 'container-fluid mrt-10') },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12 col-md-2 d-none d-md-block', key: 'ftr-dsktp-div-1' },
                            _react2.default.createElement(
                                'div',
                                { className: 'footer-links' },
                                _react2.default.createElement(
                                    'a',
                                    { href: 'javascript:;' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'logo-img-div' },
                                        _react2.default.createElement('img', { src: "/assets" + "/img/logo-sm.png", className: 'footer-logo-icon' })
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'social-icons-row mrt-20' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'social-icon' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'https://www.youtube.com/channel/UCL_6Tstix2ACaBk0jwf_1ug', target: '_blank' },
                                            _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/youtube.svg", alt: 'docprime YouTube' })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'social-icon' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'https://www.instagram.com/docprimeIndia/', target: '_blank' },
                                            _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/instagram.svg", alt: 'docprime Instagram' })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'social-icon' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'https://www.facebook.com/DocPrimeIndia', target: '_blank' },
                                            _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/facebook.svg", alt: 'docprime Facebook' })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'social-icon' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'https://twitter.com/DocPrimeindia', target: '_blank' },
                                            _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/twitter.svg", alt: 'docprime Twitter' })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'social-icon' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'https://www.linkedin.com/company/docprime/', target: '_blank' },
                                            _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/linkedin.svg", alt: 'docprime Linkedin' })
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-2 col-12 brdr-top-col', key: 'ftr-dsktp-div-2' },
                            _react2.default.createElement(
                                'div',
                                { className: 'footer-links brdr-btm-footer' },
                                _react2.default.createElement(
                                    'h3',
                                    { className: 'd-block d-md-none', style: { cursor: 'pointer' }, onClick: function onClick() {
                                            return _this2.toggleFooterData('docprime');
                                        } },
                                    'Docprime'
                                ),
                                _react2.default.createElement(
                                    'ul',
                                    { className: this.state.footerDataString.length && this.state.footerDataString.includes('docprime') ? 'd-block d-md-none' : 'd-none d-md-none' },
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/about', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo("/about");
                                                } },
                                            'About Us'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/careers', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo("/careers");
                                                } },
                                            'Careers'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/privacy', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo("/privacy");
                                                } },
                                            'Privacy Policy'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/terms', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo("/terms");
                                                } },
                                            'Terms & Conditions'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/disclaimer', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo("/disclaimer");
                                                } },
                                            'Disclaimer'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/contact', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo("/contact");
                                                } },
                                            'Contact Us'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'h3',
                                    { className: 'd-none d-md-block' },
                                    'Docprime'
                                ),
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'd-none d-md-block' },
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/about', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo("/about");
                                                } },
                                            'About Us'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/careers', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo("/careers");
                                                } },
                                            'Careers'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/privacy', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo("/privacy");
                                                } },
                                            'Privacy Policy'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/terms', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo("/terms");
                                                } },
                                            'Terms & Conditions'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/disclaimer', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo("/disclaimer");
                                                } },
                                            'Disclaimer'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/contact', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo("/contact");
                                                } },
                                            'Contact Us'
                                        )
                                    )
                                ),
                                _react2.default.createElement('img', { className: 'footer-dropdown-2 d-md-none', style: this.state.footerDataString.length && this.state.footerDataString.includes('docprime') ? { transform: 'rotate(180deg)' } : {}, src: "/assets" + '/img/customer-icons/dropdown-arrow.svg', onClick: function onClick() {
                                        return _this2.toggleFooterData('docprime');
                                    } })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-2 col-12', key: 'ftr-dsktp-div-3' },
                            _react2.default.createElement(
                                'div',
                                { className: 'footer-links brdr-btm-footer' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'brdr-btm-footer ftr-list-btn-mrgn' },
                                    _react2.default.createElement(
                                        'h3',
                                        { className: 'd-block d-md-none', style: { cursor: 'pointer', position: 'relative' }, onClick: function onClick() {
                                                return _this2.toggleFooterData('patients');
                                            } },
                                        'For Patients',
                                        _react2.default.createElement('img', { className: 'footer-dropdown-2 d-md-none', style: this.state.footerDataString.length && this.state.footerDataString.includes('patients') ? { transform: 'rotate(180deg)' } : {}, src: "/assets" + '/img/customer-icons/dropdown-arrow.svg' })
                                    ),
                                    _react2.default.createElement(
                                        'ul',
                                        { className: this.state.hideSource && this.state.footerDataString.length && this.state.footerDataString.includes('patients') ? 'd-block d-md-none' : 'd-none d-md-none' },
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: '/search?from=footer', onClick: function onClick(e) {
                                                        e.preventDefault();
                                                        _this2.navigateTo("/search?from=footer");
                                                    } },
                                                'Book Doctor Appointment'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: '/search?from=footer', onClick: function onClick(e) {
                                                        e.preventDefault();
                                                        _this2.navigateTo("/search?from=footer");
                                                    } },
                                                'Book a Medical Test'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: '/online-consultation', onClick: function onClick(e) {
                                                        e.preventDefault();
                                                        _this2.navigateTo("/online-consultation");
                                                    } },
                                                'Consult a Doctor'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: '/referral', onClick: function onClick(e) {
                                                        e.preventDefault();
                                                        _this2.navigateTo("/referral");
                                                    } },
                                                'Refer & Earn'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'h3',
                                        { className: 'd-none d-md-block' },
                                        'For Patients'
                                    ),
                                    _react2.default.createElement(
                                        'ul',
                                        { className: 'd-none d-md-block' },
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: '/search?from=footer', onClick: function onClick(e) {
                                                        e.preventDefault();
                                                        _this2.navigateTo("/search?from=footer");
                                                    } },
                                                'Book Doctor Appointment'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: '/search?from=footer', onClick: function onClick(e) {
                                                        e.preventDefault();
                                                        _this2.navigateTo("/search?from=footer");
                                                    } },
                                                'Book a Medical Test'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: '/online-consultation', onClick: function onClick(e) {
                                                        e.preventDefault();
                                                        _this2.navigateTo("/online-consultation");
                                                    } },
                                                'Consult a Doctor'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: '/referral', onClick: function onClick(e) {
                                                        e.preventDefault();
                                                        _this2.navigateTo("/referral");
                                                    } },
                                                'Refer & Earn'
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'h3',
                                    { className: 'foot-sub-listing d-block d-md-none', style: { cursor: 'pointer', position: 'relative' }, onClick: function onClick() {
                                            return _this2.toggleFooterData('doctors');
                                        } },
                                    'For Doctors',
                                    _react2.default.createElement('img', { className: 'footer-dropdown-2 d-md-none', style: this.state.footerDataString.length && this.state.footerDataString.includes('doctors') ? { transform: 'rotate(180deg)' } : {}, src: "/assets" + '/img/customer-icons/dropdown-arrow.svg' })
                                ),
                                _react2.default.createElement(
                                    'ul',
                                    { className: this.state.footerDataString.length && this.state.footerDataString.includes('doctors') ? 'd-block d-md-none' : 'd-none d-md-none' },
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/doctorsignup', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo("/doctorsignup");

                                                    var data = {
                                                        'Category': 'ConsumerApp', 'Action': 'addYourClinicClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'add-your-clinic-click'
                                                    };
                                                    _gtm2.default.sendEvent({ data: data });
                                                } },
                                            'Add Your Clinic'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/doctorsignup', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo("/doctorsignup");

                                                    var data = {
                                                        'Category': 'ConsumerApp', 'Action': 'addYourLabClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'add-your-lab-click'
                                                    };
                                                    _gtm2.default.sendEvent({ data: data });
                                                } },
                                            'Add Your Lab'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/doctorsignup', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo("/doctorsignup");

                                                    var data = {
                                                        'Category': 'ConsumerApp', 'Action': 'doctorSignUp', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-sign-up'
                                                    };
                                                    _gtm2.default.sendEvent({ data: data });
                                                } },
                                            'Doctor Sign Up'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'h3',
                                    { className: 'foot-sub-listing d-none d-md-block' },
                                    'For Doctors'
                                ),
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'd-none d-md-block' },
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/doctorsignup', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo("/doctorsignup");

                                                    var data = {
                                                        'Category': 'ConsumerApp', 'Action': 'addYourClinicClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'add-your-clinic-click'
                                                    };
                                                    _gtm2.default.sendEvent({ data: data });
                                                } },
                                            'Add Your Clinic'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/doctorsignup', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo("/doctorsignup");

                                                    var data = {
                                                        'Category': 'ConsumerApp', 'Action': 'addYourLabClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'add-your-lab-click'
                                                    };
                                                    _gtm2.default.sendEvent({ data: data });
                                                } },
                                            'Add Your Lab'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/doctorsignup', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo("/doctorsignup");

                                                    var data = {
                                                        'Category': 'ConsumerApp', 'Action': 'doctorSignUp', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-sign-up'
                                                    };
                                                    _gtm2.default.sendEvent({ data: data });
                                                } },
                                            'Doctor Sign Up'
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-2 col-12', key: 'ftr-dsktp-div-4' },
                            _react2.default.createElement(
                                'div',
                                { className: 'footer-links brdr-btm-footer' },
                                _react2.default.createElement(
                                    'h3',
                                    { className: 'd-block d-md-none', style: { cursor: 'pointer' }, onClick: function onClick() {
                                            return _this2.toggleFooterData('labsCities');
                                        } },
                                    'Labs in Top Cities'
                                ),
                                _react2.default.createElement(
                                    'ul',
                                    { className: this.state.footerDataString.length && this.state.footerDataString.includes('labsCities') ? 'd-block d-md-none' : 'd-none d-md-none' },
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/labs-in-delhi-lbcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/labs-in-delhi-lbcit');
                                                } },
                                            'Labs in Delhi'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/labs-in-gurgaon-lbcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/labs-in-gurgaon-lbcit');
                                                } },
                                            'Labs in Gurgaon'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/labs-in-bangalore-lbcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/labs-in-bangalore-lbcit');
                                                } },
                                            'Labs in Bangalore'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/labs-in-noida-lbcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/labs-in-noida-lbcit');
                                                } },
                                            'Labs in Noida'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/labs-in-mumbai-lbcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/labs-in-mumbai-lbcit');
                                                } },
                                            'Labs in Mumbai'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/labs-in-kolkata-lbcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/labs-in-kolkata-lbcit');
                                                } },
                                            'Labs in Kolkata'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/labs-in-hyderabad-lbcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/labs-in-hyderabad-lbcit');
                                                } },
                                            'Labs in Hyderabad'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/labs-in-chennai-lbcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/labs-in-chennai-lbcit');
                                                } },
                                            'Labs in Chennai'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/labs-in-pune-lbcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/labs-in-pune-lbcit');
                                                } },
                                            'Labs in Pune'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/labs-in-ghaziabad-lbcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/labs-in-ghaziabad-lbcit');
                                                } },
                                            'Labs in Ghaziabad'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'h3',
                                    { className: 'd-none d-md-block' },
                                    'Labs in Top Cities'
                                ),
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'd-none d-md-block' },
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/labs-in-delhi-lbcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/labs-in-delhi-lbcit');
                                                } },
                                            'Labs in Delhi'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/labs-in-gurgaon-lbcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/labs-in-gurgaon-lbcit');
                                                } },
                                            'Labs in Gurgaon'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/labs-in-bangalore-lbcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/labs-in-bangalore-lbcit');
                                                } },
                                            'Labs in Bangalore'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/labs-in-noida-lbcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/labs-in-noida-lbcit');
                                                } },
                                            'Labs in Noida'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/labs-in-mumbai-lbcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/labs-in-mumbai-lbcit');
                                                } },
                                            'Labs in Mumbai'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/labs-in-kolkata-lbcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/labs-in-kolkata-lbcit');
                                                } },
                                            'Labs in Kolkata'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/labs-in-hyderabad-lbcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/labs-in-hyderabad-lbcit');
                                                } },
                                            'Labs in Hyderabad'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/labs-in-chennai-lbcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/labs-in-chennai-lbcit');
                                                } },
                                            'Labs in Chennai'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/labs-in-pune-lbcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/labs-in-pune-lbcit');
                                                } },
                                            'Labs in Pune'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/labs-in-ghaziabad-lbcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/labs-in-ghaziabad-lbcit');
                                                } },
                                            'Labs in Ghaziabad'
                                        )
                                    )
                                ),
                                _react2.default.createElement('img', { className: 'footer-dropdown-2 d-md-none', style: this.state.footerDataString.length && this.state.footerDataString.includes('labsCities') ? { transform: 'rotate(180deg)' } : {}, src: "/assets" + '/img/customer-icons/dropdown-arrow.svg' })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-2 col-12', key: 'ftr-dsktp-div-5' },
                            _react2.default.createElement(
                                'div',
                                { className: 'footer-links brdr-btm-footer' },
                                _react2.default.createElement(
                                    'h3',
                                    { className: 'd-block d-md-none', style: { cursor: 'pointer' }, onClick: function onClick() {
                                            return _this2.toggleFooterData('doctorsCities');
                                        } },
                                    'Doctors in Top Cities'
                                ),
                                _react2.default.createElement(
                                    'ul',
                                    { className: this.state.footerDataString.length && this.state.footerDataString.includes('doctorsCities') ? 'd-block d-md-none' : 'd-none d-md-none' },
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/doctors-in-delhi-sptcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/doctors-in-delhi-sptcit');
                                                } },
                                            'Doctors in Delhi'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/doctors-in-gurgaon-sptcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/doctors-in-gurgaon-sptcit');
                                                } },
                                            'Doctors in Gurgaon'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/doctors-in-bangalore-sptcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/doctors-in-bangalore-sptcit');
                                                } },
                                            'Doctors in Bangalore'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/doctors-in-noida-sptcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/doctors-in-noida-sptcit');
                                                } },
                                            'Doctors in Noida'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/doctors-in-mumbai-sptcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/doctors-in-mumbai-sptcit');
                                                } },
                                            'Doctors in Mumbai'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/doctors-in-kolkata-sptcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/doctors-in-kolkata-sptcit');
                                                } },
                                            'Doctors in Kolkata'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/doctors-in-hyderabad-sptcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/doctors-in-hyderabad-sptcit');
                                                } },
                                            'Doctors in Hyderabad'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/doctors-in-chennai-sptcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/doctors-in-chennai-sptcit');
                                                } },
                                            'Doctors in Chennai'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/doctors-in-pune-sptcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/doctors-in-pune-sptcit');
                                                } },
                                            'Doctors in Pune'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/doctors-in-ghaziabad-sptcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/doctors-in-ghaziabad-sptcit');
                                                } },
                                            'Doctors in Ghaziabad'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'h3',
                                    { className: 'd-none d-md-block' },
                                    'Doctors in Top Cities'
                                ),
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'd-none d-md-block' },
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/doctors-in-delhi-sptcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/doctors-in-delhi-sptcit');
                                                } },
                                            'Doctors in Delhi'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/doctors-in-gurgaon-sptcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/doctors-in-gurgaon-sptcit');
                                                } },
                                            'Doctors in Gurgaon'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/doctors-in-bangalore-sptcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/doctors-in-bangalore-sptcit');
                                                } },
                                            'Doctors in Bangalore'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/doctors-in-noida-sptcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/doctors-in-noida-sptcit');
                                                } },
                                            'Doctors in Noida'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/doctors-in-mumbai-sptcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/doctors-in-mumbai-sptcit');
                                                } },
                                            'Doctors in Mumbai'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/doctors-in-kolkata-sptcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/doctors-in-kolkata-sptcit');
                                                } },
                                            'Doctors in Kolkata'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/doctors-in-hyderabad-sptcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/doctors-in-hyderabad-sptcit');
                                                } },
                                            'Doctors in Hyderabad'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/doctors-in-chennai-sptcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/doctors-in-chennai-sptcit');
                                                } },
                                            'Doctors in Chennai'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/doctors-in-pune-sptcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/doctors-in-pune-sptcit');
                                                } },
                                            'Doctors in Pune'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/doctors-in-ghaziabad-sptcit', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo('/doctors-in-ghaziabad-sptcit');
                                                } },
                                            'Doctors in Ghaziabad'
                                        )
                                    )
                                ),
                                _react2.default.createElement('img', { className: 'footer-dropdown-2 d-md-none', style: this.state.footerDataString.length && this.state.footerDataString.includes('doctorsCities') ? { transform: 'rotate(180deg)' } : {}, src: "/assets" + '/img/customer-icons/dropdown-arrow.svg' })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-2 col-12', key: 'ftr-dsktp-div-6' },
                            _react2.default.createElement(
                                'div',
                                { className: 'footer-links brdr-btm-footer' },
                                _react2.default.createElement(
                                    'h3',
                                    { className: 'd-block d-md-none', style: { cursor: 'pointer' }, onClick: function onClick() {
                                            return _this2.toggleFooterData('resources');
                                        } },
                                    'Useful Resources'
                                ),
                                _react2.default.createElement(
                                    'ul',
                                    { className: this.state.footerDataString.length && this.state.footerDataString.includes('resources') ? 'd-block d-md-none' : 'd-none d-md-none' },
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/all-articles', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo("/all-articles");
                                                } },
                                            'All Articles'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/all-diseases', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo("/all-diseases");
                                                } },
                                            'All Diseases'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/all-medicines', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo("/all-medicines");
                                                } },
                                            'All Medicines'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/city-inventory', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo("/city-inventory");
                                                } },
                                            'All Cities '
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/speciality-inventory', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo("/speciality-inventory");
                                                } },
                                            'All Specialities'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/hospitals', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo("/hospitals");
                                                } },
                                            'All Hospitals'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/doctors-near-me', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo("/doctors-near-me");
                                                } },
                                            'Find a Doctor Near You'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'h3',
                                    { className: 'd-none d-md-block' },
                                    'Useful Resources'
                                ),
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'd-none d-md-block' },
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/all-articles', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo("/all-articles");
                                                } },
                                            'All Articles'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/all-diseases', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo("/all-diseases");
                                                } },
                                            'All Diseases'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/all-medicines', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo("/all-medicines");
                                                } },
                                            'All Medicines'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/city-inventory', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo("/city-inventory");
                                                } },
                                            'All Cities '
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/speciality-inventory', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo("/speciality-inventory");
                                                } },
                                            'All Specialities'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/hospitals', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo("/hospitals");
                                                } },
                                            'All Hospitals'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/doctors-near-me', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.navigateTo("/doctors-near-me");
                                                } },
                                            'Find a Doctor Near You'
                                        )
                                    )
                                ),
                                _react2.default.createElement('img', { className: 'footer-dropdown-2 d-md-none', style: this.state.footerDataString.length && this.state.footerDataString.includes('resources') ? { transform: 'rotate(180deg)' } : {}, src: "/assets" + '/img/customer-icons/dropdown-arrow.svg' })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12 col-md-2 d-block d-md-none' },
                            _react2.default.createElement(
                                'div',
                                { className: 'footer-links' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'social-icons-row mrt-20' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'social-icon' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'https://www.youtube.com/channel/UCL_6Tstix2ACaBk0jwf_1ug', target: '_blank' },
                                            _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/youtube.svg", alt: 'docprime YouTube' })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'social-icon' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'https://www.instagram.com/docprimeIndia/', target: '_blank' },
                                            _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/instagram.svg", alt: 'docprime Instagram' })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'social-icon' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'https://www.facebook.com/DocPrimeIndia', target: '_blank' },
                                            _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/facebook.svg", alt: 'docprime Facebook' })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'social-icon' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'https://twitter.com/DocPrimeindia', target: '_blank' },
                                            _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/twitter.svg", alt: 'docprime Twitter' })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'social-icon' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'https://www.linkedin.com/company/docprime/', target: '_blank' },
                                            _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/linkedin.svg", alt: 'docprime Linkedin' })
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12 text-center' },
                            _react2.default.createElement(
                                'p',
                                { className: 'fw-500 mrt-20', style: { color: '#8a8a8a', fontSize: 12 } },
                                'The Website is not intended to be used in case of a medical emergency and/ or critical care and the user should directly contact his/ her medical service provider for Physical Examination. Docprime is solely a technology partner.'
                            )
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
                    )
                )
            );
        }
    }]);

    return Footer;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, passedProps) {
    /**
     * initialServerData is server rendered async data required build html on server. 
     */
    return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        clearOpdPage: function clearOpdPage() {
            return dispatch((0, _index.clearOpdPage)());
        }
    };
};

// export default withRouter(Footer)
exports.default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Footer));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvZm9vdGVyLmpzIl0sIm5hbWVzIjpbIkZvb3RlciIsInByb3BzIiwic3RhdGUiLCJoaWRlU291cmNlIiwic2hvd0Zvb3RlckRhdGEiLCJmb290ZXJEYXRhU3RyaW5nIiwic2V0U3RhdGUiLCJ3aGVyZSIsImNsZWFyT3BkUGFnZSIsImhpc3RvcnkiLCJwdXNoIiwiYXJncyIsImRhdGEiLCJsZW5ndGgiLCJpbmNsdWRlcyIsImZpbHRlciIsIngiLCJtZW51IiwiZm9vdGVyRGF0YSIsInRlc3RzTGlzdFBhZ2UiLCJtYXAiLCJmIiwiaSIsInN1Yl9oZWFkaW5nIiwidXJsX2xpc3QiLCJ1IiwiaiIsInVybCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5hdmlnYXRlVG8iLCJ0aXRsZSIsInNwZWNpYWxpdHlGb290ZXJEYXRhIiwibWFyZ2luQm90dG9tIiwicGFkZGluZ1RvcCIsInRvZ2dsZUZvb3RlckRhdGEiLCJ1cmxzIiwiY3Vyc29yIiwidHJhbnNmb3JtIiwiQVNTRVRTX0JBU0VfVVJMIiwicG9zaXRpb24iLCJHVE0iLCJnZXRVc2VySWQiLCJzZW5kRXZlbnQiLCJjb2xvciIsImZvbnRTaXplIiwicGFkZGluZ0JvdHRvbSIsIlJlYWN0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwicGFzc2VkUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7SUFFTUEsTTs7O0FBQ0Ysb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsd0JBQVksS0FESDtBQUVUQyw0QkFBZ0IsRUFGUDtBQUdUQyw4QkFBa0I7QUFIVCxTQUFiO0FBRmU7QUFPbEI7Ozs7NENBRW1C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SjtBQXRFSixhQURKO0FBcWtCSDs7OztFQTVuQmdCQyxnQkFBTUMsUzs7QUErbkIzQixJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUMvQyxLQUFELEVBQVFnRCxXQUFSLEVBQXdCO0FBQzVDOzs7QUFHQSxXQUFPLEVBQVA7QUFHSCxDQVBEOztBQVNBLElBQU1DLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBYztBQUNyQyxXQUFPO0FBQ0g1QyxzQkFBYTtBQUFBLG1CQUFLNEMsU0FBUywwQkFBVCxDQUFMO0FBQUE7QUFEVixLQUFQO0FBR0gsQ0FKRDs7QUFNQTtrQkFDZSw2QkFBVyx5QkFBUUgsZUFBUixFQUF5QkUsa0JBQXpCLEVBQTZDbkQsTUFBN0MsQ0FBWCxDIiwiZmlsZSI6IjQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGNsZWFyT3BkUGFnZSB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5cbmNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBoaWRlU291cmNlOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dGb290ZXJEYXRhOiBbXSxcbiAgICAgICAgICAgIGZvb3RlckRhdGFTdHJpbmc6IFtdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhpZGVTb3VyY2U6IHRydWUgfSlcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvKHdoZXJlKSB7XG4gICAgICAgIHRoaXMucHJvcHMuY2xlYXJPcGRQYWdlKClcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2god2hlcmUpXG4gICAgfVxuXG4gICAgdG9nZ2xlRm9vdGVyRGF0YShhcmdzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgKGFyZ3MpID09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IFsuLi50aGlzLnN0YXRlLnNob3dGb290ZXJEYXRhXVxuICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGggJiYgZGF0YS5pbmNsdWRlcyhhcmdzKSkge1xuICAgICAgICAgICAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcih4ID0+IHggIT0gYXJncyA/IHRydWUgOiBmYWxzZSlcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0Zvb3RlckRhdGE6IGRhdGFcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2goYXJncylcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0Zvb3RlckRhdGE6IGRhdGFcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiAoYXJncykgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gWy4uLnRoaXMuc3RhdGUuZm9vdGVyRGF0YVN0cmluZ11cbiAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoICYmIGRhdGEuaW5jbHVkZXMoYXJncykpIHtcbiAgICAgICAgICAgICAgICBkYXRhID0gZGF0YS5maWx0ZXIoeCA9PiB4ICE9IGFyZ3MgPyB0cnVlIDogZmFsc2UpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGZvb3RlckRhdGFTdHJpbmc6IGRhdGFcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2goYXJncylcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyRGF0YVN0cmluZzogZGF0YVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCBtZW51ID0gW11cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZm9vdGVyRGF0YSAmJiB0aGlzLnByb3BzLmZvb3RlckRhdGEubWVudSAmJiB0aGlzLnByb3BzLmZvb3RlckRhdGEubWVudS5sZW5ndGgpIHtcbiAgICAgICAgICAgIG1lbnUgPSB0aGlzLnByb3BzLmZvb3RlckRhdGEubWVudVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtgJHt0aGlzLnByb3BzLnRlc3RzTGlzdFBhZ2UgPyBgcHJvZmlsZS1mb290ZXIgc3RpY2stYnRtLWZvb3RlcmAgOiBgcHJvZmlsZS1mb290ZXIgZnhkLWZ0ci1idG0tcGRuZ2B9YH0+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBtZW51Lmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgZm9vdGVyLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW51Lm1hcCgoZiwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1kb2N0b3ItbGlzdGluZ1wiIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57Zi5zdWJfaGVhZGluZ308L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZi51cmxfbGlzdC5tYXAoKHUsIGopID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2p9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17XCIvXCIgKyB1LnVybH0gb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKGAvJHt1LnVybH1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+e3UudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc3BlY2lhbGl0eUZvb3RlckRhdGEgJiYgdGhpcy5wcm9wcy5zcGVjaWFsaXR5Rm9vdGVyRGF0YS5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXJ0LTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNwZWNpYWxpdHlGb290ZXJEYXRhLm1hcCgoZm9vdGVyRGF0YSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtMlwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTUsIHBhZGRpbmdUb3A6IDEwIH19IGtleT17XCJkaXZcIiArIGl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwic3BlY2lhbGl0eS1mb290ZXItaGVhZCBkLWJsb2NrIGQtbWQtbm9uZVwiIG9uQ2xpY2s9eygpID0+IHRoaXMudG9nZ2xlRm9vdGVyRGF0YShpKX0+e2Zvb3RlckRhdGEudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zaG93Rm9vdGVyRGF0YS5sZW5ndGggJiYgdGhpcy5zdGF0ZS5zaG93Rm9vdGVyRGF0YS5pbmNsdWRlcyhpKSA/IGBzcGVjaWFsaXR5LWZvb3Rlci1saXN0IGQtYmxvY2sgZC1tZC1ub25lYCA6IGBzcGVjaWFsaXR5LWZvb3Rlci1saXN0IGQtbm9uZSBkLW1kLW5vbmVgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb290ZXJEYXRhLnVybHMubWFwKCh1cmwsIGopID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e1wibGlcIiArIGp9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YC8ke3VybC51cmx9YH0gb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKGAvJHt1cmwudXJsfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT57dXJsLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwic3BlY2lhbGl0eS1mb290ZXItaGVhZCBkLW5vbmUgZC1tZC1ibG9ja1wiIHN0eWxlPXt7IGN1cnNvcjogJ2F1dG8nIH19Pntmb290ZXJEYXRhLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGVjaWFsaXR5LWZvb3Rlci1saXN0IGQtbm9uZSBkLW1kLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9vdGVyRGF0YS51cmxzLm1hcCgodXJsLCBqKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtcImxpXCIgKyBqfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvJHt1cmwudXJsfWB9IG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbyhgLyR7dXJsLnVybH1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+e3VybC50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmb290ZXItZHJvcGRvd24gZC1tZC1ub25lXCIgc3R5bGU9e3RoaXMuc3RhdGUuc2hvd0Zvb3RlckRhdGEubGVuZ3RoICYmIHRoaXMuc3RhdGUuc2hvd0Zvb3RlckRhdGEuaW5jbHVkZXMoaSkgPyB7IHRyYW5zZm9ybTogJ3JvdGF0ZSgxODBkZWcpJyB9IDoge319IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgJHt0aGlzLnByb3BzLnRlc3RzTGlzdFBhZ2UgPyBgY29udGFpbmVyLWZsdWlkIG1ydC0wYCA6IGBjb250YWluZXItZmx1aWQgbXJ0LTEwYH1gfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC0yIGQtbm9uZSBkLW1kLWJsb2NrXCIga2V5PVwiZnRyLWRza3RwLWRpdi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItbGlua3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLWltZy1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2xvZ28tc20ucG5nXCJ9IGNsYXNzTmFtZT1cImZvb3Rlci1sb2dvLWljb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvbnMtcm93IG1ydC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9jaGFubmVsL1VDTF82VHN0aXgyQUNhQmswandmXzF1Z1wiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMveW91dHViZS5zdmdcIn0gYWx0PVwiZG9jcHJpbWUgWW91VHViZVwiIC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZG9jcHJpbWVJbmRpYS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2luc3RhZ3JhbS5zdmdcIn0gYWx0PVwiZG9jcHJpbWUgSW5zdGFncmFtXCIgLz48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0RvY1ByaW1lSW5kaWFcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2ZhY2Vib29rLnN2Z1wifSBhbHQ9XCJkb2NwcmltZSBGYWNlYm9va1wiIC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vRG9jUHJpbWVpbmRpYVwiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvdHdpdHRlci5zdmdcIn0gYWx0PVwiZG9jcHJpbWUgVHdpdHRlclwiIC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L2RvY3ByaW1lL1wiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvbGlua2VkaW4uc3ZnXCJ9IGFsdD1cImRvY3ByaW1lIExpbmtlZGluXCIgLz48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtMiBjb2wtMTIgYnJkci10b3AtY29sJyBrZXk9XCJmdHItZHNrdHAtZGl2LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1saW5rcyBicmRyLWJ0bS1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImQtYmxvY2sgZC1tZC1ub25lXCIgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17KCkgPT4gdGhpcy50b2dnbGVGb290ZXJEYXRhKCdkb2NwcmltZScpfT5Eb2NwcmltZTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3RoaXMuc3RhdGUuZm9vdGVyRGF0YVN0cmluZy5sZW5ndGggJiYgdGhpcy5zdGF0ZS5mb290ZXJEYXRhU3RyaW5nLmluY2x1ZGVzKCdkb2NwcmltZScpID8gYGQtYmxvY2sgZC1tZC1ub25lYCA6IGBkLW5vbmUgZC1tZC1ub25lYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9hYm91dFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbyhcIi9hYm91dFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+QWJvdXQgVXM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxsaT48YSBocmVmPVwiL2hvd2l0d29ya3NcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oXCIvaG93aXR3b3Jrc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+SG93IGl0IFdvcmtzPC9hPjwvbGk+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9jYXJlZXJzXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKFwiL2NhcmVlcnNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkNhcmVlcnM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL3ByaXZhY3lcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oXCIvcHJpdmFjeVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+UHJpdmFjeSBQb2xpY3k8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL3Rlcm1zXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKFwiL3Rlcm1zXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5UZXJtcyAmYW1wOyBDb25kaXRpb25zPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9kaXNjbGFpbWVyXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKFwiL2Rpc2NsYWltZXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkRpc2NsYWltZXI8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGk+PGEgaHJlZj1cIi9tZWRpYVwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbyhcIi9tZWRpYVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+TWVkaWE8L2E+PC9saT4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9jb250YWN0XCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKFwiL2NvbnRhY3RcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkNvbnRhY3QgVXM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImQtbm9uZSBkLW1kLWJsb2NrXCI+RG9jcHJpbWU8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZC1ub25lIGQtbWQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2Fib3V0XCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKFwiL2Fib3V0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5BYm91dCBVczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGxpPjxhIGhyZWY9XCIvaG93aXR3b3Jrc1wiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbyhcIi9ob3dpdHdvcmtzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5Ib3cgaXQgV29ya3M8L2E+PC9saT4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2NhcmVlcnNcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oXCIvY2FyZWVyc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+Q2FyZWVyczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvcHJpdmFjeVwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbyhcIi9wcml2YWN5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5Qcml2YWN5IFBvbGljeTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvdGVybXNcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oXCIvdGVybXNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlRlcm1zICZhbXA7IENvbmRpdGlvbnM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2Rpc2NsYWltZXJcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oXCIvZGlzY2xhaW1lclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+RGlzY2xhaW1lcjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxsaT48YSBocmVmPVwiL21lZGlhXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKFwiL21lZGlhXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5NZWRpYTwvYT48L2xpPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2NvbnRhY3RcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oXCIvY29udGFjdFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+Q29udGFjdCBVczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZvb3Rlci1kcm9wZG93bi0yIGQtbWQtbm9uZVwiIHN0eWxlPXt0aGlzLnN0YXRlLmZvb3RlckRhdGFTdHJpbmcubGVuZ3RoICYmIHRoaXMuc3RhdGUuZm9vdGVyRGF0YVN0cmluZy5pbmNsdWRlcygnZG9jcHJpbWUnKSA/IHsgdHJhbnNmb3JtOiAncm90YXRlKDE4MGRlZyknIH0gOiB7fX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmcnfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnRvZ2dsZUZvb3RlckRhdGEoJ2RvY3ByaW1lJyl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMiBjb2wtMTJcIiBrZXk9XCJmdHItZHNrdHAtZGl2LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1saW5rcyBicmRyLWJ0bS1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmRyLWJ0bS1mb290ZXIgZnRyLWxpc3QtYnRuLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJkLWJsb2NrIGQtbWQtbm9uZVwiIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fSBvbkNsaWNrPXsoKSA9PiB0aGlzLnRvZ2dsZUZvb3RlckRhdGEoJ3BhdGllbnRzJyl9PkZvciBQYXRpZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZm9vdGVyLWRyb3Bkb3duLTIgZC1tZC1ub25lXCIgc3R5bGU9e3RoaXMuc3RhdGUuZm9vdGVyRGF0YVN0cmluZy5sZW5ndGggJiYgdGhpcy5zdGF0ZS5mb290ZXJEYXRhU3RyaW5nLmluY2x1ZGVzKCdwYXRpZW50cycpID8geyB0cmFuc2Zvcm06ICdyb3RhdGUoMTgwZGVnKScgfSA6IHt9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Zyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5oaWRlU291cmNlICYmIHRoaXMuc3RhdGUuZm9vdGVyRGF0YVN0cmluZy5sZW5ndGggJiYgdGhpcy5zdGF0ZS5mb290ZXJEYXRhU3RyaW5nLmluY2x1ZGVzKCdwYXRpZW50cycpID8gYGQtYmxvY2sgZC1tZC1ub25lYCA6IGBkLW5vbmUgZC1tZC1ub25lYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvc2VhcmNoP2Zyb209Zm9vdGVyXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oXCIvc2VhcmNoP2Zyb209Zm9vdGVyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+Qm9vayBEb2N0b3IgQXBwb2ludG1lbnQ8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9zZWFyY2g/ZnJvbT1mb290ZXJcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbyhcIi9zZWFyY2g/ZnJvbT1mb290ZXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5Cb29rIGEgTWVkaWNhbCBUZXN0PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvb25saW5lLWNvbnN1bHRhdGlvblwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKFwiL29ubGluZS1jb25zdWx0YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5Db25zdWx0IGEgRG9jdG9yPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvcmVmZXJyYWxcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbyhcIi9yZWZlcnJhbFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlJlZmVyICYgRWFybjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGk+PGEgaHJlZj1cIi9mdWxsLWJvZHktY2hlY2t1cC1oZWFsdGgtcGFja2FnZXM/ZnJvbUZvb3Rlcj10cnVlXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oXCIvZnVsbC1ib2R5LWNoZWNrdXAtaGVhbHRoLXBhY2thZ2VzP2Zyb21Gb290ZXI9dHJ1ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkJvb2sgRnVsbCBCb2R5IFBhY2thZ2VzPC9hPjwvbGk+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1ibG9ja1wiPkZvciBQYXRpZW50czwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZC1ub25lIGQtbWQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9zZWFyY2g/ZnJvbT1mb290ZXJcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbyhcIi9zZWFyY2g/ZnJvbT1mb290ZXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5Cb29rIERvY3RvciBBcHBvaW50bWVudDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL3NlYXJjaD9mcm9tPWZvb3RlclwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKFwiL3NlYXJjaD9mcm9tPWZvb3RlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkJvb2sgYSBNZWRpY2FsIFRlc3Q8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9vbmxpbmUtY29uc3VsdGF0aW9uXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oXCIvb25saW5lLWNvbnN1bHRhdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkNvbnN1bHQgYSBEb2N0b3I8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9yZWZlcnJhbFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKFwiL3JlZmVycmFsXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+UmVmZXIgJiBFYXJuPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxsaT48YSBocmVmPVwiL2Z1bGwtYm9keS1jaGVja3VwLWhlYWx0aC1wYWNrYWdlcz9mcm9tRm9vdGVyPXRydWVcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbyhcIi9mdWxsLWJvZHktY2hlY2t1cC1oZWFsdGgtcGFja2FnZXM/ZnJvbUZvb3Rlcj10cnVlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+Qm9vayBGdWxsIEJvZHkgUGFja2FnZXM8L2E+PC9saT4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvb3Qtc3ViLWxpc3RpbmcgZC1ibG9jayBkLW1kLW5vbmVcIiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0gb25DbGljaz17KCkgPT4gdGhpcy50b2dnbGVGb290ZXJEYXRhKCdkb2N0b3JzJyl9PkZvciBEb2N0b3JzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZvb3Rlci1kcm9wZG93bi0yIGQtbWQtbm9uZVwiIHN0eWxlPXt0aGlzLnN0YXRlLmZvb3RlckRhdGFTdHJpbmcubGVuZ3RoICYmIHRoaXMuc3RhdGUuZm9vdGVyRGF0YVN0cmluZy5pbmNsdWRlcygnZG9jdG9ycycpID8geyB0cmFuc2Zvcm06ICdyb3RhdGUoMTgwZGVnKScgfSA6IHt9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Zyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3RoaXMuc3RhdGUuZm9vdGVyRGF0YVN0cmluZy5sZW5ndGggJiYgdGhpcy5zdGF0ZS5mb290ZXJEYXRhU3RyaW5nLmluY2x1ZGVzKCdkb2N0b3JzJykgPyBgZC1ibG9jayBkLW1kLW5vbmVgIDogYGQtbm9uZSBkLW1kLW5vbmVgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2RvY3RvcnNpZ251cFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbyhcIi9kb2N0b3JzaWdudXBcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdhZGRZb3VyQ2xpbmljQ2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdhZGQteW91ci1jbGluaWMtY2xpY2snXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5BZGQgWW91ciBDbGluaWM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2RvY3RvcnNpZ251cFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbyhcIi9kb2N0b3JzaWdudXBcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdhZGRZb3VyTGFiQ2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdhZGQteW91ci1sYWItY2xpY2snXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5BZGQgWW91ciBMYWI8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2RvY3RvcnNpZ251cFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbyhcIi9kb2N0b3JzaWdudXBcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdkb2N0b3JTaWduVXAnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdkb2N0b3Itc2lnbi11cCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkRvY3RvciBTaWduIFVwPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb290LXN1Yi1saXN0aW5nIGQtbm9uZSBkLW1kLWJsb2NrXCI+Rm9yIERvY3RvcnM8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZC1ub25lIGQtbWQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2RvY3RvcnNpZ251cFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbyhcIi9kb2N0b3JzaWdudXBcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdhZGRZb3VyQ2xpbmljQ2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdhZGQteW91ci1jbGluaWMtY2xpY2snXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5BZGQgWW91ciBDbGluaWM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2RvY3RvcnNpZ251cFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbyhcIi9kb2N0b3JzaWdudXBcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdhZGRZb3VyTGFiQ2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdhZGQteW91ci1sYWItY2xpY2snXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5BZGQgWW91ciBMYWI8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2RvY3RvcnNpZ251cFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbyhcIi9kb2N0b3JzaWdudXBcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdkb2N0b3JTaWduVXAnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdkb2N0b3Itc2lnbi11cCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkRvY3RvciBTaWduIFVwPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTIgY29sLTEyXCIga2V5PVwiZnRyLWRza3RwLWRpdi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItbGlua3MgYnJkci1idG0tZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJkLWJsb2NrIGQtbWQtbm9uZVwiIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9eygpID0+IHRoaXMudG9nZ2xlRm9vdGVyRGF0YSgnbGFic0NpdGllcycpfT5MYWJzIGluIFRvcCBDaXRpZXM8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmZvb3RlckRhdGFTdHJpbmcubGVuZ3RoICYmIHRoaXMuc3RhdGUuZm9vdGVyRGF0YVN0cmluZy5pbmNsdWRlcygnbGFic0NpdGllcycpID8gYGQtYmxvY2sgZC1tZC1ub25lYCA6IGBkLW5vbmUgZC1tZC1ub25lYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9sYWJzLWluLWRlbGhpLWxiY2l0XCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKCcvbGFicy1pbi1kZWxoaS1sYmNpdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5MYWJzIGluIERlbGhpPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9sYWJzLWluLWd1cmdhb24tbGJjaXRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oJy9sYWJzLWluLWd1cmdhb24tbGJjaXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+TGFicyBpbiBHdXJnYW9uPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9sYWJzLWluLWJhbmdhbG9yZS1sYmNpdFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbygnL2xhYnMtaW4tYmFuZ2Fsb3JlLWxiY2l0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkxhYnMgaW4gQmFuZ2Fsb3JlPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9sYWJzLWluLW5vaWRhLWxiY2l0XCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKCcvbGFicy1pbi1ub2lkYS1sYmNpdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5MYWJzIGluIE5vaWRhPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9sYWJzLWluLW11bWJhaS1sYmNpdFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbygnL2xhYnMtaW4tbXVtYmFpLWxiY2l0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkxhYnMgaW4gTXVtYmFpPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9sYWJzLWluLWtvbGthdGEtbGJjaXRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oJy9sYWJzLWluLWtvbGthdGEtbGJjaXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+TGFicyBpbiBLb2xrYXRhPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9sYWJzLWluLWh5ZGVyYWJhZC1sYmNpdFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbygnL2xhYnMtaW4taHlkZXJhYmFkLWxiY2l0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkxhYnMgaW4gSHlkZXJhYmFkPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9sYWJzLWluLWNoZW5uYWktbGJjaXRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oJy9sYWJzLWluLWNoZW5uYWktbGJjaXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+TGFicyBpbiBDaGVubmFpPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9sYWJzLWluLXB1bmUtbGJjaXRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oJy9sYWJzLWluLXB1bmUtbGJjaXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+TGFicyBpbiBQdW5lPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9sYWJzLWluLWdoYXppYWJhZC1sYmNpdFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbygnL2xhYnMtaW4tZ2hhemlhYmFkLWxiY2l0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkxhYnMgaW4gR2hhemlhYmFkPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1ibG9ja1wiPkxhYnMgaW4gVG9wIENpdGllczwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvbGFicy1pbi1kZWxoaS1sYmNpdFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbygnL2xhYnMtaW4tZGVsaGktbGJjaXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+TGFicyBpbiBEZWxoaTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvbGFicy1pbi1ndXJnYW9uLWxiY2l0XCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKCcvbGFicy1pbi1ndXJnYW9uLWxiY2l0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkxhYnMgaW4gR3VyZ2FvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvbGFicy1pbi1iYW5nYWxvcmUtbGJjaXRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oJy9sYWJzLWluLWJhbmdhbG9yZS1sYmNpdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5MYWJzIGluIEJhbmdhbG9yZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvbGFicy1pbi1ub2lkYS1sYmNpdFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbygnL2xhYnMtaW4tbm9pZGEtbGJjaXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+TGFicyBpbiBOb2lkYTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvbGFicy1pbi1tdW1iYWktbGJjaXRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oJy9sYWJzLWluLW11bWJhaS1sYmNpdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5MYWJzIGluIE11bWJhaTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvbGFicy1pbi1rb2xrYXRhLWxiY2l0XCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKCcvbGFicy1pbi1rb2xrYXRhLWxiY2l0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkxhYnMgaW4gS29sa2F0YTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvbGFicy1pbi1oeWRlcmFiYWQtbGJjaXRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oJy9sYWJzLWluLWh5ZGVyYWJhZC1sYmNpdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5MYWJzIGluIEh5ZGVyYWJhZDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvbGFicy1pbi1jaGVubmFpLWxiY2l0XCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKCcvbGFicy1pbi1jaGVubmFpLWxiY2l0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkxhYnMgaW4gQ2hlbm5haTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvbGFicy1pbi1wdW5lLWxiY2l0XCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKCcvbGFicy1pbi1wdW5lLWxiY2l0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkxhYnMgaW4gUHVuZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvbGFicy1pbi1naGF6aWFiYWQtbGJjaXRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oJy9sYWJzLWluLWdoYXppYWJhZC1sYmNpdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5MYWJzIGluIEdoYXppYWJhZDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZvb3Rlci1kcm9wZG93bi0yIGQtbWQtbm9uZVwiIHN0eWxlPXt0aGlzLnN0YXRlLmZvb3RlckRhdGFTdHJpbmcubGVuZ3RoICYmIHRoaXMuc3RhdGUuZm9vdGVyRGF0YVN0cmluZy5pbmNsdWRlcygnbGFic0NpdGllcycpID8geyB0cmFuc2Zvcm06ICdyb3RhdGUoMTgwZGVnKScgfSA6IHt9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Zyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTIgY29sLTEyXCIga2V5PVwiZnRyLWRza3RwLWRpdi01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItbGlua3MgYnJkci1idG0tZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJkLWJsb2NrIGQtbWQtbm9uZVwiIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9eygpID0+IHRoaXMudG9nZ2xlRm9vdGVyRGF0YSgnZG9jdG9yc0NpdGllcycpfT5Eb2N0b3JzIGluIFRvcCBDaXRpZXM8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmZvb3RlckRhdGFTdHJpbmcubGVuZ3RoICYmIHRoaXMuc3RhdGUuZm9vdGVyRGF0YVN0cmluZy5pbmNsdWRlcygnZG9jdG9yc0NpdGllcycpID8gYGQtYmxvY2sgZC1tZC1ub25lYCA6IGBkLW5vbmUgZC1tZC1ub25lYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9kb2N0b3JzLWluLWRlbGhpLXNwdGNpdFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbygnL2RvY3RvcnMtaW4tZGVsaGktc3B0Y2l0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkRvY3RvcnMgaW4gRGVsaGk8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2RvY3RvcnMtaW4tZ3VyZ2Fvbi1zcHRjaXRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oJy9kb2N0b3JzLWluLWd1cmdhb24tc3B0Y2l0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkRvY3RvcnMgaW4gR3VyZ2FvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvZG9jdG9ycy1pbi1iYW5nYWxvcmUtc3B0Y2l0XCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKCcvZG9jdG9ycy1pbi1iYW5nYWxvcmUtc3B0Y2l0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkRvY3RvcnMgaW4gQmFuZ2Fsb3JlPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9kb2N0b3JzLWluLW5vaWRhLXNwdGNpdFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbygnL2RvY3RvcnMtaW4tbm9pZGEtc3B0Y2l0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkRvY3RvcnMgaW4gTm9pZGE8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2RvY3RvcnMtaW4tbXVtYmFpLXNwdGNpdFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbygnL2RvY3RvcnMtaW4tbXVtYmFpLXNwdGNpdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5Eb2N0b3JzIGluIE11bWJhaTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvZG9jdG9ycy1pbi1rb2xrYXRhLXNwdGNpdFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbygnL2RvY3RvcnMtaW4ta29sa2F0YS1zcHRjaXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+RG9jdG9ycyBpbiBLb2xrYXRhPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9kb2N0b3JzLWluLWh5ZGVyYWJhZC1zcHRjaXRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oJy9kb2N0b3JzLWluLWh5ZGVyYWJhZC1zcHRjaXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+RG9jdG9ycyBpbiBIeWRlcmFiYWQ8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2RvY3RvcnMtaW4tY2hlbm5haS1zcHRjaXRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oJy9kb2N0b3JzLWluLWNoZW5uYWktc3B0Y2l0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkRvY3RvcnMgaW4gQ2hlbm5haTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvZG9jdG9ycy1pbi1wdW5lLXNwdGNpdFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbygnL2RvY3RvcnMtaW4tcHVuZS1zcHRjaXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+RG9jdG9ycyBpbiBQdW5lPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9kb2N0b3JzLWluLWdoYXppYWJhZC1zcHRjaXRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oJy9kb2N0b3JzLWluLWdoYXppYWJhZC1zcHRjaXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+RG9jdG9ycyBpbiBHaGF6aWFiYWQ8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImQtbm9uZSBkLW1kLWJsb2NrXCI+RG9jdG9ycyBpbiBUb3AgQ2l0aWVzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImQtbm9uZSBkLW1kLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9kb2N0b3JzLWluLWRlbGhpLXNwdGNpdFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbygnL2RvY3RvcnMtaW4tZGVsaGktc3B0Y2l0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkRvY3RvcnMgaW4gRGVsaGk8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2RvY3RvcnMtaW4tZ3VyZ2Fvbi1zcHRjaXRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oJy9kb2N0b3JzLWluLWd1cmdhb24tc3B0Y2l0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkRvY3RvcnMgaW4gR3VyZ2FvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvZG9jdG9ycy1pbi1iYW5nYWxvcmUtc3B0Y2l0XCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKCcvZG9jdG9ycy1pbi1iYW5nYWxvcmUtc3B0Y2l0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkRvY3RvcnMgaW4gQmFuZ2Fsb3JlPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9kb2N0b3JzLWluLW5vaWRhLXNwdGNpdFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbygnL2RvY3RvcnMtaW4tbm9pZGEtc3B0Y2l0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkRvY3RvcnMgaW4gTm9pZGE8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2RvY3RvcnMtaW4tbXVtYmFpLXNwdGNpdFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbygnL2RvY3RvcnMtaW4tbXVtYmFpLXNwdGNpdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5Eb2N0b3JzIGluIE11bWJhaTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvZG9jdG9ycy1pbi1rb2xrYXRhLXNwdGNpdFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbygnL2RvY3RvcnMtaW4ta29sa2F0YS1zcHRjaXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+RG9jdG9ycyBpbiBLb2xrYXRhPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9kb2N0b3JzLWluLWh5ZGVyYWJhZC1zcHRjaXRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oJy9kb2N0b3JzLWluLWh5ZGVyYWJhZC1zcHRjaXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+RG9jdG9ycyBpbiBIeWRlcmFiYWQ8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2RvY3RvcnMtaW4tY2hlbm5haS1zcHRjaXRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oJy9kb2N0b3JzLWluLWNoZW5uYWktc3B0Y2l0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkRvY3RvcnMgaW4gQ2hlbm5haTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvZG9jdG9ycy1pbi1wdW5lLXNwdGNpdFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbygnL2RvY3RvcnMtaW4tcHVuZS1zcHRjaXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+RG9jdG9ycyBpbiBQdW5lPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9kb2N0b3JzLWluLWdoYXppYWJhZC1zcHRjaXRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oJy9kb2N0b3JzLWluLWdoYXppYWJhZC1zcHRjaXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+RG9jdG9ycyBpbiBHaGF6aWFiYWQ8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmb290ZXItZHJvcGRvd24tMiBkLW1kLW5vbmVcIiBzdHlsZT17dGhpcy5zdGF0ZS5mb290ZXJEYXRhU3RyaW5nLmxlbmd0aCAmJiB0aGlzLnN0YXRlLmZvb3RlckRhdGFTdHJpbmcuaW5jbHVkZXMoJ2RvY3RvcnNDaXRpZXMnKSA/IHsgdHJhbnNmb3JtOiAncm90YXRlKDE4MGRlZyknIH0gOiB7fX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0yIGNvbC0xMlwiIGtleT1cImZ0ci1kc2t0cC1kaXYtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWxpbmtzIGJyZHItYnRtLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZC1ibG9jayBkLW1kLW5vbmVcIiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXsoKSA9PiB0aGlzLnRvZ2dsZUZvb3RlckRhdGEoJ3Jlc291cmNlcycpfT5Vc2VmdWwgUmVzb3VyY2VzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5mb290ZXJEYXRhU3RyaW5nLmxlbmd0aCAmJiB0aGlzLnN0YXRlLmZvb3RlckRhdGFTdHJpbmcuaW5jbHVkZXMoJ3Jlc291cmNlcycpID8gYGQtYmxvY2sgZC1tZC1ub25lYCA6IGBkLW5vbmUgZC1tZC1ub25lYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9hbGwtYXJ0aWNsZXNcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oXCIvYWxsLWFydGljbGVzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5BbGwgQXJ0aWNsZXM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2FsbC1kaXNlYXNlc1wiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbyhcIi9hbGwtZGlzZWFzZXNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkFsbCBEaXNlYXNlczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvYWxsLW1lZGljaW5lc1wiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbyhcIi9hbGwtbWVkaWNpbmVzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5BbGwgTWVkaWNpbmVzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9jaXR5LWludmVudG9yeVwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbyhcIi9jaXR5LWludmVudG9yeVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+QWxsIENpdGllcyA8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL3NwZWNpYWxpdHktaW52ZW50b3J5XCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKFwiL3NwZWNpYWxpdHktaW52ZW50b3J5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5BbGwgU3BlY2lhbGl0aWVzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9ob3NwaXRhbHNcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oXCIvaG9zcGl0YWxzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5BbGwgSG9zcGl0YWxzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9kb2N0b3JzLW5lYXItbWVcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oXCIvZG9jdG9ycy1uZWFyLW1lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5GaW5kIGEgRG9jdG9yIE5lYXIgWW91PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1ibG9ja1wiPlVzZWZ1bCBSZXNvdXJjZXM8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZC1ub25lIGQtbWQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2FsbC1hcnRpY2xlc1wiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbyhcIi9hbGwtYXJ0aWNsZXNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkFsbCBBcnRpY2xlczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvYWxsLWRpc2Vhc2VzXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKFwiL2FsbC1kaXNlYXNlc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+QWxsIERpc2Vhc2VzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9hbGwtbWVkaWNpbmVzXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKFwiL2FsbC1tZWRpY2luZXNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkFsbCBNZWRpY2luZXM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2NpdHktaW52ZW50b3J5XCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKFwiL2NpdHktaW52ZW50b3J5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5BbGwgQ2l0aWVzIDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvc3BlY2lhbGl0eS1pbnZlbnRvcnlcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oXCIvc3BlY2lhbGl0eS1pbnZlbnRvcnlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkFsbCBTcGVjaWFsaXRpZXM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2hvc3BpdGFsc1wiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbyhcIi9ob3NwaXRhbHNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkFsbCBIb3NwaXRhbHM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2RvY3RvcnMtbmVhci1tZVwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbyhcIi9kb2N0b3JzLW5lYXItbWVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkZpbmQgYSBEb2N0b3IgTmVhciBZb3U8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmb290ZXItZHJvcGRvd24tMiBkLW1kLW5vbmVcIiBzdHlsZT17dGhpcy5zdGF0ZS5mb290ZXJEYXRhU3RyaW5nLmxlbmd0aCAmJiB0aGlzLnN0YXRlLmZvb3RlckRhdGFTdHJpbmcuaW5jbHVkZXMoJ3Jlc291cmNlcycpID8geyB0cmFuc2Zvcm06ICdyb3RhdGUoMTgwZGVnKScgfSA6IHt9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Zyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC0yIGQtYmxvY2sgZC1tZC1ub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItbGlua3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvbnMtcm93IG1ydC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9jaGFubmVsL1VDTF82VHN0aXgyQUNhQmswandmXzF1Z1wiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMveW91dHViZS5zdmdcIn0gYWx0PVwiZG9jcHJpbWUgWW91VHViZVwiIC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZG9jcHJpbWVJbmRpYS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2luc3RhZ3JhbS5zdmdcIn0gYWx0PVwiZG9jcHJpbWUgSW5zdGFncmFtXCIgLz48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0RvY1ByaW1lSW5kaWFcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2ZhY2Vib29rLnN2Z1wifSBhbHQ9XCJkb2NwcmltZSBGYWNlYm9va1wiIC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vRG9jUHJpbWVpbmRpYVwiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvdHdpdHRlci5zdmdcIn0gYWx0PVwiZG9jcHJpbWUgVHdpdHRlclwiIC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L2RvY3ByaW1lL1wiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvbGlua2VkaW4uc3ZnXCJ9IGFsdD1cImRvY3ByaW1lIExpbmtlZGluXCIgLz48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMjBcIiBzdHlsZT17eyBjb2xvcjogJyM4YThhOGEnLCBmb250U2l6ZTogMTIgfX0gPlRoZSBXZWJzaXRlIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGluIGNhc2Ugb2YgYSBtZWRpY2FsIGVtZXJnZW5jeSBhbmQvIG9yIGNyaXRpY2FsIGNhcmUgYW5kIHRoZSB1c2VyIHNob3VsZCBkaXJlY3RseSBjb250YWN0IGhpcy8gaGVyIG1lZGljYWwgc2VydmljZSBwcm92aWRlciBmb3IgUGh5c2ljYWwgRXhhbWluYXRpb24uIERvY3ByaW1lIGlzIHNvbGVseSBhIHRlY2hub2xvZ3kgcGFydG5lci48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGZvb3Rlci1uZXctY29weXJnaHRcIiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiA1IH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Eb2NwcmltZS5jb20gQ29weXJpZ2h0ICZjb3B5OyAyMDIwLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BbGwgcmlnaHRzIHJlc2VydmVkLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5ET0NQUklNRSBURUNITk9MT0dJRVMgUFJJVkFURSBMSU1JVEVEPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNJTiA6IFU3NDk5OUhSMjAxNlBUQzA2NDMxMjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcGFzc2VkUHJvcHMpID0+IHtcbiAgICAvKipcbiAgICAgKiBpbml0aWFsU2VydmVyRGF0YSBpcyBzZXJ2ZXIgcmVuZGVyZWQgYXN5bmMgZGF0YSByZXF1aXJlZCBidWlsZCBodG1sIG9uIHNlcnZlci4gXG4gICAgICovXG4gICAgcmV0dXJuIHtcbiAgICBcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNsZWFyT3BkUGFnZTooKT0+IGRpc3BhdGNoKGNsZWFyT3BkUGFnZSgpKVxuICAgIH1cbn1cblxuLy8gZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihGb290ZXIpXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEZvb3RlcikpIl0sInNvdXJjZVJvb3QiOiIifQ==