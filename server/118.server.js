exports.ids = [118];
exports.modules = {

/***/ "./dev/js/components/diagnosis/ThyrocarePackage/ThyrocarePackageView.js":
/*!******************************************************************************!*\
  !*** ./dev/js/components/diagnosis/ThyrocarePackage/ThyrocarePackageView.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var _footer = __webpack_require__(/*! ../../commons/Home/footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _bannerCarousel = __webpack_require__(/*! ../../commons/Home/bannerCarousel */ "./dev/js/components/commons/Home/bannerCarousel.js");

var _bannerCarousel2 = _interopRequireDefault(_bannerCarousel);

var _HelmetTags = __webpack_require__(/*! ../../commons/HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

var _nonIpdPopup = __webpack_require__(/*! ../../commons/nonIpdPopup.js */ "./dev/js/components/commons/nonIpdPopup.js");

var _nonIpdPopup2 = _interopRequireDefault(_nonIpdPopup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class ThyrocarePackageView extends _react2.default.Component {
    constructor(props) {
        super(props);
        const parsed = queryString.parse(this.props.location.search);
        this.state = {
            collapse: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            expandClick: true,
            expandText: 'Expand All',
            showNonIpdPopup: parsed.show_popup,
            to_be_force: 1,
            is_lead_enabled: true
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
        // book now

        let data = {
            'Category': 'ConsumerApp', 'Action': trackingName, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': trackingName
        };
        _gtm2.default.sendEvent({ data: data });
        if (window) {
            window.location.href = url;
        }
    }

    viewAllClick() {
        this.props.history.push('/tax-saver-health-packages?package_category_ids=59');
    }

    goldClicked(pkg_id) {
        // gold click
        let data = {
            'Category': 'ConsumerApp', 'Action': 'VipGoldThyrocareClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'vip-gold-thyrocare-clicked', 'pkgId': pkg_id
        };
        _gtm2.default.sendEvent({ data: data });
        this.props.history.push('/vip-gold-details?is_gold=true&source=thyrocarePkgListing&lead_source=Docprime');
    }

    nonIpdLeads(phone_number) {
        // leads for matrix for the packages searched by user
        const parsed = queryString.parse(this.props.location.search);
        let data = { phone_number: phone_number, lead_source: 'Labads', source: parsed, lead_type: 'LABADS', test_name: 'thyrocare aarogyam packages', exitpoint_url: 'http://docprime.com' + this.props.location.pathname };

        if (this.props.common_utm_tags && this.props.common_utm_tags.length) {
            data.utm_tags = this.props.common_utm_tags.filter(x => x.type == "common_xtra_tags")[0].utm_tags;
        }

        let visitor_info = _gtm2.default.getVisitorInfo();
        if (visitor_info && visitor_info.visit_id) {
            data.visit_id = visitor_info.visit_id;
            data.visitor_id = visitor_info.visitor_id;
        }

        let gtm_data = {
            'Category': 'ConsumerApp', 'Action': 'NonIpdThyrocareSubmitClick', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'non-ipd-thyrocare-submit-click'
        };
        _gtm2.default.sendEvent({ data: gtm_data });
        this.props.saveLeadPhnNumber(phone_number);
        if (this.state.is_lead_enabled) {
            this.setState({ is_lead_enabled: false });
            this.props.NonIpdBookingLead(data);
            setTimeout(() => {
                this.setState({ is_lead_enabled: true });
            }, 5000);
        }
        this.setState({ to_be_force: 0 });
    }

    closeIpdLeadPopup(from) {
        if (from) {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'NonIpdThyrocareCrossClick', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'non-ipd-thyrocare-cross-click'
            };
            _gtm2.default.sendEvent({ data: data });
            this.setState({ to_be_force: 0 });
        }
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
                            title: 'Compare top Aarogyam packages from Thyrocare | Book Online & Save upto 50%',
                            description: 'Compare and book Aarogyam full body health checkup packages from Thyrocare at docprime.com. Avail exclusive discounts & save upto 50%. Get free home sample collection and online reports on time.'
                        } }),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12 col-md-7 col-lg-7 center-column' },
                        this.props.offerList && this.props.offerList.filter(x => x.slider_location === 'thyrocare_aarogyam_packages_page').length ? _react2.default.createElement(
                            'div',
                            { className: 'col-12' },
                            _react2.default.createElement(_bannerCarousel2.default, _extends({}, this.props, { sliderLocation: 'thyrocare_aarogyam_packages_page' }))
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
                                            'Aarogyam B',
                                            _react2.default.createElement('br', null),
                                            '(Includes 56 tests)'
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'stc-price-cut' },
                                            '\u20B9 750'
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
                                            'Aarogyam C ',
                                            _react2.default.createElement('br', null),
                                            '(Includes 59 tests)'
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'stc-price-cut' },
                                            '\u20B9 1500'
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
                                            'Aarogyam 1.3 ',
                                            _react2.default.createElement('br', null),
                                            '(Includes 90 tests)'
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'stc-price-cut' },
                                            '\u20B9 2000'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'static-pk-container sticky-pk-container-2', style: { paddingTop: 0, paddingBottom: 30 } },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'static-pkg-top-column' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'd-flex align-items-center justify-content-center goldCard mt-0', onClick: this.goldClicked.bind(this, 12227) },
                                        _react2.default.createElement('img', { className: 'gld-cd-icon', src: "/assets" + '/img/gold-sm.png' }),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'gld-p-rc' },
                                            'Price'
                                        ),
                                        ' ',
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'gld-rate-lf' },
                                            '\u20B9 540'
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
                                                this.bookNowClicked('/lab/searchresults?test_ids=12227', 'TopbookNowClickedBlock1');
                                            }, className: 'stc-book-btn' },
                                        'Book Now'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'static-pkg-top-column stc-mid-mrgn', style: { position: 'relative' } },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'd-flex align-items-center justify-content-center goldCard mt-0', onClick: this.goldClicked.bind(this, 12213) },
                                        _react2.default.createElement('img', { className: 'gld-cd-icon', src: "/assets" + '/img/gold-sm.png' }),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'gld-p-rc' },
                                            'Price'
                                        ),
                                        ' ',
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'gld-rate-lf' },
                                            '\u20B9 840'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'stc-free-pick' },
                                        'Free Home Pickup'
                                    ),
                                    _react2.default.createElement(
                                        'a',
                                        { href: '/lab/searchresults?test_ids=12213', onClick: e => {
                                                e.preventDefault();
                                                this.bookNowClicked('/lab/searchresults?test_ids=12213', 'TopbookNowClickedBlock2');
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
                                    { className: 'static-pkg-top-column' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'd-flex align-items-center justify-content-center goldCard mt-0', onClick: this.goldClicked.bind(this, 14947) },
                                        _react2.default.createElement('img', { className: 'gld-cd-icon', src: "/assets" + '/img/gold-sm.png' }),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'gld-p-rc' },
                                            'Price'
                                        ),
                                        ' ',
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'gld-rate-lf' },
                                            '\u20B9 1437'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'stc-free-pick' },
                                        'Free Home Pickup'
                                    ),
                                    _react2.default.createElement(
                                        'a',
                                        { href: '/lab/searchresults?test_ids=14947',
                                            onClick: e => {
                                                e.preventDefault();
                                                this.bookNowClicked('/lab/searchresults?test_ids=14947', 'TopbookNowClickedBlock3');
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
                                                '56'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'acrd-stc-data mid-border-mrgn' },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                '59'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'acrd-stc-data' },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                '90'
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
                                                '24'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'acrd-stc-data mid-border-mrgn' },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                '24'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'acrd-stc-data' },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                '24'
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
                                            'Liver Profile'
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
                                            { className: 'stc-acrd-content stc-hide-acrd-container pt-0 text-center' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'ul',
                                                    { className: 'stc-data-ul-list mt-0' },
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Gamma glutamyl Transferase'
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
                                                            'Bilirubin-total'
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
                                                    { className: 'stc-data-ul-list mt-0' },
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Gamma glutamyl Transferase'
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
                                                            'Bilirubin-total'
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
                                                    { className: 'stc-data-ul-list mt-0' },
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Gamma glutamyl Transferase'
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
                                                            'Bilirubin-total'
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
                                            'Renal Profile'
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
                                    this.state.collapse[2] ? _react2.default.createElement(
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
                                                    { className: 'stc-data-ul-list mt-0' },
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Calcium'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Uric Acid'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Blood Urea Nitrogen'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Serum Creatine'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'BUN/Serum Creatinine Ratio'
                                                        )
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data mid-border-mrgn' },
                                                _react2.default.createElement(
                                                    'ul',
                                                    { className: 'stc-data-ul-list mt-0' },
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Calcium'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Uric Acid'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Blood Urea Nitrogen'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Serum Creatine'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'BUN/Serum Creatinine Ratio'
                                                        )
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'ul',
                                                    { className: 'stc-data-ul-list mt-0' },
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Calcium'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Uric Acid'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Blood Urea Nitrogen'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Serum Creatine'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'BUN/Serum Creatinine Ratio'
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
                                        { className: 'stc-acrd-heading', onClick: this.toggle.bind(this, 11) },
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
                                    this.state.collapse[11] ? _react2.default.createElement(
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
                                            'Iron Deficiency'
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
                                    this.state.collapse[3] ? _react2.default.createElement(
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
                                                    { className: 'stc-data-ul-list mt-0' },
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Total Iron Binding Capacity'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Serum Iron'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            '% Transerrin Saturation'
                                                        )
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data mid-border-mrgn' },
                                                _react2.default.createElement(
                                                    'ul',
                                                    { className: 'stc-data-ul-list mt-0' },
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Total Iron Binding Capacity'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Serum Iron'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            '% Transerrin Saturation'
                                                        )
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'ul',
                                                    { className: 'stc-data-ul-list mt-0' },
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Total Iron Binding Capacity'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Serum Iron'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            '% Transerrin Saturation'
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
                                            'Thyroid Profile'
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
                                            { className: 'stc-acrd-content stc-hide-acrd-container pt-0 text-center' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'ul',
                                                    { className: 'stc-data-ul-list mt-0' },
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Trilodothyronine(T3)'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Total Thyroxine(T4)'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Thyroid Stimulating Hormone(TSH)'
                                                        )
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data mid-border-mrgn' },
                                                _react2.default.createElement(
                                                    'ul',
                                                    { className: 'stc-data-ul-list mt-0' },
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Trilodothyronine(T3)'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Total Thyroxine(T4)'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Thyroid Stimulating Hormone(TSH)'
                                                        )
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'ul',
                                                    { className: 'stc-data-ul-list mt-0' },
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Trilodothyronine(T3)'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Total Thyroxine(T4)'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Thyroid Stimulating Hormone(TSH)'
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
                                            'CARDIAC RISK MARKER'
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
                                                { className: 'acrd-stc-red' },
                                                'X'
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
                                                '5'
                                            )
                                        )
                                    ),
                                    this.state.collapse[5] ? _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-content stc-hide-acrd-container pt-0 text-center' },
                                            _react2.default.createElement('div', { className: 'acrd-stc-data' }),
                                            _react2.default.createElement('div', { className: 'acrd-stc-data mid-border-mrgn' }),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'ul',
                                                    { className: 'stc-data-ul-list mt-0' },
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'LIPOPROTEIN(A)'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'APOLIPOPROTEIN-A1'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'APOLIPOPROTEIN-B'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'C- REACTIVE PROTEIN (HSCRP)'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'APO B/ APO A1 RATIO'
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
                                        { className: 'stc-acrd-heading', onClick: this.toggle.bind(this, 6) },
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            'HOMOCYSTEIN'
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
                                                { className: 'acrd-stc-red' },
                                                'X'
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
                                    )
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
                                            'Diabetic Screen'
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
                                                null,
                                                '2'
                                            )
                                        )
                                    ),
                                    this.state.collapse[7] ? _react2.default.createElement(
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
                                                    { className: 'stc-data-ul-list mt-0' },
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Hba1c'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Average blood Glucose'
                                                        )
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data mid-border-mrgn' },
                                                _react2.default.createElement(
                                                    'ul',
                                                    { className: 'stc-data-ul-list mt-0' },
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Hba1c'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Average blood Glucose'
                                                        )
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'acrd-stc-data' },
                                                _react2.default.createElement(
                                                    'ul',
                                                    { className: 'stc-data-ul-list mt-0' },
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Hba1c'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Average blood Glucose'
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
                                        { className: 'stc-acrd-heading', onClick: this.toggle.bind(this, 8) },
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            'VITAMIN D PROFILE'
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
                                                { className: 'acrd-stc-red' },
                                                'X'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'acrd-stc-data mid-border-mrgn' },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                '1'
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
                                            { className: 'stc-acrd-content stc-hide-acrd-container pt-0 text-center' },
                                            _react2.default.createElement('div', { className: 'acrd-stc-data' }),
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
                                                            'Vitamin D Total-25 Hydroxy'
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
                                                            'Vitamin D Total-25 Hydroxy'
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
                                        { className: 'stc-acrd-heading', onClick: this.toggle.bind(this, 9) },
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            'VITAMIN B COMPLEX'
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
                                                { className: 'acrd-stc-red' },
                                                'X'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'acrd-stc-data mid-border-mrgn' },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                '1'
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
                                    this.state.collapse[9] ? _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-content stc-hide-acrd-container pt-0 text-center' },
                                            _react2.default.createElement('div', { className: 'acrd-stc-data' }),
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
                                                            'Vitamin B-12'
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
                                                            'Vitamin B-12'
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
                                        { className: 'stc-acrd-heading', onClick: this.toggle.bind(this, 10) },
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            'TESTOSTERONE'
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
                                                { className: 'acrd-stc-red' },
                                                'X'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'acrd-stc-data mid-border-mrgn' },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                '1'
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
                                    )
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
                                            'Cystatin C'
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
                                                { className: 'acrd-stc-red' },
                                                'X'
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
                                    )
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
                                            'Copper Serum'
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
                                                { className: 'acrd-stc-red' },
                                                'X'
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
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'stc-accord-container' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'stc-acrd-heading', onClick: this.toggle.bind(this, 13) },
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            'Zinc - Serum'
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
                                                { className: 'acrd-stc-red' },
                                                'X'
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
                                    )
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
                                            'Elements'
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
                                                { className: 'acrd-stc-red' },
                                                'X'
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
                                                '22'
                                            )
                                        )
                                    ),
                                    this.state.collapse[14] ? _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stc-acrd-content stc-hide-acrd-container pt-0 text-center' },
                                            _react2.default.createElement('div', { className: 'acrd-stc-data' }),
                                            _react2.default.createElement('div', { className: 'acrd-stc-data mid-border-mrgn' }),
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
                                                            'Aluminium'
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
                                                    ),
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
                                                            'Cadmium'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Caesium'
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
                                                            'Lead'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Tin'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Bismuth'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Beryllium'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Antimony'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Strontium'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Thallium'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Uranium'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Cobalt'
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
                                                            'Molybdenum'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Silver'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Vanadium'
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
                                                            'Nickel'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Magnesium'
                                                        )
                                                    )
                                                )
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

exports.default = ThyrocarePackageView;

/***/ }),

/***/ "./dev/js/containers/diagnosis/ThyrocarePackage.js":
/*!*********************************************************!*\
  !*** ./dev/js/containers/diagnosis/ThyrocarePackage.js ***!
  \*********************************************************/
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

var _ThyrocarePackageView = __webpack_require__(/*! ../../components/diagnosis/ThyrocarePackage/ThyrocarePackageView.js */ "./dev/js/components/diagnosis/ThyrocarePackage/ThyrocarePackageView.js");

var _ThyrocarePackageView2 = _interopRequireDefault(_ThyrocarePackageView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ThyrocarePackage extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return _react2.default.createElement(_ThyrocarePackageView2.default, this.props);
    }
}

const mapStateToProps = (state, passedProps) => {

    const {
        offerList,
        common_utm_tags
    } = state.USER;

    return {
        offerList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getOfferList: (lat, long) => dispatch((0, _index.getOfferList)(lat, long)),
        toggleOPDCriteria: (type, criteria, forceAdd, filter) => dispatch((0, _index.toggleOPDCriteria)(type, criteria, forceAdd, filter)),
        toggleDiagnosisCriteria: (type, criteria, forceAdd, filter) => dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria, forceAdd, filter)),
        NonIpdBookingLead: (data, cb) => dispatch((0, _index.NonIpdBookingLead)(data, cb)),
        saveLeadPhnNumber: number => dispatch((0, _index.saveLeadPhnNumber)(number))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ThyrocarePackage);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvVGh5cm9jYXJlUGFja2FnZS9UaHlyb2NhcmVQYWNrYWdlVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9kaWFnbm9zaXMvVGh5cm9jYXJlUGFja2FnZS5qcyJdLCJuYW1lcyI6WyJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJUaHlyb2NhcmVQYWNrYWdlVmlldyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInBhcnNlZCIsInBhcnNlIiwibG9jYXRpb24iLCJzZWFyY2giLCJzdGF0ZSIsImNvbGxhcHNlIiwiZXhwYW5kQ2xpY2siLCJleHBhbmRUZXh0Iiwic2hvd05vbklwZFBvcHVwIiwic2hvd19wb3B1cCIsInRvX2JlX2ZvcmNlIiwiaXNfbGVhZF9lbmFibGVkIiwiY29tcG9uZW50RGlkTW91bnQiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInNlbGVjdGVkTG9jYXRpb24iLCJsYXQiLCJsb25nIiwiZ2VvbWV0cnkiLCJsbmciLCJnZXRPZmZlckxpc3QiLCJ0b2dnbGUiLCJpbmRleCIsInNldFN0YXRlIiwiZXhwYW5kQWxsIiwibWFwIiwieCIsImJvb2tOb3dDbGlja2VkIiwidXJsIiwidHJhY2tpbmdOYW1lIiwiZGF0YSIsIkdUTSIsImdldFVzZXJJZCIsInNlbmRFdmVudCIsImhyZWYiLCJ2aWV3QWxsQ2xpY2siLCJoaXN0b3J5IiwicHVzaCIsImdvbGRDbGlja2VkIiwicGtnX2lkIiwibm9uSXBkTGVhZHMiLCJwaG9uZV9udW1iZXIiLCJsZWFkX3NvdXJjZSIsInNvdXJjZSIsImxlYWRfdHlwZSIsInRlc3RfbmFtZSIsImV4aXRwb2ludF91cmwiLCJwYXRobmFtZSIsImNvbW1vbl91dG1fdGFncyIsImxlbmd0aCIsInV0bV90YWdzIiwiZmlsdGVyIiwidHlwZSIsInZpc2l0b3JfaW5mbyIsImdldFZpc2l0b3JJbmZvIiwidmlzaXRfaWQiLCJ2aXNpdG9yX2lkIiwiZ3RtX2RhdGEiLCJzYXZlTGVhZFBobk51bWJlciIsIk5vbklwZEJvb2tpbmdMZWFkIiwic2V0VGltZW91dCIsImNsb3NlSXBkTGVhZFBvcHVwIiwiZnJvbSIsInJlbmRlciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJvZmZlckxpc3QiLCJzbGlkZXJfbG9jYXRpb24iLCJwYWRkaW5nIiwiZm9udFNpemUiLCJmbGV4IiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImJpbmQiLCJBU1NFVFNfQkFTRV9VUkwiLCJlIiwicHJldmVudERlZmF1bHQiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsInRyYW5zZm9ybSIsImZvb3RlckRhdGEiLCJUaHlyb2NhcmVQYWNrYWdlIiwibWFwU3RhdGVUb1Byb3BzIiwicGFzc2VkUHJvcHMiLCJVU0VSIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJ0b2dnbGVPUERDcml0ZXJpYSIsImNyaXRlcmlhIiwiZm9yY2VBZGQiLCJ0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSIsImNiIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFDQSxNQUFNQSxjQUFjQyxtQkFBT0EsQ0FBQyxrQ0FBUixDQUFwQjs7QUFFQSxNQUFNQyxvQkFBTixTQUFtQ0MsZ0JBQU1DLFNBQXpDLENBQW1EO0FBQy9DQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDQSxjQUFNQyxTQUFTUCxZQUFZUSxLQUFaLENBQWtCLEtBQUtGLEtBQUwsQ0FBV0csUUFBWCxDQUFvQkMsTUFBdEMsQ0FBZjtBQUNBLGFBQUtDLEtBQUwsR0FBYTtBQUNUQyxzQkFBVSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFz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QUozQjtBQUtIckMsMkJBQW1Cc0MsTUFBRCxJQUFZTixTQUFTLDhCQUFrQk0sTUFBbEIsQ0FBVDtBQUwzQixLQUFQO0FBT0gsQ0FSRDs7a0JBV2UseUJBQVFWLGVBQVIsRUFBeUJHLGtCQUF6QixFQUE2Q0osZ0JBQTdDLEMiLCJmaWxlIjoiMTE4LnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGVmdEJhciBmcm9tICcuLi8uLi9jb21tb25zL0xlZnRCYXInXG5pbXBvcnQgUmlnaHRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9SaWdodEJhcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21tb25zL0hvbWUvZm9vdGVyJ1xuaW1wb3J0IEJhbm5lckNhcm91c2VsIGZyb20gJy4uLy4uL2NvbW1vbnMvSG9tZS9iYW5uZXJDYXJvdXNlbCc7XG5pbXBvcnQgSGVsbWV0VGFncyBmcm9tICcuLi8uLi9jb21tb25zL0hlbG1ldFRhZ3MnO1xuaW1wb3J0IE5vbklwZFBvcHVwVmlldyBmcm9tICcuLi8uLi9jb21tb25zL25vbklwZFBvcHVwLmpzJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcblxuY2xhc3MgVGh5cm9jYXJlUGFja2FnZVZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNvbGxhcHNlOiBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdLFxuICAgICAgICAgICAgZXhwYW5kQ2xpY2s6IHRydWUsXG4gICAgICAgICAgICBleHBhbmRUZXh0OiAnRXhwYW5kIEFsbCcsXG4gICAgICAgICAgICBzaG93Tm9uSXBkUG9wdXA6IHBhcnNlZC5zaG93X3BvcHVwLFxuICAgICAgICAgICAgdG9fYmVfZm9yY2U6MSxcbiAgICAgICAgICAgIGlzX2xlYWRfZW5hYmxlZDp0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2VsZWN0ZWRMb2NhdGlvbiA9ICcnXG4gICAgICAgIGxldCBsYXQgPSAyOC42NDQ4MDBcbiAgICAgICAgbGV0IGxvbmcgPSA3Ny4yMTY3MjFcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbikge1xuICAgICAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbiA9IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbjtcbiAgICAgICAgICAgIGxhdCA9IHNlbGVjdGVkTG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubGF0XG4gICAgICAgICAgICBsb25nID0gc2VsZWN0ZWRMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sbmdcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGF0ID09PSAnZnVuY3Rpb24nKSBsYXQgPSBsYXQoKVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsb25nID09PSAnZnVuY3Rpb24nKSBsb25nID0gbG9uZygpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb3BzLmdldE9mZmVyTGlzdChsYXQsIGxvbmcpO1xuICAgIH1cblxuICAgIHRvZ2dsZShpbmRleCkge1xuICAgICAgICBsZXQgY29sbGFwc2UgPSBbLi4udGhpcy5zdGF0ZS5jb2xsYXBzZV1cbiAgICAgICAgY29sbGFwc2VbaW5kZXhdID0gIWNvbGxhcHNlW2luZGV4XVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29sbGFwc2UgfSlcbiAgICB9XG5cbiAgICBleHBhbmRBbGwoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmV4cGFuZENsaWNrKSB7XG4gICAgICAgICAgICBsZXQgY29sbGFwc2UgPSB0aGlzLnN0YXRlLmNvbGxhcHNlLm1hcCgoeCkgPT4gdHJ1ZSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb2xsYXBzZSB9KVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGV4cGFuZENsaWNrOiAhdGhpcy5zdGF0ZS5leHBhbmRDbGljaywgZXhwYW5kVGV4dDogJ0NvbGxhcHNlIEFsbCcgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgY29sbGFwc2UgPSB0aGlzLnN0YXRlLmNvbGxhcHNlLm1hcCgoeCkgPT4gZmFsc2UpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29sbGFwc2UgfSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBleHBhbmRDbGljazogIXRoaXMuc3RhdGUuZXhwYW5kQ2xpY2ssIGV4cGFuZFRleHQ6ICdFeHBhbmQgQWxsJyB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJvb2tOb3dDbGlja2VkKHVybCwgdHJhY2tpbmdOYW1lKSB7IC8vIGJvb2sgbm93XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogdHJhY2tpbmdOYW1lLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6IHRyYWNraW5nTmFtZVxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2aWV3QWxsQ2xpY2soKSB7XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdGF4LXNhdmVyLWhlYWx0aC1wYWNrYWdlcz9wYWNrYWdlX2NhdGVnb3J5X2lkcz01OScpXG4gICAgfVxuXG4gICAgZ29sZENsaWNrZWQocGtnX2lkKSB7IC8vIGdvbGQgY2xpY2tcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1ZpcEdvbGRUaHlyb2NhcmVDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAndmlwLWdvbGQtdGh5cm9jYXJlLWNsaWNrZWQnLCAncGtnSWQnOiBwa2dfaWRcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3ZpcC1nb2xkLWRldGFpbHM/aXNfZ29sZD10cnVlJnNvdXJjZT10aHlyb2NhcmVQa2dMaXN0aW5nJmxlYWRfc291cmNlPURvY3ByaW1lJylcbiAgICB9XG5cbiAgICBub25JcGRMZWFkcyhwaG9uZV9udW1iZXIpeyAvLyBsZWFkcyBmb3IgbWF0cml4IGZvciB0aGUgcGFja2FnZXMgc2VhcmNoZWQgYnkgdXNlclxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgbGV0IGRhdGEgPSh7cGhvbmVfbnVtYmVyOnBob25lX251bWJlcixsZWFkX3NvdXJjZTonTGFiYWRzJyxzb3VyY2U6cGFyc2VkLGxlYWRfdHlwZTonTEFCQURTJyx0ZXN0X25hbWU6J3RoeXJvY2FyZSBhYXJvZ3lhbSBwYWNrYWdlcycsZXhpdHBvaW50X3VybCA6ICdodHRwOi8vZG9jcHJpbWUuY29tJyArIHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWV9KVxuXG4gICAgICAgIGlmKHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzICYmIHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmxlbmd0aCl7XG4gICAgICAgICAgICBkYXRhLnV0bV90YWdzID0gdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MuZmlsdGVyKHg9PngudHlwZSA9PSBcImNvbW1vbl94dHJhX3RhZ3NcIilbMF0udXRtX3RhZ3NcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2aXNpdG9yX2luZm8gPSBHVE0uZ2V0VmlzaXRvckluZm8oKVxuICAgICAgICBpZih2aXNpdG9yX2luZm8gJiYgdmlzaXRvcl9pbmZvLnZpc2l0X2lkKXtcbiAgICAgICAgICAgIGRhdGEudmlzaXRfaWQgPSB2aXNpdG9yX2luZm8udmlzaXRfaWRcbiAgICAgICAgICAgIGRhdGEudmlzaXRvcl9pZCA9IHZpc2l0b3JfaW5mby52aXNpdG9yX2lkXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBndG1fZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnTm9uSXBkVGh5cm9jYXJlU3VibWl0Q2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2V2ZW50JzogJ25vbi1pcGQtdGh5cm9jYXJlLXN1Ym1pdC1jbGljaydcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtX2RhdGEgfSlcbiAgICAgICAgdGhpcy5wcm9wcy5zYXZlTGVhZFBobk51bWJlcihwaG9uZV9udW1iZXIpXG4gICAgICAgaWYodGhpcy5zdGF0ZS5pc19sZWFkX2VuYWJsZWQpe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNfbGVhZF9lbmFibGVkOmZhbHNlfSlcbiAgICAgICAgICAgIHRoaXMucHJvcHMuTm9uSXBkQm9va2luZ0xlYWQoZGF0YSlcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzX2xlYWRfZW5hYmxlZDp0cnVlfSlcbiAgICAgICAgICAgIH0sIDUwMDApXG4gICAgICAgIH0gXG4gICAgICAgdGhpcy5zZXRTdGF0ZSh7dG9fYmVfZm9yY2U6MH0pXG4gICAgfVxuXG4gICAgY2xvc2VJcGRMZWFkUG9wdXAoZnJvbSl7XG4gICAgICAgIGlmKGZyb20pe1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnTm9uSXBkVGh5cm9jYXJlQ3Jvc3NDbGljaycsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnZXZlbnQnOiAnbm9uLWlwZC10aHlyb2NhcmUtY3Jvc3MtY2xpY2snXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3RvX2JlX2ZvcmNlOjB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRhaW5lci10b3AtbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlbG1ldFRhZ3MgdGFnc0RhdGE9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0NvbXBhcmUgdG9wIEFhcm9neWFtIHBhY2thZ2VzIGZyb20gVGh5cm9jYXJlIHwgQm9vayBPbmxpbmUgJiBTYXZlIHVwdG8gNTAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NvbXBhcmUgYW5kIGJvb2sgQWFyb2d5YW0gZnVsbCBib2R5IGhlYWx0aCBjaGVja3VwIHBhY2thZ2VzIGZyb20gVGh5cm9jYXJlIGF0IGRvY3ByaW1lLmNvbS4gQXZhaWwgZXhjbHVzaXZlIGRpc2NvdW50cyAmIHNhdmUgdXB0byA1MCUuIEdldCBmcmVlIGhvbWUgc2FtcGxlIGNvbGxlY3Rpb24gYW5kIG9ubGluZSByZXBvcnRzIG9uIHRpbWUuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNvbC1sZy03IGNlbnRlci1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub2ZmZXJMaXN0ICYmIHRoaXMucHJvcHMub2ZmZXJMaXN0LmZpbHRlcih4ID0+IHguc2xpZGVyX2xvY2F0aW9uID09PSAndGh5cm9jYXJlX2Fhcm9neWFtX3BhY2thZ2VzX3BhZ2UnKS5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFubmVyQ2Fyb3VzZWwgey4uLnRoaXMucHJvcHN9IHNsaWRlckxvY2F0aW9uPVwidGh5cm9jYXJlX2Fhcm9neWFtX3BhY2thZ2VzX3BhZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbXJ0LTEwXCIgc3R5bGU9e3sgcGFkZGluZzogJzAgMTVweCcgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZnctNTAwXCIgc3R5bGU9e3sgZm9udFNpemU6IDE2LCBmbGV4OiAxLCBtYXJnaW5SaWdodDogNCB9fT5Ub3AgZnVsbCBib2R5IGNoZWNrdXAgcGFja2FnZXM8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMudmlld0FsbENsaWNrKCl9IGNsYXNzTmFtZT1cInZ3LWFsbC1zdGF0aWMgdGV4dC1wcmltYXJ5IGZ3LTUwMFwiPlZpZXcgYWxsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJ0LTEwIGN0LXByb2ZpbGUgc2tpbi13aGl0ZSBib3JkZXItYm90dG9tLXJhZGlvdXMgZ29sZC1yZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRpYy1way1jb250YWluZXIgc3RpY2t5LXBrLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0aWMtcGtnLXRvcC1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1wa2ctc3ViXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN0Yy1zdWItcGFyYVwiPkFhcm9neWFtIEI8YnIgLz4oSW5jbHVkZXMgNTYgdGVzdHMpPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdGMtcHJpY2UtY3V0XCI+4oK5IDc1MHsvKjYzNCA8c3Bhbj7igrkgNzUwPC9zcGFuPiovfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0aWMtcGtnLXRvcC1jb2x1bW4gc3RjLW1pZC1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtcGtnLXN1YlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdGMtc3ViLXBhcmFcIj5BYXJvZ3lhbSBDIDxiciAvPihJbmNsdWRlcyA1OSB0ZXN0cyk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN0Yy1wcmljZS1jdXRcIj7igrkgMTUwMHsvKjk1MCA8c3Bhbj7igrkgMTEwMDwvc3Bhbj4qL308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGljLXBrZy10b3AtY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtcGtnLXN1YlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdGMtc3ViLXBhcmFcIj5BYXJvZ3lhbSAxLjMgPGJyIC8+KEluY2x1ZGVzIDkwIHRlc3RzKTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RjLXByaWNlLWN1dFwiPuKCuSAyMDAwey8qMTQ0MCA8c3Bhbj7igrkgMTYwMDwvc3Bhbj4qL308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGljLXBrLWNvbnRhaW5lciBzdGlja3ktcGstY29udGFpbmVyLTJcIiBzdHlsZT17eyBwYWRkaW5nVG9wOiAwLCBwYWRkaW5nQm90dG9tOiAzMCB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRpYy1wa2ctdG9wLWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwic3RjLW9mZnItY3BuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN0Yy1vZmYtcGFyYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5jbHVkZXMg4oK5IDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT0ZGIENvdXBvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4qL31cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGdvbGRDYXJkIG10LTBcIiBvbkNsaWNrPXt0aGlzLmdvbGRDbGlja2VkLmJpbmQodGhpcywxMjIyNyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdsZC1jZC1pY29uXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9nb2xkLXNtLnBuZyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImdsZC1wLXJjXCI+UHJpY2U8L3A+IDxzcGFuIGNsYXNzTmFtZT1cImdsZC1yYXRlLWxmXCI+4oK5IDU0MDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN0Yy1mcmVlLXBpY2tcIj5GcmVlIEhvbWUgUGlja3VwPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvbGFiL3NlYXJjaHJlc3VsdHM/dGVzdF9pZHM9MTIyMjdcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib29rTm93Q2xpY2tlZCgnL2xhYi9zZWFyY2hyZXN1bHRzP3Rlc3RfaWRzPTEyMjI3JywgJ1RvcGJvb2tOb3dDbGlja2VkQmxvY2sxJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9XCJzdGMtYm9vay1idG5cIj5Cb29rIE5vdzwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0aWMtcGtnLXRvcC1jb2x1bW4gc3RjLW1pZC1tcmduXCIgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwic3RjLW9mZnItY3BuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN0Yy1vZmYtcGFyYVwiPkluY2x1ZGVzIOKCuSAxNTAgT0ZGIENvdXBvbjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBnb2xkQ2FyZCBtdC0wXCIgb25DbGljaz17dGhpcy5nb2xkQ2xpY2tlZC5iaW5kKHRoaXMsMTIyMTMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJnbGQtY2QtaWNvblwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvZ29sZC1zbS5wbmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJnbGQtcC1yY1wiPlByaWNlPC9wPiA8c3BhbiBjbGFzc05hbWU9XCJnbGQtcmF0ZS1sZlwiPuKCuSA4NDA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RjLWZyZWUtcGlja1wiPkZyZWUgSG9tZSBQaWNrdXA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9sYWIvc2VhcmNocmVzdWx0cz90ZXN0X2lkcz0xMjIxM1wiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvb2tOb3dDbGlja2VkKCcvbGFiL3NlYXJjaHJlc3VsdHM/dGVzdF9pZHM9MTIyMTMnLCAnVG9wYm9va05vd0NsaWNrZWRCbG9jazInKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cInN0Yy1ib29rLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb29rIE5vd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVsYXItdHh0XCIgc3R5bGU9e3sgdG9wOiAndW5zZXQnLCByaWdodDogJ3Vuc2V0JywgYm90dG9tOiAnLTI2cHgnLCBsZWZ0OiAnNTAlJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKScgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmdy01MDBcIj5Qb3B1bGFyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRpYy1wa2ctdG9wLWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwic3RjLW9mZnItY3BuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN0Yy1vZmYtcGFyYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5jbHVkZXMg4oK5IDE2MFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT0ZGIENvdXBvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBnb2xkQ2FyZCBtdC0wXCIgb25DbGljaz17dGhpcy5nb2xkQ2xpY2tlZC5iaW5kKHRoaXMsMTQ5NDcpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJnbGQtY2QtaWNvblwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvZ29sZC1zbS5wbmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJnbGQtcC1yY1wiPlByaWNlPC9wPiA8c3BhbiBjbGFzc05hbWU9XCJnbGQtcmF0ZS1sZlwiPuKCuSAxNDM3PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN0Yy1mcmVlLXBpY2tcIj5GcmVlIEhvbWUgUGlja3VwPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvbGFiL3NlYXJjaHJlc3VsdHM/dGVzdF9pZHM9MTQ5NDdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvb2tOb3dDbGlja2VkKCcvbGFiL3NlYXJjaHJlc3VsdHM/dGVzdF9pZHM9MTQ5NDcnLCAnVG9wYm9va05vd0NsaWNrZWRCbG9jazMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdGMtYm9vay1idG5cIj5Cb29rIE5vdzwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZG4tY29udGFuaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInN0Yy1leHBuZC1idG4gbXJ0LTEwXCIgb25DbGljaz17dGhpcy5leHBhbmRBbGwuYmluZCh0aGlzKX0+e3RoaXMuc3RhdGUuZXhwYW5kVGV4dH08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNjb3JkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtaGVhZGluZyBzdGMtbm8tY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlByZXBhcmF0aW9uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDgtMTAgaHJzIG9mIGZhc3RpbmcgcmVxdWlyZWQgYmVmb3JlIHNhbXBsZSBjb2xsZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA4LTEwIGhycyBvZiBmYXN0aW5nIHJlcXVpcmVkIGJlZm9yZSBzYW1wbGUgY29sbGVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA4LTEwIGhycyBvZiBmYXN0aW5nIHJlcXVpcmVkIGJlZm9yZSBzYW1wbGUgY29sbGVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNjb3JkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtaGVhZGluZyBzdGMtbm8tY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRlc3RzIEluY2x1ZGVkIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1NlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNTlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjY29yZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWhlYWRpbmdcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsIDApfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q0JDIEhhZW1vZ3JhbSBUZXN0czwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb2xsYXBzZVswXSA/IDxpbWcgY2xhc3NOYW1lPVwidGl0bGVhcnJvd1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPiA6IDxpbWcgY2xhc3NOYW1lPVwidGl0bGVhcnJvd1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHBiLTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyNFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhcHNlWzBdID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48c3Bhbj5Db21wbGV0ZSBCbG9vZCBDb3VudCAoQ0JDKSBpcyBhIGJsb29kIHRlc3QgdGhhdCBtZWFzdXJlcyBSZWQgYmxvb2QgY2VsbHMgKFJCQyksIFdoaXRlIGJsb29kIGNlbGxzIChXQkMpLCBQbGF0ZWxldHMgKFBMVHMpLCBIZW1vZ2xvYmluIChIYiksIGFuZCBIZW1hdG9jcml0IChIY3QpIGluIHRoZSBibG9vZC4gVGhpcyB0ZXN0IGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSBvdmVyYWxsIGhlYWx0aCBhbmQgc2NyZWVuIGZvciBhbnkgZGlzZWFzZXMgdGhhdCBhZmZlY3QgdGhlIGJsb29kIGNlbGxzLjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgc3RjLWhpZGUtYWNyZC1jb250YWluZXIgcHQtMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxwPkNvbXBsZXRlIEJsb29kIENvdW50IChDQkMpIGlzIGEgYmxvb2QgdGVzdCB0aGF0IG1lYXN1cmVzIFJlZCBibG9vZCBjZWxscyAoUkJDKSwgV2hpdGUgYmxvb2QgY2VsbHMgKFdCQyksIFBsYXRlbGV0cyAoUExUcyksIEhlbW9nbG9iaW4gKEhiKSwgYW5kIEhlbWF0b2NyaXQgKEhjdCkgaW4gdGhlIGJsb29kLiBUaGlzIHRlc3QgaXMgdXNlZCB0byBkZXRlcm1pbmUgdGhlIG92ZXJhbGwgaGVhbHRoIGFuZCBzY3JlZW4gZm9yIGFueSBkaXNlYXNlcyB0aGF0IGFmZmVjdCB0aGUgYmxvb2QgY2VsbHMuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0XCI+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5Ub3RhbCBSQkM8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+UmVkIENlbGwgRGlzdHJpYnV0aW9uIFdpZHRoIChSRFctQ1YpPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlJlZCBDZWxsIERpc3RyaWJ1dGlvbiBXaWR0aCAtIFNEKFJEVy1TRCk8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+UGxhdGVsZXQgVG8gTGFyZ2UgQ2VsbCBSYXRpbyAoUExDUik8L3A+PC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGF0ZWxldCBDb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZWFuIENvcnB1c2N1bGFyIEhlbW9nbG9iaW4gKE1DSClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVhbiBDb3JwLkhlbW8uQ29uYyAoTUNIQylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVhbiBDb3JwdXNjdWxhciBWb2x1bWUgKE1DVilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9ub2N5dGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lYW4gUGxhdGVsZXQgVm9sdW1lIChNUFYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5ldXRyb3BoaWxzIChOUClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVjbGVhdGVkIFJlZCBCbG9vZCBDZWxscyAoTlJCQylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxhdGVsZXRjcml0IChQQ1QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlbWF0b2NyaXQgKFBDVilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxhdGVsZXQgRGlzdHJpYnV0aW9uIFdpZHRoIChQRFcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlbW9nbG9iaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW9zaW5vcGhpbHMgKEVQKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbW1hdHVyZSBHcmFudWxvY3l0ZXMgKElHKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCYXNvcGhpbHMgLSBBYnNvbHV0ZSBDb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFb3Npbm9waGlscyAtIEFic29sdXRlIENvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEx5bXBob2N5dGVzLSBBYnNvbHV0ZSBDb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb25vY3l0ZXMtIEFic29sdXRlIENvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5ldXRyb3BoaWxzLSBBYnNvbHV0ZSBDb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCYXNvcGhpbHMgKEJTKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMeW1waG9jeXRlIFBlcmNlbnRhZ2UgKExDJSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG90YWwgTGV1Y29jeXRlcyBDb3VudCAoVExDKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdWNsZWF0ZWQgUmVkIEJsb29kIENlbGxzIChOUkJDJSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW1tYXR1cmUgR3JhbnVsb2N5dGUgUGVyY2VudGFnZShJRyUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPHA+Q29tcGxldGUgQmxvb2QgQ291bnQgKENCQykgaXMgYSBibG9vZCB0ZXN0IHRoYXQgbWVhc3VyZXMgUmVkIGJsb29kIGNlbGxzIChSQkMpLCBXaGl0ZSBibG9vZCBjZWxscyAoV0JDKSwgUGxhdGVsZXRzIChQTFRzKSwgSGVtb2dsb2JpbiAoSGIpLCBhbmQgSGVtYXRvY3JpdCAoSGN0KSBpbiB0aGUgYmxvb2QuIFRoaXMgdGVzdCBpcyB1c2VkIHRvIGRldGVybWluZSB0aGUgb3ZlcmFsbCBoZWFsdGggYW5kIHNjcmVlbiBmb3IgYW55IGRpc2Vhc2VzIHRoYXQgYWZmZWN0IHRoZSBibG9vZCBjZWxscy5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3RcIj5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlRvdGFsIFJCQzwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5SZWQgQ2VsbCBEaXN0cmlidXRpb24gV2lkdGggKFJEVy1DVik8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+UmVkIENlbGwgRGlzdHJpYnV0aW9uIFdpZHRoIC0gU0QoUkRXLVNEKTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5QbGF0ZWxldCBUbyBMYXJnZSBDZWxsIFJhdGlvIChQTENSKTwvcD48L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsYXRlbGV0IENvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lYW4gQ29ycHVzY3VsYXIgSGVtb2dsb2JpbiAoTUNIKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZWFuIENvcnAuSGVtby5Db25jIChNQ0hDKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZWFuIENvcnB1c2N1bGFyIFZvbHVtZSAoTUNWKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb25vY3l0ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVhbiBQbGF0ZWxldCBWb2x1bWUgKE1QVilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV1dHJvcGhpbHMgKE5QKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdWNsZWF0ZWQgUmVkIEJsb29kIENlbGxzIChOUkJDKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGF0ZWxldGNyaXQgKFBDVClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVtYXRvY3JpdCAoUENWKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGF0ZWxldCBEaXN0cmlidXRpb24gV2lkdGggKFBEVylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVtb2dsb2JpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFb3Npbm9waGlscyAoRVApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEltbWF0dXJlIEdyYW51bG9jeXRlcyAoSUcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhc29waGlscyAtIEFic29sdXRlIENvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVvc2lub3BoaWxzIC0gQWJzb2x1dGUgQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTHltcGhvY3l0ZXMtIEFic29sdXRlIENvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vbm9jeXRlcy0gQWJzb2x1dGUgQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV1dHJvcGhpbHMtIEFic29sdXRlIENvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhc29waGlscyAoQlMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEx5bXBob2N5dGUgUGVyY2VudGFnZSAoTEMlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb3RhbCBMZXVjb2N5dGVzIENvdW50IChUTEMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51Y2xlYXRlZCBSZWQgQmxvb2QgQ2VsbHMgKE5SQkMlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbW1hdHVyZSBHcmFudWxvY3l0ZSBQZXJjZW50YWdlKElHJSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxwPkNvbXBsZXRlIEJsb29kIENvdW50IChDQkMpIGlzIGEgYmxvb2QgdGVzdCB0aGF0IG1lYXN1cmVzIFJlZCBibG9vZCBjZWxscyAoUkJDKSwgV2hpdGUgYmxvb2QgY2VsbHMgKFdCQyksIFBsYXRlbGV0cyAoUExUcyksIEhlbW9nbG9iaW4gKEhiKSwgYW5kIEhlbWF0b2NyaXQgKEhjdCkgaW4gdGhlIGJsb29kLiBUaGlzIHRlc3QgaXMgdXNlZCB0byBkZXRlcm1pbmUgdGhlIG92ZXJhbGwgaGVhbHRoIGFuZCBzY3JlZW4gZm9yIGFueSBkaXNlYXNlcyB0aGF0IGFmZmVjdCB0aGUgYmxvb2QgY2VsbHMuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0XCI+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5Ub3RhbCBSQkM8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+UmVkIENlbGwgRGlzdHJpYnV0aW9uIFdpZHRoIChSRFctQ1YpPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlJlZCBDZWxsIERpc3RyaWJ1dGlvbiBXaWR0aCAtIFNEKFJEVy1TRCk8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+UGxhdGVsZXQgVG8gTGFyZ2UgQ2VsbCBSYXRpbyAoUExDUik8L3A+PC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGF0ZWxldCBDb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZWFuIENvcnB1c2N1bGFyIEhlbW9nbG9iaW4gKE1DSClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVhbiBDb3JwLkhlbW8uQ29uYyAoTUNIQylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVhbiBDb3JwdXNjdWxhciBWb2x1bWUgKE1DVilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9ub2N5dGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lYW4gUGxhdGVsZXQgVm9sdW1lIChNUFYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5ldXRyb3BoaWxzIChOUClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVjbGVhdGVkIFJlZCBCbG9vZCBDZWxscyAoTlJCQylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxhdGVsZXRjcml0IChQQ1QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlbWF0b2NyaXQgKFBDVilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxhdGVsZXQgRGlzdHJpYnV0aW9uIFdpZHRoIChQRFcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlbW9nbG9iaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW9zaW5vcGhpbHMgKEVQKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbW1hdHVyZSBHcmFudWxvY3l0ZXMgKElHKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCYXNvcGhpbHMgLSBBYnNvbHV0ZSBDb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFb3Npbm9waGlscyAtIEFic29sdXRlIENvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEx5bXBob2N5dGVzLSBBYnNvbHV0ZSBDb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb25vY3l0ZXMtIEFic29sdXRlIENvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5ldXRyb3BoaWxzLSBBYnNvbHV0ZSBDb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCYXNvcGhpbHMgKEJTKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMeW1waG9jeXRlIFBlcmNlbnRhZ2UgKExDJSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG90YWwgTGV1Y29jeXRlcyBDb3VudCAoVExDKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdWNsZWF0ZWQgUmVkIEJsb29kIENlbGxzIChOUkJDJSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW1tYXR1cmUgR3JhbnVsb2N5dGUgUGVyY2VudGFnZShJRyUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY2NvcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1oZWFkaW5nXCIgb25DbGljaz17dGhpcy50b2dnbGUuYmluZCh0aGlzLCAxKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxpdmVyIFByb2ZpbGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidGl0bGVhcnJvd1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBwYi0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDExXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDExXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb2xsYXBzZVsxXSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBzdGMtaGlkZS1hY3JkLWNvbnRhaW5lciBwdC0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3QgbXQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1tYSBnbHV0YW15bCBUcmFuc2ZlcmFzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbGthbGluZSBQaG9zcGhhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlsaXJ1YmluLURpcmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWxpcnViaW4tdG90YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlsaXJ1YmluLUluZGlyZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb3RlaW4gLXRvdGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnVtIEFsYnVtaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VydW0gR2xvYnVsaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU0dPVChBU1QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNHUFQoQUxUKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ1bSBBbGJ1bWluIC9HbG9idWxpbiBSYXRpb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0IG10LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtbWEgZ2x1dGFteWwgVHJhbnNmZXJhc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWxrYWxpbmUgUGhvc3BoYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpbGlydWJpbi1EaXJlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlsaXJ1YmluLXRvdGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpbGlydWJpbi1JbmRpcmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm90ZWluIC10b3RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ1bSBBbGJ1bWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnVtIEdsb2J1bGluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNHT1QoQVNUKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTR1BUKEFMVClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VydW0gQWxidW1pbiAvR2xvYnVsaW4gUmF0aW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0IG10LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtbWEgZ2x1dGFteWwgVHJhbnNmZXJhc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWxrYWxpbmUgUGhvc3BoYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpbGlydWJpbi1EaXJlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlsaXJ1YmluLXRvdGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpbGlydWJpbi1JbmRpcmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm90ZWluIC10b3RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ1bSBBbGJ1bWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnVtIEdsb2J1bGluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNHT1QoQVNUKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTR1BUKEFMVClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VydW0gQWxidW1pbiAvR2xvYnVsaW4gUmF0aW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjY29yZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWhlYWRpbmdcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsIDIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UmVuYWwgUHJvZmlsZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ0aXRsZWFycm93XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHBiLTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhcHNlWzJdID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHN0Yy1oaWRlLWFjcmQtY29udGFpbmVyIHB0LTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RjLWRhdGEtdWwtbGlzdCBtdC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbGNpdW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVyaWMgQWNpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmxvb2QgVXJlYSBOaXRyb2dlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VydW0gQ3JlYXRpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJVTi9TZXJ1bSBDcmVhdGluaW5lIFJhdGlvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0IG10LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FsY2l1bVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXJpYyBBY2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCbG9vZCBVcmVhIE5pdHJvZ2VuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ1bSBDcmVhdGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQlVOL1NlcnVtIENyZWF0aW5pbmUgUmF0aW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RjLWRhdGEtdWwtbGlzdCBtdC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbGNpdW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVyaWMgQWNpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmxvb2QgVXJlYSBOaXRyb2dlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VydW0gQ3JlYXRpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJVTi9TZXJ1bSBDcmVhdGluaW5lIFJhdGlvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNjb3JkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtaGVhZGluZ1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgMTEpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TGlwaWQgUHJvZmlsZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ0aXRsZWFycm93XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHBiLTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhcHNlWzExXSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiA8c3Bhbj5MaXBpZCBwcm9maWxlIHRlc3QgaXMgYSBzZXQgb2YgdGVzdHMgdXNlZCB0byBtZWFzdXJlIHRoZSBhbW91bnQgb2YgY2hvbGVzdGVyb2wgYW5kIG90aGVyIHR5cGVzIG9mIGZhdHMgcHJlc2VudCBpbiB5b3VyIGJsb29kLiBUaGlzIHRlc3QgaXMgaGVscGZ1bCBpbiBhc3Nlc3NpbmcgdGhlIHJpc2sgb2YgY2FyZGlvdmFzY3VsYXIgZGlzZWFzZXMgKENWRCkuPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBzdGMtaGlkZS1hY3JkLWNvbnRhaW5lciBwdC0wIHRleHQtY2VudGVyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyp9IDxwPkxpcGlkIHByb2ZpbGUgdGVzdCBpcyBhIHNldCBvZiB0ZXN0cyB1c2VkIHRvIG1lYXN1cmUgdGhlIGFtb3VudCBvZiBjaG9sZXN0ZXJvbCBhbmQgb3RoZXIgdHlwZXMgb2YgZmF0cyBwcmVzZW50IGluIHlvdXIgYmxvb2QuIFRoaXMgdGVzdCBpcyBoZWxwZnVsIGluIGFzc2Vzc2luZyB0aGUgcmlzayBvZiBjYXJkaW92YXNjdWxhciBkaXNlYXNlcyAoQ1ZEKS5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+TERMIENob2xlc3Ryb2w8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VG90YWwgQ2hvbGVzdGVyb2w8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+SERMIENob2xlc3Rlcm9sPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlRyaWdseWNlcmlkZXM8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VkxETCBDaG9sZXN0ZXJvbDwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5MREwvSERMIFJhdGlvPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPk5vbiAtIEhETCBDaG9sZXN0ZXJvbDwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5UQy9IREwgQ2hvbGVzdGVyb2wgUmF0aW88L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyp9IDxwPkxpcGlkIHByb2ZpbGUgdGVzdCBpcyBhIHNldCBvZiB0ZXN0cyB1c2VkIHRvIG1lYXN1cmUgdGhlIGFtb3VudCBvZiBjaG9sZXN0ZXJvbCBhbmQgb3RoZXIgdHlwZXMgb2YgZmF0cyBwcmVzZW50IGluIHlvdXIgYmxvb2QuIFRoaXMgdGVzdCBpcyBoZWxwZnVsIGluIGFzc2Vzc2luZyB0aGUgcmlzayBvZiBjYXJkaW92YXNjdWxhciBkaXNlYXNlcyAoQ1ZEKS5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+TERMIENob2xlc3Ryb2w8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VG90YWwgQ2hvbGVzdGVyb2w8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+SERMIENob2xlc3Rlcm9sPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlRyaWdseWNlcmlkZXM8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VkxETCBDaG9sZXN0ZXJvbDwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5MREwvSERMIFJhdGlvPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPk5vbiAtIEhETCBDaG9sZXN0ZXJvbDwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5UQy9IREwgQ2hvbGVzdGVyb2wgUmF0aW88L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKn0gPHA+TGlwaWQgcHJvZmlsZSB0ZXN0IGlzIGEgc2V0IG9mIHRlc3RzIHVzZWQgdG8gbWVhc3VyZSB0aGUgYW1vdW50IG9mIGNob2xlc3Rlcm9sIGFuZCBvdGhlciB0eXBlcyBvZiBmYXRzIHByZXNlbnQgaW4geW91ciBibG9vZC4gVGhpcyB0ZXN0IGlzIGhlbHBmdWwgaW4gYXNzZXNzaW5nIHRoZSByaXNrIG9mIGNhcmRpb3Zhc2N1bGFyIGRpc2Vhc2VzIChDVkQpLlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RjLWRhdGEtdWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5MREwgQ2hvbGVzdHJvbDwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5Ub3RhbCBDaG9sZXN0ZXJvbDwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5IREwgQ2hvbGVzdGVyb2w8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VHJpZ2x5Y2VyaWRlczwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5WTERMIENob2xlc3Rlcm9sPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkxETC9IREwgUmF0aW88L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+Tm9uIC0gSERMIENob2xlc3Rlcm9sPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlRDL0hETCBDaG9sZXN0ZXJvbCBSYXRpbzwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNjb3JkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtaGVhZGluZ1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgMyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Jcm9uIERlZmljaWVuY3k8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidGl0bGVhcnJvd1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBwYi0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb2xsYXBzZVszXSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBzdGMtaGlkZS1hY3JkLWNvbnRhaW5lciBwdC0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3QgbXQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb3RhbCBJcm9uIEJpbmRpbmcgQ2FwYWNpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ1bSBJcm9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJSBUcmFuc2VycmluIFNhdHVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0IG10LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG90YWwgSXJvbiBCaW5kaW5nIENhcGFjaXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VydW0gSXJvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICUgVHJhbnNlcnJpbiBTYXR1cmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0IG10LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG90YWwgSXJvbiBCaW5kaW5nIENhcGFjaXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VydW0gSXJvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICUgVHJhbnNlcnJpbiBTYXR1cmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjY29yZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWhlYWRpbmdcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsIDQpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGh5cm9pZCBQcm9maWxlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInRpdGxlYXJyb3dcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgcGItMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGFwc2VbNF0gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgc3RjLWhpZGUtYWNyZC1jb250YWluZXIgcHQtMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0IG10LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJpbG9kb3RoeXJvbmluZShUMylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG90YWwgVGh5cm94aW5lKFQ0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaHlyb2lkIFN0aW11bGF0aW5nIEhvcm1vbmUoVFNIKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0IG10LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJpbG9kb3RoeXJvbmluZShUMylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG90YWwgVGh5cm94aW5lKFQ0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaHlyb2lkIFN0aW11bGF0aW5nIEhvcm1vbmUoVFNIKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3QgbXQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUcmlsb2RvdGh5cm9uaW5lKFQzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb3RhbCBUaHlyb3hpbmUoVDQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoeXJvaWQgU3RpbXVsYXRpbmcgSG9ybW9uZShUU0gpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY2NvcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1oZWFkaW5nXCIgb25DbGljaz17dGhpcy50b2dnbGUuYmluZCh0aGlzLCA1KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwID5DQVJESUFDIFJJU0sgTUFSS0VSPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInRpdGxlYXJyb3dcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgcGItMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjcmQtc3RjLXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjcmQtc3RjLXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGFwc2VbNV0gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgc3RjLWhpZGUtYWNyZC1jb250YWluZXIgcHQtMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0IG10LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExJUE9QUk9URUlOKEEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQVBPTElQT1BST1RFSU4tQTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBUE9MSVBPUFJPVEVJTi1CXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQy0gUkVBQ1RJVkUgUFJPVEVJTiAoSFNDUlApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQVBPIEIvIEFQTyBBMSBSQVRJT1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjY29yZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWhlYWRpbmdcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsIDYpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgPkhPTU9DWVNURUlOPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBjbGFzc05hbWU9XCJ0aXRsZWFycm93XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBwYi0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGFwc2VbNl0gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4gPHNwYW4+TGlwaWQgcHJvZmlsZSB0ZXN0IGlzIGEgc2V0IG9mIHRlc3RzIHVzZWQgdG8gbWVhc3VyZSB0aGUgYW1vdW50IG9mIGNob2xlc3Rlcm9sIGFuZCBvdGhlciB0eXBlcyBvZiBmYXRzIHByZXNlbnQgaW4geW91ciBibG9vZC4gVGhpcyB0ZXN0IGlzIGhlbHBmdWwgaW4gYXNzZXNzaW5nIHRoZSByaXNrIG9mIGNhcmRpb3Zhc2N1bGFyIGRpc2Vhc2VzIChDVkQpLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgc3RjLWhpZGUtYWNyZC1jb250YWluZXIgcHQtMCB0ZXh0LWNlbnRlclwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY2NvcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1oZWFkaW5nXCIgb25DbGljaz17dGhpcy50b2dnbGUuYmluZCh0aGlzLCA3KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRpYWJldGljIFNjcmVlbjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ0aXRsZWFycm93XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHBiLTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhcHNlWzddID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHN0Yy1oaWRlLWFjcmQtY29udGFpbmVyIHB0LTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RjLWRhdGEtdWwtbGlzdCBtdC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkhiYTFjPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkF2ZXJhZ2UgYmxvb2QgR2x1Y29zZTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0IG10LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+SGJhMWM8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+QXZlcmFnZSBibG9vZCBHbHVjb3NlPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RjLWRhdGEtdWwtbGlzdCBtdC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkhiYTFjPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkF2ZXJhZ2UgYmxvb2QgR2x1Y29zZTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNjb3JkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtaGVhZGluZ1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgOCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCA+VklUQU1JTiBEIFBST0ZJTEU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidGl0bGVhcnJvd1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBwYi0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb2xsYXBzZVs4XSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBzdGMtaGlkZS1hY3JkLWNvbnRhaW5lciBwdC0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlZpdGFtaW4gRCBUb3RhbC0yNSBIeWRyb3h5PC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RjLWRhdGEtdWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5WaXRhbWluIEQgVG90YWwtMjUgSHlkcm94eTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNjb3JkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtaGVhZGluZ1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgOSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCA+VklUQU1JTiBCIENPTVBMRVg8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidGl0bGVhcnJvd1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBwYi0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb2xsYXBzZVs5XSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBzdGMtaGlkZS1hY3JkLWNvbnRhaW5lciBwdC0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RjLWRhdGEtdWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5WaXRhbWluIEItMTI8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlZpdGFtaW4gQi0xMjwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNjb3JkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtaGVhZGluZ1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgMTApfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VEVTVE9TVEVST05FPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBjbGFzc05hbWU9XCJ0aXRsZWFycm93XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBwYi0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY2NvcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1oZWFkaW5nXCIgb25DbGljaz17dGhpcy50b2dnbGUuYmluZCh0aGlzLCAxMSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCA+Q3lzdGF0aW4gQzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgcGItMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjcmQtc3RjLXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjcmQtc3RjLXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNjb3JkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtaGVhZGluZ1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgMTIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgPkNvcHBlciBTZXJ1bTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgcGItMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjcmQtc3RjLXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjcmQtc3RjLXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNjb3JkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtaGVhZGluZ1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgMTMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgPlppbmMgLSBTZXJ1bTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgcGItMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjcmQtc3RjLXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjcmQtc3RjLXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNjb3JkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtaGVhZGluZ1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgMTQpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RWxlbWVudHM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidGl0bGVhcnJvd1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBwYi0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGFwc2VbMTRdID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHN0Yy1oaWRlLWFjcmQtY29udGFpbmVyIHB0LTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RjLWRhdGEtdWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5BbHVtaW5pdW08L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+QXJzZW5pYzwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5CYXJpdW08L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+Q2FkbWl1bTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5DYWVzaXVtPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPk1lcmN1cnk8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+TGVhZDwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5UaW48L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+QmlzbXV0aDwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5CZXJ5bGxpdW08L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+QW50aW1vbnk8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+U3Ryb250aXVtPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlRoYWxsaXVtPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlVyYW5pdW08L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+Q29iYWx0PC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkNocm9taXVtPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPk1vbHliZGVudW08L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+U2lsdmVyPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlZhbmFkaXVtPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlNlbGVuaXVtPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPk5pY2tlbDwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5NYWduZXNpdW08L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjY29yZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWhlYWRpbmdcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsIDE1KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlBhbmNyZWF0aWMgKEFjdXRlKSBQcm9maWxlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInRpdGxlYXJyb3dcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgcGItMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjcmQtc3RjLXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjcmQtc3RjLXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGFwc2VbMTVdID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHN0Yy1oaWRlLWFjcmQtY29udGFpbmVyIHB0LTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RjLWRhdGEtdWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5BTVlMQVNFPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkxJUEFTRTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJpZ2h0QmFyIGV4dHJhQ2xhc3M9XCIgY2hhdC1mbG9hdC1idG4tMlwiIG1zZ1RlbXBsYXRlPVwiZ29sZF9nZW5lcmFsX3RlbXBsYXRlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qKHRoaXMuc3RhdGUuc2hvd05vbklwZFBvcHVwID09IDEgfHwgdGhpcy5zdGF0ZS5zaG93Tm9uSXBkUG9wdXAgPT0gMikgJiYgdGhpcy5zdGF0ZS50b19iZV9mb3JjZSA9PSAxP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOb25JcGRQb3B1cFZpZXcgey4uLnRoaXMucHJvcHN9IG5vbklwZExlYWRzPXt0aGlzLm5vbklwZExlYWRzLmJpbmQodGhpcyl9IGNsb3NlSXBkTGVhZFBvcHVwID0ge3RoaXMuY2xvc2VJcGRMZWFkUG9wdXAuYmluZCh0aGlzKX0gaXNfZm9yY2U9e3RoaXMuc3RhdGUuc2hvd05vbklwZFBvcHVwfSBpc19sYWI9e2ZhbHNlfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPEZvb3RlciBmb290ZXJEYXRhPXt0aGlzLnN0YXRlLmZvb3RlckRhdGF9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoeXJvY2FyZVBhY2thZ2VWaWV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGdldE9mZmVyTGlzdCwgdG9nZ2xlT1BEQ3JpdGVyaWEsIHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhLCBOb25JcGRCb29raW5nTGVhZCwgY29tbW9uX3V0bV90YWdzLCBzYXZlTGVhZFBobk51bWJlciB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5cbmltcG9ydCBUaHlyb2NhcmVQYWNrYWdlVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2RpYWdub3Npcy9UaHlyb2NhcmVQYWNrYWdlL1RoeXJvY2FyZVBhY2thZ2VWaWV3LmpzJztcblxuY2xhc3MgVGh5cm9jYXJlUGFja2FnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUaHlyb2NhcmVQYWNrYWdlVmlldyB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcGFzc2VkUHJvcHMpID0+IHtcblxuICAgIGNvbnN0IHtcbiAgICAgICAgb2ZmZXJMaXN0LFxuICAgICAgICBjb21tb25fdXRtX3RhZ3NcbiAgICB9ID0gc3RhdGUuVVNFUlxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgb2ZmZXJMaXN0XG4gICAgfVxuXG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldE9mZmVyTGlzdDogKGxhdCwgbG9uZykgPT4gZGlzcGF0Y2goZ2V0T2ZmZXJMaXN0KGxhdCwgbG9uZykpLFxuICAgICAgICB0b2dnbGVPUERDcml0ZXJpYTogKHR5cGUsIGNyaXRlcmlhLCBmb3JjZUFkZCwgZmlsdGVyKSA9PiBkaXNwYXRjaCh0b2dnbGVPUERDcml0ZXJpYSh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQsIGZpbHRlcikpLFxuICAgICAgICB0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYTogKHR5cGUsIGNyaXRlcmlhLCBmb3JjZUFkZCwgZmlsdGVyKSA9PiBkaXNwYXRjaCh0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQsIGZpbHRlcikpLFxuICAgICAgICBOb25JcGRCb29raW5nTGVhZDooZGF0YSxjYikgPT5kaXNwYXRjaChOb25JcGRCb29raW5nTGVhZChkYXRhLCBjYikpLFxuICAgICAgICBzYXZlTGVhZFBobk51bWJlcjoobnVtYmVyKSA9PiBkaXNwYXRjaChzYXZlTGVhZFBobk51bWJlcihudW1iZXIpKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShUaHlyb2NhcmVQYWNrYWdlKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=