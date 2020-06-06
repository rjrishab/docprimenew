exports.ids = [28];
exports.modules = {

/***/ "./dev/js/components/commons/Home/Accordian.js":
/*!*****************************************************!*\
  !*** ./dev/js/components/commons/Home/Accordian.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Accordian extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            accordianShow: false
        };
    }

    toggleAccordian() {
        this.setState(prevState => ({ accordianShow: !prevState.accordianShow }));
    }

    render() {
        return _react2.default.createElement(
            "div",
            { className: "container-fluid p-0" },
            _react2.default.createElement(
                "div",
                { className: "row" },
                _react2.default.createElement(
                    "div",
                    { className: "col-12" },
                    _react2.default.createElement(
                        "div",
                        { className: "dp-accordian" },
                        _react2.default.createElement(
                            "div",
                            { className: "acdn-title", onClick: () => this.toggleAccordian() },
                            _react2.default.createElement(
                                "h2",
                                { className: "fw-500" },
                                "Know more about Docprime"
                            ),
                            _react2.default.createElement("img", { className: this.state.accordianShow ? "acdn-arrow-up" : "acdn-arrow", src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: this.state.accordianShow ? "acdn-body mrt-10 acdn-block" : "acdn-body mrt-10 acdn-none" },
                            _react2.default.createElement("hr", { className: "acdn-hr" }),
                            _react2.default.createElement(
                                "p",
                                { className: "text-sm mrb-10" },
                                "The enormously low ratio of doctors to patients is one of the biggest challenges for the country\u2019s healthcare system. And that\u2019s why docprime endeavors to bridge the gap between doctors and patients with our cutting-edge technology powered platform to deliver high-quality healthcare anytime anywhere."
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "text-sm mrb-10" },
                                "A group company of Policybazaar, docprime gives you access to highly skilled registered medical practitioner so that you can avail hospital-quality healthcare right from the comfort of your home. The company aims to bring back the concept of a family doctor with its ever-so-growing network of healthcare professionals to make high-quality medical assistance available right at your fingertips."
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "text-sm mrb-10" },
                                "With a team of highly-skilled doctors, AI-enabled Chatbot technology and, an easy-to-navigate, user-friendly interface, docprime is all set to beat arduous health challenges and ensure easy access to qualified doctors for billions of people, creating an experience that\u2019s truly delightful for both end-users and healthcare experts."
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "fw-500 mrb-10 acdn-heading" },
                                "Docprime for Patients"
                            ),
                            _react2.default.createElement(
                                "h2",
                                { className: "acdn-subheading" },
                                "Free Online Doctor Consultation"
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "text-sm mrb-10" },
                                "Ask a Doctor & get answers for your health queries for free or indulge in a one-on-one online consultation, at any time and from anywhere. Simply visit our website and start interacting with best-in-class healthcare experts from various specialties."
                            ),
                            _react2.default.createElement(
                                "h2",
                                { className: "acdn-subheading" },
                                "Book Doctor Appointments Online (upto 50% off)"
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "text-sm mrb-10" },
                                "Why wait in long queues to book an appointment with the doctor of your choice, when you can easily do it online and that too at a much lower price?Find some of the best doctors near you; check their doctor profiles, and book an appointment online with the doctor of your choice get 50% off on booking fees, all with just a few clicks and in a matter of a few minutes."
                            ),
                            _react2.default.createElement(
                                "h2",
                                { className: "acdn-subheading" },
                                "Book Tests at Diagnostic Centres & Labs (upto 50% off)"
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "text-sm mrb-10" },
                                "Discover the best diagnostic centres near you from our huge inventory and book appointments at the diagnostic centre of your choice, in just a few clicks. So book diagnostic tests today and get up to 50% off."
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "fw-500 mrb-10 acdn-heading" },
                                "Docprime for Doctors"
                            ),
                            _react2.default.createElement(
                                "h2",
                                { className: "acdn-subheading" },
                                "Widen Your Reach"
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "text-sm mrb-10" },
                                "Are you a doctor or a healthcare expert? Use docprime to increase your visibility manifold, reach out to a wider range of patients and grow your practice without having to run from pillar to post."
                            ),
                            _react2.default.createElement(
                                "h2",
                                { className: "acdn-subheading" },
                                "Simplify Your Practice"
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "text-sm mrb-10" },
                                "Take the hassle out of your practice and focus better on your patients. Automate everything right from appointment management to payment tracking and just focus on providing the highest quality of treatment to their patients."
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "fw-500 mrb-10 acdn-heading" },
                                "Docprime Services"
                            ),
                            _react2.default.createElement(
                                "h2",
                                { className: "acdn-subheading" },
                                "Book Lab Test"
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "text-sm mrb-10" },
                                "Book lab test right from the comfort of your home. Get amazing discounts on lab tests and get samples collected and report delivered, right at your doorsteps."
                            ),
                            _react2.default.createElement(
                                "h2",
                                { className: "acdn-subheading" },
                                "Health Feed"
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "text-sm mrb-10" },
                                "Our aim to ensure a healthy lifestyle for everyone and in order to do that our knowledge-packed health feed offers information on various diseases, symptoms, and medicines."
                            ),
                            _react2.default.createElement(
                                "h2",
                                { className: "fw-500 mrb-10 acdn-heading" },
                                "Questions You May have:"
                            ),
                            _react2.default.createElement(
                                "h3",
                                { className: "fw-500 acdn-ques" },
                                "Question 1: I have a medical question. Can I ask it for free?"
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "text-sm mrb-10" },
                                _react2.default.createElement(
                                    "strong",
                                    null,
                                    "Answer:"
                                ),
                                " Yes! You can ask your medical questions for free. Alternatively, you may also download docprime App, available at Google Play Store and App Store, for free and ask a free health question to our doctors. Typically, our doctors will answer your query within 24 working hours after receiving your query."
                            ),
                            _react2.default.createElement(
                                "h3",
                                { className: "fw-500 acdn-ques" },
                                "Question 2: Can doctors at docprime help me with my medical issues?"
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "text-sm mrb-10" },
                                _react2.default.createElement(
                                    "strong",
                                    null,
                                    "Answer:"
                                ),
                                " Our team of doctors is dedicated to helping you understand your medical issues and identify the next steps that may include lab tests, medications, or tips to improve medical conditions. No matter what your medical questions are, our doctors will be able to point you in the right direction towards the improvement of your health."
                            ),
                            _react2.default.createElement(
                                "h3",
                                { className: "fw-500 acdn-ques" },
                                "Question 3: What if docprime doctors don\u2019t get me a response?"
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "text-sm mrb-10" },
                                _react2.default.createElement(
                                    "strong",
                                    null,
                                    "Answer:"
                                ),
                                " Rest assured, our team of doctors will never miss out on responding to your medical questions. If you, still, don\u2019t get a response, do leave us a message at our social media pages or call us up at our toll-free number and our team of experts will love to assist you."
                            ),
                            _react2.default.createElement(
                                "h3",
                                { className: "fw-500 acdn-ques" },
                                "Question 4: Are doctors on your team qualified?"
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "text-sm mrb-10" },
                                _react2.default.createElement(
                                    "strong",
                                    null,
                                    "Answer:"
                                ),
                                " We have a hand-picked highly-qualified team of doctors across various specialties. Rest assured, any doctor that you will be consulting at docprime will be a verified, highly-skilled healthcare practitioner."
                            ),
                            _react2.default.createElement(
                                "h3",
                                { className: "fw-500 acdn-ques" },
                                "Question 5: Is my personal information safe and is the consultation on docprime private?"
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "text-sm mrb-10" },
                                _react2.default.createElement(
                                    "strong",
                                    null,
                                    "Answer:"
                                ),
                                " Yes! We respect the privacy of every individual. That\u2019s why we make sure that all your private and personal information is not shared with any third-party. In addition, every consultation on docprime is private and confidential."
                            )
                        )
                    )
                )
            )
        );
    }
}

exports.default = Accordian;

/***/ }),

/***/ "./dev/js/components/commons/Home/HomePagePackageWidget.js":
/*!*****************************************************************!*\
  !*** ./dev/js/components/commons/Home/HomePagePackageWidget.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HomePagePackageWidget extends _react2.default.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    navigateTo(where, e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }

        if (this.props.type) {
            this.props.selectSearchType(this.props.type);
        }
        this.props.historyObj.push(where);
    }

    scroll(type) {
        var elmnt = document.getElementById("pkgSlider");
        let outerDivWidth = document.getElementsByClassName("pkgSliderContainer")[0].offsetWidth;
        let childDivWidth = document.getElementsByClassName('pkgCardsList')[0].offsetWidth;
        let cardCount = document.getElementsByClassName('pkgCardsList')[0].childElementCount;
        let cardWidth = Math.ceil(childDivWidth / cardCount);

        let leftScroll = document.getElementById("pkgSlider").scrollLeft;
        let scrollVal = Math.floor(outerDivWidth / cardWidth) * cardWidth;
        let cardEnd = cardCount * cardWidth;

        if (type == 'right') {
            elmnt.scroll({ left: leftScroll + scrollVal, behavior: 'smooth' });
            if (cardEnd <= leftScroll + scrollVal + outerDivWidth) {
                document.getElementById('leftArrow').classList.add("d-none");
            }
            document.getElementById('RightArrow').classList.remove("d-none");
        } else {
            elmnt.scroll({ left: leftScroll - scrollVal, behavior: 'smooth' });
            if (leftScroll - scrollVal <= 0) {
                document.getElementById('RightArrow').classList.add("d-none");
            }
            document.getElementById('leftArrow').classList.remove("d-none");
        }
    }

    goldClicked() {
        let data = {
            'Category': 'ConsumerApp', 'Action': 'HomePackageGoldClicked', 'CustomerID': GTM.getUserId() || '', 'leadid': 0, 'event': 'vip-homepage-package-gold-clicked'
        };
        GTM.sendEvent({ data: data });
        this.props.historyObj.push('/vip-gold-details?is_gold=true&source=homepagepackagegoldlisting&lead_source=Docprime');
    }

    render() {
        return _react2.default.createElement(
            "div",
            { className: "pakg-slider-container mt-10 mb-3" },
            _react2.default.createElement(
                "div",
                { className: "pkgSliderHeading" },
                _react2.default.createElement(
                    "h5",
                    null,
                    "Popular Health Packages"
                ),
                _react2.default.createElement(
                    "span",
                    { onClick: this.navigateTo.bind(this, this.props.navTo) },
                    "View All"
                )
            ),
            _react2.default.createElement(
                "div",
                { className: "pkgSliderContainer", id: "pkgSlider" },
                _react2.default.createElement(
                    "div",
                    { className: "pkgCardsList d-inline-flex" },
                    this.props.list.map((listItem, i) => {
                        return _react2.default.createElement(
                            "div",
                            { className: `pkgcustCards ${type ? '' : ''}`, key: i, onClick: this.props.searchFunc.bind(this, listItem, true) },
                            _react2.default.createElement(
                                "div",
                                { className: "pkgcardImgCont" },
                                _react2.default.createElement("img", { className: "img-fluid", src: listItem.icon })
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "pkgtstName" },
                                listItem.name,
                                " ",
                                listItem.no_of_tests > 0 ? `(${listItem.no_of_tests} tests)` : ''
                            ),

                            //for login, gold enabled member or vip enabled member
                            listItem.vip && (listItem.vip.is_gold_member || listItem.vip.is_vip_member) && listItem.vip.covered_under_vip ? _react2.default.createElement(
                                "div",
                                { className: "pkg-card-price-offr" },
                                _react2.default.createElement(
                                    "div",
                                    { className: "pkg-prc-ct" },
                                    listItem.vip.is_gold_member ? _react2.default.createElement(
                                        "p",
                                        null,
                                        "\u20B9 ",
                                        listItem.vip.vip_amount + listItem.vip.vip_convenience_amount,
                                        _react2.default.createElement(
                                            "span",
                                            { className: "pkg-ofr-cut-prc" },
                                            "\u20B9 ",
                                            listItem.mrp
                                        ),
                                        _react2.default.createElement("img", { style: { width: '20px', 'marginLeft': '5px' }, src: "/assets" + '/img/gold-sm.png' })
                                    ) : _react2.default.createElement(
                                        "p",
                                        null,
                                        "\u20B9 ",
                                        listItem.vip.vip_amount,
                                        _react2.default.createElement(
                                            "span",
                                            { className: "pkg-ofr-cut-prc" },
                                            "\u20B9 ",
                                            listItem.mrp
                                        ),
                                        _react2.default.createElement("img", { style: { width: '20px', 'marginLeft': '5px' }, src: "/assets" + '/img/viplog.png' })
                                    )
                                )
                            ) : _react2.default.createElement(
                                _react2.default.Fragment,
                                null,
                                _react2.default.createElement(
                                    "div",
                                    { className: "pkg-card-price-offr" },
                                    listItem.discounted_price == listItem.mrp ? _react2.default.createElement(
                                        "div",
                                        { className: "pkg-prc-ct" },
                                        _react2.default.createElement(
                                            "p",
                                            null,
                                            "\u20B9 ",
                                            listItem.mrp
                                        )
                                    ) : _react2.default.createElement(
                                        "div",
                                        { className: "pkg-prc-ct" },
                                        _react2.default.createElement(
                                            "p",
                                            null,
                                            "\u20B9 ",
                                            listItem.discounted_price,
                                            _react2.default.createElement(
                                                "span",
                                                { className: "pkg-ofr-cut-prc" },
                                                "\u20B9 ",
                                                listItem.mrp
                                            )
                                        )
                                    ),
                                    parseInt((listItem.mrp - listItem.discounted_price) / listItem.mrp * 100) != 0 && listItem.discounted_price != listItem.mrp ? _react2.default.createElement(
                                        "span",
                                        { className: "pkg-hlth-offer" },
                                        parseInt((listItem.mrp - listItem.discounted_price) / listItem.mrp * 100),
                                        "% OFF"
                                    ) : ''
                                ),
                                !listItem.vip.is_gold_member && !listItem.vip.is_vip_member && listItem.discounted_price > listItem.vip.vip_convenience_amount + listItem.vip.vip_gold_price && listItem.vip.is_gold && listItem.vip.is_enable_for_vip ? _react2.default.createElement(
                                    "div",
                                    { className: "pkg-prc-ct home-screengoldprice", onClick: this.goldClicked.bind(this) },
                                    _react2.default.createElement("img", { style: { width: '32px', 'marginRight': '5px' }, src: "/assets" + '/img/gold-sm.png' }),
                                    _react2.default.createElement(
                                        "span",
                                        null,
                                        "Price"
                                    ),
                                    _react2.default.createElement(
                                        "p",
                                        { style: { color: 'black' } },
                                        "\u20B9 ",
                                        listItem.vip.vip_gold_price + listItem.vip.vip_convenience_amount
                                    ),
                                    _react2.default.createElement("img", { style: { transform: 'rotate(-90deg)', width: '10px', margin: '0px 10px 0px 0px' }, src: "/assets" + '/img/customer-icons/dropdown-arrow.svg' })
                                ) : ''
                            )
                        );
                    })
                )
            ),
            _react2.default.createElement(
                "div",
                { className: "pkglftRhtbtncont" },
                _react2.default.createElement(
                    "div",
                    { className: "pkg-btnlft d-none", id: "RightArrow", onClick: this.scroll.bind(this, 'left') },
                    _react2.default.createElement("img", { src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "pkg-btnrgt", id: "leftArrow", onClick: this.scroll.bind(this, 'right') },
                    _react2.default.createElement("img", { src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                )
            )
        );
    }
}

exports.default = HomePagePackageWidget;

/***/ }),

/***/ "./dev/js/components/commons/Home/HomePageProcedureWidgets.js":
/*!********************************************************************!*\
  !*** ./dev/js/components/commons/Home/HomePageProcedureWidgets.js ***!
  \********************************************************************/
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

class TopProcedureWidgets extends _react2.default.PureComponent {

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
            this.props.historyObj.push(`/${data.url}?showPopup=true`);
        } else {
            this.props.historyObj.push(`/ipdInfo?ipd_id=${data.id}&showPopup=true`);
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
                    'Top Procedures'
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'pkgSliderContainer', id: 'top_ipd' },
                _react2.default.createElement(
                    'div',
                    { className: 'pkgCardsList d-inline-flex sub-wd-cards top_ipd_list' },
                    this.props.top_data.map((data, i) => {
                        return _react2.default.createElement(
                            'a',
                            { href: data.url ? `${data.url}` : `ipdInfo?ipd_id=${data.id}`, className: 'pkgcustCards', key: this.props.mergeState ? i : data.url ? data.url : i, onClick: this.navigateTo.bind(this, data) },
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

/***/ "./dev/js/components/commons/Home/HomePageTopHospitals.js":
/*!****************************************************************!*\
  !*** ./dev/js/components/commons/Home/HomePageTopHospitals.js ***!
  \****************************************************************/
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

class TopHospitalWidgets extends _react2.default.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            mergedState: false
        };
    }

    componentDidMount() {
        if (!this.props.topHospital) {
            this.setState({ mergedState: true });
        }
    }

    navigateTo(data, e) {
        e.preventDefault();
        e.stopPropagation();
        let gtmData = {};
        if (this.props.topHospital) {
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

        /*if(this.props.is_ipd_form_submitted){
         }else {
            redirectUrl+= '&get_feedback=1'
        }*/

        this.props.historyObj.push(redirectUrl);
    }

    scroll(type) {
        let dataType = this.props.dataType;
        let dataList = `${this.props.dataType}_list`;
        var elmnt = document.getElementById(dataType);
        let outerDivWidth = elmnt.offsetWidth;
        let childDivWidth = document.getElementsByClassName(dataList)[0].offsetWidth;
        let cardCount = document.getElementsByClassName(dataList)[0].childElementCount;
        let cardWidth = Math.ceil(childDivWidth / cardCount);

        let leftScroll = document.getElementById(dataType).scrollLeft;
        let scrollVal = Math.floor(outerDivWidth / cardWidth) * cardWidth;
        let cardEnd = cardCount * cardWidth;

        if (type == 'right') {
            elmnt.scroll({ left: leftScroll + scrollVal, behavior: 'smooth' });
            if (cardEnd <= leftScroll + scrollVal + outerDivWidth) {
                document.getElementById(`${dataType}_leftArrow_hsptl`).classList.add("d-none");
            }
            document.getElementById(`${dataType}_RightArrow_hsptl`).classList.remove("d-none");
        } else {
            elmnt.scroll({ left: leftScroll - scrollVal, behavior: 'smooth' });
            if (leftScroll - scrollVal <= 0) {
                document.getElementById(`${dataType}_RightArrow_hsptl`).classList.add("d-none");
            }
            document.getElementById(`${dataType}_leftArrow_hsptl`).classList.remove("d-none");
        }
    }

    viewAllClicked() {
        this.props.nearbyHospitalViewAllClicked();
    }

    render() {

        let { topHeading, dataType, showViewAll } = this.props;
        return _react2.default.createElement(
            'div',
            { className: 'pakg-slider-container mb-10' },
            _react2.default.createElement(
                'div',
                { className: 'pkgSliderHeading' },
                _react2.default.createElement(
                    'h5',
                    null,
                    topHeading
                ),
                showViewAll && this.props.top_data.length >= 20 && _react2.default.createElement(
                    'span',
                    { onClick: () => this.viewAllClicked() },
                    'View All'
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'pkgSliderContainer', id: dataType },
                _react2.default.createElement(
                    'div',
                    { className: `pkgCardsList d-inline-flex sub-wd-cards ${dataType}_list` },
                    this.props.top_data.slice(0, 20).map((data, i) => {
                        return _react2.default.createElement(
                            'a',
                            { key: this.state.mergedState ? `${i}_list_${dataType}` : data.url ? data.url : `${data.id}_${dataType}`, href: data.url ? `/${data.url}` : `/ipd/hospital/${data.id}`, className: 'pkgcustCards', onClick: this.navigateTo.bind(this, data) },
                            _react2.default.createElement(
                                'div',
                                { className: 'pkgcardImgCont' },
                                _react2.default.createElement('img', { style: { width: 82 }, className: 'img-fluid', src: data.svg_icon ? data.svg_icon : data.logo })
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'pkgtstName' },
                                data.seo_title ? data.seo_title : data.h1_title ? data.h1_title : data.name
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
                    { className: 'pkg-btnlft d-none', id: `${dataType}_RightArrow_hsptl`, onClick: this.scroll.bind(this, 'left') },
                    _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'pkg-btnrgt', id: `${dataType}_leftArrow_hsptl`, onClick: this.scroll.bind(this, 'right') },
                    _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                )
            )
        );
    }
}

exports.default = TopHospitalWidgets;

/***/ }),

/***/ "./dev/js/components/commons/Home/upComingAppointment.js":
/*!***************************************************************!*\
  !*** ./dev/js/components/commons/Home/upComingAppointment.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UpComingAppointmentView extends _react2.default.Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            startX: 0,
            startY: 0,
            distX: 0,
            distY: 0
        };
    }

    showAppointment(appointment_type, appointment_id, e) {
        if (appointment_type == 'doctor') {
            this.props.history.push(`/opd/appointment/${appointment_id}`);
        } else {
            this.props.history.push(`/lab/appointment/${appointment_id}`);
        }
    }

    getTime(unix_timestamp) {
        let date = new Date(unix_timestamp);
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    getDate(unix_date) {
        let date = new Date(unix_date);
        let newDate = date.toDateString();
        return newDate;
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
        let totalAppointments = '';
        let curr_index;
        this.state.distX = touchobj.pageX - this.state.startX;
        this.state.distY = touchobj.pageY - this.state.startY;
        let elapsedTime = new Date().getTime() - startTime;
        if (elapsedTime <= 400) {
            if (Math.abs(this.state.distX) >= 50 && Math.abs(this.state.distY) <= 100) {
                if (this.state.distX < 0) {
                    if (this.props.upcoming_appointments) {
                        totalAppointments = this.props.upcoming_appointments.length;
                        curr_index = this.state.index;
                        curr_index = curr_index + 1;
                        if (curr_index >= totalAppointments) {
                            curr_index = 0;
                        }
                        this.setState({ index: curr_index });
                    }
                } else {
                    if (this.props.offerList) {
                        totalAppointments = this.props.upcoming_appointments.length;
                        curr_index = this.state.index;
                        curr_index = curr_index - 1;
                        if (curr_index < 0) {
                            curr_index = totalAppointments - 1;
                        }
                        this.setState({ index: curr_index });
                    }
                }
            }
        }
    }

    render() {

        if (this.props.upcoming_appointments && this.props.upcoming_appointments.length > 0) {
            let appointment = {};
            if (this.props.upcoming_appointments) {
                appointment = this.props.upcoming_appointments[this.state.index];
            }
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'card cstm-card aptmnt-card mb-3' },
                    _react2.default.createElement(
                        'div',
                        { className: 'child1', onTouchStart: this.onTouchStart.bind(this), onTouchMove: this.onTouchMove.bind(this), onTouchEnd: this.onTouchEnd.bind(this), onClick: this.showAppointment.bind(this, appointment.type, appointment.id) },
                        _react2.default.createElement(
                            'div',
                            { className: 'float-l leftBlock' },
                            _react2.default.createElement(
                                'div',
                                { className: 'float-l' },
                                _react2.default.createElement('img', { src: "/assets" + "/images/ic-time-date.png", alt: '' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'float-l' },
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    'Appointment for ',
                                    appointment.patient_name
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'date-time' },
                                    'On ',
                                    this.getDate(appointment.time_slot_start),
                                    ', ',
                                    this.getTime(appointment.time_slot_start),
                                    ' '
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    ' ',
                                    `with ${appointment.type == "doctor" ? 'Dr.' : ''} ${appointment.name}`
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'rightBlock' },
                            _react2.default.createElement(
                                'a',
                                { href: 'javascript:void(0);', className: 'anchr-img', onClick: this.showAppointment.bind(this, appointment.type, appointment.id) },
                                _react2.default.createElement('img', { src: "/assets" + "/images/right-arrow.svg", alt: '' })
                            )
                        )
                    ),
                    this.props.upcoming_appointments && this.props.upcoming_appointments.length > 1 ? _react2.default.createElement(
                        'div',
                        { className: 'carousel-indicators crsl-indicators cr-indicator' },
                        this.props.upcoming_appointments && this.props.upcoming_appointments.map((appointmentDots, i) => {
                            return _react2.default.createElement('span', { key: i, onClick: () => this.setState({ index: i }), className: this.state.index == i ? "active" : '' });
                        })
                    ) : ''
                )
            );
        } else {
            return _react2.default.createElement('div', null);
        }
    }
}

exports.default = UpComingAppointmentView;

/***/ }),

/***/ "./dev/js/components/diagnosis/searchPackages/packageCompare/packageCompareStrip.js":
/*!******************************************************************************************!*\
  !*** ./dev/js/components/diagnosis/searchPackages/packageCompare/packageCompareStrip.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _initialsPicture = __webpack_require__(/*! ../../../commons/initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

var _gtm = __webpack_require__(/*! ../../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _utils = __webpack_require__(/*! ../../../../helpers/utils.js */ "./dev/js/helpers/utils.js");

var _storage = __webpack_require__(/*! ../../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _constants = __webpack_require__(/*! constants */ "constants");

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PackageCompareStrip extends _react2.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  comparePackages() {
    if (this.props.compare_packages.length > 5) {
      _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Max 5 packages can be compared" });
    } else {
      let selectedPkgCompareIds = [];
      if (this.props.compare_packages) {
        this.props.compare_packages.map((packages, i) => {
          selectedPkgCompareIds.push(packages.id + '-' + packages.lab_id);
        });
      }
      this.props.history.push('/package/compare?package_ids=' + selectedPkgCompareIds);
    }
  }

  clearPackage() {
    this.props.resetPkgCompare();
  }

  render() {
    return _react2.default.createElement(
      'section',
      { className: 'compare-package-footer cm-footer' },
      _react2.default.createElement(
        'ul',
        { className: 'compare-packages-home' },
        _react2.default.createElement(
          'li',
          { className: 'hlth-txt' },
          this.props.compare_packages.length,
          ' Health Package Selected'
        ),
        _react2.default.createElement(
          'li',
          { className: 'li-btn-compare' },
          _react2.default.createElement(
            'a',
            { className: 'pkg-btn-nw', onClick: this.comparePackages.bind(this) },
            'Compare'
          ),
          _react2.default.createElement(
            'span',
            { className: '' },
            _react2.default.createElement('img', { src: 'https://cdn.docprime.com/cp/assets/img/icons/close.png', alt: '', onClick: this.clearPackage.bind(this) })
          )
        )
      )
    );
  }
}

exports.default = PackageCompareStrip;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvQWNjb3JkaWFuLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvSG9tZS9Ib21lUGFnZVBhY2thZ2VXaWRnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Ib21lL0hvbWVQYWdlUHJvY2VkdXJlV2lkZ2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvSG9tZVBhZ2VUb3BIb3NwaXRhbHMuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Ib21lL3VwQ29taW5nQXBwb2ludG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL3NlYXJjaFBhY2thZ2VzL3BhY2thZ2VDb21wYXJlL3BhY2thZ2VDb21wYXJlU3RyaXAuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2hlbHBlcnMvdXRpbHMuanMiXSwibmFtZXMiOlsiQWNjb3JkaWFuIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJhY2NvcmRpYW5TaG93IiwidG9nZ2xlQWNjb3JkaWFuIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJyZW5kZXIiLCJBU1NFVFNfQkFTRV9VUkwiLCJIb21lUGFnZVBhY2thZ2VXaWRnZXQiLCJQdXJlQ29tcG9uZW50IiwibmF2aWdhdGVUbyIsIndoZXJlIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidHlwZSIsInNlbGVjdFNlYXJjaFR5cGUiLCJoaXN0b3J5T2JqIiwicHVzaCIsInNjcm9sbCIsImVsbW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm91dGVyRGl2V2lkdGgiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib2Zmc2V0V2lkdGgiLCJjaGlsZERpdldpZHRoIiwiY2FyZENvdW50IiwiY2hpbGRFbGVtZW50Q291bnQiLCJjYXJkV2lkdGgiLCJNYXRoIiwiY2VpbCIsImxlZnRTY3JvbGwiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsVmFsIiwiZmxvb3IiLCJjYXJkRW5kIiwibGVmdCIsImJlaGF2aW9yIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiZ29sZENsaWNrZWQiLCJkYXRhIiwiR1RNIiwiZ2V0VXNlcklkIiwic2VuZEV2ZW50IiwiYmluZCIsIm5hdlRvIiwibGlzdCIsIm1hcCIsImxpc3RJdGVtIiwiaSIsInNlYXJjaEZ1bmMiLCJpY29uIiwibmFtZSIsIm5vX29mX3Rlc3RzIiwidmlwIiwiaXNfZ29sZF9tZW1iZXIiLCJpc192aXBfbWVtYmVyIiwiY292ZXJlZF91bmRlcl92aXAiLCJ2aXBfYW1vdW50IiwidmlwX2NvbnZlbmllbmNlX2Ftb3VudCIsIm1ycCIsIndpZHRoIiwiZGlzY291bnRlZF9wcmljZSIsInBhcnNlSW50IiwidmlwX2dvbGRfcHJpY2UiLCJpc19nb2xkIiwiaXNfZW5hYmxlX2Zvcl92aXAiLCJjb2xvciIsInRyYW5zZm9ybSIsIm1hcmdpbiIsIlRvcFByb2NlZHVyZVdpZGdldHMiLCJzZWxlY3RlZENyaXRlcmlhIiwiaWQiLCJndG1EYXRhIiwidG9nZ2xlSVBEQ3JpdGVyaWEiLCJ1cmwiLCJ0b3BfZGF0YSIsIm1lcmdlU3RhdGUiLCJzdmdfaWNvbiIsIlRvcEhvc3BpdGFsV2lkZ2V0cyIsIm1lcmdlZFN0YXRlIiwiY29tcG9uZW50RGlkTW91bnQiLCJ0b3BIb3NwaXRhbCIsInJlZGlyZWN0VXJsIiwiaXNfaXBkX2hvc3BpdGFsIiwiZGF0YVR5cGUiLCJkYXRhTGlzdCIsInZpZXdBbGxDbGlja2VkIiwibmVhcmJ5SG9zcGl0YWxWaWV3QWxsQ2xpY2tlZCIsInRvcEhlYWRpbmciLCJzaG93Vmlld0FsbCIsImxlbmd0aCIsInNsaWNlIiwibG9nbyIsInNlb190aXRsZSIsImgxX3RpdGxlIiwiVXBDb21pbmdBcHBvaW50bWVudFZpZXciLCJpbmRleCIsInN0YXJ0WCIsInN0YXJ0WSIsImRpc3RYIiwiZGlzdFkiLCJzaG93QXBwb2ludG1lbnQiLCJhcHBvaW50bWVudF90eXBlIiwiYXBwb2ludG1lbnRfaWQiLCJoaXN0b3J5IiwiZ2V0VGltZSIsInVuaXhfdGltZXN0YW1wIiwiZGF0ZSIsIkRhdGUiLCJob3VycyIsImdldEhvdXJzIiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJhbXBtIiwic3RyVGltZSIsImdldERhdGUiLCJ1bml4X2RhdGUiLCJuZXdEYXRlIiwidG9EYXRlU3RyaW5nIiwib25Ub3VjaFN0YXJ0IiwiZXZlbnQiLCJ0b3VjaG9iaiIsImNoYW5nZWRUb3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsInN0YXJ0VGltZSIsIm9uVG91Y2hNb3ZlIiwicmV0dXJuVmFsdWUiLCJvblRvdWNoRW5kIiwidG90YWxBcHBvaW50bWVudHMiLCJjdXJyX2luZGV4IiwiZWxhcHNlZFRpbWUiLCJhYnMiLCJ1cGNvbWluZ19hcHBvaW50bWVudHMiLCJvZmZlckxpc3QiLCJhcHBvaW50bWVudCIsInBhdGllbnRfbmFtZSIsInRpbWVfc2xvdF9zdGFydCIsImFwcG9pbnRtZW50RG90cyIsIlBhY2thZ2VDb21wYXJlU3RyaXAiLCJjaGVja2VkIiwiY29tcGFyZVBhY2thZ2VzIiwiY29tcGFyZV9wYWNrYWdlcyIsIlNuYWNrQmFyIiwic2hvdyIsInBvcyIsInRleHQiLCJzZWxlY3RlZFBrZ0NvbXBhcmVJZHMiLCJwYWNrYWdlcyIsImxhYl9pZCIsImNsZWFyUGFja2FnZSIsInJlc2V0UGtnQ29tcGFyZSIsImJ1aWxkT3BlbkJhbm5lciIsImxhYl90aW1pbmciLCJsYWJfdGltaW5nX2RhdGEiLCJuZXh0X2xhYl90aW1pbmciLCJuZXh0X2xhYl90aW1pbmdfZGF0YSIsImlzX29wZW5fbm93Iiwib3Blbl9uZXh0X3RvZGF5IiwidGltZV9ub3ciLCJsdGQiLCJlbmQiLCJzdGFydCIsImZvbnRTaXplIiwiX2RlY2ltYWxUb1RpbWUiLCJXRUVLX0RBWVMiLCJuZXh0X29wZW4iLCJuZXh0X29wZW5fdG9kYXkiLCJ0b2RheSIsIndlZWtEYXlOdW1iZXIiLCJnZXREYXkiLCJ0aW1lIiwidG9TdHJpbmciLCJzcGxpdCIsImRheV90aW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFFQSxNQUFNQSxTQUFOLFNBQXdCQyxnQkFBTUMsU0FBOUIsQ0FBd0M7QUFDcENDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjtBQUNBLGFBQUtDLEtBQUwsR0FBYTtBQUNUQywyQkFBZTtBQUROLFNBQWI7QUFHSDs7QUFFREMsc0JBQWtCO0FBQ2QsYUFBS0MsUUFBTCxDQUFjQyxjQUFjLEVBQUVILGVBQWUsQ0FBQ0csVUFBVUgsYUFBNUIsRUFBZCxDQUFkO0FBQ0g7O0FBRURJLGFBQVM7QUFDTCxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUscUJBQWY7QUFDSTtBQUFBO0FBQUEsa0JBQUssV0FBVSxLQUFmO0FBQ0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsUUFBZjtBQUNJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLGNBQWY7QUFDSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxZQUFmLEVBQTRCLFNBQVMsTUFBTSxLQUFLSCxlQUFMLEVBQTNDO0FBQ0k7QUFBQTtBQUFBLGtDQUFJLFdBQVUsUUFBZDtBQUFBO0FBQUEsNkJBREo7QUFFSSxtRUFBSyxXQUFXLEtBQUtGLEtBQUwsQ0FBV0MsYUFBWCxHQUEyQixlQUEzQixHQUE2QyxZQUE3RCxFQUEyRSxLQUFLSyxTQUFlQSxHQUFHLHdDQUFsRztBQUZKLHlCQURKO0FBS0k7QUFBQTtBQUFBLDhCQUFLLFdBQVcsS0FBS04sS0FBTCxDQUFXQyxhQUFYLEdBQTJCLDZCQUEzQixHQUEyRCw0QkFBM0U7QUFDSSxrRUFBSSxXQUFVLFNBQWQsR0FESjtBQUdJO0FBQUE7QUFBQSxrQ0FBRyxXQUFVLGdCQUFiO0FBQUE7QUFBQSw2QkFISjtBQU1JO0FBQUE7QUFBQSxrQ0FBRyxXQUFV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QUtDLFFBQUwsRUFBUDtBQUNBLFFBQUkvRCxRQUFROEQsS0FBS0UsS0FBTCxDQUFXLEdBQVgsRUFBZ0IsQ0FBaEIsQ0FBWjtBQUNBLFFBQUk5RCxVQUFVNEQsS0FBS0UsS0FBTCxDQUFXLEdBQVgsRUFBZ0IsQ0FBaEIsQ0FBZDtBQUNBaEUsWUFBUS9DLFNBQVMrQyxLQUFULENBQVI7QUFDQSxRQUFJRSxXQUFXLEdBQWYsRUFBb0I7QUFDaEJBLGtCQUFVLEtBQVY7QUFDSCxLQUZELE1BRU87QUFDSEEsa0JBQVUsRUFBVjtBQUNIO0FBQ0QsUUFBSStELFdBQVcsSUFBZjtBQUNBLFFBQUlqRSxTQUFTLEVBQWIsRUFBaUI7QUFDYmlFLG1CQUFXLElBQVg7QUFDSDtBQUNEakUsWUFBUUEsUUFBUSxFQUFoQjtBQUNBLFdBQVEsR0FBRUEsS0FBTSxHQUFFRSxPQUFRLElBQUcrRCxRQUFTLEVBQXRDO0FBQ0gsQyIsImZpbGUiOiIyOC5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBBY2NvcmRpYW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjY29yZGlhblNob3c6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVBY2NvcmRpYW4oKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7IGFjY29yZGlhblNob3c6ICFwcmV2U3RhdGUuYWNjb3JkaWFuU2hvdyB9KSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcC0wXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHAtYWNjb3JkaWFuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2RuLXRpdGxlXCIgb25DbGljaz17KCkgPT4gdGhpcy50b2dnbGVBY2NvcmRpYW4oKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmdy01MDBcIj5Lbm93IG1vcmUgYWJvdXQgRG9jcHJpbWU8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5hY2NvcmRpYW5TaG93ID8gXCJhY2RuLWFycm93LXVwXCIgOiBcImFjZG4tYXJyb3dcIn0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuYWNjb3JkaWFuU2hvdyA/IFwiYWNkbi1ib2R5IG1ydC0xMCBhY2RuLWJsb2NrXCIgOiBcImFjZG4tYm9keSBtcnQtMTAgYWNkbi1ub25lXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiYWNkbi1oclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aDMgY2xhc3NOYW1lPVwiZnctNTAwIG1yYi0xMCBhY2RuLWhlYWRpbmdcIj5GcmVlIEZhbWlseSBEb2N0b3IgZm9yIExpZmU8L2gzPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBlbm9ybW91c2x5IGxvdyByYXRpbyBvZiBkb2N0b3JzIHRvIHBhdGllbnRzIGlzIG9uZSBvZiB0aGUgYmlnZ2VzdCBjaGFsbGVuZ2VzIGZvciB0aGUgY291bnRyeeKAmXMgaGVhbHRoY2FyZSBzeXN0ZW0uIEFuZCB0aGF04oCZcyB3aHkgZG9jcHJpbWUgZW5kZWF2b3JzIHRvIGJyaWRnZSB0aGUgZ2FwIGJldHdlZW4gZG9jdG9ycyBhbmQgcGF0aWVudHMgd2l0aCBvdXIgY3V0dGluZy1lZGdlIHRlY2hub2xvZ3kgcG93ZXJlZCBwbGF0Zm9ybSB0byBkZWxpdmVyIGhpZ2gtcXVhbGl0eSBoZWFsdGhjYXJlIGFueXRpbWUgYW55d2hlcmUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXJiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBIGdyb3VwIGNvbXBhbnkgb2YgUG9saWN5YmF6YWFyLCBkb2NwcmltZSBnaXZlcyB5b3UgYWNjZXNzIHRvIGhpZ2hseSBza2lsbGVkIHJlZ2lzdGVyZWQgbWVkaWNhbCBwcmFjdGl0aW9uZXIgc28gdGhhdCB5b3UgY2FuIGF2YWlsIGhvc3BpdGFsLXF1YWxpdHkgaGVhbHRoY2FyZSByaWdodCBmcm9tIHRoZSBjb21mb3J0IG9mIHlvdXIgaG9tZS4gVGhlIGNvbXBhbnkgYWltcyB0byBicmluZyBiYWNrIHRoZSBjb25jZXB0IG9mIGEgZmFtaWx5IGRvY3RvciB3aXRoIGl0cyBldmVyLXNvLWdyb3dpbmcgbmV0d29yayBvZiBoZWFsdGhjYXJlIHByb2Zlc3Npb25hbHMgdG8gbWFrZSBoaWdoLXF1YWxpdHkgbWVkaWNhbCBhc3Npc3RhbmNlIGF2YWlsYWJsZSByaWdodCBhdCB5b3VyIGZpbmdlcnRpcHMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXJiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaXRoIGEgdGVhbSBvZiBoaWdobHktc2tpbGxlZCBkb2N0b3JzLCBBSS1lbmFibGVkIENoYXRib3QgdGVjaG5vbG9neSBhbmQsIGFuIGVhc3ktdG8tbmF2aWdhdGUsIHVzZXItZnJpZW5kbHkgaW50ZXJmYWNlLCBkb2NwcmltZSBpcyBhbGwgc2V0IHRvIGJlYXQgYXJkdW91cyBoZWFsdGggY2hhbGxlbmdlcyBhbmQgZW5zdXJlIGVhc3kgYWNjZXNzIHRvIHF1YWxpZmllZCBkb2N0b3JzIGZvciBiaWxsaW9ucyBvZiBwZW9wbGUsIGNyZWF0aW5nIGFuIGV4cGVyaWVuY2UgdGhhdOKAmXMgdHJ1bHkgZGVsaWdodGZ1bCBmb3IgYm90aCBlbmQtdXNlcnMgYW5kIGhlYWx0aGNhcmUgZXhwZXJ0cy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1yYi0xMCBhY2RuLWhlYWRpbmdcIj5Eb2NwcmltZSBmb3IgUGF0aWVudHM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJhY2RuLXN1YmhlYWRpbmdcIj5GcmVlIE9ubGluZSBEb2N0b3IgQ29uc3VsdGF0aW9uPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFzayBhIERvY3RvciAmIGdldCBhbnN3ZXJzIGZvciB5b3VyIGhlYWx0aCBxdWVyaWVzIGZvciBmcmVlIG9yIGluZHVsZ2UgaW4gYSBvbmUtb24tb25lIG9ubGluZSBjb25zdWx0YXRpb24sIGF0IGFueSB0aW1lIGFuZCBmcm9tIGFueXdoZXJlLiBTaW1wbHkgdmlzaXQgb3VyIHdlYnNpdGUgYW5kIHN0YXJ0IGludGVyYWN0aW5nIHdpdGggYmVzdC1pbi1jbGFzcyBoZWFsdGhjYXJlIGV4cGVydHMgZnJvbSB2YXJpb3VzIHNwZWNpYWx0aWVzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYWNkbi1zdWJoZWFkaW5nXCI+Qm9vayBEb2N0b3IgQXBwb2ludG1lbnRzIE9ubGluZSAodXB0byA1MCUgb2ZmKTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXJiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaHkgd2FpdCBpbiBsb25nIHF1ZXVlcyB0byBib29rIGFuIGFwcG9pbnRtZW50IHdpdGggdGhlIGRvY3RvciBvZiB5b3VyIGNob2ljZSwgd2hlbiB5b3UgY2FuIGVhc2lseSBkbyBpdCBvbmxpbmUgYW5kIHRoYXQgdG9vIGF0IGEgbXVjaCBsb3dlciBwcmljZT9GaW5kIHNvbWUgb2YgdGhlIGJlc3QgZG9jdG9ycyBuZWFyIHlvdTsgY2hlY2sgdGhlaXIgZG9jdG9yIHByb2ZpbGVzLCBhbmQgYm9vayBhbiBhcHBvaW50bWVudCBvbmxpbmUgd2l0aCB0aGUgZG9jdG9yIG9mIHlvdXIgY2hvaWNlIGdldCA1MCUgb2ZmIG9uIGJvb2tpbmcgZmVlcywgYWxsIHdpdGgganVzdCBhIGZldyBjbGlja3MgYW5kIGluIGEgbWF0dGVyIG9mIGEgZmV3IG1pbnV0ZXMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJhY2RuLXN1YmhlYWRpbmdcIj5Cb29rIFRlc3RzIGF0IERpYWdub3N0aWMgQ2VudHJlcyAmIExhYnMgKHVwdG8gNTAlIG9mZik8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGlzY292ZXIgdGhlIGJlc3QgZGlhZ25vc3RpYyBjZW50cmVzIG5lYXIgeW91IGZyb20gb3VyIGh1Z2UgaW52ZW50b3J5IGFuZCBib29rIGFwcG9pbnRtZW50cyBhdCB0aGUgZGlhZ25vc3RpYyBjZW50cmUgb2YgeW91ciBjaG9pY2UsIGluIGp1c3QgYSBmZXcgY2xpY2tzLiBTbyBib29rIGRpYWdub3N0aWMgdGVzdHMgdG9kYXkgYW5kIGdldCB1cCB0byA1MCUgb2ZmLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJiLTEwIGFjZG4taGVhZGluZ1wiPkRvY3ByaW1lIGZvciBEb2N0b3JzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYWNkbi1zdWJoZWFkaW5nXCI+V2lkZW4gWW91ciBSZWFjaDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXJiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcmUgeW91IGEgZG9jdG9yIG9yIGEgaGVhbHRoY2FyZSBleHBlcnQ/IFVzZSBkb2NwcmltZSB0byBpbmNyZWFzZSB5b3VyIHZpc2liaWxpdHkgbWFuaWZvbGQsIHJlYWNoIG91dCB0byBhIHdpZGVyIHJhbmdlIG9mIHBhdGllbnRzIGFuZCBncm93IHlvdXIgcHJhY3RpY2Ugd2l0aG91dCBoYXZpbmcgdG8gcnVuIGZyb20gcGlsbGFyIHRvIHBvc3QuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJhY2RuLXN1YmhlYWRpbmdcIj5TaW1wbGlmeSBZb3VyIFByYWN0aWNlPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRha2UgdGhlIGhhc3NsZSBvdXQgb2YgeW91ciBwcmFjdGljZSBhbmQgZm9jdXMgYmV0dGVyIG9uIHlvdXIgcGF0aWVudHMuIEF1dG9tYXRlIGV2ZXJ5dGhpbmcgcmlnaHQgZnJvbSBhcHBvaW50bWVudCBtYW5hZ2VtZW50IHRvIHBheW1lbnQgdHJhY2tpbmcgYW5kIGp1c3QgZm9jdXMgb24gcHJvdmlkaW5nIHRoZSBoaWdoZXN0IHF1YWxpdHkgb2YgdHJlYXRtZW50IHRvIHRoZWlyIHBhdGllbnRzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJiLTEwIGFjZG4taGVhZGluZ1wiPkRvY3ByaW1lIFNlcnZpY2VzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYWNkbi1zdWJoZWFkaW5nXCI+Qm9vayBMYWIgVGVzdDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXJiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb29rIGxhYiB0ZXN0IHJpZ2h0IGZyb20gdGhlIGNvbWZvcnQgb2YgeW91ciBob21lLiBHZXQgYW1hemluZyBkaXNjb3VudHMgb24gbGFiIHRlc3RzIGFuZCBnZXQgc2FtcGxlcyBjb2xsZWN0ZWQgYW5kIHJlcG9ydCBkZWxpdmVyZWQsIHJpZ2h0IGF0IHlvdXIgZG9vcnN0ZXBzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYWNkbi1zdWJoZWFkaW5nXCI+SGVhbHRoIEZlZWQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3VyIGFpbSB0byBlbnN1cmUgYSBoZWFsdGh5IGxpZmVzdHlsZSBmb3IgZXZlcnlvbmUgYW5kIGluIG9yZGVyIHRvIGRvIHRoYXQgb3VyIGtub3dsZWRnZS1wYWNrZWQgaGVhbHRoIGZlZWQgb2ZmZXJzIGluZm9ybWF0aW9uIG9uIHZhcmlvdXMgZGlzZWFzZXMsIHN5bXB0b21zLCBhbmQgbWVkaWNpbmVzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZnctNTAwIG1yYi0xMCBhY2RuLWhlYWRpbmdcIj5RdWVzdGlvbnMgWW91IE1heSBoYXZlOjwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmdy01MDAgYWNkbi1xdWVzXCI+UXVlc3Rpb24gMTogSSBoYXZlIGEgbWVkaWNhbCBxdWVzdGlvbi4gQ2FuIEkgYXNrIGl0IGZvciBmcmVlPzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXJiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkFuc3dlcjo8L3N0cm9uZz4gWWVzISBZb3UgY2FuIGFzayB5b3VyIG1lZGljYWwgcXVlc3Rpb25zIGZvciBmcmVlLiBBbHRlcm5hdGl2ZWx5LCB5b3UgbWF5IGFsc28gZG93bmxvYWQgZG9jcHJpbWUgQXBwLCBhdmFpbGFibGUgYXQgR29vZ2xlIFBsYXkgU3RvcmUgYW5kIEFwcCBTdG9yZSwgZm9yIGZyZWUgYW5kIGFzayBhIGZyZWUgaGVhbHRoIHF1ZXN0aW9uIHRvIG91ciBkb2N0b3JzLiBUeXBpY2FsbHksIG91ciBkb2N0b3JzIHdpbGwgYW5zd2VyIHlvdXIgcXVlcnkgd2l0aGluIDI0IHdvcmtpbmcgaG91cnMgYWZ0ZXIgcmVjZWl2aW5nIHlvdXIgcXVlcnkuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmdy01MDAgYWNkbi1xdWVzXCI+UXVlc3Rpb24gMjogQ2FuIGRvY3RvcnMgYXQgZG9jcHJpbWUgaGVscCBtZSB3aXRoIG15IG1lZGljYWwgaXNzdWVzPzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXJiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkFuc3dlcjo8L3N0cm9uZz4gT3VyIHRlYW0gb2YgZG9jdG9ycyBpcyBkZWRpY2F0ZWQgdG8gaGVscGluZyB5b3UgdW5kZXJzdGFuZCB5b3VyIG1lZGljYWwgaXNzdWVzIGFuZCBpZGVudGlmeSB0aGUgbmV4dCBzdGVwcyB0aGF0IG1heSBpbmNsdWRlIGxhYiB0ZXN0cywgbWVkaWNhdGlvbnMsIG9yIHRpcHMgdG8gaW1wcm92ZSBtZWRpY2FsIGNvbmRpdGlvbnMuIE5vIG1hdHRlciB3aGF0IHlvdXIgbWVkaWNhbCBxdWVzdGlvbnMgYXJlLCBvdXIgZG9jdG9ycyB3aWxsIGJlIGFibGUgdG8gcG9pbnQgeW91IGluIHRoZSByaWdodCBkaXJlY3Rpb24gdG93YXJkcyB0aGUgaW1wcm92ZW1lbnQgb2YgeW91ciBoZWFsdGguXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmdy01MDAgYWNkbi1xdWVzXCI+UXVlc3Rpb24gMzogV2hhdCBpZiBkb2NwcmltZSBkb2N0b3JzIGRvbuKAmXQgZ2V0IG1lIGEgcmVzcG9uc2U/PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+QW5zd2VyOjwvc3Ryb25nPiBSZXN0IGFzc3VyZWQsIG91ciB0ZWFtIG9mIGRvY3RvcnMgd2lsbCBuZXZlciBtaXNzIG91dCBvbiByZXNwb25kaW5nIHRvIHlvdXIgbWVkaWNhbCBxdWVzdGlvbnMuIElmIHlvdSwgc3RpbGwsIGRvbuKAmXQgZ2V0IGEgcmVzcG9uc2UsIGRvIGxlYXZlIHVzIGEgbWVzc2FnZSBhdCBvdXIgc29jaWFsIG1lZGlhIHBhZ2VzIG9yIGNhbGwgdXMgdXAgYXQgb3VyIHRvbGwtZnJlZSBudW1iZXIgYW5kIG91ciB0ZWFtIG9mIGV4cGVydHMgd2lsbCBsb3ZlIHRvIGFzc2lzdCB5b3UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmdy01MDAgYWNkbi1xdWVzXCI+UXVlc3Rpb24gNDogQXJlIGRvY3RvcnMgb24geW91ciB0ZWFtIHF1YWxpZmllZD88L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5BbnN3ZXI6PC9zdHJvbmc+IFdlIGhhdmUgYSBoYW5kLXBpY2tlZCBoaWdobHktcXVhbGlmaWVkIHRlYW0gb2YgZG9jdG9ycyBhY3Jvc3MgdmFyaW91cyBzcGVjaWFsdGllcy4gUmVzdCBhc3N1cmVkLCBhbnkgZG9jdG9yIHRoYXQgeW91IHdpbGwgYmUgY29uc3VsdGluZyBhdCBkb2NwcmltZSB3aWxsIGJlIGEgdmVyaWZpZWQsIGhpZ2hseS1za2lsbGVkIGhlYWx0aGNhcmUgcHJhY3RpdGlvbmVyLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZnctNTAwIGFjZG4tcXVlc1wiPlF1ZXN0aW9uIDU6IElzIG15IHBlcnNvbmFsIGluZm9ybWF0aW9uIHNhZmUgYW5kIGlzIHRoZSBjb25zdWx0YXRpb24gb24gZG9jcHJpbWUgcHJpdmF0ZT88L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5BbnN3ZXI6PC9zdHJvbmc+IFllcyEgV2UgcmVzcGVjdCB0aGUgcHJpdmFjeSBvZiBldmVyeSBpbmRpdmlkdWFsLiBUaGF04oCZcyB3aHkgd2UgbWFrZSBzdXJlIHRoYXQgYWxsIHlvdXIgcHJpdmF0ZSBhbmQgcGVyc29uYWwgaW5mb3JtYXRpb24gaXMgbm90IHNoYXJlZCB3aXRoIGFueSB0aGlyZC1wYXJ0eS4gSW4gYWRkaXRpb24sIGV2ZXJ5IGNvbnN1bHRhdGlvbiBvbiBkb2NwcmltZSBpcyBwcml2YXRlIGFuZCBjb25maWRlbnRpYWwuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaWFuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgSG9tZVBhZ2VQYWNrYWdlV2lkZ2V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvKHdoZXJlLCBlKSB7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnR5cGUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0U2VhcmNoVHlwZSh0aGlzLnByb3BzLnR5cGUpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5T2JqLnB1c2god2hlcmUpXG4gICAgfVxuXG5cblxuICAgIHNjcm9sbCh0eXBlKSB7XG4gICAgICAgIHZhciBlbG1udCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGtnU2xpZGVyXCIpXG4gICAgICAgIGxldCBvdXRlckRpdldpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBrZ1NsaWRlckNvbnRhaW5lclwiKVswXS5vZmZzZXRXaWR0aFxuICAgICAgICBsZXQgY2hpbGREaXZXaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BrZ0NhcmRzTGlzdCcpWzBdLm9mZnNldFdpZHRoXG4gICAgICAgIGxldCBjYXJkQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwa2dDYXJkc0xpc3QnKVswXS5jaGlsZEVsZW1lbnRDb3VudFxuICAgICAgICBsZXQgY2FyZFdpZHRoID0gTWF0aC5jZWlsKGNoaWxkRGl2V2lkdGggLyBjYXJkQ291bnQpXG5cbiAgICAgICAgbGV0IGxlZnRTY3JvbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBrZ1NsaWRlclwiKS5zY3JvbGxMZWZ0XG4gICAgICAgIGxldCBzY3JvbGxWYWwgPSBNYXRoLmZsb29yKG91dGVyRGl2V2lkdGggLyBjYXJkV2lkdGgpICogY2FyZFdpZHRoXG4gICAgICAgIGxldCBjYXJkRW5kID0gY2FyZENvdW50ICogY2FyZFdpZHRoXG5cbiAgICAgICAgaWYgKHR5cGUgPT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgZWxtbnQuc2Nyb2xsKHsgbGVmdDogbGVmdFNjcm9sbCArIHNjcm9sbFZhbCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG4gICAgICAgICAgICBpZiAoY2FyZEVuZCA8PSBsZWZ0U2Nyb2xsICsgc2Nyb2xsVmFsICsgb3V0ZXJEaXZXaWR0aCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0QXJyb3cnKS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUmlnaHRBcnJvdycpLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsbW50LnNjcm9sbCh7IGxlZnQ6IGxlZnRTY3JvbGwgLSBzY3JvbGxWYWwsIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgICAgICAgaWYgKGxlZnRTY3JvbGwgLSBzY3JvbGxWYWwgPD0gMCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdSaWdodEFycm93JykuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnRBcnJvdycpLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdvbGRDbGlja2VkKCl7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdIb21lUGFja2FnZUdvbGRDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAndmlwLWhvbWVwYWdlLXBhY2thZ2UtZ29sZC1jbGlja2VkJ1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeU9iai5wdXNoKCcvdmlwLWdvbGQtZGV0YWlscz9pc19nb2xkPXRydWUmc291cmNlPWhvbWVwYWdlcGFja2FnZWdvbGRsaXN0aW5nJmxlYWRfc291cmNlPURvY3ByaW1lJylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBha2ctc2xpZGVyLWNvbnRhaW5lciBtdC0xMCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2dTbGlkZXJIZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNT5Qb3B1bGFyIEhlYWx0aCBQYWNrYWdlczwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMubmF2aWdhdGVUby5iaW5kKHRoaXMsIHRoaXMucHJvcHMubmF2VG8pfT5WaWV3IEFsbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ1NsaWRlckNvbnRhaW5lclwiIGlkPVwicGtnU2xpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwa2dDYXJkc0xpc3QgZC1pbmxpbmUtZmxleCc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5saXN0Lm1hcCgobGlzdEl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgcGtnY3VzdENhcmRzICR7dHlwZT8nJzonJ31gfSBrZXk9e2l9IG9uQ2xpY2s9e3RoaXMucHJvcHMuc2VhcmNoRnVuYy5iaW5kKHRoaXMsIGxpc3RJdGVtLCB0cnVlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8c3BhbiBzdHlsZT17e2ZvbnRTaXplOicxMHB4J319IGNsYXNzTmFtZT1cIm9mci1yaWJib24gaG9tZS1vZnItcmliYm9uXCI+e3RoaXMucHJvcHMuZGlzY291bnR9IE9mZjwvc3Bhbj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnY2FyZEltZ0NvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17bGlzdEl0ZW0uaWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cInBrZ3RzdE5hbWVcIj57bGlzdEl0ZW0ubmFtZX0gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuZXdwa2dJbmNsdWRlXCI+e2xpc3RJdGVtLm5vX29mX3Rlc3RzfSB0ZXN0cyBpbmNsdWRlZCA8L3A+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGtndHN0TmFtZVwiPntsaXN0SXRlbS5uYW1lfSB7bGlzdEl0ZW0ubm9fb2ZfdGVzdHMgPiAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgKCR7bGlzdEl0ZW0ubm9fb2ZfdGVzdHN9IHRlc3RzKWAgOiAnJ308L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZm9yIGxvZ2luLCBnb2xkIGVuYWJsZWQgbWVtYmVyIG9yIHZpcCBlbmFibGVkIG1lbWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbS52aXAgJiYgKCBsaXN0SXRlbS52aXAuaXNfZ29sZF9tZW1iZXIgfHwgbGlzdEl0ZW0udmlwLmlzX3ZpcF9tZW1iZXIgKSAmJiBsaXN0SXRlbS52aXAuY292ZXJlZF91bmRlcl92aXAgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2ctY2FyZC1wcmljZS1vZmZyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZy1wcmMtY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbS52aXAuaXNfZ29sZF9tZW1iZXI/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+4oK5IHtsaXN0SXRlbS52aXAudmlwX2Ftb3VudCsgbGlzdEl0ZW0udmlwLnZpcF9jb252ZW5pZW5jZV9hbW91bnR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwa2ctb2ZyLWN1dC1wcmNcIj7igrkge2xpc3RJdGVtLm1ycH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3t3aWR0aDogJzIwcHgnLCdtYXJnaW5MZWZ0JzogJzVweCd9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2dvbGQtc20ucG5nJ30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PHA+4oK5IHtsaXN0SXRlbS52aXAudmlwX2Ftb3VudH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBrZy1vZnItY3V0LXByY1wiPuKCuSB7bGlzdEl0ZW0ubXJwfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOiAnMjBweCcsJ21hcmdpbkxlZnQnOiAnNXB4J319IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwbG9nLnBuZyd9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZy1jYXJkLXByaWNlLW9mZnJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtLmRpc2NvdW50ZWRfcHJpY2UgPT0gbGlzdEl0ZW0ubXJwP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZy1wcmMtY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPuKCuSB7bGlzdEl0ZW0ubXJwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxkaXYgY2xhc3NOYW1lPVwicGtnLXByYy1jdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+4oK5IHtsaXN0SXRlbS5kaXNjb3VudGVkX3ByaWNlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwa2ctb2ZyLWN1dC1wcmNcIj7igrkge2xpc3RJdGVtLm1ycH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KCgobGlzdEl0ZW0ubXJwIC0gbGlzdEl0ZW0uZGlzY291bnRlZF9wcmljZSkgLyBsaXN0SXRlbS5tcnApICogMTAwKSE9MCAmJiAobGlzdEl0ZW0uZGlzY291bnRlZF9wcmljZSAhPSBsaXN0SXRlbS5tcnApP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwa2ctaGx0aC1vZmZlclwiPntwYXJzZUludCgoKGxpc3RJdGVtLm1ycCAtIGxpc3RJdGVtLmRpc2NvdW50ZWRfcHJpY2UpIC8gbGlzdEl0ZW0ubXJwKSAqIDEwMCl9JSBPRkY8L3NwYW4+OicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFsaXN0SXRlbS52aXAuaXNfZ29sZF9tZW1iZXIgJiYgIWxpc3RJdGVtLnZpcC5pc192aXBfbWVtYmVyICYmIGxpc3RJdGVtLmRpc2NvdW50ZWRfcHJpY2U+KGxpc3RJdGVtLnZpcC52aXBfY29udmVuaWVuY2VfYW1vdW50ICsgbGlzdEl0ZW0udmlwLnZpcF9nb2xkX3ByaWNlKSAmJiBsaXN0SXRlbS52aXAuaXNfZ29sZCAmJiBsaXN0SXRlbS52aXAuaXNfZW5hYmxlX2Zvcl92aXA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnLXByYy1jdCBob21lLXNjcmVlbmdvbGRwcmljZVwiIG9uQ2xpY2s9e3RoaXMuZ29sZENsaWNrZWQuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7d2lkdGg6ICczMnB4JywnbWFyZ2luUmlnaHQnOiAnNXB4J319IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvZ29sZC1zbS5wbmcnfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5QcmljZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6J2JsYWNrJ319PuKCuSB7bGlzdEl0ZW0udmlwLnZpcF9nb2xkX3ByaWNlKyBsaXN0SXRlbS52aXAudmlwX2NvbnZlbmllbmNlX2Ftb3VudH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7dHJhbnNmb3JtOiAncm90YXRlKC05MGRlZyknLCB3aWR0aDogJzEwcHgnLCBtYXJnaW46JzBweCAxMHB4IDBweCAwcHgnfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmcnfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Ly8ge2xpc3RJdGVtLm1ycCAmJiBsaXN0SXRlbS5kaXNjb3VudGVkX3ByaWNlID8gbGlzdEl0ZW0udmlwICYmIGxpc3RJdGVtLnZpcC5pc192aXBfbWVtYmVyICYmIGxpc3RJdGVtLnZpcC5jb3ZlcmVkX3VuZGVyX3ZpcD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZy1jYXJkLXByaWNlLW9mZnJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtLnZpcC5pc19nb2xkX21lbWJlcj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2ctcHJjLWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8cD7igrkge2xpc3RJdGVtLnZpcC52aXBfYW1vdW50KyBsaXN0SXRlbS52aXAudmlwX2NvbnZlbmllbmNlX2Ftb3VudH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGtnLW9mci1jdXQtcHJjXCI+4oK5IHtsaXN0SXRlbS5tcnB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3t3aWR0aDogJzIwcHgnLCdtYXJnaW5MZWZ0JzogJzVweCd9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2dvbGQtc20ucG5nJ30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgOmxpc3RJdGVtLnZpcC5pc192aXBfbWVtYmVyP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZy1wcmMtY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxwPuKCuSB7bGlzdEl0ZW0udmlwLnZpcF9hbW91bnR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBrZy1vZnItY3V0LXByY1wiPuKCuSB7bGlzdEl0ZW0ubXJwfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7d2lkdGg6ICcyMHB4JywnbWFyZ2luTGVmdCc6ICc1cHgnfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXBsb2cucG5nJ30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICA6PFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2ctY2FyZC1wcmljZS1vZmZyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbS5kaXNjb3VudGVkX3ByaWNlID09IGxpc3RJdGVtLm1ycD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2ctcHJjLWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8cD7igrkge2xpc3RJdGVtLm1ycH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDo8ZGl2IGNsYXNzTmFtZT1cInBrZy1wcmMtY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxwPuKCuSB7bGlzdEl0ZW0uZGlzY291bnRlZF9wcmljZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGtnLW9mci1jdXQtcHJjXCI+4oK5IHtsaXN0SXRlbS5tcnB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBwYXJzZUludCgoKGxpc3RJdGVtLm1ycCAtIGxpc3RJdGVtLmRpc2NvdW50ZWRfcHJpY2UpIC8gbGlzdEl0ZW0ubXJwKSAqIDEwMCkhPTAgJiYgKGxpc3RJdGVtLmRpc2NvdW50ZWRfcHJpY2UgIT0gbGlzdEl0ZW0ubXJwKT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGtnLWhsdGgtb2ZmZXJcIj57cGFyc2VJbnQoKChsaXN0SXRlbS5tcnAgLSBsaXN0SXRlbS5kaXNjb3VudGVkX3ByaWNlKSAvIGxpc3RJdGVtLm1ycCkgKiAxMDApfSUgT0ZGPC9zcGFuPjonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAhbGlzdEl0ZW0udmlwLmlzX2dvbGRfbWVtYmVyICYmICFsaXN0SXRlbS52aXAuaXNfdmlwX21lbWJlciAmJiBsaXN0SXRlbS5kaXNjb3VudGVkX3ByaWNlPihsaXN0SXRlbS52aXAudmlwX2NvbnZlbmllbmNlX2Ftb3VudHx8MCArIGxpc3RJdGVtLnZpcC52aXBfZ29sZF9wcmljZXx8MCkgJiYgbGlzdEl0ZW0udmlwLmlzX2dvbGQ/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnLXByYy1jdCBob21lLXNjcmVlbmdvbGRwcmljZVwiIG9uQ2xpY2s9e3RoaXMuZ29sZENsaWNrZWQuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7d2lkdGg6ICczMnB4JywnbWFyZ2luUmlnaHQnOiAnNXB4J319IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvZ29sZC1zbS5wbmcnfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5QcmljZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxwPuKCuSB7bGlzdEl0ZW0udmlwLnZpcF9nb2xkX3ByaWNlKyBsaXN0SXRlbS52aXAudmlwX2NvbnZlbmllbmNlX2Ftb3VudH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7dHJhbnNmb3JtOiAncm90YXRlKC05MGRlZyknLCB3aWR0aDogJzEwcHgnLCBtYXJnaW46JzBweCAxMHB4IDBweCAwcHgnfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmcnfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ2xmdFJodGJ0bmNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2ctYnRubGZ0IGQtbm9uZVwiIGlkPVwiUmlnaHRBcnJvd1wiIG9uQ2xpY2s9e3RoaXMuc2Nyb2xsLmJpbmQodGhpcywgJ2xlZnQnKX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2ctYnRucmd0XCIgaWQ9XCJsZWZ0QXJyb3dcIiBvbkNsaWNrPXt0aGlzLnNjcm9sbC5iaW5kKHRoaXMsICdyaWdodCcpfT48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlUGFja2FnZVdpZGdldCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5cbmNsYXNzIFRvcFByb2NlZHVyZVdpZGdldHMgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcblxuICAgIG5hdmlnYXRlVG8oZGF0YSwgZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBsZXQgc2VsZWN0ZWRDcml0ZXJpYSA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdpcGQnLFxuICAgICAgICAgICAgaWQ6IGRhdGEuaWQsXG4gICAgICAgICAgICBuYW1lOiBkYXRhLm5hbWVcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IGd0bURhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0hvbWVXaWRnZXRQcm9jZWR1cmVDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnaG9tZS13aWRnZXQtcHJvY2VkdXJlLWNsaWNrZWQnLCAnc2VsZWN0ZWQnOiBkYXRhLm5hbWUgfHwgJycsICdzZWxlY3RlZElkJzogZGF0YS5pZCB8fCAnJ1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG5cbiAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVJUERDcml0ZXJpYShzZWxlY3RlZENyaXRlcmlhLCB0cnVlKVxuICAgICAgICBcbiAgICAgICAgaWYoZGF0YS51cmwpe1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5T2JqLnB1c2goYC8ke2RhdGEudXJsfT9zaG93UG9wdXA9dHJ1ZWApXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5T2JqLnB1c2goYC9pcGRJbmZvP2lwZF9pZD0ke2RhdGEuaWR9JnNob3dQb3B1cD10cnVlYClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNjcm9sbCh0eXBlKSB7XG4gICAgICAgIHZhciBlbG1udCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9wX2lwZFwiKVxuICAgICAgICBsZXQgb3V0ZXJEaXZXaWR0aCA9IGVsbW50Lm9mZnNldFdpZHRoXG4gICAgICAgIGxldCBjaGlsZERpdldpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG9wX2lwZF9saXN0JylbMF0ub2Zmc2V0V2lkdGhcbiAgICAgICAgbGV0IGNhcmRDb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvcF9pcGRfbGlzdCcpWzBdLmNoaWxkRWxlbWVudENvdW50XG4gICAgICAgIGxldCBjYXJkV2lkdGggPSBNYXRoLmNlaWwoY2hpbGREaXZXaWR0aCAvIGNhcmRDb3VudClcblxuICAgICAgICBsZXQgbGVmdFNjcm9sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9wX2lwZFwiKS5zY3JvbGxMZWZ0XG4gICAgICAgIGxldCBzY3JvbGxWYWwgPSBNYXRoLmZsb29yKG91dGVyRGl2V2lkdGggLyBjYXJkV2lkdGgpICogY2FyZFdpZHRoXG4gICAgICAgIGxldCBjYXJkRW5kID0gY2FyZENvdW50ICogY2FyZFdpZHRoXG5cbiAgICAgICAgaWYgKHR5cGUgPT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgZWxtbnQuc2Nyb2xsKHsgbGVmdDogbGVmdFNjcm9sbCArIHNjcm9sbFZhbCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG4gICAgICAgICAgICBpZiAoY2FyZEVuZCA8PSBsZWZ0U2Nyb2xsICsgc2Nyb2xsVmFsICsgb3V0ZXJEaXZXaWR0aCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0QXJyb3dfaXBkJykuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1JpZ2h0QXJyb3dfaXBkJykuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxtbnQuc2Nyb2xsKHsgbGVmdDogbGVmdFNjcm9sbCAtIHNjcm9sbFZhbCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG4gICAgICAgICAgICBpZiAobGVmdFNjcm9sbCAtIHNjcm9sbFZhbCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1JpZ2h0QXJyb3dfaXBkJykuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnRBcnJvd19pcGQnKS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXG4gICAgICAgIH1cbiAgICB9XG5cdFxuXHRyZW5kZXIoKXtcblxuXHRcdHJldHVybihcblx0XHQgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFrZy1zbGlkZXItY29udGFpbmVyIG10LTEwIG1iLTEwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2dTbGlkZXJIZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNT5Ub3AgUHJvY2VkdXJlczwvaDU+XG4gICAgICAgICAgICAgICAgICAgIHsvKjxzcGFuPlZpZXcgQWxsPC9zcGFuPiovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnU2xpZGVyQ29udGFpbmVyXCIgaWQ9XCJ0b3BfaXBkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwa2dDYXJkc0xpc3QgZC1pbmxpbmUtZmxleCBzdWItd2QtY2FyZHMgdG9wX2lwZF9saXN0Jz5cbiAgICAgICAgICAgICAgICAgICAgXHR7XG4gICAgICAgICAgICAgICAgICAgIFx0XHR0aGlzLnByb3BzLnRvcF9kYXRhLm1hcCgoZGF0YSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBcdFx0XHRyZXR1cm4gPGEgaHJlZj17ZGF0YS51cmw/YCR7ZGF0YS51cmx9YDpgaXBkSW5mbz9pcGRfaWQ9JHtkYXRhLmlkfWB9IGNsYXNzTmFtZT1cInBrZ2N1c3RDYXJkc1wiIGtleT17dGhpcy5wcm9wcy5tZXJnZVN0YXRlP2k6ZGF0YS51cmw/ZGF0YS51cmw6aX0gb25DbGljaz17dGhpcy5uYXZpZ2F0ZVRvLmJpbmQodGhpcywgZGF0YSl9PlxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2djYXJkSW1nQ29udFwiPlxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtkYXRhLnN2Z19pY29uP2RhdGEuc3ZnX2ljb246ZGF0YS5pY29ufSAvPlxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwa2d0c3ROYW1lIHByY2QtaGVpZ2h0XCI+XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEubmFtZX1cblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgXHQ8L3A+XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cdFx0XG4gICAgICAgICAgICAgICAgICAgIFx0XHR9KVxuICAgICAgICAgICAgICAgICAgICBcdH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2dsZnRSaHRidG5jb250XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnLWJ0bmxmdCBkLW5vbmVcIiBpZD1cIlJpZ2h0QXJyb3dfaXBkXCIgb25DbGljaz17dGhpcy5zY3JvbGwuYmluZCh0aGlzLCAnbGVmdCcpfT48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZy1idG5yZ3RcIiBpZD1cImxlZnRBcnJvd19pcGRcIiBvbkNsaWNrPXt0aGlzLnNjcm9sbC5iaW5kKHRoaXMsICdyaWdodCcpfT48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvcFByb2NlZHVyZVdpZGdldHMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuXG5jbGFzcyBUb3BIb3NwaXRhbFdpZGdldHMgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBtZXJnZWRTdGF0ZTogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIGlmKCF0aGlzLnByb3BzLnRvcEhvc3BpdGFsKXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21lcmdlZFN0YXRlOiB0cnVlfSlcbiAgICAgICAgfVxuICAgIH1cblxuXHRuYXZpZ2F0ZVRvKGRhdGEsIGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgbGV0IGd0bURhdGEgPSB7fVxuICAgICAgICBpZih0aGlzLnByb3BzLnRvcEhvc3BpdGFsKSB7XG4gICAgICAgICAgICBndG1EYXRhID0ge1xuICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdIb21lV2lkZ2V0SG9zcGl0YWxDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnaG9tZS13aWRnZXQtaG9zcGl0YWwtY2xpY2tlZCcsICdzZWxlY3RlZCc6ICcnLCAnc2VsZWN0ZWRJZCc6IGRhdGEuaWQgfHwgJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBndG1EYXRhID0ge1xuICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdIb21lV2lkZ2V0TmVhcmJ5SG9zcGl0YWxDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnaG9tZS13aWRnZXQtbmVhcmJ5LWhvc3BpdGFsLWNsaWNrZWQnLCAnc2VsZWN0ZWQnOiAnJywgJ3NlbGVjdGVkSWQnOiBkYXRhLmlkIHx8ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG5cbiAgICAgICAgbGV0IHJlZGlyZWN0VXJsID0gJydcblxuICAgICAgICBpZihkYXRhLnVybCkge1xuICAgICAgICAgICAgcmVkaXJlY3RVcmwgPSBgLyR7ZGF0YS51cmx9YFxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICByZWRpcmVjdFVybCA9IGAvaXBkL2hvc3BpdGFsLyR7ZGF0YS5pZH1gXG4gICAgICAgIH1cblxuICAgICAgICBpZihkYXRhLmlzX2lwZF9ob3NwaXRhbCkge1xuICAgICAgICAgICAgcmVkaXJlY3RVcmwrPSBgP3Nob3dQb3B1cD10cnVlYFxuICAgICAgICB9XG5cbiAgICAgICAgLyppZih0aGlzLnByb3BzLmlzX2lwZF9mb3JtX3N1Ym1pdHRlZCl7XG5cbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgcmVkaXJlY3RVcmwrPSAnJmdldF9mZWVkYmFjaz0xJ1xuICAgICAgICB9Ki9cblxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnlPYmoucHVzaChyZWRpcmVjdFVybClcbiAgICB9XG5cbiAgICBzY3JvbGwodHlwZSkge1xuICAgICAgICBsZXQgZGF0YVR5cGUgPSB0aGlzLnByb3BzLmRhdGFUeXBlXG4gICAgICAgIGxldCBkYXRhTGlzdCA9IGAke3RoaXMucHJvcHMuZGF0YVR5cGV9X2xpc3RgXG4gICAgICAgIHZhciBlbG1udCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGFUeXBlKVxuICAgICAgICBsZXQgb3V0ZXJEaXZXaWR0aCA9IGVsbW50Lm9mZnNldFdpZHRoXG4gICAgICAgIGxldCBjaGlsZERpdldpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShkYXRhTGlzdClbMF0ub2Zmc2V0V2lkdGhcbiAgICAgICAgbGV0IGNhcmRDb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZGF0YUxpc3QpWzBdLmNoaWxkRWxlbWVudENvdW50XG4gICAgICAgIGxldCBjYXJkV2lkdGggPSBNYXRoLmNlaWwoY2hpbGREaXZXaWR0aCAvIGNhcmRDb3VudClcblxuICAgICAgICBsZXQgbGVmdFNjcm9sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGFUeXBlKS5zY3JvbGxMZWZ0XG4gICAgICAgIGxldCBzY3JvbGxWYWwgPSBNYXRoLmZsb29yKG91dGVyRGl2V2lkdGggLyBjYXJkV2lkdGgpICogY2FyZFdpZHRoXG4gICAgICAgIGxldCBjYXJkRW5kID0gY2FyZENvdW50ICogY2FyZFdpZHRoXG5cbiAgICAgICAgaWYgKHR5cGUgPT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgZWxtbnQuc2Nyb2xsKHsgbGVmdDogbGVmdFNjcm9sbCArIHNjcm9sbFZhbCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG4gICAgICAgICAgICBpZiAoY2FyZEVuZCA8PSBsZWZ0U2Nyb2xsICsgc2Nyb2xsVmFsICsgb3V0ZXJEaXZXaWR0aCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2RhdGFUeXBlfV9sZWZ0QXJyb3dfaHNwdGxgKS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtkYXRhVHlwZX1fUmlnaHRBcnJvd19oc3B0bGApLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsbW50LnNjcm9sbCh7IGxlZnQ6IGxlZnRTY3JvbGwgLSBzY3JvbGxWYWwsIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgICAgICAgaWYgKGxlZnRTY3JvbGwgLSBzY3JvbGxWYWwgPD0gMCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2RhdGFUeXBlfV9SaWdodEFycm93X2hzcHRsYCkuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZGF0YVR5cGV9X2xlZnRBcnJvd19oc3B0bGApLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZpZXdBbGxDbGlja2VkKCl7XG4gICAgICAgIHRoaXMucHJvcHMubmVhcmJ5SG9zcGl0YWxWaWV3QWxsQ2xpY2tlZCgpO1xuICAgIH1cblx0XG5cdHJlbmRlcigpe1xuICAgICAgICBcbiAgICAgICAgbGV0IHsgdG9wSGVhZGluZywgZGF0YVR5cGUsIHNob3dWaWV3QWxsIH0gID0gdGhpcy5wcm9wc1xuXHRcdHJldHVybihcblx0XHQgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFrZy1zbGlkZXItY29udGFpbmVyIG1iLTEwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2dTbGlkZXJIZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNT57dG9wSGVhZGluZ308L2g1PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93Vmlld0FsbCAmJiB0aGlzLnByb3BzLnRvcF9kYXRhLmxlbmd0aCA+PTIwICYmIDxzcGFuIG9uQ2xpY2s9eygpPT50aGlzLnZpZXdBbGxDbGlja2VkKCl9PlZpZXcgQWxsPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2dTbGlkZXJDb250YWluZXJcIiBpZD17ZGF0YVR5cGV9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHBrZ0NhcmRzTGlzdCBkLWlubGluZS1mbGV4IHN1Yi13ZC1jYXJkcyAke2RhdGFUeXBlfV9saXN0YH0+XG4gICAgICAgICAgICAgICAgICAgIFx0e1xuICAgICAgICAgICAgICAgICAgICBcdFx0dGhpcy5wcm9wcy50b3BfZGF0YS5zbGljZSgwLDIwKS5tYXAoKGRhdGEsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgXHRcdFx0cmV0dXJuIDxhIGtleT17dGhpcy5zdGF0ZS5tZXJnZWRTdGF0ZT9gJHtpfV9saXN0XyR7ZGF0YVR5cGV9YDpkYXRhLnVybD9kYXRhLnVybDpgJHtkYXRhLmlkfV8ke2RhdGFUeXBlfWB9IGhyZWY9e2RhdGEudXJsP2AvJHtkYXRhLnVybH1gOmAvaXBkL2hvc3BpdGFsLyR7ZGF0YS5pZH1gfSBjbGFzc05hbWU9XCJwa2djdXN0Q2FyZHNcIiBvbkNsaWNrPXt0aGlzLm5hdmlnYXRlVG8uYmluZCh0aGlzLCBkYXRhKX0+XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ2NhcmRJbWdDb250XCI+XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOjgyfX0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtkYXRhLnN2Z19pY29uP2RhdGEuc3ZnX2ljb246ZGF0YS5sb2dvfSAvPlxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwa2d0c3ROYW1lXCI+XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuc2VvX3RpdGxlP2RhdGEuc2VvX3RpdGxlOmRhdGEuaDFfdGl0bGU/ZGF0YS5oMV90aXRsZTpkYXRhLm5hbWV9XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIFx0PC9wPlxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHRcdFxuICAgICAgICAgICAgICAgICAgICBcdFx0fSlcbiAgICAgICAgICAgICAgICAgICAgXHR9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnbGZ0Umh0YnRuY29udFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZy1idG5sZnQgZC1ub25lXCIgaWQ9e2Ake2RhdGFUeXBlfV9SaWdodEFycm93X2hzcHRsYH0gb25DbGljaz17dGhpcy5zY3JvbGwuYmluZCh0aGlzLCAnbGVmdCcpfT48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZy1idG5yZ3RcIiBpZD17YCR7ZGF0YVR5cGV9X2xlZnRBcnJvd19oc3B0bGB9IG9uQ2xpY2s9e3RoaXMuc2Nyb2xsLmJpbmQodGhpcywgJ3JpZ2h0Jyl9PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9wSG9zcGl0YWxXaWRnZXRzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuXG5jbGFzcyBVcENvbWluZ0FwcG9pbnRtZW50VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGluZGV4OjAsXG4gICAgICAgICAgICBzdGFydFg6MCxcbiAgICAgICAgICAgIHN0YXJ0WTowLFxuICAgICAgICAgICAgZGlzdFg6MCxcbiAgICAgICAgICAgIGRpc3RZOjAsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93QXBwb2ludG1lbnQoYXBwb2ludG1lbnRfdHlwZSxhcHBvaW50bWVudF9pZCxlKXtcbiAgICAgICAgaWYoYXBwb2ludG1lbnRfdHlwZSA9PSAnZG9jdG9yJyl7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL29wZC9hcHBvaW50bWVudC8ke2FwcG9pbnRtZW50X2lkfWApXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9sYWIvYXBwb2ludG1lbnQvJHthcHBvaW50bWVudF9pZH1gKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VGltZSh1bml4X3RpbWVzdGFtcCkge1xuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHVuaXhfdGltZXN0YW1wKVxuICAgICAgICB2YXIgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgICAgIHZhciBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgICAgIHZhciBhbXBtID0gaG91cnMgPj0gMTIgPyAncG0nIDogJ2FtJztcbiAgICAgICAgaG91cnMgPSBob3VycyAlIDEyO1xuICAgICAgICBob3VycyA9IGhvdXJzID8gaG91cnMgOiAxMjsgLy8gdGhlIGhvdXIgJzAnIHNob3VsZCBiZSAnMTInXG4gICAgICAgIG1pbnV0ZXMgPSBtaW51dGVzIDwgMTAgPyAnMCcgKyBtaW51dGVzIDogbWludXRlcztcbiAgICAgICAgdmFyIHN0clRpbWUgPSBob3VycyArICc6JyArIG1pbnV0ZXMgKyAnICcgKyBhbXBtO1xuICAgICAgICByZXR1cm4gc3RyVGltZTtcbiAgICB9XG5cbiAgICBnZXREYXRlKHVuaXhfZGF0ZSl7XG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUodW5peF9kYXRlKVxuICAgICAgICBsZXQgbmV3RGF0ZT0gZGF0ZS50b0RhdGVTdHJpbmcoKVxuICAgICAgICByZXR1cm4gbmV3RGF0ZVxuICAgIH1cblxuICAgIG9uVG91Y2hTdGFydChldmVudCl7XG4gICAgICAgIGxldCB0b3VjaG9iaiA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICB0aGlzLnN0YXRlLnN0YXJ0WD10b3VjaG9iai5wYWdlWDtcbiAgICAgICAgdGhpcy5zdGF0ZS5zdGFydFk9dG91Y2hvYmoucGFnZVk7XG4gICAgICAgIGxldCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgIH1cblxuICAgIG9uVG91Y2hNb3ZlKGV2ZW50KXtcbiAgICAgICAgbGV0IHRvdWNob2JqID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgIHRoaXMuc3RhdGUuZGlzdFggPSB0b3VjaG9iai5wYWdlWCAtIHRoaXMuc3RhdGUuc3RhcnRYO1xuICAgICAgICB0aGlzLnN0YXRlLmRpc3RZID0gdG91Y2hvYmoucGFnZVkgLSB0aGlzLnN0YXRlLnN0YXJ0WTsgXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnN0YXJ0WCAtIHRvdWNob2JqLnBhZ2VYID4gNSB8fCB0b3VjaG9iai5wYWdlWCAtIHRoaXMuc3RhdGUuc3RhcnRYID4gNSkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KVxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uVG91Y2hFbmQoZXZlbnQpe1xuICAgICAgICBsZXQgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgICAgbGV0IHRvdWNob2JqID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF1cbiAgICAgICAgbGV0IHRvdGFsQXBwb2ludG1lbnRzID0gJydcbiAgICAgICAgbGV0IGN1cnJfaW5kZXhcbiAgICAgICAgdGhpcy5zdGF0ZS5kaXN0WCA9IHRvdWNob2JqLnBhZ2VYIC0gdGhpcy5zdGF0ZS5zdGFydFhcbiAgICAgICAgdGhpcy5zdGF0ZS5kaXN0WSA9IHRvdWNob2JqLnBhZ2VZIC0gdGhpcy5zdGF0ZS5zdGFydFlcbiAgICAgICAgbGV0IGVsYXBzZWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydFRpbWVcbiAgICAgICAgaWYoZWxhcHNlZFRpbWU8PTQwMCl7XG4gICAgICAgICAgICBpZihNYXRoLmFicyh0aGlzLnN0YXRlLmRpc3RYKSA+PSA1MCAmJiBNYXRoLmFicyh0aGlzLnN0YXRlLmRpc3RZKSA8PSAxMDApe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuZGlzdFg8MCl7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnVwY29taW5nX2FwcG9pbnRtZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxBcHBvaW50bWVudHMgPSB0aGlzLnByb3BzLnVwY29taW5nX2FwcG9pbnRtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyX2luZGV4ID0gdGhpcy5zdGF0ZS5pbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vycl9pbmRleCA9IGN1cnJfaW5kZXggKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3Vycl9pbmRleCA+PSB0b3RhbEFwcG9pbnRtZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJfaW5kZXggPSAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW5kZXg6IGN1cnJfaW5kZXggfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vZmZlckxpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsQXBwb2ludG1lbnRzID0gdGhpcy5wcm9wcy51cGNvbWluZ19hcHBvaW50bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vycl9pbmRleCA9IHRoaXMuc3RhdGUuaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJfaW5kZXggPSBjdXJyX2luZGV4IC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY3Vycl9pbmRleCA8IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJfaW5kZXggPSB0b3RhbEFwcG9pbnRtZW50cyAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGluZGV4OiBjdXJyX2luZGV4IH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgaWYodGhpcy5wcm9wcy51cGNvbWluZ19hcHBvaW50bWVudHMgJiYgdGhpcy5wcm9wcy51cGNvbWluZ19hcHBvaW50bWVudHMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBsZXQgYXBwb2ludG1lbnQgPSB7fVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnVwY29taW5nX2FwcG9pbnRtZW50cykge1xuICAgICAgICAgICAgICAgICAgICBhcHBvaW50bWVudCA9IHRoaXMucHJvcHMudXBjb21pbmdfYXBwb2ludG1lbnRzW3RoaXMuc3RhdGUuaW5kZXhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNzdG0tY2FyZCBhcHRtbnQtY2FyZCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaWxkMVwiIG9uVG91Y2hTdGFydD17dGhpcy5vblRvdWNoU3RhcnQuYmluZCh0aGlzKX0gb25Ub3VjaE1vdmU9e3RoaXMub25Ub3VjaE1vdmUuYmluZCh0aGlzKX0gb25Ub3VjaEVuZD17dGhpcy5vblRvdWNoRW5kLmJpbmQodGhpcyl9IG9uQ2xpY2s9e3RoaXMuc2hvd0FwcG9pbnRtZW50LmJpbmQodGhpcyxhcHBvaW50bWVudC50eXBlLGFwcG9pbnRtZW50LmlkKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1sIGxlZnRCbG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWFnZXMvaWMtdGltZS1kYXRlLnBuZ1wifSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+QXBwb2ludG1lbnQgZm9yIHthcHBvaW50bWVudC5wYXRpZW50X25hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLXRpbWVcIj5PbiB7dGhpcy5nZXREYXRlKGFwcG9pbnRtZW50LnRpbWVfc2xvdF9zdGFydCl9LCB7dGhpcy5nZXRUaW1lKGFwcG9pbnRtZW50LnRpbWVfc2xvdF9zdGFydCl9IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4ge2B3aXRoICR7YXBwb2ludG1lbnQudHlwZT09XCJkb2N0b3JcIj8nRHIuJzonJ30gJHthcHBvaW50bWVudC5uYW1lfWB9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRCbG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzTmFtZT1cImFuY2hyLWltZ1wiIG9uQ2xpY2s9e3RoaXMuc2hvd0FwcG9pbnRtZW50LmJpbmQodGhpcyxhcHBvaW50bWVudC50eXBlLGFwcG9pbnRtZW50LmlkKX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltYWdlcy9yaWdodC1hcnJvdy5zdmdcIn0gYWx0PVwiXCIgLz48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXBjb21pbmdfYXBwb2ludG1lbnRzICYmIHRoaXMucHJvcHMudXBjb21pbmdfYXBwb2ludG1lbnRzLmxlbmd0aCA+MT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWluZGljYXRvcnMgY3JzbC1pbmRpY2F0b3JzIGNyLWluZGljYXRvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVwY29taW5nX2FwcG9pbnRtZW50cyAmJiB0aGlzLnByb3BzLnVwY29taW5nX2FwcG9pbnRtZW50cy5tYXAoKGFwcG9pbnRtZW50RG90cywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBrZXk9e2l9IG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBpbmRleDogaSB9KX0gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmluZGV4ID09IGkgPyBcImFjdGl2ZVwiIDogJyd9ID48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4oPGRpdj48L2Rpdj4pXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVXBDb21pbmdBcHBvaW50bWVudFZpZXdcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5pdGlhbHNQaWN0dXJlIGZyb20gJy4uLy4uLy4uL2NvbW1vbnMvaW5pdGlhbHNQaWN0dXJlJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcblxuaW1wb3J0IHsgYnVpbGRPcGVuQmFubmVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcbmltcG9ydCB7IFhfT0sgfSBmcm9tICdjb25zdGFudHMnO1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5cbmNsYXNzIFBhY2thZ2VDb21wYXJlU3RyaXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlPXtcbiAgICAgICAgICAgIGNoZWNrZWQ6ZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBhcmVQYWNrYWdlcygpe1xuICAgICAgaWYodGhpcy5wcm9wcy5jb21wYXJlX3BhY2thZ2VzLmxlbmd0aCA+IDUpe1xuICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIk1heCA1IHBhY2thZ2VzIGNhbiBiZSBjb21wYXJlZFwiIH0pO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGxldCBzZWxlY3RlZFBrZ0NvbXBhcmVJZHM9W11cbiAgICAgICAgICBpZih0aGlzLnByb3BzLmNvbXBhcmVfcGFja2FnZXMpe1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLmNvbXBhcmVfcGFja2FnZXMubWFwKChwYWNrYWdlcywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQa2dDb21wYXJlSWRzLnB1c2gocGFja2FnZXMuaWQrJy0nK3BhY2thZ2VzLmxhYl9pZClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvcGFja2FnZS9jb21wYXJlP3BhY2thZ2VfaWRzPScrc2VsZWN0ZWRQa2dDb21wYXJlSWRzKSAgICAgIFxuICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyUGFja2FnZSgpe1xuICAgICAgdGhpcy5wcm9wcy5yZXNldFBrZ0NvbXBhcmUoKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbXBhcmUtcGFja2FnZS1mb290ZXIgY20tZm9vdGVyXCI+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb21wYXJlLXBhY2thZ2VzLWhvbWVcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaGx0aC10eHRcIj57dGhpcy5wcm9wcy5jb21wYXJlX3BhY2thZ2VzLmxlbmd0aH0gSGVhbHRoIFBhY2thZ2UgU2VsZWN0ZWQ8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaS1idG4tY29tcGFyZVwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicGtnLWJ0bi1ud1wiIG9uQ2xpY2s9e3RoaXMuY29tcGFyZVBhY2thZ2VzLmJpbmQodGhpcyl9PkNvbXBhcmU8L2E+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj48aW1nIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9jcC9hc3NldHMvaW1nL2ljb25zL2Nsb3NlLnBuZ1wiIGFsdD1cIlwiICBvbkNsaWNrPXt0aGlzLmNsZWFyUGFja2FnZS5iaW5kKHRoaXMpfS8+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L3NlY3Rpb24+ICBcbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBQYWNrYWdlQ29tcGFyZVN0cmlwXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRPcGVuQmFubmVyKGxhYl90aW1pbmcsIGxhYl90aW1pbmdfZGF0YSA9IFtdLCBuZXh0X2xhYl90aW1pbmcsIG5leHRfbGFiX3RpbWluZ19kYXRhID0gbnVsbCkge1xuICAgIGxldCBpc19vcGVuX25vdyA9IGZhbHNlXG4gICAgbGV0IG9wZW5fbmV4dF90b2RheSA9IGZhbHNlXG5cbiAgICBsZXQgdGltZV9ub3cgPSBuZXcgRGF0ZSgpLmdldEhvdXJzKCkgKyAwLjVcbiAgICBmb3IgKGxldCBsdGQgb2YgbGFiX3RpbWluZ19kYXRhKSB7XG4gICAgICAgIGlmICh0aW1lX25vdyA8PSBsdGQuZW5kICYmIHRpbWVfbm93ID49IGx0ZC5zdGFydCkge1xuICAgICAgICAgICAgaXNfb3Blbl9ub3cgPSB0cnVlXG4gICAgICAgICAgICByZXR1cm4gPHAgc3R5bGU9e3sgZm9udFNpemU6IDEyIH19ID57bGFiX3RpbWluZ308L3A+XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRpbWVfbm93IDwgbHRkLnN0YXJ0KSB7XG4gICAgICAgICAgICBvcGVuX25leHRfdG9kYXkgPSBsdGQuc3RhcnRcbiAgICAgICAgICAgIG9wZW5fbmV4dF90b2RheSA9IF9kZWNpbWFsVG9UaW1lKG9wZW5fbmV4dF90b2RheSlcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3Blbl9uZXh0X3RvZGF5KSB7XG4gICAgICAgIHJldHVybiA8cCBzdHlsZT17eyBmb250U2l6ZTogMTIgfX0gPk9wZW5zIG5leHQgYXQge29wZW5fbmV4dF90b2RheX0sIHRvZGF5PC9wPlxuICAgIH1cblxuICAgIGNvbnN0IFdFRUtfREFZUyA9IFsnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheScsICdTdW5kYXknXVxuICAgIGxldCBuZXh0X29wZW4gPSBmYWxzZVxuICAgIGxldCBuZXh0X29wZW5fdG9kYXkgPSBcIlwiXG4gICAgaWYgKG5leHRfbGFiX3RpbWluZ19kYXRhKSB7XG4gICAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKClcbiAgICAgICAgbGV0IHdlZWtEYXlOdW1iZXIgPSB0b2RheS5nZXREYXkoKVxuICAgICAgICB3ZWVrRGF5TnVtYmVyID0gd2Vla0RheU51bWJlciA9PSAwID8gNiA6IHdlZWtEYXlOdW1iZXIgLSAxXG4gICAgICAgIGZvciAobGV0IGkgaW4gbmV4dF9sYWJfdGltaW5nX2RhdGEpIHtcbiAgICAgICAgICAgIG5leHRfb3BlbiA9IG5leHRfbGFiX3RpbWluZ19kYXRhW2ldWzBdLnN0YXJ0XG4gICAgICAgICAgICBuZXh0X29wZW4gPSBfZGVjaW1hbFRvVGltZShuZXh0X29wZW4pXG4gICAgICAgICAgICBpZiAoaSAtIHdlZWtEYXlOdW1iZXIgPT0gMSkge1xuICAgICAgICAgICAgICAgIG5leHRfb3Blbl90b2RheSA9ICd0b21vcnJvdydcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV4dF9vcGVuX3RvZGF5ID0gV0VFS19EQVlTW2ldXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChuZXh0X29wZW4gJiYgbmV4dF9vcGVuX3RvZGF5KSB7XG4gICAgICAgIHJldHVybiA8cCBzdHlsZT17eyBmb250U2l6ZTogMTIgfX0gPk9wZW5zIG5leHQgYXQge25leHRfb3Blbn0sIHtuZXh0X29wZW5fdG9kYXl9PC9wPlxuICAgIH1cblxuICAgIHJldHVybiBcIkNsb3NlZFwiXG5cbn1cblxuXG5mdW5jdGlvbiBfZGVjaW1hbFRvVGltZSh0aW1lKSB7XG4gICAgdGltZSA9IHRpbWUudG9TdHJpbmcoKVxuICAgIGxldCBob3VycyA9IHRpbWUuc3BsaXQoJy4nKVswXVxuICAgIGxldCBtaW51dGVzID0gdGltZS5zcGxpdCgnLicpWzFdXG4gICAgaG91cnMgPSBwYXJzZUludChob3VycylcbiAgICBpZiAobWludXRlcyA9PSAnNScpIHtcbiAgICAgICAgbWludXRlcyA9ICc6MzAnXG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWludXRlcyA9IFwiXCJcbiAgICB9XG4gICAgbGV0IGRheV90aW1lID0gXCJBTVwiXG4gICAgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICAgIGRheV90aW1lID0gXCJQTVwiXG4gICAgfVxuICAgIGhvdXJzID0gaG91cnMgJSAxMlxuICAgIHJldHVybiBgJHtob3Vyc30ke21pbnV0ZXN9ICR7ZGF5X3RpbWV9YFxufSJdLCJzb3VyY2VSb290IjoiIn0=