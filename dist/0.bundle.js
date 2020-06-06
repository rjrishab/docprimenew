(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./dev/js/components/commons/ChatPanel/ChatPanel.js":
/*!**********************************************************!*\
  !*** ./dev/js/components/commons/ChatPanel/ChatPanel.js ***!
  \**********************************************************/
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

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _config = __webpack_require__(/*! ../../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _initialsPicture = __webpack_require__(/*! ../../commons/initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

var _cancelPopup = __webpack_require__(/*! ./cancelPopup */ "./dev/js/components/commons/ChatPanel/cancelPopup.js");

var _cancelPopup2 = _interopRequireDefault(_cancelPopup);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _ChatStaticView = __webpack_require__(/*! ./ChatStaticView */ "./dev/js/components/commons/ChatPanel/ChatStaticView.js");

var _ChatStaticView2 = _interopRequireDefault(_ChatStaticView);

var _RelatedArticles = __webpack_require__(/*! ../article/RelatedArticles */ "./dev/js/components/commons/article/RelatedArticles.js");

var _RelatedArticles2 = _interopRequireDefault(_RelatedArticles);

var _RecentArticles = __webpack_require__(/*! ../article/RecentArticles */ "./dev/js/components/commons/article/RecentArticles.js");

var _RecentArticles2 = _interopRequireDefault(_RecentArticles);

var _TableOfContent = __webpack_require__(/*! ../article/TableOfContent */ "./dev/js/components/commons/article/TableOfContent.js");

var _TableOfContent2 = _interopRequireDefault(_TableOfContent);

var _bannerCarousel = __webpack_require__(/*! ../Home/bannerCarousel */ "./dev/js/components/commons/Home/bannerCarousel.js");

var _bannerCarousel2 = _interopRequireDefault(_bannerCarousel);

var _ChatRefundReasons = __webpack_require__(/*! ./ChatRefundReasons.js */ "./dev/js/components/commons/ChatPanel/ChatRefundReasons.js");

var _ChatRefundReasons2 = _interopRequireDefault(_ChatRefundReasons);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var ChatPanel = function (_React$Component) {
    _inherits(ChatPanel, _React$Component);

    function ChatPanel(props) {
        _classCallCheck(this, ChatPanel);

        var _this = _possibleConstructorReturn(this, (ChatPanel.__proto__ || Object.getPrototypeOf(ChatPanel)).call(this, props));

        _this.sendPageUrl = function () {
            var data = {
                callback: window.location.pathname.substring(1) + window.location.search.replace(/&/g, '*'),
                template: _this.props.msgTemplate ? _this.props.msgTemplate : 'common'
            };
            _this.props.sendAgentWhatsupPageURL(data).then(function (resp) {
                setTimeout(function () {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Sent Successfully" });
                }, 500);
            }).catch(function (e) {
                setTimeout(function () {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Try again!" });
                }, 500);
            });
        };

        var parsedHref = '';
        var is_thyrocare = false;
        if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) == "object") {
            parsedHref = queryString.parse(window.location.search);
            is_thyrocare = parsedHref && parsedHref.utm_source && parsedHref.utm_source.includes('Thyrocare');
        }
        _this.state = {
            selectedRoom: null,
            token: "",
            symptoms: [],
            roomId: "",
            showCancel: false,
            showChatBlock: false,
            additionClasses: ' chat-load-mobile',
            hideIframe: is_thyrocare ? false : true,
            iframeLoading: is_thyrocare ? false : true,
            showStaticView: is_thyrocare ? false : true,
            initialMessage: "",
            callTimeout: false,
            openRefundPopup: false
        };
        return _this;
    }

    _createClass(ChatPanel, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var parsedHref = '';
            if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) == "object") {
                parsedHref = queryString.parse(window.location.search);
            }

            if (this.props.onRefIpd) {
                this.props.onRefIpd(this);
            }
            if (this.props.selectedLocation) {
                this.sendLocationNotification(this.props.selectedLocation);
            }

            _storage2.default.getAuthToken().then(function (token) {
                //this.sendUserDetails(this.props.USER)
                token = token || "";
                if (_this2.props.location.state) {
                    _this2.setState({ token: token, symptoms: _this2.props.location.state.symptoms || [], roomId: _this2.props.location.state.roomId || "" });
                } else {
                    _this2.setState({ token: token });
                }

                if (_this2.props.mobilechatview) {
                    _this2.setState({ showChatBlock: true });
                }
            });

            /**
             * Check for static message and hide/show iframe with loader accordingly.
             */
            if (this.props.USER && (this.props.USER.liveChatStarted || this.props.USER.ipd_chat && this.props.USER.ipd_chat.showIpdChat)) {
                this.setState({ showStaticView: false, iframeLoading: true }, function () {
                    _this2.setState({ hideIframe: false }, function () {
                        var iframe = _this2.refs.chat_frame;
                        if (iframe) {
                            iframe.onload = function () {
                                _this2.setState({ iframeLoading: false });
                            };
                        } else {
                            _this2.setState({ iframeLoading: false });
                        }

                        var iframe1 = _this2.refs.chat_frame1;
                        if (iframe1) {
                            iframe1.onload = function () {
                                _this2.setState({ iframeLoading: false });
                            };
                        } else {
                            _this2.setState({ iframeLoading: false });
                        }
                    });
                });
            }

            if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) == "object") {
                // handling events sent by iframe
                window.addEventListener('message', function (_ref) {
                    var data = _ref.data;

                    var eventData = data;
                    if (data) {
                        switch (data.event) {
                            case "RoomAgent":
                                {
                                    this.setState({ selectedRoom: data.data.rid });

                                    var analyticData = void 0;

                                    if (eventData.data.agentType == 'Type 1') {

                                        analyticData = {
                                            'Category': 'Chat', 'Action': 'L1DoctorAssigned', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'l1-doctor-assigned', 'RoomId': eventData.data.rid, 'DoctorId': eventData.data.employeeId, "url": window.location.pathname
                                        };
                                        _gtm2.default.sendEvent({ data: analyticData });
                                    } else if (eventData.data.agentType == 'Type 2') {

                                        analyticData = {
                                            'Category': 'Chat', 'Action': 'L2DoctorAssigned', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'l2-doctor-assigned', 'RoomId': eventData.data.rid, 'DoctorId': eventData.data.employeeId, "url": window.location.pathname
                                        };
                                        _gtm2.default.sendEvent({ data: analyticData });
                                    } else if (eventData.data.agentType == 'Type 3') {

                                        analyticData = {
                                            'Category': 'Chat', 'Action': 'L3DoctorAssigned', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'l3-doctor-assigned', 'RoomId': eventData.data.rid, 'DoctorId': eventData.data.employeeId, "url": window.location.pathname
                                        };
                                        _gtm2.default.sendEvent({ data: analyticData });
                                    }

                                    // this.props.getChatDoctorById(data.data.manager, data.data.rid, (data) => {
                                    //     this.dispatchCustomEvent('profile_assigned', {
                                    //         profileId: data.id
                                    //     })

                                    // })
                                    break;
                                }

                            case "doctor_search":
                                {
                                    var searchData = {
                                        selectedCriterias: this.props.doctor_search_data.selectedCriterias,
                                        selectedLocation: this.props.doctor_search_data.selectedLocation
                                    };
                                    searchData = encodeURIComponent(JSON.stringify(searchData));
                                    var filterData = encodeURIComponent(JSON.stringify(this.props.doctor_search_data.filterCriteria));
                                    this.props.history.push('/opd/searchresults?search=' + searchData + '&filter=' + filterData + '&doctor_name=' + '&hospital_name=');
                                    break;
                                }

                            case "lab_search":
                                {
                                    var _searchData = {
                                        selectedCriterias: this.props.lab_search_data.selectedCriterias,
                                        selectedLocation: this.props.lab_search_data.selectedLocation
                                    };
                                    _searchData = encodeURIComponent(JSON.stringify(_searchData));
                                    var _filterData = encodeURIComponent(JSON.stringify(this.props.lab_search_data.filterCriteria));
                                    this.props.history.push('/lab/searchresults?search=' + _searchData + '&filter=' + _filterData);
                                    break;
                                }

                            case "chat_loaded":
                                {
                                    if (data.data.rid) {
                                        // save current room
                                        var _analyticData = {
                                            'Category': 'Chat', 'Action': 'ChatInitialization', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'chat-initialization', 'RoomId': data.data.rid, "url": window.location.pathname
                                        };
                                        _gtm2.default.sendEvent({ data: _analyticData });
                                        var extraParams = {};
                                        if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) == "object") {
                                            parsedHref = queryString.parse(window.location.search);
                                        }
                                        if (parsedHref && parsedHref.payment == 'success') {
                                            extraParams.payment = true;
                                        }
                                        this.props.setChatRoomId(data.data.rid, extraParams);
                                        if (this.props.selectedLocation) {
                                            this.sendLocationNotification(this.props.selectedLocation);
                                        }
                                        //Send payment event ,when payment is in url
                                        if (parsedHref && parsedHref.payment) {
                                            this.sendPaymentStatusEvent(data.data.rid);
                                        }

                                        this.sendUserDetails();
                                        this.setState({ selectedRoom: data.data.rid, iframeLoading: false });
                                    }
                                    break;
                                }

                            case "Login":
                                {
                                    if (data.data["params.token"]) {
                                        var _analyticData2 = {
                                            'Category': 'Chat', 'Action': 'UserRegisteredviaChat', 'CustomerID': '', 'leadid': 0, 'event': 'user-registered-via-chat', 'RoomId': eventData.data.rid || '', "url": window.location.pathname
                                        };
                                        _gtm2.default.sendEvent({ data: _analyticData2 });
                                        this.props.loginViaChat(data.data["params.token"]);
                                    }
                                    break;
                                }

                            case "Chat_Close":
                                {
                                    // this.props.startLiveChat(false, this.state.selectedLocation)
                                    this.setState({ initialMessage: "", selectedRoom: null });
                                    if (parsedHref && parsedHref.payment == 'success') {
                                        var buildUrl = this.buildUrl();
                                        this.props.history.replace(buildUrl);
                                    }
                                    this.props.setChatRoomId(null);
                                    var that = this;
                                    setTimeout(function () {
                                        that.props.ipdChatView(null);
                                    }, 1000);
                                    this.props.unSetCommonUtmTags('chat');
                                    // this.props.history.go(-1)
                                    break;
                                }

                            case "prescription_report":
                                {
                                    var _analyticData3 = {
                                        'Category': 'Chat', 'Action': 'PrescriptionGenerated', 'CustomerID': '', 'leadid': 0, 'event': 'prescription-generated', 'RoomId': eventData.rid || '', "url": window.location.pathname
                                    };
                                    _gtm2.default.sendEvent({ data: _analyticData3 });
                                    break;
                                }

                            case 'banner':
                                {

                                    if (data.type == 'timer') {
                                        var _analyticData4 = {
                                            'Category': 'Chat', 'Action': 'BannerTimerFired', 'CustomerID': '', 'leadid': 0, 'event': 'banner-timer-fired', 'RoomId': eventData.rid || '', "url": window.location.pathname
                                        };
                                        _gtm2.default.sendEvent({ data: _analyticData4 });
                                    } else if (data.type == 'transfer') {
                                        var _analyticData5 = {
                                            'Category': 'Chat', 'Action': 'BannerTransferFired', 'CustomerID': '', 'leadid': 0, 'event': 'banner-transfer-fired', 'RoomId': eventData.rid || '', "url": window.location.pathname
                                        };
                                        _gtm2.default.sendEvent({ data: _analyticData5 });
                                    } else if (data.type == 'preventive') {
                                        var _analyticData6 = {
                                            'Category': 'Chat', 'Action': 'PreventiveFired', 'CustomerID': '', 'leadid': 0, 'event': 'preventive-fired', 'RoomId': eventData.rid || '', "url": window.location.pathname
                                        };
                                        _gtm2.default.sendEvent({ data: _analyticData6 });
                                    } else if (data.type == 'salesBanner') {
                                        var _analyticData7 = {
                                            'Category': 'Chat', 'Action': 'BannerSalesFired', 'CustomerID': '', 'leadid': 0, 'event': 'banner-sales-fired', 'RoomId': eventData.rid || '', "url": window.location.pathname
                                        };
                                        _gtm2.default.sendEvent({ data: _analyticData7 });
                                    }
                                    break;
                                }

                            case 'bookNow':
                                {

                                    var _analyticData8 = {
                                        'Category': 'Chat', 'Action': 'BookNowFired', 'CustomerID': '', 'leadid': 0, 'event': 'book-now-fired', 'RoomId': eventData.rid || '', "url": window.location.pathname, 'specialization_url': data.url || '', 'ids': data.ids || '', 'type': data.type || ''
                                    };
                                    _gtm2.default.sendEvent({ data: _analyticData8 });
                                    break;
                                }

                            case 'bookNowPharmacy':
                                {
                                    var _analyticData9 = {
                                        'Category': 'Chat', 'Action': 'BookNowPharmacyFired', 'CustomerID': '', 'leadid': 0, 'event': 'book-now-pharmacy-fired', 'RoomId': eventData.rid || '', "url": window.location.pathname
                                    };
                                    _gtm2.default.sendEvent({ data: _analyticData9 });
                                    break;
                                }

                            case 'MobileVerification':
                                {
                                    var _analyticData10 = {
                                        'Category': 'Chat', 'Action': 'MobileVerificationFired', 'CustomerID': '', 'leadid': 0, 'event': 'mobile-verification-fired', 'RoomId': eventData.rid || '', "url": window.location.pathname
                                    };
                                    _gtm2.default.sendEvent({ data: _analyticData10 });
                                    this.props.setChatRoomId(data.data.rid, { showDisabledPayment: true });
                                    break;
                                }

                        }

                        /**
                         * redirecting chat to new page for mobile users on homepage and on focus
                         * TODO : review this
                         */
                        if (data.message && data.message == 'focus' && !(this.props.USER && this.props.USER.ipd_chat && this.props.USER.ipd_chat.showIpdChat)) {
                            var iframe = this.refs.chat_frame;
                            // iframe.scrollTop = iframe.scrollHeight
                            if (this.props.homePage && window.innerWidth < 768 && !this.props.history.location.pathname.includes('mobileviewchat')) {
                                this.props.history.push('/mobileviewchat');
                            }
                        }
                    }
                }.bind(this));
            }
        }
    }, {
        key: 'sendPaymentStatusEvent',
        value: function sendPaymentStatusEvent(rid) {
            var parsedHref = '';
            if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) == "object") {
                parsedHref = queryString.parse(window.location.search);
            }
            var data = {
                rid: rid,
                payment_status: parsedHref.payment || ''
            };
            this.dispatchCustomEvent('payment', data);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.props.onRefIpd) {
                this.props.onRefIpd(undefined);
            }
        }
    }, {
        key: 'sendLocationNotification',
        value: function sendLocationNotification(selectedLocation) {
            var data = {
                location: selectedLocation.geometry.location,
                locality: selectedLocation.locality,
                city: selectedLocation.name,
                address: selectedLocation.formatted_address
            };

            this.dispatchCustomEvent('location', data);
        }
    }, {
        key: 'sendUserDetails',
        value: function sendUserDetails() {
            var _this3 = this;

            var data = {};
            setTimeout(function () {
                var user = _this3.props.USER;
                if (user && user.profiles && Object.keys(user.profiles).length > 0 && user.profiles[user.selectedProfile]) {

                    _this3.dispatchCustomEvent('user_details', { is_insured: user.profiles[user.selectedProfile].is_insured, name: user.profiles[user.selectedProfile].name });
                } else {
                    _this3.dispatchCustomEvent('user_details', { is_insured: false, name: '' });
                }
            }, 1000);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            var _this4 = this;

            var parsedHref = '';
            if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) == "object") {
                parsedHref = queryString.parse(window.location.search);
            }
            var is_thyrocare = parsedHref && parsedHref.utm_source && parsedHref.utm_source.includes('Thyrocare') ? true : false;

            if (this.props.selectedLocation != props.selectedLocation && props.selectedLocation) {
                this.sendLocationNotification(props.selectedLocation);
            }

            if (props.USER && props.USER.liveChatStarted && props.USER.liveChatStarted != this.props.USER.liveChatStarted || props.USER && props.USER.ipd_chat && props.USER.ipd_chat.showIpdChat) {
                //this.sendUserDetails(props.USER)
                this.setState({ showStaticView: false, iframeLoading: true }, function () {
                    _this4.setState({ hideIframe: false }, function () {

                        var iframe = _this4.refs.chat_frame;
                        if (iframe) {
                            iframe.onload = function () {
                                _this4.setState({ iframeLoading: false });
                            };
                        } else {
                            _this4.setState({ iframeLoading: false });
                        }

                        var iframe1 = _this4.refs.chat_frame1;
                        if (iframe1) {
                            iframe1.onload = function () {
                                _this4.setState({ iframeLoading: false });
                            };
                        } else {
                            _this4.setState({ iframeLoading: false });
                        }
                    });
                });
            } else {
                if (props.USER && !props.USER.liveChatStarted) {
                    this.setState({ showStaticView: is_thyrocare ? false : true, iframeLoading: false });
                }
            }
        }
    }, {
        key: 'dispatchCustomEvent',
        value: function dispatchCustomEvent(eventName) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var event = new Event(eventName);
            var iframe = this.refs.chat_frame;

            if (iframe && iframe.contentWindow) {
                iframe.dispatchEvent(event);
                iframe.contentWindow.postMessage({ 'event': eventName, data: data }, '*');
            }
            var iframe1 = this.refs.chat_frame1;
            if (iframe1 && iframe1.contentWindow) {
                iframe1.dispatchEvent(event);
                iframe1.contentWindow.postMessage({ 'event': eventName, data: data }, '*');
            }
        }
    }, {
        key: 'closeChat',
        value: function closeChat() {
            var _this5 = this;

            var parsedHref = '';
            if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) == "object") {
                parsedHref = queryString.parse(window.location.search);
            }

            _storage2.default.getAuthToken().then(function (token) {
                token = token || "";
                _this5.setState({ token: token, initialMessage: "", selectedRoom: null });
            });
            this.dispatchCustomEvent.call(this, 'close_frame');
            this.setState({ showCancel: !this.state.showCancel });
            if (parsedHref && parsedHref.payment == 'success') {
                var buildUrl = this.buildUrl();
                this.props.history.replace(buildUrl);
            }
            this.props.setChatRoomId(null);
            this.props.unSetCommonUtmTags('chat');
            var that = this;
            setTimeout(function () {
                that.props.ipdChatView(null);
            }, 1000);
        }
    }, {
        key: 'buildUrl',
        value: function buildUrl() {
            return window.pathname;
        }
    }, {
        key: 'toggleCancel',
        value: function toggleCancel(e) {
            e.preventDefault();
            e.stopPropagation();
            this.setState({ showCancel: !this.state.showCancel });
        }
    }, {
        key: 'hideStaticChat',
        value: function hideStaticChat(data) {
            if (this.props.mobilechatview) {
                this.props.history.go(-1);
            } else {
                this.setState({ showChatBlock: false });
            }
        }
    }, {
        key: 'startLiveChatWithMessage',
        value: function startLiveChatWithMessage(message) {
            var _this6 = this;

            this.setState({ initialMessage: message }, function () {
                _this6.props.startLiveChat();
            });
        }
    }, {
        key: 'closeChatClick',
        value: function closeChatClick() {
            if (this.props.mobilechatview) {
                this.props.history.go(-1);
            } else {
                this.setState({ showChatBlock: false });
            }
        }
    }, {
        key: 'chatBtnClick',
        value: function chatBtnClick() {
            if (this.props.articleData || this.props.searchTestInfoData) {
                this.setState({ showChatBlock: true, additionClasses: "" });
            } else if (this.props.newChatBtn) {
                this.props.history.push('/mobileviewchat?botagent=true&force_start=true');
                var data = {
                    'Category': 'Chat', 'Action': 'getHelpBtnClick', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'chat-button-clicked', "url": window.location.pathname
                };
                _gtm2.default.sendEvent({ data: data });
            } else if (this.props.newChatBtnAds && this.props.bookingsGA) {
                this.props.history.push('/mobileviewchat?botagent=true&force_start=true');
                var _data = {
                    'Category': 'Chat', 'Action': 'getHelpBtnClick', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'chat-button-clicked', "url": window.location.pathname
                };
                _gtm2.default.sendEvent({ data: _data });
            }
        }
    }, {
        key: 'newChatBtnClick',
        value: function newChatBtnClick() {
            if (this.props.type && (this.props.type == 'opd' || this.props.type == 'lab')) {
                this.props.history.push('/mobileviewchat?botagent=true&force_start=true');
                var data = {
                    'Category': 'Chat', 'Action': 'needHelpBtnClicked', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'need-help-btn-clicked', "PageType": this.props.type, "url": window.location.pathname
                };
                _gtm2.default.sendEvent({ data: data });
            } else {
                this.setState({ showChatBlock: true, additionClasses: "" });
            }
        }
    }, {
        key: 'onIframeLoad',
        value: function onIframeLoad(e) {
            try {
                var target = e.target;
                if (target) {
                    (target.contentWindow || target.contentDocument).location.href;
                }
            } catch (error) {
                console.log('error in rendering chat iframe' + error);
            }
        }
    }, {
        key: 'refundClicked',
        value: function refundClicked(isEnable) {
            if (isEnable) {
                var data = {
                    'Category': 'Chat', 'Action': 'RefundBtnClicked', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'Refund-btn-clicked', "PageType": this.props.type, "url": window.location.pathname
                };
                _gtm2.default.sendEvent({ data: data });
                this.toggleRefundPopup();
            } else {
                setTimeout(function () {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "No payment exists for this consultation" });
                }, 200);
            }
        }
    }, {
        key: 'toggleRefundPopup',
        value: function toggleRefundPopup() {
            this.setState({ openRefundPopup: !this.state.openRefundPopup });
        }
    }, {
        key: 'submitRefundReasons',
        value: function submitRefundReasons(reason) {
            var data = {
                roomId: this.state.roomId,
                reason: reason
            };
            this.dispatchCustomEvent('Refund_Fees', data);
            this.props.setPaymentStatus(null);
            var buildUrl = this.buildUrl();
            this.props.history.replace(buildUrl);
            this.toggleRefundPopup();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this7 = this;

            return _react2.default.createElement(_react2.default.Fragment, null);
            var doctorData = null;
            if (this.props.USER.chatRoomIds[this.state.selectedRoom]) {
                if (this.props.USER.chatDoctors[this.props.USER.chatRoomIds[this.state.selectedRoom]]) {
                    doctorData = this.props.USER.chatDoctors[this.props.USER.chatRoomIds[this.state.selectedRoom]];
                }
            }
            var symptoms_uri = this.state.symptoms.reduce(function (str, curr) {
                str += curr + ',';
                return str;
            }, "");

            if (symptoms_uri) {
                symptoms_uri = encodeURIComponent(symptoms_uri);
            }

            var parsedHref = '';
            if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) == "object") {
                parsedHref = queryString.parse(window.location.search);
            }

            var iframe_url = _config2.default.CHAT_URL + '?cb=1&token=' + this.state.token + '&symptoms=' + symptoms_uri + '&room=' + this.state.roomId + '&from_app=' + (parsedHref.from_app || false) + '&device_id=' + (parsedHref.device_id || '');

            if (this.state.initialMessage && !this.state.showStaticView) {
                iframe_url += '&msg=' + this.state.initialMessage;
            }

            var botAgent = false;
            if (this.props.location.search.includes('botagent')) {
                botAgent = true;
                if (this.props.type && this.props.type == 'opd') {
                    iframe_url += '&botagent=DocPrimeSOT&source=doctorlistingchatnow';
                } else if (this.props.newChatBtnAds) {
                    iframe_url += '&botagent=DocPrimeSOT&source=leadformchatnow';
                } else {
                    iframe_url += '&botagent=DocPrimeSOT&source=lablistingchatnow';
                }
            }
            var is_religare = false;
            if (false) { var religareTag; }
            if (parsedHref && parsedHref.utm_source) {

                if (parsedHref.utm_source != 'religare') {
                    iframe_url += '&source=' + parsedHref.utm_source;
                }

                if (!is_religare && parsedHref.utm_source.includes('religare')) {
                    is_religare = true;
                    iframe_url += '&source=religare&visitid=' + (parsedHref.visitid ? parsedHref.visitid : '');
                }
            }
            is_religare = is_religare && this.props.mobilechatview;
            var chatBtnContent1 = '';
            var chatBtnContent2 = '';
            if (this.props.articleData && this.props.articleData.title) {
                chatBtnContent1 = 'Chat now with doctor';
                chatBtnContent2 = 'about ' + this.props.articleData.title.split('|')[0] + ' and related queries';
            } else if (this.props.newChatBtn || this.props.newChatBtnAds) {
                chatBtnContent1 = _react2.default.createElement(
                    'span',
                    { style: { fontSize: 18 } },
                    _react2.default.createElement('img', { style: { marginRight: 8, width: 24, verticalAlign: 'middle' }, src: "/assets" + "/img/customer-icons/headphone.svg" }),
                    'Get help with your bookings'
                );
            }

            var recentArticles = false;
            if (this.props.articleData && this.props.articleData.recent_articles) {
                recentArticles = this.props.articleData.recent_articles;
            }

            //if(this.props.showHalfScreenChat && this.props.ipdFormParams) {
            if (this.props.USER && this.props.USER.ipd_chat && this.props.USER.ipd_chat.ipdForm && false) {

                var params = JSON.stringify(this.props.USER.ipd_chat.ipdForm);
                iframe_url += '&product=IPD&params=' + params + '&msg=startchat';
            } else {
                iframe_url += '&product=DocPrime';
            }

            if (parsedHref.booking_id) {
                iframe_url += '&booking_id=' + parsedHref.booking_id;
            }

            if (parsedHref.utm_source && parsedHref.utm_source.includes('Thyrocare')) {
                iframe_url += '&msg=startchat';
            }

            if (parsedHref.payment) {
                iframe_url += '&payment=' + parsedHref.payment;
            }

            if (parsedHref.order_id) {
                iframe_url += '&order_id=' + parsedHref.order_id;
            }

            var payment_disable = parsedHref && parsedHref.utm_campaign && parsedHref.utm_campaign.includes('AdDocChat') ? parsedHref.utm_campaign.includes('AdDocChat') : null;

            if (parsedHref.utm_campaign) {
                iframe_url += '&utm_campaign=' + parsedHref.utm_campaign;
            }

            if (payment_disable) {
                iframe_url += '&testing_mode=a';
            } else {
                iframe_url += '&testing_mode=b';
            }

            if (parsedHref && parsedHref.consultation_id) {
                iframe_url += '&consultation_id=' + parsedHref.consultation_id;
            }

            var is_payment_for_current_room = null;
            var show_disabled_refund_button = null;
            if (this.props.USER && this.props.USER.currentRoomId) {

                if (this.props.USER.chatPaymentStatus == this.props.USER.currentRoomId) {
                    is_payment_for_current_room = true;
                }

                if (this.props.USER.mobileVerificationDone == this.props.USER.currentRoomId) {
                    show_disabled_refund_button = true;
                }
            }

            if (this.props.showHalfScreenChat && !this.props.showDesktopIpd) {
                return _react2.default.createElement(
                    'div',
                    { className: 'chat-body' },
                    _storage2.default.isAgent() || this.state.hideIframe ? "" : _react2.default.createElement('iframe', { className: this.props.homePage ? 'chat-iframe ' + (this.state.iframeLoading ? 'd-none' : '') : 'chat-iframe-inner float-chat-height ' + (this.state.iframeLoading ? 'd-none' : ''), src: iframe_url, allow: 'microphone;camera', ref: 'chat_frame1' }),
                    this.state.iframeLoading ? _react2.default.createElement(
                        'div',
                        { className: 'loader-for-chat-div' },
                        _react2.default.createElement(
                            'div',
                            { className: 'loader-for-chat' },
                            _react2.default.createElement('span', null),
                            _react2.default.createElement('span', null),
                            _react2.default.createElement('span', null),
                            _react2.default.createElement('span', null),
                            _react2.default.createElement('span', null),
                            _react2.default.createElement('span', null)
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'ldng-text' },
                            'Connecting to the doctor...'
                        )
                    ) : ""
                );
            } else {
                return _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    this.state.showCancel ? _react2.default.createElement(_cancelPopup2.default, { homePage: this.props.homePage, toggle: this.toggleCancel.bind(this), closeChat: this.closeChat.bind(this) }) : "",
                    _react2.default.createElement(
                        'div',
                        { className: 'fixed-chatbox' },
                        this.props.homePage && false ? _react2.default.createElement(
                            'div',
                            { className: 'banner-cont-height home-page-banner-div mr-0 banner-md-margn home-bnnr-mrgn' },
                            _react2.default.createElement(
                                'div',
                                { className: 'hidderBanner banner-carousel-div' },
                                _react2.default.createElement('div', { className: 'divHeight m-0', style: { marginBottom: "5px!important" } })
                            ),
                            !!!this.props.chatPage && this.props.offerList && this.props.offerList.filter(function (x) {
                                return x.slider_location === 'home_page';
                            }).length ? _react2.default.createElement(
                                'div',
                                { className: 'home-banner-pos' },
                                _react2.default.createElement(_bannerCarousel2.default, _extends({}, this.props, { sliderLocation: 'home_page' }))
                            ) : ''
                        ) : '',
                         false ? undefined : '',
                        this.state.openRefundPopup && _react2.default.createElement(_ChatRefundReasons2.default, { submitRefund: this.submitRefundReasons.bind(this), toggleRefund: function toggleRefund() {
                                return _this7.toggleRefundPopup();
                            } }),
                        this.props.homePage || this.props.mobilechatview || this.props.noChatButton || this.props.articleData || this.props.searchTestInfoData ? '' : this.props.newChatBtn || this.props.newChatBtnAds ? _react2.default.createElement(
                            'section',
                            { className: 'chat-article-btn fixed horizontal bottom no-round d-md-none fw-500 text-center', onClick: function onClick() {
                                    return _this7.chatBtnClick();
                                } },
                            chatBtnContent1,
                            _react2.default.createElement(
                                'span',
                                null,
                                chatBtnContent2
                            )
                        ) : ""
                        // <div className={"chat-float-btn d-lg-none d-md-none" + (this.props.extraClass || "")} onClick={() => this.setState({ showChatBlock: true, additionClasses: "" })}>
                        //     <img width="80" src={ASSETS_BASE_URL + "/img/customer-icons/floatingicon.png"} />
                        // </div>
                        // <div className="new-chat-fixed-btn d-md-none" onClick={() => this.newChatBtnClick()}>
                        //     <img src={ASSETS_BASE_URL + '/img/customer-icons/chat-btn-new.svg'} />
                        // </div>
                        ,
                        this.props.searchTestInfoData && this.props.updateTabsValues && this.props.resp_test_id ? _react2.default.createElement(
                            'div',
                            { className: 'table-of-content-desktop mt-21' },
                            _react2.default.createElement(_TableOfContent2.default, { searchTestInfoData: this.props.searchTestInfoData, updateTabsValues: this.props.updateTabsValues, resp_test_id: this.props.resp_test_id })
                        ) : '',
                        _react2.default.createElement(
                            'div',
                            { className: (this.state.showChatBlock ? "floating-chat " : "") + ' ' + (is_religare ? ' chat-rlgr-view' : '') },
                            this.state.showStaticView ? _react2.default.createElement(_ChatStaticView2.default, _extends({}, this.props, { startLiveChatWithMessage: this.startLiveChatWithMessage.bind(this), hideStaticChat: this.hideStaticChat.bind(this), showChatBlock: this.state.showChatBlock, dataClass: this.state.showChatBlock ? "chatbox-right test-chat " : (this.props.homePage ? 'chatbox-right' : 'chatbox-right chat-slide-down d-lg-flex mt-21') + ' ' + (this.props.homePage ? '' : this.state.additionClasses), is_religare: is_religare, sendPageUrl: this.sendPageUrl })) : _react2.default.createElement(
                                'div',
                                { className: this.state.showChatBlock ? "chatbox-right test-chat" : (this.props.homePage ? 'chatbox-right' : 'chatbox-right chat-slide-down d-lg-flex mt-21') + ' ' + (this.props.homePage ? '' : this.state.additionClasses) },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'chat-head' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'hd-chat', style: { flex: 1 } },
                                        this.props.location.search && this.props.location.search.includes('?botagent') ? _react2.default.createElement(
                                            'p',
                                            { className: 'text-left header-text-chat' },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'hed-txt-lt' },
                                                'Get '
                                            ),
                                            'Help with Booking'
                                        ) : this.props.chatPage ? _react2.default.createElement(
                                            'h1',
                                            { className: 'text-left header-text-chat' },
                                            'Online Doctor Consultation!'
                                        ) : _react2.default.createElement(
                                            'p',
                                            { className: 'text-left header-text-chat' },
                                            'Online Doctor Consultation!'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'cht-head-rqst-btn refund-chat', style: this.props.homePage ? {} : {} },
                                        !is_religare && show_disabled_refund_button && _react2.default.createElement(
                                            'p',
                                            { className: 'cht-need-btn cursor-pntr mr-2 ' + (is_payment_for_current_room ? '' : 'disable-all'), onClick: function onClick() {
                                                    _this7.refundClicked(is_payment_for_current_room);
                                                } },
                                            _react2.default.createElement('img', { src: "/assets" + '/img/chat-rfnd.png', style: { width: 28 } }),
                                            ' '
                                        ),
                                        is_religare ? _react2.default.createElement(
                                            'span',
                                            { onClick: this.toggleCancel.bind(this) },
                                            _react2.default.createElement('img', { style: { width: 26 }, src: "/assets" + "/img/rel_chatclose.svg", title: 'start a new chat' })
                                        ) : _react2.default.createElement(
                                            'span',
                                            { onClick: this.toggleCancel.bind(this) },
                                            _react2.default.createElement('img', { style: { width: 26 }, src: "/assets" + "/img/chatclose.svg", title: 'start a new chat' })
                                        ),
                                        this.state.showChatBlock ? is_religare ? _react2.default.createElement(
                                            'span',
                                            { className: 'ml-2', onClick: function onClick() {
                                                    return _this7.closeChatClick();
                                                } },
                                            _react2.default.createElement('img', { className: 'close-chat', style: { width: 26 }, src: "/assets" + "/img/rel_chatminimize.svg" })
                                        ) : _react2.default.createElement(
                                            'span',
                                            { className: 'ml-2', onClick: function onClick() {
                                                    return _this7.closeChatClick();
                                                } },
                                            _react2.default.createElement('img', { className: 'close-chat', style: { width: 26 }, src: "/assets" + "/img/chatminimize.svg" })
                                        ) : ''
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'chat-body' },
                                    _storage2.default.isAgent() || this.state.hideIframe ? "" : _react2.default.createElement('iframe', { className: this.props.homePage ? 'chat-iframe ' + (this.state.iframeLoading ? 'd-none' : '') : 'chat-iframe-inner float-chat-height ' + (this.state.iframeLoading ? 'd-none' : ''), src: iframe_url, allow: 'microphone;camera', ref: 'chat_frame', onLoad: function onLoad(e) {
                                            return _this7.onIframeLoad(e);
                                        }, onError: function onError(e) {
                                            return _this7.onIframeLoad(e);
                                        } }),
                                    this.state.iframeLoading ? _react2.default.createElement(
                                        'div',
                                        { className: 'loader-for-chat-div' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'loader-for-chat' },
                                            _react2.default.createElement('span', null),
                                            _react2.default.createElement('span', null),
                                            _react2.default.createElement('span', null),
                                            _react2.default.createElement('span', null),
                                            _react2.default.createElement('span', null),
                                            _react2.default.createElement('span', null)
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'ldng-text' },
                                            'Connecting to the doctor...'
                                        )
                                    ) : ""
                                )
                            )
                        ),
                        _storage2.default.isAgent() && !this.props.homePage && this.props.msgTemplate ? _react2.default.createElement(
                            'button',
                            { onClick: this.sendPageUrl, className: 'whtsappPages' },
                            _react2.default.createElement('img', { src: "/assets" + '/img/wa-logo.svg' }),
                            'Send on Whatsapp'
                        ) : ''
                    )
                );
            }
        }
    }]);

    return ChatPanel;
}(_react2.default.Component);

exports.default = ChatPanel;

/***/ }),

/***/ "./dev/js/components/commons/ChatPanel/ChatRefundReasons.js":
/*!******************************************************************!*\
  !*** ./dev/js/components/commons/ChatPanel/ChatRefundReasons.js ***!
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChatRefundView = function (_React$Component) {
	_inherits(ChatRefundView, _React$Component);

	function ChatRefundView(props) {
		_classCallCheck(this, ChatRefundView);

		var _this = _possibleConstructorReturn(this, (ChatRefundView.__proto__ || Object.getPrototypeOf(ChatRefundView)).call(this, props));

		_this.state = {
			refundReason: '',
			showError: false
		};
		return _this;
	}

	_createClass(ChatRefundView, [{
		key: 'selectReason',
		value: function selectReason(reason) {
			this.setState({ refundReason: reason, showError: false });
		}
	}, {
		key: 'submit',
		value: function submit() {
			if (!this.state.refundReason) {
				this.setState({ showError: true });
			} else {
				this.props.submitRefund(this.state.refundReason);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				_react2.default.Fragment,
				null,
				_react2.default.createElement('div', { className: 'cancel-overlay cancel-overlay-zindex', onClick: function onClick(e) {
						e.preventDefault();
						e.stopPropagation();
						_this2.props.toggleRefund();
					} }),
				_react2.default.createElement(
					'div',
					{ className: 'widget cancel-appointment-div cancel-popup overflow-hidden refund-pop font-analyze ', style: { padding: '12px' } },
					_react2.default.createElement('img', { className: 'rfnd-cls-btn', src: "/assets" + '/img/icons/close.png', onClick: function onClick(e) {
							e.preventDefault();
							e.stopPropagation();
							_this2.props.toggleRefund();
						} }),
					_react2.default.createElement(
						'div',
						{ className: 'refund-chat-hdng' },
						_react2.default.createElement(
							'p',
							{ className: 'rfnd-mn-hdng' },
							'Are you sure?'
						),
						_react2.default.createElement(
							'p',
							{ className: 'rfnd-sub-hdng' },
							'Once you proceed further, consultation will end and refund will be initiated.'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'rfnd-lst-cont' },
						_react2.default.createElement(
							'p',
							{ className: 'rfnd-lst-hdng' },
							'*Please provide your reason for refund:'
						),
						this.state.showError && _react2.default.createElement(
							'p',
							{ className: 'rfnd-lstsub-hdng' },
							'Select reason for refund'
						),
						_react2.default.createElement(
							'ul',
							null,
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'div',
									{ className: 'dtl-radio' },
									_react2.default.createElement(
										'label',
										{ className: 'container-radio mb-0 hpa-container-radio' },
										'Query not addressed properly',
										_react2.default.createElement('input', { type: 'radio', name: 'radio', onChange: function onChange() {
												return _this2.selectReason('Query not addressed properly');
											} }),
										_react2.default.createElement('span', { className: 'doc-checkmark hpa-radio hpa-radio-gender' })
									)
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'div',
									{ className: 'dtl-radio' },
									_react2.default.createElement(
										'label',
										{ className: 'container-radio mb-0 hpa-container-radio' },
										'Treatment/Prescription not provided',
										_react2.default.createElement('input', { type: 'radio', name: 'radio', onChange: function onChange() {
												return _this2.selectReason('Treatment/Prescription not provided');
											} }),
										_react2.default.createElement('span', { className: 'doc-checkmark hpa-radio hpa-radio-gender' })
									)
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'div',
									{ className: 'dtl-radio' },
									_react2.default.createElement(
										'label',
										{ className: 'container-radio mb-0 hpa-container-radio' },
										'Doctor takes too long to respond',
										_react2.default.createElement('input', { type: 'radio', name: 'radio', onChange: function onChange() {
												return _this2.selectReason('Doctor takes too long to respond');
											} }),
										_react2.default.createElement('span', { className: 'doc-checkmark hpa-radio hpa-radio-gender' })
									)
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'div',
									{ className: 'dtl-radio' },
									_react2.default.createElement(
										'label',
										{ className: 'container-radio mb-0 hpa-container-radio' },
										'Not happy with overall service',
										_react2.default.createElement('input', { type: 'radio', name: 'radio', onChange: function onChange() {
												return _this2.selectReason('Not happy with overall service');
											} }),
										_react2.default.createElement('span', { className: 'doc-checkmark hpa-radio hpa-radio-gender' })
									)
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'div',
									{ className: 'dtl-radio' },
									_react2.default.createElement(
										'label',
										{ className: 'container-radio mb-0 hpa-container-radio' },
										'Others',
										_react2.default.createElement('input', { type: 'radio', name: 'radio', onChange: function onChange() {
												_this2.selectReason('Others');
											} }),
										_react2.default.createElement('span', { className: 'doc-checkmark hpa-radio hpa-radio-gender' })
									)
								)
							)
						)
					),
					_react2.default.createElement(
						'button',
						{ className: 'rfnd-btn', onClick: function onClick() {
								return _this2.submit();
							} },
						'Initiate Refund'
					)
				)
			);
		}
	}]);

	return ChatRefundView;
}(_react2.default.Component);

exports.default = ChatRefundView;

/***/ }),

/***/ "./dev/js/components/commons/ChatPanel/ChatStaticView.js":
/*!***************************************************************!*\
  !*** ./dev/js/components/commons/ChatPanel/ChatStaticView.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(/*! ../../../actions/index */ "./dev/js/actions/index.js");

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var ChatStatic = function (_React$Component) {
    _inherits(ChatStatic, _React$Component);

    function ChatStatic(props) {
        _classCallCheck(this, ChatStatic);

        var _this = _possibleConstructorReturn(this, (ChatStatic.__proto__ || Object.getPrototypeOf(ChatStatic)).call(this, props));

        var parsed = queryString.parse(_this.props.location.search);
        _this.state = {
            value: '',
            openBanner: true,
            utm_term: parsed.utm_term || "",
            BasicEnquiry: parsed.BasicEnquiry || "",
            utm_loader: !!parsed.utm_term,
            force_start: parsed.force_start || false
        };
        return _this;
    }

    _createClass(ChatStatic, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if ((this.state.BasicEnquiry || this.state.force_start) && this.props.mobilechatview) {
                this.getIframe();
            } else {
                /*if (this.state.utm_term) {
                    chat_utm(this.state.utm_term).then((data) => {
                        if (data && data.data && data.data.BasicEnquiry) {
                            this.setState({ BasicEnquiry: data.data.BasicEnquiry, utm_loader: false })
                        } else {
                            this.setState({
                                BasicEnquiry: "",
                                utm_term: "",
                                utm_loader: false
                            })
                        }
                    }).catch((e) => {
                        this.setState({
                            BasicEnquiry: "",
                            utm_term: "",
                            utm_loader: false
                        })
                    })
                }*/
                this.setState({
                    BasicEnquiry: "",
                    utm_term: "",
                    utm_loader: false
                });
            }
        }
    }, {
        key: 'inputHandler',
        value: function inputHandler(e) {
            this.setState({ value: e.target.value });
        }
    }, {
        key: 'handleKeyUp',
        value: function handleKeyUp(e) {
            if (e.key === 'Enter') {
                this.props.startLiveChatWithMessage(this.state.value);
            }
        }
    }, {
        key: 'getIframe',
        value: function getIframe() {
            this.props.startLiveChatWithMessage(this.state.value || this.state.BasicEnquiry);
        }
    }, {
        key: 'checkOpenMobileChat',
        value: function checkOpenMobileChat() {
            // handle static page redirects for homepage
            if (this.props.homePage && window.innerWidth < 768 && !this.props.mobilechatview) {
                this.props.history.push('/mobileviewchat?BasicEnquiry=' + this.state.BasicEnquiry);
            } else {
                if (this.state.BasicEnquiry && this.props.homePage) {
                    this.getIframe();
                }
                this.setState({ openBanner: false });
            }
        }
    }, {
        key: 'removeUTM',
        value: function removeUTM() {
            var _this2 = this;

            if (this.props.homePage && window.innerWidth < 768 && !this.props.mobilechatview) {
                this.props.history.push('/mobileviewchat?BasicEnquiry=&force_start=true');
            } else {
                this.setState({
                    utm_term: "",
                    BasicEnquiry: "",
                    value: ""
                }, function () {
                    _this2.getIframe();
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var time = new Date();

            return _react2.default.createElement(
                'div',
                { className: this.props.dataClass + (this.state.utm_term ? " utm_chatbox_right" : "") },
                _react2.default.createElement(
                    'div',
                    { className: 'chat-head' },
                    _react2.default.createElement(
                        'div',
                        { className: 'hd-chat', style: { flex: 1 } },
                        this.props.chatPage ? _react2.default.createElement(
                            'h1',
                            { className: 'text-left header-text-chat' },
                            _react2.default.createElement('span', { className: 'hed-txt-lt' }),
                            'Online Doctor Consultation!'
                        ) : _react2.default.createElement(
                            'p',
                            { className: 'text-left header-text-chat' },
                            _react2.default.createElement('span', { className: 'hed-txt-lt' }),
                            'Online Doctor Consultation!'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'cht-head-rqst-btn', style: { width: 64 } },
                        this.props.showChatBlock ? this.props.is_religare ? _react2.default.createElement(
                            'span',
                            { className: 'ml-2', onClick: this.props.hideStaticChat.bind(this) },
                            _react2.default.createElement('img', { className: 'close-chat', style: { width: 26 }, src: "/assets" + "/img/rel_chatminimize.svg" })
                        ) : _react2.default.createElement(
                            'span',
                            { className: 'ml-2', onClick: this.props.hideStaticChat.bind(this) },
                            _react2.default.createElement('img', { className: 'close-chat', style: { width: 26 }, src: "/assets" + "/img/chatminimize.svg" })
                        ) : ''
                    )
                ),
                this.state.utm_loader ? _react2.default.createElement(
                    'div',
                    { className: 'chat-body' },
                    _react2.default.createElement(
                        'div',
                        { className: 'loader-for-chat-div' },
                        _react2.default.createElement(
                            'div',
                            { className: 'loader-for-chat' },
                            _react2.default.createElement('span', null),
                            _react2.default.createElement('span', null),
                            _react2.default.createElement('span', null),
                            _react2.default.createElement('span', null),
                            _react2.default.createElement('span', null),
                            _react2.default.createElement('span', null)
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'ldng-text' },
                            'Connecting to the doctor...'
                        )
                    )
                ) : _react2.default.createElement(
                    'div',
                    { className: 'chat-body' },
                    _react2.default.createElement(
                        'div',
                        { className: 'onload-chat' },
                        _react2.default.createElement(
                            'div',
                            { className: 'livechat-room' },
                            _react2.default.createElement(
                                'div',
                                { className: 'chatboat-container chatbot_doc' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'wrapper' },
                                    _react2.default.createElement(
                                        'ul',
                                        null,
                                        _react2.default.createElement(
                                            'div',
                                            { id: 'heqmH6j9hqhdvpgWu', className: 'chandrakanta', 'data-username': 'PBee' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'in-mssgs' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'received-msg HS_font' },
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: 'chat-text' },
                                                        'Welcome to Docprime. Briefly describe your symptom or health concern (e.g. I have a fever).',
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'send-chat-time' },
                                                            time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
                                                        )
                                                    )
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { id: 'kPxSEGEDbtSdmPspq', className: 'chandrakanta chatsequential', 'data-username': 'PBee' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'in-mssgs' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'received-msg HS_font' },
                                                    this.state.utm_term ? _react2.default.createElement(
                                                        'p',
                                                        { className: 'chat-text' },
                                                        'Looks like you need help with ' + this.state.BasicEnquiry + '\n                                                                    Start chat for an instant consultation and absolutely free prescription with our doctors.',
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'send-chat-time' },
                                                            time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
                                                        )
                                                    ) : '' /*<p className="chat-text">
                                                           Briefly describe the symptom/health concern worrying you the most (e.g. I have a fever) or simply ask any query.
                                                           <span className="send-chat-time">{time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
                                                           }</span>
                                                           </p>*/

                                                )
                                            )
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'footer footer_doc' },
                                this.state.utm_term ? _react2.default.createElement(
                                    'div',
                                    { className: 'utm-chat-footer' },
                                    _react2.default.createElement(
                                        'button',
                                        { className: 'utm-chat-btn', onClick: this.checkOpenMobileChat.bind(this) },
                                        'Start Chat for "',
                                        this.state.BasicEnquiry,
                                        '"'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'utm-clear-chat', onClick: this.removeUTM.bind(this) },
                                        'OR',
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'utm-sapprater' },
                                            'Start chat for any other health concern?'
                                        )
                                    )
                                ) : _react2.default.createElement(
                                    'div',
                                    { className: 'chat_footer' },
                                    this.state.openBanner && _react2.default.createElement(
                                        'div',
                                        { className: 'toast-tip-icon' },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'toast-close-btn', onClick: function onClick() {
                                                    _this3.setState({ openBanner: false });
                                                } },
                                            _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/close-white.svg" })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'wrng-mssg-pop' },
                                            _react2.default.createElement('img', { style: { height: 24, width: 24 }, src: "/assets" + "/images/warning-icon.png" }),
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                'Not for emergencies! In the case of emergency please visit a hospital.  Chat is only applicable to Indian citizens currently residing in India.'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'write-msg-bx' },
                                        _react2.default.createElement('textarea', { id: 'cstbox', onFocus: this.checkOpenMobileChat.bind(this), className: 'fc-input', placeholder: ' Type your message... ', value: this.state.value, onChange: this.inputHandler.bind(this), onKeyUp: function onKeyUp(e) {
                                                return _this3.handleKeyUp(e);
                                            } })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'send_icon' },
                                        this.props.is_religare ? _react2.default.createElement(
                                            'a',
                                            { href: 'javascript:;', className: 'send-msg-btn', onClick: this.getIframe.bind(this) },
                                            _react2.default.createElement('img', { src: "/assets" + "/img/rel_send.svg", className: 'send-md-icon' })
                                        ) : _react2.default.createElement(
                                            'a',
                                            { href: 'javascript:;', className: 'send-msg-btn', onClick: this.getIframe.bind(this) },
                                            _react2.default.createElement('img', { src: "/assets" + "/img/send.svg", className: 'send-md-icon' })
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                this.props.mobilechatview && this.state.openBanner ? _react2.default.createElement(
                    'div',
                    { className: 'toast-tip-icon' },
                    _react2.default.createElement(
                        'span',
                        { className: 'toast-close-btn', onClick: function onClick() {
                                _this3.setState({ openBanner: false });
                            } },
                        _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/close-white.svg" })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'wrng-mssg-pop' },
                        _react2.default.createElement('img', { style: { height: 24, width: 24 }, src: "/assets" + "/images/warning-icon.png" }),
                        _react2.default.createElement(
                            'span',
                            null,
                            'Not for emergencies! In the case of emergency please visit a hospital.  Chat is only applicable to Indian citizens currently residing in India.'
                        )
                    )
                ) : ""
            );
        }
    }]);

    return ChatStatic;
}(_react2.default.Component);

exports.default = ChatStatic;

/***/ }),

/***/ "./dev/js/components/commons/ChatPanel/cancelPopup.js":
/*!************************************************************!*\
  !*** ./dev/js/components/commons/ChatPanel/cancelPopup.js ***!
  \************************************************************/
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
        closeChat = _ref.closeChat,
        homePage = _ref.homePage;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('div', { className: 'cancel-overlay ' + (homePage ? 'cancl-homepg-popup' : ''), onClick: toggle }),
        _react2.default.createElement(
            'div',
            { className: 'widget cancel-appointment-div payment-popup' },
            _react2.default.createElement(
                'div',
                { className: 'widget-header text-center' },
                _react2.default.createElement(
                    'p',
                    { className: 'fw-500 cancel-appointment-head' },
                    'Are you sure you want to close this chat?'
                )
            ),
            _react2.default.createElement('hr', null),
            _react2.default.createElement(
                'a',
                { href: 'javascript:;' },
                _react2.default.createElement(
                    'div',
                    { className: 'widget-content cancel-content-div', onClick: function onClick() {
                            closeChat();
                        } },
                    _react2.default.createElement(
                        'p',
                        { className: 'fw-500 cancel-appointment-head' },
                        'Yes'
                    ),
                    _react2.default.createElement('p', { className: 'fw-500 cancel-content' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'cancel-right-arrow' },
                        _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/arrow-forward-right.svg" })
                    )
                )
            ),
            _react2.default.createElement('hr', null),
            _react2.default.createElement(
                'a',
                { href: 'javascript:;' },
                _react2.default.createElement(
                    'div',
                    { className: 'widget-content cancel-content-div', onClick: toggle },
                    _react2.default.createElement(
                        'p',
                        { className: 'fw-500 cancel-appointment-head' },
                        'No'
                    ),
                    _react2.default.createElement('p', { className: 'fw-500 cancel-content' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'cancel-right-arrow' },
                        _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/arrow-forward-right.svg" })
                    )
                )
            ),
            _react2.default.createElement('hr', { style: { display: 'none' } })
        )
    );
};

/***/ }),

/***/ "./dev/js/components/commons/ChatPanel/index.js":
/*!******************************************************!*\
  !*** ./dev/js/components/commons/ChatPanel/index.js ***!
  \******************************************************/
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

var _index = __webpack_require__(/*! ../../../actions/index.js */ "./dev/js/actions/index.js");

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");

var _ChatPanel = __webpack_require__(/*! ./ChatPanel */ "./dev/js/components/commons/ChatPanel/ChatPanel.js");

var _ChatPanel2 = _interopRequireDefault(_ChatPanel);

var _RelatedArticles = __webpack_require__(/*! ../article/RelatedArticles */ "./dev/js/components/commons/article/RelatedArticles.js");

var _RelatedArticles2 = _interopRequireDefault(_RelatedArticles);

var _RecentArticles = __webpack_require__(/*! ../article/RecentArticles */ "./dev/js/components/commons/article/RecentArticles.js");

var _RecentArticles2 = _interopRequireDefault(_RecentArticles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChatPanel = function (_React$Component) {
    _inherits(ChatPanel, _React$Component);

    function ChatPanel(props) {
        _classCallCheck(this, ChatPanel);

        var _this = _possibleConstructorReturn(this, (ChatPanel.__proto__ || Object.getPrototypeOf(ChatPanel)).call(this, props));

        _this.state = {
            ssrFlag: _this.props.homePage
        };
        return _this;
    }

    _createClass(ChatPanel, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({ ssrFlag: true });
        }
    }, {
        key: 'render',
        value: function render() {
            // let recentArticles = false
            // if (this.props.articleData && this.props.articleData.recent_articles) {
            //     recentArticles = this.props.articleData.recent_articles
            // }
            // let ct_style = this.props.homePage ? "col-md-5 mb-3" : this.props.colClass ? "col-12 col-md-5 mb-3" :this.props.newChatBtnAds ? '' : "col-md-5 mb-3"
            // if (this.props.homePage && !this.props.chatPage)
            //     ct_style = "col-md-5 mb-3 d-none d-md-block"
            // if(this.props.webChatPage)
            //     ct_style = "col-md-7 mb-3 onln-doc-cnslt "
            /*      
                    if((this.props.USER && this.props.USER.ipd_chat && this.props.USER.ipd_chat.showIpdChat) || (this.props.showHalfScreenChat && !this.props.showDesktopIpd)) {
                        ct_style = ''
                    }*/
            // if(this.props.showHalfScreenChat) {
            //     ct_style = 'cht-hide-hlf-scrn'
            // }
            return _react2.default.createElement(_react2.default.Fragment, null);
        }
    }]);

    return ChatPanel;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    var passedProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var USER = state.USER;
    var DOCTORS = state.DOCTORS;
    var doctor_search_data = {};
    var lab_search_data = {};
    var selectedLocation = state.SEARCH_CRITERIA_OPD.selectedLocation;

    doctor_search_data.selectedCriterias = state.SEARCH_CRITERIA_OPD.selectedCriterias;
    doctor_search_data.selectedLocation = state.SEARCH_CRITERIA_OPD.selectedLocation;
    doctor_search_data.filterCriteria = state.SEARCH_CRITERIA_OPD.filterCriteria;

    lab_search_data.selectedCriterias = state.SEARCH_CRITERIA_LABS.selectedCriterias;
    lab_search_data.selectedLocation = state.SEARCH_CRITERIA_LABS.selectedLocation;
    lab_search_data.filterCriteria = state.SEARCH_CRITERIA_LABS.filterCriteria;

    return _extends({
        USER: USER, DOCTORS: DOCTORS, doctor_search_data: doctor_search_data, lab_search_data: lab_search_data }, passedProps, { selectedLocation: selectedLocation
    });
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        getChatDoctorById: function getChatDoctorById(doctorId, roomId, cb) {
            return dispatch((0, _index.getChatDoctorById)(doctorId, roomId, cb));
        },
        resetFilters: function resetFilters() {
            return dispatch((0, _index.resetFilters)());
        },
        clearExtraTests: function clearExtraTests() {
            return dispatch((0, _index.clearExtraTests)());
        },
        selectLocation: function selectLocation(location) {
            return dispatch((0, _index.selectLocation)(location));
        },
        loginViaChat: function loginViaChat(token) {
            return dispatch((0, _index.loginViaChat)(token));
        },
        setChatRoomId: function setChatRoomId(roomId, extraParams) {
            return dispatch((0, _index.setChatRoomId)(roomId, extraParams));
        },
        startLiveChat: function startLiveChat(started, deleteRoomId) {
            return dispatch((0, _index.startLiveChat)(started, deleteRoomId));
        },
        toggleDiagnosisCriteria: function toggleDiagnosisCriteria(type, test, forceAdd, filters) {
            return dispatch((0, _index.toggleDiagnosisCriteria)(type, test, forceAdd, filters));
        },
        toggleOPDCriteria: function toggleOPDCriteria(type, test, forceAdd, filters) {
            return dispatch((0, _index.toggleOPDCriteria)(type, test, forceAdd, filters));
        },
        unSetCommonUtmTags: function unSetCommonUtmTags(type, tags) {
            return dispatch((0, _index.unSetCommonUtmTags)(type, tags));
        },
        ipdChatView: function ipdChatView(data) {
            return dispatch((0, _index.ipdChatView)(data));
        },
        setPaymentStatus: function setPaymentStatus(status) {
            return dispatch((0, _index.setPaymentStatus)(status));
        },
        sendAgentWhatsupPageURL: function sendAgentWhatsupPageURL(extraParams, cb) {
            return dispatch((0, _index.sendAgentWhatsupPageURL)(extraParams, cb));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactRouter.withRouter)(ChatPanel));

/***/ }),

/***/ "./dev/js/components/commons/Home/bannerCarousel.js":
/*!**********************************************************!*\
  !*** ./dev/js/components/commons/Home/bannerCarousel.js ***!
  \**********************************************************/
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

var BannerCarousel = function (_React$Component) {
    _inherits(BannerCarousel, _React$Component);

    function BannerCarousel(props) {
        _classCallCheck(this, BannerCarousel);

        var _this = _possibleConstructorReturn(this, (BannerCarousel.__proto__ || Object.getPrototypeOf(BannerCarousel)).call(this, props));

        _this.state = {
            index: 0,
            startX: 0,
            startY: 0,
            distX: 0,
            distY: 0,
            intervalFlag: false,
            intervalId: ''
        };
        return _this;
    }

    _createClass(BannerCarousel, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var totalOffers = '';
            var filteredBanners = this.getFilteredBanners();
            if (this.props.sliderLocation && filteredBanners) {
                totalOffers = filteredBanners.length;
                var intervalId = setInterval(function () {
                    var curr_index = _this2.state.index;
                    if (_this2.state.intervalFlag) {
                        curr_index = curr_index + 1;
                        if (curr_index >= totalOffers) {
                            curr_index = 0;
                        }
                    }
                    _this2.setState({ index: curr_index, intervalFlag: true });
                }, 5000);
                this.setState({ intervalId: intervalId });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            try {
                clearInterval(this.state.intervalId);
            } catch (e) {}
        }
    }, {
        key: 'navigateTo',
        value: function navigateTo(offer) {
            var _this3 = this;

            if (offer.url_details && offer.url_details.test_ids) {
                var test = {};

                var filters = { 'priceRange': [offer.url_details.min_fees, offer.url_details.max_fees], 'distanceRange': [offer.url_details.min_distance, offer.url_details.max_distance], 'sort_on': offer.url_details.sort_on || '', 'lab_name': offer.url_details.lab_name || '', 'network_id': offer.url_details.network_id || '' };

                test.type = 'test';
                test.id = [];

                var testIdArray = offer.url_details.test_ids.split(',');
                for (var id in testIdArray) {
                    test.id.push(parseInt(testIdArray[id]));
                }

                this.props.toggleDiagnosisCriteria('test', test, true, filters);
                setTimeout(function () {
                    _this3.props.history.push('/lab/searchresults');
                }, 100);

                var data = {
                    'Category': 'ConsumerApp', 'Action': offer.event_name, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': offer.event_name, 'clickedOn': offer.slider_location
                };
                _gtm2.default.sendEvent({ data: data });
            } else if (offer.url_details && offer.url_details.specializations && offer.url_details.specializations != '') {
                var speciality = {};

                var _filters = { 'priceRange': [offer.url_details.min_fees, offer.url_details.max_fees], 'distanceRange': [offer.url_details.min_distance, offer.url_details.max_distance], 'sort_on': offer.url_details.sort_on || '', 'is_female': offer.url_details.is_female || false, 'is_available': offer.url_details.is_available || false, 'doctor_name': offer.url_details.doctor_name || '', 'hospital_name': offer.url_details.hospital_name || '', 'hospital_id': offer.url_details.hospital_id || '' };

                speciality.type = 'speciality';
                speciality.id = [];

                var specialityIdArray = offer.url_details.specializations.split(',');
                for (var _id in specialityIdArray) {
                    speciality.id.push(parseInt(specialityIdArray[_id]));
                }

                this.props.toggleOPDCriteria('speciality', speciality, true, _filters);
                setTimeout(function () {
                    _this3.props.history.push('/opd/searchresults');
                }, 100);

                var _data = {
                    'Category': 'ConsumerApp', 'Action': offer.event_name, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': offer.event_name, 'clickedOn': offer.slider_location
                };
                _gtm2.default.sendEvent({ data: _data });
            } else if (offer.url_details && offer.url_details.procedure_ids && offer.url_details.procedure_ids != '') {
                var _speciality = {};

                var _filters2 = { 'priceRange': [offer.url_details.min_fees, offer.url_details.max_fees], 'distanceRange': [offer.url_details.min_distance, offer.url_details.max_distance], 'sort_on': offer.url_details.sort_on || '', 'is_female': offer.url_details.is_female || false, 'is_available': offer.url_details.is_available || false, 'doctor_name': offer.url_details.doctor_name || '', 'hospital_name': offer.url_details.hospital_name || '', 'hospital_id': offer.url_details.hospital_id || '' };

                _speciality.type = 'procedures';
                _speciality.id = [];

                var _specialityIdArray = offer.url_details.procedure_ids.split(',');
                for (var _id2 in _specialityIdArray) {
                    _speciality.id.push(parseInt(_specialityIdArray[_id2]));
                }

                this.props.toggleOPDCriteria('procedures', _speciality, true, _filters2);
                setTimeout(function () {
                    _this3.props.history.push('/opd/searchresults');
                }, 100);

                var _data2 = {
                    'Category': 'ConsumerApp', 'Action': offer.event_name, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': offer.event_name, 'clickedOn': offer.slider_location
                };
                _gtm2.default.sendEvent({ data: _data2 });
            } else if (offer.url_details && offer.url_details.procedure_category_ids && offer.url_details.procedure_category_ids != '') {
                var _speciality2 = {};

                var _filters3 = { 'priceRange': [offer.url_details.min_fees, offer.url_details.max_fees], 'distanceRange': [offer.url_details.min_distance, offer.url_details.max_distance], 'sort_on': offer.url_details.sort_on || '', 'is_female': offer.url_details.is_female || false, 'is_available': offer.url_details.is_available || false, 'doctor_name': offer.url_details.doctor_name || '', 'hospital_name': offer.url_details.hospital_name || '', 'hospital_id': offer.url_details.hospital_id || '' };

                _speciality2.type = 'procedures_category';
                _speciality2.id = [];

                var _specialityIdArray2 = offer.url_details.procedure_category_ids.split(',');
                for (var _id3 in _specialityIdArray2) {
                    _speciality2.id.push(parseInt(_specialityIdArray2[_id3]));
                }

                this.props.toggleOPDCriteria('procedures_category', _speciality2, true, _filters3);
                setTimeout(function () {
                    _this3.props.history.push('/opd/searchresults');
                }, 100);

                var _data3 = {
                    'Category': 'ConsumerApp', 'Action': offer.event_name, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': offer.event_name, 'clickedOn': offer.slider_location
                };
                _gtm2.default.sendEvent({ data: _data3 });
            } else if (offer.url_details && offer.url_details.conditions && offer.url_details.conditions != '') {
                var _speciality3 = {};

                var _filters4 = { 'priceRange': [offer.url_details.min_fees, offer.url_details.max_fees], 'distanceRange': [offer.url_details.min_distance, offer.url_details.max_distance], 'sort_on': offer.url_details.sort_on || '', 'is_female': offer.url_details.is_female || false, 'is_available': offer.url_details.is_available || false, 'doctor_name': offer.url_details.doctor_name || '', 'hospital_name': offer.url_details.hospital_name || '', 'hospital_id': offer.url_details.hospital_id || '' };

                _speciality3.type = 'condition';
                _speciality3.id = [];

                var _specialityIdArray3 = offer.url_details.conditions.split(',');
                for (var _id4 in _specialityIdArray3) {
                    _speciality3.id.push(parseInt(_specialityIdArray3[_id4]));
                }

                this.props.toggleOPDCriteria('condition', _speciality3, true, _filters4);
                setTimeout(function () {
                    _this3.props.history.push('/opd/searchresults');
                }, 100);

                var _data4 = {
                    'Category': 'ConsumerApp', 'Action': offer.event_name, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': offer.event_name, 'clickedOn': offer.slider_location
                };
                _gtm2.default.sendEvent({ data: _data4 });
            } else if (offer.url_details && offer.url_details.hospital_id && offer.url_details.hospital_id != '') {
                var _speciality4 = {};

                var _filters5 = { 'priceRange': [offer.url_details.min_fees, offer.url_details.max_fees], 'distanceRange': [offer.url_details.min_distance, offer.url_details.max_distance], 'sort_on': offer.url_details.sort_on || '', 'is_female': offer.url_details.is_female || false, 'is_available': offer.url_details.is_available || false, 'doctor_name': offer.url_details.doctor_name || '', 'hospital_name': offer.url_details.hospital_name || '', 'hospital_id': offer.url_details.hospital_id || '' };

                _speciality4.type = 'speciality';
                _speciality4.id = [];

                this.props.toggleOPDCriteria('speciality', _speciality4, true, _filters5);
                setTimeout(function () {
                    _this3.props.history.push('/opd/searchresults');
                }, 100);

                var _data5 = {
                    'Category': 'ConsumerApp', 'Action': offer.event_name, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': offer.event_name, 'clickedOn': offer.slider_location
                };
                _gtm2.default.sendEvent({ data: _data5 });
            } else if (offer.url) {

                if (offer.url.startsWith('http')) {
                    window.open(offer.url, '_blank');
                } else {
                    this.props.history.push(offer.url);
                }

                var _data6 = {
                    'Category': 'ConsumerApp', 'Action': offer.event_name, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': offer.event_name, 'clickedOn': offer.slider_location
                };
                _gtm2.default.sendEvent({ data: _data6 });
            } else if (offer.id) {
                var _data7 = {
                    'Category': 'ConsumerApp', 'Action': offer.event_name, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': offer.event_name, 'clickedOn': offer.slider_location
                };
                _gtm2.default.sendEvent({ data: _data7 });
                this.props.history.push('terms-conditions/' + offer.id);
            }
        }
    }, {
        key: 'onTouchStart',
        value: function onTouchStart(event) {
            var touchobj = event.changedTouches[0];
            this.state.startX = touchobj.pageX;
            this.state.startY = touchobj.pageY;
            var startTime = new Date().getTime();
        }
    }, {
        key: 'onTouchMove',
        value: function onTouchMove(event) {
            var touchobj = event.changedTouches[0];
            this.state.distX = touchobj.pageX - this.state.startX;
            this.state.distY = touchobj.pageY - this.state.startY;
            if (this.state.startX - touchobj.pageX > 5 || touchobj.pageX - this.state.startX > 5) {
                if (event.preventDefault) event.preventDefault();
                event.returnValue = false;
            }
        }
    }, {
        key: 'onTouchEnd',
        value: function onTouchEnd(event) {
            var startTime = new Date().getTime();
            var touchobj = event.changedTouches[0];
            var totalOffers = '';
            var curr_index = void 0;
            this.state.distX = touchobj.pageX - this.state.startX;
            this.state.distY = touchobj.pageY - this.state.startY;
            var elapsedTime = new Date().getTime() - startTime;
            var filteredBanners = this.getFilteredBanners();
            if (elapsedTime <= 400) {
                if (Math.abs(this.state.distX) >= 50 && Math.abs(this.state.distY) <= 100) {
                    if (this.state.distX < 0) {
                        if (this.props.sliderLocation && filteredBanners) {
                            totalOffers = filteredBanners.length;
                            curr_index = this.state.index;
                            curr_index = curr_index + 1;
                            if (curr_index >= totalOffers) {
                                curr_index = 0;
                            }
                            this.setState({ index: curr_index, intervalFlag: false });
                        }
                    } else {
                        if (this.props.sliderLocation && filteredBanners) {
                            totalOffers = filteredBanners.length;
                            curr_index = this.state.index;
                            curr_index = curr_index - 1;
                            if (curr_index < 0) {
                                curr_index = totalOffers - 1;
                            }
                            this.setState({ index: curr_index, intervalFlag: false });
                        }
                    }
                }
            }
        }
    }, {
        key: 'getFilteredBanners',
        value: function getFilteredBanners() {
            var _this4 = this;

            var filteredOffers = [];
            if (this.props.offerList) {
                filteredOffers = this.props.offerList.filter(function (x) {
                    return x.slider_location === _this4.props.sliderLocation;
                });
                filteredOffers = filteredOffers.filter(function (offer) {
                    var show_banner = false;
                    var filter_show_banner = true;
                    if (offer.url_params_included && Object.values(offer.url_params_included).length) {

                        //Check for filtered values

                        _this4.props.commonSelectedCriterias && _this4.props.commonSelectedCriterias.map(function (data) {
                            if (offer.url_params_included['specializations'] && offer.url_params_included['specializations'].length) {
                                offer.url_params_included['specializations'].map(function (speciality) {
                                    if (speciality == data.id) {
                                        show_banner = true;
                                    }
                                });
                            }
                        });

                        _this4.props.currentSearchedCriterias && _this4.props.currentSearchedCriterias.map(function (data) {
                            if (offer.url_params_included['test_ids'] && offer.url_params_included['test_ids'].length) {
                                offer.url_params_included['test_ids'].map(function (test) {
                                    if (test == data.id) {
                                        show_banner = true;
                                    }
                                });
                            }
                        });

                        //Check Banners for filters

                        _this4.props.filterCriteria && Object.entries(_this4.props.filterCriteria).map(function (data, key) {
                            var type = data[0];
                            if (type == 'priceRange') {
                                if (offer.url_params_included['min_fees'] && offer.url_params_included['min_fees'] < data[1][0]) {
                                    filter_show_banner = false;
                                }
                                if (offer.url_params_included['max_fees'] && offer.url_params_included['max_fees'] > data[1][1]) {
                                    filter_show_banner = false;
                                }
                            } else if (type == 'distanceRange') {
                                if (offer.url_params_included['min_distance'] && offer.url_params_included['min_distance'] < data[1][0]) {
                                    filter_show_banner = false;
                                }
                                if (offer.url_params_included['max_distance'] && offer.url_params_included['max_distance'] > data[1][1]) {
                                    filter_show_banner = false;
                                }
                            } else if (type == 'sort_on') {
                                if (offer.url_params_included['sort_on'] && offer.url_params_included['sort_on'].includes(data[1])) {
                                    filter_show_banner = true;
                                }
                            } else if (type = 'lab_name') {
                                if (offer.url_params_included['lab_name'] && offer.url_params_included['lab_name'].includes(data[1])) {
                                    filter_show_banner = true;
                                }
                            } else if (type = 'network_id') {
                                if (offer.url_params_included['network_id'] && offer.url_params_included['network_id'] != data[1]) {
                                    filter_show_banner = false;
                                }
                            } else if (type = 'is_available') {
                                if (offer.url_params_included['is_available'] && offer.url_params_included['is_available'] == true) {
                                    filter_show_banner = true;
                                }
                            } else if (type = 'is_female') {
                                if (offer.url_params_included['is_female'] && offer.url_params_included['is_female'] == true) {
                                    filter_show_banner = true;
                                }
                            }
                        });
                    } else if (offer.url_params_excluded && Object.values(offer.url_params_excluded).length) {
                        _this4.props.commonSelectedCriterias && _this4.props.commonSelectedCriterias.map(function (data) {
                            if (offer.url_params_excluded['specializations'] && offer.url_params_excluded['specializations'].length) {
                                offer.url_params_excluded['specializations'].map(function (speciality) {
                                    if (speciality == data.id) {
                                        show_banner = false;
                                    } else {
                                        show_banner = true;
                                    }
                                });
                            }
                        });
                        _this4.props.currentSearchedCriterias && _this4.props.currentSearchedCriterias.map(function (data) {
                            if (offer.url_params_excluded['test_ids'] && offer.url_params_excluded['test_ids'].length) {
                                offer.url_params_excluded['test_ids'].map(function (test) {
                                    if (test == data.id) {
                                        show_banner = false;
                                    } else {
                                        show_banner = true;
                                    }
                                });
                            }
                        });
                        _this4.props.filterCriteria && Object.entries(_this4.props.filterCriteria).map(function (data, key) {
                            var type = data[0];
                            if (type == 'priceRange') {
                                if (offer.url_params_excluded['min_fees'] && offer.url_params_excluded['min_fees'] >= data[1][0]) {
                                    filter_show_banner = false;
                                }
                                if (offer.url_params_excluded['max_fees'] && offer.url_params_excluded['max_fees'] <= data[1][1]) {
                                    filter_show_banner = false;
                                }
                            } else if (type == 'distanceRange') {
                                if (offer.url_params_excluded['min_distance'] && offer.url_params_excluded['min_distance'] >= data[1][0]) {
                                    filter_show_banner = false;
                                }
                                if (offer.url_params_excluded['max_distance'] && offer.url_params_excluded['max_distance'] <= data[1][1]) {
                                    filter_show_banner = false;
                                }
                            } else if (type == 'sort_on') {
                                if (offer.url_params_excluded['sort_on'] && offer.url_params_excluded['sort_on'].includes(data[1])) {
                                    filter_show_banner = false;
                                }
                            } else if (type = 'lab_name') {
                                if (offer.url_params_excluded['lab_name'] && offer.url_params_excluded['lab_name'].includes(data[1])) {
                                    filter_show_banner = false;
                                }
                            } else if (type = 'network_id') {
                                if (offer.url_params_excluded['network_id'] && offer.url_params_excluded['network_id'] == data[1]) {
                                    filter_show_banner = false;
                                }
                            } else if (type = 'is_available') {
                                if (offer.url_params_excluded['is_available'] && offer.url_params_excluded['is_available'] == true) {
                                    filter_show_banner = false;
                                }
                            } else if (type = 'is_female') {
                                if (offer.url_params_excluded['is_female'] && offer.url_params_excluded['is_female'] == true) {
                                    filter_show_banner = false;
                                }
                            }
                        });
                    } else {
                        show_banner = true;
                        filter_show_banner = true;
                    }
                    return show_banner && filter_show_banner;
                });
            }
            return filteredOffers;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            var filteredBanners = this.getFilteredBanners();
            var offerVisible = filteredBanners[this.state.index];

            return _react2.default.createElement(
                'div',
                { className: this.props.sliderLocation == 'home_page' || this.props.sliderLocation == 'online_consultation' || this.props.sliderLocation == 'medicine_detail_page' || filteredBanners && filteredBanners.length == 1 || !filteredBanners ? '' : 'banner-margin-tap' },
                this.props.sliderLocation === "medicine_detail_page" ? _react2.default.createElement(
                    'div',
                    { className: 'medic-img-slider' },
                    filteredBanners && filteredBanners.length ? filteredBanners.map(function (offer, i) {
                        return _react2.default.createElement('img', { key: i, src: offer.image, onClick: function onClick() {
                                return _this5.navigateTo(offer);
                            }, style: { cursor: 'pointer' } });
                    }) : ''
                ) : this.props.sliderLocation == 'home_page' ? _react2.default.createElement(
                    'div',
                    { className: 'slider-container bnnrForCovivd' },
                    filteredBanners && filteredBanners.length ? filteredBanners.map(function (offer, i) {
                        return _react2.default.createElement(
                            'a',
                            { key: offer.id },
                            _react2.default.createElement('img', { key: i, src: offer.image, onClick: function onClick() {
                                    return _this5.navigateTo(offer);
                                }, style: { cursor: 'pointer' }, alt: 'bannerLogoDocprime' })
                        );
                    }) : ''
                ) : _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: this.props.hideClass ? 'banner-carousel-div  mrb-10 d-none ' + this.props.hideClass : 'banner-carousel-div mrb-10 d-none d-md-block new-home-banner' },
                        offerVisible && Object.values(offerVisible).length ? _react2.default.createElement('img', { src: offerVisible.image, onTouchStart: this.onTouchStart.bind(this), onTouchMove: this.onTouchMove.bind(this), onTouchEnd: this.onTouchEnd.bind(this), onClick: function onClick() {
                                return _this5.navigateTo(offerVisible);
                            }, style: { cursor: 'pointer' } }) : '',
                        filteredBanners && filteredBanners.length > 1 ? _react2.default.createElement(
                            'div',
                            { className: 'carousel-indicators mrt-10' },
                            filteredBanners && filteredBanners.map(function (offer, i) {
                                return _react2.default.createElement('span', { key: i, onClick: function onClick() {
                                        return _this5.setState({ index: i });
                                    }, className: _this5.state.index == i ? "indicator-selected" : '' });
                            })
                        ) : ''
                    ),
                    this.props.chatPage ? '' : _react2.default.createElement(
                        'div',
                        { className: 'd-md-none' },
                        filteredBanners && filteredBanners.length ? _react2.default.createElement(
                            'div',
                            { className: (this.props.ipd ? 'ipd-banner-mbl' : this.props.sliderLocation == 'home_page' || this.props.sliderLocation == 'online_consultation' ? 'home-banner-pos' : 'inner-banner-pos') + ' ' + (filteredBanners.length == 1 ? 'banner-home-scrollable mrt-20 mrb-20 ' + (this.props.sliderLocation == 'home_page' ? 'single-banner-div' : '') : 'banner-home-scrollable mrt-20 mrb-20 pd-lt-15') },
                            filteredBanners.map(function (banner, index) {
                                return _react2.default.createElement('img', { key: index, src: banner.image, onClick: function onClick() {
                                        return _this5.navigateTo(banner);
                                    }, style: { cursor: 'pointer' }, className: filteredBanners.length == 1 ? 'sngl-banner' : 'mltpl-banner', loading: 'lazy' });
                            })
                        ) : ''
                    )
                )
            );
        }
    }]);

    return BannerCarousel;
}(_react2.default.Component);

exports.default = BannerCarousel;

/***/ }),

/***/ "./dev/js/components/commons/article/RecentArticles.js":
/*!*************************************************************!*\
  !*** ./dev/js/components/commons/article/RecentArticles.js ***!
  \*************************************************************/
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

var RecentArticles = function (_React$Component) {
    _inherits(RecentArticles, _React$Component);

    function RecentArticles(props) {
        _classCallCheck(this, RecentArticles);

        return _possibleConstructorReturn(this, (RecentArticles.__proto__ || Object.getPrototypeOf(RecentArticles)).call(this, props));
    }

    _createClass(RecentArticles, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "related-article-sub" },
                _react2.default.createElement(
                    "div",
                    { className: "related-article" },
                    _react2.default.createElement(
                        "p",
                        { className: "fw-500 mrb-10" },
                        this.props.recentArticleTitle
                    ),
                    _react2.default.createElement(
                        "ul",
                        { className: "related-articles-list" },
                        this.props.recentArticlesItems.map(function (article, i) {
                            if (article.url.startsWith("http") || article.url.startsWith("/")) {
                                return _react2.default.createElement(
                                    "a",
                                    { href: article.url, key: i },
                                    _react2.default.createElement(
                                        "li",
                                        { className: "mrb-5" },
                                        article.title
                                    )
                                );
                            } else {
                                return _react2.default.createElement(
                                    "a",
                                    { href: '/' + article.url, key: i },
                                    _react2.default.createElement(
                                        "li",
                                        { className: "mrb-5" },
                                        article.title
                                    )
                                );
                            }
                        })
                    )
                )
            );
        }
    }]);

    return RecentArticles;
}(_react2.default.Component);

exports.default = RecentArticles;

/***/ }),

/***/ "./dev/js/components/commons/article/RelatedArticles.js":
/*!**************************************************************!*\
  !*** ./dev/js/components/commons/article/RelatedArticles.js ***!
  \**************************************************************/
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

var RelatedArticles = function (_React$Component) {
    _inherits(RelatedArticles, _React$Component);

    function RelatedArticles(props) {
        _classCallCheck(this, RelatedArticles);

        return _possibleConstructorReturn(this, (RelatedArticles.__proto__ || Object.getPrototypeOf(RelatedArticles)).call(this, props));
    }

    _createClass(RelatedArticles, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "related-article" },
                _react2.default.createElement(
                    "p",
                    { className: "fw-500 mrb-10" },
                    this.props.linkedArticle.content_box_title
                ),
                _react2.default.createElement(
                    "ul",
                    { className: "related-articles-list" },
                    this.props.linkedArticle.urls.map(function (article, i) {
                        if (article.url.startsWith("http") || article.url.startsWith("/")) {
                            return _react2.default.createElement(
                                "a",
                                { href: article.url, key: i },
                                _react2.default.createElement(
                                    "li",
                                    { className: "mrb-5" },
                                    article.title
                                )
                            );
                        } else {
                            return _react2.default.createElement(
                                "a",
                                { href: '/' + article.url, key: i },
                                _react2.default.createElement(
                                    "li",
                                    { className: "mrb-5" },
                                    article.title
                                )
                            );
                        }
                    })
                )
            );
        }
    }]);

    return RelatedArticles;
}(_react2.default.Component);

exports.default = RelatedArticles;

/***/ }),

/***/ "./dev/js/components/commons/article/TableOfContent.js":
/*!*************************************************************!*\
  !*** ./dev/js/components/commons/article/TableOfContent.js ***!
  \*************************************************************/
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

var TableOfContent = function (_React$Component) {
    _inherits(TableOfContent, _React$Component);

    function TableOfContent(props) {
        _classCallCheck(this, TableOfContent);

        return _possibleConstructorReturn(this, (TableOfContent.__proto__ || Object.getPrototypeOf(TableOfContent)).call(this, props));
    }

    _createClass(TableOfContent, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props$searchTestInfo = this.props.searchTestInfoData,
                about_test = _props$searchTestInfo.about_test,
                why_get_tested = _props$searchTestInfo.why_get_tested,
                test_may_include = _props$searchTestInfo.test_may_include,
                this_package_will_include = _props$searchTestInfo.this_package_will_include,
                preparations = _props$searchTestInfo.preparations,
                faqs = _props$searchTestInfo.faqs;

            var resp_test_id = this.props.resp_test_id;

            return _react2.default.createElement(
                "div",
                { className: "widget table-of-content" },
                _react2.default.createElement(
                    "div",
                    { className: "widget-content" },
                    _react2.default.createElement(
                        "p",
                        { className: "fw-500 mrb-10" },
                        "Table of Content"
                    ),
                    _react2.default.createElement(
                        "ul",
                        { className: "related-articles-list" },
                        about_test && about_test.value && about_test.title ? _react2.default.createElement(
                            "a",
                            { href: "#about-test", onClick: function onClick() {
                                    return _this2.props.updateTabsValues('about_test_' + resp_test_id);
                                } },
                            _react2.default.createElement(
                                "li",
                                { className: "mrb-5" },
                                about_test.title
                            )
                        ) : '',
                        why_get_tested && why_get_tested.value && why_get_tested.title ? _react2.default.createElement(
                            "a",
                            { href: "#why-get-tested", onClick: function onClick() {
                                    return _this2.props.updateTabsValues('why_get_tested_' + resp_test_id);
                                } },
                            _react2.default.createElement(
                                "li",
                                { className: "mrb-5" },
                                why_get_tested.title
                            )
                        ) : '',
                        test_may_include && test_may_include.title && test_may_include.value && test_may_include.value.length > 0 ? _react2.default.createElement(
                            "a",
                            { href: "#test-includes", onClick: function onClick() {
                                    return _this2.props.updateTabsValues('test_include_' + resp_test_id);
                                } },
                            _react2.default.createElement(
                                "li",
                                { className: "mrb-5" },
                                test_may_include.title
                            )
                        ) : '',
                        this_package_will_include && this_package_will_include.title && this_package_will_include.tests && this_package_will_include.tests.length > 0 ? _react2.default.createElement(
                            "a",
                            { href: "#package-includes", onClick: function onClick() {
                                    return _this2.props.updateTabsValues('test_include_' + resp_test_id);
                                } },
                            _react2.default.createElement(
                                "li",
                                { className: "mrb-5" },
                                this_package_will_include.title
                            )
                        ) : '',
                        preparations && preparations.title && preparations.value ? _react2.default.createElement(
                            "a",
                            { href: "#test-preparations", onClick: function onClick() {
                                    return _this2.props.updateTabsValues('test_preparations_' + resp_test_id);
                                } },
                            _react2.default.createElement(
                                "li",
                                { className: "mrb-5" },
                                preparations.title
                            )
                        ) : '',
                        faqs && faqs.length > 0 && faqs[0].title ? _react2.default.createElement(
                            "a",
                            { href: "#test-faq", onClick: function onClick() {
                                    return _this2.props.updateTabsValues('test_faq_' + resp_test_id);
                                } },
                            _react2.default.createElement(
                                "li",
                                { className: "mrb-5" },
                                faqs[0].title
                            )
                        ) : ''
                    )
                )
            );
        }
    }]);

    return TableOfContent;
}(_react2.default.Component);

exports.default = TableOfContent;

/***/ }),

/***/ "./dev/js/components/commons/initialsPicture/InitialsPicture.js":
/*!**********************************************************************!*\
  !*** ./dev/js/components/commons/initialsPicture/InitialsPicture.js ***!
  \**********************************************************************/
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

var COLOR_CODES = ['#ef9a9a', '#f48fb1', '#ce93d8', '#b39ddb', '#e74c3c', '#9fa8da', '#90caf9', '#81d4fa', '#80deea', '#80cbc4', '#a5d6a7', '#c5e1a5', '#e6ee9c', '#fff59d', '#ffe082', '#ffcc80', '#ffab91', '#bcaaa4'];

var InitialsPicture = function (_React$Component) {
    _inherits(InitialsPicture, _React$Component);

    function InitialsPicture(props) {
        _classCallCheck(this, InitialsPicture);

        var _this = _possibleConstructorReturn(this, (InitialsPicture.__proto__ || Object.getPrototypeOf(InitialsPicture)).call(this, props));

        _this.state = {
            bgColor: COLOR_CODES[_this.sumChars(_this.props.name) % COLOR_CODES.length]
        };
        return _this;
    }

    _createClass(InitialsPicture, [{
        key: 'sumChars',
        value: function sumChars(str) {
            var sum = 0;
            for (var i = 0; i < str.length; i++) {
                sum += str.charCodeAt(i);
            }

            return sum;
        }
    }, {
        key: 'render',
        value: function render() {
            var style = this.props.style || {};

            var initial = "U";
            var name = this.props.name;
            if (name && name.length) {
                name = name.split(' ');
                if (name[0]) {
                    initial = name[0][0];
                }
                if (name[1]) {
                    initial += name[1][0];
                }
            }
            if (this.props.has_image) {
                return _react2.default.createElement(
                    'div',
                    { style: style, onClick: this.props.onClick || function () {} },
                    this.props.children
                );
            } else {
                style['color'] = this.state.bgColor;
                return _react2.default.createElement(
                    'div',
                    { className: this.props.className, style: style, onClick: this.props.onClick || function () {} },
                    _react2.default.createElement(
                        'span',
                        null,
                        initial.toUpperCase()
                    ),
                    this.props.notificationNew ? _react2.default.createElement('div', { style: { borderRadius: '50%', backgroundColor: 'red', position: 'absolute', right: '-2px', top: '-2px', width: '8px', height: '8px' } }) : ''
                );
            }
        }
    }]);

    return InitialsPicture;
}(_react2.default.Component);

exports.default = InitialsPicture;

/***/ }),

/***/ "./dev/js/components/commons/initialsPicture/index.js":
/*!************************************************************!*\
  !*** ./dev/js/components/commons/initialsPicture/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _InitialsPicture = __webpack_require__(/*! ./InitialsPicture */ "./dev/js/components/commons/initialsPicture/InitialsPicture.js");

var _InitialsPicture2 = _interopRequireDefault(_InitialsPicture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _InitialsPicture2.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0NoYXRQYW5lbC9DaGF0UGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9DaGF0UGFuZWwvQ2hhdFJlZnVuZFJlYXNvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9DaGF0UGFuZWwvQ2hhdFN0YXRpY1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9DaGF0UGFuZWwvY2FuY2VsUG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9DaGF0UGFuZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Ib21lL2Jhbm5lckNhcm91c2VsLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvYXJ0aWNsZS9SZWNlbnRBcnRpY2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2FydGljbGUvUmVsYXRlZEFydGljbGVzLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvYXJ0aWNsZS9UYWJsZU9mQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2luaXRpYWxzUGljdHVyZS9Jbml0aWFsc1BpY3R1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9pbml0aWFsc1BpY3R1cmUvaW5kZXguanMiXSwibmFtZXMiOlsicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiQ2hhdFBhbmVsIiwicHJvcHMiLCJzZW5kUGFnZVVybCIsImRhdGEiLCJjYWxsYmFjayIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzdWJzdHJpbmciLCJzZWFyY2giLCJyZXBsYWNlIiwidGVtcGxhdGUiLCJtc2dUZW1wbGF0ZSIsInNlbmRBZ2VudFdoYXRzdXBQYWdlVVJMIiwidGhlbiIsInJlc3AiLCJzZXRUaW1lb3V0IiwiU25hY2tCYXIiLCJzaG93IiwicG9zIiwidGV4dCIsImNhdGNoIiwiZSIsInBhcnNlZEhyZWYiLCJpc190aHlyb2NhcmUiLCJwYXJzZSIsInV0bV9zb3VyY2UiLCJpbmNsdWRlcyIsInN0YXRlIiwic2VsZWN0ZWRSb29tIiwidG9rZW4iLCJzeW1wdG9tcyIsInJvb21JZCIsInNob3dDYW5jZWwiLCJzaG93Q2hhdEJsb2NrIiwiYWRkaXRpb25DbGFzc2VzIiwiaGlkZUlmcmFtZSIsImlmcmFtZUxvYWRpbmciLCJzaG93U3RhdGljVmlldyIsImluaXRpYWxNZXNzYWdlIiwiY2FsbFRpbWVvdXQiLCJvcGVuUmVmdW5kUG9wdXAiLCJvblJlZklwZCIsInNlbGVjdGVkTG9jYXRpb24iLCJzZW5kTG9jYXRpb25Ob3RpZmljYXRpb24iLCJTVE9SQUdFIiwiZ2V0QXV0aFRva2VuIiwic2V0U3RhdGUiLCJtb2JpbGVjaGF0dmlldyIsIlVTRVIiLCJsaXZlQ2hhdFN0YXJ0ZWQiLCJpcGRfY2hhdCIsInNob3dJcGRDaGF0IiwiaWZyYW1lIiwicmVmcyIsImNoYXRfZnJhbWUiLCJvbmxvYWQiLCJpZnJhbWUxIiwiY2hhdF9mcmFtZTEiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnREYXRhIiwiZXZlbnQiLCJyaWQiLCJhbmFseXRpY0RhdGEiLCJhZ2VudFR5cGUiLCJHVE0iLCJnZXRVc2VySWQiLCJlbXBsb3llZUlkIiwic2VuZEV2ZW50Iiwic2VhcmNoRGF0YSIsInNlbGVjdGVkQ3JpdGVyaWFzIiwiZG9jdG9yX3NlYXJjaF9kYXRhIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImZpbHRlckRhdGEiLCJmaWx0ZXJDcml0ZXJpYSIsImhpc3RvcnkiLCJwdXNoIiwibGFiX3NlYXJjaF9kYXRhIiwiZXh0cmFQYXJhbXMiLCJwYXltZW50Iiwic2V0Q2hhdFJvb21JZCIsInNlbmRQYXltZW50U3RhdHVzRXZlbnQiLCJzZW5kVXNlckRldGFpbHMiLCJsb2dpblZpYUNoYXQiLCJidWlsZFVybCIsInRoYXQiLCJpcGRDaGF0VmlldyIsInVuU2V0Q29tbW9uVXRtVGFncyIsInR5cGUiLCJ1cmwiLCJpZHMiLCJzaG93RGlzYWJsZWRQYXltZW50IiwibWVzc2FnZSIsImhvbWVQYWdlIiwiaW5uZXJXaWR0aCIsImJpbmQiLCJwYXltZW50X3N0YXR1cyIsImRpc3BhdGNoQ3VzdG9tRXZlbnQiLCJ1bmRlZmluZWQiLCJnZW9tZXRyeSIsImxvY2FsaXR5IiwiY2l0eSIsIm5hbWUiLCJhZGRyZXNzIiwiZm9ybWF0dGVkX2FkZHJlc3MiLCJ1c2VyIiwicHJvZmlsZXMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwic2VsZWN0ZWRQcm9maWxlIiwiaXNfaW5zdXJlZCIsImV2ZW50TmFtZSIsIkV2ZW50IiwiY29udGVudFdpbmRvdyIsImRpc3BhdGNoRXZlbnQiLCJwb3N0TWVzc2FnZSIsImNhbGwiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImdvIiwic3RhcnRMaXZlQ2hhdCIsImFydGljbGVEYXRhIiwic2VhcmNoVGVzdEluZm9EYXRhIiwibmV3Q2hhdEJ0biIsIm5ld0NoYXRCdG5BZHMiLCJib29raW5nc0dBIiwidGFyZ2V0IiwiY29udGVudERvY3VtZW50IiwiaHJlZiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImlzRW5hYmxlIiwidG9nZ2xlUmVmdW5kUG9wdXAiLCJyZWFzb24iLCJzZXRQYXltZW50U3RhdHVzIiwiZG9jdG9yRGF0YSIsImNoYXRSb29tSWRzIiwiY2hhdERvY3RvcnMiLCJzeW1wdG9tc191cmkiLCJyZWR1Y2UiLCJzdHIiLCJjdXJyIiwiaWZyYW1lX3VybCIsIkNPTkZJRyIsIkNIQVRfVVJMIiwiZnJvbV9hcHAiLCJkZXZpY2VfaWQiLCJib3RBZ2VudCIsImlzX3JlbGlnYXJlIiwidmlzaXRpZCIsImNoYXRCdG5Db250ZW50MSIsImNoYXRCdG5Db250ZW50MiIsInRpdGxlIiwic3BsaXQiLCJmb250U2l6ZSIsIm1hcmdpblJpZ2h0Iiwid2lkdGgiLCJ2ZXJ0aWNhbEFsaWduIiwiQVNTRVRTX0JBU0VfVVJMIiwicmVjZW50QXJ0aWNsZXMiLCJyZWNlbnRfYXJ0aWNsZXMiLCJpcGRGb3JtIiwicGFyYW1zIiwiYm9va2luZ19pZCIsIm9yZGVyX2lkIiwicGF5bWVudF9kaXNhYmxlIiwidXRtX2NhbXBhaWduIiwiY29uc3VsdGF0aW9uX2lkIiwiaXNfcGF5bWVudF9mb3JfY3VycmVudF9yb29tIiwic2hvd19kaXNhYmxlZF9yZWZ1bmRfYnV0dG9uIiwiY3VycmVudFJvb21JZCIsImNoYXRQYXltZW50U3RhdHVzIiwibW9iaWxlVmVyaWZpY2F0aW9uRG9uZSIsInNob3dIYWxmU2NyZWVuQ2hhdCIsInNob3dEZXNrdG9wSXBkIiwiaXNBZ2VudCIsInRvZ2dsZUNhbmNlbCIsImNsb3NlQ2hhdCIsIm1hcmdpbkJvdHRvbSIsImNoYXRQYWdlIiwib2ZmZXJMaXN0IiwiZmlsdGVyIiwieCIsInNsaWRlcl9sb2NhdGlvbiIsInN1Ym1pdFJlZnVuZFJlYXNvbnMiLCJub0NoYXRCdXR0b24iLCJjaGF0QnRuQ2xpY2siLCJ1cGRhdGVUYWJzVmFsdWVzIiwicmVzcF90ZXN0X2lkIiwic3RhcnRMaXZlQ2hhdFdpdGhNZXNzYWdlIiwiaGlkZVN0YXRpY0NoYXQiLCJmbGV4IiwicmVmdW5kQ2xpY2tlZCIsImNsb3NlQ2hhdENsaWNrIiwib25JZnJhbWVMb2FkIiwiUmVhY3QiLCJDb21wb25lbnQiLCJDaGF0UmVmdW5kVmlldyIsInJlZnVuZFJlYXNvbiIsInNob3dFcnJvciIsInN1Ym1pdFJlZnVuZCIsInRvZ2dsZVJlZnVuZCIsInBhZGRpbmciLCJzZWxlY3RSZWFzb24iLCJzdWJtaXQiLCJDaGF0U3RhdGljIiwicGFyc2VkIiwidmFsdWUiLCJvcGVuQmFubmVyIiwidXRtX3Rlcm0iLCJCYXNpY0VucXVpcnkiLCJ1dG1fbG9hZGVyIiwiZm9yY2Vfc3RhcnQiLCJnZXRJZnJhbWUiLCJrZXkiLCJ0aW1lIiwiRGF0ZSIsImRhdGFDbGFzcyIsInRvTG9jYWxlU3RyaW5nIiwiaG91ciIsIm1pbnV0ZSIsImhvdXIxMiIsImNoZWNrT3Blbk1vYmlsZUNoYXQiLCJyZW1vdmVVVE0iLCJoZWlnaHQiLCJpbnB1dEhhbmRsZXIiLCJoYW5kbGVLZXlVcCIsInRvZ2dsZSIsImRpc3BsYXkiLCJzc3JGbGFnIiwibWFwU3RhdGVUb1Byb3BzIiwicGFzc2VkUHJvcHMiLCJET0NUT1JTIiwiU0VBUkNIX0NSSVRFUklBX09QRCIsIlNFQVJDSF9DUklURVJJQV9MQUJTIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJnZXRDaGF0RG9jdG9yQnlJZCIsImRvY3RvcklkIiwiY2IiLCJyZXNldEZpbHRlcnMiLCJjbGVhckV4dHJhVGVzdHMiLCJzZWxlY3RMb2NhdGlvbiIsInN0YXJ0ZWQiLCJkZWxldGVSb29tSWQiLCJ0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSIsInRlc3QiLCJmb3JjZUFkZCIsImZpbHRlcnMiLCJ0b2dnbGVPUERDcml0ZXJpYSIsInRhZ3MiLCJzdGF0dXMiLCJCYW5uZXJDYXJvdXNlbCIsImluZGV4Iiwic3RhcnRYIiwic3RhcnRZIiwiZGlzdFgiLCJkaXN0WSIsImludGVydmFsRmxhZyIsImludGVydmFsSWQiLCJ0b3RhbE9mZmVycyIsImZpbHRlcmVkQmFubmVycyIsImdldEZpbHRlcmVkQmFubmVycyIsInNsaWRlckxvY2F0aW9uIiwic2V0SW50ZXJ2YWwiLCJjdXJyX2luZGV4IiwiY2xlYXJJbnRlcnZhbCIsIm9mZmVyIiwidXJsX2RldGFpbHMiLCJ0ZXN0X2lkcyIsIm1pbl9mZWVzIiwibWF4X2ZlZXMiLCJtaW5fZGlzdGFuY2UiLCJtYXhfZGlzdGFuY2UiLCJzb3J0X29uIiwibGFiX25hbWUiLCJuZXR3b3JrX2lkIiwiaWQiLCJ0ZXN0SWRBcnJheSIsInBhcnNlSW50IiwiZXZlbnRfbmFtZSIsInNwZWNpYWxpemF0aW9ucyIsInNwZWNpYWxpdHkiLCJpc19mZW1hbGUiLCJpc19hdmFpbGFibGUiLCJkb2N0b3JfbmFtZSIsImhvc3BpdGFsX25hbWUiLCJob3NwaXRhbF9pZCIsInNwZWNpYWxpdHlJZEFycmF5IiwicHJvY2VkdXJlX2lkcyIsInByb2NlZHVyZV9jYXRlZ29yeV9pZHMiLCJjb25kaXRpb25zIiwic3RhcnRzV2l0aCIsIm9wZW4iLCJ0b3VjaG9iaiIsImNoYW5nZWRUb3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsInN0YXJ0VGltZSIsImdldFRpbWUiLCJyZXR1cm5WYWx1ZSIsImVsYXBzZWRUaW1lIiwiTWF0aCIsImFicyIsImZpbHRlcmVkT2ZmZXJzIiwic2hvd19iYW5uZXIiLCJmaWx0ZXJfc2hvd19iYW5uZXIiLCJ1cmxfcGFyYW1zX2luY2x1ZGVkIiwidmFsdWVzIiwiY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMiLCJtYXAiLCJjdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMiLCJlbnRyaWVzIiwidXJsX3BhcmFtc19leGNsdWRlZCIsIm9mZmVyVmlzaWJsZSIsImkiLCJpbWFnZSIsIm5hdmlnYXRlVG8iLCJjdXJzb3IiLCJoaWRlQ2xhc3MiLCJvblRvdWNoU3RhcnQiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hFbmQiLCJpcGQiLCJiYW5uZXIiLCJSZWNlbnRBcnRpY2xlcyIsInJlY2VudEFydGljbGVUaXRsZSIsInJlY2VudEFydGljbGVzSXRlbXMiLCJhcnRpY2xlIiwiUmVsYXRlZEFydGljbGVzIiwibGlua2VkQXJ0aWNsZSIsImNvbnRlbnRfYm94X3RpdGxlIiwidXJscyIsIlRhYmxlT2ZDb250ZW50IiwiYWJvdXRfdGVzdCIsIndoeV9nZXRfdGVzdGVkIiwidGVzdF9tYXlfaW5jbHVkZSIsInRoaXNfcGFja2FnZV93aWxsX2luY2x1ZGUiLCJwcmVwYXJhdGlvbnMiLCJmYXFzIiwidGVzdHMiLCJDT0xPUl9DT0RFUyIsIkluaXRpYWxzUGljdHVyZSIsImJnQ29sb3IiLCJzdW1DaGFycyIsInN1bSIsImNoYXJDb2RlQXQiLCJzdHlsZSIsImluaXRpYWwiLCJoYXNfaW1hZ2UiLCJvbkNsaWNrIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJ0b1VwcGVyQ2FzZSIsIm5vdGlmaWNhdGlvbk5ldyIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsInBvc2l0aW9uIiwicmlnaHQiLCJ0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRkEsSUFBTUEsY0FBY0MsbUJBQU9BLENBQUMsMERBQVIsQ0FBcEI7O0lBSU1DLFM7OztBQUNGLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEhBQ1RBLEtBRFM7O0FBQUEsY0FpZ0JuQkMsV0FqZ0JtQixHQWlnQkwsWUFBTTtBQUNoQixnQkFBSUMsT0FBTztBQUNQQywwQkFBVUMsT0FBT0MsUUFBUCxDQUFnQkMsUUFBaEIsQ0FBeUJDLFNBQXpCLENBQW1DLENBQW5DLElBQXdDSCxPQUFPQyxRQUFQLENBQWdCRyxNQUFoQixDQUF1QkMsT0FBdkIsQ0FBK0IsSUFBL0IsRUFBb0MsR0FBcEMsQ0FEM0M7QUFFUEMsMEJBQVUsTUFBS1YsS0FBTCxDQUFXVyxXQUFYLEdBQXlCLE1BQUtYLEtBQUwsQ0FBV1csV0FBcEMsR0FBa0Q7QUFGckQsYUFBWDtBQUlBLGtCQUFLWCxLQUFMLENBQVdZLHVCQUFYLENBQW1DVixJQUFuQyxFQUF5Q1csSUFBekMsQ0FBOEMsVUFBQ0MsSUFBRCxFQUFVO0FBQ3BEQywyQkFBVyxZQUFNO0FBQ2JDLDJDQUFTQyxJQUFULENBQWMsRUFBRUMsS0FBSyxlQUFQLEVBQXdCQyxNQUFNLG1CQUE5QixFQUFkO0FBQ0gsaUJBRkQsRUFFRyxHQUZIO0FBR0gsYUFKRCxFQUlHQyxLQUpILENBSVMsVUFBQ0MsQ0FBRCxFQUFPO0FB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SzlWLEtBQUwsQ0FBV2lXLE9BQVgsSUFBdUIsWUFBTSxDQUFHLENBQTVEO0FBQWdFLHlCQUFLalcsS0FBTCxDQUFXa1c7QUFBM0UsaUJBQVA7QUFDSCxhQUZELE1BRU87QUFDSEosc0JBQU0sT0FBTixJQUFpQixLQUFLblUsS0FBTCxDQUFXK1QsT0FBNUI7QUFDQSx1QkFDSTtBQUFBO0FBQUEsc0JBQUssV0FBVyxLQUFLMVYsS0FBTCxDQUFXbVcsU0FBM0IsRUFBc0MsT0FBT0wsS0FBN0MsRUFBb0QsU0FBUyxLQUFLOVYsS0FBTCxDQUFXaVcsT0FBWCxJQUF1QixZQUFNLENBQUcsQ0FBN0Y7QUFDSTtBQUFBO0FBQUE7QUFBT0YsZ0NBQVFLLFdBQVI7QUFBUCxxQkFESjtBQUdRLHlCQUFLcFcsS0FBTCxDQUFXcVcsZUFBWCxHQUNJLHVDQUFLLE9BQU8sRUFBRUMsY0FBYyxLQUFoQixFQUF1QkMsaUJBQWlCLEtBQXhDLEVBQStDQyxVQUFVLFVBQXpELEVBQXFFQyxPQUFPLE1BQTVFLEVBQW9GQyxLQUFLLE1BQXpGLEVBQWlHM00sT0FBTyxLQUF4RyxFQUErR29FLFFBQVEsS0FBdkgsRUFBWixHQURKLEdBQ3lKO0FBSmpLLGlCQURKO0FBU0g7QUFDSjs7OztFQTVDeUI3QixnQkFBTUMsUzs7a0JBK0NyQmtKLGU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RFZjs7Ozs7O2tCQUVlQSx5QiIsImZpbGUiOiIwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uLy4uL2NvbmZpZydcblxuaW1wb3J0IEluaXRpYWxzUGljdHVyZSBmcm9tICcuLi8uLi9jb21tb25zL2luaXRpYWxzUGljdHVyZSdcbmltcG9ydCBDYW5jZWxQb3B1cCBmcm9tICcuL2NhbmNlbFBvcHVwJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcbmltcG9ydCBDaGF0U3RhdGljVmlldyBmcm9tICcuL0NoYXRTdGF0aWNWaWV3J1xuaW1wb3J0IFJlbGF0ZWRBcnRpY2xlcyBmcm9tICcuLi9hcnRpY2xlL1JlbGF0ZWRBcnRpY2xlcydcbmltcG9ydCBSZWNlbnRBcnRpY2xlcyBmcm9tICcuLi9hcnRpY2xlL1JlY2VudEFydGljbGVzJ1xuaW1wb3J0IFRhYmxlT2ZDb250ZW50IGZyb20gJy4uL2FydGljbGUvVGFibGVPZkNvbnRlbnQnXG5pbXBvcnQgQmFubmVyQ2Fyb3VzZWwgZnJvbSAnLi4vSG9tZS9iYW5uZXJDYXJvdXNlbCc7XG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuaW1wb3J0IENoYXRSZWZ1bmRSZWFzb25zIGZyb20gJy4vQ2hhdFJlZnVuZFJlYXNvbnMuanMnXG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcblxuY2xhc3MgQ2hhdFBhbmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgbGV0IHBhcnNlZEhyZWYgPSAnJ1xuICAgICAgICBsZXQgaXNfdGh5cm9jYXJlID0gZmFsc2VcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcGFyc2VkSHJlZiA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgICAgICBpc190aHlyb2NhcmUgPSAocGFyc2VkSHJlZiAmJiBwYXJzZWRIcmVmLnV0bV9zb3VyY2UgJiYgcGFyc2VkSHJlZi51dG1fc291cmNlLmluY2x1ZGVzKCdUaHlyb2NhcmUnKSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWRSb29tOiBudWxsLFxuICAgICAgICAgICAgdG9rZW46IFwiXCIsXG4gICAgICAgICAgICBzeW1wdG9tczogW10sXG4gICAgICAgICAgICByb29tSWQ6IFwiXCIsXG4gICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dDaGF0QmxvY2s6IGZhbHNlLFxuICAgICAgICAgICAgYWRkaXRpb25DbGFzc2VzOiAnIGNoYXQtbG9hZC1tb2JpbGUnLFxuICAgICAgICAgICAgaGlkZUlmcmFtZTogaXNfdGh5cm9jYXJlID8gZmFsc2UgOiB0cnVlLFxuICAgICAgICAgICAgaWZyYW1lTG9hZGluZzogaXNfdGh5cm9jYXJlID8gZmFsc2UgOiB0cnVlLFxuICAgICAgICAgICAgc2hvd1N0YXRpY1ZpZXc6IGlzX3RoeXJvY2FyZSA/IGZhbHNlIDogdHJ1ZSxcbiAgICAgICAgICAgIGluaXRpYWxNZXNzYWdlOiBcIlwiLFxuICAgICAgICAgICAgY2FsbFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgb3BlblJlZnVuZFBvcHVwOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCBwYXJzZWRIcmVmID0gJydcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcGFyc2VkSHJlZiA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblJlZklwZCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblJlZklwZCh0aGlzKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc2VuZExvY2F0aW9uTm90aWZpY2F0aW9uKHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbilcbiAgICAgICAgfVxuXG4gICAgICAgIFNUT1JBR0UuZ2V0QXV0aFRva2VuKCkudGhlbigodG9rZW4pID0+IHtcbiAgICAgICAgICAgIC8vdGhpcy5zZW5kVXNlckRldGFpbHModGhpcy5wcm9wcy5VU0VSKVxuICAgICAgICAgICAgdG9rZW4gPSB0b2tlbiB8fCBcIlwiXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2NhdGlvbi5zdGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b2tlbiwgc3ltcHRvbXM6ICh0aGlzLnByb3BzLmxvY2F0aW9uLnN0YXRlLnN5bXB0b21zIHx8IFtdKSwgcm9vbUlkOiAodGhpcy5wcm9wcy5sb2NhdGlvbi5zdGF0ZS5yb29tSWQgfHwgXCJcIikgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRva2VuIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm1vYmlsZWNoYXR2aWV3KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dDaGF0QmxvY2s6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrIGZvciBzdGF0aWMgbWVzc2FnZSBhbmQgaGlkZS9zaG93IGlmcmFtZSB3aXRoIGxvYWRlciBhY2NvcmRpbmdseS5cbiAgICAgICAgICovXG4gICAgICAgIGlmICh0aGlzLnByb3BzLlVTRVIgJiYgKHRoaXMucHJvcHMuVVNFUi5saXZlQ2hhdFN0YXJ0ZWQgfHwgdGhpcy5wcm9wcy5VU0VSLmlwZF9jaGF0ICYmIHRoaXMucHJvcHMuVVNFUi5pcGRfY2hhdC5zaG93SXBkQ2hhdCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93U3RhdGljVmlldzogZmFsc2UsIGlmcmFtZUxvYWRpbmc6IHRydWUgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoaWRlSWZyYW1lOiBmYWxzZSB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpZnJhbWUgPSB0aGlzLnJlZnMuY2hhdF9mcmFtZVxuICAgICAgICAgICAgICAgICAgICBpZiAoaWZyYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZnJhbWUub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpZnJhbWVMb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlmcmFtZUxvYWRpbmc6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBsZXQgaWZyYW1lMSA9IHRoaXMucmVmcy5jaGF0X2ZyYW1lMVxuICAgICAgICAgICAgICAgICAgICBpZiAoaWZyYW1lMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWZyYW1lMS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlmcmFtZUxvYWRpbmc6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaWZyYW1lTG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgLy8gaGFuZGxpbmcgZXZlbnRzIHNlbnQgYnkgaWZyYW1lXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uICh7IGRhdGEgfSkge1xuICAgICAgICAgICAgICAgIGxldCBldmVudERhdGEgPSBkYXRhO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZGF0YS5ldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlJvb21BZ2VudFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkUm9vbTogZGF0YS5kYXRhLnJpZCB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFuYWx5dGljRGF0YTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudERhdGEuZGF0YS5hZ2VudFR5cGUgPT0gJ1R5cGUgMScpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmFseXRpY0RhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ2hhdCcsICdBY3Rpb24nOiAnTDFEb2N0b3JBc3NpZ25lZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2wxLWRvY3Rvci1hc3NpZ25lZCcsICdSb29tSWQnOiBldmVudERhdGEuZGF0YS5yaWQsICdEb2N0b3JJZCc6IGV2ZW50RGF0YS5kYXRhLmVtcGxveWVlSWQsIFwidXJsXCI6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBhbmFseXRpY0RhdGEgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnREYXRhLmRhdGEuYWdlbnRUeXBlID09ICdUeXBlIDInKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5hbHl0aWNEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NoYXQnLCAnQWN0aW9uJzogJ0wyRG9jdG9yQXNzaWduZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdsMi1kb2N0b3ItYXNzaWduZWQnLCAnUm9vbUlkJzogZXZlbnREYXRhLmRhdGEucmlkLCAnRG9jdG9ySWQnOiBldmVudERhdGEuZGF0YS5lbXBsb3llZUlkLCBcInVybFwiOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogYW5hbHl0aWNEYXRhIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50RGF0YS5kYXRhLmFnZW50VHlwZSA9PSAnVHlwZSAzJykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuYWx5dGljRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDaGF0JywgJ0FjdGlvbic6ICdMM0RvY3RvckFzc2lnbmVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbDMtZG9jdG9yLWFzc2lnbmVkJywgJ1Jvb21JZCc6IGV2ZW50RGF0YS5kYXRhLnJpZCwgJ0RvY3RvcklkJzogZXZlbnREYXRhLmRhdGEuZW1wbG95ZWVJZCwgXCJ1cmxcIjogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGFuYWx5dGljRGF0YSB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wcm9wcy5nZXRDaGF0RG9jdG9yQnlJZChkYXRhLmRhdGEubWFuYWdlciwgZGF0YS5kYXRhLnJpZCwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5kaXNwYXRjaEN1c3RvbUV2ZW50KCdwcm9maWxlX2Fzc2lnbmVkJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvZmlsZUlkOiBkYXRhLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJkb2N0b3Jfc2VhcmNoXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VhcmNoRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDcml0ZXJpYXM6IHRoaXMucHJvcHMuZG9jdG9yX3NlYXJjaF9kYXRhLnNlbGVjdGVkQ3JpdGVyaWFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZExvY2F0aW9uOiB0aGlzLnByb3BzLmRvY3Rvcl9zZWFyY2hfZGF0YS5zZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hEYXRhID0gZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNlYXJjaERhdGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJEYXRhID0gZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuZG9jdG9yX3NlYXJjaF9kYXRhLmZpbHRlckNyaXRlcmlhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL29wZC9zZWFyY2hyZXN1bHRzP3NlYXJjaD0ke3NlYXJjaERhdGF9JmZpbHRlcj0ke2ZpbHRlckRhdGF9JmRvY3Rvcl9uYW1lPSR7XCJcIn0maG9zcGl0YWxfbmFtZT0ke1wiXCJ9YClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibGFiX3NlYXJjaFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlYXJjaERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ3JpdGVyaWFzOiB0aGlzLnByb3BzLmxhYl9zZWFyY2hfZGF0YS5zZWxlY3RlZENyaXRlcmlhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbjogdGhpcy5wcm9wcy5sYWJfc2VhcmNoX2RhdGEuc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoRGF0YSA9IGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzZWFyY2hEYXRhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsdGVyRGF0YSA9IGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmxhYl9zZWFyY2hfZGF0YS5maWx0ZXJDcml0ZXJpYSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9sYWIvc2VhcmNocmVzdWx0cz9zZWFyY2g9JHtzZWFyY2hEYXRhfSZmaWx0ZXI9JHtmaWx0ZXJEYXRhfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNoYXRfbG9hZGVkXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5kYXRhLnJpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzYXZlIGN1cnJlbnQgcm9vbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYW5hbHl0aWNEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NoYXQnLCAnQWN0aW9uJzogJ0NoYXRJbml0aWFsaXphdGlvbicsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NoYXQtaW5pdGlhbGl6YXRpb24nLCAnUm9vbUlkJzogZGF0YS5kYXRhLnJpZCwgXCJ1cmxcIjogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGFuYWx5dGljRGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXh0cmFQYXJhbXMgPSB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRIcmVmID0gcXVlcnlTdHJpbmcucGFyc2Uod2luZG93LmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VkSHJlZiAmJiBwYXJzZWRIcmVmLnBheW1lbnQgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYVBhcmFtcy5wYXltZW50ID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0Q2hhdFJvb21JZChkYXRhLmRhdGEucmlkLCBleHRyYVBhcmFtcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kTG9jYXRpb25Ob3RpZmljYXRpb24odGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vU2VuZCBwYXltZW50IGV2ZW50ICx3aGVuIHBheW1lbnQgaXMgaW4gdXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZWRIcmVmICYmIHBhcnNlZEhyZWYucGF5bWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kUGF5bWVudFN0YXR1c0V2ZW50KGRhdGEuZGF0YS5yaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRVc2VyRGV0YWlscygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFJvb206IGRhdGEuZGF0YS5yaWQsIGlmcmFtZUxvYWRpbmc6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJMb2dpblwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuZGF0YVtcInBhcmFtcy50b2tlblwiXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYW5hbHl0aWNEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NoYXQnLCAnQWN0aW9uJzogJ1VzZXJSZWdpc3RlcmVkdmlhQ2hhdCcsICdDdXN0b21lcklEJzogJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAndXNlci1yZWdpc3RlcmVkLXZpYS1jaGF0JywgJ1Jvb21JZCc6IGV2ZW50RGF0YS5kYXRhLnJpZCB8fCAnJywgXCJ1cmxcIjogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGFuYWx5dGljRGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmxvZ2luVmlhQ2hhdChkYXRhLmRhdGFbXCJwYXJhbXMudG9rZW5cIl0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJDaGF0X0Nsb3NlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnByb3BzLnN0YXJ0TGl2ZUNoYXQoZmFsc2UsIHRoaXMuc3RhdGUuc2VsZWN0ZWRMb2NhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW5pdGlhbE1lc3NhZ2U6IFwiXCIsIHNlbGVjdGVkUm9vbTogbnVsbCwgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VkSHJlZiAmJiBwYXJzZWRIcmVmLnBheW1lbnQgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBidWlsZFVybCA9IHRoaXMuYnVpbGRVcmwoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucmVwbGFjZShidWlsZFVybClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRDaGF0Um9vbUlkKG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucHJvcHMuaXBkQ2hhdFZpZXcobnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudW5TZXRDb21tb25VdG1UYWdzKCdjaGF0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnByb3BzLmhpc3RvcnkuZ28oLTEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInByZXNjcmlwdGlvbl9yZXBvcnRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbmFseXRpY0RhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDaGF0JywgJ0FjdGlvbic6ICdQcmVzY3JpcHRpb25HZW5lcmF0ZWQnLCAnQ3VzdG9tZXJJRCc6ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3ByZXNjcmlwdGlvbi1nZW5lcmF0ZWQnLCAnUm9vbUlkJzogZXZlbnREYXRhLnJpZCB8fCAnJywgXCJ1cmxcIjogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBhbmFseXRpY0RhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYmFubmVyJzoge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEudHlwZSA9PSAndGltZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbmFseXRpY0RhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ2hhdCcsICdBY3Rpb24nOiAnQmFubmVyVGltZXJGaXJlZCcsICdDdXN0b21lcklEJzogJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnYmFubmVyLXRpbWVyLWZpcmVkJywgJ1Jvb21JZCc6IGV2ZW50RGF0YS5yaWQgfHwgJycsIFwidXJsXCI6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBhbmFseXRpY0RhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudHlwZSA9PSAndHJhbnNmZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbmFseXRpY0RhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ2hhdCcsICdBY3Rpb24nOiAnQmFubmVyVHJhbnNmZXJGaXJlZCcsICdDdXN0b21lcklEJzogJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnYmFubmVyLXRyYW5zZmVyLWZpcmVkJywgJ1Jvb21JZCc6IGV2ZW50RGF0YS5yaWQgfHwgJycsIFwidXJsXCI6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBhbmFseXRpY0RhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudHlwZSA9PSAncHJldmVudGl2ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFuYWx5dGljRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDaGF0JywgJ0FjdGlvbic6ICdQcmV2ZW50aXZlRmlyZWQnLCAnQ3VzdG9tZXJJRCc6ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3ByZXZlbnRpdmUtZmlyZWQnLCAnUm9vbUlkJzogZXZlbnREYXRhLnJpZCB8fCAnJywgXCJ1cmxcIjogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGFuYWx5dGljRGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50eXBlID09ICdzYWxlc0Jhbm5lcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFuYWx5dGljRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDaGF0JywgJ0FjdGlvbic6ICdCYW5uZXJTYWxlc0ZpcmVkJywgJ0N1c3RvbWVySUQnOiAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdiYW5uZXItc2FsZXMtZmlyZWQnLCAnUm9vbUlkJzogZXZlbnREYXRhLnJpZCB8fCAnJywgXCJ1cmxcIjogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGFuYWx5dGljRGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYm9va05vdyc6IHtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFuYWx5dGljRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NoYXQnLCAnQWN0aW9uJzogJ0Jvb2tOb3dGaXJlZCcsICdDdXN0b21lcklEJzogJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnYm9vay1ub3ctZmlyZWQnLCAnUm9vbUlkJzogZXZlbnREYXRhLnJpZCB8fCAnJywgXCJ1cmxcIjogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLCAnc3BlY2lhbGl6YXRpb25fdXJsJzogZGF0YS51cmwgfHwgJycsICdpZHMnOiBkYXRhLmlkcyB8fCAnJywgJ3R5cGUnOiBkYXRhLnR5cGUgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGFuYWx5dGljRGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdib29rTm93UGhhcm1hY3knOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFuYWx5dGljRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NoYXQnLCAnQWN0aW9uJzogJ0Jvb2tOb3dQaGFybWFjeUZpcmVkJywgJ0N1c3RvbWVySUQnOiAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdib29rLW5vdy1waGFybWFjeS1maXJlZCcsICdSb29tSWQnOiBldmVudERhdGEucmlkIHx8ICcnLCBcInVybFwiOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGFuYWx5dGljRGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdNb2JpbGVWZXJpZmljYXRpb24nOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFuYWx5dGljRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NoYXQnLCAnQWN0aW9uJzogJ01vYmlsZVZlcmlmaWNhdGlvbkZpcmVkJywgJ0N1c3RvbWVySUQnOiAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdtb2JpbGUtdmVyaWZpY2F0aW9uLWZpcmVkJywgJ1Jvb21JZCc6IGV2ZW50RGF0YS5yaWQgfHwgJycsIFwidXJsXCI6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogYW5hbHl0aWNEYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRDaGF0Um9vbUlkKGRhdGEuZGF0YS5yaWQsIHsgc2hvd0Rpc2FibGVkUGF5bWVudDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogcmVkaXJlY3RpbmcgY2hhdCB0byBuZXcgcGFnZSBmb3IgbW9iaWxlIHVzZXJzIG9uIGhvbWVwYWdlIGFuZCBvbiBmb2N1c1xuICAgICAgICAgICAgICAgICAgICAgKiBUT0RPIDogcmV2aWV3IHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLm1lc3NhZ2UgJiYgZGF0YS5tZXNzYWdlID09ICdmb2N1cycgJiYgISh0aGlzLnByb3BzLlVTRVIgJiYgdGhpcy5wcm9wcy5VU0VSLmlwZF9jaGF0ICYmIHRoaXMucHJvcHMuVVNFUi5pcGRfY2hhdC5zaG93SXBkQ2hhdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpZnJhbWUgPSB0aGlzLnJlZnMuY2hhdF9mcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWZyYW1lLnNjcm9sbFRvcCA9IGlmcmFtZS5zY3JvbGxIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmhvbWVQYWdlICYmIHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4ICYmICF0aGlzLnByb3BzLmhpc3RvcnkubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJ21vYmlsZXZpZXdjaGF0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL21vYmlsZXZpZXdjaGF0JylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzZW5kUGF5bWVudFN0YXR1c0V2ZW50KHJpZCkge1xuICAgICAgICBsZXQgcGFyc2VkSHJlZiA9ICcnXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHBhcnNlZEhyZWYgPSBxdWVyeVN0cmluZy5wYXJzZSh3aW5kb3cubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICB9XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgcmlkOiByaWQsXG4gICAgICAgICAgICBwYXltZW50X3N0YXR1czogcGFyc2VkSHJlZi5wYXltZW50IHx8ICcnXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaXNwYXRjaEN1c3RvbUV2ZW50KCdwYXltZW50JywgZGF0YSlcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25SZWZJcGQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25SZWZJcGQodW5kZWZpbmVkKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VuZExvY2F0aW9uTm90aWZpY2F0aW9uKHNlbGVjdGVkTG9jYXRpb24pIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBsb2NhdGlvbjogc2VsZWN0ZWRMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbixcbiAgICAgICAgICAgIGxvY2FsaXR5OiBzZWxlY3RlZExvY2F0aW9uLmxvY2FsaXR5LFxuICAgICAgICAgICAgY2l0eTogc2VsZWN0ZWRMb2NhdGlvbi5uYW1lLFxuICAgICAgICAgICAgYWRkcmVzczogc2VsZWN0ZWRMb2NhdGlvbi5mb3JtYXR0ZWRfYWRkcmVzc1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEN1c3RvbUV2ZW50KCdsb2NhdGlvbicsIGRhdGEpXG4gICAgfVxuXG4gICAgc2VuZFVzZXJEZXRhaWxzKCkge1xuICAgICAgICBsZXQgZGF0YSA9IHt9XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHVzZXIgPSB0aGlzLnByb3BzLlVTRVJcbiAgICAgICAgICAgIGlmICh1c2VyICYmIHVzZXIucHJvZmlsZXMgJiYgT2JqZWN0LmtleXModXNlci5wcm9maWxlcykubGVuZ3RoID4gMCAmJiB1c2VyLnByb2ZpbGVzW3VzZXIuc2VsZWN0ZWRQcm9maWxlXSkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEN1c3RvbUV2ZW50KCd1c2VyX2RldGFpbHMnLCB7IGlzX2luc3VyZWQ6IHVzZXIucHJvZmlsZXNbdXNlci5zZWxlY3RlZFByb2ZpbGVdLmlzX2luc3VyZWQsIG5hbWU6IHVzZXIucHJvZmlsZXNbdXNlci5zZWxlY3RlZFByb2ZpbGVdLm5hbWUgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEN1c3RvbUV2ZW50KCd1c2VyX2RldGFpbHMnLCB7IGlzX2luc3VyZWQ6IGZhbHNlLCBuYW1lOiAnJyB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sIDEwMDApXG5cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICAgIGxldCBwYXJzZWRIcmVmID0gJydcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcGFyc2VkSHJlZiA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpc190aHlyb2NhcmUgPSAocGFyc2VkSHJlZiAmJiBwYXJzZWRIcmVmLnV0bV9zb3VyY2UgJiYgcGFyc2VkSHJlZi51dG1fc291cmNlLmluY2x1ZGVzKCdUaHlyb2NhcmUnKSkgPyB0cnVlIDogZmFsc2VcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uICE9IHByb3BzLnNlbGVjdGVkTG9jYXRpb24gJiYgcHJvcHMuc2VsZWN0ZWRMb2NhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zZW5kTG9jYXRpb25Ob3RpZmljYXRpb24ocHJvcHMuc2VsZWN0ZWRMb2NhdGlvbilcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgocHJvcHMuVVNFUiAmJiBwcm9wcy5VU0VSLmxpdmVDaGF0U3RhcnRlZCAmJiBwcm9wcy5VU0VSLmxpdmVDaGF0U3RhcnRlZCAhPSB0aGlzLnByb3BzLlVTRVIubGl2ZUNoYXRTdGFydGVkKSB8fCAocHJvcHMuVVNFUiAmJiBwcm9wcy5VU0VSLmlwZF9jaGF0ICYmIHByb3BzLlVTRVIuaXBkX2NoYXQuc2hvd0lwZENoYXQpKSB7XG4gICAgICAgICAgICAvL3RoaXMuc2VuZFVzZXJEZXRhaWxzKHByb3BzLlVTRVIpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1N0YXRpY1ZpZXc6IGZhbHNlLCBpZnJhbWVMb2FkaW5nOiB0cnVlIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGlkZUlmcmFtZTogZmFsc2UgfSwgKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBpZnJhbWUgPSB0aGlzLnJlZnMuY2hhdF9mcmFtZVxuICAgICAgICAgICAgICAgICAgICBpZiAoaWZyYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZnJhbWUub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpZnJhbWVMb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlmcmFtZUxvYWRpbmc6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBsZXQgaWZyYW1lMSA9IHRoaXMucmVmcy5jaGF0X2ZyYW1lMVxuICAgICAgICAgICAgICAgICAgICBpZiAoaWZyYW1lMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWZyYW1lMS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlmcmFtZUxvYWRpbmc6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaWZyYW1lTG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHByb3BzLlVTRVIgJiYgIXByb3BzLlVTRVIubGl2ZUNoYXRTdGFydGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dTdGF0aWNWaWV3OiBpc190aHlyb2NhcmUgPyBmYWxzZSA6IHRydWUsIGlmcmFtZUxvYWRpbmc6IGZhbHNlIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGRpc3BhdGNoQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCBkYXRhID0ge30pIHtcbiAgICAgICAgbGV0IGV2ZW50ID0gbmV3IEV2ZW50KGV2ZW50TmFtZSlcbiAgICAgICAgbGV0IGlmcmFtZSA9IHRoaXMucmVmcy5jaGF0X2ZyYW1lXG5cbiAgICAgICAgaWYgKGlmcmFtZSAmJiBpZnJhbWUuY29udGVudFdpbmRvdykge1xuICAgICAgICAgICAgaWZyYW1lLmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gICAgICAgICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZSh7ICdldmVudCc6IGV2ZW50TmFtZSwgZGF0YSB9LCAnKicpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGlmcmFtZTEgPSB0aGlzLnJlZnMuY2hhdF9mcmFtZTFcbiAgICAgICAgaWYgKGlmcmFtZTEgJiYgaWZyYW1lMS5jb250ZW50V2luZG93KSB7XG4gICAgICAgICAgICBpZnJhbWUxLmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gICAgICAgICAgICBpZnJhbWUxLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoeyAnZXZlbnQnOiBldmVudE5hbWUsIGRhdGEgfSwgJyonKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xvc2VDaGF0KCkge1xuICAgICAgICBsZXQgcGFyc2VkSHJlZiA9ICcnXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHBhcnNlZEhyZWYgPSBxdWVyeVN0cmluZy5wYXJzZSh3aW5kb3cubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICB9XG5cbiAgICAgICAgU1RPUkFHRS5nZXRBdXRoVG9rZW4oKS50aGVuKCh0b2tlbikgPT4ge1xuICAgICAgICAgICAgdG9rZW4gPSB0b2tlbiB8fCBcIlwiXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdG9rZW4sIGluaXRpYWxNZXNzYWdlOiBcIlwiLCBzZWxlY3RlZFJvb206IG51bGwgfSlcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5kaXNwYXRjaEN1c3RvbUV2ZW50LmNhbGwodGhpcywgJ2Nsb3NlX2ZyYW1lJylcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dDYW5jZWw6ICF0aGlzLnN0YXRlLnNob3dDYW5jZWwgfSlcbiAgICAgICAgaWYgKHBhcnNlZEhyZWYgJiYgcGFyc2VkSHJlZi5wYXltZW50ID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgbGV0IGJ1aWxkVXJsID0gdGhpcy5idWlsZFVybCgpXG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucmVwbGFjZShidWlsZFVybClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLnNldENoYXRSb29tSWQobnVsbClcbiAgICAgICAgdGhpcy5wcm9wcy51blNldENvbW1vblV0bVRhZ3MoJ2NoYXQnKVxuICAgICAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGF0LnByb3BzLmlwZENoYXRWaWV3KG51bGwpXG4gICAgICAgIH0sIDEwMDApXG5cbiAgICB9XG5cbiAgICBidWlsZFVybCgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5wYXRobmFtZTtcbiAgICB9XG5cbiAgICB0b2dnbGVDYW5jZWwoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0NhbmNlbDogIXRoaXMuc3RhdGUuc2hvd0NhbmNlbCB9KVxuICAgIH1cblxuICAgIGhpZGVTdGF0aWNDaGF0KGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubW9iaWxlY2hhdHZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5nbygtMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0NoYXRCbG9jazogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydExpdmVDaGF0V2l0aE1lc3NhZ2UobWVzc2FnZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW5pdGlhbE1lc3NhZ2U6IG1lc3NhZ2UgfSwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zdGFydExpdmVDaGF0KClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjbG9zZUNoYXRDbGljaygpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubW9iaWxlY2hhdHZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5nbygtMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0NoYXRCbG9jazogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGF0QnRuQ2xpY2soKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmFydGljbGVEYXRhIHx8IHRoaXMucHJvcHMuc2VhcmNoVGVzdEluZm9EYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0NoYXRCbG9jazogdHJ1ZSwgYWRkaXRpb25DbGFzc2VzOiBcIlwiIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMubmV3Q2hhdEJ0bikge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9tb2JpbGV2aWV3Y2hhdD9ib3RhZ2VudD10cnVlJmZvcmNlX3N0YXJ0PXRydWUnKTtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDaGF0JywgJ0FjdGlvbic6ICdnZXRIZWxwQnRuQ2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjaGF0LWJ1dHRvbi1jbGlja2VkJywgXCJ1cmxcIjogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMubmV3Q2hhdEJ0bkFkcyAmJiB0aGlzLnByb3BzLmJvb2tpbmdzR0EpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvbW9iaWxldmlld2NoYXQ/Ym90YWdlbnQ9dHJ1ZSZmb3JjZV9zdGFydD10cnVlJyk7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ2hhdCcsICdBY3Rpb24nOiAnZ2V0SGVscEJ0bkNsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2hhdC1idXR0b24tY2xpY2tlZCcsIFwidXJsXCI6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5ld0NoYXRCdG5DbGljaygpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudHlwZSAmJiAodGhpcy5wcm9wcy50eXBlID09ICdvcGQnIHx8IHRoaXMucHJvcHMudHlwZSA9PSAnbGFiJykpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvbW9iaWxldmlld2NoYXQ/Ym90YWdlbnQ9dHJ1ZSZmb3JjZV9zdGFydD10cnVlJyk7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ2hhdCcsICdBY3Rpb24nOiAnbmVlZEhlbHBCdG5DbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbmVlZC1oZWxwLWJ0bi1jbGlja2VkJywgXCJQYWdlVHlwZVwiOiB0aGlzLnByb3BzLnR5cGUsIFwidXJsXCI6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q2hhdEJsb2NrOiB0cnVlLCBhZGRpdGlvbkNsYXNzZXM6IFwiXCIgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbklmcmFtZUxvYWQoZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0XG4gICAgICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgKHRhcmdldC5jb250ZW50V2luZG93IHx8IHRhcmdldC5jb250ZW50RG9jdW1lbnQpLmxvY2F0aW9uLmhyZWY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgaW4gcmVuZGVyaW5nIGNoYXQgaWZyYW1lJyArIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWZ1bmRDbGlja2VkKGlzRW5hYmxlKSB7XG4gICAgICAgIGlmIChpc0VuYWJsZSkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NoYXQnLCAnQWN0aW9uJzogJ1JlZnVuZEJ0bkNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdSZWZ1bmQtYnRuLWNsaWNrZWQnLCBcIlBhZ2VUeXBlXCI6IHRoaXMucHJvcHMudHlwZSwgXCJ1cmxcIjogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgdGhpcy50b2dnbGVSZWZ1bmRQb3B1cCgpXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJObyBwYXltZW50IGV4aXN0cyBmb3IgdGhpcyBjb25zdWx0YXRpb25cIiB9KVxuICAgICAgICAgICAgfSwgMjAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlUmVmdW5kUG9wdXAoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuUmVmdW5kUG9wdXA6ICF0aGlzLnN0YXRlLm9wZW5SZWZ1bmRQb3B1cCB9KVxuICAgIH1cblxuICAgIHN1Ym1pdFJlZnVuZFJlYXNvbnMocmVhc29uKSB7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgcm9vbUlkOiB0aGlzLnN0YXRlLnJvb21JZCxcbiAgICAgICAgICAgIHJlYXNvbjogcmVhc29uXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaXNwYXRjaEN1c3RvbUV2ZW50KCdSZWZ1bmRfRmVlcycsIGRhdGEpXG4gICAgICAgIHRoaXMucHJvcHMuc2V0UGF5bWVudFN0YXR1cyhudWxsKVxuICAgICAgICBsZXQgYnVpbGRVcmwgPSB0aGlzLmJ1aWxkVXJsKClcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UoYnVpbGRVcmwpXG4gICAgICAgIHRoaXMudG9nZ2xlUmVmdW5kUG9wdXAoKVxuICAgIH1cblxuICAgIHNlbmRQYWdlVXJsID0gKCkgPT4ge1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIGNhbGxiYWNrOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3Vic3RyaW5nKDEpICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKC8mL2csJyonKSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiB0aGlzLnByb3BzLm1zZ1RlbXBsYXRlID8gdGhpcy5wcm9wcy5tc2dUZW1wbGF0ZSA6ICdjb21tb24nXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5zZW5kQWdlbnRXaGF0c3VwUGFnZVVSTChkYXRhKS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiU2VudCBTdWNjZXNzZnVsbHlcIiB9KVxuICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlRyeSBhZ2FpbiFcIiB9KVxuICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIClcbiAgICAgICAgbGV0IGRvY3RvckRhdGEgPSBudWxsXG4gICAgICAgIGlmICh0aGlzLnByb3BzLlVTRVIuY2hhdFJvb21JZHNbdGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21dKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5VU0VSLmNoYXREb2N0b3JzW3RoaXMucHJvcHMuVVNFUi5jaGF0Um9vbUlkc1t0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbV1dKSB7XG4gICAgICAgICAgICAgICAgZG9jdG9yRGF0YSA9IHRoaXMucHJvcHMuVVNFUi5jaGF0RG9jdG9yc1t0aGlzLnByb3BzLlVTRVIuY2hhdFJvb21JZHNbdGhpcy5zdGF0ZS5zZWxlY3RlZFJvb21dXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBzeW1wdG9tc191cmkgPSB0aGlzLnN0YXRlLnN5bXB0b21zLnJlZHVjZSgoc3RyLCBjdXJyKSA9PiB7XG4gICAgICAgICAgICBzdHIgKz0gYCR7Y3Vycn0sYFxuICAgICAgICAgICAgcmV0dXJuIHN0clxuICAgICAgICB9LCBcIlwiKVxuXG4gICAgICAgIGlmIChzeW1wdG9tc191cmkpIHtcbiAgICAgICAgICAgIHN5bXB0b21zX3VyaSA9IGVuY29kZVVSSUNvbXBvbmVudChzeW1wdG9tc191cmkpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcGFyc2VkSHJlZiA9ICcnXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHBhcnNlZEhyZWYgPSBxdWVyeVN0cmluZy5wYXJzZSh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpZnJhbWVfdXJsID0gYCR7Q09ORklHLkNIQVRfVVJMfT9jYj0xJnRva2VuPSR7dGhpcy5zdGF0ZS50b2tlbn0mc3ltcHRvbXM9JHtzeW1wdG9tc191cml9JnJvb209JHt0aGlzLnN0YXRlLnJvb21JZH0mZnJvbV9hcHA9JHtwYXJzZWRIcmVmLmZyb21fYXBwIHx8IGZhbHNlfSZkZXZpY2VfaWQ9JHtwYXJzZWRIcmVmLmRldmljZV9pZCB8fCAnJ31gXG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaW5pdGlhbE1lc3NhZ2UgJiYgIXRoaXMuc3RhdGUuc2hvd1N0YXRpY1ZpZXcpIHtcbiAgICAgICAgICAgIGlmcmFtZV91cmwgKz0gYCZtc2c9JHt0aGlzLnN0YXRlLmluaXRpYWxNZXNzYWdlfWBcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBib3RBZ2VudCA9IGZhbHNlXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnYm90YWdlbnQnKSkge1xuICAgICAgICAgICAgYm90QWdlbnQgPSB0cnVlXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy50eXBlICYmIHRoaXMucHJvcHMudHlwZSA9PSAnb3BkJykge1xuICAgICAgICAgICAgICAgIGlmcmFtZV91cmwgKz0gYCZib3RhZ2VudD1Eb2NQcmltZVNPVCZzb3VyY2U9ZG9jdG9ybGlzdGluZ2NoYXRub3dgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMubmV3Q2hhdEJ0bkFkcykge1xuICAgICAgICAgICAgICAgIGlmcmFtZV91cmwgKz0gYCZib3RhZ2VudD1Eb2NQcmltZVNPVCZzb3VyY2U9bGVhZGZvcm1jaGF0bm93YFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZnJhbWVfdXJsICs9IGAmYm90YWdlbnQ9RG9jUHJpbWVTT1Qmc291cmNlPWxhYmxpc3RpbmdjaGF0bm93YFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBpc19yZWxpZ2FyZSA9IGZhbHNlXG4gICAgICAgIGlmIChmYWxzZSAmJiB0aGlzLnByb3BzLlVTRVIgJiYgdGhpcy5wcm9wcy5VU0VSLmNvbW1vbl91dG1fdGFncyAmJiB0aGlzLnByb3BzLlVTRVIuY29tbW9uX3V0bV90YWdzLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IHJlbGlnYXJlVGFnID0gdGhpcy5wcm9wcy5VU0VSLmNvbW1vbl91dG1fdGFncy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gJ2NoYXQnICYmIHgudXRtX3NvdXJjZSA9PSAncmVsaWdhcmUnKVxuXG4gICAgICAgICAgICBpZiAocmVsaWdhcmVUYWcubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaXNfcmVsaWdhcmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgaWZyYW1lX3VybCArPSBgJnNvdXJjZT1yZWxpZ2FyZSZ2aXNpdGlkPSR7cmVsaWdhcmVUYWdbMF0udmlzaXRvcklkfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyc2VkSHJlZiAmJiBwYXJzZWRIcmVmLnV0bV9zb3VyY2UpIHtcblxuICAgICAgICAgICAgaWYgKHBhcnNlZEhyZWYudXRtX3NvdXJjZSAhPSAncmVsaWdhcmUnKSB7XG4gICAgICAgICAgICAgICAgaWZyYW1lX3VybCArPSBgJnNvdXJjZT0ke3BhcnNlZEhyZWYudXRtX3NvdXJjZX1gXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghaXNfcmVsaWdhcmUgJiYgcGFyc2VkSHJlZi51dG1fc291cmNlLmluY2x1ZGVzKCdyZWxpZ2FyZScpKSB7XG4gICAgICAgICAgICAgICAgaXNfcmVsaWdhcmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgaWZyYW1lX3VybCArPSBgJnNvdXJjZT1yZWxpZ2FyZSZ2aXNpdGlkPSR7cGFyc2VkSHJlZi52aXNpdGlkID8gcGFyc2VkSHJlZi52aXNpdGlkIDogJyd9YFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgaXNfcmVsaWdhcmUgPSBpc19yZWxpZ2FyZSAmJiB0aGlzLnByb3BzLm1vYmlsZWNoYXR2aWV3XG4gICAgICAgIGxldCBjaGF0QnRuQ29udGVudDEgPSAnJ1xuICAgICAgICBsZXQgY2hhdEJ0bkNvbnRlbnQyID0gJydcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYXJ0aWNsZURhdGEgJiYgdGhpcy5wcm9wcy5hcnRpY2xlRGF0YS50aXRsZSkge1xuICAgICAgICAgICAgY2hhdEJ0bkNvbnRlbnQxID0gJ0NoYXQgbm93IHdpdGggZG9jdG9yJ1xuICAgICAgICAgICAgY2hhdEJ0bkNvbnRlbnQyID0gJ2Fib3V0ICcgKyB0aGlzLnByb3BzLmFydGljbGVEYXRhLnRpdGxlLnNwbGl0KCd8JylbMF0gKyAnIGFuZCByZWxhdGVkIHF1ZXJpZXMnXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5uZXdDaGF0QnRuIHx8IHRoaXMucHJvcHMubmV3Q2hhdEJ0bkFkcykge1xuICAgICAgICAgICAgY2hhdEJ0bkNvbnRlbnQxID0gPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDE4IH19ID48aW1nIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiA4LCB3aWR0aDogMjQsIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2hlYWRwaG9uZS5zdmdcIn0gLz5HZXQgaGVscCB3aXRoIHlvdXIgYm9va2luZ3M8L3NwYW4+XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVjZW50QXJ0aWNsZXMgPSBmYWxzZVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5hcnRpY2xlRGF0YSAmJiB0aGlzLnByb3BzLmFydGljbGVEYXRhLnJlY2VudF9hcnRpY2xlcykge1xuICAgICAgICAgICAgcmVjZW50QXJ0aWNsZXMgPSB0aGlzLnByb3BzLmFydGljbGVEYXRhLnJlY2VudF9hcnRpY2xlc1xuICAgICAgICB9XG5cblxuICAgICAgICAvL2lmKHRoaXMucHJvcHMuc2hvd0hhbGZTY3JlZW5DaGF0ICYmIHRoaXMucHJvcHMuaXBkRm9ybVBhcmFtcykge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5VU0VSICYmIHRoaXMucHJvcHMuVVNFUi5pcGRfY2hhdCAmJiB0aGlzLnByb3BzLlVTRVIuaXBkX2NoYXQuaXBkRm9ybSAmJiBmYWxzZSkge1xuXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0gSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5VU0VSLmlwZF9jaGF0LmlwZEZvcm0pXG4gICAgICAgICAgICBpZnJhbWVfdXJsICs9IGAmcHJvZHVjdD1JUEQmcGFyYW1zPSR7cGFyYW1zfSZtc2c9c3RhcnRjaGF0YFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWZyYW1lX3VybCArPSAnJnByb2R1Y3Q9RG9jUHJpbWUnXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyc2VkSHJlZi5ib29raW5nX2lkKSB7XG4gICAgICAgICAgICBpZnJhbWVfdXJsICs9IGAmYm9va2luZ19pZD0ke3BhcnNlZEhyZWYuYm9va2luZ19pZH1gXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyc2VkSHJlZi51dG1fc291cmNlICYmIHBhcnNlZEhyZWYudXRtX3NvdXJjZS5pbmNsdWRlcygnVGh5cm9jYXJlJykpIHtcbiAgICAgICAgICAgIGlmcmFtZV91cmwgKz0gJyZtc2c9c3RhcnRjaGF0J1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcnNlZEhyZWYucGF5bWVudCkge1xuICAgICAgICAgICAgaWZyYW1lX3VybCArPSBgJnBheW1lbnQ9JHtwYXJzZWRIcmVmLnBheW1lbnR9YFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcnNlZEhyZWYub3JkZXJfaWQpIHtcbiAgICAgICAgICAgIGlmcmFtZV91cmwgKz0gYCZvcmRlcl9pZD0ke3BhcnNlZEhyZWYub3JkZXJfaWR9YFxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBheW1lbnRfZGlzYWJsZSA9IHBhcnNlZEhyZWYgJiYgcGFyc2VkSHJlZi51dG1fY2FtcGFpZ24gJiYgcGFyc2VkSHJlZi51dG1fY2FtcGFpZ24uaW5jbHVkZXMoJ0FkRG9jQ2hhdCcpID8gcGFyc2VkSHJlZi51dG1fY2FtcGFpZ24uaW5jbHVkZXMoJ0FkRG9jQ2hhdCcpIDogbnVsbFxuXG4gICAgICAgIGlmIChwYXJzZWRIcmVmLnV0bV9jYW1wYWlnbikge1xuICAgICAgICAgICAgaWZyYW1lX3VybCArPSBgJnV0bV9jYW1wYWlnbj0ke3BhcnNlZEhyZWYudXRtX2NhbXBhaWdufWBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXltZW50X2Rpc2FibGUpIHtcbiAgICAgICAgICAgIGlmcmFtZV91cmwgKz0gYCZ0ZXN0aW5nX21vZGU9YWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmcmFtZV91cmwgKz0gYCZ0ZXN0aW5nX21vZGU9YmBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJzZWRIcmVmICYmIHBhcnNlZEhyZWYuY29uc3VsdGF0aW9uX2lkKSB7XG4gICAgICAgICAgICBpZnJhbWVfdXJsICs9IGAmY29uc3VsdGF0aW9uX2lkPSR7cGFyc2VkSHJlZi5jb25zdWx0YXRpb25faWR9YFxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlzX3BheW1lbnRfZm9yX2N1cnJlbnRfcm9vbSA9IG51bGxcbiAgICAgICAgbGV0IHNob3dfZGlzYWJsZWRfcmVmdW5kX2J1dHRvbiA9IG51bGxcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuVVNFUiAmJiB0aGlzLnByb3BzLlVTRVIuY3VycmVudFJvb21JZCkge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5VU0VSLmNoYXRQYXltZW50U3RhdHVzID09IHRoaXMucHJvcHMuVVNFUi5jdXJyZW50Um9vbUlkKSB7XG4gICAgICAgICAgICAgICAgaXNfcGF5bWVudF9mb3JfY3VycmVudF9yb29tID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuVVNFUi5tb2JpbGVWZXJpZmljYXRpb25Eb25lID09IHRoaXMucHJvcHMuVVNFUi5jdXJyZW50Um9vbUlkKSB7XG4gICAgICAgICAgICAgICAgc2hvd19kaXNhYmxlZF9yZWZ1bmRfYnV0dG9uID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2hvd0hhbGZTY3JlZW5DaGF0ICYmICF0aGlzLnByb3BzLnNob3dEZXNrdG9wSXBkKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNUT1JBR0UuaXNBZ2VudCgpIHx8IHRoaXMuc3RhdGUuaGlkZUlmcmFtZSA/IFwiXCIgOiA8aWZyYW1lIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5ob21lUGFnZSA/IGBjaGF0LWlmcmFtZSAke3RoaXMuc3RhdGUuaWZyYW1lTG9hZGluZyA/ICdkLW5vbmUnIDogJyd9YCA6IGBjaGF0LWlmcmFtZS1pbm5lciBmbG9hdC1jaGF0LWhlaWdodCAke3RoaXMuc3RhdGUuaWZyYW1lTG9hZGluZyA/ICdkLW5vbmUnIDogJyd9YH0gc3JjPXtpZnJhbWVfdXJsfSBhbGxvdz1cIm1pY3JvcGhvbmU7Y2FtZXJhXCIgcmVmPVwiY2hhdF9mcmFtZTFcIj48L2lmcmFtZT5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlmcmFtZUxvYWRpbmcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyLWZvci1jaGF0LWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGVyLWZvci1jaGF0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxkbmctdGV4dFwiPkNvbm5lY3RpbmcgdG8gdGhlIGRvY3Rvci4uLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0NhbmNlbCA/IDxDYW5jZWxQb3B1cCBob21lUGFnZT17dGhpcy5wcm9wcy5ob21lUGFnZX0gdG9nZ2xlPXt0aGlzLnRvZ2dsZUNhbmNlbC5iaW5kKHRoaXMpfSBjbG9zZUNoYXQ9e3RoaXMuY2xvc2VDaGF0LmJpbmQodGhpcyl9IC8+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQtY2hhdGJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaG9tZVBhZ2UgJiYgZmFsc2U/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLWNvbnQtaGVpZ2h0IGhvbWUtcGFnZS1iYW5uZXItZGl2IG1yLTAgYmFubmVyLW1kLW1hcmduIGhvbWUtYm5uci1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlckJhbm5lciBiYW5uZXItY2Fyb3VzZWwtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZIZWlnaHQgbS0wXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjVweCFpbXBvcnRhbnRcIiB9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhIXRoaXMucHJvcHMuY2hhdFBhZ2UgJiYgdGhpcy5wcm9wcy5vZmZlckxpc3QgJiYgdGhpcy5wcm9wcy5vZmZlckxpc3QuZmlsdGVyKHggPT4geC5zbGlkZXJfbG9jYXRpb24gPT09ICdob21lX3BhZ2UnKS5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtYmFubmVyLXBvc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhbm5lckNhcm91c2VsIHsuLi50aGlzLnByb3BzfSBzbGlkZXJMb2NhdGlvbj1cImhvbWVfcGFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UgJiYgdGhpcy5wcm9wcy5jaGF0UGFnZSAmJiB0aGlzLnByb3BzLm9mZmVyTGlzdCAmJiB0aGlzLnByb3BzLm9mZmVyTGlzdC5maWx0ZXIoeCA9PiB4LnNsaWRlcl9sb2NhdGlvbiA9PT0gJ29ubGluZV9jb25zdWx0YXRpb24nKS5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFubmVyQ2Fyb3VzZWwgey4uLnRoaXMucHJvcHN9IHNsaWRlckxvY2F0aW9uPVwib25saW5lX2NvbnN1bHRhdGlvblwiIGNoYXRQYWdlPXt0aGlzLnByb3BzLmNoYXRQYWdlfSAvPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5vcGVuUmVmdW5kUG9wdXAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hhdFJlZnVuZFJlYXNvbnMgc3VibWl0UmVmdW5kPXt0aGlzLnN1Ym1pdFJlZnVuZFJlYXNvbnMuYmluZCh0aGlzKX0gdG9nZ2xlUmVmdW5kPXsoKSA9PiB0aGlzLnRvZ2dsZVJlZnVuZFBvcHVwKCl9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhvbWVQYWdlIHx8IHRoaXMucHJvcHMubW9iaWxlY2hhdHZpZXcgfHwgdGhpcy5wcm9wcy5ub0NoYXRCdXR0b24gfHwgdGhpcy5wcm9wcy5hcnRpY2xlRGF0YSB8fCB0aGlzLnByb3BzLnNlYXJjaFRlc3RJbmZvRGF0YSA/ICcnIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5uZXdDaGF0QnRuIHx8IHRoaXMucHJvcHMubmV3Q2hhdEJ0bkFkcyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjaGF0LWFydGljbGUtYnRuIGZpeGVkIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIGQtbWQtbm9uZSBmdy01MDAgdGV4dC1jZW50ZXJcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmNoYXRCdG5DbGljaygpfSA+e2NoYXRCdG5Db250ZW50MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y2hhdEJ0bkNvbnRlbnQyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGRpdiBjbGFzc05hbWU9e1wiY2hhdC1mbG9hdC1idG4gZC1sZy1ub25lIGQtbWQtbm9uZVwiICsgKHRoaXMucHJvcHMuZXh0cmFDbGFzcyB8fCBcIlwiKX0gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dDaGF0QmxvY2s6IHRydWUsIGFkZGl0aW9uQ2xhc3NlczogXCJcIiB9KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIDxpbWcgd2lkdGg9XCI4MFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Zsb2F0aW5naWNvbi5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cIm5ldy1jaGF0LWZpeGVkLWJ0biBkLW1kLW5vbmVcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLm5ld0NoYXRCdG5DbGljaygpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL2NoYXQtYnRuLW5ldy5zdmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VhcmNoVGVzdEluZm9EYXRhICYmIHRoaXMucHJvcHMudXBkYXRlVGFic1ZhbHVlcyAmJiB0aGlzLnByb3BzLnJlc3BfdGVzdF9pZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtb2YtY29udGVudC1kZXNrdG9wIG10LTIxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVPZkNvbnRlbnQgc2VhcmNoVGVzdEluZm9EYXRhPXt0aGlzLnByb3BzLnNlYXJjaFRlc3RJbmZvRGF0YX0gdXBkYXRlVGFic1ZhbHVlcz17dGhpcy5wcm9wcy51cGRhdGVUYWJzVmFsdWVzfSByZXNwX3Rlc3RfaWQ9e3RoaXMucHJvcHMucmVzcF90ZXN0X2lkfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3RoaXMuc3RhdGUuc2hvd0NoYXRCbG9jayA/IFwiZmxvYXRpbmctY2hhdCBcIiA6IFwiXCJ9ICR7aXNfcmVsaWdhcmUgPyAnIGNoYXQtcmxnci12aWV3JyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93U3RhdGljVmlldyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hhdFN0YXRpY1ZpZXcgey4uLnRoaXMucHJvcHN9IHN0YXJ0TGl2ZUNoYXRXaXRoTWVzc2FnZT17dGhpcy5zdGFydExpdmVDaGF0V2l0aE1lc3NhZ2UuYmluZCh0aGlzKX0gaGlkZVN0YXRpY0NoYXQ9e3RoaXMuaGlkZVN0YXRpY0NoYXQuYmluZCh0aGlzKX0gc2hvd0NoYXRCbG9jaz17dGhpcy5zdGF0ZS5zaG93Q2hhdEJsb2NrfSBkYXRhQ2xhc3M9e3RoaXMuc3RhdGUuc2hvd0NoYXRCbG9jayA/IFwiY2hhdGJveC1yaWdodCB0ZXN0LWNoYXQgXCIgOiBgJHt0aGlzLnByb3BzLmhvbWVQYWdlID8gJ2NoYXRib3gtcmlnaHQnIDogJ2NoYXRib3gtcmlnaHQgY2hhdC1zbGlkZS1kb3duIGQtbGctZmxleCBtdC0yMSd9ICR7dGhpcy5wcm9wcy5ob21lUGFnZSA/ICcnIDogdGhpcy5zdGF0ZS5hZGRpdGlvbkNsYXNzZXN9YH0gaXNfcmVsaWdhcmU9e2lzX3JlbGlnYXJlfSBzZW5kUGFnZVVybD17dGhpcy5zZW5kUGFnZVVybH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc2hvd0NoYXRCbG9jayA/IFwiY2hhdGJveC1yaWdodCB0ZXN0LWNoYXRcIiA6IGAke3RoaXMucHJvcHMuaG9tZVBhZ2UgPyAnY2hhdGJveC1yaWdodCcgOiAnY2hhdGJveC1yaWdodCBjaGF0LXNsaWRlLWRvd24gZC1sZy1mbGV4IG10LTIxJ30gJHt0aGlzLnByb3BzLmhvbWVQYWdlID8gJycgOiB0aGlzLnN0YXRlLmFkZGl0aW9uQ2xhc3Nlc31gfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBjaGF0IGhlYWRlciAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtaGVhZFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGQtY2hhdFwiIHN0eWxlPXt7IGZsZXg6IDEgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2ggJiYgdGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoJz9ib3RhZ2VudCcpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IGhlYWRlci10ZXh0LWNoYXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlZC10eHQtbHRcIj5HZXQgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVscCB3aXRoIEJvb2tpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGF0UGFnZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IGhlYWRlci10ZXh0LWNoYXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwiaGVkLXR4dC1sdFwiPkdldCBhIDwvc3Bhbj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT25saW5lIERvY3RvciBDb25zdWx0YXRpb24hXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgaGVhZGVyLXRleHQtY2hhdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJoZWQtdHh0LWx0XCI+R2V0IGEgPC9zcGFuPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPbmxpbmUgRG9jdG9yIENvbnN1bHRhdGlvbiFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaHQtaGVhZC1ycXN0LWJ0biByZWZ1bmQtY2hhdFwiIHN0eWxlPXt0aGlzLnByb3BzLmhvbWVQYWdlID8ge30gOiB7fX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc19yZWxpZ2FyZSAmJiBzaG93X2Rpc2FibGVkX3JlZnVuZF9idXR0b24gJiYgPHAgY2xhc3NOYW1lPXtgY2h0LW5lZWQtYnRuIGN1cnNvci1wbnRyIG1yLTIgJHtpc19wYXltZW50X2Zvcl9jdXJyZW50X3Jvb20gPyAnJyA6ICdkaXNhYmxlLWFsbCd9YH0gb25DbGljaz17KCkgPT4geyB0aGlzLnJlZnVuZENsaWNrZWQoaXNfcGF5bWVudF9mb3JfY3VycmVudF9yb29tKSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2NoYXQtcmZuZC5wbmcnfSBzdHlsZT17eyB3aWR0aDogMjggfX0gLz4gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qdGhpcy5zdGF0ZS5zZWxlY3RlZFJvb20gPyA8c3BhbiBjbGFzc05hbWU9XCJtci0yXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDaGF0JywgJ0FjdGlvbic6ICdDYWxsQmFja1JlcXVlc3RlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NhbGxiYWNrLXJlcXVlc3RlZCcsICdSb29tSWQnOiB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5jYWxsVGltZW91dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEN1c3RvbUV2ZW50LmNhbGwodGhpcywgJ2NhbGwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhbGxUaW1lb3V0OiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2FsbFRpbWVvdXQ6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAyNiB9fSBzcmM9XCIvYXNzZXRzL2ltZy9jdXN0b21lci1pY29ucy9jaGF0LWNhbGwuc3ZnXCIgdGl0bGU9XCJnZXQgYSBjYWxsYmFjayBmcm9tIGRvY3RvclwiIC8+XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiA6IFwiXCIqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfcmVsaWdhcmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUNhbmNlbC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6IDI2IH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3JlbF9jaGF0Y2xvc2Uuc3ZnXCJ9IHRpdGxlPVwic3RhcnQgYSBuZXcgY2hhdFwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxzcGFuIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQ2FuY2VsLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogMjYgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2hhdGNsb3NlLnN2Z1wifSB0aXRsZT1cInN0YXJ0IGEgbmV3IGNoYXRcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93Q2hhdEJsb2NrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaXNfcmVsaWdhcmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMlwiIG9uQ2xpY2s9eygpID0+IHRoaXMuY2xvc2VDaGF0Q2xpY2soKX0+PGltZyBjbGFzc05hbWU9XCJjbG9zZS1jaGF0XCIgc3R5bGU9e3sgd2lkdGg6IDI2IH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3JlbF9jaGF0bWluaW1pemUuc3ZnXCJ9IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8c3BhbiBjbGFzc05hbWU9XCJtbC0yXCIgb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZUNoYXRDbGljaygpfT48aW1nIGNsYXNzTmFtZT1cImNsb3NlLWNoYXRcIiBzdHlsZT17eyB3aWR0aDogMjYgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2hhdG1pbmltaXplLnN2Z1wifSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogY2hhdCBoZWFkZXIgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIGNoYXQgQm9keSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTVE9SQUdFLmlzQWdlbnQoKSB8fCB0aGlzLnN0YXRlLmhpZGVJZnJhbWUgPyBcIlwiIDogPGlmcmFtZSBjbGFzc05hbWU9e3RoaXMucHJvcHMuaG9tZVBhZ2UgPyBgY2hhdC1pZnJhbWUgJHt0aGlzLnN0YXRlLmlmcmFtZUxvYWRpbmcgPyAnZC1ub25lJyA6ICcnfWAgOiBgY2hhdC1pZnJhbWUtaW5uZXIgZmxvYXQtY2hhdC1oZWlnaHQgJHt0aGlzLnN0YXRlLmlmcmFtZUxvYWRpbmcgPyAnZC1ub25lJyA6ICcnfWB9IHNyYz17aWZyYW1lX3VybH0gYWxsb3c9XCJtaWNyb3Bob25lO2NhbWVyYVwiIHJlZj1cImNoYXRfZnJhbWVcIiBvbkxvYWQ9eyhlKSA9PiB0aGlzLm9uSWZyYW1lTG9hZChlKX0gb25FcnJvcj17KGUpID0+IHRoaXMub25JZnJhbWVMb2FkKGUpfSA+PC9pZnJhbWU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pZnJhbWVMb2FkaW5nID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci1mb3ItY2hhdC1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRlci1mb3ItY2hhdCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZG5nLXRleHRcIj5Db25uZWN0aW5nIHRvIHRoZSBkb2N0b3IuLi48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogY2hhdCBCb2R5ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5ob21lUGFnZSA/IGBjaGF0LWZvb3RlciBtdC0yMWAgOiBgY2hhdC1mb290ZXIgbXQtMjEgZC1ub25lIGQtbWQtYmxvY2tgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JuZy1tc3NnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBoZWlnaHQ6IDI0LCB3aWR0aDogMjQgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWFnZXMvd2FybmluZy1pY29uLnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3QgZm9yIGVtZXJnZW5jaWVzISBJbiB0aGUgY2FzZSBvZiBlbWVyZ2VuY3kgcGxlYXNlIHZpc2l0IGEgaG9zcGl0YWwuIENoYXQgaXMgb25seSBhcHBsaWNhYmxlIHRvIEluZGlhbiBjaXRpemVucyBjdXJyZW50bHkgcmVzaWRpbmcgaW4gSW5kaWEuPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cblxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucHJvcHMuYXJ0aWNsZURhdGEgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0ZWQtYXJ0aWNsZXMtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5wcm9wcy5hcnRpY2xlRGF0YS5saW5rZWQubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGVkLWFydGljbGUtc3ViXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hcnRpY2xlRGF0YS5saW5rZWQubWFwKChsaW5rZWRBcnRpY2xlLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8UmVsYXRlZEFydGljbGVzIGtleT17aX0gbGlua2VkQXJ0aWNsZT17bGlua2VkQXJ0aWNsZX0gey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICByZWNlbnRBcnRpY2xlcyAmJiByZWNlbnRBcnRpY2xlcy5pdGVtcyAmJiByZWNlbnRBcnRpY2xlcy5pdGVtcy5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8UmVjZW50QXJ0aWNsZXMgcmVjZW50QXJ0aWNsZXNJdGVtcz17cmVjZW50QXJ0aWNsZXMuaXRlbXN9IHJlY2VudEFydGljbGVUaXRsZT17cmVjZW50QXJ0aWNsZXMudGl0bGV9IC8+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTVE9SQUdFLmlzQWdlbnQoKSAmJiAhdGhpcy5wcm9wcy5ob21lUGFnZSAmJiB0aGlzLnByb3BzLm1zZ1RlbXBsYXRlP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zZW5kUGFnZVVybH0gY2xhc3NOYW1lPVwid2h0c2FwcFBhZ2VzXCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3dhLWxvZ28uc3ZnJ30gLz5TZW5kIG9uIFdoYXRzYXBwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQ2hhdFBhbmVsXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIENoYXRSZWZ1bmRWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHJlZnVuZFJlYXNvbjonJyxcblx0XHRcdHNob3dFcnJvcjogZmFsc2Vcblx0XHR9XG5cdH1cblxuXHRzZWxlY3RSZWFzb24ocmVhc29uKXtcblx0XHR0aGlzLnNldFN0YXRlKHtyZWZ1bmRSZWFzb246IHJlYXNvbiwgc2hvd0Vycm9yOiBmYWxzZX0pXG5cdH1cblxuXHRzdWJtaXQoKXtcblx0XHRpZighdGhpcy5zdGF0ZS5yZWZ1bmRSZWFzb24pe1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7c2hvd0Vycm9yOiB0cnVlfSlcblx0XHR9ZWxzZXtcblx0XHRcdHRoaXMucHJvcHMuc3VibWl0UmVmdW5kKHRoaXMuc3RhdGUucmVmdW5kUmVhc29uKVxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLW92ZXJsYXkgY2FuY2VsLW92ZXJsYXktemluZGV4XCIgb25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpXG5cdFx0XHRcdFx0dGhpcy5wcm9wcy50b2dnbGVSZWZ1bmQoKVxuXHRcdFx0XHR9fT5cblxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgY2FuY2VsLWFwcG9pbnRtZW50LWRpdiBjYW5jZWwtcG9wdXAgb3ZlcmZsb3ctaGlkZGVuIHJlZnVuZC1wb3AgZm9udC1hbmFseXplIFwiIHN0eWxlPXt7cGFkZGluZzonMTJweCd9fT5cblx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cInJmbmQtY2xzLWJ0blwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvaWNvbnMvY2xvc2UucG5nJ30gb25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKVxuXHRcdFx0XHRcdFx0dGhpcy5wcm9wcy50b2dnbGVSZWZ1bmQoKVxuXHRcdFx0XHRcdH19Lz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlZnVuZC1jaGF0LWhkbmdcIj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInJmbmQtbW4taGRuZ1wiPkFyZSB5b3Ugc3VyZT88L3A+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJyZm5kLXN1Yi1oZG5nXCI+T25jZSB5b3UgcHJvY2VlZCBmdXJ0aGVyLCBjb25zdWx0YXRpb24gd2lsbCBlbmQgYW5kIHJlZnVuZCB3aWxsIGJlIGluaXRpYXRlZC48L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZm5kLWxzdC1jb250XCI+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJyZm5kLWxzdC1oZG5nXCI+KlBsZWFzZSBwcm92aWRlIHlvdXIgcmVhc29uIGZvciByZWZ1bmQ6PC9wPlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLnNob3dFcnJvciAmJiA8cCBjbGFzc05hbWU9XCJyZm5kLWxzdHN1Yi1oZG5nXCI+U2VsZWN0IHJlYXNvbiBmb3IgcmVmdW5kPC9wPlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkdGwtcmFkaW9cIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW8gbWItMCBocGEtY29udGFpbmVyLXJhZGlvXCI+UXVlcnkgbm90IGFkZHJlc3NlZCBwcm9wZXJseVxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJyYWRpb1wiIG9uQ2hhbmdlPXsoKT0+dGhpcy5zZWxlY3RSZWFzb24oJ1F1ZXJ5IG5vdCBhZGRyZXNzZWQgcHJvcGVybHknKX0gLz48c3BhbiBjbGFzc05hbWU9XCJkb2MtY2hlY2ttYXJrIGhwYS1yYWRpbyBocGEtcmFkaW8tZ2VuZGVyXCIgPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImR0bC1yYWRpb1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lci1yYWRpbyBtYi0wIGhwYS1jb250YWluZXItcmFkaW9cIj5UcmVhdG1lbnQvUHJlc2NyaXB0aW9uIG5vdCBwcm92aWRlZFxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJyYWRpb1wiIG9uQ2hhbmdlPXsoKT0+dGhpcy5zZWxlY3RSZWFzb24oJ1RyZWF0bWVudC9QcmVzY3JpcHRpb24gbm90IHByb3ZpZGVkJyl9IC8+PHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFyayBocGEtcmFkaW8gaHBhLXJhZGlvLWdlbmRlclwiID48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkdGwtcmFkaW9cIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW8gbWItMCBocGEtY29udGFpbmVyLXJhZGlvXCI+RG9jdG9yIHRha2VzIHRvbyBsb25nIHRvIHJlc3BvbmRcblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicmFkaW9cIiBvbkNoYW5nZT17KCk9PnRoaXMuc2VsZWN0UmVhc29uKCdEb2N0b3IgdGFrZXMgdG9vIGxvbmcgdG8gcmVzcG9uZCcpfSAvPjxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmsgaHBhLXJhZGlvIGhwYS1yYWRpby1nZW5kZXJcIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkdGwtcmFkaW9cIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW8gbWItMCBocGEtY29udGFpbmVyLXJhZGlvXCI+Tm90IGhhcHB5IHdpdGggb3ZlcmFsbCBzZXJ2aWNlXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInJhZGlvXCIgb25DaGFuZ2U9eygpPT50aGlzLnNlbGVjdFJlYXNvbignTm90IGhhcHB5IHdpdGggb3ZlcmFsbCBzZXJ2aWNlJyl9IC8+PHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFyayBocGEtcmFkaW8gaHBhLXJhZGlvLWdlbmRlclwiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImR0bC1yYWRpb1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lci1yYWRpbyBtYi0wIGhwYS1jb250YWluZXItcmFkaW9cIj5PdGhlcnNcblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicmFkaW9cIiBvbkNoYW5nZT17KCk9Pntcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zZWxlY3RSZWFzb24oJ090aGVycycpfX0vPjxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmsgaHBhLXJhZGlvIGhwYS1yYWRpby1nZW5kZXJcIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cInJmbmQtYnRuXCIgb25DbGljaz17KCk9PnRoaXMuc3VibWl0KCl9PkluaXRpYXRlIFJlZnVuZDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhdFJlZnVuZFZpZXc7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY2hhdF91dG0gfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2luZGV4J1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcblxuXG5jbGFzcyBDaGF0U3RhdGljIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgIG9wZW5CYW5uZXI6IHRydWUsXG4gICAgICAgICAgICB1dG1fdGVybTogcGFyc2VkLnV0bV90ZXJtIHx8IFwiXCIsXG4gICAgICAgICAgICBCYXNpY0VucXVpcnk6IHBhcnNlZC5CYXNpY0VucXVpcnkgfHwgXCJcIixcbiAgICAgICAgICAgIHV0bV9sb2FkZXI6ICEhcGFyc2VkLnV0bV90ZXJtLFxuICAgICAgICAgICAgZm9yY2Vfc3RhcnQ6IHBhcnNlZC5mb3JjZV9zdGFydCB8fCBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICgodGhpcy5zdGF0ZS5CYXNpY0VucXVpcnkgfHwgdGhpcy5zdGF0ZS5mb3JjZV9zdGFydCkgJiYgdGhpcy5wcm9wcy5tb2JpbGVjaGF0dmlldykge1xuICAgICAgICAgICAgdGhpcy5nZXRJZnJhbWUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLyppZiAodGhpcy5zdGF0ZS51dG1fdGVybSkge1xuICAgICAgICAgICAgICAgIGNoYXRfdXRtKHRoaXMuc3RhdGUudXRtX3Rlcm0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5kYXRhICYmIGRhdGEuZGF0YS5CYXNpY0VucXVpcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBCYXNpY0VucXVpcnk6IGRhdGEuZGF0YS5CYXNpY0VucXVpcnksIHV0bV9sb2FkZXI6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCYXNpY0VucXVpcnk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRtX3Rlcm06IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRtX2xvYWRlcjogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJhc2ljRW5xdWlyeTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0bV90ZXJtOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXRtX2xvYWRlcjogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSovXG4gICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQmFzaWNFbnF1aXJ5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0bV90ZXJtOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0bV9sb2FkZXI6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5wdXRIYW5kbGVyKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgIH1cblxuICAgIGhhbmRsZUtleVVwKGUpIHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnN0YXJ0TGl2ZUNoYXRXaXRoTWVzc2FnZSh0aGlzLnN0YXRlLnZhbHVlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0SWZyYW1lKCkge1xuICAgICAgICB0aGlzLnByb3BzLnN0YXJ0TGl2ZUNoYXRXaXRoTWVzc2FnZSh0aGlzLnN0YXRlLnZhbHVlIHx8IHRoaXMuc3RhdGUuQmFzaWNFbnF1aXJ5KVxuICAgIH1cblxuICAgIGNoZWNrT3Blbk1vYmlsZUNoYXQoKSB7XG4gICAgICAgIC8vIGhhbmRsZSBzdGF0aWMgcGFnZSByZWRpcmVjdHMgZm9yIGhvbWVwYWdlXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmhvbWVQYWdlICYmIHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4ICYmICF0aGlzLnByb3BzLm1vYmlsZWNoYXR2aWV3KSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL21vYmlsZXZpZXdjaGF0P0Jhc2ljRW5xdWlyeT0ke3RoaXMuc3RhdGUuQmFzaWNFbnF1aXJ5fWApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5CYXNpY0VucXVpcnkgJiYgdGhpcy5wcm9wcy5ob21lUGFnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0SWZyYW1lKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuQmFubmVyOiBmYWxzZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlVVRNKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5ob21lUGFnZSAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCAmJiAhdGhpcy5wcm9wcy5tb2JpbGVjaGF0dmlldykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9tb2JpbGV2aWV3Y2hhdD9CYXNpY0VucXVpcnk9JmZvcmNlX3N0YXJ0PXRydWVgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdXRtX3Rlcm06IFwiXCIsXG4gICAgICAgICAgICAgICAgQmFzaWNFbnF1aXJ5OiBcIlwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBcIlwiXG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJZnJhbWUoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHRpbWUgPSBuZXcgRGF0ZSgpXG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuZGF0YUNsYXNzICsgKHRoaXMuc3RhdGUudXRtX3Rlcm0gPyBcIiB1dG1fY2hhdGJveF9yaWdodFwiIDogXCJcIil9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1oZWFkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGQtY2hhdFwiIHN0eWxlPXt7IGZsZXg6IDEgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGF0UGFnZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgaGVhZGVyLXRleHQtY2hhdFwiPjxzcGFuIGNsYXNzTmFtZT1cImhlZC10eHQtbHRcIj48L3NwYW4+T25saW5lIERvY3RvciBDb25zdWx0YXRpb24hPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgaGVhZGVyLXRleHQtY2hhdFwiPjxzcGFuIGNsYXNzTmFtZT1cImhlZC10eHQtbHRcIj48L3NwYW4+T25saW5lIERvY3RvciBDb25zdWx0YXRpb24hPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaHQtaGVhZC1ycXN0LWJ0blwiIHN0eWxlPXt7IHdpZHRoOiA2NCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNob3dDaGF0QmxvY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLmlzX3JlbGlnYXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/PHNwYW4gY2xhc3NOYW1lPVwibWwtMlwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGlkZVN0YXRpY0NoYXQuYmluZCh0aGlzKX0+PGltZyBjbGFzc05hbWU9XCJjbG9zZS1jaGF0XCIgc3R5bGU9e3sgd2lkdGg6IDI2IH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3JlbF9jaGF0bWluaW1pemUuc3ZnXCJ9IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxzcGFuIGNsYXNzTmFtZT1cIm1sLTJcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmhpZGVTdGF0aWNDaGF0LmJpbmQodGhpcyl9PjxpbWcgY2xhc3NOYW1lPVwiY2xvc2UtY2hhdFwiIHN0eWxlPXt7IHdpZHRoOiAyNiB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jaGF0bWluaW1pemUuc3ZnXCJ9IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnV0bV9sb2FkZXIgPyA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXItZm9yLWNoYXQtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRlci1mb3ItY2hhdCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGRuZy10ZXh0XCI+Q29ubmVjdGluZyB0byB0aGUgZG9jdG9yLi4uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvbmxvYWQtY2hhdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpdmVjaGF0LXJvb21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdGJvYXQtY29udGFpbmVyIGNoYXRib3RfZG9jXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJoZXFtSDZqOWhxaGR2cGdXdVwiIGNsYXNzTmFtZT1cImNoYW5kcmFrYW50YVwiIGRhdGEtdXNlcm5hbWU9XCJQQmVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbi1tc3Nnc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY2VpdmVkLW1zZyBIU19mb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjaGF0LXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWxjb21lIHRvIERvY3ByaW1lLiBCcmllZmx5IGRlc2NyaWJlIHlvdXIgc3ltcHRvbSBvciBoZWFsdGggY29uY2VybiAoZS5nLiBJIGhhdmUgYSBmZXZlcikuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VuZC1jaGF0LXRpbWVcIj57dGltZS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7IGhvdXI6ICdudW1lcmljJywgbWludXRlOiAnbnVtZXJpYycsIGhvdXIxMjogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwia1B4U0VHRURidFNkbVBzcHFcIiBjbGFzc05hbWU9XCJjaGFuZHJha2FudGEgY2hhdHNlcXVlbnRpYWxcIiBkYXRhLXVzZXJuYW1lPVwiUEJlZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW4tbXNzZ3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWNlaXZlZC1tc2cgSFNfZm9udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudXRtX3Rlcm0gPyA8cCBjbGFzc05hbWU9XCJjaGF0LXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2BMb29rcyBsaWtlIHlvdSBuZWVkIGhlbHAgd2l0aCAke3RoaXMuc3RhdGUuQmFzaWNFbnF1aXJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGFydCBjaGF0IGZvciBhbiBpbnN0YW50IGNvbnN1bHRhdGlvbiBhbmQgYWJzb2x1dGVseSBmcmVlIHByZXNjcmlwdGlvbiB3aXRoIG91ciBkb2N0b3JzLmB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlbmQtY2hhdC10aW1lXCI+e3RpbWUudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywgeyBob3VyOiAnbnVtZXJpYycsIG1pbnV0ZTogJ251bWVyaWMnLCBob3VyMTI6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+IDogJycgLyo8cCBjbGFzc05hbWU9XCJjaGF0LXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJyaWVmbHkgZGVzY3JpYmUgdGhlIHN5bXB0b20vaGVhbHRoIGNvbmNlcm4gd29ycnlpbmcgeW91IHRoZSBtb3N0IChlLmcuIEkgaGF2ZSBhIGZldmVyKSBvciBzaW1wbHkgYXNrIGFueSBxdWVyeS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZW5kLWNoYXQtdGltZVwiPnt0aW1lLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHsgaG91cjogJ251bWVyaWMnLCBtaW51dGU6ICdudW1lcmljJywgaG91cjEyOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+Ki9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlciBmb290ZXJfZG9jXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnV0bV90ZXJtID8gPGRpdiBjbGFzc05hbWU9XCJ1dG0tY2hhdC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidXRtLWNoYXQtYnRuXCIgb25DbGljaz17dGhpcy5jaGVja09wZW5Nb2JpbGVDaGF0LmJpbmQodGhpcyl9PlN0YXJ0IENoYXQgZm9yIFwie3RoaXMuc3RhdGUuQmFzaWNFbnF1aXJ5fVwiPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ1dG0tY2xlYXItY2hhdFwiIG9uQ2xpY2s9e3RoaXMucmVtb3ZlVVRNLmJpbmQodGhpcyl9Pk9SPHNwYW4gY2xhc3NOYW1lPVwidXRtLXNhcHByYXRlclwiPlN0YXJ0IGNoYXQgZm9yIGFueSBvdGhlciBoZWFsdGggY29uY2Vybj88L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdF9mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm9wZW5CYW5uZXIgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2FzdC10aXAtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b2FzdC1jbG9zZS1idG5cIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbkJhbm5lcjogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9jbG9zZS13aGl0ZS5zdmdcIn0gLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JuZy1tc3NnLXBvcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBoZWlnaHQ6IDI0LCB3aWR0aDogMjQgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWFnZXMvd2FybmluZy1pY29uLnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Tm90IGZvciBlbWVyZ2VuY2llcyEgSW4gdGhlIGNhc2Ugb2YgZW1lcmdlbmN5IHBsZWFzZSB2aXNpdCBhIGhvc3BpdGFsLiAgQ2hhdCBpcyBvbmx5IGFwcGxpY2FibGUgdG8gSW5kaWFuIGNpdGl6ZW5zIGN1cnJlbnRseSByZXNpZGluZyBpbiBJbmRpYS48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyaXRlLW1zZy1ieFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImNzdGJveFwiIG9uRm9jdXM9e3RoaXMuY2hlY2tPcGVuTW9iaWxlQ2hhdC5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJmYy1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiIFR5cGUgeW91ciBtZXNzYWdlLi4uIFwiIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gb25LZXlVcD17KGUpID0+IHRoaXMuaGFuZGxlS2V5VXAoZSl9PjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VuZF9pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlzX3JlbGlnYXJlP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3NOYW1lPVwic2VuZC1tc2ctYnRuXCIgb25DbGljaz17dGhpcy5nZXRJZnJhbWUuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3JlbF9zZW5kLnN2Z1wifSBjbGFzc05hbWU9XCJzZW5kLW1kLWljb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3NOYW1lPVwic2VuZC1tc2ctYnRuXCIgb25DbGljaz17dGhpcy5nZXRJZnJhbWUuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3NlbmQuc3ZnXCJ9IGNsYXNzTmFtZT1cInNlbmQtbWQtaWNvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5tb2JpbGVjaGF0dmlldyAmJiB0aGlzLnN0YXRlLm9wZW5CYW5uZXIgPyA8ZGl2IGNsYXNzTmFtZT1cInRvYXN0LXRpcC1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b2FzdC1jbG9zZS1idG5cIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5CYW5uZXI6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Nsb3NlLXdoaXRlLnN2Z1wifSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JuZy1tc3NnLXBvcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgaGVpZ2h0OiAyNCwgd2lkdGg6IDI0IH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1hZ2VzL3dhcm5pbmctaWNvbi5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Ob3QgZm9yIGVtZXJnZW5jaWVzISBJbiB0aGUgY2FzZSBvZiBlbWVyZ2VuY3kgcGxlYXNlIHZpc2l0IGEgaG9zcGl0YWwuICBDaGF0IGlzIG9ubHkgYXBwbGljYWJsZSB0byBJbmRpYW4gY2l0aXplbnMgY3VycmVudGx5IHJlc2lkaW5nIGluIEluZGlhLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhdFN0YXRpYzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyB0b2dnbGUsIGNsb3NlQ2hhdCwgaG9tZVBhZ2UgfSkgPT4ge1xuICAgIHJldHVybiA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNhbmNlbC1vdmVybGF5ICR7aG9tZVBhZ2U/J2NhbmNsLWhvbWVwZy1wb3B1cCc6Jyd9YH0gb25DbGljaz17dG9nZ2xlfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgY2FuY2VsLWFwcG9pbnRtZW50LWRpdiBwYXltZW50LXBvcHVwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1oZWFkZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgY2FuY2VsLWFwcG9pbnRtZW50LWhlYWRcIj5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2xvc2UgdGhpcyBjaGF0PzwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBjYW5jZWwtY29udGVudC1kaXZcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQ2hhdCgpXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBjYW5jZWwtYXBwb2ludG1lbnQtaGVhZFwiPlllczwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGNhbmNlbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogKFlvdXIgY2hhdCB3aWxsIGJlIHNhdmVkIGlzIGNoYXQgaGlzdG9yeSkgKi99XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWwtcmlnaHQtYXJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvYXJyb3ctZm9yd2FyZC1yaWdodC5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IGNhbmNlbC1jb250ZW50LWRpdlwiIG9uQ2xpY2s9e3RvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBjYW5jZWwtYXBwb2ludG1lbnQtaGVhZFwiPk5vPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgY2FuY2VsLWNvbnRlbnRcIj48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLXJpZ2h0LWFycm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Fycm93LWZvcndhcmQtcmlnaHQuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGhyIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGdldFVzZXJQcm9maWxlLCBzZXRDaGF0Um9vbUlkIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcblxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7IGdldENoYXREb2N0b3JCeUlkLCByZXNldEZpbHRlcnMsIGNsZWFyRXh0cmFUZXN0cywgc2VsZWN0TG9jYXRpb24sIGxvZ2luVmlhQ2hhdCwgc3RhcnRMaXZlQ2hhdCwgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEsIHRvZ2dsZU9QRENyaXRlcmlhLCB1blNldENvbW1vblV0bVRhZ3MsIGlwZENoYXRWaWV3LCBzZXRQYXltZW50U3RhdHVzLCBzZW5kQWdlbnRXaGF0c3VwUGFnZVVSTCB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5cbmltcG9ydCBDaGF0UGFuZWxWaWV3IGZyb20gJy4vQ2hhdFBhbmVsJ1xuaW1wb3J0IFJlbGF0ZWRBcnRpY2xlcyBmcm9tICcuLi9hcnRpY2xlL1JlbGF0ZWRBcnRpY2xlcydcbmltcG9ydCBSZWNlbnRBcnRpY2xlcyBmcm9tICcuLi9hcnRpY2xlL1JlY2VudEFydGljbGVzJ1xuXG5jbGFzcyBDaGF0UGFuZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc3NyRmxhZzogdGhpcy5wcm9wcy5ob21lUGFnZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzc3JGbGFnOiB0cnVlIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBsZXQgcmVjZW50QXJ0aWNsZXMgPSBmYWxzZVxuICAgICAgICAvLyBpZiAodGhpcy5wcm9wcy5hcnRpY2xlRGF0YSAmJiB0aGlzLnByb3BzLmFydGljbGVEYXRhLnJlY2VudF9hcnRpY2xlcykge1xuICAgICAgICAvLyAgICAgcmVjZW50QXJ0aWNsZXMgPSB0aGlzLnByb3BzLmFydGljbGVEYXRhLnJlY2VudF9hcnRpY2xlc1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGxldCBjdF9zdHlsZSA9IHRoaXMucHJvcHMuaG9tZVBhZ2UgPyBcImNvbC1tZC01IG1iLTNcIiA6IHRoaXMucHJvcHMuY29sQ2xhc3MgPyBcImNvbC0xMiBjb2wtbWQtNSBtYi0zXCIgOnRoaXMucHJvcHMubmV3Q2hhdEJ0bkFkcyA/ICcnIDogXCJjb2wtbWQtNSBtYi0zXCJcbiAgICAgICAgLy8gaWYgKHRoaXMucHJvcHMuaG9tZVBhZ2UgJiYgIXRoaXMucHJvcHMuY2hhdFBhZ2UpXG4gICAgICAgIC8vICAgICBjdF9zdHlsZSA9IFwiY29sLW1kLTUgbWItMyBkLW5vbmUgZC1tZC1ibG9ja1wiXG4gICAgICAgIC8vIGlmKHRoaXMucHJvcHMud2ViQ2hhdFBhZ2UpXG4gICAgICAgIC8vICAgICBjdF9zdHlsZSA9IFwiY29sLW1kLTcgbWItMyBvbmxuLWRvYy1jbnNsdCBcIlxuLyogICAgICBcbiAgICAgICAgaWYoKHRoaXMucHJvcHMuVVNFUiAmJiB0aGlzLnByb3BzLlVTRVIuaXBkX2NoYXQgJiYgdGhpcy5wcm9wcy5VU0VSLmlwZF9jaGF0LnNob3dJcGRDaGF0KSB8fCAodGhpcy5wcm9wcy5zaG93SGFsZlNjcmVlbkNoYXQgJiYgIXRoaXMucHJvcHMuc2hvd0Rlc2t0b3BJcGQpKSB7XG4gICAgICAgICAgICBjdF9zdHlsZSA9ICcnXG4gICAgICAgIH0qL1xuICAgICAgICAvLyBpZih0aGlzLnByb3BzLnNob3dIYWxmU2NyZWVuQ2hhdCkge1xuICAgICAgICAvLyAgICAgY3Rfc3R5bGUgPSAnY2h0LWhpZGUtaGxmLXNjcm4nXG4gICAgICAgIC8vIH1cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgey8qXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Rfc3R5bGV9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hcnRpY2xlRGF0YSA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0ZWQtYXJ0aWNsZXMtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFydGljbGVEYXRhLmxpbmtlZC5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGVkLWFydGljbGUtc3ViXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFydGljbGVEYXRhLmxpbmtlZC5tYXAoKGxpbmtlZEFydGljbGUsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8UmVsYXRlZEFydGljbGVzIGtleT17aX0gbGlua2VkQXJ0aWNsZT17bGlua2VkQXJ0aWNsZX0gey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNlbnRBcnRpY2xlcyAmJiByZWNlbnRBcnRpY2xlcy5pdGVtcyAmJiByZWNlbnRBcnRpY2xlcy5pdGVtcy5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlY2VudEFydGljbGVzIHJlY2VudEFydGljbGVzSXRlbXM9e3JlY2VudEFydGljbGVzLml0ZW1zfSByZWNlbnRBcnRpY2xlVGl0bGU9e3JlY2VudEFydGljbGVzLnRpdGxlfSAvPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNzckZsYWcgJiYgZmFsc2U/XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hhdFBhbmVsVmlldyB7Li4udGhpcy5wcm9wc30gLz4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKi99XG5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcGFzc2VkUHJvcHMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IFVTRVIgPSBzdGF0ZS5VU0VSXG4gICAgbGV0IERPQ1RPUlMgPSBzdGF0ZS5ET0NUT1JTXG4gICAgbGV0IGRvY3Rvcl9zZWFyY2hfZGF0YSA9IHt9XG4gICAgbGV0IGxhYl9zZWFyY2hfZGF0YSA9IHt9XG4gICAgbGV0IHNlbGVjdGVkTG9jYXRpb24gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfT1BELnNlbGVjdGVkTG9jYXRpb25cblxuICAgIGRvY3Rvcl9zZWFyY2hfZGF0YS5zZWxlY3RlZENyaXRlcmlhcyA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9PUEQuc2VsZWN0ZWRDcml0ZXJpYXNcbiAgICBkb2N0b3Jfc2VhcmNoX2RhdGEuc2VsZWN0ZWRMb2NhdGlvbiA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9PUEQuc2VsZWN0ZWRMb2NhdGlvblxuICAgIGRvY3Rvcl9zZWFyY2hfZGF0YS5maWx0ZXJDcml0ZXJpYSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9PUEQuZmlsdGVyQ3JpdGVyaWFcblxuICAgIGxhYl9zZWFyY2hfZGF0YS5zZWxlY3RlZENyaXRlcmlhcyA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9MQUJTLnNlbGVjdGVkQ3JpdGVyaWFzXG4gICAgbGFiX3NlYXJjaF9kYXRhLnNlbGVjdGVkTG9jYXRpb24gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfTEFCUy5zZWxlY3RlZExvY2F0aW9uXG4gICAgbGFiX3NlYXJjaF9kYXRhLmZpbHRlckNyaXRlcmlhID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX0xBQlMuZmlsdGVyQ3JpdGVyaWFcblxuICAgIHJldHVybiB7XG4gICAgICAgIFVTRVIsIERPQ1RPUlMsIGRvY3Rvcl9zZWFyY2hfZGF0YSwgbGFiX3NlYXJjaF9kYXRhLCAuLi5wYXNzZWRQcm9wcywgc2VsZWN0ZWRMb2NhdGlvblxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0Q2hhdERvY3RvckJ5SWQ6IChkb2N0b3JJZCwgcm9vbUlkLCBjYikgPT4gZGlzcGF0Y2goZ2V0Q2hhdERvY3RvckJ5SWQoZG9jdG9ySWQsIHJvb21JZCwgY2IpKSxcbiAgICAgICAgcmVzZXRGaWx0ZXJzOiAoKSA9PiBkaXNwYXRjaChyZXNldEZpbHRlcnMoKSksXG4gICAgICAgIGNsZWFyRXh0cmFUZXN0czogKCkgPT4gZGlzcGF0Y2goY2xlYXJFeHRyYVRlc3RzKCkpLFxuICAgICAgICBzZWxlY3RMb2NhdGlvbjogKGxvY2F0aW9uKSA9PiBkaXNwYXRjaChzZWxlY3RMb2NhdGlvbihsb2NhdGlvbikpLFxuICAgICAgICBsb2dpblZpYUNoYXQ6ICh0b2tlbikgPT4gZGlzcGF0Y2gobG9naW5WaWFDaGF0KHRva2VuKSksXG4gICAgICAgIHNldENoYXRSb29tSWQ6IChyb29tSWQsIGV4dHJhUGFyYW1zKSA9PiBkaXNwYXRjaChzZXRDaGF0Um9vbUlkKHJvb21JZCwgZXh0cmFQYXJhbXMpKSxcbiAgICAgICAgc3RhcnRMaXZlQ2hhdDogKHN0YXJ0ZWQsIGRlbGV0ZVJvb21JZCkgPT4gZGlzcGF0Y2goc3RhcnRMaXZlQ2hhdChzdGFydGVkLCBkZWxldGVSb29tSWQpKSxcbiAgICAgICAgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWE6ICh0eXBlLCB0ZXN0LCBmb3JjZUFkZCwgZmlsdGVycykgPT4gZGlzcGF0Y2godG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEodHlwZSwgdGVzdCwgZm9yY2VBZGQsIGZpbHRlcnMpKSxcbiAgICAgICAgdG9nZ2xlT1BEQ3JpdGVyaWE6ICh0eXBlLCB0ZXN0LCBmb3JjZUFkZCwgZmlsdGVycykgPT4gZGlzcGF0Y2godG9nZ2xlT1BEQ3JpdGVyaWEodHlwZSwgdGVzdCwgZm9yY2VBZGQsIGZpbHRlcnMpKSxcbiAgICAgICAgdW5TZXRDb21tb25VdG1UYWdzOiAodHlwZSwgdGFncykgPT4gZGlzcGF0Y2godW5TZXRDb21tb25VdG1UYWdzKHR5cGUsIHRhZ3MpKSxcbiAgICAgICAgaXBkQ2hhdFZpZXc6IChkYXRhKSA9PiBkaXNwYXRjaChpcGRDaGF0VmlldyhkYXRhKSksXG4gICAgICAgIHNldFBheW1lbnRTdGF0dXM6IChzdGF0dXMpID0+IGRpc3BhdGNoKHNldFBheW1lbnRTdGF0dXMoc3RhdHVzKSksXG4gICAgICAgIHNlbmRBZ2VudFdoYXRzdXBQYWdlVVJMOiAoZXh0cmFQYXJhbXMsIGNiKSA9PiBkaXNwYXRjaChzZW5kQWdlbnRXaGF0c3VwUGFnZVVSTChleHRyYVBhcmFtcywgY2IpKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKSh3aXRoUm91dGVyKENoYXRQYW5lbCkpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcblxuY2xhc3MgQmFubmVyQ2Fyb3VzZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgICAgICBzdGFydFg6IDAsXG4gICAgICAgICAgICBzdGFydFk6IDAsXG4gICAgICAgICAgICBkaXN0WDogMCxcbiAgICAgICAgICAgIGRpc3RZOiAwLFxuICAgICAgICAgICAgaW50ZXJ2YWxGbGFnOiBmYWxzZSxcbiAgICAgICAgICAgIGludGVydmFsSWQ6JydcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgdG90YWxPZmZlcnMgPSAnJ1xuICAgICAgICBsZXQgZmlsdGVyZWRCYW5uZXJzID0gdGhpcy5nZXRGaWx0ZXJlZEJhbm5lcnMoKTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2xpZGVyTG9jYXRpb24gJiYgZmlsdGVyZWRCYW5uZXJzKSB7XG4gICAgICAgICAgICB0b3RhbE9mZmVycyA9IGZpbHRlcmVkQmFubmVycy5sZW5ndGg7XG4gICAgICAgICAgICBsZXQgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY3Vycl9pbmRleCA9IHRoaXMuc3RhdGUuaW5kZXhcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5pbnRlcnZhbEZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgY3Vycl9pbmRleCA9IGN1cnJfaW5kZXggKyAxXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyX2luZGV4ID49IHRvdGFsT2ZmZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyX2luZGV4ID0gMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbmRleDogY3Vycl9pbmRleCwgaW50ZXJ2YWxGbGFnOiB0cnVlIH0pXG4gICAgICAgICAgICB9LCA1MDAwKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGludGVydmFsSWQgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuc3RhdGUuaW50ZXJ2YWxJZClcbiAgICAgICAgfWNhdGNoKGUpe1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvKG9mZmVyKSB7XG4gICAgICAgIGlmIChvZmZlci51cmxfZGV0YWlscyAmJiBvZmZlci51cmxfZGV0YWlscy50ZXN0X2lkcykge1xuICAgICAgICAgICAgbGV0IHRlc3QgPSB7fVxuXG4gICAgICAgICAgICBsZXQgZmlsdGVycyA9IHsgJ3ByaWNlUmFuZ2UnOiBbb2ZmZXIudXJsX2RldGFpbHMubWluX2ZlZXMsIG9mZmVyLnVybF9kZXRhaWxzLm1heF9mZWVzXSwgJ2Rpc3RhbmNlUmFuZ2UnOiBbb2ZmZXIudXJsX2RldGFpbHMubWluX2Rpc3RhbmNlLCBvZmZlci51cmxfZGV0YWlscy5tYXhfZGlzdGFuY2VdLCAnc29ydF9vbic6IG9mZmVyLnVybF9kZXRhaWxzLnNvcnRfb24gfHwgJycsICdsYWJfbmFtZSc6IG9mZmVyLnVybF9kZXRhaWxzLmxhYl9uYW1lIHx8ICcnLCAnbmV0d29ya19pZCc6IG9mZmVyLnVybF9kZXRhaWxzLm5ldHdvcmtfaWQgfHwgJycgfVxuXG4gICAgICAgICAgICB0ZXN0LnR5cGUgPSAndGVzdCdcbiAgICAgICAgICAgIHRlc3QuaWQgPSBbXVxuXG4gICAgICAgICAgICBsZXQgdGVzdElkQXJyYXkgPSBvZmZlci51cmxfZGV0YWlscy50ZXN0X2lkcy5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgZm9yIChsZXQgaWQgaW4gdGVzdElkQXJyYXkpIHtcbiAgICAgICAgICAgICAgICB0ZXN0LmlkLnB1c2gocGFyc2VJbnQodGVzdElkQXJyYXlbaWRdKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSgndGVzdCcsIHRlc3QsIHRydWUsIGZpbHRlcnMpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2xhYi9zZWFyY2hyZXN1bHRzJylcbiAgICAgICAgICAgIH0sIDEwMClcblxuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6IG9mZmVyLmV2ZW50X25hbWUsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50Jzogb2ZmZXIuZXZlbnRfbmFtZSwgJ2NsaWNrZWRPbic6IG9mZmVyLnNsaWRlcl9sb2NhdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKG9mZmVyLnVybF9kZXRhaWxzICYmIG9mZmVyLnVybF9kZXRhaWxzLnNwZWNpYWxpemF0aW9ucyAmJiBvZmZlci51cmxfZGV0YWlscy5zcGVjaWFsaXphdGlvbnMgIT0gJycpIHtcbiAgICAgICAgICAgIGxldCBzcGVjaWFsaXR5ID0ge31cblxuICAgICAgICAgICAgbGV0IGZpbHRlcnMgPSB7ICdwcmljZVJhbmdlJzogW29mZmVyLnVybF9kZXRhaWxzLm1pbl9mZWVzLCBvZmZlci51cmxfZGV0YWlscy5tYXhfZmVlc10sICdkaXN0YW5jZVJhbmdlJzogW29mZmVyLnVybF9kZXRhaWxzLm1pbl9kaXN0YW5jZSwgb2ZmZXIudXJsX2RldGFpbHMubWF4X2Rpc3RhbmNlXSwgJ3NvcnRfb24nOiBvZmZlci51cmxfZGV0YWlscy5zb3J0X29uIHx8ICcnLCAnaXNfZmVtYWxlJzogb2ZmZXIudXJsX2RldGFpbHMuaXNfZmVtYWxlIHx8IGZhbHNlLCAnaXNfYXZhaWxhYmxlJzogb2ZmZXIudXJsX2RldGFpbHMuaXNfYXZhaWxhYmxlIHx8IGZhbHNlLCAnZG9jdG9yX25hbWUnOiBvZmZlci51cmxfZGV0YWlscy5kb2N0b3JfbmFtZSB8fCAnJywgJ2hvc3BpdGFsX25hbWUnOiBvZmZlci51cmxfZGV0YWlscy5ob3NwaXRhbF9uYW1lIHx8ICcnLCAnaG9zcGl0YWxfaWQnOiBvZmZlci51cmxfZGV0YWlscy5ob3NwaXRhbF9pZCB8fCAnJyB9XG5cbiAgICAgICAgICAgIHNwZWNpYWxpdHkudHlwZSA9ICdzcGVjaWFsaXR5J1xuICAgICAgICAgICAgc3BlY2lhbGl0eS5pZCA9IFtdXG5cbiAgICAgICAgICAgIGxldCBzcGVjaWFsaXR5SWRBcnJheSA9IG9mZmVyLnVybF9kZXRhaWxzLnNwZWNpYWxpemF0aW9ucy5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgZm9yIChsZXQgaWQgaW4gc3BlY2lhbGl0eUlkQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBzcGVjaWFsaXR5LmlkLnB1c2gocGFyc2VJbnQoc3BlY2lhbGl0eUlkQXJyYXlbaWRdKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVPUERDcml0ZXJpYSgnc3BlY2lhbGl0eScsIHNwZWNpYWxpdHksIHRydWUsIGZpbHRlcnMpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL29wZC9zZWFyY2hyZXN1bHRzJylcbiAgICAgICAgICAgIH0sIDEwMClcblxuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6IG9mZmVyLmV2ZW50X25hbWUsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50Jzogb2ZmZXIuZXZlbnRfbmFtZSwgJ2NsaWNrZWRPbic6IG9mZmVyLnNsaWRlcl9sb2NhdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKG9mZmVyLnVybF9kZXRhaWxzICYmIG9mZmVyLnVybF9kZXRhaWxzLnByb2NlZHVyZV9pZHMgJiYgb2ZmZXIudXJsX2RldGFpbHMucHJvY2VkdXJlX2lkcyAhPSAnJykge1xuICAgICAgICAgICAgbGV0IHNwZWNpYWxpdHkgPSB7fVxuXG4gICAgICAgICAgICBsZXQgZmlsdGVycyA9IHsgJ3ByaWNlUmFuZ2UnOiBbb2ZmZXIudXJsX2RldGFpbHMubWluX2ZlZXMsIG9mZmVyLnVybF9kZXRhaWxzLm1heF9mZWVzXSwgJ2Rpc3RhbmNlUmFuZ2UnOiBbb2ZmZXIudXJsX2RldGFpbHMubWluX2Rpc3RhbmNlLCBvZmZlci51cmxfZGV0YWlscy5tYXhfZGlzdGFuY2VdLCAnc29ydF9vbic6IG9mZmVyLnVybF9kZXRhaWxzLnNvcnRfb24gfHwgJycsICdpc19mZW1hbGUnOiBvZmZlci51cmxfZGV0YWlscy5pc19mZW1hbGUgfHwgZmFsc2UsICdpc19hdmFpbGFibGUnOiBvZmZlci51cmxfZGV0YWlscy5pc19hdmFpbGFibGUgfHwgZmFsc2UsICdkb2N0b3JfbmFtZSc6IG9mZmVyLnVybF9kZXRhaWxzLmRvY3Rvcl9uYW1lIHx8ICcnLCAnaG9zcGl0YWxfbmFtZSc6IG9mZmVyLnVybF9kZXRhaWxzLmhvc3BpdGFsX25hbWUgfHwgJycsICdob3NwaXRhbF9pZCc6IG9mZmVyLnVybF9kZXRhaWxzLmhvc3BpdGFsX2lkIHx8ICcnIH1cblxuICAgICAgICAgICAgc3BlY2lhbGl0eS50eXBlID0gJ3Byb2NlZHVyZXMnXG4gICAgICAgICAgICBzcGVjaWFsaXR5LmlkID0gW11cblxuICAgICAgICAgICAgbGV0IHNwZWNpYWxpdHlJZEFycmF5ID0gb2ZmZXIudXJsX2RldGFpbHMucHJvY2VkdXJlX2lkcy5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgZm9yIChsZXQgaWQgaW4gc3BlY2lhbGl0eUlkQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBzcGVjaWFsaXR5LmlkLnB1c2gocGFyc2VJbnQoc3BlY2lhbGl0eUlkQXJyYXlbaWRdKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVPUERDcml0ZXJpYSgncHJvY2VkdXJlcycsIHNwZWNpYWxpdHksIHRydWUsIGZpbHRlcnMpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL29wZC9zZWFyY2hyZXN1bHRzJylcbiAgICAgICAgICAgIH0sIDEwMClcblxuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6IG9mZmVyLmV2ZW50X25hbWUsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50Jzogb2ZmZXIuZXZlbnRfbmFtZSwgJ2NsaWNrZWRPbic6IG9mZmVyLnNsaWRlcl9sb2NhdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKG9mZmVyLnVybF9kZXRhaWxzICYmIG9mZmVyLnVybF9kZXRhaWxzLnByb2NlZHVyZV9jYXRlZ29yeV9pZHMgJiYgb2ZmZXIudXJsX2RldGFpbHMucHJvY2VkdXJlX2NhdGVnb3J5X2lkcyAhPSAnJykge1xuICAgICAgICAgICAgbGV0IHNwZWNpYWxpdHkgPSB7fVxuXG4gICAgICAgICAgICBsZXQgZmlsdGVycyA9IHsgJ3ByaWNlUmFuZ2UnOiBbb2ZmZXIudXJsX2RldGFpbHMubWluX2ZlZXMsIG9mZmVyLnVybF9kZXRhaWxzLm1heF9mZWVzXSwgJ2Rpc3RhbmNlUmFuZ2UnOiBbb2ZmZXIudXJsX2RldGFpbHMubWluX2Rpc3RhbmNlLCBvZmZlci51cmxfZGV0YWlscy5tYXhfZGlzdGFuY2VdLCAnc29ydF9vbic6IG9mZmVyLnVybF9kZXRhaWxzLnNvcnRfb24gfHwgJycsICdpc19mZW1hbGUnOiBvZmZlci51cmxfZGV0YWlscy5pc19mZW1hbGUgfHwgZmFsc2UsICdpc19hdmFpbGFibGUnOiBvZmZlci51cmxfZGV0YWlscy5pc19hdmFpbGFibGUgfHwgZmFsc2UsICdkb2N0b3JfbmFtZSc6IG9mZmVyLnVybF9kZXRhaWxzLmRvY3Rvcl9uYW1lIHx8ICcnLCAnaG9zcGl0YWxfbmFtZSc6IG9mZmVyLnVybF9kZXRhaWxzLmhvc3BpdGFsX25hbWUgfHwgJycsICdob3NwaXRhbF9pZCc6IG9mZmVyLnVybF9kZXRhaWxzLmhvc3BpdGFsX2lkIHx8ICcnIH1cblxuICAgICAgICAgICAgc3BlY2lhbGl0eS50eXBlID0gJ3Byb2NlZHVyZXNfY2F0ZWdvcnknXG4gICAgICAgICAgICBzcGVjaWFsaXR5LmlkID0gW11cblxuICAgICAgICAgICAgbGV0IHNwZWNpYWxpdHlJZEFycmF5ID0gb2ZmZXIudXJsX2RldGFpbHMucHJvY2VkdXJlX2NhdGVnb3J5X2lkcy5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgZm9yIChsZXQgaWQgaW4gc3BlY2lhbGl0eUlkQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBzcGVjaWFsaXR5LmlkLnB1c2gocGFyc2VJbnQoc3BlY2lhbGl0eUlkQXJyYXlbaWRdKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVPUERDcml0ZXJpYSgncHJvY2VkdXJlc19jYXRlZ29yeScsIHNwZWNpYWxpdHksIHRydWUsIGZpbHRlcnMpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL29wZC9zZWFyY2hyZXN1bHRzJylcbiAgICAgICAgICAgIH0sIDEwMClcblxuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6IG9mZmVyLmV2ZW50X25hbWUsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50Jzogb2ZmZXIuZXZlbnRfbmFtZSwgJ2NsaWNrZWRPbic6IG9mZmVyLnNsaWRlcl9sb2NhdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKG9mZmVyLnVybF9kZXRhaWxzICYmIG9mZmVyLnVybF9kZXRhaWxzLmNvbmRpdGlvbnMgJiYgb2ZmZXIudXJsX2RldGFpbHMuY29uZGl0aW9ucyAhPSAnJykge1xuICAgICAgICAgICAgbGV0IHNwZWNpYWxpdHkgPSB7fVxuXG4gICAgICAgICAgICBsZXQgZmlsdGVycyA9IHsgJ3ByaWNlUmFuZ2UnOiBbb2ZmZXIudXJsX2RldGFpbHMubWluX2ZlZXMsIG9mZmVyLnVybF9kZXRhaWxzLm1heF9mZWVzXSwgJ2Rpc3RhbmNlUmFuZ2UnOiBbb2ZmZXIudXJsX2RldGFpbHMubWluX2Rpc3RhbmNlLCBvZmZlci51cmxfZGV0YWlscy5tYXhfZGlzdGFuY2VdLCAnc29ydF9vbic6IG9mZmVyLnVybF9kZXRhaWxzLnNvcnRfb24gfHwgJycsICdpc19mZW1hbGUnOiBvZmZlci51cmxfZGV0YWlscy5pc19mZW1hbGUgfHwgZmFsc2UsICdpc19hdmFpbGFibGUnOiBvZmZlci51cmxfZGV0YWlscy5pc19hdmFpbGFibGUgfHwgZmFsc2UsICdkb2N0b3JfbmFtZSc6IG9mZmVyLnVybF9kZXRhaWxzLmRvY3Rvcl9uYW1lIHx8ICcnLCAnaG9zcGl0YWxfbmFtZSc6IG9mZmVyLnVybF9kZXRhaWxzLmhvc3BpdGFsX25hbWUgfHwgJycsICdob3NwaXRhbF9pZCc6IG9mZmVyLnVybF9kZXRhaWxzLmhvc3BpdGFsX2lkIHx8ICcnIH1cblxuICAgICAgICAgICAgc3BlY2lhbGl0eS50eXBlID0gJ2NvbmRpdGlvbidcbiAgICAgICAgICAgIHNwZWNpYWxpdHkuaWQgPSBbXVxuXG4gICAgICAgICAgICBsZXQgc3BlY2lhbGl0eUlkQXJyYXkgPSBvZmZlci51cmxfZGV0YWlscy5jb25kaXRpb25zLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpZCBpbiBzcGVjaWFsaXR5SWRBcnJheSkge1xuICAgICAgICAgICAgICAgIHNwZWNpYWxpdHkuaWQucHVzaChwYXJzZUludChzcGVjaWFsaXR5SWRBcnJheVtpZF0pKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZU9QRENyaXRlcmlhKCdjb25kaXRpb24nLCBzcGVjaWFsaXR5LCB0cnVlLCBmaWx0ZXJzKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9vcGQvc2VhcmNocmVzdWx0cycpXG4gICAgICAgICAgICB9LCAxMDApXG5cbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiBvZmZlci5ldmVudF9uYW1lLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6IG9mZmVyLmV2ZW50X25hbWUsICdjbGlja2VkT24nOiBvZmZlci5zbGlkZXJfbG9jYXRpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmIChvZmZlci51cmxfZGV0YWlscyAmJiBvZmZlci51cmxfZGV0YWlscy5ob3NwaXRhbF9pZCAmJiBvZmZlci51cmxfZGV0YWlscy5ob3NwaXRhbF9pZCAhPSAnJykge1xuICAgICAgICAgICAgbGV0IHNwZWNpYWxpdHkgPSB7fVxuXG4gICAgICAgICAgICBsZXQgZmlsdGVycyA9IHsgJ3ByaWNlUmFuZ2UnOiBbb2ZmZXIudXJsX2RldGFpbHMubWluX2ZlZXMsIG9mZmVyLnVybF9kZXRhaWxzLm1heF9mZWVzXSwgJ2Rpc3RhbmNlUmFuZ2UnOiBbb2ZmZXIudXJsX2RldGFpbHMubWluX2Rpc3RhbmNlLCBvZmZlci51cmxfZGV0YWlscy5tYXhfZGlzdGFuY2VdLCAnc29ydF9vbic6IG9mZmVyLnVybF9kZXRhaWxzLnNvcnRfb24gfHwgJycsICdpc19mZW1hbGUnOiBvZmZlci51cmxfZGV0YWlscy5pc19mZW1hbGUgfHwgZmFsc2UsICdpc19hdmFpbGFibGUnOiBvZmZlci51cmxfZGV0YWlscy5pc19hdmFpbGFibGUgfHwgZmFsc2UsICdkb2N0b3JfbmFtZSc6IG9mZmVyLnVybF9kZXRhaWxzLmRvY3Rvcl9uYW1lIHx8ICcnLCAnaG9zcGl0YWxfbmFtZSc6IG9mZmVyLnVybF9kZXRhaWxzLmhvc3BpdGFsX25hbWUgfHwgJycsICdob3NwaXRhbF9pZCc6IG9mZmVyLnVybF9kZXRhaWxzLmhvc3BpdGFsX2lkIHx8ICcnIH1cblxuICAgICAgICAgICAgc3BlY2lhbGl0eS50eXBlID0gJ3NwZWNpYWxpdHknXG4gICAgICAgICAgICBzcGVjaWFsaXR5LmlkID0gW11cblxuICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVPUERDcml0ZXJpYSgnc3BlY2lhbGl0eScsIHNwZWNpYWxpdHksIHRydWUsIGZpbHRlcnMpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL29wZC9zZWFyY2hyZXN1bHRzJylcbiAgICAgICAgICAgIH0sIDEwMClcblxuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6IG9mZmVyLmV2ZW50X25hbWUsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50Jzogb2ZmZXIuZXZlbnRfbmFtZSwgJ2NsaWNrZWRPbic6IG9mZmVyLnNsaWRlcl9sb2NhdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKG9mZmVyLnVybCkge1xuXG4gICAgICAgICAgICBpZiAob2ZmZXIudXJsLnN0YXJ0c1dpdGgoJ2h0dHAnKSkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKG9mZmVyLnVybCwgJ19ibGFuaycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChvZmZlci51cmwpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiBvZmZlci5ldmVudF9uYW1lLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6IG9mZmVyLmV2ZW50X25hbWUsICdjbGlja2VkT24nOiBvZmZlci5zbGlkZXJfbG9jYXRpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIFxuICAgICAgICB9ZWxzZSBpZihvZmZlci5pZCkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6IG9mZmVyLmV2ZW50X25hbWUsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50Jzogb2ZmZXIuZXZlbnRfbmFtZSwgJ2NsaWNrZWRPbic6IG9mZmVyLnNsaWRlcl9sb2NhdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGB0ZXJtcy1jb25kaXRpb25zLyR7b2ZmZXIuaWR9YCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblRvdWNoU3RhcnQoZXZlbnQpIHtcbiAgICAgICAgbGV0IHRvdWNob2JqID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgIHRoaXMuc3RhdGUuc3RhcnRYID0gdG91Y2hvYmoucGFnZVg7XG4gICAgICAgIHRoaXMuc3RhdGUuc3RhcnRZID0gdG91Y2hvYmoucGFnZVk7XG4gICAgICAgIGxldCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgIH1cblxuICAgIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgICAgIGxldCB0b3VjaG9iaiA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICB0aGlzLnN0YXRlLmRpc3RYID0gdG91Y2hvYmoucGFnZVggLSB0aGlzLnN0YXRlLnN0YXJ0WDtcbiAgICAgICAgdGhpcy5zdGF0ZS5kaXN0WSA9IHRvdWNob2JqLnBhZ2VZIC0gdGhpcy5zdGF0ZS5zdGFydFk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnN0YXJ0WCAtIHRvdWNob2JqLnBhZ2VYID4gNSB8fCB0b3VjaG9iai5wYWdlWCAtIHRoaXMuc3RhdGUuc3RhcnRYID4gNSkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KVxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Ub3VjaEVuZChldmVudCkge1xuICAgICAgICBsZXQgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgICAgbGV0IHRvdWNob2JqID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF1cbiAgICAgICAgbGV0IHRvdGFsT2ZmZXJzID0gJydcbiAgICAgICAgbGV0IGN1cnJfaW5kZXhcbiAgICAgICAgdGhpcy5zdGF0ZS5kaXN0WCA9IHRvdWNob2JqLnBhZ2VYIC0gdGhpcy5zdGF0ZS5zdGFydFhcbiAgICAgICAgdGhpcy5zdGF0ZS5kaXN0WSA9IHRvdWNob2JqLnBhZ2VZIC0gdGhpcy5zdGF0ZS5zdGFydFlcbiAgICAgICAgbGV0IGVsYXBzZWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydFRpbWVcbiAgICAgICAgbGV0IGZpbHRlcmVkQmFubmVycyA9IHRoaXMuZ2V0RmlsdGVyZWRCYW5uZXJzKCk7XG4gICAgICAgIGlmIChlbGFwc2VkVGltZSA8PSA0MDApIHtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh0aGlzLnN0YXRlLmRpc3RYKSA+PSA1MCAmJiBNYXRoLmFicyh0aGlzLnN0YXRlLmRpc3RZKSA8PSAxMDApIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5kaXN0WCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2xpZGVyTG9jYXRpb24gJiYgZmlsdGVyZWRCYW5uZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbE9mZmVycyA9IGZpbHRlcmVkQmFubmVycy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyX2luZGV4ID0gdGhpcy5zdGF0ZS5pbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vycl9pbmRleCA9IGN1cnJfaW5kZXggKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3Vycl9pbmRleCA+PSB0b3RhbE9mZmVycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJfaW5kZXggPSAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW5kZXg6IGN1cnJfaW5kZXgsIGludGVydmFsRmxhZzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNsaWRlckxvY2F0aW9uICYmIGZpbHRlcmVkQmFubmVycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxPZmZlcnMgPSBmaWx0ZXJlZEJhbm5lcnMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vycl9pbmRleCA9IHRoaXMuc3RhdGUuaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJfaW5kZXggPSBjdXJyX2luZGV4IC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJfaW5kZXggPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vycl9pbmRleCA9IHRvdGFsT2ZmZXJzIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGluZGV4OiBjdXJyX2luZGV4LCBpbnRlcnZhbEZsYWc6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRGaWx0ZXJlZEJhbm5lcnMoKSB7XG4gICAgICAgIGxldCBmaWx0ZXJlZE9mZmVycyA9IFtdXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9mZmVyTGlzdCkge1xuICAgICAgICAgICAgZmlsdGVyZWRPZmZlcnMgPSB0aGlzLnByb3BzLm9mZmVyTGlzdC5maWx0ZXIoeCA9PiB4LnNsaWRlcl9sb2NhdGlvbiA9PT0gdGhpcy5wcm9wcy5zbGlkZXJMb2NhdGlvbik7XG4gICAgICAgICAgICBmaWx0ZXJlZE9mZmVycyA9IGZpbHRlcmVkT2ZmZXJzLmZpbHRlcihvZmZlciA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNob3dfYmFubmVyID0gZmFsc2VcbiAgICAgICAgICAgICAgICBsZXQgZmlsdGVyX3Nob3dfYmFubmVyID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGlmIChvZmZlci51cmxfcGFyYW1zX2luY2x1ZGVkICYmIE9iamVjdC52YWx1ZXMob2ZmZXIudXJsX3BhcmFtc19pbmNsdWRlZCkubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9DaGVjayBmb3IgZmlsdGVyZWQgdmFsdWVzXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcyAmJiB0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLm1hcCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9mZmVyLnVybF9wYXJhbXNfaW5jbHVkZWRbJ3NwZWNpYWxpemF0aW9ucyddICYmIG9mZmVyLnVybF9wYXJhbXNfaW5jbHVkZWRbJ3NwZWNpYWxpemF0aW9ucyddLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZmVyLnVybF9wYXJhbXNfaW5jbHVkZWRbJ3NwZWNpYWxpemF0aW9ucyddLm1hcCgoc3BlY2lhbGl0eSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BlY2lhbGl0eSA9PSBkYXRhLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93X2Jhbm5lciA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMgJiYgdGhpcy5wcm9wcy5jdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMubWFwKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2ZmZXIudXJsX3BhcmFtc19pbmNsdWRlZFsndGVzdF9pZHMnXSAmJiBvZmZlci51cmxfcGFyYW1zX2luY2x1ZGVkWyd0ZXN0X2lkcyddLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZmVyLnVybF9wYXJhbXNfaW5jbHVkZWRbJ3Rlc3RfaWRzJ10ubWFwKCh0ZXN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXN0ID09IGRhdGEuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dfYmFubmVyID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAvL0NoZWNrIEJhbm5lcnMgZm9yIGZpbHRlcnNcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmZpbHRlckNyaXRlcmlhICYmIE9iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuZmlsdGVyQ3JpdGVyaWEpLm1hcCgoZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZSA9IGRhdGFbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09ICdwcmljZVJhbmdlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvZmZlci51cmxfcGFyYW1zX2luY2x1ZGVkWydtaW5fZmVlcyddICYmIG9mZmVyLnVybF9wYXJhbXNfaW5jbHVkZWRbJ21pbl9mZWVzJ10gPCBkYXRhWzFdWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcl9zaG93X2Jhbm5lciA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvZmZlci51cmxfcGFyYW1zX2luY2x1ZGVkWydtYXhfZmVlcyddICYmIG9mZmVyLnVybF9wYXJhbXNfaW5jbHVkZWRbJ21heF9mZWVzJ10gPiBkYXRhWzFdWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcl9zaG93X2Jhbm5lciA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09ICdkaXN0YW5jZVJhbmdlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvZmZlci51cmxfcGFyYW1zX2luY2x1ZGVkWydtaW5fZGlzdGFuY2UnXSAmJiBvZmZlci51cmxfcGFyYW1zX2luY2x1ZGVkWydtaW5fZGlzdGFuY2UnXSA8IGRhdGFbMV1bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyX3Nob3dfYmFubmVyID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9mZmVyLnVybF9wYXJhbXNfaW5jbHVkZWRbJ21heF9kaXN0YW5jZSddICYmIG9mZmVyLnVybF9wYXJhbXNfaW5jbHVkZWRbJ21heF9kaXN0YW5jZSddID4gZGF0YVsxXVsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJfc2hvd19iYW5uZXIgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSAnc29ydF9vbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2ZmZXIudXJsX3BhcmFtc19pbmNsdWRlZFsnc29ydF9vbiddICYmIG9mZmVyLnVybF9wYXJhbXNfaW5jbHVkZWRbJ3NvcnRfb24nXS5pbmNsdWRlcyhkYXRhWzFdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJfc2hvd19iYW5uZXIgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID0gJ2xhYl9uYW1lJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvZmZlci51cmxfcGFyYW1zX2luY2x1ZGVkWydsYWJfbmFtZSddICYmIG9mZmVyLnVybF9wYXJhbXNfaW5jbHVkZWRbJ2xhYl9uYW1lJ10uaW5jbHVkZXMoZGF0YVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyX3Nob3dfYmFubmVyID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9ICduZXR3b3JrX2lkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvZmZlci51cmxfcGFyYW1zX2luY2x1ZGVkWyduZXR3b3JrX2lkJ10gJiYgb2ZmZXIudXJsX3BhcmFtc19pbmNsdWRlZFsnbmV0d29ya19pZCddICE9IGRhdGFbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyX3Nob3dfYmFubmVyID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPSAnaXNfYXZhaWxhYmxlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvZmZlci51cmxfcGFyYW1zX2luY2x1ZGVkWydpc19hdmFpbGFibGUnXSAmJiBvZmZlci51cmxfcGFyYW1zX2luY2x1ZGVkWydpc19hdmFpbGFibGUnXSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcl9zaG93X2Jhbm5lciA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPSAnaXNfZmVtYWxlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvZmZlci51cmxfcGFyYW1zX2luY2x1ZGVkWydpc19mZW1hbGUnXSAmJiBvZmZlci51cmxfcGFyYW1zX2luY2x1ZGVkWydpc19mZW1hbGUnXSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcl9zaG93X2Jhbm5lciA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAob2ZmZXIudXJsX3BhcmFtc19leGNsdWRlZCAmJiBPYmplY3QudmFsdWVzKG9mZmVyLnVybF9wYXJhbXNfZXhjbHVkZWQpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzICYmIHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMubWFwKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2ZmZXIudXJsX3BhcmFtc19leGNsdWRlZFsnc3BlY2lhbGl6YXRpb25zJ10gJiYgb2ZmZXIudXJsX3BhcmFtc19leGNsdWRlZFsnc3BlY2lhbGl6YXRpb25zJ10ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2ZmZXIudXJsX3BhcmFtc19leGNsdWRlZFsnc3BlY2lhbGl6YXRpb25zJ10ubWFwKChzcGVjaWFsaXR5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcGVjaWFsaXR5ID09IGRhdGEuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dfYmFubmVyID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dfYmFubmVyID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMgJiYgdGhpcy5wcm9wcy5jdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMubWFwKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2ZmZXIudXJsX3BhcmFtc19leGNsdWRlZFsndGVzdF9pZHMnXSAmJiBvZmZlci51cmxfcGFyYW1zX2V4Y2x1ZGVkWyd0ZXN0X2lkcyddLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZmVyLnVybF9wYXJhbXNfZXhjbHVkZWRbJ3Rlc3RfaWRzJ10ubWFwKCh0ZXN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXN0ID09IGRhdGEuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dfYmFubmVyID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dfYmFubmVyID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5maWx0ZXJDcml0ZXJpYSAmJiBPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLmZpbHRlckNyaXRlcmlhKS5tYXAoKGRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGUgPSBkYXRhWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PSAncHJpY2VSYW5nZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2ZmZXIudXJsX3BhcmFtc19leGNsdWRlZFsnbWluX2ZlZXMnXSAmJiBvZmZlci51cmxfcGFyYW1zX2V4Y2x1ZGVkWydtaW5fZmVlcyddID49IGRhdGFbMV1bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyX3Nob3dfYmFubmVyID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9mZmVyLnVybF9wYXJhbXNfZXhjbHVkZWRbJ21heF9mZWVzJ10gJiYgb2ZmZXIudXJsX3BhcmFtc19leGNsdWRlZFsnbWF4X2ZlZXMnXSA8PSBkYXRhWzFdWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcl9zaG93X2Jhbm5lciA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09ICdkaXN0YW5jZVJhbmdlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvZmZlci51cmxfcGFyYW1zX2V4Y2x1ZGVkWydtaW5fZGlzdGFuY2UnXSAmJiBvZmZlci51cmxfcGFyYW1zX2V4Y2x1ZGVkWydtaW5fZGlzdGFuY2UnXSA+PSBkYXRhWzFdWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcl9zaG93X2Jhbm5lciA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvZmZlci51cmxfcGFyYW1zX2V4Y2x1ZGVkWydtYXhfZGlzdGFuY2UnXSAmJiBvZmZlci51cmxfcGFyYW1zX2V4Y2x1ZGVkWydtYXhfZGlzdGFuY2UnXSA8PSBkYXRhWzFdWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcl9zaG93X2Jhbm5lciA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09ICdzb3J0X29uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvZmZlci51cmxfcGFyYW1zX2V4Y2x1ZGVkWydzb3J0X29uJ10gJiYgb2ZmZXIudXJsX3BhcmFtc19leGNsdWRlZFsnc29ydF9vbiddLmluY2x1ZGVzKGRhdGFbMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcl9zaG93X2Jhbm5lciA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID0gJ2xhYl9uYW1lJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvZmZlci51cmxfcGFyYW1zX2V4Y2x1ZGVkWydsYWJfbmFtZSddICYmIG9mZmVyLnVybF9wYXJhbXNfZXhjbHVkZWRbJ2xhYl9uYW1lJ10uaW5jbHVkZXMoZGF0YVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyX3Nob3dfYmFubmVyID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPSAnbmV0d29ya19pZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2ZmZXIudXJsX3BhcmFtc19leGNsdWRlZFsnbmV0d29ya19pZCddICYmIG9mZmVyLnVybF9wYXJhbXNfZXhjbHVkZWRbJ25ldHdvcmtfaWQnXSA9PSBkYXRhWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcl9zaG93X2Jhbm5lciA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID0gJ2lzX2F2YWlsYWJsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2ZmZXIudXJsX3BhcmFtc19leGNsdWRlZFsnaXNfYXZhaWxhYmxlJ10gJiYgb2ZmZXIudXJsX3BhcmFtc19leGNsdWRlZFsnaXNfYXZhaWxhYmxlJ10gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJfc2hvd19iYW5uZXIgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9ICdpc19mZW1hbGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9mZmVyLnVybF9wYXJhbXNfZXhjbHVkZWRbJ2lzX2ZlbWFsZSddICYmIG9mZmVyLnVybF9wYXJhbXNfZXhjbHVkZWRbJ2lzX2ZlbWFsZSddID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyX3Nob3dfYmFubmVyID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dfYmFubmVyID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJfc2hvd19iYW5uZXIgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBzaG93X2Jhbm5lciAmJiBmaWx0ZXJfc2hvd19iYW5uZXJcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkT2ZmZXJzXG4gICAgfVxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgZmlsdGVyZWRCYW5uZXJzID0gdGhpcy5nZXRGaWx0ZXJlZEJhbm5lcnMoKTtcbiAgICAgICAgbGV0IG9mZmVyVmlzaWJsZSA9IGZpbHRlcmVkQmFubmVyc1t0aGlzLnN0YXRlLmluZGV4XVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5zbGlkZXJMb2NhdGlvbiA9PSAnaG9tZV9wYWdlJyB8fCB0aGlzLnByb3BzLnNsaWRlckxvY2F0aW9uID09ICdvbmxpbmVfY29uc3VsdGF0aW9uJyB8fCB0aGlzLnByb3BzLnNsaWRlckxvY2F0aW9uID09ICdtZWRpY2luZV9kZXRhaWxfcGFnZScgfHwgKGZpbHRlcmVkQmFubmVycyAmJiBmaWx0ZXJlZEJhbm5lcnMubGVuZ3RoID09IDEpIHx8ICFmaWx0ZXJlZEJhbm5lcnMgPyAnJyA6ICdiYW5uZXItbWFyZ2luLXRhcCd9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zbGlkZXJMb2NhdGlvbiA9PT0gXCJtZWRpY2luZV9kZXRhaWxfcGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/PGRpdiBjbGFzc05hbWU9XCJtZWRpYy1pbWctc2xpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZEJhbm5lcnMgJiYgZmlsdGVyZWRCYW5uZXJzLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZEJhbm5lcnMubWFwKChvZmZlciwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8aW1nIGtleT17aX0gc3JjPXtvZmZlci5pbWFnZX0gb25DbGljaz17KCkgPT4gdGhpcy5uYXZpZ2F0ZVRvKG9mZmVyKX0gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgOnRoaXMucHJvcHMuc2xpZGVyTG9jYXRpb249PSdob21lX3BhZ2UnP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyLWNvbnRhaW5lciBibm5yRm9yQ292aXZkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkQmFubmVycyAmJiBmaWx0ZXJlZEJhbm5lcnMubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZEJhbm5lcnMubWFwKChvZmZlciwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGEga2V5PXtvZmZlci5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcga2V5PXtpfSBzcmM9e29mZmVyLmltYWdlfSBvbkNsaWNrPXsoKSA9PiB0aGlzLm5hdmlnYXRlVG8ob2ZmZXIpfSBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319IGFsdD1cImJhbm5lckxvZ29Eb2NwcmltZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDo8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBjb2RlIGZvciBiYW5uZXIgY2Fyb3VzZWwgKHZpc2libGUgb25seSBvbiBkZXNrdG9wKSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5oaWRlQ2xhc3MgPyBgYmFubmVyLWNhcm91c2VsLWRpdiAgbXJiLTEwIGQtbm9uZSAke3RoaXMucHJvcHMuaGlkZUNsYXNzfWAgOiBgYmFubmVyLWNhcm91c2VsLWRpdiBtcmItMTAgZC1ub25lIGQtbWQtYmxvY2sgbmV3LWhvbWUtYmFubmVyYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZmVyVmlzaWJsZSAmJiBPYmplY3QudmFsdWVzKG9mZmVyVmlzaWJsZSkubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17b2ZmZXJWaXNpYmxlLmltYWdlfSBvblRvdWNoU3RhcnQ9e3RoaXMub25Ub3VjaFN0YXJ0LmJpbmQodGhpcyl9IG9uVG91Y2hNb3ZlPXt0aGlzLm9uVG91Y2hNb3ZlLmJpbmQodGhpcyl9IG9uVG91Y2hFbmQ9e3RoaXMub25Ub3VjaEVuZC5iaW5kKHRoaXMpfSBvbkNsaWNrPXsoKSA9PiB0aGlzLm5hdmlnYXRlVG8ob2ZmZXJWaXNpYmxlKX0gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZEJhbm5lcnMgJiYgZmlsdGVyZWRCYW5uZXJzLmxlbmd0aCA+IDEgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaW5kaWNhdG9ycyBtcnQtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRCYW5uZXJzICYmIGZpbHRlcmVkQmFubmVycy5tYXAoKG9mZmVyLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGtleT17aX0gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGluZGV4OiBpIH0pfSBjbGFzc05hbWU9e3RoaXMuc3RhdGUuaW5kZXggPT0gaSA/IFwiaW5kaWNhdG9yLXNlbGVjdGVkXCIgOiAnJ30gPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIGNvZGUgZm9yIGJhbm5lciBzbGlkZXIgKHZpc2libGUgb25seSBvbiBtb2JpbGUgc2NyZWVuKSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2hhdFBhZ2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLW1kLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkQmFubmVycyAmJiBmaWx0ZXJlZEJhbm5lcnMubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHt0aGlzLnByb3BzLmlwZCA/ICdpcGQtYmFubmVyLW1ibCcgOiB0aGlzLnByb3BzLnNsaWRlckxvY2F0aW9uID09ICdob21lX3BhZ2UnIHx8IHRoaXMucHJvcHMuc2xpZGVyTG9jYXRpb24gPT0gJ29ubGluZV9jb25zdWx0YXRpb24nID8naG9tZS1iYW5uZXItcG9zJzogJ2lubmVyLWJhbm5lci1wb3MnfSAke2ZpbHRlcmVkQmFubmVycy5sZW5ndGggPT0gMSA/IGBiYW5uZXItaG9tZS1zY3JvbGxhYmxlIG1ydC0yMCBtcmItMjAgJHt0aGlzLnByb3BzLnNsaWRlckxvY2F0aW9uID09ICdob21lX3BhZ2UnPydzaW5nbGUtYmFubmVyLWRpdic6Jyd9YCA6IGBiYW5uZXItaG9tZS1zY3JvbGxhYmxlIG1ydC0yMCBtcmItMjAgcGQtbHQtMTVgfWB9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkQmFubmVycy5tYXAoKGJhbm5lciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8aW1nIGtleT17aW5kZXh9IHNyYz17YmFubmVyLmltYWdlfSBvbkNsaWNrPXsoKSA9PiB0aGlzLm5hdmlnYXRlVG8oYmFubmVyKX0gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcid9fSBjbGFzc05hbWU9e2ZpbHRlcmVkQmFubmVycy5sZW5ndGggPT0gMSA/IGBzbmdsLWJhbm5lcmAgOiBgbWx0cGwtYmFubmVyYH0gbG9hZGluZz1cImxhenlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFubmVyQ2Fyb3VzZWwiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBSZWNlbnRBcnRpY2xlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGVkLWFydGljbGUtc3ViXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGVkLWFydGljbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1yYi0xMFwiPnt0aGlzLnByb3BzLnJlY2VudEFydGljbGVUaXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJyZWxhdGVkLWFydGljbGVzLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlY2VudEFydGljbGVzSXRlbXMubWFwKChhcnRpY2xlLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnRpY2xlLnVybC5zdGFydHNXaXRoKFwiaHR0cFwiKSB8fCBhcnRpY2xlLnVybC5zdGFydHNXaXRoKFwiL1wiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxhIGhyZWY9e2FydGljbGUudXJsfSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtcmItNVwiPnthcnRpY2xlLnRpdGxlfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGEgaHJlZj17Jy8nICsgYXJ0aWNsZS51cmx9IGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1yYi01XCI+e2FydGljbGUudGl0bGV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjZW50QXJ0aWNsZXMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBSZWxhdGVkQXJ0aWNsZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRlZC1hcnRpY2xlXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1yYi0xMFwiPnt0aGlzLnByb3BzLmxpbmtlZEFydGljbGUuY29udGVudF9ib3hfdGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJyZWxhdGVkLWFydGljbGVzLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5saW5rZWRBcnRpY2xlLnVybHMubWFwKChhcnRpY2xlLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFydGljbGUudXJsLnN0YXJ0c1dpdGgoXCJodHRwXCIpIHx8IGFydGljbGUudXJsLnN0YXJ0c1dpdGgoXCIvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8YSBocmVmPXthcnRpY2xlLnVybH0ga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtcmItNVwiPnthcnRpY2xlLnRpdGxlfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8YSBocmVmPXsnLycgKyBhcnRpY2xlLnVybH0ga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtcmItNVwiPnthcnRpY2xlLnRpdGxlfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWxhdGVkQXJ0aWNsZXMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBUYWJsZU9mQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgeyBhYm91dF90ZXN0LCB3aHlfZ2V0X3Rlc3RlZCwgdGVzdF9tYXlfaW5jbHVkZSwgdGhpc19wYWNrYWdlX3dpbGxfaW5jbHVkZSwgcHJlcGFyYXRpb25zLCBmYXFzIH0gPSB0aGlzLnByb3BzLnNlYXJjaFRlc3RJbmZvRGF0YVxuICAgICAgICBsZXQgcmVzcF90ZXN0X2lkID0gdGhpcy5wcm9wcy5yZXNwX3Rlc3RfaWRcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCB0YWJsZS1vZi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJiLTEwXCI+VGFibGUgb2YgQ29udGVudDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInJlbGF0ZWQtYXJ0aWNsZXMtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFib3V0X3Rlc3QgJiYgYWJvdXRfdGVzdC52YWx1ZSAmJiBhYm91dF90ZXN0LnRpdGxlP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2Fib3V0LXRlc3RcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnVwZGF0ZVRhYnNWYWx1ZXMoJ2Fib3V0X3Rlc3RfJyArIHJlc3BfdGVzdF9pZCl9PjxsaSBjbGFzc05hbWU9XCJtcmItNVwiPnthYm91dF90ZXN0LnRpdGxlfTwvbGk+PC9hPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2h5X2dldF90ZXN0ZWQgJiYgd2h5X2dldF90ZXN0ZWQudmFsdWUgJiYgd2h5X2dldF90ZXN0ZWQudGl0bGU/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjd2h5LWdldC10ZXN0ZWRcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnVwZGF0ZVRhYnNWYWx1ZXMoJ3doeV9nZXRfdGVzdGVkXycgKyByZXNwX3Rlc3RfaWQpfT48bGkgY2xhc3NOYW1lPVwibXJiLTVcIj57d2h5X2dldF90ZXN0ZWQudGl0bGV9PC9saT48L2E+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXN0X21heV9pbmNsdWRlICYmIHRlc3RfbWF5X2luY2x1ZGUudGl0bGUgJiYgdGVzdF9tYXlfaW5jbHVkZS52YWx1ZSAmJiAgdGVzdF9tYXlfaW5jbHVkZS52YWx1ZS5sZW5ndGggPiAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiN0ZXN0LWluY2x1ZGVzXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy51cGRhdGVUYWJzVmFsdWVzKCd0ZXN0X2luY2x1ZGVfJyArIHJlc3BfdGVzdF9pZCl9PjxsaSBjbGFzc05hbWU9XCJtcmItNVwiPnt0ZXN0X21heV9pbmNsdWRlLnRpdGxlfTwvbGk+PC9hPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc19wYWNrYWdlX3dpbGxfaW5jbHVkZSAmJiB0aGlzX3BhY2thZ2Vfd2lsbF9pbmNsdWRlLnRpdGxlICYmIHRoaXNfcGFja2FnZV93aWxsX2luY2x1ZGUudGVzdHMgJiYgdGhpc19wYWNrYWdlX3dpbGxfaW5jbHVkZS50ZXN0cy5sZW5ndGggPiAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwYWNrYWdlLWluY2x1ZGVzXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy51cGRhdGVUYWJzVmFsdWVzKCd0ZXN0X2luY2x1ZGVfJyArIHJlc3BfdGVzdF9pZCl9PjxsaSBjbGFzc05hbWU9XCJtcmItNVwiPnt0aGlzX3BhY2thZ2Vfd2lsbF9pbmNsdWRlLnRpdGxlfTwvbGk+PC9hPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcGFyYXRpb25zICYmIHByZXBhcmF0aW9ucy50aXRsZSAmJiBwcmVwYXJhdGlvbnMudmFsdWU/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjdGVzdC1wcmVwYXJhdGlvbnNcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnVwZGF0ZVRhYnNWYWx1ZXMoJ3Rlc3RfcHJlcGFyYXRpb25zXycgKyByZXNwX3Rlc3RfaWQpfT48bGkgY2xhc3NOYW1lPVwibXJiLTVcIj57cHJlcGFyYXRpb25zLnRpdGxlfTwvbGk+PC9hPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFxcyAmJiBmYXFzLmxlbmd0aCA+IDAgJiYgZmFxc1swXS50aXRsZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiN0ZXN0LWZhcVwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMudXBkYXRlVGFic1ZhbHVlcygndGVzdF9mYXFfJyArIHJlc3BfdGVzdF9pZCl9PjxsaSBjbGFzc05hbWU9XCJtcmItNVwiPntmYXFzWzBdLnRpdGxlfTwvbGk+PC9hPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGVPZkNvbnRlbnQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBDT0xPUl9DT0RFUyA9IFtcbiAgICAnI2VmOWE5YScsXG4gICAgJyNmNDhmYjEnLFxuICAgICcjY2U5M2Q4JyxcbiAgICAnI2IzOWRkYicsXG4gICAgJyNlNzRjM2MnLFxuICAgICcjOWZhOGRhJyxcbiAgICAnIzkwY2FmOScsXG4gICAgJyM4MWQ0ZmEnLFxuICAgICcjODBkZWVhJyxcbiAgICAnIzgwY2JjNCcsXG4gICAgJyNhNWQ2YTcnLFxuICAgICcjYzVlMWE1JyxcbiAgICAnI2U2ZWU5YycsXG4gICAgJyNmZmY1OWQnLFxuICAgICcjZmZlMDgyJyxcbiAgICAnI2ZmY2M4MCcsXG4gICAgJyNmZmFiOTEnLFxuICAgICcjYmNhYWE0Jyxcbl1cblxuY2xhc3MgSW5pdGlhbHNQaWN0dXJlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGJnQ29sb3I6IENPTE9SX0NPREVTW3RoaXMuc3VtQ2hhcnModGhpcy5wcm9wcy5uYW1lKSAlIENPTE9SX0NPREVTLmxlbmd0aF1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzdW1DaGFycyhzdHIpIHtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzdW0gKz0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VtO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHN0eWxlID0gdGhpcy5wcm9wcy5zdHlsZSB8fCB7fVxuXG4gICAgICAgIGxldCBpbml0aWFsID0gXCJVXCJcbiAgICAgICAgbGV0IG5hbWUgPSB0aGlzLnByb3BzLm5hbWVcbiAgICAgICAgaWYgKG5hbWUgJiYgbmFtZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIG5hbWUgPSBuYW1lLnNwbGl0KCcgJylcbiAgICAgICAgICAgIGlmIChuYW1lWzBdKSB7XG4gICAgICAgICAgICAgICAgaW5pdGlhbCA9IG5hbWVbMF1bMF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuYW1lWzFdKSB7XG4gICAgICAgICAgICAgICAgaW5pdGlhbCArPSBuYW1lWzFdWzBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaGFzX2ltYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17c3R5bGV9IG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGljayB8fCAoKCkgPT4geyB9KX0+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZVsnY29sb3InXSA9IHRoaXMuc3RhdGUuYmdDb2xvclxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9IHN0eWxlPXtzdHlsZX0gb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrIHx8ICgoKSA9PiB7IH0pfT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2luaXRpYWwudG9VcHBlckNhc2UoKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubm90aWZpY2F0aW9uTmV3ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlclJhZGl1czogJzUwJScsIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogJy0ycHgnLCB0b3A6ICctMnB4Jywgd2lkdGg6ICc4cHgnLCBoZWlnaHQ6ICc4cHgnIH19PjwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5pdGlhbHNQaWN0dXJlXG4iLCJpbXBvcnQgSW5pdGlhbHNQaWN0dXJlIGZyb20gJy4vSW5pdGlhbHNQaWN0dXJlJ1xuXG5leHBvcnQgZGVmYXVsdCBJbml0aWFsc1BpY3R1cmUiXSwic291cmNlUm9vdCI6IiJ9