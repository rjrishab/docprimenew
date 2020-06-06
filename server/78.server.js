exports.ids = [78];
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

var _react = __webpack_require__(/*! react */ "react");

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

class LabView extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            expandClick: true,
            expandText: 'Expand All'
        };
    }

    componentDidMount() {
        if (window) {
            window.scrollTo(0, 0);
        }

        let selectedLocation = '';
        let lat = 28.644800;
        let long = 77.216721;
        if (this.props.selectedLocation) {
            selectedLocation = this.props.selectedLocation;
            lat = selectedLocation.geometry.location.lat;
            long = selectedLocation.geometry.location.lng;
            if (typeof lat === 'function') lat = lat();
            if (typeof long === 'function') long = long();
        }

        this.props.getOfferList(lat, long);
    }

    toggle(index) {
        let collapse = [...this.state.collapse];
        collapse[index] = !collapse[index];
        this.setState({ collapse });
    }

    expandAll() {
        if (this.state.expandClick) {
            let collapse = this.state.collapse.map(x => true);
            this.setState({ collapse });
            this.setState({ expandClick: !this.state.expandClick, expandText: 'Collapse All' });
        } else {
            let collapse = this.state.collapse.map(x => false);
            this.setState({ collapse });
            this.setState({ expandClick: !this.state.expandClick, expandText: 'Expand All' });
        }
    }

    bookNowClicked(url, trackingName) {

        let data = {
            'Category': 'ConsumerApp', 'Action': trackingName, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': trackingName
        };
        _gtm2.default.sendEvent({ data: data });
        if (window) {
            window.location.href = url;
        }
    }

    viewAllClick() {
        this.props.history.push('/full-body-checkup-health-packages');
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
                    _react2.default.createElement(_HelmetTags2.default, { tagsData: {
                            title: 'Compare Full body Health Checkup Packages from Top Labs | Book Online & Save upto 50%',
                            description: 'Compare and book full body health checkup packages from top labs at docprime.com. Avail exclusive discounts & save upto 50%. Get free home sample collection and online reports on time.'
                        } }),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12 col-md-7 col-lg-7 center-column' },
                        this.props.offerList && this.props.offerList.filter(x => x.slider_location === 'health_package_compare_page').length ? _react2.default.createElement(
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
                                { onClick: () => this.viewAllClick(), className: 'vw-all-static text-primary fw-500' },
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
                                        { href: '/lab/searchresults?test_ids=12387', onClick: e => {
                                                e.preventDefault();
                                                this.bookNowClicked('/lab/searchresults?test_ids=12387', 'TopbookNowClickedBlock1');
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
                                        { href: '/lab/searchresults?test_ids=12227', onClick: e => {
                                                e.preventDefault();
                                                this.bookNowClicked('/lab/searchresults?test_ids=12227', 'TopbookNowClickedBlock2');
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
                                            onClick: e => {
                                                e.preventDefault();
                                                this.bookNowClicked('/lab/searchresults?test_ids=11722', 'TopbookNowClickedBlock3');
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _index2 = __webpack_require__(/*! ../../components/diagnosis/healthPackage/index */ "./dev/js/components/diagnosis/healthPackage/index.js");

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HealthPackage extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return _react2.default.createElement(_index3.default, this.props);
    }
}

const mapStateToProps = (state, passedProps) => {

    const {
        offerList
    } = state.USER;

    return {
        offerList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getOfferList: (lat, long) => dispatch((0, _index.getOfferList)(lat, long)),
        toggleOPDCriteria: (type, criteria, forceAdd, filter) => dispatch((0, _index.toggleOPDCriteria)(type, criteria, forceAdd, filter)),
        toggleDiagnosisCriteria: (type, criteria, forceAdd, filter) => dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria, forceAdd, filter))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(HealthPackage);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL2hlYWx0aFBhY2thZ2UvSGVhbHRoUGFja2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvaGVhbHRoUGFja2FnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9kaWFnbm9zaXMvSGVhbHRoUGFja2FnZS5qcyJdLCJuYW1lcyI6WyJMb2FkZXIiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJyZW5kZXIiLCJjbGFzc1R5cGUiLCJpRnJhbWVQb3B1cCIsIkxhYlZpZXciLCJzdGF0ZSIsImNvbGxhcHNlIiwiZXhwYW5kQ2xpY2siLCJleHBhbmRUZXh0IiwiY29tcG9uZW50RGlkTW91bnQiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInNlbGVjdGVkTG9jYXRpb24iLCJsYXQiLCJsb25nIiwiZ2VvbWV0cnkiLCJsb2NhdGlvbiIsImxuZyIsImdldE9mZmVyTGlzdCIsInRvZ2dsZSIsImluZGV4Iiwic2V0U3RhdGUiLCJleHBhbmRBbGwiLCJtYXAiLCJ4IiwiYm9va05vd0NsaWNrZWQiLCJ1cmwiLCJ0cmFja2luZ05hbWUiLCJkYXRhIiwiR1RNIiwiZ2V0VXNlcklkIiwic2VuZEV2ZW50IiwiaHJlZiIsInZpZXdBbGxDbGljayIsImhpc3RvcnkiLCJwdXNoIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm9mZmVyTGlzdCIsImZpbHRlciIsInNsaWRlcl9sb2NhdGlvbiIsImxlbmd0aCIsInBhZGRpbmciLCJmb250U2l6ZSIsImZsZXgiLCJtYXJnaW5SaWdodCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwicG9zaXRpb24iLCJlIiwicHJldmVudERlZmF1bHQiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJiaW5kIiwiQVNTRVRTX0JBU0VfVVJMIiwiZm9vdGVyRGF0YSIsIkhlYWx0aFBhY2thZ2UiLCJtYXBTdGF0ZVRvUHJvcHMiLCJwYXNzZWRQcm9wcyIsIlVTRVIiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInRvZ2dsZU9QRENyaXRlcmlhIiwidHlwZSIsImNyaXRlcmlhIiwiZm9yY2VBZGQiLCJ0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsTUFBTUEsTUFBTixTQUFxQkMsZ0JBQU1DLFNBQTNCLENBQXFDO0FBQ2pDQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDSDs7QUFFREMsYUFBUzs7QUFFTCxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVcsS0FBS0QsS0FBTCxDQUFXRSxTQUFYLElBQXdCLGdCQUF4QztBQUNJLG1EQUFLLFdBQVUsV0FBZixHQURKO0FBR1EsaUJBQUtGLEtBQUwsQ0FBV0csV0FBWCxHQUNJO0FBQUE7QUFBQSxrQkFBRyxXQUFVLGVBQWI7QUFBQTtBQUFBLGFBREosR0FDK0U7QUFKdkYsU0FESjtBQVNIO0FBaEJnQzs7a0JBbUJ0QlAsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJmOzs7Ozs7a0JBRWVBLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxNQUFNUSxPQUFOLFNBQXNCUCxnQkFBTUMsU0FBNUIsQ0FBc0M7QUFDbENDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjtBQUNBLGFBQUtLLEtBQUwsR0FBYTtBQUNUQyxzQkFBVSxDQUFDLEtBQUQsRUFB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QUEyQjdCLE1BQTNCLEtBQXNDeUIsU0FBUyw4QkFBa0JFLElBQWxCLEVBQXdCQyxRQUF4QixFQUFrQ0MsUUFBbEMsRUFBNEM3QixNQUE1QyxDQUFULENBRnREO0FBR0g4QixpQ0FBeUIsQ0FBQ0gsSUFBRCxFQUFPQyxRQUFQLEVBQWlCQyxRQUFqQixFQUEyQjdCLE1BQTNCLEtBQXNDeUIsU0FBUyxvQ0FBd0JFLElBQXhCLEVBQThCQyxRQUE5QixFQUF3Q0MsUUFBeEMsRUFBa0Q3QixNQUFsRCxDQUFUO0FBSDVELEtBQVA7QUFLSCxDQU5EOztrQkFRZSx5QkFBUXFCLGVBQVIsRUFBeUJHLGtCQUF6QixFQUE2Q0osYUFBN0MsQyIsImZpbGUiOiI3OC5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBMb2FkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NUeXBlIHx8IFwibG9hZGVyQ2lyY3VsYXJcIn0gPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHAtbG9hZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlGcmFtZVBvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMTBcIj5SZWRpcmVjdGluZyB5b3UgdG8gUGhhcm1lYXN5IHdlYnNpdGUuLi48L3A+IDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlclxuIiwiaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9jb21tb25zL0xvYWRlcidcblxuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9MZWZ0QmFyJ1xuaW1wb3J0IFJpZ2h0QmFyIGZyb20gJy4uLy4uL2NvbW1vbnMvUmlnaHRCYXInXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi8uLi9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IEhlbG1ldFRhZ3MgZnJvbSAnLi4vLi4vY29tbW9ucy9IZWxtZXRUYWdzJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vLi4vY29uZmlnJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21tb25zL0hvbWUvZm9vdGVyJ1xuaW1wb3J0IEJhbm5lckNhcm91c2VsIGZyb20gJy4uLy4uL2NvbW1vbnMvSG9tZS9iYW5uZXJDYXJvdXNlbCc7XG5cbmNsYXNzIExhYlZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY29sbGFwc2U6IFtmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXSxcbiAgICAgICAgICAgIGV4cGFuZENsaWNrOiB0cnVlLFxuICAgICAgICAgICAgZXhwYW5kVGV4dDogJ0V4cGFuZCBBbGwnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2VsZWN0ZWRMb2NhdGlvbiA9ICcnXG4gICAgICAgIGxldCBsYXQgPSAyOC42NDQ4MDBcbiAgICAgICAgbGV0IGxvbmcgPSA3Ny4yMTY3MjFcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbikge1xuICAgICAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbiA9IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbjtcbiAgICAgICAgICAgIGxhdCA9IHNlbGVjdGVkTG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubGF0XG4gICAgICAgICAgICBsb25nID0gc2VsZWN0ZWRMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sbmdcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGF0ID09PSAnZnVuY3Rpb24nKSBsYXQgPSBsYXQoKVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsb25nID09PSAnZnVuY3Rpb24nKSBsb25nID0gbG9uZygpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb3BzLmdldE9mZmVyTGlzdChsYXQsIGxvbmcpO1xuICAgIH1cblxuICAgIHRvZ2dsZShpbmRleCkge1xuICAgICAgICBsZXQgY29sbGFwc2UgPSBbLi4udGhpcy5zdGF0ZS5jb2xsYXBzZV1cbiAgICAgICAgY29sbGFwc2VbaW5kZXhdID0gIWNvbGxhcHNlW2luZGV4XVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29sbGFwc2UgfSlcbiAgICB9XG5cbiAgICBleHBhbmRBbGwoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmV4cGFuZENsaWNrKSB7XG4gICAgICAgICAgICBsZXQgY29sbGFwc2UgPSB0aGlzLnN0YXRlLmNvbGxhcHNlLm1hcCgoeCkgPT4gdHJ1ZSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb2xsYXBzZSB9KVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGV4cGFuZENsaWNrOiAhdGhpcy5zdGF0ZS5leHBhbmRDbGljaywgZXhwYW5kVGV4dDogJ0NvbGxhcHNlIEFsbCcgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgY29sbGFwc2UgPSB0aGlzLnN0YXRlLmNvbGxhcHNlLm1hcCgoeCkgPT4gZmFsc2UpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29sbGFwc2UgfSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBleHBhbmRDbGljazogIXRoaXMuc3RhdGUuZXhwYW5kQ2xpY2ssIGV4cGFuZFRleHQ6ICdFeHBhbmQgQWxsJyB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJvb2tOb3dDbGlja2VkKHVybCwgdHJhY2tpbmdOYW1lKSB7XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogdHJhY2tpbmdOYW1lLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6IHRyYWNraW5nTmFtZVxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2aWV3QWxsQ2xpY2soKSB7XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvZnVsbC1ib2R5LWNoZWNrdXAtaGVhbHRoLXBhY2thZ2VzJylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG4gICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGFpbmVyLXRvcC1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVsbWV0VGFncyB0YWdzRGF0YT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQ29tcGFyZSBGdWxsIGJvZHkgSGVhbHRoIENoZWNrdXAgUGFja2FnZXMgZnJvbSBUb3AgTGFicyB8IEJvb2sgT25saW5lICYgU2F2ZSB1cHRvIDUwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdDb21wYXJlIGFuZCBib29rIGZ1bGwgYm9keSBoZWFsdGggY2hlY2t1cCBwYWNrYWdlcyBmcm9tIHRvcCBsYWJzIGF0IGRvY3ByaW1lLmNvbS4gQXZhaWwgZXhjbHVzaXZlIGRpc2NvdW50cyAmIHNhdmUgdXB0byA1MCUuIEdldCBmcmVlIGhvbWUgc2FtcGxlIGNvbGxlY3Rpb24gYW5kIG9ubGluZSByZXBvcnRzIG9uIHRpbWUuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNvbC1sZy03IGNlbnRlci1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub2ZmZXJMaXN0ICYmIHRoaXMucHJvcHMub2ZmZXJMaXN0LmZpbHRlcih4ID0+IHguc2xpZGVyX2xvY2F0aW9uID09PSAnaGVhbHRoX3BhY2thZ2VfY29tcGFyZV9wYWdlJykubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhbm5lckNhcm91c2VsIHsuLi50aGlzLnByb3BzfSBzbGlkZXJMb2NhdGlvbj1cImhlYWx0aF9wYWNrYWdlX2NvbXBhcmVfcGFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtcnQtMTBcIiBzdHlsZT17eyBwYWRkaW5nOiAnMCAxNXB4JyB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmdy01MDBcIiBzdHlsZT17eyBmb250U2l6ZTogMTYsIGZsZXg6IDEsIG1hcmdpblJpZ2h0OiA0IH19PlRvcCBmdWxsIGJvZHkgY2hlY2t1cCBwYWNrYWdlczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy52aWV3QWxsQ2xpY2soKX0gY2xhc3NOYW1lPVwidnctYWxsLXN0YXRpYyB0ZXh0LXByaW1hcnkgZnctNTAwXCI+VmlldyBhbGw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcnQtMTAgY3QtcHJvZmlsZSBza2luLXdoaXRlIGJvcmRlci1ib3R0b20tcmFkaW91cyBnb2xkLXJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGljLXBrLWNvbnRhaW5lciBzdGlja3ktcGstY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRpYy1wa2ctdG9wLWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLXBrZy1zdWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RjLXN1Yi1wYXJhXCI+UHJvIEFhcm9neWFtIDEuNyAoVGh5cm9jYXJlKSA8YnIgLz4oSW5jbHVkZXMgODYgdGVzdHMpPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdGMtcHJpY2UtY3V0XCI+4oK5IDIwMDA8c3Bhbj7igrkgMjQwMDwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGljLXBrZy10b3AtY29sdW1uIHN0Yy1taWQtbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLXBrZy1zdWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RjLXN1Yi1wYXJhXCI+QWFyb2d5YW0gQlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChUaHlyb2NhcmUpIDxiciAvPihJbmNsdWRlcyA2MCB0ZXN0cyk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN0Yy1wcmljZS1jdXRcIj7igrkgNDk5IDxzcGFuPuKCuSA3NTA8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRpYy1wa2ctdG9wLWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLXBrZy1zdWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RjLXN1Yi1wYXJhXCI+TUVUIEhlYWx0aHkgWW91dGggKDI1IFlSUyAmIEFib3ZlKSA8YnIgLz4oSW5jbHVkZXMgNTYgdGVzdHMpPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdGMtcHJpY2UtY3V0XCI+4oK5IDEwOTkgPHNwYW4+4oK5IDM2NDA8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRpYy1way1jb250YWluZXIgc3RpY2t5LXBrLWNvbnRhaW5lci0yXCIgc3R5bGU9e3sgcGFkZGluZ1RvcDogMCwgcGFkZGluZ0JvdHRvbTogMzAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRpYy1wa2ctdG9wLWNvbHVtblwiIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLW9mZnItY3BuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN0Yy1vZmYtcGFyYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTYlIE9GRiArIOKCuSAxMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9GRiBDb3Vwb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RjLWZyZWUtcGlja1wiPkZyZWUgSG9tZSBQaWNrdXA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9sYWIvc2VhcmNocmVzdWx0cz90ZXN0X2lkcz0xMjM4N1wiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvb2tOb3dDbGlja2VkKCcvbGFiL3NlYXJjaHJlc3VsdHM/dGVzdF9pZHM9MTIzODcnLCAnVG9wYm9va05vd0NsaWNrZWRCbG9jazEnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cInN0Yy1ib29rLWJ0blwiPkJvb2sgTm93PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdWxhci10eHRcIiBzdHlsZT17eyB0b3A6ICd1bnNldCcsIHJpZ2h0OiAndW5zZXQnLCBib3R0b206ICctMjZweCcsIGxlZnQ6ICc1MCUnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJyB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMFwiPlBvcHVsYXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGljLXBrZy10b3AtY29sdW1uIHN0Yy1taWQtbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLW9mZnItY3BuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN0Yy1vZmYtcGFyYVwiPjMzJSBPRkYgKyDigrkgMTAwIE9GRiBDb3Vwb248L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RjLWZyZWUtcGlja1wiPkZyZWUgSG9tZSBQaWNrdXA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9sYWIvc2VhcmNocmVzdWx0cz90ZXN0X2lkcz0xMjIyN1wiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvb2tOb3dDbGlja2VkKCcvbGFiL3NlYXJjaHJlc3VsdHM/dGVzdF9pZHM9MTIyMjcnLCAnVG9wYm9va05vd0NsaWNrZWRCbG9jazInKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN0Yy1ib29rLWJ0blwiPkJvb2sgTm93PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRpYy1wa2ctdG9wLWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLW9mZnItY3BuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN0Yy1vZmYtcGFyYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNjklIE9GRiArIOKCuSAxMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9GRiBDb3Vwb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RjLWZyZWUtcGlja1wiPkZyZWUgSG9tZSBQaWNrdXA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9sYWIvc2VhcmNocmVzdWx0cz90ZXN0X2lkcz0xMTcyMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9va05vd0NsaWNrZWQoJy9sYWIvc2VhcmNocmVzdWx0cz90ZXN0X2lkcz0xMTcyMicsICdUb3Bib29rTm93Q2xpY2tlZEJsb2NrMycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN0Yy1ib29rLWJ0blwiPkJvb2sgTm93PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3Jkbi1jb250YW5pbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwic3RjLWV4cG5kLWJ0biBtcnQtMTBcIiBvbkNsaWNrPXt0aGlzLmV4cGFuZEFsbC5iaW5kKHRoaXMpfT57dGhpcy5zdGF0ZS5leHBhbmRUZXh0fTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY2NvcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1oZWFkaW5nIHN0Yy1uby1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UHJlcGFyYXRpb248L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOC0xMCBocnMgb2YgZmFzdGluZyByZXF1aXJlZCBiZWZvcmUgc2FtcGxlIGNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDgtMTAgaHJzIG9mIGZhc3RpbmcgcmVxdWlyZWQgYmVmb3JlIHNhbXBsZSBjb2xsZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDgtMTAgaHJzIG9mIGZhc3RpbmcgcmVxdWlyZWQgYmVmb3JlIHNhbXBsZSBjb2xsZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY2NvcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1oZWFkaW5nIHN0Yy1uby1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGVzdHMgSW5jbHVkZWQgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA2MFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1NlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNjb3JkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtaGVhZGluZ1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgMCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DQkMgSGFlbW9ncmFtIFRlc3RzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhcHNlWzBdID8gPGltZyBjbGFzc05hbWU9XCJ0aXRsZWFycm93XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+IDogPGltZyBjbGFzc05hbWU9XCJ0aXRsZWFycm93XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgcGItMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyOFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyOFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGFwc2VbMF0gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzcGFuPkNvbXBsZXRlIEJsb29kIENvdW50IChDQkMpIGlzIGEgYmxvb2QgdGVzdCB0aGF0IG1lYXN1cmVzIFJlZCBibG9vZCBjZWxscyAoUkJDKSwgV2hpdGUgYmxvb2QgY2VsbHMgKFdCQyksIFBsYXRlbGV0cyAoUExUcyksIEhlbW9nbG9iaW4gKEhiKSwgYW5kIEhlbWF0b2NyaXQgKEhjdCkgaW4gdGhlIGJsb29kLiBUaGlzIHRlc3QgaXMgdXNlZCB0byBkZXRlcm1pbmUgdGhlIG92ZXJhbGwgaGVhbHRoIGFuZCBzY3JlZW4gZm9yIGFueSBkaXNlYXNlcyB0aGF0IGFmZmVjdCB0aGUgYmxvb2QgY2VsbHMuPC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBzdGMtaGlkZS1hY3JkLWNvbnRhaW5lciBwdC0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPHA+Q29tcGxldGUgQmxvb2QgQ291bnQgKENCQykgaXMgYSBibG9vZCB0ZXN0IHRoYXQgbWVhc3VyZXMgUmVkIGJsb29kIGNlbGxzIChSQkMpLCBXaGl0ZSBibG9vZCBjZWxscyAoV0JDKSwgUGxhdGVsZXRzIChQTFRzKSwgSGVtb2dsb2JpbiAoSGIpLCBhbmQgSGVtYXRvY3JpdCAoSGN0KSBpbiB0aGUgYmxvb2QuIFRoaXMgdGVzdCBpcyB1c2VkIHRvIGRldGVybWluZSB0aGUgb3ZlcmFsbCBoZWFsdGggYW5kIHNjcmVlbiBmb3IgYW55IGRpc2Vhc2VzIHRoYXQgYWZmZWN0IHRoZSBibG9vZCBjZWxscy5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3RcIj5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlRvdGFsIFJCQzwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5SZWQgQ2VsbCBEaXN0cmlidXRpb24gV2lkdGggKFJEVy1DVik8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+UmVkIENlbGwgRGlzdHJpYnV0aW9uIFdpZHRoIC0gU0QoUkRXLVNEKTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5QbGF0ZWxldCBUbyBMYXJnZSBDZWxsIFJhdGlvIChQTENSKTwvcD48L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsYXRlbGV0IENvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lYW4gQ29ycHVzY3VsYXIgSGVtb2dsb2JpbiAoTUNIKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZWFuIENvcnAuSGVtby5Db25jIChNQ0hDKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZWFuIENvcnB1c2N1bGFyIFZvbHVtZSAoTUNWKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb25vY3l0ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVhbiBQbGF0ZWxldCBWb2x1bWUgKE1QVilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV1dHJvcGhpbHMgKE5QKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdWNsZWF0ZWQgUmVkIEJsb29kIENlbGxzIChOUkJDKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGF0ZWxldGNyaXQgKFBDVClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVtYXRvY3JpdCAoUENWKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGF0ZWxldCBEaXN0cmlidXRpb24gV2lkdGggKFBEVylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVtb2dsb2JpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFb3Npbm9waGlscyAoRVApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEltbWF0dXJlIEdyYW51bG9jeXRlcyAoSUcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhc29waGlscyAtIEFic29sdXRlIENvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVvc2lub3BoaWxzIC0gQWJzb2x1dGUgQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTHltcGhvY3l0ZXMtIEFic29sdXRlIENvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vbm9jeXRlcy0gQWJzb2x1dGUgQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV1dHJvcGhpbHMtIEFic29sdXRlIENvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhc29waGlscyAoQlMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEx5bXBob2N5dGUgUGVyY2VudGFnZSAoTEMlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb3RhbCBMZXVjb2N5dGVzIENvdW50IChUTEMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51Y2xlYXRlZCBSZWQgQmxvb2QgQ2VsbHMgKE5SQkMlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbW1hdHVyZSBHcmFudWxvY3l0ZSBQZXJjZW50YWdlKElHJSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8cD5Db21wbGV0ZSBCbG9vZCBDb3VudCAoQ0JDKSBpcyBhIGJsb29kIHRlc3QgdGhhdCBtZWFzdXJlcyBSZWQgYmxvb2QgY2VsbHMgKFJCQyksIFdoaXRlIGJsb29kIGNlbGxzIChXQkMpLCBQbGF0ZWxldHMgKFBMVHMpLCBIZW1vZ2xvYmluIChIYiksIGFuZCBIZW1hdG9jcml0IChIY3QpIGluIHRoZSBibG9vZC4gVGhpcyB0ZXN0IGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSBvdmVyYWxsIGhlYWx0aCBhbmQgc2NyZWVuIGZvciBhbnkgZGlzZWFzZXMgdGhhdCBhZmZlY3QgdGhlIGJsb29kIGNlbGxzLlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RjLWRhdGEtdWwtbGlzdFwiPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VG90YWwgUkJDPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlJlZCBDZWxsIERpc3RyaWJ1dGlvbiBXaWR0aCAoUkRXLUNWKTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5SZWQgQ2VsbCBEaXN0cmlidXRpb24gV2lkdGggLSBTRChSRFctU0QpPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlBsYXRlbGV0IFRvIExhcmdlIENlbGwgUmF0aW8gKFBMQ1IpPC9wPjwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxhdGVsZXQgQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVhbiBDb3JwdXNjdWxhciBIZW1vZ2xvYmluIChNQ0gpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lYW4gQ29ycC5IZW1vLkNvbmMgKE1DSEMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lYW4gQ29ycHVzY3VsYXIgVm9sdW1lIChNQ1YpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vbm9jeXRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZWFuIFBsYXRlbGV0IFZvbHVtZSAoTVBWKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXV0cm9waGlscyAoTlApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51Y2xlYXRlZCBSZWQgQmxvb2QgQ2VsbHMgKE5SQkMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsYXRlbGV0Y3JpdCAoUENUKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZW1hdG9jcml0IChQQ1YpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsYXRlbGV0IERpc3RyaWJ1dGlvbiBXaWR0aCAoUERXKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZW1vZ2xvYmluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVvc2lub3BoaWxzIChFUClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW1tYXR1cmUgR3JhbnVsb2N5dGVzIChJRylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmFzb3BoaWxzIC0gQWJzb2x1dGUgQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW9zaW5vcGhpbHMgLSBBYnNvbHV0ZSBDb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMeW1waG9jeXRlcy0gQWJzb2x1dGUgQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9ub2N5dGVzLSBBYnNvbHV0ZSBDb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXV0cm9waGlscy0gQWJzb2x1dGUgQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmFzb3BoaWxzIChCUylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTHltcGhvY3l0ZSBQZXJjZW50YWdlIChMQyUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvdGFsIExldWNvY3l0ZXMgQ291bnQgKFRMQylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVjbGVhdGVkIFJlZCBCbG9vZCBDZWxscyAoTlJCQyUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEltbWF0dXJlIEdyYW51bG9jeXRlIFBlcmNlbnRhZ2UoSUclKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPHA+Q29tcGxldGUgQmxvb2QgQ291bnQgKENCQykgaXMgYSBibG9vZCB0ZXN0IHRoYXQgbWVhc3VyZXMgUmVkIGJsb29kIGNlbGxzIChSQkMpLCBXaGl0ZSBibG9vZCBjZWxscyAoV0JDKSwgUGxhdGVsZXRzIChQTFRzKSwgSGVtb2dsb2JpbiAoSGIpLCBhbmQgSGVtYXRvY3JpdCAoSGN0KSBpbiB0aGUgYmxvb2QuIFRoaXMgdGVzdCBpcyB1c2VkIHRvIGRldGVybWluZSB0aGUgb3ZlcmFsbCBoZWFsdGggYW5kIHNjcmVlbiBmb3IgYW55IGRpc2Vhc2VzIHRoYXQgYWZmZWN0IHRoZSBibG9vZCBjZWxscy5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3RcIj5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlRvdGFsIFJCQzwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5SZWQgQ2VsbCBEaXN0cmlidXRpb24gV2lkdGggKFJEVy1DVik8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+UmVkIENlbGwgRGlzdHJpYnV0aW9uIFdpZHRoIC0gU0QoUkRXLVNEKTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5QbGF0ZWxldCBUbyBMYXJnZSBDZWxsIFJhdGlvIChQTENSKTwvcD48L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsYXRlbGV0IENvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lYW4gQ29ycHVzY3VsYXIgSGVtb2dsb2JpbiAoTUNIKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZWFuIENvcnAuSGVtby5Db25jIChNQ0hDKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZWFuIENvcnB1c2N1bGFyIFZvbHVtZSAoTUNWKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb25vY3l0ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVhbiBQbGF0ZWxldCBWb2x1bWUgKE1QVilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV1dHJvcGhpbHMgKE5QKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdWNsZWF0ZWQgUmVkIEJsb29kIENlbGxzIChOUkJDKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGF0ZWxldGNyaXQgKFBDVClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVtYXRvY3JpdCAoUENWKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGF0ZWxldCBEaXN0cmlidXRpb24gV2lkdGggKFBEVylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVtb2dsb2JpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFb3Npbm9waGlscyAoRVApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEltbWF0dXJlIEdyYW51bG9jeXRlcyAoSUcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhc29waGlscyAtIEFic29sdXRlIENvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVvc2lub3BoaWxzIC0gQWJzb2x1dGUgQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTHltcGhvY3l0ZXMtIEFic29sdXRlIENvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vbm9jeXRlcy0gQWJzb2x1dGUgQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV1dHJvcGhpbHMtIEFic29sdXRlIENvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhc29waGlscyAoQlMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEx5bXBob2N5dGUgUGVyY2VudGFnZSAoTEMlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb3RhbCBMZXVjb2N5dGVzIENvdW50IChUTEMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51Y2xlYXRlZCBSZWQgQmxvb2QgQ2VsbHMgKE5SQkMlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbW1hdHVyZSBHcmFudWxvY3l0ZSBQZXJjZW50YWdlKElHJSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY2NvcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1oZWFkaW5nXCIgb25DbGljaz17dGhpcy50b2dnbGUuYmluZCh0aGlzLCAxNSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DaG9sZXN0ZXJvbC1Ub3RhbCBTZXJ1bTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ0aXRsZWFycm93XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHBiLTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhY3JkLXN0Yy1yZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjcmQtc3RjLXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhcHNlWzE1XSA/IDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBzdGMtaGlkZS1hY3JkLWNvbnRhaW5lciBwdC0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BIFwibWFsZSBob3Jtb25lXCIgLS0gYSBzZXggaG9ybW9uZSBwcm9kdWNlZCBieSB0aGUgdGVzdGVzIHRoYXQgZW5jb3VyYWdlcyB0aGUgZGV2ZWxvcG1lbnQgb2YgbWFsZSBzZXh1YWwgY2hhcmFjdGVyaXN0aWNzLCBzdGltdWxhdGVzIHRoZSBhY3Rpdml0eSBvZiB0aGUgbWFsZSBzZWNvbmRhcnkgc2V4IGNoYXJhY3RlcmlzdGljcywgYW5kIHByZXZlbnRzIGNoYW5nZXMgaW4gdGhlbSBmb2xsb3dpbmcgY2FzdHJhdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY2NvcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1oZWFkaW5nXCIgb25DbGljaz17dGhpcy50b2dnbGUuYmluZCh0aGlzLCAxNil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TR1BUIEFMVDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ0aXRsZWFycm93XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHBiLTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhY3JkLXN0Yy1yZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjcmQtc3RjLXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhcHNlWzE2XSA/IDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBzdGMtaGlkZS1hY3JkLWNvbnRhaW5lciBwdC0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BIFwibWFsZSBob3Jtb25lXCIgLS0gYSBzZXggaG9ybW9uZSBwcm9kdWNlZCBieSB0aGUgdGVzdGVzIHRoYXQgZW5jb3VyYWdlcyB0aGUgZGV2ZWxvcG1lbnQgb2YgbWFsZSBzZXh1YWwgY2hhcmFjdGVyaXN0aWNzLCBzdGltdWxhdGVzIHRoZSBhY3Rpdml0eSBvZiB0aGUgbWFsZSBzZWNvbmRhcnkgc2V4IGNoYXJhY3RlcmlzdGljcywgYW5kIHByZXZlbnRzIGNoYW5nZXMgaW4gdGhlbSBmb2xsb3dpbmcgY2FzdHJhdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY2NvcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1oZWFkaW5nXCIgb25DbGljaz17dGhpcy50b2dnbGUuYmluZCh0aGlzLCAxNyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Sb3V0aW5lIFVyaW5lIEFuYWx5c2lzIChSVUEpPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInRpdGxlYXJyb3dcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgcGItMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjcmQtc3RjLXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGFwc2VbMTddID8gPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHN0Yy1oaWRlLWFjcmQtY29udGFpbmVyIHB0LTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkEgXCJtYWxlIGhvcm1vbmVcIiAtLSBhIHNleCBob3Jtb25lIHByb2R1Y2VkIGJ5IHRoZSB0ZXN0ZXMgdGhhdCBlbmNvdXJhZ2VzIHRoZSBkZXZlbG9wbWVudCBvZiBtYWxlIHNleHVhbCBjaGFyYWN0ZXJpc3RpY3MsIHN0aW11bGF0ZXMgdGhlIGFjdGl2aXR5IG9mIHRoZSBtYWxlIHNlY29uZGFyeSBzZXggY2hhcmFjdGVyaXN0aWNzLCBhbmQgcHJldmVudHMgY2hhbmdlcyBpbiB0aGVtIGZvbGxvd2luZyBjYXN0cmF0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjY29yZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWhlYWRpbmdcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsIDE4KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNlcnVtIENyZWF0aW5pbmU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidGl0bGVhcnJvd1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBwYi0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhY3JkLXN0Yy1yZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb2xsYXBzZVsxOF0gPyA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgc3RjLWhpZGUtYWNyZC1jb250YWluZXIgcHQtMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QSBcIm1hbGUgaG9ybW9uZVwiIC0tIGEgc2V4IGhvcm1vbmUgcHJvZHVjZWQgYnkgdGhlIHRlc3RlcyB0aGF0IGVuY291cmFnZXMgdGhlIGRldmVsb3BtZW50IG9mIG1hbGUgc2V4dWFsIGNoYXJhY3RlcmlzdGljcywgc3RpbXVsYXRlcyB0aGUgYWN0aXZpdHkgb2YgdGhlIG1hbGUgc2Vjb25kYXJ5IHNleCBjaGFyYWN0ZXJpc3RpY3MsIGFuZCBwcmV2ZW50cyBjaGFuZ2VzIGluIHRoZW0gZm9sbG93aW5nIGNhc3RyYXRpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjY29yZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWhlYWRpbmdcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsIDEpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TGl2ZXIgRnVuY3Rpb24gVGVzdDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ0aXRsZWFycm93XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHBiLTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhcHNlWzFdID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TGl2ZXIgZnVuY3Rpb24gdGVzdHMgYXJlIGJsb29kIHRlc3RzIHVzZWQgdG8gaGVscCBkaWFnbm9zZSBhbmQgbW9uaXRvciBsaXZlciBkaXNlYXNlIG9yIGRhbWFnZS4gVGhlIHRlc3RzIG1lYXN1cmUgdGhlIGxldmVscyBvZiBjZXJ0YWluIGVuenltZXMgYW5kIHByb3RlaW5zIGluIHlvdXIgYmxvb2QuPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBzdGMtaGlkZS1hY3JkLWNvbnRhaW5lciBwdC0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPHA+TGl2ZXIgZnVuY3Rpb24gdGVzdHMgYXJlIGJsb29kIHRlc3RzIHVzZWQgdG8gaGVscCBkaWFnbm9zZSBhbmQgbW9uaXRvciBsaXZlciBkaXNlYXNlIG9yIGRhbWFnZS4gVGhlIHRlc3RzIG1lYXN1cmUgdGhlIGxldmVscyBvZiBjZXJ0YWluIGVuenltZXMgYW5kIHByb3RlaW5zIGluIHlvdXIgYmxvb2QuIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtbWEgR2x1dGFteWwgVHJhbnNmZXJhc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFsa2FsaW5lIFBob3NwaGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlsaXJ1YmluLURpcmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlsaXJ1YmluLVRvdGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWxpcnViaW4tSW5kaXJlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb3RlaW4gLXRvdGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ1bSBBbGJ1bWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ1bSBHbG9idWxpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU0dPVChBU1QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTR1BUKEFMVClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnVtIEFsYnVtaW4gL0dsb2J1bGluIFJhdGlvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxwPkxpdmVyIGZ1bmN0aW9uIHRlc3RzIGFyZSBibG9vZCB0ZXN0cyB1c2VkIHRvIGhlbHAgZGlhZ25vc2UgYW5kIG1vbml0b3IgbGl2ZXIgZGlzZWFzZSBvciBkYW1hZ2UuIFRoZSB0ZXN0cyBtZWFzdXJlIHRoZSBsZXZlbHMgb2YgY2VydGFpbiBlbnp5bWVzIGFuZCBwcm90ZWlucyBpbiB5b3VyIGJsb29kLiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbW1hIEdsdXRhbXlsIFRyYW5zZmVyYXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbGthbGluZSBQaG9zcGhhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpbGlydWJpbi1EaXJlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpbGlydWJpbi1Ub3RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlsaXJ1YmluLUluZGlyZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm90ZWluIC10b3RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VydW0gQWxidW1pblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VydW0gR2xvYnVsaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNHT1QoQVNUKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU0dQVChBTFQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ1bSBBbGJ1bWluIC9HbG9idWxpbiBSYXRpb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxwPkxpdmVyIGZ1bmN0aW9uIHRlc3RzIGFyZSBibG9vZCB0ZXN0cyB1c2VkIHRvIGhlbHAgZGlhZ25vc2UgYW5kIG1vbml0b3IgbGl2ZXIgZGlzZWFzZSBvciBkYW1hZ2UuIFRoZSB0ZXN0cyBtZWFzdXJlIHRoZSBsZXZlbHMgb2YgY2VydGFpbiBlbnp5bWVzIGFuZCBwcm90ZWlucyBpbiB5b3VyIGJsb29kLiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbW1hIEdsdXRhbXlsIFRyYW5zZmVyYXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbGthbGluZSBQaG9zcGhhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpbGlydWJpbi1EaXJlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpbGlydWJpbi1Ub3RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlsaXJ1YmluLUluZGlyZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm90ZWluIC10b3RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VydW0gQWxidW1pblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VydW0gR2xvYnVsaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNHT1QoQVNUKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU0dQVChBTFQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ1bSBBbGJ1bWluIC9HbG9idWxpbiBSYXRpb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjY29yZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWhlYWRpbmdcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsIDIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TGlwaWQgUHJvZmlsZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ0aXRsZWFycm93XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHBiLTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhcHNlWzJdID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+IDxzcGFuPkxpcGlkIHByb2ZpbGUgdGVzdCBpcyBhIHNldCBvZiB0ZXN0cyB1c2VkIHRvIG1lYXN1cmUgdGhlIGFtb3VudCBvZiBjaG9sZXN0ZXJvbCBhbmQgb3RoZXIgdHlwZXMgb2YgZmF0cyBwcmVzZW50IGluIHlvdXIgYmxvb2QuIFRoaXMgdGVzdCBpcyBoZWxwZnVsIGluIGFzc2Vzc2luZyB0aGUgcmlzayBvZiBjYXJkaW92YXNjdWxhciBkaXNlYXNlcyAoQ1ZEKS48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHN0Yy1oaWRlLWFjcmQtY29udGFpbmVyIHB0LTAgdGV4dC1jZW50ZXJcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKn0gPHA+TGlwaWQgcHJvZmlsZSB0ZXN0IGlzIGEgc2V0IG9mIHRlc3RzIHVzZWQgdG8gbWVhc3VyZSB0aGUgYW1vdW50IG9mIGNob2xlc3Rlcm9sIGFuZCBvdGhlciB0eXBlcyBvZiBmYXRzIHByZXNlbnQgaW4geW91ciBibG9vZC4gVGhpcyB0ZXN0IGlzIGhlbHBmdWwgaW4gYXNzZXNzaW5nIHRoZSByaXNrIG9mIGNhcmRpb3Zhc2N1bGFyIGRpc2Vhc2VzIChDVkQpLlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RjLWRhdGEtdWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5MREwgQ2hvbGVzdHJvbDwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5Ub3RhbCBDaG9sZXN0ZXJvbDwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5IREwgQ2hvbGVzdGVyb2w8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VHJpZ2x5Y2VyaWRlczwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5WTERMIENob2xlc3Rlcm9sPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkxETC9IREwgUmF0aW88L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+Tm9uIC0gSERMIENob2xlc3Rlcm9sPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlRDL0hETCBDaG9sZXN0ZXJvbCBSYXRpbzwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKn0gPHA+TGlwaWQgcHJvZmlsZSB0ZXN0IGlzIGEgc2V0IG9mIHRlc3RzIHVzZWQgdG8gbWVhc3VyZSB0aGUgYW1vdW50IG9mIGNob2xlc3Rlcm9sIGFuZCBvdGhlciB0eXBlcyBvZiBmYXRzIHByZXNlbnQgaW4geW91ciBibG9vZC4gVGhpcyB0ZXN0IGlzIGhlbHBmdWwgaW4gYXNzZXNzaW5nIHRoZSByaXNrIG9mIGNhcmRpb3Zhc2N1bGFyIGRpc2Vhc2VzIChDVkQpLlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RjLWRhdGEtdWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5MREwgQ2hvbGVzdHJvbDwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5Ub3RhbCBDaG9sZXN0ZXJvbDwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5IREwgQ2hvbGVzdGVyb2w8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VHJpZ2x5Y2VyaWRlczwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5WTERMIENob2xlc3Rlcm9sPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkxETC9IREwgUmF0aW88L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+Tm9uIC0gSERMIENob2xlc3Rlcm9sPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlRDL0hETCBDaG9sZXN0ZXJvbCBSYXRpbzwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qfSA8cD5MaXBpZCBwcm9maWxlIHRlc3QgaXMgYSBzZXQgb2YgdGVzdHMgdXNlZCB0byBtZWFzdXJlIHRoZSBhbW91bnQgb2YgY2hvbGVzdGVyb2wgYW5kIG90aGVyIHR5cGVzIG9mIGZhdHMgcHJlc2VudCBpbiB5b3VyIGJsb29kLiBUaGlzIHRlc3QgaXMgaGVscGZ1bCBpbiBhc3Nlc3NpbmcgdGhlIHJpc2sgb2YgY2FyZGlvdmFzY3VsYXIgZGlzZWFzZXMgKENWRCkuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkxETCBDaG9sZXN0cm9sPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlRvdGFsIENob2xlc3Rlcm9sPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkhETCBDaG9sZXN0ZXJvbDwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5UcmlnbHljZXJpZGVzPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlZMREwgQ2hvbGVzdGVyb2w8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+TERML0hETCBSYXRpbzwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5Ob24gLSBIREwgQ2hvbGVzdGVyb2w8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VEMvSERMIENob2xlc3Rlcm9sIFJhdGlvPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY2NvcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1oZWFkaW5nXCIgb25DbGljaz17dGhpcy50b2dnbGUuYmluZCh0aGlzLCAzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPktpZG5leSBGdW5jdGlvbiBUZXN0PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInRpdGxlYXJyb3dcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgcGItMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGFwc2VbM10gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5LaWRuZXlzIHBsYXkgYW4gaW1wb3J0YW50IHJvbGUgaW4gdGhlIHJlbW92YWwgb2Ygd2FzdGUgcHJvZHVjdHMgYW5kIG1haW50ZW5hbmNlIG9mIHdhdGVyIGFuZCBlbGVjdHJvbHl0ZSBiYWxhbmNlIGluIHRoZSBib2R5LiBLaWRuZXkgRnVuY3Rpb24gVGVzdCAoS0ZUKSBpbmNsdWRlcyBhIGdyb3VwIG9mIGJsb29kIHRlc3RzIHRvIGRldGVybWluZSBob3cgd2VsbCB0aGUga2lkbmV5cyBhcmUgd29ya2luZy48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHN0Yy1oaWRlLWFjcmQtY29udGFpbmVyIHB0LTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8cD5LaWRuZXlzIHBsYXkgYW4gaW1wb3J0YW50IHJvbGUgaW4gdGhlIHJlbW92YWwgb2Ygd2FzdGUgcHJvZHVjdHMgYW5kIG1haW50ZW5hbmNlIG9mIHdhdGVyIGFuZCBlbGVjdHJvbHl0ZSBiYWxhbmNlIGluIHRoZSBib2R5LiBLaWRuZXkgRnVuY3Rpb24gVGVzdCAoS0ZUKSBpbmNsdWRlcyBhIGdyb3VwIG9mIGJsb29kIHRlc3RzIHRvIGRldGVybWluZSBob3cgd2VsbCB0aGUga2lkbmV5cyBhcmUgd29ya2luZy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkNyZWF0aW5pbmU8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VXJpYyBBY2lkIChVQSk8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+Qmxvb2QgVXJlYSBOaXRyb2dlbiAoQlVOKTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5CVU4vIFNlcnVtIENyZWF0aW5pbmUgUmF0aW88L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+Q2FsY2l1bTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxwPktpZG5leXMgcGxheSBhbiBpbXBvcnRhbnQgcm9sZSBpbiB0aGUgcmVtb3ZhbCBvZiB3YXN0ZSBwcm9kdWN0cyBhbmQgbWFpbnRlbmFuY2Ugb2Ygd2F0ZXIgYW5kIGVsZWN0cm9seXRlIGJhbGFuY2UgaW4gdGhlIGJvZHkuIEtpZG5leSBGdW5jdGlvbiBUZXN0IChLRlQpIGluY2x1ZGVzIGEgZ3JvdXAgb2YgYmxvb2QgdGVzdHMgdG8gZGV0ZXJtaW5lIGhvdyB3ZWxsIHRoZSBraWRuZXlzIGFyZSB3b3JraW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+Q3JlYXRpbmluZTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5VcmljIEFjaWQgKFVBKTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5CbG9vZCBVcmVhIE5pdHJvZ2VuIChCVU4pPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkJVTi8gU2VydW0gQ3JlYXRpbmluZSBSYXRpbzwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5DYWxjaXVtPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8cD5LaWRuZXlzIHBsYXkgYW4gaW1wb3J0YW50IHJvbGUgaW4gdGhlIHJlbW92YWwgb2Ygd2FzdGUgcHJvZHVjdHMgYW5kIG1haW50ZW5hbmNlIG9mIHdhdGVyIGFuZCBlbGVjdHJvbHl0ZSBiYWxhbmNlIGluIHRoZSBib2R5LiBLaWRuZXkgRnVuY3Rpb24gVGVzdCAoS0ZUKSBpbmNsdWRlcyBhIGdyb3VwIG9mIGJsb29kIHRlc3RzIHRvIGRldGVybWluZSBob3cgd2VsbCB0aGUga2lkbmV5cyBhcmUgd29ya2luZy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkNyZWF0aW5pbmU8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VXJpYyBBY2lkIChVQSk8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+Qmxvb2QgVXJlYSBOaXRyb2dlbiAoQlVOKTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5CVU4vIFNlcnVtIENyZWF0aW5pbmUgUmF0aW88L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+Q2FsY2l1bTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNjb3JkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtaGVhZGluZ1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgNCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UaHlyb2lkIFBhbmVsIDE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidGl0bGVhcnJvd1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBwYi0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb2xsYXBzZVs0XSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlRoeXJvaWQgZnVuY3Rpb24gdGVzdHMgKFRGVHMpIGlzIGEgY29sbGVjdGl2ZSB0ZXJtIGZvciBibG9vZCB0ZXN0cyB1c2VkIHRvIGNoZWNrIHRoZSBmdW5jdGlvbiBvZiB0aGUgdGh5cm9pZC4gQSBURlQgcGFuZWwgdHlwaWNhbGx5IGluY2x1ZGVzIHRoeXJvaWQgaG9ybW9uZXMgc3VjaCBhcyB0aHlyb2lkLXN0aW11bGF0aW5nIGhvcm1vbmUgKFRTSCwgdGh5cm90cm9waW4pIGFuZCB0aHlyb3hpbmUgKFQ0KSwgYW5kIHRyaWlvZG90aHlyb25pbmUgKFQzKS48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHN0Yy1oaWRlLWFjcmQtY29udGFpbmVyIHB0LTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8cD5UaHlyb2lkIGZ1bmN0aW9uIHRlc3RzIChURlRzKSBpcyBhIGNvbGxlY3RpdmUgdGVybSBmb3IgYmxvb2QgdGVzdHMgdXNlZCB0byBjaGVjayB0aGUgZnVuY3Rpb24gb2YgdGhlIHRoeXJvaWQuIEEgVEZUIHBhbmVsIHR5cGljYWxseSBpbmNsdWRlcyB0aHlyb2lkIGhvcm1vbmVzIHN1Y2ggYXMgdGh5cm9pZC1zdGltdWxhdGluZyBob3Jtb25lIChUU0gsIHRoeXJvdHJvcGluKSBhbmQgdGh5cm94aW5lIChUNCksIGFuZCB0cmlpb2RvdGh5cm9uaW5lIChUMykuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RjLWRhdGEtdWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5UcmlJb2RvdGh5cm9uaW5lIChUMyk8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VGh5cm94aW5lIC0gVDQgVG90YWw8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VFNIIC0gVGh5cm9pZCBTdGltdWxhdGluZyBIb3Jtb25lPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPHA+VGh5cm9pZCBmdW5jdGlvbiB0ZXN0cyAoVEZUcykgaXMgYSBjb2xsZWN0aXZlIHRlcm0gZm9yIGJsb29kIHRlc3RzIHVzZWQgdG8gY2hlY2sgdGhlIGZ1bmN0aW9uIG9mIHRoZSB0aHlyb2lkLiBBIFRGVCBwYW5lbCB0eXBpY2FsbHkgaW5jbHVkZXMgdGh5cm9pZCBob3Jtb25lcyBzdWNoIGFzIHRoeXJvaWQtc3RpbXVsYXRpbmcgaG9ybW9uZSAoVFNILCB0aHlyb3Ryb3BpbikgYW5kIHRoeXJveGluZSAoVDQpLCBhbmQgdHJpaW9kb3RoeXJvbmluZSAoVDMpLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VHJpSW9kb3RoeXJvbmluZSAoVDMpPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlRoeXJveGluZSAtIFQ0IFRvdGFsPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlRTSCAtIFRoeXJvaWQgU3RpbXVsYXRpbmcgSG9ybW9uZTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPHA+VGh5cm9pZCBmdW5jdGlvbiB0ZXN0cyAoVEZUcykgaXMgYSBjb2xsZWN0aXZlIHRlcm0gZm9yIGJsb29kIHRlc3RzIHVzZWQgdG8gY2hlY2sgdGhlIGZ1bmN0aW9uIG9mIHRoZSB0aHlyb2lkLiBBIFRGVCBwYW5lbCB0eXBpY2FsbHkgaW5jbHVkZXMgdGh5cm9pZCBob3Jtb25lcyBzdWNoIGFzIHRoeXJvaWQtc3RpbXVsYXRpbmcgaG9ybW9uZSAoVFNILCB0aHlyb3Ryb3BpbikgYW5kIHRoeXJveGluZSAoVDQpLCBhbmQgdHJpaW9kb3RoeXJvbmluZSAoVDMpLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VHJpSW9kb3RoeXJvbmluZSAoVDMpPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlRoeXJveGluZSAtIFQ0IFRvdGFsPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlRTSCAtIFRoeXJvaWQgU3RpbXVsYXRpbmcgSG9ybW9uZTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNjb3JkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtaGVhZGluZ1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgNSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Jcm9uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInRpdGxlYXJyb3dcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgcGItMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+WFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGFwc2VbNV0gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Jcm9uIHRlc3RzIGFyZSBncm91cHMgb2YgY2xpbmljYWwgY2hlbWlzdHJ5IGxhYm9yYXRvcnkgYmxvb2QgdGVzdHMgdGhhdCBhcmUgdXNlZCB0byBldmFsdWF0ZSBib2R5IGlyb24gc3RvcmVzIG9yIHRoZSBpcm9uIGxldmVsIGluIGJsb29kIHNlcnVtLiBPdGhlciB0ZXJtcyB1c2VkIGZvciB0aGUgc2FtZSB0ZXN0cyBhcmUgaXJvbiBwYW5lbCwgaXJvbiBwcm9maWxlLCBpcm9uIGluZGljZXMgb3IgaXJvbiBzdGF0dXMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHN0Yy1oaWRlLWFjcmQtY29udGFpbmVyIHB0LTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8cD5Jcm9uIHRlc3RzIGFyZSBncm91cHMgb2YgY2xpbmljYWwgY2hlbWlzdHJ5IGxhYm9yYXRvcnkgYmxvb2QgdGVzdHMgdGhhdCBhcmUgdXNlZCB0byBldmFsdWF0ZSBib2R5IGlyb24gc3RvcmVzIG9yIHRoZSBpcm9uIGxldmVsIGluIGJsb29kIHNlcnVtLiBPdGhlciB0ZXJtcyB1c2VkIGZvciB0aGUgc2FtZSB0ZXN0cyBhcmUgaXJvbiBwYW5lbCwgaXJvbiBwcm9maWxlLCBpcm9uIGluZGljZXMgb3IgaXJvbiBzdGF0dXMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RjLWRhdGEtdWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5Ub3RhbCBJcm9uIEJpbmRpbmcgQ2FwYWNpdHkgKFRJQkMpPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPklyb248L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VHJhbnNmZXJyaW4gU2F0dXJhdGlvbjwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5GZXJyaXRpbjwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxwPklyb24gdGVzdHMgYXJlIGdyb3VwcyBvZiBjbGluaWNhbCBjaGVtaXN0cnkgbGFib3JhdG9yeSBibG9vZCB0ZXN0cyB0aGF0IGFyZSB1c2VkIHRvIGV2YWx1YXRlIGJvZHkgaXJvbiBzdG9yZXMgb3IgdGhlIGlyb24gbGV2ZWwgaW4gYmxvb2Qgc2VydW0uIE90aGVyIHRlcm1zIHVzZWQgZm9yIHRoZSBzYW1lIHRlc3RzIGFyZSBpcm9uIHBhbmVsLCBpcm9uIHByb2ZpbGUsIGlyb24gaW5kaWNlcyBvciBpcm9uIHN0YXR1cy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlRvdGFsIElyb24gQmluZGluZyBDYXBhY2l0eSAoVElCQyk8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+SXJvbjwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5UcmFuc2ZlcnJpbiBTYXR1cmF0aW9uPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8cD5Jcm9uIHRlc3RzIGFyZSBncm91cHMgb2YgY2xpbmljYWwgY2hlbWlzdHJ5IGxhYm9yYXRvcnkgYmxvb2QgdGVzdHMgdGhhdCBhcmUgdXNlZCB0byBldmFsdWF0ZSBib2R5IGlyb24gc3RvcmVzIG9yIHRoZSBpcm9uIGxldmVsIGluIGJsb29kIHNlcnVtLiBPdGhlciB0ZXJtcyB1c2VkIGZvciB0aGUgc2FtZSB0ZXN0cyBhcmUgaXJvbiBwYW5lbCwgaXJvbiBwcm9maWxlLCBpcm9uIGluZGljZXMgb3IgaXJvbiBzdGF0dXMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjY29yZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWhlYWRpbmdcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsIDYpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RGlhYmV0ZXMgU2NyZWVuLCBQcm9maWxlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInRpdGxlYXJyb3dcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgcGItMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+WFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGFwc2VbNl0gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5EZWZpbml0aW9uOiBpbnN1bGluIHJlc2lzdGFuY2UuIFRoaXMgdGVzdCBpcyBvcmRlcmVkIGZvciBhIHBhdGllbnQgd2hvIG5ld2x5IGRpYWdub3NlZCB3aXRoIGRpYWJldGVzIHR5cGUtMiB0byBtb25pdG9yIHRoZSBzdGF0dXMgb2YgYmV0YSBjZWxsIHByb2R1Y3Rpb24gb2YgaW5zdWxpbiBhbmQgd2hpbGUgdGhlIGluc3VsaW4gaW5qZWN0aW9uIGlzIHJlcXVpcmVkIGZvciB0aGUgcGF0aWVudC4gVGhlIGV4cGVjdGVkIHZhbHVlOiBOb3JtYWwgb3IgaGlnaCBsZXZlbCBvZiBDLXBlcHRpZGUgd2lsbCBiZSBkZXRlY3RlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgc3RjLWhpZGUtYWNyZC1jb250YWluZXIgcHQtMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxwPkRlZmluaXRpb246IGluc3VsaW4gcmVzaXN0YW5jZS4gVGhpcyB0ZXN0IGlzIG9yZGVyZWQgZm9yIGEgcGF0aWVudCB3aG8gbmV3bHkgZGlhZ25vc2VkIHdpdGggZGlhYmV0ZXMgdHlwZS0yIHRvIG1vbml0b3IgdGhlIHN0YXR1cyBvZiBiZXRhIGNlbGwgcHJvZHVjdGlvbiBvZiBpbnN1bGluIGFuZCB3aGlsZSB0aGUgaW5zdWxpbiBpbmplY3Rpb24gaXMgcmVxdWlyZWQgZm9yIHRoZSBwYXRpZW50LiBUaGUgZXhwZWN0ZWQgdmFsdWU6IE5vcm1hbCBvciBoaWdoIGxldmVsIG9mIEMtcGVwdGlkZSB3aWxsIGJlIGRldGVjdGVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+SGJBMWMgR2x5Y2F0ZWQgSGFlbW9nbG9iaW48L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+QXZlcmFnZSBCbG9vZCBHbHVjb3NlIChBQkcpPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkJsb29kIGtldG9uZTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5GcnVjdG9zYW1pbmU8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8cD5EZWZpbml0aW9uOiBpbnN1bGluIHJlc2lzdGFuY2UuIFRoaXMgdGVzdCBpcyBvcmRlcmVkIGZvciBhIHBhdGllbnQgd2hvIG5ld2x5IGRpYWdub3NlZCB3aXRoIGRpYWJldGVzIHR5cGUtMiB0byBtb25pdG9yIHRoZSBzdGF0dXMgb2YgYmV0YSBjZWxsIHByb2R1Y3Rpb24gb2YgaW5zdWxpbiBhbmQgd2hpbGUgdGhlIGluc3VsaW4gaW5qZWN0aW9uIGlzIHJlcXVpcmVkIGZvciB0aGUgcGF0aWVudC4gVGhlIGV4cGVjdGVkIHZhbHVlOiBOb3JtYWwgb3IgaGlnaCBsZXZlbCBvZiBDLXBlcHRpZGUgd2lsbCBiZSBkZXRlY3RlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkhiQTFjIEdseWNhdGVkIEhhZW1vZ2xvYmluPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkF2ZXJhZ2UgQmxvb2QgR2x1Y29zZSAoQUJHKTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPHA+RGVmaW5pdGlvbjogaW5zdWxpbiByZXNpc3RhbmNlLiBUaGlzIHRlc3QgaXMgb3JkZXJlZCBmb3IgYSBwYXRpZW50IHdobyBuZXdseSBkaWFnbm9zZWQgd2l0aCBkaWFiZXRlcyB0eXBlLTIgdG8gbW9uaXRvciB0aGUgc3RhdHVzIG9mIGJldGEgY2VsbCBwcm9kdWN0aW9uIG9mIGluc3VsaW4gYW5kIHdoaWxlIHRoZSBpbnN1bGluIGluamVjdGlvbiBpcyByZXF1aXJlZCBmb3IgdGhlIHBhdGllbnQuIFRoZSBleHBlY3RlZCB2YWx1ZTogTm9ybWFsIG9yIGhpZ2ggbGV2ZWwgb2YgQy1wZXB0aWRlIHdpbGwgYmUgZGV0ZWN0ZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+SGJBMWMgR2x5Y2F0ZWQgSGFlbW9nbG9iaW48L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+QXZlcmFnZSBCbG9vZCBHbHVjb3NlIChBQkcpPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNjb3JkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtaGVhZGluZ1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgNyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DYXJkaWFjIFJpc2sgUHJvZmlsZSwgTWFya2VyPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInRpdGxlYXJyb3dcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgcGItMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjcmQtc3RjLXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+WFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGFwc2VbN10gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BIGNhcmRpYWMgcmlzayBwcm9maWxl4oCUb3IgQ1JQ4oCUZ2l2ZXMgeW91IGluZm9ybWF0aW9uIGFib3V0IHNvbWUgb2YgdGhlIGZhY3RvcnMgdGhhdCBjYW4gcHV0IHlvdSBhdCByaXNrIGZvciBoZWFydCBkaXNlYXNl4oCUdGhpbmdzIGxpa2UgZWxldmF0ZWQgYmxvb2QgbGV2ZWxzIG9mIGNob2xlc3Rlcm9sLCB0cmlnbHljZXJpZGVzLCBhbmQgZ2x1Y29zZSAoYmxvb2Qgc3VnYXIpLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgc3RjLWhpZGUtYWNyZC1jb250YWluZXIgcHQtMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkxpcG9wcm90ZWluIChBKTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5BcG9saXBvcHJvdGVpbnMgQTE8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+SGlnaCBTZW5zaXRpdml0eSBDLVJlYWN0aXZlIFByb3RlaW4gKEhTQ1JQKTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5BcG9saXBvcHJvdGVpbnMgQjwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5BcG9saXBvcHJvdGVpbnMgQi9BMTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPHA+QSBjYXJkaWFjIHJpc2sgcHJvZmlsZeKAlG9yIENSUOKAlGdpdmVzIHlvdSBpbmZvcm1hdGlvbiBhYm91dCBzb21lIG9mIHRoZSBmYWN0b3JzIHRoYXQgY2FuIHB1dCB5b3UgYXQgcmlzayBmb3IgaGVhcnQgZGlzZWFzZeKAlHRoaW5ncyBsaWtlIGVsZXZhdGVkIGJsb29kIGxldmVscyBvZiBjaG9sZXN0ZXJvbCwgdHJpZ2x5Y2VyaWRlcywgYW5kIGdsdWNvc2UgKGJsb29kIHN1Z2FyKS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNjb3JkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtaGVhZGluZ1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgOCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Ib21vY3lzdGVpbmU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidGl0bGVhcnJvd1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBwYi0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+WFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb2xsYXBzZVs4XSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkhvbW9jeXN0ZWluZSBpcyBhbiBhbWlubyBhY2lkIHRoYXQgaXMgcHJvZHVjZWQgYnkgdGhlIGh1bWFuIGJvZHksIHVzdWFsbHkgYXMgYSBieXByb2R1Y3Qgb2YgY29uc3VtaW5nIG1lYXQuIEhvbW9jeXN0ZWluZSBpcyBub3JtYWxseSBjb252ZXJ0ZWQgaW50byBvdGhlciBhbWlubyBhY2lkcy4gQW4gYWJub3JtYWwgYWNjdW11bGF0aW9uIG9mIGhvbW9jeXN0ZWluZSwgd2hpY2ggY2FuIGJlIG1lYXN1cmVkIGluIHRoZSBibG9vZCwgY2FuIGJlIGEgbWFya2VyIGZvciB0aGUgZGV2ZWxvcG1lbnQgb2YgaGVhcnQgZGlzZWFzZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgc3RjLWhpZGUtYWNyZC1jb250YWluZXIgcHQtMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPHA+SG9tb2N5c3RlaW5lIGlzIGFuIGFtaW5vIGFjaWQgdGhhdCBpcyBwcm9kdWNlZCBieSB0aGUgaHVtYW4gYm9keSwgdXN1YWxseSBhcyBhIGJ5cHJvZHVjdCBvZiBjb25zdW1pbmcgbWVhdC4gSG9tb2N5c3RlaW5lIGlzIG5vcm1hbGx5IGNvbnZlcnRlZCBpbnRvIG90aGVyIGFtaW5vIGFjaWRzLiBBbiBhYm5vcm1hbCBhY2N1bXVsYXRpb24gb2YgaG9tb2N5c3RlaW5lLCB3aGljaCBjYW4gYmUgbWVhc3VyZWQgaW4gdGhlIGJsb29kLCBjYW4gYmUgYSBtYXJrZXIgZm9yIHRoZSBkZXZlbG9wbWVudCBvZiBoZWFydCBkaXNlYXNlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8cD5Ib21vY3lzdGVpbmUgaXMgYW4gYW1pbm8gYWNpZCB0aGF0IGlzIHByb2R1Y2VkIGJ5IHRoZSBodW1hbiBib2R5LCB1c3VhbGx5IGFzIGEgYnlwcm9kdWN0IG9mIGNvbnN1bWluZyBtZWF0LiBIb21vY3lzdGVpbmUgaXMgbm9ybWFsbHkgY29udmVydGVkIGludG8gb3RoZXIgYW1pbm8gYWNpZHMuIEFuIGFibm9ybWFsIGFjY3VtdWxhdGlvbiBvZiBob21vY3lzdGVpbmUsIHdoaWNoIGNhbiBiZSBtZWFzdXJlZCBpbiB0aGUgYmxvb2QsIGNhbiBiZSBhIG1hcmtlciBmb3IgdGhlIGRldmVsb3BtZW50IG9mIGhlYXJ0IGRpc2Vhc2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjY29yZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWhlYWRpbmdcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsIDkpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Vml0YW1pbiBQcm9maWxlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInRpdGxlYXJyb3dcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgcGItMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjcmQtc3RjLXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+WFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGFwc2VbOV0gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgc3RjLWhpZGUtYWNyZC1jb250YWluZXIgcHQtMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkZvbGF0ZTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5WaXRhbWluIEIxMjwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD4yNS1PSCBWaXRhbWluIEQgVG90YWw8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNjb3JkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtaGVhZGluZ1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgMTApfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VG94aWMgRWxlbWVudHMgUHJvZmlsZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ0aXRsZWFycm93XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHBiLTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhY3JkLXN0Yy1yZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjcmQtc3RjLXJlZFwiPlhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhcHNlWzEwXSA/IDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBzdGMtaGlkZS1hY3JkLWNvbnRhaW5lciBwdC0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RjLWRhdGEtdWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+QmFyaXVtPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5DZXNpdW08L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkNvYm9sdDwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+TGVhZDwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+Q2FkbWl1bTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+U2VsZW5pdW08L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPk1lcmN1cnk8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkNocm9taXVtPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5BcnNlbmljPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjY29yZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWhlYWRpbmdcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsIDExKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkVsZWN0cm9seXRlczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ0aXRsZWFycm93XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHBiLTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhY3JkLXN0Yy1yZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjcmQtc3RjLXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhcHNlWzExXSA/IDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBzdGMtaGlkZS1hY3JkLWNvbnRhaW5lciBwdC0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlNvZGl1bTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+Q2hsb3JpZGU8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjY29yZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWhlYWRpbmdcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsIDEyKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRlc3Rvc3Rlcm9uZSBUb3RhbDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgY2xhc3NOYW1lPVwidGl0bGVhcnJvd1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgcGItMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjcmQtc3RjLXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGFwc2VbMTJdID8gPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHN0Yy1oaWRlLWFjcmQtY29udGFpbmVyIHB0LTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxwPkEgXCJtYWxlIGhvcm1vbmVcIiAtLSBhIHNleCBob3Jtb25lIHByb2R1Y2VkIGJ5IHRoZSB0ZXN0ZXMgdGhhdCBlbmNvdXJhZ2VzIHRoZSBkZXZlbG9wbWVudCBvZiBtYWxlIHNleHVhbCBjaGFyYWN0ZXJpc3RpY3MsIHN0aW11bGF0ZXMgdGhlIGFjdGl2aXR5IG9mIHRoZSBtYWxlIHNlY29uZGFyeSBzZXggY2hhcmFjdGVyaXN0aWNzLCBhbmQgcHJldmVudHMgY2hhbmdlcyBpbiB0aGVtIGZvbGxvd2luZyBjYXN0cmF0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwic3RjLWFjY29yZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWhlYWRpbmdcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsIDEzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlBhbmNyZWF0aWMgKEFjdXRlKSBQcm9maWxlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInRpdGxlYXJyb3dcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgcGItMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhY3JkLXN0Yy1yZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjcmQtc3RjLXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb2xsYXBzZVsxM10gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BY3V0ZSBwYW5jcmVhdGl0aXMgb3IgYWN1dGUgcGFuY3JlYXRpYyBuZWNyb3NpcyBpcyBhIHN1ZGRlbiBpbmZsYW1tYXRpb24gb2YgdGhlIHBhbmNyZWFzLiBJdCBjYW4gaGF2ZSBzZXZlcmUgY29tcGxpY2F0aW9ucyBhbmQgaGlnaCBtb3J0YWxpdHkgZGVzcGl0ZSB0cmVhdG1lbnQuPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBzdGMtaGlkZS1hY3JkLWNvbnRhaW5lciBwdC0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RjLWRhdGEtdWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5BbXlsYXNlPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkxpcGFzZTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFjdXRlIHBhbmNyZWF0aXRpcyBvciBhY3V0ZSBwYW5jcmVhdGljIG5lY3Jvc2lzIGlzIGEgc3VkZGVuIGluZmxhbW1hdGlvbiBvZiB0aGUgcGFuY3JlYXMuIEl0IGNhbiBoYXZlIHNldmVyZSBjb21wbGljYXRpb25zIGFuZCBoaWdoIG1vcnRhbGl0eSBkZXNwaXRlIHRyZWF0bWVudC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY2NvcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1oZWFkaW5nXCIgb25DbGljaz17dGhpcy50b2dnbGUuYmluZCh0aGlzLCAxNCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BcnRocml0aXMgUHJvZmlsZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ0aXRsZWFycm93XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHBiLTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhY3JkLXN0Yy1yZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGFwc2VbMTRdID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHN0Yy1oaWRlLWFjcmQtY29udGFpbmVyIHB0LTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkFudGkgTnVjbGVhciBBbnRpYm9kaWVzKEFOQSk8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+QW50aSBDQ1AoQUNQUCk8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjY29yZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWhlYWRpbmdcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsIDE1KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoeXJveGluZSAtIFQ0IEZyZWU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidGl0bGVhcnJvd1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBwYi0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjcmQtc3RjLXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhcHNlWzE1XSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBzdGMtaGlkZS1hY3JkLWNvbnRhaW5lciBwdC0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RjLWRhdGEtdWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5UaGlzIHRlc3QgaXMgYWR2aXNlZCB3aGVuIHRoZSByZXN1bHRzIG9mIGEgdGh5cm9pZC1zdGltdWxhdGluZyBob3Jtb25lIHRlc3QgYXJlIHVudXN1YWwuIEl0IGlzIHBlcmZvcm1lZCB0byBkZXRlcm1pbmUgdGhlIHVuZGVybHlpbmcgY2F1c2UgYWZmZWN0aW5nIHRoZSBsZXZlbCBvZiB0aHlyb2lkIGhvcm1vbmUgaW4gdGhlIGJvZHkuPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlNvbWUgYWlsbWVudHMgdGhhdCBtYXkgYWZmZWN0IHRoZSBmdW5jdGlvbmluZyBvZiB0aGUgdGh5cm9pZCBhcmU6PC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkFudGkgQ0NQKEFDUFApPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY2NvcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1oZWFkaW5nXCIgb25DbGljaz17dGhpcy50b2dnbGUuYmluZCh0aGlzLCAxNil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Ucmlpb2RvdGh5cm9uaW5lIChUMyk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidGl0bGVhcnJvd1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBwYi0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjcmQtc3RjLXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhcHNlWzE2XSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBzdGMtaGlkZS1hY3JkLWNvbnRhaW5lciBwdC0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RjLWRhdGEtdWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5UaHlyb2lkIHByb2R1Y2VzIGEgaG9ybW9uZSBjYWxsZWQgdHJpaW9kb3RoeXJvbmluZSBvciBUMyB3aGljaCBhbG9uZyB3aXRoIG90aGVyIGhvcm1vbmVzIHJlZ3VsYXRlIGJvZHkncyB0ZW1wZXJhdHVyZSwgbWV0YWJvbGlzbSBhbmQgaGVhcnQgcmF0ZS4gQSBUMyB0ZXN0IGlzIGNvbmR1Y3RlZCB0byBldmFsdWF0ZSB0aGUgbGV2ZWxzIG9mIHRoaXMgaG9ybW9uZSBpbiB0aGUgYmxvb2QgYW5kIGRpYWdub3NlIGEgdGh5cm9pZCBwcm9ibGVtLjwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNjb3JkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtaGVhZGluZ1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgMTcpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TGlwYXNlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInRpdGxlYXJyb3dcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgcGItMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhY3JkLXN0Yy1yZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjcmQtc3RjLXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb2xsYXBzZVsxN10gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgc3RjLWhpZGUtYWNyZC1jb250YWluZXIgcHQtMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+TGlwYXNlIHRlc3QgaXMgY29uZHVjdGVkIGFzIGFuIGluaXRpYWwgZGlhZ25vc2lzIGZvciB0aGUgY29uZGl0aW9ucyBsaWtlIGFjdXRlIHBhbmNyZWF0aWMsIGNlbGlhYyBkaXNlYXNlIGFuZCBwYW5jcmVhdGljIGNhbmNlci48L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjY29yZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWhlYWRpbmdcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsIDE4KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFteWxhc2UgU2VydW08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidGl0bGVhcnJvd1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBwYi0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjcmQtc3RjLXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhcHNlWzE4XSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBzdGMtaGlkZS1hY3JkLWNvbnRhaW5lciBwdC0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RjLWRhdGEtdWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5UaGlzIHRlc3QgaXMgdXN1YWxseSBhZHZpc2VkIGlmIHRoZSBkb2N0b3Igc3VzcGVjdHMgcGFuY3JlYXRpdGlzLiBJbmNyZWFzZSBpbiB0aGUgbGV2ZWwgb2YgdGhpcyBlbnp5bWUgbWF5IGNhdXNlIHBhbmNyZWF0aWMgZGlzb3JkZXJzIHN1Y2ggYXMgcGFuY3JlYXRpYyBjYW5jZXIsIHBhbmNyZWF0aWMgcHNldWRvY3lzdCwgb3IgcGFuY3JlYXRpYyBhYnNjZXNzLjwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNjb3JkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtaGVhZGluZ1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgMTkpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VFNIIC0gVGh5cm9pZCBTdGltdWxhdGluZyBIb3Jtb25lPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInRpdGxlYXJyb3dcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgcGItMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhY3JkLXN0Yy1yZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjcmQtc3RjLXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb2xsYXBzZVsxOV0gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgc3RjLWhpZGUtYWNyZC1jb250YWluZXIgcHQtMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+QW50aSBOdWNsZWFyIEFudGlib2RpZXMoQU5BKTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5BbnRpIENDUChBQ1BQKTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNjb3JkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtaGVhZGluZ1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgMjApfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RmVycml0aW48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidGl0bGVhcnJvd1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBwYi0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjcmQtc3RjLXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhcHNlWzIwXSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBzdGMtaGlkZS1hY3JkLWNvbnRhaW5lciBwdC0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RjLWRhdGEtdWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlRoZSB0ZXN0IG1lYXN1cmVzIHRoZSBhbW91bnQgb2YgVFNIIGluIHRoZSBib2R5IHRvIOKAkzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPuKAoiZuYnNwOyZuYnNwOyZuYnNwOyBDaGVjayBmb3Igc3ltcHRvbXMgb2YgdGh5cm9pZCBkaXNlYXNlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+4oCiJm5ic3A7Jm5ic3A7Jm5ic3A7IFRyYWNrIHRoZSBpbXByb3ZlbWVudCBvZiBhbiBvbmdvaW5nIHRoeXJvaWQgdHJlYXRtZW50PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+4oCiJm5ic3A7Jm5ic3A7Jm5ic3A7IFNjcmVlbiBmb3IgdGh5cm9pZCBzeW1wdG9tcyBkdXJpbmcgcHJlZ25hbmN5PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+4oCiJm5ic3A7Jm5ic3A7Jm5ic3A7IFNjcmVlbiBmb3IgdGh5cm9pZCByZWxhdGVkIHN5bXB0b21zIGluIGluZmFudHM8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD48c3Ryb25nPldoYXQgaXQgbWVhc3VyZXM/PC9zdHJvbmc+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGhlIHRlc3QgaXMgdXNlZCB0byBtZWFzdXJlIHRoZSBhbW91bnQgb2YgVGh5cm9pZCBTdGltdWxhdGluZyBIb3Jtb25lIGluIHRoZSBibG9vZCBhbmQgY2hlY2sgaWYgdGhlIHRoeXJvaWQgZ2xhbmQgaXMgZnVuY3Rpb25pbmcgcHJvcGVybHkuIFRoZSB0ZXN0IGlzIGEgZGlhZ25vc3RpYyBtZWFzdXJlIGZvciBjb25kaXRpb25zIGxpa2UgSHlwZXJ0aHlyb2lkaXNtIGFuZCBIeXBvdGh5cm9pZGlzbS48L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1ydC0xMCBjdC1wcm9maWxlIHNraW4td2hpdGUgYm9yZGVyLWJvdHRvbS1yYWRpb3VzIGdvbGQtcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtc2NuLWxpc3RpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5PdXIgUG9wdWxhciBDb21wYXJpc29uOjwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Ub3Agdml0YW1pbiBwcm9maWxlIHBhY2thZ2VzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VG9wIHBhY2thZ2VzIGZvciBzZW5pb3IgY2l0aXplbnM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4gUG9wdWxhciBsb3cgY29zdCBwYWNrYWdlcyBmb3IgZGlhYmV0ZXM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJpZ2h0QmFyIGV4dHJhQ2xhc3M9XCIgY2hhdC1mbG9hdC1idG4tMlwiIG1zZ1RlbXBsYXRlPVwiZ29sZF9nZW5lcmFsX3RlbXBsYXRlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyIGZvb3RlckRhdGE9e3RoaXMuc3RhdGUuZm9vdGVyRGF0YX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGFiVmlld1xuIiwiaW1wb3J0IEhlYWx0aFBhY2thZ2UgZnJvbSAnLi9IZWFsdGhQYWNrYWdlLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBIZWFsdGhQYWNrYWdlIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGdldE9mZmVyTGlzdCwgdG9nZ2xlT1BEQ3JpdGVyaWEsIHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcblxuaW1wb3J0IEhlYWx0aFBhY2thZ2VWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGlhZ25vc2lzL2hlYWx0aFBhY2thZ2UvaW5kZXgnXG5cbmNsYXNzIEhlYWx0aFBhY2thZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8SGVhbHRoUGFja2FnZVZpZXcgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHBhc3NlZFByb3BzKSA9PiB7XG5cbiAgICBjb25zdCB7XG4gICAgICAgIG9mZmVyTGlzdFxuICAgIH0gPSBzdGF0ZS5VU0VSXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBvZmZlckxpc3RcbiAgICB9XG5cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0T2ZmZXJMaXN0OiAobGF0LCBsb25nKSA9PiBkaXNwYXRjaChnZXRPZmZlckxpc3QobGF0LCBsb25nKSksXG4gICAgICAgIHRvZ2dsZU9QRENyaXRlcmlhOiAodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkLCBmaWx0ZXIpID0+IGRpc3BhdGNoKHRvZ2dsZU9QRENyaXRlcmlhKHR5cGUsIGNyaXRlcmlhLCBmb3JjZUFkZCwgZmlsdGVyKSksXG4gICAgICAgIHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhOiAodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkLCBmaWx0ZXIpID0+IGRpc3BhdGNoKHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKHR5cGUsIGNyaXRlcmlhLCBmb3JjZUFkZCwgZmlsdGVyKSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEhlYWx0aFBhY2thZ2UpOyJdLCJzb3VyY2VSb290IjoiIn0=