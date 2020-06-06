(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[85],{

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

/***/ "./dev/js/components/diagnosis/healthPackage/HealthPackage.js":
/*!********************************************************************!*\
  !*** ./dev/js/components/diagnosis/healthPackage/HealthPackage.js ***!
  \********************************************************************/
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

var _Loader = __webpack_require__(/*! ../../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _LeftBar = __webpack_require__(/*! ../../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _HelmetTags = __webpack_require__(/*! ../../commons/HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _config = __webpack_require__(/*! ../../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _footer = __webpack_require__(/*! ../../commons/Home/footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _bannerCarousel = __webpack_require__(/*! ../../commons/Home/bannerCarousel */ "./dev/js/components/commons/Home/bannerCarousel.js");

var _bannerCarousel2 = _interopRequireDefault(_bannerCarousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LabView = function (_React$Component) {
    _inherits(LabView, _React$Component);

    function LabView(props) {
        _classCallCheck(this, LabView);

        var _this = _possibleConstructorReturn(this, (LabView.__proto__ || Object.getPrototypeOf(LabView)).call(this, props));

        _this.state = {
            collapse: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            expandClick: true,
            expandText: 'Expand All'
        };
        return _this;
    }

    _createClass(LabView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (window) {
                window.scrollTo(0, 0);
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
        }
    }, {
        key: 'toggle',
        value: function toggle(index) {
            var collapse = [].concat(_toConsumableArray(this.state.collapse));
            collapse[index] = !collapse[index];
            this.setState({ collapse: collapse });
        }
    }, {
        key: 'expandAll',
        value: function expandAll() {
            if (this.state.expandClick) {
                var collapse = this.state.collapse.map(function (x) {
                    return true;
                });
                this.setState({ collapse: collapse });
                this.setState({ expandClick: !this.state.expandClick, expandText: 'Collapse All' });
            } else {
                var _collapse = this.state.collapse.map(function (x) {
                    return false;
                });
                this.setState({ collapse: _collapse });
                this.setState({ expandClick: !this.state.expandClick, expandText: 'Expand All' });
            }
        }
    }, {
        key: 'bookNowClicked',
        value: function bookNowClicked(url, trackingName) {

            var data = {
                'Category': 'ConsumerApp', 'Action': trackingName, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': trackingName
            };
            _gtm2.default.sendEvent({ data: data });
            if (window) {
                window.location.href = url;
            }
        }
    }, {
        key: 'viewAllClick',
        value: function viewAllClick() {
            this.props.history.push('/full-body-checkup-health-packages');
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

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
                        _react2.default.createElement(_HelmetTags2.default, { tagsData: {
                                title: 'Compare Full body Health Checkup Packages from Top Labs | Book Online & Save upto 50%',
                                description: 'Compare and book full body health checkup packages from top labs at docprime.com. Avail exclusive discounts & save upto 50%. Get free home sample collection and online reports on time.'
                            } }),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12 col-md-7 col-lg-7 center-column' },
                            this.props.offerList && this.props.offerList.filter(function (x) {
                                return x.slider_location === 'health_package_compare_page';
                            }).length ? _react2.default.createElement(
                                'div',
                                { className: 'col-12' },
                                _react2.default.createElement(_bannerCarousel2.default, _extends({}, this.props, { sliderLocation: 'health_package_compare_page' }))
                            ) : '',
                            _react2.default.createElement(
                                'div',
                                { className: 'd-flex justify-content-between mrt-10', style: { padding: '0 15px' } },
                                _react2.default.createElement(
                                    'h4',
                                    { className: 'fw-500', style: { fontSize: 16, flex: 1, marginRight: 4 } },
                                    'Top full body checkup packages'
                                ),
                                _react2.default.createElement(
                                    'button',
                                    { onClick: function onClick() {
                                            return _this2.viewAllClick();
                                        }, className: 'vw-all-static text-primary fw-500' },
                                    'View all'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'widget mrt-10 ct-profile skin-white border-bottom-radious gold-relative' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'static-pk-container sticky-pk-container' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'static-pkg-top-column' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-pkg-sub' },
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'stc-sub-para' },
                                                'Pro Aarogyam 1.7 (Thyrocare) ',
                                                _react2.default.createElement('br', null),
                                                '(Includes 86 tests)'
                                            ),
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'stc-price-cut' },
                                                '\u20B9 2000',
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    '\u20B9 2400'
                                                )
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'static-pkg-top-column stc-mid-mrgn' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-pkg-sub' },
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'stc-sub-para' },
                                                'Aarogyam B (Thyrocare) ',
                                                _react2.default.createElement('br', null),
                                                '(Includes 60 tests)'
                                            ),
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'stc-price-cut' },
                                                '\u20B9 499 ',
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    '\u20B9 750'
                                                )
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'static-pkg-top-column' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-pkg-sub' },
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'stc-sub-para' },
                                                'MET Healthy Youth (25 YRS & Above) ',
                                                _react2.default.createElement('br', null),
                                                '(Includes 56 tests)'
                                            ),
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'stc-price-cut' },
                                                '\u20B9 1099 ',
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    '\u20B9 3640'
                                                )
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'static-pk-container sticky-pk-container-2', style: { paddingTop: 0, paddingBottom: 30 } },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'static-pkg-top-column', style: { position: 'relative' } },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-offr-cpn' },
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'stc-off-para' },
                                                '16% OFF + \u20B9 100 OFF Coupon'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'stc-free-pick' },
                                            'Free Home Pickup'
                                        ),
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/lab/searchresults?test_ids=12387', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.bookNowClicked('/lab/searchresults?test_ids=12387', 'TopbookNowClickedBlock1');
                                                }, className: 'stc-book-btn' },
                                            'Book Now'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'popular-txt', style: { top: 'unset', right: 'unset', bottom: '-26px', left: '50%', transform: 'translateX(-50%)' } },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'fw-500' },
                                                'Popular'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'static-pkg-top-column stc-mid-mrgn' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-offr-cpn' },
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'stc-off-para' },
                                                '33% OFF + \u20B9 100 OFF Coupon'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'stc-free-pick' },
                                            'Free Home Pickup'
                                        ),
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/lab/searchresults?test_ids=12227', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.bookNowClicked('/lab/searchresults?test_ids=12227', 'TopbookNowClickedBlock2');
                                                },
                                                className: 'stc-book-btn' },
                                            'Book Now'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'static-pkg-top-column' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-offr-cpn' },
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'stc-off-para' },
                                                '69% OFF + \u20B9 100 OFF Coupon'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'stc-free-pick' },
                                            'Free Home Pickup'
                                        ),
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/lab/searchresults?test_ids=11722',
                                                onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this2.bookNowClicked('/lab/searchresults?test_ids=11722', 'TopbookNowClickedBlock3');
                                                },
                                                className: 'stc-book-btn' },
                                            'Book Now'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'stc-acrdn-contaniner' },
                                    _react2.default.createElement(
                                        'h5',
                                        { className: 'stc-expnd-btn mrt-10', onClick: this.expandAll.bind(this) },
                                        this.state.expandText
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'stc-accord-container' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-heading stc-no-cursor' },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Preparation'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-content' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '8-10 hrs of fasting required before sample collection'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data mid-border-mrgn' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '8-10 hrs of fasting required before sample collection'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '8-10 hrs of fasting required before sample collection'
                                                )
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'stc-accord-container' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-heading stc-no-cursor' },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Tests Included '
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-content text-center' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '86'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data mid-border-mrgn' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '60'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '56'
                                                )
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'stc-accord-container' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-heading', onClick: this.toggle.bind(this, 0) },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'CBC Haemogram Tests'
                                            ),
                                            this.state.collapse[0] ? _react2.default.createElement('img', { className: 'titlearrow', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" }) : _react2.default.createElement('img', { className: 'titlearrow', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-content pb-0 text-center' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '28'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data mid-border-mrgn' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '28'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '28'
                                                )
                                            )
                                        ),
                                        this.state.collapse[0] ? _react2.default.createElement(
                                            'div',
                                            null,
                                            _react2.default.createElement(
                                                'div',
                                                null,
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    'Complete Blood Count (CBC) is a blood test that measures Red blood cells (RBC), White blood cells (WBC), Platelets (PLTs), Hemoglobin (Hb), and Hematocrit (Hct) in the blood. This test is used to determine the overall health and screen for any diseases that affect the blood cells.'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'stc-acrd-content stc-hide-acrd-container pt-0 text-center' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data' },
                                                    _react2.default.createElement(
                                                        'ul',
                                                        { className: 'stc-data-ul-list' },
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Total RBC'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Red Cell Distribution Width (RDW-CV)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Red Cell Distribution Width - SD(RDW-SD)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Platelet To Large Cell Ratio (PLCR)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Platelet Count'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Mean Corpuscular Hemoglobin (MCH)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Mean Corp.Hemo.Conc (MCHC)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Mean Corpuscular Volume (MCV)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Monocytes'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Mean Platelet Volume (MPV)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Neutrophils (NP)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Nucleated Red Blood Cells (NRBC)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Plateletcrit (PCT)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Hematocrit (PCV)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Platelet Distribution Width (PDW)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Hemoglobin'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Eosinophils (EP)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Immature Granulocytes (IG)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Basophils - Absolute Count'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Eosinophils - Absolute Count'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Lymphocytes- Absolute Count'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Monocytes- Absolute Count'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Neutrophils- Absolute Count'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Basophils (BS)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Lymphocyte Percentage (LC%)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Total Leucocytes Count (TLC)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Nucleated Red Blood Cells (NRBC%)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Immature Granulocyte Percentage(IG%)'
                                                            )
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data mid-border-mrgn' },
                                                    _react2.default.createElement(
                                                        'ul',
                                                        { className: 'stc-data-ul-list' },
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Total RBC'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Red Cell Distribution Width (RDW-CV)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Red Cell Distribution Width - SD(RDW-SD)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Platelet To Large Cell Ratio (PLCR)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Platelet Count'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Mean Corpuscular Hemoglobin (MCH)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Mean Corp.Hemo.Conc (MCHC)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Mean Corpuscular Volume (MCV)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Monocytes'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Mean Platelet Volume (MPV)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Neutrophils (NP)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Nucleated Red Blood Cells (NRBC)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Plateletcrit (PCT)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Hematocrit (PCV)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Platelet Distribution Width (PDW)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Hemoglobin'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Eosinophils (EP)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Immature Granulocytes (IG)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Basophils - Absolute Count'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Eosinophils - Absolute Count'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Lymphocytes- Absolute Count'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Monocytes- Absolute Count'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Neutrophils- Absolute Count'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Basophils (BS)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Lymphocyte Percentage (LC%)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Total Leucocytes Count (TLC)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Nucleated Red Blood Cells (NRBC%)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Immature Granulocyte Percentage(IG%)'
                                                            )
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data' },
                                                    _react2.default.createElement(
                                                        'ul',
                                                        { className: 'stc-data-ul-list' },
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Total RBC'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Red Cell Distribution Width (RDW-CV)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Red Cell Distribution Width - SD(RDW-SD)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Platelet To Large Cell Ratio (PLCR)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Platelet Count'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Mean Corpuscular Hemoglobin (MCH)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Mean Corp.Hemo.Conc (MCHC)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Mean Corpuscular Volume (MCV)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Monocytes'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Mean Platelet Volume (MPV)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Neutrophils (NP)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Nucleated Red Blood Cells (NRBC)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Plateletcrit (PCT)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Hematocrit (PCV)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Platelet Distribution Width (PDW)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Hemoglobin'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Eosinophils (EP)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Immature Granulocytes (IG)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Basophils - Absolute Count'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Eosinophils - Absolute Count'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Lymphocytes- Absolute Count'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Monocytes- Absolute Count'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Neutrophils- Absolute Count'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Basophils (BS)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Lymphocyte Percentage (LC%)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Total Leucocytes Count (TLC)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Nucleated Red Blood Cells (NRBC%)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Immature Granulocyte Percentage(IG%)'
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        ) : ''
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'stc-accord-container' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-heading', onClick: this.toggle.bind(this, 1) },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Liver Function Test'
                                            ),
                                            _react2.default.createElement('img', { className: 'titlearrow', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-content pb-0 text-center' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '11'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data mid-border-mrgn' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '11'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '11'
                                                )
                                            )
                                        ),
                                        this.state.collapse[1] ? _react2.default.createElement(
                                            'div',
                                            null,
                                            _react2.default.createElement(
                                                'div',
                                                null,
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    'Liver function tests are blood tests used to help diagnose and monitor liver disease or damage. The tests measure the levels of certain enzymes and proteins in your blood.'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'stc-acrd-content stc-hide-acrd-container pt-0 text-center' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data' },
                                                    _react2.default.createElement(
                                                        'ul',
                                                        { className: 'stc-data-ul-list' },
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Gamma Glutamyl Transferase'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Alkaline Phosphate'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Bilirubin-Direct'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Bilirubin-Total'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Bilirubin-Indirect'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Protein -total'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Serum Albumin'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Serum Globulin'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'SGOT(AST)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'SGPT(ALT)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Serum Albumin /Globulin Ratio'
                                                            )
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data mid-border-mrgn' },
                                                    _react2.default.createElement(
                                                        'ul',
                                                        { className: 'stc-data-ul-list' },
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Gamma Glutamyl Transferase'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Alkaline Phosphate'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Bilirubin-Direct'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Bilirubin-Total'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Bilirubin-Indirect'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Protein -total'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Serum Albumin'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Serum Globulin'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'SGOT(AST)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'SGPT(ALT)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Serum Albumin /Globulin Ratio'
                                                            )
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data' },
                                                    _react2.default.createElement(
                                                        'ul',
                                                        { className: 'stc-data-ul-list' },
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Gamma Glutamyl Transferase'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Alkaline Phosphate'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Bilirubin-Direct'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Bilirubin-Total'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Bilirubin-Indirect'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Protein -total'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Serum Albumin'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Serum Globulin'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'SGOT(AST)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'SGPT(ALT)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Serum Albumin /Globulin Ratio'
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        ) : ''
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'stc-accord-container' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-heading', onClick: this.toggle.bind(this, 2) },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Lipid Profile'
                                            ),
                                            _react2.default.createElement('img', { className: 'titlearrow', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-content pb-0 text-center' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '8'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data mid-border-mrgn' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '8'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '8'
                                                )
                                            )
                                        ),
                                        this.state.collapse[2] ? _react2.default.createElement(
                                            'div',
                                            null,
                                            ' ',
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                'Lipid profile test is a set of tests used to measure the amount of cholesterol and other types of fats present in your blood. This test is helpful in assessing the risk of cardiovascular diseases (CVD).'
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'stc-acrd-content stc-hide-acrd-container pt-0 text-center' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data' },
                                                    _react2.default.createElement(
                                                        'ul',
                                                        { className: 'stc-data-ul-list' },
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'LDL Cholestrol'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Total Cholesterol'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'HDL Cholesterol'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Triglycerides'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'VLDL Cholesterol'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'LDL/HDL Ratio'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Non - HDL Cholesterol'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'TC/HDL Cholesterol Ratio'
                                                            )
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data mid-border-mrgn' },
                                                    _react2.default.createElement(
                                                        'ul',
                                                        { className: 'stc-data-ul-list' },
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'LDL Cholestrol'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Total Cholesterol'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'HDL Cholesterol'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Triglycerides'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'VLDL Cholesterol'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'LDL/HDL Ratio'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Non - HDL Cholesterol'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'TC/HDL Cholesterol Ratio'
                                                            )
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data' },
                                                    _react2.default.createElement(
                                                        'ul',
                                                        { className: 'stc-data-ul-list' },
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'LDL Cholestrol'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Total Cholesterol'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'HDL Cholesterol'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Triglycerides'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'VLDL Cholesterol'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'LDL/HDL Ratio'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Non - HDL Cholesterol'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'TC/HDL Cholesterol Ratio'
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        ) : ''
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'stc-accord-container' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-heading', onClick: this.toggle.bind(this, 3) },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Kidney Function Test'
                                            ),
                                            _react2.default.createElement('img', { className: 'titlearrow', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-content pb-0 text-center' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '5'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data mid-border-mrgn' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '5'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '5'
                                                )
                                            )
                                        ),
                                        this.state.collapse[3] ? _react2.default.createElement(
                                            'div',
                                            null,
                                            _react2.default.createElement(
                                                'div',
                                                null,
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    'Kidneys play an important role in the removal of waste products and maintenance of water and electrolyte balance in the body. Kidney Function Test (KFT) includes a group of blood tests to determine how well the kidneys are working.'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'stc-acrd-content stc-hide-acrd-container pt-0 text-center' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data' },
                                                    _react2.default.createElement(
                                                        'ul',
                                                        { className: 'stc-data-ul-list' },
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Creatinine'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Uric Acid (UA)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Blood Urea Nitrogen (BUN)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'BUN/ Serum Creatinine Ratio'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Calcium'
                                                            )
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data mid-border-mrgn' },
                                                    _react2.default.createElement(
                                                        'ul',
                                                        { className: 'stc-data-ul-list' },
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Creatinine'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Uric Acid (UA)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Blood Urea Nitrogen (BUN)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'BUN/ Serum Creatinine Ratio'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Calcium'
                                                            )
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data' },
                                                    _react2.default.createElement(
                                                        'ul',
                                                        { className: 'stc-data-ul-list' },
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Creatinine'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Uric Acid (UA)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Blood Urea Nitrogen (BUN)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'BUN/ Serum Creatinine Ratio'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Calcium'
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        ) : ''
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'stc-accord-container' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-heading', onClick: this.toggle.bind(this, 4) },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Thyroid Panel 1'
                                            ),
                                            _react2.default.createElement('img', { className: 'titlearrow', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-content pb-0 text-center' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '3'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data mid-border-mrgn' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '3'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '3'
                                                )
                                            )
                                        ),
                                        this.state.collapse[4] ? _react2.default.createElement(
                                            'div',
                                            null,
                                            _react2.default.createElement(
                                                'div',
                                                null,
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    'Thyroid function tests (TFTs) is a collective term for blood tests used to check the function of the thyroid. A TFT panel typically includes thyroid hormones such as thyroid-stimulating hormone (TSH, thyrotropin) and thyroxine (T4), and triiodothyronine (T3).'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'stc-acrd-content stc-hide-acrd-container pt-0 text-center' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data' },
                                                    _react2.default.createElement(
                                                        'ul',
                                                        { className: 'stc-data-ul-list' },
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'TriIodothyronine (T3)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Thyroxine - T4 Total'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'TSH - Thyroid Stimulating Hormone'
                                                            )
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data mid-border-mrgn' },
                                                    _react2.default.createElement(
                                                        'ul',
                                                        { className: 'stc-data-ul-list' },
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'TriIodothyronine (T3)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Thyroxine - T4 Total'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'TSH - Thyroid Stimulating Hormone'
                                                            )
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data' },
                                                    _react2.default.createElement(
                                                        'ul',
                                                        { className: 'stc-data-ul-list' },
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'TriIodothyronine (T3)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Thyroxine - T4 Total'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'TSH - Thyroid Stimulating Hormone'
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        ) : ''
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'stc-accord-container' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-heading', onClick: this.toggle.bind(this, 5) },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Iron'
                                            ),
                                            _react2.default.createElement('img', { className: 'titlearrow', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-content pb-0 text-center' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '3'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data mid-border-mrgn' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '3'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'acrd-stc-red' },
                                                    'X'
                                                )
                                            )
                                        ),
                                        this.state.collapse[5] ? _react2.default.createElement(
                                            'div',
                                            null,
                                            _react2.default.createElement(
                                                'div',
                                                null,
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    'Iron tests are groups of clinical chemistry laboratory blood tests that are used to evaluate body iron stores or the iron level in blood serum. Other terms used for the same tests are iron panel, iron profile, iron indices or iron status.'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'stc-acrd-content stc-hide-acrd-container pt-0 text-center' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data' },
                                                    _react2.default.createElement(
                                                        'ul',
                                                        { className: 'stc-data-ul-list' },
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Total Iron Binding Capacity (TIBC)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Iron'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Transferrin Saturation'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Ferritin'
                                                            )
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data mid-border-mrgn' },
                                                    _react2.default.createElement(
                                                        'ul',
                                                        { className: 'stc-data-ul-list' },
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Total Iron Binding Capacity (TIBC)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Iron'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Transferrin Saturation'
                                                            )
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement('div', { className: 'acrd-stc-data' })
                                            )
                                        ) : ''
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'stc-accord-container' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-heading', onClick: this.toggle.bind(this, 6) },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Diabetes Screen, Profile'
                                            ),
                                            _react2.default.createElement('img', { className: 'titlearrow', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-content pb-0 text-center' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '2'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data mid-border-mrgn' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '2'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'acrd-stc-red' },
                                                    'X'
                                                )
                                            )
                                        ),
                                        this.state.collapse[6] ? _react2.default.createElement(
                                            'div',
                                            null,
                                            _react2.default.createElement(
                                                'div',
                                                null,
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    'Definition: insulin resistance. This test is ordered for a patient who newly diagnosed with diabetes type-2 to monitor the status of beta cell production of insulin and while the insulin injection is required for the patient. The expected value: Normal or high level of C-peptide will be detected.'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'stc-acrd-content stc-hide-acrd-container pt-0 text-center' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data' },
                                                    _react2.default.createElement(
                                                        'ul',
                                                        { className: 'stc-data-ul-list' },
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'HbA1c Glycated Haemoglobin'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Average Blood Glucose (ABG)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Blood ketone'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Fructosamine'
                                                            )
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data mid-border-mrgn' },
                                                    _react2.default.createElement(
                                                        'ul',
                                                        { className: 'stc-data-ul-list' },
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'HbA1c Glycated Haemoglobin'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Average Blood Glucose (ABG)'
                                                            )
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement('div', { className: 'acrd-stc-data' })
                                            )
                                        ) : ''
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'stc-accord-container' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-heading', onClick: this.toggle.bind(this, 7) },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Cardiac Risk Profile, Marker'
                                            ),
                                            _react2.default.createElement('img', { className: 'titlearrow', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-content pb-0 text-center' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '5'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data mid-border-mrgn' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'acrd-stc-red' },
                                                    'X'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'acrd-stc-red' },
                                                    'X'
                                                )
                                            )
                                        ),
                                        this.state.collapse[7] ? _react2.default.createElement(
                                            'div',
                                            null,
                                            _react2.default.createElement(
                                                'div',
                                                null,
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    'A cardiac risk profile\u2014or CRP\u2014gives you information about some of the factors that can put you at risk for heart disease\u2014things like elevated blood levels of cholesterol, triglycerides, and glucose (blood sugar).'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'stc-acrd-content stc-hide-acrd-container pt-0 text-center' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data' },
                                                    _react2.default.createElement('p', null),
                                                    _react2.default.createElement(
                                                        'ul',
                                                        { className: 'stc-data-ul-list' },
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Lipoprotein (A)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Apolipoproteins A1'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'High Sensitivity C-Reactive Protein (HSCRP)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Apolipoproteins B'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Apolipoproteins B/A1'
                                                            )
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data mid-border-mrgn' },
                                                    _react2.default.createElement('p', null)
                                                ),
                                                _react2.default.createElement('div', { className: 'acrd-stc-data' })
                                            )
                                        ) : ''
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'stc-accord-container' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-heading', onClick: this.toggle.bind(this, 8) },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Homocysteine'
                                            ),
                                            _react2.default.createElement('img', { className: 'titlearrow', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-content pb-0 text-center' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '1'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data mid-border-mrgn' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'acrd-stc-red' },
                                                    'X'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '1'
                                                )
                                            )
                                        ),
                                        this.state.collapse[8] ? _react2.default.createElement(
                                            'div',
                                            null,
                                            _react2.default.createElement(
                                                'div',
                                                null,
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    'Homocysteine is an amino acid that is produced by the human body, usually as a byproduct of consuming meat. Homocysteine is normally converted into other amino acids. An abnormal accumulation of homocysteine, which can be measured in the blood, can be a marker for the development of heart disease.'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'stc-acrd-content stc-hide-acrd-container pt-0 text-center' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data' },
                                                    _react2.default.createElement('p', null)
                                                ),
                                                _react2.default.createElement('div', { className: 'acrd-stc-data mid-border-mrgn' }),
                                                _react2.default.createElement('div', { className: 'acrd-stc-data' })
                                            )
                                        ) : ''
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'stc-accord-container' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-heading', onClick: this.toggle.bind(this, 9) },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Vitamin Profile'
                                            ),
                                            _react2.default.createElement('img', { className: 'titlearrow', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-content pb-0 text-center' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '3'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data mid-border-mrgn' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'acrd-stc-red' },
                                                    'X'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'acrd-stc-red' },
                                                    'X'
                                                )
                                            )
                                        ),
                                        this.state.collapse[9] ? _react2.default.createElement(
                                            'div',
                                            null,
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'stc-acrd-content stc-hide-acrd-container pt-0 text-center' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data' },
                                                    _react2.default.createElement(
                                                        'ul',
                                                        { className: 'stc-data-ul-list' },
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Folate'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Vitamin B12'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                '25-OH Vitamin D Total'
                                                            )
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data mid-border-mrgn' },
                                                    _react2.default.createElement('p', null)
                                                ),
                                                _react2.default.createElement('div', { className: 'acrd-stc-data' })
                                            )
                                        ) : ''
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'stc-accord-container' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-heading', onClick: this.toggle.bind(this, 10) },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Toxic Elements Profile'
                                            ),
                                            _react2.default.createElement('img', { className: 'titlearrow', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-content pb-0 text-center' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '9'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data mid-border-mrgn' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'acrd-stc-red' },
                                                    'X'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'acrd-stc-red' },
                                                    'X'
                                                )
                                            )
                                        ),
                                        this.state.collapse[10] ? _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-content stc-hide-acrd-container pt-0 text-center' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'ul',
                                                    { className: 'stc-data-ul-list' },
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Barium'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Cesium'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Cobolt'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Lead'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Cadmium'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Selenium'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Mercury'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Chromium'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Arsenic'
                                                        )
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data mid-border-mrgn' },
                                                _react2.default.createElement('p', null)
                                            ),
                                            _react2.default.createElement('div', { className: 'acrd-stc-data' })
                                        ) : ''
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'stc-accord-container' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-heading', onClick: this.toggle.bind(this, 11) },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Electrolytes'
                                            ),
                                            _react2.default.createElement('img', { className: 'titlearrow', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-content pb-0 text-center' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '2'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data mid-border-mrgn' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'acrd-stc-red' },
                                                    'X'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'acrd-stc-red' },
                                                    'X'
                                                )
                                            )
                                        ),
                                        this.state.collapse[11] ? _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-content stc-hide-acrd-container pt-0 text-center' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement('p', null),
                                                _react2.default.createElement(
                                                    'ul',
                                                    { className: 'stc-data-ul-list' },
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Sodium'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Chloride'
                                                        )
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data mid-border-mrgn' },
                                                _react2.default.createElement('p', null)
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement('p', null)
                                            )
                                        ) : ''
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'stc-accord-container' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-heading', onClick: this.toggle.bind(this, 12) },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Testosterone Total'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-content pb-0 text-center' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '1'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data mid-border-mrgn' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'acrd-stc-red' },
                                                    'X'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'acrd-stc-red' },
                                                    'X'
                                                )
                                            )
                                        ),
                                        this.state.collapse[12] ? _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-content stc-hide-acrd-container pt-0 text-center' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement('p', null)
                                            ),
                                            _react2.default.createElement('div', { className: 'acrd-stc-data mid-border-mrgn' }),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement('p', null)
                                            )
                                        ) : ''
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'stc-accord-container' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-heading', onClick: this.toggle.bind(this, 14) },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Arthritis Profile'
                                            ),
                                            _react2.default.createElement('img', { className: 'titlearrow', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-content pb-0 text-center' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '2'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data mid-border-mrgn' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'acrd-stc-red' },
                                                    'X'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'acrd-stc-red' },
                                                    'X'
                                                )
                                            )
                                        ),
                                        this.state.collapse[14] ? _react2.default.createElement(
                                            'div',
                                            null,
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'stc-acrd-content stc-hide-acrd-container pt-0 text-center' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data' },
                                                    _react2.default.createElement('p', null),
                                                    _react2.default.createElement(
                                                        'ul',
                                                        { className: 'stc-data-ul-list' },
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Anti Nuclear Antibodies(ANA)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Anti CCP(ACPP)'
                                                            )
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data mid-border-mrgn' },
                                                    _react2.default.createElement('p', null)
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data' },
                                                    _react2.default.createElement('p', null)
                                                )
                                            )
                                        ) : ''
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'stc-accord-container' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-heading', onClick: this.toggle.bind(this, 15) },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Thyroxine - T4 Free'
                                            ),
                                            _react2.default.createElement('img', { className: 'titlearrow', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-content pb-0 text-center' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '1'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data mid-border-mrgn' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'acrd-stc-red' },
                                                    'X'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'acrd-stc-red' },
                                                    'X'
                                                )
                                            )
                                        ),
                                        this.state.collapse[15] ? _react2.default.createElement(
                                            'div',
                                            null,
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'stc-acrd-content stc-hide-acrd-container pt-0 text-center' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data' },
                                                    _react2.default.createElement('p', null),
                                                    _react2.default.createElement(
                                                        'ul',
                                                        { className: 'stc-data-ul-list' },
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'This test is advised when the results of a thyroid-stimulating hormone test are unusual. It is performed to determine the underlying cause affecting the level of thyroid hormone in the body.'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Some ailments that may affect the functioning of the thyroid are:'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Anti CCP(ACPP)'
                                                            )
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data mid-border-mrgn' },
                                                    _react2.default.createElement('p', null)
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data' },
                                                    _react2.default.createElement('p', null)
                                                )
                                            )
                                        ) : ''
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'stc-accord-container' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-heading', onClick: this.toggle.bind(this, 16) },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Triiodothyronine (T3)'
                                            ),
                                            _react2.default.createElement('img', { className: 'titlearrow', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-content pb-0 text-center' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '1'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data mid-border-mrgn' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'acrd-stc-red' },
                                                    'X'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'acrd-stc-red' },
                                                    'X'
                                                )
                                            )
                                        ),
                                        this.state.collapse[16] ? _react2.default.createElement(
                                            'div',
                                            null,
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'stc-acrd-content stc-hide-acrd-container pt-0 text-center' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data' },
                                                    _react2.default.createElement('p', null),
                                                    _react2.default.createElement(
                                                        'ul',
                                                        { className: 'stc-data-ul-list' },
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Thyroid produces a hormone called triiodothyronine or T3 which along with other hormones regulate body\'s temperature, metabolism and heart rate. A T3 test is conducted to evaluate the levels of this hormone in the blood and diagnose a thyroid problem.'
                                                            )
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data mid-border-mrgn' },
                                                    _react2.default.createElement('p', null)
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data' },
                                                    _react2.default.createElement('p', null)
                                                )
                                            )
                                        ) : ''
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'stc-accord-container' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-heading', onClick: this.toggle.bind(this, 17) },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Lipase'
                                            ),
                                            _react2.default.createElement('img', { className: 'titlearrow', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-content pb-0 text-center' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '1'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data mid-border-mrgn' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'acrd-stc-red' },
                                                    'X'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'acrd-stc-red' },
                                                    'X'
                                                )
                                            )
                                        ),
                                        this.state.collapse[17] ? _react2.default.createElement(
                                            'div',
                                            null,
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'stc-acrd-content stc-hide-acrd-container pt-0 text-center' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data' },
                                                    _react2.default.createElement('p', null),
                                                    _react2.default.createElement(
                                                        'ul',
                                                        { className: 'stc-data-ul-list' },
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Lipase test is conducted as an initial diagnosis for the conditions like acute pancreatic, celiac disease and pancreatic cancer.'
                                                            )
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data mid-border-mrgn' },
                                                    _react2.default.createElement('p', null)
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data' },
                                                    _react2.default.createElement('p', null)
                                                )
                                            )
                                        ) : ''
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'stc-accord-container' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-heading', onClick: this.toggle.bind(this, 18) },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Amylase Serum'
                                            ),
                                            _react2.default.createElement('img', { className: 'titlearrow', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-content pb-0 text-center' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '1'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data mid-border-mrgn' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'acrd-stc-red' },
                                                    'X'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'acrd-stc-red' },
                                                    'X'
                                                )
                                            )
                                        ),
                                        this.state.collapse[18] ? _react2.default.createElement(
                                            'div',
                                            null,
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'stc-acrd-content stc-hide-acrd-container pt-0 text-center' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data' },
                                                    _react2.default.createElement('p', null),
                                                    _react2.default.createElement(
                                                        'ul',
                                                        { className: 'stc-data-ul-list' },
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'This test is usually advised if the doctor suspects pancreatitis. Increase in the level of this enzyme may cause pancreatic disorders such as pancreatic cancer, pancreatic pseudocyst, or pancreatic abscess.'
                                                            )
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data mid-border-mrgn' },
                                                    _react2.default.createElement('p', null)
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data' },
                                                    _react2.default.createElement('p', null)
                                                )
                                            )
                                        ) : ''
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'stc-accord-container' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-heading', onClick: this.toggle.bind(this, 19) },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'TSH - Thyroid Stimulating Hormone'
                                            ),
                                            _react2.default.createElement('img', { className: 'titlearrow', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-content pb-0 text-center' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '1'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data mid-border-mrgn' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'acrd-stc-red' },
                                                    'X'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'acrd-stc-red' },
                                                    'X'
                                                )
                                            )
                                        ),
                                        this.state.collapse[19] ? _react2.default.createElement(
                                            'div',
                                            null,
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'stc-acrd-content stc-hide-acrd-container pt-0 text-center' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data' },
                                                    _react2.default.createElement('p', null),
                                                    _react2.default.createElement(
                                                        'ul',
                                                        { className: 'stc-data-ul-list' },
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Anti Nuclear Antibodies(ANA)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Anti CCP(ACPP)'
                                                            )
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data mid-border-mrgn' },
                                                    _react2.default.createElement('p', null)
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data' },
                                                    _react2.default.createElement('p', null)
                                                )
                                            )
                                        ) : ''
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'stc-accord-container' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-heading', onClick: this.toggle.bind(this, 20) },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Ferritin'
                                            ),
                                            _react2.default.createElement('img', { className: 'titlearrow', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-content pb-0 text-center' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    '1'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data mid-border-mrgn' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'acrd-stc-red' },
                                                    'X'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'acrd-stc-red' },
                                                    'X'
                                                )
                                            )
                                        ),
                                        this.state.collapse[20] ? _react2.default.createElement(
                                            'div',
                                            null,
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'stc-acrd-content stc-hide-acrd-container pt-0 text-center' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data' },
                                                    _react2.default.createElement('p', null),
                                                    _react2.default.createElement(
                                                        'ul',
                                                        { className: 'stc-data-ul-list' },
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'The test measures the amount of TSH in the body to \u2013'
                                                            ),
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                '\u2022\xA0\xA0\xA0 Check for symptoms of thyroid disease'
                                                            ),
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                '\u2022\xA0\xA0\xA0 Track the improvement of an ongoing thyroid treatment'
                                                            ),
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                '\u2022\xA0\xA0\xA0 Screen for thyroid symptoms during pregnancy'
                                                            ),
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                '\u2022\xA0\xA0\xA0 Screen for thyroid related symptoms in infants'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                _react2.default.createElement(
                                                                    'strong',
                                                                    null,
                                                                    'What it measures?'
                                                                )
                                                            ),
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'The test is used to measure the amount of Thyroid Stimulating Hormone in the blood and check if the thyroid gland is functioning properly. The test is a diagnostic measure for conditions like Hyperthyroidism and Hypothyroidism.'
                                                            )
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data mid-border-mrgn' },
                                                    _react2.default.createElement('p', null)
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'acrd-stc-data' },
                                                    _react2.default.createElement('p', null)
                                                )
                                            )
                                        ) : ''
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(_RightBar2.default, { extraClass: ' chat-float-btn-2', msgTemplate: 'gold_general_template' })
                    )
                ),
                _react2.default.createElement(_footer2.default, { footerData: this.state.footerData })
            );
        }
    }]);

    return LabView;
}(_react2.default.Component);

exports.default = LabView;

/***/ }),

/***/ "./dev/js/components/diagnosis/healthPackage/index.js":
/*!************************************************************!*\
  !*** ./dev/js/components/diagnosis/healthPackage/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HealthPackage = __webpack_require__(/*! ./HealthPackage.js */ "./dev/js/components/diagnosis/healthPackage/HealthPackage.js");

var _HealthPackage2 = _interopRequireDefault(_HealthPackage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _HealthPackage2.default;

/***/ }),

/***/ "./dev/js/containers/diagnosis/HealthPackage.js":
/*!******************************************************!*\
  !*** ./dev/js/containers/diagnosis/HealthPackage.js ***!
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

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _index2 = __webpack_require__(/*! ../../components/diagnosis/healthPackage/index */ "./dev/js/components/diagnosis/healthPackage/index.js");

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HealthPackage = function (_React$Component) {
    _inherits(HealthPackage, _React$Component);

    function HealthPackage(props) {
        _classCallCheck(this, HealthPackage);

        var _this = _possibleConstructorReturn(this, (HealthPackage.__proto__ || Object.getPrototypeOf(HealthPackage)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(HealthPackage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_index3.default, this.props);
        }
    }]);

    return HealthPackage;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, passedProps) {
    var offerList = state.USER.offerList;


    return {
        offerList: offerList
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        getOfferList: function getOfferList(lat, long) {
            return dispatch((0, _index.getOfferList)(lat, long));
        },
        toggleOPDCriteria: function toggleOPDCriteria(type, criteria, forceAdd, filter) {
            return dispatch((0, _index.toggleOPDCriteria)(type, criteria, forceAdd, filter));
        },
        toggleDiagnosisCriteria: function toggleDiagnosisCriteria(type, criteria, forceAdd, filter) {
            return dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria, forceAdd, filter));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(HealthPackage);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL2hlYWx0aFBhY2thZ2UvSGVhbHRoUGFja2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvaGVhbHRoUGFja2FnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9kaWFnbm9zaXMvSGVhbHRoUGFja2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGF0aC1icm93c2VyaWZ5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvZXMvaW5kZXguanMiXSwibmFtZXMiOlsiTG9hZGVyIiwicHJvcHMiLCJjbGFzc1R5cGUiLCJpRnJhbWVQb3B1cCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiTGFiVmlldyIsInN0YXRlIiwiY29sbGFwc2UiLCJleHBhbmRDbGljayIsImV4cGFuZFRleHQiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInNlbGVjdGVkTG9jYXRpb24iLCJsYXQiLCJsb25nIiwiZ2VvbWV0cnkiLCJsb2NhdGlvbiIsImxuZyIsImdldE9mZmVyTGlzdCIsImluZGV4Iiwic2V0U3RhdGUiLCJtYXAiLCJ4IiwidXJsIiwidHJhY2tpbmdOYW1lIiwiZGF0YSIsIkdUTSIsImdldFVzZXJJZCIsInNlbmRFdmVudCIsImhyZWYiLCJoaXN0b3J5IiwicHVzaCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJvZmZlckxpc3QiLCJmaWx0ZXIiLCJzbGlkZXJfbG9jYXRpb24iLCJsZW5ndGgiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJmbGV4IiwibWFyZ2luUmlnaHQiLCJ2aWV3QWxsQ2xpY2siLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsInBvc2l0aW9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYm9va05vd0NsaWNrZWQiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJleHBhbmRBbGwiLCJiaW5kIiwidG9nZ2xlIiwiQVNTRVRTX0JBU0VfVVJMIiwiZm9vdGVyRGF0YSIsIkhlYWx0aFBhY2thZ2UiLCJtYXBTdGF0ZVRvUHJvcHMiLCJwYXNzZWRQcm9wcyIsIlVTRVIiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInRvZ2dsZU9QRENyaXRlcmlhIiwidHlwZSIsImNyaXRlcmlhIiwiZm9yY2VBZGQiLCJ0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFDRixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLCtHQUNUQSxLQURTO0FBRWxCOzs7O2lDQUVROztBQUVMLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFXLEtBQUtBLEtBQUwsQ0FBV0MsU0FBWCxJQUF3QixnQkFBeEM7QUFDSSx1REFBSyxXQUFVLFdBQWYsR0FESjtBQUdRLHFCQUFLRCxLQUFMLENBQVdFLFdBQVgsR0FDSTtBQUFBO0FBQUEsc0JBQUcsV0FBVSxlQUFiO0FBQUE7QUFBQSxpQkFESixHQUMrRTtBQUp2RixhQURKO0FBU0g7Ozs7RUFoQmdCQyxnQkFBTUMsUzs7a0JBbUJaTCxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQmY7Ozs7OztrQkFFZUEsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7OztBQUVBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFTU0sTzs7O0FBQ0YscUJBQVlMLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzSEFDVEEsS0FEUzs7QUFFZixj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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN1NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJDO0FBQ0Y7QUFDVjtBQUNGO0FBQ007QUFDRjtBQUNKO0FBQ0Y7QUFDSTtBQUNGO0FBQ2M7QUFDRjtBQUNWO0FBQ0Y7QUFDYztBQUNGO0FBQ0o7QUFDRjtBQUNJIiwiZmlsZSI6Ijg1LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIExvYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc1R5cGUgfHwgXCJsb2FkZXJDaXJjdWxhclwifSA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcC1sb2FkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaUZyYW1lUG9wdXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0xMFwiPlJlZGlyZWN0aW5nIHlvdSB0byBQaGFybWVhc3kgd2Vic2l0ZS4uLjwvcD4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyXG4iLCJpbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvTG9hZGVyJ1xuXG5pbXBvcnQgTGVmdEJhciBmcm9tICcuLi8uLi9jb21tb25zL0xlZnRCYXInXG5pbXBvcnQgUmlnaHRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9SaWdodEJhcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgSGVsbWV0VGFncyBmcm9tICcuLi8uLi9jb21tb25zL0hlbG1ldFRhZ3MnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi8uLi9jb25maWcnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvSG9tZS9mb290ZXInXG5pbXBvcnQgQmFubmVyQ2Fyb3VzZWwgZnJvbSAnLi4vLi4vY29tbW9ucy9Ib21lL2Jhbm5lckNhcm91c2VsJztcblxuY2xhc3MgTGFiVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjb2xsYXBzZTogW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdLFxuICAgICAgICAgICAgZXhwYW5kQ2xpY2s6IHRydWUsXG4gICAgICAgICAgICBleHBhbmRUZXh0OiAnRXhwYW5kIEFsbCdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzZWxlY3RlZExvY2F0aW9uID0gJydcbiAgICAgICAgbGV0IGxhdCA9IDI4LjY0NDgwMFxuICAgICAgICBsZXQgbG9uZyA9IDc3LjIxNjcyMVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKSB7XG4gICAgICAgICAgICBzZWxlY3RlZExvY2F0aW9uID0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uO1xuICAgICAgICAgICAgbGF0ID0gc2VsZWN0ZWRMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sYXRcbiAgICAgICAgICAgIGxvbmcgPSBzZWxlY3RlZExvY2F0aW9uLmdlb21ldHJ5LmxvY2F0aW9uLmxuZ1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBsYXQgPT09ICdmdW5jdGlvbicpIGxhdCA9IGxhdCgpXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxvbmcgPT09ICdmdW5jdGlvbicpIGxvbmcgPSBsb25nKClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0T2ZmZXJMaXN0KGxhdCwgbG9uZyk7XG4gICAgfVxuXG4gICAgdG9nZ2xlKGluZGV4KSB7XG4gICAgICAgIGxldCBjb2xsYXBzZSA9IFsuLi50aGlzLnN0YXRlLmNvbGxhcHNlXVxuICAgICAgICBjb2xsYXBzZVtpbmRleF0gPSAhY29sbGFwc2VbaW5kZXhdXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb2xsYXBzZSB9KVxuICAgIH1cblxuICAgIGV4cGFuZEFsbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZXhwYW5kQ2xpY2spIHtcbiAgICAgICAgICAgIGxldCBjb2xsYXBzZSA9IHRoaXMuc3RhdGUuY29sbGFwc2UubWFwKCh4KSA9PiB0cnVlKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbGxhcHNlIH0pXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXhwYW5kQ2xpY2s6ICF0aGlzLnN0YXRlLmV4cGFuZENsaWNrLCBleHBhbmRUZXh0OiAnQ29sbGFwc2UgQWxsJyB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjb2xsYXBzZSA9IHRoaXMuc3RhdGUuY29sbGFwc2UubWFwKCh4KSA9PiBmYWxzZSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb2xsYXBzZSB9KVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGV4cGFuZENsaWNrOiAhdGhpcy5zdGF0ZS5leHBhbmRDbGljaywgZXhwYW5kVGV4dDogJ0V4cGFuZCBBbGwnIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYm9va05vd0NsaWNrZWQodXJsLCB0cmFja2luZ05hbWUpIHtcblxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiB0cmFja2luZ05hbWUsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogdHJhY2tpbmdOYW1lXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZpZXdBbGxDbGljaygpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9mdWxsLWJvZHktY2hlY2t1cC1oZWFsdGgtcGFja2FnZXMnKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciAvPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250YWluZXItdG9wLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWxtZXRUYWdzIHRhZ3NEYXRhPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdDb21wYXJlIEZ1bGwgYm9keSBIZWFsdGggQ2hlY2t1cCBQYWNrYWdlcyBmcm9tIFRvcCBMYWJzIHwgQm9vayBPbmxpbmUgJiBTYXZlIHVwdG8gNTAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NvbXBhcmUgYW5kIGJvb2sgZnVsbCBib2R5IGhlYWx0aCBjaGVja3VwIHBhY2thZ2VzIGZyb20gdG9wIGxhYnMgYXQgZG9jcHJpbWUuY29tLiBBdmFpbCBleGNsdXNpdmUgZGlzY291bnRzICYgc2F2ZSB1cHRvIDUwJS4gR2V0IGZyZWUgaG9tZSBzYW1wbGUgY29sbGVjdGlvbiBhbmQgb25saW5lIHJlcG9ydHMgb24gdGltZS4nXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTcgY29sLWxnLTcgY2VudGVyLWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vZmZlckxpc3QgJiYgdGhpcy5wcm9wcy5vZmZlckxpc3QuZmlsdGVyKHggPT4geC5zbGlkZXJfbG9jYXRpb24gPT09ICdoZWFsdGhfcGFja2FnZV9jb21wYXJlX3BhZ2UnKS5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFubmVyQ2Fyb3VzZWwgey4uLnRoaXMucHJvcHN9IHNsaWRlckxvY2F0aW9uPVwiaGVhbHRoX3BhY2thZ2VfY29tcGFyZV9wYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1ydC0xMFwiIHN0eWxlPXt7IHBhZGRpbmc6ICcwIDE1cHgnIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZ3LTUwMFwiIHN0eWxlPXt7IGZvbnRTaXplOiAxNiwgZmxleDogMSwgbWFyZ2luUmlnaHQ6IDQgfX0+VG9wIGZ1bGwgYm9keSBjaGVja3VwIHBhY2thZ2VzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnZpZXdBbGxDbGljaygpfSBjbGFzc05hbWU9XCJ2dy1hbGwtc3RhdGljIHRleHQtcHJpbWFyeSBmdy01MDBcIj5WaWV3IGFsbDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1ydC0xMCBjdC1wcm9maWxlIHNraW4td2hpdGUgYm9yZGVyLWJvdHRvbS1yYWRpb3VzIGdvbGQtcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0aWMtcGstY29udGFpbmVyIHN0aWNreS1way1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGljLXBrZy10b3AtY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtcGtnLXN1YlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdGMtc3ViLXBhcmFcIj5Qcm8gQWFyb2d5YW0gMS43IChUaHlyb2NhcmUpIDxiciAvPihJbmNsdWRlcyA4NiB0ZXN0cyk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN0Yy1wcmljZS1jdXRcIj7igrkgMjAwMDxzcGFuPuKCuSAyNDAwPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0aWMtcGtnLXRvcC1jb2x1bW4gc3RjLW1pZC1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtcGtnLXN1YlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdGMtc3ViLXBhcmFcIj5BYXJvZ3lhbSBCXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFRoeXJvY2FyZSkgPGJyIC8+KEluY2x1ZGVzIDYwIHRlc3RzKTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RjLXByaWNlLWN1dFwiPuKCuSA0OTkgPHNwYW4+4oK5IDc1MDwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGljLXBrZy10b3AtY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtcGtnLXN1YlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdGMtc3ViLXBhcmFcIj5NRVQgSGVhbHRoeSBZb3V0aCAoMjUgWVJTICYgQWJvdmUpIDxiciAvPihJbmNsdWRlcyA1NiB0ZXN0cyk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN0Yy1wcmljZS1jdXRcIj7igrkgMTA5OSA8c3Bhbj7igrkgMzY0MDwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGljLXBrLWNvbnRhaW5lciBzdGlja3ktcGstY29udGFpbmVyLTJcIiBzdHlsZT17eyBwYWRkaW5nVG9wOiAwLCBwYWRkaW5nQm90dG9tOiAzMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGljLXBrZy10b3AtY29sdW1uXCIgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtb2Zmci1jcG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RjLW9mZi1wYXJhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxNiUgT0ZGICsg4oK5IDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT0ZGIENvdXBvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdGMtZnJlZS1waWNrXCI+RnJlZSBIb21lIFBpY2t1cDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2xhYi9zZWFyY2hyZXN1bHRzP3Rlc3RfaWRzPTEyMzg3XCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9va05vd0NsaWNrZWQoJy9sYWIvc2VhcmNocmVzdWx0cz90ZXN0X2lkcz0xMjM4NycsICdUb3Bib29rTm93Q2xpY2tlZEJsb2NrMScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPVwic3RjLWJvb2stYnRuXCI+Qm9vayBOb3c8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1bGFyLXR4dFwiIHN0eWxlPXt7IHRvcDogJ3Vuc2V0JywgcmlnaHQ6ICd1bnNldCcsIGJvdHRvbTogJy0yNnB4JywgbGVmdDogJzUwJScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwXCI+UG9wdWxhcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0aWMtcGtnLXRvcC1jb2x1bW4gc3RjLW1pZC1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtb2Zmci1jcG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RjLW9mZi1wYXJhXCI+MzMlIE9GRiArIOKCuSAxMDAgT0ZGIENvdXBvbjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdGMtZnJlZS1waWNrXCI+RnJlZSBIb21lIFBpY2t1cDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2xhYi9zZWFyY2hyZXN1bHRzP3Rlc3RfaWRzPTEyMjI3XCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9va05vd0NsaWNrZWQoJy9sYWIvc2VhcmNocmVzdWx0cz90ZXN0X2lkcz0xMjIyNycsICdUb3Bib29rTm93Q2xpY2tlZEJsb2NrMicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3RjLWJvb2stYnRuXCI+Qm9vayBOb3c8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGljLXBrZy10b3AtY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtb2Zmci1jcG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RjLW9mZi1wYXJhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA2OSUgT0ZGICsg4oK5IDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT0ZGIENvdXBvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdGMtZnJlZS1waWNrXCI+RnJlZSBIb21lIFBpY2t1cDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2xhYi9zZWFyY2hyZXN1bHRzP3Rlc3RfaWRzPTExNzIyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib29rTm93Q2xpY2tlZCgnL2xhYi9zZWFyY2hyZXN1bHRzP3Rlc3RfaWRzPTExNzIyJywgJ1RvcGJvb2tOb3dDbGlja2VkQmxvY2szJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3RjLWJvb2stYnRuXCI+Qm9vayBOb3c8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmRuLWNvbnRhbmluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJzdGMtZXhwbmQtYnRuIG1ydC0xMFwiIG9uQ2xpY2s9e3RoaXMuZXhwYW5kQWxsLmJpbmQodGhpcyl9Pnt0aGlzLnN0YXRlLmV4cGFuZFRleHR9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjY29yZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWhlYWRpbmcgc3RjLW5vLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5QcmVwYXJhdGlvbjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA4LTEwIGhycyBvZiBmYXN0aW5nIHJlcXVpcmVkIGJlZm9yZSBzYW1wbGUgY29sbGVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOC0xMCBocnMgb2YgZmFzdGluZyByZXF1aXJlZCBiZWZvcmUgc2FtcGxlIGNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOC0xMCBocnMgb2YgZmFzdGluZyByZXF1aXJlZCBiZWZvcmUgc2FtcGxlIGNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjY29yZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWhlYWRpbmcgc3RjLW5vLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UZXN0cyBJbmNsdWRlZCA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgODZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDYwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDU2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY2NvcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1oZWFkaW5nXCIgb25DbGljaz17dGhpcy50b2dnbGUuYmluZCh0aGlzLCAwKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNCQyBIYWVtb2dyYW0gVGVzdHM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGFwc2VbMF0gPyA8aW1nIGNsYXNzTmFtZT1cInRpdGxlYXJyb3dcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz4gOiA8aW1nIGNsYXNzTmFtZT1cInRpdGxlYXJyb3dcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBwYi0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb2xsYXBzZVswXSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4+Q29tcGxldGUgQmxvb2QgQ291bnQgKENCQykgaXMgYSBibG9vZCB0ZXN0IHRoYXQgbWVhc3VyZXMgUmVkIGJsb29kIGNlbGxzIChSQkMpLCBXaGl0ZSBibG9vZCBjZWxscyAoV0JDKSwgUGxhdGVsZXRzIChQTFRzKSwgSGVtb2dsb2JpbiAoSGIpLCBhbmQgSGVtYXRvY3JpdCAoSGN0KSBpbiB0aGUgYmxvb2QuIFRoaXMgdGVzdCBpcyB1c2VkIHRvIGRldGVybWluZSB0aGUgb3ZlcmFsbCBoZWFsdGggYW5kIHNjcmVlbiBmb3IgYW55IGRpc2Vhc2VzIHRoYXQgYWZmZWN0IHRoZSBibG9vZCBjZWxscy48L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHN0Yy1oaWRlLWFjcmQtY29udGFpbmVyIHB0LTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8cD5Db21wbGV0ZSBCbG9vZCBDb3VudCAoQ0JDKSBpcyBhIGJsb29kIHRlc3QgdGhhdCBtZWFzdXJlcyBSZWQgYmxvb2QgY2VsbHMgKFJCQyksIFdoaXRlIGJsb29kIGNlbGxzIChXQkMpLCBQbGF0ZWxldHMgKFBMVHMpLCBIZW1vZ2xvYmluIChIYiksIGFuZCBIZW1hdG9jcml0IChIY3QpIGluIHRoZSBibG9vZC4gVGhpcyB0ZXN0IGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSBvdmVyYWxsIGhlYWx0aCBhbmQgc2NyZWVuIGZvciBhbnkgZGlzZWFzZXMgdGhhdCBhZmZlY3QgdGhlIGJsb29kIGNlbGxzLlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RjLWRhdGEtdWwtbGlzdFwiPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VG90YWwgUkJDPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlJlZCBDZWxsIERpc3RyaWJ1dGlvbiBXaWR0aCAoUkRXLUNWKTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5SZWQgQ2VsbCBEaXN0cmlidXRpb24gV2lkdGggLSBTRChSRFctU0QpPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlBsYXRlbGV0IFRvIExhcmdlIENlbGwgUmF0aW8gKFBMQ1IpPC9wPjwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxhdGVsZXQgQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVhbiBDb3JwdXNjdWxhciBIZW1vZ2xvYmluIChNQ0gpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lYW4gQ29ycC5IZW1vLkNvbmMgKE1DSEMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lYW4gQ29ycHVzY3VsYXIgVm9sdW1lIChNQ1YpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vbm9jeXRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZWFuIFBsYXRlbGV0IFZvbHVtZSAoTVBWKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXV0cm9waGlscyAoTlApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51Y2xlYXRlZCBSZWQgQmxvb2QgQ2VsbHMgKE5SQkMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsYXRlbGV0Y3JpdCAoUENUKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZW1hdG9jcml0IChQQ1YpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsYXRlbGV0IERpc3RyaWJ1dGlvbiBXaWR0aCAoUERXKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZW1vZ2xvYmluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVvc2lub3BoaWxzIChFUClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW1tYXR1cmUgR3JhbnVsb2N5dGVzIChJRylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmFzb3BoaWxzIC0gQWJzb2x1dGUgQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW9zaW5vcGhpbHMgLSBBYnNvbHV0ZSBDb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMeW1waG9jeXRlcy0gQWJzb2x1dGUgQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9ub2N5dGVzLSBBYnNvbHV0ZSBDb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXV0cm9waGlscy0gQWJzb2x1dGUgQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmFzb3BoaWxzIChCUylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTHltcGhvY3l0ZSBQZXJjZW50YWdlIChMQyUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvdGFsIExldWNvY3l0ZXMgQ291bnQgKFRMQylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVjbGVhdGVkIFJlZCBCbG9vZCBDZWxscyAoTlJCQyUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEltbWF0dXJlIEdyYW51bG9jeXRlIFBlcmNlbnRhZ2UoSUclKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxwPkNvbXBsZXRlIEJsb29kIENvdW50IChDQkMpIGlzIGEgYmxvb2QgdGVzdCB0aGF0IG1lYXN1cmVzIFJlZCBibG9vZCBjZWxscyAoUkJDKSwgV2hpdGUgYmxvb2QgY2VsbHMgKFdCQyksIFBsYXRlbGV0cyAoUExUcyksIEhlbW9nbG9iaW4gKEhiKSwgYW5kIEhlbWF0b2NyaXQgKEhjdCkgaW4gdGhlIGJsb29kLiBUaGlzIHRlc3QgaXMgdXNlZCB0byBkZXRlcm1pbmUgdGhlIG92ZXJhbGwgaGVhbHRoIGFuZCBzY3JlZW4gZm9yIGFueSBkaXNlYXNlcyB0aGF0IGFmZmVjdCB0aGUgYmxvb2QgY2VsbHMuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0XCI+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5Ub3RhbCBSQkM8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+UmVkIENlbGwgRGlzdHJpYnV0aW9uIFdpZHRoIChSRFctQ1YpPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlJlZCBDZWxsIERpc3RyaWJ1dGlvbiBXaWR0aCAtIFNEKFJEVy1TRCk8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+UGxhdGVsZXQgVG8gTGFyZ2UgQ2VsbCBSYXRpbyAoUExDUik8L3A+PC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGF0ZWxldCBDb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZWFuIENvcnB1c2N1bGFyIEhlbW9nbG9iaW4gKE1DSClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVhbiBDb3JwLkhlbW8uQ29uYyAoTUNIQylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVhbiBDb3JwdXNjdWxhciBWb2x1bWUgKE1DVilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9ub2N5dGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lYW4gUGxhdGVsZXQgVm9sdW1lIChNUFYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5ldXRyb3BoaWxzIChOUClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVjbGVhdGVkIFJlZCBCbG9vZCBDZWxscyAoTlJCQylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxhdGVsZXRjcml0IChQQ1QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlbWF0b2NyaXQgKFBDVilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxhdGVsZXQgRGlzdHJpYnV0aW9uIFdpZHRoIChQRFcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlbW9nbG9iaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW9zaW5vcGhpbHMgKEVQKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbW1hdHVyZSBHcmFudWxvY3l0ZXMgKElHKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCYXNvcGhpbHMgLSBBYnNvbHV0ZSBDb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFb3Npbm9waGlscyAtIEFic29sdXRlIENvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEx5bXBob2N5dGVzLSBBYnNvbHV0ZSBDb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb25vY3l0ZXMtIEFic29sdXRlIENvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5ldXRyb3BoaWxzLSBBYnNvbHV0ZSBDb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCYXNvcGhpbHMgKEJTKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMeW1waG9jeXRlIFBlcmNlbnRhZ2UgKExDJSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG90YWwgTGV1Y29jeXRlcyBDb3VudCAoVExDKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdWNsZWF0ZWQgUmVkIEJsb29kIENlbGxzIChOUkJDJSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW1tYXR1cmUgR3JhbnVsb2N5dGUgUGVyY2VudGFnZShJRyUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8cD5Db21wbGV0ZSBCbG9vZCBDb3VudCAoQ0JDKSBpcyBhIGJsb29kIHRlc3QgdGhhdCBtZWFzdXJlcyBSZWQgYmxvb2QgY2VsbHMgKFJCQyksIFdoaXRlIGJsb29kIGNlbGxzIChXQkMpLCBQbGF0ZWxldHMgKFBMVHMpLCBIZW1vZ2xvYmluIChIYiksIGFuZCBIZW1hdG9jcml0IChIY3QpIGluIHRoZSBibG9vZC4gVGhpcyB0ZXN0IGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSBvdmVyYWxsIGhlYWx0aCBhbmQgc2NyZWVuIGZvciBhbnkgZGlzZWFzZXMgdGhhdCBhZmZlY3QgdGhlIGJsb29kIGNlbGxzLlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RjLWRhdGEtdWwtbGlzdFwiPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VG90YWwgUkJDPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlJlZCBDZWxsIERpc3RyaWJ1dGlvbiBXaWR0aCAoUkRXLUNWKTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5SZWQgQ2VsbCBEaXN0cmlidXRpb24gV2lkdGggLSBTRChSRFctU0QpPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlBsYXRlbGV0IFRvIExhcmdlIENlbGwgUmF0aW8gKFBMQ1IpPC9wPjwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxhdGVsZXQgQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVhbiBDb3JwdXNjdWxhciBIZW1vZ2xvYmluIChNQ0gpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lYW4gQ29ycC5IZW1vLkNvbmMgKE1DSEMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lYW4gQ29ycHVzY3VsYXIgVm9sdW1lIChNQ1YpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vbm9jeXRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZWFuIFBsYXRlbGV0IFZvbHVtZSAoTVBWKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXV0cm9waGlscyAoTlApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51Y2xlYXRlZCBSZWQgQmxvb2QgQ2VsbHMgKE5SQkMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsYXRlbGV0Y3JpdCAoUENUKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZW1hdG9jcml0IChQQ1YpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsYXRlbGV0IERpc3RyaWJ1dGlvbiBXaWR0aCAoUERXKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZW1vZ2xvYmluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVvc2lub3BoaWxzIChFUClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW1tYXR1cmUgR3JhbnVsb2N5dGVzIChJRylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmFzb3BoaWxzIC0gQWJzb2x1dGUgQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW9zaW5vcGhpbHMgLSBBYnNvbHV0ZSBDb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMeW1waG9jeXRlcy0gQWJzb2x1dGUgQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9ub2N5dGVzLSBBYnNvbHV0ZSBDb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXV0cm9waGlscy0gQWJzb2x1dGUgQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmFzb3BoaWxzIChCUylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTHltcGhvY3l0ZSBQZXJjZW50YWdlIChMQyUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvdGFsIExldWNvY3l0ZXMgQ291bnQgKFRMQylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVjbGVhdGVkIFJlZCBCbG9vZCBDZWxscyAoTlJCQyUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEltbWF0dXJlIEdyYW51bG9jeXRlIFBlcmNlbnRhZ2UoSUclKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjY29yZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWhlYWRpbmdcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsIDE1KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNob2xlc3Rlcm9sLVRvdGFsIFNlcnVtPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInRpdGxlYXJyb3dcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgcGItMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjcmQtc3RjLXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGFwc2VbMTVdID8gPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHN0Yy1oaWRlLWFjcmQtY29udGFpbmVyIHB0LTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkEgXCJtYWxlIGhvcm1vbmVcIiAtLSBhIHNleCBob3Jtb25lIHByb2R1Y2VkIGJ5IHRoZSB0ZXN0ZXMgdGhhdCBlbmNvdXJhZ2VzIHRoZSBkZXZlbG9wbWVudCBvZiBtYWxlIHNleHVhbCBjaGFyYWN0ZXJpc3RpY3MsIHN0aW11bGF0ZXMgdGhlIGFjdGl2aXR5IG9mIHRoZSBtYWxlIHNlY29uZGFyeSBzZXggY2hhcmFjdGVyaXN0aWNzLCBhbmQgcHJldmVudHMgY2hhbmdlcyBpbiB0aGVtIGZvbGxvd2luZyBjYXN0cmF0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjY29yZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWhlYWRpbmdcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsIDE2KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNHUFQgQUxUPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInRpdGxlYXJyb3dcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgcGItMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjcmQtc3RjLXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGFwc2VbMTZdID8gPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHN0Yy1oaWRlLWFjcmQtY29udGFpbmVyIHB0LTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkEgXCJtYWxlIGhvcm1vbmVcIiAtLSBhIHNleCBob3Jtb25lIHByb2R1Y2VkIGJ5IHRoZSB0ZXN0ZXMgdGhhdCBlbmNvdXJhZ2VzIHRoZSBkZXZlbG9wbWVudCBvZiBtYWxlIHNleHVhbCBjaGFyYWN0ZXJpc3RpY3MsIHN0aW11bGF0ZXMgdGhlIGFjdGl2aXR5IG9mIHRoZSBtYWxlIHNlY29uZGFyeSBzZXggY2hhcmFjdGVyaXN0aWNzLCBhbmQgcHJldmVudHMgY2hhbmdlcyBpbiB0aGVtIGZvbGxvd2luZyBjYXN0cmF0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjY29yZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWhlYWRpbmdcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsIDE3KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlJvdXRpbmUgVXJpbmUgQW5hbHlzaXMgKFJVQSk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidGl0bGVhcnJvd1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBwYi0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhY3JkLXN0Yy1yZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb2xsYXBzZVsxN10gPyA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgc3RjLWhpZGUtYWNyZC1jb250YWluZXIgcHQtMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QSBcIm1hbGUgaG9ybW9uZVwiIC0tIGEgc2V4IGhvcm1vbmUgcHJvZHVjZWQgYnkgdGhlIHRlc3RlcyB0aGF0IGVuY291cmFnZXMgdGhlIGRldmVsb3BtZW50IG9mIG1hbGUgc2V4dWFsIGNoYXJhY3RlcmlzdGljcywgc3RpbXVsYXRlcyB0aGUgYWN0aXZpdHkgb2YgdGhlIG1hbGUgc2Vjb25kYXJ5IHNleCBjaGFyYWN0ZXJpc3RpY3MsIGFuZCBwcmV2ZW50cyBjaGFuZ2VzIGluIHRoZW0gZm9sbG93aW5nIGNhc3RyYXRpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNjb3JkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtaGVhZGluZ1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgMTgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2VydW0gQ3JlYXRpbmluZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ0aXRsZWFycm93XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHBiLTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhY3JkLXN0Yy1yZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjcmQtc3RjLXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhcHNlWzE4XSA/IDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBzdGMtaGlkZS1hY3JkLWNvbnRhaW5lciBwdC0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BIFwibWFsZSBob3Jtb25lXCIgLS0gYSBzZXggaG9ybW9uZSBwcm9kdWNlZCBieSB0aGUgdGVzdGVzIHRoYXQgZW5jb3VyYWdlcyB0aGUgZGV2ZWxvcG1lbnQgb2YgbWFsZSBzZXh1YWwgY2hhcmFjdGVyaXN0aWNzLCBzdGltdWxhdGVzIHRoZSBhY3Rpdml0eSBvZiB0aGUgbWFsZSBzZWNvbmRhcnkgc2V4IGNoYXJhY3RlcmlzdGljcywgYW5kIHByZXZlbnRzIGNoYW5nZXMgaW4gdGhlbSBmb2xsb3dpbmcgY2FzdHJhdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNjb3JkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtaGVhZGluZ1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgMSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5MaXZlciBGdW5jdGlvbiBUZXN0PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInRpdGxlYXJyb3dcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgcGItMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDExXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGFwc2VbMV0gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5MaXZlciBmdW5jdGlvbiB0ZXN0cyBhcmUgYmxvb2QgdGVzdHMgdXNlZCB0byBoZWxwIGRpYWdub3NlIGFuZCBtb25pdG9yIGxpdmVyIGRpc2Vhc2Ugb3IgZGFtYWdlLiBUaGUgdGVzdHMgbWVhc3VyZSB0aGUgbGV2ZWxzIG9mIGNlcnRhaW4gZW56eW1lcyBhbmQgcHJvdGVpbnMgaW4geW91ciBibG9vZC48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHN0Yy1oaWRlLWFjcmQtY29udGFpbmVyIHB0LTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8cD5MaXZlciBmdW5jdGlvbiB0ZXN0cyBhcmUgYmxvb2QgdGVzdHMgdXNlZCB0byBoZWxwIGRpYWdub3NlIGFuZCBtb25pdG9yIGxpdmVyIGRpc2Vhc2Ugb3IgZGFtYWdlLiBUaGUgdGVzdHMgbWVhc3VyZSB0aGUgbGV2ZWxzIG9mIGNlcnRhaW4gZW56eW1lcyBhbmQgcHJvdGVpbnMgaW4geW91ciBibG9vZC4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RjLWRhdGEtdWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1tYSBHbHV0YW15bCBUcmFuc2ZlcmFzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWxrYWxpbmUgUGhvc3BoYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWxpcnViaW4tRGlyZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWxpcnViaW4tVG90YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpbGlydWJpbi1JbmRpcmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvdGVpbiAtdG90YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnVtIEFsYnVtaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnVtIEdsb2J1bGluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTR09UKEFTVClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNHUFQoQUxUKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VydW0gQWxidW1pbiAvR2xvYnVsaW4gUmF0aW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPHA+TGl2ZXIgZnVuY3Rpb24gdGVzdHMgYXJlIGJsb29kIHRlc3RzIHVzZWQgdG8gaGVscCBkaWFnbm9zZSBhbmQgbW9uaXRvciBsaXZlciBkaXNlYXNlIG9yIGRhbWFnZS4gVGhlIHRlc3RzIG1lYXN1cmUgdGhlIGxldmVscyBvZiBjZXJ0YWluIGVuenltZXMgYW5kIHByb3RlaW5zIGluIHlvdXIgYmxvb2QuIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtbWEgR2x1dGFteWwgVHJhbnNmZXJhc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFsa2FsaW5lIFBob3NwaGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlsaXJ1YmluLURpcmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlsaXJ1YmluLVRvdGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWxpcnViaW4tSW5kaXJlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb3RlaW4gLXRvdGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ1bSBBbGJ1bWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ1bSBHbG9idWxpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU0dPVChBU1QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTR1BUKEFMVClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnVtIEFsYnVtaW4gL0dsb2J1bGluIFJhdGlvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPHA+TGl2ZXIgZnVuY3Rpb24gdGVzdHMgYXJlIGJsb29kIHRlc3RzIHVzZWQgdG8gaGVscCBkaWFnbm9zZSBhbmQgbW9uaXRvciBsaXZlciBkaXNlYXNlIG9yIGRhbWFnZS4gVGhlIHRlc3RzIG1lYXN1cmUgdGhlIGxldmVscyBvZiBjZXJ0YWluIGVuenltZXMgYW5kIHByb3RlaW5zIGluIHlvdXIgYmxvb2QuIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtbWEgR2x1dGFteWwgVHJhbnNmZXJhc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFsa2FsaW5lIFBob3NwaGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlsaXJ1YmluLURpcmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlsaXJ1YmluLVRvdGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWxpcnViaW4tSW5kaXJlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb3RlaW4gLXRvdGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ1bSBBbGJ1bWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ1bSBHbG9idWxpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU0dPVChBU1QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTR1BUKEFMVClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnVtIEFsYnVtaW4gL0dsb2J1bGluIFJhdGlvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNjb3JkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtaGVhZGluZ1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgMil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5MaXBpZCBQcm9maWxlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInRpdGxlYXJyb3dcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgcGItMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGFwc2VbMl0gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4gPHNwYW4+TGlwaWQgcHJvZmlsZSB0ZXN0IGlzIGEgc2V0IG9mIHRlc3RzIHVzZWQgdG8gbWVhc3VyZSB0aGUgYW1vdW50IG9mIGNob2xlc3Rlcm9sIGFuZCBvdGhlciB0eXBlcyBvZiBmYXRzIHByZXNlbnQgaW4geW91ciBibG9vZC4gVGhpcyB0ZXN0IGlzIGhlbHBmdWwgaW4gYXNzZXNzaW5nIHRoZSByaXNrIG9mIGNhcmRpb3Zhc2N1bGFyIGRpc2Vhc2VzIChDVkQpLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgc3RjLWhpZGUtYWNyZC1jb250YWluZXIgcHQtMCB0ZXh0LWNlbnRlclwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qfSA8cD5MaXBpZCBwcm9maWxlIHRlc3QgaXMgYSBzZXQgb2YgdGVzdHMgdXNlZCB0byBtZWFzdXJlIHRoZSBhbW91bnQgb2YgY2hvbGVzdGVyb2wgYW5kIG90aGVyIHR5cGVzIG9mIGZhdHMgcHJlc2VudCBpbiB5b3VyIGJsb29kLiBUaGlzIHRlc3QgaXMgaGVscGZ1bCBpbiBhc3Nlc3NpbmcgdGhlIHJpc2sgb2YgY2FyZGlvdmFzY3VsYXIgZGlzZWFzZXMgKENWRCkuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkxETCBDaG9sZXN0cm9sPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlRvdGFsIENob2xlc3Rlcm9sPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkhETCBDaG9sZXN0ZXJvbDwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5UcmlnbHljZXJpZGVzPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlZMREwgQ2hvbGVzdGVyb2w8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+TERML0hETCBSYXRpbzwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5Ob24gLSBIREwgQ2hvbGVzdGVyb2w8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VEMvSERMIENob2xlc3Rlcm9sIFJhdGlvPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qfSA8cD5MaXBpZCBwcm9maWxlIHRlc3QgaXMgYSBzZXQgb2YgdGVzdHMgdXNlZCB0byBtZWFzdXJlIHRoZSBhbW91bnQgb2YgY2hvbGVzdGVyb2wgYW5kIG90aGVyIHR5cGVzIG9mIGZhdHMgcHJlc2VudCBpbiB5b3VyIGJsb29kLiBUaGlzIHRlc3QgaXMgaGVscGZ1bCBpbiBhc3Nlc3NpbmcgdGhlIHJpc2sgb2YgY2FyZGlvdmFzY3VsYXIgZGlzZWFzZXMgKENWRCkuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkxETCBDaG9sZXN0cm9sPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlRvdGFsIENob2xlc3Rlcm9sPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkhETCBDaG9sZXN0ZXJvbDwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5UcmlnbHljZXJpZGVzPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlZMREwgQ2hvbGVzdGVyb2w8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+TERML0hETCBSYXRpbzwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5Ob24gLSBIREwgQ2hvbGVzdGVyb2w8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VEMvSERMIENob2xlc3Rlcm9sIFJhdGlvPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyp9IDxwPkxpcGlkIHByb2ZpbGUgdGVzdCBpcyBhIHNldCBvZiB0ZXN0cyB1c2VkIHRvIG1lYXN1cmUgdGhlIGFtb3VudCBvZiBjaG9sZXN0ZXJvbCBhbmQgb3RoZXIgdHlwZXMgb2YgZmF0cyBwcmVzZW50IGluIHlvdXIgYmxvb2QuIFRoaXMgdGVzdCBpcyBoZWxwZnVsIGluIGFzc2Vzc2luZyB0aGUgcmlzayBvZiBjYXJkaW92YXNjdWxhciBkaXNlYXNlcyAoQ1ZEKS5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+TERMIENob2xlc3Ryb2w8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VG90YWwgQ2hvbGVzdGVyb2w8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+SERMIENob2xlc3Rlcm9sPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlRyaWdseWNlcmlkZXM8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VkxETCBDaG9sZXN0ZXJvbDwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5MREwvSERMIFJhdGlvPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPk5vbiAtIEhETCBDaG9sZXN0ZXJvbDwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5UQy9IREwgQ2hvbGVzdGVyb2wgUmF0aW88L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjY29yZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWhlYWRpbmdcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsIDMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+S2lkbmV5IEZ1bmN0aW9uIFRlc3Q8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidGl0bGVhcnJvd1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBwYi0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+NVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb2xsYXBzZVszXSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPktpZG5leXMgcGxheSBhbiBpbXBvcnRhbnQgcm9sZSBpbiB0aGUgcmVtb3ZhbCBvZiB3YXN0ZSBwcm9kdWN0cyBhbmQgbWFpbnRlbmFuY2Ugb2Ygd2F0ZXIgYW5kIGVsZWN0cm9seXRlIGJhbGFuY2UgaW4gdGhlIGJvZHkuIEtpZG5leSBGdW5jdGlvbiBUZXN0IChLRlQpIGluY2x1ZGVzIGEgZ3JvdXAgb2YgYmxvb2QgdGVzdHMgdG8gZGV0ZXJtaW5lIGhvdyB3ZWxsIHRoZSBraWRuZXlzIGFyZSB3b3JraW5nLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgc3RjLWhpZGUtYWNyZC1jb250YWluZXIgcHQtMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxwPktpZG5leXMgcGxheSBhbiBpbXBvcnRhbnQgcm9sZSBpbiB0aGUgcmVtb3ZhbCBvZiB3YXN0ZSBwcm9kdWN0cyBhbmQgbWFpbnRlbmFuY2Ugb2Ygd2F0ZXIgYW5kIGVsZWN0cm9seXRlIGJhbGFuY2UgaW4gdGhlIGJvZHkuIEtpZG5leSBGdW5jdGlvbiBUZXN0IChLRlQpIGluY2x1ZGVzIGEgZ3JvdXAgb2YgYmxvb2QgdGVzdHMgdG8gZGV0ZXJtaW5lIGhvdyB3ZWxsIHRoZSBraWRuZXlzIGFyZSB3b3JraW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+Q3JlYXRpbmluZTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5VcmljIEFjaWQgKFVBKTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5CbG9vZCBVcmVhIE5pdHJvZ2VuIChCVU4pPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkJVTi8gU2VydW0gQ3JlYXRpbmluZSBSYXRpbzwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5DYWxjaXVtPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPHA+S2lkbmV5cyBwbGF5IGFuIGltcG9ydGFudCByb2xlIGluIHRoZSByZW1vdmFsIG9mIHdhc3RlIHByb2R1Y3RzIGFuZCBtYWludGVuYW5jZSBvZiB3YXRlciBhbmQgZWxlY3Ryb2x5dGUgYmFsYW5jZSBpbiB0aGUgYm9keS4gS2lkbmV5IEZ1bmN0aW9uIFRlc3QgKEtGVCkgaW5jbHVkZXMgYSBncm91cCBvZiBibG9vZCB0ZXN0cyB0byBkZXRlcm1pbmUgaG93IHdlbGwgdGhlIGtpZG5leXMgYXJlIHdvcmtpbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RjLWRhdGEtdWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5DcmVhdGluaW5lPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlVyaWMgQWNpZCAoVUEpPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkJsb29kIFVyZWEgTml0cm9nZW4gKEJVTik8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+QlVOLyBTZXJ1bSBDcmVhdGluaW5lIFJhdGlvPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkNhbGNpdW08L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxwPktpZG5leXMgcGxheSBhbiBpbXBvcnRhbnQgcm9sZSBpbiB0aGUgcmVtb3ZhbCBvZiB3YXN0ZSBwcm9kdWN0cyBhbmQgbWFpbnRlbmFuY2Ugb2Ygd2F0ZXIgYW5kIGVsZWN0cm9seXRlIGJhbGFuY2UgaW4gdGhlIGJvZHkuIEtpZG5leSBGdW5jdGlvbiBUZXN0IChLRlQpIGluY2x1ZGVzIGEgZ3JvdXAgb2YgYmxvb2QgdGVzdHMgdG8gZGV0ZXJtaW5lIGhvdyB3ZWxsIHRoZSBraWRuZXlzIGFyZSB3b3JraW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+Q3JlYXRpbmluZTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5VcmljIEFjaWQgKFVBKTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5CbG9vZCBVcmVhIE5pdHJvZ2VuIChCVU4pPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkJVTi8gU2VydW0gQ3JlYXRpbmluZSBSYXRpbzwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5DYWxjaXVtPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY2NvcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1oZWFkaW5nXCIgb25DbGljaz17dGhpcy50b2dnbGUuYmluZCh0aGlzLCA0KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoeXJvaWQgUGFuZWwgMTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ0aXRsZWFycm93XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHBiLTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhcHNlWzRdID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VGh5cm9pZCBmdW5jdGlvbiB0ZXN0cyAoVEZUcykgaXMgYSBjb2xsZWN0aXZlIHRlcm0gZm9yIGJsb29kIHRlc3RzIHVzZWQgdG8gY2hlY2sgdGhlIGZ1bmN0aW9uIG9mIHRoZSB0aHlyb2lkLiBBIFRGVCBwYW5lbCB0eXBpY2FsbHkgaW5jbHVkZXMgdGh5cm9pZCBob3Jtb25lcyBzdWNoIGFzIHRoeXJvaWQtc3RpbXVsYXRpbmcgaG9ybW9uZSAoVFNILCB0aHlyb3Ryb3BpbikgYW5kIHRoeXJveGluZSAoVDQpLCBhbmQgdHJpaW9kb3RoeXJvbmluZSAoVDMpLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgc3RjLWhpZGUtYWNyZC1jb250YWluZXIgcHQtMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxwPlRoeXJvaWQgZnVuY3Rpb24gdGVzdHMgKFRGVHMpIGlzIGEgY29sbGVjdGl2ZSB0ZXJtIGZvciBibG9vZCB0ZXN0cyB1c2VkIHRvIGNoZWNrIHRoZSBmdW5jdGlvbiBvZiB0aGUgdGh5cm9pZC4gQSBURlQgcGFuZWwgdHlwaWNhbGx5IGluY2x1ZGVzIHRoeXJvaWQgaG9ybW9uZXMgc3VjaCBhcyB0aHlyb2lkLXN0aW11bGF0aW5nIGhvcm1vbmUgKFRTSCwgdGh5cm90cm9waW4pIGFuZCB0aHlyb3hpbmUgKFQ0KSwgYW5kIHRyaWlvZG90aHlyb25pbmUgKFQzKS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlRyaUlvZG90aHlyb25pbmUgKFQzKTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5UaHlyb3hpbmUgLSBUNCBUb3RhbDwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5UU0ggLSBUaHlyb2lkIFN0aW11bGF0aW5nIEhvcm1vbmU8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8cD5UaHlyb2lkIGZ1bmN0aW9uIHRlc3RzIChURlRzKSBpcyBhIGNvbGxlY3RpdmUgdGVybSBmb3IgYmxvb2QgdGVzdHMgdXNlZCB0byBjaGVjayB0aGUgZnVuY3Rpb24gb2YgdGhlIHRoeXJvaWQuIEEgVEZUIHBhbmVsIHR5cGljYWxseSBpbmNsdWRlcyB0aHlyb2lkIGhvcm1vbmVzIHN1Y2ggYXMgdGh5cm9pZC1zdGltdWxhdGluZyBob3Jtb25lIChUU0gsIHRoeXJvdHJvcGluKSBhbmQgdGh5cm94aW5lIChUNCksIGFuZCB0cmlpb2RvdGh5cm9uaW5lIChUMykuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RjLWRhdGEtdWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5UcmlJb2RvdGh5cm9uaW5lIChUMyk8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VGh5cm94aW5lIC0gVDQgVG90YWw8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VFNIIC0gVGh5cm9pZCBTdGltdWxhdGluZyBIb3Jtb25lPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8cD5UaHlyb2lkIGZ1bmN0aW9uIHRlc3RzIChURlRzKSBpcyBhIGNvbGxlY3RpdmUgdGVybSBmb3IgYmxvb2QgdGVzdHMgdXNlZCB0byBjaGVjayB0aGUgZnVuY3Rpb24gb2YgdGhlIHRoeXJvaWQuIEEgVEZUIHBhbmVsIHR5cGljYWxseSBpbmNsdWRlcyB0aHlyb2lkIGhvcm1vbmVzIHN1Y2ggYXMgdGh5cm9pZC1zdGltdWxhdGluZyBob3Jtb25lIChUU0gsIHRoeXJvdHJvcGluKSBhbmQgdGh5cm94aW5lIChUNCksIGFuZCB0cmlpb2RvdGh5cm9uaW5lIChUMykuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RjLWRhdGEtdWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5UcmlJb2RvdGh5cm9uaW5lIChUMyk8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VGh5cm94aW5lIC0gVDQgVG90YWw8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VFNIIC0gVGh5cm9pZCBTdGltdWxhdGluZyBIb3Jtb25lPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY2NvcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1oZWFkaW5nXCIgb25DbGljaz17dGhpcy50b2dnbGUuYmluZCh0aGlzLCA1KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPklyb248L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidGl0bGVhcnJvd1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBwYi0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhY3JkLXN0Yy1yZWRcIj5YXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb2xsYXBzZVs1XSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPklyb24gdGVzdHMgYXJlIGdyb3VwcyBvZiBjbGluaWNhbCBjaGVtaXN0cnkgbGFib3JhdG9yeSBibG9vZCB0ZXN0cyB0aGF0IGFyZSB1c2VkIHRvIGV2YWx1YXRlIGJvZHkgaXJvbiBzdG9yZXMgb3IgdGhlIGlyb24gbGV2ZWwgaW4gYmxvb2Qgc2VydW0uIE90aGVyIHRlcm1zIHVzZWQgZm9yIHRoZSBzYW1lIHRlc3RzIGFyZSBpcm9uIHBhbmVsLCBpcm9uIHByb2ZpbGUsIGlyb24gaW5kaWNlcyBvciBpcm9uIHN0YXR1cy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgc3RjLWhpZGUtYWNyZC1jb250YWluZXIgcHQtMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxwPklyb24gdGVzdHMgYXJlIGdyb3VwcyBvZiBjbGluaWNhbCBjaGVtaXN0cnkgbGFib3JhdG9yeSBibG9vZCB0ZXN0cyB0aGF0IGFyZSB1c2VkIHRvIGV2YWx1YXRlIGJvZHkgaXJvbiBzdG9yZXMgb3IgdGhlIGlyb24gbGV2ZWwgaW4gYmxvb2Qgc2VydW0uIE90aGVyIHRlcm1zIHVzZWQgZm9yIHRoZSBzYW1lIHRlc3RzIGFyZSBpcm9uIHBhbmVsLCBpcm9uIHByb2ZpbGUsIGlyb24gaW5kaWNlcyBvciBpcm9uIHN0YXR1cy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlRvdGFsIElyb24gQmluZGluZyBDYXBhY2l0eSAoVElCQyk8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+SXJvbjwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5UcmFuc2ZlcnJpbiBTYXR1cmF0aW9uPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkZlcnJpdGluPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPHA+SXJvbiB0ZXN0cyBhcmUgZ3JvdXBzIG9mIGNsaW5pY2FsIGNoZW1pc3RyeSBsYWJvcmF0b3J5IGJsb29kIHRlc3RzIHRoYXQgYXJlIHVzZWQgdG8gZXZhbHVhdGUgYm9keSBpcm9uIHN0b3JlcyBvciB0aGUgaXJvbiBsZXZlbCBpbiBibG9vZCBzZXJ1bS4gT3RoZXIgdGVybXMgdXNlZCBmb3IgdGhlIHNhbWUgdGVzdHMgYXJlIGlyb24gcGFuZWwsIGlyb24gcHJvZmlsZSwgaXJvbiBpbmRpY2VzIG9yIGlyb24gc3RhdHVzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VG90YWwgSXJvbiBCaW5kaW5nIENhcGFjaXR5IChUSUJDKTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5Jcm9uPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlRyYW5zZmVycmluIFNhdHVyYXRpb248L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxwPklyb24gdGVzdHMgYXJlIGdyb3VwcyBvZiBjbGluaWNhbCBjaGVtaXN0cnkgbGFib3JhdG9yeSBibG9vZCB0ZXN0cyB0aGF0IGFyZSB1c2VkIHRvIGV2YWx1YXRlIGJvZHkgaXJvbiBzdG9yZXMgb3IgdGhlIGlyb24gbGV2ZWwgaW4gYmxvb2Qgc2VydW0uIE90aGVyIHRlcm1zIHVzZWQgZm9yIHRoZSBzYW1lIHRlc3RzIGFyZSBpcm9uIHBhbmVsLCBpcm9uIHByb2ZpbGUsIGlyb24gaW5kaWNlcyBvciBpcm9uIHN0YXR1cy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNjb3JkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtaGVhZGluZ1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgNil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5EaWFiZXRlcyBTY3JlZW4sIFByb2ZpbGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidGl0bGVhcnJvd1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBwYi0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhY3JkLXN0Yy1yZWRcIj5YXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb2xsYXBzZVs2XSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkRlZmluaXRpb246IGluc3VsaW4gcmVzaXN0YW5jZS4gVGhpcyB0ZXN0IGlzIG9yZGVyZWQgZm9yIGEgcGF0aWVudCB3aG8gbmV3bHkgZGlhZ25vc2VkIHdpdGggZGlhYmV0ZXMgdHlwZS0yIHRvIG1vbml0b3IgdGhlIHN0YXR1cyBvZiBiZXRhIGNlbGwgcHJvZHVjdGlvbiBvZiBpbnN1bGluIGFuZCB3aGlsZSB0aGUgaW5zdWxpbiBpbmplY3Rpb24gaXMgcmVxdWlyZWQgZm9yIHRoZSBwYXRpZW50LiBUaGUgZXhwZWN0ZWQgdmFsdWU6IE5vcm1hbCBvciBoaWdoIGxldmVsIG9mIEMtcGVwdGlkZSB3aWxsIGJlIGRldGVjdGVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBzdGMtaGlkZS1hY3JkLWNvbnRhaW5lciBwdC0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPHA+RGVmaW5pdGlvbjogaW5zdWxpbiByZXNpc3RhbmNlLiBUaGlzIHRlc3QgaXMgb3JkZXJlZCBmb3IgYSBwYXRpZW50IHdobyBuZXdseSBkaWFnbm9zZWQgd2l0aCBkaWFiZXRlcyB0eXBlLTIgdG8gbW9uaXRvciB0aGUgc3RhdHVzIG9mIGJldGEgY2VsbCBwcm9kdWN0aW9uIG9mIGluc3VsaW4gYW5kIHdoaWxlIHRoZSBpbnN1bGluIGluamVjdGlvbiBpcyByZXF1aXJlZCBmb3IgdGhlIHBhdGllbnQuIFRoZSBleHBlY3RlZCB2YWx1ZTogTm9ybWFsIG9yIGhpZ2ggbGV2ZWwgb2YgQy1wZXB0aWRlIHdpbGwgYmUgZGV0ZWN0ZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RjLWRhdGEtdWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5IYkExYyBHbHljYXRlZCBIYWVtb2dsb2JpbjwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5BdmVyYWdlIEJsb29kIEdsdWNvc2UgKEFCRyk8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+Qmxvb2Qga2V0b25lPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkZydWN0b3NhbWluZTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxwPkRlZmluaXRpb246IGluc3VsaW4gcmVzaXN0YW5jZS4gVGhpcyB0ZXN0IGlzIG9yZGVyZWQgZm9yIGEgcGF0aWVudCB3aG8gbmV3bHkgZGlhZ25vc2VkIHdpdGggZGlhYmV0ZXMgdHlwZS0yIHRvIG1vbml0b3IgdGhlIHN0YXR1cyBvZiBiZXRhIGNlbGwgcHJvZHVjdGlvbiBvZiBpbnN1bGluIGFuZCB3aGlsZSB0aGUgaW5zdWxpbiBpbmplY3Rpb24gaXMgcmVxdWlyZWQgZm9yIHRoZSBwYXRpZW50LiBUaGUgZXhwZWN0ZWQgdmFsdWU6IE5vcm1hbCBvciBoaWdoIGxldmVsIG9mIEMtcGVwdGlkZSB3aWxsIGJlIGRldGVjdGVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+SGJBMWMgR2x5Y2F0ZWQgSGFlbW9nbG9iaW48L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+QXZlcmFnZSBCbG9vZCBHbHVjb3NlIChBQkcpPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8cD5EZWZpbml0aW9uOiBpbnN1bGluIHJlc2lzdGFuY2UuIFRoaXMgdGVzdCBpcyBvcmRlcmVkIGZvciBhIHBhdGllbnQgd2hvIG5ld2x5IGRpYWdub3NlZCB3aXRoIGRpYWJldGVzIHR5cGUtMiB0byBtb25pdG9yIHRoZSBzdGF0dXMgb2YgYmV0YSBjZWxsIHByb2R1Y3Rpb24gb2YgaW5zdWxpbiBhbmQgd2hpbGUgdGhlIGluc3VsaW4gaW5qZWN0aW9uIGlzIHJlcXVpcmVkIGZvciB0aGUgcGF0aWVudC4gVGhlIGV4cGVjdGVkIHZhbHVlOiBOb3JtYWwgb3IgaGlnaCBsZXZlbCBvZiBDLXBlcHRpZGUgd2lsbCBiZSBkZXRlY3RlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8dWwgY2xhc3NOYW1lPVwic3RjLWRhdGEtdWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5IYkExYyBHbHljYXRlZCBIYWVtb2dsb2JpbjwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5BdmVyYWdlIEJsb29kIEdsdWNvc2UgKEFCRyk8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY2NvcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1oZWFkaW5nXCIgb25DbGljaz17dGhpcy50b2dnbGUuYmluZCh0aGlzLCA3KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNhcmRpYWMgUmlzayBQcm9maWxlLCBNYXJrZXI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidGl0bGVhcnJvd1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBwYi0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhY3JkLXN0Yy1yZWRcIj5YXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb2xsYXBzZVs3XSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkEgY2FyZGlhYyByaXNrIHByb2ZpbGXigJRvciBDUlDigJRnaXZlcyB5b3UgaW5mb3JtYXRpb24gYWJvdXQgc29tZSBvZiB0aGUgZmFjdG9ycyB0aGF0IGNhbiBwdXQgeW91IGF0IHJpc2sgZm9yIGhlYXJ0IGRpc2Vhc2XigJR0aGluZ3MgbGlrZSBlbGV2YXRlZCBibG9vZCBsZXZlbHMgb2YgY2hvbGVzdGVyb2wsIHRyaWdseWNlcmlkZXMsIGFuZCBnbHVjb3NlIChibG9vZCBzdWdhcikuPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBzdGMtaGlkZS1hY3JkLWNvbnRhaW5lciBwdC0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+TGlwb3Byb3RlaW4gKEEpPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkFwb2xpcG9wcm90ZWlucyBBMTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5IaWdoIFNlbnNpdGl2aXR5IEMtUmVhY3RpdmUgUHJvdGVpbiAoSFNDUlApPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkFwb2xpcG9wcm90ZWlucyBCPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkFwb2xpcG9wcm90ZWlucyBCL0ExPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8cD5BIGNhcmRpYWMgcmlzayBwcm9maWxl4oCUb3IgQ1JQ4oCUZ2l2ZXMgeW91IGluZm9ybWF0aW9uIGFib3V0IHNvbWUgb2YgdGhlIGZhY3RvcnMgdGhhdCBjYW4gcHV0IHlvdSBhdCByaXNrIGZvciBoZWFydCBkaXNlYXNl4oCUdGhpbmdzIGxpa2UgZWxldmF0ZWQgYmxvb2QgbGV2ZWxzIG9mIGNob2xlc3Rlcm9sLCB0cmlnbHljZXJpZGVzLCBhbmQgZ2x1Y29zZSAoYmxvb2Qgc3VnYXIpLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY2NvcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1oZWFkaW5nXCIgb25DbGljaz17dGhpcy50b2dnbGUuYmluZCh0aGlzLCA4KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkhvbW9jeXN0ZWluZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ0aXRsZWFycm93XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHBiLTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhY3JkLXN0Yy1yZWRcIj5YXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhcHNlWzhdID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+SG9tb2N5c3RlaW5lIGlzIGFuIGFtaW5vIGFjaWQgdGhhdCBpcyBwcm9kdWNlZCBieSB0aGUgaHVtYW4gYm9keSwgdXN1YWxseSBhcyBhIGJ5cHJvZHVjdCBvZiBjb25zdW1pbmcgbWVhdC4gSG9tb2N5c3RlaW5lIGlzIG5vcm1hbGx5IGNvbnZlcnRlZCBpbnRvIG90aGVyIGFtaW5vIGFjaWRzLiBBbiBhYm5vcm1hbCBhY2N1bXVsYXRpb24gb2YgaG9tb2N5c3RlaW5lLCB3aGljaCBjYW4gYmUgbWVhc3VyZWQgaW4gdGhlIGJsb29kLCBjYW4gYmUgYSBtYXJrZXIgZm9yIHRoZSBkZXZlbG9wbWVudCBvZiBoZWFydCBkaXNlYXNlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBzdGMtaGlkZS1hY3JkLWNvbnRhaW5lciBwdC0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8cD5Ib21vY3lzdGVpbmUgaXMgYW4gYW1pbm8gYWNpZCB0aGF0IGlzIHByb2R1Y2VkIGJ5IHRoZSBodW1hbiBib2R5LCB1c3VhbGx5IGFzIGEgYnlwcm9kdWN0IG9mIGNvbnN1bWluZyBtZWF0LiBIb21vY3lzdGVpbmUgaXMgbm9ybWFsbHkgY29udmVydGVkIGludG8gb3RoZXIgYW1pbm8gYWNpZHMuIEFuIGFibm9ybWFsIGFjY3VtdWxhdGlvbiBvZiBob21vY3lzdGVpbmUsIHdoaWNoIGNhbiBiZSBtZWFzdXJlZCBpbiB0aGUgYmxvb2QsIGNhbiBiZSBhIG1hcmtlciBmb3IgdGhlIGRldmVsb3BtZW50IG9mIGhlYXJ0IGRpc2Vhc2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxwPkhvbW9jeXN0ZWluZSBpcyBhbiBhbWlubyBhY2lkIHRoYXQgaXMgcHJvZHVjZWQgYnkgdGhlIGh1bWFuIGJvZHksIHVzdWFsbHkgYXMgYSBieXByb2R1Y3Qgb2YgY29uc3VtaW5nIG1lYXQuIEhvbW9jeXN0ZWluZSBpcyBub3JtYWxseSBjb252ZXJ0ZWQgaW50byBvdGhlciBhbWlubyBhY2lkcy4gQW4gYWJub3JtYWwgYWNjdW11bGF0aW9uIG9mIGhvbW9jeXN0ZWluZSwgd2hpY2ggY2FuIGJlIG1lYXN1cmVkIGluIHRoZSBibG9vZCwgY2FuIGJlIGEgbWFya2VyIGZvciB0aGUgZGV2ZWxvcG1lbnQgb2YgaGVhcnQgZGlzZWFzZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNjb3JkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtaGVhZGluZ1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgOSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5WaXRhbWluIFByb2ZpbGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidGl0bGVhcnJvd1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBwYi0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhY3JkLXN0Yy1yZWRcIj5YXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb2xsYXBzZVs5XSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBzdGMtaGlkZS1hY3JkLWNvbnRhaW5lciBwdC0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+Rm9sYXRlPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlZpdGFtaW4gQjEyPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPjI1LU9IIFZpdGFtaW4gRCBUb3RhbDwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY2NvcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1oZWFkaW5nXCIgb25DbGljaz17dGhpcy50b2dnbGUuYmluZCh0aGlzLCAxMCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Ub3hpYyBFbGVtZW50cyBQcm9maWxlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInRpdGxlYXJyb3dcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgcGItMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjcmQtc3RjLXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+WFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGFwc2VbMTBdID8gPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHN0Yy1oaWRlLWFjcmQtY29udGFpbmVyIHB0LTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5CYXJpdW08L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkNlc2l1bTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+Q29ib2x0PC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5MZWFkPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5DYWRtaXVtPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5TZWxlbml1bTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+TWVyY3VyeTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+Q2hyb21pdW08L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkFyc2VuaWM8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNjb3JkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtaGVhZGluZ1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgMTEpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RWxlY3Ryb2x5dGVzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInRpdGxlYXJyb3dcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgcGItMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjcmQtc3RjLXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGFwc2VbMTFdID8gPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHN0Yy1oaWRlLWFjcmQtY29udGFpbmVyIHB0LTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RjLWRhdGEtdWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+U29kaXVtPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5DaGxvcmlkZTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNjb3JkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtaGVhZGluZ1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgMTIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGVzdG9zdGVyb25lIFRvdGFsPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBjbGFzc05hbWU9XCJ0aXRsZWFycm93XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBwYi0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhY3JkLXN0Yy1yZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb2xsYXBzZVsxMl0gPyA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgc3RjLWhpZGUtYWNyZC1jb250YWluZXIgcHQtMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPHA+QSBcIm1hbGUgaG9ybW9uZVwiIC0tIGEgc2V4IGhvcm1vbmUgcHJvZHVjZWQgYnkgdGhlIHRlc3RlcyB0aGF0IGVuY291cmFnZXMgdGhlIGRldmVsb3BtZW50IG9mIG1hbGUgc2V4dWFsIGNoYXJhY3RlcmlzdGljcywgc3RpbXVsYXRlcyB0aGUgYWN0aXZpdHkgb2YgdGhlIG1hbGUgc2Vjb25kYXJ5IHNleCBjaGFyYWN0ZXJpc3RpY3MsIGFuZCBwcmV2ZW50cyBjaGFuZ2VzIGluIHRoZW0gZm9sbG93aW5nIGNhc3RyYXRpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNjb3JkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtaGVhZGluZ1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgMTMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UGFuY3JlYXRpYyAoQWN1dGUpIFByb2ZpbGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidGl0bGVhcnJvd1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBwYi0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjcmQtc3RjLXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhcHNlWzEzXSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkFjdXRlIHBhbmNyZWF0aXRpcyBvciBhY3V0ZSBwYW5jcmVhdGljIG5lY3Jvc2lzIGlzIGEgc3VkZGVuIGluZmxhbW1hdGlvbiBvZiB0aGUgcGFuY3JlYXMuIEl0IGNhbiBoYXZlIHNldmVyZSBjb21wbGljYXRpb25zIGFuZCBoaWdoIG1vcnRhbGl0eSBkZXNwaXRlIHRyZWF0bWVudC48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHN0Yy1oaWRlLWFjcmQtY29udGFpbmVyIHB0LTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkFteWxhc2U8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+TGlwYXNlPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QWN1dGUgcGFuY3JlYXRpdGlzIG9yIGFjdXRlIHBhbmNyZWF0aWMgbmVjcm9zaXMgaXMgYSBzdWRkZW4gaW5mbGFtbWF0aW9uIG9mIHRoZSBwYW5jcmVhcy4gSXQgY2FuIGhhdmUgc2V2ZXJlIGNvbXBsaWNhdGlvbnMgYW5kIGhpZ2ggbW9ydGFsaXR5IGRlc3BpdGUgdHJlYXRtZW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjY29yZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWhlYWRpbmdcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsIDE0KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFydGhyaXRpcyBQcm9maWxlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInRpdGxlYXJyb3dcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgcGItMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhY3JkLXN0Yy1yZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjcmQtc3RjLXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb2xsYXBzZVsxNF0gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgc3RjLWhpZGUtYWNyZC1jb250YWluZXIgcHQtMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+QW50aSBOdWNsZWFyIEFudGlib2RpZXMoQU5BKTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5BbnRpIENDUChBQ1BQKTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNjb3JkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtaGVhZGluZ1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgMTUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGh5cm94aW5lIC0gVDQgRnJlZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ0aXRsZWFycm93XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHBiLTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhY3JkLXN0Yy1yZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGFwc2VbMTVdID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHN0Yy1oaWRlLWFjcmQtY29udGFpbmVyIHB0LTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlRoaXMgdGVzdCBpcyBhZHZpc2VkIHdoZW4gdGhlIHJlc3VsdHMgb2YgYSB0aHlyb2lkLXN0aW11bGF0aW5nIGhvcm1vbmUgdGVzdCBhcmUgdW51c3VhbC4gSXQgaXMgcGVyZm9ybWVkIHRvIGRldGVybWluZSB0aGUgdW5kZXJseWluZyBjYXVzZSBhZmZlY3RpbmcgdGhlIGxldmVsIG9mIHRoeXJvaWQgaG9ybW9uZSBpbiB0aGUgYm9keS48L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+U29tZSBhaWxtZW50cyB0aGF0IG1heSBhZmZlY3QgdGhlIGZ1bmN0aW9uaW5nIG9mIHRoZSB0aHlyb2lkIGFyZTo8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+QW50aSBDQ1AoQUNQUCk8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjY29yZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWhlYWRpbmdcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsIDE2KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRyaWlvZG90aHlyb25pbmUgKFQzKTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ0aXRsZWFycm93XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHBiLTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhY3JkLXN0Yy1yZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGFwc2VbMTZdID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHN0Yy1oaWRlLWFjcmQtY29udGFpbmVyIHB0LTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlRoeXJvaWQgcHJvZHVjZXMgYSBob3Jtb25lIGNhbGxlZCB0cmlpb2RvdGh5cm9uaW5lIG9yIFQzIHdoaWNoIGFsb25nIHdpdGggb3RoZXIgaG9ybW9uZXMgcmVndWxhdGUgYm9keSdzIHRlbXBlcmF0dXJlLCBtZXRhYm9saXNtIGFuZCBoZWFydCByYXRlLiBBIFQzIHRlc3QgaXMgY29uZHVjdGVkIHRvIGV2YWx1YXRlIHRoZSBsZXZlbHMgb2YgdGhpcyBob3Jtb25lIGluIHRoZSBibG9vZCBhbmQgZGlhZ25vc2UgYSB0aHlyb2lkIHByb2JsZW0uPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY2NvcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1oZWFkaW5nXCIgb25DbGljaz17dGhpcy50b2dnbGUuYmluZCh0aGlzLCAxNyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5MaXBhc2U8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidGl0bGVhcnJvd1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBwYi0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjcmQtc3RjLXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhcHNlWzE3XSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBzdGMtaGlkZS1hY3JkLWNvbnRhaW5lciBwdC0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RjLWRhdGEtdWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5MaXBhc2UgdGVzdCBpcyBjb25kdWN0ZWQgYXMgYW4gaW5pdGlhbCBkaWFnbm9zaXMgZm9yIHRoZSBjb25kaXRpb25zIGxpa2UgYWN1dGUgcGFuY3JlYXRpYywgY2VsaWFjIGRpc2Vhc2UgYW5kIHBhbmNyZWF0aWMgY2FuY2VyLjwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNjb3JkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtaGVhZGluZ1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgMTgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QW15bGFzZSBTZXJ1bTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ0aXRsZWFycm93XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHBiLTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhY3JkLXN0Yy1yZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGFwc2VbMThdID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHN0Yy1oaWRlLWFjcmQtY29udGFpbmVyIHB0LTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlRoaXMgdGVzdCBpcyB1c3VhbGx5IGFkdmlzZWQgaWYgdGhlIGRvY3RvciBzdXNwZWN0cyBwYW5jcmVhdGl0aXMuIEluY3JlYXNlIGluIHRoZSBsZXZlbCBvZiB0aGlzIGVuenltZSBtYXkgY2F1c2UgcGFuY3JlYXRpYyBkaXNvcmRlcnMgc3VjaCBhcyBwYW5jcmVhdGljIGNhbmNlciwgcGFuY3JlYXRpYyBwc2V1ZG9jeXN0LCBvciBwYW5jcmVhdGljIGFic2Nlc3MuPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY2NvcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1oZWFkaW5nXCIgb25DbGljaz17dGhpcy50b2dnbGUuYmluZCh0aGlzLCAxOSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UU0ggLSBUaHlyb2lkIFN0aW11bGF0aW5nIEhvcm1vbmU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidGl0bGVhcnJvd1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBwYi0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjcmQtc3RjLXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhcHNlWzE5XSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBzdGMtaGlkZS1hY3JkLWNvbnRhaW5lciBwdC0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RjLWRhdGEtdWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5BbnRpIE51Y2xlYXIgQW50aWJvZGllcyhBTkEpPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkFudGkgQ0NQKEFDUFApPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY2NvcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1oZWFkaW5nXCIgb25DbGljaz17dGhpcy50b2dnbGUuYmluZCh0aGlzLCAyMCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GZXJyaXRpbjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ0aXRsZWFycm93XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHBiLTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhY3JkLXN0Yy1yZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGFwc2VbMjBdID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHN0Yy1oaWRlLWFjcmQtY29udGFpbmVyIHB0LTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VGhlIHRlc3QgbWVhc3VyZXMgdGhlIGFtb3VudCBvZiBUU0ggaW4gdGhlIGJvZHkgdG8g4oCTPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+4oCiJm5ic3A7Jm5ic3A7Jm5ic3A7IENoZWNrIGZvciBzeW1wdG9tcyBvZiB0aHlyb2lkIGRpc2Vhc2U8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7igKImbmJzcDsmbmJzcDsmbmJzcDsgVHJhY2sgdGhlIGltcHJvdmVtZW50IG9mIGFuIG9uZ29pbmcgdGh5cm9pZCB0cmVhdG1lbnQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7igKImbmJzcDsmbmJzcDsmbmJzcDsgU2NyZWVuIGZvciB0aHlyb2lkIHN5bXB0b21zIGR1cmluZyBwcmVnbmFuY3k8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7igKImbmJzcDsmbmJzcDsmbmJzcDsgU2NyZWVuIGZvciB0aHlyb2lkIHJlbGF0ZWQgc3ltcHRvbXMgaW4gaW5mYW50czwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPjxzdHJvbmc+V2hhdCBpdCBtZWFzdXJlcz88L3N0cm9uZz48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UaGUgdGVzdCBpcyB1c2VkIHRvIG1lYXN1cmUgdGhlIGFtb3VudCBvZiBUaHlyb2lkIFN0aW11bGF0aW5nIEhvcm1vbmUgaW4gdGhlIGJsb29kIGFuZCBjaGVjayBpZiB0aGUgdGh5cm9pZCBnbGFuZCBpcyBmdW5jdGlvbmluZyBwcm9wZXJseS4gVGhlIHRlc3QgaXMgYSBkaWFnbm9zdGljIG1lYXN1cmUgZm9yIGNvbmRpdGlvbnMgbGlrZSBIeXBlcnRoeXJvaWRpc20gYW5kIEh5cG90aHlyb2lkaXNtLjwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJ0LTEwIGN0LXByb2ZpbGUgc2tpbi13aGl0ZSBib3JkZXItYm90dG9tLXJhZGlvdXMgZ29sZC1yZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1zY24tbGlzdGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pk91ciBQb3B1bGFyIENvbXBhcmlzb246PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRvcCB2aXRhbWluIHByb2ZpbGUgcGFja2FnZXM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Ub3AgcGFja2FnZXMgZm9yIHNlbmlvciBjaXRpemVuczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBQb3B1bGFyIGxvdyBjb3N0IHBhY2thZ2VzIGZvciBkaWFiZXRlczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmlnaHRCYXIgZXh0cmFDbGFzcz1cIiBjaGF0LWZsb2F0LWJ0bi0yXCIgbXNnVGVtcGxhdGU9XCJnb2xkX2dlbmVyYWxfdGVtcGxhdGVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgIDxGb290ZXIgZm9vdGVyRGF0YT17dGhpcy5zdGF0ZS5mb290ZXJEYXRhfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYWJWaWV3XG4iLCJpbXBvcnQgSGVhbHRoUGFja2FnZSBmcm9tICcuL0hlYWx0aFBhY2thZ2UuanMnXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWx0aFBhY2thZ2UiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgZ2V0T2ZmZXJMaXN0LCB0b2dnbGVPUERDcml0ZXJpYSwgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuXG5pbXBvcnQgSGVhbHRoUGFja2FnZVZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kaWFnbm9zaXMvaGVhbHRoUGFja2FnZS9pbmRleCdcblxuY2xhc3MgSGVhbHRoUGFja2FnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxIZWFsdGhQYWNrYWdlVmlldyB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcGFzc2VkUHJvcHMpID0+IHtcblxuICAgIGNvbnN0IHtcbiAgICAgICAgb2ZmZXJMaXN0XG4gICAgfSA9IHN0YXRlLlVTRVJcblxuICAgIHJldHVybiB7XG4gICAgICAgIG9mZmVyTGlzdFxuICAgIH1cblxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRPZmZlckxpc3Q6IChsYXQsIGxvbmcpID0+IGRpc3BhdGNoKGdldE9mZmVyTGlzdChsYXQsIGxvbmcpKSxcbiAgICAgICAgdG9nZ2xlT1BEQ3JpdGVyaWE6ICh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQsIGZpbHRlcikgPT4gZGlzcGF0Y2godG9nZ2xlT1BEQ3JpdGVyaWEodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkLCBmaWx0ZXIpKSxcbiAgICAgICAgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWE6ICh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQsIGZpbHRlcikgPT4gZGlzcGF0Y2godG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkLCBmaWx0ZXIpKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSGVhbHRoUGFja2FnZSk7IiwiLy8gLmRpcm5hbWUsIC5iYXNlbmFtZSwgYW5kIC5leHRuYW1lIG1ldGhvZHMgYXJlIGV4dHJhY3RlZCBmcm9tIE5vZGUuanMgdjguMTEuMSxcbi8vIGJhY2twb3J0ZWQgYW5kIHRyYW5zcGxpdGVkIHdpdGggQmFiZWwsIHdpdGggYmFja3dhcmRzLWNvbXBhdCBmaXhlc1xuXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXG4vLyBtdXN0IGJlIG5vIHNsYXNoZXMsIGVtcHR5IGVsZW1lbnRzLCBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxuLy8gKHNvIGFsc28gbm8gbGVhZGluZyBhbmQgdHJhaWxpbmcgc2xhc2hlcyAtIGl0IGRvZXMgbm90IGRpc3Rpbmd1aXNoXG4vLyByZWxhdGl2ZSBhbmQgYWJzb2x1dGUgcGF0aHMpXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcbiAgLy8gaWYgdGhlIHBhdGggdHJpZXMgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIGB1cGAgZW5kcyB1cCA+IDBcbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhcnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGxhc3QgPSBwYXJ0c1tpXTtcbiAgICBpZiAobGFzdCA9PT0gJy4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlIHBhdGggaXMgYWxsb3dlZCB0byBnbyBhYm92ZSB0aGUgcm9vdCwgcmVzdG9yZSBsZWFkaW5nIC4uc1xuICBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcbiAgICBmb3IgKDsgdXAtLTsgdXApIHtcbiAgICAgIHBhcnRzLnVuc2hpZnQoJy4uJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG4vLyBwYXRoLnJlc29sdmUoW2Zyb20gLi4uXSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlc29sdmUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlc29sdmVkUGF0aCA9ICcnLFxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMSAmJiAhcmVzb2x2ZWRBYnNvbHV0ZTsgaS0tKSB7XG4gICAgdmFyIHBhdGggPSAoaSA+PSAwKSA/IGFyZ3VtZW50c1tpXSA6IHByb2Nlc3MuY3dkKCk7XG5cbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcbiAgICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH0gZWxzZSBpZiAoIXBhdGgpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJlc29sdmVkUGF0aCA9IHBhdGggKyAnLycgKyByZXNvbHZlZFBhdGg7XG4gICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IHBhdGguY2hhckF0KDApID09PSAnLyc7XG4gIH1cblxuICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCwgYnV0XG4gIC8vIGhhbmRsZSByZWxhdGl2ZSBwYXRocyB0byBiZSBzYWZlIChtaWdodCBoYXBwZW4gd2hlbiBwcm9jZXNzLmN3ZCgpIGZhaWxzKVxuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICByZXNvbHZlZFBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocmVzb2x2ZWRQYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIXJlc29sdmVkQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICByZXR1cm4gKChyZXNvbHZlZEFic29sdXRlID8gJy8nIDogJycpICsgcmVzb2x2ZWRQYXRoKSB8fCAnLic7XG59O1xuXG4vLyBwYXRoLm5vcm1hbGl6ZShwYXRoKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHZhciBpc0Fic29sdXRlID0gZXhwb3J0cy5pc0Fic29sdXRlKHBhdGgpLFxuICAgICAgdHJhaWxpbmdTbGFzaCA9IHN1YnN0cihwYXRoLCAtMSkgPT09ICcvJztcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihwYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIWlzQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICBpZiAoIXBhdGggJiYgIWlzQWJzb2x1dGUpIHtcbiAgICBwYXRoID0gJy4nO1xuICB9XG4gIGlmIChwYXRoICYmIHRyYWlsaW5nU2xhc2gpIHtcbiAgICBwYXRoICs9ICcvJztcbiAgfVxuXG4gIHJldHVybiAoaXNBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHBhdGg7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmlzQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5qb2luID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwYXRocyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gIHJldHVybiBleHBvcnRzLm5vcm1hbGl6ZShmaWx0ZXIocGF0aHMsIGZ1bmN0aW9uKHAsIGluZGV4KSB7XG4gICAgaWYgKHR5cGVvZiBwICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGguam9pbiBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9XG4gICAgcmV0dXJuIHA7XG4gIH0pLmpvaW4oJy8nKSk7XG59O1xuXG5cbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlbGF0aXZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcbiAgZnJvbSA9IGV4cG9ydHMucmVzb2x2ZShmcm9tKS5zdWJzdHIoMSk7XG4gIHRvID0gZXhwb3J0cy5yZXNvbHZlKHRvKS5zdWJzdHIoMSk7XG5cbiAgZnVuY3Rpb24gdHJpbShhcnIpIHtcbiAgICB2YXIgc3RhcnQgPSAwO1xuICAgIGZvciAoOyBzdGFydCA8IGFyci5sZW5ndGg7IHN0YXJ0KyspIHtcbiAgICAgIGlmIChhcnJbc3RhcnRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgdmFyIGVuZCA9IGFyci5sZW5ndGggLSAxO1xuICAgIGZvciAoOyBlbmQgPj0gMDsgZW5kLS0pIHtcbiAgICAgIGlmIChhcnJbZW5kXSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChzdGFydCA+IGVuZCkgcmV0dXJuIFtdO1xuICAgIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSk7XG4gIH1cblxuICB2YXIgZnJvbVBhcnRzID0gdHJpbShmcm9tLnNwbGl0KCcvJykpO1xuICB2YXIgdG9QYXJ0cyA9IHRyaW0odG8uc3BsaXQoJy8nKSk7XG5cbiAgdmFyIGxlbmd0aCA9IE1hdGgubWluKGZyb21QYXJ0cy5sZW5ndGgsIHRvUGFydHMubGVuZ3RoKTtcbiAgdmFyIHNhbWVQYXJ0c0xlbmd0aCA9IGxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChmcm9tUGFydHNbaV0gIT09IHRvUGFydHNbaV0pIHtcbiAgICAgIHNhbWVQYXJ0c0xlbmd0aCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB2YXIgb3V0cHV0UGFydHMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIG91dHB1dFBhcnRzLnB1c2goJy4uJyk7XG4gIH1cblxuICBvdXRwdXRQYXJ0cyA9IG91dHB1dFBhcnRzLmNvbmNhdCh0b1BhcnRzLnNsaWNlKHNhbWVQYXJ0c0xlbmd0aCkpO1xuXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCcvJyk7XG59O1xuXG5leHBvcnRzLnNlcCA9ICcvJztcbmV4cG9ydHMuZGVsaW1pdGVyID0gJzonO1xuXG5leHBvcnRzLmRpcm5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICBpZiAocGF0aC5sZW5ndGggPT09IDApIHJldHVybiAnLic7XG4gIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KDApO1xuICB2YXIgaGFzUm9vdCA9IGNvZGUgPT09IDQ3IC8qLyovO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDE7IC0taSkge1xuICAgIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgZW5kID0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuIGhhc1Jvb3QgPyAnLycgOiAnLic7XG4gIGlmIChoYXNSb290ICYmIGVuZCA9PT0gMSkge1xuICAgIC8vIHJldHVybiAnLy8nO1xuICAgIC8vIEJhY2t3YXJkcy1jb21wYXQgZml4OlxuICAgIHJldHVybiAnLyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2UoMCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGJhc2VuYW1lKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcblxuICB2YXIgc3RhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICB2YXIgaTtcblxuICBmb3IgKGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgaWYgKHBhdGguY2hhckNvZGVBdChpKSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBwYXRoIGNvbXBvbmVudFxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuICcnO1xuICByZXR1cm4gcGF0aC5zbGljZShzdGFydCwgZW5kKTtcbn1cblxuLy8gVXNlcyBhIG1peGVkIGFwcHJvYWNoIGZvciBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSwgYXMgZXh0IGJlaGF2aW9yIGNoYW5nZWRcbi8vIGluIG5ldyBOb2RlLmpzIHZlcnNpb25zLCBzbyBvbmx5IGJhc2VuYW1lKCkgYWJvdmUgaXMgYmFja3BvcnRlZCBoZXJlXG5leHBvcnRzLmJhc2VuYW1lID0gZnVuY3Rpb24gKHBhdGgsIGV4dCkge1xuICB2YXIgZiA9IGJhc2VuYW1lKHBhdGgpO1xuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xuICB9XG4gIHJldHVybiBmO1xufTtcblxuZXhwb3J0cy5leHRuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgdmFyIHN0YXJ0RG90ID0gLTE7XG4gIHZhciBzdGFydFBhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICAvLyBUcmFjayB0aGUgc3RhdGUgb2YgY2hhcmFjdGVycyAoaWYgYW55KSB3ZSBzZWUgYmVmb3JlIG91ciBmaXJzdCBkb3QgYW5kXG4gIC8vIGFmdGVyIGFueSBwYXRoIHNlcGFyYXRvciB3ZSBmaW5kXG4gIHZhciBwcmVEb3RTdGF0ZSA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0UGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBleHRlbnNpb25cbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICAgIGlmIChjb2RlID09PSA0NiAvKi4qLykge1xuICAgICAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCBkb3QsIG1hcmsgaXQgYXMgdGhlIHN0YXJ0IG9mIG91ciBleHRlbnNpb25cbiAgICAgICAgaWYgKHN0YXJ0RG90ID09PSAtMSlcbiAgICAgICAgICBzdGFydERvdCA9IGk7XG4gICAgICAgIGVsc2UgaWYgKHByZURvdFN0YXRlICE9PSAxKVxuICAgICAgICAgIHByZURvdFN0YXRlID0gMTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0RG90ICE9PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBhbmQgbm9uLXBhdGggc2VwYXJhdG9yIGJlZm9yZSBvdXIgZG90LCBzbyB3ZSBzaG91bGRcbiAgICAgIC8vIGhhdmUgYSBnb29kIGNoYW5jZSBhdCBoYXZpbmcgYSBub24tZW1wdHkgZXh0ZW5zaW9uXG4gICAgICBwcmVEb3RTdGF0ZSA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGFydERvdCA9PT0gLTEgfHwgZW5kID09PSAtMSB8fFxuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBjaGFyYWN0ZXIgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBkb3RcbiAgICAgIHByZURvdFN0YXRlID09PSAwIHx8XG4gICAgICAvLyBUaGUgKHJpZ2h0LW1vc3QpIHRyaW1tZWQgcGF0aCBjb21wb25lbnQgaXMgZXhhY3RseSAnLi4nXG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMSAmJiBzdGFydERvdCA9PT0gZW5kIC0gMSAmJiBzdGFydERvdCA9PT0gc3RhcnRQYXJ0ICsgMSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZShzdGFydERvdCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGZpbHRlciAoeHMsIGYpIHtcbiAgICBpZiAoeHMuZmlsdGVyKSByZXR1cm4geHMuZmlsdGVyKGYpO1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChmKHhzW2ldLCBpLCB4cykpIHJlcy5wdXNoKHhzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLy8gU3RyaW5nLnByb3RvdHlwZS5zdWJzdHIgLSBuZWdhdGl2ZSBpbmRleCBkb24ndCB3b3JrIGluIElFOFxudmFyIHN1YnN0ciA9ICdhYicuc3Vic3RyKC0xKSA9PT0gJ2InXG4gICAgPyBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7IHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pIH1cbiAgICA6IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHtcbiAgICAgICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSBzdHIubGVuZ3RoICsgc3RhcnQ7XG4gICAgICAgIHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pO1xuICAgIH1cbjtcbiIsImltcG9ydCBfTWVtb3J5Um91dGVyIGZyb20gXCIuL01lbW9yeVJvdXRlclwiO1xuZXhwb3J0IHsgX01lbW9yeVJvdXRlciBhcyBNZW1vcnlSb3V0ZXIgfTtcbmltcG9ydCBfUHJvbXB0IGZyb20gXCIuL1Byb21wdFwiO1xuZXhwb3J0IHsgX1Byb21wdCBhcyBQcm9tcHQgfTtcbmltcG9ydCBfUmVkaXJlY3QgZnJvbSBcIi4vUmVkaXJlY3RcIjtcbmV4cG9ydCB7IF9SZWRpcmVjdCBhcyBSZWRpcmVjdCB9O1xuaW1wb3J0IF9Sb3V0ZSBmcm9tIFwiLi9Sb3V0ZVwiO1xuZXhwb3J0IHsgX1JvdXRlIGFzIFJvdXRlIH07XG5pbXBvcnQgX1JvdXRlciBmcm9tIFwiLi9Sb3V0ZXJcIjtcbmV4cG9ydCB7IF9Sb3V0ZXIgYXMgUm91dGVyIH07XG5pbXBvcnQgX1N0YXRpY1JvdXRlciBmcm9tIFwiLi9TdGF0aWNSb3V0ZXJcIjtcbmV4cG9ydCB7IF9TdGF0aWNSb3V0ZXIgYXMgU3RhdGljUm91dGVyIH07XG5pbXBvcnQgX1N3aXRjaCBmcm9tIFwiLi9Td2l0Y2hcIjtcbmV4cG9ydCB7IF9Td2l0Y2ggYXMgU3dpdGNoIH07XG5pbXBvcnQgX2dlbmVyYXRlUGF0aCBmcm9tIFwiLi9nZW5lcmF0ZVBhdGhcIjtcbmV4cG9ydCB7IF9nZW5lcmF0ZVBhdGggYXMgZ2VuZXJhdGVQYXRoIH07XG5pbXBvcnQgX21hdGNoUGF0aCBmcm9tIFwiLi9tYXRjaFBhdGhcIjtcbmV4cG9ydCB7IF9tYXRjaFBhdGggYXMgbWF0Y2hQYXRoIH07XG5pbXBvcnQgX3dpdGhSb3V0ZXIgZnJvbSBcIi4vd2l0aFJvdXRlclwiO1xuZXhwb3J0IHsgX3dpdGhSb3V0ZXIgYXMgd2l0aFJvdXRlciB9OyJdLCJzb3VyY2VSb290IjoiIn0=