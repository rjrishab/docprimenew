exports.ids = [0];
exports.modules = {

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

var _react = __webpack_require__(/*! react */ "react");

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

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");


class ChatPanel extends _react2.default.Component {
    constructor(props) {
        super(props);

        this.sendPageUrl = () => {
            let data = {
                callback: window.location.pathname.substring(1) + window.location.search.replace(/&/g, '*'),
                template: this.props.msgTemplate ? this.props.msgTemplate : 'common'
            };
            this.props.sendAgentWhatsupPageURL(data).then(resp => {
                setTimeout(() => {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Sent Successfully" });
                }, 500);
            }).catch(e => {
                setTimeout(() => {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Try again!" });
                }, 500);
            });
        };

        let parsedHref = '';
        let is_thyrocare = false;
        if (typeof window == "object") {
            parsedHref = queryString.parse(window.location.search);
            is_thyrocare = parsedHref && parsedHref.utm_source && parsedHref.utm_source.includes('Thyrocare');
        }
        this.state = {
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
    }

    componentDidMount() {
        let parsedHref = '';
        if (typeof window == "object") {
            parsedHref = queryString.parse(window.location.search);
        }

        if (this.props.onRefIpd) {
            this.props.onRefIpd(this);
        }
        if (this.props.selectedLocation) {
            this.sendLocationNotification(this.props.selectedLocation);
        }

        _storage2.default.getAuthToken().then(token => {
            //this.sendUserDetails(this.props.USER)
            token = token || "";
            if (this.props.location.state) {
                this.setState({ token, symptoms: this.props.location.state.symptoms || [], roomId: this.props.location.state.roomId || "" });
            } else {
                this.setState({ token });
            }

            if (this.props.mobilechatview) {
                this.setState({ showChatBlock: true });
            }
        });

        /**
         * Check for static message and hide/show iframe with loader accordingly.
         */
        if (this.props.USER && (this.props.USER.liveChatStarted || this.props.USER.ipd_chat && this.props.USER.ipd_chat.showIpdChat)) {
            this.setState({ showStaticView: false, iframeLoading: true }, () => {
                this.setState({ hideIframe: false }, () => {
                    let iframe = this.refs.chat_frame;
                    if (iframe) {
                        iframe.onload = () => {
                            this.setState({ iframeLoading: false });
                        };
                    } else {
                        this.setState({ iframeLoading: false });
                    }

                    let iframe1 = this.refs.chat_frame1;
                    if (iframe1) {
                        iframe1.onload = () => {
                            this.setState({ iframeLoading: false });
                        };
                    } else {
                        this.setState({ iframeLoading: false });
                    }
                });
            });
        }

        if (typeof window == "object") {
            // handling events sent by iframe
            window.addEventListener('message', function ({ data }) {
                let eventData = data;
                if (data) {
                    switch (data.event) {
                        case "RoomAgent":
                            {
                                this.setState({ selectedRoom: data.data.rid });

                                let analyticData;

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
                                let searchData = {
                                    selectedCriterias: this.props.doctor_search_data.selectedCriterias,
                                    selectedLocation: this.props.doctor_search_data.selectedLocation
                                };
                                searchData = encodeURIComponent(JSON.stringify(searchData));
                                let filterData = encodeURIComponent(JSON.stringify(this.props.doctor_search_data.filterCriteria));
                                this.props.history.push(`/opd/searchresults?search=${searchData}&filter=${filterData}&doctor_name=${""}&hospital_name=${""}`);
                                break;
                            }

                        case "lab_search":
                            {
                                let searchData = {
                                    selectedCriterias: this.props.lab_search_data.selectedCriterias,
                                    selectedLocation: this.props.lab_search_data.selectedLocation
                                };
                                searchData = encodeURIComponent(JSON.stringify(searchData));
                                let filterData = encodeURIComponent(JSON.stringify(this.props.lab_search_data.filterCriteria));
                                this.props.history.push(`/lab/searchresults?search=${searchData}&filter=${filterData}`);
                                break;
                            }

                        case "chat_loaded":
                            {
                                if (data.data.rid) {
                                    // save current room
                                    let analyticData = {
                                        'Category': 'Chat', 'Action': 'ChatInitialization', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'chat-initialization', 'RoomId': data.data.rid, "url": window.location.pathname
                                    };
                                    _gtm2.default.sendEvent({ data: analyticData });
                                    let extraParams = {};
                                    if (typeof window == "object") {
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
                                    let analyticData = {
                                        'Category': 'Chat', 'Action': 'UserRegisteredviaChat', 'CustomerID': '', 'leadid': 0, 'event': 'user-registered-via-chat', 'RoomId': eventData.data.rid || '', "url": window.location.pathname
                                    };
                                    _gtm2.default.sendEvent({ data: analyticData });
                                    this.props.loginViaChat(data.data["params.token"]);
                                }
                                break;
                            }

                        case "Chat_Close":
                            {
                                // this.props.startLiveChat(false, this.state.selectedLocation)
                                this.setState({ initialMessage: "", selectedRoom: null });
                                if (parsedHref && parsedHref.payment == 'success') {
                                    let buildUrl = this.buildUrl();
                                    this.props.history.replace(buildUrl);
                                }
                                this.props.setChatRoomId(null);
                                let that = this;
                                setTimeout(() => {
                                    that.props.ipdChatView(null);
                                }, 1000);
                                this.props.unSetCommonUtmTags('chat');
                                // this.props.history.go(-1)
                                break;
                            }

                        case "prescription_report":
                            {
                                let analyticData = {
                                    'Category': 'Chat', 'Action': 'PrescriptionGenerated', 'CustomerID': '', 'leadid': 0, 'event': 'prescription-generated', 'RoomId': eventData.rid || '', "url": window.location.pathname
                                };
                                _gtm2.default.sendEvent({ data: analyticData });
                                break;
                            }

                        case 'banner':
                            {

                                if (data.type == 'timer') {
                                    let analyticData = {
                                        'Category': 'Chat', 'Action': 'BannerTimerFired', 'CustomerID': '', 'leadid': 0, 'event': 'banner-timer-fired', 'RoomId': eventData.rid || '', "url": window.location.pathname
                                    };
                                    _gtm2.default.sendEvent({ data: analyticData });
                                } else if (data.type == 'transfer') {
                                    let analyticData = {
                                        'Category': 'Chat', 'Action': 'BannerTransferFired', 'CustomerID': '', 'leadid': 0, 'event': 'banner-transfer-fired', 'RoomId': eventData.rid || '', "url": window.location.pathname
                                    };
                                    _gtm2.default.sendEvent({ data: analyticData });
                                } else if (data.type == 'preventive') {
                                    let analyticData = {
                                        'Category': 'Chat', 'Action': 'PreventiveFired', 'CustomerID': '', 'leadid': 0, 'event': 'preventive-fired', 'RoomId': eventData.rid || '', "url": window.location.pathname
                                    };
                                    _gtm2.default.sendEvent({ data: analyticData });
                                } else if (data.type == 'salesBanner') {
                                    let analyticData = {
                                        'Category': 'Chat', 'Action': 'BannerSalesFired', 'CustomerID': '', 'leadid': 0, 'event': 'banner-sales-fired', 'RoomId': eventData.rid || '', "url": window.location.pathname
                                    };
                                    _gtm2.default.sendEvent({ data: analyticData });
                                }
                                break;
                            }

                        case 'bookNow':
                            {

                                let analyticData = {
                                    'Category': 'Chat', 'Action': 'BookNowFired', 'CustomerID': '', 'leadid': 0, 'event': 'book-now-fired', 'RoomId': eventData.rid || '', "url": window.location.pathname, 'specialization_url': data.url || '', 'ids': data.ids || '', 'type': data.type || ''
                                };
                                _gtm2.default.sendEvent({ data: analyticData });
                                break;
                            }

                        case 'bookNowPharmacy':
                            {
                                let analyticData = {
                                    'Category': 'Chat', 'Action': 'BookNowPharmacyFired', 'CustomerID': '', 'leadid': 0, 'event': 'book-now-pharmacy-fired', 'RoomId': eventData.rid || '', "url": window.location.pathname
                                };
                                _gtm2.default.sendEvent({ data: analyticData });
                                break;
                            }

                        case 'MobileVerification':
                            {
                                let analyticData = {
                                    'Category': 'Chat', 'Action': 'MobileVerificationFired', 'CustomerID': '', 'leadid': 0, 'event': 'mobile-verification-fired', 'RoomId': eventData.rid || '', "url": window.location.pathname
                                };
                                _gtm2.default.sendEvent({ data: analyticData });
                                this.props.setChatRoomId(data.data.rid, { showDisabledPayment: true });
                                break;
                            }

                    }

                    /**
                     * redirecting chat to new page for mobile users on homepage and on focus
                     * TODO : review this
                     */
                    if (data.message && data.message == 'focus' && !(this.props.USER && this.props.USER.ipd_chat && this.props.USER.ipd_chat.showIpdChat)) {
                        let iframe = this.refs.chat_frame;
                        // iframe.scrollTop = iframe.scrollHeight
                        if (this.props.homePage && window.innerWidth < 768 && !this.props.history.location.pathname.includes('mobileviewchat')) {
                            this.props.history.push('/mobileviewchat');
                        }
                    }
                }
            }.bind(this));
        }
    }

    sendPaymentStatusEvent(rid) {
        let parsedHref = '';
        if (typeof window == "object") {
            parsedHref = queryString.parse(window.location.search);
        }
        let data = {
            rid: rid,
            payment_status: parsedHref.payment || ''
        };
        this.dispatchCustomEvent('payment', data);
    }

    componentWillUnmount() {
        if (this.props.onRefIpd) {
            this.props.onRefIpd(undefined);
        }
    }

    sendLocationNotification(selectedLocation) {
        let data = {
            location: selectedLocation.geometry.location,
            locality: selectedLocation.locality,
            city: selectedLocation.name,
            address: selectedLocation.formatted_address
        };

        this.dispatchCustomEvent('location', data);
    }

    sendUserDetails() {
        let data = {};
        setTimeout(() => {
            let user = this.props.USER;
            if (user && user.profiles && Object.keys(user.profiles).length > 0 && user.profiles[user.selectedProfile]) {

                this.dispatchCustomEvent('user_details', { is_insured: user.profiles[user.selectedProfile].is_insured, name: user.profiles[user.selectedProfile].name });
            } else {
                this.dispatchCustomEvent('user_details', { is_insured: false, name: '' });
            }
        }, 1000);
    }

    componentWillReceiveProps(props) {
        let parsedHref = '';
        if (typeof window == "object") {
            parsedHref = queryString.parse(window.location.search);
        }
        let is_thyrocare = parsedHref && parsedHref.utm_source && parsedHref.utm_source.includes('Thyrocare') ? true : false;

        if (this.props.selectedLocation != props.selectedLocation && props.selectedLocation) {
            this.sendLocationNotification(props.selectedLocation);
        }

        if (props.USER && props.USER.liveChatStarted && props.USER.liveChatStarted != this.props.USER.liveChatStarted || props.USER && props.USER.ipd_chat && props.USER.ipd_chat.showIpdChat) {
            //this.sendUserDetails(props.USER)
            this.setState({ showStaticView: false, iframeLoading: true }, () => {
                this.setState({ hideIframe: false }, () => {

                    let iframe = this.refs.chat_frame;
                    if (iframe) {
                        iframe.onload = () => {
                            this.setState({ iframeLoading: false });
                        };
                    } else {
                        this.setState({ iframeLoading: false });
                    }

                    let iframe1 = this.refs.chat_frame1;
                    if (iframe1) {
                        iframe1.onload = () => {
                            this.setState({ iframeLoading: false });
                        };
                    } else {
                        this.setState({ iframeLoading: false });
                    }
                });
            });
        } else {
            if (props.USER && !props.USER.liveChatStarted) {
                this.setState({ showStaticView: is_thyrocare ? false : true, iframeLoading: false });
            }
        }
    }

    dispatchCustomEvent(eventName, data = {}) {
        let event = new Event(eventName);
        let iframe = this.refs.chat_frame;

        if (iframe && iframe.contentWindow) {
            iframe.dispatchEvent(event);
            iframe.contentWindow.postMessage({ 'event': eventName, data }, '*');
        }
        let iframe1 = this.refs.chat_frame1;
        if (iframe1 && iframe1.contentWindow) {
            iframe1.dispatchEvent(event);
            iframe1.contentWindow.postMessage({ 'event': eventName, data }, '*');
        }
    }

    closeChat() {
        let parsedHref = '';
        if (typeof window == "object") {
            parsedHref = queryString.parse(window.location.search);
        }

        _storage2.default.getAuthToken().then(token => {
            token = token || "";
            this.setState({ token, initialMessage: "", selectedRoom: null });
        });
        this.dispatchCustomEvent.call(this, 'close_frame');
        this.setState({ showCancel: !this.state.showCancel });
        if (parsedHref && parsedHref.payment == 'success') {
            let buildUrl = this.buildUrl();
            this.props.history.replace(buildUrl);
        }
        this.props.setChatRoomId(null);
        this.props.unSetCommonUtmTags('chat');
        let that = this;
        setTimeout(() => {
            that.props.ipdChatView(null);
        }, 1000);
    }

    buildUrl() {
        return window.pathname;
    }

    toggleCancel(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({ showCancel: !this.state.showCancel });
    }

    hideStaticChat(data) {
        if (this.props.mobilechatview) {
            this.props.history.go(-1);
        } else {
            this.setState({ showChatBlock: false });
        }
    }

    startLiveChatWithMessage(message) {
        this.setState({ initialMessage: message }, () => {
            this.props.startLiveChat();
        });
    }

    closeChatClick() {
        if (this.props.mobilechatview) {
            this.props.history.go(-1);
        } else {
            this.setState({ showChatBlock: false });
        }
    }

    chatBtnClick() {
        if (this.props.articleData || this.props.searchTestInfoData) {
            this.setState({ showChatBlock: true, additionClasses: "" });
        } else if (this.props.newChatBtn) {
            this.props.history.push('/mobileviewchat?botagent=true&force_start=true');
            let data = {
                'Category': 'Chat', 'Action': 'getHelpBtnClick', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'chat-button-clicked', "url": window.location.pathname
            };
            _gtm2.default.sendEvent({ data: data });
        } else if (this.props.newChatBtnAds && this.props.bookingsGA) {
            this.props.history.push('/mobileviewchat?botagent=true&force_start=true');
            let data = {
                'Category': 'Chat', 'Action': 'getHelpBtnClick', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'chat-button-clicked', "url": window.location.pathname
            };
            _gtm2.default.sendEvent({ data: data });
        }
    }

    newChatBtnClick() {
        if (this.props.type && (this.props.type == 'opd' || this.props.type == 'lab')) {
            this.props.history.push('/mobileviewchat?botagent=true&force_start=true');
            let data = {
                'Category': 'Chat', 'Action': 'needHelpBtnClicked', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'need-help-btn-clicked', "PageType": this.props.type, "url": window.location.pathname
            };
            _gtm2.default.sendEvent({ data: data });
        } else {
            this.setState({ showChatBlock: true, additionClasses: "" });
        }
    }

    onIframeLoad(e) {
        try {
            let target = e.target;
            if (target) {
                (target.contentWindow || target.contentDocument).location.href;
            }
        } catch (error) {
            console.log('error in rendering chat iframe' + error);
        }
    }
    refundClicked(isEnable) {
        if (isEnable) {
            let data = {
                'Category': 'Chat', 'Action': 'RefundBtnClicked', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'Refund-btn-clicked', "PageType": this.props.type, "url": window.location.pathname
            };
            _gtm2.default.sendEvent({ data: data });
            this.toggleRefundPopup();
        } else {
            setTimeout(() => {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "No payment exists for this consultation" });
            }, 200);
        }
    }

    toggleRefundPopup() {
        this.setState({ openRefundPopup: !this.state.openRefundPopup });
    }

    submitRefundReasons(reason) {
        let data = {
            roomId: this.state.roomId,
            reason: reason
        };
        this.dispatchCustomEvent('Refund_Fees', data);
        this.props.setPaymentStatus(null);
        let buildUrl = this.buildUrl();
        this.props.history.replace(buildUrl);
        this.toggleRefundPopup();
    }

    render() {

        return _react2.default.createElement(_react2.default.Fragment, null);
        let doctorData = null;
        if (this.props.USER.chatRoomIds[this.state.selectedRoom]) {
            if (this.props.USER.chatDoctors[this.props.USER.chatRoomIds[this.state.selectedRoom]]) {
                doctorData = this.props.USER.chatDoctors[this.props.USER.chatRoomIds[this.state.selectedRoom]];
            }
        }
        let symptoms_uri = this.state.symptoms.reduce((str, curr) => {
            str += `${curr},`;
            return str;
        }, "");

        if (symptoms_uri) {
            symptoms_uri = encodeURIComponent(symptoms_uri);
        }

        let parsedHref = '';
        if (typeof window == "object") {
            parsedHref = queryString.parse(window.location.search);
        }

        let iframe_url = `${_config2.default.CHAT_URL}?cb=1&token=${this.state.token}&symptoms=${symptoms_uri}&room=${this.state.roomId}&from_app=${parsedHref.from_app || false}&device_id=${parsedHref.device_id || ''}`;

        if (this.state.initialMessage && !this.state.showStaticView) {
            iframe_url += `&msg=${this.state.initialMessage}`;
        }

        let botAgent = false;
        if (this.props.location.search.includes('botagent')) {
            botAgent = true;
            if (this.props.type && this.props.type == 'opd') {
                iframe_url += `&botagent=DocPrimeSOT&source=doctorlistingchatnow`;
            } else if (this.props.newChatBtnAds) {
                iframe_url += `&botagent=DocPrimeSOT&source=leadformchatnow`;
            } else {
                iframe_url += `&botagent=DocPrimeSOT&source=lablistingchatnow`;
            }
        }
        let is_religare = false;
        if (false) {}
        if (parsedHref && parsedHref.utm_source) {

            if (parsedHref.utm_source != 'religare') {
                iframe_url += `&source=${parsedHref.utm_source}`;
            }

            if (!is_religare && parsedHref.utm_source.includes('religare')) {
                is_religare = true;
                iframe_url += `&source=religare&visitid=${parsedHref.visitid ? parsedHref.visitid : ''}`;
            }
        }
        is_religare = is_religare && this.props.mobilechatview;
        let chatBtnContent1 = '';
        let chatBtnContent2 = '';
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

        let recentArticles = false;
        if (this.props.articleData && this.props.articleData.recent_articles) {
            recentArticles = this.props.articleData.recent_articles;
        }

        //if(this.props.showHalfScreenChat && this.props.ipdFormParams) {
        if (this.props.USER && this.props.USER.ipd_chat && this.props.USER.ipd_chat.ipdForm && false) {

            let params = JSON.stringify(this.props.USER.ipd_chat.ipdForm);
            iframe_url += `&product=IPD&params=${params}&msg=startchat`;
        } else {
            iframe_url += '&product=DocPrime';
        }

        if (parsedHref.booking_id) {
            iframe_url += `&booking_id=${parsedHref.booking_id}`;
        }

        if (parsedHref.utm_source && parsedHref.utm_source.includes('Thyrocare')) {
            iframe_url += '&msg=startchat';
        }

        if (parsedHref.payment) {
            iframe_url += `&payment=${parsedHref.payment}`;
        }

        if (parsedHref.order_id) {
            iframe_url += `&order_id=${parsedHref.order_id}`;
        }

        let payment_disable = parsedHref && parsedHref.utm_campaign && parsedHref.utm_campaign.includes('AdDocChat') ? parsedHref.utm_campaign.includes('AdDocChat') : null;

        if (parsedHref.utm_campaign) {
            iframe_url += `&utm_campaign=${parsedHref.utm_campaign}`;
        }

        if (payment_disable) {
            iframe_url += `&testing_mode=a`;
        } else {
            iframe_url += `&testing_mode=b`;
        }

        if (parsedHref && parsedHref.consultation_id) {
            iframe_url += `&consultation_id=${parsedHref.consultation_id}`;
        }

        let is_payment_for_current_room = null;
        let show_disabled_refund_button = null;
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
                _storage2.default.isAgent() || this.state.hideIframe ? "" : _react2.default.createElement('iframe', { className: this.props.homePage ? `chat-iframe ${this.state.iframeLoading ? 'd-none' : ''}` : `chat-iframe-inner float-chat-height ${this.state.iframeLoading ? 'd-none' : ''}`, src: iframe_url, allow: 'microphone;camera', ref: 'chat_frame1' }),
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
                        !!!this.props.chatPage && this.props.offerList && this.props.offerList.filter(x => x.slider_location === 'home_page').length ? _react2.default.createElement(
                            'div',
                            { className: 'home-banner-pos' },
                            _react2.default.createElement(_bannerCarousel2.default, _extends({}, this.props, { sliderLocation: 'home_page' }))
                        ) : ''
                    ) : '',
                     false ? undefined : '',
                    this.state.openRefundPopup && _react2.default.createElement(_ChatRefundReasons2.default, { submitRefund: this.submitRefundReasons.bind(this), toggleRefund: () => this.toggleRefundPopup() }),
                    this.props.homePage || this.props.mobilechatview || this.props.noChatButton || this.props.articleData || this.props.searchTestInfoData ? '' : this.props.newChatBtn || this.props.newChatBtnAds ? _react2.default.createElement(
                        'section',
                        { className: 'chat-article-btn fixed horizontal bottom no-round d-md-none fw-500 text-center', onClick: () => this.chatBtnClick() },
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
                        { className: `${this.state.showChatBlock ? "floating-chat " : ""} ${is_religare ? ' chat-rlgr-view' : ''}` },
                        this.state.showStaticView ? _react2.default.createElement(_ChatStaticView2.default, _extends({}, this.props, { startLiveChatWithMessage: this.startLiveChatWithMessage.bind(this), hideStaticChat: this.hideStaticChat.bind(this), showChatBlock: this.state.showChatBlock, dataClass: this.state.showChatBlock ? "chatbox-right test-chat " : `${this.props.homePage ? 'chatbox-right' : 'chatbox-right chat-slide-down d-lg-flex mt-21'} ${this.props.homePage ? '' : this.state.additionClasses}`, is_religare: is_religare, sendPageUrl: this.sendPageUrl })) : _react2.default.createElement(
                            'div',
                            { className: this.state.showChatBlock ? "chatbox-right test-chat" : `${this.props.homePage ? 'chatbox-right' : 'chatbox-right chat-slide-down d-lg-flex mt-21'} ${this.props.homePage ? '' : this.state.additionClasses}` },
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
                                        { className: `cht-need-btn cursor-pntr mr-2 ${is_payment_for_current_room ? '' : 'disable-all'}`, onClick: () => {
                                                this.refundClicked(is_payment_for_current_room);
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
                                        { className: 'ml-2', onClick: () => this.closeChatClick() },
                                        _react2.default.createElement('img', { className: 'close-chat', style: { width: 26 }, src: "/assets" + "/img/rel_chatminimize.svg" })
                                    ) : _react2.default.createElement(
                                        'span',
                                        { className: 'ml-2', onClick: () => this.closeChatClick() },
                                        _react2.default.createElement('img', { className: 'close-chat', style: { width: 26 }, src: "/assets" + "/img/chatminimize.svg" })
                                    ) : ''
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'chat-body' },
                                _storage2.default.isAgent() || this.state.hideIframe ? "" : _react2.default.createElement('iframe', { className: this.props.homePage ? `chat-iframe ${this.state.iframeLoading ? 'd-none' : ''}` : `chat-iframe-inner float-chat-height ${this.state.iframeLoading ? 'd-none' : ''}`, src: iframe_url, allow: 'microphone;camera', ref: 'chat_frame', onLoad: e => this.onIframeLoad(e), onError: e => this.onIframeLoad(e) }),
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ChatRefundView extends _react2.default.Component {

	constructor(props) {
		super(props);
		this.state = {
			refundReason: '',
			showError: false
		};
	}

	selectReason(reason) {
		this.setState({ refundReason: reason, showError: false });
	}

	submit() {
		if (!this.state.refundReason) {
			this.setState({ showError: true });
		} else {
			this.props.submitRefund(this.state.refundReason);
		}
	}

	render() {

		return _react2.default.createElement(
			_react2.default.Fragment,
			null,
			_react2.default.createElement('div', { className: 'cancel-overlay cancel-overlay-zindex', onClick: e => {
					e.preventDefault();
					e.stopPropagation();
					this.props.toggleRefund();
				} }),
			_react2.default.createElement(
				'div',
				{ className: 'widget cancel-appointment-div cancel-popup overflow-hidden refund-pop font-analyze ', style: { padding: '12px' } },
				_react2.default.createElement('img', { className: 'rfnd-cls-btn', src: "/assets" + '/img/icons/close.png', onClick: e => {
						e.preventDefault();
						e.stopPropagation();
						this.props.toggleRefund();
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
									_react2.default.createElement('input', { type: 'radio', name: 'radio', onChange: () => this.selectReason('Query not addressed properly') }),
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
									_react2.default.createElement('input', { type: 'radio', name: 'radio', onChange: () => this.selectReason('Treatment/Prescription not provided') }),
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
									_react2.default.createElement('input', { type: 'radio', name: 'radio', onChange: () => this.selectReason('Doctor takes too long to respond') }),
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
									_react2.default.createElement('input', { type: 'radio', name: 'radio', onChange: () => this.selectReason('Not happy with overall service') }),
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
									_react2.default.createElement('input', { type: 'radio', name: 'radio', onChange: () => {
											this.selectReason('Others');
										} }),
									_react2.default.createElement('span', { className: 'doc-checkmark hpa-radio hpa-radio-gender' })
								)
							)
						)
					)
				),
				_react2.default.createElement(
					'button',
					{ className: 'rfnd-btn', onClick: () => this.submit() },
					'Initiate Refund'
				)
			)
		);
	}
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(/*! ../../../actions/index */ "./dev/js/actions/index.js");

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");


class ChatStatic extends _react2.default.Component {

    constructor(props) {
        super(props);
        const parsed = queryString.parse(this.props.location.search);
        this.state = {
            value: '',
            openBanner: true,
            utm_term: parsed.utm_term || "",
            BasicEnquiry: parsed.BasicEnquiry || "",
            utm_loader: !!parsed.utm_term,
            force_start: parsed.force_start || false
        };
    }

    componentDidMount() {
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

    inputHandler(e) {
        this.setState({ value: e.target.value });
    }

    handleKeyUp(e) {
        if (e.key === 'Enter') {
            this.props.startLiveChatWithMessage(this.state.value);
        }
    }

    getIframe() {
        this.props.startLiveChatWithMessage(this.state.value || this.state.BasicEnquiry);
    }

    checkOpenMobileChat() {
        // handle static page redirects for homepage
        if (this.props.homePage && window.innerWidth < 768 && !this.props.mobilechatview) {
            this.props.history.push(`/mobileviewchat?BasicEnquiry=${this.state.BasicEnquiry}`);
        } else {
            if (this.state.BasicEnquiry && this.props.homePage) {
                this.getIframe();
            }
            this.setState({ openBanner: false });
        }
    }

    removeUTM() {
        if (this.props.homePage && window.innerWidth < 768 && !this.props.mobilechatview) {
            this.props.history.push(`/mobileviewchat?BasicEnquiry=&force_start=true`);
        } else {
            this.setState({
                utm_term: "",
                BasicEnquiry: "",
                value: ""
            }, () => {
                this.getIframe();
            });
        }
    }

    render() {
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
                                                    `Looks like you need help with ${this.state.BasicEnquiry}
                                                                    Start chat for an instant consultation and absolutely free prescription with our doctors.`,
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
                                        { className: 'toast-close-btn', onClick: () => {
                                                this.setState({ openBanner: false });
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
                                    _react2.default.createElement('textarea', { id: 'cstbox', onFocus: this.checkOpenMobileChat.bind(this), className: 'fc-input', placeholder: ' Type your message... ', value: this.state.value, onChange: this.inputHandler.bind(this), onKeyUp: e => this.handleKeyUp(e) })
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
                    { className: 'toast-close-btn', onClick: () => {
                            this.setState({ openBanner: false });
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = ({ toggle, closeChat, homePage }) => {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('div', { className: `cancel-overlay ${homePage ? 'cancl-homepg-popup' : ''}`, onClick: toggle }),
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
                    { className: 'widget-content cancel-content-div', onClick: () => {
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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _index = __webpack_require__(/*! ../../../actions/index.js */ "./dev/js/actions/index.js");

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _ChatPanel = __webpack_require__(/*! ./ChatPanel */ "./dev/js/components/commons/ChatPanel/ChatPanel.js");

var _ChatPanel2 = _interopRequireDefault(_ChatPanel);

var _RelatedArticles = __webpack_require__(/*! ../article/RelatedArticles */ "./dev/js/components/commons/article/RelatedArticles.js");

var _RelatedArticles2 = _interopRequireDefault(_RelatedArticles);

var _RecentArticles = __webpack_require__(/*! ../article/RecentArticles */ "./dev/js/components/commons/article/RecentArticles.js");

var _RecentArticles2 = _interopRequireDefault(_RecentArticles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ChatPanel extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            ssrFlag: this.props.homePage
        };
    }

    componentDidMount() {
        this.setState({ ssrFlag: true });
    }

    render() {
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
}

const mapStateToProps = (state, passedProps = {}) => {
    const USER = state.USER;
    let DOCTORS = state.DOCTORS;
    let doctor_search_data = {};
    let lab_search_data = {};
    let selectedLocation = state.SEARCH_CRITERIA_OPD.selectedLocation;

    doctor_search_data.selectedCriterias = state.SEARCH_CRITERIA_OPD.selectedCriterias;
    doctor_search_data.selectedLocation = state.SEARCH_CRITERIA_OPD.selectedLocation;
    doctor_search_data.filterCriteria = state.SEARCH_CRITERIA_OPD.filterCriteria;

    lab_search_data.selectedCriterias = state.SEARCH_CRITERIA_LABS.selectedCriterias;
    lab_search_data.selectedLocation = state.SEARCH_CRITERIA_LABS.selectedLocation;
    lab_search_data.filterCriteria = state.SEARCH_CRITERIA_LABS.filterCriteria;

    return _extends({
        USER, DOCTORS, doctor_search_data, lab_search_data }, passedProps, { selectedLocation
    });
};

const mapDispatchToProps = dispatch => {
    return {
        getChatDoctorById: (doctorId, roomId, cb) => dispatch((0, _index.getChatDoctorById)(doctorId, roomId, cb)),
        resetFilters: () => dispatch((0, _index.resetFilters)()),
        clearExtraTests: () => dispatch((0, _index.clearExtraTests)()),
        selectLocation: location => dispatch((0, _index.selectLocation)(location)),
        loginViaChat: token => dispatch((0, _index.loginViaChat)(token)),
        setChatRoomId: (roomId, extraParams) => dispatch((0, _index.setChatRoomId)(roomId, extraParams)),
        startLiveChat: (started, deleteRoomId) => dispatch((0, _index.startLiveChat)(started, deleteRoomId)),
        toggleDiagnosisCriteria: (type, test, forceAdd, filters) => dispatch((0, _index.toggleDiagnosisCriteria)(type, test, forceAdd, filters)),
        toggleOPDCriteria: (type, test, forceAdd, filters) => dispatch((0, _index.toggleOPDCriteria)(type, test, forceAdd, filters)),
        unSetCommonUtmTags: (type, tags) => dispatch((0, _index.unSetCommonUtmTags)(type, tags)),
        ipdChatView: data => dispatch((0, _index.ipdChatView)(data)),
        setPaymentStatus: status => dispatch((0, _index.setPaymentStatus)(status)),
        sendAgentWhatsupPageURL: (extraParams, cb) => dispatch((0, _index.sendAgentWhatsupPageURL)(extraParams, cb))
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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BannerCarousel extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            startX: 0,
            startY: 0,
            distX: 0,
            distY: 0,
            intervalFlag: false,
            intervalId: ''
        };
    }

    componentDidMount() {
        let totalOffers = '';
        let filteredBanners = this.getFilteredBanners();
        if (this.props.sliderLocation && filteredBanners) {
            totalOffers = filteredBanners.length;
            let intervalId = setInterval(() => {
                let curr_index = this.state.index;
                if (this.state.intervalFlag) {
                    curr_index = curr_index + 1;
                    if (curr_index >= totalOffers) {
                        curr_index = 0;
                    }
                }
                this.setState({ index: curr_index, intervalFlag: true });
            }, 5000);
            this.setState({ intervalId });
        }
    }

    componentWillUnmount() {
        try {
            clearInterval(this.state.intervalId);
        } catch (e) {}
    }

    navigateTo(offer) {
        if (offer.url_details && offer.url_details.test_ids) {
            let test = {};

            let filters = { 'priceRange': [offer.url_details.min_fees, offer.url_details.max_fees], 'distanceRange': [offer.url_details.min_distance, offer.url_details.max_distance], 'sort_on': offer.url_details.sort_on || '', 'lab_name': offer.url_details.lab_name || '', 'network_id': offer.url_details.network_id || '' };

            test.type = 'test';
            test.id = [];

            let testIdArray = offer.url_details.test_ids.split(',');
            for (let id in testIdArray) {
                test.id.push(parseInt(testIdArray[id]));
            }

            this.props.toggleDiagnosisCriteria('test', test, true, filters);
            setTimeout(() => {
                this.props.history.push('/lab/searchresults');
            }, 100);

            let data = {
                'Category': 'ConsumerApp', 'Action': offer.event_name, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': offer.event_name, 'clickedOn': offer.slider_location
            };
            _gtm2.default.sendEvent({ data: data });
        } else if (offer.url_details && offer.url_details.specializations && offer.url_details.specializations != '') {
            let speciality = {};

            let filters = { 'priceRange': [offer.url_details.min_fees, offer.url_details.max_fees], 'distanceRange': [offer.url_details.min_distance, offer.url_details.max_distance], 'sort_on': offer.url_details.sort_on || '', 'is_female': offer.url_details.is_female || false, 'is_available': offer.url_details.is_available || false, 'doctor_name': offer.url_details.doctor_name || '', 'hospital_name': offer.url_details.hospital_name || '', 'hospital_id': offer.url_details.hospital_id || '' };

            speciality.type = 'speciality';
            speciality.id = [];

            let specialityIdArray = offer.url_details.specializations.split(',');
            for (let id in specialityIdArray) {
                speciality.id.push(parseInt(specialityIdArray[id]));
            }

            this.props.toggleOPDCriteria('speciality', speciality, true, filters);
            setTimeout(() => {
                this.props.history.push('/opd/searchresults');
            }, 100);

            let data = {
                'Category': 'ConsumerApp', 'Action': offer.event_name, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': offer.event_name, 'clickedOn': offer.slider_location
            };
            _gtm2.default.sendEvent({ data: data });
        } else if (offer.url_details && offer.url_details.procedure_ids && offer.url_details.procedure_ids != '') {
            let speciality = {};

            let filters = { 'priceRange': [offer.url_details.min_fees, offer.url_details.max_fees], 'distanceRange': [offer.url_details.min_distance, offer.url_details.max_distance], 'sort_on': offer.url_details.sort_on || '', 'is_female': offer.url_details.is_female || false, 'is_available': offer.url_details.is_available || false, 'doctor_name': offer.url_details.doctor_name || '', 'hospital_name': offer.url_details.hospital_name || '', 'hospital_id': offer.url_details.hospital_id || '' };

            speciality.type = 'procedures';
            speciality.id = [];

            let specialityIdArray = offer.url_details.procedure_ids.split(',');
            for (let id in specialityIdArray) {
                speciality.id.push(parseInt(specialityIdArray[id]));
            }

            this.props.toggleOPDCriteria('procedures', speciality, true, filters);
            setTimeout(() => {
                this.props.history.push('/opd/searchresults');
            }, 100);

            let data = {
                'Category': 'ConsumerApp', 'Action': offer.event_name, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': offer.event_name, 'clickedOn': offer.slider_location
            };
            _gtm2.default.sendEvent({ data: data });
        } else if (offer.url_details && offer.url_details.procedure_category_ids && offer.url_details.procedure_category_ids != '') {
            let speciality = {};

            let filters = { 'priceRange': [offer.url_details.min_fees, offer.url_details.max_fees], 'distanceRange': [offer.url_details.min_distance, offer.url_details.max_distance], 'sort_on': offer.url_details.sort_on || '', 'is_female': offer.url_details.is_female || false, 'is_available': offer.url_details.is_available || false, 'doctor_name': offer.url_details.doctor_name || '', 'hospital_name': offer.url_details.hospital_name || '', 'hospital_id': offer.url_details.hospital_id || '' };

            speciality.type = 'procedures_category';
            speciality.id = [];

            let specialityIdArray = offer.url_details.procedure_category_ids.split(',');
            for (let id in specialityIdArray) {
                speciality.id.push(parseInt(specialityIdArray[id]));
            }

            this.props.toggleOPDCriteria('procedures_category', speciality, true, filters);
            setTimeout(() => {
                this.props.history.push('/opd/searchresults');
            }, 100);

            let data = {
                'Category': 'ConsumerApp', 'Action': offer.event_name, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': offer.event_name, 'clickedOn': offer.slider_location
            };
            _gtm2.default.sendEvent({ data: data });
        } else if (offer.url_details && offer.url_details.conditions && offer.url_details.conditions != '') {
            let speciality = {};

            let filters = { 'priceRange': [offer.url_details.min_fees, offer.url_details.max_fees], 'distanceRange': [offer.url_details.min_distance, offer.url_details.max_distance], 'sort_on': offer.url_details.sort_on || '', 'is_female': offer.url_details.is_female || false, 'is_available': offer.url_details.is_available || false, 'doctor_name': offer.url_details.doctor_name || '', 'hospital_name': offer.url_details.hospital_name || '', 'hospital_id': offer.url_details.hospital_id || '' };

            speciality.type = 'condition';
            speciality.id = [];

            let specialityIdArray = offer.url_details.conditions.split(',');
            for (let id in specialityIdArray) {
                speciality.id.push(parseInt(specialityIdArray[id]));
            }

            this.props.toggleOPDCriteria('condition', speciality, true, filters);
            setTimeout(() => {
                this.props.history.push('/opd/searchresults');
            }, 100);

            let data = {
                'Category': 'ConsumerApp', 'Action': offer.event_name, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': offer.event_name, 'clickedOn': offer.slider_location
            };
            _gtm2.default.sendEvent({ data: data });
        } else if (offer.url_details && offer.url_details.hospital_id && offer.url_details.hospital_id != '') {
            let speciality = {};

            let filters = { 'priceRange': [offer.url_details.min_fees, offer.url_details.max_fees], 'distanceRange': [offer.url_details.min_distance, offer.url_details.max_distance], 'sort_on': offer.url_details.sort_on || '', 'is_female': offer.url_details.is_female || false, 'is_available': offer.url_details.is_available || false, 'doctor_name': offer.url_details.doctor_name || '', 'hospital_name': offer.url_details.hospital_name || '', 'hospital_id': offer.url_details.hospital_id || '' };

            speciality.type = 'speciality';
            speciality.id = [];

            this.props.toggleOPDCriteria('speciality', speciality, true, filters);
            setTimeout(() => {
                this.props.history.push('/opd/searchresults');
            }, 100);

            let data = {
                'Category': 'ConsumerApp', 'Action': offer.event_name, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': offer.event_name, 'clickedOn': offer.slider_location
            };
            _gtm2.default.sendEvent({ data: data });
        } else if (offer.url) {

            if (offer.url.startsWith('http')) {
                window.open(offer.url, '_blank');
            } else {
                this.props.history.push(offer.url);
            }

            let data = {
                'Category': 'ConsumerApp', 'Action': offer.event_name, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': offer.event_name, 'clickedOn': offer.slider_location
            };
            _gtm2.default.sendEvent({ data: data });
        } else if (offer.id) {
            let data = {
                'Category': 'ConsumerApp', 'Action': offer.event_name, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': offer.event_name, 'clickedOn': offer.slider_location
            };
            _gtm2.default.sendEvent({ data: data });
            this.props.history.push(`terms-conditions/${offer.id}`);
        }
    }

    onTouchStart(event) {
        let touchobj = event.changedTouches[0];
        this.state.startX = touchobj.pageX;
        this.state.startY = touchobj.pageY;
        let startTime = new Date().getTime();
    }

    onTouchMove(event) {
        let touchobj = event.changedTouches[0];
        this.state.distX = touchobj.pageX - this.state.startX;
        this.state.distY = touchobj.pageY - this.state.startY;
        if (this.state.startX - touchobj.pageX > 5 || touchobj.pageX - this.state.startX > 5) {
            if (event.preventDefault) event.preventDefault();
            event.returnValue = false;
        }
    }

    onTouchEnd(event) {
        let startTime = new Date().getTime();
        let touchobj = event.changedTouches[0];
        let totalOffers = '';
        let curr_index;
        this.state.distX = touchobj.pageX - this.state.startX;
        this.state.distY = touchobj.pageY - this.state.startY;
        let elapsedTime = new Date().getTime() - startTime;
        let filteredBanners = this.getFilteredBanners();
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

    getFilteredBanners() {
        let filteredOffers = [];
        if (this.props.offerList) {
            filteredOffers = this.props.offerList.filter(x => x.slider_location === this.props.sliderLocation);
            filteredOffers = filteredOffers.filter(offer => {
                let show_banner = false;
                let filter_show_banner = true;
                if (offer.url_params_included && Object.values(offer.url_params_included).length) {

                    //Check for filtered values

                    this.props.commonSelectedCriterias && this.props.commonSelectedCriterias.map(data => {
                        if (offer.url_params_included['specializations'] && offer.url_params_included['specializations'].length) {
                            offer.url_params_included['specializations'].map(speciality => {
                                if (speciality == data.id) {
                                    show_banner = true;
                                }
                            });
                        }
                    });

                    this.props.currentSearchedCriterias && this.props.currentSearchedCriterias.map(data => {
                        if (offer.url_params_included['test_ids'] && offer.url_params_included['test_ids'].length) {
                            offer.url_params_included['test_ids'].map(test => {
                                if (test == data.id) {
                                    show_banner = true;
                                }
                            });
                        }
                    });

                    //Check Banners for filters

                    this.props.filterCriteria && Object.entries(this.props.filterCriteria).map((data, key) => {
                        let type = data[0];
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
                    this.props.commonSelectedCriterias && this.props.commonSelectedCriterias.map(data => {
                        if (offer.url_params_excluded['specializations'] && offer.url_params_excluded['specializations'].length) {
                            offer.url_params_excluded['specializations'].map(speciality => {
                                if (speciality == data.id) {
                                    show_banner = false;
                                } else {
                                    show_banner = true;
                                }
                            });
                        }
                    });
                    this.props.currentSearchedCriterias && this.props.currentSearchedCriterias.map(data => {
                        if (offer.url_params_excluded['test_ids'] && offer.url_params_excluded['test_ids'].length) {
                            offer.url_params_excluded['test_ids'].map(test => {
                                if (test == data.id) {
                                    show_banner = false;
                                } else {
                                    show_banner = true;
                                }
                            });
                        }
                    });
                    this.props.filterCriteria && Object.entries(this.props.filterCriteria).map((data, key) => {
                        let type = data[0];
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
    render() {

        let filteredBanners = this.getFilteredBanners();
        let offerVisible = filteredBanners[this.state.index];

        return _react2.default.createElement(
            'div',
            { className: this.props.sliderLocation == 'home_page' || this.props.sliderLocation == 'online_consultation' || this.props.sliderLocation == 'medicine_detail_page' || filteredBanners && filteredBanners.length == 1 || !filteredBanners ? '' : 'banner-margin-tap' },
            this.props.sliderLocation === "medicine_detail_page" ? _react2.default.createElement(
                'div',
                { className: 'medic-img-slider' },
                filteredBanners && filteredBanners.length ? filteredBanners.map((offer, i) => {
                    return _react2.default.createElement('img', { key: i, src: offer.image, onClick: () => this.navigateTo(offer), style: { cursor: 'pointer' } });
                }) : ''
            ) : this.props.sliderLocation == 'home_page' ? _react2.default.createElement(
                'div',
                { className: 'slider-container bnnrForCovivd' },
                filteredBanners && filteredBanners.length ? filteredBanners.map((offer, i) => {
                    return _react2.default.createElement(
                        'a',
                        { key: offer.id },
                        _react2.default.createElement('img', { key: i, src: offer.image, onClick: () => this.navigateTo(offer), style: { cursor: 'pointer' }, alt: 'bannerLogoDocprime' })
                    );
                }) : ''
            ) : _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: this.props.hideClass ? `banner-carousel-div  mrb-10 d-none ${this.props.hideClass}` : `banner-carousel-div mrb-10 d-none d-md-block new-home-banner` },
                    offerVisible && Object.values(offerVisible).length ? _react2.default.createElement('img', { src: offerVisible.image, onTouchStart: this.onTouchStart.bind(this), onTouchMove: this.onTouchMove.bind(this), onTouchEnd: this.onTouchEnd.bind(this), onClick: () => this.navigateTo(offerVisible), style: { cursor: 'pointer' } }) : '',
                    filteredBanners && filteredBanners.length > 1 ? _react2.default.createElement(
                        'div',
                        { className: 'carousel-indicators mrt-10' },
                        filteredBanners && filteredBanners.map((offer, i) => {
                            return _react2.default.createElement('span', { key: i, onClick: () => this.setState({ index: i }), className: this.state.index == i ? "indicator-selected" : '' });
                        })
                    ) : ''
                ),
                this.props.chatPage ? '' : _react2.default.createElement(
                    'div',
                    { className: 'd-md-none' },
                    filteredBanners && filteredBanners.length ? _react2.default.createElement(
                        'div',
                        { className: `${this.props.ipd ? 'ipd-banner-mbl' : this.props.sliderLocation == 'home_page' || this.props.sliderLocation == 'online_consultation' ? 'home-banner-pos' : 'inner-banner-pos'} ${filteredBanners.length == 1 ? `banner-home-scrollable mrt-20 mrb-20 ${this.props.sliderLocation == 'home_page' ? 'single-banner-div' : ''}` : `banner-home-scrollable mrt-20 mrb-20 pd-lt-15`}` },
                        filteredBanners.map((banner, index) => {
                            return _react2.default.createElement('img', { key: index, src: banner.image, onClick: () => this.navigateTo(banner), style: { cursor: 'pointer' }, className: filteredBanners.length == 1 ? `sngl-banner` : `mltpl-banner`, loading: 'lazy' });
                        })
                    ) : ''
                )
            )
        );
    }
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RecentArticles extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    render() {
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
                    this.props.recentArticlesItems.map((article, i) => {
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RelatedArticles extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    render() {
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
                this.props.linkedArticle.urls.map((article, i) => {
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TableOfContent extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { about_test, why_get_tested, test_may_include, this_package_will_include, preparations, faqs } = this.props.searchTestInfoData;
        let resp_test_id = this.props.resp_test_id;

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
                        { href: "#about-test", onClick: () => this.props.updateTabsValues('about_test_' + resp_test_id) },
                        _react2.default.createElement(
                            "li",
                            { className: "mrb-5" },
                            about_test.title
                        )
                    ) : '',
                    why_get_tested && why_get_tested.value && why_get_tested.title ? _react2.default.createElement(
                        "a",
                        { href: "#why-get-tested", onClick: () => this.props.updateTabsValues('why_get_tested_' + resp_test_id) },
                        _react2.default.createElement(
                            "li",
                            { className: "mrb-5" },
                            why_get_tested.title
                        )
                    ) : '',
                    test_may_include && test_may_include.title && test_may_include.value && test_may_include.value.length > 0 ? _react2.default.createElement(
                        "a",
                        { href: "#test-includes", onClick: () => this.props.updateTabsValues('test_include_' + resp_test_id) },
                        _react2.default.createElement(
                            "li",
                            { className: "mrb-5" },
                            test_may_include.title
                        )
                    ) : '',
                    this_package_will_include && this_package_will_include.title && this_package_will_include.tests && this_package_will_include.tests.length > 0 ? _react2.default.createElement(
                        "a",
                        { href: "#package-includes", onClick: () => this.props.updateTabsValues('test_include_' + resp_test_id) },
                        _react2.default.createElement(
                            "li",
                            { className: "mrb-5" },
                            this_package_will_include.title
                        )
                    ) : '',
                    preparations && preparations.title && preparations.value ? _react2.default.createElement(
                        "a",
                        { href: "#test-preparations", onClick: () => this.props.updateTabsValues('test_preparations_' + resp_test_id) },
                        _react2.default.createElement(
                            "li",
                            { className: "mrb-5" },
                            preparations.title
                        )
                    ) : '',
                    faqs && faqs.length > 0 && faqs[0].title ? _react2.default.createElement(
                        "a",
                        { href: "#test-faq", onClick: () => this.props.updateTabsValues('test_faq_' + resp_test_id) },
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const COLOR_CODES = ['#ef9a9a', '#f48fb1', '#ce93d8', '#b39ddb', '#e74c3c', '#9fa8da', '#90caf9', '#81d4fa', '#80deea', '#80cbc4', '#a5d6a7', '#c5e1a5', '#e6ee9c', '#fff59d', '#ffe082', '#ffcc80', '#ffab91', '#bcaaa4'];

class InitialsPicture extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColor: COLOR_CODES[this.sumChars(this.props.name) % COLOR_CODES.length]
        };
    }
    sumChars(str) {
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum += str.charCodeAt(i);
        }

        return sum;
    }

    render() {
        let style = this.props.style || {};

        let initial = "U";
        let name = this.props.name;
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
                { style: style, onClick: this.props.onClick || (() => {}) },
                this.props.children
            );
        } else {
            style['color'] = this.state.bgColor;
            return _react2.default.createElement(
                'div',
                { className: this.props.className, style: style, onClick: this.props.onClick || (() => {}) },
                _react2.default.createElement(
                    'span',
                    null,
                    initial.toUpperCase()
                ),
                this.props.notificationNew ? _react2.default.createElement('div', { style: { borderRadius: '50%', backgroundColor: 'red', position: 'absolute', right: '-2px', top: '-2px', width: '8px', height: '8px' } }) : ''
            );
        }
    }
}

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0NoYXRQYW5lbC9DaGF0UGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9DaGF0UGFuZWwvQ2hhdFJlZnVuZFJlYXNvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9DaGF0UGFuZWwvQ2hhdFN0YXRpY1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9DaGF0UGFuZWwvY2FuY2VsUG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9DaGF0UGFuZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Ib21lL2Jhbm5lckNhcm91c2VsLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvYXJ0aWNsZS9SZWNlbnRBcnRpY2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2FydGljbGUvUmVsYXRlZEFydGljbGVzLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvYXJ0aWNsZS9UYWJsZU9mQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2luaXRpYWxzUGljdHVyZS9Jbml0aWFsc1BpY3R1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9pbml0aWFsc1BpY3R1cmUvaW5kZXguanMiXSwibmFtZXMiOlsicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiQ2hhdFBhbmVsIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic2VuZFBhZ2VVcmwiLCJkYXRhIiwiY2FsbGJhY2siLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3Vic3RyaW5nIiwic2VhcmNoIiwicmVwbGFjZSIsInRlbXBsYXRlIiwibXNnVGVtcGxhdGUiLCJzZW5kQWdlbnRXaGF0c3VwUGFnZVVSTCIsInRoZW4iLCJyZXNwIiwic2V0VGltZW91dCIsIlNuYWNrQmFyIiwic2hvdyIsInBvcyIsInRleHQiLCJjYXRjaCIsImUiLCJwYXJzZWRIcmVmIiwiaXNfdGh5cm9jYXJlIiwicGFyc2UiLCJ1dG1fc291cmNlIiwiaW5jbHVkZXMiLCJzdGF0ZSIsInNlbGVjdGVkUm9vbSIsInRva2VuIiwic3ltcHRvbXMiLCJyb29tSWQiLCJzaG93Q2FuY2VsIiwic2hvd0NoYXRCbG9jayIsImFkZGl0aW9uQ2xhc3NlcyIsImhpZGVJZnJhbWUiLCJpZnJhbWVMb2FkaW5nIiwic2hvd1N0YXRpY1ZpZXciLCJpbml0aWFsTWVzc2FnZSIsImNhbGxUaW1lb3V0Iiwib3BlblJlZnVuZFBvcHVwIiwiY29tcG9uZW50RGlkTW91bnQiLCJvblJlZklwZCIsInNlbGVjdGVkTG9jYXRpb24iLCJzZW5kTG9jYXRpb25Ob3RpZmljYXRpb24iLCJTVE9SQUdFIiwiZ2V0QXV0aFRva2VuIiwic2V0U3RhdGUiLCJtb2JpbGVjaGF0dmlldyIsIlVTRVIiLCJsaXZlQ2hhdFN0YXJ0ZWQiLCJpcGRfY2hhdCIsInNob3dJcGRDaGF0IiwiaWZyYW1lIiwicmVmcyIsImNoYXRfZnJhbWUiLCJvbmxvYWQiLCJpZnJhbWUxIiwiY2hhdF9mcmFtZTEiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnREYXRhIiwiZXZlbnQiLCJyaWQiLCJhbmFseXRpY0RhdGEiLCJhZ2VudFR5cGUiLCJHVE0iLCJnZXRVc2VySWQiLCJlbXBsb3llZUlkIiwic2VuZEV2ZW50Iiwic2VhcmNoRGF0YSIsInNlbGVjdGVkQ3JpdGVyaWFzIiwiZG9jdG9yX3NlYXJjaF9kYXRhIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImZpbHRlckRhdGEiLCJmaWx0ZXJDcml0ZXJpYSIsImhpc3RvcnkiLCJwdXNoIiwibGFiX3NlYXJjaF9kYXRhIiwiZXh0cmFQYXJhbXMiLCJwYXltZW50Iiwic2V0Q2hhdFJvb21JZCIsInNlbmRQYXltZW50U3RhdHVzRXZlbnQiLCJzZW5kVXNlckRldGFpbHMiLCJsb2dpblZpYUNoYXQiLCJidWlsZFVybCIsInRoYXQiLCJpcGRDaGF0VmlldyIsInVuU2V0Q29tbW9uVXRtVGFncyIsInR5cGUiLCJ1cmwiLCJpZHMiLCJzaG93RGlzYWJsZWRQYXltZW50IiwibWVzc2FnZSIsImhvbWVQYWdlIiwiaW5uZXJXaWR0aCIsImJpbmQiLCJwYXltZW50X3N0YXR1cyIsImRpc3BhdGNoQ3VzdG9tRXZlbnQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInVuZGVmaW5lZCIsImdlb21ldHJ5IiwibG9jYWxpdHkiLCJjaXR5IiwibmFtZSIsImFkZHJlc3MiLCJmb3JtYXR0ZWRfYWRkcmVzcyIsInVzZXIiLCJwcm9maWxlcyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJzZWxlY3RlZFByb2ZpbGUiLCJpc19pbnN1cmVkIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsImV2ZW50TmFtZSIsIkV2ZW50IiwiY29udGVudFdpbmRvdyIsImRpc3BhdGNoRXZlbnQiLCJwb3N0TWVzc2FnZSIsImNsb3NlQ2hhdCIsImNhbGwiLCJ0b2dnbGVDYW5jZWwiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImhpZGVTdGF0aWNDaGF0IiwiZ28iLCJzdGFydExpdmVDaGF0V2l0aE1lc3NhZ2UiLCJzdGFydExpdmVDaGF0IiwiY2xvc2VDaGF0Q2xpY2siLCJjaGF0QnRuQ2xpY2siLCJhcnRpY2xlRGF0YSIsInNlYXJjaFRlc3RJbmZvRGF0YSIsIm5ld0NoYXRCdG4iLCJuZXdDaGF0QnRuQWRzIiwiYm9va2luZ3NHQSIsIm5ld0NoYXRCdG5DbGljayIsIm9uSWZyYW1lTG9hZCIsInRhcmdldCIsImNvbnRlbnREb2N1bWVudCIsImhyZWYiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJyZWZ1bmRDbGlja2VkIiwiaXNFbmFibGUiLCJ0b2dnbGVSZWZ1bmRQb3B1cCIsInN1Ym1pdFJlZnVuZFJlYXNvbnMiLCJyZWFzb24iLCJzZXRQYXltZW50U3RhdHVzIiwicmVuZGVyIiwiZG9jdG9yRGF0YSIsImNoYXRSb29tSWRzIiwiY2hhdERvY3RvcnMiLCJzeW1wdG9tc191cmkiLCJyZWR1Y2UiLCJzdHIiLCJjdXJyIiwiaWZyYW1lX3VybCIsIkNPTkZJRyIsIkNIQVRfVVJMIiwiZnJvbV9hcHAiLCJkZXZpY2VfaWQiLCJib3RBZ2VudCIsImlzX3JlbGlnYXJlIiwidmlzaXRpZCIsImNoYXRCdG5Db250ZW50MSIsImNoYXRCdG5Db250ZW50MiIsInRpdGxlIiwic3BsaXQiLCJmb250U2l6ZSIsIm1hcmdpblJpZ2h0Iiwid2lkdGgiLCJ2ZXJ0aWNhbEFsaWduIiwiQVNTRVRTX0JBU0VfVVJMIiwicmVjZW50QXJ0aWNsZXMiLCJyZWNlbnRfYXJ0aWNsZXMiLCJpcGRGb3JtIiwicGFyYW1zIiwiYm9va2luZ19pZCIsIm9yZGVyX2lkIiwicGF5bWVudF9kaXNhYmxlIiwidXRtX2NhbXBhaWduIiwiY29uc3VsdGF0aW9uX2lkIiwiaXNfcGF5bWVudF9mb3JfY3VycmVudF9yb29tIiwic2hvd19kaXNhYmxlZF9yZWZ1bmRfYnV0dG9uIiwiY3VycmVudFJvb21JZCIsImNoYXRQYXltZW50U3RhdHVzIiwibW9iaWxlVmVyaWZpY2F0aW9uRG9uZSIsInNob3dIYWxmU2NyZWVuQ2hhdCIsInNob3dEZXNrdG9wSXBkIiwiaXNBZ2VudCIsIm1hcmdpbkJvdHRvbSIsImNoYXRQYWdlIiwib2ZmZXJMaXN0IiwiZmlsdGVyIiwieCIsInNsaWRlcl9sb2NhdGlvbiIsIm5vQ2hhdEJ1dHRvbiIsInVwZGF0ZVRhYnNWYWx1ZXMiLCJyZXNwX3Rlc3RfaWQiLCJmbGV4IiwiQ2hhdFJlZnVuZFZpZXciLCJyZWZ1bmRSZWFzb24iLCJzaG93RXJyb3IiLCJzZWxlY3RSZWFzb24iLCJzdWJtaXQiLCJzdWJtaXRSZWZ1bmQiLCJ0b2dnbGVSZWZ1bmQiLCJwYWRkaW5nIiwiQ2hhdFN0YXRpYyIsInBhcnNlZCIsInZhbHVlIiwib3BlbkJhbm5lciIsInV0bV90ZXJtIiwiQmFzaWNFbnF1aXJ5IiwidXRtX2xvYWRlciIsImZvcmNlX3N0YXJ0IiwiZ2V0SWZyYW1lIiwiaW5wdXRIYW5kbGVyIiwiaGFuZGxlS2V5VXAiLCJrZXkiLCJjaGVja09wZW5Nb2JpbGVDaGF0IiwicmVtb3ZlVVRNIiwidGltZSIsIkRhdGUiLCJkYXRhQ2xhc3MiLCJ0b0xvY2FsZVN0cmluZyIsImhvdXIiLCJtaW51dGUiLCJob3VyMTIiLCJoZWlnaHQiLCJ0b2dnbGUiLCJkaXNwbGF5Iiwic3NyRmxhZyIsIm1hcFN0YXRlVG9Qcm9wcyIsInBhc3NlZFByb3BzIiwiRE9DVE9SUyIsIlNFQVJDSF9DUklURVJJQV9PUEQiLCJTRUFSQ0hfQ1JJVEVSSUFfTEFCUyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiZ2V0Q2hhdERvY3RvckJ5SWQiLCJkb2N0b3JJZCIsImNiIiwicmVzZXRGaWx0ZXJzIiwiY2xlYXJFeHRyYVRlc3RzIiwic2VsZWN0TG9jYXRpb24iLCJzdGFydGVkIiwiZGVsZXRlUm9vbUlkIiwidG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEiLCJ0ZXN0IiwiZm9yY2VBZGQiLCJmaWx0ZXJzIiwidG9nZ2xlT1BEQ3JpdGVyaWEiLCJ0YWdzIiwic3RhdHVzIiwiQmFubmVyQ2Fyb3VzZWwiLCJpbmRleCIsInN0YXJ0WCIsInN0YXJ0WSIsImRpc3RYIiwiZGlzdFkiLCJpbnRlcnZhbEZsYWciLCJpbnRlcnZhbElkIiwidG90YWxPZmZlcnMiLCJmaWx0ZXJlZEJhbm5lcnMiLCJnZXRGaWx0ZXJlZEJhbm5lcnMiLCJzbGlkZXJMb2NhdGlvbiIsInNldEludGVydmFsIiwiY3Vycl9pbmRleCIsImNsZWFySW50ZXJ2YWwiLCJuYXZpZ2F0ZVRvIiwib2ZmZXIiLCJ1cmxfZGV0YWlscyIsInRlc3RfaWRzIiwibWluX2ZlZXMiLCJtYXhfZmVlcyIsIm1pbl9kaXN0YW5jZSIsIm1heF9kaXN0YW5jZSIsInNvcnRfb24iLCJsYWJfbmFtZSIsIm5ldHdvcmtfaWQiLCJpZCIsInRlc3RJZEFycmF5IiwicGFyc2VJbnQiLCJldmVudF9uYW1lIiwic3BlY2lhbGl6YXRpb25zIiwic3BlY2lhbGl0eSIsImlzX2ZlbWFsZSIsImlzX2F2YWlsYWJsZSIsImRvY3Rvcl9uYW1lIiwiaG9zcGl0YWxfbmFtZSIsImhvc3BpdGFsX2lkIiwic3BlY2lhbGl0eUlkQXJyYXkiLCJwcm9jZWR1cmVfaWRzIiwicHJvY2VkdXJlX2NhdGVnb3J5X2lkcyIsImNvbmRpdGlvbnMiLCJzdGFydHNXaXRoIiwib3BlbiIsIm9uVG91Y2hTdGFydCIsInRvdWNob2JqIiwiY2hhbmdlZFRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwic3RhcnRUaW1lIiwiZ2V0VGltZSIsIm9uVG91Y2hNb3ZlIiwicmV0dXJuVmFsdWUiLCJvblRvdWNoRW5kIiwiZWxhcHNlZFRpbWUiLCJNYXRoIiwiYWJzIiwiZmlsdGVyZWRPZmZlcnMiLCJzaG93X2Jhbm5lciIsImZpbHRlcl9zaG93X2Jhbm5lciIsInVybF9wYXJhbXNfaW5jbHVkZWQiLCJ2YWx1ZXMiLCJjb21tb25TZWxlY3RlZENyaXRlcmlhcyIsIm1hcCIsImN1cnJlbnRTZWFyY2hlZENyaXRlcmlhcyIsImVudHJpZXMiLCJ1cmxfcGFyYW1zX2V4Y2x1ZGVkIiwib2ZmZXJWaXNpYmxlIiwiaSIsImltYWdlIiwiY3Vyc29yIiwiaGlkZUNsYXNzIiwiaXBkIiwiYmFubmVyIiwiUmVjZW50QXJ0aWNsZXMiLCJyZWNlbnRBcnRpY2xlVGl0bGUiLCJyZWNlbnRBcnRpY2xlc0l0ZW1zIiwiYXJ0aWNsZSIsIlJlbGF0ZWRBcnRpY2xlcyIsImxpbmtlZEFydGljbGUiLCJjb250ZW50X2JveF90aXRsZSIsInVybHMiLCJUYWJsZU9mQ29udGVudCIsImFib3V0X3Rlc3QiLCJ3aHlfZ2V0X3Rlc3RlZCIsInRlc3RfbWF5X2luY2x1ZGUiLCJ0aGlzX3BhY2thZ2Vfd2lsbF9pbmNsdWRlIiwicHJlcGFyYXRpb25zIiwiZmFxcyIsInRlc3RzIiwiQ09MT1JfQ09ERVMiLCJJbml0aWFsc1BpY3R1cmUiLCJiZ0NvbG9yIiwic3VtQ2hhcnMiLCJzdW0iLCJjaGFyQ29kZUF0Iiwic3R5bGUiLCJpbml0aWFsIiwiaGFzX2ltYWdlIiwib25DbGljayIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwidG9VcHBlckNhc2UiLCJub3RpZmljYXRpb25OZXciLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwb3NpdGlvbiIsInJpZ2h0IiwidG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7OztBQUZBLE1BQU1BLGNBQWNDLG1CQUFPQSxDQUFDLGtDQUFSLENBQXBCOzs7QUFJQSxNQUFNQyxTQUFOLFNBQXdCQyxnQkFBTUMsU0FBOUIsQ0FBd0M7QUFDcENDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjs7QUFEZSxhQWlnQm5CQyxXQWpnQm1CLEdBaWdCTCxNQUFNO0FBQ2hCLGdCQUFJQyxPQUFPO0FBQ1BDLDBCQUFVQyxPQUFPQyxRQUFQLENBQWdCQyxRQUFoQixDQUF5QkMsU0FBekIsQ0FBbUMsQ0FBbkMsSUFBd0NILE9BQU9DLFFBQVAsQ0FBZ0JHLE1BQWhCLENBQXVCQyxPQUF2QixDQUErQixJQUEvQixFQUFvQyxHQUFwQyxDQUQzQztBQUVQQywwQkFBVSxLQUFLVixLQUFMLENBQVdXLFdBQVgsR0FBeUIsS0FBS1gsS0FBTCxDQUFXVyxXQUFwQyxHQUFrRDtBQUZyRCxhQUFYO0FBSUEsaUJBQUtYLEtBQUwsQ0FBV1ksdUJBQVgsQ0FBbUNWLElBQW5DLEVBQXlDVyxJQUF6QyxDQUErQ0MsSUFBRCxJQUFVO0FBQ3BEQywyQkFBVyxNQUFNO0FB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Ozs7Ozs7Ozs7O0FDdEVmOzs7Ozs7a0JBRWVBLHlCIiwiZmlsZSI6IjAuc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vLi4vY29uZmlnJ1xuXG5pbXBvcnQgSW5pdGlhbHNQaWN0dXJlIGZyb20gJy4uLy4uL2NvbW1vbnMvaW5pdGlhbHNQaWN0dXJlJ1xuaW1wb3J0IENhbmNlbFBvcHVwIGZyb20gJy4vY2FuY2VsUG9wdXAnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IENoYXRTdGF0aWNWaWV3IGZyb20gJy4vQ2hhdFN0YXRpY1ZpZXcnXG5pbXBvcnQgUmVsYXRlZEFydGljbGVzIGZyb20gJy4uL2FydGljbGUvUmVsYXRlZEFydGljbGVzJ1xuaW1wb3J0IFJlY2VudEFydGljbGVzIGZyb20gJy4uL2FydGljbGUvUmVjZW50QXJ0aWNsZXMnXG5pbXBvcnQgVGFibGVPZkNvbnRlbnQgZnJvbSAnLi4vYXJ0aWNsZS9UYWJsZU9mQ29udGVudCdcbmltcG9ydCBCYW5uZXJDYXJvdXNlbCBmcm9tICcuLi9Ib21lL2Jhbm5lckNhcm91c2VsJztcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5pbXBvcnQgQ2hhdFJlZnVuZFJlYXNvbnMgZnJvbSAnLi9DaGF0UmVmdW5kUmVhc29ucy5qcydcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuXG5jbGFzcyBDaGF0UGFuZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICBsZXQgcGFyc2VkSHJlZiA9ICcnXG4gICAgICAgIGxldCBpc190aHlyb2NhcmUgPSBmYWxzZVxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBwYXJzZWRIcmVmID0gcXVlcnlTdHJpbmcucGFyc2Uod2luZG93LmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgICAgIGlzX3RoeXJvY2FyZSA9IChwYXJzZWRIcmVmICYmIHBhcnNlZEhyZWYudXRtX3NvdXJjZSAmJiBwYXJzZWRIcmVmLnV0bV9zb3VyY2UuaW5jbHVkZXMoJ1RoeXJvY2FyZScpKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzZWxlY3RlZFJvb206IG51bGwsXG4gICAgICAgICAgICB0b2tlbjogXCJcIixcbiAgICAgICAgICAgIHN5bXB0b21zOiBbXSxcbiAgICAgICAgICAgIHJvb21JZDogXCJcIixcbiAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd0NoYXRCbG9jazogZmFsc2UsXG4gICAgICAgICAgICBhZGRpdGlvbkNsYXNzZXM6ICcgY2hhdC1sb2FkLW1vYmlsZScsXG4gICAgICAgICAgICBoaWRlSWZyYW1lOiBpc190aHlyb2NhcmUgPyBmYWxzZSA6IHRydWUsXG4gICAgICAgICAgICBpZnJhbWVMb2FkaW5nOiBpc190aHlyb2NhcmUgPyBmYWxzZSA6IHRydWUsXG4gICAgICAgICAgICBzaG93U3RhdGljVmlldzogaXNfdGh5cm9jYXJlID8gZmFsc2UgOiB0cnVlLFxuICAgICAgICAgICAgaW5pdGlhbE1lc3NhZ2U6IFwiXCIsXG4gICAgICAgICAgICBjYWxsVGltZW91dDogZmFsc2UsXG4gICAgICAgICAgICBvcGVuUmVmdW5kUG9wdXA6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IHBhcnNlZEhyZWYgPSAnJ1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBwYXJzZWRIcmVmID0gcXVlcnlTdHJpbmcucGFyc2Uod2luZG93LmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uUmVmSXBkKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uUmVmSXBkKHRoaXMpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zZW5kTG9jYXRpb25Ob3RpZmljYXRpb24odGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKVxuICAgICAgICB9XG5cbiAgICAgICAgU1RPUkFHRS5nZXRBdXRoVG9rZW4oKS50aGVuKCh0b2tlbikgPT4ge1xuICAgICAgICAgICAgLy90aGlzLnNlbmRVc2VyRGV0YWlscyh0aGlzLnByb3BzLlVTRVIpXG4gICAgICAgICAgICB0b2tlbiA9IHRva2VuIHx8IFwiXCJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRva2VuLCBzeW1wdG9tczogKHRoaXMucHJvcHMubG9jYXRpb24uc3RhdGUuc3ltcHRvbXMgfHwgW10pLCByb29tSWQ6ICh0aGlzLnByb3BzLmxvY2F0aW9uLnN0YXRlLnJvb21JZCB8fCBcIlwiKSB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdG9rZW4gfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMubW9iaWxlY2hhdHZpZXcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0NoYXRCbG9jazogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2sgZm9yIHN0YXRpYyBtZXNzYWdlIGFuZCBoaWRlL3Nob3cgaWZyYW1lIHdpdGggbG9hZGVyIGFjY29yZGluZ2x5LlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuVVNFUiAmJiAodGhpcy5wcm9wcy5VU0VSLmxpdmVDaGF0U3RhcnRlZCB8fCB0aGlzLnByb3BzLlVTRVIuaXBkX2NoYXQgJiYgdGhpcy5wcm9wcy5VU0VSLmlwZF9jaGF0LnNob3dJcGRDaGF0KSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dTdGF0aWNWaWV3OiBmYWxzZSwgaWZyYW1lTG9hZGluZzogdHJ1ZSB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhpZGVJZnJhbWU6IGZhbHNlIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlmcmFtZSA9IHRoaXMucmVmcy5jaGF0X2ZyYW1lXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZnJhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmcmFtZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlmcmFtZUxvYWRpbmc6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaWZyYW1lTG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBpZnJhbWUxID0gdGhpcy5yZWZzLmNoYXRfZnJhbWUxXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZnJhbWUxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZnJhbWUxLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaWZyYW1lTG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpZnJhbWVMb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAvLyBoYW5kbGluZyBldmVudHMgc2VudCBieSBpZnJhbWVcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKHsgZGF0YSB9KSB7XG4gICAgICAgICAgICAgICAgbGV0IGV2ZW50RGF0YSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChkYXRhLmV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiUm9vbUFnZW50XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRSb29tOiBkYXRhLmRhdGEucmlkIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYW5hbHl0aWNEYXRhO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50RGF0YS5kYXRhLmFnZW50VHlwZSA9PSAnVHlwZSAxJykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuYWx5dGljRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDaGF0JywgJ0FjdGlvbic6ICdMMURvY3RvckFzc2lnbmVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbDEtZG9jdG9yLWFzc2lnbmVkJywgJ1Jvb21JZCc6IGV2ZW50RGF0YS5kYXRhLnJpZCwgJ0RvY3RvcklkJzogZXZlbnREYXRhLmRhdGEuZW1wbG95ZWVJZCwgXCJ1cmxcIjogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGFuYWx5dGljRGF0YSB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudERhdGEuZGF0YS5hZ2VudFR5cGUgPT0gJ1R5cGUgMicpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmFseXRpY0RhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ2hhdCcsICdBY3Rpb24nOiAnTDJEb2N0b3JBc3NpZ25lZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2wyLWRvY3Rvci1hc3NpZ25lZCcsICdSb29tSWQnOiBldmVudERhdGEuZGF0YS5yaWQsICdEb2N0b3JJZCc6IGV2ZW50RGF0YS5kYXRhLmVtcGxveWVlSWQsIFwidXJsXCI6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBhbmFseXRpY0RhdGEgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnREYXRhLmRhdGEuYWdlbnRUeXBlID09ICdUeXBlIDMnKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5hbHl0aWNEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NoYXQnLCAnQWN0aW9uJzogJ0wzRG9jdG9yQXNzaWduZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdsMy1kb2N0b3ItYXNzaWduZWQnLCAnUm9vbUlkJzogZXZlbnREYXRhLmRhdGEucmlkLCAnRG9jdG9ySWQnOiBldmVudERhdGEuZGF0YS5lbXBsb3llZUlkLCBcInVybFwiOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogYW5hbHl0aWNEYXRhIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnByb3BzLmdldENoYXREb2N0b3JCeUlkKGRhdGEuZGF0YS5tYW5hZ2VyLCBkYXRhLmRhdGEucmlkLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmRpc3BhdGNoQ3VzdG9tRXZlbnQoJ3Byb2ZpbGVfYXNzaWduZWQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwcm9maWxlSWQ6IGRhdGEuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRvY3Rvcl9zZWFyY2hcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWFyY2hEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZENyaXRlcmlhczogdGhpcy5wcm9wcy5kb2N0b3Jfc2VhcmNoX2RhdGEuc2VsZWN0ZWRDcml0ZXJpYXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkTG9jYXRpb246IHRoaXMucHJvcHMuZG9jdG9yX3NlYXJjaF9kYXRhLnNlbGVjdGVkTG9jYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaERhdGEgPSBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc2VhcmNoRGF0YSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbHRlckRhdGEgPSBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5kb2N0b3Jfc2VhcmNoX2RhdGEuZmlsdGVyQ3JpdGVyaWEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvb3BkL3NlYXJjaHJlc3VsdHM/c2VhcmNoPSR7c2VhcmNoRGF0YX0mZmlsdGVyPSR7ZmlsdGVyRGF0YX0mZG9jdG9yX25hbWU9JHtcIlwifSZob3NwaXRhbF9uYW1lPSR7XCJcIn1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJsYWJfc2VhcmNoXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VhcmNoRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDcml0ZXJpYXM6IHRoaXMucHJvcHMubGFiX3NlYXJjaF9kYXRhLnNlbGVjdGVkQ3JpdGVyaWFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZExvY2F0aW9uOiB0aGlzLnByb3BzLmxhYl9zZWFyY2hfZGF0YS5zZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hEYXRhID0gZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNlYXJjaERhdGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJEYXRhID0gZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMubGFiX3NlYXJjaF9kYXRhLmZpbHRlckNyaXRlcmlhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2xhYi9zZWFyY2hyZXN1bHRzP3NlYXJjaD0ke3NlYXJjaERhdGF9JmZpbHRlcj0ke2ZpbHRlckRhdGF9YClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY2hhdF9sb2FkZWRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmRhdGEucmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNhdmUgY3VycmVudCByb29tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbmFseXRpY0RhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ2hhdCcsICdBY3Rpb24nOiAnQ2hhdEluaXRpYWxpemF0aW9uJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2hhdC1pbml0aWFsaXphdGlvbicsICdSb29tSWQnOiBkYXRhLmRhdGEucmlkLCBcInVybFwiOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogYW5hbHl0aWNEYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBleHRyYVBhcmFtcyA9IHt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZEhyZWYgPSBxdWVyeVN0cmluZy5wYXJzZSh3aW5kb3cubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZWRIcmVmICYmIHBhcnNlZEhyZWYucGF5bWVudCA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhUGFyYW1zLnBheW1lbnQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRDaGF0Um9vbUlkKGRhdGEuZGF0YS5yaWQsIGV4dHJhUGFyYW1zKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRMb2NhdGlvbk5vdGlmaWNhdGlvbih0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9TZW5kIHBheW1lbnQgZXZlbnQgLHdoZW4gcGF5bWVudCBpcyBpbiB1cmxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlZEhyZWYgJiYgcGFyc2VkSHJlZi5wYXltZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRQYXltZW50U3RhdHVzRXZlbnQoZGF0YS5kYXRhLnJpZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZFVzZXJEZXRhaWxzKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkUm9vbTogZGF0YS5kYXRhLnJpZCwgaWZyYW1lTG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkxvZ2luXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5kYXRhW1wicGFyYW1zLnRva2VuXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbmFseXRpY0RhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ2hhdCcsICdBY3Rpb24nOiAnVXNlclJlZ2lzdGVyZWR2aWFDaGF0JywgJ0N1c3RvbWVySUQnOiAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICd1c2VyLXJlZ2lzdGVyZWQtdmlhLWNoYXQnLCAnUm9vbUlkJzogZXZlbnREYXRhLmRhdGEucmlkIHx8ICcnLCBcInVybFwiOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogYW5hbHl0aWNEYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubG9naW5WaWFDaGF0KGRhdGEuZGF0YVtcInBhcmFtcy50b2tlblwiXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkNoYXRfQ2xvc2VcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucHJvcHMuc3RhcnRMaXZlQ2hhdChmYWxzZSwgdGhpcy5zdGF0ZS5zZWxlY3RlZExvY2F0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbml0aWFsTWVzc2FnZTogXCJcIiwgc2VsZWN0ZWRSb29tOiBudWxsLCB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZWRIcmVmICYmIHBhcnNlZEhyZWYucGF5bWVudCA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ1aWxkVXJsID0gdGhpcy5idWlsZFVybCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5yZXBsYWNlKGJ1aWxkVXJsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNldENoYXRSb29tSWQobnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5wcm9wcy5pcGRDaGF0VmlldyhudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51blNldENvbW1vblV0bVRhZ3MoJ2NoYXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucHJvcHMuaGlzdG9yeS5nbygtMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicHJlc2NyaXB0aW9uX3JlcG9ydFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFuYWx5dGljRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NoYXQnLCAnQWN0aW9uJzogJ1ByZXNjcmlwdGlvbkdlbmVyYXRlZCcsICdDdXN0b21lcklEJzogJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAncHJlc2NyaXB0aW9uLWdlbmVyYXRlZCcsICdSb29tSWQnOiBldmVudERhdGEucmlkIHx8ICcnLCBcInVybFwiOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGFuYWx5dGljRGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdiYW5uZXInOiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS50eXBlID09ICd0aW1lcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFuYWx5dGljRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDaGF0JywgJ0FjdGlvbic6ICdCYW5uZXJUaW1lckZpcmVkJywgJ0N1c3RvbWVySUQnOiAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdiYW5uZXItdGltZXItZmlyZWQnLCAnUm9vbUlkJzogZXZlbnREYXRhLnJpZCB8fCAnJywgXCJ1cmxcIjogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGFuYWx5dGljRGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50eXBlID09ICd0cmFuc2ZlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFuYWx5dGljRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDaGF0JywgJ0FjdGlvbic6ICdCYW5uZXJUcmFuc2ZlckZpcmVkJywgJ0N1c3RvbWVySUQnOiAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdiYW5uZXItdHJhbnNmZXItZmlyZWQnLCAnUm9vbUlkJzogZXZlbnREYXRhLnJpZCB8fCAnJywgXCJ1cmxcIjogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGFuYWx5dGljRGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50eXBlID09ICdwcmV2ZW50aXZlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYW5hbHl0aWNEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NoYXQnLCAnQWN0aW9uJzogJ1ByZXZlbnRpdmVGaXJlZCcsICdDdXN0b21lcklEJzogJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAncHJldmVudGl2ZS1maXJlZCcsICdSb29tSWQnOiBldmVudERhdGEucmlkIHx8ICcnLCBcInVybFwiOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogYW5hbHl0aWNEYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnR5cGUgPT0gJ3NhbGVzQmFubmVyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYW5hbHl0aWNEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NoYXQnLCAnQWN0aW9uJzogJ0Jhbm5lclNhbGVzRmlyZWQnLCAnQ3VzdG9tZXJJRCc6ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2Jhbm5lci1zYWxlcy1maXJlZCcsICdSb29tSWQnOiBldmVudERhdGEucmlkIHx8ICcnLCBcInVybFwiOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogYW5hbHl0aWNEYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdib29rTm93Jzoge1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYW5hbHl0aWNEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ2hhdCcsICdBY3Rpb24nOiAnQm9va05vd0ZpcmVkJywgJ0N1c3RvbWVySUQnOiAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdib29rLW5vdy1maXJlZCcsICdSb29tSWQnOiBldmVudERhdGEucmlkIHx8ICcnLCBcInVybFwiOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsICdzcGVjaWFsaXphdGlvbl91cmwnOiBkYXRhLnVybCB8fCAnJywgJ2lkcyc6IGRhdGEuaWRzIHx8ICcnLCAndHlwZSc6IGRhdGEudHlwZSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogYW5hbHl0aWNEYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Jvb2tOb3dQaGFybWFjeSc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYW5hbHl0aWNEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ2hhdCcsICdBY3Rpb24nOiAnQm9va05vd1BoYXJtYWN5RmlyZWQnLCAnQ3VzdG9tZXJJRCc6ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2Jvb2stbm93LXBoYXJtYWN5LWZpcmVkJywgJ1Jvb21JZCc6IGV2ZW50RGF0YS5yaWQgfHwgJycsIFwidXJsXCI6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogYW5hbHl0aWNEYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ01vYmlsZVZlcmlmaWNhdGlvbic6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYW5hbHl0aWNEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ2hhdCcsICdBY3Rpb24nOiAnTW9iaWxlVmVyaWZpY2F0aW9uRmlyZWQnLCAnQ3VzdG9tZXJJRCc6ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ21vYmlsZS12ZXJpZmljYXRpb24tZmlyZWQnLCAnUm9vbUlkJzogZXZlbnREYXRhLnJpZCB8fCAnJywgXCJ1cmxcIjogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBhbmFseXRpY0RhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNldENoYXRSb29tSWQoZGF0YS5kYXRhLnJpZCwgeyBzaG93RGlzYWJsZWRQYXltZW50OiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiByZWRpcmVjdGluZyBjaGF0IHRvIG5ldyBwYWdlIGZvciBtb2JpbGUgdXNlcnMgb24gaG9tZXBhZ2UgYW5kIG9uIGZvY3VzXG4gICAgICAgICAgICAgICAgICAgICAqIFRPRE8gOiByZXZpZXcgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubWVzc2FnZSAmJiBkYXRhLm1lc3NhZ2UgPT0gJ2ZvY3VzJyAmJiAhKHRoaXMucHJvcHMuVVNFUiAmJiB0aGlzLnByb3BzLlVTRVIuaXBkX2NoYXQgJiYgdGhpcy5wcm9wcy5VU0VSLmlwZF9jaGF0LnNob3dJcGRDaGF0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlmcmFtZSA9IHRoaXMucmVmcy5jaGF0X2ZyYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZnJhbWUuc2Nyb2xsVG9wID0gaWZyYW1lLnNjcm9sbEhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuaG9tZVBhZ2UgJiYgd2luZG93LmlubmVyV2lkdGggPCA3NjggJiYgIXRoaXMucHJvcHMuaGlzdG9yeS5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygnbW9iaWxldmlld2NoYXQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvbW9iaWxldmlld2NoYXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHNlbmRQYXltZW50U3RhdHVzRXZlbnQocmlkKSB7XG4gICAgICAgIGxldCBwYXJzZWRIcmVmID0gJydcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcGFyc2VkSHJlZiA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICByaWQ6IHJpZCxcbiAgICAgICAgICAgIHBheW1lbnRfc3RhdHVzOiBwYXJzZWRIcmVmLnBheW1lbnQgfHwgJydcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpc3BhdGNoQ3VzdG9tRXZlbnQoJ3BheW1lbnQnLCBkYXRhKVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblJlZklwZCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblJlZklwZCh1bmRlZmluZWQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZW5kTG9jYXRpb25Ob3RpZmljYXRpb24oc2VsZWN0ZWRMb2NhdGlvbikge1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIGxvY2F0aW9uOiBzZWxlY3RlZExvY2F0aW9uLmdlb21ldHJ5LmxvY2F0aW9uLFxuICAgICAgICAgICAgbG9jYWxpdHk6IHNlbGVjdGVkTG9jYXRpb24ubG9jYWxpdHksXG4gICAgICAgICAgICBjaXR5OiBzZWxlY3RlZExvY2F0aW9uLm5hbWUsXG4gICAgICAgICAgICBhZGRyZXNzOiBzZWxlY3RlZExvY2F0aW9uLmZvcm1hdHRlZF9hZGRyZXNzXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRpc3BhdGNoQ3VzdG9tRXZlbnQoJ2xvY2F0aW9uJywgZGF0YSlcbiAgICB9XG5cbiAgICBzZW5kVXNlckRldGFpbHMoKSB7XG4gICAgICAgIGxldCBkYXRhID0ge31cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdXNlciA9IHRoaXMucHJvcHMuVVNFUlxuICAgICAgICAgICAgaWYgKHVzZXIgJiYgdXNlci5wcm9maWxlcyAmJiBPYmplY3Qua2V5cyh1c2VyLnByb2ZpbGVzKS5sZW5ndGggPiAwICYmIHVzZXIucHJvZmlsZXNbdXNlci5zZWxlY3RlZFByb2ZpbGVdKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoQ3VzdG9tRXZlbnQoJ3VzZXJfZGV0YWlscycsIHsgaXNfaW5zdXJlZDogdXNlci5wcm9maWxlc1t1c2VyLnNlbGVjdGVkUHJvZmlsZV0uaXNfaW5zdXJlZCwgbmFtZTogdXNlci5wcm9maWxlc1t1c2VyLnNlbGVjdGVkUHJvZmlsZV0ubmFtZSB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoQ3VzdG9tRXZlbnQoJ3VzZXJfZGV0YWlscycsIHsgaXNfaW5zdXJlZDogZmFsc2UsIG5hbWU6ICcnIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSwgMTAwMClcblxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICAgICAgbGV0IHBhcnNlZEhyZWYgPSAnJ1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBwYXJzZWRIcmVmID0gcXVlcnlTdHJpbmcucGFyc2Uod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGlzX3RoeXJvY2FyZSA9IChwYXJzZWRIcmVmICYmIHBhcnNlZEhyZWYudXRtX3NvdXJjZSAmJiBwYXJzZWRIcmVmLnV0bV9zb3VyY2UuaW5jbHVkZXMoJ1RoeXJvY2FyZScpKSA/IHRydWUgOiBmYWxzZVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24gIT0gcHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiAmJiBwcm9wcy5zZWxlY3RlZExvY2F0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnNlbmRMb2NhdGlvbk5vdGlmaWNhdGlvbihwcm9wcy5zZWxlY3RlZExvY2F0aW9uKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKChwcm9wcy5VU0VSICYmIHByb3BzLlVTRVIubGl2ZUNoYXRTdGFydGVkICYmIHByb3BzLlVTRVIubGl2ZUNoYXRTdGFydGVkICE9IHRoaXMucHJvcHMuVVNFUi5saXZlQ2hhdFN0YXJ0ZWQpIHx8IChwcm9wcy5VU0VSICYmIHByb3BzLlVTRVIuaXBkX2NoYXQgJiYgcHJvcHMuVVNFUi5pcGRfY2hhdC5zaG93SXBkQ2hhdCkpIHtcbiAgICAgICAgICAgIC8vdGhpcy5zZW5kVXNlckRldGFpbHMocHJvcHMuVVNFUilcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93U3RhdGljVmlldzogZmFsc2UsIGlmcmFtZUxvYWRpbmc6IHRydWUgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoaWRlSWZyYW1lOiBmYWxzZSB9LCAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGlmcmFtZSA9IHRoaXMucmVmcy5jaGF0X2ZyYW1lXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZnJhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmcmFtZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlmcmFtZUxvYWRpbmc6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaWZyYW1lTG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBpZnJhbWUxID0gdGhpcy5yZWZzLmNoYXRfZnJhbWUxXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZnJhbWUxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZnJhbWUxLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaWZyYW1lTG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpZnJhbWVMb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuVVNFUiAmJiAhcHJvcHMuVVNFUi5saXZlQ2hhdFN0YXJ0ZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1N0YXRpY1ZpZXc6IGlzX3RoeXJvY2FyZSA/IGZhbHNlIDogdHJ1ZSwgaWZyYW1lTG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZGlzcGF0Y2hDdXN0b21FdmVudChldmVudE5hbWUsIGRhdGEgPSB7fSkge1xuICAgICAgICBsZXQgZXZlbnQgPSBuZXcgRXZlbnQoZXZlbnROYW1lKVxuICAgICAgICBsZXQgaWZyYW1lID0gdGhpcy5yZWZzLmNoYXRfZnJhbWVcblxuICAgICAgICBpZiAoaWZyYW1lICYmIGlmcmFtZS5jb250ZW50V2luZG93KSB7XG4gICAgICAgICAgICBpZnJhbWUuZGlzcGF0Y2hFdmVudChldmVudClcbiAgICAgICAgICAgIGlmcmFtZS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKHsgJ2V2ZW50JzogZXZlbnROYW1lLCBkYXRhIH0sICcqJylcbiAgICAgICAgfVxuICAgICAgICBsZXQgaWZyYW1lMSA9IHRoaXMucmVmcy5jaGF0X2ZyYW1lMVxuICAgICAgICBpZiAoaWZyYW1lMSAmJiBpZnJhbWUxLmNvbnRlbnRXaW5kb3cpIHtcbiAgICAgICAgICAgIGlmcmFtZTEuZGlzcGF0Y2hFdmVudChldmVudClcbiAgICAgICAgICAgIGlmcmFtZTEuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZSh7ICdldmVudCc6IGV2ZW50TmFtZSwgZGF0YSB9LCAnKicpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbG9zZUNoYXQoKSB7XG4gICAgICAgIGxldCBwYXJzZWRIcmVmID0gJydcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcGFyc2VkSHJlZiA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIH1cblxuICAgICAgICBTVE9SQUdFLmdldEF1dGhUb2tlbigpLnRoZW4oKHRva2VuKSA9PiB7XG4gICAgICAgICAgICB0b2tlbiA9IHRva2VuIHx8IFwiXCJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b2tlbiwgaW5pdGlhbE1lc3NhZ2U6IFwiXCIsIHNlbGVjdGVkUm9vbTogbnVsbCB9KVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmRpc3BhdGNoQ3VzdG9tRXZlbnQuY2FsbCh0aGlzLCAnY2xvc2VfZnJhbWUnKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0NhbmNlbDogIXRoaXMuc3RhdGUuc2hvd0NhbmNlbCB9KVxuICAgICAgICBpZiAocGFyc2VkSHJlZiAmJiBwYXJzZWRIcmVmLnBheW1lbnQgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICBsZXQgYnVpbGRVcmwgPSB0aGlzLmJ1aWxkVXJsKClcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5yZXBsYWNlKGJ1aWxkVXJsKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMuc2V0Q2hhdFJvb21JZChudWxsKVxuICAgICAgICB0aGlzLnByb3BzLnVuU2V0Q29tbW9uVXRtVGFncygnY2hhdCcpXG4gICAgICAgIGxldCB0aGF0ID0gdGhpc1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoYXQucHJvcHMuaXBkQ2hhdFZpZXcobnVsbClcbiAgICAgICAgfSwgMTAwMClcblxuICAgIH1cblxuICAgIGJ1aWxkVXJsKCkge1xuICAgICAgICByZXR1cm4gd2luZG93LnBhdGhuYW1lO1xuICAgIH1cblxuICAgIHRvZ2dsZUNhbmNlbChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q2FuY2VsOiAhdGhpcy5zdGF0ZS5zaG93Q2FuY2VsIH0pXG4gICAgfVxuXG4gICAgaGlkZVN0YXRpY0NoYXQoZGF0YSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5tb2JpbGVjaGF0dmlldykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LmdvKC0xKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q2hhdEJsb2NrOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0TGl2ZUNoYXRXaXRoTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbml0aWFsTWVzc2FnZTogbWVzc2FnZSB9LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnN0YXJ0TGl2ZUNoYXQoKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNsb3NlQ2hhdENsaWNrKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5tb2JpbGVjaGF0dmlldykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LmdvKC0xKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q2hhdEJsb2NrOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYXRCdG5DbGljaygpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYXJ0aWNsZURhdGEgfHwgdGhpcy5wcm9wcy5zZWFyY2hUZXN0SW5mb0RhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q2hhdEJsb2NrOiB0cnVlLCBhZGRpdGlvbkNsYXNzZXM6IFwiXCIgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5uZXdDaGF0QnRuKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL21vYmlsZXZpZXdjaGF0P2JvdGFnZW50PXRydWUmZm9yY2Vfc3RhcnQ9dHJ1ZScpO1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NoYXQnLCAnQWN0aW9uJzogJ2dldEhlbHBCdG5DbGljaycsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NoYXQtYnV0dG9uLWNsaWNrZWQnLCBcInVybFwiOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5uZXdDaGF0QnRuQWRzICYmIHRoaXMucHJvcHMuYm9va2luZ3NHQSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9tb2JpbGV2aWV3Y2hhdD9ib3RhZ2VudD10cnVlJmZvcmNlX3N0YXJ0PXRydWUnKTtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDaGF0JywgJ0FjdGlvbic6ICdnZXRIZWxwQnRuQ2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjaGF0LWJ1dHRvbi1jbGlja2VkJywgXCJ1cmxcIjogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmV3Q2hhdEJ0bkNsaWNrKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy50eXBlICYmICh0aGlzLnByb3BzLnR5cGUgPT0gJ29wZCcgfHwgdGhpcy5wcm9wcy50eXBlID09ICdsYWInKSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9tb2JpbGV2aWV3Y2hhdD9ib3RhZ2VudD10cnVlJmZvcmNlX3N0YXJ0PXRydWUnKTtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDaGF0JywgJ0FjdGlvbic6ICduZWVkSGVscEJ0bkNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6IDAsICdldmVudCc6ICduZWVkLWhlbHAtYnRuLWNsaWNrZWQnLCBcIlBhZ2VUeXBlXCI6IHRoaXMucHJvcHMudHlwZSwgXCJ1cmxcIjogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dDaGF0QmxvY2s6IHRydWUsIGFkZGl0aW9uQ2xhc3NlczogXCJcIiB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uSWZyYW1lTG9hZChlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXRcbiAgICAgICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAodGFyZ2V0LmNvbnRlbnRXaW5kb3cgfHwgdGFyZ2V0LmNvbnRlbnREb2N1bWVudCkubG9jYXRpb24uaHJlZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBpbiByZW5kZXJpbmcgY2hhdCBpZnJhbWUnICsgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlZnVuZENsaWNrZWQoaXNFbmFibGUpIHtcbiAgICAgICAgaWYgKGlzRW5hYmxlKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ2hhdCcsICdBY3Rpb24nOiAnUmVmdW5kQnRuQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ1JlZnVuZC1idG4tY2xpY2tlZCcsIFwiUGFnZVR5cGVcIjogdGhpcy5wcm9wcy50eXBlLCBcInVybFwiOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVJlZnVuZFBvcHVwKClcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIk5vIHBheW1lbnQgZXhpc3RzIGZvciB0aGlzIGNvbnN1bHRhdGlvblwiIH0pXG4gICAgICAgICAgICB9LCAyMDApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVSZWZ1bmRQb3B1cCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5SZWZ1bmRQb3B1cDogIXRoaXMuc3RhdGUub3BlblJlZnVuZFBvcHVwIH0pXG4gICAgfVxuXG4gICAgc3VibWl0UmVmdW5kUmVhc29ucyhyZWFzb24pIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICByb29tSWQ6IHRoaXMuc3RhdGUucm9vbUlkLFxuICAgICAgICAgICAgcmVhc29uOiByZWFzb25cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpc3BhdGNoQ3VzdG9tRXZlbnQoJ1JlZnVuZF9GZWVzJywgZGF0YSlcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRQYXltZW50U3RhdHVzKG51bGwpXG4gICAgICAgIGxldCBidWlsZFVybCA9IHRoaXMuYnVpbGRVcmwoKVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucmVwbGFjZShidWlsZFVybClcbiAgICAgICAgdGhpcy50b2dnbGVSZWZ1bmRQb3B1cCgpXG4gICAgfVxuXG4gICAgc2VuZFBhZ2VVcmwgPSAoKSA9PiB7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgY2FsbGJhY2s6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdWJzdHJpbmcoMSkgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoLyYvZywnKicpLFxuICAgICAgICAgICAgdGVtcGxhdGU6IHRoaXMucHJvcHMubXNnVGVtcGxhdGUgPyB0aGlzLnByb3BzLm1zZ1RlbXBsYXRlIDogJ2NvbW1vbidcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLnNlbmRBZ2VudFdoYXRzdXBQYWdlVVJMKGRhdGEpLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJTZW50IFN1Y2Nlc3NmdWxseVwiIH0pXG4gICAgICAgICAgICB9LCA1MDApXG4gICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiVHJ5IGFnYWluIVwiIH0pXG4gICAgICAgICAgICB9LCA1MDApXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cblxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKVxuICAgICAgICBsZXQgZG9jdG9yRGF0YSA9IG51bGxcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuVVNFUi5jaGF0Um9vbUlkc1t0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbV0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLlVTRVIuY2hhdERvY3RvcnNbdGhpcy5wcm9wcy5VU0VSLmNoYXRSb29tSWRzW3RoaXMuc3RhdGUuc2VsZWN0ZWRSb29tXV0pIHtcbiAgICAgICAgICAgICAgICBkb2N0b3JEYXRhID0gdGhpcy5wcm9wcy5VU0VSLmNoYXREb2N0b3JzW3RoaXMucHJvcHMuVVNFUi5jaGF0Um9vbUlkc1t0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbV1dXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHN5bXB0b21zX3VyaSA9IHRoaXMuc3RhdGUuc3ltcHRvbXMucmVkdWNlKChzdHIsIGN1cnIpID0+IHtcbiAgICAgICAgICAgIHN0ciArPSBgJHtjdXJyfSxgXG4gICAgICAgICAgICByZXR1cm4gc3RyXG4gICAgICAgIH0sIFwiXCIpXG5cbiAgICAgICAgaWYgKHN5bXB0b21zX3VyaSkge1xuICAgICAgICAgICAgc3ltcHRvbXNfdXJpID0gZW5jb2RlVVJJQ29tcG9uZW50KHN5bXB0b21zX3VyaSlcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwYXJzZWRIcmVmID0gJydcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcGFyc2VkSHJlZiA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlmcmFtZV91cmwgPSBgJHtDT05GSUcuQ0hBVF9VUkx9P2NiPTEmdG9rZW49JHt0aGlzLnN0YXRlLnRva2VufSZzeW1wdG9tcz0ke3N5bXB0b21zX3VyaX0mcm9vbT0ke3RoaXMuc3RhdGUucm9vbUlkfSZmcm9tX2FwcD0ke3BhcnNlZEhyZWYuZnJvbV9hcHAgfHwgZmFsc2V9JmRldmljZV9pZD0ke3BhcnNlZEhyZWYuZGV2aWNlX2lkIHx8ICcnfWBcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pbml0aWFsTWVzc2FnZSAmJiAhdGhpcy5zdGF0ZS5zaG93U3RhdGljVmlldykge1xuICAgICAgICAgICAgaWZyYW1lX3VybCArPSBgJm1zZz0ke3RoaXMuc3RhdGUuaW5pdGlhbE1lc3NhZ2V9YFxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGJvdEFnZW50ID0gZmFsc2VcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdib3RhZ2VudCcpKSB7XG4gICAgICAgICAgICBib3RBZ2VudCA9IHRydWVcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnR5cGUgJiYgdGhpcy5wcm9wcy50eXBlID09ICdvcGQnKSB7XG4gICAgICAgICAgICAgICAgaWZyYW1lX3VybCArPSBgJmJvdGFnZW50PURvY1ByaW1lU09UJnNvdXJjZT1kb2N0b3JsaXN0aW5nY2hhdG5vd2BcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5uZXdDaGF0QnRuQWRzKSB7XG4gICAgICAgICAgICAgICAgaWZyYW1lX3VybCArPSBgJmJvdGFnZW50PURvY1ByaW1lU09UJnNvdXJjZT1sZWFkZm9ybWNoYXRub3dgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmcmFtZV91cmwgKz0gYCZib3RhZ2VudD1Eb2NQcmltZVNPVCZzb3VyY2U9bGFibGlzdGluZ2NoYXRub3dgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGlzX3JlbGlnYXJlID0gZmFsc2VcbiAgICAgICAgaWYgKGZhbHNlICYmIHRoaXMucHJvcHMuVVNFUiAmJiB0aGlzLnByb3BzLlVTRVIuY29tbW9uX3V0bV90YWdzICYmIHRoaXMucHJvcHMuVVNFUi5jb21tb25fdXRtX3RhZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgcmVsaWdhcmVUYWcgPSB0aGlzLnByb3BzLlVTRVIuY29tbW9uX3V0bV90YWdzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAnY2hhdCcgJiYgeC51dG1fc291cmNlID09ICdyZWxpZ2FyZScpXG5cbiAgICAgICAgICAgIGlmIChyZWxpZ2FyZVRhZy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpc19yZWxpZ2FyZSA9IHRydWVcbiAgICAgICAgICAgICAgICBpZnJhbWVfdXJsICs9IGAmc291cmNlPXJlbGlnYXJlJnZpc2l0aWQ9JHtyZWxpZ2FyZVRhZ1swXS52aXNpdG9ySWR9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJzZWRIcmVmICYmIHBhcnNlZEhyZWYudXRtX3NvdXJjZSkge1xuXG4gICAgICAgICAgICBpZiAocGFyc2VkSHJlZi51dG1fc291cmNlICE9ICdyZWxpZ2FyZScpIHtcbiAgICAgICAgICAgICAgICBpZnJhbWVfdXJsICs9IGAmc291cmNlPSR7cGFyc2VkSHJlZi51dG1fc291cmNlfWBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFpc19yZWxpZ2FyZSAmJiBwYXJzZWRIcmVmLnV0bV9zb3VyY2UuaW5jbHVkZXMoJ3JlbGlnYXJlJykpIHtcbiAgICAgICAgICAgICAgICBpc19yZWxpZ2FyZSA9IHRydWVcbiAgICAgICAgICAgICAgICBpZnJhbWVfdXJsICs9IGAmc291cmNlPXJlbGlnYXJlJnZpc2l0aWQ9JHtwYXJzZWRIcmVmLnZpc2l0aWQgPyBwYXJzZWRIcmVmLnZpc2l0aWQgOiAnJ31gXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBpc19yZWxpZ2FyZSA9IGlzX3JlbGlnYXJlICYmIHRoaXMucHJvcHMubW9iaWxlY2hhdHZpZXdcbiAgICAgICAgbGV0IGNoYXRCdG5Db250ZW50MSA9ICcnXG4gICAgICAgIGxldCBjaGF0QnRuQ29udGVudDIgPSAnJ1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5hcnRpY2xlRGF0YSAmJiB0aGlzLnByb3BzLmFydGljbGVEYXRhLnRpdGxlKSB7XG4gICAgICAgICAgICBjaGF0QnRuQ29udGVudDEgPSAnQ2hhdCBub3cgd2l0aCBkb2N0b3InXG4gICAgICAgICAgICBjaGF0QnRuQ29udGVudDIgPSAnYWJvdXQgJyArIHRoaXMucHJvcHMuYXJ0aWNsZURhdGEudGl0bGUuc3BsaXQoJ3wnKVswXSArICcgYW5kIHJlbGF0ZWQgcXVlcmllcydcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLm5ld0NoYXRCdG4gfHwgdGhpcy5wcm9wcy5uZXdDaGF0QnRuQWRzKSB7XG4gICAgICAgICAgICBjaGF0QnRuQ29udGVudDEgPSA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMTggfX0gPjxpbWcgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDgsIHdpZHRoOiAyNCwgdmVydGljYWxBbGlnbjogJ21pZGRsZScgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvaGVhZHBob25lLnN2Z1wifSAvPkdldCBoZWxwIHdpdGggeW91ciBib29raW5nczwvc3Bhbj5cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZWNlbnRBcnRpY2xlcyA9IGZhbHNlXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmFydGljbGVEYXRhICYmIHRoaXMucHJvcHMuYXJ0aWNsZURhdGEucmVjZW50X2FydGljbGVzKSB7XG4gICAgICAgICAgICByZWNlbnRBcnRpY2xlcyA9IHRoaXMucHJvcHMuYXJ0aWNsZURhdGEucmVjZW50X2FydGljbGVzXG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vaWYodGhpcy5wcm9wcy5zaG93SGFsZlNjcmVlbkNoYXQgJiYgdGhpcy5wcm9wcy5pcGRGb3JtUGFyYW1zKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLlVTRVIgJiYgdGhpcy5wcm9wcy5VU0VSLmlwZF9jaGF0ICYmIHRoaXMucHJvcHMuVVNFUi5pcGRfY2hhdC5pcGRGb3JtICYmIGZhbHNlKSB7XG5cbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLlVTRVIuaXBkX2NoYXQuaXBkRm9ybSlcbiAgICAgICAgICAgIGlmcmFtZV91cmwgKz0gYCZwcm9kdWN0PUlQRCZwYXJhbXM9JHtwYXJhbXN9Jm1zZz1zdGFydGNoYXRgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZnJhbWVfdXJsICs9ICcmcHJvZHVjdD1Eb2NQcmltZSdcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJzZWRIcmVmLmJvb2tpbmdfaWQpIHtcbiAgICAgICAgICAgIGlmcmFtZV91cmwgKz0gYCZib29raW5nX2lkPSR7cGFyc2VkSHJlZi5ib29raW5nX2lkfWBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJzZWRIcmVmLnV0bV9zb3VyY2UgJiYgcGFyc2VkSHJlZi51dG1fc291cmNlLmluY2x1ZGVzKCdUaHlyb2NhcmUnKSkge1xuICAgICAgICAgICAgaWZyYW1lX3VybCArPSAnJm1zZz1zdGFydGNoYXQnXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyc2VkSHJlZi5wYXltZW50KSB7XG4gICAgICAgICAgICBpZnJhbWVfdXJsICs9IGAmcGF5bWVudD0ke3BhcnNlZEhyZWYucGF5bWVudH1gXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyc2VkSHJlZi5vcmRlcl9pZCkge1xuICAgICAgICAgICAgaWZyYW1lX3VybCArPSBgJm9yZGVyX2lkPSR7cGFyc2VkSHJlZi5vcmRlcl9pZH1gXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcGF5bWVudF9kaXNhYmxlID0gcGFyc2VkSHJlZiAmJiBwYXJzZWRIcmVmLnV0bV9jYW1wYWlnbiAmJiBwYXJzZWRIcmVmLnV0bV9jYW1wYWlnbi5pbmNsdWRlcygnQWREb2NDaGF0JykgPyBwYXJzZWRIcmVmLnV0bV9jYW1wYWlnbi5pbmNsdWRlcygnQWREb2NDaGF0JykgOiBudWxsXG5cbiAgICAgICAgaWYgKHBhcnNlZEhyZWYudXRtX2NhbXBhaWduKSB7XG4gICAgICAgICAgICBpZnJhbWVfdXJsICs9IGAmdXRtX2NhbXBhaWduPSR7cGFyc2VkSHJlZi51dG1fY2FtcGFpZ259YFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBheW1lbnRfZGlzYWJsZSkge1xuICAgICAgICAgICAgaWZyYW1lX3VybCArPSBgJnRlc3RpbmdfbW9kZT1hYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWZyYW1lX3VybCArPSBgJnRlc3RpbmdfbW9kZT1iYFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcnNlZEhyZWYgJiYgcGFyc2VkSHJlZi5jb25zdWx0YXRpb25faWQpIHtcbiAgICAgICAgICAgIGlmcmFtZV91cmwgKz0gYCZjb25zdWx0YXRpb25faWQ9JHtwYXJzZWRIcmVmLmNvbnN1bHRhdGlvbl9pZH1gXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXNfcGF5bWVudF9mb3JfY3VycmVudF9yb29tID0gbnVsbFxuICAgICAgICBsZXQgc2hvd19kaXNhYmxlZF9yZWZ1bmRfYnV0dG9uID0gbnVsbFxuICAgICAgICBpZiAodGhpcy5wcm9wcy5VU0VSICYmIHRoaXMucHJvcHMuVVNFUi5jdXJyZW50Um9vbUlkKSB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLlVTRVIuY2hhdFBheW1lbnRTdGF0dXMgPT0gdGhpcy5wcm9wcy5VU0VSLmN1cnJlbnRSb29tSWQpIHtcbiAgICAgICAgICAgICAgICBpc19wYXltZW50X2Zvcl9jdXJyZW50X3Jvb20gPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5VU0VSLm1vYmlsZVZlcmlmaWNhdGlvbkRvbmUgPT0gdGhpcy5wcm9wcy5VU0VSLmN1cnJlbnRSb29tSWQpIHtcbiAgICAgICAgICAgICAgICBzaG93X2Rpc2FibGVkX3JlZnVuZF9idXR0b24gPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zaG93SGFsZlNjcmVlbkNoYXQgJiYgIXRoaXMucHJvcHMuc2hvd0Rlc2t0b3BJcGQpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgU1RPUkFHRS5pc0FnZW50KCkgfHwgdGhpcy5zdGF0ZS5oaWRlSWZyYW1lID8gXCJcIiA6IDxpZnJhbWUgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmhvbWVQYWdlID8gYGNoYXQtaWZyYW1lICR7dGhpcy5zdGF0ZS5pZnJhbWVMb2FkaW5nID8gJ2Qtbm9uZScgOiAnJ31gIDogYGNoYXQtaWZyYW1lLWlubmVyIGZsb2F0LWNoYXQtaGVpZ2h0ICR7dGhpcy5zdGF0ZS5pZnJhbWVMb2FkaW5nID8gJ2Qtbm9uZScgOiAnJ31gfSBzcmM9e2lmcmFtZV91cmx9IGFsbG93PVwibWljcm9waG9uZTtjYW1lcmFcIiByZWY9XCJjaGF0X2ZyYW1lMVwiPjwvaWZyYW1lPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaWZyYW1lTG9hZGluZyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXItZm9yLWNoYXQtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkZXItZm9yLWNoYXQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGRuZy10ZXh0XCI+Q29ubmVjdGluZyB0byB0aGUgZG9jdG9yLi4uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93Q2FuY2VsID8gPENhbmNlbFBvcHVwIGhvbWVQYWdlPXt0aGlzLnByb3BzLmhvbWVQYWdlfSB0b2dnbGU9e3RoaXMudG9nZ2xlQ2FuY2VsLmJpbmQodGhpcyl9IGNsb3NlQ2hhdD17dGhpcy5jbG9zZUNoYXQuYmluZCh0aGlzKX0gLz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZC1jaGF0Ym94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5ob21lUGFnZSAmJiBmYWxzZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItY29udC1oZWlnaHQgaG9tZS1wYWdlLWJhbm5lci1kaXYgbXItMCBiYW5uZXItbWQtbWFyZ24gaG9tZS1ibm5yLW1yZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVyQmFubmVyIGJhbm5lci1jYXJvdXNlbC1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkhlaWdodCBtLTBcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiNXB4IWltcG9ydGFudFwiIH19PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISEhdGhpcy5wcm9wcy5jaGF0UGFnZSAmJiB0aGlzLnByb3BzLm9mZmVyTGlzdCAmJiB0aGlzLnByb3BzLm9mZmVyTGlzdC5maWx0ZXIoeCA9PiB4LnNsaWRlcl9sb2NhdGlvbiA9PT0gJ2hvbWVfcGFnZScpLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1iYW5uZXItcG9zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFubmVyQ2Fyb3VzZWwgey4uLnRoaXMucHJvcHN9IHNsaWRlckxvY2F0aW9uPVwiaG9tZV9wYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSAmJiB0aGlzLnByb3BzLmNoYXRQYWdlICYmIHRoaXMucHJvcHMub2ZmZXJMaXN0ICYmIHRoaXMucHJvcHMub2ZmZXJMaXN0LmZpbHRlcih4ID0+IHguc2xpZGVyX2xvY2F0aW9uID09PSAnb25saW5lX2NvbnN1bHRhdGlvbicpLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYW5uZXJDYXJvdXNlbCB7Li4udGhpcy5wcm9wc30gc2xpZGVyTG9jYXRpb249XCJvbmxpbmVfY29uc3VsdGF0aW9uXCIgY2hhdFBhZ2U9e3RoaXMucHJvcHMuY2hhdFBhZ2V9IC8+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm9wZW5SZWZ1bmRQb3B1cCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGF0UmVmdW5kUmVhc29ucyBzdWJtaXRSZWZ1bmQ9e3RoaXMuc3VibWl0UmVmdW5kUmVhc29ucy5iaW5kKHRoaXMpfSB0b2dnbGVSZWZ1bmQ9eygpID0+IHRoaXMudG9nZ2xlUmVmdW5kUG9wdXAoKX0gLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaG9tZVBhZ2UgfHwgdGhpcy5wcm9wcy5tb2JpbGVjaGF0dmlldyB8fCB0aGlzLnByb3BzLm5vQ2hhdEJ1dHRvbiB8fCB0aGlzLnByb3BzLmFydGljbGVEYXRhIHx8IHRoaXMucHJvcHMuc2VhcmNoVGVzdEluZm9EYXRhID8gJycgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm5ld0NoYXRCdG4gfHwgdGhpcy5wcm9wcy5uZXdDaGF0QnRuQWRzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNoYXQtYXJ0aWNsZS1idG4gZml4ZWQgaG9yaXpvbnRhbCBib3R0b20gbm8tcm91bmQgZC1tZC1ub25lIGZ3LTUwMCB0ZXh0LWNlbnRlclwiIG9uQ2xpY2s9eygpID0+IHRoaXMuY2hhdEJ0bkNsaWNrKCl9ID57Y2hhdEJ0bkNvbnRlbnQxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjaGF0QnRuQ29udGVudDJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8ZGl2IGNsYXNzTmFtZT17XCJjaGF0LWZsb2F0LWJ0biBkLWxnLW5vbmUgZC1tZC1ub25lXCIgKyAodGhpcy5wcm9wcy5leHRyYUNsYXNzIHx8IFwiXCIpfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd0NoYXRCbG9jazogdHJ1ZSwgYWRkaXRpb25DbGFzc2VzOiBcIlwiIH0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgPGltZyB3aWR0aD1cIjgwXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZmxvYXRpbmdpY29uLnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwibmV3LWNoYXQtZml4ZWQtYnRuIGQtbWQtbm9uZVwiIG9uQ2xpY2s9eygpID0+IHRoaXMubmV3Q2hhdEJ0bkNsaWNrKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvY2hhdC1idG4tbmV3LnN2Zyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWFyY2hUZXN0SW5mb0RhdGEgJiYgdGhpcy5wcm9wcy51cGRhdGVUYWJzVmFsdWVzICYmIHRoaXMucHJvcHMucmVzcF90ZXN0X2lkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1vZi1jb250ZW50LWRlc2t0b3AgbXQtMjFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZU9mQ29udGVudCBzZWFyY2hUZXN0SW5mb0RhdGE9e3RoaXMucHJvcHMuc2VhcmNoVGVzdEluZm9EYXRhfSB1cGRhdGVUYWJzVmFsdWVzPXt0aGlzLnByb3BzLnVwZGF0ZVRhYnNWYWx1ZXN9IHJlc3BfdGVzdF9pZD17dGhpcy5wcm9wcy5yZXNwX3Rlc3RfaWR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7dGhpcy5zdGF0ZS5zaG93Q2hhdEJsb2NrID8gXCJmbG9hdGluZy1jaGF0IFwiIDogXCJcIn0gJHtpc19yZWxpZ2FyZSA/ICcgY2hhdC1ybGdyLXZpZXcnIDogJyd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dTdGF0aWNWaWV3ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGF0U3RhdGljVmlldyB7Li4udGhpcy5wcm9wc30gc3RhcnRMaXZlQ2hhdFdpdGhNZXNzYWdlPXt0aGlzLnN0YXJ0TGl2ZUNoYXRXaXRoTWVzc2FnZS5iaW5kKHRoaXMpfSBoaWRlU3RhdGljQ2hhdD17dGhpcy5oaWRlU3RhdGljQ2hhdC5iaW5kKHRoaXMpfSBzaG93Q2hhdEJsb2NrPXt0aGlzLnN0YXRlLnNob3dDaGF0QmxvY2t9IGRhdGFDbGFzcz17dGhpcy5zdGF0ZS5zaG93Q2hhdEJsb2NrID8gXCJjaGF0Ym94LXJpZ2h0IHRlc3QtY2hhdCBcIiA6IGAke3RoaXMucHJvcHMuaG9tZVBhZ2UgPyAnY2hhdGJveC1yaWdodCcgOiAnY2hhdGJveC1yaWdodCBjaGF0LXNsaWRlLWRvd24gZC1sZy1mbGV4IG10LTIxJ30gJHt0aGlzLnByb3BzLmhvbWVQYWdlID8gJycgOiB0aGlzLnN0YXRlLmFkZGl0aW9uQ2xhc3Nlc31gfSBpc19yZWxpZ2FyZT17aXNfcmVsaWdhcmV9IHNlbmRQYWdlVXJsPXt0aGlzLnNlbmRQYWdlVXJsfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zaG93Q2hhdEJsb2NrID8gXCJjaGF0Ym94LXJpZ2h0IHRlc3QtY2hhdFwiIDogYCR7dGhpcy5wcm9wcy5ob21lUGFnZSA/ICdjaGF0Ym94LXJpZ2h0JyA6ICdjaGF0Ym94LXJpZ2h0IGNoYXQtc2xpZGUtZG93biBkLWxnLWZsZXggbXQtMjEnfSAke3RoaXMucHJvcHMuaG9tZVBhZ2UgPyAnJyA6IHRoaXMuc3RhdGUuYWRkaXRpb25DbGFzc2VzfWB9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIGNoYXQgaGVhZGVyICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1oZWFkXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZC1jaGF0XCIgc3R5bGU9e3sgZmxleDogMSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaCAmJiB0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnP2JvdGFnZW50JykgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgaGVhZGVyLXRleHQtY2hhdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVkLXR4dC1sdFwiPkdldCA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZWxwIHdpdGggQm9va2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNoYXRQYWdlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgaGVhZGVyLXRleHQtY2hhdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJoZWQtdHh0LWx0XCI+R2V0IGEgPC9zcGFuPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPbmxpbmUgRG9jdG9yIENvbnN1bHRhdGlvbiFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGVmdCBoZWFkZXItdGV4dC1jaGF0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxzcGFuIGNsYXNzTmFtZT1cImhlZC10eHQtbHRcIj5HZXQgYSA8L3NwYW4+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9ubGluZSBEb2N0b3IgQ29uc3VsdGF0aW9uIVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNodC1oZWFkLXJxc3QtYnRuIHJlZnVuZC1jaGF0XCIgc3R5bGU9e3RoaXMucHJvcHMuaG9tZVBhZ2UgPyB7fSA6IHt9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzX3JlbGlnYXJlICYmIHNob3dfZGlzYWJsZWRfcmVmdW5kX2J1dHRvbiAmJiA8cCBjbGFzc05hbWU9e2BjaHQtbmVlZC1idG4gY3Vyc29yLXBudHIgbXItMiAke2lzX3BheW1lbnRfZm9yX2N1cnJlbnRfcm9vbSA/ICcnIDogJ2Rpc2FibGUtYWxsJ31gfSBvbkNsaWNrPXsoKSA9PiB7IHRoaXMucmVmdW5kQ2xpY2tlZChpc19wYXltZW50X2Zvcl9jdXJyZW50X3Jvb20pIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY2hhdC1yZm5kLnBuZyd9IHN0eWxlPXt7IHdpZHRoOiAyOCB9fSAvPiA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyp0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbSA/IDxzcGFuIGNsYXNzTmFtZT1cIm1yLTJcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NoYXQnLCAnQWN0aW9uJzogJ0NhbGxCYWNrUmVxdWVzdGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2FsbGJhY2stcmVxdWVzdGVkJywgJ1Jvb21JZCc6IHRoaXMuc3RhdGUuc2VsZWN0ZWRSb29tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmNhbGxUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoQ3VzdG9tRXZlbnQuY2FsbCh0aGlzLCAnY2FsbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2FsbFRpbWVvdXQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYWxsVGltZW91dDogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6IDI2IH19IHNyYz1cIi9hc3NldHMvaW1nL2N1c3RvbWVyLWljb25zL2NoYXQtY2FsbC5zdmdcIiB0aXRsZT1cImdldCBhIGNhbGxiYWNrIGZyb20gZG9jdG9yXCIgLz5cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+IDogXCJcIiovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19yZWxpZ2FyZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQ2FuY2VsLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogMjYgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcmVsX2NoYXRjbG9zZS5zdmdcIn0gdGl0bGU9XCJzdGFydCBhIG5ldyBjaGF0XCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPHNwYW4gb25DbGljaz17dGhpcy50b2dnbGVDYW5jZWwuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAyNiB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jaGF0Y2xvc2Uuc3ZnXCJ9IHRpdGxlPVwic3RhcnQgYSBuZXcgY2hhdFwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dDaGF0QmxvY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpc19yZWxpZ2FyZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yXCIgb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZUNoYXRDbGljaygpfT48aW1nIGNsYXNzTmFtZT1cImNsb3NlLWNoYXRcIiBzdHlsZT17eyB3aWR0aDogMjYgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcmVsX2NoYXRtaW5pbWl6ZS5zdmdcIn0gLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxzcGFuIGNsYXNzTmFtZT1cIm1sLTJcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmNsb3NlQ2hhdENsaWNrKCl9PjxpbWcgY2xhc3NOYW1lPVwiY2xvc2UtY2hhdFwiIHN0eWxlPXt7IHdpZHRoOiAyNiB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jaGF0bWluaW1pemUuc3ZnXCJ9IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBjaGF0IGhlYWRlciAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogY2hhdCBCb2R5ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNUT1JBR0UuaXNBZ2VudCgpIHx8IHRoaXMuc3RhdGUuaGlkZUlmcmFtZSA/IFwiXCIgOiA8aWZyYW1lIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5ob21lUGFnZSA/IGBjaGF0LWlmcmFtZSAke3RoaXMuc3RhdGUuaWZyYW1lTG9hZGluZyA/ICdkLW5vbmUnIDogJyd9YCA6IGBjaGF0LWlmcmFtZS1pbm5lciBmbG9hdC1jaGF0LWhlaWdodCAke3RoaXMuc3RhdGUuaWZyYW1lTG9hZGluZyA/ICdkLW5vbmUnIDogJyd9YH0gc3JjPXtpZnJhbWVfdXJsfSBhbGxvdz1cIm1pY3JvcGhvbmU7Y2FtZXJhXCIgcmVmPVwiY2hhdF9mcmFtZVwiIG9uTG9hZD17KGUpID0+IHRoaXMub25JZnJhbWVMb2FkKGUpfSBvbkVycm9yPXsoZSkgPT4gdGhpcy5vbklmcmFtZUxvYWQoZSl9ID48L2lmcmFtZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlmcmFtZUxvYWRpbmcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyLWZvci1jaGF0LWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGVyLWZvci1jaGF0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxkbmctdGV4dFwiPkNvbm5lY3RpbmcgdG8gdGhlIGRvY3Rvci4uLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBjaGF0IEJvZHkgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmhvbWVQYWdlID8gYGNoYXQtZm9vdGVyIG10LTIxYCA6IGBjaGF0LWZvb3RlciBtdC0yMSBkLW5vbmUgZC1tZC1ibG9ja2B9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cm5nLW1zc2dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IGhlaWdodDogMjQsIHdpZHRoOiAyNCB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltYWdlcy93YXJuaW5nLWljb24ucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdCBmb3IgZW1lcmdlbmNpZXMhIEluIHRoZSBjYXNlIG9mIGVtZXJnZW5jeSBwbGVhc2UgdmlzaXQgYSBob3NwaXRhbC4gQ2hhdCBpcyBvbmx5IGFwcGxpY2FibGUgdG8gSW5kaWFuIGNpdGl6ZW5zIGN1cnJlbnRseSByZXNpZGluZyBpbiBJbmRpYS48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wcm9wcy5hcnRpY2xlRGF0YSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRlZC1hcnRpY2xlcy1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnByb3BzLmFydGljbGVEYXRhLmxpbmtlZC5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0ZWQtYXJ0aWNsZS1zdWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFydGljbGVEYXRhLmxpbmtlZC5tYXAoKGxpbmtlZEFydGljbGUsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxSZWxhdGVkQXJ0aWNsZXMga2V5PXtpfSBsaW5rZWRBcnRpY2xlPXtsaW5rZWRBcnRpY2xlfSB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHJlY2VudEFydGljbGVzICYmIHJlY2VudEFydGljbGVzLml0ZW1zICYmIHJlY2VudEFydGljbGVzLml0ZW1zLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxSZWNlbnRBcnRpY2xlcyByZWNlbnRBcnRpY2xlc0l0ZW1zPXtyZWNlbnRBcnRpY2xlcy5pdGVtc30gcmVjZW50QXJ0aWNsZVRpdGxlPXtyZWNlbnRBcnRpY2xlcy50aXRsZX0gLz4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNUT1JBR0UuaXNBZ2VudCgpICYmICF0aGlzLnByb3BzLmhvbWVQYWdlICYmIHRoaXMucHJvcHMubXNnVGVtcGxhdGU/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNlbmRQYWdlVXJsfSBjbGFzc05hbWU9XCJ3aHRzYXBwUGFnZXNcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvd2EtbG9nby5zdmcnfSAvPlNlbmQgb24gV2hhdHNhcHA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDaGF0UGFuZWxcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY2xhc3MgQ2hhdFJlZnVuZFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0cmVmdW5kUmVhc29uOicnLFxuXHRcdFx0c2hvd0Vycm9yOiBmYWxzZVxuXHRcdH1cblx0fVxuXG5cdHNlbGVjdFJlYXNvbihyZWFzb24pe1xuXHRcdHRoaXMuc2V0U3RhdGUoe3JlZnVuZFJlYXNvbjogcmVhc29uLCBzaG93RXJyb3I6IGZhbHNlfSlcblx0fVxuXG5cdHN1Ym1pdCgpe1xuXHRcdGlmKCF0aGlzLnN0YXRlLnJlZnVuZFJlYXNvbil7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtzaG93RXJyb3I6IHRydWV9KVxuXHRcdH1lbHNle1xuXHRcdFx0dGhpcy5wcm9wcy5zdWJtaXRSZWZ1bmQodGhpcy5zdGF0ZS5yZWZ1bmRSZWFzb24pXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYW5jZWwtb3ZlcmxheSBjYW5jZWwtb3ZlcmxheS16aW5kZXhcIiBvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKClcblx0XHRcdFx0XHR0aGlzLnByb3BzLnRvZ2dsZVJlZnVuZCgpXG5cdFx0XHRcdH19PlxuXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBjYW5jZWwtYXBwb2ludG1lbnQtZGl2IGNhbmNlbC1wb3B1cCBvdmVyZmxvdy1oaWRkZW4gcmVmdW5kLXBvcCBmb250LWFuYWx5emUgXCIgc3R5bGU9e3twYWRkaW5nOicxMnB4J319PlxuXHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwicmZuZC1jbHMtYnRuXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9pY29ucy9jbG9zZS5wbmcnfSBvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpXG5cdFx0XHRcdFx0XHR0aGlzLnByb3BzLnRvZ2dsZVJlZnVuZCgpXG5cdFx0XHRcdFx0fX0vPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVmdW5kLWNoYXQtaGRuZ1wiPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwicmZuZC1tbi1oZG5nXCI+QXJlIHlvdSBzdXJlPzwvcD5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInJmbmQtc3ViLWhkbmdcIj5PbmNlIHlvdSBwcm9jZWVkIGZ1cnRoZXIsIGNvbnN1bHRhdGlvbiB3aWxsIGVuZCBhbmQgcmVmdW5kIHdpbGwgYmUgaW5pdGlhdGVkLjwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJmbmQtbHN0LWNvbnRcIj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInJmbmQtbHN0LWhkbmdcIj4qUGxlYXNlIHByb3ZpZGUgeW91ciByZWFzb24gZm9yIHJlZnVuZDo8L3A+XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUuc2hvd0Vycm9yICYmIDxwIGNsYXNzTmFtZT1cInJmbmQtbHN0c3ViLWhkbmdcIj5TZWxlY3QgcmVhc29uIGZvciByZWZ1bmQ8L3A+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImR0bC1yYWRpb1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lci1yYWRpbyBtYi0wIGhwYS1jb250YWluZXItcmFkaW9cIj5RdWVyeSBub3QgYWRkcmVzc2VkIHByb3Blcmx5XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInJhZGlvXCIgb25DaGFuZ2U9eygpPT50aGlzLnNlbGVjdFJlYXNvbignUXVlcnkgbm90IGFkZHJlc3NlZCBwcm9wZXJseScpfSAvPjxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmsgaHBhLXJhZGlvIGhwYS1yYWRpby1nZW5kZXJcIiA+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZHRsLXJhZGlvXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJhZGlvIG1iLTAgaHBhLWNvbnRhaW5lci1yYWRpb1wiPlRyZWF0bWVudC9QcmVzY3JpcHRpb24gbm90IHByb3ZpZGVkXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInJhZGlvXCIgb25DaGFuZ2U9eygpPT50aGlzLnNlbGVjdFJlYXNvbignVHJlYXRtZW50L1ByZXNjcmlwdGlvbiBub3QgcHJvdmlkZWQnKX0gLz48c3BhbiBjbGFzc05hbWU9XCJkb2MtY2hlY2ttYXJrIGhwYS1yYWRpbyBocGEtcmFkaW8tZ2VuZGVyXCIgPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImR0bC1yYWRpb1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lci1yYWRpbyBtYi0wIGhwYS1jb250YWluZXItcmFkaW9cIj5Eb2N0b3IgdGFrZXMgdG9vIGxvbmcgdG8gcmVzcG9uZFxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJyYWRpb1wiIG9uQ2hhbmdlPXsoKT0+dGhpcy5zZWxlY3RSZWFzb24oJ0RvY3RvciB0YWtlcyB0b28gbG9uZyB0byByZXNwb25kJyl9IC8+PHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFyayBocGEtcmFkaW8gaHBhLXJhZGlvLWdlbmRlclwiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImR0bC1yYWRpb1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lci1yYWRpbyBtYi0wIGhwYS1jb250YWluZXItcmFkaW9cIj5Ob3QgaGFwcHkgd2l0aCBvdmVyYWxsIHNlcnZpY2Vcblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicmFkaW9cIiBvbkNoYW5nZT17KCk9PnRoaXMuc2VsZWN0UmVhc29uKCdOb3QgaGFwcHkgd2l0aCBvdmVyYWxsIHNlcnZpY2UnKX0gLz48c3BhbiBjbGFzc05hbWU9XCJkb2MtY2hlY2ttYXJrIGhwYS1yYWRpbyBocGEtcmFkaW8tZ2VuZGVyXCI+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZHRsLXJhZGlvXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJhZGlvIG1iLTAgaHBhLWNvbnRhaW5lci1yYWRpb1wiPk90aGVyc1xuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJyYWRpb1wiIG9uQ2hhbmdlPXsoKT0+e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNlbGVjdFJlYXNvbignT3RoZXJzJyl9fS8+PHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFyayBocGEtcmFkaW8gaHBhLXJhZGlvLWdlbmRlclwiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwicmZuZC1idG5cIiBvbkNsaWNrPXsoKT0+dGhpcy5zdWJtaXQoKX0+SW5pdGlhdGUgUmVmdW5kPC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0UmVmdW5kVmlldzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjaGF0X3V0bSB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvaW5kZXgnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuXG5cbmNsYXNzIENoYXRTdGF0aWMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgb3BlbkJhbm5lcjogdHJ1ZSxcbiAgICAgICAgICAgIHV0bV90ZXJtOiBwYXJzZWQudXRtX3Rlcm0gfHwgXCJcIixcbiAgICAgICAgICAgIEJhc2ljRW5xdWlyeTogcGFyc2VkLkJhc2ljRW5xdWlyeSB8fCBcIlwiLFxuICAgICAgICAgICAgdXRtX2xvYWRlcjogISFwYXJzZWQudXRtX3Rlcm0sXG4gICAgICAgICAgICBmb3JjZV9zdGFydDogcGFyc2VkLmZvcmNlX3N0YXJ0IHx8IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKCh0aGlzLnN0YXRlLkJhc2ljRW5xdWlyeSB8fCB0aGlzLnN0YXRlLmZvcmNlX3N0YXJ0KSAmJiB0aGlzLnByb3BzLm1vYmlsZWNoYXR2aWV3KSB7XG4gICAgICAgICAgICB0aGlzLmdldElmcmFtZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvKmlmICh0aGlzLnN0YXRlLnV0bV90ZXJtKSB7XG4gICAgICAgICAgICAgICAgY2hhdF91dG0odGhpcy5zdGF0ZS51dG1fdGVybSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmRhdGEgJiYgZGF0YS5kYXRhLkJhc2ljRW5xdWlyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IEJhc2ljRW5xdWlyeTogZGF0YS5kYXRhLkJhc2ljRW5xdWlyeSwgdXRtX2xvYWRlcjogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhc2ljRW5xdWlyeTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dG1fdGVybTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dG1fbG9hZGVyOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgQmFzaWNFbnF1aXJ5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXRtX3Rlcm06IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB1dG1fbG9hZGVyOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCYXNpY0VucXVpcnk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRtX3Rlcm06IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRtX2xvYWRlcjogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbnB1dEhhbmRsZXIoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlS2V5VXAoZSkge1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc3RhcnRMaXZlQ2hhdFdpdGhNZXNzYWdlKHRoaXMuc3RhdGUudmFsdWUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRJZnJhbWUoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuc3RhcnRMaXZlQ2hhdFdpdGhNZXNzYWdlKHRoaXMuc3RhdGUudmFsdWUgfHwgdGhpcy5zdGF0ZS5CYXNpY0VucXVpcnkpXG4gICAgfVxuXG4gICAgY2hlY2tPcGVuTW9iaWxlQ2hhdCgpIHtcbiAgICAgICAgLy8gaGFuZGxlIHN0YXRpYyBwYWdlIHJlZGlyZWN0cyBmb3IgaG9tZXBhZ2VcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaG9tZVBhZ2UgJiYgd2luZG93LmlubmVyV2lkdGggPCA3NjggJiYgIXRoaXMucHJvcHMubW9iaWxlY2hhdHZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvbW9iaWxldmlld2NoYXQ/QmFzaWNFbnF1aXJ5PSR7dGhpcy5zdGF0ZS5CYXNpY0VucXVpcnl9YClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLkJhc2ljRW5xdWlyeSAmJiB0aGlzLnByb3BzLmhvbWVQYWdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJZnJhbWUoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5CYW5uZXI6IGZhbHNlIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVVVE0oKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmhvbWVQYWdlICYmIHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4ICYmICF0aGlzLnByb3BzLm1vYmlsZWNoYXR2aWV3KSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL21vYmlsZXZpZXdjaGF0P0Jhc2ljRW5xdWlyeT0mZm9yY2Vfc3RhcnQ9dHJ1ZWApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB1dG1fdGVybTogXCJcIixcbiAgICAgICAgICAgICAgICBCYXNpY0VucXVpcnk6IFwiXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiXCJcbiAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldElmcmFtZSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgdGltZSA9IG5ldyBEYXRlKClcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5kYXRhQ2xhc3MgKyAodGhpcy5zdGF0ZS51dG1fdGVybSA/IFwiIHV0bV9jaGF0Ym94X3JpZ2h0XCIgOiBcIlwiKX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWhlYWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZC1jaGF0XCIgc3R5bGU9e3sgZmxleDogMSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNoYXRQYWdlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtbGVmdCBoZWFkZXItdGV4dC1jaGF0XCI+PHNwYW4gY2xhc3NOYW1lPVwiaGVkLXR4dC1sdFwiPjwvc3Bhbj5PbmxpbmUgRG9jdG9yIENvbnN1bHRhdGlvbiE8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGVmdCBoZWFkZXItdGV4dC1jaGF0XCI+PHNwYW4gY2xhc3NOYW1lPVwiaGVkLXR4dC1sdFwiPjwvc3Bhbj5PbmxpbmUgRG9jdG9yIENvbnN1bHRhdGlvbiE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNodC1oZWFkLXJxc3QtYnRuXCIgc3R5bGU9e3sgd2lkdGg6IDY0IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2hvd0NoYXRCbG9ja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHMuaXNfcmVsaWdhcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID88c3BhbiBjbGFzc05hbWU9XCJtbC0yXCIgb25DbGljaz17dGhpcy5wcm9wcy5oaWRlU3RhdGljQ2hhdC5iaW5kKHRoaXMpfT48aW1nIGNsYXNzTmFtZT1cImNsb3NlLWNoYXRcIiBzdHlsZT17eyB3aWR0aDogMjYgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcmVsX2NoYXRtaW5pbWl6ZS5zdmdcIn0gLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PHNwYW4gY2xhc3NOYW1lPVwibWwtMlwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGlkZVN0YXRpY0NoYXQuYmluZCh0aGlzKX0+PGltZyBjbGFzc05hbWU9XCJjbG9zZS1jaGF0XCIgc3R5bGU9e3sgd2lkdGg6IDI2IH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NoYXRtaW5pbWl6ZS5zdmdcIn0gLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudXRtX2xvYWRlciA/IDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci1mb3ItY2hhdC1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGVyLWZvci1jaGF0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZG5nLXRleHRcIj5Db25uZWN0aW5nIHRvIHRoZSBkb2N0b3IuLi48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogPGRpdiBjbGFzc05hbWU9XCJjaGF0LWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9ubG9hZC1jaGF0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGl2ZWNoYXQtcm9vbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0Ym9hdC1jb250YWluZXIgY2hhdGJvdF9kb2NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImhlcW1INmo5aHFoZHZwZ1d1XCIgY2xhc3NOYW1lPVwiY2hhbmRyYWthbnRhXCIgZGF0YS11c2VybmFtZT1cIlBCZWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluLW1zc2dzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjZWl2ZWQtbXNnIEhTX2ZvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNoYXQtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlbGNvbWUgdG8gRG9jcHJpbWUuIEJyaWVmbHkgZGVzY3JpYmUgeW91ciBzeW1wdG9tIG9yIGhlYWx0aCBjb25jZXJuIChlLmcuIEkgaGF2ZSBhIGZldmVyKS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZW5kLWNoYXQtdGltZVwiPnt0aW1lLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHsgaG91cjogJ251bWVyaWMnLCBtaW51dGU6ICdudW1lcmljJywgaG91cjEyOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJrUHhTRUdFRGJ0U2RtUHNwcVwiIGNsYXNzTmFtZT1cImNoYW5kcmFrYW50YSBjaGF0c2VxdWVudGlhbFwiIGRhdGEtdXNlcm5hbWU9XCJQQmVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbi1tc3Nnc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY2VpdmVkLW1zZyBIU19mb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS51dG1fdGVybSA/IDxwIGNsYXNzTmFtZT1cImNoYXQtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YExvb2tzIGxpa2UgeW91IG5lZWQgaGVscCB3aXRoICR7dGhpcy5zdGF0ZS5CYXNpY0VucXVpcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0IGNoYXQgZm9yIGFuIGluc3RhbnQgY29uc3VsdGF0aW9uIGFuZCBhYnNvbHV0ZWx5IGZyZWUgcHJlc2NyaXB0aW9uIHdpdGggb3VyIGRvY3RvcnMuYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VuZC1jaGF0LXRpbWVcIj57dGltZS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7IGhvdXI6ICdudW1lcmljJywgbWludXRlOiAnbnVtZXJpYycsIGhvdXIxMjogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4gOiAnJyAvKjxwIGNsYXNzTmFtZT1cImNoYXQtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnJpZWZseSBkZXNjcmliZSB0aGUgc3ltcHRvbS9oZWFsdGggY29uY2VybiB3b3JyeWluZyB5b3UgdGhlIG1vc3QgKGUuZy4gSSBoYXZlIGEgZmV2ZXIpIG9yIHNpbXBseSBhc2sgYW55IHF1ZXJ5LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlbmQtY2hhdC10aW1lXCI+e3RpbWUudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywgeyBob3VyOiAnbnVtZXJpYycsIG1pbnV0ZTogJ251bWVyaWMnLCBob3VyMTI6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4qL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyIGZvb3Rlcl9kb2NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudXRtX3Rlcm0gPyA8ZGl2IGNsYXNzTmFtZT1cInV0bS1jaGF0LWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ1dG0tY2hhdC1idG5cIiBvbkNsaWNrPXt0aGlzLmNoZWNrT3Blbk1vYmlsZUNoYXQuYmluZCh0aGlzKX0+U3RhcnQgQ2hhdCBmb3IgXCJ7dGhpcy5zdGF0ZS5CYXNpY0VucXVpcnl9XCI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInV0bS1jbGVhci1jaGF0XCIgb25DbGljaz17dGhpcy5yZW1vdmVVVE0uYmluZCh0aGlzKX0+T1I8c3BhbiBjbGFzc05hbWU9XCJ1dG0tc2FwcHJhdGVyXCI+U3RhcnQgY2hhdCBmb3IgYW55IG90aGVyIGhlYWx0aCBjb25jZXJuPzwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0X2Zvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUub3BlbkJhbm5lciAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvYXN0LXRpcC1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvYXN0LWNsb3NlLWJ0blwiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuQmFubmVyOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Nsb3NlLXdoaXRlLnN2Z1wifSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cm5nLW1zc2ctcG9wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IGhlaWdodDogMjQsIHdpZHRoOiAyNCB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltYWdlcy93YXJuaW5nLWljb24ucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Ob3QgZm9yIGVtZXJnZW5jaWVzISBJbiB0aGUgY2FzZSBvZiBlbWVyZ2VuY3kgcGxlYXNlIHZpc2l0IGEgaG9zcGl0YWwuICBDaGF0IGlzIG9ubHkgYXBwbGljYWJsZSB0byBJbmRpYW4gY2l0aXplbnMgY3VycmVudGx5IHJlc2lkaW5nIGluIEluZGlhLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JpdGUtbXNnLWJ4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiY3N0Ym94XCIgb25Gb2N1cz17dGhpcy5jaGVja09wZW5Nb2JpbGVDaGF0LmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cImZjLWlucHV0XCIgcGxhY2Vob2xkZXI9XCIgVHlwZSB5b3VyIG1lc3NhZ2UuLi4gXCIgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSBvbktleVVwPXsoZSkgPT4gdGhpcy5oYW5kbGVLZXlVcChlKX0+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZW5kX2ljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaXNfcmVsaWdhcmU/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzc05hbWU9XCJzZW5kLW1zZy1idG5cIiBvbkNsaWNrPXt0aGlzLmdldElmcmFtZS5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcmVsX3NlbmQuc3ZnXCJ9IGNsYXNzTmFtZT1cInNlbmQtbWQtaWNvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzc05hbWU9XCJzZW5kLW1zZy1idG5cIiBvbkNsaWNrPXt0aGlzLmdldElmcmFtZS5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvc2VuZC5zdmdcIn0gY2xhc3NOYW1lPVwic2VuZC1tZC1pY29uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm1vYmlsZWNoYXR2aWV3ICYmIHRoaXMuc3RhdGUub3BlbkJhbm5lciA/IDxkaXYgY2xhc3NOYW1lPVwidG9hc3QtdGlwLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvYXN0LWNsb3NlLWJ0blwiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbkJhbm5lcjogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvY2xvc2Utd2hpdGUuc3ZnXCJ9IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cm5nLW1zc2ctcG9wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBoZWlnaHQ6IDI0LCB3aWR0aDogMjQgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWFnZXMvd2FybmluZy1pY29uLnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk5vdCBmb3IgZW1lcmdlbmNpZXMhIEluIHRoZSBjYXNlIG9mIGVtZXJnZW5jeSBwbGVhc2UgdmlzaXQgYSBob3NwaXRhbC4gIENoYXQgaXMgb25seSBhcHBsaWNhYmxlIHRvIEluZGlhbiBjaXRpemVucyBjdXJyZW50bHkgcmVzaWRpbmcgaW4gSW5kaWEuPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0U3RhdGljOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IHRvZ2dsZSwgY2xvc2VDaGF0LCBob21lUGFnZSB9KSA9PiB7XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY2FuY2VsLW92ZXJsYXkgJHtob21lUGFnZT8nY2FuY2wtaG9tZXBnLXBvcHVwJzonJ31gfSBvbkNsaWNrPXt0b2dnbGV9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBjYW5jZWwtYXBwb2ludG1lbnQtZGl2IHBheW1lbnQtcG9wdXBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWhlYWRlciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBjYW5jZWwtYXBwb2ludG1lbnQtaGVhZFwiPkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjbG9zZSB0aGlzIGNoYXQ/PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IGNhbmNlbC1jb250ZW50LWRpdlwiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VDaGF0KClcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGNhbmNlbC1hcHBvaW50bWVudC1oZWFkXCI+WWVzPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgY2FuY2VsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAoWW91ciBjaGF0IHdpbGwgYmUgc2F2ZWQgaXMgY2hhdCBoaXN0b3J5KSAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbC1yaWdodC1hcnJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9hcnJvdy1mb3J3YXJkLXJpZ2h0LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgY2FuY2VsLWNvbnRlbnQtZGl2XCIgb25DbGljaz17dG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGNhbmNlbC1hcHBvaW50bWVudC1oZWFkXCI+Tm88L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBjYW5jZWwtY29udGVudFwiPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWwtcmlnaHQtYXJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvYXJyb3ctZm9yd2FyZC1yaWdodC5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8aHIgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgZ2V0VXNlclByb2ZpbGUsIHNldENoYXRSb29tSWQgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHsgZ2V0Q2hhdERvY3RvckJ5SWQsIHJlc2V0RmlsdGVycywgY2xlYXJFeHRyYVRlc3RzLCBzZWxlY3RMb2NhdGlvbiwgbG9naW5WaWFDaGF0LCBzdGFydExpdmVDaGF0LCB0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSwgdG9nZ2xlT1BEQ3JpdGVyaWEsIHVuU2V0Q29tbW9uVXRtVGFncywgaXBkQ2hhdFZpZXcsIHNldFBheW1lbnRTdGF0dXMsIHNlbmRBZ2VudFdoYXRzdXBQYWdlVVJMIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcblxuaW1wb3J0IENoYXRQYW5lbFZpZXcgZnJvbSAnLi9DaGF0UGFuZWwnXG5pbXBvcnQgUmVsYXRlZEFydGljbGVzIGZyb20gJy4uL2FydGljbGUvUmVsYXRlZEFydGljbGVzJ1xuaW1wb3J0IFJlY2VudEFydGljbGVzIGZyb20gJy4uL2FydGljbGUvUmVjZW50QXJ0aWNsZXMnXG5cbmNsYXNzIENoYXRQYW5lbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzc3JGbGFnOiB0aGlzLnByb3BzLmhvbWVQYWdlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNzckZsYWc6IHRydWUgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIGxldCByZWNlbnRBcnRpY2xlcyA9IGZhbHNlXG4gICAgICAgIC8vIGlmICh0aGlzLnByb3BzLmFydGljbGVEYXRhICYmIHRoaXMucHJvcHMuYXJ0aWNsZURhdGEucmVjZW50X2FydGljbGVzKSB7XG4gICAgICAgIC8vICAgICByZWNlbnRBcnRpY2xlcyA9IHRoaXMucHJvcHMuYXJ0aWNsZURhdGEucmVjZW50X2FydGljbGVzXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gbGV0IGN0X3N0eWxlID0gdGhpcy5wcm9wcy5ob21lUGFnZSA/IFwiY29sLW1kLTUgbWItM1wiIDogdGhpcy5wcm9wcy5jb2xDbGFzcyA/IFwiY29sLTEyIGNvbC1tZC01IG1iLTNcIiA6dGhpcy5wcm9wcy5uZXdDaGF0QnRuQWRzID8gJycgOiBcImNvbC1tZC01IG1iLTNcIlxuICAgICAgICAvLyBpZiAodGhpcy5wcm9wcy5ob21lUGFnZSAmJiAhdGhpcy5wcm9wcy5jaGF0UGFnZSlcbiAgICAgICAgLy8gICAgIGN0X3N0eWxlID0gXCJjb2wtbWQtNSBtYi0zIGQtbm9uZSBkLW1kLWJsb2NrXCJcbiAgICAgICAgLy8gaWYodGhpcy5wcm9wcy53ZWJDaGF0UGFnZSlcbiAgICAgICAgLy8gICAgIGN0X3N0eWxlID0gXCJjb2wtbWQtNyBtYi0zIG9ubG4tZG9jLWNuc2x0IFwiXG4vKiAgICAgIFxuICAgICAgICBpZigodGhpcy5wcm9wcy5VU0VSICYmIHRoaXMucHJvcHMuVVNFUi5pcGRfY2hhdCAmJiB0aGlzLnByb3BzLlVTRVIuaXBkX2NoYXQuc2hvd0lwZENoYXQpIHx8ICh0aGlzLnByb3BzLnNob3dIYWxmU2NyZWVuQ2hhdCAmJiAhdGhpcy5wcm9wcy5zaG93RGVza3RvcElwZCkpIHtcbiAgICAgICAgICAgIGN0X3N0eWxlID0gJydcbiAgICAgICAgfSovXG4gICAgICAgIC8vIGlmKHRoaXMucHJvcHMuc2hvd0hhbGZTY3JlZW5DaGF0KSB7XG4gICAgICAgIC8vICAgICBjdF9zdHlsZSA9ICdjaHQtaGlkZS1obGYtc2NybidcbiAgICAgICAgLy8gfVxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB7LypcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjdF9zdHlsZX0+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFydGljbGVEYXRhID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRlZC1hcnRpY2xlcy1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXJ0aWNsZURhdGEubGlua2VkLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0ZWQtYXJ0aWNsZS1zdWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXJ0aWNsZURhdGEubGlua2VkLm1hcCgobGlua2VkQXJ0aWNsZSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxSZWxhdGVkQXJ0aWNsZXMga2V5PXtpfSBsaW5rZWRBcnRpY2xlPXtsaW5rZWRBcnRpY2xlfSB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VudEFydGljbGVzICYmIHJlY2VudEFydGljbGVzLml0ZW1zICYmIHJlY2VudEFydGljbGVzLml0ZW1zLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVjZW50QXJ0aWNsZXMgcmVjZW50QXJ0aWNsZXNJdGVtcz17cmVjZW50QXJ0aWNsZXMuaXRlbXN9IHJlY2VudEFydGljbGVUaXRsZT17cmVjZW50QXJ0aWNsZXMudGl0bGV9IC8+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc3NyRmxhZyAmJiBmYWxzZT9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGF0UGFuZWxWaWV3IHsuLi50aGlzLnByb3BzfSAvPiA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAqL31cblxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwYXNzZWRQcm9wcyA9IHt9KSA9PiB7XG4gICAgY29uc3QgVVNFUiA9IHN0YXRlLlVTRVJcbiAgICBsZXQgRE9DVE9SUyA9IHN0YXRlLkRPQ1RPUlNcbiAgICBsZXQgZG9jdG9yX3NlYXJjaF9kYXRhID0ge31cbiAgICBsZXQgbGFiX3NlYXJjaF9kYXRhID0ge31cbiAgICBsZXQgc2VsZWN0ZWRMb2NhdGlvbiA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9PUEQuc2VsZWN0ZWRMb2NhdGlvblxuXG4gICAgZG9jdG9yX3NlYXJjaF9kYXRhLnNlbGVjdGVkQ3JpdGVyaWFzID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX09QRC5zZWxlY3RlZENyaXRlcmlhc1xuICAgIGRvY3Rvcl9zZWFyY2hfZGF0YS5zZWxlY3RlZExvY2F0aW9uID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX09QRC5zZWxlY3RlZExvY2F0aW9uXG4gICAgZG9jdG9yX3NlYXJjaF9kYXRhLmZpbHRlckNyaXRlcmlhID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX09QRC5maWx0ZXJDcml0ZXJpYVxuXG4gICAgbGFiX3NlYXJjaF9kYXRhLnNlbGVjdGVkQ3JpdGVyaWFzID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX0xBQlMuc2VsZWN0ZWRDcml0ZXJpYXNcbiAgICBsYWJfc2VhcmNoX2RhdGEuc2VsZWN0ZWRMb2NhdGlvbiA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9MQUJTLnNlbGVjdGVkTG9jYXRpb25cbiAgICBsYWJfc2VhcmNoX2RhdGEuZmlsdGVyQ3JpdGVyaWEgPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfTEFCUy5maWx0ZXJDcml0ZXJpYVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgVVNFUiwgRE9DVE9SUywgZG9jdG9yX3NlYXJjaF9kYXRhLCBsYWJfc2VhcmNoX2RhdGEsIC4uLnBhc3NlZFByb3BzLCBzZWxlY3RlZExvY2F0aW9uXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRDaGF0RG9jdG9yQnlJZDogKGRvY3RvcklkLCByb29tSWQsIGNiKSA9PiBkaXNwYXRjaChnZXRDaGF0RG9jdG9yQnlJZChkb2N0b3JJZCwgcm9vbUlkLCBjYikpLFxuICAgICAgICByZXNldEZpbHRlcnM6ICgpID0+IGRpc3BhdGNoKHJlc2V0RmlsdGVycygpKSxcbiAgICAgICAgY2xlYXJFeHRyYVRlc3RzOiAoKSA9PiBkaXNwYXRjaChjbGVhckV4dHJhVGVzdHMoKSksXG4gICAgICAgIHNlbGVjdExvY2F0aW9uOiAobG9jYXRpb24pID0+IGRpc3BhdGNoKHNlbGVjdExvY2F0aW9uKGxvY2F0aW9uKSksXG4gICAgICAgIGxvZ2luVmlhQ2hhdDogKHRva2VuKSA9PiBkaXNwYXRjaChsb2dpblZpYUNoYXQodG9rZW4pKSxcbiAgICAgICAgc2V0Q2hhdFJvb21JZDogKHJvb21JZCwgZXh0cmFQYXJhbXMpID0+IGRpc3BhdGNoKHNldENoYXRSb29tSWQocm9vbUlkLCBleHRyYVBhcmFtcykpLFxuICAgICAgICBzdGFydExpdmVDaGF0OiAoc3RhcnRlZCwgZGVsZXRlUm9vbUlkKSA9PiBkaXNwYXRjaChzdGFydExpdmVDaGF0KHN0YXJ0ZWQsIGRlbGV0ZVJvb21JZCkpLFxuICAgICAgICB0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYTogKHR5cGUsIHRlc3QsIGZvcmNlQWRkLCBmaWx0ZXJzKSA9PiBkaXNwYXRjaCh0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSh0eXBlLCB0ZXN0LCBmb3JjZUFkZCwgZmlsdGVycykpLFxuICAgICAgICB0b2dnbGVPUERDcml0ZXJpYTogKHR5cGUsIHRlc3QsIGZvcmNlQWRkLCBmaWx0ZXJzKSA9PiBkaXNwYXRjaCh0b2dnbGVPUERDcml0ZXJpYSh0eXBlLCB0ZXN0LCBmb3JjZUFkZCwgZmlsdGVycykpLFxuICAgICAgICB1blNldENvbW1vblV0bVRhZ3M6ICh0eXBlLCB0YWdzKSA9PiBkaXNwYXRjaCh1blNldENvbW1vblV0bVRhZ3ModHlwZSwgdGFncykpLFxuICAgICAgICBpcGRDaGF0VmlldzogKGRhdGEpID0+IGRpc3BhdGNoKGlwZENoYXRWaWV3KGRhdGEpKSxcbiAgICAgICAgc2V0UGF5bWVudFN0YXR1czogKHN0YXR1cykgPT4gZGlzcGF0Y2goc2V0UGF5bWVudFN0YXR1cyhzdGF0dXMpKSxcbiAgICAgICAgc2VuZEFnZW50V2hhdHN1cFBhZ2VVUkw6IChleHRyYVBhcmFtcywgY2IpID0+IGRpc3BhdGNoKHNlbmRBZ2VudFdoYXRzdXBQYWdlVVJMKGV4dHJhUGFyYW1zLCBjYikpXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKHdpdGhSb3V0ZXIoQ2hhdFBhbmVsKSlcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuXG5jbGFzcyBCYW5uZXJDYXJvdXNlbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpbmRleDogMCxcbiAgICAgICAgICAgIHN0YXJ0WDogMCxcbiAgICAgICAgICAgIHN0YXJ0WTogMCxcbiAgICAgICAgICAgIGRpc3RYOiAwLFxuICAgICAgICAgICAgZGlzdFk6IDAsXG4gICAgICAgICAgICBpbnRlcnZhbEZsYWc6IGZhbHNlLFxuICAgICAgICAgICAgaW50ZXJ2YWxJZDonJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCB0b3RhbE9mZmVycyA9ICcnXG4gICAgICAgIGxldCBmaWx0ZXJlZEJhbm5lcnMgPSB0aGlzLmdldEZpbHRlcmVkQmFubmVycygpO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5zbGlkZXJMb2NhdGlvbiAmJiBmaWx0ZXJlZEJhbm5lcnMpIHtcbiAgICAgICAgICAgIHRvdGFsT2ZmZXJzID0gZmlsdGVyZWRCYW5uZXJzLmxlbmd0aDtcbiAgICAgICAgICAgIGxldCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjdXJyX2luZGV4ID0gdGhpcy5zdGF0ZS5pbmRleFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmludGVydmFsRmxhZykge1xuICAgICAgICAgICAgICAgICAgICBjdXJyX2luZGV4ID0gY3Vycl9pbmRleCArIDFcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJfaW5kZXggPj0gdG90YWxPZmZlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJfaW5kZXggPSAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGluZGV4OiBjdXJyX2luZGV4LCBpbnRlcnZhbEZsYWc6IHRydWUgfSlcbiAgICAgICAgICAgIH0sIDUwMDApXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW50ZXJ2YWxJZCB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zdGF0ZS5pbnRlcnZhbElkKVxuICAgICAgICB9Y2F0Y2goZSl7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5hdmlnYXRlVG8ob2ZmZXIpIHtcbiAgICAgICAgaWYgKG9mZmVyLnVybF9kZXRhaWxzICYmIG9mZmVyLnVybF9kZXRhaWxzLnRlc3RfaWRzKSB7XG4gICAgICAgICAgICBsZXQgdGVzdCA9IHt9XG5cbiAgICAgICAgICAgIGxldCBmaWx0ZXJzID0geyAncHJpY2VSYW5nZSc6IFtvZmZlci51cmxfZGV0YWlscy5taW5fZmVlcywgb2ZmZXIudXJsX2RldGFpbHMubWF4X2ZlZXNdLCAnZGlzdGFuY2VSYW5nZSc6IFtvZmZlci51cmxfZGV0YWlscy5taW5fZGlzdGFuY2UsIG9mZmVyLnVybF9kZXRhaWxzLm1heF9kaXN0YW5jZV0sICdzb3J0X29uJzogb2ZmZXIudXJsX2RldGFpbHMuc29ydF9vbiB8fCAnJywgJ2xhYl9uYW1lJzogb2ZmZXIudXJsX2RldGFpbHMubGFiX25hbWUgfHwgJycsICduZXR3b3JrX2lkJzogb2ZmZXIudXJsX2RldGFpbHMubmV0d29ya19pZCB8fCAnJyB9XG5cbiAgICAgICAgICAgIHRlc3QudHlwZSA9ICd0ZXN0J1xuICAgICAgICAgICAgdGVzdC5pZCA9IFtdXG5cbiAgICAgICAgICAgIGxldCB0ZXN0SWRBcnJheSA9IG9mZmVyLnVybF9kZXRhaWxzLnRlc3RfaWRzLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpZCBpbiB0ZXN0SWRBcnJheSkge1xuICAgICAgICAgICAgICAgIHRlc3QuaWQucHVzaChwYXJzZUludCh0ZXN0SWRBcnJheVtpZF0pKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKCd0ZXN0JywgdGVzdCwgdHJ1ZSwgZmlsdGVycylcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvbGFiL3NlYXJjaHJlc3VsdHMnKVxuICAgICAgICAgICAgfSwgMTAwKVxuXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogb2ZmZXIuZXZlbnRfbmFtZSwgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiBvZmZlci5ldmVudF9uYW1lLCAnY2xpY2tlZE9uJzogb2ZmZXIuc2xpZGVyX2xvY2F0aW9uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZiAob2ZmZXIudXJsX2RldGFpbHMgJiYgb2ZmZXIudXJsX2RldGFpbHMuc3BlY2lhbGl6YXRpb25zICYmIG9mZmVyLnVybF9kZXRhaWxzLnNwZWNpYWxpemF0aW9ucyAhPSAnJykge1xuICAgICAgICAgICAgbGV0IHNwZWNpYWxpdHkgPSB7fVxuXG4gICAgICAgICAgICBsZXQgZmlsdGVycyA9IHsgJ3ByaWNlUmFuZ2UnOiBbb2ZmZXIudXJsX2RldGFpbHMubWluX2ZlZXMsIG9mZmVyLnVybF9kZXRhaWxzLm1heF9mZWVzXSwgJ2Rpc3RhbmNlUmFuZ2UnOiBbb2ZmZXIudXJsX2RldGFpbHMubWluX2Rpc3RhbmNlLCBvZmZlci51cmxfZGV0YWlscy5tYXhfZGlzdGFuY2VdLCAnc29ydF9vbic6IG9mZmVyLnVybF9kZXRhaWxzLnNvcnRfb24gfHwgJycsICdpc19mZW1hbGUnOiBvZmZlci51cmxfZGV0YWlscy5pc19mZW1hbGUgfHwgZmFsc2UsICdpc19hdmFpbGFibGUnOiBvZmZlci51cmxfZGV0YWlscy5pc19hdmFpbGFibGUgfHwgZmFsc2UsICdkb2N0b3JfbmFtZSc6IG9mZmVyLnVybF9kZXRhaWxzLmRvY3Rvcl9uYW1lIHx8ICcnLCAnaG9zcGl0YWxfbmFtZSc6IG9mZmVyLnVybF9kZXRhaWxzLmhvc3BpdGFsX25hbWUgfHwgJycsICdob3NwaXRhbF9pZCc6IG9mZmVyLnVybF9kZXRhaWxzLmhvc3BpdGFsX2lkIHx8ICcnIH1cblxuICAgICAgICAgICAgc3BlY2lhbGl0eS50eXBlID0gJ3NwZWNpYWxpdHknXG4gICAgICAgICAgICBzcGVjaWFsaXR5LmlkID0gW11cblxuICAgICAgICAgICAgbGV0IHNwZWNpYWxpdHlJZEFycmF5ID0gb2ZmZXIudXJsX2RldGFpbHMuc3BlY2lhbGl6YXRpb25zLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpZCBpbiBzcGVjaWFsaXR5SWRBcnJheSkge1xuICAgICAgICAgICAgICAgIHNwZWNpYWxpdHkuaWQucHVzaChwYXJzZUludChzcGVjaWFsaXR5SWRBcnJheVtpZF0pKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZU9QRENyaXRlcmlhKCdzcGVjaWFsaXR5Jywgc3BlY2lhbGl0eSwgdHJ1ZSwgZmlsdGVycylcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvb3BkL3NlYXJjaHJlc3VsdHMnKVxuICAgICAgICAgICAgfSwgMTAwKVxuXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogb2ZmZXIuZXZlbnRfbmFtZSwgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiBvZmZlci5ldmVudF9uYW1lLCAnY2xpY2tlZE9uJzogb2ZmZXIuc2xpZGVyX2xvY2F0aW9uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZiAob2ZmZXIudXJsX2RldGFpbHMgJiYgb2ZmZXIudXJsX2RldGFpbHMucHJvY2VkdXJlX2lkcyAmJiBvZmZlci51cmxfZGV0YWlscy5wcm9jZWR1cmVfaWRzICE9ICcnKSB7XG4gICAgICAgICAgICBsZXQgc3BlY2lhbGl0eSA9IHt9XG5cbiAgICAgICAgICAgIGxldCBmaWx0ZXJzID0geyAncHJpY2VSYW5nZSc6IFtvZmZlci51cmxfZGV0YWlscy5taW5fZmVlcywgb2ZmZXIudXJsX2RldGFpbHMubWF4X2ZlZXNdLCAnZGlzdGFuY2VSYW5nZSc6IFtvZmZlci51cmxfZGV0YWlscy5taW5fZGlzdGFuY2UsIG9mZmVyLnVybF9kZXRhaWxzLm1heF9kaXN0YW5jZV0sICdzb3J0X29uJzogb2ZmZXIudXJsX2RldGFpbHMuc29ydF9vbiB8fCAnJywgJ2lzX2ZlbWFsZSc6IG9mZmVyLnVybF9kZXRhaWxzLmlzX2ZlbWFsZSB8fCBmYWxzZSwgJ2lzX2F2YWlsYWJsZSc6IG9mZmVyLnVybF9kZXRhaWxzLmlzX2F2YWlsYWJsZSB8fCBmYWxzZSwgJ2RvY3Rvcl9uYW1lJzogb2ZmZXIudXJsX2RldGFpbHMuZG9jdG9yX25hbWUgfHwgJycsICdob3NwaXRhbF9uYW1lJzogb2ZmZXIudXJsX2RldGFpbHMuaG9zcGl0YWxfbmFtZSB8fCAnJywgJ2hvc3BpdGFsX2lkJzogb2ZmZXIudXJsX2RldGFpbHMuaG9zcGl0YWxfaWQgfHwgJycgfVxuXG4gICAgICAgICAgICBzcGVjaWFsaXR5LnR5cGUgPSAncHJvY2VkdXJlcydcbiAgICAgICAgICAgIHNwZWNpYWxpdHkuaWQgPSBbXVxuXG4gICAgICAgICAgICBsZXQgc3BlY2lhbGl0eUlkQXJyYXkgPSBvZmZlci51cmxfZGV0YWlscy5wcm9jZWR1cmVfaWRzLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpZCBpbiBzcGVjaWFsaXR5SWRBcnJheSkge1xuICAgICAgICAgICAgICAgIHNwZWNpYWxpdHkuaWQucHVzaChwYXJzZUludChzcGVjaWFsaXR5SWRBcnJheVtpZF0pKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZU9QRENyaXRlcmlhKCdwcm9jZWR1cmVzJywgc3BlY2lhbGl0eSwgdHJ1ZSwgZmlsdGVycylcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvb3BkL3NlYXJjaHJlc3VsdHMnKVxuICAgICAgICAgICAgfSwgMTAwKVxuXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogb2ZmZXIuZXZlbnRfbmFtZSwgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiBvZmZlci5ldmVudF9uYW1lLCAnY2xpY2tlZE9uJzogb2ZmZXIuc2xpZGVyX2xvY2F0aW9uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZiAob2ZmZXIudXJsX2RldGFpbHMgJiYgb2ZmZXIudXJsX2RldGFpbHMucHJvY2VkdXJlX2NhdGVnb3J5X2lkcyAmJiBvZmZlci51cmxfZGV0YWlscy5wcm9jZWR1cmVfY2F0ZWdvcnlfaWRzICE9ICcnKSB7XG4gICAgICAgICAgICBsZXQgc3BlY2lhbGl0eSA9IHt9XG5cbiAgICAgICAgICAgIGxldCBmaWx0ZXJzID0geyAncHJpY2VSYW5nZSc6IFtvZmZlci51cmxfZGV0YWlscy5taW5fZmVlcywgb2ZmZXIudXJsX2RldGFpbHMubWF4X2ZlZXNdLCAnZGlzdGFuY2VSYW5nZSc6IFtvZmZlci51cmxfZGV0YWlscy5taW5fZGlzdGFuY2UsIG9mZmVyLnVybF9kZXRhaWxzLm1heF9kaXN0YW5jZV0sICdzb3J0X29uJzogb2ZmZXIudXJsX2RldGFpbHMuc29ydF9vbiB8fCAnJywgJ2lzX2ZlbWFsZSc6IG9mZmVyLnVybF9kZXRhaWxzLmlzX2ZlbWFsZSB8fCBmYWxzZSwgJ2lzX2F2YWlsYWJsZSc6IG9mZmVyLnVybF9kZXRhaWxzLmlzX2F2YWlsYWJsZSB8fCBmYWxzZSwgJ2RvY3Rvcl9uYW1lJzogb2ZmZXIudXJsX2RldGFpbHMuZG9jdG9yX25hbWUgfHwgJycsICdob3NwaXRhbF9uYW1lJzogb2ZmZXIudXJsX2RldGFpbHMuaG9zcGl0YWxfbmFtZSB8fCAnJywgJ2hvc3BpdGFsX2lkJzogb2ZmZXIudXJsX2RldGFpbHMuaG9zcGl0YWxfaWQgfHwgJycgfVxuXG4gICAgICAgICAgICBzcGVjaWFsaXR5LnR5cGUgPSAncHJvY2VkdXJlc19jYXRlZ29yeSdcbiAgICAgICAgICAgIHNwZWNpYWxpdHkuaWQgPSBbXVxuXG4gICAgICAgICAgICBsZXQgc3BlY2lhbGl0eUlkQXJyYXkgPSBvZmZlci51cmxfZGV0YWlscy5wcm9jZWR1cmVfY2F0ZWdvcnlfaWRzLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpZCBpbiBzcGVjaWFsaXR5SWRBcnJheSkge1xuICAgICAgICAgICAgICAgIHNwZWNpYWxpdHkuaWQucHVzaChwYXJzZUludChzcGVjaWFsaXR5SWRBcnJheVtpZF0pKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZU9QRENyaXRlcmlhKCdwcm9jZWR1cmVzX2NhdGVnb3J5Jywgc3BlY2lhbGl0eSwgdHJ1ZSwgZmlsdGVycylcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvb3BkL3NlYXJjaHJlc3VsdHMnKVxuICAgICAgICAgICAgfSwgMTAwKVxuXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogb2ZmZXIuZXZlbnRfbmFtZSwgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiBvZmZlci5ldmVudF9uYW1lLCAnY2xpY2tlZE9uJzogb2ZmZXIuc2xpZGVyX2xvY2F0aW9uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZiAob2ZmZXIudXJsX2RldGFpbHMgJiYgb2ZmZXIudXJsX2RldGFpbHMuY29uZGl0aW9ucyAmJiBvZmZlci51cmxfZGV0YWlscy5jb25kaXRpb25zICE9ICcnKSB7XG4gICAgICAgICAgICBsZXQgc3BlY2lhbGl0eSA9IHt9XG5cbiAgICAgICAgICAgIGxldCBmaWx0ZXJzID0geyAncHJpY2VSYW5nZSc6IFtvZmZlci51cmxfZGV0YWlscy5taW5fZmVlcywgb2ZmZXIudXJsX2RldGFpbHMubWF4X2ZlZXNdLCAnZGlzdGFuY2VSYW5nZSc6IFtvZmZlci51cmxfZGV0YWlscy5taW5fZGlzdGFuY2UsIG9mZmVyLnVybF9kZXRhaWxzLm1heF9kaXN0YW5jZV0sICdzb3J0X29uJzogb2ZmZXIudXJsX2RldGFpbHMuc29ydF9vbiB8fCAnJywgJ2lzX2ZlbWFsZSc6IG9mZmVyLnVybF9kZXRhaWxzLmlzX2ZlbWFsZSB8fCBmYWxzZSwgJ2lzX2F2YWlsYWJsZSc6IG9mZmVyLnVybF9kZXRhaWxzLmlzX2F2YWlsYWJsZSB8fCBmYWxzZSwgJ2RvY3Rvcl9uYW1lJzogb2ZmZXIudXJsX2RldGFpbHMuZG9jdG9yX25hbWUgfHwgJycsICdob3NwaXRhbF9uYW1lJzogb2ZmZXIudXJsX2RldGFpbHMuaG9zcGl0YWxfbmFtZSB8fCAnJywgJ2hvc3BpdGFsX2lkJzogb2ZmZXIudXJsX2RldGFpbHMuaG9zcGl0YWxfaWQgfHwgJycgfVxuXG4gICAgICAgICAgICBzcGVjaWFsaXR5LnR5cGUgPSAnY29uZGl0aW9uJ1xuICAgICAgICAgICAgc3BlY2lhbGl0eS5pZCA9IFtdXG5cbiAgICAgICAgICAgIGxldCBzcGVjaWFsaXR5SWRBcnJheSA9IG9mZmVyLnVybF9kZXRhaWxzLmNvbmRpdGlvbnMuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGlkIGluIHNwZWNpYWxpdHlJZEFycmF5KSB7XG4gICAgICAgICAgICAgICAgc3BlY2lhbGl0eS5pZC5wdXNoKHBhcnNlSW50KHNwZWNpYWxpdHlJZEFycmF5W2lkXSkpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlT1BEQ3JpdGVyaWEoJ2NvbmRpdGlvbicsIHNwZWNpYWxpdHksIHRydWUsIGZpbHRlcnMpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL29wZC9zZWFyY2hyZXN1bHRzJylcbiAgICAgICAgICAgIH0sIDEwMClcblxuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6IG9mZmVyLmV2ZW50X25hbWUsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50Jzogb2ZmZXIuZXZlbnRfbmFtZSwgJ2NsaWNrZWRPbic6IG9mZmVyLnNsaWRlcl9sb2NhdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKG9mZmVyLnVybF9kZXRhaWxzICYmIG9mZmVyLnVybF9kZXRhaWxzLmhvc3BpdGFsX2lkICYmIG9mZmVyLnVybF9kZXRhaWxzLmhvc3BpdGFsX2lkICE9ICcnKSB7XG4gICAgICAgICAgICBsZXQgc3BlY2lhbGl0eSA9IHt9XG5cbiAgICAgICAgICAgIGxldCBmaWx0ZXJzID0geyAncHJpY2VSYW5nZSc6IFtvZmZlci51cmxfZGV0YWlscy5taW5fZmVlcywgb2ZmZXIudXJsX2RldGFpbHMubWF4X2ZlZXNdLCAnZGlzdGFuY2VSYW5nZSc6IFtvZmZlci51cmxfZGV0YWlscy5taW5fZGlzdGFuY2UsIG9mZmVyLnVybF9kZXRhaWxzLm1heF9kaXN0YW5jZV0sICdzb3J0X29uJzogb2ZmZXIudXJsX2RldGFpbHMuc29ydF9vbiB8fCAnJywgJ2lzX2ZlbWFsZSc6IG9mZmVyLnVybF9kZXRhaWxzLmlzX2ZlbWFsZSB8fCBmYWxzZSwgJ2lzX2F2YWlsYWJsZSc6IG9mZmVyLnVybF9kZXRhaWxzLmlzX2F2YWlsYWJsZSB8fCBmYWxzZSwgJ2RvY3Rvcl9uYW1lJzogb2ZmZXIudXJsX2RldGFpbHMuZG9jdG9yX25hbWUgfHwgJycsICdob3NwaXRhbF9uYW1lJzogb2ZmZXIudXJsX2RldGFpbHMuaG9zcGl0YWxfbmFtZSB8fCAnJywgJ2hvc3BpdGFsX2lkJzogb2ZmZXIudXJsX2RldGFpbHMuaG9zcGl0YWxfaWQgfHwgJycgfVxuXG4gICAgICAgICAgICBzcGVjaWFsaXR5LnR5cGUgPSAnc3BlY2lhbGl0eSdcbiAgICAgICAgICAgIHNwZWNpYWxpdHkuaWQgPSBbXVxuXG4gICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZU9QRENyaXRlcmlhKCdzcGVjaWFsaXR5Jywgc3BlY2lhbGl0eSwgdHJ1ZSwgZmlsdGVycylcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvb3BkL3NlYXJjaHJlc3VsdHMnKVxuICAgICAgICAgICAgfSwgMTAwKVxuXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogb2ZmZXIuZXZlbnRfbmFtZSwgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiBvZmZlci5ldmVudF9uYW1lLCAnY2xpY2tlZE9uJzogb2ZmZXIuc2xpZGVyX2xvY2F0aW9uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZiAob2ZmZXIudXJsKSB7XG5cbiAgICAgICAgICAgIGlmIChvZmZlci51cmwuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4ob2ZmZXIudXJsLCAnX2JsYW5rJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKG9mZmVyLnVybClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6IG9mZmVyLmV2ZW50X25hbWUsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50Jzogb2ZmZXIuZXZlbnRfbmFtZSwgJ2NsaWNrZWRPbic6IG9mZmVyLnNsaWRlcl9sb2NhdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgXG4gICAgICAgIH1lbHNlIGlmKG9mZmVyLmlkKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogb2ZmZXIuZXZlbnRfbmFtZSwgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiBvZmZlci5ldmVudF9uYW1lLCAnY2xpY2tlZE9uJzogb2ZmZXIuc2xpZGVyX2xvY2F0aW9uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYHRlcm1zLWNvbmRpdGlvbnMvJHtvZmZlci5pZH1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uVG91Y2hTdGFydChldmVudCkge1xuICAgICAgICBsZXQgdG91Y2hvYmogPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgdGhpcy5zdGF0ZS5zdGFydFggPSB0b3VjaG9iai5wYWdlWDtcbiAgICAgICAgdGhpcy5zdGF0ZS5zdGFydFkgPSB0b3VjaG9iai5wYWdlWTtcbiAgICAgICAgbGV0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgfVxuXG4gICAgb25Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgICAgICAgbGV0IHRvdWNob2JqID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgIHRoaXMuc3RhdGUuZGlzdFggPSB0b3VjaG9iai5wYWdlWCAtIHRoaXMuc3RhdGUuc3RhcnRYO1xuICAgICAgICB0aGlzLnN0YXRlLmRpc3RZID0gdG91Y2hvYmoucGFnZVkgLSB0aGlzLnN0YXRlLnN0YXJ0WTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc3RhcnRYIC0gdG91Y2hvYmoucGFnZVggPiA1IHx8IHRvdWNob2JqLnBhZ2VYIC0gdGhpcy5zdGF0ZS5zdGFydFggPiA1KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQucHJldmVudERlZmF1bHQpXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblRvdWNoRW5kKGV2ZW50KSB7XG4gICAgICAgIGxldCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgICAgICBsZXQgdG91Y2hvYmogPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXVxuICAgICAgICBsZXQgdG90YWxPZmZlcnMgPSAnJ1xuICAgICAgICBsZXQgY3Vycl9pbmRleFxuICAgICAgICB0aGlzLnN0YXRlLmRpc3RYID0gdG91Y2hvYmoucGFnZVggLSB0aGlzLnN0YXRlLnN0YXJ0WFxuICAgICAgICB0aGlzLnN0YXRlLmRpc3RZID0gdG91Y2hvYmoucGFnZVkgLSB0aGlzLnN0YXRlLnN0YXJ0WVxuICAgICAgICBsZXQgZWxhcHNlZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0VGltZVxuICAgICAgICBsZXQgZmlsdGVyZWRCYW5uZXJzID0gdGhpcy5nZXRGaWx0ZXJlZEJhbm5lcnMoKTtcbiAgICAgICAgaWYgKGVsYXBzZWRUaW1lIDw9IDQwMCkge1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMuc3RhdGUuZGlzdFgpID49IDUwICYmIE1hdGguYWJzKHRoaXMuc3RhdGUuZGlzdFkpIDw9IDEwMCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmRpc3RYIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zbGlkZXJMb2NhdGlvbiAmJiBmaWx0ZXJlZEJhbm5lcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsT2ZmZXJzID0gZmlsdGVyZWRCYW5uZXJzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJfaW5kZXggPSB0aGlzLnN0YXRlLmluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyX2luZGV4ID0gY3Vycl9pbmRleCArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyX2luZGV4ID49IHRvdGFsT2ZmZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vycl9pbmRleCA9IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbmRleDogY3Vycl9pbmRleCwgaW50ZXJ2YWxGbGFnOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2xpZGVyTG9jYXRpb24gJiYgZmlsdGVyZWRCYW5uZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbE9mZmVycyA9IGZpbHRlcmVkQmFubmVycy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyX2luZGV4ID0gdGhpcy5zdGF0ZS5pbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vycl9pbmRleCA9IGN1cnJfaW5kZXggLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3Vycl9pbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyX2luZGV4ID0gdG90YWxPZmZlcnMgLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW5kZXg6IGN1cnJfaW5kZXgsIGludGVydmFsRmxhZzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEZpbHRlcmVkQmFubmVycygpIHtcbiAgICAgICAgbGV0IGZpbHRlcmVkT2ZmZXJzID0gW11cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub2ZmZXJMaXN0KSB7XG4gICAgICAgICAgICBmaWx0ZXJlZE9mZmVycyA9IHRoaXMucHJvcHMub2ZmZXJMaXN0LmZpbHRlcih4ID0+IHguc2xpZGVyX2xvY2F0aW9uID09PSB0aGlzLnByb3BzLnNsaWRlckxvY2F0aW9uKTtcbiAgICAgICAgICAgIGZpbHRlcmVkT2ZmZXJzID0gZmlsdGVyZWRPZmZlcnMuZmlsdGVyKG9mZmVyID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc2hvd19iYW5uZXIgPSBmYWxzZVxuICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJfc2hvd19iYW5uZXIgPSB0cnVlXG4gICAgICAgICAgICAgICAgaWYgKG9mZmVyLnVybF9wYXJhbXNfaW5jbHVkZWQgJiYgT2JqZWN0LnZhbHVlcyhvZmZlci51cmxfcGFyYW1zX2luY2x1ZGVkKS5sZW5ndGgpIHtcblxuICAgICAgICAgICAgICAgICAgICAvL0NoZWNrIGZvciBmaWx0ZXJlZCB2YWx1ZXNcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzICYmIHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMubWFwKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2ZmZXIudXJsX3BhcmFtc19pbmNsdWRlZFsnc3BlY2lhbGl6YXRpb25zJ10gJiYgb2ZmZXIudXJsX3BhcmFtc19pbmNsdWRlZFsnc3BlY2lhbGl6YXRpb25zJ10ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2ZmZXIudXJsX3BhcmFtc19pbmNsdWRlZFsnc3BlY2lhbGl6YXRpb25zJ10ubWFwKChzcGVjaWFsaXR5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcGVjaWFsaXR5ID09IGRhdGEuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dfYmFubmVyID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmN1cnJlbnRTZWFyY2hlZENyaXRlcmlhcyAmJiB0aGlzLnByb3BzLmN1cnJlbnRTZWFyY2hlZENyaXRlcmlhcy5tYXAoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvZmZlci51cmxfcGFyYW1zX2luY2x1ZGVkWyd0ZXN0X2lkcyddICYmIG9mZmVyLnVybF9wYXJhbXNfaW5jbHVkZWRbJ3Rlc3RfaWRzJ10ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2ZmZXIudXJsX3BhcmFtc19pbmNsdWRlZFsndGVzdF9pZHMnXS5tYXAoKHRlc3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlc3QgPT0gZGF0YS5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd19iYW5uZXIgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIC8vQ2hlY2sgQmFubmVycyBmb3IgZmlsdGVyc1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZmlsdGVyQ3JpdGVyaWEgJiYgT2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5maWx0ZXJDcml0ZXJpYSkubWFwKChkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0eXBlID0gZGF0YVswXVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gJ3ByaWNlUmFuZ2UnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9mZmVyLnVybF9wYXJhbXNfaW5jbHVkZWRbJ21pbl9mZWVzJ10gJiYgb2ZmZXIudXJsX3BhcmFtc19pbmNsdWRlZFsnbWluX2ZlZXMnXSA8IGRhdGFbMV1bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyX3Nob3dfYmFubmVyID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9mZmVyLnVybF9wYXJhbXNfaW5jbHVkZWRbJ21heF9mZWVzJ10gJiYgb2ZmZXIudXJsX3BhcmFtc19pbmNsdWRlZFsnbWF4X2ZlZXMnXSA+IGRhdGFbMV1bMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyX3Nob3dfYmFubmVyID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gJ2Rpc3RhbmNlUmFuZ2UnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9mZmVyLnVybF9wYXJhbXNfaW5jbHVkZWRbJ21pbl9kaXN0YW5jZSddICYmIG9mZmVyLnVybF9wYXJhbXNfaW5jbHVkZWRbJ21pbl9kaXN0YW5jZSddIDwgZGF0YVsxXVswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJfc2hvd19iYW5uZXIgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2ZmZXIudXJsX3BhcmFtc19pbmNsdWRlZFsnbWF4X2Rpc3RhbmNlJ10gJiYgb2ZmZXIudXJsX3BhcmFtc19pbmNsdWRlZFsnbWF4X2Rpc3RhbmNlJ10gPiBkYXRhWzFdWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcl9zaG93X2Jhbm5lciA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09ICdzb3J0X29uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvZmZlci51cmxfcGFyYW1zX2luY2x1ZGVkWydzb3J0X29uJ10gJiYgb2ZmZXIudXJsX3BhcmFtc19pbmNsdWRlZFsnc29ydF9vbiddLmluY2x1ZGVzKGRhdGFbMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcl9zaG93X2Jhbm5lciA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPSAnbGFiX25hbWUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9mZmVyLnVybF9wYXJhbXNfaW5jbHVkZWRbJ2xhYl9uYW1lJ10gJiYgb2ZmZXIudXJsX3BhcmFtc19pbmNsdWRlZFsnbGFiX25hbWUnXS5pbmNsdWRlcyhkYXRhWzFdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJfc2hvd19iYW5uZXIgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID0gJ25ldHdvcmtfaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9mZmVyLnVybF9wYXJhbXNfaW5jbHVkZWRbJ25ldHdvcmtfaWQnXSAmJiBvZmZlci51cmxfcGFyYW1zX2luY2x1ZGVkWyduZXR3b3JrX2lkJ10gIT0gZGF0YVsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJfc2hvd19iYW5uZXIgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9ICdpc19hdmFpbGFibGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9mZmVyLnVybF9wYXJhbXNfaW5jbHVkZWRbJ2lzX2F2YWlsYWJsZSddICYmIG9mZmVyLnVybF9wYXJhbXNfaW5jbHVkZWRbJ2lzX2F2YWlsYWJsZSddID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyX3Nob3dfYmFubmVyID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9ICdpc19mZW1hbGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9mZmVyLnVybF9wYXJhbXNfaW5jbHVkZWRbJ2lzX2ZlbWFsZSddICYmIG9mZmVyLnVybF9wYXJhbXNfaW5jbHVkZWRbJ2lzX2ZlbWFsZSddID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyX3Nob3dfYmFubmVyID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChvZmZlci51cmxfcGFyYW1zX2V4Y2x1ZGVkICYmIE9iamVjdC52YWx1ZXMob2ZmZXIudXJsX3BhcmFtc19leGNsdWRlZCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMgJiYgdGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcy5tYXAoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvZmZlci51cmxfcGFyYW1zX2V4Y2x1ZGVkWydzcGVjaWFsaXphdGlvbnMnXSAmJiBvZmZlci51cmxfcGFyYW1zX2V4Y2x1ZGVkWydzcGVjaWFsaXphdGlvbnMnXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZlci51cmxfcGFyYW1zX2V4Y2x1ZGVkWydzcGVjaWFsaXphdGlvbnMnXS5tYXAoKHNwZWNpYWxpdHkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwZWNpYWxpdHkgPT0gZGF0YS5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd19iYW5uZXIgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd19iYW5uZXIgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmN1cnJlbnRTZWFyY2hlZENyaXRlcmlhcyAmJiB0aGlzLnByb3BzLmN1cnJlbnRTZWFyY2hlZENyaXRlcmlhcy5tYXAoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvZmZlci51cmxfcGFyYW1zX2V4Y2x1ZGVkWyd0ZXN0X2lkcyddICYmIG9mZmVyLnVybF9wYXJhbXNfZXhjbHVkZWRbJ3Rlc3RfaWRzJ10ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2ZmZXIudXJsX3BhcmFtc19leGNsdWRlZFsndGVzdF9pZHMnXS5tYXAoKHRlc3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlc3QgPT0gZGF0YS5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd19iYW5uZXIgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd19iYW5uZXIgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmZpbHRlckNyaXRlcmlhICYmIE9iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuZmlsdGVyQ3JpdGVyaWEpLm1hcCgoZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZSA9IGRhdGFbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09ICdwcmljZVJhbmdlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvZmZlci51cmxfcGFyYW1zX2V4Y2x1ZGVkWydtaW5fZmVlcyddICYmIG9mZmVyLnVybF9wYXJhbXNfZXhjbHVkZWRbJ21pbl9mZWVzJ10gPj0gZGF0YVsxXVswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJfc2hvd19iYW5uZXIgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2ZmZXIudXJsX3BhcmFtc19leGNsdWRlZFsnbWF4X2ZlZXMnXSAmJiBvZmZlci51cmxfcGFyYW1zX2V4Y2x1ZGVkWydtYXhfZmVlcyddIDw9IGRhdGFbMV1bMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyX3Nob3dfYmFubmVyID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gJ2Rpc3RhbmNlUmFuZ2UnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9mZmVyLnVybF9wYXJhbXNfZXhjbHVkZWRbJ21pbl9kaXN0YW5jZSddICYmIG9mZmVyLnVybF9wYXJhbXNfZXhjbHVkZWRbJ21pbl9kaXN0YW5jZSddID49IGRhdGFbMV1bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyX3Nob3dfYmFubmVyID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9mZmVyLnVybF9wYXJhbXNfZXhjbHVkZWRbJ21heF9kaXN0YW5jZSddICYmIG9mZmVyLnVybF9wYXJhbXNfZXhjbHVkZWRbJ21heF9kaXN0YW5jZSddIDw9IGRhdGFbMV1bMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyX3Nob3dfYmFubmVyID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gJ3NvcnRfb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9mZmVyLnVybF9wYXJhbXNfZXhjbHVkZWRbJ3NvcnRfb24nXSAmJiBvZmZlci51cmxfcGFyYW1zX2V4Y2x1ZGVkWydzb3J0X29uJ10uaW5jbHVkZXMoZGF0YVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyX3Nob3dfYmFubmVyID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPSAnbGFiX25hbWUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9mZmVyLnVybF9wYXJhbXNfZXhjbHVkZWRbJ2xhYl9uYW1lJ10gJiYgb2ZmZXIudXJsX3BhcmFtc19leGNsdWRlZFsnbGFiX25hbWUnXS5pbmNsdWRlcyhkYXRhWzFdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJfc2hvd19iYW5uZXIgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9ICduZXR3b3JrX2lkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvZmZlci51cmxfcGFyYW1zX2V4Y2x1ZGVkWyduZXR3b3JrX2lkJ10gJiYgb2ZmZXIudXJsX3BhcmFtc19leGNsdWRlZFsnbmV0d29ya19pZCddID09IGRhdGFbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyX3Nob3dfYmFubmVyID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPSAnaXNfYXZhaWxhYmxlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvZmZlci51cmxfcGFyYW1zX2V4Y2x1ZGVkWydpc19hdmFpbGFibGUnXSAmJiBvZmZlci51cmxfcGFyYW1zX2V4Y2x1ZGVkWydpc19hdmFpbGFibGUnXSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcl9zaG93X2Jhbm5lciA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID0gJ2lzX2ZlbWFsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2ZmZXIudXJsX3BhcmFtc19leGNsdWRlZFsnaXNfZmVtYWxlJ10gJiYgb2ZmZXIudXJsX3BhcmFtc19leGNsdWRlZFsnaXNfZmVtYWxlJ10gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJfc2hvd19iYW5uZXIgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd19iYW5uZXIgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcl9zaG93X2Jhbm5lciA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNob3dfYmFubmVyICYmIGZpbHRlcl9zaG93X2Jhbm5lclxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmlsdGVyZWRPZmZlcnNcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCBmaWx0ZXJlZEJhbm5lcnMgPSB0aGlzLmdldEZpbHRlcmVkQmFubmVycygpO1xuICAgICAgICBsZXQgb2ZmZXJWaXNpYmxlID0gZmlsdGVyZWRCYW5uZXJzW3RoaXMuc3RhdGUuaW5kZXhdXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnNsaWRlckxvY2F0aW9uID09ICdob21lX3BhZ2UnIHx8IHRoaXMucHJvcHMuc2xpZGVyTG9jYXRpb24gPT0gJ29ubGluZV9jb25zdWx0YXRpb24nIHx8IHRoaXMucHJvcHMuc2xpZGVyTG9jYXRpb24gPT0gJ21lZGljaW5lX2RldGFpbF9wYWdlJyB8fCAoZmlsdGVyZWRCYW5uZXJzICYmIGZpbHRlcmVkQmFubmVycy5sZW5ndGggPT0gMSkgfHwgIWZpbHRlcmVkQmFubmVycyA/ICcnIDogJ2Jhbm5lci1tYXJnaW4tdGFwJ30+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNsaWRlckxvY2F0aW9uID09PSBcIm1lZGljaW5lX2RldGFpbF9wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID88ZGl2IGNsYXNzTmFtZT1cIm1lZGljLWltZy1zbGlkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkQmFubmVycyAmJiBmaWx0ZXJlZEJhbm5lcnMubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkQmFubmVycy5tYXAoKG9mZmVyLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxpbWcga2V5PXtpfSBzcmM9e29mZmVyLmltYWdlfSBvbkNsaWNrPXsoKSA9PiB0aGlzLm5hdmlnYXRlVG8ob2ZmZXIpfSBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA6dGhpcy5wcm9wcy5zbGlkZXJMb2NhdGlvbj09J2hvbWVfcGFnZSc/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItY29udGFpbmVyIGJubnJGb3JDb3ZpdmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRCYW5uZXJzICYmIGZpbHRlcmVkQmFubmVycy5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkQmFubmVycy5tYXAoKG9mZmVyLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8YSBrZXk9e29mZmVyLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBrZXk9e2l9IHNyYz17b2ZmZXIuaW1hZ2V9IG9uQ2xpY2s9eygpID0+IHRoaXMubmF2aWdhdGVUbyhvZmZlcil9IHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInfX0gYWx0PVwiYmFubmVyTG9nb0RvY3ByaW1lXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgOjxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIGNvZGUgZm9yIGJhbm5lciBjYXJvdXNlbCAodmlzaWJsZSBvbmx5IG9uIGRlc2t0b3ApICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmhpZGVDbGFzcyA/IGBiYW5uZXItY2Fyb3VzZWwtZGl2ICBtcmItMTAgZC1ub25lICR7dGhpcy5wcm9wcy5oaWRlQ2xhc3N9YCA6IGBiYW5uZXItY2Fyb3VzZWwtZGl2IG1yYi0xMCBkLW5vbmUgZC1tZC1ibG9jayBuZXctaG9tZS1iYW5uZXJgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2ZmZXJWaXNpYmxlICYmIE9iamVjdC52YWx1ZXMob2ZmZXJWaXNpYmxlKS5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtvZmZlclZpc2libGUuaW1hZ2V9IG9uVG91Y2hTdGFydD17dGhpcy5vblRvdWNoU3RhcnQuYmluZCh0aGlzKX0gb25Ub3VjaE1vdmU9e3RoaXMub25Ub3VjaE1vdmUuYmluZCh0aGlzKX0gb25Ub3VjaEVuZD17dGhpcy5vblRvdWNoRW5kLmJpbmQodGhpcyl9IG9uQ2xpY2s9eygpID0+IHRoaXMubmF2aWdhdGVUbyhvZmZlclZpc2libGUpfSBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkQmFubmVycyAmJiBmaWx0ZXJlZEJhbm5lcnMubGVuZ3RoID4gMSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pbmRpY2F0b3JzIG1ydC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZEJhbm5lcnMgJiYgZmlsdGVyZWRCYW5uZXJzLm1hcCgob2ZmZXIsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4ga2V5PXtpfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgaW5kZXg6IGkgfSl9IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5pbmRleCA9PSBpID8gXCJpbmRpY2F0b3Itc2VsZWN0ZWRcIiA6ICcnfSA+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogY29kZSBmb3IgYmFubmVyIHNsaWRlciAodmlzaWJsZSBvbmx5IG9uIG1vYmlsZSBzY3JlZW4pICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGF0UGFnZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtbWQtbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRCYW5uZXJzICYmIGZpbHRlcmVkQmFubmVycy5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3RoaXMucHJvcHMuaXBkID8gJ2lwZC1iYW5uZXItbWJsJyA6IHRoaXMucHJvcHMuc2xpZGVyTG9jYXRpb24gPT0gJ2hvbWVfcGFnZScgfHwgdGhpcy5wcm9wcy5zbGlkZXJMb2NhdGlvbiA9PSAnb25saW5lX2NvbnN1bHRhdGlvbicgPydob21lLWJhbm5lci1wb3MnOiAnaW5uZXItYmFubmVyLXBvcyd9ICR7ZmlsdGVyZWRCYW5uZXJzLmxlbmd0aCA9PSAxID8gYGJhbm5lci1ob21lLXNjcm9sbGFibGUgbXJ0LTIwIG1yYi0yMCAke3RoaXMucHJvcHMuc2xpZGVyTG9jYXRpb24gPT0gJ2hvbWVfcGFnZSc/J3NpbmdsZS1iYW5uZXItZGl2JzonJ31gIDogYGJhbm5lci1ob21lLXNjcm9sbGFibGUgbXJ0LTIwIG1yYi0yMCBwZC1sdC0xNWB9YH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRCYW5uZXJzLm1hcCgoYmFubmVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxpbWcga2V5PXtpbmRleH0gc3JjPXtiYW5uZXIuaW1hZ2V9IG9uQ2xpY2s9eygpID0+IHRoaXMubmF2aWdhdGVUbyhiYW5uZXIpfSBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJ319IGNsYXNzTmFtZT17ZmlsdGVyZWRCYW5uZXJzLmxlbmd0aCA9PSAxID8gYHNuZ2wtYmFubmVyYCA6IGBtbHRwbC1iYW5uZXJgfSBsb2FkaW5nPVwibGF6eVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYW5uZXJDYXJvdXNlbCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFJlY2VudEFydGljbGVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0ZWQtYXJ0aWNsZS1zdWJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0ZWQtYXJ0aWNsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJiLTEwXCI+e3RoaXMucHJvcHMucmVjZW50QXJ0aWNsZVRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInJlbGF0ZWQtYXJ0aWNsZXMtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVjZW50QXJ0aWNsZXNJdGVtcy5tYXAoKGFydGljbGUsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFydGljbGUudXJsLnN0YXJ0c1dpdGgoXCJodHRwXCIpIHx8IGFydGljbGUudXJsLnN0YXJ0c1dpdGgoXCIvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGEgaHJlZj17YXJ0aWNsZS51cmx9IGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1yYi01XCI+e2FydGljbGUudGl0bGV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8YSBocmVmPXsnLycgKyBhcnRpY2xlLnVybH0ga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXJiLTVcIj57YXJ0aWNsZS50aXRsZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNlbnRBcnRpY2xlcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFJlbGF0ZWRBcnRpY2xlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGVkLWFydGljbGVcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJiLTEwXCI+e3RoaXMucHJvcHMubGlua2VkQXJ0aWNsZS5jb250ZW50X2JveF90aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInJlbGF0ZWQtYXJ0aWNsZXMtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmxpbmtlZEFydGljbGUudXJscy5tYXAoKGFydGljbGUsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJ0aWNsZS51cmwuc3RhcnRzV2l0aChcImh0dHBcIikgfHwgYXJ0aWNsZS51cmwuc3RhcnRzV2l0aChcIi9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxhIGhyZWY9e2FydGljbGUudXJsfSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1yYi01XCI+e2FydGljbGUudGl0bGV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxhIGhyZWY9eycvJyArIGFydGljbGUudXJsfSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1yYi01XCI+e2FydGljbGUudGl0bGV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbGF0ZWRBcnRpY2xlcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFRhYmxlT2ZDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7IGFib3V0X3Rlc3QsIHdoeV9nZXRfdGVzdGVkLCB0ZXN0X21heV9pbmNsdWRlLCB0aGlzX3BhY2thZ2Vfd2lsbF9pbmNsdWRlLCBwcmVwYXJhdGlvbnMsIGZhcXMgfSA9IHRoaXMucHJvcHMuc2VhcmNoVGVzdEluZm9EYXRhXG4gICAgICAgIGxldCByZXNwX3Rlc3RfaWQgPSB0aGlzLnByb3BzLnJlc3BfdGVzdF9pZFxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IHRhYmxlLW9mLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcmItMTBcIj5UYWJsZSBvZiBDb250ZW50PC9wPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicmVsYXRlZC1hcnRpY2xlcy1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvdXRfdGVzdCAmJiBhYm91dF90ZXN0LnZhbHVlICYmIGFib3V0X3Rlc3QudGl0bGU/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjYWJvdXQtdGVzdFwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMudXBkYXRlVGFic1ZhbHVlcygnYWJvdXRfdGVzdF8nICsgcmVzcF90ZXN0X2lkKX0+PGxpIGNsYXNzTmFtZT1cIm1yYi01XCI+e2Fib3V0X3Rlc3QudGl0bGV9PC9saT48L2E+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aHlfZ2V0X3Rlc3RlZCAmJiB3aHlfZ2V0X3Rlc3RlZC52YWx1ZSAmJiB3aHlfZ2V0X3Rlc3RlZC50aXRsZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiN3aHktZ2V0LXRlc3RlZFwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMudXBkYXRlVGFic1ZhbHVlcygnd2h5X2dldF90ZXN0ZWRfJyArIHJlc3BfdGVzdF9pZCl9PjxsaSBjbGFzc05hbWU9XCJtcmItNVwiPnt3aHlfZ2V0X3Rlc3RlZC50aXRsZX08L2xpPjwvYT4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3RfbWF5X2luY2x1ZGUgJiYgdGVzdF9tYXlfaW5jbHVkZS50aXRsZSAmJiB0ZXN0X21heV9pbmNsdWRlLnZhbHVlICYmICB0ZXN0X21heV9pbmNsdWRlLnZhbHVlLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3Rlc3QtaW5jbHVkZXNcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnVwZGF0ZVRhYnNWYWx1ZXMoJ3Rlc3RfaW5jbHVkZV8nICsgcmVzcF90ZXN0X2lkKX0+PGxpIGNsYXNzTmFtZT1cIm1yYi01XCI+e3Rlc3RfbWF5X2luY2x1ZGUudGl0bGV9PC9saT48L2E+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzX3BhY2thZ2Vfd2lsbF9pbmNsdWRlICYmIHRoaXNfcGFja2FnZV93aWxsX2luY2x1ZGUudGl0bGUgJiYgdGhpc19wYWNrYWdlX3dpbGxfaW5jbHVkZS50ZXN0cyAmJiB0aGlzX3BhY2thZ2Vfd2lsbF9pbmNsdWRlLnRlc3RzLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3BhY2thZ2UtaW5jbHVkZXNcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnVwZGF0ZVRhYnNWYWx1ZXMoJ3Rlc3RfaW5jbHVkZV8nICsgcmVzcF90ZXN0X2lkKX0+PGxpIGNsYXNzTmFtZT1cIm1yYi01XCI+e3RoaXNfcGFja2FnZV93aWxsX2luY2x1ZGUudGl0bGV9PC9saT48L2E+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwYXJhdGlvbnMgJiYgcHJlcGFyYXRpb25zLnRpdGxlICYmIHByZXBhcmF0aW9ucy52YWx1ZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiN0ZXN0LXByZXBhcmF0aW9uc1wiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMudXBkYXRlVGFic1ZhbHVlcygndGVzdF9wcmVwYXJhdGlvbnNfJyArIHJlc3BfdGVzdF9pZCl9PjxsaSBjbGFzc05hbWU9XCJtcmItNVwiPntwcmVwYXJhdGlvbnMudGl0bGV9PC9saT48L2E+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYXFzICYmIGZhcXMubGVuZ3RoID4gMCAmJiBmYXFzWzBdLnRpdGxlP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3Rlc3QtZmFxXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy51cGRhdGVUYWJzVmFsdWVzKCd0ZXN0X2ZhcV8nICsgcmVzcF90ZXN0X2lkKX0+PGxpIGNsYXNzTmFtZT1cIm1yYi01XCI+e2ZhcXNbMF0udGl0bGV9PC9saT48L2E+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZU9mQ29udGVudCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENPTE9SX0NPREVTID0gW1xuICAgICcjZWY5YTlhJyxcbiAgICAnI2Y0OGZiMScsXG4gICAgJyNjZTkzZDgnLFxuICAgICcjYjM5ZGRiJyxcbiAgICAnI2U3NGMzYycsXG4gICAgJyM5ZmE4ZGEnLFxuICAgICcjOTBjYWY5JyxcbiAgICAnIzgxZDRmYScsXG4gICAgJyM4MGRlZWEnLFxuICAgICcjODBjYmM0JyxcbiAgICAnI2E1ZDZhNycsXG4gICAgJyNjNWUxYTUnLFxuICAgICcjZTZlZTljJyxcbiAgICAnI2ZmZjU5ZCcsXG4gICAgJyNmZmUwODInLFxuICAgICcjZmZjYzgwJyxcbiAgICAnI2ZmYWI5MScsXG4gICAgJyNiY2FhYTQnLFxuXVxuXG5jbGFzcyBJbml0aWFsc1BpY3R1cmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYmdDb2xvcjogQ09MT1JfQ09ERVNbdGhpcy5zdW1DaGFycyh0aGlzLnByb3BzLm5hbWUpICUgQ09MT1JfQ09ERVMubGVuZ3RoXVxuICAgICAgICB9XG4gICAgfVxuICAgIHN1bUNoYXJzKHN0cikge1xuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHN1bSArPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdW07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgc3R5bGUgPSB0aGlzLnByb3BzLnN0eWxlIHx8IHt9XG5cbiAgICAgICAgbGV0IGluaXRpYWwgPSBcIlVcIlxuICAgICAgICBsZXQgbmFtZSA9IHRoaXMucHJvcHMubmFtZVxuICAgICAgICBpZiAobmFtZSAmJiBuYW1lLmxlbmd0aCkge1xuICAgICAgICAgICAgbmFtZSA9IG5hbWUuc3BsaXQoJyAnKVxuICAgICAgICAgICAgaWYgKG5hbWVbMF0pIHtcbiAgICAgICAgICAgICAgICBpbml0aWFsID0gbmFtZVswXVswXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5hbWVbMV0pIHtcbiAgICAgICAgICAgICAgICBpbml0aWFsICs9IG5hbWVbMV1bMF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5oYXNfaW1hZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXtzdHlsZX0gb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrIHx8ICgoKSA9PiB7IH0pfT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlWydjb2xvciddID0gdGhpcy5zdGF0ZS5iZ0NvbG9yXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0gc3R5bGU9e3N0eWxlfSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2sgfHwgKCgpID0+IHsgfSl9PlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aW5pdGlhbC50b1VwcGVyQ2FzZSgpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5ub3RpZmljYXRpb25OZXcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiAnNTAlJywgYmFja2dyb3VuZENvbG9yOiAncmVkJywgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiAnLTJweCcsIHRvcDogJy0ycHgnLCB3aWR0aDogJzhweCcsIGhlaWdodDogJzhweCcgfX0+PC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbml0aWFsc1BpY3R1cmVcbiIsImltcG9ydCBJbml0aWFsc1BpY3R1cmUgZnJvbSAnLi9Jbml0aWFsc1BpY3R1cmUnXG5cbmV4cG9ydCBkZWZhdWx0IEluaXRpYWxzUGljdHVyZSJdLCJzb3VyY2VSb290IjoiIn0=