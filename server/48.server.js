exports.ids = [48];
exports.modules = {

/***/ "./dev/js/components/commons/Home/CorporateLeadPopup.js":
/*!**************************************************************!*\
  !*** ./dev/js/components/commons/Home/CorporateLeadPopup.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _commonFixedPopup = __webpack_require__(/*! ../commonFixedPopup/commonFixedPopup.js */ "./dev/js/components/commons/commonFixedPopup/commonFixedPopup.js");

var _commonFixedPopup2 = _interopRequireDefault(_commonFixedPopup);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Method to add before use,
// 1) cancelOverlay()
// 2) pushLead()


class CorporateLeadPopup extends _react2.default.Component {

    constructor(props) {
        super(props);

        this.inputHandler = e => {
            if (e.target.name == "phoneNumber") {
                if (e.target.value.length <= 10) {
                    this.setState({ [e.target.name]: e.target.value });
                }
            } else {
                this.setState({ [e.target.name]: e.target.value });
            }
        };

        this.submit = () => {
            if (!this.state.companyName) {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter Your Company Name" });
                return;
            }
            if (!this.state.email) {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter Email Id" });
                return;
            }
            if (!this.state.email.match(/\S+@\S+\.\S+/)) {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter Valid Email" });
                return;
            }
            if (!this.state.name) {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter Your Name" });
                return;
            }
            if (!this.state.phoneNumber) {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter Your Phone Number" });
                return;
            }

            if (this.state.phoneNumber.length < 10) {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter Valid Phone Number" });
                return;
            }

            let data = {
                'lead_source': 'CorporateGold',
                'source': '',
                'phone_number': this.state.phoneNumber,
                'company_name': this.state.companyName,
                'contact_person_name': this.state.name,
                'email': this.state.email,
                'number_of_employees': this.state.noe,
                'lead_type': 'CORPORATEGOLD'
            };
            this.props.pushLeads(data);
        };

        this.state = {
            companyName: '',
            noe: '',
            email: '',
            phoneNumber: '',
            name: ''
        };
    }

    render() {
        return _react2.default.createElement(
            _commonFixedPopup2.default,
            { cancelOverlay: this.props.cancelOverlay, className: 'test-clas' },
            _react2.default.createElement(
                'div',
                { className: 'col-sm-12 corporate-detail-section' },
                _react2.default.createElement('img', { className: 'modal-close-img', src: "/assets" + "/img/customer-icons/close-black.svg", alt: 'close', onClick: this.props.cancelOverlay }),
                _react2.default.createElement(
                    'h3',
                    null,
                    'Drop your details'
                ),
                _react2.default.createElement(
                    'h6',
                    null,
                    'We will reach you for further assistance'
                ),
                _react2.default.createElement(
                    'form',
                    { action: '' },
                    _react2.default.createElement(
                        'div',
                        { className: 'input-field-row' },
                        _react2.default.createElement('input', { type: 'text', placeholder: '* Company Name', style: { marginRight: 12 }, name: 'companyName', value: this.state.companyName, onChange: this.inputHandler }),
                        _react2.default.createElement('input', { type: 'number', placeholder: 'No of employees', name: 'noe', value: this.state.noe, onChange: this.inputHandler })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'input-field-row' },
                        _react2.default.createElement('input', { type: 'text', placeholder: '* Email Address', name: 'email', value: this.state.email, onChange: this.inputHandler })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'input-field-row' },
                        _react2.default.createElement('input', { type: 'text', placeholder: '* Contact Person Name', name: 'name', value: this.state.name, onChange: this.inputHandler })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'input-field-row' },
                        _react2.default.createElement('input', { type: 'number', max: '10', placeholder: '* Contact Number', name: 'phoneNumber', value: this.state.phoneNumber, onChange: this.inputHandler })
                    )
                ),
                _react2.default.createElement(
                    'button',
                    { className: 'ipd-inp-sbmt float-right', onClick: this.submit },
                    'Submit'
                )
            )
        );
    }
}

exports.default = CorporateLeadPopup;

/***/ }),

/***/ "./dev/js/components/commons/Home/DemoWidget.js":
/*!******************************************************!*\
  !*** ./dev/js/components/commons/Home/DemoWidget.js ***!
  \******************************************************/
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

class TopProcedureWidgets extends _react2.default.Component {

    navigateTo(data, e) {
        e.preventDefault();
        e.stopPropagation();
        let selectedCriteria = {
            type: 'ipd',
            id: data.id,
            name: data.name
        };

        let gtmData = {
            'Category': 'ConsumerApp', 'Action': 'HomeWidgetProcedureClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'home-widget-procedure-clicked', 'selected': data.name || '', 'selectedId': data.id || ''
        };
        _gtm2.default.sendEvent({ data: gtmData });

        this.props.toggleIPDCriteria(selectedCriteria, true);

        if (data.url) {
            this.props.history.push(`/${data.url}?showPopup=true`);
        } else {
            this.props.history.push(`/ipdInfo?ipd_id=${data.id}&showPopup=true`);
        }
    }

    scroll(type) {
        var elmnt = document.getElementById("top_ipd");
        let outerDivWidth = elmnt.offsetWidth;
        let childDivWidth = document.getElementsByClassName('top_ipd_list')[0].offsetWidth;
        let cardCount = document.getElementsByClassName('top_ipd_list')[0].childElementCount;
        let cardWidth = Math.ceil(childDivWidth / cardCount);

        let leftScroll = document.getElementById("top_ipd").scrollLeft;
        let scrollVal = Math.floor(outerDivWidth / cardWidth) * cardWidth;
        let cardEnd = cardCount * cardWidth;

        if (type == 'right') {
            elmnt.scroll({ left: leftScroll + scrollVal, behavior: 'smooth' });
            if (cardEnd <= leftScroll + scrollVal + outerDivWidth) {
                document.getElementById('leftArrow_ipd').classList.add("d-none");
            }
            document.getElementById('RightArrow_ipd').classList.remove("d-none");
        } else {
            elmnt.scroll({ left: leftScroll - scrollVal, behavior: 'smooth' });
            if (leftScroll - scrollVal <= 0) {
                document.getElementById('RightArrow_ipd').classList.add("d-none");
            }
            document.getElementById('leftArrow_ipd').classList.remove("d-none");
        }
    }

    render() {

        return _react2.default.createElement(
            'div',
            { className: 'pakg-slider-container mt-10 mb-10' },
            _react2.default.createElement(
                'div',
                { className: 'pkgSliderHeading' },
                _react2.default.createElement(
                    'h5',
                    null,
                    'Health Package Categories'
                ),
                _react2.default.createElement(
                    'span',
                    null,
                    'View All'
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'pkgSliderContainer', id: 'top_ipd' },
                _react2.default.createElement(
                    'div',
                    { className: 'pkgCardsList d-inline-flex sub-wd-cards top_ipd_list' },
                    _react2.default.createElement(
                        'a',
                        { className: 'pkgcustCards health-pkg-card-width' },
                        _react2.default.createElement(
                            'div',
                            { className: 'pkgcardImgCont' },
                            _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/ipd_procedure/images/delivery-01.png' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'pkgtstName prcd-height' },
                            'Full Body Check Up'
                        )
                    ),
                    _react2.default.createElement(
                        'a',
                        { className: 'pkgcustCards health-pkg-card-width' },
                        _react2.default.createElement(
                            'div',
                            { className: 'pkgcardImgCont' },
                            _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/ipd_procedure/images/delivery-01.png' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'pkgtstName prcd-height' },
                            'Full Body Check Up'
                        )
                    ),
                    _react2.default.createElement(
                        'a',
                        { className: 'pkgcustCards health-pkg-card-width' },
                        _react2.default.createElement(
                            'div',
                            { className: 'pkgcardImgCont' },
                            _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/ipd_procedure/images/delivery-01.png' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'pkgtstName prcd-height' },
                            'Full Body Check Up'
                        )
                    ),
                    _react2.default.createElement(
                        'a',
                        { className: 'pkgcustCards health-pkg-card-width' },
                        _react2.default.createElement(
                            'div',
                            { className: 'pkgcardImgCont' },
                            _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/ipd_procedure/images/delivery-01.png' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'pkgtstName prcd-height' },
                            'Full Body Check Up'
                        )
                    ),
                    _react2.default.createElement(
                        'a',
                        { className: 'pkgcustCards health-pkg-card-width' },
                        _react2.default.createElement(
                            'div',
                            { className: 'pkgcardImgCont' },
                            _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/ipd_procedure/images/delivery-01.png' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'pkgtstName prcd-height' },
                            'Full Body Check Up'
                        )
                    ),
                    _react2.default.createElement(
                        'a',
                        { className: 'pkgcustCards health-pkg-card-width' },
                        _react2.default.createElement(
                            'div',
                            { className: 'pkgcardImgCont' },
                            _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/ipd_procedure/images/delivery-01.png' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'pkgtstName prcd-height' },
                            'Full Body Check Up'
                        )
                    ),
                    _react2.default.createElement(
                        'a',
                        { className: 'pkgcustCards health-pkg-card-width' },
                        _react2.default.createElement(
                            'div',
                            { className: 'pkgcardImgCont' },
                            _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/ipd_procedure/images/delivery-01.png' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'pkgtstName prcd-height' },
                            'Full Body Check Up'
                        )
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'pkglftRhtbtncont' },
                _react2.default.createElement(
                    'div',
                    { className: 'pkg-btnlft d-none', id: 'RightArrow_ipd', onClick: this.scroll.bind(this, 'left') },
                    _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'pkg-btnrgt', id: 'leftArrow_ipd', onClick: this.scroll.bind(this, 'right') },
                    _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                )
            )
        );
    }
}

exports.default = TopProcedureWidgets;

/***/ }),

/***/ "./dev/js/components/commons/Home/GoldHomePageBanner.js":
/*!**************************************************************!*\
  !*** ./dev/js/components/commons/Home/GoldHomePageBanner.js ***!
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

class GoldHomePageView extends _react2.default.PureComponent {

    render() {

        return _react2.default.createElement(
            "div",
            { className: "gold-banner-container d-lg-none d-none mb-10" },
            _react2.default.createElement(
                "div",
                { className: "gold-banner-card" },
                _react2.default.createElement(
                    "div",
                    { className: "gld-home-icon" },
                    _react2.default.createElement(
                        "p",
                        null,
                        "Docprime ",
                        _react2.default.createElement("img", { className: "img-fluid", src: "/assets" + '/img/gold-lg.png' })
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "gld-home-content" },
                    _react2.default.createElement(
                        "h3",
                        null,
                        "The Healthcare Membership ",
                        _react2.default.createElement("br", null),
                        "You Can\u2019t Do Without"
                    ),
                    _react2.default.createElement(
                        "p",
                        null,
                        "Save More Than \u20B96,000/yr With Special Prices on OPD Consultations, Lab Tests and Medicines"
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "gld-home-ico" },
                    _react2.default.createElement(
                        "div",
                        { className: "gld-ico-card" },
                        _react2.default.createElement("img", { className: "img-fluid", src: "/assets" + '/img/dicicon1.svg' }),
                        _react2.default.createElement(
                            "p",
                            null,
                            "Exclusive Prices",
                            _react2.default.createElement("br", null),
                            "On Doctors & Labs"
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "gld-ico-card" },
                        _react2.default.createElement("img", { className: "img-fluid", src: "/assets" + '/img/dicicon2.svg' }),
                        _react2.default.createElement(
                            "p",
                            null,
                            "Flat 23% OFF ",
                            _react2.default.createElement("br", null),
                            "on Medicines"
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "gld-ico-card" },
                        _react2.default.createElement("img", { className: "img-fluid", src: "/assets" + '/img/dicicon3.svg' }),
                        _react2.default.createElement(
                            "p",
                            null,
                            "Unlimited Tele",
                            _react2.default.createElement("br", null),
                            "Consultations"
                        )
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "gold-home-price" },
                    _react2.default.createElement(
                        "p",
                        null,
                        "Starting at just ",
                        _react2.default.createElement(
                            "strong",
                            null,
                            "\u20B9199"
                        ),
                        "/yr "
                    ),
                    _react2.default.createElement(
                        "button",
                        { onClick: this.props.clickedGoldBanner },
                        "View Plans"
                    )
                )
            )
        );
    }
}

exports.default = GoldHomePageView;

/***/ }),

/***/ "./dev/js/components/commons/Home/HomeNewView.js":
/*!*******************************************************!*\
  !*** ./dev/js/components/commons/Home/HomeNewView.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _DesktopProfileHeader = __webpack_require__(/*! ../DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _footer = __webpack_require__(/*! ./footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _ChatPanel = __webpack_require__(/*! ../ChatPanel */ "./dev/js/components/commons/ChatPanel/index.js");

var _ChatPanel2 = _interopRequireDefault(_ChatPanel);

var _HelmetTags = __webpack_require__(/*! ../HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _config = __webpack_require__(/*! ../../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _Accordian = __webpack_require__(/*! ./Accordian */ "./dev/js/components/commons/Home/Accordian.js");

var _Accordian2 = _interopRequireDefault(_Accordian);

var _FixedMobileFooter = __webpack_require__(/*! ./FixedMobileFooter */ "./dev/js/components/commons/Home/FixedMobileFooter.js");

var _FixedMobileFooter2 = _interopRequireDefault(_FixedMobileFooter);

var _bannerCarousel = __webpack_require__(/*! ./bannerCarousel */ "./dev/js/components/commons/Home/bannerCarousel.js");

var _bannerCarousel2 = _interopRequireDefault(_bannerCarousel);

var _upComingAppointment = __webpack_require__(/*! ./upComingAppointment.js */ "./dev/js/components/commons/Home/upComingAppointment.js");

var _upComingAppointment2 = _interopRequireDefault(_upComingAppointment);

var _packageCompareStrip = __webpack_require__(/*! ../../diagnosis/searchPackages/packageCompare/packageCompareStrip.js */ "./dev/js/components/diagnosis/searchPackages/packageCompare/packageCompareStrip.js");

var _packageCompareStrip2 = _interopRequireDefault(_packageCompareStrip);

var _HomePagePackageWidget = __webpack_require__(/*! ./HomePagePackageWidget.js */ "./dev/js/components/commons/Home/HomePagePackageWidget.js");

var _HomePagePackageWidget2 = _interopRequireDefault(_HomePagePackageWidget);

var _criteo = __webpack_require__(/*! ../../../helpers/criteo.js */ "./dev/js/helpers/criteo.js");

var _criteo2 = _interopRequireDefault(_criteo);

var _HomePageTopHospitals = __webpack_require__(/*! ./HomePageTopHospitals.js */ "./dev/js/components/commons/Home/HomePageTopHospitals.js");

var _HomePageTopHospitals2 = _interopRequireDefault(_HomePageTopHospitals);

var _HomePageProcedureWidgets = __webpack_require__(/*! ./HomePageProcedureWidgets.js */ "./dev/js/components/commons/Home/HomePageProcedureWidgets.js");

var _HomePageProcedureWidgets2 = _interopRequireDefault(_HomePageProcedureWidgets);

var _HomePagePackageCategory = __webpack_require__(/*! ./HomePagePackageCategory.js */ "./dev/js/components/commons/Home/HomePagePackageCategory.js");

var _HomePagePackageCategory2 = _interopRequireDefault(_HomePagePackageCategory);

var _HomePageChatWidget = __webpack_require__(/*! ./HomePageChatWidget */ "./dev/js/components/commons/Home/HomePageChatWidget.js");

var _HomePageChatWidget2 = _interopRequireDefault(_HomePageChatWidget);

var _DemoWidget = __webpack_require__(/*! ./DemoWidget.js */ "./dev/js/components/commons/Home/DemoWidget.js");

var _DemoWidget2 = _interopRequireDefault(_DemoWidget);

var _BookingConfirmationPopup = __webpack_require__(/*! ../../diagnosis/bookingSummary/BookingConfirmationPopup */ "./dev/js/components/diagnosis/bookingSummary/BookingConfirmationPopup.js");

var _BookingConfirmationPopup2 = _interopRequireDefault(_BookingConfirmationPopup);

var _Loader = __webpack_require__(/*! ../Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _vipClubPopup = __webpack_require__(/*! ../../vipClub/vipClubPopup.js */ "./dev/js/components/vipClub/vipClubPopup.js");

var _vipClubPopup2 = _interopRequireDefault(_vipClubPopup);

var _PrescriptionUpload = __webpack_require__(/*! ../../../containers/commons/PrescriptionUpload.js */ "./dev/js/containers/commons/PrescriptionUpload.js");

var _PrescriptionUpload2 = _interopRequireDefault(_PrescriptionUpload);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _HomePageWidget = __webpack_require__(/*! ../HomeNewView/HomePageWidget.js */ "./dev/js/components/commons/HomeNewView/HomePageWidget.js");

var _HomePageWidget2 = _interopRequireDefault(_HomePageWidget);

var _CorporateLeadPopup = __webpack_require__(/*! ./CorporateLeadPopup.js */ "./dev/js/components/commons/Home/CorporateLeadPopup.js");

var _CorporateLeadPopup2 = _interopRequireDefault(_CorporateLeadPopup);

var _StaticHomePageContent = __webpack_require__(/*! ../HomeNewView/StaticHomePageContent.js */ "./dev/js/components/commons/HomeNewView/StaticHomePageContent.js");

var _StaticHomePageContent2 = _interopRequireDefault(_StaticHomePageContent);

var _GoldHomePageBanner = __webpack_require__(/*! ./GoldHomePageBanner.js */ "./dev/js/components/commons/Home/GoldHomePageBanner.js");

var _GoldHomePageBanner2 = _interopRequireDefault(_GoldHomePageBanner);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");


class MainView extends _react2.default.Component {

    constructor(props) {
        super(props);
        // let footerData = null
        // if (this.props.initialServerData) {
        //     footerData = this.props.initialServerData.footerData
        // }

        this.animateValue = obj => {
            let start = 25000;
            let end = null;
            let duration = 3000;
            if (obj) {
                // save starting text for later (and as a fallback text if JS not running and/or google)
                let textStarting = obj.innerHTML;

                // remove non-numeric from starting text if not specified
                //end = end || parseInt(textStarting.replace(/\D/g, ""));
                end = end || parseFloat(textStarting);

                let range = end - start;

                // no timer shorter than 50ms (not really visible any way)
                let minTimer = 100;

                // calc step time to show all interediate values
                let stepTime = Math.abs(Math.floor(duration / range));

                // never go below minTimer
                stepTime = Math.max(stepTime, minTimer);

                // get current time and calculate desired end time
                let startTime = new Date().getTime();
                let endTime = startTime + duration;
                let timer;
                //const posY = window.pageYOffset;
                const run = () => {
                    let now = new Date().getTime();
                    let remaining = Math.max((endTime - now) / duration, 0);
                    let value = Math.round(end - remaining * range);
                    // replace numeric digits only in the original string
                    obj.innerHTML = textStarting.replace(/([0-9]+)/g, value);
                    if (value == end) {
                        clearInterval(timer);
                    }
                };
                window.addEventListener('scroll', () => {
                    if (window.pageYOffset >= 1000) {
                        timer = setInterval(run, stepTime);
                        run();
                    }
                });
            }
        };

        this.searchLab = test => {
            let data;
            if (test.topPackages) {
                test.type = 'package';
                this.props.setPackageId(test.id, true);
                data = {
                    'Category': 'ConsumerApp', 'Action': 'SelectedHealthPackage', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'selected-health-package', 'selected': test.name || '', 'selectedId': test.id || ''
                };
            } else {
                test.type = 'test';
                this.props.toggleDiagnosisCriteria('test', test, true);
                data = {
                    'Category': 'ConsumerApp', 'Action': 'SelectedBookTest', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'selected-book-test', 'selected': test.name || '', 'selectedId': test.id || ''
                };
            }

            _gtm2.default.sendEvent({ data: data });

            if (test.topPackages) {
                setTimeout(() => {
                    this.props.history.push('/searchpackages');
                }, 100);
            } else {
                setTimeout(() => {
                    this.props.history.push('/lab/searchresults');
                }, 100);
            }
        };

        this.searchDoctor = speciality => {
            if (speciality.url) {
                this.props.history.push(`/${speciality.url}`);
            } else {
                speciality.type = 'speciality';
                this.props.toggleOPDCriteria('speciality', speciality, true);
                setTimeout(() => {
                    this.props.history.push('/opd/searchresults');
                }, 100);
            }
            let data = {
                'Category': 'ConsumerApp', 'Action': 'SelectedDoctorSpecializations', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'selected-doctor-specializations', 'selected': speciality.name || '', 'selectedId': speciality.id || ''
            };
            _gtm2.default.sendEvent({ data: data });
        };

        this.goToSearch = data => {
            if (data.type) {
                this.props.selectSearchType(data.type);
            }
            this.props.history.push(data.where);
        };

        this.searchHospitals = data => {

            let gtmData = {};
            if (data.topHospitals) {
                gtmData = {
                    'Category': 'ConsumerApp', 'Action': 'HomeWidgetHospitalClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'home-widget-hospital-clicked', 'selected': '', 'selectedId': data.id || ''
                };
            } else {
                gtmData = {
                    'Category': 'ConsumerApp', 'Action': 'HomeWidgetNearbyHospitalClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'home-widget-nearby-hospital-clicked', 'selected': '', 'selectedId': data.id || ''
                };
            }

            _gtm2.default.sendEvent({ data: gtmData });

            let redirectUrl = '';

            if (data.url) {
                redirectUrl = `/${data.url}`;
            } else {
                redirectUrl = `/ipd/hospital/${data.id}`;
            }

            if (data.is_ipd_hospital) {
                redirectUrl += `?showPopup=true`;
            }
            this.props.history.push(redirectUrl);
        };

        this.sbiBannerClicked = () => {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'SBIGOLDBANNER', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'sbi-gold-banner'
            };
            _gtm2.default.sendEvent({ data: data });
            this.props.history.push('/vip-gold-details?is_gold=true&source=mobile-sbi-gold-clicked&lead_source=Docprime');
        };

        this.nearbyHospitalViewAllClicked = () => {
            let gtmData = {
                'Category': 'ConsumerApp', 'Action': 'HomeWidgetHospitalViewAllClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'home-widget-hospital-view-all-clicked'
            };
            _gtm2.default.sendEvent({ data: gtmData });
            this.props.mergeIpdCriteria({
                commonSelectedCriterias: [],
                nextSelectedCriterias: []
            });
            this.props.history.push(`/ipd/searchHospitals`);
        };

        this.afterUserLogin = () => {
            let is_user_insurance_active = false;
            let user_insurance_status = null;
            if (this.props.defaultProfile && this.props.profiles && this.props.profiles[this.props.defaultProfile]) {
                user_insurance_status = this.props.profiles[this.props.defaultProfile].insurance_status;
            }
            is_user_insurance_active = user_insurance_status == 1 || user_insurance_status == 5 || user_insurance_status == 4 || user_insurance_status == 7;
            if (is_user_insurance_active) {
                setTimeout(() => {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "For insured customers, prescription upload is required at the time of booking" });
                }, 1000);
                this.setState({ is_user_insurance_active: true });
            }
        };

        this.getCorporateLead = () => {
            let gtmData = {
                'Category': 'ConsumerApp', 'Action': 'CorporateHomePageClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'corporate-home-page-clicked'
            };
            _gtm2.default.sendEvent({ data: gtmData });
            this.setState({ openCorporateBlock: true });
        };

        this.cancelOverlay = () => {
            this.setState({ openCorporateBlock: false });
        };

        this.pushLeads = data => {
            const parsed = queryString.parse(window.location.search);
            let params = _extends({}, data);
            if (parsed) {
                params['source'] = {
                    utm_source: parsed.utm_source || '',
                    utm_term: parsed.utm_term || '',
                    utm_medium: parsed.utm_medium || '',
                    utm_campaign: parsed.utm_campaign || ''
                };
            }
            this.props.NonIpdBookingLead(params).then(() => {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Response Submitted Successfully" });
                this.cancelOverlay();
            });
        };

        this.clickedGoldBanner = () => {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'MobileHomePageGoldBannerClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'mobile-homepage-gold-banner-clicked'
            };
            _gtm2.default.sendEvent({ data: data });
            this.props.history.push('/vip-gold-details?is_gold=true&source=mobile-home-page-gold-banner&lead_source=Docprime');
        };

        this.state = {
            // specialityFooterData: footerData,
            showPopup: false,
            clickedOn: '',
            show_popup: false,
            is_user_insurance_active: false,
            openCorporateBlock: false
        };
    }

    componentDidMount() {
        if (window) {
            window.scrollTo(0, 0);
        }

        let user_insurance_status = null;
        if (this.props.defaultProfile && this.props.profiles && this.props.profiles[this.props.defaultProfile]) {
            user_insurance_status = this.props.profiles[this.props.defaultProfile].insurance_status;
        }
        user_insurance_status = user_insurance_status == 1 || user_insurance_status == 5 || user_insurance_status == 4 || user_insurance_status == 7;
        this.setState({ is_user_insurance_active: user_insurance_status });

        // this.props.getSpecialityFooterData((cb) => {
        //     this.setState({ specialityFooterData: cb });
        // });
        if (!this.props.static_footer_data) {
            this.props.getSpecialityFooterData();
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

        let data = { 'event': "viewHome"

            //background circle animation
        };if (window) {
            const mView = document.getElementById('mainView');
            window.addEventListener('scroll', () => {

                //background circle animatiom
                var positionY = window.pageYOffset / 2;
                mView.style.backgroundPosition = `0 -${positionY}px`;
            });
        }
        //background circle animation

        //count animation

        const cVal1 = document.getElementById('countNum');
        const cVal2 = document.getElementById('countNum2');
        this.animateValue(cVal1);
        this.animateValue(cVal2);
        //count animation
        _criteo2.default.sendData(data);
    }

    navigateTo(where, type, data, e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (type) {
            this.props.selectSearchType(type);
        }
        if (where == '/chat') {
            this.props.history.push(where, data);
        } else {
            this.props.history.push(where);
        }
    }

    getAge(birthday) {
        birthday = new Date(birthday);
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    gotToSignup() {
        let data = {
            'Category': 'ConsumerApp', 'Action': 'HomepageBannerSignupClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'homepage-banner-signup-clicked'
        };
        _gtm2.default.sendEvent({ data: data });
        this.props.history.push('/user?ref=home');
    }

    gotToDoctorSignup(isLab) {
        let data;
        if (isLab) {
            data = {
                'Category': 'ConsumerApp', 'Action': 'RunLabBannerClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'run-lab-banner-clicked'
            };
        } else {
            data = {
                'Category': 'ConsumerApp', 'Action': 'RunClinicBannerClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'run-clinic-banner-clicked'
            };
        }
        _gtm2.default.sendEvent({ data: data });
        this.props.history.push('/doctorsignup');
    }

    getTopList(list) {
        let topList = [];
        if (list.length > 5) {
            topList = list.slice(0, 5);
        } else {
            topList = list;
        }
        return topList;
    }

    orderMedClick(source) {
        this.setState({ showPopup: true, clickedOn: source }, () => {
            setTimeout(() => this.continueClick(), 1000);
        });
        if (source === 'newOrder') {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'DesktopNewOrderClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'desktop-new-order-click'
            };
            _gtm2.default.sendEvent({ data: data });
        } else if (source === 'prevOrder') {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'DesktopPreviousOrderClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'desktop-previous-order-click'
            };
            _gtm2.default.sendEvent({ data: data });
        }
    }

    continueClick() {
        if (typeof navigator === 'object') {
            if (/mobile/i.test(navigator.userAgent)) {} else {
                if (this.state.clickedOn === 'newOrder') {
                    window.open(_config2.default.PHARMEASY_NEW_ORDER_IFRAME_URL, '_blank');
                } else {
                    window.open(_config2.default.PHARMEASY_PREV_ORDER_IFRAME_URL, '_blank');
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

    closeLeadPopup() {
        this.setState({ show_popup: false });
    }

    render() {

        const parsed = queryString.parse(this.props.location.search);
        let topSpecializations = [];
        if (this.props.specializations && this.props.specializations.length) {
            topSpecializations = this.props.specializations; //.slice(0, 9)//this.getTopList(this.props.specializations)
        }

        let topTests = [];
        if (this.props.common_tests && this.props.common_tests.length) {
            topTests = this.props.common_tests; //.slice(0, 9)//this.getTopList(this.props.common_tests)
        }

        let topPackages = [];
        if (this.props.common_package && this.props.common_package.length) {
            topPackages = this.props.common_package; //this.getTopList(this.props.common_package)
        }

        let articles = this.props.articles || [];

        let isSBI = this.props.mergeState && document && typeof document == 'object' && document.location && document.location.host && document.location.host.includes('sbi');
        let showPackageStrip = this.props.compare_packages && this.props.compare_packages.length > 0 && !this.props.isPackage;

        let defaultUserProfile = null;
        if (this.props.defaultProfile && this.props.profiles && this.props.profiles[this.props.defaultProfile]) {
            defaultUserProfile = this.props.profiles[this.props.defaultProfile];
        }

        let showGoldBanner = false;

        if (this.props.user_detail_fetched) {

            if (defaultUserProfile && Object.keys(defaultUserProfile).length) {

                showGoldBanner = !(this.props.is_any_user_buy_gold || defaultUserProfile.insurance_status == 1 || defaultUserProfile.insurance_status == 5 || defaultUserProfile.insurance_status == 4 || defaultUserProfile.insurance_status == 7);
            } else {
                showGoldBanner = true;
            }
        }

        if (!_storage2.default.checkAuth()) {
            showGoldBanner = true;
        }

        return _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement(
                'div',
                { className: 'container-fluid p-0' },
                _react2.default.createElement(_DesktopProfileHeader2.default, { homePage: true, showSearch: true, showPackageStrip: showPackageStrip, new_fixed_header: 1 }),
                this.state.openCorporateBlock ? _react2.default.createElement(_CorporateLeadPopup2.default, { cancelOverlay: this.cancelOverlay, pushLeads: this.pushLeads }) : '',
                _react2.default.createElement(
                    'div',
                    { className: 'new-main-view', id: 'mainView' },
                    showGoldBanner ? _react2.default.createElement(
                        'section',
                        { className: 'card-block-row banner-slider-row mbl-banner' },
                        !isSBI && this.props.offerList && this.props.offerList.filter(x => x.slider_location === 'home_page').length ? _react2.default.createElement(_bannerCarousel2.default, _extends({}, this.props, { sliderLocation: 'home_page' })) : ''
                    ) : '',
                    _react2.default.createElement(
                        'section',
                        { className: 'card-block-row banner-slider-row d-banner' },
                        !isSBI && this.props.offerList && this.props.offerList.filter(x => x.slider_location === 'home_page').length ? _react2.default.createElement(_bannerCarousel2.default, _extends({}, this.props, { sliderLocation: 'home_page' })) : ''
                    ),
                    _react2.default.createElement(_upComingAppointment2.default, this.props),
                    _react2.default.createElement(
                        'section',
                        { className: 'd-none full-banner-section' },
                        _react2.default.createElement('img', { style: { width: '100%' }, className: 'img-fluid', src: 'https://cdn.docprime.com/media/web/custom_images/Gold_home-min_1.png', onClick: e => {
                                let data = {
                                    'Category': 'ConsumerApp', 'Action': 'MobileLeftMenuGoldClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'mobile-leftmenu-gold-clicked'
                                };
                                _gtm2.default.sendEvent({ data: data });
                                this.props.history.push('/vip-gold-details?is_gold=true&source=mobile-leftmenu-gold-clicked&lead_source=Docprime');
                            } }),
                        _react2.default.createElement(
                            'a',
                            { href: '', onClick: e => e.preventDefault() },
                            _react2.default.createElement(
                                'span',
                                { onClick: this.getCorporateLead },
                                'Special plans available for Corporates',
                                _react2.default.createElement(
                                    'span',
                                    { className: 'down-icon-yellow' },
                                    '>'
                                )
                            )
                        )
                    ),
                    showGoldBanner ? '' : _react2.default.createElement(
                        'section',
                        { className: 'card-block-row banner-slider-row mbl-banner' },
                        !isSBI && this.props.offerList && this.props.offerList.filter(x => x.slider_location === 'home_page').length ? _react2.default.createElement(_bannerCarousel2.default, _extends({}, this.props, { sliderLocation: 'home_page' })) : ''
                    ),
                    showGoldBanner ? _react2.default.createElement(_GoldHomePageBanner2.default, { clickedGoldBanner: this.clickedGoldBanner }) : '',
                    this.props.top_hospitals && this.props.top_hospitals.length ? _react2.default.createElement(_HomePageWidget2.default, {
                        heading: 'Top Hospitals',
                        list: this.props.top_hospitals,
                        topHospitals: true,
                        dataType: 'home_top_hsptl',
                        historyObj: this.props.history,
                        searchFunc: this.searchHospitals
                    }) : '',
                    this.props.nearbyHospitals && this.props.nearbyHospitals.hospitals && this.props.nearbyHospitals.hospitals.length ? _react2.default.createElement(_HomePageWidget2.default, {
                        heading: 'Hospitals Near you',
                        list: this.props.nearbyHospitals.hospitals,
                        dataType: 'home_nearby-hsptl',
                        historyObj: this.props.history,
                        searchFunc: this.searchHospitals
                    }) : '',
                    topSpecializations && topSpecializations.length ? _react2.default.createElement(_HomePageWidget2.default, {
                        heading: 'Book Doctor Appointments',
                        rightText: 'Search more specializations',
                        rightButtonClicked: this.goToSearch,
                        searchFunc: this.searchDoctor,
                        list: topSpecializations,
                        dataType: 'home_top_specz',
                        discount: '50%',
                        historyObj: this.props.history,
                        type: 'opd',
                        navTo: '/search?from=home',
                        count: 10,
                        searchType: 'specializations',
                        historyObj: this.props.history,
                        locationObj: this.props.location,
                        selectSearchType: this.props.selectSearchType
                    }) : '',
                    topPackages && topPackages.length ? _react2.default.createElement(_HomePageWidget2.default, {
                        heading: 'Popular Health Packages',
                        rightText: 'View all',
                        rightButtonClicked: this.goToSearch,
                        topPackages: true,
                        list: topPackages,
                        searchFunc: this.searchLab,
                        dataType: 'home_top_pckg',
                        historyObj: this.props.history,
                        type: 'package',
                        navTo: '/searchpackages'
                        //count={8} 
                        // searchType="packages"
                        // historyObj={this.props.history}
                        // locationObj={this.props.location}
                        // selectSearchType={this.props.selectSearchType}
                    }) : '',
                    topTests && topTests.length ? _react2.default.createElement(_HomePageWidget2.default, {
                        heading: 'Book Lab Tests',
                        rightText: 'Search more test',
                        rightButtonClicked: this.goToSearch,
                        list: topTests,
                        searchFunc: this.searchLab,
                        dataType: 'home_top_tests',
                        discount: '50%',
                        historyObj: this.props.history,
                        type: 'lab',
                        navTo: '/search?from=home',
                        count: 10,
                        is_user_insurance_active: this.state.is_user_insurance_active,
                        historyObj: this.props.history,
                        locationObj: this.props.location,
                        afterUserLogin: this.afterUserLogin,
                        profiles: this.props.profiles,
                        searchType: 'tests',
                        selectSearchType: this.props.selectSearchType
                    }) : '',
                    this.state.is_user_insurance_active ? '' : _react2.default.createElement(_PrescriptionUpload2.default, { historyObj: this.props.history, is_home_page: true, locationObj: this.props.location, profiles: this.props.profiles, afterUserLogin: this.afterUserLogin }),
                    _react2.default.createElement(_StaticHomePageContent2.default, null),
                    _react2.default.createElement(_Accordian2.default, null)
                ),
                _react2.default.createElement(
                    'section',
                    { className: 'card-block-row detail-row' },
                    _react2.default.createElement(
                        'h6',
                        null,
                        'Download the App Now'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row m-0' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12 col-sm-6 col-lg-5 other-details p-0' },
                            _react2.default.createElement(
                                'ul',
                                null,
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    'Online Consultations'
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    'Book Doctor Appointments the Prime Way'
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    'Doctors: For you, Near you'
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    'Book Lab Tests and Free Health Check-Ups'
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    'Store Medical Records'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'download-links d-flex align-item-center' },
                                _react2.default.createElement(
                                    'a',
                                    { href: 'https://docprimeapp.page.link/HomepageAppInstallAndroid', target: '_blank' },
                                    _react2.default.createElement('img', { width: '180', style: { marginLeft: "-12px" }, src: "/assets" + "/img/google-play.png", alt: 'Android' })
                                ),
                                _react2.default.createElement(
                                    'a',
                                    { href: 'https://docprimeapp.page.link/HomepageAppInstalliOS', target: '_blank' },
                                    _react2.default.createElement('img', { width: '160', src: "/assets" + "/img/ios.png", alt: 'ios' })
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12 col-sm-6 col-lg-7 demo-mbl-screen-col' },
                            _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + "/img/demo-mbl.png", alt: 'ios' })
                        )
                    )
                ),
                _react2.default.createElement(_FixedMobileFooter2.default, this.props),
                _react2.default.createElement(_footer2.default, { specialityFooterData: this.props.static_footer_data })
            ),
            _react2.default.createElement(
                'div',
                { className: 'd-none new-chat-box' },
                _react2.default.createElement('input', { type: 'checkbox' }),
                _react2.default.createElement(
                    'div',
                    { className: 'chatbox-main mb-3' },
                    _react2.default.createElement(_ChatPanel2.default, { key: 'chat', homePage: true, offerList: this.props.offerList })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'chat-box-circle d-flex justify-content-center align-items-center text-center flex-column' },
                    _react2.default.createElement('img', { height: '17', className: 'img-fluid', src: "/assets" + "/img/chat.svg", alt: 'chat' }),
                    _react2.default.createElement(
                        'h6',
                        null,
                        'Doctor ',
                        _react2.default.createElement('br', null),
                        'Consultation'
                    ),
                    _react2.default.createElement(
                        'h3',
                        { className: 'align-items-center justify-content-center' },
                        _react2.default.createElement('img', { src: "/assets" + "/img/minimize.svg", alt: 'cancel' })
                    )
                )
            )
        );
    }
}

exports.default = MainView;

/***/ }),

/***/ "./dev/js/components/commons/Home/HomePageChatWidget.js":
/*!**************************************************************!*\
  !*** ./dev/js/components/commons/Home/HomePageChatWidget.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TopChatWidget extends _react2.default.Component {

	constructor(props) {
		super(props);
	}

	widgetClick(knowMore = false) {

		// this.props.history.push('/mobileviewchat')
		if (knowMore) {
			let gtmData = {
				'Category': 'ConsumerApp', 'Action': 'HomeVipWidgetClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'home-vip-widget-click'
			};
			_gtm2.default.sendEvent({ data: gtmData });
			this.props.clearVipSelectedPlan();
			this.props.history.push('/vip-gold-details?is_gold=true&source=mobile-chat-widget-gold-clicked&lead_source=Docprime');
		} else {
			let gtmData = {
				'Category': 'ConsumerApp', 'Action': 'HomeChatWidgetClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'home-chat-widget-click'
			};
			_gtm2.default.sendEvent({ data: gtmData });
			this.props.history.push('/mobileviewchat');
		}
	}

	render() {
		return _react2.default.createElement(
			'div',
			{ className: 'd-md-none home-duo-widget' },
			_react2.default.createElement(
				'div',
				{ className: ' widget mrb-10 cursor-pntr', style: { padding: '4px 6px', borderBottom: '5px solid #ffb601', alignItems: 'center', justifyContent: 'space-between' }, onClick: () => this.widgetClick(true) },
				_react2.default.createElement(
					'div',
					{ className: 'home-vip-cont' },
					_react2.default.createElement(
						'div',
						{ className: 'doc-avatar' },
						_react2.default.createElement('img', { style: { width: 30 }, src: "/assets" + '/img/gold-lg.png' })
					),
					_react2.default.createElement(
						'div',
						{ style: { flex: 1 } },
						_react2.default.createElement(
							'p',
							{ className: 'fw-700', style: { fontSize: 12 } },
							'Become a Docprime Gold member',
							_react2.default.createElement(
								'span',
								{ className: 'vip-tp-sub-txt' },
								'Save more with exclusive membership'
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'chat-now-btn text-right' },
					_react2.default.createElement(
						'p',
						{ className: 'fw-500' },
						'Know More'
					)
				)
			),
			_react2.default.createElement(
				'div',
				{ className: ' widget mrb-10 cursor-pntr', style: { padding: '4px 6px', borderBottom: '5px solid #4289fe', alignItems: 'center', justifyContent: 'space-between' }, onClick: () => this.widgetClick() },
				_react2.default.createElement(
					'div',
					{ className: 'home-vip-cont' },
					_react2.default.createElement(
						'div',
						{ className: 'doc-avatar' },
						_react2.default.createElement('img', { src: "/assets" + '/img/customer-icons/chat-icon.png' })
					),
					_react2.default.createElement(
						'div',
						{ style: { flex: 1 } },
						_react2.default.createElement(
							'p',
							{ className: 'fw-700', style: { fontSize: 12 } },
							'Online Doctor Consultation',
							_react2.default.createElement(
								'span',
								{ className: 'vip-tp-sub-txt' },
								'Talk to top doctors without any wait times'
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'chat-now-btn text-right' },
					_react2.default.createElement(
						'p',
						{ className: 'fw-500' },
						'Consult Now'
					)
				)
			)
		);
	}
}

exports.default = TopChatWidget;

/***/ }),

/***/ "./dev/js/components/commons/Home/HomePagePackageCategory.js":
/*!*******************************************************************!*\
  !*** ./dev/js/components/commons/Home/HomePagePackageCategory.js ***!
  \*******************************************************************/
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

class HomePagePackageCategory extends _react2.default.PureComponent {

    navigateTo(PkgData, e) {
        let data = {
            'Category': 'ConsumerApp', 'Action': 'HomePageComparePackageClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'home-page-compare-package-clicked', 'package_id': PkgData
        };
        _gtm2.default.sendEvent({ data: data });

        let packages = {};
        let selectedPkgCompareIds = [];
        this.props.historyObj.push('/package/compare?category_ids=' + PkgData.id);
    }

    scroll(type) {
        var elmnt = document.getElementById("top_pkgCat");
        let outerDivWidth = elmnt.offsetWidth;
        let childDivWidth = document.getElementsByClassName('top_pkgCat')[0].offsetWidth;
        let cardCount = document.getElementsByClassName('top_pkgCat')[0].childElementCount;
        let cardWidth = Math.ceil(childDivWidth / cardCount);

        let leftScroll = document.getElementById("top_pkgCat").scrollLeft;
        let scrollVal = Math.floor(outerDivWidth / cardWidth) * cardWidth;
        let cardEnd = cardCount * cardWidth;

        if (type == 'right') {
            elmnt.scroll({ left: leftScroll + scrollVal, behavior: 'smooth' });
            if (cardEnd <= leftScroll + scrollVal + outerDivWidth) {
                document.getElementById('leftArrow_pkgCat').classList.add("d-none");
            }
            document.getElementById('RightArrow_pkgCat').classList.remove("d-none");
        } else {
            elmnt.scroll({ left: leftScroll - scrollVal, behavior: 'smooth' });
            if (leftScroll - scrollVal <= 0) {
                document.getElementById('RightArrow_pkgCat').classList.add("d-none");
            }
            document.getElementById('leftArrow_pkgCat').classList.remove("d-none");
        }
    }
    ViewAll() {
        let package_category_ids = [];
        this.props.top_data.map((data, i) => {
            package_category_ids.push(data.id);
        });
        this.props.historyObj.push('/searchpackages?package_category_ids=' + package_category_ids);
    }

    render() {

        return _react2.default.createElement(
            'div',
            { className: 'pakg-slider-container mt-10 mb-10' },
            _react2.default.createElement(
                'div',
                { className: 'pkgSliderHeading' },
                _react2.default.createElement(
                    'h5',
                    null,
                    'Health Package Categories'
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'pkgSliderContainer', id: 'top_pkgCat' },
                _react2.default.createElement(
                    'div',
                    { className: 'pkgCardsList d-inline-flex sub-wd-cards top_pkgCat' },
                    this.props.top_data.map((data, i) => {
                        return _react2.default.createElement(
                            'a',
                            { className: 'pkgcustCards health-pkg-card-width', key: i, onClick: this.navigateTo.bind(this, data) },
                            _react2.default.createElement(
                                'div',
                                { className: 'pkgcardImgCont' },
                                _react2.default.createElement('img', { className: 'img-fluid', src: data.svg_icon ? data.svg_icon : data.icon })
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'pkgtstName prcd-height' },
                                data.name
                            )
                        );
                    })
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'pkglftRhtbtncont' },
                _react2.default.createElement(
                    'div',
                    { className: 'pkg-btnlft d-none', id: 'RightArrow_pkgCat', onClick: this.scroll.bind(this, 'left') },
                    _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'pkg-btnrgt', id: 'leftArrow_pkgCat', onClick: this.scroll.bind(this, 'right') },
                    _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                )
            )
        );
    }
}

exports.default = HomePagePackageCategory;

/***/ }),

/***/ "./dev/js/components/commons/Home/index.js":
/*!*************************************************!*\
  !*** ./dev/js/components/commons/Home/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HomeNewView = __webpack_require__(/*! ./HomeNewView */ "./dev/js/components/commons/Home/HomeNewView.js");

var _HomeNewView2 = _interopRequireDefault(_HomeNewView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _HomeNewView2.default;

/***/ }),

/***/ "./dev/js/components/commons/HomeNewView/StaticHomePageContent.js":
/*!************************************************************************!*\
  !*** ./dev/js/components/commons/HomeNewView/StaticHomePageContent.js ***!
  \************************************************************************/
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

    function scroll(type) {
        let dataType = 'static_review_blck';
        var elmnt = document.getElementById(dataType);

        if (elmnt) {
            let outerDivWidth = elmnt.offsetWidth;
            let cardCount = elmnt.children && elmnt.children.length ? elmnt.children.length : 6;
            let childDivWidth = elmnt.scrollWidth ? elmnt.scrollWidth : 3000;
            let cardWidth = Math.ceil(childDivWidth / cardCount);

            let leftScroll = elmnt.scrollLeft;

            if (type == 'right') {
                elmnt.scroll({ left: leftScroll + outerDivWidth, behavior: 'smooth' });
                if (childDivWidth <= leftScroll + 2 * outerDivWidth) {
                    document.getElementById(`${dataType}_leftArrow_hsptl`).classList.add("d-none");
                }
                document.getElementById(`${dataType}_RightArrow_hsptl`).classList.remove("d-none");
            } else {
                elmnt.scroll({ left: leftScroll - outerDivWidth, behavior: 'smooth' });
                if (leftScroll - outerDivWidth <= 0) {
                    document.getElementById(`${dataType}_RightArrow_hsptl`).classList.add("d-none");
                }
                document.getElementById(`${dataType}_leftArrow_hsptl`).classList.remove("d-none");
            }
        }
    }

    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
            'section',
            { className: 'card-block-row' },
            _react2.default.createElement(
                'h6',
                { className: 'text-center fw-500 our-partner-heading-text' },
                'Our Partners'
            ),
            _react2.default.createElement(
                'div',
                { className: 'card-slider-container partner-section d-flex justify-content-center align-item-center flex-wrap' },
                _react2.default.createElement(
                    'div',
                    { className: 'partner-img-block' },
                    _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/web/custom_images/Image_1-12x.png', alt: 'Partners' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'partner-img-block' },
                    _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/web/custom_images/Image_2-12x.png', alt: 'Partners' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'partner-img-block' },
                    _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/web/custom_images/Image_72x.png', alt: 'Partners' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'partner-img-block' },
                    _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/web/custom_images/Image_92x.png', alt: 'Partners' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'partner-img-block' },
                    _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/web/custom_images/Image_102x.png', alt: 'Partners' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'partner-img-block' },
                    _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/web/custom_images/Image_182x.png', alt: 'Partners' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'partner-img-block' },
                    _react2.default.createElement('img', { className: 'img-fluid transform-sc-1', src: 'https://cdn.docprime.com/media/web/custom_images/Image_6-12x.png', alt: 'Partners' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'partner-img-block' },
                    _react2.default.createElement('img', { style: { transform: "scale(0.5)" }, className: 'img-fluid', src: 'https://cdn.docprime.com/media/web/custom_images/Image_4-12x.png', alt: 'Partners' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'partner-img-block' },
                    _react2.default.createElement('img', { style: { transform: "scale(0.5)" }, className: 'img-fluid', src: 'https://cdn.docprime.com/media/web/custom_images/Image_3-12x.png', alt: 'Partners' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'partner-img-block' },
                    _react2.default.createElement('img', { style: { transform: "scale(0.5)" }, className: 'img-fluid', src: 'https://cdn.docprime.com/media/web/custom_images/Image_52x.png', alt: 'Partners' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'partner-img-block' },
                    _react2.default.createElement('img', { className: 'img-fluid', src: 'https://cdn.docprime.com/media/web/custom_images/Image_112x.png', alt: 'Partners' })
                )
            )
        ),
        _react2.default.createElement(
            'section',
            { className: 'card-block-row' },
            _react2.default.createElement(
                'div',
                { className: 'card-slider-container d-flex justify-content-between milestone-section', id: 'counter-section' },
                _react2.default.createElement(
                    'div',
                    { className: 'consultation-col' },
                    _react2.default.createElement(
                        'h3',
                        { className: 'fw-500 text-center' },
                        _react2.default.createElement(
                            'span',
                            null,
                            '1 Lakh +'
                        ),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'span',
                            null,
                            'Doctor and Lab Appointments'
                        )
                    ),
                    _react2.default.createElement(
                        'h3',
                        { className: 'fw-500 text-center' },
                        _react2.default.createElement(
                            'span',
                            null,
                            '10 Lakh +'
                        ),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'span',
                            null,
                            'Online Consultation'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'consultation-col left-border' },
                    _react2.default.createElement(
                        'h4',
                        { className: 'fw-500 text-center' },
                        _react2.default.createElement(
                            'span',
                            { id: 'countNum' },
                            '30000 +'
                        ),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'span',
                            null,
                            'Doctor Network'
                        )
                    ),
                    _react2.default.createElement(
                        'h4',
                        { className: 'fw-500 text-center' },
                        _react2.default.createElement(
                            'span',
                            { id: 'countNum2' },
                            '5000 +'
                        ),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'span',
                            null,
                            'Lab Network'
                        )
                    ),
                    _react2.default.createElement(
                        'h4',
                        { className: 'fw-500 text-center' },
                        _react2.default.createElement(
                            'span',
                            null,
                            '2 Lakh +'
                        ),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'span',
                            null,
                            'Prescription Delivered'
                        )
                    )
                )
            )
        ),
        _react2.default.createElement(
            'section',
            { className: 'card-block-row ' },
            _react2.default.createElement(
                'h6',
                { className: 'text-center fw-500 customer-review-heading' },
                'Our Happy Customers '
            ),
            _react2.default.createElement(
                'div',
                { className: 'card-slider-container cust-review d-flex justify-content-between cust-feedback-col', id: 'static_review_blck' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-10 col-sm-4 text-center' },
                    _react2.default.createElement(
                        'div',
                        { className: 'cust-img-block d-flex justify-content-center align-items-center fw-500' },
                        _react2.default.createElement(
                            'span',
                            null,
                            'AG'
                        )
                    ),
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Ananda Ghoshal '
                    ),
                    _react2.default.createElement(
                        'ul',
                        { className: 'd-flex justify-content-center align-item-center mb-2' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        )
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'text-center mb-2' },
                        'Docprime has provided me the chance to consult the Doctor at the earliest. Their customer care is prompt and cooperative to sort out my problem as soon as possible. It is the easiest way to book Doctor apponintments'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-10 col-sm-4 text-center' },
                    _react2.default.createElement(
                        'div',
                        { className: 'cust-img-block d-flex justify-content-center align-items-center fw-500' },
                        _react2.default.createElement(
                            'span',
                            null,
                            'S'
                        )
                    ),
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Sanat'
                    ),
                    _react2.default.createElement(
                        'ul',
                        { className: 'd-flex justify-content-center align-item-center mb-2' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        )
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'text-center mb-2' },
                        'Docprime has helped me choose a doctor (dentist) without any hassle, considering the fact that I am completely new to the city & has absolutely no knowledge about which doctor to consult. Thank you very much Docprime.'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-10 col-sm-4 text-center' },
                    _react2.default.createElement(
                        'div',
                        { className: 'cust-img-block d-flex justify-content-center align-items-center fw-500' },
                        _react2.default.createElement(
                            'span',
                            null,
                            'PS'
                        )
                    ),
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Purnima Singla'
                    ),
                    _react2.default.createElement(
                        'ul',
                        { className: 'd-flex justify-content-center align-item-center mb-2' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/grey-star.svg", alt: 'star' })
                        )
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'text-center mb-2' },
                        'I have booked 3 full body health packages for my family. After receiving the report, I got a call from a doctor who explained each and every element of the report to me and my family. He even prescribed some medicines to my mother and directed us to take some multivitamins. I truly loved the service.'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-10 col-sm-4 text-center' },
                    _react2.default.createElement(
                        'div',
                        { className: 'cust-img-block d-flex justify-content-center align-items-center fw-500' },
                        _react2.default.createElement(
                            'span',
                            null,
                            'PS'
                        )
                    ),
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Preet Sohal'
                    ),
                    _react2.default.createElement(
                        'ul',
                        { className: 'd-flex justify-content-center align-item-center mb-2' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        )
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'text-center mb-2' },
                        'I don\'t generally write reviews but Docprime really deserves 5 stars. I had been struggling to find a dermatologist in my area, did Google search, asked around from friends but didn\'t find one as per my expectations. This app showed me the one clinic which is not on Google search. I booked the appointment immediately. It\'s just a great experience.'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-10 col-sm-4 text-center' },
                    _react2.default.createElement(
                        'div',
                        { className: 'cust-img-block d-flex justify-content-center align-items-center fw-500' },
                        _react2.default.createElement(
                            'span',
                            null,
                            'SS'
                        )
                    ),
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Sonam Sinha '
                    ),
                    _react2.default.createElement(
                        'ul',
                        { className: 'd-flex justify-content-center align-item-center mb-2' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/star.svg", alt: 'star' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { height: '15', src: "/assets" + "/img/grey-star.svg", alt: 'star' })
                        )
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'text-center mb-2' },
                        'I booked preventive health packages for my parents living in Delhi. I am so glad that I can take care of their health by sitting in Bangalore. They collected the blood sample from my parent\'s home and sent the report on email which was reviewed by their Doctor. He prescribed some medicines to my parents and I got 23% off on medicine online delivery. Had an overall amazing experience!'
                    )
                )
            ),
            _react2.default.createElement(
                'a',
                { className: 'pkg-btnlft d-none', id: `static_review_blck_RightArrow_hsptl`, onClick: () => scroll('left') },
                _react2.default.createElement('img', { height: '12', src: "/assets" + "/img/color-chev.svg", alt: 'chev-left' })
            ),
            _react2.default.createElement(
                'a',
                { className: 'pkg-btnrgt', id: `static_review_blck_leftArrow_hsptl`, onClick: () => scroll('right') },
                _react2.default.createElement('img', { height: '12', src: "/assets" + "/img/color-chev.svg", alt: 'chev-right' })
            )
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

/***/ "./dev/js/containers/commons/Home.js":
/*!*******************************************!*\
  !*** ./dev/js/containers/commons/Home.js ***!
  \*******************************************/
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

var _Home = __webpack_require__(/*! ../../components/commons/Home */ "./dev/js/components/commons/Home/index.js");

var _Home2 = _interopRequireDefault(_Home);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Home extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            mergeState: false
        };
    }

    static loadData(store, match) {
        return new Promise((resolve, reject) => {
            Promise.all([store.dispatch((0, _index.loadOPDCommonCriteria)()), store.dispatch((0, _index.loadLabCommonCriterias)()), store.dispatch((0, _index.getNearbyHospitals)())]).then(() => {
                resolve({});
            }).catch(e => {
                reject();
            });
        });
    }

    componentDidMount() {
        //If user is logged in ,fetch user data
        if (_storage2.default.checkAuth()) {
            this.props.getUserProfile();
            this.props.getUpComingAppointment();
        }

        // this.props.fetchHeatlhTip()
        // this.props.fetchArticles()
        if (!this.props.common_tests.length || !this.props.common_package.length || !this.props.specializations.length || this.props.selectedLocation && this.props.selectedLocation.locality) {}
        let extraData = {
            selectedLocation: this.props.selectedLocation
        };
        this.props.getNearbyHospitals(extraData);
        // if(! (this.props.common_tests && this.props.common_tests.length) ){
        //     this.props.loadLabCommonCriterias()
        // }
        this.props.loadLabCommonCriterias();
        // this.props.loadOPDInsurance(this.props.selectedLocation)
        this.props.loadOPDCommonCriteria(this.props.selectedLocation);

        this.props.resetFilters();
        this.props.clearExtraTests();
        setTimeout(() => {
            this.setState({ mergeState: true });
        }, 100);
    }

    render() {
        return _react2.default.createElement(_Home2.default, _extends({}, this.props, this.state));
    }
}

Home.contextTypes = {
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
        profiles, selectedProfile, newNotification, notifications, articles, healthTips, device_info, offerList, upcoming_appointments, is_ipd_form_submitted, defaultProfile, is_any_user_buy_gold, user_detail_fetched
    } = state.USER;

    const {
        LOADED_SEARCH_CRITERIA_LAB,
        common_tests,
        common_package,
        selectedLocation,
        compare_packages
    } = state.SEARCH_CRITERIA_LABS;
    let filterCriteria_lab = state.SEARCH_CRITERIA_LABS.filterCriteria;

    const {
        LOADED_SEARCH_CRITERIA_OPD,
        specializations,
        ipd_procedures,
        top_hospitals,
        common_settings,
        package_categories,
        nearbyHospitals
    } = state.SEARCH_CRITERIA_OPD;

    let filterCriteria_opd = state.SEARCH_CRITERIA_OPD.filterCriteria;

    let {
        static_footer_data
    } = state.DOCTOR_SEARCH;

    return {
        profiles, selectedProfile, newNotification, notifications, articles, healthTips, common_tests: common_tests || [], specializations: specializations || [], selectedLocation, filterCriteria_lab, filterCriteria_opd, device_info, common_package: common_package || [], initialServerData, offerList, upcoming_appointments, compare_packages, ipd_procedures, top_hospitals, common_settings, is_ipd_form_submitted, package_categories, nearbyHospitals, static_footer_data, defaultProfile, is_any_user_buy_gold, user_detail_fetched
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadLabCommonCriterias: () => dispatch((0, _index.loadLabCommonCriterias)()),
        loadOPDCommonCriteria: city => dispatch((0, _index.loadOPDCommonCriteria)(city)),
        toggleOPDCriteria: (type, criteria, forceAdd, filters) => dispatch((0, _index.toggleOPDCriteria)(type, criteria, forceAdd, filters)),
        toggleDiagnosisCriteria: (type, criteria, forceAdd, filters) => dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria, forceAdd, filters)),
        getUserProfile: () => dispatch((0, _index.getUserProfile)()),
        fetchHeatlhTip: () => dispatch((0, _index.fetchHeatlhTip)()),
        fetchArticles: () => dispatch((0, _index.fetchArticles)()),
        resetFilters: () => dispatch((0, _index.resetFilters)()),
        clearExtraTests: () => dispatch((0, _index.clearExtraTests)()),
        getSpecialityFooterData: cb => dispatch((0, _index.getSpecialityFooterData)(cb)),
        selectSearchType: type => dispatch((0, _index.selectSearchType)(type)),
        getOfferList: (lat, long) => dispatch((0, _index.getOfferList)(lat, long)),
        clearAllTests: () => dispatch((0, _index.clearAllTests)()),
        setPackageId: (package_id, isHomePage) => dispatch((0, _index.setPackageId)(package_id, isHomePage)),
        getUpComingAppointment: () => dispatch((0, _index.getUpComingAppointment)()),
        resetPkgCompare: () => dispatch((0, _index.resetPkgCompare)()),
        toggleIPDCriteria: (criteria, forceAdd) => dispatch((0, _index.toggleIPDCriteria)(criteria, forceAdd)),
        loadOPDInsurance: city => dispatch((0, _index.loadOPDInsurance)(city)),
        mergeIpdCriteria: filterCriteria => dispatch((0, _index.mergeIpdCriteria)(filterCriteria)),
        getNearbyHospitals: (params, cb) => dispatch((0, _index.getNearbyHospitals)(params, cb)),
        clearVipSelectedPlan: () => dispatch((0, _index.clearVipSelectedPlan)()),
        NonIpdBookingLead: (data, cb) => dispatch((0, _index.NonIpdBookingLead)(data, cb))

    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);

/***/ }),

/***/ "./dev/js/helpers/criteo.js":
/*!**********************************!*\
  !*** ./dev/js/helpers/criteo.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

const CRITEO = {

	sendData(data) {
		try {

			if (window) {

				window.criteo_q = window.criteo_q || [];
				var deviceType = navigator ? /iPad/.test(navigator.userAgent) ? "t" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(navigator.userAgent) ? "m" : "d" : '';

				window.criteo_q.push({ 'event': "setAccount", account: 57439 }, // You should never update this line
				{ 'event': "setEmail", 'email': '' }, { 'event': "setSiteType", type: deviceType }, data);
			}
		} catch (e) {}
	}
};

exports.default = CRITEO;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvQ29ycG9yYXRlTGVhZFBvcHVwLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvSG9tZS9EZW1vV2lkZ2V0LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvSG9tZS9Hb2xkSG9tZVBhZ2VCYW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Ib21lL0hvbWVOZXdWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvSG9tZS9Ib21lUGFnZUNoYXRXaWRnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Ib21lL0hvbWVQYWdlUGFja2FnZUNhdGVnb3J5LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvSG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWVOZXdWaWV3L1N0YXRpY0hvbWVQYWdlQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvYm9va2luZ1N1bW1hcnkvQm9va2luZ0NvbmZpcm1hdGlvblBvcHVwLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL2NvbW1vbnMvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvaGVscGVycy9jcml0ZW8uanMiXSwibmFtZXMiOlsiQ29ycG9yYXRlTGVhZFBvcHVwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiaW5wdXRIYW5kbGVyIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImxlbmd0aCIsInNldFN0YXRlIiwic3VibWl0Iiwic3RhdGUiLCJjb21wYW55TmFtZSIsIlNuYWNrQmFyIiwic2hvdyIsInBvcyIsInRleHQiLCJlbWFpbCIsIm1hdGNoIiwicGhvbmVOdW1iZXIiLCJkYXRhIiwibm9lIiwicHVzaExlYWRzIiwicmVuZGVyIiwiY2FuY2VsT3ZlcmxheSIsIkFTU0VUU19CQVNFX1VSTCIsIm1hcmdpblJpZ2h0IiwiVG9wUHJvY2VkdXJlV2lkZ2V0cyIsIm5hdmlnYXRlVG8iLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInNlbGVjdGVkQ3JpdGVyaWEiLCJ0eXBlIiwiaWQiLCJndG1EYXRhIiwiR1RNIiwiZ2V0VXNlcklkIiwic2VuZEV2ZW50IiwidG9nZ2xlSVBEQ3JpdGVyaWEiLCJ1cmwiLCJoaXN0b3J5IiwicHVzaCIsInNjcm9sbCIsImVsbW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm91dGVyRGl2V2lkdGgiLCJvZmZzZXRXaWR0aCIsImNoaWxkRGl2V2lkdGgiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2FyZENvdW50IiwiY2hpbGRFbGVtZW50Q291bnQiLCJjYXJkV2lkdGgiLCJNYXRoIiwiY2VpbCIsImxlZnRTY3JvbGwiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsVmFsIiwiZmxvb3IiLCJjYXJkRW5kIiwibGVmdCIsImJlaGF2aW9yIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiYmluZCIsIkdvbGRIb21lUGFnZVZpZXciLCJQdXJlQ29tcG9uZW50IiwiY2xpY2tlZEdvbGRCYW5uZXIiLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJNYWluVmlldyIsImFuaW1hdGVWYWx1ZSIsIm9iaiIsInN0YXJ0IiwiZW5kIiwiZHVyYXRpb24iLCJ0ZXh0U3RhcnRpbmciLCJpbm5lckhUTUwiLCJwYXJzZUZsb2F0IiwicmFuZ2UiLCJtaW5UaW1lciIsInN0ZXBUaW1lIiwiYWJzIiwibWF4Iiwic3RhcnRUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJlbmRUaW1lIiwidGltZXIiLCJydW4iLCJub3ciLCJyZW1haW5pbmciLCJyb3VuZCIsInJlcGxhY2UiLCJjbGVhckludGVydmFsIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhZ2VZT2Zmc2V0Iiwic2V0SW50ZXJ2YWwiLCJzZWFyY2hMYWIiLCJ0ZXN0IiwidG9wUGFja2FnZXMiLCJzZXRQYWNrYWdlSWQiLCJ0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSIsInNldFRpbWVvdXQiLCJzZWFyY2hEb2N0b3IiLCJzcGVjaWFsaXR5IiwidG9nZ2xlT1BEQ3JpdGVyaWEiLCJnb1RvU2VhcmNoIiwic2VsZWN0U2VhcmNoVHlwZSIsIndoZXJlIiwic2VhcmNoSG9zcGl0YWxzIiwidG9wSG9zcGl0YWxzIiwicmVkaXJlY3RVcmwiLCJpc19pcGRfaG9zcGl0YWwiLCJzYmlCYW5uZXJDbGlja2VkIiwibmVhcmJ5SG9zcGl0YWxWaWV3QWxsQ2xpY2tlZCIsIm1lcmdlSXBkQ3JpdGVyaWEiLCJjb21tb25TZWxlY3RlZENyaXRlcmlhcyIsIm5leHRTZWxlY3RlZENyaXRlcmlhcyIsImFmdGVyVXNlckxvZ2luIiwiaXNfdXNlcl9pbnN1cmFuY2VfYWN0aXZlIiwidXNlcl9pbnN1cmFuY2Vfc3RhdHVzIiwiZGVmYXVsdFByb2ZpbGUiLCJwcm9maWxlcyIsImluc3VyYW5jZV9zdGF0dXMiLCJnZXRDb3Jwb3JhdGVMZWFkIiwib3BlbkNvcnBvcmF0ZUJsb2NrIiwicGFyc2VkIiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsInBhcmFtcyIsInV0bV9zb3VyY2UiLCJ1dG1fdGVybSIsInV0bV9tZWRpdW0iLCJ1dG1fY2FtcGFpZ24iLCJOb25JcGRCb29raW5nTGVhZCIsInRoZW4iLCJzaG93UG9wdXAiLCJjbGlja2VkT24iLCJzaG93X3BvcHVwIiwiY29tcG9uZW50RGlkTW91bnQiLCJzY3JvbGxUbyIsInN0YXRpY19mb290ZXJfZGF0YSIsImdldFNwZWNpYWxpdHlGb290ZXJEYXRhIiwic2VsZWN0ZWRMb2NhdGlvbiIsImxhdCIsImxvbmciLCJnZW9tZXRyeSIsImxuZyIsImdldE9mZmVyTGlzdCIsIm1WaWV3IiwicG9zaXRpb25ZIiwic3R5bGUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJjVmFsMSIsImNWYWwyIiwiQ1JJVEVPIiwic2VuZERhdGEiLCJnZXRBZ2UiLCJiaXJ0aGRheSIsImFnZURpZk1zIiwiYWdlRGF0ZSIsImdldFVUQ0Z1bGxZZWFyIiwiZ290VG9TaWdudXAiLCJnb3RUb0RvY3RvclNpZ251cCIsImlzTGFiIiwiZ2V0VG9wTGlzdCIsImxpc3QiLCJ0b3BMaXN0Iiwic2xpY2UiLCJvcmRlck1lZENsaWNrIiwic291cmNlIiwiY29udGludWVDbGljayIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm9wZW4iLCJDT05GSUciLCJQSEFSTUVBU1lfTkVXX09SREVSX0lGUkFNRV9VUkwiLCJQSEFSTUVBU1lfUFJFVl9PUkRFUl9JRlJBTUVfVVJMIiwiaGlkZVBvcHVwIiwiY2xvc2VMZWFkUG9wdXAiLCJ0b3BTcGVjaWFsaXphdGlvbnMiLCJzcGVjaWFsaXphdGlvbnMiLCJ0b3BUZXN0cyIsImNvbW1vbl90ZXN0cyIsImNvbW1vbl9wYWNrYWdlIiwiYXJ0aWNsZXMiLCJpc1NCSSIsIm1lcmdlU3RhdGUiLCJob3N0IiwiaW5jbHVkZXMiLCJzaG93UGFja2FnZVN0cmlwIiwiY29tcGFyZV9wYWNrYWdlcyIsImlzUGFja2FnZSIsImRlZmF1bHRVc2VyUHJvZmlsZSIsInNob3dHb2xkQmFubmVyIiwidXNlcl9kZXRhaWxfZmV0Y2hlZCIsIk9iamVjdCIsImtleXMiLCJpc19hbnlfdXNlcl9idXlfZ29sZCIsIlNUT1JBR0UiLCJjaGVja0F1dGgiLCJvZmZlckxpc3QiLCJmaWx0ZXIiLCJ4Iiwic2xpZGVyX2xvY2F0aW9uIiwid2lkdGgiLCJ0b3BfaG9zcGl0YWxzIiwibmVhcmJ5SG9zcGl0YWxzIiwiaG9zcGl0YWxzIiwibWFyZ2luTGVmdCIsIlRvcENoYXRXaWRnZXQiLCJ3aWRnZXRDbGljayIsImtub3dNb3JlIiwiY2xlYXJWaXBTZWxlY3RlZFBsYW4iLCJwYWRkaW5nIiwiYm9yZGVyQm90dG9tIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleCIsImZvbnRTaXplIiwiSG9tZVBhZ2VQYWNrYWdlQ2F0ZWdvcnkiLCJQa2dEYXRhIiwicGFja2FnZXMiLCJzZWxlY3RlZFBrZ0NvbXBhcmVJZHMiLCJoaXN0b3J5T2JqIiwiVmlld0FsbCIsInBhY2thZ2VfY2F0ZWdvcnlfaWRzIiwidG9wX2RhdGEiLCJtYXAiLCJpIiwic3ZnX2ljb24iLCJpY29uIiwiZGF0YVR5cGUiLCJjaGlsZHJlbiIsInNjcm9sbFdpZHRoIiwidHJhbnNmb3JtIiwiQm9va2luZ0NvbmZpcm1hdGlvblBvcHVwIiwiaXNfZ29sZCIsInByaWNlQ29uZmlybWF0aW9uUG9wdXAiLCJIb21lIiwibG9hZERhdGEiLCJzdG9yZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYWxsIiwiZGlzcGF0Y2giLCJjYXRjaCIsImdldFVzZXJQcm9maWxlIiwiZ2V0VXBDb21pbmdBcHBvaW50bWVudCIsImxvY2FsaXR5IiwiZXh0cmFEYXRhIiwiZ2V0TmVhcmJ5SG9zcGl0YWxzIiwibG9hZExhYkNvbW1vbkNyaXRlcmlhcyIsImxvYWRPUERDb21tb25Dcml0ZXJpYSIsInJlc2V0RmlsdGVycyIsImNsZWFyRXh0cmFUZXN0cyIsImNvbnRleHRUeXBlcyIsInJvdXRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsInBhc3NlZFByb3BzIiwiaW5pdGlhbFNlcnZlckRhdGEiLCJzdGF0aWNDb250ZXh0Iiwic2VsZWN0ZWRQcm9maWxlIiwibmV3Tm90aWZpY2F0aW9uIiwibm90aWZpY2F0aW9ucyIsImhlYWx0aFRpcHMiLCJkZXZpY2VfaW5mbyIsInVwY29taW5nX2FwcG9pbnRtZW50cyIsImlzX2lwZF9mb3JtX3N1Ym1pdHRlZCIsIlVTRVIiLCJMT0FERURfU0VBUkNIX0NSSVRFUklBX0xBQiIsIlNFQVJDSF9DUklURVJJQV9MQUJTIiwiZmlsdGVyQ3JpdGVyaWFfbGFiIiwiZmlsdGVyQ3JpdGVyaWEiLCJMT0FERURfU0VBUkNIX0NSSVRFUklBX09QRCIsImlwZF9wcm9jZWR1cmVzIiwiY29tbW9uX3NldHRpbmdzIiwicGFja2FnZV9jYXRlZ29yaWVzIiwiU0VBUkNIX0NSSVRFUklBX09QRCIsImZpbHRlckNyaXRlcmlhX29wZCIsIkRPQ1RPUl9TRUFSQ0giLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjaXR5IiwiY3JpdGVyaWEiLCJmb3JjZUFkZCIsImZpbHRlcnMiLCJmZXRjaEhlYXRsaFRpcCIsImZldGNoQXJ0aWNsZXMiLCJjYiIsImNsZWFyQWxsVGVzdHMiLCJwYWNrYWdlX2lkIiwiaXNIb21lUGFnZSIsInJlc2V0UGtnQ29tcGFyZSIsImxvYWRPUERJbnN1cmFuY2UiLCJjcml0ZW9fcSIsImRldmljZVR5cGUiLCJhY2NvdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQSxNQUFNQSxrQkFBTixTQUFpQ0MsZ0JBQU1DLFNBQXZDLENBQWlEOztBQUVoREMsZ0JBQVlDLEtBQVosRUFBa0I7QUFDakIsY0FBTUEsS0FBTjs7QUFEaUIsYUFZZkMsWUFaZSxHQVlDQyxDQUFELElBQU07QUFDcEIsZ0JBQUdBLEVBQUVDLE1BQUYsQ0FBU0MsSUFBVCxJQUFlLGFBQWxCLEVBQWlDO0FBQ2hDLG9CQUFHRixFQUFFQyxNQUFGLENBQVNFLEtBQVQsQ0FBZUMsTUFBZixJQUF3QixFQUEzQixFQUE4QjtBQUM3Qix5QkFBS0MsUUFBTCxDQUFjLEVBQUUsQ0FBQ0wsRUFBRUMsTUFBRixDQUFTQyxJQUFWLEdBQWlCRixFQUFFQyxNQUFGLENBQVNFLEtBQTVCLEVBQWQ7QUFDQTtBQUNELGFBSkQsTUFJTTtBQUNMLHFCQUFLRSxRQUFMLENBQWMsRUFBRSxDQUFDTCxFQUFFQyxNQUFGLENBQVNDLElBQVYsR0FBaUJGLEVBQUVDLE1BQUYsQ0FBU0UsS0FBNUIsRUFBZDtBQUNBO0FBQ0QsU0FwQmM7O0FBQUEsYUFzQmZHLE1BdEJlLEdBc0JOLE1BQUk7QUFDVCxn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LFdBQU8yTSxRQUFQLENBQWdCbFEsSUFBaEIsQ0FBcUIsRUFBRSxTQUFTLFlBQVgsRUFBeUJvUSxTQUFTLEtBQWxDLEVBQXJCLEVBQStEO0FBQy9ELE1BQUMsU0FBUyxVQUFWLEVBQXNCLFNBQVMsRUFBL0IsRUFEQSxFQUVBLEVBQUUsU0FBUyxhQUFYLEVBQTBCN1EsTUFBTTRRLFVBQWhDLEVBRkEsRUFHQXhSLElBSEE7QUFLQTtBQUVELEdBZEQsQ0FjQyxPQUFNaEIsQ0FBTixFQUFRLENBRVI7QUFDRDtBQXBCYSxDQUFmOztrQkF1QmUySixNIiwiZmlsZSI6IjQ4LnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tbW9uUG9wdXAgZnJvbSAnLi4vY29tbW9uRml4ZWRQb3B1cC9jb21tb25GaXhlZFBvcHVwLmpzJ1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5cbi8vIE1ldGhvZCB0byBhZGQgYmVmb3JlIHVzZSxcbi8vIDEpIGNhbmNlbE92ZXJsYXkoKVxuLy8gMikgcHVzaExlYWQoKVxuXG5cbmNsYXNzIENvcnBvcmF0ZUxlYWRQb3B1cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRjb21wYW55TmFtZTogJycsXG5cdFx0XHRub2U6JycsXG5cdFx0XHRlbWFpbDonJyxcblx0XHRcdHBob25lTnVtYmVyOicnLFxuXHRcdFx0bmFtZTonJ1xuXHRcdH1cblx0fVxuXG5cdFxuICAgIGlucHV0SGFuZGxlciA9IChlKT0+IHtcbiAgICBcdGlmKGUudGFyZ2V0Lm5hbWU9PVwicGhvbmVOdW1iZXJcIikge1xuICAgIFx0XHRpZihlLnRhcmdldC52YWx1ZS5sZW5ndGggPD0xMCl7XG4gICAgXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgXHRcdH1cbiAgICBcdH1lbHNlIHtcbiAgICBcdFx0dGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSlcbiAgICBcdH1cbiAgICB9XG5cbiAgICBzdWJtaXQgPSAoKT0+e1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuY29tcGFueU5hbWUpIHtcbiAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgRW50ZXIgWW91ciBDb21wYW55IE5hbWVcIiB9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmVtYWlsKSB7XG4gICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIEVudGVyIEVtYWlsIElkXCIgfSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLmVtYWlsLm1hdGNoKC9cXFMrQFxcUytcXC5cXFMrLykpe1xuICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBFbnRlciBWYWxpZCBFbWFpbFwiIH0pXG4gICAgICAgICAgICByZXR1cm4gICBcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUubmFtZSkge1xuICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBFbnRlciBZb3VyIE5hbWVcIiB9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnBob25lTnVtYmVyKSB7XG4gICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIEVudGVyIFlvdXIgUGhvbmUgTnVtYmVyXCIgfSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucGhvbmVOdW1iZXIubGVuZ3RoPDEwKSB7XG4gICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIEVudGVyIFZhbGlkIFBob25lIE51bWJlclwiIH0pXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ2xlYWRfc291cmNlJzogJ0NvcnBvcmF0ZUdvbGQnLFxuICAgICAgICAgICAgJ3NvdXJjZSc6ICcnLFxuICAgICAgICAgICAgJ3Bob25lX251bWJlcic6IHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsXG4gICAgICAgICAgICAnY29tcGFueV9uYW1lJzogdGhpcy5zdGF0ZS5jb21wYW55TmFtZSxcbiAgICAgICAgICAgICdjb250YWN0X3BlcnNvbl9uYW1lJzogdGhpcy5zdGF0ZS5uYW1lLFxuICAgICAgICAgICAgJ2VtYWlsJzogdGhpcy5zdGF0ZS5lbWFpbCxcbiAgICAgICAgICAgICdudW1iZXJfb2ZfZW1wbG95ZWVzJzogdGhpcy5zdGF0ZS5ub2UsXG4gICAgICAgICAgICAnbGVhZF90eXBlJzogJ0NPUlBPUkFURUdPTEQnXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5wdXNoTGVhZHMoZGF0YSk7XG4gICAgfVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybihcblx0XHRcdDxDb21tb25Qb3B1cCBjYW5jZWxPdmVybGF5PXt0aGlzLnByb3BzLmNhbmNlbE92ZXJsYXl9IGNsYXNzTmFtZT1cInRlc3QtY2xhc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvcnBvcmF0ZS1kZXRhaWwtc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1vZGFsLWNsb3NlLWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Nsb3NlLWJsYWNrLnN2Z1wifSBhbHQ9XCJjbG9zZVwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuY2FuY2VsT3ZlcmxheX0vPlxuICAgICAgICAgICAgICAgICAgICA8aDM+RHJvcCB5b3VyIGRldGFpbHM8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aDY+V2Ugd2lsbCByZWFjaCB5b3UgZm9yIGZ1cnRoZXIgYXNzaXN0YW5jZTwvaDY+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIiogQ29tcGFueSBOYW1lXCIgc3R5bGU9e3ttYXJnaW5SaWdodDogMTJ9fSBuYW1lPVwiY29tcGFueU5hbWVcIiB2YWx1ZT17dGhpcy5zdGF0ZS5jb21wYW55TmFtZX0gb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIk5vIG9mIGVtcGxveWVlc1wiIG5hbWU9XCJub2VcIiB2YWx1ZT17dGhpcy5zdGF0ZS5ub2V9IG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIiogRW1haWwgQWRkcmVzc1wiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfSBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCIqIENvbnRhY3QgUGVyc29uIE5hbWVcIiBuYW1lPVwibmFtZVwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG1heD1cIjEwXCIgcGxhY2Vob2xkZXI9XCIqIENvbnRhY3QgTnVtYmVyXCIgbmFtZT1cInBob25lTnVtYmVyXCIgdmFsdWU9e3RoaXMuc3RhdGUucGhvbmVOdW1iZXJ9IG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaXBkLWlucC1zYm10IGZsb2F0LXJpZ2h0XCIgb25DbGljaz17dGhpcy5zdWJtaXR9PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db21tb25Qb3B1cD5cblx0XHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3Jwb3JhdGVMZWFkUG9wdXA7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcblxuY2xhc3MgVG9wUHJvY2VkdXJlV2lkZ2V0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBuYXZpZ2F0ZVRvKGRhdGEsIGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgbGV0IHNlbGVjdGVkQ3JpdGVyaWEgPSB7XG4gICAgICAgICAgICB0eXBlOiAnaXBkJyxcbiAgICAgICAgICAgIGlkOiBkYXRhLmlkLFxuICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSG9tZVdpZGdldFByb2NlZHVyZUNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdob21lLXdpZGdldC1wcm9jZWR1cmUtY2xpY2tlZCcsICdzZWxlY3RlZCc6IGRhdGEubmFtZSB8fCAnJywgJ3NlbGVjdGVkSWQnOiBkYXRhLmlkIHx8ICcnXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bURhdGEgfSlcblxuICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZUlQRENyaXRlcmlhKHNlbGVjdGVkQ3JpdGVyaWEsIHRydWUpXG5cbiAgICAgICAgaWYgKGRhdGEudXJsKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgLyR7ZGF0YS51cmx9P3Nob3dQb3B1cD10cnVlYClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvaXBkSW5mbz9pcGRfaWQ9JHtkYXRhLmlkfSZzaG93UG9wdXA9dHJ1ZWApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzY3JvbGwodHlwZSkge1xuICAgICAgICB2YXIgZWxtbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvcF9pcGRcIilcbiAgICAgICAgbGV0IG91dGVyRGl2V2lkdGggPSBlbG1udC5vZmZzZXRXaWR0aFxuICAgICAgICBsZXQgY2hpbGREaXZXaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvcF9pcGRfbGlzdCcpWzBdLm9mZnNldFdpZHRoXG4gICAgICAgIGxldCBjYXJkQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0b3BfaXBkX2xpc3QnKVswXS5jaGlsZEVsZW1lbnRDb3VudFxuICAgICAgICBsZXQgY2FyZFdpZHRoID0gTWF0aC5jZWlsKGNoaWxkRGl2V2lkdGggLyBjYXJkQ291bnQpXG5cbiAgICAgICAgbGV0IGxlZnRTY3JvbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvcF9pcGRcIikuc2Nyb2xsTGVmdFxuICAgICAgICBsZXQgc2Nyb2xsVmFsID0gTWF0aC5mbG9vcihvdXRlckRpdldpZHRoIC8gY2FyZFdpZHRoKSAqIGNhcmRXaWR0aFxuICAgICAgICBsZXQgY2FyZEVuZCA9IGNhcmRDb3VudCAqIGNhcmRXaWR0aFxuXG4gICAgICAgIGlmICh0eXBlID09ICdyaWdodCcpIHtcbiAgICAgICAgICAgIGVsbW50LnNjcm9sbCh7IGxlZnQ6IGxlZnRTY3JvbGwgKyBzY3JvbGxWYWwsIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgICAgICAgaWYgKGNhcmRFbmQgPD0gbGVmdFNjcm9sbCArIHNjcm9sbFZhbCArIG91dGVyRGl2V2lkdGgpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdEFycm93X2lwZCcpLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdSaWdodEFycm93X2lwZCcpLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsbW50LnNjcm9sbCh7IGxlZnQ6IGxlZnRTY3JvbGwgLSBzY3JvbGxWYWwsIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgICAgICAgaWYgKGxlZnRTY3JvbGwgLSBzY3JvbGxWYWwgPD0gMCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdSaWdodEFycm93X2lwZCcpLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0QXJyb3dfaXBkJykuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBha2ctc2xpZGVyLWNvbnRhaW5lciBtdC0xMCBtYi0xMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnU2xpZGVySGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDU+SGVhbHRoIFBhY2thZ2UgQ2F0ZWdvcmllczwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlZpZXcgQWxsPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnU2xpZGVyQ29udGFpbmVyXCIgaWQ9XCJ0b3BfaXBkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwa2dDYXJkc0xpc3QgZC1pbmxpbmUtZmxleCBzdWItd2QtY2FyZHMgdG9wX2lwZF9saXN0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBrZ2N1c3RDYXJkcyBoZWFsdGgtcGtnLWNhcmQtd2lkdGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ2NhcmRJbWdDb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL21lZGlhL2lwZF9wcm9jZWR1cmUvaW1hZ2VzL2RlbGl2ZXJ5LTAxLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGtndHN0TmFtZSBwcmNkLWhlaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGdWxsIEJvZHkgQ2hlY2sgVXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicGtnY3VzdENhcmRzIGhlYWx0aC1wa2ctY2FyZC13aWR0aFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnY2FyZEltZ0NvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vbWVkaWEvaXBkX3Byb2NlZHVyZS9pbWFnZXMvZGVsaXZlcnktMDEucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwa2d0c3ROYW1lIHByY2QtaGVpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZ1bGwgQm9keSBDaGVjayBVcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwa2djdXN0Q2FyZHMgaGVhbHRoLXBrZy1jYXJkLXdpZHRoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2djYXJkSW1nQ29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9tZWRpYS9pcGRfcHJvY2VkdXJlL2ltYWdlcy9kZWxpdmVyeS0wMS5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBrZ3RzdE5hbWUgcHJjZC1oZWlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRnVsbCBCb2R5IENoZWNrIFVwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBrZ2N1c3RDYXJkcyBoZWFsdGgtcGtnLWNhcmQtd2lkdGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ2NhcmRJbWdDb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL21lZGlhL2lwZF9wcm9jZWR1cmUvaW1hZ2VzL2RlbGl2ZXJ5LTAxLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGtndHN0TmFtZSBwcmNkLWhlaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGdWxsIEJvZHkgQ2hlY2sgVXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicGtnY3VzdENhcmRzIGhlYWx0aC1wa2ctY2FyZC13aWR0aFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnY2FyZEltZ0NvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vbWVkaWEvaXBkX3Byb2NlZHVyZS9pbWFnZXMvZGVsaXZlcnktMDEucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwa2d0c3ROYW1lIHByY2QtaGVpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZ1bGwgQm9keSBDaGVjayBVcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwa2djdXN0Q2FyZHMgaGVhbHRoLXBrZy1jYXJkLXdpZHRoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2djYXJkSW1nQ29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9tZWRpYS9pcGRfcHJvY2VkdXJlL2ltYWdlcy9kZWxpdmVyeS0wMS5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBrZ3RzdE5hbWUgcHJjZC1oZWlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRnVsbCBCb2R5IENoZWNrIFVwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBrZ2N1c3RDYXJkcyBoZWFsdGgtcGtnLWNhcmQtd2lkdGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ2NhcmRJbWdDb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL21lZGlhL2lwZF9wcm9jZWR1cmUvaW1hZ2VzL2RlbGl2ZXJ5LTAxLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGtndHN0TmFtZSBwcmNkLWhlaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGdWxsIEJvZHkgQ2hlY2sgVXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnbGZ0Umh0YnRuY29udFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZy1idG5sZnQgZC1ub25lXCIgaWQ9XCJSaWdodEFycm93X2lwZFwiIG9uQ2xpY2s9e3RoaXMuc2Nyb2xsLmJpbmQodGhpcywgJ2xlZnQnKX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2ctYnRucmd0XCIgaWQ9XCJsZWZ0QXJyb3dfaXBkXCIgb25DbGljaz17dGhpcy5zY3JvbGwuYmluZCh0aGlzLCAncmlnaHQnKX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb3BQcm9jZWR1cmVXaWRnZXRzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgR29sZEhvbWVQYWdlVmlldyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1iYW5uZXItY29udGFpbmVyIGQtbGctbm9uZSBkLW5vbmUgbWItMTBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvbGQtYmFubmVyLWNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbGQtaG9tZS1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Eb2NwcmltZSA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvZ29sZC1sZy5wbmcnfSAvPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2xkLWhvbWUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlRoZSBIZWFsdGhjYXJlIE1lbWJlcnNoaXAgPGJyIC8+WW91IENhbuKAmXQgRG8gV2l0aG91dDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5TYXZlIE1vcmUgVGhhbiDigrk2LDAwMC95ciBXaXRoIFNwZWNpYWwgUHJpY2VzIG9uIE9QRCBDb25zdWx0YXRpb25zLCBMYWIgVGVzdHMgYW5kIE1lZGljaW5lczwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2xkLWhvbWUtaWNvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdsZC1pY28tY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9kaWNpY29uMS5zdmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkV4Y2x1c2l2ZSBQcmljZXM8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPbiBEb2N0b3JzICYgTGFic1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbGQtaWNvLWNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvZGljaWNvbjIuc3ZnJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GbGF0IDIzJSBPRkYgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb24gTWVkaWNpbmVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdsZC1pY28tY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9kaWNpY29uMy5zdmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlVubGltaXRlZCBUZWxlPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uc3VsdGF0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb2xkLWhvbWUtcHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlN0YXJ0aW5nIGF0IGp1c3QgPHN0cm9uZz7igrkxOTk8L3N0cm9uZz4veXIgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLmNsaWNrZWRHb2xkQmFubmVyfT5WaWV3IFBsYW5zPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR29sZEhvbWVQYWdlVmlldztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBEZXNrdG9wUHJvZmlsZUhlYWRlciBmcm9tICcuLi9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXInXG5pbXBvcnQgQ2hhdFBhbmVsIGZyb20gJy4uL0NoYXRQYW5lbCdcbmltcG9ydCBIZWxtZXRUYWdzIGZyb20gJy4uL0hlbG1ldFRhZ3MnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi8uLi9jb25maWcnXG5pbXBvcnQgQWNjb3JkaWFuIGZyb20gJy4vQWNjb3JkaWFuJ1xuaW1wb3J0IEZpeGVkTW9iaWxlRm9vdGVyIGZyb20gJy4vRml4ZWRNb2JpbGVGb290ZXInXG5pbXBvcnQgQmFubmVyQ2Fyb3VzZWwgZnJvbSAnLi9iYW5uZXJDYXJvdXNlbCc7XG5pbXBvcnQgVXBDb21pbmdBcHBvaW50bWVudFZpZXcgZnJvbSAnLi91cENvbWluZ0FwcG9pbnRtZW50LmpzJ1xuaW1wb3J0IFBhY2thZ2VDb21wYXJlU3RyaXAgZnJvbSAnLi4vLi4vZGlhZ25vc2lzL3NlYXJjaFBhY2thZ2VzL3BhY2thZ2VDb21wYXJlL3BhY2thZ2VDb21wYXJlU3RyaXAuanMnXG5pbXBvcnQgSG9tZVBhZ2VQYWNrYWdlV2lkZ2V0IGZyb20gJy4vSG9tZVBhZ2VQYWNrYWdlV2lkZ2V0LmpzJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcbmltcG9ydCBDUklURU8gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9jcml0ZW8uanMnXG5pbXBvcnQgSG9tZVBhZ2VUb3BIb3NwaXRhbHMgZnJvbSAnLi9Ib21lUGFnZVRvcEhvc3BpdGFscy5qcydcbmltcG9ydCBIb21lUGFnZVRvcFByb2NlZHVyZXMgZnJvbSAnLi9Ib21lUGFnZVByb2NlZHVyZVdpZGdldHMuanMnXG5pbXBvcnQgSG9tZVBhZ2VQYWNrYWdlQ2F0ZWdvcnkgZnJvbSAnLi9Ib21lUGFnZVBhY2thZ2VDYXRlZ29yeS5qcydcbmltcG9ydCBUb3BDaGF0V2lkZ2V0IGZyb20gJy4vSG9tZVBhZ2VDaGF0V2lkZ2V0JztcbmltcG9ydCBEZW1vV2lkZ2V0IGZyb20gJy4vRGVtb1dpZGdldC5qcydcbmltcG9ydCBCb29raW5nQ29uZmlybWF0aW9uUG9wdXAgZnJvbSAnLi4vLi4vZGlhZ25vc2lzL2Jvb2tpbmdTdW1tYXJ5L0Jvb2tpbmdDb25maXJtYXRpb25Qb3B1cCc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlcic7XG5pbXBvcnQgVmlwTG9naW5Qb3B1cCBmcm9tICcuLi8uLi92aXBDbHViL3ZpcENsdWJQb3B1cC5qcydcbmltcG9ydCBQcmVzY3JpcHRpb25VcGxvYWQgZnJvbSAnLi4vLi4vLi4vY29udGFpbmVycy9jb21tb25zL1ByZXNjcmlwdGlvblVwbG9hZC5qcydcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuaW1wb3J0IEhvbWVQYWdlV2lkZ2V0IGZyb20gJy4uL0hvbWVOZXdWaWV3L0hvbWVQYWdlV2lkZ2V0LmpzJ1xuaW1wb3J0IENvcnBvcmF0ZUxlYWRQb3B1cCBmcm9tICcuL0NvcnBvcmF0ZUxlYWRQb3B1cC5qcydcbmltcG9ydCBTdGF0aWNDb250ZW50IGZyb20gJy4uL0hvbWVOZXdWaWV3L1N0YXRpY0hvbWVQYWdlQ29udGVudC5qcydcblxuaW1wb3J0IEdvbGRIb21lUGFnZUJhbm5lciBmcm9tICcuL0dvbGRIb21lUGFnZUJhbm5lci5qcydcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcblxuXG5cbmNsYXNzIE1haW5WaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgLy8gbGV0IGZvb3RlckRhdGEgPSBudWxsXG4gICAgICAgIC8vIGlmICh0aGlzLnByb3BzLmluaXRpYWxTZXJ2ZXJEYXRhKSB7XG4gICAgICAgIC8vICAgICBmb290ZXJEYXRhID0gdGhpcy5wcm9wcy5pbml0aWFsU2VydmVyRGF0YS5mb290ZXJEYXRhXG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIC8vIHNwZWNpYWxpdHlGb290ZXJEYXRhOiBmb290ZXJEYXRhLFxuICAgICAgICAgICAgc2hvd1BvcHVwOiBmYWxzZSxcbiAgICAgICAgICAgIGNsaWNrZWRPbjogJycsXG4gICAgICAgICAgICBzaG93X3BvcHVwOmZhbHNlLFxuICAgICAgICAgICAgaXNfdXNlcl9pbnN1cmFuY2VfYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgIG9wZW5Db3Jwb3JhdGVCbG9jazogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB1c2VyX2luc3VyYW5jZV9zdGF0dXMgPSBudWxsXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlICYmIHRoaXMucHJvcHMucHJvZmlsZXMgJiYgdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXSkge1xuICAgICAgICAgICAgdXNlcl9pbnN1cmFuY2Vfc3RhdHVzID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXS5pbnN1cmFuY2Vfc3RhdHVzXG4gICAgICAgIH1cbiAgICAgICAgdXNlcl9pbnN1cmFuY2Vfc3RhdHVzID0gKHVzZXJfaW5zdXJhbmNlX3N0YXR1cz09MSB8fCB1c2VyX2luc3VyYW5jZV9zdGF0dXM9PTUgfHwgdXNlcl9pbnN1cmFuY2Vfc3RhdHVzPT00IHx8IHVzZXJfaW5zdXJhbmNlX3N0YXR1cz09NylcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNfdXNlcl9pbnN1cmFuY2VfYWN0aXZlOiB1c2VyX2luc3VyYW5jZV9zdGF0dXN9KVxuXG4gICAgICAgIC8vIHRoaXMucHJvcHMuZ2V0U3BlY2lhbGl0eUZvb3RlckRhdGEoKGNiKSA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHsgc3BlY2lhbGl0eUZvb3RlckRhdGE6IGNiIH0pO1xuICAgICAgICAvLyB9KTtcbiAgICAgICAgaWYoIXRoaXMucHJvcHMuc3RhdGljX2Zvb3Rlcl9kYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldFNwZWNpYWxpdHlGb290ZXJEYXRhKCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2VsZWN0ZWRMb2NhdGlvbiA9ICcnXG4gICAgICAgIGxldCBsYXQgPSAyOC42NDQ4MDBcbiAgICAgICAgbGV0IGxvbmcgPSA3Ny4yMTY3MjFcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbikge1xuICAgICAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbiA9IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbjtcbiAgICAgICAgICAgIGxhdCA9IHNlbGVjdGVkTG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubGF0XG4gICAgICAgICAgICBsb25nID0gc2VsZWN0ZWRMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sbmdcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGF0ID09PSAnZnVuY3Rpb24nKSBsYXQgPSBsYXQoKVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsb25nID09PSAnZnVuY3Rpb24nKSBsb25nID0gbG9uZygpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb3BzLmdldE9mZmVyTGlzdChsYXQsIGxvbmcpO1xuXG4gICAgICAgIGxldCBkYXRhID0geyAnZXZlbnQnOiBcInZpZXdIb21lXCIgfVxuICAgICAgICBcbiAgICAgICAgLy9iYWNrZ3JvdW5kIGNpcmNsZSBhbmltYXRpb25cbiAgICAgICAgaWYod2luZG93KXtcbiAgICAgICAgICAgIGNvbnN0IG1WaWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5WaWV3Jyk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgICgpID0+IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL2JhY2tncm91bmQgY2lyY2xlIGFuaW1hdGlvbVxuICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvblkgPSB3aW5kb3cucGFnZVlPZmZzZXQvMjtcbiAgICAgICAgICAgICAgICBtVmlldy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSBgMCAtJHtwb3NpdGlvbll9cHhgO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAvL2JhY2tncm91bmQgY2lyY2xlIGFuaW1hdGlvblxuXG4gICAgICAgIC8vY291bnQgYW5pbWF0aW9uXG4gICAgICAgIFxuICAgICAgICBjb25zdCBjVmFsMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudE51bScpO1xuICAgICAgICBjb25zdCBjVmFsMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudE51bTInKTtcbiAgICAgICAgdGhpcy5hbmltYXRlVmFsdWUoY1ZhbDEpO1xuICAgICAgICB0aGlzLmFuaW1hdGVWYWx1ZShjVmFsMik7IFxuICAgICAgICAvL2NvdW50IGFuaW1hdGlvblxuICAgICAgICBDUklURU8uc2VuZERhdGEoZGF0YSlcbiAgICB9XG5cbiAgICBhbmltYXRlVmFsdWUgPSAob2JqKSA9PiB7XG4gICAgICAgIGxldCBzdGFydCA9IDI1MDAwO1xuICAgICAgICBsZXQgZW5kID0gbnVsbDtcbiAgICAgICAgbGV0IGR1cmF0aW9uID0gMzAwMDtcbiAgICAgICAgaWYgKG9iaikge1xuICAgICAgICAgICAgLy8gc2F2ZSBzdGFydGluZyB0ZXh0IGZvciBsYXRlciAoYW5kIGFzIGEgZmFsbGJhY2sgdGV4dCBpZiBKUyBub3QgcnVubmluZyBhbmQvb3IgZ29vZ2xlKVxuICAgICAgICAgICAgbGV0IHRleHRTdGFydGluZyA9IG9iai5pbm5lckhUTUw7XG4gICAgXG4gICAgICAgICAgICAvLyByZW1vdmUgbm9uLW51bWVyaWMgZnJvbSBzdGFydGluZyB0ZXh0IGlmIG5vdCBzcGVjaWZpZWRcbiAgICAgICAgICAgIC8vZW5kID0gZW5kIHx8IHBhcnNlSW50KHRleHRTdGFydGluZy5yZXBsYWNlKC9cXEQvZywgXCJcIikpO1xuICAgICAgICAgICAgZW5kID0gZW5kIHx8IHBhcnNlRmxvYXQodGV4dFN0YXJ0aW5nKTtcblxuICAgICAgICAgICAgbGV0IHJhbmdlID0gZW5kIC0gc3RhcnQ7XG4gICAgXG4gICAgICAgICAgICAvLyBubyB0aW1lciBzaG9ydGVyIHRoYW4gNTBtcyAobm90IHJlYWxseSB2aXNpYmxlIGFueSB3YXkpXG4gICAgICAgICAgICBsZXQgbWluVGltZXIgPSAxMDA7XG4gICAgXG4gICAgICAgICAgICAvLyBjYWxjIHN0ZXAgdGltZSB0byBzaG93IGFsbCBpbnRlcmVkaWF0ZSB2YWx1ZXNcbiAgICAgICAgICAgIGxldCBzdGVwVGltZSA9IE1hdGguYWJzKE1hdGguZmxvb3IoZHVyYXRpb24gLyByYW5nZSkpO1xuICAgIFxuICAgICAgICAgICAgLy8gbmV2ZXIgZ28gYmVsb3cgbWluVGltZXJcbiAgICAgICAgICAgIHN0ZXBUaW1lID0gTWF0aC5tYXgoc3RlcFRpbWUsIG1pblRpbWVyKTtcbiAgICBcbiAgICAgICAgICAgIC8vIGdldCBjdXJyZW50IHRpbWUgYW5kIGNhbGN1bGF0ZSBkZXNpcmVkIGVuZCB0aW1lXG4gICAgICAgICAgICBsZXQgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBsZXQgZW5kVGltZSA9IHN0YXJ0VGltZSArIGR1cmF0aW9uO1xuICAgICAgICAgICAgbGV0IHRpbWVyO1xuICAgICAgICAgICAgLy9jb25zdCBwb3NZID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICAgICAgY29uc3QgcnVuID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVtYWluaW5nID0gTWF0aC5tYXgoKGVuZFRpbWUgLSBub3cpIC8gZHVyYXRpb24sIDApO1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IE1hdGgucm91bmQoZW5kIC0gKHJlbWFpbmluZyAqIHJhbmdlKSk7XG4gICAgICAgICAgICAgICAgLy8gcmVwbGFjZSBudW1lcmljIGRpZ2l0cyBvbmx5IGluIHRoZSBvcmlnaW5hbCBzdHJpbmdcbiAgICAgICAgICAgICAgICBvYmouaW5uZXJIVE1MID0gdGV4dFN0YXJ0aW5nLnJlcGxhY2UoLyhbMC05XSspL2csIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKT0+e1xuICAgICAgICAgICAgICAgIGlmICggd2luZG93LnBhZ2VZT2Zmc2V0ID49IDEwMDApe1xuICAgICAgICAgICAgICAgICAgICB0aW1lciA9IHNldEludGVydmFsKHJ1biwgc3RlcFRpbWUpO1xuICAgICAgICAgICAgICAgICAgICBydW4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBuYXZpZ2F0ZVRvKHdoZXJlLCB0eXBlLCBkYXRhLCBlKSB7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RTZWFyY2hUeXBlKHR5cGUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdoZXJlID09ICcvY2hhdCcpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHdoZXJlLCBkYXRhKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2god2hlcmUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBZ2UoYmlydGhkYXkpIHtcbiAgICAgICAgYmlydGhkYXkgPSBuZXcgRGF0ZShiaXJ0aGRheSlcbiAgICAgICAgdmFyIGFnZURpZk1zID0gRGF0ZS5ub3coKSAtIGJpcnRoZGF5LmdldFRpbWUoKTtcbiAgICAgICAgdmFyIGFnZURhdGUgPSBuZXcgRGF0ZShhZ2VEaWZNcyk7IC8vIG1pbGlzZWNvbmRzIGZyb20gZXBvY2hcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKGFnZURhdGUuZ2V0VVRDRnVsbFllYXIoKSAtIDE5NzApO1xuICAgIH1cblxuICAgIHNlYXJjaExhYiA9ICh0ZXN0ICkgPT57XG4gICAgICAgIGxldCBkYXRhXG4gICAgICAgIGlmICh0ZXN0LnRvcFBhY2thZ2VzKSB7XG4gICAgICAgICAgICB0ZXN0LnR5cGUgPSAncGFja2FnZSdcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0UGFja2FnZUlkKHRlc3QuaWQsIHRydWUpXG4gICAgICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnU2VsZWN0ZWRIZWFsdGhQYWNrYWdlJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnc2VsZWN0ZWQtaGVhbHRoLXBhY2thZ2UnLCAnc2VsZWN0ZWQnOiB0ZXN0Lm5hbWUgfHwgJycsICdzZWxlY3RlZElkJzogdGVzdC5pZCB8fCAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGVzdC50eXBlID0gJ3Rlc3QnXG4gICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKCd0ZXN0JywgdGVzdCwgdHJ1ZSlcbiAgICAgICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdTZWxlY3RlZEJvb2tUZXN0JywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnc2VsZWN0ZWQtYm9vay10ZXN0JywgJ3NlbGVjdGVkJzogdGVzdC5uYW1lIHx8ICcnLCAnc2VsZWN0ZWRJZCc6IHRlc3QuaWQgfHwgJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgaWYgKHRlc3QudG9wUGFja2FnZXMpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvc2VhcmNocGFja2FnZXMnKVxuICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9sYWIvc2VhcmNocmVzdWx0cycpXG4gICAgICAgICAgICB9LCAxMDApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWFyY2hEb2N0b3IgPSAoc3BlY2lhbGl0eSkgPT57XG4gICAgICAgIGlmIChzcGVjaWFsaXR5LnVybCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC8ke3NwZWNpYWxpdHkudXJsfWApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzcGVjaWFsaXR5LnR5cGUgPSAnc3BlY2lhbGl0eSdcbiAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlT1BEQ3JpdGVyaWEoJ3NwZWNpYWxpdHknLCBzcGVjaWFsaXR5LCB0cnVlKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9vcGQvc2VhcmNocmVzdWx0cycpXG4gICAgICAgICAgICB9LCAxMDApXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1NlbGVjdGVkRG9jdG9yU3BlY2lhbGl6YXRpb25zJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnc2VsZWN0ZWQtZG9jdG9yLXNwZWNpYWxpemF0aW9ucycsICdzZWxlY3RlZCc6IHNwZWNpYWxpdHkubmFtZSB8fCAnJywgJ3NlbGVjdGVkSWQnOiBzcGVjaWFsaXR5LmlkIHx8ICcnXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICB9XG5cbiAgICBnb1RvU2VhcmNoID0gKGRhdGEpPT57XG4gICAgICAgIGlmIChkYXRhLnR5cGUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0U2VhcmNoVHlwZShkYXRhLnR5cGUpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goZGF0YS53aGVyZSlcbiAgICB9XG5cbiAgICBzZWFyY2hIb3NwaXRhbHMgPSAoZGF0YSkgPT4ge1xuICAgICAgICBcbiAgICAgICAgbGV0IGd0bURhdGEgPSB7fVxuICAgICAgICBpZihkYXRhLnRvcEhvc3BpdGFscykge1xuICAgICAgICAgICAgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSG9tZVdpZGdldEhvc3BpdGFsQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2hvbWUtd2lkZ2V0LWhvc3BpdGFsLWNsaWNrZWQnLCAnc2VsZWN0ZWQnOiAnJywgJ3NlbGVjdGVkSWQnOiBkYXRhLmlkIHx8ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSG9tZVdpZGdldE5lYXJieUhvc3BpdGFsQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2hvbWUtd2lkZ2V0LW5lYXJieS1ob3NwaXRhbC1jbGlja2VkJywgJ3NlbGVjdGVkJzogJycsICdzZWxlY3RlZElkJzogZGF0YS5pZCB8fCAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuXG4gICAgICAgIGxldCByZWRpcmVjdFVybCA9ICcnXG5cbiAgICAgICAgaWYoZGF0YS51cmwpIHtcbiAgICAgICAgICAgIHJlZGlyZWN0VXJsID0gYC8ke2RhdGEudXJsfWBcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgcmVkaXJlY3RVcmwgPSBgL2lwZC9ob3NwaXRhbC8ke2RhdGEuaWR9YFxuICAgICAgICB9XG5cbiAgICAgICAgaWYoZGF0YS5pc19pcGRfaG9zcGl0YWwpIHtcbiAgICAgICAgICAgIHJlZGlyZWN0VXJsKz0gYD9zaG93UG9wdXA9dHJ1ZWBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChyZWRpcmVjdFVybClcbiAgICB9XG5cbiAgICBnb3RUb1NpZ251cCgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0hvbWVwYWdlQmFubmVyU2lnbnVwQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2hvbWVwYWdlLWJhbm5lci1zaWdudXAtY2xpY2tlZCdcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3VzZXI/cmVmPWhvbWUnKVxuICAgIH1cblxuICAgIGdvdFRvRG9jdG9yU2lnbnVwKGlzTGFiKSB7XG4gICAgICAgIGxldCBkYXRhXG4gICAgICAgIGlmIChpc0xhYikge1xuICAgICAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1J1bkxhYkJhbm5lckNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdydW4tbGFiLWJhbm5lci1jbGlja2VkJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1J1bkNsaW5pY0Jhbm5lckNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdydW4tY2xpbmljLWJhbm5lci1jbGlja2VkJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvZG9jdG9yc2lnbnVwJylcbiAgICB9XG5cbiAgICBnZXRUb3BMaXN0KGxpc3QpIHtcbiAgICAgICAgbGV0IHRvcExpc3QgPSBbXVxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPiA1KSB7XG4gICAgICAgICAgICB0b3BMaXN0ID0gbGlzdC5zbGljZSgwLCA1KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9wTGlzdCA9IGxpc3RcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9wTGlzdFxuICAgIH1cblxuICAgIG9yZGVyTWVkQ2xpY2soc291cmNlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93UG9wdXA6IHRydWUsIGNsaWNrZWRPbjogc291cmNlIH0sICgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jb250aW51ZUNsaWNrKCksIDEwMDApO1xuICAgICAgICB9KVxuICAgICAgICBpZiAoc291cmNlID09PSAnbmV3T3JkZXInKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0Rlc2t0b3BOZXdPcmRlckNsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnZGVza3RvcC1uZXctb3JkZXItY2xpY2snXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNvdXJjZSA9PT0gJ3ByZXZPcmRlcicpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnRGVza3RvcFByZXZpb3VzT3JkZXJDbGljaycsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2Rlc2t0b3AtcHJldmlvdXMtb3JkZXItY2xpY2snXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29udGludWVDbGljaygpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAoL21vYmlsZS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuY2xpY2tlZE9uID09PSAnbmV3T3JkZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKENPTkZJRy5QSEFSTUVBU1lfTkVXX09SREVSX0lGUkFNRV9VUkwsICdfYmxhbmsnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oQ09ORklHLlBIQVJNRUFTWV9QUkVWX09SREVSX0lGUkFNRV9VUkwsICdfYmxhbmsnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHNob3dQb3B1cDogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDEwMDApXG4gICAgfVxuXG4gICAgaGlkZVBvcHVwKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1BvcHVwOiBmYWxzZSB9KVxuICAgIH1cblxuICAgIHNiaUJhbm5lckNsaWNrZWQ9ICgpPT57XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnU0JJR09MREJBTk5FUicsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3NiaS1nb2xkLWJhbm5lcidcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3ZpcC1nb2xkLWRldGFpbHM/aXNfZ29sZD10cnVlJnNvdXJjZT1tb2JpbGUtc2JpLWdvbGQtY2xpY2tlZCZsZWFkX3NvdXJjZT1Eb2NwcmltZScpXG4gICAgfVxuXG4gICAgY2xvc2VMZWFkUG9wdXAoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93X3BvcHVwOiBmYWxzZSB9KVxuICAgIH1cbiAgICBcbiAgICBuZWFyYnlIb3NwaXRhbFZpZXdBbGxDbGlja2VkID0gKCk9PntcbiAgICAgICAgbGV0IGd0bURhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0hvbWVXaWRnZXRIb3NwaXRhbFZpZXdBbGxDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnaG9tZS13aWRnZXQtaG9zcGl0YWwtdmlldy1hbGwtY2xpY2tlZCdcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuICAgICAgICB0aGlzLnByb3BzLm1lcmdlSXBkQ3JpdGVyaWEoe1xuICAgICAgICAgICAgY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXM6IFtdLFxuICAgICAgICAgICAgbmV4dFNlbGVjdGVkQ3JpdGVyaWFzOiBbXVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2lwZC9zZWFyY2hIb3NwaXRhbHNgKSAgIFxuICAgIH1cblxuICAgIGFmdGVyVXNlckxvZ2luID0gKCk9PntcbiAgICAgICAgbGV0IGlzX3VzZXJfaW5zdXJhbmNlX2FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBsZXQgdXNlcl9pbnN1cmFuY2Vfc3RhdHVzID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGUgJiYgdGhpcy5wcm9wcy5wcm9maWxlcyAmJiB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGVdKSB7XG4gICAgICAgICAgICB1c2VyX2luc3VyYW5jZV9zdGF0dXMgPSB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGVdLmluc3VyYW5jZV9zdGF0dXNcbiAgICAgICAgfVxuICAgICAgICBpc191c2VyX2luc3VyYW5jZV9hY3RpdmUgPSAodXNlcl9pbnN1cmFuY2Vfc3RhdHVzPT0xIHx8IHVzZXJfaW5zdXJhbmNlX3N0YXR1cz09NSB8fCB1c2VyX2luc3VyYW5jZV9zdGF0dXM9PTQgfHwgdXNlcl9pbnN1cmFuY2Vfc3RhdHVzPT03KVxuICAgICAgICBpZihpc191c2VyX2luc3VyYW5jZV9hY3RpdmUpe1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIkZvciBpbnN1cmVkIGN1c3RvbWVycywgcHJlc2NyaXB0aW9uIHVwbG9hZCBpcyByZXF1aXJlZCBhdCB0aGUgdGltZSBvZiBib29raW5nXCIgfSlcbiAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc191c2VyX2luc3VyYW5jZV9hY3RpdmU6IHRydWUgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldENvcnBvcmF0ZUxlYWQgPSAoKT0+e1xuICAgICAgICBsZXQgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQ29ycG9yYXRlSG9tZVBhZ2VDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY29ycG9yYXRlLWhvbWUtcGFnZS1jbGlja2VkJ1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5Db3Jwb3JhdGVCbG9jazogdHJ1ZX0pXG4gICAgfVxuXG4gICAgY2FuY2VsT3ZlcmxheSA9ICgpPT57XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5Db3Jwb3JhdGVCbG9jazogZmFsc2V9KSAgIFxuICAgIH1cblxuICAgIHB1c2hMZWFkcyA9IChkYXRhKT0+e1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh3aW5kb3cubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBsZXQgcGFyYW1zID0gey4uLmRhdGF9O1xuICAgICAgICBpZihwYXJzZWQpe1xuICAgICAgICAgICAgcGFyYW1zWydzb3VyY2UnXSA9IHtcbiAgICAgICAgICAgICAgICB1dG1fc291cmNlOiBwYXJzZWQudXRtX3NvdXJjZXx8JycsXG4gICAgICAgICAgICAgICAgdXRtX3Rlcm06IHBhcnNlZC51dG1fdGVybXx8JycsXG4gICAgICAgICAgICAgICAgdXRtX21lZGl1bTogcGFyc2VkLnV0bV9tZWRpdW18fCcnLFxuICAgICAgICAgICAgICAgIHV0bV9jYW1wYWlnbjogcGFyc2VkLnV0bV9jYW1wYWlnbnx8JydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLk5vbklwZEJvb2tpbmdMZWFkKHBhcmFtcykudGhlbigoKT0+e1xuICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlJlc3BvbnNlIFN1Ym1pdHRlZCBTdWNjZXNzZnVsbHlcIiB9KTtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsT3ZlcmxheSgpO1xuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9XG5cbiAgICBjbGlja2VkR29sZEJhbm5lciA9ICgpPT57XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ01vYmlsZUhvbWVQYWdlR29sZEJhbm5lckNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdtb2JpbGUtaG9tZXBhZ2UtZ29sZC1iYW5uZXItY2xpY2tlZCdcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KTtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy92aXAtZ29sZC1kZXRhaWxzP2lzX2dvbGQ9dHJ1ZSZzb3VyY2U9bW9iaWxlLWhvbWUtcGFnZS1nb2xkLWJhbm5lciZsZWFkX3NvdXJjZT1Eb2NwcmltZScpXG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpe1xuXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBsZXQgdG9wU3BlY2lhbGl6YXRpb25zID0gW11cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc3BlY2lhbGl6YXRpb25zICYmIHRoaXMucHJvcHMuc3BlY2lhbGl6YXRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgdG9wU3BlY2lhbGl6YXRpb25zID0gdGhpcy5wcm9wcy5zcGVjaWFsaXphdGlvbnM7Ly8uc2xpY2UoMCwgOSkvL3RoaXMuZ2V0VG9wTGlzdCh0aGlzLnByb3BzLnNwZWNpYWxpemF0aW9ucylcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0b3BUZXN0cyA9IFtdXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvbW1vbl90ZXN0cyAmJiB0aGlzLnByb3BzLmNvbW1vbl90ZXN0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRvcFRlc3RzID0gdGhpcy5wcm9wcy5jb21tb25fdGVzdHM7Ly8uc2xpY2UoMCwgOSkvL3RoaXMuZ2V0VG9wTGlzdCh0aGlzLnByb3BzLmNvbW1vbl90ZXN0cylcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0b3BQYWNrYWdlcyA9IFtdXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvbW1vbl9wYWNrYWdlICYmIHRoaXMucHJvcHMuY29tbW9uX3BhY2thZ2UubGVuZ3RoKSB7XG4gICAgICAgICAgICB0b3BQYWNrYWdlcyA9IHRoaXMucHJvcHMuY29tbW9uX3BhY2thZ2UvL3RoaXMuZ2V0VG9wTGlzdCh0aGlzLnByb3BzLmNvbW1vbl9wYWNrYWdlKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFydGljbGVzID0gdGhpcy5wcm9wcy5hcnRpY2xlcyB8fCBbXVxuICAgICAgICBcbiAgICAgICAgbGV0IGlzU0JJID0gdGhpcy5wcm9wcy5tZXJnZVN0YXRlICYmIGRvY3VtZW50ICYmIHR5cGVvZiBkb2N1bWVudD09J29iamVjdCcgJiYgZG9jdW1lbnQubG9jYXRpb24gJiYgZG9jdW1lbnQubG9jYXRpb24uaG9zdCAmJiBkb2N1bWVudC5sb2NhdGlvbi5ob3N0LmluY2x1ZGVzKCdzYmknKVxuICAgICAgICBsZXQgc2hvd1BhY2thZ2VTdHJpcCA9IHRoaXMucHJvcHMuY29tcGFyZV9wYWNrYWdlcyAmJiB0aGlzLnByb3BzLmNvbXBhcmVfcGFja2FnZXMubGVuZ3RoID4gMCAmJiAhdGhpcy5wcm9wcy5pc1BhY2thZ2VcblxuICAgICAgICBsZXQgZGVmYXVsdFVzZXJQcm9maWxlID0gbnVsbFxuICAgICAgICBpZiAodGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZSAmJiB0aGlzLnByb3BzLnByb2ZpbGVzICYmIHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0pIHtcbiAgICAgICAgICAgIGRlZmF1bHRVc2VyUHJvZmlsZSA9IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV07XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2hvd0dvbGRCYW5uZXIgPSBmYWxzZTtcblxuICAgICAgICBpZih0aGlzLnByb3BzLnVzZXJfZGV0YWlsX2ZldGNoZWQpIHtcblxuICAgICAgICAgICAgaWYoZGVmYXVsdFVzZXJQcm9maWxlICYmIE9iamVjdC5rZXlzKGRlZmF1bHRVc2VyUHJvZmlsZSkubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgICAgICBzaG93R29sZEJhbm5lciA9ICEodGhpcy5wcm9wcy5pc19hbnlfdXNlcl9idXlfZ29sZCB8fCBkZWZhdWx0VXNlclByb2ZpbGUuaW5zdXJhbmNlX3N0YXR1cyA9PSAxIHx8IGRlZmF1bHRVc2VyUHJvZmlsZS5pbnN1cmFuY2Vfc3RhdHVzID09IDUgfHwgZGVmYXVsdFVzZXJQcm9maWxlLmluc3VyYW5jZV9zdGF0dXMgPT0gNHx8IGRlZmF1bHRVc2VyUHJvZmlsZS5pbnN1cmFuY2Vfc3RhdHVzID09IDcpXG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgc2hvd0dvbGRCYW5uZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoIVNUT1JBR0UuY2hlY2tBdXRoKCkpe1xuICAgICAgICAgICAgc2hvd0dvbGRCYW5uZXIgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHAtMFwiPlxuICAgICAgICAgICAgICAgICAgICB7LyoqKioqKiBIZWFkZXIgKioqKioqKioqL31cbiAgICAgICAgICAgICAgICAgICAgPERlc2t0b3BQcm9maWxlSGVhZGVyIGhvbWVQYWdlPXt0cnVlfSBzaG93U2VhcmNoPXt0cnVlfSBzaG93UGFja2FnZVN0cmlwPXtzaG93UGFja2FnZVN0cmlwfSBuZXdfZml4ZWRfaGVhZGVyPXsxfS8+XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5vcGVuQ29ycG9yYXRlQmxvY2s/XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29ycG9yYXRlTGVhZFBvcHVwIGNhbmNlbE92ZXJsYXk9e3RoaXMuY2FuY2VsT3ZlcmxheX0gcHVzaExlYWRzPXt0aGlzLnB1c2hMZWFkc30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgey8qKioqKiogaG9tZXBhZ2UgIHZpZXcgKioqKioqKioqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXctbWFpbi12aWV3XCIgaWQ9XCJtYWluVmlld1wiPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0dvbGRCYW5uZXI/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FyZC1ibG9jay1yb3cgYmFubmVyLXNsaWRlci1yb3cgbWJsLWJhbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNTQkkgJiYgdGhpcy5wcm9wcy5vZmZlckxpc3QgJiYgdGhpcy5wcm9wcy5vZmZlckxpc3QuZmlsdGVyKHggPT4geC5zbGlkZXJfbG9jYXRpb24gPT09ICdob21lX3BhZ2UnKS5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYW5uZXJDYXJvdXNlbCB7Li4udGhpcy5wcm9wc30gc2xpZGVyTG9jYXRpb249XCJob21lX3BhZ2VcIiAvPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qKioqKiogIGRlc2t0b3AgYmFubmVyICoqKioqKioqKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjYXJkLWJsb2NrLXJvdyBiYW5uZXItc2xpZGVyLXJvdyBkLWJhbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNTQkkgJiYgdGhpcy5wcm9wcy5vZmZlckxpc3QgJiYgdGhpcy5wcm9wcy5vZmZlckxpc3QuZmlsdGVyKHggPT4geC5zbGlkZXJfbG9jYXRpb24gPT09ICdob21lX3BhZ2UnKS5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYW5uZXJDYXJvdXNlbCB7Li4udGhpcy5wcm9wc30gc2xpZGVyTG9jYXRpb249XCJob21lX3BhZ2VcIiAvPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyoqKioqKiAgZGVza3RvcCBiYW5uZXIgKioqKioqKioqL30gIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyoqKioqKiAgZnVsbCB3aWR0aCBiYW5uZXIgKioqKioqKioqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxVcENvbWluZ0FwcG9pbnRtZW50VmlldyB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImQtbm9uZSBmdWxsLWJhbm5lci1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOicxMDAlJ319IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9tZWRpYS93ZWIvY3VzdG9tX2ltYWdlcy9Hb2xkX2hvbWUtbWluXzEucG5nXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnTW9iaWxlTGVmdE1lbnVHb2xkQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ21vYmlsZS1sZWZ0bWVudS1nb2xkLWNsaWNrZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdmlwLWdvbGQtZGV0YWlscz9pc19nb2xkPXRydWUmc291cmNlPW1vYmlsZS1sZWZ0bWVudS1nb2xkLWNsaWNrZWQmbGVhZF9zb3VyY2U9RG9jcHJpbWUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIG9uQ2xpY2s9eyhlKT0+ZS5wcmV2ZW50RGVmYXVsdCgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17dGhpcy5nZXRDb3Jwb3JhdGVMZWFkfSA+U3BlY2lhbCBwbGFucyBhdmFpbGFibGUgZm9yIENvcnBvcmF0ZXMgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3duLWljb24teWVsbG93XCI+Jmd0Ozwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKioqKioqICBtYmwgYmFubmVyICoqKioqKioqKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0dvbGRCYW5uZXI/Jyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FyZC1ibG9jay1yb3cgYmFubmVyLXNsaWRlci1yb3cgbWJsLWJhbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNTQkkgJiYgdGhpcy5wcm9wcy5vZmZlckxpc3QgJiYgdGhpcy5wcm9wcy5vZmZlckxpc3QuZmlsdGVyKHggPT4geC5zbGlkZXJfbG9jYXRpb24gPT09ICdob21lX3BhZ2UnKS5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYW5uZXJDYXJvdXNlbCB7Li4udGhpcy5wcm9wc30gc2xpZGVyTG9jYXRpb249XCJob21lX3BhZ2VcIiAvPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPiAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyoqKioqKiAgbWJsIGJhbm5lciAqKioqKioqKiovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyoqKioqKiAgdG9wIGhvc3BpdGFscyAqKioqKioqKiovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0dvbGRCYW5uZXI/PEdvbGRIb21lUGFnZUJhbm5lciBjbGlja2VkR29sZEJhbm5lcj17dGhpcy5jbGlja2VkR29sZEJhbm5lcn0vPjonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b3BfaG9zcGl0YWxzICYmIHRoaXMucHJvcHMudG9wX2hvc3BpdGFscy5sZW5ndGg/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhvbWVQYWdlV2lkZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9XCJUb3AgSG9zcGl0YWxzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdD17dGhpcy5wcm9wcy50b3BfaG9zcGl0YWxzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3BIb3NwaXRhbHM9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlPSdob21lX3RvcF9oc3B0bCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeU9iaiA9e3RoaXMucHJvcHMuaGlzdG9yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoRnVuYz17dGhpcy5zZWFyY2hIb3NwaXRhbHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5uZWFyYnlIb3NwaXRhbHMgJiYgdGhpcy5wcm9wcy5uZWFyYnlIb3NwaXRhbHMuaG9zcGl0YWxzICYmIHRoaXMucHJvcHMubmVhcmJ5SG9zcGl0YWxzLmhvc3BpdGFscy5sZW5ndGg/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhvbWVQYWdlV2lkZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9XCJIb3NwaXRhbHMgTmVhciB5b3VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0PXt0aGlzLnByb3BzLm5lYXJieUhvc3BpdGFscy5ob3NwaXRhbHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlPSdob21lX25lYXJieS1oc3B0bCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeU9iaiA9e3RoaXMucHJvcHMuaGlzdG9yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoRnVuYz17dGhpcy5zZWFyY2hIb3NwaXRhbHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyoqKioqKiAgZG9jdG9yIGFwb2ludG1lbnQgc2VjdGlvbiAqKioqKioqKiovfVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcFNwZWNpYWxpemF0aW9ucyAmJiB0b3BTcGVjaWFsaXphdGlvbnMubGVuZ3RoP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIb21lUGFnZVdpZGdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPVwiQm9vayBEb2N0b3IgQXBwb2ludG1lbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRUZXh0PSBcIlNlYXJjaCBtb3JlIHNwZWNpYWxpemF0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0QnV0dG9uQ2xpY2tlZCA9IHt0aGlzLmdvVG9TZWFyY2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaEZ1bmM9e3RoaXMuc2VhcmNoRG9jdG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0PXt0b3BTcGVjaWFsaXphdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlPSdob21lX3RvcF9zcGVjeidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzY291bnQ9XCI1MCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5T2JqID17dGhpcy5wcm9wcy5oaXN0b3J5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwib3BkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2VG89XCIvc2VhcmNoP2Zyb209aG9tZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50PXsxMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoVHlwZT1cInNwZWNpYWxpemF0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpc3RvcnlPYmo9e3RoaXMucHJvcHMuaGlzdG9yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25PYmo9e3RoaXMucHJvcHMubG9jYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFNlYXJjaFR5cGU9e3RoaXMucHJvcHMuc2VsZWN0U2VhcmNoVHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyoqKioqKiAgUG9wdWxhciBoZWFsdGggcGFja2FnZXMgc2VjdGlvbiAqKioqKioqKiovfSAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3BQYWNrYWdlcyAmJiB0b3BQYWNrYWdlcy5sZW5ndGg/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhvbWVQYWdlV2lkZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9XCJQb3B1bGFyIEhlYWx0aCBQYWNrYWdlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0VGV4dD0gXCJWaWV3IGFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0QnV0dG9uQ2xpY2tlZCA9IHt0aGlzLmdvVG9TZWFyY2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcFBhY2thZ2VzPSB7dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdD17dG9wUGFja2FnZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaEZ1bmM9e3RoaXMuc2VhcmNoTGFifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZT0naG9tZV90b3BfcGNrZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeU9iaiA9e3RoaXMucHJvcHMuaGlzdG9yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhY2thZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZUbz1cIi9zZWFyY2hwYWNrYWdlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY291bnQ9ezh9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWFyY2hUeXBlPVwicGFja2FnZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBoaXN0b3J5T2JqPXt0aGlzLnByb3BzLmhpc3Rvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvY2F0aW9uT2JqPXt0aGlzLnByb3BzLmxvY2F0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWxlY3RTZWFyY2hUeXBlPXt0aGlzLnByb3BzLnNlbGVjdFNlYXJjaFR5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgey8qKioqKiogIEJvb2sgbGFiIHRlc3QgKioqKioqKioqL30gIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wVGVzdHMgJiYgdG9wVGVzdHMubGVuZ3RoP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIb21lUGFnZVdpZGdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPVwiQm9vayBMYWIgVGVzdHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodFRleHQ9IFwiU2VhcmNoIG1vcmUgdGVzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0QnV0dG9uQ2xpY2tlZCA9IHt0aGlzLmdvVG9TZWFyY2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q9e3RvcFRlc3RzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hGdW5jPXt0aGlzLnNlYXJjaExhYn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU9J2hvbWVfdG9wX3Rlc3RzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNjb3VudD1cIjUwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpc3RvcnlPYmogPXt0aGlzLnByb3BzLmhpc3Rvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJsYWJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZUbz1cIi9zZWFyY2g/ZnJvbT1ob21lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ9ezEwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc191c2VyX2luc3VyYW5jZV9hY3RpdmU9e3RoaXMuc3RhdGUuaXNfdXNlcl9pbnN1cmFuY2VfYWN0aXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5T2JqPXt0aGlzLnByb3BzLmhpc3Rvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uT2JqPXt0aGlzLnByb3BzLmxvY2F0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZnRlclVzZXJMb2dpbj17dGhpcy5hZnRlclVzZXJMb2dpbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZXM9e3RoaXMucHJvcHMucHJvZmlsZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFR5cGU9XCJ0ZXN0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFNlYXJjaFR5cGU9e3RoaXMucHJvcHMuc2VsZWN0U2VhcmNoVHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNfdXNlcl9pbnN1cmFuY2VfYWN0aXZlPycnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxQcmVzY3JpcHRpb25VcGxvYWQgaGlzdG9yeU9iaj17dGhpcy5wcm9wcy5oaXN0b3J5fSBpc19ob21lX3BhZ2U9e3RydWV9IGxvY2F0aW9uT2JqID0ge3RoaXMucHJvcHMubG9jYXRpb259IHByb2ZpbGVzPXt0aGlzLnByb3BzLnByb2ZpbGVzfSBhZnRlclVzZXJMb2dpbj17dGhpcy5hZnRlclVzZXJMb2dpbn0vPiAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGF0aWNDb250ZW50IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaWFuLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHsvKioqKioqICBvdGhlciBkZXRhaWxzICoqKioqKioqKi99XG5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FyZC1ibG9jay1yb3cgZGV0YWlsLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkRvd25sb2FkIHRoZSBBcHAgTm93PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG0tMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1sZy01IG90aGVyLWRldGFpbHMgcC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5PbmxpbmUgQ29uc3VsdGF0aW9uczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Qm9vayBEb2N0b3IgQXBwb2ludG1lbnRzIHRoZSBQcmltZSBXYXk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkRvY3RvcnM6IEZvciB5b3UsIE5lYXIgeW91PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Cb29rIExhYiBUZXN0cyBhbmQgRnJlZSBIZWFsdGggQ2hlY2stVXBzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TdG9yZSBNZWRpY2FsIFJlY29yZHM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvd25sb2FkLWxpbmtzIGQtZmxleCBhbGlnbi1pdGVtLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZG9jcHJpbWVhcHAucGFnZS5saW5rL0hvbWVwYWdlQXBwSW5zdGFsbEFuZHJvaWRcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMTgwXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCItMTJweFwifX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvZ29vZ2xlLXBsYXkucG5nXCJ9IGFsdD1cIkFuZHJvaWRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9kb2NwcmltZWFwcC5wYWdlLmxpbmsvSG9tZXBhZ2VBcHBJbnN0YWxsaU9TXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyB3aWR0aD1cIjE2MFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2lvcy5wbmdcIn0gYWx0PVwiaW9zXCIvPiAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1sZy03IGRlbW8tbWJsLXNjcmVlbi1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9kZW1vLW1ibC5wbmdcIn0gYWx0PVwiaW9zXCIvPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIHsvKioqKioqICBvdGhlciBkZXRhaWxzICoqKioqKioqKi99XG4gICAgICAgICAgICAgICAgICAgIHsvKioqKioqIGhvbWVwYWdlICB2aWV3ICoqKioqKioqKi99XG4gICAgICAgICAgICAgICAgICAgIHsvKioqKioqIGZvb3RlciAqKioqKioqKiovfVxuICAgICAgICAgICAgICAgICAgICA8Rml4ZWRNb2JpbGVGb290ZXIgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxGb290ZXIgc3BlY2lhbGl0eUZvb3RlckRhdGE9e3RoaXMucHJvcHMuc3RhdGljX2Zvb3Rlcl9kYXRhfS8+XG4gICAgICAgICAgICAgICAgICAgIHsvKioqKioqIGZvb3RlciAqKioqKioqKiovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKioqKioqIGNoYXQgdmlldyBidXR0b24gICoqKioqKioqKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLW5vbmUgbmV3LWNoYXQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdGJveC1tYWluIG1iLTNcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPENoYXRQYW5lbCAga2V5PVwiY2hhdFwiIGhvbWVQYWdlPXt0cnVlfSBvZmZlckxpc3Q9e3RoaXMucHJvcHMub2ZmZXJMaXN0fS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtYm94LWNpcmNsZSBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgZmxleC1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaGVpZ2h0PVwiMTdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jaGF0LnN2Z1wifSBhbHQ9XCJjaGF0XCIvPiAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkRvY3RvciA8YnIvPkNvbnN1bHRhdGlvbjwvaDY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL21pbmltaXplLnN2Z1wifSBhbHQ9XCJjYW5jZWxcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7LyoqKioqKiBjaGF0IHZpZXcgYnV0dG9uICAqKioqKioqKiovfVxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cblxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluVmlldzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtJztcblxuY2xhc3MgVG9wQ2hhdFdpZGdldCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXG5cdHdpZGdldENsaWNrKGtub3dNb3JlID0gZmFsc2UpIHtcblxuXHRcdC8vIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvbW9iaWxldmlld2NoYXQnKVxuXHRcdGlmIChrbm93TW9yZSkge1xuXHRcdFx0bGV0IGd0bURhdGEgPSB7XG5cdFx0XHRcdCdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSG9tZVZpcFdpZGdldENsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnaG9tZS12aXAtd2lkZ2V0LWNsaWNrJ1xuXHRcdFx0fVxuXHRcdFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bURhdGEgfSlcblx0XHRcdHRoaXMucHJvcHMuY2xlYXJWaXBTZWxlY3RlZFBsYW4oKVxuXHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy92aXAtZ29sZC1kZXRhaWxzP2lzX2dvbGQ9dHJ1ZSZzb3VyY2U9bW9iaWxlLWNoYXQtd2lkZ2V0LWdvbGQtY2xpY2tlZCZsZWFkX3NvdXJjZT1Eb2NwcmltZScpXG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCBndG1EYXRhID0ge1xuXHRcdFx0XHQnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0hvbWVDaGF0V2lkZ2V0Q2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdob21lLWNoYXQtd2lkZ2V0LWNsaWNrJ1xuXHRcdFx0fVxuXHRcdFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bURhdGEgfSlcblx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvbW9iaWxldmlld2NoYXQnKVxuXHRcdH1cblxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtbWQtbm9uZSBob21lLWR1by13aWRnZXRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCIgd2lkZ2V0IG1yYi0xMCBjdXJzb3ItcG50clwiIHN0eWxlPXt7IHBhZGRpbmc6ICc0cHggNnB4JywgYm9yZGVyQm90dG9tOiAnNXB4IHNvbGlkICNmZmI2MDEnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fSBvbkNsaWNrPXsoKSA9PiB0aGlzLndpZGdldENsaWNrKHRydWUpfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhvbWUtdmlwLWNvbnRcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZG9jLWF2YXRhclwiPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHN0eWxlPXt7d2lkdGg6IDMwfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9nb2xkLWxnLnBuZyd9IC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgZmxleDogMSB9fSA+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTcwMFwiIHN0eWxlPXt7IGZvbnRTaXplOiAxMiB9fT5CZWNvbWUgYSBEb2NwcmltZSBHb2xkIG1lbWJlcjxzcGFuIGNsYXNzTmFtZT1cInZpcC10cC1zdWItdHh0XCI+U2F2ZSBtb3JlIHdpdGggZXhjbHVzaXZlIG1lbWJlcnNoaXA8L3NwYW4+PC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjaGF0LW5vdy1idG4gdGV4dC1yaWdodFwiPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+S25vdyBNb3JlPC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCIgd2lkZ2V0IG1yYi0xMCBjdXJzb3ItcG50clwiIHN0eWxlPXt7IHBhZGRpbmc6ICc0cHggNnB4JywgYm9yZGVyQm90dG9tOiAnNXB4IHNvbGlkICM0Mjg5ZmUnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fSBvbkNsaWNrPXsoKSA9PiB0aGlzLndpZGdldENsaWNrKCl9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaG9tZS12aXAtY29udFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkb2MtYXZhdGFyXCI+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9jaGF0LWljb24ucG5nJ30gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBmbGV4OiAxIH19ID5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNzAwXCIgc3R5bGU9e3sgZm9udFNpemU6IDEyIH19Pk9ubGluZSBEb2N0b3IgQ29uc3VsdGF0aW9uPHNwYW4gY2xhc3NOYW1lPVwidmlwLXRwLXN1Yi10eHRcIj5UYWxrIHRvIHRvcCBkb2N0b3JzIHdpdGhvdXQgYW55IHdhaXQgdGltZXM8L3NwYW4+PC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjaGF0LW5vdy1idG4gdGV4dC1yaWdodFwiPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+Q29uc3VsdCBOb3c8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9wQ2hhdFdpZGdldCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5cbmNsYXNzIEhvbWVQYWdlUGFja2FnZUNhdGVnb3J5IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG5cbiAgICBuYXZpZ2F0ZVRvKFBrZ0RhdGEsIGUpe1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSG9tZVBhZ2VDb21wYXJlUGFja2FnZUNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdob21lLXBhZ2UtY29tcGFyZS1wYWNrYWdlLWNsaWNrZWQnLCAncGFja2FnZV9pZCc6IFBrZ0RhdGFcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgIGxldCBwYWNrYWdlcz17fVxuICAgICAgICBsZXQgc2VsZWN0ZWRQa2dDb21wYXJlSWRzPVtdXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeU9iai5wdXNoKCcvcGFja2FnZS9jb21wYXJlP2NhdGVnb3J5X2lkcz0nKyBQa2dEYXRhLmlkKVxuICAgIH1cblxuICAgIHNjcm9sbCh0eXBlKSB7XG4gICAgICAgIHZhciBlbG1udCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9wX3BrZ0NhdFwiKVxuICAgICAgICBsZXQgb3V0ZXJEaXZXaWR0aCA9IGVsbW50Lm9mZnNldFdpZHRoXG4gICAgICAgIGxldCBjaGlsZERpdldpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG9wX3BrZ0NhdCcpWzBdLm9mZnNldFdpZHRoXG4gICAgICAgIGxldCBjYXJkQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0b3BfcGtnQ2F0JylbMF0uY2hpbGRFbGVtZW50Q291bnRcbiAgICAgICAgbGV0IGNhcmRXaWR0aCA9IE1hdGguY2VpbChjaGlsZERpdldpZHRoIC8gY2FyZENvdW50KVxuXG4gICAgICAgIGxldCBsZWZ0U2Nyb2xsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3BfcGtnQ2F0XCIpLnNjcm9sbExlZnRcbiAgICAgICAgbGV0IHNjcm9sbFZhbCA9IE1hdGguZmxvb3Iob3V0ZXJEaXZXaWR0aCAvIGNhcmRXaWR0aCkgKiBjYXJkV2lkdGhcbiAgICAgICAgbGV0IGNhcmRFbmQgPSBjYXJkQ291bnQgKiBjYXJkV2lkdGhcblxuICAgICAgICBpZiAodHlwZSA9PSAncmlnaHQnKSB7XG4gICAgICAgICAgICBlbG1udC5zY3JvbGwoeyBsZWZ0OiBsZWZ0U2Nyb2xsICsgc2Nyb2xsVmFsLCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgICAgICAgIGlmIChjYXJkRW5kIDw9IGxlZnRTY3JvbGwgKyBzY3JvbGxWYWwgKyBvdXRlckRpdldpZHRoKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnRBcnJvd19wa2dDYXQnKS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUmlnaHRBcnJvd19wa2dDYXQnKS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbG1udC5zY3JvbGwoeyBsZWZ0OiBsZWZ0U2Nyb2xsIC0gc2Nyb2xsVmFsLCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgICAgICAgIGlmIChsZWZ0U2Nyb2xsIC0gc2Nyb2xsVmFsIDw9IDApIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUmlnaHRBcnJvd19wa2dDYXQnKS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdEFycm93X3BrZ0NhdCcpLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIilcbiAgICAgICAgfVxuICAgIH1cbiAgICBWaWV3QWxsKCl7XG4gICAgICAgIGxldCBwYWNrYWdlX2NhdGVnb3J5X2lkcz1bXVxuICAgICAgIHRoaXMucHJvcHMudG9wX2RhdGEubWFwKChkYXRhLCBpKSA9PiB7XG4gICAgICAgICAgICBwYWNrYWdlX2NhdGVnb3J5X2lkcy5wdXNoKGRhdGEuaWQpXG4gICAgICAgfSlcbiAgICAgICB0aGlzLnByb3BzLmhpc3RvcnlPYmoucHVzaCgnL3NlYXJjaHBhY2thZ2VzP3BhY2thZ2VfY2F0ZWdvcnlfaWRzPScrIHBhY2thZ2VfY2F0ZWdvcnlfaWRzKVxuICAgIH1cblx0XG5cdHJlbmRlcigpe1xuXG5cdFx0cmV0dXJuKFxuXHRcdCAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWtnLXNsaWRlci1jb250YWluZXIgbXQtMTAgbWItMTBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ1NsaWRlckhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg1PkhlYWx0aCBQYWNrYWdlIENhdGVnb3JpZXM8L2g1PlxuICAgICAgICAgICAgICAgICAgICB7Lyo8c3BhbiBvbkNsaWNrPXt0aGlzLlZpZXdBbGwuYmluZCh0aGlzKX0+VmlldyBBbGw8L3NwYW4+Ki99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2dTbGlkZXJDb250YWluZXJcIiBpZD1cInRvcF9wa2dDYXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BrZ0NhcmRzTGlzdCBkLWlubGluZS1mbGV4IHN1Yi13ZC1jYXJkcyB0b3BfcGtnQ2F0Jz5cbiAgICAgICAgICAgICAgICAgICAgXHR7XG4gICAgICAgICAgICAgICAgICAgIFx0XHR0aGlzLnByb3BzLnRvcF9kYXRhLm1hcCgoZGF0YSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBcdFx0XHRyZXR1cm4gPGEgY2xhc3NOYW1lPVwicGtnY3VzdENhcmRzIGhlYWx0aC1wa2ctY2FyZC13aWR0aFwiIGtleT17aX0gb25DbGljaz17dGhpcy5uYXZpZ2F0ZVRvLmJpbmQodGhpcywgZGF0YSl9PlxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ2NhcmRJbWdDb250XCI+XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17ZGF0YS5zdmdfaWNvbj9kYXRhLnN2Z19pY29uOmRhdGEuaWNvbn0gLz5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBrZ3RzdE5hbWUgcHJjZC1oZWlnaHRcIj5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm5hbWV9XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgXHQ8L3A+XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlx0XHRcbiAgICAgICAgICAgICAgICAgICAgXHRcdH0pXG4gICAgICAgICAgICAgICAgICAgIFx0fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ2xmdFJodGJ0bmNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2ctYnRubGZ0IGQtbm9uZVwiIGlkPVwiUmlnaHRBcnJvd19wa2dDYXRcIiBvbkNsaWNrPXt0aGlzLnNjcm9sbC5iaW5kKHRoaXMsICdsZWZ0Jyl9PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnLWJ0bnJndFwiIGlkPVwibGVmdEFycm93X3BrZ0NhdFwiIG9uQ2xpY2s9e3RoaXMuc2Nyb2xsLmJpbmQodGhpcywgJ3JpZ2h0Jyl9PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VQYWNrYWdlQ2F0ZWdvcnkiLCJpbXBvcnQgTWFpblZpZXcgZnJvbSAnLi9Ib21lTmV3VmlldydcblxuZXhwb3J0IGRlZmF1bHQgTWFpblZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpPT4ge1xuXG4gICAgZnVuY3Rpb24gc2Nyb2xsKHR5cGUpIHtcbiAgICAgICAgbGV0IGRhdGFUeXBlID0gJ3N0YXRpY19yZXZpZXdfYmxjaydcbiAgICAgICAgdmFyIGVsbW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YVR5cGUpXG5cbiAgICAgICAgaWYoZWxtbnQpIHtcbiAgICAgICAgICAgIGxldCBvdXRlckRpdldpZHRoID0gZWxtbnQub2Zmc2V0V2lkdGhcbiAgICAgICAgICAgIGxldCBjYXJkQ291bnQgPSBlbG1udC5jaGlsZHJlbiAmJiBlbG1udC5jaGlsZHJlbi5sZW5ndGg/ZWxtbnQuY2hpbGRyZW4ubGVuZ3RoOjY7XG4gICAgICAgICAgICBsZXQgY2hpbGREaXZXaWR0aCA9IGVsbW50LnNjcm9sbFdpZHRoP2VsbW50LnNjcm9sbFdpZHRoOjMwMDA7XG4gICAgICAgICAgICBsZXQgY2FyZFdpZHRoID0gTWF0aC5jZWlsKGNoaWxkRGl2V2lkdGggLyBjYXJkQ291bnQpXG5cbiAgICAgICAgICAgIGxldCBsZWZ0U2Nyb2xsID0gZWxtbnQuc2Nyb2xsTGVmdFxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PSAncmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgZWxtbnQuc2Nyb2xsKHsgbGVmdDogbGVmdFNjcm9sbCArIG91dGVyRGl2V2lkdGgsIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgICAgICAgICAgIGlmIChjaGlsZERpdldpZHRoIDw9IChsZWZ0U2Nyb2xsICsgIDIqb3V0ZXJEaXZXaWR0aCApICkgIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZGF0YVR5cGV9X2xlZnRBcnJvd19oc3B0bGApLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZGF0YVR5cGV9X1JpZ2h0QXJyb3dfaHNwdGxgKS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsbW50LnNjcm9sbCh7IGxlZnQ6IGxlZnRTY3JvbGwgLSBvdXRlckRpdldpZHRoLCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgICAgICAgICAgICBpZiAobGVmdFNjcm9sbCAtIG91dGVyRGl2V2lkdGggPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtkYXRhVHlwZX1fUmlnaHRBcnJvd19oc3B0bGApLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZGF0YVR5cGV9X2xlZnRBcnJvd19oc3B0bGApLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXHRyZXR1cm4oXG5cdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdCB7LyoqKioqKiAgT3VyIFBhcnRuZXJzIHNlY3Rpb24gKioqKioqKioqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FyZC1ibG9jay1yb3dcIj5cbiAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmdy01MDAgb3VyLXBhcnRuZXItaGVhZGluZy10ZXh0XCI+T3VyIFBhcnRuZXJzPC9oNj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1zbGlkZXItY29udGFpbmVyIHBhcnRuZXItc2VjdGlvbiBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtLWNlbnRlciBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcnRuZXItaW1nLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL21lZGlhL3dlYi9jdXN0b21faW1hZ2VzL0ltYWdlXzEtMTJ4LnBuZ1wiIGFsdD1cIlBhcnRuZXJzXCIvPiAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFydG5lci1pbWctYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vbWVkaWEvd2ViL2N1c3RvbV9pbWFnZXMvSW1hZ2VfMi0xMngucG5nXCIgYWx0PVwiUGFydG5lcnNcIi8+ICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJ0bmVyLWltZy1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9tZWRpYS93ZWIvY3VzdG9tX2ltYWdlcy9JbWFnZV83MngucG5nXCIgYWx0PVwiUGFydG5lcnNcIi8+ICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJ0bmVyLWltZy1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9tZWRpYS93ZWIvY3VzdG9tX2ltYWdlcy9JbWFnZV85MngucG5nXCIgYWx0PVwiUGFydG5lcnNcIi8+ICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJ0bmVyLWltZy1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9tZWRpYS93ZWIvY3VzdG9tX2ltYWdlcy9JbWFnZV8xMDJ4LnBuZ1wiIGFsdD1cIlBhcnRuZXJzXCIvPiAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFydG5lci1pbWctYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vbWVkaWEvd2ViL2N1c3RvbV9pbWFnZXMvSW1hZ2VfMTgyeC5wbmdcIiAgYWx0PVwiUGFydG5lcnNcIi8+ICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicGFydG5lci1pbWctYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vbWVkaWEvd2ViL2N1c3RvbV9pbWFnZXMvSW1hZ2VfMTkyeC5wbmdcIiAgYWx0PVwiUGFydG5lcnNcIi8+ICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFydG5lci1pbWctYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWQgdHJhbnNmb3JtLXNjLTFcIiBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vbWVkaWEvd2ViL2N1c3RvbV9pbWFnZXMvSW1hZ2VfNi0xMngucG5nXCIgYWx0PVwiUGFydG5lcnNcIi8+ICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJ0bmVyLWltZy1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7dHJhbnNmb3JtOlwic2NhbGUoMC41KVwifX0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL21lZGlhL3dlYi9jdXN0b21faW1hZ2VzL0ltYWdlXzQtMTJ4LnBuZ1wiIGFsdD1cIlBhcnRuZXJzXCIvPiAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFydG5lci1pbWctYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3RyYW5zZm9ybTpcInNjYWxlKDAuNSlcIn19IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9tZWRpYS93ZWIvY3VzdG9tX2ltYWdlcy9JbWFnZV8zLTEyeC5wbmdcIiBhbHQ9XCJQYXJ0bmVyc1wiLz4gICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcnRuZXItaW1nLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3t0cmFuc2Zvcm06XCJzY2FsZSgwLjUpXCJ9fSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vbWVkaWEvd2ViL2N1c3RvbV9pbWFnZXMvSW1hZ2VfNTJ4LnBuZ1wiIGFsdD1cIlBhcnRuZXJzXCIvPiAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFydG5lci1pbWctYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vbWVkaWEvd2ViL2N1c3RvbV9pbWFnZXMvSW1hZ2VfMTEyeC5wbmdcIiBhbHQ9XCJQYXJ0bmVyc1wiLz4gICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIHsvKioqKioqICBPdXIgUGFydG5lcnMgc2VjdGlvbiAqKioqKioqKiovfVxuICAgICAgICB7LyoqKioqKiAgV2hlcmUgd2UgYXJlICoqKioqKioqKi99XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNhcmQtYmxvY2stcm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtc2xpZGVyLWNvbnRhaW5lciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWlsZXN0b25lLXNlY3Rpb25cIiBpZD1cImNvdW50ZXItc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kLWNvbCBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgaGVpZ2h0PVwiMTVcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zdGFyLnN2Z1wifSBhbHQ9XCJzdGFyXCIvPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBoZWlnaHQ9XCIxNVwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3N0YXIuc3ZnXCJ9IGFsdD1cInN0YXJcIi8+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGhlaWdodD1cIjE1XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvc3Rhci5zdmdcIn0gYWx0PVwic3RhclwiLz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgaGVpZ2h0PVwiMTVcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zdGFyLnN2Z1wifSBhbHQ9XCJzdGFyXCIvPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBoZWlnaHQ9XCIxNVwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3N0YXIuc3ZnXCJ9IGFsdD1cInN0YXJcIi8+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPGgzPndlIGFyZSBoZXJlIDxici8+c28gZmFyPC9oMz4gIFxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3Byb2ZpdC5zdmdcIn0gYWx0PVwicHJvZml0XCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnN1bHRhdGlvbi1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+MSBMYWtoICs8L3NwYW4+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkRvY3RvciBhbmQgTGFiIEFwcG9pbnRtZW50czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+MTAgTGFraCArPC9zcGFuPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5PbmxpbmUgQ29uc3VsdGF0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uc3VsdGF0aW9uLWNvbCBsZWZ0LWJvcmRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImNvdW50TnVtXCI+MzAwMDAgKzwvc3Bhbj48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RG9jdG9yIE5ldHdvcms8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiY291bnROdW0yXCI+NTAwMCArPC9zcGFuPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5MYWIgTmV0d29yazwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+MiBMYWtoICs8L3NwYW4+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlByZXNjcmlwdGlvbiBEZWxpdmVyZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICB7LyoqKioqKiAgV2hlcmUgd2UgYXJlICoqKioqKioqKi99IFxuICAgICAgICB7LyoqKioqKiAgY3VzdG9tZXIgcmV2aWV3ICoqKioqKioqKi99XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNhcmQtYmxvY2stcm93IFwiPlxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZ3LTUwMCBjdXN0b21lci1yZXZpZXctaGVhZGluZ1wiPk91ciBIYXBweSBDdXN0b21lcnMgPC9oNj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1zbGlkZXItY29udGFpbmVyIGN1c3QtcmV2aWV3IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBjdXN0LWZlZWRiYWNrLWNvbFwiIGlkPVwic3RhdGljX3Jldmlld19ibGNrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgY29sLXNtLTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0LWltZy1ibG9jayBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgZnctNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wcm9maWxlLWltZy5wbmdcIn0gYWx0PVwibmFtZVwiLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BRzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5BbmFuZGEgR2hvc2hhbCA8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbS1jZW50ZXIgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgaGVpZ2h0PVwiMTVcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zdGFyLnN2Z1wifSBhbHQ9XCJzdGFyXCIvPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBoZWlnaHQ9XCIxNVwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3N0YXIuc3ZnXCJ9IGFsdD1cInN0YXJcIi8+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGhlaWdodD1cIjE1XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvc3Rhci5zdmdcIn0gYWx0PVwic3RhclwiLz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgaGVpZ2h0PVwiMTVcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zdGFyLnN2Z1wifSBhbHQ9XCJzdGFyXCIvPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBoZWlnaHQ9XCIxNVwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3N0YXIuc3ZnXCJ9IGFsdD1cInN0YXJcIi8+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItMlwiPkRvY3ByaW1lIGhhcyBwcm92aWRlZCBtZSB0aGUgY2hhbmNlIHRvIGNvbnN1bHQgdGhlIERvY3RvciBhdCB0aGUgZWFybGllc3QuIFRoZWlyIGN1c3RvbWVyIGNhcmUgaXMgcHJvbXB0IGFuZCBjb29wZXJhdGl2ZSB0byBzb3J0IG91dCBteSBwcm9ibGVtIGFzIHNvb24gYXMgcG9zc2libGUuIEl0IGlzIHRoZSBlYXNpZXN0IHdheSB0byBib29rIERvY3RvciBhcHBvbmludG1lbnRzPC9wPlxuICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBoZWlnaHQ9XCIyMFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2ctcGxheS5wbmdcIn0gYWx0PVwiZ29vZ2xlLXBsYXlcIi8+ICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwIGNvbC1zbS00IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdC1pbWctYmxvY2sgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGZ3LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcHJvZmlsZS1pbWcucG5nXCJ9IGFsdD1cIm5hbWVcIi8+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Uzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5TYW5hdDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtLWNlbnRlciBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBoZWlnaHQ9XCIxNVwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3N0YXIuc3ZnXCJ9IGFsdD1cInN0YXJcIi8+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGhlaWdodD1cIjE1XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvc3Rhci5zdmdcIn0gYWx0PVwic3RhclwiLz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgaGVpZ2h0PVwiMTVcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zdGFyLnN2Z1wifSBhbHQ9XCJzdGFyXCIvPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBoZWlnaHQ9XCIxNVwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3N0YXIuc3ZnXCJ9IGFsdD1cInN0YXJcIi8+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGhlaWdodD1cIjE1XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvc3Rhci5zdmdcIn0gYWx0PVwic3RhclwiLz48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0yXCI+RG9jcHJpbWUgaGFzIGhlbHBlZCBtZSBjaG9vc2UgYSBkb2N0b3IgKGRlbnRpc3QpIHdpdGhvdXQgYW55IGhhc3NsZSwgY29uc2lkZXJpbmcgdGhlIGZhY3QgdGhhdCBJIGFtIGNvbXBsZXRlbHkgbmV3IHRvIHRoZSBjaXR5ICYgaGFzIGFic29sdXRlbHkgbm8ga25vd2xlZGdlIGFib3V0IHdoaWNoIGRvY3RvciB0byBjb25zdWx0LiBUaGFuayB5b3UgdmVyeSBtdWNoIERvY3ByaW1lLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgaGVpZ2h0PVwiMjBcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9nLXBsYXkucG5nXCJ9IGFsdD1cImdvb2dsZS1wbGF5XCIvPiAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBjb2wtc20tNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3QtaW1nLWJsb2NrIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBmdy01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3Byb2ZpbGUtaW1nLnBuZ1wifSBhbHQ9XCJuYW1lXCIvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlBTPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPlB1cm5pbWEgU2luZ2xhPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW0tY2VudGVyIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGhlaWdodD1cIjE1XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvc3Rhci5zdmdcIn0gYWx0PVwic3RhclwiLz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgaGVpZ2h0PVwiMTVcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zdGFyLnN2Z1wifSBhbHQ9XCJzdGFyXCIvPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBoZWlnaHQ9XCIxNVwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3N0YXIuc3ZnXCJ9IGFsdD1cInN0YXJcIi8+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGhlaWdodD1cIjE1XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvc3Rhci5zdmdcIn0gYWx0PVwic3RhclwiLz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgaGVpZ2h0PVwiMTVcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9ncmV5LXN0YXIuc3ZnXCJ9IGFsdD1cInN0YXJcIi8+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItMlwiPkkgaGF2ZSBib29rZWQgMyBmdWxsIGJvZHkgaGVhbHRoIHBhY2thZ2VzIGZvciBteSBmYW1pbHkuIEFmdGVyIHJlY2VpdmluZyB0aGUgcmVwb3J0LCBJIGdvdCBhIGNhbGwgZnJvbSBhIGRvY3RvciB3aG8gZXhwbGFpbmVkIGVhY2ggYW5kIGV2ZXJ5IGVsZW1lbnQgb2YgdGhlIHJlcG9ydCB0byBtZSBhbmQgbXkgZmFtaWx5LiBIZSBldmVuIHByZXNjcmliZWQgc29tZSBtZWRpY2luZXMgdG8gbXkgbW90aGVyIGFuZCBkaXJlY3RlZCB1cyB0byB0YWtlIHNvbWUgbXVsdGl2aXRhbWlucy4gSSB0cnVseSBsb3ZlZCB0aGUgc2VydmljZS48L3A+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIGhlaWdodD1cIjIwXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvZy1wbGF5LnBuZ1wifSBhbHQ9XCJnb29nbGUtcGxheVwiLz4gKi99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgY29sLXNtLTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0LWltZy1ibG9jayBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgZnctNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wcm9maWxlLWltZy5wbmdcIn0gYWx0PVwibmFtZVwiLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5QUzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5QcmVldCBTb2hhbDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtLWNlbnRlciBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBoZWlnaHQ9XCIxNVwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3N0YXIuc3ZnXCJ9IGFsdD1cInN0YXJcIi8+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGhlaWdodD1cIjE1XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvc3Rhci5zdmdcIn0gYWx0PVwic3RhclwiLz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgaGVpZ2h0PVwiMTVcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zdGFyLnN2Z1wifSBhbHQ9XCJzdGFyXCIvPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBoZWlnaHQ9XCIxNVwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3N0YXIuc3ZnXCJ9IGFsdD1cInN0YXJcIi8+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGhlaWdodD1cIjE1XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvc3Rhci5zdmdcIn0gYWx0PVwic3RhclwiLz48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0yXCI+SSBkb24ndCBnZW5lcmFsbHkgd3JpdGUgcmV2aWV3cyBidXQgRG9jcHJpbWUgcmVhbGx5IGRlc2VydmVzIDUgc3RhcnMuIEkgaGFkIGJlZW4gc3RydWdnbGluZyB0byBmaW5kIGEgZGVybWF0b2xvZ2lzdCBpbiBteSBhcmVhLCBkaWQgR29vZ2xlIHNlYXJjaCwgYXNrZWQgYXJvdW5kIGZyb20gZnJpZW5kcyBidXQgZGlkbid0IGZpbmQgb25lIGFzIHBlciBteSBleHBlY3RhdGlvbnMuIFRoaXMgYXBwIHNob3dlZCBtZSB0aGUgb25lIGNsaW5pYyB3aGljaCBpcyBub3Qgb24gR29vZ2xlIHNlYXJjaC4gSSBib29rZWQgdGhlIGFwcG9pbnRtZW50IGltbWVkaWF0ZWx5LiBJdCdzIGp1c3QgYSBncmVhdCBleHBlcmllbmNlLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgaGVpZ2h0PVwiMjBcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9nLXBsYXkucG5nXCJ9IGFsdD1cImdvb2dsZS1wbGF5XCIvPiAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBjb2wtc20tNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3QtaW1nLWJsb2NrIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBmdy01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3Byb2ZpbGUtaW1nLnBuZ1wifSBhbHQ9XCJuYW1lXCIvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlNTPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPlNvbmFtIFNpbmhhIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtLWNlbnRlciBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBoZWlnaHQ9XCIxNVwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3N0YXIuc3ZnXCJ9IGFsdD1cInN0YXJcIi8+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGhlaWdodD1cIjE1XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvc3Rhci5zdmdcIn0gYWx0PVwic3RhclwiLz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgaGVpZ2h0PVwiMTVcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zdGFyLnN2Z1wifSBhbHQ9XCJzdGFyXCIvPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBoZWlnaHQ9XCIxNVwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3N0YXIuc3ZnXCJ9IGFsdD1cInN0YXJcIi8+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGhlaWdodD1cIjE1XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvZ3JleS1zdGFyLnN2Z1wifSBhbHQ9XCJzdGFyXCIvPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTJcIj5JIGJvb2tlZCBwcmV2ZW50aXZlIGhlYWx0aCBwYWNrYWdlcyBmb3IgbXkgcGFyZW50cyBsaXZpbmcgaW4gRGVsaGkuIEkgYW0gc28gZ2xhZCB0aGF0IEkgY2FuIHRha2UgY2FyZSBvZiB0aGVpciBoZWFsdGggYnkgc2l0dGluZyBpbiBCYW5nYWxvcmUuIFRoZXkgY29sbGVjdGVkIHRoZSBibG9vZCBzYW1wbGUgZnJvbSBteSBwYXJlbnQncyBob21lIGFuZCBzZW50IHRoZSByZXBvcnQgb24gZW1haWwgd2hpY2ggd2FzIHJldmlld2VkIGJ5IHRoZWlyIERvY3Rvci4gSGUgcHJlc2NyaWJlZCBzb21lIG1lZGljaW5lcyB0byBteSBwYXJlbnRzIGFuZCBJIGdvdCAyMyUgb2ZmIG9uIG1lZGljaW5lIG9ubGluZSBkZWxpdmVyeS4gSGFkIGFuIG92ZXJhbGwgYW1hemluZyBleHBlcmllbmNlITwvcD5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgaGVpZ2h0PVwiMjBcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9nLXBsYXkucG5nXCJ9IGFsdD1cImdvb2dsZS1wbGF5XCIvPiAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7Lyogc2xpZGVyIGJ1dHRvbnMgKi99XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwa2ctYnRubGZ0IGQtbm9uZVwiICBpZD17YHN0YXRpY19yZXZpZXdfYmxja19SaWdodEFycm93X2hzcHRsYH0gb25DbGljaz17KCk9PnNjcm9sbCgnbGVmdCcpfT4gXG4gICAgICAgICAgICAgICAgPGltZyBoZWlnaHQ9XCIxMlwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NvbG9yLWNoZXYuc3ZnXCJ9IGFsdD1cImNoZXYtbGVmdFwiLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBrZy1idG5yZ3RcIiBpZD17YHN0YXRpY19yZXZpZXdfYmxja19sZWZ0QXJyb3dfaHNwdGxgfSBvbkNsaWNrPXsoKT0+c2Nyb2xsKCdyaWdodCcpfT4gXG4gICAgICAgICAgICAgICAgPGltZyBoZWlnaHQ9XCIxMlwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NvbG9yLWNoZXYuc3ZnXCJ9IGFsdD1cImNoZXYtcmlnaHRcIi8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cblx0XHQpXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcblxuY2xhc3MgQm9va2luZ0NvbmZpcm1hdGlvblBvcHVwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1wb3B1cC1vdmVybGF5XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLXBvcHVwIHZpcC1zcmNoLXBvcC1taW5cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBwYWRpaW5nLXNyY2gtZWxcIj5cblx0XHRcdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInNyY2gtZWwtY29uZW50XCI+e3RoaXMucHJvcHMuaXNfZ29sZD8nQ29uZmlybSBkZWxldGUgbWVtYmVyPyc6J0RvIHlvdSB3aXNoIHRvIGNvbnRpbnVlPyd9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLWJ0bi1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5wcmljZUNvbmZpcm1hdGlvblBvcHVwLmJpbmQodGhpcywgdHJ1ZSl9PlllczwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLnByaWNlQ29uZmlybWF0aW9uUG9wdXAuYmluZCh0aGlzLCBmYWxzZSl9Pk5vPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdC8qKHRoaXMucHJvcHMuaXNfdmlwX2FwcGxpY2FibGUgfHwgdGhpcy5wcm9wcy5pc19pbnN1cmFuY2VfYXBwbGljYWJsZSkgfHwgdGhpcy5wcm9wcy5pc0NhcnQgfHwgdGhpcy5wcm9wcy5pc0xhYj9cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IHBhZGlpbmctc3JjaC1lbFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmlGcmFtZVBvcHVwID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtcnQtMjAgdGV4dC1jZW50ZXIgZnctNTAwXCI+V2UgYXJlIHJlZGlyZWN0aW5nIHlvdSB0byBQaGFybUVhc3kgd2Vic2l0ZSBpbiAzIHNlY29uZHMuLi48L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic3JjaC1lbC1jb25lbnRcIj5EbyB5b3Ugd2lzaCB0byBjb250aW51ZT88L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1idG4tY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5wcmljZUNvbmZpcm1hdGlvblBvcHVwLmJpbmQodGhpcywgdHJ1ZSl9PlllczwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMucHJpY2VDb25maXJtYXRpb25Qb3B1cC5iaW5kKHRoaXMsIGZhbHNlKX0+Tm88L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDpcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ2aXAtYmFubmVyLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInZpcC1iYW5uZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZCB2cC1jbHMtaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXAtcG9wLWNscy5zdmcnfSBvbkNsaWNrPXt0aGlzLnByb3BzLmJhbm5lckNvbmZpcm1hdGlvblBvcHVwLmJpbmQodGhpcyxmYWxzZSl9Lz5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZCB2cC1ibnItaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXAtaW1nLXBvcC5wbmcnfSAvPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9wLWJuci10eHRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInZwLWJuci1rbm93LXR4dFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIFx0J0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdCb29raW5nUGFnZVZpcEJhbm5lckNsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnYm9va2luZ3BhZ2UtdmlwLWNsaWNrJ1xuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgIFx0fVxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgIFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy92aXAtY2x1Yi1kZXRhaWxzP3NvdXJjZT1ib29raW5ncGFnZSZsZWFkX3NvdXJjZT1ib29raW5ncGFnZScpIH19Pktub3cgbW9yZSBhYm91dCBEb2NwcmltZSBWSVA8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ2cC1ibnItc3ViLXR4dFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuYmFubmVyQ29uZmlybWF0aW9uUG9wdXAuYmluZCh0aGlzLHRydWUpfT5Ob3QgSW50ZXJlc3RlZD8gQ29udGludWUgQm9va2luZyA8aW1nIHN0eWxlPXt7d2lkdGg6JzdweCd9fSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcC1yZ2h0LnN2Zyd9IC8+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PiovXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29raW5nQ29uZmlybWF0aW9uUG9wdXAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgY2xlYXJBbGxUZXN0cywgdG9nZ2xlT1BEQ3JpdGVyaWEsIHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhLCByZXNldEZpbHRlcnMsIGdldFVzZXJQcm9maWxlLCBmZXRjaEFydGljbGVzLCBmZXRjaEhlYXRsaFRpcCwgbG9hZE9QRENvbW1vbkNyaXRlcmlhLCBsb2FkTGFiQ29tbW9uQ3JpdGVyaWFzLCBjbGVhckV4dHJhVGVzdHMsIGdldFNwZWNpYWxpdHlGb290ZXJEYXRhLCBzZWxlY3RTZWFyY2hUeXBlLCBnZXRPZmZlckxpc3QsIHNldFBhY2thZ2VJZCwgZ2V0VXBDb21pbmdBcHBvaW50bWVudCwgcmVzZXRQa2dDb21wYXJlLCB0b2dnbGVJUERDcml0ZXJpYSwgbG9hZE9QREluc3VyYW5jZSwgbWVyZ2VJcGRDcml0ZXJpYSwgZ2V0TmVhcmJ5SG9zcGl0YWxzLCBjbGVhclZpcFNlbGVjdGVkUGxhbiwgTm9uSXBkQm9va2luZ0xlYWQgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuXG5pbXBvcnQgSG9tZVZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0hvbWUnXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbWVyZ2VTdGF0ZTogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkRGF0YShzdG9yZSwgbWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtzdG9yZS5kaXNwYXRjaChsb2FkT1BEQ29tbW9uQ3JpdGVyaWEoKSksIHN0b3JlLmRpc3BhdGNoKGxvYWRMYWJDb21tb25Dcml0ZXJpYXMoKSksIHN0b3JlLmRpc3BhdGNoKGdldE5lYXJieUhvc3BpdGFscygpKSBdKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHsgfSlcbiAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgcm91dGVyOiAoKSA9PiBudWxsXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIC8vSWYgdXNlciBpcyBsb2dnZWQgaW4gLGZldGNoIHVzZXIgZGF0YVxuICAgICAgICBpZiAoU1RPUkFHRS5jaGVja0F1dGgoKSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRVc2VyUHJvZmlsZSgpXG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldFVwQ29taW5nQXBwb2ludG1lbnQoKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhpcy5wcm9wcy5mZXRjaEhlYXRsaFRpcCgpXG4gICAgICAgIC8vIHRoaXMucHJvcHMuZmV0Y2hBcnRpY2xlcygpXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5jb21tb25fdGVzdHMubGVuZ3RoIHx8ICF0aGlzLnByb3BzLmNvbW1vbl9wYWNrYWdlLmxlbmd0aCB8fCAhdGhpcy5wcm9wcy5zcGVjaWFsaXphdGlvbnMubGVuZ3RoIHx8ICh0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLmxvY2FsaXR5KSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBsZXQgZXh0cmFEYXRhID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbjogdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5nZXROZWFyYnlIb3NwaXRhbHMoZXh0cmFEYXRhKTtcbiAgICAgICAgLy8gaWYoISAodGhpcy5wcm9wcy5jb21tb25fdGVzdHMgJiYgdGhpcy5wcm9wcy5jb21tb25fdGVzdHMubGVuZ3RoKSApe1xuICAgICAgICAvLyAgICAgdGhpcy5wcm9wcy5sb2FkTGFiQ29tbW9uQ3JpdGVyaWFzKClcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLnByb3BzLmxvYWRMYWJDb21tb25Dcml0ZXJpYXMoKVxuICAgICAgICAvLyB0aGlzLnByb3BzLmxvYWRPUERJbnN1cmFuY2UodGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKVxuICAgICAgICB0aGlzLnByb3BzLmxvYWRPUERDb21tb25Dcml0ZXJpYSh0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24pXG5cbiAgICAgICAgdGhpcy5wcm9wcy5yZXNldEZpbHRlcnMoKVxuICAgICAgICB0aGlzLnByb3BzLmNsZWFyRXh0cmFUZXN0cygpXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21lcmdlU3RhdGU6IHRydWV9KVxuICAgICAgICB9LDEwMClcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8SG9tZVZpZXcgey4uLnRoaXMucHJvcHN9IHsuLi50aGlzLnN0YXRlfS8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHBhc3NlZFByb3BzKSA9PiB7XG4gICAgLyoqXG4gICAgICogaW5pdGlhbFNlcnZlckRhdGEgaXMgc2VydmVyIHJlbmRlcmVkIGFzeW5jIGRhdGEgcmVxdWlyZWQgYnVpbGQgaHRtbCBvbiBzZXJ2ZXIuIFxuICAgICAqL1xuICAgIGxldCBpbml0aWFsU2VydmVyRGF0YSA9IG51bGxcbiAgICBsZXQgeyBzdGF0aWNDb250ZXh0IH0gPSBwYXNzZWRQcm9wc1xuICAgIGlmIChzdGF0aWNDb250ZXh0ICYmIHN0YXRpY0NvbnRleHQuZGF0YSkge1xuICAgICAgICBpbml0aWFsU2VydmVyRGF0YSA9IHN0YXRpY0NvbnRleHQuZGF0YVxuICAgIH1cblxuICAgIGxldCB7XG4gICAgICAgIHByb2ZpbGVzLCBzZWxlY3RlZFByb2ZpbGUsIG5ld05vdGlmaWNhdGlvbiwgbm90aWZpY2F0aW9ucywgYXJ0aWNsZXMsIGhlYWx0aFRpcHMsIGRldmljZV9pbmZvLCBvZmZlckxpc3QsIHVwY29taW5nX2FwcG9pbnRtZW50cywgaXNfaXBkX2Zvcm1fc3VibWl0dGVkLCBkZWZhdWx0UHJvZmlsZSwgaXNfYW55X3VzZXJfYnV5X2dvbGQsIHVzZXJfZGV0YWlsX2ZldGNoZWRcbiAgICB9ID0gc3RhdGUuVVNFUlxuXG4gICAgY29uc3Qge1xuICAgICAgICBMT0FERURfU0VBUkNIX0NSSVRFUklBX0xBQixcbiAgICAgICAgY29tbW9uX3Rlc3RzLFxuICAgICAgICBjb21tb25fcGFja2FnZSxcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgY29tcGFyZV9wYWNrYWdlc1xuICAgIH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfTEFCU1xuICAgIGxldCBmaWx0ZXJDcml0ZXJpYV9sYWIgPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfTEFCUy5maWx0ZXJDcml0ZXJpYVxuXG4gICAgY29uc3Qge1xuICAgICAgICBMT0FERURfU0VBUkNIX0NSSVRFUklBX09QRCxcbiAgICAgICAgc3BlY2lhbGl6YXRpb25zLFxuICAgICAgICBpcGRfcHJvY2VkdXJlcyxcbiAgICAgICAgdG9wX2hvc3BpdGFscyxcbiAgICAgICAgY29tbW9uX3NldHRpbmdzLFxuICAgICAgICBwYWNrYWdlX2NhdGVnb3JpZXMsXG4gICAgICAgIG5lYXJieUhvc3BpdGFsc1xuICAgIH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfT1BEXG4gICAgXG4gICAgbGV0IGZpbHRlckNyaXRlcmlhX29wZCA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9PUEQuZmlsdGVyQ3JpdGVyaWFcblxuICAgIGxldCB7XG4gICAgICAgIHN0YXRpY19mb290ZXJfZGF0YVxuICAgIH0gPSBzdGF0ZS5ET0NUT1JfU0VBUkNIXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9maWxlcywgc2VsZWN0ZWRQcm9maWxlLCBuZXdOb3RpZmljYXRpb24sIG5vdGlmaWNhdGlvbnMsIGFydGljbGVzLCBoZWFsdGhUaXBzLCBjb21tb25fdGVzdHM6IGNvbW1vbl90ZXN0cyB8fCBbXSwgc3BlY2lhbGl6YXRpb25zOiBzcGVjaWFsaXphdGlvbnMgfHwgW10sIHNlbGVjdGVkTG9jYXRpb24sIGZpbHRlckNyaXRlcmlhX2xhYiwgZmlsdGVyQ3JpdGVyaWFfb3BkLCBkZXZpY2VfaW5mbywgY29tbW9uX3BhY2thZ2U6IGNvbW1vbl9wYWNrYWdlIHx8IFtdLCBpbml0aWFsU2VydmVyRGF0YSwgb2ZmZXJMaXN0LCB1cGNvbWluZ19hcHBvaW50bWVudHMsIGNvbXBhcmVfcGFja2FnZXMsIGlwZF9wcm9jZWR1cmVzLCB0b3BfaG9zcGl0YWxzLCBjb21tb25fc2V0dGluZ3MsIGlzX2lwZF9mb3JtX3N1Ym1pdHRlZCwgcGFja2FnZV9jYXRlZ29yaWVzLCBuZWFyYnlIb3NwaXRhbHMsIHN0YXRpY19mb290ZXJfZGF0YSwgZGVmYXVsdFByb2ZpbGUsIGlzX2FueV91c2VyX2J1eV9nb2xkLCB1c2VyX2RldGFpbF9mZXRjaGVkXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBsb2FkTGFiQ29tbW9uQ3JpdGVyaWFzOiAoKSA9PiBkaXNwYXRjaChsb2FkTGFiQ29tbW9uQ3JpdGVyaWFzKCkpLFxuICAgICAgICBsb2FkT1BEQ29tbW9uQ3JpdGVyaWE6IChjaXR5KSA9PiBkaXNwYXRjaChsb2FkT1BEQ29tbW9uQ3JpdGVyaWEoY2l0eSkpLFxuICAgICAgICB0b2dnbGVPUERDcml0ZXJpYTogKHR5cGUsIGNyaXRlcmlhLCBmb3JjZUFkZCwgZmlsdGVycykgPT4gZGlzcGF0Y2godG9nZ2xlT1BEQ3JpdGVyaWEodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkLCBmaWx0ZXJzKSksXG4gICAgICAgIHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhOiAodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkLCBmaWx0ZXJzKSA9PiBkaXNwYXRjaCh0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQsIGZpbHRlcnMpKSxcbiAgICAgICAgZ2V0VXNlclByb2ZpbGU6ICgpID0+IGRpc3BhdGNoKGdldFVzZXJQcm9maWxlKCkpLFxuICAgICAgICBmZXRjaEhlYXRsaFRpcDogKCkgPT4gZGlzcGF0Y2goZmV0Y2hIZWF0bGhUaXAoKSksXG4gICAgICAgIGZldGNoQXJ0aWNsZXM6ICgpID0+IGRpc3BhdGNoKGZldGNoQXJ0aWNsZXMoKSksXG4gICAgICAgIHJlc2V0RmlsdGVyczogKCkgPT4gZGlzcGF0Y2gocmVzZXRGaWx0ZXJzKCkpLFxuICAgICAgICBjbGVhckV4dHJhVGVzdHM6ICgpID0+IGRpc3BhdGNoKGNsZWFyRXh0cmFUZXN0cygpKSxcbiAgICAgICAgZ2V0U3BlY2lhbGl0eUZvb3RlckRhdGE6IChjYikgPT4gZGlzcGF0Y2goZ2V0U3BlY2lhbGl0eUZvb3RlckRhdGEoY2IpKSxcbiAgICAgICAgc2VsZWN0U2VhcmNoVHlwZTogKHR5cGUpID0+IGRpc3BhdGNoKHNlbGVjdFNlYXJjaFR5cGUodHlwZSkpLFxuICAgICAgICBnZXRPZmZlckxpc3Q6IChsYXQsIGxvbmcpID0+IGRpc3BhdGNoKGdldE9mZmVyTGlzdChsYXQsIGxvbmcpKSxcbiAgICAgICAgY2xlYXJBbGxUZXN0czogKCkgPT4gZGlzcGF0Y2goY2xlYXJBbGxUZXN0cygpKSxcbiAgICAgICAgc2V0UGFja2FnZUlkOiAocGFja2FnZV9pZCwgaXNIb21lUGFnZSkgPT4gZGlzcGF0Y2goc2V0UGFja2FnZUlkKHBhY2thZ2VfaWQsIGlzSG9tZVBhZ2UpKSxcbiAgICAgICAgZ2V0VXBDb21pbmdBcHBvaW50bWVudDogKCkgPT4gZGlzcGF0Y2goZ2V0VXBDb21pbmdBcHBvaW50bWVudCgpKSxcbiAgICAgICAgcmVzZXRQa2dDb21wYXJlOiAoKSA9PiBkaXNwYXRjaChyZXNldFBrZ0NvbXBhcmUoKSksXG4gICAgICAgIHRvZ2dsZUlQRENyaXRlcmlhOiAoY3JpdGVyaWEsIGZvcmNlQWRkKSA9PiBkaXNwYXRjaCh0b2dnbGVJUERDcml0ZXJpYShjcml0ZXJpYSwgZm9yY2VBZGQpKSxcbiAgICAgICAgbG9hZE9QREluc3VyYW5jZTogKGNpdHkpID0+IGRpc3BhdGNoKGxvYWRPUERJbnN1cmFuY2UoY2l0eSkpLFxuICAgICAgICBtZXJnZUlwZENyaXRlcmlhOiAoZmlsdGVyQ3JpdGVyaWEpPT4gZGlzcGF0Y2gobWVyZ2VJcGRDcml0ZXJpYShmaWx0ZXJDcml0ZXJpYSkpLFxuICAgICAgICBnZXROZWFyYnlIb3NwaXRhbHM6IChwYXJhbXMsIGNiKSA9PiBkaXNwYXRjaChnZXROZWFyYnlIb3NwaXRhbHMocGFyYW1zLCBjYikpLFxuICAgICAgICBjbGVhclZpcFNlbGVjdGVkUGxhbjooKSA9PiBkaXNwYXRjaChjbGVhclZpcFNlbGVjdGVkUGxhbigpKSxcbiAgICAgICAgTm9uSXBkQm9va2luZ0xlYWQ6KGRhdGEsY2IpID0+ZGlzcGF0Y2goTm9uSXBkQm9va2luZ0xlYWQoZGF0YSwgY2IpKSxcblxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShIb21lKTtcbiIsIlxuY29uc3QgQ1JJVEVPID0ge1xuXG5cdHNlbmREYXRhKGRhdGEgKXtcblx0XHR0cnl7XG5cblx0XHRcdGlmKHdpbmRvdyl7XG5cdFx0XHRcblx0XHRcdFx0d2luZG93LmNyaXRlb19xID0gd2luZG93LmNyaXRlb19xIHx8IFtdXG5cdFx0XHRcdHZhciBkZXZpY2VUeXBlID0gbmF2aWdhdG9yPy9pUGFkLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpID8gXCJ0XCIgOiAvTW9iaWxlfGlQKGhvbmV8b2QpfEFuZHJvaWR8QmxhY2tCZXJyeXxJRU1vYmlsZXxTaWxrLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpID8gXCJtXCIgOiBcImRcIjonJztcblxuXHRcdFx0XHR3aW5kb3cuY3JpdGVvX3EucHVzaCh7ICdldmVudCc6IFwic2V0QWNjb3VudFwiLCBhY2NvdW50OiA1NzQzOX0sIC8vIFlvdSBzaG91bGQgbmV2ZXIgdXBkYXRlIHRoaXMgbGluZVxuXHRcdFx0XHR7J2V2ZW50JzogXCJzZXRFbWFpbFwiLCAnZW1haWwnOiAnJ30sXG5cdFx0XHRcdHsgJ2V2ZW50JzogXCJzZXRTaXRlVHlwZVwiLCB0eXBlOiBkZXZpY2VUeXBlfSxcblx0XHRcdFx0ZGF0YVxuXHRcdFx0XHQpXG5cdFx0XHR9XG5cblx0XHR9Y2F0Y2goZSl7XG5cblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ1JJVEVPIl0sInNvdXJjZVJvb3QiOiIifQ==