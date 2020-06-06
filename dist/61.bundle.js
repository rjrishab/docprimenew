(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

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

/***/ "./dev/js/components/commons/article/Article.js":
/*!******************************************************!*\
  !*** ./dev/js/components/commons/article/Article.js ***!
  \******************************************************/
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

var _LeftBar = __webpack_require__(/*! ../../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _config = __webpack_require__(/*! ../../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _HelmetTags = __webpack_require__(/*! ../../commons/HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

var _footer = __webpack_require__(/*! ../Home/footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _initialsPicture = __webpack_require__(/*! ../initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _ArticleCommentBox = __webpack_require__(/*! ./ArticleCommentBox.js */ "./dev/js/components/commons/article/ArticleCommentBox.js");

var _ArticleCommentBox2 = _interopRequireDefault(_ArticleCommentBox);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _Reply = __webpack_require__(/*! ./Reply.js */ "./dev/js/components/commons/article/Reply.js");

var _Reply2 = _interopRequireDefault(_Reply);

var _bannerCarousel = __webpack_require__(/*! ../Home/bannerCarousel */ "./dev/js/components/commons/Home/bannerCarousel.js");

var _bannerCarousel2 = _interopRequireDefault(_bannerCarousel);

var _articleAuthor = __webpack_require__(/*! ../articleAuthor/articleAuthor */ "./dev/js/components/commons/articleAuthor/articleAuthor.js");

var _articleAuthor2 = _interopRequireDefault(_articleAuthor);

var _locationElements = __webpack_require__(/*! ../../../containers/commons/locationElements */ "./dev/js/containers/commons/locationElements.js");

var _locationElements2 = _interopRequireDefault(_locationElements);

var _CommonSearch = __webpack_require__(/*! ../../../containers/commons/CommonSearch.js */ "./dev/js/containers/commons/CommonSearch.js");

var _CommonSearch2 = _interopRequireDefault(_CommonSearch);

var _FixedMobileFooter = __webpack_require__(/*! ../Home/FixedMobileFooter */ "./dev/js/components/commons/Home/FixedMobileFooter.js");

var _FixedMobileFooter2 = _interopRequireDefault(_FixedMobileFooter);

var _FooterTestSpecializationWidgets = __webpack_require__(/*! ./FooterTestSpecializationWidgets.js */ "./dev/js/components/commons/article/FooterTestSpecializationWidgets.js");

var _FooterTestSpecializationWidgets2 = _interopRequireDefault(_FooterTestSpecializationWidgets);

var _BookingConfirmationPopup = __webpack_require__(/*! ../../diagnosis/bookingSummary/BookingConfirmationPopup */ "./dev/js/components/diagnosis/bookingSummary/BookingConfirmationPopup.js");

var _BookingConfirmationPopup2 = _interopRequireDefault(_BookingConfirmationPopup);

var _mainPopup = __webpack_require__(/*! ../mainPopup.js */ "./dev/js/components/commons/mainPopup.js");

var _mainPopup2 = _interopRequireDefault(_mainPopup);

var _Loader = __webpack_require__(/*! ../Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
// import RelatedArticles from './RelatedArticles'

var Article = function (_React$Component) {
    _inherits(Article, _React$Component);

    function Article(props) {
        _classCallCheck(this, Article);

        var _this = _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).call(this, props));

        _this.handleChange = function (e) {
            _this.setState({ phone_number: e.target.value });
        };

        _this.navigateToGold = function (e) {
            var data = {
                'Category': 'ConsumerApp', 'Action': 'ArticleGoldBannerClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'article-gold-banner-clicked'
            };
            _gtm2.default.sendEvent({ data: data });
            _this.props.history.push('/vip-gold-details?is_gold=true&source=mobile-medicine-banner-gold-clicked&lead_source=Docprime');
            // let self = this
            // const parsed = queryString.parse(this.props.location.search) 
            // if(this.state.phone_number == "" && this.state.phone_number.length <10){
            //     this.setState({inValidPhno:true})
            //      SnackBar.show({ pos: 'bottom-center', text: "Please enter valid phone number" })
            // }else{
            //     if(!this.state.phone_number.match(/^[56789]{1}[0-9]{9}$/) || this.state.phone_number.length >10){
            //       this.setState({inValidPhno:true})  
            //       SnackBar.show({ pos: 'bottom-center', text: "Please enter valid phone number" })
            //     }else{
            //         let Lead_data = {}
            //         Lead_data.lead_type = 'MEDICINE'
            //         Lead_data.lead_source = 'medicine'
            //         Lead_data.exitpoint_url = 'http://docprime.com' + this.props.location.pathname
            //         Lead_data.source = parsed
            //         Lead_data.phone_number = this.state.phone_number
            //         if(self.props.common_utm_tags && self.props.common_utm_tags.length){
            //             Lead_data.utm_tags = self.getUtmTags()
            //         }
            //         self.props.NonIpdBookingLead(Lead_data)
            //         let data = {
            //         'Category': 'ConsumerApp', 'Action': 'ArticleGoldBannerClicked', 'CustomerID': GTM.getUserId() || '', 'leadid': 0, 'event': 'article-gold-banner-clicked'
            //         }
            //         GTM.sendEvent({ data: data })
            //         this.props.history.push('/vip-gold-details?is_gold=true&source=mobile-medicine-banner-gold-clicked&lead_source=Docprime')
            //     }
            // }
        };

        var footerData = null;

        var articleData = null;
        var articleLoaded = false;

        if (_this.props.initialServerData) {
            articleData = _this.props.initialServerData.articleData;
            articleLoaded = true;
        }

        var articleId = _this.props.match.url;
        articleId = articleId.toLowerCase().substring(1, articleId.length);
        if (_this.props.articleData && _this.props.articleData[articleId]) {
            articleData = _this.props.articleData[articleId];
            articleLoaded = true;
        }

        _this.state = {
            articleData: articleData,
            replyOpenFor: null,
            comment: '',
            articleLoaded: articleLoaded,
            searchCities: [],
            searchWidget: '',
            specialization_id: '',
            hideFooterWidget: true,
            showPopup: false,
            medBtnTop: '',
            showPharmacyAtClient: false,
            showPharmacyFooter: true,
            showMainPopup: false,
            isMedicinePage: _this.props.match.url.includes('-mddp'),
            phone_number: "",
            inValidPhno: false
        };
        return _this;
    }

    _createClass(Article, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (!this.state.articleData) {
                this.getArticleData();
            }
            if (window) {
                window.scrollTo(0, 0);
            }
            if (this.props.match.path.split('-')[1] === 'mddp') {
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
            this.setState({ hideFooterWidget: false, showPharmacyAtClient: true });
            setTimeout(function () {
                _this2.setState({ showPharmacyFooter: true });
            }, 6000);

            if (this.state.isMedicinePage) {
                setTimeout(function () {
                    _this2.setState({ showMainPopup: true });
                }, 4000);
            }
            if (window && this.props.match.path.split('-')[1] === 'mddp') {
                window.addEventListener('scroll', this.scrollHandler);
            }

            var sessionId = sessionStorage.getItem('iFrameId');
            if (!sessionId) {
                this.props.iFrameState('', true);
            }
        }
    }, {
        key: 'scrollHandler',
        value: function scrollHandler() {
            setTimeout(function () {
                if (document) {
                    var elem = document.getElementById('medicine-btn');
                    var elemContainer = document.getElementById('medicine-btn-div');

                    if (elem && elemContainer) {
                        // alert(window.scrollY +'a'+ elemContainer.offsetTop)
                        if (window && window.scrollY >= elemContainer.offsetHeight + 335) {
                            elem.style.background = '#1b97fd';
                            elem.style.borderRadius = '0px';
                            elemContainer.style.padding = '0px';
                        } else {
                            elem.style.background = '#1b97fd';
                            elem.style.borderRadius = '5px';
                            elemContainer.style.padding = '0px 15px';
                        }
                    }
                }
            }, 100);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('scroll', this.scrollHandler);
        }
    }, {
        key: 'getArticleData',
        value: function getArticleData() {
            var _this3 = this;

            var articleId = this.props.match.url;
            if (articleId) {
                articleId = articleId.toLowerCase().substring(1, articleId.length);
                this.props.fetchArticle(articleId, this.props.location.search.includes('preview'), function (err, data) {
                    if (!err /*&& !this.state.articleData*/) {
                            _this3.setState({ articleData: data, articleLoaded: true, replyOpenFor: '' });
                        } else {}
                });
            }
        }
    }, {
        key: 'onHomeClick',
        value: function onHomeClick(event, link) {
            event.preventDefault();
            this.props.history.push(link);
        }
    }, {
        key: 'facebookClick',
        value: function facebookClick() {
            if (window) {
                window.open('https://www.facebook.com/sharer/sharer.php?u=' + document.URL, 'facebook-popup', 'height=350,width=600');
            }
        }
    }, {
        key: 'twitterClick',
        value: function twitterClick() {
            if (window) {
                window.open('https://twitter.com/share?url=' + document.URL, 'twitter-popup', 'height=350,width=600');
            }
        }
    }, {
        key: 'linkedinClick',
        value: function linkedinClick() {
            if (window) {
                window.open('https://www.linkedin.com/shareArticle?mini=true&url=' + document.URL + '&title=' + this.state.articleData.title.split('|')[0] + '&source=docprime.com');
            }
        }
    }, {
        key: 'whatsappClick',
        value: function whatsappClick() {
            if (window) {
                window.open('https://wa.me/?text=' + document.URL);
            }
        }
    }, {
        key: 'commentReplyClicked',
        value: function commentReplyClicked(id) {
            this.setState({ replyOpenFor: id });
        }
    }, {
        key: 'postReply',
        value: function postReply(e) {
            var _this4 = this;

            e.preventDefault();
            if (!this.state.comment) {
                setTimeout(function () {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please write valid comment" });
                }, 500);
                return;
            }
            var postData = {
                article: this.state.articleData.id,
                comment: this.state.comment,
                name: Object.values(this.props.profiles).length && this.props.profiles[this.props.defaultProfile] ? this.props.profiles[this.props.defaultProfile].name : '',
                email: Object.values(this.props.profiles).length && this.props.profiles[this.props.defaultProfile] ? this.props.profiles[this.props.defaultProfile].email : '',
                parent: this.state.replyOpenFor
            };
            this.props.postComment(postData, function (error, data) {
                if (data) {
                    _this4.setState({ comment: '' });
                    _this4.getArticleData();
                    setTimeout(function () {
                        _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Comment Posted Sucessfully, Awaiting moderation" });
                    }, 500);
                } else {
                    setTimeout(function () {
                        _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Could not post your comment, Try again!" });
                    }, 500);
                }
            });
            return;
        }
    }, {
        key: 'handleInputComment',
        value: function handleInputComment(e) {
            this.setState({ comment: e.target.value });
        }
    }, {
        key: 'getCityList',
        value: function getCityList(key) {
            var _this5 = this;

            return this.state.searchCities.length > 0 && this.state.searchWidget == key ? _react2.default.createElement(
                'section',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'widget mb-10' },
                    _react2.default.createElement(
                        'div',
                        { className: 'common-search-container' },
                        _react2.default.createElement(
                            'p',
                            { className: 'srch-heading' },
                            'Location Search'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'common-listing-cont' },
                            _react2.default.createElement(
                                'ul',
                                null,
                                this.state.searchCities.map(function (result, i) {
                                    return _react2.default.createElement(
                                        'li',
                                        { key: i },
                                        _react2.default.createElement(
                                            'p',
                                            { className: '', onClick: _this5.selectLocation.bind(_this5, result) },
                                            result.description
                                        )
                                    );
                                })
                            )
                        )
                    )
                )
            ) : '';
        }
    }, {
        key: 'getCityListLayout',
        value: function getCityListLayout() {
            var searchResults = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var searchParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var specialization_id = '';
            var searchWidget = '';
            if (searchParams && Object.values(searchParams).length) {
                specialization_id = searchParams.specialityId;
                searchWidget = searchParams.widgetId;
            }
            if (searchResults.length) {
                this.setState({ searchCities: searchResults, searchWidget: searchWidget, specialization_id: specialization_id });
            } else {
                this.setState({ searchCities: [], searchWidget: searchWidget, specialization_id: specialization_id });
            }
        }
    }, {
        key: 'selectLocation',
        value: function selectLocation(city) {
            var _this6 = this;

            this.child.selectLocation(city, function () {

                _this6.setState({ searchCities: [] });
                var gtmData = {
                    'Category': 'ConsumerApp', 'Action': 'ArticlePageLocationSelected', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'article-page-location-selected', selectedId: _this6.state.specialization_id || ''
                };
                _gtm2.default.sendEvent({ data: gtmData });

                if (_this6.state.specialization_id) {
                    var criteria = {};
                    criteria.id = _this6.state.specialization_id;
                    criteria.name = '';
                    criteria.type = 'speciality';
                    _this6.props.cloneCommonSelectedCriterias(criteria);
                    _this6.props.history.push('/opd/searchresults');
                }
            });
        }
    }, {
        key: 'handleClose',
        value: function handleClose() {
            this.setState({ hideFooterWidget: true });
        }
    }, {
        key: 'buyMedicineClick',
        value: function buyMedicineClick() {
            var _this7 = this;

            var footerBuyNow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var gtmData = {};
            if (footerBuyNow) {
                gtmData = {
                    'Category': 'ConsumerApp', 'Action': 'BuyMedicineFooterBtnClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'buy-medicine-footer-btn-click', 'articleId': this.state.articleData && this.state.articleData.id ? this.state.articleData.id : ''
                };
            } else {
                gtmData = {
                    'Category': 'ConsumerApp', 'Action': 'BuyMedicineBtnClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'buy-medicine-btn-click', 'articleId': this.state.articleData && this.state.articleData.id ? this.state.articleData.id : ''
                };
            }
            this.setState({ showPopup: true }, function () {
                setTimeout(function () {
                    return _this7.continueClick();
                }, 1000);
            });

            _gtm2.default.sendEvent({ data: gtmData });
        }
    }, {
        key: 'continueClick',
        value: function continueClick() {
            var _this8 = this;

            // let gtmData = {
            //     'Category': 'ConsumerApp', 'Action': 'MedicinePageContinueClick', 'CustomerID': GTM.getUserId() || '', 'leadid': 0, 'event': 'medicine-page-continue-click'
            // }
            // GTM.sendEvent({ data: gtmData })
            if ((typeof navigator === 'undefined' ? 'undefined' : _typeof(navigator)) === 'object') {
                var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                if (/mobile/i.test(navigator.userAgent) && !isSafari) {
                    this.props.iFrameState(this.props.location.pathname, false);
                    sessionStorage.setItem('iFrameId', 1);
                } else {
                    if (this.state.articleData && this.state.articleData.pharmeasy_url) {
                        window.open(this.state.articleData.pharmeasy_url, '_blank');
                    } else {
                        window.open(_config2.default.PHARMEASY_IFRAME_URL, '_blank');
                    }
                }
            }
            setTimeout(function () {
                _this8.setState({
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
        key: 'getUtmTags',
        value: function getUtmTags() {
            var parsed = queryString.parse(this.props.location.search);
            var utm_tags = {
                utm_source: parsed.utm_source || '',
                utm_medium: parsed.utm_medium || '',
                utm_term: parsed.utm_term || '',
                utm_campaign: parsed.utm_campaign || ''
            };

            if (this.props.common_utm_tags && this.props.common_utm_tags.length) {
                utm_tags = this.props.common_utm_tags.filter(function (x) {
                    return x.type == "common_xtra_tags";
                })[0].utm_tags;
            }

            return utm_tags;
        }
    }, {
        key: 'mainPopupData',
        value: function mainPopupData() {
            var _this9 = this;

            var data = _react2.default.createElement(
                'div',
                { className: 'articleImgPop' },
                _react2.default.createElement(
                    'div',
                    { className: 'p-relative gold-med-bnr covidBanner' },
                    _react2.default.createElement('img', { className: 'img-fluid gold-med-cls', src: "/assets" + '/img/vip-pop-cls.svg', onClick: function onClick(event) {
                            var data = {
                                'Category': 'ConsumerApp', 'Action': 'ArticleGoldBannerCrossClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'article-gold-banner-cross-clicked'
                            };
                            _gtm2.default.sendEvent({ data: data });
                            event.stopPropagation();
                            _this9.setState({ showMainPopup: false });
                        } }),
                    _react2.default.createElement(
                        'h4',
                        null,
                        'Protect yourself against'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'COR',
                        _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + '/img/virus.svg' }),
                        'NAVIRUS'
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'subTxtCorona' },
                        '"Stay home and View Quotes Online"'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'covidBtn-cont' },
                        _react2.default.createElement(
                            'a',
                            { target: '_blank', href: 'https://termlife.policybazaar.com/?pb_source=docprime ', type: 'button', className: 'med-popBtn' },
                            _react2.default.createElement(
                                'span',
                                { className: 'upName' },
                                'Covid-19 covered'
                            ),
                            _react2.default.createElement('img', { src: "/assets" + '/img/ins.svg' }),
                            _react2.default.createElement(
                                'span',
                                null,
                                'Term Insurance'
                            )
                        ),
                        _react2.default.createElement(
                            'a',
                            { target: '_blank', href: 'https://health.policybazaar.com/?utm_source=docprime', type: 'button', className: 'med-popBtn' },
                            _react2.default.createElement(
                                'span',
                                { className: 'upName' },
                                'No medical required'
                            ),
                            _react2.default.createElement('img', { src: "/assets" + '/img/helth.svg' }),
                            _react2.default.createElement(
                                'span',
                                null,
                                'Health Insurance'
                            )
                        )
                    )
                )
            );
            return data;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this10 = this;

            var isUserLogin = Object.values(this.props.profiles).length || _storage2.default.checkAuth();
            var commentsExists = this.state.articleData && this.state.articleData.comments.length ? this.state.articleData.comments.length : null;

            var locationName = "";
            if (this.props.selectedLocation && this.props.selectedLocation.formatted_address) {
                locationName = this.props.selectedLocation.formatted_address;
            }

            var showIframe = false;
            if (this.props.iFrameUrls.includes(this.props.location.pathname)) {
                showIframe = true;
            }

            var sessionId = null;
            if ((typeof sessionStorage === 'undefined' ? 'undefined' : _typeof(sessionStorage)) == "object") {
                sessionId = sessionStorage.getItem('iFrameId');
            }

            return _react2.default.createElement(
                'div',
                { className: 'profile-body-wrap', style: showIframe && sessionId ? {} : { paddingBottom: 54 } },
                _react2.default.createElement(_DesktopProfileHeader2.default, null),
                this.state.showMainPopup ? _react2.default.createElement(_mainPopup2.default, { resp: this.mainPopupData() }) : '',
                this.state.articleData && showIframe && sessionId ? _react2.default.createElement('iframe', { src: this.state.articleData.pharmeasy_url ? this.state.articleData.pharmeasy_url : _config2.default.PHARMEASY_IFRAME_URL, className: 'pharmeasy-iframe' }) : _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'section',
                        { className: 'container article-container' },
                        this.state.showPopup ? _react2.default.createElement(_Loader2.default, { iFramePopup: true }) : '',
                        _react2.default.createElement(
                            'div',
                            { className: 'row main-row parent-section-row' },
                            _react2.default.createElement(_LeftBar2.default, null),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-12 col-md-7 center-column' },
                                this.state.articleData ? _react2.default.createElement(
                                    'div',
                                    { className: 'container-fluid article-column' },
                                    _react2.default.createElement(_HelmetTags2.default, { tagsData: {
                                            title: this.state.articleData.seo ? this.state.articleData.seo.title : "",
                                            description: this.state.articleData.seo ? this.state.articleData.seo.description : "",
                                            keywords: this.state.articleData.seo ? this.state.articleData.seo.keywords : "",
                                            canonicalUrl: '' + _config2.default.API_BASE_URL + this.props.match.url,
                                            schema: this.state.articleData.title === 'Blood Pressure | Causes, Treatment, Tests & Vaccines' ? {
                                                "@context": "http://schema.org",
                                                "@type": "MedicalCondition",
                                                "alternateName": "Blood Pressure",
                                                "associatedAnatomy": {
                                                    "@type": "AnatomicalStructure",
                                                    "name": "heart"
                                                },
                                                "cause": [{
                                                    "@type": "MedicalCause",
                                                    "name": "Smoking, Stress,Genetics,Heart arrhythmias,Blood vessel dilation,Heat stroke, Pregnancy,Liver Disease"
                                                }],
                                                "code": {
                                                    "@type": "MedicalCode",
                                                    "code": "401",
                                                    "codingSystem": "ICD-9-CM"
                                                },
                                                "differentialDiagnosis": {
                                                    "@type": "DDxElement",
                                                    "diagnosis": {
                                                        "@type": "MedicalCondition",
                                                        "name": "Low Blood Pressure & High Blood Presure"
                                                    },
                                                    "distinguishingSign": [{
                                                        "@type": "MedicalSymptom",
                                                        "name": "Severe headache,Fatigue,Mental Confusion,Pain in chest, Mental Confusion,Pale, damp, cold skin,Breathing difficulties, Weak Pulses"
                                                    }]
                                                },
                                                "name": "High & Low Blood Pressure",
                                                "possibleTreatment": [{
                                                    "@type": "drug",
                                                    "name": "Consult Doctor"
                                                }],
                                                "riskFactor": [{
                                                    "@type": "MedicalRiskFactor",
                                                    "name": "Age,Gender, Smoking, Total cholesterol"
                                                }],
                                                "secondaryPrevention": [{
                                                    "@type": "LifestyleModification",
                                                    "name": "stopping smoking,weight management,increased physical activity"
                                                }],
                                                "signOrSymptom": [{
                                                    "@type": "MedicalSymptom",
                                                    "name": "Light-headedness or wooziness, Fainting, Nausea, Exhaustion"
                                                }]
                                            } : ''
                                        } }),
                                    this.props.match.path.split('-')[1] === 'mddp' && this.props.offerList && this.props.offerList.filter(function (x) {
                                        return x.slider_location === 'medicine_detail_page';
                                    }).length ? _react2.default.createElement(_bannerCarousel2.default, _extends({}, this.props, { sliderLocation: 'medicine_detail_page' })) : '',
                                    _react2.default.createElement(
                                        'ul',
                                        { className: 'mrb-10 breadcrumb-list', style: { wordBreak: 'break-word' } },
                                        _react2.default.createElement(
                                            'li',
                                            { className: 'breadcrumb-list-item' },
                                            _react2.default.createElement(
                                                'a',
                                                { href: '/', onClick: function onClick(e) {
                                                        return _this10.onHomeClick(e, "/");
                                                    } },
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'fw-500 breadcrumb-title breadcrumb-colored-title' },
                                                    'Home'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'breadcrumb-arrow' },
                                                '>'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            { className: 'breadcrumb-list-item' },
                                            _react2.default.createElement(
                                                'a',
                                                { href: '/' + this.state.articleData.category.url, onClick: function onClick(e) {
                                                        return _this10.onHomeClick(e, '/' + _this10.state.articleData.category.url);
                                                    } },
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'fw-500 breadcrumb-title breadcrumb-colored-title' },
                                                    this.state.articleData.category.name
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'breadcrumb-arrow' },
                                                '>'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            { className: 'breadcrumb-list-item' },
                                            this.props.match.path.split('-')[1] === 'nmdp' ? _react2.default.createElement(
                                                'h2',
                                                { className: 'fw-500 breadcrumb-title' },
                                                this.state.articleData.heading_title
                                            ) : _react2.default.createElement(
                                                'h2',
                                                { className: 'fw-500 breadcrumb-title' },
                                                this.state.articleData.title.split('|')[0]
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'art-sharing-div mrt-20 mrb-20' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'art-sharing-btn mr-3', onClick: function onClick() {
                                                    return _this10.facebookClick();
                                                } },
                                            _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/facebook.svg" })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'art-sharing-btn ml-3 mr-3', onClick: function onClick() {
                                                    return _this10.twitterClick();
                                                } },
                                            _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/twitter.svg" })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'art-sharing-btn ml-3 mr-3', onClick: function onClick() {
                                                    return _this10.linkedinClick();
                                                } },
                                            _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/linkedin.svg" })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'art-sharing-btn ml-3', onClick: function onClick() {
                                                    return _this10.whatsappClick();
                                                } },
                                            _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/whatsapp.svg" })
                                        )
                                    ),
                                    this.state.articleData.header_image ? _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement('img', { style: { width: '100%', paddingBottom: '4px' }, src: this.state.articleData.header_image, alt: this.state.articleData.header_image_alt })
                                    ) : "",
                                    this.state.articleData && this.state.articleData.heading_title ? _react2.default.createElement(
                                        'div',
                                        { className: 'dp-article-heading mrb-20' },
                                        _react2.default.createElement(
                                            'h1',
                                            { className: 'fw-500' },
                                            this.state.articleData.heading_title
                                        )
                                    ) : "",
                                    this.state.articleData && this.state.articleData.author ? _react2.default.createElement(_articleAuthor2.default, {
                                        name: this.state.articleData.author.name,
                                        profileImage: this.state.articleData.author.profile_img,
                                        url: this.state.articleData.author.url,
                                        id: this.state.articleData.author.id,
                                        speciality: this.state.articleData.author.speciality[0].name,
                                        experience: this.state.articleData.author.experience,
                                        publishedDate: this.state.articleData.published_date,
                                        history: this.props.history
                                    }) : '',
                                    this.state.articleData && this.state.articleData.body_doms && this.state.articleData.body_doms.map(function (val, key) {

                                        if (val.type.includes('html')) {
                                            return _react2.default.createElement('div', { key: key, className: 'docprime-article', dangerouslySetInnerHTML: { __html: val.content } });
                                        } else if (val.type.includes('search_widget')) {
                                            return _react2.default.createElement(
                                                'div',
                                                { key: key, className: 'sticky-article-div' },
                                                val.content.lat && val.content.lng && val.content.location_name ? _react2.default.createElement(_CommonSearch2.default, _extends({}, _this10.props, { location: val.content.location_name, latitude: val.content.lat, longitude: val.content.lng })) : val.content.specialization_id ? _react2.default.createElement(
                                                    'div',
                                                    null,
                                                    _react2.default.createElement(_locationElements2.default, _extends({}, _this10.props, { onRef: function onRef(ref) {
                                                            return _this10.child = ref;
                                                        }, getCityListLayout: _this10.getCityListLayout.bind(_this10), resultType: 'search', locationName: locationName, articleSearchPage: true, specialityName: val.content.specialization_name, specialityId: val.content.specialization_id, widgetId: key })),
                                                    _this10.getCityList(key)
                                                ) : _react2.default.createElement(
                                                    'div',
                                                    null,
                                                    _react2.default.createElement(_locationElements2.default, _extends({}, _this10.props, { onRef: function onRef(ref) {
                                                            return _this10.child = ref;
                                                        }, getCityListLayout: _this10.getCityListLayout.bind(_this10), resultType: 'search', locationName: '', widgetId: key, commonSearch: true, articleSearchPage: true })),
                                                    _this10.getCityList(key),
                                                    _react2.default.createElement(_CommonSearch2.default, _extends({}, _this10.props, { commonSearch: true }))
                                                )
                                            );
                                        }
                                    }),
                                    this.state.articleData && this.state.articleData.last_updated_at ? _react2.default.createElement(
                                        'div',
                                        { className: 'last-updated text-right' },
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            'Last updated on : ',
                                            this.state.articleData.last_updated_at
                                        )
                                    ) : '',
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'mrt-20' },
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'article-disclaimer' },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'fw-700' },
                                                'Disclaimer : '
                                            ),
                                            'Docprime doesn\u2019t endorse or take any guarantee of the accuracy or completeness of information provided under this article and these are the views strictly of the writer. Docprime shall not be held responsible for any aspect of healthcare services administered with the information provided on this article.'
                                        )
                                    )
                                ) : ""
                            ),
                            _react2.default.createElement(_RightBar2.default, { colClass: 'col-12 col-lg-5', articleData: this.state.articleData, msgTemplate: 'gold_template_1' })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'row' },
                            this.state.articleLoaded ? this.state.articleData && this.state.articleData.comments && this.state.articleData.comments.length ? _react2.default.createElement(
                                'div',
                                { className: 'col-12 col-md-7 center-column' },
                                _react2.default.createElement(
                                    'h4',
                                    { className: 'comments-main-heading' },
                                    'User Comments (' + this.state.articleData.comments.length + ')'
                                ),
                                this.state.articleData.comments.map(function (comment, key) {
                                    return _react2.default.createElement(_Reply2.default, _extends({ key: comment.id, commentReplyClicked: _this10.commentReplyClicked.bind(_this10), isUserLogin: isUserLogin }, _this10.props, _this10.state, { getArticleData: _this10.getArticleData.bind(_this10), postReply: _this10.postReply.bind(_this10), handleInputComment: _this10.handleInputComment.bind(_this10), commentData: comment, commentsExists: commentsExists, articlePage: true }));
                                })
                            ) : '' : '',
                            this.state.articleLoaded ? _react2.default.createElement(
                                'div',
                                { className: 'col-12 col-md-7 center-column' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'widget mrb-15 mrng-top-12' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'widget-content' },
                                        _react2.default.createElement(_ArticleCommentBox2.default, _extends({}, this.props, this.state, { getArticleData: this.getArticleData.bind(this), commentsExists: commentsExists, parentCommentId: this.state.replyOpenFor, articlePage: true }))
                                    )
                                )
                            ) : ''
                        )
                    ),
                    _react2.default.createElement(_footer2.default, null)
                )
            );
        }
    }]);

    return Article;
}(_react2.default.Component);

exports.default = Article;

/***/ }),

/***/ "./dev/js/components/commons/article/FooterTestSpecializationWidgets.js":
/*!******************************************************************************!*\
  !*** ./dev/js/components/commons/article/FooterTestSpecializationWidgets.js ***!
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

var _gtm = __webpack_require__(/*! ../../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FooterWidgetView = function (_React$Component) {
	_inherits(FooterWidgetView, _React$Component);

	function FooterWidgetView(props) {
		_classCallCheck(this, FooterWidgetView);

		var _this = _possibleConstructorReturn(this, (FooterWidgetView.__proto__ || Object.getPrototypeOf(FooterWidgetView)).call(this, props));

		_this.state = {
			name: '',
			phone_number: '',
			show_form: false,
			leadType: '',
			clickedData: null,
			city_id: null,
			city_name: '',
			search_city: '',
			showCitySearchPopup: false,
			filtered_city_list: []
		};
		return _this;
	}

	_createClass(FooterWidgetView, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var data = {
				'Category': 'ConsumerApp', 'Action': 'FooterWidgetDisplayed', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'footer-widget-displayed', type: this.props.footerWidget && this.props.footerWidget.widget_type ? this.props.footerWidget.widget_type : ''
			};
			_gtm2.default.sendEvent({ data: data });
		}
	}, {
		key: 'selectDoctorSpecialization',
		value: function selectDoctorSpecialization(data) {
			if (!this.state.show_form) {
				this.setState({ show_form: true, leadType: 1, clickedData: data });
				return;
			}
			var criteria = {};
			criteria.id = data[1] || '';
			criteria.name = data[0] || '';
			criteria.type = 'speciality';
			this.props.cloneCommonSelectedCriterias(criteria);

			var doctor_name = '',
			    hospital_name = '',
			    hospital_id = '';
			var state = {
				filterCriteria: _extends({}, this.props.OPD_STATE.filterCriteria, {
					doctor_name: doctor_name, hospital_name: hospital_name, hospital_id: hospital_id
				}),
				nextFilterCriteria: _extends({}, this.props.OPD_STATE.filterCriteria, {
					doctor_name: doctor_name, hospital_name: hospital_name, hospital_id: hospital_id
				})
			};

			var gtmData = {
				'Category': 'ConsumerApp', 'Action': 'FooterSpecializationsSelected', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'footer-specializations-selected', 'selected': criteria.name || '', 'selectedId': criteria.id || '', 'searched': '', 'searchString': '', 'from': 'footerWidget'
			};
			_gtm2.default.sendEvent({ data: gtmData });

			this.props.mergeOPDState(state, true);

			this.props.history.push({
				pathname: '/opd/searchresults',
				state: { search_back: true }
			});
		}
	}, {
		key: 'selectTest',
		value: function selectTest(data) {
			var _this2 = this;

			if (!this.state.show_form) {
				this.setState({ show_form: true, leadType: 2, clickedData: data });
				return;
			}
			var criteria = {};
			criteria.id = data[1] || '';
			criteria.name = data[0] || '';
			criteria.type = 'test';
			criteria.url = '';
			criteria.test_type = '';
			this.props.toggleDiagnosisCriteria('test', criteria, true);
			setTimeout(function () {
				_this2.showLabs();
			}, 100);
		}
	}, {
		key: 'showLabs',
		value: function showLabs() {
			var lab_name = '';
			this.props.mergeLABState({
				filterCriteria: _extends({}, this.props.LAB_STATE.filterCriteria, {
					lab_name: lab_name
				}),
				nextFilterCriteria: _extends({}, this.props.LAB_STATE.filterCriteria, {
					lab_name: lab_name
				}),
				currentSearchedCriterias: this.props.LAB_STATE.selectedCriterias,
				nextSelectedCriterias: this.props.LAB_STATE.selectedCriterias
			}, true);

			var selectedTestIds = this.props.LAB_STATE.selectedCriterias.map(function (test) {
				return test.id;
			});
			var selectedTestsName = this.props.LAB_STATE.selectedCriterias.map(function (test) {
				return test.name;
			});
			var data = {
				'Category': 'ConsumerApp', 'Action': 'FooterTestClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'footer-lab-clicked', 'SelectedTestIds': selectedTestIds.join(',') || '', 'SelectedTestName': selectedTestsName.join(','), 'TestCount': selectedTestIds.length || 0, 'from': 'footerWidget'
			};
			_gtm2.default.sendEvent({ data: data });

			this.props.history.push({
				pathname: '/lab/searchresults',
				state: { search_back: true }
			});
		}
	}, {
		key: 'openSearchMore',
		value: function openSearchMore() {
			if (!this.state.show_form) {
				this.setState({ show_form: true, leadType: 3 });
				return;
			}
			var which = 'opd';
			if (this.props.footerWidget && this.props.footerWidget.widget_type == 'LabTest') {
				which = 'lab';
			}
			this.props.selectSearchType(which);
			this.props.history.push('/search');
		}
	}, {
		key: 'goToPackage',
		value: function goToPackage() {
			var _this3 = this;

			if (!this.state.show_form) {
				this.setState({ show_form: true, leadType: 4 });
				return;
			}
			var data = {
				'Category': 'ConsumerApp', 'Action': 'ShowPackageClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'show-package-clicked', 'from': 'footerWidget'
			};
			_gtm2.default.sendEvent({ data: data });
			this.props.setPackageId(12227, true);
			setTimeout(function () {
				_this3.props.history.push('/searchpackages');
			}, 100);
			// this.props.history.push('/thyrocare-aarogyam-packages')
		}
	}, {
		key: 'closeLeadForm',
		value: function closeLeadForm(isProceed) {
			var _this4 = this;

			var proceed = false;
			var data = {};
			if (isProceed) {
				if (this.state.name == '') {
					_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please enter name" });
					return;
				}
				if (this.state.phone_number == '') {
					_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please enter phone number" });
					return;
				}
				if (!this.state.city_id) {
					return;
				}
				if (this.state.city_name == '') {
					_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please select city" });
					return;
				}
				if (this.state.phone_number.length < 10 || this.state.phone_number.length > 10) {
					_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please enter valid number" });
					return;
				}
				if (this.state.name != '' && this.state.phone_number != '' && this.state.city_id && this.state.city_name != '') {
					data.name = this.state.name;
					data.phone_number = this.state.phone_number;
					data.city_id = this.state.city_id;
					data.city_name = this.state.city_name;
					if (this.state.leadType == 1) {
						data.lead_source = 'med_doc';
					} else if (this.state.leadType == 2) {
						data.lead_source = 'med_test';
					} else if (this.state.leadType == 3) {
						data.lead_source = 'med_searchmore';
					} else if (this.state.leadType == 4) {
						data.lead_source = 'med_package';
					}

					this.props.submitMedicineLead(data, function (resp) {
						if (resp) {
							if (_this4.state.leadType == 1) {
								_this4.selectDoctorSpecialization(_this4.state.clickedData);
							} else if (_this4.state.leadType == 2) {
								_this4.selectTest(_this4.state.clickedData);
							} else if (_this4.state.leadType == 3) {
								_this4.openSearchMore();
							} else if (_this4.state.leadType == 4) {
								_this4.goToPackage();
							}
						}
					});
				}
			} else {
				var _data = {
					'Category': 'ConsumerApp', 'Action': 'SkipMedLeadClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'skip-med-lead-click', 'from': 'footerWidget'
				};
				_gtm2.default.sendEvent({ data: _data });
				if (this.state.leadType == 1) {
					this.selectDoctorSpecialization(this.state.clickedData);
				} else if (this.state.leadType == 2) {
					this.selectTest(this.state.clickedData);
				} else if (this.state.leadType == 3) {
					this.openSearchMore();
				} else if (this.state.leadType == 4) {
					this.goToPackage();
				}
			}
		}
	}, {
		key: 'handleChange',
		value: function handleChange(event) {
			this.setState(_defineProperty({}, event.target.getAttribute('data-param'), event.target.value));
		}
	}, {
		key: 'handleInut',
		value: function handleInut(type, event) {
			try {
				var _setState2;

				var search_string = event.target.value.toLowerCase();
				var filtered_city_list = [];
				this.props.user_cities.map(function (city) {
					var city_name = city.name.toLowerCase();
					if (city_name.includes(search_string)) {
						var index = city_name.indexOf(search_string);
						filtered_city_list.push({ id: city.id, name: city.name, rank: index });
					}
				});
				filtered_city_list = filtered_city_list.sort(function (x, y) {
					return x.rank - y.rank;
				});
				this.setState((_setState2 = {}, _defineProperty(_setState2, type, event.target.value), _defineProperty(_setState2, 'filtered_city_list', filtered_city_list), _setState2));
			} catch (e) {}
		}
	}, {
		key: 'onFocusIn',
		value: function onFocusIn() {
			this.setState({ search_city: '', showCitySearchPopup: true });
		}
	}, {
		key: 'onFocusOut',
		value: function onFocusOut() {
			var _this5 = this;

			setTimeout(function () {
				_this5.setState({ search_city: _this5.state.selectedDoctor, showCitySearchPopup: false });
			}, 500);
		}
	}, {
		key: 'clickDoctorList',
		value: function clickDoctorList(name, id) {
			this.setState({ 'city_name': name, 'city_id': id, filtered_city_list: [], search_city: name, showCitySearchPopup: false });
		}
	}, {
		key: 'render',
		value: function render() {
			var _this6 = this;

			var footerWidget = this.props.footerWidget;

			var filtered_doctor = this.state.filtered_city_list;
			return _react2.default.createElement(
				_react2.default.Fragment,
				null,
				footerWidget && footerWidget.widget_type ? _react2.default.createElement(
					'div',
					{ className: 'doc-wdgt-med-container' },
					footerWidget.widget_type == 'LabTest' ? _react2.default.createElement(
						'div',
						{ className: 'doc-wdgt-book-doc' },
						_react2.default.createElement('img', { className: 'docClosBtn', src: 'https://cdn.docprime.com/cp/assets/img/icons/close.png', onClick: function onClick() {
								return _this6.props.handleClose();
							} }),
						_react2.default.createElement(
							'h3',
							{ className: 'doc-wdgt-hdng' },
							footerWidget.title + ' @',
							_react2.default.createElement(
								'span',
								null,
								footerWidget.discount
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'doc-wdgt-chips' },
							Object.entries(footerWidget.test).map(function (data, key) {
								return _react2.default.createElement(
									'span',
									{ key: key, onClick: _this6.selectTest.bind(_this6, data) },
									data[0]
								);
							}),
							_react2.default.createElement(
								'span',
								{ className: 'src-spn-chps', onClick: this.openSearchMore.bind(this) },
								_react2.default.createElement('img', { className: 'srh-img-chps', src: "/assets" + '/img/shape-srch1.svg' }),
								'Search more'
							)
						)
					) : '',
					footerWidget.widget_type == 'DoctorAppointment' ? _react2.default.createElement(
						'div',
						{ className: 'doc-wdgt-book-doc' },
						_react2.default.createElement('img', { className: 'docClosBtn', src: 'https://cdn.docprime.com/cp/assets/img/icons/close.png', onClick: function onClick() {
								return _this6.props.handleClose();
							} }),
						_react2.default.createElement(
							'h3',
							{ className: 'doc-wdgt-hdng' },
							footerWidget.title + ' @',
							_react2.default.createElement(
								'span',
								null,
								footerWidget.discount
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'doc-wdgt-chips' },
							Object.entries(footerWidget.specializations).map(function (data, key) {
								return _react2.default.createElement(
									'span',
									{ key: key, onClick: _this6.selectDoctorSpecialization.bind(_this6, data) },
									data[0]
								);
							}),
							_react2.default.createElement(
								'span',
								{ className: 'src-spn-chps', onClick: this.openSearchMore.bind(this) },
								_react2.default.createElement('img', { className: 'srh-img-chps', src: "/assets" + '/img/shape-srch1.svg' }),
								'Search more'
							)
						)
					) : '',
					footerWidget.widget_type == 'HealthPackage' ? _react2.default.createElement(
						'div',
						{ className: 'doc-wdgt-bodychk-cont' },
						_react2.default.createElement('img', { className: 'docClosBtn', src: 'https://cdn.docprime.com/cp/assets/img/icons/close.png', onClick: function onClick() {
								return _this6.props.handleClose();
							} }),
						_react2.default.createElement(
							'div',
							{ className: 'doc-bdy-chk-hdng' },
							_react2.default.createElement(
								'h4',
								null,
								footerWidget.title_first
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'row cursor-pntr no-gutters', onClick: this.goToPackage.bind(this) },
							_react2.default.createElement(
								'div',
								{ className: 'col-8' },
								_react2.default.createElement(
									'div',
									{ className: 'doc-wdgt-prck' },
									_react2.default.createElement(
										'span',
										{ className: 'doc-wd-nw' },
										footerWidget.price
									)
								),
								_react2.default.createElement(
									'p',
									{ className: 'dc-wd-tst-nm' },
									footerWidget.title_last
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'col-4 d-flex align-item-center justyfy-center' },
								_react2.default.createElement(
									'button',
									{ className: 'dc-wd-bdy-btn' },
									'Know More'
								)
							)
						)
					) : ''
				) : '',
				this.state.show_form ? _react2.default.createElement(
					'div',
					{ className: 'search-el-popup-overlay cancel-overlay-zindex' },
					_react2.default.createElement(
						'div',
						{ className: 'search-el-popup ipd-pop-width' },
						_react2.default.createElement(
							'div',
							{ className: 'widget p-12' },
							_react2.default.createElement(
								'div',
								{ className: 'p-relative' },
								_react2.default.createElement(
									'p',
									{ className: 'ipd-needHelp' },
									'Talk to medical expert and get help with your booking'
								),
								_react2.default.createElement(
									'div',
									{ className: 'ipd-pop-scrl' },
									_react2.default.createElement(
										'div',
										{ className: 'ipd-inp-section' },
										_react2.default.createElement(
											'div',
											{ className: 'nm-lst-inputcnt' },
											_react2.default.createElement('input', _defineProperty({ type: 'text', value: '', name: 'name', placeholder: '*Name', autoComplete: null, onChange: this.handleChange.bind(this), 'data-param': 'name' }, 'value', this.state.name))
										),
										_react2.default.createElement('input', _defineProperty({ type: 'number', value: '', name: 'phone_number', autoComplete: 'none', placeholder: '*Mobile Number', onChange: this.handleChange.bind(this), 'data-param': 'phone_number' }, 'value', this.state.phone_number)),
										_react2.default.createElement(
											'div',
											{ className: 'ipd-slects-doc' },
											_react2.default.createElement('input', { type: 'text', autoComplete: 'none', placeholder: 'Search City', onChange: this.handleInut.bind(this, 'search_city'), onFocus: this.onFocusIn.bind(this), onBlur: this.onFocusOut.bind(this), value: this.state.search_city }),
											this.state.showCitySearchPopup ? _react2.default.createElement(
												'div',
												{ className: 'doc-srch-fltr', onClick: function onClick(e) {
														return e.preventDefault();
													} },
												this.state.filtered_city_list && this.state.filtered_city_list.length ? this.state.filtered_city_list.map(function (data, key) {
													return _react2.default.createElement(
														'p',
														{ className: 'cursor-pntr', key: key, id: data.id, onClick: function onClick(e) {
																e.preventDefault();
																e.stopPropagation();
																_this6.clickDoctorList(data.name, data.id);
															} },
														data.name
													);
												}) : this.state.search_city != '' ? _react2.default.createElement(
													'p',
													null,
													'No result found'
												) : ''
											) : ''
										),
										_react2.default.createElement(
											'div',
											{ className: 'skip-btn-sgn' },
											_react2.default.createElement(
												'button',
												{ className: 'ipd-inp-sbmt', onClick: this.closeLeadForm.bind(this, true) },
												'Submit'
											),
											_react2.default.createElement(
												'p',
												{ onClick: this.closeLeadForm.bind(this, false) },
												'Skip'
											)
										)
									)
								)
							)
						)
					)
				) : ""
			);
		}
	}]);

	return FooterWidgetView;
}(_react2.default.Component);

exports.default = FooterWidgetView;

/***/ }),

/***/ "./dev/js/components/commons/article/index.js":
/*!****************************************************!*\
  !*** ./dev/js/components/commons/article/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Article = __webpack_require__(/*! ./Article */ "./dev/js/components/commons/article/Article.js");

var _Article2 = _interopRequireDefault(_Article);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Article2.default;

/***/ }),

/***/ "./dev/js/components/commons/articleAuthor/articleAuthor.js":
/*!******************************************************************!*\
  !*** ./dev/js/components/commons/articleAuthor/articleAuthor.js ***!
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

var _initialsPicture = __webpack_require__(/*! ../initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArticleAuthor = function (_React$Component) {
	_inherits(ArticleAuthor, _React$Component);

	function ArticleAuthor(props) {
		_classCallCheck(this, ArticleAuthor);

		var _this = _possibleConstructorReturn(this, (ArticleAuthor.__proto__ || Object.getPrototypeOf(ArticleAuthor)).call(this, props));

		_this.state = {};
		return _this;
	}

	_createClass(ArticleAuthor, [{
		key: 'authorClick',
		value: function authorClick(e) {
			e.preventDefault();
			if (this.props.url) {
				this.props.history.push(this.props.url);
			} else {
				this.props.history.push('/opd/doctor/' + this.props.id);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				{ className: 'article-author-div mrb-20' },
				_react2.default.createElement(
					_initialsPicture2.default,
					{ className: 'initialsPicture-ds initialsPicture-author', name: this.props.name, has_image: !!this.props.profileImage },
					_react2.default.createElement('img', { className: 'fltr-usr-image img-round', style: { width: 60, height: 60, marginRight: 8, fontSize: 10 }, src: this.props.profileImage, alt: 'Dr. ' + this.props.name, title: 'Dr. ' + this.props.name })
				),
				_react2.default.createElement(
					'div',
					{ className: 'author-dtls' },
					_react2.default.createElement(
						'div',
						{ className: 'author-name-div' },
						_react2.default.createElement(
							'span',
							{ style: { margin: '0 6px 0 0' } },
							'Written By :'
						),
						this.props.url ? _react2.default.createElement(
							'a',
							{ href: '/' + this.props.url, onClick: function onClick(e) {
									return _this2.authorClick(e);
								} },
							_react2.default.createElement(
								'h3',
								{ className: 'fw-500 text-primary' },
								'Dr. ' + this.props.name
							)
						) : _react2.default.createElement(
							'a',
							{ href: '/opd/doctor/' + this.props.id, onClick: function onClick(e) {
									return _this2.authorClick(e);
								} },
							_react2.default.createElement(
								'h3',
								{ className: 'fw-500 text-primary' },
								'Dr. ' + this.props.name
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'author-exp-div' },
						_react2.default.createElement(
							'span',
							null,
							this.props.speciality,
							' | ',
							this.props.experience,
							' years of experience'
						)
					),
					this.props.publishedDate ? _react2.default.createElement(
						'div',
						{ className: 'article-date' },
						_react2.default.createElement(
							'span',
							null,
							'Published Date : ',
							this.props.publishedDate
						)
					) : ''
				)
			);
		}
	}]);

	return ArticleAuthor;
}(_react2.default.Component);

exports.default = ArticleAuthor;

/***/ }),

/***/ "./dev/js/components/commons/mainPopup.js":
/*!************************************************!*\
  !*** ./dev/js/components/commons/mainPopup.js ***!
  \************************************************/
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

    return _react2.default.createElement(
        "div",
        { className: "mainPopupOverlay" },
        _react2.default.createElement(
            "div",
            { className: "popUpMainContainer" },
            props.resp
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

/***/ "./dev/js/containers/commons/article.js":
/*!**********************************************!*\
  !*** ./dev/js/containers/commons/article.js ***!
  \**********************************************/
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

var _article = __webpack_require__(/*! ../../components/commons/article */ "./dev/js/components/commons/article/index.js");

var _article2 = _interopRequireDefault(_article);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Article = function (_React$Component) {
    _inherits(Article, _React$Component);

    function Article(props) {
        _classCallCheck(this, Article);

        return _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).call(this, props));
    }

    _createClass(Article, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.citiesData();
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(_article2.default, this.props);
        }
    }], [{
        key: 'loadData',
        value: function loadData(store, match) {
            var articleId = match.url;
            if (articleId) {
                return new Promise(function (resolve, reject) {
                    articleId = articleId.toLowerCase().substring(1, articleId.length);
                    store.dispatch((0, _index.fetchArticle)(articleId, false, function (err, data) {
                        if (!err) {
                            // getSpecialityFooterData((footerData) => {
                            //     resolve({ footerData: (footerData || null),  })
                            // })()
                            resolve({ articleData: data });
                        } else {
                            resolve({ status: 404 });
                        }
                    }));
                });
            } else {
                return Promise.resolve(null);
            }
        }
    }, {
        key: 'buildStateFromRedis',
        value: function buildStateFromRedis(resp, store) {
            return new Promise(function (resolve, reject) {
                store.dispatch((0, _index.buildArticleStoreFromRedis)(resp, function (resp) {
                    resolve();
                }));
            }).catch(function (e) {
                reject(e);
            });
        }
    }]);

    return Article;
}(_react2.default.Component);

Article.contextTypes = {
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
        defaultProfile = _state$USER.defaultProfile,
        offerList = _state$USER.offerList,
        articleData = _state$USER.articleData,
        user_cities = _state$USER.user_cities,
        iFrameUrls = _state$USER.iFrameUrls,
        common_utm_tags = _state$USER.common_utm_tags;
    var selectedLocation = state.SEARCH_CRITERIA_OPD.selectedLocation;


    var OPD_STATE = function () {
        var _state$SEARCH_CRITERI = state.SEARCH_CRITERIA_OPD,
            selectedLocation = _state$SEARCH_CRITERI.selectedLocation,
            filterCriteria = _state$SEARCH_CRITERI.filterCriteria;


        return {
            selectedLocation: selectedLocation,
            filterCriteria: filterCriteria
        };
    }();

    var LAB_STATE = function () {
        var _state$SEARCH_CRITERI2 = state.SEARCH_CRITERIA_LABS,
            selectedLocation = _state$SEARCH_CRITERI2.selectedLocation,
            filterCriteria = _state$SEARCH_CRITERI2.filterCriteria,
            selectedCriterias = _state$SEARCH_CRITERI2.selectedCriterias;


        return {
            selectedLocation: selectedLocation,
            filterCriteria: filterCriteria,
            selectedCriterias: selectedCriterias
        };
    }();

    var static_footer_data = state.DOCTOR_SEARCH.static_footer_data;


    return {
        initialServerData: initialServerData,
        profiles: profiles, defaultProfile: defaultProfile, offerList: offerList, selectedLocation: selectedLocation, articleData: articleData, OPD_STATE: OPD_STATE, LAB_STATE: LAB_STATE, user_cities: user_cities, iFrameUrls: iFrameUrls, common_utm_tags: common_utm_tags, static_footer_data: static_footer_data
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        fetchArticle: function fetchArticle(id, preview, cb) {
            return dispatch((0, _index.fetchArticle)(id, preview, cb));
        },
        getSpecialityFooterData: function getSpecialityFooterData(cb) {
            return dispatch((0, _index.getSpecialityFooterData)(cb));
        },
        postComment: function postComment(comment, cb) {
            return dispatch((0, _index.postComment)(comment, cb));
        },
        getOfferList: function getOfferList(lat, long) {
            return dispatch((0, _index.getOfferList)(lat, long));
        },
        toggleOPDCriteria: function toggleOPDCriteria(type, criteria, forceAdd, filter) {
            return dispatch((0, _index.toggleOPDCriteria)(type, criteria, forceAdd, filter));
        },
        toggleDiagnosisCriteria: function toggleDiagnosisCriteria(type, criteria, forceAdd, filter) {
            return dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria, forceAdd, filter));
        },
        cloneCommonSelectedCriterias: function cloneCommonSelectedCriterias(selectedCriterias) {
            return dispatch((0, _index.cloneCommonSelectedCriterias)(selectedCriterias));
        },
        selectSearchType: function selectSearchType(type) {
            return dispatch((0, _index.selectSearchType)(type));
        },
        mergeLABState: function mergeLABState(state, fetchNewResults) {
            return dispatch((0, _index.mergeLABState)(state, fetchNewResults));
        },
        mergeOPDState: function mergeOPDState(state, fetchNewResults) {
            return dispatch((0, _index.mergeOPDState)(state, fetchNewResults));
        },
        setPackageId: function setPackageId(package_id, isHomePage) {
            return dispatch((0, _index.setPackageId)(package_id, isHomePage));
        },
        submitMedicineLead: function submitMedicineLead(data, callback) {
            return dispatch((0, _index.submitMedicineLead)(data, callback));
        },
        citiesData: function citiesData() {
            return dispatch((0, _index.citiesData)());
        },
        iFrameState: function iFrameState(url, emptyUrls) {
            return dispatch((0, _index.iFrameState)(url, emptyUrls));
        },
        NonIpdBookingLead: function NonIpdBookingLead(data, cb) {
            return dispatch((0, _index.NonIpdBookingLead)(data, cb));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Article);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9hcnRpY2xlL0FydGljbGUuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9hcnRpY2xlL0Zvb3RlclRlc3RTcGVjaWFsaXphdGlvbldpZGdldHMuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9hcnRpY2xlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvYXJ0aWNsZUF1dGhvci9hcnRpY2xlQXV0aG9yLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvbWFpblBvcHVwLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2RpYWdub3Npcy9ib29raW5nU3VtbWFyeS9Cb29raW5nQ29uZmlybWF0aW9uUG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvY29tbW9ucy9hcnRpY2xlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wYXRoLWJyb3dzZXJpZnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9lcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJMb2FkZXIiLCJwcm9wcyIsImNsYXNzVHlwZSIsImlGcmFtZVBvcHVwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJBcnRpY2xlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInNldFN0YXRlIiwicGhvbmVfbnVtYmVyIiwidGFyZ2V0IiwidmFsdWUiLCJuYXZpZ2F0ZVRvR29sZCIsImRhdGEiLCJHVE0iLCJnZXRVc2VySWQiLCJzZW5kRXZlbnQiLCJoaXN0b3J5IiwicHVzaCIsImZvb3RlckRhdGEiLCJhcnRpY2xlRGF0YSIsImFydGljbGVMb2FkZWQiLCJpbml0aWFsU2VydmVyRGF0YSIsImFydGljbGVJZCIsIm1hdGNoIiwidXJsIiwidG9Mb3dlckNhc2UiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJzdGF0ZSIsInJlcGx5T3BlbkZvciIsImNvbW1lbnQiLCJzZWFyY2hDaXRpZXMiLCJzZWFyY2hXaWRnZXQiLCJzcGVjaWFsaXphdGlvbl9pZCIsImhpZGVGb290ZXJXaWRnZXQiLCJzaG93UG9wdXAiLCJtZWRCdG5Ub3AiLCJzaG93UGhhcm1hY3lBdENsaWVudCIsInNob3dQaGFybWFjeUZvb3RlciIsInNob3dNYWluUG9wdXAiLCJpc01lZGljaW5lUGFnZSIsImluY2x1ZGVzIiwiaW5WYWxpZFBobm8iLCJnZXRBcnRpY2xlRGF0YSIsIndpbmRvdyIsInNjcm9sbFRvIiwicGF0aCIsInNwbGl0Iiwic2VsZWN0ZWRMb2NhdGlvbiIsImxhdCIsImxvbmciLCJnZW9tZXRyeSIsImxvY2F0aW9uIiwibG5nIiwiZ2V0T2ZmZXJMaXN0Iiwic2V0VGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxIYW5kbGVyIiwic2Vzc2lvbklkIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiaUZyYW1lU3RhdGUiLCJkb2N1bWVudCIsImVsZW0iLCJnZXRFbGVtZW50QnlJZCIsImVsZW1Db250YWluZXIiLCJzY3JvbGxZIiwib2Zmc2V0SGVpZ2h0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJmZXRjaEFydGljbGUiLCJzZWFyY2giLCJlcnIiLCJldmVudCIsImxpbmsiLCJwcmV2ZW50RGVmYXVsdCIsIm9wZW4iLCJVUkwiLCJ0aXRsZSIsImlkIiwiU25hY2tCYXIiLCJzaG93IiwicG9zIiwidGV4dCIsInBvc3REYXRhIiwiYXJ0aWNsZSIsIm5hbWUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJwcm9maWxlcyIsImRlZmF1bHRQcm9maWxlIiwiZW1haWwiLCJwYXJlbnQiLCJwb3N0Q29tbWVudCIsImVycm9yIiwia2V5IiwibWFwIiwicmVzdWx0IiwiaSIsInNlbGVjdExvY2F0aW9uIiwiYmluZCIsImRlc2NyaXB0aW9uIiwic2VhcmNoUmVzdWx0cyIsInNlYXJjaFBhcmFtcyIsInNwZWNpYWxpdHlJZCIsIndpZGdldElkIiwiY2l0eSIsImNoaWxkIiwiZ3RtRGF0YSIsInNlbGVjdGVkSWQiLCJjcml0ZXJpYSIsInR5cGUiLCJjbG9uZUNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzIiwiZm9vdGVyQnV5Tm93IiwiY29udGludWVDbGljayIsIm5hdmlnYXRvciIsImlzU2FmYXJpIiwidGVzdCIsInVzZXJBZ2VudCIsInBhdGhuYW1lIiwic2V0SXRlbSIsInBoYXJtZWFzeV91cmwiLCJDT05GSUciLCJQSEFSTUVBU1lfSUZSQU1FX1VSTCIsInBhcnNlZCIsInBhcnNlIiwidXRtX3RhZ3MiLCJ1dG1fc291cmNlIiwidXRtX21lZGl1bSIsInV0bV90ZXJtIiwidXRtX2NhbXBhaWduIiwiY29tbW9uX3V0bV90YWdzIiwiZmlsdGVyIiwieCIsIkFTU0VUU19CQVNFX1VSTCIsInN0b3BQcm9wYWdhdGlvbiIsImlzVXNlckxvZ2luIiwiU1RPUkFHRSIsImNoZWNrQXV0aCIsImNvbW1lbnRzRXhpc3RzIiwiY29tbWVudHMiLCJsb2NhdGlvbk5hbWUiLCJmb3JtYXR0ZWRfYWRkcmVzcyIsInNob3dJZnJhbWUiLCJpRnJhbWVVcmxzIiwicGFkZGluZ0JvdHRvbSIsIm1haW5Qb3B1cERhdGEiLCJzZW8iLCJrZXl3b3JkcyIsImNhbm9uaWNhbFVybCIsIkFQSV9CQVNFX1VSTCIsInNjaGVtYSIsIm9mZmVyTGlzdCIsInNsaWRlcl9sb2NhdGlvbiIsIndvcmRCcmVhayIsIm9uSG9tZUNsaWNrIiwiY2F0ZWdvcnkiLCJoZWFkaW5nX3RpdGxlIiwiZmFjZWJvb2tDbGljayIsInR3aXR0ZXJDbGljayIsImxpbmtlZGluQ2xpY2siLCJ3aGF0c2FwcENsaWNrIiwiaGVhZGVyX2ltYWdlIiwid2lkdGgiLCJoZWFkZXJfaW1hZ2VfYWx0IiwiYXV0aG9yIiwicHJvZmlsZV9pbWciLCJzcGVjaWFsaXR5IiwiZXhwZXJpZW5jZSIsInB1Ymxpc2hlZF9kYXRlIiwiYm9keV9kb21zIiwidmFsIiwiX19odG1sIiwiY29udGVudCIsImxvY2F0aW9uX25hbWUiLCJyZWYiLCJnZXRDaXR5TGlzdExheW91dCIsInNwZWNpYWxpemF0aW9uX25hbWUiLCJnZXRDaXR5TGlzdCIsImxhc3RfdXBkYXRlZF9hdCIsImNvbW1lbnRSZXBseUNsaWNrZWQiLCJwb3N0UmVwbHkiLCJoYW5kbGVJbnB1dENvbW1lbnQiLCJGb290ZXJXaWRnZXRWaWV3Iiwic2hvd19mb3JtIiwibGVhZFR5cGUiLCJjbGlja2VkRGF0YSIsImNpdHlfaWQiLCJjaXR5X25hbWUiLCJzZWFyY2hfY2l0eSIsInNob3dDaXR5U2VhcmNoUG9wdXAiLCJmaWx0ZXJlZF9jaXR5X2xpc3QiLCJmb290ZXJXaWRnZXQiLCJ3aWRnZXRfdHlwZSIsImRvY3Rvcl9uYW1lIiwiaG9zcGl0YWxfbmFtZSIsImhvc3BpdGFsX2lkIiwiZmlsdGVyQ3JpdGVyaWEiLCJPUERfU1RBVEUiLCJuZXh0RmlsdGVyQ3JpdGVyaWEiLCJtZXJnZU9QRFN0YXRlIiwic2VhcmNoX2JhY2siLCJ0ZXN0X3R5cGUiLCJ0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSIsInNob3dMYWJzIiwibGFiX25hbWUiLCJtZXJnZUxBQlN0YXRlIiwiTEFCX1NUQVRFIiwiY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzIiwic2VsZWN0ZWRDcml0ZXJpYXMiLCJuZXh0U2VsZWN0ZWRDcml0ZXJpYXMiLCJzZWxlY3RlZFRlc3RJZHMiLCJzZWxlY3RlZFRlc3RzTmFtZSIsImpvaW4iLCJ3aGljaCIsInNlbGVjdFNlYXJjaFR5cGUiLCJzZXRQYWNrYWdlSWQiLCJpc1Byb2NlZWQiLCJwcm9jZWVkIiwibGVhZF9zb3VyY2UiLCJzdWJtaXRNZWRpY2luZUxlYWQiLCJyZXNwIiwic2VsZWN0RG9jdG9yU3BlY2lhbGl6YXRpb24iLCJzZWxlY3RUZXN0Iiwib3BlblNlYXJjaE1vcmUiLCJnb1RvUGFja2FnZSIsImdldEF0dHJpYnV0ZSIsInNlYXJjaF9zdHJpbmciLCJ1c2VyX2NpdGllcyIsImluZGV4IiwiaW5kZXhPZiIsInJhbmsiLCJzb3J0IiwieSIsInNlbGVjdGVkRG9jdG9yIiwiZmlsdGVyZWRfZG9jdG9yIiwiaGFuZGxlQ2xvc2UiLCJkaXNjb3VudCIsImVudHJpZXMiLCJzcGVjaWFsaXphdGlvbnMiLCJ0aXRsZV9maXJzdCIsInByaWNlIiwidGl0bGVfbGFzdCIsImhhbmRsZUludXQiLCJvbkZvY3VzSW4iLCJvbkZvY3VzT3V0IiwiY2xpY2tEb2N0b3JMaXN0IiwiY2xvc2VMZWFkRm9ybSIsIkFydGljbGVWaWV3IiwiQXJ0aWNsZUF1dGhvciIsInByb2ZpbGVJbWFnZSIsImhlaWdodCIsIm1hcmdpblJpZ2h0IiwiZm9udFNpemUiLCJtYXJnaW4iLCJhdXRob3JDbGljayIsInB1Ymxpc2hlZERhdGUiLCJCb29raW5nQ29uZmlybWF0aW9uUG9wdXAiLCJpc19nb2xkIiwicHJpY2VDb25maXJtYXRpb25Qb3B1cCIsImNpdGllc0RhdGEiLCJzdG9yZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZGlzcGF0Y2giLCJzdGF0dXMiLCJjYXRjaCIsImNvbnRleHRUeXBlcyIsInJvdXRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsInBhc3NlZFByb3BzIiwic3RhdGljQ29udGV4dCIsIlVTRVIiLCJTRUFSQ0hfQ1JJVEVSSUFfT1BEIiwiU0VBUkNIX0NSSVRFUklBX0xBQlMiLCJzdGF0aWNfZm9vdGVyX2RhdGEiLCJET0NUT1JfU0VBUkNIIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwicHJldmlldyIsImNiIiwiZ2V0U3BlY2lhbGl0eUZvb3RlckRhdGEiLCJ0b2dnbGVPUERDcml0ZXJpYSIsImZvcmNlQWRkIiwiZmV0Y2hOZXdSZXN1bHRzIiwicGFja2FnZV9pZCIsImlzSG9tZVBhZ2UiLCJjYWxsYmFjayIsImVtcHR5VXJscyIsIk5vbklwZEJvb2tpbmdMZWFkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU1BLE07OztBQUNGLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsK0dBQ1RBLEtBRFM7QUFFbEI7Ozs7aUNBRVE7O0FBRUwsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVcsS0FBS0EsS0FBTCxDQUFXQyxTQUFYLElBQXdCLGdCQUF4QztBQUNJLHVEQUFLLFdBQVUsV0FBZixHQURKO0FBR1EscUJBQUtELEtBQUwsQ0FBV0UsV0FBWCxHQUNJO0FBQUE7QUFBQSxzQkFBRyxXQUFVLGVBQWI7QUFBQTtBQUFBLGlCQURKLEdBQytFO0FBSnZGLGFBREo7QUFTSDs7OztFQWhCZ0JDLGdCQUFNQyxTOztrQkFtQlpMLE07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCZjs7Ozs7O2tCQUVlQSxnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmY7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBLElBQU1NLGNBQWNDLG1CQUFPQSxDQUFDLDBEQUFSLENBQXBCO0FBQ0E7O0lBRU1DLE87OztBQUNGLHFCQUFZUCxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsc0hBQ1RBLEtBRFM7O0FBQUEsY0ErU25CUSxZQS9TbUIsR0ErU0osVUFBQ0MsQ0FBRCxFQUFPO0FBQ2xCLGtCQUFLQyxRQUFMLENBQWMsRUFBQ0MsY0FBYUYsRUFBRUcsTUFBRixDQUFTQyxLQUF2QixFQUFkO0FB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyQztBQUNGO0FBQ1Y7QUFDRjtBQUNNO0FBQ0Y7QUFDSjtBQUNGO0FBQ0k7QUFDRjtBQUNjO0FBQ0Y7QUFDVjtBQUNGO0FBQ2M7QUFDRjtBQUNKO0FBQ0Y7QUFDSSIsImZpbGUiOiI2MS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBMb2FkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NUeXBlIHx8IFwibG9hZGVyQ2lyY3VsYXJcIn0gPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHAtbG9hZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlGcmFtZVBvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMTBcIj5SZWRpcmVjdGluZyB5b3UgdG8gUGhhcm1lYXN5IHdlYnNpdGUuLi48L3A+IDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlclxuIiwiaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9MZWZ0QmFyJ1xuaW1wb3J0IFJpZ2h0QmFyIGZyb20gJy4uLy4uL2NvbW1vbnMvUmlnaHRCYXInXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi8uLi9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi8uLi9jb25maWcnXG5pbXBvcnQgSGVsbWV0VGFncyBmcm9tICcuLi8uLi9jb21tb25zL0hlbG1ldFRhZ3MnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0hvbWUvZm9vdGVyJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bSdcbmltcG9ydCBJbml0aWFsc1BpY3R1cmUgZnJvbSAnLi4vaW5pdGlhbHNQaWN0dXJlJztcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZSc7XG5pbXBvcnQgQ29tbWVudEJveCBmcm9tICcuL0FydGljbGVDb21tZW50Qm94LmpzJ1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5pbXBvcnQgUmVwbHkgZnJvbSAnLi9SZXBseS5qcydcbmltcG9ydCBCYW5uZXJDYXJvdXNlbCBmcm9tICcuLi9Ib21lL2Jhbm5lckNhcm91c2VsJztcbmltcG9ydCBBcnRpY2xlQXV0aG9yIGZyb20gJy4uL2FydGljbGVBdXRob3IvYXJ0aWNsZUF1dGhvcic7XG5pbXBvcnQgTG9jYXRpb25FbGVtZW50cyBmcm9tICcuLi8uLi8uLi9jb250YWluZXJzL2NvbW1vbnMvbG9jYXRpb25FbGVtZW50cydcbmltcG9ydCBDb21tb25TZWFyY2ggZnJvbSAnLi4vLi4vLi4vY29udGFpbmVycy9jb21tb25zL0NvbW1vblNlYXJjaC5qcydcbmltcG9ydCBGaXhlZE1vYmlsZUZvb3RlciBmcm9tICcuLi9Ib21lL0ZpeGVkTW9iaWxlRm9vdGVyJ1xuaW1wb3J0IEZvb3RlclRlc3RTcGVjaWFsaXphdGlvbldpZGdldHMgZnJvbSAnLi9Gb290ZXJUZXN0U3BlY2lhbGl6YXRpb25XaWRnZXRzLmpzJ1xuaW1wb3J0IEJvb2tpbmdDb25maXJtYXRpb25Qb3B1cCBmcm9tICcuLi8uLi9kaWFnbm9zaXMvYm9va2luZ1N1bW1hcnkvQm9va2luZ0NvbmZpcm1hdGlvblBvcHVwJztcbmltcG9ydCBNYWluUG9wdXAgZnJvbSAnLi4vbWFpblBvcHVwLmpzJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXInO1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcbi8vIGltcG9ydCBSZWxhdGVkQXJ0aWNsZXMgZnJvbSAnLi9SZWxhdGVkQXJ0aWNsZXMnXG5cbmNsYXNzIEFydGljbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICBsZXQgZm9vdGVyRGF0YSA9IG51bGxcblxuICAgICAgICBsZXQgYXJ0aWNsZURhdGEgPSBudWxsXG4gICAgICAgIGxldCBhcnRpY2xlTG9hZGVkID0gZmFsc2VcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5pbml0aWFsU2VydmVyRGF0YSkge1xuICAgICAgICAgICAgYXJ0aWNsZURhdGEgPSB0aGlzLnByb3BzLmluaXRpYWxTZXJ2ZXJEYXRhLmFydGljbGVEYXRhXG4gICAgICAgICAgICBhcnRpY2xlTG9hZGVkID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFydGljbGVJZCA9IHRoaXMucHJvcHMubWF0Y2gudXJsXG4gICAgICAgIGFydGljbGVJZCA9IGFydGljbGVJZC50b0xvd2VyQ2FzZSgpLnN1YnN0cmluZygxLCBhcnRpY2xlSWQubGVuZ3RoKVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5hcnRpY2xlRGF0YSAmJiB0aGlzLnByb3BzLmFydGljbGVEYXRhW2FydGljbGVJZF0pIHtcbiAgICAgICAgICAgIGFydGljbGVEYXRhID0gdGhpcy5wcm9wcy5hcnRpY2xlRGF0YVthcnRpY2xlSWRdXG4gICAgICAgICAgICBhcnRpY2xlTG9hZGVkID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFydGljbGVEYXRhOiBhcnRpY2xlRGF0YSxcbiAgICAgICAgICAgIHJlcGx5T3BlbkZvcjogbnVsbCxcbiAgICAgICAgICAgIGNvbW1lbnQ6ICcnLFxuICAgICAgICAgICAgYXJ0aWNsZUxvYWRlZDogYXJ0aWNsZUxvYWRlZCxcbiAgICAgICAgICAgIHNlYXJjaENpdGllczogW10sXG4gICAgICAgICAgICBzZWFyY2hXaWRnZXQ6ICcnLFxuICAgICAgICAgICAgc3BlY2lhbGl6YXRpb25faWQ6ICcnLFxuICAgICAgICAgICAgaGlkZUZvb3RlcldpZGdldDogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dQb3B1cDogZmFsc2UsXG4gICAgICAgICAgICBtZWRCdG5Ub3A6ICcnLFxuICAgICAgICAgICAgc2hvd1BoYXJtYWN5QXRDbGllbnQ6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1BoYXJtYWN5Rm9vdGVyOiB0cnVlLFxuICAgICAgICAgICAgc2hvd01haW5Qb3B1cDogZmFsc2UsXG4gICAgICAgICAgICBpc01lZGljaW5lUGFnZTogdGhpcy5wcm9wcy5tYXRjaC51cmwuaW5jbHVkZXMoJy1tZGRwJyksXG4gICAgICAgICAgICBwaG9uZV9udW1iZXI6XCJcIixcbiAgICAgICAgICAgIGluVmFsaWRQaG5vOmZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmFydGljbGVEYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmdldEFydGljbGVEYXRhKClcbiAgICAgICAgfVxuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5tYXRjaC5wYXRoLnNwbGl0KCctJylbMV0gPT09ICdtZGRwJykge1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkTG9jYXRpb24gPSAnJ1xuICAgICAgICAgICAgbGV0IGxhdCA9IDI4LjY0NDgwMFxuICAgICAgICAgICAgbGV0IGxvbmcgPSA3Ny4yMTY3MjFcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZExvY2F0aW9uID0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uO1xuICAgICAgICAgICAgICAgIGxhdCA9IHNlbGVjdGVkTG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubGF0XG4gICAgICAgICAgICAgICAgbG9uZyA9IHNlbGVjdGVkTG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubG5nXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsYXQgPT09ICdmdW5jdGlvbicpIGxhdCA9IGxhdCgpXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsb25nID09PSAnZnVuY3Rpb24nKSBsb25nID0gbG9uZygpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0T2ZmZXJMaXN0KGxhdCwgbG9uZyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhpZGVGb290ZXJXaWRnZXQ6IGZhbHNlLCBzaG93UGhhcm1hY3lBdENsaWVudDogdHJ1ZSB9KVxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93UGhhcm1hY3lGb290ZXI6IHRydWV9KVxuICAgICAgICB9LDYwMDApXG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLnN0YXRlLmlzTWVkaWNpbmVQYWdlKXtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TWFpblBvcHVwOiB0cnVlIH0pXG4gICAgICAgICAgICB9LCA0MDAwKVxuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cgJiYgdGhpcy5wcm9wcy5tYXRjaC5wYXRoLnNwbGl0KCctJylbMV0gPT09ICdtZGRwJykge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlcilcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzZXNzaW9uSWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdpRnJhbWVJZCcpXG4gICAgICAgIGlmICghc2Vzc2lvbklkKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmlGcmFtZVN0YXRlKCcnLCB0cnVlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2Nyb2xsSGFuZGxlcigpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQpIHtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZWRpY2luZS1idG4nKVxuICAgICAgICAgICAgICAgIGxldCBlbGVtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lZGljaW5lLWJ0bi1kaXYnKVxuXG4gICAgICAgICAgICAgICAgaWYgKGVsZW0gJiYgZWxlbUNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBhbGVydCh3aW5kb3cuc2Nyb2xsWSArJ2EnKyBlbGVtQ29udGFpbmVyLm9mZnNldFRvcClcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdyAmJiAod2luZG93LnNjcm9sbFkgPj0gZWxlbUNvbnRhaW5lci5vZmZzZXRIZWlnaHQgKyAzMzUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLmJhY2tncm91bmQgPSAnIzFiOTdmZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUuYm9yZGVyUmFkaXVzID0gJzBweCdcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1Db250YWluZXIuc3R5bGUucGFkZGluZyA9ICcwcHgnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLmJhY2tncm91bmQgPSAnIzFiOTdmZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUuYm9yZGVyUmFkaXVzID0gJzVweCdcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1Db250YWluZXIuc3R5bGUucGFkZGluZyA9ICcwcHggMTVweCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDApXG5cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XG4gICAgfVxuXG4gICAgZ2V0QXJ0aWNsZURhdGEoKSB7XG4gICAgICAgIGxldCBhcnRpY2xlSWQgPSB0aGlzLnByb3BzLm1hdGNoLnVybFxuICAgICAgICBpZiAoYXJ0aWNsZUlkKSB7XG4gICAgICAgICAgICBhcnRpY2xlSWQgPSBhcnRpY2xlSWQudG9Mb3dlckNhc2UoKS5zdWJzdHJpbmcoMSwgYXJ0aWNsZUlkLmxlbmd0aClcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hBcnRpY2xlKGFydGljbGVJZCwgdGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoJ3ByZXZpZXcnKSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZXJyIC8qJiYgIXRoaXMuc3RhdGUuYXJ0aWNsZURhdGEqLykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYXJ0aWNsZURhdGE6IGRhdGEsIGFydGljbGVMb2FkZWQ6IHRydWUsIHJlcGx5T3BlbkZvcjogJycgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uSG9tZUNsaWNrKGV2ZW50LCBsaW5rKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGxpbmspO1xuICAgIH1cblxuICAgIGZhY2Vib29rQ2xpY2soKSB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKCdodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/dT0nICsgZG9jdW1lbnQuVVJMLCAnZmFjZWJvb2stcG9wdXAnLCAnaGVpZ2h0PTM1MCx3aWR0aD02MDAnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHR3aXR0ZXJDbGljaygpIHtcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vdHdpdHRlci5jb20vc2hhcmU/dXJsPScgKyBkb2N1bWVudC5VUkwsICd0d2l0dGVyLXBvcHVwJywgJ2hlaWdodD0zNTAsd2lkdGg9NjAwJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaW5rZWRpbkNsaWNrKCkge1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cub3BlbihgaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL3NoYXJlQXJ0aWNsZT9taW5pPXRydWUmdXJsPSR7ZG9jdW1lbnQuVVJMfSZ0aXRsZT0ke3RoaXMuc3RhdGUuYXJ0aWNsZURhdGEudGl0bGUuc3BsaXQoJ3wnKVswXX0mc291cmNlPWRvY3ByaW1lLmNvbWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgd2hhdHNhcHBDbGljaygpIHtcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93Lm9wZW4oYGh0dHBzOi8vd2EubWUvP3RleHQ9JHtkb2N1bWVudC5VUkx9YCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21tZW50UmVwbHlDbGlja2VkKGlkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZXBseU9wZW5Gb3I6IGlkIH0pXG4gICAgfVxuXG4gICAgcG9zdFJlcGx5KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5jb21tZW50KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIHdyaXRlIHZhbGlkIGNvbW1lbnRcIiB9KVxuICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBvc3REYXRhID0ge1xuICAgICAgICAgICAgYXJ0aWNsZTogdGhpcy5zdGF0ZS5hcnRpY2xlRGF0YS5pZCxcbiAgICAgICAgICAgIGNvbW1lbnQ6IHRoaXMuc3RhdGUuY29tbWVudCxcbiAgICAgICAgICAgIG5hbWU6IE9iamVjdC52YWx1ZXModGhpcy5wcm9wcy5wcm9maWxlcykubGVuZ3RoICYmIHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0gPyB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGVdLm5hbWUgOiAnJyxcbiAgICAgICAgICAgIGVtYWlsOiBPYmplY3QudmFsdWVzKHRoaXMucHJvcHMucHJvZmlsZXMpLmxlbmd0aCAmJiB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGVdID8gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXS5lbWFpbCA6ICcnLFxuICAgICAgICAgICAgcGFyZW50OiB0aGlzLnN0YXRlLnJlcGx5T3BlbkZvclxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMucG9zdENvbW1lbnQocG9zdERhdGEsIChlcnJvciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29tbWVudDogJycgfSlcbiAgICAgICAgICAgICAgICB0aGlzLmdldEFydGljbGVEYXRhKClcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIkNvbW1lbnQgUG9zdGVkIFN1Y2Vzc2Z1bGx5LCBBd2FpdGluZyBtb2RlcmF0aW9uXCIgfSlcbiAgICAgICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiQ291bGQgbm90IHBvc3QgeW91ciBjb21tZW50LCBUcnkgYWdhaW4hXCIgfSlcbiAgICAgICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGhhbmRsZUlucHV0Q29tbWVudChlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb21tZW50OiBlLnRhcmdldC52YWx1ZSB9KVxuICAgIH1cblxuICAgIGdldENpdHlMaXN0KGtleSkge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnNlYXJjaENpdGllcy5sZW5ndGggPiAwICYmIHRoaXMuc3RhdGUuc2VhcmNoV2lkZ2V0ID09IGtleSA/XG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1vbi1zZWFyY2gtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzcmNoLWhlYWRpbmdcIj5Mb2NhdGlvbiBTZWFyY2g8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1vbi1saXN0aW5nLWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VhcmNoQ2l0aWVzLm1hcCgocmVzdWx0LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIiBvbkNsaWNrPXt0aGlzLnNlbGVjdExvY2F0aW9uLmJpbmQodGhpcywgcmVzdWx0KX0+e3Jlc3VsdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPiA6ICcnXG5cbiAgICB9XG5cbiAgICBnZXRDaXR5TGlzdExheW91dChzZWFyY2hSZXN1bHRzID0gW10sIHNlYXJjaFBhcmFtcyA9IHt9KSB7XG4gICAgICAgIGxldCBzcGVjaWFsaXphdGlvbl9pZCA9ICcnXG4gICAgICAgIGxldCBzZWFyY2hXaWRnZXQgPSAnJ1xuICAgICAgICBpZiAoc2VhcmNoUGFyYW1zICYmIE9iamVjdC52YWx1ZXMoc2VhcmNoUGFyYW1zKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNwZWNpYWxpemF0aW9uX2lkID0gc2VhcmNoUGFyYW1zLnNwZWNpYWxpdHlJZFxuICAgICAgICAgICAgc2VhcmNoV2lkZ2V0ID0gc2VhcmNoUGFyYW1zLndpZGdldElkXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlYXJjaFJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoQ2l0aWVzOiBzZWFyY2hSZXN1bHRzLCBzZWFyY2hXaWRnZXQ6IHNlYXJjaFdpZGdldCwgc3BlY2lhbGl6YXRpb25faWQ6IHNwZWNpYWxpemF0aW9uX2lkIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoQ2l0aWVzOiBbXSwgc2VhcmNoV2lkZ2V0OiBzZWFyY2hXaWRnZXQsIHNwZWNpYWxpemF0aW9uX2lkOiBzcGVjaWFsaXphdGlvbl9pZCB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VsZWN0TG9jYXRpb24oY2l0eSkge1xuICAgICAgICB0aGlzLmNoaWxkLnNlbGVjdExvY2F0aW9uKChjaXR5KSwgKCkgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoQ2l0aWVzOiBbXSB9KVxuICAgICAgICAgICAgbGV0IGd0bURhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdBcnRpY2xlUGFnZUxvY2F0aW9uU2VsZWN0ZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdhcnRpY2xlLXBhZ2UtbG9jYXRpb24tc2VsZWN0ZWQnLCBzZWxlY3RlZElkOiB0aGlzLnN0YXRlLnNwZWNpYWxpemF0aW9uX2lkIHx8ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5zcGVjaWFsaXphdGlvbl9pZCkge1xuICAgICAgICAgICAgICAgIGxldCBjcml0ZXJpYSA9IHt9XG4gICAgICAgICAgICAgICAgY3JpdGVyaWEuaWQgPSB0aGlzLnN0YXRlLnNwZWNpYWxpemF0aW9uX2lkXG4gICAgICAgICAgICAgICAgY3JpdGVyaWEubmFtZSA9ICcnXG4gICAgICAgICAgICAgICAgY3JpdGVyaWEudHlwZSA9ICdzcGVjaWFsaXR5J1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xvbmVDb21tb25TZWxlY3RlZENyaXRlcmlhcyhjcml0ZXJpYSlcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL29wZC9zZWFyY2hyZXN1bHRzYClcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZUNsb3NlKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGlkZUZvb3RlcldpZGdldDogdHJ1ZSB9KVxuICAgIH1cblxuICAgIGJ1eU1lZGljaW5lQ2xpY2soZm9vdGVyQnV5Tm93ID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IGd0bURhdGEgPSB7fVxuICAgICAgICBpZihmb290ZXJCdXlOb3cpIHtcbiAgICAgICAgICAgIGd0bURhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdCdXlNZWRpY2luZUZvb3RlckJ0bkNsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnYnV5LW1lZGljaW5lLWZvb3Rlci1idG4tY2xpY2snLCAnYXJ0aWNsZUlkJzogdGhpcy5zdGF0ZS5hcnRpY2xlRGF0YSAmJiB0aGlzLnN0YXRlLmFydGljbGVEYXRhLmlkID8gdGhpcy5zdGF0ZS5hcnRpY2xlRGF0YS5pZCA6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGd0bURhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdCdXlNZWRpY2luZUJ0bkNsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnYnV5LW1lZGljaW5lLWJ0bi1jbGljaycsICdhcnRpY2xlSWQnOiB0aGlzLnN0YXRlLmFydGljbGVEYXRhICYmIHRoaXMuc3RhdGUuYXJ0aWNsZURhdGEuaWQgPyB0aGlzLnN0YXRlLmFydGljbGVEYXRhLmlkIDogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1BvcHVwOiB0cnVlIH0sICgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jb250aW51ZUNsaWNrKCksIDEwMDApO1xuICAgICAgICB9KVxuXG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG4gICAgfVxuXG4gICAgY29udGludWVDbGljaygpIHtcbiAgICAgICAgLy8gbGV0IGd0bURhdGEgPSB7XG4gICAgICAgIC8vICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ01lZGljaW5lUGFnZUNvbnRpbnVlQ2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdtZWRpY2luZS1wYWdlLWNvbnRpbnVlLWNsaWNrJ1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG4gICAgICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdmFyIGlzU2FmYXJpID0gL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgICAgICAgIGlmICgvbW9iaWxlL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhaXNTYWZhcmkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlGcmFtZVN0YXRlKHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWUsIGZhbHNlKVxuICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2lGcmFtZUlkJywgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5hcnRpY2xlRGF0YSAmJiB0aGlzLnN0YXRlLmFydGljbGVEYXRhLnBoYXJtZWFzeV91cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9wZW4odGhpcy5zdGF0ZS5hcnRpY2xlRGF0YS5waGFybWVhc3lfdXJsLCAnX2JsYW5rJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKENPTkZJRy5QSEFSTUVBU1lfSUZSQU1FX1VSTCwgJ19ibGFuaycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc2hvd1BvcHVwOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSwgMTAwMClcbiAgICB9XG5cbiAgICBoaWRlUG9wdXAoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93UG9wdXA6IGZhbHNlIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGhvbmVfbnVtYmVyOmUudGFyZ2V0LnZhbHVlfSkgXG4gICAgfVxuXG4gICAgbmF2aWdhdGVUb0dvbGQgPSAoZSkgPT57XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0FydGljbGVHb2xkQmFubmVyQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2FydGljbGUtZ29sZC1iYW5uZXItY2xpY2tlZCdcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3ZpcC1nb2xkLWRldGFpbHM/aXNfZ29sZD10cnVlJnNvdXJjZT1tb2JpbGUtbWVkaWNpbmUtYmFubmVyLWdvbGQtY2xpY2tlZCZsZWFkX3NvdXJjZT1Eb2NwcmltZScpXG4gICAgICAgIC8vIGxldCBzZWxmID0gdGhpc1xuICAgICAgICAvLyBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaCkgXG4gICAgICAgIC8vIGlmKHRoaXMuc3RhdGUucGhvbmVfbnVtYmVyID09IFwiXCIgJiYgdGhpcy5zdGF0ZS5waG9uZV9udW1iZXIubGVuZ3RoIDwxMCl7XG4gICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtpblZhbGlkUGhubzp0cnVlfSlcbiAgICAgICAgLy8gICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIGVudGVyIHZhbGlkIHBob25lIG51bWJlclwiIH0pXG4gICAgICAgIC8vIH1lbHNle1xuICAgICAgICAvLyAgICAgaWYoIXRoaXMuc3RhdGUucGhvbmVfbnVtYmVyLm1hdGNoKC9eWzU2Nzg5XXsxfVswLTldezl9JC8pIHx8IHRoaXMuc3RhdGUucGhvbmVfbnVtYmVyLmxlbmd0aCA+MTApe1xuICAgICAgICAvLyAgICAgICB0aGlzLnNldFN0YXRlKHtpblZhbGlkUGhubzp0cnVlfSkgIFxuICAgICAgICAvLyAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIGVudGVyIHZhbGlkIHBob25lIG51bWJlclwiIH0pXG4gICAgICAgIC8vICAgICB9ZWxzZXtcbiAgICAgICAgLy8gICAgICAgICBsZXQgTGVhZF9kYXRhID0ge31cbiAgICAgICAgLy8gICAgICAgICBMZWFkX2RhdGEubGVhZF90eXBlID0gJ01FRElDSU5FJ1xuICAgICAgICAvLyAgICAgICAgIExlYWRfZGF0YS5sZWFkX3NvdXJjZSA9ICdtZWRpY2luZSdcbiAgICAgICAgLy8gICAgICAgICBMZWFkX2RhdGEuZXhpdHBvaW50X3VybCA9ICdodHRwOi8vZG9jcHJpbWUuY29tJyArIHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWVcbiAgICAgICAgLy8gICAgICAgICBMZWFkX2RhdGEuc291cmNlID0gcGFyc2VkXG4gICAgICAgIC8vICAgICAgICAgTGVhZF9kYXRhLnBob25lX251bWJlciA9IHRoaXMuc3RhdGUucGhvbmVfbnVtYmVyXG4gICAgICAgIC8vICAgICAgICAgaWYoc2VsZi5wcm9wcy5jb21tb25fdXRtX3RhZ3MgJiYgc2VsZi5wcm9wcy5jb21tb25fdXRtX3RhZ3MubGVuZ3RoKXtcbiAgICAgICAgLy8gICAgICAgICAgICAgTGVhZF9kYXRhLnV0bV90YWdzID0gc2VsZi5nZXRVdG1UYWdzKClcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgc2VsZi5wcm9wcy5Ob25JcGRCb29raW5nTGVhZChMZWFkX2RhdGEpXG4gICAgICAgIC8vICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgIC8vICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdBcnRpY2xlR29sZEJhbm5lckNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdhcnRpY2xlLWdvbGQtYmFubmVyLWNsaWNrZWQnXG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy92aXAtZ29sZC1kZXRhaWxzP2lzX2dvbGQ9dHJ1ZSZzb3VyY2U9bW9iaWxlLW1lZGljaW5lLWJhbm5lci1nb2xkLWNsaWNrZWQmbGVhZF9zb3VyY2U9RG9jcHJpbWUnKVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgfVxuICAgIGdldFV0bVRhZ3MoKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBsZXQgdXRtX3RhZ3MgPSB7XG4gICAgICAgICAgICB1dG1fc291cmNlOiBwYXJzZWQudXRtX3NvdXJjZSB8fCAnJyxcbiAgICAgICAgICAgIHV0bV9tZWRpdW06IHBhcnNlZC51dG1fbWVkaXVtIHx8ICcnLFxuICAgICAgICAgICAgdXRtX3Rlcm06IHBhcnNlZC51dG1fdGVybSB8fCAnJyxcbiAgICAgICAgICAgIHV0bV9jYW1wYWlnbjogcGFyc2VkLnV0bV9jYW1wYWlnbiB8fCAnJyxcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzICYmIHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmxlbmd0aCl7XG4gICAgICAgICAgICB1dG1fdGFncyA9IHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmZpbHRlcih4PT54LnR5cGUgPT0gXCJjb21tb25feHRyYV90YWdzXCIpWzBdLnV0bV90YWdzXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXRtX3RhZ3NcbiAgICB9XG4gICAgbWFpblBvcHVwRGF0YSgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGVJbWdQb3BcIj5cbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJwLXJlbGF0aXZlIGdvbGQtbWVkLWJuclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZCBnb2xkLW1lZC1jbHNcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcC1wb3AtY2xzLnN2Zyd9IG9uQ2xpY2s9eyhldmVudCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQXJ0aWNsZUdvbGRCYW5uZXJDcm9zc0NsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdhcnRpY2xlLWdvbGQtYmFubmVyLWNyb3NzLWNsaWNrZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93TWFpblBvcHVwOmZhbHNlfSl9fSAvPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZCBcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3BvcGltYWdlLnBuZyd9IG9uQ2xpY2s9e3RoaXMubmF2aWdhdGVUb0dvbGR9Lz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWQtcG9wVXBJbnB1dC1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRlbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgbW9iaWxlIG51bWJlciB0byB2aWV3IG9mZmVyXCIgbWF4TGVuZ3RoPVwiMTBcIiB2YWx1ZT17dGhpcy5zdGF0ZS5waG9uZV9udW1iZXJ9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gc3R5bGU9e3tib3JkZXI6dGhpcy5zdGF0ZS5pblZhbGlkUGhubz8nMXB4IHNvbGlkIHJlZCc6Jyd9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLm5hdmlnYXRlVG9Hb2xkfSBjbGFzc05hbWU9XCJtZWQtcG9wQnRuXCI+QmVjb21lIEdvbGQgTWVtYmVyIE5vdyA8c3BhbiBjbGFzc05hbWU9XCJjaXJjbGUtYXJyb3dcIj48aT48L2k+PC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtcmVsYXRpdmUgZ29sZC1tZWQtYm5yIGNvdmlkQmFubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGdvbGQtbWVkLWNsc1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwLXBvcC1jbHMuc3ZnJ30gb25DbGljaz17KGV2ZW50KT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdBcnRpY2xlR29sZEJhbm5lckNyb3NzQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2FydGljbGUtZ29sZC1iYW5uZXItY3Jvc3MtY2xpY2tlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dNYWluUG9wdXA6ZmFsc2V9KX19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxoND5Qcm90ZWN0IHlvdXJzZWxmIGFnYWluc3Q8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8cD5DT1I8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlydXMuc3ZnJ30vPk5BVklSVVM8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1YlR4dENvcm9uYVwiPlwiU3RheSBob21lIGFuZCBWaWV3IFF1b3RlcyBPbmxpbmVcIjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3ZpZEJ0bi1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly90ZXJtbGlmZS5wb2xpY3liYXphYXIuY29tLz9wYl9zb3VyY2U9ZG9jcHJpbWUgXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cIm1lZC1wb3BCdG5cIj48c3BhbiBjbGFzc05hbWU9XCJ1cE5hbWVcIj5Db3ZpZC0xOSBjb3ZlcmVkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2lucy5zdmcnfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5UZXJtIEluc3VyYW5jZTwvc3Bhbj4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9oZWFsdGgucG9saWN5YmF6YWFyLmNvbS8/dXRtX3NvdXJjZT1kb2NwcmltZVwiIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJtZWQtcG9wQnRuXCI+PHNwYW4gY2xhc3NOYW1lPVwidXBOYW1lXCI+Tm8gbWVkaWNhbCByZXF1aXJlZDwvc3Bhbj4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvaGVsdGguc3ZnJ30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+SGVhbHRoIEluc3VyYW5jZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgbGV0IGlzVXNlckxvZ2luID0gT2JqZWN0LnZhbHVlcyh0aGlzLnByb3BzLnByb2ZpbGVzKS5sZW5ndGggfHwgU1RPUkFHRS5jaGVja0F1dGgoKVxuICAgICAgICBsZXQgY29tbWVudHNFeGlzdHMgPSB0aGlzLnN0YXRlLmFydGljbGVEYXRhICYmIHRoaXMuc3RhdGUuYXJ0aWNsZURhdGEuY29tbWVudHMubGVuZ3RoID8gdGhpcy5zdGF0ZS5hcnRpY2xlRGF0YS5jb21tZW50cy5sZW5ndGggOiBudWxsXG5cbiAgICAgICAgbGV0IGxvY2F0aW9uTmFtZSA9IFwiXCJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24uZm9ybWF0dGVkX2FkZHJlc3MpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uTmFtZSA9IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5mb3JtYXR0ZWRfYWRkcmVzc1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNob3dJZnJhbWUgPSBmYWxzZVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5pRnJhbWVVcmxzLmluY2x1ZGVzKHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICBzaG93SWZyYW1lID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNlc3Npb25JZCA9IG51bGxcbiAgICAgICAgaWYgKHR5cGVvZiBzZXNzaW9uU3RvcmFnZSA9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBzZXNzaW9uSWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdpRnJhbWVJZCcpXG4gICAgICAgIH1cblxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCIgc3R5bGU9e3Nob3dJZnJhbWUgJiYgc2Vzc2lvbklkID8ge30gOiB7IHBhZGRpbmdCb3R0b206IDU0IH19PlxuICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyIC8+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dNYWluUG9wdXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPE1haW5Qb3B1cCByZXNwPXt0aGlzLm1haW5Qb3B1cERhdGEoKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFydGljbGVEYXRhICYmIHNob3dJZnJhbWUgJiYgc2Vzc2lvbklkID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgc3JjPXt0aGlzLnN0YXRlLmFydGljbGVEYXRhLnBoYXJtZWFzeV91cmwgPyB0aGlzLnN0YXRlLmFydGljbGVEYXRhLnBoYXJtZWFzeV91cmwgOiBDT05GSUcuUEhBUk1FQVNZX0lGUkFNRV9VUkx9IGNsYXNzTmFtZT1cInBoYXJtZWFzeS1pZnJhbWVcIj48L2lmcmFtZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgYXJ0aWNsZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd1BvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm9va2luZ0NvbmZpcm1hdGlvblBvcHVwIGNvbnRpbnVlQ2xpY2s9eygpID0+IHRoaXMuY29udGludWVDbGljaygpfSBpRnJhbWVQb3B1cD17dHJ1ZX0gaGlkZVBvcHVwPXsoKSA9PiB0aGlzLmhpZGVQb3B1cCgpfSAvPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd1BvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGVyIGlGcmFtZVBvcHVwPXt0cnVlfSAvPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGVmdEJhciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTcgY2VudGVyLWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hcnRpY2xlRGF0YSA/IDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGFydGljbGUtY29sdW1uXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWxtZXRUYWdzIHRhZ3NEYXRhPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICh0aGlzLnN0YXRlLmFydGljbGVEYXRhLnNlbyA/IHRoaXMuc3RhdGUuYXJ0aWNsZURhdGEuc2VvLnRpdGxlIDogXCJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICh0aGlzLnN0YXRlLmFydGljbGVEYXRhLnNlbyA/IHRoaXMuc3RhdGUuYXJ0aWNsZURhdGEuc2VvLmRlc2NyaXB0aW9uIDogXCJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5d29yZHM6ICh0aGlzLnN0YXRlLmFydGljbGVEYXRhLnNlbyA/IHRoaXMuc3RhdGUuYXJ0aWNsZURhdGEuc2VvLmtleXdvcmRzIDogXCJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Fub25pY2FsVXJsOiBgJHtDT05GSUcuQVBJX0JBU0VfVVJMfSR7dGhpcy5wcm9wcy5tYXRjaC51cmx9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWE6IHRoaXMuc3RhdGUuYXJ0aWNsZURhdGEudGl0bGUgPT09ICdCbG9vZCBQcmVzc3VyZSB8IENhdXNlcywgVHJlYXRtZW50LCBUZXN0cyAmIFZhY2NpbmVzJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQGNvbnRleHRcIjogXCJodHRwOi8vc2NoZW1hLm9yZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJAdHlwZVwiOiBcIk1lZGljYWxDb25kaXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWx0ZXJuYXRlTmFtZVwiOiBcIkJsb29kIFByZXNzdXJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFzc29jaWF0ZWRBbmF0b215XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkB0eXBlXCI6IFwiQW5hdG9taWNhbFN0cnVjdHVyZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImhlYXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNhdXNlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQHR5cGVcIjogXCJNZWRpY2FsQ2F1c2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiU21va2luZywgU3RyZXNzLEdlbmV0aWNzLEhlYXJ0IGFycmh5dGhtaWFzLEJsb29kIHZlc3NlbCBkaWxhdGlvbixIZWF0IHN0cm9rZSwgUHJlZ25hbmN5LExpdmVyIERpc2Vhc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvZGVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQHR5cGVcIjogXCJNZWRpY2FsQ29kZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29kZVwiOiBcIjQwMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29kaW5nU3lzdGVtXCI6IFwiSUNELTktQ01cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlmZmVyZW50aWFsRGlhZ25vc2lzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkB0eXBlXCI6IFwiRER4RWxlbWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlhZ25vc2lzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJAdHlwZVwiOiBcIk1lZGljYWxDb25kaXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTG93IEJsb29kIFByZXNzdXJlICYgSGlnaCBCbG9vZCBQcmVzdXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlzdGluZ3Vpc2hpbmdTaWduXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJAdHlwZVwiOiBcIk1lZGljYWxTeW1wdG9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTZXZlcmUgaGVhZGFjaGUsRmF0aWd1ZSxNZW50YWwgQ29uZnVzaW9uLFBhaW4gaW4gY2hlc3QsIE1lbnRhbCBDb25mdXNpb24sUGFsZSwgZGFtcCwgY29sZCBza2luLEJyZWF0aGluZyBkaWZmaWN1bHRpZXMsIFdlYWsgUHVsc2VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJIaWdoICYgTG93IEJsb29kIFByZXNzdXJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBvc3NpYmxlVHJlYXRtZW50XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQHR5cGVcIjogXCJkcnVnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNvbnN1bHQgRG9jdG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyaXNrRmFjdG9yXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQHR5cGVcIjogXCJNZWRpY2FsUmlza0ZhY3RvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJBZ2UsR2VuZGVyLCBTbW9raW5nLCBUb3RhbCBjaG9sZXN0ZXJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2Vjb25kYXJ5UHJldmVudGlvblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkB0eXBlXCI6IFwiTGlmZXN0eWxlTW9kaWZpY2F0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInN0b3BwaW5nIHNtb2tpbmcsd2VpZ2h0IG1hbmFnZW1lbnQsaW5jcmVhc2VkIHBoeXNpY2FsIGFjdGl2aXR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaWduT3JTeW1wdG9tXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQHR5cGVcIjogXCJNZWRpY2FsU3ltcHRvbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJMaWdodC1oZWFkZWRuZXNzIG9yIHdvb3ppbmVzcywgRmFpbnRpbmcsIE5hdXNlYSwgRXhoYXVzdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm1hdGNoLnBhdGguc3BsaXQoJy0nKVsxXSA9PT0gJ21kZHAnICYmIHRoaXMucHJvcHMub2ZmZXJMaXN0ICYmIHRoaXMucHJvcHMub2ZmZXJMaXN0LmZpbHRlcih4ID0+IHguc2xpZGVyX2xvY2F0aW9uID09PSAnbWVkaWNpbmVfZGV0YWlsX3BhZ2UnKS5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFubmVyQ2Fyb3VzZWwgey4uLnRoaXMucHJvcHN9IHNsaWRlckxvY2F0aW9uPVwibWVkaWNpbmVfZGV0YWlsX3BhZ2VcIiAvPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtcmItMTAgYnJlYWRjcnVtYi1saXN0XCIgc3R5bGU9e3sgd29yZEJyZWFrOiAnYnJlYWstd29yZCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgb25DbGljaz17KGUpID0+IHRoaXMub25Ib21lQ2xpY2soZSwgXCIvXCIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMCBicmVhZGNydW1iLXRpdGxlIGJyZWFkY3J1bWItY29sb3JlZC10aXRsZVwiPkhvbWU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1hcnJvd1wiPiZndDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YC8ke3RoaXMuc3RhdGUuYXJ0aWNsZURhdGEuY2F0ZWdvcnkudXJsfWB9IG9uQ2xpY2s9eyhlKSA9PiB0aGlzLm9uSG9tZUNsaWNrKGUsIGAvJHt0aGlzLnN0YXRlLmFydGljbGVEYXRhLmNhdGVnb3J5LnVybH1gKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmdy01MDAgYnJlYWRjcnVtYi10aXRsZSBicmVhZGNydW1iLWNvbG9yZWQtdGl0bGVcIj57dGhpcy5zdGF0ZS5hcnRpY2xlRGF0YS5jYXRlZ29yeS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmVhZGNydW1iLWFycm93XCI+Jmd0Ozwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm1hdGNoLnBhdGguc3BsaXQoJy0nKVsxXSA9PT0gJ25tZHAnID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZnctNTAwIGJyZWFkY3J1bWItdGl0bGVcIj57dGhpcy5zdGF0ZS5hcnRpY2xlRGF0YS5oZWFkaW5nX3RpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8aDIgY2xhc3NOYW1lPVwiZnctNTAwIGJyZWFkY3J1bWItdGl0bGVcIj57dGhpcy5zdGF0ZS5hcnRpY2xlRGF0YS50aXRsZS5zcGxpdCgnfCcpWzBdfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnQtc2hhcmluZy1kaXYgbXJ0LTIwIG1yYi0yMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0LXNoYXJpbmctYnRuIG1yLTNcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmZhY2Vib29rQ2xpY2soKX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2ZhY2Vib29rLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0LXNoYXJpbmctYnRuIG1sLTMgbXItM1wiIG9uQ2xpY2s9eygpID0+IHRoaXMudHdpdHRlckNsaWNrKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3R3aXR0ZXIuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnQtc2hhcmluZy1idG4gbWwtMyBtci0zXCIgb25DbGljaz17KCkgPT4gdGhpcy5saW5rZWRpbkNsaWNrKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2xpbmtlZGluLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0LXNoYXJpbmctYnRuIG1sLTNcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLndoYXRzYXBwQ2xpY2soKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvd2hhdHNhcHAuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYXJ0aWNsZURhdGEuaGVhZGVyX2ltYWdlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgcGFkZGluZ0JvdHRvbTogJzRweCcgfX0gc3JjPXt0aGlzLnN0YXRlLmFydGljbGVEYXRhLmhlYWRlcl9pbWFnZX0gYWx0PXt0aGlzLnN0YXRlLmFydGljbGVEYXRhLmhlYWRlcl9pbWFnZV9hbHR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYXJ0aWNsZURhdGEgJiYgdGhpcy5zdGF0ZS5hcnRpY2xlRGF0YS5oZWFkaW5nX3RpdGxlID8gPGRpdiBjbGFzc05hbWU9XCJkcC1hcnRpY2xlLWhlYWRpbmcgbXJiLTIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmdy01MDBcIj57dGhpcy5zdGF0ZS5hcnRpY2xlRGF0YS5oZWFkaW5nX3RpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zdGF0ZS5zaG93UGhhcm1hY3lBdENsaWVudCAmJiB0aGlzLnN0YXRlLmFydGljbGVEYXRhICYmIHRoaXMuc3RhdGUuYXJ0aWNsZURhdGEudGl0bGUgJiYgdGhpcy5wcm9wcy5tYXRjaC5wYXRoLnNwbGl0KCctJylbMV0gPT09ICdtZGRwJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV5LW1lZC1idG5cIiBpZD1cIm1lZGljaW5lLWJ0bi1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnIzFiOTdmZCd9fSBjbGFzc05hbWU9XCJ2LWJ0biB2LWJ0bi1wcmltYXJ5IGJ0bi1sZyB0ZXh0LXNtXCIgaWQ9XCJtZWRpY2luZS1idG5cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmJ1eU1lZGljaW5lQ2xpY2soKX0+T3JkZXIgey8qdGhpcy5zdGF0ZS5hcnRpY2xlRGF0YS50aXRsZS5zcGxpdCgnfCcpWzBdKi99IG5vdyBhdCBGbGF0IDIwJSBPZmY8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1eS1tZWQtdGFnbGluZSBtcmItMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDMsIGZvbnRTaXplOiAxMiB9fT5Qb3dlcmVkIGJ5IDogPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiA3MiB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9waGFybUVhc3kucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICA8L1JlYWN0LkZyYWdtZW50PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFydGljbGVEYXRhICYmIHRoaXMuc3RhdGUuYXJ0aWNsZURhdGEuYXV0aG9yID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFydGljbGVBdXRob3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMuc3RhdGUuYXJ0aWNsZURhdGEuYXV0aG9yLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlSW1hZ2U9e3RoaXMuc3RhdGUuYXJ0aWNsZURhdGEuYXV0aG9yLnByb2ZpbGVfaW1nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXt0aGlzLnN0YXRlLmFydGljbGVEYXRhLmF1dGhvci51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17dGhpcy5zdGF0ZS5hcnRpY2xlRGF0YS5hdXRob3IuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVjaWFsaXR5PXt0aGlzLnN0YXRlLmFydGljbGVEYXRhLmF1dGhvci5zcGVjaWFsaXR5WzBdLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlcmllbmNlPXt0aGlzLnN0YXRlLmFydGljbGVEYXRhLmF1dGhvci5leHBlcmllbmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVibGlzaGVkRGF0ZT17dGhpcy5zdGF0ZS5hcnRpY2xlRGF0YS5wdWJsaXNoZWRfZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpc3Rvcnk9e3RoaXMucHJvcHMuaGlzdG9yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hcnRpY2xlRGF0YSAmJiB0aGlzLnN0YXRlLmFydGljbGVEYXRhLmJvZHlfZG9tcyAmJiB0aGlzLnN0YXRlLmFydGljbGVEYXRhLmJvZHlfZG9tcy5tYXAoKHZhbCwga2V5KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbC50eXBlLmluY2x1ZGVzKCdodG1sJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17a2V5fSBjbGFzc05hbWU9XCJkb2NwcmltZS1hcnRpY2xlXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB2YWwuY29udGVudCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbC50eXBlLmluY2x1ZGVzKCdzZWFyY2hfd2lkZ2V0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17a2V5fSBjbGFzc05hbWU9XCJzdGlja3ktYXJ0aWNsZS1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbC5jb250ZW50LmxhdCAmJiB2YWwuY29udGVudC5sbmcgJiYgdmFsLmNvbnRlbnQubG9jYXRpb25fbmFtZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbW9uU2VhcmNoIHsuLi50aGlzLnByb3BzfSBsb2NhdGlvbj17dmFsLmNvbnRlbnQubG9jYXRpb25fbmFtZX0gbGF0aXR1ZGU9e3ZhbC5jb250ZW50LmxhdH0gbG9uZ2l0dWRlPXt2YWwuY29udGVudC5sbmd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHZhbC5jb250ZW50LnNwZWNpYWxpemF0aW9uX2lkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYXRpb25FbGVtZW50cyB7Li4udGhpcy5wcm9wc30gb25SZWY9e3JlZiA9PiAodGhpcy5jaGlsZCA9IHJlZil9IGdldENpdHlMaXN0TGF5b3V0PXt0aGlzLmdldENpdHlMaXN0TGF5b3V0LmJpbmQodGhpcyl9IHJlc3VsdFR5cGU9J3NlYXJjaCcgbG9jYXRpb25OYW1lPXtsb2NhdGlvbk5hbWV9IGFydGljbGVTZWFyY2hQYWdlPXt0cnVlfSBzcGVjaWFsaXR5TmFtZT17dmFsLmNvbnRlbnQuc3BlY2lhbGl6YXRpb25fbmFtZX0gc3BlY2lhbGl0eUlkPXt2YWwuY29udGVudC5zcGVjaWFsaXphdGlvbl9pZH0gd2lkZ2V0SWQ9e2tleX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuZ2V0Q2l0eUxpc3Qoa2V5KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhdGlvbkVsZW1lbnRzIHsuLi50aGlzLnByb3BzfSBvblJlZj17cmVmID0+ICh0aGlzLmNoaWxkID0gcmVmKX0gZ2V0Q2l0eUxpc3RMYXlvdXQ9e3RoaXMuZ2V0Q2l0eUxpc3RMYXlvdXQuYmluZCh0aGlzKX0gcmVzdWx0VHlwZT0nc2VhcmNoJyBsb2NhdGlvbk5hbWU9Jycgd2lkZ2V0SWQ9e2tleX0gY29tbW9uU2VhcmNoPXt0cnVlfSBhcnRpY2xlU2VhcmNoUGFnZT17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuZ2V0Q2l0eUxpc3Qoa2V5KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1vblNlYXJjaCB7Li4udGhpcy5wcm9wc30gY29tbW9uU2VhcmNoPXt0cnVlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgLyo8ZGl2IGNsYXNzTmFtZT1cImRvY3ByaW1lLWFydGljbGVcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRoaXMuc3RhdGUuYXJ0aWNsZURhdGEuYm9keSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYXJ0aWNsZURhdGEgJiYgdGhpcy5zdGF0ZS5hcnRpY2xlRGF0YS5sYXN0X3VwZGF0ZWRfYXQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhc3QtdXBkYXRlZCB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5MYXN0IHVwZGF0ZWQgb24gOiB7dGhpcy5zdGF0ZS5hcnRpY2xlRGF0YS5sYXN0X3VwZGF0ZWRfYXR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtcnQtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhcnRpY2xlLWRpc2NsYWltZXJcIj48c3BhbiBjbGFzc05hbWU9XCJmdy03MDBcIj5EaXNjbGFpbWVyIDogPC9zcGFuPkRvY3ByaW1lIGRvZXNu4oCZdCBlbmRvcnNlIG9yIHRha2UgYW55IGd1YXJhbnRlZSBvZiB0aGUgYWNjdXJhY3kgb3IgY29tcGxldGVuZXNzIG9mIGluZm9ybWF0aW9uIHByb3ZpZGVkIHVuZGVyIHRoaXMgYXJ0aWNsZSBhbmQgdGhlc2UgYXJlIHRoZSB2aWV3cyBzdHJpY3RseSBvZiB0aGUgd3JpdGVyLiBEb2NwcmltZSBzaGFsbCBub3QgYmUgaGVsZCByZXNwb25zaWJsZSBmb3IgYW55IGFzcGVjdCBvZiBoZWFsdGhjYXJlIHNlcnZpY2VzIGFkbWluaXN0ZXJlZCB3aXRoIHRoZSBpbmZvcm1hdGlvbiBwcm92aWRlZCBvbiB0aGlzIGFydGljbGUuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hcnRpY2xlRGF0YSAmJiB0aGlzLnN0YXRlLmFydGljbGVEYXRhLmZvb3Rlcl93aWRnZXQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5oaWRlRm9vdGVyV2lkZ2V0ID8gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxGb290ZXJUZXN0U3BlY2lhbGl6YXRpb25XaWRnZXRzIHsuLi50aGlzLnByb3BzfSBmb290ZXJXaWRnZXQ9e3RoaXMuc3RhdGUuYXJ0aWNsZURhdGEuZm9vdGVyX3dpZGdldH0gaGFuZGxlQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2UuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd1BoYXJtYWN5Rm9vdGVyICYmIHRoaXMuc3RhdGUuc2hvd1BoYXJtYWN5QXRDbGllbnQgJiYgdGhpcy5zdGF0ZS5hcnRpY2xlRGF0YSAmJiB0aGlzLnN0YXRlLmFydGljbGVEYXRhLnRpdGxlICYmIHRoaXMucHJvcHMubWF0Y2gucGF0aC5zcGxpdCgnLScpWzFdID09PSAnbWRkcCcgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jLXdkZ3QtbWVkLWNvbnRhaW5lciBwaGFybS1wb3B1cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2Mtd2RndC1ib29rLWRvY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZG9jQ2xvc0J0blwiICBvbkNsaWNrPXsoKT0+dGhpcy5zZXRTdGF0ZSh7c2hvd1BoYXJtYWN5Rm9vdGVyOiBmYWxzZX0pfSBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vY3AvYXNzZXRzL2ltZy9pY29ucy9jbG9zZS5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJkb2Mtd2RndC1oZG5nXCI+T3JkZXIgRGljbG9tb2wgTWVkaWNpbmUgT25saW5lPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBocm1lc3lmb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkZMQVQgMjAlIE9GRjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5idXlNZWRpY2luZUNsaWNrKHRydWUpfT5CdXkgTm93PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAqL31cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYXJ0aWNsZURhdGEgJiYgdGhpcy5zdGF0ZS5hcnRpY2xlRGF0YS50aXRsZSAmJiB0aGlzLnByb3BzLm1hdGNoLnBhdGguc3BsaXQoJy0nKVsxXSA9PT0gJ21kZHAnID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV5LW1lZC1idG4tZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXktbWVkLXRhZ2xpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDMsIGZvbnRTaXplOiAxMiB9fT5Qb3dlcmVkIGJ5IDogPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiA3MiB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9waGFybUVhc3kucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXktbWVkLWJ0blwiIGlkPVwibWVkaWNpbmUtYnRuLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInYtYnRuIHYtYnRuLXByaW1hcnkgYnRuLWxnIHRleHQtc21cIiBpZD1cIm1lZGljaW5lLWJ0blwiIG9uQ2xpY2s9eygpID0+IHRoaXMuYnV5TWVkaWNpbmVDbGljaygpfT5CdXkge3RoaXMuc3RhdGUuYXJ0aWNsZURhdGEudGl0bGUuc3BsaXQoJ3wnKVswXX0gYXQgRmxhdCAyMCUgT2ZmPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hcnRpY2xlRGF0YSAmJiB0aGlzLnN0YXRlLmFydGljbGVEYXRhLnRpdGxlICYmIHRoaXMucHJvcHMubWF0Y2gucGF0aC5zcGxpdCgnLScpWzFdID09PSAnbWRkcCcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2LWJ0biB2LWJ0bi1wcmltYXJ5IGJ0bi1sZyBmaXhlZCBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCBzdGlja3ktYnRuIHRleHQtY2VudGVyXCIgb25DbGljaz17KCkgPT4gdGhpcy5idXlNZWRpY2luZUNsaWNrKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiIHN0eWxlPXt7IGZvbnRTaXplOiAxNiB9fT5CdXkge3RoaXMuc3RhdGUuYXJ0aWNsZURhdGEudGl0bGUuc3BsaXQoJ3wnKVswXX0gYXQgRmxhdCAyMCUgT2ZmPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB3LTUwMFwiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAzLCBmb250U2l6ZTogMTAsIHZlcnRpY2FsQWxpZ246ICcxcHgnIH19PlBvd2VyZWQgYnkgOiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9waGFybWVhc3lfd2hpdGUucG5nXCJ9IHN0eWxlPXt7IHdpZHRoOiA3MiwgdmVydGljYWxBbGlnbjogJ21pZGRsZScgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJpZ2h0QmFyIGNvbENsYXNzPVwiY29sLTEyIGNvbC1sZy01XCIgYXJ0aWNsZURhdGE9e3RoaXMuc3RhdGUuYXJ0aWNsZURhdGF9IG1zZ1RlbXBsYXRlPVwiZ29sZF90ZW1wbGF0ZV8xXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYXJ0aWNsZUxvYWRlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYXJ0aWNsZURhdGEgJiYgdGhpcy5zdGF0ZS5hcnRpY2xlRGF0YS5jb21tZW50cyAmJiB0aGlzLnN0YXRlLmFydGljbGVEYXRhLmNvbW1lbnRzLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjZW50ZXItY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNvbW1lbnRzLW1haW4taGVhZGluZ1wiPntgVXNlciBDb21tZW50cyAoJHt0aGlzLnN0YXRlLmFydGljbGVEYXRhLmNvbW1lbnRzLmxlbmd0aH0pYH08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hcnRpY2xlRGF0YS5jb21tZW50cy5tYXAoKGNvbW1lbnQsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxSZXBseSBrZXk9e2NvbW1lbnQuaWR9IGNvbW1lbnRSZXBseUNsaWNrZWQ9e3RoaXMuY29tbWVudFJlcGx5Q2xpY2tlZC5iaW5kKHRoaXMpfSBpc1VzZXJMb2dpbj17aXNVc2VyTG9naW59IHsuLi50aGlzLnByb3BzfSB7Li4udGhpcy5zdGF0ZX0gZ2V0QXJ0aWNsZURhdGE9e3RoaXMuZ2V0QXJ0aWNsZURhdGEuYmluZCh0aGlzKX0gcG9zdFJlcGx5PXt0aGlzLnBvc3RSZXBseS5iaW5kKHRoaXMpfSBoYW5kbGVJbnB1dENvbW1lbnQ9e3RoaXMuaGFuZGxlSW5wdXRDb21tZW50LmJpbmQodGhpcyl9IGNvbW1lbnREYXRhPXtjb21tZW50fSBjb21tZW50c0V4aXN0cz17Y29tbWVudHNFeGlzdHN9IGFydGljbGVQYWdlPXt0cnVlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFydGljbGVMb2FkZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjZW50ZXItY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTUgbXJuZy10b3AtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tZW50Qm94IHsuLi50aGlzLnByb3BzfSB7Li4udGhpcy5zdGF0ZX0gZ2V0QXJ0aWNsZURhdGE9e3RoaXMuZ2V0QXJ0aWNsZURhdGEuYmluZCh0aGlzKX0gY29tbWVudHNFeGlzdHM9e2NvbW1lbnRzRXhpc3RzfSBwYXJlbnRDb21tZW50SWQ9e3RoaXMuc3RhdGUucmVwbHlPcGVuRm9yfSBhcnRpY2xlUGFnZT17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGUiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtJ1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5cbmNsYXNzIEZvb3RlcldpZGdldFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG5hbWU6ICcnLFxuXHRcdFx0cGhvbmVfbnVtYmVyOicnLFxuXHRcdFx0c2hvd19mb3JtOmZhbHNlLFxuXHRcdFx0bGVhZFR5cGU6JycsXG5cdFx0XHRjbGlja2VkRGF0YTpudWxsLFxuXHRcdFx0Y2l0eV9pZDpudWxsLFxuXHRcdFx0Y2l0eV9uYW1lOicnLFxuXHRcdFx0c2VhcmNoX2NpdHk6JycsXG5cdFx0XHRzaG93Q2l0eVNlYXJjaFBvcHVwOmZhbHNlLFxuXHRcdFx0ZmlsdGVyZWRfY2l0eV9saXN0OiBbXVxuXHRcdH1cblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRsZXQgZGF0YSA9IHtcblx0XHRcdCdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnRm9vdGVyV2lkZ2V0RGlzcGxheWVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnZm9vdGVyLXdpZGdldC1kaXNwbGF5ZWQnLCB0eXBlOiB0aGlzLnByb3BzLmZvb3RlcldpZGdldCAmJiB0aGlzLnByb3BzLmZvb3RlcldpZGdldC53aWRnZXRfdHlwZSA/IHRoaXMucHJvcHMuZm9vdGVyV2lkZ2V0LndpZGdldF90eXBlIDogJydcblx0XHR9XG5cdFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuXHR9XG5cblx0c2VsZWN0RG9jdG9yU3BlY2lhbGl6YXRpb24oZGF0YSkge1xuXHRcdGlmKCF0aGlzLnN0YXRlLnNob3dfZm9ybSl7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtzaG93X2Zvcm06dHJ1ZSwgbGVhZFR5cGU6MSxjbGlja2VkRGF0YTpkYXRhfSlcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHRsZXQgY3JpdGVyaWEgPSB7fVxuXHRcdGNyaXRlcmlhLmlkID0gZGF0YVsxXSB8fCAnJ1xuXHRcdGNyaXRlcmlhLm5hbWUgPSBkYXRhWzBdIHx8ICcnXG5cdFx0Y3JpdGVyaWEudHlwZSA9ICdzcGVjaWFsaXR5J1xuXHRcdHRoaXMucHJvcHMuY2xvbmVDb21tb25TZWxlY3RlZENyaXRlcmlhcyhjcml0ZXJpYSlcblxuXHRcdGxldCBkb2N0b3JfbmFtZSA9ICcnLCBob3NwaXRhbF9uYW1lID0gJycsIGhvc3BpdGFsX2lkID0gJydcblx0XHRsZXQgc3RhdGUgPSB7XG5cdFx0XHRmaWx0ZXJDcml0ZXJpYToge1xuXHRcdFx0XHQuLi50aGlzLnByb3BzLk9QRF9TVEFURS5maWx0ZXJDcml0ZXJpYSxcblx0XHRcdFx0ZG9jdG9yX25hbWUsIGhvc3BpdGFsX25hbWUsIGhvc3BpdGFsX2lkXG5cdFx0XHR9LFxuXHRcdFx0bmV4dEZpbHRlckNyaXRlcmlhOiB7XG5cdFx0XHRcdC4uLnRoaXMucHJvcHMuT1BEX1NUQVRFLmZpbHRlckNyaXRlcmlhLFxuXHRcdFx0XHRkb2N0b3JfbmFtZSwgaG9zcGl0YWxfbmFtZSwgaG9zcGl0YWxfaWRcblx0XHRcdH1cblx0XHR9XG5cblx0XHRsZXQgZ3RtRGF0YSA9IHtcblx0XHRcdCdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnRm9vdGVyU3BlY2lhbGl6YXRpb25zU2VsZWN0ZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdmb290ZXItc3BlY2lhbGl6YXRpb25zLXNlbGVjdGVkJywgJ3NlbGVjdGVkJzogY3JpdGVyaWEubmFtZSB8fCAnJywgJ3NlbGVjdGVkSWQnOiBjcml0ZXJpYS5pZCB8fCAnJywgJ3NlYXJjaGVkJzogJycsICdzZWFyY2hTdHJpbmcnOiAnJywgJ2Zyb20nOiAnZm9vdGVyV2lkZ2V0J1xuXHRcdH1cblx0XHRHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuXG5cblx0XHR0aGlzLnByb3BzLm1lcmdlT1BEU3RhdGUoc3RhdGUsIHRydWUpXG5cblx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaCh7XG5cdFx0XHRwYXRobmFtZTogJy9vcGQvc2VhcmNocmVzdWx0cycsXG5cdFx0XHRzdGF0ZTogeyBzZWFyY2hfYmFjazogdHJ1ZSB9XG5cdFx0fSlcblx0fVxuXG5cdHNlbGVjdFRlc3QoZGF0YSkge1xuXHRcdGlmKCF0aGlzLnN0YXRlLnNob3dfZm9ybSl7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtzaG93X2Zvcm06dHJ1ZSwgbGVhZFR5cGU6MixjbGlja2VkRGF0YTpkYXRhfSlcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHRsZXQgY3JpdGVyaWEgPSB7fVxuXHRcdGNyaXRlcmlhLmlkID0gZGF0YVsxXSB8fCAnJ1xuXHRcdGNyaXRlcmlhLm5hbWUgPSBkYXRhWzBdIHx8ICcnXG5cdFx0Y3JpdGVyaWEudHlwZSA9ICd0ZXN0J1xuXHRcdGNyaXRlcmlhLnVybCA9ICcnXG5cdFx0Y3JpdGVyaWEudGVzdF90eXBlID0gJydcblx0XHR0aGlzLnByb3BzLnRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKCd0ZXN0JywgY3JpdGVyaWEsIHRydWUpXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLnNob3dMYWJzKClcblx0XHR9LCAxMDApXG5cdH1cblxuXHRzaG93TGFicygpIHtcblx0XHRsZXQgbGFiX25hbWUgPSAnJ1xuXHRcdHRoaXMucHJvcHMubWVyZ2VMQUJTdGF0ZSh7XG5cdFx0XHRmaWx0ZXJDcml0ZXJpYToge1xuXHRcdFx0XHQuLi50aGlzLnByb3BzLkxBQl9TVEFURS5maWx0ZXJDcml0ZXJpYSxcblx0XHRcdFx0bGFiX25hbWVcblx0XHRcdH0sXG5cdFx0XHRuZXh0RmlsdGVyQ3JpdGVyaWE6IHtcblx0XHRcdFx0Li4udGhpcy5wcm9wcy5MQUJfU1RBVEUuZmlsdGVyQ3JpdGVyaWEsXG5cdFx0XHRcdGxhYl9uYW1lXG5cdFx0XHR9LFxuXHRcdFx0Y3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzOiB0aGlzLnByb3BzLkxBQl9TVEFURS5zZWxlY3RlZENyaXRlcmlhcyxcblx0XHRcdG5leHRTZWxlY3RlZENyaXRlcmlhczogdGhpcy5wcm9wcy5MQUJfU1RBVEUuc2VsZWN0ZWRDcml0ZXJpYXNcblx0XHR9LCB0cnVlKVxuXG5cdFx0bGV0IHNlbGVjdGVkVGVzdElkcyA9IHRoaXMucHJvcHMuTEFCX1NUQVRFLnNlbGVjdGVkQ3JpdGVyaWFzLm1hcCh0ZXN0ID0+IHRlc3QuaWQpXG5cdFx0bGV0IHNlbGVjdGVkVGVzdHNOYW1lID0gdGhpcy5wcm9wcy5MQUJfU1RBVEUuc2VsZWN0ZWRDcml0ZXJpYXMubWFwKHRlc3QgPT4gdGVzdC5uYW1lKVxuXHRcdGxldCBkYXRhID0ge1xuXHRcdFx0J0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdGb290ZXJUZXN0Q2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2Zvb3Rlci1sYWItY2xpY2tlZCcsICdTZWxlY3RlZFRlc3RJZHMnOiBzZWxlY3RlZFRlc3RJZHMuam9pbignLCcpIHx8ICcnLCAnU2VsZWN0ZWRUZXN0TmFtZSc6IHNlbGVjdGVkVGVzdHNOYW1lLmpvaW4oJywnKSwgJ1Rlc3RDb3VudCc6IHNlbGVjdGVkVGVzdElkcy5sZW5ndGggfHwgMCwgJ2Zyb20nOiAnZm9vdGVyV2lkZ2V0J1xuXHRcdH1cblx0XHRHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG5cdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goe1xuXHRcdFx0cGF0aG5hbWU6ICcvbGFiL3NlYXJjaHJlc3VsdHMnLFxuXHRcdFx0c3RhdGU6IHsgc2VhcmNoX2JhY2s6IHRydWUgfVxuXHRcdH0pXG5cdH1cblxuXHRvcGVuU2VhcmNoTW9yZSgpIHtcblx0XHRpZighdGhpcy5zdGF0ZS5zaG93X2Zvcm0pe1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7c2hvd19mb3JtOnRydWUsIGxlYWRUeXBlOjN9KVxuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdGxldCB3aGljaCA9ICdvcGQnXG5cdFx0aWYgKHRoaXMucHJvcHMuZm9vdGVyV2lkZ2V0ICYmIHRoaXMucHJvcHMuZm9vdGVyV2lkZ2V0LndpZGdldF90eXBlID09ICdMYWJUZXN0Jykge1xuXHRcdFx0d2hpY2ggPSAnbGFiJ1xuXHRcdH1cblx0XHR0aGlzLnByb3BzLnNlbGVjdFNlYXJjaFR5cGUod2hpY2gpXG5cdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9zZWFyY2gnKVxuXHR9XG5cblx0Z29Ub1BhY2thZ2UoKSB7XG5cdFx0aWYoIXRoaXMuc3RhdGUuc2hvd19mb3JtKXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe3Nob3dfZm9ybTp0cnVlLCBsZWFkVHlwZTo0fSlcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHRsZXQgZGF0YSA9IHtcblx0XHRcdCdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnU2hvd1BhY2thZ2VDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnc2hvdy1wYWNrYWdlLWNsaWNrZWQnLCAnZnJvbSc6ICdmb290ZXJXaWRnZXQnXG5cdFx0fVxuXHRcdEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cdFx0dGhpcy5wcm9wcy5zZXRQYWNrYWdlSWQoMTIyMjcsIHRydWUpXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3NlYXJjaHBhY2thZ2VzJylcblx0XHR9LCAxMDApXG5cdFx0Ly8gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy90aHlyb2NhcmUtYWFyb2d5YW0tcGFja2FnZXMnKVxuXHR9XG5cblx0Y2xvc2VMZWFkRm9ybShpc1Byb2NlZWQpe1xuXHRcdGxldCBwcm9jZWVkID0gZmFsc2Vcblx0XHRsZXQgZGF0YT17fVxuXHRcdGlmKGlzUHJvY2VlZCl7XG5cdFx0XHRpZih0aGlzLnN0YXRlLm5hbWUgPT0gJycpe1xuXHRcdFx0XHRTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIGVudGVyIG5hbWVcIiB9KVxuXHRcdFx0XHRyZXR1cm5cdFxuXHRcdFx0fVxuXHRcdFx0aWYodGhpcy5zdGF0ZS5waG9uZV9udW1iZXIgPT0gJycpe1xuXHRcdFx0XHRTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIGVudGVyIHBob25lIG51bWJlclwiIH0pXG5cdFx0XHRcdHJldHVyblx0XG5cdFx0XHR9XG5cdFx0XHRpZighdGhpcy5zdGF0ZS5jaXR5X2lkKXtcblx0XHRcdFx0cmV0dXJuXHRcblx0XHRcdH1cblx0XHRcdGlmKHRoaXMuc3RhdGUuY2l0eV9uYW1lID09ICcnKXtcblx0XHRcdFx0U25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBzZWxlY3QgY2l0eVwiIH0pXG5cdFx0XHRcdHJldHVyblx0XG5cdFx0XHR9XG5cdFx0XHRpZih0aGlzLnN0YXRlLnBob25lX251bWJlci5sZW5ndGggPCAxMCB8fCB0aGlzLnN0YXRlLnBob25lX251bWJlci5sZW5ndGggPiAxMCl7XG5cdFx0XHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgZW50ZXIgdmFsaWQgbnVtYmVyXCIgfSlcblx0XHRcdFx0cmV0dXJuXG5cdFx0XHR9XG5cdFx0XHRpZih0aGlzLnN0YXRlLm5hbWUgIT0nJyAmJiB0aGlzLnN0YXRlLnBob25lX251bWJlciAhPScnICYmIHRoaXMuc3RhdGUuY2l0eV9pZCAmJiB0aGlzLnN0YXRlLmNpdHlfbmFtZSAhPScnKXtcblx0XHRcdFx0ZGF0YS5uYW1lID0gdGhpcy5zdGF0ZS5uYW1lXG5cdFx0XHRcdGRhdGEucGhvbmVfbnVtYmVyID0gdGhpcy5zdGF0ZS5waG9uZV9udW1iZXJcblx0XHRcdFx0ZGF0YS5jaXR5X2lkID0gdGhpcy5zdGF0ZS5jaXR5X2lkXG5cdFx0XHRcdGRhdGEuY2l0eV9uYW1lID0gdGhpcy5zdGF0ZS5jaXR5X25hbWVcblx0XHRcdFx0aWYodGhpcy5zdGF0ZS5sZWFkVHlwZSAgPT0gMSl7XG5cdFx0XHRcdFx0ZGF0YS5sZWFkX3NvdXJjZSA9ICdtZWRfZG9jJ1xuXHRcdFx0XHR9ZWxzZSBpZih0aGlzLnN0YXRlLmxlYWRUeXBlICA9PSAyKXtcblx0XHRcdFx0XHRkYXRhLmxlYWRfc291cmNlID0gJ21lZF90ZXN0J1xuXHRcdFx0XHR9ZWxzZSBpZih0aGlzLnN0YXRlLmxlYWRUeXBlICA9PSAzKXtcblx0XHRcdFx0XHRkYXRhLmxlYWRfc291cmNlID0gJ21lZF9zZWFyY2htb3JlJ1xuXHRcdFx0XHR9ZWxzZSBpZih0aGlzLnN0YXRlLmxlYWRUeXBlICA9PSA0KXtcblx0XHRcdFx0XHRkYXRhLmxlYWRfc291cmNlID0gJ21lZF9wYWNrYWdlJ1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHR0aGlzLnByb3BzLnN1Ym1pdE1lZGljaW5lTGVhZChkYXRhLChyZXNwKT0+e1xuXHRcdFx0XHRcdGlmKHJlc3Ape1xuXHRcdFx0XHRcdFx0aWYodGhpcy5zdGF0ZS5sZWFkVHlwZSA9PSAxKXtcblx0XHRcdFx0XHRcdFx0dGhpcy5zZWxlY3REb2N0b3JTcGVjaWFsaXphdGlvbih0aGlzLnN0YXRlLmNsaWNrZWREYXRhKVxuXHRcdFx0XHRcdFx0fWVsc2UgaWYodGhpcy5zdGF0ZS5sZWFkVHlwZSA9PSAyKXtcblx0XHRcdFx0XHRcdFx0dGhpcy5zZWxlY3RUZXN0KHRoaXMuc3RhdGUuY2xpY2tlZERhdGEpXG5cdFx0XHRcdFx0XHR9ZWxzZSBpZih0aGlzLnN0YXRlLmxlYWRUeXBlID09IDMpe1xuXHRcdFx0XHRcdFx0XHR0aGlzLm9wZW5TZWFyY2hNb3JlKClcblx0XHRcdFx0XHRcdH1lbHNlIGlmKHRoaXMuc3RhdGUubGVhZFR5cGUgPT0gNCl7XG5cdFx0XHRcdFx0XHRcdHRoaXMuZ29Ub1BhY2thZ2UoKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9ZWxzZXtcblx0XHRcdGxldCBkYXRhID0ge1xuXHRcdFx0J0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdTa2lwTWVkTGVhZENsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnc2tpcC1tZWQtbGVhZC1jbGljaycsICdmcm9tJzogJ2Zvb3RlcldpZGdldCdcblx0XHRcdH1cblx0XHRcdEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cdFx0XHRpZih0aGlzLnN0YXRlLmxlYWRUeXBlID09IDEpe1xuXHRcdFx0XHR0aGlzLnNlbGVjdERvY3RvclNwZWNpYWxpemF0aW9uKHRoaXMuc3RhdGUuY2xpY2tlZERhdGEpXG5cdFx0XHR9ZWxzZSBpZih0aGlzLnN0YXRlLmxlYWRUeXBlID09IDIpe1xuXHRcdFx0XHR0aGlzLnNlbGVjdFRlc3QodGhpcy5zdGF0ZS5jbGlja2VkRGF0YSlcblx0XHRcdH1lbHNlIGlmKHRoaXMuc3RhdGUubGVhZFR5cGUgPT0gMyl7XG5cdFx0XHRcdHRoaXMub3BlblNlYXJjaE1vcmUoKVxuXHRcdFx0fWVsc2UgaWYodGhpcy5zdGF0ZS5sZWFkVHlwZSA9PSA0KXtcblx0XHRcdFx0dGhpcy5nb1RvUGFja2FnZSgpXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aGFuZGxlQ2hhbmdlKGV2ZW50KXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFtldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXBhcmFtJyldOiBldmVudC50YXJnZXQudmFsdWVcblx0XHR9KVx0XHRcblx0fVxuXG5cdGhhbmRsZUludXQodHlwZSwgZXZlbnQpIHtcbiAgICBcdHRyeXtcblx0ICAgIFx0bGV0IHNlYXJjaF9zdHJpbmcgPSBldmVudC50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKVxuXHQgICAgXHRsZXQgZmlsdGVyZWRfY2l0eV9saXN0ID0gW11cblx0ICAgIFx0dGhpcy5wcm9wcy51c2VyX2NpdGllcy5tYXAoKGNpdHkpPT57XG5cdCAgICBcdFx0bGV0IGNpdHlfbmFtZSA9IChjaXR5Lm5hbWUpLnRvTG93ZXJDYXNlKClcblx0ICAgIFx0XHRpZihjaXR5X25hbWUuaW5jbHVkZXMoc2VhcmNoX3N0cmluZykpe1xuXHQgICAgXHRcdFx0bGV0IGluZGV4ID0gY2l0eV9uYW1lLmluZGV4T2Yoc2VhcmNoX3N0cmluZylcblx0ICAgIFx0XHRcdGZpbHRlcmVkX2NpdHlfbGlzdC5wdXNoKHtpZDogY2l0eS5pZCwgbmFtZTogY2l0eS5uYW1lLCByYW5rOiBpbmRleH0pXG5cdCAgICBcdFx0fVxuXHQgICAgXHR9KVxuXHQgICAgXHRmaWx0ZXJlZF9jaXR5X2xpc3QgPSBmaWx0ZXJlZF9jaXR5X2xpc3Quc29ydCgoeCx5KT0+e1xuXHQgICAgXHRcdHJldHVybiB4LnJhbmsteS5yYW5rXG5cdCAgICBcdH0pXG5cdCAgICBcdHRoaXMuc2V0U3RhdGUoe1t0eXBlXTogZXZlbnQudGFyZ2V0LnZhbHVlLCBmaWx0ZXJlZF9jaXR5X2xpc3Q6IGZpbHRlcmVkX2NpdHlfbGlzdH0pXG5cdCAgICB9Y2F0Y2goZSkge1xuXG5cdCAgICB9XG4gICAgfVxuXG4gICAgb25Gb2N1c0luKCl7XG4gICAgXHR0aGlzLnNldFN0YXRlKHsgc2VhcmNoX2NpdHk6JycsIHNob3dDaXR5U2VhcmNoUG9wdXA6IHRydWUgfSlcbiAgICB9XG5cbiAgICBvbkZvY3VzT3V0KCl7XG4gICAgXHRzZXRUaW1lb3V0KCgpPT57XG4gICAgXHRcdHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hfY2l0eTogdGhpcy5zdGF0ZS5zZWxlY3RlZERvY3Rvciwgc2hvd0NpdHlTZWFyY2hQb3B1cDogZmFsc2UgfSlcdFxuICAgIFx0fSw1MDApXG4gICAgXHRcbiAgICB9XG5cbiAgICBjbGlja0RvY3Rvckxpc3QobmFtZSxpZCkge1xuICAgIFx0dGhpcy5zZXRTdGF0ZSh7J2NpdHlfbmFtZSc6IG5hbWUsICdjaXR5X2lkJzppZCwgZmlsdGVyZWRfY2l0eV9saXN0OltdLCBzZWFyY2hfY2l0eTogbmFtZSwgc2hvd0NpdHlTZWFyY2hQb3B1cDogZmFsc2V9KSBcbiAgICB9XG5cblx0cmVuZGVyKCkge1xuXHRcdGxldCB7IGZvb3RlcldpZGdldCB9ID0gdGhpcy5wcm9wc1xuXHRcdGxldCBmaWx0ZXJlZF9kb2N0b3IgPSB0aGlzLnN0YXRlLmZpbHRlcmVkX2NpdHlfbGlzdFxuXHRcdHJldHVybiAoXG5cdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRmb290ZXJXaWRnZXQgJiYgZm9vdGVyV2lkZ2V0LndpZGdldF90eXBlID9cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZG9jLXdkZ3QtbWVkLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0Zm9vdGVyV2lkZ2V0LndpZGdldF90eXBlID09ICdMYWJUZXN0JyA/XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRvYy13ZGd0LWJvb2stZG9jXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiZG9jQ2xvc0J0blwiIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9jcC9hc3NldHMvaW1nL2ljb25zL2Nsb3NlLnBuZ1wiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuaGFuZGxlQ2xvc2UoKX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cImRvYy13ZGd0LWhkbmdcIj57YCR7Zm9vdGVyV2lkZ2V0LnRpdGxlfSBAYH08c3Bhbj57Zm9vdGVyV2lkZ2V0LmRpc2NvdW50fTwvc3Bhbj48L2gzPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRvYy13ZGd0LWNoaXBzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0T2JqZWN0LmVudHJpZXMoZm9vdGVyV2lkZ2V0LnRlc3QpLm1hcCgoZGF0YSwga2V5KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8c3BhbiBrZXk9e2tleX0gb25DbGljaz17dGhpcy5zZWxlY3RUZXN0LmJpbmQodGhpcywgZGF0YSl9PntkYXRhWzBdfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInNyYy1zcG4tY2hwc1wiIG9uQ2xpY2s9e3RoaXMub3BlblNlYXJjaE1vcmUuYmluZCh0aGlzKX0+PGltZyBjbGFzc05hbWU9XCJzcmgtaW1nLWNocHNcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3NoYXBlLXNyY2gxLnN2Zyd9IC8+U2VhcmNoIG1vcmU8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0Zm9vdGVyV2lkZ2V0LndpZGdldF90eXBlID09ICdEb2N0b3JBcHBvaW50bWVudCcgP1xuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkb2Mtd2RndC1ib29rLWRvY1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImRvY0Nsb3NCdG5cIiBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vY3AvYXNzZXRzL2ltZy9pY29ucy9jbG9zZS5wbmdcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmhhbmRsZUNsb3NlKCl9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJkb2Mtd2RndC1oZG5nXCI+e2Ake2Zvb3RlcldpZGdldC50aXRsZX0gQGB9PHNwYW4+e2Zvb3RlcldpZGdldC5kaXNjb3VudH08L3NwYW4+PC9oMz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkb2Mtd2RndC1jaGlwc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdE9iamVjdC5lbnRyaWVzKGZvb3RlcldpZGdldC5zcGVjaWFsaXphdGlvbnMpLm1hcCgoZGF0YSwga2V5KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8c3BhbiBrZXk9e2tleX0gb25DbGljaz17dGhpcy5zZWxlY3REb2N0b3JTcGVjaWFsaXphdGlvbi5iaW5kKHRoaXMsIGRhdGEpfT57ZGF0YVswXX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJzcmMtc3BuLWNocHNcIiBvbkNsaWNrPXt0aGlzLm9wZW5TZWFyY2hNb3JlLmJpbmQodGhpcyl9PjxpbWcgY2xhc3NOYW1lPVwic3JoLWltZy1jaHBzXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9zaGFwZS1zcmNoMS5zdmcnfSAvPlNlYXJjaCBtb3JlPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0ey8qIHRoaXJkIGJhbm5lciAqL31cblx0XHRcdFx0XHRcdFx0ey8qIHtcblx0XHRcdFx0XHRcdFx0XHRmb290ZXJXaWRnZXQud2lkZ2V0X3R5cGUgPT0gJ0hlYWx0aFBhY2thZ2UnID9cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZG9jLXdkZ3QtYm9keWNoay1jb250XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiZG9jQ2xvc0J0blwiIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9jcC9hc3NldHMvaW1nL2ljb25zL2Nsb3NlLnBuZ1wiIG9uQ2xpY2s9eygpPT50aGlzLnByb3BzLmhhbmRsZUNsb3NlKCl9Lz5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBjdXJzb3ItcG50clwiIG9uQ2xpY2s9e3RoaXMuZ29Ub1BhY2thZ2UuYmluZCh0aGlzKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtN1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cIndkZ3QtYm9keWNoay1oZWRpbmdcIj57Zm9vdGVyV2lkZ2V0LnRpdGxlX2ZpcnN0fTwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJib2R5Y2hrLXByY1wiPkAgPHNwYW4gY2xhc3NOYW1lPVwiYmR5LXByXCI+e2Zvb3RlcldpZGdldC5wcmljZX08L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cImJkeS1vbmx5XCI+b25seTwvc3Bhbj4gPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiYmR5Y2hrLWR0bHNcIj57Zm9vdGVyV2lkZ2V0LnRpdGxlX2xhc3R9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTUgZC1mbGV4IGFsaWduLWl0ZW0tY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImJkeWNoay1pbWcgaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9kb2Mtd2QucG5nJ30gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdFx0fSAqL31cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGZvb3RlcldpZGdldC53aWRnZXRfdHlwZSA9PSAnSGVhbHRoUGFja2FnZScgP1xuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkb2Mtd2RndC1ib2R5Y2hrLWNvbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJkb2NDbG9zQnRuXCIgc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL2NwL2Fzc2V0cy9pbWcvaWNvbnMvY2xvc2UucG5nXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5oYW5kbGVDbG9zZSgpfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRvYy1iZHktY2hrLWhkbmdcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDQ+e2Zvb3RlcldpZGdldC50aXRsZV9maXJzdH08L2g0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgY3Vyc29yLXBudHIgbm8tZ3V0dGVyc1wiIG9uQ2xpY2s9e3RoaXMuZ29Ub1BhY2thZ2UuYmluZCh0aGlzKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtOFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkb2Mtd2RndC1wcmNrXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsvKjxzcGFuIGNsYXNzTmFtZT1cImRvYy13ZC1jdXRcIj7igrk3OTk8L3NwYW4+Ki99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImRvYy13ZC1ud1wiPntmb290ZXJXaWRnZXQucHJpY2V9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Lyo8cCBjbGFzc05hbWU9XCJkYy13ZC10c3RcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0NjAgdGVzdHNcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPiovfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZGMtd2QtdHN0LW5tXCI+e2Zvb3RlcldpZGdldC50aXRsZV9sYXN0fTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC00IGQtZmxleCBhbGlnbi1pdGVtLWNlbnRlciBqdXN0eWZ5LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJkYy13ZC1iZHktYnRuXCI+S25vdyBNb3JlPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0e3RoaXMuc3RhdGUuc2hvd19mb3JtPzxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLXBvcHVwLW92ZXJsYXkgY2FuY2VsLW92ZXJsYXktemluZGV4XCI+XG5cdFx0XHRcdFx0ICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZWwtcG9wdXAgaXBkLXBvcC13aWR0aFwiPlxuXHRcdFx0XHRcdCAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IHAtMTJcIj5cblx0XHRcdFx0XHQgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtcmVsYXRpdmVcIj5cblx0XHRcdFx0XHQgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpcGQtbmVlZEhlbHBcIj5UYWxrIHRvIG1lZGljYWwgZXhwZXJ0IGFuZCBnZXQgaGVscCB3aXRoIHlvdXIgYm9va2luZzwvcD5cblx0XHRcdFx0XHQgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlwZC1wb3Atc2NybFwiPlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXBkLWlucC1zZWN0aW9uXCI+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJubS1sc3QtaW5wdXRjbnRcIj5cblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICBcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPVwiXCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIipOYW1lXCIgYXV0b0NvbXBsZXRlPXtudWxsfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX0gZGF0YS1wYXJhbT0nbmFtZScgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0vPlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9XCJcIiBuYW1lPVwicGhvbmVfbnVtYmVyXCIgYXV0b0NvbXBsZXRlPVwibm9uZVwiIHBsYWNlaG9sZGVyPVwiKk1vYmlsZSBOdW1iZXJcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX0gZGF0YS1wYXJhbT1cInBob25lX251bWJlclwiIHZhbHVlPXt0aGlzLnN0YXRlLnBob25lX251bWJlcn0vPlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXBkLXNsZWN0cy1kb2NcIj5cblx0XHRcdFx0XHRcdFx0XHRcdCAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgYXV0b0NvbXBsZXRlPVwibm9uZVwiIHBsYWNlaG9sZGVyPSdTZWFyY2ggQ2l0eScgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW51dC5iaW5kKHRoaXMsICdzZWFyY2hfY2l0eScpfSBvbkZvY3VzID0ge3RoaXMub25Gb2N1c0luLmJpbmQodGhpcyl9IG9uQmx1cj17dGhpcy5vbkZvY3VzT3V0LmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaF9jaXR5fS8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5zaG93Q2l0eVNlYXJjaFBvcHVwP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkb2Mtc3JjaC1mbHRyXCIgb25DbGljaz17KGUpPT5lLnByZXZlbnREZWZhdWx0KCl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5maWx0ZXJlZF9jaXR5X2xpc3QgJiYgdGhpcy5zdGF0ZS5maWx0ZXJlZF9jaXR5X2xpc3QubGVuZ3RoP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUuZmlsdGVyZWRfY2l0eV9saXN0Lm1hcCgoZGF0YSwga2V5KT0+e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxwIGNsYXNzTmFtZT1cImN1cnNvci1wbnRyXCIga2V5PXtrZXl9IGlkPXtkYXRhLmlkfSBvbkNsaWNrPXsoZSk9Pntcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmNsaWNrRG9jdG9yTGlzdChkYXRhLm5hbWUsZGF0YS5pZCl9IH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtkYXRhLm5hbWV9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OnRoaXMuc3RhdGUuc2VhcmNoX2NpdHkgIT0gJycgPzxwPk5vIHJlc3VsdCBmb3VuZDwvcD46Jydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OicnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0ICA8L2Rpdj5cblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraXAtYnRuLXNnblwiPlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaXBkLWlucC1zYm10XCIgb25DbGljaz17dGhpcy5jbG9zZUxlYWRGb3JtLmJpbmQodGhpcyx0cnVlKX0+U3VibWl0PC9idXR0b24+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgPHAgb25DbGljaz17dGhpcy5jbG9zZUxlYWRGb3JtLmJpbmQodGhpcyxmYWxzZSl9PlNraXA8L3A+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdFx0ICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdFx0ICAgICAgPC9kaXY+XG5cdFx0XHRcdFx0ICAgPC9kaXY+XG5cdFx0XHRcdDwvZGl2PjpcIlwifVxuXHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyV2lkZ2V0VmlldzsiLCJpbXBvcnQgQXJ0aWNsZVZpZXcgZnJvbSAnLi9BcnRpY2xlJ1xuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlVmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5pdGlhbHNQaWN0dXJlIGZyb20gJy4uL2luaXRpYWxzUGljdHVyZSc7XG5cbmNsYXNzIEFydGljbGVBdXRob3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cblx0XHR9XG5cdH1cblxuXHRhdXRob3JDbGljayhlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0aWYgKHRoaXMucHJvcHMudXJsKSB7XG5cdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaCh0aGlzLnByb3BzLnVybClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9vcGQvZG9jdG9yLyR7dGhpcy5wcm9wcy5pZH1gKVxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLWF1dGhvci1kaXYgbXJiLTIwXCI+XG5cdFx0XHRcdDxJbml0aWFsc1BpY3R1cmUgY2xhc3NOYW1lPVwiaW5pdGlhbHNQaWN0dXJlLWRzIGluaXRpYWxzUGljdHVyZS1hdXRob3JcIiBuYW1lPXt0aGlzLnByb3BzLm5hbWV9IGhhc19pbWFnZT17ISF0aGlzLnByb3BzLnByb2ZpbGVJbWFnZX0gPlxuXHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiZmx0ci11c3ItaW1hZ2UgaW1nLXJvdW5kXCIgc3R5bGU9e3sgd2lkdGg6IDYwLCBoZWlnaHQ6IDYwLCBtYXJnaW5SaWdodDogOCwgZm9udFNpemU6IDEwIH19IHNyYz17dGhpcy5wcm9wcy5wcm9maWxlSW1hZ2V9IGFsdD17YERyLiAke3RoaXMucHJvcHMubmFtZX1gfSB0aXRsZT17YERyLiAke3RoaXMucHJvcHMubmFtZX1gfSAvPlxuXHRcdFx0XHQ8L0luaXRpYWxzUGljdHVyZT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhdXRob3ItZHRsc1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXV0aG9yLW5hbWUtZGl2XCI+XG5cdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyBtYXJnaW46ICcwIDZweCAwIDAnIH19PldyaXR0ZW4gQnkgOjwvc3Bhbj5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy51cmwgP1xuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2AvJHt0aGlzLnByb3BzLnVybH1gfSBvbkNsaWNrPXsoZSkgPT4gdGhpcy5hdXRob3JDbGljayhlKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtcHJpbWFyeVwiPntgRHIuICR7dGhpcy5wcm9wcy5uYW1lfWB9PC9oMz5cblx0XHRcdFx0XHRcdFx0XHQ8L2E+IDpcblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPXtgL29wZC9kb2N0b3IvJHt0aGlzLnByb3BzLmlkfWB9IG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmF1dGhvckNsaWNrKGUpfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1wcmltYXJ5XCI+e2BEci4gJHt0aGlzLnByb3BzLm5hbWV9YH08L2gzPlxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImF1dGhvci1leHAtZGl2XCI+XG5cdFx0XHRcdFx0XHQ8c3Bhbj57dGhpcy5wcm9wcy5zcGVjaWFsaXR5fSB8IHt0aGlzLnByb3BzLmV4cGVyaWVuY2V9IHllYXJzIG9mIGV4cGVyaWVuY2U8L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5wdWJsaXNoZWREYXRlID9cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLWRhdGVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5QdWJsaXNoZWQgRGF0ZSA6IHt0aGlzLnByb3BzLnB1Ymxpc2hlZERhdGV9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj4gOiAnJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZUF1dGhvciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xuXG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cIm1haW5Qb3B1cE92ZXJsYXlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3BVcE1haW5Db250YWluZXJcIj5cbiAgICAgICAgICAgIHtwcm9wcy5yZXNwfVxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICApXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcblxuY2xhc3MgQm9va2luZ0NvbmZpcm1hdGlvblBvcHVwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1wb3B1cC1vdmVybGF5XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLXBvcHVwIHZpcC1zcmNoLXBvcC1taW5cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBwYWRpaW5nLXNyY2gtZWxcIj5cblx0XHRcdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInNyY2gtZWwtY29uZW50XCI+e3RoaXMucHJvcHMuaXNfZ29sZD8nQ29uZmlybSBkZWxldGUgbWVtYmVyPyc6J0RvIHlvdSB3aXNoIHRvIGNvbnRpbnVlPyd9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLWJ0bi1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5wcmljZUNvbmZpcm1hdGlvblBvcHVwLmJpbmQodGhpcywgdHJ1ZSl9PlllczwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLnByaWNlQ29uZmlybWF0aW9uUG9wdXAuYmluZCh0aGlzLCBmYWxzZSl9Pk5vPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdC8qKHRoaXMucHJvcHMuaXNfdmlwX2FwcGxpY2FibGUgfHwgdGhpcy5wcm9wcy5pc19pbnN1cmFuY2VfYXBwbGljYWJsZSkgfHwgdGhpcy5wcm9wcy5pc0NhcnQgfHwgdGhpcy5wcm9wcy5pc0xhYj9cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IHBhZGlpbmctc3JjaC1lbFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmlGcmFtZVBvcHVwID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtcnQtMjAgdGV4dC1jZW50ZXIgZnctNTAwXCI+V2UgYXJlIHJlZGlyZWN0aW5nIHlvdSB0byBQaGFybUVhc3kgd2Vic2l0ZSBpbiAzIHNlY29uZHMuLi48L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic3JjaC1lbC1jb25lbnRcIj5EbyB5b3Ugd2lzaCB0byBjb250aW51ZT88L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1idG4tY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5wcmljZUNvbmZpcm1hdGlvblBvcHVwLmJpbmQodGhpcywgdHJ1ZSl9PlllczwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMucHJpY2VDb25maXJtYXRpb25Qb3B1cC5iaW5kKHRoaXMsIGZhbHNlKX0+Tm88L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDpcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ2aXAtYmFubmVyLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInZpcC1iYW5uZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZCB2cC1jbHMtaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXAtcG9wLWNscy5zdmcnfSBvbkNsaWNrPXt0aGlzLnByb3BzLmJhbm5lckNvbmZpcm1hdGlvblBvcHVwLmJpbmQodGhpcyxmYWxzZSl9Lz5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZCB2cC1ibnItaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXAtaW1nLXBvcC5wbmcnfSAvPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9wLWJuci10eHRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInZwLWJuci1rbm93LXR4dFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIFx0J0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdCb29raW5nUGFnZVZpcEJhbm5lckNsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnYm9va2luZ3BhZ2UtdmlwLWNsaWNrJ1xuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgIFx0fVxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgIFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy92aXAtY2x1Yi1kZXRhaWxzP3NvdXJjZT1ib29raW5ncGFnZSZsZWFkX3NvdXJjZT1ib29raW5ncGFnZScpIH19Pktub3cgbW9yZSBhYm91dCBEb2NwcmltZSBWSVA8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ2cC1ibnItc3ViLXR4dFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuYmFubmVyQ29uZmlybWF0aW9uUG9wdXAuYmluZCh0aGlzLHRydWUpfT5Ob3QgSW50ZXJlc3RlZD8gQ29udGludWUgQm9va2luZyA8aW1nIHN0eWxlPXt7d2lkdGg6JzdweCd9fSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcC1yZ2h0LnN2Zyd9IC8+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PiovXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29raW5nQ29uZmlybWF0aW9uUG9wdXAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgZmV0Y2hBcnRpY2xlLCBnZXRTcGVjaWFsaXR5Rm9vdGVyRGF0YSwgcG9zdENvbW1lbnQsIGdldE9mZmVyTGlzdCwgdG9nZ2xlT1BEQ3JpdGVyaWEsIHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhLCBjbG9uZUNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLCBzZWxlY3RTZWFyY2hUeXBlLCBtZXJnZUxBQlN0YXRlLCBtZXJnZU9QRFN0YXRlLCBzZXRQYWNrYWdlSWQsIHN1Ym1pdE1lZGljaW5lTGVhZCwgY2l0aWVzRGF0YSwgaUZyYW1lU3RhdGUsTm9uSXBkQm9va2luZ0xlYWQsIGJ1aWxkQXJ0aWNsZVN0b3JlRnJvbVJlZGlzIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcblxuaW1wb3J0IEFydGljbGVWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9hcnRpY2xlJ1xuXG5jbGFzcyBBcnRpY2xlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICBzdGF0aWMgbG9hZERhdGEoc3RvcmUsIG1hdGNoKSB7XG4gICAgICAgIGxldCBhcnRpY2xlSWQgPSBtYXRjaC51cmxcbiAgICAgICAgaWYgKGFydGljbGVJZCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBhcnRpY2xlSWQgPSBhcnRpY2xlSWQudG9Mb3dlckNhc2UoKS5zdWJzdHJpbmcoMSwgYXJ0aWNsZUlkLmxlbmd0aClcbiAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChmZXRjaEFydGljbGUoYXJ0aWNsZUlkLCBmYWxzZSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2V0U3BlY2lhbGl0eUZvb3RlckRhdGEoKGZvb3RlckRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICByZXNvbHZlKHsgZm9vdGVyRGF0YTogKGZvb3RlckRhdGEgfHwgbnVsbCksICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSkoKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7IGFydGljbGVEYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHsgc3RhdHVzOiA0MDR9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgYnVpbGRTdGF0ZUZyb21SZWRpcyhyZXNwLCBzdG9yZSl7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChidWlsZEFydGljbGVTdG9yZUZyb21SZWRpcyhyZXNwLCAocmVzcCk9PntcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KSlcbiAgICAgICAgfSkuY2F0Y2goKGUpPT57XG4gICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuY2l0aWVzRGF0YSgpXG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgcm91dGVyOiAoKSA9PiBudWxsXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QXJ0aWNsZVZpZXcgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHBhc3NlZFByb3BzKSA9PiB7XG4gICAgLyoqXG4gICAgICogaW5pdGlhbFNlcnZlckRhdGEgaXMgc2VydmVyIHJlbmRlcmVkIGFzeW5jIGRhdGEgcmVxdWlyZWQgYnVpbGQgaHRtbCBvbiBzZXJ2ZXIuIFxuICAgICAqL1xuICAgIGxldCBpbml0aWFsU2VydmVyRGF0YSA9IG51bGxcbiAgICBsZXQgeyBzdGF0aWNDb250ZXh0IH0gPSBwYXNzZWRQcm9wc1xuICAgIGlmIChzdGF0aWNDb250ZXh0ICYmIHN0YXRpY0NvbnRleHQuZGF0YSkge1xuICAgICAgICBpbml0aWFsU2VydmVyRGF0YSA9IHN0YXRpY0NvbnRleHQuZGF0YVxuICAgIH1cbiAgICBsZXQge1xuICAgICAgICBwcm9maWxlcywgZGVmYXVsdFByb2ZpbGUsIG9mZmVyTGlzdCwgYXJ0aWNsZURhdGEsIHVzZXJfY2l0aWVzLCBpRnJhbWVVcmxzLGNvbW1vbl91dG1fdGFnc1xuICAgIH0gPSBzdGF0ZS5VU0VSXG5cbiAgICBsZXQge1xuICAgICAgICBzZWxlY3RlZExvY2F0aW9uXG4gICAgfSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9PUERcblxuICAgIGxldCBPUERfU1RBVEUgPSAoKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHNlbGVjdGVkTG9jYXRpb24sXG4gICAgICAgICAgICBmaWx0ZXJDcml0ZXJpYVxuXG4gICAgICAgIH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfT1BEXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlbGVjdGVkTG9jYXRpb24sXG4gICAgICAgICAgICBmaWx0ZXJDcml0ZXJpYVxuICAgICAgICB9XG5cbiAgICB9KSgpXG5cbiAgICBsZXQgTEFCX1NUQVRFID0gKCgpID0+IHtcblxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBzZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICAgICAgZmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgICAgICBzZWxlY3RlZENyaXRlcmlhc1xuXG4gICAgICAgIH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfTEFCU1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICAgICAgZmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgICAgICBzZWxlY3RlZENyaXRlcmlhc1xuICAgICAgICB9XG5cbiAgICB9KSgpXG5cbiAgICBsZXQge1xuICAgICAgICBzdGF0aWNfZm9vdGVyX2RhdGFcbiAgICB9ID0gc3RhdGUuRE9DVE9SX1NFQVJDSFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdGlhbFNlcnZlckRhdGEsXG4gICAgICAgIHByb2ZpbGVzLCBkZWZhdWx0UHJvZmlsZSwgb2ZmZXJMaXN0LCBzZWxlY3RlZExvY2F0aW9uLCBhcnRpY2xlRGF0YSwgT1BEX1NUQVRFLCBMQUJfU1RBVEUsIHVzZXJfY2l0aWVzLCBpRnJhbWVVcmxzLGNvbW1vbl91dG1fdGFncywgc3RhdGljX2Zvb3Rlcl9kYXRhXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBmZXRjaEFydGljbGU6IChpZCwgcHJldmlldywgY2IpID0+IGRpc3BhdGNoKGZldGNoQXJ0aWNsZShpZCwgcHJldmlldywgY2IpKSxcbiAgICAgICAgZ2V0U3BlY2lhbGl0eUZvb3RlckRhdGE6IChjYikgPT4gZGlzcGF0Y2goZ2V0U3BlY2lhbGl0eUZvb3RlckRhdGEoY2IpKSxcbiAgICAgICAgcG9zdENvbW1lbnQ6IChjb21tZW50LCBjYikgPT4gZGlzcGF0Y2gocG9zdENvbW1lbnQoY29tbWVudCwgY2IpKSxcbiAgICAgICAgZ2V0T2ZmZXJMaXN0OiAobGF0LCBsb25nKSA9PiBkaXNwYXRjaChnZXRPZmZlckxpc3QobGF0LCBsb25nKSksXG4gICAgICAgIHRvZ2dsZU9QRENyaXRlcmlhOiAodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkLCBmaWx0ZXIpID0+IGRpc3BhdGNoKHRvZ2dsZU9QRENyaXRlcmlhKHR5cGUsIGNyaXRlcmlhLCBmb3JjZUFkZCwgZmlsdGVyKSksXG4gICAgICAgIHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhOiAodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkLCBmaWx0ZXIpID0+IGRpc3BhdGNoKHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKHR5cGUsIGNyaXRlcmlhLCBmb3JjZUFkZCwgZmlsdGVyKSksXG4gICAgICAgIGNsb25lQ29tbW9uU2VsZWN0ZWRDcml0ZXJpYXM6IChzZWxlY3RlZENyaXRlcmlhcykgPT4gZGlzcGF0Y2goY2xvbmVDb21tb25TZWxlY3RlZENyaXRlcmlhcyhzZWxlY3RlZENyaXRlcmlhcykpLFxuICAgICAgICBzZWxlY3RTZWFyY2hUeXBlOiAodHlwZSkgPT4gZGlzcGF0Y2goc2VsZWN0U2VhcmNoVHlwZSh0eXBlKSksXG4gICAgICAgIG1lcmdlTEFCU3RhdGU6IChzdGF0ZSwgZmV0Y2hOZXdSZXN1bHRzKSA9PiBkaXNwYXRjaChtZXJnZUxBQlN0YXRlKHN0YXRlLCBmZXRjaE5ld1Jlc3VsdHMpKSxcbiAgICAgICAgbWVyZ2VPUERTdGF0ZTogKHN0YXRlLCBmZXRjaE5ld1Jlc3VsdHMpID0+IGRpc3BhdGNoKG1lcmdlT1BEU3RhdGUoc3RhdGUsIGZldGNoTmV3UmVzdWx0cykpLFxuICAgICAgICBzZXRQYWNrYWdlSWQ6IChwYWNrYWdlX2lkLCBpc0hvbWVQYWdlKSA9PiBkaXNwYXRjaChzZXRQYWNrYWdlSWQocGFja2FnZV9pZCwgaXNIb21lUGFnZSkpLFxuICAgICAgICBzdWJtaXRNZWRpY2luZUxlYWQ6IChkYXRhLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2goc3VibWl0TWVkaWNpbmVMZWFkKGRhdGEsIGNhbGxiYWNrKSksXG4gICAgICAgIGNpdGllc0RhdGE6ICgpID0+IGRpc3BhdGNoKGNpdGllc0RhdGEoKSksXG4gICAgICAgIGlGcmFtZVN0YXRlOiAodXJsLCBlbXB0eVVybHMpID0+IGRpc3BhdGNoKGlGcmFtZVN0YXRlKHVybCwgZW1wdHlVcmxzKSksXG4gICAgICAgIE5vbklwZEJvb2tpbmdMZWFkOihkYXRhLGNiKSA9PmRpc3BhdGNoKE5vbklwZEJvb2tpbmdMZWFkKGRhdGEsIGNiKSksXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFydGljbGUpO1xuIiwiLy8gLmRpcm5hbWUsIC5iYXNlbmFtZSwgYW5kIC5leHRuYW1lIG1ldGhvZHMgYXJlIGV4dHJhY3RlZCBmcm9tIE5vZGUuanMgdjguMTEuMSxcbi8vIGJhY2twb3J0ZWQgYW5kIHRyYW5zcGxpdGVkIHdpdGggQmFiZWwsIHdpdGggYmFja3dhcmRzLWNvbXBhdCBmaXhlc1xuXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXG4vLyBtdXN0IGJlIG5vIHNsYXNoZXMsIGVtcHR5IGVsZW1lbnRzLCBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxuLy8gKHNvIGFsc28gbm8gbGVhZGluZyBhbmQgdHJhaWxpbmcgc2xhc2hlcyAtIGl0IGRvZXMgbm90IGRpc3Rpbmd1aXNoXG4vLyByZWxhdGl2ZSBhbmQgYWJzb2x1dGUgcGF0aHMpXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcbiAgLy8gaWYgdGhlIHBhdGggdHJpZXMgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIGB1cGAgZW5kcyB1cCA+IDBcbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhcnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGxhc3QgPSBwYXJ0c1tpXTtcbiAgICBpZiAobGFzdCA9PT0gJy4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlIHBhdGggaXMgYWxsb3dlZCB0byBnbyBhYm92ZSB0aGUgcm9vdCwgcmVzdG9yZSBsZWFkaW5nIC4uc1xuICBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcbiAgICBmb3IgKDsgdXAtLTsgdXApIHtcbiAgICAgIHBhcnRzLnVuc2hpZnQoJy4uJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG4vLyBwYXRoLnJlc29sdmUoW2Zyb20gLi4uXSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlc29sdmUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlc29sdmVkUGF0aCA9ICcnLFxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMSAmJiAhcmVzb2x2ZWRBYnNvbHV0ZTsgaS0tKSB7XG4gICAgdmFyIHBhdGggPSAoaSA+PSAwKSA/IGFyZ3VtZW50c1tpXSA6IHByb2Nlc3MuY3dkKCk7XG5cbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcbiAgICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH0gZWxzZSBpZiAoIXBhdGgpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJlc29sdmVkUGF0aCA9IHBhdGggKyAnLycgKyByZXNvbHZlZFBhdGg7XG4gICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IHBhdGguY2hhckF0KDApID09PSAnLyc7XG4gIH1cblxuICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCwgYnV0XG4gIC8vIGhhbmRsZSByZWxhdGl2ZSBwYXRocyB0byBiZSBzYWZlIChtaWdodCBoYXBwZW4gd2hlbiBwcm9jZXNzLmN3ZCgpIGZhaWxzKVxuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICByZXNvbHZlZFBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocmVzb2x2ZWRQYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIXJlc29sdmVkQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICByZXR1cm4gKChyZXNvbHZlZEFic29sdXRlID8gJy8nIDogJycpICsgcmVzb2x2ZWRQYXRoKSB8fCAnLic7XG59O1xuXG4vLyBwYXRoLm5vcm1hbGl6ZShwYXRoKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHZhciBpc0Fic29sdXRlID0gZXhwb3J0cy5pc0Fic29sdXRlKHBhdGgpLFxuICAgICAgdHJhaWxpbmdTbGFzaCA9IHN1YnN0cihwYXRoLCAtMSkgPT09ICcvJztcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihwYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIWlzQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICBpZiAoIXBhdGggJiYgIWlzQWJzb2x1dGUpIHtcbiAgICBwYXRoID0gJy4nO1xuICB9XG4gIGlmIChwYXRoICYmIHRyYWlsaW5nU2xhc2gpIHtcbiAgICBwYXRoICs9ICcvJztcbiAgfVxuXG4gIHJldHVybiAoaXNBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHBhdGg7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmlzQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5qb2luID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwYXRocyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gIHJldHVybiBleHBvcnRzLm5vcm1hbGl6ZShmaWx0ZXIocGF0aHMsIGZ1bmN0aW9uKHAsIGluZGV4KSB7XG4gICAgaWYgKHR5cGVvZiBwICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGguam9pbiBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9XG4gICAgcmV0dXJuIHA7XG4gIH0pLmpvaW4oJy8nKSk7XG59O1xuXG5cbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlbGF0aXZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcbiAgZnJvbSA9IGV4cG9ydHMucmVzb2x2ZShmcm9tKS5zdWJzdHIoMSk7XG4gIHRvID0gZXhwb3J0cy5yZXNvbHZlKHRvKS5zdWJzdHIoMSk7XG5cbiAgZnVuY3Rpb24gdHJpbShhcnIpIHtcbiAgICB2YXIgc3RhcnQgPSAwO1xuICAgIGZvciAoOyBzdGFydCA8IGFyci5sZW5ndGg7IHN0YXJ0KyspIHtcbiAgICAgIGlmIChhcnJbc3RhcnRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgdmFyIGVuZCA9IGFyci5sZW5ndGggLSAxO1xuICAgIGZvciAoOyBlbmQgPj0gMDsgZW5kLS0pIHtcbiAgICAgIGlmIChhcnJbZW5kXSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChzdGFydCA+IGVuZCkgcmV0dXJuIFtdO1xuICAgIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSk7XG4gIH1cblxuICB2YXIgZnJvbVBhcnRzID0gdHJpbShmcm9tLnNwbGl0KCcvJykpO1xuICB2YXIgdG9QYXJ0cyA9IHRyaW0odG8uc3BsaXQoJy8nKSk7XG5cbiAgdmFyIGxlbmd0aCA9IE1hdGgubWluKGZyb21QYXJ0cy5sZW5ndGgsIHRvUGFydHMubGVuZ3RoKTtcbiAgdmFyIHNhbWVQYXJ0c0xlbmd0aCA9IGxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChmcm9tUGFydHNbaV0gIT09IHRvUGFydHNbaV0pIHtcbiAgICAgIHNhbWVQYXJ0c0xlbmd0aCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB2YXIgb3V0cHV0UGFydHMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIG91dHB1dFBhcnRzLnB1c2goJy4uJyk7XG4gIH1cblxuICBvdXRwdXRQYXJ0cyA9IG91dHB1dFBhcnRzLmNvbmNhdCh0b1BhcnRzLnNsaWNlKHNhbWVQYXJ0c0xlbmd0aCkpO1xuXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCcvJyk7XG59O1xuXG5leHBvcnRzLnNlcCA9ICcvJztcbmV4cG9ydHMuZGVsaW1pdGVyID0gJzonO1xuXG5leHBvcnRzLmRpcm5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICBpZiAocGF0aC5sZW5ndGggPT09IDApIHJldHVybiAnLic7XG4gIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KDApO1xuICB2YXIgaGFzUm9vdCA9IGNvZGUgPT09IDQ3IC8qLyovO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDE7IC0taSkge1xuICAgIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgZW5kID0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuIGhhc1Jvb3QgPyAnLycgOiAnLic7XG4gIGlmIChoYXNSb290ICYmIGVuZCA9PT0gMSkge1xuICAgIC8vIHJldHVybiAnLy8nO1xuICAgIC8vIEJhY2t3YXJkcy1jb21wYXQgZml4OlxuICAgIHJldHVybiAnLyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2UoMCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGJhc2VuYW1lKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcblxuICB2YXIgc3RhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICB2YXIgaTtcblxuICBmb3IgKGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgaWYgKHBhdGguY2hhckNvZGVBdChpKSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBwYXRoIGNvbXBvbmVudFxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuICcnO1xuICByZXR1cm4gcGF0aC5zbGljZShzdGFydCwgZW5kKTtcbn1cblxuLy8gVXNlcyBhIG1peGVkIGFwcHJvYWNoIGZvciBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSwgYXMgZXh0IGJlaGF2aW9yIGNoYW5nZWRcbi8vIGluIG5ldyBOb2RlLmpzIHZlcnNpb25zLCBzbyBvbmx5IGJhc2VuYW1lKCkgYWJvdmUgaXMgYmFja3BvcnRlZCBoZXJlXG5leHBvcnRzLmJhc2VuYW1lID0gZnVuY3Rpb24gKHBhdGgsIGV4dCkge1xuICB2YXIgZiA9IGJhc2VuYW1lKHBhdGgpO1xuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xuICB9XG4gIHJldHVybiBmO1xufTtcblxuZXhwb3J0cy5leHRuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgdmFyIHN0YXJ0RG90ID0gLTE7XG4gIHZhciBzdGFydFBhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICAvLyBUcmFjayB0aGUgc3RhdGUgb2YgY2hhcmFjdGVycyAoaWYgYW55KSB3ZSBzZWUgYmVmb3JlIG91ciBmaXJzdCBkb3QgYW5kXG4gIC8vIGFmdGVyIGFueSBwYXRoIHNlcGFyYXRvciB3ZSBmaW5kXG4gIHZhciBwcmVEb3RTdGF0ZSA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0UGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBleHRlbnNpb25cbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICAgIGlmIChjb2RlID09PSA0NiAvKi4qLykge1xuICAgICAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCBkb3QsIG1hcmsgaXQgYXMgdGhlIHN0YXJ0IG9mIG91ciBleHRlbnNpb25cbiAgICAgICAgaWYgKHN0YXJ0RG90ID09PSAtMSlcbiAgICAgICAgICBzdGFydERvdCA9IGk7XG4gICAgICAgIGVsc2UgaWYgKHByZURvdFN0YXRlICE9PSAxKVxuICAgICAgICAgIHByZURvdFN0YXRlID0gMTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0RG90ICE9PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBhbmQgbm9uLXBhdGggc2VwYXJhdG9yIGJlZm9yZSBvdXIgZG90LCBzbyB3ZSBzaG91bGRcbiAgICAgIC8vIGhhdmUgYSBnb29kIGNoYW5jZSBhdCBoYXZpbmcgYSBub24tZW1wdHkgZXh0ZW5zaW9uXG4gICAgICBwcmVEb3RTdGF0ZSA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGFydERvdCA9PT0gLTEgfHwgZW5kID09PSAtMSB8fFxuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBjaGFyYWN0ZXIgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBkb3RcbiAgICAgIHByZURvdFN0YXRlID09PSAwIHx8XG4gICAgICAvLyBUaGUgKHJpZ2h0LW1vc3QpIHRyaW1tZWQgcGF0aCBjb21wb25lbnQgaXMgZXhhY3RseSAnLi4nXG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMSAmJiBzdGFydERvdCA9PT0gZW5kIC0gMSAmJiBzdGFydERvdCA9PT0gc3RhcnRQYXJ0ICsgMSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZShzdGFydERvdCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGZpbHRlciAoeHMsIGYpIHtcbiAgICBpZiAoeHMuZmlsdGVyKSByZXR1cm4geHMuZmlsdGVyKGYpO1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChmKHhzW2ldLCBpLCB4cykpIHJlcy5wdXNoKHhzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLy8gU3RyaW5nLnByb3RvdHlwZS5zdWJzdHIgLSBuZWdhdGl2ZSBpbmRleCBkb24ndCB3b3JrIGluIElFOFxudmFyIHN1YnN0ciA9ICdhYicuc3Vic3RyKC0xKSA9PT0gJ2InXG4gICAgPyBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7IHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pIH1cbiAgICA6IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHtcbiAgICAgICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSBzdHIubGVuZ3RoICsgc3RhcnQ7XG4gICAgICAgIHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pO1xuICAgIH1cbjtcbiIsImltcG9ydCBfTWVtb3J5Um91dGVyIGZyb20gXCIuL01lbW9yeVJvdXRlclwiO1xuZXhwb3J0IHsgX01lbW9yeVJvdXRlciBhcyBNZW1vcnlSb3V0ZXIgfTtcbmltcG9ydCBfUHJvbXB0IGZyb20gXCIuL1Byb21wdFwiO1xuZXhwb3J0IHsgX1Byb21wdCBhcyBQcm9tcHQgfTtcbmltcG9ydCBfUmVkaXJlY3QgZnJvbSBcIi4vUmVkaXJlY3RcIjtcbmV4cG9ydCB7IF9SZWRpcmVjdCBhcyBSZWRpcmVjdCB9O1xuaW1wb3J0IF9Sb3V0ZSBmcm9tIFwiLi9Sb3V0ZVwiO1xuZXhwb3J0IHsgX1JvdXRlIGFzIFJvdXRlIH07XG5pbXBvcnQgX1JvdXRlciBmcm9tIFwiLi9Sb3V0ZXJcIjtcbmV4cG9ydCB7IF9Sb3V0ZXIgYXMgUm91dGVyIH07XG5pbXBvcnQgX1N0YXRpY1JvdXRlciBmcm9tIFwiLi9TdGF0aWNSb3V0ZXJcIjtcbmV4cG9ydCB7IF9TdGF0aWNSb3V0ZXIgYXMgU3RhdGljUm91dGVyIH07XG5pbXBvcnQgX1N3aXRjaCBmcm9tIFwiLi9Td2l0Y2hcIjtcbmV4cG9ydCB7IF9Td2l0Y2ggYXMgU3dpdGNoIH07XG5pbXBvcnQgX2dlbmVyYXRlUGF0aCBmcm9tIFwiLi9nZW5lcmF0ZVBhdGhcIjtcbmV4cG9ydCB7IF9nZW5lcmF0ZVBhdGggYXMgZ2VuZXJhdGVQYXRoIH07XG5pbXBvcnQgX21hdGNoUGF0aCBmcm9tIFwiLi9tYXRjaFBhdGhcIjtcbmV4cG9ydCB7IF9tYXRjaFBhdGggYXMgbWF0Y2hQYXRoIH07XG5pbXBvcnQgX3dpdGhSb3V0ZXIgZnJvbSBcIi4vd2l0aFJvdXRlclwiO1xuZXhwb3J0IHsgX3dpdGhSb3V0ZXIgYXMgd2l0aFJvdXRlciB9OyJdLCJzb3VyY2VSb290IjoiIn0=