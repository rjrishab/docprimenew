(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[62],{

/***/ "./dev/js/components/commons/ratingsProfileView/RatingStars.js":
/*!*********************************************************************!*\
  !*** ./dev/js/components/commons/ratingsProfileView/RatingStars.js ***!
  \*********************************************************************/
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

var RatingStars = function (_React$Component) {
    _inherits(RatingStars, _React$Component);

    function RatingStars(props) {
        _classCallCheck(this, RatingStars);

        var _this = _possibleConstructorReturn(this, (RatingStars.__proto__ || Object.getPrototypeOf(RatingStars)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(RatingStars, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                average_rating = _props.average_rating,
                rating_count = _props.rating_count;


            var rating = '';
            if (average_rating) {
                rating = Math.ceil(average_rating * 2) / 2;
            }

            var ratingArray = [];
            for (var i = 0; i < Math.floor(rating); i++) {
                ratingArray.push(_react2.default.createElement('img', { key: i, src: "/assets" + '/img/customer-icons/rating-star-filled.svg', className: 'img-cstm-docrating', style: { width: this.props.width, marginRight: 2, height: this.props.height } }));
            }

            if (rating != Math.floor(rating)) {
                ratingArray.push(_react2.default.createElement('img', { key: 'half', src: "/assets" + '/img/customer-icons/halfstar_new.svg', className: 'img-cstm-docrating', style: { width: this.props.width, marginRight: 2, height: this.props.height } }));
            }

            var emptyStars = Math.floor(5 - rating);
            if (emptyStars) {
                for (var _i = 0; _i < emptyStars; _i++) {
                    ratingArray.push(_react2.default.createElement('img', { key: _i + 'empty', src: "/assets" + '/img/customer-icons/rating-star-empty.svg', className: 'img-cstm-docrating', style: { width: this.props.width, marginRight: 2, height: this.props.height } }));
                }
            }
            return _react2.default.createElement(
                'div',
                { className: 'cstm-doc-rtng', style: this.props.justifyCenter ? { justifyContent: 'center' } : {} },
                ratingArray,
                rating_count ? _react2.default.createElement(
                    'span',
                    null,
                    '(',
                    rating_count,
                    ')'
                ) : ''
            );
        }
    }]);

    return RatingStars;
}(_react2.default.Component);

exports.default = RatingStars;

/***/ }),

/***/ "./dev/js/components/diagnosis/commons/labDetails/LabDetail.js":
/*!*********************************************************************!*\
  !*** ./dev/js/components/diagnosis/commons/labDetails/LabDetail.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _initialsPicture = __webpack_require__(/*! ../../../commons/initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

var _labTests = __webpack_require__(/*! ../labTests */ "./dev/js/components/diagnosis/commons/labTests/index.js");

var _labTests2 = _interopRequireDefault(_labTests);

var _RatingProfileCard = __webpack_require__(/*! ../../../commons/ratingsProfileView/RatingProfileCard.js */ "./dev/js/components/commons/ratingsProfileView/RatingProfileCard.js");

var _RatingProfileCard2 = _interopRequireDefault(_RatingProfileCard);

var _utils = __webpack_require__(/*! ../../../../helpers/utils.js */ "./dev/js/helpers/utils.js");

var _ratingReviewView = __webpack_require__(/*! ../../../commons/ratingsProfileView/ratingReviewView.js */ "./dev/js/components/commons/ratingsProfileView/ratingReviewView.js");

var _ratingReviewView2 = _interopRequireDefault(_ratingReviewView);

var _gtm = __webpack_require__(/*! ../../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _storage = __webpack_require__(/*! ../../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LabDetails = function (_React$Component) {
    _inherits(LabDetails, _React$Component);

    function LabDetails(props) {
        _classCallCheck(this, LabDetails);

        return _possibleConstructorReturn(this, (LabDetails.__proto__ || Object.getPrototypeOf(LabDetails)).call(this, props));
    }

    _createClass(LabDetails, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (window) {
                window.scrollTo(0, 0);
            }

            if (this.props.app_download_list && !this.props.app_download_list.length) {

                this.props.getDownloadAppBannerList(function (resp) {
                    if (resp && resp.length && resp[0].data) {
                        _this2.showDownloadAppWidget(resp[0].data);
                    }
                });
            } else {
                this.showDownloadAppWidget(this.props.app_download_list);
            }
        }
    }, {
        key: 'showDownloadAppWidget',
        value: function showDownloadAppWidget(dataList) {
            var _this3 = this;

            var landing_page = false;
            if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window.ON_LANDING_PAGE) {
                landing_page = true;
            }

            var downloadAppButtonData = {};

            if (landing_page && dataList && dataList.length) {

                dataList.map(function (banner) {
                    if (banner.isenabled && (_this3.props.match.url.includes(banner.ends_with) || _this3.props.match.url.includes(banner.starts_with))) {
                        downloadAppButtonData = banner;
                    }
                });
            }

            if (Object.values(downloadAppButtonData).length) {

                var gtmTrack = {
                    'Category': 'ConsumerApp', 'Action': 'DownloadAppButtonVisible', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'download-app-button-visible', 'starts_with': downloadAppButtonData.starts_with ? downloadAppButtonData.starts_with : '', 'ends_with': downloadAppButtonData.ends_with ? downloadAppButtonData.ends_with : '', 'device': this.props.device_info
                };
                _gtm2.default.sendEvent({ data: gtmTrack });
            }
        }
    }, {
        key: 'downloadButton',
        value: function downloadButton(data) {
            var gtmTrack = {
                'Category': 'ConsumerApp', 'Action': 'DownloadAppButtonClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'download-app-button-clicked', 'starts_with': data.starts_with ? data.starts_with : '', 'ends_with': data.ends_with ? data.ends_with : '',
                'device': this.props.device_info
            };
            _gtm2.default.sendEvent({ data: gtmTrack });
            if (window) {
                window.open(data.URL, '_self');
            }
        }
    }, {
        key: 'openTests',
        value: function openTests() {
            var data = {
                'Category': 'ConsumerApp', 'Action': 'UserSelectingAddRemoveLabTests', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'user-selecting-add-remove-lab-tests'
            };
            _gtm2.default.sendEvent({ data: data });
            if (this.props.seoFriendly) {
                this.props.history.push(window.location.pathname + '/booking?lab_id=' + this.props.data.lab.id + '&action_page=tests');
            } else {
                this.props.history.push('/lab/' + this.props.data.lab.id + '/tests');
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _props$data$lab = this.props.data.lab,
                about = _props$data$lab.about,
                address = _props$data$lab.address,
                lab_image = _props$data$lab.lab_image,
                lat = _props$data$lab.lat,
                long = _props$data$lab.long,
                name = _props$data$lab.name,
                primary_mobile = _props$data$lab.primary_mobile,
                city = _props$data$lab.city,
                sublocality = _props$data$lab.sublocality,
                locality = _props$data$lab.locality,
                lab_thumbnail = _props$data$lab.lab_thumbnail;
            var _props$data = this.props.data,
                lab_timing = _props$data.lab_timing,
                lab_timing_data = _props$data.lab_timing_data,
                mrp = _props$data.mrp,
                next_lab_timing = _props$data.next_lab_timing,
                next_lab_timing_data = _props$data.next_lab_timing_data,
                total_test_count = _props$data.total_test_count;


            var landing_page = false;
            if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window.ON_LANDING_PAGE) {
                landing_page = true;
            }

            var downloadAppButtonData = {};

            if (landing_page && this.props.app_download_list && this.props.app_download_list.length) {

                this.props.app_download_list.map(function (banner) {
                    if (banner.isenabled && (_this4.props.match.url.includes(banner.ends_with) || _this4.props.match.url.includes(banner.starts_with))) {
                        downloadAppButtonData = banner;
                    }
                });
            }

            return _react2.default.createElement(
                'section',
                { className: 'profile-book-screen' },
                _react2.default.createElement(
                    'div',
                    { className: 'container-fluid' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12' },
                            downloadAppButtonData && Object.values(downloadAppButtonData).length ? _react2.default.createElement(
                                'a',
                                { className: 'downloadBtn', href: 'javascript:void(0);', onClick: this.downloadButton.bind(this, downloadAppButtonData) },
                                _react2.default.createElement(
                                    'button',
                                    { className: 'dwnlAppBtn' },
                                    !this.props.device_info ? '' : this.props.device_info.toLowerCase().includes('iphone') || this.props.device_info.toLowerCase().includes('ipad') ? _react2.default.createElement('img', { style: { width: '13px', marginRight: '5px', marginTop: '-1px' }, src: "/assets" + "/img/appl1.svg" }) : _react2.default.createElement('img', { style: { width: '13px', marginRight: '5px' }, src: "/assets" + "/img/andr1.svg" }),
                                    'Download App'
                                )
                            ) : '',
                            this.props.data.lab.unrated_appointment ? _react2.default.createElement(_RatingProfileCard2.default, _extends({}, this.props, { details: this.props.data.lab.unrated_appointment })) : "",
                            _react2.default.createElement(
                                'div',
                                { className: 'widget mrb-15' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'widget-header pb-header text-center' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'pb-logo' },
                                        _react2.default.createElement(
                                            _initialsPicture2.default,
                                            { name: name, has_image: !!lab_thumbnail, className: 'initialsPicture-lp' },
                                            _react2.default.createElement('img', { src: lab_thumbnail, className: 'img-fluid' })
                                        )
                                    ),
                                    name && name.toLowerCase().includes('thyrocare') ? _react2.default.createElement(
                                        'h1',
                                        { className: 'widget-title pb-title' },
                                        name.split('-')[0]
                                    ) : _react2.default.createElement(
                                        'h1',
                                        { className: 'widget-title pb-title' },
                                        name
                                    ),
                                    name && name.toLowerCase().includes('thyrocare') ? '' : _react2.default.createElement(
                                        'p',
                                        { className: 'location text-black' },
                                        locality,
                                        ' ',
                                        city
                                    ),
                                    _react2.default.createElement(
                                        'ul',
                                        { className: 'list time-contact' },
                                        _react2.default.createElement(
                                            'li',
                                            { className: 'uTimingPara' },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'fw-700 text-sm' },
                                                'Timing: '
                                            ),
                                            (0, _utils.buildOpenBanner)(lab_timing, lab_timing_data, next_lab_timing, next_lab_timing_data)
                                        )
                                    )
                                ),
                                this.props.is_user_vip && !this.props.is_user_gold_vip ? '' : _react2.default.createElement(
                                    'div',
                                    { className: 'lb-viewmore' },
                                    _react2.default.createElement(
                                        'p',
                                        { onClick: this.openTests.bind(this), className: 'text-primary fw-700 text-sm' },
                                        'View all ' + (total_test_count ? total_test_count : '') + ' tests ',
                                        _react2.default.createElement('img', { src: "/assets" + '/images/right_arrow.png' })
                                    )
                                ),
                                _react2.default.createElement(_labTests2.default, this.props)
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'widget mrb-15' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'widget-content pb-details pb-location' },
                                    _react2.default.createElement(
                                        'h4',
                                        { className: 'wc-title text-md fw-700' },
                                        'Location'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'address-details' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'https://www.google.com/maps/search/?api=1&query=' + lat + ',' + long, className: 'link-text text-md fw-700', target: '_blank' },
                                            _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/map-icon.png", className: 'img-fluid add-map' })
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'add-info' },
                                            address
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'pb-view text-left' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'https://www.google.com/maps/search/?api=1&query=' + lat + ',' + long, className: 'link-text text-md fw-700 view-in-map', target: '_blank' },
                                            'View in Google Map'
                                        )
                                    )
                                )
                            ),
                            this.props.data.lab.display_rating_widget ? _react2.default.createElement(_ratingReviewView2.default, _extends({ id: this.props.data.lab.id, content_type: 1 }, this.props)) : "",
                            _react2.default.createElement(
                                'div',
                                { className: 'widget mrb-15' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'widget-content pb-details pb-about' },
                                    _react2.default.createElement(
                                        'h4',
                                        { className: 'wc-title text-md fw-700' },
                                        'About'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        about
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return LabDetails;
}(_react2.default.Component);

exports.default = LabDetails;

/***/ }),

/***/ "./dev/js/components/diagnosis/commons/labDetails/index.js":
/*!*****************************************************************!*\
  !*** ./dev/js/components/diagnosis/commons/labDetails/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LabDetail = __webpack_require__(/*! ./LabDetail.js */ "./dev/js/components/diagnosis/commons/labDetails/LabDetail.js");

var _LabDetail2 = _interopRequireDefault(_LabDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _LabDetail2.default;

/***/ }),

/***/ "./dev/js/components/diagnosis/commons/labTests/index.js":
/*!***************************************************************!*\
  !*** ./dev/js/components/diagnosis/commons/labTests/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _labTests = __webpack_require__(/*! ./labTests */ "./dev/js/components/diagnosis/commons/labTests/labTests.js");

var _labTests2 = _interopRequireDefault(_labTests);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _labTests2.default;

/***/ }),

/***/ "./dev/js/components/diagnosis/commons/labTests/labTests.js":
/*!******************************************************************!*\
  !*** ./dev/js/components/diagnosis/commons/labTests/labTests.js ***!
  \******************************************************************/
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

var _gtm = __webpack_require__(/*! ../../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _packageTest = __webpack_require__(/*! ./packageTest.js */ "./dev/js/components/diagnosis/commons/labTests/packageTest.js");

var _packageTest2 = _interopRequireDefault(_packageTest);

var _packageInfo = __webpack_require__(/*! ./packageInfo.js */ "./dev/js/components/diagnosis/commons/labTests/packageInfo.js");

var _packageInfo2 = _interopRequireDefault(_packageInfo);

var _storage = __webpack_require__(/*! ../../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var LabTests = function (_React$Component) {
    _inherits(LabTests, _React$Component);

    function LabTests(props) {
        _classCallCheck(this, LabTests);

        var _this = _possibleConstructorReturn(this, (LabTests.__proto__ || Object.getPrototypeOf(LabTests)).call(this, props));

        _this.state = {
            showPackageInfo: false,
            packageInfoTest: null
        };
        return _this;
    }

    _createClass(LabTests, [{
        key: 'openTests',
        value: function openTests() {
            var data = {
                'Category': 'ConsumerApp', 'Action': 'UserSelectingAddRemoveLabTests', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'user-selecting-add-remove-lab-tests'
            };
            _gtm2.default.sendEvent({ data: data });

            this.props.history.push('/lab/' + this.props.data.lab.id + '/tests');
        }
    }, {
        key: 'toggle',
        value: function toggle(which) {
            var _setState;

            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            this.setState((_setState = {}, _defineProperty(_setState, which, !this.state[which]), _defineProperty(_setState, 'packageInfoTest', data), _setState));
        }
    }, {
        key: 'toggleTest',
        value: function toggleTest(test_to_toggle) {
            var test = Object.assign({}, test_to_toggle);
            test.add_to_common = true;

            this.props.toggleDiagnosisCriteria('test', test);
        }
    }, {
        key: 'testInfo',
        value: function testInfo(test_id, url, event) {
            var lab_id = this.props.selectedLab;
            var selected_test_ids = this.props.lab_test_data[this.props.selectedLab] || [];
            selected_test_ids = selected_test_ids.map(function (x) {
                return x.id;
            });
            var lat = 28.644800;
            var long = 77.216721;
            if (this.props.selectedLocation !== null) {
                lat = this.props.selectedLocation.geometry.location.lat;
                long = this.props.selectedLocation.geometry.location.lng;

                if (typeof lat === 'function') lat = lat();
                if (typeof long === 'function') long = long();
            }
            if (url && url != '') {
                this.props.history.push('/' + url + '?test_ids=' + test_id + '&selected_test_ids=' + selected_test_ids + '&lab_id=' + lab_id + '&lat=' + lat + '&long=' + long);
            } else {
                this.props.history.push('/search/testinfo?test_ids=' + test_id + '&selected_test_ids=' + selected_test_ids + '&lab_id=' + lab_id + '&lat=' + lat + '&long=' + long);
            }
            event.stopPropagation();
            var data = {
                'Category': 'ConsumerApp', 'Action': 'testInfoClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'test-info-click', 'pageSource': 'lab-test-page'
            };
            _gtm2.default.sendEvent({ data: data });
        }
    }, {
        key: 'searchTests',
        value: function searchTests() {
            this.props.selectSearchType('lab');
            this.props.history.push('/search');
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var is_package = false;
            var number_of_tests = 0;
            var defaultTests = [];
            var showDefaultTests = false;
            var hide_price = false;
            var selectedTestIds = [];
            var selectedTests = [];
            var selectedPackage = [];
            var unSelectedTests = [];
            var unSelectedPackage = [];
            var test_info = '';
            var show_details = '';
            var is_plan_applicable = this.props.is_plan_applicable;
            var _props = this.props,
                is_insurance_applicable = _props.is_insurance_applicable,
                is_vip_applicable = _props.is_vip_applicable,
                is_covered_under_gold = _props.is_covered_under_gold;

            var is_user_insured = false;
            var selectedTestsCount = 0;
            var vip_amount = 0;
            var finalMrp = 0;
            var price_to_pay = 0;

            //For Insured Person Remove unselected Tests/Packages

            if (this.props.profiles && this.props.profiles[this.props.defaultProfile]) {
                is_user_insured = this.props.profiles[this.props.defaultProfile].is_insured;
            }

            if (this.props.currentLabSelectedTests && this.props.currentLabSelectedTests.length) {
                selectedTestsCount = this.props.currentLabSelectedTests.filter(function (x) {
                    return x.is_selected;
                }).length;

                this.props.currentLabSelectedTests.map(function (test, i) {
                    if (test.hide_price) {
                        hide_price = true;
                    }

                    if (test.is_package) {
                        is_package = true;
                        number_of_tests = test.number_of_tests;
                    }

                    if (test.is_package) {
                        if (test.is_selected) {
                            finalMrp += parseInt(test.mrp);
                            if (test.vip) {
                                vip_amount += parseInt(test.vip.vip_gold_price || 0) + parseInt(test.vip.vip_convenience_amount || 0);
                            }
                            selectedPackage.push(_react2.default.createElement(_packageTest2.default, { is_insurance_applicable: is_insurance_applicable, is_plan_applicable: is_plan_applicable, key: i, i: i, test: test, toggle: _this2.toggle.bind(_this2), toggleTest: _this2.toggleTest.bind(_this2), testInfo: _this2.testInfo.bind(_this2), hide_price: hide_price, selectedTestsCount: selectedTestsCount, is_user_insured: is_user_insured, is_vip_applicable: is_vip_applicable, is_user_vip: _this2.props.is_user_vip, is_user_gold_vip: _this2.props.is_user_gold_vip }));
                        } else {
                            unSelectedPackage.push(_react2.default.createElement(_packageTest2.default, { is_insurance_applicable: is_insurance_applicable, is_plan_applicable: is_plan_applicable, key: i, i: i, test: test, toggle: _this2.toggle.bind(_this2), toggleTest: _this2.toggleTest.bind(_this2), hide_price: hide_price, testInfo: _this2.testInfo.bind(_this2), selectedTestsCount: selectedTestsCount, is_vip_applicable: is_vip_applicable, is_user_vip: _this2.props.is_user_vip, is_user_gold_vip: _this2.props.is_user_gold_vip }));
                        }
                    } else {
                        if (test.is_selected) {
                            finalMrp += parseInt(test.mrp);
                            price_to_pay = parseInt(test.deal_price);
                            if (test.vip && (_this2.props.is_user_vip || _this2.props.is_user_gold_vip)) {
                                vip_amount += parseInt(test.vip.vip_gold_price || 0) + parseInt(test.vip.vip_convenience_amount || 0);
                                price_to_pay = parseInt(test.vip.vip_amount || 0) + parseInt(test.vip.vip_convenience_amount || 0);
                            }
                            if (test.test.show_details) {
                                // test_info = <span className="srch-heading" style={{ float: 'right', cursor: 'pointer', color: '#e46608' }} onClick={this.testInfo.bind(this)}> Test Info</span>
                                test_info = _react2.default.createElement(
                                    'span',
                                    { style: { 'marginLeft': '5px', marginTop: '1px', display: 'inline-block', 'cursor': 'pointer' }, onClick: _this2.testInfo.bind(_this2, test.test.id, test.url) },
                                    _react2.default.createElement('img', { src: 'https://cdn.docprime.com/cp/assets/img/icons/Info.svg', style: { width: '15px' } })
                                );
                            }

                            selectedTests.push(hide_price ? _react2.default.createElement(
                                'li',
                                { key: i + "srt" },
                                _react2.default.createElement(
                                    'label',
                                    { className: 'ck-bx', style: { fontWeight: 400, fontSize: 14 } },
                                    test.test.name,
                                    _react2.default.createElement('input', { type: 'checkbox', checked: test.is_selected ? true : false }),
                                    _react2.default.createElement('span', { className: 'checkmark' })
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'test-price text-sm' },
                                    'Free'
                                )
                            ) : _react2.default.createElement(
                                'li',
                                { key: i + "srt" },
                                _react2.default.createElement(
                                    'label',
                                    { className: '' + (_this2.props.is_user_vip && !_this2.props.is_user_gold_vip ? '' : 'ck-bx'), style: { fontWeight: 400, fontSize: 14 } },
                                    test.test.name,
                                    ' ',
                                    test.test.show_details ? test_info : '',
                                    _this2.props.is_user_vip && !_this2.props.is_user_gold_vip ? '' : _react2.default.createElement('input', { type: 'checkbox', checked: test.is_selected ? true : false, onChange: _this2.toggleTest.bind(_this2, test) }),
                                    _this2.props.is_user_vip && !_this2.props.is_user_gold_vip ? '' : _react2.default.createElement('span', { className: 'checkmark' })
                                ),

                                // is_vip_applicable || is_covered_under_gold?''
                                // :
                                is_insurance_applicable || test.included_in_user_plan ? _react2.default.createElement(
                                    'span',
                                    { className: 'test-price text-sm' },
                                    '\u20B9 0 '
                                ) : price_to_pay == test.mrp.split('.')[0] ? _react2.default.createElement(
                                    'span',
                                    { className: 'test-price text-sm' },
                                    '\u20B9 ',
                                    price_to_pay
                                ) : _react2.default.createElement(
                                    'span',
                                    { className: 'test-price text-sm' },
                                    '\u20B9 ',
                                    price_to_pay,
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'test-mrp' },
                                        '\u20B9 ',
                                        test.mrp.split('.')[0]
                                    )
                                )
                            ));
                        } else {
                            price_to_pay = parseInt(test.deal_price);
                            if (test.vip && (_this2.props.is_user_vip || _this2.props.is_user_gold_vip)) {
                                price_to_pay = parseInt(test.vip.vip_amount || 0) + parseInt(test.vip.vip_convenience_amount || 0);
                            }
                            if (test.test.show_details) {
                                test_info = _react2.default.createElement(
                                    'span',
                                    { style: { 'marginLeft': '5px', marginTop: '1px', display: 'inline-block', 'cursor': 'pointer' }, onClick: _this2.testInfo.bind(_this2, test.test.id, test.url) },
                                    _react2.default.createElement('img', { src: 'https://cdn.docprime.com/cp/assets/img/icons/Info.svg', style: { width: '15px' } })
                                );
                            }

                            unSelectedTests.push(test.hide_price ? _react2.default.createElement(
                                'li',
                                { className: 'clearfix', key: i },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'test-price' },
                                    'Free'
                                )
                            ) : _react2.default.createElement(
                                'li',
                                { key: i + "srt" },
                                _react2.default.createElement(
                                    'label',
                                    { className: 'ck-bx', style: { fontWeight: 400, fontSize: 14 } },
                                    test.test.name,
                                    ' ',
                                    test.test.show_details ? test_info : '',
                                    _react2.default.createElement('input', { type: 'checkbox', checked: test.is_selected ? true : false, onChange: _this2.toggleTest.bind(_this2, test) }),
                                    _react2.default.createElement('span', { className: 'checkmark' })
                                ),
                                (is_insurance_applicable || !selectedTestsCount) && test.insurance && test.insurance.is_insurance_covered && test.insurance.is_user_insured || test.included_in_user_plan ? _react2.default.createElement(
                                    'span',
                                    { className: 'test-price text-sm' },
                                    '\u20B9 0 '
                                ) : price_to_pay == test.mrp.split('.')[0] ? _react2.default.createElement(
                                    'span',
                                    { className: 'test-price text-sm' },
                                    '\u20B9 ',
                                    price_to_pay
                                ) : _react2.default.createElement(
                                    'span',
                                    { className: 'test-price text-sm' },
                                    '\u20B9 ',
                                    price_to_pay,
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'test-mrp' },
                                        '\u20B9 ',
                                        test.mrp.split('.')[0]
                                    )
                                )
                            ));
                        }
                    }
                });
                selectedTestIds = this.props.currentLabSelectedTests.map(function (x) {
                    return x.test_id;
                });
            }

            //For Insured Person Remove unselected Tests/Packages

            if (this.props.is_user_vip && !this.props.is_user_gold_vip /*is_user_insured || is_vip_applicable || is_covered_under_gold*/) {
                    unSelectedTests = [];
                    unSelectedPackage = [];
                }

            var parsed = queryString.parse(this.props.location.search);
            if (parsed && parsed.price_list && parsed.price_list == 'true') {
                showDefaultTests = true;
            }

            var totalAmount = 0;
            if (this.props.currentLabSelectedTests && this.props.currentLabSelectedTests.length) {
                for (var i = 0; i < this.props.currentLabSelectedTests.length; i++) {
                    totalAmount = totalAmount + this.props.currentLabSelectedTests[i].deal_price;
                }
            }

            if (this.props.data.lab_tests && this.props.data.lab_tests.length && showDefaultTests) {
                defaultTests = this.props.data.lab_tests.map(function (test, i) {
                    return _react2.default.createElement(
                        'li',
                        { className: 'clearfix', key: i },
                        _react2.default.createElement(
                            'span',
                            { className: 'test-price' },
                            '\u20B9 ',
                            test.deal_price,
                            _react2.default.createElement(
                                'span',
                                { className: 'test-mrp' },
                                '\u20B9 ',
                                test.mrp.split('.')[0]
                            )
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'fw-400 text-md test-name-item /*lb-tst-cstm-pdng*/' },
                            test.test.name
                        )
                    );
                });
            }

            var is_home_collection_enabled = false;
            var distance_related_charges = 0;
            var home_pickup_charges = false;
            var testsArray = [];
            if (this.props.data && this.props.data.lab) {
                is_home_collection_enabled = this.props.data.lab.is_home_collection_enabled;
                distance_related_charges = this.props.data.distance_related_charges;
                home_pickup_charges = this.props.data.lab.home_pickup_charges;
            }

            if (this.props.currentLabSelectedTests && this.props.currentLabSelectedTests.length) {
                testsArray = this.props.currentLabSelectedTests.filter(function (x) {
                    return x.is_selected;
                });
            }

            var pickup_text = "";
            var extra_price = "";
            var showPriceTag = 0;
            var showPickupText = true;

            if (testsArray.length) {
                for (var _i = 0; _i < testsArray.length; _i++) {
                    if (!testsArray[_i].is_home_collection_enabled) {
                        showPickupText = false;
                    }
                }
            }

            if (is_home_collection_enabled && distance_related_charges == 1 && !hide_price && showPickupText) {
                pickup_text = "Home pickup charges applicable";
            }

            if (is_home_collection_enabled && !distance_related_charges && !hide_price && showPickupText) {
                pickup_text = "Home visit charges";
                showPriceTag = 1;
                extra_price = this.props.data.lab.home_pickup_charges;
            }

            if (is_insurance_applicable) {
                pickup_text = '';
            }
            var vip_discount_price = finalMrp - vip_amount;
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'widget-content pb-details pb-test nw-listing-pddng clearfix' },
                    this.props.location && this.props.location.search && this.props.location.search.includes('from=insurance_network') ? '' : _react2.default.createElement(
                        'ul',
                        { className: 'list all-test-list pdngRgt' },
                        selectedTests,
                        selectedPackage,
                        hide_price ? '' : unSelectedTests,
                        hide_price ? '' : unSelectedPackage
                    ),
                    pickup_text && (!this.props.location || !this.props.location.search || !this.props.location.search.includes('from=insurance_network')) ? _react2.default.createElement(
                        'div',
                        { className: 'clearfix homePickui' },
                        _react2.default.createElement(
                            'p',
                            { className: 'health-visit-charge' },
                            pickup_text
                        ),
                        showPriceTag ? _react2.default.createElement(
                            'p',
                            { className: 'prc-tstcoin mb-0' },
                            ' \u20B9',
                            extra_price == "" ? '0' : extra_price
                        ) : '',
                        !showPriceTag && extra_price >= 0 && extra_price ? _react2.default.createElement(
                            'p',
                            { className: 'prc-tstcoin mb-0' },
                            ' \u20B9',
                            extra_price
                        ) : ""
                    ) : "",
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'p',
                            { className: 'label-cpn text-left' },
                            'Coupon applies at booking summary'
                        )
                    ),
                    (_storage2.default.isAgent() || !hide_price && !is_user_insured) && this.props.location && this.props.location.search && this.props.location.search.includes('from=insurance_network') ? _react2.default.createElement(
                        'div',
                        { className: 'pb-view d-flex align-items-center justify-content-between' },
                        !is_vip_applicable && !is_user_insured && this.props.data && this.props.data.total_test_count && this.props.data.total_test_count != '' ? _react2.default.createElement(
                            'span',
                            { className: 'text-md fw-500' },
                            this.props.data.total_test_count,
                            ' total tests'
                        ) : '',
                        is_user_insured || is_vip_applicable || is_covered_under_gold ? '' : _react2.default.createElement(
                            'a',
                            { href: 'javascript:;', className: 'link-text text-md fw-500', onClick: this.openTests.bind(this) },
                            'View all tests'
                        )
                    ) : '',
                    (is_vip_applicable || is_user_insured) && !selectedTestsCount ? _react2.default.createElement(
                        'div',
                        { className: 'pb-view text-right' },
                        _react2.default.createElement(
                            'a',
                            { href: 'javascript:;', className: 'link-text text-md fw-700', onClick: this.searchTests.bind(this) },
                            'Search tests'
                        )
                    ) : '',
                    is_insurance_applicable ? _react2.default.createElement(
                        'div',
                        { className: 'ins-val-bx' },
                        'Covered Under Insurance'
                    ) : '',
                    this.state.showPackageInfo ? _react2.default.createElement(_packageInfo2.default, { content: this.state.packageInfoTest, toggle: this.toggle.bind(this, 'showPackageInfo') }) : ""
                ),
                showDefaultTests ? _react2.default.createElement(
                    'div',
                    { className: 'widget-content pb-details pb-test' },
                    _react2.default.createElement(
                        'h4',
                        { className: 'wc-title text-md fw-700' },
                        'Price List'
                    ),
                    _react2.default.createElement(
                        'ul',
                        { className: 'list pb-list pb-test-list' },
                        defaultTests
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'pb-view text-right' },
                        _react2.default.createElement(
                            'a',
                            { href: 'javascript:;', className: 'link-text text-md fw-700', onClick: this.openTests.bind(this) },
                            'View More & Select Tests'
                        )
                    )
                ) : '',
                !is_covered_under_gold && !is_vip_applicable && !is_insurance_applicable && vip_discount_price > 0 && false ? _react2.default.createElement(
                    'div',
                    { className: 'widget cpn-blur mrb-15 cursor-pointer', onClick: function onClick(e) {
                            e.stopPropagation();
                            var analyticData = {
                                'Category': 'ConsumerApp', 'Action': 'LabProfileVipGoldClick', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'lab-profile-gold-click'
                            };
                            _gtm2.default.sendEvent({ data: analyticData });
                            _this2.props.history.push('/vip-gold-details?is_gold=true&source=lab-profile-gold-click&lead_source=Docprime');
                        } },
                    _react2.default.createElement(
                        'div',
                        { className: 'widget-content d-flex jc-spaceb align-item-center' },
                        _react2.default.createElement(
                            'div',
                            { className: 'gold-crd-lft' },
                            _react2.default.createElement(
                                'p',
                                null,
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    'Save \u20B9',
                                    vip_discount_price
                                ),
                                ' on this appointment '
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'gld-crd-sb-txt' },
                                'Become ',
                                _react2.default.createElement('img', { src: "/assets" + '/img/gold-sm.png' }),
                                ' member'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'gold-crd-rgt' },
                            _react2.default.createElement(
                                'p',
                                null,
                                'Get Gold'
                            )
                        )
                    )
                ) : ''
            );
        }
    }]);

    return LabTests;
}(_react2.default.Component);

exports.default = LabTests;

/***/ }),

/***/ "./dev/js/components/diagnosis/commons/labTests/packageInfo.js":
/*!*********************************************************************!*\
  !*** ./dev/js/components/diagnosis/commons/labTests/packageInfo.js ***!
  \*********************************************************************/
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
    var toggle = _ref.toggle,
        content = _ref.content;

    var name = "";
    var pre_test_info = "";
    var why = "";
    if (content) {
        name = content.test.name;
        pre_test_info = content.test.pre_test_info;
        why = content.test.why;
    }
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement("div", { className: "cancel-overlay", onClick: toggle }),
        _react2.default.createElement(
            "div",
            { className: "widget cancel-appointment-div cancel-popup" },
            _react2.default.createElement(
                "div",
                { className: "widget-header text-center action-screen-header" },
                _react2.default.createElement(
                    "p",
                    { className: "fw-500 cancel-appointment-head" },
                    "Package Info"
                ),
                _react2.default.createElement("img", { src: "/assets" + "/img/icons/close.png", className: "close-modal", onClick: toggle }),
                _react2.default.createElement("hr", null)
            ),
            _react2.default.createElement(
                "div",
                { className: "", style: { padding: '0px 15px' } },
                _react2.default.createElement(
                    "div",
                    { className: "qa-container" },
                    _react2.default.createElement(
                        "h4",
                        { className: "pkg-qus" },
                        "What is this test?"
                    ),
                    _react2.default.createElement("p", { className: "pkg-ans", dangerouslySetInnerHTML: { __html: why } })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "qa-container" },
                    _react2.default.createElement(
                        "h4",
                        { className: "pkg-qus" },
                        "What is the preparation needed for doing this test?"
                    ),
                    _react2.default.createElement(
                        "p",
                        { className: "pkg-ans" },
                        pre_test_info
                    )
                )
            )
        )
    );
};

/***/ }),

/***/ "./dev/js/components/diagnosis/commons/labTests/packageTest.js":
/*!*********************************************************************!*\
  !*** ./dev/js/components/diagnosis/commons/labTests/packageTest.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _expansionPanel = __webpack_require__(/*! ./expansionPanel */ "./dev/js/components/diagnosis/commons/labTests/expansionPanel.js");

var _expansionPanel2 = _interopRequireDefault(_expansionPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PackageTest = function (_React$Component) {
    _inherits(PackageTest, _React$Component);

    function PackageTest(props) {
        _classCallCheck(this, PackageTest);

        var _this = _possibleConstructorReturn(this, (PackageTest.__proto__ || Object.getPrototypeOf(PackageTest)).call(this, props));

        _this.state = {
            testListVisible: props.test.is_selected ? true : false
        };
        return _this;
    }

    _createClass(PackageTest, [{
        key: 'packageNameClick',
        value: function packageNameClick() {
            this.setState({ testListVisible: !this.state.testListVisible });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                i = _props.i,
                test = _props.test,
                toggle = _props.toggle;
            var deal_price = test.deal_price,
                mrp = test.mrp,
                pre_test_info = test.pre_test_info,
                insurance = test.insurance,
                vip = test.vip;

            var test_package = test.package || [];
            var test_info = void 0;
            var price_to_pay = deal_price;
            if (vip && (this.props.is_user_vip || this.props.is_user_gold_vip)) {
                price_to_pay = parseInt(vip.vip_amount || 0) + parseInt(vip.vip_convenience_amount || 0);
            }
            if (test.test.show_details) {
                test_info = _react2.default.createElement(
                    'span',
                    { style: { 'marginRight': '5px', marginTop: '2px', display: 'inline-block', 'cursor': 'pointer' }, onClick: this.props.testInfo.bind(this, test.test.id, test.test.url) },
                    _react2.default.createElement('img', { src: 'https://cdn.docprime.com/cp/assets/img/icons/Info.svg', style: { width: '15px' } })
                );
            }
            return _react2.default.createElement(
                'li',
                { key: i, style: { paddingRight: '0px' }, className: 'clearfix pdngRgt' },
                _react2.default.createElement(
                    'label',
                    { className: '' + (this.props.is_user_vip && !this.props.is_user_gold_vip ? '' : 'ck-bx'), style: { fontWeight: '400', fontSize: '14px' } },
                    _react2.default.createElement(
                        'p',
                        { style: { paddingRight: '120px' } },
                        test.test.name,
                        ' ',
                        test.test.show_details ? test_info : ''
                    ),
                    test.number_of_tests ? _react2.default.createElement(
                        'span',
                        { style: { fontSize: '12px', fontWeight: '600', color: '#757575', display: 'block', marginTop: 5 } },
                        this.props.is_insurance_applicable ? '' : '(includes ' + test.number_of_tests + ' Tests)',
                        this.props.is_plan_applicable && !this.props.is_insurance_applicable ? _react2.default.createElement(
                            'p',
                            { className: 'pkg-discountCpn', style: { display: 'inline-block', float: 'right' } },
                            'Docprime Care Benefit'
                        ) : ''
                    ) : '',
                    this.props.is_user_vip && !this.props.is_user_gold_vip ? '' : this.props.hide_price ? _react2.default.createElement('input', { type: 'checkbox', value: 'on', checked: this.props.test.is_selected ? true : false }) : _react2.default.createElement('input', { type: 'checkbox', value: 'on', checked: this.props.test.is_selected ? true : false, onChange: function onChange(e) {
                            _this2.props.toggleTest(test);
                        } }),
                    this.props.is_user_vip && !this.props.is_user_gold_vip ? '' : _react2.default.createElement('span', { className: 'checkmark' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'pdng-left-pkg' },
                    _react2.default.createElement('span', { style: { paddingRight: '0px' } }),
                    (this.props.is_insurance_applicable || !this.props.selectedTestsCount) && insurance.is_insurance_covered || !test_package.length ? '' : _react2.default.createElement(
                        'button',
                        { className: 'pkg-info-btn info-san', onClick: function onClick() {
                                return _this2.packageNameClick();
                            } },
                        _react2.default.createElement(
                            'span',
                            { className: '' },
                            this.state.testListVisible ? 'Hide details' : 'View details'
                        )
                    )
                ),
                this.props.is_user_vip && !this.props.is_user_gold_vip || this.props.is_plan_applicable || test.hide_price || (this.props.is_insurance_applicable || !this.props.selectedTestsCount) && insurance.is_insurance_covered && insurance.is_user_insured ? "" : price_to_pay == mrp.split('.')[0] ? _react2.default.createElement(
                    'span',
                    { className: 'test-price text-sm' },
                    '\u20B9 ',
                    price_to_pay
                ) : _react2.default.createElement(
                    'span',
                    { className: 'test-price text-sm' },
                    '\u20B9 ',
                    price_to_pay,
                    _react2.default.createElement(
                        'span',
                        { className: 'test-mrp' },
                        '\u20B9 ',
                        parseInt(mrp)
                    )
                ),
                this.props.is_plan_applicable || (this.props.is_insurance_applicable || !this.props.selectedTestsCount) && insurance.is_insurance_covered && insurance.is_user_insured ? _react2.default.createElement(
                    'span',
                    { className: 'test-price text-sm' },
                    '\u20B9 0'
                ) : '',
                this.props.is_user_vip && !this.props.is_user_gold_vip ? _react2.default.createElement(
                    'span',
                    { className: 'test-price text-sm' },
                    '\u20B9 ',
                    price_to_pay
                ) : '',
                !this.props.is_insurance_applicable && this.state.testListVisible ? _react2.default.createElement(
                    'ul',
                    { className: 'list drop-down-list lisitng-in-lab' },
                    test_package.map(function (pack, j) {
                        return _react2.default.createElement(_expansionPanel2.default, {
                            key: j,
                            heading: pack.name,
                            content: pack.why,
                            contentList: pack.parameters || []
                        });
                    })
                ) : ''
            );
        }
    }]);

    return PackageTest;
}(_react2.default.Component);

exports.default = PackageTest;

/***/ }),

/***/ "./dev/js/components/diagnosis/lab/LabView.js":
/*!****************************************************!*\
  !*** ./dev/js/components/diagnosis/lab/LabView.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(/*! ../commons/labDetails/index.js */ "./dev/js/components/diagnosis/commons/labDetails/index.js");

var _index2 = _interopRequireDefault(_index);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LabView = function (_React$Component) {
    _inherits(LabView, _React$Component);

    function LabView(props) {
        _classCallCheck(this, LabView);

        var _this = _possibleConstructorReturn(this, (LabView.__proto__ || Object.getPrototypeOf(LabView)).call(this, props));

        var footerData = null;
        if (_this.props.initialServerData) {
            footerData = _this.props.initialServerData.footerData;
        }
        _this.state = {
            footerData: footerData,
            seoFriendly: _this.props.match.url.includes('-lpp')
        };
        return _this;
    }

    _createClass(LabView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (window) {
                window.scrollTo(0, 0);
            }
            if (this.state.seoFriendly) {
                this.props.getFooterData(this.props.match.url.split('/')[1]).then(function (footerData) {
                    if (footerData) {
                        _this2.setState({ footerData: footerData });
                    }
                });
            }
        }
    }, {
        key: 'bookLab',
        value: function bookLab() {
            var data = {
                'Category': 'ConsumerApp', 'Action': 'LabBookingClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lab-booking-clicked'
            };
            _gtm2.default.sendEvent({ data: data });
            /*
                    let testIds = this.props.LABS[this.props.selectedLab] || []
            
                    testIds = testIds.tests.map(x => x.test_id)
            
                    this.props.getLabById(this.props.selectedLab, testIds)
            */
            if (this.state.seoFriendly) {
                this.props.history.push(window.location.pathname + '/booking?lab_id=' + this.props.selectedLab);
            } else {
                this.props.history.push('/lab/' + this.props.selectedLab + '/book');
            }
        }
    }, {
        key: 'getMetaTagsData',
        value: function getMetaTagsData(seoData) {
            var title = "";
            var description = "";
            if (seoData) {
                title = seoData.title || "";
                description = seoData.description || "";
            }
            return { title: title, description: description };
        }
    }, {
        key: 'render',
        value: function render() {

            var lab_id = this.props.selectedLab;
            if (this.props.initialServerData && this.props.initialServerData.labId) {
                lab_id = this.props.initialServerData.labId;
            }
            var seo_url = "";
            if (this.props.LABS[lab_id]) {
                seo_url = this.props.LABS[lab_id].lab.url;
                if (seo_url) {
                    seo_url = "/" + seo_url;
                }
            }
            var is_plan_applicable = false;
            var is_insurance_applicable = false;
            var hide_price = false;
            var is_user_insured = false;
            var is_vip_applicable = false;
            var is_user_gold_vip = false;
            var is_covered_under_gold = false;
            var is_user_vip = false;

            //For Insured Person Remove unselected Tests/Packages

            if (this.props.profiles && this.props.profiles[this.props.defaultProfile]) {
                is_user_insured = this.props.profiles[this.props.defaultProfile].is_insured;
                is_user_vip = this.props.profiles[this.props.defaultProfile].is_vip_member;
                is_user_gold_vip = this.props.profiles[this.props.defaultProfile].is_vip_gold_member;
            }
            if (this.props.currentLabSelectedTests && this.props.currentLabSelectedTests.length) {

                var selectedTests = this.props.currentLabSelectedTests.filter(function (x) {
                    return x.is_selected;
                });
                is_plan_applicable = selectedTests.length ? true : false;
                is_insurance_applicable = selectedTests.length ? true : false;
                is_plan_applicable = selectedTests.length ? true : false;

                this.props.currentLabSelectedTests.map(function (test, i) {

                    if (test.is_selected) {

                        //Check Selected Tests for Insurance

                        if (test.insurance && test.insurance.is_insurance_covered && test.insurance.insurance_threshold_amount >= parseInt(test.deal_price) && test.insurance.is_user_insured) {} else {
                            is_insurance_applicable = false;
                        }

                        //Check for User Plans

                        if (test.included_in_user_plan) {} else {
                            is_plan_applicable = false;
                        }

                        if (test.vip && test.vip.covered_under_vip) {
                            is_vip_applicable = is_user_gold_vip;
                        } else {}
                        if (test.vip && test.vip.is_gold_member) {
                            is_covered_under_gold = is_user_insured;
                        }
                    }

                    if (test.hide_price) {
                        hide_price = true;
                    }
                });
            }

            // check if this was the landing page
            var landing_page = false;
            if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window.ON_LANDING_PAGE) {
                landing_page = true;
            }

            return _react2.default.createElement(
                'div',
                { className: 'profile-body-wrap' },
                _react2.default.createElement(_DesktopProfileHeader2.default, { showSearch: true }),
                _react2.default.createElement(
                    'section',
                    { className: 'container parent-section book-appointment-section' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row main-row parent-section-row' },
                        _react2.default.createElement(_LeftBar2.default, null),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12 col-md-7 col-lg-7 center-column' },
                            this.props.LABS[lab_id] && this.props.LABS[lab_id].tests ? _react2.default.createElement(
                                'div',
                                null,
                                this.props.LABS[lab_id] && this.props.LABS[lab_id].lab && _react2.default.createElement(_HelmetTags2.default, { tagsData: {
                                        title: this.getMetaTagsData(this.props.LABS[lab_id].lab.seo).title,
                                        description: this.getMetaTagsData(this.props.LABS[lab_id].lab.seo).description,
                                        canonicalUrl: '' + _config2.default.API_BASE_URL + (seo_url || this.props.match.url)
                                    }, noIndex: this.props.location && this.props.location.pathname && this.props.location.pathname.includes('ck-birla-hospital-for-women-in-sector-50-gurgaon-lpp') }),
                                _react2.default.createElement(_index2.default, _extends({}, this.props, { is_insurance_applicable: is_insurance_applicable, data: this.props.LABS[lab_id], is_plan_applicable: is_plan_applicable, hide_price: hide_price, is_user_insured: is_user_insured, seoFriendly: this.state.seoFriendly, is_vip_applicable: is_vip_applicable, is_covered_under_gold: is_covered_under_gold, is_user_vip: is_user_vip, is_user_gold_vip: is_user_gold_vip })),
                                _react2.default.createElement(
                                    'button',
                                    { disabled: this.props.currentLabSelectedTests.filter(function (x) {
                                            return x.is_selected;
                                        }).length < 1, onClick: this.bookLab.bind(this), className: 'ratbtn-btn p-3 v-btn v-btn-primary btn-lg fixed horizontal bottom no-round btn-lg text-lg sticky-btn' },
                                    is_insurance_applicable || is_plan_applicable || true ? '' : _react2.default.createElement(
                                        'span',
                                        { className: 'coupon-auto-applied-lab' },
                                        '*Coupon auto applied on checkout'
                                    ),
                                    'Book',
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'text-xs selected-option static-btn book-right-align-text', style: { verticalAlign: 2, marginRight: 8, marginLeft: 10 } },
                                        '(',
                                        this.props.currentLabSelectedTests.filter(function (x) {
                                            return x.is_selected;
                                        }).length,
                                        ' Selected) '
                                    )
                                )
                            ) : _react2.default.createElement(_Loader2.default, null)
                        ),
                        _react2.default.createElement(_RightBar2.default, { extraClass: ' chat-float-btn-2', type: 'lab', msgTemplate: 'gold_general_template' })
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

/***/ "./dev/js/components/diagnosis/lab/index.js":
/*!**************************************************!*\
  !*** ./dev/js/components/diagnosis/lab/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LabView = __webpack_require__(/*! ./LabView.js */ "./dev/js/components/diagnosis/lab/LabView.js");

var _LabView2 = _interopRequireDefault(_LabView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _LabView2.default;

/***/ }),

/***/ "./dev/js/containers/diagnosis/Lab.js":
/*!********************************************!*\
  !*** ./dev/js/containers/diagnosis/Lab.js ***!
  \********************************************/
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

var _index2 = __webpack_require__(/*! ../../components/diagnosis/lab/index.js */ "./dev/js/components/diagnosis/lab/index.js");

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lab = function (_React$Component) {
    _inherits(Lab, _React$Component);

    function Lab(props) {
        _classCallCheck(this, Lab);

        var _this = _possibleConstructorReturn(this, (Lab.__proto__ || Object.getPrototypeOf(Lab)).call(this, props));

        var l_id = _this.props.match.params.id || _this.get_lab_id_by_url(_this.props.match.url);
        _this.state = {
            selectedLab: l_id,
            defaultTest: []
        };
        return _this;
    }

    _createClass(Lab, [{
        key: 'get_lab_id_by_url',
        value: function get_lab_id_by_url(url) {
            for (var l_id in this.props.LABS) {
                if (this.props.LABS[l_id].lab && url.includes(this.props.LABS[l_id].lab.url)) {
                    return l_id;
                }
            }
            return null;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var lab_id = void 0;
            if (this.props.match.params.id) {
                var testIds = this.props.lab_test_data[this.props.match.params.id] || [];
                lab_id = this.props.match.params.id;
                var tests = testIds.map(function (x) {
                    return x.id;
                });
                this.props.getLabById(lab_id, tests);
            } else {
                var url = this.props.match.url;
                if (url) {
                    url = url.split("/")[1];
                }
                this.props.getLabByUrl(url, [], function (labId) {
                    if (labId) {
                        lab_id = labId;
                        _this2.setState({ selectedLab: labId });
                        var _testIds = _this2.props.lab_test_data[labId] || [];
                        var _tests = _testIds.map(function (x) {
                            return x.id;
                        });
                        _this2.props.getLabById(labId, _tests);
                    }
                });
            }

            //always clear selected time at lab profile
            var slot = { time: {} };
            this.props.selectLabTimeSLot(slot, false);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_index3.default, _extends({}, this.props, { selectedLab: this.state.selectedLab }));
        }
    }], [{
        key: 'loadData',
        value: function loadData(store, match) {
            if (match.params.id) {
                return store.dispatch((0, _index.getLabById)(match.params.id));
            } else {
                var url = match.url;
                if (url) {
                    url = url.split("/")[1];
                }
                return new Promise(function (resolve, reject) {
                    store.dispatch((0, _index.getLabByUrl)(url, [], function (labId, url) {
                        if (labId) {
                            if (match.url.includes('-lpp')) {
                                (0, _index.getFooterData)(match.url.split("/")[1])().then(function (footerData) {
                                    footerData = footerData || null;
                                    resolve({ labId: labId, footerData: footerData });
                                }).catch(function (e) {
                                    resolve({ labId: labId });
                                });
                            } else {
                                resolve({ labId: labId });
                            }
                        } else {
                            reject({
                                url: url
                            });
                        }
                    }));
                });
            }
        }
    }]);

    return Lab;
}(_react2.default.Component);

Lab.contextTypes = {
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

    var _state$SEARCH_CRITERI = state.SEARCH_CRITERIA_LABS,
        lab_test_data = _state$SEARCH_CRITERI.lab_test_data,
        selectedLocation = _state$SEARCH_CRITERI.selectedLocation,
        selectedCriterias = _state$SEARCH_CRITERI.selectedCriterias,
        filterCriteria = _state$SEARCH_CRITERI.filterCriteria,
        LOADED_SEARCH_CRITERIA_LAB = _state$SEARCH_CRITERI.LOADED_SEARCH_CRITERIA_LAB,
        currentLabSelectedTests = _state$SEARCH_CRITERI.currentLabSelectedTests;


    var LABS = state.LABS;
    var _state$USER = state.USER,
        rated_appoinments = _state$USER.rated_appoinments,
        profiles = _state$USER.profiles,
        selectedProfile = _state$USER.selectedProfile,
        defaultProfile = _state$USER.defaultProfile,
        app_download_list = _state$USER.app_download_list,
        device_info = _state$USER.device_info;


    return {
        lab_test_data: lab_test_data,
        selectedCriterias: selectedCriterias,
        LABS: LABS, initialServerData: initialServerData,
        rated_appoinments: rated_appoinments,
        profiles: profiles,
        selectedProfile: selectedProfile,
        currentLabSelectedTests: currentLabSelectedTests,
        selectedLocation: selectedLocation,
        defaultProfile: defaultProfile,
        app_download_list: app_download_list,
        device_info: device_info
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        getLabByUrl: function getLabByUrl(url, testIds, cb) {
            return dispatch((0, _index.getLabByUrl)(url, testIds, cb));
        },
        getLabById: function getLabById(labId, testIds) {
            return dispatch((0, _index.getLabById)(labId, testIds));
        },
        selectLabTimeSLot: function selectLabTimeSLot(slot, reschedule) {
            return dispatch((0, _index.selectLabTimeSLot)(slot, reschedule));
        },
        toggleDiagnosisCriteria: function toggleDiagnosisCriteria(type, criteria, forceAdd) {
            return dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria, forceAdd));
        },
        getRatingCompliments: function getRatingCompliments(callback) {
            return dispatch((0, _index.getRatingCompliments)(callback));
        },
        createAppointmentRating: function createAppointmentRating(appointmentData, callback) {
            return dispatch((0, _index.createAppointmentRating)(appointmentData, callback));
        },
        updateAppointmentRating: function updateAppointmentRating(ratingData, callback) {
            return dispatch((0, _index.updateAppointmentRating)(ratingData, callback));
        },
        closeAppointmentRating: function closeAppointmentRating(doctorId, callback) {
            return dispatch((0, _index.closeAppointmentRating)(doctorId, callback));
        },
        closeAppointmentPopUp: function closeAppointmentPopUp(id, callback) {
            return dispatch((0, _index.closeAppointmentPopUp)(id, callback));
        },
        getFooterData: function getFooterData(url) {
            return dispatch((0, _index.getFooterData)(url));
        },
        getLabTests: function getLabTests(labId, testName) {
            return dispatch((0, _index.getLabTests)(labId, testName));
        },
        savePincode: function savePincode(pincode) {
            return dispatch((0, _index.savePincode)(pincode));
        },
        getAllRatings: function getAllRatings(content_type, object_id, page, cb) {
            return dispatch((0, _index.getAllRatings)(content_type, object_id, page, cb));
        },
        selectSearchType: function selectSearchType(type) {
            return dispatch((0, _index.selectSearchType)(type));
        },
        getDownloadAppBannerList: function getDownloadAppBannerList(cb) {
            return dispatch((0, _index.getDownloadAppBannerList)(cb));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Lab);

/***/ }),

/***/ "./dev/js/helpers/utils.js":
/*!*********************************!*\
  !*** ./dev/js/helpers/utils.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.buildOpenBanner = buildOpenBanner;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buildOpenBanner(lab_timing) {
    var lab_timing_data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var next_lab_timing = arguments[2];
    var next_lab_timing_data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    var is_open_now = false;
    var open_next_today = false;

    var time_now = new Date().getHours() + 0.5;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = lab_timing_data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var ltd = _step.value;

            if (time_now <= ltd.end && time_now >= ltd.start) {
                is_open_now = true;
                return _react2.default.createElement(
                    'p',
                    { style: { fontSize: 12 } },
                    lab_timing
                );
            }
            if (time_now < ltd.start) {
                open_next_today = ltd.start;
                open_next_today = _decimalToTime(open_next_today);
                break;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    if (open_next_today) {
        return _react2.default.createElement(
            'p',
            { style: { fontSize: 12 } },
            'Opens next at ',
            open_next_today,
            ', today'
        );
    }

    var WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var next_open = false;
    var next_open_today = "";
    if (next_lab_timing_data) {
        var today = new Date();
        var weekDayNumber = today.getDay();
        weekDayNumber = weekDayNumber == 0 ? 6 : weekDayNumber - 1;
        for (var i in next_lab_timing_data) {
            next_open = next_lab_timing_data[i][0].start;
            next_open = _decimalToTime(next_open);
            if (i - weekDayNumber == 1) {
                next_open_today = 'tomorrow';
            } else {
                next_open_today = WEEK_DAYS[i];
            }
            break;
        }
    }
    if (next_open && next_open_today) {
        return _react2.default.createElement(
            'p',
            { style: { fontSize: 12 } },
            'Opens next at ',
            next_open,
            ', ',
            next_open_today
        );
    }

    return "Closed";
}

function _decimalToTime(time) {
    time = time.toString();
    var hours = time.split('.')[0];
    var minutes = time.split('.')[1];
    hours = parseInt(hours);
    if (minutes == '5') {
        minutes = ':30';
    } else {
        minutes = "";
    }
    var day_time = "AM";
    if (hours >= 12) {
        day_time = "PM";
    }
    hours = hours % 12;
    return '' + hours + minutes + ' ' + day_time;
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9SYXRpbmdTdGFycy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvY29tbW9ucy9sYWJEZXRhaWxzL0xhYkRldGFpbC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvY29tbW9ucy9sYWJEZXRhaWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2RpYWdub3Npcy9jb21tb25zL2xhYlRlc3RzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2RpYWdub3Npcy9jb21tb25zL2xhYlRlc3RzL2xhYlRlc3RzLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2RpYWdub3Npcy9jb21tb25zL2xhYlRlc3RzL3BhY2thZ2VJbmZvLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2RpYWdub3Npcy9jb21tb25zL2xhYlRlc3RzL3BhY2thZ2VUZXN0LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2RpYWdub3Npcy9sYWIvTGFiVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvbGFiL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL2RpYWdub3Npcy9MYWIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2hlbHBlcnMvdXRpbHMuanMiXSwibmFtZXMiOlsiUmF0aW5nU3RhcnMiLCJwcm9wcyIsInN0YXRlIiwiYXZlcmFnZV9yYXRpbmciLCJyYXRpbmdfY291bnQiLCJyYXRpbmciLCJNYXRoIiwiY2VpbCIsInJhdGluZ0FycmF5IiwiaSIsImZsb29yIiwicHVzaCIsIkFTU0VUU19CQVNFX1VSTCIsIndpZHRoIiwibWFyZ2luUmlnaHQiLCJoZWlnaHQiLCJlbXB0eVN0YXJzIiwianVzdGlmeUNlbnRlciIsImp1c3RpZnlDb250ZW50IiwiUmVhY3QiLCJDb21wb25lbnQiLCJMYWJEZXRhaWxzIiwid2luZG93Iiwic2Nyb2xsVG8iLCJhcHBfZG93bmxvYWRfbGlzdCIsImxlbmd0aCIsImdldERvd25sb2FkQXBwQmFubmVyTGlzdCIsInJlc3AiLCJkYXRhIiwic2hvd0Rvd25sb2FkQXBwV2lkZ2V0IiwiZGF0YUxpc3QiLCJsYW5kaW5nX3BhZ2UiLCJPTl9MQU5ESU5HX1BBR0UiLCJkb3dubG9hZEFwcEJ1dHRvbkRhdGEiLCJtYXAiLCJiYW5uZXIiLCJpc2VuYWJsZWQiLCJtYXRjaCIsInVybCIsImluY2x1ZGVzIiwiZW5kc193aXRoIiwic3RhcnRzX3dpdGgiLCJPYmplY3QiLCJ2YWx1ZXMiLCJndG1UcmFjayIsIkdUTSIsImdldFVzZXJJZCIsImRldmljZV9pbmZvIiwic2VuZEV2ZW50Iiwib3BlbiIsIlVSTCIsInNlb0ZyaWVuZGx5IiwiaGlzdG9yeSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJsYWIiLCJpZCIsImFib3V0IiwiYWRkcmVzcyIsImxhYl9pbWFnZSIsImxhdCIsImxvbmciLCJuYW1lIiwicHJpbWFyeV9tb2JpbGUiLCJjaXR5Iiwic3VibG9jYWxpdHkiLCJsb2NhbGl0eSIsImxhYl90aHVtYm5haWwiLCJsYWJfdGltaW5nIiwibGFiX3RpbWluZ19kYXRhIiwibXJwIiwibmV4dF9sYWJfdGltaW5nIiwibmV4dF9sYWJfdGltaW5nX2RhdGEiLCJ0b3RhbF90ZXN0X2NvdW50IiwiZG93bmxvYWRCdXR0b24iLCJiaW5kIiwidG9Mb3dlckNhc2UiLCJtYXJnaW5Ub3AiLCJ1bnJhdGVkX2FwcG9pbnRtZW50Iiwic3BsaXQiLCJpc191c2VyX3ZpcCIsImlzX3VzZXJfZ29sZF92aXAiLCJvcGVuVGVzdHMiLCJkaXNwbGF5X3JhdGluZ193aWRnZXQiLCJMYWJUZXN0cyIsInF1ZXJ5U3RyaW5nIiwicmVxdWlyZSIsInNob3dQYWNrYWdlSW5mbyIsInBhY2thZ2VJbmZvVGVzdCIsIndoaWNoIiwic2V0U3RhdGUiLCJ0ZXN0X3RvX3RvZ2dsZSIsInRlc3QiLCJhc3NpZ24iLCJhZGRfdG9fY29tbW9uIiwidG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEiLCJ0ZXN0X2lkIiwiZXZlbnQiLCJsYWJfaWQiLCJzZWxlY3RlZExhYiIsInNlbGVjdGVkX3Rlc3RfaWRzIiwibGFiX3Rlc3RfZGF0YSIsIngiLCJzZWxlY3RlZExvY2F0aW9uIiwiZ2VvbWV0cnkiLCJsbmciLCJzdG9wUHJvcGFnYXRpb24iLCJzZWxlY3RTZWFyY2hUeXBlIiwiaXNfcGFja2FnZSIsIm51bWJlcl9vZl90ZXN0cyIsImRlZmF1bHRUZXN0cyIsInNob3dEZWZhdWx0VGVzdHMiLCJoaWRlX3ByaWNlIiwic2VsZWN0ZWRUZXN0SWRzIiwic2VsZWN0ZWRUZXN0cyIsInNlbGVjdGVkUGFja2FnZSIsInVuU2VsZWN0ZWRUZXN0cyIsInVuU2VsZWN0ZWRQYWNrYWdlIiwidGVzdF9pbmZvIiwic2hvd19kZXRhaWxzIiwiaXNfcGxhbl9hcHBsaWNhYmxlIiwiaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUiLCJpc192aXBfYXBwbGljYWJsZSIsImlzX2NvdmVyZWRfdW5kZXJfZ29sZCIsImlzX3VzZXJfaW5zdXJlZCIsInNlbGVjdGVkVGVzdHNDb3VudCIsInZpcF9hbW91bnQiLCJmaW5hbE1ycCIsInByaWNlX3RvX3BheSIsInByb2ZpbGVzIiwiZGVmYXVsdFByb2ZpbGUiLCJpc19pbnN1cmVkIiwiY3VycmVudExhYlNlbGVjdGVkVGVzdHMiLCJmaWx0ZXIiLCJpc19zZWxlY3RlZCIsInBhcnNlSW50IiwidmlwIiwidmlwX2dvbGRfcHJpY2UiLCJ2aXBfY29udmVuaWVuY2VfYW1vdW50IiwidG9nZ2xlIiwidG9nZ2xlVGVzdCIsInRlc3RJbmZvIiwiZGVhbF9wcmljZSIsImRpc3BsYXkiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJpbmNsdWRlZF9pbl91c2VyX3BsYW4iLCJpbnN1cmFuY2UiLCJpc19pbnN1cmFuY2VfY292ZXJlZCIsInBhcnNlZCIsInBhcnNlIiwic2VhcmNoIiwicHJpY2VfbGlzdCIsInRvdGFsQW1vdW50IiwibGFiX3Rlc3RzIiwiaXNfaG9tZV9jb2xsZWN0aW9uX2VuYWJsZWQiLCJkaXN0YW5jZV9yZWxhdGVkX2NoYXJnZXMiLCJob21lX3BpY2t1cF9jaGFyZ2VzIiwidGVzdHNBcnJheSIsInBpY2t1cF90ZXh0IiwiZXh0cmFfcHJpY2UiLCJzaG93UHJpY2VUYWciLCJzaG93UGlja3VwVGV4dCIsInZpcF9kaXNjb3VudF9wcmljZSIsIlNUT1JBR0UiLCJpc0FnZW50Iiwic2VhcmNoVGVzdHMiLCJlIiwiYW5hbHl0aWNEYXRhIiwiY29udGVudCIsInByZV90ZXN0X2luZm8iLCJ3aHkiLCJwYWRkaW5nIiwiX19odG1sIiwiUGFja2FnZVRlc3QiLCJ0ZXN0TGlzdFZpc2libGUiLCJ0ZXN0X3BhY2thZ2UiLCJwYWNrYWdlIiwicGFkZGluZ1JpZ2h0IiwiY29sb3IiLCJmbG9hdCIsInBhY2thZ2VOYW1lQ2xpY2siLCJwYWNrIiwiaiIsInBhcmFtZXRlcnMiLCJMYWJWaWV3IiwiZm9vdGVyRGF0YSIsImluaXRpYWxTZXJ2ZXJEYXRhIiwiZ2V0Rm9vdGVyRGF0YSIsInRoZW4iLCJzZW9EYXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImxhYklkIiwic2VvX3VybCIsIkxBQlMiLCJpc192aXBfbWVtYmVyIiwiaXNfdmlwX2dvbGRfbWVtYmVyIiwiaW5zdXJhbmNlX3RocmVzaG9sZF9hbW91bnQiLCJjb3ZlcmVkX3VuZGVyX3ZpcCIsImlzX2dvbGRfbWVtYmVyIiwidGVzdHMiLCJnZXRNZXRhVGFnc0RhdGEiLCJzZW8iLCJjYW5vbmljYWxVcmwiLCJDT05GSUciLCJBUElfQkFTRV9VUkwiLCJib29rTGFiIiwidmVydGljYWxBbGlnbiIsIm1hcmdpbkxlZnQiLCJMYWIiLCJsX2lkIiwicGFyYW1zIiwiZ2V0X2xhYl9pZF9ieV91cmwiLCJkZWZhdWx0VGVzdCIsInRlc3RJZHMiLCJnZXRMYWJCeUlkIiwiZ2V0TGFiQnlVcmwiLCJzbG90IiwidGltZSIsInNlbGVjdExhYlRpbWVTTG90Iiwic3RvcmUiLCJkaXNwYXRjaCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiY2F0Y2giLCJjb250ZXh0VHlwZXMiLCJyb3V0ZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJwYXNzZWRQcm9wcyIsInN0YXRpY0NvbnRleHQiLCJTRUFSQ0hfQ1JJVEVSSUFfTEFCUyIsInNlbGVjdGVkQ3JpdGVyaWFzIiwiZmlsdGVyQ3JpdGVyaWEiLCJMT0FERURfU0VBUkNIX0NSSVRFUklBX0xBQiIsIlVTRVIiLCJyYXRlZF9hcHBvaW5tZW50cyIsInNlbGVjdGVkUHJvZmlsZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNiIiwicmVzY2hlZHVsZSIsInR5cGUiLCJjcml0ZXJpYSIsImZvcmNlQWRkIiwiZ2V0UmF0aW5nQ29tcGxpbWVudHMiLCJjYWxsYmFjayIsImNyZWF0ZUFwcG9pbnRtZW50UmF0aW5nIiwiYXBwb2ludG1lbnREYXRhIiwidXBkYXRlQXBwb2ludG1lbnRSYXRpbmciLCJyYXRpbmdEYXRhIiwiY2xvc2VBcHBvaW50bWVudFJhdGluZyIsImRvY3RvcklkIiwiY2xvc2VBcHBvaW50bWVudFBvcFVwIiwiZ2V0TGFiVGVzdHMiLCJ0ZXN0TmFtZSIsInNhdmVQaW5jb2RlIiwicGluY29kZSIsImdldEFsbFJhdGluZ3MiLCJjb250ZW50X3R5cGUiLCJvYmplY3RfaWQiLCJwYWdlIiwiYnVpbGRPcGVuQmFubmVyIiwiaXNfb3Blbl9ub3ciLCJvcGVuX25leHRfdG9kYXkiLCJ0aW1lX25vdyIsIkRhdGUiLCJnZXRIb3VycyIsImx0ZCIsImVuZCIsInN0YXJ0IiwiX2RlY2ltYWxUb1RpbWUiLCJXRUVLX0RBWVMiLCJuZXh0X29wZW4iLCJuZXh0X29wZW5fdG9kYXkiLCJ0b2RheSIsIndlZWtEYXlOdW1iZXIiLCJnZXREYXkiLCJ0b1N0cmluZyIsImhvdXJzIiwibWludXRlcyIsImRheV90aW1l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QUNELFFBQUl3USxhQUFhQyxlQUFqQixFQUFrQztBQUM5QixlQUFPO0FBQUE7QUFBQSxjQUFHLE9BQU8sRUFBRWpJLFVBQVUsRUFBWixFQUFWO0FBQUE7QUFBNENnSSxxQkFBNUM7QUFBQTtBQUF5REM7QUFBekQsU0FBUDtBQUNIOztBQUVELFdBQU8sUUFBUDtBQUVIOztBQUdELFNBQVNILGNBQVQsQ0FBd0JwRCxJQUF4QixFQUE4QjtBQUMxQkEsV0FBT0EsS0FBSzJELFFBQUwsRUFBUDtBQUNBLFFBQUlDLFFBQVE1RCxLQUFLNUksS0FBTCxDQUFXLEdBQVgsRUFBZ0IsQ0FBaEIsQ0FBWjtBQUNBLFFBQUl5TSxVQUFVN0QsS0FBSzVJLEtBQUwsQ0FBVyxHQUFYLEVBQWdCLENBQWhCLENBQWQ7QUFDQXdNLFlBQVFoSixTQUFTZ0osS0FBVCxDQUFSO0FBQ0EsUUFBSUMsV0FBVyxHQUFmLEVBQW9CO0FBQ2hCQSxrQkFBVSxLQUFWO0FBQ0gsS0FGRCxNQUVPO0FBQ0hBLGtCQUFVLEVBQVY7QUFDSDtBQUNELFFBQUlDLFdBQVcsSUFBZjtBQUNBLFFBQUlGLFNBQVMsRUFBYixFQUFpQjtBQUNiRSxtQkFBVyxJQUFYO0FBQ0g7QUFDREYsWUFBUUEsUUFBUSxFQUFoQjtBQUNBLGdCQUFVQSxLQUFWLEdBQWtCQyxPQUFsQixTQUE2QkMsUUFBN0I7QUFDSCxDIiwiZmlsZSI6IjYyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFJhdGluZ1N0YXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgYXZlcmFnZV9yYXRpbmcsIHJhdGluZ19jb3VudCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgICAgIGxldCByYXRpbmcgPSAnJ1xuICAgICAgICBpZiAoYXZlcmFnZV9yYXRpbmcpIHtcbiAgICAgICAgICAgIHJhdGluZyA9IChNYXRoLmNlaWwoYXZlcmFnZV9yYXRpbmcgKiAyKSkgLyAyO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJhdGluZ0FycmF5ID0gW11cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLmZsb29yKHJhdGluZyk7IGkrKykge1xuICAgICAgICAgICAgcmF0aW5nQXJyYXkucHVzaCg8aW1nIGtleT17aX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9yYXRpbmctc3Rhci1maWxsZWQuc3ZnJ30gY2xhc3NOYW1lPVwiaW1nLWNzdG0tZG9jcmF0aW5nXCIgc3R5bGU9e3sgd2lkdGg6IHRoaXMucHJvcHMud2lkdGgsIG1hcmdpblJpZ2h0OiAyLCBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0IH19IC8+KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJhdGluZyAhPSBNYXRoLmZsb29yKHJhdGluZykpIHtcbiAgICAgICAgICAgIHJhdGluZ0FycmF5LnB1c2goPGltZyBrZXk9J2hhbGYnIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvaGFsZnN0YXJfbmV3LnN2Zyd9IGNsYXNzTmFtZT1cImltZy1jc3RtLWRvY3JhdGluZ1wiIHN0eWxlPXt7IHdpZHRoOiB0aGlzLnByb3BzLndpZHRoLCBtYXJnaW5SaWdodDogMiwgaGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCB9fSAvPilcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBlbXB0eVN0YXJzID0gTWF0aC5mbG9vcig1IC0gcmF0aW5nKTtcbiAgICAgICAgaWYgKGVtcHR5U3RhcnMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW1wdHlTdGFyczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmF0aW5nQXJyYXkucHVzaCg8aW1nIGtleT17aSArICdlbXB0eSd9IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvcmF0aW5nLXN0YXItZW1wdHkuc3ZnJ30gY2xhc3NOYW1lPVwiaW1nLWNzdG0tZG9jcmF0aW5nXCIgc3R5bGU9e3sgd2lkdGg6IHRoaXMucHJvcHMud2lkdGgsIG1hcmdpblJpZ2h0OiAyLCBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0IH19IC8+KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNzdG0tZG9jLXJ0bmdcIiBzdHlsZT17dGhpcy5wcm9wcy5qdXN0aWZ5Q2VudGVyID8geyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfSA6IHt9fT5cbiAgICAgICAgICAgICAgICB7cmF0aW5nQXJyYXl9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByYXRpbmdfY291bnQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+KHtyYXRpbmdfY291bnR9KTwvc3Bhbj4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYXRpbmdTdGFycyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEluaXRpYWxzUGljdHVyZSBmcm9tICcuLi8uLi8uLi9jb21tb25zL2luaXRpYWxzUGljdHVyZSdcbmltcG9ydCBMYWJUZXN0cyBmcm9tICcuLi9sYWJUZXN0cydcbmltcG9ydCBSYXRpbmdQcm9maWxlQ2FyZCBmcm9tICcuLi8uLi8uLi9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9SYXRpbmdQcm9maWxlQ2FyZC5qcydcbmltcG9ydCB7IGJ1aWxkT3BlbkJhbm5lciB9IGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgUmF0aW5nUmV2aWV3VmlldyBmcm9tICcuLi8uLi8uLi9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9yYXRpbmdSZXZpZXdWaWV3LmpzJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcblxuY2xhc3MgTGFiRGV0YWlscyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5hcHBfZG93bmxvYWRfbGlzdCAmJiAhdGhpcy5wcm9wcy5hcHBfZG93bmxvYWRfbGlzdC5sZW5ndGgpIHtcblxuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXREb3dubG9hZEFwcEJhbm5lckxpc3QoKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcCAmJiByZXNwLmxlbmd0aCAmJiByZXNwWzBdLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RG93bmxvYWRBcHBXaWRnZXQocmVzcFswXS5kYXRhKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3dEb3dubG9hZEFwcFdpZGdldCh0aGlzLnByb3BzLmFwcF9kb3dubG9hZF9saXN0KVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzaG93RG93bmxvYWRBcHBXaWRnZXQoZGF0YUxpc3QpIHtcbiAgICAgICAgbGV0IGxhbmRpbmdfcGFnZSA9IGZhbHNlXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdy5PTl9MQU5ESU5HX1BBR0UpIHtcbiAgICAgICAgICAgIGxhbmRpbmdfcGFnZSA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkb3dubG9hZEFwcEJ1dHRvbkRhdGEgPSB7fVxuXG4gICAgICAgIGlmIChsYW5kaW5nX3BhZ2UgJiYgZGF0YUxpc3QgJiYgZGF0YUxpc3QubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIGRhdGFMaXN0Lm1hcCgoYmFubmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGJhbm5lci5pc2VuYWJsZWQgJiYgKHRoaXMucHJvcHMubWF0Y2gudXJsLmluY2x1ZGVzKGJhbm5lci5lbmRzX3dpdGgpIHx8IHRoaXMucHJvcHMubWF0Y2gudXJsLmluY2x1ZGVzKGJhbm5lci5zdGFydHNfd2l0aCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvd25sb2FkQXBwQnV0dG9uRGF0YSA9IGJhbm5lclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChPYmplY3QudmFsdWVzKGRvd25sb2FkQXBwQnV0dG9uRGF0YSkubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIGxldCBndG1UcmFjayA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0Rvd25sb2FkQXBwQnV0dG9uVmlzaWJsZScsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2Rvd25sb2FkLWFwcC1idXR0b24tdmlzaWJsZScsICdzdGFydHNfd2l0aCc6IGRvd25sb2FkQXBwQnV0dG9uRGF0YS5zdGFydHNfd2l0aCA/IGRvd25sb2FkQXBwQnV0dG9uRGF0YS5zdGFydHNfd2l0aCA6ICcnLCAnZW5kc193aXRoJzogZG93bmxvYWRBcHBCdXR0b25EYXRhLmVuZHNfd2l0aCA/IGRvd25sb2FkQXBwQnV0dG9uRGF0YS5lbmRzX3dpdGggOiAnJywgJ2RldmljZSc6IHRoaXMucHJvcHMuZGV2aWNlX2luZm9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1UcmFjayB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZG93bmxvYWRCdXR0b24oZGF0YSkge1xuICAgICAgICBsZXQgZ3RtVHJhY2sgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0Rvd25sb2FkQXBwQnV0dG9uQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2Rvd25sb2FkLWFwcC1idXR0b24tY2xpY2tlZCcsICdzdGFydHNfd2l0aCc6IGRhdGEuc3RhcnRzX3dpdGggPyBkYXRhLnN0YXJ0c193aXRoIDogJycsICdlbmRzX3dpdGgnOiBkYXRhLmVuZHNfd2l0aCA/IGRhdGEuZW5kc193aXRoIDogJycsXG4gICAgICAgICAgICAnZGV2aWNlJzogdGhpcy5wcm9wcy5kZXZpY2VfaW5mb1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1UcmFjayB9KVxuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cub3BlbihkYXRhLlVSTCwgJ19zZWxmJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9wZW5UZXN0cygpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1VzZXJTZWxlY3RpbmdBZGRSZW1vdmVMYWJUZXN0cycsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3VzZXItc2VsZWN0aW5nLWFkZC1yZW1vdmUtbGFiLXRlc3RzJ1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlb0ZyaWVuZGx5KSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9L2Jvb2tpbmc/bGFiX2lkPSR7dGhpcy5wcm9wcy5kYXRhLmxhYi5pZH0mYWN0aW9uX3BhZ2U9dGVzdHNgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9sYWIvJHt0aGlzLnByb3BzLmRhdGEubGFiLmlkfS90ZXN0c2ApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgbGV0IHsgYWJvdXQsIGFkZHJlc3MsIGxhYl9pbWFnZSwgbGF0LCBsb25nLCBuYW1lLCBwcmltYXJ5X21vYmlsZSwgY2l0eSwgc3VibG9jYWxpdHksIGxvY2FsaXR5LCBsYWJfdGh1bWJuYWlsIH0gPSB0aGlzLnByb3BzLmRhdGEubGFiXG4gICAgICAgIGxldCB7IGxhYl90aW1pbmcsIGxhYl90aW1pbmdfZGF0YSwgbXJwLCBuZXh0X2xhYl90aW1pbmcsIG5leHRfbGFiX3RpbWluZ19kYXRhLCB0b3RhbF90ZXN0X2NvdW50IH0gPSB0aGlzLnByb3BzLmRhdGFcblxuICAgICAgICBsZXQgbGFuZGluZ19wYWdlID0gZmFsc2VcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93Lk9OX0xBTkRJTkdfUEFHRSkge1xuICAgICAgICAgICAgbGFuZGluZ19wYWdlID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRvd25sb2FkQXBwQnV0dG9uRGF0YSA9IHt9XG5cbiAgICAgICAgaWYgKGxhbmRpbmdfcGFnZSAmJiB0aGlzLnByb3BzLmFwcF9kb3dubG9hZF9saXN0ICYmIHRoaXMucHJvcHMuYXBwX2Rvd25sb2FkX2xpc3QubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIHRoaXMucHJvcHMuYXBwX2Rvd25sb2FkX2xpc3QubWFwKChiYW5uZXIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYmFubmVyLmlzZW5hYmxlZCAmJiAodGhpcy5wcm9wcy5tYXRjaC51cmwuaW5jbHVkZXMoYmFubmVyLmVuZHNfd2l0aCkgfHwgdGhpcy5wcm9wcy5tYXRjaC51cmwuaW5jbHVkZXMoYmFubmVyLnN0YXJ0c193aXRoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZG93bmxvYWRBcHBCdXR0b25EYXRhID0gYmFubmVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcm9maWxlLWJvb2stc2NyZWVuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3dubG9hZEFwcEJ1dHRvbkRhdGEgJiYgT2JqZWN0LnZhbHVlcyhkb3dubG9hZEFwcEJ1dHRvbkRhdGEpLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkb3dubG9hZEJ0blwiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgb25DbGljaz17dGhpcy5kb3dubG9hZEJ1dHRvbi5iaW5kKHRoaXMsIGRvd25sb2FkQXBwQnV0dG9uRGF0YSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZHdubEFwcEJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5kZXZpY2VfaW5mbyA/ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAodGhpcy5wcm9wcy5kZXZpY2VfaW5mby50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdpcGhvbmUnKSB8fCB0aGlzLnByb3BzLmRldmljZV9pbmZvLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2lwYWQnKSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMTNweCcsIG1hcmdpblJpZ2h0OiAnNXB4JywgbWFyZ2luVG9wOiAnLTFweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvYXBwbDEuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGltZyBzdHlsZT17eyB3aWR0aDogJzEzcHgnLCBtYXJnaW5SaWdodDogJzVweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvYW5kcjEuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRG93bmxvYWQgQXBwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRhdGEubGFiLnVucmF0ZWRfYXBwb2ludG1lbnQgPyA8UmF0aW5nUHJvZmlsZUNhcmQgey4uLnRoaXMucHJvcHN9IGRldGFpbHM9e3RoaXMucHJvcHMuZGF0YS5sYWIudW5yYXRlZF9hcHBvaW50bWVudH0gLz4gOiBcIlwifVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJiLTE1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWhlYWRlciBwYi1oZWFkZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItbG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbml0aWFsc1BpY3R1cmUgbmFtZT17bmFtZX0gaGFzX2ltYWdlPXshIWxhYl90aHVtYm5haWx9IGNsYXNzTmFtZT1cImluaXRpYWxzUGljdHVyZS1scFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bGFiX3RodW1ibmFpbH0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0luaXRpYWxzUGljdHVyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgJiYgbmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCd0aHlyb2NhcmUnKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3aWRnZXQtdGl0bGUgcGItdGl0bGVcIj57bmFtZS5zcGxpdCgnLScpWzBdfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIndpZGdldC10aXRsZSBwYi10aXRsZVwiPntuYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSAmJiBuYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3RoeXJvY2FyZScpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsb2NhdGlvbiB0ZXh0LWJsYWNrXCI+e2xvY2FsaXR5fSB7Y2l0eX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwiY3QtaW1nIGN0LWltZy14c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvbWFwLW1hcmtlci5zdmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdCB0aW1lLWNvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidVRpbWluZ1BhcmFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnctNzAwIHRleHQtc21cIj5UaW1pbmc6IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2J1aWxkT3BlbkJhbm5lcihsYWJfdGltaW5nLCBsYWJfdGltaW5nX2RhdGEsIG5leHRfbGFiX3RpbWluZywgbmV4dF9sYWJfdGltaW5nX2RhdGEpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnctNzAwIHRleHQtc21cIj5Db250YWN0OiAtPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJpbWFyeV9tb2JpbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9wZW4tY2xvc2VcIj57XCIgQ2FsbCBOb3dcIn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTVE9SQUdFLmlzQWdlbnQoKSB8fCAoIXRoaXMucHJvcHMuaGlkZV9wcmljZSAmJiAhdGhpcy5wcm9wcy5pc191c2VyX2luc3VyZWQpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5sb2NhdGlvbiAmJiB0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaCAmJiB0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnZnJvbT1pbnN1cmFuY2VfbmV0d29yaycpID8gXCJcIiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcmNoLW53LWlucHV0cyBtYi0wXCIgb25DbGljaz17dGhpcy5vcGVuVGVzdHMuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgYXV0b0NvbXBsZXRlPVwib2ZmXCIgY2xhc3NOYW1lPVwiZC1ibG9jayBjbGtJbnB1dCBuZXctc3JjaC1kb2MtbGFiXCIgaWQ9XCJzZWFyY2hfYmFyXCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBtb3JlIFRlc3RzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNyY2gtaW5wLWltZ1wiIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9jcC9hc3NldHMvaW1nL3NoYXBlLXNyY2guc3ZnXCIgc3R5bGU9e3sgd2lkdGg6ICcxNXB4JyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTVE9SQUdFLmlzQWdlbnQoKSB8fCAoIXRoaXMucHJvcHMuaGlkZV9wcmljZSAmJiAhdGhpcy5wcm9wcy5pc191c2VyX2luc3VyZWQpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5wcm9wcy5sb2NhdGlvbiAmJiB0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaCAmJiB0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnZnJvbT1pbnN1cmFuY2VfbmV0d29yaycpID8gXCJcIiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cImxiLXZpZXdtb3JlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAhdGhpcy5wcm9wcy5pc192aXBfYXBwbGljYWJsZSAmJiAhdGhpcy5wcm9wcy5pc19jb3ZlcmVkX3VuZGVyX2dvbGQgdHJ1ZSAmJiA8cCBvbkNsaWNrPXt0aGlzLm9wZW5UZXN0cy5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZnctNzAwIHRleHQtc21cIj57YFZpZXcgYWxsICR7dG90YWxfdGVzdF9jb3VudD90b3RhbF90ZXN0X2NvdW50OicnfSB0ZXN0cyBgfTxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltYWdlcy9yaWdodF9hcnJvdy5wbmcnfS8+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pc191c2VyX3ZpcCAmJiAhdGhpcy5wcm9wcy5pc191c2VyX2dvbGRfdmlwPycnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PGRpdiBjbGFzc05hbWU9XCJsYi12aWV3bW9yZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9e3RoaXMub3BlblRlc3RzLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmdy03MDAgdGV4dC1zbVwiPntgVmlldyBhbGwgJHt0b3RhbF90ZXN0X2NvdW50P3RvdGFsX3Rlc3RfY291bnQ6Jyd9IHRlc3RzIGB9PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1hZ2VzL3JpZ2h0X2Fycm93LnBuZyd9Lz48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiVGVzdHMgey4uLnRoaXMucHJvcHN9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgcGItZGV0YWlscyBwYi1mYWNpbGl0eVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIndjLXRpdGxlIHRleHQtbWQgZnctNzAwXCI+RmFjaWxpdHk8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QgcGItbGlzdCBmYWNpbHR5LWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UGFya2luZyBBdmFpbGFibGU8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5DYXJkIEFjY2VwdGVkPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RSBSZXBvcnQgQXZhaWxhYmxlPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+SG9tZSBDaGVrdXAgQXZhaWxhYmxlPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyp0aGlzLnByb3BzLmRhdGEubGFiLmRpc3BsYXlfcmF0aW5nX3dpZGdldCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1wYW5lbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJwYW5lbC10aXRsZSBtYi1ybXZcIj5QYXRpZW50IEZlZWRiYWNrPGEgY2xhc3NOYW1lPVwicmF0ZVZpZXdBbGxcIj48c3BhbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL3ZpZXctYWxsLXJhdGluZ3M/Y29udGVudF90eXBlPTEmaWQ9YCArIHRoaXMucHJvcHMuZGF0YS5sYWIuaWQpfT5WaWV3IEFsbDwvc3Bhbj48L2E+PC9oND5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtY29udGVudCBwZC0wIGJvcmRlci1ib3R0b20tcGFuZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhdGluZ0dyYXBoIGRldGFpbHM9e3RoaXMucHJvcHMuZGF0YS5sYWJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1zYXRpc2ZhY3Rpb24tc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kYXRhLmxhYi5yYXRpbmdfZ3JhcGggPyB0aGlzLnByb3BzLmRhdGEubGFiLnJhdGluZ19ncmFwaC50b3BfY29tcGxpbWVudHMubWFwKGNvbXBsaW1lbnQgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBsaW1lbnRMaXN0VmlldyBrZXk9e2NvbXBsaW1lbnQuaWR9IGRldGFpbHM9e2NvbXBsaW1lbnR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IDxzcGFuPjwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXZpZXdMaXN0IGRldGFpbHM9e3RoaXMucHJvcHMuZGF0YS5sYWJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJiLTE1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgcGItZGV0YWlscyBwYi1sb2NhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIndjLXRpdGxlIHRleHQtbWQgZnctNzAwXCI+TG9jYXRpb248L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGRyZXNzLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL3NlYXJjaC8/YXBpPTEmcXVlcnk9JHtsYXR9LCR7bG9uZ31gfSBjbGFzc05hbWU9XCJsaW5rLXRleHQgdGV4dC1tZCBmdy03MDBcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9tYXAtaWNvbi5wbmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGFkZC1tYXBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhZGQtaW5mb1wiPnthZGRyZXNzfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi12aWV3IHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvc2VhcmNoLz9hcGk9MSZxdWVyeT0ke2xhdH0sJHtsb25nfWB9IGNsYXNzTmFtZT1cImxpbmstdGV4dCB0ZXh0LW1kIGZ3LTcwMCB2aWV3LWluLW1hcFwiIHRhcmdldD1cIl9ibGFua1wiPlZpZXcgaW4gR29vZ2xlIE1hcDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGF0YS5sYWIuZGlzcGxheV9yYXRpbmdfd2lkZ2V0ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYXRpbmdSZXZpZXdWaWV3IGlkPXt0aGlzLnByb3BzLmRhdGEubGFiLmlkfSBjb250ZW50X3R5cGU9ezF9IHsuLi50aGlzLnByb3BzfSAvPiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IHBiLWRldGFpbHMgcGItYWJvdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ3Yy10aXRsZSB0ZXh0LW1kIGZ3LTcwMFwiPkFib3V0PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnthYm91dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IExhYkRldGFpbHNcbiIsImltcG9ydCBMYWJEZXRhaWxzIGZyb20gJy4vTGFiRGV0YWlsLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBMYWJEZXRhaWxzIiwiaW1wb3J0IExhYlRlc3RzIGZyb20gJy4vbGFiVGVzdHMnXG5cbmV4cG9ydCBkZWZhdWx0IExhYlRlc3RzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IFBhY2thZ2VUZXN0IGZyb20gJy4vcGFja2FnZVRlc3QuanMnXG5pbXBvcnQgUGFja2FnZUluZm8gZnJvbSAnLi9wYWNrYWdlSW5mby5qcydcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cblxuY2xhc3MgTGFiVGVzdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzaG93UGFja2FnZUluZm86IGZhbHNlLFxuICAgICAgICAgICAgcGFja2FnZUluZm9UZXN0OiBudWxsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvcGVuVGVzdHMoKSB7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdVc2VyU2VsZWN0aW5nQWRkUmVtb3ZlTGFiVGVzdHMnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICd1c2VyLXNlbGVjdGluZy1hZGQtcmVtb3ZlLWxhYi10ZXN0cydcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvbGFiLyR7dGhpcy5wcm9wcy5kYXRhLmxhYi5pZH0vdGVzdHNgKVxuICAgIH1cblxuICAgIHRvZ2dsZSh3aGljaCwgZGF0YSA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFt3aGljaF06ICF0aGlzLnN0YXRlW3doaWNoXSwgcGFja2FnZUluZm9UZXN0OiBkYXRhIH0pXG4gICAgfVxuXG4gICAgdG9nZ2xlVGVzdCh0ZXN0X3RvX3RvZ2dsZSkge1xuICAgICAgICBsZXQgdGVzdCA9IE9iamVjdC5hc3NpZ24oe30sIHRlc3RfdG9fdG9nZ2xlKVxuICAgICAgICB0ZXN0LmFkZF90b19jb21tb24gPSB0cnVlXG5cbiAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSgndGVzdCcsIHRlc3QpXG4gICAgfVxuICAgIHRlc3RJbmZvKHRlc3RfaWQsdXJsLGV2ZW50KSB7XG4gICAgICAgIGxldCBsYWJfaWQgPSB0aGlzLnByb3BzLnNlbGVjdGVkTGFiXG4gICAgICAgIGxldCBzZWxlY3RlZF90ZXN0X2lkcyA9IHRoaXMucHJvcHMubGFiX3Rlc3RfZGF0YVt0aGlzLnByb3BzLnNlbGVjdGVkTGFiXSB8fCBbXVxuICAgICAgICBzZWxlY3RlZF90ZXN0X2lkcyA9IHNlbGVjdGVkX3Rlc3RfaWRzLm1hcCh4ID0+IHguaWQpXG4gICAgICAgICAgICBsZXQgbGF0ID0gMjguNjQ0ODAwXG4gICAgICAgICAgICBsZXQgbG9uZyA9IDc3LjIxNjcyMVxuICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uICE9PSBudWxsKXtcbiAgICAgICAgICAgICAgICBsYXQgPSB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubGF0XG4gICAgICAgICAgICAgICAgbG9uZyA9IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sbmdcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbGF0ID09PSAnZnVuY3Rpb24nKSBsYXQgPSBsYXQoKVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbG9uZyA9PT0gJ2Z1bmN0aW9uJykgbG9uZyA9IGxvbmcoKVxuICAgICAgICAgICAgfVxuICAgICAgICBpZih1cmwgJiYgdXJsICE9Jycpe1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nK3VybCsnP3Rlc3RfaWRzPScgKyB0ZXN0X2lkICsgJyZzZWxlY3RlZF90ZXN0X2lkcz0nK3NlbGVjdGVkX3Rlc3RfaWRzICsnJmxhYl9pZD0nICsgbGFiX2lkICsnJmxhdD0nK2xhdCsnJmxvbmc9Jytsb25nKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvc2VhcmNoL3Rlc3RpbmZvP3Rlc3RfaWRzPScgKyB0ZXN0X2lkICsgJyZzZWxlY3RlZF90ZXN0X2lkcz0nK3NlbGVjdGVkX3Rlc3RfaWRzICsnJmxhYl9pZD0nICsgbGFiX2lkICsnJmxhdD0nK2xhdCsnJmxvbmc9Jytsb25nKVxuICAgICAgICB9XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICd0ZXN0SW5mb0NsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAndGVzdC1pbmZvLWNsaWNrJywgJ3BhZ2VTb3VyY2UnOiAnbGFiLXRlc3QtcGFnZSdcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgIH1cblxuICAgIHNlYXJjaFRlc3RzKCl7XG4gICAgICAgIHRoaXMucHJvcHMuc2VsZWN0U2VhcmNoVHlwZSgnbGFiJylcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9zZWFyY2gnKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgaXNfcGFja2FnZSA9IGZhbHNlXG4gICAgICAgIGxldCBudW1iZXJfb2ZfdGVzdHMgPSAwXG4gICAgICAgIGxldCBkZWZhdWx0VGVzdHMgPSBbXVxuICAgICAgICBsZXQgc2hvd0RlZmF1bHRUZXN0cyA9IGZhbHNlXG4gICAgICAgIGxldCBoaWRlX3ByaWNlID0gZmFsc2VcbiAgICAgICAgbGV0IHNlbGVjdGVkVGVzdElkcyA9IFtdXG4gICAgICAgIGxldCBzZWxlY3RlZFRlc3RzID0gW11cbiAgICAgICAgbGV0IHNlbGVjdGVkUGFja2FnZSA9IFtdXG4gICAgICAgIGxldCB1blNlbGVjdGVkVGVzdHMgPSBbXVxuICAgICAgICBsZXQgdW5TZWxlY3RlZFBhY2thZ2UgPSBbXVxuICAgICAgICBsZXQgdGVzdF9pbmZvID0gJydcbiAgICAgICAgbGV0IHNob3dfZGV0YWlscyA9ICcnXG4gICAgICAgIGxldCB7aXNfcGxhbl9hcHBsaWNhYmxlfSA9IHRoaXMucHJvcHNcbiAgICAgICAgbGV0IHsgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUsIGlzX3ZpcF9hcHBsaWNhYmxlLCBpc19jb3ZlcmVkX3VuZGVyX2dvbGQgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgbGV0IGlzX3VzZXJfaW5zdXJlZCA9IGZhbHNlXG4gICAgICAgIGxldCBzZWxlY3RlZFRlc3RzQ291bnQgPSAwXG4gICAgICAgIGxldCB2aXBfYW1vdW50ID0gMFxuICAgICAgICBsZXQgZmluYWxNcnAgPSAwXG4gICAgICAgIGxldCBwcmljZV90b19wYXkgPTBcblxuICAgICAgICAvL0ZvciBJbnN1cmVkIFBlcnNvbiBSZW1vdmUgdW5zZWxlY3RlZCBUZXN0cy9QYWNrYWdlc1xuXG4gICAgICAgIGlmKHRoaXMucHJvcHMucHJvZmlsZXMgJiYgdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXSl7XG4gICAgICAgICAgICBpc191c2VyX2luc3VyZWQgPSB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGVdLmlzX2luc3VyZWRcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY3VycmVudExhYlNlbGVjdGVkVGVzdHMgJiYgdGhpcy5wcm9wcy5jdXJyZW50TGFiU2VsZWN0ZWRUZXN0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkVGVzdHNDb3VudCA9IHRoaXMucHJvcHMuY3VycmVudExhYlNlbGVjdGVkVGVzdHMuZmlsdGVyKHg9PnguaXNfc2VsZWN0ZWQpLmxlbmd0aFxuXG4gICAgICAgICAgICB0aGlzLnByb3BzLmN1cnJlbnRMYWJTZWxlY3RlZFRlc3RzLm1hcCgodGVzdCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0ZXN0LmhpZGVfcHJpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZV9wcmljZSA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGVzdC5pc19wYWNrYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzX3BhY2thZ2UgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIG51bWJlcl9vZl90ZXN0cyA9IHRlc3QubnVtYmVyX29mX3Rlc3RzXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRlc3QuaXNfcGFja2FnZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGVzdC5pc19zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxNcnArPSBwYXJzZUludCh0ZXN0Lm1ycClcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRlc3QudmlwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXBfYW1vdW50Kz0gcGFyc2VJbnQodGVzdC52aXAudmlwX2dvbGRfcHJpY2V8fDApICsgcGFyc2VJbnQodGVzdC52aXAudmlwX2NvbnZlbmllbmNlX2Ftb3VudHx8MCkgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFBhY2thZ2UucHVzaCg8UGFja2FnZVRlc3QgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgPXtpc19pbnN1cmFuY2VfYXBwbGljYWJsZX0gaXNfcGxhbl9hcHBsaWNhYmxlPXtpc19wbGFuX2FwcGxpY2FibGV9IGtleT17aX0gaT17aX0gdGVzdD17dGVzdH0gdG9nZ2xlPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpfSB0b2dnbGVUZXN0PXt0aGlzLnRvZ2dsZVRlc3QuYmluZCh0aGlzKX0gdGVzdEluZm89e3RoaXMudGVzdEluZm8uYmluZCh0aGlzKX0gaGlkZV9wcmljZT17aGlkZV9wcmljZX0gc2VsZWN0ZWRUZXN0c0NvdW50PXtzZWxlY3RlZFRlc3RzQ291bnR9IGlzX3VzZXJfaW5zdXJlZD17aXNfdXNlcl9pbnN1cmVkfSBpc192aXBfYXBwbGljYWJsZT17aXNfdmlwX2FwcGxpY2FibGV9IGlzX3VzZXJfdmlwPXt0aGlzLnByb3BzLmlzX3VzZXJfdmlwfSBpc191c2VyX2dvbGRfdmlwPXt0aGlzLnByb3BzLmlzX3VzZXJfZ29sZF92aXB9IC8+KVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5TZWxlY3RlZFBhY2thZ2UucHVzaCg8UGFja2FnZVRlc3QgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgPXtpc19pbnN1cmFuY2VfYXBwbGljYWJsZX0gaXNfcGxhbl9hcHBsaWNhYmxlPXtpc19wbGFuX2FwcGxpY2FibGV9IGtleT17aX0gaT17aX0gdGVzdD17dGVzdH0gdG9nZ2xlPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpfSB0b2dnbGVUZXN0PXt0aGlzLnRvZ2dsZVRlc3QuYmluZCh0aGlzKX0gaGlkZV9wcmljZT17aGlkZV9wcmljZX0gdGVzdEluZm89e3RoaXMudGVzdEluZm8uYmluZCh0aGlzKX0gc2VsZWN0ZWRUZXN0c0NvdW50PXtzZWxlY3RlZFRlc3RzQ291bnR9IGlzX3ZpcF9hcHBsaWNhYmxlPXtpc192aXBfYXBwbGljYWJsZX0gaXNfdXNlcl92aXA9e3RoaXMucHJvcHMuaXNfdXNlcl92aXB9IGlzX3VzZXJfZ29sZF92aXA9e3RoaXMucHJvcHMuaXNfdXNlcl9nb2xkX3ZpcH0gLz4pXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXN0LmlzX3NlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbE1ycCs9IHBhcnNlSW50KHRlc3QubXJwKVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VfdG9fcGF5ID0gcGFyc2VJbnQodGVzdC5kZWFsX3ByaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRlc3QudmlwICYmICh0aGlzLnByb3BzLmlzX3VzZXJfdmlwIHx8IHRoaXMucHJvcHMuaXNfdXNlcl9nb2xkX3ZpcCkgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXBfYW1vdW50Kz0gcGFyc2VJbnQodGVzdC52aXAudmlwX2dvbGRfcHJpY2V8fDApICsgcGFyc2VJbnQodGVzdC52aXAudmlwX2NvbnZlbmllbmNlX2Ftb3VudHx8MCkgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VfdG9fcGF5ID0gcGFyc2VJbnQodGVzdC52aXAudmlwX2Ftb3VudHx8MCkgKyBwYXJzZUludCh0ZXN0LnZpcC52aXBfY29udmVuaWVuY2VfYW1vdW50fHwwKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlc3QudGVzdC5zaG93X2RldGFpbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0ZXN0X2luZm8gPSA8c3BhbiBjbGFzc05hbWU9XCJzcmNoLWhlYWRpbmdcIiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JywgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiAnI2U0NjYwOCcgfX0gb25DbGljaz17dGhpcy50ZXN0SW5mby5iaW5kKHRoaXMpfT4gVGVzdCBJbmZvPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3RfaW5mbz0gPHNwYW4gc3R5bGU9e3snbWFyZ2luTGVmdCc6JzVweCcsbWFyZ2luVG9wOicxcHgnLGRpc3BsYXk6J2lubGluZS1ibG9jaycsICdjdXJzb3InOidwb2ludGVyJ319IG9uQ2xpY2s9e3RoaXMudGVzdEluZm8uYmluZCh0aGlzLHRlc3QudGVzdC5pZCx0ZXN0LnVybCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vY3AvYXNzZXRzL2ltZy9pY29ucy9JbmZvLnN2Z1wiIHN0eWxlPXt7d2lkdGg6JzE1cHgnfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUZXN0cy5wdXNoKGhpZGVfcHJpY2U/IDxsaSBrZXk9e2kgKyBcInNydFwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2stYnhcIiBzdHlsZT17eyBmb250V2VpZ2h0OiA0MDAsIGZvbnRTaXplOiAxNCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Rlc3QudGVzdC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17dGVzdC5pc19zZWxlY3RlZCA/IHRydWUgOiBmYWxzZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlc3QtcHJpY2UgdGV4dC1zbVwiPkZyZWU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGxpIGtleT17aSArIFwic3J0XCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtgJHsodGhpcy5wcm9wcy5pc191c2VyX3ZpcCAmJiAhdGhpcy5wcm9wcy5pc191c2VyX2dvbGRfdmlwKT8nJzonY2stYngnfWB9IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDQwMCwgZm9udFNpemU6IDE0IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Rlc3QudGVzdC5uYW1lfSB7dGVzdC50ZXN0LnNob3dfZGV0YWlscyA/IHRlc3RfaW5mbyA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLmlzX3VzZXJfdmlwICYmICF0aGlzLnByb3BzLmlzX3VzZXJfZ29sZF92aXApPycnOjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt0ZXN0LmlzX3NlbGVjdGVkID8gdHJ1ZSA6IGZhbHNlfSBvbkNoYW5nZT17dGhpcy50b2dnbGVUZXN0LmJpbmQodGhpcywgdGVzdCl9IC8+ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMuaXNfdXNlcl92aXAgJiYgIXRoaXMucHJvcHMuaXNfdXNlcl9nb2xkX3ZpcCk/Jyc6PHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXNfdmlwX2FwcGxpY2FibGUgfHwgaXNfY292ZXJlZF91bmRlcl9nb2xkPycnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19pbnN1cmFuY2VfYXBwbGljYWJsZSB8fCB0ZXN0LmluY2x1ZGVkX2luX3VzZXJfcGxhbj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXN0LXByaWNlIHRleHQtc21cIj7igrkgMCA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cHJpY2VfdG9fcGF5ID09IHRlc3QubXJwLnNwbGl0KCcuJylbMF0/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVzdC1wcmljZSB0ZXh0LXNtXCI+JiM4Mzc3OyB7cHJpY2VfdG9fcGF5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PHNwYW4gY2xhc3NOYW1lPVwidGVzdC1wcmljZSB0ZXh0LXNtXCI+JiM4Mzc3OyB7cHJpY2VfdG9fcGF5fTxzcGFuIGNsYXNzTmFtZT1cInRlc3QtbXJwXCI+JiM4Mzc3OyB7dGVzdC5tcnAuc3BsaXQoJy4nKVswXX08L3NwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4pXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZV90b19wYXkgPSBwYXJzZUludCh0ZXN0LmRlYWxfcHJpY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGVzdC52aXAgJiYgKHRoaXMucHJvcHMuaXNfdXNlcl92aXAgfHwgdGhpcy5wcm9wcy5pc191c2VyX2dvbGRfdmlwKSApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlX3RvX3BheSA9IHBhcnNlSW50KHRlc3QudmlwLnZpcF9hbW91bnR8fDApICsgcGFyc2VJbnQodGVzdC52aXAudmlwX2NvbnZlbmllbmNlX2Ftb3VudHx8MClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXN0LnRlc3Quc2hvd19kZXRhaWxzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzdF9pbmZvPSA8c3BhbiBzdHlsZT17eydtYXJnaW5MZWZ0JzonNXB4JyxtYXJnaW5Ub3A6JzFweCcsZGlzcGxheTonaW5saW5lLWJsb2NrJywgJ2N1cnNvcic6J3BvaW50ZXInfX0gb25DbGljaz17dGhpcy50ZXN0SW5mby5iaW5kKHRoaXMsdGVzdC50ZXN0LmlkLHRlc3QudXJsKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9jcC9hc3NldHMvaW1nL2ljb25zL0luZm8uc3ZnXCIgc3R5bGU9e3t3aWR0aDonMTVweCd9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB1blNlbGVjdGVkVGVzdHMucHVzaCh0ZXN0LmhpZGVfcHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxsaSBjbGFzc05hbWU9XCJjbGVhcmZpeFwiIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlc3QtcHJpY2VcIj5GcmVlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8bGkga2V5PXtpICsgXCJzcnRcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjay1ieFwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDQwMCwgZm9udFNpemU6IDE0IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Rlc3QudGVzdC5uYW1lfSB7dGVzdC50ZXN0LnNob3dfZGV0YWlscyA/IHRlc3RfaW5mbyA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3Rlc3QuaXNfc2VsZWN0ZWQgPyB0cnVlIDogZmFsc2V9IG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZVRlc3QuYmluZCh0aGlzLCB0ZXN0KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIChpc19pbnN1cmFuY2VfYXBwbGljYWJsZSB8fCAhc2VsZWN0ZWRUZXN0c0NvdW50KSAmJiB0ZXN0Lmluc3VyYW5jZSAmJiB0ZXN0Lmluc3VyYW5jZS5pc19pbnN1cmFuY2VfY292ZXJlZCAmJiB0ZXN0Lmluc3VyYW5jZS5pc191c2VyX2luc3VyZWQpIHx8IHRlc3QuaW5jbHVkZWRfaW5fdXNlcl9wbGFuP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlc3QtcHJpY2UgdGV4dC1zbVwiPuKCuSAwIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cHJpY2VfdG9fcGF5ID09IHRlc3QubXJwLnNwbGl0KCcuJylbMF0/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlc3QtcHJpY2UgdGV4dC1zbVwiPiYjODM3Nzsge3ByaWNlX3RvX3BheX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8c3BhbiBjbGFzc05hbWU9XCJ0ZXN0LXByaWNlIHRleHQtc21cIj4mIzgzNzc7IHtwcmljZV90b19wYXl9PHNwYW4gY2xhc3NOYW1lPVwidGVzdC1tcnBcIj4mIzgzNzc7IHt0ZXN0Lm1ycC5zcGxpdCgnLicpWzBdfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgc2VsZWN0ZWRUZXN0SWRzID0gdGhpcy5wcm9wcy5jdXJyZW50TGFiU2VsZWN0ZWRUZXN0cy5tYXAoeCA9PiB4LnRlc3RfaWQpXG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vRm9yIEluc3VyZWQgUGVyc29uIFJlbW92ZSB1bnNlbGVjdGVkIFRlc3RzL1BhY2thZ2VzXG5cbiAgICAgICAgaWYodGhpcy5wcm9wcy5pc191c2VyX3ZpcCAmJiAhdGhpcy5wcm9wcy5pc191c2VyX2dvbGRfdmlwIC8qaXNfdXNlcl9pbnN1cmVkIHx8IGlzX3ZpcF9hcHBsaWNhYmxlIHx8IGlzX2NvdmVyZWRfdW5kZXJfZ29sZCovKSB7XG4gICAgICAgICAgICB1blNlbGVjdGVkVGVzdHMgPSBbXVxuICAgICAgICAgICAgdW5TZWxlY3RlZFBhY2thZ2UgPSBbXVxuICAgICAgICB9XG5cblxuXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBpZiAocGFyc2VkICYmIHBhcnNlZC5wcmljZV9saXN0ICYmIHBhcnNlZC5wcmljZV9saXN0ID09ICd0cnVlJykge1xuICAgICAgICAgICAgc2hvd0RlZmF1bHRUZXN0cyA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0b3RhbEFtb3VudCA9IDA7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmN1cnJlbnRMYWJTZWxlY3RlZFRlc3RzICYmIHRoaXMucHJvcHMuY3VycmVudExhYlNlbGVjdGVkVGVzdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcHMuY3VycmVudExhYlNlbGVjdGVkVGVzdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0b3RhbEFtb3VudCA9IHRvdGFsQW1vdW50ICsgdGhpcy5wcm9wcy5jdXJyZW50TGFiU2VsZWN0ZWRUZXN0c1tpXS5kZWFsX3ByaWNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGF0YS5sYWJfdGVzdHMgJiYgdGhpcy5wcm9wcy5kYXRhLmxhYl90ZXN0cy5sZW5ndGggJiYgc2hvd0RlZmF1bHRUZXN0cykge1xuICAgICAgICAgICAgZGVmYXVsdFRlc3RzID0gdGhpcy5wcm9wcy5kYXRhLmxhYl90ZXN0cy5tYXAoKHRlc3QsIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGNsYXNzTmFtZT1cImNsZWFyZml4XCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVzdC1wcmljZVwiPiYjODM3Nzsge3Rlc3QuZGVhbF9wcmljZX08c3BhbiBjbGFzc05hbWU9XCJ0ZXN0LW1ycFwiPiYjODM3Nzsge3Rlc3QubXJwLnNwbGl0KCcuJylbMF19PC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJmdy00MDAgdGV4dC1tZCB0ZXN0LW5hbWUtaXRlbSAvKmxiLXRzdC1jc3RtLXBkbmcqL1wiPnt0ZXN0LnRlc3QubmFtZX08L3NwYW4+PC9saT5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXNfaG9tZV9jb2xsZWN0aW9uX2VuYWJsZWQgPSBmYWxzZVxuICAgICAgICBsZXQgZGlzdGFuY2VfcmVsYXRlZF9jaGFyZ2VzID0gMFxuICAgICAgICBsZXQgaG9tZV9waWNrdXBfY2hhcmdlcyA9IGZhbHNlXG4gICAgICAgIGxldCB0ZXN0c0FycmF5ID0gW11cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGF0YSAmJiB0aGlzLnByb3BzLmRhdGEubGFiKSB7XG4gICAgICAgICAgICBpc19ob21lX2NvbGxlY3Rpb25fZW5hYmxlZCA9IHRoaXMucHJvcHMuZGF0YS5sYWIuaXNfaG9tZV9jb2xsZWN0aW9uX2VuYWJsZWRcbiAgICAgICAgICAgIGRpc3RhbmNlX3JlbGF0ZWRfY2hhcmdlcyA9IHRoaXMucHJvcHMuZGF0YS5kaXN0YW5jZV9yZWxhdGVkX2NoYXJnZXNcbiAgICAgICAgICAgIGhvbWVfcGlja3VwX2NoYXJnZXMgPSB0aGlzLnByb3BzLmRhdGEubGFiLmhvbWVfcGlja3VwX2NoYXJnZXNcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmN1cnJlbnRMYWJTZWxlY3RlZFRlc3RzICYmIHRoaXMucHJvcHMuY3VycmVudExhYlNlbGVjdGVkVGVzdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0ZXN0c0FycmF5ID0gdGhpcy5wcm9wcy5jdXJyZW50TGFiU2VsZWN0ZWRUZXN0cy5maWx0ZXIoeCA9PiB4LmlzX3NlbGVjdGVkKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBpY2t1cF90ZXh0ID0gXCJcIlxuICAgICAgICBsZXQgZXh0cmFfcHJpY2UgPSBcIlwiXG4gICAgICAgIGxldCBzaG93UHJpY2VUYWcgPSAwXG4gICAgICAgIGxldCBzaG93UGlja3VwVGV4dCA9IHRydWVcblxuICAgICAgICBpZiAodGVzdHNBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVzdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghdGVzdHNBcnJheVtpXS5pc19ob21lX2NvbGxlY3Rpb25fZW5hYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICBzaG93UGlja3VwVGV4dCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzX2hvbWVfY29sbGVjdGlvbl9lbmFibGVkICYmIGRpc3RhbmNlX3JlbGF0ZWRfY2hhcmdlcyA9PSAxICYmICFoaWRlX3ByaWNlICYmIHNob3dQaWNrdXBUZXh0KSB7XG4gICAgICAgICAgICBwaWNrdXBfdGV4dCA9IFwiSG9tZSBwaWNrdXAgY2hhcmdlcyBhcHBsaWNhYmxlXCJcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc19ob21lX2NvbGxlY3Rpb25fZW5hYmxlZCAmJiAhZGlzdGFuY2VfcmVsYXRlZF9jaGFyZ2VzICYmICFoaWRlX3ByaWNlICYmIHNob3dQaWNrdXBUZXh0KSB7XG4gICAgICAgICAgICBwaWNrdXBfdGV4dCA9IFwiSG9tZSB2aXNpdCBjaGFyZ2VzXCJcbiAgICAgICAgICAgIHNob3dQcmljZVRhZyA9IDFcbiAgICAgICAgICAgIGV4dHJhX3ByaWNlID0gdGhpcy5wcm9wcy5kYXRhLmxhYi5ob21lX3BpY2t1cF9jaGFyZ2VzXG4gICAgICAgIH1cblxuICAgICAgICBpZihpc19pbnN1cmFuY2VfYXBwbGljYWJsZSl7XG4gICAgICAgICAgICBwaWNrdXBfdGV4dCA9ICcnXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHZpcF9kaXNjb3VudF9wcmljZSA9IGZpbmFsTXJwIC0gdmlwX2Ftb3VudFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IHBiLWRldGFpbHMgcGItdGVzdCBudy1saXN0aW5nLXBkZG5nIGNsZWFyZml4XCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc19wYWNrYWdlICYmIG51bWJlcl9vZl90ZXN0cyA/IDxoNCBjbGFzc05hbWU9XCJ3Yy10aXRsZSB0ZXh0LW1kIGZ3LTcwMFwiPntudW1iZXJfb2ZfdGVzdHN9IFRlc3QgSW5jbHVkZWQ8L2g0PiA6IDxoNCBjbGFzc05hbWU9XCJ3Yy10aXRsZSB0ZXh0LW1kIGZ3LTcwMFwiPlNlbGVjdGVkIFRlc3RzIHt0ZXN0X2luZm99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICB9ICovfVxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubG9jYXRpb24gJiYgdGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2ggJiYgdGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoJ2Zyb209aW5zdXJhbmNlX25ldHdvcmsnKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAnJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdCBhbGwtdGVzdC1saXN0IHBkbmdSZ3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRUZXN0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRQYWNrYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoaWRlX3ByaWNlPyAnJyA6IHVuU2VsZWN0ZWRUZXN0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGlkZV9wcmljZT8gJycgOiB1blNlbGVjdGVkUGFja2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpY2t1cF90ZXh0ICYmICghdGhpcy5wcm9wcy5sb2NhdGlvbiB8fCAhdGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2ggfHwgIXRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdmcm9tPWluc3VyYW5jZV9uZXR3b3JrJykpID8gPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCBob21lUGlja3VpXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoZWFsdGgtdmlzaXQtY2hhcmdlXCI+e3BpY2t1cF90ZXh0fTwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1ByaWNlVGFnID8gPHAgY2xhc3NOYW1lPVwicHJjLXRzdGNvaW4gbWItMFwiPiAmIzgzNzc7e2V4dHJhX3ByaWNlID09IFwiXCIgPyAnMCcgOiBleHRyYV9wcmljZX08L3A+IDogJydcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFzaG93UHJpY2VUYWcgJiYgZXh0cmFfcHJpY2UgPj0gMCAmJiBleHRyYV9wcmljZSA/IDxwIGNsYXNzTmFtZT1cInByYy10c3Rjb2luIG1iLTBcIj4gJiM4Mzc3O3tleHRyYV9wcmljZX08L3A+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGFiZWwtY3BuIHRleHQtbGVmdFwiPkNvdXBvbiBhcHBsaWVzIGF0IGJvb2tpbmcgc3VtbWFyeTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHsvKlxuICAgICAgICAgICAgICAgICAgICAgICAgU1RPUkFHRS5jaGVja0F1dGgoKSB8fCB0b3RhbEFtb3VudCA8IDEwMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJycgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmxvY2F0aW9uICYmIHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoICYmIHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdmcm9tPWluc3VyYW5jZV9uZXR3b3JrJykgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWdudXAtb2ZmLWNvbnRhaW5lciBsYWItc2lnbnVwLW9mZnJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaWdudXAtb2ZmLWRvY1wiPisgJiM4Mzc3OyAxMDAgT0ZGIDxiPm9uIFNpZ251cDwvYj4gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAoU1RPUkFHRS5pc0FnZW50KCkgfHwgKCAhaGlkZV9wcmljZSAmJiAhaXNfdXNlcl9pbnN1cmVkKSkgJiYgKHRoaXMucHJvcHMubG9jYXRpb24gJiYgdGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2ggJiYgdGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoJ2Zyb209aW5zdXJhbmNlX25ldHdvcmsnKSkgPyA8ZGl2IGNsYXNzTmFtZT1cInBiLXZpZXcgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc192aXBfYXBwbGljYWJsZSAmJiAhaXNfdXNlcl9pbnN1cmVkICYmIHRoaXMucHJvcHMuZGF0YSAmJiB0aGlzLnByb3BzLmRhdGEudG90YWxfdGVzdF9jb3VudCAmJiB0aGlzLnByb3BzLmRhdGEudG90YWxfdGVzdF9jb3VudCAhPSAnJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tZCBmdy01MDBcIj57dGhpcy5wcm9wcy5kYXRhLnRvdGFsX3Rlc3RfY291bnR9IHRvdGFsIHRlc3RzPC9zcGFuPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfdXNlcl9pbnN1cmVkIHx8IGlzX3ZpcF9hcHBsaWNhYmxlIHx8IGlzX2NvdmVyZWRfdW5kZXJfZ29sZD8nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3NOYW1lPVwibGluay10ZXh0IHRleHQtbWQgZnctNTAwXCIgb25DbGljaz17dGhpcy5vcGVuVGVzdHMuYmluZCh0aGlzKX0+VmlldyBhbGwgdGVzdHM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAoaXNfdmlwX2FwcGxpY2FibGUgfHwgaXNfdXNlcl9pbnN1cmVkICkgJiYgIXNlbGVjdGVkVGVzdHNDb3VudD9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItdmlldyB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzTmFtZT1cImxpbmstdGV4dCB0ZXh0LW1kIGZ3LTcwMFwiIG9uQ2xpY2s9e3RoaXMuc2VhcmNoVGVzdHMuYmluZCh0aGlzKX0+U2VhcmNoIHRlc3RzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtdmFsLWJ4XCI+Q292ZXJlZCBVbmRlciBJbnN1cmFuY2U8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd1BhY2thZ2VJbmZvID8gPFBhY2thZ2VJbmZvIGNvbnRlbnQ9e3RoaXMuc3RhdGUucGFja2FnZUluZm9UZXN0fSB0b2dnbGU9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgJ3Nob3dQYWNrYWdlSW5mbycpfSAvPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAge3Nob3dEZWZhdWx0VGVzdHMgP1xuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IHBiLWRldGFpbHMgcGItdGVzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIndjLXRpdGxlIHRleHQtbWQgZnctNzAwXCI+UHJpY2UgTGlzdDwvaDQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0IHBiLWxpc3QgcGItdGVzdC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RlZmF1bHRUZXN0c31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLXZpZXcgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzc05hbWU9XCJsaW5rLXRleHQgdGV4dC1tZCBmdy03MDBcIiBvbkNsaWNrPXt0aGlzLm9wZW5UZXN0cy5iaW5kKHRoaXMpfT5WaWV3IE1vcmUgJiBTZWxlY3QgVGVzdHM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgey8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IGdvbGQgY2FyZCBkZXRhaWxzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgIWlzX2NvdmVyZWRfdW5kZXJfZ29sZCAmJiAhaXNfdmlwX2FwcGxpY2FibGUgJiYgIWlzX2luc3VyYW5jZV9hcHBsaWNhYmxlICYmIHZpcF9kaXNjb3VudF9wcmljZSA+IDAgJiYgZmFsc2UgP1xuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBjcG4tYmx1ciBtcmItMTUgY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbmFseXRpY0RhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdMYWJQcm9maWxlVmlwR29sZENsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbGFiLXByb2ZpbGUtZ29sZC1jbGljaycsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogYW5hbHl0aWNEYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3ZpcC1nb2xkLWRldGFpbHM/aXNfZ29sZD10cnVlJnNvdXJjZT1sYWItcHJvZmlsZS1nb2xkLWNsaWNrJmxlYWRfc291cmNlPURvY3ByaW1lJylcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IGQtZmxleCBqYy1zcGFjZWIgYWxpZ24taXRlbS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvbGQtY3JkLWxmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Bhbj5TYXZlIOKCuXt2aXBfZGlzY291bnRfcHJpY2V9PC9zcGFuPiBvbiB0aGlzIGFwcG9pbnRtZW50IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ2xkLWNyZC1zYi10eHRcIj5CZWNvbWUgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2dvbGQtc20ucG5nJ30gLz4gbWVtYmVyPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1jcmQtcmd0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkdldCBHb2xkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA6Jyd9XG4gICAgICAgICAgICAgICAgey8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IGdvbGQgY2FyZCBkZXRhaWxzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovfVxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTGFiVGVzdHNcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IHRvZ2dsZSwgY29udGVudCB9KSA9PiB7XG4gICAgbGV0IG5hbWUgPSBcIlwiXG4gICAgbGV0IHByZV90ZXN0X2luZm8gPSBcIlwiXG4gICAgbGV0IHdoeSA9IFwiXCJcbiAgICBpZiAoY29udGVudCkge1xuICAgICAgICBuYW1lID0gY29udGVudC50ZXN0Lm5hbWVcbiAgICAgICAgcHJlX3Rlc3RfaW5mbyA9IGNvbnRlbnQudGVzdC5wcmVfdGVzdF9pbmZvXG4gICAgICAgIHdoeSA9IGNvbnRlbnQudGVzdC53aHlcbiAgICB9XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLW92ZXJsYXlcIiBvbkNsaWNrPXt0b2dnbGV9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBjYW5jZWwtYXBwb2ludG1lbnQtZGl2IGNhbmNlbC1wb3B1cFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIHRleHQtY2VudGVyIGFjdGlvbi1zY3JlZW4taGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGNhbmNlbC1hcHBvaW50bWVudC1oZWFkXCI+UGFja2FnZSBJbmZvPC9wPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaWNvbnMvY2xvc2UucG5nXCJ9IGNsYXNzTmFtZT1cImNsb3NlLW1vZGFsXCIgb25DbGljaz17dG9nZ2xlfSAvPlxuICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiIHN0eWxlPXt7IHBhZGRpbmc6ICcwcHggMTVweCcgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxYS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInBrZy1xdXNcIj5XaGF0IGlzIHRoaXMgdGVzdD88L2g0PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwa2ctYW5zXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB3aHkgfX0+PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicWEtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJwa2ctcXVzXCI+V2hhdCBpcyB0aGUgcHJlcGFyYXRpb24gbmVlZGVkIGZvciBkb2luZyB0aGlzIHRlc3Q/PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGtnLWFuc1wiPntwcmVfdGVzdF9pbmZvfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEV4cGFuc2lvblBhbmVsIGZyb20gJy4vZXhwYW5zaW9uUGFuZWwnXG5cbmNsYXNzIFBhY2thZ2VUZXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRlc3RMaXN0VmlzaWJsZTogcHJvcHMudGVzdC5pc19zZWxlY3RlZCA/IHRydWUgOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGFja2FnZU5hbWVDbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRlc3RMaXN0VmlzaWJsZTogIXRoaXMuc3RhdGUudGVzdExpc3RWaXNpYmxlIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgaSwgdGVzdCwgdG9nZ2xlIH0gPSB0aGlzLnByb3BzXG4gICAgICAgIGxldCB7IGRlYWxfcHJpY2UsIG1ycCwgcHJlX3Rlc3RfaW5mbywgaW5zdXJhbmNlLCB2aXAgfSA9IHRlc3RcbiAgICAgICAgbGV0IHRlc3RfcGFja2FnZSA9IHRlc3QucGFja2FnZSB8fCBbXVxuICAgICAgICBsZXQgdGVzdF9pbmZvXG4gICAgICAgIGxldCBwcmljZV90b19wYXkgPSBkZWFsX3ByaWNlO1xuICAgICAgICBpZih2aXAgJiYgKHRoaXMucHJvcHMuaXNfdXNlcl92aXAgfHwgdGhpcy5wcm9wcy5pc191c2VyX2dvbGRfdmlwKSApIHtcbiAgICAgICAgICAgIHByaWNlX3RvX3BheSA9IHBhcnNlSW50KHZpcC52aXBfYW1vdW50fHwwKSArIHBhcnNlSW50KHZpcC52aXBfY29udmVuaWVuY2VfYW1vdW50fHwwKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0ZXN0LnRlc3Quc2hvd19kZXRhaWxzKSB7XG4gICAgICAgICAgICB0ZXN0X2luZm89IDxzcGFuIHN0eWxlPXt7J21hcmdpblJpZ2h0JzonNXB4JyxtYXJnaW5Ub3A6JzJweCcsZGlzcGxheTonaW5saW5lLWJsb2NrJywgJ2N1cnNvcic6J3BvaW50ZXInfX0gb25DbGljaz17dGhpcy5wcm9wcy50ZXN0SW5mby5iaW5kKHRoaXMsdGVzdC50ZXN0LmlkLHRlc3QudGVzdC51cmwpfT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vY3AvYXNzZXRzL2ltZy9pY29ucy9JbmZvLnN2Z1wiIHN0eWxlPXt7d2lkdGg6JzE1cHgnfX0vPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpfSBzdHlsZT17eyBwYWRkaW5nUmlnaHQ6ICcwcHgnIH19IGNsYXNzTmFtZT1cImNsZWFyZml4IHBkbmdSZ3RcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtgJHsodGhpcy5wcm9wcy5pc191c2VyX3ZpcCAmJiAhdGhpcy5wcm9wcy5pc191c2VyX2dvbGRfdmlwKT8nJzonY2stYngnfWB9IHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICc0MDAnLCBmb250U2l6ZTogJzE0cHgnIH19ID5cbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiAnMTIwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge3Rlc3QudGVzdC5uYW1lfSB7dGVzdC50ZXN0LnNob3dfZGV0YWlscz90ZXN0X2luZm86Jyd9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlc3QubnVtYmVyX29mX3Rlc3RzID8gPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxMnB4JywgZm9udFdlaWdodDogJzYwMCcsIGNvbG9yOiAnIzc1NzU3NScsZGlzcGxheTogJ2Jsb2NrJywgbWFyZ2luVG9wOiA1IH19Pnt0aGlzLnByb3BzLmlzX2luc3VyYW5jZV9hcHBsaWNhYmxlPycnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAoaW5jbHVkZXMgJHt0ZXN0Lm51bWJlcl9vZl90ZXN0c30gVGVzdHMpYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaXNfcGxhbl9hcHBsaWNhYmxlICYmICF0aGlzLnByb3BzLmlzX2luc3VyYW5jZV9hcHBsaWNhYmxlPyA8cCBjbGFzc05hbWU9XCJwa2ctZGlzY291bnRDcG5cIiBzdHlsZT17e2Rpc3BsYXk6J2lubGluZS1ibG9jaycsZmxvYXQ6J3JpZ2h0J319PkRvY3ByaW1lIENhcmUgQmVuZWZpdDwvcD46JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+IDogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5pc191c2VyX3ZpcCAmJiAhdGhpcy5wcm9wcy5pc191c2VyX2dvbGRfdmlwKT8nJyAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgOnRoaXMucHJvcHMuaGlkZV9wcmljZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwib25cIiBjaGVja2VkPXt0aGlzLnByb3BzLnRlc3QuaXNfc2VsZWN0ZWQgPyB0cnVlIDogZmFsc2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJvblwiIGNoZWNrZWQ9e3RoaXMucHJvcHMudGVzdC5pc19zZWxlY3RlZCA/IHRydWUgOiBmYWxzZX0gb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlVGVzdCh0ZXN0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaXNfdXNlcl92aXAgJiYgIXRoaXMucHJvcHMuaXNfdXNlcl9nb2xkX3ZpcD8nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOjxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBkbmctbGVmdC1wa2dcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiAnMHB4JyB9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPGJ1dHRvbiBjbGFzc05hbWU9XCJwa2ctaW5mby1idG5cIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGUoJ3Nob3dQYWNrYWdlSW5mbycsIHRlc3QpXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2luZm8uc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4qL31cblxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICggKHRoaXMucHJvcHMuaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgfHwgIXRoaXMucHJvcHMuc2VsZWN0ZWRUZXN0c0NvdW50KSAmJiBpbnN1cmFuY2UuaXNfaW5zdXJhbmNlX2NvdmVyZWQpIHx8ICF0ZXN0X3BhY2thZ2UubGVuZ3RoPycnXG4gICAgICAgICAgICAgICAgICAgICAgICA6PGJ1dHRvbiBjbGFzc05hbWU9XCJwa2ctaW5mby1idG4gaW5mby1zYW5cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnBhY2thZ2VOYW1lQ2xpY2soKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+e3RoaXMuc3RhdGUudGVzdExpc3RWaXNpYmxlID8gJ0hpZGUgZGV0YWlscycgOiAnVmlldyBkZXRhaWxzJ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLmlzX3VzZXJfdmlwICYmICF0aGlzLnByb3BzLmlzX3VzZXJfZ29sZF92aXApIHx8IHRoaXMucHJvcHMuaXNfcGxhbl9hcHBsaWNhYmxlIHx8IHRlc3QuaGlkZV9wcmljZSB8fCAoICh0aGlzLnByb3BzLmlzX2luc3VyYW5jZV9hcHBsaWNhYmxlIHx8ICF0aGlzLnByb3BzLnNlbGVjdGVkVGVzdHNDb3VudCkgJiYgaW5zdXJhbmNlLmlzX2luc3VyYW5jZV9jb3ZlcmVkICYmIGluc3VyYW5jZS5pc191c2VyX2luc3VyZWQpPyBcIlwiIFxuICAgICAgICAgICAgICAgICAgICA6cHJpY2VfdG9fcGF5ID09IG1ycC5zcGxpdCgnLicpWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICA/PHNwYW4gY2xhc3NOYW1lPVwidGVzdC1wcmljZSB0ZXh0LXNtXCI+4oK5IHtwcmljZV90b19wYXl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgOjxzcGFuIGNsYXNzTmFtZT1cInRlc3QtcHJpY2UgdGV4dC1zbVwiPuKCuSB7cHJpY2VfdG9fcGF5fTxzcGFuIGNsYXNzTmFtZT1cInRlc3QtbXJwXCI+4oK5IHtwYXJzZUludChtcnApfTwvc3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaXNfcGxhbl9hcHBsaWNhYmxlIHx8ICggKHRoaXMucHJvcHMuaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgfHwgIXRoaXMucHJvcHMuc2VsZWN0ZWRUZXN0c0NvdW50KSAmJiBpbnN1cmFuY2UuaXNfaW5zdXJhbmNlX2NvdmVyZWQgJiYgaW5zdXJhbmNlLmlzX3VzZXJfaW5zdXJlZCk/IDxzcGFuIGNsYXNzTmFtZT1cInRlc3QtcHJpY2UgdGV4dC1zbVwiPuKCuSAwPC9zcGFuPjonJyAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLmlzX3VzZXJfdmlwICYmICF0aGlzLnByb3BzLmlzX3VzZXJfZ29sZF92aXApPzxzcGFuIGNsYXNzTmFtZT1cInRlc3QtcHJpY2UgdGV4dC1zbVwiPuKCuSB7cHJpY2VfdG9fcGF5fTwvc3Bhbj46JydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXN0LXByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzdC5oaWRlX3ByaWNlID8gXCJcIiA6IDxzcGFuIGNsYXNzTmFtZT1cInRlc3QtcHJpY2VcIj4mIzgzNzc7IHtkZWFsX3ByaWNlfTxzcGFuIGNsYXNzTmFtZT1cInRlc3QtbXJwXCI+JiM4Mzc3OyB7bXJwfTwvc3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVzdC1uYW1lLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt0aGlzLnByb3BzLnRlc3QuaXNfc2VsZWN0ZWQgPyB0cnVlIDogZmFsc2V9IG9uQ2hhbmdlPXt0aGlzLnByb3BzLnRvZ2dsZVRlc3QuYmluZCh0aGlzLCB0ZXN0KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwa2ctaW5mb1wiIG9uQ2xpY2s9eygpID0+IHRoaXMucGFja2FnZU5hbWVDbGljaygpfSA+e3Rlc3QudGVzdC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGtnLWluZm8tYnRuXCIgb25DbGljaz17KCkgPT4geyB0b2dnbGUoJ3Nob3dQYWNrYWdlSW5mbycsIHRlc3QpIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2luZm8uc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5pc19pbnN1cmFuY2VfYXBwbGljYWJsZSAmJiB0aGlzLnN0YXRlLnRlc3RMaXN0VmlzaWJsZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdCBkcm9wLWRvd24tbGlzdCBsaXNpdG5nLWluLWxhYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzdF9wYWNrYWdlLm1hcCgocGFjaywgaikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxFeHBhbnNpb25QYW5lbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17an1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPXtwYWNrLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17cGFjay53aHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudExpc3Q9e3BhY2sucGFyYW1ldGVycyB8fCBbXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWNrYWdlVGVzdCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBMYWJEZXRhaWxzIGZyb20gJy4uL2NvbW1vbnMvbGFiRGV0YWlscy9pbmRleC5qcydcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9Mb2FkZXInXG5cbmltcG9ydCBMZWZ0QmFyIGZyb20gJy4uLy4uL2NvbW1vbnMvTGVmdEJhcidcbmltcG9ydCBSaWdodEJhciBmcm9tICcuLi8uLi9jb21tb25zL1JpZ2h0QmFyJ1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBIZWxtZXRUYWdzIGZyb20gJy4uLy4uL2NvbW1vbnMvSGVsbWV0VGFncydcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uLy4uL2NvbmZpZydcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9Ib21lL2Zvb3RlcidcblxuY2xhc3MgTGFiVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIGxldCBmb290ZXJEYXRhID0gbnVsbFxuICAgICAgICBpZiAodGhpcy5wcm9wcy5pbml0aWFsU2VydmVyRGF0YSkge1xuICAgICAgICAgICAgZm9vdGVyRGF0YSA9IHRoaXMucHJvcHMuaW5pdGlhbFNlcnZlckRhdGEuZm9vdGVyRGF0YVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBmb290ZXJEYXRhLFxuICAgICAgICAgICAgc2VvRnJpZW5kbHk6IHRoaXMucHJvcHMubWF0Y2gudXJsLmluY2x1ZGVzKCctbHBwJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zZW9GcmllbmRseSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRGb290ZXJEYXRhKHRoaXMucHJvcHMubWF0Y2gudXJsLnNwbGl0KCcvJylbMV0pLnRoZW4oKGZvb3RlckRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZm9vdGVyRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9vdGVyRGF0YTogZm9vdGVyRGF0YSB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBib29rTGFiKCkge1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnTGFiQm9va2luZ0NsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdsYWItYm9va2luZy1jbGlja2VkJ1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIC8qXG4gICAgICAgICAgICAgICAgbGV0IHRlc3RJZHMgPSB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0gfHwgW11cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgdGVzdElkcyA9IHRlc3RJZHMudGVzdHMubWFwKHggPT4geC50ZXN0X2lkKVxuICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldExhYkJ5SWQodGhpcy5wcm9wcy5zZWxlY3RlZExhYiwgdGVzdElkcylcbiAgICAgICAgKi9cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2VvRnJpZW5kbHkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0vYm9va2luZz9sYWJfaWQ9JHt0aGlzLnByb3BzLnNlbGVjdGVkTGFifWApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2xhYi8ke3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJ9L2Jvb2tgKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TWV0YVRhZ3NEYXRhKHNlb0RhdGEpIHtcbiAgICAgICAgbGV0IHRpdGxlID0gXCJcIlxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBcIlwiXG4gICAgICAgIGlmIChzZW9EYXRhKSB7XG4gICAgICAgICAgICB0aXRsZSA9IHNlb0RhdGEudGl0bGUgfHwgXCJcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb24gPSBzZW9EYXRhLmRlc2NyaXB0aW9uIHx8IFwiXCJcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24gfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgbGFiX2lkID0gdGhpcy5wcm9wcy5zZWxlY3RlZExhYlxuICAgICAgICBpZiAodGhpcy5wcm9wcy5pbml0aWFsU2VydmVyRGF0YSAmJiB0aGlzLnByb3BzLmluaXRpYWxTZXJ2ZXJEYXRhLmxhYklkKSB7XG4gICAgICAgICAgICBsYWJfaWQgPSB0aGlzLnByb3BzLmluaXRpYWxTZXJ2ZXJEYXRhLmxhYklkXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNlb191cmwgPSBcIlwiXG4gICAgICAgIGlmICh0aGlzLnByb3BzLkxBQlNbbGFiX2lkXSkge1xuICAgICAgICAgICAgc2VvX3VybCA9IHRoaXMucHJvcHMuTEFCU1tsYWJfaWRdLmxhYi51cmxcbiAgICAgICAgICAgIGlmIChzZW9fdXJsKSB7XG4gICAgICAgICAgICAgICAgc2VvX3VybCA9IFwiL1wiICsgc2VvX3VybFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBpc19wbGFuX2FwcGxpY2FibGUgPSBmYWxzZVxuICAgICAgICBsZXQgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgPSBmYWxzZVxuICAgICAgICBsZXQgaGlkZV9wcmljZSA9IGZhbHNlXG4gICAgICAgIGxldCBpc191c2VyX2luc3VyZWQgPSBmYWxzZVxuICAgICAgICBsZXQgaXNfdmlwX2FwcGxpY2FibGUgPSBmYWxzZVxuICAgICAgICBsZXQgaXNfdXNlcl9nb2xkX3ZpcCA9IGZhbHNlXG4gICAgICAgIGxldCBpc19jb3ZlcmVkX3VuZGVyX2dvbGQgPSBmYWxzZVxuICAgICAgICBsZXQgaXNfdXNlcl92aXAgPSBmYWxzZVxuXG4gICAgICAgIC8vRm9yIEluc3VyZWQgUGVyc29uIFJlbW92ZSB1bnNlbGVjdGVkIFRlc3RzL1BhY2thZ2VzXG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMucHJvZmlsZXMgJiYgdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXSkge1xuICAgICAgICAgICAgaXNfdXNlcl9pbnN1cmVkID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXS5pc19pbnN1cmVkXG4gICAgICAgICAgICBpc191c2VyX3ZpcCA9IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0uaXNfdmlwX21lbWJlclxuICAgICAgICAgICAgaXNfdXNlcl9nb2xkX3ZpcCA9IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0uaXNfdmlwX2dvbGRfbWVtYmVyXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY3VycmVudExhYlNlbGVjdGVkVGVzdHMgJiYgdGhpcy5wcm9wcy5jdXJyZW50TGFiU2VsZWN0ZWRUZXN0cy5sZW5ndGgpIHtcblxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkVGVzdHMgPSB0aGlzLnByb3BzLmN1cnJlbnRMYWJTZWxlY3RlZFRlc3RzLmZpbHRlcih4ID0+IHguaXNfc2VsZWN0ZWQpXG4gICAgICAgICAgICBpc19wbGFuX2FwcGxpY2FibGUgPSBzZWxlY3RlZFRlc3RzLmxlbmd0aCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgPSBzZWxlY3RlZFRlc3RzLmxlbmd0aCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgaXNfcGxhbl9hcHBsaWNhYmxlID0gc2VsZWN0ZWRUZXN0cy5sZW5ndGggPyB0cnVlIDogZmFsc2VcblxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jdXJyZW50TGFiU2VsZWN0ZWRUZXN0cy5tYXAoKHRlc3QsIGkpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmICh0ZXN0LmlzX3NlbGVjdGVkKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9DaGVjayBTZWxlY3RlZCBUZXN0cyBmb3IgSW5zdXJhbmNlXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlc3QuaW5zdXJhbmNlICYmIHRlc3QuaW5zdXJhbmNlLmlzX2luc3VyYW5jZV9jb3ZlcmVkICYmIHRlc3QuaW5zdXJhbmNlLmluc3VyYW5jZV90aHJlc2hvbGRfYW1vdW50ID49IHBhcnNlSW50KHRlc3QuZGVhbF9wcmljZSkgJiYgdGVzdC5pbnN1cmFuY2UuaXNfdXNlcl9pbnN1cmVkKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vQ2hlY2sgZm9yIFVzZXIgUGxhbnNcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGVzdC5pbmNsdWRlZF9pbl91c2VyX3BsYW4pIHtcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNfcGxhbl9hcHBsaWNhYmxlID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmKHRlc3QudmlwICYmIHRlc3QudmlwLmNvdmVyZWRfdW5kZXJfdmlwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzX3ZpcF9hcHBsaWNhYmxlID0gaXNfdXNlcl9nb2xkX3ZpcFxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKHRlc3QudmlwICYmIHRlc3QudmlwLmlzX2dvbGRfbWVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc19jb3ZlcmVkX3VuZGVyX2dvbGQgPSBpc191c2VyX2luc3VyZWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0ZXN0LmhpZGVfcHJpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZV9wcmljZSA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgdGhpcyB3YXMgdGhlIGxhbmRpbmcgcGFnZVxuICAgICAgICBsZXQgbGFuZGluZ19wYWdlID0gZmFsc2VcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93Lk9OX0xBTkRJTkdfUEFHRSkge1xuICAgICAgICAgICAgbGFuZGluZ19wYWdlID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciBzaG93U2VhcmNoPXt0cnVlfSAvPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBwYXJlbnQtc2VjdGlvbiBib29rLWFwcG9pbnRtZW50LXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGVmdEJhciAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctNyBjZW50ZXItY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxoZWFkZXIgY2xhc3NOYW1lPVwic2tpbi1wcmltYXJ5IGZpeGVkIGhvcml6b250YWwgdG9wIHN0aWNreS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci10aXRsZSBmdy03MDAgY2FwaXRhbGl6ZSB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaW5saW5lLWxpc3QgdG9wLW5hdiBhbHBoYS1ieCB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5nbygtMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3QtaW1nIGN0LWltZy1zbSBhcnJvdy1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvbGVmdC1hcnJvdy5zdmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlIGZ3LTcwMCBjYXBpdGFsaXplIHRleHQtd2hpdGUgdGV4dC1jZW50ZXJcIj5MYWIgRGV0YWlsczwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTJcIiBzdHlsZT17eyBwYWRkaW5nTGVmdDogMCB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLWhvbWUtaWNvbi1kaXZcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9kb2MtcHJpbWUtbG9nby5wbmdcIn0gY2xhc3NOYW1lPVwibW9iaWxlLWhvbWUtaWNvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaGVhZGVyPiAqL31cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMuTEFCU1tsYWJfaWRdICYmIHRoaXMucHJvcHMuTEFCU1tsYWJfaWRdLnRlc3RzKT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLkxBQlNbbGFiX2lkXSAmJiB0aGlzLnByb3BzLkxBQlNbbGFiX2lkXS5sYWIgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWxtZXRUYWdzIHRhZ3NEYXRhPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5nZXRNZXRhVGFnc0RhdGEodGhpcy5wcm9wcy5MQUJTW2xhYl9pZF0ubGFiLnNlbykudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5nZXRNZXRhVGFnc0RhdGEodGhpcy5wcm9wcy5MQUJTW2xhYl9pZF0ubGFiLnNlbykuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5vbmljYWxVcmw6IGAke0NPTkZJRy5BUElfQkFTRV9VUkx9JHtzZW9fdXJsIHx8IHRoaXMucHJvcHMubWF0Y2gudXJsfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gbm9JbmRleD17dGhpcy5wcm9wcy5sb2NhdGlvbiAmJiB0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lICYmIHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJ2NrLWJpcmxhLWhvc3BpdGFsLWZvci13b21lbi1pbi1zZWN0b3ItNTAtZ3VyZ2Fvbi1scHAnKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiRGV0YWlscyB7Li4udGhpcy5wcm9wc30gaXNfaW5zdXJhbmNlX2FwcGxpY2FibGU9e2lzX2luc3VyYW5jZV9hcHBsaWNhYmxlfSBkYXRhPXt0aGlzLnByb3BzLkxBQlNbbGFiX2lkXX0gaXNfcGxhbl9hcHBsaWNhYmxlPXtpc19wbGFuX2FwcGxpY2FibGV9IGhpZGVfcHJpY2U9e2hpZGVfcHJpY2V9IGlzX3VzZXJfaW5zdXJlZD17aXNfdXNlcl9pbnN1cmVkfSBzZW9GcmllbmRseT17dGhpcy5zdGF0ZS5zZW9GcmllbmRseX0gaXNfdmlwX2FwcGxpY2FibGU9e2lzX3ZpcF9hcHBsaWNhYmxlfSBpc19jb3ZlcmVkX3VuZGVyX2dvbGQ9e2lzX2NvdmVyZWRfdW5kZXJfZ29sZH0gaXNfdXNlcl92aXA9e2lzX3VzZXJfdmlwfSBpc191c2VyX2dvbGRfdmlwPXtpc191c2VyX2dvbGRfdmlwfS8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jdXJyZW50TGFiU2VsZWN0ZWRUZXN0cy5maWx0ZXIoeCA9PiB4LmlzX3NlbGVjdGVkKS5sZW5ndGggPCAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBvbkNsaWNrPXt0aGlzLmJvb2tMYWIuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwicmF0YnRuLWJ0biBwLTMgdi1idG4gdi1idG4tcHJpbWFyeSBidG4tbGcgZml4ZWQgaG9yaXpvbnRhbCBib3R0b20gbm8tcm91bmQgYnRuLWxnIHRleHQtbGcgc3RpY2t5LWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19pbnN1cmFuY2VfYXBwbGljYWJsZSB8fCBpc19wbGFuX2FwcGxpY2FibGUgfHwgdHJ1ZT8gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxzcGFuIGNsYXNzTmFtZT1cImNvdXBvbi1hdXRvLWFwcGxpZWQtbGFiXCI+KkNvdXBvbiBhdXRvIGFwcGxpZWQgb24gY2hlY2tvdXQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9va1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHNlbGVjdGVkLW9wdGlvbiBzdGF0aWMtYnRuIGJvb2stcmlnaHQtYWxpZ24tdGV4dFwiIHN0eWxlPXt7IHZlcnRpY2FsQWxpZ246IDIsIG1hcmdpblJpZ2h0OiA4LCBtYXJnaW5MZWZ0OiAxMCB9fT4oe3RoaXMucHJvcHMuY3VycmVudExhYlNlbGVjdGVkVGVzdHMuZmlsdGVyKHggPT4geC5pc19zZWxlY3RlZCkubGVuZ3RofSBTZWxlY3RlZCkgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IDxMb2FkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmlnaHRCYXIgZXh0cmFDbGFzcz1cIiBjaGF0LWZsb2F0LWJ0bi0yXCIgdHlwZT1cImxhYlwiIG1zZ1RlbXBsYXRlPVwiZ29sZF9nZW5lcmFsX3RlbXBsYXRlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyIGZvb3RlckRhdGE9e3RoaXMuc3RhdGUuZm9vdGVyRGF0YX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGFiVmlld1xuIiwiaW1wb3J0IExhYlZpZXcgZnJvbSAnLi9MYWJWaWV3LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBMYWJWaWV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGdldExhYkJ5VXJsLCBnZXRMYWJCeUlkLCBzZWxlY3RMYWJUaW1lU0xvdCwgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEsIGdldFJhdGluZ0NvbXBsaW1lbnRzLCBjcmVhdGVBcHBvaW50bWVudFJhdGluZywgdXBkYXRlQXBwb2ludG1lbnRSYXRpbmcsIGNsb3NlQXBwb2ludG1lbnRSYXRpbmcsIGNsb3NlQXBwb2ludG1lbnRQb3BVcCwgZ2V0Rm9vdGVyRGF0YSwgZ2V0TGFiVGVzdHMsIHNhdmVQaW5jb2RlLCBnZXRBbGxSYXRpbmdzLCBzZWxlY3RTZWFyY2hUeXBlLCBnZXREb3dubG9hZEFwcEJhbm5lckxpc3QgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuXG5pbXBvcnQgTGFiVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2RpYWdub3Npcy9sYWIvaW5kZXguanMnXG5cbmNsYXNzIExhYiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIGxldCBsX2lkID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQgfHwgdGhpcy5nZXRfbGFiX2lkX2J5X3VybCh0aGlzLnByb3BzLm1hdGNoLnVybClcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlbGVjdGVkTGFiOiBsX2lkLFxuICAgICAgICAgICAgZGVmYXVsdFRlc3Q6IFtdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRfbGFiX2lkX2J5X3VybCh1cmwpIHtcbiAgICAgICAgZm9yIChsZXQgbF9pZCBpbiB0aGlzLnByb3BzLkxBQlMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLkxBQlNbbF9pZF0ubGFiICYmIHVybC5pbmNsdWRlcyh0aGlzLnByb3BzLkxBQlNbbF9pZF0ubGFiLnVybCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbF9pZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWREYXRhKHN0b3JlLCBtYXRjaCkge1xuICAgICAgICBpZiAobWF0Y2gucGFyYW1zLmlkKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZ2V0TGFiQnlJZChtYXRjaC5wYXJhbXMuaWQpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHVybCA9IG1hdGNoLnVybFxuICAgICAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgICAgIHVybCA9IHVybC5zcGxpdChcIi9cIilbMV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goZ2V0TGFiQnlVcmwodXJsLCBbXSwgKGxhYklkLCB1cmwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhYklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2gudXJsLmluY2x1ZGVzKCctbHBwJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRGb290ZXJEYXRhKG1hdGNoLnVybC5zcGxpdChcIi9cIilbMV0pKCkudGhlbigoZm9vdGVyRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb290ZXJEYXRhID0gZm9vdGVyRGF0YSB8fCBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeyBsYWJJZCwgZm9vdGVyRGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeyBsYWJJZCB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeyBsYWJJZCB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHVybFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJvdXRlcjogKCkgPT4gbnVsbFxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgbGFiX2lkO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpIHtcbiAgICAgICAgICAgIGxldCB0ZXN0SWRzID0gdGhpcy5wcm9wcy5sYWJfdGVzdF9kYXRhW3RoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkXSB8fCBbXVxuICAgICAgICAgICAgbGFiX2lkID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWRcbiAgICAgICAgICAgIGxldCB0ZXN0cyA9IHRlc3RJZHMubWFwKHggPT4geC5pZClcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0TGFiQnlJZChsYWJfaWQsIHRlc3RzKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHVybCA9IHRoaXMucHJvcHMubWF0Y2gudXJsXG4gICAgICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICAgICAgdXJsID0gdXJsLnNwbGl0KFwiL1wiKVsxXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRMYWJCeVVybCh1cmwsIFtdLCAobGFiSWQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobGFiSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiX2lkID0gbGFiSWRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkTGFiOiBsYWJJZCB9KVxuICAgICAgICAgICAgICAgICAgICBsZXQgdGVzdElkcyA9IHRoaXMucHJvcHMubGFiX3Rlc3RfZGF0YVtsYWJJZF0gfHwgW11cbiAgICAgICAgICAgICAgICAgICAgbGV0IHRlc3RzID0gdGVzdElkcy5tYXAoeCA9PiB4LmlkKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldExhYkJ5SWQobGFiSWQsIHRlc3RzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vYWx3YXlzIGNsZWFyIHNlbGVjdGVkIHRpbWUgYXQgbGFiIHByb2ZpbGVcbiAgICAgICAgbGV0IHNsb3QgPSB7IHRpbWU6IHt9IH1cbiAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RMYWJUaW1lU0xvdChzbG90LCBmYWxzZSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGFiVmlldyB7Li4udGhpcy5wcm9wc30gc2VsZWN0ZWRMYWI9e3RoaXMuc3RhdGUuc2VsZWN0ZWRMYWJ9IC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHBhc3NlZFByb3BzKSA9PiB7XG4gICAgLyoqXG4gICAgICogaW5pdGlhbFNlcnZlckRhdGEgaXMgc2VydmVyIHJlbmRlcmVkIGFzeW5jIGRhdGEgcmVxdWlyZWQgYnVpbGQgaHRtbCBvbiBzZXJ2ZXIuIFxuICAgICAqL1xuICAgIGxldCBpbml0aWFsU2VydmVyRGF0YSA9IG51bGxcbiAgICBsZXQgeyBzdGF0aWNDb250ZXh0IH0gPSBwYXNzZWRQcm9wc1xuICAgIGlmIChzdGF0aWNDb250ZXh0ICYmIHN0YXRpY0NvbnRleHQuZGF0YSkge1xuICAgICAgICBpbml0aWFsU2VydmVyRGF0YSA9IHN0YXRpY0NvbnRleHQuZGF0YVxuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgICAgbGFiX3Rlc3RfZGF0YSxcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgc2VsZWN0ZWRDcml0ZXJpYXMsXG4gICAgICAgIGZpbHRlckNyaXRlcmlhLFxuICAgICAgICBMT0FERURfU0VBUkNIX0NSSVRFUklBX0xBQixcbiAgICAgICAgY3VycmVudExhYlNlbGVjdGVkVGVzdHNcbiAgICB9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX0xBQlNcblxuICAgIGxldCBMQUJTID0gc3RhdGUuTEFCU1xuICAgIGxldCB7IHJhdGVkX2FwcG9pbm1lbnRzLCBwcm9maWxlcywgc2VsZWN0ZWRQcm9maWxlLCBkZWZhdWx0UHJvZmlsZSwgYXBwX2Rvd25sb2FkX2xpc3QsIGRldmljZV9pbmZvIH0gPSBzdGF0ZS5VU0VSXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsYWJfdGVzdF9kYXRhLFxuICAgICAgICBzZWxlY3RlZENyaXRlcmlhcyxcbiAgICAgICAgTEFCUywgaW5pdGlhbFNlcnZlckRhdGEsXG4gICAgICAgIHJhdGVkX2FwcG9pbm1lbnRzLFxuICAgICAgICBwcm9maWxlcyxcbiAgICAgICAgc2VsZWN0ZWRQcm9maWxlLFxuICAgICAgICBjdXJyZW50TGFiU2VsZWN0ZWRUZXN0cyxcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgZGVmYXVsdFByb2ZpbGUsXG4gICAgICAgIGFwcF9kb3dubG9hZF9saXN0LFxuICAgICAgICBkZXZpY2VfaW5mb1xuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0TGFiQnlVcmw6ICh1cmwsIHRlc3RJZHMsIGNiKSA9PiBkaXNwYXRjaChnZXRMYWJCeVVybCh1cmwsIHRlc3RJZHMsIGNiKSksXG4gICAgICAgIGdldExhYkJ5SWQ6IChsYWJJZCwgdGVzdElkcykgPT4gZGlzcGF0Y2goZ2V0TGFiQnlJZChsYWJJZCwgdGVzdElkcykpLFxuICAgICAgICBzZWxlY3RMYWJUaW1lU0xvdDogKHNsb3QsIHJlc2NoZWR1bGUpID0+IGRpc3BhdGNoKHNlbGVjdExhYlRpbWVTTG90KHNsb3QsIHJlc2NoZWR1bGUpKSxcbiAgICAgICAgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWE6ICh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQpID0+IGRpc3BhdGNoKHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKHR5cGUsIGNyaXRlcmlhLCBmb3JjZUFkZCkpLFxuICAgICAgICBnZXRSYXRpbmdDb21wbGltZW50czogKGNhbGxiYWNrKSA9PiBkaXNwYXRjaChnZXRSYXRpbmdDb21wbGltZW50cyhjYWxsYmFjaykpLFxuICAgICAgICBjcmVhdGVBcHBvaW50bWVudFJhdGluZzogKGFwcG9pbnRtZW50RGF0YSwgY2FsbGJhY2spID0+IGRpc3BhdGNoKGNyZWF0ZUFwcG9pbnRtZW50UmF0aW5nKGFwcG9pbnRtZW50RGF0YSwgY2FsbGJhY2spKSxcbiAgICAgICAgdXBkYXRlQXBwb2ludG1lbnRSYXRpbmc6IChyYXRpbmdEYXRhLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2godXBkYXRlQXBwb2ludG1lbnRSYXRpbmcocmF0aW5nRGF0YSwgY2FsbGJhY2spKSxcbiAgICAgICAgY2xvc2VBcHBvaW50bWVudFJhdGluZzogKGRvY3RvcklkLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2goY2xvc2VBcHBvaW50bWVudFJhdGluZyhkb2N0b3JJZCwgY2FsbGJhY2spKSxcbiAgICAgICAgY2xvc2VBcHBvaW50bWVudFBvcFVwOiAoaWQsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaChjbG9zZUFwcG9pbnRtZW50UG9wVXAoaWQsIGNhbGxiYWNrKSksXG4gICAgICAgIGdldEZvb3RlckRhdGE6ICh1cmwpID0+IGRpc3BhdGNoKGdldEZvb3RlckRhdGEodXJsKSksXG4gICAgICAgIGdldExhYlRlc3RzOiAobGFiSWQsIHRlc3ROYW1lKSA9PiBkaXNwYXRjaChnZXRMYWJUZXN0cyhsYWJJZCwgdGVzdE5hbWUpKSxcbiAgICAgICAgc2F2ZVBpbmNvZGU6IChwaW5jb2RlKSA9PiBkaXNwYXRjaChzYXZlUGluY29kZShwaW5jb2RlKSksXG4gICAgICAgIGdldEFsbFJhdGluZ3M6IChjb250ZW50X3R5cGUsIG9iamVjdF9pZCwgcGFnZSwgY2IpID0+IGRpc3BhdGNoKGdldEFsbFJhdGluZ3MoY29udGVudF90eXBlLCBvYmplY3RfaWQsIHBhZ2UsIGNiKSksXG4gICAgICAgIHNlbGVjdFNlYXJjaFR5cGU6ICh0eXBlKSA9PiBkaXNwYXRjaChzZWxlY3RTZWFyY2hUeXBlKHR5cGUpKSxcbiAgICAgICAgZ2V0RG93bmxvYWRBcHBCYW5uZXJMaXN0OiAoY2IpID0+IGRpc3BhdGNoKGdldERvd25sb2FkQXBwQmFubmVyTGlzdChjYikpXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKExhYik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRPcGVuQmFubmVyKGxhYl90aW1pbmcsIGxhYl90aW1pbmdfZGF0YSA9IFtdLCBuZXh0X2xhYl90aW1pbmcsIG5leHRfbGFiX3RpbWluZ19kYXRhID0gbnVsbCkge1xuICAgIGxldCBpc19vcGVuX25vdyA9IGZhbHNlXG4gICAgbGV0IG9wZW5fbmV4dF90b2RheSA9IGZhbHNlXG5cbiAgICBsZXQgdGltZV9ub3cgPSBuZXcgRGF0ZSgpLmdldEhvdXJzKCkgKyAwLjVcbiAgICBmb3IgKGxldCBsdGQgb2YgbGFiX3RpbWluZ19kYXRhKSB7XG4gICAgICAgIGlmICh0aW1lX25vdyA8PSBsdGQuZW5kICYmIHRpbWVfbm93ID49IGx0ZC5zdGFydCkge1xuICAgICAgICAgICAgaXNfb3Blbl9ub3cgPSB0cnVlXG4gICAgICAgICAgICByZXR1cm4gPHAgc3R5bGU9e3sgZm9udFNpemU6IDEyIH19ID57bGFiX3RpbWluZ308L3A+XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRpbWVfbm93IDwgbHRkLnN0YXJ0KSB7XG4gICAgICAgICAgICBvcGVuX25leHRfdG9kYXkgPSBsdGQuc3RhcnRcbiAgICAgICAgICAgIG9wZW5fbmV4dF90b2RheSA9IF9kZWNpbWFsVG9UaW1lKG9wZW5fbmV4dF90b2RheSlcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3Blbl9uZXh0X3RvZGF5KSB7XG4gICAgICAgIHJldHVybiA8cCBzdHlsZT17eyBmb250U2l6ZTogMTIgfX0gPk9wZW5zIG5leHQgYXQge29wZW5fbmV4dF90b2RheX0sIHRvZGF5PC9wPlxuICAgIH1cblxuICAgIGNvbnN0IFdFRUtfREFZUyA9IFsnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheScsICdTdW5kYXknXVxuICAgIGxldCBuZXh0X29wZW4gPSBmYWxzZVxuICAgIGxldCBuZXh0X29wZW5fdG9kYXkgPSBcIlwiXG4gICAgaWYgKG5leHRfbGFiX3RpbWluZ19kYXRhKSB7XG4gICAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKClcbiAgICAgICAgbGV0IHdlZWtEYXlOdW1iZXIgPSB0b2RheS5nZXREYXkoKVxuICAgICAgICB3ZWVrRGF5TnVtYmVyID0gd2Vla0RheU51bWJlciA9PSAwID8gNiA6IHdlZWtEYXlOdW1iZXIgLSAxXG4gICAgICAgIGZvciAobGV0IGkgaW4gbmV4dF9sYWJfdGltaW5nX2RhdGEpIHtcbiAgICAgICAgICAgIG5leHRfb3BlbiA9IG5leHRfbGFiX3RpbWluZ19kYXRhW2ldWzBdLnN0YXJ0XG4gICAgICAgICAgICBuZXh0X29wZW4gPSBfZGVjaW1hbFRvVGltZShuZXh0X29wZW4pXG4gICAgICAgICAgICBpZiAoaSAtIHdlZWtEYXlOdW1iZXIgPT0gMSkge1xuICAgICAgICAgICAgICAgIG5leHRfb3Blbl90b2RheSA9ICd0b21vcnJvdydcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV4dF9vcGVuX3RvZGF5ID0gV0VFS19EQVlTW2ldXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChuZXh0X29wZW4gJiYgbmV4dF9vcGVuX3RvZGF5KSB7XG4gICAgICAgIHJldHVybiA8cCBzdHlsZT17eyBmb250U2l6ZTogMTIgfX0gPk9wZW5zIG5leHQgYXQge25leHRfb3Blbn0sIHtuZXh0X29wZW5fdG9kYXl9PC9wPlxuICAgIH1cblxuICAgIHJldHVybiBcIkNsb3NlZFwiXG5cbn1cblxuXG5mdW5jdGlvbiBfZGVjaW1hbFRvVGltZSh0aW1lKSB7XG4gICAgdGltZSA9IHRpbWUudG9TdHJpbmcoKVxuICAgIGxldCBob3VycyA9IHRpbWUuc3BsaXQoJy4nKVswXVxuICAgIGxldCBtaW51dGVzID0gdGltZS5zcGxpdCgnLicpWzFdXG4gICAgaG91cnMgPSBwYXJzZUludChob3VycylcbiAgICBpZiAobWludXRlcyA9PSAnNScpIHtcbiAgICAgICAgbWludXRlcyA9ICc6MzAnXG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWludXRlcyA9IFwiXCJcbiAgICB9XG4gICAgbGV0IGRheV90aW1lID0gXCJBTVwiXG4gICAgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICAgIGRheV90aW1lID0gXCJQTVwiXG4gICAgfVxuICAgIGhvdXJzID0gaG91cnMgJSAxMlxuICAgIHJldHVybiBgJHtob3Vyc30ke21pbnV0ZXN9ICR7ZGF5X3RpbWV9YFxufSJdLCJzb3VyY2VSb290IjoiIn0=