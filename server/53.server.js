exports.ids = [53];
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

var _react = __webpack_require__(/*! react */ "react");

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

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

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

const queryString = __webpack_require__(/*! query-string */ "query-string");
// import RelatedArticles from './RelatedArticles'

class Article extends _react2.default.Component {
    constructor(props) {
        super(props);

        this.handleChange = e => {
            this.setState({ phone_number: e.target.value });
        };

        this.navigateToGold = e => {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'ArticleGoldBannerClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'article-gold-banner-clicked'
            };
            _gtm2.default.sendEvent({ data: data });
            this.props.history.push('/vip-gold-details?is_gold=true&source=mobile-medicine-banner-gold-clicked&lead_source=Docprime');
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

        let footerData = null;

        let articleData = null;
        let articleLoaded = false;

        if (this.props.initialServerData) {
            articleData = this.props.initialServerData.articleData;
            articleLoaded = true;
        }

        let articleId = this.props.match.url;
        articleId = articleId.toLowerCase().substring(1, articleId.length);
        if (this.props.articleData && this.props.articleData[articleId]) {
            articleData = this.props.articleData[articleId];
            articleLoaded = true;
        }

        this.state = {
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
            isMedicinePage: this.props.match.url.includes('-mddp'),
            phone_number: "",
            inValidPhno: false
        };
    }

    componentDidMount() {
        if (!this.state.articleData) {
            this.getArticleData();
        }
        if (window) {
            window.scrollTo(0, 0);
        }
        if (this.props.match.path.split('-')[1] === 'mddp') {
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
        this.setState({ hideFooterWidget: false, showPharmacyAtClient: true });
        setTimeout(() => {
            this.setState({ showPharmacyFooter: true });
        }, 6000);

        if (this.state.isMedicinePage) {
            setTimeout(() => {
                this.setState({ showMainPopup: true });
            }, 4000);
        }
        if (window && this.props.match.path.split('-')[1] === 'mddp') {
            window.addEventListener('scroll', this.scrollHandler);
        }

        let sessionId = sessionStorage.getItem('iFrameId');
        if (!sessionId) {
            this.props.iFrameState('', true);
        }
    }

    scrollHandler() {
        setTimeout(() => {
            if (document) {
                let elem = document.getElementById('medicine-btn');
                let elemContainer = document.getElementById('medicine-btn-div');

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

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler);
    }

    getArticleData() {
        let articleId = this.props.match.url;
        if (articleId) {
            articleId = articleId.toLowerCase().substring(1, articleId.length);
            this.props.fetchArticle(articleId, this.props.location.search.includes('preview'), (err, data) => {
                if (!err /*&& !this.state.articleData*/) {
                        this.setState({ articleData: data, articleLoaded: true, replyOpenFor: '' });
                    } else {}
            });
        }
    }

    onHomeClick(event, link) {
        event.preventDefault();
        this.props.history.push(link);
    }

    facebookClick() {
        if (window) {
            window.open('https://www.facebook.com/sharer/sharer.php?u=' + document.URL, 'facebook-popup', 'height=350,width=600');
        }
    }

    twitterClick() {
        if (window) {
            window.open('https://twitter.com/share?url=' + document.URL, 'twitter-popup', 'height=350,width=600');
        }
    }

    linkedinClick() {
        if (window) {
            window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${document.URL}&title=${this.state.articleData.title.split('|')[0]}&source=docprime.com`);
        }
    }

    whatsappClick() {
        if (window) {
            window.open(`https://wa.me/?text=${document.URL}`);
        }
    }

    commentReplyClicked(id) {
        this.setState({ replyOpenFor: id });
    }

    postReply(e) {
        e.preventDefault();
        if (!this.state.comment) {
            setTimeout(() => {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please write valid comment" });
            }, 500);
            return;
        }
        let postData = {
            article: this.state.articleData.id,
            comment: this.state.comment,
            name: Object.values(this.props.profiles).length && this.props.profiles[this.props.defaultProfile] ? this.props.profiles[this.props.defaultProfile].name : '',
            email: Object.values(this.props.profiles).length && this.props.profiles[this.props.defaultProfile] ? this.props.profiles[this.props.defaultProfile].email : '',
            parent: this.state.replyOpenFor
        };
        this.props.postComment(postData, (error, data) => {
            if (data) {
                this.setState({ comment: '' });
                this.getArticleData();
                setTimeout(() => {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Comment Posted Sucessfully, Awaiting moderation" });
                }, 500);
            } else {
                setTimeout(() => {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Could not post your comment, Try again!" });
                }, 500);
            }
        });
        return;
    }

    handleInputComment(e) {
        this.setState({ comment: e.target.value });
    }

    getCityList(key) {

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
                            this.state.searchCities.map((result, i) => {
                                return _react2.default.createElement(
                                    'li',
                                    { key: i },
                                    _react2.default.createElement(
                                        'p',
                                        { className: '', onClick: this.selectLocation.bind(this, result) },
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

    getCityListLayout(searchResults = [], searchParams = {}) {
        let specialization_id = '';
        let searchWidget = '';
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

    selectLocation(city) {
        this.child.selectLocation(city, () => {

            this.setState({ searchCities: [] });
            let gtmData = {
                'Category': 'ConsumerApp', 'Action': 'ArticlePageLocationSelected', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'article-page-location-selected', selectedId: this.state.specialization_id || ''
            };
            _gtm2.default.sendEvent({ data: gtmData });

            if (this.state.specialization_id) {
                let criteria = {};
                criteria.id = this.state.specialization_id;
                criteria.name = '';
                criteria.type = 'speciality';
                this.props.cloneCommonSelectedCriterias(criteria);
                this.props.history.push(`/opd/searchresults`);
            }
        });
    }

    handleClose() {
        this.setState({ hideFooterWidget: true });
    }

    buyMedicineClick(footerBuyNow = false) {
        let gtmData = {};
        if (footerBuyNow) {
            gtmData = {
                'Category': 'ConsumerApp', 'Action': 'BuyMedicineFooterBtnClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'buy-medicine-footer-btn-click', 'articleId': this.state.articleData && this.state.articleData.id ? this.state.articleData.id : ''
            };
        } else {
            gtmData = {
                'Category': 'ConsumerApp', 'Action': 'BuyMedicineBtnClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'buy-medicine-btn-click', 'articleId': this.state.articleData && this.state.articleData.id ? this.state.articleData.id : ''
            };
        }
        this.setState({ showPopup: true }, () => {
            setTimeout(() => this.continueClick(), 1000);
        });

        _gtm2.default.sendEvent({ data: gtmData });
    }

    continueClick() {
        // let gtmData = {
        //     'Category': 'ConsumerApp', 'Action': 'MedicinePageContinueClick', 'CustomerID': GTM.getUserId() || '', 'leadid': 0, 'event': 'medicine-page-continue-click'
        // }
        // GTM.sendEvent({ data: gtmData })
        if (typeof navigator === 'object') {
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
        setTimeout(() => {
            this.setState({
                showPopup: false
            });
        }, 1000);
    }

    hidePopup() {
        this.setState({ showPopup: false });
    }

    getUtmTags() {
        const parsed = queryString.parse(this.props.location.search);
        let utm_tags = {
            utm_source: parsed.utm_source || '',
            utm_medium: parsed.utm_medium || '',
            utm_term: parsed.utm_term || '',
            utm_campaign: parsed.utm_campaign || ''
        };

        if (this.props.common_utm_tags && this.props.common_utm_tags.length) {
            utm_tags = this.props.common_utm_tags.filter(x => x.type == "common_xtra_tags")[0].utm_tags;
        }

        return utm_tags;
    }
    mainPopupData() {
        let data = _react2.default.createElement(
            'div',
            { className: 'articleImgPop' },
            _react2.default.createElement(
                'div',
                { className: 'p-relative gold-med-bnr covidBanner' },
                _react2.default.createElement('img', { className: 'img-fluid gold-med-cls', src: "/assets" + '/img/vip-pop-cls.svg', onClick: event => {
                        let data = {
                            'Category': 'ConsumerApp', 'Action': 'ArticleGoldBannerCrossClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'article-gold-banner-cross-clicked'
                        };
                        _gtm2.default.sendEvent({ data: data });
                        event.stopPropagation();
                        this.setState({ showMainPopup: false });
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

    render() {

        let isUserLogin = Object.values(this.props.profiles).length || _storage2.default.checkAuth();
        let commentsExists = this.state.articleData && this.state.articleData.comments.length ? this.state.articleData.comments.length : null;

        let locationName = "";
        if (this.props.selectedLocation && this.props.selectedLocation.formatted_address) {
            locationName = this.props.selectedLocation.formatted_address;
        }

        let showIframe = false;
        if (this.props.iFrameUrls.includes(this.props.location.pathname)) {
            showIframe = true;
        }

        let sessionId = null;
        if (typeof sessionStorage == "object") {
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
                                        canonicalUrl: `${_config2.default.API_BASE_URL}${this.props.match.url}`,
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
                                this.props.match.path.split('-')[1] === 'mddp' && this.props.offerList && this.props.offerList.filter(x => x.slider_location === 'medicine_detail_page').length ? _react2.default.createElement(_bannerCarousel2.default, _extends({}, this.props, { sliderLocation: 'medicine_detail_page' })) : '',
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'mrb-10 breadcrumb-list', style: { wordBreak: 'break-word' } },
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'breadcrumb-list-item' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/', onClick: e => this.onHomeClick(e, "/") },
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
                                            { href: `/${this.state.articleData.category.url}`, onClick: e => this.onHomeClick(e, `/${this.state.articleData.category.url}`) },
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
                                        { className: 'art-sharing-btn mr-3', onClick: () => this.facebookClick() },
                                        _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/facebook.svg" })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'art-sharing-btn ml-3 mr-3', onClick: () => this.twitterClick() },
                                        _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/twitter.svg" })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'art-sharing-btn ml-3 mr-3', onClick: () => this.linkedinClick() },
                                        _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/linkedin.svg" })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'art-sharing-btn ml-3', onClick: () => this.whatsappClick() },
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
                                this.state.articleData && this.state.articleData.body_doms && this.state.articleData.body_doms.map((val, key) => {

                                    if (val.type.includes('html')) {
                                        return _react2.default.createElement('div', { key: key, className: 'docprime-article', dangerouslySetInnerHTML: { __html: val.content } });
                                    } else if (val.type.includes('search_widget')) {
                                        return _react2.default.createElement(
                                            'div',
                                            { key: key, className: 'sticky-article-div' },
                                            val.content.lat && val.content.lng && val.content.location_name ? _react2.default.createElement(_CommonSearch2.default, _extends({}, this.props, { location: val.content.location_name, latitude: val.content.lat, longitude: val.content.lng })) : val.content.specialization_id ? _react2.default.createElement(
                                                'div',
                                                null,
                                                _react2.default.createElement(_locationElements2.default, _extends({}, this.props, { onRef: ref => this.child = ref, getCityListLayout: this.getCityListLayout.bind(this), resultType: 'search', locationName: locationName, articleSearchPage: true, specialityName: val.content.specialization_name, specialityId: val.content.specialization_id, widgetId: key })),
                                                this.getCityList(key)
                                            ) : _react2.default.createElement(
                                                'div',
                                                null,
                                                _react2.default.createElement(_locationElements2.default, _extends({}, this.props, { onRef: ref => this.child = ref, getCityListLayout: this.getCityListLayout.bind(this), resultType: 'search', locationName: '', widgetId: key, commonSearch: true, articleSearchPage: true })),
                                                this.getCityList(key),
                                                _react2.default.createElement(_CommonSearch2.default, _extends({}, this.props, { commonSearch: true }))
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
                                `User Comments (${this.state.articleData.comments.length})`
                            ),
                            this.state.articleData.comments.map((comment, key) => {
                                return _react2.default.createElement(_Reply2.default, _extends({ key: comment.id, commentReplyClicked: this.commentReplyClicked.bind(this), isUserLogin: isUserLogin }, this.props, this.state, { getArticleData: this.getArticleData.bind(this), postReply: this.postReply.bind(this), handleInputComment: this.handleInputComment.bind(this), commentData: comment, commentsExists: commentsExists, articlePage: true }));
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FooterWidgetView extends _react2.default.Component {

	constructor(props) {
		super(props);
		this.state = {
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
	}
	componentDidMount() {
		let data = {
			'Category': 'ConsumerApp', 'Action': 'FooterWidgetDisplayed', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'footer-widget-displayed', type: this.props.footerWidget && this.props.footerWidget.widget_type ? this.props.footerWidget.widget_type : ''
		};
		_gtm2.default.sendEvent({ data: data });
	}

	selectDoctorSpecialization(data) {
		if (!this.state.show_form) {
			this.setState({ show_form: true, leadType: 1, clickedData: data });
			return;
		}
		let criteria = {};
		criteria.id = data[1] || '';
		criteria.name = data[0] || '';
		criteria.type = 'speciality';
		this.props.cloneCommonSelectedCriterias(criteria);

		let doctor_name = '',
		    hospital_name = '',
		    hospital_id = '';
		let state = {
			filterCriteria: _extends({}, this.props.OPD_STATE.filterCriteria, {
				doctor_name, hospital_name, hospital_id
			}),
			nextFilterCriteria: _extends({}, this.props.OPD_STATE.filterCriteria, {
				doctor_name, hospital_name, hospital_id
			})
		};

		let gtmData = {
			'Category': 'ConsumerApp', 'Action': 'FooterSpecializationsSelected', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'footer-specializations-selected', 'selected': criteria.name || '', 'selectedId': criteria.id || '', 'searched': '', 'searchString': '', 'from': 'footerWidget'
		};
		_gtm2.default.sendEvent({ data: gtmData });

		this.props.mergeOPDState(state, true);

		this.props.history.push({
			pathname: '/opd/searchresults',
			state: { search_back: true }
		});
	}

	selectTest(data) {
		if (!this.state.show_form) {
			this.setState({ show_form: true, leadType: 2, clickedData: data });
			return;
		}
		let criteria = {};
		criteria.id = data[1] || '';
		criteria.name = data[0] || '';
		criteria.type = 'test';
		criteria.url = '';
		criteria.test_type = '';
		this.props.toggleDiagnosisCriteria('test', criteria, true);
		setTimeout(() => {
			this.showLabs();
		}, 100);
	}

	showLabs() {
		let lab_name = '';
		this.props.mergeLABState({
			filterCriteria: _extends({}, this.props.LAB_STATE.filterCriteria, {
				lab_name
			}),
			nextFilterCriteria: _extends({}, this.props.LAB_STATE.filterCriteria, {
				lab_name
			}),
			currentSearchedCriterias: this.props.LAB_STATE.selectedCriterias,
			nextSelectedCriterias: this.props.LAB_STATE.selectedCriterias
		}, true);

		let selectedTestIds = this.props.LAB_STATE.selectedCriterias.map(test => test.id);
		let selectedTestsName = this.props.LAB_STATE.selectedCriterias.map(test => test.name);
		let data = {
			'Category': 'ConsumerApp', 'Action': 'FooterTestClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'footer-lab-clicked', 'SelectedTestIds': selectedTestIds.join(',') || '', 'SelectedTestName': selectedTestsName.join(','), 'TestCount': selectedTestIds.length || 0, 'from': 'footerWidget'
		};
		_gtm2.default.sendEvent({ data: data });

		this.props.history.push({
			pathname: '/lab/searchresults',
			state: { search_back: true }
		});
	}

	openSearchMore() {
		if (!this.state.show_form) {
			this.setState({ show_form: true, leadType: 3 });
			return;
		}
		let which = 'opd';
		if (this.props.footerWidget && this.props.footerWidget.widget_type == 'LabTest') {
			which = 'lab';
		}
		this.props.selectSearchType(which);
		this.props.history.push('/search');
	}

	goToPackage() {
		if (!this.state.show_form) {
			this.setState({ show_form: true, leadType: 4 });
			return;
		}
		let data = {
			'Category': 'ConsumerApp', 'Action': 'ShowPackageClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'show-package-clicked', 'from': 'footerWidget'
		};
		_gtm2.default.sendEvent({ data: data });
		this.props.setPackageId(12227, true);
		setTimeout(() => {
			this.props.history.push('/searchpackages');
		}, 100);
		// this.props.history.push('/thyrocare-aarogyam-packages')
	}

	closeLeadForm(isProceed) {
		let proceed = false;
		let data = {};
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

				this.props.submitMedicineLead(data, resp => {
					if (resp) {
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
				});
			}
		} else {
			let data = {
				'Category': 'ConsumerApp', 'Action': 'SkipMedLeadClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'skip-med-lead-click', 'from': 'footerWidget'
			};
			_gtm2.default.sendEvent({ data: data });
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

	handleChange(event) {
		this.setState({
			[event.target.getAttribute('data-param')]: event.target.value
		});
	}

	handleInut(type, event) {
		try {
			let search_string = event.target.value.toLowerCase();
			let filtered_city_list = [];
			this.props.user_cities.map(city => {
				let city_name = city.name.toLowerCase();
				if (city_name.includes(search_string)) {
					let index = city_name.indexOf(search_string);
					filtered_city_list.push({ id: city.id, name: city.name, rank: index });
				}
			});
			filtered_city_list = filtered_city_list.sort((x, y) => {
				return x.rank - y.rank;
			});
			this.setState({ [type]: event.target.value, filtered_city_list: filtered_city_list });
		} catch (e) {}
	}

	onFocusIn() {
		this.setState({ search_city: '', showCitySearchPopup: true });
	}

	onFocusOut() {
		setTimeout(() => {
			this.setState({ search_city: this.state.selectedDoctor, showCitySearchPopup: false });
		}, 500);
	}

	clickDoctorList(name, id) {
		this.setState({ 'city_name': name, 'city_id': id, filtered_city_list: [], search_city: name, showCitySearchPopup: false });
	}

	render() {
		let { footerWidget } = this.props;
		let filtered_doctor = this.state.filtered_city_list;
		return _react2.default.createElement(
			_react2.default.Fragment,
			null,
			footerWidget && footerWidget.widget_type ? _react2.default.createElement(
				'div',
				{ className: 'doc-wdgt-med-container' },
				footerWidget.widget_type == 'LabTest' ? _react2.default.createElement(
					'div',
					{ className: 'doc-wdgt-book-doc' },
					_react2.default.createElement('img', { className: 'docClosBtn', src: 'https://cdn.docprime.com/cp/assets/img/icons/close.png', onClick: () => this.props.handleClose() }),
					_react2.default.createElement(
						'h3',
						{ className: 'doc-wdgt-hdng' },
						`${footerWidget.title} @`,
						_react2.default.createElement(
							'span',
							null,
							footerWidget.discount
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'doc-wdgt-chips' },
						Object.entries(footerWidget.test).map((data, key) => {
							return _react2.default.createElement(
								'span',
								{ key: key, onClick: this.selectTest.bind(this, data) },
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
					_react2.default.createElement('img', { className: 'docClosBtn', src: 'https://cdn.docprime.com/cp/assets/img/icons/close.png', onClick: () => this.props.handleClose() }),
					_react2.default.createElement(
						'h3',
						{ className: 'doc-wdgt-hdng' },
						`${footerWidget.title} @`,
						_react2.default.createElement(
							'span',
							null,
							footerWidget.discount
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'doc-wdgt-chips' },
						Object.entries(footerWidget.specializations).map((data, key) => {
							return _react2.default.createElement(
								'span',
								{ key: key, onClick: this.selectDoctorSpecialization.bind(this, data) },
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
					_react2.default.createElement('img', { className: 'docClosBtn', src: 'https://cdn.docprime.com/cp/assets/img/icons/close.png', onClick: () => this.props.handleClose() }),
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
										_react2.default.createElement('input', { type: 'text', value: '', name: 'name', placeholder: '*Name', autoComplete: null, onChange: this.handleChange.bind(this), 'data-param': 'name', value: this.state.name })
									),
									_react2.default.createElement('input', { type: 'number', value: '', name: 'phone_number', autoComplete: 'none', placeholder: '*Mobile Number', onChange: this.handleChange.bind(this), 'data-param': 'phone_number', value: this.state.phone_number }),
									_react2.default.createElement(
										'div',
										{ className: 'ipd-slects-doc' },
										_react2.default.createElement('input', { type: 'text', autoComplete: 'none', placeholder: 'Search City', onChange: this.handleInut.bind(this, 'search_city'), onFocus: this.onFocusIn.bind(this), onBlur: this.onFocusOut.bind(this), value: this.state.search_city }),
										this.state.showCitySearchPopup ? _react2.default.createElement(
											'div',
											{ className: 'doc-srch-fltr', onClick: e => e.preventDefault() },
											this.state.filtered_city_list && this.state.filtered_city_list.length ? this.state.filtered_city_list.map((data, key) => {
												return _react2.default.createElement(
													'p',
													{ className: 'cursor-pntr', key: key, id: data.id, onClick: e => {
															e.preventDefault();
															e.stopPropagation();
															this.clickDoctorList(data.name, data.id);
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _initialsPicture = __webpack_require__(/*! ../initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ArticleAuthor extends _react2.default.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	authorClick(e) {
		e.preventDefault();
		if (this.props.url) {
			this.props.history.push(this.props.url);
		} else {
			this.props.history.push(`/opd/doctor/${this.props.id}`);
		}
	}

	render() {
		return _react2.default.createElement(
			'div',
			{ className: 'article-author-div mrb-20' },
			_react2.default.createElement(
				_initialsPicture2.default,
				{ className: 'initialsPicture-ds initialsPicture-author', name: this.props.name, has_image: !!this.props.profileImage },
				_react2.default.createElement('img', { className: 'fltr-usr-image img-round', style: { width: 60, height: 60, marginRight: 8, fontSize: 10 }, src: this.props.profileImage, alt: `Dr. ${this.props.name}`, title: `Dr. ${this.props.name}` })
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
						{ href: `/${this.props.url}`, onClick: e => this.authorClick(e) },
						_react2.default.createElement(
							'h3',
							{ className: 'fw-500 text-primary' },
							`Dr. ${this.props.name}`
						)
					) : _react2.default.createElement(
						'a',
						{ href: `/opd/doctor/${this.props.id}`, onClick: e => this.authorClick(e) },
						_react2.default.createElement(
							'h3',
							{ className: 'fw-500 text-primary' },
							`Dr. ${this.props.name}`
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = props => {

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BookingConfirmationPopup extends _react2.default.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _article = __webpack_require__(/*! ../../components/commons/article */ "./dev/js/components/commons/article/index.js");

var _article2 = _interopRequireDefault(_article);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Article extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    static loadData(store, match) {
        let articleId = match.url;
        if (articleId) {
            return new Promise((resolve, reject) => {
                articleId = articleId.toLowerCase().substring(1, articleId.length);
                store.dispatch((0, _index.fetchArticle)(articleId, false, (err, data) => {
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

    static buildStateFromRedis(resp, store) {
        return new Promise((resolve, reject) => {
            store.dispatch((0, _index.buildArticleStoreFromRedis)(resp, resp => {
                resolve();
            }));
        }).catch(e => {
            reject(e);
        });
    }

    componentDidMount() {
        this.props.citiesData();
    }

    render() {

        return _react2.default.createElement(_article2.default, this.props);
    }
}

Article.contextTypes = {
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
    let {
        profiles, defaultProfile, offerList, articleData, user_cities, iFrameUrls, common_utm_tags
    } = state.USER;

    let {
        selectedLocation
    } = state.SEARCH_CRITERIA_OPD;

    let OPD_STATE = (() => {

        const {
            selectedLocation,
            filterCriteria

        } = state.SEARCH_CRITERIA_OPD;

        return {
            selectedLocation,
            filterCriteria
        };
    })();

    let LAB_STATE = (() => {

        const {
            selectedLocation,
            filterCriteria,
            selectedCriterias

        } = state.SEARCH_CRITERIA_LABS;

        return {
            selectedLocation,
            filterCriteria,
            selectedCriterias
        };
    })();

    let {
        static_footer_data
    } = state.DOCTOR_SEARCH;

    return {
        initialServerData,
        profiles, defaultProfile, offerList, selectedLocation, articleData, OPD_STATE, LAB_STATE, user_cities, iFrameUrls, common_utm_tags, static_footer_data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchArticle: (id, preview, cb) => dispatch((0, _index.fetchArticle)(id, preview, cb)),
        getSpecialityFooterData: cb => dispatch((0, _index.getSpecialityFooterData)(cb)),
        postComment: (comment, cb) => dispatch((0, _index.postComment)(comment, cb)),
        getOfferList: (lat, long) => dispatch((0, _index.getOfferList)(lat, long)),
        toggleOPDCriteria: (type, criteria, forceAdd, filter) => dispatch((0, _index.toggleOPDCriteria)(type, criteria, forceAdd, filter)),
        toggleDiagnosisCriteria: (type, criteria, forceAdd, filter) => dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria, forceAdd, filter)),
        cloneCommonSelectedCriterias: selectedCriterias => dispatch((0, _index.cloneCommonSelectedCriterias)(selectedCriterias)),
        selectSearchType: type => dispatch((0, _index.selectSearchType)(type)),
        mergeLABState: (state, fetchNewResults) => dispatch((0, _index.mergeLABState)(state, fetchNewResults)),
        mergeOPDState: (state, fetchNewResults) => dispatch((0, _index.mergeOPDState)(state, fetchNewResults)),
        setPackageId: (package_id, isHomePage) => dispatch((0, _index.setPackageId)(package_id, isHomePage)),
        submitMedicineLead: (data, callback) => dispatch((0, _index.submitMedicineLead)(data, callback)),
        citiesData: () => dispatch((0, _index.citiesData)()),
        iFrameState: (url, emptyUrls) => dispatch((0, _index.iFrameState)(url, emptyUrls)),
        NonIpdBookingLead: (data, cb) => dispatch((0, _index.NonIpdBookingLead)(data, cb))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Article);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9hcnRpY2xlL0FydGljbGUuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9hcnRpY2xlL0Zvb3RlclRlc3RTcGVjaWFsaXphdGlvbldpZGdldHMuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9hcnRpY2xlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvYXJ0aWNsZUF1dGhvci9hcnRpY2xlQXV0aG9yLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvbWFpblBvcHVwLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2RpYWdub3Npcy9ib29raW5nU3VtbWFyeS9Cb29raW5nQ29uZmlybWF0aW9uUG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvY29tbW9ucy9hcnRpY2xlLmpzIl0sIm5hbWVzIjpbIkxvYWRlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsImNsYXNzVHlwZSIsImlGcmFtZVBvcHVwIiwicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiQXJ0aWNsZSIsImhhbmRsZUNoYW5nZSIsImUiLCJzZXRTdGF0ZSIsInBob25lX251bWJlciIsInRhcmdldCIsInZhbHVlIiwibmF2aWdhdGVUb0dvbGQiLCJkYXRhIiwiR1RNIiwiZ2V0VXNlcklkIiwic2VuZEV2ZW50IiwiaGlzdG9yeSIsInB1c2giLCJmb290ZXJEYXRhIiwiYXJ0aWNsZURhdGEiLCJhcnRpY2xlTG9hZGVkIiwiaW5pdGlhbFNlcnZlckRhdGEiLCJhcnRpY2xlSWQiLCJtYXRjaCIsInVybCIsInRvTG93ZXJDYXNlIiwic3Vic3RyaW5nIiwibGVuZ3RoIiwic3RhdGUiLCJyZXBseU9wZW5Gb3IiLCJjb21tZW50Iiwic2VhcmNoQ2l0aWVzIiwic2VhcmNoV2lkZ2V0Iiwic3BlY2lhbGl6YXRpb25faWQiLCJoaWRlRm9vdGVyV2lkZ2V0Iiwic2hvd1BvcHVwIiwibWVkQnRuVG9wIiwic2hvd1BoYXJtYWN5QXRDbGllbnQiLCJzaG93UGhhcm1hY3lGb290ZXIiLCJzaG93TWFpblBvcHVwIiwiaXNNZWRpY2luZVBhZ2UiLCJpbmNsdWRlcyIsImluVmFsaWRQaG5vIiwiY29tcG9uZW50RGlkTW91bnQiLCJnZXRBcnRpY2xlRGF0YSIsIndpbmRvdyIsInNjcm9sbFRvIiwicGF0aCIsInNwbGl0Iiwic2VsZWN0ZWRMb2NhdGlvbiIsImxhdCIsImxvbmciLCJnZW9tZXRyeSIsImxvY2F0aW9uIiwibG5nIiwiZ2V0T2ZmZXJMaXN0Iiwic2V0VGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxIYW5kbGVyIiwic2Vzc2lvbklkIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiaUZyYW1lU3RhdGUiLCJkb2N1bWVudCIsImVsZW0iLCJnZXRFbGVtZW50QnlJZCIsImVsZW1Db250YWluZXIiLCJzY3JvbGxZIiwib2Zmc2V0SGVpZ2h0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZldGNoQXJ0aWNsZSIsInNlYXJjaCIsImVyciIsIm9uSG9tZUNsaWNrIiwiZXZlbnQiLCJsaW5rIiwicHJldmVudERlZmF1bHQiLCJmYWNlYm9va0NsaWNrIiwib3BlbiIsIlVSTCIsInR3aXR0ZXJDbGljayIsImxpbmtlZGluQ2xpY2siLCJ0aXRsZSIsIndoYXRzYXBwQ2xpY2siLCJjb21tZW50UmVwbHlDbGlja2VkIiwiaWQiLCJwb3N0UmVwbHkiLCJTbmFja0JhciIsInNob3ciLCJwb3MiLCJ0ZXh0IiwicG9zdERhdGEiLCJhcnRpY2xlIiwibmFtZSIsIk9iamVjdCIsInZhbHVlcyIsInByb2ZpbGVzIiwiZGVmYXVsdFByb2ZpbGUiLCJlbWFpbCIsInBhcmVudCIsInBvc3RDb21tZW50IiwiZXJyb3IiLCJoYW5kbGVJbnB1dENvbW1lbnQiLCJnZXRDaXR5TGlzdCIsImtleSIsIm1hcCIsInJlc3VsdCIsImkiLCJzZWxlY3RMb2NhdGlvbiIsImJpbmQiLCJkZXNjcmlwdGlvbiIsImdldENpdHlMaXN0TGF5b3V0Iiwic2VhcmNoUmVzdWx0cyIsInNlYXJjaFBhcmFtcyIsInNwZWNpYWxpdHlJZCIsIndpZGdldElkIiwiY2l0eSIsImNoaWxkIiwiZ3RtRGF0YSIsInNlbGVjdGVkSWQiLCJjcml0ZXJpYSIsInR5cGUiLCJjbG9uZUNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzIiwiaGFuZGxlQ2xvc2UiLCJidXlNZWRpY2luZUNsaWNrIiwiZm9vdGVyQnV5Tm93IiwiY29udGludWVDbGljayIsIm5hdmlnYXRvciIsImlzU2FmYXJpIiwidGVzdCIsInVzZXJBZ2VudCIsInBhdGhuYW1lIiwic2V0SXRlbSIsInBoYXJtZWFzeV91cmwiLCJDT05GSUciLCJQSEFSTUVBU1lfSUZSQU1FX1VSTCIsImhpZGVQb3B1cCIsImdldFV0bVRhZ3MiLCJwYXJzZWQiLCJwYXJzZSIsInV0bV90YWdzIiwidXRtX3NvdXJjZSIsInV0bV9tZWRpdW0iLCJ1dG1fdGVybSIsInV0bV9jYW1wYWlnbiIsImNvbW1vbl91dG1fdGFncyIsImZpbHRlciIsIngiLCJtYWluUG9wdXBEYXRhIiwiQVNTRVRTX0JBU0VfVVJMIiwic3RvcFByb3BhZ2F0aW9uIiwiaXNVc2VyTG9naW4iLCJTVE9SQUdFIiwiY2hlY2tBdXRoIiwiY29tbWVudHNFeGlzdHMiLCJjb21tZW50cyIsImxvY2F0aW9uTmFtZSIsImZvcm1hdHRlZF9hZGRyZXNzIiwic2hvd0lmcmFtZSIsImlGcmFtZVVybHMiLCJwYWRkaW5nQm90dG9tIiwic2VvIiwia2V5d29yZHMiLCJjYW5vbmljYWxVcmwiLCJBUElfQkFTRV9VUkwiLCJzY2hlbWEiLCJvZmZlckxpc3QiLCJzbGlkZXJfbG9jYXRpb24iLCJ3b3JkQnJlYWsiLCJjYXRlZ29yeSIsImhlYWRpbmdfdGl0bGUiLCJoZWFkZXJfaW1hZ2UiLCJ3aWR0aCIsImhlYWRlcl9pbWFnZV9hbHQiLCJhdXRob3IiLCJwcm9maWxlX2ltZyIsInNwZWNpYWxpdHkiLCJleHBlcmllbmNlIiwicHVibGlzaGVkX2RhdGUiLCJib2R5X2RvbXMiLCJ2YWwiLCJfX2h0bWwiLCJjb250ZW50IiwibG9jYXRpb25fbmFtZSIsInJlZiIsInNwZWNpYWxpemF0aW9uX25hbWUiLCJsYXN0X3VwZGF0ZWRfYXQiLCJGb290ZXJXaWRnZXRWaWV3Iiwic2hvd19mb3JtIiwibGVhZFR5cGUiLCJjbGlja2VkRGF0YSIsImNpdHlfaWQiLCJjaXR5X25hbWUiLCJzZWFyY2hfY2l0eSIsInNob3dDaXR5U2VhcmNoUG9wdXAiLCJmaWx0ZXJlZF9jaXR5X2xpc3QiLCJmb290ZXJXaWRnZXQiLCJ3aWRnZXRfdHlwZSIsInNlbGVjdERvY3RvclNwZWNpYWxpemF0aW9uIiwiZG9jdG9yX25hbWUiLCJob3NwaXRhbF9uYW1lIiwiaG9zcGl0YWxfaWQiLCJmaWx0ZXJDcml0ZXJpYSIsIk9QRF9TVEFURSIsIm5leHRGaWx0ZXJDcml0ZXJpYSIsIm1lcmdlT1BEU3RhdGUiLCJzZWFyY2hfYmFjayIsInNlbGVjdFRlc3QiLCJ0ZXN0X3R5cGUiLCJ0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSIsInNob3dMYWJzIiwibGFiX25hbWUiLCJtZXJnZUxBQlN0YXRlIiwiTEFCX1NUQVRFIiwiY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzIiwic2VsZWN0ZWRDcml0ZXJpYXMiLCJuZXh0U2VsZWN0ZWRDcml0ZXJpYXMiLCJzZWxlY3RlZFRlc3RJZHMiLCJzZWxlY3RlZFRlc3RzTmFtZSIsImpvaW4iLCJvcGVuU2VhcmNoTW9yZSIsIndoaWNoIiwic2VsZWN0U2VhcmNoVHlwZSIsImdvVG9QYWNrYWdlIiwic2V0UGFja2FnZUlkIiwiY2xvc2VMZWFkRm9ybSIsImlzUHJvY2VlZCIsInByb2NlZWQiLCJsZWFkX3NvdXJjZSIsInN1Ym1pdE1lZGljaW5lTGVhZCIsInJlc3AiLCJnZXRBdHRyaWJ1dGUiLCJoYW5kbGVJbnV0Iiwic2VhcmNoX3N0cmluZyIsInVzZXJfY2l0aWVzIiwiaW5kZXgiLCJpbmRleE9mIiwicmFuayIsInNvcnQiLCJ5Iiwib25Gb2N1c0luIiwib25Gb2N1c091dCIsInNlbGVjdGVkRG9jdG9yIiwiY2xpY2tEb2N0b3JMaXN0IiwiZmlsdGVyZWRfZG9jdG9yIiwiZGlzY291bnQiLCJlbnRyaWVzIiwic3BlY2lhbGl6YXRpb25zIiwidGl0bGVfZmlyc3QiLCJwcmljZSIsInRpdGxlX2xhc3QiLCJBcnRpY2xlVmlldyIsIkFydGljbGVBdXRob3IiLCJhdXRob3JDbGljayIsInByb2ZpbGVJbWFnZSIsImhlaWdodCIsIm1hcmdpblJpZ2h0IiwiZm9udFNpemUiLCJtYXJnaW4iLCJwdWJsaXNoZWREYXRlIiwiQm9va2luZ0NvbmZpcm1hdGlvblBvcHVwIiwiaXNfZ29sZCIsInByaWNlQ29uZmlybWF0aW9uUG9wdXAiLCJsb2FkRGF0YSIsInN0b3JlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJkaXNwYXRjaCIsInN0YXR1cyIsImJ1aWxkU3RhdGVGcm9tUmVkaXMiLCJjYXRjaCIsImNpdGllc0RhdGEiLCJjb250ZXh0VHlwZXMiLCJyb3V0ZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJwYXNzZWRQcm9wcyIsInN0YXRpY0NvbnRleHQiLCJVU0VSIiwiU0VBUkNIX0NSSVRFUklBX09QRCIsIlNFQVJDSF9DUklURVJJQV9MQUJTIiwic3RhdGljX2Zvb3Rlcl9kYXRhIiwiRE9DVE9SX1NFQVJDSCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsInByZXZpZXciLCJjYiIsImdldFNwZWNpYWxpdHlGb290ZXJEYXRhIiwidG9nZ2xlT1BEQ3JpdGVyaWEiLCJmb3JjZUFkZCIsImZldGNoTmV3UmVzdWx0cyIsInBhY2thZ2VfaWQiLCJpc0hvbWVQYWdlIiwiY2FsbGJhY2siLCJlbXB0eVVybHMiLCJOb25JcGRCb29raW5nTGVhZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsTUFBTUEsTUFBTixTQUFxQkMsZ0JBQU1DLFNBQTNCLENBQXFDO0FBQ2pDQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDSDs7QUFFREMsYUFBUzs7QUFFTCxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVcsS0FBS0QsS0FBTCxDQUFXRSxTQUFYLElBQXdCLGdCQUF4QztBQUNJLG1EQUFLLFdBQVUsV0FBZixHQURKO0FBR1EsaUJBQUtGLEtBQUwsQ0FBV0csV0FBWCxHQUNJO0FBQUE7QUFBQSxrQkFBRyxXQUFVLGVBQWI7QUFBQTtBQUFBLGFBREosR0FDK0U7QUFKdkYsU0FESjtBQVNIO0FBaEJnQzs7a0JBbUJ0QlAsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJmOzs7Ozs7a0JBRWVBLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFDQSxNQUFNUSxjQUFjQyxtQkFBT0EsQ0FBQyxrQ0FBUixDQUFwQjtBQUNBOztBQUVBLE1BQU1DLE9BQU4sU0FBc0JULGdCQUFNQyxTQUE1QixDQUFzQztBQUNsQ0MsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOOztBQURlLGFBK1NuQk8sWUEvU21CLEdBK1NIQyxDQUFELElBQU87QUFDbEIsaUJB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Uyx5QkFBYXNCLFVBQWIsRUFBeUJDLFVBQXpCLENBQVQsQ0FYdkM7QUFZSDlELDRCQUFvQixDQUFDOU4sSUFBRCxFQUFPNlIsUUFBUCxLQUFvQnhCLFNBQVMsK0JBQW1CclEsSUFBbkIsRUFBeUI2UixRQUF6QixDQUFULENBWnJDO0FBYUhwQixvQkFBWSxNQUFNSixTQUFTLHdCQUFULENBYmY7QUFjSG5OLHFCQUFhLENBQUN0QyxHQUFELEVBQU1rUixTQUFOLEtBQW9CekIsU0FBUyx3QkFBWXpQLEdBQVosRUFBaUJrUixTQUFqQixDQUFULENBZDlCO0FBZUhDLDJCQUFrQixDQUFDL1IsSUFBRCxFQUFNc1IsRUFBTixLQUFZakIsU0FBUyw4QkFBa0JyUSxJQUFsQixFQUF3QnNSLEVBQXhCLENBQVQ7QUFmM0IsS0FBUDtBQWlCSCxDQWxCRDs7a0JBcUJlLHlCQUFRVixlQUFSLEVBQXlCUSxrQkFBekIsRUFBNkM1UixPQUE3QyxDIiwiZmlsZSI6IjUzLnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIExvYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc1R5cGUgfHwgXCJsb2FkZXJDaXJjdWxhclwifSA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcC1sb2FkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaUZyYW1lUG9wdXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0xMFwiPlJlZGlyZWN0aW5nIHlvdSB0byBQaGFybWVhc3kgd2Vic2l0ZS4uLjwvcD4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyXG4iLCJpbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTGVmdEJhciBmcm9tICcuLi8uLi9jb21tb25zL0xlZnRCYXInXG5pbXBvcnQgUmlnaHRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9SaWdodEJhcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uLy4uL2NvbmZpZydcbmltcG9ydCBIZWxtZXRUYWdzIGZyb20gJy4uLy4uL2NvbW1vbnMvSGVsbWV0VGFncydcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vSG9tZS9mb290ZXInXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtJ1xuaW1wb3J0IEluaXRpYWxzUGljdHVyZSBmcm9tICcuLi9pbml0aWFsc1BpY3R1cmUnO1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9zdG9yYWdlJztcbmltcG9ydCBDb21tZW50Qm94IGZyb20gJy4vQXJ0aWNsZUNvbW1lbnRCb3guanMnXG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBSZXBseSBmcm9tICcuL1JlcGx5LmpzJ1xuaW1wb3J0IEJhbm5lckNhcm91c2VsIGZyb20gJy4uL0hvbWUvYmFubmVyQ2Fyb3VzZWwnO1xuaW1wb3J0IEFydGljbGVBdXRob3IgZnJvbSAnLi4vYXJ0aWNsZUF1dGhvci9hcnRpY2xlQXV0aG9yJztcbmltcG9ydCBMb2NhdGlvbkVsZW1lbnRzIGZyb20gJy4uLy4uLy4uL2NvbnRhaW5lcnMvY29tbW9ucy9sb2NhdGlvbkVsZW1lbnRzJ1xuaW1wb3J0IENvbW1vblNlYXJjaCBmcm9tICcuLi8uLi8uLi9jb250YWluZXJzL2NvbW1vbnMvQ29tbW9uU2VhcmNoLmpzJ1xuaW1wb3J0IEZpeGVkTW9iaWxlRm9vdGVyIGZyb20gJy4uL0hvbWUvRml4ZWRNb2JpbGVGb290ZXInXG5pbXBvcnQgRm9vdGVyVGVzdFNwZWNpYWxpemF0aW9uV2lkZ2V0cyBmcm9tICcuL0Zvb3RlclRlc3RTcGVjaWFsaXphdGlvbldpZGdldHMuanMnXG5pbXBvcnQgQm9va2luZ0NvbmZpcm1hdGlvblBvcHVwIGZyb20gJy4uLy4uL2RpYWdub3Npcy9ib29raW5nU3VtbWFyeS9Cb29raW5nQ29uZmlybWF0aW9uUG9wdXAnO1xuaW1wb3J0IE1haW5Qb3B1cCBmcm9tICcuLi9tYWluUG9wdXAuanMnXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlcic7XG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuLy8gaW1wb3J0IFJlbGF0ZWRBcnRpY2xlcyBmcm9tICcuL1JlbGF0ZWRBcnRpY2xlcydcblxuY2xhc3MgQXJ0aWNsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIGxldCBmb290ZXJEYXRhID0gbnVsbFxuXG4gICAgICAgIGxldCBhcnRpY2xlRGF0YSA9IG51bGxcbiAgICAgICAgbGV0IGFydGljbGVMb2FkZWQgPSBmYWxzZVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmluaXRpYWxTZXJ2ZXJEYXRhKSB7XG4gICAgICAgICAgICBhcnRpY2xlRGF0YSA9IHRoaXMucHJvcHMuaW5pdGlhbFNlcnZlckRhdGEuYXJ0aWNsZURhdGFcbiAgICAgICAgICAgIGFydGljbGVMb2FkZWQgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYXJ0aWNsZUlkID0gdGhpcy5wcm9wcy5tYXRjaC51cmxcbiAgICAgICAgYXJ0aWNsZUlkID0gYXJ0aWNsZUlkLnRvTG93ZXJDYXNlKCkuc3Vic3RyaW5nKDEsIGFydGljbGVJZC5sZW5ndGgpXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmFydGljbGVEYXRhICYmIHRoaXMucHJvcHMuYXJ0aWNsZURhdGFbYXJ0aWNsZUlkXSkge1xuICAgICAgICAgICAgYXJ0aWNsZURhdGEgPSB0aGlzLnByb3BzLmFydGljbGVEYXRhW2FydGljbGVJZF1cbiAgICAgICAgICAgIGFydGljbGVMb2FkZWQgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYXJ0aWNsZURhdGE6IGFydGljbGVEYXRhLFxuICAgICAgICAgICAgcmVwbHlPcGVuRm9yOiBudWxsLFxuICAgICAgICAgICAgY29tbWVudDogJycsXG4gICAgICAgICAgICBhcnRpY2xlTG9hZGVkOiBhcnRpY2xlTG9hZGVkLFxuICAgICAgICAgICAgc2VhcmNoQ2l0aWVzOiBbXSxcbiAgICAgICAgICAgIHNlYXJjaFdpZGdldDogJycsXG4gICAgICAgICAgICBzcGVjaWFsaXphdGlvbl9pZDogJycsXG4gICAgICAgICAgICBoaWRlRm9vdGVyV2lkZ2V0OiB0cnVlLFxuICAgICAgICAgICAgc2hvd1BvcHVwOiBmYWxzZSxcbiAgICAgICAgICAgIG1lZEJ0blRvcDogJycsXG4gICAgICAgICAgICBzaG93UGhhcm1hY3lBdENsaWVudDogZmFsc2UsXG4gICAgICAgICAgICBzaG93UGhhcm1hY3lGb290ZXI6IHRydWUsXG4gICAgICAgICAgICBzaG93TWFpblBvcHVwOiBmYWxzZSxcbiAgICAgICAgICAgIGlzTWVkaWNpbmVQYWdlOiB0aGlzLnByb3BzLm1hdGNoLnVybC5pbmNsdWRlcygnLW1kZHAnKSxcbiAgICAgICAgICAgIHBob25lX251bWJlcjpcIlwiLFxuICAgICAgICAgICAgaW5WYWxpZFBobm86ZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuYXJ0aWNsZURhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0QXJ0aWNsZURhdGEoKVxuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm1hdGNoLnBhdGguc3BsaXQoJy0nKVsxXSA9PT0gJ21kZHAnKSB7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRMb2NhdGlvbiA9ICcnXG4gICAgICAgICAgICBsZXQgbGF0ID0gMjguNjQ0ODAwXG4gICAgICAgICAgICBsZXQgbG9uZyA9IDc3LjIxNjcyMVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbikge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkTG9jYXRpb24gPSB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb247XG4gICAgICAgICAgICAgICAgbGF0ID0gc2VsZWN0ZWRMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sYXRcbiAgICAgICAgICAgICAgICBsb25nID0gc2VsZWN0ZWRMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sbmdcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGxhdCA9PT0gJ2Z1bmN0aW9uJykgbGF0ID0gbGF0KClcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGxvbmcgPT09ICdmdW5jdGlvbicpIGxvbmcgPSBsb25nKClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRPZmZlckxpc3QobGF0LCBsb25nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGlkZUZvb3RlcldpZGdldDogZmFsc2UsIHNob3dQaGFybWFjeUF0Q2xpZW50OiB0cnVlIH0pXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dQaGFybWFjeUZvb3RlcjogdHJ1ZX0pXG4gICAgICAgIH0sNjAwMClcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuaXNNZWRpY2luZVBhZ2Upe1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dNYWluUG9wdXA6IHRydWUgfSlcbiAgICAgICAgICAgIH0sIDQwMDApXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpbmRvdyAmJiB0aGlzLnByb3BzLm1hdGNoLnBhdGguc3BsaXQoJy0nKVsxXSA9PT0gJ21kZHAnKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxIYW5kbGVyKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNlc3Npb25JZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2lGcmFtZUlkJylcbiAgICAgICAgaWYgKCFzZXNzaW9uSWQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaUZyYW1lU3RhdGUoJycsIHRydWUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzY3JvbGxIYW5kbGVyKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudCkge1xuICAgICAgICAgICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lZGljaW5lLWJ0bicpXG4gICAgICAgICAgICAgICAgbGV0IGVsZW1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVkaWNpbmUtYnRuLWRpdicpXG5cbiAgICAgICAgICAgICAgICBpZiAoZWxlbSAmJiBlbGVtQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGFsZXJ0KHdpbmRvdy5zY3JvbGxZICsnYScrIGVsZW1Db250YWluZXIub2Zmc2V0VG9wKVxuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93ICYmICh3aW5kb3cuc2Nyb2xsWSA+PSBlbGVtQ29udGFpbmVyLm9mZnNldEhlaWdodCArIDMzNSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUuYmFja2dyb3VuZCA9ICcjMWI5N2ZkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnMHB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbUNvbnRhaW5lci5zdHlsZS5wYWRkaW5nID0gJzBweCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUuYmFja2dyb3VuZCA9ICcjMWI5N2ZkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNXB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbUNvbnRhaW5lci5zdHlsZS5wYWRkaW5nID0gJzBweCAxNXB4J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMClcblxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBnZXRBcnRpY2xlRGF0YSgpIHtcbiAgICAgICAgbGV0IGFydGljbGVJZCA9IHRoaXMucHJvcHMubWF0Y2gudXJsXG4gICAgICAgIGlmIChhcnRpY2xlSWQpIHtcbiAgICAgICAgICAgIGFydGljbGVJZCA9IGFydGljbGVJZC50b0xvd2VyQ2FzZSgpLnN1YnN0cmluZygxLCBhcnRpY2xlSWQubGVuZ3RoKVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5mZXRjaEFydGljbGUoYXJ0aWNsZUlkLCB0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygncHJldmlldycpLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFlcnIgLyomJiAhdGhpcy5zdGF0ZS5hcnRpY2xlRGF0YSovKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhcnRpY2xlRGF0YTogZGF0YSwgYXJ0aWNsZUxvYWRlZDogdHJ1ZSwgcmVwbHlPcGVuRm9yOiAnJyB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Ib21lQ2xpY2soZXZlbnQsIGxpbmspIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2gobGluayk7XG4gICAgfVxuXG4gICAgZmFjZWJvb2tDbGljaygpIHtcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PScgKyBkb2N1bWVudC5VUkwsICdmYWNlYm9vay1wb3B1cCcsICdoZWlnaHQ9MzUwLHdpZHRoPTYwMCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHdpdHRlckNsaWNrKCkge1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cub3BlbignaHR0cHM6Ly90d2l0dGVyLmNvbS9zaGFyZT91cmw9JyArIGRvY3VtZW50LlVSTCwgJ3R3aXR0ZXItcG9wdXAnLCAnaGVpZ2h0PTM1MCx3aWR0aD02MDAnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxpbmtlZGluQ2xpY2soKSB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKGBodHRwczovL3d3dy5saW5rZWRpbi5jb20vc2hhcmVBcnRpY2xlP21pbmk9dHJ1ZSZ1cmw9JHtkb2N1bWVudC5VUkx9JnRpdGxlPSR7dGhpcy5zdGF0ZS5hcnRpY2xlRGF0YS50aXRsZS5zcGxpdCgnfCcpWzBdfSZzb3VyY2U9ZG9jcHJpbWUuY29tYCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB3aGF0c2FwcENsaWNrKCkge1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cub3BlbihgaHR0cHM6Ly93YS5tZS8/dGV4dD0ke2RvY3VtZW50LlVSTH1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbW1lbnRSZXBseUNsaWNrZWQoaWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlcGx5T3BlbkZvcjogaWQgfSlcbiAgICB9XG5cbiAgICBwb3N0UmVwbHkoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmNvbW1lbnQpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2Ugd3JpdGUgdmFsaWQgY29tbWVudFwiIH0pXG4gICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBsZXQgcG9zdERhdGEgPSB7XG4gICAgICAgICAgICBhcnRpY2xlOiB0aGlzLnN0YXRlLmFydGljbGVEYXRhLmlkLFxuICAgICAgICAgICAgY29tbWVudDogdGhpcy5zdGF0ZS5jb21tZW50LFxuICAgICAgICAgICAgbmFtZTogT2JqZWN0LnZhbHVlcyh0aGlzLnByb3BzLnByb2ZpbGVzKS5sZW5ndGggJiYgdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXSA/IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0ubmFtZSA6ICcnLFxuICAgICAgICAgICAgZW1haWw6IE9iamVjdC52YWx1ZXModGhpcy5wcm9wcy5wcm9maWxlcykubGVuZ3RoICYmIHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0gPyB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGVdLmVtYWlsIDogJycsXG4gICAgICAgICAgICBwYXJlbnQ6IHRoaXMuc3RhdGUucmVwbHlPcGVuRm9yXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5wb3N0Q29tbWVudChwb3N0RGF0YSwgKGVycm9yLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb21tZW50OiAnJyB9KVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0QXJ0aWNsZURhdGEoKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiQ29tbWVudCBQb3N0ZWQgU3VjZXNzZnVsbHksIEF3YWl0aW5nIG1vZGVyYXRpb25cIiB9KVxuICAgICAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJDb3VsZCBub3QgcG9zdCB5b3VyIGNvbW1lbnQsIFRyeSBhZ2FpbiFcIiB9KVxuICAgICAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaGFuZGxlSW5wdXRDb21tZW50KGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbW1lbnQ6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgfVxuXG4gICAgZ2V0Q2l0eUxpc3Qoa2V5KSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuc2VhcmNoQ2l0aWVzLmxlbmd0aCA+IDAgJiYgdGhpcy5zdGF0ZS5zZWFyY2hXaWRnZXQgPT0ga2V5ID9cbiAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1iLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbW9uLXNlYXJjaC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNyY2gtaGVhZGluZ1wiPkxvY2F0aW9uIFNlYXJjaDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbW9uLWxpc3RpbmctY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWFyY2hDaXRpZXMubWFwKChyZXN1bHQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiIG9uQ2xpY2s9e3RoaXMuc2VsZWN0TG9jYXRpb24uYmluZCh0aGlzLCByZXN1bHQpfT57cmVzdWx0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+IDogJydcblxuICAgIH1cblxuICAgIGdldENpdHlMaXN0TGF5b3V0KHNlYXJjaFJlc3VsdHMgPSBbXSwgc2VhcmNoUGFyYW1zID0ge30pIHtcbiAgICAgICAgbGV0IHNwZWNpYWxpemF0aW9uX2lkID0gJydcbiAgICAgICAgbGV0IHNlYXJjaFdpZGdldCA9ICcnXG4gICAgICAgIGlmIChzZWFyY2hQYXJhbXMgJiYgT2JqZWN0LnZhbHVlcyhzZWFyY2hQYXJhbXMpLmxlbmd0aCkge1xuICAgICAgICAgICAgc3BlY2lhbGl6YXRpb25faWQgPSBzZWFyY2hQYXJhbXMuc3BlY2lhbGl0eUlkXG4gICAgICAgICAgICBzZWFyY2hXaWRnZXQgPSBzZWFyY2hQYXJhbXMud2lkZ2V0SWRcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VhcmNoUmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hDaXRpZXM6IHNlYXJjaFJlc3VsdHMsIHNlYXJjaFdpZGdldDogc2VhcmNoV2lkZ2V0LCBzcGVjaWFsaXphdGlvbl9pZDogc3BlY2lhbGl6YXRpb25faWQgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hDaXRpZXM6IFtdLCBzZWFyY2hXaWRnZXQ6IHNlYXJjaFdpZGdldCwgc3BlY2lhbGl6YXRpb25faWQ6IHNwZWNpYWxpemF0aW9uX2lkIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3RMb2NhdGlvbihjaXR5KSB7XG4gICAgICAgIHRoaXMuY2hpbGQuc2VsZWN0TG9jYXRpb24oKGNpdHkpLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hDaXRpZXM6IFtdIH0pXG4gICAgICAgICAgICBsZXQgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0FydGljbGVQYWdlTG9jYXRpb25TZWxlY3RlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2FydGljbGUtcGFnZS1sb2NhdGlvbi1zZWxlY3RlZCcsIHNlbGVjdGVkSWQ6IHRoaXMuc3RhdGUuc3BlY2lhbGl6YXRpb25faWQgfHwgJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNwZWNpYWxpemF0aW9uX2lkKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNyaXRlcmlhID0ge31cbiAgICAgICAgICAgICAgICBjcml0ZXJpYS5pZCA9IHRoaXMuc3RhdGUuc3BlY2lhbGl6YXRpb25faWRcbiAgICAgICAgICAgICAgICBjcml0ZXJpYS5uYW1lID0gJydcbiAgICAgICAgICAgICAgICBjcml0ZXJpYS50eXBlID0gJ3NwZWNpYWxpdHknXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbG9uZUNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzKGNyaXRlcmlhKVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvb3BkL3NlYXJjaHJlc3VsdHNgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlQ2xvc2UoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoaWRlRm9vdGVyV2lkZ2V0OiB0cnVlIH0pXG4gICAgfVxuXG4gICAgYnV5TWVkaWNpbmVDbGljayhmb290ZXJCdXlOb3cgPSBmYWxzZSkge1xuICAgICAgICBsZXQgZ3RtRGF0YSA9IHt9XG4gICAgICAgIGlmKGZvb3RlckJ1eU5vdykge1xuICAgICAgICAgICAgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0J1eU1lZGljaW5lRm9vdGVyQnRuQ2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdidXktbWVkaWNpbmUtZm9vdGVyLWJ0bi1jbGljaycsICdhcnRpY2xlSWQnOiB0aGlzLnN0YXRlLmFydGljbGVEYXRhICYmIHRoaXMuc3RhdGUuYXJ0aWNsZURhdGEuaWQgPyB0aGlzLnN0YXRlLmFydGljbGVEYXRhLmlkIDogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0J1eU1lZGljaW5lQnRuQ2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdidXktbWVkaWNpbmUtYnRuLWNsaWNrJywgJ2FydGljbGVJZCc6IHRoaXMuc3RhdGUuYXJ0aWNsZURhdGEgJiYgdGhpcy5zdGF0ZS5hcnRpY2xlRGF0YS5pZCA/IHRoaXMuc3RhdGUuYXJ0aWNsZURhdGEuaWQgOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93UG9wdXA6IHRydWUgfSwgKCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNvbnRpbnVlQ2xpY2soKSwgMTAwMCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bURhdGEgfSlcbiAgICB9XG5cbiAgICBjb250aW51ZUNsaWNrKCkge1xuICAgICAgICAvLyBsZXQgZ3RtRGF0YSA9IHtcbiAgICAgICAgLy8gICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnTWVkaWNpbmVQYWdlQ29udGludWVDbGljaycsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ21lZGljaW5lLXBhZ2UtY29udGludWUtY2xpY2snXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gR1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bURhdGEgfSlcbiAgICAgICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB2YXIgaXNTYWZhcmkgPSAvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgICAgICAgaWYgKC9tb2JpbGUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICFpc1NhZmFyaSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaUZyYW1lU3RhdGUodGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZSwgZmFsc2UpXG4gICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnaUZyYW1lSWQnLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmFydGljbGVEYXRhICYmIHRoaXMuc3RhdGUuYXJ0aWNsZURhdGEucGhhcm1lYXN5X3VybCkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cub3Blbih0aGlzLnN0YXRlLmFydGljbGVEYXRhLnBoYXJtZWFzeV91cmwsICdfYmxhbmsnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oQ09ORklHLlBIQVJNRUFTWV9JRlJBTUVfVVJMLCAnX2JsYW5rJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzaG93UG9wdXA6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCAxMDAwKVxuICAgIH1cblxuICAgIGhpZGVQb3B1cCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dQb3B1cDogZmFsc2UgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtwaG9uZV9udW1iZXI6ZS50YXJnZXQudmFsdWV9KSBcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvR29sZCA9IChlKSA9PntcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQXJ0aWNsZUdvbGRCYW5uZXJDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnYXJ0aWNsZS1nb2xkLWJhbm5lci1jbGlja2VkJ1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdmlwLWdvbGQtZGV0YWlscz9pc19nb2xkPXRydWUmc291cmNlPW1vYmlsZS1tZWRpY2luZS1iYW5uZXItZ29sZC1jbGlja2VkJmxlYWRfc291cmNlPURvY3ByaW1lJylcbiAgICAgICAgLy8gbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIC8vIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKSBcbiAgICAgICAgLy8gaWYodGhpcy5zdGF0ZS5waG9uZV9udW1iZXIgPT0gXCJcIiAmJiB0aGlzLnN0YXRlLnBob25lX251bWJlci5sZW5ndGggPDEwKXtcbiAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe2luVmFsaWRQaG5vOnRydWV9KVxuICAgICAgICAvLyAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgZW50ZXIgdmFsaWQgcGhvbmUgbnVtYmVyXCIgfSlcbiAgICAgICAgLy8gfWVsc2V7XG4gICAgICAgIC8vICAgICBpZighdGhpcy5zdGF0ZS5waG9uZV9udW1iZXIubWF0Y2goL15bNTY3ODldezF9WzAtOV17OX0kLykgfHwgdGhpcy5zdGF0ZS5waG9uZV9udW1iZXIubGVuZ3RoID4xMCl7XG4gICAgICAgIC8vICAgICAgIHRoaXMuc2V0U3RhdGUoe2luVmFsaWRQaG5vOnRydWV9KSAgXG4gICAgICAgIC8vICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgZW50ZXIgdmFsaWQgcGhvbmUgbnVtYmVyXCIgfSlcbiAgICAgICAgLy8gICAgIH1lbHNle1xuICAgICAgICAvLyAgICAgICAgIGxldCBMZWFkX2RhdGEgPSB7fVxuICAgICAgICAvLyAgICAgICAgIExlYWRfZGF0YS5sZWFkX3R5cGUgPSAnTUVESUNJTkUnXG4gICAgICAgIC8vICAgICAgICAgTGVhZF9kYXRhLmxlYWRfc291cmNlID0gJ21lZGljaW5lJ1xuICAgICAgICAvLyAgICAgICAgIExlYWRfZGF0YS5leGl0cG9pbnRfdXJsID0gJ2h0dHA6Ly9kb2NwcmltZS5jb20nICsgdGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZVxuICAgICAgICAvLyAgICAgICAgIExlYWRfZGF0YS5zb3VyY2UgPSBwYXJzZWRcbiAgICAgICAgLy8gICAgICAgICBMZWFkX2RhdGEucGhvbmVfbnVtYmVyID0gdGhpcy5zdGF0ZS5waG9uZV9udW1iZXJcbiAgICAgICAgLy8gICAgICAgICBpZihzZWxmLnByb3BzLmNvbW1vbl91dG1fdGFncyAmJiBzZWxmLnByb3BzLmNvbW1vbl91dG1fdGFncy5sZW5ndGgpe1xuICAgICAgICAvLyAgICAgICAgICAgICBMZWFkX2RhdGEudXRtX3RhZ3MgPSBzZWxmLmdldFV0bVRhZ3MoKVxuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICBzZWxmLnByb3BzLk5vbklwZEJvb2tpbmdMZWFkKExlYWRfZGF0YSlcbiAgICAgICAgLy8gICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgLy8gICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0FydGljbGVHb2xkQmFubmVyQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2FydGljbGUtZ29sZC1iYW5uZXItY2xpY2tlZCdcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3ZpcC1nb2xkLWRldGFpbHM/aXNfZ29sZD10cnVlJnNvdXJjZT1tb2JpbGUtbWVkaWNpbmUtYmFubmVyLWdvbGQtY2xpY2tlZCZsZWFkX3NvdXJjZT1Eb2NwcmltZScpXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICB9XG4gICAgZ2V0VXRtVGFncygpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCB1dG1fdGFncyA9IHtcbiAgICAgICAgICAgIHV0bV9zb3VyY2U6IHBhcnNlZC51dG1fc291cmNlIHx8ICcnLFxuICAgICAgICAgICAgdXRtX21lZGl1bTogcGFyc2VkLnV0bV9tZWRpdW0gfHwgJycsXG4gICAgICAgICAgICB1dG1fdGVybTogcGFyc2VkLnV0bV90ZXJtIHx8ICcnLFxuICAgICAgICAgICAgdXRtX2NhbXBhaWduOiBwYXJzZWQudXRtX2NhbXBhaWduIHx8ICcnLFxuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MgJiYgdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MubGVuZ3RoKXtcbiAgICAgICAgICAgIHV0bV90YWdzID0gdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MuZmlsdGVyKHg9PngudHlwZSA9PSBcImNvbW1vbl94dHJhX3RhZ3NcIilbMF0udXRtX3RhZ3NcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1dG1fdGFnc1xuICAgIH1cbiAgICBtYWluUG9wdXBEYXRhKCkge1xuICAgICAgICBsZXQgZGF0YSA9IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZUltZ1BvcFwiPlxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInAtcmVsYXRpdmUgZ29sZC1tZWQtYm5yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGdvbGQtbWVkLWNsc1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwLXBvcC1jbHMuc3ZnJ30gb25DbGljaz17KGV2ZW50KT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdBcnRpY2xlR29sZEJhbm5lckNyb3NzQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2FydGljbGUtZ29sZC1iYW5uZXItY3Jvc3MtY2xpY2tlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dNYWluUG9wdXA6ZmFsc2V9KX19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvcG9waW1hZ2UucG5nJ30gb25DbGljaz17dGhpcy5uYXZpZ2F0ZVRvR29sZH0vPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZC1wb3BVcElucHV0LWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBtb2JpbGUgbnVtYmVyIHRvIHZpZXcgb2ZmZXJcIiBtYXhMZW5ndGg9XCIxMFwiIHZhbHVlPXt0aGlzLnN0YXRlLnBob25lX251bWJlcn0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBzdHlsZT17e2JvcmRlcjp0aGlzLnN0YXRlLmluVmFsaWRQaG5vPycxcHggc29saWQgcmVkJzonJ319Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMubmF2aWdhdGVUb0dvbGR9IGNsYXNzTmFtZT1cIm1lZC1wb3BCdG5cIj5CZWNvbWUgR29sZCBNZW1iZXIgTm93IDxzcGFuIGNsYXNzTmFtZT1cImNpcmNsZS1hcnJvd1wiPjxpPjwvaT48L3NwYW4+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1yZWxhdGl2ZSBnb2xkLW1lZC1ibnIgY292aWRCYW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWQgZ29sZC1tZWQtY2xzXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXAtcG9wLWNscy5zdmcnfSBvbkNsaWNrPXsoZXZlbnQpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0FydGljbGVHb2xkQmFubmVyQ3Jvc3NDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnYXJ0aWNsZS1nb2xkLWJhbm5lci1jcm9zcy1jbGlja2VkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd01haW5Qb3B1cDpmYWxzZX0pfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGg0PlByb3RlY3QgeW91cnNlbGYgYWdhaW5zdDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxwPkNPUjxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXJ1cy5zdmcnfS8+TkFWSVJVUzwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViVHh0Q29yb25hXCI+XCJTdGF5IGhvbWUgYW5kIFZpZXcgUXVvdGVzIE9ubGluZVwiPC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdmlkQnRuLWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3Rlcm1saWZlLnBvbGljeWJhemFhci5jb20vP3BiX3NvdXJjZT1kb2NwcmltZSBcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibWVkLXBvcEJ0blwiPjxzcGFuIGNsYXNzTmFtZT1cInVwTmFtZVwiPkNvdmlkLTE5IGNvdmVyZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvaW5zLnN2Zyd9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlRlcm0gSW5zdXJhbmNlPC9zcGFuPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2hlYWx0aC5wb2xpY3liYXphYXIuY29tLz91dG1fc291cmNlPWRvY3ByaW1lXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cIm1lZC1wb3BCdG5cIj48c3BhbiBjbGFzc05hbWU9XCJ1cE5hbWVcIj5ObyBtZWRpY2FsIHJlcXVpcmVkPC9zcGFuPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9oZWx0aC5zdmcnfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5IZWFsdGggSW5zdXJhbmNlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgaXNVc2VyTG9naW4gPSBPYmplY3QudmFsdWVzKHRoaXMucHJvcHMucHJvZmlsZXMpLmxlbmd0aCB8fCBTVE9SQUdFLmNoZWNrQXV0aCgpXG4gICAgICAgIGxldCBjb21tZW50c0V4aXN0cyA9IHRoaXMuc3RhdGUuYXJ0aWNsZURhdGEgJiYgdGhpcy5zdGF0ZS5hcnRpY2xlRGF0YS5jb21tZW50cy5sZW5ndGggPyB0aGlzLnN0YXRlLmFydGljbGVEYXRhLmNvbW1lbnRzLmxlbmd0aCA6IG51bGxcblxuICAgICAgICBsZXQgbG9jYXRpb25OYW1lID0gXCJcIlxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5mb3JtYXR0ZWRfYWRkcmVzcykge1xuICAgICAgICAgICAgbG9jYXRpb25OYW1lID0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLmZvcm1hdHRlZF9hZGRyZXNzXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2hvd0lmcmFtZSA9IGZhbHNlXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmlGcmFtZVVybHMuaW5jbHVkZXModGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIHNob3dJZnJhbWUgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2Vzc2lvbklkID0gbnVsbFxuICAgICAgICBpZiAodHlwZW9mIHNlc3Npb25TdG9yYWdlID09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHNlc3Npb25JZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2lGcmFtZUlkJylcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIiBzdHlsZT17c2hvd0lmcmFtZSAmJiBzZXNzaW9uSWQgPyB7fSA6IHsgcGFkZGluZ0JvdHRvbTogNTQgfX0+XG4gICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd01haW5Qb3B1cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFpblBvcHVwIHJlc3A9e3RoaXMubWFpblBvcHVwRGF0YSgpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYXJ0aWNsZURhdGEgJiYgc2hvd0lmcmFtZSAmJiBzZXNzaW9uSWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZSBzcmM9e3RoaXMuc3RhdGUuYXJ0aWNsZURhdGEucGhhcm1lYXN5X3VybCA/IHRoaXMuc3RhdGUuYXJ0aWNsZURhdGEucGhhcm1lYXN5X3VybCA6IENPTkZJRy5QSEFSTUVBU1lfSUZSQU1FX1VSTH0gY2xhc3NOYW1lPVwicGhhcm1lYXN5LWlmcmFtZVwiPjwvaWZyYW1lPlxuICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBhcnRpY2xlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93UG9wdXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb29raW5nQ29uZmlybWF0aW9uUG9wdXAgY29udGludWVDbGljaz17KCkgPT4gdGhpcy5jb250aW51ZUNsaWNrKCl9IGlGcmFtZVBvcHVwPXt0cnVlfSBoaWRlUG9wdXA9eygpID0+IHRoaXMuaGlkZVBvcHVwKCl9IC8+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93UG9wdXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkZXIgaUZyYW1lUG9wdXA9e3RydWV9IC8+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0QmFyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjZW50ZXItY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFydGljbGVEYXRhID8gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgYXJ0aWNsZS1jb2x1bW5cIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlbG1ldFRhZ3MgdGFnc0RhdGE9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogKHRoaXMuc3RhdGUuYXJ0aWNsZURhdGEuc2VvID8gdGhpcy5zdGF0ZS5hcnRpY2xlRGF0YS5zZW8udGl0bGUgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogKHRoaXMuc3RhdGUuYXJ0aWNsZURhdGEuc2VvID8gdGhpcy5zdGF0ZS5hcnRpY2xlRGF0YS5zZW8uZGVzY3JpcHRpb24gOiBcIlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXl3b3JkczogKHRoaXMuc3RhdGUuYXJ0aWNsZURhdGEuc2VvID8gdGhpcy5zdGF0ZS5hcnRpY2xlRGF0YS5zZW8ua2V5d29yZHMgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5vbmljYWxVcmw6IGAke0NPTkZJRy5BUElfQkFTRV9VUkx9JHt0aGlzLnByb3BzLm1hdGNoLnVybH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYTogdGhpcy5zdGF0ZS5hcnRpY2xlRGF0YS50aXRsZSA9PT0gJ0Jsb29kIFByZXNzdXJlIHwgQ2F1c2VzLCBUcmVhdG1lbnQsIFRlc3RzICYgVmFjY2luZXMnID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJAY29udGV4dFwiOiBcImh0dHA6Ly9zY2hlbWEub3JnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkB0eXBlXCI6IFwiTWVkaWNhbENvbmRpdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbHRlcm5hdGVOYW1lXCI6IFwiQmxvb2QgUHJlc3N1cmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXNzb2NpYXRlZEFuYXRvbXlcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQHR5cGVcIjogXCJBbmF0b21pY2FsU3RydWN0dXJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaGVhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2F1c2VcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJAdHlwZVwiOiBcIk1lZGljYWxDYXVzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTbW9raW5nLCBTdHJlc3MsR2VuZXRpY3MsSGVhcnQgYXJyaHl0aG1pYXMsQmxvb2QgdmVzc2VsIGRpbGF0aW9uLEhlYXQgc3Ryb2tlLCBQcmVnbmFuY3ksTGl2ZXIgRGlzZWFzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29kZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJAdHlwZVwiOiBcIk1lZGljYWxDb2RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2RlXCI6IFwiNDAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2RpbmdTeXN0ZW1cIjogXCJJQ0QtOS1DTVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaWZmZXJlbnRpYWxEaWFnbm9zaXNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQHR5cGVcIjogXCJERHhFbGVtZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaWFnbm9zaXNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkB0eXBlXCI6IFwiTWVkaWNhbENvbmRpdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJMb3cgQmxvb2QgUHJlc3N1cmUgJiBIaWdoIEJsb29kIFByZXN1cmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXN0aW5ndWlzaGluZ1NpZ25cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkB0eXBlXCI6IFwiTWVkaWNhbFN5bXB0b21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlNldmVyZSBoZWFkYWNoZSxGYXRpZ3VlLE1lbnRhbCBDb25mdXNpb24sUGFpbiBpbiBjaGVzdCwgTWVudGFsIENvbmZ1c2lvbixQYWxlLCBkYW1wLCBjb2xkIHNraW4sQnJlYXRoaW5nIGRpZmZpY3VsdGllcywgV2VhayBQdWxzZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkhpZ2ggJiBMb3cgQmxvb2QgUHJlc3N1cmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicG9zc2libGVUcmVhdG1lbnRcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJAdHlwZVwiOiBcImRydWdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ29uc3VsdCBEb2N0b3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJpc2tGYWN0b3JcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJAdHlwZVwiOiBcIk1lZGljYWxSaXNrRmFjdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkFnZSxHZW5kZXIsIFNtb2tpbmcsIFRvdGFsIGNob2xlc3Rlcm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWNvbmRhcnlQcmV2ZW50aW9uXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQHR5cGVcIjogXCJMaWZlc3R5bGVNb2RpZmljYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic3RvcHBpbmcgc21va2luZyx3ZWlnaHQgbWFuYWdlbWVudCxpbmNyZWFzZWQgcGh5c2ljYWwgYWN0aXZpdHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpZ25PclN5bXB0b21cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJAdHlwZVwiOiBcIk1lZGljYWxTeW1wdG9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkxpZ2h0LWhlYWRlZG5lc3Mgb3Igd29vemluZXNzLCBGYWludGluZywgTmF1c2VhLCBFeGhhdXN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubWF0Y2gucGF0aC5zcGxpdCgnLScpWzFdID09PSAnbWRkcCcgJiYgdGhpcy5wcm9wcy5vZmZlckxpc3QgJiYgdGhpcy5wcm9wcy5vZmZlckxpc3QuZmlsdGVyKHggPT4geC5zbGlkZXJfbG9jYXRpb24gPT09ICdtZWRpY2luZV9kZXRhaWxfcGFnZScpLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYW5uZXJDYXJvdXNlbCB7Li4udGhpcy5wcm9wc30gc2xpZGVyTG9jYXRpb249XCJtZWRpY2luZV9kZXRhaWxfcGFnZVwiIC8+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1yYi0xMCBicmVhZGNydW1iLWxpc3RcIiBzdHlsZT17eyB3b3JkQnJlYWs6ICdicmVhay13b3JkJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5vbkhvbWVDbGljayhlLCBcIi9cIil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwIGJyZWFkY3J1bWItdGl0bGUgYnJlYWRjcnVtYi1jb2xvcmVkLXRpdGxlXCI+SG9tZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmVhZGNydW1iLWFycm93XCI+Jmd0Ozwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgLyR7dGhpcy5zdGF0ZS5hcnRpY2xlRGF0YS5jYXRlZ29yeS51cmx9YH0gb25DbGljaz17KGUpID0+IHRoaXMub25Ib21lQ2xpY2soZSwgYC8ke3RoaXMuc3RhdGUuYXJ0aWNsZURhdGEuY2F0ZWdvcnkudXJsfWApfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMCBicmVhZGNydW1iLXRpdGxlIGJyZWFkY3J1bWItY29sb3JlZC10aXRsZVwiPnt0aGlzLnN0YXRlLmFydGljbGVEYXRhLmNhdGVnb3J5Lm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItYXJyb3dcIj4mZ3Q7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubWF0Y2gucGF0aC5zcGxpdCgnLScpWzFdID09PSAnbm1kcCcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmdy01MDAgYnJlYWRjcnVtYi10aXRsZVwiPnt0aGlzLnN0YXRlLmFydGljbGVEYXRhLmhlYWRpbmdfdGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxoMiBjbGFzc05hbWU9XCJmdy01MDAgYnJlYWRjcnVtYi10aXRsZVwiPnt0aGlzLnN0YXRlLmFydGljbGVEYXRhLnRpdGxlLnNwbGl0KCd8JylbMF19PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydC1zaGFyaW5nLWRpdiBtcnQtMjAgbXJiLTIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnQtc2hhcmluZy1idG4gbXItM1wiIG9uQ2xpY2s9eygpID0+IHRoaXMuZmFjZWJvb2tDbGljaygpfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZmFjZWJvb2suc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnQtc2hhcmluZy1idG4gbWwtMyBtci0zXCIgb25DbGljaz17KCkgPT4gdGhpcy50d2l0dGVyQ2xpY2soKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvdHdpdHRlci5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydC1zaGFyaW5nLWJ0biBtbC0zIG1yLTNcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmxpbmtlZGluQ2xpY2soKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvbGlua2VkaW4uc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnQtc2hhcmluZy1idG4gbWwtM1wiIG9uQ2xpY2s9eygpID0+IHRoaXMud2hhdHNhcHBDbGljaygpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy93aGF0c2FwcC5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hcnRpY2xlRGF0YS5oZWFkZXJfaW1hZ2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBwYWRkaW5nQm90dG9tOiAnNHB4JyB9fSBzcmM9e3RoaXMuc3RhdGUuYXJ0aWNsZURhdGEuaGVhZGVyX2ltYWdlfSBhbHQ9e3RoaXMuc3RhdGUuYXJ0aWNsZURhdGEuaGVhZGVyX2ltYWdlX2FsdH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hcnRpY2xlRGF0YSAmJiB0aGlzLnN0YXRlLmFydGljbGVEYXRhLmhlYWRpbmdfdGl0bGUgPyA8ZGl2IGNsYXNzTmFtZT1cImRwLWFydGljbGUtaGVhZGluZyBtcmItMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZ3LTUwMFwiPnt0aGlzLnN0YXRlLmFydGljbGVEYXRhLmhlYWRpbmdfdGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnN0YXRlLnNob3dQaGFybWFjeUF0Q2xpZW50ICYmIHRoaXMuc3RhdGUuYXJ0aWNsZURhdGEgJiYgdGhpcy5zdGF0ZS5hcnRpY2xlRGF0YS50aXRsZSAmJiB0aGlzLnByb3BzLm1hdGNoLnBhdGguc3BsaXQoJy0nKVsxXSA9PT0gJ21kZHAnID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXktbWVkLWJ0blwiIGlkPVwibWVkaWNpbmUtYnRuLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjMWI5N2ZkJ319IGNsYXNzTmFtZT1cInYtYnRuIHYtYnRuLXByaW1hcnkgYnRuLWxnIHRleHQtc21cIiBpZD1cIm1lZGljaW5lLWJ0blwiIG9uQ2xpY2s9eygpID0+IHRoaXMuYnV5TWVkaWNpbmVDbGljaygpfT5PcmRlciB7Lyp0aGlzLnN0YXRlLmFydGljbGVEYXRhLnRpdGxlLnNwbGl0KCd8JylbMF0qL30gbm93IGF0IEZsYXQgMjAlIE9mZjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV5LW1lZC10YWdsaW5lIG1yYi0yMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogMywgZm9udFNpemU6IDEyIH19PlBvd2VyZWQgYnkgOiA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6IDcyIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3BoYXJtRWFzeS5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIDwvUmVhY3QuRnJhZ21lbnQ+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYXJ0aWNsZURhdGEgJiYgdGhpcy5zdGF0ZS5hcnRpY2xlRGF0YS5hdXRob3IgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJ0aWNsZUF1dGhvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5zdGF0ZS5hcnRpY2xlRGF0YS5hdXRob3IubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVJbWFnZT17dGhpcy5zdGF0ZS5hcnRpY2xlRGF0YS5hdXRob3IucHJvZmlsZV9pbWd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9e3RoaXMuc3RhdGUuYXJ0aWNsZURhdGEuYXV0aG9yLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXt0aGlzLnN0YXRlLmFydGljbGVEYXRhLmF1dGhvci5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWNpYWxpdHk9e3RoaXMuc3RhdGUuYXJ0aWNsZURhdGEuYXV0aG9yLnNwZWNpYWxpdHlbMF0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVyaWVuY2U9e3RoaXMuc3RhdGUuYXJ0aWNsZURhdGEuYXV0aG9yLmV4cGVyaWVuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdWJsaXNoZWREYXRlPXt0aGlzLnN0YXRlLmFydGljbGVEYXRhLnB1Ymxpc2hlZF9kYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeT17dGhpcy5wcm9wcy5oaXN0b3J5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFydGljbGVEYXRhICYmIHRoaXMuc3RhdGUuYXJ0aWNsZURhdGEuYm9keV9kb21zICYmIHRoaXMuc3RhdGUuYXJ0aWNsZURhdGEuYm9keV9kb21zLm1hcCgodmFsLCBrZXkpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsLnR5cGUuaW5jbHVkZXMoJ2h0bWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT1cImRvY3ByaW1lLWFydGljbGVcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHZhbC5jb250ZW50IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsLnR5cGUuaW5jbHVkZXMoJ3NlYXJjaF93aWRnZXQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT1cInN0aWNreS1hcnRpY2xlLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsLmNvbnRlbnQubGF0ICYmIHZhbC5jb250ZW50LmxuZyAmJiB2YWwuY29udGVudC5sb2NhdGlvbl9uYW1lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tb25TZWFyY2ggey4uLnRoaXMucHJvcHN9IGxvY2F0aW9uPXt2YWwuY29udGVudC5sb2NhdGlvbl9uYW1lfSBsYXRpdHVkZT17dmFsLmNvbnRlbnQubGF0fSBsb25naXR1ZGU9e3ZhbC5jb250ZW50LmxuZ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdmFsLmNvbnRlbnQuc3BlY2lhbGl6YXRpb25faWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhdGlvbkVsZW1lbnRzIHsuLi50aGlzLnByb3BzfSBvblJlZj17cmVmID0+ICh0aGlzLmNoaWxkID0gcmVmKX0gZ2V0Q2l0eUxpc3RMYXlvdXQ9e3RoaXMuZ2V0Q2l0eUxpc3RMYXlvdXQuYmluZCh0aGlzKX0gcmVzdWx0VHlwZT0nc2VhcmNoJyBsb2NhdGlvbk5hbWU9e2xvY2F0aW9uTmFtZX0gYXJ0aWNsZVNlYXJjaFBhZ2U9e3RydWV9IHNwZWNpYWxpdHlOYW1lPXt2YWwuY29udGVudC5zcGVjaWFsaXphdGlvbl9uYW1lfSBzcGVjaWFsaXR5SWQ9e3ZhbC5jb250ZW50LnNwZWNpYWxpemF0aW9uX2lkfSB3aWRnZXRJZD17a2V5fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5nZXRDaXR5TGlzdChrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2F0aW9uRWxlbWVudHMgey4uLnRoaXMucHJvcHN9IG9uUmVmPXtyZWYgPT4gKHRoaXMuY2hpbGQgPSByZWYpfSBnZXRDaXR5TGlzdExheW91dD17dGhpcy5nZXRDaXR5TGlzdExheW91dC5iaW5kKHRoaXMpfSByZXN1bHRUeXBlPSdzZWFyY2gnIGxvY2F0aW9uTmFtZT0nJyB3aWRnZXRJZD17a2V5fSBjb21tb25TZWFyY2g9e3RydWV9IGFydGljbGVTZWFyY2hQYWdlPXt0cnVlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5nZXRDaXR5TGlzdChrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbW9uU2VhcmNoIHsuLi50aGlzLnByb3BzfSBjb21tb25TZWFyY2g9e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAvKjxkaXYgY2xhc3NOYW1lPVwiZG9jcHJpbWUtYXJ0aWNsZVwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGhpcy5zdGF0ZS5hcnRpY2xlRGF0YS5ib2R5IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hcnRpY2xlRGF0YSAmJiB0aGlzLnN0YXRlLmFydGljbGVEYXRhLmxhc3RfdXBkYXRlZF9hdCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFzdC11cGRhdGVkIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkxhc3QgdXBkYXRlZCBvbiA6IHt0aGlzLnN0YXRlLmFydGljbGVEYXRhLmxhc3RfdXBkYXRlZF9hdH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ydC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFydGljbGUtZGlzY2xhaW1lclwiPjxzcGFuIGNsYXNzTmFtZT1cImZ3LTcwMFwiPkRpc2NsYWltZXIgOiA8L3NwYW4+RG9jcHJpbWUgZG9lc27igJl0IGVuZG9yc2Ugb3IgdGFrZSBhbnkgZ3VhcmFudGVlIG9mIHRoZSBhY2N1cmFjeSBvciBjb21wbGV0ZW5lc3Mgb2YgaW5mb3JtYXRpb24gcHJvdmlkZWQgdW5kZXIgdGhpcyBhcnRpY2xlIGFuZCB0aGVzZSBhcmUgdGhlIHZpZXdzIHN0cmljdGx5IG9mIHRoZSB3cml0ZXIuIERvY3ByaW1lIHNoYWxsIG5vdCBiZSBoZWxkIHJlc3BvbnNpYmxlIGZvciBhbnkgYXNwZWN0IG9mIGhlYWx0aGNhcmUgc2VydmljZXMgYWRtaW5pc3RlcmVkIHdpdGggdGhlIGluZm9ybWF0aW9uIHByb3ZpZGVkIG9uIHRoaXMgYXJ0aWNsZS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFydGljbGVEYXRhICYmIHRoaXMuc3RhdGUuYXJ0aWNsZURhdGEuZm9vdGVyX3dpZGdldCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmhpZGVGb290ZXJXaWRnZXQgPyAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPEZvb3RlclRlc3RTcGVjaWFsaXphdGlvbldpZGdldHMgey4uLnRoaXMucHJvcHN9IGZvb3RlcldpZGdldD17dGhpcy5zdGF0ZS5hcnRpY2xlRGF0YS5mb290ZXJfd2lkZ2V0fSBoYW5kbGVDbG9zZT17dGhpcy5oYW5kbGVDbG9zZS5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93UGhhcm1hY3lGb290ZXIgJiYgdGhpcy5zdGF0ZS5zaG93UGhhcm1hY3lBdENsaWVudCAmJiB0aGlzLnN0YXRlLmFydGljbGVEYXRhICYmIHRoaXMuc3RhdGUuYXJ0aWNsZURhdGEudGl0bGUgJiYgdGhpcy5wcm9wcy5tYXRjaC5wYXRoLnNwbGl0KCctJylbMV0gPT09ICdtZGRwJyAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2Mtd2RndC1tZWQtY29udGFpbmVyIHBoYXJtLXBvcHVwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvYy13ZGd0LWJvb2stZG9jXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJkb2NDbG9zQnRuXCIgIG9uQ2xpY2s9eygpPT50aGlzLnNldFN0YXRlKHtzaG93UGhhcm1hY3lGb290ZXI6IGZhbHNlfSl9IHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9jcC9hc3NldHMvaW1nL2ljb25zL2Nsb3NlLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImRvYy13ZGd0LWhkbmdcIj5PcmRlciBEaWNsb21vbCBNZWRpY2luZSBPbmxpbmU8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGhybWVzeWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RkxBVCAyMCUgT0ZGPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmJ1eU1lZGljaW5lQ2xpY2sodHJ1ZSl9PkJ1eSBOb3c8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hcnRpY2xlRGF0YSAmJiB0aGlzLnN0YXRlLmFydGljbGVEYXRhLnRpdGxlICYmIHRoaXMucHJvcHMubWF0Y2gucGF0aC5zcGxpdCgnLScpWzFdID09PSAnbWRkcCcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXktbWVkLWJ0bi1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1eS1tZWQtdGFnbGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogMywgZm9udFNpemU6IDEyIH19PlBvd2VyZWQgYnkgOiA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6IDcyIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3BoYXJtRWFzeS5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1eS1tZWQtYnRuXCIgaWQ9XCJtZWRpY2luZS1idG4tZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidi1idG4gdi1idG4tcHJpbWFyeSBidG4tbGcgdGV4dC1zbVwiIGlkPVwibWVkaWNpbmUtYnRuXCIgb25DbGljaz17KCkgPT4gdGhpcy5idXlNZWRpY2luZUNsaWNrKCl9PkJ1eSB7dGhpcy5zdGF0ZS5hcnRpY2xlRGF0YS50aXRsZS5zcGxpdCgnfCcpWzBdfSBhdCBGbGF0IDIwJSBPZmY8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFydGljbGVEYXRhICYmIHRoaXMuc3RhdGUuYXJ0aWNsZURhdGEudGl0bGUgJiYgdGhpcy5wcm9wcy5tYXRjaC5wYXRoLnNwbGl0KCctJylbMV0gPT09ICdtZGRwJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInYtYnRuIHYtYnRuLXByaW1hcnkgYnRuLWxnIGZpeGVkIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIHN0aWNreS1idG4gdGV4dC1jZW50ZXJcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmJ1eU1lZGljaW5lQ2xpY2soKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCIgc3R5bGU9e3sgZm9udFNpemU6IDE2IH19PkJ1eSB7dGhpcy5zdGF0ZS5hcnRpY2xlRGF0YS50aXRsZS5zcGxpdCgnfCcpWzBdfSBhdCBGbGF0IDIwJSBPZmY8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHctNTAwXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDMsIGZvbnRTaXplOiAxMCwgdmVydGljYWxBbGlnbjogJzFweCcgfX0+UG93ZXJlZCBieSA6IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3BoYXJtZWFzeV93aGl0ZS5wbmdcIn0gc3R5bGU9e3sgd2lkdGg6IDcyLCB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmlnaHRCYXIgY29sQ2xhc3M9XCJjb2wtMTIgY29sLWxnLTVcIiBhcnRpY2xlRGF0YT17dGhpcy5zdGF0ZS5hcnRpY2xlRGF0YX0gbXNnVGVtcGxhdGU9XCJnb2xkX3RlbXBsYXRlXzFcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hcnRpY2xlTG9hZGVkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hcnRpY2xlRGF0YSAmJiB0aGlzLnN0YXRlLmFydGljbGVEYXRhLmNvbW1lbnRzICYmIHRoaXMuc3RhdGUuYXJ0aWNsZURhdGEuY29tbWVudHMubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNlbnRlci1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY29tbWVudHMtbWFpbi1oZWFkaW5nXCI+e2BVc2VyIENvbW1lbnRzICgke3RoaXMuc3RhdGUuYXJ0aWNsZURhdGEuY29tbWVudHMubGVuZ3RofSlgfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFydGljbGVEYXRhLmNvbW1lbnRzLm1hcCgoY29tbWVudCwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFJlcGx5IGtleT17Y29tbWVudC5pZH0gY29tbWVudFJlcGx5Q2xpY2tlZD17dGhpcy5jb21tZW50UmVwbHlDbGlja2VkLmJpbmQodGhpcyl9IGlzVXNlckxvZ2luPXtpc1VzZXJMb2dpbn0gey4uLnRoaXMucHJvcHN9IHsuLi50aGlzLnN0YXRlfSBnZXRBcnRpY2xlRGF0YT17dGhpcy5nZXRBcnRpY2xlRGF0YS5iaW5kKHRoaXMpfSBwb3N0UmVwbHk9e3RoaXMucG9zdFJlcGx5LmJpbmQodGhpcyl9IGhhbmRsZUlucHV0Q29tbWVudD17dGhpcy5oYW5kbGVJbnB1dENvbW1lbnQuYmluZCh0aGlzKX0gY29tbWVudERhdGE9e2NvbW1lbnR9IGNvbW1lbnRzRXhpc3RzPXtjb21tZW50c0V4aXN0c30gYXJ0aWNsZVBhZ2U9e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYXJ0aWNsZUxvYWRlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNlbnRlci1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xNSBtcm5nLXRvcC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRCb3ggey4uLnRoaXMucHJvcHN9IHsuLi50aGlzLnN0YXRlfSBnZXRBcnRpY2xlRGF0YT17dGhpcy5nZXRBcnRpY2xlRGF0YS5iaW5kKHRoaXMpfSBjb21tZW50c0V4aXN0cz17Y29tbWVudHNFeGlzdHN9IHBhcmVudENvbW1lbnRJZD17dGhpcy5zdGF0ZS5yZXBseU9wZW5Gb3J9IGFydGljbGVQYWdlPXt0cnVlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0nXG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcblxuY2xhc3MgRm9vdGVyV2lkZ2V0VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0bmFtZTogJycsXG5cdFx0XHRwaG9uZV9udW1iZXI6JycsXG5cdFx0XHRzaG93X2Zvcm06ZmFsc2UsXG5cdFx0XHRsZWFkVHlwZTonJyxcblx0XHRcdGNsaWNrZWREYXRhOm51bGwsXG5cdFx0XHRjaXR5X2lkOm51bGwsXG5cdFx0XHRjaXR5X25hbWU6JycsXG5cdFx0XHRzZWFyY2hfY2l0eTonJyxcblx0XHRcdHNob3dDaXR5U2VhcmNoUG9wdXA6ZmFsc2UsXG5cdFx0XHRmaWx0ZXJlZF9jaXR5X2xpc3Q6IFtdXG5cdFx0fVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGxldCBkYXRhID0ge1xuXHRcdFx0J0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdGb290ZXJXaWRnZXREaXNwbGF5ZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdmb290ZXItd2lkZ2V0LWRpc3BsYXllZCcsIHR5cGU6IHRoaXMucHJvcHMuZm9vdGVyV2lkZ2V0ICYmIHRoaXMucHJvcHMuZm9vdGVyV2lkZ2V0LndpZGdldF90eXBlID8gdGhpcy5wcm9wcy5mb290ZXJXaWRnZXQud2lkZ2V0X3R5cGUgOiAnJ1xuXHRcdH1cblx0XHRHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG5cdH1cblxuXHRzZWxlY3REb2N0b3JTcGVjaWFsaXphdGlvbihkYXRhKSB7XG5cdFx0aWYoIXRoaXMuc3RhdGUuc2hvd19mb3JtKXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe3Nob3dfZm9ybTp0cnVlLCBsZWFkVHlwZToxLGNsaWNrZWREYXRhOmRhdGF9KVxuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdGxldCBjcml0ZXJpYSA9IHt9XG5cdFx0Y3JpdGVyaWEuaWQgPSBkYXRhWzFdIHx8ICcnXG5cdFx0Y3JpdGVyaWEubmFtZSA9IGRhdGFbMF0gfHwgJydcblx0XHRjcml0ZXJpYS50eXBlID0gJ3NwZWNpYWxpdHknXG5cdFx0dGhpcy5wcm9wcy5jbG9uZUNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzKGNyaXRlcmlhKVxuXG5cdFx0bGV0IGRvY3Rvcl9uYW1lID0gJycsIGhvc3BpdGFsX25hbWUgPSAnJywgaG9zcGl0YWxfaWQgPSAnJ1xuXHRcdGxldCBzdGF0ZSA9IHtcblx0XHRcdGZpbHRlckNyaXRlcmlhOiB7XG5cdFx0XHRcdC4uLnRoaXMucHJvcHMuT1BEX1NUQVRFLmZpbHRlckNyaXRlcmlhLFxuXHRcdFx0XHRkb2N0b3JfbmFtZSwgaG9zcGl0YWxfbmFtZSwgaG9zcGl0YWxfaWRcblx0XHRcdH0sXG5cdFx0XHRuZXh0RmlsdGVyQ3JpdGVyaWE6IHtcblx0XHRcdFx0Li4udGhpcy5wcm9wcy5PUERfU1RBVEUuZmlsdGVyQ3JpdGVyaWEsXG5cdFx0XHRcdGRvY3Rvcl9uYW1lLCBob3NwaXRhbF9uYW1lLCBob3NwaXRhbF9pZFxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGxldCBndG1EYXRhID0ge1xuXHRcdFx0J0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdGb290ZXJTcGVjaWFsaXphdGlvbnNTZWxlY3RlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2Zvb3Rlci1zcGVjaWFsaXphdGlvbnMtc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnOiBjcml0ZXJpYS5uYW1lIHx8ICcnLCAnc2VsZWN0ZWRJZCc6IGNyaXRlcmlhLmlkIHx8ICcnLCAnc2VhcmNoZWQnOiAnJywgJ3NlYXJjaFN0cmluZyc6ICcnLCAnZnJvbSc6ICdmb290ZXJXaWRnZXQnXG5cdFx0fVxuXHRcdEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG5cblxuXHRcdHRoaXMucHJvcHMubWVyZ2VPUERTdGF0ZShzdGF0ZSwgdHJ1ZSlcblxuXHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHtcblx0XHRcdHBhdGhuYW1lOiAnL29wZC9zZWFyY2hyZXN1bHRzJyxcblx0XHRcdHN0YXRlOiB7IHNlYXJjaF9iYWNrOiB0cnVlIH1cblx0XHR9KVxuXHR9XG5cblx0c2VsZWN0VGVzdChkYXRhKSB7XG5cdFx0aWYoIXRoaXMuc3RhdGUuc2hvd19mb3JtKXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe3Nob3dfZm9ybTp0cnVlLCBsZWFkVHlwZToyLGNsaWNrZWREYXRhOmRhdGF9KVxuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdGxldCBjcml0ZXJpYSA9IHt9XG5cdFx0Y3JpdGVyaWEuaWQgPSBkYXRhWzFdIHx8ICcnXG5cdFx0Y3JpdGVyaWEubmFtZSA9IGRhdGFbMF0gfHwgJydcblx0XHRjcml0ZXJpYS50eXBlID0gJ3Rlc3QnXG5cdFx0Y3JpdGVyaWEudXJsID0gJydcblx0XHRjcml0ZXJpYS50ZXN0X3R5cGUgPSAnJ1xuXHRcdHRoaXMucHJvcHMudG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEoJ3Rlc3QnLCBjcml0ZXJpYSwgdHJ1ZSlcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMuc2hvd0xhYnMoKVxuXHRcdH0sIDEwMClcblx0fVxuXG5cdHNob3dMYWJzKCkge1xuXHRcdGxldCBsYWJfbmFtZSA9ICcnXG5cdFx0dGhpcy5wcm9wcy5tZXJnZUxBQlN0YXRlKHtcblx0XHRcdGZpbHRlckNyaXRlcmlhOiB7XG5cdFx0XHRcdC4uLnRoaXMucHJvcHMuTEFCX1NUQVRFLmZpbHRlckNyaXRlcmlhLFxuXHRcdFx0XHRsYWJfbmFtZVxuXHRcdFx0fSxcblx0XHRcdG5leHRGaWx0ZXJDcml0ZXJpYToge1xuXHRcdFx0XHQuLi50aGlzLnByb3BzLkxBQl9TVEFURS5maWx0ZXJDcml0ZXJpYSxcblx0XHRcdFx0bGFiX25hbWVcblx0XHRcdH0sXG5cdFx0XHRjdXJyZW50U2VhcmNoZWRDcml0ZXJpYXM6IHRoaXMucHJvcHMuTEFCX1NUQVRFLnNlbGVjdGVkQ3JpdGVyaWFzLFxuXHRcdFx0bmV4dFNlbGVjdGVkQ3JpdGVyaWFzOiB0aGlzLnByb3BzLkxBQl9TVEFURS5zZWxlY3RlZENyaXRlcmlhc1xuXHRcdH0sIHRydWUpXG5cblx0XHRsZXQgc2VsZWN0ZWRUZXN0SWRzID0gdGhpcy5wcm9wcy5MQUJfU1RBVEUuc2VsZWN0ZWRDcml0ZXJpYXMubWFwKHRlc3QgPT4gdGVzdC5pZClcblx0XHRsZXQgc2VsZWN0ZWRUZXN0c05hbWUgPSB0aGlzLnByb3BzLkxBQl9TVEFURS5zZWxlY3RlZENyaXRlcmlhcy5tYXAodGVzdCA9PiB0ZXN0Lm5hbWUpXG5cdFx0bGV0IGRhdGEgPSB7XG5cdFx0XHQnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0Zvb3RlclRlc3RDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnZm9vdGVyLWxhYi1jbGlja2VkJywgJ1NlbGVjdGVkVGVzdElkcyc6IHNlbGVjdGVkVGVzdElkcy5qb2luKCcsJykgfHwgJycsICdTZWxlY3RlZFRlc3ROYW1lJzogc2VsZWN0ZWRUZXN0c05hbWUuam9pbignLCcpLCAnVGVzdENvdW50Jzogc2VsZWN0ZWRUZXN0SWRzLmxlbmd0aCB8fCAwLCAnZnJvbSc6ICdmb290ZXJXaWRnZXQnXG5cdFx0fVxuXHRcdEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cblx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaCh7XG5cdFx0XHRwYXRobmFtZTogJy9sYWIvc2VhcmNocmVzdWx0cycsXG5cdFx0XHRzdGF0ZTogeyBzZWFyY2hfYmFjazogdHJ1ZSB9XG5cdFx0fSlcblx0fVxuXG5cdG9wZW5TZWFyY2hNb3JlKCkge1xuXHRcdGlmKCF0aGlzLnN0YXRlLnNob3dfZm9ybSl7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtzaG93X2Zvcm06dHJ1ZSwgbGVhZFR5cGU6M30pXG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0bGV0IHdoaWNoID0gJ29wZCdcblx0XHRpZiAodGhpcy5wcm9wcy5mb290ZXJXaWRnZXQgJiYgdGhpcy5wcm9wcy5mb290ZXJXaWRnZXQud2lkZ2V0X3R5cGUgPT0gJ0xhYlRlc3QnKSB7XG5cdFx0XHR3aGljaCA9ICdsYWInXG5cdFx0fVxuXHRcdHRoaXMucHJvcHMuc2VsZWN0U2VhcmNoVHlwZSh3aGljaClcblx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3NlYXJjaCcpXG5cdH1cblxuXHRnb1RvUGFja2FnZSgpIHtcblx0XHRpZighdGhpcy5zdGF0ZS5zaG93X2Zvcm0pe1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7c2hvd19mb3JtOnRydWUsIGxlYWRUeXBlOjR9KVxuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdGxldCBkYXRhID0ge1xuXHRcdFx0J0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdTaG93UGFja2FnZUNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdzaG93LXBhY2thZ2UtY2xpY2tlZCcsICdmcm9tJzogJ2Zvb3RlcldpZGdldCdcblx0XHR9XG5cdFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblx0XHR0aGlzLnByb3BzLnNldFBhY2thZ2VJZCgxMjIyNywgdHJ1ZSlcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvc2VhcmNocGFja2FnZXMnKVxuXHRcdH0sIDEwMClcblx0XHQvLyB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3RoeXJvY2FyZS1hYXJvZ3lhbS1wYWNrYWdlcycpXG5cdH1cblxuXHRjbG9zZUxlYWRGb3JtKGlzUHJvY2VlZCl7XG5cdFx0bGV0IHByb2NlZWQgPSBmYWxzZVxuXHRcdGxldCBkYXRhPXt9XG5cdFx0aWYoaXNQcm9jZWVkKXtcblx0XHRcdGlmKHRoaXMuc3RhdGUubmFtZSA9PSAnJyl7XG5cdFx0XHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgZW50ZXIgbmFtZVwiIH0pXG5cdFx0XHRcdHJldHVyblx0XG5cdFx0XHR9XG5cdFx0XHRpZih0aGlzLnN0YXRlLnBob25lX251bWJlciA9PSAnJyl7XG5cdFx0XHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgZW50ZXIgcGhvbmUgbnVtYmVyXCIgfSlcblx0XHRcdFx0cmV0dXJuXHRcblx0XHRcdH1cblx0XHRcdGlmKCF0aGlzLnN0YXRlLmNpdHlfaWQpe1xuXHRcdFx0XHRyZXR1cm5cdFxuXHRcdFx0fVxuXHRcdFx0aWYodGhpcy5zdGF0ZS5jaXR5X25hbWUgPT0gJycpe1xuXHRcdFx0XHRTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIHNlbGVjdCBjaXR5XCIgfSlcblx0XHRcdFx0cmV0dXJuXHRcblx0XHRcdH1cblx0XHRcdGlmKHRoaXMuc3RhdGUucGhvbmVfbnVtYmVyLmxlbmd0aCA8IDEwIHx8IHRoaXMuc3RhdGUucGhvbmVfbnVtYmVyLmxlbmd0aCA+IDEwKXtcblx0XHRcdFx0U25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBlbnRlciB2YWxpZCBudW1iZXJcIiB9KVxuXHRcdFx0XHRyZXR1cm5cblx0XHRcdH1cblx0XHRcdGlmKHRoaXMuc3RhdGUubmFtZSAhPScnICYmIHRoaXMuc3RhdGUucGhvbmVfbnVtYmVyICE9JycgJiYgdGhpcy5zdGF0ZS5jaXR5X2lkICYmIHRoaXMuc3RhdGUuY2l0eV9uYW1lICE9Jycpe1xuXHRcdFx0XHRkYXRhLm5hbWUgPSB0aGlzLnN0YXRlLm5hbWVcblx0XHRcdFx0ZGF0YS5waG9uZV9udW1iZXIgPSB0aGlzLnN0YXRlLnBob25lX251bWJlclxuXHRcdFx0XHRkYXRhLmNpdHlfaWQgPSB0aGlzLnN0YXRlLmNpdHlfaWRcblx0XHRcdFx0ZGF0YS5jaXR5X25hbWUgPSB0aGlzLnN0YXRlLmNpdHlfbmFtZVxuXHRcdFx0XHRpZih0aGlzLnN0YXRlLmxlYWRUeXBlICA9PSAxKXtcblx0XHRcdFx0XHRkYXRhLmxlYWRfc291cmNlID0gJ21lZF9kb2MnXG5cdFx0XHRcdH1lbHNlIGlmKHRoaXMuc3RhdGUubGVhZFR5cGUgID09IDIpe1xuXHRcdFx0XHRcdGRhdGEubGVhZF9zb3VyY2UgPSAnbWVkX3Rlc3QnXG5cdFx0XHRcdH1lbHNlIGlmKHRoaXMuc3RhdGUubGVhZFR5cGUgID09IDMpe1xuXHRcdFx0XHRcdGRhdGEubGVhZF9zb3VyY2UgPSAnbWVkX3NlYXJjaG1vcmUnXG5cdFx0XHRcdH1lbHNlIGlmKHRoaXMuc3RhdGUubGVhZFR5cGUgID09IDQpe1xuXHRcdFx0XHRcdGRhdGEubGVhZF9zb3VyY2UgPSAnbWVkX3BhY2thZ2UnXG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdHRoaXMucHJvcHMuc3VibWl0TWVkaWNpbmVMZWFkKGRhdGEsKHJlc3ApPT57XG5cdFx0XHRcdFx0aWYocmVzcCl7XG5cdFx0XHRcdFx0XHRpZih0aGlzLnN0YXRlLmxlYWRUeXBlID09IDEpe1xuXHRcdFx0XHRcdFx0XHR0aGlzLnNlbGVjdERvY3RvclNwZWNpYWxpemF0aW9uKHRoaXMuc3RhdGUuY2xpY2tlZERhdGEpXG5cdFx0XHRcdFx0XHR9ZWxzZSBpZih0aGlzLnN0YXRlLmxlYWRUeXBlID09IDIpe1xuXHRcdFx0XHRcdFx0XHR0aGlzLnNlbGVjdFRlc3QodGhpcy5zdGF0ZS5jbGlja2VkRGF0YSlcblx0XHRcdFx0XHRcdH1lbHNlIGlmKHRoaXMuc3RhdGUubGVhZFR5cGUgPT0gMyl7XG5cdFx0XHRcdFx0XHRcdHRoaXMub3BlblNlYXJjaE1vcmUoKVxuXHRcdFx0XHRcdFx0fWVsc2UgaWYodGhpcy5zdGF0ZS5sZWFkVHlwZSA9PSA0KXtcblx0XHRcdFx0XHRcdFx0dGhpcy5nb1RvUGFja2FnZSgpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH1lbHNle1xuXHRcdFx0bGV0IGRhdGEgPSB7XG5cdFx0XHQnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1NraXBNZWRMZWFkQ2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdza2lwLW1lZC1sZWFkLWNsaWNrJywgJ2Zyb20nOiAnZm9vdGVyV2lkZ2V0J1xuXHRcdFx0fVxuXHRcdFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblx0XHRcdGlmKHRoaXMuc3RhdGUubGVhZFR5cGUgPT0gMSl7XG5cdFx0XHRcdHRoaXMuc2VsZWN0RG9jdG9yU3BlY2lhbGl6YXRpb24odGhpcy5zdGF0ZS5jbGlja2VkRGF0YSlcblx0XHRcdH1lbHNlIGlmKHRoaXMuc3RhdGUubGVhZFR5cGUgPT0gMil7XG5cdFx0XHRcdHRoaXMuc2VsZWN0VGVzdCh0aGlzLnN0YXRlLmNsaWNrZWREYXRhKVxuXHRcdFx0fWVsc2UgaWYodGhpcy5zdGF0ZS5sZWFkVHlwZSA9PSAzKXtcblx0XHRcdFx0dGhpcy5vcGVuU2VhcmNoTW9yZSgpXG5cdFx0XHR9ZWxzZSBpZih0aGlzLnN0YXRlLmxlYWRUeXBlID09IDQpe1xuXHRcdFx0XHR0aGlzLmdvVG9QYWNrYWdlKClcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRoYW5kbGVDaGFuZ2UoZXZlbnQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0W2V2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGFyYW0nKV06IGV2ZW50LnRhcmdldC52YWx1ZVxuXHRcdH0pXHRcdFxuXHR9XG5cblx0aGFuZGxlSW51dCh0eXBlLCBldmVudCkge1xuICAgIFx0dHJ5e1xuXHQgICAgXHRsZXQgc2VhcmNoX3N0cmluZyA9IGV2ZW50LnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpXG5cdCAgICBcdGxldCBmaWx0ZXJlZF9jaXR5X2xpc3QgPSBbXVxuXHQgICAgXHR0aGlzLnByb3BzLnVzZXJfY2l0aWVzLm1hcCgoY2l0eSk9Pntcblx0ICAgIFx0XHRsZXQgY2l0eV9uYW1lID0gKGNpdHkubmFtZSkudG9Mb3dlckNhc2UoKVxuXHQgICAgXHRcdGlmKGNpdHlfbmFtZS5pbmNsdWRlcyhzZWFyY2hfc3RyaW5nKSl7XG5cdCAgICBcdFx0XHRsZXQgaW5kZXggPSBjaXR5X25hbWUuaW5kZXhPZihzZWFyY2hfc3RyaW5nKVxuXHQgICAgXHRcdFx0ZmlsdGVyZWRfY2l0eV9saXN0LnB1c2goe2lkOiBjaXR5LmlkLCBuYW1lOiBjaXR5Lm5hbWUsIHJhbms6IGluZGV4fSlcblx0ICAgIFx0XHR9XG5cdCAgICBcdH0pXG5cdCAgICBcdGZpbHRlcmVkX2NpdHlfbGlzdCA9IGZpbHRlcmVkX2NpdHlfbGlzdC5zb3J0KCh4LHkpPT57XG5cdCAgICBcdFx0cmV0dXJuIHgucmFuay15LnJhbmtcblx0ICAgIFx0fSlcblx0ICAgIFx0dGhpcy5zZXRTdGF0ZSh7W3R5cGVdOiBldmVudC50YXJnZXQudmFsdWUsIGZpbHRlcmVkX2NpdHlfbGlzdDogZmlsdGVyZWRfY2l0eV9saXN0fSlcblx0ICAgIH1jYXRjaChlKSB7XG5cblx0ICAgIH1cbiAgICB9XG5cbiAgICBvbkZvY3VzSW4oKXtcbiAgICBcdHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hfY2l0eTonJywgc2hvd0NpdHlTZWFyY2hQb3B1cDogdHJ1ZSB9KVxuICAgIH1cblxuICAgIG9uRm9jdXNPdXQoKXtcbiAgICBcdHNldFRpbWVvdXQoKCk9PntcbiAgICBcdFx0dGhpcy5zZXRTdGF0ZSh7IHNlYXJjaF9jaXR5OiB0aGlzLnN0YXRlLnNlbGVjdGVkRG9jdG9yLCBzaG93Q2l0eVNlYXJjaFBvcHVwOiBmYWxzZSB9KVx0XG4gICAgXHR9LDUwMClcbiAgICBcdFxuICAgIH1cblxuICAgIGNsaWNrRG9jdG9yTGlzdChuYW1lLGlkKSB7XG4gICAgXHR0aGlzLnNldFN0YXRlKHsnY2l0eV9uYW1lJzogbmFtZSwgJ2NpdHlfaWQnOmlkLCBmaWx0ZXJlZF9jaXR5X2xpc3Q6W10sIHNlYXJjaF9jaXR5OiBuYW1lLCBzaG93Q2l0eVNlYXJjaFBvcHVwOiBmYWxzZX0pIFxuICAgIH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHsgZm9vdGVyV2lkZ2V0IH0gPSB0aGlzLnByb3BzXG5cdFx0bGV0IGZpbHRlcmVkX2RvY3RvciA9IHRoaXMuc3RhdGUuZmlsdGVyZWRfY2l0eV9saXN0XG5cdFx0cmV0dXJuIChcblx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdGZvb3RlcldpZGdldCAmJiBmb290ZXJXaWRnZXQud2lkZ2V0X3R5cGUgP1xuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkb2Mtd2RndC1tZWQtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRmb290ZXJXaWRnZXQud2lkZ2V0X3R5cGUgPT0gJ0xhYlRlc3QnID9cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZG9jLXdkZ3QtYm9vay1kb2NcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJkb2NDbG9zQnRuXCIgc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL2NwL2Fzc2V0cy9pbWcvaWNvbnMvY2xvc2UucG5nXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5oYW5kbGVDbG9zZSgpfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwiZG9jLXdkZ3QtaGRuZ1wiPntgJHtmb290ZXJXaWRnZXQudGl0bGV9IEBgfTxzcGFuPntmb290ZXJXaWRnZXQuZGlzY291bnR9PC9zcGFuPjwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZG9jLXdkZ3QtY2hpcHNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRPYmplY3QuZW50cmllcyhmb290ZXJXaWRnZXQudGVzdCkubWFwKChkYXRhLCBrZXkpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxzcGFuIGtleT17a2V5fSBvbkNsaWNrPXt0aGlzLnNlbGVjdFRlc3QuYmluZCh0aGlzLCBkYXRhKX0+e2RhdGFbMF19PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwic3JjLXNwbi1jaHBzXCIgb25DbGljaz17dGhpcy5vcGVuU2VhcmNoTW9yZS5iaW5kKHRoaXMpfT48aW1nIGNsYXNzTmFtZT1cInNyaC1pbWctY2hwc1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvc2hhcGUtc3JjaDEuc3ZnJ30gLz5TZWFyY2ggbW9yZTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRmb290ZXJXaWRnZXQud2lkZ2V0X3R5cGUgPT0gJ0RvY3RvckFwcG9pbnRtZW50JyA/XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRvYy13ZGd0LWJvb2stZG9jXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiZG9jQ2xvc0J0blwiIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9jcC9hc3NldHMvaW1nL2ljb25zL2Nsb3NlLnBuZ1wiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuaGFuZGxlQ2xvc2UoKX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cImRvYy13ZGd0LWhkbmdcIj57YCR7Zm9vdGVyV2lkZ2V0LnRpdGxlfSBAYH08c3Bhbj57Zm9vdGVyV2lkZ2V0LmRpc2NvdW50fTwvc3Bhbj48L2gzPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRvYy13ZGd0LWNoaXBzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0T2JqZWN0LmVudHJpZXMoZm9vdGVyV2lkZ2V0LnNwZWNpYWxpemF0aW9ucykubWFwKChkYXRhLCBrZXkpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxzcGFuIGtleT17a2V5fSBvbkNsaWNrPXt0aGlzLnNlbGVjdERvY3RvclNwZWNpYWxpemF0aW9uLmJpbmQodGhpcywgZGF0YSl9PntkYXRhWzBdfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInNyYy1zcG4tY2hwc1wiIG9uQ2xpY2s9e3RoaXMub3BlblNlYXJjaE1vcmUuYmluZCh0aGlzKX0+PGltZyBjbGFzc05hbWU9XCJzcmgtaW1nLWNocHNcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3NoYXBlLXNyY2gxLnN2Zyd9IC8+U2VhcmNoIG1vcmU8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHR7LyogdGhpcmQgYmFubmVyICovfVxuXHRcdFx0XHRcdFx0XHR7Lyoge1xuXHRcdFx0XHRcdFx0XHRcdGZvb3RlcldpZGdldC53aWRnZXRfdHlwZSA9PSAnSGVhbHRoUGFja2FnZScgP1xuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkb2Mtd2RndC1ib2R5Y2hrLWNvbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJkb2NDbG9zQnRuXCIgc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL2NwL2Fzc2V0cy9pbWcvaWNvbnMvY2xvc2UucG5nXCIgb25DbGljaz17KCk9PnRoaXMucHJvcHMuaGFuZGxlQ2xvc2UoKX0vPlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGN1cnNvci1wbnRyXCIgb25DbGljaz17dGhpcy5nb1RvUGFja2FnZS5iaW5kKHRoaXMpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC03XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwid2RndC1ib2R5Y2hrLWhlZGluZ1wiPntmb290ZXJXaWRnZXQudGl0bGVfZmlyc3R9PC9oMz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImJvZHljaGstcHJjXCI+QCA8c3BhbiBjbGFzc05hbWU9XCJiZHktcHJcIj57Zm9vdGVyV2lkZ2V0LnByaWNlfTwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwiYmR5LW9ubHlcIj5vbmx5PC9zcGFuPiA8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJiZHljaGstZHRsc1wiPntmb290ZXJXaWRnZXQudGl0bGVfbGFzdH08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtNSBkLWZsZXggYWxpZ24taXRlbS1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiYmR5Y2hrLWltZyBpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2RvYy13ZC5wbmcnfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0XHR9ICovfVxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0Zm9vdGVyV2lkZ2V0LndpZGdldF90eXBlID09ICdIZWFsdGhQYWNrYWdlJyA/XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRvYy13ZGd0LWJvZHljaGstY29udFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImRvY0Nsb3NCdG5cIiBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vY3AvYXNzZXRzL2ltZy9pY29ucy9jbG9zZS5wbmdcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmhhbmRsZUNsb3NlKCl9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZG9jLWJkeS1jaGstaGRuZ1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoND57Zm9vdGVyV2lkZ2V0LnRpdGxlX2ZpcnN0fTwvaDQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBjdXJzb3ItcG50ciBuby1ndXR0ZXJzXCIgb25DbGljaz17dGhpcy5nb1RvUGFja2FnZS5iaW5kKHRoaXMpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC04XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRvYy13ZGd0LXByY2tcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qPHNwYW4gY2xhc3NOYW1lPVwiZG9jLXdkLWN1dFwiPuKCuTc5OTwvc3Bhbj4qL31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZG9jLXdkLW53XCI+e2Zvb3RlcldpZGdldC5wcmljZX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsvKjxwIGNsYXNzTmFtZT1cImRjLXdkLXRzdFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ2MCB0ZXN0c1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3A+Ki99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJkYy13ZC10c3Qtbm1cIj57Zm9vdGVyV2lkZ2V0LnRpdGxlX2xhc3R9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgZC1mbGV4IGFsaWduLWl0ZW0tY2VudGVyIGp1c3R5ZnktY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImRjLXdkLWJkeS1idG5cIj5Lbm93IE1vcmU8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdH1cblxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5zaG93X2Zvcm0/PGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZWwtcG9wdXAtb3ZlcmxheSBjYW5jZWwtb3ZlcmxheS16aW5kZXhcIj5cblx0XHRcdFx0XHQgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1wb3B1cCBpcGQtcG9wLXdpZHRoXCI+XG5cdFx0XHRcdFx0ICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgcC0xMlwiPlxuXHRcdFx0XHRcdCAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1yZWxhdGl2ZVwiPlxuXHRcdFx0XHRcdCAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlwZC1uZWVkSGVscFwiPlRhbGsgdG8gbWVkaWNhbCBleHBlcnQgYW5kIGdldCBoZWxwIHdpdGggeW91ciBib29raW5nPC9wPlxuXHRcdFx0XHRcdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXBkLXBvcC1zY3JsXCI+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpcGQtaW5wLXNlY3Rpb25cIj5cblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5tLWxzdC1pbnB1dGNudFwiPlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgIFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiKk5hbWVcIiBhdXRvQ29tcGxldGU9e251bGx9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfSBkYXRhLXBhcmFtPSduYW1lJyB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfS8+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT1cIlwiIG5hbWU9XCJwaG9uZV9udW1iZXJcIiBhdXRvQ29tcGxldGU9XCJub25lXCIgcGxhY2Vob2xkZXI9XCIqTW9iaWxlIE51bWJlclwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfSBkYXRhLXBhcmFtPVwicGhvbmVfbnVtYmVyXCIgdmFsdWU9e3RoaXMuc3RhdGUucGhvbmVfbnVtYmVyfS8+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpcGQtc2xlY3RzLWRvY1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0ICA8aW5wdXQgdHlwZT1cInRleHRcIiBhdXRvQ29tcGxldGU9XCJub25lXCIgcGxhY2Vob2xkZXI9J1NlYXJjaCBDaXR5JyBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnV0LmJpbmQodGhpcywgJ3NlYXJjaF9jaXR5Jyl9IG9uRm9jdXMgPSB7dGhpcy5vbkZvY3VzSW4uYmluZCh0aGlzKX0gb25CbHVyPXt0aGlzLm9uRm9jdXNPdXQuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNoX2NpdHl9Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLnNob3dDaXR5U2VhcmNoUG9wdXA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRvYy1zcmNoLWZsdHJcIiBvbkNsaWNrPXsoZSk9PmUucHJldmVudERlZmF1bHQoKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLmZpbHRlcmVkX2NpdHlfbGlzdCAmJiB0aGlzLnN0YXRlLmZpbHRlcmVkX2NpdHlfbGlzdC5sZW5ndGg/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5maWx0ZXJlZF9jaXR5X2xpc3QubWFwKChkYXRhLCBrZXkpPT57XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPHAgY2xhc3NOYW1lPVwiY3Vyc29yLXBudHJcIiBrZXk9e2tleX0gaWQ9e2RhdGEuaWR9IG9uQ2xpY2s9eyhlKT0+e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuY2xpY2tEb2N0b3JMaXN0KGRhdGEubmFtZSxkYXRhLmlkKX0gfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2RhdGEubmFtZX08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6dGhpcy5zdGF0ZS5zZWFyY2hfY2l0eSAhPSAnJyA/PHA+Tm8gcmVzdWx0IGZvdW5kPC9wPjonJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6Jydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHQgIDwvZGl2PlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpcC1idG4tc2duXCI+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJpcGQtaW5wLXNibXRcIiBvbkNsaWNrPXt0aGlzLmNsb3NlTGVhZEZvcm0uYmluZCh0aGlzLHRydWUpfT5TdWJtaXQ8L2J1dHRvbj5cblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICA8cCBvbkNsaWNrPXt0aGlzLmNsb3NlTGVhZEZvcm0uYmluZCh0aGlzLGZhbHNlKX0+U2tpcDwvcD5cblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdFx0XHQgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdFx0XHQgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdFx0XHQgICAgICAgICA8L2Rpdj5cblx0XHRcdFx0XHQgICAgICA8L2Rpdj5cblx0XHRcdFx0XHQgICA8L2Rpdj5cblx0XHRcdFx0PC9kaXY+OlwiXCJ9XG5cdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXJXaWRnZXRWaWV3OyIsImltcG9ydCBBcnRpY2xlVmlldyBmcm9tICcuL0FydGljbGUnXG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVWaWV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbml0aWFsc1BpY3R1cmUgZnJvbSAnLi4vaW5pdGlhbHNQaWN0dXJlJztcblxuY2xhc3MgQXJ0aWNsZUF1dGhvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblxuXHRcdH1cblx0fVxuXG5cdGF1dGhvckNsaWNrKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRpZiAodGhpcy5wcm9wcy51cmwpIHtcblx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHRoaXMucHJvcHMudXJsKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL29wZC9kb2N0b3IvJHt0aGlzLnByb3BzLmlkfWApXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtYXV0aG9yLWRpdiBtcmItMjBcIj5cblx0XHRcdFx0PEluaXRpYWxzUGljdHVyZSBjbGFzc05hbWU9XCJpbml0aWFsc1BpY3R1cmUtZHMgaW5pdGlhbHNQaWN0dXJlLWF1dGhvclwiIG5hbWU9e3RoaXMucHJvcHMubmFtZX0gaGFzX2ltYWdlPXshIXRoaXMucHJvcHMucHJvZmlsZUltYWdlfSA+XG5cdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJmbHRyLXVzci1pbWFnZSBpbWctcm91bmRcIiBzdHlsZT17eyB3aWR0aDogNjAsIGhlaWdodDogNjAsIG1hcmdpblJpZ2h0OiA4LCBmb250U2l6ZTogMTAgfX0gc3JjPXt0aGlzLnByb3BzLnByb2ZpbGVJbWFnZX0gYWx0PXtgRHIuICR7dGhpcy5wcm9wcy5uYW1lfWB9IHRpdGxlPXtgRHIuICR7dGhpcy5wcm9wcy5uYW1lfWB9IC8+XG5cdFx0XHRcdDwvSW5pdGlhbHNQaWN0dXJlPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImF1dGhvci1kdGxzXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhdXRob3ItbmFtZS1kaXZcIj5cblx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7IG1hcmdpbjogJzAgNnB4IDAgMCcgfX0+V3JpdHRlbiBCeSA6PC9zcGFuPlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLnVybCA/XG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj17YC8ke3RoaXMucHJvcHMudXJsfWB9IG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmF1dGhvckNsaWNrKGUpfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1wcmltYXJ5XCI+e2BEci4gJHt0aGlzLnByb3BzLm5hbWV9YH08L2gzPlxuXHRcdFx0XHRcdFx0XHRcdDwvYT4gOlxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2Avb3BkL2RvY3Rvci8ke3RoaXMucHJvcHMuaWR9YH0gb25DbGljaz17KGUpID0+IHRoaXMuYXV0aG9yQ2xpY2soZSl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LXByaW1hcnlcIj57YERyLiAke3RoaXMucHJvcHMubmFtZX1gfTwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXV0aG9yLWV4cC1kaXZcIj5cblx0XHRcdFx0XHRcdDxzcGFuPnt0aGlzLnByb3BzLnNwZWNpYWxpdHl9IHwge3RoaXMucHJvcHMuZXhwZXJpZW5jZX0geWVhcnMgb2YgZXhwZXJpZW5jZTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnByb3BzLnB1Ymxpc2hlZERhdGUgP1xuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtZGF0ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPlB1Ymxpc2hlZCBEYXRlIDoge3RoaXMucHJvcHMucHVibGlzaGVkRGF0ZX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PiA6ICcnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlQXV0aG9yIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG5cbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwibWFpblBvcHVwT3ZlcmxheVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcFVwTWFpbkNvbnRhaW5lclwiPlxuICAgICAgICAgICAge3Byb3BzLnJlc3B9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIClcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuXG5jbGFzcyBCb29raW5nQ29uZmlybWF0aW9uUG9wdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLXBvcHVwLW92ZXJsYXlcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZWwtcG9wdXAgdmlwLXNyY2gtcG9wLW1pblwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IHBhZGlpbmctc3JjaC1lbFwiPlxuXHRcdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic3JjaC1lbC1jb25lbnRcIj57dGhpcy5wcm9wcy5pc19nb2xkPydDb25maXJtIGRlbGV0ZSBtZW1iZXI/JzonRG8geW91IHdpc2ggdG8gY29udGludWU/J308L3A+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZWwtYnRuLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLnByaWNlQ29uZmlybWF0aW9uUG9wdXAuYmluZCh0aGlzLCB0cnVlKX0+WWVzPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMucHJpY2VDb25maXJtYXRpb25Qb3B1cC5iaW5kKHRoaXMsIGZhbHNlKX0+Tm88L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0LyoodGhpcy5wcm9wcy5pc192aXBfYXBwbGljYWJsZSB8fCB0aGlzLnByb3BzLmlzX2luc3VyYW5jZV9hcHBsaWNhYmxlKSB8fCB0aGlzLnByb3BzLmlzQ2FydCB8fCB0aGlzLnByb3BzLmlzTGFiP1xuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgcGFkaWluZy1zcmNoLWVsXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaUZyYW1lUG9wdXAgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1ydC0yMCB0ZXh0LWNlbnRlciBmdy01MDBcIj5XZSBhcmUgcmVkaXJlY3RpbmcgeW91IHRvIFBoYXJtRWFzeSB3ZWJzaXRlIGluIDMgc2Vjb25kcy4uLjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJzcmNoLWVsLWNvbmVudFwiPkRvIHlvdSB3aXNoIHRvIGNvbnRpbnVlPzwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLWJ0bi1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLnByaWNlQ29uZmlybWF0aW9uUG9wdXAuYmluZCh0aGlzLCB0cnVlKX0+WWVzPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5wcmljZUNvbmZpcm1hdGlvblBvcHVwLmJpbmQodGhpcywgZmFsc2UpfT5ObzwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0OlxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInZpcC1iYW5uZXItY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidmlwLWJhbm5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIHZwLWNscy1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcC1wb3AtY2xzLnN2Zyd9IG9uQ2xpY2s9e3RoaXMucHJvcHMuYmFubmVyQ29uZmlybWF0aW9uUG9wdXAuYmluZCh0aGlzLGZhbHNlKX0vPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIHZwLWJuci1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcC1pbWctcG9wLnBuZyd9IC8+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3AtYm5yLXR4dFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidnAtYm5yLWtub3ctdHh0XCIgb25DbGljaz17KGUpID0+IHtcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgXHQnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0Jvb2tpbmdQYWdlVmlwQmFubmVyQ2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdib29raW5ncGFnZS12aXAtY2xpY2snXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgXHR9XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgXHRHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3ZpcC1jbHViLWRldGFpbHM/c291cmNlPWJvb2tpbmdwYWdlJmxlYWRfc291cmNlPWJvb2tpbmdwYWdlJykgfX0+S25vdyBtb3JlIGFib3V0IERvY3ByaW1lIFZJUDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInZwLWJuci1zdWItdHh0XCIgb25DbGljaz17dGhpcy5wcm9wcy5iYW5uZXJDb25maXJtYXRpb25Qb3B1cC5iaW5kKHRoaXMsdHJ1ZSl9Pk5vdCBJbnRlcmVzdGVkPyBDb250aW51ZSBCb29raW5nIDxpbWcgc3R5bGU9e3t3aWR0aDonN3B4J319IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwLXJnaHQuc3ZnJ30gLz48L3A+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+Ki9cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tpbmdDb25maXJtYXRpb25Qb3B1cCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBmZXRjaEFydGljbGUsIGdldFNwZWNpYWxpdHlGb290ZXJEYXRhLCBwb3N0Q29tbWVudCwgZ2V0T2ZmZXJMaXN0LCB0b2dnbGVPUERDcml0ZXJpYSwgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEsIGNsb25lQ29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMsIHNlbGVjdFNlYXJjaFR5cGUsIG1lcmdlTEFCU3RhdGUsIG1lcmdlT1BEU3RhdGUsIHNldFBhY2thZ2VJZCwgc3VibWl0TWVkaWNpbmVMZWFkLCBjaXRpZXNEYXRhLCBpRnJhbWVTdGF0ZSxOb25JcGRCb29raW5nTGVhZCwgYnVpbGRBcnRpY2xlU3RvcmVGcm9tUmVkaXMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuXG5pbXBvcnQgQXJ0aWNsZVZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL2FydGljbGUnXG5cbmNsYXNzIEFydGljbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkRGF0YShzdG9yZSwgbWF0Y2gpIHtcbiAgICAgICAgbGV0IGFydGljbGVJZCA9IG1hdGNoLnVybFxuICAgICAgICBpZiAoYXJ0aWNsZUlkKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGFydGljbGVJZCA9IGFydGljbGVJZC50b0xvd2VyQ2FzZSgpLnN1YnN0cmluZygxLCBhcnRpY2xlSWQubGVuZ3RoKVxuICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGZldGNoQXJ0aWNsZShhcnRpY2xlSWQsIGZhbHNlLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBnZXRTcGVjaWFsaXR5Rm9vdGVyRGF0YSgoZm9vdGVyRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJlc29sdmUoeyBmb290ZXJEYXRhOiAoZm9vdGVyRGF0YSB8fCBudWxsKSwgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9KSgpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHsgYXJ0aWNsZURhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeyBzdGF0dXM6IDQwNH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBidWlsZFN0YXRlRnJvbVJlZGlzKHJlc3AsIHN0b3JlKXtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGJ1aWxkQXJ0aWNsZVN0b3JlRnJvbVJlZGlzKHJlc3AsIChyZXNwKT0+e1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pKVxuICAgICAgICB9KS5jYXRjaCgoZSk9PntcbiAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5jaXRpZXNEYXRhKClcbiAgICB9XG5cbiAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgICByb3V0ZXI6ICgpID0+IG51bGxcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxBcnRpY2xlVmlldyB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcGFzc2VkUHJvcHMpID0+IHtcbiAgICAvKipcbiAgICAgKiBpbml0aWFsU2VydmVyRGF0YSBpcyBzZXJ2ZXIgcmVuZGVyZWQgYXN5bmMgZGF0YSByZXF1aXJlZCBidWlsZCBodG1sIG9uIHNlcnZlci4gXG4gICAgICovXG4gICAgbGV0IGluaXRpYWxTZXJ2ZXJEYXRhID0gbnVsbFxuICAgIGxldCB7IHN0YXRpY0NvbnRleHQgfSA9IHBhc3NlZFByb3BzXG4gICAgaWYgKHN0YXRpY0NvbnRleHQgJiYgc3RhdGljQ29udGV4dC5kYXRhKSB7XG4gICAgICAgIGluaXRpYWxTZXJ2ZXJEYXRhID0gc3RhdGljQ29udGV4dC5kYXRhXG4gICAgfVxuICAgIGxldCB7XG4gICAgICAgIHByb2ZpbGVzLCBkZWZhdWx0UHJvZmlsZSwgb2ZmZXJMaXN0LCBhcnRpY2xlRGF0YSwgdXNlcl9jaXRpZXMsIGlGcmFtZVVybHMsY29tbW9uX3V0bV90YWdzXG4gICAgfSA9IHN0YXRlLlVTRVJcblxuICAgIGxldCB7XG4gICAgICAgIHNlbGVjdGVkTG9jYXRpb25cbiAgICB9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX09QRFxuXG4gICAgbGV0IE9QRF9TVEFURSA9ICgoKSA9PiB7XG5cbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgICAgIGZpbHRlckNyaXRlcmlhXG5cbiAgICAgICAgfSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9PUERcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgICAgIGZpbHRlckNyaXRlcmlhXG4gICAgICAgIH1cblxuICAgIH0pKClcblxuICAgIGxldCBMQUJfU1RBVEUgPSAoKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHNlbGVjdGVkTG9jYXRpb24sXG4gICAgICAgICAgICBmaWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgICAgIHNlbGVjdGVkQ3JpdGVyaWFzXG5cbiAgICAgICAgfSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9MQUJTXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlbGVjdGVkTG9jYXRpb24sXG4gICAgICAgICAgICBmaWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgICAgIHNlbGVjdGVkQ3JpdGVyaWFzXG4gICAgICAgIH1cblxuICAgIH0pKClcblxuICAgIGxldCB7XG4gICAgICAgIHN0YXRpY19mb290ZXJfZGF0YVxuICAgIH0gPSBzdGF0ZS5ET0NUT1JfU0VBUkNIXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0aWFsU2VydmVyRGF0YSxcbiAgICAgICAgcHJvZmlsZXMsIGRlZmF1bHRQcm9maWxlLCBvZmZlckxpc3QsIHNlbGVjdGVkTG9jYXRpb24sIGFydGljbGVEYXRhLCBPUERfU1RBVEUsIExBQl9TVEFURSwgdXNlcl9jaXRpZXMsIGlGcmFtZVVybHMsY29tbW9uX3V0bV90YWdzLCBzdGF0aWNfZm9vdGVyX2RhdGFcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGZldGNoQXJ0aWNsZTogKGlkLCBwcmV2aWV3LCBjYikgPT4gZGlzcGF0Y2goZmV0Y2hBcnRpY2xlKGlkLCBwcmV2aWV3LCBjYikpLFxuICAgICAgICBnZXRTcGVjaWFsaXR5Rm9vdGVyRGF0YTogKGNiKSA9PiBkaXNwYXRjaChnZXRTcGVjaWFsaXR5Rm9vdGVyRGF0YShjYikpLFxuICAgICAgICBwb3N0Q29tbWVudDogKGNvbW1lbnQsIGNiKSA9PiBkaXNwYXRjaChwb3N0Q29tbWVudChjb21tZW50LCBjYikpLFxuICAgICAgICBnZXRPZmZlckxpc3Q6IChsYXQsIGxvbmcpID0+IGRpc3BhdGNoKGdldE9mZmVyTGlzdChsYXQsIGxvbmcpKSxcbiAgICAgICAgdG9nZ2xlT1BEQ3JpdGVyaWE6ICh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQsIGZpbHRlcikgPT4gZGlzcGF0Y2godG9nZ2xlT1BEQ3JpdGVyaWEodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkLCBmaWx0ZXIpKSxcbiAgICAgICAgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWE6ICh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQsIGZpbHRlcikgPT4gZGlzcGF0Y2godG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkLCBmaWx0ZXIpKSxcbiAgICAgICAgY2xvbmVDb21tb25TZWxlY3RlZENyaXRlcmlhczogKHNlbGVjdGVkQ3JpdGVyaWFzKSA9PiBkaXNwYXRjaChjbG9uZUNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzKHNlbGVjdGVkQ3JpdGVyaWFzKSksXG4gICAgICAgIHNlbGVjdFNlYXJjaFR5cGU6ICh0eXBlKSA9PiBkaXNwYXRjaChzZWxlY3RTZWFyY2hUeXBlKHR5cGUpKSxcbiAgICAgICAgbWVyZ2VMQUJTdGF0ZTogKHN0YXRlLCBmZXRjaE5ld1Jlc3VsdHMpID0+IGRpc3BhdGNoKG1lcmdlTEFCU3RhdGUoc3RhdGUsIGZldGNoTmV3UmVzdWx0cykpLFxuICAgICAgICBtZXJnZU9QRFN0YXRlOiAoc3RhdGUsIGZldGNoTmV3UmVzdWx0cykgPT4gZGlzcGF0Y2gobWVyZ2VPUERTdGF0ZShzdGF0ZSwgZmV0Y2hOZXdSZXN1bHRzKSksXG4gICAgICAgIHNldFBhY2thZ2VJZDogKHBhY2thZ2VfaWQsIGlzSG9tZVBhZ2UpID0+IGRpc3BhdGNoKHNldFBhY2thZ2VJZChwYWNrYWdlX2lkLCBpc0hvbWVQYWdlKSksXG4gICAgICAgIHN1Ym1pdE1lZGljaW5lTGVhZDogKGRhdGEsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaChzdWJtaXRNZWRpY2luZUxlYWQoZGF0YSwgY2FsbGJhY2spKSxcbiAgICAgICAgY2l0aWVzRGF0YTogKCkgPT4gZGlzcGF0Y2goY2l0aWVzRGF0YSgpKSxcbiAgICAgICAgaUZyYW1lU3RhdGU6ICh1cmwsIGVtcHR5VXJscykgPT4gZGlzcGF0Y2goaUZyYW1lU3RhdGUodXJsLCBlbXB0eVVybHMpKSxcbiAgICAgICAgTm9uSXBkQm9va2luZ0xlYWQ6KGRhdGEsY2IpID0+ZGlzcGF0Y2goTm9uSXBkQm9va2luZ0xlYWQoZGF0YSwgY2IpKSxcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQXJ0aWNsZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9