(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Accordian = function (_React$Component) {
    _inherits(Accordian, _React$Component);

    function Accordian(props) {
        _classCallCheck(this, Accordian);

        var _this = _possibleConstructorReturn(this, (Accordian.__proto__ || Object.getPrototypeOf(Accordian)).call(this, props));

        _this.state = {
            accordianShow: false
        };
        return _this;
    }

    _createClass(Accordian, [{
        key: "toggleAccordian",
        value: function toggleAccordian() {
            this.setState(function (prevState) {
                return { accordianShow: !prevState.accordianShow };
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

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
                                { className: "acdn-title", onClick: function onClick() {
                                        return _this2.toggleAccordian();
                                    } },
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
    }]);

    return Accordian;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePagePackageWidget = function (_React$PureComponent) {
    _inherits(HomePagePackageWidget, _React$PureComponent);

    function HomePagePackageWidget(props) {
        _classCallCheck(this, HomePagePackageWidget);

        var _this = _possibleConstructorReturn(this, (HomePagePackageWidget.__proto__ || Object.getPrototypeOf(HomePagePackageWidget)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(HomePagePackageWidget, [{
        key: "navigateTo",
        value: function navigateTo(where, e) {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }

            if (this.props.type) {
                this.props.selectSearchType(this.props.type);
            }
            this.props.historyObj.push(where);
        }
    }, {
        key: "scroll",
        value: function scroll(type) {
            var elmnt = document.getElementById("pkgSlider");
            var outerDivWidth = document.getElementsByClassName("pkgSliderContainer")[0].offsetWidth;
            var childDivWidth = document.getElementsByClassName('pkgCardsList')[0].offsetWidth;
            var cardCount = document.getElementsByClassName('pkgCardsList')[0].childElementCount;
            var cardWidth = Math.ceil(childDivWidth / cardCount);

            var leftScroll = document.getElementById("pkgSlider").scrollLeft;
            var scrollVal = Math.floor(outerDivWidth / cardWidth) * cardWidth;
            var cardEnd = cardCount * cardWidth;

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
    }, {
        key: "goldClicked",
        value: function goldClicked() {
            var data = {
                'Category': 'ConsumerApp', 'Action': 'HomePackageGoldClicked', 'CustomerID': GTM.getUserId() || '', 'leadid': 0, 'event': 'vip-homepage-package-gold-clicked'
            };
            GTM.sendEvent({ data: data });
            this.props.historyObj.push('/vip-gold-details?is_gold=true&source=homepagepackagegoldlisting&lead_source=Docprime');
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

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
                        this.props.list.map(function (listItem, i) {
                            return _react2.default.createElement(
                                "div",
                                { className: "pkgcustCards " + (type ? '' : ''), key: i, onClick: _this2.props.searchFunc.bind(_this2, listItem, true) },
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
                                    listItem.no_of_tests > 0 ? "(" + listItem.no_of_tests + " tests)" : ''
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
                                        { className: "pkg-prc-ct home-screengoldprice", onClick: _this2.goldClicked.bind(_this2) },
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
    }]);

    return HomePagePackageWidget;
}(_react2.default.PureComponent);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopProcedureWidgets = function (_React$PureComponent) {
    _inherits(TopProcedureWidgets, _React$PureComponent);

    function TopProcedureWidgets() {
        _classCallCheck(this, TopProcedureWidgets);

        return _possibleConstructorReturn(this, (TopProcedureWidgets.__proto__ || Object.getPrototypeOf(TopProcedureWidgets)).apply(this, arguments));
    }

    _createClass(TopProcedureWidgets, [{
        key: 'navigateTo',
        value: function navigateTo(data, e) {
            e.preventDefault();
            e.stopPropagation();
            var selectedCriteria = {
                type: 'ipd',
                id: data.id,
                name: data.name
            };

            var gtmData = {
                'Category': 'ConsumerApp', 'Action': 'HomeWidgetProcedureClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'home-widget-procedure-clicked', 'selected': data.name || '', 'selectedId': data.id || ''
            };
            _gtm2.default.sendEvent({ data: gtmData });

            this.props.toggleIPDCriteria(selectedCriteria, true);

            if (data.url) {
                this.props.historyObj.push('/' + data.url + '?showPopup=true');
            } else {
                this.props.historyObj.push('/ipdInfo?ipd_id=' + data.id + '&showPopup=true');
            }
        }
    }, {
        key: 'scroll',
        value: function scroll(type) {
            var elmnt = document.getElementById("top_ipd");
            var outerDivWidth = elmnt.offsetWidth;
            var childDivWidth = document.getElementsByClassName('top_ipd_list')[0].offsetWidth;
            var cardCount = document.getElementsByClassName('top_ipd_list')[0].childElementCount;
            var cardWidth = Math.ceil(childDivWidth / cardCount);

            var leftScroll = document.getElementById("top_ipd").scrollLeft;
            var scrollVal = Math.floor(outerDivWidth / cardWidth) * cardWidth;
            var cardEnd = cardCount * cardWidth;

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
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

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
                        this.props.top_data.map(function (data, i) {
                            return _react2.default.createElement(
                                'a',
                                { href: data.url ? '' + data.url : 'ipdInfo?ipd_id=' + data.id, className: 'pkgcustCards', key: _this2.props.mergeState ? i : data.url ? data.url : i, onClick: _this2.navigateTo.bind(_this2, data) },
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
    }]);

    return TopProcedureWidgets;
}(_react2.default.PureComponent);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopHospitalWidgets = function (_React$PureComponent) {
    _inherits(TopHospitalWidgets, _React$PureComponent);

    function TopHospitalWidgets(props) {
        _classCallCheck(this, TopHospitalWidgets);

        var _this = _possibleConstructorReturn(this, (TopHospitalWidgets.__proto__ || Object.getPrototypeOf(TopHospitalWidgets)).call(this, props));

        _this.state = {
            mergedState: false
        };
        return _this;
    }

    _createClass(TopHospitalWidgets, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (!this.props.topHospital) {
                this.setState({ mergedState: true });
            }
        }
    }, {
        key: 'navigateTo',
        value: function navigateTo(data, e) {
            e.preventDefault();
            e.stopPropagation();
            var gtmData = {};
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

            var redirectUrl = '';

            if (data.url) {
                redirectUrl = '/' + data.url;
            } else {
                redirectUrl = '/ipd/hospital/' + data.id;
            }

            if (data.is_ipd_hospital) {
                redirectUrl += '?showPopup=true';
            }

            /*if(this.props.is_ipd_form_submitted){
             }else {
                redirectUrl+= '&get_feedback=1'
            }*/

            this.props.historyObj.push(redirectUrl);
        }
    }, {
        key: 'scroll',
        value: function scroll(type) {
            var dataType = this.props.dataType;
            var dataList = this.props.dataType + '_list';
            var elmnt = document.getElementById(dataType);
            var outerDivWidth = elmnt.offsetWidth;
            var childDivWidth = document.getElementsByClassName(dataList)[0].offsetWidth;
            var cardCount = document.getElementsByClassName(dataList)[0].childElementCount;
            var cardWidth = Math.ceil(childDivWidth / cardCount);

            var leftScroll = document.getElementById(dataType).scrollLeft;
            var scrollVal = Math.floor(outerDivWidth / cardWidth) * cardWidth;
            var cardEnd = cardCount * cardWidth;

            if (type == 'right') {
                elmnt.scroll({ left: leftScroll + scrollVal, behavior: 'smooth' });
                if (cardEnd <= leftScroll + scrollVal + outerDivWidth) {
                    document.getElementById(dataType + '_leftArrow_hsptl').classList.add("d-none");
                }
                document.getElementById(dataType + '_RightArrow_hsptl').classList.remove("d-none");
            } else {
                elmnt.scroll({ left: leftScroll - scrollVal, behavior: 'smooth' });
                if (leftScroll - scrollVal <= 0) {
                    document.getElementById(dataType + '_RightArrow_hsptl').classList.add("d-none");
                }
                document.getElementById(dataType + '_leftArrow_hsptl').classList.remove("d-none");
            }
        }
    }, {
        key: 'viewAllClicked',
        value: function viewAllClicked() {
            this.props.nearbyHospitalViewAllClicked();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                topHeading = _props.topHeading,
                dataType = _props.dataType,
                showViewAll = _props.showViewAll;

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
                        { onClick: function onClick() {
                                return _this2.viewAllClicked();
                            } },
                        'View All'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'pkgSliderContainer', id: dataType },
                    _react2.default.createElement(
                        'div',
                        { className: 'pkgCardsList d-inline-flex sub-wd-cards ' + dataType + '_list' },
                        this.props.top_data.slice(0, 20).map(function (data, i) {
                            return _react2.default.createElement(
                                'a',
                                { key: _this2.state.mergedState ? i + '_list_' + dataType : data.url ? data.url : data.id + '_' + dataType, href: data.url ? '/' + data.url : '/ipd/hospital/' + data.id, className: 'pkgcustCards', onClick: _this2.navigateTo.bind(_this2, data) },
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
                        { className: 'pkg-btnlft d-none', id: dataType + '_RightArrow_hsptl', onClick: this.scroll.bind(this, 'left') },
                        _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'pkg-btnrgt', id: dataType + '_leftArrow_hsptl', onClick: this.scroll.bind(this, 'right') },
                        _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                    )
                )
            );
        }
    }]);

    return TopHospitalWidgets;
}(_react2.default.PureComponent);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UpComingAppointmentView = function (_React$Component) {
    _inherits(UpComingAppointmentView, _React$Component);

    function UpComingAppointmentView(props) {
        _classCallCheck(this, UpComingAppointmentView);

        var _this = _possibleConstructorReturn(this, (UpComingAppointmentView.__proto__ || Object.getPrototypeOf(UpComingAppointmentView)).call(this, props));

        _this.state = {
            index: 0,
            startX: 0,
            startY: 0,
            distX: 0,
            distY: 0
        };
        return _this;
    }

    _createClass(UpComingAppointmentView, [{
        key: 'showAppointment',
        value: function showAppointment(appointment_type, appointment_id, e) {
            if (appointment_type == 'doctor') {
                this.props.history.push('/opd/appointment/' + appointment_id);
            } else {
                this.props.history.push('/lab/appointment/' + appointment_id);
            }
        }
    }, {
        key: 'getTime',
        value: function getTime(unix_timestamp) {
            var date = new Date(unix_timestamp);
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0' + minutes : minutes;
            var strTime = hours + ':' + minutes + ' ' + ampm;
            return strTime;
        }
    }, {
        key: 'getDate',
        value: function getDate(unix_date) {
            var date = new Date(unix_date);
            var newDate = date.toDateString();
            return newDate;
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
            var totalAppointments = '';
            var curr_index = void 0;
            this.state.distX = touchobj.pageX - this.state.startX;
            this.state.distY = touchobj.pageY - this.state.startY;
            var elapsedTime = new Date().getTime() - startTime;
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
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (this.props.upcoming_appointments && this.props.upcoming_appointments.length > 0) {
                var appointment = {};
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
                                        'with ' + (appointment.type == "doctor" ? 'Dr.' : '') + ' ' + appointment.name
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
                            this.props.upcoming_appointments && this.props.upcoming_appointments.map(function (appointmentDots, i) {
                                return _react2.default.createElement('span', { key: i, onClick: function onClick() {
                                        return _this2.setState({ index: i });
                                    }, className: _this2.state.index == i ? "active" : '' });
                            })
                        ) : ''
                    )
                );
            } else {
                return _react2.default.createElement('div', null);
            }
        }
    }]);

    return UpComingAppointmentView;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _initialsPicture = __webpack_require__(/*! ../../../commons/initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

var _gtm = __webpack_require__(/*! ../../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _utils = __webpack_require__(/*! ../../../../helpers/utils.js */ "./dev/js/helpers/utils.js");

var _storage = __webpack_require__(/*! ../../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _constants = __webpack_require__(/*! constants */ "./node_modules/constants-browserify/constants.json");

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PackageCompareStrip = function (_React$Component) {
  _inherits(PackageCompareStrip, _React$Component);

  function PackageCompareStrip(props) {
    _classCallCheck(this, PackageCompareStrip);

    var _this = _possibleConstructorReturn(this, (PackageCompareStrip.__proto__ || Object.getPrototypeOf(PackageCompareStrip)).call(this, props));

    _this.state = {
      checked: false
    };
    return _this;
  }

  _createClass(PackageCompareStrip, [{
    key: 'comparePackages',
    value: function comparePackages() {
      if (this.props.compare_packages.length > 5) {
        _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Max 5 packages can be compared" });
      } else {
        var selectedPkgCompareIds = [];
        if (this.props.compare_packages) {
          this.props.compare_packages.map(function (packages, i) {
            selectedPkgCompareIds.push(packages.id + '-' + packages.lab_id);
          });
        }
        this.props.history.push('/package/compare?package_ids=' + selectedPkgCompareIds);
      }
    }
  }, {
    key: 'clearPackage',
    value: function clearPackage() {
      this.props.resetPkgCompare();
    }
  }, {
    key: 'render',
    value: function render() {
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
  }]);

  return PackageCompareStrip;
}(_react2.default.Component);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvQWNjb3JkaWFuLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvSG9tZS9Ib21lUGFnZVBhY2thZ2VXaWRnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Ib21lL0hvbWVQYWdlUHJvY2VkdXJlV2lkZ2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvSG9tZVBhZ2VUb3BIb3NwaXRhbHMuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Ib21lL3VwQ29taW5nQXBwb2ludG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL3NlYXJjaFBhY2thZ2VzL3BhY2thZ2VDb21wYXJlL3BhY2thZ2VDb21wYXJlU3RyaXAuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2hlbHBlcnMvdXRpbHMuanMiXSwibmFtZXMiOlsiQWNjb3JkaWFuIiwicHJvcHMiLCJzdGF0ZSIsImFjY29yZGlhblNob3ciLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsInRvZ2dsZUFjY29yZGlhbiIsIkFTU0VUU19CQVNFX1VSTCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiSG9tZVBhZ2VQYWNrYWdlV2lkZ2V0Iiwid2hlcmUiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0eXBlIiwic2VsZWN0U2VhcmNoVHlwZSIsImhpc3RvcnlPYmoiLCJwdXNoIiwiZWxtbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib3V0ZXJEaXZXaWR0aCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJvZmZzZXRXaWR0aCIsImNoaWxkRGl2V2lkdGgiLCJjYXJkQ291bnQiLCJjaGlsZEVsZW1lbnRDb3VudCIsImNhcmRXaWR0aCIsIk1hdGgiLCJjZWlsIiwibGVmdFNjcm9sbCIsInNjcm9sbExlZnQiLCJzY3JvbGxWYWwiLCJmbG9vciIsImNhcmRFbmQiLCJzY3JvbGwiLCJsZWZ0IiwiYmVoYXZpb3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJkYXRhIiwiR1RNIiwiZ2V0VXNlcklkIiwic2VuZEV2ZW50IiwibmF2aWdhdGVUbyIsImJpbmQiLCJuYXZUbyIsImxpc3QiLCJtYXAiLCJsaXN0SXRlbSIsImkiLCJzZWFyY2hGdW5jIiwiaWNvbiIsIm5hbWUiLCJub19vZl90ZXN0cyIsInZpcCIsImlzX2dvbGRfbWVtYmVyIiwiaXNfdmlwX21lbWJlciIsImNvdmVyZWRfdW5kZXJfdmlwIiwidmlwX2Ftb3VudCIsInZpcF9jb252ZW5pZW5jZV9hbW91bnQiLCJtcnAiLCJ3aWR0aCIsImRpc2NvdW50ZWRfcHJpY2UiLCJwYXJzZUludCIsInZpcF9nb2xkX3ByaWNlIiwiaXNfZ29sZCIsImlzX2VuYWJsZV9mb3JfdmlwIiwiZ29sZENsaWNrZWQiLCJjb2xvciIsInRyYW5zZm9ybSIsIm1hcmdpbiIsIlB1cmVDb21wb25lbnQiLCJUb3BQcm9jZWR1cmVXaWRnZXRzIiwic2VsZWN0ZWRDcml0ZXJpYSIsImlkIiwiZ3RtRGF0YSIsInRvZ2dsZUlQRENyaXRlcmlhIiwidXJsIiwidG9wX2RhdGEiLCJtZXJnZVN0YXRlIiwic3ZnX2ljb24iLCJUb3BIb3NwaXRhbFdpZGdldHMiLCJtZXJnZWRTdGF0ZSIsInRvcEhvc3BpdGFsIiwicmVkaXJlY3RVcmwiLCJpc19pcGRfaG9zcGl0YWwiLCJkYXRhVHlwZSIsImRhdGFMaXN0IiwibmVhcmJ5SG9zcGl0YWxWaWV3QWxsQ2xpY2tlZCIsInRvcEhlYWRpbmciLCJzaG93Vmlld0FsbCIsImxlbmd0aCIsInZpZXdBbGxDbGlja2VkIiwic2xpY2UiLCJsb2dvIiwic2VvX3RpdGxlIiwiaDFfdGl0bGUiLCJVcENvbWluZ0FwcG9pbnRtZW50VmlldyIsImluZGV4Iiwic3RhcnRYIiwic3RhcnRZIiwiZGlzdFgiLCJkaXN0WSIsImFwcG9pbnRtZW50X3R5cGUiLCJhcHBvaW50bWVudF9pZCIsImhpc3RvcnkiLCJ1bml4X3RpbWVzdGFtcCIsImRhdGUiLCJEYXRlIiwiaG91cnMiLCJnZXRIb3VycyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwiYW1wbSIsInN0clRpbWUiLCJ1bml4X2RhdGUiLCJuZXdEYXRlIiwidG9EYXRlU3RyaW5nIiwiZXZlbnQiLCJ0b3VjaG9iaiIsImNoYW5nZWRUb3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsInN0YXJ0VGltZSIsImdldFRpbWUiLCJyZXR1cm5WYWx1ZSIsInRvdGFsQXBwb2ludG1lbnRzIiwiY3Vycl9pbmRleCIsImVsYXBzZWRUaW1lIiwiYWJzIiwidXBjb21pbmdfYXBwb2ludG1lbnRzIiwib2ZmZXJMaXN0IiwiYXBwb2ludG1lbnQiLCJvblRvdWNoU3RhcnQiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hFbmQiLCJzaG93QXBwb2ludG1lbnQiLCJwYXRpZW50X25hbWUiLCJnZXREYXRlIiwidGltZV9zbG90X3N0YXJ0IiwiYXBwb2ludG1lbnREb3RzIiwiUGFja2FnZUNvbXBhcmVTdHJpcCIsImNoZWNrZWQiLCJjb21wYXJlX3BhY2thZ2VzIiwiU25hY2tCYXIiLCJzaG93IiwicG9zIiwidGV4dCIsInNlbGVjdGVkUGtnQ29tcGFyZUlkcyIsInBhY2thZ2VzIiwibGFiX2lkIiwicmVzZXRQa2dDb21wYXJlIiwiY29tcGFyZVBhY2thZ2VzIiwiY2xlYXJQYWNrYWdlIiwiYnVpbGRPcGVuQmFubmVyIiwibGFiX3RpbWluZyIsImxhYl90aW1pbmdfZGF0YSIsIm5leHRfbGFiX3RpbWluZyIsIm5leHRfbGFiX3RpbWluZ19kYXRhIiwiaXNfb3Blbl9ub3ciLCJvcGVuX25leHRfdG9kYXkiLCJ0aW1lX25vdyIsImx0ZCIsImVuZCIsInN0YXJ0IiwiZm9udFNpemUiLCJfZGVjaW1hbFRvVGltZSIsIldFRUtfREFZUyIsIm5leHRfb3BlbiIsIm5leHRfb3Blbl90b2RheSIsInRvZGF5Iiwid2Vla0RheU51bWJlciIsImdldERheSIsInRpbWUiLCJ0b1N0cmluZyIsInNwbGl0IiwiZGF5X3RpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFTUEsUzs7O0FBQ0YsdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsMkJBQWU7QUFETixTQUFiO0FBRmU7QUFLbEI7Ozs7MENBRWlCO0FBQ2QsaUJBQUtDLFFBQUwsQ0FBYztBQUFBLHVCQUFjLEVBQUVELGVBQWUsQ0FBQ0UsVUFBVUYsYUFBNUIsRUFBZDtBQUFBLGFBQWQ7QUFDSDs7O2lDQUVRO0FBQUE7O0FBQ0wsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVUscUJBQWY7QUFDSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxLQUFmO0FBQ0k7QUFBQTtBQUFBLDBCQUFLLFdBQVUsUUFBZjtBQUNJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLGNBQWY7QUFDSTtBQUFBO0FBQUEsa0NBQUssV0FBVSxZQUFmLEVBQTRCLFNBQVM7QUFBQSwrQ0FBTSxPQUFLRyxlQUFMLEVBQU47QUFBQSxxQ0FBckM7QUFDSTtBQUFBO0FBQUEsc0NBQUksV0FBVSxRQUFkO0FBQUE7QUFBQSxpQ0FESjtBQUVJLHVFQUFLLFdBQVcsS0FBS0osS0FBTCxDQUFXQyxhQUFYLEdBQTJCLGVBQTNCLEdBQTZDLFlBQTdELEVBQTJFLEtBQUtJLFNBQWVBLEdBQUcsd0NBQWxHO0FBRkosNkJBREo7QUFLSTtBQUFBO0FBQUEsa0NBQUssV0FBVyxLQUFLTCxLQUFMLENBQVdDLGFBQVgsR0FBMkIsNkJBQTNCLEdBQTJELDRCQUEzRTtBQUNJLHNFQUFJLFdBQVUsU0FBZCxHQURKO0FBR0k7QUFBQTtBQUFBLHNDQUFHLFdBQVUsZ0JBQWI7QUFBQTtBQUFBLGlDQUhKO0FBTUk7QUFBQTtBQUFBLHNDQUFHLFdBQVUsZ0JBQWI7QUFBQTtBQUFBLGlDQU5KO0FBU0k7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QSxRQUFJaEUsVUFBVThELEtBQUtFLEtBQUwsQ0FBVyxHQUFYLEVBQWdCLENBQWhCLENBQWQ7QUFDQWxFLFlBQVE5QyxTQUFTOEMsS0FBVCxDQUFSO0FBQ0EsUUFBSUUsV0FBVyxHQUFmLEVBQW9CO0FBQ2hCQSxrQkFBVSxLQUFWO0FBQ0gsS0FGRCxNQUVPO0FBQ0hBLGtCQUFVLEVBQVY7QUFDSDtBQUNELFFBQUlpRSxXQUFXLElBQWY7QUFDQSxRQUFJbkUsU0FBUyxFQUFiLEVBQWlCO0FBQ2JtRSxtQkFBVyxJQUFYO0FBQ0g7QUFDRG5FLFlBQVFBLFFBQVEsRUFBaEI7QUFDQSxnQkFBVUEsS0FBVixHQUFrQkUsT0FBbEIsU0FBNkJpRSxRQUE3QjtBQUNILEMiLCJmaWxlIjoiMzkuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgQWNjb3JkaWFuIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY2NvcmRpYW5TaG93OiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlQWNjb3JkaWFuKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoeyBhY2NvcmRpYW5TaG93OiAhcHJldlN0YXRlLmFjY29yZGlhblNob3cgfSkpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHAtMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRwLWFjY29yZGlhblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNkbi10aXRsZVwiIG9uQ2xpY2s9eygpID0+IHRoaXMudG9nZ2xlQWNjb3JkaWFuKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZnctNTAwXCI+S25vdyBtb3JlIGFib3V0IERvY3ByaW1lPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3RoaXMuc3RhdGUuYWNjb3JkaWFuU2hvdyA/IFwiYWNkbi1hcnJvdy11cFwiIDogXCJhY2RuLWFycm93XCJ9IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmFjY29yZGlhblNob3cgPyBcImFjZG4tYm9keSBtcnQtMTAgYWNkbi1ibG9ja1wiIDogXCJhY2RuLWJvZHkgbXJ0LTEwIGFjZG4tbm9uZVwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImFjZG4taHJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGgzIGNsYXNzTmFtZT1cImZ3LTUwMCBtcmItMTAgYWNkbi1oZWFkaW5nXCI+RnJlZSBGYW1pbHkgRG9jdG9yIGZvciBMaWZlPC9oMz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXJiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgZW5vcm1vdXNseSBsb3cgcmF0aW8gb2YgZG9jdG9ycyB0byBwYXRpZW50cyBpcyBvbmUgb2YgdGhlIGJpZ2dlc3QgY2hhbGxlbmdlcyBmb3IgdGhlIGNvdW50cnnigJlzIGhlYWx0aGNhcmUgc3lzdGVtLiBBbmQgdGhhdOKAmXMgd2h5IGRvY3ByaW1lIGVuZGVhdm9ycyB0byBicmlkZ2UgdGhlIGdhcCBiZXR3ZWVuIGRvY3RvcnMgYW5kIHBhdGllbnRzIHdpdGggb3VyIGN1dHRpbmctZWRnZSB0ZWNobm9sb2d5IHBvd2VyZWQgcGxhdGZvcm0gdG8gZGVsaXZlciBoaWdoLXF1YWxpdHkgaGVhbHRoY2FyZSBhbnl0aW1lIGFueXdoZXJlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQSBncm91cCBjb21wYW55IG9mIFBvbGljeWJhemFhciwgZG9jcHJpbWUgZ2l2ZXMgeW91IGFjY2VzcyB0byBoaWdobHkgc2tpbGxlZCByZWdpc3RlcmVkIG1lZGljYWwgcHJhY3RpdGlvbmVyIHNvIHRoYXQgeW91IGNhbiBhdmFpbCBob3NwaXRhbC1xdWFsaXR5IGhlYWx0aGNhcmUgcmlnaHQgZnJvbSB0aGUgY29tZm9ydCBvZiB5b3VyIGhvbWUuIFRoZSBjb21wYW55IGFpbXMgdG8gYnJpbmcgYmFjayB0aGUgY29uY2VwdCBvZiBhIGZhbWlseSBkb2N0b3Igd2l0aCBpdHMgZXZlci1zby1ncm93aW5nIG5ldHdvcmsgb2YgaGVhbHRoY2FyZSBwcm9mZXNzaW9uYWxzIHRvIG1ha2UgaGlnaC1xdWFsaXR5IG1lZGljYWwgYXNzaXN0YW5jZSBhdmFpbGFibGUgcmlnaHQgYXQgeW91ciBmaW5nZXJ0aXBzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2l0aCBhIHRlYW0gb2YgaGlnaGx5LXNraWxsZWQgZG9jdG9ycywgQUktZW5hYmxlZCBDaGF0Ym90IHRlY2hub2xvZ3kgYW5kLCBhbiBlYXN5LXRvLW5hdmlnYXRlLCB1c2VyLWZyaWVuZGx5IGludGVyZmFjZSwgZG9jcHJpbWUgaXMgYWxsIHNldCB0byBiZWF0IGFyZHVvdXMgaGVhbHRoIGNoYWxsZW5nZXMgYW5kIGVuc3VyZSBlYXN5IGFjY2VzcyB0byBxdWFsaWZpZWQgZG9jdG9ycyBmb3IgYmlsbGlvbnMgb2YgcGVvcGxlLCBjcmVhdGluZyBhbiBleHBlcmllbmNlIHRoYXTigJlzIHRydWx5IGRlbGlnaHRmdWwgZm9yIGJvdGggZW5kLXVzZXJzIGFuZCBoZWFsdGhjYXJlIGV4cGVydHMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcmItMTAgYWNkbi1oZWFkaW5nXCI+RG9jcHJpbWUgZm9yIFBhdGllbnRzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYWNkbi1zdWJoZWFkaW5nXCI+RnJlZSBPbmxpbmUgRG9jdG9yIENvbnN1bHRhdGlvbjwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXJiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBc2sgYSBEb2N0b3IgJiBnZXQgYW5zd2VycyBmb3IgeW91ciBoZWFsdGggcXVlcmllcyBmb3IgZnJlZSBvciBpbmR1bGdlIGluIGEgb25lLW9uLW9uZSBvbmxpbmUgY29uc3VsdGF0aW9uLCBhdCBhbnkgdGltZSBhbmQgZnJvbSBhbnl3aGVyZS4gU2ltcGx5IHZpc2l0IG91ciB3ZWJzaXRlIGFuZCBzdGFydCBpbnRlcmFjdGluZyB3aXRoIGJlc3QtaW4tY2xhc3MgaGVhbHRoY2FyZSBleHBlcnRzIGZyb20gdmFyaW91cyBzcGVjaWFsdGllcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImFjZG4tc3ViaGVhZGluZ1wiPkJvb2sgRG9jdG9yIEFwcG9pbnRtZW50cyBPbmxpbmUgKHVwdG8gNTAlIG9mZik8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2h5IHdhaXQgaW4gbG9uZyBxdWV1ZXMgdG8gYm9vayBhbiBhcHBvaW50bWVudCB3aXRoIHRoZSBkb2N0b3Igb2YgeW91ciBjaG9pY2UsIHdoZW4geW91IGNhbiBlYXNpbHkgZG8gaXQgb25saW5lIGFuZCB0aGF0IHRvbyBhdCBhIG11Y2ggbG93ZXIgcHJpY2U/RmluZCBzb21lIG9mIHRoZSBiZXN0IGRvY3RvcnMgbmVhciB5b3U7IGNoZWNrIHRoZWlyIGRvY3RvciBwcm9maWxlcywgYW5kIGJvb2sgYW4gYXBwb2ludG1lbnQgb25saW5lIHdpdGggdGhlIGRvY3RvciBvZiB5b3VyIGNob2ljZSBnZXQgNTAlIG9mZiBvbiBib29raW5nIGZlZXMsIGFsbCB3aXRoIGp1c3QgYSBmZXcgY2xpY2tzIGFuZCBpbiBhIG1hdHRlciBvZiBhIGZldyBtaW51dGVzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYWNkbi1zdWJoZWFkaW5nXCI+Qm9vayBUZXN0cyBhdCBEaWFnbm9zdGljIENlbnRyZXMgJiBMYWJzICh1cHRvIDUwJSBvZmYpPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpc2NvdmVyIHRoZSBiZXN0IGRpYWdub3N0aWMgY2VudHJlcyBuZWFyIHlvdSBmcm9tIG91ciBodWdlIGludmVudG9yeSBhbmQgYm9vayBhcHBvaW50bWVudHMgYXQgdGhlIGRpYWdub3N0aWMgY2VudHJlIG9mIHlvdXIgY2hvaWNlLCBpbiBqdXN0IGEgZmV3IGNsaWNrcy4gU28gYm9vayBkaWFnbm9zdGljIHRlc3RzIHRvZGF5IGFuZCBnZXQgdXAgdG8gNTAlIG9mZi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1yYi0xMCBhY2RuLWhlYWRpbmdcIj5Eb2NwcmltZSBmb3IgRG9jdG9yczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImFjZG4tc3ViaGVhZGluZ1wiPldpZGVuIFlvdXIgUmVhY2g8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJlIHlvdSBhIGRvY3RvciBvciBhIGhlYWx0aGNhcmUgZXhwZXJ0PyBVc2UgZG9jcHJpbWUgdG8gaW5jcmVhc2UgeW91ciB2aXNpYmlsaXR5IG1hbmlmb2xkLCByZWFjaCBvdXQgdG8gYSB3aWRlciByYW5nZSBvZiBwYXRpZW50cyBhbmQgZ3JvdyB5b3VyIHByYWN0aWNlIHdpdGhvdXQgaGF2aW5nIHRvIHJ1biBmcm9tIHBpbGxhciB0byBwb3N0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYWNkbi1zdWJoZWFkaW5nXCI+U2ltcGxpZnkgWW91ciBQcmFjdGljZTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXJiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUYWtlIHRoZSBoYXNzbGUgb3V0IG9mIHlvdXIgcHJhY3RpY2UgYW5kIGZvY3VzIGJldHRlciBvbiB5b3VyIHBhdGllbnRzLiBBdXRvbWF0ZSBldmVyeXRoaW5nIHJpZ2h0IGZyb20gYXBwb2ludG1lbnQgbWFuYWdlbWVudCB0byBwYXltZW50IHRyYWNraW5nIGFuZCBqdXN0IGZvY3VzIG9uIHByb3ZpZGluZyB0aGUgaGlnaGVzdCBxdWFsaXR5IG9mIHRyZWF0bWVudCB0byB0aGVpciBwYXRpZW50cy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1yYi0xMCBhY2RuLWhlYWRpbmdcIj5Eb2NwcmltZSBTZXJ2aWNlczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImFjZG4tc3ViaGVhZGluZ1wiPkJvb2sgTGFiIFRlc3Q8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9vayBsYWIgdGVzdCByaWdodCBmcm9tIHRoZSBjb21mb3J0IG9mIHlvdXIgaG9tZS4gR2V0IGFtYXppbmcgZGlzY291bnRzIG9uIGxhYiB0ZXN0cyBhbmQgZ2V0IHNhbXBsZXMgY29sbGVjdGVkIGFuZCByZXBvcnQgZGVsaXZlcmVkLCByaWdodCBhdCB5b3VyIGRvb3JzdGVwcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImFjZG4tc3ViaGVhZGluZ1wiPkhlYWx0aCBGZWVkPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE91ciBhaW0gdG8gZW5zdXJlIGEgaGVhbHRoeSBsaWZlc3R5bGUgZm9yIGV2ZXJ5b25lIGFuZCBpbiBvcmRlciB0byBkbyB0aGF0IG91ciBrbm93bGVkZ2UtcGFja2VkIGhlYWx0aCBmZWVkIG9mZmVycyBpbmZvcm1hdGlvbiBvbiB2YXJpb3VzIGRpc2Vhc2VzLCBzeW1wdG9tcywgYW5kIG1lZGljaW5lcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZ3LTUwMCBtcmItMTAgYWNkbi1oZWFkaW5nXCI+UXVlc3Rpb25zIFlvdSBNYXkgaGF2ZTo8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZnctNTAwIGFjZG4tcXVlc1wiPlF1ZXN0aW9uIDE6IEkgaGF2ZSBhIG1lZGljYWwgcXVlc3Rpb24uIENhbiBJIGFzayBpdCBmb3IgZnJlZT88L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5BbnN3ZXI6PC9zdHJvbmc+IFllcyEgWW91IGNhbiBhc2sgeW91ciBtZWRpY2FsIHF1ZXN0aW9ucyBmb3IgZnJlZS4gQWx0ZXJuYXRpdmVseSwgeW91IG1heSBhbHNvIGRvd25sb2FkIGRvY3ByaW1lIEFwcCwgYXZhaWxhYmxlIGF0IEdvb2dsZSBQbGF5IFN0b3JlIGFuZCBBcHAgU3RvcmUsIGZvciBmcmVlIGFuZCBhc2sgYSBmcmVlIGhlYWx0aCBxdWVzdGlvbiB0byBvdXIgZG9jdG9ycy4gVHlwaWNhbGx5LCBvdXIgZG9jdG9ycyB3aWxsIGFuc3dlciB5b3VyIHF1ZXJ5IHdpdGhpbiAyNCB3b3JraW5nIGhvdXJzIGFmdGVyIHJlY2VpdmluZyB5b3VyIHF1ZXJ5LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZnctNTAwIGFjZG4tcXVlc1wiPlF1ZXN0aW9uIDI6IENhbiBkb2N0b3JzIGF0IGRvY3ByaW1lIGhlbHAgbWUgd2l0aCBteSBtZWRpY2FsIGlzc3Vlcz88L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5BbnN3ZXI6PC9zdHJvbmc+IE91ciB0ZWFtIG9mIGRvY3RvcnMgaXMgZGVkaWNhdGVkIHRvIGhlbHBpbmcgeW91IHVuZGVyc3RhbmQgeW91ciBtZWRpY2FsIGlzc3VlcyBhbmQgaWRlbnRpZnkgdGhlIG5leHQgc3RlcHMgdGhhdCBtYXkgaW5jbHVkZSBsYWIgdGVzdHMsIG1lZGljYXRpb25zLCBvciB0aXBzIHRvIGltcHJvdmUgbWVkaWNhbCBjb25kaXRpb25zLiBObyBtYXR0ZXIgd2hhdCB5b3VyIG1lZGljYWwgcXVlc3Rpb25zIGFyZSwgb3VyIGRvY3RvcnMgd2lsbCBiZSBhYmxlIHRvIHBvaW50IHlvdSBpbiB0aGUgcmlnaHQgZGlyZWN0aW9uIHRvd2FyZHMgdGhlIGltcHJvdmVtZW50IG9mIHlvdXIgaGVhbHRoLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZnctNTAwIGFjZG4tcXVlc1wiPlF1ZXN0aW9uIDM6IFdoYXQgaWYgZG9jcHJpbWUgZG9jdG9ycyBkb27igJl0IGdldCBtZSBhIHJlc3BvbnNlPzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXJiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkFuc3dlcjo8L3N0cm9uZz4gUmVzdCBhc3N1cmVkLCBvdXIgdGVhbSBvZiBkb2N0b3JzIHdpbGwgbmV2ZXIgbWlzcyBvdXQgb24gcmVzcG9uZGluZyB0byB5b3VyIG1lZGljYWwgcXVlc3Rpb25zLiBJZiB5b3UsIHN0aWxsLCBkb27igJl0IGdldCBhIHJlc3BvbnNlLCBkbyBsZWF2ZSB1cyBhIG1lc3NhZ2UgYXQgb3VyIHNvY2lhbCBtZWRpYSBwYWdlcyBvciBjYWxsIHVzIHVwIGF0IG91ciB0b2xsLWZyZWUgbnVtYmVyIGFuZCBvdXIgdGVhbSBvZiBleHBlcnRzIHdpbGwgbG92ZSB0byBhc3Npc3QgeW91LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZnctNTAwIGFjZG4tcXVlc1wiPlF1ZXN0aW9uIDQ6IEFyZSBkb2N0b3JzIG9uIHlvdXIgdGVhbSBxdWFsaWZpZWQ/PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+QW5zd2VyOjwvc3Ryb25nPiBXZSBoYXZlIGEgaGFuZC1waWNrZWQgaGlnaGx5LXF1YWxpZmllZCB0ZWFtIG9mIGRvY3RvcnMgYWNyb3NzIHZhcmlvdXMgc3BlY2lhbHRpZXMuIFJlc3QgYXNzdXJlZCwgYW55IGRvY3RvciB0aGF0IHlvdSB3aWxsIGJlIGNvbnN1bHRpbmcgYXQgZG9jcHJpbWUgd2lsbCBiZSBhIHZlcmlmaWVkLCBoaWdobHktc2tpbGxlZCBoZWFsdGhjYXJlIHByYWN0aXRpb25lci5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZ3LTUwMCBhY2RuLXF1ZXNcIj5RdWVzdGlvbiA1OiBJcyBteSBwZXJzb25hbCBpbmZvcm1hdGlvbiBzYWZlIGFuZCBpcyB0aGUgY29uc3VsdGF0aW9uIG9uIGRvY3ByaW1lIHByaXZhdGU/PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+QW5zd2VyOjwvc3Ryb25nPiBZZXMhIFdlIHJlc3BlY3QgdGhlIHByaXZhY3kgb2YgZXZlcnkgaW5kaXZpZHVhbC4gVGhhdOKAmXMgd2h5IHdlIG1ha2Ugc3VyZSB0aGF0IGFsbCB5b3VyIHByaXZhdGUgYW5kIHBlcnNvbmFsIGluZm9ybWF0aW9uIGlzIG5vdCBzaGFyZWQgd2l0aCBhbnkgdGhpcmQtcGFydHkuIEluIGFkZGl0aW9uLCBldmVyeSBjb25zdWx0YXRpb24gb24gZG9jcHJpbWUgaXMgcHJpdmF0ZSBhbmQgY29uZmlkZW50aWFsLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlhbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEhvbWVQYWdlUGFja2FnZVdpZGdldCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmF2aWdhdGVUbyh3aGVyZSwgZSkge1xuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy50eXBlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdFNlYXJjaFR5cGUodGhpcy5wcm9wcy50eXBlKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeU9iai5wdXNoKHdoZXJlKVxuICAgIH1cblxuXG5cbiAgICBzY3JvbGwodHlwZSkge1xuICAgICAgICB2YXIgZWxtbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBrZ1NsaWRlclwiKVxuICAgICAgICBsZXQgb3V0ZXJEaXZXaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwa2dTbGlkZXJDb250YWluZXJcIilbMF0ub2Zmc2V0V2lkdGhcbiAgICAgICAgbGV0IGNoaWxkRGl2V2lkdGggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwa2dDYXJkc0xpc3QnKVswXS5vZmZzZXRXaWR0aFxuICAgICAgICBsZXQgY2FyZENvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGtnQ2FyZHNMaXN0JylbMF0uY2hpbGRFbGVtZW50Q291bnRcbiAgICAgICAgbGV0IGNhcmRXaWR0aCA9IE1hdGguY2VpbChjaGlsZERpdldpZHRoIC8gY2FyZENvdW50KVxuXG4gICAgICAgIGxldCBsZWZ0U2Nyb2xsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwa2dTbGlkZXJcIikuc2Nyb2xsTGVmdFxuICAgICAgICBsZXQgc2Nyb2xsVmFsID0gTWF0aC5mbG9vcihvdXRlckRpdldpZHRoIC8gY2FyZFdpZHRoKSAqIGNhcmRXaWR0aFxuICAgICAgICBsZXQgY2FyZEVuZCA9IGNhcmRDb3VudCAqIGNhcmRXaWR0aFxuXG4gICAgICAgIGlmICh0eXBlID09ICdyaWdodCcpIHtcbiAgICAgICAgICAgIGVsbW50LnNjcm9sbCh7IGxlZnQ6IGxlZnRTY3JvbGwgKyBzY3JvbGxWYWwsIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgICAgICAgaWYgKGNhcmRFbmQgPD0gbGVmdFNjcm9sbCArIHNjcm9sbFZhbCArIG91dGVyRGl2V2lkdGgpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdEFycm93JykuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1JpZ2h0QXJyb3cnKS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbG1udC5zY3JvbGwoeyBsZWZ0OiBsZWZ0U2Nyb2xsIC0gc2Nyb2xsVmFsLCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgICAgICAgIGlmIChsZWZ0U2Nyb2xsIC0gc2Nyb2xsVmFsIDw9IDApIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUmlnaHRBcnJvdycpLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0QXJyb3cnKS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnb2xkQ2xpY2tlZCgpe1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSG9tZVBhY2thZ2VHb2xkQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3ZpcC1ob21lcGFnZS1wYWNrYWdlLWdvbGQtY2xpY2tlZCdcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnlPYmoucHVzaCgnL3ZpcC1nb2xkLWRldGFpbHM/aXNfZ29sZD10cnVlJnNvdXJjZT1ob21lcGFnZXBhY2thZ2Vnb2xkbGlzdGluZyZsZWFkX3NvdXJjZT1Eb2NwcmltZScpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWtnLXNsaWRlci1jb250YWluZXIgbXQtMTAgbWItM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnU2xpZGVySGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDU+UG9wdWxhciBIZWFsdGggUGFja2FnZXM8L2g1PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLm5hdmlnYXRlVG8uYmluZCh0aGlzLCB0aGlzLnByb3BzLm5hdlRvKX0+VmlldyBBbGw8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2dTbGlkZXJDb250YWluZXJcIiBpZD1cInBrZ1NsaWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGtnQ2FyZHNMaXN0IGQtaW5saW5lLWZsZXgnPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubGlzdC5tYXAoKGxpc3RJdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17YHBrZ2N1c3RDYXJkcyAke3R5cGU/Jyc6Jyd9YH0ga2V5PXtpfSBvbkNsaWNrPXt0aGlzLnByb3BzLnNlYXJjaEZ1bmMuYmluZCh0aGlzLCBsaXN0SXRlbSwgdHJ1ZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPHNwYW4gc3R5bGU9e3tmb250U2l6ZTonMTBweCd9fSBjbGFzc05hbWU9XCJvZnItcmliYm9uIGhvbWUtb2ZyLXJpYmJvblwiPnt0aGlzLnByb3BzLmRpc2NvdW50fSBPZmY8L3NwYW4+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ2NhcmRJbWdDb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e2xpc3RJdGVtLmljb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJwa2d0c3ROYW1lXCI+e2xpc3RJdGVtLm5hbWV9IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibmV3cGtnSW5jbHVkZVwiPntsaXN0SXRlbS5ub19vZl90ZXN0c30gdGVzdHMgaW5jbHVkZWQgPC9wPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBrZ3RzdE5hbWVcIj57bGlzdEl0ZW0ubmFtZX0ge2xpc3RJdGVtLm5vX29mX3Rlc3RzID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCgke2xpc3RJdGVtLm5vX29mX3Rlc3RzfSB0ZXN0cylgIDogJyd9PC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2ZvciBsb2dpbiwgZ29sZCBlbmFibGVkIG1lbWJlciBvciB2aXAgZW5hYmxlZCBtZW1iZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW0udmlwICYmICggbGlzdEl0ZW0udmlwLmlzX2dvbGRfbWVtYmVyIHx8IGxpc3RJdGVtLnZpcC5pc192aXBfbWVtYmVyICkgJiYgbGlzdEl0ZW0udmlwLmNvdmVyZWRfdW5kZXJfdmlwID8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnLWNhcmQtcHJpY2Utb2ZmclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2ctcHJjLWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW0udmlwLmlzX2dvbGRfbWVtYmVyP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPuKCuSB7bGlzdEl0ZW0udmlwLnZpcF9hbW91bnQrIGxpc3RJdGVtLnZpcC52aXBfY29udmVuaWVuY2VfYW1vdW50fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGtnLW9mci1jdXQtcHJjXCI+4oK5IHtsaXN0SXRlbS5tcnB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7d2lkdGg6ICcyMHB4JywnbWFyZ2luTGVmdCc6ICc1cHgnfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9nb2xkLXNtLnBuZyd9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxwPuKCuSB7bGlzdEl0ZW0udmlwLnZpcF9hbW91bnR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwa2ctb2ZyLWN1dC1wcmNcIj7igrkge2xpc3RJdGVtLm1ycH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3t3aWR0aDogJzIwcHgnLCdtYXJnaW5MZWZ0JzogJzVweCd9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcGxvZy5wbmcnfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2ctY2FyZC1wcmljZS1vZmZyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbS5kaXNjb3VudGVkX3ByaWNlID09IGxpc3RJdGVtLm1ycD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2ctcHJjLWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7igrkge2xpc3RJdGVtLm1ycH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8ZGl2IGNsYXNzTmFtZT1cInBrZy1wcmMtY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPuKCuSB7bGlzdEl0ZW0uZGlzY291bnRlZF9wcmljZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGtnLW9mci1jdXQtcHJjXCI+4oK5IHtsaXN0SXRlbS5tcnB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludCgoKGxpc3RJdGVtLm1ycCAtIGxpc3RJdGVtLmRpc2NvdW50ZWRfcHJpY2UpIC8gbGlzdEl0ZW0ubXJwKSAqIDEwMCkhPTAgJiYgKGxpc3RJdGVtLmRpc2NvdW50ZWRfcHJpY2UgIT0gbGlzdEl0ZW0ubXJwKT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGtnLWhsdGgtb2ZmZXJcIj57cGFyc2VJbnQoKChsaXN0SXRlbS5tcnAgLSBsaXN0SXRlbS5kaXNjb3VudGVkX3ByaWNlKSAvIGxpc3RJdGVtLm1ycCkgKiAxMDApfSUgT0ZGPC9zcGFuPjonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhbGlzdEl0ZW0udmlwLmlzX2dvbGRfbWVtYmVyICYmICFsaXN0SXRlbS52aXAuaXNfdmlwX21lbWJlciAmJiBsaXN0SXRlbS5kaXNjb3VudGVkX3ByaWNlPihsaXN0SXRlbS52aXAudmlwX2NvbnZlbmllbmNlX2Ftb3VudCArIGxpc3RJdGVtLnZpcC52aXBfZ29sZF9wcmljZSkgJiYgbGlzdEl0ZW0udmlwLmlzX2dvbGQgJiYgbGlzdEl0ZW0udmlwLmlzX2VuYWJsZV9mb3JfdmlwP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZy1wcmMtY3QgaG9tZS1zY3JlZW5nb2xkcHJpY2VcIiBvbkNsaWNrPXt0aGlzLmdvbGRDbGlja2VkLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOiAnMzJweCcsJ21hcmdpblJpZ2h0JzogJzVweCd9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2dvbGQtc20ucG5nJ30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UHJpY2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOidibGFjayd9fT7igrkge2xpc3RJdGVtLnZpcC52aXBfZ29sZF9wcmljZSsgbGlzdEl0ZW0udmlwLnZpcF9jb252ZW5pZW5jZV9hbW91bnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3RyYW5zZm9ybTogJ3JvdGF0ZSgtOTBkZWcpJywgd2lkdGg6ICcxMHB4JywgbWFyZ2luOicwcHggMTBweCAwcHggMHB4J319IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnJ30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8vIHtsaXN0SXRlbS5tcnAgJiYgbGlzdEl0ZW0uZGlzY291bnRlZF9wcmljZSA/IGxpc3RJdGVtLnZpcCAmJiBsaXN0SXRlbS52aXAuaXNfdmlwX21lbWJlciAmJiBsaXN0SXRlbS52aXAuY292ZXJlZF91bmRlcl92aXA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2ctY2FyZC1wcmljZS1vZmZyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbS52aXAuaXNfZ29sZF9tZW1iZXI/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnLXByYy1jdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPHA+4oK5IHtsaXN0SXRlbS52aXAudmlwX2Ftb3VudCsgbGlzdEl0ZW0udmlwLnZpcF9jb252ZW5pZW5jZV9hbW91bnR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBrZy1vZnItY3V0LXByY1wiPuKCuSB7bGlzdEl0ZW0ubXJwfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7d2lkdGg6ICcyMHB4JywnbWFyZ2luTGVmdCc6ICc1cHgnfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9nb2xkLXNtLnBuZyd9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDpsaXN0SXRlbS52aXAuaXNfdmlwX21lbWJlcj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2ctcHJjLWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8cD7igrkge2xpc3RJdGVtLnZpcC52aXBfYW1vdW50fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwa2ctb2ZyLWN1dC1wcmNcIj7igrkge2xpc3RJdGVtLm1ycH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOiAnMjBweCcsJ21hcmdpbkxlZnQnOiAnNXB4J319IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwbG9nLnBuZyd9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgOjxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnLWNhcmQtcHJpY2Utb2ZmclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW0uZGlzY291bnRlZF9wcmljZSA9PSBsaXN0SXRlbS5tcnA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnLXByYy1jdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPHA+4oK5IHtsaXN0SXRlbS5tcnB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA6PGRpdiBjbGFzc05hbWU9XCJwa2ctcHJjLWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8cD7igrkge2xpc3RJdGVtLmRpc2NvdW50ZWRfcHJpY2V9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBrZy1vZnItY3V0LXByY1wiPuKCuSB7bGlzdEl0ZW0ubXJwfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoKChsaXN0SXRlbS5tcnAgLSBsaXN0SXRlbS5kaXNjb3VudGVkX3ByaWNlKSAvIGxpc3RJdGVtLm1ycCkgKiAxMDApIT0wICYmIChsaXN0SXRlbS5kaXNjb3VudGVkX3ByaWNlICE9IGxpc3RJdGVtLm1ycCk/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBrZy1obHRoLW9mZmVyXCI+e3BhcnNlSW50KCgobGlzdEl0ZW0ubXJwIC0gbGlzdEl0ZW0uZGlzY291bnRlZF9wcmljZSkgLyBsaXN0SXRlbS5tcnApICogMTAwKX0lIE9GRjwvc3Bhbj46JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgIWxpc3RJdGVtLnZpcC5pc19nb2xkX21lbWJlciAmJiAhbGlzdEl0ZW0udmlwLmlzX3ZpcF9tZW1iZXIgJiYgbGlzdEl0ZW0uZGlzY291bnRlZF9wcmljZT4obGlzdEl0ZW0udmlwLnZpcF9jb252ZW5pZW5jZV9hbW91bnR8fDAgKyBsaXN0SXRlbS52aXAudmlwX2dvbGRfcHJpY2V8fDApICYmIGxpc3RJdGVtLnZpcC5pc19nb2xkP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZy1wcmMtY3QgaG9tZS1zY3JlZW5nb2xkcHJpY2VcIiBvbkNsaWNrPXt0aGlzLmdvbGRDbGlja2VkLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOiAnMzJweCcsJ21hcmdpblJpZ2h0JzogJzVweCd9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2dvbGQtc20ucG5nJ30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UHJpY2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8cD7igrkge2xpc3RJdGVtLnZpcC52aXBfZ29sZF9wcmljZSsgbGlzdEl0ZW0udmlwLnZpcF9jb252ZW5pZW5jZV9hbW91bnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3RyYW5zZm9ybTogJ3JvdGF0ZSgtOTBkZWcpJywgd2lkdGg6ICcxMHB4JywgbWFyZ2luOicwcHggMTBweCAwcHggMHB4J319IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnJ30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2dsZnRSaHRidG5jb250XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnLWJ0bmxmdCBkLW5vbmVcIiBpZD1cIlJpZ2h0QXJyb3dcIiBvbkNsaWNrPXt0aGlzLnNjcm9sbC5iaW5kKHRoaXMsICdsZWZ0Jyl9PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnLWJ0bnJndFwiIGlkPVwibGVmdEFycm93XCIgb25DbGljaz17dGhpcy5zY3JvbGwuYmluZCh0aGlzLCAncmlnaHQnKX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZVBhY2thZ2VXaWRnZXQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuXG5jbGFzcyBUb3BQcm9jZWR1cmVXaWRnZXRzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG5cbiAgICBuYXZpZ2F0ZVRvKGRhdGEsIGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgbGV0IHNlbGVjdGVkQ3JpdGVyaWEgPSB7XG4gICAgICAgICAgICB0eXBlOiAnaXBkJyxcbiAgICAgICAgICAgIGlkOiBkYXRhLmlkLFxuICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBndG1EYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdIb21lV2lkZ2V0UHJvY2VkdXJlQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2hvbWUtd2lkZ2V0LXByb2NlZHVyZS1jbGlja2VkJywgJ3NlbGVjdGVkJzogZGF0YS5uYW1lIHx8ICcnLCAnc2VsZWN0ZWRJZCc6IGRhdGEuaWQgfHwgJydcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuXG4gICAgICAgIHRoaXMucHJvcHMudG9nZ2xlSVBEQ3JpdGVyaWEoc2VsZWN0ZWRDcml0ZXJpYSwgdHJ1ZSlcbiAgICAgICAgXG4gICAgICAgIGlmKGRhdGEudXJsKXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeU9iai5wdXNoKGAvJHtkYXRhLnVybH0/c2hvd1BvcHVwPXRydWVgKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeU9iai5wdXNoKGAvaXBkSW5mbz9pcGRfaWQ9JHtkYXRhLmlkfSZzaG93UG9wdXA9dHJ1ZWApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzY3JvbGwodHlwZSkge1xuICAgICAgICB2YXIgZWxtbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvcF9pcGRcIilcbiAgICAgICAgbGV0IG91dGVyRGl2V2lkdGggPSBlbG1udC5vZmZzZXRXaWR0aFxuICAgICAgICBsZXQgY2hpbGREaXZXaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvcF9pcGRfbGlzdCcpWzBdLm9mZnNldFdpZHRoXG4gICAgICAgIGxldCBjYXJkQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0b3BfaXBkX2xpc3QnKVswXS5jaGlsZEVsZW1lbnRDb3VudFxuICAgICAgICBsZXQgY2FyZFdpZHRoID0gTWF0aC5jZWlsKGNoaWxkRGl2V2lkdGggLyBjYXJkQ291bnQpXG5cbiAgICAgICAgbGV0IGxlZnRTY3JvbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvcF9pcGRcIikuc2Nyb2xsTGVmdFxuICAgICAgICBsZXQgc2Nyb2xsVmFsID0gTWF0aC5mbG9vcihvdXRlckRpdldpZHRoIC8gY2FyZFdpZHRoKSAqIGNhcmRXaWR0aFxuICAgICAgICBsZXQgY2FyZEVuZCA9IGNhcmRDb3VudCAqIGNhcmRXaWR0aFxuXG4gICAgICAgIGlmICh0eXBlID09ICdyaWdodCcpIHtcbiAgICAgICAgICAgIGVsbW50LnNjcm9sbCh7IGxlZnQ6IGxlZnRTY3JvbGwgKyBzY3JvbGxWYWwsIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgICAgICAgaWYgKGNhcmRFbmQgPD0gbGVmdFNjcm9sbCArIHNjcm9sbFZhbCArIG91dGVyRGl2V2lkdGgpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdEFycm93X2lwZCcpLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdSaWdodEFycm93X2lwZCcpLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsbW50LnNjcm9sbCh7IGxlZnQ6IGxlZnRTY3JvbGwgLSBzY3JvbGxWYWwsIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgICAgICAgaWYgKGxlZnRTY3JvbGwgLSBzY3JvbGxWYWwgPD0gMCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdSaWdodEFycm93X2lwZCcpLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0QXJyb3dfaXBkJykuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKVxuICAgICAgICB9XG4gICAgfVxuXHRcblx0cmVuZGVyKCl7XG5cblx0XHRyZXR1cm4oXG5cdFx0ICAgICA8ZGl2IGNsYXNzTmFtZT1cInBha2ctc2xpZGVyLWNvbnRhaW5lciBtdC0xMCBtYi0xMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnU2xpZGVySGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDU+VG9wIFByb2NlZHVyZXM8L2g1PlxuICAgICAgICAgICAgICAgICAgICB7Lyo8c3Bhbj5WaWV3IEFsbDwvc3Bhbj4qL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ1NsaWRlckNvbnRhaW5lclwiIGlkPVwidG9wX2lwZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGtnQ2FyZHNMaXN0IGQtaW5saW5lLWZsZXggc3ViLXdkLWNhcmRzIHRvcF9pcGRfbGlzdCc+XG4gICAgICAgICAgICAgICAgICAgIFx0e1xuICAgICAgICAgICAgICAgICAgICBcdFx0dGhpcy5wcm9wcy50b3BfZGF0YS5tYXAoKGRhdGEsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgXHRcdFx0cmV0dXJuIDxhIGhyZWY9e2RhdGEudXJsP2Ake2RhdGEudXJsfWA6YGlwZEluZm8/aXBkX2lkPSR7ZGF0YS5pZH1gfSBjbGFzc05hbWU9XCJwa2djdXN0Q2FyZHNcIiBrZXk9e3RoaXMucHJvcHMubWVyZ2VTdGF0ZT9pOmRhdGEudXJsP2RhdGEudXJsOml9IG9uQ2xpY2s9e3RoaXMubmF2aWdhdGVUby5iaW5kKHRoaXMsIGRhdGEpfT5cblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnY2FyZEltZ0NvbnRcIj5cblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17ZGF0YS5zdmdfaWNvbj9kYXRhLnN2Z19pY29uOmRhdGEuaWNvbn0gLz5cblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGtndHN0TmFtZSBwcmNkLWhlaWdodFwiPlxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm5hbWV9XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIFx0PC9wPlxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHRcdFxuICAgICAgICAgICAgICAgICAgICBcdFx0fSlcbiAgICAgICAgICAgICAgICAgICAgXHR9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnbGZ0Umh0YnRuY29udFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZy1idG5sZnQgZC1ub25lXCIgaWQ9XCJSaWdodEFycm93X2lwZFwiIG9uQ2xpY2s9e3RoaXMuc2Nyb2xsLmJpbmQodGhpcywgJ2xlZnQnKX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2ctYnRucmd0XCIgaWQ9XCJsZWZ0QXJyb3dfaXBkXCIgb25DbGljaz17dGhpcy5zY3JvbGwuYmluZCh0aGlzLCAncmlnaHQnKX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb3BQcm9jZWR1cmVXaWRnZXRzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcblxuY2xhc3MgVG9wSG9zcGl0YWxXaWRnZXRzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbWVyZ2VkU3RhdGU6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICBpZighdGhpcy5wcm9wcy50b3BIb3NwaXRhbCl7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttZXJnZWRTdGF0ZTogdHJ1ZX0pXG4gICAgICAgIH1cbiAgICB9XG5cblx0bmF2aWdhdGVUbyhkYXRhLCBlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGxldCBndG1EYXRhID0ge31cbiAgICAgICAgaWYodGhpcy5wcm9wcy50b3BIb3NwaXRhbCkge1xuICAgICAgICAgICAgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSG9tZVdpZGdldEhvc3BpdGFsQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2hvbWUtd2lkZ2V0LWhvc3BpdGFsLWNsaWNrZWQnLCAnc2VsZWN0ZWQnOiAnJywgJ3NlbGVjdGVkSWQnOiBkYXRhLmlkIHx8ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSG9tZVdpZGdldE5lYXJieUhvc3BpdGFsQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2hvbWUtd2lkZ2V0LW5lYXJieS1ob3NwaXRhbC1jbGlja2VkJywgJ3NlbGVjdGVkJzogJycsICdzZWxlY3RlZElkJzogZGF0YS5pZCB8fCAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuXG4gICAgICAgIGxldCByZWRpcmVjdFVybCA9ICcnXG5cbiAgICAgICAgaWYoZGF0YS51cmwpIHtcbiAgICAgICAgICAgIHJlZGlyZWN0VXJsID0gYC8ke2RhdGEudXJsfWBcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgcmVkaXJlY3RVcmwgPSBgL2lwZC9ob3NwaXRhbC8ke2RhdGEuaWR9YFxuICAgICAgICB9XG5cbiAgICAgICAgaWYoZGF0YS5pc19pcGRfaG9zcGl0YWwpIHtcbiAgICAgICAgICAgIHJlZGlyZWN0VXJsKz0gYD9zaG93UG9wdXA9dHJ1ZWBcbiAgICAgICAgfVxuXG4gICAgICAgIC8qaWYodGhpcy5wcm9wcy5pc19pcGRfZm9ybV9zdWJtaXR0ZWQpe1xuXG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHJlZGlyZWN0VXJsKz0gJyZnZXRfZmVlZGJhY2s9MSdcbiAgICAgICAgfSovXG5cbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5T2JqLnB1c2gocmVkaXJlY3RVcmwpXG4gICAgfVxuXG4gICAgc2Nyb2xsKHR5cGUpIHtcbiAgICAgICAgbGV0IGRhdGFUeXBlID0gdGhpcy5wcm9wcy5kYXRhVHlwZVxuICAgICAgICBsZXQgZGF0YUxpc3QgPSBgJHt0aGlzLnByb3BzLmRhdGFUeXBlfV9saXN0YFxuICAgICAgICB2YXIgZWxtbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhVHlwZSlcbiAgICAgICAgbGV0IG91dGVyRGl2V2lkdGggPSBlbG1udC5vZmZzZXRXaWR0aFxuICAgICAgICBsZXQgY2hpbGREaXZXaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZGF0YUxpc3QpWzBdLm9mZnNldFdpZHRoXG4gICAgICAgIGxldCBjYXJkQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGRhdGFMaXN0KVswXS5jaGlsZEVsZW1lbnRDb3VudFxuICAgICAgICBsZXQgY2FyZFdpZHRoID0gTWF0aC5jZWlsKGNoaWxkRGl2V2lkdGggLyBjYXJkQ291bnQpXG5cbiAgICAgICAgbGV0IGxlZnRTY3JvbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhVHlwZSkuc2Nyb2xsTGVmdFxuICAgICAgICBsZXQgc2Nyb2xsVmFsID0gTWF0aC5mbG9vcihvdXRlckRpdldpZHRoIC8gY2FyZFdpZHRoKSAqIGNhcmRXaWR0aFxuICAgICAgICBsZXQgY2FyZEVuZCA9IGNhcmRDb3VudCAqIGNhcmRXaWR0aFxuXG4gICAgICAgIGlmICh0eXBlID09ICdyaWdodCcpIHtcbiAgICAgICAgICAgIGVsbW50LnNjcm9sbCh7IGxlZnQ6IGxlZnRTY3JvbGwgKyBzY3JvbGxWYWwsIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgICAgICAgaWYgKGNhcmRFbmQgPD0gbGVmdFNjcm9sbCArIHNjcm9sbFZhbCArIG91dGVyRGl2V2lkdGgpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtkYXRhVHlwZX1fbGVmdEFycm93X2hzcHRsYCkuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZGF0YVR5cGV9X1JpZ2h0QXJyb3dfaHNwdGxgKS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbG1udC5zY3JvbGwoeyBsZWZ0OiBsZWZ0U2Nyb2xsIC0gc2Nyb2xsVmFsLCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgICAgICAgIGlmIChsZWZ0U2Nyb2xsIC0gc2Nyb2xsVmFsIDw9IDApIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtkYXRhVHlwZX1fUmlnaHRBcnJvd19oc3B0bGApLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2RhdGFUeXBlfV9sZWZ0QXJyb3dfaHNwdGxgKS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2aWV3QWxsQ2xpY2tlZCgpe1xuICAgICAgICB0aGlzLnByb3BzLm5lYXJieUhvc3BpdGFsVmlld0FsbENsaWNrZWQoKTtcbiAgICB9XG5cdFxuXHRyZW5kZXIoKXtcbiAgICAgICAgXG4gICAgICAgIGxldCB7IHRvcEhlYWRpbmcsIGRhdGFUeXBlLCBzaG93Vmlld0FsbCB9ICA9IHRoaXMucHJvcHNcblx0XHRyZXR1cm4oXG5cdFx0ICAgICA8ZGl2IGNsYXNzTmFtZT1cInBha2ctc2xpZGVyLWNvbnRhaW5lciBtYi0xMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnU2xpZGVySGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDU+e3RvcEhlYWRpbmd9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1ZpZXdBbGwgJiYgdGhpcy5wcm9wcy50b3BfZGF0YS5sZW5ndGggPj0yMCAmJiA8c3BhbiBvbkNsaWNrPXsoKT0+dGhpcy52aWV3QWxsQ2xpY2tlZCgpfT5WaWV3IEFsbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnU2xpZGVyQ29udGFpbmVyXCIgaWQ9e2RhdGFUeXBlfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwa2dDYXJkc0xpc3QgZC1pbmxpbmUtZmxleCBzdWItd2QtY2FyZHMgJHtkYXRhVHlwZX1fbGlzdGB9PlxuICAgICAgICAgICAgICAgICAgICBcdHtcbiAgICAgICAgICAgICAgICAgICAgXHRcdHRoaXMucHJvcHMudG9wX2RhdGEuc2xpY2UoMCwyMCkubWFwKChkYXRhLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFx0XHRcdHJldHVybiA8YSBrZXk9e3RoaXMuc3RhdGUubWVyZ2VkU3RhdGU/YCR7aX1fbGlzdF8ke2RhdGFUeXBlfWA6ZGF0YS51cmw/ZGF0YS51cmw6YCR7ZGF0YS5pZH1fJHtkYXRhVHlwZX1gfSBocmVmPXtkYXRhLnVybD9gLyR7ZGF0YS51cmx9YDpgL2lwZC9ob3NwaXRhbC8ke2RhdGEuaWR9YH0gY2xhc3NOYW1lPVwicGtnY3VzdENhcmRzXCIgb25DbGljaz17dGhpcy5uYXZpZ2F0ZVRvLmJpbmQodGhpcywgZGF0YSl9PlxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2djYXJkSW1nQ29udFwiPlxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3t3aWR0aDo4Mn19IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17ZGF0YS5zdmdfaWNvbj9kYXRhLnN2Z19pY29uOmRhdGEubG9nb30gLz5cblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGtndHN0TmFtZVwiPlxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLnNlb190aXRsZT9kYXRhLnNlb190aXRsZTpkYXRhLmgxX3RpdGxlP2RhdGEuaDFfdGl0bGU6ZGF0YS5uYW1lfVxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICBcdDwvcD5cblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlx0XHRcbiAgICAgICAgICAgICAgICAgICAgXHRcdH0pXG4gICAgICAgICAgICAgICAgICAgIFx0fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ2xmdFJodGJ0bmNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2ctYnRubGZ0IGQtbm9uZVwiIGlkPXtgJHtkYXRhVHlwZX1fUmlnaHRBcnJvd19oc3B0bGB9IG9uQ2xpY2s9e3RoaXMuc2Nyb2xsLmJpbmQodGhpcywgJ2xlZnQnKX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2ctYnRucmd0XCIgaWQ9e2Ake2RhdGFUeXBlfV9sZWZ0QXJyb3dfaHNwdGxgfSBvbkNsaWNrPXt0aGlzLnNjcm9sbC5iaW5kKHRoaXMsICdyaWdodCcpfT48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvcEhvc3BpdGFsV2lkZ2V0cyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcblxuY2xhc3MgVXBDb21pbmdBcHBvaW50bWVudFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpbmRleDowLFxuICAgICAgICAgICAgc3RhcnRYOjAsXG4gICAgICAgICAgICBzdGFydFk6MCxcbiAgICAgICAgICAgIGRpc3RYOjAsXG4gICAgICAgICAgICBkaXN0WTowLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd0FwcG9pbnRtZW50KGFwcG9pbnRtZW50X3R5cGUsYXBwb2ludG1lbnRfaWQsZSl7XG4gICAgICAgIGlmKGFwcG9pbnRtZW50X3R5cGUgPT0gJ2RvY3Rvcicpe1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9vcGQvYXBwb2ludG1lbnQvJHthcHBvaW50bWVudF9pZH1gKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvbGFiL2FwcG9pbnRtZW50LyR7YXBwb2ludG1lbnRfaWR9YClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFRpbWUodW5peF90aW1lc3RhbXApIHtcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh1bml4X3RpbWVzdGFtcClcbiAgICAgICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgICAgICB2YXIgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xuICAgICAgICB2YXIgYW1wbSA9IGhvdXJzID49IDEyID8gJ3BtJyA6ICdhbSc7XG4gICAgICAgIGhvdXJzID0gaG91cnMgJSAxMjtcbiAgICAgICAgaG91cnMgPSBob3VycyA/IGhvdXJzIDogMTI7IC8vIHRoZSBob3VyICcwJyBzaG91bGQgYmUgJzEyJ1xuICAgICAgICBtaW51dGVzID0gbWludXRlcyA8IDEwID8gJzAnICsgbWludXRlcyA6IG1pbnV0ZXM7XG4gICAgICAgIHZhciBzdHJUaW1lID0gaG91cnMgKyAnOicgKyBtaW51dGVzICsgJyAnICsgYW1wbTtcbiAgICAgICAgcmV0dXJuIHN0clRpbWU7XG4gICAgfVxuXG4gICAgZ2V0RGF0ZSh1bml4X2RhdGUpe1xuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHVuaXhfZGF0ZSlcbiAgICAgICAgbGV0IG5ld0RhdGU9IGRhdGUudG9EYXRlU3RyaW5nKClcbiAgICAgICAgcmV0dXJuIG5ld0RhdGVcbiAgICB9XG5cbiAgICBvblRvdWNoU3RhcnQoZXZlbnQpe1xuICAgICAgICBsZXQgdG91Y2hvYmogPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgdGhpcy5zdGF0ZS5zdGFydFg9dG91Y2hvYmoucGFnZVg7XG4gICAgICAgIHRoaXMuc3RhdGUuc3RhcnRZPXRvdWNob2JqLnBhZ2VZO1xuICAgICAgICBsZXQgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICB9XG5cbiAgICBvblRvdWNoTW92ZShldmVudCl7XG4gICAgICAgIGxldCB0b3VjaG9iaiA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICB0aGlzLnN0YXRlLmRpc3RYID0gdG91Y2hvYmoucGFnZVggLSB0aGlzLnN0YXRlLnN0YXJ0WDtcbiAgICAgICAgdGhpcy5zdGF0ZS5kaXN0WSA9IHRvdWNob2JqLnBhZ2VZIC0gdGhpcy5zdGF0ZS5zdGFydFk7IFxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zdGFydFggLSB0b3VjaG9iai5wYWdlWCA+IDUgfHwgdG91Y2hvYmoucGFnZVggLSB0aGlzLnN0YXRlLnN0YXJ0WCA+IDUpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdClcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblRvdWNoRW5kKGV2ZW50KXtcbiAgICAgICAgbGV0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICAgIGxldCB0b3VjaG9iaiA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdXG4gICAgICAgIGxldCB0b3RhbEFwcG9pbnRtZW50cyA9ICcnXG4gICAgICAgIGxldCBjdXJyX2luZGV4XG4gICAgICAgIHRoaXMuc3RhdGUuZGlzdFggPSB0b3VjaG9iai5wYWdlWCAtIHRoaXMuc3RhdGUuc3RhcnRYXG4gICAgICAgIHRoaXMuc3RhdGUuZGlzdFkgPSB0b3VjaG9iai5wYWdlWSAtIHRoaXMuc3RhdGUuc3RhcnRZXG4gICAgICAgIGxldCBlbGFwc2VkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnRUaW1lXG4gICAgICAgIGlmKGVsYXBzZWRUaW1lPD00MDApe1xuICAgICAgICAgICAgaWYoTWF0aC5hYnModGhpcy5zdGF0ZS5kaXN0WCkgPj0gNTAgJiYgTWF0aC5hYnModGhpcy5zdGF0ZS5kaXN0WSkgPD0gMTAwKXtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnN0YXRlLmRpc3RYPDApe1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy51cGNvbWluZ19hcHBvaW50bWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsQXBwb2ludG1lbnRzID0gdGhpcy5wcm9wcy51cGNvbWluZ19hcHBvaW50bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vycl9pbmRleCA9IHRoaXMuc3RhdGUuaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJfaW5kZXggPSBjdXJyX2luZGV4ICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJfaW5kZXggPj0gdG90YWxBcHBvaW50bWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyX2luZGV4ID0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGluZGV4OiBjdXJyX2luZGV4IH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub2ZmZXJMaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbEFwcG9pbnRtZW50cyA9IHRoaXMucHJvcHMudXBjb21pbmdfYXBwb2ludG1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJfaW5kZXggPSB0aGlzLnN0YXRlLmluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyX2luZGV4ID0gY3Vycl9pbmRleCAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGN1cnJfaW5kZXggPCAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyX2luZGV4ID0gdG90YWxBcHBvaW50bWVudHMgLTFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbmRleDogY3Vycl9pbmRleCB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGlmKHRoaXMucHJvcHMudXBjb21pbmdfYXBwb2ludG1lbnRzICYmIHRoaXMucHJvcHMudXBjb21pbmdfYXBwb2ludG1lbnRzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgbGV0IGFwcG9pbnRtZW50ID0ge31cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy51cGNvbWluZ19hcHBvaW50bWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwb2ludG1lbnQgPSB0aGlzLnByb3BzLnVwY29taW5nX2FwcG9pbnRtZW50c1t0aGlzLnN0YXRlLmluZGV4XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjc3RtLWNhcmQgYXB0bW50LWNhcmQgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlsZDFcIiBvblRvdWNoU3RhcnQ9e3RoaXMub25Ub3VjaFN0YXJ0LmJpbmQodGhpcyl9IG9uVG91Y2hNb3ZlPXt0aGlzLm9uVG91Y2hNb3ZlLmJpbmQodGhpcyl9IG9uVG91Y2hFbmQ9e3RoaXMub25Ub3VjaEVuZC5iaW5kKHRoaXMpfSBvbkNsaWNrPXt0aGlzLnNob3dBcHBvaW50bWVudC5iaW5kKHRoaXMsYXBwb2ludG1lbnQudHlwZSxhcHBvaW50bWVudC5pZCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtbCBsZWZ0QmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1hZ2VzL2ljLXRpbWUtZGF0ZS5wbmdcIn0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkFwcG9pbnRtZW50IGZvciB7YXBwb2ludG1lbnQucGF0aWVudF9uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS10aW1lXCI+T24ge3RoaXMuZ2V0RGF0ZShhcHBvaW50bWVudC50aW1lX3Nsb3Rfc3RhcnQpfSwge3RoaXMuZ2V0VGltZShhcHBvaW50bWVudC50aW1lX3Nsb3Rfc3RhcnQpfSA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+IHtgd2l0aCAke2FwcG9pbnRtZW50LnR5cGU9PVwiZG9jdG9yXCI/J0RyLic6Jyd9ICR7YXBwb2ludG1lbnQubmFtZX1gfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0QmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzc05hbWU9XCJhbmNoci1pbWdcIiBvbkNsaWNrPXt0aGlzLnNob3dBcHBvaW50bWVudC5iaW5kKHRoaXMsYXBwb2ludG1lbnQudHlwZSxhcHBvaW50bWVudC5pZCl9PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWFnZXMvcmlnaHQtYXJyb3cuc3ZnXCJ9IGFsdD1cIlwiIC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVwY29taW5nX2FwcG9pbnRtZW50cyAmJiB0aGlzLnByb3BzLnVwY29taW5nX2FwcG9pbnRtZW50cy5sZW5ndGggPjE/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pbmRpY2F0b3JzIGNyc2wtaW5kaWNhdG9ycyBjci1pbmRpY2F0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51cGNvbWluZ19hcHBvaW50bWVudHMgJiYgdGhpcy5wcm9wcy51cGNvbWluZ19hcHBvaW50bWVudHMubWFwKChhcHBvaW50bWVudERvdHMsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4ga2V5PXtpfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgaW5kZXg6IGkgfSl9IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5pbmRleCA9PSBpID8gXCJhY3RpdmVcIiA6ICcnfSA+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuKDxkaXY+PC9kaXY+KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFVwQ29taW5nQXBwb2ludG1lbnRWaWV3XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEluaXRpYWxzUGljdHVyZSBmcm9tICcuLi8uLi8uLi9jb21tb25zL2luaXRpYWxzUGljdHVyZSdcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5cbmltcG9ydCB7IGJ1aWxkT3BlbkJhbm5lciB9IGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5pbXBvcnQgeyBYX09LIH0gZnJvbSAnY29uc3RhbnRzJztcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuXG5jbGFzcyBQYWNrYWdlQ29tcGFyZVN0cmlwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZT17XG4gICAgICAgICAgICBjaGVja2VkOmZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wYXJlUGFja2FnZXMoKXtcbiAgICAgIGlmKHRoaXMucHJvcHMuY29tcGFyZV9wYWNrYWdlcy5sZW5ndGggPiA1KXtcbiAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJNYXggNSBwYWNrYWdlcyBjYW4gYmUgY29tcGFyZWRcIiB9KTtcbiAgICAgIH1lbHNle1xuICAgICAgICBsZXQgc2VsZWN0ZWRQa2dDb21wYXJlSWRzPVtdXG4gICAgICAgICAgaWYodGhpcy5wcm9wcy5jb21wYXJlX3BhY2thZ2VzKXtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb21wYXJlX3BhY2thZ2VzLm1hcCgocGFja2FnZXMsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUGtnQ29tcGFyZUlkcy5wdXNoKHBhY2thZ2VzLmlkKyctJytwYWNrYWdlcy5sYWJfaWQpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3BhY2thZ2UvY29tcGFyZT9wYWNrYWdlX2lkcz0nK3NlbGVjdGVkUGtnQ29tcGFyZUlkcykgICAgICBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhclBhY2thZ2UoKXtcbiAgICAgIHRoaXMucHJvcHMucmVzZXRQa2dDb21wYXJlKClcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb21wYXJlLXBhY2thZ2UtZm9vdGVyIGNtLWZvb3RlclwiPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29tcGFyZS1wYWNrYWdlcy1ob21lXCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhsdGgtdHh0XCI+e3RoaXMucHJvcHMuY29tcGFyZV9wYWNrYWdlcy5sZW5ndGh9IEhlYWx0aCBQYWNrYWdlIFNlbGVjdGVkPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGktYnRuLWNvbXBhcmVcIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBrZy1idG4tbndcIiBvbkNsaWNrPXt0aGlzLmNvbXBhcmVQYWNrYWdlcy5iaW5kKHRoaXMpfT5Db21wYXJlPC9hPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+PGltZyBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vY3AvYXNzZXRzL2ltZy9pY29ucy9jbG9zZS5wbmdcIiBhbHQ9XCJcIiAgb25DbGljaz17dGhpcy5jbGVhclBhY2thZ2UuYmluZCh0aGlzKX0vPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9zZWN0aW9uPiAgXG4gICAgICAgIClcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUGFja2FnZUNvbXBhcmVTdHJpcFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkT3BlbkJhbm5lcihsYWJfdGltaW5nLCBsYWJfdGltaW5nX2RhdGEgPSBbXSwgbmV4dF9sYWJfdGltaW5nLCBuZXh0X2xhYl90aW1pbmdfZGF0YSA9IG51bGwpIHtcbiAgICBsZXQgaXNfb3Blbl9ub3cgPSBmYWxzZVxuICAgIGxldCBvcGVuX25leHRfdG9kYXkgPSBmYWxzZVxuXG4gICAgbGV0IHRpbWVfbm93ID0gbmV3IERhdGUoKS5nZXRIb3VycygpICsgMC41XG4gICAgZm9yIChsZXQgbHRkIG9mIGxhYl90aW1pbmdfZGF0YSkge1xuICAgICAgICBpZiAodGltZV9ub3cgPD0gbHRkLmVuZCAmJiB0aW1lX25vdyA+PSBsdGQuc3RhcnQpIHtcbiAgICAgICAgICAgIGlzX29wZW5fbm93ID0gdHJ1ZVxuICAgICAgICAgICAgcmV0dXJuIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAxMiB9fSA+e2xhYl90aW1pbmd9PC9wPlxuICAgICAgICB9XG4gICAgICAgIGlmICh0aW1lX25vdyA8IGx0ZC5zdGFydCkge1xuICAgICAgICAgICAgb3Blbl9uZXh0X3RvZGF5ID0gbHRkLnN0YXJ0XG4gICAgICAgICAgICBvcGVuX25leHRfdG9kYXkgPSBfZGVjaW1hbFRvVGltZShvcGVuX25leHRfdG9kYXkpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9wZW5fbmV4dF90b2RheSkge1xuICAgICAgICByZXR1cm4gPHAgc3R5bGU9e3sgZm9udFNpemU6IDEyIH19ID5PcGVucyBuZXh0IGF0IHtvcGVuX25leHRfdG9kYXl9LCB0b2RheTwvcD5cbiAgICB9XG5cbiAgICBjb25zdCBXRUVLX0RBWVMgPSBbJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknLCAnU3VuZGF5J11cbiAgICBsZXQgbmV4dF9vcGVuID0gZmFsc2VcbiAgICBsZXQgbmV4dF9vcGVuX3RvZGF5ID0gXCJcIlxuICAgIGlmIChuZXh0X2xhYl90aW1pbmdfZGF0YSkge1xuICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpXG4gICAgICAgIGxldCB3ZWVrRGF5TnVtYmVyID0gdG9kYXkuZ2V0RGF5KClcbiAgICAgICAgd2Vla0RheU51bWJlciA9IHdlZWtEYXlOdW1iZXIgPT0gMCA/IDYgOiB3ZWVrRGF5TnVtYmVyIC0gMVxuICAgICAgICBmb3IgKGxldCBpIGluIG5leHRfbGFiX3RpbWluZ19kYXRhKSB7XG4gICAgICAgICAgICBuZXh0X29wZW4gPSBuZXh0X2xhYl90aW1pbmdfZGF0YVtpXVswXS5zdGFydFxuICAgICAgICAgICAgbmV4dF9vcGVuID0gX2RlY2ltYWxUb1RpbWUobmV4dF9vcGVuKVxuICAgICAgICAgICAgaWYgKGkgLSB3ZWVrRGF5TnVtYmVyID09IDEpIHtcbiAgICAgICAgICAgICAgICBuZXh0X29wZW5fdG9kYXkgPSAndG9tb3Jyb3cnXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5leHRfb3Blbl90b2RheSA9IFdFRUtfREFZU1tpXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAobmV4dF9vcGVuICYmIG5leHRfb3Blbl90b2RheSkge1xuICAgICAgICByZXR1cm4gPHAgc3R5bGU9e3sgZm9udFNpemU6IDEyIH19ID5PcGVucyBuZXh0IGF0IHtuZXh0X29wZW59LCB7bmV4dF9vcGVuX3RvZGF5fTwvcD5cbiAgICB9XG5cbiAgICByZXR1cm4gXCJDbG9zZWRcIlxuXG59XG5cblxuZnVuY3Rpb24gX2RlY2ltYWxUb1RpbWUodGltZSkge1xuICAgIHRpbWUgPSB0aW1lLnRvU3RyaW5nKClcbiAgICBsZXQgaG91cnMgPSB0aW1lLnNwbGl0KCcuJylbMF1cbiAgICBsZXQgbWludXRlcyA9IHRpbWUuc3BsaXQoJy4nKVsxXVxuICAgIGhvdXJzID0gcGFyc2VJbnQoaG91cnMpXG4gICAgaWYgKG1pbnV0ZXMgPT0gJzUnKSB7XG4gICAgICAgIG1pbnV0ZXMgPSAnOjMwJ1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1pbnV0ZXMgPSBcIlwiXG4gICAgfVxuICAgIGxldCBkYXlfdGltZSA9IFwiQU1cIlxuICAgIGlmIChob3VycyA+PSAxMikge1xuICAgICAgICBkYXlfdGltZSA9IFwiUE1cIlxuICAgIH1cbiAgICBob3VycyA9IGhvdXJzICUgMTJcbiAgICByZXR1cm4gYCR7aG91cnN9JHttaW51dGVzfSAke2RheV90aW1lfWBcbn0iXSwic291cmNlUm9vdCI6IiJ9