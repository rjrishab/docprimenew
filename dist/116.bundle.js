(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[116],{

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var ThyrocarePackageView = function (_React$Component) {
    _inherits(ThyrocarePackageView, _React$Component);

    function ThyrocarePackageView(props) {
        _classCallCheck(this, ThyrocarePackageView);

        var _this = _possibleConstructorReturn(this, (ThyrocarePackageView.__proto__ || Object.getPrototypeOf(ThyrocarePackageView)).call(this, props));

        var parsed = queryString.parse(_this.props.location.search);
        _this.state = {
            collapse: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            expandClick: true,
            expandText: 'Expand All',
            showNonIpdPopup: parsed.show_popup,
            to_be_force: 1,
            is_lead_enabled: true
        };
        return _this;
    }

    _createClass(ThyrocarePackageView, [{
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
            // book now

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
            this.props.history.push('/tax-saver-health-packages?package_category_ids=59');
        }
    }, {
        key: 'goldClicked',
        value: function goldClicked(pkg_id) {
            // gold click
            var data = {
                'Category': 'ConsumerApp', 'Action': 'VipGoldThyrocareClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'vip-gold-thyrocare-clicked', 'pkgId': pkg_id
            };
            _gtm2.default.sendEvent({ data: data });
            this.props.history.push('/vip-gold-details?is_gold=true&source=thyrocarePkgListing&lead_source=Docprime');
        }
    }, {
        key: 'nonIpdLeads',
        value: function nonIpdLeads(phone_number) {
            var _this2 = this;

            // leads for matrix for the packages searched by user
            var parsed = queryString.parse(this.props.location.search);
            var data = { phone_number: phone_number, lead_source: 'Labads', source: parsed, lead_type: 'LABADS', test_name: 'thyrocare aarogyam packages', exitpoint_url: 'http://docprime.com' + this.props.location.pathname };

            if (this.props.common_utm_tags && this.props.common_utm_tags.length) {
                data.utm_tags = this.props.common_utm_tags.filter(function (x) {
                    return x.type == "common_xtra_tags";
                })[0].utm_tags;
            }

            var visitor_info = _gtm2.default.getVisitorInfo();
            if (visitor_info && visitor_info.visit_id) {
                data.visit_id = visitor_info.visit_id;
                data.visitor_id = visitor_info.visitor_id;
            }

            var gtm_data = {
                'Category': 'ConsumerApp', 'Action': 'NonIpdThyrocareSubmitClick', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'non-ipd-thyrocare-submit-click'
            };
            _gtm2.default.sendEvent({ data: gtm_data });
            this.props.saveLeadPhnNumber(phone_number);
            if (this.state.is_lead_enabled) {
                this.setState({ is_lead_enabled: false });
                this.props.NonIpdBookingLead(data);
                setTimeout(function () {
                    _this2.setState({ is_lead_enabled: true });
                }, 5000);
            }
            this.setState({ to_be_force: 0 });
        }
    }, {
        key: 'closeIpdLeadPopup',
        value: function closeIpdLeadPopup(from) {
            if (from) {
                var data = {
                    'Category': 'ConsumerApp', 'Action': 'NonIpdThyrocareCrossClick', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'non-ipd-thyrocare-cross-click'
                };
                _gtm2.default.sendEvent({ data: data });
                this.setState({ to_be_force: 0 });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

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
                            this.props.offerList && this.props.offerList.filter(function (x) {
                                return x.slider_location === 'thyrocare_aarogyam_packages_page';
                            }).length ? _react2.default.createElement(
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
                                    { onClick: function onClick() {
                                            return _this3.viewAllClick();
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
                                            { href: '/lab/searchresults?test_ids=12227', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this3.bookNowClicked('/lab/searchresults?test_ids=12227', 'TopbookNowClickedBlock1');
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
                                            { href: '/lab/searchresults?test_ids=12213', onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this3.bookNowClicked('/lab/searchresults?test_ids=12213', 'TopbookNowClickedBlock2');
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
                                                onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this3.bookNowClicked('/lab/searchresults?test_ids=14947', 'TopbookNowClickedBlock3');
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
    }]);

    return ThyrocarePackageView;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _ThyrocarePackageView = __webpack_require__(/*! ../../components/diagnosis/ThyrocarePackage/ThyrocarePackageView.js */ "./dev/js/components/diagnosis/ThyrocarePackage/ThyrocarePackageView.js");

var _ThyrocarePackageView2 = _interopRequireDefault(_ThyrocarePackageView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ThyrocarePackage = function (_React$Component) {
    _inherits(ThyrocarePackage, _React$Component);

    function ThyrocarePackage(props) {
        _classCallCheck(this, ThyrocarePackage);

        var _this = _possibleConstructorReturn(this, (ThyrocarePackage.__proto__ || Object.getPrototypeOf(ThyrocarePackage)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(ThyrocarePackage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_ThyrocarePackageView2.default, this.props);
        }
    }]);

    return ThyrocarePackage;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, passedProps) {
    var _state$USER = state.USER,
        offerList = _state$USER.offerList,
        common_utm_tags = _state$USER.common_utm_tags;


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
        },
        NonIpdBookingLead: function NonIpdBookingLead(data, cb) {
            return dispatch((0, _index.NonIpdBookingLead)(data, cb));
        },
        saveLeadPhnNumber: function saveLeadPhnNumber(number) {
            return dispatch((0, _index.saveLeadPhnNumber)(number));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ThyrocarePackage);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvVGh5cm9jYXJlUGFja2FnZS9UaHlyb2NhcmVQYWNrYWdlVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9kaWFnbm9zaXMvVGh5cm9jYXJlUGFja2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGF0aC1icm93c2VyaWZ5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvZXMvaW5kZXguanMiXSwibmFtZXMiOlsicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiVGh5cm9jYXJlUGFja2FnZVZpZXciLCJwcm9wcyIsInBhcnNlZCIsInBhcnNlIiwibG9jYXRpb24iLCJzZWFyY2giLCJzdGF0ZSIsImNvbGxhcHNlIiwiZXhwYW5kQ2xpY2siLCJleHBhbmRUZXh0Iiwic2hvd05vbklwZFBvcHVwIiwic2hvd19wb3B1cCIsInRvX2JlX2ZvcmNlIiwiaXNfbGVhZF9lbmFibGVkIiwid2luZG93Iiwic2Nyb2xsVG8iLCJzZWxlY3RlZExvY2F0aW9uIiwibGF0IiwibG9uZyIsImdlb21ldHJ5IiwibG5nIiwiZ2V0T2ZmZXJMaXN0IiwiaW5kZXgiLCJzZXRTdGF0ZSIsIm1hcCIsIngiLCJ1cmwiLCJ0cmFja2luZ05hbWUiLCJkYXRhIiwiR1RNIiwiZ2V0VXNlcklkIiwic2VuZEV2ZW50IiwiaHJlZiIsImhpc3RvcnkiLCJwdXNoIiwicGtnX2lkIiwicGhvbmVfbnVtYmVyIiwibGVhZF9zb3VyY2UiLCJzb3VyY2UiLCJsZWFkX3R5cGUiLCJ0ZXN0X25hbWUiLCJleGl0cG9pbnRfdXJsIiwicGF0aG5hbWUiLCJjb21tb25fdXRtX3RhZ3MiLCJsZW5ndGgiLCJ1dG1fdGFncyIsImZpbHRlciIsInR5cGUiLCJ2aXNpdG9yX2luZm8iLCJnZXRWaXNpdG9ySW5mbyIsInZpc2l0X2lkIiwidmlzaXRvcl9pZCIsImd0bV9kYXRhIiwic2F2ZUxlYWRQaG5OdW1iZXIiLCJOb25JcGRCb29raW5nTGVhZCIsInNldFRpbWVvdXQiLCJmcm9tIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm9mZmVyTGlzdCIsInNsaWRlcl9sb2NhdGlvbiIsInBhZGRpbmciLCJmb250U2l6ZSIsImZsZXgiLCJtYXJnaW5SaWdodCIsInZpZXdBbGxDbGljayIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiZ29sZENsaWNrZWQiLCJiaW5kIiwiQVNTRVRTX0JBU0VfVVJMIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYm9va05vd0NsaWNrZWQiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsInRyYW5zZm9ybSIsImV4cGFuZEFsbCIsInRvZ2dsZSIsImZvb3RlckRhdGEiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlRoeXJvY2FyZVBhY2thZ2UiLCJtYXBTdGF0ZVRvUHJvcHMiLCJwYXNzZWRQcm9wcyIsIlVTRVIiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInRvZ2dsZU9QRENyaXRlcmlhIiwiY3JpdGVyaWEiLCJmb3JjZUFkZCIsInRvZ2dsZURpYWdub3Npc0NyaXRlcmlhIiwiY2IiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUNBLElBQU1BLGNBQWNDLG1CQUFPQSxDQUFDLDBEQUFSLENBQXBCOztJQUVNQyxvQjs7O0FBQ0Ysa0NBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSkFDVEEsS0FEUzs7QUFFZixZQUFNQyxTQUFTSixZQUFZSyxLQUFaLENBQWtCLE1BQUtGLEtBQUwsQ0FBV0csUUFBWCxDQUFvQkMsTUFBdEMsQ0FBZjtBQUNBLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyxzQkFBVSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxFQUEyQyxLQUEzQyxFQUFrRCxLQUFsRCxFQUF5RCxLQUF6RCxFQUFnRSxLQUFoRSxFQUF1RSxLQUF2RSxFQUE4RSxLQUE5RSxFQUFxRixLQUFyRixFQUE0RixLQUE1RixFQUFtRyxLQUFuRyxFQUEwRyxLQUExRyxDQUREO0FBRVRDLHlCQUFhLElBRko7QUFHVEMsd0JBQVksWUFISDtBQUlUQyw2QkFBaUJSLE9BQU9TLFVBSmY7QUFLVEMseUJBQVksQ0FMSDtBQU1UQyw2QkFBZ0I7QUFOUCxTQUFiO0FBSGU7QUFXbEI7Ozs7NENBRW1CO0FBQ2hCLGdCQUFJQyxNQUFKLEVBQVk7QUFDUkEsdUJBQU9DLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkI7QUFDSDs7QUFFRCxnQkFBSUMsbUJBQW1CLEVBQXZCO0FBQ0EsZ0JBQUlDLE1BQU0sU0FBVjtBQUNBLGdCQUFJQyxPQUFPLFNBQVg7QUFDQSxnQkFBSSxLQUFLakIsS0FBTCxDQUFXZSxnQkFBZixFQUFpQztBQUM3QkEsbUNBQW1CLEtBQUtmLEtBQUwsQ0FBV2UsZ0JBQTlCO0FBQ0FDLHNCQUFNRCxpQkFBaUJHLFFBQWpCLENBQTBCZixRQUExQixDQUFtQ2EsR0FBekM7QUFDQUMsdUJBQU9GLGlCQUFpQkcsUUFBakIsQ0FBMEJmLFFBQTFCLENBQW1DZ0IsR0FBMUM7QUFDQSxvQkFBSSxPQUFPSCxHQUFQLEtBQWUsVUFBbkIsRUFBK0JBLE1BQU1BLEtBQU47QUFDL0Isb0JBQUksT0FBT0MsSUFBUCxLQUFnQixVQUFwQixFQUFnQ0EsT0FBT0EsTUFBUDtBQUNuQzs7QUFFRCxpQkFBS2pCLEtBQUwsQ0FBV29CLFlBQVgsQ0FBd0JKLEdBQXhCLEVBQTZCQyxJQUE3QjtBQUNIOzs7K0JBRU1JLEssRUFBTztBQUNWLGdCQUFJZix3Q0FBZSxLQUFLRCxLQUFMLENBQVdDLFFBQTFCLEVBQUo7QUFDQUEscUJBQVNlLEtBQVQsSUFBa0IsQ0FBQ2YsU0FBU2UsS0FBVCxDQUFuQjtBQUNBLGlCQUFLQyxRQUFMLENBQWMsRUFBRWhCLGtCQUFGLEVBQWQ7QUFDSDs7O29DQUVXO0FBQ1IsZ0JBQUksS0FBS0QsS0FBTCxDQUFXRSxXQUFmLEVBQTRCO0FBQ3hCLG9CQUFJRCxXQUFXLEtBQUtELEtBQUwsQ0FBV0MsUUFBWCxDQUFvQmlCLEdBQXBCLENBQXdCLFVBQUNDLENBQUQ7QUFBQSwyQkFBTyxJQUFQO0FBQUEsaUJBQXhCLENBQWY7QUFDQSxxQkFBS0YsUUFBTCxDQUFjLEVBQUVoQixrQkFBRixFQUFkO0FBQ0EscUJBQUtnQixRQUFMLENBQWMsRUFBRWYsYUFBYSxDQUFDLEtBQUtGLEtBQUwsQ0FBV0UsV0FBM0IsRUFBd0NDLFlBQVksY0FBcEQsRUFBZDtBQUNILGFBSkQsTUFJTztBQUNILG9CQUFJRixZQUFXLEtBQUtELEtBQUwsQ0FBV0MsUUFBWCxDQUFvQmlCLEdBQXBCLENBQXdCLFVBQUNDLENBQUQ7QUFBQSwyQkFBTyxLQUFQO0FBQUEsaUJBQXhCLENBQWY7QUFDQSxxQkFBS0YsUUFBTCxDQUFjLEVBQUVoQixtQkFBRixFQUFkO0FBQ0EscUJBQUtnQixRQUFMLENBQWMsRUFBRWYsYUFBYSxDQUFDLEtBQUtGLEtBQUwsQ0FBV0UsV0FBM0IsRUFBd0NDLFlBQVksWUFBcEQsRUFBZDtBQUNIO0FBQ0o7Ozt1Q0FFY2lCLEcsRUFBS0MsWSxFQUFjO0FBQUU7O0FBRWhDLGdCQUFJQyxPQUFPO0FBQ1AsNEJBQVksYUFETCxFQUNvQixVQUFVRCxZQUQ5QixFQUM0QyxjQUFjRSxjQUFJQyxTQUFKLE1BQW1CLEVBRDdFLEVBQ2lGLFVBQVUsQ0FEM0YsRUFDOEYsU0FBU0g7QUFEdkcsYUFBWDtBQUdBRSwwQkFBSUUsU0FBSixDQUFjLEVBQUVILE1BQU1BLElBQVIsRUFBZDtBQUNBLGdCQUFJZCxNQUFKLEVBQVk7QUFDUkEsdUJBQU9WLFFBQVAsQ0FBZ0I0QixJQUFoQixHQUF1Qk4sR0FBdkI7QUFDSDtBQUNKOzs7dUNBRWM7QUFDWCxpQkFBS3pCLEtBQUwsQ0FBV2dDLE9BQVgsQ0FBbUJDLElBQW5CLENBQXdCLG9EQUF4QjtBQUNIOzs7b0NBRVdDLE0sRUFBUTtBQUFFO0FBQ2xCLGdCQUFJUCxPQUFPO0FBQ1AsNEJBQVksYUFETCxFQUNvQixVQUFVLHlCQUQ5QixFQUN5RCxjQUFjQyxjQUFJQyxTQUFKLE1BQW1CLEVBRDFGLEVBQzhGLFVBQVUsQ0FEeEcsRUFDMkcsU0FBUyw0QkFEcEgsRUFDa0osU0FBU0s7QUFEM0osYUFBWDtBQUdBTiwwQkFBSUUsU0FBSixDQUFjLEVBQUVILE1BQU1BLElBQVIsRUFBZDtBQUNBLGlCQUFLM0IsS0FBTCxDQUFXZ0MsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0IsZ0ZBQXhCO0FBQ0g7OztvQ0FFV0UsWSxFQUFhO0FBQUE7O0FBQUU7QUFDdkIsZ0JBQU1sQyxTQUFTSixZQUFZSyxLQUFaLENBQWtCLEtBQUtGLEtBQUwsQ0FBV0csUUFBWCxDQUFvQkMsTUFBdEMsQ0FBZjtBQUNBLGdCQUFJdUIsT0FBTyxFQUFDUSxjQUFhQSxZQUFkLEVBQTJCQyxhQUFZLFFBQXZDLEVBQWdEQyxRQUFPcEMsTUFBdkQsRUFBOERxQyxXQUFVLFFBQXhFLEVBQWlGQyxXQUFVLDZCQUEzRixFQUF5SEMsZUFBZ0Isd0JBQXdCLEtBQUt4QyxLQUFMLENBQVdHLFFBQVgsQ0FBb0JzQyxRQUFyTCxFQUFYOztBQUVBLGdCQUFHLEtBQUt6QyxLQUFMLENBQVcwQyxlQUFYLElBQThCLEtBQUsxQyxLQUFMLENBQVcwQyxlQUFYLENBQTJCQyxNQUE1RCxFQUFtRTtBQUMvRGhCLHFCQUFLaUIsUUFBTCxHQUFnQixLQUFLNUMsS0FBTCxDQUFXMEMsZUFBWCxDQUEyQkcsTUFBM0IsQ0FBa0M7QUFBQSwyQkFBR3JCLEVBQUVzQixJQUFGLElBQVUsa0JBQWI7QUFBQSxpQkFBbEMsRUFBbUUsQ0FBbkUsRUFBc0VGLFFBQXRGO0FBQ0g7O0FBRUQsZ0JBQUlHLGVBQWVuQixjQUFJb0IsY0FBSixFQUFuQjtBQUNBLGdCQUFHRCxnQkFBZ0JBLGFBQWFFLFFBQWhDLEVBQXlDO0FBQ3JDdEIscUJBQUtzQixRQUFMLEdBQWdCRixhQUFhRSxRQUE3QjtBQUNBdEIscUJBQUt1QixVQUFMLEdBQWtCSCxhQUFhRyxVQUEvQjtBQUNIOztBQUVELGdCQUFJQyxXQUFXO0FBQ1gsNEJBQVksYUFERCxFQUNnQixVQUFVLDRCQUQxQixFQUN3RCxjQUFjdkIsY0FBSUMsU0FBSixNQUFtQixFQUR6RixFQUM2RixTQUFTO0FBRHRHLGFBQWY7QUFHQUQsMEJBQUlFLFNBQUosQ0FBYyxFQUFFSCxNQUFNd0IsUUFBUixFQUFkO0FBQ0EsaUJBQUtuRCxLQUFMLENBQVdvRCxpQkFBWCxDQUE2QmpCLFlBQTdCO0FBQ0QsZ0JBQUcsS0FBSzlCLEtBQUwsQ0FBV08sZUFBZCxFQUE4QjtBQUN6QixxQkFBS1UsUUFBTCxDQUFjLEVBQUNWLGlCQUFnQixLQUFqQixFQUFkO0FBQ0EscUJBQUtaLEtBQUwsQ0FBV3FELGlCQUFYLENBQTZCMUIsSUFBN0I7QUFDQTJCLDJCQUFXLFlBQU07QUFDYiwyQkFBS2hDLFFBQUwsQ0FBYyxFQUFDVixpQkFBZ0IsSUFBakIsRUFBZDtBQUNILGlCQUZELEVBRUcsSUFGSDtBQUdIO0FBQ0YsaUJBQUtVLFFBQUwsQ0FBYyxFQUFDWCxhQUFZLENBQWIsRUFBZDtBQUNGOzs7MENBRWlCNEMsSSxFQUFLO0FBQ25CLGdCQUFHQSxJQUFILEVBQVE7QUFDUixvQkFBSTVCLE9BQU87QUFDUCxnQ0FBWSxhQURMLEVBQ29CLFVBQVUsMkJBRDlCLEVBQzJELGNBQWNDLGNBQUlDLFNBQUosTUFBbUIsRUFENUYsRUFDZ0csU0FBUztBQUR6RyxpQkFBWDtBQUdBRCw4QkFBSUUsU0FBSixDQUFjLEVBQUVILE1BQU1BLElBQVIsRUFBZDtBQUNJLHFCQUFLTCxRQUFMLENBQWMsRUFBQ1gsYUFBWSxDQUFiLEVBQWQ7QUFDSDtBQUNKOzs7aUNBRVE7QUFBQTs7QUFDTCxtQkFDSTtBQUFBO0FBQUEsa0JBQUssV0FBVSxtQkFBZjtBQUNJLDhDQUFDLDhCQUFELE9BREo7QUFFSTtBQUFBO0FBQUEsc0JBQVMsV0FBVSxnQ0FBbkI7QUFDSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxpQ0FBZjtBQUNJLHNEQUFDLG9CQUFELElBQVksVUFBVTtBQUNsQjZDLHVDQUFPLDRFQURXO0FBRWxCQyw2Q0FBYTtBQUZLLDZCQUF0QixHQURKO0FBS0k7QUFBQTtBQUFBLDhCQUFLLFdBQVUsd0NBQWY7QUFFUSxpQ0FBS3pELEtBQUwsQ0FBVzBELFNBQVgsSUFBd0IsS0FBSzFELEtBQUwsQ0FBVzBELFNBQVgsQ0FBcUJiLE1BQXJCLENBQTRCO0FBQUEsdUNBQUtyQixFQUFFbUMsZUFBRixLQUFzQixrQ0FBM0I7QUFBQSw2QkFBNUIsRUFBMkZoQixNQUFuSCxHQUNJO0FBQUE7QUFBQSxrQ0FBSyxXQUFVLFFBQWY7QUFDSSw4REFBQyx3QkFBRCxlQUFvQixLQUFLM0MsS0FBekIsSUFBZ0MsZ0JBQWUsa0NBQS9DO0FBREosNkJBREosR0FHYSxFQUxyQjtBQU9JO0FBQUE7QUFBQSxrQ0FBSyxXQUFVLHVDQUFmLEVBQXVELE9BQU8sRUFBRTRELFNBQVMsUUFBWCxFQUE5RDtBQUNJO0FBQUE7QUFBQSxzQ0FBSSxXQUFVLFFBQWQsRUFBdUIsT0FBTyxFQUFFQyxVQUFVLEVBQVosRUFBZ0JDLE1BQU0sQ0FBdEIsRUFBeUJDLGFBQWEsQ0FBdEMsRUFBOUI7QUFBQTtBQUFBLGlDQURKO0FBRUk7QUFBQTtBQUFBLHNDQUFRLFNBQVM7QUFBQSxtREFBTSxPQUFLQyxZQUFMLEVBQU47QUFBQSx5Q0FBakIsRUFBNEMsV0FBVSxtQ0FBdEQ7QUFBQTtBQUFBO0FBRkosNkJBUEo7QUFXSTtBQUFBO0FBQUEsa0NBQUssV0FBVSx5RUFBZjtBQUNJO0FBQUE7QUFBQSxzQ0FBSyxXQUFVLHlDQUFmO0FBQ0k7QUFBQTtBQUFBLDBDQUFLLFdBQVUsdUJBQWY7QUFDSTtBQUFBO0FBQUEsOENBQUssV0FBVSxhQUFmO0FBQ0k7QUFBQTtBQUFBLGtEQUFHLFdBQVUsY0FBYjtBQUFBO0FBQXNDLHlGQUF0QztBQUFBO0FBQUEsNkNBREo7QUFFSTtBQUFBO0FBQUEsa0RBQUcsV0FBVSxlQUFiO0FBQUE7QUFBQTtBQUZKO0FBREoscUNBREo7QUFPSTtBQUFBO0FBQUEsMENBQUssV0FBVSxvQ0FBZjtBQUNJO0FBQUE7QUFBQSw4Q0FBSyxXQUFVLGFBQWY7QUFDSTtBQUFBO0FBQUEsa0RBQUcsV0FBVSxjQUFiO0FBQUE7QUFBdUMseUZBQXZDO0FBQUE7QUFBQSw2Q0FESjtBQUVJO0FBQUE7QUFBQSxrREFBRyxXQUFVLGVBQWI7QUFBQTtBQUFBO0FBRko7QUFESixxQ0FQSjtBQWFJO0FBQUE7QUFBQSwwQ0FBSyxXQUFVLHVCQUFmO0FBQ0k7QUFBQTtBQUFBLDhDQUFLLFdBQVUsYUFBZjtBQUNJO0FBQUE7QUFBQSxrREFBRyxXQUFVLGNBQWI7QUFBQTtBQUF5Qyx5RkFBekM7QUFBQTtBQUFBLDZDQURKO0FBRUk7QUFBQTtBQUFBLGtEQUFHLFdBQVUsZUFBYjtBQUFBO0FBQUE7QUFGSjtBQURKO0FBYkosaUNBREo7QUFxQkk7QUFBQTtBQUFBLHNDQUFLLFdBQVUsMkNBQWYsRUFBMkQsT0FBTyxFQUFFQyxZQUFZLENBQWQsRUFBaUJDLGVBQWUsRUFBaEMsRUFBbEU7QUFDSTtBQUFBO0FBQUEsMENBQUssV0FBVSx1QkFBZjtBQVFJO0FBQUE7QUFBQSw4Q0FBSyxXQUFVLGdFQUFmLEVBQWdGLFNBQVMsS0FBS0MsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsRUFBMkIsS0FBM0IsQ0FBekY7QUFDSSxtRkFBSyxXQUFVLGFBQWYsRUFBNkIsS0FBS0MsU0FBZUEsR0FBRyxrQkFBcEQsR0FESjtBQUVJO0FBQUE7QUFBQSxrREFBRyxXQUFVLFVBQWI7QUFBQTtBQUFBLDZDQUZKO0FBQUE7QUFFc0M7QUFBQTtBQUFBLGtEQUFNLFdBQVUsYUFBaEI7QUFBQTtBQUFBO0FBRnRDLHlDQVJKO0FBYUk7QUFBQTtBQUFBLDhDQUFHLFdBQVUsZUFBYjtBQUFBO0FBQUEseUNBYko7QUFjSTtBQUFBO0FBQUEsOENBQUcsTUFBSyxtQ0FBUixFQUE0QyxTQUFTLGlCQUFDQyxDQUFELEVBQU87QUFDeERBLHNEQUFFQyxjQUFGO0FBQ0EsMkRBQUtDLGNBQUwsQ0FBb0IsbUNBQXBCLEVBQXlELHlCQUF6RDtBQUNILGlEQUhELEVBR0csV0FBVSxjQUhiO0FBQUE7QUFBQTtBQWRKLHFDQURKO0FBb0JJO0FBQUE7QUFBQSwwQ0FBSyxXQUFVLG9DQUFmLEVBQW9ELE9BQU8sRUFBRUMsVUFBVSxVQUFaLEVBQTNEO0FBSUk7QUFBQTtBQUFBLDhDQUFLLFdBQVUsZ0VBQWYsRUFBZ0YsU0FBUyxLQUFLTixXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixFQUEyQixLQUEzQixDQUF6RjtBQUNJLG1GQUFLLFdBQVUsYUFBZixFQUE2QixLQUFLQyxTQUFlQSxHQUFHLGtCQUFwRCxHQURKO0FBRUk7QUFBQTtBQUFBLGtEQUFHLFdBQVUsVUFBYjtBQUFBO0FBQUEsNkNBRko7QUFBQTtBQUVzQztBQUFBO0FBQUEsa0RBQU0sV0FBVSxhQUFoQjtBQUFBO0FBQUE7QUFGdEMseUNBSko7QUFRSTtBQUFBO0FBQUEsOENBQUcsV0FBVSxlQUFiO0FBQUE7QUFBQSx5Q0FSSjtBQVNJO0FBQUE7QUFBQSw4Q0FBRyxNQUFLLG1DQUFSLEVBQTRDLFNBQVMsaUJBQUNDLENBQUQsRUFBTztBQUN4REEsc0RBQUVDLGNBQUY7QUFDQSwyREFBS0MsY0FBTCxDQUFvQixtQ0FBcEIsRUFBeUQseUJBQXpEO0FBQ0gsaURBSEQsRUFHRyxXQUFVLGNBSGI7QUFBQTtBQUFBLHlDQVRKO0FBZUk7QUFBQTtBQUFBLDhDQUFLLFdBQVUsYUFBZixFQUE2QixPQUFPLEVBQUVFLEtBQUssT0FBUCxFQUFnQkMsT0FBTyxPQUF2QixFQUFnQ0MsUUFBUSxPQUF4QyxFQUFpREMsTUFBTSxLQUF2RCxFQUE4REMsV0FBVyxrQkFBekUsRUFBcEM7QUFDSTtBQUFBO0FBQUEsa0RBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUE7QUFESjtBQWZKLHFDQXBCSjtBQXVDSTtBQUFBO0FBQUEsMENBQUssV0FBVSx1QkFBZjtBQU9JO0FBQUE7QUFBQSw4Q0FBSyxXQUFVLGdFQUFmLEVBQWdGLFNBQVMsS0FBS1gsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsRUFBMkIsS0FBM0IsQ0FBekY7QUFDSSxtRkFBSyxXQUFVLGFBQWYsRUFBNkIsS0FBS0MsU0FBZUEsR0FBRyxrQkFBcEQsR0FESjtBQUVJO0FBQUE7QUFBQSxrREFBRyxXQUFVLFVBQWI7QUFBQTtBQUFBLDZDQUZKO0FBQUE7QUFFc0M7QUFBQTtBQUFBLGtEQUFNLFdBQVUsYUFBaEI7QUFBQTtBQUFBO0FBRnRDLHlDQVBKO0FBV0k7QUFBQTtBQUFBLDhDQUFHLFdBQVUsZUFBYjtBQUFBO0FBQUEseUNBWEo7QUFZSTtBQUFBO0FBQUEsOENBQUcsTUFBSyxtQ0FBUjtBQUNJLHlEQUFTLGlCQUFDQyxDQUFELEVBQU87QUFDWkEsc0RBQUVDLGNBQUY7QUFDQSwyREFBS0MsY0FBTCxDQUFvQixtQ0FBcEIsRUFBeUQseUJBQXpEO0FBQ0gsaURBSkw7QUFLSSwyREFBVSxjQUxkO0FBQUE7QUFBQTtBQVpKO0FBdkNKLGlDQXJCSjtBQWdGSTtBQUFBO0FBQUEsc0NBQUssV0FBVSxzQkFBZjtBQUNJO0FBQUE7QUFBQSwwQ0FBSSxXQUFVLHNCQUFkLEVBQXFDLFNBQVMsS0FBS08sU0FBTCxDQUFlWCxJQUFmLENBQW9CLElBQXBCLENBQTlDO0FBQTBFLDZDQUFLL0QsS0FBTCxDQUFXRztBQUFyRixxQ0FESjtBQUVJO0FBQUE7QUFBQSwwQ0FBSyxXQUFVLHNCQUFmO0FBQ0k7QUFBQTtBQUFBLDhDQUFLLFdBQVUsZ0NBQWY7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseUNBREo7QUFJSTtBQUFBO0FBQUEsOENBQUssV0FBVSxrQkFBZjtBQUNJO0FBQUE7QUFBQSxrREFBSyxXQUFVLGVBQWY7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosNkNBREo7QUFNSTtBQUFBO0FBQUEsa0RBQUssV0FBVSwrQkFBZjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESiw2Q0FOSjtBQVdJO0FBQUE7QUFBQSxrREFBSyxXQUFVLGVBQWY7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFYSjtBQUpKLHFDQUZKO0FBd0JJO0FBQUE7QUFBQSwwQ0FBSyxXQUFVLHNCQUFmO0FBQ0k7QUFBQTtBQUFBLDhDQUFLLFdBQVUsZ0NBQWY7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseUNBREo7QUFJSTtBQUFBO0FBQUEsOENBQUssV0FBVSw4QkFBZjtBQUNJO0FBQUE7QUFBQSxrREFBSyxXQUFVLGVBQWY7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosNkNBREo7QUFNSTtBQUFBO0FBQUEsa0RBQUssV0FBVSwrQkFBZjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESiw2Q0FOSjtBQVdJO0FBQUE7QUFBQSxrREFBSyxXQUFVLGVBQWY7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFYSjtBQUpKLHFDQXhCSjtBQThDSTtBQUFBO0FBQUEsMENBQUssV0FBVSxzQkFBZjtBQUNJO0FBQUE7QUFBQSw4Q0FBSyxXQUFVLGtCQUFmLEVBQWtDLFNBQVMsS0FBS3dFLE1BQUwsQ0FBWVosSUFBWixDQUFpQixJQUFqQixFQUF1QixDQUF2QixDQUEzQztBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBREo7QUFHUSxpREFBSy9ELEtBQUwsQ0FBV0MsUUFBWCxDQUFvQixDQUFwQixJQUF5Qix1Q0FBSyxXQUFVLFlBQWYsRUFBNEIsS0FBSytELFNBQWVBLEdBQUcsd0NBQW5ELEdBQXpCLEdBQTJILHVDQUFLLFdBQVUsWUFBZixFQUE0QixLQUFLQSxTQUFlQSxHQUFHLHdDQUFuRDtBQUhuSSx5Q0FESjtBQU9JO0FBQUE7QUFBQSw4Q0FBSyxXQUFVLG1DQUFmO0FBQ0k7QUFBQTtBQUFBLGtEQUFLLFdBQVUsZUFBZjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESiw2Q0FESjtBQU1JO0FBQUE7QUFBQSxrREFBSyxXQUFVLCtCQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLDZDQU5KO0FBV0k7QUFBQTtBQUFBLGtEQUFLLFdBQVUsZUFBZjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQVhKLHlDQVBKO0FBeUJRLDZDQUFLaEUsS0FBTCxDQUFXQyxRQUFYLENBQW9CLENBQXBCLElBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFMLDZDQURKO0FBRUk7QUFBQTtBQUFBLGtEQUFLLFdBQVUsMkRBQWY7QUFDSTtBQUFBO0FBQUEsc0RBQUssV0FBVSxlQUFmO0FBSUk7QUFBQTtBQUFBLDBEQUFJLFdBQVUsa0JBQWQ7QUFHSTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUoseURBSEo7QUFJSTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUoseURBSko7QUFLSTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUoseURBTEo7QUFNSTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUoseURBTko7QUFRSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseURBUko7QUFhSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseURBYko7QUFrQkk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlEQWxCSjtBQXVCSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseURBdkJKO0FBNEJJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5REE1Qko7QUFpQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlEQWpDSjtBQXNDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseURBdENKO0FBMkNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5REEzQ0o7QUFnREk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlEQWhESjtBQXFESTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseURBckRKO0FBMERJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5REExREo7QUErREk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlEQS9ESjtBQW9FSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseURBcEVKO0FBeUVJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5REF6RUo7QUE4RUk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlEQTlFSjtBQW1GSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseURBbkZKO0FBd0ZJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5REF4Rko7QUE2Rkk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlEQTdGSjtBQWtHSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseURBbEdKO0FBdUdJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5REF2R0o7QUE0R0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlEQTVHSjtBQWlISTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseURBakhKO0FBc0hJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5REF0SEo7QUEySEk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBM0hKO0FBSkosaURBREo7QUF1SUk7QUFBQTtBQUFBLHNEQUFLLFdBQVUsK0JBQWY7QUFJSTtBQUFBO0FBQUEsMERBQUksV0FBVSxrQkFBZDtBQUdJO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSix5REFISjtBQUlJO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSix5REFKSjtBQUtJO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSix5REFMSjtBQU1JO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSix5REFOSjtBQVFJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5REFSSjtBQWFJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5REFiSjtBQWtCSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseURBbEJKO0FBdUJJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5REF2Qko7QUE0Qkk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlEQTVCSjtBQWlDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseURBakNKO0FBc0NJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5REF0Q0o7QUEyQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlEQTNDSjtBQWdESTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseURBaERKO0FBcURJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5REFyREo7QUEwREk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlEQTFESjtBQStESTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseURBL0RKO0FBb0VJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5REFwRUo7QUF5RUk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlEQXpFSjtBQThFSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseURBOUVKO0FBbUZJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5REFuRko7QUF3Rkk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlEQXhGSjtBQTZGSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseURBN0ZKO0FBa0dJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5REFsR0o7QUF1R0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlEQXZHSjtBQTRHSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseURBNUdKO0FBaUhJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5REFqSEo7QUFzSEk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlEQXRISjtBQTJISTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUEzSEo7QUFKSixpREF2SUo7QUE2UUk7QUFBQTtBQUFBLHNEQUFLLFdBQVUsZUFBZjtBQUlJO0FBQUE7QUFBQSwwREFBSSxXQUFVLGtCQUFkO0FBR0k7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKLHlEQUhKO0FBSUk7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKLHlEQUpKO0FBS0k7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKLHlEQUxKO0FBTUk7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKLHlEQU5KO0FBUUk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlEQVJKO0FBYUk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlEQWJKO0FBa0JJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5REFsQko7QUF1Qkk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlEQXZCSjtBQTRCSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseURBNUJKO0FBaUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5REFqQ0o7QUFzQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlEQXRDSjtBQTJDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseURBM0NKO0FBZ0RJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5REFoREo7QUFxREk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlEQXJESjtBQTBESTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseURBMURKO0FBK0RJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5REEvREo7QUFvRUk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlEQXBFSjtBQXlFSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseURBekVKO0FBOEVJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5REE5RUo7QUFtRkk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlEQW5GSjtBQXdGSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseURBeEZKO0FBNkZJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5REE3Rko7QUFrR0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlEQWxHSjtBQXVHSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseURBdkdKO0FBNEdJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5REE1R0o7QUFpSEk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlEQWpISjtBQXNISTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseURBdEhKO0FBMkhJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQTNISjtBQUpKO0FBN1FKO0FBRkoseUNBREosR0F1WmE7QUFoYnJCLHFDQTlDSjtBQWllSTtBQUFBO0FBQUEsMENBQUssV0FBVSxzQkFBZjtBQUNJO0FBQUE7QUFBQSw4Q0FBSyxXQUFVLGtCQUFmLEVBQWtDLFNBQVMsS0FBSzBFLE1BQUwsQ0FBWVosSUFBWixDQUFpQixJQUFqQixFQUF1QixDQUF2QixDQUEzQztBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBREo7QUFFSSxtRkFBSyxXQUFVLFlBQWYsRUFBNEIsS0FBS0MsU0FBZUEsR0FBRyx3Q0FBbkQ7QUFGSix5Q0FESjtBQUtJO0FBQUE7QUFBQSw4Q0FBSyxXQUFVLG1DQUFmO0FBQ0k7QUFBQTtBQUFBLGtEQUFLLFdBQVUsZUFBZjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESiw2Q0FESjtBQU1JO0FBQUE7QUFBQSxrREFBSyxXQUFVLCtCQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLDZDQU5KO0FBV0k7QUFBQTtBQUFBLGtEQUFLLFdBQVUsZUFBZjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQVhKLHlDQUxKO0FBdUJRLDZDQUFLaEUsS0FBTCxDQUFXQyxRQUFYLENBQW9CLENBQXBCLElBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLGtEQUFLLFdBQVUsMkRBQWY7QUFDSTtBQUFBO0FBQUEsc0RBQUssV0FBVSxlQUFmO0FBQ0k7QUFBQTtBQUFBLDBEQUFJLFdBQVUsdUJBQWQ7QUFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseURBREo7QUFNSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseURBTko7QUFXSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseURBWEo7QUFnQkk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlEQWhCSjtBQXFCSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseURBckJKO0FBMEJJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5REExQko7QUErQkk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlEQS9CSjtBQW9DSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseURBcENKO0FBeUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5REF6Q0o7QUE4Q0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlEQTlDSjtBQW1ESTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFuREo7QUFESixpREFESjtBQTRESTtBQUFBO0FBQUEsc0RBQUssV0FBVSwrQkFBZjtBQUNJO0FBQUE7QUFBQSwwREFBSSxXQUFVLHVCQUFkO0FBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlEQURKO0FBTUk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlEQU5KO0FBV0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlEQVhKO0FBZ0JJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5REFoQko7QUFxQkk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlEQXJCSjtBQTBCSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseURBMUJKO0FBK0JJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5REEvQko7QUFvQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlEQXBDSjtBQXlDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseURBekNKO0FBOENJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5REE5Q0o7QUFtREk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBbkRKO0FBREosaURBNURKO0FBdUhJO0FBQUE7QUFBQSxzREFBSyxXQUFVLGVBQWY7QUFDSTtBQUFBO0FBQUEsMERBQUksV0FBVSx1QkFBZDtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5REFESjtBQU1JO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5REFOSjtBQVdJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5REFYSjtBQWdCSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseURBaEJKO0FBcUJJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5REFyQko7QUEwQkk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlEQTFCSjtBQStCSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseURBL0JKO0FBb0NJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5REFwQ0o7QUF5Q0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlEQXpDSjtBQThDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseURBOUNKO0FBbURJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQW5ESjtBQURKO0FBdkhKO0FBREoseUNBREosR0FxTGE7QUE1TXJCLHFDQWplSjtBQWdyQkk7QUFBQTtBQUFBLDBDQUFLLFdBQVUsc0JBQWY7QUFDSTtBQUFBO0FBQUEsOENBQUssV0FBVSxrQkFBZixFQUFrQyxTQUFTLEtBQUswRSxNQUFMLENBQVlaLElBQVosQ0FBaUIsSUFBakIsRUFBdUIsQ0FBdkIsQ0FBM0M7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQURKO0FBRUksbUZBQUssV0FBVSxZQUFmLEVBQTRCLEtBQUtDLFNBQWVBLEdBQUcsd0NBQW5EO0FBRkoseUNBREo7QUFLSTtBQUFBO0FBQUEsOENBQUssV0FBVSxtQ0FBZjtBQUNJO0FBQUE7QUFBQSxrREFBSyxXQUFVLGVBQWY7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosNkNBREo7QUFNSTtBQUFBO0FBQUEsa0RBQUssV0FBVSwrQkFBZjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESiw2Q0FOSjtBQVdJO0FBQUE7QUFBQSxrREFBSyxXQUFVLGVBQWY7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFYSix5Q0FMSjtBQXVCUSw2Q0FBS2hFLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQixDQUFwQixJQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxrREFBSyxXQUFVLDJEQUFmO0FBQ0k7QUFBQTtBQUFBLHNEQUFLLFdBQVUsZUFBZjtBQUNJO0FBQUE7QUFBQSwwREFBSSxXQUFVLHVCQUFkO0FBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlEQURKO0FBTUk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlEQU5KO0FBV0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlEQVhKO0FBZ0JJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5REFoQko7QUFxQkk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBckJKO0FBREosaURBREo7QUE4Qkk7QUFBQTtBQUFBLHNEQUFLLFdBQVUsK0JBQWY7QUFDSTtBQUFBO0FBQUEsMERBQUksV0FBVSx1QkFBZDtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5REFESjtBQU1JO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5REFOSjtBQVdJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5REFYSjtBQWdCSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseURBaEJKO0FBcUJJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQXJCSjtBQURKLGlEQTlCSjtBQTJESTtBQUFBO0FBQUEsc0RBQUssV0FBVSxlQUFmO0FBQ0k7QUFBQTtBQUFBLDBEQUFJLFdBQVUsdUJBQWQ7QUFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseURBREo7QUFNSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseURBTko7QUFXSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseURBWEo7QUFnQkk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlEQWhCSjtBQXFCSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFyQko7QUFESjtBQTNESjtBQURKLHlDQURKLEdBMkZhO0FBbEhyQixxQ0FockJKO0FBcXlCSTtBQUFBO0FBQUEsMENBQUssV0FBVSxzQkFBZjtBQUNJO0FBQUE7QUFBQSw4Q0FBSyxXQUFVLGtCQUFmLEVBQWtDLFNBQVMsS0FBSzBFLE1BQUwsQ0FBWVosSUFBWixDQUFpQixJQUFqQixFQUF1QixFQUF2QixDQUEzQztBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBREo7QUFFSSxtRkFBSyxXQUFVLFlBQWYsRUFBNEIsS0FBS0MsU0FBZUEsR0FBRyx3Q0FBbkQ7QUFGSix5Q0FESjtBQUtJO0FBQUE7QUFBQSw4Q0FBSyxXQUFVLG1DQUFmO0FBQ0k7QUFBQTtBQUFBLGtEQUFLLFdBQVUsZUFBZjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESiw2Q0FESjtBQU1JO0FBQUE7QUFBQSxrREFBSyxXQUFVLCtCQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLDZDQU5KO0FBV0k7QUFBQTtBQUFBLGtEQUFLLFdBQVUsZUFBZjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQVhKLHlDQUxKO0FBdUJRLDZDQUFLaEUsS0FBTCxDQUFXQyxRQUFYLENBQW9CLEVBQXBCLElBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQUFOO0FBQ0k7QUFBQTtBQUFBLGtEQUFLLFdBQVUsMkRBQWY7QUFFSTtBQUFBO0FBQUEsc0RBQUssV0FBVSxlQUFmO0FBSUk7QUFBQTtBQUFBLDBEQUFJLFdBQVUsa0JBQWQ7QUFDSTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUoseURBREo7QUFFSTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUoseURBRko7QUFHSTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUoseURBSEo7QUFJSTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUoseURBSko7QUFLSTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUoseURBTEo7QUFNSTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUoseURBTko7QUFPSTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUoseURBUEo7QUFRSTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFSSjtBQUpKLGlEQUZKO0FBaUJJO0FBQUE7QUFBQSxzREFBSyxXQUFVLCtCQUFmO0FBSUk7QUFBQTtBQUFBLDBEQUFJLFdBQVUsa0JBQWQ7QUFDSTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUoseURBREo7QUFFSTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUoseURBRko7QUFHSTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUoseURBSEo7QUFJSTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUoseURBSko7QUFLSTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUoseURBTEo7QUFNSTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUoseURBTko7QUFPSTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUoseURBUEo7QUFRSTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFSSjtBQUpKLGlEQWpCSjtBQWdDSTtBQUFBO0FBQUEsc0RBQUssV0FBVSxlQUFmO0FBSUk7QUFBQTtBQUFBLDBEQUFJLFdBQVUsa0JBQWQ7QUFDSTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUoseURBREo7QUFFSTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUoseURBRko7QUFHSTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUoseURBSEo7QUFJSTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUoseURBSko7QUFLSTtBQUFBO0FBQUE7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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyQztBQUNGO0FBQ1Y7QUFDRjtBQUNNO0FBQ0Y7QUFDSjtBQUNGO0FBQ0k7QUFDRjtBQUNjO0FBQ0Y7QUFDVjtBQUNGO0FBQ2M7QUFDRjtBQUNKO0FBQ0Y7QUFDSSIsImZpbGUiOiIxMTYuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMZWZ0QmFyIGZyb20gJy4uLy4uL2NvbW1vbnMvTGVmdEJhcidcbmltcG9ydCBSaWdodEJhciBmcm9tICcuLi8uLi9jb21tb25zL1JpZ2h0QmFyJ1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvSG9tZS9mb290ZXInXG5pbXBvcnQgQmFubmVyQ2Fyb3VzZWwgZnJvbSAnLi4vLi4vY29tbW9ucy9Ib21lL2Jhbm5lckNhcm91c2VsJztcbmltcG9ydCBIZWxtZXRUYWdzIGZyb20gJy4uLy4uL2NvbW1vbnMvSGVsbWV0VGFncyc7XG5pbXBvcnQgTm9uSXBkUG9wdXBWaWV3IGZyb20gJy4uLy4uL2NvbW1vbnMvbm9uSXBkUG9wdXAuanMnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuXG5jbGFzcyBUaHlyb2NhcmVQYWNrYWdlVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY29sbGFwc2U6IFtmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV0sXG4gICAgICAgICAgICBleHBhbmRDbGljazogdHJ1ZSxcbiAgICAgICAgICAgIGV4cGFuZFRleHQ6ICdFeHBhbmQgQWxsJyxcbiAgICAgICAgICAgIHNob3dOb25JcGRQb3B1cDogcGFyc2VkLnNob3dfcG9wdXAsXG4gICAgICAgICAgICB0b19iZV9mb3JjZToxLFxuICAgICAgICAgICAgaXNfbGVhZF9lbmFibGVkOnRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzZWxlY3RlZExvY2F0aW9uID0gJydcbiAgICAgICAgbGV0IGxhdCA9IDI4LjY0NDgwMFxuICAgICAgICBsZXQgbG9uZyA9IDc3LjIxNjcyMVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKSB7XG4gICAgICAgICAgICBzZWxlY3RlZExvY2F0aW9uID0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uO1xuICAgICAgICAgICAgbGF0ID0gc2VsZWN0ZWRMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sYXRcbiAgICAgICAgICAgIGxvbmcgPSBzZWxlY3RlZExvY2F0aW9uLmdlb21ldHJ5LmxvY2F0aW9uLmxuZ1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBsYXQgPT09ICdmdW5jdGlvbicpIGxhdCA9IGxhdCgpXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxvbmcgPT09ICdmdW5jdGlvbicpIGxvbmcgPSBsb25nKClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0T2ZmZXJMaXN0KGxhdCwgbG9uZyk7XG4gICAgfVxuXG4gICAgdG9nZ2xlKGluZGV4KSB7XG4gICAgICAgIGxldCBjb2xsYXBzZSA9IFsuLi50aGlzLnN0YXRlLmNvbGxhcHNlXVxuICAgICAgICBjb2xsYXBzZVtpbmRleF0gPSAhY29sbGFwc2VbaW5kZXhdXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb2xsYXBzZSB9KVxuICAgIH1cblxuICAgIGV4cGFuZEFsbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZXhwYW5kQ2xpY2spIHtcbiAgICAgICAgICAgIGxldCBjb2xsYXBzZSA9IHRoaXMuc3RhdGUuY29sbGFwc2UubWFwKCh4KSA9PiB0cnVlKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbGxhcHNlIH0pXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXhwYW5kQ2xpY2s6ICF0aGlzLnN0YXRlLmV4cGFuZENsaWNrLCBleHBhbmRUZXh0OiAnQ29sbGFwc2UgQWxsJyB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjb2xsYXBzZSA9IHRoaXMuc3RhdGUuY29sbGFwc2UubWFwKCh4KSA9PiBmYWxzZSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb2xsYXBzZSB9KVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGV4cGFuZENsaWNrOiAhdGhpcy5zdGF0ZS5leHBhbmRDbGljaywgZXhwYW5kVGV4dDogJ0V4cGFuZCBBbGwnIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYm9va05vd0NsaWNrZWQodXJsLCB0cmFja2luZ05hbWUpIHsgLy8gYm9vayBub3dcblxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiB0cmFja2luZ05hbWUsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogdHJhY2tpbmdOYW1lXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZpZXdBbGxDbGljaygpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy90YXgtc2F2ZXItaGVhbHRoLXBhY2thZ2VzP3BhY2thZ2VfY2F0ZWdvcnlfaWRzPTU5JylcbiAgICB9XG5cbiAgICBnb2xkQ2xpY2tlZChwa2dfaWQpIHsgLy8gZ29sZCBjbGlja1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnVmlwR29sZFRoeXJvY2FyZUNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICd2aXAtZ29sZC10aHlyb2NhcmUtY2xpY2tlZCcsICdwa2dJZCc6IHBrZ19pZFxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdmlwLWdvbGQtZGV0YWlscz9pc19nb2xkPXRydWUmc291cmNlPXRoeXJvY2FyZVBrZ0xpc3RpbmcmbGVhZF9zb3VyY2U9RG9jcHJpbWUnKVxuICAgIH1cblxuICAgIG5vbklwZExlYWRzKHBob25lX251bWJlcil7IC8vIGxlYWRzIGZvciBtYXRyaXggZm9yIHRoZSBwYWNrYWdlcyBzZWFyY2hlZCBieSB1c2VyXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBsZXQgZGF0YSA9KHtwaG9uZV9udW1iZXI6cGhvbmVfbnVtYmVyLGxlYWRfc291cmNlOidMYWJhZHMnLHNvdXJjZTpwYXJzZWQsbGVhZF90eXBlOidMQUJBRFMnLHRlc3RfbmFtZTondGh5cm9jYXJlIGFhcm9neWFtIHBhY2thZ2VzJyxleGl0cG9pbnRfdXJsIDogJ2h0dHA6Ly9kb2NwcmltZS5jb20nICsgdGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZX0pXG5cbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MgJiYgdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MubGVuZ3RoKXtcbiAgICAgICAgICAgIGRhdGEudXRtX3RhZ3MgPSB0aGlzLnByb3BzLmNvbW1vbl91dG1fdGFncy5maWx0ZXIoeD0+eC50eXBlID09IFwiY29tbW9uX3h0cmFfdGFnc1wiKVswXS51dG1fdGFnc1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHZpc2l0b3JfaW5mbyA9IEdUTS5nZXRWaXNpdG9ySW5mbygpXG4gICAgICAgIGlmKHZpc2l0b3JfaW5mbyAmJiB2aXNpdG9yX2luZm8udmlzaXRfaWQpe1xuICAgICAgICAgICAgZGF0YS52aXNpdF9pZCA9IHZpc2l0b3JfaW5mby52aXNpdF9pZFxuICAgICAgICAgICAgZGF0YS52aXNpdG9yX2lkID0gdmlzaXRvcl9pbmZvLnZpc2l0b3JfaWRcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IGd0bV9kYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdOb25JcGRUaHlyb2NhcmVTdWJtaXRDbGljaycsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnZXZlbnQnOiAnbm9uLWlwZC10aHlyb2NhcmUtc3VibWl0LWNsaWNrJ1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1fZGF0YSB9KVxuICAgICAgICB0aGlzLnByb3BzLnNhdmVMZWFkUGhuTnVtYmVyKHBob25lX251bWJlcilcbiAgICAgICBpZih0aGlzLnN0YXRlLmlzX2xlYWRfZW5hYmxlZCl7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc19sZWFkX2VuYWJsZWQ6ZmFsc2V9KVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5Ob25JcGRCb29raW5nTGVhZChkYXRhKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNfbGVhZF9lbmFibGVkOnRydWV9KVxuICAgICAgICAgICAgfSwgNTAwMClcbiAgICAgICAgfSBcbiAgICAgICB0aGlzLnNldFN0YXRlKHt0b19iZV9mb3JjZTowfSlcbiAgICB9XG5cbiAgICBjbG9zZUlwZExlYWRQb3B1cChmcm9tKXtcbiAgICAgICAgaWYoZnJvbSl7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdOb25JcGRUaHlyb2NhcmVDcm9zc0NsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdldmVudCc6ICdub24taXBkLXRoeXJvY2FyZS1jcm9zcy1jbGljaydcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dG9fYmVfZm9yY2U6MH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG4gICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGFpbmVyLXRvcC1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVsbWV0VGFncyB0YWdzRGF0YT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQ29tcGFyZSB0b3AgQWFyb2d5YW0gcGFja2FnZXMgZnJvbSBUaHlyb2NhcmUgfCBCb29rIE9ubGluZSAmIFNhdmUgdXB0byA1MCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ29tcGFyZSBhbmQgYm9vayBBYXJvZ3lhbSBmdWxsIGJvZHkgaGVhbHRoIGNoZWNrdXAgcGFja2FnZXMgZnJvbSBUaHlyb2NhcmUgYXQgZG9jcHJpbWUuY29tLiBBdmFpbCBleGNsdXNpdmUgZGlzY291bnRzICYgc2F2ZSB1cHRvIDUwJS4gR2V0IGZyZWUgaG9tZSBzYW1wbGUgY29sbGVjdGlvbiBhbmQgb25saW5lIHJlcG9ydHMgb24gdGltZS4nXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTcgY29sLWxnLTcgY2VudGVyLWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vZmZlckxpc3QgJiYgdGhpcy5wcm9wcy5vZmZlckxpc3QuZmlsdGVyKHggPT4geC5zbGlkZXJfbG9jYXRpb24gPT09ICd0aHlyb2NhcmVfYWFyb2d5YW1fcGFja2FnZXNfcGFnZScpLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYW5uZXJDYXJvdXNlbCB7Li4udGhpcy5wcm9wc30gc2xpZGVyTG9jYXRpb249XCJ0aHlyb2NhcmVfYWFyb2d5YW1fcGFja2FnZXNfcGFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtcnQtMTBcIiBzdHlsZT17eyBwYWRkaW5nOiAnMCAxNXB4JyB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmdy01MDBcIiBzdHlsZT17eyBmb250U2l6ZTogMTYsIGZsZXg6IDEsIG1hcmdpblJpZ2h0OiA0IH19PlRvcCBmdWxsIGJvZHkgY2hlY2t1cCBwYWNrYWdlczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy52aWV3QWxsQ2xpY2soKX0gY2xhc3NOYW1lPVwidnctYWxsLXN0YXRpYyB0ZXh0LXByaW1hcnkgZnctNTAwXCI+VmlldyBhbGw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcnQtMTAgY3QtcHJvZmlsZSBza2luLXdoaXRlIGJvcmRlci1ib3R0b20tcmFkaW91cyBnb2xkLXJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGljLXBrLWNvbnRhaW5lciBzdGlja3ktcGstY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRpYy1wa2ctdG9wLWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLXBrZy1zdWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RjLXN1Yi1wYXJhXCI+QWFyb2d5YW0gQjxiciAvPihJbmNsdWRlcyA1NiB0ZXN0cyk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN0Yy1wcmljZS1jdXRcIj7igrkgNzUwey8qNjM0IDxzcGFuPuKCuSA3NTA8L3NwYW4+Ki99PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRpYy1wa2ctdG9wLWNvbHVtbiBzdGMtbWlkLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1wa2ctc3ViXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN0Yy1zdWItcGFyYVwiPkFhcm9neWFtIEMgPGJyIC8+KEluY2x1ZGVzIDU5IHRlc3RzKTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RjLXByaWNlLWN1dFwiPuKCuSAxNTAwey8qOTUwIDxzcGFuPuKCuSAxMTAwPC9zcGFuPiovfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0aWMtcGtnLXRvcC1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1wa2ctc3ViXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN0Yy1zdWItcGFyYVwiPkFhcm9neWFtIDEuMyA8YnIgLz4oSW5jbHVkZXMgOTAgdGVzdHMpPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdGMtcHJpY2UtY3V0XCI+4oK5IDIwMDB7LyoxNDQwIDxzcGFuPuKCuSAxNjAwPC9zcGFuPiovfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0aWMtcGstY29udGFpbmVyIHN0aWNreS1way1jb250YWluZXItMlwiIHN0eWxlPXt7IHBhZGRpbmdUb3A6IDAsIHBhZGRpbmdCb3R0b206IDMwIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGljLXBrZy10b3AtY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJzdGMtb2Zmci1jcG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RjLW9mZi1wYXJhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmNsdWRlcyDigrkgMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPRkYgQ291cG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgZ29sZENhcmQgbXQtMFwiIG9uQ2xpY2s9e3RoaXMuZ29sZENsaWNrZWQuYmluZCh0aGlzLDEyMjI3KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ2xkLWNkLWljb25cIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2dvbGQtc20ucG5nJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ2xkLXAtcmNcIj5QcmljZTwvcD4gPHNwYW4gY2xhc3NOYW1lPVwiZ2xkLXJhdGUtbGZcIj7igrkgNTQwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RjLWZyZWUtcGlja1wiPkZyZWUgSG9tZSBQaWNrdXA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9sYWIvc2VhcmNocmVzdWx0cz90ZXN0X2lkcz0xMjIyN1wiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvb2tOb3dDbGlja2VkKCcvbGFiL3NlYXJjaHJlc3VsdHM/dGVzdF9pZHM9MTIyMjcnLCAnVG9wYm9va05vd0NsaWNrZWRCbG9jazEnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cInN0Yy1ib29rLWJ0blwiPkJvb2sgTm93PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRpYy1wa2ctdG9wLWNvbHVtbiBzdGMtbWlkLW1yZ25cIiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJzdGMtb2Zmci1jcG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RjLW9mZi1wYXJhXCI+SW5jbHVkZXMg4oK5IDE1MCBPRkYgQ291cG9uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGdvbGRDYXJkIG10LTBcIiBvbkNsaWNrPXt0aGlzLmdvbGRDbGlja2VkLmJpbmQodGhpcywxMjIxMyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdsZC1jZC1pY29uXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9nb2xkLXNtLnBuZyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImdsZC1wLXJjXCI+UHJpY2U8L3A+IDxzcGFuIGNsYXNzTmFtZT1cImdsZC1yYXRlLWxmXCI+4oK5IDg0MDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdGMtZnJlZS1waWNrXCI+RnJlZSBIb21lIFBpY2t1cDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2xhYi9zZWFyY2hyZXN1bHRzP3Rlc3RfaWRzPTEyMjEzXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9va05vd0NsaWNrZWQoJy9sYWIvc2VhcmNocmVzdWx0cz90ZXN0X2lkcz0xMjIxMycsICdUb3Bib29rTm93Q2xpY2tlZEJsb2NrMicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPVwic3RjLWJvb2stYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvb2sgTm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdWxhci10eHRcIiBzdHlsZT17eyB0b3A6ICd1bnNldCcsIHJpZ2h0OiAndW5zZXQnLCBib3R0b206ICctMjZweCcsIGxlZnQ6ICc1MCUnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJyB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMFwiPlBvcHVsYXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGljLXBrZy10b3AtY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJzdGMtb2Zmci1jcG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RjLW9mZi1wYXJhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmNsdWRlcyDigrkgMTYwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPRkYgQ291cG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGdvbGRDYXJkIG10LTBcIiBvbkNsaWNrPXt0aGlzLmdvbGRDbGlja2VkLmJpbmQodGhpcywxNDk0Nyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdsZC1jZC1pY29uXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9nb2xkLXNtLnBuZyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImdsZC1wLXJjXCI+UHJpY2U8L3A+IDxzcGFuIGNsYXNzTmFtZT1cImdsZC1yYXRlLWxmXCI+4oK5IDE0Mzc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RjLWZyZWUtcGlja1wiPkZyZWUgSG9tZSBQaWNrdXA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9sYWIvc2VhcmNocmVzdWx0cz90ZXN0X2lkcz0xNDk0N1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9va05vd0NsaWNrZWQoJy9sYWIvc2VhcmNocmVzdWx0cz90ZXN0X2lkcz0xNDk0NycsICdUb3Bib29rTm93Q2xpY2tlZEJsb2NrMycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN0Yy1ib29rLWJ0blwiPkJvb2sgTm93PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3Jkbi1jb250YW5pbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwic3RjLWV4cG5kLWJ0biBtcnQtMTBcIiBvbkNsaWNrPXt0aGlzLmV4cGFuZEFsbC5iaW5kKHRoaXMpfT57dGhpcy5zdGF0ZS5leHBhbmRUZXh0fTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY2NvcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1oZWFkaW5nIHN0Yy1uby1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UHJlcGFyYXRpb248L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOC0xMCBocnMgb2YgZmFzdGluZyByZXF1aXJlZCBiZWZvcmUgc2FtcGxlIGNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDgtMTAgaHJzIG9mIGZhc3RpbmcgcmVxdWlyZWQgYmVmb3JlIHNhbXBsZSBjb2xsZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDgtMTAgaHJzIG9mIGZhc3RpbmcgcmVxdWlyZWQgYmVmb3JlIHNhbXBsZSBjb2xsZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY2NvcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1oZWFkaW5nIHN0Yy1uby1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGVzdHMgSW5jbHVkZWQgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDU2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1OVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA5MFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNjb3JkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtaGVhZGluZ1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgMCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DQkMgSGFlbW9ncmFtIFRlc3RzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhcHNlWzBdID8gPGltZyBjbGFzc05hbWU9XCJ0aXRsZWFycm93XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+IDogPGltZyBjbGFzc05hbWU9XCJ0aXRsZWFycm93XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgcGItMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyNFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyNFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGFwc2VbMF0gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzcGFuPkNvbXBsZXRlIEJsb29kIENvdW50IChDQkMpIGlzIGEgYmxvb2QgdGVzdCB0aGF0IG1lYXN1cmVzIFJlZCBibG9vZCBjZWxscyAoUkJDKSwgV2hpdGUgYmxvb2QgY2VsbHMgKFdCQyksIFBsYXRlbGV0cyAoUExUcyksIEhlbW9nbG9iaW4gKEhiKSwgYW5kIEhlbWF0b2NyaXQgKEhjdCkgaW4gdGhlIGJsb29kLiBUaGlzIHRlc3QgaXMgdXNlZCB0byBkZXRlcm1pbmUgdGhlIG92ZXJhbGwgaGVhbHRoIGFuZCBzY3JlZW4gZm9yIGFueSBkaXNlYXNlcyB0aGF0IGFmZmVjdCB0aGUgYmxvb2QgY2VsbHMuPC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBzdGMtaGlkZS1hY3JkLWNvbnRhaW5lciBwdC0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPHA+Q29tcGxldGUgQmxvb2QgQ291bnQgKENCQykgaXMgYSBibG9vZCB0ZXN0IHRoYXQgbWVhc3VyZXMgUmVkIGJsb29kIGNlbGxzIChSQkMpLCBXaGl0ZSBibG9vZCBjZWxscyAoV0JDKSwgUGxhdGVsZXRzIChQTFRzKSwgSGVtb2dsb2JpbiAoSGIpLCBhbmQgSGVtYXRvY3JpdCAoSGN0KSBpbiB0aGUgYmxvb2QuIFRoaXMgdGVzdCBpcyB1c2VkIHRvIGRldGVybWluZSB0aGUgb3ZlcmFsbCBoZWFsdGggYW5kIHNjcmVlbiBmb3IgYW55IGRpc2Vhc2VzIHRoYXQgYWZmZWN0IHRoZSBibG9vZCBjZWxscy5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3RcIj5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlRvdGFsIFJCQzwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5SZWQgQ2VsbCBEaXN0cmlidXRpb24gV2lkdGggKFJEVy1DVik8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+UmVkIENlbGwgRGlzdHJpYnV0aW9uIFdpZHRoIC0gU0QoUkRXLVNEKTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5QbGF0ZWxldCBUbyBMYXJnZSBDZWxsIFJhdGlvIChQTENSKTwvcD48L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsYXRlbGV0IENvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lYW4gQ29ycHVzY3VsYXIgSGVtb2dsb2JpbiAoTUNIKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZWFuIENvcnAuSGVtby5Db25jIChNQ0hDKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZWFuIENvcnB1c2N1bGFyIFZvbHVtZSAoTUNWKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb25vY3l0ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVhbiBQbGF0ZWxldCBWb2x1bWUgKE1QVilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV1dHJvcGhpbHMgKE5QKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdWNsZWF0ZWQgUmVkIEJsb29kIENlbGxzIChOUkJDKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGF0ZWxldGNyaXQgKFBDVClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVtYXRvY3JpdCAoUENWKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGF0ZWxldCBEaXN0cmlidXRpb24gV2lkdGggKFBEVylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVtb2dsb2JpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFb3Npbm9waGlscyAoRVApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEltbWF0dXJlIEdyYW51bG9jeXRlcyAoSUcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhc29waGlscyAtIEFic29sdXRlIENvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVvc2lub3BoaWxzIC0gQWJzb2x1dGUgQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTHltcGhvY3l0ZXMtIEFic29sdXRlIENvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vbm9jeXRlcy0gQWJzb2x1dGUgQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV1dHJvcGhpbHMtIEFic29sdXRlIENvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhc29waGlscyAoQlMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEx5bXBob2N5dGUgUGVyY2VudGFnZSAoTEMlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb3RhbCBMZXVjb2N5dGVzIENvdW50IChUTEMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51Y2xlYXRlZCBSZWQgQmxvb2QgQ2VsbHMgKE5SQkMlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbW1hdHVyZSBHcmFudWxvY3l0ZSBQZXJjZW50YWdlKElHJSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8cD5Db21wbGV0ZSBCbG9vZCBDb3VudCAoQ0JDKSBpcyBhIGJsb29kIHRlc3QgdGhhdCBtZWFzdXJlcyBSZWQgYmxvb2QgY2VsbHMgKFJCQyksIFdoaXRlIGJsb29kIGNlbGxzIChXQkMpLCBQbGF0ZWxldHMgKFBMVHMpLCBIZW1vZ2xvYmluIChIYiksIGFuZCBIZW1hdG9jcml0IChIY3QpIGluIHRoZSBibG9vZC4gVGhpcyB0ZXN0IGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSBvdmVyYWxsIGhlYWx0aCBhbmQgc2NyZWVuIGZvciBhbnkgZGlzZWFzZXMgdGhhdCBhZmZlY3QgdGhlIGJsb29kIGNlbGxzLlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RjLWRhdGEtdWwtbGlzdFwiPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VG90YWwgUkJDPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlJlZCBDZWxsIERpc3RyaWJ1dGlvbiBXaWR0aCAoUkRXLUNWKTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5SZWQgQ2VsbCBEaXN0cmlidXRpb24gV2lkdGggLSBTRChSRFctU0QpPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlBsYXRlbGV0IFRvIExhcmdlIENlbGwgUmF0aW8gKFBMQ1IpPC9wPjwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxhdGVsZXQgQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVhbiBDb3JwdXNjdWxhciBIZW1vZ2xvYmluIChNQ0gpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lYW4gQ29ycC5IZW1vLkNvbmMgKE1DSEMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lYW4gQ29ycHVzY3VsYXIgVm9sdW1lIChNQ1YpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vbm9jeXRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZWFuIFBsYXRlbGV0IFZvbHVtZSAoTVBWKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXV0cm9waGlscyAoTlApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51Y2xlYXRlZCBSZWQgQmxvb2QgQ2VsbHMgKE5SQkMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsYXRlbGV0Y3JpdCAoUENUKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZW1hdG9jcml0IChQQ1YpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsYXRlbGV0IERpc3RyaWJ1dGlvbiBXaWR0aCAoUERXKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZW1vZ2xvYmluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVvc2lub3BoaWxzIChFUClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW1tYXR1cmUgR3JhbnVsb2N5dGVzIChJRylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmFzb3BoaWxzIC0gQWJzb2x1dGUgQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW9zaW5vcGhpbHMgLSBBYnNvbHV0ZSBDb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMeW1waG9jeXRlcy0gQWJzb2x1dGUgQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9ub2N5dGVzLSBBYnNvbHV0ZSBDb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXV0cm9waGlscy0gQWJzb2x1dGUgQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmFzb3BoaWxzIChCUylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTHltcGhvY3l0ZSBQZXJjZW50YWdlIChMQyUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvdGFsIExldWNvY3l0ZXMgQ291bnQgKFRMQylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVjbGVhdGVkIFJlZCBCbG9vZCBDZWxscyAoTlJCQyUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEltbWF0dXJlIEdyYW51bG9jeXRlIFBlcmNlbnRhZ2UoSUclKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPHA+Q29tcGxldGUgQmxvb2QgQ291bnQgKENCQykgaXMgYSBibG9vZCB0ZXN0IHRoYXQgbWVhc3VyZXMgUmVkIGJsb29kIGNlbGxzIChSQkMpLCBXaGl0ZSBibG9vZCBjZWxscyAoV0JDKSwgUGxhdGVsZXRzIChQTFRzKSwgSGVtb2dsb2JpbiAoSGIpLCBhbmQgSGVtYXRvY3JpdCAoSGN0KSBpbiB0aGUgYmxvb2QuIFRoaXMgdGVzdCBpcyB1c2VkIHRvIGRldGVybWluZSB0aGUgb3ZlcmFsbCBoZWFsdGggYW5kIHNjcmVlbiBmb3IgYW55IGRpc2Vhc2VzIHRoYXQgYWZmZWN0IHRoZSBibG9vZCBjZWxscy5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3RcIj5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlRvdGFsIFJCQzwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5SZWQgQ2VsbCBEaXN0cmlidXRpb24gV2lkdGggKFJEVy1DVik8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+UmVkIENlbGwgRGlzdHJpYnV0aW9uIFdpZHRoIC0gU0QoUkRXLVNEKTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5QbGF0ZWxldCBUbyBMYXJnZSBDZWxsIFJhdGlvIChQTENSKTwvcD48L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsYXRlbGV0IENvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lYW4gQ29ycHVzY3VsYXIgSGVtb2dsb2JpbiAoTUNIKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZWFuIENvcnAuSGVtby5Db25jIChNQ0hDKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZWFuIENvcnB1c2N1bGFyIFZvbHVtZSAoTUNWKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb25vY3l0ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVhbiBQbGF0ZWxldCBWb2x1bWUgKE1QVilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV1dHJvcGhpbHMgKE5QKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdWNsZWF0ZWQgUmVkIEJsb29kIENlbGxzIChOUkJDKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGF0ZWxldGNyaXQgKFBDVClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVtYXRvY3JpdCAoUENWKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGF0ZWxldCBEaXN0cmlidXRpb24gV2lkdGggKFBEVylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVtb2dsb2JpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFb3Npbm9waGlscyAoRVApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEltbWF0dXJlIEdyYW51bG9jeXRlcyAoSUcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhc29waGlscyAtIEFic29sdXRlIENvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVvc2lub3BoaWxzIC0gQWJzb2x1dGUgQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTHltcGhvY3l0ZXMtIEFic29sdXRlIENvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vbm9jeXRlcy0gQWJzb2x1dGUgQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV1dHJvcGhpbHMtIEFic29sdXRlIENvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhc29waGlscyAoQlMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEx5bXBob2N5dGUgUGVyY2VudGFnZSAoTEMlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb3RhbCBMZXVjb2N5dGVzIENvdW50IChUTEMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51Y2xlYXRlZCBSZWQgQmxvb2QgQ2VsbHMgKE5SQkMlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbW1hdHVyZSBHcmFudWxvY3l0ZSBQZXJjZW50YWdlKElHJSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjY29yZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWhlYWRpbmdcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsIDEpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TGl2ZXIgUHJvZmlsZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ0aXRsZWFycm93XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHBiLTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhcHNlWzFdID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHN0Yy1oaWRlLWFjcmQtY29udGFpbmVyIHB0LTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RjLWRhdGEtdWwtbGlzdCBtdC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbW1hIGdsdXRhbXlsIFRyYW5zZmVyYXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFsa2FsaW5lIFBob3NwaGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWxpcnViaW4tRGlyZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpbGlydWJpbi10b3RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWxpcnViaW4tSW5kaXJlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvdGVpbiAtdG90YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VydW0gQWxidW1pblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ1bSBHbG9idWxpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTR09UKEFTVClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU0dQVChBTFQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnVtIEFsYnVtaW4gL0dsb2J1bGluIFJhdGlvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3QgbXQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1tYSBnbHV0YW15bCBUcmFuc2ZlcmFzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbGthbGluZSBQaG9zcGhhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlsaXJ1YmluLURpcmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWxpcnViaW4tdG90YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlsaXJ1YmluLUluZGlyZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb3RlaW4gLXRvdGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnVtIEFsYnVtaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VydW0gR2xvYnVsaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU0dPVChBU1QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNHUFQoQUxUKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ1bSBBbGJ1bWluIC9HbG9idWxpbiBSYXRpb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3QgbXQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1tYSBnbHV0YW15bCBUcmFuc2ZlcmFzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbGthbGluZSBQaG9zcGhhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlsaXJ1YmluLURpcmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWxpcnViaW4tdG90YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlsaXJ1YmluLUluZGlyZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb3RlaW4gLXRvdGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnVtIEFsYnVtaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VydW0gR2xvYnVsaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU0dPVChBU1QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNHUFQoQUxUKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ1bSBBbGJ1bWluIC9HbG9idWxpbiBSYXRpb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNjb3JkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtaGVhZGluZ1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgMil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5SZW5hbCBQcm9maWxlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInRpdGxlYXJyb3dcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgcGItMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGFwc2VbMl0gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgc3RjLWhpZGUtYWNyZC1jb250YWluZXIgcHQtMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0IG10LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FsY2l1bVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXJpYyBBY2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCbG9vZCBVcmVhIE5pdHJvZ2VuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ1bSBDcmVhdGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQlVOL1NlcnVtIENyZWF0aW5pbmUgUmF0aW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3QgbXQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYWxjaXVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcmljIEFjaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJsb29kIFVyZWEgTml0cm9nZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnVtIENyZWF0aW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCVU4vU2VydW0gQ3JlYXRpbmluZSBSYXRpb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0IG10LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FsY2l1bVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXJpYyBBY2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCbG9vZCBVcmVhIE5pdHJvZ2VuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ1bSBDcmVhdGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQlVOL1NlcnVtIENyZWF0aW5pbmUgUmF0aW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY2NvcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1oZWFkaW5nXCIgb25DbGljaz17dGhpcy50b2dnbGUuYmluZCh0aGlzLCAxMSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5MaXBpZCBQcm9maWxlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInRpdGxlYXJyb3dcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgcGItMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGFwc2VbMTFdID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+IDxzcGFuPkxpcGlkIHByb2ZpbGUgdGVzdCBpcyBhIHNldCBvZiB0ZXN0cyB1c2VkIHRvIG1lYXN1cmUgdGhlIGFtb3VudCBvZiBjaG9sZXN0ZXJvbCBhbmQgb3RoZXIgdHlwZXMgb2YgZmF0cyBwcmVzZW50IGluIHlvdXIgYmxvb2QuIFRoaXMgdGVzdCBpcyBoZWxwZnVsIGluIGFzc2Vzc2luZyB0aGUgcmlzayBvZiBjYXJkaW92YXNjdWxhciBkaXNlYXNlcyAoQ1ZEKS48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHN0Yy1oaWRlLWFjcmQtY29udGFpbmVyIHB0LTAgdGV4dC1jZW50ZXJcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKn0gPHA+TGlwaWQgcHJvZmlsZSB0ZXN0IGlzIGEgc2V0IG9mIHRlc3RzIHVzZWQgdG8gbWVhc3VyZSB0aGUgYW1vdW50IG9mIGNob2xlc3Rlcm9sIGFuZCBvdGhlciB0eXBlcyBvZiBmYXRzIHByZXNlbnQgaW4geW91ciBibG9vZC4gVGhpcyB0ZXN0IGlzIGhlbHBmdWwgaW4gYXNzZXNzaW5nIHRoZSByaXNrIG9mIGNhcmRpb3Zhc2N1bGFyIGRpc2Vhc2VzIChDVkQpLlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RjLWRhdGEtdWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5MREwgQ2hvbGVzdHJvbDwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5Ub3RhbCBDaG9sZXN0ZXJvbDwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5IREwgQ2hvbGVzdGVyb2w8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VHJpZ2x5Y2VyaWRlczwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5WTERMIENob2xlc3Rlcm9sPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkxETC9IREwgUmF0aW88L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+Tm9uIC0gSERMIENob2xlc3Rlcm9sPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlRDL0hETCBDaG9sZXN0ZXJvbCBSYXRpbzwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKn0gPHA+TGlwaWQgcHJvZmlsZSB0ZXN0IGlzIGEgc2V0IG9mIHRlc3RzIHVzZWQgdG8gbWVhc3VyZSB0aGUgYW1vdW50IG9mIGNob2xlc3Rlcm9sIGFuZCBvdGhlciB0eXBlcyBvZiBmYXRzIHByZXNlbnQgaW4geW91ciBibG9vZC4gVGhpcyB0ZXN0IGlzIGhlbHBmdWwgaW4gYXNzZXNzaW5nIHRoZSByaXNrIG9mIGNhcmRpb3Zhc2N1bGFyIGRpc2Vhc2VzIChDVkQpLlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RjLWRhdGEtdWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5MREwgQ2hvbGVzdHJvbDwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5Ub3RhbCBDaG9sZXN0ZXJvbDwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5IREwgQ2hvbGVzdGVyb2w8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VHJpZ2x5Y2VyaWRlczwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5WTERMIENob2xlc3Rlcm9sPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkxETC9IREwgUmF0aW88L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+Tm9uIC0gSERMIENob2xlc3Rlcm9sPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlRDL0hETCBDaG9sZXN0ZXJvbCBSYXRpbzwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qfSA8cD5MaXBpZCBwcm9maWxlIHRlc3QgaXMgYSBzZXQgb2YgdGVzdHMgdXNlZCB0byBtZWFzdXJlIHRoZSBhbW91bnQgb2YgY2hvbGVzdGVyb2wgYW5kIG90aGVyIHR5cGVzIG9mIGZhdHMgcHJlc2VudCBpbiB5b3VyIGJsb29kLiBUaGlzIHRlc3QgaXMgaGVscGZ1bCBpbiBhc3Nlc3NpbmcgdGhlIHJpc2sgb2YgY2FyZGlvdmFzY3VsYXIgZGlzZWFzZXMgKENWRCkuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkxETCBDaG9sZXN0cm9sPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlRvdGFsIENob2xlc3Rlcm9sPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkhETCBDaG9sZXN0ZXJvbDwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5UcmlnbHljZXJpZGVzPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlZMREwgQ2hvbGVzdGVyb2w8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+TERML0hETCBSYXRpbzwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5Ob24gLSBIREwgQ2hvbGVzdGVyb2w8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VEMvSERMIENob2xlc3Rlcm9sIFJhdGlvPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY2NvcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1oZWFkaW5nXCIgb25DbGljaz17dGhpcy50b2dnbGUuYmluZCh0aGlzLCAzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPklyb24gRGVmaWNpZW5jeTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ0aXRsZWFycm93XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHBiLTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhcHNlWzNdID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHN0Yy1oaWRlLWFjcmQtY29udGFpbmVyIHB0LTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RjLWRhdGEtdWwtbGlzdCBtdC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvdGFsIElyb24gQmluZGluZyBDYXBhY2l0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnVtIElyb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAlIFRyYW5zZXJyaW4gU2F0dXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3QgbXQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb3RhbCBJcm9uIEJpbmRpbmcgQ2FwYWNpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ1bSBJcm9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJSBUcmFuc2VycmluIFNhdHVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3QgbXQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb3RhbCBJcm9uIEJpbmRpbmcgQ2FwYWNpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ1bSBJcm9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJSBUcmFuc2VycmluIFNhdHVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNjb3JkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtaGVhZGluZ1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgNCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UaHlyb2lkIFByb2ZpbGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidGl0bGVhcnJvd1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBwYi0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb2xsYXBzZVs0XSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBzdGMtaGlkZS1hY3JkLWNvbnRhaW5lciBwdC0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3QgbXQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUcmlsb2RvdGh5cm9uaW5lKFQzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb3RhbCBUaHlyb3hpbmUoVDQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoeXJvaWQgU3RpbXVsYXRpbmcgSG9ybW9uZShUU0gpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3QgbXQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUcmlsb2RvdGh5cm9uaW5lKFQzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb3RhbCBUaHlyb3hpbmUoVDQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoeXJvaWQgU3RpbXVsYXRpbmcgSG9ybW9uZShUU0gpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RjLWRhdGEtdWwtbGlzdCBtdC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyaWxvZG90aHlyb25pbmUoVDMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvdGFsIFRoeXJveGluZShUNClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGh5cm9pZCBTdGltdWxhdGluZyBIb3Jtb25lKFRTSClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjY29yZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWhlYWRpbmdcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsIDUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgPkNBUkRJQUMgUklTSyBNQVJLRVI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidGl0bGVhcnJvd1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBwYi0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb2xsYXBzZVs1XSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBzdGMtaGlkZS1hY3JkLWNvbnRhaW5lciBwdC0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3QgbXQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTElQT1BST1RFSU4oQSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBUE9MSVBPUFJPVEVJTi1BMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFQT0xJUE9QUk9URUlOLUJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDLSBSRUFDVElWRSBQUk9URUlOIChIU0NSUClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBUE8gQi8gQVBPIEExIFJBVElPXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNjb3JkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtaGVhZGluZ1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgNil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCA+SE9NT0NZU1RFSU48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIGNsYXNzTmFtZT1cInRpdGxlYXJyb3dcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHBiLTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhY3JkLXN0Yy1yZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhY3JkLXN0Yy1yZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb2xsYXBzZVs2XSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiA8c3Bhbj5MaXBpZCBwcm9maWxlIHRlc3QgaXMgYSBzZXQgb2YgdGVzdHMgdXNlZCB0byBtZWFzdXJlIHRoZSBhbW91bnQgb2YgY2hvbGVzdGVyb2wgYW5kIG90aGVyIHR5cGVzIG9mIGZhdHMgcHJlc2VudCBpbiB5b3VyIGJsb29kLiBUaGlzIHRlc3QgaXMgaGVscGZ1bCBpbiBhc3Nlc3NpbmcgdGhlIHJpc2sgb2YgY2FyZGlvdmFzY3VsYXIgZGlzZWFzZXMgKENWRCkuPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBzdGMtaGlkZS1hY3JkLWNvbnRhaW5lciBwdC0wIHRleHQtY2VudGVyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjY29yZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWhlYWRpbmdcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsIDcpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RGlhYmV0aWMgU2NyZWVuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInRpdGxlYXJyb3dcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgcGItMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGFwc2VbN10gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgc3RjLWhpZGUtYWNyZC1jb250YWluZXIgcHQtMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0IG10LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+SGJhMWM8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+QXZlcmFnZSBibG9vZCBHbHVjb3NlPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3QgbXQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5IYmExYzwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5BdmVyYWdlIGJsb29kIEdsdWNvc2U8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0IG10LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+SGJhMWM8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+QXZlcmFnZSBibG9vZCBHbHVjb3NlPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY2NvcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1oZWFkaW5nXCIgb25DbGljaz17dGhpcy50b2dnbGUuYmluZCh0aGlzLCA4KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwID5WSVRBTUlOIEQgUFJPRklMRTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ0aXRsZWFycm93XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHBiLTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhY3JkLXN0Yy1yZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhcHNlWzhdID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHN0Yy1oaWRlLWFjcmQtY29udGFpbmVyIHB0LTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+Vml0YW1pbiBEIFRvdGFsLTI1IEh5ZHJveHk8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlZpdGFtaW4gRCBUb3RhbC0yNSBIeWRyb3h5PC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY2NvcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1oZWFkaW5nXCIgb25DbGljaz17dGhpcy50b2dnbGUuYmluZCh0aGlzLCA5KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwID5WSVRBTUlOIEIgQ09NUExFWDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ0aXRsZWFycm93XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHBiLTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhY3JkLXN0Yy1yZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhcHNlWzldID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHN0Yy1oaWRlLWFjcmQtY29udGFpbmVyIHB0LTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YSBtaWQtYm9yZGVyLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlZpdGFtaW4gQi0xMjwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0Yy1kYXRhLXVsLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+Vml0YW1pbiBCLTEyPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY2NvcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1oZWFkaW5nXCIgb25DbGljaz17dGhpcy50b2dnbGUuYmluZCh0aGlzLCAxMCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5URVNUT1NURVJPTkU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIGNsYXNzTmFtZT1cInRpdGxlYXJyb3dcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHBiLTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhY3JkLXN0Yy1yZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjY29yZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWhlYWRpbmdcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsIDExKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwID5DeXN0YXRpbiBDPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBwYi0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY2NvcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1oZWFkaW5nXCIgb25DbGljaz17dGhpcy50b2dnbGUuYmluZCh0aGlzLCAxMil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCA+Q29wcGVyIFNlcnVtPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBwYi0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY2NvcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1oZWFkaW5nXCIgb25DbGljaz17dGhpcy50b2dnbGUuYmluZCh0aGlzLCAxMyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCA+WmluYyAtIFNlcnVtPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBwYi0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY2NvcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1oZWFkaW5nXCIgb25DbGljaz17dGhpcy50b2dnbGUuYmluZCh0aGlzLCAxNCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5FbGVtZW50czwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ0aXRsZWFycm93XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNyZC1jb250ZW50IHBiLTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhY3JkLXN0Yy1yZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGEgbWlkLWJvcmRlci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhY3JkLXN0Yy1yZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb2xsYXBzZVsxNF0gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgc3RjLWhpZGUtYWNyZC1jb250YWluZXIgcHQtMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkFsdW1pbml1bTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5BcnNlbmljPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkJhcml1bTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5DYWRtaXVtPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkNhZXNpdW08L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+TWVyY3VyeTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5MZWFkPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPlRpbjwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5CaXNtdXRoPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkJlcnlsbGl1bTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5BbnRpbW9ueTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5TdHJvbnRpdW08L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VGhhbGxpdW08L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VXJhbml1bTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5Db2JhbHQ8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+Q2hyb21pdW08L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+TW9seWJkZW51bTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5TaWx2ZXI8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VmFuYWRpdW08L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+U2VsZW5pdW08L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+Tmlja2VsPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPk1hZ25lc2l1bTwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGMtYWNjb3JkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtaGVhZGluZ1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgMTUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UGFuY3JlYXRpYyAoQWN1dGUpIFByb2ZpbGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidGl0bGVhcnJvd1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RjLWFjcmQtY29udGVudCBwYi0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNyZC1zdGMtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNyZC1zdGMtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb2xsYXBzZVsxNV0gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0Yy1hY3JkLWNvbnRlbnQgc3RjLWhpZGUtYWNyZC1jb250YWluZXIgcHQtMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3JkLXN0Yy1kYXRhIG1pZC1ib3JkZXItbXJnblwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjcmQtc3RjLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGMtZGF0YS11bC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxwPkFNWUxBU0U8L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+TElQQVNFPC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmlnaHRCYXIgZXh0cmFDbGFzcz1cIiBjaGF0LWZsb2F0LWJ0bi0yXCIgbXNnVGVtcGxhdGU9XCJnb2xkX2dlbmVyYWxfdGVtcGxhdGVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyoodGhpcy5zdGF0ZS5zaG93Tm9uSXBkUG9wdXAgPT0gMSB8fCB0aGlzLnN0YXRlLnNob3dOb25JcGRQb3B1cCA9PSAyKSAmJiB0aGlzLnN0YXRlLnRvX2JlX2ZvcmNlID09IDE/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5vbklwZFBvcHVwVmlldyB7Li4udGhpcy5wcm9wc30gbm9uSXBkTGVhZHM9e3RoaXMubm9uSXBkTGVhZHMuYmluZCh0aGlzKX0gY2xvc2VJcGRMZWFkUG9wdXAgPSB7dGhpcy5jbG9zZUlwZExlYWRQb3B1cC5iaW5kKHRoaXMpfSBpc19mb3JjZT17dGhpcy5zdGF0ZS5zaG93Tm9uSXBkUG9wdXB9IGlzX2xhYj17ZmFsc2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JycqL1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyIGZvb3RlckRhdGE9e3RoaXMuc3RhdGUuZm9vdGVyRGF0YX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGh5cm9jYXJlUGFja2FnZVZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgZ2V0T2ZmZXJMaXN0LCB0b2dnbGVPUERDcml0ZXJpYSwgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEsIE5vbklwZEJvb2tpbmdMZWFkLCBjb21tb25fdXRtX3RhZ3MsIHNhdmVMZWFkUGhuTnVtYmVyIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcblxuaW1wb3J0IFRoeXJvY2FyZVBhY2thZ2VWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGlhZ25vc2lzL1RoeXJvY2FyZVBhY2thZ2UvVGh5cm9jYXJlUGFja2FnZVZpZXcuanMnO1xuXG5jbGFzcyBUaHlyb2NhcmVQYWNrYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRoeXJvY2FyZVBhY2thZ2VWaWV3IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwYXNzZWRQcm9wcykgPT4ge1xuXG4gICAgY29uc3Qge1xuICAgICAgICBvZmZlckxpc3QsXG4gICAgICAgIGNvbW1vbl91dG1fdGFnc1xuICAgIH0gPSBzdGF0ZS5VU0VSXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBvZmZlckxpc3RcbiAgICB9XG5cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0T2ZmZXJMaXN0OiAobGF0LCBsb25nKSA9PiBkaXNwYXRjaChnZXRPZmZlckxpc3QobGF0LCBsb25nKSksXG4gICAgICAgIHRvZ2dsZU9QRENyaXRlcmlhOiAodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkLCBmaWx0ZXIpID0+IGRpc3BhdGNoKHRvZ2dsZU9QRENyaXRlcmlhKHR5cGUsIGNyaXRlcmlhLCBmb3JjZUFkZCwgZmlsdGVyKSksXG4gICAgICAgIHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhOiAodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkLCBmaWx0ZXIpID0+IGRpc3BhdGNoKHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKHR5cGUsIGNyaXRlcmlhLCBmb3JjZUFkZCwgZmlsdGVyKSksXG4gICAgICAgIE5vbklwZEJvb2tpbmdMZWFkOihkYXRhLGNiKSA9PmRpc3BhdGNoKE5vbklwZEJvb2tpbmdMZWFkKGRhdGEsIGNiKSksXG4gICAgICAgIHNhdmVMZWFkUGhuTnVtYmVyOihudW1iZXIpID0+IGRpc3BhdGNoKHNhdmVMZWFkUGhuTnVtYmVyKG51bWJlcikpXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFRoeXJvY2FyZVBhY2thZ2UpO1xuIiwiLy8gLmRpcm5hbWUsIC5iYXNlbmFtZSwgYW5kIC5leHRuYW1lIG1ldGhvZHMgYXJlIGV4dHJhY3RlZCBmcm9tIE5vZGUuanMgdjguMTEuMSxcbi8vIGJhY2twb3J0ZWQgYW5kIHRyYW5zcGxpdGVkIHdpdGggQmFiZWwsIHdpdGggYmFja3dhcmRzLWNvbXBhdCBmaXhlc1xuXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXG4vLyBtdXN0IGJlIG5vIHNsYXNoZXMsIGVtcHR5IGVsZW1lbnRzLCBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxuLy8gKHNvIGFsc28gbm8gbGVhZGluZyBhbmQgdHJhaWxpbmcgc2xhc2hlcyAtIGl0IGRvZXMgbm90IGRpc3Rpbmd1aXNoXG4vLyByZWxhdGl2ZSBhbmQgYWJzb2x1dGUgcGF0aHMpXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcbiAgLy8gaWYgdGhlIHBhdGggdHJpZXMgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIGB1cGAgZW5kcyB1cCA+IDBcbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhcnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGxhc3QgPSBwYXJ0c1tpXTtcbiAgICBpZiAobGFzdCA9PT0gJy4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlIHBhdGggaXMgYWxsb3dlZCB0byBnbyBhYm92ZSB0aGUgcm9vdCwgcmVzdG9yZSBsZWFkaW5nIC4uc1xuICBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcbiAgICBmb3IgKDsgdXAtLTsgdXApIHtcbiAgICAgIHBhcnRzLnVuc2hpZnQoJy4uJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG4vLyBwYXRoLnJlc29sdmUoW2Zyb20gLi4uXSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlc29sdmUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlc29sdmVkUGF0aCA9ICcnLFxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMSAmJiAhcmVzb2x2ZWRBYnNvbHV0ZTsgaS0tKSB7XG4gICAgdmFyIHBhdGggPSAoaSA+PSAwKSA/IGFyZ3VtZW50c1tpXSA6IHByb2Nlc3MuY3dkKCk7XG5cbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcbiAgICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH0gZWxzZSBpZiAoIXBhdGgpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJlc29sdmVkUGF0aCA9IHBhdGggKyAnLycgKyByZXNvbHZlZFBhdGg7XG4gICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IHBhdGguY2hhckF0KDApID09PSAnLyc7XG4gIH1cblxuICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCwgYnV0XG4gIC8vIGhhbmRsZSByZWxhdGl2ZSBwYXRocyB0byBiZSBzYWZlIChtaWdodCBoYXBwZW4gd2hlbiBwcm9jZXNzLmN3ZCgpIGZhaWxzKVxuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICByZXNvbHZlZFBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocmVzb2x2ZWRQYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIXJlc29sdmVkQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICByZXR1cm4gKChyZXNvbHZlZEFic29sdXRlID8gJy8nIDogJycpICsgcmVzb2x2ZWRQYXRoKSB8fCAnLic7XG59O1xuXG4vLyBwYXRoLm5vcm1hbGl6ZShwYXRoKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHZhciBpc0Fic29sdXRlID0gZXhwb3J0cy5pc0Fic29sdXRlKHBhdGgpLFxuICAgICAgdHJhaWxpbmdTbGFzaCA9IHN1YnN0cihwYXRoLCAtMSkgPT09ICcvJztcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihwYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIWlzQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICBpZiAoIXBhdGggJiYgIWlzQWJzb2x1dGUpIHtcbiAgICBwYXRoID0gJy4nO1xuICB9XG4gIGlmIChwYXRoICYmIHRyYWlsaW5nU2xhc2gpIHtcbiAgICBwYXRoICs9ICcvJztcbiAgfVxuXG4gIHJldHVybiAoaXNBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHBhdGg7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmlzQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5qb2luID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwYXRocyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gIHJldHVybiBleHBvcnRzLm5vcm1hbGl6ZShmaWx0ZXIocGF0aHMsIGZ1bmN0aW9uKHAsIGluZGV4KSB7XG4gICAgaWYgKHR5cGVvZiBwICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGguam9pbiBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9XG4gICAgcmV0dXJuIHA7XG4gIH0pLmpvaW4oJy8nKSk7XG59O1xuXG5cbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlbGF0aXZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcbiAgZnJvbSA9IGV4cG9ydHMucmVzb2x2ZShmcm9tKS5zdWJzdHIoMSk7XG4gIHRvID0gZXhwb3J0cy5yZXNvbHZlKHRvKS5zdWJzdHIoMSk7XG5cbiAgZnVuY3Rpb24gdHJpbShhcnIpIHtcbiAgICB2YXIgc3RhcnQgPSAwO1xuICAgIGZvciAoOyBzdGFydCA8IGFyci5sZW5ndGg7IHN0YXJ0KyspIHtcbiAgICAgIGlmIChhcnJbc3RhcnRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgdmFyIGVuZCA9IGFyci5sZW5ndGggLSAxO1xuICAgIGZvciAoOyBlbmQgPj0gMDsgZW5kLS0pIHtcbiAgICAgIGlmIChhcnJbZW5kXSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChzdGFydCA+IGVuZCkgcmV0dXJuIFtdO1xuICAgIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSk7XG4gIH1cblxuICB2YXIgZnJvbVBhcnRzID0gdHJpbShmcm9tLnNwbGl0KCcvJykpO1xuICB2YXIgdG9QYXJ0cyA9IHRyaW0odG8uc3BsaXQoJy8nKSk7XG5cbiAgdmFyIGxlbmd0aCA9IE1hdGgubWluKGZyb21QYXJ0cy5sZW5ndGgsIHRvUGFydHMubGVuZ3RoKTtcbiAgdmFyIHNhbWVQYXJ0c0xlbmd0aCA9IGxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChmcm9tUGFydHNbaV0gIT09IHRvUGFydHNbaV0pIHtcbiAgICAgIHNhbWVQYXJ0c0xlbmd0aCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB2YXIgb3V0cHV0UGFydHMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIG91dHB1dFBhcnRzLnB1c2goJy4uJyk7XG4gIH1cblxuICBvdXRwdXRQYXJ0cyA9IG91dHB1dFBhcnRzLmNvbmNhdCh0b1BhcnRzLnNsaWNlKHNhbWVQYXJ0c0xlbmd0aCkpO1xuXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCcvJyk7XG59O1xuXG5leHBvcnRzLnNlcCA9ICcvJztcbmV4cG9ydHMuZGVsaW1pdGVyID0gJzonO1xuXG5leHBvcnRzLmRpcm5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICBpZiAocGF0aC5sZW5ndGggPT09IDApIHJldHVybiAnLic7XG4gIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KDApO1xuICB2YXIgaGFzUm9vdCA9IGNvZGUgPT09IDQ3IC8qLyovO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDE7IC0taSkge1xuICAgIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgZW5kID0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuIGhhc1Jvb3QgPyAnLycgOiAnLic7XG4gIGlmIChoYXNSb290ICYmIGVuZCA9PT0gMSkge1xuICAgIC8vIHJldHVybiAnLy8nO1xuICAgIC8vIEJhY2t3YXJkcy1jb21wYXQgZml4OlxuICAgIHJldHVybiAnLyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2UoMCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGJhc2VuYW1lKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcblxuICB2YXIgc3RhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICB2YXIgaTtcblxuICBmb3IgKGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgaWYgKHBhdGguY2hhckNvZGVBdChpKSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBwYXRoIGNvbXBvbmVudFxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuICcnO1xuICByZXR1cm4gcGF0aC5zbGljZShzdGFydCwgZW5kKTtcbn1cblxuLy8gVXNlcyBhIG1peGVkIGFwcHJvYWNoIGZvciBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSwgYXMgZXh0IGJlaGF2aW9yIGNoYW5nZWRcbi8vIGluIG5ldyBOb2RlLmpzIHZlcnNpb25zLCBzbyBvbmx5IGJhc2VuYW1lKCkgYWJvdmUgaXMgYmFja3BvcnRlZCBoZXJlXG5leHBvcnRzLmJhc2VuYW1lID0gZnVuY3Rpb24gKHBhdGgsIGV4dCkge1xuICB2YXIgZiA9IGJhc2VuYW1lKHBhdGgpO1xuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xuICB9XG4gIHJldHVybiBmO1xufTtcblxuZXhwb3J0cy5leHRuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgdmFyIHN0YXJ0RG90ID0gLTE7XG4gIHZhciBzdGFydFBhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICAvLyBUcmFjayB0aGUgc3RhdGUgb2YgY2hhcmFjdGVycyAoaWYgYW55KSB3ZSBzZWUgYmVmb3JlIG91ciBmaXJzdCBkb3QgYW5kXG4gIC8vIGFmdGVyIGFueSBwYXRoIHNlcGFyYXRvciB3ZSBmaW5kXG4gIHZhciBwcmVEb3RTdGF0ZSA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0UGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBleHRlbnNpb25cbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICAgIGlmIChjb2RlID09PSA0NiAvKi4qLykge1xuICAgICAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCBkb3QsIG1hcmsgaXQgYXMgdGhlIHN0YXJ0IG9mIG91ciBleHRlbnNpb25cbiAgICAgICAgaWYgKHN0YXJ0RG90ID09PSAtMSlcbiAgICAgICAgICBzdGFydERvdCA9IGk7XG4gICAgICAgIGVsc2UgaWYgKHByZURvdFN0YXRlICE9PSAxKVxuICAgICAgICAgIHByZURvdFN0YXRlID0gMTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0RG90ICE9PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBhbmQgbm9uLXBhdGggc2VwYXJhdG9yIGJlZm9yZSBvdXIgZG90LCBzbyB3ZSBzaG91bGRcbiAgICAgIC8vIGhhdmUgYSBnb29kIGNoYW5jZSBhdCBoYXZpbmcgYSBub24tZW1wdHkgZXh0ZW5zaW9uXG4gICAgICBwcmVEb3RTdGF0ZSA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGFydERvdCA9PT0gLTEgfHwgZW5kID09PSAtMSB8fFxuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBjaGFyYWN0ZXIgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBkb3RcbiAgICAgIHByZURvdFN0YXRlID09PSAwIHx8XG4gICAgICAvLyBUaGUgKHJpZ2h0LW1vc3QpIHRyaW1tZWQgcGF0aCBjb21wb25lbnQgaXMgZXhhY3RseSAnLi4nXG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMSAmJiBzdGFydERvdCA9PT0gZW5kIC0gMSAmJiBzdGFydERvdCA9PT0gc3RhcnRQYXJ0ICsgMSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZShzdGFydERvdCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGZpbHRlciAoeHMsIGYpIHtcbiAgICBpZiAoeHMuZmlsdGVyKSByZXR1cm4geHMuZmlsdGVyKGYpO1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChmKHhzW2ldLCBpLCB4cykpIHJlcy5wdXNoKHhzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLy8gU3RyaW5nLnByb3RvdHlwZS5zdWJzdHIgLSBuZWdhdGl2ZSBpbmRleCBkb24ndCB3b3JrIGluIElFOFxudmFyIHN1YnN0ciA9ICdhYicuc3Vic3RyKC0xKSA9PT0gJ2InXG4gICAgPyBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7IHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pIH1cbiAgICA6IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHtcbiAgICAgICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSBzdHIubGVuZ3RoICsgc3RhcnQ7XG4gICAgICAgIHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pO1xuICAgIH1cbjtcbiIsImltcG9ydCBfTWVtb3J5Um91dGVyIGZyb20gXCIuL01lbW9yeVJvdXRlclwiO1xuZXhwb3J0IHsgX01lbW9yeVJvdXRlciBhcyBNZW1vcnlSb3V0ZXIgfTtcbmltcG9ydCBfUHJvbXB0IGZyb20gXCIuL1Byb21wdFwiO1xuZXhwb3J0IHsgX1Byb21wdCBhcyBQcm9tcHQgfTtcbmltcG9ydCBfUmVkaXJlY3QgZnJvbSBcIi4vUmVkaXJlY3RcIjtcbmV4cG9ydCB7IF9SZWRpcmVjdCBhcyBSZWRpcmVjdCB9O1xuaW1wb3J0IF9Sb3V0ZSBmcm9tIFwiLi9Sb3V0ZVwiO1xuZXhwb3J0IHsgX1JvdXRlIGFzIFJvdXRlIH07XG5pbXBvcnQgX1JvdXRlciBmcm9tIFwiLi9Sb3V0ZXJcIjtcbmV4cG9ydCB7IF9Sb3V0ZXIgYXMgUm91dGVyIH07XG5pbXBvcnQgX1N0YXRpY1JvdXRlciBmcm9tIFwiLi9TdGF0aWNSb3V0ZXJcIjtcbmV4cG9ydCB7IF9TdGF0aWNSb3V0ZXIgYXMgU3RhdGljUm91dGVyIH07XG5pbXBvcnQgX1N3aXRjaCBmcm9tIFwiLi9Td2l0Y2hcIjtcbmV4cG9ydCB7IF9Td2l0Y2ggYXMgU3dpdGNoIH07XG5pbXBvcnQgX2dlbmVyYXRlUGF0aCBmcm9tIFwiLi9nZW5lcmF0ZVBhdGhcIjtcbmV4cG9ydCB7IF9nZW5lcmF0ZVBhdGggYXMgZ2VuZXJhdGVQYXRoIH07XG5pbXBvcnQgX21hdGNoUGF0aCBmcm9tIFwiLi9tYXRjaFBhdGhcIjtcbmV4cG9ydCB7IF9tYXRjaFBhdGggYXMgbWF0Y2hQYXRoIH07XG5pbXBvcnQgX3dpdGhSb3V0ZXIgZnJvbSBcIi4vd2l0aFJvdXRlclwiO1xuZXhwb3J0IHsgX3dpdGhSb3V0ZXIgYXMgd2l0aFJvdXRlciB9OyJdLCJzb3VyY2VSb290IjoiIn0=