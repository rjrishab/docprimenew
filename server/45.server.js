exports.ids = [45];
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

/***/ "./dev/js/components/commons/ratingsProfileView/ComplimentListView.js":
/*!****************************************************************************!*\
  !*** ./dev/js/components/commons/ratingsProfileView/ComplimentListView.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ComplimentListView extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return _react2.default.createElement(
            "div",
            { className: "" },
            _react2.default.createElement(
                "div",
                { className: "user-satisfaction-images" },
                _react2.default.createElement("img", { className: "img-fluid", src: this.props.details.icon }),
                _react2.default.createElement(
                    "p",
                    null,
                    this.props.details.message
                ),
                _react2.default.createElement(
                    "span",
                    null,
                    this.props.details.count
                )
            )
        );
    }
}

exports.default = ComplimentListView;

/***/ }),

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RatingStars extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let { average_rating, rating_count } = this.props;

        let rating = '';
        if (average_rating) {
            rating = Math.ceil(average_rating * 2) / 2;
        }

        let ratingArray = [];
        for (let i = 0; i < Math.floor(rating); i++) {
            ratingArray.push(_react2.default.createElement('img', { key: i, src: "/assets" + '/img/customer-icons/rating-star-filled.svg', className: 'img-cstm-docrating', style: { width: this.props.width, marginRight: 2, height: this.props.height } }));
        }

        if (rating != Math.floor(rating)) {
            ratingArray.push(_react2.default.createElement('img', { key: 'half', src: "/assets" + '/img/customer-icons/halfstar_new.svg', className: 'img-cstm-docrating', style: { width: this.props.width, marginRight: 2, height: this.props.height } }));
        }

        let emptyStars = Math.floor(5 - rating);
        if (emptyStars) {
            for (let i = 0; i < emptyStars; i++) {
                ratingArray.push(_react2.default.createElement('img', { key: i + 'empty', src: "/assets" + '/img/customer-icons/rating-star-empty.svg', className: 'img-cstm-docrating', style: { width: this.props.width, marginRight: 2, height: this.props.height } }));
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
}

exports.default = RatingStars;

/***/ }),

/***/ "./dev/js/components/commons/ratingsProfileView/ratingReviewView.js":
/*!**************************************************************************!*\
  !*** ./dev/js/components/commons/ratingsProfileView/ratingReviewView.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactInfiniteScroller = __webpack_require__(/*! react-infinite-scroller */ "react-infinite-scroller");

var _reactInfiniteScroller2 = _interopRequireDefault(_reactInfiniteScroller);

var _DesktopProfileHeader = __webpack_require__(/*! ../DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _ComplimentListView = __webpack_require__(/*! ../ratingsProfileView/ComplimentListView.js */ "./dev/js/components/commons/ratingsProfileView/ComplimentListView.js");

var _ComplimentListView2 = _interopRequireDefault(_ComplimentListView);

var _ReviewList = __webpack_require__(/*! ../ratingsProfileView/ReviewList.js */ "./dev/js/components/commons/ratingsProfileView/ReviewList.js");

var _ReviewList2 = _interopRequireDefault(_ReviewList);

var _RatingGraph = __webpack_require__(/*! ../ratingsProfileView/RatingGraph.js */ "./dev/js/components/commons/ratingsProfileView/RatingGraph.js");

var _RatingGraph2 = _interopRequireDefault(_RatingGraph);

var _LeftBar = __webpack_require__(/*! ../LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _footer = __webpack_require__(/*! ../Home/footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RatingReviewView extends _react2.default.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            hasMore: false,
            footerData: null,
            page: 2
        };
    }

    componentDidMount() {
        if (window) {
            window.scrollTo(0, 0);
        }
        this.props.getAllRatings(this.props.content_type, this.props.id, 1, (err, data, hasMore) => {
            if (!err && data) {
                this.setState({ data, hasMore });
            }
        });
        setTimeout(() => {
            this.setState({ hasMore: true });
        }, 0);
    }

    loadMore() {
        this.setState({ hasMore: false, loading: true }, () => {
            this.props.getAllRatings(this.props.content_type, this.props.id, this.state.page, (err, data, hasMore) => {
                let newData = _extends({}, this.state.data);
                newData.rating = newData.rating.concat(data.rating);
                this.setState({ loading: false, page: this.state.page + 1, hasMore, data: newData });
            });
        });
    }

    render() {

        return _react2.default.createElement(
            _react2.default.Fragment,
            null,
            this.state.data ? _react2.default.createElement(
                'div',
                { className: 'widget-panel' },
                _react2.default.createElement(
                    'h4',
                    { className: 'panel-title mb-rmv' },
                    'Patient Feedback ',
                    _react2.default.createElement('a', { className: 'rateViewAll' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'panel-content pd-0 border-bottom-panel' },
                    _react2.default.createElement(_RatingGraph2.default, { details: this.state.data }),
                    _react2.default.createElement(
                        'div',
                        { className: 'user-satisfaction-section' },
                        _react2.default.createElement(
                            'div',
                            { className: 'row no-gutters' },
                            this.state.data.rating_graph && this.state.data.rating_graph.top_compliments ? this.state.data.rating_graph.top_compliments.map(compliment => _react2.default.createElement(_ComplimentListView2.default, { key: compliment.id, details: compliment })) : _react2.default.createElement('div', null)
                        )
                    ),
                    _react2.default.createElement(
                        _reactInfiniteScroller2.default,
                        {
                            pageStart: 1,
                            loadMore: this.loadMore.bind(this),
                            hasMore: this.state.hasMore,
                            useWindow: true,
                            initialLoad: false
                        },
                        _react2.default.createElement(_ReviewList2.default, { details: this.state.data })
                    )
                )
            ) : ''
        );
    }

}

exports.default = RatingReviewView;

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

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

class LabDetails extends _react2.default.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (window) {
            window.scrollTo(0, 0);
        }

        if (this.props.app_download_list && !this.props.app_download_list.length) {

            this.props.getDownloadAppBannerList(resp => {
                if (resp && resp.length && resp[0].data) {
                    this.showDownloadAppWidget(resp[0].data);
                }
            });
        } else {
            this.showDownloadAppWidget(this.props.app_download_list);
        }
    }

    showDownloadAppWidget(dataList) {
        let landing_page = false;
        if (typeof window == 'object' && window.ON_LANDING_PAGE) {
            landing_page = true;
        }

        let downloadAppButtonData = {};

        if (landing_page && dataList && dataList.length) {

            dataList.map(banner => {
                if (banner.isenabled && (this.props.match.url.includes(banner.ends_with) || this.props.match.url.includes(banner.starts_with))) {
                    downloadAppButtonData = banner;
                }
            });
        }

        if (Object.values(downloadAppButtonData).length) {

            let gtmTrack = {
                'Category': 'ConsumerApp', 'Action': 'DownloadAppButtonVisible', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'download-app-button-visible', 'starts_with': downloadAppButtonData.starts_with ? downloadAppButtonData.starts_with : '', 'ends_with': downloadAppButtonData.ends_with ? downloadAppButtonData.ends_with : '', 'device': this.props.device_info
            };
            _gtm2.default.sendEvent({ data: gtmTrack });
        }
    }

    downloadButton(data) {
        let gtmTrack = {
            'Category': 'ConsumerApp', 'Action': 'DownloadAppButtonClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'download-app-button-clicked', 'starts_with': data.starts_with ? data.starts_with : '', 'ends_with': data.ends_with ? data.ends_with : '',
            'device': this.props.device_info
        };
        _gtm2.default.sendEvent({ data: gtmTrack });
        if (window) {
            window.open(data.URL, '_self');
        }
    }

    openTests() {
        let data = {
            'Category': 'ConsumerApp', 'Action': 'UserSelectingAddRemoveLabTests', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'user-selecting-add-remove-lab-tests'
        };
        _gtm2.default.sendEvent({ data: data });
        if (this.props.seoFriendly) {
            this.props.history.push(`${window.location.pathname}/booking?lab_id=${this.props.data.lab.id}&action_page=tests`);
        } else {
            this.props.history.push(`/lab/${this.props.data.lab.id}/tests`);
        }
    }

    render() {

        let { about, address, lab_image, lat, long, name, primary_mobile, city, sublocality, locality, lab_thumbnail } = this.props.data.lab;
        let { lab_timing, lab_timing_data, mrp, next_lab_timing, next_lab_timing_data, total_test_count } = this.props.data;

        let landing_page = false;
        if (typeof window == 'object' && window.ON_LANDING_PAGE) {
            landing_page = true;
        }

        let downloadAppButtonData = {};

        if (landing_page && this.props.app_download_list && this.props.app_download_list.length) {

            this.props.app_download_list.map(banner => {
                if (banner.isenabled && (this.props.match.url.includes(banner.ends_with) || this.props.match.url.includes(banner.starts_with))) {
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
                                    `View all ${total_test_count ? total_test_count : ''} tests `,
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
                                        { href: `https://www.google.com/maps/search/?api=1&query=${lat},${long}`, className: 'link-text text-md fw-700', target: '_blank' },
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
                                        { href: `https://www.google.com/maps/search/?api=1&query=${lat},${long}`, className: 'link-text text-md fw-700 view-in-map', target: '_blank' },
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
}

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

/***/ "./dev/js/components/diagnosis/commons/labTests/expansionPanel.js":
/*!************************************************************************!*\
  !*** ./dev/js/components/diagnosis/commons/labTests/expansionPanel.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ExpansionPanel extends _react2.default.Component {

    constructor(props) {
        super(props);

        this.radioClick = (cat_id, test) => {
            this.props.selectCategory(cat_id, test);
        };

        this.state = {
            open: false
        };
    }

    toggleOpen() {
        this.setState({ open: !this.state.open });
    }

    componentWillReceiveProps() {
        if (this.props.locationSearch) {
            this.props.contentList.map((cont, i) => {
                if (this.props.defaultTest.includes(cont.id)) {
                    this.setState({ open: true });
                }
            });
        }
    }

    render() {
        let categoryId = '';
        let { heading, contentList } = this.props;
        if (contentList && contentList.length && !this.props.locationSearch) {
            heading += `  (includes ${contentList.length} tests)`;
        }
        if (this.props.locationSearch) {
            categoryId = this.props.categoryId;
        }
        return _react2.default.createElement(
            'li',
            { className: 'expansion-panel-list-item', style: this.props.locationSearch ? { listStyle: 'none', cursor: 'auto' } : {} },
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: this.props.locationSearch ? 'title lc-test-heading' : 'title', onClick: this.toggleOpen.bind(this), style: { marginBottom: 0, fontSize: 15, fontWeight: 400, paddingRight: 30, position: 'relative' } },
                    heading,
                    this.state.open ? _react2.default.createElement('img', { className: 'titlearrow-up', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" }) : _react2.default.createElement('img', { className: 'titlearrow', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                ),
                this.state.open ? _react2.default.createElement(
                    'div',
                    { className: 'more-content' },
                    this.props.content ? _react2.default.createElement('span', { className: 'pkg-content', dangerouslySetInnerHTML: { __html: this.props.content } }) : '',
                    this.props.locationSearch ? _react2.default.createElement(
                        'ul',
                        { className: 'lc-test-list mrt-10' },
                        contentList.map((cont, i) => {
                            return _react2.default.createElement(
                                'li',
                                { key: i, onClick: () => this.radioClick(categoryId, cont) },
                                _react2.default.createElement('input', { className: 'lc-test-radio', type: 'radio', value: cont.id, checked: this.props.radioChecked === cont.id || this.props.defaultTest.includes(cont.id), name: 'test' }),
                                _react2.default.createElement('span', { className: 'doc-checkmark' }),
                                cont.name
                            );
                        })
                    ) : _react2.default.createElement(
                        'ul',
                        { className: 'pkgs-drp-listing' },
                        contentList.map((cont, i) => {
                            return _react2.default.createElement(
                                'li',
                                { key: i },
                                cont
                            );
                        })
                    )
                ) : ""
            )
        );
    }
}

exports.default = ExpansionPanel;

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _gtm = __webpack_require__(/*! ../../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _packageTest = __webpack_require__(/*! ./packageTest.js */ "./dev/js/components/diagnosis/commons/labTests/packageTest.js");

var _packageTest2 = _interopRequireDefault(_packageTest);

var _packageInfo = __webpack_require__(/*! ./packageInfo.js */ "./dev/js/components/diagnosis/commons/labTests/packageInfo.js");

var _packageInfo2 = _interopRequireDefault(_packageInfo);

var _storage = __webpack_require__(/*! ../../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class LabTests extends _react2.default.Component {

    constructor(props) {
        super(props);
        this.state = {
            showPackageInfo: false,
            packageInfoTest: null
        };
    }

    openTests() {
        let data = {
            'Category': 'ConsumerApp', 'Action': 'UserSelectingAddRemoveLabTests', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'user-selecting-add-remove-lab-tests'
        };
        _gtm2.default.sendEvent({ data: data });

        this.props.history.push(`/lab/${this.props.data.lab.id}/tests`);
    }

    toggle(which, data = null) {
        this.setState({ [which]: !this.state[which], packageInfoTest: data });
    }

    toggleTest(test_to_toggle) {
        let test = Object.assign({}, test_to_toggle);
        test.add_to_common = true;

        this.props.toggleDiagnosisCriteria('test', test);
    }
    testInfo(test_id, url, event) {
        let lab_id = this.props.selectedLab;
        let selected_test_ids = this.props.lab_test_data[this.props.selectedLab] || [];
        selected_test_ids = selected_test_ids.map(x => x.id);
        let lat = 28.644800;
        let long = 77.216721;
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
        let data = {
            'Category': 'ConsumerApp', 'Action': 'testInfoClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'test-info-click', 'pageSource': 'lab-test-page'
        };
        _gtm2.default.sendEvent({ data: data });
    }

    searchTests() {
        this.props.selectSearchType('lab');
        this.props.history.push('/search');
    }

    render() {

        let is_package = false;
        let number_of_tests = 0;
        let defaultTests = [];
        let showDefaultTests = false;
        let hide_price = false;
        let selectedTestIds = [];
        let selectedTests = [];
        let selectedPackage = [];
        let unSelectedTests = [];
        let unSelectedPackage = [];
        let test_info = '';
        let show_details = '';
        let { is_plan_applicable } = this.props;
        let { is_insurance_applicable, is_vip_applicable, is_covered_under_gold } = this.props;
        let is_user_insured = false;
        let selectedTestsCount = 0;
        let vip_amount = 0;
        let finalMrp = 0;
        let price_to_pay = 0;

        //For Insured Person Remove unselected Tests/Packages

        if (this.props.profiles && this.props.profiles[this.props.defaultProfile]) {
            is_user_insured = this.props.profiles[this.props.defaultProfile].is_insured;
        }

        if (this.props.currentLabSelectedTests && this.props.currentLabSelectedTests.length) {
            selectedTestsCount = this.props.currentLabSelectedTests.filter(x => x.is_selected).length;

            this.props.currentLabSelectedTests.map((test, i) => {
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
                        selectedPackage.push(_react2.default.createElement(_packageTest2.default, { is_insurance_applicable: is_insurance_applicable, is_plan_applicable: is_plan_applicable, key: i, i: i, test: test, toggle: this.toggle.bind(this), toggleTest: this.toggleTest.bind(this), testInfo: this.testInfo.bind(this), hide_price: hide_price, selectedTestsCount: selectedTestsCount, is_user_insured: is_user_insured, is_vip_applicable: is_vip_applicable, is_user_vip: this.props.is_user_vip, is_user_gold_vip: this.props.is_user_gold_vip }));
                    } else {
                        unSelectedPackage.push(_react2.default.createElement(_packageTest2.default, { is_insurance_applicable: is_insurance_applicable, is_plan_applicable: is_plan_applicable, key: i, i: i, test: test, toggle: this.toggle.bind(this), toggleTest: this.toggleTest.bind(this), hide_price: hide_price, testInfo: this.testInfo.bind(this), selectedTestsCount: selectedTestsCount, is_vip_applicable: is_vip_applicable, is_user_vip: this.props.is_user_vip, is_user_gold_vip: this.props.is_user_gold_vip }));
                    }
                } else {
                    if (test.is_selected) {
                        finalMrp += parseInt(test.mrp);
                        price_to_pay = parseInt(test.deal_price);
                        if (test.vip && (this.props.is_user_vip || this.props.is_user_gold_vip)) {
                            vip_amount += parseInt(test.vip.vip_gold_price || 0) + parseInt(test.vip.vip_convenience_amount || 0);
                            price_to_pay = parseInt(test.vip.vip_amount || 0) + parseInt(test.vip.vip_convenience_amount || 0);
                        }
                        if (test.test.show_details) {
                            // test_info = <span className="srch-heading" style={{ float: 'right', cursor: 'pointer', color: '#e46608' }} onClick={this.testInfo.bind(this)}> Test Info</span>
                            test_info = _react2.default.createElement(
                                'span',
                                { style: { 'marginLeft': '5px', marginTop: '1px', display: 'inline-block', 'cursor': 'pointer' }, onClick: this.testInfo.bind(this, test.test.id, test.url) },
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
                                { className: `${this.props.is_user_vip && !this.props.is_user_gold_vip ? '' : 'ck-bx'}`, style: { fontWeight: 400, fontSize: 14 } },
                                test.test.name,
                                ' ',
                                test.test.show_details ? test_info : '',
                                this.props.is_user_vip && !this.props.is_user_gold_vip ? '' : _react2.default.createElement('input', { type: 'checkbox', checked: test.is_selected ? true : false, onChange: this.toggleTest.bind(this, test) }),
                                this.props.is_user_vip && !this.props.is_user_gold_vip ? '' : _react2.default.createElement('span', { className: 'checkmark' })
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
                        if (test.vip && (this.props.is_user_vip || this.props.is_user_gold_vip)) {
                            price_to_pay = parseInt(test.vip.vip_amount || 0) + parseInt(test.vip.vip_convenience_amount || 0);
                        }
                        if (test.test.show_details) {
                            test_info = _react2.default.createElement(
                                'span',
                                { style: { 'marginLeft': '5px', marginTop: '1px', display: 'inline-block', 'cursor': 'pointer' }, onClick: this.testInfo.bind(this, test.test.id, test.url) },
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
                                _react2.default.createElement('input', { type: 'checkbox', checked: test.is_selected ? true : false, onChange: this.toggleTest.bind(this, test) }),
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
            selectedTestIds = this.props.currentLabSelectedTests.map(x => x.test_id);
        }

        //For Insured Person Remove unselected Tests/Packages

        if (this.props.is_user_vip && !this.props.is_user_gold_vip /*is_user_insured || is_vip_applicable || is_covered_under_gold*/) {
                unSelectedTests = [];
                unSelectedPackage = [];
            }

        const parsed = queryString.parse(this.props.location.search);
        if (parsed && parsed.price_list && parsed.price_list == 'true') {
            showDefaultTests = true;
        }

        let totalAmount = 0;
        if (this.props.currentLabSelectedTests && this.props.currentLabSelectedTests.length) {
            for (var i = 0; i < this.props.currentLabSelectedTests.length; i++) {
                totalAmount = totalAmount + this.props.currentLabSelectedTests[i].deal_price;
            }
        }

        if (this.props.data.lab_tests && this.props.data.lab_tests.length && showDefaultTests) {
            defaultTests = this.props.data.lab_tests.map((test, i) => {
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

        let is_home_collection_enabled = false;
        let distance_related_charges = 0;
        let home_pickup_charges = false;
        let testsArray = [];
        if (this.props.data && this.props.data.lab) {
            is_home_collection_enabled = this.props.data.lab.is_home_collection_enabled;
            distance_related_charges = this.props.data.distance_related_charges;
            home_pickup_charges = this.props.data.lab.home_pickup_charges;
        }

        if (this.props.currentLabSelectedTests && this.props.currentLabSelectedTests.length) {
            testsArray = this.props.currentLabSelectedTests.filter(x => x.is_selected);
        }

        let pickup_text = "";
        let extra_price = "";
        let showPriceTag = 0;
        let showPickupText = true;

        if (testsArray.length) {
            for (let i = 0; i < testsArray.length; i++) {
                if (!testsArray[i].is_home_collection_enabled) {
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
        let vip_discount_price = finalMrp - vip_amount;
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
                { className: 'widget cpn-blur mrb-15 cursor-pointer', onClick: e => {
                        e.stopPropagation();
                        let analyticData = {
                            'Category': 'ConsumerApp', 'Action': 'LabProfileVipGoldClick', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'lab-profile-gold-click'
                        };
                        _gtm2.default.sendEvent({ data: analyticData });
                        this.props.history.push('/vip-gold-details?is_gold=true&source=lab-profile-gold-click&lead_source=Docprime');
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = ({ toggle, content }) => {
    let name = "";
    let pre_test_info = "";
    let why = "";
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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _expansionPanel = __webpack_require__(/*! ./expansionPanel */ "./dev/js/components/diagnosis/commons/labTests/expansionPanel.js");

var _expansionPanel2 = _interopRequireDefault(_expansionPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PackageTest extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            testListVisible: props.test.is_selected ? true : false
        };
    }

    packageNameClick() {
        this.setState({ testListVisible: !this.state.testListVisible });
    }

    render() {
        let { i, test, toggle } = this.props;
        let { deal_price, mrp, pre_test_info, insurance, vip } = test;
        let test_package = test.package || [];
        let test_info;
        let price_to_pay = deal_price;
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
                { className: `${this.props.is_user_vip && !this.props.is_user_gold_vip ? '' : 'ck-bx'}`, style: { fontWeight: '400', fontSize: '14px' } },
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
                    this.props.is_insurance_applicable ? '' : `(includes ${test.number_of_tests} Tests)`,
                    this.props.is_plan_applicable && !this.props.is_insurance_applicable ? _react2.default.createElement(
                        'p',
                        { className: 'pkg-discountCpn', style: { display: 'inline-block', float: 'right' } },
                        'Docprime Care Benefit'
                    ) : ''
                ) : '',
                this.props.is_user_vip && !this.props.is_user_gold_vip ? '' : this.props.hide_price ? _react2.default.createElement('input', { type: 'checkbox', value: 'on', checked: this.props.test.is_selected ? true : false }) : _react2.default.createElement('input', { type: 'checkbox', value: 'on', checked: this.props.test.is_selected ? true : false, onChange: e => {
                        this.props.toggleTest(test);
                    } }),
                this.props.is_user_vip && !this.props.is_user_gold_vip ? '' : _react2.default.createElement('span', { className: 'checkmark' })
            ),
            _react2.default.createElement(
                'div',
                { className: 'pdng-left-pkg' },
                _react2.default.createElement('span', { style: { paddingRight: '0px' } }),
                (this.props.is_insurance_applicable || !this.props.selectedTestsCount) && insurance.is_insurance_covered || !test_package.length ? '' : _react2.default.createElement(
                    'button',
                    { className: 'pkg-info-btn info-san', onClick: () => this.packageNameClick() },
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
                test_package.map((pack, j) => {
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
}

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

var _react = __webpack_require__(/*! react */ "react");

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

class LabView extends _react2.default.Component {
    constructor(props) {
        super(props);
        let footerData = null;
        if (this.props.initialServerData) {
            footerData = this.props.initialServerData.footerData;
        }
        this.state = {
            footerData,
            seoFriendly: this.props.match.url.includes('-lpp')
        };
    }

    componentDidMount() {
        if (window) {
            window.scrollTo(0, 0);
        }
        if (this.state.seoFriendly) {
            this.props.getFooterData(this.props.match.url.split('/')[1]).then(footerData => {
                if (footerData) {
                    this.setState({ footerData: footerData });
                }
            });
        }
    }

    bookLab() {
        let data = {
            'Category': 'ConsumerApp', 'Action': 'LabBookingClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lab-booking-clicked'
        };
        _gtm2.default.sendEvent({ data: data });
        /*
                let testIds = this.props.LABS[this.props.selectedLab] || []
        
                testIds = testIds.tests.map(x => x.test_id)
        
                this.props.getLabById(this.props.selectedLab, testIds)
        */
        if (this.state.seoFriendly) {
            this.props.history.push(`${window.location.pathname}/booking?lab_id=${this.props.selectedLab}`);
        } else {
            this.props.history.push(`/lab/${this.props.selectedLab}/book`);
        }
    }

    getMetaTagsData(seoData) {
        let title = "";
        let description = "";
        if (seoData) {
            title = seoData.title || "";
            description = seoData.description || "";
        }
        return { title, description };
    }

    render() {

        let lab_id = this.props.selectedLab;
        if (this.props.initialServerData && this.props.initialServerData.labId) {
            lab_id = this.props.initialServerData.labId;
        }
        let seo_url = "";
        if (this.props.LABS[lab_id]) {
            seo_url = this.props.LABS[lab_id].lab.url;
            if (seo_url) {
                seo_url = "/" + seo_url;
            }
        }
        let is_plan_applicable = false;
        let is_insurance_applicable = false;
        let hide_price = false;
        let is_user_insured = false;
        let is_vip_applicable = false;
        let is_user_gold_vip = false;
        let is_covered_under_gold = false;
        let is_user_vip = false;

        //For Insured Person Remove unselected Tests/Packages

        if (this.props.profiles && this.props.profiles[this.props.defaultProfile]) {
            is_user_insured = this.props.profiles[this.props.defaultProfile].is_insured;
            is_user_vip = this.props.profiles[this.props.defaultProfile].is_vip_member;
            is_user_gold_vip = this.props.profiles[this.props.defaultProfile].is_vip_gold_member;
        }
        if (this.props.currentLabSelectedTests && this.props.currentLabSelectedTests.length) {

            let selectedTests = this.props.currentLabSelectedTests.filter(x => x.is_selected);
            is_plan_applicable = selectedTests.length ? true : false;
            is_insurance_applicable = selectedTests.length ? true : false;
            is_plan_applicable = selectedTests.length ? true : false;

            this.props.currentLabSelectedTests.map((test, i) => {

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
        let landing_page = false;
        if (typeof window == 'object' && window.ON_LANDING_PAGE) {
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
                                    canonicalUrl: `${_config2.default.API_BASE_URL}${seo_url || this.props.match.url}`
                                }, noIndex: this.props.location && this.props.location.pathname && this.props.location.pathname.includes('ck-birla-hospital-for-women-in-sector-50-gurgaon-lpp') }),
                            _react2.default.createElement(_index2.default, _extends({}, this.props, { is_insurance_applicable: is_insurance_applicable, data: this.props.LABS[lab_id], is_plan_applicable: is_plan_applicable, hide_price: hide_price, is_user_insured: is_user_insured, seoFriendly: this.state.seoFriendly, is_vip_applicable: is_vip_applicable, is_covered_under_gold: is_covered_under_gold, is_user_vip: is_user_vip, is_user_gold_vip: is_user_gold_vip })),
                            _react2.default.createElement(
                                'button',
                                { disabled: this.props.currentLabSelectedTests.filter(x => x.is_selected).length < 1, onClick: this.bookLab.bind(this), className: 'ratbtn-btn p-3 v-btn v-btn-primary btn-lg fixed horizontal bottom no-round btn-lg text-lg sticky-btn' },
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
                                    this.props.currentLabSelectedTests.filter(x => x.is_selected).length,
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _index2 = __webpack_require__(/*! ../../components/diagnosis/lab/index.js */ "./dev/js/components/diagnosis/lab/index.js");

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Lab extends _react2.default.Component {
    constructor(props) {
        super(props);
        let l_id = this.props.match.params.id || this.get_lab_id_by_url(this.props.match.url);
        this.state = {
            selectedLab: l_id,
            defaultTest: []
        };
    }

    get_lab_id_by_url(url) {
        for (let l_id in this.props.LABS) {
            if (this.props.LABS[l_id].lab && url.includes(this.props.LABS[l_id].lab.url)) {
                return l_id;
            }
        }
        return null;
    }

    static loadData(store, match) {
        if (match.params.id) {
            return store.dispatch((0, _index.getLabById)(match.params.id));
        } else {
            let url = match.url;
            if (url) {
                url = url.split("/")[1];
            }
            return new Promise((resolve, reject) => {
                store.dispatch((0, _index.getLabByUrl)(url, [], (labId, url) => {
                    if (labId) {
                        if (match.url.includes('-lpp')) {
                            (0, _index.getFooterData)(match.url.split("/")[1])().then(footerData => {
                                footerData = footerData || null;
                                resolve({ labId, footerData });
                            }).catch(e => {
                                resolve({ labId });
                            });
                        } else {
                            resolve({ labId });
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

    componentDidMount() {
        let lab_id;
        if (this.props.match.params.id) {
            let testIds = this.props.lab_test_data[this.props.match.params.id] || [];
            lab_id = this.props.match.params.id;
            let tests = testIds.map(x => x.id);
            this.props.getLabById(lab_id, tests);
        } else {
            let url = this.props.match.url;
            if (url) {
                url = url.split("/")[1];
            }
            this.props.getLabByUrl(url, [], labId => {
                if (labId) {
                    lab_id = labId;
                    this.setState({ selectedLab: labId });
                    let testIds = this.props.lab_test_data[labId] || [];
                    let tests = testIds.map(x => x.id);
                    this.props.getLabById(labId, tests);
                }
            });
        }

        //always clear selected time at lab profile
        let slot = { time: {} };
        this.props.selectLabTimeSLot(slot, false);
    }

    render() {
        return _react2.default.createElement(_index3.default, _extends({}, this.props, { selectedLab: this.state.selectedLab }));
    }
}

Lab.contextTypes = {
    router: () => null
};
const mapStateToProps = (state, passedProps) => {
    /**
     * initialServerData is server rendered async data required build html on server. 
     */
    let initialServerData = null;
    let { staticContext } = passedProps;
    if (staticContext && staticContext.data) {
        initialServerData = staticContext.data;
    }

    const {
        lab_test_data,
        selectedLocation,
        selectedCriterias,
        filterCriteria,
        LOADED_SEARCH_CRITERIA_LAB,
        currentLabSelectedTests
    } = state.SEARCH_CRITERIA_LABS;

    let LABS = state.LABS;
    let { rated_appoinments, profiles, selectedProfile, defaultProfile, app_download_list, device_info } = state.USER;

    return {
        lab_test_data,
        selectedCriterias,
        LABS, initialServerData,
        rated_appoinments,
        profiles,
        selectedProfile,
        currentLabSelectedTests,
        selectedLocation,
        defaultProfile,
        app_download_list,
        device_info
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getLabByUrl: (url, testIds, cb) => dispatch((0, _index.getLabByUrl)(url, testIds, cb)),
        getLabById: (labId, testIds) => dispatch((0, _index.getLabById)(labId, testIds)),
        selectLabTimeSLot: (slot, reschedule) => dispatch((0, _index.selectLabTimeSLot)(slot, reschedule)),
        toggleDiagnosisCriteria: (type, criteria, forceAdd) => dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria, forceAdd)),
        getRatingCompliments: callback => dispatch((0, _index.getRatingCompliments)(callback)),
        createAppointmentRating: (appointmentData, callback) => dispatch((0, _index.createAppointmentRating)(appointmentData, callback)),
        updateAppointmentRating: (ratingData, callback) => dispatch((0, _index.updateAppointmentRating)(ratingData, callback)),
        closeAppointmentRating: (doctorId, callback) => dispatch((0, _index.closeAppointmentRating)(doctorId, callback)),
        closeAppointmentPopUp: (id, callback) => dispatch((0, _index.closeAppointmentPopUp)(id, callback)),
        getFooterData: url => dispatch((0, _index.getFooterData)(url)),
        getLabTests: (labId, testName) => dispatch((0, _index.getLabTests)(labId, testName)),
        savePincode: pincode => dispatch((0, _index.savePincode)(pincode)),
        getAllRatings: (content_type, object_id, page, cb) => dispatch((0, _index.getAllRatings)(content_type, object_id, page, cb)),
        selectSearchType: type => dispatch((0, _index.selectSearchType)(type)),
        getDownloadAppBannerList: cb => dispatch((0, _index.getDownloadAppBannerList)(cb))
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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buildOpenBanner(lab_timing, lab_timing_data = [], next_lab_timing, next_lab_timing_data = null) {
    let is_open_now = false;
    let open_next_today = false;

    let time_now = new Date().getHours() + 0.5;
    for (let ltd of lab_timing_data) {
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

    if (open_next_today) {
        return _react2.default.createElement(
            'p',
            { style: { fontSize: 12 } },
            'Opens next at ',
            open_next_today,
            ', today'
        );
    }

    const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let next_open = false;
    let next_open_today = "";
    if (next_lab_timing_data) {
        let today = new Date();
        let weekDayNumber = today.getDay();
        weekDayNumber = weekDayNumber == 0 ? 6 : weekDayNumber - 1;
        for (let i in next_lab_timing_data) {
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
    let hours = time.split('.')[0];
    let minutes = time.split('.')[1];
    hours = parseInt(hours);
    if (minutes == '5') {
        minutes = ':30';
    } else {
        minutes = "";
    }
    let day_time = "AM";
    if (hours >= 12) {
        day_time = "PM";
    }
    hours = hours % 12;
    return `${hours}${minutes} ${day_time}`;
}

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9yYXRpbmdzUHJvZmlsZVZpZXcvQ29tcGxpbWVudExpc3RWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvcmF0aW5nc1Byb2ZpbGVWaWV3L1JhdGluZ1N0YXJzLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvcmF0aW5nc1Byb2ZpbGVWaWV3L3JhdGluZ1Jldmlld1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL2NvbW1vbnMvbGFiRGV0YWlscy9MYWJEZXRhaWwuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL2NvbW1vbnMvbGFiRGV0YWlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvY29tbW9ucy9sYWJUZXN0cy9leHBhbnNpb25QYW5lbC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvY29tbW9ucy9sYWJUZXN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvY29tbW9ucy9sYWJUZXN0cy9sYWJUZXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvY29tbW9ucy9sYWJUZXN0cy9wYWNrYWdlSW5mby5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvY29tbW9ucy9sYWJUZXN0cy9wYWNrYWdlVGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvbGFiL0xhYlZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL2xhYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9kaWFnbm9zaXMvTGFiLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9oZWxwZXJzL3V0aWxzLmpzIl0sIm5hbWVzIjpbIkxvYWRlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsImNsYXNzVHlwZSIsImlGcmFtZVBvcHVwIiwiQ29tcGxpbWVudExpc3RWaWV3IiwiZGV0YWlscyIsImljb24iLCJtZXNzYWdlIiwiY291bnQiLCJSYXRpbmdTdGFycyIsInN0YXRlIiwiYXZlcmFnZV9yYXRpbmciLCJyYXRpbmdfY291bnQiLCJyYXRpbmciLCJNYXRoIiwiY2VpbCIsInJhdGluZ0FycmF5IiwiaSIsImZsb29yIiwicHVzaCIsIkFTU0VUU19CQVNFX1VSTCIsIndpZHRoIiwibWFyZ2luUmlnaHQiLCJoZWlnaHQiLCJlbXB0eVN0YXJzIiwianVzdGlmeUNlbnRlciIsImp1c3RpZnlDb250ZW50IiwiUmF0aW5nUmV2aWV3VmlldyIsImRhdGEiLCJoYXNNb3JlIiwiZm9vdGVyRGF0YSIsInBhZ2UiLCJjb21wb25lbnREaWRNb3VudCIsIndpbmRvdyIsInNjcm9sbFRvIiwiZ2V0QWxsUmF0aW5ncyIsImNvbnRlbnRfdHlwZSIsImlkIiwiZXJyIiwic2V0U3RhdGUiLCJzZXRUaW1lb3V0IiwibG9hZE1vcmUiLCJsb2FkaW5nIiwibmV3RGF0YSIsImNvbmNhdCIsInJhdGluZ19ncmFwaCIsInRvcF9jb21wbGltZW50cyIsIm1hcCIsImNvbXBsaW1lbnQiLCJiaW5kIiwiTGFiRGV0YWlscyIsImFwcF9kb3dubG9hZF9saXN0IiwibGVuZ3RoIiwiZ2V0RG93bmxvYWRBcHBCYW5uZXJMaXN0IiwicmVzcCIsInNob3dEb3dubG9hZEFwcFdpZGdldCIsImRhdGFMaXN0IiwibGFuZGluZ19wYWdlIiwiT05fTEFORElOR19QQUdFIiwiZG93bmxvYWRBcHBCdXR0b25EYXRhIiwiYmFubmVyIiwiaXNlbmFibGVkIiwibWF0Y2giLCJ1cmwiLCJpbmNsdWRlcyIsImVuZHNfd2l0aCIsInN0YXJ0c193aXRoIiwiT2JqZWN0IiwidmFsdWVzIiwiZ3RtVHJhY2siLCJHVE0iLCJnZXRVc2VySWQiLCJkZXZpY2VfaW5mbyIsInNlbmRFdmVudCIsImRvd25sb2FkQnV0dG9uIiwib3BlbiIsIlVSTCIsIm9wZW5UZXN0cyIsInNlb0ZyaWVuZGx5IiwiaGlzdG9yeSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJsYWIiLCJhYm91dCIsImFkZHJlc3MiLCJsYWJfaW1hZ2UiLCJsYXQiLCJsb25nIiwibmFtZSIsInByaW1hcnlfbW9iaWxlIiwiY2l0eSIsInN1YmxvY2FsaXR5IiwibG9jYWxpdHkiLCJsYWJfdGh1bWJuYWlsIiwibGFiX3RpbWluZyIsImxhYl90aW1pbmdfZGF0YSIsIm1ycCIsIm5leHRfbGFiX3RpbWluZyIsIm5leHRfbGFiX3RpbWluZ19kYXRhIiwidG90YWxfdGVzdF9jb3VudCIsInRvTG93ZXJDYXNlIiwibWFyZ2luVG9wIiwidW5yYXRlZF9hcHBvaW50bWVudCIsInNwbGl0IiwiaXNfdXNlcl92aXAiLCJpc191c2VyX2dvbGRfdmlwIiwiZGlzcGxheV9yYXRpbmdfd2lkZ2V0IiwiRXhwYW5zaW9uUGFuZWwiLCJyYWRpb0NsaWNrIiwiY2F0X2lkIiwidGVzdCIsInNlbGVjdENhdGVnb3J5IiwidG9nZ2xlT3BlbiIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJsb2NhdGlvblNlYXJjaCIsImNvbnRlbnRMaXN0IiwiY29udCIsImRlZmF1bHRUZXN0IiwiY2F0ZWdvcnlJZCIsImhlYWRpbmciLCJsaXN0U3R5bGUiLCJjdXJzb3IiLCJtYXJnaW5Cb3R0b20iLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJwYWRkaW5nUmlnaHQiLCJwb3NpdGlvbiIsImNvbnRlbnQiLCJfX2h0bWwiLCJyYWRpb0NoZWNrZWQiLCJMYWJUZXN0cyIsInF1ZXJ5U3RyaW5nIiwicmVxdWlyZSIsInNob3dQYWNrYWdlSW5mbyIsInBhY2thZ2VJbmZvVGVzdCIsInRvZ2dsZSIsIndoaWNoIiwidG9nZ2xlVGVzdCIsInRlc3RfdG9fdG9nZ2xlIiwiYXNzaWduIiwiYWRkX3RvX2NvbW1vbiIsInRvZ2dsZURpYWdub3Npc0NyaXRlcmlhIiwidGVzdEluZm8iLCJ0ZXN0X2lkIiwiZXZlbnQiLCJsYWJfaWQiLCJzZWxlY3RlZExhYiIsInNlbGVjdGVkX3Rlc3RfaWRzIiwibGFiX3Rlc3RfZGF0YSIsIngiLCJzZWxlY3RlZExvY2F0aW9uIiwiZ2VvbWV0cnkiLCJsbmciLCJzdG9wUHJvcGFnYXRpb24iLCJzZWFyY2hUZXN0cyIsInNlbGVjdFNlYXJjaFR5cGUiLCJpc19wYWNrYWdlIiwibnVtYmVyX29mX3Rlc3RzIiwiZGVmYXVsdFRlc3RzIiwic2hvd0RlZmF1bHRUZXN0cyIsImhpZGVfcHJpY2UiLCJzZWxlY3RlZFRlc3RJZHMiLCJzZWxlY3RlZFRlc3RzIiwic2VsZWN0ZWRQYWNrYWdlIiwidW5TZWxlY3RlZFRlc3RzIiwidW5TZWxlY3RlZFBhY2thZ2UiLCJ0ZXN0X2luZm8iLCJzaG93X2RldGFpbHMiLCJpc19wbGFuX2FwcGxpY2FibGUiLCJpc19pbnN1cmFuY2VfYXBwbGljYWJsZSIsImlzX3ZpcF9hcHBsaWNhYmxlIiwiaXNfY292ZXJlZF91bmRlcl9nb2xkIiwiaXNfdXNlcl9pbnN1cmVkIiwic2VsZWN0ZWRUZXN0c0NvdW50IiwidmlwX2Ftb3VudCIsImZpbmFsTXJwIiwicHJpY2VfdG9fcGF5IiwicHJvZmlsZXMiLCJkZWZhdWx0UHJvZmlsZSIsImlzX2luc3VyZWQiLCJjdXJyZW50TGFiU2VsZWN0ZWRUZXN0cyIsImZpbHRlciIsImlzX3NlbGVjdGVkIiwicGFyc2VJbnQiLCJ2aXAiLCJ2aXBfZ29sZF9wcmljZSIsInZpcF9jb252ZW5pZW5jZV9hbW91bnQiLCJkZWFsX3ByaWNlIiwiZGlzcGxheSIsImluY2x1ZGVkX2luX3VzZXJfcGxhbiIsImluc3VyYW5jZSIsImlzX2luc3VyYW5jZV9jb3ZlcmVkIiwicGFyc2VkIiwicGFyc2UiLCJzZWFyY2giLCJwcmljZV9saXN0IiwidG90YWxBbW91bnQiLCJsYWJfdGVzdHMiLCJpc19ob21lX2NvbGxlY3Rpb25fZW5hYmxlZCIsImRpc3RhbmNlX3JlbGF0ZWRfY2hhcmdlcyIsImhvbWVfcGlja3VwX2NoYXJnZXMiLCJ0ZXN0c0FycmF5IiwicGlja3VwX3RleHQiLCJleHRyYV9wcmljZSIsInNob3dQcmljZVRhZyIsInNob3dQaWNrdXBUZXh0IiwidmlwX2Rpc2NvdW50X3ByaWNlIiwiU1RPUkFHRSIsImlzQWdlbnQiLCJlIiwiYW5hbHl0aWNEYXRhIiwicHJlX3Rlc3RfaW5mbyIsIndoeSIsInBhZGRpbmciLCJQYWNrYWdlVGVzdCIsInRlc3RMaXN0VmlzaWJsZSIsInBhY2thZ2VOYW1lQ2xpY2siLCJ0ZXN0X3BhY2thZ2UiLCJwYWNrYWdlIiwiY29sb3IiLCJmbG9hdCIsInBhY2siLCJqIiwicGFyYW1ldGVycyIsIkxhYlZpZXciLCJpbml0aWFsU2VydmVyRGF0YSIsImdldEZvb3RlckRhdGEiLCJ0aGVuIiwiYm9va0xhYiIsImdldE1ldGFUYWdzRGF0YSIsInNlb0RhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibGFiSWQiLCJzZW9fdXJsIiwiTEFCUyIsImlzX3ZpcF9tZW1iZXIiLCJpc192aXBfZ29sZF9tZW1iZXIiLCJpbnN1cmFuY2VfdGhyZXNob2xkX2Ftb3VudCIsImNvdmVyZWRfdW5kZXJfdmlwIiwiaXNfZ29sZF9tZW1iZXIiLCJ0ZXN0cyIsInNlbyIsImNhbm9uaWNhbFVybCIsIkNPTkZJRyIsIkFQSV9CQVNFX1VSTCIsInZlcnRpY2FsQWxpZ24iLCJtYXJnaW5MZWZ0IiwiTGFiIiwibF9pZCIsInBhcmFtcyIsImdldF9sYWJfaWRfYnlfdXJsIiwibG9hZERhdGEiLCJzdG9yZSIsImRpc3BhdGNoIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjYXRjaCIsInRlc3RJZHMiLCJnZXRMYWJCeUlkIiwiZ2V0TGFiQnlVcmwiLCJzbG90IiwidGltZSIsInNlbGVjdExhYlRpbWVTTG90IiwiY29udGV4dFR5cGVzIiwicm91dGVyIiwibWFwU3RhdGVUb1Byb3BzIiwicGFzc2VkUHJvcHMiLCJzdGF0aWNDb250ZXh0Iiwic2VsZWN0ZWRDcml0ZXJpYXMiLCJmaWx0ZXJDcml0ZXJpYSIsIkxPQURFRF9TRUFSQ0hfQ1JJVEVSSUFfTEFCIiwiU0VBUkNIX0NSSVRFUklBX0xBQlMiLCJyYXRlZF9hcHBvaW5tZW50cyIsInNlbGVjdGVkUHJvZmlsZSIsIlVTRVIiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjYiIsInJlc2NoZWR1bGUiLCJ0eXBlIiwiY3JpdGVyaWEiLCJmb3JjZUFkZCIsImdldFJhdGluZ0NvbXBsaW1lbnRzIiwiY2FsbGJhY2siLCJjcmVhdGVBcHBvaW50bWVudFJhdGluZyIsImFwcG9pbnRtZW50RGF0YSIsInVwZGF0ZUFwcG9pbnRtZW50UmF0aW5nIiwicmF0aW5nRGF0YSIsImNsb3NlQXBwb2ludG1lbnRSYXRpbmciLCJkb2N0b3JJZCIsImNsb3NlQXBwb2ludG1lbnRQb3BVcCIsImdldExhYlRlc3RzIiwidGVzdE5hbWUiLCJzYXZlUGluY29kZSIsInBpbmNvZGUiLCJvYmplY3RfaWQiLCJidWlsZE9wZW5CYW5uZXIiLCJpc19vcGVuX25vdyIsIm9wZW5fbmV4dF90b2RheSIsInRpbWVfbm93IiwiRGF0ZSIsImdldEhvdXJzIiwibHRkIiwiZW5kIiwic3RhcnQiLCJfZGVjaW1hbFRvVGltZSIsIldFRUtfREFZUyIsIm5leHRfb3BlbiIsIm5leHRfb3Blbl90b2RheSIsInRvZGF5Iiwid2Vla0RheU51bWJlciIsImdldERheSIsInRvU3RyaW5nIiwiaG91cnMiLCJtaW51dGVzIiwiZGF5X3RpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVB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QUNBLGdCQUFJblMsSUFBSXNTLGFBQUosSUFBcUIsQ0FBekIsRUFBNEI7QUFDeEJGLGtDQUFrQixVQUFsQjtBQUNILGFBRkQsTUFFTztBQUNIQSxrQ0FBa0JGLFVBQVVsUyxDQUFWLENBQWxCO0FBQ0g7QUFDRDtBQUNIO0FBQ0o7QUFDRCxRQUFJbVMsYUFBYUMsZUFBakIsRUFBa0M7QUFDOUIsZUFBTztBQUFBO0FBQUEsY0FBRyxPQUFPLEVBQUUxTCxVQUFVLEVBQVosRUFBVjtBQUFBO0FBQTRDeUwscUJBQTVDO0FBQUE7QUFBeURDO0FBQXpELFNBQVA7QUFDSDs7QUFFRCxXQUFPLFFBQVA7QUFFSDs7QUFHRCxTQUFTSCxjQUFULENBQXdCM0MsSUFBeEIsRUFBOEI7QUFDMUJBLFdBQU9BLEtBQUtrRCxRQUFMLEVBQVA7QUFDQSxRQUFJQyxRQUFRbkQsS0FBS2hLLEtBQUwsQ0FBVyxHQUFYLEVBQWdCLENBQWhCLENBQVo7QUFDQSxRQUFJb04sVUFBVXBELEtBQUtoSyxLQUFMLENBQVcsR0FBWCxFQUFnQixDQUFoQixDQUFkO0FBQ0FtTixZQUFRbkksU0FBU21JLEtBQVQsQ0FBUjtBQUNBLFFBQUlDLFdBQVcsR0FBZixFQUFvQjtBQUNoQkEsa0JBQVUsS0FBVjtBQUNILEtBRkQsTUFFTztBQUNIQSxrQkFBVSxFQUFWO0FBQ0g7QUFDRCxRQUFJQyxXQUFXLElBQWY7QUFDQSxRQUFJRixTQUFTLEVBQWIsRUFBaUI7QUFDYkUsbUJBQVcsSUFBWDtBQUNIO0FBQ0RGLFlBQVFBLFFBQVEsRUFBaEI7QUFDQSxXQUFRLEdBQUVBLEtBQU0sR0FBRUMsT0FBUSxJQUFHQyxRQUFTLEVBQXRDO0FBQ0gsQyIsImZpbGUiOiI0NS5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBMb2FkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NUeXBlIHx8IFwibG9hZGVyQ2lyY3VsYXJcIn0gPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHAtbG9hZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlGcmFtZVBvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMTBcIj5SZWRpcmVjdGluZyB5b3UgdG8gUGhhcm1lYXN5IHdlYnNpdGUuLi48L3A+IDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlclxuIiwiaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBDb21wbGltZW50TGlzdFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1zYXRpc2ZhY3Rpb24taW1hZ2VzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXt0aGlzLnByb3BzLmRldGFpbHMuaWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3RoaXMucHJvcHMuZGV0YWlscy5tZXNzYWdlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMuZGV0YWlscy5jb3VudH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBsaW1lbnRMaXN0VmlldztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFJhdGluZ1N0YXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgYXZlcmFnZV9yYXRpbmcsIHJhdGluZ19jb3VudCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgICAgIGxldCByYXRpbmcgPSAnJ1xuICAgICAgICBpZiAoYXZlcmFnZV9yYXRpbmcpIHtcbiAgICAgICAgICAgIHJhdGluZyA9IChNYXRoLmNlaWwoYXZlcmFnZV9yYXRpbmcgKiAyKSkgLyAyO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJhdGluZ0FycmF5ID0gW11cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLmZsb29yKHJhdGluZyk7IGkrKykge1xuICAgICAgICAgICAgcmF0aW5nQXJyYXkucHVzaCg8aW1nIGtleT17aX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9yYXRpbmctc3Rhci1maWxsZWQuc3ZnJ30gY2xhc3NOYW1lPVwiaW1nLWNzdG0tZG9jcmF0aW5nXCIgc3R5bGU9e3sgd2lkdGg6IHRoaXMucHJvcHMud2lkdGgsIG1hcmdpblJpZ2h0OiAyLCBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0IH19IC8+KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJhdGluZyAhPSBNYXRoLmZsb29yKHJhdGluZykpIHtcbiAgICAgICAgICAgIHJhdGluZ0FycmF5LnB1c2goPGltZyBrZXk9J2hhbGYnIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvaGFsZnN0YXJfbmV3LnN2Zyd9IGNsYXNzTmFtZT1cImltZy1jc3RtLWRvY3JhdGluZ1wiIHN0eWxlPXt7IHdpZHRoOiB0aGlzLnByb3BzLndpZHRoLCBtYXJnaW5SaWdodDogMiwgaGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCB9fSAvPilcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBlbXB0eVN0YXJzID0gTWF0aC5mbG9vcig1IC0gcmF0aW5nKTtcbiAgICAgICAgaWYgKGVtcHR5U3RhcnMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW1wdHlTdGFyczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmF0aW5nQXJyYXkucHVzaCg8aW1nIGtleT17aSArICdlbXB0eSd9IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvcmF0aW5nLXN0YXItZW1wdHkuc3ZnJ30gY2xhc3NOYW1lPVwiaW1nLWNzdG0tZG9jcmF0aW5nXCIgc3R5bGU9e3sgd2lkdGg6IHRoaXMucHJvcHMud2lkdGgsIG1hcmdpblJpZ2h0OiAyLCBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0IH19IC8+KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNzdG0tZG9jLXJ0bmdcIiBzdHlsZT17dGhpcy5wcm9wcy5qdXN0aWZ5Q2VudGVyID8geyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfSA6IHt9fT5cbiAgICAgICAgICAgICAgICB7cmF0aW5nQXJyYXl9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByYXRpbmdfY291bnQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+KHtyYXRpbmdfY291bnR9KTwvc3Bhbj4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYXRpbmdTdGFycyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbmZpbml0ZVNjcm9sbCBmcm9tICdyZWFjdC1pbmZpbml0ZS1zY3JvbGxlcic7XG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBDb21wbGltZW50TGlzdFZpZXcgZnJvbSAnLi4vcmF0aW5nc1Byb2ZpbGVWaWV3L0NvbXBsaW1lbnRMaXN0Vmlldy5qcydcbmltcG9ydCBSZXZpZXdMaXN0IGZyb20gJy4uL3JhdGluZ3NQcm9maWxlVmlldy9SZXZpZXdMaXN0LmpzJ1xuaW1wb3J0IFJhdGluZ0dyYXBoIGZyb20gJy4uL3JhdGluZ3NQcm9maWxlVmlldy9SYXRpbmdHcmFwaC5qcydcbmltcG9ydCBMZWZ0QmFyIGZyb20gJy4uL0xlZnRCYXInXG5pbXBvcnQgUmlnaHRCYXIgZnJvbSAnLi4vUmlnaHRCYXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0hvbWUvZm9vdGVyJ1xuXG5jbGFzcyBSYXRpbmdSZXZpZXdWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgICAgICBoYXNNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIGZvb3RlckRhdGE6IG51bGwsXG4gICAgICAgICAgICBwYWdlOiAyXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5nZXRBbGxSYXRpbmdzKHRoaXMucHJvcHMuY29udGVudF90eXBlLCB0aGlzLnByb3BzLmlkLCAxLCAoZXJyLCBkYXRhLCBoYXNNb3JlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWVyciAmJiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGEsIGhhc01vcmUgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGFzTW9yZTogdHJ1ZSB9KVxuICAgICAgICB9LCAwKVxuICAgIH1cblxuICAgIGxvYWRNb3JlKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGFzTW9yZTogZmFsc2UsIGxvYWRpbmc6IHRydWUgfSwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRBbGxSYXRpbmdzKHRoaXMucHJvcHMuY29udGVudF90eXBlLCB0aGlzLnByb3BzLmlkLCB0aGlzLnN0YXRlLnBhZ2UsIChlcnIsIGRhdGEsIGhhc01vcmUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3RGF0YSA9IHsgLi4udGhpcy5zdGF0ZS5kYXRhIH1cbiAgICAgICAgICAgICAgICBuZXdEYXRhLnJhdGluZyA9IG5ld0RhdGEucmF0aW5nLmNvbmNhdChkYXRhLnJhdGluZylcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIHBhZ2U6IHRoaXMuc3RhdGUucGFnZSArIDEsIGhhc01vcmUsIGRhdGE6IG5ld0RhdGEgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGE/XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtcGFuZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInBhbmVsLXRpdGxlIG1iLXJtdlwiPlBhdGllbnQgRmVlZGJhY2sgPGEgY2xhc3NOYW1lPVwicmF0ZVZpZXdBbGxcIj48L2E+PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1jb250ZW50IHBkLTAgYm9yZGVyLWJvdHRvbS1wYW5lbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhdGluZ0dyYXBoIGRldGFpbHM9e3RoaXMuc3RhdGUuZGF0YX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1zYXRpc2ZhY3Rpb24tc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YS5yYXRpbmdfZ3JhcGggJiYgdGhpcy5zdGF0ZS5kYXRhLnJhdGluZ19ncmFwaC50b3BfY29tcGxpbWVudHM/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGEucmF0aW5nX2dyYXBoLnRvcF9jb21wbGltZW50cy5tYXAoY29tcGxpbWVudCA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wbGltZW50TGlzdFZpZXcga2V5PXtjb21wbGltZW50LmlkfSBkZXRhaWxzPXtjb21wbGltZW50fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IDxkaXY+PC9kaXY+fVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbmZpbml0ZVNjcm9sbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTdGFydD17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkTW9yZT17dGhpcy5sb2FkTW9yZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc01vcmU9e3RoaXMuc3RhdGUuaGFzTW9yZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VXaW5kb3c9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbExvYWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXZpZXdMaXN0IGRldGFpbHM9e3RoaXMuc3RhdGUuZGF0YX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5maW5pdGVTY3JvbGw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDonJyAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIClcbiAgICB9XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBSYXRpbmdSZXZpZXdWaWV3O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgSW5pdGlhbHNQaWN0dXJlIGZyb20gJy4uLy4uLy4uL2NvbW1vbnMvaW5pdGlhbHNQaWN0dXJlJ1xuaW1wb3J0IExhYlRlc3RzIGZyb20gJy4uL2xhYlRlc3RzJ1xuaW1wb3J0IFJhdGluZ1Byb2ZpbGVDYXJkIGZyb20gJy4uLy4uLy4uL2NvbW1vbnMvcmF0aW5nc1Byb2ZpbGVWaWV3L1JhdGluZ1Byb2ZpbGVDYXJkLmpzJ1xuaW1wb3J0IHsgYnVpbGRPcGVuQmFubmVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCBSYXRpbmdSZXZpZXdWaWV3IGZyb20gJy4uLy4uLy4uL2NvbW1vbnMvcmF0aW5nc1Byb2ZpbGVWaWV3L3JhdGluZ1Jldmlld1ZpZXcuanMnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuXG5jbGFzcyBMYWJEZXRhaWxzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmFwcF9kb3dubG9hZF9saXN0ICYmICF0aGlzLnByb3BzLmFwcF9kb3dubG9hZF9saXN0Lmxlbmd0aCkge1xuXG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldERvd25sb2FkQXBwQmFubmVyTGlzdCgocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwICYmIHJlc3AubGVuZ3RoICYmIHJlc3BbMF0uZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dEb3dubG9hZEFwcFdpZGdldChyZXNwWzBdLmRhdGEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0Rvd25sb2FkQXBwV2lkZ2V0KHRoaXMucHJvcHMuYXBwX2Rvd25sb2FkX2xpc3QpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHNob3dEb3dubG9hZEFwcFdpZGdldChkYXRhTGlzdCkge1xuICAgICAgICBsZXQgbGFuZGluZ19wYWdlID0gZmFsc2VcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93Lk9OX0xBTkRJTkdfUEFHRSkge1xuICAgICAgICAgICAgbGFuZGluZ19wYWdlID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRvd25sb2FkQXBwQnV0dG9uRGF0YSA9IHt9XG5cbiAgICAgICAgaWYgKGxhbmRpbmdfcGFnZSAmJiBkYXRhTGlzdCAmJiBkYXRhTGlzdC5sZW5ndGgpIHtcblxuICAgICAgICAgICAgZGF0YUxpc3QubWFwKChiYW5uZXIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYmFubmVyLmlzZW5hYmxlZCAmJiAodGhpcy5wcm9wcy5tYXRjaC51cmwuaW5jbHVkZXMoYmFubmVyLmVuZHNfd2l0aCkgfHwgdGhpcy5wcm9wcy5tYXRjaC51cmwuaW5jbHVkZXMoYmFubmVyLnN0YXJ0c193aXRoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZG93bmxvYWRBcHBCdXR0b25EYXRhID0gYmFubmVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKE9iamVjdC52YWx1ZXMoZG93bmxvYWRBcHBCdXR0b25EYXRhKS5sZW5ndGgpIHtcblxuICAgICAgICAgICAgbGV0IGd0bVRyYWNrID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnRG93bmxvYWRBcHBCdXR0b25WaXNpYmxlJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnZG93bmxvYWQtYXBwLWJ1dHRvbi12aXNpYmxlJywgJ3N0YXJ0c193aXRoJzogZG93bmxvYWRBcHBCdXR0b25EYXRhLnN0YXJ0c193aXRoID8gZG93bmxvYWRBcHBCdXR0b25EYXRhLnN0YXJ0c193aXRoIDogJycsICdlbmRzX3dpdGgnOiBkb3dubG9hZEFwcEJ1dHRvbkRhdGEuZW5kc193aXRoID8gZG93bmxvYWRBcHBCdXR0b25EYXRhLmVuZHNfd2l0aCA6ICcnLCAnZGV2aWNlJzogdGhpcy5wcm9wcy5kZXZpY2VfaW5mb1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bVRyYWNrIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkb3dubG9hZEJ1dHRvbihkYXRhKSB7XG4gICAgICAgIGxldCBndG1UcmFjayA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnRG93bmxvYWRBcHBCdXR0b25DbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnZG93bmxvYWQtYXBwLWJ1dHRvbi1jbGlja2VkJywgJ3N0YXJ0c193aXRoJzogZGF0YS5zdGFydHNfd2l0aCA/IGRhdGEuc3RhcnRzX3dpdGggOiAnJywgJ2VuZHNfd2l0aCc6IGRhdGEuZW5kc193aXRoID8gZGF0YS5lbmRzX3dpdGggOiAnJyxcbiAgICAgICAgICAgICdkZXZpY2UnOiB0aGlzLnByb3BzLmRldmljZV9pbmZvXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bVRyYWNrIH0pXG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKGRhdGEuVVJMLCAnX3NlbGYnKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb3BlblRlc3RzKCkge1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnVXNlclNlbGVjdGluZ0FkZFJlbW92ZUxhYlRlc3RzJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAndXNlci1zZWxlY3RpbmctYWRkLXJlbW92ZS1sYWItdGVzdHMnXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VvRnJpZW5kbHkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0vYm9va2luZz9sYWJfaWQ9JHt0aGlzLnByb3BzLmRhdGEubGFiLmlkfSZhY3Rpb25fcGFnZT10ZXN0c2ApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2xhYi8ke3RoaXMucHJvcHMuZGF0YS5sYWIuaWR9L3Rlc3RzYClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgeyBhYm91dCwgYWRkcmVzcywgbGFiX2ltYWdlLCBsYXQsIGxvbmcsIG5hbWUsIHByaW1hcnlfbW9iaWxlLCBjaXR5LCBzdWJsb2NhbGl0eSwgbG9jYWxpdHksIGxhYl90aHVtYm5haWwgfSA9IHRoaXMucHJvcHMuZGF0YS5sYWJcbiAgICAgICAgbGV0IHsgbGFiX3RpbWluZywgbGFiX3RpbWluZ19kYXRhLCBtcnAsIG5leHRfbGFiX3RpbWluZywgbmV4dF9sYWJfdGltaW5nX2RhdGEsIHRvdGFsX3Rlc3RfY291bnQgfSA9IHRoaXMucHJvcHMuZGF0YVxuXG4gICAgICAgIGxldCBsYW5kaW5nX3BhZ2UgPSBmYWxzZVxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cuT05fTEFORElOR19QQUdFKSB7XG4gICAgICAgICAgICBsYW5kaW5nX3BhZ2UgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZG93bmxvYWRBcHBCdXR0b25EYXRhID0ge31cblxuICAgICAgICBpZiAobGFuZGluZ19wYWdlICYmIHRoaXMucHJvcHMuYXBwX2Rvd25sb2FkX2xpc3QgJiYgdGhpcy5wcm9wcy5hcHBfZG93bmxvYWRfbGlzdC5sZW5ndGgpIHtcblxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hcHBfZG93bmxvYWRfbGlzdC5tYXAoKGJhbm5lcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChiYW5uZXIuaXNlbmFibGVkICYmICh0aGlzLnByb3BzLm1hdGNoLnVybC5pbmNsdWRlcyhiYW5uZXIuZW5kc193aXRoKSB8fCB0aGlzLnByb3BzLm1hdGNoLnVybC5pbmNsdWRlcyhiYW5uZXIuc3RhcnRzX3dpdGgpKSkge1xuICAgICAgICAgICAgICAgICAgICBkb3dubG9hZEFwcEJ1dHRvbkRhdGEgPSBiYW5uZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2ZpbGUtYm9vay1zY3JlZW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvd25sb2FkQXBwQnV0dG9uRGF0YSAmJiBPYmplY3QudmFsdWVzKGRvd25sb2FkQXBwQnV0dG9uRGF0YSkubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRvd25sb2FkQnRuXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBvbkNsaWNrPXt0aGlzLmRvd25sb2FkQnV0dG9uLmJpbmQodGhpcywgZG93bmxvYWRBcHBCdXR0b25EYXRhKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkd25sQXBwQnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnByb3BzLmRldmljZV9pbmZvID8gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICh0aGlzLnByb3BzLmRldmljZV9pbmZvLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2lwaG9uZScpIHx8IHRoaXMucHJvcHMuZGV2aWNlX2luZm8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnaXBhZCcpKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcxM3B4JywgbWFyZ2luUmlnaHQ6ICc1cHgnLCBtYXJnaW5Ub3A6ICctMXB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9hcHBsMS5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMTNweCcsIG1hcmdpblJpZ2h0OiAnNXB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9hbmRyMS5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb3dubG9hZCBBcHA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGF0YS5sYWIudW5yYXRlZF9hcHBvaW50bWVudCA/IDxSYXRpbmdQcm9maWxlQ2FyZCB7Li4udGhpcy5wcm9wc30gZGV0YWlscz17dGhpcy5wcm9wcy5kYXRhLmxhYi51bnJhdGVkX2FwcG9pbnRtZW50fSAvPiA6IFwiXCJ9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIHBiLWhlYWRlciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi1sb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEluaXRpYWxzUGljdHVyZSBuYW1lPXtuYW1lfSBoYXNfaW1hZ2U9eyEhbGFiX3RodW1ibmFpbH0gY2xhc3NOYW1lPVwiaW5pdGlhbHNQaWN0dXJlLWxwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsYWJfdGh1bWJuYWlsfSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5pdGlhbHNQaWN0dXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSAmJiBuYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3RoeXJvY2FyZScpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIndpZGdldC10aXRsZSBwYi10aXRsZVwiPntuYW1lLnNwbGl0KCctJylbMF19PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid2lkZ2V0LXRpdGxlIHBiLXRpdGxlXCI+e25hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lICYmIG5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygndGh5cm9jYXJlJykgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxvY2F0aW9uIHRleHQtYmxhY2tcIj57bG9jYWxpdHl9IHtjaXR5fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJjdC1pbWcgY3QtaW1nLXhzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9tYXAtbWFya2VyLnN2Z1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0IHRpbWUtY29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ1VGltaW5nUGFyYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmdy03MDAgdGV4dC1zbVwiPlRpbWluZzogPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YnVpbGRPcGVuQmFubmVyKGxhYl90aW1pbmcsIGxhYl90aW1pbmdfZGF0YSwgbmV4dF9sYWJfdGltaW5nLCBuZXh0X2xhYl90aW1pbmdfZGF0YSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmdy03MDAgdGV4dC1zbVwiPkNvbnRhY3Q6IC08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcmltYXJ5X21vYmlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3Blbi1jbG9zZVwiPntcIiBDYWxsIE5vd1wifTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNUT1JBR0UuaXNBZ2VudCgpIHx8ICghdGhpcy5wcm9wcy5oaWRlX3ByaWNlICYmICF0aGlzLnByb3BzLmlzX3VzZXJfaW5zdXJlZCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmxvY2F0aW9uICYmIHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoICYmIHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdmcm9tPWluc3VyYW5jZV9uZXR3b3JrJykgPyBcIlwiIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VyY2gtbnctaW5wdXRzIG1iLTBcIiBvbkNsaWNrPXt0aGlzLm9wZW5UZXN0cy5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBhdXRvQ29tcGxldGU9XCJvZmZcIiBjbGFzc05hbWU9XCJkLWJsb2NrIGNsa0lucHV0IG5ldy1zcmNoLWRvYy1sYWJcIiBpZD1cInNlYXJjaF9iYXJcIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIG1vcmUgVGVzdHNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic3JjaC1pbnAtaW1nXCIgc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL2NwL2Fzc2V0cy9pbWcvc2hhcGUtc3JjaC5zdmdcIiBzdHlsZT17eyB3aWR0aDogJzE1cHgnIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNUT1JBR0UuaXNBZ2VudCgpIHx8ICghdGhpcy5wcm9wcy5oaWRlX3ByaWNlICYmICF0aGlzLnByb3BzLmlzX3VzZXJfaW5zdXJlZCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLnByb3BzLmxvY2F0aW9uICYmIHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoICYmIHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdmcm9tPWluc3VyYW5jZV9uZXR3b3JrJykgPyBcIlwiIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwibGItdmlld21vcmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICF0aGlzLnByb3BzLmlzX3ZpcF9hcHBsaWNhYmxlICYmICF0aGlzLnByb3BzLmlzX2NvdmVyZWRfdW5kZXJfZ29sZCB0cnVlICYmIDxwIG9uQ2xpY2s9e3RoaXMub3BlblRlc3RzLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmdy03MDAgdGV4dC1zbVwiPntgVmlldyBhbGwgJHt0b3RhbF90ZXN0X2NvdW50P3RvdGFsX3Rlc3RfY291bnQ6Jyd9IHRlc3RzIGB9PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1hZ2VzL3JpZ2h0X2Fycm93LnBuZyd9Lz48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlzX3VzZXJfdmlwICYmICF0aGlzLnByb3BzLmlzX3VzZXJfZ29sZF92aXA/JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8ZGl2IGNsYXNzTmFtZT1cImxiLXZpZXdtb3JlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgb25DbGljaz17dGhpcy5vcGVuVGVzdHMuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZ3LTcwMCB0ZXh0LXNtXCI+e2BWaWV3IGFsbCAke3RvdGFsX3Rlc3RfY291bnQ/dG90YWxfdGVzdF9jb3VudDonJ30gdGVzdHMgYH08aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWFnZXMvcmlnaHRfYXJyb3cucG5nJ30vPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJUZXN0cyB7Li4udGhpcy5wcm9wc30gLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBwYi1kZXRhaWxzIHBiLWZhY2lsaXR5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwid2MtdGl0bGUgdGV4dC1tZCBmdy03MDBcIj5GYWNpbGl0eTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdCBwYi1saXN0IGZhY2lsdHktbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5QYXJraW5nIEF2YWlsYWJsZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNhcmQgQWNjZXB0ZWQ8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5FIFJlcG9ydCBBdmFpbGFibGU8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Ib21lIENoZWt1cCBBdmFpbGFibGU8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKnRoaXMucHJvcHMuZGF0YS5sYWIuZGlzcGxheV9yYXRpbmdfd2lkZ2V0ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXBhbmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInBhbmVsLXRpdGxlIG1iLXJtdlwiPlBhdGllbnQgRmVlZGJhY2s8YSBjbGFzc05hbWU9XCJyYXRlVmlld0FsbFwiPjxzcGFuIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvdmlldy1hbGwtcmF0aW5ncz9jb250ZW50X3R5cGU9MSZpZD1gICsgdGhpcy5wcm9wcy5kYXRhLmxhYi5pZCl9PlZpZXcgQWxsPC9zcGFuPjwvYT48L2g0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1jb250ZW50IHBkLTAgYm9yZGVyLWJvdHRvbS1wYW5lbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmF0aW5nR3JhcGggZGV0YWlscz17dGhpcy5wcm9wcy5kYXRhLmxhYn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXNhdGlzZmFjdGlvbi1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRhdGEubGFiLnJhdGluZ19ncmFwaCA/IHRoaXMucHJvcHMuZGF0YS5sYWIucmF0aW5nX2dyYXBoLnRvcF9jb21wbGltZW50cy5tYXAoY29tcGxpbWVudCA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tcGxpbWVudExpc3RWaWV3IGtleT17Y29tcGxpbWVudC5pZH0gZGV0YWlscz17Y29tcGxpbWVudH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogPHNwYW4+PC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJldmlld0xpc3QgZGV0YWlscz17dGhpcy5wcm9wcy5kYXRhLmxhYn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCIqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBwYi1kZXRhaWxzIHBiLWxvY2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwid2MtdGl0bGUgdGV4dC1tZCBmdy03MDBcIj5Mb2NhdGlvbjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZHJlc3MtZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvc2VhcmNoLz9hcGk9MSZxdWVyeT0ke2xhdH0sJHtsb25nfWB9IGNsYXNzTmFtZT1cImxpbmstdGV4dCB0ZXh0LW1kIGZ3LTcwMFwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL21hcC1pY29uLnBuZ1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWQgYWRkLW1hcFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFkZC1pbmZvXCI+e2FkZHJlc3N9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLXZpZXcgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9zZWFyY2gvP2FwaT0xJnF1ZXJ5PSR7bGF0fSwke2xvbmd9YH0gY2xhc3NOYW1lPVwibGluay10ZXh0IHRleHQtbWQgZnctNzAwIHZpZXctaW4tbWFwXCIgdGFyZ2V0PVwiX2JsYW5rXCI+VmlldyBpbiBHb29nbGUgTWFwPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kYXRhLmxhYi5kaXNwbGF5X3JhdGluZ193aWRnZXQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhdGluZ1Jldmlld1ZpZXcgaWQ9e3RoaXMucHJvcHMuZGF0YS5sYWIuaWR9IGNvbnRlbnRfdHlwZT17MX0gey4uLnRoaXMucHJvcHN9IC8+IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJiLTE1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgcGItZGV0YWlscyBwYi1hYm91dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIndjLXRpdGxlIHRleHQtbWQgZnctNzAwXCI+QWJvdXQ8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Fib3V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTGFiRGV0YWlsc1xuIiwiaW1wb3J0IExhYkRldGFpbHMgZnJvbSAnLi9MYWJEZXRhaWwuanMnXG5cbmV4cG9ydCBkZWZhdWx0IExhYkRldGFpbHMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuY2xhc3MgRXhwYW5zaW9uUGFuZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvcGVuOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlT3BlbigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46ICF0aGlzLnN0YXRlLm9wZW4gfSlcbiAgICB9XG5cbiAgICByYWRpb0NsaWNrID0gKGNhdF9pZCwgdGVzdCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLnNlbGVjdENhdGVnb3J5KGNhdF9pZCwgdGVzdClcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2NhdGlvblNlYXJjaCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jb250ZW50TGlzdC5tYXAoKGNvbnQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5kZWZhdWx0VGVzdC5pbmNsdWRlcyhjb250LmlkKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgY2F0ZWdvcnlJZCA9ICcnXG4gICAgICAgIGxldCB7IGhlYWRpbmcsIGNvbnRlbnRMaXN0IH0gPSB0aGlzLnByb3BzXG4gICAgICAgIGlmIChjb250ZW50TGlzdCAmJiBjb250ZW50TGlzdC5sZW5ndGggJiYgIXRoaXMucHJvcHMubG9jYXRpb25TZWFyY2gpIHtcbiAgICAgICAgICAgIGhlYWRpbmcgKz0gYCAgKGluY2x1ZGVzICR7Y29udGVudExpc3QubGVuZ3RofSB0ZXN0cylgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMubG9jYXRpb25TZWFyY2gpIHtcbiAgICAgICAgICAgIGNhdGVnb3J5SWQgPSB0aGlzLnByb3BzLmNhdGVnb3J5SWRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImV4cGFuc2lvbi1wYW5lbC1saXN0LWl0ZW1cIiBzdHlsZT17dGhpcy5wcm9wcy5sb2NhdGlvblNlYXJjaCA/IHsgbGlzdFN0eWxlOiAnbm9uZScsIGN1cnNvcjogJ2F1dG8nIH0gOiB7fX0gPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmxvY2F0aW9uU2VhcmNoID8gJ3RpdGxlIGxjLXRlc3QtaGVhZGluZycgOiAndGl0bGUnfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZU9wZW4uYmluZCh0aGlzKX0gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAwLCBmb250U2l6ZTogMTUsIGZvbnRXZWlnaHQ6IDQwMCwgcGFkZGluZ1JpZ2h0OiAzMCwgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5vcGVuID8gPGltZyBjbGFzc05hbWU9XCJ0aXRsZWFycm93LXVwXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+IDogPGltZyBjbGFzc05hbWU9XCJ0aXRsZWFycm93XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm9wZW4gPyA8ZGl2IGNsYXNzTmFtZT1cIm1vcmUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb250ZW50ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBrZy1jb250ZW50XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0aGlzLnByb3BzLmNvbnRlbnQgfX0+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubG9jYXRpb25TZWFyY2ggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbGMtdGVzdC1saXN0IG1ydC0xMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50TGlzdC5tYXAoKGNvbnQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnJhZGlvQ2xpY2soY2F0ZWdvcnlJZCwgY29udCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJsYy10ZXN0LXJhZGlvXCIgdHlwZT0ncmFkaW8nIHZhbHVlPXtjb250LmlkfSBjaGVja2VkPXt0aGlzLnByb3BzLnJhZGlvQ2hlY2tlZCA9PT0gY29udC5pZCB8fCB0aGlzLnByb3BzLmRlZmF1bHRUZXN0LmluY2x1ZGVzKGNvbnQuaWQpfSBuYW1lPSd0ZXN0JyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J3BrZ3MtZHJwLWxpc3RpbmcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudExpc3QubWFwKChjb250LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBFeHBhbnNpb25QYW5lbFxuIiwiaW1wb3J0IExhYlRlc3RzIGZyb20gJy4vbGFiVGVzdHMnXG5cbmV4cG9ydCBkZWZhdWx0IExhYlRlc3RzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IFBhY2thZ2VUZXN0IGZyb20gJy4vcGFja2FnZVRlc3QuanMnXG5pbXBvcnQgUGFja2FnZUluZm8gZnJvbSAnLi9wYWNrYWdlSW5mby5qcydcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cblxuY2xhc3MgTGFiVGVzdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzaG93UGFja2FnZUluZm86IGZhbHNlLFxuICAgICAgICAgICAgcGFja2FnZUluZm9UZXN0OiBudWxsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvcGVuVGVzdHMoKSB7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdVc2VyU2VsZWN0aW5nQWRkUmVtb3ZlTGFiVGVzdHMnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICd1c2VyLXNlbGVjdGluZy1hZGQtcmVtb3ZlLWxhYi10ZXN0cydcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvbGFiLyR7dGhpcy5wcm9wcy5kYXRhLmxhYi5pZH0vdGVzdHNgKVxuICAgIH1cblxuICAgIHRvZ2dsZSh3aGljaCwgZGF0YSA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFt3aGljaF06ICF0aGlzLnN0YXRlW3doaWNoXSwgcGFja2FnZUluZm9UZXN0OiBkYXRhIH0pXG4gICAgfVxuXG4gICAgdG9nZ2xlVGVzdCh0ZXN0X3RvX3RvZ2dsZSkge1xuICAgICAgICBsZXQgdGVzdCA9IE9iamVjdC5hc3NpZ24oe30sIHRlc3RfdG9fdG9nZ2xlKVxuICAgICAgICB0ZXN0LmFkZF90b19jb21tb24gPSB0cnVlXG5cbiAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSgndGVzdCcsIHRlc3QpXG4gICAgfVxuICAgIHRlc3RJbmZvKHRlc3RfaWQsdXJsLGV2ZW50KSB7XG4gICAgICAgIGxldCBsYWJfaWQgPSB0aGlzLnByb3BzLnNlbGVjdGVkTGFiXG4gICAgICAgIGxldCBzZWxlY3RlZF90ZXN0X2lkcyA9IHRoaXMucHJvcHMubGFiX3Rlc3RfZGF0YVt0aGlzLnByb3BzLnNlbGVjdGVkTGFiXSB8fCBbXVxuICAgICAgICBzZWxlY3RlZF90ZXN0X2lkcyA9IHNlbGVjdGVkX3Rlc3RfaWRzLm1hcCh4ID0+IHguaWQpXG4gICAgICAgICAgICBsZXQgbGF0ID0gMjguNjQ0ODAwXG4gICAgICAgICAgICBsZXQgbG9uZyA9IDc3LjIxNjcyMVxuICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uICE9PSBudWxsKXtcbiAgICAgICAgICAgICAgICBsYXQgPSB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubGF0XG4gICAgICAgICAgICAgICAgbG9uZyA9IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sbmdcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbGF0ID09PSAnZnVuY3Rpb24nKSBsYXQgPSBsYXQoKVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbG9uZyA9PT0gJ2Z1bmN0aW9uJykgbG9uZyA9IGxvbmcoKVxuICAgICAgICAgICAgfVxuICAgICAgICBpZih1cmwgJiYgdXJsICE9Jycpe1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nK3VybCsnP3Rlc3RfaWRzPScgKyB0ZXN0X2lkICsgJyZzZWxlY3RlZF90ZXN0X2lkcz0nK3NlbGVjdGVkX3Rlc3RfaWRzICsnJmxhYl9pZD0nICsgbGFiX2lkICsnJmxhdD0nK2xhdCsnJmxvbmc9Jytsb25nKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvc2VhcmNoL3Rlc3RpbmZvP3Rlc3RfaWRzPScgKyB0ZXN0X2lkICsgJyZzZWxlY3RlZF90ZXN0X2lkcz0nK3NlbGVjdGVkX3Rlc3RfaWRzICsnJmxhYl9pZD0nICsgbGFiX2lkICsnJmxhdD0nK2xhdCsnJmxvbmc9Jytsb25nKVxuICAgICAgICB9XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICd0ZXN0SW5mb0NsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAndGVzdC1pbmZvLWNsaWNrJywgJ3BhZ2VTb3VyY2UnOiAnbGFiLXRlc3QtcGFnZSdcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgIH1cblxuICAgIHNlYXJjaFRlc3RzKCl7XG4gICAgICAgIHRoaXMucHJvcHMuc2VsZWN0U2VhcmNoVHlwZSgnbGFiJylcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9zZWFyY2gnKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgaXNfcGFja2FnZSA9IGZhbHNlXG4gICAgICAgIGxldCBudW1iZXJfb2ZfdGVzdHMgPSAwXG4gICAgICAgIGxldCBkZWZhdWx0VGVzdHMgPSBbXVxuICAgICAgICBsZXQgc2hvd0RlZmF1bHRUZXN0cyA9IGZhbHNlXG4gICAgICAgIGxldCBoaWRlX3ByaWNlID0gZmFsc2VcbiAgICAgICAgbGV0IHNlbGVjdGVkVGVzdElkcyA9IFtdXG4gICAgICAgIGxldCBzZWxlY3RlZFRlc3RzID0gW11cbiAgICAgICAgbGV0IHNlbGVjdGVkUGFja2FnZSA9IFtdXG4gICAgICAgIGxldCB1blNlbGVjdGVkVGVzdHMgPSBbXVxuICAgICAgICBsZXQgdW5TZWxlY3RlZFBhY2thZ2UgPSBbXVxuICAgICAgICBsZXQgdGVzdF9pbmZvID0gJydcbiAgICAgICAgbGV0IHNob3dfZGV0YWlscyA9ICcnXG4gICAgICAgIGxldCB7aXNfcGxhbl9hcHBsaWNhYmxlfSA9IHRoaXMucHJvcHNcbiAgICAgICAgbGV0IHsgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUsIGlzX3ZpcF9hcHBsaWNhYmxlLCBpc19jb3ZlcmVkX3VuZGVyX2dvbGQgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgbGV0IGlzX3VzZXJfaW5zdXJlZCA9IGZhbHNlXG4gICAgICAgIGxldCBzZWxlY3RlZFRlc3RzQ291bnQgPSAwXG4gICAgICAgIGxldCB2aXBfYW1vdW50ID0gMFxuICAgICAgICBsZXQgZmluYWxNcnAgPSAwXG4gICAgICAgIGxldCBwcmljZV90b19wYXkgPTBcblxuICAgICAgICAvL0ZvciBJbnN1cmVkIFBlcnNvbiBSZW1vdmUgdW5zZWxlY3RlZCBUZXN0cy9QYWNrYWdlc1xuXG4gICAgICAgIGlmKHRoaXMucHJvcHMucHJvZmlsZXMgJiYgdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXSl7XG4gICAgICAgICAgICBpc191c2VyX2luc3VyZWQgPSB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGVdLmlzX2luc3VyZWRcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY3VycmVudExhYlNlbGVjdGVkVGVzdHMgJiYgdGhpcy5wcm9wcy5jdXJyZW50TGFiU2VsZWN0ZWRUZXN0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkVGVzdHNDb3VudCA9IHRoaXMucHJvcHMuY3VycmVudExhYlNlbGVjdGVkVGVzdHMuZmlsdGVyKHg9PnguaXNfc2VsZWN0ZWQpLmxlbmd0aFxuXG4gICAgICAgICAgICB0aGlzLnByb3BzLmN1cnJlbnRMYWJTZWxlY3RlZFRlc3RzLm1hcCgodGVzdCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0ZXN0LmhpZGVfcHJpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZV9wcmljZSA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGVzdC5pc19wYWNrYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzX3BhY2thZ2UgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIG51bWJlcl9vZl90ZXN0cyA9IHRlc3QubnVtYmVyX29mX3Rlc3RzXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRlc3QuaXNfcGFja2FnZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGVzdC5pc19zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxNcnArPSBwYXJzZUludCh0ZXN0Lm1ycClcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRlc3QudmlwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXBfYW1vdW50Kz0gcGFyc2VJbnQodGVzdC52aXAudmlwX2dvbGRfcHJpY2V8fDApICsgcGFyc2VJbnQodGVzdC52aXAudmlwX2NvbnZlbmllbmNlX2Ftb3VudHx8MCkgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFBhY2thZ2UucHVzaCg8UGFja2FnZVRlc3QgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgPXtpc19pbnN1cmFuY2VfYXBwbGljYWJsZX0gaXNfcGxhbl9hcHBsaWNhYmxlPXtpc19wbGFuX2FwcGxpY2FibGV9IGtleT17aX0gaT17aX0gdGVzdD17dGVzdH0gdG9nZ2xlPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpfSB0b2dnbGVUZXN0PXt0aGlzLnRvZ2dsZVRlc3QuYmluZCh0aGlzKX0gdGVzdEluZm89e3RoaXMudGVzdEluZm8uYmluZCh0aGlzKX0gaGlkZV9wcmljZT17aGlkZV9wcmljZX0gc2VsZWN0ZWRUZXN0c0NvdW50PXtzZWxlY3RlZFRlc3RzQ291bnR9IGlzX3VzZXJfaW5zdXJlZD17aXNfdXNlcl9pbnN1cmVkfSBpc192aXBfYXBwbGljYWJsZT17aXNfdmlwX2FwcGxpY2FibGV9IGlzX3VzZXJfdmlwPXt0aGlzLnByb3BzLmlzX3VzZXJfdmlwfSBpc191c2VyX2dvbGRfdmlwPXt0aGlzLnByb3BzLmlzX3VzZXJfZ29sZF92aXB9IC8+KVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5TZWxlY3RlZFBhY2thZ2UucHVzaCg8UGFja2FnZVRlc3QgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgPXtpc19pbnN1cmFuY2VfYXBwbGljYWJsZX0gaXNfcGxhbl9hcHBsaWNhYmxlPXtpc19wbGFuX2FwcGxpY2FibGV9IGtleT17aX0gaT17aX0gdGVzdD17dGVzdH0gdG9nZ2xlPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpfSB0b2dnbGVUZXN0PXt0aGlzLnRvZ2dsZVRlc3QuYmluZCh0aGlzKX0gaGlkZV9wcmljZT17aGlkZV9wcmljZX0gdGVzdEluZm89e3RoaXMudGVzdEluZm8uYmluZCh0aGlzKX0gc2VsZWN0ZWRUZXN0c0NvdW50PXtzZWxlY3RlZFRlc3RzQ291bnR9IGlzX3ZpcF9hcHBsaWNhYmxlPXtpc192aXBfYXBwbGljYWJsZX0gaXNfdXNlcl92aXA9e3RoaXMucHJvcHMuaXNfdXNlcl92aXB9IGlzX3VzZXJfZ29sZF92aXA9e3RoaXMucHJvcHMuaXNfdXNlcl9nb2xkX3ZpcH0gLz4pXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXN0LmlzX3NlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbE1ycCs9IHBhcnNlSW50KHRlc3QubXJwKVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VfdG9fcGF5ID0gcGFyc2VJbnQodGVzdC5kZWFsX3ByaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRlc3QudmlwICYmICh0aGlzLnByb3BzLmlzX3VzZXJfdmlwIHx8IHRoaXMucHJvcHMuaXNfdXNlcl9nb2xkX3ZpcCkgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXBfYW1vdW50Kz0gcGFyc2VJbnQodGVzdC52aXAudmlwX2dvbGRfcHJpY2V8fDApICsgcGFyc2VJbnQodGVzdC52aXAudmlwX2NvbnZlbmllbmNlX2Ftb3VudHx8MCkgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VfdG9fcGF5ID0gcGFyc2VJbnQodGVzdC52aXAudmlwX2Ftb3VudHx8MCkgKyBwYXJzZUludCh0ZXN0LnZpcC52aXBfY29udmVuaWVuY2VfYW1vdW50fHwwKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlc3QudGVzdC5zaG93X2RldGFpbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0ZXN0X2luZm8gPSA8c3BhbiBjbGFzc05hbWU9XCJzcmNoLWhlYWRpbmdcIiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JywgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiAnI2U0NjYwOCcgfX0gb25DbGljaz17dGhpcy50ZXN0SW5mby5iaW5kKHRoaXMpfT4gVGVzdCBJbmZvPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3RfaW5mbz0gPHNwYW4gc3R5bGU9e3snbWFyZ2luTGVmdCc6JzVweCcsbWFyZ2luVG9wOicxcHgnLGRpc3BsYXk6J2lubGluZS1ibG9jaycsICdjdXJzb3InOidwb2ludGVyJ319IG9uQ2xpY2s9e3RoaXMudGVzdEluZm8uYmluZCh0aGlzLHRlc3QudGVzdC5pZCx0ZXN0LnVybCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vY3AvYXNzZXRzL2ltZy9pY29ucy9JbmZvLnN2Z1wiIHN0eWxlPXt7d2lkdGg6JzE1cHgnfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUZXN0cy5wdXNoKGhpZGVfcHJpY2U/IDxsaSBrZXk9e2kgKyBcInNydFwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2stYnhcIiBzdHlsZT17eyBmb250V2VpZ2h0OiA0MDAsIGZvbnRTaXplOiAxNCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Rlc3QudGVzdC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17dGVzdC5pc19zZWxlY3RlZCA/IHRydWUgOiBmYWxzZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlc3QtcHJpY2UgdGV4dC1zbVwiPkZyZWU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGxpIGtleT17aSArIFwic3J0XCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtgJHsodGhpcy5wcm9wcy5pc191c2VyX3ZpcCAmJiAhdGhpcy5wcm9wcy5pc191c2VyX2dvbGRfdmlwKT8nJzonY2stYngnfWB9IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDQwMCwgZm9udFNpemU6IDE0IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Rlc3QudGVzdC5uYW1lfSB7dGVzdC50ZXN0LnNob3dfZGV0YWlscyA/IHRlc3RfaW5mbyA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLmlzX3VzZXJfdmlwICYmICF0aGlzLnByb3BzLmlzX3VzZXJfZ29sZF92aXApPycnOjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt0ZXN0LmlzX3NlbGVjdGVkID8gdHJ1ZSA6IGZhbHNlfSBvbkNoYW5nZT17dGhpcy50b2dnbGVUZXN0LmJpbmQodGhpcywgdGVzdCl9IC8+ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMuaXNfdXNlcl92aXAgJiYgIXRoaXMucHJvcHMuaXNfdXNlcl9nb2xkX3ZpcCk/Jyc6PHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXNfdmlwX2FwcGxpY2FibGUgfHwgaXNfY292ZXJlZF91bmRlcl9nb2xkPycnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19pbnN1cmFuY2VfYXBwbGljYWJsZSB8fCB0ZXN0LmluY2x1ZGVkX2luX3VzZXJfcGxhbj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXN0LXByaWNlIHRleHQtc21cIj7igrkgMCA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cHJpY2VfdG9fcGF5ID09IHRlc3QubXJwLnNwbGl0KCcuJylbMF0/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVzdC1wcmljZSB0ZXh0LXNtXCI+JiM4Mzc3OyB7cHJpY2VfdG9fcGF5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PHNwYW4gY2xhc3NOYW1lPVwidGVzdC1wcmljZSB0ZXh0LXNtXCI+JiM4Mzc3OyB7cHJpY2VfdG9fcGF5fTxzcGFuIGNsYXNzTmFtZT1cInRlc3QtbXJwXCI+JiM4Mzc3OyB7dGVzdC5tcnAuc3BsaXQoJy4nKVswXX08L3NwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4pXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZV90b19wYXkgPSBwYXJzZUludCh0ZXN0LmRlYWxfcHJpY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGVzdC52aXAgJiYgKHRoaXMucHJvcHMuaXNfdXNlcl92aXAgfHwgdGhpcy5wcm9wcy5pc191c2VyX2dvbGRfdmlwKSApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlX3RvX3BheSA9IHBhcnNlSW50KHRlc3QudmlwLnZpcF9hbW91bnR8fDApICsgcGFyc2VJbnQodGVzdC52aXAudmlwX2NvbnZlbmllbmNlX2Ftb3VudHx8MClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXN0LnRlc3Quc2hvd19kZXRhaWxzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzdF9pbmZvPSA8c3BhbiBzdHlsZT17eydtYXJnaW5MZWZ0JzonNXB4JyxtYXJnaW5Ub3A6JzFweCcsZGlzcGxheTonaW5saW5lLWJsb2NrJywgJ2N1cnNvcic6J3BvaW50ZXInfX0gb25DbGljaz17dGhpcy50ZXN0SW5mby5iaW5kKHRoaXMsdGVzdC50ZXN0LmlkLHRlc3QudXJsKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9jcC9hc3NldHMvaW1nL2ljb25zL0luZm8uc3ZnXCIgc3R5bGU9e3t3aWR0aDonMTVweCd9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB1blNlbGVjdGVkVGVzdHMucHVzaCh0ZXN0LmhpZGVfcHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxsaSBjbGFzc05hbWU9XCJjbGVhcmZpeFwiIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlc3QtcHJpY2VcIj5GcmVlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8bGkga2V5PXtpICsgXCJzcnRcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjay1ieFwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDQwMCwgZm9udFNpemU6IDE0IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Rlc3QudGVzdC5uYW1lfSB7dGVzdC50ZXN0LnNob3dfZGV0YWlscyA/IHRlc3RfaW5mbyA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3Rlc3QuaXNfc2VsZWN0ZWQgPyB0cnVlIDogZmFsc2V9IG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZVRlc3QuYmluZCh0aGlzLCB0ZXN0KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIChpc19pbnN1cmFuY2VfYXBwbGljYWJsZSB8fCAhc2VsZWN0ZWRUZXN0c0NvdW50KSAmJiB0ZXN0Lmluc3VyYW5jZSAmJiB0ZXN0Lmluc3VyYW5jZS5pc19pbnN1cmFuY2VfY292ZXJlZCAmJiB0ZXN0Lmluc3VyYW5jZS5pc191c2VyX2luc3VyZWQpIHx8IHRlc3QuaW5jbHVkZWRfaW5fdXNlcl9wbGFuP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlc3QtcHJpY2UgdGV4dC1zbVwiPuKCuSAwIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cHJpY2VfdG9fcGF5ID09IHRlc3QubXJwLnNwbGl0KCcuJylbMF0/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlc3QtcHJpY2UgdGV4dC1zbVwiPiYjODM3Nzsge3ByaWNlX3RvX3BheX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8c3BhbiBjbGFzc05hbWU9XCJ0ZXN0LXByaWNlIHRleHQtc21cIj4mIzgzNzc7IHtwcmljZV90b19wYXl9PHNwYW4gY2xhc3NOYW1lPVwidGVzdC1tcnBcIj4mIzgzNzc7IHt0ZXN0Lm1ycC5zcGxpdCgnLicpWzBdfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgc2VsZWN0ZWRUZXN0SWRzID0gdGhpcy5wcm9wcy5jdXJyZW50TGFiU2VsZWN0ZWRUZXN0cy5tYXAoeCA9PiB4LnRlc3RfaWQpXG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vRm9yIEluc3VyZWQgUGVyc29uIFJlbW92ZSB1bnNlbGVjdGVkIFRlc3RzL1BhY2thZ2VzXG5cbiAgICAgICAgaWYodGhpcy5wcm9wcy5pc191c2VyX3ZpcCAmJiAhdGhpcy5wcm9wcy5pc191c2VyX2dvbGRfdmlwIC8qaXNfdXNlcl9pbnN1cmVkIHx8IGlzX3ZpcF9hcHBsaWNhYmxlIHx8IGlzX2NvdmVyZWRfdW5kZXJfZ29sZCovKSB7XG4gICAgICAgICAgICB1blNlbGVjdGVkVGVzdHMgPSBbXVxuICAgICAgICAgICAgdW5TZWxlY3RlZFBhY2thZ2UgPSBbXVxuICAgICAgICB9XG5cblxuXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBpZiAocGFyc2VkICYmIHBhcnNlZC5wcmljZV9saXN0ICYmIHBhcnNlZC5wcmljZV9saXN0ID09ICd0cnVlJykge1xuICAgICAgICAgICAgc2hvd0RlZmF1bHRUZXN0cyA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0b3RhbEFtb3VudCA9IDA7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmN1cnJlbnRMYWJTZWxlY3RlZFRlc3RzICYmIHRoaXMucHJvcHMuY3VycmVudExhYlNlbGVjdGVkVGVzdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcHMuY3VycmVudExhYlNlbGVjdGVkVGVzdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0b3RhbEFtb3VudCA9IHRvdGFsQW1vdW50ICsgdGhpcy5wcm9wcy5jdXJyZW50TGFiU2VsZWN0ZWRUZXN0c1tpXS5kZWFsX3ByaWNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGF0YS5sYWJfdGVzdHMgJiYgdGhpcy5wcm9wcy5kYXRhLmxhYl90ZXN0cy5sZW5ndGggJiYgc2hvd0RlZmF1bHRUZXN0cykge1xuICAgICAgICAgICAgZGVmYXVsdFRlc3RzID0gdGhpcy5wcm9wcy5kYXRhLmxhYl90ZXN0cy5tYXAoKHRlc3QsIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGNsYXNzTmFtZT1cImNsZWFyZml4XCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVzdC1wcmljZVwiPiYjODM3Nzsge3Rlc3QuZGVhbF9wcmljZX08c3BhbiBjbGFzc05hbWU9XCJ0ZXN0LW1ycFwiPiYjODM3Nzsge3Rlc3QubXJwLnNwbGl0KCcuJylbMF19PC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJmdy00MDAgdGV4dC1tZCB0ZXN0LW5hbWUtaXRlbSAvKmxiLXRzdC1jc3RtLXBkbmcqL1wiPnt0ZXN0LnRlc3QubmFtZX08L3NwYW4+PC9saT5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXNfaG9tZV9jb2xsZWN0aW9uX2VuYWJsZWQgPSBmYWxzZVxuICAgICAgICBsZXQgZGlzdGFuY2VfcmVsYXRlZF9jaGFyZ2VzID0gMFxuICAgICAgICBsZXQgaG9tZV9waWNrdXBfY2hhcmdlcyA9IGZhbHNlXG4gICAgICAgIGxldCB0ZXN0c0FycmF5ID0gW11cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGF0YSAmJiB0aGlzLnByb3BzLmRhdGEubGFiKSB7XG4gICAgICAgICAgICBpc19ob21lX2NvbGxlY3Rpb25fZW5hYmxlZCA9IHRoaXMucHJvcHMuZGF0YS5sYWIuaXNfaG9tZV9jb2xsZWN0aW9uX2VuYWJsZWRcbiAgICAgICAgICAgIGRpc3RhbmNlX3JlbGF0ZWRfY2hhcmdlcyA9IHRoaXMucHJvcHMuZGF0YS5kaXN0YW5jZV9yZWxhdGVkX2NoYXJnZXNcbiAgICAgICAgICAgIGhvbWVfcGlja3VwX2NoYXJnZXMgPSB0aGlzLnByb3BzLmRhdGEubGFiLmhvbWVfcGlja3VwX2NoYXJnZXNcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmN1cnJlbnRMYWJTZWxlY3RlZFRlc3RzICYmIHRoaXMucHJvcHMuY3VycmVudExhYlNlbGVjdGVkVGVzdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0ZXN0c0FycmF5ID0gdGhpcy5wcm9wcy5jdXJyZW50TGFiU2VsZWN0ZWRUZXN0cy5maWx0ZXIoeCA9PiB4LmlzX3NlbGVjdGVkKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBpY2t1cF90ZXh0ID0gXCJcIlxuICAgICAgICBsZXQgZXh0cmFfcHJpY2UgPSBcIlwiXG4gICAgICAgIGxldCBzaG93UHJpY2VUYWcgPSAwXG4gICAgICAgIGxldCBzaG93UGlja3VwVGV4dCA9IHRydWVcblxuICAgICAgICBpZiAodGVzdHNBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVzdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghdGVzdHNBcnJheVtpXS5pc19ob21lX2NvbGxlY3Rpb25fZW5hYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICBzaG93UGlja3VwVGV4dCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzX2hvbWVfY29sbGVjdGlvbl9lbmFibGVkICYmIGRpc3RhbmNlX3JlbGF0ZWRfY2hhcmdlcyA9PSAxICYmICFoaWRlX3ByaWNlICYmIHNob3dQaWNrdXBUZXh0KSB7XG4gICAgICAgICAgICBwaWNrdXBfdGV4dCA9IFwiSG9tZSBwaWNrdXAgY2hhcmdlcyBhcHBsaWNhYmxlXCJcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc19ob21lX2NvbGxlY3Rpb25fZW5hYmxlZCAmJiAhZGlzdGFuY2VfcmVsYXRlZF9jaGFyZ2VzICYmICFoaWRlX3ByaWNlICYmIHNob3dQaWNrdXBUZXh0KSB7XG4gICAgICAgICAgICBwaWNrdXBfdGV4dCA9IFwiSG9tZSB2aXNpdCBjaGFyZ2VzXCJcbiAgICAgICAgICAgIHNob3dQcmljZVRhZyA9IDFcbiAgICAgICAgICAgIGV4dHJhX3ByaWNlID0gdGhpcy5wcm9wcy5kYXRhLmxhYi5ob21lX3BpY2t1cF9jaGFyZ2VzXG4gICAgICAgIH1cblxuICAgICAgICBpZihpc19pbnN1cmFuY2VfYXBwbGljYWJsZSl7XG4gICAgICAgICAgICBwaWNrdXBfdGV4dCA9ICcnXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHZpcF9kaXNjb3VudF9wcmljZSA9IGZpbmFsTXJwIC0gdmlwX2Ftb3VudFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IHBiLWRldGFpbHMgcGItdGVzdCBudy1saXN0aW5nLXBkZG5nIGNsZWFyZml4XCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc19wYWNrYWdlICYmIG51bWJlcl9vZl90ZXN0cyA/IDxoNCBjbGFzc05hbWU9XCJ3Yy10aXRsZSB0ZXh0LW1kIGZ3LTcwMFwiPntudW1iZXJfb2ZfdGVzdHN9IFRlc3QgSW5jbHVkZWQ8L2g0PiA6IDxoNCBjbGFzc05hbWU9XCJ3Yy10aXRsZSB0ZXh0LW1kIGZ3LTcwMFwiPlNlbGVjdGVkIFRlc3RzIHt0ZXN0X2luZm99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICB9ICovfVxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubG9jYXRpb24gJiYgdGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2ggJiYgdGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoJ2Zyb209aW5zdXJhbmNlX25ldHdvcmsnKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAnJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdCBhbGwtdGVzdC1saXN0IHBkbmdSZ3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRUZXN0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRQYWNrYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoaWRlX3ByaWNlPyAnJyA6IHVuU2VsZWN0ZWRUZXN0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGlkZV9wcmljZT8gJycgOiB1blNlbGVjdGVkUGFja2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpY2t1cF90ZXh0ICYmICghdGhpcy5wcm9wcy5sb2NhdGlvbiB8fCAhdGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2ggfHwgIXRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdmcm9tPWluc3VyYW5jZV9uZXR3b3JrJykpID8gPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCBob21lUGlja3VpXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoZWFsdGgtdmlzaXQtY2hhcmdlXCI+e3BpY2t1cF90ZXh0fTwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1ByaWNlVGFnID8gPHAgY2xhc3NOYW1lPVwicHJjLXRzdGNvaW4gbWItMFwiPiAmIzgzNzc7e2V4dHJhX3ByaWNlID09IFwiXCIgPyAnMCcgOiBleHRyYV9wcmljZX08L3A+IDogJydcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFzaG93UHJpY2VUYWcgJiYgZXh0cmFfcHJpY2UgPj0gMCAmJiBleHRyYV9wcmljZSA/IDxwIGNsYXNzTmFtZT1cInByYy10c3Rjb2luIG1iLTBcIj4gJiM4Mzc3O3tleHRyYV9wcmljZX08L3A+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGFiZWwtY3BuIHRleHQtbGVmdFwiPkNvdXBvbiBhcHBsaWVzIGF0IGJvb2tpbmcgc3VtbWFyeTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHsvKlxuICAgICAgICAgICAgICAgICAgICAgICAgU1RPUkFHRS5jaGVja0F1dGgoKSB8fCB0b3RhbEFtb3VudCA8IDEwMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJycgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmxvY2F0aW9uICYmIHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoICYmIHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdmcm9tPWluc3VyYW5jZV9uZXR3b3JrJykgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWdudXAtb2ZmLWNvbnRhaW5lciBsYWItc2lnbnVwLW9mZnJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaWdudXAtb2ZmLWRvY1wiPisgJiM4Mzc3OyAxMDAgT0ZGIDxiPm9uIFNpZ251cDwvYj4gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAoU1RPUkFHRS5pc0FnZW50KCkgfHwgKCAhaGlkZV9wcmljZSAmJiAhaXNfdXNlcl9pbnN1cmVkKSkgJiYgKHRoaXMucHJvcHMubG9jYXRpb24gJiYgdGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2ggJiYgdGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoJ2Zyb209aW5zdXJhbmNlX25ldHdvcmsnKSkgPyA8ZGl2IGNsYXNzTmFtZT1cInBiLXZpZXcgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc192aXBfYXBwbGljYWJsZSAmJiAhaXNfdXNlcl9pbnN1cmVkICYmIHRoaXMucHJvcHMuZGF0YSAmJiB0aGlzLnByb3BzLmRhdGEudG90YWxfdGVzdF9jb3VudCAmJiB0aGlzLnByb3BzLmRhdGEudG90YWxfdGVzdF9jb3VudCAhPSAnJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tZCBmdy01MDBcIj57dGhpcy5wcm9wcy5kYXRhLnRvdGFsX3Rlc3RfY291bnR9IHRvdGFsIHRlc3RzPC9zcGFuPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfdXNlcl9pbnN1cmVkIHx8IGlzX3ZpcF9hcHBsaWNhYmxlIHx8IGlzX2NvdmVyZWRfdW5kZXJfZ29sZD8nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3NOYW1lPVwibGluay10ZXh0IHRleHQtbWQgZnctNTAwXCIgb25DbGljaz17dGhpcy5vcGVuVGVzdHMuYmluZCh0aGlzKX0+VmlldyBhbGwgdGVzdHM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAoaXNfdmlwX2FwcGxpY2FibGUgfHwgaXNfdXNlcl9pbnN1cmVkICkgJiYgIXNlbGVjdGVkVGVzdHNDb3VudD9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItdmlldyB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzTmFtZT1cImxpbmstdGV4dCB0ZXh0LW1kIGZ3LTcwMFwiIG9uQ2xpY2s9e3RoaXMuc2VhcmNoVGVzdHMuYmluZCh0aGlzKX0+U2VhcmNoIHRlc3RzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtdmFsLWJ4XCI+Q292ZXJlZCBVbmRlciBJbnN1cmFuY2U8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd1BhY2thZ2VJbmZvID8gPFBhY2thZ2VJbmZvIGNvbnRlbnQ9e3RoaXMuc3RhdGUucGFja2FnZUluZm9UZXN0fSB0b2dnbGU9e3RoaXMudG9nZ2xlLmJpbmQodGhpcywgJ3Nob3dQYWNrYWdlSW5mbycpfSAvPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAge3Nob3dEZWZhdWx0VGVzdHMgP1xuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IHBiLWRldGFpbHMgcGItdGVzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIndjLXRpdGxlIHRleHQtbWQgZnctNzAwXCI+UHJpY2UgTGlzdDwvaDQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0IHBiLWxpc3QgcGItdGVzdC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RlZmF1bHRUZXN0c31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLXZpZXcgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzc05hbWU9XCJsaW5rLXRleHQgdGV4dC1tZCBmdy03MDBcIiBvbkNsaWNrPXt0aGlzLm9wZW5UZXN0cy5iaW5kKHRoaXMpfT5WaWV3IE1vcmUgJiBTZWxlY3QgVGVzdHM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgey8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IGdvbGQgY2FyZCBkZXRhaWxzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgIWlzX2NvdmVyZWRfdW5kZXJfZ29sZCAmJiAhaXNfdmlwX2FwcGxpY2FibGUgJiYgIWlzX2luc3VyYW5jZV9hcHBsaWNhYmxlICYmIHZpcF9kaXNjb3VudF9wcmljZSA+IDAgJiYgZmFsc2UgP1xuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBjcG4tYmx1ciBtcmItMTUgY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbmFseXRpY0RhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdMYWJQcm9maWxlVmlwR29sZENsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbGFiLXByb2ZpbGUtZ29sZC1jbGljaycsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogYW5hbHl0aWNEYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3ZpcC1nb2xkLWRldGFpbHM/aXNfZ29sZD10cnVlJnNvdXJjZT1sYWItcHJvZmlsZS1nb2xkLWNsaWNrJmxlYWRfc291cmNlPURvY3ByaW1lJylcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IGQtZmxleCBqYy1zcGFjZWIgYWxpZ24taXRlbS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvbGQtY3JkLWxmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Bhbj5TYXZlIOKCuXt2aXBfZGlzY291bnRfcHJpY2V9PC9zcGFuPiBvbiB0aGlzIGFwcG9pbnRtZW50IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ2xkLWNyZC1zYi10eHRcIj5CZWNvbWUgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2dvbGQtc20ucG5nJ30gLz4gbWVtYmVyPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1jcmQtcmd0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkdldCBHb2xkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA6Jyd9XG4gICAgICAgICAgICAgICAgey8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IGdvbGQgY2FyZCBkZXRhaWxzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovfVxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTGFiVGVzdHNcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IHRvZ2dsZSwgY29udGVudCB9KSA9PiB7XG4gICAgbGV0IG5hbWUgPSBcIlwiXG4gICAgbGV0IHByZV90ZXN0X2luZm8gPSBcIlwiXG4gICAgbGV0IHdoeSA9IFwiXCJcbiAgICBpZiAoY29udGVudCkge1xuICAgICAgICBuYW1lID0gY29udGVudC50ZXN0Lm5hbWVcbiAgICAgICAgcHJlX3Rlc3RfaW5mbyA9IGNvbnRlbnQudGVzdC5wcmVfdGVzdF9pbmZvXG4gICAgICAgIHdoeSA9IGNvbnRlbnQudGVzdC53aHlcbiAgICB9XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLW92ZXJsYXlcIiBvbkNsaWNrPXt0b2dnbGV9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBjYW5jZWwtYXBwb2ludG1lbnQtZGl2IGNhbmNlbC1wb3B1cFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIHRleHQtY2VudGVyIGFjdGlvbi1zY3JlZW4taGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGNhbmNlbC1hcHBvaW50bWVudC1oZWFkXCI+UGFja2FnZSBJbmZvPC9wPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaWNvbnMvY2xvc2UucG5nXCJ9IGNsYXNzTmFtZT1cImNsb3NlLW1vZGFsXCIgb25DbGljaz17dG9nZ2xlfSAvPlxuICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiIHN0eWxlPXt7IHBhZGRpbmc6ICcwcHggMTVweCcgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxYS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInBrZy1xdXNcIj5XaGF0IGlzIHRoaXMgdGVzdD88L2g0PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwa2ctYW5zXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB3aHkgfX0+PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicWEtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJwa2ctcXVzXCI+V2hhdCBpcyB0aGUgcHJlcGFyYXRpb24gbmVlZGVkIGZvciBkb2luZyB0aGlzIHRlc3Q/PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGtnLWFuc1wiPntwcmVfdGVzdF9pbmZvfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEV4cGFuc2lvblBhbmVsIGZyb20gJy4vZXhwYW5zaW9uUGFuZWwnXG5cbmNsYXNzIFBhY2thZ2VUZXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRlc3RMaXN0VmlzaWJsZTogcHJvcHMudGVzdC5pc19zZWxlY3RlZCA/IHRydWUgOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGFja2FnZU5hbWVDbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRlc3RMaXN0VmlzaWJsZTogIXRoaXMuc3RhdGUudGVzdExpc3RWaXNpYmxlIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgaSwgdGVzdCwgdG9nZ2xlIH0gPSB0aGlzLnByb3BzXG4gICAgICAgIGxldCB7IGRlYWxfcHJpY2UsIG1ycCwgcHJlX3Rlc3RfaW5mbywgaW5zdXJhbmNlLCB2aXAgfSA9IHRlc3RcbiAgICAgICAgbGV0IHRlc3RfcGFja2FnZSA9IHRlc3QucGFja2FnZSB8fCBbXVxuICAgICAgICBsZXQgdGVzdF9pbmZvXG4gICAgICAgIGxldCBwcmljZV90b19wYXkgPSBkZWFsX3ByaWNlO1xuICAgICAgICBpZih2aXAgJiYgKHRoaXMucHJvcHMuaXNfdXNlcl92aXAgfHwgdGhpcy5wcm9wcy5pc191c2VyX2dvbGRfdmlwKSApIHtcbiAgICAgICAgICAgIHByaWNlX3RvX3BheSA9IHBhcnNlSW50KHZpcC52aXBfYW1vdW50fHwwKSArIHBhcnNlSW50KHZpcC52aXBfY29udmVuaWVuY2VfYW1vdW50fHwwKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0ZXN0LnRlc3Quc2hvd19kZXRhaWxzKSB7XG4gICAgICAgICAgICB0ZXN0X2luZm89IDxzcGFuIHN0eWxlPXt7J21hcmdpblJpZ2h0JzonNXB4JyxtYXJnaW5Ub3A6JzJweCcsZGlzcGxheTonaW5saW5lLWJsb2NrJywgJ2N1cnNvcic6J3BvaW50ZXInfX0gb25DbGljaz17dGhpcy5wcm9wcy50ZXN0SW5mby5iaW5kKHRoaXMsdGVzdC50ZXN0LmlkLHRlc3QudGVzdC51cmwpfT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vY3AvYXNzZXRzL2ltZy9pY29ucy9JbmZvLnN2Z1wiIHN0eWxlPXt7d2lkdGg6JzE1cHgnfX0vPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpfSBzdHlsZT17eyBwYWRkaW5nUmlnaHQ6ICcwcHgnIH19IGNsYXNzTmFtZT1cImNsZWFyZml4IHBkbmdSZ3RcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtgJHsodGhpcy5wcm9wcy5pc191c2VyX3ZpcCAmJiAhdGhpcy5wcm9wcy5pc191c2VyX2dvbGRfdmlwKT8nJzonY2stYngnfWB9IHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICc0MDAnLCBmb250U2l6ZTogJzE0cHgnIH19ID5cbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiAnMTIwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge3Rlc3QudGVzdC5uYW1lfSB7dGVzdC50ZXN0LnNob3dfZGV0YWlscz90ZXN0X2luZm86Jyd9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlc3QubnVtYmVyX29mX3Rlc3RzID8gPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxMnB4JywgZm9udFdlaWdodDogJzYwMCcsIGNvbG9yOiAnIzc1NzU3NScsZGlzcGxheTogJ2Jsb2NrJywgbWFyZ2luVG9wOiA1IH19Pnt0aGlzLnByb3BzLmlzX2luc3VyYW5jZV9hcHBsaWNhYmxlPycnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAoaW5jbHVkZXMgJHt0ZXN0Lm51bWJlcl9vZl90ZXN0c30gVGVzdHMpYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaXNfcGxhbl9hcHBsaWNhYmxlICYmICF0aGlzLnByb3BzLmlzX2luc3VyYW5jZV9hcHBsaWNhYmxlPyA8cCBjbGFzc05hbWU9XCJwa2ctZGlzY291bnRDcG5cIiBzdHlsZT17e2Rpc3BsYXk6J2lubGluZS1ibG9jaycsZmxvYXQ6J3JpZ2h0J319PkRvY3ByaW1lIENhcmUgQmVuZWZpdDwvcD46JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+IDogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5pc191c2VyX3ZpcCAmJiAhdGhpcy5wcm9wcy5pc191c2VyX2dvbGRfdmlwKT8nJyAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgOnRoaXMucHJvcHMuaGlkZV9wcmljZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwib25cIiBjaGVja2VkPXt0aGlzLnByb3BzLnRlc3QuaXNfc2VsZWN0ZWQgPyB0cnVlIDogZmFsc2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJvblwiIGNoZWNrZWQ9e3RoaXMucHJvcHMudGVzdC5pc19zZWxlY3RlZCA/IHRydWUgOiBmYWxzZX0gb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlVGVzdCh0ZXN0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaXNfdXNlcl92aXAgJiYgIXRoaXMucHJvcHMuaXNfdXNlcl9nb2xkX3ZpcD8nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOjxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBkbmctbGVmdC1wa2dcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiAnMHB4JyB9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPGJ1dHRvbiBjbGFzc05hbWU9XCJwa2ctaW5mby1idG5cIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGUoJ3Nob3dQYWNrYWdlSW5mbycsIHRlc3QpXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2luZm8uc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4qL31cblxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICggKHRoaXMucHJvcHMuaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgfHwgIXRoaXMucHJvcHMuc2VsZWN0ZWRUZXN0c0NvdW50KSAmJiBpbnN1cmFuY2UuaXNfaW5zdXJhbmNlX2NvdmVyZWQpIHx8ICF0ZXN0X3BhY2thZ2UubGVuZ3RoPycnXG4gICAgICAgICAgICAgICAgICAgICAgICA6PGJ1dHRvbiBjbGFzc05hbWU9XCJwa2ctaW5mby1idG4gaW5mby1zYW5cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnBhY2thZ2VOYW1lQ2xpY2soKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+e3RoaXMuc3RhdGUudGVzdExpc3RWaXNpYmxlID8gJ0hpZGUgZGV0YWlscycgOiAnVmlldyBkZXRhaWxzJ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLmlzX3VzZXJfdmlwICYmICF0aGlzLnByb3BzLmlzX3VzZXJfZ29sZF92aXApIHx8IHRoaXMucHJvcHMuaXNfcGxhbl9hcHBsaWNhYmxlIHx8IHRlc3QuaGlkZV9wcmljZSB8fCAoICh0aGlzLnByb3BzLmlzX2luc3VyYW5jZV9hcHBsaWNhYmxlIHx8ICF0aGlzLnByb3BzLnNlbGVjdGVkVGVzdHNDb3VudCkgJiYgaW5zdXJhbmNlLmlzX2luc3VyYW5jZV9jb3ZlcmVkICYmIGluc3VyYW5jZS5pc191c2VyX2luc3VyZWQpPyBcIlwiIFxuICAgICAgICAgICAgICAgICAgICA6cHJpY2VfdG9fcGF5ID09IG1ycC5zcGxpdCgnLicpWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICA/PHNwYW4gY2xhc3NOYW1lPVwidGVzdC1wcmljZSB0ZXh0LXNtXCI+4oK5IHtwcmljZV90b19wYXl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgOjxzcGFuIGNsYXNzTmFtZT1cInRlc3QtcHJpY2UgdGV4dC1zbVwiPuKCuSB7cHJpY2VfdG9fcGF5fTxzcGFuIGNsYXNzTmFtZT1cInRlc3QtbXJwXCI+4oK5IHtwYXJzZUludChtcnApfTwvc3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaXNfcGxhbl9hcHBsaWNhYmxlIHx8ICggKHRoaXMucHJvcHMuaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgfHwgIXRoaXMucHJvcHMuc2VsZWN0ZWRUZXN0c0NvdW50KSAmJiBpbnN1cmFuY2UuaXNfaW5zdXJhbmNlX2NvdmVyZWQgJiYgaW5zdXJhbmNlLmlzX3VzZXJfaW5zdXJlZCk/IDxzcGFuIGNsYXNzTmFtZT1cInRlc3QtcHJpY2UgdGV4dC1zbVwiPuKCuSAwPC9zcGFuPjonJyAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLmlzX3VzZXJfdmlwICYmICF0aGlzLnByb3BzLmlzX3VzZXJfZ29sZF92aXApPzxzcGFuIGNsYXNzTmFtZT1cInRlc3QtcHJpY2UgdGV4dC1zbVwiPuKCuSB7cHJpY2VfdG9fcGF5fTwvc3Bhbj46JydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXN0LXByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzdC5oaWRlX3ByaWNlID8gXCJcIiA6IDxzcGFuIGNsYXNzTmFtZT1cInRlc3QtcHJpY2VcIj4mIzgzNzc7IHtkZWFsX3ByaWNlfTxzcGFuIGNsYXNzTmFtZT1cInRlc3QtbXJwXCI+JiM4Mzc3OyB7bXJwfTwvc3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVzdC1uYW1lLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt0aGlzLnByb3BzLnRlc3QuaXNfc2VsZWN0ZWQgPyB0cnVlIDogZmFsc2V9IG9uQ2hhbmdlPXt0aGlzLnByb3BzLnRvZ2dsZVRlc3QuYmluZCh0aGlzLCB0ZXN0KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwa2ctaW5mb1wiIG9uQ2xpY2s9eygpID0+IHRoaXMucGFja2FnZU5hbWVDbGljaygpfSA+e3Rlc3QudGVzdC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGtnLWluZm8tYnRuXCIgb25DbGljaz17KCkgPT4geyB0b2dnbGUoJ3Nob3dQYWNrYWdlSW5mbycsIHRlc3QpIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2luZm8uc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5pc19pbnN1cmFuY2VfYXBwbGljYWJsZSAmJiB0aGlzLnN0YXRlLnRlc3RMaXN0VmlzaWJsZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdCBkcm9wLWRvd24tbGlzdCBsaXNpdG5nLWluLWxhYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzdF9wYWNrYWdlLm1hcCgocGFjaywgaikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxFeHBhbnNpb25QYW5lbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17an1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPXtwYWNrLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17cGFjay53aHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudExpc3Q9e3BhY2sucGFyYW1ldGVycyB8fCBbXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWNrYWdlVGVzdCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBMYWJEZXRhaWxzIGZyb20gJy4uL2NvbW1vbnMvbGFiRGV0YWlscy9pbmRleC5qcydcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9Mb2FkZXInXG5cbmltcG9ydCBMZWZ0QmFyIGZyb20gJy4uLy4uL2NvbW1vbnMvTGVmdEJhcidcbmltcG9ydCBSaWdodEJhciBmcm9tICcuLi8uLi9jb21tb25zL1JpZ2h0QmFyJ1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBIZWxtZXRUYWdzIGZyb20gJy4uLy4uL2NvbW1vbnMvSGVsbWV0VGFncydcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uLy4uL2NvbmZpZydcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9Ib21lL2Zvb3RlcidcblxuY2xhc3MgTGFiVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIGxldCBmb290ZXJEYXRhID0gbnVsbFxuICAgICAgICBpZiAodGhpcy5wcm9wcy5pbml0aWFsU2VydmVyRGF0YSkge1xuICAgICAgICAgICAgZm9vdGVyRGF0YSA9IHRoaXMucHJvcHMuaW5pdGlhbFNlcnZlckRhdGEuZm9vdGVyRGF0YVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBmb290ZXJEYXRhLFxuICAgICAgICAgICAgc2VvRnJpZW5kbHk6IHRoaXMucHJvcHMubWF0Y2gudXJsLmluY2x1ZGVzKCctbHBwJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zZW9GcmllbmRseSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRGb290ZXJEYXRhKHRoaXMucHJvcHMubWF0Y2gudXJsLnNwbGl0KCcvJylbMV0pLnRoZW4oKGZvb3RlckRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZm9vdGVyRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9vdGVyRGF0YTogZm9vdGVyRGF0YSB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBib29rTGFiKCkge1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnTGFiQm9va2luZ0NsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdsYWItYm9va2luZy1jbGlja2VkJ1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIC8qXG4gICAgICAgICAgICAgICAgbGV0IHRlc3RJZHMgPSB0aGlzLnByb3BzLkxBQlNbdGhpcy5wcm9wcy5zZWxlY3RlZExhYl0gfHwgW11cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgdGVzdElkcyA9IHRlc3RJZHMudGVzdHMubWFwKHggPT4geC50ZXN0X2lkKVxuICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldExhYkJ5SWQodGhpcy5wcm9wcy5zZWxlY3RlZExhYiwgdGVzdElkcylcbiAgICAgICAgKi9cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2VvRnJpZW5kbHkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0vYm9va2luZz9sYWJfaWQ9JHt0aGlzLnByb3BzLnNlbGVjdGVkTGFifWApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2xhYi8ke3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJ9L2Jvb2tgKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TWV0YVRhZ3NEYXRhKHNlb0RhdGEpIHtcbiAgICAgICAgbGV0IHRpdGxlID0gXCJcIlxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBcIlwiXG4gICAgICAgIGlmIChzZW9EYXRhKSB7XG4gICAgICAgICAgICB0aXRsZSA9IHNlb0RhdGEudGl0bGUgfHwgXCJcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb24gPSBzZW9EYXRhLmRlc2NyaXB0aW9uIHx8IFwiXCJcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24gfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgbGFiX2lkID0gdGhpcy5wcm9wcy5zZWxlY3RlZExhYlxuICAgICAgICBpZiAodGhpcy5wcm9wcy5pbml0aWFsU2VydmVyRGF0YSAmJiB0aGlzLnByb3BzLmluaXRpYWxTZXJ2ZXJEYXRhLmxhYklkKSB7XG4gICAgICAgICAgICBsYWJfaWQgPSB0aGlzLnByb3BzLmluaXRpYWxTZXJ2ZXJEYXRhLmxhYklkXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNlb191cmwgPSBcIlwiXG4gICAgICAgIGlmICh0aGlzLnByb3BzLkxBQlNbbGFiX2lkXSkge1xuICAgICAgICAgICAgc2VvX3VybCA9IHRoaXMucHJvcHMuTEFCU1tsYWJfaWRdLmxhYi51cmxcbiAgICAgICAgICAgIGlmIChzZW9fdXJsKSB7XG4gICAgICAgICAgICAgICAgc2VvX3VybCA9IFwiL1wiICsgc2VvX3VybFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBpc19wbGFuX2FwcGxpY2FibGUgPSBmYWxzZVxuICAgICAgICBsZXQgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgPSBmYWxzZVxuICAgICAgICBsZXQgaGlkZV9wcmljZSA9IGZhbHNlXG4gICAgICAgIGxldCBpc191c2VyX2luc3VyZWQgPSBmYWxzZVxuICAgICAgICBsZXQgaXNfdmlwX2FwcGxpY2FibGUgPSBmYWxzZVxuICAgICAgICBsZXQgaXNfdXNlcl9nb2xkX3ZpcCA9IGZhbHNlXG4gICAgICAgIGxldCBpc19jb3ZlcmVkX3VuZGVyX2dvbGQgPSBmYWxzZVxuICAgICAgICBsZXQgaXNfdXNlcl92aXAgPSBmYWxzZVxuXG4gICAgICAgIC8vRm9yIEluc3VyZWQgUGVyc29uIFJlbW92ZSB1bnNlbGVjdGVkIFRlc3RzL1BhY2thZ2VzXG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMucHJvZmlsZXMgJiYgdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXSkge1xuICAgICAgICAgICAgaXNfdXNlcl9pbnN1cmVkID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXS5pc19pbnN1cmVkXG4gICAgICAgICAgICBpc191c2VyX3ZpcCA9IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0uaXNfdmlwX21lbWJlclxuICAgICAgICAgICAgaXNfdXNlcl9nb2xkX3ZpcCA9IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0uaXNfdmlwX2dvbGRfbWVtYmVyXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY3VycmVudExhYlNlbGVjdGVkVGVzdHMgJiYgdGhpcy5wcm9wcy5jdXJyZW50TGFiU2VsZWN0ZWRUZXN0cy5sZW5ndGgpIHtcblxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkVGVzdHMgPSB0aGlzLnByb3BzLmN1cnJlbnRMYWJTZWxlY3RlZFRlc3RzLmZpbHRlcih4ID0+IHguaXNfc2VsZWN0ZWQpXG4gICAgICAgICAgICBpc19wbGFuX2FwcGxpY2FibGUgPSBzZWxlY3RlZFRlc3RzLmxlbmd0aCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgPSBzZWxlY3RlZFRlc3RzLmxlbmd0aCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgaXNfcGxhbl9hcHBsaWNhYmxlID0gc2VsZWN0ZWRUZXN0cy5sZW5ndGggPyB0cnVlIDogZmFsc2VcblxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jdXJyZW50TGFiU2VsZWN0ZWRUZXN0cy5tYXAoKHRlc3QsIGkpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmICh0ZXN0LmlzX3NlbGVjdGVkKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9DaGVjayBTZWxlY3RlZCBUZXN0cyBmb3IgSW5zdXJhbmNlXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlc3QuaW5zdXJhbmNlICYmIHRlc3QuaW5zdXJhbmNlLmlzX2luc3VyYW5jZV9jb3ZlcmVkICYmIHRlc3QuaW5zdXJhbmNlLmluc3VyYW5jZV90aHJlc2hvbGRfYW1vdW50ID49IHBhcnNlSW50KHRlc3QuZGVhbF9wcmljZSkgJiYgdGVzdC5pbnN1cmFuY2UuaXNfdXNlcl9pbnN1cmVkKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vQ2hlY2sgZm9yIFVzZXIgUGxhbnNcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGVzdC5pbmNsdWRlZF9pbl91c2VyX3BsYW4pIHtcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNfcGxhbl9hcHBsaWNhYmxlID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmKHRlc3QudmlwICYmIHRlc3QudmlwLmNvdmVyZWRfdW5kZXJfdmlwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzX3ZpcF9hcHBsaWNhYmxlID0gaXNfdXNlcl9nb2xkX3ZpcFxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKHRlc3QudmlwICYmIHRlc3QudmlwLmlzX2dvbGRfbWVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc19jb3ZlcmVkX3VuZGVyX2dvbGQgPSBpc191c2VyX2luc3VyZWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0ZXN0LmhpZGVfcHJpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZV9wcmljZSA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgdGhpcyB3YXMgdGhlIGxhbmRpbmcgcGFnZVxuICAgICAgICBsZXQgbGFuZGluZ19wYWdlID0gZmFsc2VcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93Lk9OX0xBTkRJTkdfUEFHRSkge1xuICAgICAgICAgICAgbGFuZGluZ19wYWdlID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciBzaG93U2VhcmNoPXt0cnVlfSAvPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBwYXJlbnQtc2VjdGlvbiBib29rLWFwcG9pbnRtZW50LXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGVmdEJhciAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctNyBjZW50ZXItY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxoZWFkZXIgY2xhc3NOYW1lPVwic2tpbi1wcmltYXJ5IGZpeGVkIGhvcml6b250YWwgdG9wIHN0aWNreS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci10aXRsZSBmdy03MDAgY2FwaXRhbGl6ZSB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaW5saW5lLWxpc3QgdG9wLW5hdiBhbHBoYS1ieCB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5nbygtMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3QtaW1nIGN0LWltZy1zbSBhcnJvdy1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvbGVmdC1hcnJvdy5zdmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlIGZ3LTcwMCBjYXBpdGFsaXplIHRleHQtd2hpdGUgdGV4dC1jZW50ZXJcIj5MYWIgRGV0YWlsczwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTJcIiBzdHlsZT17eyBwYWRkaW5nTGVmdDogMCB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLWhvbWUtaWNvbi1kaXZcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9kb2MtcHJpbWUtbG9nby5wbmdcIn0gY2xhc3NOYW1lPVwibW9iaWxlLWhvbWUtaWNvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaGVhZGVyPiAqL31cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMuTEFCU1tsYWJfaWRdICYmIHRoaXMucHJvcHMuTEFCU1tsYWJfaWRdLnRlc3RzKT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLkxBQlNbbGFiX2lkXSAmJiB0aGlzLnByb3BzLkxBQlNbbGFiX2lkXS5sYWIgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWxtZXRUYWdzIHRhZ3NEYXRhPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5nZXRNZXRhVGFnc0RhdGEodGhpcy5wcm9wcy5MQUJTW2xhYl9pZF0ubGFiLnNlbykudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5nZXRNZXRhVGFnc0RhdGEodGhpcy5wcm9wcy5MQUJTW2xhYl9pZF0ubGFiLnNlbykuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5vbmljYWxVcmw6IGAke0NPTkZJRy5BUElfQkFTRV9VUkx9JHtzZW9fdXJsIHx8IHRoaXMucHJvcHMubWF0Y2gudXJsfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gbm9JbmRleD17dGhpcy5wcm9wcy5sb2NhdGlvbiAmJiB0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lICYmIHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJ2NrLWJpcmxhLWhvc3BpdGFsLWZvci13b21lbi1pbi1zZWN0b3ItNTAtZ3VyZ2Fvbi1scHAnKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiRGV0YWlscyB7Li4udGhpcy5wcm9wc30gaXNfaW5zdXJhbmNlX2FwcGxpY2FibGU9e2lzX2luc3VyYW5jZV9hcHBsaWNhYmxlfSBkYXRhPXt0aGlzLnByb3BzLkxBQlNbbGFiX2lkXX0gaXNfcGxhbl9hcHBsaWNhYmxlPXtpc19wbGFuX2FwcGxpY2FibGV9IGhpZGVfcHJpY2U9e2hpZGVfcHJpY2V9IGlzX3VzZXJfaW5zdXJlZD17aXNfdXNlcl9pbnN1cmVkfSBzZW9GcmllbmRseT17dGhpcy5zdGF0ZS5zZW9GcmllbmRseX0gaXNfdmlwX2FwcGxpY2FibGU9e2lzX3ZpcF9hcHBsaWNhYmxlfSBpc19jb3ZlcmVkX3VuZGVyX2dvbGQ9e2lzX2NvdmVyZWRfdW5kZXJfZ29sZH0gaXNfdXNlcl92aXA9e2lzX3VzZXJfdmlwfSBpc191c2VyX2dvbGRfdmlwPXtpc191c2VyX2dvbGRfdmlwfS8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jdXJyZW50TGFiU2VsZWN0ZWRUZXN0cy5maWx0ZXIoeCA9PiB4LmlzX3NlbGVjdGVkKS5sZW5ndGggPCAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBvbkNsaWNrPXt0aGlzLmJvb2tMYWIuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwicmF0YnRuLWJ0biBwLTMgdi1idG4gdi1idG4tcHJpbWFyeSBidG4tbGcgZml4ZWQgaG9yaXpvbnRhbCBib3R0b20gbm8tcm91bmQgYnRuLWxnIHRleHQtbGcgc3RpY2t5LWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19pbnN1cmFuY2VfYXBwbGljYWJsZSB8fCBpc19wbGFuX2FwcGxpY2FibGUgfHwgdHJ1ZT8gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxzcGFuIGNsYXNzTmFtZT1cImNvdXBvbi1hdXRvLWFwcGxpZWQtbGFiXCI+KkNvdXBvbiBhdXRvIGFwcGxpZWQgb24gY2hlY2tvdXQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9va1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHNlbGVjdGVkLW9wdGlvbiBzdGF0aWMtYnRuIGJvb2stcmlnaHQtYWxpZ24tdGV4dFwiIHN0eWxlPXt7IHZlcnRpY2FsQWxpZ246IDIsIG1hcmdpblJpZ2h0OiA4LCBtYXJnaW5MZWZ0OiAxMCB9fT4oe3RoaXMucHJvcHMuY3VycmVudExhYlNlbGVjdGVkVGVzdHMuZmlsdGVyKHggPT4geC5pc19zZWxlY3RlZCkubGVuZ3RofSBTZWxlY3RlZCkgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IDxMb2FkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmlnaHRCYXIgZXh0cmFDbGFzcz1cIiBjaGF0LWZsb2F0LWJ0bi0yXCIgdHlwZT1cImxhYlwiIG1zZ1RlbXBsYXRlPVwiZ29sZF9nZW5lcmFsX3RlbXBsYXRlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyIGZvb3RlckRhdGE9e3RoaXMuc3RhdGUuZm9vdGVyRGF0YX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGFiVmlld1xuIiwiaW1wb3J0IExhYlZpZXcgZnJvbSAnLi9MYWJWaWV3LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBMYWJWaWV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGdldExhYkJ5VXJsLCBnZXRMYWJCeUlkLCBzZWxlY3RMYWJUaW1lU0xvdCwgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEsIGdldFJhdGluZ0NvbXBsaW1lbnRzLCBjcmVhdGVBcHBvaW50bWVudFJhdGluZywgdXBkYXRlQXBwb2ludG1lbnRSYXRpbmcsIGNsb3NlQXBwb2ludG1lbnRSYXRpbmcsIGNsb3NlQXBwb2ludG1lbnRQb3BVcCwgZ2V0Rm9vdGVyRGF0YSwgZ2V0TGFiVGVzdHMsIHNhdmVQaW5jb2RlLCBnZXRBbGxSYXRpbmdzLCBzZWxlY3RTZWFyY2hUeXBlLCBnZXREb3dubG9hZEFwcEJhbm5lckxpc3QgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuXG5pbXBvcnQgTGFiVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2RpYWdub3Npcy9sYWIvaW5kZXguanMnXG5cbmNsYXNzIExhYiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIGxldCBsX2lkID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQgfHwgdGhpcy5nZXRfbGFiX2lkX2J5X3VybCh0aGlzLnByb3BzLm1hdGNoLnVybClcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlbGVjdGVkTGFiOiBsX2lkLFxuICAgICAgICAgICAgZGVmYXVsdFRlc3Q6IFtdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRfbGFiX2lkX2J5X3VybCh1cmwpIHtcbiAgICAgICAgZm9yIChsZXQgbF9pZCBpbiB0aGlzLnByb3BzLkxBQlMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLkxBQlNbbF9pZF0ubGFiICYmIHVybC5pbmNsdWRlcyh0aGlzLnByb3BzLkxBQlNbbF9pZF0ubGFiLnVybCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbF9pZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWREYXRhKHN0b3JlLCBtYXRjaCkge1xuICAgICAgICBpZiAobWF0Y2gucGFyYW1zLmlkKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZ2V0TGFiQnlJZChtYXRjaC5wYXJhbXMuaWQpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHVybCA9IG1hdGNoLnVybFxuICAgICAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgICAgIHVybCA9IHVybC5zcGxpdChcIi9cIilbMV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goZ2V0TGFiQnlVcmwodXJsLCBbXSwgKGxhYklkLCB1cmwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhYklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2gudXJsLmluY2x1ZGVzKCctbHBwJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRGb290ZXJEYXRhKG1hdGNoLnVybC5zcGxpdChcIi9cIilbMV0pKCkudGhlbigoZm9vdGVyRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb290ZXJEYXRhID0gZm9vdGVyRGF0YSB8fCBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeyBsYWJJZCwgZm9vdGVyRGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeyBsYWJJZCB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeyBsYWJJZCB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHVybFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJvdXRlcjogKCkgPT4gbnVsbFxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgbGFiX2lkO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpIHtcbiAgICAgICAgICAgIGxldCB0ZXN0SWRzID0gdGhpcy5wcm9wcy5sYWJfdGVzdF9kYXRhW3RoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkXSB8fCBbXVxuICAgICAgICAgICAgbGFiX2lkID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWRcbiAgICAgICAgICAgIGxldCB0ZXN0cyA9IHRlc3RJZHMubWFwKHggPT4geC5pZClcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0TGFiQnlJZChsYWJfaWQsIHRlc3RzKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHVybCA9IHRoaXMucHJvcHMubWF0Y2gudXJsXG4gICAgICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICAgICAgdXJsID0gdXJsLnNwbGl0KFwiL1wiKVsxXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRMYWJCeVVybCh1cmwsIFtdLCAobGFiSWQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobGFiSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiX2lkID0gbGFiSWRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkTGFiOiBsYWJJZCB9KVxuICAgICAgICAgICAgICAgICAgICBsZXQgdGVzdElkcyA9IHRoaXMucHJvcHMubGFiX3Rlc3RfZGF0YVtsYWJJZF0gfHwgW11cbiAgICAgICAgICAgICAgICAgICAgbGV0IHRlc3RzID0gdGVzdElkcy5tYXAoeCA9PiB4LmlkKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldExhYkJ5SWQobGFiSWQsIHRlc3RzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vYWx3YXlzIGNsZWFyIHNlbGVjdGVkIHRpbWUgYXQgbGFiIHByb2ZpbGVcbiAgICAgICAgbGV0IHNsb3QgPSB7IHRpbWU6IHt9IH1cbiAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RMYWJUaW1lU0xvdChzbG90LCBmYWxzZSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGFiVmlldyB7Li4udGhpcy5wcm9wc30gc2VsZWN0ZWRMYWI9e3RoaXMuc3RhdGUuc2VsZWN0ZWRMYWJ9IC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHBhc3NlZFByb3BzKSA9PiB7XG4gICAgLyoqXG4gICAgICogaW5pdGlhbFNlcnZlckRhdGEgaXMgc2VydmVyIHJlbmRlcmVkIGFzeW5jIGRhdGEgcmVxdWlyZWQgYnVpbGQgaHRtbCBvbiBzZXJ2ZXIuIFxuICAgICAqL1xuICAgIGxldCBpbml0aWFsU2VydmVyRGF0YSA9IG51bGxcbiAgICBsZXQgeyBzdGF0aWNDb250ZXh0IH0gPSBwYXNzZWRQcm9wc1xuICAgIGlmIChzdGF0aWNDb250ZXh0ICYmIHN0YXRpY0NvbnRleHQuZGF0YSkge1xuICAgICAgICBpbml0aWFsU2VydmVyRGF0YSA9IHN0YXRpY0NvbnRleHQuZGF0YVxuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgICAgbGFiX3Rlc3RfZGF0YSxcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgc2VsZWN0ZWRDcml0ZXJpYXMsXG4gICAgICAgIGZpbHRlckNyaXRlcmlhLFxuICAgICAgICBMT0FERURfU0VBUkNIX0NSSVRFUklBX0xBQixcbiAgICAgICAgY3VycmVudExhYlNlbGVjdGVkVGVzdHNcbiAgICB9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX0xBQlNcblxuICAgIGxldCBMQUJTID0gc3RhdGUuTEFCU1xuICAgIGxldCB7IHJhdGVkX2FwcG9pbm1lbnRzLCBwcm9maWxlcywgc2VsZWN0ZWRQcm9maWxlLCBkZWZhdWx0UHJvZmlsZSwgYXBwX2Rvd25sb2FkX2xpc3QsIGRldmljZV9pbmZvIH0gPSBzdGF0ZS5VU0VSXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsYWJfdGVzdF9kYXRhLFxuICAgICAgICBzZWxlY3RlZENyaXRlcmlhcyxcbiAgICAgICAgTEFCUywgaW5pdGlhbFNlcnZlckRhdGEsXG4gICAgICAgIHJhdGVkX2FwcG9pbm1lbnRzLFxuICAgICAgICBwcm9maWxlcyxcbiAgICAgICAgc2VsZWN0ZWRQcm9maWxlLFxuICAgICAgICBjdXJyZW50TGFiU2VsZWN0ZWRUZXN0cyxcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgZGVmYXVsdFByb2ZpbGUsXG4gICAgICAgIGFwcF9kb3dubG9hZF9saXN0LFxuICAgICAgICBkZXZpY2VfaW5mb1xuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0TGFiQnlVcmw6ICh1cmwsIHRlc3RJZHMsIGNiKSA9PiBkaXNwYXRjaChnZXRMYWJCeVVybCh1cmwsIHRlc3RJZHMsIGNiKSksXG4gICAgICAgIGdldExhYkJ5SWQ6IChsYWJJZCwgdGVzdElkcykgPT4gZGlzcGF0Y2goZ2V0TGFiQnlJZChsYWJJZCwgdGVzdElkcykpLFxuICAgICAgICBzZWxlY3RMYWJUaW1lU0xvdDogKHNsb3QsIHJlc2NoZWR1bGUpID0+IGRpc3BhdGNoKHNlbGVjdExhYlRpbWVTTG90KHNsb3QsIHJlc2NoZWR1bGUpKSxcbiAgICAgICAgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWE6ICh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQpID0+IGRpc3BhdGNoKHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKHR5cGUsIGNyaXRlcmlhLCBmb3JjZUFkZCkpLFxuICAgICAgICBnZXRSYXRpbmdDb21wbGltZW50czogKGNhbGxiYWNrKSA9PiBkaXNwYXRjaChnZXRSYXRpbmdDb21wbGltZW50cyhjYWxsYmFjaykpLFxuICAgICAgICBjcmVhdGVBcHBvaW50bWVudFJhdGluZzogKGFwcG9pbnRtZW50RGF0YSwgY2FsbGJhY2spID0+IGRpc3BhdGNoKGNyZWF0ZUFwcG9pbnRtZW50UmF0aW5nKGFwcG9pbnRtZW50RGF0YSwgY2FsbGJhY2spKSxcbiAgICAgICAgdXBkYXRlQXBwb2ludG1lbnRSYXRpbmc6IChyYXRpbmdEYXRhLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2godXBkYXRlQXBwb2ludG1lbnRSYXRpbmcocmF0aW5nRGF0YSwgY2FsbGJhY2spKSxcbiAgICAgICAgY2xvc2VBcHBvaW50bWVudFJhdGluZzogKGRvY3RvcklkLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2goY2xvc2VBcHBvaW50bWVudFJhdGluZyhkb2N0b3JJZCwgY2FsbGJhY2spKSxcbiAgICAgICAgY2xvc2VBcHBvaW50bWVudFBvcFVwOiAoaWQsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaChjbG9zZUFwcG9pbnRtZW50UG9wVXAoaWQsIGNhbGxiYWNrKSksXG4gICAgICAgIGdldEZvb3RlckRhdGE6ICh1cmwpID0+IGRpc3BhdGNoKGdldEZvb3RlckRhdGEodXJsKSksXG4gICAgICAgIGdldExhYlRlc3RzOiAobGFiSWQsIHRlc3ROYW1lKSA9PiBkaXNwYXRjaChnZXRMYWJUZXN0cyhsYWJJZCwgdGVzdE5hbWUpKSxcbiAgICAgICAgc2F2ZVBpbmNvZGU6IChwaW5jb2RlKSA9PiBkaXNwYXRjaChzYXZlUGluY29kZShwaW5jb2RlKSksXG4gICAgICAgIGdldEFsbFJhdGluZ3M6IChjb250ZW50X3R5cGUsIG9iamVjdF9pZCwgcGFnZSwgY2IpID0+IGRpc3BhdGNoKGdldEFsbFJhdGluZ3MoY29udGVudF90eXBlLCBvYmplY3RfaWQsIHBhZ2UsIGNiKSksXG4gICAgICAgIHNlbGVjdFNlYXJjaFR5cGU6ICh0eXBlKSA9PiBkaXNwYXRjaChzZWxlY3RTZWFyY2hUeXBlKHR5cGUpKSxcbiAgICAgICAgZ2V0RG93bmxvYWRBcHBCYW5uZXJMaXN0OiAoY2IpID0+IGRpc3BhdGNoKGdldERvd25sb2FkQXBwQmFubmVyTGlzdChjYikpXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKExhYik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRPcGVuQmFubmVyKGxhYl90aW1pbmcsIGxhYl90aW1pbmdfZGF0YSA9IFtdLCBuZXh0X2xhYl90aW1pbmcsIG5leHRfbGFiX3RpbWluZ19kYXRhID0gbnVsbCkge1xuICAgIGxldCBpc19vcGVuX25vdyA9IGZhbHNlXG4gICAgbGV0IG9wZW5fbmV4dF90b2RheSA9IGZhbHNlXG5cbiAgICBsZXQgdGltZV9ub3cgPSBuZXcgRGF0ZSgpLmdldEhvdXJzKCkgKyAwLjVcbiAgICBmb3IgKGxldCBsdGQgb2YgbGFiX3RpbWluZ19kYXRhKSB7XG4gICAgICAgIGlmICh0aW1lX25vdyA8PSBsdGQuZW5kICYmIHRpbWVfbm93ID49IGx0ZC5zdGFydCkge1xuICAgICAgICAgICAgaXNfb3Blbl9ub3cgPSB0cnVlXG4gICAgICAgICAgICByZXR1cm4gPHAgc3R5bGU9e3sgZm9udFNpemU6IDEyIH19ID57bGFiX3RpbWluZ308L3A+XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRpbWVfbm93IDwgbHRkLnN0YXJ0KSB7XG4gICAgICAgICAgICBvcGVuX25leHRfdG9kYXkgPSBsdGQuc3RhcnRcbiAgICAgICAgICAgIG9wZW5fbmV4dF90b2RheSA9IF9kZWNpbWFsVG9UaW1lKG9wZW5fbmV4dF90b2RheSlcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3Blbl9uZXh0X3RvZGF5KSB7XG4gICAgICAgIHJldHVybiA8cCBzdHlsZT17eyBmb250U2l6ZTogMTIgfX0gPk9wZW5zIG5leHQgYXQge29wZW5fbmV4dF90b2RheX0sIHRvZGF5PC9wPlxuICAgIH1cblxuICAgIGNvbnN0IFdFRUtfREFZUyA9IFsnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheScsICdTdW5kYXknXVxuICAgIGxldCBuZXh0X29wZW4gPSBmYWxzZVxuICAgIGxldCBuZXh0X29wZW5fdG9kYXkgPSBcIlwiXG4gICAgaWYgKG5leHRfbGFiX3RpbWluZ19kYXRhKSB7XG4gICAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKClcbiAgICAgICAgbGV0IHdlZWtEYXlOdW1iZXIgPSB0b2RheS5nZXREYXkoKVxuICAgICAgICB3ZWVrRGF5TnVtYmVyID0gd2Vla0RheU51bWJlciA9PSAwID8gNiA6IHdlZWtEYXlOdW1iZXIgLSAxXG4gICAgICAgIGZvciAobGV0IGkgaW4gbmV4dF9sYWJfdGltaW5nX2RhdGEpIHtcbiAgICAgICAgICAgIG5leHRfb3BlbiA9IG5leHRfbGFiX3RpbWluZ19kYXRhW2ldWzBdLnN0YXJ0XG4gICAgICAgICAgICBuZXh0X29wZW4gPSBfZGVjaW1hbFRvVGltZShuZXh0X29wZW4pXG4gICAgICAgICAgICBpZiAoaSAtIHdlZWtEYXlOdW1iZXIgPT0gMSkge1xuICAgICAgICAgICAgICAgIG5leHRfb3Blbl90b2RheSA9ICd0b21vcnJvdydcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV4dF9vcGVuX3RvZGF5ID0gV0VFS19EQVlTW2ldXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChuZXh0X29wZW4gJiYgbmV4dF9vcGVuX3RvZGF5KSB7XG4gICAgICAgIHJldHVybiA8cCBzdHlsZT17eyBmb250U2l6ZTogMTIgfX0gPk9wZW5zIG5leHQgYXQge25leHRfb3Blbn0sIHtuZXh0X29wZW5fdG9kYXl9PC9wPlxuICAgIH1cblxuICAgIHJldHVybiBcIkNsb3NlZFwiXG5cbn1cblxuXG5mdW5jdGlvbiBfZGVjaW1hbFRvVGltZSh0aW1lKSB7XG4gICAgdGltZSA9IHRpbWUudG9TdHJpbmcoKVxuICAgIGxldCBob3VycyA9IHRpbWUuc3BsaXQoJy4nKVswXVxuICAgIGxldCBtaW51dGVzID0gdGltZS5zcGxpdCgnLicpWzFdXG4gICAgaG91cnMgPSBwYXJzZUludChob3VycylcbiAgICBpZiAobWludXRlcyA9PSAnNScpIHtcbiAgICAgICAgbWludXRlcyA9ICc6MzAnXG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWludXRlcyA9IFwiXCJcbiAgICB9XG4gICAgbGV0IGRheV90aW1lID0gXCJBTVwiXG4gICAgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICAgIGRheV90aW1lID0gXCJQTVwiXG4gICAgfVxuICAgIGhvdXJzID0gaG91cnMgJSAxMlxuICAgIHJldHVybiBgJHtob3Vyc30ke21pbnV0ZXN9ICR7ZGF5X3RpbWV9YFxufSJdLCJzb3VyY2VSb290IjoiIn0=